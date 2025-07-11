import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface OmniCloudServiceLambda {
  createApplicationInstance(
    input: CreateApplicationInstanceRequest,
  ): Effect.Effect<
    CreateApplicationInstanceResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createJobForDevices(
    input: CreateJobForDevicesRequest,
  ): Effect.Effect<
    CreateJobForDevicesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createNodeFromTemplateJob(
    input: CreateNodeFromTemplateJobRequest,
  ): Effect.Effect<
    CreateNodeFromTemplateJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  createPackage(
    input: CreatePackageRequest,
  ): Effect.Effect<
    CreatePackageResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  createPackageImportJob(
    input: CreatePackageImportJobRequest,
  ): Effect.Effect<
    CreatePackageImportJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  deleteDevice(
    input: DeleteDeviceRequest,
  ): Effect.Effect<
    DeleteDeviceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deletePackage(
    input: DeletePackageRequest,
  ): Effect.Effect<
    DeletePackageResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deregisterPackageVersion(
    input: DeregisterPackageVersionRequest,
  ): Effect.Effect<
    DeregisterPackageVersionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeApplicationInstance(
    input: DescribeApplicationInstanceRequest,
  ): Effect.Effect<
    DescribeApplicationInstanceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeApplicationInstanceDetails(
    input: DescribeApplicationInstanceDetailsRequest,
  ): Effect.Effect<
    DescribeApplicationInstanceDetailsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeDevice(
    input: DescribeDeviceRequest,
  ): Effect.Effect<
    DescribeDeviceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeDeviceJob(
    input: DescribeDeviceJobRequest,
  ): Effect.Effect<
    DescribeDeviceJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeNode(
    input: DescribeNodeRequest,
  ): Effect.Effect<
    DescribeNodeResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeNodeFromTemplateJob(
    input: DescribeNodeFromTemplateJobRequest,
  ): Effect.Effect<
    DescribeNodeFromTemplateJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  describePackage(
    input: DescribePackageRequest,
  ): Effect.Effect<
    DescribePackageResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describePackageImportJob(
    input: DescribePackageImportJobRequest,
  ): Effect.Effect<
    DescribePackageImportJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  describePackageVersion(
    input: DescribePackageVersionRequest,
  ): Effect.Effect<
    DescribePackageVersionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listApplicationInstanceDependencies(
    input: ListApplicationInstanceDependenciesRequest,
  ): Effect.Effect<
    ListApplicationInstanceDependenciesResponse,
    AccessDeniedException | InternalServerException | CommonAwsError
  >;
  listApplicationInstanceNodeInstances(
    input: ListApplicationInstanceNodeInstancesRequest,
  ): Effect.Effect<
    ListApplicationInstanceNodeInstancesResponse,
    AccessDeniedException | InternalServerException | CommonAwsError
  >;
  listApplicationInstances(
    input: ListApplicationInstancesRequest,
  ): Effect.Effect<
    ListApplicationInstancesResponse,
    AccessDeniedException | InternalServerException | CommonAwsError
  >;
  listDevices(
    input: ListDevicesRequest,
  ): Effect.Effect<
    ListDevicesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listDevicesJobs(
    input: ListDevicesJobsRequest,
  ): Effect.Effect<
    ListDevicesJobsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listNodeFromTemplateJobs(
    input: ListNodeFromTemplateJobsRequest,
  ): Effect.Effect<
    ListNodeFromTemplateJobsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listNodes(
    input: ListNodesRequest,
  ): Effect.Effect<
    ListNodesResponse,
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listPackageImportJobs(
    input: ListPackageImportJobsRequest,
  ): Effect.Effect<
    ListPackageImportJobsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listPackages(
    input: ListPackagesRequest,
  ): Effect.Effect<
    ListPackagesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  provisionDevice(
    input: ProvisionDeviceRequest,
  ): Effect.Effect<
    ProvisionDeviceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  registerPackageVersion(
    input: RegisterPackageVersionRequest,
  ): Effect.Effect<
    RegisterPackageVersionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  removeApplicationInstance(
    input: RemoveApplicationInstanceRequest,
  ): Effect.Effect<
    RemoveApplicationInstanceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  signalApplicationInstanceNodeInstances(
    input: SignalApplicationInstanceNodeInstancesRequest,
  ): Effect.Effect<
    SignalApplicationInstanceNodeInstancesResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateDeviceMetadata(
    input: UpdateDeviceMetadataRequest,
  ): Effect.Effect<
    UpdateDeviceMetadataResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export type Panorama = OmniCloudServiceLambda;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export interface AlternateSoftwareMetadata {
  Version?: string;
}
export type AlternateSoftwares = Array<AlternateSoftwareMetadata>;
export interface ApplicationInstance {
  Name?: string;
  ApplicationInstanceId?: string;
  DefaultRuntimeContextDevice?: string;
  DefaultRuntimeContextDeviceName?: string;
  Description?: string;
  Status?: string;
  HealthStatus?: string;
  StatusDescription?: string;
  CreatedTime?: Date | string;
  Arn?: string;
  Tags?: Record<string, string>;
  RuntimeContextStates?: Array<ReportedRuntimeContextState>;
}
export type ApplicationInstanceArn = string;

export type ApplicationInstanceHealthStatus = string;

export type ApplicationInstanceId = string;

export type ApplicationInstanceName = string;

export type ApplicationInstances = Array<ApplicationInstance>;
export type ApplicationInstanceStatus = string;

export type ApplicationInstanceStatusDescription = string;

export type Bucket = string;

export type BucketName = string;

export type Certificates = Uint8Array | string;

export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
  readonly ErrorId?: string;
  readonly ErrorArguments?: Array<ConflictExceptionErrorArgument>;
}> {}
export interface ConflictExceptionErrorArgument {
  Name: string;
  Value: string;
}
export type ConflictExceptionErrorArgumentList =
  Array<ConflictExceptionErrorArgument>;
