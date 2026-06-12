/**
 * Azure Postgresql API
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
  isDataAction: Schema.optional(Schema.Boolean),
  origin: Schema.optional(Schema.suspend(() => OperationOriginSchema)),
  properties: Schema.optional(Schema.suspend(() => OperationPropertiesSchema)),
});
const OperationDisplaySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provider: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
  operation: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const OperationOriginSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "user",
  "system",
]);
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
  supportedAggregationTypes: Schema.optional(Schema.Array(Schema.String)),
  supportedTimeGrainTypes: Schema.optional(Schema.Array(Schema.String)),
  category: Schema.optional(Schema.String),
});
const LogSpecificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  blobDuration: Schema.optional(Schema.String),
});
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
const CapabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.suspend(() => CapabilityStatusSchema)),
  reason: Schema.optional(Schema.String),
});
const CapabilityStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Visible",
  "Available",
  "Default",
  "Disabled",
]);
const DelegatedSubnetUsageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subnetName: Schema.optional(Schema.String),
  usage: Schema.optional(Schema.Number),
});
const QuotaUsageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.suspend(() => NamePropertySchema)),
  limit: Schema.optional(Schema.Number),
  unit: Schema.optional(Schema.String),
  currentValue: Schema.optional(Schema.Number),
  id: Schema.optional(Schema.String),
});
const NamePropertySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  localizedValue: Schema.optional(Schema.String),
});
const ServerPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  administratorLogin: Schema.optional(Schema.String),
  administratorLoginPassword: Schema.optional(SensitiveOutputString),
  version: Schema.optional(Schema.suspend(() => PostgresMajorVersionSchema)),
  minorVersion: Schema.optional(Schema.String),
  state: Schema.optional(Schema.suspend(() => ServerStateSchema)),
  fullyQualifiedDomainName: Schema.optional(Schema.String),
  storage: Schema.optional(Schema.suspend(() => StorageSchema)),
  authConfig: Schema.optional(Schema.suspend(() => AuthConfigSchema)),
  dataEncryption: Schema.optional(Schema.suspend(() => DataEncryptionSchema)),
  backup: Schema.optional(Schema.suspend(() => BackupSchema)),
  network: Schema.optional(Schema.suspend(() => NetworkSchema)),
  highAvailability: Schema.optional(
    Schema.suspend(() => HighAvailabilitySchema),
  ),
  maintenanceWindow: Schema.optional(
    Schema.suspend(() => MaintenanceWindowSchema),
  ),
  sourceServerResourceId: Schema.optional(Schema.String),
  pointInTimeUTC: Schema.optional(Schema.String),
  availabilityZone: Schema.optional(Schema.String),
  replicationRole: Schema.optional(Schema.suspend(() => ReplicationRoleSchema)),
  replicaCapacity: Schema.optional(Schema.Number),
  replica: Schema.optional(Schema.suspend(() => ReplicaSchema)),
  createMode: Schema.optional(Schema.suspend(() => CreateModeSchema)),
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
  cluster: Schema.optional(Schema.suspend(() => ClusterSchema)),
});
const PostgresMajorVersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "18",
  "17",
  "16",
  "15",
  "14",
  "13",
  "12",
  "11",
]);
const ServerStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Ready",
  "Dropping",
  "Disabled",
  "Starting",
  "Stopping",
  "Stopped",
  "Updating",
  "Restarting",
  "Inaccessible",
  "Provisioning",
]);
const StorageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  storageSizeGB: Schema.optional(Schema.Number),
  autoGrow: Schema.optional(Schema.suspend(() => StorageAutoGrowSchema)),
  tier: Schema.optional(
    Schema.suspend(() => AzureManagedDiskPerformanceTierSchema),
  ),
  iops: Schema.optional(Schema.Number),
  throughput: Schema.optional(Schema.Number),
  type: Schema.optional(Schema.suspend(() => StorageTypeSchema)),
});
const StorageAutoGrowSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const AzureManagedDiskPerformanceTierSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "P1",
    "P2",
    "P3",
    "P4",
    "P6",
    "P10",
    "P15",
    "P20",
    "P30",
    "P40",
    "P50",
    "P60",
    "P70",
    "P80",
  ]);
const StorageTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Premium_LRS",
  "PremiumV2_LRS",
  "UltraSSD_LRS",
]);
const AuthConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  activeDirectoryAuth: Schema.optional(
    Schema.suspend(() => MicrosoftEntraAuthSchema),
  ),
  passwordAuth: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  tenantId: Schema.optional(Schema.String),
});
const MicrosoftEntraAuthSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const DataEncryptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  primaryKeyURI: Schema.optional(Schema.String),
  primaryUserAssignedIdentityId: Schema.optional(Schema.String),
  geoBackupKeyURI: Schema.optional(Schema.String),
  geoBackupUserAssignedIdentityId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.suspend(() => DataEncryptionTypeSchema)),
  primaryEncryptionKeyStatus: Schema.optional(
    Schema.suspend(() => EncryptionKeyStatusSchema),
  ),
  geoBackupEncryptionKeyStatus: Schema.optional(
    Schema.suspend(() => EncryptionKeyStatusSchema),
  ),
});
const DataEncryptionTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SystemManaged",
  "AzureKeyVault",
]);
const EncryptionKeyStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Valid",
  "Invalid",
]);
const BackupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backupRetentionDays: Schema.optional(Schema.Number),
  geoRedundantBackup: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  earliestRestoreDate: Schema.optional(Schema.String),
});
const NetworkSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  publicNetworkAccess: Schema.optional(
    Schema.suspend(() => ServerPublicNetworkAccessStateSchema),
  ),
  delegatedSubnetResourceId: Schema.optional(Schema.String),
  privateDnsZoneArmResourceId: Schema.optional(Schema.String),
});
const ServerPublicNetworkAccessStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Enabled", "Disabled"]);
const HighAvailabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.optional(
    Schema.Literals(["Disabled", "ZoneRedundant", "SameZone"]),
  ),
  state: Schema.optional(Schema.suspend(() => HighAvailabilityStateSchema)),
  standbyAvailabilityZone: Schema.optional(Schema.String),
});
const HighAvailabilityStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  [
    "NotEnabled",
    "CreatingStandby",
    "ReplicatingData",
    "FailingOver",
    "Healthy",
    "RemovingStandby",
  ],
);
const MaintenanceWindowSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customWindow: Schema.optional(Schema.String),
  startHour: Schema.optional(Schema.Number),
  startMinute: Schema.optional(Schema.Number),
  dayOfWeek: Schema.optional(Schema.Number),
});
const ReplicationRoleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "Primary",
  "AsyncReplica",
  "GeoAsyncReplica",
]);
const ReplicaSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  role: Schema.optional(Schema.suspend(() => ReplicationRoleSchema)),
  capacity: Schema.optional(Schema.Number),
  replicationState: Schema.optional(
    Schema.suspend(() => ReplicationStateSchema),
  ),
  promoteMode: Schema.optional(
    Schema.suspend(() => ReadReplicaPromoteModeSchema),
  ),
  promoteOption: Schema.optional(
    Schema.suspend(() => ReadReplicaPromoteOptionSchema),
  ),
});
const ReplicationStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Active",
  "Catchup",
  "Provisioning",
  "Updating",
  "Broken",
  "Reconfiguring",
]);
const ReadReplicaPromoteModeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Standalone", "Switchover"]);
const ReadReplicaPromoteOptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Planned", "Forced"]);
const CreateModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Default",
  "Create",
  "Update",
  "PointInTimeRestore",
  "GeoRestore",
  "Replica",
  "ReviveDropped",
]);
const ClusterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusterSize: Schema.optional(Schema.Number),
  defaultDatabaseName: Schema.optional(Schema.String),
});
const SkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  tier: Schema.suspend(() => SkuTierSchema),
});
const SkuTierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Burstable",
  "GeneralPurpose",
  "MemoryOptimized",
]);
const UserAssignedIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userAssignedIdentities: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => UserIdentitySchema),
    ),
  ),
  principalId: Schema.optional(Schema.String),
  type: Schema.suspend(() => IdentityTypeSchema),
  tenantId: Schema.optional(Schema.String),
});
const UserIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
});
const IdentityTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "UserAssigned",
  "SystemAssigned",
  "SystemAssigned,UserAssigned",
]);
const SkuForPatchSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
});
const ServerPropertiesForPatchSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    administratorLogin: Schema.optional(Schema.String),
    administratorLoginPassword: Schema.optional(SensitiveOutputString),
    version: Schema.optional(Schema.suspend(() => PostgresMajorVersionSchema)),
    storage: Schema.optional(Schema.suspend(() => StorageSchema)),
    backup: Schema.optional(Schema.suspend(() => BackupForPatchSchema)),
    highAvailability: Schema.optional(
      Schema.suspend(() => HighAvailabilityForPatchSchema),
    ),
    maintenanceWindow: Schema.optional(
      Schema.suspend(() => MaintenanceWindowForPatchSchema),
    ),
    authConfig: Schema.optional(Schema.suspend(() => AuthConfigForPatchSchema)),
    dataEncryption: Schema.optional(Schema.suspend(() => DataEncryptionSchema)),
    availabilityZone: Schema.optional(Schema.String),
    createMode: Schema.optional(Schema.suspend(() => CreateModeForPatchSchema)),
    replicationRole: Schema.optional(
      Schema.suspend(() => ReplicationRoleSchema),
    ),
    replica: Schema.optional(Schema.suspend(() => ReplicaSchema)),
    network: Schema.optional(Schema.suspend(() => NetworkSchema)),
    cluster: Schema.optional(Schema.suspend(() => ClusterSchema)),
  });
const BackupForPatchSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backupRetentionDays: Schema.optional(Schema.Number),
  geoRedundantBackup: Schema.optional(
    Schema.suspend(() => GeographicallyRedundantBackupSchema),
  ),
  earliestRestoreDate: Schema.optional(Schema.String),
});
const GeographicallyRedundantBackupSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Enabled", "Disabled"]);
const HighAvailabilityForPatchSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(
      Schema.suspend(() => PostgreSqlFlexibleServerHighAvailabilityModeSchema),
    ),
    state: Schema.optional(Schema.suspend(() => HighAvailabilityStateSchema)),
    standbyAvailabilityZone: Schema.optional(Schema.String),
  });
const PostgreSqlFlexibleServerHighAvailabilityModeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Disabled",
    "ZoneRedundant",
    "SameZone",
  ]);
const MaintenanceWindowForPatchSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customWindow: Schema.optional(Schema.String),
    startHour: Schema.optional(Schema.Number),
    startMinute: Schema.optional(Schema.Number),
    dayOfWeek: Schema.optional(Schema.Number),
  });
const AuthConfigForPatchSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  activeDirectoryAuth: Schema.optional(
    Schema.suspend(() => MicrosoftEntraAuthSchema),
  ),
  passwordAuth: Schema.optional(Schema.suspend(() => PasswordBasedAuthSchema)),
  tenantId: Schema.optional(Schema.String),
});
const PasswordBasedAuthSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const CreateModeForPatchSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Default",
  "Update",
]);
const AdministratorMicrosoftEntraSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const AdministratorMicrosoftEntraPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalType: Schema.optional(Schema.suspend(() => PrincipalTypeSchema)),
    principalName: Schema.optional(Schema.String),
    objectId: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
  });
const PrincipalTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "User",
  "Group",
  "ServicePrincipal",
]);
const AdministratorMicrosoftEntraPropertiesForAddSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalType: Schema.optional(Schema.suspend(() => PrincipalTypeSchema)),
    principalName: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
  });
const AdvancedThreatProtectionSettingsModelSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const AdvancedThreatProtectionSettingsPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.suspend(() => ThreatProtectionStateSchema),
    creationTime: Schema.optional(Schema.String),
  });
const ThreatProtectionStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["Enabled", "Disabled"],
);
const BackupAutomaticAndOnDemandSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const BackupAutomaticAndOnDemandPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupType: Schema.optional(Schema.suspend(() => BackupTypeSchema)),
    completedTime: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
  });
const BackupTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Full",
  "Customer On-Demand",
]);
const MigrationNameAvailabilityReasonSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Invalid", "AlreadyExists"]);
const ConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ConfigurationPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    defaultValue: Schema.optional(Schema.String),
    dataType: Schema.optional(
      Schema.suspend(() => ConfigurationDataTypeSchema),
    ),
    allowedValues: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    isDynamicConfig: Schema.optional(Schema.Boolean),
    isReadOnly: Schema.optional(Schema.Boolean),
    isConfigPendingRestart: Schema.optional(Schema.Boolean),
    unit: Schema.optional(Schema.String),
    documentationLink: Schema.optional(Schema.String),
  },
);
const ConfigurationDataTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["Boolean", "Numeric", "Integer", "Enumeration", "String", "Set"],
);
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
const CapturedLogSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const BackupsLongTermRetentionOperationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const LtrBackupOperationResponsePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasourceSizeInBytes: Schema.optional(Schema.Number),
    dataTransferredInBytes: Schema.optional(Schema.Number),
    backupName: Schema.optional(Schema.String),
    backupMetadata: Schema.optional(Schema.String),
    status: Schema.suspend(() => ExecutionStatusSchema),
    startTime: Schema.String,
    endTime: Schema.optional(Schema.String),
    percentComplete: Schema.optional(Schema.Number),
    errorCode: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
  });
const ExecutionStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Running",
  "Cancelled",
  "Failed",
  "Succeeded",
]);
const BackupSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backupName: Schema.String,
});
const BackupsLongTermRetentionResponsePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numberOfContainers: Schema.Number,
  });
const MigrationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const MigrationPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  migrationId: Schema.optional(Schema.String),
  currentStatus: Schema.optional(Schema.suspend(() => MigrationStatusSchema)),
  migrationInstanceResourceId: Schema.optional(Schema.String),
  migrationMode: Schema.optional(Schema.suspend(() => MigrationModeSchema)),
  migrationOption: Schema.optional(Schema.suspend(() => MigrationOptionSchema)),
  sourceType: Schema.optional(Schema.suspend(() => SourceTypeSchema)),
  sslMode: Schema.optional(Schema.suspend(() => SslModeSchema)),
  sourceDbServerMetadata: Schema.optional(
    Schema.suspend(() => DbServerMetadataSchema),
  ),
  targetDbServerMetadata: Schema.optional(
    Schema.suspend(() => DbServerMetadataSchema),
  ),
  sourceDbServerResourceId: Schema.optional(Schema.String),
  sourceDbServerFullyQualifiedDomainName: Schema.optional(Schema.String),
  targetDbServerResourceId: Schema.optional(Schema.String),
  targetDbServerFullyQualifiedDomainName: Schema.optional(Schema.String),
  secretParameters: Schema.optional(
    Schema.suspend(() => MigrationSecretParametersSchema),
  ),
  dbsToMigrate: Schema.optional(Schema.Array(Schema.String)),
  setupLogicalReplicationOnSourceDbIfNeeded: Schema.optional(
    Schema.suspend(() => LogicalReplicationOnSourceServerSchema),
  ),
  overwriteDbsInTarget: Schema.optional(
    Schema.suspend(() => OverwriteDatabasesOnTargetServerSchema),
  ),
  migrationWindowStartTimeInUtc: Schema.optional(Schema.String),
  migrationWindowEndTimeInUtc: Schema.optional(Schema.String),
  migrateRoles: Schema.optional(
    Schema.suspend(() => MigrateRolesAndPermissionsSchema),
  ),
  startDataMigration: Schema.optional(
    Schema.suspend(() => StartDataMigrationSchema),
  ),
  triggerCutover: Schema.optional(Schema.suspend(() => TriggerCutoverSchema)),
  dbsToTriggerCutoverOn: Schema.optional(Schema.Array(Schema.String)),
  cancel: Schema.optional(Schema.suspend(() => CancelSchema)),
  dbsToCancelMigrationOn: Schema.optional(Schema.Array(Schema.String)),
});
const MigrationStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.suspend(() => MigrationStateSchema)),
  error: Schema.optional(Schema.String),
  currentSubStateDetails: Schema.optional(
    Schema.suspend(() => MigrationSubstateDetailsSchema),
  ),
});
const MigrationStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "InProgress",
  "WaitingForUserAction",
  "Canceled",
  "Failed",
  "Succeeded",
  "ValidationFailed",
  "CleaningUp",
]);
const MigrationSubstateDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentSubState: Schema.optional(
      Schema.suspend(() => MigrationSubstateSchema),
    ),
    dbDetails: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => DatabaseMigrationStateSchema),
      ),
    ),
    validationDetails: Schema.optional(
      Schema.suspend(() => ValidationDetailsSchema),
    ),
  });
const MigrationSubstateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "PerformingPreRequisiteSteps",
  "WaitingForLogicalReplicationSetupRequestOnSourceDB",
  "WaitingForDBsToMigrateSpecification",
  "WaitingForTargetDBOverwriteConfirmation",
  "WaitingForDataMigrationScheduling",
  "WaitingForDataMigrationWindow",
  "MigratingData",
  "WaitingForCutoverTrigger",
  "CompletingMigration",
  "Completed",
  "CancelingRequestedDBMigrations",
  "ValidationInProgress",
]);
const DatabaseMigrationStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databaseName: Schema.optional(Schema.String),
  migrationState: Schema.optional(
    Schema.suspend(() => MigrationDatabaseStateSchema),
  ),
  migrationOperation: Schema.optional(Schema.String),
  startedOn: Schema.optional(Schema.String),
  endedOn: Schema.optional(Schema.String),
  fullLoadQueuedTables: Schema.optional(Schema.Number),
  fullLoadErroredTables: Schema.optional(Schema.Number),
  fullLoadLoadingTables: Schema.optional(Schema.Number),
  fullLoadCompletedTables: Schema.optional(Schema.Number),
  cdcUpdateCounter: Schema.optional(Schema.Number),
  cdcDeleteCounter: Schema.optional(Schema.Number),
  cdcInsertCounter: Schema.optional(Schema.Number),
  appliedChanges: Schema.optional(Schema.Number),
  incomingChanges: Schema.optional(Schema.Number),
  latency: Schema.optional(Schema.Number),
  message: Schema.optional(Schema.String),
});
const MigrationDatabaseStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "InProgress",
    "WaitingForCutoverTrigger",
    "Failed",
    "Canceled",
    "Succeeded",
    "Canceling",
  ]);
const ValidationDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.suspend(() => ValidationStateSchema)),
  validationStartTimeInUtc: Schema.optional(Schema.String),
  validationEndTimeInUtc: Schema.optional(Schema.String),
  serverLevelValidationDetails: Schema.optional(
    Schema.Array(Schema.suspend(() => ValidationSummaryItemSchema)),
  ),
  dbLevelValidationDetails: Schema.optional(
    Schema.Array(Schema.suspend(() => DbLevelValidationStatusSchema)),
  ),
});
const ValidationStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Failed",
  "Succeeded",
  "Warning",
]);
const ValidationSummaryItemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  state: Schema.optional(Schema.suspend(() => ValidationStateSchema)),
  messages: Schema.optional(
    Schema.Array(Schema.suspend(() => ValidationMessageSchema)),
  ),
});
const ValidationMessageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.suspend(() => ValidationStateSchema)),
  message: Schema.optional(Schema.String),
});
const DbLevelValidationStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    databaseName: Schema.optional(Schema.String),
    startedOn: Schema.optional(Schema.String),
    endedOn: Schema.optional(Schema.String),
    summary: Schema.optional(
      Schema.Array(Schema.suspend(() => ValidationSummaryItemSchema)),
    ),
  },
);
const MigrationModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Offline",
  "Online",
]);
const MigrationOptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Validate",
  "Migrate",
  "ValidateAndMigrate",
]);
const SourceTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "OnPremises",
  "AWS",
  "GCP",
  "AzureVM",
  "PostgreSQLSingleServer",
  "AWS_RDS",
  "AWS_AURORA",
  "AWS_EC2",
  "GCP_CloudSQL",
  "GCP_AlloyDB",
  "GCP_Compute",
  "EDB",
  "EDB_Oracle_Server",
  "EDB_PostgreSQL",
  "PostgreSQLFlexibleServer",
  "PostgreSQLCosmosDB",
  "Huawei_RDS",
  "Huawei_Compute",
  "Heroku_PostgreSQL",
  "Crunchy_PostgreSQL",
  "ApsaraDB_RDS",
  "Digital_Ocean_Droplets",
  "Digital_Ocean_PostgreSQL",
  "Supabase_PostgreSQL",
]);
const SslModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Prefer",
  "Require",
  "VerifyCA",
  "VerifyFull",
]);
const DbServerMetadataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  location: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  storageMb: Schema.optional(Schema.Number),
  sku: Schema.optional(Schema.suspend(() => ServerSkuSchema)),
});
const ServerSkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  tier: Schema.optional(Schema.suspend(() => SkuTierSchema)),
});
const MigrationSecretParametersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adminCredentials: Schema.suspend(() => AdminCredentialsSchema),
    sourceServerUsername: Schema.optional(Schema.String),
    targetServerUsername: Schema.optional(Schema.String),
  });
const AdminCredentialsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sourceServerPassword: SensitiveOutputString,
  targetServerPassword: SensitiveOutputString,
});
const LogicalReplicationOnSourceServerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["True", "False"]);
const OverwriteDatabasesOnTargetServerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["True", "False"]);
const MigrateRolesAndPermissionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["True", "False"]);
const StartDataMigrationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "True",
  "False",
]);
const TriggerCutoverSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "True",
  "False",
]);
const CancelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "True",
  "False",
]);
const MigrationPropertiesForPatchSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceDbServerResourceId: Schema.optional(Schema.String),
    sourceDbServerFullyQualifiedDomainName: Schema.optional(Schema.String),
    targetDbServerFullyQualifiedDomainName: Schema.optional(Schema.String),
    secretParameters: Schema.optional(
      Schema.suspend(() => MigrationSecretParametersForPatchSchema),
    ),
    dbsToMigrate: Schema.optional(Schema.Array(Schema.String)),
    setupLogicalReplicationOnSourceDbIfNeeded: Schema.optional(
      Schema.suspend(() => LogicalReplicationOnSourceServerSchema),
    ),
    overwriteDbsInTarget: Schema.optional(
      Schema.suspend(() => OverwriteDatabasesOnTargetServerSchema),
    ),
    migrationWindowStartTimeInUtc: Schema.optional(Schema.String),
    migrateRoles: Schema.optional(
      Schema.suspend(() => MigrateRolesAndPermissionsSchema),
    ),
    startDataMigration: Schema.optional(
      Schema.suspend(() => StartDataMigrationSchema),
    ),
    triggerCutover: Schema.optional(Schema.suspend(() => TriggerCutoverSchema)),
    dbsToTriggerCutoverOn: Schema.optional(Schema.Array(Schema.String)),
    cancel: Schema.optional(Schema.suspend(() => CancelSchema)),
    dbsToCancelMigrationOn: Schema.optional(Schema.Array(Schema.String)),
    migrationMode: Schema.optional(Schema.suspend(() => MigrationModeSchema)),
  });
const MigrationSecretParametersForPatchSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adminCredentials: Schema.optional(
      Schema.suspend(() => AdminCredentialsForPatchSchema),
    ),
    sourceServerUsername: Schema.optional(Schema.String),
    targetServerUsername: Schema.optional(Schema.String),
  });
const AdminCredentialsForPatchSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceServerPassword: Schema.optional(SensitiveOutputString),
    targetServerPassword: Schema.optional(SensitiveOutputString),
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
const FailoverModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "PlannedFailover",
  "ForcedFailover",
  "PlannedSwitchover",
  "ForcedSwitchover",
]);
const BackupStoreDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sasUriList: Schema.Array(Schema.suspend(() => secretStringSchema)),
});
const secretStringSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const TuningOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const TuningOptionsPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    state: Schema.optional(Schema.String),
  },
);
const ObjectRecommendationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const VirtualEndpointSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const VirtualEndpointResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointType: Schema.optional(
      Schema.suspend(() => VirtualEndpointTypeSchema),
    ),
    members: Schema.optional(Schema.Array(Schema.String)),
    virtualEndpoints: Schema.optional(Schema.Array(Schema.String)),
  });
const VirtualEndpointTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "ReadWrite",
]);

// Input Schema
export const AdministratorsMicrosoftEntraCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    objectId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AdministratorMicrosoftEntraPropertiesForAddSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/administrators/{objectId}",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type AdministratorsMicrosoftEntraCreateOrUpdateInput =
  typeof AdministratorsMicrosoftEntraCreateOrUpdateInput.Type;

// Output Schema
export const AdministratorsMicrosoftEntraCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AdministratorsMicrosoftEntraCreateOrUpdateOutput =
  typeof AdministratorsMicrosoftEntraCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates a new server administrator associated to a Microsoft Entra principal.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param objectId - Object identifier of the Microsoft Entra principal.
 */
export const AdministratorsMicrosoftEntraCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdministratorsMicrosoftEntraCreateOrUpdateInput,
    outputSchema: AdministratorsMicrosoftEntraCreateOrUpdateOutput,
  }));
// Input Schema
export const AdministratorsMicrosoftEntraDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    objectId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/administrators/{objectId}",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AdministratorsMicrosoftEntraDeleteInput =
  typeof AdministratorsMicrosoftEntraDeleteInput.Type;

// Output Schema
export const AdministratorsMicrosoftEntraDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AdministratorsMicrosoftEntraDeleteOutput =
  typeof AdministratorsMicrosoftEntraDeleteOutput.Type;

// The operation
/**
 * Deletes an existing server administrator associated to a Microsoft Entra principal.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param objectId - Object identifier of the Microsoft Entra principal.
 */
export const AdministratorsMicrosoftEntraDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdministratorsMicrosoftEntraDeleteInput,
    outputSchema: AdministratorsMicrosoftEntraDeleteOutput,
  }));
// Input Schema
export const AdministratorsMicrosoftEntraGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    objectId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/administrators/{objectId}",
      apiVersion: "2025-08-01",
    }),
  );
export type AdministratorsMicrosoftEntraGetInput =
  typeof AdministratorsMicrosoftEntraGetInput.Type;

