/**
 * Azure Containerinstance API
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
  name: Schema.String,
  display: Schema.suspend(() => OperationDisplaySchema),
  properties: Schema.optional(Schema.Unknown),
  origin: Schema.optional(
    Schema.suspend(() => ContainerInstanceOperationsOriginSchema),
  ),
});
const OperationDisplaySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provider: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
  operation: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const ContainerInstanceOperationsOriginSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["User", "System"]);
const ContainerGroupProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const ListResultContainerGroupSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    zones: Schema.optional(Schema.Array(Schema.String)),
    identity: Schema.optional(
      Schema.suspend(() => ContainerGroupIdentitySchema),
    ),
    properties: Schema.suspend(
      () => ListResultContainerGroupPropertiesPropertiesSchema,
    ),
  });
const ContainerGroupIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  tenantId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.suspend(() => ResourceIdentityTypeSchema)),
  userAssignedIdentities: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => UserAssignedIdentitiesSchema),
    ),
  ),
});
const ResourceIdentityTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SystemAssigned",
  "UserAssigned",
  "SystemAssigned, UserAssigned",
  "None",
]);
const UserAssignedIdentitiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
});
const ListResultContainerGroupPropertiesPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ContainerGroupProvisioningStateSchema),
    ),
    secretReferences: Schema.optional(
      Schema.Array(Schema.suspend(() => SecretReferenceSchema)),
    ),
    containers: Schema.Array(Schema.suspend(() => ContainerSchema)),
    imageRegistryCredentials: Schema.optional(
      Schema.Array(Schema.suspend(() => ImageRegistryCredentialSchema)),
    ),
    restartPolicy: Schema.optional(
      Schema.suspend(() => ContainerGroupRestartPolicySchema),
    ),
    ipAddress: Schema.optional(Schema.suspend(() => IpAddressSchema)),
    osType: Schema.suspend(() => OperatingSystemTypesSchema),
    volumes: Schema.optional(Schema.Array(Schema.suspend(() => VolumeSchema))),
    diagnostics: Schema.optional(
      Schema.suspend(() => ContainerGroupDiagnosticsSchema),
    ),
    subnetIds: Schema.optional(
      Schema.Array(Schema.suspend(() => ContainerGroupSubnetIdSchema)),
    ),
    dnsConfig: Schema.optional(Schema.suspend(() => DnsConfigurationSchema)),
    sku: Schema.optional(Schema.suspend(() => ContainerGroupSkuSchema)),
    encryptionProperties: Schema.optional(
      Schema.suspend(() => EncryptionPropertiesSchema),
    ),
    initContainers: Schema.optional(
      Schema.Array(Schema.suspend(() => InitContainerDefinitionSchema)),
    ),
    extensions: Schema.optional(
      Schema.Array(Schema.suspend(() => DeploymentExtensionSpecSchema)),
    ),
    confidentialComputeProperties: Schema.optional(
      Schema.suspend(() => ConfidentialComputePropertiesSchema),
    ),
    priority: Schema.optional(
      Schema.suspend(() => ContainerGroupPrioritySchema),
    ),
    identityAcls: Schema.optional(Schema.suspend(() => IdentityAclsSchema)),
    containerGroupProfile: Schema.optional(
      Schema.suspend(() => ContainerGroupProfileReferenceDefinitionSchema),
    ),
    standbyPoolProfile: Schema.optional(
      Schema.suspend(() => StandbyPoolProfileDefinitionSchema),
    ),
    isCreatedFromStandbyPool: Schema.optional(Schema.Boolean),
  });
const ContainerGroupProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "NotSpecified",
    "Accepted",
    "Pending",
    "Updating",
    "Creating",
    "Repairing",
    "Unhealthy",
    "Failed",
    "Canceled",
    "Succeeded",
    "Deleting",
    "NotAccessible",
    "PreProvisioned",
  ]);
const SecretReferenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  identity: Schema.String,
  secretReferenceUri: Schema.String,
});
const ContainerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  properties: Schema.suspend(() => ContainerPropertiesSchema),
});
const ContainerPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  image: Schema.optional(Schema.String),
  command: Schema.optional(Schema.Array(Schema.String)),
  ports: Schema.optional(
    Schema.Array(Schema.suspend(() => ContainerPortSchema)),
  ),
  environmentVariables: Schema.optional(
    Schema.Array(Schema.suspend(() => EnvironmentVariableSchema)),
  ),
  instanceView: Schema.optional(
    Schema.suspend(() => ContainerPropertiesInstanceViewSchema),
  ),
  resources: Schema.optional(Schema.suspend(() => ResourceRequirementsSchema)),
  volumeMounts: Schema.optional(
    Schema.Array(Schema.suspend(() => VolumeMountSchema)),
  ),
  livenessProbe: Schema.optional(Schema.suspend(() => ContainerProbeSchema)),
  readinessProbe: Schema.optional(Schema.suspend(() => ContainerProbeSchema)),
  securityContext: Schema.optional(
    Schema.suspend(() => SecurityContextDefinitionSchema),
  ),
  configMap: Schema.optional(Schema.suspend(() => ConfigMapSchema)),
});
const ContainerPortSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  protocol: Schema.optional(
    Schema.suspend(() => ContainerNetworkProtocolSchema),
  ),
  port: Schema.Number,
});
const ContainerNetworkProtocolSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["TCP", "UDP"]);
const EnvironmentVariableSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  value: Schema.optional(Schema.String),
  secureValue: Schema.optional(Schema.String),
  secureValueReference: Schema.optional(Schema.String),
});
const ContainerPropertiesInstanceViewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    restartCount: Schema.optional(Schema.Number),
    currentState: Schema.optional(Schema.suspend(() => ContainerStateSchema)),
    previousState: Schema.optional(Schema.suspend(() => ContainerStateSchema)),
    events: Schema.optional(Schema.Array(Schema.suspend(() => EventSchema))),
  });
const ContainerStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  exitCode: Schema.optional(Schema.Number),
  finishTime: Schema.optional(Schema.String),
  detailStatus: Schema.optional(Schema.String),
});
const EventSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  firstTimestamp: Schema.optional(Schema.String),
  lastTimestamp: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
const ResourceRequirementsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  requests: Schema.suspend(() => ResourceRequestsSchema),
  limits: Schema.optional(Schema.suspend(() => ResourceLimitsSchema)),
});
const ResourceRequestsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  memoryInGB: Schema.Number,
  cpu: Schema.Number,
  gpu: Schema.optional(Schema.suspend(() => GpuResourceSchema)),
});
const GpuResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
  sku: Schema.suspend(() => GpuSkuSchema),
});
const GpuSkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "K80",
  "P100",
  "V100",
]);
const ResourceLimitsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  memoryInGB: Schema.optional(Schema.Number),
  cpu: Schema.optional(Schema.Number),
  gpu: Schema.optional(Schema.suspend(() => GpuResourceSchema)),
});
const VolumeMountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  mountPath: Schema.String,
  readOnly: Schema.optional(Schema.Boolean),
});
const ContainerProbeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  exec: Schema.optional(Schema.suspend(() => ContainerExecSchema)),
  httpGet: Schema.optional(Schema.suspend(() => ContainerHttpGetSchema)),
  initialDelaySeconds: Schema.optional(Schema.Number),
  periodSeconds: Schema.optional(Schema.Number),
  failureThreshold: Schema.optional(Schema.Number),
  successThreshold: Schema.optional(Schema.Number),
  timeoutSeconds: Schema.optional(Schema.Number),
});
const ContainerExecSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  command: Schema.optional(Schema.Array(Schema.String)),
});
const ContainerHttpGetSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  path: Schema.optional(Schema.String),
  port: Schema.Number,
  scheme: Schema.optional(Schema.suspend(() => SchemeSchema)),
  httpHeaders: Schema.optional(
    Schema.Array(Schema.suspend(() => HttpHeaderSchema)),
  ),
});
const SchemeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "http",
  "https",
]);
const HttpHeaderSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});
const SecurityContextDefinitionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privileged: Schema.optional(Schema.Boolean),
    allowPrivilegeEscalation: Schema.optional(Schema.Boolean),
    capabilities: Schema.optional(
      Schema.suspend(() => SecurityContextCapabilitiesDefinitionSchema),
    ),
    runAsGroup: Schema.optional(Schema.Number),
    runAsUser: Schema.optional(Schema.Number),
    seccompProfile: Schema.optional(Schema.String),
  });
const SecurityContextCapabilitiesDefinitionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    add: Schema.optional(Schema.Array(Schema.String)),
    drop: Schema.optional(Schema.Array(Schema.String)),
  });
const ConfigMapSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyValuePairs: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
const ImageRegistryCredentialSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    server: Schema.String,
    username: Schema.optional(Schema.String),
    password: Schema.optional(SensitiveOutputString),
    passwordReference: Schema.optional(SensitiveOutputString),
    identity: Schema.optional(Schema.String),
    identityUrl: Schema.optional(Schema.String),
  },
);
const ContainerGroupRestartPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Always", "OnFailure", "Never"]);
const IpAddressSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ports: Schema.Array(Schema.suspend(() => PortSchema)),
  type: Schema.suspend(() => ContainerGroupIpAddressTypeSchema),
  ip: Schema.optional(Schema.String),
  dnsNameLabel: Schema.optional(Schema.String),
  autoGeneratedDomainNameLabelScope: Schema.optional(
    Schema.Literals([
      "Unsecure",
      "TenantReuse",
      "SubscriptionReuse",
      "ResourceGroupReuse",
      "Noreuse",
    ]),
  ),
  fqdn: Schema.optional(Schema.String),
});
const PortSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  protocol: Schema.optional(
    Schema.suspend(() => ContainerGroupNetworkProtocolSchema),
  ),
  port: Schema.Number,
});
const ContainerGroupNetworkProtocolSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["TCP", "UDP"]);
const ContainerGroupIpAddressTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Public", "Private"]);
const OperatingSystemTypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Windows",
  "Linux",
]);
const VolumeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  azureFile: Schema.optional(Schema.suspend(() => AzureFileVolumeSchema)),
  emptyDir: Schema.optional(Schema.Unknown),
  secret: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  secretReference: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  gitRepo: Schema.optional(Schema.suspend(() => GitRepoVolumeSchema)),
});
const AzureFileVolumeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  shareName: Schema.String,
  readOnly: Schema.optional(Schema.Boolean),
  storageAccountName: Schema.String,
  storageAccountKey: Schema.optional(Schema.String),
  storageAccountKeyReference: Schema.optional(Schema.String),
});
const GitRepoVolumeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  directory: Schema.optional(Schema.String),
  repository: Schema.String,
  revision: Schema.optional(Schema.String),
});
const ContainerGroupDiagnosticsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logAnalytics: Schema.optional(Schema.suspend(() => LogAnalyticsSchema)),
  });
const LogAnalyticsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  workspaceId: Schema.String,
  workspaceKey: Schema.String,
  logType: Schema.optional(Schema.suspend(() => LogAnalyticsLogTypeSchema)),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  workspaceResourceId: Schema.optional(Schema.String),
});
const LogAnalyticsLogTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "ContainerInsights",
  "ContainerInstanceLogs",
]);
const ContainerGroupSubnetIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.optional(Schema.String),
});
const DnsConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nameServers: Schema.Array(Schema.String),
  searchDomains: Schema.optional(Schema.String),
  options: Schema.optional(Schema.String),
});
const ContainerGroupSkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "Standard",
  "Dedicated",
  "Confidential",
]);
const EncryptionPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vaultBaseUrl: Schema.String,
  keyName: Schema.String,
  keyVersion: Schema.String,
  identity: Schema.optional(Schema.String),
});
const InitContainerDefinitionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String,
    properties: Schema.suspend(() => InitContainerPropertiesDefinitionSchema),
  },
);
const InitContainerPropertiesDefinitionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    image: Schema.optional(Schema.String),
    command: Schema.optional(Schema.Array(Schema.String)),
    environmentVariables: Schema.optional(
      Schema.Array(Schema.suspend(() => EnvironmentVariableSchema)),
    ),
    instanceView: Schema.optional(
      Schema.suspend(() => InitContainerPropertiesDefinitionInstanceViewSchema),
    ),
    volumeMounts: Schema.optional(
      Schema.Array(Schema.suspend(() => VolumeMountSchema)),
    ),
    securityContext: Schema.optional(
      Schema.suspend(() => SecurityContextDefinitionSchema),
    ),
  });
const InitContainerPropertiesDefinitionInstanceViewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    restartCount: Schema.optional(Schema.Number),
    currentState: Schema.optional(Schema.suspend(() => ContainerStateSchema)),
    previousState: Schema.optional(Schema.suspend(() => ContainerStateSchema)),
    events: Schema.optional(Schema.Array(Schema.suspend(() => EventSchema))),
  });
const DeploymentExtensionSpecSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String,
    properties: Schema.optional(
      Schema.suspend(() => DeploymentExtensionSpecPropertiesSchema),
    ),
  },
);
const DeploymentExtensionSpecPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extensionType: Schema.String,
    version: Schema.String,
    settings: Schema.optional(Schema.Unknown),
    protectedSettings: Schema.optional(Schema.Unknown),
  });
const ConfidentialComputePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ccePolicy: Schema.optional(Schema.String),
  });
const ContainerGroupPrioritySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Regular", "Spot"]);
const IdentityAclsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  defaultAccess: Schema.optional(
    Schema.suspend(() => IdentityAccessLevelSchema),
  ),
  acls: Schema.optional(
    Schema.Array(Schema.suspend(() => IdentityAccessControlSchema)),
  ),
});
const IdentityAccessLevelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "All",
  "System",
  "User",
]);
const IdentityAccessControlSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  access: Schema.optional(Schema.suspend(() => IdentityAccessLevelSchema)),
  identity: Schema.optional(Schema.String),
});
const ContainerGroupProfileReferenceDefinitionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.Number),
  });
const StandbyPoolProfileDefinitionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    failContainerGroupCreateOnReuseFailure: Schema.optional(Schema.Boolean),
  });
const CachedImagesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  osType: Schema.String,
  image: Schema.String,
});
const CapabilitiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceType: Schema.optional(Schema.String),
  osType: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  ipAddressType: Schema.optional(Schema.String),
  gpu: Schema.optional(Schema.String),
  capabilities: Schema.optional(
    Schema.suspend(() => CapabilitiesCapabilitiesSchema),
  ),
});
const CapabilitiesCapabilitiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxMemoryInGB: Schema.optional(Schema.Number),
    maxCpu: Schema.optional(Schema.Number),
    maxGpuCount: Schema.optional(Schema.Number),
  });
const UsageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  unit: Schema.optional(Schema.String),
  currentValue: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.suspend(() => UsageNameSchema)),
});
const UsageNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  localizedValue: Schema.optional(Schema.String),
});
const NGroupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ContainerGroupProfilePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.optional(Schema.suspend(() => ContainerGroupSkuSchema)),
    encryptionProperties: Schema.optional(
      Schema.suspend(() => EncryptionPropertiesSchema),
    ),
    containers: Schema.Array(Schema.suspend(() => ContainerSchema)),
    initContainers: Schema.optional(
      Schema.Array(Schema.suspend(() => InitContainerDefinitionSchema)),
    ),
    extensions: Schema.optional(
      Schema.Array(Schema.suspend(() => DeploymentExtensionSpecSchema)),
    ),
    imageRegistryCredentials: Schema.optional(
      Schema.Array(Schema.suspend(() => ImageRegistryCredentialSchema)),
    ),
    restartPolicy: Schema.optional(
      Schema.suspend(() => ContainerGroupRestartPolicySchema),
    ),
    shutdownGracePeriod: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.suspend(() => IpAddressSchema)),
    timeToLive: Schema.optional(Schema.String),
    osType: Schema.suspend(() => OperatingSystemTypesSchema),
    volumes: Schema.optional(Schema.Array(Schema.suspend(() => VolumeSchema))),
    diagnostics: Schema.optional(
      Schema.suspend(() => ContainerGroupDiagnosticsSchema),
    ),
    priority: Schema.optional(
      Schema.suspend(() => ContainerGroupPrioritySchema),
    ),
    confidentialComputeProperties: Schema.optional(
      Schema.suspend(() => ConfidentialComputePropertiesSchema),
    ),
    securityContext: Schema.optional(
      Schema.suspend(() => SecurityContextDefinitionSchema),
    ),
    revision: Schema.optional(Schema.Number),
    registeredRevisions: Schema.optional(Schema.Array(Schema.Number)),
    useKrypton: Schema.optional(Schema.Boolean),
  });
const ContainerGroupPropertiesPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(Schema.String),
    secretReferences: Schema.optional(
      Schema.Array(Schema.suspend(() => SecretReferenceSchema)),
    ),
    containers: Schema.Array(Schema.suspend(() => ContainerSchema)),
    imageRegistryCredentials: Schema.optional(
      Schema.Array(Schema.suspend(() => ImageRegistryCredentialSchema)),
    ),
    restartPolicy: Schema.optional(
      Schema.suspend(() => ContainerGroupRestartPolicySchema),
    ),
    ipAddress: Schema.optional(Schema.suspend(() => IpAddressSchema)),
    osType: Schema.optional(Schema.suspend(() => OperatingSystemTypesSchema)),
    volumes: Schema.optional(Schema.Array(Schema.suspend(() => VolumeSchema))),
    instanceView: Schema.optional(
      Schema.suspend(
        () => ContainerGroupPropertiesPropertiesInstanceViewSchema,
      ),
    ),
    diagnostics: Schema.optional(
      Schema.suspend(() => ContainerGroupDiagnosticsSchema),
    ),
    subnetIds: Schema.optional(
      Schema.Array(Schema.suspend(() => ContainerGroupSubnetIdSchema)),
    ),
    dnsConfig: Schema.optional(Schema.suspend(() => DnsConfigurationSchema)),
    sku: Schema.optional(Schema.suspend(() => ContainerGroupSkuSchema)),
    encryptionProperties: Schema.optional(
      Schema.suspend(() => EncryptionPropertiesSchema),
    ),
    initContainers: Schema.optional(
      Schema.Array(Schema.suspend(() => InitContainerDefinitionSchema)),
    ),
    extensions: Schema.optional(
      Schema.Array(Schema.suspend(() => DeploymentExtensionSpecSchema)),
    ),
    confidentialComputeProperties: Schema.optional(
      Schema.suspend(() => ConfidentialComputePropertiesSchema),
    ),
    priority: Schema.optional(
      Schema.suspend(() => ContainerGroupPrioritySchema),
    ),
    identityAcls: Schema.optional(Schema.suspend(() => IdentityAclsSchema)),
    containerGroupProfile: Schema.optional(
      Schema.suspend(() => ContainerGroupProfileReferenceDefinitionSchema),
    ),
    standbyPoolProfile: Schema.optional(
      Schema.suspend(() => StandbyPoolProfileDefinitionSchema),
    ),
    isCreatedFromStandbyPool: Schema.optional(Schema.Boolean),
  });
const ContainerGroupPropertiesPropertiesInstanceViewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    events: Schema.optional(Schema.Array(Schema.suspend(() => EventSchema))),
    state: Schema.optional(Schema.String),
  });
const ContainerExecRequestTerminalSizeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rows: Schema.optional(Schema.Number),
    cols: Schema.optional(Schema.Number),
  });
const NGroupPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  elasticProfile: Schema.optional(Schema.suspend(() => ElasticProfileSchema)),
  placementProfile: Schema.optional(
    Schema.suspend(() => PlacementProfileSchema),
  ),
  containerGroupProfiles: Schema.optional(
    Schema.Array(Schema.suspend(() => ContainerGroupProfileStubSchema)),
  ),
  provisioningState: Schema.optional(
    Schema.suspend(() => NGroupProvisioningStateSchema),
  ),
  updateProfile: Schema.optional(Schema.suspend(() => UpdateProfileSchema)),
});
const ElasticProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  desiredCount: Schema.optional(Schema.Number),
  maintainDesiredCount: Schema.optional(Schema.Boolean),
  containerGroupNamingPolicy: Schema.optional(
    Schema.suspend(() => ElasticProfileContainerGroupNamingPolicySchema),
  ),
});
const ElasticProfileContainerGroupNamingPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guidNamingPolicy: Schema.optional(
      Schema.suspend(
        () => ElasticProfileContainerGroupNamingPolicyGuidNamingPolicySchema,
      ),
    ),
  });
const ElasticProfileContainerGroupNamingPolicyGuidNamingPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prefix: Schema.optional(Schema.String),
  });
const PlacementProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  faultDomainCount: Schema.optional(Schema.Number),
});
const ContainerGroupProfileStubSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(Schema.suspend(() => ApiEntityReferenceSchema)),
    revision: Schema.optional(Schema.Number),
    networkProfile: Schema.optional(Schema.suspend(() => NetworkProfileSchema)),
    storageProfile: Schema.optional(Schema.suspend(() => StorageProfileSchema)),
    containerGroupProperties: Schema.optional(
      Schema.suspend(() => NGroupContainerGroupPropertiesSchema),
    ),
  });
const ApiEntityReferenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
const NetworkProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  loadBalancer: Schema.optional(Schema.suspend(() => LoadBalancerSchema)),
  applicationGateway: Schema.optional(
    Schema.suspend(() => ApplicationGatewaySchema),
  ),
});
const LoadBalancerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backendAddressPools: Schema.optional(
    Schema.Array(Schema.suspend(() => LoadBalancerBackendAddressPoolSchema)),
  ),
});
const LoadBalancerBackendAddressPoolSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(Schema.String),
  });
const ApplicationGatewaySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resource: Schema.optional(Schema.String),
  backendAddressPools: Schema.optional(
    Schema.Array(
      Schema.suspend(() => ApplicationGatewayBackendAddressPoolSchema),
    ),
  ),
});
const ApplicationGatewayBackendAddressPoolSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(Schema.String),
  });
const StorageProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileShares: Schema.optional(
    Schema.Array(Schema.suspend(() => FileShareSchema)),
  ),
});
const FileShareSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  resourceGroupName: Schema.optional(Schema.String),
  storageAccountName: Schema.optional(Schema.String),
  properties: Schema.optional(Schema.suspend(() => FileSharePropertiesSchema)),
});
const FileSharePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  shareAccessType: Schema.optional(
    Schema.suspend(() => AzureFileShareAccessTypeSchema),
  ),
  shareAccessTier: Schema.optional(
    Schema.Literals(["Cool", "Hot", "Premium", "TransactionOptimized"]),
  ),
});
const AzureFileShareAccessTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Shared", "Exclusive"]);
const NGroupContainerGroupPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subnetIds: Schema.optional(
      Schema.Array(Schema.suspend(() => ContainerGroupSubnetIdSchema)),
    ),
    volumes: Schema.optional(
      Schema.Array(Schema.suspend(() => NGroupCGPropertyVolumeSchema)),
    ),
    containers: Schema.optional(
      Schema.Array(Schema.suspend(() => NGroupCGPropertyContainerSchema)),
    ),
  });
const NGroupCGPropertyVolumeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  azureFile: Schema.optional(Schema.suspend(() => AzureFileVolumeSchema)),
});
const NGroupCGPropertyContainerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => NGroupCGPropertyContainerPropertiesSchema),
    ),
  });
const NGroupCGPropertyContainerPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    volumeMounts: Schema.optional(
      Schema.Array(Schema.suspend(() => VolumeMountSchema)),
    ),
  });
const NGroupProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Creating",
    "Updating",
    "Failed",
    "Succeeded",
    "Canceled",
    "Deleting",
    "Migrating",
  ]);
const UpdateProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updateMode: Schema.optional(Schema.suspend(() => NGroupUpdateModeSchema)),
  rollingUpdateProfile: Schema.optional(
    Schema.suspend(() => UpdateProfileRollingUpdateProfileSchema),
  ),
});
const NGroupUpdateModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Manual",
  "Rolling",
]);
const UpdateProfileRollingUpdateProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxBatchPercent: Schema.optional(Schema.Number),
    maxUnhealthyPercent: Schema.optional(Schema.Number),
    pauseTimeBetweenBatches: Schema.optional(Schema.String),
    inPlaceUpdate: Schema.optional(Schema.Boolean),
  });
const NGroupIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  tenantId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.suspend(() => ResourceIdentityTypeSchema)),
  userAssignedIdentities: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => UserAssignedIdentitiesSchema),
    ),
  ),
});

// Input Schema
export const CGProfileCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupProfileName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ContainerGroupProfilePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles/{containerGroupProfileName}",
      apiVersion: "2025-09-01",
    }),
  );
export type CGProfileCreateOrUpdateInput =
  typeof CGProfileCreateOrUpdateInput.Type;

// Output Schema
export const CGProfileCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ContainerGroupProfilePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CGProfileCreateOrUpdateOutput =
  typeof CGProfileCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or Update a ContainerGroupProfile
 *
 * Create a CGProfile if it doesn't exist or update an existing CGProfile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupProfileName - ContainerGroupProfile name.
 */