export type ConnectionType = string;

export interface CreateApplicationInstanceRequest {
  Name?: string;
  Description?: string;
  ManifestPayload: ManifestPayload;
  ManifestOverridesPayload?: ManifestOverridesPayload;
  ApplicationInstanceIdToReplace?: string;
  RuntimeRoleArn?: string;
  DefaultRuntimeContextDevice: string;
  Tags?: Record<string, string>;
}
export interface CreateApplicationInstanceResponse {
  ApplicationInstanceId: string;
}
export type CreatedTime = Date | string;

export interface CreateJobForDevicesRequest {
  DeviceIds: Array<string>;
  DeviceJobConfig?: DeviceJobConfig;
  JobType: string;
}
export interface CreateJobForDevicesResponse {
  Jobs: Array<Job>;
}
export interface CreateNodeFromTemplateJobRequest {
  TemplateType: string;
  OutputPackageName: string;
  OutputPackageVersion: string;
  NodeName: string;
  NodeDescription?: string;
  TemplateParameters: Record<string, string>;
  JobTags?: Array<JobResourceTags>;
}
export interface CreateNodeFromTemplateJobResponse {
  JobId: string;
}
export interface CreatePackageImportJobRequest {
  JobType: string;
  InputConfig: PackageImportJobInputConfig;
  OutputConfig: PackageImportJobOutputConfig;
  ClientToken: string;
  JobTags?: Array<JobResourceTags>;
}
export interface CreatePackageImportJobResponse {
  JobId: string;
}
export interface CreatePackageRequest {
  PackageName: string;
  Tags?: Record<string, string>;
}
export interface CreatePackageResponse {
  PackageId?: string;
  Arn?: string;
  StorageLocation: StorageLocation;
}
export type CurrentSoftware = string;

export type DefaultGateway = string;

export type DefaultRuntimeContextDevice = string;

