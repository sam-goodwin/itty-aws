import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface CloudHsmFrontendService {
  addTagsToResource(
    input: AddTagsToResourceRequest,
  ): Effect.Effect<
    AddTagsToResourceResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  createHapg(
    input: CreateHapgRequest,
  ): Effect.Effect<
    CreateHapgResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  createHsm(
    input: CreateHsmRequest,
  ): Effect.Effect<
    CreateHsmResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  createLunaClient(
    input: CreateLunaClientRequest,
  ): Effect.Effect<
    CreateLunaClientResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  deleteHapg(
    input: DeleteHapgRequest,
  ): Effect.Effect<
    DeleteHapgResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  deleteHsm(
    input: DeleteHsmRequest,
  ): Effect.Effect<
    DeleteHsmResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  deleteLunaClient(
    input: DeleteLunaClientRequest,
  ): Effect.Effect<
    DeleteLunaClientResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  describeHapg(
    input: DescribeHapgRequest,
  ): Effect.Effect<
    DescribeHapgResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  describeHsm(
    input: DescribeHsmRequest,
  ): Effect.Effect<
    DescribeHsmResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  describeLunaClient(
    input: DescribeLunaClientRequest,
  ): Effect.Effect<
    DescribeLunaClientResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  getConfig(
    input: GetConfigRequest,
  ): Effect.Effect<
    GetConfigResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  listAvailableZones(
    input: ListAvailableZonesRequest,
  ): Effect.Effect<
    ListAvailableZonesResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  listHapgs(
    input: ListHapgsRequest,
  ): Effect.Effect<
    ListHapgsResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  listHsms(
    input: ListHsmsRequest,
  ): Effect.Effect<
    ListHsmsResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  listLunaClients(
    input: ListLunaClientsRequest,
  ): Effect.Effect<
    ListLunaClientsResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  modifyHapg(
    input: ModifyHapgRequest,
  ): Effect.Effect<
    ModifyHapgResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  modifyHsm(
    input: ModifyHsmRequest,
  ): Effect.Effect<
    ModifyHsmResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
  modifyLunaClient(
    input: ModifyLunaClientRequest,
  ): Effect.Effect<
    ModifyLunaClientResponse,
    CloudHsmServiceException | CommonAwsError
  >;
  removeTagsFromResource(
    input: RemoveTagsFromResourceRequest,
  ): Effect.Effect<
    RemoveTagsFromResourceResponse,
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError
  >;
}

export type Cloudhsm = CloudHsmFrontendService;

export interface AddTagsToResourceRequest {
  ResourceArn: string;
  TagList: Array<Tag>;
}
export interface AddTagsToResourceResponse {
  Status: string;
}
export type AZ = string;

export type AZList = Array<string>;
export type Certificate = string;

export type CertificateFingerprint = string;

export type ClientArn = string;

export type ClientLabel = string;

export type ClientList = Array<string>;
export type ClientToken = string;

export type ClientVersion = "FIVE_ONE" | "FIVE_THREE";
export declare class CloudHsmInternalException extends EffectData.TaggedError(
  "CloudHsmInternalException",
)<{
  readonly message?: string;
  readonly retryable?: boolean;
}> {}
export type CloudHsmObjectState = "READY" | "UPDATING" | "DEGRADED";
export declare class CloudHsmServiceException extends EffectData.TaggedError(
  "CloudHsmServiceException",
)<{
  readonly message?: string;
  readonly retryable?: boolean;
}> {}
export interface CreateHapgRequest {
  Label: string;
}
export interface CreateHapgResponse {
  HapgArn?: string;
}
export interface CreateHsmRequest {
  SubnetId: string;
  SshKey: string;
  EniIp?: string;
  IamRoleArn: string;
  ExternalId?: string;
  SubscriptionType: SubscriptionType;
  ClientToken?: string;
  SyslogIp?: string;
}
export interface CreateHsmResponse {
  HsmArn?: string;
}
export interface CreateLunaClientRequest {
  Label?: string;
  Certificate: string;
}
export interface CreateLunaClientResponse {
  ClientArn?: string;
}
export interface DeleteHapgRequest {
  HapgArn: string;
}
export interface DeleteHapgResponse {
  Status: string;
}
export interface DeleteHsmRequest {
  HsmArn: string;
}
export interface DeleteHsmResponse {
  Status: string;
}
export interface DeleteLunaClientRequest {
  ClientArn: string;
}
export interface DeleteLunaClientResponse {
  Status: string;
}
export interface DescribeHapgRequest {
  HapgArn: string;
}
export interface DescribeHapgResponse {
  HapgArn?: string;
  HapgSerial?: string;
  HsmsLastActionFailed?: Array<string>;
  HsmsPendingDeletion?: Array<string>;
  HsmsPendingRegistration?: Array<string>;
  Label?: string;
  LastModifiedTimestamp?: string;
  PartitionSerialList?: Array<string>;
  State?: CloudHsmObjectState;
}
export interface DescribeHsmRequest {
  HsmArn?: string;
  HsmSerialNumber?: string;
}
export interface DescribeHsmResponse {
  HsmArn?: string;
  Status?: HsmStatus;
  StatusDetails?: string;
  AvailabilityZone?: string;
  EniId?: string;
  EniIp?: string;
  SubscriptionType?: SubscriptionType;
  SubscriptionStartDate?: string;
  SubscriptionEndDate?: string;
  VpcId?: string;
  SubnetId?: string;
  IamRoleArn?: string;
  SerialNumber?: string;
  VendorName?: string;
  HsmType?: string;
  SoftwareVersion?: string;
  SshPublicKey?: string;
  SshKeyLastUpdated?: string;
  ServerCertUri?: string;
  ServerCertLastUpdated?: string;
  Partitions?: Array<string>;
}
export interface DescribeLunaClientRequest {
  ClientArn?: string;
  CertificateFingerprint?: string;
}
export interface DescribeLunaClientResponse {
  ClientArn?: string;
  Certificate?: string;
  CertificateFingerprint?: string;
  LastModifiedTimestamp?: string;
  Label?: string;
}
export type EniId = string;