export const CGProfileCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CGProfileCreateOrUpdateInput,
    outputSchema: CGProfileCreateOrUpdateOutput,
  }),
);
// Input Schema
export const CGProfileDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  containerGroupProfileName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles/{containerGroupProfileName}",
    apiVersion: "2025-09-01",
  }),
);
export type CGProfileDeleteInput = typeof CGProfileDeleteInput.Type;

// Output Schema
export const CGProfileDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CGProfileDeleteOutput = typeof CGProfileDeleteOutput.Type;

// The operation
/**
 * Container group profile DELETE REST API.
 *
 * Deletes a container group profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupProfileName - ContainerGroupProfile name.
 */
export const CGProfileDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CGProfileDeleteInput,
  outputSchema: CGProfileDeleteOutput,
}));
// Input Schema
export const CGProfileGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  containerGroupProfileName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles/{containerGroupProfileName}",
    apiVersion: "2025-09-01",
  }),
);
export type CGProfileGetInput = typeof CGProfileGetInput.Type;

// Output Schema
export const CGProfileGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => ContainerGroupProfilePropertiesSchema),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  zones: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type CGProfileGetOutput = typeof CGProfileGetOutput.Type;

// The operation
/**
 * Display information about a specified ContainerGroupProfile.
 *
 * Get the properties of the specified container group profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupProfileName - ContainerGroupProfile name.
 */