// Output Schema
export const AdministratorsMicrosoftEntraGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(
      () => AdministratorMicrosoftEntraPropertiesSchema,
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AdministratorsMicrosoftEntraGetOutput =
  typeof AdministratorsMicrosoftEntraGetOutput.Type;

// The operation
/**
 * Gets information about a server administrator associated to a Microsoft Entra principal.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param objectId - Object identifier of the Microsoft Entra principal.
 */
export const AdministratorsMicrosoftEntraGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdministratorsMicrosoftEntraGetInput,
    outputSchema: AdministratorsMicrosoftEntraGetOutput,
  }));
// Input Schema
export const AdministratorsMicrosoftEntraListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/administrators",
      apiVersion: "2025-08-01",
    }),
  );
export type AdministratorsMicrosoftEntraListByServerInput =
  typeof AdministratorsMicrosoftEntraListByServerInput.Type;

// Output Schema
export const AdministratorsMicrosoftEntraListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => AdministratorMicrosoftEntraSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type AdministratorsMicrosoftEntraListByServerOutput =
  typeof AdministratorsMicrosoftEntraListByServerOutput.Type;

// The operation
/**
 * List all server administrators associated to a Microsoft Entra principal.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const AdministratorsMicrosoftEntraListByServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdministratorsMicrosoftEntraListByServerInput,
    outputSchema: AdministratorsMicrosoftEntraListByServerOutput,
  }));
// Input Schema
export const AdvancedThreatProtectionSettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    threatProtectionName: Schema.Literals(["Default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/advancedThreatProtectionSettings/{threatProtectionName}",
      apiVersion: "2025-08-01",
    }),
  );
export type AdvancedThreatProtectionSettingsGetInput =
  typeof AdvancedThreatProtectionSettingsGetInput.Type;

// Output Schema
export const AdvancedThreatProtectionSettingsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AdvancedThreatProtectionSettingsPropertiesSchema),
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
 * Gets state of advanced threat protection settings for a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param threatProtectionName - Name of the advanced threat protection settings.
 */
export const AdvancedThreatProtectionSettingsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdvancedThreatProtectionSettingsGetInput,
    outputSchema: AdvancedThreatProtectionSettingsGetOutput,
  }));
// Input Schema
export const AdvancedThreatProtectionSettingsListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/advancedThreatProtectionSettings",
      apiVersion: "2025-08-01",
    }),
  );
export type AdvancedThreatProtectionSettingsListByServerInput =
  typeof AdvancedThreatProtectionSettingsListByServerInput.Type;

// Output Schema
export const AdvancedThreatProtectionSettingsListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => AdvancedThreatProtectionSettingsModelSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type AdvancedThreatProtectionSettingsListByServerOutput =
  typeof AdvancedThreatProtectionSettingsListByServerOutput.Type;

// The operation
/**
 * Lists state of advanced threat protection settings for a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const AdvancedThreatProtectionSettingsListByServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdvancedThreatProtectionSettingsListByServerInput,
    outputSchema: AdvancedThreatProtectionSettingsListByServerOutput,
  }));
// Input Schema
export const BackupsAutomaticAndOnDemandCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    backupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/backups/{backupName}",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type BackupsAutomaticAndOnDemandCreateInput =
  typeof BackupsAutomaticAndOnDemandCreateInput.Type;

// Output Schema
export const BackupsAutomaticAndOnDemandCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BackupsAutomaticAndOnDemandCreateOutput =
  typeof BackupsAutomaticAndOnDemandCreateOutput.Type;

// The operation
/**
 * Creates an on demand backup of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param backupName - Name of the backup.
 */
export const BackupsAutomaticAndOnDemandCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsAutomaticAndOnDemandCreateInput,
    outputSchema: BackupsAutomaticAndOnDemandCreateOutput,
  }));
// Input Schema
export const BackupsAutomaticAndOnDemandDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    backupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/backups/{backupName}",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BackupsAutomaticAndOnDemandDeleteInput =
  typeof BackupsAutomaticAndOnDemandDeleteInput.Type;

// Output Schema
export const BackupsAutomaticAndOnDemandDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BackupsAutomaticAndOnDemandDeleteOutput =
  typeof BackupsAutomaticAndOnDemandDeleteOutput.Type;

// The operation
/**
 * Deletes a specific backup, given its name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param backupName - Name of the backup.
 */
export const BackupsAutomaticAndOnDemandDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsAutomaticAndOnDemandDeleteInput,
    outputSchema: BackupsAutomaticAndOnDemandDeleteOutput,
  }));
// Input Schema
export const BackupsAutomaticAndOnDemandGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    backupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/backups/{backupName}",
      apiVersion: "2025-08-01",
    }),
  );
