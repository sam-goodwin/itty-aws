import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface RUM {
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  putRumEvents(
    input: PutRumEventsRequest,
  ): Effect.Effect<
    PutRumEventsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
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
}

export type Rum = RUM;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type Alias = string;

export interface AppMonitor {
  Name?: string;
  Domain?: string;
  DomainList?: Array<string>;
  Id?: string;
  Created?: string;
  LastModified?: string;
  Tags?: Record<string, string>;
  State?: string;
  AppMonitorConfiguration?: AppMonitorConfiguration;
  DataStorage?: DataStorage;
  CustomEvents?: CustomEvents;
  DeobfuscationConfiguration?: DeobfuscationConfiguration;
}
export interface AppMonitorConfiguration {
  IdentityPoolId?: string;
  ExcludedPages?: Array<string>;
  IncludedPages?: Array<string>;
  FavoritePages?: Array<string>;
  SessionSampleRate?: number;
  GuestRoleArn?: string;
  AllowCookies?: boolean;
  Telemetries?: Array<string>;
  EnableXRay?: boolean;
}
export interface AppMonitorDetails {
  name?: string;
  id?: string;
  version?: string;
}
export type AppMonitorDomain = string;

export type AppMonitorDomainList = Array<string>;
export type AppMonitorId = string;

export type AppMonitorName = string;

export interface AppMonitorSummary {
  Name?: string;
  Id?: string;
  Created?: string;
  LastModified?: string;
  State?: string;
}
export type AppMonitorSummaryList = Array<AppMonitorSummary>;
export type Arn = string;

export interface BatchCreateRumMetricDefinitionsError {
  MetricDefinition: MetricDefinitionRequest;
  ErrorCode: string;
  ErrorMessage: string;
}
export type BatchCreateRumMetricDefinitionsErrors =
  Array<BatchCreateRumMetricDefinitionsError>;
export interface BatchCreateRumMetricDefinitionsRequest {
  AppMonitorName: string;
  Destination: string;
  DestinationArn?: string;
  MetricDefinitions: Array<MetricDefinitionRequest>;
}
export interface BatchCreateRumMetricDefinitionsResponse {
  Errors: Array<BatchCreateRumMetricDefinitionsError>;
  MetricDefinitions?: Array<MetricDefinition>;
}
export interface BatchDeleteRumMetricDefinitionsError {
  MetricDefinitionId: string;
  ErrorCode: string;
  ErrorMessage: string;
}
export type BatchDeleteRumMetricDefinitionsErrors =
  Array<BatchDeleteRumMetricDefinitionsError>;