export const CGProfileGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CGProfileGetInput,
  outputSchema: CGProfileGetOutput,
}));
// Input Schema
export const CGProfileGetByRevisionNumberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupProfileName: Schema.String.pipe(T.PathParam()),
    revisionNumber: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles/{containerGroupProfileName}/revisions/{revisionNumber}",
      apiVersion: "2025-09-01",
    }),
  );
export type CGProfileGetByRevisionNumberInput =
  typeof CGProfileGetByRevisionNumberInput.Type;

// Output Schema
export const CGProfileGetByRevisionNumberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ContainerGroupProfilePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CGProfileGetByRevisionNumberOutput =
  typeof CGProfileGetByRevisionNumberOutput.Type;

// The operation
/**
 * Get the properties of the specified revision of the container group profile.
 *
 * Gets the properties of the specified revision of the container group profile in the given subscription and resource group. The operation returns the properties of container group profile including containers, image registry credentials, restart policy, IP address type, OS type, volumes, current revision number, etc.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupProfileName - ContainerGroupProfile name.
 * @param revisionNumber - The revision number of the container group profile.
 */
export const CGProfileGetByRevisionNumber =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CGProfileGetByRevisionNumberInput,
    outputSchema: CGProfileGetByRevisionNumberOutput,
  }));
// Input Schema
export const CGProfileListAllRevisionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles/{containerGroupProfileName}/revisions",
      apiVersion: "2025-09-01",
    }),
  );
