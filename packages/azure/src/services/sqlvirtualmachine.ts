/**
 * Azure Sqlvirtualmachine API
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
  origin: Schema.optional(Schema.suspend(() => OperationOriginSchema)),
  properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
});
const OperationDisplaySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provider: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
  operation: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const OperationOriginSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "user",
  "system",
]);
const SqlVirtualMachineGroupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const SqlVirtualMachineSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SqlVirtualMachineGroupPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(Schema.String),
    sqlImageOffer: Schema.optional(Schema.String),
    sqlImageSku: Schema.optional(
      Schema.suspend(() => SqlVmGroupImageSkuSchema),
    ),
    scaleType: Schema.optional(Schema.suspend(() => ScaleTypeSchema)),
    clusterManagerType: Schema.optional(
      Schema.suspend(() => ClusterManagerTypeSchema),
    ),
    clusterConfiguration: Schema.optional(
      Schema.suspend(() => ClusterConfigurationSchema),
    ),
    wsfcDomainProfile: Schema.optional(
      Schema.suspend(() => WsfcDomainProfileSchema),
    ),
  });
const SqlVmGroupImageSkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Developer",
  "Enterprise",
]);
const ScaleTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["HA"]);
const ClusterManagerTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "WSFC",
]);
const ClusterConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Domainful",
]);
const WsfcDomainProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domainFqdn: Schema.optional(Schema.String),
  ouPath: Schema.optional(Schema.String),
  clusterBootstrapAccount: Schema.optional(Schema.String),
  clusterOperatorAccount: Schema.optional(Schema.String),
  sqlServiceAccount: Schema.optional(Schema.String),
  isSqlServiceAccountGmsa: Schema.optional(Schema.Boolean),
  fileShareWitnessPath: Schema.optional(Schema.String),
  storageAccountUrl: Schema.optional(Schema.String),
  storageAccountPrimaryKey: Schema.optional(Schema.String),
  clusterSubnetType: Schema.optional(
    Schema.suspend(() => ClusterSubnetTypeSchema),
  ),
});
const ClusterSubnetTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SingleSubnet",
  "MultiSubnet",
]);
const AvailabilityGroupListenerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const AvailabilityGroupListenerPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(Schema.String),
    availabilityGroupName: Schema.optional(Schema.String),
    loadBalancerConfigurations: Schema.optional(
      Schema.Array(Schema.suspend(() => LoadBalancerConfigurationSchema)),
    ),
    multiSubnetIpConfigurations: Schema.optional(
      Schema.Array(Schema.suspend(() => MultiSubnetIpConfigurationSchema)),
    ),
    createDefaultAvailabilityGroupIfNotExist: Schema.optional(Schema.Boolean),
    port: Schema.optional(Schema.Number),
    availabilityGroupConfiguration: Schema.optional(
      Schema.suspend(() => AgConfigurationSchema),
    ),
  });
const LoadBalancerConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateIpAddress: Schema.optional(
      Schema.suspend(() => PrivateIPAddressSchema),
    ),
    publicIpAddressResourceId: Schema.optional(Schema.String),
    loadBalancerResourceId: Schema.optional(Schema.String),
    probePort: Schema.optional(Schema.Number),
    sqlVirtualMachineInstances: Schema.optional(Schema.Array(Schema.String)),
  });
const PrivateIPAddressSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ipAddress: Schema.optional(Schema.String),
  subnetResourceId: Schema.optional(Schema.String),
});
const MultiSubnetIpConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateIpAddress: Schema.suspend(() => PrivateIPAddressSchema),
    sqlVirtualMachineInstance: Schema.String,
  });
const AgConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  replicas: Schema.optional(
    Schema.Array(Schema.suspend(() => AgReplicaSchema)),
  ),
});
const AgReplicaSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sqlVirtualMachineInstanceId: Schema.optional(Schema.String),
  role: Schema.optional(Schema.suspend(() => RoleSchema)),
  commit: Schema.optional(Schema.suspend(() => CommitSchema)),
  failover: Schema.optional(Schema.suspend(() => FailoverSchema)),
  readableSecondary: Schema.optional(
    Schema.suspend(() => ReadableSecondarySchema),
  ),
});
const RoleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Primary",
  "Secondary",
]);
const CommitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Synchronous_Commit",
  "Asynchronous_Commit",
]);
const FailoverSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Automatic",
  "Manual",
]);
const ReadableSecondarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "No",
  "All",
  "Read_Only",
]);
const SqlVirtualMachinePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineResourceId: Schema.optional(Schema.String),
    provisioningState: Schema.optional(Schema.String),
    sqlImageOffer: Schema.optional(Schema.String),
    sqlServerLicenseType: Schema.optional(
      Schema.suspend(() => SqlServerLicenseTypeSchema),
    ),
    sqlManagement: Schema.optional(
      Schema.suspend(() => SqlManagementModeSchema),
    ),
    leastPrivilegeMode: Schema.optional(Schema.Literals(["Enabled", "NotSet"])),
    sqlImageSku: Schema.optional(Schema.suspend(() => SqlImageSkuSchema)),
    sqlVirtualMachineGroupResourceId: Schema.optional(Schema.String),
    wsfcDomainCredentials: Schema.optional(
      Schema.suspend(() => WsfcDomainCredentialsSchema),
    ),
    wsfcStaticIp: Schema.optional(Schema.String),
    autoPatchingSettings: Schema.optional(
      Schema.suspend(() => AutoPatchingSettingsSchema),
    ),
    autoBackupSettings: Schema.optional(
      Schema.suspend(() => AutoBackupSettingsSchema),
    ),
    keyVaultCredentialSettings: Schema.optional(
      Schema.suspend(() => KeyVaultCredentialSettingsSchema),
    ),
    serverConfigurationsManagementSettings: Schema.optional(
      Schema.suspend(() => ServerConfigurationsManagementSettingsSchema),
    ),
    storageConfigurationSettings: Schema.optional(
      Schema.suspend(() => StorageConfigurationSettingsSchema),
    ),
    troubleshootingStatus: Schema.optional(
      Schema.suspend(() => TroubleshootingStatusSchema),
    ),
    assessmentSettings: Schema.optional(
      Schema.suspend(() => AssessmentSettingsSchema),
    ),
    enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
    additionalVmPatch: Schema.optional(
      Schema.suspend(() => AdditionalOsPatchSchema),
    ),
    virtualMachineIdentitySettings: Schema.optional(
      Schema.suspend(() => VirtualMachineIdentitySchema),
    ),
    osType: Schema.optional(Schema.suspend(() => OsTypeSchema)),
  });
const SqlServerLicenseTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "PAYG",
  "AHUB",
  "DR",
]);
const SqlManagementModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Full",
  "LightWeight",
  "NoAgent",
]);
const SqlImageSkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Developer",
  "Express",
  "Standard",
  "Enterprise",
  "Web",
]);
const WsfcDomainCredentialsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusterBootstrapAccountPassword: Schema.optional(SensitiveOutputString),
  clusterOperatorAccountPassword: Schema.optional(SensitiveOutputString),
  sqlServiceAccountPassword: Schema.optional(SensitiveOutputString),
});
const AutoPatchingSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enable: Schema.optional(Schema.Boolean),
  dayOfWeek: Schema.optional(Schema.suspend(() => DayOfWeekSchema)),
  maintenanceWindowStartingHour: Schema.optional(Schema.Number),
  maintenanceWindowDuration: Schema.optional(Schema.Number),
  additionalVmPatch: Schema.optional(
    Schema.Literals(["NotSet", "MicrosoftUpdate"]),
  ),
});
const DayOfWeekSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Everyday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]);
const AutoBackupSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enable: Schema.optional(Schema.Boolean),
  enableEncryption: Schema.optional(Schema.Boolean),
  retentionPeriod: Schema.optional(Schema.Number),
  storageAccountUrl: Schema.optional(Schema.String),
  storageContainerName: Schema.optional(Schema.String),
  storageAccessKey: Schema.optional(Schema.String),
  password: Schema.optional(SensitiveOutputString),
  backupSystemDbs: Schema.optional(Schema.Boolean),
  backupScheduleType: Schema.optional(
    Schema.suspend(() => BackupScheduleTypeSchema),
  ),
  fullBackupFrequency: Schema.optional(
    Schema.suspend(() => FullBackupFrequencyTypeSchema),
  ),
  daysOfWeek: Schema.optional(
    Schema.Array(Schema.suspend(() => AutoBackupDaysOfWeekSchema)),
  ),
  fullBackupStartTime: Schema.optional(Schema.Number),
  fullBackupWindowHours: Schema.optional(Schema.Number),
  logBackupFrequency: Schema.optional(Schema.Number),
});
const BackupScheduleTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Manual",
  "Automated",
]);
const FullBackupFrequencyTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Daily", "Weekly"]);
const AutoBackupDaysOfWeekSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]);
const KeyVaultCredentialSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enable: Schema.optional(Schema.Boolean),
    credentialName: Schema.optional(Schema.String),
    azureKeyVaultUrl: Schema.optional(Schema.String),
    servicePrincipalName: Schema.optional(Schema.String),
    servicePrincipalSecret: Schema.optional(Schema.String),
  });
const ServerConfigurationsManagementSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sqlConnectivityUpdateSettings: Schema.optional(
      Schema.suspend(() => SqlConnectivityUpdateSettingsSchema),
    ),
    sqlWorkloadTypeUpdateSettings: Schema.optional(
      Schema.suspend(() => SqlWorkloadTypeUpdateSettingsSchema),
    ),
    sqlStorageUpdateSettings: Schema.optional(
      Schema.suspend(() => SqlStorageUpdateSettingsSchema),
    ),
    additionalFeaturesServerConfigurations: Schema.optional(
      Schema.suspend(() => AdditionalFeaturesServerConfigurationsSchema),
    ),
    sqlInstanceSettings: Schema.optional(
      Schema.suspend(() => SQLInstanceSettingsSchema),
    ),
    azureAdAuthenticationSettings: Schema.optional(
      Schema.suspend(() => AADAuthenticationSettingsSchema),
    ),
  });
const SqlConnectivityUpdateSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectivityType: Schema.optional(
      Schema.suspend(() => ConnectivityTypeSchema),
    ),
    port: Schema.optional(Schema.Number),
    sqlAuthUpdateUserName: Schema.optional(Schema.String),
    sqlAuthUpdatePassword: Schema.optional(SensitiveOutputString),
  });
const ConnectivityTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "LOCAL",
  "PRIVATE",
  "PUBLIC",
]);
const SqlWorkloadTypeUpdateSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sqlWorkloadType: Schema.optional(
      Schema.suspend(() => SqlWorkloadTypeSchema),
    ),
  });
const SqlWorkloadTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "GENERAL",
  "OLTP",
  "DW",
]);
const SqlStorageUpdateSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskCount: Schema.optional(Schema.Number),
    startingDeviceId: Schema.optional(Schema.Number),
    diskConfigurationType: Schema.optional(
      Schema.suspend(() => DiskConfigurationTypeSchema),
    ),
  });
const DiskConfigurationTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["NEW", "EXTEND", "ADD"],
);
const AdditionalFeaturesServerConfigurationsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isRServicesEnabled: Schema.optional(Schema.Boolean),
  });
const SQLInstanceSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collation: Schema.optional(Schema.String),
  maxDop: Schema.optional(Schema.Number),
  isOptimizeForAdHocWorkloadsEnabled: Schema.optional(Schema.Boolean),
  minServerMemoryMB: Schema.optional(Schema.Number),
  maxServerMemoryMB: Schema.optional(Schema.Number),
  isLpimEnabled: Schema.optional(Schema.Boolean),
  isIfiEnabled: Schema.optional(Schema.Boolean),
});
const AADAuthenticationSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
  });
const StorageConfigurationSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sqlDataSettings: Schema.optional(
      Schema.suspend(() => SQLStorageSettingsSchema),
    ),
    sqlLogSettings: Schema.optional(
      Schema.suspend(() => SQLStorageSettingsSchema),
    ),
    sqlTempDbSettings: Schema.optional(
      Schema.suspend(() => SQLTempDbSettingsSchema),
    ),
    sqlSystemDbOnDataDisk: Schema.optional(Schema.Boolean),
    diskConfigurationType: Schema.optional(
      Schema.suspend(() => DiskConfigurationTypeSchema),
    ),
    storageWorkloadType: Schema.optional(
      Schema.suspend(() => StorageWorkloadTypeSchema),
    ),
    enableStorageConfigBlade: Schema.optional(Schema.Boolean),
  });
const SQLStorageSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  luns: Schema.optional(Schema.Array(Schema.Number)),
  defaultFilePath: Schema.optional(Schema.String),
  useStoragePool: Schema.optional(Schema.Boolean),
});
const SQLTempDbSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataFileSize: Schema.optional(Schema.Number),
  dataGrowth: Schema.optional(Schema.Number),
  logFileSize: Schema.optional(Schema.Number),
  logGrowth: Schema.optional(Schema.Number),
  dataFileCount: Schema.optional(Schema.Number),
  persistFolder: Schema.optional(Schema.Boolean),
  persistFolderPath: Schema.optional(Schema.String),
  luns: Schema.optional(Schema.Array(Schema.Number)),
  defaultFilePath: Schema.optional(Schema.String),
  useStoragePool: Schema.optional(Schema.Boolean),
});
const StorageWorkloadTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "GENERAL",
  "OLTP",
  "DW",
]);
const TroubleshootingStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rootCause: Schema.optional(Schema.String),
  lastTriggerTimeUtc: Schema.optional(Schema.String),
  startTimeUtc: Schema.optional(Schema.String),
  endTimeUtc: Schema.optional(Schema.String),
  troubleshootingScenario: Schema.optional(
    Schema.Literals(["UnhealthyReplica"]),
  ),
  properties: Schema.optional(
    Schema.suspend(() => TroubleshootingAdditionalPropertiesSchema),
  ),
});
const TroubleshootingAdditionalPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unhealthyReplicaInfo: Schema.optional(
      Schema.suspend(() => UnhealthyReplicaInfoSchema),
    ),
  });
const UnhealthyReplicaInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  availabilityGroupName: Schema.optional(Schema.String),
});
const AssessmentSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enable: Schema.optional(Schema.Boolean),
  runImmediately: Schema.optional(Schema.Boolean),
  schedule: Schema.optional(Schema.suspend(() => ScheduleSchema)),
});
const ScheduleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enable: Schema.optional(Schema.Boolean),
  weeklyInterval: Schema.optional(Schema.Number),
  monthlyOccurrence: Schema.optional(Schema.Number),
  dayOfWeek: Schema.optional(Schema.suspend(() => AssessmentDayOfWeekSchema)),
  startTime: Schema.optional(Schema.String),
});
const AssessmentDayOfWeekSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]);
const AdditionalOsPatchSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "WU",
  "WUMU",
  "WSUS",
]);
const VirtualMachineIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.suspend(() => VmIdentityTypeSchema)),
  resourceId: Schema.optional(Schema.String),
});
const VmIdentityTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "SystemAssigned",
  "UserAssigned",
]);
const OsTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Windows",
  "Linux",
]);
const ResourceIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.suspend(() => IdentityTypeSchema)),
  tenantId: Schema.optional(Schema.String),
});
const IdentityTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "SystemAssigned",
  "UserAssigned",
  "SystemAssigned,UserAssigned",
]);

// Input Schema
export const AvailabilityGroupListenersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
    availabilityGroupListenerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AvailabilityGroupListenerPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/availabilityGroupListeners/{availabilityGroupListenerName}",
      apiVersion: "2023-10-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type AvailabilityGroupListenersCreateOrUpdateInput =
  typeof AvailabilityGroupListenersCreateOrUpdateInput.Type;

// Output Schema
export const AvailabilityGroupListenersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AvailabilityGroupListenerPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AvailabilityGroupListenersCreateOrUpdateOutput =
  typeof AvailabilityGroupListenersCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates an availability group listener.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 * @param availabilityGroupListenerName - Name of the availability group listener.
 */
export const AvailabilityGroupListenersCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailabilityGroupListenersCreateOrUpdateInput,
    outputSchema: AvailabilityGroupListenersCreateOrUpdateOutput,
  }));
// Input Schema
export const AvailabilityGroupListenersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
    availabilityGroupListenerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/availabilityGroupListeners/{availabilityGroupListenerName}",
      apiVersion: "2023-10-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AvailabilityGroupListenersDeleteInput =
  typeof AvailabilityGroupListenersDeleteInput.Type;

// Output Schema
export const AvailabilityGroupListenersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AvailabilityGroupListenersDeleteOutput =
  typeof AvailabilityGroupListenersDeleteOutput.Type;

// The operation
/**
 * Deletes an availability group listener.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 * @param availabilityGroupListenerName - Name of the availability group listener.
 */
export const AvailabilityGroupListenersDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailabilityGroupListenersDeleteInput,
    outputSchema: AvailabilityGroupListenersDeleteOutput,
  }));
// Input Schema
export const AvailabilityGroupListenersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
    availabilityGroupListenerName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/availabilityGroupListeners/{availabilityGroupListenerName}",
      apiVersion: "2023-10-01",
    }),
  );
export type AvailabilityGroupListenersGetInput =
  typeof AvailabilityGroupListenersGetInput.Type;

