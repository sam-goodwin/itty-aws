/**
 * Azure Mysql API
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
  display: Schema.optional(Schema.suspend(() => OperationDisplaySchema)),
  origin: Schema.optional(Schema.suspend(() => OriginSchema)),
  properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
});
const OperationDisplaySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provider: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
  operation: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const OriginSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "user",
  "system",
  "user,system",
]);
const ServerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const CapabilityPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zone: Schema.optional(Schema.String),
  supportedHAMode: Schema.optional(Schema.Array(Schema.String)),
  supportedGeoBackupRegions: Schema.optional(Schema.Array(Schema.String)),
  supportedFlexibleServerEditions: Schema.optional(
    Schema.Array(Schema.suspend(() => ServerEditionCapabilitySchema)),
  ),
});
const ServerEditionCapabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.optional(Schema.String),
    supportedStorageEditions: Schema.optional(
      Schema.Array(Schema.suspend(() => StorageEditionCapabilitySchema)),
    ),
    supportedServerVersions: Schema.optional(
      Schema.Array(Schema.suspend(() => ServerVersionCapabilitySchema)),
    ),
  },
);
const StorageEditionCapabilitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    minStorageSize: Schema.optional(Schema.Number),
    maxStorageSize: Schema.optional(Schema.Number),
    minBackupRetentionDays: Schema.optional(Schema.Number),
    maxBackupRetentionDays: Schema.optional(Schema.Number),
    minBackupIntervalHours: Schema.optional(Schema.Number),
    maxBackupIntervalHours: Schema.optional(Schema.Number),
  });
const ServerVersionCapabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.optional(Schema.String),
    supportedSkus: Schema.optional(
      Schema.Array(Schema.suspend(() => SkuCapabilitySchema)),
    ),
  },
);
const SkuCapabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  vCores: Schema.optional(Schema.Number),
  supportedIops: Schema.optional(Schema.Number),
  supportedMemoryPerVCoreMB: Schema.optional(Schema.Number),
});
const CapabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const CapabilityPropertiesV2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  supportedGeoBackupRegions: Schema.optional(Schema.Array(Schema.String)),
  supportedFlexibleServerEditions: Schema.optional(
    Schema.Array(Schema.suspend(() => ServerEditionCapabilityV2Schema)),
  ),
  supportedServerVersions: Schema.optional(
    Schema.Array(Schema.suspend(() => ServerVersionCapabilityV2Schema)),
  ),
  supportedFeatures: Schema.optional(
    Schema.Array(Schema.suspend(() => FeaturePropertySchema)),
  ),
});
const ServerEditionCapabilityV2Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    defaultSku: Schema.optional(Schema.String),
    defaultStorageSize: Schema.optional(Schema.Number),
    supportedStorageEditions: Schema.optional(
      Schema.Array(Schema.suspend(() => StorageEditionCapabilitySchema)),
    ),
    supportedSkus: Schema.optional(
      Schema.Array(Schema.suspend(() => SkuCapabilityV2Schema)),
    ),
  });
const SkuCapabilityV2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  vCores: Schema.optional(Schema.Number),
  supportedIops: Schema.optional(Schema.Number),
  supportedMemoryPerVCoreMB: Schema.optional(Schema.Number),
  supportedZones: Schema.optional(Schema.Array(Schema.String)),
  supportedHAMode: Schema.optional(Schema.Array(Schema.String)),
});
const ServerVersionCapabilityV2Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  });
const FeaturePropertySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  featureName: Schema.optional(Schema.String),
  featureValue: Schema.optional(Schema.String),
});
const DelegatedSubnetUsageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subnetName: Schema.optional(Schema.String),
  usage: Schema.optional(Schema.Number),
});
const OperationProgressResponseTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectType: Schema.suspend(() => ObjectTypeSchema),
  });
const ObjectTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "BackupAndExportResponse",
  "ImportFromStorageResponse",
]);
const OperationStatusResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  resourceId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  status: Schema.String,
  percentComplete: Schema.optional(Schema.Number),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  operations: Schema.optional(Schema.Array(Schema.Unknown)),
  error: Schema.optional(Schema.suspend(() => ErrorDetailSchema)),
});
const ErrorDetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  target: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
  additionalInfo: Schema.optional(
    Schema.Array(Schema.suspend(() => ErrorAdditionalInfoSchema)),
  ),
});
const ErrorAdditionalInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  info: Schema.optional(Schema.Unknown),
});
const ServerPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  administratorLogin: Schema.optional(Schema.String),
  administratorLoginPassword: Schema.optional(SensitiveOutputString),
  version: Schema.optional(Schema.suspend(() => ServerVersionSchema)),
  fullVersion: Schema.optional(Schema.String),
  availabilityZone: Schema.optional(Schema.String),
  createMode: Schema.optional(Schema.suspend(() => CreateModeSchema)),
  sourceServerResourceId: Schema.optional(Schema.String),
  restorePointInTime: Schema.optional(Schema.String),
  replicationRole: Schema.optional(Schema.suspend(() => ReplicationRoleSchema)),
  replicaCapacity: Schema.optional(Schema.Number),
  dataEncryption: Schema.optional(Schema.suspend(() => DataEncryptionSchema)),
  state: Schema.optional(Schema.suspend(() => ServerStateSchema)),
  fullyQualifiedDomainName: Schema.optional(Schema.String),
  databasePort: Schema.optional(Schema.Number),
  storage: Schema.optional(Schema.suspend(() => StorageSchema)),
  backup: Schema.optional(Schema.suspend(() => BackupSchema)),
  highAvailability: Schema.optional(
    Schema.suspend(() => HighAvailabilitySchema),
  ),
  network: Schema.optional(Schema.suspend(() => NetworkSchema)),
  privateEndpointConnections: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
      }),
    ),
  ),
  maintenancePolicy: Schema.optional(
    Schema.suspend(() => MaintenancePolicySchema),
  ),
  maintenanceWindow: Schema.optional(
    Schema.suspend(() => MaintenanceWindowSchema),
  ),
  importSourceProperties: Schema.optional(
    Schema.suspend(() => ImportSourcePropertiesSchema),
  ),
});
const ServerVersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "5.7",
  "8.0.21",
]);
const CreateModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Default",
  "PointInTimeRestore",
  "Replica",
  "GeoRestore",
]);
const ReplicationRoleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "Source",
  "Replica",
]);
const DataEncryptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  primaryUserAssignedIdentityId: Schema.optional(Schema.String),
  primaryKeyURI: Schema.optional(Schema.String),
  geoBackupUserAssignedIdentityId: Schema.optional(Schema.String),
  geoBackupKeyURI: Schema.optional(Schema.String),
  type: Schema.optional(Schema.suspend(() => DataEncryptionTypeSchema)),
});
const DataEncryptionTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "AzureKeyVault",
  "SystemManaged",
]);
const ServerStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Ready",
  "Dropping",
  "Disabled",
  "Starting",
  "Stopping",
  "Stopped",
  "Updating",
]);
const StorageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  storageSizeGB: Schema.optional(Schema.Number),
  iops: Schema.optional(Schema.Number),
  autoGrow: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  logOnDisk: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  storageSku: Schema.optional(Schema.String),
  autoIoScaling: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  storageRedundancy: Schema.optional(
    Schema.Literals(["LocalRedundancy", "ZoneRedundancy"]),
  ),
});
const BackupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backupRetentionDays: Schema.optional(Schema.Number),
  backupIntervalHours: Schema.optional(Schema.Number),
  geoRedundantBackup: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  earliestRestoreDate: Schema.optional(Schema.String),
});
const HighAvailabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.optional(Schema.suspend(() => HighAvailabilityModeSchema)),
  state: Schema.optional(Schema.suspend(() => HighAvailabilityStateSchema)),
  standbyAvailabilityZone: Schema.optional(Schema.String),
});
const HighAvailabilityModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Disabled",
  "ZoneRedundant",
  "SameZone",
]);
const HighAvailabilityStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  [
    "NotEnabled",
    "CreatingStandby",
    "Healthy",
    "FailingOver",
    "RemovingStandby",
  ],
);
const NetworkSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  publicNetworkAccess: Schema.optional(
    Schema.suspend(() => EnableStatusEnumSchema),
  ),
  delegatedSubnetResourceId: Schema.optional(Schema.String),
  privateDnsZoneResourceId: Schema.optional(Schema.String),
});
const EnableStatusEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const MaintenancePolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  patchStrategy: Schema.optional(Schema.suspend(() => PatchStrategySchema)),
});
const PatchStrategySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Regular",
  "VirtualCanary",
]);
const MaintenanceWindowSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customWindow: Schema.optional(Schema.String),
  startHour: Schema.optional(Schema.Number),
  startMinute: Schema.optional(Schema.Number),
  dayOfWeek: Schema.optional(Schema.Number),
  batchOfMaintenance: Schema.optional(
    Schema.suspend(() => BatchOfMaintenanceSchema),
  ),
});
const BatchOfMaintenanceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Default",
  "Batch1",
  "Batch2",
]);
const ImportSourcePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  storageType: Schema.optional(
    Schema.suspend(() => ImportSourceStorageTypeSchema),
  ),
  storageUrl: Schema.optional(Schema.String),
  sasToken: Schema.optional(Schema.String),
  dataDirPath: Schema.optional(Schema.String),
});
const ImportSourceStorageTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["AzureBlob"]);
const MySQLServerIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  tenantId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.suspend(() => ManagedServiceIdentityTypeSchema)),
  userAssignedIdentities: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => UserAssignedIdentitySchema),
    ),
  ),
});
const ManagedServiceIdentityTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["UserAssigned"]);
const UserAssignedIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
});
const MySQLServerSkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  tier: Schema.suspend(() => ServerSkuTierSchema),
});
const ServerSkuTierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Burstable",
  "GeneralPurpose",
  "MemoryOptimized",
]);
const ServerPropertiesForUpdateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    administratorLoginPassword: Schema.optional(SensitiveOutputString),
    version: Schema.optional(Schema.suspend(() => ServerVersionSchema)),
    storage: Schema.optional(Schema.suspend(() => StorageSchema)),
    backup: Schema.optional(Schema.suspend(() => BackupSchema)),
    highAvailability: Schema.optional(
      Schema.suspend(() => HighAvailabilitySchema),
    ),
    maintenancePolicy: Schema.optional(
      Schema.suspend(() => MaintenancePolicySchema),
    ),
    maintenanceWindow: Schema.optional(
      Schema.suspend(() => MaintenanceWindowSchema),
    ),
    replicationRole: Schema.optional(
      Schema.suspend(() => ReplicationRoleSchema),
    ),
    dataEncryption: Schema.optional(Schema.suspend(() => DataEncryptionSchema)),
    network: Schema.optional(Schema.suspend(() => NetworkSchema)),
  });
const AzureADAdministratorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AdministratorPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    administratorType: Schema.optional(
      Schema.suspend(() => AdministratorTypeSchema),
    ),
    login: Schema.optional(Schema.String),
    sid: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    identityResourceId: Schema.optional(Schema.String),
  },
);
const AdministratorTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "ActiveDirectory",
]);
const AdvancedThreatProtectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const AdvancedThreatProtectionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creationTime: Schema.optional(Schema.String),
    state: Schema.optional(
      Schema.suspend(() => AdvancedThreatProtectionStateSchema),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => AdvancedThreatProtectionProvisioningStateSchema),
    ),
  });
const AdvancedThreatProtectionStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Enabled", "Disabled"]);
const AdvancedThreatProtectionProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Updating",
    "Canceled",
    "Failed",
  ]);
const AdvancedThreatProtectionUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.suspend(() => AdvancedThreatProtectionStateSchema),
  });
const BackupStoreDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  objectType: Schema.String,
});
const BackupSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backupName: Schema.String,
  backupFormat: Schema.optional(Schema.suspend(() => BackupFormatSchema)),
});
const BackupFormatSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "CollatedFormat",
  "Raw",
]);
const BackupAndExportResponsePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasourceSizeInBytes: Schema.optional(Schema.Number),
    dataTransferredInBytes: Schema.optional(Schema.Number),
    backupMetadata: Schema.optional(Schema.String),
  });
const OperationStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Pending",
  "InProgress",
  "Succeeded",
  "Failed",
  "CancelInProgress",
  "Canceled",
]);
const ServerBackupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ServerBackupPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backupType: Schema.optional(Schema.String),
  completedTime: Schema.optional(Schema.String),
  source: Schema.optional(Schema.String),
});
const ServerBackupV2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ServerBackupPropertiesV2Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupNameV2: Schema.optional(Schema.String),
    backupType: Schema.optional(Schema.suspend(() => BackupTypeSchema)),
    completedTime: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const BackupTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["FULL"]);
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Creating",
  "Deleting",
  "Failed",
  "Canceled",
]);
const ConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ConfigurationPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(Schema.String),
    currentValue: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    documentationLink: Schema.optional(Schema.String),
    defaultValue: Schema.optional(Schema.String),
    dataType: Schema.optional(Schema.String),
    allowedValues: Schema.optional(Schema.String),
    source: Schema.optional(Schema.suspend(() => ConfigurationSourceSchema)),
    isReadOnly: Schema.optional(Schema.suspend(() => IsReadOnlySchema)),
    isConfigPendingRestart: Schema.optional(
      Schema.suspend(() => IsConfigPendingRestartSchema),
    ),
    isDynamicConfig: Schema.optional(
      Schema.suspend(() => IsDynamicConfigSchema),
    ),
  },
);
const ConfigurationSourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "system-default",
  "user-override",
]);
const IsReadOnlySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "True",
  "False",
]);
const IsConfigPendingRestartSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["True", "False"]);
const IsDynamicConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "True",
  "False",
]);
const DatabaseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const DatabasePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  charset: Schema.optional(Schema.String),
  collation: Schema.optional(Schema.String),
});
const FirewallRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const FirewallRulePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startIpAddress: Schema.String,
  endIpAddress: Schema.String,
});
const LogFileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const MaintenanceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const MaintenancePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maintenanceType: Schema.optional(Schema.suspend(() => MaintenanceTypeSchema)),
  maintenanceState: Schema.optional(
    Schema.suspend(() => MaintenanceStateSchema),
  ),
  maintenanceStartTime: Schema.optional(Schema.String),
  maintenanceEndTime: Schema.optional(Schema.String),
  maintenanceExecutionStartTime: Schema.optional(Schema.String),
  maintenanceExecutionEndTime: Schema.optional(Schema.String),
  maintenanceAvailableScheduleMinTime: Schema.optional(Schema.String),
  maintenanceAvailableScheduleMaxTime: Schema.optional(Schema.String),
  maintenanceTitle: Schema.optional(Schema.String),
  maintenanceDescription: Schema.optional(Schema.String),
  provisioningState: Schema.optional(
    Schema.suspend(() => MaintenanceProvisioningStateSchema),
  ),
});
const MaintenanceTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "RoutineMaintenance",
  "MinorVersionUpgrade",
  "SecurityPatches",
  "HotFixes",
]);
const MaintenanceStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Scheduled",
  "ReScheduled",
  "InPreparation",
  "Processing",
  "Completed",
  "Canceled",
]);
const MaintenanceProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Creating",
    "Deleting",
    "Failed",
  ]);
const MaintenancePropertiesForUpdateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maintenanceStartTime: Schema.optional(Schema.String),
  });
const PrivateEndpointConnectionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupIds: Schema.optional(Schema.Array(Schema.String)),
    privateEndpoint: Schema.optional(
      Schema.suspend(() => PrivateEndpointSchema),
    ),
    privateLinkServiceConnectionState: Schema.suspend(
      () => PrivateLinkServiceConnectionStateSchema,
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionProvisioningStateSchema),
    ),
  });
const PrivateEndpointSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
const PrivateLinkServiceConnectionStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.suspend(() => PrivateEndpointServiceConnectionStatusSchema),
    ),
    description: Schema.optional(Schema.String),
    actionsRequired: Schema.optional(Schema.String),
  });
const PrivateEndpointServiceConnectionStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Pending",
    "Approved",
    "Rejected",
  ]);
const PrivateEndpointConnectionProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Creating",
    "Deleting",
    "Failed",
  ]);
const PrivateLinkResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PrivateLinkResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.optional(Schema.String),
    requiredMembers: Schema.optional(Schema.Array(Schema.String)),
    requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
  });
const ConfigurationForBatchUpdateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => ConfigurationForBatchUpdatePropertiesSchema),
    ),
  });
const ConfigurationForBatchUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
  });
const ResetAllToDefaultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "True",
  "False",
]);
const ValidateBackupResponsePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numberOfContainers: Schema.optional(Schema.Number),
  });
const ServerKeySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
const ServerKeyPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  serverKeyType: Schema.Literals(["AzureKeyVault"]),
  uri: Schema.optional(Schema.String),
  creationDate: Schema.optional(Schema.String),
});

// Input Schema
export const AdvancedThreatProtectionSettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    advancedThreatProtectionName: Schema.Literals(["Default"]).pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/advancedThreatProtectionSettings/{advancedThreatProtectionName}",
      apiVersion: "2024-12-30",
    }),
  );
export type AdvancedThreatProtectionSettingsGetInput =
  typeof AdvancedThreatProtectionSettingsGetInput.Type;

// Output Schema
export const AdvancedThreatProtectionSettingsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AdvancedThreatProtectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AdvancedThreatProtectionSettingsGetOutput =
  typeof AdvancedThreatProtectionSettingsGetOutput.Type;

// The operation
/**
 * Get a server's Advanced Threat Protection state
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param advancedThreatProtectionName - The name of the Advanced Threat Protection state.
 */
export const AdvancedThreatProtectionSettingsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdvancedThreatProtectionSettingsGetInput,
    outputSchema: AdvancedThreatProtectionSettingsGetOutput,
  }));
// Input Schema
export const AdvancedThreatProtectionSettingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/advancedThreatProtectionSettings",
      apiVersion: "2024-12-30",
    }),
  );
export type AdvancedThreatProtectionSettingsListInput =
  typeof AdvancedThreatProtectionSettingsListInput.Type;

// Output Schema
export const AdvancedThreatProtectionSettingsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => AdvancedThreatProtectionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type AdvancedThreatProtectionSettingsListOutput =
  typeof AdvancedThreatProtectionSettingsListOutput.Type;

// The operation
/**
 * Gets a list of server's Advanced Threat Protection states.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const AdvancedThreatProtectionSettingsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdvancedThreatProtectionSettingsListInput,
    outputSchema: AdvancedThreatProtectionSettingsListOutput,
  }));
// Input Schema
export const AdvancedThreatProtectionSettingsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    advancedThreatProtectionName: Schema.Literals(["Default"]).pipe(
      T.PathParam(),
    ),
    properties: Schema.optional(
      Schema.suspend(() => AdvancedThreatProtectionUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/advancedThreatProtectionSettings/{advancedThreatProtectionName}",
      apiVersion: "2024-12-30",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AdvancedThreatProtectionSettingsUpdateInput =
  typeof AdvancedThreatProtectionSettingsUpdateInput.Type;

// Output Schema
export const AdvancedThreatProtectionSettingsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AdvancedThreatProtectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AdvancedThreatProtectionSettingsUpdateOutput =
  typeof AdvancedThreatProtectionSettingsUpdateOutput.Type;

// The operation
/**
 * Updates a server's Advanced Threat Protection state.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param advancedThreatProtectionName - The name of the Advanced Threat Protection state.
 */
export const AdvancedThreatProtectionSettingsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdvancedThreatProtectionSettingsUpdateInput,
    outputSchema: AdvancedThreatProtectionSettingsUpdateOutput,
  }));
// Input Schema
export const AdvancedThreatProtectionSettingsUpdatePutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    advancedThreatProtectionName: Schema.Literals(["Default"]).pipe(
      T.PathParam(),
    ),
    properties: Schema.optional(
      Schema.suspend(() => AdvancedThreatProtectionPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/advancedThreatProtectionSettings/{advancedThreatProtectionName}",
      apiVersion: "2024-12-30",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AdvancedThreatProtectionSettingsUpdatePutInput =
  typeof AdvancedThreatProtectionSettingsUpdatePutInput.Type;

// Output Schema
export const AdvancedThreatProtectionSettingsUpdatePutOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AdvancedThreatProtectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AdvancedThreatProtectionSettingsUpdatePutOutput =
  typeof AdvancedThreatProtectionSettingsUpdatePutOutput.Type;

// The operation
/**
 * Updates a server's Advanced Threat Protection state.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param advancedThreatProtectionName - The name of the Advanced Threat Protection state.
 */
export const AdvancedThreatProtectionSettingsUpdatePut =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdvancedThreatProtectionSettingsUpdatePutInput,
    outputSchema: AdvancedThreatProtectionSettingsUpdatePutOutput,
  }));
// Input Schema
export const AzureADAdministratorsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    administratorName: Schema.Literals(["ActiveDirectory"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AdministratorPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/administrators/{administratorName}",
      apiVersion: "2024-12-30",
      longRunning: { finalStateVia: "original-uri" },
    }),
  );
export type AzureADAdministratorsCreateOrUpdateInput =
  typeof AzureADAdministratorsCreateOrUpdateInput.Type;

// Output Schema
export const AzureADAdministratorsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AdministratorPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AzureADAdministratorsCreateOrUpdateOutput =
  typeof AzureADAdministratorsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates an existing Azure Active Directory administrator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param administratorName - The name of the Azure AD Administrator.
 */
export const AzureADAdministratorsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureADAdministratorsCreateOrUpdateInput,
    outputSchema: AzureADAdministratorsCreateOrUpdateOutput,
  }));
// Input Schema
export const AzureADAdministratorsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    administratorName: Schema.Literals(["ActiveDirectory"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/administrators/{administratorName}",
      apiVersion: "2024-12-30",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AzureADAdministratorsDeleteInput =
  typeof AzureADAdministratorsDeleteInput.Type;

// Output Schema
export const AzureADAdministratorsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AzureADAdministratorsDeleteOutput =
  typeof AzureADAdministratorsDeleteOutput.Type;

// The operation
/**
 * Deletes an Azure AD Administrator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param administratorName - The name of the Azure AD Administrator.
 */
export const AzureADAdministratorsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AzureADAdministratorsDeleteInput,
    outputSchema: AzureADAdministratorsDeleteOutput,
  }),
);
// Input Schema
export const AzureADAdministratorsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    administratorName: Schema.Literals(["ActiveDirectory"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/administrators/{administratorName}",
      apiVersion: "2024-12-30",
    }),
  );
export type AzureADAdministratorsGetInput =
  typeof AzureADAdministratorsGetInput.Type;

// Output Schema
export const AzureADAdministratorsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AdministratorPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AzureADAdministratorsGetOutput =
  typeof AzureADAdministratorsGetOutput.Type;

// The operation
/**
 * Gets information about an azure ad administrator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param administratorName - The name of the Azure AD Administrator.
 */
