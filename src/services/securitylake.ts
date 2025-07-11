import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface SecurityLake {
  createAwsLogSource(
    input: CreateAwsLogSourceRequest,
  ): Effect.Effect<
    CreateAwsLogSourceResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createCustomLogSource(
    input: CreateCustomLogSourceRequest,
  ): Effect.Effect<
    CreateCustomLogSourceResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createDataLake(
    input: CreateDataLakeRequest,
  ): Effect.Effect<
    CreateDataLakeResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createDataLakeExceptionSubscription(
    input: CreateDataLakeExceptionSubscriptionRequest,
  ): Effect.Effect<
    CreateDataLakeExceptionSubscriptionResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createDataLakeOrganizationConfiguration(
    input: CreateDataLakeOrganizationConfigurationRequest,
  ): Effect.Effect<
    CreateDataLakeOrganizationConfigurationResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createSubscriber(
    input: CreateSubscriberRequest,
  ): Effect.Effect<
    CreateSubscriberResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createSubscriberNotification(
    input: CreateSubscriberNotificationRequest,
  ): Effect.Effect<
    CreateSubscriberNotificationResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteAwsLogSource(
    input: DeleteAwsLogSourceRequest,
  ): Effect.Effect<
    DeleteAwsLogSourceResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteCustomLogSource(
    input: DeleteCustomLogSourceRequest,
  ): Effect.Effect<
    DeleteCustomLogSourceResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteDataLake(
    input: DeleteDataLakeRequest,
  ): Effect.Effect<
    DeleteDataLakeResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteDataLakeExceptionSubscription(
    input: DeleteDataLakeExceptionSubscriptionRequest,
  ): Effect.Effect<
    DeleteDataLakeExceptionSubscriptionResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteDataLakeOrganizationConfiguration(
    input: DeleteDataLakeOrganizationConfigurationRequest,
  ): Effect.Effect<
    DeleteDataLakeOrganizationConfigurationResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteSubscriber(
    input: DeleteSubscriberRequest,
  ): Effect.Effect<
    DeleteSubscriberResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteSubscriberNotification(
    input: DeleteSubscriberNotificationRequest,
  ): Effect.Effect<
    DeleteSubscriberNotificationResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deregisterDataLakeDelegatedAdministrator(
    input: DeregisterDataLakeDelegatedAdministratorRequest,
  ): Effect.Effect<
    DeregisterDataLakeDelegatedAdministratorResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getDataLakeExceptionSubscription(
    input: GetDataLakeExceptionSubscriptionRequest,
  ): Effect.Effect<
    GetDataLakeExceptionSubscriptionResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getDataLakeOrganizationConfiguration(
    input: GetDataLakeOrganizationConfigurationRequest,
  ): Effect.Effect<
    GetDataLakeOrganizationConfigurationResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getDataLakeSources(
    input: GetDataLakeSourcesRequest,
  ): Effect.Effect<
    GetDataLakeSourcesResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getSubscriber(
    input: GetSubscriberRequest,
  ): Effect.Effect<
    GetSubscriberResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listDataLakeExceptions(
    input: ListDataLakeExceptionsRequest,
  ): Effect.Effect<
    ListDataLakeExceptionsResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listDataLakes(
    input: ListDataLakesRequest,
  ): Effect.Effect<
    ListDataLakesResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listLogSources(
    input: ListLogSourcesRequest,
  ): Effect.Effect<
    ListLogSourcesResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listSubscribers(
    input: ListSubscribersRequest,
  ): Effect.Effect<
    ListSubscribersResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  registerDataLakeDelegatedAdministrator(
    input: RegisterDataLakeDelegatedAdministratorRequest,
  ): Effect.Effect<
    RegisterDataLakeDelegatedAdministratorResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateDataLake(
    input: UpdateDataLakeRequest,
  ): Effect.Effect<
    UpdateDataLakeResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateDataLakeExceptionSubscription(
    input: UpdateDataLakeExceptionSubscriptionRequest,
  ): Effect.Effect<
    UpdateDataLakeExceptionSubscriptionResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateSubscriber(
    input: UpdateSubscriberRequest,
  ): Effect.Effect<
    UpdateSubscriberResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateSubscriberNotification(
    input: UpdateSubscriberNotificationRequest,
  ): Effect.Effect<
    UpdateSubscriberNotificationResponse,
    AccessDeniedException | BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
}

