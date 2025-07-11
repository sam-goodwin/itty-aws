import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface FmrsService {
  cancelTaskExecution(
    input: CancelTaskExecutionRequest,
  ): Effect.Effect<
    CancelTaskExecutionResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  createAgent(
    input: CreateAgentRequest,
  ): Effect.Effect<
    CreateAgentResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  createLocationAzureBlob(
    input: CreateLocationAzureBlobRequest,
  ): Effect.Effect<
    CreateLocationAzureBlobResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  createLocationEfs(
    input: CreateLocationEfsRequest,
  ): Effect.Effect<
    CreateLocationEfsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  createLocationFsxLustre(
    input: CreateLocationFsxLustreRequest,
  ): Effect.Effect<
    CreateLocationFsxLustreResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  createLocationFsxOntap(
    input: CreateLocationFsxOntapRequest,
  ): Effect.Effect<
    CreateLocationFsxOntapResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  createLocationFsxOpenZfs(
    input: CreateLocationFsxOpenZfsRequest,
  ): Effect.Effect<
    CreateLocationFsxOpenZfsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  createLocationFsxWindows(
    input: CreateLocationFsxWindowsRequest,
  ): Effect.Effect<
    CreateLocationFsxWindowsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  createLocationHdfs(
    input: CreateLocationHdfsRequest,
  ): Effect.Effect<
    CreateLocationHdfsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  createLocationNfs(
    input: CreateLocationNfsRequest,
  ): Effect.Effect<
    CreateLocationNfsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  createLocationObjectStorage(
    input: CreateLocationObjectStorageRequest,
  ): Effect.Effect<
    CreateLocationObjectStorageResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  createLocationS3(
    input: CreateLocationS3Request,
  ): Effect.Effect<
    CreateLocationS3Response,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  createLocationSmb(
    input: CreateLocationSmbRequest,
  ): Effect.Effect<
    CreateLocationSmbResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  createTask(
    input: CreateTaskRequest,
  ): Effect.Effect<
    CreateTaskResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  deleteAgent(
    input: DeleteAgentRequest,
  ): Effect.Effect<
    DeleteAgentResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  deleteLocation(
    input: DeleteLocationRequest,
  ): Effect.Effect<
    DeleteLocationResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  deleteTask(
    input: DeleteTaskRequest,
  ): Effect.Effect<
    DeleteTaskResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  describeAgent(
    input: DescribeAgentRequest,
  ): Effect.Effect<
    DescribeAgentResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  describeLocationAzureBlob(
    input: DescribeLocationAzureBlobRequest,
  ): Effect.Effect<
    DescribeLocationAzureBlobResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  describeLocationEfs(
    input: DescribeLocationEfsRequest,
  ): Effect.Effect<
    DescribeLocationEfsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  describeLocationFsxLustre(
    input: DescribeLocationFsxLustreRequest,
  ): Effect.Effect<
    DescribeLocationFsxLustreResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  describeLocationFsxOntap(
    input: DescribeLocationFsxOntapRequest,
  ): Effect.Effect<
    DescribeLocationFsxOntapResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  describeLocationFsxOpenZfs(
    input: DescribeLocationFsxOpenZfsRequest,
  ): Effect.Effect<
    DescribeLocationFsxOpenZfsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  describeLocationFsxWindows(
    input: DescribeLocationFsxWindowsRequest,
  ): Effect.Effect<
    DescribeLocationFsxWindowsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  describeLocationHdfs(
    input: DescribeLocationHdfsRequest,
  ): Effect.Effect<
    DescribeLocationHdfsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  describeLocationNfs(
    input: DescribeLocationNfsRequest,
  ): Effect.Effect<
    DescribeLocationNfsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  describeLocationObjectStorage(
    input: DescribeLocationObjectStorageRequest,
  ): Effect.Effect<
    DescribeLocationObjectStorageResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  describeLocationS3(
    input: DescribeLocationS3Request,
  ): Effect.Effect<
    DescribeLocationS3Response,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  describeLocationSmb(
    input: DescribeLocationSmbRequest,
  ): Effect.Effect<
    DescribeLocationSmbResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  describeTask(
    input: DescribeTaskRequest,
  ): Effect.Effect<
    DescribeTaskResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  describeTaskExecution(
    input: DescribeTaskExecutionRequest,
  ): Effect.Effect<
    DescribeTaskExecutionResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  listAgents(
    input: ListAgentsRequest,
  ): Effect.Effect<
    ListAgentsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  listLocations(
    input: ListLocationsRequest,
  ): Effect.Effect<
    ListLocationsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  listTaskExecutions(
    input: ListTaskExecutionsRequest,
  ): Effect.Effect<
    ListTaskExecutionsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  listTasks(
    input: ListTasksRequest,
  ): Effect.Effect<
    ListTasksResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  startTaskExecution(
    input: StartTaskExecutionRequest,
  ): Effect.Effect<
    StartTaskExecutionResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  updateAgent(
    input: UpdateAgentRequest,
  ): Effect.Effect<
    UpdateAgentResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  updateLocationAzureBlob(
    input: UpdateLocationAzureBlobRequest,
  ): Effect.Effect<
    UpdateLocationAzureBlobResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  updateLocationEfs(
    input: UpdateLocationEfsRequest,
  ): Effect.Effect<
    UpdateLocationEfsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  updateLocationFsxLustre(
    input: UpdateLocationFsxLustreRequest,
  ): Effect.Effect<
    UpdateLocationFsxLustreResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  updateLocationFsxOntap(
    input: UpdateLocationFsxOntapRequest,
  ): Effect.Effect<
    UpdateLocationFsxOntapResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  updateLocationFsxOpenZfs(
    input: UpdateLocationFsxOpenZfsRequest,
  ): Effect.Effect<
    UpdateLocationFsxOpenZfsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  updateLocationFsxWindows(
    input: UpdateLocationFsxWindowsRequest,
  ): Effect.Effect<
    UpdateLocationFsxWindowsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  updateLocationHdfs(
    input: UpdateLocationHdfsRequest,
  ): Effect.Effect<
    UpdateLocationHdfsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  updateLocationNfs(
    input: UpdateLocationNfsRequest,
  ): Effect.Effect<
    UpdateLocationNfsResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  updateLocationObjectStorage(
    input: UpdateLocationObjectStorageRequest,
  ): Effect.Effect<
    UpdateLocationObjectStorageResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  updateLocationS3(
    input: UpdateLocationS3Request,
  ): Effect.Effect<
    UpdateLocationS3Response,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  updateLocationSmb(
    input: UpdateLocationSmbRequest,
  ): Effect.Effect<
    UpdateLocationSmbResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  updateTask(
    input: UpdateTaskRequest,
  ): Effect.Effect<
    UpdateTaskResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
  updateTaskExecution(
    input: UpdateTaskExecutionRequest,
  ): Effect.Effect<
    UpdateTaskExecutionResponse,
    InternalException | InvalidRequestException | CommonAwsError
  >;
}