export const AzureADAdministratorsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AzureADAdministratorsGetInput,
    outputSchema: AzureADAdministratorsGetOutput,
  }),
);
// Input Schema
export const AzureADAdministratorsListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/administrators",
      apiVersion: "2024-12-30",
    }),
  );
export type AzureADAdministratorsListByServerInput =
  typeof AzureADAdministratorsListByServerInput.Type;

// Output Schema
export const AzureADAdministratorsListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureADAdministratorSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type AzureADAdministratorsListByServerOutput =
  typeof AzureADAdministratorsListByServerOutput.Type;

// The operation
/**
 * List all the AAD administrators in a given server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const AzureADAdministratorsListByServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureADAdministratorsListByServerInput,
    outputSchema: AzureADAdministratorsListByServerOutput,
  }));
// Input Schema
export const BackupAndExportCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    targetDetails: Schema.suspend(() => BackupStoreDetailsSchema),
    backupSettings: Schema.suspend(() => BackupSettingsSchema),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/backupAndExport",
      apiVersion: "2024-12-30",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BackupAndExportCreateInput = typeof BackupAndExportCreateInput.Type;

// Output Schema
export const BackupAndExportCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BackupAndExportResponsePropertiesSchema),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Array(Schema.suspend(() => ErrorDetailSchema)),
        ),
        additionalInfo: Schema.optional(
          Schema.Array(Schema.suspend(() => ErrorAdditionalInfoSchema)),
        ),
      }),
    ),
    name: Schema.String,
    status: Schema.optional(Schema.suspend(() => OperationStatusSchema)),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    percentComplete: Schema.optional(Schema.Number),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BackupAndExportCreateOutput =
  typeof BackupAndExportCreateOutput.Type;

// The operation
/**
 * Exports the backup of the given server by creating a backup if not existing.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const BackupAndExportCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BackupAndExportCreateInput,
    outputSchema: BackupAndExportCreateOutput,
  }),
);
// Input Schema
export const BackupAndExportValidateBackupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/validateBackup",
      apiVersion: "2024-12-30",
    }),
  );
export type BackupAndExportValidateBackupInput =
  typeof BackupAndExportValidateBackupInput.Type;

// Output Schema
export const BackupAndExportValidateBackupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ValidateBackupResponsePropertiesSchema),
    ),
  });
export type BackupAndExportValidateBackupOutput =
  typeof BackupAndExportValidateBackupOutput.Type;

// The operation
/**
 * Validates if backup can be performed for given server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const BackupAndExportValidateBackup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupAndExportValidateBackupInput,
    outputSchema: BackupAndExportValidateBackupOutput,
  }));
// Input Schema
export const BackupsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  backupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/backups/{backupName}",
    apiVersion: "2024-12-30",
  }),
);
export type BackupsGetInput = typeof BackupsGetInput.Type;

// Output Schema
export const BackupsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => ServerBackupPropertiesSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type BackupsGetOutput = typeof BackupsGetOutput.Type;

// The operation
/**
 * List all the backups for a given server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param backupName - The name of the backup.
 */
export const BackupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupsGetInput,
  outputSchema: BackupsGetOutput,
}));
// Input Schema
export const BackupsListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/backups",
      apiVersion: "2024-12-30",
    }),
  );
export type BackupsListByServerInput = typeof BackupsListByServerInput.Type;

// Output Schema
export const BackupsListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ServerBackupSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type BackupsListByServerOutput = typeof BackupsListByServerOutput.Type;

// The operation
/**
 * List all the backups for a given server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const BackupsListByServer = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupsListByServerInput,
  outputSchema: BackupsListByServerOutput,
}));
// Input Schema
export const BackupsPutInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  backupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/backups/{backupName}",
    apiVersion: "2024-12-30",
  }),
);
export type BackupsPutInput = typeof BackupsPutInput.Type;

// Output Schema
export const BackupsPutOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => ServerBackupPropertiesSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type BackupsPutOutput = typeof BackupsPutOutput.Type;

// The operation
/**
 * Create backup for a given server with specified backup name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param backupName - The name of the backup.
 */
export const BackupsPut = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupsPutInput,
  outputSchema: BackupsPutOutput,
}));
// Input Schema
export const CheckNameAvailabilityExecuteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/locations/{locationName}/checkNameAvailability",
      apiVersion: "2024-12-30",
    }),
  );
export type CheckNameAvailabilityExecuteInput =
  typeof CheckNameAvailabilityExecuteInput.Type;

// Output Schema
export const CheckNameAvailabilityExecuteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
  });
export type CheckNameAvailabilityExecuteOutput =
  typeof CheckNameAvailabilityExecuteOutput.Type;

// The operation
/**
 * Check the availability of name for server
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const CheckNameAvailabilityExecute =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CheckNameAvailabilityExecuteInput,
    outputSchema: CheckNameAvailabilityExecuteOutput,
  }));
// Input Schema
export const CheckNameAvailabilityWithoutLocationExecuteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/checkNameAvailability",
      apiVersion: "2024-12-30",
    }),
  );
export type CheckNameAvailabilityWithoutLocationExecuteInput =
  typeof CheckNameAvailabilityWithoutLocationExecuteInput.Type;

// Output Schema
export const CheckNameAvailabilityWithoutLocationExecuteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
  });
export type CheckNameAvailabilityWithoutLocationExecuteOutput =
  typeof CheckNameAvailabilityWithoutLocationExecuteOutput.Type;

// The operation
/**
 * Check the availability of name for server
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const CheckNameAvailabilityWithoutLocationExecute =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CheckNameAvailabilityWithoutLocationExecuteInput,
    outputSchema: CheckNameAvailabilityWithoutLocationExecuteOutput,
  }));
// Input Schema
export const CheckVirtualNetworkSubnetUsageExecuteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    virtualNetworkResourceId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/locations/{locationName}/checkVirtualNetworkSubnetUsage",
      apiVersion: "2024-12-30",
    }),
  );
export type CheckVirtualNetworkSubnetUsageExecuteInput =
  typeof CheckVirtualNetworkSubnetUsageExecuteInput.Type;

// Output Schema
export const CheckVirtualNetworkSubnetUsageExecuteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    subscriptionId: Schema.optional(Schema.String),
    delegatedSubnetsUsage: Schema.optional(
      Schema.Array(Schema.suspend(() => DelegatedSubnetUsageSchema)),
    ),
  });
export type CheckVirtualNetworkSubnetUsageExecuteOutput =
  typeof CheckVirtualNetworkSubnetUsageExecuteOutput.Type;

// The operation
/**
 * Get virtual network subnet usage for a given vNet resource id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const CheckVirtualNetworkSubnetUsageExecute =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CheckVirtualNetworkSubnetUsageExecuteInput,
    outputSchema: CheckVirtualNetworkSubnetUsageExecuteOutput,
  }));
// Input Schema
export const ConfigurationsBatchUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ConfigurationForBatchUpdateSchema)),
    ),
    resetAllToDefault: Schema.optional(
      Schema.suspend(() => ResetAllToDefaultSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/updateConfigurations",
      apiVersion: "2024-12-30",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ConfigurationsBatchUpdateInput =
  typeof ConfigurationsBatchUpdateInput.Type;

// Output Schema
export const ConfigurationsBatchUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ConfigurationSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ConfigurationsBatchUpdateOutput =
  typeof ConfigurationsBatchUpdateOutput.Type;

// The operation
/**
 * Update a list of configurations in a given server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ConfigurationsBatchUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationsBatchUpdateInput,
    outputSchema: ConfigurationsBatchUpdateOutput,
  }),
);
// Input Schema
export const ConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ConfigurationPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/configurations/{configurationName}",
      apiVersion: "2024-12-30",
      longRunning: { finalStateVia: "original-uri" },
    }),
  );
export type ConfigurationsCreateOrUpdateInput =
  typeof ConfigurationsCreateOrUpdateInput.Type;

// Output Schema
export const ConfigurationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ConfigurationPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ConfigurationsCreateOrUpdateOutput =
  typeof ConfigurationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Updates a configuration of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param configurationName - The name of the server configuration.
 */