export type Securitylake = SecurityLake;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
  readonly errorCode?: string;
}> {}
export type AccessType = "LAKEFORMATION" | "S3";
export type AccessTypeList = Array<AccessType>;
export type AccountList = Array<string>;
export type AmazonResourceName = string;

export type AwsAccountId = string;

export interface AwsIdentity {
  principal: string;
  externalId: string;
}
export interface AwsLogSourceConfiguration {
  accounts?: Array<string>;
  regions: Array<string>;
  sourceName: AwsLogSourceName;
  sourceVersion?: string;
}
export type AwsLogSourceConfigurationList = Array<AwsLogSourceConfiguration>;
export type AwsLogSourceName = "ROUTE53" | "VPC_FLOW" | "SH_FINDINGS" | "CLOUD_TRAIL_MGMT" | "LAMBDA_EXECUTION" | "S3_DATA" | "EKS_AUDIT" | "WAF";
export interface AwsLogSourceResource {
  sourceName?: AwsLogSourceName;
  sourceVersion?: string;
}
export type AwsLogSourceResourceList = Array<AwsLogSourceResource>;
export type AwsLogSourceVersion = string;

export type AwsPrincipal = string;

export declare class BadRequestException extends Data.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
}> {}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
  readonly resourceType?: string;
}> {}
export interface CreateAwsLogSourceRequest {
  sources: Array<AwsLogSourceConfiguration>;
}
export interface CreateAwsLogSourceResponse {
  failed?: Array<string>;
}
export interface CreateCustomLogSourceRequest {
  sourceName: string;
  sourceVersion?: string;
  eventClasses?: Array<string>;
  configuration: CustomLogSourceConfiguration;
}
export interface CreateCustomLogSourceResponse {
  source?: CustomLogSourceResource;
}
export interface CreateDataLakeExceptionSubscriptionRequest {
  subscriptionProtocol: string;
  notificationEndpoint: string;
  exceptionTimeToLive?: number;
}
export interface CreateDataLakeExceptionSubscriptionResponse {
}
export interface CreateDataLakeOrganizationConfigurationRequest {
  autoEnableNewAccount?: Array<DataLakeAutoEnableNewAccountConfiguration>;
}
export interface CreateDataLakeOrganizationConfigurationResponse {
}
export interface CreateDataLakeRequest {
  configurations: Array<DataLakeConfiguration>;
  metaStoreManagerRoleArn: string;
  tags?: Array<Tag>;
}
export interface CreateDataLakeResponse {
  dataLakes?: Array<DataLakeResource>;
}
export interface CreateSubscriberNotificationRequest {
  subscriberId: string;
  configuration: NotificationConfiguration;
}
export interface CreateSubscriberNotificationResponse {
  subscriberEndpoint?: string;
}
export interface CreateSubscriberRequest {
  subscriberIdentity: AwsIdentity;
  subscriberName: string;
  subscriberDescription?: string;
  sources: Array<LogSourceResource>;
  accessTypes?: Array<AccessType>;
  tags?: Array<Tag>;
}
export interface CreateSubscriberResponse {
  subscriber?: SubscriberResource;
}
export interface CustomLogSourceAttributes {
  crawlerArn?: string;
  databaseArn?: string;
  tableArn?: string;
}
export interface CustomLogSourceConfiguration {
  crawlerConfiguration: CustomLogSourceCrawlerConfiguration;
  providerIdentity: AwsIdentity;
}
export interface CustomLogSourceCrawlerConfiguration {
  roleArn: string;
}
export type CustomLogSourceName = string;

export interface CustomLogSourceProvider {
  roleArn?: string;
  location?: string;
}
export interface CustomLogSourceResource {
  sourceName?: string;
  sourceVersion?: string;
  provider?: CustomLogSourceProvider;
  attributes?: CustomLogSourceAttributes;
}
export type CustomLogSourceVersion = string;

