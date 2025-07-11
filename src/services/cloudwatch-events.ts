import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSEvents {
  activateEventSource(
    input: ActivateEventSourceRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InternalException
    | InvalidStateException
    | OperationDisabledException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  cancelReplay(
    input: CancelReplayRequest,
  ): Effect.Effect<
    CancelReplayResponse,
    | ConcurrentModificationException
    | IllegalStatusException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createApiDestination(
    input: CreateApiDestinationRequest,
  ): Effect.Effect<
    CreateApiDestinationResponse,
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createArchive(
    input: CreateArchiveRequest,
  ): Effect.Effect<
    CreateArchiveResponse,
    | ConcurrentModificationException
    | InternalException
    | InvalidEventPatternException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createConnection(
    input: CreateConnectionRequest,
  ): Effect.Effect<
    CreateConnectionResponse,
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | CommonAwsError
  >;
  createEventBus(
    input: CreateEventBusRequest,
  ): Effect.Effect<
    CreateEventBusResponse,
    | ConcurrentModificationException
    | InternalException
    | InvalidStateException
    | LimitExceededException
    | OperationDisabledException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createPartnerEventSource(
    input: CreatePartnerEventSourceRequest,
  ): Effect.Effect<
    CreatePartnerEventSourceResponse,
    | ConcurrentModificationException
    | InternalException
    | LimitExceededException
    | OperationDisabledException
    | ResourceAlreadyExistsException
    | CommonAwsError
  >;
  deactivateEventSource(
    input: DeactivateEventSourceRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InternalException
    | InvalidStateException
    | OperationDisabledException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deauthorizeConnection(
    input: DeauthorizeConnectionRequest,
  ): Effect.Effect<
    DeauthorizeConnectionResponse,
    | ConcurrentModificationException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteApiDestination(
    input: DeleteApiDestinationRequest,
  ): Effect.Effect<
    DeleteApiDestinationResponse,
    | ConcurrentModificationException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteArchive(
    input: DeleteArchiveRequest,
  ): Effect.Effect<
    DeleteArchiveResponse,
    | ConcurrentModificationException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteConnection(
    input: DeleteConnectionRequest,
  ): Effect.Effect<
    DeleteConnectionResponse,
    | ConcurrentModificationException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteEventBus(
    input: DeleteEventBusRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InternalException | CommonAwsError
  >;
  deletePartnerEventSource(
    input: DeletePartnerEventSourceRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InternalException
    | OperationDisabledException
    | CommonAwsError
  >;
  deleteRule(
    input: DeleteRuleRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeApiDestination(
    input: DescribeApiDestinationRequest,
  ): Effect.Effect<
    DescribeApiDestinationResponse,
    InternalException | ResourceNotFoundException | CommonAwsError
  >;
  describeArchive(
    input: DescribeArchiveRequest,
  ): Effect.Effect<
    DescribeArchiveResponse,
    | InternalException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeConnection(
    input: DescribeConnectionRequest,
  ): Effect.Effect<
    DescribeConnectionResponse,
    InternalException | ResourceNotFoundException | CommonAwsError
  >;
  describeEventBus(
    input: DescribeEventBusRequest,
  ): Effect.Effect<
    DescribeEventBusResponse,
    InternalException | ResourceNotFoundException | CommonAwsError
  >;
  describeEventSource(
    input: DescribeEventSourceRequest,
  ): Effect.Effect<
    DescribeEventSourceResponse,
    | InternalException
    | OperationDisabledException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describePartnerEventSource(
    input: DescribePartnerEventSourceRequest,
  ): Effect.Effect<
    DescribePartnerEventSourceResponse,
    | InternalException
    | OperationDisabledException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeReplay(
    input: DescribeReplayRequest,
  ): Effect.Effect<
    DescribeReplayResponse,
    InternalException | ResourceNotFoundException | CommonAwsError
  >;
  describeRule(
    input: DescribeRuleRequest,
  ): Effect.Effect<
    DescribeRuleResponse,
    InternalException | ResourceNotFoundException | CommonAwsError
  >;
  disableRule(
    input: DisableRuleRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  enableRule(
    input: EnableRuleRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listApiDestinations(
    input: ListApiDestinationsRequest,
  ): Effect.Effect<
    ListApiDestinationsResponse,
    InternalException | CommonAwsError
  >;
  listArchives(
    input: ListArchivesRequest,
  ): Effect.Effect<
    ListArchivesResponse,
    InternalException | ResourceNotFoundException | CommonAwsError
  >;
  listConnections(
    input: ListConnectionsRequest,
  ): Effect.Effect<ListConnectionsResponse, InternalException | CommonAwsError>;
  listEventBuses(
    input: ListEventBusesRequest,
  ): Effect.Effect<ListEventBusesResponse, InternalException | CommonAwsError>;
  listEventSources(
    input: ListEventSourcesRequest,
  ): Effect.Effect<
    ListEventSourcesResponse,
    InternalException | OperationDisabledException | CommonAwsError
  >;
  listPartnerEventSourceAccounts(
    input: ListPartnerEventSourceAccountsRequest,
  ): Effect.Effect<
    ListPartnerEventSourceAccountsResponse,
    | InternalException
    | OperationDisabledException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listPartnerEventSources(
    input: ListPartnerEventSourcesRequest,
  ): Effect.Effect<
    ListPartnerEventSourcesResponse,
    InternalException | OperationDisabledException | CommonAwsError
  >;
  listReplays(
    input: ListReplaysRequest,
  ): Effect.Effect<ListReplaysResponse, InternalException | CommonAwsError>;
  listRuleNamesByTarget(
    input: ListRuleNamesByTargetRequest,
  ): Effect.Effect<
    ListRuleNamesByTargetResponse,
    InternalException | ResourceNotFoundException | CommonAwsError
  >;
  listRules(
    input: ListRulesRequest,
  ): Effect.Effect<
    ListRulesResponse,
    InternalException | ResourceNotFoundException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InternalException | ResourceNotFoundException | CommonAwsError
  >;
  listTargetsByRule(
    input: ListTargetsByRuleRequest,
  ): Effect.Effect<
    ListTargetsByRuleResponse,
    InternalException | ResourceNotFoundException | CommonAwsError
  >;
  putEvents(
    input: PutEventsRequest,
  ): Effect.Effect<PutEventsResponse, InternalException | CommonAwsError>;
  putPartnerEvents(
    input: PutPartnerEventsRequest,
  ): Effect.Effect<
    PutPartnerEventsResponse,
    InternalException | OperationDisabledException | CommonAwsError
  >;
  putPermission(
    input: PutPermissionRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InternalException
    | OperationDisabledException
    | PolicyLengthExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putRule(
    input: PutRuleRequest,
  ): Effect.Effect<
    PutRuleResponse,
    | ConcurrentModificationException
    | InternalException
    | InvalidEventPatternException
    | LimitExceededException
    | ManagedRuleException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putTargets(
    input: PutTargetsRequest,
  ): Effect.Effect<
    PutTargetsResponse,
    | ConcurrentModificationException
    | InternalException
    | LimitExceededException
    | ManagedRuleException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  removePermission(
    input: RemovePermissionRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InternalException
    | OperationDisabledException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  removeTargets(
    input: RemoveTargetsRequest,
  ): Effect.Effect<
    RemoveTargetsResponse,
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startReplay(
    input: StartReplayRequest,
  ): Effect.Effect<
    StartReplayResponse,
    | InternalException
    | InvalidEventPatternException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  testEventPattern(
    input: TestEventPatternRequest,
  ): Effect.Effect<
    TestEventPatternResponse,
    InternalException | InvalidEventPatternException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateApiDestination(
    input: UpdateApiDestinationRequest,
  ): Effect.Effect<
    UpdateApiDestinationResponse,
    | ConcurrentModificationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateArchive(
    input: UpdateArchiveRequest,
  ): Effect.Effect<
    UpdateArchiveResponse,
    | ConcurrentModificationException
    | InternalException
    | InvalidEventPatternException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateConnection(
    input: UpdateConnectionRequest,
  ): Effect.Effect<
    UpdateConnectionResponse,
    | ConcurrentModificationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export type CloudwatchEvents = AWSEvents;

export type AccountId = string;

export type Action = string;

export interface ActivateEventSourceRequest {
  Name: string;
}
export interface ApiDestination {
  ApiDestinationArn?: string;
  Name?: string;
  ApiDestinationState?: ApiDestinationState;
  ConnectionArn?: string;
  InvocationEndpoint?: string;
  HttpMethod?: ApiDestinationHttpMethod;
  InvocationRateLimitPerSecond?: number;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export type ApiDestinationArn = string;

export type ApiDestinationDescription = string;

export type ApiDestinationHttpMethod =
  | "POST"
  | "GET"
  | "HEAD"
  | "OPTIONS"
  | "PUT"
  | "PATCH"
  | "DELETE";
export type ApiDestinationInvocationRateLimitPerSecond = number;

export type ApiDestinationName = string;

export type ApiDestinationResponseList = Array<ApiDestination>;
export type ApiDestinationState = "ACTIVE" | "INACTIVE";
export interface Archive {
  ArchiveName?: string;
  EventSourceArn?: string;
  State?: ArchiveState;
  StateReason?: string;
  RetentionDays?: number;
  SizeBytes?: number;
  EventCount?: number;
  CreationTime?: Date | string;
}
export type ArchiveArn = string;

export type ArchiveDescription = string;

export type ArchiveName = string;

export type ArchiveResponseList = Array<Archive>;
export type ArchiveState =
  | "ENABLED"
  | "DISABLED"
  | "CREATING"
  | "UPDATING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED";
export type ArchiveStateReason = string;

export type Arn = string;

export type AssignPublicIp = "ENABLED" | "DISABLED";
export type AuthHeaderParameters = string;

export type AuthHeaderParametersSensitive = string;

export interface AwsVpcConfiguration {
  Subnets: Array<string>;
  SecurityGroups?: Array<string>;
  AssignPublicIp?: AssignPublicIp;
}
export interface BatchArrayProperties {
  Size?: number;
}
export interface BatchParameters {
  JobDefinition: string;
  JobName: string;
  ArrayProperties?: BatchArrayProperties;
  RetryStrategy?: BatchRetryStrategy;
}
export interface BatchRetryStrategy {
  Attempts?: number;
}
export type CloudwatchEventsBoolean = boolean;

export interface CancelReplayRequest {
  ReplayName: string;
}
export interface CancelReplayResponse {
  ReplayArn?: string;
  State?: ReplayState;
  StateReason?: string;
}
export type CapacityProvider = string;

export type CapacityProviderStrategy = Array<CapacityProviderStrategyItem>;
export interface CapacityProviderStrategyItem {
  capacityProvider: string;
  weight?: number;
  base?: number;
}
export type CapacityProviderStrategyItemBase = number;

export type CapacityProviderStrategyItemWeight = number;

export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly message?: string;
}> {}
export interface Condition {
  Type: string;
  Key: string;
  Value: string;
}
export interface Connection {
  ConnectionArn?: string;
  Name?: string;
  ConnectionState?: ConnectionState;
  StateReason?: string;
  AuthorizationType?: ConnectionAuthorizationType;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  LastAuthorizedTime?: Date | string;
}
export interface ConnectionApiKeyAuthResponseParameters {
  ApiKeyName?: string;
}
export type ConnectionArn = string;

export type ConnectionAuthorizationType =
  | "BASIC"
  | "OAUTH_CLIENT_CREDENTIALS"
  | "API_KEY";
export interface ConnectionAuthResponseParameters {
  BasicAuthParameters?: ConnectionBasicAuthResponseParameters;
  OAuthParameters?: ConnectionOAuthResponseParameters;
  ApiKeyAuthParameters?: ConnectionApiKeyAuthResponseParameters;
  InvocationHttpParameters?: ConnectionHttpParameters;
}
export interface ConnectionBasicAuthResponseParameters {
  Username?: string;
}
export interface ConnectionBodyParameter {
  Key?: string;
  Value?: string;
  IsValueSecret?: boolean;
}
export type ConnectionBodyParametersList = Array<ConnectionBodyParameter>;
export type ConnectionDescription = string;

export interface ConnectionHeaderParameter {
  Key?: string;
  Value?: string;
  IsValueSecret?: boolean;
}
export type ConnectionHeaderParametersList = Array<ConnectionHeaderParameter>;
export interface ConnectionHttpParameters {
  HeaderParameters?: Array<ConnectionHeaderParameter>;
  QueryStringParameters?: Array<ConnectionQueryStringParameter>;
  BodyParameters?: Array<ConnectionBodyParameter>;
}
export type ConnectionName = string;

export interface ConnectionOAuthClientResponseParameters {
  ClientID?: string;
}
export type ConnectionOAuthHttpMethod = "GET" | "POST" | "PUT";
export interface ConnectionOAuthResponseParameters {
  ClientParameters?: ConnectionOAuthClientResponseParameters;
  AuthorizationEndpoint?: string;
  HttpMethod?: ConnectionOAuthHttpMethod;
  OAuthHttpParameters?: ConnectionHttpParameters;
}
export interface ConnectionQueryStringParameter {
  Key?: string;
  Value?: string;
  IsValueSecret?: boolean;
}
export type ConnectionQueryStringParametersList =
  Array<ConnectionQueryStringParameter>;
export type ConnectionResponseList = Array<Connection>;
export type ConnectionState =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "AUTHORIZED"
  | "DEAUTHORIZED"
  | "AUTHORIZING"
  | "DEAUTHORIZING";
export type ConnectionStateReason = string;

export interface CreateApiDestinationRequest {
  Name: string;
  Description?: string;
  ConnectionArn: string;
  InvocationEndpoint: string;
  HttpMethod: ApiDestinationHttpMethod;
  InvocationRateLimitPerSecond?: number;
}
export interface CreateApiDestinationResponse {
  ApiDestinationArn?: string;
  ApiDestinationState?: ApiDestinationState;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export interface CreateArchiveRequest {
  ArchiveName: string;
  EventSourceArn: string;
  Description?: string;
  EventPattern?: string;
  RetentionDays?: number;
}
export interface CreateArchiveResponse {
  ArchiveArn?: string;
  State?: ArchiveState;
  StateReason?: string;
  CreationTime?: Date | string;
}
export interface CreateConnectionApiKeyAuthRequestParameters {
  ApiKeyName: string;
  ApiKeyValue: string;
}
export interface CreateConnectionAuthRequestParameters {
  BasicAuthParameters?: CreateConnectionBasicAuthRequestParameters;
  OAuthParameters?: CreateConnectionOAuthRequestParameters;
  ApiKeyAuthParameters?: CreateConnectionApiKeyAuthRequestParameters;
  InvocationHttpParameters?: ConnectionHttpParameters;
}
export interface CreateConnectionBasicAuthRequestParameters {
  Username: string;
  Password: string;
}
export interface CreateConnectionOAuthClientRequestParameters {
  ClientID: string;
  ClientSecret: string;
}
export interface CreateConnectionOAuthRequestParameters {
  ClientParameters: CreateConnectionOAuthClientRequestParameters;
  AuthorizationEndpoint: string;
  HttpMethod: ConnectionOAuthHttpMethod;
  OAuthHttpParameters?: ConnectionHttpParameters;
}
export interface CreateConnectionRequest {
  Name: string;
  Description?: string;
  AuthorizationType: ConnectionAuthorizationType;
  AuthParameters: CreateConnectionAuthRequestParameters;
}
export interface CreateConnectionResponse {
  ConnectionArn?: string;
  ConnectionState?: ConnectionState;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export type CreatedBy = string;

export interface CreateEventBusRequest {
  Name: string;
  EventSourceName?: string;
  Tags?: Array<Tag>;
}
export interface CreateEventBusResponse {
  EventBusArn?: string;
}
export interface CreatePartnerEventSourceRequest {
  Name: string;
  Account: string;
}
export interface CreatePartnerEventSourceResponse {
  EventSourceArn?: string;
}
export type Database = string;

export type DbUser = string;

export interface DeactivateEventSourceRequest {
  Name: string;
}
export interface DeadLetterConfig {
  Arn?: string;
}
export interface DeauthorizeConnectionRequest {
  Name: string;
}
export interface DeauthorizeConnectionResponse {
  ConnectionArn?: string;
  ConnectionState?: ConnectionState;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  LastAuthorizedTime?: Date | string;
}
export interface DeleteApiDestinationRequest {
  Name: string;
}
export interface DeleteApiDestinationResponse {}
export interface DeleteArchiveRequest {
  ArchiveName: string;
}
export interface DeleteArchiveResponse {}
export interface DeleteConnectionRequest {
  Name: string;
}
export interface DeleteConnectionResponse {
  ConnectionArn?: string;
  ConnectionState?: ConnectionState;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  LastAuthorizedTime?: Date | string;
}
export interface DeleteEventBusRequest {
  Name: string;
}
export interface DeletePartnerEventSourceRequest {
  Name: string;
  Account: string;
}
export interface DeleteRuleRequest {
  Name: string;
  EventBusName?: string;
  Force?: boolean;
}
export interface DescribeApiDestinationRequest {
  Name: string;
}
export interface DescribeApiDestinationResponse {
  ApiDestinationArn?: string;
  Name?: string;
  Description?: string;
  ApiDestinationState?: ApiDestinationState;
  ConnectionArn?: string;
  InvocationEndpoint?: string;
  HttpMethod?: ApiDestinationHttpMethod;
  InvocationRateLimitPerSecond?: number;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export interface DescribeArchiveRequest {
  ArchiveName: string;
}
export interface DescribeArchiveResponse {
  ArchiveArn?: string;
  ArchiveName?: string;
  EventSourceArn?: string;
  Description?: string;
  EventPattern?: string;
  State?: ArchiveState;
  StateReason?: string;
  RetentionDays?: number;
  SizeBytes?: number;
  EventCount?: number;
  CreationTime?: Date | string;
}
export interface DescribeConnectionRequest {
  Name: string;
}
export interface DescribeConnectionResponse {
  ConnectionArn?: string;
  Name?: string;
  Description?: string;
  ConnectionState?: ConnectionState;
  StateReason?: string;
  AuthorizationType?: ConnectionAuthorizationType;
  SecretArn?: string;
  AuthParameters?: ConnectionAuthResponseParameters;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  LastAuthorizedTime?: Date | string;
}
export interface DescribeEventBusRequest {
  Name?: string;
}
export interface DescribeEventBusResponse {
  Name?: string;
  Arn?: string;
  Policy?: string;
}
export interface DescribeEventSourceRequest {
  Name: string;
}
export interface DescribeEventSourceResponse {
  Arn?: string;
  CreatedBy?: string;
  CreationTime?: Date | string;
  ExpirationTime?: Date | string;
  Name?: string;
  State?: EventSourceState;
}
export interface DescribePartnerEventSourceRequest {
  Name: string;
}
export interface DescribePartnerEventSourceResponse {
  Arn?: string;
  Name?: string;
}
export interface DescribeReplayRequest {
  ReplayName: string;
}
export interface DescribeReplayResponse {
  ReplayName?: string;
  ReplayArn?: string;
  Description?: string;
  State?: ReplayState;
  StateReason?: string;
  EventSourceArn?: string;
  Destination?: ReplayDestination;
  EventStartTime?: Date | string;
  EventEndTime?: Date | string;
  EventLastReplayedTime?: Date | string;
  ReplayStartTime?: Date | string;
  ReplayEndTime?: Date | string;
}
export interface DescribeRuleRequest {
  Name: string;
  EventBusName?: string;
}
export interface DescribeRuleResponse {
  Name?: string;
  Arn?: string;
  EventPattern?: string;
  ScheduleExpression?: string;
  State?: RuleState;
  Description?: string;
  RoleArn?: string;
  ManagedBy?: string;
  EventBusName?: string;
  CreatedBy?: string;
}
export interface DisableRuleRequest {
  Name: string;
  EventBusName?: string;
}
export interface EcsParameters {
  TaskDefinitionArn: string;
  TaskCount?: number;
  LaunchType?: LaunchType;
  NetworkConfiguration?: NetworkConfiguration;
  PlatformVersion?: string;
  Group?: string;
  CapacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
  EnableECSManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  PlacementConstraints?: Array<PlacementConstraint>;
  PlacementStrategy?: Array<PlacementStrategy>;
  PropagateTags?: PropagateTags;
  ReferenceId?: string;
  Tags?: Array<Tag>;
}
export interface EnableRuleRequest {
  Name: string;
  EventBusName?: string;
}
export type ErrorCode = string;

export type ErrorMessage = string;

export interface EventBus {
  Name?: string;
  Arn?: string;
  Policy?: string;
}
export type EventBusList = Array<EventBus>;
export type EventBusName = string;

export type EventBusNameOrArn = string;

export type EventId = string;

export type EventPattern = string;

export type EventResource = string;

export type EventResourceList = Array<string>;
export interface EventSource {
  Arn?: string;
  CreatedBy?: string;
  CreationTime?: Date | string;
  ExpirationTime?: Date | string;
  Name?: string;
  State?: EventSourceState;
}
export type EventSourceList = Array<EventSource>;
export type EventSourceName = string;

export type EventSourceNamePrefix = string;

export type EventSourceState = "PENDING" | "ACTIVE" | "DELETED";
export type EventTime = Date | string;

export type HeaderKey = string;

export type HeaderParametersMap = Record<string, string>;
export type HeaderValue = string;

export type HeaderValueSensitive = string;

export interface HttpParameters {
  PathParameterValues?: Array<string>;
  HeaderParameters?: Record<string, string>;
  QueryStringParameters?: Record<string, string>;
}
export type HttpsEndpoint = string;

export declare class IllegalStatusException extends EffectData.TaggedError(
  "IllegalStatusException",
)<{
  readonly message?: string;
}> {}
export interface InputTransformer {
  InputPathsMap?: Record<string, string>;
  InputTemplate: string;
}
export type InputTransformerPathKey = string;

export type Integer = number;

export declare class InternalException extends EffectData.TaggedError(
  "InternalException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidEventPatternException extends EffectData.TaggedError(
  "InvalidEventPatternException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidStateException extends EffectData.TaggedError(
  "InvalidStateException",
)<{
  readonly message?: string;
}> {}
export interface KinesisParameters {
  PartitionKeyPath: string;
}
export type LaunchType = "EC2" | "FARGATE" | "EXTERNAL";
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export type LimitMax100 = number;

export type LimitMin1 = number;

export interface ListApiDestinationsRequest {
  NamePrefix?: string;
  ConnectionArn?: string;
  NextToken?: string;
  Limit?: number;
}
export interface ListApiDestinationsResponse {
  ApiDestinations?: Array<ApiDestination>;
  NextToken?: string;
}
export interface ListArchivesRequest {
  NamePrefix?: string;
  EventSourceArn?: string;
  State?: ArchiveState;
  NextToken?: string;
  Limit?: number;
}
export interface ListArchivesResponse {
  Archives?: Array<Archive>;
  NextToken?: string;
}
export interface ListConnectionsRequest {
  NamePrefix?: string;
  ConnectionState?: ConnectionState;
  NextToken?: string;
  Limit?: number;
}
export interface ListConnectionsResponse {
  Connections?: Array<Connection>;
  NextToken?: string;
}
export interface ListEventBusesRequest {
  NamePrefix?: string;
  NextToken?: string;
  Limit?: number;
}
export interface ListEventBusesResponse {
  EventBuses?: Array<EventBus>;
  NextToken?: string;
}
export interface ListEventSourcesRequest {
  NamePrefix?: string;
  NextToken?: string;
  Limit?: number;
}
export interface ListEventSourcesResponse {
  EventSources?: Array<EventSource>;
  NextToken?: string;
}
export interface ListPartnerEventSourceAccountsRequest {
  EventSourceName: string;
  NextToken?: string;
  Limit?: number;
}
export interface ListPartnerEventSourceAccountsResponse {
  PartnerEventSourceAccounts?: Array<PartnerEventSourceAccount>;
  NextToken?: string;
}
export interface ListPartnerEventSourcesRequest {
  NamePrefix: string;
  NextToken?: string;
  Limit?: number;
}
export interface ListPartnerEventSourcesResponse {
  PartnerEventSources?: Array<PartnerEventSource>;
  NextToken?: string;
}
export interface ListReplaysRequest {
  NamePrefix?: string;
  State?: ReplayState;
  EventSourceArn?: string;
  NextToken?: string;
  Limit?: number;
}
export interface ListReplaysResponse {
  Replays?: Array<Replay>;
  NextToken?: string;
}
export interface ListRuleNamesByTargetRequest {
  TargetArn: string;
  EventBusName?: string;
  NextToken?: string;
  Limit?: number;
}
export interface ListRuleNamesByTargetResponse {
  RuleNames?: Array<string>;
  NextToken?: string;
}
export interface ListRulesRequest {
  NamePrefix?: string;
  EventBusName?: string;
  NextToken?: string;
  Limit?: number;
}
export interface ListRulesResponse {
  Rules?: Array<Rule>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface ListTargetsByRuleRequest {
  Rule: string;
  EventBusName?: string;
  NextToken?: string;
  Limit?: number;
}
export interface ListTargetsByRuleResponse {
  Targets?: Array<Target>;
  NextToken?: string;
}
export type Long = number;

export type ManagedBy = string;

export declare class ManagedRuleException extends EffectData.TaggedError(
  "ManagedRuleException",
)<{
  readonly message?: string;
}> {}
export type MaximumEventAgeInSeconds = number;

export type MaximumRetryAttempts = number;

export type MessageGroupId = string;

export interface NetworkConfiguration {
  awsvpcConfiguration?: AwsVpcConfiguration;
}
export type NextToken = string;

export type NonPartnerEventBusName = string;

export type NonPartnerEventBusNameOrArn = string;

export declare class OperationDisabledException extends EffectData.TaggedError(
  "OperationDisabledException",
)<{
  readonly message?: string;
}> {}
export interface PartnerEventSource {
  Arn?: string;
  Name?: string;
}
export interface PartnerEventSourceAccount {
  Account?: string;
  CreationTime?: Date | string;
  ExpirationTime?: Date | string;
  State?: EventSourceState;
}
export type PartnerEventSourceAccountList = Array<PartnerEventSourceAccount>;
export type PartnerEventSourceList = Array<PartnerEventSource>;
export type PartnerEventSourceNamePrefix = string;

export type PathParameter = string;

export type PathParameterList = Array<string>;
export interface PlacementConstraint {
  type?: PlacementConstraintType;
  expression?: string;
}
export type PlacementConstraintExpression = string;

export type PlacementConstraints = Array<PlacementConstraint>;
export type PlacementConstraintType = "DISTINCT_INSTANCE" | "MEMBER_OF";
export type PlacementStrategies = Array<PlacementStrategy>;
export interface PlacementStrategy {
  type?: PlacementStrategyType;
  field?: string;
}
export type PlacementStrategyField = string;

export type PlacementStrategyType = "RANDOM" | "SPREAD" | "BINPACK";
export declare class PolicyLengthExceededException extends EffectData.TaggedError(
  "PolicyLengthExceededException",
)<{
  readonly message?: string;
}> {}
export type Principal = string;

export type PropagateTags = "TASK_DEFINITION";
export interface PutEventsRequest {
  Entries: Array<PutEventsRequestEntry>;
}
export interface PutEventsRequestEntry {
  Time?: Date | string;
  Source?: string;
  Resources?: Array<string>;
  DetailType?: string;
  Detail?: string;
  EventBusName?: string;
  TraceHeader?: string;
}
export type PutEventsRequestEntryList = Array<PutEventsRequestEntry>;
export interface PutEventsResponse {
  FailedEntryCount?: number;
  Entries?: Array<PutEventsResultEntry>;
}
export interface PutEventsResultEntry {
  EventId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type PutEventsResultEntryList = Array<PutEventsResultEntry>;
export interface PutPartnerEventsRequest {
  Entries: Array<PutPartnerEventsRequestEntry>;
}
export interface PutPartnerEventsRequestEntry {
  Time?: Date | string;
  Source?: string;
  Resources?: Array<string>;
  DetailType?: string;
  Detail?: string;
}
export type PutPartnerEventsRequestEntryList =
  Array<PutPartnerEventsRequestEntry>;
export interface PutPartnerEventsResponse {
  FailedEntryCount?: number;
  Entries?: Array<PutPartnerEventsResultEntry>;
}
export interface PutPartnerEventsResultEntry {
  EventId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type PutPartnerEventsResultEntryList =
  Array<PutPartnerEventsResultEntry>;
export interface PutPermissionRequest {
  EventBusName?: string;
  Action?: string;
  Principal?: string;
  StatementId?: string;
  Condition?: Condition;
  Policy?: string;
}
export interface PutRuleRequest {
  Name: string;
  ScheduleExpression?: string;
  EventPattern?: string;
  State?: RuleState;
  Description?: string;
  RoleArn?: string;
  Tags?: Array<Tag>;
  EventBusName?: string;
}
export interface PutRuleResponse {
  RuleArn?: string;
}
export interface PutTargetsRequest {
  Rule: string;
  EventBusName?: string;
  Targets: Array<Target>;
}
export interface PutTargetsResponse {
  FailedEntryCount?: number;
  FailedEntries?: Array<PutTargetsResultEntry>;
}
export interface PutTargetsResultEntry {
  TargetId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type PutTargetsResultEntryList = Array<PutTargetsResultEntry>;
export type QueryStringKey = string;

export type QueryStringParametersMap = Record<string, string>;
export type QueryStringValue = string;

export type QueryStringValueSensitive = string;

export interface RedshiftDataParameters {
  SecretManagerArn?: string;
  Database: string;
  DbUser?: string;
  Sql: string;
  StatementName?: string;
  WithEvent?: boolean;
}
export type RedshiftSecretManagerArn = string;

export type ReferenceId = string;

export interface RemovePermissionRequest {
  StatementId?: string;
  RemoveAllPermissions?: boolean;
  EventBusName?: string;
}
export interface RemoveTargetsRequest {
  Rule: string;
  EventBusName?: string;
  Ids: Array<string>;
  Force?: boolean;
}
export interface RemoveTargetsResponse {
  FailedEntryCount?: number;
  FailedEntries?: Array<RemoveTargetsResultEntry>;
}
export interface RemoveTargetsResultEntry {
  TargetId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type RemoveTargetsResultEntryList = Array<RemoveTargetsResultEntry>;
export interface Replay {
  ReplayName?: string;
  EventSourceArn?: string;
  State?: ReplayState;
  StateReason?: string;
  EventStartTime?: Date | string;
  EventEndTime?: Date | string;
  EventLastReplayedTime?: Date | string;
  ReplayStartTime?: Date | string;
  ReplayEndTime?: Date | string;
}
export type ReplayArn = string;

export type ReplayDescription = string;

export interface ReplayDestination {
  Arn: string;
  FilterArns?: Array<string>;
}
export type ReplayDestinationFilters = Array<string>;
export type ReplayList = Array<Replay>;
export type ReplayName = string;

export type ReplayState =
  | "STARTING"
  | "RUNNING"
  | "CANCELLING"
  | "COMPLETED"
  | "CANCELLED"
  | "FAILED";
export type ReplayStateReason = string;

export declare class ResourceAlreadyExistsException extends EffectData.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type ResourceArn = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RetentionDays = number;

export interface RetryPolicy {
  MaximumRetryAttempts?: number;
  MaximumEventAgeInSeconds?: number;
}
export type RoleArn = string;

export interface Rule {
  Name?: string;
  Arn?: string;
  EventPattern?: string;
  State?: RuleState;
  Description?: string;
  ScheduleExpression?: string;
  RoleArn?: string;
  ManagedBy?: string;
  EventBusName?: string;
}
export type RuleArn = string;

export type RuleDescription = string;

export type RuleName = string;

export type RuleNameList = Array<string>;
export type RuleResponseList = Array<Rule>;
export type RuleState = "ENABLED" | "DISABLED";
export interface RunCommandParameters {
  RunCommandTargets: Array<RunCommandTarget>;
}
export interface RunCommandTarget {
  Key: string;
  Values: Array<string>;
}
export type RunCommandTargetKey = string;

export type RunCommandTargets = Array<RunCommandTarget>;
export type RunCommandTargetValue = string;

export type RunCommandTargetValues = Array<string>;
export interface SageMakerPipelineParameter {
  Name: string;
  Value: string;
}
export type SageMakerPipelineParameterList = Array<SageMakerPipelineParameter>;
export type SageMakerPipelineParameterName = string;

export interface SageMakerPipelineParameters {
  PipelineParameterList?: Array<SageMakerPipelineParameter>;
}
export type SageMakerPipelineParameterValue = string;

export type ScheduleExpression = string;

export type SecretsManagerSecretArn = string;

export type SensitiveString = string;

export type Sql = string;

export interface SqsParameters {
  MessageGroupId?: string;
}
export interface StartReplayRequest {
  ReplayName: string;
  Description?: string;
  EventSourceArn: string;
  EventStartTime: Date | string;
  EventEndTime: Date | string;
  Destination: ReplayDestination;
}
export interface StartReplayResponse {
  ReplayArn?: string;
  State?: ReplayState;
  StateReason?: string;
  ReplayStartTime?: Date | string;
}
export type StatementId = string;

export type StatementName = string;

export type CloudwatchEventsString = string;

export type StringList = Array<string>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export interface Target {
  Id: string;
  Arn: string;
  RoleArn?: string;
  Input?: string;
  InputPath?: string;
  InputTransformer?: InputTransformer;
  KinesisParameters?: KinesisParameters;
  RunCommandParameters?: RunCommandParameters;
  EcsParameters?: EcsParameters;
  BatchParameters?: BatchParameters;
  SqsParameters?: SqsParameters;
  HttpParameters?: HttpParameters;
  RedshiftDataParameters?: RedshiftDataParameters;
  SageMakerPipelineParameters?: SageMakerPipelineParameters;
  DeadLetterConfig?: DeadLetterConfig;
  RetryPolicy?: RetryPolicy;
}
export type TargetArn = string;

export type TargetId = string;

export type TargetIdList = Array<string>;
export type TargetInput = string;

export type TargetInputPath = string;

export type TargetList = Array<Target>;
export type TargetPartitionKeyPath = string;

export interface TestEventPatternRequest {
  EventPattern: string;
  Event: string;
}
export interface TestEventPatternResponse {
  Result?: boolean;
}
export type Timestamp = Date | string;

export type TraceHeader = string;

export type TransformerInput = string;

export type TransformerPaths = Record<string, string>;
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateApiDestinationRequest {
  Name: string;
  Description?: string;
  ConnectionArn?: string;
  InvocationEndpoint?: string;
  HttpMethod?: ApiDestinationHttpMethod;
  InvocationRateLimitPerSecond?: number;
}
export interface UpdateApiDestinationResponse {
  ApiDestinationArn?: string;
  ApiDestinationState?: ApiDestinationState;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export interface UpdateArchiveRequest {
  ArchiveName: string;
  Description?: string;
  EventPattern?: string;
  RetentionDays?: number;
}
export interface UpdateArchiveResponse {
  ArchiveArn?: string;
  State?: ArchiveState;
  StateReason?: string;
  CreationTime?: Date | string;
}
export interface UpdateConnectionApiKeyAuthRequestParameters {
  ApiKeyName?: string;
  ApiKeyValue?: string;
}
export interface UpdateConnectionAuthRequestParameters {
  BasicAuthParameters?: UpdateConnectionBasicAuthRequestParameters;
  OAuthParameters?: UpdateConnectionOAuthRequestParameters;
  ApiKeyAuthParameters?: UpdateConnectionApiKeyAuthRequestParameters;
  InvocationHttpParameters?: ConnectionHttpParameters;
}
export interface UpdateConnectionBasicAuthRequestParameters {
  Username?: string;
  Password?: string;
}
export interface UpdateConnectionOAuthClientRequestParameters {
  ClientID?: string;
  ClientSecret?: string;
}
export interface UpdateConnectionOAuthRequestParameters {
  ClientParameters?: UpdateConnectionOAuthClientRequestParameters;
  AuthorizationEndpoint?: string;
  HttpMethod?: ConnectionOAuthHttpMethod;
  OAuthHttpParameters?: ConnectionHttpParameters;
}
export interface UpdateConnectionRequest {
  Name: string;
  Description?: string;
  AuthorizationType?: ConnectionAuthorizationType;
  AuthParameters?: UpdateConnectionAuthRequestParameters;
}
export interface UpdateConnectionResponse {
  ConnectionArn?: string;
  ConnectionState?: ConnectionState;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  LastAuthorizedTime?: Date | string;
}
export declare namespace ActivateEventSource {
  export type Input = ActivateEventSourceRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | InvalidStateException
    | OperationDisabledException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CancelReplay {
  export type Input = CancelReplayRequest;
  export type Output = CancelReplayResponse;
  export type Error =
    | ConcurrentModificationException
    | IllegalStatusException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateApiDestination {
  export type Input = CreateApiDestinationRequest;
  export type Output = CreateApiDestinationResponse;
  export type Error =
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateArchive {
  export type Input = CreateArchiveRequest;
  export type Output = CreateArchiveResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | InvalidEventPatternException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateConnection {
  export type Input = CreateConnectionRequest;
  export type Output = CreateConnectionResponse;
  export type Error =
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | CommonAwsError;
}

export declare namespace CreateEventBus {
  export type Input = CreateEventBusRequest;
  export type Output = CreateEventBusResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | InvalidStateException
    | LimitExceededException
    | OperationDisabledException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreatePartnerEventSource {
  export type Input = CreatePartnerEventSourceRequest;
  export type Output = CreatePartnerEventSourceResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | LimitExceededException
    | OperationDisabledException
    | ResourceAlreadyExistsException
    | CommonAwsError;
}

export declare namespace DeactivateEventSource {
  export type Input = DeactivateEventSourceRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | InvalidStateException
    | OperationDisabledException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeauthorizeConnection {
  export type Input = DeauthorizeConnectionRequest;
  export type Output = DeauthorizeConnectionResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteApiDestination {
  export type Input = DeleteApiDestinationRequest;
  export type Output = DeleteApiDestinationResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteArchive {
  export type Input = DeleteArchiveRequest;
  export type Output = DeleteArchiveResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteConnection {
  export type Input = DeleteConnectionRequest;
  export type Output = DeleteConnectionResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteEventBus {
  export type Input = DeleteEventBusRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | CommonAwsError;
}

export declare namespace DeletePartnerEventSource {
  export type Input = DeletePartnerEventSourceRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | OperationDisabledException
    | CommonAwsError;
}

export declare namespace DeleteRule {
  export type Input = DeleteRuleRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeApiDestination {
  export type Input = DescribeApiDestinationRequest;
  export type Output = DescribeApiDestinationResponse;
  export type Error =
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeArchive {
  export type Input = DescribeArchiveRequest;
  export type Output = DescribeArchiveResponse;
  export type Error =
    | InternalException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeConnection {
  export type Input = DescribeConnectionRequest;
  export type Output = DescribeConnectionResponse;
  export type Error =
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeEventBus {
  export type Input = DescribeEventBusRequest;
  export type Output = DescribeEventBusResponse;
  export type Error =
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeEventSource {
  export type Input = DescribeEventSourceRequest;
  export type Output = DescribeEventSourceResponse;
  export type Error =
    | InternalException
    | OperationDisabledException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribePartnerEventSource {
  export type Input = DescribePartnerEventSourceRequest;
  export type Output = DescribePartnerEventSourceResponse;
  export type Error =
    | InternalException
    | OperationDisabledException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeReplay {
  export type Input = DescribeReplayRequest;
  export type Output = DescribeReplayResponse;
  export type Error =
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeRule {
  export type Input = DescribeRuleRequest;
  export type Output = DescribeRuleResponse;
  export type Error =
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisableRule {
  export type Input = DisableRuleRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace EnableRule {
  export type Input = EnableRuleRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListApiDestinations {
  export type Input = ListApiDestinationsRequest;
  export type Output = ListApiDestinationsResponse;
  export type Error = InternalException | CommonAwsError;
}

export declare namespace ListArchives {
  export type Input = ListArchivesRequest;
  export type Output = ListArchivesResponse;
  export type Error =
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListConnections {
  export type Input = ListConnectionsRequest;
  export type Output = ListConnectionsResponse;
  export type Error = InternalException | CommonAwsError;
}

export declare namespace ListEventBuses {
  export type Input = ListEventBusesRequest;
  export type Output = ListEventBusesResponse;
  export type Error = InternalException | CommonAwsError;
}

export declare namespace ListEventSources {
  export type Input = ListEventSourcesRequest;
  export type Output = ListEventSourcesResponse;
  export type Error =
    | InternalException
    | OperationDisabledException
    | CommonAwsError;
}

export declare namespace ListPartnerEventSourceAccounts {
  export type Input = ListPartnerEventSourceAccountsRequest;
  export type Output = ListPartnerEventSourceAccountsResponse;
  export type Error =
    | InternalException
    | OperationDisabledException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListPartnerEventSources {
  export type Input = ListPartnerEventSourcesRequest;
  export type Output = ListPartnerEventSourcesResponse;
  export type Error =
    | InternalException
    | OperationDisabledException
    | CommonAwsError;
}

export declare namespace ListReplays {
  export type Input = ListReplaysRequest;
  export type Output = ListReplaysResponse;
  export type Error = InternalException | CommonAwsError;
}

export declare namespace ListRuleNamesByTarget {
  export type Input = ListRuleNamesByTargetRequest;
  export type Output = ListRuleNamesByTargetResponse;
  export type Error =
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListRules {
  export type Input = ListRulesRequest;
  export type Output = ListRulesResponse;
  export type Error =
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTargetsByRule {
  export type Input = ListTargetsByRuleRequest;
  export type Output = ListTargetsByRuleResponse;
  export type Error =
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutEvents {
  export type Input = PutEventsRequest;
  export type Output = PutEventsResponse;
  export type Error = InternalException | CommonAwsError;
}

export declare namespace PutPartnerEvents {
  export type Input = PutPartnerEventsRequest;
  export type Output = PutPartnerEventsResponse;
  export type Error =
    | InternalException
    | OperationDisabledException
    | CommonAwsError;
}

export declare namespace PutPermission {
  export type Input = PutPermissionRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | OperationDisabledException
    | PolicyLengthExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutRule {
  export type Input = PutRuleRequest;
  export type Output = PutRuleResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | InvalidEventPatternException
    | LimitExceededException
    | ManagedRuleException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutTargets {
  export type Input = PutTargetsRequest;
  export type Output = PutTargetsResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | LimitExceededException
    | ManagedRuleException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RemovePermission {
  export type Input = RemovePermissionRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | OperationDisabledException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RemoveTargets {
  export type Input = RemoveTargetsRequest;
  export type Output = RemoveTargetsResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartReplay {
  export type Input = StartReplayRequest;
  export type Output = StartReplayResponse;
  export type Error =
    | InternalException
    | InvalidEventPatternException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TestEventPattern {
  export type Input = TestEventPatternRequest;
  export type Output = TestEventPatternResponse;
  export type Error =
    | InternalException
    | InvalidEventPatternException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateApiDestination {
  export type Input = UpdateApiDestinationRequest;
  export type Output = UpdateApiDestinationResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateArchive {
  export type Input = UpdateArchiveRequest;
  export type Output = UpdateArchiveResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | InvalidEventPatternException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateConnection {
  export type Input = UpdateConnectionRequest;
  export type Output = UpdateConnectionResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}