// Output Schema
export const AvailabilityGroupListenersGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AvailabilityGroupListenerPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AvailabilityGroupListenersGetOutput =
  typeof AvailabilityGroupListenersGetOutput.Type;

// The operation
/**
 * Gets an availability group listener.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 * @param availabilityGroupListenerName - Name of the availability group listener.
 * @param $expand - The child resources to include in the response.
 */
export const AvailabilityGroupListenersGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailabilityGroupListenersGetInput,
    outputSchema: AvailabilityGroupListenersGetOutput,
  }));
// Input Schema
export const AvailabilityGroupListenersListByGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/availabilityGroupListeners",
      apiVersion: "2023-10-01",
    }),
  );
export type AvailabilityGroupListenersListByGroupInput =
  typeof AvailabilityGroupListenersListByGroupInput.Type;

// Output Schema
export const AvailabilityGroupListenersListByGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AvailabilityGroupListenerSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AvailabilityGroupListenersListByGroupOutput =
  typeof AvailabilityGroupListenersListByGroupOutput.Type;

// The operation
/**
 * Lists all availability group listeners in a SQL virtual machine group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 */
export const AvailabilityGroupListenersListByGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailabilityGroupListenersListByGroupInput,
    outputSchema: AvailabilityGroupListenersListByGroupOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.SqlVirtualMachine/operations",
    apiVersion: "2023-10-01",
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
 * Lists all of the available SQL Virtual Machine Rest API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const SqlVirtualMachineGroupsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => SqlVirtualMachineGroupPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}",
      apiVersion: "2023-10-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type SqlVirtualMachineGroupsCreateOrUpdateInput =
  typeof SqlVirtualMachineGroupsCreateOrUpdateInput.Type;