export type CGProfileListAllRevisionsInput =
  typeof CGProfileListAllRevisionsInput.Type;

// Output Schema
export const CGProfileListAllRevisionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ContainerGroupProfileSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type CGProfileListAllRevisionsOutput =
  typeof CGProfileListAllRevisionsOutput.Type;

// The operation
/**
 * Get a list of all the revisions of the specified container group profile in the given subscription and resource group.
 *
 * Get a list of all the revisions of the specified container group profile in the given subscription and resource group. This operation returns properties of each revision of the specified container group profile including containers, image registry credentials, restart policy, IP address type, OS type volumes, revision number, etc.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupProfileName - ContainerGroupProfile name.
 */
export const CGProfileListAllRevisions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CGProfileListAllRevisionsInput,
    outputSchema: CGProfileListAllRevisionsOutput,
  }),
);
// Input Schema
export const CGProfilesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles",
      apiVersion: "2025-09-01",
    }),
  );
export type CGProfilesListByResourceGroupInput =
  typeof CGProfilesListByResourceGroupInput.Type;

// Output Schema
export const CGProfilesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ContainerGroupProfileSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type CGProfilesListByResourceGroupOutput =
  typeof CGProfilesListByResourceGroupOutput.Type;

// The operation
/**
 * List container group profiles in a resource group.
 *
 * Gets a list of all container group profiles under a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CGProfilesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CGProfilesListByResourceGroupInput,
    outputSchema: CGProfilesListByResourceGroupOutput,
  }));
// Input Schema
export const CGProfilesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/containerGroupProfiles",
      apiVersion: "2025-09-01",
    }),
  );
export type CGProfilesListBySubscriptionInput =
  typeof CGProfilesListBySubscriptionInput.Type;

// Output Schema
export const CGProfilesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ContainerGroupProfileSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type CGProfilesListBySubscriptionOutput =
  typeof CGProfilesListBySubscriptionOutput.Type;

// The operation
/**
 * List container group profiles in a subscription.
 *
 * Gets a list of all container group profiles under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const CGProfilesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CGProfilesListBySubscriptionInput,
    outputSchema: CGProfilesListBySubscriptionOutput,
  }));
// Input Schema
export const CGProfileUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  containerGroupProfileName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles/{containerGroupProfileName}",
    apiVersion: "2025-09-01",
  }),
);
export type CGProfileUpdateInput = typeof CGProfileUpdateInput.Type;

// Output Schema
export const CGProfileUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => ContainerGroupProfilePropertiesSchema),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  zones: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type CGProfileUpdateOutput = typeof CGProfileUpdateOutput.Type;

// The operation
/**
 * Container group profile PATCH REST API.
 *
 * Update a specified container group profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupProfileName - ContainerGroupProfile name.
 */
