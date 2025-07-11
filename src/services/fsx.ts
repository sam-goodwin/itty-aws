import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSSimbaAPIService_v20180301 {
  associateFileSystemAliases(
    input: AssociateFileSystemAliasesRequest,
  ): Effect.Effect<
    AssociateFileSystemAliasesResponse,
    BadRequest | FileSystemNotFound | InternalServerError | CommonAwsError
  >;
  cancelDataRepositoryTask(
    input: CancelDataRepositoryTaskRequest,
  ): Effect.Effect<
    CancelDataRepositoryTaskResponse,
    BadRequest | DataRepositoryTaskEnded | DataRepositoryTaskNotFound | InternalServerError | UnsupportedOperation | CommonAwsError
  >;
  copyBackup(
    input: CopyBackupRequest,
  ): Effect.Effect<
    CopyBackupResponse,
    BackupNotFound | BadRequest | IncompatibleParameterError | IncompatibleRegionForMultiAZ | InternalServerError | InvalidDestinationKmsKey | InvalidRegion | InvalidSourceKmsKey | ServiceLimitExceeded | SourceBackupUnavailable | UnsupportedOperation | CommonAwsError
  >;
  copySnapshotAndUpdateVolume(
    input: CopySnapshotAndUpdateVolumeRequest,
  ): Effect.Effect<
    CopySnapshotAndUpdateVolumeResponse,
    BadRequest | IncompatibleParameterError | InternalServerError | ServiceLimitExceeded | CommonAwsError
  >;
  createAndAttachS3AccessPoint(
    input: CreateAndAttachS3AccessPointRequest,
  ): Effect.Effect<
    CreateAndAttachS3AccessPointResponse,
    AccessPointAlreadyOwnedByYou | BadRequest | IncompatibleParameterError | InternalServerError | InvalidAccessPoint | InvalidRequest | TooManyAccessPoints | UnsupportedOperation | VolumeNotFound | CommonAwsError
  >;
  createBackup(
    input: CreateBackupRequest,
  ): Effect.Effect<
    CreateBackupResponse,
    BackupInProgress | BadRequest | FileSystemNotFound | IncompatibleParameterError | InternalServerError | ServiceLimitExceeded | UnsupportedOperation | VolumeNotFound | CommonAwsError
  >;
  createDataRepositoryAssociation(
    input: CreateDataRepositoryAssociationRequest,
  ): Effect.Effect<
    CreateDataRepositoryAssociationResponse,
    BadRequest | FileSystemNotFound | IncompatibleParameterError | InternalServerError | ServiceLimitExceeded | UnsupportedOperation | CommonAwsError
  >;
  createDataRepositoryTask(
    input: CreateDataRepositoryTaskRequest,
  ): Effect.Effect<
    CreateDataRepositoryTaskResponse,
    BadRequest | DataRepositoryTaskExecuting | FileSystemNotFound | IncompatibleParameterError | InternalServerError | ServiceLimitExceeded | UnsupportedOperation | CommonAwsError
  >;
  createFileCache(
    input: CreateFileCacheRequest,
  ): Effect.Effect<
    CreateFileCacheResponse,
    BadRequest | IncompatibleParameterError | InternalServerError | InvalidNetworkSettings | InvalidPerUnitStorageThroughput | MissingFileCacheConfiguration | ServiceLimitExceeded | CommonAwsError
  >;
  createFileSystem(
    input: CreateFileSystemRequest,
  ): Effect.Effect<
    CreateFileSystemResponse,
    ActiveDirectoryError | BadRequest | IncompatibleParameterError | InternalServerError | InvalidExportPath | InvalidImportPath | InvalidNetworkSettings | InvalidPerUnitStorageThroughput | MissingFileSystemConfiguration | ServiceLimitExceeded | CommonAwsError
  >;
  createFileSystemFromBackup(
    input: CreateFileSystemFromBackupRequest,
  ): Effect.Effect<
    CreateFileSystemFromBackupResponse,
    ActiveDirectoryError | BackupNotFound | BadRequest | IncompatibleParameterError | InternalServerError | InvalidNetworkSettings | InvalidPerUnitStorageThroughput | MissingFileSystemConfiguration | ServiceLimitExceeded | CommonAwsError
  >;
  createSnapshot(
    input: CreateSnapshotRequest,
  ): Effect.Effect<
    CreateSnapshotResponse,
    BadRequest | InternalServerError | ServiceLimitExceeded | VolumeNotFound | CommonAwsError
  >;
  createStorageVirtualMachine(
    input: CreateStorageVirtualMachineRequest,
  ): Effect.Effect<
    CreateStorageVirtualMachineResponse,
    ActiveDirectoryError | BadRequest | FileSystemNotFound | IncompatibleParameterError | InternalServerError | ServiceLimitExceeded | UnsupportedOperation | CommonAwsError
  >;
  createVolume(
    input: CreateVolumeRequest,
  ): Effect.Effect<
    CreateVolumeResponse,
    BadRequest | FileSystemNotFound | IncompatibleParameterError | InternalServerError | MissingVolumeConfiguration | ServiceLimitExceeded | StorageVirtualMachineNotFound | UnsupportedOperation | CommonAwsError
  >;
  createVolumeFromBackup(
    input: CreateVolumeFromBackupRequest,
  ): Effect.Effect<
    CreateVolumeFromBackupResponse,
    BackupNotFound | BadRequest | FileSystemNotFound | IncompatibleParameterError | InternalServerError | MissingVolumeConfiguration | ServiceLimitExceeded | StorageVirtualMachineNotFound | CommonAwsError
  >;
  deleteBackup(
    input: DeleteBackupRequest,
  ): Effect.Effect<
    DeleteBackupResponse,
    BackupBeingCopied | BackupInProgress | BackupNotFound | BackupRestoring | BadRequest | IncompatibleParameterError | InternalServerError | CommonAwsError
  >;
  deleteDataRepositoryAssociation(
    input: DeleteDataRepositoryAssociationRequest,
  ): Effect.Effect<
    DeleteDataRepositoryAssociationResponse,
    BadRequest | DataRepositoryAssociationNotFound | IncompatibleParameterError | InternalServerError | ServiceLimitExceeded | CommonAwsError
  >;
  deleteFileCache(
    input: DeleteFileCacheRequest,
  ): Effect.Effect<
    DeleteFileCacheResponse,
    BadRequest | FileCacheNotFound | IncompatibleParameterError | InternalServerError | ServiceLimitExceeded | CommonAwsError
  >;
  deleteFileSystem(
    input: DeleteFileSystemRequest,
  ): Effect.Effect<
    DeleteFileSystemResponse,
    BadRequest | FileSystemNotFound | IncompatibleParameterError | InternalServerError | ServiceLimitExceeded | CommonAwsError
  >;
  deleteSnapshot(
    input: DeleteSnapshotRequest,
  ): Effect.Effect<
    DeleteSnapshotResponse,
    BadRequest | InternalServerError | SnapshotNotFound | CommonAwsError
  >;
  deleteStorageVirtualMachine(
    input: DeleteStorageVirtualMachineRequest,
  ): Effect.Effect<
    DeleteStorageVirtualMachineResponse,
    BadRequest | IncompatibleParameterError | InternalServerError | StorageVirtualMachineNotFound | CommonAwsError
  >;
  deleteVolume(
    input: DeleteVolumeRequest,
  ): Effect.Effect<
    DeleteVolumeResponse,
    BadRequest | IncompatibleParameterError | InternalServerError | ServiceLimitExceeded | VolumeNotFound | CommonAwsError
  >;
  describeBackups(
    input: DescribeBackupsRequest,
  ): Effect.Effect<
    DescribeBackupsResponse,
    BackupNotFound | BadRequest | FileSystemNotFound | InternalServerError | VolumeNotFound | CommonAwsError
  >;
  describeDataRepositoryAssociations(
    input: DescribeDataRepositoryAssociationsRequest,
  ): Effect.Effect<
    DescribeDataRepositoryAssociationsResponse,
    BadRequest | DataRepositoryAssociationNotFound | FileSystemNotFound | InternalServerError | InvalidDataRepositoryType | CommonAwsError
  >;
  describeDataRepositoryTasks(
    input: DescribeDataRepositoryTasksRequest,
  ): Effect.Effect<
    DescribeDataRepositoryTasksResponse,
    BadRequest | DataRepositoryTaskNotFound | FileSystemNotFound | InternalServerError | CommonAwsError
  >;
  describeFileCaches(
    input: DescribeFileCachesRequest,
  ): Effect.Effect<
    DescribeFileCachesResponse,
    BadRequest | FileCacheNotFound | InternalServerError | CommonAwsError
  >;
  describeFileSystemAliases(
    input: DescribeFileSystemAliasesRequest,
  ): Effect.Effect<
    DescribeFileSystemAliasesResponse,
    BadRequest | FileSystemNotFound | InternalServerError | CommonAwsError
  >;
  describeFileSystems(
    input: DescribeFileSystemsRequest,
  ): Effect.Effect<
    DescribeFileSystemsResponse,
    BadRequest | FileSystemNotFound | InternalServerError | CommonAwsError
  >;
  describeS3AccessPointAttachments(
    input: DescribeS3AccessPointAttachmentsRequest,
  ): Effect.Effect<
    DescribeS3AccessPointAttachmentsResponse,
    BadRequest | InternalServerError | S3AccessPointAttachmentNotFound | UnsupportedOperation | CommonAwsError
  >;
  describeSharedVpcConfiguration(
    input: DescribeSharedVpcConfigurationRequest,
  ): Effect.Effect<
    DescribeSharedVpcConfigurationResponse,
    BadRequest | InternalServerError | CommonAwsError
  >;
  describeSnapshots(
    input: DescribeSnapshotsRequest,
  ): Effect.Effect<
    DescribeSnapshotsResponse,
    BadRequest | InternalServerError | SnapshotNotFound | CommonAwsError
  >;
  describeStorageVirtualMachines(
    input: DescribeStorageVirtualMachinesRequest,
  ): Effect.Effect<
    DescribeStorageVirtualMachinesResponse,
    BadRequest | InternalServerError | StorageVirtualMachineNotFound | CommonAwsError
  >;
  describeVolumes(
    input: DescribeVolumesRequest,
  ): Effect.Effect<
    DescribeVolumesResponse,
    BadRequest | InternalServerError | VolumeNotFound | CommonAwsError
  >;
  detachAndDeleteS3AccessPoint(
    input: DetachAndDeleteS3AccessPointRequest,
  ): Effect.Effect<
    DetachAndDeleteS3AccessPointResponse,
    BadRequest | IncompatibleParameterError | InternalServerError | S3AccessPointAttachmentNotFound | UnsupportedOperation | CommonAwsError
  >;
  disassociateFileSystemAliases(
    input: DisassociateFileSystemAliasesRequest,
  ): Effect.Effect<
    DisassociateFileSystemAliasesResponse,
    BadRequest | FileSystemNotFound | InternalServerError | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    BadRequest | InternalServerError | NotServiceResourceError | ResourceDoesNotSupportTagging | ResourceNotFound | CommonAwsError
  >;
  releaseFileSystemNfsV3Locks(
    input: ReleaseFileSystemNfsV3LocksRequest,
  ): Effect.Effect<
    ReleaseFileSystemNfsV3LocksResponse,
    BadRequest | FileSystemNotFound | IncompatibleParameterError | InternalServerError | ServiceLimitExceeded | CommonAwsError
  >;
  restoreVolumeFromSnapshot(
    input: RestoreVolumeFromSnapshotRequest,
  ): Effect.Effect<
    RestoreVolumeFromSnapshotResponse,
    BadRequest | InternalServerError | VolumeNotFound | CommonAwsError
  >;
  startMisconfiguredStateRecovery(
    input: StartMisconfiguredStateRecoveryRequest,
  ): Effect.Effect<
    StartMisconfiguredStateRecoveryResponse,
    BadRequest | FileSystemNotFound | InternalServerError | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    BadRequest | InternalServerError | NotServiceResourceError | ResourceDoesNotSupportTagging | ResourceNotFound | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    BadRequest | InternalServerError | NotServiceResourceError | ResourceDoesNotSupportTagging | ResourceNotFound | CommonAwsError
  >;
  updateDataRepositoryAssociation(
    input: UpdateDataRepositoryAssociationRequest,
  ): Effect.Effect<
    UpdateDataRepositoryAssociationResponse,
    BadRequest | DataRepositoryAssociationNotFound | IncompatibleParameterError | InternalServerError | ServiceLimitExceeded | CommonAwsError
  >;
  updateFileCache(
    input: UpdateFileCacheRequest,
  ): Effect.Effect<
    UpdateFileCacheResponse,
    BadRequest | FileCacheNotFound | IncompatibleParameterError | InternalServerError | MissingFileCacheConfiguration | ServiceLimitExceeded | UnsupportedOperation | CommonAwsError
  >;
  updateFileSystem(
    input: UpdateFileSystemRequest,
  ): Effect.Effect<
    UpdateFileSystemResponse,
    BadRequest | FileSystemNotFound | IncompatibleParameterError | InternalServerError | InvalidNetworkSettings | MissingFileSystemConfiguration | ServiceLimitExceeded | UnsupportedOperation | CommonAwsError
  >;
  updateSharedVpcConfiguration(
    input: UpdateSharedVpcConfigurationRequest,
  ): Effect.Effect<
    UpdateSharedVpcConfigurationResponse,
    BadRequest | IncompatibleParameterError | InternalServerError | CommonAwsError
  >;
  updateSnapshot(
    input: UpdateSnapshotRequest,
  ): Effect.Effect<
    UpdateSnapshotResponse,
    BadRequest | InternalServerError | SnapshotNotFound | CommonAwsError
  >;
  updateStorageVirtualMachine(
    input: UpdateStorageVirtualMachineRequest,
  ): Effect.Effect<
    UpdateStorageVirtualMachineResponse,
    BadRequest | IncompatibleParameterError | InternalServerError | StorageVirtualMachineNotFound | UnsupportedOperation | CommonAwsError
  >;
  updateVolume(
    input: UpdateVolumeRequest,
  ): Effect.Effect<
    UpdateVolumeResponse,
    BadRequest | IncompatibleParameterError | InternalServerError | MissingVolumeConfiguration | VolumeNotFound | CommonAwsError
  >;
}

