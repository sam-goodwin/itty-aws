import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonAppIntegrationService {
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    CreateApplicationResponse,
    | AccessDeniedException
    | DuplicateResourceException
    | InternalServiceError
    | InvalidRequestException
    | ResourceQuotaExceededException
    | ThrottlingException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  createDataIntegration(
    input: CreateDataIntegrationRequest,
  ): Effect.Effect<
    CreateDataIntegrationResponse,
    | AccessDeniedException
    | DuplicateResourceException
    | InternalServiceError
    | InvalidRequestException
    | ResourceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createDataIntegrationAssociation(
    input: CreateDataIntegrationAssociationRequest,
  ): Effect.Effect<
    CreateDataIntegrationAssociationResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ResourceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createEventIntegration(
    input: CreateEventIntegrationRequest,
  ): Effect.Effect<
    CreateEventIntegrationResponse,
    | AccessDeniedException
    | DuplicateResourceException
    | InternalServiceError
    | InvalidRequestException
    | ResourceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    DeleteApplicationResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDataIntegration(
    input: DeleteDataIntegrationRequest,
  ): Effect.Effect<
    DeleteDataIntegrationResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteEventIntegration(
    input: DeleteEventIntegrationRequest,
  ): Effect.Effect<
    DeleteEventIntegrationResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getApplication(
    input: GetApplicationRequest,
  ): Effect.Effect<
    GetApplicationResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getDataIntegration(
    input: GetDataIntegrationRequest,
  ): Effect.Effect<
    GetDataIntegrationResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getEventIntegration(
    input: GetEventIntegrationRequest,
  ): Effect.Effect<
    GetEventIntegrationResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listApplicationAssociations(
    input: ListApplicationAssociationsRequest,
  ): Effect.Effect<
    ListApplicationAssociationsResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsRequest,
  ): Effect.Effect<
    ListApplicationsResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listDataIntegrationAssociations(
    input: ListDataIntegrationAssociationsRequest,
  ): Effect.Effect<
    ListDataIntegrationAssociationsResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listDataIntegrations(
    input: ListDataIntegrationsRequest,
  ): Effect.Effect<
    ListDataIntegrationsResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listEventIntegrationAssociations(
    input: ListEventIntegrationAssociationsRequest,
  ): Effect.Effect<
    ListEventIntegrationAssociationsResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listEventIntegrations(
    input: ListEventIntegrationsRequest,
  ): Effect.Effect<
    ListEventIntegrationsResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    UpdateApplicationResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  updateDataIntegration(
    input: UpdateDataIntegrationRequest,
  ): Effect.Effect<
    UpdateDataIntegrationResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateDataIntegrationAssociation(
    input: UpdateDataIntegrationAssociationRequest,
  ): Effect.Effect<
    UpdateDataIntegrationAssociationResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateEventIntegration(
    input: UpdateEventIntegrationRequest,
  ): Effect.Effect<
    UpdateEventIntegrationResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
}

export type Appintegrations = AmazonAppIntegrationService;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type ApplicationApprovedOrigins = Array<string>;
export type ApplicationAssociationsList = Array<ApplicationAssociationSummary>;
export interface ApplicationAssociationSummary {
  ApplicationAssociationArn?: string;
  ApplicationArn?: string;
  ClientId?: string;
}
export type ApplicationName = string;

export type ApplicationNamespace = string;

