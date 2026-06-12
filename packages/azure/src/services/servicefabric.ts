/**
 * Azure Servicefabric API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const ClusterPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  addOnFeatures: Schema.optional(
    Schema.Array(Schema.suspend(() => AddOnFeaturesSchema)),
  ),
  availableClusterVersions: Schema.optional(
    Schema.Array(Schema.suspend(() => ClusterVersionDetailsSchema)),
  ),
  azureActiveDirectory: Schema.optional(
    Schema.suspend(() => AzureActiveDirectorySchema),
  ),
  certificate: Schema.optional(
    Schema.suspend(() => CertificateDescriptionSchema),
  ),
  certificateCommonNames: Schema.optional(
    Schema.suspend(() => ServerCertificateCommonNamesSchema),
  ),
  clientCertificateCommonNames: Schema.optional(
    Schema.Array(Schema.suspend(() => ClientCertificateCommonNameSchema)),
  ),
  clientCertificateThumbprints: Schema.optional(
    Schema.Array(Schema.suspend(() => ClientCertificateThumbprintSchema)),
  ),
  clusterCodeVersion: Schema.optional(Schema.String),
  clusterEndpoint: Schema.optional(Schema.String),
  clusterId: Schema.optional(Schema.String),
  clusterState: Schema.optional(Schema.suspend(() => ClusterStateSchema)),
  diagnosticsStorageAccountConfig: Schema.optional(
    Schema.suspend(() => DiagnosticsStorageAccountConfigSchema),
  ),
  eventStoreServiceEnabled: Schema.optional(Schema.Boolean),
  fabricSettings: Schema.optional(
    Schema.Array(Schema.suspend(() => SettingsSectionDescriptionSchema)),
  ),
  managementEndpoint: Schema.String,
  nodeTypes: Schema.Array(Schema.suspend(() => NodeTypeDescriptionSchema)),
  provisioningState: Schema.optional(
    Schema.Literals(["Updating", "Succeeded", "Failed", "Canceled"]),
  ),
  reliabilityLevel: Schema.optional(
    Schema.suspend(() => ReliabilityLevelSchema),
  ),
  reverseProxyCertificate: Schema.optional(
    Schema.suspend(() => CertificateDescriptionSchema),
  ),
  reverseProxyCertificateCommonNames: Schema.optional(
    Schema.suspend(() => ServerCertificateCommonNamesSchema),
  ),
  upgradeDescription: Schema.optional(
    Schema.suspend(() => ClusterUpgradePolicySchema),
  ),
  upgradeMode: Schema.optional(Schema.suspend(() => UpgradeModeSchema)),
  applicationTypeVersionsCleanupPolicy: Schema.optional(
    Schema.suspend(() => ApplicationTypeVersionsCleanupPolicySchema),
  ),
  vmImage: Schema.optional(Schema.String),
  sfZonalUpgradeMode: Schema.optional(
    Schema.suspend(() => SfZonalUpgradeModeSchema),
  ),
  vmssZonalUpgradeMode: Schema.optional(
    Schema.suspend(() => VmssZonalUpgradeModeSchema),
  ),
  infrastructureServiceManager: Schema.optional(Schema.Boolean),
  upgradeWave: Schema.optional(
    Schema.suspend(() => ClusterUpgradeCadenceSchema),
  ),
  upgradePauseStartTimestampUtc: Schema.optional(Schema.String),
  upgradePauseEndTimestampUtc: Schema.optional(Schema.String),
  waveUpgradePaused: Schema.optional(Schema.Boolean),
  notifications: Schema.optional(
    Schema.Array(Schema.suspend(() => NotificationSchema)),
  ),
});
const AddOnFeaturesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "RepairManager",
  "DnsService",
  "BackupRestoreService",
  "ResourceMonitorService",
]);
const ClusterVersionDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  codeVersion: Schema.optional(Schema.String),
  supportExpiryUtc: Schema.optional(Schema.String),
  environment: Schema.optional(Schema.suspend(() => ClusterEnvironmentSchema)),
});
const ClusterEnvironmentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Windows",
  "Linux",
]);
const AzureActiveDirectorySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tenantId: Schema.optional(Schema.String),
  clusterApplication: Schema.optional(Schema.String),
  clientApplication: Schema.optional(Schema.String),
});
const CertificateDescriptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  thumbprint: Schema.String,
  thumbprintSecondary: Schema.optional(Schema.String),
  x509StoreName: Schema.optional(Schema.suspend(() => StoreNameSchema)),
});
const StoreNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "AddressBook",
  "AuthRoot",
  "CertificateAuthority",
  "Disallowed",
  "My",
  "Root",
  "TrustedPeople",
  "TrustedPublisher",
]);
const ServerCertificateCommonNamesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commonNames: Schema.optional(
      Schema.Array(Schema.suspend(() => ServerCertificateCommonNameSchema)),
    ),
    x509StoreName: Schema.optional(Schema.suspend(() => StoreNameSchema)),
  });
const ServerCertificateCommonNameSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateCommonName: Schema.String,
    certificateIssuerThumbprint: Schema.String,
  });
const ClientCertificateCommonNameSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isAdmin: Schema.Boolean,
    certificateCommonName: Schema.String,
    certificateIssuerThumbprint: Schema.String,
  });
const ClientCertificateThumbprintSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isAdmin: Schema.Boolean,
    certificateThumbprint: Schema.String,
  });
const ClusterStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "WaitingForNodes",
  "Deploying",
  "BaselineUpgrade",
  "UpdatingUserConfiguration",
  "UpdatingUserCertificate",
  "UpdatingInfrastructure",
  "EnforcingClusterVersion",
  "UpgradeServiceUnreachable",
  "AutoScale",
  "Ready",
]);
const DiagnosticsStorageAccountConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageAccountName: Schema.String,
    protectedAccountKeyName: Schema.String,
    protectedAccountKeyName2: Schema.optional(Schema.String),
    blobEndpoint: Schema.String,
    queueEndpoint: Schema.String,
    tableEndpoint: Schema.String,
  });
const SettingsSectionDescriptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    parameters: Schema.Array(
      Schema.suspend(() => SettingsParameterDescriptionSchema),
    ),
  });
const SettingsParameterDescriptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    value: Schema.String,
  });
const NodeTypeDescriptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  placementProperties: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  capacities: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  clientConnectionEndpointPort: Schema.Number,
  httpGatewayEndpointPort: Schema.Number,
  durabilityLevel: Schema.optional(Schema.suspend(() => DurabilityLevelSchema)),
  applicationPorts: Schema.optional(
    Schema.suspend(() => EndpointRangeDescriptionSchema),
  ),
  ephemeralPorts: Schema.optional(
    Schema.suspend(() => EndpointRangeDescriptionSchema),
  ),
  isPrimary: Schema.Boolean,
  vmInstanceCount: Schema.Number,
  reverseProxyEndpointPort: Schema.optional(Schema.Number),
  isStateless: Schema.optional(Schema.Boolean),
  multipleAvailabilityZones: Schema.optional(Schema.Boolean),
});
const DurabilityLevelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Bronze",
  "Silver",
  "Gold",
]);
const EndpointRangeDescriptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startPort: Schema.Number,
    endPort: Schema.Number,
  });
const ReliabilityLevelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
]);
const ClusterUpgradePolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  forceRestart: Schema.optional(Schema.Boolean),
  upgradeReplicaSetCheckTimeout: Schema.String,
  healthCheckWaitDuration: Schema.String,
  healthCheckStableDuration: Schema.String,
  healthCheckRetryTimeout: Schema.String,
  upgradeTimeout: Schema.String,
  upgradeDomainTimeout: Schema.String,
  healthPolicy: Schema.suspend(() => ClusterHealthPolicySchema),
  deltaHealthPolicy: Schema.optional(
    Schema.suspend(() => ClusterUpgradeDeltaHealthPolicySchema),
  ),
});
const ClusterHealthPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxPercentUnhealthyNodes: Schema.optional(Schema.Number),
  maxPercentUnhealthyApplications: Schema.optional(Schema.Number),
  applicationHealthPolicies: Schema.optional(
    Schema.suspend(() => ApplicationHealthPolicyMapSchema),
  ),
});
const ApplicationHealthPolicyMapSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.suspend(() => ApplicationHealthPolicySchema),
  );
const ApplicationHealthPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    defaultServiceTypeHealthPolicy: Schema.optional(
      Schema.suspend(() => ServiceTypeHealthPolicySchema),
    ),
    serviceTypeHealthPolicies: Schema.optional(
      Schema.suspend(() => ServiceTypeHealthPolicyMapSchema),
    ),
  },
);
const ServiceTypeHealthPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    maxPercentUnhealthyServices: Schema.optional(Schema.Number),
  },
);
const ServiceTypeHealthPolicyMapSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.suspend(() => ServiceTypeHealthPolicySchema),
  );
const ClusterUpgradeDeltaHealthPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxPercentDeltaUnhealthyNodes: Schema.Number,
    maxPercentUpgradeDomainDeltaUnhealthyNodes: Schema.Number,
    maxPercentDeltaUnhealthyApplications: Schema.Number,
    applicationDeltaHealthPolicies: Schema.optional(
      Schema.suspend(() => ApplicationDeltaHealthPolicyMapSchema),
    ),
  });
const ApplicationDeltaHealthPolicyMapSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.suspend(() => ApplicationDeltaHealthPolicySchema),
  );
const ApplicationDeltaHealthPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultServiceTypeDeltaHealthPolicy: Schema.optional(
      Schema.suspend(() => ServiceTypeDeltaHealthPolicySchema),
    ),
    serviceTypeDeltaHealthPolicies: Schema.optional(
      Schema.suspend(() => ServiceTypeDeltaHealthPolicyMapSchema),
    ),
  });
const ServiceTypeDeltaHealthPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxPercentDeltaUnhealthyServices: Schema.optional(Schema.Number),
  });
const ServiceTypeDeltaHealthPolicyMapSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.suspend(() => ServiceTypeDeltaHealthPolicySchema),
  );
const UpgradeModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Automatic",
  "Manual",
]);
const ApplicationTypeVersionsCleanupPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxUnusedVersionsToKeep: Schema.Number,
  });
const SfZonalUpgradeModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Parallel",
  "Hierarchical",
]);
const VmssZonalUpgradeModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Parallel",
  "Hierarchical",
]);
const ClusterUpgradeCadenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["Wave0", "Wave1", "Wave2"],
);
const NotificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isEnabled: Schema.Boolean,
  notificationCategory: Schema.Literals(["WaveProgress"]),
  notificationLevel: Schema.Literals(["Critical", "All"]),
  notificationTargets: Schema.Array(
    Schema.suspend(() => NotificationTargetSchema),
  ),
});
const NotificationTargetSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  notificationChannel: Schema.Literals(["EmailUser", "EmailSubscription"]),
  receivers: Schema.Array(Schema.String),
});
const SystemDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createdBy: Schema.optional(Schema.String),
  createdByType: Schema.optional(Schema.String),
  createdAt: Schema.optional(Schema.String),
  lastModifiedBy: Schema.optional(Schema.String),
  lastModifiedByType: Schema.optional(Schema.String),
  lastModifiedAt: Schema.optional(Schema.String),
});
const ClusterPropertiesUpdateParametersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addOnFeatures: Schema.optional(
      Schema.Array(Schema.suspend(() => AddOnFeaturesSchema)),
    ),
    certificate: Schema.optional(
      Schema.suspend(() => CertificateDescriptionSchema),
    ),
    certificateCommonNames: Schema.optional(
      Schema.suspend(() => ServerCertificateCommonNamesSchema),
    ),
    clientCertificateCommonNames: Schema.optional(
      Schema.Array(Schema.suspend(() => ClientCertificateCommonNameSchema)),
    ),
    clientCertificateThumbprints: Schema.optional(
      Schema.Array(Schema.suspend(() => ClientCertificateThumbprintSchema)),
    ),
    clusterCodeVersion: Schema.optional(Schema.String),
    eventStoreServiceEnabled: Schema.optional(Schema.Boolean),
    fabricSettings: Schema.optional(
      Schema.Array(Schema.suspend(() => SettingsSectionDescriptionSchema)),
    ),
    nodeTypes: Schema.optional(
      Schema.Array(Schema.suspend(() => NodeTypeDescriptionSchema)),
    ),
    reliabilityLevel: Schema.optional(
      Schema.suspend(() => ReliabilityLevelSchema),
    ),
    reverseProxyCertificate: Schema.optional(
      Schema.suspend(() => CertificateDescriptionSchema),
    ),
    upgradeDescription: Schema.optional(
      Schema.suspend(() => ClusterUpgradePolicySchema),
    ),
    applicationTypeVersionsCleanupPolicy: Schema.optional(
      Schema.suspend(() => ApplicationTypeVersionsCleanupPolicySchema),
    ),
    upgradeMode: Schema.optional(Schema.suspend(() => UpgradeModeSchema)),
    sfZonalUpgradeMode: Schema.optional(
      Schema.suspend(() => SfZonalUpgradeModeSchema),
    ),
    vmssZonalUpgradeMode: Schema.optional(
      Schema.suspend(() => VmssZonalUpgradeModeSchema),
    ),
    infrastructureServiceManager: Schema.optional(Schema.Boolean),
    upgradeWave: Schema.optional(
      Schema.suspend(() => ClusterUpgradeCadenceSchema),
    ),
    upgradePauseStartTimestampUtc: Schema.optional(Schema.String),
    upgradePauseEndTimestampUtc: Schema.optional(Schema.String),
    waveUpgradePaused: Schema.optional(Schema.Boolean),
    notifications: Schema.optional(
      Schema.Array(Schema.suspend(() => NotificationSchema)),
    ),
  });
const ClusterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
});
const ClusterCodeVersionsResultSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => ClusterVersionDetailsSchema),
    ),
  });
const OperationResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  isDataAction: Schema.optional(Schema.Boolean),
  display: Schema.optional(
    Schema.suspend(() => AvailableOperationDisplaySchema),
  ),
  origin: Schema.optional(Schema.String),
  nextLink: Schema.optional(Schema.String),
});
const AvailableOperationDisplaySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  });
const ApplicationTypeResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(Schema.String),
  });
const ApplicationTypeResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
  },
);
const ApplicationTypeVersionResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(Schema.String),
    appPackageUrl: Schema.String,
    defaultParameterList: Schema.optional(
      Schema.suspend(() => ApplicationTypeParameterListSchema),
    ),
  });
const ApplicationTypeParameterListSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.String);
const ApplicationTypeVersionResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
  });
const ManagedIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  tenantId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.suspend(() => ManagedIdentityTypeSchema)),
  userAssignedIdentities: Schema.optional(
    Schema.suspend(() => UserAssignedIdentityMapSchema),
  ),
});
const ManagedIdentityTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SystemAssigned",
  "UserAssigned",
  "SystemAssigned, UserAssigned",
  "None",
]);
const UserAssignedIdentityMapSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.suspend(() => UserAssignedIdentitySchema),
);
const UserAssignedIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
});
const ApplicationResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    typeVersion: Schema.optional(
      Schema.suspend(() => ApplicationTypeVersionSchema),
    ),
    parameters: Schema.optional(
      Schema.suspend(() => ApplicationParameterListSchema),
    ),
    upgradePolicy: Schema.optional(
      Schema.suspend(() => ApplicationUpgradePolicySchema),
    ),
    minimumNodes: Schema.optional(Schema.Number),
    maximumNodes: Schema.optional(Schema.Number),
    removeApplicationCapacity: Schema.optional(Schema.Boolean),
    metrics: Schema.optional(
      Schema.suspend(() => ApplicationMetricDescriptionListSchema),
    ),
    managedIdentities: Schema.optional(
      Schema.Array(Schema.suspend(() => ApplicationUserAssignedIdentitySchema)),
    ),
  });
const ApplicationTypeVersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const ApplicationParameterListSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.String);
const ApplicationUpgradePolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upgradeReplicaSetCheckTimeout: Schema.optional(Schema.String),
    forceRestart: Schema.optional(Schema.suspend(() => ForceRestartSchema)),
    rollingUpgradeMonitoringPolicy: Schema.optional(
      Schema.suspend(() => ArmRollingUpgradeMonitoringPolicySchema),
    ),
    applicationHealthPolicy: Schema.optional(
      Schema.suspend(() => ArmApplicationHealthPolicySchema),
    ),
    upgradeMode: Schema.optional(
      Schema.suspend(() => RollingUpgradeModeSchema),
    ),
    recreateApplication: Schema.optional(Schema.Boolean),
  });
const ForceRestartSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Boolean;
const ArmRollingUpgradeMonitoringPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failureAction: Schema.optional(Schema.Literals(["Rollback", "Manual"])),
    healthCheckWaitDuration: Schema.optional(
      Schema.suspend(() => HealthCheckWaitDurationSchema),
    ),
    healthCheckStableDuration: Schema.optional(
      Schema.suspend(() => HealthCheckStableDurationSchema),
    ),
    healthCheckRetryTimeout: Schema.optional(
      Schema.suspend(() => HealthCheckRetryTimeoutSchema),
    ),
    upgradeTimeout: Schema.optional(Schema.suspend(() => UpgradeTimeoutSchema)),
    upgradeDomainTimeout: Schema.optional(
      Schema.suspend(() => UpgradeDomainTimeoutSchema),
    ),
  });
const HealthCheckWaitDurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const HealthCheckStableDurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const HealthCheckRetryTimeoutSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const UpgradeTimeoutSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const UpgradeDomainTimeoutSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const ArmApplicationHealthPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    considerWarningAsError: Schema.optional(Schema.Boolean),
    maxPercentUnhealthyDeployedApplications: Schema.optional(Schema.Number),
    defaultServiceTypeHealthPolicy: Schema.optional(
      Schema.suspend(() => ArmServiceTypeHealthPolicySchema),
    ),
    serviceTypeHealthPolicyMap: Schema.optional(
      Schema.suspend(() => ArmServiceTypeHealthPolicyMapSchema),
    ),
  });
const ArmServiceTypeHealthPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxPercentUnhealthyServices: Schema.optional(Schema.Number),
    maxPercentUnhealthyPartitionsPerService: Schema.optional(Schema.Number),
    maxPercentUnhealthyReplicasPerPartition: Schema.optional(Schema.Number),
  });
const ArmServiceTypeHealthPolicyMapSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.suspend(() => ArmServiceTypeHealthPolicySchema),
  );
const RollingUpgradeModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Invalid",
  "UnmonitoredAuto",
  "UnmonitoredManual",
  "Monitored",
]);
const ApplicationMetricDescriptionListSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => ApplicationMetricDescriptionSchema),
  );
const ApplicationMetricDescriptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    maximumCapacity: Schema.optional(Schema.Number),
    reservationCapacity: Schema.optional(Schema.Number),
    totalApplicationCapacity: Schema.optional(Schema.Number),
  });
const ApplicationUserAssignedIdentitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    principalId: Schema.String,
  });
const ApplicationResourceUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    typeVersion: Schema.optional(
      Schema.suspend(() => ApplicationTypeVersionSchema),
    ),
    parameters: Schema.optional(
      Schema.suspend(() => ApplicationParameterListSchema),
    ),
    upgradePolicy: Schema.optional(
      Schema.suspend(() => ApplicationUpgradePolicySchema),
    ),
    minimumNodes: Schema.optional(Schema.Number),
    maximumNodes: Schema.optional(Schema.Number),
    removeApplicationCapacity: Schema.optional(Schema.Boolean),
    metrics: Schema.optional(
      Schema.suspend(() => ApplicationMetricDescriptionListSchema),
    ),
    managedIdentities: Schema.optional(
      Schema.Array(Schema.suspend(() => ApplicationUserAssignedIdentitySchema)),
    ),
  });
const ApplicationResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
});
const ServiceResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    placementConstraints: Schema.optional(Schema.String),
    correlationScheme: Schema.optional(
      Schema.suspend(() => CorrelationSchemeListSchema),
    ),
    serviceLoadMetrics: Schema.optional(
      Schema.suspend(() => ServiceLoadMetricsListSchema),
    ),
    servicePlacementPolicies: Schema.optional(
      Schema.suspend(() => ServicePlacementPoliciesListSchema),
    ),
    defaultMoveCost: Schema.optional(Schema.suspend(() => MoveCostSchema)),
  });
const CorrelationSchemeListSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => ServiceCorrelationDescriptionSchema),
);
const ServiceCorrelationDescriptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scheme: Schema.suspend(() => ServiceCorrelationSchemeSchema),
    serviceName: Schema.suspend(() => ServiceNameSchema),
  });
const ServiceCorrelationSchemeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Invalid",
    "Affinity",
    "AlignedAffinity",
    "NonAlignedAffinity",
  ]);
const ServiceNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const ServiceLoadMetricsListSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => ServiceLoadMetricDescriptionSchema),
);
const ServiceLoadMetricDescriptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    weight: Schema.optional(
      Schema.suspend(() => ServiceLoadMetricWeightSchema),
    ),
    primaryDefaultLoad: Schema.optional(Schema.Number),
    secondaryDefaultLoad: Schema.optional(Schema.Number),
    defaultLoad: Schema.optional(Schema.Number),
  });
const ServiceLoadMetricWeightSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Zero",
    "Low",
    "Medium",
    "High",
  ]);
const ServicePlacementPoliciesListSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => ServicePlacementPolicyDescriptionSchema),
  );
const ServicePlacementPolicyDescriptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.suspend(() => ServicePlacementPolicyTypeSchema),
  });
const ServicePlacementPolicyTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Invalid",
    "InvalidDomain",
    "RequiredDomain",
    "PreferredPrimaryDomain",
    "RequiredDomainDistribution",
    "NonPartiallyPlaceService",
  ]);
const MoveCostSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Zero",
  "Low",
  "Medium",
  "High",
]);
const ServiceResourceUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    placementConstraints: Schema.optional(Schema.String),
    correlationScheme: Schema.optional(
      Schema.suspend(() => CorrelationSchemeListSchema),
    ),
    serviceLoadMetrics: Schema.optional(
      Schema.suspend(() => ServiceLoadMetricsListSchema),
    ),
    servicePlacementPolicies: Schema.optional(
      Schema.suspend(() => ServicePlacementPoliciesListSchema),
    ),
    defaultMoveCost: Schema.optional(Schema.suspend(() => MoveCostSchema)),
  });
const ServiceResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
});

// Input Schema
export const ApplicationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identity: Schema.optional(Schema.suspend(() => ManagedIdentitySchema)),
    properties: Schema.optional(
      Schema.suspend(() => ApplicationResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}",
      apiVersion: "2021-06-01",
      longRunning: {},
    }),
  );
export type ApplicationsCreateOrUpdateInput =
  typeof ApplicationsCreateOrUpdateInput.Type;

// Output Schema
export const ApplicationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsCreateOrUpdateOutput =
  typeof ApplicationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a Service Fabric application resource.
 *
 * Create or update a Service Fabric application resource with the specified name.
 */
