import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString, SensitiveBlob } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "odb", serviceShapeName: "Odb" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "odb" });
const ver = /*@__PURE__*/ T.ServiceVersion("2024-08-20");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://odb-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://odb-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://odb.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://odb.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
      quotaCode: S.String,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.suspend(() => S.String).annotate({
        identifier: "ValidationExceptionReason",
      }),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(248, __c31, 0)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export interface AcceptMarketplaceRegistrationInput {
  marketplaceRegistrationToken: string;
}
export interface AcceptMarketplaceRegistrationOutput {}
export type RoleArn = string;
export type SupportedAwsIntegration = "KmsTde" | (string & {});
export type Arn = string;
export interface AssociateIamRoleToResourceInput {
  iamRoleArn: string;
  awsIntegration: SupportedAwsIntegration;
  resourceArn: string;
}
export interface AssociateIamRoleToResourceOutput {}
export type ResourceIdOrArn = string;
export interface AssociateVirtualMachinesToExadbVmClusterInput {
  exadbVmClusterId: string;
  desiredNodeCount: number;
}
export type ResourceStatus =
  | "AVAILABLE"
  | "FAILED"
  | "PROVISIONING"
  | "TERMINATED"
  | "TERMINATING"
  | "UPDATING"
  | "MAINTENANCE_IN_PROGRESS"
  | (string & {});
export interface AssociateVirtualMachinesToExadbVmClusterOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  exadbVmClusterId: string;
}
export type ResourceDisplayName = string;
export type SensitiveString = string | redacted.Redacted<string>;
export type DbWorkload = "OLTP" | "AJD" | "APEX" | "LH" | (string & {});
export type LicenseModel = "BRING_YOUR_OWN_LICENSE" | "LICENSE_INCLUDED" | (string & {});
export type DatabaseEdition = "STANDARD_EDITION" | "ENTERPRISE_EDITION" | (string & {});
export type StandbyAllowlistedIpsSource = "PRIMARY" | "SEPARATE" | "NOT_APPLICABLE" | (string & {});
export type AutonomousMaintenanceScheduleType = "EARLY" | "REGULAR" | (string & {});
export interface CustomerContact {
  email?: string | redacted.Redacted<string>;
}
export type CustomerContacts = CustomerContact[];
export interface ResourcePoolSummary {
  isDisabled?: boolean;
  poolSize?: number;
  poolStorageSizeInTBs?: number;
  availableStorageCapacityInTBs?: number;
  totalComputeCapacity?: number;
  availableComputeCapacity?: number;
}
export type DayOfWeekName =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY"
  | (string & {});
export interface DayOfWeek {
  name?: DayOfWeekName;
}
export interface ScheduledOperationDetails {
  dayOfWeek: DayOfWeek;
  scheduledStartTime?: string;
  scheduledStopTime?: string;
}
export type ScheduledOperationDetailsList = ScheduledOperationDetails[];
export type StringList = string[];
export interface TransportableTablespace {
  ttsBundleUrl?: string;
}
export interface DatabaseTool {
  isEnabled?: boolean;
  name?: string;
  computeCount?: number;
  maxIdleTimeInMinutes?: number;
}
export type DatabaseToolList = DatabaseTool[];
export type SourceType =
  | "NONE"
  | "DATABASE"
  | "BACKUP_FROM_ID"
  | "BACKUP_FROM_TIMESTAMP"
  | "CROSS_REGION_DATAGUARD"
  | "CROSS_REGION_DISASTER_RECOVERY"
  | "CLONE_TO_REFRESHABLE"
  | (string & {});
export type CloneType = "FULL" | "METADATA" | "PARTIAL" | (string & {});
export interface DatabaseCloneConfiguration {
  sourceAutonomousDatabaseId: string;
  cloneType: CloneType;
}
export type IntegerList = number[];
export interface RestoreFromBackupConfiguration {
  autonomousDatabaseBackupId: string;
  cloneType: CloneType;
  cloneTableSpaceList?: number[];
}
export interface PointInTimeRestoreConfiguration {
  sourceAutonomousDatabaseId: string;
  cloneType: CloneType;
  timestamp?: Date;
  useLatestAvailableBackupTimestamp?: boolean;
  cloneTableSpaceList?: number[];
}
export interface CrossRegionDataGuardConfiguration {
  sourceAutonomousDatabaseArn: string;
}
export type DisasterRecoveryType = "ADG" | "BACKUP_BASED" | (string & {});
export interface CrossRegionDisasterRecoveryConfiguration {
  sourceAutonomousDatabaseArn: string;
  remoteDisasterRecoveryType: DisasterRecoveryType;
  isReplicateAutomaticBackups?: boolean;
}
export type RefreshableMode = "AUTOMATIC" | "MANUAL" | (string & {});
export type OpenMode = "READ_ONLY" | "READ_WRITE" | (string & {});
export interface CloneToRefreshableConfiguration {
  sourceAutonomousDatabaseId: string;
  refreshableMode?: RefreshableMode;
  autoRefreshFrequencyInSeconds?: number;
  autoRefreshPointLagInSeconds?: number;
  timeOfAutoRefreshStart?: Date;
  openMode?: OpenMode;
  cloneType?: CloneType;
}
export type SourceConfiguration =
  | {
      databaseClone: DatabaseCloneConfiguration;
      restoreFromBackup?: never;
      pointInTimeRestore?: never;
      crossRegionDataGuard?: never;
      crossRegionDisasterRecovery?: never;
      cloneToRefreshable?: never;
    }
  | {
      databaseClone?: never;
      restoreFromBackup: RestoreFromBackupConfiguration;
      pointInTimeRestore?: never;
      crossRegionDataGuard?: never;
      crossRegionDisasterRecovery?: never;
      cloneToRefreshable?: never;
    }
  | {
      databaseClone?: never;
      restoreFromBackup?: never;
      pointInTimeRestore: PointInTimeRestoreConfiguration;
      crossRegionDataGuard?: never;
      crossRegionDisasterRecovery?: never;
      cloneToRefreshable?: never;
    }
  | {
      databaseClone?: never;
      restoreFromBackup?: never;
      pointInTimeRestore?: never;
      crossRegionDataGuard: CrossRegionDataGuardConfiguration;
      crossRegionDisasterRecovery?: never;
      cloneToRefreshable?: never;
    }
  | {
      databaseClone?: never;
      restoreFromBackup?: never;
      pointInTimeRestore?: never;
      crossRegionDataGuard?: never;
      crossRegionDisasterRecovery: CrossRegionDisasterRecoveryConfiguration;
      cloneToRefreshable?: never;
    }
  | {
      databaseClone?: never;
      restoreFromBackup?: never;
      pointInTimeRestore?: never;
      crossRegionDataGuard?: never;
      crossRegionDisasterRecovery?: never;
      cloneToRefreshable: CloneToRefreshableConfiguration;
    };
export type EncryptionKeyProviderInput = "ORACLE_MANAGED" | "AWS_KMS" | (string & {});
export type ExternalIdType = "database_ocid" | "compartment_ocid" | "tenant_ocid" | (string & {});
export type KmsKeyIdOrArn = string;
export interface AwsEncryptionKeyConfigurationInput {
  iamRoleArn?: string;
  externalIdType?: ExternalIdType;
  kmsKeyId?: string;
}
export type EncryptionKeyConfigurationInput = {
  awsEncryptionKey: AwsEncryptionKeyConfigurationInput;
};
export type AdminPasswordSource =
  | "CUSTOMER_MANAGED_AWS_SECRET"
  | "API_REQUEST_PARAMETER"
  | (string & {});
export type SecretIdOrArn = string;
export interface CustomerManagedAwsSecretConfigurationInput {
  secretId?: string;
  iamRoleArn?: string;
  externalIdType?: ExternalIdType;
}
export type AdminPasswordSourceConfigurationInput = {
  customerManagedAwsSecret: CustomerManagedAwsSecretConfigurationInput;
};
export type GeneralInputString = string;
export type TagKey = string;
export type TagValue = string;
export type RequestTagMap = { [key: string]: string | undefined };
export interface CreateAutonomousDatabaseInput {
  odbNetworkId?: string;
  displayName?: string;
  dbName?: string;
  adminPassword?: string | redacted.Redacted<string>;
  computeCount?: number;
  dataStorageSizeInTBs?: number;
  dataStorageSizeInGBs?: number;
  dbWorkload?: DbWorkload;
  isAutoScalingEnabled?: boolean;
  isAutoScalingForStorageEnabled?: boolean;
  licenseModel?: LicenseModel;
  characterSet?: string;
  ncharacterSet?: string;
  dbVersion?: string;
  databaseEdition?: DatabaseEdition;
  standbyAllowlistedIpsSource?: StandbyAllowlistedIpsSource;
  autonomousMaintenanceScheduleType?: AutonomousMaintenanceScheduleType;
  backupRetentionPeriodInDays?: number;
  byolComputeCountLimit?: number;
  cpuCoreCount?: number;
  customerContactsToSendToOCI?: CustomerContact[];
  privateEndpointIp?: string;
  privateEndpointLabel?: string;
  resourcePoolLeaderId?: string;
  resourcePoolSummary?: ResourcePoolSummary;
  scheduledOperations?: ScheduledOperationDetails[];
  standbyAllowlistedIps?: string[];
  allowlistedIps?: string[];
  transportableTablespace?: TransportableTablespace;
  isBackupRetentionLocked?: boolean;
  isLocalDataGuardEnabled?: boolean;
  isMtlsConnectionRequired?: boolean;
  dbToolsDetails?: DatabaseTool[];
  source?: SourceType;
  sourceConfiguration?: SourceConfiguration;
  encryptionKeyProvider?: EncryptionKeyProviderInput;
  encryptionKeyConfiguration?: EncryptionKeyConfigurationInput;
  adminPasswordSource?: AdminPasswordSource;
  adminPasswordSourceConfiguration?: AdminPasswordSourceConfigurationInput;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type AutonomousDatabaseResourceStatus =
  | "AVAILABLE"
  | "FAILED"
  | "PROVISIONING"
  | "TERMINATED"
  | "TERMINATING"
  | "UPDATING"
  | "MAINTENANCE_IN_PROGRESS"
  | "STOPPING"
  | "STOPPED"
  | "STARTING"
  | "UNAVAILABLE"
  | "RESTORE_IN_PROGRESS"
  | "RESTORE_FAILED"
  | "BACKUP_IN_PROGRESS"
  | "SCALE_IN_PROGRESS"
  | "AVAILABLE_NEEDS_ATTENTION"
  | "RESTARTING"
  | "RECREATING"
  | "ROLE_CHANGE_IN_PROGRESS"
  | "UPGRADING"
  | "INACCESSIBLE"
  | "STANDBY"
  | (string & {});
export interface CreateAutonomousDatabaseOutput {
  autonomousDatabaseId: string;
  displayName?: string;
  status?: AutonomousDatabaseResourceStatus;
  statusReason?: string;
}
export interface CreateAutonomousDatabaseBackupInput {
  autonomousDatabaseId: string;
  displayName?: string;
  retentionPeriodInDays?: number;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateAutonomousDatabaseBackupOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  autonomousDatabaseBackupId: string;
}
export type WalletType = "REGIONAL" | "INSTANCE" | (string & {});
export type WalletPasswordSource =
  | "CUSTOMER_MANAGED_AWS_SECRET"
  | "API_REQUEST_PARAMETER"
  | (string & {});
export type WalletPasswordSourceConfigurationInput = {
  customerManagedAwsSecret: CustomerManagedAwsSecretConfigurationInput;
};
export interface CreateAutonomousDatabaseWalletInput {
  autonomousDatabaseId: string;
  walletType?: WalletType;
  password?: string | redacted.Redacted<string>;
  passwordSource?: WalletPasswordSource;
  passwordSourceConfiguration?: WalletPasswordSourceConfigurationInput;
  clientToken?: string;
}
export type AutonomousDatabaseWalletFile = Uint8Array | redacted.Redacted<Uint8Array>;
export interface CreateAutonomousDatabaseWalletOutput {
  autonomousDatabaseWalletFile: Uint8Array | redacted.Redacted<Uint8Array>;
}
export type DaysOfWeek = DayOfWeek[];
export type HoursOfDay = number[];
export type MonthName =
  | "JANUARY"
  | "FEBRUARY"
  | "MARCH"
  | "APRIL"
  | "MAY"
  | "JUNE"
  | "JULY"
  | "AUGUST"
  | "SEPTEMBER"
  | "OCTOBER"
  | "NOVEMBER"
  | "DECEMBER"
  | (string & {});
export interface Month {
  name?: MonthName;
}
export type Months = Month[];
export type PatchingModeType = "ROLLING" | "NONROLLING" | (string & {});
export type PreferenceType = "NO_PREFERENCE" | "CUSTOM_PREFERENCE" | (string & {});
export type WeeksOfMonth = number[];
export interface MaintenanceWindow {
  customActionTimeoutInMins?: number;
  daysOfWeek?: DayOfWeek[];
  hoursOfDay?: number[];
  isCustomActionTimeoutEnabled?: boolean;
  leadTimeInWeeks?: number;
  months?: Month[];
  patchingMode?: PatchingModeType;
  preference?: PreferenceType;
  skipRu?: boolean;
  weeksOfMonth?: number[];
}
export interface CreateCloudAutonomousVmClusterInput {
  cloudExadataInfrastructureId: string;
  odbNetworkId: string;
  displayName: string;
  clientToken?: string;
  autonomousDataStorageSizeInTBs: number;
  cpuCoreCountPerNode: number;
  dbServers?: string[];
  description?: string;
  isMtlsEnabledVmCluster?: boolean;
  licenseModel?: LicenseModel;
  maintenanceWindow?: MaintenanceWindow;
  memoryPerOracleComputeUnitInGBs: number;
  scanListenerPortNonTls?: number;
  scanListenerPortTls?: number;
  tags?: { [key: string]: string | undefined };
  timeZone?: string;
  totalContainerDatabases: number;
}
export interface CreateCloudAutonomousVmClusterOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudAutonomousVmClusterId: string;
}
export interface CreateCloudExadataInfrastructureInput {
  displayName: string;
  shape: string;
  availabilityZone?: string;
  availabilityZoneId?: string;
  tags?: { [key: string]: string | undefined };
  computeCount: number;
  customerContactsToSendToOCI?: CustomerContact[];
  maintenanceWindow?: MaintenanceWindow;
  storageCount: number;
  clientToken?: string;
  databaseServerType?: string;
  storageServerType?: string;
}
export interface CreateCloudExadataInfrastructureOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudExadataInfrastructureId: string;
}
export type Hostname = string;
export type ClusterName = string;
export interface DataCollectionOptions {
  isDiagnosticsEventsEnabled?: boolean;
  isHealthMonitoringEnabled?: boolean;
  isIncidentLogsEnabled?: boolean;
}
export interface CreateCloudVmClusterInput {
  cloudExadataInfrastructureId: string;
  cpuCoreCount: number;
  displayName: string;
  giVersion: string;
  hostname: string;
  sshPublicKeys: string[];
  odbNetworkId: string;
  clusterName?: string;
  dataCollectionOptions?: DataCollectionOptions;
  dataStorageSizeInTBs?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServers?: string[];
  tags?: { [key: string]: string | undefined };
  isLocalBackupEnabled?: boolean;
  isSparseDiskgroupEnabled?: boolean;
  licenseModel?: LicenseModel;
  memorySizeInGBs?: number;
  systemVersion?: string;
  timeZone?: string;
  clientToken?: string;
  scanListenerPortTcp?: number;
}
export interface CreateCloudVmClusterOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudVmClusterId: string;
}
export type ShapeAttribute = "SMART_STORAGE" | "BLOCK_STORAGE" | (string & {});
export interface CreateExadbVmClusterInput {
  displayName: string;
  enabledEcpuCount: number;
  exascaleDbStorageVaultId: string;
  gridImageId: string;
  hostname: string;
  nodeCount: number;
  odbNetworkId: string;
  shape: string;
  sshPublicKeys: string[];
  totalEcpuCount: number;
  vmFileSystemStorageTotalSizeInGBs: number;
  clusterName?: string;
  dataCollectionOptions?: DataCollectionOptions;
  licenseModel?: LicenseModel;
  scanListenerPortTcp?: number;
  scanListenerPortTcpSsl?: number;
  shapeAttribute?: ShapeAttribute;
  systemVersion?: string;
  tags?: { [key: string]: string | undefined };
  timeZone?: string;
  clientToken?: string;
}
export interface CreateExadbVmClusterOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  exadbVmClusterId: string;
}
export interface CreateExascaleDbStorageVaultInput {
  displayName: string;
  highCapacityDatabaseStorageTotalSizeInGBs: number;
  additionalFlashCacheInPercent?: number;
  autoscaleLimitInGBs?: number;
  availabilityZoneId?: string;
  availabilityZone?: string;
  description?: string;
  isAutoscaleEnabled?: boolean;
  tags?: { [key: string]: string | undefined };
  timeZone?: string;
  clientToken?: string;
}
export interface CreateExascaleDbStorageVaultOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  exascaleDbStorageVaultId: string;
}
export type Access = "ENABLED" | "DISABLED" | (string & {});
export type PolicyDocument = string;
export interface CreateOdbNetworkInput {
  displayName: string;
  availabilityZone?: string;
  availabilityZoneId?: string;
  clientSubnetCidr: string;
  backupSubnetCidr?: string;
  customDomainName?: string;
  defaultDnsPrefix?: string;
  clientToken?: string;
  s3Access?: Access;
  zeroEtlAccess?: Access;
  stsAccess?: Access;
  kmsAccess?: Access;
  s3PolicyDocument?: string;
  stsPolicyDocument?: string;
  kmsPolicyDocument?: string;
  crossRegionS3RestoreSourcesToEnable?: string[];
  tags?: { [key: string]: string | undefined };
}
export interface CreateOdbNetworkOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  odbNetworkId: string;
}
export type PeeredCidr = string;
export type PeeredCidrList = string[];
export type PeerNetworkRouteTableId = string;
export type PeerNetworkRouteTableIdList = string[];
export interface CreateOdbPeeringConnectionInput {
  odbNetworkId: string;
  peerNetworkId: string;
  displayName?: string;
  peerNetworkCidrsToBeAdded?: string[];
  peerNetworkRouteTableIds?: string[];
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateOdbPeeringConnectionOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  odbPeeringConnectionId: string;
}
export interface DeleteAutonomousDatabaseInput {
  autonomousDatabaseId: string;
}
export interface DeleteAutonomousDatabaseOutput {}
export type ResourceId = string;
export interface DeleteAutonomousDatabaseBackupInput {
  autonomousDatabaseBackupId: string;
}
export interface DeleteAutonomousDatabaseBackupOutput {}
export interface DeleteCloudAutonomousVmClusterInput {
  cloudAutonomousVmClusterId: string;
}
export interface DeleteCloudAutonomousVmClusterOutput {}
export interface DeleteCloudExadataInfrastructureInput {
  cloudExadataInfrastructureId: string;
}
export interface DeleteCloudExadataInfrastructureOutput {}
export interface DeleteCloudVmClusterInput {
  cloudVmClusterId: string;
}
export interface DeleteCloudVmClusterOutput {}
export interface DeleteExadbVmClusterInput {
  exadbVmClusterId: string;
}
export interface DeleteExadbVmClusterOutput {}
export interface DeleteExascaleDbStorageVaultInput {
  exascaleDbStorageVaultId: string;
}
export interface DeleteExascaleDbStorageVaultOutput {}
export interface DeleteOdbNetworkInput {
  odbNetworkId: string;
  deleteAssociatedResources: boolean;
}
export interface DeleteOdbNetworkOutput {}
export interface DeleteOdbPeeringConnectionInput {
  odbPeeringConnectionId: string;
}
export interface DeleteOdbPeeringConnectionOutput {}
export interface DisassociateIamRoleFromResourceInput {
  iamRoleArn: string;
  awsIntegration: SupportedAwsIntegration;
  resourceArn: string;
}
export interface DisassociateIamRoleFromResourceOutput {}
export type ResourceIdList = string[];
export interface DisassociateVirtualMachinesFromExadbVmClusterInput {
  exadbVmClusterId: string;
  dbNodeIds: string[];
}
export interface DisassociateVirtualMachinesFromExadbVmClusterOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  exadbVmClusterId: string;
}
export type ResourceArn = string;
export interface FailoverAutonomousDatabaseInput {
  autonomousDatabaseId: string;
  peerDbArn?: string;
}
export interface FailoverAutonomousDatabaseOutput {
  autonomousDatabaseId: string;
  displayName?: string;
  status?: AutonomousDatabaseResourceStatus;
  statusReason?: string;
}
export interface GetAutonomousDatabaseInput {
  autonomousDatabaseId: string;
}
export type DatabaseType = "REGULAR" | "CLONE" | (string & {});
export type PermissionLevel = "RESTRICTED" | "UNRESTRICTED" | (string & {});
export type NetServicesArchitecture = "DEDICATED" | "SHARED" | (string & {});
export type DatabaseConnectionStringMap = { [key: string]: string | undefined };
export interface DatabaseConnectionStringProfile {
  consumerGroup?: string;
  displayName?: string;
  hostFormat?: string;
  isRegional?: boolean;
  protocol?: string;
  sessionMode?: string;
  syntaxFormat?: string;
  tlsAuthentication?: string;
  value?: string;
}
export type DatabaseConnectionStringProfileList = DatabaseConnectionStringProfile[];
export interface AutonomousDatabaseConnectionStrings {
  allConnectionStrings?: { [key: string]: string | undefined };
  dedicated?: string;
  high?: string;
  medium?: string;
  low?: string;
  profiles?: DatabaseConnectionStringProfile[];
}
export interface AutonomousDatabaseApex {
  apexVersion?: string;
  ordsVersion?: string;
}
export interface DatabaseStandbySummary {
  availabilityDomain?: string;
  lagTimeInSeconds?: number;
  status?: AutonomousDatabaseResourceStatus;
  statusReason?: string;
  maintenanceTargetComponent?: string;
  timeDataGuardRoleChanged?: Date;
  timeDisasterRecoveryRoleChanged?: Date;
  timeMaintenanceBegin?: Date;
  timeMaintenanceEnd?: Date;
}
export type DataSafeStatus =
  | "REGISTERING"
  | "REGISTERED"
  | "DEREGISTERING"
  | "NOT_REGISTERED"
  | "FAILED"
  | (string & {});
export type DatabaseManagementStatus =
  | "ENABLING"
  | "ENABLED"
  | "DISABLING"
  | "NOT_ENABLED"
  | "FAILED_ENABLING"
  | "FAILED_DISABLING"
  | (string & {});
export type OperationsInsightsStatus =
  | "ENABLING"
  | "ENABLED"
  | "DISABLING"
  | "NOT_ENABLED"
  | "FAILED_ENABLING"
  | "FAILED_DISABLING"
  | (string & {});
export interface AutonomousDatabaseConnectionUrls {
  apexUrl?: string;
  databaseTransformsUrl?: string;
  graphStudioUrl?: string;
  machineLearningNotebookUrl?: string;
  machineLearningUserManagementUrl?: string;
  mongoDbUrl?: string;
  ordsUrl?: string;
  spatialStudioUrl?: string;
  sqlDevWebUrl?: string;
}
export type ComputeModel = "ECPU" | "OCPU" | (string & {});
export type DataGuardRole =
  | "PRIMARY"
  | "STANDBY"
  | "DISABLED_STANDBY"
  | "BACKUP_COPY"
  | "SNAPSHOT_STANDBY"
  | (string & {});
export interface DisasterRecoveryConfiguration {
  disasterRecoveryType?: DisasterRecoveryType;
  isReplicateAutomaticBackups?: boolean;
  isSnapshotStandby?: boolean;
  timeSnapshotStandbyEnabledTill?: Date;
}
export type RefreshableStatus = "REFRESHING" | "NOT_REFRESHING" | (string & {});
export type RepeatCadence = "ONE_TIME" | "WEEKLY" | "MONTHLY" | "YEARLY" | (string & {});
export interface LongTermBackupSchedule {
  isDisabled?: boolean;
  repeatCadence?: RepeatCadence;
  retentionPeriodInDays?: number;
  timeOfBackup?: Date;
}
export type EncryptionKeyProvider = "ORACLE_MANAGED" | "AWS_KMS" | "OKV" | "OCI" | (string & {});
export interface AwsEncryptionKeyConfiguration {
  iamRoleArn?: string;
  externalIdType?: ExternalIdType;
  kmsKeyId?: string;
}
export interface OciEncryptionKeyConfiguration {
  kmsKeyId: string;
  vaultId: string;
}
export interface OkvEncryptionKeyConfiguration {
  certificateDirectoryName: string;
  certificateId?: string;
  directoryName: string;
  okvKmsKey: string;
  okvUri: string;
}
export type EncryptionKeyConfiguration =
  | {
      awsEncryptionKey: AwsEncryptionKeyConfiguration;
      ociEncryptionKey?: never;
      okvEncryptionKey?: never;
    }
  | {
      awsEncryptionKey?: never;
      ociEncryptionKey: OciEncryptionKeyConfiguration;
      okvEncryptionKey?: never;
    }
  | {
      awsEncryptionKey?: never;
      ociEncryptionKey?: never;
      okvEncryptionKey: OkvEncryptionKeyConfiguration;
    };