export type BackupsAutomaticAndOnDemandGetInput =
  typeof BackupsAutomaticAndOnDemandGetInput.Type;

// Output Schema
export const BackupsAutomaticAndOnDemandGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BackupAutomaticAndOnDemandPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BackupsAutomaticAndOnDemandGetOutput =
  typeof BackupsAutomaticAndOnDemandGetOutput.Type;

// The operation
/**
 * Gets information of an on demand backup, given its name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param backupName - Name of the backup.
 */
export const BackupsAutomaticAndOnDemandGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsAutomaticAndOnDemandGetInput,
    outputSchema: BackupsAutomaticAndOnDemandGetOutput,
  }));
// Input Schema
export const BackupsAutomaticAndOnDemandListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/backups",
      apiVersion: "2025-08-01",
    }),
  );
export type BackupsAutomaticAndOnDemandListByServerInput =
  typeof BackupsAutomaticAndOnDemandListByServerInput.Type;

// Output Schema
export const BackupsAutomaticAndOnDemandListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BackupAutomaticAndOnDemandSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BackupsAutomaticAndOnDemandListByServerOutput =
  typeof BackupsAutomaticAndOnDemandListByServerOutput.Type;

// The operation
/**
 * Lists all available backups of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const BackupsAutomaticAndOnDemandListByServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsAutomaticAndOnDemandListByServerInput,
    outputSchema: BackupsAutomaticAndOnDemandListByServerOutput,
  }));
// Input Schema
export const BackupsLongTermRetentionCheckPrerequisitesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    backupSettings: Schema.suspend(() => BackupSettingsSchema),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/ltrPreBackup",
      apiVersion: "2025-08-01",
    }),
  );
export type BackupsLongTermRetentionCheckPrerequisitesInput =
  typeof BackupsLongTermRetentionCheckPrerequisitesInput.Type;

// Output Schema
export const BackupsLongTermRetentionCheckPrerequisitesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(
      () => BackupsLongTermRetentionResponsePropertiesSchema,
    ),
  });
export type BackupsLongTermRetentionCheckPrerequisitesOutput =
  typeof BackupsLongTermRetentionCheckPrerequisitesOutput.Type;

// The operation
/**
 * Performs all checks required for a long term retention backup operation to succeed.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const BackupsLongTermRetentionCheckPrerequisites =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsLongTermRetentionCheckPrerequisitesInput,
    outputSchema: BackupsLongTermRetentionCheckPrerequisitesOutput,
  }));
// Input Schema
export const BackupsLongTermRetentionGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    backupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/ltrBackupOperations/{backupName}",
      apiVersion: "2025-08-01",
    }),
  );
export type BackupsLongTermRetentionGetInput =
  typeof BackupsLongTermRetentionGetInput.Type;

// Output Schema
export const BackupsLongTermRetentionGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => LtrBackupOperationResponsePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BackupsLongTermRetentionGetOutput =
  typeof BackupsLongTermRetentionGetOutput.Type;

// The operation
/**
 * Gets the results of a long retention backup operation for a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param backupName - The name of the backup.
 */
export const BackupsLongTermRetentionGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BackupsLongTermRetentionGetInput,
    outputSchema: BackupsLongTermRetentionGetOutput,
  }),
);
// Input Schema
export const BackupsLongTermRetentionListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/ltrBackupOperations",
      apiVersion: "2025-08-01",
    }),
  );
export type BackupsLongTermRetentionListByServerInput =
  typeof BackupsLongTermRetentionListByServerInput.Type;

// Output Schema
export const BackupsLongTermRetentionListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => BackupsLongTermRetentionOperationSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type BackupsLongTermRetentionListByServerOutput =
  typeof BackupsLongTermRetentionListByServerOutput.Type;

// The operation
/**
 * Lists the results of the long term retention backup operations for a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const BackupsLongTermRetentionListByServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsLongTermRetentionListByServerInput,
    outputSchema: BackupsLongTermRetentionListByServerOutput,
  }));
// Input Schema
export const BackupsLongTermRetentionStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    targetDetails: Schema.suspend(() => BackupStoreDetailsSchema),
    backupSettings: Schema.suspend(() => BackupSettingsSchema),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/startLtrBackup",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BackupsLongTermRetentionStartInput =
  typeof BackupsLongTermRetentionStartInput.Type;

// Output Schema
export const BackupsLongTermRetentionStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => LtrBackupOperationResponsePropertiesSchema),
    ),
  });
export type BackupsLongTermRetentionStartOutput =
  typeof BackupsLongTermRetentionStartOutput.Type;

// The operation
/**
 * Initiates a long term retention backup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const BackupsLongTermRetentionStart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsLongTermRetentionStartInput,
    outputSchema: BackupsLongTermRetentionStartOutput,
  }));
// Input Schema
export const CapabilitiesByLocationListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforPostgreSQL/locations/{locationName}/capabilities",
      apiVersion: "2025-08-01",
    }),
  );
export type CapabilitiesByLocationListInput =
  typeof CapabilitiesByLocationListInput.Type;

// Output Schema
export const CapabilitiesByLocationListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => CapabilitySchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type CapabilitiesByLocationListOutput =
  typeof CapabilitiesByLocationListOutput.Type;

// The operation
/**
 * Lists the capabilities available in a given location for a specific subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationName - The name of the location.
 */
export const CapabilitiesByLocationList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CapabilitiesByLocationListInput,
    outputSchema: CapabilitiesByLocationListOutput,
  }),
);
// Input Schema
export const CapabilitiesByServerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/capabilities",
      apiVersion: "2025-08-01",
    }),
  );
export type CapabilitiesByServerListInput =
  typeof CapabilitiesByServerListInput.Type;

// Output Schema
export const CapabilitiesByServerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => CapabilitySchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type CapabilitiesByServerListOutput =
  typeof CapabilitiesByServerListOutput.Type;

// The operation
/**
 * Lists the capabilities available for a given server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const CapabilitiesByServerList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CapabilitiesByServerListInput,
    outputSchema: CapabilitiesByServerListOutput,
  }),
);
// Input Schema
export const CapturedLogsListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/logFiles",
      apiVersion: "2025-08-01",
    }),
  );
export type CapturedLogsListByServerInput =
  typeof CapturedLogsListByServerInput.Type;

// Output Schema
export const CapturedLogsListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => CapturedLogSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type CapturedLogsListByServerOutput =
  typeof CapturedLogsListByServerOutput.Type;

// The operation
/**
 * Lists all captured logs for download in a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const CapturedLogsListByServer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CapturedLogsListByServerInput,
    outputSchema: CapturedLogsListByServerOutput,
  }),
);
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/configurations/{configurationName}",
    apiVersion: "2025-08-01",
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
 * Gets information about a specific configuration (also known as server parameter) of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param configurationName - Name of the configuration (also known as server parameter).
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
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/configurations",
      apiVersion: "2025-08-01",
    }),
  );
export type ConfigurationsListByServerInput =
  typeof ConfigurationsListByServerInput.Type;

// Output Schema
export const ConfigurationsListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ConfigurationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ConfigurationsListByServerOutput =
  typeof ConfigurationsListByServerOutput.Type;

// The operation
/**
 * Lists all configurations (also known as server parameters) of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ConfigurationsListByServer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationsListByServerInput,
    outputSchema: ConfigurationsListByServerOutput,
  }),
);
// Input Schema
export const ConfigurationsPutInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ConfigurationPropertiesSchema),
    ),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/configurations/{configurationName}",
    apiVersion: "2025-08-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type ConfigurationsPutInput = typeof ConfigurationsPutInput.Type;

// Output Schema
export const ConfigurationsPutOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ConfigurationsPutOutput = typeof ConfigurationsPutOutput.Type;

// The operation
/**
 * Updates, using Put verb, the value assigned to a specific modifiable configuration (also known as server parameter) of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param configurationName - Name of the configuration (also known as server parameter).
 */