export const ApplicationsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsCreateOrUpdateInput,
    outputSchema: ApplicationsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ApplicationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}",
      apiVersion: "2021-06-01",
      longRunning: {},
    }),
  );
export type ApplicationsDeleteInput = typeof ApplicationsDeleteInput.Type;

// Output Schema
export const ApplicationsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsDeleteOutput = typeof ApplicationsDeleteOutput.Type;

// The operation
/**
 * Deletes a Service Fabric application resource.
 *
 * Delete a Service Fabric application resource with the specified name.
 */
export const ApplicationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsDeleteInput,
  outputSchema: ApplicationsDeleteOutput,
}));
// Input Schema
export const ApplicationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}",
    apiVersion: "2021-06-01",
  }),
);
export type ApplicationsGetInput = typeof ApplicationsGetInput.Type;

// Output Schema
export const ApplicationsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  identity: Schema.optional(Schema.suspend(() => ManagedIdentitySchema)),
  properties: Schema.optional(
    Schema.suspend(() => ApplicationResourcePropertiesSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
});
export type ApplicationsGetOutput = typeof ApplicationsGetOutput.Type;

// The operation
/**
 * Gets a Service Fabric application resource.
 *
 * Get a Service Fabric application resource created or in the process of being created in the Service Fabric cluster resource.
 */
export const ApplicationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsGetInput,
  outputSchema: ApplicationsGetOutput,
}));
// Input Schema
export const ApplicationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications",
    apiVersion: "2021-06-01",
  }),
);
export type ApplicationsListInput = typeof ApplicationsListInput.Type;