export interface EncryptionSummary {
  encryptionKeyProvider?: EncryptionKeyProvider;
  encryptionKeyConfiguration?: EncryptionKeyConfiguration;
}
export interface CustomerManagedAwsSecretConfiguration {
  iamRoleArn?: string;
  secretId?: string;
  externalIdType?: ExternalIdType;
}
export type AdminPasswordSourceConfiguration = {
  customerManagedAwsSecret: CustomerManagedAwsSecretConfiguration;
};
export interface AdminPasswordSourceSummary {
  adminPasswordSource?: AdminPasswordSource;
  adminPasswordSourceConfiguration?: AdminPasswordSourceConfiguration;
}
export interface AutonomousDatabase {
  autonomousDatabaseId?: string;
  autonomousDatabaseArn?: string;
  ociResourceAnchorName?: string;
  percentProgress?: number;
  ocid?: string;
  ociUrl?: string;
  displayName?: string;
  dbName?: string;
  sourceId?: string;
  status?: AutonomousDatabaseResourceStatus;
  statusReason?: string;
  databaseType?: DatabaseType;
  dbVersion?: string;
  dbWorkload?: DbWorkload;
  characterSet?: string;
  ncharacterSet?: string;
  databaseEdition?: DatabaseEdition;
  licenseModel?: LicenseModel;
  openMode?: OpenMode;
  permissionLevel?: PermissionLevel;
  isMtlsConnectionRequired?: boolean;
  autonomousMaintenanceScheduleType?: AutonomousMaintenanceScheduleType;
  netServicesArchitecture?: NetServicesArchitecture;
  availableUpgradeVersions?: string[];
  byolComputeCountLimit?: number;
  connectionStringDetails?: AutonomousDatabaseConnectionStrings;
  serviceConsoleUrl?: string;
  sqlWebDeveloperUrl?: string;
  customerContacts?: CustomerContact[];
  apexDetails?: AutonomousDatabaseApex;
  standbyDb?: DatabaseStandbySummary;
  localStandbyDb?: DatabaseStandbySummary;
  dataSafeStatus?: DataSafeStatus;
  databaseManagementStatus?: DatabaseManagementStatus;
  operationsInsightsStatus?: OperationsInsightsStatus;
  availabilityZone?: string;
  availabilityZoneId?: string;
  maintenanceTargetComponent?: string;
  connectionUrls?: AutonomousDatabaseConnectionUrls;
  dbToolsDetails?: DatabaseTool[];
  scheduledOperations?: ScheduledOperationDetails[];
  resourcePoolLeaderId?: string;
  computeCount?: number;
  computeModel?: ComputeModel;
  cpuCoreCount?: number;
  memoryPerOracleComputeUnitInGBs?: number;
  provisionableCpus?: number[];
  isAutoScalingEnabled?: boolean;
  dataStorageSizeInTBs?: number;
  dataStorageSizeInGBs?: number;
  usedDataStorageSizeInTBs?: number;
  usedDataStorageSizeInGBs?: number;
  actualUsedDataStorageSizeInTBs?: number;
  allocatedStorageSizeInTBs?: number;
  inMemoryAreaInGBs?: number;
  isAutoScalingForStorageEnabled?: boolean;
  odbNetworkId?: string;
  odbNetworkArn?: string;
  privateEndpoint?: string;
  privateEndpointIp?: string;
  privateEndpointLabel?: string;
  allowlistedIps?: string[];
  standbyAllowlistedIps?: string[];
  standbyAllowlistedIpsSource?: StandbyAllowlistedIpsSource;
  isLocalDataGuardEnabled?: boolean;
  isRemoteDataGuardEnabled?: boolean;
  localDisasterRecoveryType?: DisasterRecoveryType;
  role?: DataGuardRole;
  peerDbIds?: string[];
  failedDataRecoveryInSeconds?: number;
  localAdgAutoFailoverMaxDataLossLimit?: number;
  remoteDisasterRecoveryConfiguration?: DisasterRecoveryConfiguration;
  isRefreshableClone?: boolean;
  refreshableMode?: RefreshableMode;
  refreshableStatus?: RefreshableStatus;
  autoRefreshFrequencyInSeconds?: number;
  autoRefreshPointLagInSeconds?: number;
  isReconnectCloneEnabled?: boolean;
  cloneTableSpaceList?: number[];
  backupRetentionPeriodInDays?: number;
  longTermBackupSchedule?: LongTermBackupSchedule;
  isBackupRetentionLocked?: boolean;
  totalBackupStorageSizeInGBs?: number;
  resourcePoolSummary?: ResourcePoolSummary;
  encryptionSummary?: EncryptionSummary;
  createdAt?: Date;
  timeOfLastBackup?: Date;
  timeMaintenanceBegin?: Date;
  timeMaintenanceEnd?: Date;
  timeLocalDataGuardEnabled?: Date;
  timeDataGuardRoleChanged?: Date;
  timeOfLastSwitchover?: Date;
  timeOfLastFailover?: Date;
  timeOfLastRefresh?: Date;
  timeOfLastRefreshPoint?: Date;
  timeOfNextRefresh?: Date;
  timeOfAutoRefreshStart?: Date;
  timeDeletionOfFreeAutonomousDatabase?: Date;
  timeReclamationOfFreeAutonomousDatabase?: Date;
  timeDisasterRecoveryRoleChanged?: Date;
  timeUntilReconnectCloneEnabled?: Date;
  nextLongTermBackupTimeStamp?: Date;
  timeUndeleted?: Date;
  adminPasswordSourceSummary?: AdminPasswordSourceSummary;
}
export interface GetAutonomousDatabaseOutput {
  autonomousDatabase: AutonomousDatabase;
}
export interface GetAutonomousDatabaseBackupInput {
  autonomousDatabaseBackupId: string;
}
export type AutonomousDatabaseBackupStatus =
  | "ACTIVE"
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "FAILED"
  | (string & {});
export type AutonomousDatabaseBackupType =
  | "INCREMENTAL"
  | "FULL"
  | "LONGTERM"
  | "VIRTUAL_FULL"
  | "CUMULATIVE_INCREMENTAL"
  | "ROLL_FORWARD_IMAGE_COPY"
  | (string & {});
export interface AutonomousDatabaseBackup {
  autonomousDatabaseBackupId?: string;
  autonomousDatabaseBackupArn?: string;
  autonomousDatabaseId?: string;
  ocid?: string;
  displayName?: string;
  dbVersion?: string;
  status?: AutonomousDatabaseBackupStatus;
  statusReason?: string;
  isAutomatic?: boolean;
  retentionPeriodInDays?: number;
  sizeInTBs?: number;
  timeAvailableTill?: Date;
  timeStarted?: Date;
  timeEnded?: Date;
  type?: AutonomousDatabaseBackupType;
}
export interface GetAutonomousDatabaseBackupOutput {
  autonomousDatabaseBackup?: AutonomousDatabaseBackup;
}
export interface GetAutonomousDatabaseWalletDetailsInput {
  autonomousDatabaseId: string;
}
export type AutonomousDatabaseWalletStatus = "ACTIVE" | "UPDATING" | (string & {});
export type WalletPasswordSourceConfiguration = {
  customerManagedAwsSecret: CustomerManagedAwsSecretConfiguration;
};
export interface WalletPasswordSourceSummary {
  passwordSource?: WalletPasswordSource;
  passwordSourceConfiguration?: WalletPasswordSourceConfiguration;
}
export interface AutonomousDatabaseWalletDetails {
  status?: AutonomousDatabaseWalletStatus;
  timeRotated?: Date;
  passwordSourceSummary?: WalletPasswordSourceSummary;
}
export interface GetAutonomousDatabaseWalletDetailsOutput {
  autonomousDatabaseWalletDetails: AutonomousDatabaseWalletDetails;
}
export interface GetCloudAutonomousVmClusterInput {
  cloudAutonomousVmClusterId: string;
}
export type IamRoleStatus =
  | "ASSOCIATING"
  | "DISASSOCIATING"
  | "FAILED"
  | "CONNECTED"
  | "DISCONNECTED"
  | "PARTIALLY_CONNECTED"
  | "UNKNOWN"
  | (string & {});
export interface IamRole {
  iamRoleArn?: string;
  status?: IamRoleStatus;
  statusReason?: string;
  awsIntegration?: SupportedAwsIntegration;
}
export type IamRoleList = IamRole[];
export interface CloudAutonomousVmCluster {
  cloudAutonomousVmClusterId: string;
  cloudAutonomousVmClusterArn?: string;
  odbNetworkId?: string;
  odbNetworkArn?: string;
  ociResourceAnchorName?: string;
  percentProgress?: number;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudExadataInfrastructureId?: string;
  cloudExadataInfrastructureArn?: string;
  autonomousDataStoragePercentage?: number;
  autonomousDataStorageSizeInTBs?: number;
  availableAutonomousDataStorageSizeInTBs?: number;
  availableContainerDatabases?: number;
  availableCpus?: number;
  computeModel?: ComputeModel;
  cpuCoreCount?: number;
  cpuCoreCountPerNode?: number;
  cpuPercentage?: number;
  dataStorageSizeInGBs?: number;
  dataStorageSizeInTBs?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServers?: string[];
  description?: string;
  domain?: string;
  exadataStorageInTBsLowestScaledValue?: number;
  hostname?: string;
  ocid?: string;
  ociUrl?: string;
  isMtlsEnabledVmCluster?: boolean;
  licenseModel?: LicenseModel;
  maintenanceWindow?: MaintenanceWindow;
  maxAcdsLowestScaledValue?: number;
  memoryPerOracleComputeUnitInGBs?: number;
  memorySizeInGBs?: number;
  nodeCount?: number;
  nonProvisionableAutonomousContainerDatabases?: number;
  provisionableAutonomousContainerDatabases?: number;
  provisionedAutonomousContainerDatabases?: number;
  provisionedCpus?: number;
  reclaimableCpus?: number;
  reservedCpus?: number;
  scanListenerPortNonTls?: number;
  scanListenerPortTls?: number;
  shape?: string;
  createdAt?: Date;
  timeDatabaseSslCertificateExpires?: Date;
  timeOrdsCertificateExpires?: Date;
  timeZone?: string;
  totalContainerDatabases?: number;
  iamRoles?: IamRole[];
}
export interface GetCloudAutonomousVmClusterOutput {
  cloudAutonomousVmCluster?: CloudAutonomousVmCluster;
}
export interface GetCloudExadataInfrastructureInput {
  cloudExadataInfrastructureId: string;
}
export interface CloudExadataInfrastructure {
  cloudExadataInfrastructureId: string;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudExadataInfrastructureArn?: string;
  activatedStorageCount?: number;
  additionalStorageCount?: number;
  availableStorageSizeInGBs?: number;
  availabilityZone?: string;
  availabilityZoneId?: string;
  computeCount?: number;
  cpuCount?: number;
  customerContactsToSendToOCI?: CustomerContact[];
  dataStorageSizeInTBs?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServerVersion?: string;
  lastMaintenanceRunId?: string;
  maintenanceWindow?: MaintenanceWindow;
  maxCpuCount?: number;
  maxDataStorageInTBs?: number;
  maxDbNodeStorageSizeInGBs?: number;
  maxMemoryInGBs?: number;
  memorySizeInGBs?: number;
  monthlyDbServerVersion?: string;
  monthlyStorageServerVersion?: string;
  nextMaintenanceRunId?: string;
  ociResourceAnchorName?: string;
  ociUrl?: string;
  ocid?: string;
  shape?: string;
  storageCount?: number;
  storageServerVersion?: string;
  createdAt?: Date;
  totalStorageSizeInGBs?: number;
  percentProgress?: number;
  databaseServerType?: string;
  storageServerType?: string;
  computeModel?: ComputeModel;
}
export interface GetCloudExadataInfrastructureOutput {
  cloudExadataInfrastructure?: CloudExadataInfrastructure;
}
export interface GetCloudExadataInfrastructureUnallocatedResourcesInput {
  cloudExadataInfrastructureId: string;
  dbServers?: string[];
}
export interface CloudAutonomousVmClusterResourceDetails {
  cloudAutonomousVmClusterId?: string;
  unallocatedAdbStorageInTBs?: number;
}
export type CloudAutonomousVmClusterResourceDetailsList = CloudAutonomousVmClusterResourceDetails[];
export interface CloudExadataInfrastructureUnallocatedResources {
  cloudAutonomousVmClusters?: CloudAutonomousVmClusterResourceDetails[];
  cloudExadataInfrastructureDisplayName?: string;
  exadataStorageInTBs?: number;
  cloudExadataInfrastructureId?: string;
  localStorageInGBs?: number;
  memoryInGBs?: number;
  ocpus?: number;
}
export interface GetCloudExadataInfrastructureUnallocatedResourcesOutput {
  cloudExadataInfrastructureUnallocatedResources?: CloudExadataInfrastructureUnallocatedResources;
}
export interface GetCloudVmClusterInput {
  cloudVmClusterId: string;
}
export type DiskRedundancy = "HIGH" | "NORMAL" | (string & {});
export interface DbIormConfig {
  dbName?: string;
  flashCacheLimit?: string;
  share?: number;
}
export type DbIormConfigList = DbIormConfig[];
export type IormLifecycleState =
  | "BOOTSTRAPPING"
  | "DISABLED"
  | "ENABLED"
  | "FAILED"
  | "UPDATING"
  | (string & {});
export type Objective =
  | "AUTO"
  | "BALANCED"
  | "BASIC"
  | "HIGH_THROUGHPUT"
  | "LOW_LATENCY"
  | (string & {});
export interface ExadataIormConfig {
  dbPlans?: DbIormConfig[];
  lifecycleDetails?: string;
  lifecycleState?: IormLifecycleState;
  objective?: Objective;
}
export type SensitiveStringList = (string | redacted.Redacted<string>)[];
export interface CloudVmCluster {
  cloudVmClusterId: string;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudVmClusterArn?: string;
  cloudExadataInfrastructureId?: string;
  cloudExadataInfrastructureArn?: string;
  clusterName?: string;
  cpuCoreCount?: number;
  dataCollectionOptions?: DataCollectionOptions;
  dataStorageSizeInTBs?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServers?: string[];
  diskRedundancy?: DiskRedundancy;
  giVersion?: string;
  hostname?: string;
  iormConfigCache?: ExadataIormConfig;
  isLocalBackupEnabled?: boolean;
  isSparseDiskgroupEnabled?: boolean;
  lastUpdateHistoryEntryId?: string;
  licenseModel?: LicenseModel;
  listenerPort?: number;
  memorySizeInGBs?: number;
  nodeCount?: number;
  ocid?: string;
  ociResourceAnchorName?: string;
  ociUrl?: string;
  domain?: string;
  scanDnsName?: string;
  scanDnsRecordId?: string;
  scanIpIds?: string[];
  shape?: string;
  sshPublicKeys?: (string | redacted.Redacted<string>)[];
  storageSizeInGBs?: number;
  systemVersion?: string;
  createdAt?: Date;
  timeZone?: string;
  vipIds?: string[];
  odbNetworkId?: string;
  odbNetworkArn?: string;
  percentProgress?: number;
  computeModel?: ComputeModel;
  iamRoles?: IamRole[];
}
export interface GetCloudVmClusterOutput {
  cloudVmCluster?: CloudVmCluster;
}
export interface GetDbNodeInput {
  cloudVmClusterId?: string;
  exadbVmClusterId?: string;
  dbNodeId: string;
}
export type DbNodeResourceStatus =
  | "AVAILABLE"
  | "FAILED"
  | "PROVISIONING"
  | "TERMINATED"
  | "TERMINATING"
  | "UPDATING"
  | "STOPPING"
  | "STOPPED"
  | "STARTING"
  | (string & {});
export type DbNodeMaintenanceType = "VMDB_REBOOT_MIGRATION" | (string & {});
export interface DbNode {
  dbNodeId?: string;
  dbNodeArn?: string;
  status?: DbNodeResourceStatus;
  statusReason?: string;
  additionalDetails?: string;
  backupIpId?: string;
  backupVnic2Id?: string;
  backupVnicId?: string;
  cpuCoreCount?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServerId?: string;
  dbSystemId?: string;
  faultDomain?: string;
  hostIpId?: string;
  hostname?: string;
  ocid?: string;
  ociResourceAnchorName?: string;
  maintenanceType?: DbNodeMaintenanceType;
  memorySizeInGBs?: number;
  softwareStorageSizeInGB?: number;
  createdAt?: Date;
  timeMaintenanceWindowEnd?: string;
  timeMaintenanceWindowStart?: string;
  totalCpuCoreCount?: number;
  vnic2Id?: string;
  vnicId?: string;
  privateIpAddress?: string;
  floatingIpAddress?: string;
}
export interface GetDbNodeOutput {
  dbNode?: DbNode;
}
export interface GetDbServerInput {
  cloudExadataInfrastructureId: string;
  dbServerId: string;
}
export type DbServerPatchingStatus =
  | "COMPLETE"
  | "FAILED"
  | "MAINTENANCE_IN_PROGRESS"
  | "SCHEDULED"
  | (string & {});
export interface DbServerPatchingDetails {
  estimatedPatchDuration?: number;
  patchingStatus?: DbServerPatchingStatus;
  timePatchingEnded?: string;
  timePatchingStarted?: string;
}
export interface DbServer {
  dbServerId?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cpuCoreCount?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServerPatchingDetails?: DbServerPatchingDetails;
  displayName?: string;
  exadataInfrastructureId?: string;
  ocid?: string;
  ociResourceAnchorName?: string;
  maxCpuCount?: number;
  maxDbNodeStorageInGBs?: number;
  maxMemoryInGBs?: number;
  memorySizeInGBs?: number;
  shape?: string;
  createdAt?: Date;
  vmClusterIds?: string[];
  computeModel?: ComputeModel;
  autonomousVmClusterIds?: string[];
  autonomousVirtualMachineIds?: string[];
}
export interface GetDbServerOutput {
  dbServer?: DbServer;
}
export interface GetExadbVmClusterInput {
  exadbVmClusterId: string;
}
export type GridImageType = "RELEASE_UPDATE" | "CUSTOM_IMAGE" | (string & {});
export interface ExadbVmClusterStorageDetails {
  totalSizeInGBs?: number;
}
export interface ExadbVmCluster {
  exadbVmClusterId: string;
  clusterName?: string;
  createdAt?: Date;
  dataCollectionOptions?: DataCollectionOptions;
  displayName?: string;
  domain?: string;
  enabledEcpuCount?: number;
  exadbVmClusterArn?: string;
  exascaleDbStorageVaultArn?: string;
  exascaleDbStorageVaultId?: string;
  giVersion?: string;
  gridImageId?: string;
  gridImageType?: GridImageType;
  hostname?: string;
  iamRoles?: IamRole[];
  iormConfigCache?: ExadataIormConfig;
  lastUpdateHistoryEntryId?: string;
  licenseModel?: LicenseModel;
  listenerPort?: number;
  memorySizeInGBs?: number;
  nodeCount?: number;
  ocid?: string;
  ociResourceAnchorName?: string;
  ociUrl?: string;
  odbNetworkArn?: string;
  odbNetworkId?: string;
  percentProgress?: number;
  scanDnsName?: string;
  scanDnsRecordId?: string;
  scanIpIds?: string[];
  scanListenerPortTcp?: number;
  scanListenerPortTcpSsl?: number;
  shape?: string;
  shapeAttribute?: ShapeAttribute;
  snapshotFileSystemStorage?: ExadbVmClusterStorageDetails;
  sshPublicKeys?: string[];
  status?: ResourceStatus;
  statusReason?: string;
  systemVersion?: string;
  timeZone?: string;
  totalEcpuCount?: number;
  totalFileSystemStorage?: ExadbVmClusterStorageDetails;
  vipIds?: string[];
  vmFileSystemStorage?: ExadbVmClusterStorageDetails;
}
export interface GetExadbVmClusterOutput {
  exadbVmCluster: ExadbVmCluster;
}
export interface GetExascaleDbStorageVaultInput {
  exascaleDbStorageVaultId: string;
}
export type ShapeAttributeList = ShapeAttribute[];
export type ResourceArnList = string[];
export interface ExascaleDbStorageDetails {
  availableSizeInGBs?: number;
  totalSizeInGBs?: number;
}
export interface ExascaleDbStorageVault {
  exascaleDbStorageVaultId: string;
  additionalFlashCacheInPercent?: number;
  attachedShapeAttributes?: ShapeAttribute[];
  autoscaleLimitInGBs?: number;
  availabilityZone?: string;
  availabilityZoneId?: string;
  createdAt?: Date;
  description?: string;
  displayName?: string;
  vmClusterArns?: string[];
  vmClusterCount?: number;
  vmClusterIds?: string[];
  exascaleDbStorageVaultArn?: string;
  highCapacityDatabaseStorage?: ExascaleDbStorageDetails;
  isAutoscaleEnabled?: boolean;
  ocid?: string;
  ociResourceAnchorName?: string;
  ociUrl?: string;
  percentProgress?: number;
  status?: ResourceStatus;
  statusReason?: string;
  timeZone?: string;
}
export interface GetExascaleDbStorageVaultOutput {
  exascaleDbStorageVault: ExascaleDbStorageVault;
}
export interface GetOciOnboardingStatusInput {}
export type OciOnboardingStatus =
  | "NOT_STARTED"
  | "PENDING_LINK_GENERATION"
  | "PENDING_CUSTOMER_ACTION"
  | "PENDING_INITIALIZATION"
  | "ACTIVATING"
  | "ACTIVE_IN_HOME_REGION"
  | "ACTIVE"
  | "ACTIVE_LIMITED"
  | "FAILED"
  | "PUBLIC_OFFER_UNSUPPORTED"
  | "SUSPENDED"
  | "CANCELED"
  | (string & {});
export interface OciIdentityDomain {
  ociIdentityDomainId?: string;
  ociIdentityDomainResourceUrl?: string;
  ociIdentityDomainUrl?: string;
  status?: ResourceStatus;
  statusReason?: string;
  accountSetupCloudFormationUrl?: string;
}
export type OciAwsIntegration = "KmsTde" | "SecretsManager" | (string & {});
export type OciIamRoleStatus =
  | "PROVISIONING"
  | "AVAILABLE"
  | "PROVISION_FAILED"
  | "TERMINATING"
  | "TERMINATE_FAILED"
  | (string & {});
export interface OciIamRole {
  iamRoleArn?: string;
  awsIntegration?: OciAwsIntegration;
  status?: OciIamRoleStatus;
  statusReason?: string;
}
export type OciIamRoleList = OciIamRole[];
export interface SubscriptionError {
  errorMessage?: string;
}
export type SubscriptionErrors = SubscriptionError[];
export interface GetOciOnboardingStatusOutput {
  status?: OciOnboardingStatus;
  existingTenancyActivationLink?: string;
  newTenancyActivationLink?: string;
  ociIdentityDomain?: OciIdentityDomain;
  autonomousDatabaseOciIntegrationIamRoles?: OciIamRole[];
  linkedOciTenancyId?: string;
  linkedOciCompartmentId?: string;
  subscriptionErrors?: SubscriptionError[];
}
export interface GetOdbNetworkInput {
  odbNetworkId: string;
}
export interface OciDnsForwardingConfig {
  domainName?: string;
  ociDnsListenerIp?: string;
}
export type OciDnsForwardingConfigList = OciDnsForwardingConfig[];
export type VpcEndpointType = "SERVICENETWORK" | (string & {});
export interface ServiceNetworkEndpoint {
  vpcEndpointId?: string;
  vpcEndpointType?: VpcEndpointType;
}
export type ManagedResourceStatus =
  | "ENABLED"
  | "ENABLING"
  | "DISABLED"
  | "DISABLING"
  | (string & {});
