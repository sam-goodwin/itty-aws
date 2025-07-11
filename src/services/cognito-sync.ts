import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSCognitoSyncService {
  bulkPublish(
    input: BulkPublishRequest,
  ): Effect.Effect<
    BulkPublishResponse,
    | AlreadyStreamedException
    | DuplicateRequestException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteDataset(
    input: DeleteDatasetRequest,
  ): Effect.Effect<
    DeleteDatasetResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeDataset(
    input: DescribeDatasetRequest,
  ): Effect.Effect<
    DescribeDatasetResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeIdentityPoolUsage(
    input: DescribeIdentityPoolUsageRequest,
  ): Effect.Effect<
    DescribeIdentityPoolUsageResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeIdentityUsage(
    input: DescribeIdentityUsageRequest,
  ): Effect.Effect<
    DescribeIdentityUsageResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getBulkPublishDetails(
    input: GetBulkPublishDetailsRequest,
  ): Effect.Effect<
    GetBulkPublishDetailsResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getCognitoEvents(
    input: GetCognitoEventsRequest,
  ): Effect.Effect<
    GetCognitoEventsResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getIdentityPoolConfiguration(
    input: GetIdentityPoolConfigurationRequest,
  ): Effect.Effect<
    GetIdentityPoolConfigurationResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listDatasets(
    input: ListDatasetsRequest,
  ): Effect.Effect<
    ListDatasetsResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listIdentityPoolUsage(
    input: ListIdentityPoolUsageRequest,
  ): Effect.Effect<
    ListIdentityPoolUsageResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listRecords(
    input: ListRecordsRequest,
  ): Effect.Effect<
    ListRecordsResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  registerDevice(
    input: RegisterDeviceRequest,
  ): Effect.Effect<
    RegisterDeviceResponse,
    | InternalErrorException
    | InvalidConfigurationException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  setCognitoEvents(
    input: SetCognitoEventsRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  setIdentityPoolConfiguration(
    input: SetIdentityPoolConfigurationRequest,
  ): Effect.Effect<
    SetIdentityPoolConfigurationResponse,
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  subscribeToDataset(
    input: SubscribeToDatasetRequest,
  ): Effect.Effect<
    SubscribeToDatasetResponse,
    | InternalErrorException
    | InvalidConfigurationException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  unsubscribeFromDataset(
    input: UnsubscribeFromDatasetRequest,
  ): Effect.Effect<
    UnsubscribeFromDatasetResponse,
    | InternalErrorException
    | InvalidConfigurationException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateRecords(
    input: UpdateRecordsRequest,
  ): Effect.Effect<
    UpdateRecordsResponse,
    | InternalErrorException
    | InvalidLambdaFunctionOutputException
    | InvalidParameterException
    | LambdaThrottledException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
}

export type CognitoSync = AWSCognitoSyncService;

export declare class AlreadyStreamedException extends EffectData.TaggedError(
  "AlreadyStreamedException",
)<{
  readonly message: string;
}> {}
export type ApplicationArn = string;

export type ApplicationArnList = Array<string>;
export type AssumeRoleArn = string;

export interface BulkPublishRequest {
  IdentityPoolId: string;
}
export interface BulkPublishResponse {
  IdentityPoolId?: string;
}
export type BulkPublishStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "FAILED"
  | "SUCCEEDED";
export type ClientContext = string;

export type CognitoEventType = string;

export interface CognitoStreams {
  StreamName?: string;
  RoleArn?: string;
  StreamingStatus?: StreamingStatus;
}
export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly message: string;
}> {}
export interface Dataset {
  IdentityId?: string;
  DatasetName?: string;
  CreationDate?: Date | string;
  LastModifiedDate?: Date | string;
  LastModifiedBy?: string;
  DataStorage?: number;
  NumRecords?: number;
}
export type DatasetList = Array<Dataset>;
export type DatasetName = string;

export interface DeleteDatasetRequest {
  IdentityPoolId: string;
  IdentityId: string;
  DatasetName: string;
}
export interface DeleteDatasetResponse {
  Dataset?: Dataset;
}
export interface DescribeDatasetRequest {
  IdentityPoolId: string;
  IdentityId: string;
  DatasetName: string;
}
export interface DescribeDatasetResponse {
  Dataset?: Dataset;
}
export interface DescribeIdentityPoolUsageRequest {
  IdentityPoolId: string;
}
export interface DescribeIdentityPoolUsageResponse {
  IdentityPoolUsage?: IdentityPoolUsage;
}
export interface DescribeIdentityUsageRequest {
  IdentityPoolId: string;
  IdentityId: string;
}
export interface DescribeIdentityUsageResponse {
  IdentityUsage?: IdentityUsage;
}
export type DeviceId = string;