// Output Schema
export const SqlVirtualMachineGroupsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SqlVirtualMachineGroupPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlVirtualMachineGroupsCreateOrUpdateOutput =
  typeof SqlVirtualMachineGroupsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a SQL virtual machine group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 */
export const SqlVirtualMachineGroupsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachineGroupsCreateOrUpdateInput,
    outputSchema: SqlVirtualMachineGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export const SqlVirtualMachineGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}",
      apiVersion: "2023-10-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SqlVirtualMachineGroupsDeleteInput =
  typeof SqlVirtualMachineGroupsDeleteInput.Type;

// Output Schema
export const SqlVirtualMachineGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SqlVirtualMachineGroupsDeleteOutput =
  typeof SqlVirtualMachineGroupsDeleteOutput.Type;

// The operation
/**
 * Deletes a SQL virtual machine group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 */
export const SqlVirtualMachineGroupsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachineGroupsDeleteInput,
    outputSchema: SqlVirtualMachineGroupsDeleteOutput,
  }));
// Input Schema
export const SqlVirtualMachineGroupsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}",
      apiVersion: "2023-10-01",
    }),
  );
export type SqlVirtualMachineGroupsGetInput =
  typeof SqlVirtualMachineGroupsGetInput.Type;

// Output Schema
export const SqlVirtualMachineGroupsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SqlVirtualMachineGroupPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlVirtualMachineGroupsGetOutput =
  typeof SqlVirtualMachineGroupsGetOutput.Type;