export interface ManagedS3BackupAccess {
  status?: ManagedResourceStatus;
  ipv4Addresses?: string[];
}
export interface ZeroEtlAccess {
  status?: ManagedResourceStatus;
  cidr?: string;
}
export interface S3Access {
  status?: ManagedResourceStatus;
  ipv4Addresses?: string[];
  domainName?: string;
  s3PolicyDocument?: string;
}
export interface StsAccess {
  status?: ManagedResourceStatus;
  ipv4Addresses?: string[];
  domainName?: string;
  stsPolicyDocument?: string;
}
export interface KmsAccess {
  status?: ManagedResourceStatus;
  ipv4Addresses?: string[];
  domainName?: string;
  kmsPolicyDocument?: string;
}
export interface CrossRegionS3RestoreSourcesAccess {
  region?: string;
  ipv4Addresses?: string[];
  status?: ManagedResourceStatus;
}
export type CrossRegionS3RestoreSourcesAccessList = CrossRegionS3RestoreSourcesAccess[];
export interface ManagedServices {
  serviceNetworkArn?: string;
  resourceGatewayArn?: string;
  managedServicesIpv4Cidrs?: string[];
  serviceNetworkEndpoint?: ServiceNetworkEndpoint;
  managedS3BackupAccess?: ManagedS3BackupAccess;
  zeroEtlAccess?: ZeroEtlAccess;
  s3Access?: S3Access;
  stsAccess?: StsAccess;
  kmsAccess?: KmsAccess;
  crossRegionS3RestoreSourcesAccess?: CrossRegionS3RestoreSourcesAccess[];
}
export interface OdbNetwork {
  odbNetworkId: string;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  odbNetworkArn?: string;
  availabilityZone?: string;
  availabilityZoneId?: string;
  clientSubnetCidr?: string;
  backupSubnetCidr?: string;
  customDomainName?: string;
  defaultDnsPrefix?: string;
  peeredCidrs?: string[];
  ociNetworkAnchorId?: string;
  ociNetworkAnchorUrl?: string;
  ociResourceAnchorName?: string;
  ociVcnId?: string;
  ociVcnUrl?: string;
  ociDnsForwardingConfigs?: OciDnsForwardingConfig[];
  createdAt?: Date;
  percentProgress?: number;
  managedServices?: ManagedServices;
  ec2PlacementGroupIds?: string[];
}
export interface GetOdbNetworkOutput {
  odbNetwork?: OdbNetwork;
}
export interface GetOdbPeeringConnectionInput {
  odbPeeringConnectionId: string;
}
export interface OdbPeeringConnection {
  odbPeeringConnectionId: string;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  odbPeeringConnectionArn?: string;
  odbNetworkArn?: string;
  peerNetworkArn?: string;
  odbPeeringConnectionType?: string;
  peerNetworkCidrs?: string[];
  createdAt?: Date;
  percentProgress?: number;
}
export interface GetOdbPeeringConnectionOutput {
  odbPeeringConnection?: OdbPeeringConnection;
}
export interface InitializeServiceInput {
  ociIdentityDomain?: boolean;
  autonomousDatabaseOciAwsSecretsManagerIntegration?: Access;
}
export interface InitializeServiceOutput {}
export interface ListAutonomousDatabaseBackupsInput {
  maxResults?: number;
  nextToken?: string;
  autonomousDatabaseId: string;
  status?: AutonomousDatabaseBackupStatus;
  type?: AutonomousDatabaseBackupType;
}
export interface AutonomousDatabaseBackupSummary {
  autonomousDatabaseBackupId?: string;
  autonomousDatabaseBackupArn?: string;
  autonomousDatabaseId?: string;
  ocid?: string;
  displayName?: string;
  dbVersion?: string;
  status?: AutonomousDatabaseBackupStatus;
  statusReason?: string;
  isAutomatic?: boolean;
  retentionPeriodInDays?: number;
  sizeInTBs?: number;
  timeAvailableTill?: Date;
  timeStarted?: Date;
  timeEnded?: Date;
  type?: AutonomousDatabaseBackupType;
}
export type AutonomousDatabaseBackupList = AutonomousDatabaseBackupSummary[];
export interface ListAutonomousDatabaseBackupsOutput {
  nextToken?: string;
  autonomousDatabaseBackups: AutonomousDatabaseBackupSummary[];
}
export type CharacterSetType = "DATABASE" | "NATIONAL" | (string & {});
export interface ListAutonomousDatabaseCharacterSetsInput {
  maxResults?: number;
  nextToken?: string;
  characterSetType?: CharacterSetType;
}
export interface AutonomousDatabaseCharacterSetSummary {
  characterSet?: string;
}
export type AutonomousDatabaseCharacterSetList = AutonomousDatabaseCharacterSetSummary[];
export interface ListAutonomousDatabaseCharacterSetsOutput {
  nextToken?: string;
  autonomousDatabaseCharacterSets: AutonomousDatabaseCharacterSetSummary[];
}
export interface ListAutonomousDatabaseClonesInput {
  maxResults?: number;
  nextToken?: string;
  autonomousDatabaseId: string;
}
export interface AutonomousDatabaseSummary {
  autonomousDatabaseId?: string;
  autonomousDatabaseArn?: string;
  ociResourceAnchorName?: string;
  percentProgress?: number;
  ocid?: string;
  ociUrl?: string;
  displayName?: string;
  dbName?: string;
  sourceId?: string;
  status?: AutonomousDatabaseResourceStatus;
  statusReason?: string;
  databaseType?: DatabaseType;
  dbVersion?: string;
  dbWorkload?: DbWorkload;
  characterSet?: string;
  ncharacterSet?: string;
  databaseEdition?: DatabaseEdition;
  licenseModel?: LicenseModel;
  openMode?: OpenMode;
  permissionLevel?: PermissionLevel;
  isMtlsConnectionRequired?: boolean;
  autonomousMaintenanceScheduleType?: AutonomousMaintenanceScheduleType;
  netServicesArchitecture?: NetServicesArchitecture;
  availableUpgradeVersions?: string[];
  byolComputeCountLimit?: number;
  connectionStringDetails?: AutonomousDatabaseConnectionStrings;
  serviceConsoleUrl?: string;
  sqlWebDeveloperUrl?: string;
  customerContacts?: CustomerContact[];
  apexDetails?: AutonomousDatabaseApex;
  standbyDb?: DatabaseStandbySummary;
  localStandbyDb?: DatabaseStandbySummary;
  dataSafeStatus?: DataSafeStatus;
  databaseManagementStatus?: DatabaseManagementStatus;
  operationsInsightsStatus?: OperationsInsightsStatus;
  availabilityZone?: string;
  availabilityZoneId?: string;
  maintenanceTargetComponent?: string;
  connectionUrls?: AutonomousDatabaseConnectionUrls;
  dbToolsDetails?: DatabaseTool[];
  scheduledOperations?: ScheduledOperationDetails[];
  resourcePoolLeaderId?: string;
  computeCount?: number;
  computeModel?: ComputeModel;
  cpuCoreCount?: number;
  memoryPerOracleComputeUnitInGBs?: number;
  provisionableCpus?: number[];
  isAutoScalingEnabled?: boolean;
  dataStorageSizeInTBs?: number;
  dataStorageSizeInGBs?: number;
  usedDataStorageSizeInTBs?: number;
  usedDataStorageSizeInGBs?: number;
  actualUsedDataStorageSizeInTBs?: number;
  allocatedStorageSizeInTBs?: number;
  inMemoryAreaInGBs?: number;
  isAutoScalingForStorageEnabled?: boolean;
  odbNetworkId?: string;
  odbNetworkArn?: string;
  privateEndpoint?: string;
  privateEndpointIp?: string;
  privateEndpointLabel?: string;
  allowlistedIps?: string[];
  standbyAllowlistedIps?: string[];
  standbyAllowlistedIpsSource?: StandbyAllowlistedIpsSource;
  isLocalDataGuardEnabled?: boolean;
  isRemoteDataGuardEnabled?: boolean;
  localDisasterRecoveryType?: DisasterRecoveryType;
  role?: DataGuardRole;
  peerDbIds?: string[];
  failedDataRecoveryInSeconds?: number;
  localAdgAutoFailoverMaxDataLossLimit?: number;
  remoteDisasterRecoveryConfiguration?: DisasterRecoveryConfiguration;
  isRefreshableClone?: boolean;
  refreshableMode?: RefreshableMode;
  refreshableStatus?: RefreshableStatus;
  autoRefreshFrequencyInSeconds?: number;
  autoRefreshPointLagInSeconds?: number;
  isReconnectCloneEnabled?: boolean;
  cloneTableSpaceList?: number[];
  backupRetentionPeriodInDays?: number;
  longTermBackupSchedule?: LongTermBackupSchedule;
  isBackupRetentionLocked?: boolean;
  totalBackupStorageSizeInGBs?: number;
  resourcePoolSummary?: ResourcePoolSummary;
  encryptionSummary?: EncryptionSummary;
  createdAt?: Date;
  timeOfLastBackup?: Date;
  timeMaintenanceBegin?: Date;
  timeMaintenanceEnd?: Date;
  timeLocalDataGuardEnabled?: Date;
  timeDataGuardRoleChanged?: Date;
  timeOfLastSwitchover?: Date;
  timeOfLastFailover?: Date;
  timeOfLastRefresh?: Date;
  timeOfLastRefreshPoint?: Date;
  timeOfNextRefresh?: Date;
  timeOfAutoRefreshStart?: Date;
  timeDeletionOfFreeAutonomousDatabase?: Date;
  timeReclamationOfFreeAutonomousDatabase?: Date;
  timeDisasterRecoveryRoleChanged?: Date;
  timeUntilReconnectCloneEnabled?: Date;
  nextLongTermBackupTimeStamp?: Date;
  timeUndeleted?: Date;
  adminPasswordSourceSummary?: AdminPasswordSourceSummary;
}
export type AutonomousDatabaseList = AutonomousDatabaseSummary[];
export interface ListAutonomousDatabaseClonesOutput {
  nextToken?: string;
  autonomousDatabaseClones: AutonomousDatabaseSummary[];
}
export interface ListAutonomousDatabasePeersInput {
  maxResults?: number;
  nextToken?: string;
  autonomousDatabaseId: string;
}
export interface AutonomousDatabasePeerSummary {
  autonomousDatabaseId?: string;
  autonomousDatabaseArn?: string;
  ocid?: string;
  region?: string;
}
export type AutonomousDatabasePeerList = AutonomousDatabasePeerSummary[];
export interface ListAutonomousDatabasePeersOutput {
  nextToken?: string;
  autonomousDatabasePeers: AutonomousDatabasePeerSummary[];
}
export interface ListAutonomousDatabasesInput {
  maxResults?: number;
  nextToken?: string;
}
export interface ListAutonomousDatabasesOutput {
  nextToken?: string;
  autonomousDatabases: AutonomousDatabaseSummary[];
}
export interface ListAutonomousDatabaseVersionsInput {
  maxResults?: number;
  nextToken?: string;
  dbWorkload?: DbWorkload;
}
export interface AutonomousDatabaseVersionSummary {
  dbWorkload?: DbWorkload;
  details?: string;
  version?: string;
}
export type AutonomousDatabaseVersionList = AutonomousDatabaseVersionSummary[];
export interface ListAutonomousDatabaseVersionsOutput {
  nextToken?: string;
  autonomousDatabaseVersions: AutonomousDatabaseVersionSummary[];
}
export interface ListAutonomousVirtualMachinesInput {
  maxResults?: number;
  nextToken?: string;
  cloudAutonomousVmClusterId: string;
}
export interface AutonomousVirtualMachineSummary {
  autonomousVirtualMachineId?: string;
  status?: ResourceStatus;
  statusReason?: string;
  vmName?: string;
  dbServerId?: string;
  dbServerDisplayName?: string;
  cpuCoreCount?: number;
  memorySizeInGBs?: number;
  dbNodeStorageSizeInGBs?: number;
  clientIpAddress?: string;
  cloudAutonomousVmClusterId?: string;
  ocid?: string;
  ociResourceAnchorName?: string;
}
export type AutonomousVirtualMachineList = AutonomousVirtualMachineSummary[];
export interface ListAutonomousVirtualMachinesOutput {
  nextToken?: string;
  autonomousVirtualMachines: AutonomousVirtualMachineSummary[];
}
export interface ListCloudAutonomousVmClustersInput {
  maxResults?: number;
  nextToken?: string;
  cloudExadataInfrastructureId?: string;
}
export interface CloudAutonomousVmClusterSummary {
  cloudAutonomousVmClusterId: string;
  cloudAutonomousVmClusterArn?: string;
  odbNetworkId?: string;
  odbNetworkArn?: string;
  ociResourceAnchorName?: string;
  percentProgress?: number;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudExadataInfrastructureId?: string;
  cloudExadataInfrastructureArn?: string;
  autonomousDataStoragePercentage?: number;
  autonomousDataStorageSizeInTBs?: number;
  availableAutonomousDataStorageSizeInTBs?: number;
  availableContainerDatabases?: number;
  availableCpus?: number;
  computeModel?: ComputeModel;
  cpuCoreCount?: number;
  cpuCoreCountPerNode?: number;
  cpuPercentage?: number;
  dataStorageSizeInGBs?: number;
  dataStorageSizeInTBs?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServers?: string[];
  description?: string;
  domain?: string;
  exadataStorageInTBsLowestScaledValue?: number;
  hostname?: string;
  ocid?: string;
  ociUrl?: string;
  isMtlsEnabledVmCluster?: boolean;
  licenseModel?: LicenseModel;
  maintenanceWindow?: MaintenanceWindow;
  maxAcdsLowestScaledValue?: number;
  memoryPerOracleComputeUnitInGBs?: number;
  memorySizeInGBs?: number;
  nodeCount?: number;
  nonProvisionableAutonomousContainerDatabases?: number;
  provisionableAutonomousContainerDatabases?: number;
  provisionedAutonomousContainerDatabases?: number;
  provisionedCpus?: number;
  reclaimableCpus?: number;
  reservedCpus?: number;
  scanListenerPortNonTls?: number;
  scanListenerPortTls?: number;
  shape?: string;
  createdAt?: Date;
  timeDatabaseSslCertificateExpires?: Date;
  timeOrdsCertificateExpires?: Date;
  timeZone?: string;
  totalContainerDatabases?: number;
  iamRoles?: IamRole[];
}
export type CloudAutonomousVmClusterList = CloudAutonomousVmClusterSummary[];
export interface ListCloudAutonomousVmClustersOutput {
  nextToken?: string;
  cloudAutonomousVmClusters: CloudAutonomousVmClusterSummary[];
}
export interface ListCloudExadataInfrastructuresInput {
  maxResults?: number;
  nextToken?: string;
}
export interface CloudExadataInfrastructureSummary {
  cloudExadataInfrastructureId: string;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudExadataInfrastructureArn?: string;
  activatedStorageCount?: number;
  additionalStorageCount?: number;
  availableStorageSizeInGBs?: number;
  availabilityZone?: string;
  availabilityZoneId?: string;
  computeCount?: number;
  cpuCount?: number;
  customerContactsToSendToOCI?: CustomerContact[];
  dataStorageSizeInTBs?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServerVersion?: string;
  lastMaintenanceRunId?: string;
  maintenanceWindow?: MaintenanceWindow;
  maxCpuCount?: number;
  maxDataStorageInTBs?: number;
  maxDbNodeStorageSizeInGBs?: number;
  maxMemoryInGBs?: number;
  memorySizeInGBs?: number;
  monthlyDbServerVersion?: string;
  monthlyStorageServerVersion?: string;
  nextMaintenanceRunId?: string;
  ociResourceAnchorName?: string;
  ociUrl?: string;
  ocid?: string;
  shape?: string;
  storageCount?: number;
  storageServerVersion?: string;
  createdAt?: Date;
  totalStorageSizeInGBs?: number;
  percentProgress?: number;
  databaseServerType?: string;
  storageServerType?: string;
  computeModel?: ComputeModel;
}
export type CloudExadataInfrastructureList = CloudExadataInfrastructureSummary[];
export interface ListCloudExadataInfrastructuresOutput {
  nextToken?: string;
  cloudExadataInfrastructures: CloudExadataInfrastructureSummary[];
}
export interface ListCloudVmClustersInput {
  maxResults?: number;
  nextToken?: string;
  cloudExadataInfrastructureId?: string;
}
export interface CloudVmClusterSummary {
  cloudVmClusterId: string;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudVmClusterArn?: string;
  cloudExadataInfrastructureId?: string;
  cloudExadataInfrastructureArn?: string;
  clusterName?: string;
  cpuCoreCount?: number;
  dataCollectionOptions?: DataCollectionOptions;
  dataStorageSizeInTBs?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServers?: string[];
  diskRedundancy?: DiskRedundancy;
  giVersion?: string;
  hostname?: string;
  iormConfigCache?: ExadataIormConfig;
  isLocalBackupEnabled?: boolean;
  isSparseDiskgroupEnabled?: boolean;
  lastUpdateHistoryEntryId?: string;
  licenseModel?: LicenseModel;
  listenerPort?: number;
  memorySizeInGBs?: number;
  nodeCount?: number;
  ocid?: string;
  ociResourceAnchorName?: string;
  ociUrl?: string;
  domain?: string;
  scanDnsName?: string;
  scanDnsRecordId?: string;
  scanIpIds?: string[];
  shape?: string;
  sshPublicKeys?: (string | redacted.Redacted<string>)[];
  storageSizeInGBs?: number;
  systemVersion?: string;
  createdAt?: Date;
  timeZone?: string;
  vipIds?: string[];
  odbNetworkId?: string;
  odbNetworkArn?: string;
  percentProgress?: number;
  computeModel?: ComputeModel;
  iamRoles?: IamRole[];
}
export type CloudVmClusterList = CloudVmClusterSummary[];
export interface ListCloudVmClustersOutput {
  nextToken?: string;
  cloudVmClusters: CloudVmClusterSummary[];
}
export interface ListDbNodesInput {
  maxResults?: number;
  nextToken?: string;
  cloudVmClusterId?: string;
  exadbVmClusterId?: string;
}
export interface DbNodeSummary {
  dbNodeId?: string;
  dbNodeArn?: string;
  status?: DbNodeResourceStatus;
  statusReason?: string;
  additionalDetails?: string;
  backupIpId?: string;
  backupVnic2Id?: string;
  backupVnicId?: string;
  cpuCoreCount?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServerId?: string;
  dbSystemId?: string;
  faultDomain?: string;
  hostIpId?: string;
  hostname?: string;
  ocid?: string;
  ociResourceAnchorName?: string;
  maintenanceType?: DbNodeMaintenanceType;
  memorySizeInGBs?: number;
  softwareStorageSizeInGB?: number;
  createdAt?: Date;
  timeMaintenanceWindowEnd?: string;
  timeMaintenanceWindowStart?: string;
  totalCpuCoreCount?: number;
  vnic2Id?: string;
  vnicId?: string;
}
export type DbNodeList = DbNodeSummary[];
export interface ListDbNodesOutput {
  nextToken?: string;
  dbNodes: DbNodeSummary[];
}
export interface ListDbServersInput {
  cloudExadataInfrastructureId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface DbServerSummary {
  dbServerId?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cpuCoreCount?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServerPatchingDetails?: DbServerPatchingDetails;
  displayName?: string;
  exadataInfrastructureId?: string;
  ocid?: string;
  ociResourceAnchorName?: string;
  maxCpuCount?: number;
  maxDbNodeStorageInGBs?: number;
  maxMemoryInGBs?: number;
  memorySizeInGBs?: number;
  shape?: string;
  createdAt?: Date;
  vmClusterIds?: string[];
  computeModel?: ComputeModel;
  autonomousVmClusterIds?: string[];
  autonomousVirtualMachineIds?: string[];
}
export type DbServerList = DbServerSummary[];
export interface ListDbServersOutput {
  nextToken?: string;
  dbServers: DbServerSummary[];
}
export interface ListDbSystemShapesInput {
  maxResults?: number;
  nextToken?: string;
  availabilityZone?: string;
  availabilityZoneId?: string;
  shapeFamily?: string;
}
export type ShapeType = "AMD" | "INTEL" | "INTEL_FLEX_X9" | "AMPERE_FLEX_A1" | (string & {});
export interface DbSystemShapeSummary {
  availableCoreCount?: number;
  availableCoreCountPerNode?: number;
  availableDataStorageInTBs?: number;
  availableDataStoragePerServerInTBs?: number;
  availableDbNodePerNodeInGBs?: number;
  availableDbNodeStorageInGBs?: number;
  availableMemoryInGBs?: number;
  availableMemoryPerNodeInGBs?: number;
  coreCountIncrement?: number;
  maxStorageCount?: number;
  maximumNodeCount?: number;
  minCoreCountPerNode?: number;
  minDataStorageInTBs?: number;
  minDbNodeStoragePerNodeInGBs?: number;
  minMemoryPerNodeInGBs?: number;
  minStorageCount?: number;
  minimumCoreCount?: number;
  minimumNodeCount?: number;
  runtimeMinimumCoreCount?: number;
  shapeFamily?: string;
  shapeType?: ShapeType;
  shapeAttributes?: ShapeAttribute[];
  name?: string;
  computeModel?: ComputeModel;
  areServerTypesSupported?: boolean;
}
export type DbSystemShapeList = DbSystemShapeSummary[];
export interface ListDbSystemShapesOutput {
  nextToken?: string;
  dbSystemShapes: DbSystemShapeSummary[];
}
export interface ListExadbVmClustersInput {
  exascaleDbStorageVaultId?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ExadbVmClusterSummary {
  exadbVmClusterId: string;
  clusterName?: string;
  createdAt?: Date;
  dataCollectionOptions?: DataCollectionOptions;
  displayName?: string;
  domain?: string;
  enabledEcpuCount?: number;
  exadbVmClusterArn?: string;
  exascaleDbStorageVaultArn?: string;
  exascaleDbStorageVaultId?: string;
  giVersion?: string;
  gridImageId?: string;
  gridImageType?: GridImageType;
  hostname?: string;
  iamRoles?: IamRole[];
  iormConfigCache?: ExadataIormConfig;
  lastUpdateHistoryEntryId?: string;
  licenseModel?: LicenseModel;
  listenerPort?: number;
  memorySizeInGBs?: number;
  nodeCount?: number;
  ocid?: string;
  ociResourceAnchorName?: string;
  ociUrl?: string;
  odbNetworkArn?: string;
  odbNetworkId?: string;
  percentProgress?: number;
  scanDnsName?: string;
  scanDnsRecordId?: string;
  scanIpIds?: string[];
  scanListenerPortTcp?: number;
  scanListenerPortTcpSsl?: number;
  shape?: string;
  shapeAttribute?: ShapeAttribute;
  snapshotFileSystemStorage?: ExadbVmClusterStorageDetails;
  sshPublicKeys?: string[];
  status?: ResourceStatus;
  statusReason?: string;
  systemVersion?: string;
  timeZone?: string;
  totalEcpuCount?: number;
  totalFileSystemStorage?: ExadbVmClusterStorageDetails;
  vipIds?: string[];
  vmFileSystemStorage?: ExadbVmClusterStorageDetails;
}
export type ExadbVmClusterList = ExadbVmClusterSummary[];
export interface ListExadbVmClustersOutput {
  nextToken?: string;
  exadbVmClusters: ExadbVmClusterSummary[];
}
export interface ListExascaleDbStorageVaultsInput {
  maxResults?: number;
  nextToken?: string;
}
export interface ExascaleDbStorageVaultSummary {
  exascaleDbStorageVaultId: string;
  additionalFlashCacheInPercent?: number;
  attachedShapeAttributes?: ShapeAttribute[];
  autoscaleLimitInGBs?: number;
  availabilityZone?: string;
  availabilityZoneId?: string;
  createdAt?: Date;
  description?: string;
  displayName?: string;
  vmClusterArns?: string[];
  vmClusterCount?: number;
  vmClusterIds?: string[];
  exascaleDbStorageVaultArn?: string;
  highCapacityDatabaseStorage?: ExascaleDbStorageDetails;
  isAutoscaleEnabled?: boolean;
  ocid?: string;
  ociResourceAnchorName?: string;
  ociUrl?: string;
  percentProgress?: number;
  status?: ResourceStatus;
  statusReason?: string;
  timeZone?: string;
}
export type ExascaleDbStorageVaultList = ExascaleDbStorageVaultSummary[];
export interface ListExascaleDbStorageVaultsOutput {
  nextToken?: string;
  exascaleDbStorageVaults: ExascaleDbStorageVaultSummary[];
}
export interface ListFlexComponentsInput {
  maxResults?: number;
  nextToken?: string;
  shape?: string;
}
export type HardwareType = "COMPUTE" | "CELL" | (string & {});
export interface FlexComponentSummary {
  availableCoreCount?: number;
  availableDbStorageInGBs?: number;
  availableLocalStorageInGBs?: number;
  availableMemoryInGBs?: number;
  computeModel?: ComputeModel;
  descriptionSummary?: string;
  hardwareType?: HardwareType;
  minimumCoreCount?: number;
  name?: string;
  runtimeMinimumCoreCount?: number;
  shape?: string;
}
export type FlexComponentList = FlexComponentSummary[];
export interface ListFlexComponentsOutput {
  nextToken?: string;
  flexComponents: FlexComponentSummary[];
}
export interface ListGiMinorVersionsInput {
  giVersion: string;
  maxResults?: number;
  nextToken?: string;
  shapeFamily?: string;
  availabilityZone?: string;
  availabilityZoneId?: string;
}
export interface GiMinorVersionSummary {
  version: string;
  gridImageId?: string;
}
export type GiMinorVersionList = GiMinorVersionSummary[];
export interface ListGiMinorVersionsOutput {
  nextToken?: string;
  giMinorVersions: GiMinorVersionSummary[];
}
export interface ListGiVersionsInput {
  maxResults?: number;
  nextToken?: string;
  shape?: string;
}
export interface GiVersionSummary {
  version?: string;
}
export type GiVersionList = GiVersionSummary[];
export interface ListGiVersionsOutput {
  nextToken?: string;
  giVersions: GiVersionSummary[];
}
export interface ListOdbNetworksInput {
  maxResults?: number;
  nextToken?: string;
}
export interface OdbNetworkSummary {
  odbNetworkId: string;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  odbNetworkArn?: string;
  availabilityZone?: string;
  availabilityZoneId?: string;
  clientSubnetCidr?: string;
  backupSubnetCidr?: string;
  customDomainName?: string;
  defaultDnsPrefix?: string;
  peeredCidrs?: string[];
  ociNetworkAnchorId?: string;
  ociNetworkAnchorUrl?: string;
  ociResourceAnchorName?: string;
  ociVcnId?: string;
  ociVcnUrl?: string;
  ociDnsForwardingConfigs?: OciDnsForwardingConfig[];
  createdAt?: Date;
  percentProgress?: number;
  managedServices?: ManagedServices;
  ec2PlacementGroupIds?: string[];
}
export type OdbNetworkList = OdbNetworkSummary[];
export interface ListOdbNetworksOutput {
  nextToken?: string;
  odbNetworks: OdbNetworkSummary[];
}
export interface ListOdbPeeringConnectionsInput {
  maxResults?: number;
  nextToken?: string;
  odbNetworkId?: string;
}
export interface OdbPeeringConnectionSummary {
  odbPeeringConnectionId: string;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  odbPeeringConnectionArn?: string;
  odbNetworkArn?: string;
  peerNetworkArn?: string;
  odbPeeringConnectionType?: string;
  peerNetworkCidrs?: string[];
  createdAt?: Date;
  percentProgress?: number;
}
export type OdbPeeringConnectionList = OdbPeeringConnectionSummary[];
export interface ListOdbPeeringConnectionsOutput {
  nextToken?: string;
  odbPeeringConnections: OdbPeeringConnectionSummary[];
}
export interface ListSystemVersionsInput {
  maxResults?: number;
  nextToken?: string;
  giVersion: string;
  shape: string;
}
export interface SystemVersionSummary {
  giVersion?: string;
  shape?: string;
  systemVersions?: string[];
}
export type SystemVersionList = SystemVersionSummary[];
export interface ListSystemVersionsOutput {
  nextToken?: string;
  systemVersions: SystemVersionSummary[];
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export type ResponseTagMap = { [key: string]: string | undefined };
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface RebootAutonomousDatabaseInput {
  autonomousDatabaseId: string;
  isOnlineReboot?: boolean;
}
export interface RebootAutonomousDatabaseOutput {
  autonomousDatabaseId: string;
  displayName?: string;
  status?: AutonomousDatabaseResourceStatus;
  statusReason?: string;
}
export interface RebootDbNodeInput {
  cloudVmClusterId?: string;
  exadbVmClusterId?: string;
  dbNodeId: string;
}
export interface RebootDbNodeOutput {
  dbNodeId: string;
  status?: DbNodeResourceStatus;
  statusReason?: string;
}
export interface RestoreAutonomousDatabaseInput {
  autonomousDatabaseId: string;
  timestamp: Date;
}
export interface RestoreAutonomousDatabaseOutput {
  autonomousDatabaseId: string;
  displayName?: string;
  status?: AutonomousDatabaseResourceStatus;
  statusReason?: string;
}
export interface ShrinkAutonomousDatabaseInput {
  autonomousDatabaseId: string;
}
export interface ShrinkAutonomousDatabaseOutput {
  autonomousDatabaseId: string;
  displayName?: string;
  status?: AutonomousDatabaseResourceStatus;
  statusReason?: string;
}
export interface StartAutonomousDatabaseInput {
  autonomousDatabaseId: string;
}
export interface StartAutonomousDatabaseOutput {
  autonomousDatabaseId: string;
  displayName?: string;
  status?: AutonomousDatabaseResourceStatus;
  statusReason?: string;
}
export interface StartDbNodeInput {
  cloudVmClusterId?: string;
  exadbVmClusterId?: string;
  dbNodeId: string;
}
export interface StartDbNodeOutput {
  dbNodeId: string;
  status?: DbNodeResourceStatus;
  statusReason?: string;
}
export interface StopAutonomousDatabaseInput {
  autonomousDatabaseId: string;
}
export interface StopAutonomousDatabaseOutput {
  autonomousDatabaseId: string;
  displayName?: string;
  status?: AutonomousDatabaseResourceStatus;
  statusReason?: string;
}
export interface StopDbNodeInput {
  cloudVmClusterId?: string;
  exadbVmClusterId?: string;
  dbNodeId: string;
}
export interface StopDbNodeOutput {
  dbNodeId: string;
  status?: DbNodeResourceStatus;
  statusReason?: string;
}
export interface SwitchoverAutonomousDatabaseInput {
  autonomousDatabaseId: string;
  peerDbArn?: string;
}
export interface SwitchoverAutonomousDatabaseOutput {
  autonomousDatabaseId: string;
  displayName?: string;
  status?: AutonomousDatabaseResourceStatus;
  statusReason?: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeys = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateAutonomousDatabaseInput {
  autonomousDatabaseId: string;
  adminPassword?: string | redacted.Redacted<string>;
  computeCount?: number;
  cpuCoreCount?: number;
  dataStorageSizeInTBs?: number;
  dataStorageSizeInGBs?: number;
  displayName?: string;
  dbName?: string;
  dbVersion?: string;
  dbWorkload?: DbWorkload;
  dbToolsDetails?: DatabaseTool[];
  databaseEdition?: DatabaseEdition;
  licenseModel?: LicenseModel;
  isAutoScalingEnabled?: boolean;
  isAutoScalingForStorageEnabled?: boolean;
  isBackupRetentionLocked?: boolean;
  isLocalDataGuardEnabled?: boolean;
  isMtlsConnectionRequired?: boolean;
  isRefreshableClone?: boolean;
  isDisconnectPeer?: boolean;
  backupRetentionPeriodInDays?: number;
  byolComputeCountLimit?: number;
  localAdgAutoFailoverMaxDataLossLimit?: number;
  autonomousMaintenanceScheduleType?: AutonomousMaintenanceScheduleType;
  customerContactsToSendToOCI?: CustomerContact[];
  scheduledOperations?: ScheduledOperationDetails[];
  longTermBackupSchedule?: LongTermBackupSchedule;
  openMode?: OpenMode;
  permissionLevel?: PermissionLevel;
  refreshableMode?: RefreshableMode;
  privateEndpointIp?: string;
  privateEndpointLabel?: string;
  peerDbId?: string;
  resourcePoolLeaderId?: string;
  resourcePoolSummary?: ResourcePoolSummary;
  standbyAllowlistedIpsSource?: StandbyAllowlistedIpsSource;
  standbyAllowlistedIps?: string[];
  allowlistedIps?: string[];
  autoRefreshFrequencyInSeconds?: number;
  autoRefreshPointLagInSeconds?: number;
  timeOfAutoRefreshStart?: Date;
  encryptionKeyProvider?: EncryptionKeyProviderInput;
  encryptionKeyConfiguration?: EncryptionKeyConfigurationInput;
  adminPasswordSource?: AdminPasswordSource;
  adminPasswordSourceConfiguration?: AdminPasswordSourceConfigurationInput;
}
export interface UpdateAutonomousDatabaseOutput {
  autonomousDatabaseId: string;
  displayName?: string;
  status?: AutonomousDatabaseResourceStatus;
  statusReason?: string;
}
export interface UpdateAutonomousDatabaseBackupInput {
  autonomousDatabaseBackupId: string;
  retentionPeriodInDays?: number;
}
export interface UpdateAutonomousDatabaseBackupOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  autonomousDatabaseBackupId: string;
}
export interface UpdateCloudExadataInfrastructureInput {
  cloudExadataInfrastructureId: string;
  maintenanceWindow?: MaintenanceWindow;
}
export interface UpdateCloudExadataInfrastructureOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudExadataInfrastructureId: string;
}
export type UpdateAction =
  | "ROLLING_APPLY"
  | "NON_ROLLING_APPLY"
  | "PRECHECK"
  | "ROLLBACK"
  | (string & {});
export interface UpdateExadbVmClusterInput {
  exadbVmClusterId: string;
  dataCollectionOptions?: DataCollectionOptions;
  displayName?: string;
  enabledEcpuCount?: number;
  gridImageId?: string;
  licenseModel?: LicenseModel;
  sshPublicKeys?: string[];
  systemVersion?: string;
  totalEcpuCount?: number;
  updateAction?: UpdateAction;
  vmFileSystemStorageTotalSizeInGBs?: number;
}
export interface UpdateExadbVmClusterOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  exadbVmClusterId: string;
}
export interface UpdateExascaleDbStorageVaultInput {
  exascaleDbStorageVaultId: string;
  additionalFlashCacheInPercent?: number;
  autoscaleLimitInGBs?: number;
  description?: string;
  displayName?: string;
  highCapacityDatabaseStorageTotalSizeInGBs?: number;
  isAutoscaleEnabled?: boolean;
}
export interface UpdateExascaleDbStorageVaultOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  exascaleDbStorageVaultId: string;
}
export interface UpdateOdbNetworkInput {
  odbNetworkId: string;
  displayName?: string;
  peeredCidrsToBeAdded?: string[];
  peeredCidrsToBeRemoved?: string[];
  s3Access?: Access;
  zeroEtlAccess?: Access;
  stsAccess?: Access;
  kmsAccess?: Access;
  s3PolicyDocument?: string;
  stsPolicyDocument?: string;
  kmsPolicyDocument?: string;
  crossRegionS3RestoreSourcesToEnable?: string[];
  crossRegionS3RestoreSourcesToDisable?: string[];
}
export interface UpdateOdbNetworkOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  odbNetworkId: string;
}
export interface UpdateOdbPeeringConnectionInput {
  odbPeeringConnectionId: string;
  displayName?: string;
  peerNetworkCidrsToBeAdded?: string[];
  peerNetworkCidrsToBeRemoved?: string[];
}
export interface UpdateOdbPeeringConnectionOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  odbPeeringConnectionId: string;
}
export type ValidationExceptionReason =
  | "unknownOperation"
  | "cannotParse"
  | "fieldValidationFailed"
  | "other"
  | (string & {});
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type AcceptMarketplaceRegistrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Registers the Amazon Web Services Marketplace token for your Amazon Web Services account to activate your Oracle Database@Amazon Web Services subscription.
 */