// Output Schema
export const ApplicationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ApplicationResourceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  },
);
export type ApplicationsListOutput = typeof ApplicationsListOutput.Type;

// The operation
/**
 * Gets the list of application resources created in the specified Service Fabric cluster resource.
 *
 * Gets all application resources created or in the process of being created in the Service Fabric cluster resource.
 */
export const ApplicationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsListInput,
  outputSchema: ApplicationsListOutput,
}));
// Input Schema
export const ApplicationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ApplicationResourceUpdatePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}",
      apiVersion: "2021-06-01",
      longRunning: {},
    }),
  );
export type ApplicationsUpdateInput = typeof ApplicationsUpdateInput.Type;

// Output Schema
export const ApplicationsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsUpdateOutput = typeof ApplicationsUpdateOutput.Type;

// The operation
/**
 * Updates a Service Fabric application resource.
 *
 * Update a Service Fabric application resource with the specified name.
 */
export const ApplicationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsUpdateInput,
  outputSchema: ApplicationsUpdateOutput,
}));
// Input Schema
export const ApplicationTypesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ApplicationTypeResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}",
      apiVersion: "2021-06-01",
    }),
  );
export type ApplicationTypesCreateOrUpdateInput =
  typeof ApplicationTypesCreateOrUpdateInput.Type;

// Output Schema
export const ApplicationTypesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ApplicationTypeResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
  });
