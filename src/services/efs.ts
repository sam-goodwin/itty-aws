import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface MagnolioAPIService_v20150201 {
  createAccessPoint(
    input: CreateAccessPointRequest,
  ): Effect.Effect<
    AccessPointDescription,
    | AccessPointAlreadyExists
    | AccessPointLimitExceeded
    | BadRequest
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InternalServerError
    | ThrottlingException
    | CommonAwsError
  >;
  createFileSystem(
    input: CreateFileSystemRequest,
  ): Effect.Effect<
    FileSystemDescription,
    | BadRequest
    | FileSystemAlreadyExists
    | FileSystemLimitExceeded
    | InsufficientThroughputCapacity
    | InternalServerError
    | ThroughputLimitExceeded
    | UnsupportedAvailabilityZone
    | CommonAwsError
  >;
  createMountTarget(
    input: CreateMountTargetRequest,
  ): Effect.Effect<
    MountTargetDescription,
    | AvailabilityZonesMismatch
    | BadRequest
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InternalServerError
    | IpAddressInUse
    | MountTargetConflict
    | NetworkInterfaceLimitExceeded
    | NoFreeAddressesInSubnet
    | SecurityGroupLimitExceeded
    | SecurityGroupNotFound
    | SubnetNotFound
    | UnsupportedAvailabilityZone
    | CommonAwsError
  >;
  createReplicationConfiguration(
    input: CreateReplicationConfigurationRequest,
  ): Effect.Effect<
    ReplicationConfigurationDescription,
    | BadRequest
    | ConflictException
    | FileSystemLimitExceeded
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InsufficientThroughputCapacity
    | InternalServerError
    | ReplicationNotFound
    | ThroughputLimitExceeded
    | UnsupportedAvailabilityZone
    | ValidationException
    | CommonAwsError
  >;
  createTags(
    input: CreateTagsRequest,
  ): Effect.Effect<
    {},
    BadRequest | FileSystemNotFound | InternalServerError | CommonAwsError
  >;
  deleteAccessPoint(
    input: DeleteAccessPointRequest,
  ): Effect.Effect<
    {},
    AccessPointNotFound | BadRequest | InternalServerError | CommonAwsError
  >;
  deleteFileSystem(
    input: DeleteFileSystemRequest,
  ): Effect.Effect<
    {},
    | BadRequest
    | FileSystemInUse
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError
  >;
  deleteFileSystemPolicy(
    input: DeleteFileSystemPolicyRequest,
  ): Effect.Effect<
    {},
    | BadRequest
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InternalServerError
    | CommonAwsError
  >;
  deleteMountTarget(
    input: DeleteMountTargetRequest,
  ): Effect.Effect<
    {},
    | BadRequest
    | DependencyTimeout
    | InternalServerError
    | MountTargetNotFound
    | CommonAwsError
  >;
  deleteReplicationConfiguration(
    input: DeleteReplicationConfigurationRequest,
  ): Effect.Effect<
    {},
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | ReplicationNotFound
    | CommonAwsError
  >;
  deleteTags(
    input: DeleteTagsRequest,
  ): Effect.Effect<
    {},
    BadRequest | FileSystemNotFound | InternalServerError | CommonAwsError
  >;
  describeAccessPoints(
    input: DescribeAccessPointsRequest,
  ): Effect.Effect<
    DescribeAccessPointsResponse,
    | AccessPointNotFound
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError
  >;
  describeAccountPreferences(
    input: DescribeAccountPreferencesRequest,
  ): Effect.Effect<
    DescribeAccountPreferencesResponse,
    InternalServerError | CommonAwsError
  >;
  describeBackupPolicy(
    input: DescribeBackupPolicyRequest,
  ): Effect.Effect<
    BackupPolicyDescription,
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | PolicyNotFound
    | ValidationException
    | CommonAwsError
  >;
  describeFileSystemPolicy(
    input: DescribeFileSystemPolicyRequest,
  ): Effect.Effect<
    FileSystemPolicyDescription,
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | PolicyNotFound
    | CommonAwsError
  >;
  describeFileSystems(
    input: DescribeFileSystemsRequest,
  ): Effect.Effect<
    DescribeFileSystemsResponse,
    BadRequest | FileSystemNotFound | InternalServerError | CommonAwsError
  >;
  describeLifecycleConfiguration(
    input: DescribeLifecycleConfigurationRequest,
  ): Effect.Effect<
    LifecycleConfigurationDescription,
    BadRequest | FileSystemNotFound | InternalServerError | CommonAwsError
  >;
  describeMountTargets(
    input: DescribeMountTargetsRequest,
  ): Effect.Effect<
    DescribeMountTargetsResponse,
    | AccessPointNotFound
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | MountTargetNotFound
    | CommonAwsError
  >;
  describeMountTargetSecurityGroups(
    input: DescribeMountTargetSecurityGroupsRequest,
  ): Effect.Effect<
    DescribeMountTargetSecurityGroupsResponse,
    | BadRequest
    | IncorrectMountTargetState
    | InternalServerError
    | MountTargetNotFound
    | CommonAwsError
  >;
  describeReplicationConfigurations(
    input: DescribeReplicationConfigurationsRequest,
  ): Effect.Effect<
    DescribeReplicationConfigurationsResponse,
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | ReplicationNotFound
    | ValidationException
    | CommonAwsError
  >;
  describeTags(
    input: DescribeTagsRequest,
  ): Effect.Effect<
    DescribeTagsResponse,
    BadRequest | FileSystemNotFound | InternalServerError | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessPointNotFound
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError
  >;
  modifyMountTargetSecurityGroups(
    input: ModifyMountTargetSecurityGroupsRequest,
  ): Effect.Effect<
    {},
    | BadRequest
    | IncorrectMountTargetState
    | InternalServerError
    | MountTargetNotFound
    | SecurityGroupLimitExceeded
    | SecurityGroupNotFound
    | CommonAwsError
  >;
  putAccountPreferences(
    input: PutAccountPreferencesRequest,
  ): Effect.Effect<
    PutAccountPreferencesResponse,
    BadRequest | InternalServerError | CommonAwsError
  >;
  putBackupPolicy(
    input: PutBackupPolicyRequest,
  ): Effect.Effect<
    BackupPolicyDescription,
    | BadRequest
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InternalServerError
    | ValidationException
    | CommonAwsError
  >;
  putFileSystemPolicy(
    input: PutFileSystemPolicyRequest,
  ): Effect.Effect<
    FileSystemPolicyDescription,
    | BadRequest
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InternalServerError
    | InvalidPolicyException
    | CommonAwsError
  >;
  putLifecycleConfiguration(
    input: PutLifecycleConfigurationRequest,
  ): Effect.Effect<
    LifecycleConfigurationDescription,
    | BadRequest
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InternalServerError
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessPointNotFound
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessPointNotFound
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError
  >;
  updateFileSystem(
    input: UpdateFileSystemRequest,
  ): Effect.Effect<
    FileSystemDescription,
    | BadRequest
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InsufficientThroughputCapacity
    | InternalServerError
    | ThroughputLimitExceeded
    | TooManyRequests
    | CommonAwsError
  >;
  updateFileSystemProtection(
    input: UpdateFileSystemProtectionRequest,
  ): Effect.Effect<
    FileSystemProtectionDescription,
    | BadRequest
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InsufficientThroughputCapacity
    | InternalServerError
    | ReplicationAlreadyExists
    | ThroughputLimitExceeded
    | TooManyRequests
    | CommonAwsError
  >;
}