export const CGProfileUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CGProfileUpdateInput,
  outputSchema: CGProfileUpdateOutput,
}));
// Input Schema
export const ContainerGroupsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    zones: Schema.optional(Schema.Array(Schema.String)),
    identity: Schema.optional(
      Schema.suspend(() => ContainerGroupIdentitySchema),
    ),
    properties: Schema.suspend(() => ContainerGroupPropertiesPropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ContainerGroupsCreateOrUpdateInput =
  typeof ContainerGroupsCreateOrUpdateInput.Type;

// Output Schema
export const ContainerGroupsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    zones: Schema.optional(Schema.Array(Schema.String)),
    identity: Schema.optional(
      Schema.suspend(() => ContainerGroupIdentitySchema),
    ),
    properties: Schema.suspend(() => ContainerGroupPropertiesPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type ContainerGroupsCreateOrUpdateOutput =
  typeof ContainerGroupsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update container groups.
 *
 * Create or update container groups with specified configurations.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 */
export const ContainerGroupsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ContainerGroupsCreateOrUpdateInput,
    outputSchema: ContainerGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export const ContainerGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ContainerGroupsDeleteInput = typeof ContainerGroupsDeleteInput.Type;

// Output Schema
export const ContainerGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    zones: Schema.optional(Schema.Array(Schema.String)),
    identity: Schema.optional(
      Schema.suspend(() => ContainerGroupIdentitySchema),
    ),
    properties: Schema.suspend(() => ContainerGroupPropertiesPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type ContainerGroupsDeleteOutput =
  typeof ContainerGroupsDeleteOutput.Type;

// The operation
/**
 * Delete the specified container group.
 *
 * Delete the specified container group in the specified subscription and resource group. The operation does not delete other resources provided by the user, such as volumes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 */
export const ContainerGroupsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerGroupsDeleteInput,
    outputSchema: ContainerGroupsDeleteOutput,
  }),
);
// Input Schema
export const ContainerGroupsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}",
      apiVersion: "2025-09-01",
    }),
  );