export interface BatchDeleteRumMetricDefinitionsRequest {
  AppMonitorName: string;
  Destination: string;
  DestinationArn?: string;
  MetricDefinitionIds: Array<string>;
}
export interface BatchDeleteRumMetricDefinitionsResponse {
  Errors: Array<BatchDeleteRumMetricDefinitionsError>;
  MetricDefinitionIds?: Array<string>;
}
export interface BatchGetRumMetricDefinitionsRequest {
  AppMonitorName: string;
  Destination: string;
  DestinationArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface BatchGetRumMetricDefinitionsResponse {
  MetricDefinitions?: Array<MetricDefinition>;
  NextToken?: string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceName: string;
  readonly resourceType?: string;
}> {}
export interface CreateAppMonitorRequest {
  Name: string;
  Domain?: string;
  DomainList?: Array<string>;
  Tags?: Record<string, string>;
  AppMonitorConfiguration?: AppMonitorConfiguration;
  CwLogEnabled?: boolean;
  CustomEvents?: CustomEvents;
  DeobfuscationConfiguration?: DeobfuscationConfiguration;
}
export interface CreateAppMonitorResponse {
  Id?: string;
}
export interface CustomEvents {
  Status?: string;
}
export type CustomEventsStatus = string;

export interface CwLog {
  CwLogEnabled?: boolean;
  CwLogGroup?: string;
}
export interface DataStorage {
  CwLog?: CwLog;
}
export interface DeleteAppMonitorRequest {
  Name: string;
}
export interface DeleteAppMonitorResponse {}
export interface DeleteResourcePolicyRequest {
  Name: string;
  PolicyRevisionId?: string;
}
export interface DeleteResourcePolicyResponse {
  PolicyRevisionId?: string;
}
export interface DeleteRumMetricsDestinationRequest {
  AppMonitorName: string;
  Destination: string;
  DestinationArn?: string;
}
export interface DeleteRumMetricsDestinationResponse {}
export interface DeobfuscationConfiguration {
  JavaScriptSourceMaps?: JavaScriptSourceMaps;
}
export type DeobfuscationS3Uri = string;

export type DeobfuscationStatus = string;

export type DestinationArn = string;

export type DimensionKey = string;

export type DimensionKeysMap = Record<string, string>;
export type DimensionName = string;

export type EventData = string;

export type EventDataList = Array<string>;
export type EventPattern = string;

export type FavoritePages = Array<string>;
export interface GetAppMonitorDataRequest {
  Name: string;
  TimeRange: TimeRange;
  Filters?: Array<QueryFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetAppMonitorDataResponse {
  Events?: Array<string>;
  NextToken?: string;
}
export interface GetAppMonitorRequest {
  Name: string;
}
export interface GetAppMonitorResponse {
  AppMonitor?: AppMonitor;
}
export interface GetResourcePolicyRequest {
  Name: string;
}
export interface GetResourcePolicyResponse {
  PolicyDocument?: string;
  PolicyRevisionId?: string;
}
export type IamRoleArn = string;

export type IdentityPoolId = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export declare class InvalidPolicyRevisionIdException extends EffectData.TaggedError(
  "InvalidPolicyRevisionIdException",
)<{
  readonly message: string;
}> {}
export type ISOTimestampString = string;

export interface JavaScriptSourceMaps {
  Status: string;
  S3Uri?: string;
}
export type JsonValue = string;

export interface ListAppMonitorsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAppMonitorsResponse {
  NextToken?: string;
  AppMonitorSummaries?: Array<AppMonitorSummary>;
}
export interface ListRumMetricsDestinationsRequest {
  AppMonitorName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListRumMetricsDestinationsResponse {
  Destinations?: Array<MetricDestinationSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export declare class MalformedPolicyDocumentException extends EffectData.TaggedError(
  "MalformedPolicyDocumentException",
)<{
  readonly message: string;
}> {}
export type MaxQueryResults = number;

export type MaxResultsInteger = number;

export interface MetricDefinition {
  MetricDefinitionId: string;
  Name: string;
  ValueKey?: string;
  UnitLabel?: string;
  DimensionKeys?: Record<string, string>;
  EventPattern?: string;
  Namespace?: string;
}
export type MetricDefinitionId = string;

export type MetricDefinitionIds = Array<string>;
export interface MetricDefinitionRequest {
  Name: string;
  ValueKey?: string;
  UnitLabel?: string;
  DimensionKeys?: Record<string, string>;
  EventPattern?: string;
  Namespace?: string;
}
export type MetricDefinitions = Array<MetricDefinition>;
export type MetricDefinitionsRequest = Array<MetricDefinitionRequest>;
export type MetricDestination = string;

export interface MetricDestinationSummary {
  Destination?: string;
  DestinationArn?: string;
  IamRoleArn?: string;
}
export type MetricDestinationSummaryList = Array<MetricDestinationSummary>;
export type MetricName = string;

export type Namespace = string;

export type Pages = Array<string>;
export declare class PolicyNotFoundException extends EffectData.TaggedError(
  "PolicyNotFoundException",
)<{
  readonly message: string;
}> {}
export type PolicyRevisionId = string;

export declare class PolicySizeLimitExceededException extends EffectData.TaggedError(
  "PolicySizeLimitExceededException",
)<{
  readonly message: string;
}> {}
export interface PutResourcePolicyRequest {
  Name: string;
  PolicyDocument: string;
  PolicyRevisionId?: string;
}
export interface PutResourcePolicyResponse {
  PolicyDocument?: string;
  PolicyRevisionId?: string;
}
export interface PutRumEventsRequest {
  Id: string;
  BatchId: string;
  AppMonitorDetails: AppMonitorDetails;
  UserDetails: UserDetails;
  RumEvents: Array<RumEvent>;
  Alias?: string;
}
export interface PutRumEventsResponse {}
export interface PutRumMetricsDestinationRequest {
  AppMonitorName: string;
  Destination: string;
  DestinationArn?: string;
  IamRoleArn?: string;
}
export interface PutRumMetricsDestinationResponse {}
export interface QueryFilter {
  Name?: string;
  Values?: Array<string>;
}
export type QueryFilterKey = string;

export type QueryFilters = Array<QueryFilter>;
export type QueryFilterValue = string;

export type QueryFilterValueList = Array<string>;
export type QueryTimestamp = number;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceName: string;
  readonly resourceType?: string;
}> {}
export interface RumEvent {
  id: string;
  timestamp: Date | string;
  type: string;
  metadata?: string;
  details: string;
}
export type RumEventList = Array<RumEvent>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export type SessionSampleRate = number;

export type StateEnum = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type Telemetries = Array<string>;
export type Telemetry = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface TimeRange {
  After: number;
  Before?: number;
}
export type Token = string;

export type UnitLabel = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAppMonitorRequest {
  Name: string;
  Domain?: string;
  DomainList?: Array<string>;
  AppMonitorConfiguration?: AppMonitorConfiguration;
  CwLogEnabled?: boolean;
  CustomEvents?: CustomEvents;
  DeobfuscationConfiguration?: DeobfuscationConfiguration;
}
export interface UpdateAppMonitorResponse {}
export interface UpdateRumMetricDefinitionRequest {
  AppMonitorName: string;
  Destination: string;
  DestinationArn?: string;
  MetricDefinition: MetricDefinitionRequest;
  MetricDefinitionId: string;
}
export interface UpdateRumMetricDefinitionResponse {}
export type Url = string;

export interface UserDetails {
  userId?: string;
  sessionId?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export type ValueKey = string;

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutRumEvents {
  export type Input = PutRumEventsRequest;
  export type Output = PutRumEventsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
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