export type ApplicationTypesCreateOrUpdateOutput =
  typeof ApplicationTypesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a Service Fabric application type name resource.
 *
 * Create or update a Service Fabric application type name resource with the specified name.
 */
export const ApplicationTypesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationTypesCreateOrUpdateInput,
    outputSchema: ApplicationTypesCreateOrUpdateOutput,
  }));
// Input Schema
export const ApplicationTypesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}",
      apiVersion: "2021-06-01",
      longRunning: {},
    }),
  );
export type ApplicationTypesDeleteInput =
  typeof ApplicationTypesDeleteInput.Type;

// Output Schema
export const ApplicationTypesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationTypesDeleteOutput =
  typeof ApplicationTypesDeleteOutput.Type;

// The operation
/**
 * Deletes a Service Fabric application type name resource.
 *
 * Delete a Service Fabric application type name resource with the specified name.
 */
export const ApplicationTypesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationTypesDeleteInput,
    outputSchema: ApplicationTypesDeleteOutput,
  }),
);
// Input Schema
export const ApplicationTypesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}",
      apiVersion: "2021-06-01",
    }),
  );
export type ApplicationTypesGetInput = typeof ApplicationTypesGetInput.Type;

// Output Schema
export const ApplicationTypesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ApplicationTypeResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
  });