export type ContainerGroupsGetInput = typeof ContainerGroupsGetInput.Type;

// Output Schema
export const ContainerGroupsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    zones: Schema.optional(Schema.Array(Schema.String)),
    identity: Schema.optional(
      Schema.suspend(() => ContainerGroupIdentitySchema),
    ),
    properties: Schema.suspend(() => ContainerGroupPropertiesPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type ContainerGroupsGetOutput = typeof ContainerGroupsGetOutput.Type;

// The operation
/**
 * Get the properties of the specified container group.
 *
 * Gets the properties of the specified container group in the specified subscription and resource group. The operation returns the properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 */
export const ContainerGroupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContainerGroupsGetInput,
  outputSchema: ContainerGroupsGetOutput,
}));
// Input Schema
export const ContainerGroupsGetOutboundNetworkDependenciesEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/outboundNetworkDependenciesEndpoints",
      apiVersion: "2025-09-01",
    }),
  );
export type ContainerGroupsGetOutboundNetworkDependenciesEndpointsInput =
  typeof ContainerGroupsGetOutboundNetworkDependenciesEndpointsInput.Type;

// Output Schema
export const ContainerGroupsGetOutboundNetworkDependenciesEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(Schema.String);
export type ContainerGroupsGetOutboundNetworkDependenciesEndpointsOutput =
  typeof ContainerGroupsGetOutboundNetworkDependenciesEndpointsOutput.Type;

// The operation
/**
 * Get all network dependencies for container group.
 *
 * Gets all the network dependencies for this container group to allow complete control of network setting and configuration. For container groups, this will always be an empty list.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 */
export const ContainerGroupsGetOutboundNetworkDependenciesEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ContainerGroupsGetOutboundNetworkDependenciesEndpointsInput,
    outputSchema: ContainerGroupsGetOutboundNetworkDependenciesEndpointsOutput,
  }));
// Input Schema
export const ContainerGroupsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/containerGroups",
      apiVersion: "2025-09-01",
    }),
  );
export type ContainerGroupsListInput = typeof ContainerGroupsListInput.Type;

// Output Schema
export const ContainerGroupsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ListResultContainerGroupSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ContainerGroupsListOutput = typeof ContainerGroupsListOutput.Type;

// The operation
/**
 * Get a list of container groups in the specified subscription.
 *
 * Get a list of container groups in the specified subscription. This operation returns properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ContainerGroupsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContainerGroupsListInput,
  outputSchema: ContainerGroupsListOutput,
}));
// Input Schema
export const ContainerGroupsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups",
      apiVersion: "2025-09-01",
    }),
  );
export type ContainerGroupsListByResourceGroupInput =
  typeof ContainerGroupsListByResourceGroupInput.Type;

// Output Schema
export const ContainerGroupsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ListResultContainerGroupSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ContainerGroupsListByResourceGroupOutput =
  typeof ContainerGroupsListByResourceGroupOutput.Type;

// The operation
/**
 * Get a list of container groups in the specified subscription and resource group.
 *
 * Get a list of container groups in a specified subscription and resource group. This operation returns properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ContainerGroupsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ContainerGroupsListByResourceGroupInput,
    outputSchema: ContainerGroupsListByResourceGroupOutput,
  }));
// Input Schema
export const ContainerGroupsRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/restart",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ContainerGroupsRestartInput =
  typeof ContainerGroupsRestartInput.Type;

// Output Schema
export const ContainerGroupsRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ContainerGroupsRestartOutput =
  typeof ContainerGroupsRestartOutput.Type;

// The operation
/**
 * Restarts all containers in a container group.
 *
 * Restarts all containers in a container group in place. If container image has updates, new image will be downloaded.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 */
export const ContainerGroupsRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerGroupsRestartInput,
    outputSchema: ContainerGroupsRestartOutput,
  }),
);
// Input Schema
export const ContainerGroupsStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/start",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ContainerGroupsStartInput = typeof ContainerGroupsStartInput.Type;

// Output Schema
export const ContainerGroupsStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ContainerGroupsStartOutput = typeof ContainerGroupsStartOutput.Type;

// The operation
/**
 * Starts all containers in a container group.
 *
 * Starts all containers in a container group. Compute resources will be allocated and billing will start.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 */
export const ContainerGroupsStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerGroupsStartInput,
    outputSchema: ContainerGroupsStartOutput,
  }),
);
// Input Schema
export const ContainerGroupsStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/stop",
      apiVersion: "2025-09-01",
    }),
  );
export type ContainerGroupsStopInput = typeof ContainerGroupsStopInput.Type;

// Output Schema
export const ContainerGroupsStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ContainerGroupsStopOutput = typeof ContainerGroupsStopOutput.Type;

// The operation
/**
 * Stops all containers in a container group.
 *
 * Stops all containers in a container group. Compute resources will be deallocated and billing will stop.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 */