// The operation
/**
 * Gets a SQL virtual machine group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 */
export const SqlVirtualMachineGroupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlVirtualMachineGroupsGetInput,
    outputSchema: SqlVirtualMachineGroupsGetOutput,
  }),
);
// Input Schema
export const SqlVirtualMachineGroupsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups",
      apiVersion: "2023-10-01",
    }),
  );
export type SqlVirtualMachineGroupsListInput =
  typeof SqlVirtualMachineGroupsListInput.Type;

// Output Schema
export const SqlVirtualMachineGroupsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SqlVirtualMachineGroupSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlVirtualMachineGroupsListOutput =
  typeof SqlVirtualMachineGroupsListOutput.Type;

// The operation
/**
 * Gets all SQL virtual machine groups in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const SqlVirtualMachineGroupsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlVirtualMachineGroupsListInput,
    outputSchema: SqlVirtualMachineGroupsListOutput,
  }),
);
// Input Schema
export const SqlVirtualMachineGroupsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups",
      apiVersion: "2023-10-01",
    }),
  );
export type SqlVirtualMachineGroupsListByResourceGroupInput =
  typeof SqlVirtualMachineGroupsListByResourceGroupInput.Type;

// Output Schema
export const SqlVirtualMachineGroupsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SqlVirtualMachineGroupSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlVirtualMachineGroupsListByResourceGroupOutput =
  typeof SqlVirtualMachineGroupsListByResourceGroupOutput.Type;

// The operation
/**
 * Gets all SQL virtual machine groups in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SqlVirtualMachineGroupsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachineGroupsListByResourceGroupInput,
    outputSchema: SqlVirtualMachineGroupsListByResourceGroupOutput,
  }));
// Input Schema
export const SqlVirtualMachineGroupsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}",
      apiVersion: "2023-10-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type SqlVirtualMachineGroupsUpdateInput =
  typeof SqlVirtualMachineGroupsUpdateInput.Type;

// Output Schema
export const SqlVirtualMachineGroupsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SqlVirtualMachineGroupPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlVirtualMachineGroupsUpdateOutput =
  typeof SqlVirtualMachineGroupsUpdateOutput.Type;

// The operation
/**
 * Updates SQL virtual machine group tags.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 */
export const SqlVirtualMachineGroupsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachineGroupsUpdateInput,
    outputSchema: SqlVirtualMachineGroupsUpdateOutput,
  }));
// Input Schema
export const SqlVirtualMachinesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => SqlVirtualMachinePropertiesSchema),
    ),
    identity: Schema.optional(Schema.suspend(() => ResourceIdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}",
      apiVersion: "2023-10-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type SqlVirtualMachinesCreateOrUpdateInput =
  typeof SqlVirtualMachinesCreateOrUpdateInput.Type;

// Output Schema
export const SqlVirtualMachinesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SqlVirtualMachinePropertiesSchema),
    ),
    identity: Schema.optional(Schema.suspend(() => ResourceIdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlVirtualMachinesCreateOrUpdateOutput =
  typeof SqlVirtualMachinesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a SQL virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineName - Name of the SQL virtual machine.
 */
export const SqlVirtualMachinesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachinesCreateOrUpdateInput,
    outputSchema: SqlVirtualMachinesCreateOrUpdateOutput,
  }));
// Input Schema
export const SqlVirtualMachinesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}",
      apiVersion: "2023-10-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SqlVirtualMachinesDeleteInput =
  typeof SqlVirtualMachinesDeleteInput.Type;

// Output Schema
export const SqlVirtualMachinesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SqlVirtualMachinesDeleteOutput =
  typeof SqlVirtualMachinesDeleteOutput.Type;