export const acceptMarketplaceRegistration: API.OperationMethod<
  AcceptMarketplaceRegistrationInput,
  AcceptMarketplaceRegistrationOutput,
  AcceptMarketplaceRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<AcceptMarketplaceRegistrationInput>,
  output: __S(1, __c0, 1) as any as S.Schema<AcceptMarketplaceRegistrationOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptMarketplaceRegistration",
}));

export type AssociateIamRoleToResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates an Amazon Web Services Identity and Access Management (IAM) service role with a specified resource to enable Amazon Web Services service integration.
 */
export const associateIamRoleToResource: API.OperationMethod<
  AssociateIamRoleToResourceInput,
  AssociateIamRoleToResourceOutput,
  AssociateIamRoleToResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<AssociateIamRoleToResourceInput>,
  output: __S(1, __c0, 1) as any as S.Schema<AssociateIamRoleToResourceOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateIamRoleToResource",
}));

export type AssociateVirtualMachinesToExadbVmClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds virtual machines to the specified Exascale VM cluster.
 */
export const associateVirtualMachinesToExadbVmCluster: API.OperationMethod<
  AssociateVirtualMachinesToExadbVmClusterInput,
  AssociateVirtualMachinesToExadbVmClusterOutput,
  AssociateVirtualMachinesToExadbVmClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3, __c0, 3) as any as S.Schema<AssociateVirtualMachinesToExadbVmClusterInput>,
  output: __S(4, __c0, 4) as any as S.Schema<AssociateVirtualMachinesToExadbVmClusterOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateVirtualMachinesToExadbVmCluster",
}));

export type CreateAutonomousDatabaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new Autonomous Database.
 */
export const createAutonomousDatabase: API.OperationMethod<
  CreateAutonomousDatabaseInput,
  CreateAutonomousDatabaseOutput,
  CreateAutonomousDatabaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28, __c3, 4) as any as S.Schema<CreateAutonomousDatabaseInput>,
  output: __S(29, __c3, 5) as any as S.Schema<CreateAutonomousDatabaseOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAutonomousDatabase",
}));

export type CreateAutonomousDatabaseBackupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new backup of the specified Autonomous Database.
 */
export const createAutonomousDatabaseBackup: API.OperationMethod<
  CreateAutonomousDatabaseBackupInput,
  CreateAutonomousDatabaseBackupOutput,
  CreateAutonomousDatabaseBackupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30, __c3, 6) as any as S.Schema<CreateAutonomousDatabaseBackupInput>,
  output: __S(31, __c3, 7) as any as S.Schema<CreateAutonomousDatabaseBackupOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAutonomousDatabaseBackup",
}));

export type CreateAutonomousDatabaseWalletError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new wallet for the specified Autonomous Database.
 */
export const createAutonomousDatabaseWallet: API.OperationMethod<
  CreateAutonomousDatabaseWalletInput,
  CreateAutonomousDatabaseWalletOutput,
  CreateAutonomousDatabaseWalletError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32, __c4, 0) as any as S.Schema<CreateAutonomousDatabaseWalletInput>,
  output: __S(33, __c4, 1) as any as S.Schema<CreateAutonomousDatabaseWalletOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAutonomousDatabaseWallet",
}));

export type CreateCloudAutonomousVmClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new Autonomous VM cluster in the specified Exadata infrastructure.
 */
export const createCloudAutonomousVmCluster: API.OperationMethod<
  CreateCloudAutonomousVmClusterInput,
  CreateCloudAutonomousVmClusterOutput,
  CreateCloudAutonomousVmClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36, __c4, 4) as any as S.Schema<CreateCloudAutonomousVmClusterInput>,
  output: __S(37, __c4, 5) as any as S.Schema<CreateCloudAutonomousVmClusterOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCloudAutonomousVmCluster",
}));

export type CreateCloudExadataInfrastructureError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Exadata infrastructure.
 */
export const createCloudExadataInfrastructure: API.OperationMethod<
  CreateCloudExadataInfrastructureInput,
  CreateCloudExadataInfrastructureOutput,
  CreateCloudExadataInfrastructureError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38, __c4, 6) as any as S.Schema<CreateCloudExadataInfrastructureInput>,
  output: __S(39, __c4, 7) as any as S.Schema<CreateCloudExadataInfrastructureOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCloudExadataInfrastructure",
}));

export type CreateCloudVmClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a VM cluster on the specified Exadata infrastructure.
 */
export const createCloudVmCluster: API.OperationMethod<
  CreateCloudVmClusterInput,
  CreateCloudVmClusterOutput,
  CreateCloudVmClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41, __c5, 1) as any as S.Schema<CreateCloudVmClusterInput>,
  output: __S(42, __c5, 2) as any as S.Schema<CreateCloudVmClusterOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCloudVmCluster",
}));

export type CreateExadbVmClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Exascale VM cluster.
 */
export const createExadbVmCluster: API.OperationMethod<
  CreateExadbVmClusterInput,
  CreateExadbVmClusterOutput,
  CreateExadbVmClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43, __c5, 3) as any as S.Schema<CreateExadbVmClusterInput>,
  output: __S(4, __c0, 4) as any as S.Schema<CreateExadbVmClusterOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateExadbVmCluster",
}));

export type CreateExascaleDbStorageVaultError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Exascale storage vault.
 */
export const createExascaleDbStorageVault: API.OperationMethod<
  CreateExascaleDbStorageVaultInput,
  CreateExascaleDbStorageVaultOutput,
  CreateExascaleDbStorageVaultError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44, __c5, 4) as any as S.Schema<CreateExascaleDbStorageVaultInput>,
  output: __S(45, __c5, 5) as any as S.Schema<CreateExascaleDbStorageVaultOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateExascaleDbStorageVault",
}));

export type CreateOdbNetworkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an ODB network.
 */
export const createOdbNetwork: API.OperationMethod<
  CreateOdbNetworkInput,
  CreateOdbNetworkOutput,
  CreateOdbNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(46, __c5, 6) as any as S.Schema<CreateOdbNetworkInput>,
  output: __S(47, __c5, 7) as any as S.Schema<CreateOdbNetworkOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateOdbNetwork",
}));

export type CreateOdbPeeringConnectionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a peering connection between an ODB network and a VPC.
 *
 * A peering connection enables private connectivity between the networks for application-tier communication.
 */
export const createOdbPeeringConnection: API.OperationMethod<
  CreateOdbPeeringConnectionInput,
  CreateOdbPeeringConnectionOutput,
  CreateOdbPeeringConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48, __c6, 0) as any as S.Schema<CreateOdbPeeringConnectionInput>,
  output: __S(49, __c6, 1) as any as S.Schema<CreateOdbPeeringConnectionOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateOdbPeeringConnection",
}));

export type DeleteAutonomousDatabaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified Autonomous Database.
 */
export const deleteAutonomousDatabase: API.OperationMethod<
  DeleteAutonomousDatabaseInput,
  DeleteAutonomousDatabaseOutput,
  DeleteAutonomousDatabaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50, __c6, 2) as any as S.Schema<DeleteAutonomousDatabaseInput>,
  output: __S(51, __c6, 3) as any as S.Schema<DeleteAutonomousDatabaseOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAutonomousDatabase",
}));

export type DeleteAutonomousDatabaseBackupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified Autonomous Database backup.
 */
export const deleteAutonomousDatabaseBackup: API.OperationMethod<
  DeleteAutonomousDatabaseBackupInput,
  DeleteAutonomousDatabaseBackupOutput,
  DeleteAutonomousDatabaseBackupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52, __c6, 4) as any as S.Schema<DeleteAutonomousDatabaseBackupInput>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteAutonomousDatabaseBackupOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAutonomousDatabaseBackup",
}));

export type DeleteCloudAutonomousVmClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Autonomous VM cluster.
 */
export const deleteCloudAutonomousVmCluster: API.OperationMethod<
  DeleteCloudAutonomousVmClusterInput,
  DeleteCloudAutonomousVmClusterOutput,
  DeleteCloudAutonomousVmClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53, __c6, 5) as any as S.Schema<DeleteCloudAutonomousVmClusterInput>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteCloudAutonomousVmClusterOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCloudAutonomousVmCluster",
}));

export type DeleteCloudExadataInfrastructureError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified Exadata infrastructure. Before you use this operation, make sure to delete all of the VM clusters that are hosted on this Exadata infrastructure.
 */
export const deleteCloudExadataInfrastructure: API.OperationMethod<
  DeleteCloudExadataInfrastructureInput,
  DeleteCloudExadataInfrastructureOutput,
  DeleteCloudExadataInfrastructureError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54, __c6, 6) as any as S.Schema<DeleteCloudExadataInfrastructureInput>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteCloudExadataInfrastructureOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCloudExadataInfrastructure",
}));

export type DeleteCloudVmClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified VM cluster.
 */
export const deleteCloudVmCluster: API.OperationMethod<
  DeleteCloudVmClusterInput,
  DeleteCloudVmClusterOutput,
  DeleteCloudVmClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<DeleteCloudVmClusterInput>,
  output: __S(51, __c6, 3) as any as S.Schema<DeleteCloudVmClusterOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCloudVmCluster",
}));

export type DeleteExadbVmClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified Exascale VM cluster.
 */
export const deleteExadbVmCluster: API.OperationMethod<
  DeleteExadbVmClusterInput,
  DeleteExadbVmClusterOutput,
  DeleteExadbVmClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56, __c7, 0) as any as S.Schema<DeleteExadbVmClusterInput>,
  output: __S(51, __c6, 3) as any as S.Schema<DeleteExadbVmClusterOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteExadbVmCluster",
}));

export type DeleteExascaleDbStorageVaultError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified Exascale storage vault.
 */
export const deleteExascaleDbStorageVault: API.OperationMethod<
  DeleteExascaleDbStorageVaultInput,
  DeleteExascaleDbStorageVaultOutput,
  DeleteExascaleDbStorageVaultError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57, __c7, 1) as any as S.Schema<DeleteExascaleDbStorageVaultInput>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteExascaleDbStorageVaultOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteExascaleDbStorageVault",
}));

export type DeleteOdbNetworkError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified ODB network.
 */
export const deleteOdbNetwork: API.OperationMethod<
  DeleteOdbNetworkInput,
  DeleteOdbNetworkOutput,
  DeleteOdbNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58, __c7, 2) as any as S.Schema<DeleteOdbNetworkInput>,
  output: __S(51, __c6, 3) as any as S.Schema<DeleteOdbNetworkOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteOdbNetwork",
}));

export type DeleteOdbPeeringConnectionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an ODB peering connection.
 *
 * When you delete an ODB peering connection, the underlying VPC peering connection is also deleted.
 */
export const deleteOdbPeeringConnection: API.OperationMethod<
  DeleteOdbPeeringConnectionInput,
  DeleteOdbPeeringConnectionOutput,
  DeleteOdbPeeringConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<DeleteOdbPeeringConnectionInput>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteOdbPeeringConnectionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteOdbPeeringConnection",
}));

export type DisassociateIamRoleFromResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates an Amazon Web Services Identity and Access Management (IAM) service role from a specified resource to disable Amazon Web Services service integration.
 */
export const disassociateIamRoleFromResource: API.OperationMethod<
  DisassociateIamRoleFromResourceInput,
  DisassociateIamRoleFromResourceOutput,
  DisassociateIamRoleFromResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60, __c7, 4) as any as S.Schema<DisassociateIamRoleFromResourceInput>,
  output: __S(1, __c0, 1) as any as S.Schema<DisassociateIamRoleFromResourceOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateIamRoleFromResource",
}));

export type DisassociateVirtualMachinesFromExadbVmClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes virtual machines from the specified Exascale VM cluster.
 */
export const disassociateVirtualMachinesFromExadbVmCluster: API.OperationMethod<
  DisassociateVirtualMachinesFromExadbVmClusterInput,
  DisassociateVirtualMachinesFromExadbVmClusterOutput,
  DisassociateVirtualMachinesFromExadbVmClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61, __c7, 5) as any as S.Schema<DisassociateVirtualMachinesFromExadbVmClusterInput>,
  output: __S(4, __c0, 4) as any as S.Schema<DisassociateVirtualMachinesFromExadbVmClusterOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateVirtualMachinesFromExadbVmCluster",
}));

export type FailoverAutonomousDatabaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Initiates a failover of the specified Autonomous Database to a standby peer database.
 */
export const failoverAutonomousDatabase: API.OperationMethod<
  FailoverAutonomousDatabaseInput,
  FailoverAutonomousDatabaseOutput,
  FailoverAutonomousDatabaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62, __c7, 6) as any as S.Schema<FailoverAutonomousDatabaseInput>,
  output: __S(29, __c3, 5) as any as S.Schema<FailoverAutonomousDatabaseOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "FailoverAutonomousDatabase",
}));

export type GetAutonomousDatabaseError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a specific Autonomous Database.
 */
export const getAutonomousDatabase: API.OperationMethod<
  GetAutonomousDatabaseInput,
  GetAutonomousDatabaseOutput,
  GetAutonomousDatabaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63, __c7, 7) as any as S.Schema<GetAutonomousDatabaseInput>,
  output: __S(80, __c10, 0) as any as S.Schema<GetAutonomousDatabaseOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAutonomousDatabase",
}));

export type GetAutonomousDatabaseBackupError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a specific Autonomous Database backup.
 */
export const getAutonomousDatabaseBackup: API.OperationMethod<
  GetAutonomousDatabaseBackupInput,
  GetAutonomousDatabaseBackupOutput,
  GetAutonomousDatabaseBackupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81, __c10, 1) as any as S.Schema<GetAutonomousDatabaseBackupInput>,
  output: __S(83, __c10, 3) as any as S.Schema<GetAutonomousDatabaseBackupOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAutonomousDatabaseBackup",
}));

export type GetAutonomousDatabaseWalletDetailsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the wallet details for the specified Autonomous Database.
 */
export const getAutonomousDatabaseWalletDetails: API.OperationMethod<
  GetAutonomousDatabaseWalletDetailsInput,
  GetAutonomousDatabaseWalletDetailsOutput,
  GetAutonomousDatabaseWalletDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(84, __c10, 4) as any as S.Schema<GetAutonomousDatabaseWalletDetailsInput>,
  output: __S(87, __c10, 7) as any as S.Schema<GetAutonomousDatabaseWalletDetailsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAutonomousDatabaseWalletDetails",
}));

export type GetCloudAutonomousVmClusterError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a specific Autonomous VM cluster.
 */
export const getCloudAutonomousVmCluster: API.OperationMethod<
  GetCloudAutonomousVmClusterInput,
  GetCloudAutonomousVmClusterOutput,
  GetCloudAutonomousVmClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(88, __c11, 0) as any as S.Schema<GetCloudAutonomousVmClusterInput>,
  output: __S(92, __c11, 4) as any as S.Schema<GetCloudAutonomousVmClusterOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCloudAutonomousVmCluster",
}));

export type GetCloudExadataInfrastructureError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the specified Exadata infrastructure.
 */
export const getCloudExadataInfrastructure: API.OperationMethod<
  GetCloudExadataInfrastructureInput,
  GetCloudExadataInfrastructureOutput,
  GetCloudExadataInfrastructureError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93, __c11, 5) as any as S.Schema<GetCloudExadataInfrastructureInput>,
  output: __S(95, __c11, 7) as any as S.Schema<GetCloudExadataInfrastructureOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCloudExadataInfrastructure",
}));