export interface DeleteDeviceRequest {
  DeviceId: string;
}
export interface DeleteDeviceResponse {
  DeviceId?: string;
}
export interface DeletePackageRequest {
  PackageId: string;
  ForceDelete?: boolean;
}
export interface DeletePackageResponse {}
export interface DeregisterPackageVersionRequest {
  OwnerAccount?: string;
  PackageId: string;
  PackageVersion: string;
  PatchVersion: string;
  UpdatedLatestPatchVersion?: string;
}
export interface DeregisterPackageVersionResponse {}
export interface DescribeApplicationInstanceDetailsRequest {
  ApplicationInstanceId: string;
}
export interface DescribeApplicationInstanceDetailsResponse {
  Name?: string;
  Description?: string;
  DefaultRuntimeContextDevice?: string;
  ManifestPayload?: ManifestPayload;
  ManifestOverridesPayload?: ManifestOverridesPayload;
  ApplicationInstanceIdToReplace?: string;
  CreatedTime?: Date | string;
  ApplicationInstanceId?: string;
}
export interface DescribeApplicationInstanceRequest {
  ApplicationInstanceId: string;
}
export interface DescribeApplicationInstanceResponse {
  Name?: string;
  Description?: string;
  DefaultRuntimeContextDevice?: string;
  DefaultRuntimeContextDeviceName?: string;
  ApplicationInstanceIdToReplace?: string;
  RuntimeRoleArn?: string;
  Status?: string;
  HealthStatus?: string;
  StatusDescription?: string;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
  ApplicationInstanceId?: string;
  Arn?: string;
  Tags?: Record<string, string>;
  RuntimeContextStates?: Array<ReportedRuntimeContextState>;
}
export interface DescribeDeviceJobRequest {
  JobId: string;
}
export interface DescribeDeviceJobResponse {
  JobId?: string;
  DeviceId?: string;
  DeviceArn?: string;
  DeviceName?: string;
  DeviceType?: string;
  ImageVersion?: string;
  Status?: string;
  CreatedTime?: Date | string;
  JobType?: string;
}
export interface DescribeDeviceRequest {
  DeviceId: string;
}
export interface DescribeDeviceResponse {
  DeviceId?: string;
  Name?: string;
  Arn?: string;
  Description?: string;
  Type?: string;
  DeviceConnectionStatus?: string;
  CreatedTime?: Date | string;
  ProvisioningStatus?: string;
  LatestSoftware?: string;
  CurrentSoftware?: string;
  SerialNumber?: string;
  Tags?: Record<string, string>;
  NetworkingConfiguration?: NetworkPayload;
  CurrentNetworkingStatus?: NetworkStatus;
  LeaseExpirationTime?: Date | string;
  AlternateSoftwares?: Array<AlternateSoftwareMetadata>;
  LatestAlternateSoftware?: string;
  Brand?: string;
  LatestDeviceJob?: LatestDeviceJob;
  DeviceAggregatedStatus?: string;
}
export interface DescribeNodeFromTemplateJobRequest {
  JobId: string;
}
export interface DescribeNodeFromTemplateJobResponse {
  JobId: string;
  Status: string;
  StatusMessage: string;
  CreatedTime: Date | string;
  LastUpdatedTime: Date | string;
  OutputPackageName: string;
  OutputPackageVersion: string;
  NodeName: string;
  NodeDescription?: string;
  TemplateType: string;
  TemplateParameters: Record<string, string>;
  JobTags?: Array<JobResourceTags>;
}
export interface DescribeNodeRequest {
  NodeId: string;
  OwnerAccount?: string;
}
export interface DescribeNodeResponse {
  NodeId: string;
  Name: string;
  Category: string;
  OwnerAccount: string;
  PackageName: string;
  PackageId: string;
  PackageArn?: string;
  PackageVersion: string;
  PatchVersion: string;
  NodeInterface: NodeInterface;
  AssetName?: string;
  Description: string;
  CreatedTime: Date | string;
  LastUpdatedTime: Date | string;
}
export interface DescribePackageImportJobRequest {
  JobId: string;
}
export interface DescribePackageImportJobResponse {
  JobId: string;
  ClientToken?: string;
  JobType: string;
  InputConfig: PackageImportJobInputConfig;
  OutputConfig: PackageImportJobOutputConfig;
  Output: PackageImportJobOutput;
  CreatedTime: Date | string;
  LastUpdatedTime: Date | string;
  Status: string;
  StatusMessage: string;
  JobTags?: Array<JobResourceTags>;
}
export interface DescribePackageRequest {
  PackageId: string;
}
export interface DescribePackageResponse {
  PackageId: string;
  PackageName: string;
  Arn: string;
  StorageLocation: StorageLocation;
  ReadAccessPrincipalArns?: Array<string>;
  WriteAccessPrincipalArns?: Array<string>;
  CreatedTime: Date | string;
  Tags: Record<string, string>;
}
export interface DescribePackageVersionRequest {
  OwnerAccount?: string;
  PackageId: string;
  PackageVersion: string;
  PatchVersion?: string;
}
export interface DescribePackageVersionResponse {
  OwnerAccount?: string;
  PackageId: string;
  PackageArn?: string;
  PackageName: string;
  PackageVersion: string;
  PatchVersion: string;
  IsLatestPatch: boolean;
  Status: string;
  StatusDescription?: string;
  RegisteredTime?: Date | string;
}
export type Description = string;