export type ApplicationTypesGetOutput = typeof ApplicationTypesGetOutput.Type;

// The operation
/**
 * Gets a Service Fabric application type name resource.
 *
 * Get a Service Fabric application type name resource created or in the process of being created in the Service Fabric cluster resource.
 */
export const ApplicationTypesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationTypesGetInput,
  outputSchema: ApplicationTypesGetOutput,
}));
// Input Schema
export const ApplicationTypesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes",
      apiVersion: "2021-06-01",
    }),
  );
export type ApplicationTypesListInput = typeof ApplicationTypesListInput.Type;

// Output Schema
export const ApplicationTypesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ApplicationTypeResourceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ApplicationTypesListOutput = typeof ApplicationTypesListOutput.Type;

// The operation
/**
 * Gets the list of application type name resources created in the specified Service Fabric cluster resource.
 *
 * Gets all application type name resources created or in the process of being created in the Service Fabric cluster resource.
 */
export const ApplicationTypesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationTypesListInput,
    outputSchema: ApplicationTypesListOutput,
  }),
);
// Input Schema
export const ApplicationTypeVersionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ApplicationTypeVersionResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}",
      apiVersion: "2021-06-01",
      longRunning: {},
    }),
  );
export type ApplicationTypeVersionsCreateOrUpdateInput =
  typeof ApplicationTypeVersionsCreateOrUpdateInput.Type;