export declare class DuplicateRequestException extends EffectData.TaggedError(
  "DuplicateRequestException",
)<{
  readonly message: string;
}> {}
export type Events = Record<string, string>;
export type ExceptionMessage = string;

export interface GetBulkPublishDetailsRequest {
  IdentityPoolId: string;
}
export interface GetBulkPublishDetailsResponse {
  IdentityPoolId?: string;
  BulkPublishStartTime?: Date | string;
  BulkPublishCompleteTime?: Date | string;
  BulkPublishStatus?: BulkPublishStatus;
  FailureMessage?: string;
}
export interface GetCognitoEventsRequest {
  IdentityPoolId: string;
}
export interface GetCognitoEventsResponse {
  Events?: Record<string, string>;
}
export interface GetIdentityPoolConfigurationRequest {
  IdentityPoolId: string;
}
export interface GetIdentityPoolConfigurationResponse {
  IdentityPoolId?: string;
  PushSync?: PushSync;
  CognitoStreams?: CognitoStreams;
}
export type IdentityId = string;

export type IdentityPoolId = string;

export interface IdentityPoolUsage {
  IdentityPoolId?: string;
  SyncSessionsCount?: number;
  DataStorage?: number;
  LastModifiedDate?: Date | string;
}
export type IdentityPoolUsageList = Array<IdentityPoolUsage>;
export interface IdentityUsage {
  IdentityId?: string;
  IdentityPoolId?: string;
  LastModifiedDate?: Date | string;
  DatasetCount?: number;
  DataStorage?: number;
}
export type Integer = number;

export type IntegerString = number;

export declare class InternalErrorException extends EffectData.TaggedError(
  "InternalErrorException",
)<{
  readonly message: string;
}> {}
export declare class InvalidConfigurationException extends EffectData.TaggedError(
  "InvalidConfigurationException",
)<{
  readonly message: string;
}> {}
export declare class InvalidLambdaFunctionOutputException extends EffectData.TaggedError(
  "InvalidLambdaFunctionOutputException",
)<{
  readonly message: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly message: string;
}> {}
export type LambdaFunctionArn = string;

