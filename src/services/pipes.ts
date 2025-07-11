import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Pipes {
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InternalException | NotFoundException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InternalException | NotFoundException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalException | NotFoundException | ValidationException | CommonAwsError
  >;
}

export type Arn = string;

export type ArnOrJsonPath = string;

export type ArnOrUrl = string;

export type AssignPublicIp = string;

export interface AwsVpcConfiguration {
  Subnets: Array<string>;
  SecurityGroups?: Array<string>;
  AssignPublicIp?: string;
}
export interface BatchArrayProperties {
  Size?: number;
}
export type BatchArraySize = number;

export interface BatchContainerOverrides {
  Command?: Array<string>;
  Environment?: Array<BatchEnvironmentVariable>;
  InstanceType?: string;
  ResourceRequirements?: Array<BatchResourceRequirement>;
}
export type BatchDependsOn = Array<BatchJobDependency>;
export interface BatchEnvironmentVariable {
  Name?: string;
  Value?: string;
}
export type BatchEnvironmentVariableList = Array<BatchEnvironmentVariable>;
export interface BatchJobDependency {
  JobId?: string;
  Type?: string;
}
export type BatchJobDependencyType = string;

export type BatchParametersMap = Record<string, string>;
export interface BatchResourceRequirement {
  Type: string;
  Value: string;
}
export type BatchResourceRequirementsList = Array<BatchResourceRequirement>;
export type BatchResourceRequirementType = string;

export type BatchRetryAttempts = number;

export interface BatchRetryStrategy {
  Attempts?: number;
}
export type PipesBoolean = boolean;

export type CapacityProvider = string;

export type CapacityProviderStrategy = Array<CapacityProviderStrategyItem>;
export interface CapacityProviderStrategyItem {
  capacityProvider: string;
  weight?: number;
  base?: number;
}
export type CapacityProviderStrategyItemBase = number;

export type CapacityProviderStrategyItemWeight = number;

export type CloudwatchLogGroupArn = string;