// Output Schema
export const ApplicationTypeVersionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationTypeVersionsCreateOrUpdateOutput =
  typeof ApplicationTypeVersionsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a Service Fabric application type version resource.
 *
 * Create or update a Service Fabric application type version resource with the specified name.
 */
export const ApplicationTypeVersionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationTypeVersionsCreateOrUpdateInput,
    outputSchema: ApplicationTypeVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export const ApplicationTypeVersionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}",
      apiVersion: "2021-06-01",
      longRunning: {},
    }),
  );
export type ApplicationTypeVersionsDeleteInput =
  typeof ApplicationTypeVersionsDeleteInput.Type;

// Output Schema
export const ApplicationTypeVersionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationTypeVersionsDeleteOutput =
  typeof ApplicationTypeVersionsDeleteOutput.Type;

// The operation
/**
 * Deletes a Service Fabric application type version resource.
 *
 * Delete a Service Fabric application type version resource with the specified name.
 */
export const ApplicationTypeVersionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationTypeVersionsDeleteInput,
    outputSchema: ApplicationTypeVersionsDeleteOutput,
  }));
// Input Schema
export const ApplicationTypeVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}",
      apiVersion: "2021-06-01",
    }),
  );
export type ApplicationTypeVersionsGetInput =
  typeof ApplicationTypeVersionsGetInput.Type;

// Output Schema
export const ApplicationTypeVersionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ApplicationTypeVersionResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
  });
export type ApplicationTypeVersionsGetOutput =
  typeof ApplicationTypeVersionsGetOutput.Type;

// The operation
/**
 * Gets a Service Fabric application type version resource.
 *
 * Get a Service Fabric application type version resource created or in the process of being created in the Service Fabric application type name resource.
 */
export const ApplicationTypeVersionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationTypeVersionsGetInput,
    outputSchema: ApplicationTypeVersionsGetOutput,
  }),
);
// Input Schema
export const ApplicationTypeVersionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}/versions",
      apiVersion: "2021-06-01",
    }),
  );
export type ApplicationTypeVersionsListInput =
  typeof ApplicationTypeVersionsListInput.Type;

// Output Schema
export const ApplicationTypeVersionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ApplicationTypeVersionResourceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ApplicationTypeVersionsListOutput =
  typeof ApplicationTypeVersionsListOutput.Type;

// The operation
/**
 * Gets the list of application type version resources created in the specified Service Fabric application type name resource.
 *
 * Gets all application type version resources created or in the process of being created in the Service Fabric application type name resource.
 */
export const ApplicationTypeVersionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationTypeVersionsListInput,
    outputSchema: ApplicationTypeVersionsListOutput,
  }),
);
// Input Schema
export const ClustersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => ClusterPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}",
      apiVersion: "2021-06-01",
      longRunning: {},
    }),
  );