export const ConfigurationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationsCreateOrUpdateInput,
    outputSchema: ConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export const ConfigurationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/configurations/{configurationName}",
    apiVersion: "2024-12-30",
  }),
);
export type ConfigurationsGetInput = typeof ConfigurationsGetInput.Type;

// Output Schema
export const ConfigurationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ConfigurationPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ConfigurationsGetOutput = typeof ConfigurationsGetOutput.Type;

// The operation
/**
 * Gets information about a configuration of server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param configurationName - The name of the server configuration.
 */
export const ConfigurationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationsGetInput,
  outputSchema: ConfigurationsGetOutput,
}));
// Input Schema
export const ConfigurationsListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.String),
    keyword: Schema.optional(Schema.String),
    page: Schema.optional(Schema.Number),
    pageSize: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/configurations",
      apiVersion: "2024-12-30",
    }),
  );
export type ConfigurationsListByServerInput =
  typeof ConfigurationsListByServerInput.Type;

// Output Schema
export const ConfigurationsListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ConfigurationSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ConfigurationsListByServerOutput =
  typeof ConfigurationsListByServerOutput.Type;

// The operation
/**
 * List all the configurations in a given server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param tags - The tags of the server configuration.
 * @param keyword - The keyword of the server configuration.
 * @param page - The page of the server configuration.
 * @param pageSize - The pageSize of the server configuration.
 */
export const ConfigurationsListByServer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationsListByServerInput,
    outputSchema: ConfigurationsListByServerOutput,
  }),
);
// Input Schema
export const ConfigurationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ConfigurationPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/configurations/{configurationName}",
      apiVersion: "2024-12-30",
      longRunning: { finalStateVia: "original-uri" },
    }),
  );
export type ConfigurationsUpdateInput = typeof ConfigurationsUpdateInput.Type;

// Output Schema
export const ConfigurationsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ConfigurationPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ConfigurationsUpdateOutput = typeof ConfigurationsUpdateOutput.Type;

// The operation
/**
 * Updates a configuration of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param configurationName - The name of the server configuration.
 */
export const ConfigurationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationsUpdateInput,
    outputSchema: ConfigurationsUpdateOutput,
  }),
);
// Input Schema
export const DatabasesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => DatabasePropertiesSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/databases/{databaseName}",
      apiVersion: "2024-12-30",
      longRunning: { finalStateVia: "original-uri" },
    }),
  );
export type DatabasesCreateOrUpdateInput =
  typeof DatabasesCreateOrUpdateInput.Type;

// Output Schema
export const DatabasesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => DatabasePropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type DatabasesCreateOrUpdateOutput =
  typeof DatabasesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates a new database or updates an existing database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param databaseName - The name of the database.
 */
export const DatabasesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabasesCreateOrUpdateInput,
    outputSchema: DatabasesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const DatabasesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  databaseName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/databases/{databaseName}",
    apiVersion: "2024-12-30",
    longRunning: { finalStateVia: "location" },
  }),
);
export type DatabasesDeleteInput = typeof DatabasesDeleteInput.Type;

// Output Schema
export const DatabasesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DatabasesDeleteOutput = typeof DatabasesDeleteOutput.Type;

// The operation
/**
 * Deletes a database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param databaseName - The name of the database.
 */
export const DatabasesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesDeleteInput,
  outputSchema: DatabasesDeleteOutput,
}));
// Input Schema
export const DatabasesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  databaseName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/databases/{databaseName}",
    apiVersion: "2024-12-30",
  }),
);
export type DatabasesGetInput = typeof DatabasesGetInput.Type;

// Output Schema
export const DatabasesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => DatabasePropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type DatabasesGetOutput = typeof DatabasesGetOutput.Type;

// The operation
/**
 * Gets information about a database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param databaseName - The name of the database.
 */
export const DatabasesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesGetInput,
  outputSchema: DatabasesGetOutput,
}));
// Input Schema
export const DatabasesListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/databases",
      apiVersion: "2024-12-30",
    }),
  );
export type DatabasesListByServerInput = typeof DatabasesListByServerInput.Type;

// Output Schema
export const DatabasesListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => DatabaseSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type DatabasesListByServerOutput =
  typeof DatabasesListByServerOutput.Type;

// The operation
/**
 * List all the databases in a given server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const DatabasesListByServer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabasesListByServerInput,
    outputSchema: DatabasesListByServerOutput,
  }),
);
// Input Schema
export const FirewallRulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    firewallRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => FirewallRulePropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/firewallRules/{firewallRuleName}",
      apiVersion: "2024-12-30",
      longRunning: { finalStateVia: "original-uri" },
    }),
  );
export type FirewallRulesCreateOrUpdateInput =
  typeof FirewallRulesCreateOrUpdateInput.Type;

// Output Schema
export const FirewallRulesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => FirewallRulePropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type FirewallRulesCreateOrUpdateOutput =
  typeof FirewallRulesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates a new firewall rule or updates an existing firewall rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param firewallRuleName - The name of the server firewall rule.
 */
export const FirewallRulesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FirewallRulesCreateOrUpdateInput,
    outputSchema: FirewallRulesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const FirewallRulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    firewallRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/firewallRules/{firewallRuleName}",
      apiVersion: "2024-12-30",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type FirewallRulesDeleteInput = typeof FirewallRulesDeleteInput.Type;

// Output Schema
export const FirewallRulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FirewallRulesDeleteOutput = typeof FirewallRulesDeleteOutput.Type;

// The operation
/**
 * Deletes a firewall rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param firewallRuleName - The name of the server firewall rule.
 */
export const FirewallRulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesDeleteInput,
  outputSchema: FirewallRulesDeleteOutput,
}));
// Input Schema
export const FirewallRulesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  firewallRuleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/firewallRules/{firewallRuleName}",
    apiVersion: "2024-12-30",
  }),
);
export type FirewallRulesGetInput = typeof FirewallRulesGetInput.Type;

// Output Schema
export const FirewallRulesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.suspend(() => FirewallRulePropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type FirewallRulesGetOutput = typeof FirewallRulesGetOutput.Type;

// The operation
/**
 * Gets information about a server firewall rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param firewallRuleName - The name of the server firewall rule.
 */
export const FirewallRulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesGetInput,
  outputSchema: FirewallRulesGetOutput,
}));
// Input Schema
export const FirewallRulesListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/firewallRules",
      apiVersion: "2024-12-30",
    }),
  );
export type FirewallRulesListByServerInput =
  typeof FirewallRulesListByServerInput.Type;

// Output Schema
export const FirewallRulesListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => FirewallRuleSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type FirewallRulesListByServerOutput =
  typeof FirewallRulesListByServerOutput.Type;

// The operation
/**
 * List all the firewall rules in a given server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const FirewallRulesListByServer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FirewallRulesListByServerInput,
    outputSchema: FirewallRulesListByServerOutput,
  }),
);
// Input Schema
export const GetPrivateDnsZoneSuffixExecuteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.DBforMySQL/getPrivateDnsZoneSuffix",
      apiVersion: "2024-12-30",
    }),
  );
export type GetPrivateDnsZoneSuffixExecuteInput =
  typeof GetPrivateDnsZoneSuffixExecuteInput.Type;

// Output Schema
export const GetPrivateDnsZoneSuffixExecuteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateDnsZoneSuffix: Schema.optional(Schema.String),
  });
export type GetPrivateDnsZoneSuffixExecuteOutput =
  typeof GetPrivateDnsZoneSuffixExecuteOutput.Type;

// The operation
/**
 * Get private DNS zone suffix in the cloud.
 *
 * @param api-version - The API version to use for this operation.
 */