export interface CloudwatchLogsLogDestination {
  LogGroupArn?: string;
}
export interface CloudwatchLogsLogDestinationParameters {
  LogGroupArn: string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface CreatePipeRequest {
  Name: string;
  Description?: string;
  DesiredState?: string;
  Source: string;
  SourceParameters?: PipeSourceParameters;
  Enrichment?: string;
  EnrichmentParameters?: PipeEnrichmentParameters;
  Target: string;
  TargetParameters?: PipeTargetParameters;
  RoleArn: string;
  Tags?: Record<string, string>;
  LogConfiguration?: PipeLogConfigurationParameters;
  KmsKeyIdentifier?: string;
}
export interface CreatePipeResponse {
  Arn?: string;
  Name?: string;
  DesiredState?: string;
  CurrentState?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export type Database = string;

export type DbUser = string;

export interface DeadLetterConfig {
  Arn?: string;
}
export interface DeletePipeRequest {
  Name: string;
}
export interface DeletePipeResponse {
  Arn?: string;
  Name?: string;
  DesiredState?: string;
  CurrentState?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export interface DescribePipeRequest {
  Name: string;
}
export interface DescribePipeResponse {
  Arn?: string;
  Name?: string;
  Description?: string;
  DesiredState?: string;
  CurrentState?: string;
  StateReason?: string;
  Source?: string;
  SourceParameters?: PipeSourceParameters;
  Enrichment?: string;
  EnrichmentParameters?: PipeEnrichmentParameters;
  Target?: string;
  TargetParameters?: PipeTargetParameters;
  RoleArn?: string;
  Tags?: Record<string, string>;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  LogConfiguration?: PipeLogConfiguration;
  KmsKeyIdentifier?: string;
}
export interface DimensionMapping {
  DimensionValue: string;
  DimensionValueType: string;
  DimensionName: string;
}
export type DimensionMappings = Array<DimensionMapping>;
export type DimensionName = string;

export type DimensionValue = string;

export type DimensionValueType = string;

export type DynamoDBStreamStartPosition = string;

export interface EcsContainerOverride {
  Command?: Array<string>;
  Cpu?: number;
  Environment?: Array<EcsEnvironmentVariable>;
  EnvironmentFiles?: Array<EcsEnvironmentFile>;
  Memory?: number;
  MemoryReservation?: number;
  Name?: string;
  ResourceRequirements?: Array<EcsResourceRequirement>;
}
export type EcsContainerOverrideList = Array<EcsContainerOverride>;
export interface EcsEnvironmentFile {
  type: string;
  value: string;
}
export type EcsEnvironmentFileList = Array<EcsEnvironmentFile>;
export type EcsEnvironmentFileType = string;

export interface EcsEnvironmentVariable {
  name?: string;
  value?: string;
}
export type EcsEnvironmentVariableList = Array<EcsEnvironmentVariable>;
export interface EcsEphemeralStorage {
  sizeInGiB: number;
}
export interface EcsInferenceAcceleratorOverride {
  deviceName?: string;
  deviceType?: string;
}
export type EcsInferenceAcceleratorOverrideList =
  Array<EcsInferenceAcceleratorOverride>;
export interface EcsResourceRequirement {
  type: string;
  value: string;
}
export type EcsResourceRequirementsList = Array<EcsResourceRequirement>;
export type EcsResourceRequirementType = string;

export interface EcsTaskOverride {
  ContainerOverrides?: Array<EcsContainerOverride>;
  Cpu?: string;
  EphemeralStorage?: EcsEphemeralStorage;
  ExecutionRoleArn?: string;
  InferenceAcceleratorOverrides?: Array<EcsInferenceAcceleratorOverride>;
  Memory?: string;
  TaskRoleArn?: string;
}
export type EndpointString = string;

export type EphemeralStorageSize = number;

export type EpochTimeUnit = string;

export type ErrorMessage = string;

export type EventBridgeDetailType = string;

export type EventBridgeEndpointId = string;

export type EventBridgeEventResourceList = Array<string>;
export type EventBridgeEventSource = string;

export type EventPattern = string;

export interface Filter {
  Pattern?: string;
}
export interface FilterCriteria {
  Filters?: Array<Filter>;
}
export type FilterList = Array<Filter>;
export type FirehoseArn = string;

export interface FirehoseLogDestination {
  DeliveryStreamArn?: string;
}
export interface FirehoseLogDestinationParameters {
  DeliveryStreamArn: string;
}
export type HeaderKey = string;

export type HeaderParametersMap = Record<string, string>;
export type HeaderValue = string;

export type IncludeExecutionData = Array<string>;
export type IncludeExecutionDataOption = string;

export type InputTemplate = string;

export declare class InternalException extends EffectData.TaggedError(
  "InternalException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type JsonPath = string;

export type KafkaBootstrapServers = Array<string>;
export type KafkaTopicName = string;

export type KinesisPartitionKey = string;

export type KinesisStreamStartPosition = string;

export type KmsKeyIdentifier = string;

export type LaunchType = string;

export type LimitMax10 = number;

export type LimitMax100 = number;

export type LimitMax10000 = number;

export type LimitMin1 = number;

export interface ListPipesRequest {
  NamePrefix?: string;
  DesiredState?: string;
  CurrentState?: string;
  SourcePrefix?: string;
  TargetPrefix?: string;
  NextToken?: string;
  Limit?: number;
}
export interface ListPipesResponse {
  Pipes?: Array<Pipe>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type LogLevel = string;

export type LogStreamName = string;

export type MaximumBatchingWindowInSeconds = number;

export type MaximumRecordAgeInSeconds = number;

export type MaximumRetryAttemptsESM = number;

export type MeasureName = string;

export type MeasureValue = string;

export type MeasureValueType = string;

export type MessageDeduplicationId = string;

export type MessageGroupId = string;

export type MQBrokerAccessCredentials = { BasicAuth: string };
export type MQBrokerQueueName = string;

export type MSKAccessCredentials =
  | { SaslScram512Auth: string }
  | { ClientCertificateTlsAuth: string };
export type MSKStartPosition = string;

export interface MultiMeasureAttributeMapping {
  MeasureValue: string;
  MeasureValueType: string;
  MultiMeasureAttributeName: string;
}
export type MultiMeasureAttributeMappings = Array<MultiMeasureAttributeMapping>;
export type MultiMeasureAttributeName = string;

export interface MultiMeasureMapping {
  MultiMeasureName: string;
  MultiMeasureAttributeMappings: Array<MultiMeasureAttributeMapping>;
}
export type MultiMeasureMappings = Array<MultiMeasureMapping>;
export type MultiMeasureName = string;

export interface NetworkConfiguration {
  awsvpcConfiguration?: AwsVpcConfiguration;
}
export type NextToken = string;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
}> {}
export type OnPartialBatchItemFailureStreams = string;

export type OptionalArn = string;

export type PathParameter = string;

export type PathParameterList = Array<string>;
export interface Pipe {
  Name?: string;
  Arn?: string;
  DesiredState?: string;
  CurrentState?: string;
  StateReason?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  Source?: string;
  Target?: string;
  Enrichment?: string;
}
export type PipeArn = string;

export type PipeDescription = string;

export interface PipeEnrichmentHttpParameters {
  PathParameterValues?: Array<string>;
  HeaderParameters?: Record<string, string>;
  QueryStringParameters?: Record<string, string>;
}
export interface PipeEnrichmentParameters {
  InputTemplate?: string;
  HttpParameters?: PipeEnrichmentHttpParameters;
}
export type PipeList = Array<Pipe>;
export interface PipeLogConfiguration {
  S3LogDestination?: S3LogDestination;
  FirehoseLogDestination?: FirehoseLogDestination;
  CloudwatchLogsLogDestination?: CloudwatchLogsLogDestination;
  Level?: string;
  IncludeExecutionData?: Array<string>;
}
export interface PipeLogConfigurationParameters {
  S3LogDestination?: S3LogDestinationParameters;
  FirehoseLogDestination?: FirehoseLogDestinationParameters;
  CloudwatchLogsLogDestination?: CloudwatchLogsLogDestinationParameters;
  Level: string;
  IncludeExecutionData?: Array<string>;
}
export type PipeName = string;

export interface PipeSourceActiveMQBrokerParameters {
  Credentials: MQBrokerAccessCredentials;
  QueueName: string;
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
}
export interface PipeSourceDynamoDBStreamParameters {
  BatchSize?: number;
  DeadLetterConfig?: DeadLetterConfig;
  OnPartialBatchItemFailure?: string;
  MaximumBatchingWindowInSeconds?: number;
  MaximumRecordAgeInSeconds?: number;
  MaximumRetryAttempts?: number;
  ParallelizationFactor?: number;
  StartingPosition: string;
}
export interface PipeSourceKinesisStreamParameters {
  BatchSize?: number;
  DeadLetterConfig?: DeadLetterConfig;
  OnPartialBatchItemFailure?: string;
  MaximumBatchingWindowInSeconds?: number;
  MaximumRecordAgeInSeconds?: number;
  MaximumRetryAttempts?: number;
  ParallelizationFactor?: number;
  StartingPosition: string;
  StartingPositionTimestamp?: Date | string;
}
export interface PipeSourceManagedStreamingKafkaParameters {
  TopicName: string;
  StartingPosition?: string;
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
  ConsumerGroupID?: string;
  Credentials?: MSKAccessCredentials;
}
export interface PipeSourceParameters {
  FilterCriteria?: FilterCriteria;
  KinesisStreamParameters?: PipeSourceKinesisStreamParameters;
  DynamoDBStreamParameters?: PipeSourceDynamoDBStreamParameters;
  SqsQueueParameters?: PipeSourceSqsQueueParameters;
  ActiveMQBrokerParameters?: PipeSourceActiveMQBrokerParameters;
  RabbitMQBrokerParameters?: PipeSourceRabbitMQBrokerParameters;
  ManagedStreamingKafkaParameters?: PipeSourceManagedStreamingKafkaParameters;
  SelfManagedKafkaParameters?: PipeSourceSelfManagedKafkaParameters;
}
export interface PipeSourceRabbitMQBrokerParameters {
  Credentials: MQBrokerAccessCredentials;
  QueueName: string;
  VirtualHost?: string;
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
}
export interface PipeSourceSelfManagedKafkaParameters {
  TopicName: string;
  StartingPosition?: string;
  AdditionalBootstrapServers?: Array<string>;
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
  ConsumerGroupID?: string;
  Credentials?: SelfManagedKafkaAccessConfigurationCredentials;
  ServerRootCaCertificate?: string;
  Vpc?: SelfManagedKafkaAccessConfigurationVpc;
}
export interface PipeSourceSqsQueueParameters {
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
}
export type PipeState = string;

export type PipeStateReason = string;

export interface PipeTargetBatchJobParameters {
  JobDefinition: string;
  JobName: string;
  ArrayProperties?: BatchArrayProperties;
  RetryStrategy?: BatchRetryStrategy;
  ContainerOverrides?: BatchContainerOverrides;
  DependsOn?: Array<BatchJobDependency>;
  Parameters?: Record<string, string>;
}
export interface PipeTargetCloudWatchLogsParameters {
  LogStreamName?: string;
  Timestamp?: string;
}
export interface PipeTargetEcsTaskParameters {
  TaskDefinitionArn: string;
  TaskCount?: number;
  LaunchType?: string;
  NetworkConfiguration?: NetworkConfiguration;
  PlatformVersion?: string;
  Group?: string;
  CapacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
  EnableECSManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  PlacementConstraints?: Array<PlacementConstraint>;
  PlacementStrategy?: Array<PlacementStrategy>;
  PropagateTags?: string;
  ReferenceId?: string;
  Overrides?: EcsTaskOverride;
  Tags?: Array<Tag>;
}
export interface PipeTargetEventBridgeEventBusParameters {
  EndpointId?: string;
  DetailType?: string;
  Source?: string;
  Resources?: Array<string>;
  Time?: string;
}
export interface PipeTargetHttpParameters {
  PathParameterValues?: Array<string>;
  HeaderParameters?: Record<string, string>;
  QueryStringParameters?: Record<string, string>;
}
export type PipeTargetInvocationType = string;

export interface PipeTargetKinesisStreamParameters {
  PartitionKey: string;
}
export interface PipeTargetLambdaFunctionParameters {
  InvocationType?: string;
}
export interface PipeTargetParameters {
  InputTemplate?: string;
  LambdaFunctionParameters?: PipeTargetLambdaFunctionParameters;
  StepFunctionStateMachineParameters?: PipeTargetStateMachineParameters;
  KinesisStreamParameters?: PipeTargetKinesisStreamParameters;
  EcsTaskParameters?: PipeTargetEcsTaskParameters;
  BatchJobParameters?: PipeTargetBatchJobParameters;
  SqsQueueParameters?: PipeTargetSqsQueueParameters;
  HttpParameters?: PipeTargetHttpParameters;
  RedshiftDataParameters?: PipeTargetRedshiftDataParameters;
  SageMakerPipelineParameters?: PipeTargetSageMakerPipelineParameters;
  EventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParameters;
  CloudWatchLogsParameters?: PipeTargetCloudWatchLogsParameters;
  TimestreamParameters?: PipeTargetTimestreamParameters;
}
export interface PipeTargetRedshiftDataParameters {
  SecretManagerArn?: string;
  Database: string;
  DbUser?: string;
  StatementName?: string;
  WithEvent?: boolean;
  Sqls: Array<string>;
}
export interface PipeTargetSageMakerPipelineParameters {
  PipelineParameterList?: Array<SageMakerPipelineParameter>;
}
export interface PipeTargetSqsQueueParameters {
  MessageGroupId?: string;
  MessageDeduplicationId?: string;
}
export interface PipeTargetStateMachineParameters {
  InvocationType?: string;
}
export interface PipeTargetTimestreamParameters {
  TimeValue: string;
  EpochTimeUnit?: string;
  TimeFieldType?: string;
  TimestampFormat?: string;
  VersionValue: string;
  DimensionMappings: Array<DimensionMapping>;
  SingleMeasureMappings?: Array<SingleMeasureMapping>;
  MultiMeasureMappings?: Array<MultiMeasureMapping>;
}
export interface PlacementConstraint {
  type?: string;
  expression?: string;
}
export type PlacementConstraintExpression = string;

export type PlacementConstraints = Array<PlacementConstraint>;
export type PlacementConstraintType = string;

export type PlacementStrategies = Array<PlacementStrategy>;
export interface PlacementStrategy {
  type?: string;
  field?: string;
}
export type PlacementStrategyField = string;

export type PlacementStrategyType = string;

export type PropagateTags = string;

export type QueryStringKey = string;

export type QueryStringParametersMap = Record<string, string>;
export type QueryStringValue = string;

export type ReferenceId = string;

export type RequestedPipeState = string;

export type RequestedPipeStateDescribeResponse = string;

export type ResourceArn = string;

export type RoleArn = string;

export interface S3LogDestination {
  BucketName?: string;
  Prefix?: string;
  BucketOwner?: string;
  OutputFormat?: string;
}
export interface S3LogDestinationParameters {
  BucketName: string;
  BucketOwner: string;
  OutputFormat?: string;
  Prefix?: string;
}
export type S3OutputFormat = string;

export interface SageMakerPipelineParameter {
  Name: string;
  Value: string;
}
export type SageMakerPipelineParameterList = Array<SageMakerPipelineParameter>;
export type SageMakerPipelineParameterName = string;

export type SageMakerPipelineParameterValue = string;

export type SecretManagerArn = string;

export type SecretManagerArnOrJsonPath = string;

export type SecurityGroup = string;

export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export type SecurityGroups = Array<string>;
export type SelfManagedKafkaAccessConfigurationCredentials =
  | { BasicAuth: string }
  | { SaslScram512Auth: string }
  | { SaslScram256Auth: string }
  | { ClientCertificateTlsAuth: string };
export interface SelfManagedKafkaAccessConfigurationVpc {
  Subnets?: Array<string>;
  SecurityGroup?: Array<string>;
}
export type SelfManagedKafkaStartPosition = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
}> {}
export interface SingleMeasureMapping {
  MeasureValue: string;
  MeasureValueType: string;
  MeasureName: string;
}
export type SingleMeasureMappings = Array<SingleMeasureMapping>;
export type Sql = string;

export type Sqls = Array<string>;
export interface StartPipeRequest {
  Name: string;
}
export interface StartPipeResponse {
  Arn?: string;
  Name?: string;
  DesiredState?: string;
  CurrentState?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export type StatementName = string;

export interface StopPipeRequest {
  Name: string;
}
export interface StopPipeResponse {
  Arn?: string;
  Name?: string;
  DesiredState?: string;
  CurrentState?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export type PipesString = string;

export type StringList = Array<string>;
export type Subnet = string;

export type SubnetId = string;

export type SubnetIds = Array<string>;
export type Subnets = Array<string>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
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
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export type TimeFieldType = string;

export type Timestamp = Date | string;

export type TimestampFormat = string;

export type TimeValue = string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdatePipeRequest {
  Name: string;
  Description?: string;
  DesiredState?: string;
  SourceParameters?: UpdatePipeSourceParameters;
  Enrichment?: string;
  EnrichmentParameters?: PipeEnrichmentParameters;
  Target?: string;
  TargetParameters?: PipeTargetParameters;
  RoleArn: string;
  LogConfiguration?: PipeLogConfigurationParameters;
  KmsKeyIdentifier?: string;
}
export interface UpdatePipeResponse {
  Arn?: string;
  Name?: string;
  DesiredState?: string;
  CurrentState?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export interface UpdatePipeSourceActiveMQBrokerParameters {
  Credentials: MQBrokerAccessCredentials;
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
}
export interface UpdatePipeSourceDynamoDBStreamParameters {
  BatchSize?: number;
  DeadLetterConfig?: DeadLetterConfig;
  OnPartialBatchItemFailure?: string;
  MaximumBatchingWindowInSeconds?: number;
  MaximumRecordAgeInSeconds?: number;
  MaximumRetryAttempts?: number;
  ParallelizationFactor?: number;
}
export interface UpdatePipeSourceKinesisStreamParameters {
  BatchSize?: number;
  DeadLetterConfig?: DeadLetterConfig;
  OnPartialBatchItemFailure?: string;
  MaximumBatchingWindowInSeconds?: number;
  MaximumRecordAgeInSeconds?: number;
  MaximumRetryAttempts?: number;
  ParallelizationFactor?: number;
}
export interface UpdatePipeSourceManagedStreamingKafkaParameters {
  BatchSize?: number;
  Credentials?: MSKAccessCredentials;
  MaximumBatchingWindowInSeconds?: number;
}
export interface UpdatePipeSourceParameters {
  FilterCriteria?: FilterCriteria;
  KinesisStreamParameters?: UpdatePipeSourceKinesisStreamParameters;
  DynamoDBStreamParameters?: UpdatePipeSourceDynamoDBStreamParameters;
  SqsQueueParameters?: UpdatePipeSourceSqsQueueParameters;
  ActiveMQBrokerParameters?: UpdatePipeSourceActiveMQBrokerParameters;
  RabbitMQBrokerParameters?: UpdatePipeSourceRabbitMQBrokerParameters;
  ManagedStreamingKafkaParameters?: UpdatePipeSourceManagedStreamingKafkaParameters;
  SelfManagedKafkaParameters?: UpdatePipeSourceSelfManagedKafkaParameters;
}
export interface UpdatePipeSourceRabbitMQBrokerParameters {
  Credentials: MQBrokerAccessCredentials;
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
}
export interface UpdatePipeSourceSelfManagedKafkaParameters {
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
  Credentials?: SelfManagedKafkaAccessConfigurationCredentials;
  ServerRootCaCertificate?: string;
  Vpc?: SelfManagedKafkaAccessConfigurationVpc;
}
export interface UpdatePipeSourceSqsQueueParameters {
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
}
export type URI = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type VersionValue = string;

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}