export type ApplicationsList = Array<ApplicationSummary>;
export interface ApplicationSourceConfig {
  ExternalUrlConfig?: ExternalUrlConfig;
}
export interface ApplicationSummary {
  Arn?: string;
  Id?: string;
  Name?: string;
  Namespace?: string;
  CreatedTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export type ApplicationTrustedSource = string;

export type Arn = string;

export type ArnOrUUID = string;

export type ClientAssociationMetadata = Record<string, string>;
export type ClientId = string;

export interface CreateApplicationRequest {
  Name: string;
  Namespace: string;
  Description?: string;
  ApplicationSourceConfig: ApplicationSourceConfig;
  Subscriptions?: Array<Subscription>;
  Publications?: Array<Publication>;
  ClientToken?: string;
  Tags?: Record<string, string>;
  Permissions?: Array<string>;
}
export interface CreateApplicationResponse {
  Arn?: string;
  Id?: string;
}
export interface CreateDataIntegrationAssociationRequest {
  DataIntegrationIdentifier: string;
  ClientId?: string;
  ObjectConfiguration?: Record<string, Record<string, Array<string>>>;
  DestinationURI?: string;
  ClientAssociationMetadata?: Record<string, string>;
  ClientToken?: string;
  ExecutionConfiguration?: ExecutionConfiguration;
}
export interface CreateDataIntegrationAssociationResponse {
  DataIntegrationAssociationId?: string;
  DataIntegrationArn?: string;
}
export interface CreateDataIntegrationRequest {
  Name: string;
  Description?: string;
  KmsKey: string;
  SourceURI?: string;
  ScheduleConfig?: ScheduleConfiguration;
  Tags?: Record<string, string>;
  ClientToken?: string;
  FileConfiguration?: FileConfiguration;
  ObjectConfiguration?: Record<string, Record<string, Array<string>>>;
}
export interface CreateDataIntegrationResponse {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  KmsKey?: string;
  SourceURI?: string;
  ScheduleConfiguration?: ScheduleConfiguration;
  Tags?: Record<string, string>;
  ClientToken?: string;
  FileConfiguration?: FileConfiguration;
  ObjectConfiguration?: Record<string, Record<string, Array<string>>>;
}
export interface CreateEventIntegrationRequest {
  Name: string;
  Description?: string;
  EventFilter: EventFilter;
  EventBridgeBus: string;
  ClientToken?: string;
  Tags?: Record<string, string>;
}
export interface CreateEventIntegrationResponse {
  EventIntegrationArn?: string;
}
export type DataIntegrationAssociationsList =
  Array<DataIntegrationAssociationSummary>;
export interface DataIntegrationAssociationSummary {
  DataIntegrationAssociationArn?: string;
  DataIntegrationArn?: string;
  ClientId?: string;
  DestinationURI?: string;
  LastExecutionStatus?: LastExecutionStatus;
  ExecutionConfiguration?: ExecutionConfiguration;
}
export type DataIntegrationsList = Array<DataIntegrationSummary>;
export interface DataIntegrationSummary {
  Arn?: string;
  Name?: string;
  SourceURI?: string;
}
export interface DeleteApplicationRequest {
  Arn: string;
}
export interface DeleteApplicationResponse {}
export interface DeleteDataIntegrationRequest {
  DataIntegrationIdentifier: string;
}
export interface DeleteDataIntegrationResponse {}
export interface DeleteEventIntegrationRequest {
  Name: string;
}
export interface DeleteEventIntegrationResponse {}
export type Description = string;

export type DestinationURI = string;

export declare class DuplicateResourceException extends EffectData.TaggedError(
  "DuplicateResourceException",
)<{
  readonly Message?: string;
}> {}
export type EventBridgeBus = string;

export type EventBridgeRuleName = string;

export type EventDefinitionSchema = string;

export interface EventFilter {
  Source: string;
}
export interface EventIntegration {
  EventIntegrationArn?: string;
  Name?: string;
  Description?: string;
  EventFilter?: EventFilter;
  EventBridgeBus?: string;
  Tags?: Record<string, string>;
}
export interface EventIntegrationAssociation {
  EventIntegrationAssociationArn?: string;
  EventIntegrationAssociationId?: string;
  EventIntegrationName?: string;
  ClientId?: string;
  EventBridgeRuleName?: string;
  ClientAssociationMetadata?: Record<string, string>;
}
export type EventIntegrationAssociationsList =
  Array<EventIntegrationAssociation>;
export type EventIntegrationsList = Array<EventIntegration>;
export type EventName = string;

export interface ExecutionConfiguration {
  ExecutionMode: ExecutionMode;
  OnDemandConfiguration?: OnDemandConfiguration;
  ScheduleConfiguration?: ScheduleConfiguration;
}
export type ExecutionMode = "ON_DEMAND" | "SCHEDULED";
export type ExecutionStatus = "COMPLETED" | "IN_PROGRESS" | "FAILED";
export interface ExternalUrlConfig {
  AccessUrl: string;
  ApprovedOrigins?: Array<string>;
}
export type Fields = string;

export type FieldsList = Array<string>;
export type FieldsMap = Record<string, Array<string>>;
export interface FileConfiguration {
  Folders: Array<string>;
  Filters?: Record<string, Array<string>>;
}
export type FolderList = Array<string>;
export interface GetApplicationRequest {
  Arn: string;
}
export interface GetApplicationResponse {
  Arn?: string;
  Id?: string;
  Name?: string;
  Namespace?: string;
  Description?: string;
  ApplicationSourceConfig?: ApplicationSourceConfig;
  Subscriptions?: Array<Subscription>;
  Publications?: Array<Publication>;
  CreatedTime?: Date | string;
  LastModifiedTime?: Date | string;
  Tags?: Record<string, string>;
  Permissions?: Array<string>;
}
export interface GetDataIntegrationRequest {
  Identifier: string;
}
export interface GetDataIntegrationResponse {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  KmsKey?: string;
  SourceURI?: string;
  ScheduleConfiguration?: ScheduleConfiguration;
  Tags?: Record<string, string>;
  FileConfiguration?: FileConfiguration;
  ObjectConfiguration?: Record<string, Record<string, Array<string>>>;
}
export interface GetEventIntegrationRequest {
  Name: string;
}
export interface GetEventIntegrationResponse {
  Name?: string;
  Description?: string;
  EventIntegrationArn?: string;
  EventBridgeBus?: string;
  EventFilter?: EventFilter;
  Tags?: Record<string, string>;
}
export type IdempotencyToken = string;

export type Identifier = string;

export declare class InternalServiceError extends EffectData.TaggedError(
  "InternalServiceError",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export interface LastExecutionStatus {
  ExecutionStatus?: ExecutionStatus;
  StatusMessage?: string;
}
export interface ListApplicationAssociationsRequest {
  ApplicationId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListApplicationAssociationsResponse {
  ApplicationAssociations?: Array<ApplicationAssociationSummary>;
  NextToken?: string;
}
export interface ListApplicationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListApplicationsResponse {
  Applications?: Array<ApplicationSummary>;
  NextToken?: string;
}
export interface ListDataIntegrationAssociationsRequest {
  DataIntegrationIdentifier: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDataIntegrationAssociationsResponse {
  DataIntegrationAssociations?: Array<DataIntegrationAssociationSummary>;
  NextToken?: string;
}
export interface ListDataIntegrationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDataIntegrationsResponse {
  DataIntegrations?: Array<DataIntegrationSummary>;
  NextToken?: string;
}
export interface ListEventIntegrationAssociationsRequest {
  EventIntegrationName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEventIntegrationAssociationsResponse {
  EventIntegrationAssociations?: Array<EventIntegrationAssociation>;
  NextToken?: string;
}
export interface ListEventIntegrationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEventIntegrationsResponse {
  EventIntegrations?: Array<EventIntegration>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type MaxResults = number;

export type Message = string;

export type Name = string;

export type NextToken = string;

export type NonBlankLongString = string;

export type NonBlankString = string;

export type Object = string;

export type ObjectConfiguration = Record<string, Record<string, Array<string>>>;
export interface OnDemandConfiguration {
  StartTime: string;
  EndTime?: string;
}
export type Permission = string;

export type PermissionList = Array<string>;
export interface Publication {
  Event: string;
  Schema: string;
  Description?: string;
}
export type PublicationList = Array<Publication>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceQuotaExceededException extends EffectData.TaggedError(
  "ResourceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ScheduleConfiguration {
  FirstExecutionFrom?: string;
  Object?: string;
  ScheduleExpression: string;
}
export type Source = string;

export type SourceURI = string;

export interface Subscription {
  Event: string;
  Description?: string;
}
export type SubscriptionList = Array<Subscription>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type Timestamp = Date | string;

export declare class UnsupportedOperationException extends EffectData.TaggedError(
  "UnsupportedOperationException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateApplicationRequest {
  Arn: string;
  Name?: string;
  Description?: string;
  ApplicationSourceConfig?: ApplicationSourceConfig;
  Subscriptions?: Array<Subscription>;
  Publications?: Array<Publication>;
  Permissions?: Array<string>;
}
export interface UpdateApplicationResponse {}
export interface UpdateDataIntegrationAssociationRequest {
  DataIntegrationIdentifier: string;
  DataIntegrationAssociationIdentifier: string;
  ExecutionConfiguration: ExecutionConfiguration;
}
export interface UpdateDataIntegrationAssociationResponse {}
export interface UpdateDataIntegrationRequest {
  Identifier: string;
  Name?: string;
  Description?: string;
}
export interface UpdateDataIntegrationResponse {}
export interface UpdateEventIntegrationRequest {
  Name: string;
  Description?: string;
}
export interface UpdateEventIntegrationResponse {}
export type URL = string;

export type UUID = string;

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = CreateApplicationResponse;
  export type Error =
    | AccessDeniedException
    | DuplicateResourceException
    | InternalServiceError
    | InvalidRequestException
    | ResourceQuotaExceededException
    | ThrottlingException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CreateDataIntegration {
  export type Input = CreateDataIntegrationRequest;
  export type Output = CreateDataIntegrationResponse;
  export type Error =
    | AccessDeniedException
    | DuplicateResourceException
    | InternalServiceError
    | InvalidRequestException
    | ResourceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDataIntegrationAssociation {
  export type Input = CreateDataIntegrationAssociationRequest;
  export type Output = CreateDataIntegrationAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ResourceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateEventIntegration {
  export type Input = CreateEventIntegrationRequest;
  export type Output = CreateEventIntegrationResponse;
  export type Error =
    | AccessDeniedException
    | DuplicateResourceException
    | InternalServiceError
    | InvalidRequestException
    | ResourceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationRequest;
  export type Output = DeleteApplicationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDataIntegration {
  export type Input = DeleteDataIntegrationRequest;
  export type Output = DeleteDataIntegrationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteEventIntegration {
  export type Input = DeleteEventIntegrationRequest;
  export type Output = DeleteEventIntegrationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetApplication {
  export type Input = GetApplicationRequest;
  export type Output = GetApplicationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetDataIntegration {
  export type Input = GetDataIntegrationRequest;
  export type Output = GetDataIntegrationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetEventIntegration {
  export type Input = GetEventIntegrationRequest;
  export type Output = GetEventIntegrationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListApplicationAssociations {
  export type Input = ListApplicationAssociationsRequest;
  export type Output = ListApplicationAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsRequest;
  export type Output = ListApplicationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDataIntegrationAssociations {
  export type Input = ListDataIntegrationAssociationsRequest;
  export type Output = ListDataIntegrationAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDataIntegrations {
  export type Input = ListDataIntegrationsRequest;
  export type Output = ListDataIntegrationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListEventIntegrationAssociations {
  export type Input = ListEventIntegrationAssociationsRequest;
  export type Output = ListEventIntegrationAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListEventIntegrations {
  export type Input = ListEventIntegrationsRequest;
  export type Output = ListEventIntegrationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
  export type Output = UpdateApplicationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace UpdateDataIntegration {
  export type Input = UpdateDataIntegrationRequest;
  export type Output = UpdateDataIntegrationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDataIntegrationAssociation {
  export type Input = UpdateDataIntegrationAssociationRequest;
  export type Output = UpdateDataIntegrationAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateEventIntegration {
  export type Input = UpdateEventIntegrationRequest;
  export type Output = UpdateEventIntegrationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}
