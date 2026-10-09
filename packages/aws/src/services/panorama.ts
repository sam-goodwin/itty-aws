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
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Panorama",
  serviceShapeName: "OmniCloudServiceLambda",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "panorama" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-07-24");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
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
              `https://panorama-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://panorama-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://panorama.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://panorama.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
      ResourceId: S.String,
      ResourceType: S.String,
      ErrorId: /*@__PURE__*/ S.optional(S.String),
      ErrorArguments: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(117)).annotate({
          identifier: "ConflictExceptionErrorArgumentList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      RetryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: S.String,
      ResourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
      ResourceType: /*@__PURE__*/ S.optional(S.String),
      QuotaCode: S.String,
      ServiceCode: S.String,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.optional(S.String),
      ErrorId: /*@__PURE__*/ S.optional(S.String),
      ErrorArguments: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(117)).annotate({
          identifier: "ValidationExceptionErrorArgumentList",
        }),
      ),
      Fields: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(119)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type ApplicationInstanceName = string;
export type Description = string;
export type ManifestPayloadData = string;
export type ManifestPayload = { PayloadData: string };
export type ManifestOverridesPayloadData = string;
export type ManifestOverridesPayload = { PayloadData: string };
export type ApplicationInstanceId = string;
export type RuntimeRoleArn = string;
export type DefaultRuntimeContextDevice = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateApplicationInstanceRequest {
  Name?: string;
  Description?: string;
  ManifestPayload: ManifestPayload;
  ManifestOverridesPayload?: ManifestOverridesPayload;
  ApplicationInstanceIdToReplace?: string;
  RuntimeRoleArn?: string;
  DefaultRuntimeContextDevice: string;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateApplicationInstanceResponse {
  ApplicationInstanceId: string;
}
export type DeviceId = string;
export type DeviceIdList = string[];
export type ImageVersion = string;
export interface OTAJobConfig {
  ImageVersion: string;
  AllowMajorVersionUpdate?: boolean;
}
export interface DeviceJobConfig {
  OTAJobConfig?: OTAJobConfig;
}
export type JobType = string;
export interface CreateJobForDevicesRequest {
  DeviceIds: string[];
  DeviceJobConfig?: DeviceJobConfig;
  JobType: string;
}
export type JobId = string;
export interface Job {
  JobId?: string;
  DeviceId?: string;
}
export type JobList = Job[];
export interface CreateJobForDevicesResponse {
  Jobs: Job[];
}
export type TemplateType = string;
export type NodePackageName = string;
export type NodePackageVersion = string;
export type NodeName = string;
export type TemplateKey = string;
export type TemplateValue = string | redacted.Redacted<string>;
export type TemplateParametersMap = {
  [key: string]: string | redacted.Redacted<string> | undefined;
};
export type JobResourceType = string;
export interface JobResourceTags {
  ResourceType: string;
  Tags: { [key: string]: string | undefined };
}
export type JobTagsList = JobResourceTags[];
export interface CreateNodeFromTemplateJobRequest {
  TemplateType: string;
  OutputPackageName: string;
  OutputPackageVersion: string;
  NodeName: string;
  NodeDescription?: string;
  TemplateParameters: {
    [key: string]: string | redacted.Redacted<string> | undefined;
  };
  JobTags?: JobResourceTags[];
}
export interface CreateNodeFromTemplateJobResponse {
  JobId: string;
}
export interface CreatePackageRequest {
  PackageName: string;
  Tags?: { [key: string]: string | undefined };
}
export type NodePackageId = string;
export type NodePackageArn = string;
export type Bucket = string;
export interface StorageLocation {
  Bucket: string;
  RepoPrefixLocation: string;
  GeneratedPrefixLocation: string;
  BinaryPrefixLocation: string;
  ManifestPrefixLocation: string;
}
export interface CreatePackageResponse {
  PackageId?: string;
  Arn?: string;
  StorageLocation: StorageLocation;
}
export type PackageImportJobType = string;
export type Region = string;
export type BucketName = string;
export type ObjectKey = string;
export interface S3Location {
  Region?: string;
  BucketName: string;
  ObjectKey: string;
}
export interface PackageVersionInputConfig {
  S3Location: S3Location;
}
export interface PackageImportJobInputConfig {
  PackageVersionInputConfig?: PackageVersionInputConfig;
}
export type MarkLatestPatch = boolean;
export interface PackageVersionOutputConfig {
  PackageName: string;
  PackageVersion: string;
  MarkLatest?: boolean;
}
export interface PackageImportJobOutputConfig {
  PackageVersionOutputConfig?: PackageVersionOutputConfig;
}
export type ClientToken = string;
export interface CreatePackageImportJobRequest {
  JobType: string;
  InputConfig: PackageImportJobInputConfig;
  OutputConfig: PackageImportJobOutputConfig;
  ClientToken: string;
  JobTags?: JobResourceTags[];
}
export interface CreatePackageImportJobResponse {
  JobId: string;
}
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
export type PackageOwnerAccount = string;
export type NodePackagePatchVersion = string;
export interface DeregisterPackageVersionRequest {
  OwnerAccount?: string;
  PackageId: string;
  PackageVersion: string;
  PatchVersion: string;
  UpdatedLatestPatchVersion?: string;
}
export interface DeregisterPackageVersionResponse {}
export interface DescribeApplicationInstanceRequest {
  ApplicationInstanceId: string;
}
export type DeviceName = string;
export type ApplicationInstanceStatus = string;
export type ApplicationInstanceHealthStatus = string;
export type ApplicationInstanceStatusDescription = string;
export type ApplicationInstanceArn = string;
export type DesiredState = string;
export type RuntimeContextName = string;
export type DeviceReportedStatus = string;
export interface ReportedRuntimeContextState {
  DesiredState: string;
  RuntimeContextName: string;
  DeviceReportedStatus: string;
  DeviceReportedTime: Date;
}
export type ReportedRuntimeContextStates = ReportedRuntimeContextState[];
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
  CreatedTime?: Date;
  LastUpdatedTime?: Date;
  ApplicationInstanceId?: string;
  Arn?: string;
  Tags?: { [key: string]: string | undefined };
  RuntimeContextStates?: ReportedRuntimeContextState[];
}
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
  CreatedTime?: Date;
  ApplicationInstanceId?: string;
}
export interface DescribeDeviceRequest {
  DeviceId: string;
}
export type DeviceArn = string;
export type DeviceType = string;
export type DeviceConnectionStatus = string;
export type CreatedTime = Date;
export type DeviceStatus = string;
export type LatestSoftware = string;
export type CurrentSoftware = string;
export type DeviceSerialNumber = string;
export type ConnectionType = string;
export type IpAddress = string;
export type Mask = string;
export type Dns = string;
export type DnsList = string[];
export type DefaultGateway = string;
export interface StaticIpConnectionInfo {
  IpAddress: string;
  Mask: string;
  Dns: string[];
  DefaultGateway: string;
}
export interface EthernetPayload {
  ConnectionType: string;
  StaticIpConnectionInfo?: StaticIpConnectionInfo;
}
export type IpAddressOrServerName = string;
export type NtpServerList = string[];
export interface NtpPayload {
  NtpServers: string[];
}
export interface NetworkPayload {
  Ethernet0?: EthernetPayload;
  Ethernet1?: EthernetPayload;
  Ntp?: NtpPayload;
}
export type NetworkConnectionStatus = string;
export type HwAddress = string;
export interface EthernetStatus {
  IpAddress?: string;
  ConnectionStatus?: string;
  HwAddress?: string;
}
export type NtpServerName = string;
export interface NtpStatus {
  ConnectionStatus?: string;
  IpAddress?: string;
  NtpServerName?: string;
}
export type LastUpdatedTime = Date;
export interface NetworkStatus {
  Ethernet0Status?: EthernetStatus;
  Ethernet1Status?: EthernetStatus;
  NtpStatus?: NtpStatus;
  LastUpdatedTime?: Date;
}
export type LeaseExpirationTime = Date;
export type Version = string;
export interface AlternateSoftwareMetadata {
  Version?: string;
}
export type AlternateSoftwares = AlternateSoftwareMetadata[];
export type LatestAlternateSoftware = string;
export type DeviceBrand = string;
export type UpdateProgress = string;
export interface LatestDeviceJob {
  ImageVersion?: string;
  Status?: string;
  JobType?: string;
}
export type DeviceAggregatedStatus = string;
export interface DescribeDeviceResponse {
  DeviceId?: string;
  Name?: string;
  Arn?: string;
  Description?: string;
  Type?: string;
  DeviceConnectionStatus?: string;
  CreatedTime?: Date;
  ProvisioningStatus?: string;
  LatestSoftware?: string;
  CurrentSoftware?: string;
  SerialNumber?: string;
  Tags?: { [key: string]: string | undefined };
  NetworkingConfiguration?: NetworkPayload;
  CurrentNetworkingStatus?: NetworkStatus;
  LeaseExpirationTime?: Date;
  AlternateSoftwares?: AlternateSoftwareMetadata[];
  LatestAlternateSoftware?: string;
  Brand?: string;
  LatestDeviceJob?: LatestDeviceJob;
  DeviceAggregatedStatus?: string;
}
export interface DescribeDeviceJobRequest {
  JobId: string;
}
export type UpdateCreatedTime = Date;
export interface DescribeDeviceJobResponse {
  JobId?: string;
  DeviceId?: string;
  DeviceArn?: string;
  DeviceName?: string;
  DeviceType?: string;
  ImageVersion?: string;
  Status?: string;
  CreatedTime?: Date;
  JobType?: string;
}
export type NodeId = string;
export interface DescribeNodeRequest {
  NodeId: string;
  OwnerAccount?: string;
}
export type NodeCategory = string;
export type PortName = string;
export type PortType = string;
export type PortDefaultValue = string;
export type MaxConnections = number;
export interface NodeInputPort {
  Name?: string;
  Description?: string;
  Type?: string;
  DefaultValue?: string;
  MaxConnections?: number;
}
export type InputPortList = NodeInputPort[];
export interface NodeOutputPort {
  Name?: string;
  Description?: string;
  Type?: string;
}
export type OutputPortList = NodeOutputPort[];
export interface NodeInterface {
  Inputs: NodeInputPort[];
  Outputs: NodeOutputPort[];
}
export type NodeAssetName = string;
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
  CreatedTime: Date;
  LastUpdatedTime: Date;
}
export interface DescribeNodeFromTemplateJobRequest {
  JobId: string;
}
export type NodeFromTemplateJobStatus = string;
export type NodeFromTemplateJobStatusMessage = string;
export interface DescribeNodeFromTemplateJobResponse {
  JobId: string;
  Status: string;
  StatusMessage: string;
  CreatedTime: Date;
  LastUpdatedTime: Date;
  OutputPackageName: string;
  OutputPackageVersion: string;
  NodeName: string;
  NodeDescription?: string;
  TemplateType: string;
  TemplateParameters: {
    [key: string]: string | redacted.Redacted<string> | undefined;
  };
  JobTags?: JobResourceTags[];
}
export interface DescribePackageRequest {
  PackageId: string;
}
export type PrincipalArn = string;
export type PrincipalArnsList = string[];
export interface DescribePackageResponse {
  PackageId: string;
  PackageName: string;
  Arn: string;
  StorageLocation: StorageLocation;
  ReadAccessPrincipalArns?: string[];
  WriteAccessPrincipalArns?: string[];
  CreatedTime: Date;
  Tags: { [key: string]: string | undefined };
}
export interface DescribePackageImportJobRequest {
  JobId: string;
}
export interface OutPutS3Location {
  BucketName: string;
  ObjectKey: string;
}
export interface PackageImportJobOutput {
  PackageId: string;
  PackageVersion: string;
  PatchVersion: string;
  OutputS3Location: OutPutS3Location;
}
export type PackageImportJobStatus = string;
export type PackageImportJobStatusMessage = string;
export interface DescribePackageImportJobResponse {
  JobId: string;
  ClientToken?: string;
  JobType: string;
  InputConfig: PackageImportJobInputConfig;
  OutputConfig: PackageImportJobOutputConfig;
  Output: PackageImportJobOutput;
  CreatedTime: Date;
  LastUpdatedTime: Date;
  Status: string;
  StatusMessage: string;
  JobTags?: JobResourceTags[];
}
export interface DescribePackageVersionRequest {
  OwnerAccount?: string;
  PackageId: string;
  PackageVersion: string;
  PatchVersion?: string;
}
export type PackageVersionStatus = string;
export type PackageVersionStatusDescription = string;
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
  RegisteredTime?: Date;
}
export type MaxSize25 = number;
export type NextToken = string;
export interface ListApplicationInstanceDependenciesRequest {
  ApplicationInstanceId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface PackageObject {
  Name: string;
  PackageVersion: string;
  PatchVersion: string;
}
export type PackageObjects = PackageObject[];
export interface ListApplicationInstanceDependenciesResponse {
  PackageObjects?: PackageObject[];
  NextToken?: string;
}
export interface ListApplicationInstanceNodeInstancesRequest {
  ApplicationInstanceId: string;
  MaxResults?: number;
  NextToken?: string;
}
export type NodeInstanceId = string;
export type NodeInstanceStatus = string;
export interface NodeInstance {
  NodeInstanceId: string;
  NodeId?: string;
  PackageName?: string;
  PackageVersion?: string;
  PackagePatchVersion?: string;
  NodeName?: string;
  CurrentStatus: string;
}
export type NodeInstances = NodeInstance[];
export interface ListApplicationInstanceNodeInstancesResponse {
  NodeInstances?: NodeInstance[];
  NextToken?: string;
}
export type StatusFilter = string;
export interface ListApplicationInstancesRequest {
  DeviceId?: string;
  StatusFilter?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ApplicationInstance {
  Name?: string;
  ApplicationInstanceId?: string;
  DefaultRuntimeContextDevice?: string;
  DefaultRuntimeContextDeviceName?: string;
  Description?: string;
  Status?: string;
  HealthStatus?: string;
  StatusDescription?: string;
  CreatedTime?: Date;
  Arn?: string;
  Tags?: { [key: string]: string | undefined };
  RuntimeContextStates?: ReportedRuntimeContextState[];
}
export type ApplicationInstances = ApplicationInstance[];
export interface ListApplicationInstancesResponse {
  ApplicationInstances?: ApplicationInstance[];
  NextToken?: string;
}
export type ListDevicesSortBy = string;
export type SortOrder = string;
export type NameFilter = string;
export interface ListDevicesRequest {
  NextToken?: string;
  MaxResults?: number;
  SortBy?: string;
  SortOrder?: string;
  NameFilter?: string;
  DeviceAggregatedStatusFilter?: string;
}
export interface Device {
  DeviceId?: string;
  Name?: string;
  CreatedTime?: Date;
  ProvisioningStatus?: string;
  LastUpdatedTime?: Date;
  LeaseExpirationTime?: Date;
  Brand?: string;
  CurrentSoftware?: string;
  Description?: string;
  Tags?: { [key: string]: string | undefined };
  Type?: string;
  LatestDeviceJob?: LatestDeviceJob;
  DeviceAggregatedStatus?: string;
}
export type DeviceList = Device[];
export interface ListDevicesResponse {
  Devices: Device[];
  NextToken?: string;
}
export interface ListDevicesJobsRequest {
  DeviceId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DeviceJob {
  DeviceName?: string;
  DeviceId?: string;
  JobId?: string;
  CreatedTime?: Date;
  JobType?: string;
}
export type DeviceJobList = DeviceJob[];
export interface ListDevicesJobsResponse {
  DeviceJobs?: DeviceJob[];
  NextToken?: string;
}
export interface ListNodeFromTemplateJobsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface NodeFromTemplateJob {
  JobId?: string;
  TemplateType?: string;
  Status?: string;
  StatusMessage?: string;
  CreatedTime?: Date;
  NodeName?: string;
}
export type NodeFromTemplateJobList = NodeFromTemplateJob[];
export interface ListNodeFromTemplateJobsResponse {
  NodeFromTemplateJobs: NodeFromTemplateJob[];
  NextToken?: string;
}
export type Token = string;
export interface ListNodesRequest {
  Category?: string;
  OwnerAccount?: string;
  PackageName?: string;
  PackageVersion?: string;
  PatchVersion?: string;
  NextToken?: string;
  MaxResults?: number;
}
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
  CreatedTime: Date;
}
export type NodesList = Node[];
export interface ListNodesResponse {
  Nodes?: Node[];
  NextToken?: string;
}
export interface ListPackageImportJobsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface PackageImportJob {
  JobId?: string;
  JobType?: string;
  Status?: string;
  StatusMessage?: string;
  CreatedTime?: Date;
  LastUpdatedTime?: Date;
}
export type PackageImportJobList = PackageImportJob[];
export interface ListPackageImportJobsResponse {
  PackageImportJobs: PackageImportJob[];
  NextToken?: string;
}
export interface ListPackagesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface PackageListItem {
  PackageId?: string;
  PackageName?: string;
  Arn?: string;
  CreatedTime?: Date;
  Tags?: { [key: string]: string | undefined };
}
export type PackageList = PackageListItem[];
export interface ListPackagesResponse {
  Packages?: PackageListItem[];
  NextToken?: string;
}
export type ResourceArn = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
export interface ProvisionDeviceRequest {
  Name: string;
  Description?: string;
  Tags?: { [key: string]: string | undefined };
  NetworkingConfiguration?: NetworkPayload;
}
export type Certificates = Uint8Array;
export type IotThingName = string;
export interface ProvisionDeviceResponse {
  DeviceId?: string;
  Arn: string;
  Status: string;
  Certificates?: Uint8Array;
  IotThingName?: string;
}
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
export type NodeSignalValue = string;
export interface NodeSignal {
  NodeInstanceId: string;
  Signal: string;
}
export type NodeSignalList = NodeSignal[];
export interface SignalApplicationInstanceNodeInstancesRequest {
  ApplicationInstanceId: string;
  NodeSignals: NodeSignal[];
}
export interface SignalApplicationInstanceNodeInstancesResponse {
  ApplicationInstanceId: string;
}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateDeviceMetadataRequest {
  DeviceId: string;
  Description?: string;
}
export interface UpdateDeviceMetadataResponse {
  DeviceId?: string;
}
export type RetryAfterSeconds = number;
export type ValidationExceptionReason = string;
export interface ValidationExceptionErrorArgument {
  Name: string;
  Value: string;
}
export type ValidationExceptionErrorArgumentList = ValidationExceptionErrorArgument[];
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export interface ConflictExceptionErrorArgument {
  Name: string;
  Value: string;
}
export type ConflictExceptionErrorArgumentList = ConflictExceptionErrorArgument[];
export type CreateApplicationInstanceError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates an application instance and deploys it to a device.
 */
export const createApplicationInstance: API.OperationMethod<
  CreateApplicationInstanceRequest,
  CreateApplicationInstanceResponse,
  CreateApplicationInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<CreateApplicationInstanceRequest>,
  output: __S(3) as any as S.Schema<CreateApplicationInstanceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplicationInstance",
}));

export type CreateJobForDevicesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates a job to run on a device. A job can update a device's software or reboot it.
 */
export const createJobForDevices: API.OperationMethod<
  CreateJobForDevicesRequest,
  CreateJobForDevicesResponse,
  CreateJobForDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7) as any as S.Schema<CreateJobForDevicesRequest>,
  output: __S(10) as any as S.Schema<CreateJobForDevicesResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateJobForDevices",
}));

export type CreateNodeFromTemplateJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Creates a camera stream node.
 */
export const createNodeFromTemplateJob: API.OperationMethod<
  CreateNodeFromTemplateJobRequest,
  CreateNodeFromTemplateJobResponse,
  CreateNodeFromTemplateJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14) as any as S.Schema<CreateNodeFromTemplateJobRequest>,
  output: __S(15) as any as S.Schema<CreateNodeFromTemplateJobResponse>,
  errors: [AccessDeniedException, ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateNodeFromTemplateJob",
}));

export type CreatePackageError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Creates a package and storage location in an Amazon S3 access point.
 */
export const createPackage: API.OperationMethod<
  CreatePackageRequest,
  CreatePackageResponse,
  CreatePackageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16) as any as S.Schema<CreatePackageRequest>,
  output: __S(18) as any as S.Schema<CreatePackageResponse>,
  errors: [AccessDeniedException, ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePackage",
}));

export type CreatePackageImportJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Imports a node package.
 */
export const createPackageImportJob: API.OperationMethod<
  CreatePackageImportJobRequest,
  CreatePackageImportJobResponse,
  CreatePackageImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24) as any as S.Schema<CreatePackageImportJobRequest>,
  output: __S(15) as any as S.Schema<CreatePackageImportJobResponse>,
  errors: [AccessDeniedException, ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePackageImportJob",
}));

export type DeleteDeviceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a device.
 */
export const deleteDevice: API.OperationMethod<
  DeleteDeviceRequest,
  DeleteDeviceResponse,
  DeleteDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25) as any as S.Schema<DeleteDeviceRequest>,
  output: __S(26) as any as S.Schema<DeleteDeviceResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDevice",
}));

export type DeletePackageError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a package.
 *
 * To delete a package, you need permission to call `s3:DeleteObject` in addition to permissions for
 * the AWS Panorama API.
 */
export const deletePackage: API.OperationMethod<
  DeletePackageRequest,
  DeletePackageResponse,
  DeletePackageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27) as any as S.Schema<DeletePackageRequest>,
  output: __S(28) as any as S.Schema<DeletePackageResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePackage",
}));

export type DeregisterPackageVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deregisters a package version.
 */
export const deregisterPackageVersion: API.OperationMethod<
  DeregisterPackageVersionRequest,
  DeregisterPackageVersionResponse,
  DeregisterPackageVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29) as any as S.Schema<DeregisterPackageVersionRequest>,
  output: __S(30) as any as S.Schema<DeregisterPackageVersionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterPackageVersion",
}));

export type DescribeApplicationInstanceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about an application instance on a device.
 */
export const describeApplicationInstance: API.OperationMethod<
  DescribeApplicationInstanceRequest,
  DescribeApplicationInstanceResponse,
  DescribeApplicationInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31) as any as S.Schema<DescribeApplicationInstanceRequest>,
  output: __S(34) as any as S.Schema<DescribeApplicationInstanceResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplicationInstance",
}));

export type DescribeApplicationInstanceDetailsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about an application instance's configuration manifest.
 */
export const describeApplicationInstanceDetails: API.OperationMethod<
  DescribeApplicationInstanceDetailsRequest,
  DescribeApplicationInstanceDetailsResponse,
  DescribeApplicationInstanceDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35) as any as S.Schema<DescribeApplicationInstanceDetailsRequest>,
  output: __S(36) as any as S.Schema<DescribeApplicationInstanceDetailsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplicationInstanceDetails",
}));

export type DescribeDeviceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a device.
 */
export const describeDevice: API.OperationMethod<
  DescribeDeviceRequest,
  DescribeDeviceResponse,
  DescribeDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37) as any as S.Schema<DescribeDeviceRequest>,
  output: __S(48) as any as S.Schema<DescribeDeviceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDevice",
}));

export type DescribeDeviceJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a device job.
 */
export const describeDeviceJob: API.OperationMethod<
  DescribeDeviceJobRequest,
  DescribeDeviceJobResponse,
  DescribeDeviceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49) as any as S.Schema<DescribeDeviceJobRequest>,
  output: __S(50) as any as S.Schema<DescribeDeviceJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDeviceJob",
}));

export type DescribeNodeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a node.
 */
export const describeNode: API.OperationMethod<
  DescribeNodeRequest,
  DescribeNodeResponse,
  DescribeNodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51) as any as S.Schema<DescribeNodeRequest>,
  output: __S(57) as any as S.Schema<DescribeNodeResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeNode",
}));

export type DescribeNodeFromTemplateJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a job to create a camera stream node.
 */
export const describeNodeFromTemplateJob: API.OperationMethod<
  DescribeNodeFromTemplateJobRequest,
  DescribeNodeFromTemplateJobResponse,
  DescribeNodeFromTemplateJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58) as any as S.Schema<DescribeNodeFromTemplateJobRequest>,
  output: __S(59) as any as S.Schema<DescribeNodeFromTemplateJobResponse>,
  errors: [AccessDeniedException, ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeNodeFromTemplateJob",
}));

export type DescribePackageError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a package.
 */
export const describePackage: API.OperationMethod<
  DescribePackageRequest,
  DescribePackageResponse,
  DescribePackageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60) as any as S.Schema<DescribePackageRequest>,
  output: __S(61) as any as S.Schema<DescribePackageResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePackage",
}));

export type DescribePackageImportJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a package import job.
 */
export const describePackageImportJob: API.OperationMethod<
  DescribePackageImportJobRequest,
  DescribePackageImportJobResponse,
  DescribePackageImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62) as any as S.Schema<DescribePackageImportJobRequest>,
  output: __S(65) as any as S.Schema<DescribePackageImportJobResponse>,
  errors: [AccessDeniedException, ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePackageImportJob",
}));

export type DescribePackageVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a package version.
 */
export const describePackageVersion: API.OperationMethod<
  DescribePackageVersionRequest,
  DescribePackageVersionResponse,
  DescribePackageVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66) as any as S.Schema<DescribePackageVersionRequest>,
  output: __S(67) as any as S.Schema<DescribePackageVersionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePackageVersion",
}));

export type ListApplicationInstanceDependenciesError =
  | AccessDeniedException
  | InternalServerException
  | CommonErrors;
/**
 * Returns a list of application instance dependencies.
 */
export const listApplicationInstanceDependencies: API.PaginatedOperationMethod<
  ListApplicationInstanceDependenciesRequest,
  ListApplicationInstanceDependenciesResponse,
  ListApplicationInstanceDependenciesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(68) as any as S.Schema<ListApplicationInstanceDependenciesRequest>,
  output: __S(71) as any as S.Schema<ListApplicationInstanceDependenciesResponse>,
  errors: [AccessDeniedException, InternalServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplicationInstanceDependencies",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListApplicationInstanceNodeInstancesError =
  | AccessDeniedException
  | InternalServerException
  | CommonErrors;
/**
 * Returns a list of application node instances.
 */
export const listApplicationInstanceNodeInstances: API.PaginatedOperationMethod<
  ListApplicationInstanceNodeInstancesRequest,
  ListApplicationInstanceNodeInstancesResponse,
  ListApplicationInstanceNodeInstancesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(72) as any as S.Schema<ListApplicationInstanceNodeInstancesRequest>,
  output: __S(75) as any as S.Schema<ListApplicationInstanceNodeInstancesResponse>,
  errors: [AccessDeniedException, InternalServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplicationInstanceNodeInstances",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListApplicationInstancesError =
  | AccessDeniedException
  | InternalServerException
  | CommonErrors;
/**
 * Returns a list of application instances.
 */
export const listApplicationInstances: API.PaginatedOperationMethod<
  ListApplicationInstancesRequest,
  ListApplicationInstancesResponse,
  ListApplicationInstancesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(76) as any as S.Schema<ListApplicationInstancesRequest>,
  output: __S(79) as any as S.Schema<ListApplicationInstancesResponse>,
  errors: [AccessDeniedException, InternalServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplicationInstances",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDevicesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of devices.
 */
export const listDevices: API.PaginatedOperationMethod<
  ListDevicesRequest,
  ListDevicesResponse,
  ListDevicesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(80) as any as S.Schema<ListDevicesRequest>,
  output: __S(83) as any as S.Schema<ListDevicesResponse>,
  errors: [AccessDeniedException, ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDevices",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDevicesJobsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of jobs.
 */
export const listDevicesJobs: API.PaginatedOperationMethod<
  ListDevicesJobsRequest,
  ListDevicesJobsResponse,
  ListDevicesJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(84) as any as S.Schema<ListDevicesJobsRequest>,
  output: __S(87) as any as S.Schema<ListDevicesJobsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDevicesJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListNodeFromTemplateJobsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of camera stream node jobs.
 */
export const listNodeFromTemplateJobs: API.PaginatedOperationMethod<
  ListNodeFromTemplateJobsRequest,
  ListNodeFromTemplateJobsResponse,
  ListNodeFromTemplateJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(88) as any as S.Schema<ListNodeFromTemplateJobsRequest>,
  output: __S(91) as any as S.Schema<ListNodeFromTemplateJobsResponse>,
  errors: [AccessDeniedException, ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNodeFromTemplateJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListNodesError =
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of nodes.
 */
export const listNodes: API.PaginatedOperationMethod<
  ListNodesRequest,
  ListNodesResponse,
  ListNodesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(92) as any as S.Schema<ListNodesRequest>,
  output: __S(95) as any as S.Schema<ListNodesResponse>,
  errors: [ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNodes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPackageImportJobsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of package import jobs.
 */
export const listPackageImportJobs: API.PaginatedOperationMethod<
  ListPackageImportJobsRequest,
  ListPackageImportJobsResponse,
  ListPackageImportJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(96) as any as S.Schema<ListPackageImportJobsRequest>,
  output: __S(99) as any as S.Schema<ListPackageImportJobsResponse>,
  errors: [AccessDeniedException, ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPackageImportJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPackagesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of packages.
 */
export const listPackages: API.PaginatedOperationMethod<
  ListPackagesRequest,
  ListPackagesResponse,
  ListPackagesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(100) as any as S.Schema<ListPackagesRequest>,
  output: __S(103) as any as S.Schema<ListPackagesResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPackages",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of tags for a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(104) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(105) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ProvisionDeviceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a device and returns a configuration archive. The configuration archive is a ZIP file that contains a
 * provisioning certificate that is valid for 5 minutes. Name the configuration archive
 * `certificates-omni_*device-name*.zip` and transfer it to the device within 5
 * minutes. Use the included USB storage device and connect it to the USB 3.0 port next to the HDMI output.
 */
export const provisionDevice: API.OperationMethod<
  ProvisionDeviceRequest,
  ProvisionDeviceResponse,
  ProvisionDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106) as any as S.Schema<ProvisionDeviceRequest>,
  output: __S(107) as any as S.Schema<ProvisionDeviceResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ProvisionDevice",
}));

export type RegisterPackageVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Registers a package version.
 */
export const registerPackageVersion: API.OperationMethod<
  RegisterPackageVersionRequest,
  RegisterPackageVersionResponse,
  RegisterPackageVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(108) as any as S.Schema<RegisterPackageVersionRequest>,
  output: __S(28) as any as S.Schema<RegisterPackageVersionResponse>,
  errors: [AccessDeniedException, ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterPackageVersion",
}));

export type RemoveApplicationInstanceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes an application instance.
 */
export const removeApplicationInstance: API.OperationMethod<
  RemoveApplicationInstanceRequest,
  RemoveApplicationInstanceResponse,
  RemoveApplicationInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109) as any as S.Schema<RemoveApplicationInstanceRequest>,
  output: __S(30) as any as S.Schema<RemoveApplicationInstanceResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveApplicationInstance",
}));

export type SignalApplicationInstanceNodeInstancesError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Signal camera nodes to stop or resume.
 */
export const signalApplicationInstanceNodeInstances: API.OperationMethod<
  SignalApplicationInstanceNodeInstancesRequest,
  SignalApplicationInstanceNodeInstancesResponse,
  SignalApplicationInstanceNodeInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112) as any as S.Schema<SignalApplicationInstanceNodeInstancesRequest>,
  output: __S(3) as any as S.Schema<SignalApplicationInstanceNodeInstancesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SignalApplicationInstanceNodeInstances",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Tags a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(113) as any as S.Schema<TagResourceRequest>,
  output: __S(28) as any as S.Schema<TagResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114) as any as S.Schema<UntagResourceRequest>,
  output: __S(28) as any as S.Schema<UntagResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateDeviceMetadataError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a device's metadata.
 */
export const updateDeviceMetadata: API.OperationMethod<
  UpdateDeviceMetadataRequest,
  UpdateDeviceMetadataResponse,
  UpdateDeviceMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115) as any as S.Schema<UpdateDeviceMetadataRequest>,
  output: __S(26) as any as S.Schema<UpdateDeviceMetadataResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDeviceMetadata",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ PayloadData: S.String })]);
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          ManifestPayload: __S(0),
          ManifestOverridesPayload: S.optional(__S(0)),
          ApplicationInstanceIdToReplace: S.optional(S.String),
          RuntimeRoleArn: S.optional(S.String),
          DefaultRuntimeContextDevice: S.String,
          Tags: S.optional(__S(1)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/application-instances" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateApplicationInstanceRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ ApplicationInstanceId: S.String })).annotate({
        identifier: "CreateApplicationInstanceResponse",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ImageVersion: S.String,
          AllowMajorVersionUpdate: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "OTAJobConfig" });
    case 6:
      return S.suspend(() => S.Struct({ OTAJobConfig: S.optional(__S(5)) })).annotate({
        identifier: "DeviceJobConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DeviceIds: __S(4),
          DeviceJobConfig: S.optional(__S(6)),
          JobType: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/jobs" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateJobForDevicesRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ JobId: S.optional(S.String), DeviceId: S.optional(S.String) }),
      ).annotate({ identifier: "Job" });
    case 1:
      return S.Array(__S(8));
    case 2:
      return S.suspend(() => S.Struct({ Jobs: __S(9) })).annotate({
        identifier: "CreateJobForDevicesResponse",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ SensitiveString.pipe(S.optional));
    case 4:
      return S.suspend(() => S.Struct({ ResourceType: S.String, Tags: __S(1) })).annotate({
        identifier: "JobResourceTags",
      });
    case 5:
      return S.Array(__S(12));
    case 6:
      return S.suspend(() =>
        S.Struct({
          TemplateType: S.String,
          OutputPackageName: S.String,
          OutputPackageVersion: S.String,
          NodeName: S.String,
          NodeDescription: S.optional(S.String),
          TemplateParameters: __S(11),
          JobTags: S.optional(__S(13)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/packages/template-job" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateNodeFromTemplateJobRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ JobId: S.String })).annotate({
        identifier: "CreateNodeFromTemplateJobResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PackageName: S.String, Tags: S.optional(__S(1)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/packages" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreatePackageRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Bucket: S.String,
          RepoPrefixLocation: S.String,
          GeneratedPrefixLocation: S.String,
          BinaryPrefixLocation: S.String,
          ManifestPrefixLocation: S.String,
        }),
      ).annotate({
        identifier: "StorageLocation",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PackageId: S.optional(S.String),
          Arn: S.optional(S.String),
          StorageLocation: __S(17),
        }),
      ).annotate({
        identifier: "CreatePackageResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Region: S.optional(S.String),
          BucketName: S.String,
          ObjectKey: S.String,
        }),
      ).annotate({ identifier: "S3Location" });
    case 4:
      return S.suspend(() => S.Struct({ S3Location: __S(19) })).annotate({
        identifier: "PackageVersionInputConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PackageVersionInputConfig: S.optional(__S(20)),
        }),
      ).annotate({
        identifier: "PackageImportJobInputConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PackageName: S.String,
          PackageVersion: S.String,
          MarkLatest: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "PackageVersionOutputConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          PackageVersionOutputConfig: S.optional(__S(22)),
        }),
      ).annotate({
        identifier: "PackageImportJobOutputConfig",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          JobType: S.String,
          InputConfig: __S(21),
          OutputConfig: __S(23),
          ClientToken: S.String,
          JobTags: S.optional(__S(13)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/packages/import-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePackageImportJobRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DeviceId: S.String.pipe(T.HttpLabel("DeviceId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/devices/{DeviceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDeviceRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ DeviceId: S.optional(S.String) })).annotate({
        identifier: "DeleteDeviceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PackageId: S.String.pipe(T.HttpLabel("PackageId")),
          ForceDelete: S.optional(S.Boolean).pipe(T.HttpQuery("ForceDelete")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/packages/{PackageId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePackageRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeletePackageResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OwnerAccount: S.optional(S.String).pipe(T.HttpQuery("OwnerAccount")),
          PackageId: S.String.pipe(T.HttpLabel("PackageId")),
          PackageVersion: S.String.pipe(T.HttpLabel("PackageVersion")),
          PatchVersion: S.String.pipe(T.HttpLabel("PatchVersion")),
          UpdatedLatestPatchVersion: S.optional(S.String).pipe(
            T.HttpQuery("UpdatedLatestPatchVersion"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/packages/{PackageId}/versions/{PackageVersion}/patch/{PatchVersion}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeregisterPackageVersionRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeregisterPackageVersionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationInstanceId: S.String.pipe(T.HttpLabel("ApplicationInstanceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/application-instances/{ApplicationInstanceId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeApplicationInstanceRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DesiredState: S.String,
          RuntimeContextName: S.String,
          DeviceReportedStatus: S.String,
          DeviceReportedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "ReportedRuntimeContextState",
      });
    case 1:
      return S.Array(__S(32));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          DefaultRuntimeContextDevice: S.optional(S.String),
          DefaultRuntimeContextDeviceName: S.optional(S.String),
          ApplicationInstanceIdToReplace: S.optional(S.String),
          RuntimeRoleArn: S.optional(S.String),
          Status: S.optional(S.String),
          HealthStatus: S.optional(S.String),
          StatusDescription: S.optional(S.String),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ApplicationInstanceId: S.optional(S.String),
          Arn: S.optional(S.String),
          Tags: S.optional(__S(1)),
          RuntimeContextStates: S.optional(__S(33)),
        }),
      ).annotate({
        identifier: "DescribeApplicationInstanceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationInstanceId: S.String.pipe(T.HttpLabel("ApplicationInstanceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/application-instances/{ApplicationInstanceId}/details",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeApplicationInstanceDetailsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          DefaultRuntimeContextDevice: S.optional(S.String),
          ManifestPayload: S.optional(__S(0)),
          ManifestOverridesPayload: S.optional(__S(0)),
          ApplicationInstanceIdToReplace: S.optional(S.String),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ApplicationInstanceId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeApplicationInstanceDetailsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DeviceId: S.String.pipe(T.HttpLabel("DeviceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/devices/{DeviceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDeviceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          IpAddress: S.String,
          Mask: S.String,
          Dns: __S(4),
          DefaultGateway: S.String,
        }),
      ).annotate({
        identifier: "StaticIpConnectionInfo",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConnectionType: S.String,
          StaticIpConnectionInfo: S.optional(__S(38)),
        }),
      ).annotate({
        identifier: "EthernetPayload",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ NtpServers: __S(4) })).annotate({
        identifier: "NtpPayload",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Ethernet0: S.optional(__S(39)),
          Ethernet1: S.optional(__S(39)),
          Ntp: S.optional(__S(40)),
        }),
      ).annotate({ identifier: "NetworkPayload" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          IpAddress: S.optional(S.String),
          ConnectionStatus: S.optional(S.String),
          HwAddress: S.optional(S.String),
        }),
      ).annotate({ identifier: "EthernetStatus" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ConnectionStatus: S.optional(S.String),
          IpAddress: S.optional(S.String),
          NtpServerName: S.optional(S.String),
        }),
      ).annotate({ identifier: "NtpStatus" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Ethernet0Status: S.optional(__S(42)),
          Ethernet1Status: S.optional(__S(42)),
          NtpStatus: S.optional(__S(43)),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "NetworkStatus" });
    case 5:
      return S.suspend(() => S.Struct({ Version: S.optional(S.String) })).annotate({
        identifier: "AlternateSoftwareMetadata",
      });
    case 6:
      return S.Array(__S(45));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ImageVersion: S.optional(S.String),
          Status: S.optional(S.String),
          JobType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LatestDeviceJob",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DeviceId: S.optional(S.String),
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          Description: S.optional(S.String),
          Type: S.optional(S.String),
          DeviceConnectionStatus: S.optional(S.String),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ProvisioningStatus: S.optional(S.String),
          LatestSoftware: S.optional(S.String),
          CurrentSoftware: S.optional(S.String),
          SerialNumber: S.optional(S.String),
          Tags: S.optional(__S(1)),
          NetworkingConfiguration: S.optional(__S(41)),
          CurrentNetworkingStatus: S.optional(__S(44)),
          LeaseExpirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AlternateSoftwares: S.optional(__S(46)),
          LatestAlternateSoftware: S.optional(S.String),
          Brand: S.optional(S.String),
          LatestDeviceJob: S.optional(__S(47)),
          DeviceAggregatedStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeDeviceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ JobId: S.String.pipe(T.HttpLabel("JobId")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/jobs/{JobId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeDeviceJobRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          DeviceId: S.optional(S.String),
          DeviceArn: S.optional(S.String),
          DeviceName: S.optional(S.String),
          DeviceType: S.optional(S.String),
          ImageVersion: S.optional(S.String),
          Status: S.optional(S.String),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          JobType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeDeviceJobResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NodeId: S.String.pipe(T.HttpLabel("NodeId")),
          OwnerAccount: S.optional(S.String).pipe(T.HttpQuery("OwnerAccount")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/nodes/{NodeId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeNodeRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Type: S.optional(S.String),
          DefaultValue: S.optional(S.String),
          MaxConnections: S.optional(S.Number),
        }),
      ).annotate({ identifier: "NodeInputPort" });
    case 5:
      return S.Array(__S(52));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "NodeOutputPort" });
    case 7:
      return S.Array(__S(54));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Inputs: __S(53), Outputs: __S(55) })).annotate({
        identifier: "NodeInterface",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NodeId: S.String,
          Name: S.String,
          Category: S.String,
          OwnerAccount: S.String,
          PackageName: S.String,
          PackageId: S.String,
          PackageArn: S.optional(S.String),
          PackageVersion: S.String,
          PatchVersion: S.String,
          NodeInterface: __S(56),
          AssetName: S.optional(S.String),
          Description: S.String,
          CreatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "DescribeNodeResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ JobId: S.String.pipe(T.HttpLabel("JobId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/packages/template-job/{JobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeNodeFromTemplateJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          JobId: S.String,
          Status: S.String,
          StatusMessage: S.String,
          CreatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          OutputPackageName: S.String,
          OutputPackageVersion: S.String,
          NodeName: S.String,
          NodeDescription: S.optional(S.String),
          TemplateType: S.String,
          TemplateParameters: __S(11),
          JobTags: S.optional(__S(13)),
        }),
      ).annotate({
        identifier: "DescribeNodeFromTemplateJobResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ PackageId: S.String.pipe(T.HttpLabel("PackageId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/packages/metadata/{PackageId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribePackageRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PackageId: S.String,
          PackageName: S.String,
          Arn: S.String,
          StorageLocation: __S(17),
          ReadAccessPrincipalArns: S.optional(__S(4)),
          WriteAccessPrincipalArns: S.optional(__S(4)),
          CreatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Tags: __S(1),
        }),
      ).annotate({
        identifier: "DescribePackageResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ JobId: S.String.pipe(T.HttpLabel("JobId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/packages/import-jobs/{JobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribePackageImportJobRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ BucketName: S.String, ObjectKey: S.String })).annotate({
        identifier: "OutPutS3Location",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PackageId: S.String,
          PackageVersion: S.String,
          PatchVersion: S.String,
          OutputS3Location: __S(63),
        }),
      ).annotate({
        identifier: "PackageImportJobOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          JobId: S.String,
          ClientToken: S.optional(S.String),
          JobType: S.String,
          InputConfig: __S(21),
          OutputConfig: __S(23),
          Output: __S(64),
          CreatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Status: S.String,
          StatusMessage: S.String,
          JobTags: S.optional(__S(13)),
        }),
      ).annotate({
        identifier: "DescribePackageImportJobResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          OwnerAccount: S.optional(S.String).pipe(T.HttpQuery("OwnerAccount")),
          PackageId: S.String.pipe(T.HttpLabel("PackageId")),
          PackageVersion: S.String.pipe(T.HttpLabel("PackageVersion")),
          PatchVersion: S.optional(S.String).pipe(T.HttpQuery("PatchVersion")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/packages/metadata/{PackageId}/versions/{PackageVersion}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribePackageVersionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          OwnerAccount: S.optional(S.String),
          PackageId: S.String,
          PackageArn: S.optional(S.String),
          PackageName: S.String,
          PackageVersion: S.String,
          PatchVersion: S.String,
          IsLatestPatch: S.Boolean,
          Status: S.String,
          StatusDescription: S.optional(S.String),
          RegisteredTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribePackageVersionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationInstanceId: S.String.pipe(T.HttpLabel("ApplicationInstanceId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/application-instances/{ApplicationInstanceId}/package-dependencies",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListApplicationInstanceDependenciesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          PackageVersion: S.String,
          PatchVersion: S.String,
        }),
      ).annotate({ identifier: "PackageObject" });
    case 6:
      return S.Array(__S(69));
    case 7:
      return S.suspend(() =>
        S.Struct({
          PackageObjects: S.optional(__S(70)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListApplicationInstanceDependenciesResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationInstanceId: S.String.pipe(T.HttpLabel("ApplicationInstanceId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/application-instances/{ApplicationInstanceId}/node-instances",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListApplicationInstanceNodeInstancesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NodeInstanceId: S.String,
          NodeId: S.optional(S.String),
          PackageName: S.optional(S.String),
          PackageVersion: S.optional(S.String),
          PackagePatchVersion: S.optional(S.String),
          NodeName: S.optional(S.String),
          CurrentStatus: S.String,
        }),
      ).annotate({ identifier: "NodeInstance" });
    case 2:
      return S.Array(__S(73));
    case 3:
      return S.suspend(() =>
        S.Struct({
          NodeInstances: S.optional(__S(74)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListApplicationInstanceNodeInstancesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DeviceId: S.optional(S.String).pipe(T.HttpQuery("deviceId")),
          StatusFilter: S.optional(S.String).pipe(T.HttpQuery("statusFilter")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/application-instances" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListApplicationInstancesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          ApplicationInstanceId: S.optional(S.String),
          DefaultRuntimeContextDevice: S.optional(S.String),
          DefaultRuntimeContextDeviceName: S.optional(S.String),
          Description: S.optional(S.String),
          Status: S.optional(S.String),
          HealthStatus: S.optional(S.String),
          StatusDescription: S.optional(S.String),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Arn: S.optional(S.String),
          Tags: S.optional(__S(1)),
          RuntimeContextStates: S.optional(__S(33)),
        }),
      ).annotate({
        identifier: "ApplicationInstance",
      });
    case 6:
      return S.Array(__S(77));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationInstances: S.optional(__S(78)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListApplicationInstancesResponse",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          SortBy: S.optional(S.String).pipe(T.HttpQuery("SortBy")),
          SortOrder: S.optional(S.String).pipe(T.HttpQuery("SortOrder")),
          NameFilter: S.optional(S.String).pipe(T.HttpQuery("NameFilter")),
          DeviceAggregatedStatusFilter: S.optional(S.String).pipe(
            T.HttpQuery("DeviceAggregatedStatusFilter"),
          ),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/devices" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListDevicesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DeviceId: S.optional(S.String),
          Name: S.optional(S.String),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ProvisioningStatus: S.optional(S.String),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LeaseExpirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Brand: S.optional(S.String),
          CurrentSoftware: S.optional(S.String),
          Description: S.optional(S.String),
          Tags: S.optional(__S(1)),
          Type: S.optional(S.String),
          LatestDeviceJob: S.optional(__S(47)),
          DeviceAggregatedStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "Device" });
    case 2:
      return S.Array(__S(81));
    case 3:
      return S.suspend(() =>
        S.Struct({ Devices: __S(82), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDevicesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DeviceId: S.optional(S.String).pipe(T.HttpQuery("DeviceId")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/jobs" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListDevicesJobsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DeviceName: S.optional(S.String),
          DeviceId: S.optional(S.String),
          JobId: S.optional(S.String),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          JobType: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeviceJob" });
    case 6:
      return S.Array(__S(85));
    case 7:
      return S.suspend(() =>
        S.Struct({
          DeviceJobs: S.optional(__S(86)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDevicesJobsResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/packages/template-job" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNodeFromTemplateJobsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          TemplateType: S.optional(S.String),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          NodeName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NodeFromTemplateJob",
      });
    case 2:
      return S.Array(__S(89));
    case 3:
      return S.suspend(() =>
        S.Struct({
          NodeFromTemplateJobs: __S(90),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListNodeFromTemplateJobsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Category: S.optional(S.String).pipe(T.HttpQuery("category")),
          OwnerAccount: S.optional(S.String).pipe(T.HttpQuery("ownerAccount")),
          PackageName: S.optional(S.String).pipe(T.HttpQuery("packageName")),
          PackageVersion: S.optional(S.String).pipe(T.HttpQuery("packageVersion")),
          PatchVersion: S.optional(S.String).pipe(T.HttpQuery("patchVersion")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/nodes" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListNodesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NodeId: S.String,
          Name: S.String,
          Category: S.String,
          OwnerAccount: S.optional(S.String),
          PackageName: S.String,
          PackageId: S.String,
          PackageArn: S.optional(S.String),
          PackageVersion: S.String,
          PatchVersion: S.String,
          Description: S.optional(S.String),
          CreatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "Node" });
    case 6:
      return S.Array(__S(93));
    case 7:
      return S.suspend(() =>
        S.Struct({ Nodes: S.optional(__S(94)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListNodesResponse",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/packages/import-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPackageImportJobsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          JobType: S.optional(S.String),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "PackageImportJob",
      });
    case 2:
      return S.Array(__S(97));
    case 3:
      return S.suspend(() =>
        S.Struct({
          PackageImportJobs: __S(98),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPackageImportJobsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/packages" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPackagesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PackageId: S.optional(S.String),
          PackageName: S.optional(S.String),
          Arn: S.optional(S.String),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(__S(1)),
        }),
      ).annotate({
        identifier: "PackageListItem",
      });
    case 6:
      return S.Array(__S(101));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Packages: S.optional(__S(102)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPackagesResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(1)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          Tags: S.optional(__S(1)),
          NetworkingConfiguration: S.optional(__S(41)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/devices" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ProvisionDeviceRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DeviceId: S.optional(S.String),
          Arn: S.String,
          Status: S.String,
          Certificates: S.optional(T.Blob),
          IotThingName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ProvisionDeviceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          OwnerAccount: S.optional(S.String),
          PackageId: S.String.pipe(T.HttpLabel("PackageId")),
          PackageVersion: S.String.pipe(T.HttpLabel("PackageVersion")),
          PatchVersion: S.String.pipe(T.HttpLabel("PatchVersion")),
          MarkLatest: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/packages/{PackageId}/versions/{PackageVersion}/patch/{PatchVersion}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RegisterPackageVersionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationInstanceId: S.String.pipe(T.HttpLabel("ApplicationInstanceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/application-instances/{ApplicationInstanceId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RemoveApplicationInstanceRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ NodeInstanceId: S.String, Signal: S.String })).annotate({
        identifier: "NodeSignal",
      });
    case 7:
      return S.Array(__S(110));
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationInstanceId: S.String.pipe(T.HttpLabel("ApplicationInstanceId")),
          NodeSignals: __S(111),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/application-instances/{ApplicationInstanceId}/node-signals",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SignalApplicationInstanceNodeInstancesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          Tags: __S(1),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "TagResourceRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagKeys: __S(4).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UntagResourceRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DeviceId: S.String.pipe(T.HttpLabel("DeviceId")),
          Description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/devices/{DeviceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDeviceMetadataRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ Name: S.String, Value: S.String })).annotate({
        identifier: "ValidationExceptionErrorArgument",
      });
    case 5:
      return S.Array(__S(116));
    case 6:
      return S.suspend(() => S.Struct({ Name: S.String, Message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 7:
      return S.Array(__S(118));
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
  }
}