export interface DataLakeAutoEnableNewAccountConfiguration {
  region: string;
  sources: Array<AwsLogSourceResource>;
}
export type DataLakeAutoEnableNewAccountConfigurationList = Array<DataLakeAutoEnableNewAccountConfiguration>;
export interface DataLakeConfiguration {
  region: string;
  encryptionConfiguration?: DataLakeEncryptionConfiguration;
  lifecycleConfiguration?: DataLakeLifecycleConfiguration;
  replicationConfiguration?: DataLakeReplicationConfiguration;
}
export type DataLakeConfigurationList = Array<DataLakeConfiguration>;
export interface DataLakeEncryptionConfiguration {
  kmsKeyId?: string;
}
export interface DataLakeException {
  region?: string;
  exception?: string;
  remediation?: string;
  timestamp?: Date | string;
}
export type DataLakeExceptionList = Array<DataLakeException>;
export interface DataLakeLifecycleConfiguration {
  expiration?: DataLakeLifecycleExpiration;
  transitions?: Array<DataLakeLifecycleTransition>;
}
export interface DataLakeLifecycleExpiration {
  days?: number;
}
export interface DataLakeLifecycleTransition {
  storageClass?: string;
  days?: number;
}
export type DataLakeLifecycleTransitionList = Array<DataLakeLifecycleTransition>;
export interface DataLakeReplicationConfiguration {
  regions?: Array<string>;
  roleArn?: string;
}
export interface DataLakeResource {
  dataLakeArn: string;
  region: string;
  s3BucketArn?: string;
  encryptionConfiguration?: DataLakeEncryptionConfiguration;
  lifecycleConfiguration?: DataLakeLifecycleConfiguration;
  replicationConfiguration?: DataLakeReplicationConfiguration;
  createStatus?: DataLakeStatus;
  updateStatus?: DataLakeUpdateStatus;
}
export type DataLakeResourceList = Array<DataLakeResource>;
export interface DataLakeSource {
  account?: string;
  sourceName?: string;
  eventClasses?: Array<string>;
  sourceStatuses?: Array<DataLakeSourceStatus>;
}
export type DataLakeSourceList = Array<DataLakeSource>;
export interface DataLakeSourceStatus {
  resource?: string;
  status?: SourceCollectionStatus;
}
export type DataLakeSourceStatusList = Array<DataLakeSourceStatus>;
export type DataLakeStatus = "INITIALIZED" | "PENDING" | "COMPLETED" | "FAILED";
export type DataLakeStorageClass = string;

export interface DataLakeUpdateException {
  reason?: string;
  code?: string;
}
export interface DataLakeUpdateStatus {
  requestId?: string;
  status?: DataLakeStatus;
  exception?: DataLakeUpdateException;
}
export interface DeleteAwsLogSourceRequest {
  sources: Array<AwsLogSourceConfiguration>;
}
export interface DeleteAwsLogSourceResponse {
  failed?: Array<string>;
}
export interface DeleteCustomLogSourceRequest {
  sourceName: string;
  sourceVersion?: string;
}
export interface DeleteCustomLogSourceResponse {
}
export interface DeleteDataLakeExceptionSubscriptionRequest {
}
export interface DeleteDataLakeExceptionSubscriptionResponse {
}
export interface DeleteDataLakeOrganizationConfigurationRequest {
  autoEnableNewAccount?: Array<DataLakeAutoEnableNewAccountConfiguration>;
}
export interface DeleteDataLakeOrganizationConfigurationResponse {
}
export interface DeleteDataLakeRequest {
  regions: Array<string>;
}
export interface DeleteDataLakeResponse {
}
export interface DeleteSubscriberNotificationRequest {
  subscriberId: string;
}
export interface DeleteSubscriberNotificationResponse {
}
export interface DeleteSubscriberRequest {
  subscriberId: string;
}
export interface DeleteSubscriberResponse {
}
export interface DeregisterDataLakeDelegatedAdministratorRequest {
}
export interface DeregisterDataLakeDelegatedAdministratorResponse {
}
export type DescriptionString = string;

export type ExternalId = string;