export const GetPrivateDnsZoneSuffixExecute =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetPrivateDnsZoneSuffixExecuteInput,
    outputSchema: GetPrivateDnsZoneSuffixExecuteOutput,
  }));
// Input Schema
export const LocationBasedCapabilitiesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/locations/{locationName}/capabilities",
      apiVersion: "2024-12-30",
    }),
  );
export type LocationBasedCapabilitiesListInput =
  typeof LocationBasedCapabilitiesListInput.Type;

// Output Schema
export const LocationBasedCapabilitiesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => CapabilityPropertiesSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type LocationBasedCapabilitiesListOutput =
  typeof LocationBasedCapabilitiesListOutput.Type;

// The operation
/**
 * Get capabilities at specified location in a given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const LocationBasedCapabilitiesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LocationBasedCapabilitiesListInput,
    outputSchema: LocationBasedCapabilitiesListOutput,
  }));
// Input Schema
export const LocationBasedCapabilitySetGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    capabilitySetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/locations/{locationName}/capabilitySets/{capabilitySetName}",
      apiVersion: "2024-12-30",
    }),
  );
export type LocationBasedCapabilitySetGetInput =
  typeof LocationBasedCapabilitySetGetInput.Type;

// Output Schema
export const LocationBasedCapabilitySetGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CapabilityPropertiesV2Schema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type LocationBasedCapabilitySetGetOutput =
  typeof LocationBasedCapabilitySetGetOutput.Type;

// The operation
/**
 * Get capabilities at specified location in a given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param capabilitySetName - Name of capability set
 */
export const LocationBasedCapabilitySetGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LocationBasedCapabilitySetGetInput,
    outputSchema: LocationBasedCapabilitySetGetOutput,
  }));
// Input Schema
export const LocationBasedCapabilitySetListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/locations/{locationName}/capabilitySets",
      apiVersion: "2024-12-30",
    }),
  );
export type LocationBasedCapabilitySetListInput =
  typeof LocationBasedCapabilitySetListInput.Type;

// Output Schema
export const LocationBasedCapabilitySetListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => CapabilitySchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type LocationBasedCapabilitySetListOutput =
  typeof LocationBasedCapabilitySetListOutput.Type;

// The operation
/**
 * Get capabilities at specified location in a given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const LocationBasedCapabilitySetList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LocationBasedCapabilitySetListInput,
    outputSchema: LocationBasedCapabilitySetListOutput,
  }));
// Input Schema
export const LogFilesListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/logFiles",
      apiVersion: "2024-12-30",
    }),
  );
export type LogFilesListByServerInput = typeof LogFilesListByServerInput.Type;

// Output Schema
export const LogFilesListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => LogFileSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type LogFilesListByServerOutput = typeof LogFilesListByServerOutput.Type;

// The operation
/**
 * List all the server log files in a given server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const LogFilesListByServer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LogFilesListByServerInput,
    outputSchema: LogFilesListByServerOutput,
  }),
);
// Input Schema
export const LongRunningBackupCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    backupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ServerBackupPropertiesV2Schema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/backupsV2/{backupName}",
      apiVersion: "2024-12-30",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type LongRunningBackupCreateInput =
  typeof LongRunningBackupCreateInput.Type;

// Output Schema
export const LongRunningBackupCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ServerBackupPropertiesV2Schema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type LongRunningBackupCreateOutput =
  typeof LongRunningBackupCreateOutput.Type;

// The operation
/**
 * Create backup for a given server with specified backup name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param backupName - The name of the backup.
 */
export const LongRunningBackupCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LongRunningBackupCreateInput,
    outputSchema: LongRunningBackupCreateOutput,
  }),
);
// Input Schema
export const LongRunningBackupsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    backupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/backupsV2/{backupName}",
      apiVersion: "2024-12-30",
    }),
  );
export type LongRunningBackupsGetInput = typeof LongRunningBackupsGetInput.Type;

// Output Schema
export const LongRunningBackupsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ServerBackupPropertiesV2Schema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type LongRunningBackupsGetOutput =
  typeof LongRunningBackupsGetOutput.Type;

// The operation
/**
 * Get backup for a given server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param backupName - The name of the backup.
 */
export const LongRunningBackupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LongRunningBackupsGetInput,
    outputSchema: LongRunningBackupsGetOutput,
  }),
);
// Input Schema
export const LongRunningBackupsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/backupsV2",
      apiVersion: "2024-12-30",
    }),
  );
export type LongRunningBackupsListInput =
  typeof LongRunningBackupsListInput.Type;

// Output Schema
export const LongRunningBackupsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ServerBackupV2Schema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type LongRunningBackupsListOutput =
  typeof LongRunningBackupsListOutput.Type;

// The operation
/**
 * List all the backups for a given server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const LongRunningBackupsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LongRunningBackupsListInput,
    outputSchema: LongRunningBackupsListOutput,
  }),
);
// Input Schema
export const MaintenancesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/maintenances",
    apiVersion: "2024-12-30",
  }),
);
export type MaintenancesListInput = typeof MaintenancesListInput.Type;

// Output Schema
export const MaintenancesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => MaintenanceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  },
);
export type MaintenancesListOutput = typeof MaintenancesListOutput.Type;

// The operation
/**
 * List maintenances.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const MaintenancesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MaintenancesListInput,
  outputSchema: MaintenancesListOutput,
}));
// Input Schema
export const MaintenancesReadInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  maintenanceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/maintenances/{maintenanceName}",
    apiVersion: "2024-12-30",
  }),
);
export type MaintenancesReadInput = typeof MaintenancesReadInput.Type;

// Output Schema
export const MaintenancesReadOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.suspend(() => MaintenancePropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type MaintenancesReadOutput = typeof MaintenancesReadOutput.Type;

// The operation
/**
 * Read maintenance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param maintenanceName - The name of the maintenance.
 */
export const MaintenancesRead = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MaintenancesReadInput,
  outputSchema: MaintenancesReadOutput,
}));
// Input Schema
export const MaintenancesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    maintenanceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => MaintenancePropertiesForUpdateSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/maintenances/{maintenanceName}",
      apiVersion: "2024-12-30",
      longRunning: { finalStateVia: "original-uri" },
    }),
  );
export type MaintenancesUpdateInput = typeof MaintenancesUpdateInput.Type;

// Output Schema
export const MaintenancesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => MaintenancePropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type MaintenancesUpdateOutput = typeof MaintenancesUpdateOutput.Type;

// The operation
/**
 * Update maintenances.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param maintenanceName - The name of the maintenance.
 */
export const MaintenancesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MaintenancesUpdateInput,
  outputSchema: MaintenancesUpdateOutput,
}));
// Input Schema
export const OperationProgressGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/locations/{locationName}/operationProgress/{operationId}",
      apiVersion: "2024-12-30",
    }),
  );
export type OperationProgressGetInput = typeof OperationProgressGetInput.Type;

// Output Schema
export const OperationProgressGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => OperationProgressResponseTypeSchema),
    ),
    id: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(Schema.suspend(() => OperationStatusResultSchema)),
    ),
    error: Schema.optional(Schema.suspend(() => ErrorDetailSchema)),
  });
export type OperationProgressGetOutput = typeof OperationProgressGetOutput.Type;

// The operation
/**
 * Get the operation result for a long running operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param operationId - The ID of an ongoing async operation.
 */
export const OperationProgressGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OperationProgressGetInput,
    outputSchema: OperationProgressGetOutput,
  }),
);
// Input Schema
export const OperationResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/locations/{locationName}/operationResults/{operationId}",
      apiVersion: "2024-12-30",
    }),
  );
export type OperationResultsGetInput = typeof OperationResultsGetInput.Type;

// Output Schema
export const OperationResultsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    id: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(Schema.suspend(() => OperationStatusResultSchema)),
    ),
    error: Schema.optional(Schema.suspend(() => ErrorDetailSchema)),
  });