export const ContainerGroupsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContainerGroupsStopInput,
  outputSchema: ContainerGroupsStopOutput,
}));
// Input Schema
export const ContainerGroupsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    zones: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}",
      apiVersion: "2025-09-01",
    }),
  );
export type ContainerGroupsUpdateInput = typeof ContainerGroupsUpdateInput.Type;

// Output Schema
export const ContainerGroupsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    zones: Schema.optional(Schema.Array(Schema.String)),
    identity: Schema.optional(
      Schema.suspend(() => ContainerGroupIdentitySchema),
    ),
    properties: Schema.suspend(() => ContainerGroupPropertiesPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type ContainerGroupsUpdateOutput =
  typeof ContainerGroupsUpdateOutput.Type;

// The operation
/**
 * Update container groups.
 *
 * Updates container group tags with specified values.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 */
export const ContainerGroupsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerGroupsUpdateInput,
    outputSchema: ContainerGroupsUpdateOutput,
  }),
);
// Input Schema
export const ContainersAttachInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  containerGroupName: Schema.String.pipe(T.PathParam()),
  containerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/containers/{containerName}/attach",
    apiVersion: "2025-09-01",
  }),
);
export type ContainersAttachInput = typeof ContainersAttachInput.Type;

// Output Schema
export const ContainersAttachOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    webSocketUri: Schema.optional(Schema.String),
    password: Schema.optional(SensitiveOutputString),
  },
);
export type ContainersAttachOutput = typeof ContainersAttachOutput.Type;

// The operation
/**
 * Attach to the output of a specific container instance.
 *
 * Attach to the output stream of a specific container instance in a specified resource group and container group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 * @param containerName - The name of the container instance.
 */
export const ContainersAttach = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContainersAttachInput,
  outputSchema: ContainersAttachOutput,
}));
// Input Schema
export const ContainersExecuteCommandInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    command: Schema.optional(Schema.String),
    terminalSize: Schema.optional(
      Schema.suspend(() => ContainerExecRequestTerminalSizeSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/containers/{containerName}/exec",
      apiVersion: "2025-09-01",
    }),
  );
export type ContainersExecuteCommandInput =
  typeof ContainersExecuteCommandInput.Type;

// Output Schema
export const ContainersExecuteCommandOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webSocketUri: Schema.optional(Schema.String),
    password: Schema.optional(SensitiveOutputString),
  });
export type ContainersExecuteCommandOutput =
  typeof ContainersExecuteCommandOutput.Type;

// The operation
/**
 * Executes a command in a specific container instance.
 *
 * Executes a command for a specific container instance in a specified resource group and container group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 * @param containerName - The name of the container instance.
 */
export const ContainersExecuteCommand = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainersExecuteCommandInput,
    outputSchema: ContainersExecuteCommandOutput,
  }),
);
// Input Schema
export const ContainersListLogsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerGroupName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    tail: Schema.optional(Schema.Number),
    timestamps: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/containers/{containerName}/logs",
      apiVersion: "2025-09-01",
    }),
  );
export type ContainersListLogsInput = typeof ContainersListLogsInput.Type;

// Output Schema
export const ContainersListLogsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
  });
export type ContainersListLogsOutput = typeof ContainersListLogsOutput.Type;

// The operation
/**
 * Get the logs for a specified container instance.
 *
 * Get the logs for a specified container instance in a specified resource group and container group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerGroupName - The name of the container group.
 * @param containerName - The name of the container instance.
 * @param tail - The number of lines to show from the tail of the container instance log. If not provided, all available logs are shown up to 4mb.
 * @param timestamps - If true, adds a timestamp at the beginning of every line of log output. If not provided, defaults to false.
 */
export const ContainersListLogs = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContainersListLogsInput,
  outputSchema: ContainersListLogsOutput,
}));
// Input Schema
export const LocationListCachedImagesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/locations/{location}/cachedImages",
      apiVersion: "2025-09-01",
    }),
  );
export type LocationListCachedImagesInput =
  typeof LocationListCachedImagesInput.Type;

// Output Schema
export const LocationListCachedImagesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => CachedImagesSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type LocationListCachedImagesOutput =
  typeof LocationListCachedImagesOutput.Type;

// The operation
/**
 * Get the list of cached images.
 *
 * Get the list of cached images on specific OS type for a subscription in a region.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const LocationListCachedImages = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LocationListCachedImagesInput,
    outputSchema: LocationListCachedImagesOutput,
  }),
);
// Input Schema
export const LocationListCapabilitiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/locations/{location}/capabilities",
      apiVersion: "2025-09-01",
    }),
  );
export type LocationListCapabilitiesInput =
  typeof LocationListCapabilitiesInput.Type;

// Output Schema
export const LocationListCapabilitiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => CapabilitiesSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type LocationListCapabilitiesOutput =
  typeof LocationListCapabilitiesOutput.Type;

// The operation
/**
 * Get the list of capabilities of the location.
 *
 * Get the list of CPU/memory/GPU capabilities of a region.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const LocationListCapabilities = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LocationListCapabilitiesInput,
    outputSchema: LocationListCapabilitiesOutput,
  }),
);
// Input Schema
export const LocationListUsageInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/locations/{location}/usages",
    apiVersion: "2025-09-01",
  }),
);
export type LocationListUsageInput = typeof LocationListUsageInput.Type;

// Output Schema
export const LocationListUsageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => UsageSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type LocationListUsageOutput = typeof LocationListUsageOutput.Type;

// The operation
/**
 * Get the usage for a subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const LocationListUsage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LocationListUsageInput,
  outputSchema: LocationListUsageOutput,
}));
// Input Schema
export const NGroupsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ngroupsName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => NGroupPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
    identity: Schema.optional(Schema.suspend(() => NGroupIdentitySchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/ngroups/{ngroupsName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type NGroupsCreateOrUpdateInput = typeof NGroupsCreateOrUpdateInput.Type;

// Output Schema
export const NGroupsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => NGroupPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
    identity: Schema.optional(Schema.suspend(() => NGroupIdentitySchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type NGroupsCreateOrUpdateOutput =
  typeof NGroupsCreateOrUpdateOutput.Type;

// The operation
/**
 * NGroup PUT REST API
 *
 * Create or update a NGroups resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ngroupsName - The NGroups name.
 */