// The operation
/**
 * Deletes a SQL virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineName - Name of the SQL virtual machine.
 */
export const SqlVirtualMachinesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlVirtualMachinesDeleteInput,
    outputSchema: SqlVirtualMachinesDeleteOutput,
  }),
);
// Input Schema
export const SqlVirtualMachinesFetchDCAssessmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
    runDiskConfigRules: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/fetchDCAssessment",
      apiVersion: "2023-10-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SqlVirtualMachinesFetchDCAssessmentInput =
  typeof SqlVirtualMachinesFetchDCAssessmentInput.Type;

// Output Schema
export const SqlVirtualMachinesFetchDCAssessmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SqlVirtualMachinesFetchDCAssessmentOutput =
  typeof SqlVirtualMachinesFetchDCAssessmentOutput.Type;

// The operation
/**
 * Starts SQL best practices Assessment with Disk Config rules on SQL virtual machine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineName - Name of the SQL virtual machine.
 */
export const SqlVirtualMachinesFetchDCAssessment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachinesFetchDCAssessmentInput,
    outputSchema: SqlVirtualMachinesFetchDCAssessmentOutput,
  }));
// Input Schema
export const SqlVirtualMachinesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}",
      apiVersion: "2023-10-01",
    }),
  );
export type SqlVirtualMachinesGetInput = typeof SqlVirtualMachinesGetInput.Type;

// Output Schema
export const SqlVirtualMachinesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SqlVirtualMachinePropertiesSchema),
    ),
    identity: Schema.optional(Schema.suspend(() => ResourceIdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlVirtualMachinesGetOutput =
  typeof SqlVirtualMachinesGetOutput.Type;

// The operation
/**
 * Gets a SQL virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineName - Name of the SQL virtual machine.
 * @param $expand - The child resources to include in the response.
 */
export const SqlVirtualMachinesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlVirtualMachinesGetInput,
    outputSchema: SqlVirtualMachinesGetOutput,
  }),
);
// Input Schema
export const SqlVirtualMachinesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines",
      apiVersion: "2023-10-01",
    }),
  );
export type SqlVirtualMachinesListInput =
  typeof SqlVirtualMachinesListInput.Type;

// Output Schema
export const SqlVirtualMachinesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SqlVirtualMachineSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlVirtualMachinesListOutput =
  typeof SqlVirtualMachinesListOutput.Type;

// The operation
/**
 * Gets all SQL virtual machines in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const SqlVirtualMachinesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlVirtualMachinesListInput,
    outputSchema: SqlVirtualMachinesListOutput,
  }),
);
// Input Schema
export const SqlVirtualMachinesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines",
      apiVersion: "2023-10-01",
    }),
  );
export type SqlVirtualMachinesListByResourceGroupInput =
  typeof SqlVirtualMachinesListByResourceGroupInput.Type;

// Output Schema
export const SqlVirtualMachinesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SqlVirtualMachineSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlVirtualMachinesListByResourceGroupOutput =
  typeof SqlVirtualMachinesListByResourceGroupOutput.Type;

// The operation
/**
 * Gets all SQL virtual machines in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SqlVirtualMachinesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachinesListByResourceGroupInput,
    outputSchema: SqlVirtualMachinesListByResourceGroupOutput,
  }));
// Input Schema
export const SqlVirtualMachinesListBySqlVmGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/sqlVirtualMachines",
      apiVersion: "2023-10-01",
    }),
  );
export type SqlVirtualMachinesListBySqlVmGroupInput =
  typeof SqlVirtualMachinesListBySqlVmGroupInput.Type;

// Output Schema
export const SqlVirtualMachinesListBySqlVmGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SqlVirtualMachineSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlVirtualMachinesListBySqlVmGroupOutput =
  typeof SqlVirtualMachinesListBySqlVmGroupOutput.Type;

// The operation
/**
 * Gets the list of sql virtual machines in a SQL virtual machine group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 */
export const SqlVirtualMachinesListBySqlVmGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachinesListBySqlVmGroupInput,
    outputSchema: SqlVirtualMachinesListBySqlVmGroupOutput,
  }));
// Input Schema
export const SqlVirtualMachinesRedeployInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/redeploy",
      apiVersion: "2023-10-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SqlVirtualMachinesRedeployInput =
  typeof SqlVirtualMachinesRedeployInput.Type;

// Output Schema
export const SqlVirtualMachinesRedeployOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SqlVirtualMachinesRedeployOutput =
  typeof SqlVirtualMachinesRedeployOutput.Type;

// The operation
/**
 * Uninstalls and reinstalls the SQL IaaS Extension.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineName - Name of the SQL virtual machine.
 */
export const SqlVirtualMachinesRedeploy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlVirtualMachinesRedeployInput,
    outputSchema: SqlVirtualMachinesRedeployOutput,
  }),
);
// Input Schema
export const SqlVirtualMachinesStartAssessmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/startAssessment",
      apiVersion: "2023-10-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SqlVirtualMachinesStartAssessmentInput =
  typeof SqlVirtualMachinesStartAssessmentInput.Type;

// Output Schema
export const SqlVirtualMachinesStartAssessmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SqlVirtualMachinesStartAssessmentOutput =
  typeof SqlVirtualMachinesStartAssessmentOutput.Type;

// The operation
/**
 * Starts SQL best practices Assessment on SQL virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineName - Name of the SQL virtual machine.
 */
export const SqlVirtualMachinesStartAssessment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachinesStartAssessmentInput,
    outputSchema: SqlVirtualMachinesStartAssessmentOutput,
  }));
// Input Schema
export const SqlVirtualMachinesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}",
      apiVersion: "2023-10-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type SqlVirtualMachinesUpdateInput =
  typeof SqlVirtualMachinesUpdateInput.Type;

// Output Schema
export const SqlVirtualMachinesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SqlVirtualMachinePropertiesSchema),
    ),
    identity: Schema.optional(Schema.suspend(() => ResourceIdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlVirtualMachinesUpdateOutput =
  typeof SqlVirtualMachinesUpdateOutput.Type;

// The operation
/**
 * Updates SQL virtual machine tags.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineName - Name of the SQL virtual machine.
 */
export const SqlVirtualMachinesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlVirtualMachinesUpdateInput,
    outputSchema: SqlVirtualMachinesUpdateOutput,
  }),
);
// Input Schema
export const SqlVirtualMachineTroubleshootTroubleshootInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
    startTimeUtc: Schema.optional(Schema.String),
    endTimeUtc: Schema.optional(Schema.String),
    troubleshootingScenario: Schema.optional(
      Schema.Literals(["UnhealthyReplica"]),
    ),
    properties: Schema.optional(
      Schema.suspend(() => TroubleshootingAdditionalPropertiesSchema),
    ),
    virtualMachineResourceId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/troubleshoot",
      apiVersion: "2023-10-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SqlVirtualMachineTroubleshootTroubleshootInput =
  typeof SqlVirtualMachineTroubleshootTroubleshootInput.Type;

// Output Schema
export const SqlVirtualMachineTroubleshootTroubleshootOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTimeUtc: Schema.optional(Schema.String),
    endTimeUtc: Schema.optional(Schema.String),
    troubleshootingScenario: Schema.optional(
      Schema.Literals(["UnhealthyReplica"]),
    ),
    properties: Schema.optional(
      Schema.suspend(() => TroubleshootingAdditionalPropertiesSchema),
    ),
    virtualMachineResourceId: Schema.optional(Schema.String),
  });
export type SqlVirtualMachineTroubleshootTroubleshootOutput =
  typeof SqlVirtualMachineTroubleshootTroubleshootOutput.Type;

// The operation
/**
 * Starts SQL virtual machine troubleshooting.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineName - Name of the SQL virtual machine.
 */
export const SqlVirtualMachineTroubleshootTroubleshoot =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachineTroubleshootTroubleshootInput,
    outputSchema: SqlVirtualMachineTroubleshootTroubleshootOutput,
  }));