export const ConfigurationsPut = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationsPutInput,
  outputSchema: ConfigurationsPutOutput,
}));
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/configurations/{configurationName}",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ConfigurationsUpdateInput = typeof ConfigurationsUpdateInput.Type;

// Output Schema
export const ConfigurationsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ConfigurationsUpdateOutput = typeof ConfigurationsUpdateOutput.Type;

// The operation
/**
 * Updates the value assigned to a specific modifiable configuration (also known as server parameter) of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param configurationName - Name of the configuration (also known as server parameter).
 */
export const ConfigurationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationsUpdateInput,
    outputSchema: ConfigurationsUpdateOutput,
  }),
);
// Input Schema
export const DatabasesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  databaseName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => DatabasePropertiesSchema)),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/databases/{databaseName}",
    apiVersion: "2025-08-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type DatabasesCreateInput = typeof DatabasesCreateInput.Type;

// Output Schema
export const DatabasesCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DatabasesCreateOutput = typeof DatabasesCreateOutput.Type;

// The operation
/**
 * Creates a new database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param databaseName - Name of the database (case-sensitive). Exact database names can be retrieved by getting the list of all existing databases in a server.
 */
export const DatabasesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesCreateInput,
  outputSchema: DatabasesCreateOutput,
}));
// Input Schema
export const DatabasesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  databaseName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/databases/{databaseName}",
    apiVersion: "2025-08-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type DatabasesDeleteInput = typeof DatabasesDeleteInput.Type;

// Output Schema
export const DatabasesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DatabasesDeleteOutput = typeof DatabasesDeleteOutput.Type;

// The operation
/**
 * Deletes an existing database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param databaseName - Name of the database (case-sensitive). Exact database names can be retrieved by getting the list of all existing databases in a server.
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/databases/{databaseName}",
    apiVersion: "2025-08-01",
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
 * Gets information about an existing database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param databaseName - Name of the database (case-sensitive). Exact database names can be retrieved by getting the list of all existing databases in a server.
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/databases",
      apiVersion: "2025-08-01",
    }),
  );
export type DatabasesListByServerInput = typeof DatabasesListByServerInput.Type;

// Output Schema
export const DatabasesListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => DatabaseSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type DatabasesListByServerOutput =
  typeof DatabasesListByServerOutput.Type;

// The operation
/**
 * Lists all databases in a server.
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/firewallRules/{firewallRuleName}",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type FirewallRulesCreateOrUpdateInput =
  typeof FirewallRulesCreateOrUpdateInput.Type;

// Output Schema
export const FirewallRulesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
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
 * @param firewallRuleName - Name of the firewall rule.
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/firewallRules/{firewallRuleName}",
      apiVersion: "2025-08-01",
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
 * Deletes an existing firewall rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param firewallRuleName - Name of the firewall rule.
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/firewallRules/{firewallRuleName}",
    apiVersion: "2025-08-01",
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
 * Gets information about a firewall rule in a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param firewallRuleName - Name of the firewall rule.
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/firewallRules",
      apiVersion: "2025-08-01",
    }),
  );
export type FirewallRulesListByServerInput =
  typeof FirewallRulesListByServerInput.Type;

// Output Schema
export const FirewallRulesListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => FirewallRuleSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type FirewallRulesListByServerOutput =
  typeof FirewallRulesListByServerOutput.Type;

// The operation
/**
 * Lists information about all firewall rules in a server.
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
export const MigrationsCancelInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  migrationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/migrations/{migrationName}",
    apiVersion: "2025-08-01",
  }),
);
export type MigrationsCancelInput = typeof MigrationsCancelInput.Type;

// Output Schema
export const MigrationsCancelOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => MigrationPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type MigrationsCancelOutput = typeof MigrationsCancelOutput.Type;

// The operation
/**
 * Cancels an active migration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param migrationName - Name of migration.
 */
export const MigrationsCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MigrationsCancelInput,
  outputSchema: MigrationsCancelOutput,
}));
// Input Schema
export const MigrationsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.String,
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(
      Schema.suspend(() => MigrationNameAvailabilityReasonSchema),
    ),
    message: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/checkMigrationNameAvailability",
      apiVersion: "2025-08-01",
    }),
  );
export type MigrationsCheckNameAvailabilityInput =
  typeof MigrationsCheckNameAvailabilityInput.Type;

// Output Schema
export const MigrationsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    type: Schema.String,
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(
      Schema.suspend(() => MigrationNameAvailabilityReasonSchema),
    ),
    message: Schema.optional(Schema.String),
  });
export type MigrationsCheckNameAvailabilityOutput =
  typeof MigrationsCheckNameAvailabilityOutput.Type;

// The operation
/**
 * Check the validity and availability of the given name, to assign it to a new migration.
 *
 * Checks if a proposed migration name is valid and available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const MigrationsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MigrationsCheckNameAvailabilityInput,
    outputSchema: MigrationsCheckNameAvailabilityOutput,
  }));
// Input Schema
export const MigrationsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  migrationName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => MigrationPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/migrations/{migrationName}",
    apiVersion: "2025-08-01",
  }),
);
export type MigrationsCreateInput = typeof MigrationsCreateInput.Type;

// Output Schema
export const MigrationsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => MigrationPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type MigrationsCreateOutput = typeof MigrationsCreateOutput.Type;

// The operation
/**
 * Creates a new migration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param migrationName - Name of migration.
 */
export const MigrationsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MigrationsCreateInput,
  outputSchema: MigrationsCreateOutput,
}));
// Input Schema
export const MigrationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  migrationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/migrations/{migrationName}",
    apiVersion: "2025-08-01",
  }),
);
export type MigrationsGetInput = typeof MigrationsGetInput.Type;

// Output Schema
export const MigrationsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => MigrationPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type MigrationsGetOutput = typeof MigrationsGetOutput.Type;

// The operation
/**
 * Gets information about a migration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param migrationName - Name of migration.
 */
export const MigrationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MigrationsGetInput,
  outputSchema: MigrationsGetOutput,
}));
// Input Schema
export const MigrationsListByTargetServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    migrationListFilter: Schema.optional(Schema.Literals(["Active", "All"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/migrations",
      apiVersion: "2025-08-01",
    }),
  );
export type MigrationsListByTargetServerInput =
  typeof MigrationsListByTargetServerInput.Type;

// Output Schema
export const MigrationsListByTargetServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => MigrationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type MigrationsListByTargetServerOutput =
  typeof MigrationsListByTargetServerOutput.Type;

// The operation
/**
 * Lists all migrations of a target flexible server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param migrationListFilter - Migration list filter. Indicates if the request should retrieve only active migrations or all migrations. Defaults to Active.
 */
export const MigrationsListByTargetServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MigrationsListByTargetServerInput,
    outputSchema: MigrationsListByTargetServerOutput,
  }));
// Input Schema
export const MigrationsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  migrationName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.suspend(() => MigrationPropertiesForPatchSchema),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/migrations/{migrationName}",
    apiVersion: "2025-08-01",
  }),
);
export type MigrationsUpdateInput = typeof MigrationsUpdateInput.Type;

// Output Schema
export const MigrationsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => MigrationPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type MigrationsUpdateOutput = typeof MigrationsUpdateOutput.Type;

// The operation
/**
 * Updates an existing migration. The request body can contain one to many of the mutable properties present in the migration definition. Certain property updates initiate migration state transitions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param migrationName - Name of migration.
 */
export const MigrationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MigrationsUpdateInput,
  outputSchema: MigrationsUpdateOutput,
}));
// Input Schema
export const NameAvailabilityCheckGloballyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforPostgreSQL/checkNameAvailability",
      apiVersion: "2025-08-01",
    }),
  );
export type NameAvailabilityCheckGloballyInput =
  typeof NameAvailabilityCheckGloballyInput.Type;