export type DesiredState = string;

export interface Device {
  DeviceId?: string;
  Name?: string;
  CreatedTime?: Date | string;
  ProvisioningStatus?: string;
  LastUpdatedTime?: Date | string;
  LeaseExpirationTime?: Date | string;
  Brand?: string;
  CurrentSoftware?: string;
  Description?: string;
  Tags?: Record<string, string>;
  Type?: string;
  LatestDeviceJob?: LatestDeviceJob;
  DeviceAggregatedStatus?: string;
}
export type DeviceAggregatedStatus = string;

export type DeviceArn = string;

export type DeviceBrand = string;

export type DeviceConnectionStatus = string;

export type DeviceId = string;

export type DeviceIdList = Array<string>;
export interface DeviceJob {
  DeviceName?: string;
  DeviceId?: string;
  JobId?: string;
  CreatedTime?: Date | string;
  JobType?: string;
}
export interface DeviceJobConfig {
  OTAJobConfig?: OTAJobConfig;
}
export type DeviceJobList = Array<DeviceJob>;
export type DeviceList = Array<Device>;
export type DeviceName = string;

export type DeviceReportedStatus = string;

export type DeviceSerialNumber = string;

export type DeviceStatus = string;

export type DeviceType = string;

export type Dns = string;

export type DnsList = Array<string>;
export interface EthernetPayload {
  ConnectionType: string;
  StaticIpConnectionInfo?: StaticIpConnectionInfo;
}
export interface EthernetStatus {
  IpAddress?: string;
  ConnectionStatus?: string;
  HwAddress?: string;
}
export type HwAddress = string;

export type ImageVersion = string;

export type InputPortList = Array<NodeInputPort>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
  readonly RetryAfterSeconds?: number;
}> {}
export type IotThingName = string;

export type IpAddress = string;

export type IpAddressOrServerName = string;

export interface Job {
  JobId?: string;
  DeviceId?: string;
}
export type JobId = string;

export type JobList = Array<Job>;
export interface JobResourceTags {
  ResourceType: string;
  Tags: Record<string, string>;
}
export type JobResourceType = string;

export type JobTagsList = Array<JobResourceTags>;
export type JobType = string;

export type LastUpdatedTime = Date | string;

export type LatestAlternateSoftware = string;

export interface LatestDeviceJob {
  ImageVersion?: string;
  Status?: string;
  JobType?: string;
}
export type LatestSoftware = string;

export type LeaseExpirationTime = Date | string;