export type GetCloudExadataInfrastructureUnallocatedResourcesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about unallocated resources in a specified Cloud Exadata Infrastructure.
 */
export const getCloudExadataInfrastructureUnallocatedResources: API.OperationMethod<
  GetCloudExadataInfrastructureUnallocatedResourcesInput,
  GetCloudExadataInfrastructureUnallocatedResourcesOutput,
  GetCloudExadataInfrastructureUnallocatedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(
    96,
    __c12,
    0,
  ) as any as S.Schema<GetCloudExadataInfrastructureUnallocatedResourcesInput>,
  output: __S(
    100,
    __c12,
    4,
  ) as any as S.Schema<GetCloudExadataInfrastructureUnallocatedResourcesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCloudExadataInfrastructureUnallocatedResources",
}));

export type GetCloudVmClusterError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the specified VM cluster.
 */
export const getCloudVmCluster: API.OperationMethod<
  GetCloudVmClusterInput,
  GetCloudVmClusterOutput,
  GetCloudVmClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(101, __c12, 5) as any as S.Schema<GetCloudVmClusterInput>,
  output: __S(107, __c13, 3) as any as S.Schema<GetCloudVmClusterOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCloudVmCluster",
}));

export type GetDbNodeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the specified DB node.
 */
export const getDbNode: API.OperationMethod<
  GetDbNodeInput,
  GetDbNodeOutput,
  GetDbNodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(108, __c13, 4) as any as S.Schema<GetDbNodeInput>,
  output: __S(110, __c13, 6) as any as S.Schema<GetDbNodeOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDbNode",
}));

export type GetDbServerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the specified database server.
 */
export const getDbServer: API.OperationMethod<
  GetDbServerInput,
  GetDbServerOutput,
  GetDbServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(111, __c13, 7) as any as S.Schema<GetDbServerInput>,
  output: __S(114, __c14, 2) as any as S.Schema<GetDbServerOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDbServer",
}));

export type GetExadbVmClusterError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the specified Exascale VM cluster.
 */
export const getExadbVmCluster: API.OperationMethod<
  GetExadbVmClusterInput,
  GetExadbVmClusterOutput,
  GetExadbVmClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115, __c14, 3) as any as S.Schema<GetExadbVmClusterInput>,
  output: __S(118, __c14, 6) as any as S.Schema<GetExadbVmClusterOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExadbVmCluster",
}));

export type GetExascaleDbStorageVaultError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the specified Exascale storage vault.
 */
export const getExascaleDbStorageVault: API.OperationMethod<
  GetExascaleDbStorageVaultInput,
  GetExascaleDbStorageVaultOutput,
  GetExascaleDbStorageVaultError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(119, __c14, 7) as any as S.Schema<GetExascaleDbStorageVaultInput>,
  output: __S(123, __c15, 3) as any as S.Schema<GetExascaleDbStorageVaultOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExascaleDbStorageVault",
}));

export type GetOciOnboardingStatusError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the tenancy activation link and onboarding status for your Amazon Web Services account.
 */
export const getOciOnboardingStatus: API.OperationMethod<
  GetOciOnboardingStatusInput,
  GetOciOnboardingStatusOutput,
  GetOciOnboardingStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124, __c15, 4) as any as S.Schema<GetOciOnboardingStatusInput>,
  output: __S(130, __c16, 2) as any as S.Schema<GetOciOnboardingStatusOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOciOnboardingStatus",
}));

export type GetOdbNetworkError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the specified ODB network.
 */
export const getOdbNetwork: API.OperationMethod<
  GetOdbNetworkInput,
  GetOdbNetworkOutput,
  GetOdbNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131, __c16, 3) as any as S.Schema<GetOdbNetworkInput>,
  output: __S(144, __c18, 0) as any as S.Schema<GetOdbNetworkOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOdbNetwork",
}));

export type GetOdbPeeringConnectionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an ODB peering connection.
 */
export const getOdbPeeringConnection: API.OperationMethod<
  GetOdbPeeringConnectionInput,
  GetOdbPeeringConnectionOutput,
  GetOdbPeeringConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(145, __c18, 1) as any as S.Schema<GetOdbPeeringConnectionInput>,
  output: __S(147, __c18, 3) as any as S.Schema<GetOdbPeeringConnectionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOdbPeeringConnection",
}));

export type InitializeServiceError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Initializes the ODB service for the first time in an account.
 */
export const initializeService: API.OperationMethod<
  InitializeServiceInput,
  InitializeServiceOutput,
  InitializeServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(148, __c18, 4) as any as S.Schema<InitializeServiceInput>,
  output: __S(51, __c6, 3) as any as S.Schema<InitializeServiceOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InitializeService",
}));

export type ListAutonomousDatabaseBackupsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the backups of the specified Autonomous Database.
 */
export const listAutonomousDatabaseBackups: API.PaginatedOperationMethod<
  ListAutonomousDatabaseBackupsInput,
  ListAutonomousDatabaseBackupsOutput,
  ListAutonomousDatabaseBackupsError,
  Credentials | HttpClient.HttpClient,
  AutonomousDatabaseBackupSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(149, __c18, 5) as any as S.Schema<ListAutonomousDatabaseBackupsInput>,
  output: __S(152, __c19, 0) as any as S.Schema<ListAutonomousDatabaseBackupsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAutonomousDatabaseBackups",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "autonomousDatabaseBackups",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAutonomousDatabaseCharacterSetsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the available character sets for Autonomous Databases.
 */
export const listAutonomousDatabaseCharacterSets: API.PaginatedOperationMethod<
  ListAutonomousDatabaseCharacterSetsInput,
  ListAutonomousDatabaseCharacterSetsOutput,
  ListAutonomousDatabaseCharacterSetsError,
  Credentials | HttpClient.HttpClient,
  AutonomousDatabaseCharacterSetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(153, __c19, 1) as any as S.Schema<ListAutonomousDatabaseCharacterSetsInput>,
  output: __S(156, __c19, 4) as any as S.Schema<ListAutonomousDatabaseCharacterSetsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAutonomousDatabaseCharacterSets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "autonomousDatabaseCharacterSets",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAutonomousDatabaseClonesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the clones of the specified Autonomous Database.
 */
export const listAutonomousDatabaseClones: API.PaginatedOperationMethod<
  ListAutonomousDatabaseClonesInput,
  ListAutonomousDatabaseClonesOutput,
  ListAutonomousDatabaseClonesError,
  Credentials | HttpClient.HttpClient,
  AutonomousDatabaseSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(157, __c19, 5) as any as S.Schema<ListAutonomousDatabaseClonesInput>,
  output: __S(160, __c20, 0) as any as S.Schema<ListAutonomousDatabaseClonesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAutonomousDatabaseClones",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "autonomousDatabaseClones",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAutonomousDatabasePeersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the peer databases of the specified Autonomous Database.
 */
export const listAutonomousDatabasePeers: API.PaginatedOperationMethod<
  ListAutonomousDatabasePeersInput,
  ListAutonomousDatabasePeersOutput,
  ListAutonomousDatabasePeersError,
  Credentials | HttpClient.HttpClient,
  AutonomousDatabasePeerSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(161, __c20, 1) as any as S.Schema<ListAutonomousDatabasePeersInput>,
  output: __S(164, __c20, 4) as any as S.Schema<ListAutonomousDatabasePeersOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAutonomousDatabasePeers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "autonomousDatabasePeers",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAutonomousDatabasesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the Autonomous Databases owned by your Amazon Web Services account in the current Amazon Web Services Region.
 */
export const listAutonomousDatabases: API.PaginatedOperationMethod<
  ListAutonomousDatabasesInput,
  ListAutonomousDatabasesOutput,
  ListAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient,
  AutonomousDatabaseSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(165, __c20, 5) as any as S.Schema<ListAutonomousDatabasesInput>,
  output: __S(166, __c20, 6) as any as S.Schema<ListAutonomousDatabasesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAutonomousDatabases",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "autonomousDatabases",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAutonomousDatabaseVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the available Oracle Database software versions for Autonomous Databases.
 */
export const listAutonomousDatabaseVersions: API.PaginatedOperationMethod<
  ListAutonomousDatabaseVersionsInput,
  ListAutonomousDatabaseVersionsOutput,
  ListAutonomousDatabaseVersionsError,
  Credentials | HttpClient.HttpClient,
  AutonomousDatabaseVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(167, __c20, 7) as any as S.Schema<ListAutonomousDatabaseVersionsInput>,
  output: __S(170, __c21, 2) as any as S.Schema<ListAutonomousDatabaseVersionsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAutonomousDatabaseVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "autonomousDatabaseVersions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAutonomousVirtualMachinesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all Autonomous VMs in an Autonomous VM cluster.
 */
export const listAutonomousVirtualMachines: API.PaginatedOperationMethod<
  ListAutonomousVirtualMachinesInput,
  ListAutonomousVirtualMachinesOutput,
  ListAutonomousVirtualMachinesError,
  Credentials | HttpClient.HttpClient,
  AutonomousVirtualMachineSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(171, __c21, 3) as any as S.Schema<ListAutonomousVirtualMachinesInput>,
  output: __S(174, __c21, 6) as any as S.Schema<ListAutonomousVirtualMachinesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAutonomousVirtualMachines",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "autonomousVirtualMachines",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCloudAutonomousVmClustersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all Autonomous VM clusters in a specified Cloud Exadata infrastructure.
 */
export const listCloudAutonomousVmClusters: API.PaginatedOperationMethod<
  ListCloudAutonomousVmClustersInput,
  ListCloudAutonomousVmClustersOutput,
  ListCloudAutonomousVmClustersError,
  Credentials | HttpClient.HttpClient,
  CloudAutonomousVmClusterSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(175, __c21, 7) as any as S.Schema<ListCloudAutonomousVmClustersInput>,
  output: __S(178, __c22, 2) as any as S.Schema<ListCloudAutonomousVmClustersOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCloudAutonomousVmClusters",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "cloudAutonomousVmClusters",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCloudExadataInfrastructuresError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the Exadata infrastructures owned by your Amazon Web Services account.
 */
export const listCloudExadataInfrastructures: API.PaginatedOperationMethod<
  ListCloudExadataInfrastructuresInput,
  ListCloudExadataInfrastructuresOutput,
  ListCloudExadataInfrastructuresError,
  Credentials | HttpClient.HttpClient,
  CloudExadataInfrastructureSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(179, __c22, 3) as any as S.Schema<ListCloudExadataInfrastructuresInput>,
  output: __S(181, __c22, 5) as any as S.Schema<ListCloudExadataInfrastructuresOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCloudExadataInfrastructures",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "cloudExadataInfrastructures",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCloudVmClustersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the VM clusters owned by your Amazon Web Services account or only the ones on the specified Exadata infrastructure.
 */
export const listCloudVmClusters: API.PaginatedOperationMethod<
  ListCloudVmClustersInput,
  ListCloudVmClustersOutput,
  ListCloudVmClustersError,
  Credentials | HttpClient.HttpClient,
  CloudVmClusterSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(182, __c22, 6) as any as S.Schema<ListCloudVmClustersInput>,
  output: __S(184, __c23, 0) as any as S.Schema<ListCloudVmClustersOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCloudVmClusters",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "cloudVmClusters",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDbNodesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the DB nodes for the specified VM cluster.
 */
export const listDbNodes: API.PaginatedOperationMethod<
  ListDbNodesInput,
  ListDbNodesOutput,
  ListDbNodesError,
  Credentials | HttpClient.HttpClient,
  DbNodeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(185, __c23, 1) as any as S.Schema<ListDbNodesInput>,
  output: __S(188, __c23, 4) as any as S.Schema<ListDbNodesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDbNodes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dbNodes",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDbServersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the database servers that belong to the specified Exadata infrastructure.
 */
export const listDbServers: API.PaginatedOperationMethod<
  ListDbServersInput,
  ListDbServersOutput,
  ListDbServersError,
  Credentials | HttpClient.HttpClient,
  DbServerSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(189, __c23, 5) as any as S.Schema<ListDbServersInput>,
  output: __S(191, __c23, 7) as any as S.Schema<ListDbServersOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDbServers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dbServers",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDbSystemShapesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the shapes that are available for an Exadata infrastructure.
 */
export const listDbSystemShapes: API.PaginatedOperationMethod<
  ListDbSystemShapesInput,
  ListDbSystemShapesOutput,
  ListDbSystemShapesError,
  Credentials | HttpClient.HttpClient,
  DbSystemShapeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(192, __c24, 0) as any as S.Schema<ListDbSystemShapesInput>,
  output: __S(195, __c24, 3) as any as S.Schema<ListDbSystemShapesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDbSystemShapes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dbSystemShapes",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListExadbVmClustersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the Exascale VM clusters owned by your Amazon Web Services account.
 */
export const listExadbVmClusters: API.PaginatedOperationMethod<
  ListExadbVmClustersInput,
  ListExadbVmClustersOutput,
  ListExadbVmClustersError,
  Credentials | HttpClient.HttpClient,
  ExadbVmClusterSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(196, __c24, 4) as any as S.Schema<ListExadbVmClustersInput>,
  output: __S(198, __c24, 6) as any as S.Schema<ListExadbVmClustersOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExadbVmClusters",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "exadbVmClusters",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListExascaleDbStorageVaultsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the Exascale storage vaults owned by your Amazon Web Services account.
 */
export const listExascaleDbStorageVaults: API.PaginatedOperationMethod<
  ListExascaleDbStorageVaultsInput,
  ListExascaleDbStorageVaultsOutput,
  ListExascaleDbStorageVaultsError,
  Credentials | HttpClient.HttpClient,
  ExascaleDbStorageVaultSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(199, __c24, 7) as any as S.Schema<ListExascaleDbStorageVaultsInput>,
  output: __S(202, __c25, 2) as any as S.Schema<ListExascaleDbStorageVaultsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExascaleDbStorageVaults",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "exascaleDbStorageVaults",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFlexComponentsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the flex components that are available for an Exadata infrastructure.
 */
export const listFlexComponents: API.PaginatedOperationMethod<
  ListFlexComponentsInput,
  ListFlexComponentsOutput,
  ListFlexComponentsError,
  Credentials | HttpClient.HttpClient,
  FlexComponentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(203, __c25, 3) as any as S.Schema<ListFlexComponentsInput>,
  output: __S(206, __c25, 6) as any as S.Schema<ListFlexComponentsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFlexComponents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "flexComponents",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListGiMinorVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the Oracle Grid Infrastructure (GI) minor versions for the specified major version.
 */
export const listGiMinorVersions: API.PaginatedOperationMethod<
  ListGiMinorVersionsInput,
  ListGiMinorVersionsOutput,
  ListGiMinorVersionsError,
  Credentials | HttpClient.HttpClient,
  GiMinorVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(207, __c25, 7) as any as S.Schema<ListGiMinorVersionsInput>,
  output: __S(210, __c26, 2) as any as S.Schema<ListGiMinorVersionsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGiMinorVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "giMinorVersions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListGiVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about Oracle Grid Infrastructure (GI) software versions that are available for a VM cluster for the specified shape.
 */
export const listGiVersions: API.PaginatedOperationMethod<
  ListGiVersionsInput,
  ListGiVersionsOutput,
  ListGiVersionsError,
  Credentials | HttpClient.HttpClient,
  GiVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(211, __c26, 3) as any as S.Schema<ListGiVersionsInput>,
  output: __S(214, __c26, 6) as any as S.Schema<ListGiVersionsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGiVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "giVersions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListOdbNetworksError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the ODB networks owned by your Amazon Web Services account.
 */
export const listOdbNetworks: API.PaginatedOperationMethod<
  ListOdbNetworksInput,
  ListOdbNetworksOutput,
  ListOdbNetworksError,
  Credentials | HttpClient.HttpClient,
  OdbNetworkSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(215, __c26, 7) as any as S.Schema<ListOdbNetworksInput>,
  output: __S(217, __c27, 1) as any as S.Schema<ListOdbNetworksOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOdbNetworks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "odbNetworks",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListOdbPeeringConnectionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all ODB peering connections or those associated with a specific ODB network.
 */
export const listOdbPeeringConnections: API.PaginatedOperationMethod<
  ListOdbPeeringConnectionsInput,
  ListOdbPeeringConnectionsOutput,
  ListOdbPeeringConnectionsError,
  Credentials | HttpClient.HttpClient,
  OdbPeeringConnectionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(218, __c27, 2) as any as S.Schema<ListOdbPeeringConnectionsInput>,
  output: __S(221, __c27, 5) as any as S.Schema<ListOdbPeeringConnectionsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOdbPeeringConnections",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "odbPeeringConnections",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSystemVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the system versions that are available for a VM cluster for the specified `giVersion` and `shape`.
 */
export const listSystemVersions: API.PaginatedOperationMethod<
  ListSystemVersionsInput,
  ListSystemVersionsOutput,
  ListSystemVersionsError,
  Credentials | HttpClient.HttpClient,
  SystemVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(222, __c27, 6) as any as S.Schema<ListSystemVersionsInput>,
  output: __S(225, __c28, 1) as any as S.Schema<ListSystemVersionsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSystemVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "systemVersions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError = ResourceNotFoundException | CommonErrors;
/**
 * Returns information about the tags applied to this resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(226, __c28, 2) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(227, __c28, 3) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type RebootAutonomousDatabaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Reboots the specified Autonomous Database.
 */
export const rebootAutonomousDatabase: API.OperationMethod<
  RebootAutonomousDatabaseInput,
  RebootAutonomousDatabaseOutput,
  RebootAutonomousDatabaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(228, __c28, 4) as any as S.Schema<RebootAutonomousDatabaseInput>,
  output: __S(29, __c3, 5) as any as S.Schema<RebootAutonomousDatabaseOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RebootAutonomousDatabase",
}));

export type RebootDbNodeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Reboots the specified DB node in a VM cluster.
 */
export const rebootDbNode: API.OperationMethod<
  RebootDbNodeInput,
  RebootDbNodeOutput,
  RebootDbNodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(229, __c28, 5) as any as S.Schema<RebootDbNodeInput>,
  output: __S(230, __c28, 6) as any as S.Schema<RebootDbNodeOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RebootDbNode",
}));

export type RestoreAutonomousDatabaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Restores the specified Autonomous Database to a point in time.
 */
export const restoreAutonomousDatabase: API.OperationMethod<
  RestoreAutonomousDatabaseInput,
  RestoreAutonomousDatabaseOutput,
  RestoreAutonomousDatabaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(231, __c28, 7) as any as S.Schema<RestoreAutonomousDatabaseInput>,
  output: __S(29, __c3, 5) as any as S.Schema<RestoreAutonomousDatabaseOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestoreAutonomousDatabase",
}));

export type ShrinkAutonomousDatabaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Shrinks the storage of the specified Autonomous Database to reclaim unused space.
 */
export const shrinkAutonomousDatabase: API.OperationMethod<
  ShrinkAutonomousDatabaseInput,
  ShrinkAutonomousDatabaseOutput,
  ShrinkAutonomousDatabaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(232, __c29, 0) as any as S.Schema<ShrinkAutonomousDatabaseInput>,
  output: __S(29, __c3, 5) as any as S.Schema<ShrinkAutonomousDatabaseOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ShrinkAutonomousDatabase",
}));

export type StartAutonomousDatabaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts the specified Autonomous Database.
 */
export const startAutonomousDatabase: API.OperationMethod<
  StartAutonomousDatabaseInput,
  StartAutonomousDatabaseOutput,
  StartAutonomousDatabaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(233, __c29, 1) as any as S.Schema<StartAutonomousDatabaseInput>,
  output: __S(29, __c3, 5) as any as S.Schema<StartAutonomousDatabaseOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartAutonomousDatabase",
}));

export type StartDbNodeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts the specified DB node in a VM cluster.
 */
export const startDbNode: API.OperationMethod<
  StartDbNodeInput,
  StartDbNodeOutput,
  StartDbNodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(234, __c29, 2) as any as S.Schema<StartDbNodeInput>,
  output: __S(230, __c28, 6) as any as S.Schema<StartDbNodeOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDbNode",
}));

export type StopAutonomousDatabaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops the specified Autonomous Database.
 */
export const stopAutonomousDatabase: API.OperationMethod<
  StopAutonomousDatabaseInput,
  StopAutonomousDatabaseOutput,
  StopAutonomousDatabaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(235, __c29, 3) as any as S.Schema<StopAutonomousDatabaseInput>,
  output: __S(29, __c3, 5) as any as S.Schema<StopAutonomousDatabaseOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopAutonomousDatabase",
}));

export type StopDbNodeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops the specified DB node in a VM cluster.
 */
export const stopDbNode: API.OperationMethod<
  StopDbNodeInput,
  StopDbNodeOutput,
  StopDbNodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(236, __c29, 4) as any as S.Schema<StopDbNodeInput>,
  output: __S(230, __c28, 6) as any as S.Schema<StopDbNodeOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopDbNode",
}));

export type SwitchoverAutonomousDatabaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Performs a switchover of the specified Autonomous Database to a standby peer database.
 */
export const switchoverAutonomousDatabase: API.OperationMethod<
  SwitchoverAutonomousDatabaseInput,
  SwitchoverAutonomousDatabaseOutput,
  SwitchoverAutonomousDatabaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(237, __c29, 5) as any as S.Schema<SwitchoverAutonomousDatabaseInput>,
  output: __S(29, __c3, 5) as any as S.Schema<SwitchoverAutonomousDatabaseOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SwitchoverAutonomousDatabase",
}));

export type TagResourceError =
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Applies tags to the specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(238, __c29, 6) as any as S.Schema<TagResourceRequest>,
  output: __S(51, __c6, 3) as any as S.Schema<TagResourceResponse>,
  errors: [ResourceNotFoundException, ServiceQuotaExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = ResourceNotFoundException | CommonErrors;
/**
 * Removes tags from the specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(239, __c29, 7) as any as S.Schema<UntagResourceRequest>,
  output: __S(51, __c6, 3) as any as S.Schema<UntagResourceResponse>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAutonomousDatabaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the properties of an Autonomous Database.
 */
export const updateAutonomousDatabase: API.OperationMethod<
  UpdateAutonomousDatabaseInput,
  UpdateAutonomousDatabaseOutput,
  UpdateAutonomousDatabaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(240, __c30, 0) as any as S.Schema<UpdateAutonomousDatabaseInput>,
  output: __S(29, __c3, 5) as any as S.Schema<UpdateAutonomousDatabaseOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAutonomousDatabase",
}));

export type UpdateAutonomousDatabaseBackupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the properties of an Autonomous Database backup.
 */
export const updateAutonomousDatabaseBackup: API.OperationMethod<
  UpdateAutonomousDatabaseBackupInput,
  UpdateAutonomousDatabaseBackupOutput,
  UpdateAutonomousDatabaseBackupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(241, __c30, 1) as any as S.Schema<UpdateAutonomousDatabaseBackupInput>,
  output: __S(31, __c3, 7) as any as S.Schema<UpdateAutonomousDatabaseBackupOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAutonomousDatabaseBackup",
}));

export type UpdateCloudExadataInfrastructureError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the properties of an Exadata infrastructure resource.
 */
export const updateCloudExadataInfrastructure: API.OperationMethod<
  UpdateCloudExadataInfrastructureInput,
  UpdateCloudExadataInfrastructureOutput,
  UpdateCloudExadataInfrastructureError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(242, __c30, 2) as any as S.Schema<UpdateCloudExadataInfrastructureInput>,
  output: __S(39, __c4, 7) as any as S.Schema<UpdateCloudExadataInfrastructureOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCloudExadataInfrastructure",
}));

export type UpdateExadbVmClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified Exascale VM cluster.
 */
export const updateExadbVmCluster: API.OperationMethod<
  UpdateExadbVmClusterInput,
  UpdateExadbVmClusterOutput,
  UpdateExadbVmClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(243, __c30, 3) as any as S.Schema<UpdateExadbVmClusterInput>,
  output: __S(4, __c0, 4) as any as S.Schema<UpdateExadbVmClusterOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateExadbVmCluster",
}));

export type UpdateExascaleDbStorageVaultError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified Exascale storage vault.
 */
export const updateExascaleDbStorageVault: API.OperationMethod<
  UpdateExascaleDbStorageVaultInput,
  UpdateExascaleDbStorageVaultOutput,
  UpdateExascaleDbStorageVaultError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(244, __c30, 4) as any as S.Schema<UpdateExascaleDbStorageVaultInput>,
  output: __S(45, __c5, 5) as any as S.Schema<UpdateExascaleDbStorageVaultOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateExascaleDbStorageVault",
}));

export type UpdateOdbNetworkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates properties of a specified ODB network.
 */
export const updateOdbNetwork: API.OperationMethod<
  UpdateOdbNetworkInput,
  UpdateOdbNetworkOutput,
  UpdateOdbNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(245, __c30, 5) as any as S.Schema<UpdateOdbNetworkInput>,
  output: __S(47, __c5, 7) as any as S.Schema<UpdateOdbNetworkOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOdbNetwork",
}));

export type UpdateOdbPeeringConnectionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Modifies the settings of an Oracle Database@Amazon Web Services peering connection. You can update the display name and add or remove CIDR blocks from the peering connection.
 */