export type ExternalId = string;

export interface GetConfigRequest {
  ClientArn: string;
  ClientVersion: ClientVersion;
  HapgList: Array<string>;
}
export interface GetConfigResponse {
  ConfigType?: string;
  ConfigFile?: string;
  ConfigCred?: string;
}
export type HapgArn = string;

export type HapgList = Array<string>;
export type HsmArn = string;

export type HsmList = Array<string>;
export type HsmSerialNumber = string;

export type HsmStatus =
  | "PENDING"
  | "RUNNING"
  | "UPDATING"
  | "SUSPENDED"
  | "TERMINATING"
  | "TERMINATED"
  | "DEGRADED";
export type IamRoleArn = string;

export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
  readonly retryable?: boolean;
}> {}
export type IpAddress = string;

export type Label = string;

export interface ListAvailableZonesRequest {}
export interface ListAvailableZonesResponse {
  AZList?: Array<string>;
}
export interface ListHapgsRequest {
  NextToken?: string;
}
export interface ListHapgsResponse {
  HapgList: Array<string>;
  NextToken?: string;
}
export interface ListHsmsRequest {
  NextToken?: string;
}
export interface ListHsmsResponse {
  HsmList?: Array<string>;
  NextToken?: string;
}
export interface ListLunaClientsRequest {
  NextToken?: string;
}
export interface ListLunaClientsResponse {
  ClientList: Array<string>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  TagList: Array<Tag>;
}
export interface ModifyHapgRequest {
  HapgArn: string;
  Label?: string;
  PartitionSerialList?: Array<string>;
}
export interface ModifyHapgResponse {
  HapgArn?: string;
}
export interface ModifyHsmRequest {
  HsmArn: string;
  SubnetId?: string;
  EniIp?: string;
  IamRoleArn?: string;
  ExternalId?: string;
  SyslogIp?: string;
}
export interface ModifyHsmResponse {
  HsmArn?: string;
}
export interface ModifyLunaClientRequest {
  ClientArn: string;
  Certificate: string;
}
export interface ModifyLunaClientResponse {
  ClientArn?: string;
}
export type PaginationToken = string;

export type PartitionArn = string;

export type PartitionList = Array<string>;
export type PartitionSerial = string;

export type PartitionSerialList = Array<string>;
export interface RemoveTagsFromResourceRequest {
  ResourceArn: string;
  TagKeyList: Array<string>;
}
export interface RemoveTagsFromResourceResponse {
  Status: string;
}
export type SshKey = string;

export type SubnetId = string;

export type SubscriptionType = "PRODUCTION";
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export type TagValue = string;

export type Timestamp = string;

export type VpcId = string;

export declare namespace AddTagsToResource {
  export type Input = AddTagsToResourceRequest;
  export type Output = AddTagsToResourceResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateHapg {
  export type Input = CreateHapgRequest;
  export type Output = CreateHapgResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateHsm {
  export type Input = CreateHsmRequest;
  export type Output = CreateHsmResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateLunaClient {
  export type Input = CreateLunaClientRequest;
  export type Output = CreateLunaClientResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DeleteHapg {
  export type Input = DeleteHapgRequest;
  export type Output = DeleteHapgResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DeleteHsm {
  export type Input = DeleteHsmRequest;
  export type Output = DeleteHsmResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DeleteLunaClient {
  export type Input = DeleteLunaClientRequest;
  export type Output = DeleteLunaClientResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeHapg {
  export type Input = DescribeHapgRequest;
  export type Output = DescribeHapgResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeHsm {
  export type Input = DescribeHsmRequest;
  export type Output = DescribeHsmResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeLunaClient {
  export type Input = DescribeLunaClientRequest;
  export type Output = DescribeLunaClientResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace GetConfig {
  export type Input = GetConfigRequest;
  export type Output = GetConfigResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListAvailableZones {
  export type Input = ListAvailableZonesRequest;
  export type Output = ListAvailableZonesResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListHapgs {
  export type Input = ListHapgsRequest;
  export type Output = ListHapgsResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListHsms {
  export type Input = ListHsmsRequest;
  export type Output = ListHsmsResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListLunaClients {
  export type Input = ListLunaClientsRequest;
  export type Output = ListLunaClientsResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ModifyHapg {
  export type Input = ModifyHapgRequest;
  export type Output = ModifyHapgResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ModifyHsm {
  export type Input = ModifyHsmRequest;
  export type Output = ModifyHsmResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ModifyLunaClient {
  export type Input = ModifyLunaClientRequest;
  export type Output = ModifyLunaClientResponse;
  export type Error = CloudHsmServiceException | CommonAwsError;
}

export declare namespace RemoveTagsFromResource {
  export type Input = RemoveTagsFromResourceRequest;
  export type Output = RemoveTagsFromResourceResponse;
  export type Error =
    | CloudHsmInternalException
    | CloudHsmServiceException
    | InvalidRequestException
    | CommonAwsError;
}