export const NGroupsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NGroupsCreateOrUpdateInput,
    outputSchema: NGroupsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const NGroupsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ngroupsName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/ngroups/{ngroupsName}",
    apiVersion: "2025-09-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type NGroupsDeleteInput = typeof NGroupsDeleteInput.Type;

// Output Schema
export const NGroupsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NGroupsDeleteOutput = typeof NGroupsDeleteOutput.Type;

// The operation
/**
 * NGroups Delete REST API
 *
 * Deletes the NGroups resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ngroupsName - The NGroups name.
 */
export const NGroupsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NGroupsDeleteInput,
  outputSchema: NGroupsDeleteOutput,
}));
// Input Schema
export const NGroupsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ngroupsName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/ngroups/{ngroupsName}",
    apiVersion: "2025-09-01",
  }),
);
export type NGroupsGetInput = typeof NGroupsGetInput.Type;

// Output Schema
export const NGroupsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => NGroupPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  zones: Schema.optional(Schema.Array(Schema.String)),
  identity: Schema.optional(Schema.suspend(() => NGroupIdentitySchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type NGroupsGetOutput = typeof NGroupsGetOutput.Type;

// The operation
/**
 * NGroups GET REST API
 *
 * Get the properties of the specified NGroups resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ngroupsName - The NGroups name.
 */
export const NGroupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NGroupsGetInput,
  outputSchema: NGroupsGetOutput,
}));
// Input Schema
export const NGroupsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/ngroups",
    apiVersion: "2025-09-01",
  }),
);
export type NGroupsListInput = typeof NGroupsListInput.Type;

// Output Schema
export const NGroupsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => NGroupSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type NGroupsListOutput = typeof NGroupsListOutput.Type;

// The operation
/**
 * List NGroups in a subscription.
 *
 * Gets a list of all NGroups resources under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NGroupsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NGroupsListInput,
  outputSchema: NGroupsListOutput,
}));
// Input Schema
export const NGroupsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/ngroups",
      apiVersion: "2025-09-01",
    }),
  );
export type NGroupsListByResourceGroupInput =
  typeof NGroupsListByResourceGroupInput.Type;

// Output Schema
export const NGroupsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => NGroupSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type NGroupsListByResourceGroupOutput =
  typeof NGroupsListByResourceGroupOutput.Type;

// The operation
/**
 * GET NGroups under a resource group REST API.
 *
 * Gets a list of all NGroups resources under a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NGroupsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NGroupsListByResourceGroupInput,
    outputSchema: NGroupsListByResourceGroupOutput,
  }),
);
// Input Schema
export const NGroupsRestartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ngroupsName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/ngroups/{ngroupsName}/restart",
    apiVersion: "2025-09-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type NGroupsRestartInput = typeof NGroupsRestartInput.Type;

// Output Schema
export const NGroupsRestartOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NGroupsRestartOutput = typeof NGroupsRestartOutput.Type;

// The operation
/**
 * Restarts all container groups in the specified NGroups resource.
 *
 * Restarts all container groups in the specified NGroups resource in place. If container image has updates, new image will be downloaded.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ngroupsName - The NGroups name.
 */
export const NGroupsRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NGroupsRestartInput,
  outputSchema: NGroupsRestartOutput,
}));
// Input Schema
export const NGroupsStartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ngroupsName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/ngroups/{ngroupsName}/start",
    apiVersion: "2025-09-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type NGroupsStartInput = typeof NGroupsStartInput.Type;

// Output Schema
export const NGroupsStartOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NGroupsStartOutput = typeof NGroupsStartOutput.Type;

// The operation
/**
 * Starts all container groups in the specified NGroups resource.
 *
 * Starts all container groups in the specified NGroups resource. Compute resources will be allocated and billing will start.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ngroupsName - The NGroups name.
 */
export const NGroupsStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NGroupsStartInput,
  outputSchema: NGroupsStartOutput,
}));
// Input Schema
export const NGroupsStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ngroupsName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/ngroups/{ngroupsName}/stop",
    apiVersion: "2025-09-01",
  }),
);
export type NGroupsStopInput = typeof NGroupsStopInput.Type;

// Output Schema
export const NGroupsStopOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NGroupsStopOutput = typeof NGroupsStopOutput.Type;

// The operation
/**
 * Stops all container groups in the specified NGroups resource.
 *
 * Stops all container groups in the specified NGroups resource. Compute resources will be deallocated and billing will stop.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ngroupsName - The NGroups name.
 */
export const NGroupsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NGroupsStopInput,
  outputSchema: NGroupsStopOutput,
}));
// Input Schema
export const NGroupsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ngroupsName: Schema.String.pipe(T.PathParam()),
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
  properties: Schema.optional(Schema.suspend(() => NGroupPropertiesSchema)),
  identity: Schema.optional(Schema.suspend(() => NGroupIdentitySchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  zones: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/ngroups/{ngroupsName}",
    apiVersion: "2025-09-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type NGroupsUpdateInput = typeof NGroupsUpdateInput.Type;

// Output Schema
export const NGroupsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => NGroupPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  zones: Schema.optional(Schema.Array(Schema.String)),
  identity: Schema.optional(Schema.suspend(() => NGroupIdentitySchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type NGroupsUpdateOutput = typeof NGroupsUpdateOutput.Type;

// The operation
/**
 * NGroups PATCH REST API
 *
 * Update a specified NGroups resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ngroupsName - The NGroups name.
 */
export const NGroupsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NGroupsUpdateInput,
  outputSchema: NGroupsUpdateOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ContainerInstance/operations",
    apiVersion: "2025-09-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => OperationSchema)),
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
export const SubnetServiceAssociationLinkDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
    subnetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}/providers/Microsoft.ContainerInstance/serviceAssociationLinks/default",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SubnetServiceAssociationLinkDeleteInput =
  typeof SubnetServiceAssociationLinkDeleteInput.Type;

// Output Schema
export const SubnetServiceAssociationLinkDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SubnetServiceAssociationLinkDeleteOutput =
  typeof SubnetServiceAssociationLinkDeleteOutput.Type;

// The operation
/**
 * Delete container group virtual network association links.
 *
 * Delete container group virtual network association links. The operation does not delete other resources provided by the user.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualNetworkName - The name of the virtual network.
 * @param subnetName - The name of the subnet.
 */
export const SubnetServiceAssociationLinkDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SubnetServiceAssociationLinkDeleteInput,
    outputSchema: SubnetServiceAssociationLinkDeleteOutput,
  }));