export type ClustersCreateOrUpdateInput =
  typeof ClustersCreateOrUpdateInput.Type;

// Output Schema
export const ClustersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => ClusterPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
  });
export type ClustersCreateOrUpdateOutput =
  typeof ClustersCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a Service Fabric cluster resource.
 *
 * Create or update a Service Fabric cluster resource with the specified name.
 */
export const ClustersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersCreateOrUpdateInput,
    outputSchema: ClustersCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ClustersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}",
    apiVersion: "2021-06-01",
  }),
);
export type ClustersDeleteInput = typeof ClustersDeleteInput.Type;

// Output Schema
export const ClustersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersDeleteOutput = typeof ClustersDeleteOutput.Type;

// The operation
/**
 * Deletes a Service Fabric cluster resource.
 *
 * Delete a Service Fabric cluster resource with the specified name.
 */
export const ClustersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeleteInput,
  outputSchema: ClustersDeleteOutput,
}));
// Input Schema
export const ClustersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}",
    apiVersion: "2021-06-01",
  }),
);
export type ClustersGetInput = typeof ClustersGetInput.Type;

// Output Schema
export const ClustersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ClusterPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
});
export type ClustersGetOutput = typeof ClustersGetOutput.Type;

// The operation
/**
 * Gets a Service Fabric cluster resource.
 *
 * Get a Service Fabric cluster resource created or in the process of being created in the specified resource group.
 */
export const ClustersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersGetInput,
  outputSchema: ClustersGetOutput,
}));
// Input Schema
export const ClustersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/clusters",
    apiVersion: "2021-06-01",
  }),
);
export type ClustersListInput = typeof ClustersListInput.Type;

// Output Schema
export const ClustersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Array(Schema.suspend(() => ClusterSchema))),
  nextLink: Schema.optional(Schema.String),
});
export type ClustersListOutput = typeof ClustersListOutput.Type;

// The operation
/**
 * Gets the list of Service Fabric cluster resources created in the specified subscription.
 *
 * Gets all Service Fabric cluster resources created or in the process of being created in the subscription.
 */
export const ClustersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersListInput,
  outputSchema: ClustersListOutput,
}));
// Input Schema
export const ClustersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters",
      apiVersion: "2021-06-01",
    }),
  );
export type ClustersListByResourceGroupInput =
  typeof ClustersListByResourceGroupInput.Type;

// Output Schema
export const ClustersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => ClusterSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type ClustersListByResourceGroupOutput =
  typeof ClustersListByResourceGroupOutput.Type;

// The operation
/**
 * Gets the list of Service Fabric cluster resources created in the specified resource group.
 *
 * Gets all Service Fabric cluster resources created or in the process of being created in the resource group.
 */
export const ClustersListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersListByResourceGroupInput,
    outputSchema: ClustersListByResourceGroupOutput,
  }),
);
// Input Schema
export const ClustersListUpgradableVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetVersion: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/listUpgradableVersions",
      apiVersion: "2021-06-01",
    }),
  );
export type ClustersListUpgradableVersionsInput =
  typeof ClustersListUpgradableVersionsInput.Type;

// Output Schema
export const ClustersListUpgradableVersionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportedPath: Schema.optional(Schema.Array(Schema.String)),
  });
export type ClustersListUpgradableVersionsOutput =
  typeof ClustersListUpgradableVersionsOutput.Type;

// The operation
/**
 * Operation to get the minimum and maximum upgradable version from the current cluster version, or the required path to get to the an specific target version.
 *
 * If a target is not provided, it will get the minimum and maximum versions available from the current cluster version. If a target is given, it will provide the required path to get from the current cluster version to the target version.
 */
export const ClustersListUpgradableVersions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersListUpgradableVersionsInput,
    outputSchema: ClustersListUpgradableVersionsOutput,
  }));
// Input Schema
export const ClustersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => ClusterPropertiesUpdateParametersSchema),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}",
    apiVersion: "2021-06-01",
    longRunning: {},
  }),
);
export type ClustersUpdateInput = typeof ClustersUpdateInput.Type;

// Output Schema
export const ClustersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ClusterPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
});
export type ClustersUpdateOutput = typeof ClustersUpdateOutput.Type;

// The operation
/**
 * Updates the configuration of a Service Fabric cluster resource.
 *
 * Update the configuration of a Service Fabric cluster resource with the specified name.
 */
export const ClustersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateInput,
  outputSchema: ClustersUpdateOutput,
}));
// Input Schema
export const ClusterVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/clusterVersions/{clusterVersion}",
      apiVersion: "2021-06-01",
    }),
  );
export type ClusterVersionsGetInput = typeof ClusterVersionsGetInput.Type;

// Output Schema
export const ClusterVersionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ClusterCodeVersionsResultSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ClusterVersionsGetOutput = typeof ClusterVersionsGetOutput.Type;

// The operation
/**
 * Gets information about a Service Fabric cluster code version available in the specified location.
 *
 * Gets information about an available Service Fabric cluster code version.
 */
export const ClusterVersionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClusterVersionsGetInput,
  outputSchema: ClusterVersionsGetOutput,
}));
// Input Schema
export const ClusterVersionsGetByEnvironmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/clusterVersions/{clusterVersion}",
      apiVersion: "2021-06-01",
    }),
  );