export type OperationResultsGetOutput = typeof OperationResultsGetOutput.Type;

// The operation
/**
 * Get the operation result for a long running operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param operationId - The ID of an ongoing async operation.
 */
export const OperationResultsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationResultsGetInput,
  outputSchema: OperationResultsGetOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DBforMySQL/operations",
    apiVersion: "2024-12-30",
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
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-12-30",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type PrivateEndpointConnectionsCreateOrUpdateInput =
  typeof PrivateEndpointConnectionsCreateOrUpdateInput.Type;

// Output Schema
export const PrivateEndpointConnectionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateEndpointConnectionsCreateOrUpdateOutput =
  typeof PrivateEndpointConnectionsCreateOrUpdateOutput.Type;

// The operation
/**
 * Approve or reject a private endpoint connection with a given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 * @param properties - Resource properties.
 */
export const PrivateEndpointConnectionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-12-30",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PrivateEndpointConnectionsDeleteInput =
  typeof PrivateEndpointConnectionsDeleteInput.Type;

// Output Schema
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrivateEndpointConnectionsDeleteOutput =
  typeof PrivateEndpointConnectionsDeleteOutput.Type;

// The operation
/**
 * Deletes a private endpoint connection with a given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-12-30",
    }),
  );
export type PrivateEndpointConnectionsGetInput =
  typeof PrivateEndpointConnectionsGetInput.Type;

// Output Schema
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateEndpointConnectionsGetOutput =
  typeof PrivateEndpointConnectionsGetOutput.Type;

// The operation
/**
 * Gets a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/privateEndpointConnections",
      apiVersion: "2024-12-30",
    }),
  );
export type PrivateEndpointConnectionsListByServerInput =
  typeof PrivateEndpointConnectionsListByServerInput.Type;

// Output Schema
export const PrivateEndpointConnectionsListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionsListByServerOutput =
  typeof PrivateEndpointConnectionsListByServerOutput.Type;

// The operation
/**
 * Gets all private endpoint connections on a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const PrivateEndpointConnectionsListByServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByServerInput,
    outputSchema: PrivateEndpointConnectionsListByServerOutput,
  }));
// Input Schema
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/privateLinkResources/{groupName}",
      apiVersion: "2024-12-30",
    }),
  );
export type PrivateLinkResourcesGetInput =
  typeof PrivateLinkResourcesGetInput.Type;

// Output Schema
export const PrivateLinkResourcesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PrivateLinkResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateLinkResourcesGetOutput =
  typeof PrivateLinkResourcesGetOutput.Type;

// The operation
/**
 * Gets a private link resource for MySQL server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param groupName - The name of the private link resource.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesGetInput,
    outputSchema: PrivateLinkResourcesGetOutput,
  }),
);
// Input Schema
export const PrivateLinkResourcesListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/privateLinkResources",
      apiVersion: "2024-12-30",
    }),
  );
export type PrivateLinkResourcesListByServerInput =
  typeof PrivateLinkResourcesListByServerInput.Type;

// Output Schema
export const PrivateLinkResourcesListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => PrivateLinkResourceSchema)),
    ),
  });
export type PrivateLinkResourcesListByServerOutput =
  typeof PrivateLinkResourcesListByServerOutput.Type;

// The operation
/**
 * Lists the private link resources for MySQL server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const PrivateLinkResourcesListByServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByServerInput,
    outputSchema: PrivateLinkResourcesListByServerOutput,
  }));
// Input Schema
export const ReplicasListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/replicas",
      apiVersion: "2024-12-30",
    }),
  );
export type ReplicasListByServerInput = typeof ReplicasListByServerInput.Type;

// Output Schema
export const ReplicasListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => ServerSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type ReplicasListByServerOutput = typeof ReplicasListByServerOutput.Type;

// The operation
/**
 * List all the replicas for a given server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ReplicasListByServer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicasListByServerInput,
    outputSchema: ReplicasListByServerOutput,
  }),
);
// Input Schema
export const ServerKeysCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kind: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => ServerKeyPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/keys/{keyName}",
      apiVersion: "2020-01-01",
      longRunning: {},
    }),
  );
export type ServerKeysCreateOrUpdateInput =
  typeof ServerKeysCreateOrUpdateInput.Type;

// Output Schema
export const ServerKeysCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => ServerKeyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type ServerKeysCreateOrUpdateOutput =
  typeof ServerKeysCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a MySQL Server key.
 *
 * @param keyName - The name of the MySQL Server key to be operated on (updated or created).
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ServerKeysCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServerKeysCreateOrUpdateInput,
    outputSchema: ServerKeysCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ServerKeysDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/keys/{keyName}",
    apiVersion: "2020-01-01",
    longRunning: {},
  }),
);
export type ServerKeysDeleteInput = typeof ServerKeysDeleteInput.Type;

// Output Schema
export const ServerKeysDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServerKeysDeleteOutput = typeof ServerKeysDeleteOutput.Type;

// The operation
/**
 * Deletes the MySQL Server key with the given name.
 *
 * @param keyName - The name of the MySQL Server key to be deleted.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ServerKeysDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServerKeysDeleteInput,
  outputSchema: ServerKeysDeleteOutput,
}));
// Input Schema
export const ServerKeysGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  keyName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/keys/{keyName}",
    apiVersion: "2020-01-01",
  }),
);
export type ServerKeysGetInput = typeof ServerKeysGetInput.Type;

// Output Schema
export const ServerKeysGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  properties: Schema.optional(Schema.suspend(() => ServerKeyPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type ServerKeysGetOutput = typeof ServerKeysGetOutput.Type;

// The operation
/**
 * Gets a MySQL Server key.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param keyName - The name of the MySQL Server key to be retrieved.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ServerKeysGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServerKeysGetInput,
  outputSchema: ServerKeysGetOutput,
}));
// Input Schema
export const ServerKeysListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/keys",
    apiVersion: "2020-01-01",
  }),
);
export type ServerKeysListInput = typeof ServerKeysListInput.Type;

// Output Schema
export const ServerKeysListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Array(Schema.suspend(() => ServerKeySchema))),
  nextLink: Schema.optional(Schema.String),
});
export type ServerKeysListOutput = typeof ServerKeysListOutput.Type;

// The operation
/**
 * Gets a list of  Server keys.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ServerKeysList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServerKeysListInput,
  outputSchema: ServerKeysListOutput,
}));
// Input Schema
export const ServersCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => ServerPropertiesSchema)),
  identity: Schema.optional(Schema.suspend(() => MySQLServerIdentitySchema)),
  sku: Schema.optional(Schema.suspend(() => MySQLServerSkuSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}",
    apiVersion: "2024-12-30",
    longRunning: { finalStateVia: "original-uri" },
  }),
);
export type ServersCreateInput = typeof ServersCreateInput.Type;

// Output Schema
export const ServersCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ServerPropertiesSchema)),
  identity: Schema.optional(Schema.suspend(() => MySQLServerIdentitySchema)),
  sku: Schema.optional(Schema.suspend(() => MySQLServerSkuSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ServersCreateOutput = typeof ServersCreateOutput.Type;

// The operation
/**
 * Creates a new server or updates an existing server. The update action will overwrite the existing server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersCreateInput,
  outputSchema: ServersCreateOutput,
}));
// Input Schema
export const ServersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}",
    apiVersion: "2024-12-30",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type ServersDeleteInput = typeof ServersDeleteInput.Type;

// Output Schema
export const ServersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServersDeleteOutput = typeof ServersDeleteOutput.Type;

// The operation
/**
 * Deletes a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersDeleteInput,
  outputSchema: ServersDeleteOutput,
}));
// Input Schema
export const ServersDetachVNetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    publicNetworkAccess: Schema.optional(
      Schema.suspend(() => EnableStatusEnumSchema),
    ),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/detachVNet",
    apiVersion: "2024-12-30",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type ServersDetachVNetInput = typeof ServersDetachVNetInput.Type;

// Output Schema
export const ServersDetachVNetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => ServerPropertiesSchema)),
    identity: Schema.optional(Schema.suspend(() => MySQLServerIdentitySchema)),
    sku: Schema.optional(Schema.suspend(() => MySQLServerSkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ServersDetachVNetOutput = typeof ServersDetachVNetOutput.Type;

// The operation
/**
 * Detach VNet on a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersDetachVNet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersDetachVNetInput,
  outputSchema: ServersDetachVNetOutput,
}));
// Input Schema
export const ServersFailoverInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/failover",
    apiVersion: "2024-12-30",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ServersFailoverInput = typeof ServersFailoverInput.Type;

// Output Schema
export const ServersFailoverOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServersFailoverOutput = typeof ServersFailoverOutput.Type;

// The operation
/**
 * Manual failover a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersFailover = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersFailoverInput,
  outputSchema: ServersFailoverOutput,
}));
// Input Schema
export const ServersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}",
    apiVersion: "2024-12-30",
  }),
);
export type ServersGetInput = typeof ServersGetInput.Type;

// Output Schema
export const ServersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ServerPropertiesSchema)),
  identity: Schema.optional(Schema.suspend(() => MySQLServerIdentitySchema)),
  sku: Schema.optional(Schema.suspend(() => MySQLServerSkuSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ServersGetOutput = typeof ServersGetOutput.Type;

// The operation
/**
 * Gets information about a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersGetInput,
  outputSchema: ServersGetOutput,
}));
// Input Schema
export const ServersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/flexibleServers",
    apiVersion: "2024-12-30",
  }),
);
export type ServersListInput = typeof ServersListInput.Type;

// Output Schema
export const ServersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Array(Schema.suspend(() => ServerSchema))),
  nextLink: Schema.optional(Schema.String),
});
export type ServersListOutput = typeof ServersListOutput.Type;

// The operation
/**
 * List all the servers in a given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ServersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersListInput,
  outputSchema: ServersListOutput,
}));
// Input Schema
export const ServersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers",
      apiVersion: "2024-12-30",
    }),
  );
export type ServersListByResourceGroupInput =
  typeof ServersListByResourceGroupInput.Type;

// Output Schema
export const ServersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => ServerSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type ServersListByResourceGroupOutput =
  typeof ServersListByResourceGroupOutput.Type;

// The operation
/**
 * List all the servers in a given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ServersListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServersListByResourceGroupInput,
    outputSchema: ServersListByResourceGroupOutput,
  }),
);
// Input Schema
export const ServersMigrationCutoverMigrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/cutoverMigration",
      apiVersion: "2024-12-30",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ServersMigrationCutoverMigrationInput =
  typeof ServersMigrationCutoverMigrationInput.Type;

// Output Schema
export const ServersMigrationCutoverMigrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => ServerPropertiesSchema)),
    identity: Schema.optional(Schema.suspend(() => MySQLServerIdentitySchema)),
    sku: Schema.optional(Schema.suspend(() => MySQLServerSkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ServersMigrationCutoverMigrationOutput =
  typeof ServersMigrationCutoverMigrationOutput.Type;

// The operation
/**
 * Cutover migration for MySQL import, it will switch source elastic server DNS to flexible server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersMigrationCutoverMigration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServersMigrationCutoverMigrationInput,
    outputSchema: ServersMigrationCutoverMigrationOutput,
  }));
// Input Schema
export const ServersResetGtidInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  gtidSet: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/resetGtid",
    apiVersion: "2024-12-30",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type ServersResetGtidInput = typeof ServersResetGtidInput.Type;

// Output Schema
export const ServersResetGtidOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServersResetGtidOutput = typeof ServersResetGtidOutput.Type;

// The operation
/**
 * Resets GTID on a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersResetGtid = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersResetGtidInput,
  outputSchema: ServersResetGtidOutput,
}));
// Input Schema
export const ServersRestartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  restartWithFailover: Schema.optional(
    Schema.suspend(() => EnableStatusEnumSchema),
  ),
  maxFailoverSeconds: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/restart",
    apiVersion: "2024-12-30",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ServersRestartInput = typeof ServersRestartInput.Type;

// Output Schema
export const ServersRestartOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServersRestartOutput = typeof ServersRestartOutput.Type;

// The operation
/**
 * Restarts a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersRestartInput,
  outputSchema: ServersRestartOutput,
}));
// Input Schema
export const ServersStartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/start",
    apiVersion: "2024-12-30",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ServersStartInput = typeof ServersStartInput.Type;

// Output Schema
export const ServersStartOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServersStartOutput = typeof ServersStartOutput.Type;

// The operation
/**
 * Starts a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersStartInput,
  outputSchema: ServersStartOutput,
}));
// Input Schema
export const ServersStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/stop",
    apiVersion: "2024-12-30",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ServersStopInput = typeof ServersStopInput.Type;

// Output Schema
export const ServersStopOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServersStopOutput = typeof ServersStopOutput.Type;

// The operation
/**
 * Stops a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersStopInput,
  outputSchema: ServersStopOutput,
}));
// Input Schema
export const ServersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  identity: Schema.optional(Schema.suspend(() => MySQLServerIdentitySchema)),
  sku: Schema.optional(Schema.suspend(() => MySQLServerSkuSchema)),
  properties: Schema.optional(
    Schema.suspend(() => ServerPropertiesForUpdateSchema),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}",
    apiVersion: "2024-12-30",
    longRunning: { finalStateVia: "original-uri" },
  }),
);
export type ServersUpdateInput = typeof ServersUpdateInput.Type;

// Output Schema
export const ServersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ServerPropertiesSchema)),
  identity: Schema.optional(Schema.suspend(() => MySQLServerIdentitySchema)),
  sku: Schema.optional(Schema.suspend(() => MySQLServerSkuSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ServersUpdateOutput = typeof ServersUpdateOutput.Type;

// The operation
/**
 * Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersUpdateInput,
  outputSchema: ServersUpdateOutput,
}));
// Input Schema
export const ServersUpgradeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      targetServerVersion: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/upgrade",
    apiVersion: "2020-01-01",
    longRunning: {},
  }),
);
export type ServersUpgradeInput = typeof ServersUpgradeInput.Type;

// Output Schema
export const ServersUpgradeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServersUpgradeOutput = typeof ServersUpgradeOutput.Type;

// The operation
/**
 * Upgrade server version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ServersUpgrade = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersUpgradeInput,
  outputSchema: ServersUpgradeOutput,
}));
// Input Schema
export const ServersValidateEstimateHighAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    estimatedDowntime: Schema.optional(Schema.Number),
    scheduledStandbyAvailabilityZone: Schema.optional(Schema.String),
    expectedStandbyAvailabilityZone: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/validateEstimateHighAvailability",
      apiVersion: "2024-12-30",
    }),
  );
export type ServersValidateEstimateHighAvailabilityInput =
  typeof ServersValidateEstimateHighAvailabilityInput.Type;

// Output Schema
export const ServersValidateEstimateHighAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    estimatedDowntime: Schema.optional(Schema.Number),
    scheduledStandbyAvailabilityZone: Schema.optional(Schema.String),
    expectedStandbyAvailabilityZone: Schema.optional(Schema.String),
  });
export type ServersValidateEstimateHighAvailabilityOutput =
  typeof ServersValidateEstimateHighAvailabilityOutput.Type;

// The operation
/**
 * Validate a deployment of high availability.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersValidateEstimateHighAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServersValidateEstimateHighAvailabilityInput,
    outputSchema: ServersValidateEstimateHighAvailabilityOutput,
  }));