export type Datasync = FmrsService;

export type ActivationKey = string;

export type AgentArn = string;

export type AgentArnList = Array<string>;
export type AgentList = Array<AgentListEntry>;
export interface AgentListEntry {
  AgentArn?: string;
  Name?: string;
  Status?: AgentStatus;
  Platform?: Platform;
}
export type AgentStatus = "ONLINE" | "OFFLINE";
export type AgentVersion = string;

export type Atime = "NONE" | "BEST_EFFORT";
export type AzureAccessTier = "HOT" | "COOL" | "ARCHIVE";
export type AzureBlobAuthenticationType = "SAS" | "NONE";
export type AzureBlobContainerUrl = string;

export interface AzureBlobSasConfiguration {
  Token: string;
}
export type AzureBlobSasToken = string;

export type AzureBlobSubdirectory = string;

export type AzureBlobType = "BLOCK";
export type BytesPerSecond = number;

export interface CancelTaskExecutionRequest {
  TaskExecutionArn: string;
}
export interface CancelTaskExecutionResponse {}
export interface CmkSecretConfig {
  SecretArn?: string;
  KmsKeyArn?: string;
}
export interface CreateAgentRequest {
  ActivationKey: string;
  AgentName?: string;
  Tags?: Array<TagListEntry>;
  VpcEndpointId?: string;
  SubnetArns?: Array<string>;
  SecurityGroupArns?: Array<string>;
}
export interface CreateAgentResponse {
  AgentArn?: string;
}
export interface CreateLocationAzureBlobRequest {
  ContainerUrl: string;
  AuthenticationType: AzureBlobAuthenticationType;
  SasConfiguration?: AzureBlobSasConfiguration;
  BlobType?: AzureBlobType;
  AccessTier?: AzureAccessTier;
  Subdirectory?: string;
  AgentArns?: Array<string>;
  Tags?: Array<TagListEntry>;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
export interface CreateLocationAzureBlobResponse {
  LocationArn?: string;
}
export interface CreateLocationEfsRequest {
  Subdirectory?: string;
  EfsFilesystemArn: string;
  Ec2Config: Ec2Config;
  Tags?: Array<TagListEntry>;
  AccessPointArn?: string;
  FileSystemAccessRoleArn?: string;
  InTransitEncryption?: EfsInTransitEncryption;
}
export interface CreateLocationEfsResponse {
  LocationArn?: string;
}
export interface CreateLocationFsxLustreRequest {
  FsxFilesystemArn: string;
  SecurityGroupArns: Array<string>;
  Subdirectory?: string;
  Tags?: Array<TagListEntry>;
}
export interface CreateLocationFsxLustreResponse {
  LocationArn?: string;
}
export interface CreateLocationFsxOntapRequest {
  Protocol: FsxProtocol;
  SecurityGroupArns: Array<string>;
  StorageVirtualMachineArn: string;
  Subdirectory?: string;
  Tags?: Array<TagListEntry>;
}
export interface CreateLocationFsxOntapResponse {
  LocationArn?: string;
}
export interface CreateLocationFsxOpenZfsRequest {
  FsxFilesystemArn: string;
  Protocol: FsxProtocol;
  SecurityGroupArns: Array<string>;
  Subdirectory?: string;
  Tags?: Array<TagListEntry>;
}
export interface CreateLocationFsxOpenZfsResponse {
  LocationArn?: string;
}
export interface CreateLocationFsxWindowsRequest {
  Subdirectory?: string;
  FsxFilesystemArn: string;
  SecurityGroupArns: Array<string>;
  Tags?: Array<TagListEntry>;
  User: string;
  Domain?: string;
  Password: string;
}
export interface CreateLocationFsxWindowsResponse {
  LocationArn?: string;
}
export interface CreateLocationHdfsRequest {
  Subdirectory?: string;
  NameNodes: Array<HdfsNameNode>;
  BlockSize?: number;
  ReplicationFactor?: number;
  KmsKeyProviderUri?: string;
  QopConfiguration?: QopConfiguration;
  AuthenticationType: HdfsAuthenticationType;
  SimpleUser?: string;
  KerberosPrincipal?: string;
  KerberosKeytab?: Uint8Array | string;
  KerberosKrb5Conf?: Uint8Array | string;
  AgentArns: Array<string>;
  Tags?: Array<TagListEntry>;
}
export interface CreateLocationHdfsResponse {
  LocationArn?: string;
}
export interface CreateLocationNfsRequest {
  Subdirectory: string;
  ServerHostname: string;
  OnPremConfig: OnPremConfig;
  MountOptions?: NfsMountOptions;
  Tags?: Array<TagListEntry>;
}
export interface CreateLocationNfsResponse {
  LocationArn?: string;
}
export interface CreateLocationObjectStorageRequest {
  ServerHostname: string;
  ServerPort?: number;
  ServerProtocol?: ObjectStorageServerProtocol;
  Subdirectory?: string;
  BucketName: string;
  AccessKey?: string;
  SecretKey?: string;
  AgentArns?: Array<string>;
  Tags?: Array<TagListEntry>;
  ServerCertificate?: Uint8Array | string;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
export interface CreateLocationObjectStorageResponse {
  LocationArn?: string;
}
export interface CreateLocationS3Request {
  Subdirectory?: string;
  S3BucketArn: string;
  S3StorageClass?: S3StorageClass;
  S3Config: S3Config;
  AgentArns?: Array<string>;
  Tags?: Array<TagListEntry>;
}
export interface CreateLocationS3Response {
  LocationArn?: string;
}
export interface CreateLocationSmbRequest {
  Subdirectory: string;
  ServerHostname: string;
  User?: string;
  Domain?: string;
  Password?: string;
  AgentArns: Array<string>;
  MountOptions?: SmbMountOptions;
  Tags?: Array<TagListEntry>;
  AuthenticationType?: SmbAuthenticationType;
  DnsIpAddresses?: Array<string>;
  KerberosPrincipal?: string;
  KerberosKeytab?: Uint8Array | string;
  KerberosKrb5Conf?: Uint8Array | string;
}
export interface CreateLocationSmbResponse {
  LocationArn?: string;
}
export interface CreateTaskRequest {
  SourceLocationArn: string;
  DestinationLocationArn: string;
  CloudWatchLogGroupArn?: string;
  Name?: string;
  Options?: Options;
  Excludes?: Array<FilterRule>;
  Schedule?: TaskSchedule;
  Tags?: Array<TagListEntry>;
  Includes?: Array<FilterRule>;
  ManifestConfig?: ManifestConfig;
  TaskReportConfig?: TaskReportConfig;
  TaskMode?: TaskMode;
}
export interface CreateTaskResponse {
  TaskArn?: string;
}
export interface CustomSecretConfig {
  SecretArn?: string;
  SecretAccessRoleArn?: string;
}
export interface DeleteAgentRequest {
  AgentArn: string;
}
export interface DeleteAgentResponse {}
export interface DeleteLocationRequest {
  LocationArn: string;
}
export interface DeleteLocationResponse {}
export interface DeleteTaskRequest {
  TaskArn: string;
}
export interface DeleteTaskResponse {}
export interface DescribeAgentRequest {
  AgentArn: string;
}
export interface DescribeAgentResponse {
  AgentArn?: string;
  Name?: string;
  Status?: AgentStatus;
  LastConnectionTime?: Date | string;
  CreationTime?: Date | string;
  EndpointType?: EndpointType;
  PrivateLinkConfig?: PrivateLinkConfig;
  Platform?: Platform;
}
export interface DescribeLocationAzureBlobRequest {
  LocationArn: string;
}
export interface DescribeLocationAzureBlobResponse {
  LocationArn?: string;
  LocationUri?: string;
  AuthenticationType?: AzureBlobAuthenticationType;
  BlobType?: AzureBlobType;
  AccessTier?: AzureAccessTier;
  AgentArns?: Array<string>;
  CreationTime?: Date | string;
  ManagedSecretConfig?: ManagedSecretConfig;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
export interface DescribeLocationEfsRequest {
  LocationArn: string;
}
export interface DescribeLocationEfsResponse {
  LocationArn?: string;
  LocationUri?: string;
  Ec2Config?: Ec2Config;
  CreationTime?: Date | string;
  AccessPointArn?: string;
  FileSystemAccessRoleArn?: string;
  InTransitEncryption?: EfsInTransitEncryption;
}
export interface DescribeLocationFsxLustreRequest {
  LocationArn: string;
}
export interface DescribeLocationFsxLustreResponse {
  LocationArn?: string;
  LocationUri?: string;
  SecurityGroupArns?: Array<string>;
  CreationTime?: Date | string;
}
export interface DescribeLocationFsxOntapRequest {
  LocationArn: string;
}
export interface DescribeLocationFsxOntapResponse {
  CreationTime?: Date | string;
  LocationArn?: string;
  LocationUri?: string;
  Protocol?: FsxProtocol;
  SecurityGroupArns?: Array<string>;
  StorageVirtualMachineArn?: string;
  FsxFilesystemArn?: string;
}
export interface DescribeLocationFsxOpenZfsRequest {
  LocationArn: string;
}
export interface DescribeLocationFsxOpenZfsResponse {
  LocationArn?: string;
  LocationUri?: string;
  SecurityGroupArns?: Array<string>;
  Protocol?: FsxProtocol;
  CreationTime?: Date | string;
}
export interface DescribeLocationFsxWindowsRequest {
  LocationArn: string;
}
export interface DescribeLocationFsxWindowsResponse {
  LocationArn?: string;
  LocationUri?: string;
  SecurityGroupArns?: Array<string>;
  CreationTime?: Date | string;
  User?: string;
  Domain?: string;
}
export interface DescribeLocationHdfsRequest {
  LocationArn: string;
}
export interface DescribeLocationHdfsResponse {
  LocationArn?: string;
  LocationUri?: string;
  NameNodes?: Array<HdfsNameNode>;
  BlockSize?: number;
  ReplicationFactor?: number;
  KmsKeyProviderUri?: string;
  QopConfiguration?: QopConfiguration;
  AuthenticationType?: HdfsAuthenticationType;
  SimpleUser?: string;
  KerberosPrincipal?: string;
  AgentArns?: Array<string>;
  CreationTime?: Date | string;
}
export interface DescribeLocationNfsRequest {
  LocationArn: string;
}
export interface DescribeLocationNfsResponse {
  LocationArn?: string;
  LocationUri?: string;
  OnPremConfig?: OnPremConfig;
  MountOptions?: NfsMountOptions;
  CreationTime?: Date | string;
}
export interface DescribeLocationObjectStorageRequest {
  LocationArn: string;
}
export interface DescribeLocationObjectStorageResponse {
  LocationArn?: string;
  LocationUri?: string;
  AccessKey?: string;
  ServerPort?: number;
  ServerProtocol?: ObjectStorageServerProtocol;
  AgentArns?: Array<string>;
  CreationTime?: Date | string;
  ServerCertificate?: Uint8Array | string;
  ManagedSecretConfig?: ManagedSecretConfig;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
export interface DescribeLocationS3Request {
  LocationArn: string;
}
export interface DescribeLocationS3Response {
  LocationArn?: string;
  LocationUri?: string;
  S3StorageClass?: S3StorageClass;
  S3Config?: S3Config;
  AgentArns?: Array<string>;
  CreationTime?: Date | string;
}
export interface DescribeLocationSmbRequest {
  LocationArn: string;
}
export interface DescribeLocationSmbResponse {
  LocationArn?: string;
  LocationUri?: string;
  AgentArns?: Array<string>;
  User?: string;
  Domain?: string;
  MountOptions?: SmbMountOptions;
  CreationTime?: Date | string;
  DnsIpAddresses?: Array<string>;
  KerberosPrincipal?: string;
  AuthenticationType?: SmbAuthenticationType;
}
export interface DescribeTaskExecutionRequest {
  TaskExecutionArn: string;
}
export interface DescribeTaskExecutionResponse {
  TaskExecutionArn?: string;
  Status?: TaskExecutionStatus;
  Options?: Options;
  Excludes?: Array<FilterRule>;
  Includes?: Array<FilterRule>;
  ManifestConfig?: ManifestConfig;
  StartTime?: Date | string;
  EstimatedFilesToTransfer?: number;
  EstimatedBytesToTransfer?: number;
  FilesTransferred?: number;
  BytesWritten?: number;
  BytesTransferred?: number;
  BytesCompressed?: number;
  Result?: TaskExecutionResultDetail;
  TaskReportConfig?: TaskReportConfig;
  FilesDeleted?: number;
  FilesSkipped?: number;
  FilesVerified?: number;
  ReportResult?: ReportResult;
  EstimatedFilesToDelete?: number;
  TaskMode?: TaskMode;
  FilesPrepared?: number;
  FilesListed?: TaskExecutionFilesListedDetail;
  FilesFailed?: TaskExecutionFilesFailedDetail;
  LaunchTime?: Date | string;
  EndTime?: Date | string;
}
export interface DescribeTaskRequest {
  TaskArn: string;
}
export interface DescribeTaskResponse {
  TaskArn?: string;
  Status?: TaskStatus;
  Name?: string;
  CurrentTaskExecutionArn?: string;
  SourceLocationArn?: string;
  DestinationLocationArn?: string;
  CloudWatchLogGroupArn?: string;
  SourceNetworkInterfaceArns?: Array<string>;
  DestinationNetworkInterfaceArns?: Array<string>;
  Options?: Options;
  Excludes?: Array<FilterRule>;
  Schedule?: TaskSchedule;
  ErrorCode?: string;
  ErrorDetail?: string;
  CreationTime?: Date | string;
  Includes?: Array<FilterRule>;
  ManifestConfig?: ManifestConfig;
  TaskReportConfig?: TaskReportConfig;
  ScheduleDetails?: TaskScheduleDetails;
  TaskMode?: TaskMode;
}
export type DestinationNetworkInterfaceArns = Array<string>;
export type DnsIpList = Array<string>;
export type Duration = number;

export interface Ec2Config {
  SubnetArn: string;
  SecurityGroupArns: Array<string>;
}
export type Ec2SecurityGroupArn = string;

export type Ec2SecurityGroupArnList = Array<string>;
export type Ec2SubnetArn = string;

export type EfsAccessPointArn = string;

export type EfsFilesystemArn = string;

export type EfsInTransitEncryption = "NONE" | "TLS1_2";
export type EfsSubdirectory = string;

export type Endpoint = string;

export type EndpointType = "PUBLIC" | "PRIVATE_LINK" | "FIPS";
export type FilterAttributeValue = string;

export type FilterList = Array<FilterRule>;
export interface FilterRule {
  FilterType?: FilterType;
  Value?: string;
}
export type FilterType = "SIMPLE_PATTERN";
export type FilterValue = string;

export type FilterValues = Array<string>;
export type FsxFilesystemArn = string;

export type FsxLustreSubdirectory = string;

export type FsxOntapSubdirectory = string;

export type FsxOpenZfsSubdirectory = string;

export interface FsxProtocol {
  NFS?: FsxProtocolNfs;
  SMB?: FsxProtocolSmb;
}
export interface FsxProtocolNfs {
  MountOptions?: NfsMountOptions;
}
export interface FsxProtocolSmb {
  Domain?: string;
  MountOptions?: SmbMountOptions;
  Password: string;
  User: string;
}
export interface FsxUpdateProtocol {
  NFS?: FsxProtocolNfs;
  SMB?: FsxUpdateProtocolSmb;
}
export interface FsxUpdateProtocolSmb {
  Domain?: string;
  MountOptions?: SmbMountOptions;
  Password?: string;
  User?: string;
}
export type FsxWindowsSubdirectory = string;

export type Gid = "NONE" | "INT_VALUE" | "NAME" | "BOTH";
export type HdfsAuthenticationType = "SIMPLE" | "KERBEROS";
export type HdfsBlockSize = number;

export type HdfsDataTransferProtection =
  | "DISABLED"
  | "AUTHENTICATION"
  | "INTEGRITY"
  | "PRIVACY";
export interface HdfsNameNode {
  Hostname: string;
  Port: number;
}
export type HdfsNameNodeList = Array<HdfsNameNode>;
export type HdfsReplicationFactor = number;

export type HdfsRpcProtection =
  | "DISABLED"
  | "AUTHENTICATION"
  | "INTEGRITY"
  | "PRIVACY";
export type HdfsServerHostname = string;

export type HdfsServerPort = number;

export type HdfsSubdirectory = string;

export type HdfsUser = string;

export type IamRoleArn = string;

export type IamRoleArnOrEmptyString = string;

export type InputTagList = Array<TagListEntry>;
export declare class InternalException extends Data.TaggedError(
  "InternalException",
)<{
  readonly message?: string;
  readonly errorCode?: string;
}> {}
export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
  readonly errorCode?: string;
  readonly datasyncErrorCode?: string;
}> {}
export type KerberosKeytabFile = Uint8Array | string;

export type KerberosKrb5ConfFile = Uint8Array | string;

export type KerberosPrincipal = string;

export type KmsKeyArn = string;

export type KmsKeyProviderUri = string;

export interface ListAgentsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAgentsResponse {
  Agents?: Array<AgentListEntry>;
  NextToken?: string;
}
export interface ListLocationsRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<LocationFilter>;
}
export interface ListLocationsResponse {
  Locations?: Array<LocationListEntry>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<TagListEntry>;
  NextToken?: string;
}
export interface ListTaskExecutionsRequest {
  TaskArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTaskExecutionsResponse {
  TaskExecutions?: Array<TaskExecutionListEntry>;
  NextToken?: string;
}
export interface ListTasksRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<TaskFilter>;
}
export interface ListTasksResponse {
  Tasks?: Array<TaskListEntry>;
  NextToken?: string;
}
export type LocationArn = string;

export interface LocationFilter {
  Name: LocationFilterName;
  Values: Array<string>;
  Operator: Operator;
}
export type LocationFilterName =
  | "LocationUri"
  | "LocationType"
  | "CreationTime";
export type LocationFilters = Array<LocationFilter>;
export type LocationList = Array<LocationListEntry>;
export interface LocationListEntry {
  LocationArn?: string;
  LocationUri?: string;
}
export type LocationUri = string;

export type LogGroupArn = string;

export type LogLevel = "OFF" | "BASIC" | "TRANSFER";
export type long = number;

export interface ManagedSecretConfig {
  SecretArn?: string;
}
export type ManifestAction = "TRANSFER";
export interface ManifestConfig {
  Action?: ManifestAction;
  Format?: ManifestFormat;
  Source?: SourceManifestConfig;
}
export type ManifestFormat = "CSV";
export type MaxResults = number;

export type Mtime = "NONE" | "PRESERVE";
export type NetworkInterfaceArn = string;

export type NextToken = string;

export interface NfsMountOptions {
  Version?: NfsVersion;
}
export type NfsSubdirectory = string;

export type NfsVersion = "AUTOMATIC" | "NFS3" | "NFS4_0" | "NFS4_1";
export type ObjectStorageAccessKey = string;

export type ObjectStorageBucketName = string;

export type ObjectStorageCertificate = Uint8Array | string;

export type ObjectStorageSecretKey = string;

export type ObjectStorageServerPort = number;

export type ObjectStorageServerProtocol = "HTTPS" | "HTTP";
export type ObjectTags = "PRESERVE" | "NONE";
export type ObjectVersionIds = "INCLUDE" | "NONE";
export interface OnPremConfig {
  AgentArns: Array<string>;
}
export type Operator =
  | "EQ"
  | "NE"
  | "IN"
  | "LE"
  | "LT"
  | "GE"
  | "GT"
  | "CONTAINS"
  | "NOT_CONTAINS"
  | "BEGINS_WITH";
export interface Options {
  VerifyMode?: VerifyMode;
  OverwriteMode?: OverwriteMode;
  Atime?: Atime;
  Mtime?: Mtime;
  Uid?: Uid;
  Gid?: Gid;
  PreserveDeletedFiles?: PreserveDeletedFiles;
  PreserveDevices?: PreserveDevices;
  PosixPermissions?: PosixPermissions;
  BytesPerSecond?: number;
  TaskQueueing?: TaskQueueing;
  LogLevel?: LogLevel;
  TransferMode?: TransferMode;
  SecurityDescriptorCopyFlags?: SmbSecurityDescriptorCopyFlags;
  ObjectTags?: ObjectTags;
}
export type OutputTagList = Array<TagListEntry>;
export type OverwriteMode = "ALWAYS" | "NEVER";
export type PhaseStatus = "PENDING" | "SUCCESS" | "ERROR";
export interface Platform {
  Version?: string;
}
export type PLSecurityGroupArnList = Array<string>;
export type PLSubnetArnList = Array<string>;
export type PosixPermissions = "NONE" | "PRESERVE";
export type PreserveDeletedFiles = "PRESERVE" | "REMOVE";
export type PreserveDevices = "NONE" | "PRESERVE";
export interface PrivateLinkConfig {
  VpcEndpointId?: string;
  PrivateLinkEndpoint?: string;
  SubnetArns?: Array<string>;
  SecurityGroupArns?: Array<string>;
}
export interface QopConfiguration {
  RpcProtection?: HdfsRpcProtection;
  DataTransferProtection?: HdfsDataTransferProtection;
}
export interface ReportDestination {
  S3?: ReportDestinationS3;
}
export interface ReportDestinationS3 {
  Subdirectory?: string;
  S3BucketArn: string;
  BucketAccessRoleArn: string;
}
export type ReportLevel = "ERRORS_ONLY" | "SUCCESSES_AND_ERRORS";
export type ReportOutputType = "SUMMARY_ONLY" | "STANDARD";
export interface ReportOverride {
  ReportLevel?: ReportLevel;
}
export interface ReportOverrides {
  Transferred?: ReportOverride;
  Verified?: ReportOverride;
  Deleted?: ReportOverride;
  Skipped?: ReportOverride;
}
export interface ReportResult {
  Status?: PhaseStatus;
  ErrorCode?: string;
  ErrorDetail?: string;
}
export type S3BucketArn = string;

export interface S3Config {
  BucketAccessRoleArn: string;
}
export interface S3ManifestConfig {
  ManifestObjectPath: string;
  BucketAccessRoleArn: string;
  S3BucketArn: string;
  ManifestObjectVersionId?: string;
}
export type S3ObjectVersionId = string;

export type S3StorageClass =
  | "STANDARD"
  | "STANDARD_IA"
  | "ONEZONE_IA"
  | "INTELLIGENT_TIERING"
  | "GLACIER"
  | "DEEP_ARCHIVE"
  | "OUTPOSTS"
  | "GLACIER_INSTANT_RETRIEVAL";
export type S3Subdirectory = string;

export type ScheduleDisabledBy = "USER" | "SERVICE";
export type ScheduleDisabledReason = string;

export type ScheduleExpressionCron = string;

export type ScheduleStatus = "ENABLED" | "DISABLED";
export type SecretArn = string;

export type ServerHostname = string;

export type ServerIpAddress = string;

export type SmbAuthenticationType = "NTLM" | "KERBEROS";
export type SmbDomain = string;

export interface SmbMountOptions {
  Version?: SmbVersion;
}
export type SmbPassword = string;

export type SmbSecurityDescriptorCopyFlags =
  | "NONE"
  | "OWNER_DACL"
  | "OWNER_DACL_SACL";
export type SmbSubdirectory = string;

export type SmbUser = string;

export type SmbVersion = "AUTOMATIC" | "SMB2" | "SMB3" | "SMB1" | "SMB2_0";
export interface SourceManifestConfig {
  S3: S3ManifestConfig;
}
export type SourceNetworkInterfaceArns = Array<string>;
export interface StartTaskExecutionRequest {
  TaskArn: string;
  OverrideOptions?: Options;
  Includes?: Array<FilterRule>;
  Excludes?: Array<FilterRule>;
  ManifestConfig?: ManifestConfig;
  TaskReportConfig?: TaskReportConfig;
  Tags?: Array<TagListEntry>;
}
export interface StartTaskExecutionResponse {
  TaskExecutionArn?: string;
}
export type StorageVirtualMachineArn = string;

export type TaggableResourceArn = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagListEntry {
  Key: string;
  Value?: string;
}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<TagListEntry>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TaskArn = string;

export type TaskExecutionArn = string;

export interface TaskExecutionFilesFailedDetail {
  Prepare?: number;
  Transfer?: number;
  Verify?: number;
  Delete?: number;
}
export interface TaskExecutionFilesListedDetail {
  AtSource?: number;
  AtDestinationForDelete?: number;
}
export type TaskExecutionList = Array<TaskExecutionListEntry>;
export interface TaskExecutionListEntry {
  TaskExecutionArn?: string;
  Status?: TaskExecutionStatus;
  TaskMode?: TaskMode;
}
export interface TaskExecutionResultDetail {
  PrepareDuration?: number;
  PrepareStatus?: PhaseStatus;
  TotalDuration?: number;
  TransferDuration?: number;
  TransferStatus?: PhaseStatus;
  VerifyDuration?: number;
  VerifyStatus?: PhaseStatus;
  ErrorCode?: string;
  ErrorDetail?: string;
}
export type TaskExecutionStatus =
  | "QUEUED"
  | "CANCELLING"
  | "LAUNCHING"
  | "PREPARING"
  | "TRANSFERRING"
  | "VERIFYING"
  | "SUCCESS"
  | "ERROR";
export interface TaskFilter {
  Name: TaskFilterName;
  Values: Array<string>;
  Operator: Operator;
}
export type TaskFilterName = "LocationId" | "CreationTime";
export type TaskFilters = Array<TaskFilter>;
export type TaskList = Array<TaskListEntry>;
export interface TaskListEntry {
  TaskArn?: string;
  Status?: TaskStatus;
  Name?: string;
  TaskMode?: TaskMode;
}
export type TaskMode = "BASIC" | "ENHANCED";
export type TaskQueueing = "ENABLED" | "DISABLED";
export interface TaskReportConfig {
  Destination?: ReportDestination;
  OutputType?: ReportOutputType;
  ReportLevel?: ReportLevel;
  ObjectVersionIds?: ObjectVersionIds;
  Overrides?: ReportOverrides;
}
export interface TaskSchedule {
  ScheduleExpression: string;
  Status?: ScheduleStatus;
}
export interface TaskScheduleDetails {
  StatusUpdateTime?: Date | string;
  DisabledReason?: string;
  DisabledBy?: ScheduleDisabledBy;
}
export type TaskStatus =
  | "AVAILABLE"
  | "CREATING"
  | "QUEUED"
  | "RUNNING"
  | "UNAVAILABLE";
export type Time = Date | string;

export type TransferMode = "CHANGED" | "ALL";
export type Uid = "NONE" | "INT_VALUE" | "NAME" | "BOTH";
export interface UntagResourceRequest {
  ResourceArn: string;
  Keys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAgentRequest {
  AgentArn: string;
  Name?: string;
}
export interface UpdateAgentResponse {}
export type UpdatedEfsAccessPointArn = string;

export type UpdatedEfsIamRoleArn = string;

export interface UpdateLocationAzureBlobRequest {
  LocationArn: string;
  Subdirectory?: string;
  AuthenticationType?: AzureBlobAuthenticationType;
  SasConfiguration?: AzureBlobSasConfiguration;
  BlobType?: AzureBlobType;
  AccessTier?: AzureAccessTier;
  AgentArns?: Array<string>;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
export interface UpdateLocationAzureBlobResponse {}
export interface UpdateLocationEfsRequest {
  LocationArn: string;
  Subdirectory?: string;
  AccessPointArn?: string;
  FileSystemAccessRoleArn?: string;
  InTransitEncryption?: EfsInTransitEncryption;
}
export interface UpdateLocationEfsResponse {}
export interface UpdateLocationFsxLustreRequest {
  LocationArn: string;
  Subdirectory?: string;
}
export interface UpdateLocationFsxLustreResponse {}
export interface UpdateLocationFsxOntapRequest {
  LocationArn: string;
  Protocol?: FsxUpdateProtocol;
  Subdirectory?: string;
}
export interface UpdateLocationFsxOntapResponse {}
export interface UpdateLocationFsxOpenZfsRequest {
  LocationArn: string;
  Protocol?: FsxProtocol;
  Subdirectory?: string;
}
export interface UpdateLocationFsxOpenZfsResponse {}
export interface UpdateLocationFsxWindowsRequest {
  LocationArn: string;
  Subdirectory?: string;
  Domain?: string;
  User?: string;
  Password?: string;
}
export interface UpdateLocationFsxWindowsResponse {}
export interface UpdateLocationHdfsRequest {
  LocationArn: string;
  Subdirectory?: string;
  NameNodes?: Array<HdfsNameNode>;
  BlockSize?: number;
  ReplicationFactor?: number;
  KmsKeyProviderUri?: string;
  QopConfiguration?: QopConfiguration;
  AuthenticationType?: HdfsAuthenticationType;
  SimpleUser?: string;
  KerberosPrincipal?: string;
  KerberosKeytab?: Uint8Array | string;
  KerberosKrb5Conf?: Uint8Array | string;
  AgentArns?: Array<string>;
}
export interface UpdateLocationHdfsResponse {}
export interface UpdateLocationNfsRequest {
  LocationArn: string;
  Subdirectory?: string;
  ServerHostname?: string;
  OnPremConfig?: OnPremConfig;
  MountOptions?: NfsMountOptions;
}
export interface UpdateLocationNfsResponse {}
export interface UpdateLocationObjectStorageRequest {
  LocationArn: string;
  ServerPort?: number;
  ServerProtocol?: ObjectStorageServerProtocol;
  Subdirectory?: string;
  ServerHostname?: string;
  AccessKey?: string;
  SecretKey?: string;
  AgentArns?: Array<string>;
  ServerCertificate?: Uint8Array | string;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
export interface UpdateLocationObjectStorageResponse {}
export interface UpdateLocationS3Request {
  LocationArn: string;
  Subdirectory?: string;
  S3StorageClass?: S3StorageClass;
  S3Config?: S3Config;
}
export interface UpdateLocationS3Response {}
export interface UpdateLocationSmbRequest {
  LocationArn: string;
  Subdirectory?: string;
  ServerHostname?: string;
  User?: string;
  Domain?: string;
  Password?: string;
  AgentArns?: Array<string>;
  MountOptions?: SmbMountOptions;
  AuthenticationType?: SmbAuthenticationType;
  DnsIpAddresses?: Array<string>;
  KerberosPrincipal?: string;
  KerberosKeytab?: Uint8Array | string;
  KerberosKrb5Conf?: Uint8Array | string;
}
export interface UpdateLocationSmbResponse {}
export type UpdateSmbDomain = string;

export interface UpdateTaskExecutionRequest {
  TaskExecutionArn: string;
  Options: Options;
}
export interface UpdateTaskExecutionResponse {}
export interface UpdateTaskRequest {
  TaskArn: string;
  Options?: Options;
  Excludes?: Array<FilterRule>;
  Schedule?: TaskSchedule;
  Name?: string;
  CloudWatchLogGroupArn?: string;
  Includes?: Array<FilterRule>;
  ManifestConfig?: ManifestConfig;
  TaskReportConfig?: TaskReportConfig;
}
export interface UpdateTaskResponse {}
export type VerifyMode =
  | "POINT_IN_TIME_CONSISTENT"
  | "ONLY_FILES_TRANSFERRED"
  | "NONE";
export type VpcEndpointId = string;

export declare namespace CancelTaskExecution {
  export type Input = CancelTaskExecutionRequest;
  export type Output = CancelTaskExecutionResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateAgent {
  export type Input = CreateAgentRequest;
  export type Output = CreateAgentResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateLocationAzureBlob {
  export type Input = CreateLocationAzureBlobRequest;
  export type Output = CreateLocationAzureBlobResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateLocationEfs {
  export type Input = CreateLocationEfsRequest;
  export type Output = CreateLocationEfsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateLocationFsxLustre {
  export type Input = CreateLocationFsxLustreRequest;
  export type Output = CreateLocationFsxLustreResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateLocationFsxOntap {
  export type Input = CreateLocationFsxOntapRequest;
  export type Output = CreateLocationFsxOntapResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateLocationFsxOpenZfs {
  export type Input = CreateLocationFsxOpenZfsRequest;
  export type Output = CreateLocationFsxOpenZfsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateLocationFsxWindows {
  export type Input = CreateLocationFsxWindowsRequest;
  export type Output = CreateLocationFsxWindowsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateLocationHdfs {
  export type Input = CreateLocationHdfsRequest;
  export type Output = CreateLocationHdfsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateLocationNfs {
  export type Input = CreateLocationNfsRequest;
  export type Output = CreateLocationNfsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateLocationObjectStorage {
  export type Input = CreateLocationObjectStorageRequest;
  export type Output = CreateLocationObjectStorageResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateLocationS3 {
  export type Input = CreateLocationS3Request;
  export type Output = CreateLocationS3Response;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateLocationSmb {
  export type Input = CreateLocationSmbRequest;
  export type Output = CreateLocationSmbResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateTask {
  export type Input = CreateTaskRequest;
  export type Output = CreateTaskResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DeleteAgent {
  export type Input = DeleteAgentRequest;
  export type Output = DeleteAgentResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DeleteLocation {
  export type Input = DeleteLocationRequest;
  export type Output = DeleteLocationResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DeleteTask {
  export type Input = DeleteTaskRequest;
  export type Output = DeleteTaskResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeAgent {
  export type Input = DescribeAgentRequest;
  export type Output = DescribeAgentResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeLocationAzureBlob {
  export type Input = DescribeLocationAzureBlobRequest;
  export type Output = DescribeLocationAzureBlobResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeLocationEfs {
  export type Input = DescribeLocationEfsRequest;
  export type Output = DescribeLocationEfsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeLocationFsxLustre {
  export type Input = DescribeLocationFsxLustreRequest;
  export type Output = DescribeLocationFsxLustreResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeLocationFsxOntap {
  export type Input = DescribeLocationFsxOntapRequest;
  export type Output = DescribeLocationFsxOntapResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeLocationFsxOpenZfs {
  export type Input = DescribeLocationFsxOpenZfsRequest;
  export type Output = DescribeLocationFsxOpenZfsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeLocationFsxWindows {
  export type Input = DescribeLocationFsxWindowsRequest;
  export type Output = DescribeLocationFsxWindowsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeLocationHdfs {
  export type Input = DescribeLocationHdfsRequest;
  export type Output = DescribeLocationHdfsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeLocationNfs {
  export type Input = DescribeLocationNfsRequest;
  export type Output = DescribeLocationNfsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeLocationObjectStorage {
  export type Input = DescribeLocationObjectStorageRequest;
  export type Output = DescribeLocationObjectStorageResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeLocationS3 {
  export type Input = DescribeLocationS3Request;
  export type Output = DescribeLocationS3Response;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeLocationSmb {
  export type Input = DescribeLocationSmbRequest;
  export type Output = DescribeLocationSmbResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeTask {
  export type Input = DescribeTaskRequest;
  export type Output = DescribeTaskResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeTaskExecution {
  export type Input = DescribeTaskExecutionRequest;
  export type Output = DescribeTaskExecutionResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListAgents {
  export type Input = ListAgentsRequest;
  export type Output = ListAgentsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListLocations {
  export type Input = ListLocationsRequest;
  export type Output = ListLocationsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListTaskExecutions {
  export type Input = ListTaskExecutionsRequest;
  export type Output = ListTaskExecutionsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListTasks {
  export type Input = ListTasksRequest;
  export type Output = ListTasksResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace StartTaskExecution {
  export type Input = StartTaskExecutionRequest;
  export type Output = StartTaskExecutionResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateAgent {
  export type Input = UpdateAgentRequest;
  export type Output = UpdateAgentResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateLocationAzureBlob {
  export type Input = UpdateLocationAzureBlobRequest;
  export type Output = UpdateLocationAzureBlobResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateLocationEfs {
  export type Input = UpdateLocationEfsRequest;
  export type Output = UpdateLocationEfsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateLocationFsxLustre {
  export type Input = UpdateLocationFsxLustreRequest;
  export type Output = UpdateLocationFsxLustreResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateLocationFsxOntap {
  export type Input = UpdateLocationFsxOntapRequest;
  export type Output = UpdateLocationFsxOntapResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateLocationFsxOpenZfs {
  export type Input = UpdateLocationFsxOpenZfsRequest;
  export type Output = UpdateLocationFsxOpenZfsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateLocationFsxWindows {
  export type Input = UpdateLocationFsxWindowsRequest;
  export type Output = UpdateLocationFsxWindowsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateLocationHdfs {
  export type Input = UpdateLocationHdfsRequest;
  export type Output = UpdateLocationHdfsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateLocationNfs {
  export type Input = UpdateLocationNfsRequest;
  export type Output = UpdateLocationNfsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateLocationObjectStorage {
  export type Input = UpdateLocationObjectStorageRequest;
  export type Output = UpdateLocationObjectStorageResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateLocationS3 {
  export type Input = UpdateLocationS3Request;
  export type Output = UpdateLocationS3Response;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateLocationSmb {
  export type Input = UpdateLocationSmbRequest;
  export type Output = UpdateLocationSmbResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateTask {
  export type Input = UpdateTaskRequest;
  export type Output = UpdateTaskResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateTaskExecution {
  export type Input = UpdateTaskExecutionRequest;
  export type Output = UpdateTaskExecutionResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | CommonAwsError;
}