export type Efs = MagnolioAPIService_v20150201;

export declare class AccessPointAlreadyExists extends Data.TaggedError(
  "AccessPointAlreadyExists",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
  readonly AccessPointId: string;
}> {}
export type AccessPointArn = string;

export interface AccessPointDescription {
  ClientToken?: string;
  Name?: string;
  Tags?: Array<Tag>;
  AccessPointId?: string;
  AccessPointArn?: string;
  FileSystemId?: string;
  PosixUser?: PosixUser;
  RootDirectory?: RootDirectory;
  OwnerId?: string;
  LifeCycleState?: LifeCycleState;
}
export type AccessPointDescriptions = Array<AccessPointDescription>;
export type AccessPointId = string;

export declare class AccessPointLimitExceeded extends Data.TaggedError(
  "AccessPointLimitExceeded",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export declare class AccessPointNotFound extends Data.TaggedError(
  "AccessPointNotFound",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export type AvailabilityZoneId = string;

export type AvailabilityZoneName = string;

export declare class AvailabilityZonesMismatch extends Data.TaggedError(
  "AvailabilityZonesMismatch",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export type AwsAccountId = string;

export type Backup = boolean;

export interface BackupPolicy {
  Status: Status;
}
export interface BackupPolicyDescription {
  BackupPolicy?: BackupPolicy;
}
export declare class BadRequest extends Data.TaggedError("BadRequest")<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export type BypassPolicyLockoutSafetyCheck = boolean;

export type ClientToken = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export interface CreateAccessPointRequest {
  ClientToken: string;
  Tags?: Array<Tag>;
  FileSystemId: string;
  PosixUser?: PosixUser;
  RootDirectory?: RootDirectory;
}
export interface CreateFileSystemRequest {
  CreationToken: string;
  PerformanceMode?: PerformanceMode;
  Encrypted?: boolean;
  KmsKeyId?: string;
  ThroughputMode?: ThroughputMode;
  ProvisionedThroughputInMibps?: number;
  AvailabilityZoneName?: string;
  Backup?: boolean;
  Tags?: Array<Tag>;
}
export interface CreateMountTargetRequest {
  FileSystemId: string;
  SubnetId: string;
  IpAddress?: string;
  Ipv6Address?: string;
  IpAddressType?: IpAddressType;
  SecurityGroups?: Array<string>;
}
export interface CreateReplicationConfigurationRequest {
  SourceFileSystemId: string;
  Destinations: Array<DestinationToCreate>;
}
export interface CreateTagsRequest {
  FileSystemId: string;
  Tags: Array<Tag>;
}
export interface CreationInfo {
  OwnerUid: number;
  OwnerGid: number;
  Permissions: string;
}
export type CreationToken = string;

export interface DeleteAccessPointRequest {
  AccessPointId: string;
}
export interface DeleteFileSystemPolicyRequest {
  FileSystemId: string;
}
export interface DeleteFileSystemRequest {
  FileSystemId: string;
}
export interface DeleteMountTargetRequest {
  MountTargetId: string;
}
export interface DeleteReplicationConfigurationRequest {
  SourceFileSystemId: string;
  DeletionMode?: DeletionMode;
}
export interface DeleteTagsRequest {
  FileSystemId: string;
  TagKeys: Array<string>;
}
export type DeletionMode = "ALL_CONFIGURATIONS" | "LOCAL_CONFIGURATION_ONLY";
export declare class DependencyTimeout extends Data.TaggedError(
  "DependencyTimeout",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export interface DescribeAccessPointsRequest {
  MaxResults?: number;
  NextToken?: string;
  AccessPointId?: string;
  FileSystemId?: string;
}
export interface DescribeAccessPointsResponse {
  AccessPoints?: Array<AccessPointDescription>;
  NextToken?: string;
}
export interface DescribeAccountPreferencesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeAccountPreferencesResponse {
  ResourceIdPreference?: ResourceIdPreference;
  NextToken?: string;
}
export interface DescribeBackupPolicyRequest {
  FileSystemId: string;
}
export interface DescribeFileSystemPolicyRequest {
  FileSystemId: string;
}
export interface DescribeFileSystemsRequest {
  MaxItems?: number;
  Marker?: string;
  CreationToken?: string;
  FileSystemId?: string;
}
export interface DescribeFileSystemsResponse {
  Marker?: string;
  FileSystems?: Array<FileSystemDescription>;
  NextMarker?: string;
}
export interface DescribeLifecycleConfigurationRequest {
  FileSystemId: string;
}
export interface DescribeMountTargetSecurityGroupsRequest {
  MountTargetId: string;
}
export interface DescribeMountTargetSecurityGroupsResponse {
  SecurityGroups: Array<string>;
}
export interface DescribeMountTargetsRequest {
  MaxItems?: number;
  Marker?: string;
  FileSystemId?: string;
  MountTargetId?: string;
  AccessPointId?: string;
}
export interface DescribeMountTargetsResponse {
  Marker?: string;
  MountTargets?: Array<MountTargetDescription>;
  NextMarker?: string;
}
export interface DescribeReplicationConfigurationsRequest {
  FileSystemId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeReplicationConfigurationsResponse {
  Replications?: Array<ReplicationConfigurationDescription>;
  NextToken?: string;
}
export interface DescribeTagsRequest {
  MaxItems?: number;
  Marker?: string;
  FileSystemId: string;
}
export interface DescribeTagsResponse {
  Marker?: string;
  Tags: Array<Tag>;
  NextMarker?: string;
}
export interface Destination {
  Status: ReplicationStatus;
  FileSystemId: string;
  Region: string;
  LastReplicatedTimestamp?: Date | string;
  OwnerId?: string;
  StatusMessage?: string;
  RoleArn?: string;
}
export type Destinations = Array<Destination>;
export type DestinationsToCreate = Array<DestinationToCreate>;
export interface DestinationToCreate {
  Region?: string;
  AvailabilityZoneName?: string;
  KmsKeyId?: string;
  FileSystemId?: string;
  RoleArn?: string;
}
export type Encrypted = boolean;

export type ErrorCode = string;

export type ErrorMessage = string;

export declare class FileSystemAlreadyExists extends Data.TaggedError(
  "FileSystemAlreadyExists",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
  readonly FileSystemId: string;
}> {}
export type FileSystemArn = string;

export interface FileSystemDescription {
  OwnerId: string;
  CreationToken: string;
  FileSystemId: string;
  FileSystemArn?: string;
  CreationTime: Date | string;
  LifeCycleState: LifeCycleState;
  Name?: string;
  NumberOfMountTargets: number;
  SizeInBytes: FileSystemSize;
  PerformanceMode: PerformanceMode;
  Encrypted?: boolean;
  KmsKeyId?: string;
  ThroughputMode?: ThroughputMode;
  ProvisionedThroughputInMibps?: number;
  AvailabilityZoneName?: string;
  AvailabilityZoneId?: string;
  Tags: Array<Tag>;
  FileSystemProtection?: FileSystemProtectionDescription;
}
export type FileSystemDescriptions = Array<FileSystemDescription>;
export type FileSystemId = string;

export declare class FileSystemInUse extends Data.TaggedError(
  "FileSystemInUse",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export declare class FileSystemLimitExceeded extends Data.TaggedError(
  "FileSystemLimitExceeded",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export declare class FileSystemNotFound extends Data.TaggedError(
  "FileSystemNotFound",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export type FileSystemNullableSizeValue = number;

export interface FileSystemPolicyDescription {
  FileSystemId?: string;
  Policy?: string;
}
export interface FileSystemProtectionDescription {
  ReplicationOverwriteProtection?: ReplicationOverwriteProtection;
}
export interface FileSystemSize {
  Value: number;
  Timestamp?: Date | string;
  ValueInIA?: number;
  ValueInStandard?: number;
  ValueInArchive?: number;
}
export type FileSystemSizeValue = number;

export type Gid = number;

export declare class IncorrectFileSystemLifeCycleState extends Data.TaggedError(
  "IncorrectFileSystemLifeCycleState",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export declare class IncorrectMountTargetState extends Data.TaggedError(
  "IncorrectMountTargetState",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export declare class InsufficientThroughputCapacity extends Data.TaggedError(
  "InsufficientThroughputCapacity",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export declare class InternalServerError extends Data.TaggedError(
  "InternalServerError",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export declare class InvalidPolicyException extends Data.TaggedError(
  "InvalidPolicyException",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export type IpAddress = string;

export declare class IpAddressInUse extends Data.TaggedError("IpAddressInUse")<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export type IpAddressType = "IPV4_ONLY" | "IPV6_ONLY" | "DUAL_STACK";
export type Ipv6Address = string;

export type KmsKeyId = string;

export interface LifecycleConfigurationDescription {
  LifecyclePolicies?: Array<LifecyclePolicy>;
}
export type LifecyclePolicies = Array<LifecyclePolicy>;
export interface LifecyclePolicy {
  TransitionToIA?: TransitionToIARules;
  TransitionToPrimaryStorageClass?: TransitionToPrimaryStorageClassRules;
  TransitionToArchive?: TransitionToArchiveRules;
}
export type LifeCycleState =
  | "CREATING"
  | "AVAILABLE"
  | "UPDATING"
  | "DELETING"
  | "DELETED"
  | "ERROR";
export interface ListTagsForResourceRequest {
  ResourceId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
  NextToken?: string;
}
export type Marker = string;

export type MaxItems = number;

export type MaxResults = number;

export interface ModifyMountTargetSecurityGroupsRequest {
  MountTargetId: string;
  SecurityGroups?: Array<string>;
}
export declare class MountTargetConflict extends Data.TaggedError(
  "MountTargetConflict",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export type MountTargetCount = number;

export interface MountTargetDescription {
  OwnerId?: string;
  MountTargetId: string;
  FileSystemId: string;
  SubnetId: string;
  LifeCycleState: LifeCycleState;
  IpAddress?: string;
  Ipv6Address?: string;
  NetworkInterfaceId?: string;
  AvailabilityZoneId?: string;
  AvailabilityZoneName?: string;
  VpcId?: string;
}
export type MountTargetDescriptions = Array<MountTargetDescription>;
export type MountTargetId = string;

export declare class MountTargetNotFound extends Data.TaggedError(
  "MountTargetNotFound",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export type Name = string;

export type NetworkInterfaceId = string;

export declare class NetworkInterfaceLimitExceeded extends Data.TaggedError(
  "NetworkInterfaceLimitExceeded",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export declare class NoFreeAddressesInSubnet extends Data.TaggedError(
  "NoFreeAddressesInSubnet",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export type OwnerGid = number;

export type OwnerUid = number;

export type Path = string;

export type PerformanceMode = "GENERAL_PURPOSE" | "MAX_IO";
export type Permissions = string;

export type Policy = string;

export declare class PolicyNotFound extends Data.TaggedError("PolicyNotFound")<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export interface PosixUser {
  Uid: number;
  Gid: number;
  SecondaryGids?: Array<number>;
}
export type ProvisionedThroughputInMibps = number;

export interface PutAccountPreferencesRequest {
  ResourceIdType: ResourceIdType;
}
export interface PutAccountPreferencesResponse {
  ResourceIdPreference?: ResourceIdPreference;
}
export interface PutBackupPolicyRequest {
  FileSystemId: string;
  BackupPolicy: BackupPolicy;
}
export interface PutFileSystemPolicyRequest {
  FileSystemId: string;
  Policy: string;
  BypassPolicyLockoutSafetyCheck?: boolean;
}
export interface PutLifecycleConfigurationRequest {
  FileSystemId: string;
  LifecyclePolicies: Array<LifecyclePolicy>;
}
export type RegionName = string;

export declare class ReplicationAlreadyExists extends Data.TaggedError(
  "ReplicationAlreadyExists",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export interface ReplicationConfigurationDescription {
  SourceFileSystemId: string;
  SourceFileSystemRegion: string;
  SourceFileSystemArn: string;
  OriginalSourceFileSystemArn: string;
  CreationTime: Date | string;
  Destinations: Array<Destination>;
  SourceFileSystemOwnerId?: string;
}
export type ReplicationConfigurationDescriptions =
  Array<ReplicationConfigurationDescription>;
export declare class ReplicationNotFound extends Data.TaggedError(
  "ReplicationNotFound",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export type ReplicationOverwriteProtection =
  | "ENABLED"
  | "DISABLED"
  | "REPLICATING";
export type ReplicationStatus =
  | "ENABLED"
  | "ENABLING"
  | "DELETING"
  | "ERROR"
  | "PAUSED"
  | "PAUSING";
export type Resource = "FileSystem" | "MountTarget";
export type ResourceId = string;

export interface ResourceIdPreference {
  ResourceIdType?: ResourceIdType;
  Resources?: Array<Resource>;
}
export type ResourceIdType = "LongId" | "ShortId";
export type Resources = Array<Resource>;
export type RoleArn = string;

export interface RootDirectory {
  Path?: string;
  CreationInfo?: CreationInfo;
}
export type SecondaryGids = Array<number>;
export type SecurityGroup = string;

export declare class SecurityGroupLimitExceeded extends Data.TaggedError(
  "SecurityGroupLimitExceeded",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export declare class SecurityGroupNotFound extends Data.TaggedError(
  "SecurityGroupNotFound",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export type SecurityGroups = Array<string>;
export type Status = "ENABLED" | "ENABLING" | "DISABLED" | "DISABLING";
export type StatusMessage = string;

export type SubnetId = string;

export declare class SubnetNotFound extends Data.TaggedError("SubnetNotFound")<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  ResourceId: string;
  Tags: Array<Tag>;
}
export type Tags = Array<Tag>;
export type TagValue = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export declare class ThroughputLimitExceeded extends Data.TaggedError(
  "ThroughputLimitExceeded",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export type ThroughputMode = "BURSTING" | "PROVISIONED" | "ELASTIC";
export type Timestamp = Date | string;

export type Token = string;

export declare class TooManyRequests extends Data.TaggedError(
  "TooManyRequests",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export type TransitionToArchiveRules =
  | "AFTER_1_DAY"
  | "AFTER_7_DAYS"
  | "AFTER_14_DAYS"
  | "AFTER_30_DAYS"
  | "AFTER_60_DAYS"
  | "AFTER_90_DAYS"
  | "AFTER_180_DAYS"
  | "AFTER_270_DAYS"
  | "AFTER_365_DAYS";
export type TransitionToIARules =
  | "AFTER_7_DAYS"
  | "AFTER_14_DAYS"
  | "AFTER_30_DAYS"
  | "AFTER_60_DAYS"
  | "AFTER_90_DAYS"
  | "AFTER_1_DAY"
  | "AFTER_180_DAYS"
  | "AFTER_270_DAYS"
  | "AFTER_365_DAYS";
export type TransitionToPrimaryStorageClassRules = "AFTER_1_ACCESS";
export type Uid = number;

export declare class UnsupportedAvailabilityZone extends Data.TaggedError(
  "UnsupportedAvailabilityZone",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceId: string;
  TagKeys: Array<string>;
}
export interface UpdateFileSystemProtectionRequest {
  FileSystemId: string;
  ReplicationOverwriteProtection?: ReplicationOverwriteProtection;
}
export interface UpdateFileSystemRequest {
  FileSystemId: string;
  ThroughputMode?: ThroughputMode;
  ProvisionedThroughputInMibps?: number;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export type VpcId = string;

export declare namespace CreateAccessPoint {
  export type Input = CreateAccessPointRequest;
  export type Output = AccessPointDescription;
  export type Error =
    | AccessPointAlreadyExists
    | AccessPointLimitExceeded
    | BadRequest
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InternalServerError
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateFileSystem {
  export type Input = CreateFileSystemRequest;
  export type Output = FileSystemDescription;
  export type Error =
    | BadRequest
    | FileSystemAlreadyExists
    | FileSystemLimitExceeded
    | InsufficientThroughputCapacity
    | InternalServerError
    | ThroughputLimitExceeded
    | UnsupportedAvailabilityZone
    | CommonAwsError;
}

export declare namespace CreateMountTarget {
  export type Input = CreateMountTargetRequest;
  export type Output = MountTargetDescription;
  export type Error =
    | AvailabilityZonesMismatch
    | BadRequest
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InternalServerError
    | IpAddressInUse
    | MountTargetConflict
    | NetworkInterfaceLimitExceeded
    | NoFreeAddressesInSubnet
    | SecurityGroupLimitExceeded
    | SecurityGroupNotFound
    | SubnetNotFound
    | UnsupportedAvailabilityZone
    | CommonAwsError;
}

export declare namespace CreateReplicationConfiguration {
  export type Input = CreateReplicationConfigurationRequest;
  export type Output = ReplicationConfigurationDescription;
  export type Error =
    | BadRequest
    | ConflictException
    | FileSystemLimitExceeded
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InsufficientThroughputCapacity
    | InternalServerError
    | ReplicationNotFound
    | ThroughputLimitExceeded
    | UnsupportedAvailabilityZone
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTags {
  export type Input = CreateTagsRequest;
  export type Output = {};
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DeleteAccessPoint {
  export type Input = DeleteAccessPointRequest;
  export type Output = {};
  export type Error =
    | AccessPointNotFound
    | BadRequest
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DeleteFileSystem {
  export type Input = DeleteFileSystemRequest;
  export type Output = {};
  export type Error =
    | BadRequest
    | FileSystemInUse
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DeleteFileSystemPolicy {
  export type Input = DeleteFileSystemPolicyRequest;
  export type Output = {};
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DeleteMountTarget {
  export type Input = DeleteMountTargetRequest;
  export type Output = {};
  export type Error =
    | BadRequest
    | DependencyTimeout
    | InternalServerError
    | MountTargetNotFound
    | CommonAwsError;
}

export declare namespace DeleteReplicationConfiguration {
  export type Input = DeleteReplicationConfigurationRequest;
  export type Output = {};
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | ReplicationNotFound
    | CommonAwsError;
}

export declare namespace DeleteTags {
  export type Input = DeleteTagsRequest;
  export type Output = {};
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeAccessPoints {
  export type Input = DescribeAccessPointsRequest;
  export type Output = DescribeAccessPointsResponse;
  export type Error =
    | AccessPointNotFound
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeAccountPreferences {
  export type Input = DescribeAccountPreferencesRequest;
  export type Output = DescribeAccountPreferencesResponse;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace DescribeBackupPolicy {
  export type Input = DescribeBackupPolicyRequest;
  export type Output = BackupPolicyDescription;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | PolicyNotFound
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeFileSystemPolicy {
  export type Input = DescribeFileSystemPolicyRequest;
  export type Output = FileSystemPolicyDescription;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | PolicyNotFound
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

export declare namespace DescribeLifecycleConfiguration {
  export type Input = DescribeLifecycleConfigurationRequest;
  export type Output = LifecycleConfigurationDescription;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeMountTargets {
  export type Input = DescribeMountTargetsRequest;
  export type Output = DescribeMountTargetsResponse;
  export type Error =
    | AccessPointNotFound
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | MountTargetNotFound
    | CommonAwsError;
}

export declare namespace DescribeMountTargetSecurityGroups {
  export type Input = DescribeMountTargetSecurityGroupsRequest;
  export type Output = DescribeMountTargetSecurityGroupsResponse;
  export type Error =
    | BadRequest
    | IncorrectMountTargetState
    | InternalServerError
    | MountTargetNotFound
    | CommonAwsError;
}

export declare namespace DescribeReplicationConfigurations {
  export type Input = DescribeReplicationConfigurationsRequest;
  export type Output = DescribeReplicationConfigurationsResponse;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | ReplicationNotFound
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeTags {
  export type Input = DescribeTagsRequest;
  export type Output = DescribeTagsResponse;
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
    | AccessPointNotFound
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError;
}

export declare namespace ModifyMountTargetSecurityGroups {
  export type Input = ModifyMountTargetSecurityGroupsRequest;
  export type Output = {};
  export type Error =
    | BadRequest
    | IncorrectMountTargetState
    | InternalServerError
    | MountTargetNotFound
    | SecurityGroupLimitExceeded
    | SecurityGroupNotFound
    | CommonAwsError;
}

export declare namespace PutAccountPreferences {
  export type Input = PutAccountPreferencesRequest;
  export type Output = PutAccountPreferencesResponse;
  export type Error = BadRequest | InternalServerError | CommonAwsError;
}

export declare namespace PutBackupPolicy {
  export type Input = PutBackupPolicyRequest;
  export type Output = BackupPolicyDescription;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InternalServerError
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutFileSystemPolicy {
  export type Input = PutFileSystemPolicyRequest;
  export type Output = FileSystemPolicyDescription;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InternalServerError
    | InvalidPolicyException
    | CommonAwsError;
}

export declare namespace PutLifecycleConfiguration {
  export type Input = PutLifecycleConfigurationRequest;
  export type Output = LifecycleConfigurationDescription;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InternalServerError
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessPointNotFound
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessPointNotFound
    | BadRequest
    | FileSystemNotFound
    | InternalServerError
    | CommonAwsError;
}

export declare namespace UpdateFileSystem {
  export type Input = UpdateFileSystemRequest;
  export type Output = FileSystemDescription;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InsufficientThroughputCapacity
    | InternalServerError
    | ThroughputLimitExceeded
    | TooManyRequests
    | CommonAwsError;
}

export declare namespace UpdateFileSystemProtection {
  export type Input = UpdateFileSystemProtectionRequest;
  export type Output = FileSystemProtectionDescription;
  export type Error =
    | BadRequest
    | FileSystemNotFound
    | IncorrectFileSystemLifeCycleState
    | InsufficientThroughputCapacity
    | InternalServerError
    | ReplicationAlreadyExists
    | ThroughputLimitExceeded
    | TooManyRequests
    | CommonAwsError;
}