export interface ListApplicationInstanceDependenciesRequest {
  ApplicationInstanceId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListApplicationInstanceDependenciesResponse {
  PackageObjects?: Array<PackageObject>;
  NextToken?: string;
}
export interface ListApplicationInstanceNodeInstancesRequest {
  ApplicationInstanceId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListApplicationInstanceNodeInstancesResponse {
  NodeInstances?: Array<NodeInstance>;
  NextToken?: string;
}
export interface ListApplicationInstancesRequest {
  DeviceId?: string;
  StatusFilter?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListApplicationInstancesResponse {
  ApplicationInstances?: Array<ApplicationInstance>;
  NextToken?: string;
}
export interface ListDevicesJobsRequest {
  DeviceId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDevicesJobsResponse {
  DeviceJobs?: Array<DeviceJob>;
  NextToken?: string;
}
export interface ListDevicesRequest {
  NextToken?: string;
  MaxResults?: number;
  SortBy?: string;
  SortOrder?: string;
  NameFilter?: string;
  DeviceAggregatedStatusFilter?: string;
}
export interface ListDevicesResponse {
  Devices: Array<Device>;
  NextToken?: string;
}
export type ListDevicesSortBy = string;

export interface ListNodeFromTemplateJobsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListNodeFromTemplateJobsResponse {
  NodeFromTemplateJobs: Array<NodeFromTemplateJob>;
  NextToken?: string;
}
export interface ListNodesRequest {
  Category?: string;
  OwnerAccount?: string;
  PackageName?: string;
  PackageVersion?: string;
  PatchVersion?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListNodesResponse {
  Nodes?: Array<Node>;
  NextToken?: string;
}
export interface ListPackageImportJobsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPackageImportJobsResponse {
  PackageImportJobs: Array<PackageImportJob>;
  NextToken?: string;
}
export interface ListPackagesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPackagesResponse {
  Packages?: Array<PackageListItem>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type ManifestOverridesPayload = { PayloadData: string };
export type ManifestOverridesPayloadData = string;

export type ManifestPayload = { PayloadData: string };
export type ManifestPayloadData = string;

export type MarkLatestPatch = boolean;

export type Mask = string;

export type MaxConnections = number;

export type MaxSize25 = number;

export type NameFilter = string;

export type NetworkConnectionStatus = string;

export interface NetworkPayload {
  Ethernet0?: EthernetPayload;
  Ethernet1?: EthernetPayload;
  Ntp?: NtpPayload;
}
export interface NetworkStatus {
  Ethernet0Status?: EthernetStatus;
  Ethernet1Status?: EthernetStatus;
  NtpStatus?: NtpStatus;
  LastUpdatedTime?: Date | string;
}
export type NextToken = string;

export interface Node {
  NodeId: string;
  Name: string;
  Category: string;
  OwnerAccount?: string;
  PackageName: string;
  PackageId: string;
  PackageArn?: string;
  PackageVersion: string;
  PatchVersion: string;
  Description?: string;
  CreatedTime: Date | string;
}
export type NodeAssetName = string;

export type NodeCategory = string;

export interface NodeFromTemplateJob {
  JobId?: string;
  TemplateType?: string;
  Status?: string;
  StatusMessage?: string;
  CreatedTime?: Date | string;
  NodeName?: string;
}
export type NodeFromTemplateJobList = Array<NodeFromTemplateJob>;
export type NodeFromTemplateJobStatus = string;

export type NodeFromTemplateJobStatusMessage = string;

export type NodeId = string;

export interface NodeInputPort {
  Name?: string;
  Description?: string;
  Type?: string;
  DefaultValue?: string;
  MaxConnections?: number;
}
export interface NodeInstance {
  NodeInstanceId: string;
  NodeId?: string;
  PackageName?: string;
  PackageVersion?: string;
  PackagePatchVersion?: string;
  NodeName?: string;
  CurrentStatus: string;
}
export type NodeInstanceId = string;

export type NodeInstances = Array<NodeInstance>;
export type NodeInstanceStatus = string;

export interface NodeInterface {
  Inputs: Array<NodeInputPort>;
  Outputs: Array<NodeOutputPort>;
}
export type NodeName = string;

export interface NodeOutputPort {
  Name?: string;
  Description?: string;
  Type?: string;
}
export type NodePackageArn = string;

export type NodePackageId = string;

export type NodePackageName = string;

export type NodePackagePatchVersion = string;

export type NodePackageVersion = string;

export interface NodeSignal {
  NodeInstanceId: string;
  Signal: string;
}
export type NodeSignalList = Array<NodeSignal>;
export type NodeSignalValue = string;

export type NodesList = Array<Node>;
export interface NtpPayload {
  NtpServers: Array<string>;
}
export type NtpServerList = Array<string>;
export type NtpServerName = string;

export interface NtpStatus {
  ConnectionStatus?: string;
  IpAddress?: string;
  NtpServerName?: string;
}
export type Object = string;

export type ObjectKey = string;

export interface OTAJobConfig {
  ImageVersion: string;
  AllowMajorVersionUpdate?: boolean;
}
export type OutputPortList = Array<NodeOutputPort>;
export interface OutPutS3Location {
  BucketName: string;
  ObjectKey: string;
}
export interface PackageImportJob {
  JobId?: string;
  JobType?: string;
  Status?: string;
  StatusMessage?: string;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
}
export interface PackageImportJobInputConfig {
  PackageVersionInputConfig?: PackageVersionInputConfig;
}
export type PackageImportJobList = Array<PackageImportJob>;
export interface PackageImportJobOutput {
  PackageId: string;
  PackageVersion: string;
  PatchVersion: string;
  OutputS3Location: OutPutS3Location;
}
export interface PackageImportJobOutputConfig {
  PackageVersionOutputConfig?: PackageVersionOutputConfig;
}
export type PackageImportJobStatus = string;

export type PackageImportJobStatusMessage = string;

export type PackageImportJobType = string;

export type PackageList = Array<PackageListItem>;
export interface PackageListItem {
  PackageId?: string;
  PackageName?: string;
  Arn?: string;
  CreatedTime?: Date | string;
  Tags?: Record<string, string>;
}
export interface PackageObject {
  Name: string;
  PackageVersion: string;
  PatchVersion: string;
}
export type PackageObjects = Array<PackageObject>;
export type PackageOwnerAccount = string;

export interface PackageVersionInputConfig {
  S3Location: S3Location;
}
export interface PackageVersionOutputConfig {
  PackageName: string;
  PackageVersion: string;
  MarkLatest?: boolean;
}
export type PackageVersionStatus = string;

export type PackageVersionStatusDescription = string;

export type PortDefaultValue = string;

export type PortName = string;

export type PortType = string;

export type PrincipalArn = string;

export type PrincipalArnsList = Array<string>;
export interface ProvisionDeviceRequest {
  Name: string;
  Description?: string;
  Tags?: Record<string, string>;
  NetworkingConfiguration?: NetworkPayload;
}
export interface ProvisionDeviceResponse {
  DeviceId?: string;
  Arn: string;
  Status: string;
  Certificates?: Uint8Array | string;
  IotThingName?: string;
}
export type Region = string;

export interface RegisterPackageVersionRequest {
  OwnerAccount?: string;
  PackageId: string;
  PackageVersion: string;
  PatchVersion: string;
  MarkLatest?: boolean;
}
export interface RegisterPackageVersionResponse {}
export interface RemoveApplicationInstanceRequest {
  ApplicationInstanceId: string;
}
export interface RemoveApplicationInstanceResponse {}
export interface ReportedRuntimeContextState {
  DesiredState: string;
  RuntimeContextName: string;
  DeviceReportedStatus: string;
  DeviceReportedTime: Date | string;
}
export type ReportedRuntimeContextStates = Array<ReportedRuntimeContextState>;
export type ResourceArn = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export type RetryAfterSeconds = number;

export type RuntimeContextName = string;

export type RuntimeRoleArn = string;

export interface S3Location {
  Region?: string;
  BucketName: string;
  ObjectKey: string;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
  readonly ResourceType?: string;
  readonly QuotaCode: string;
  readonly ServiceCode: string;
}> {}
export interface SignalApplicationInstanceNodeInstancesRequest {
  ApplicationInstanceId: string;
  NodeSignals: Array<NodeSignal>;
}
export interface SignalApplicationInstanceNodeInstancesResponse {
  ApplicationInstanceId: string;
}
export type SortOrder = string;

export interface StaticIpConnectionInfo {
  IpAddress: string;
  Mask: string;
  Dns: Array<string>;
  DefaultGateway: string;
}
export type StatusFilter = string;

export interface StorageLocation {
  Bucket: string;
  RepoPrefixLocation: string;
  GeneratedPrefixLocation: string;
  BinaryPrefixLocation: string;
  ManifestPrefixLocation: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TemplateKey = string;

export type TemplateParametersMap = Record<string, string>;
export type TemplateType = string;

export type TemplateValue = string;

export type TimeStamp = Date | string;

export type Token = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export type UpdateCreatedTime = Date | string;

export interface UpdateDeviceMetadataRequest {
  DeviceId: string;
  Description?: string;
}
export interface UpdateDeviceMetadataResponse {
  DeviceId?: string;
}
export type UpdateProgress = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly Reason?: string;
  readonly ErrorId?: string;
  readonly ErrorArguments?: Array<ValidationExceptionErrorArgument>;
  readonly Fields?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionErrorArgument {
  Name: string;
  Value: string;
}
export type ValidationExceptionErrorArgumentList =
  Array<ValidationExceptionErrorArgument>;
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export type Version = string;

export declare namespace CreateApplicationInstance {
  export type Input = CreateApplicationInstanceRequest;
  export type Output = CreateApplicationInstanceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateJobForDevices {
  export type Input = CreateJobForDevicesRequest;
  export type Output = CreateJobForDevicesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateNodeFromTemplateJob {
  export type Input = CreateNodeFromTemplateJobRequest;
  export type Output = CreateNodeFromTemplateJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePackage {
  export type Input = CreatePackageRequest;
  export type Output = CreatePackageResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePackageImportJob {
  export type Input = CreatePackageImportJobRequest;
  export type Output = CreatePackageImportJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDevice {
  export type Input = DeleteDeviceRequest;
  export type Output = DeleteDeviceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePackage {
  export type Input = DeletePackageRequest;
  export type Output = DeletePackageResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterPackageVersion {
  export type Input = DeregisterPackageVersionRequest;
  export type Output = DeregisterPackageVersionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeApplicationInstance {
  export type Input = DescribeApplicationInstanceRequest;
  export type Output = DescribeApplicationInstanceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeApplicationInstanceDetails {
  export type Input = DescribeApplicationInstanceDetailsRequest;
  export type Output = DescribeApplicationInstanceDetailsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDevice {
  export type Input = DescribeDeviceRequest;
  export type Output = DescribeDeviceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDeviceJob {
  export type Input = DescribeDeviceJobRequest;
  export type Output = DescribeDeviceJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeNode {
  export type Input = DescribeNodeRequest;
  export type Output = DescribeNodeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeNodeFromTemplateJob {
  export type Input = DescribeNodeFromTemplateJobRequest;
  export type Output = DescribeNodeFromTemplateJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribePackage {
  export type Input = DescribePackageRequest;
  export type Output = DescribePackageResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribePackageImportJob {
  export type Input = DescribePackageImportJobRequest;
  export type Output = DescribePackageImportJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribePackageVersion {
  export type Input = DescribePackageVersionRequest;
  export type Output = DescribePackageVersionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApplicationInstanceDependencies {
  export type Input = ListApplicationInstanceDependenciesRequest;
  export type Output = ListApplicationInstanceDependenciesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace ListApplicationInstanceNodeInstances {
  export type Input = ListApplicationInstanceNodeInstancesRequest;
  export type Output = ListApplicationInstanceNodeInstancesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace ListApplicationInstances {
  export type Input = ListApplicationInstancesRequest;
  export type Output = ListApplicationInstancesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace ListDevices {
  export type Input = ListDevicesRequest;
  export type Output = ListDevicesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDevicesJobs {
  export type Input = ListDevicesJobsRequest;
  export type Output = ListDevicesJobsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListNodeFromTemplateJobs {
  export type Input = ListNodeFromTemplateJobsRequest;
  export type Output = ListNodeFromTemplateJobsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListNodes {
  export type Input = ListNodesRequest;
  export type Output = ListNodesResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPackageImportJobs {
  export type Input = ListPackageImportJobsRequest;
  export type Output = ListPackageImportJobsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPackages {
  export type Input = ListPackagesRequest;
  export type Output = ListPackagesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ProvisionDevice {
  export type Input = ProvisionDeviceRequest;
  export type Output = ProvisionDeviceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterPackageVersion {
  export type Input = RegisterPackageVersionRequest;
  export type Output = RegisterPackageVersionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RemoveApplicationInstance {
  export type Input = RemoveApplicationInstanceRequest;
  export type Output = RemoveApplicationInstanceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SignalApplicationInstanceNodeInstances {
  export type Input = SignalApplicationInstanceNodeInstancesRequest;
  export type Output = SignalApplicationInstanceNodeInstancesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDeviceMetadata {
  export type Input = UpdateDeviceMetadataRequest;
  export type Output = UpdateDeviceMetadataResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