export type Fsx = AWSSimbaAPIService_v20180301;

export declare class AccessPointAlreadyOwnedByYou extends Data.TaggedError(
  "AccessPointAlreadyOwnedByYou",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export type AccessPointPolicy = string;

export interface ActiveDirectoryBackupAttributes {
  DomainName?: string;
  ActiveDirectoryId?: string;
  ResourceARN?: string;
}
export declare class ActiveDirectoryError extends Data.TaggedError(
  "ActiveDirectoryError",
)<{
  readonly ActiveDirectoryId: string;
  readonly Type?: ActiveDirectoryErrorType;
  readonly Message?: string;
}> {}
export type ActiveDirectoryErrorType = "DOMAIN_NOT_FOUND" | "INCOMPATIBLE_DOMAIN_MODE" | "WRONG_VPC" | "INVALID_DOMAIN_STAGE";
export type ActiveDirectoryFullyQualifiedName = string;

export interface AdministrativeAction {
  AdministrativeActionType?: AdministrativeActionType;
  ProgressPercent?: number;
  RequestTime?: Date | string;
  Status?: Status;
  TargetFileSystemValues?: FileSystem;
  FailureDetails?: AdministrativeActionFailureDetails;
  TargetVolumeValues?: Volume;
  TargetSnapshotValues?: Snapshot;
  TotalTransferBytes?: number;
  RemainingTransferBytes?: number;
}
export interface AdministrativeActionFailureDetails {
  Message?: string;
}
export type AdministrativeActions = Array<AdministrativeAction>;
export type AdministrativeActionType = "FILE_SYSTEM_UPDATE" | "STORAGE_OPTIMIZATION" | "FILE_SYSTEM_ALIAS_ASSOCIATION" | "FILE_SYSTEM_ALIAS_DISASSOCIATION" | "VOLUME_UPDATE" | "SNAPSHOT_UPDATE" | "RELEASE_NFS_V3_LOCKS" | "VOLUME_RESTORE" | "THROUGHPUT_OPTIMIZATION" | "IOPS_OPTIMIZATION" | "STORAGE_TYPE_OPTIMIZATION" | "MISCONFIGURED_STATE_RECOVERY" | "VOLUME_UPDATE_WITH_SNAPSHOT" | "VOLUME_INITIALIZE_WITH_SNAPSHOT" | "DOWNLOAD_DATA_FROM_BACKUP";
export type AdminPassword = string;

export type Aggregate = string;

export interface AggregateConfiguration {
  Aggregates?: Array<string>;
  TotalConstituents?: number;
}
export type AggregateListMultiplier = number;

export type Aggregates = Array<string>;
export interface Alias {
  Name?: string;
  Lifecycle?: AliasLifecycle;
}
export type Aliases = Array<Alias>;
export type AliasLifecycle = "AVAILABLE" | "CREATING" | "DELETING" | "CREATE_FAILED" | "DELETE_FAILED";
export type AlternateDNSName = string;

export type AlternateDNSNames = Array<string>;
export type ArchivePath = string;

export interface AssociateFileSystemAliasesRequest {
  ClientRequestToken?: string;
  FileSystemId: string;
  Aliases: Array<string>;
}
export interface AssociateFileSystemAliasesResponse {
  Aliases?: Array<Alias>;
}
export interface AutocommitPeriod {
  Type: AutocommitPeriodType;
  Value?: number;
}
export type AutocommitPeriodType = "MINUTES" | "HOURS" | "DAYS" | "MONTHS" | "YEARS" | "NONE";
export type AutocommitPeriodValue = number;

export interface AutoExportPolicy {
  Events?: Array<EventType>;
}
export interface AutoImportPolicy {
  Events?: Array<EventType>;
}
export type AutoImportPolicyType = "NONE" | "NEW" | "NEW_CHANGED" | "NEW_CHANGED_DELETED";
export type AutomaticBackupRetentionDays = number;

export type AWSAccountId = string;

export interface Backup {
  BackupId: string;
  Lifecycle: BackupLifecycle;
  FailureDetails?: BackupFailureDetails;
  Type: BackupType;
  ProgressPercent?: number;
  CreationTime: Date | string;
  KmsKeyId?: string;
  ResourceARN?: string;
  Tags?: Array<Tag>;
  FileSystem: FileSystem;
  DirectoryInformation?: ActiveDirectoryBackupAttributes;
  OwnerId?: string;
  SourceBackupId?: string;
  SourceBackupRegion?: string;
  ResourceType?: ResourceType;
  Volume?: Volume;
  SizeInBytes?: number;
}
export declare class BackupBeingCopied extends Data.TaggedError(
  "BackupBeingCopied",
)<{
  readonly Message?: string;
  readonly BackupId?: string;
}> {}
export interface BackupFailureDetails {
  Message?: string;
}
export type BackupId = string;

export type BackupIds = Array<string>;
export declare class BackupInProgress extends Data.TaggedError(
  "BackupInProgress",
)<{
  readonly Message?: string;
}> {}
export type BackupLifecycle = "AVAILABLE" | "CREATING" | "TRANSFERRING" | "DELETED" | "FAILED" | "PENDING" | "COPYING";
export declare class BackupNotFound extends Data.TaggedError(
  "BackupNotFound",
)<{
  readonly Message?: string;
}> {}
export declare class BackupRestoring extends Data.TaggedError(
  "BackupRestoring",
)<{
  readonly Message?: string;
  readonly FileSystemId?: string;
}> {}
export type Backups = Array<Backup>;
export type BackupType = "AUTOMATIC" | "USER_INITIATED" | "AWS_BACKUP";
export declare class BadRequest extends Data.TaggedError(
  "BadRequest",
)<{
  readonly Message?: string;
}> {}
export type BatchImportMetaDataOnCreate = boolean;

export interface CancelDataRepositoryTaskRequest {
  TaskId: string;
}
export interface CancelDataRepositoryTaskResponse {
  Lifecycle?: DataRepositoryTaskLifecycle;
  TaskId?: string;
}
export type CapacityToRelease = number;

export type ClientRequestToken = string;

export interface CompletionReport {
  Enabled: boolean;
  Path?: string;
  Format?: ReportFormat;
  Scope?: ReportScope;
}
export type CoolingPeriod = number;

export interface CopyBackupRequest {
  ClientRequestToken?: string;
  SourceBackupId: string;
  SourceRegion?: string;
  KmsKeyId?: string;
  CopyTags?: boolean;
  Tags?: Array<Tag>;
}
export interface CopyBackupResponse {
  Backup?: Backup;
}
export interface CopySnapshotAndUpdateVolumeRequest {
  ClientRequestToken?: string;
  VolumeId: string;
  SourceSnapshotARN: string;
  CopyStrategy?: OpenZFSCopyStrategy;
  Options?: Array<UpdateOpenZFSVolumeOption>;
}
export interface CopySnapshotAndUpdateVolumeResponse {
  VolumeId?: string;
  Lifecycle?: VolumeLifecycle;
  AdministrativeActions?: Array<AdministrativeAction>;
}
export type CopyTagsToDataRepositoryAssociations = boolean;

export interface CreateAggregateConfiguration {
  Aggregates?: Array<string>;
  ConstituentsPerAggregate?: number;
}
export interface CreateAndAttachS3AccessPointOpenZFSConfiguration {
  VolumeId: string;
  FileSystemIdentity: OpenZFSFileSystemIdentity;
}
export interface CreateAndAttachS3AccessPointRequest {
  ClientRequestToken?: string;
  Name: string;
  Type: S3AccessPointAttachmentType;
  OpenZFSConfiguration?: CreateAndAttachS3AccessPointOpenZFSConfiguration;
  S3AccessPoint?: CreateAndAttachS3AccessPointS3Configuration;
}
export interface CreateAndAttachS3AccessPointResponse {
  S3AccessPointAttachment?: S3AccessPointAttachment;
}
export interface CreateAndAttachS3AccessPointS3Configuration {
  VpcConfiguration?: S3AccessPointVpcConfiguration;
  Policy?: string;
}
export interface CreateBackupRequest {
  FileSystemId?: string;
  ClientRequestToken?: string;
  Tags?: Array<Tag>;
  VolumeId?: string;
}
export interface CreateBackupResponse {
  Backup?: Backup;
}
export interface CreateDataRepositoryAssociationRequest {
  FileSystemId: string;
  FileSystemPath?: string;
  DataRepositoryPath: string;
  BatchImportMetaDataOnCreate?: boolean;
  ImportedFileChunkSize?: number;
  S3?: S3DataRepositoryConfiguration;
  ClientRequestToken?: string;
  Tags?: Array<Tag>;
}
export interface CreateDataRepositoryAssociationResponse {
  Association?: DataRepositoryAssociation;
}
export interface CreateDataRepositoryTaskRequest {
  Type: DataRepositoryTaskType;
  Paths?: Array<string>;
  FileSystemId: string;
  Report: CompletionReport;
  ClientRequestToken?: string;
  Tags?: Array<Tag>;
  CapacityToRelease?: number;
  ReleaseConfiguration?: ReleaseConfiguration;
}
export interface CreateDataRepositoryTaskResponse {
  DataRepositoryTask?: DataRepositoryTask;
}
export type CreateFileCacheDataRepositoryAssociations = Array<FileCacheDataRepositoryAssociation>;
export interface CreateFileCacheLustreConfiguration {
  PerUnitStorageThroughput: number;
  DeploymentType: FileCacheLustreDeploymentType;
  WeeklyMaintenanceStartTime?: string;
  MetadataConfiguration: FileCacheLustreMetadataConfiguration;
}
export interface CreateFileCacheRequest {
  ClientRequestToken?: string;
  FileCacheType: FileCacheType;
  FileCacheTypeVersion: string;
  StorageCapacity: number;
  SubnetIds: Array<string>;
  SecurityGroupIds?: Array<string>;
  Tags?: Array<Tag>;
  CopyTagsToDataRepositoryAssociations?: boolean;
  KmsKeyId?: string;
  LustreConfiguration?: CreateFileCacheLustreConfiguration;
  DataRepositoryAssociations?: Array<FileCacheDataRepositoryAssociation>;
}
export interface CreateFileCacheResponse {
  FileCache?: FileCacheCreating;
}
export interface CreateFileSystemFromBackupRequest {
  BackupId: string;
  ClientRequestToken?: string;
  SubnetIds: Array<string>;
  SecurityGroupIds?: Array<string>;
  Tags?: Array<Tag>;
  WindowsConfiguration?: CreateFileSystemWindowsConfiguration;
  LustreConfiguration?: CreateFileSystemLustreConfiguration;
  StorageType?: StorageType;
  KmsKeyId?: string;
  FileSystemTypeVersion?: string;
  OpenZFSConfiguration?: CreateFileSystemOpenZFSConfiguration;
  StorageCapacity?: number;
}
export interface CreateFileSystemFromBackupResponse {
  FileSystem?: FileSystem;
}
export interface CreateFileSystemLustreConfiguration {
  WeeklyMaintenanceStartTime?: string;
  ImportPath?: string;
  ExportPath?: string;
  ImportedFileChunkSize?: number;
  DeploymentType?: LustreDeploymentType;
  AutoImportPolicy?: AutoImportPolicyType;
  PerUnitStorageThroughput?: number;
  DailyAutomaticBackupStartTime?: string;
  AutomaticBackupRetentionDays?: number;
  CopyTagsToBackups?: boolean;
  DriveCacheType?: DriveCacheType;
  DataCompressionType?: DataCompressionType;
  EfaEnabled?: boolean;
  LogConfiguration?: LustreLogCreateConfiguration;
  RootSquashConfiguration?: LustreRootSquashConfiguration;
  MetadataConfiguration?: CreateFileSystemLustreMetadataConfiguration;
  ThroughputCapacity?: number;
  DataReadCacheConfiguration?: LustreReadCacheConfiguration;
}
export interface CreateFileSystemLustreMetadataConfiguration {
  Iops?: number;
  Mode: MetadataConfigurationMode;
}
export interface CreateFileSystemOntapConfiguration {
  AutomaticBackupRetentionDays?: number;
  DailyAutomaticBackupStartTime?: string;
  DeploymentType: OntapDeploymentType;
  EndpointIpAddressRange?: string;
  FsxAdminPassword?: string;
  DiskIopsConfiguration?: DiskIopsConfiguration;
  PreferredSubnetId?: string;
  RouteTableIds?: Array<string>;
  ThroughputCapacity?: number;
  WeeklyMaintenanceStartTime?: string;
  HAPairs?: number;
  ThroughputCapacityPerHAPair?: number;
}
export interface CreateFileSystemOpenZFSConfiguration {
  AutomaticBackupRetentionDays?: number;
  CopyTagsToBackups?: boolean;
  CopyTagsToVolumes?: boolean;
  DailyAutomaticBackupStartTime?: string;
  DeploymentType: OpenZFSDeploymentType;
  ThroughputCapacity: number;
  WeeklyMaintenanceStartTime?: string;
  DiskIopsConfiguration?: DiskIopsConfiguration;
  RootVolumeConfiguration?: OpenZFSCreateRootVolumeConfiguration;
  PreferredSubnetId?: string;
  EndpointIpAddressRange?: string;
  RouteTableIds?: Array<string>;
  ReadCacheConfiguration?: OpenZFSReadCacheConfiguration;
}
export interface CreateFileSystemRequest {
  ClientRequestToken?: string;
  FileSystemType: FileSystemType;
  StorageCapacity?: number;
  StorageType?: StorageType;
  SubnetIds: Array<string>;
  SecurityGroupIds?: Array<string>;
  Tags?: Array<Tag>;
  KmsKeyId?: string;
  WindowsConfiguration?: CreateFileSystemWindowsConfiguration;
  LustreConfiguration?: CreateFileSystemLustreConfiguration;
  OntapConfiguration?: CreateFileSystemOntapConfiguration;
  FileSystemTypeVersion?: string;
  OpenZFSConfiguration?: CreateFileSystemOpenZFSConfiguration;
}
export interface CreateFileSystemResponse {
  FileSystem?: FileSystem;
}
export interface CreateFileSystemWindowsConfiguration {
  ActiveDirectoryId?: string;
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
  DeploymentType?: WindowsDeploymentType;
  PreferredSubnetId?: string;
  ThroughputCapacity: number;
  WeeklyMaintenanceStartTime?: string;
  DailyAutomaticBackupStartTime?: string;
  AutomaticBackupRetentionDays?: number;
  CopyTagsToBackups?: boolean;
  Aliases?: Array<string>;
  AuditLogConfiguration?: WindowsAuditLogCreateConfiguration;
  DiskIopsConfiguration?: DiskIopsConfiguration;
}
export interface CreateOntapVolumeConfiguration {
  JunctionPath?: string;
  SecurityStyle?: SecurityStyle;
  SizeInMegabytes?: number;
  StorageEfficiencyEnabled?: boolean;
  StorageVirtualMachineId: string;
  TieringPolicy?: TieringPolicy;
  OntapVolumeType?: InputOntapVolumeType;
  SnapshotPolicy?: string;
  CopyTagsToBackups?: boolean;
  SnaplockConfiguration?: CreateSnaplockConfiguration;
  VolumeStyle?: VolumeStyle;
  AggregateConfiguration?: CreateAggregateConfiguration;
  SizeInBytes?: number;
}
export interface CreateOpenZFSOriginSnapshotConfiguration {
  SnapshotARN: string;
  CopyStrategy: OpenZFSCopyStrategy;
}
export interface CreateOpenZFSVolumeConfiguration {
  ParentVolumeId: string;
  StorageCapacityReservationGiB?: number;
  StorageCapacityQuotaGiB?: number;
  RecordSizeKiB?: number;
  DataCompressionType?: OpenZFSDataCompressionType;
  CopyTagsToSnapshots?: boolean;
  OriginSnapshot?: CreateOpenZFSOriginSnapshotConfiguration;
  ReadOnly?: boolean;
  NfsExports?: Array<OpenZFSNfsExport>;
  UserAndGroupQuotas?: Array<OpenZFSUserOrGroupQuota>;
}
export interface CreateSnaplockConfiguration {
  AuditLogVolume?: boolean;
  AutocommitPeriod?: AutocommitPeriod;
  PrivilegedDelete?: PrivilegedDelete;
  RetentionPeriod?: SnaplockRetentionPeriod;
  SnaplockType: SnaplockType;
  VolumeAppendModeEnabled?: boolean;
}
export interface CreateSnapshotRequest {
  ClientRequestToken?: string;
  Name: string;
  VolumeId: string;
  Tags?: Array<Tag>;
}
export interface CreateSnapshotResponse {
  Snapshot?: Snapshot;
}
export interface CreateStorageVirtualMachineRequest {
  ActiveDirectoryConfiguration?: CreateSvmActiveDirectoryConfiguration;
  ClientRequestToken?: string;
  FileSystemId: string;
  Name: string;
  SvmAdminPassword?: string;
  Tags?: Array<Tag>;
  RootVolumeSecurityStyle?: StorageVirtualMachineRootVolumeSecurityStyle;
}
export interface CreateStorageVirtualMachineResponse {
  StorageVirtualMachine?: StorageVirtualMachine;
}
export interface CreateSvmActiveDirectoryConfiguration {
  NetBiosName: string;
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
}
export interface CreateVolumeFromBackupRequest {
  BackupId: string;
  ClientRequestToken?: string;
  Name: string;
  OntapConfiguration?: CreateOntapVolumeConfiguration;
  Tags?: Array<Tag>;
}
export interface CreateVolumeFromBackupResponse {
  Volume?: Volume;
}
export interface CreateVolumeRequest {
  ClientRequestToken?: string;
  VolumeType: VolumeType;
  Name: string;
  OntapConfiguration?: CreateOntapVolumeConfiguration;
  Tags?: Array<Tag>;
  OpenZFSConfiguration?: CreateOpenZFSVolumeConfiguration;
}
export interface CreateVolumeResponse {
  Volume?: Volume;
}
export type CreationTime = Date | string;

export type DailyTime = string;

export type DataCompressionType = "NONE" | "LZ4";
export interface DataRepositoryAssociation {
  AssociationId?: string;
  ResourceARN?: string;
  FileSystemId?: string;
  Lifecycle?: DataRepositoryLifecycle;
  FailureDetails?: DataRepositoryFailureDetails;
  FileSystemPath?: string;
  DataRepositoryPath?: string;
  BatchImportMetaDataOnCreate?: boolean;
  ImportedFileChunkSize?: number;
  S3?: S3DataRepositoryConfiguration;
  Tags?: Array<Tag>;
  CreationTime?: Date | string;
  FileCacheId?: string;
  FileCachePath?: string;
  DataRepositorySubdirectories?: Array<string>;
  NFS?: NFSDataRepositoryConfiguration;
}
export type DataRepositoryAssociationId = string;

export type DataRepositoryAssociationIds = Array<string>;
export declare class DataRepositoryAssociationNotFound extends Data.TaggedError(
  "DataRepositoryAssociationNotFound",
)<{
  readonly Message?: string;
}> {}
export type DataRepositoryAssociations = Array<DataRepositoryAssociation>;
export interface DataRepositoryConfiguration {
  Lifecycle?: DataRepositoryLifecycle;
  ImportPath?: string;
  ExportPath?: string;
  ImportedFileChunkSize?: number;
  AutoImportPolicy?: AutoImportPolicyType;
  FailureDetails?: DataRepositoryFailureDetails;
}
export interface DataRepositoryFailureDetails {
  Message?: string;
}
export type DataRepositoryLifecycle = "CREATING" | "AVAILABLE" | "MISCONFIGURED" | "UPDATING" | "DELETING" | "FAILED";
export interface DataRepositoryTask {
  TaskId: string;
  Lifecycle: DataRepositoryTaskLifecycle;
  Type: DataRepositoryTaskType;
  CreationTime: Date | string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  ResourceARN?: string;
  Tags?: Array<Tag>;
  FileSystemId?: string;
  Paths?: Array<string>;
  FailureDetails?: DataRepositoryTaskFailureDetails;
  Status?: DataRepositoryTaskStatus;
  Report?: CompletionReport;
  CapacityToRelease?: number;
  FileCacheId?: string;
  ReleaseConfiguration?: ReleaseConfiguration;
}
export declare class DataRepositoryTaskEnded extends Data.TaggedError(
  "DataRepositoryTaskEnded",
)<{
  readonly Message?: string;
}> {}
export declare class DataRepositoryTaskExecuting extends Data.TaggedError(
  "DataRepositoryTaskExecuting",
)<{
  readonly Message?: string;
}> {}
export interface DataRepositoryTaskFailureDetails {
  Message?: string;
}
export interface DataRepositoryTaskFilter {
  Name?: DataRepositoryTaskFilterName;
  Values?: Array<string>;
}
export type DataRepositoryTaskFilterName = "FILE_SYSTEM_ID" | "TASK_LIFECYCLE" | "DATA_REPO_ASSOCIATION_ID" | "FILE_CACHE_ID";
export type DataRepositoryTaskFilters = Array<DataRepositoryTaskFilter>;
export type DataRepositoryTaskFilterValue = string;

export type DataRepositoryTaskFilterValues = Array<string>;
export type DataRepositoryTaskLifecycle = "PENDING" | "EXECUTING" | "FAILED" | "SUCCEEDED" | "CANCELED" | "CANCELING";
export declare class DataRepositoryTaskNotFound extends Data.TaggedError(
  "DataRepositoryTaskNotFound",
)<{
  readonly Message?: string;
}> {}
export type DataRepositoryTaskPath = string;

export type DataRepositoryTaskPaths = Array<string>;
export type DataRepositoryTasks = Array<DataRepositoryTask>;
export interface DataRepositoryTaskStatus {
  TotalCount?: number;
  SucceededCount?: number;
  FailedCount?: number;
  LastUpdatedTime?: Date | string;
  ReleasedCapacity?: number;
}
export type DataRepositoryTaskType = "EXPORT" | "IMPORT" | "EVICTION" | "AUTO_TRIGGERED_EVICTION";
export interface DeleteBackupRequest {
  BackupId: string;
  ClientRequestToken?: string;
}
export interface DeleteBackupResponse {
  BackupId?: string;
  Lifecycle?: BackupLifecycle;
}
export type DeleteDataInFileSystem = boolean;

export interface DeleteDataRepositoryAssociationRequest {
  AssociationId: string;
  ClientRequestToken?: string;
  DeleteDataInFileSystem?: boolean;
}
export interface DeleteDataRepositoryAssociationResponse {
  AssociationId?: string;
  Lifecycle?: DataRepositoryLifecycle;
  DeleteDataInFileSystem?: boolean;
}
export interface DeleteFileCacheRequest {
  FileCacheId: string;
  ClientRequestToken?: string;
}
export interface DeleteFileCacheResponse {
  FileCacheId?: string;
  Lifecycle?: FileCacheLifecycle;
}
export interface DeleteFileSystemLustreConfiguration {
  SkipFinalBackup?: boolean;
  FinalBackupTags?: Array<Tag>;
}
export interface DeleteFileSystemLustreResponse {
  FinalBackupId?: string;
  FinalBackupTags?: Array<Tag>;
}
export interface DeleteFileSystemOpenZFSConfiguration {
  SkipFinalBackup?: boolean;
  FinalBackupTags?: Array<Tag>;
  Options?: Array<DeleteFileSystemOpenZFSOption>;
}
export type DeleteFileSystemOpenZFSOption = "DELETE_CHILD_VOLUMES_AND_SNAPSHOTS";
export type DeleteFileSystemOpenZFSOptions = Array<DeleteFileSystemOpenZFSOption>;
export interface DeleteFileSystemOpenZFSResponse {
  FinalBackupId?: string;
  FinalBackupTags?: Array<Tag>;
}
export interface DeleteFileSystemRequest {
  FileSystemId: string;
  ClientRequestToken?: string;
  WindowsConfiguration?: DeleteFileSystemWindowsConfiguration;
  LustreConfiguration?: DeleteFileSystemLustreConfiguration;
  OpenZFSConfiguration?: DeleteFileSystemOpenZFSConfiguration;
}
export interface DeleteFileSystemResponse {
  FileSystemId?: string;
  Lifecycle?: FileSystemLifecycle;
  WindowsResponse?: DeleteFileSystemWindowsResponse;
  LustreResponse?: DeleteFileSystemLustreResponse;
  OpenZFSResponse?: DeleteFileSystemOpenZFSResponse;
}
export interface DeleteFileSystemWindowsConfiguration {
  SkipFinalBackup?: boolean;
  FinalBackupTags?: Array<Tag>;
}
export interface DeleteFileSystemWindowsResponse {
  FinalBackupId?: string;
  FinalBackupTags?: Array<Tag>;
}
export type DeleteOpenZFSVolumeOption = "DELETE_CHILD_VOLUMES_AND_SNAPSHOTS";
export type DeleteOpenZFSVolumeOptions = Array<DeleteOpenZFSVolumeOption>;
export interface DeleteSnapshotRequest {
  ClientRequestToken?: string;
  SnapshotId: string;
}
export interface DeleteSnapshotResponse {
  SnapshotId?: string;
  Lifecycle?: SnapshotLifecycle;
}
export interface DeleteStorageVirtualMachineRequest {
  ClientRequestToken?: string;
  StorageVirtualMachineId: string;
}
export interface DeleteStorageVirtualMachineResponse {
  StorageVirtualMachineId?: string;
  Lifecycle?: StorageVirtualMachineLifecycle;
}
export interface DeleteVolumeOntapConfiguration {
  SkipFinalBackup?: boolean;
  FinalBackupTags?: Array<Tag>;
  BypassSnaplockEnterpriseRetention?: boolean;
}
export interface DeleteVolumeOntapResponse {
  FinalBackupId?: string;
  FinalBackupTags?: Array<Tag>;
}
export interface DeleteVolumeOpenZFSConfiguration {
  Options?: Array<DeleteOpenZFSVolumeOption>;
}
export interface DeleteVolumeRequest {
  ClientRequestToken?: string;
  VolumeId: string;
  OntapConfiguration?: DeleteVolumeOntapConfiguration;
  OpenZFSConfiguration?: DeleteVolumeOpenZFSConfiguration;
}
export interface DeleteVolumeResponse {
  VolumeId?: string;
  Lifecycle?: VolumeLifecycle;
  OntapResponse?: DeleteVolumeOntapResponse;
}
export interface DescribeBackupsRequest {
  BackupIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeBackupsResponse {
  Backups?: Array<Backup>;
  NextToken?: string;
}
export interface DescribeDataRepositoryAssociationsRequest {
  AssociationIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeDataRepositoryAssociationsResponse {
  Associations?: Array<DataRepositoryAssociation>;
  NextToken?: string;
}
export interface DescribeDataRepositoryTasksRequest {
  TaskIds?: Array<string>;
  Filters?: Array<DataRepositoryTaskFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeDataRepositoryTasksResponse {
  DataRepositoryTasks?: Array<DataRepositoryTask>;
  NextToken?: string;
}
export interface DescribeFileCachesRequest {
  FileCacheIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeFileCachesResponse {
  FileCaches?: Array<FileCache>;
  NextToken?: string;
}
export interface DescribeFileSystemAliasesRequest {
  ClientRequestToken?: string;
  FileSystemId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeFileSystemAliasesResponse {
  Aliases?: Array<Alias>;
  NextToken?: string;
}
export interface DescribeFileSystemsRequest {
  FileSystemIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeFileSystemsResponse {
  FileSystems?: Array<FileSystem>;
  NextToken?: string;
}
export interface DescribeS3AccessPointAttachmentsRequest {
  Names?: Array<string>;
  Filters?: Array<S3AccessPointAttachmentsFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeS3AccessPointAttachmentsResponse {
  S3AccessPointAttachments?: Array<S3AccessPointAttachment>;
  NextToken?: string;
}
export interface DescribeSharedVpcConfigurationRequest {
}
export interface DescribeSharedVpcConfigurationResponse {
  EnableFsxRouteTableUpdatesFromParticipantAccounts?: string;
}
export interface DescribeSnapshotsRequest {
  SnapshotIds?: Array<string>;
  Filters?: Array<SnapshotFilter>;
  MaxResults?: number;
  NextToken?: string;
  IncludeShared?: boolean;
}
export interface DescribeSnapshotsResponse {
  Snapshots?: Array<Snapshot>;
  NextToken?: string;
}
export interface DescribeStorageVirtualMachinesRequest {
  StorageVirtualMachineIds?: Array<string>;
  Filters?: Array<StorageVirtualMachineFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeStorageVirtualMachinesResponse {
  StorageVirtualMachines?: Array<StorageVirtualMachine>;
  NextToken?: string;
}
export interface DescribeVolumesRequest {
  VolumeIds?: Array<string>;
  Filters?: Array<VolumeFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeVolumesResponse {
  Volumes?: Array<Volume>;
  NextToken?: string;
}
export interface DetachAndDeleteS3AccessPointRequest {
  ClientRequestToken?: string;
  Name: string;
}
export interface DetachAndDeleteS3AccessPointResponse {
  Lifecycle?: S3AccessPointAttachmentLifecycle;
  Name?: string;
}
export type DirectoryId = string;

export type DirectoryPassword = string;

export type DirectoryUserName = string;

export interface DisassociateFileSystemAliasesRequest {
  ClientRequestToken?: string;
  FileSystemId: string;
  Aliases: Array<string>;
}
export interface DisassociateFileSystemAliasesResponse {
  Aliases?: Array<Alias>;
}
export interface DiskIopsConfiguration {
  Mode?: DiskIopsConfigurationMode;
  Iops?: number;
}
export type DiskIopsConfigurationMode = "AUTOMATIC" | "USER_PROVISIONED";
export type DnsIps = Array<string>;
export type DNSName = string;

export type DriveCacheType = "NONE" | "READ";
export interface DurationSinceLastAccess {
  Unit?: Unit;
  Value?: number;
}
export type EndTime = Date | string;

export type ErrorCode = string;

export type ErrorMessage = string;

export type EventType = "NEW" | "CHANGED" | "DELETED";
export type EventTypes = Array<EventType>;
export type FailedCount = number;

export interface FileCache {
  OwnerId?: string;
  CreationTime?: Date | string;
  FileCacheId?: string;
  FileCacheType?: FileCacheType;
  FileCacheTypeVersion?: string;
  Lifecycle?: FileCacheLifecycle;
  FailureDetails?: FileCacheFailureDetails;
  StorageCapacity?: number;
  VpcId?: string;
  SubnetIds?: Array<string>;
  NetworkInterfaceIds?: Array<string>;
  DNSName?: string;
  KmsKeyId?: string;
  ResourceARN?: string;
  LustreConfiguration?: FileCacheLustreConfiguration;
  DataRepositoryAssociationIds?: Array<string>;
}
export interface FileCacheCreating {
  OwnerId?: string;
  CreationTime?: Date | string;
  FileCacheId?: string;
  FileCacheType?: FileCacheType;
  FileCacheTypeVersion?: string;
  Lifecycle?: FileCacheLifecycle;
  FailureDetails?: FileCacheFailureDetails;
  StorageCapacity?: number;
  VpcId?: string;
  SubnetIds?: Array<string>;
  NetworkInterfaceIds?: Array<string>;
  DNSName?: string;
  KmsKeyId?: string;
  ResourceARN?: string;
  Tags?: Array<Tag>;
  CopyTagsToDataRepositoryAssociations?: boolean;
  LustreConfiguration?: FileCacheLustreConfiguration;
  DataRepositoryAssociationIds?: Array<string>;
}
export interface FileCacheDataRepositoryAssociation {
  FileCachePath: string;
  DataRepositoryPath: string;
  DataRepositorySubdirectories?: Array<string>;
  NFS?: FileCacheNFSConfiguration;
}
export interface FileCacheFailureDetails {
  Message?: string;
}
export type FileCacheId = string;

export type FileCacheIds = Array<string>;
export type FileCacheLifecycle = "AVAILABLE" | "CREATING" | "DELETING" | "UPDATING" | "FAILED";
export interface FileCacheLustreConfiguration {
  PerUnitStorageThroughput?: number;
  DeploymentType?: FileCacheLustreDeploymentType;
  MountName?: string;
  WeeklyMaintenanceStartTime?: string;
  MetadataConfiguration?: FileCacheLustreMetadataConfiguration;
  LogConfiguration?: LustreLogConfiguration;
}
export type FileCacheLustreDeploymentType = "CACHE_1";
export interface FileCacheLustreMetadataConfiguration {
  StorageCapacity: number;
}
export interface FileCacheNFSConfiguration {
  Version: NfsVersion;
  DnsIps?: Array<string>;
}
export declare class FileCacheNotFound extends Data.TaggedError(
  "FileCacheNotFound",
)<{
  readonly Message?: string;
}> {}
export type FileCaches = Array<FileCache>;
export type FileCacheType = "LUSTRE";
export interface FileSystem {
  OwnerId?: string;
  CreationTime?: Date | string;
  FileSystemId?: string;
  FileSystemType?: FileSystemType;
  Lifecycle?: FileSystemLifecycle;
  FailureDetails?: FileSystemFailureDetails;
  StorageCapacity?: number;
  StorageType?: StorageType;
  VpcId?: string;
  SubnetIds?: Array<string>;
  NetworkInterfaceIds?: Array<string>;
  DNSName?: string;
  KmsKeyId?: string;
  ResourceARN?: string;
  Tags?: Array<Tag>;
  WindowsConfiguration?: WindowsFileSystemConfiguration;
  LustreConfiguration?: LustreFileSystemConfiguration;
  AdministrativeActions?: Array<AdministrativeAction>;
  OntapConfiguration?: OntapFileSystemConfiguration;
  FileSystemTypeVersion?: string;
  OpenZFSConfiguration?: OpenZFSFileSystemConfiguration;
}
export type FileSystemAdministratorsGroupName = string;

export interface FileSystemEndpoint {
  DNSName?: string;
  IpAddresses?: Array<string>;
}
export interface FileSystemEndpoints {
  Intercluster?: FileSystemEndpoint;
  Management?: FileSystemEndpoint;
}
export interface FileSystemFailureDetails {
  Message?: string;
}
export type FileSystemGID = number;

export type FileSystemId = string;

export type FileSystemIds = Array<string>;
export type FileSystemLifecycle = "AVAILABLE" | "CREATING" | "FAILED" | "DELETING" | "MISCONFIGURED" | "UPDATING" | "MISCONFIGURED_UNAVAILABLE";
export interface FileSystemLustreMetadataConfiguration {
  Iops?: number;
  Mode: MetadataConfigurationMode;
}
export type FileSystemMaintenanceOperation = "PATCHING" | "BACKING_UP";
export type FileSystemMaintenanceOperations = Array<FileSystemMaintenanceOperation>;
export declare class FileSystemNotFound extends Data.TaggedError(
  "FileSystemNotFound",
)<{
  readonly Message?: string;
}> {}
export type FileSystems = Array<FileSystem>;
export type FileSystemSecondaryGIDs = Array<number>;
export type FileSystemType = "WINDOWS" | "LUSTRE" | "ONTAP" | "OPENZFS";
export type FileSystemTypeVersion = string;

export type FileSystemUID = number;

export interface Filter {
  Name?: FilterName;
  Values?: Array<string>;
}
export type FilterName = "FILE_SYSTEM_ID" | "BACKUP_TYPE" | "FILE_SYSTEM_TYPE" | "VOLUME_ID" | "DATA_REPOSITORY_TYPE" | "FILE_CACHE_ID" | "FILE_CACHE_TYPE";
export type Filters = Array<Filter>;
export type FilterValue = string;

export type FilterValues = Array<string>;
export type Flag = boolean;

export type FlexCacheEndpointType = "NONE" | "ORIGIN" | "CACHE";
export type GeneralARN = string;

export type HAPairs = number;

export type IncludeShared = boolean;

export declare class IncompatibleParameterError extends Data.TaggedError(
  "IncompatibleParameterError",
)<{
  readonly Parameter: string;
  readonly Message?: string;
}> {}
export declare class IncompatibleRegionForMultiAZ extends Data.TaggedError(
  "IncompatibleRegionForMultiAZ",
)<{
  readonly Message?: string;
}> {}
export type InputOntapVolumeType = "RW" | "DP";
export type IntegerNoMax = number;

export type IntegerNoMaxFromNegativeOne = number;

export type IntegerRecordSizeKiB = number;

export declare class InternalServerError extends Data.TaggedError(
  "InternalServerError",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidAccessPoint extends Data.TaggedError(
  "InvalidAccessPoint",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export declare class InvalidDataRepositoryType extends Data.TaggedError(
  "InvalidDataRepositoryType",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidDestinationKmsKey extends Data.TaggedError(
  "InvalidDestinationKmsKey",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidExportPath extends Data.TaggedError(
  "InvalidExportPath",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidImportPath extends Data.TaggedError(
  "InvalidImportPath",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidNetworkSettings extends Data.TaggedError(
  "InvalidNetworkSettings",
)<{
  readonly Message?: string;
  readonly InvalidSubnetId?: string;
  readonly InvalidSecurityGroupId?: string;
  readonly InvalidRouteTableId?: string;
}> {}
export declare class InvalidPerUnitStorageThroughput extends Data.TaggedError(
  "InvalidPerUnitStorageThroughput",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRegion extends Data.TaggedError(
  "InvalidRegion",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequest extends Data.TaggedError(
  "InvalidRequest",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export declare class InvalidSourceKmsKey extends Data.TaggedError(
  "InvalidSourceKmsKey",
)<{
  readonly Message?: string;
}> {}
export type Iops = number;

export type IpAddress = string;

export type IpAddressRange = string;

export type JunctionPath = string;

export type KmsKeyId = string;

export type LastUpdatedTime = Date | string;

export interface LifecycleTransitionReason {
  Message?: string;
}
export type LimitedMaxResults = number;

export interface ListTagsForResourceRequest {
  ResourceARN: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
  NextToken?: string;
}
export type LustreAccessAuditLogLevel = "DISABLED" | "WARN_ONLY" | "ERROR_ONLY" | "WARN_ERROR";
export type LustreDeploymentType = "SCRATCH_1" | "SCRATCH_2" | "PERSISTENT_1" | "PERSISTENT_2";
export interface LustreFileSystemConfiguration {
  WeeklyMaintenanceStartTime?: string;
  DataRepositoryConfiguration?: DataRepositoryConfiguration;
  DeploymentType?: LustreDeploymentType;
  PerUnitStorageThroughput?: number;
  MountName?: string;
  DailyAutomaticBackupStartTime?: string;
  AutomaticBackupRetentionDays?: number;
  CopyTagsToBackups?: boolean;
  DriveCacheType?: DriveCacheType;
  DataCompressionType?: DataCompressionType;
  LogConfiguration?: LustreLogConfiguration;
  RootSquashConfiguration?: LustreRootSquashConfiguration;
  MetadataConfiguration?: FileSystemLustreMetadataConfiguration;
  EfaEnabled?: boolean;
  ThroughputCapacity?: number;
  DataReadCacheConfiguration?: LustreReadCacheConfiguration;
}
export type LustreFileSystemMountName = string;

export interface LustreLogConfiguration {
  Level: LustreAccessAuditLogLevel;
  Destination?: string;
}
export interface LustreLogCreateConfiguration {
  Level: LustreAccessAuditLogLevel;
  Destination?: string;
}
export type LustreNoSquashNid = string;

export type LustreNoSquashNids = Array<string>;
export interface LustreReadCacheConfiguration {
  SizingMode?: LustreReadCacheSizingMode;
  SizeGiB?: number;
}
export type LustreReadCacheSizingMode = "NO_CACHE" | "USER_PROVISIONED" | "PROPORTIONAL_TO_THROUGHPUT_CAPACITY";
export type LustreRootSquash = string;

export interface LustreRootSquashConfiguration {
  RootSquash?: string;
  NoSquashNids?: Array<string>;
}
export type MaxResults = number;

export type Megabytes = number;

export type MegabytesPerSecond = number;

export type MetadataConfigurationMode = "AUTOMATIC" | "USER_PROVISIONED";
export type MetadataIops = number;

export type MetadataStorageCapacity = number;

export declare class MissingFileCacheConfiguration extends Data.TaggedError(
  "MissingFileCacheConfiguration",
)<{
  readonly Message?: string;
}> {}
export declare class MissingFileSystemConfiguration extends Data.TaggedError(
  "MissingFileSystemConfiguration",
)<{
  readonly Message?: string;
}> {}
export declare class MissingVolumeConfiguration extends Data.TaggedError(
  "MissingVolumeConfiguration",
)<{
  readonly Message?: string;
}> {}
export type Namespace = string;

export type NetBiosAlias = string;

export type NetworkInterfaceId = string;

export type NetworkInterfaceIds = Array<string>;
export type NextToken = string;

export interface NFSDataRepositoryConfiguration {
  Version: NfsVersion;
  DnsIps?: Array<string>;
  AutoExportPolicy?: AutoExportPolicy;
}
export type NfsVersion = "NFS3";
export declare class NotServiceResourceError extends Data.TaggedError(
  "NotServiceResourceError",
)<{
  readonly ResourceARN: string;
  readonly Message?: string;
}> {}
export type OntapDeploymentType = "MULTI_AZ_1" | "SINGLE_AZ_1" | "SINGLE_AZ_2" | "MULTI_AZ_2";
export type OntapEndpointIpAddresses = Array<string>;
export interface OntapFileSystemConfiguration {
  AutomaticBackupRetentionDays?: number;
  DailyAutomaticBackupStartTime?: string;
  DeploymentType?: OntapDeploymentType;
  EndpointIpAddressRange?: string;
  Endpoints?: FileSystemEndpoints;
  DiskIopsConfiguration?: DiskIopsConfiguration;
  PreferredSubnetId?: string;
  RouteTableIds?: Array<string>;
  ThroughputCapacity?: number;
  WeeklyMaintenanceStartTime?: string;
  FsxAdminPassword?: string;
  HAPairs?: number;
  ThroughputCapacityPerHAPair?: number;
}
export interface OntapVolumeConfiguration {
  FlexCacheEndpointType?: FlexCacheEndpointType;
  JunctionPath?: string;
  SecurityStyle?: SecurityStyle;
  SizeInMegabytes?: number;
  StorageEfficiencyEnabled?: boolean;
  StorageVirtualMachineId?: string;
  StorageVirtualMachineRoot?: boolean;
  TieringPolicy?: TieringPolicy;
  UUID?: string;
  OntapVolumeType?: OntapVolumeType;
  SnapshotPolicy?: string;
  CopyTagsToBackups?: boolean;
  SnaplockConfiguration?: SnaplockConfiguration;
  VolumeStyle?: VolumeStyle;
  AggregateConfiguration?: AggregateConfiguration;
  SizeInBytes?: number;
}
export type OntapVolumeType = "RW" | "DP" | "LS";
export interface OpenZFSClientConfiguration {
  Clients: string;
  Options: Array<string>;
}
export type OpenZFSClientConfigurations = Array<OpenZFSClientConfiguration>;
export type OpenZFSClients = string;

export type OpenZFSCopyStrategy = "CLONE" | "FULL_COPY" | "INCREMENTAL_COPY";
export interface OpenZFSCreateRootVolumeConfiguration {
  RecordSizeKiB?: number;
  DataCompressionType?: OpenZFSDataCompressionType;
  NfsExports?: Array<OpenZFSNfsExport>;
  UserAndGroupQuotas?: Array<OpenZFSUserOrGroupQuota>;
  CopyTagsToSnapshots?: boolean;
  ReadOnly?: boolean;
}
export type OpenZFSDataCompressionType = "NONE" | "ZSTD" | "LZ4";
export type OpenZFSDeploymentType = "SINGLE_AZ_1" | "SINGLE_AZ_2" | "SINGLE_AZ_HA_1" | "SINGLE_AZ_HA_2" | "MULTI_AZ_1";
export interface OpenZFSFileSystemConfiguration {
  AutomaticBackupRetentionDays?: number;
  CopyTagsToBackups?: boolean;
  CopyTagsToVolumes?: boolean;
  DailyAutomaticBackupStartTime?: string;
  DeploymentType?: OpenZFSDeploymentType;
  ThroughputCapacity?: number;
  WeeklyMaintenanceStartTime?: string;
  DiskIopsConfiguration?: DiskIopsConfiguration;
  RootVolumeId?: string;
  PreferredSubnetId?: string;
  EndpointIpAddressRange?: string;
  RouteTableIds?: Array<string>;
  EndpointIpAddress?: string;
  ReadCacheConfiguration?: OpenZFSReadCacheConfiguration;
}
export interface OpenZFSFileSystemIdentity {
  Type: OpenZFSFileSystemUserType;
  PosixUser?: OpenZFSPosixFileSystemUser;
}
export type OpenZFSFileSystemUserType = "POSIX";
export interface OpenZFSNfsExport {
  ClientConfigurations: Array<OpenZFSClientConfiguration>;
}
export type OpenZFSNfsExportOption = string;

export type OpenZFSNfsExportOptions = Array<string>;
export type OpenZFSNfsExports = Array<OpenZFSNfsExport>;
export interface OpenZFSOriginSnapshotConfiguration {
  SnapshotARN?: string;
  CopyStrategy?: OpenZFSCopyStrategy;
}
export interface OpenZFSPosixFileSystemUser {
  Uid: number;
  Gid: number;
  SecondaryGids?: Array<number>;
}
export type OpenZFSQuotaType = "USER" | "GROUP";
export interface OpenZFSReadCacheConfiguration {
  SizingMode?: OpenZFSReadCacheSizingMode;
  SizeGiB?: number;
}
export type OpenZFSReadCacheSizingMode = "NO_CACHE" | "USER_PROVISIONED" | "PROPORTIONAL_TO_THROUGHPUT_CAPACITY";
export type OpenZFSUserAndGroupQuotas = Array<OpenZFSUserOrGroupQuota>;
export interface OpenZFSUserOrGroupQuota {
  Type: OpenZFSQuotaType;
  Id: number;
  StorageCapacityQuotaGiB: number;
}
export interface OpenZFSVolumeConfiguration {
  ParentVolumeId?: string;
  VolumePath?: string;
  StorageCapacityReservationGiB?: number;
  StorageCapacityQuotaGiB?: number;
  RecordSizeKiB?: number;
  DataCompressionType?: OpenZFSDataCompressionType;
  CopyTagsToSnapshots?: boolean;
  OriginSnapshot?: OpenZFSOriginSnapshotConfiguration;
  ReadOnly?: boolean;
  NfsExports?: Array<OpenZFSNfsExport>;
  UserAndGroupQuotas?: Array<OpenZFSUserOrGroupQuota>;
  RestoreToSnapshot?: string;
  DeleteIntermediateSnaphots?: boolean;
  DeleteClonedVolumes?: boolean;
  DeleteIntermediateData?: boolean;
  SourceSnapshotARN?: string;
  DestinationSnapshot?: string;
  CopyStrategy?: OpenZFSCopyStrategy;
}
export type OrganizationalUnitDistinguishedName = string;

export type Parameter = string;

export type PerUnitStorageThroughput = number;

export type PrivilegedDelete = "DISABLED" | "ENABLED" | "PERMANENTLY_DISABLED";
export type ProgressPercent = number;

export type ReadOnly = boolean;

export type Region = string;

export interface ReleaseConfiguration {
  DurationSinceLastAccess?: DurationSinceLastAccess;
}
export type ReleasedCapacity = number;

export interface ReleaseFileSystemNfsV3LocksRequest {
  FileSystemId: string;
  ClientRequestToken?: string;
}
export interface ReleaseFileSystemNfsV3LocksResponse {
  FileSystem?: FileSystem;
}
export type RemainingTransferBytes = number;

export type ReportFormat = "REPORT_CSV_20191124";
export type ReportScope = "FAILED_FILES_ONLY";
export type RepositoryDnsIps = Array<string>;
export type RequestTime = Date | string;

export type ResourceARN = string;

export declare class ResourceDoesNotSupportTagging extends Data.TaggedError(
  "ResourceDoesNotSupportTagging",
)<{
  readonly ResourceARN: string;
  readonly Message?: string;
}> {}
export declare class ResourceNotFound extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly ResourceARN: string;
  readonly Message?: string;
}> {}
export type ResourceType = "FILE_SYSTEM" | "VOLUME";
export type RestoreOpenZFSVolumeOption = "DELETE_INTERMEDIATE_SNAPSHOTS" | "DELETE_CLONED_VOLUMES";
export type RestoreOpenZFSVolumeOptions = Array<RestoreOpenZFSVolumeOption>;
export interface RestoreVolumeFromSnapshotRequest {
  ClientRequestToken?: string;
  VolumeId: string;
  SnapshotId: string;
  Options?: Array<RestoreOpenZFSVolumeOption>;
}
export interface RestoreVolumeFromSnapshotResponse {
  VolumeId?: string;
  Lifecycle?: VolumeLifecycle;
  AdministrativeActions?: Array<AdministrativeAction>;
}
export interface RetentionPeriod {
  Type: RetentionPeriodType;
  Value?: number;
}
export type RetentionPeriodType = "SECONDS" | "MINUTES" | "HOURS" | "DAYS" | "MONTHS" | "YEARS" | "INFINITE" | "UNSPECIFIED";
export type RetentionPeriodValue = number;

export type RouteTableId = string;

export type RouteTableIds = Array<string>;
export interface S3AccessPoint {
  ResourceARN?: string;
  Alias?: string;
  VpcConfiguration?: S3AccessPointVpcConfiguration;
}
export type S3AccessPointAlias = string;

export interface S3AccessPointAttachment {
  Lifecycle?: S3AccessPointAttachmentLifecycle;
  LifecycleTransitionReason?: LifecycleTransitionReason;
  CreationTime?: Date | string;
  Name?: string;
  Type?: S3AccessPointAttachmentType;
  OpenZFSConfiguration?: S3AccessPointOpenZFSConfiguration;
  S3AccessPoint?: S3AccessPoint;
}
export type S3AccessPointAttachmentLifecycle = "AVAILABLE" | "CREATING" | "DELETING" | "UPDATING" | "FAILED";
export type S3AccessPointAttachmentName = string;

export type S3AccessPointAttachmentNames = Array<string>;
export declare class S3AccessPointAttachmentNotFound extends Data.TaggedError(
  "S3AccessPointAttachmentNotFound",
)<{
  readonly Message?: string;
}> {}
export type S3AccessPointAttachments = Array<S3AccessPointAttachment>;
export interface S3AccessPointAttachmentsFilter {
  Name?: S3AccessPointAttachmentsFilterName;
  Values?: Array<string>;
}
export type S3AccessPointAttachmentsFilterName = "FILE_SYSTEM_ID" | "VOLUME_ID" | "TYPE";
export type S3AccessPointAttachmentsFilters = Array<S3AccessPointAttachmentsFilter>;
export type S3AccessPointAttachmentsFilterValue = string;

export type S3AccessPointAttachmentsFilterValues = Array<string>;
export type S3AccessPointAttachmentType = "OPENZFS";
export interface S3AccessPointOpenZFSConfiguration {
  VolumeId?: string;
  FileSystemIdentity?: OpenZFSFileSystemIdentity;
}
export interface S3AccessPointVpcConfiguration {
  VpcId?: string;
}
export interface S3DataRepositoryConfiguration {
  AutoImportPolicy?: AutoImportPolicy;
  AutoExportPolicy?: AutoExportPolicy;
}
export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export type SecurityStyle = "UNIX" | "NTFS" | "MIXED";
export interface SelfManagedActiveDirectoryAttributes {
  DomainName?: string;
  OrganizationalUnitDistinguishedName?: string;
  FileSystemAdministratorsGroup?: string;
  UserName?: string;
  DnsIps?: Array<string>;
}
export interface SelfManagedActiveDirectoryConfiguration {
  DomainName: string;
  OrganizationalUnitDistinguishedName?: string;
  FileSystemAdministratorsGroup?: string;
  UserName: string;
  Password: string;
  DnsIps: Array<string>;
}
export interface SelfManagedActiveDirectoryConfigurationUpdates {
  UserName?: string;
  Password?: string;
  DnsIps?: Array<string>;
  DomainName?: string;
  OrganizationalUnitDistinguishedName?: string;
  FileSystemAdministratorsGroup?: string;
}
export type ServiceLimit = "FILE_SYSTEM_COUNT" | "TOTAL_THROUGHPUT_CAPACITY" | "TOTAL_STORAGE" | "TOTAL_USER_INITIATED_BACKUPS" | "TOTAL_USER_TAGS" | "TOTAL_IN_PROGRESS_COPY_BACKUPS" | "STORAGE_VIRTUAL_MACHINES_PER_FILE_SYSTEM" | "VOLUMES_PER_FILE_SYSTEM" | "TOTAL_SSD_IOPS" | "FILE_CACHE_COUNT";
export declare class ServiceLimitExceeded extends Data.TaggedError(
  "ServiceLimitExceeded",
)<{
  readonly Limit: ServiceLimit;
  readonly Message?: string;
}> {}
export type SizeInBytes = number;

export interface SnaplockConfiguration {
  AuditLogVolume?: boolean;
  AutocommitPeriod?: AutocommitPeriod;
  PrivilegedDelete?: PrivilegedDelete;
  RetentionPeriod?: SnaplockRetentionPeriod;
  SnaplockType?: SnaplockType;
  VolumeAppendModeEnabled?: boolean;
}
export interface SnaplockRetentionPeriod {
  DefaultRetention: RetentionPeriod;
  MinimumRetention: RetentionPeriod;
  MaximumRetention: RetentionPeriod;
}
export type SnaplockType = "COMPLIANCE" | "ENTERPRISE";
export interface Snapshot {
  ResourceARN?: string;
  SnapshotId?: string;
  Name?: string;
  VolumeId?: string;
  CreationTime?: Date | string;
  Lifecycle?: SnapshotLifecycle;
  LifecycleTransitionReason?: LifecycleTransitionReason;
  Tags?: Array<Tag>;
  AdministrativeActions?: Array<AdministrativeAction>;
}
export interface SnapshotFilter {
  Name?: SnapshotFilterName;
  Values?: Array<string>;
}
export type SnapshotFilterName = "FILE_SYSTEM_ID" | "VOLUME_ID";
export type SnapshotFilters = Array<SnapshotFilter>;
export type SnapshotFilterValue = string;

export type SnapshotFilterValues = Array<string>;
export type SnapshotId = string;

export type SnapshotIds = Array<string>;
export type SnapshotLifecycle = "PENDING" | "CREATING" | "DELETING" | "AVAILABLE";
export type SnapshotName = string;

export declare class SnapshotNotFound extends Data.TaggedError(
  "SnapshotNotFound",
)<{
  readonly Message?: string;
}> {}
export type SnapshotPolicy = string;

export type Snapshots = Array<Snapshot>;
export type SourceBackupId = string;

export declare class SourceBackupUnavailable extends Data.TaggedError(
  "SourceBackupUnavailable",
)<{
  readonly Message?: string;
  readonly BackupId?: string;
}> {}
export interface StartMisconfiguredStateRecoveryRequest {
  ClientRequestToken?: string;
  FileSystemId: string;
}
export interface StartMisconfiguredStateRecoveryResponse {
  FileSystem?: FileSystem;
}
export type StartTime = Date | string;

export type Status = "FAILED" | "IN_PROGRESS" | "PENDING" | "COMPLETED" | "UPDATED_OPTIMIZING" | "OPTIMIZING";
export type StorageCapacity = number;

export type StorageType = "SSD" | "HDD" | "INTELLIGENT_TIERING";
export interface StorageVirtualMachine {
  ActiveDirectoryConfiguration?: SvmActiveDirectoryConfiguration;
  CreationTime?: Date | string;
  Endpoints?: SvmEndpoints;
  FileSystemId?: string;
  Lifecycle?: StorageVirtualMachineLifecycle;
  Name?: string;
  ResourceARN?: string;
  StorageVirtualMachineId?: string;
  Subtype?: StorageVirtualMachineSubtype;
  UUID?: string;
  Tags?: Array<Tag>;
  LifecycleTransitionReason?: LifecycleTransitionReason;
  RootVolumeSecurityStyle?: StorageVirtualMachineRootVolumeSecurityStyle;
}
export interface StorageVirtualMachineFilter {
  Name?: StorageVirtualMachineFilterName;
  Values?: Array<string>;
}
export type StorageVirtualMachineFilterName = "FILE_SYSTEM_ID";
export type StorageVirtualMachineFilters = Array<StorageVirtualMachineFilter>;
export type StorageVirtualMachineFilterValue = string;

export type StorageVirtualMachineFilterValues = Array<string>;
export type StorageVirtualMachineId = string;

export type StorageVirtualMachineIds = Array<string>;
export type StorageVirtualMachineLifecycle = "CREATED" | "CREATING" | "DELETING" | "FAILED" | "MISCONFIGURED" | "PENDING";
export type StorageVirtualMachineName = string;

export declare class StorageVirtualMachineNotFound extends Data.TaggedError(
  "StorageVirtualMachineNotFound",
)<{
  readonly Message?: string;
}> {}
export type StorageVirtualMachineRootVolumeSecurityStyle = "UNIX" | "NTFS" | "MIXED";
export type StorageVirtualMachines = Array<StorageVirtualMachine>;
export type StorageVirtualMachineSubtype = "DEFAULT" | "DP_DESTINATION" | "SYNC_DESTINATION" | "SYNC_SOURCE";
export type SubDirectoriesPaths = Array<string>;
export type SubnetId = string;

export type SubnetIds = Array<string>;
export type SucceededCount = number;

export interface SvmActiveDirectoryConfiguration {
  NetBiosName?: string;
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;
}
export interface SvmEndpoint {
  DNSName?: string;
  IpAddresses?: Array<string>;
}
export interface SvmEndpoints {
  Iscsi?: SvmEndpoint;
  Management?: SvmEndpoint;
  Nfs?: SvmEndpoint;
  Smb?: SvmEndpoint;
}
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export type Tags = Array<Tag>;
export type TagValue = string;

export type TaskId = string;

export type TaskIds = Array<string>;
export type ThroughputCapacityMbps = number;

export type ThroughputCapacityPerHAPair = number;

export interface TieringPolicy {
  CoolingPeriod?: number;
  Name?: TieringPolicyName;
}
export type TieringPolicyName = "SNAPSHOT_ONLY" | "AUTO" | "ALL" | "NONE";
export declare class TooManyAccessPoints extends Data.TaggedError(
  "TooManyAccessPoints",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export type TotalConstituents = number;

export type TotalCount = number;

export type TotalTransferBytes = number;

export declare class UnsupportedOperation extends Data.TaggedError(
  "UnsupportedOperation",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateDataRepositoryAssociationRequest {
  AssociationId: string;
  ClientRequestToken?: string;
  ImportedFileChunkSize?: number;
  S3?: S3DataRepositoryConfiguration;
}
export interface UpdateDataRepositoryAssociationResponse {
  Association?: DataRepositoryAssociation;
}
export interface UpdateFileCacheLustreConfiguration {
  WeeklyMaintenanceStartTime?: string;
}
export interface UpdateFileCacheRequest {
  FileCacheId: string;
  ClientRequestToken?: string;
  LustreConfiguration?: UpdateFileCacheLustreConfiguration;
}
export interface UpdateFileCacheResponse {
  FileCache?: FileCache;
}
export interface UpdateFileSystemLustreConfiguration {
  WeeklyMaintenanceStartTime?: string;
  DailyAutomaticBackupStartTime?: string;
  AutomaticBackupRetentionDays?: number;
  AutoImportPolicy?: AutoImportPolicyType;
  DataCompressionType?: DataCompressionType;
  LogConfiguration?: LustreLogCreateConfiguration;
  RootSquashConfiguration?: LustreRootSquashConfiguration;
  PerUnitStorageThroughput?: number;
  MetadataConfiguration?: UpdateFileSystemLustreMetadataConfiguration;
  ThroughputCapacity?: number;
  DataReadCacheConfiguration?: LustreReadCacheConfiguration;
}
export interface UpdateFileSystemLustreMetadataConfiguration {
  Iops?: number;
  Mode?: MetadataConfigurationMode;
}
export interface UpdateFileSystemOntapConfiguration {
  AutomaticBackupRetentionDays?: number;
  DailyAutomaticBackupStartTime?: string;
  FsxAdminPassword?: string;
  WeeklyMaintenanceStartTime?: string;
  DiskIopsConfiguration?: DiskIopsConfiguration;
  ThroughputCapacity?: number;
  AddRouteTableIds?: Array<string>;
  RemoveRouteTableIds?: Array<string>;
  ThroughputCapacityPerHAPair?: number;
  HAPairs?: number;
}
export interface UpdateFileSystemOpenZFSConfiguration {
  AutomaticBackupRetentionDays?: number;
  CopyTagsToBackups?: boolean;
  CopyTagsToVolumes?: boolean;
  DailyAutomaticBackupStartTime?: string;
  ThroughputCapacity?: number;
  WeeklyMaintenanceStartTime?: string;
  DiskIopsConfiguration?: DiskIopsConfiguration;
  AddRouteTableIds?: Array<string>;
  RemoveRouteTableIds?: Array<string>;
  ReadCacheConfiguration?: OpenZFSReadCacheConfiguration;
}
export interface UpdateFileSystemRequest {
  FileSystemId: string;
  ClientRequestToken?: string;
  StorageCapacity?: number;
  WindowsConfiguration?: UpdateFileSystemWindowsConfiguration;
  LustreConfiguration?: UpdateFileSystemLustreConfiguration;
  OntapConfiguration?: UpdateFileSystemOntapConfiguration;
  OpenZFSConfiguration?: UpdateFileSystemOpenZFSConfiguration;
  StorageType?: StorageType;
  FileSystemTypeVersion?: string;
}
export interface UpdateFileSystemResponse {
  FileSystem?: FileSystem;
}
export interface UpdateFileSystemWindowsConfiguration {
  WeeklyMaintenanceStartTime?: string;
  DailyAutomaticBackupStartTime?: string;
  AutomaticBackupRetentionDays?: number;
  ThroughputCapacity?: number;
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;
  AuditLogConfiguration?: WindowsAuditLogCreateConfiguration;
  DiskIopsConfiguration?: DiskIopsConfiguration;
}
export interface UpdateOntapVolumeConfiguration {
  JunctionPath?: string;
  SecurityStyle?: SecurityStyle;
  SizeInMegabytes?: number;
  StorageEfficiencyEnabled?: boolean;
  TieringPolicy?: TieringPolicy;
  SnapshotPolicy?: string;
  CopyTagsToBackups?: boolean;
  SnaplockConfiguration?: UpdateSnaplockConfiguration;
  SizeInBytes?: number;
}
export interface UpdateOpenZFSVolumeConfiguration {
  StorageCapacityReservationGiB?: number;
  StorageCapacityQuotaGiB?: number;
  RecordSizeKiB?: number;
  DataCompressionType?: OpenZFSDataCompressionType;
  NfsExports?: Array<OpenZFSNfsExport>;
  UserAndGroupQuotas?: Array<OpenZFSUserOrGroupQuota>;
  ReadOnly?: boolean;
}
export type UpdateOpenZFSVolumeOption = "DELETE_INTERMEDIATE_SNAPSHOTS" | "DELETE_CLONED_VOLUMES" | "DELETE_INTERMEDIATE_DATA";
export type UpdateOpenZFSVolumeOptions = Array<UpdateOpenZFSVolumeOption>;
export interface UpdateSharedVpcConfigurationRequest {
  EnableFsxRouteTableUpdatesFromParticipantAccounts?: string;
  ClientRequestToken?: string;
}
export interface UpdateSharedVpcConfigurationResponse {
  EnableFsxRouteTableUpdatesFromParticipantAccounts?: string;
}
export interface UpdateSnaplockConfiguration {
  AuditLogVolume?: boolean;
  AutocommitPeriod?: AutocommitPeriod;
  PrivilegedDelete?: PrivilegedDelete;
  RetentionPeriod?: SnaplockRetentionPeriod;
  VolumeAppendModeEnabled?: boolean;
}
export interface UpdateSnapshotRequest {
  ClientRequestToken?: string;
  Name: string;
  SnapshotId: string;
}
export interface UpdateSnapshotResponse {
  Snapshot?: Snapshot;
}
export interface UpdateStorageVirtualMachineRequest {
  ActiveDirectoryConfiguration?: UpdateSvmActiveDirectoryConfiguration;
  ClientRequestToken?: string;
  StorageVirtualMachineId: string;
  SvmAdminPassword?: string;
}
export interface UpdateStorageVirtualMachineResponse {
  StorageVirtualMachine?: StorageVirtualMachine;
}
export interface UpdateSvmActiveDirectoryConfiguration {
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;
  NetBiosName?: string;
}
export interface UpdateVolumeRequest {
  ClientRequestToken?: string;
  VolumeId: string;
  OntapConfiguration?: UpdateOntapVolumeConfiguration;
  Name?: string;
  OpenZFSConfiguration?: UpdateOpenZFSVolumeConfiguration;
}
export interface UpdateVolumeResponse {
  Volume?: Volume;
}
export type UUID = string;

export type Value = number;

export type VerboseFlag = string;

export interface Volume {
  CreationTime?: Date | string;
  FileSystemId?: string;
  Lifecycle?: VolumeLifecycle;
  Name?: string;
  OntapConfiguration?: OntapVolumeConfiguration;
  ResourceARN?: string;
  Tags?: Array<Tag>;
  VolumeId?: string;
  VolumeType?: VolumeType;
  LifecycleTransitionReason?: LifecycleTransitionReason;
  AdministrativeActions?: Array<AdministrativeAction>;
  OpenZFSConfiguration?: OpenZFSVolumeConfiguration;
}
export type VolumeCapacity = number;

export type VolumeCapacityBytes = number;

export interface VolumeFilter {
  Name?: VolumeFilterName;
  Values?: Array<string>;
}
export type VolumeFilterName = "FILE_SYSTEM_ID" | "STORAGE_VIRTUAL_MACHINE_ID";
export type VolumeFilters = Array<VolumeFilter>;
export type VolumeFilterValue = string;

export type VolumeFilterValues = Array<string>;
export type VolumeId = string;

export type VolumeIds = Array<string>;
export type VolumeLifecycle = "CREATING" | "CREATED" | "DELETING" | "FAILED" | "MISCONFIGURED" | "PENDING" | "AVAILABLE";
export type VolumeName = string;

export declare class VolumeNotFound extends Data.TaggedError(
  "VolumeNotFound",
)<{
  readonly Message?: string;
}> {}
export type VolumePath = string;

export type Volumes = Array<Volume>;
export type VolumeStyle = "FLEXVOL" | "FLEXGROUP";
export type VolumeType = "ONTAP" | "OPENZFS";
export type VpcId = string;

export type WeeklyTime = string;

export type WindowsAccessAuditLogLevel = "DISABLED" | "SUCCESS_ONLY" | "FAILURE_ONLY" | "SUCCESS_AND_FAILURE";
export interface WindowsAuditLogConfiguration {
  FileAccessAuditLogLevel: WindowsAccessAuditLogLevel;
  FileShareAccessAuditLogLevel: WindowsAccessAuditLogLevel;
  AuditLogDestination?: string;
}
export interface WindowsAuditLogCreateConfiguration {
  FileAccessAuditLogLevel: WindowsAccessAuditLogLevel;
  FileShareAccessAuditLogLevel: WindowsAccessAuditLogLevel;
  AuditLogDestination?: string;
}
export type WindowsDeploymentType = "MULTI_AZ_1" | "SINGLE_AZ_1" | "SINGLE_AZ_2";
export interface WindowsFileSystemConfiguration {
  ActiveDirectoryId?: string;
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;
  DeploymentType?: WindowsDeploymentType;
  RemoteAdministrationEndpoint?: string;
  PreferredSubnetId?: string;
  PreferredFileServerIp?: string;
  ThroughputCapacity?: number;
  MaintenanceOperationsInProgress?: Array<FileSystemMaintenanceOperation>;
  WeeklyMaintenanceStartTime?: string;
  DailyAutomaticBackupStartTime?: string;
  AutomaticBackupRetentionDays?: number;
  CopyTagsToBackups?: boolean;
  Aliases?: Array<Alias>;
  AuditLogConfiguration?: WindowsAuditLogConfiguration;
  DiskIopsConfiguration?: DiskIopsConfiguration;
}
export declare namespace AssociateFileSystemAliases {
  export type Input = AssociateFileSystemAliasesRequest;
  export type Output = AssociateFileSystemAliasesResponse;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError;
}

export declare namespace CancelDataRepositoryTask {
  export type Input = CancelDataRepositoryTaskRequest;
  export type Output = CancelDataRepositoryTaskResponse;
  export type Error =
    | BadRequest
    | DataRepositoryTaskEnded
    | DataRepositoryTaskNotFound
    | InternalServerError
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace CopyBackup {
  export type Input = CopyBackupRequest;
  export type Output = CopyBackupResponse;
  export type Error =
    | BackupNotFound
    | BadRequest
    | IncompatibleParameterError
    | IncompatibleRegionForMultiAZ
    | InternalServerError
    | InvalidDestinationKmsKey
    | InvalidRegion
    | InvalidSourceKmsKey
    | ServiceLimitExceeded
    | SourceBackupUnavailable
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace CopySnapshotAndUpdateVolume {
  export type Input = CopySnapshotAndUpdateVolumeRequest;
  export type Output = CopySnapshotAndUpdateVolumeResponse;
  export type Error =
    | BadRequest
    | IncompatibleParameterError
    | InternalServerError
    | ServiceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateAndAttachS3AccessPoint {
  export type Input = CreateAndAttachS3AccessPointRequest;
  export type Output = CreateAndAttachS3AccessPointResponse;
  export type Error =
    | AccessPointAlreadyOwnedByYou
    | BadRequest
    | IncompatibleParameterError
    | InternalServerError
    | InvalidAccessPoint
    | InvalidRequest
    | TooManyAccessPoints
    | UnsupportedOperation
    | VolumeNotFound
    | CommonAwsError;
}

export declare namespace CreateBackup {
  export type Input = CreateBackupRequest;
  export type Output = CreateBackupResponse;
  export type Error =
    | BackupInProgress
    | BadRequest
    | FileSystemNotFound
    | IncompatibleParameterError
    | InternalServerError
    | ServiceLimitExceeded
    | UnsupportedOperation
    | VolumeNotFound
    | CommonAwsError;
}

export declare namespace CreateDataRepositoryAssociation {
  export type Input = CreateDataRepositoryAssociationRequest;
  export type Output = CreateDataRepositoryAssociationResponse;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | IncompatibleParameterError
    | InternalServerError
    | ServiceLimitExceeded
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace CreateDataRepositoryTask {
  export type Input = CreateDataRepositoryTaskRequest;
  export type Output = CreateDataRepositoryTaskResponse;
  export type Error =
    | BadRequest
    | DataRepositoryTaskExecuting
    | FileSystemNotFound
    | IncompatibleParameterError
    | InternalServerError
    | ServiceLimitExceeded
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace CreateFileCache {
  export type Input = CreateFileCacheRequest;
  export type Output = CreateFileCacheResponse;
  export type Error =
    | BadRequest
    | IncompatibleParameterError
    | InternalServerError
    | InvalidNetworkSettings
    | InvalidPerUnitStorageThroughput
    | MissingFileCacheConfiguration
    | ServiceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateFileSystem {
  export type Input = CreateFileSystemRequest;
  export type Output = CreateFileSystemResponse;
  export type Error =
    | ActiveDirectoryError
    | BadRequest
    | IncompatibleParameterError
    | InternalServerError
    | InvalidExportPath
    | InvalidImportPath
    | InvalidNetworkSettings
    | InvalidPerUnitStorageThroughput
    | MissingFileSystemConfiguration
    | ServiceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateFileSystemFromBackup {
  export type Input = CreateFileSystemFromBackupRequest;
  export type Output = CreateFileSystemFromBackupResponse;
  export type Error =
    | ActiveDirectoryError
    | BackupNotFound
    | BadRequest
    | IncompatibleParameterError
    | InternalServerError
    | InvalidNetworkSettings
    | InvalidPerUnitStorageThroughput
    | MissingFileSystemConfiguration
    | ServiceLimitExceeded
    | CommonAwsError;
}

export declare namespace CreateSnapshot {
  export type Input = CreateSnapshotRequest;
  export type Output = CreateSnapshotResponse;
  export type Error =
    | BadRequest
    | InternalServerError
    | ServiceLimitExceeded
    | VolumeNotFound
    | CommonAwsError;
}

export declare namespace CreateStorageVirtualMachine {
  export type Input = CreateStorageVirtualMachineRequest;
  export type Output = CreateStorageVirtualMachineResponse;
  export type Error =
    | ActiveDirectoryError
    | BadRequest
    | FileSystemNotFound
    | IncompatibleParameterError
    | InternalServerError
    | ServiceLimitExceeded
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace CreateVolume {
  export type Input = CreateVolumeRequest;
  export type Output = CreateVolumeResponse;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | IncompatibleParameterError
    | InternalServerError
    | MissingVolumeConfiguration
    | ServiceLimitExceeded
    | StorageVirtualMachineNotFound
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace CreateVolumeFromBackup {
  export type Input = CreateVolumeFromBackupRequest;
  export type Output = CreateVolumeFromBackupResponse;
  export type Error =
    | BackupNotFound
    | BadRequest
    | FileSystemNotFound
    | IncompatibleParameterError
    | InternalServerError
    | MissingVolumeConfiguration
    | ServiceLimitExceeded
    | StorageVirtualMachineNotFound
    | CommonAwsError;
}

export declare namespace DeleteBackup {
  export type Input = DeleteBackupRequest;
  export type Output = DeleteBackupResponse;
  export type Error =
    | BackupBeingCopied
    | BackupInProgress
    | BackupNotFound
    | BackupRestoring
    | BadRequest
    | IncompatibleParameterError
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DeleteDataRepositoryAssociation {
  export type Input = DeleteDataRepositoryAssociationRequest;
  export type Output = DeleteDataRepositoryAssociationResponse;
  export type Error =
    | BadRequest
    | DataRepositoryAssociationNotFound
    | IncompatibleParameterError
    | InternalServerError
    | ServiceLimitExceeded
    | CommonAwsError;
}

export declare namespace DeleteFileCache {
  export type Input = DeleteFileCacheRequest;
  export type Output = DeleteFileCacheResponse;
  export type Error =
    | BadRequest
    | FileCacheNotFound
    | IncompatibleParameterError
    | InternalServerError
    | ServiceLimitExceeded
    | CommonAwsError;
}

export declare namespace DeleteFileSystem {
  export type Input = DeleteFileSystemRequest;
  export type Output = DeleteFileSystemResponse;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | IncompatibleParameterError
    | InternalServerError
    | ServiceLimitExceeded
    | CommonAwsError;
}

export declare namespace DeleteSnapshot {
  export type Input = DeleteSnapshotRequest;
  export type Output = DeleteSnapshotResponse;
  export type Error =
    | BadRequest
    | InternalServerError
    | SnapshotNotFound
    | CommonAwsError;
}

export declare namespace DeleteStorageVirtualMachine {
  export type Input = DeleteStorageVirtualMachineRequest;
  export type Output = DeleteStorageVirtualMachineResponse;
  export type Error =
    | BadRequest
    | IncompatibleParameterError
    | InternalServerError
    | StorageVirtualMachineNotFound
    | CommonAwsError;
}

export declare namespace DeleteVolume {
  export type Input = DeleteVolumeRequest;
  export type Output = DeleteVolumeResponse;
  export type Error =
    | BadRequest
    | IncompatibleParameterError
    | InternalServerError
    | ServiceLimitExceeded
    | VolumeNotFound
    | CommonAwsError;
}

export declare namespace DescribeBackups {
  export type Input = DescribeBackupsRequest;
  export type Output = DescribeBackupsResponse;
  export type Error =
    | BackupNotFound
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | VolumeNotFound
    | CommonAwsError;
}

export declare namespace DescribeDataRepositoryAssociations {
  export type Input = DescribeDataRepositoryAssociationsRequest;
  export type Output = DescribeDataRepositoryAssociationsResponse;
  export type Error =
    | BadRequest
    | DataRepositoryAssociationNotFound
    | FileSystemNotFound
    | InternalServerError
    | InvalidDataRepositoryType
    | CommonAwsError;
}

export declare namespace DescribeDataRepositoryTasks {
  export type Input = DescribeDataRepositoryTasksRequest;
  export type Output = DescribeDataRepositoryTasksResponse;
  export type Error =
    | BadRequest
    | DataRepositoryTaskNotFound
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeFileCaches {
  export type Input = DescribeFileCachesRequest;
  export type Output = DescribeFileCachesResponse;
  export type Error =
    | BadRequest
    | FileCacheNotFound
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeFileSystemAliases {
  export type Input = DescribeFileSystemAliasesRequest;
  export type Output = DescribeFileSystemAliasesResponse;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeFileSystems {
  export type Input = DescribeFileSystemsRequest;
  export type Output = DescribeFileSystemsResponse;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeS3AccessPointAttachments {
  export type Input = DescribeS3AccessPointAttachmentsRequest;
  export type Output = DescribeS3AccessPointAttachmentsResponse;
  export type Error =
    | BadRequest
    | InternalServerError
    | S3AccessPointAttachmentNotFound
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace DescribeSharedVpcConfiguration {
  export type Input = DescribeSharedVpcConfigurationRequest;
  export type Output = DescribeSharedVpcConfigurationResponse;
  export type Error =
    | BadRequest
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeSnapshots {
  export type Input = DescribeSnapshotsRequest;
  export type Output = DescribeSnapshotsResponse;
  export type Error =
    | BadRequest
    | InternalServerError
    | SnapshotNotFound
    | CommonAwsError;
}

export declare namespace DescribeStorageVirtualMachines {
  export type Input = DescribeStorageVirtualMachinesRequest;
  export type Output = DescribeStorageVirtualMachinesResponse;
  export type Error =
    | BadRequest
    | InternalServerError
    | StorageVirtualMachineNotFound
    | CommonAwsError;
}

export declare namespace DescribeVolumes {
  export type Input = DescribeVolumesRequest;
  export type Output = DescribeVolumesResponse;
  export type Error =
    | BadRequest
    | InternalServerError
    | VolumeNotFound
    | CommonAwsError;
}

export declare namespace DetachAndDeleteS3AccessPoint {
  export type Input = DetachAndDeleteS3AccessPointRequest;
  export type Output = DetachAndDeleteS3AccessPointResponse;
  export type Error =
    | BadRequest
    | IncompatibleParameterError
    | InternalServerError
    | S3AccessPointAttachmentNotFound
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace DisassociateFileSystemAliases {
  export type Input = DisassociateFileSystemAliasesRequest;
  export type Output = DisassociateFileSystemAliasesResponse;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequest
    | InternalServerError
    | NotServiceResourceError
    | ResourceDoesNotSupportTagging
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace ReleaseFileSystemNfsV3Locks {
  export type Input = ReleaseFileSystemNfsV3LocksRequest;
  export type Output = ReleaseFileSystemNfsV3LocksResponse;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | IncompatibleParameterError
    | InternalServerError
    | ServiceLimitExceeded
    | CommonAwsError;
}

export declare namespace RestoreVolumeFromSnapshot {
  export type Input = RestoreVolumeFromSnapshotRequest;
  export type Output = RestoreVolumeFromSnapshotResponse;
  export type Error =
    | BadRequest
    | InternalServerError
    | VolumeNotFound
    | CommonAwsError;
}

export declare namespace StartMisconfiguredStateRecovery {
  export type Input = StartMisconfiguredStateRecoveryRequest;
  export type Output = StartMisconfiguredStateRecoveryResponse;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | BadRequest
    | InternalServerError
    | NotServiceResourceError
    | ResourceDoesNotSupportTagging
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | BadRequest
    | InternalServerError
    | NotServiceResourceError
    | ResourceDoesNotSupportTagging
    | ResourceNotFound
    | CommonAwsError;
}

export declare namespace UpdateDataRepositoryAssociation {
  export type Input = UpdateDataRepositoryAssociationRequest;
  export type Output = UpdateDataRepositoryAssociationResponse;
  export type Error =
    | BadRequest
    | DataRepositoryAssociationNotFound
    | IncompatibleParameterError
    | InternalServerError
    | ServiceLimitExceeded
    | CommonAwsError;
}

export declare namespace UpdateFileCache {
  export type Input = UpdateFileCacheRequest;
  export type Output = UpdateFileCacheResponse;
  export type Error =
    | BadRequest
    | FileCacheNotFound
    | IncompatibleParameterError
    | InternalServerError
    | MissingFileCacheConfiguration
    | ServiceLimitExceeded
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace UpdateFileSystem {
  export type Input = UpdateFileSystemRequest;
  export type Output = UpdateFileSystemResponse;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | IncompatibleParameterError
    | InternalServerError
    | InvalidNetworkSettings
    | MissingFileSystemConfiguration
    | ServiceLimitExceeded
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace UpdateSharedVpcConfiguration {
  export type Input = UpdateSharedVpcConfigurationRequest;
  export type Output = UpdateSharedVpcConfigurationResponse;
  export type Error =
    | BadRequest
    | IncompatibleParameterError
    | InternalServerError
    | CommonAwsError;
}

export declare namespace UpdateSnapshot {
  export type Input = UpdateSnapshotRequest;
  export type Output = UpdateSnapshotResponse;
  export type Error =
    | BadRequest
    | InternalServerError
    | SnapshotNotFound
    | CommonAwsError;
}

export declare namespace UpdateStorageVirtualMachine {
  export type Input = UpdateStorageVirtualMachineRequest;
  export type Output = UpdateStorageVirtualMachineResponse;
  export type Error =
    | BadRequest
    | IncompatibleParameterError
    | InternalServerError
    | StorageVirtualMachineNotFound
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace UpdateVolume {
  export type Input = UpdateVolumeRequest;
  export type Output = UpdateVolumeResponse;
  export type Error =
    | BadRequest
    | IncompatibleParameterError
    | InternalServerError
    | MissingVolumeConfiguration
    | VolumeNotFound
    | CommonAwsError;
}