// Output Schema
export const NameAvailabilityCheckGloballyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  });
export type NameAvailabilityCheckGloballyOutput =
  typeof NameAvailabilityCheckGloballyOutput.Type;

// The operation
/**
 * Checks the validity and availability of the given name, to assign it to a new server or to use it as the base name of a new pair of virtual endpoints.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const NameAvailabilityCheckGlobally =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NameAvailabilityCheckGloballyInput,
    outputSchema: NameAvailabilityCheckGloballyOutput,
  }));
// Input Schema
export const NameAvailabilityCheckWithLocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforPostgreSQL/locations/{locationName}/checkNameAvailability",
      apiVersion: "2025-08-01",
    }),
  );
export type NameAvailabilityCheckWithLocationInput =
  typeof NameAvailabilityCheckWithLocationInput.Type;

// Output Schema
export const NameAvailabilityCheckWithLocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  });
export type NameAvailabilityCheckWithLocationOutput =
  typeof NameAvailabilityCheckWithLocationOutput.Type;

// The operation
/**
 * Check the availability of name for resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationName - The name of the location.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const NameAvailabilityCheckWithLocation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NameAvailabilityCheckWithLocationInput,
    outputSchema: NameAvailabilityCheckWithLocationOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DBforPostgreSQL/operations",
    apiVersion: "2025-08-01",
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
 * Lists all available REST API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const PrivateDnsZoneSuffixGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.DBforPostgreSQL/getPrivateDnsZoneSuffix",
      apiVersion: "2025-08-01",
    }),
  );
export type PrivateDnsZoneSuffixGetInput =
  typeof PrivateDnsZoneSuffixGetInput.Type;

// Output Schema
export const PrivateDnsZoneSuffixGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type PrivateDnsZoneSuffixGetOutput =
  typeof PrivateDnsZoneSuffixGetOutput.Type;

// The operation
/**
 * Gets the private DNS zone suffix.
 *
 * @param api-version - The API version to use for this operation.
 */
export const PrivateDnsZoneSuffixGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateDnsZoneSuffixGetInput,
    outputSchema: PrivateDnsZoneSuffixGetOutput,
  }),
);
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-08-01",
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
 * Deletes a private endpoint connection.
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-08-01",
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/privateEndpointConnections",
      apiVersion: "2025-08-01",
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
 * Lists all private endpoint connections on a server.
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
export const PrivateEndpointConnectionsUpdateInput =
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type PrivateEndpointConnectionsUpdateInput =
  typeof PrivateEndpointConnectionsUpdateInput.Type;

// Output Schema
export const PrivateEndpointConnectionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrivateEndpointConnectionsUpdateOutput =
  typeof PrivateEndpointConnectionsUpdateOutput.Type;

// The operation
/**
 * Approves or rejects a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 * @param properties - Resource properties.
 */
export const PrivateEndpointConnectionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsUpdateInput,
    outputSchema: PrivateEndpointConnectionsUpdateOutput,
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/privateLinkResources/{groupName}",
      apiVersion: "2025-08-01",
    }),
  );
export type PrivateLinkResourcesGetInput =
  typeof PrivateLinkResourcesGetInput.Type;

// Output Schema
export const PrivateLinkResourcesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        groupId: Schema.optional(Schema.String),
        requiredMembers: Schema.optional(Schema.Array(Schema.String)),
        requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
      }),
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
 * Gets a private link resource for PostgreSQL server.
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/privateLinkResources",
      apiVersion: "2025-08-01",
    }),
  );
export type PrivateLinkResourcesListByServerInput =
  typeof PrivateLinkResourcesListByServerInput.Type;

// Output Schema
export const PrivateLinkResourcesListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PrivateLinkResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateLinkResourcesListByServerOutput =
  typeof PrivateLinkResourcesListByServerOutput.Type;

// The operation
/**
 * Gets the private link resources for PostgreSQL server.
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
export const QuotaUsagesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  locationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforPostgreSQL/locations/{locationName}/resourceType/flexibleServers/usages",
    apiVersion: "2025-08-01",
  }),
);
export type QuotaUsagesListInput = typeof QuotaUsagesListInput.Type;

// Output Schema
export const QuotaUsagesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => QuotaUsageSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type QuotaUsagesListOutput = typeof QuotaUsagesListOutput.Type;

// The operation
/**
 * Get quota usages at specified location in a given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationName - The name of the location.
 */
export const QuotaUsagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QuotaUsagesListInput,
  outputSchema: QuotaUsagesListOutput,
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/replicas",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicasListByServerInput = typeof ReplicasListByServerInput.Type;

// Output Schema
export const ReplicasListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ServerSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ReplicasListByServerOutput = typeof ReplicasListByServerOutput.Type;

// The operation
/**
 * Lists all read replicas of a server.
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
export const ServersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => ServerPropertiesSchema)),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    identity: Schema.optional(Schema.suspend(() => UserAssignedIdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ServersCreateOrUpdateInput = typeof ServersCreateOrUpdateInput.Type;

// Output Schema
export const ServersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServersCreateOrUpdateOutput =
  typeof ServersCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates a new server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServersCreateOrUpdateInput,
    outputSchema: ServersCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ServersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}",
    apiVersion: "2025-08-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ServersDeleteInput = typeof ServersDeleteInput.Type;

// Output Schema
export const ServersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServersDeleteOutput = typeof ServersDeleteOutput.Type;

// The operation
/**
 * Deletes or drops an existing server.
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
export const ServersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}",
    apiVersion: "2025-08-01",
  }),
);
export type ServersGetInput = typeof ServersGetInput.Type;

// Output Schema
export const ServersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ServerPropertiesSchema)),
  sku: Schema.optional(Schema.suspend(() => SkuSchema)),
  identity: Schema.optional(Schema.suspend(() => UserAssignedIdentitySchema)),
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
 * Gets information about an existing server.
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
export const ServersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers",
      apiVersion: "2025-08-01",
    }),
  );
export type ServersListByResourceGroupInput =
  typeof ServersListByResourceGroupInput.Type;

// Output Schema
export const ServersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ServerSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ServersListByResourceGroupOutput =
  typeof ServersListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all servers in a resource group.
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
export const ServersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforPostgreSQL/flexibleServers",
      apiVersion: "2025-08-01",
    }),
  );
export type ServersListBySubscriptionInput =
  typeof ServersListBySubscriptionInput.Type;

// Output Schema
export const ServersListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ServerSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ServersListBySubscriptionOutput =
  typeof ServersListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all servers in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ServersListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServersListBySubscriptionInput,
    outputSchema: ServersListBySubscriptionOutput,
  }),
);
// Input Schema
export const ServersRestartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  restartWithFailover: Schema.optional(Schema.Boolean),
  failoverMode: Schema.optional(Schema.suspend(() => FailoverModeSchema)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/restart",
    apiVersion: "2025-08-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ServersRestartInput = typeof ServersRestartInput.Type;

// Output Schema
export const ServersRestartOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServersRestartOutput = typeof ServersRestartOutput.Type;

// The operation
/**
 * Restarts PostgreSQL database engine in a server.
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/start",
    apiVersion: "2025-08-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ServersStartInput = typeof ServersStartInput.Type;

// Output Schema
export const ServersStartOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServersStartOutput = typeof ServersStartOutput.Type;

// The operation
/**
 * Starts a stopped server.
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/stop",
    apiVersion: "2025-08-01",
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
  sku: Schema.optional(Schema.suspend(() => SkuForPatchSchema)),
  identity: Schema.optional(Schema.suspend(() => UserAssignedIdentitySchema)),
  properties: Schema.optional(
    Schema.suspend(() => ServerPropertiesForPatchSchema),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}",
    apiVersion: "2025-08-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type ServersUpdateInput = typeof ServersUpdateInput.Type;

// Output Schema
export const ServersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServersUpdateOutput = typeof ServersUpdateOutput.Type;

// The operation
/**
 * Updates an existing server. The request body can contain one or multiple of the properties present in the normal server definition.
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
export const ServerThreatProtectionSettingsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    threatProtectionName: Schema.Literals(["Default"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AdvancedThreatProtectionSettingsPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/advancedThreatProtectionSettings/{threatProtectionName}",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ServerThreatProtectionSettingsCreateOrUpdateInput =
  typeof ServerThreatProtectionSettingsCreateOrUpdateInput.Type;

// Output Schema
export const ServerThreatProtectionSettingsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServerThreatProtectionSettingsCreateOrUpdateOutput =
  typeof ServerThreatProtectionSettingsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a server's Advanced Threat Protection settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param threatProtectionName - Name of the advanced threat protection settings.
 */
export const ServerThreatProtectionSettingsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerThreatProtectionSettingsCreateOrUpdateInput,
    outputSchema: ServerThreatProtectionSettingsCreateOrUpdateOutput,
  }));
// Input Schema
export const TuningOptionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  tuningOption: Schema.Literals(["index", "table"]).pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/tuningOptions/{tuningOption}",
    apiVersion: "2025-08-01",
  }),
);
export type TuningOptionsGetInput = typeof TuningOptionsGetInput.Type;

// Output Schema
export const TuningOptionsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => TuningOptionsPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type TuningOptionsGetOutput = typeof TuningOptionsGetOutput.Type;

// The operation
/**
 * Gets the tuning options of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param tuningOption - The name of the tuning option.
 */
export const TuningOptionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TuningOptionsGetInput,
  outputSchema: TuningOptionsGetOutput,
}));
// Input Schema
export const TuningOptionsListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/tuningOptions",
      apiVersion: "2025-08-01",
    }),
  );
export type TuningOptionsListByServerInput =
  typeof TuningOptionsListByServerInput.Type;

// Output Schema
export const TuningOptionsListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => TuningOptionsSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type TuningOptionsListByServerOutput =
  typeof TuningOptionsListByServerOutput.Type;

// The operation
/**
 * Lists the tuning options of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const TuningOptionsListByServer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TuningOptionsListByServerInput,
    outputSchema: TuningOptionsListByServerOutput,
  }),
);
// Input Schema
export const TuningOptionsListRecommendationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    tuningOption: Schema.Literals(["index", "table"]).pipe(T.PathParam()),
    recommendationType: Schema.optional(
      Schema.Literals(["CreateIndex", "DropIndex", "ReIndex", "AnalyzeTable"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/tuningOptions/{tuningOption}/recommendations",
      apiVersion: "2025-08-01",
    }),
  );
export type TuningOptionsListRecommendationsInput =
  typeof TuningOptionsListRecommendationsInput.Type;

// Output Schema
export const TuningOptionsListRecommendationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ObjectRecommendationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type TuningOptionsListRecommendationsOutput =
  typeof TuningOptionsListRecommendationsOutput.Type;

// The operation
/**
 * Lists available object recommendations.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param tuningOption - The name of the tuning option.
 * @param recommendationType - Recommendations list filter. Retrieves recommendations based on type.
 */
export const TuningOptionsListRecommendations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TuningOptionsListRecommendationsInput,
    outputSchema: TuningOptionsListRecommendationsOutput,
  }));
// Input Schema
export const VirtualEndpointsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    virtualEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => VirtualEndpointResourcePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/virtualendpoints/{virtualEndpointName}",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type VirtualEndpointsCreateInput =
  typeof VirtualEndpointsCreateInput.Type;

// Output Schema
export const VirtualEndpointsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualEndpointsCreateOutput =
  typeof VirtualEndpointsCreateOutput.Type;

// The operation
/**
 * Creates a pair of virtual endpoints for a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param virtualEndpointName - Base name of the virtual endpoints.
 */
export const VirtualEndpointsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualEndpointsCreateInput,
    outputSchema: VirtualEndpointsCreateOutput,
  }),
);
// Input Schema
export const VirtualEndpointsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    virtualEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/virtualendpoints/{virtualEndpointName}",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VirtualEndpointsDeleteInput =
  typeof VirtualEndpointsDeleteInput.Type;

// Output Schema
export const VirtualEndpointsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualEndpointsDeleteOutput =
  typeof VirtualEndpointsDeleteOutput.Type;

// The operation
/**
 * Deletes a pair of virtual endpoints.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param virtualEndpointName - Base name of the virtual endpoints.
 */
export const VirtualEndpointsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualEndpointsDeleteInput,
    outputSchema: VirtualEndpointsDeleteOutput,
  }),
);
// Input Schema
export const VirtualEndpointsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    virtualEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/virtualendpoints/{virtualEndpointName}",
      apiVersion: "2025-08-01",
    }),
  );
export type VirtualEndpointsGetInput = typeof VirtualEndpointsGetInput.Type;

// Output Schema
export const VirtualEndpointsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VirtualEndpointResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VirtualEndpointsGetOutput = typeof VirtualEndpointsGetOutput.Type;

// The operation
/**
 * Gets information about a pair of virtual endpoints.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param virtualEndpointName - Base name of the virtual endpoints.
 */
export const VirtualEndpointsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualEndpointsGetInput,
  outputSchema: VirtualEndpointsGetOutput,
}));
// Input Schema
export const VirtualEndpointsListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/virtualendpoints",
      apiVersion: "2025-08-01",
    }),
  );
export type VirtualEndpointsListByServerInput =
  typeof VirtualEndpointsListByServerInput.Type;

// Output Schema
export const VirtualEndpointsListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VirtualEndpointSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualEndpointsListByServerOutput =
  typeof VirtualEndpointsListByServerOutput.Type;

// The operation
/**
 * Lists pair of virtual endpoints associated to a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const VirtualEndpointsListByServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualEndpointsListByServerInput,
    outputSchema: VirtualEndpointsListByServerOutput,
  }));
// Input Schema
export const VirtualEndpointsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    virtualEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => VirtualEndpointResourcePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/virtualendpoints/{virtualEndpointName}",
      apiVersion: "2025-08-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type VirtualEndpointsUpdateInput =
  typeof VirtualEndpointsUpdateInput.Type;

// Output Schema
export const VirtualEndpointsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualEndpointsUpdateOutput =
  typeof VirtualEndpointsUpdateOutput.Type;

// The operation
/**
 * Updates a pair of virtual endpoints for a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param virtualEndpointName - Base name of the virtual endpoints.
 */
export const VirtualEndpointsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualEndpointsUpdateInput,
    outputSchema: VirtualEndpointsUpdateOutput,
  }),
);
// Input Schema
export const VirtualNetworkSubnetUsageListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationName: Schema.String.pipe(T.PathParam()),
    virtualNetworkArmResourceId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforPostgreSQL/locations/{locationName}/checkVirtualNetworkSubnetUsage",
      apiVersion: "2025-08-01",
    }),
  );
export type VirtualNetworkSubnetUsageListInput =
  typeof VirtualNetworkSubnetUsageListInput.Type;

// Output Schema
export const VirtualNetworkSubnetUsageListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    delegatedSubnetsUsage: Schema.optional(
      Schema.Array(Schema.suspend(() => DelegatedSubnetUsageSchema)),
    ),
    location: Schema.optional(Schema.String),
    subscriptionId: Schema.optional(Schema.String),
  });
export type VirtualNetworkSubnetUsageListOutput =
  typeof VirtualNetworkSubnetUsageListOutput.Type;

// The operation
/**
 * Lists the virtual network subnet usage for a given virtual network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationName - The name of the location.
 */
export const VirtualNetworkSubnetUsageList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworkSubnetUsageListInput,
    outputSchema: VirtualNetworkSubnetUsageListOutput,
  }));