export declare class LambdaThrottledException extends EffectData.TaggedError(
  "LambdaThrottledException",
)<{
  readonly message: string;
}> {}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message: string;
}> {}
export interface ListDatasetsRequest {
  IdentityPoolId: string;
  IdentityId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDatasetsResponse {
  Datasets?: Array<Dataset>;
  Count?: number;
  NextToken?: string;
}
export interface ListIdentityPoolUsageRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListIdentityPoolUsageResponse {
  IdentityPoolUsages?: Array<IdentityPoolUsage>;
  MaxResults?: number;
  Count?: number;
  NextToken?: string;
}
export interface ListRecordsRequest {
  IdentityPoolId: string;
  IdentityId: string;
  DatasetName: string;
  LastSyncCount?: number;
  NextToken?: string;
  MaxResults?: number;
  SyncSessionToken?: string;
}
export interface ListRecordsResponse {
  Records?: Array<Record>;
  NextToken?: string;
  Count?: number;
  DatasetSyncCount?: number;
  LastModifiedBy?: string;
  MergedDatasetNames?: Array<string>;
  DatasetExists?: boolean;
  DatasetDeletedAfterRequestedSyncCount?: boolean;
  SyncSessionToken?: string;
}
export type Long = number;

export type MergedDatasetNameList = Array<string>;
export declare class NotAuthorizedException extends EffectData.TaggedError(
  "NotAuthorizedException",
)<{
  readonly message: string;
}> {}
export type Operation = "replace" | "remove";
export type Platform = "APNS" | "APNS_SANDBOX" | "GCM" | "ADM";
export interface PushSync {
  ApplicationArns?: Array<string>;
  RoleArn?: string;
}
export type PushToken = string;

export interface Record {
  Key?: string;
  Value?: string;
  SyncCount?: number;
  LastModifiedDate?: Date | string;
  LastModifiedBy?: string;
  DeviceLastModifiedDate?: Date | string;
}
export type RecordKey = string;

export type RecordList = Array<Record>;
export interface RecordPatch {
  Op: Operation;
  Key: string;
  Value?: string;
  SyncCount: number;
  DeviceLastModifiedDate?: Date | string;
}
export type RecordPatchList = Array<RecordPatch>;
export type RecordValue = string;

export interface RegisterDeviceRequest {
  IdentityPoolId: string;
  IdentityId: string;
  Platform: Platform;
  Token: string;
}
export interface RegisterDeviceResponse {
  DeviceId?: string;
}
export declare class ResourceConflictException extends EffectData.TaggedError(
  "ResourceConflictException",
)<{
  readonly message: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export interface SetCognitoEventsRequest {
  IdentityPoolId: string;
  Events: Record<string, string>;
}
export interface SetIdentityPoolConfigurationRequest {
  IdentityPoolId: string;
  PushSync?: PushSync;
  CognitoStreams?: CognitoStreams;
}
export interface SetIdentityPoolConfigurationResponse {
  IdentityPoolId?: string;
  PushSync?: PushSync;
  CognitoStreams?: CognitoStreams;
}
export type StreamingStatus = "ENABLED" | "DISABLED";
export type StreamName = string;

export interface SubscribeToDatasetRequest {
  IdentityPoolId: string;
  IdentityId: string;
  DatasetName: string;
  DeviceId: string;
}
export interface SubscribeToDatasetResponse {}
export type SyncSessionToken = string;

export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly message: string;
}> {}
export interface UnsubscribeFromDatasetRequest {
  IdentityPoolId: string;
  IdentityId: string;
  DatasetName: string;
  DeviceId: string;
}
export interface UnsubscribeFromDatasetResponse {}
export interface UpdateRecordsRequest {
  IdentityPoolId: string;
  IdentityId: string;
  DatasetName: string;
  DeviceId?: string;
  RecordPatches?: Array<RecordPatch>;
  SyncSessionToken: string;
  ClientContext?: string;
}
export interface UpdateRecordsResponse {
  Records?: Array<Record>;
}
export declare namespace BulkPublish {
  export type Input = BulkPublishRequest;
  export type Output = BulkPublishResponse;
  export type Error =
    | AlreadyStreamedException
    | DuplicateRequestException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteDataset {
  export type Input = DeleteDatasetRequest;
  export type Output = DeleteDatasetResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeDataset {
  export type Input = DescribeDatasetRequest;
  export type Output = DescribeDatasetResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeIdentityPoolUsage {
  export type Input = DescribeIdentityPoolUsageRequest;
  export type Output = DescribeIdentityPoolUsageResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeIdentityUsage {
  export type Input = DescribeIdentityUsageRequest;
  export type Output = DescribeIdentityUsageResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetBulkPublishDetails {
  export type Input = GetBulkPublishDetailsRequest;
  export type Output = GetBulkPublishDetailsResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCognitoEvents {
  export type Input = GetCognitoEventsRequest;
  export type Output = GetCognitoEventsResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetIdentityPoolConfiguration {
  export type Input = GetIdentityPoolConfigurationRequest;
  export type Output = GetIdentityPoolConfigurationResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListDatasets {
  export type Input = ListDatasetsRequest;
  export type Output = ListDatasetsResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListIdentityPoolUsage {
  export type Input = ListIdentityPoolUsageRequest;
  export type Output = ListIdentityPoolUsageResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListRecords {
  export type Input = ListRecordsRequest;
  export type Output = ListRecordsResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace RegisterDevice {
  export type Input = RegisterDeviceRequest;
  export type Output = RegisterDeviceResponse;
  export type Error =
    | InternalErrorException
    | InvalidConfigurationException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace SetCognitoEvents {
  export type Input = SetCognitoEventsRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace SetIdentityPoolConfiguration {
  export type Input = SetIdentityPoolConfigurationRequest;
  export type Output = SetIdentityPoolConfigurationResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace SubscribeToDataset {
  export type Input = SubscribeToDatasetRequest;
  export type Output = SubscribeToDatasetResponse;
  export type Error =
    | InternalErrorException
    | InvalidConfigurationException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UnsubscribeFromDataset {
  export type Input = UnsubscribeFromDatasetRequest;
  export type Output = UnsubscribeFromDatasetResponse;
  export type Error =
    | InternalErrorException
    | InvalidConfigurationException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateRecords {
  export type Input = UpdateRecordsRequest;
  export type Output = UpdateRecordsResponse;
  export type Error =
    | InternalErrorException
    | InvalidLambdaFunctionOutputException
    | InvalidParameterException
    | LambdaThrottledException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}