export type ClusterVersionsGetByEnvironmentInput =
  typeof ClusterVersionsGetByEnvironmentInput.Type;

// Output Schema
export const ClusterVersionsGetByEnvironmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ClusterCodeVersionsResultSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ClusterVersionsGetByEnvironmentOutput =
  typeof ClusterVersionsGetByEnvironmentOutput.Type;

// The operation
/**
 * Gets information about a Service Fabric cluster code version available for the specified environment.
 *
 * Gets information about an available Service Fabric cluster code version by environment.
 */
export const ClusterVersionsGetByEnvironment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClusterVersionsGetByEnvironmentInput,
    outputSchema: ClusterVersionsGetByEnvironmentOutput,
  }));
// Input Schema
export const ClusterVersionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/clusterVersions",
      apiVersion: "2021-06-01",
    }),
  );
export type ClusterVersionsListInput = typeof ClusterVersionsListInput.Type;

// Output Schema
export const ClusterVersionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ClusterCodeVersionsResultSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ClusterVersionsListOutput = typeof ClusterVersionsListOutput.Type;

// The operation
/**
 * Gets the list of Service Fabric cluster code versions available for the specified location.
 *
 * Gets all available code versions for Service Fabric cluster resources by location.
 */
export const ClusterVersionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClusterVersionsListInput,
  outputSchema: ClusterVersionsListOutput,
}));
// Input Schema
export const ClusterVersionsListByEnvironmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/clusterVersions",
      apiVersion: "2021-06-01",
    }),
  );
export type ClusterVersionsListByEnvironmentInput =
  typeof ClusterVersionsListByEnvironmentInput.Type;

// Output Schema
export const ClusterVersionsListByEnvironmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ClusterCodeVersionsResultSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ClusterVersionsListByEnvironmentOutput =
  typeof ClusterVersionsListByEnvironmentOutput.Type;

// The operation
/**
 * Gets the list of Service Fabric cluster code versions available for the specified environment.
 *
 * Gets all available code versions for Service Fabric cluster resources by environment.
 */
export const ClusterVersionsListByEnvironment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClusterVersionsListByEnvironmentInput,
    outputSchema: ClusterVersionsListByEnvironmentOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ServiceFabric/operations",
    apiVersion: "2021-06-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(Schema.suspend(() => OperationResultSchema)),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * Lists all of the available Service Fabric resource provider API operations.
 *
 * Get the list of available Service Fabric resource provider API operations.
 *
 * @param api-version - The version of the Service Fabric resource provider API
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const ServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ServiceResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services/{serviceName}",
      apiVersion: "2021-06-01",
      longRunning: {},
    }),
  );
export type ServicesCreateOrUpdateInput =
  typeof ServicesCreateOrUpdateInput.Type;

// Output Schema
export const ServicesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServicesCreateOrUpdateOutput =
  typeof ServicesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a Service Fabric service resource.
 *
 * Create or update a Service Fabric service resource with the specified name.
 */
export const ServicesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesCreateOrUpdateInput,
    outputSchema: ServicesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ServicesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services/{serviceName}",
    apiVersion: "2021-06-01",
    longRunning: {},
  }),
);
export type ServicesDeleteInput = typeof ServicesDeleteInput.Type;

// Output Schema
export const ServicesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServicesDeleteOutput = typeof ServicesDeleteOutput.Type;

// The operation
/**
 * Deletes a Service Fabric service resource.
 *
 * Delete a Service Fabric service resource with the specified name.
 */
export const ServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesDeleteInput,
  outputSchema: ServicesDeleteOutput,
}));
// Input Schema
export const ServicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services/{serviceName}",
    apiVersion: "2021-06-01",
  }),
);
export type ServicesGetInput = typeof ServicesGetInput.Type;

// Output Schema
export const ServicesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => ServiceResourcePropertiesSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
});
export type ServicesGetOutput = typeof ServicesGetOutput.Type;

// The operation
/**
 * Gets a Service Fabric service resource.
 *
 * Get a Service Fabric service resource created or in the process of being created in the Service Fabric application resource.
 */
export const ServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesGetInput,
  outputSchema: ServicesGetOutput,
}));
// Input Schema
export const ServicesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services",
    apiVersion: "2021-06-01",
  }),
);
export type ServicesListInput = typeof ServicesListInput.Type;

// Output Schema
export const ServicesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(Schema.suspend(() => ServiceResourceSchema)),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type ServicesListOutput = typeof ServicesListOutput.Type;

// The operation
/**
 * Gets the list of service resources created in the specified Service Fabric application resource.
 *
 * Gets all service resources created or in the process of being created in the Service Fabric application resource.
 */
export const ServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesListInput,
  outputSchema: ServicesListOutput,
}));
// Input Schema
export const ServicesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => ServiceResourceUpdatePropertiesSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => SystemDataSchema)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services/{serviceName}",
    apiVersion: "2021-06-01",
    longRunning: {},
  }),
);
export type ServicesUpdateInput = typeof ServicesUpdateInput.Type;

// Output Schema
export const ServicesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServicesUpdateOutput = typeof ServicesUpdateOutput.Type;

// The operation
/**
 * Updates a Service Fabric service resource.
 *
 * Update a Service Fabric service resource with the specified name.
 */
export const ServicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesUpdateInput,
  outputSchema: ServicesUpdateOutput,
}));