export const updateOdbPeeringConnection: API.OperationMethod<
  UpdateOdbPeeringConnectionInput,
  UpdateOdbPeeringConnectionOutput,
  UpdateOdbPeeringConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(246, __c30, 6) as any as S.Schema<UpdateOdbPeeringConnectionInput>,
  output: __S(49, __c6, 1) as any as S.Schema<UpdateOdbPeeringConnectionOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOdbPeeringConnection",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ marketplaceRegistrationToken: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AcceptMarketplaceRegistrationInput",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AcceptMarketplaceRegistrationOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          iamRoleArn: S.String,
          awsIntegration: S.String,
          resourceArn: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AssociateIamRoleToResourceInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ exadbVmClusterId: S.String, desiredNodeCount: S.Number }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateVirtualMachinesToExadbVmClusterInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          exadbVmClusterId: S.String,
        }),
      ).annotate({
        identifier: "AssociateVirtualMachinesToExadbVmClusterOutput",
      });
    case 5:
      return S.suspend(() => S.Struct({ email: S.optional(SensitiveString) })).annotate({
        identifier: "CustomerContact",
      });
    case 6:
      return S.Array(__S(5, __c0, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          isDisabled: S.optional(S.Boolean),
          poolSize: S.optional(S.Number),
          poolStorageSizeInTBs: S.optional(S.Number),
          availableStorageCapacityInTBs: S.optional(S.Number),
          totalComputeCapacity: S.optional(S.Number),
          availableComputeCapacity: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ResourcePoolSummary" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.optional(S.String) })).annotate({
        identifier: "DayOfWeek",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          dayOfWeek: __S(8, __c1, 0),
          scheduledStartTime: S.optional(S.String),
          scheduledStopTime: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ScheduledOperationDetails",
      });
    case 2:
      return S.Array(__S(9, __c1, 1));
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() => S.Struct({ ttsBundleUrl: S.optional(S.String) })).annotate({
        identifier: "TransportableTablespace",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          isEnabled: S.optional(S.Boolean),
          name: S.optional(S.String),
          computeCount: S.optional(S.Number),
          maxIdleTimeInMinutes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DatabaseTool" });
    case 6:
      return S.Array(__S(13, __c1, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ sourceAutonomousDatabaseId: S.String, cloneType: S.String }),
      ).annotate({
        identifier: "DatabaseCloneConfiguration",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.Number);
    case 1:
      return S.suspend(() =>
        S.Struct({
          autonomousDatabaseBackupId: S.String,
          cloneType: S.String,
          cloneTableSpaceList: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({
        identifier: "RestoreFromBackupConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          sourceAutonomousDatabaseId: S.String,
          cloneType: S.String,
          timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          useLatestAvailableBackupTimestamp: S.optional(S.Boolean),
          cloneTableSpaceList: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({
        identifier: "PointInTimeRestoreConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ sourceAutonomousDatabaseArn: S.String })).annotate({
        identifier: "CrossRegionDataGuardConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sourceAutonomousDatabaseArn: S.String,
          remoteDisasterRecoveryType: S.String,
          isReplicateAutomaticBackups: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "CrossRegionDisasterRecoveryConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceAutonomousDatabaseId: S.String,
          refreshableMode: S.optional(S.String),
          autoRefreshFrequencyInSeconds: S.optional(S.Number),
          autoRefreshPointLagInSeconds: S.optional(S.Number),
          timeOfAutoRefreshStart: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          openMode: S.optional(S.String),
          cloneType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CloneToRefreshableConfiguration",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ databaseClone: __S(15, __c1, 7) }),
        /*@__PURE__*/ S.Struct({ restoreFromBackup: __S(17, __c2, 1) }),
        /*@__PURE__*/ S.Struct({ pointInTimeRestore: __S(18, __c2, 2) }),
        /*@__PURE__*/ S.Struct({ crossRegionDataGuard: __S(19, __c2, 3) }),
        /*@__PURE__*/ S.Struct({
          crossRegionDisasterRecovery: __S(20, __c2, 4),
        }),
        /*@__PURE__*/ S.Struct({ cloneToRefreshable: __S(21, __c2, 5) }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          iamRoleArn: S.optional(S.String),
          externalIdType: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEncryptionKeyConfigurationInput",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ awsEncryptionKey: __S(23, __c2, 7) })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          secretId: S.optional(S.String),
          iamRoleArn: S.optional(S.String),
          externalIdType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CustomerManagedAwsSecretConfigurationInput",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          customerManagedAwsSecret: __S(25, __c3, 1),
        }),
      ]);
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          odbNetworkId: S.optional(S.String),
          displayName: S.optional(S.String),
          dbName: S.optional(S.String),
          adminPassword: S.optional(SensitiveString),
          computeCount: S.optional(S.Number),
          dataStorageSizeInTBs: S.optional(S.Number),
          dataStorageSizeInGBs: S.optional(S.Number),
          dbWorkload: S.optional(S.String),
          isAutoScalingEnabled: S.optional(S.Boolean),
          isAutoScalingForStorageEnabled: S.optional(S.Boolean),
          licenseModel: S.optional(S.String),
          characterSet: S.optional(S.String),
          ncharacterSet: S.optional(S.String),
          dbVersion: S.optional(S.String),
          databaseEdition: S.optional(S.String),
          standbyAllowlistedIpsSource: S.optional(S.String),
          autonomousMaintenanceScheduleType: S.optional(S.String),
          backupRetentionPeriodInDays: S.optional(S.Number),
          byolComputeCountLimit: S.optional(S.Number),
          cpuCoreCount: S.optional(S.Number),
          customerContactsToSendToOCI: S.optional(__S(6, __c0, 6)),
          privateEndpointIp: S.optional(S.String),
          privateEndpointLabel: S.optional(S.String),
          resourcePoolLeaderId: S.optional(S.String),
          resourcePoolSummary: S.optional(__S(7, __c0, 7)),
          scheduledOperations: S.optional(__S(10, __c1, 2)),
          standbyAllowlistedIps: S.optional(__S(11, __c1, 3)),
          allowlistedIps: S.optional(__S(11, __c1, 3)),
          transportableTablespace: S.optional(__S(12, __c1, 4)),
          isBackupRetentionLocked: S.optional(S.Boolean),
          isLocalDataGuardEnabled: S.optional(S.Boolean),
          isMtlsConnectionRequired: S.optional(S.Boolean),
          dbToolsDetails: S.optional(__S(14, __c1, 6)),
          source: S.optional(S.String),
          sourceConfiguration: S.optional(__S(22, __c2, 6)),
          encryptionKeyProvider: S.optional(S.String),
          encryptionKeyConfiguration: S.optional(__S(24, __c3, 0)),
          adminPasswordSource: S.optional(S.String),
          adminPasswordSourceConfiguration: S.optional(__S(26, __c3, 2)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(27, __c3, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateAutonomousDatabaseInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          autonomousDatabaseId: S.String,
          displayName: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateAutonomousDatabaseOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          autonomousDatabaseId: S.String,
          displayName: S.optional(S.String),
          retentionPeriodInDays: S.optional(S.Number),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(27, __c3, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateAutonomousDatabaseBackupInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          autonomousDatabaseBackupId: S.String,
        }),
      ).annotate({
        identifier: "CreateAutonomousDatabaseBackupOutput",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          autonomousDatabaseId: S.String,
          walletType: S.optional(S.String),
          password: S.optional(SensitiveString),
          passwordSource: S.optional(S.String),
          passwordSourceConfiguration: S.optional(__S(26, __c3, 2)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateAutonomousDatabaseWalletInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ autonomousDatabaseWalletFile: SensitiveBlob })).annotate({
        identifier: "CreateAutonomousDatabaseWalletOutput",
      });
    case 2:
      return S.Array(__S(8, __c1, 0));
    case 3:
      return S.suspend(() =>
        S.Struct({
          customActionTimeoutInMins: S.optional(S.Number),
          daysOfWeek: S.optional(__S(34, __c4, 2)),
          hoursOfDay: S.optional(__S(16, __c2, 0)),
          isCustomActionTimeoutEnabled: S.optional(S.Boolean),
          leadTimeInWeeks: S.optional(S.Number),
          months: S.optional(__S(34, __c4, 2)),
          patchingMode: S.optional(S.String),
          preference: S.optional(S.String),
          skipRu: S.optional(S.Boolean),
          weeksOfMonth: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({ identifier: "MaintenanceWindow" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          cloudExadataInfrastructureId: S.String,
          odbNetworkId: S.String,
          displayName: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          autonomousDataStorageSizeInTBs: S.Number,
          cpuCoreCountPerNode: S.Number,
          dbServers: S.optional(__S(11, __c1, 3)),
          description: S.optional(S.String),
          isMtlsEnabledVmCluster: S.optional(S.Boolean),
          licenseModel: S.optional(S.String),
          maintenanceWindow: S.optional(__S(35, __c4, 3)),
          memoryPerOracleComputeUnitInGBs: S.Number,
          scanListenerPortNonTls: S.optional(S.Number),
          scanListenerPortTls: S.optional(S.Number),
          tags: S.optional(__S(27, __c3, 3)),
          timeZone: S.optional(S.String),
          totalContainerDatabases: S.Number,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateCloudAutonomousVmClusterInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          cloudAutonomousVmClusterId: S.String,
        }),
      ).annotate({
        identifier: "CreateCloudAutonomousVmClusterOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          displayName: S.String,
          shape: S.String,
          availabilityZone: S.optional(S.String),
          availabilityZoneId: S.optional(S.String),
          tags: S.optional(__S(27, __c3, 3)),
          computeCount: S.Number,
          customerContactsToSendToOCI: S.optional(__S(6, __c0, 6)),
          maintenanceWindow: S.optional(__S(35, __c4, 3)),
          storageCount: S.Number,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          databaseServerType: S.optional(S.String),
          storageServerType: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateCloudExadataInfrastructureInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          cloudExadataInfrastructureId: S.String,
        }),
      ).annotate({
        identifier: "CreateCloudExadataInfrastructureOutput",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          isDiagnosticsEventsEnabled: S.optional(S.Boolean),
          isHealthMonitoringEnabled: S.optional(S.Boolean),
          isIncidentLogsEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DataCollectionOptions" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          cloudExadataInfrastructureId: S.String,
          cpuCoreCount: S.Number,
          displayName: S.String,
          giVersion: S.String,
          hostname: S.String,
          sshPublicKeys: __S(11, __c1, 3),
          odbNetworkId: S.String,
          clusterName: S.optional(S.String),
          dataCollectionOptions: S.optional(__S(40, __c5, 0)),
          dataStorageSizeInTBs: S.optional(S.Number),
          dbNodeStorageSizeInGBs: S.optional(S.Number),
          dbServers: S.optional(__S(11, __c1, 3)),
          tags: S.optional(__S(27, __c3, 3)),
          isLocalBackupEnabled: S.optional(S.Boolean),
          isSparseDiskgroupEnabled: S.optional(S.Boolean),
          licenseModel: S.optional(S.String),
          memorySizeInGBs: S.optional(S.Number),
          systemVersion: S.optional(S.String),
          timeZone: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          scanListenerPortTcp: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateCloudVmClusterInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          cloudVmClusterId: S.String,
        }),
      ).annotate({
        identifier: "CreateCloudVmClusterOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          displayName: S.String,
          enabledEcpuCount: S.Number,
          exascaleDbStorageVaultId: S.String,
          gridImageId: S.String,
          hostname: S.String,
          nodeCount: S.Number,
          odbNetworkId: S.String,
          shape: S.String,
          sshPublicKeys: __S(11, __c1, 3),
          totalEcpuCount: S.Number,
          vmFileSystemStorageTotalSizeInGBs: S.Number,
          clusterName: S.optional(S.String),
          dataCollectionOptions: S.optional(__S(40, __c5, 0)),
          licenseModel: S.optional(S.String),
          scanListenerPortTcp: S.optional(S.Number),
          scanListenerPortTcpSsl: S.optional(S.Number),
          shapeAttribute: S.optional(S.String),
          systemVersion: S.optional(S.String),
          tags: S.optional(__S(27, __c3, 3)),
          timeZone: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateExadbVmClusterInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          displayName: S.String,
          highCapacityDatabaseStorageTotalSizeInGBs: S.Number,
          additionalFlashCacheInPercent: S.optional(S.Number),
          autoscaleLimitInGBs: S.optional(S.Number),
          availabilityZoneId: S.optional(S.String),
          availabilityZone: S.optional(S.String),
          description: S.optional(S.String),
          isAutoscaleEnabled: S.optional(S.Boolean),
          tags: S.optional(__S(27, __c3, 3)),
          timeZone: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateExascaleDbStorageVaultInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          exascaleDbStorageVaultId: S.String,
        }),
      ).annotate({
        identifier: "CreateExascaleDbStorageVaultOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          displayName: S.String,
          availabilityZone: S.optional(S.String),
          availabilityZoneId: S.optional(S.String),
          clientSubnetCidr: S.String,
          backupSubnetCidr: S.optional(S.String),
          customDomainName: S.optional(S.String),
          defaultDnsPrefix: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          s3Access: S.optional(S.String),
          zeroEtlAccess: S.optional(S.String),
          stsAccess: S.optional(S.String),
          kmsAccess: S.optional(S.String),
          s3PolicyDocument: S.optional(S.String),
          stsPolicyDocument: S.optional(S.String),
          kmsPolicyDocument: S.optional(S.String),
          crossRegionS3RestoreSourcesToEnable: S.optional(__S(11, __c1, 3)),
          tags: S.optional(__S(27, __c3, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateOdbNetworkInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          odbNetworkId: S.String,
        }),
      ).annotate({ identifier: "CreateOdbNetworkOutput" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          odbNetworkId: S.String,
          peerNetworkId: S.String,
          displayName: S.optional(S.String),
          peerNetworkCidrsToBeAdded: S.optional(__S(11, __c1, 3)),
          peerNetworkRouteTableIds: S.optional(__S(11, __c1, 3)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(27, __c3, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateOdbPeeringConnectionInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          odbPeeringConnectionId: S.String,
        }),
      ).annotate({
        identifier: "CreateOdbPeeringConnectionOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ autonomousDatabaseId: S.String.pipe(T.HttpLabel("autonomousDatabaseId")) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAutonomousDatabaseInput",
      });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAutonomousDatabaseOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          autonomousDatabaseBackupId: S.String.pipe(T.HttpLabel("autonomousDatabaseBackupId")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteAutonomousDatabaseBackupInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          cloudAutonomousVmClusterId: S.String.pipe(T.HttpLabel("cloudAutonomousVmClusterId")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteCloudAutonomousVmClusterInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          cloudExadataInfrastructureId: S.String.pipe(T.HttpLabel("cloudExadataInfrastructureId")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteCloudExadataInfrastructureInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ cloudVmClusterId: S.String.pipe(T.HttpLabel("cloudVmClusterId")) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteCloudVmClusterInput",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ exadbVmClusterId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteExadbVmClusterInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ exascaleDbStorageVaultId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteExascaleDbStorageVaultInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          odbNetworkId: S.String.pipe(T.HttpLabel("odbNetworkId")),
          deleteAssociatedResources: S.Boolean,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteOdbNetworkInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          odbPeeringConnectionId: S.String.pipe(T.HttpLabel("odbPeeringConnectionId")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteOdbPeeringConnectionInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          iamRoleArn: S.String,
          awsIntegration: S.String,
          resourceArn: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DisassociateIamRoleFromResourceInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ exadbVmClusterId: S.String, dbNodeIds: __S(11, __c1, 3) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateVirtualMachinesFromExadbVmClusterInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ autonomousDatabaseId: S.String, peerDbArn: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "FailoverAutonomousDatabaseInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ autonomousDatabaseId: S.String.pipe(T.HttpLabel("autonomousDatabaseId")) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetAutonomousDatabaseInput",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          consumerGroup: S.optional(S.String),
          displayName: S.optional(S.String),
          hostFormat: S.optional(S.String),
          isRegional: S.optional(S.Boolean),
          protocol: S.optional(S.String),
          sessionMode: S.optional(S.String),
          syntaxFormat: S.optional(S.String),
          tlsAuthentication: S.optional(S.String),
          value: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DatabaseConnectionStringProfile",
      });
    case 1:
      return S.Array(__S(64, __c8, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          allConnectionStrings: S.optional(__S(27, __c3, 3)),
          dedicated: S.optional(S.String),
          high: S.optional(S.String),
          medium: S.optional(S.String),
          low: S.optional(S.String),
          profiles: S.optional(__S(65, __c8, 1)),
        }),
      ).annotate({
        identifier: "AutonomousDatabaseConnectionStrings",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ apexVersion: S.optional(S.String), ordsVersion: S.optional(S.String) }),
      ).annotate({ identifier: "AutonomousDatabaseApex" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          availabilityDomain: S.optional(S.String),
          lagTimeInSeconds: S.optional(S.Number),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          maintenanceTargetComponent: S.optional(S.String),
          timeDataGuardRoleChanged: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeDisasterRecoveryRoleChanged: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeMaintenanceBegin: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeMaintenanceEnd: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "DatabaseStandbySummary" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          apexUrl: S.optional(S.String),
          databaseTransformsUrl: S.optional(S.String),
          graphStudioUrl: S.optional(S.String),
          machineLearningNotebookUrl: S.optional(S.String),
          machineLearningUserManagementUrl: S.optional(S.String),
          mongoDbUrl: S.optional(S.String),
          ordsUrl: S.optional(S.String),
          spatialStudioUrl: S.optional(S.String),
          sqlDevWebUrl: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AutonomousDatabaseConnectionUrls",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          disasterRecoveryType: S.optional(S.String),
          isReplicateAutomaticBackups: S.optional(S.Boolean),
          isSnapshotStandby: S.optional(S.Boolean),
          timeSnapshotStandbyEnabledTill: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
        }),
      ).annotate({
        identifier: "DisasterRecoveryConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          isDisabled: S.optional(S.Boolean),
          repeatCadence: S.optional(S.String),
          retentionPeriodInDays: S.optional(S.Number),
          timeOfBackup: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "LongTermBackupSchedule" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ kmsKeyId: S.String, vaultId: S.String })).annotate({
        identifier: "OciEncryptionKeyConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          certificateDirectoryName: S.String,
          certificateId: S.optional(S.String),
          directoryName: S.String,
          okvKmsKey: S.String,
          okvUri: S.String,
        }),
      ).annotate({
        identifier: "OkvEncryptionKeyConfiguration",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ awsEncryptionKey: __S(23, __c2, 7) }),
        /*@__PURE__*/ S.Struct({ ociEncryptionKey: __S(72, __c9, 0) }),
        /*@__PURE__*/ S.Struct({ okvEncryptionKey: __S(73, __c9, 1) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          encryptionKeyProvider: S.optional(S.String),
          encryptionKeyConfiguration: S.optional(__S(74, __c9, 2)),
        }),
      ).annotate({ identifier: "EncryptionSummary" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          iamRoleArn: S.optional(S.String),
          secretId: S.optional(S.String),
          externalIdType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CustomerManagedAwsSecretConfiguration",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ customerManagedAwsSecret: __S(76, __c9, 4) })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          adminPasswordSource: S.optional(S.String),
          adminPasswordSourceConfiguration: S.optional(__S(77, __c9, 5)),
        }),
      ).annotate({
        identifier: "AdminPasswordSourceSummary",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          autonomousDatabaseId: S.optional(S.String),
          autonomousDatabaseArn: S.optional(S.String),
          ociResourceAnchorName: S.optional(S.String),
          percentProgress: S.optional(S.Number),
          ocid: S.optional(S.String),
          ociUrl: S.optional(S.String),
          displayName: S.optional(S.String),
          dbName: S.optional(S.String),
          sourceId: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          databaseType: S.optional(S.String),
          dbVersion: S.optional(S.String),
          dbWorkload: S.optional(S.String),
          characterSet: S.optional(S.String),
          ncharacterSet: S.optional(S.String),
          databaseEdition: S.optional(S.String),
          licenseModel: S.optional(S.String),
          openMode: S.optional(S.String),
          permissionLevel: S.optional(S.String),
          isMtlsConnectionRequired: S.optional(S.Boolean),
          autonomousMaintenanceScheduleType: S.optional(S.String),
          netServicesArchitecture: S.optional(S.String),
          availableUpgradeVersions: S.optional(__S(11, __c1, 3)),
          byolComputeCountLimit: S.optional(S.Number),
          connectionStringDetails: S.optional(__S(66, __c8, 2)),
          serviceConsoleUrl: S.optional(S.String),
          sqlWebDeveloperUrl: S.optional(S.String),
          customerContacts: S.optional(__S(6, __c0, 6)),
          apexDetails: S.optional(__S(67, __c8, 3)),
          standbyDb: S.optional(__S(68, __c8, 4)),
          localStandbyDb: S.optional(__S(68, __c8, 4)),
          dataSafeStatus: S.optional(S.String),
          databaseManagementStatus: S.optional(S.String),
          operationsInsightsStatus: S.optional(S.String),
          availabilityZone: S.optional(S.String),
          availabilityZoneId: S.optional(S.String),
          maintenanceTargetComponent: S.optional(S.String),
          connectionUrls: S.optional(__S(69, __c8, 5)),
          dbToolsDetails: S.optional(__S(14, __c1, 6)),
          scheduledOperations: S.optional(__S(10, __c1, 2)),
          resourcePoolLeaderId: S.optional(S.String),
          computeCount: S.optional(S.Number),
          computeModel: S.optional(S.String),
          cpuCoreCount: S.optional(S.Number),
          memoryPerOracleComputeUnitInGBs: S.optional(S.Number),
          provisionableCpus: S.optional(__S(16, __c2, 0)),
          isAutoScalingEnabled: S.optional(S.Boolean),
          dataStorageSizeInTBs: S.optional(S.Number),
          dataStorageSizeInGBs: S.optional(S.Number),
          usedDataStorageSizeInTBs: S.optional(S.Number),
          usedDataStorageSizeInGBs: S.optional(S.Number),
          actualUsedDataStorageSizeInTBs: S.optional(S.Number),
          allocatedStorageSizeInTBs: S.optional(S.Number),
          inMemoryAreaInGBs: S.optional(S.Number),
          isAutoScalingForStorageEnabled: S.optional(S.Boolean),
          odbNetworkId: S.optional(S.String),
          odbNetworkArn: S.optional(S.String),
          privateEndpoint: S.optional(S.String),
          privateEndpointIp: S.optional(S.String),
          privateEndpointLabel: S.optional(S.String),
          allowlistedIps: S.optional(__S(11, __c1, 3)),
          standbyAllowlistedIps: S.optional(__S(11, __c1, 3)),
          standbyAllowlistedIpsSource: S.optional(S.String),
          isLocalDataGuardEnabled: S.optional(S.Boolean),
          isRemoteDataGuardEnabled: S.optional(S.Boolean),
          localDisasterRecoveryType: S.optional(S.String),
          role: S.optional(S.String),
          peerDbIds: S.optional(__S(11, __c1, 3)),
          failedDataRecoveryInSeconds: S.optional(S.Number),
          localAdgAutoFailoverMaxDataLossLimit: S.optional(S.Number),
          remoteDisasterRecoveryConfiguration: S.optional(__S(70, __c8, 6)),
          isRefreshableClone: S.optional(S.Boolean),
          refreshableMode: S.optional(S.String),
          refreshableStatus: S.optional(S.String),
          autoRefreshFrequencyInSeconds: S.optional(S.Number),
          autoRefreshPointLagInSeconds: S.optional(S.Number),
          isReconnectCloneEnabled: S.optional(S.Boolean),
          cloneTableSpaceList: S.optional(__S(16, __c2, 0)),
          backupRetentionPeriodInDays: S.optional(S.Number),
          longTermBackupSchedule: S.optional(__S(71, __c8, 7)),
          isBackupRetentionLocked: S.optional(S.Boolean),
          totalBackupStorageSizeInGBs: S.optional(S.Number),
          resourcePoolSummary: S.optional(__S(7, __c0, 7)),
          encryptionSummary: S.optional(__S(75, __c9, 3)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeOfLastBackup: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeMaintenanceBegin: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeMaintenanceEnd: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeLocalDataGuardEnabled: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeDataGuardRoleChanged: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeOfLastSwitchover: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeOfLastFailover: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeOfLastRefresh: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeOfLastRefreshPoint: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeOfNextRefresh: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeOfAutoRefreshStart: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeDeletionOfFreeAutonomousDatabase: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeReclamationOfFreeAutonomousDatabase: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeDisasterRecoveryRoleChanged: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeUntilReconnectCloneEnabled: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          nextLongTermBackupTimeStamp: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeUndeleted: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          adminPasswordSourceSummary: S.optional(__S(78, __c9, 6)),
        }),
      ).annotate({ identifier: "AutonomousDatabase" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ autonomousDatabase: __S(79, __c9, 7) })).annotate({
        identifier: "GetAutonomousDatabaseOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          autonomousDatabaseBackupId: S.String.pipe(T.HttpLabel("autonomousDatabaseBackupId")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetAutonomousDatabaseBackupInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          autonomousDatabaseBackupId: S.optional(S.String),
          autonomousDatabaseBackupArn: S.optional(S.String),
          autonomousDatabaseId: S.optional(S.String),
          ocid: S.optional(S.String),
          displayName: S.optional(S.String),
          dbVersion: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          isAutomatic: S.optional(S.Boolean),
          retentionPeriodInDays: S.optional(S.Number),
          sizeInTBs: S.optional(S.Number),
          timeAvailableTill: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeStarted: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeEnded: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "AutonomousDatabaseBackup" });
    case 3:
      return S.suspend(() =>
        S.Struct({ autonomousDatabaseBackup: S.optional(__S(82, __c10, 2)) }),
      ).annotate({
        identifier: "GetAutonomousDatabaseBackupOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ autonomousDatabaseId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetAutonomousDatabaseWalletDetailsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          passwordSource: S.optional(S.String),
          passwordSourceConfiguration: S.optional(__S(77, __c9, 5)),
        }),
      ).annotate({
        identifier: "WalletPasswordSourceSummary",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          timeRotated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          passwordSourceSummary: S.optional(__S(85, __c10, 5)),
        }),
      ).annotate({
        identifier: "AutonomousDatabaseWalletDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ autonomousDatabaseWalletDetails: __S(86, __c10, 6) }),
      ).annotate({
        identifier: "GetAutonomousDatabaseWalletDetailsOutput",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          cloudAutonomousVmClusterId: S.String.pipe(T.HttpLabel("cloudAutonomousVmClusterId")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetCloudAutonomousVmClusterInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          iamRoleArn: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          awsIntegration: S.optional(S.String),
        }),
      ).annotate({ identifier: "IamRole" });
    case 2:
      return S.Array(__S(89, __c11, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          cloudAutonomousVmClusterId: S.String,
          cloudAutonomousVmClusterArn: S.optional(S.String),
          odbNetworkId: S.optional(S.String),
          odbNetworkArn: S.optional(S.String),
          ociResourceAnchorName: S.optional(S.String),
          percentProgress: S.optional(S.Number),
          displayName: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          cloudExadataInfrastructureId: S.optional(S.String),
          cloudExadataInfrastructureArn: S.optional(S.String),
          autonomousDataStoragePercentage: S.optional(S.Number),
          autonomousDataStorageSizeInTBs: S.optional(S.Number),
          availableAutonomousDataStorageSizeInTBs: S.optional(S.Number),
          availableContainerDatabases: S.optional(S.Number),
          availableCpus: S.optional(S.Number),
          computeModel: S.optional(S.String),
          cpuCoreCount: S.optional(S.Number),
          cpuCoreCountPerNode: S.optional(S.Number),
          cpuPercentage: S.optional(S.Number),
          dataStorageSizeInGBs: S.optional(S.Number),
          dataStorageSizeInTBs: S.optional(S.Number),
          dbNodeStorageSizeInGBs: S.optional(S.Number),
          dbServers: S.optional(__S(11, __c1, 3)),
          description: S.optional(S.String),
          domain: S.optional(S.String),
          exadataStorageInTBsLowestScaledValue: S.optional(S.Number),
          hostname: S.optional(S.String),
          ocid: S.optional(S.String),
          ociUrl: S.optional(S.String),
          isMtlsEnabledVmCluster: S.optional(S.Boolean),
          licenseModel: S.optional(S.String),
          maintenanceWindow: S.optional(__S(35, __c4, 3)),
          maxAcdsLowestScaledValue: S.optional(S.Number),
          memoryPerOracleComputeUnitInGBs: S.optional(S.Number),
          memorySizeInGBs: S.optional(S.Number),
          nodeCount: S.optional(S.Number),
          nonProvisionableAutonomousContainerDatabases: S.optional(S.Number),
          provisionableAutonomousContainerDatabases: S.optional(S.Number),
          provisionedAutonomousContainerDatabases: S.optional(S.Number),
          provisionedCpus: S.optional(S.Number),
          reclaimableCpus: S.optional(S.Number),
          reservedCpus: S.optional(S.Number),
          scanListenerPortNonTls: S.optional(S.Number),
          scanListenerPortTls: S.optional(S.Number),
          shape: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeDatabaseSslCertificateExpires: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeOrdsCertificateExpires: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeZone: S.optional(S.String),
          totalContainerDatabases: S.optional(S.Number),
          iamRoles: S.optional(__S(90, __c11, 2)),
        }),
      ).annotate({ identifier: "CloudAutonomousVmCluster" });
    case 4:
      return S.suspend(() =>
        S.Struct({ cloudAutonomousVmCluster: S.optional(__S(91, __c11, 3)) }),
      ).annotate({
        identifier: "GetCloudAutonomousVmClusterOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          cloudExadataInfrastructureId: S.String.pipe(T.HttpLabel("cloudExadataInfrastructureId")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetCloudExadataInfrastructureInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          cloudExadataInfrastructureId: S.String,
          displayName: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          cloudExadataInfrastructureArn: S.optional(S.String),
          activatedStorageCount: S.optional(S.Number),
          additionalStorageCount: S.optional(S.Number),
          availableStorageSizeInGBs: S.optional(S.Number),
          availabilityZone: S.optional(S.String),
          availabilityZoneId: S.optional(S.String),
          computeCount: S.optional(S.Number),
          cpuCount: S.optional(S.Number),
          customerContactsToSendToOCI: S.optional(__S(6, __c0, 6)),
          dataStorageSizeInTBs: S.optional(S.Number),
          dbNodeStorageSizeInGBs: S.optional(S.Number),
          dbServerVersion: S.optional(S.String),
          lastMaintenanceRunId: S.optional(S.String),
          maintenanceWindow: S.optional(__S(35, __c4, 3)),
          maxCpuCount: S.optional(S.Number),
          maxDataStorageInTBs: S.optional(S.Number),
          maxDbNodeStorageSizeInGBs: S.optional(S.Number),
          maxMemoryInGBs: S.optional(S.Number),
          memorySizeInGBs: S.optional(S.Number),
          monthlyDbServerVersion: S.optional(S.String),
          monthlyStorageServerVersion: S.optional(S.String),
          nextMaintenanceRunId: S.optional(S.String),
          ociResourceAnchorName: S.optional(S.String),
          ociUrl: S.optional(S.String),
          ocid: S.optional(S.String),
          shape: S.optional(S.String),
          storageCount: S.optional(S.Number),
          storageServerVersion: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          totalStorageSizeInGBs: S.optional(S.Number),
          percentProgress: S.optional(S.Number),
          databaseServerType: S.optional(S.String),
          storageServerType: S.optional(S.String),
          computeModel: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CloudExadataInfrastructure",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ cloudExadataInfrastructure: S.optional(__S(94, __c11, 6)) }),
      ).annotate({
        identifier: "GetCloudExadataInfrastructureOutput",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          cloudExadataInfrastructureId: S.String.pipe(T.HttpLabel("cloudExadataInfrastructureId")),
          dbServers: S.optional(__S(11, __c1, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetCloudExadataInfrastructureUnallocatedResourcesInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          cloudAutonomousVmClusterId: S.optional(S.String),
          unallocatedAdbStorageInTBs: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CloudAutonomousVmClusterResourceDetails",
      });
    case 2:
      return S.Array(__S(97, __c12, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          cloudAutonomousVmClusters: S.optional(__S(98, __c12, 2)),
          cloudExadataInfrastructureDisplayName: S.optional(S.String),
          exadataStorageInTBs: S.optional(S.Number),
          cloudExadataInfrastructureId: S.optional(S.String),
          localStorageInGBs: S.optional(S.Number),
          memoryInGBs: S.optional(S.Number),
          ocpus: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CloudExadataInfrastructureUnallocatedResources",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          cloudExadataInfrastructureUnallocatedResources: S.optional(__S(99, __c12, 3)),
        }),
      ).annotate({
        identifier: "GetCloudExadataInfrastructureUnallocatedResourcesOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ cloudVmClusterId: S.String.pipe(T.HttpLabel("cloudVmClusterId")) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetCloudVmClusterInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          dbName: S.optional(S.String),
          flashCacheLimit: S.optional(S.String),
          share: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DbIormConfig" });
    case 7:
      return S.Array(__S(102, __c12, 6));
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          dbPlans: S.optional(__S(103, __c12, 7)),
          lifecycleDetails: S.optional(S.String),
          lifecycleState: S.optional(S.String),
          objective: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExadataIormConfig" });
    case 1:
      return S.Array(SensitiveString);
    case 2:
      return S.suspend(() =>
        S.Struct({
          cloudVmClusterId: S.String,
          displayName: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          cloudVmClusterArn: S.optional(S.String),
          cloudExadataInfrastructureId: S.optional(S.String),
          cloudExadataInfrastructureArn: S.optional(S.String),
          clusterName: S.optional(S.String),
          cpuCoreCount: S.optional(S.Number),
          dataCollectionOptions: S.optional(__S(40, __c5, 0)),
          dataStorageSizeInTBs: S.optional(S.Number),
          dbNodeStorageSizeInGBs: S.optional(S.Number),
          dbServers: S.optional(__S(11, __c1, 3)),
          diskRedundancy: S.optional(S.String),
          giVersion: S.optional(S.String),
          hostname: S.optional(S.String),
          iormConfigCache: S.optional(__S(104, __c13, 0)),
          isLocalBackupEnabled: S.optional(S.Boolean),
          isSparseDiskgroupEnabled: S.optional(S.Boolean),
          lastUpdateHistoryEntryId: S.optional(S.String),
          licenseModel: S.optional(S.String),
          listenerPort: S.optional(S.Number),
          memorySizeInGBs: S.optional(S.Number),
          nodeCount: S.optional(S.Number),
          ocid: S.optional(S.String),
          ociResourceAnchorName: S.optional(S.String),
          ociUrl: S.optional(S.String),
          domain: S.optional(S.String),
          scanDnsName: S.optional(S.String),
          scanDnsRecordId: S.optional(S.String),
          scanIpIds: S.optional(__S(11, __c1, 3)),
          shape: S.optional(S.String),
          sshPublicKeys: S.optional(__S(105, __c13, 1)),
          storageSizeInGBs: S.optional(S.Number),
          systemVersion: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeZone: S.optional(S.String),
          vipIds: S.optional(__S(11, __c1, 3)),
          odbNetworkId: S.optional(S.String),
          odbNetworkArn: S.optional(S.String),
          percentProgress: S.optional(S.Number),
          computeModel: S.optional(S.String),
          iamRoles: S.optional(__S(90, __c11, 2)),
        }),
      ).annotate({ identifier: "CloudVmCluster" });
    case 3:
      return S.suspend(() => S.Struct({ cloudVmCluster: S.optional(__S(106, __c13, 2)) })).annotate(
        {
          identifier: "GetCloudVmClusterOutput",
        },
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          cloudVmClusterId: S.optional(S.String),
          exadbVmClusterId: S.optional(S.String),
          dbNodeId: S.String.pipe(T.HttpLabel("dbNodeId")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetDbNodeInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          dbNodeId: S.optional(S.String),
          dbNodeArn: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          additionalDetails: S.optional(S.String),
          backupIpId: S.optional(S.String),
          backupVnic2Id: S.optional(S.String),
          backupVnicId: S.optional(S.String),
          cpuCoreCount: S.optional(S.Number),
          dbNodeStorageSizeInGBs: S.optional(S.Number),
          dbServerId: S.optional(S.String),
          dbSystemId: S.optional(S.String),
          faultDomain: S.optional(S.String),
          hostIpId: S.optional(S.String),
          hostname: S.optional(S.String),
          ocid: S.optional(S.String),
          ociResourceAnchorName: S.optional(S.String),
          maintenanceType: S.optional(S.String),
          memorySizeInGBs: S.optional(S.Number),
          softwareStorageSizeInGB: S.optional(S.Number),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeMaintenanceWindowEnd: S.optional(S.String),
          timeMaintenanceWindowStart: S.optional(S.String),
          totalCpuCoreCount: S.optional(S.Number),
          vnic2Id: S.optional(S.String),
          vnicId: S.optional(S.String),
          privateIpAddress: S.optional(S.String),
          floatingIpAddress: S.optional(S.String),
        }),
      ).annotate({ identifier: "DbNode" });
    case 6:
      return S.suspend(() => S.Struct({ dbNode: S.optional(__S(109, __c13, 5)) })).annotate({
        identifier: "GetDbNodeOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          cloudExadataInfrastructureId: S.String.pipe(T.HttpLabel("cloudExadataInfrastructureId")),
          dbServerId: S.String.pipe(T.HttpLabel("dbServerId")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetDbServerInput" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          estimatedPatchDuration: S.optional(S.Number),
          patchingStatus: S.optional(S.String),
          timePatchingEnded: S.optional(S.String),
          timePatchingStarted: S.optional(S.String),
        }),
      ).annotate({ identifier: "DbServerPatchingDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          dbServerId: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          cpuCoreCount: S.optional(S.Number),
          dbNodeStorageSizeInGBs: S.optional(S.Number),
          dbServerPatchingDetails: S.optional(__S(112, __c14, 0)),
          displayName: S.optional(S.String),
          exadataInfrastructureId: S.optional(S.String),
          ocid: S.optional(S.String),
          ociResourceAnchorName: S.optional(S.String),
          maxCpuCount: S.optional(S.Number),
          maxDbNodeStorageInGBs: S.optional(S.Number),
          maxMemoryInGBs: S.optional(S.Number),
          memorySizeInGBs: S.optional(S.Number),
          shape: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          vmClusterIds: S.optional(__S(11, __c1, 3)),
          computeModel: S.optional(S.String),
          autonomousVmClusterIds: S.optional(__S(11, __c1, 3)),
          autonomousVirtualMachineIds: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({ identifier: "DbServer" });
    case 2:
      return S.suspend(() => S.Struct({ dbServer: S.optional(__S(113, __c14, 1)) })).annotate({
        identifier: "GetDbServerOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ exadbVmClusterId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetExadbVmClusterInput" });
    case 4:
      return S.suspend(() => S.Struct({ totalSizeInGBs: S.optional(S.Number) })).annotate({
        identifier: "ExadbVmClusterStorageDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          exadbVmClusterId: S.String,
          clusterName: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          dataCollectionOptions: S.optional(__S(40, __c5, 0)),
          displayName: S.optional(S.String),
          domain: S.optional(S.String),
          enabledEcpuCount: S.optional(S.Number),
          exadbVmClusterArn: S.optional(S.String),
          exascaleDbStorageVaultArn: S.optional(S.String),
          exascaleDbStorageVaultId: S.optional(S.String),
          giVersion: S.optional(S.String),
          gridImageId: S.optional(S.String),
          gridImageType: S.optional(S.String),
          hostname: S.optional(S.String),
          iamRoles: S.optional(__S(90, __c11, 2)),
          iormConfigCache: S.optional(__S(104, __c13, 0)),
          lastUpdateHistoryEntryId: S.optional(S.String),
          licenseModel: S.optional(S.String),
          listenerPort: S.optional(S.Number),
          memorySizeInGBs: S.optional(S.Number),
          nodeCount: S.optional(S.Number),
          ocid: S.optional(S.String),
          ociResourceAnchorName: S.optional(S.String),
          ociUrl: S.optional(S.String),
          odbNetworkArn: S.optional(S.String),
          odbNetworkId: S.optional(S.String),
          percentProgress: S.optional(S.Number),
          scanDnsName: S.optional(S.String),
          scanDnsRecordId: S.optional(S.String),
          scanIpIds: S.optional(__S(11, __c1, 3)),
          scanListenerPortTcp: S.optional(S.Number),
          scanListenerPortTcpSsl: S.optional(S.Number),
          shape: S.optional(S.String),
          shapeAttribute: S.optional(S.String),
          snapshotFileSystemStorage: S.optional(__S(116, __c14, 4)),
          sshPublicKeys: S.optional(__S(11, __c1, 3)),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          systemVersion: S.optional(S.String),
          timeZone: S.optional(S.String),
          totalEcpuCount: S.optional(S.Number),
          totalFileSystemStorage: S.optional(__S(116, __c14, 4)),
          vipIds: S.optional(__S(11, __c1, 3)),
          vmFileSystemStorage: S.optional(__S(116, __c14, 4)),
        }),
      ).annotate({ identifier: "ExadbVmCluster" });
    case 6:
      return S.suspend(() => S.Struct({ exadbVmCluster: __S(117, __c14, 5) })).annotate({
        identifier: "GetExadbVmClusterOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ exascaleDbStorageVaultId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetExascaleDbStorageVaultInput",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          availableSizeInGBs: S.optional(S.Number),
          totalSizeInGBs: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ExascaleDbStorageDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          exascaleDbStorageVaultId: S.String,
          additionalFlashCacheInPercent: S.optional(S.Number),
          attachedShapeAttributes: S.optional(__S(120, __c15, 0)),
          autoscaleLimitInGBs: S.optional(S.Number),
          availabilityZone: S.optional(S.String),
          availabilityZoneId: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(S.String),
          displayName: S.optional(S.String),
          vmClusterArns: S.optional(__S(11, __c1, 3)),
          vmClusterCount: S.optional(S.Number),
          vmClusterIds: S.optional(__S(11, __c1, 3)),
          exascaleDbStorageVaultArn: S.optional(S.String),
          highCapacityDatabaseStorage: S.optional(__S(121, __c15, 1)),
          isAutoscaleEnabled: S.optional(S.Boolean),
          ocid: S.optional(S.String),
          ociResourceAnchorName: S.optional(S.String),
          ociUrl: S.optional(S.String),
          percentProgress: S.optional(S.Number),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          timeZone: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExascaleDbStorageVault" });
    case 3:
      return S.suspend(() => S.Struct({ exascaleDbStorageVault: __S(122, __c15, 2) })).annotate({
        identifier: "GetExascaleDbStorageVaultOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetOciOnboardingStatusInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ociIdentityDomainId: S.optional(S.String),
          ociIdentityDomainResourceUrl: S.optional(S.String),
          ociIdentityDomainUrl: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          accountSetupCloudFormationUrl: S.optional(S.String),
        }),
      ).annotate({ identifier: "OciIdentityDomain" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          iamRoleArn: S.optional(S.String),
          awsIntegration: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "OciIamRole" });
    case 7:
      return S.Array(__S(126, __c15, 6));
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ errorMessage: S.optional(S.String) })).annotate({
        identifier: "SubscriptionError",
      });
    case 1:
      return S.Array(__S(128, __c16, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          existingTenancyActivationLink: S.optional(S.String),
          newTenancyActivationLink: S.optional(S.String),
          ociIdentityDomain: S.optional(__S(125, __c15, 5)),
          autonomousDatabaseOciIntegrationIamRoles: S.optional(__S(127, __c15, 7)),
          linkedOciTenancyId: S.optional(S.String),
          linkedOciCompartmentId: S.optional(S.String),
          subscriptionErrors: S.optional(__S(129, __c16, 1)),
        }),
      ).annotate({
        identifier: "GetOciOnboardingStatusOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ odbNetworkId: S.String.pipe(T.HttpLabel("odbNetworkId")) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetOdbNetworkInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ domainName: S.optional(S.String), ociDnsListenerIp: S.optional(S.String) }),
      ).annotate({ identifier: "OciDnsForwardingConfig" });
    case 5:
      return S.Array(__S(132, __c16, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          vpcEndpointId: S.optional(S.String),
          vpcEndpointType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServiceNetworkEndpoint" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          ipv4Addresses: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({ identifier: "ManagedS3BackupAccess" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ status: S.optional(S.String), cidr: S.optional(S.String) }),
      ).annotate({ identifier: "ZeroEtlAccess" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          ipv4Addresses: S.optional(__S(11, __c1, 3)),
          domainName: S.optional(S.String),
          s3PolicyDocument: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3Access" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          ipv4Addresses: S.optional(__S(11, __c1, 3)),
          domainName: S.optional(S.String),
          stsPolicyDocument: S.optional(S.String),
        }),
      ).annotate({ identifier: "StsAccess" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          ipv4Addresses: S.optional(__S(11, __c1, 3)),
          domainName: S.optional(S.String),
          kmsPolicyDocument: S.optional(S.String),
        }),
      ).annotate({ identifier: "KmsAccess" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          region: S.optional(S.String),
          ipv4Addresses: S.optional(__S(11, __c1, 3)),
          status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CrossRegionS3RestoreSourcesAccess",
      });
    case 5:
      return S.Array(__S(140, __c17, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          serviceNetworkArn: S.optional(S.String),
          resourceGatewayArn: S.optional(S.String),
          managedServicesIpv4Cidrs: S.optional(__S(11, __c1, 3)),
          serviceNetworkEndpoint: S.optional(__S(134, __c16, 6)),
          managedS3BackupAccess: S.optional(__S(135, __c16, 7)),
          zeroEtlAccess: S.optional(__S(136, __c17, 0)),
          s3Access: S.optional(__S(137, __c17, 1)),
          stsAccess: S.optional(__S(138, __c17, 2)),
          kmsAccess: S.optional(__S(139, __c17, 3)),
          crossRegionS3RestoreSourcesAccess: S.optional(__S(141, __c17, 5)),
        }),
      ).annotate({ identifier: "ManagedServices" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          odbNetworkId: S.String,
          displayName: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          odbNetworkArn: S.optional(S.String),
          availabilityZone: S.optional(S.String),
          availabilityZoneId: S.optional(S.String),
          clientSubnetCidr: S.optional(S.String),
          backupSubnetCidr: S.optional(S.String),
          customDomainName: S.optional(S.String),
          defaultDnsPrefix: S.optional(S.String),
          peeredCidrs: S.optional(__S(11, __c1, 3)),
          ociNetworkAnchorId: S.optional(S.String),
          ociNetworkAnchorUrl: S.optional(S.String),
          ociResourceAnchorName: S.optional(S.String),
          ociVcnId: S.optional(S.String),
          ociVcnUrl: S.optional(S.String),
          ociDnsForwardingConfigs: S.optional(__S(133, __c16, 5)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          percentProgress: S.optional(S.Number),
          managedServices: S.optional(__S(142, __c17, 6)),
          ec2PlacementGroupIds: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({ identifier: "OdbNetwork" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ odbNetwork: S.optional(__S(143, __c17, 7)) })).annotate({
        identifier: "GetOdbNetworkOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          odbPeeringConnectionId: S.String.pipe(T.HttpLabel("odbPeeringConnectionId")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetOdbPeeringConnectionInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          odbPeeringConnectionId: S.String,
          displayName: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          odbPeeringConnectionArn: S.optional(S.String),
          odbNetworkArn: S.optional(S.String),
          peerNetworkArn: S.optional(S.String),
          odbPeeringConnectionType: S.optional(S.String),
          peerNetworkCidrs: S.optional(__S(11, __c1, 3)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          percentProgress: S.optional(S.Number),
        }),
      ).annotate({ identifier: "OdbPeeringConnection" });
    case 3:
      return S.suspend(() =>
        S.Struct({ odbPeeringConnection: S.optional(__S(146, __c18, 2)) }),
      ).annotate({
        identifier: "GetOdbPeeringConnectionOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ociIdentityDomain: S.optional(S.Boolean),
          autonomousDatabaseOciAwsSecretsManagerIntegration: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "InitializeServiceInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          autonomousDatabaseId: S.String.pipe(T.HttpLabel("autonomousDatabaseId")),
          status: S.optional(S.String),
          type: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAutonomousDatabaseBackupsInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          autonomousDatabaseBackupId: S.optional(S.String),
          autonomousDatabaseBackupArn: S.optional(S.String),
          autonomousDatabaseId: S.optional(S.String),
          ocid: S.optional(S.String),
          displayName: S.optional(S.String),
          dbVersion: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          isAutomatic: S.optional(S.Boolean),
          retentionPeriodInDays: S.optional(S.Number),
          sizeInTBs: S.optional(S.Number),
          timeAvailableTill: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeStarted: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeEnded: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AutonomousDatabaseBackupSummary",
      });
    case 7:
      return S.Array(__S(150, __c18, 6));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          autonomousDatabaseBackups: __S(151, __c18, 7),
        }),
      ).annotate({
        identifier: "ListAutonomousDatabaseBackupsOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          characterSetType: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAutonomousDatabaseCharacterSetsInput",
      });
    case 2:
      return S.suspend(() => S.Struct({ characterSet: S.optional(S.String) })).annotate({
        identifier: "AutonomousDatabaseCharacterSetSummary",
      });
    case 3:
      return S.Array(__S(154, __c19, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          autonomousDatabaseCharacterSets: __S(155, __c19, 3),
        }),
      ).annotate({
        identifier: "ListAutonomousDatabaseCharacterSetsOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          autonomousDatabaseId: S.String.pipe(T.HttpLabel("autonomousDatabaseId")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAutonomousDatabaseClonesInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          autonomousDatabaseId: S.optional(S.String),
          autonomousDatabaseArn: S.optional(S.String),
          ociResourceAnchorName: S.optional(S.String),
          percentProgress: S.optional(S.Number),
          ocid: S.optional(S.String),
          ociUrl: S.optional(S.String),
          displayName: S.optional(S.String),
          dbName: S.optional(S.String),
          sourceId: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          databaseType: S.optional(S.String),
          dbVersion: S.optional(S.String),
          dbWorkload: S.optional(S.String),
          characterSet: S.optional(S.String),
          ncharacterSet: S.optional(S.String),
          databaseEdition: S.optional(S.String),
          licenseModel: S.optional(S.String),
          openMode: S.optional(S.String),
          permissionLevel: S.optional(S.String),
          isMtlsConnectionRequired: S.optional(S.Boolean),
          autonomousMaintenanceScheduleType: S.optional(S.String),
          netServicesArchitecture: S.optional(S.String),
          availableUpgradeVersions: S.optional(__S(11, __c1, 3)),
          byolComputeCountLimit: S.optional(S.Number),
          connectionStringDetails: S.optional(__S(66, __c8, 2)),
          serviceConsoleUrl: S.optional(S.String),
          sqlWebDeveloperUrl: S.optional(S.String),
          customerContacts: S.optional(__S(6, __c0, 6)),
          apexDetails: S.optional(__S(67, __c8, 3)),
          standbyDb: S.optional(__S(68, __c8, 4)),
          localStandbyDb: S.optional(__S(68, __c8, 4)),
          dataSafeStatus: S.optional(S.String),
          databaseManagementStatus: S.optional(S.String),
          operationsInsightsStatus: S.optional(S.String),
          availabilityZone: S.optional(S.String),
          availabilityZoneId: S.optional(S.String),
          maintenanceTargetComponent: S.optional(S.String),
          connectionUrls: S.optional(__S(69, __c8, 5)),
          dbToolsDetails: S.optional(__S(14, __c1, 6)),
          scheduledOperations: S.optional(__S(10, __c1, 2)),
          resourcePoolLeaderId: S.optional(S.String),
          computeCount: S.optional(S.Number),
          computeModel: S.optional(S.String),
          cpuCoreCount: S.optional(S.Number),
          memoryPerOracleComputeUnitInGBs: S.optional(S.Number),
          provisionableCpus: S.optional(__S(16, __c2, 0)),
          isAutoScalingEnabled: S.optional(S.Boolean),
          dataStorageSizeInTBs: S.optional(S.Number),
          dataStorageSizeInGBs: S.optional(S.Number),
          usedDataStorageSizeInTBs: S.optional(S.Number),
          usedDataStorageSizeInGBs: S.optional(S.Number),
          actualUsedDataStorageSizeInTBs: S.optional(S.Number),
          allocatedStorageSizeInTBs: S.optional(S.Number),
          inMemoryAreaInGBs: S.optional(S.Number),
          isAutoScalingForStorageEnabled: S.optional(S.Boolean),
          odbNetworkId: S.optional(S.String),
          odbNetworkArn: S.optional(S.String),
          privateEndpoint: S.optional(S.String),
          privateEndpointIp: S.optional(S.String),
          privateEndpointLabel: S.optional(S.String),
          allowlistedIps: S.optional(__S(11, __c1, 3)),
          standbyAllowlistedIps: S.optional(__S(11, __c1, 3)),
          standbyAllowlistedIpsSource: S.optional(S.String),
          isLocalDataGuardEnabled: S.optional(S.Boolean),
          isRemoteDataGuardEnabled: S.optional(S.Boolean),
          localDisasterRecoveryType: S.optional(S.String),
          role: S.optional(S.String),
          peerDbIds: S.optional(__S(11, __c1, 3)),
          failedDataRecoveryInSeconds: S.optional(S.Number),
          localAdgAutoFailoverMaxDataLossLimit: S.optional(S.Number),
          remoteDisasterRecoveryConfiguration: S.optional(__S(70, __c8, 6)),
          isRefreshableClone: S.optional(S.Boolean),
          refreshableMode: S.optional(S.String),
          refreshableStatus: S.optional(S.String),
          autoRefreshFrequencyInSeconds: S.optional(S.Number),
          autoRefreshPointLagInSeconds: S.optional(S.Number),
          isReconnectCloneEnabled: S.optional(S.Boolean),
          cloneTableSpaceList: S.optional(__S(16, __c2, 0)),
          backupRetentionPeriodInDays: S.optional(S.Number),
          longTermBackupSchedule: S.optional(__S(71, __c8, 7)),
          isBackupRetentionLocked: S.optional(S.Boolean),
          totalBackupStorageSizeInGBs: S.optional(S.Number),
          resourcePoolSummary: S.optional(__S(7, __c0, 7)),
          encryptionSummary: S.optional(__S(75, __c9, 3)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeOfLastBackup: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeMaintenanceBegin: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeMaintenanceEnd: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeLocalDataGuardEnabled: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeDataGuardRoleChanged: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeOfLastSwitchover: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeOfLastFailover: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeOfLastRefresh: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeOfLastRefreshPoint: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeOfNextRefresh: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeOfAutoRefreshStart: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeDeletionOfFreeAutonomousDatabase: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeReclamationOfFreeAutonomousDatabase: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeDisasterRecoveryRoleChanged: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeUntilReconnectCloneEnabled: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          nextLongTermBackupTimeStamp: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeUndeleted: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          adminPasswordSourceSummary: S.optional(__S(78, __c9, 6)),
        }),
      ).annotate({
        identifier: "AutonomousDatabaseSummary",
      });
    case 7:
      return S.Array(__S(158, __c19, 6));
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          autonomousDatabaseClones: __S(159, __c19, 7),
        }),
      ).annotate({
        identifier: "ListAutonomousDatabaseClonesOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          autonomousDatabaseId: S.String.pipe(T.HttpLabel("autonomousDatabaseId")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAutonomousDatabasePeersInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          autonomousDatabaseId: S.optional(S.String),
          autonomousDatabaseArn: S.optional(S.String),
          ocid: S.optional(S.String),
          region: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AutonomousDatabasePeerSummary",
      });
    case 3:
      return S.Array(__S(162, __c20, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          autonomousDatabasePeers: __S(163, __c20, 3),
        }),
      ).annotate({
        identifier: "ListAutonomousDatabasePeersOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAutonomousDatabasesInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), autonomousDatabases: __S(159, __c19, 7) }),
      ).annotate({
        identifier: "ListAutonomousDatabasesOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          dbWorkload: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAutonomousDatabaseVersionsInput",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          dbWorkload: S.optional(S.String),
          details: S.optional(S.String),
          version: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AutonomousDatabaseVersionSummary",
      });
    case 1:
      return S.Array(__S(168, __c21, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          autonomousDatabaseVersions: __S(169, __c21, 1),
        }),
      ).annotate({
        identifier: "ListAutonomousDatabaseVersionsOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          cloudAutonomousVmClusterId: S.String.pipe(T.HttpLabel("cloudAutonomousVmClusterId")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAutonomousVirtualMachinesInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          autonomousVirtualMachineId: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          vmName: S.optional(S.String),
          dbServerId: S.optional(S.String),
          dbServerDisplayName: S.optional(S.String),
          cpuCoreCount: S.optional(S.Number),
          memorySizeInGBs: S.optional(S.Number),
          dbNodeStorageSizeInGBs: S.optional(S.Number),
          clientIpAddress: S.optional(S.String),
          cloudAutonomousVmClusterId: S.optional(S.String),
          ocid: S.optional(S.String),
          ociResourceAnchorName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AutonomousVirtualMachineSummary",
      });
    case 5:
      return S.Array(__S(172, __c21, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          autonomousVirtualMachines: __S(173, __c21, 5),
        }),
      ).annotate({
        identifier: "ListAutonomousVirtualMachinesOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          cloudExadataInfrastructureId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListCloudAutonomousVmClustersInput",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          cloudAutonomousVmClusterId: S.String,
          cloudAutonomousVmClusterArn: S.optional(S.String),
          odbNetworkId: S.optional(S.String),
          odbNetworkArn: S.optional(S.String),
          ociResourceAnchorName: S.optional(S.String),
          percentProgress: S.optional(S.Number),
          displayName: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          cloudExadataInfrastructureId: S.optional(S.String),
          cloudExadataInfrastructureArn: S.optional(S.String),
          autonomousDataStoragePercentage: S.optional(S.Number),
          autonomousDataStorageSizeInTBs: S.optional(S.Number),
          availableAutonomousDataStorageSizeInTBs: S.optional(S.Number),
          availableContainerDatabases: S.optional(S.Number),
          availableCpus: S.optional(S.Number),
          computeModel: S.optional(S.String),
          cpuCoreCount: S.optional(S.Number),
          cpuCoreCountPerNode: S.optional(S.Number),
          cpuPercentage: S.optional(S.Number),
          dataStorageSizeInGBs: S.optional(S.Number),
          dataStorageSizeInTBs: S.optional(S.Number),
          dbNodeStorageSizeInGBs: S.optional(S.Number),
          dbServers: S.optional(__S(11, __c1, 3)),
          description: S.optional(S.String),
          domain: S.optional(S.String),
          exadataStorageInTBsLowestScaledValue: S.optional(S.Number),
          hostname: S.optional(S.String),
          ocid: S.optional(S.String),
          ociUrl: S.optional(S.String),
          isMtlsEnabledVmCluster: S.optional(S.Boolean),
          licenseModel: S.optional(S.String),
          maintenanceWindow: S.optional(__S(35, __c4, 3)),
          maxAcdsLowestScaledValue: S.optional(S.Number),
          memoryPerOracleComputeUnitInGBs: S.optional(S.Number),
          memorySizeInGBs: S.optional(S.Number),
          nodeCount: S.optional(S.Number),
          nonProvisionableAutonomousContainerDatabases: S.optional(S.Number),
          provisionableAutonomousContainerDatabases: S.optional(S.Number),
          provisionedAutonomousContainerDatabases: S.optional(S.Number),
          provisionedCpus: S.optional(S.Number),
          reclaimableCpus: S.optional(S.Number),
          reservedCpus: S.optional(S.Number),
          scanListenerPortNonTls: S.optional(S.Number),
          scanListenerPortTls: S.optional(S.Number),
          shape: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeDatabaseSslCertificateExpires: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeOrdsCertificateExpires: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          timeZone: S.optional(S.String),
          totalContainerDatabases: S.optional(S.Number),
          iamRoles: S.optional(__S(90, __c11, 2)),
        }),
      ).annotate({
        identifier: "CloudAutonomousVmClusterSummary",
      });
    case 1:
      return S.Array(__S(176, __c22, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          cloudAutonomousVmClusters: __S(177, __c22, 1),
        }),
      ).annotate({
        identifier: "ListCloudAutonomousVmClustersOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListCloudExadataInfrastructuresInput",
      });
    case 4:
      return S.Array(__S(94, __c11, 6));
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          cloudExadataInfrastructures: __S(180, __c22, 4),
        }),
      ).annotate({
        identifier: "ListCloudExadataInfrastructuresOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          cloudExadataInfrastructureId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListCloudVmClustersInput" });
    case 7:
      return S.Array(__S(106, __c13, 2));
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), cloudVmClusters: __S(183, __c22, 7) }),
      ).annotate({
        identifier: "ListCloudVmClustersOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          cloudVmClusterId: S.optional(S.String),
          exadbVmClusterId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDbNodesInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          dbNodeId: S.optional(S.String),
          dbNodeArn: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          additionalDetails: S.optional(S.String),
          backupIpId: S.optional(S.String),
          backupVnic2Id: S.optional(S.String),
          backupVnicId: S.optional(S.String),
          cpuCoreCount: S.optional(S.Number),
          dbNodeStorageSizeInGBs: S.optional(S.Number),
          dbServerId: S.optional(S.String),
          dbSystemId: S.optional(S.String),
          faultDomain: S.optional(S.String),
          hostIpId: S.optional(S.String),
          hostname: S.optional(S.String),
          ocid: S.optional(S.String),
          ociResourceAnchorName: S.optional(S.String),
          maintenanceType: S.optional(S.String),
          memorySizeInGBs: S.optional(S.Number),
          softwareStorageSizeInGB: S.optional(S.Number),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          timeMaintenanceWindowEnd: S.optional(S.String),
          timeMaintenanceWindowStart: S.optional(S.String),
          totalCpuCoreCount: S.optional(S.Number),
          vnic2Id: S.optional(S.String),
          vnicId: S.optional(S.String),
        }),
      ).annotate({ identifier: "DbNodeSummary" });
    case 3:
      return S.Array(__S(186, __c23, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), dbNodes: __S(187, __c23, 3) }),
      ).annotate({ identifier: "ListDbNodesOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          cloudExadataInfrastructureId: S.String.pipe(T.HttpLabel("cloudExadataInfrastructureId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDbServersInput" });
    case 6:
      return S.Array(__S(113, __c14, 1));
    case 7:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), dbServers: __S(190, __c23, 6) }),
      ).annotate({ identifier: "ListDbServersOutput" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          availabilityZone: S.optional(S.String),
          availabilityZoneId: S.optional(S.String),
          shapeFamily: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDbSystemShapesInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          availableCoreCount: S.optional(S.Number),
          availableCoreCountPerNode: S.optional(S.Number),
          availableDataStorageInTBs: S.optional(S.Number),
          availableDataStoragePerServerInTBs: S.optional(S.Number),
          availableDbNodePerNodeInGBs: S.optional(S.Number),
          availableDbNodeStorageInGBs: S.optional(S.Number),
          availableMemoryInGBs: S.optional(S.Number),
          availableMemoryPerNodeInGBs: S.optional(S.Number),
          coreCountIncrement: S.optional(S.Number),
          maxStorageCount: S.optional(S.Number),
          maximumNodeCount: S.optional(S.Number),
          minCoreCountPerNode: S.optional(S.Number),
          minDataStorageInTBs: S.optional(S.Number),
          minDbNodeStoragePerNodeInGBs: S.optional(S.Number),
          minMemoryPerNodeInGBs: S.optional(S.Number),
          minStorageCount: S.optional(S.Number),
          minimumCoreCount: S.optional(S.Number),
          minimumNodeCount: S.optional(S.Number),
          runtimeMinimumCoreCount: S.optional(S.Number),
          shapeFamily: S.optional(S.String),
          shapeType: S.optional(S.String),
          shapeAttributes: S.optional(__S(120, __c15, 0)),
          name: S.optional(S.String),
          computeModel: S.optional(S.String),
          areServerTypesSupported: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DbSystemShapeSummary" });
    case 2:
      return S.Array(__S(193, __c24, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), dbSystemShapes: __S(194, __c24, 2) }),
      ).annotate({ identifier: "ListDbSystemShapesOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          exascaleDbStorageVaultId: S.optional(S.String).pipe(
            T.HttpQuery("exascaleDbStorageVaultId"),
          ),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListExadbVmClustersInput" });
    case 5:
      return S.Array(__S(117, __c14, 5));
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), exadbVmClusters: __S(197, __c24, 5) }),
      ).annotate({
        identifier: "ListExadbVmClustersOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListExascaleDbStorageVaultsInput",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          exascaleDbStorageVaultId: S.String,
          additionalFlashCacheInPercent: S.optional(S.Number),
          attachedShapeAttributes: S.optional(__S(120, __c15, 0)),
          autoscaleLimitInGBs: S.optional(S.Number),
          availabilityZone: S.optional(S.String),
          availabilityZoneId: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(S.String),
          displayName: S.optional(S.String),
          vmClusterArns: S.optional(__S(11, __c1, 3)),
          vmClusterCount: S.optional(S.Number),
          vmClusterIds: S.optional(__S(11, __c1, 3)),
          exascaleDbStorageVaultArn: S.optional(S.String),
          highCapacityDatabaseStorage: S.optional(__S(121, __c15, 1)),
          isAutoscaleEnabled: S.optional(S.Boolean),
          ocid: S.optional(S.String),
          ociResourceAnchorName: S.optional(S.String),
          ociUrl: S.optional(S.String),
          percentProgress: S.optional(S.Number),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          timeZone: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ExascaleDbStorageVaultSummary",
      });
    case 1:
      return S.Array(__S(200, __c25, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          exascaleDbStorageVaults: __S(201, __c25, 1),
        }),
      ).annotate({
        identifier: "ListExascaleDbStorageVaultsOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          shape: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListFlexComponentsInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          availableCoreCount: S.optional(S.Number),
          availableDbStorageInGBs: S.optional(S.Number),
          availableLocalStorageInGBs: S.optional(S.Number),
          availableMemoryInGBs: S.optional(S.Number),
          computeModel: S.optional(S.String),
          descriptionSummary: S.optional(S.String),
          hardwareType: S.optional(S.String),
          minimumCoreCount: S.optional(S.Number),
          name: S.optional(S.String),
          runtimeMinimumCoreCount: S.optional(S.Number),
          shape: S.optional(S.String),
        }),
      ).annotate({ identifier: "FlexComponentSummary" });
    case 5:
      return S.Array(__S(204, __c25, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), flexComponents: __S(205, __c25, 5) }),
      ).annotate({ identifier: "ListFlexComponentsOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          giVersion: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          shapeFamily: S.optional(S.String),
          availabilityZone: S.optional(S.String),
          availabilityZoneId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListGiMinorVersionsInput" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ version: S.String, gridImageId: S.optional(S.String) }),
      ).annotate({ identifier: "GiMinorVersionSummary" });
    case 1:
      return S.Array(__S(208, __c26, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), giMinorVersions: __S(209, __c26, 1) }),
      ).annotate({
        identifier: "ListGiMinorVersionsOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          shape: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListGiVersionsInput" });
    case 4:
      return S.suspend(() => S.Struct({ version: S.optional(S.String) })).annotate({
        identifier: "GiVersionSummary",
      });
    case 5:
      return S.Array(__S(212, __c26, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), giVersions: __S(213, __c26, 5) }),
      ).annotate({ identifier: "ListGiVersionsOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListOdbNetworksInput" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(143, __c17, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), odbNetworks: __S(216, __c27, 0) }),
      ).annotate({ identifier: "ListOdbNetworksOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          odbNetworkId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListOdbPeeringConnectionsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          odbPeeringConnectionId: S.String,
          displayName: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          odbPeeringConnectionArn: S.optional(S.String),
          odbNetworkArn: S.optional(S.String),
          peerNetworkArn: S.optional(S.String),
          odbPeeringConnectionType: S.optional(S.String),
          peerNetworkCidrs: S.optional(__S(11, __c1, 3)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          percentProgress: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "OdbPeeringConnectionSummary",
      });
    case 4:
      return S.Array(__S(219, __c27, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          odbPeeringConnections: __S(220, __c27, 4),
        }),
      ).annotate({
        identifier: "ListOdbPeeringConnectionsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          giVersion: S.String,
          shape: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListSystemVersionsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          giVersion: S.optional(S.String),
          shape: S.optional(S.String),
          systemVersions: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({ identifier: "SystemVersionSummary" });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(223, __c27, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), systemVersions: __S(224, __c28, 0) }),
      ).annotate({ identifier: "ListSystemVersionsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(27, __c3, 3)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ autonomousDatabaseId: S.String, isOnlineReboot: S.optional(S.Boolean) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RebootAutonomousDatabaseInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          cloudVmClusterId: S.optional(S.String),
          exadbVmClusterId: S.optional(S.String),
          dbNodeId: S.String.pipe(T.HttpLabel("dbNodeId")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RebootDbNodeInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          dbNodeId: S.String,
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "RebootDbNodeOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          autonomousDatabaseId: S.String,
          timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RestoreAutonomousDatabaseInput",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ autonomousDatabaseId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ShrinkAutonomousDatabaseInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ autonomousDatabaseId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartAutonomousDatabaseInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          cloudVmClusterId: S.optional(S.String),
          exadbVmClusterId: S.optional(S.String),
          dbNodeId: S.String.pipe(T.HttpLabel("dbNodeId")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartDbNodeInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ autonomousDatabaseId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopAutonomousDatabaseInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          cloudVmClusterId: S.optional(S.String),
          exadbVmClusterId: S.optional(S.String),
          dbNodeId: S.String.pipe(T.HttpLabel("dbNodeId")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StopDbNodeInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ autonomousDatabaseId: S.String, peerDbArn: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SwitchoverAutonomousDatabaseInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: __S(27, __c3, 3) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(11, __c1, 3),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          autonomousDatabaseId: S.String,
          adminPassword: S.optional(SensitiveString),
          computeCount: S.optional(S.Number),
          cpuCoreCount: S.optional(S.Number),
          dataStorageSizeInTBs: S.optional(S.Number),
          dataStorageSizeInGBs: S.optional(S.Number),
          displayName: S.optional(S.String),
          dbName: S.optional(S.String),
          dbVersion: S.optional(S.String),
          dbWorkload: S.optional(S.String),
          dbToolsDetails: S.optional(__S(14, __c1, 6)),
          databaseEdition: S.optional(S.String),
          licenseModel: S.optional(S.String),
          isAutoScalingEnabled: S.optional(S.Boolean),
          isAutoScalingForStorageEnabled: S.optional(S.Boolean),
          isBackupRetentionLocked: S.optional(S.Boolean),
          isLocalDataGuardEnabled: S.optional(S.Boolean),
          isMtlsConnectionRequired: S.optional(S.Boolean),
          isRefreshableClone: S.optional(S.Boolean),
          isDisconnectPeer: S.optional(S.Boolean),
          backupRetentionPeriodInDays: S.optional(S.Number),
          byolComputeCountLimit: S.optional(S.Number),
          localAdgAutoFailoverMaxDataLossLimit: S.optional(S.Number),
          autonomousMaintenanceScheduleType: S.optional(S.String),
          customerContactsToSendToOCI: S.optional(__S(6, __c0, 6)),
          scheduledOperations: S.optional(__S(10, __c1, 2)),
          longTermBackupSchedule: S.optional(__S(71, __c8, 7)),
          openMode: S.optional(S.String),
          permissionLevel: S.optional(S.String),
          refreshableMode: S.optional(S.String),
          privateEndpointIp: S.optional(S.String),
          privateEndpointLabel: S.optional(S.String),
          peerDbId: S.optional(S.String),
          resourcePoolLeaderId: S.optional(S.String),
          resourcePoolSummary: S.optional(__S(7, __c0, 7)),
          standbyAllowlistedIpsSource: S.optional(S.String),
          standbyAllowlistedIps: S.optional(__S(11, __c1, 3)),
          allowlistedIps: S.optional(__S(11, __c1, 3)),
          autoRefreshFrequencyInSeconds: S.optional(S.Number),
          autoRefreshPointLagInSeconds: S.optional(S.Number),
          timeOfAutoRefreshStart: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          encryptionKeyProvider: S.optional(S.String),
          encryptionKeyConfiguration: S.optional(__S(24, __c3, 0)),
          adminPasswordSource: S.optional(S.String),
          adminPasswordSourceConfiguration: S.optional(__S(26, __c3, 2)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateAutonomousDatabaseInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          autonomousDatabaseBackupId: S.String.pipe(T.HttpLabel("autonomousDatabaseBackupId")),
          retentionPeriodInDays: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateAutonomousDatabaseBackupInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          cloudExadataInfrastructureId: S.String.pipe(T.HttpLabel("cloudExadataInfrastructureId")),
          maintenanceWindow: S.optional(__S(35, __c4, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateCloudExadataInfrastructureInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          exadbVmClusterId: S.String,
          dataCollectionOptions: S.optional(__S(40, __c5, 0)),
          displayName: S.optional(S.String),
          enabledEcpuCount: S.optional(S.Number),
          gridImageId: S.optional(S.String),
          licenseModel: S.optional(S.String),
          sshPublicKeys: S.optional(__S(11, __c1, 3)),
          systemVersion: S.optional(S.String),
          totalEcpuCount: S.optional(S.Number),
          updateAction: S.optional(S.String),
          vmFileSystemStorageTotalSizeInGBs: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateExadbVmClusterInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          exascaleDbStorageVaultId: S.String,
          additionalFlashCacheInPercent: S.optional(S.Number),
          autoscaleLimitInGBs: S.optional(S.Number),
          description: S.optional(S.String),
          displayName: S.optional(S.String),
          highCapacityDatabaseStorageTotalSizeInGBs: S.optional(S.Number),
          isAutoscaleEnabled: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateExascaleDbStorageVaultInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          odbNetworkId: S.String.pipe(T.HttpLabel("odbNetworkId")),
          displayName: S.optional(S.String),
          peeredCidrsToBeAdded: S.optional(__S(11, __c1, 3)),
          peeredCidrsToBeRemoved: S.optional(__S(11, __c1, 3)),
          s3Access: S.optional(S.String),
          zeroEtlAccess: S.optional(S.String),
          stsAccess: S.optional(S.String),
          kmsAccess: S.optional(S.String),
          s3PolicyDocument: S.optional(S.String),
          stsPolicyDocument: S.optional(S.String),
          kmsPolicyDocument: S.optional(S.String),
          crossRegionS3RestoreSourcesToEnable: S.optional(__S(11, __c1, 3)),
          crossRegionS3RestoreSourcesToDisable: S.optional(__S(11, __c1, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateOdbNetworkInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          odbPeeringConnectionId: S.String.pipe(T.HttpLabel("odbPeeringConnectionId")),
          displayName: S.optional(S.String),
          peerNetworkCidrsToBeAdded: S.optional(__S(11, __c1, 3)),
          peerNetworkCidrsToBeRemoved: S.optional(__S(11, __c1, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateOdbPeeringConnectionInput",
      });
    case 7:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(247, __c30, 7));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