export interface GetDataLakeExceptionSubscriptionRequest {
}
export interface GetDataLakeExceptionSubscriptionResponse {
  subscriptionProtocol?: string;
  notificationEndpoint?: string;
  exceptionTimeToLive?: number;
}
export interface GetDataLakeOrganizationConfigurationRequest {
}
export interface GetDataLakeOrganizationConfigurationResponse {
  autoEnableNewAccount?: Array<DataLakeAutoEnableNewAccountConfiguration>;
}
export interface GetDataLakeSourcesRequest {
  accounts?: Array<string>;
  maxResults?: number;
  nextToken?: string;
}
export interface GetDataLakeSourcesResponse {
  dataLakeArn?: string;
  dataLakeSources?: Array<DataLakeSource>;
  nextToken?: string;
}
export interface GetSubscriberRequest {
  subscriberId: string;
}
export interface GetSubscriberResponse {
  subscriber?: SubscriberResource;
}
export type HttpMethod = "POST" | "PUT";
export interface HttpsNotificationConfiguration {
  endpoint: string;
  authorizationApiKeyName?: string;
  authorizationApiKeyValue?: string;
  httpMethod?: HttpMethod;
  targetRoleArn: string;
}
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export interface ListDataLakeExceptionsRequest {
  regions?: Array<string>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListDataLakeExceptionsResponse {
  exceptions?: Array<DataLakeException>;
  nextToken?: string;
}
export interface ListDataLakesRequest {
  regions?: Array<string>;
}
export interface ListDataLakesResponse {
  dataLakes?: Array<DataLakeResource>;
}
export interface ListLogSourcesRequest {
  accounts?: Array<string>;
  regions?: Array<string>;
  sources?: Array<LogSourceResource>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListLogSourcesResponse {
  sources?: Array<LogSource>;
  nextToken?: string;
}
export interface ListSubscribersRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListSubscribersResponse {
  subscribers?: Array<SubscriberResource>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export interface LogSource {
  account?: string;
  region?: string;
  sources?: Array<LogSourceResource>;
}
export type LogSourceList = Array<LogSource>;
export type LogSourceResource = { awsLogSource: AwsLogSourceResource } | { customLogSource: CustomLogSourceResource };
export type LogSourceResourceList = Array<LogSourceResource>;
export type MaxResults = number;

export type NextToken = string;

export type NotificationConfiguration = { sqsNotificationConfiguration: SqsNotificationConfiguration } | { httpsNotificationConfiguration: HttpsNotificationConfiguration };
export type OcsfEventClass = string;

export type OcsfEventClassList = Array<string>;
export type Region = string;

export type RegionList = Array<string>;
export interface RegisterDataLakeDelegatedAdministratorRequest {
  accountId: string;
}
export interface RegisterDataLakeDelegatedAdministratorResponse {
}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
  readonly resourceType?: string;
}> {}
export type ResourceShareArn = string;

export type ResourceShareName = string;

export type RoleArn = string;

export type S3BucketArn = string;

export type S3URI = string;

export type SafeString = string;

export type SourceCollectionStatus = "COLLECTING" | "MISCONFIGURED" | "NOT_COLLECTING";
export interface SqsNotificationConfiguration {
}
export interface SubscriberResource {
  subscriberId: string;
  subscriberArn: string;
  subscriberIdentity: AwsIdentity;
  subscriberName: string;
  subscriberDescription?: string;
  sources: Array<LogSourceResource>;
  accessTypes?: Array<AccessType>;
  roleArn?: string;
  s3BucketArn?: string;
  subscriberEndpoint?: string;
  subscriberStatus?: SubscriberStatus;
  resourceShareArn?: string;
  resourceShareName?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export type SubscriberResourceList = Array<SubscriberResource>;
export type SubscriberStatus = "ACTIVE" | "DEACTIVATED" | "PENDING" | "READY";
export type SubscriptionProtocol = string;

export interface Tag {
  key: string;
  value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateDataLakeExceptionSubscriptionRequest {
  subscriptionProtocol: string;
  notificationEndpoint: string;
  exceptionTimeToLive?: number;
}
export interface UpdateDataLakeExceptionSubscriptionResponse {
}
export interface UpdateDataLakeRequest {
  configurations: Array<DataLakeConfiguration>;
  metaStoreManagerRoleArn?: string;
}
export interface UpdateDataLakeResponse {
  dataLakes?: Array<DataLakeResource>;
}
export interface UpdateSubscriberNotificationRequest {
  subscriberId: string;
  configuration: NotificationConfiguration;
}
export interface UpdateSubscriberNotificationResponse {
  subscriberEndpoint?: string;
}
export interface UpdateSubscriberRequest {
  subscriberId: string;
  subscriberIdentity?: AwsIdentity;
  subscriberName?: string;
  subscriberDescription?: string;
  sources?: Array<LogSourceResource>;
}
export interface UpdateSubscriberResponse {
  subscriber?: SubscriberResource;
}
export type UUID = string;

export declare namespace CreateAwsLogSource {
  export type Input = CreateAwsLogSourceRequest;
  export type Output = CreateAwsLogSourceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateCustomLogSource {
  export type Input = CreateCustomLogSourceRequest;
  export type Output = CreateCustomLogSourceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDataLake {
  export type Input = CreateDataLakeRequest;
  export type Output = CreateDataLakeResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDataLakeExceptionSubscription {
  export type Input = CreateDataLakeExceptionSubscriptionRequest;
  export type Output = CreateDataLakeExceptionSubscriptionResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDataLakeOrganizationConfiguration {
  export type Input = CreateDataLakeOrganizationConfigurationRequest;
  export type Output = CreateDataLakeOrganizationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateSubscriber {
  export type Input = CreateSubscriberRequest;
  export type Output = CreateSubscriberResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateSubscriberNotification {
  export type Input = CreateSubscriberNotificationRequest;
  export type Output = CreateSubscriberNotificationResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteAwsLogSource {
  export type Input = DeleteAwsLogSourceRequest;
  export type Output = DeleteAwsLogSourceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteCustomLogSource {
  export type Input = DeleteCustomLogSourceRequest;
  export type Output = DeleteCustomLogSourceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDataLake {
  export type Input = DeleteDataLakeRequest;
  export type Output = DeleteDataLakeResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDataLakeExceptionSubscription {
  export type Input = DeleteDataLakeExceptionSubscriptionRequest;
  export type Output = DeleteDataLakeExceptionSubscriptionResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDataLakeOrganizationConfiguration {
  export type Input = DeleteDataLakeOrganizationConfigurationRequest;
  export type Output = DeleteDataLakeOrganizationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteSubscriber {
  export type Input = DeleteSubscriberRequest;
  export type Output = DeleteSubscriberResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteSubscriberNotification {
  export type Input = DeleteSubscriberNotificationRequest;
  export type Output = DeleteSubscriberNotificationResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeregisterDataLakeDelegatedAdministrator {
  export type Input = DeregisterDataLakeDelegatedAdministratorRequest;
  export type Output = DeregisterDataLakeDelegatedAdministratorResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetDataLakeExceptionSubscription {
  export type Input = GetDataLakeExceptionSubscriptionRequest;
  export type Output = GetDataLakeExceptionSubscriptionResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetDataLakeOrganizationConfiguration {
  export type Input = GetDataLakeOrganizationConfigurationRequest;
  export type Output = GetDataLakeOrganizationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetDataLakeSources {
  export type Input = GetDataLakeSourcesRequest;
  export type Output = GetDataLakeSourcesResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetSubscriber {
  export type Input = GetSubscriberRequest;
  export type Output = GetSubscriberResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDataLakeExceptions {
  export type Input = ListDataLakeExceptionsRequest;
  export type Output = ListDataLakeExceptionsResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDataLakes {
  export type Input = ListDataLakesRequest;
  export type Output = ListDataLakesResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListLogSources {
  export type Input = ListLogSourcesRequest;
  export type Output = ListLogSourcesResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListSubscribers {
  export type Input = ListSubscribersRequest;
  export type Output = ListSubscribersResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace RegisterDataLakeDelegatedAdministrator {
  export type Input = RegisterDataLakeDelegatedAdministratorRequest;
  export type Output = RegisterDataLakeDelegatedAdministratorResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDataLake {
  export type Input = UpdateDataLakeRequest;
  export type Output = UpdateDataLakeResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDataLakeExceptionSubscription {
  export type Input = UpdateDataLakeExceptionSubscriptionRequest;
  export type Output = UpdateDataLakeExceptionSubscriptionResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateSubscriber {
  export type Input = UpdateSubscriberRequest;
  export type Output = UpdateSubscriberResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateSubscriberNotification {
  export type Input = UpdateSubscriberNotificationRequest;
  export type Output = UpdateSubscriberNotificationResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

