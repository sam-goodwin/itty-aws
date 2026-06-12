/**
 * Azure Iotoperations API
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
  display: Schema.optional(
    Schema.Struct({
      provider: Schema.optional(Schema.String),
      resource: Schema.optional(Schema.String),
      operation: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
    }),
  ),
  origin: Schema.optional(Schema.Literals(["user", "system", "user,system"])),
  actionType: Schema.optional(Schema.Literals(["Internal"])),
});
const InstanceResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const InstancePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  version: Schema.optional(Schema.String),
  schemaRegistryRef: Schema.suspend(() => SchemaRegistryRefSchema),
  defaultSecretProviderClassRef: Schema.optional(
    Schema.suspend(() => SecretProviderClassRefSchema),
  ),
  features: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => InstanceFeatureSchema),
    ),
  ),
  adrNamespaceRef: Schema.optional(
    Schema.suspend(() => AzureDeviceRegistryNamespaceRefSchema),
  ),
  healthState: Schema.optional(
    Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
  ),
});
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
  "Canceled",
  "Provisioning",
  "Updating",
  "Deleting",
  "Accepted",
]);
const SchemaRegistryRefSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.suspend(() => SchemaRegistryIDSchema),
});
const SchemaRegistryIDSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const SecretProviderClassRefSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.suspend(() => SecretProviderClassIDSchema),
});
const SecretProviderClassIDSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const InstanceFeatureSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.optional(Schema.suspend(() => InstanceFeatureModeSchema)),
  settings: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => OperationalModeSchema),
    ),
  ),
});
const InstanceFeatureModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Stable",
  "Preview",
  "Disabled",
]);
const OperationalModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const AzureDeviceRegistryNamespaceRefSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.suspend(() => AzureDeviceRegistryNamespaceIDSchema),
  });
const AzureDeviceRegistryNamespaceIDSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const ExtendedLocationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  type: Schema.suspend(() => ExtendedLocationTypeSchema),
});
const ExtendedLocationTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "CustomLocation",
]);
const ManagedServiceIdentityTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "SystemAssigned",
    "UserAssigned",
    "SystemAssigned,UserAssigned",
  ]);
const UserAssignedIdentitiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.suspend(() => UserAssignedIdentitySchema),
);
const UserAssignedIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
});
const AkriConnectorTemplateResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const AkriConnectorTemplatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    aioMetadata: Schema.optional(
      Schema.suspend(() => AkriConnectorTemplateAioMetadataSchema),
    ),
    runtimeConfiguration: Schema.suspend(
      () => AkriConnectorTemplateRuntimeConfigurationSchema,
    ),
    diagnostics: Schema.optional(
      Schema.suspend(() => AkriConnectorTemplateDiagnosticsSchema),
    ),
    deviceInboundEndpointTypes: Schema.Array(
      Schema.suspend(
        () => AkriConnectorTemplateDeviceInboundEndpointTypeSchema,
      ),
    ),
    mqttConnectionConfiguration: Schema.optional(
      Schema.suspend(() => AkriConnectorsMqttConnectionConfigurationSchema),
    ),
    connectorMetadataRef: Schema.optional(Schema.String),
    healthState: Schema.optional(
      Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
    ),
  });
const AkriConnectorTemplateAioMetadataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aioMinVersion: Schema.optional(Schema.String),
    aioMaxVersion: Schema.optional(Schema.String),
  });
const AkriConnectorTemplateRuntimeConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    runtimeConfigurationType: Schema.suspend(
      () => AkriConnectorTemplateRuntimeConfigurationTypeSchema,
    ),
  });
const AkriConnectorTemplateRuntimeConfigurationTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["ManagedConfiguration"]);
const AkriConnectorTemplateDiagnosticsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logs: Schema.suspend(() => AkriConnectorsDiagnosticsLogsSchema),
  });
const AkriConnectorsDiagnosticsLogsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    level: Schema.optional(Schema.String),
  });
const AkriConnectorTemplateDeviceInboundEndpointTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    endpointType: Schema.suspend(() => NonEmptyStringSchema),
    version: Schema.optional(Schema.suspend(() => NonEmptyStringSchema)),
  });
const NonEmptyStringSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const AkriConnectorsMqttConnectionConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authentication: Schema.optional(
      Schema.suspend(() => AkriConnectorsMqttAuthenticationSchema),
    ),
    host: Schema.optional(Schema.String),
    protocol: Schema.optional(
      Schema.suspend(() => AkriConnectorsMqttProtocolTypeSchema),
    ),
    keepAliveSeconds: Schema.optional(Schema.Number),
    maxInflightMessages: Schema.optional(Schema.Number),
    sessionExpirySeconds: Schema.optional(Schema.Number),
    tls: Schema.optional(Schema.suspend(() => TlsPropertiesSchema)),
  });
const AkriConnectorsMqttAuthenticationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.suspend(() => AkriConnectorsMqttAuthenticationMethodSchema),
  });
const AkriConnectorsMqttAuthenticationMethodSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["ServiceAccountToken"]);
const AkriConnectorsMqttProtocolTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Mqtt"]);
const TlsPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  trustedCaCertificateConfigMapRef: Schema.optional(Schema.String),
});
const AkriConnectorResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AkriConnectorPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    allocatedDevices: Schema.optional(
      Schema.Array(Schema.suspend(() => AkriConnectorAllocatedDeviceSchema)),
    ),
    status: Schema.optional(Schema.suspend(() => AkriConnectorStatusSchema)),
    healthState: Schema.optional(
      Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
    ),
  },
);
const AkriConnectorAllocatedDeviceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceInboundEndpointName: Schema.String,
    deviceName: Schema.String,
  });
const AkriConnectorStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  healthState: Schema.optional(
    Schema.suspend(() => ResourceHealthStatusSchema),
  ),
});
const ResourceHealthStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.suspend(() => ResourceHealthStateSchema)),
  lastTransitionTime: Schema.optional(Schema.String),
  lastUpdateTime: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  reasonCode: Schema.optional(Schema.String),
});
const ResourceHealthStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Available",
  "Degraded",
  "Unavailable",
  "Unknown",
]);
const AkriServiceResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AkriServicePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  status: Schema.optional(Schema.suspend(() => AkriServiceStatusSchema)),
});
const AkriServiceStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  healthState: Schema.optional(
    Schema.suspend(() => ResourceHealthStatusSchema),
  ),
});
const BrokerResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const BrokerPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  advanced: Schema.optional(Schema.suspend(() => AdvancedSettingsSchema)),
  cardinality: Schema.optional(Schema.suspend(() => CardinalitySchema)),
  diagnostics: Schema.optional(Schema.suspend(() => BrokerDiagnosticsSchema)),
  diskBackedMessageBuffer: Schema.optional(
    Schema.suspend(() => DiskBackedMessageBufferSchema),
  ),
  generateResourceLimits: Schema.optional(
    Schema.suspend(() => GenerateResourceLimitsSchema),
  ),
  memoryProfile: Schema.optional(
    Schema.Literals(["Tiny", "Low", "Medium", "High"]),
  ),
  persistence: Schema.optional(Schema.suspend(() => BrokerPersistenceSchema)),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  status: Schema.optional(Schema.suspend(() => BrokerStatusSchema)),
  healthState: Schema.optional(
    Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
  ),
});
const AdvancedSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clients: Schema.optional(Schema.suspend(() => ClientConfigSchema)),
  encryptInternalTraffic: Schema.optional(
    Schema.Literals(["Enabled", "Disabled"]),
  ),
  internalCerts: Schema.optional(
    Schema.suspend(() => CertManagerCertOptionsSchema),
  ),
});
const ClientConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxSessionExpirySeconds: Schema.optional(Schema.Number),
  maxMessageExpirySeconds: Schema.optional(Schema.Number),
  maxPacketSizeBytes: Schema.optional(Schema.Number),
  subscriberQueueLimit: Schema.optional(
    Schema.suspend(() => SubscriberQueueLimitSchema),
  ),
  maxReceiveMaximum: Schema.optional(Schema.Number),
  maxKeepAliveSeconds: Schema.optional(Schema.Number),
});
const SubscriberQueueLimitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  length: Schema.optional(Schema.Number),
  strategy: Schema.optional(Schema.Literals(["None", "DropOldest"])),
});
const CertManagerCertOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  duration: Schema.String,
  renewBefore: Schema.String,
  privateKey: Schema.suspend(() => CertManagerPrivateKeySchema),
});
const CertManagerPrivateKeySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  algorithm: Schema.suspend(() => PrivateKeyAlgorithmSchema),
  rotationPolicy: Schema.suspend(() => PrivateKeyRotationPolicySchema),
});
const PrivateKeyAlgorithmSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Ec256",
  "Ec384",
  "Ec521",
  "Ed25519",
  "Rsa2048",
  "Rsa4096",
  "Rsa8192",
]);
const PrivateKeyRotationPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Always", "Never"]);
const CardinalitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backendChain: Schema.suspend(() => BackendChainSchema),
  frontend: Schema.suspend(() => FrontendSchema),
});
const BackendChainSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  partitions: Schema.Number,
  redundancyFactor: Schema.Number,
  workers: Schema.optional(Schema.Number),
});
const FrontendSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  replicas: Schema.Number,
  workers: Schema.optional(Schema.Number),
});
const BrokerDiagnosticsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  logs: Schema.optional(Schema.suspend(() => DiagnosticsLogsSchema)),
  metrics: Schema.optional(Schema.suspend(() => MetricsSchema)),
  selfCheck: Schema.optional(Schema.suspend(() => SelfCheckSchema)),
  traces: Schema.optional(Schema.suspend(() => TracesSchema)),
});
const DiagnosticsLogsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  level: Schema.optional(Schema.String),
});
const MetricsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  prometheusPort: Schema.optional(Schema.Number),
});
const SelfCheckSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  intervalSeconds: Schema.optional(Schema.Number),
  timeoutSeconds: Schema.optional(Schema.Number),
});
const TracesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  cacheSizeMegabytes: Schema.optional(Schema.Number),
  selfTracing: Schema.optional(Schema.suspend(() => SelfTracingSchema)),
  spanChannelCapacity: Schema.optional(Schema.Number),
});
const SelfTracingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  intervalSeconds: Schema.optional(Schema.Number),
});
const DiskBackedMessageBufferSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    maxSize: Schema.String,
    ephemeralVolumeClaimSpec: Schema.optional(
      Schema.suspend(() => VolumeClaimSpecSchema),
    ),
    persistentVolumeClaimSpec: Schema.optional(
      Schema.suspend(() => VolumeClaimSpecSchema),
    ),
  },
);
const VolumeClaimSpecSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  volumeName: Schema.optional(Schema.String),
  volumeMode: Schema.optional(Schema.String),
  storageClassName: Schema.optional(Schema.String),
  accessModes: Schema.optional(Schema.Array(Schema.String)),
  dataSource: Schema.optional(
    Schema.suspend(() => LocalKubernetesReferenceSchema),
  ),
  dataSourceRef: Schema.optional(
    Schema.suspend(() => KubernetesReferenceSchema),
  ),
  resources: Schema.optional(
    Schema.suspend(() => VolumeClaimResourceRequirementsSchema),
  ),
  selector: Schema.optional(
    Schema.suspend(() => VolumeClaimSpecSelectorSchema),
  ),
});
const LocalKubernetesReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroup: Schema.optional(Schema.String),
    kind: Schema.String,
    name: Schema.String,
  });
const KubernetesReferenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiGroup: Schema.optional(Schema.String),
  kind: Schema.String,
  name: Schema.String,
  namespace: Schema.optional(Schema.String),
});
const VolumeClaimResourceRequirementsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    limits: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    requests: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    claims: Schema.optional(
      Schema.Array(
        Schema.suspend(() => VolumeClaimResourceRequirementsClaimsSchema),
      ),
    ),
  });
const VolumeClaimResourceRequirementsClaimsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  });
const VolumeClaimSpecSelectorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    matchExpressions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => VolumeClaimSpecSelectorMatchExpressionsSchema),
      ),
    ),
    matchLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  },
);
const VolumeClaimSpecSelectorMatchExpressionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    operator: Schema.suspend(() => OperatorValuesSchema),
    values: Schema.optional(Schema.Array(Schema.String)),
  });
const OperatorValuesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "In",
  "NotIn",
  "Exists",
  "DoesNotExist",
]);
const GenerateResourceLimitsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cpu: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
});
const BrokerPersistenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxSize: Schema.String,
  persistentVolumeClaimSpec: Schema.optional(
    Schema.suspend(() => VolumeClaimSpecSchema),
  ),
  retain: Schema.optional(
    Schema.suspend(() => BrokerRetainMessagesPolicySchema),
  ),
  stateStore: Schema.optional(
    Schema.suspend(() => BrokerStateStorePolicySchema),
  ),
  subscriberQueue: Schema.optional(
    Schema.suspend(() => BrokerSubscriberQueuePolicySchema),
  ),
  encryption: Schema.optional(
    Schema.suspend(() => BrokerPersistenceEncryptionSchema),
  ),
});
const BrokerRetainMessagesPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.suspend(() => BrokerPersistencePolicyModeSchema),
  });
const BrokerPersistencePolicyModeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["All", "None", "Custom"]);
const BrokerStateStorePolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.suspend(() => BrokerPersistencePolicyModeSchema),
});
const BrokerSubscriberQueuePolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.suspend(() => BrokerPersistencePolicyModeSchema),
  });
const BrokerPersistenceEncryptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.suspend(() => OperationalModeSchema),
  });
const BrokerStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  healthState: Schema.optional(
    Schema.suspend(() => ResourceHealthStatusSchema),
  ),
});
const BrokerAuthenticationResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const BrokerAuthenticationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authenticationMethods: Schema.Array(
      Schema.suspend(() => BrokerAuthenticatorMethodsSchema),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    healthState: Schema.optional(
      Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
    ),
  });
const BrokerAuthenticatorMethodsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.suspend(() => BrokerAuthenticationMethodSchema),
    customSettings: Schema.optional(
      Schema.suspend(() => BrokerAuthenticatorMethodCustomSchema),
    ),
    serviceAccountTokenSettings: Schema.optional(
      Schema.suspend(() => BrokerAuthenticatorMethodSatSchema),
    ),
    x509Settings: Schema.optional(
      Schema.suspend(() => BrokerAuthenticatorMethodX509Schema),
    ),
  });
const BrokerAuthenticationMethodSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Custom",
    "ServiceAccountToken",
    "X509",
  ]);
const BrokerAuthenticatorMethodCustomSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    auth: Schema.optional(
      Schema.suspend(() => BrokerAuthenticatorCustomAuthSchema),
    ),
    caCertConfigMap: Schema.optional(Schema.String),
    endpoint: Schema.String,
    headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const BrokerAuthenticatorCustomAuthSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x509: Schema.suspend(() => X509ManualCertificateSchema),
  });
const X509ManualCertificateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  secretRef: Schema.String,
});
const BrokerAuthenticatorMethodSatSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audiences: Schema.Array(Schema.String),
  });
const BrokerAuthenticatorMethodX509Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorizationAttributes: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => BrokerAuthenticatorMethodX509AttributesSchema),
      ),
    ),
    trustedClientCaCert: Schema.optional(Schema.String),
    additionalValidation: Schema.optional(
      Schema.suspend(() => BrokerAuthenticatorValidationMethodsSchema),
    ),
  });
const BrokerAuthenticatorMethodX509AttributesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributes: Schema.Record(Schema.String, Schema.String),
    subject: Schema.String,
  });
const BrokerAuthenticatorValidationMethodsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["None", "AzureDeviceRegistry"]);
const BrokerAuthorizationResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const BrokerAuthorizationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorizationPolicies: Schema.suspend(() => AuthorizationConfigSchema),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    healthState: Schema.optional(
      Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
    ),
  });
const AuthorizationConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cache: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  rules: Schema.optional(
    Schema.Array(Schema.suspend(() => AuthorizationRuleSchema)),
  ),
});
const AuthorizationRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  brokerResources: Schema.Array(Schema.suspend(() => BrokerResourceRuleSchema)),
  principals: Schema.suspend(() => PrincipalDefinitionSchema),
  stateStoreResources: Schema.optional(
    Schema.Array(Schema.suspend(() => StateStoreResourceRuleSchema)),
  ),
});
const BrokerResourceRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  method: Schema.suspend(() => BrokerResourceDefinitionMethodsSchema),
  clientIds: Schema.optional(Schema.Array(Schema.String)),
  topics: Schema.optional(Schema.Array(Schema.String)),
});
const BrokerResourceDefinitionMethodsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Connect",
    "Publish",
    "Subscribe",
  ]);
const PrincipalDefinitionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  attributes: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.String)),
  ),
  clientIds: Schema.optional(Schema.Array(Schema.String)),
  usernames: Schema.optional(Schema.Array(Schema.String)),
});
const StateStoreResourceRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyType: Schema.suspend(() => StateStoreResourceKeyTypesSchema),
  keys: Schema.Array(Schema.String),
  method: Schema.suspend(() => StateStoreResourceDefinitionMethodsSchema),
});
const StateStoreResourceKeyTypesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Pattern", "String", "Binary"]);
const StateStoreResourceDefinitionMethodsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Read", "Write", "ReadWrite"]);
const BrokerListenerResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const BrokerListenerPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceName: Schema.optional(Schema.String),
    ports: Schema.Array(Schema.suspend(() => ListenerPortSchema)),
    serviceType: Schema.optional(
      Schema.Literals(["ClusterIp", "LoadBalancer", "NodePort"]),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    healthState: Schema.optional(
      Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
    ),
  });
const ListenerPortSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  authenticationRef: Schema.optional(Schema.String),
  authorizationRef: Schema.optional(Schema.String),
  nodePort: Schema.optional(Schema.Number),
  port: Schema.Number,
  protocol: Schema.optional(Schema.Literals(["Mqtt", "WebSockets"])),
  tls: Schema.optional(Schema.suspend(() => TlsCertMethodSchema)),
});
const TlsCertMethodSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.suspend(() => TlsCertMethodModeSchema),
  certManagerCertificateSpec: Schema.optional(
    Schema.suspend(() => CertManagerCertificateSpecSchema),
  ),
  manual: Schema.optional(Schema.suspend(() => X509ManualCertificateSchema)),
});
const TlsCertMethodModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Automatic",
  "Manual",
]);
const CertManagerCertificateSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    duration: Schema.optional(Schema.String),
    secretName: Schema.optional(Schema.String),
    renewBefore: Schema.optional(Schema.String),
    issuerRef: Schema.suspend(() => CertManagerIssuerRefSchema),
    privateKey: Schema.optional(
      Schema.suspend(() => CertManagerPrivateKeySchema),
    ),
    san: Schema.optional(Schema.suspend(() => SanForCertSchema)),
  });
const CertManagerIssuerRefSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  group: Schema.String,
  kind: Schema.suspend(() => CertManagerIssuerKindSchema),
  name: Schema.String,
});
const CertManagerIssuerKindSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["Issuer", "ClusterIssuer"],
);
const SanForCertSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dns: Schema.Array(Schema.String),
  ip: Schema.Array(Schema.String),
});
const DataflowEndpointResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const DataflowEndpointPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointType: Schema.suspend(() => EndpointTypeSchema),
    hostType: Schema.optional(
      Schema.suspend(() => DataflowEndpointHostTypeSchema),
    ),
    dataExplorerSettings: Schema.optional(
      Schema.suspend(() => DataflowEndpointDataExplorerSchema),
    ),
    dataLakeStorageSettings: Schema.optional(
      Schema.suspend(() => DataflowEndpointDataLakeStorageSchema),
    ),
    fabricOneLakeSettings: Schema.optional(
      Schema.suspend(() => DataflowEndpointFabricOneLakeSchema),
    ),
    kafkaSettings: Schema.optional(
      Schema.suspend(() => DataflowEndpointKafkaSchema),
    ),
    localStorageSettings: Schema.optional(
      Schema.suspend(() => DataflowEndpointLocalStorageSchema),
    ),
    mqttSettings: Schema.optional(
      Schema.suspend(() => DataflowEndpointMqttSchema),
    ),
    openTelemetrySettings: Schema.optional(
      Schema.suspend(() => DataflowEndpointOpenTelemetrySchema),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    healthState: Schema.optional(
      Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
    ),
  });
const EndpointTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "DataExplorer",
  "DataLakeStorage",
  "FabricOneLake",
  "Kafka",
  "LocalStorage",
  "Mqtt",
  "OpenTelemetry",
]);
const DataflowEndpointHostTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "FabricRT",
    "EventGrid",
    "LocalBroker",
    "Eventhub",
    "CustomMqtt",
    "CustomKafka",
  ]);
const DataflowEndpointDataExplorerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authentication: Schema.suspend(
      () => DataflowEndpointDataExplorerAuthenticationSchema,
    ),
    database: Schema.String,
    host: Schema.String,
    batching: Schema.optional(
      Schema.suspend(() => BatchingConfigurationSchema),
    ),
  });
const DataflowEndpointDataExplorerAuthenticationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.suspend(() => DataExplorerAuthMethodSchema),
    systemAssignedManagedIdentitySettings: Schema.optional(
      Schema.suspend(
        () => DataflowEndpointAuthenticationSystemAssignedManagedIdentitySchema,
      ),
    ),
    userAssignedManagedIdentitySettings: Schema.optional(
      Schema.suspend(
        () => DataflowEndpointAuthenticationUserAssignedManagedIdentitySchema,
      ),
    ),
  });
const DataExplorerAuthMethodSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => ManagedIdentityMethodSchema,
);
const ManagedIdentityMethodSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["SystemAssignedManagedIdentity", "UserAssignedManagedIdentity"],
);
const DataflowEndpointAuthenticationSystemAssignedManagedIdentitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audience: Schema.optional(Schema.String),
  });
const DataflowEndpointAuthenticationUserAssignedManagedIdentitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.String,
    scope: Schema.optional(Schema.String),
    tenantId: Schema.String,
  });
const BatchingConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  latencySeconds: Schema.optional(Schema.Number),
  maxMessages: Schema.optional(Schema.Number),
});
const DataflowEndpointDataLakeStorageSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authentication: Schema.suspend(
      () => DataflowEndpointDataLakeStorageAuthenticationSchema,
    ),
    host: Schema.String,
    batching: Schema.optional(
      Schema.suspend(() => BatchingConfigurationSchema),
    ),
  });
const DataflowEndpointDataLakeStorageAuthenticationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.suspend(() => DataLakeStorageAuthMethodSchema),
    accessTokenSettings: Schema.optional(
      Schema.suspend(() => DataflowEndpointAuthenticationAccessTokenSchema),
    ),
    systemAssignedManagedIdentitySettings: Schema.optional(
      Schema.suspend(
        () => DataflowEndpointAuthenticationSystemAssignedManagedIdentitySchema,
      ),
    ),
    userAssignedManagedIdentitySettings: Schema.optional(
      Schema.suspend(
        () => DataflowEndpointAuthenticationUserAssignedManagedIdentitySchema,
      ),
    ),
  });
const DataLakeStorageAuthMethodSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "SystemAssignedManagedIdentity",
    "UserAssignedManagedIdentity",
    "AccessToken",
  ]);
const DataflowEndpointAuthenticationAccessTokenSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretRef: Schema.String,
  });
const DataflowEndpointFabricOneLakeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authentication: Schema.suspend(
      () => DataflowEndpointFabricOneLakeAuthenticationSchema,
    ),
    names: Schema.suspend(() => DataflowEndpointFabricOneLakeNamesSchema),
    oneLakePathType: Schema.suspend(() => DataflowEndpointFabricPathTypeSchema),
    host: Schema.String,
    batching: Schema.optional(
      Schema.suspend(() => BatchingConfigurationSchema),
    ),
  });
const DataflowEndpointFabricOneLakeAuthenticationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.suspend(() => FabricOneLakeAuthMethodSchema),
    systemAssignedManagedIdentitySettings: Schema.optional(
      Schema.suspend(
        () => DataflowEndpointAuthenticationSystemAssignedManagedIdentitySchema,
      ),
    ),
    userAssignedManagedIdentitySettings: Schema.optional(
      Schema.suspend(
        () => DataflowEndpointAuthenticationUserAssignedManagedIdentitySchema,
      ),
    ),
  });
const FabricOneLakeAuthMethodSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() => ManagedIdentityMethodSchema);
const DataflowEndpointFabricOneLakeNamesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lakehouseName: Schema.String,
    workspaceName: Schema.String,
  });
const DataflowEndpointFabricPathTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Files", "Tables"]);
const DataflowEndpointKafkaSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  authentication: Schema.suspend(
    () => DataflowEndpointKafkaAuthenticationSchema,
  ),
  consumerGroupId: Schema.optional(Schema.String),
  host: Schema.String,
  batching: Schema.optional(
    Schema.suspend(() => DataflowEndpointKafkaBatchingSchema),
  ),
  copyMqttProperties: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  compression: Schema.optional(
    Schema.Literals(["None", "Gzip", "Snappy", "Lz4"]),
  ),
  kafkaAcks: Schema.optional(Schema.Literals(["Zero", "One", "All"])),
  partitionStrategy: Schema.optional(
    Schema.Literals(["Default", "Static", "Topic", "Property"]),
  ),
  tls: Schema.optional(Schema.suspend(() => TlsPropertiesSchema)),
  cloudEventAttributes: Schema.optional(
    Schema.suspend(() => CloudEventAttributeTypeSchema),
  ),
});
const DataflowEndpointKafkaAuthenticationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.suspend(() => KafkaAuthMethodSchema),
    systemAssignedManagedIdentitySettings: Schema.optional(
      Schema.suspend(
        () => DataflowEndpointAuthenticationSystemAssignedManagedIdentitySchema,
      ),
    ),
    userAssignedManagedIdentitySettings: Schema.optional(
      Schema.suspend(
        () => DataflowEndpointAuthenticationUserAssignedManagedIdentitySchema,
      ),
    ),
    saslSettings: Schema.optional(
      Schema.suspend(() => DataflowEndpointAuthenticationSaslSchema),
    ),
    x509CertificateSettings: Schema.optional(
      Schema.suspend(() => DataflowEndpointAuthenticationX509Schema),
    ),
  });
const KafkaAuthMethodSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SystemAssignedManagedIdentity",
  "UserAssignedManagedIdentity",
  "Sasl",
  "X509Certificate",
  "Anonymous",
]);
const DataflowEndpointAuthenticationSaslSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    saslType: Schema.suspend(
      () => DataflowEndpointAuthenticationSaslTypeSchema,
    ),
    secretRef: Schema.String,
  });
const DataflowEndpointAuthenticationSaslTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Plain",
    "ScramSha256",
    "ScramSha512",
  ]);
const DataflowEndpointAuthenticationX509Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretRef: Schema.String,
  });
const DataflowEndpointKafkaBatchingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
    latencyMs: Schema.optional(Schema.Number),
    maxBytes: Schema.optional(Schema.Number),
    maxMessages: Schema.optional(Schema.Number),
  });
const CloudEventAttributeTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Propagate", "CreateOrRemap"]);
const DataflowEndpointLocalStorageSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    persistentVolumeClaimRef: Schema.String,
  });
const DataflowEndpointMqttSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  authentication: Schema.suspend(
    () => DataflowEndpointMqttAuthenticationSchema,
  ),
  clientIdPrefix: Schema.optional(Schema.String),
  host: Schema.optional(Schema.String),
  protocol: Schema.optional(Schema.Literals(["Mqtt", "WebSockets"])),
  keepAliveSeconds: Schema.optional(Schema.Number),
  retain: Schema.optional(Schema.Literals(["Keep", "Never"])),
  maxInflightMessages: Schema.optional(Schema.Number),
  qos: Schema.optional(Schema.Number),
  sessionExpirySeconds: Schema.optional(Schema.Number),
  tls: Schema.optional(Schema.suspend(() => TlsPropertiesSchema)),
  cloudEventAttributes: Schema.optional(
    Schema.suspend(() => CloudEventAttributeTypeSchema),
  ),
});
const DataflowEndpointMqttAuthenticationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.suspend(() => MqttAuthMethodSchema),
    systemAssignedManagedIdentitySettings: Schema.optional(
      Schema.suspend(
        () => DataflowEndpointAuthenticationSystemAssignedManagedIdentitySchema,
      ),
    ),
    userAssignedManagedIdentitySettings: Schema.optional(
      Schema.suspend(
        () => DataflowEndpointAuthenticationUserAssignedManagedIdentitySchema,
      ),
    ),
    serviceAccountTokenSettings: Schema.optional(
      Schema.suspend(
        () => DataflowEndpointAuthenticationServiceAccountTokenSchema,
      ),
    ),
    x509CertificateSettings: Schema.optional(
      Schema.suspend(() => DataflowEndpointAuthenticationX509Schema),
    ),
  });
const MqttAuthMethodSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SystemAssignedManagedIdentity",
  "UserAssignedManagedIdentity",
  "ServiceAccountToken",
  "X509Certificate",
  "Anonymous",
]);
const DataflowEndpointAuthenticationServiceAccountTokenSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audience: Schema.String,
  });
const DataflowEndpointOpenTelemetrySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    host: Schema.String,
    batching: Schema.optional(
      Schema.suspend(() => BatchingConfigurationSchema),
    ),
    tls: Schema.optional(Schema.suspend(() => TlsPropertiesSchema)),
    authentication: Schema.suspend(
      () => DataflowOpenTelemetryAuthenticationSchema,
    ),
  });
const DataflowOpenTelemetryAuthenticationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.suspend(
      () => DataflowOpenTelemetryAuthenticationMethodSchema,
    ),
  });
const DataflowOpenTelemetryAuthenticationMethodSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "ServiceAccountToken",
    "X509Certificate",
    "Anonymous",
  ]);
const DataflowProfileResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
const DataflowProfilePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diagnostics: Schema.optional(
      Schema.suspend(() => ProfileDiagnosticsSchema),
    ),
    instanceCount: Schema.optional(Schema.Number),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    status: Schema.optional(Schema.suspend(() => DataflowProfileStatusSchema)),
    healthState: Schema.optional(
      Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
    ),
  });
const ProfileDiagnosticsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  logs: Schema.optional(Schema.suspend(() => DiagnosticsLogsSchema)),
  metrics: Schema.optional(Schema.suspend(() => MetricsSchema)),
});
const DataflowProfileStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  healthState: Schema.optional(
    Schema.suspend(() => ResourceHealthStatusSchema),
  ),
});
const DataflowGraphResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const DataflowGraphPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
    requestDiskPersistence: Schema.optional(
      Schema.suspend(() => OperationalModeSchema),
    ),
    nodes: Schema.Array(Schema.suspend(() => DataflowGraphNodeSchema)),
    nodeConnections: Schema.Array(
      Schema.suspend(() => DataflowGraphNodeConnectionSchema),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    status: Schema.optional(Schema.suspend(() => DataflowGraphStatusSchema)),
    healthState: Schema.optional(
      Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
    ),
  },
);
const DataflowGraphNodeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  nodeType: Schema.suspend(() => DataflowGraphNodeTypeSchema),
});
const DataflowGraphNodeTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["Source", "Graph", "Destination"],
);
const DataflowGraphNodeConnectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    from: Schema.suspend(() => DataflowGraphConnectionInputSchema),
    to: Schema.suspend(() => DataflowGraphConnectionOutputSchema),
  });
const DataflowGraphConnectionInputSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    schema: Schema.optional(
      Schema.suspend(() => DataflowGraphConnectionSchemaSettingsSchema),
    ),
  });
const DataflowGraphConnectionSchemaSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serializationFormat: Schema.optional(
      Schema.suspend(
        () => DataflowGraphConnectionSchemaSerializationFormatSchema,
      ),
    ),
    schemaRef: Schema.optional(Schema.String),
  });
const DataflowGraphConnectionSchemaSerializationFormatSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Delta",
    "Json",
    "Parquet",
    "Avro",
  ]);
const DataflowGraphConnectionOutputSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  });
const DataflowGraphStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  healthState: Schema.optional(
    Schema.suspend(() => ResourceHealthStatusSchema),
  ),
});
const DataflowResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const DataflowPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  requestDiskPersistence: Schema.optional(
    Schema.suspend(() => OperationalModeSchema),
  ),
  operations: Schema.Array(Schema.suspend(() => DataflowOperationSchema)),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  status: Schema.optional(Schema.suspend(() => DataflowStatusSchema)),
  healthState: Schema.optional(
    Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
  ),
});
const DataflowOperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  operationType: Schema.suspend(() => OperationTypeSchema),
  name: Schema.optional(Schema.String),
  sourceSettings: Schema.optional(
    Schema.suspend(() => DataflowSourceOperationSettingsSchema),
  ),
  builtInTransformationSettings: Schema.optional(
    Schema.suspend(() => DataflowBuiltInTransformationSettingsSchema),
  ),
  destinationSettings: Schema.optional(
    Schema.suspend(() => DataflowDestinationOperationSettingsSchema),
  ),
});
const OperationTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Source",
  "Destination",
  "BuiltInTransformation",
]);
const DataflowSourceOperationSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointRef: Schema.String,
    assetRef: Schema.optional(Schema.String),
    serializationFormat: Schema.optional(Schema.Literals(["Json"])),
    schemaRef: Schema.optional(Schema.String),
    dataSources: Schema.Array(Schema.suspend(() => NonEmptyStringSchema)),
  });
const DataflowBuiltInTransformationSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serializationFormat: Schema.optional(
      Schema.Literals(["Delta", "Json", "Parquet"]),
    ),
    schemaRef: Schema.optional(Schema.String),
    datasets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => DataflowBuiltInTransformationDatasetSchema),
      ),
    ),
    filter: Schema.optional(
      Schema.Array(
        Schema.suspend(() => DataflowBuiltInTransformationFilterSchema),
      ),
    ),
    map: Schema.optional(
      Schema.Array(
        Schema.suspend(() => DataflowBuiltInTransformationMapSchema),
      ),
    ),
  });
const DataflowBuiltInTransformationDatasetSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    description: Schema.optional(Schema.String),
    schemaRef: Schema.optional(Schema.String),
    inputs: Schema.Array(Schema.String),
    expression: Schema.optional(Schema.String),
  });
const DataflowBuiltInTransformationFilterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.Literals(["Filter"])),
    description: Schema.optional(Schema.String),
    inputs: Schema.Array(Schema.String),
    expression: Schema.String,
  });
const DataflowBuiltInTransformationMapSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.suspend(() => DataflowMappingTypeSchema)),
    description: Schema.optional(Schema.String),
    inputs: Schema.Array(Schema.String),
    expression: Schema.optional(Schema.String),
    output: Schema.String,
  });
const DataflowMappingTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NewProperties",
  "Rename",
  "Compute",
  "PassThrough",
  "BuiltInFunction",
]);
const DataflowDestinationOperationSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointRef: Schema.String,
    dataDestination: Schema.suspend(() => NonEmptyStringSchema),
    headers: Schema.optional(
      Schema.Array(Schema.suspend(() => DataflowDestinationHeaderActionSchema)),
    ),
  });
const DataflowDestinationHeaderActionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actionType: Schema.suspend(() => DataflowHeaderActionTypeSchema),
  });
const DataflowHeaderActionTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "AddIfNotPresent",
    "Remove",
    "AddOrReplace",
  ]);
const DataflowStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  healthState: Schema.optional(
    Schema.suspend(() => ResourceHealthStatusSchema),
  ),
});
const RegistryEndpointResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const RegistryEndpointPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    host: Schema.String,
    authentication: Schema.suspend(() => RegistryEndpointAuthenticationSchema),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    healthState: Schema.optional(
      Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
    ),
    codeSigningCas: Schema.optional(
      Schema.Array(
        Schema.suspend(() => RegistryEndpointTrustedSigningKeySchema),
      ),
    ),
  });
const RegistryEndpointAuthenticationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.suspend(() => RegistryEndpointAuthenticationMethodSchema),
  });
const RegistryEndpointAuthenticationMethodSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "SystemAssignedManagedIdentity",
    "UserAssignedManagedIdentity",
    "Anonymous",
    "ArtifactPullSecret",
  ]);
const RegistryEndpointTrustedSigningKeySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.suspend(() => RegistryEndpointTrustedSigningKeyTypeSchema),
  });
const RegistryEndpointTrustedSigningKeyTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Secret", "ConfigMap"]);

// Input Schema
export const AkriConnectorCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    akriConnectorTemplateName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AkriConnectorPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}/connectors/{connectorName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type AkriConnectorCreateOrUpdateInput =
  typeof AkriConnectorCreateOrUpdateInput.Type;

// Output Schema
export const AkriConnectorCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AkriConnectorPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
      longRunning: { finalStateVia: "location" },
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
    properties: Schema.optional(
      Schema.suspend(() => AkriConnectorPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
    value: Schema.Array(Schema.suspend(() => AkriConnectorResourceSchema)),
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
      Schema.suspend(() => AkriConnectorTemplatePropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type AkriConnectorTemplateCreateOrUpdateInput =
  typeof AkriConnectorTemplateCreateOrUpdateInput.Type;

// Output Schema
export const AkriConnectorTemplateCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AkriConnectorTemplatePropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
      longRunning: { finalStateVia: "location" },
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
    properties: Schema.optional(
      Schema.suspend(() => AkriConnectorTemplatePropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
      Schema.suspend(() => AkriConnectorTemplateResourceSchema),
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
      Schema.suspend(() => AkriServicePropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriServices/{akriServiceName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type AkriServiceCreateOrUpdateInput =
  typeof AkriServiceCreateOrUpdateInput.Type;

// Output Schema
export const AkriServiceCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AkriServicePropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
    longRunning: { finalStateVia: "location" },
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
  properties: Schema.optional(
    Schema.suspend(() => AkriServicePropertiesSchema),
  ),
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
    value: Schema.Array(Schema.suspend(() => AkriServiceResourceSchema)),
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
      Schema.suspend(() => BrokerAuthenticationPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authentications/{authenticationName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type BrokerAuthenticationCreateOrUpdateInput =
  typeof BrokerAuthenticationCreateOrUpdateInput.Type;

// Output Schema
export const BrokerAuthenticationCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BrokerAuthenticationPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
      longRunning: { finalStateVia: "location" },
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
    properties: Schema.optional(
      Schema.suspend(() => BrokerAuthenticationPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
      Schema.suspend(() => BrokerAuthenticationResourceSchema),
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
      Schema.suspend(() => BrokerAuthorizationPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type BrokerAuthorizationCreateOrUpdateInput =
  typeof BrokerAuthorizationCreateOrUpdateInput.Type;

// Output Schema
export const BrokerAuthorizationCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BrokerAuthorizationPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
      longRunning: { finalStateVia: "location" },
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
    properties: Schema.optional(
      Schema.suspend(() => BrokerAuthorizationPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
      Schema.suspend(() => BrokerAuthorizationResourceSchema),
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
    properties: Schema.optional(Schema.suspend(() => BrokerPropertiesSchema)),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type BrokerCreateOrUpdateInput = typeof BrokerCreateOrUpdateInput.Type;

// Output Schema
export const BrokerCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => BrokerPropertiesSchema)),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
    longRunning: { finalStateVia: "location" },
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
  properties: Schema.optional(Schema.suspend(() => BrokerPropertiesSchema)),
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
    value: Schema.Array(Schema.suspend(() => BrokerResourceSchema)),
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
      Schema.suspend(() => BrokerListenerPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type BrokerListenerCreateOrUpdateInput =
  typeof BrokerListenerCreateOrUpdateInput.Type;

// Output Schema
export const BrokerListenerCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BrokerListenerPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
      longRunning: { finalStateVia: "location" },
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
    properties: Schema.optional(
      Schema.suspend(() => BrokerListenerPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
    value: Schema.Array(Schema.suspend(() => BrokerListenerResourceSchema)),
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
    properties: Schema.optional(Schema.suspend(() => DataflowPropertiesSchema)),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows/{dataflowName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type DataflowCreateOrUpdateInput =
  typeof DataflowCreateOrUpdateInput.Type;

// Output Schema
export const DataflowCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => DataflowPropertiesSchema)),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
    longRunning: { finalStateVia: "location" },
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
      Schema.suspend(() => DataflowEndpointPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints/{dataflowEndpointName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type DataflowEndpointCreateOrUpdateInput =
  typeof DataflowEndpointCreateOrUpdateInput.Type;

// Output Schema
export const DataflowEndpointCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DataflowEndpointPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
      longRunning: { finalStateVia: "location" },
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
    properties: Schema.optional(
      Schema.suspend(() => DataflowEndpointPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
    value: Schema.Array(Schema.suspend(() => DataflowEndpointResourceSchema)),
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
  properties: Schema.optional(Schema.suspend(() => DataflowPropertiesSchema)),
  extendedLocation: Schema.optional(
    Schema.suspend(() => ExtendedLocationSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
      Schema.suspend(() => DataflowGraphPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflowGraphs/{dataflowGraphName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type DataflowGraphCreateOrUpdateInput =
  typeof DataflowGraphCreateOrUpdateInput.Type;

// Output Schema
export const DataflowGraphCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DataflowGraphPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
      longRunning: { finalStateVia: "location" },
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
    properties: Schema.optional(
      Schema.suspend(() => DataflowGraphPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
    value: Schema.Array(Schema.suspend(() => DataflowGraphResourceSchema)),
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
    value: Schema.Array(Schema.suspend(() => DataflowResourceSchema)),
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
      Schema.suspend(() => DataflowProfilePropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type DataflowProfileCreateOrUpdateInput =
  typeof DataflowProfileCreateOrUpdateInput.Type;

// Output Schema
export const DataflowProfileCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DataflowProfilePropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
      longRunning: { finalStateVia: "location" },
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
    properties: Schema.optional(
      Schema.suspend(() => DataflowProfilePropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
    value: Schema.Array(Schema.suspend(() => DataflowProfileResourceSchema)),
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
    properties: Schema.optional(Schema.suspend(() => InstancePropertiesSchema)),
    extendedLocation: Schema.suspend(() => ExtendedLocationSchema),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
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
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type InstanceCreateOrUpdateInput =
  typeof InstanceCreateOrUpdateInput.Type;

// Output Schema
export const InstanceCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => InstancePropertiesSchema)),
    extendedLocation: Schema.suspend(() => ExtendedLocationSchema),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
    longRunning: { finalStateVia: "location" },
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
  properties: Schema.optional(Schema.suspend(() => InstancePropertiesSchema)),
  extendedLocation: Schema.suspend(() => ExtendedLocationSchema),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
      userAssignedIdentities: Schema.optional(
        Schema.suspend(() => UserAssignedIdentitiesSchema),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
    value: Schema.Array(Schema.suspend(() => InstanceResourceSchema)),
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
    value: Schema.Array(Schema.suspend(() => InstanceResourceSchema)),
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
      type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
      userAssignedIdentities: Schema.optional(
        Schema.suspend(() => UserAssignedIdentitiesSchema),
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
  properties: Schema.optional(Schema.suspend(() => InstancePropertiesSchema)),
  extendedLocation: Schema.suspend(() => ExtendedLocationSchema),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
      userAssignedIdentities: Schema.optional(
        Schema.suspend(() => UserAssignedIdentitiesSchema),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
  value: Schema.optional(Schema.Array(Schema.suspend(() => OperationSchema))),
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
      Schema.suspend(() => RegistryEndpointPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/registryEndpoints/{registryEndpointName}",
      apiVersion: "2026-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type RegistryEndpointCreateOrUpdateInput =
  typeof RegistryEndpointCreateOrUpdateInput.Type;

// Output Schema
export const RegistryEndpointCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RegistryEndpointPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
      longRunning: { finalStateVia: "location" },
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
    properties: Schema.optional(
      Schema.suspend(() => RegistryEndpointPropertiesSchema),
    ),
    extendedLocation: Schema.optional(
      Schema.suspend(() => ExtendedLocationSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
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
    value: Schema.Array(Schema.suspend(() => RegistryEndpointResourceSchema)),
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
