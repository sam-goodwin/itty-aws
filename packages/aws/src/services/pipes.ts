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
const ns = /*@__PURE__*/ T.XmlNamespace("http://events.amazonaws.com/doc/2015-10-07");
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "Pipes", serviceShapeName: "Pipes" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "pipes" });
const ver = /*@__PURE__*/ T.ServiceVersion("2015-10-07");
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
              `https://pipes-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://pipes-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://pipes.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://pipes.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalException
  extends /*@__PURE__*/ S.TaggedError<InternalException>()(
    "InternalException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
      serviceCode: S.String,
      quotaCode: S.String,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(104, __c13, 0)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type PipeName = string;
export type PipeDescription = string | redacted.Redacted<string>;
export type RequestedPipeState = string;
export type ArnOrUrl = string;
export type EventPattern = string | redacted.Redacted<string>;
export interface Filter {
  Pattern?: string | redacted.Redacted<string>;
}
export type FilterList = Filter[];
export interface FilterCriteria {
  Filters?: Filter[];
}
export type LimitMax10000 = number;
export type Arn = string;
export interface DeadLetterConfig {
  Arn?: string;
}
export type OnPartialBatchItemFailureStreams = string;
export type MaximumBatchingWindowInSeconds = number;
export type MaximumRecordAgeInSeconds = number;
export type MaximumRetryAttemptsESM = number;
export type LimitMax10 = number;
export type KinesisStreamStartPosition = string;
export interface PipeSourceKinesisStreamParameters {
  BatchSize?: number;
  DeadLetterConfig?: DeadLetterConfig;
  OnPartialBatchItemFailure?: string;
  MaximumBatchingWindowInSeconds?: number;
  MaximumRecordAgeInSeconds?: number;
  MaximumRetryAttempts?: number;
  ParallelizationFactor?: number;
  StartingPosition: string;
  StartingPositionTimestamp?: Date;
}
export type DynamoDBStreamStartPosition = string;
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
export interface PipeSourceSqsQueueParameters {
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
}
export type SecretManagerArn = string;
export type MQBrokerAccessCredentials = { BasicAuth: string };
export type MQBrokerQueueName = string | redacted.Redacted<string>;
export interface PipeSourceActiveMQBrokerParameters {
  Credentials: MQBrokerAccessCredentials;
  QueueName: string | redacted.Redacted<string>;
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
}
export type URI = string | redacted.Redacted<string>;
export interface PipeSourceRabbitMQBrokerParameters {
  Credentials: MQBrokerAccessCredentials;
  QueueName: string | redacted.Redacted<string>;
  VirtualHost?: string | redacted.Redacted<string>;
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
}
export type KafkaTopicName = string | redacted.Redacted<string>;
export type MSKStartPosition = string;
export type MSKAccessCredentials =
  | { SaslScram512Auth: string; ClientCertificateTlsAuth?: never }
  | { SaslScram512Auth?: never; ClientCertificateTlsAuth: string };
export interface PipeSourceManagedStreamingKafkaParameters {
  TopicName: string | redacted.Redacted<string>;
  StartingPosition?: string;
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
  ConsumerGroupID?: string | redacted.Redacted<string>;
  Credentials?: MSKAccessCredentials;
}
export type SelfManagedKafkaStartPosition = string;
export type EndpointString = string | redacted.Redacted<string>;
export type KafkaBootstrapServers = (string | redacted.Redacted<string>)[];
export type SelfManagedKafkaAccessConfigurationCredentials =
  | {
      BasicAuth: string;
      SaslScram512Auth?: never;
      SaslScram256Auth?: never;
      ClientCertificateTlsAuth?: never;
    }
  | {
      BasicAuth?: never;
      SaslScram512Auth: string;
      SaslScram256Auth?: never;
      ClientCertificateTlsAuth?: never;
    }
  | {
      BasicAuth?: never;
      SaslScram512Auth?: never;
      SaslScram256Auth: string;
      ClientCertificateTlsAuth?: never;
    }
  | {
      BasicAuth?: never;
      SaslScram512Auth?: never;
      SaslScram256Auth?: never;
      ClientCertificateTlsAuth: string;
    };
export type SubnetId = string | redacted.Redacted<string>;
export type SubnetIds = (string | redacted.Redacted<string>)[];
export type SecurityGroupId = string | redacted.Redacted<string>;
export type SecurityGroupIds = (string | redacted.Redacted<string>)[];
export interface SelfManagedKafkaAccessConfigurationVpc {
  Subnets?: (string | redacted.Redacted<string>)[];
  SecurityGroup?: (string | redacted.Redacted<string>)[];
}
export interface PipeSourceSelfManagedKafkaParameters {
  TopicName: string | redacted.Redacted<string>;
  StartingPosition?: string;
  AdditionalBootstrapServers?: (string | redacted.Redacted<string>)[];
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
  ConsumerGroupID?: string | redacted.Redacted<string>;
  Credentials?: SelfManagedKafkaAccessConfigurationCredentials;
  ServerRootCaCertificate?: string;
  Vpc?: SelfManagedKafkaAccessConfigurationVpc;
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
export type OptionalArn = string;
export type InputTemplate = string | redacted.Redacted<string>;
export type PathParameter = string | redacted.Redacted<string>;
export type PathParameterList = (string | redacted.Redacted<string>)[];
export type HeaderKey = string;
export type HeaderValue = string | redacted.Redacted<string>;
export type HeaderParametersMap = { [key: string]: string | redacted.Redacted<string> | undefined };
export type QueryStringKey = string;
export type QueryStringValue = string | redacted.Redacted<string>;
export type QueryStringParametersMap = {
  [key: string]: string | redacted.Redacted<string> | undefined;
};
export interface PipeEnrichmentHttpParameters {
  PathParameterValues?: (string | redacted.Redacted<string>)[];
  HeaderParameters?: { [key: string]: string | redacted.Redacted<string> | undefined };
  QueryStringParameters?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
export interface PipeEnrichmentParameters {
  InputTemplate?: string | redacted.Redacted<string>;
  HttpParameters?: PipeEnrichmentHttpParameters;
}
export type PipeTargetInvocationType = string;
export interface PipeTargetLambdaFunctionParameters {
  InvocationType?: string;
}
export interface PipeTargetStateMachineParameters {
  InvocationType?: string;
}
export type KinesisPartitionKey = string | redacted.Redacted<string>;
export interface PipeTargetKinesisStreamParameters {
  PartitionKey: string | redacted.Redacted<string>;
}
export type ArnOrJsonPath = string;
export type LimitMin1 = number;
export type LaunchType = string;
export type Subnet = string | redacted.Redacted<string>;
export type Subnets = (string | redacted.Redacted<string>)[];
export type SecurityGroup = string | redacted.Redacted<string>;
export type SecurityGroups = (string | redacted.Redacted<string>)[];
export type AssignPublicIp = string;
export interface AwsVpcConfiguration {
  Subnets: (string | redacted.Redacted<string>)[];
  SecurityGroups?: (string | redacted.Redacted<string>)[];
  AssignPublicIp?: string;
}
export interface NetworkConfiguration {
  awsvpcConfiguration?: AwsVpcConfiguration;
}
export type CapacityProvider = string | redacted.Redacted<string>;
export type CapacityProviderStrategyItemWeight = number;
export type CapacityProviderStrategyItemBase = number;
export interface CapacityProviderStrategyItem {
  capacityProvider: string | redacted.Redacted<string>;
  weight?: number;
  base?: number;
}
export type CapacityProviderStrategy = CapacityProviderStrategyItem[];
export type PlacementConstraintType = string;
export type PlacementConstraintExpression = string | redacted.Redacted<string>;
export interface PlacementConstraint {
  type?: string;
  expression?: string | redacted.Redacted<string>;
}
export type PlacementConstraints = PlacementConstraint[];
export type PlacementStrategyType = string;
export type PlacementStrategyField = string | redacted.Redacted<string>;
export interface PlacementStrategy {
  type?: string;
  field?: string | redacted.Redacted<string>;
}
export type PlacementStrategies = PlacementStrategy[];
export type PropagateTags = string;
export type ReferenceId = string | redacted.Redacted<string>;
export type StringList = string[];
export interface EcsEnvironmentVariable {
  name?: string;
  value?: string;
}
export type EcsEnvironmentVariableList = EcsEnvironmentVariable[];
export type EcsEnvironmentFileType = string;
export interface EcsEnvironmentFile {
  type: string;
  value: string;
}
export type EcsEnvironmentFileList = EcsEnvironmentFile[];
export type EcsResourceRequirementType = string;
export interface EcsResourceRequirement {
  type: string;
  value: string;
}
export type EcsResourceRequirementsList = EcsResourceRequirement[];
export interface EcsContainerOverride {
  Command?: string[];
  Cpu?: number;
  Environment?: EcsEnvironmentVariable[];
  EnvironmentFiles?: EcsEnvironmentFile[];
  Memory?: number;
  MemoryReservation?: number;
  Name?: string;
  ResourceRequirements?: EcsResourceRequirement[];
}
export type EcsContainerOverrideList = EcsContainerOverride[];
export type EphemeralStorageSize = number;
export interface EcsEphemeralStorage {
  sizeInGiB: number;
}
export interface EcsInferenceAcceleratorOverride {
  deviceName?: string;
  deviceType?: string;
}
export type EcsInferenceAcceleratorOverrideList = EcsInferenceAcceleratorOverride[];
export interface EcsTaskOverride {
  ContainerOverrides?: EcsContainerOverride[];
  Cpu?: string;
  EphemeralStorage?: EcsEphemeralStorage;
  ExecutionRoleArn?: string;
  InferenceAcceleratorOverrides?: EcsInferenceAcceleratorOverride[];
  Memory?: string;
  TaskRoleArn?: string;
}
export type TagKey = string;
export type TagValue = string | redacted.Redacted<string>;
export interface Tag {
  Key: string;
  Value: string | redacted.Redacted<string>;
}
export type TagList = Tag[];
export interface PipeTargetEcsTaskParameters {
  TaskDefinitionArn: string;
  TaskCount?: number;
  LaunchType?: string;
  NetworkConfiguration?: NetworkConfiguration;
  PlatformVersion?: string;
  Group?: string;
  CapacityProviderStrategy?: CapacityProviderStrategyItem[];
  EnableECSManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  PlacementConstraints?: PlacementConstraint[];
  PlacementStrategy?: PlacementStrategy[];
  PropagateTags?: string;
  ReferenceId?: string | redacted.Redacted<string>;
  Overrides?: EcsTaskOverride;
  Tags?: Tag[];
}
export type BatchArraySize = number;
export interface BatchArrayProperties {
  Size?: number;
}
export type BatchRetryAttempts = number;
export interface BatchRetryStrategy {
  Attempts?: number;
}
export interface BatchEnvironmentVariable {
  Name?: string;
  Value?: string;
}
export type BatchEnvironmentVariableList = BatchEnvironmentVariable[];
export type BatchResourceRequirementType = string;
export interface BatchResourceRequirement {
  Type: string;
  Value: string;
}
export type BatchResourceRequirementsList = BatchResourceRequirement[];
export interface BatchContainerOverrides {
  Command?: string[];
  Environment?: BatchEnvironmentVariable[];
  InstanceType?: string;
  ResourceRequirements?: BatchResourceRequirement[];
}
export type BatchJobDependencyType = string;
export interface BatchJobDependency {
  JobId?: string;
  Type?: string;
}
export type BatchDependsOn = BatchJobDependency[];
export type BatchParametersMap = { [key: string]: string | undefined };
export interface PipeTargetBatchJobParameters {
  JobDefinition: string;
  JobName: string;
  ArrayProperties?: BatchArrayProperties;
  RetryStrategy?: BatchRetryStrategy;
  ContainerOverrides?: BatchContainerOverrides;
  DependsOn?: BatchJobDependency[];
  Parameters?: { [key: string]: string | undefined };
}
export type MessageGroupId = string | redacted.Redacted<string>;
export type MessageDeduplicationId = string | redacted.Redacted<string>;
export interface PipeTargetSqsQueueParameters {
  MessageGroupId?: string | redacted.Redacted<string>;
  MessageDeduplicationId?: string | redacted.Redacted<string>;
}
export interface PipeTargetHttpParameters {
  PathParameterValues?: (string | redacted.Redacted<string>)[];
  HeaderParameters?: { [key: string]: string | redacted.Redacted<string> | undefined };
  QueryStringParameters?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
export type SecretManagerArnOrJsonPath = string;
export type Database = string | redacted.Redacted<string>;
export type DbUser = string | redacted.Redacted<string>;
export type StatementName = string | redacted.Redacted<string>;
export type Sql = string | redacted.Redacted<string>;
export type Sqls = (string | redacted.Redacted<string>)[];
export interface PipeTargetRedshiftDataParameters {
  SecretManagerArn?: string;
  Database: string | redacted.Redacted<string>;
  DbUser?: string | redacted.Redacted<string>;
  StatementName?: string | redacted.Redacted<string>;
  WithEvent?: boolean;
  Sqls: (string | redacted.Redacted<string>)[];
}
export type SageMakerPipelineParameterName = string | redacted.Redacted<string>;
export type SageMakerPipelineParameterValue = string | redacted.Redacted<string>;
export interface SageMakerPipelineParameter {
  Name: string | redacted.Redacted<string>;
  Value: string | redacted.Redacted<string>;
}
export type SageMakerPipelineParameterList = SageMakerPipelineParameter[];
export interface PipeTargetSageMakerPipelineParameters {
  PipelineParameterList?: SageMakerPipelineParameter[];
}
export type EventBridgeEndpointId = string | redacted.Redacted<string>;
export type EventBridgeDetailType = string | redacted.Redacted<string>;
export type EventBridgeEventSource = string | redacted.Redacted<string>;
export type EventBridgeEventResourceList = string[];
export type JsonPath = string;
export interface PipeTargetEventBridgeEventBusParameters {
  EndpointId?: string | redacted.Redacted<string>;
  DetailType?: string | redacted.Redacted<string>;
  Source?: string | redacted.Redacted<string>;
  Resources?: string[];
  Time?: string;
}
export type LogStreamName = string;
export interface PipeTargetCloudWatchLogsParameters {
  LogStreamName?: string;
  Timestamp?: string;
}
export type TimeValue = string;
export type EpochTimeUnit = string;
export type TimeFieldType = string;
export type TimestampFormat = string;
export type VersionValue = string;
export type DimensionValue = string;
export type DimensionValueType = string;
export type DimensionName = string;
export interface DimensionMapping {
  DimensionValue: string;
  DimensionValueType: string;
  DimensionName: string;
}
export type DimensionMappings = DimensionMapping[];
export type MeasureValue = string;
export type MeasureValueType = string;
export type MeasureName = string;
export interface SingleMeasureMapping {
  MeasureValue: string;
  MeasureValueType: string;
  MeasureName: string;
}
export type SingleMeasureMappings = SingleMeasureMapping[];
export type MultiMeasureName = string;
export type MultiMeasureAttributeName = string;
export interface MultiMeasureAttributeMapping {
  MeasureValue: string;
  MeasureValueType: string;
  MultiMeasureAttributeName: string;
}
export type MultiMeasureAttributeMappings = MultiMeasureAttributeMapping[];
export interface MultiMeasureMapping {
  MultiMeasureName: string;
  MultiMeasureAttributeMappings: MultiMeasureAttributeMapping[];
}
export type MultiMeasureMappings = MultiMeasureMapping[];
export interface PipeTargetTimestreamParameters {
  TimeValue: string;
  EpochTimeUnit?: string;
  TimeFieldType?: string;
  TimestampFormat?: string;
  VersionValue: string;
  DimensionMappings: DimensionMapping[];
  SingleMeasureMappings?: SingleMeasureMapping[];
  MultiMeasureMappings?: MultiMeasureMapping[];
}
export interface PipeTargetParameters {
  InputTemplate?: string | redacted.Redacted<string>;
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
export type RoleArn = string;
export type TagMap = { [key: string]: string | redacted.Redacted<string> | undefined };
export type S3OutputFormat = string;
export interface S3LogDestinationParameters {
  BucketName: string;
  BucketOwner: string;
  OutputFormat?: string;
  Prefix?: string;
}
export type FirehoseArn = string;
export interface FirehoseLogDestinationParameters {
  DeliveryStreamArn: string;
}
export type CloudwatchLogGroupArn = string;
export interface CloudwatchLogsLogDestinationParameters {
  LogGroupArn: string;
}
export type LogLevel = string;
export type IncludeExecutionDataOption = string;
export type IncludeExecutionData = string[];
export interface PipeLogConfigurationParameters {
  S3LogDestination?: S3LogDestinationParameters;
  FirehoseLogDestination?: FirehoseLogDestinationParameters;
  CloudwatchLogsLogDestination?: CloudwatchLogsLogDestinationParameters;
  Level: string;
  IncludeExecutionData?: string[];
}
export type KmsKeyIdentifier = string;
export interface CreatePipeRequest {
  Name: string;
  Description?: string | redacted.Redacted<string>;
  DesiredState?: string;
  Source: string;
  SourceParameters?: PipeSourceParameters;
  Enrichment?: string;
  EnrichmentParameters?: PipeEnrichmentParameters;
  Target: string;
  TargetParameters?: PipeTargetParameters;
  RoleArn: string;
  Tags?: { [key: string]: string | redacted.Redacted<string> | undefined };
  LogConfiguration?: PipeLogConfigurationParameters;
  KmsKeyIdentifier?: string;
}
export type PipeArn = string;
export type PipeState = string;
export interface CreatePipeResponse {
  Arn?: string;
  Name?: string;
  DesiredState?: string;
  CurrentState?: string;
  CreationTime?: Date;
  LastModifiedTime?: Date;
}
export interface DeletePipeRequest {
  Name: string;
}
export type RequestedPipeStateDescribeResponse = string;
export interface DeletePipeResponse {
  Arn?: string;
  Name?: string;
  DesiredState?: string;
  CurrentState?: string;
  CreationTime?: Date;
  LastModifiedTime?: Date;
}
export interface DescribePipeRequest {
  Name: string;
}
export type PipeStateReason = string;
export interface S3LogDestination {
  BucketName?: string;
  Prefix?: string;
  BucketOwner?: string;
  OutputFormat?: string;
}
export interface FirehoseLogDestination {
  DeliveryStreamArn?: string;
}
export interface CloudwatchLogsLogDestination {
  LogGroupArn?: string;
}
export interface PipeLogConfiguration {
  S3LogDestination?: S3LogDestination;
  FirehoseLogDestination?: FirehoseLogDestination;
  CloudwatchLogsLogDestination?: CloudwatchLogsLogDestination;
  Level?: string;
  IncludeExecutionData?: string[];
}
export interface DescribePipeResponse {
  Arn?: string;
  Name?: string;
  Description?: string | redacted.Redacted<string>;
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
  Tags?: { [key: string]: string | redacted.Redacted<string> | undefined };
  CreationTime?: Date;
  LastModifiedTime?: Date;
  LogConfiguration?: PipeLogConfiguration;
  KmsKeyIdentifier?: string;
}
export type ResourceArn = string;
export type NextToken = string | redacted.Redacted<string>;
export type LimitMax100 = number;
export interface ListPipesRequest {
  NamePrefix?: string;
  DesiredState?: string;
  CurrentState?: string;
  SourcePrefix?: string;
  TargetPrefix?: string;
  NextToken?: string | redacted.Redacted<string>;
  Limit?: number;
}
export interface Pipe {
  Name?: string;
  Arn?: string;
  DesiredState?: string;
  CurrentState?: string;
  StateReason?: string;
  CreationTime?: Date;
  LastModifiedTime?: Date;
  Source?: string;
  Target?: string;
  Enrichment?: string;
}
export type PipeList = Pipe[];
export interface ListPipesResponse {
  Pipes?: Pipe[];
  NextToken?: string | redacted.Redacted<string>;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
export interface StartPipeRequest {
  Name: string;
}
export interface StartPipeResponse {
  Arn?: string;
  Name?: string;
  DesiredState?: string;
  CurrentState?: string;
  CreationTime?: Date;
  LastModifiedTime?: Date;
}
export interface StopPipeRequest {
  Name: string;
}
export interface StopPipeResponse {
  Arn?: string;
  Name?: string;
  DesiredState?: string;
  CurrentState?: string;
  CreationTime?: Date;
  LastModifiedTime?: Date;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | redacted.Redacted<string> | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdatePipeSourceKinesisStreamParameters {
  BatchSize?: number;
  DeadLetterConfig?: DeadLetterConfig;
  OnPartialBatchItemFailure?: string;
  MaximumBatchingWindowInSeconds?: number;
  MaximumRecordAgeInSeconds?: number;
  MaximumRetryAttempts?: number;
  ParallelizationFactor?: number;
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
export interface UpdatePipeSourceSqsQueueParameters {
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
}
export interface UpdatePipeSourceActiveMQBrokerParameters {
  Credentials: MQBrokerAccessCredentials;
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
}
export interface UpdatePipeSourceRabbitMQBrokerParameters {
  Credentials: MQBrokerAccessCredentials;
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
}
export interface UpdatePipeSourceManagedStreamingKafkaParameters {
  BatchSize?: number;
  Credentials?: MSKAccessCredentials;
  MaximumBatchingWindowInSeconds?: number;
}
export interface UpdatePipeSourceSelfManagedKafkaParameters {
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
  Credentials?: SelfManagedKafkaAccessConfigurationCredentials;
  ServerRootCaCertificate?: string;
  Vpc?: SelfManagedKafkaAccessConfigurationVpc;
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
export interface UpdatePipeRequest {
  Name: string;
  Description?: string | redacted.Redacted<string>;
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
  CreationTime?: Date;
  LastModifiedTime?: Date;
}
export type ErrorMessage = string;
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type CreatePipeError =
  | ConflictException
  | InternalException
  | NotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces
 * the need for specialized knowledge and integration code.
 */
export const createPipe: API.OperationMethod<
  CreatePipeRequest,
  CreatePipeResponse,
  CreatePipeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<CreatePipeRequest>,
  output: __S(78, __c9, 6) as any as S.Schema<CreatePipeResponse>,
  errors: [
    ConflictException,
    InternalException,
    NotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePipe",
}));

export type DeletePipeError =
  | ConflictException
  | InternalException
  | NotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete an existing pipe. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide.
 */
export const deletePipe: API.OperationMethod<
  DeletePipeRequest,
  DeletePipeResponse,
  DeletePipeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79, __c9, 7) as any as S.Schema<DeletePipeRequest>,
  output: __S(78, __c9, 6) as any as S.Schema<DeletePipeResponse>,
  errors: [
    ConflictException,
    InternalException,
    NotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePipe",
}));

export type DescribePipeError =
  | InternalException
  | NotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the information about an existing pipe. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide.
 */
export const describePipe: API.OperationMethod<
  DescribePipeRequest,
  DescribePipeResponse,
  DescribePipeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80, __c10, 0) as any as S.Schema<DescribePipeRequest>,
  output: __S(85, __c10, 5) as any as S.Schema<DescribePipeResponse>,
  errors: [InternalException, NotFoundException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePipe",
}));

export type ListPipesError =
  | InternalException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the pipes associated with this account. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide.
 */
export const listPipes: API.PaginatedOperationMethod<
  ListPipesRequest,
  ListPipesResponse,
  ListPipesError,
  Credentials | HttpClient.HttpClient,
  Pipe
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(86, __c10, 6) as any as S.Schema<ListPipesRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<ListPipesResponse>,
  errors: [InternalException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPipes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Pipes",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Displays the tags associated with a pipe.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(90, __c11, 2) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(91, __c11, 3) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InternalException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type StartPipeError =
  | ConflictException
  | InternalException
  | NotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Start an existing pipe.
 */
export const startPipe: API.OperationMethod<
  StartPipeRequest,
  StartPipeResponse,
  StartPipeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(92, __c11, 4) as any as S.Schema<StartPipeRequest>,
  output: __S(78, __c9, 6) as any as S.Schema<StartPipeResponse>,
  errors: [
    ConflictException,
    InternalException,
    NotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartPipe",
}));

export type StopPipeError =
  | ConflictException
  | InternalException
  | NotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stop an existing pipe.
 */
export const stopPipe: API.OperationMethod<
  StopPipeRequest,
  StopPipeResponse,
  StopPipeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93, __c11, 5) as any as S.Schema<StopPipeRequest>,
  output: __S(78, __c9, 6) as any as S.Schema<StopPipeResponse>,
  errors: [
    ConflictException,
    InternalException,
    NotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopPipe",
}));

export type TagResourceError =
  | InternalException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Assigns one or more tags (key-value pairs) to the specified pipe. Tags can help you
 * organize and categorize your resources. You can also use them to scope user permissions by
 * granting a user permission to access or change only resources with certain tag
 * values.
 *
 * Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly
 * as strings of characters.
 *
 * You can use the `TagResource` action with a pipe that already has tags. If
 * you specify a new tag key, this tag is appended to the list of tags associated with the
 * pipe. If you specify a tag key that is already associated with the pipe, the new tag value
 * that you specify replaces the previous value for that tag.
 *
 * You can associate as many as 50 tags with a pipe.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(94, __c11, 6) as any as S.Schema<TagResourceRequest>,
  output: __S(95, __c11, 7) as any as S.Schema<TagResourceResponse>,
  errors: [InternalException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes one or more tags from the specified pipes.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(96, __c12, 0) as any as S.Schema<UntagResourceRequest>,
  output: __S(95, __c11, 7) as any as S.Schema<UntagResourceResponse>,
  errors: [InternalException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdatePipeError =
  | ConflictException
  | InternalException
  | NotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update an existing pipe. When you call `UpdatePipe`, EventBridge only the
 * updates fields you have specified in the request; the rest remain unchanged. The exception
 * to this is if you modify any Amazon Web Services-service specific fields in the
 * `SourceParameters`, `EnrichmentParameters`, or
 * `TargetParameters` objects. For example,
 * `DynamoDBStreamParameters` or `EventBridgeEventBusParameters`.
 * EventBridge updates the fields in these objects atomically as one and overrides existing
 * values. This is by design, and means that if you don't specify an optional field in one of
 * these `Parameters` objects, EventBridge sets that field to its system-default
 * value during the update.
 *
 * For more information about pipes, see
 * Amazon EventBridge Pipes in the Amazon EventBridge User Guide.
 */
export const updatePipe: API.OperationMethod<
  UpdatePipeRequest,
  UpdatePipeResponse,
  UpdatePipeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(102, __c12, 6) as any as S.Schema<UpdatePipeRequest>,
  output: __S(78, __c9, 6) as any as S.Schema<UpdatePipeResponse>,
  errors: [
    ConflictException,
    InternalException,
    NotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePipe",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Pattern: S.optional(SensitiveString) })).annotate({
        identifier: "Filter",
      });
    case 1:
      return S.Array(__S(0, __c0, 0));
    case 2:
      return S.suspend(() => S.Struct({ Filters: S.optional(__S(1, __c0, 1)) })).annotate({
        identifier: "FilterCriteria",
      });
    case 3:
      return S.suspend(() => S.Struct({ Arn: S.optional(S.String) })).annotate({
        identifier: "DeadLetterConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          BatchSize: S.optional(S.Number),
          DeadLetterConfig: S.optional(__S(3, __c0, 3)),
          OnPartialBatchItemFailure: S.optional(S.String),
          MaximumBatchingWindowInSeconds: S.optional(S.Number),
          MaximumRecordAgeInSeconds: S.optional(S.Number),
          MaximumRetryAttempts: S.optional(S.Number),
          ParallelizationFactor: S.optional(S.Number),
          StartingPosition: S.String,
          StartingPositionTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "PipeSourceKinesisStreamParameters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          BatchSize: S.optional(S.Number),
          DeadLetterConfig: S.optional(__S(3, __c0, 3)),
          OnPartialBatchItemFailure: S.optional(S.String),
          MaximumBatchingWindowInSeconds: S.optional(S.Number),
          MaximumRecordAgeInSeconds: S.optional(S.Number),
          MaximumRetryAttempts: S.optional(S.Number),
          ParallelizationFactor: S.optional(S.Number),
          StartingPosition: S.String,
        }),
      ).annotate({
        identifier: "PipeSourceDynamoDBStreamParameters",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          BatchSize: S.optional(S.Number),
          MaximumBatchingWindowInSeconds: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "PipeSourceSqsQueueParameters",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ BasicAuth: S.String })]);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Credentials: __S(7, __c0, 7),
          QueueName: SensitiveString,
          BatchSize: S.optional(S.Number),
          MaximumBatchingWindowInSeconds: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "PipeSourceActiveMQBrokerParameters",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Credentials: __S(7, __c0, 7),
          QueueName: SensitiveString,
          VirtualHost: S.optional(SensitiveString),
          BatchSize: S.optional(S.Number),
          MaximumBatchingWindowInSeconds: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "PipeSourceRabbitMQBrokerParameters",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ SaslScram512Auth: S.String }),
        /*@__PURE__*/ S.Struct({ ClientCertificateTlsAuth: S.String }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          TopicName: SensitiveString,
          StartingPosition: S.optional(S.String),
          BatchSize: S.optional(S.Number),
          MaximumBatchingWindowInSeconds: S.optional(S.Number),
          ConsumerGroupID: S.optional(SensitiveString),
          Credentials: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({
        identifier: "PipeSourceManagedStreamingKafkaParameters",
      });
    case 4:
      return S.Array(SensitiveString);
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ BasicAuth: S.String }),
        /*@__PURE__*/ S.Struct({ SaslScram512Auth: S.String }),
        /*@__PURE__*/ S.Struct({ SaslScram256Auth: S.String }),
        /*@__PURE__*/ S.Struct({ ClientCertificateTlsAuth: S.String }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Subnets: S.optional(__S(12, __c1, 4)),
          SecurityGroup: S.optional(__S(12, __c1, 4)),
        }),
      ).annotate({
        identifier: "SelfManagedKafkaAccessConfigurationVpc",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TopicName: SensitiveString,
          StartingPosition: S.optional(S.String),
          AdditionalBootstrapServers: S.optional(__S(12, __c1, 4)),
          BatchSize: S.optional(S.Number),
          MaximumBatchingWindowInSeconds: S.optional(S.Number),
          ConsumerGroupID: S.optional(SensitiveString),
          Credentials: S.optional(__S(13, __c1, 5)),
          ServerRootCaCertificate: S.optional(S.String),
          Vpc: S.optional(__S(14, __c1, 6)),
        }),
      ).annotate({
        identifier: "PipeSourceSelfManagedKafkaParameters",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FilterCriteria: S.optional(__S(2, __c0, 2)),
          KinesisStreamParameters: S.optional(__S(4, __c0, 4)),
          DynamoDBStreamParameters: S.optional(__S(5, __c0, 5)),
          SqsQueueParameters: S.optional(__S(6, __c0, 6)),
          ActiveMQBrokerParameters: S.optional(__S(8, __c1, 0)),
          RabbitMQBrokerParameters: S.optional(__S(9, __c1, 1)),
          ManagedStreamingKafkaParameters: S.optional(__S(11, __c1, 3)),
          SelfManagedKafkaParameters: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({ identifier: "PipeSourceParameters" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ SensitiveString.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          PathParameterValues: S.optional(__S(12, __c1, 4)),
          HeaderParameters: S.optional(__S(17, __c2, 1)),
          QueryStringParameters: S.optional(__S(17, __c2, 1)),
        }),
      ).annotate({
        identifier: "PipeEnrichmentHttpParameters",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          InputTemplate: S.optional(SensitiveString),
          HttpParameters: S.optional(__S(18, __c2, 2)),
        }),
      ).annotate({ identifier: "PipeEnrichmentParameters" });
    case 4:
      return S.suspend(() => S.Struct({ InvocationType: S.optional(S.String) })).annotate({
        identifier: "PipeTargetLambdaFunctionParameters",
      });
    case 5:
      return S.suspend(() => S.Struct({ PartitionKey: SensitiveString })).annotate({
        identifier: "PipeTargetKinesisStreamParameters",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Subnets: __S(12, __c1, 4),
          SecurityGroups: S.optional(__S(12, __c1, 4)),
          AssignPublicIp: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsVpcConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({ awsvpcConfiguration: S.optional(__S(22, __c2, 6)) }),
      ).annotate({ identifier: "NetworkConfiguration" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          capacityProvider: SensitiveString,
          weight: S.optional(S.Number),
          base: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CapacityProviderStrategyItem",
      });
    case 1:
      return S.Array(__S(24, __c3, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ type: S.optional(S.String), expression: S.optional(SensitiveString) }),
      ).annotate({ identifier: "PlacementConstraint" });
    case 3:
      return S.Array(__S(26, __c3, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ type: S.optional(S.String), field: S.optional(SensitiveString) }),
      ).annotate({ identifier: "PlacementStrategy" });
    case 5:
      return S.Array(__S(28, __c3, 4));
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "EcsEnvironmentVariable" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31, __c3, 7));
    case 1:
      return S.suspend(() => S.Struct({ type: S.String, value: S.String })).annotate({
        identifier: "EcsEnvironmentFile",
      });
    case 2:
      return S.Array(__S(33, __c4, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Command: S.optional(__S(30, __c3, 6)),
          Cpu: S.optional(S.Number),
          Environment: S.optional(__S(32, __c4, 0)),
          EnvironmentFiles: S.optional(__S(34, __c4, 2)),
          Memory: S.optional(S.Number),
          MemoryReservation: S.optional(S.Number),
          Name: S.optional(S.String),
          ResourceRequirements: S.optional(__S(34, __c4, 2)),
        }),
      ).annotate({ identifier: "EcsContainerOverride" });
    case 4:
      return S.Array(__S(35, __c4, 3));
    case 5:
      return S.suspend(() => S.Struct({ sizeInGiB: S.Number })).annotate({
        identifier: "EcsEphemeralStorage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ deviceName: S.optional(S.String), deviceType: S.optional(S.String) }),
      ).annotate({
        identifier: "EcsInferenceAcceleratorOverride",
      });
    case 7:
      return S.Array(__S(38, __c4, 6));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ContainerOverrides: S.optional(__S(36, __c4, 4)),
          Cpu: S.optional(S.String),
          EphemeralStorage: S.optional(__S(37, __c4, 5)),
          ExecutionRoleArn: S.optional(S.String),
          InferenceAcceleratorOverrides: S.optional(__S(39, __c4, 7)),
          Memory: S.optional(S.String),
          TaskRoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "EcsTaskOverride" });
    case 1:
      return S.suspend(() => S.Struct({ Key: S.String, Value: SensitiveString })).annotate({
        identifier: "Tag",
      });
    case 2:
      return S.Array(__S(41, __c5, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          TaskDefinitionArn: S.String,
          TaskCount: S.optional(S.Number),
          LaunchType: S.optional(S.String),
          NetworkConfiguration: S.optional(__S(23, __c2, 7)),
          PlatformVersion: S.optional(S.String),
          Group: S.optional(S.String),
          CapacityProviderStrategy: S.optional(__S(25, __c3, 1)),
          EnableECSManagedTags: S.optional(S.Boolean),
          EnableExecuteCommand: S.optional(S.Boolean),
          PlacementConstraints: S.optional(__S(27, __c3, 3)),
          PlacementStrategy: S.optional(__S(29, __c3, 5)),
          PropagateTags: S.optional(S.String),
          ReferenceId: S.optional(SensitiveString),
          Overrides: S.optional(__S(40, __c5, 0)),
          Tags: S.optional(__S(42, __c5, 2)),
        }),
      ).annotate({
        identifier: "PipeTargetEcsTaskParameters",
      });
    case 4:
      return S.suspend(() => S.Struct({ Size: S.optional(S.Number) })).annotate({
        identifier: "BatchArrayProperties",
      });
    case 5:
      return S.suspend(() => S.Struct({ Attempts: S.optional(S.Number) })).annotate({
        identifier: "BatchRetryStrategy",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "BatchEnvironmentVariable" });
    case 7:
      return S.Array(__S(46, __c5, 6));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Type: S.String, Value: S.String })).annotate({
        identifier: "BatchResourceRequirement",
      });
    case 1:
      return S.Array(__S(48, __c6, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Command: S.optional(__S(30, __c3, 6)),
          Environment: S.optional(__S(47, __c5, 7)),
          InstanceType: S.optional(S.String),
          ResourceRequirements: S.optional(__S(49, __c6, 1)),
        }),
      ).annotate({ identifier: "BatchContainerOverrides" });
    case 3:
      return S.suspend(() =>
        S.Struct({ JobId: S.optional(S.String), Type: S.optional(S.String) }),
      ).annotate({ identifier: "BatchJobDependency" });
    case 4:
      return S.Array(__S(51, __c6, 3));
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          JobDefinition: S.String,
          JobName: S.String,
          ArrayProperties: S.optional(__S(44, __c5, 4)),
          RetryStrategy: S.optional(__S(45, __c5, 5)),
          ContainerOverrides: S.optional(__S(50, __c6, 2)),
          DependsOn: S.optional(__S(52, __c6, 4)),
          Parameters: S.optional(__S(53, __c6, 5)),
        }),
      ).annotate({
        identifier: "PipeTargetBatchJobParameters",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MessageGroupId: S.optional(SensitiveString),
          MessageDeduplicationId: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "PipeTargetSqsQueueParameters",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PathParameterValues: S.optional(__S(12, __c1, 4)),
          HeaderParameters: S.optional(__S(17, __c2, 1)),
          QueryStringParameters: S.optional(__S(17, __c2, 1)),
        }),
      ).annotate({ identifier: "PipeTargetHttpParameters" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SecretManagerArn: S.optional(S.String),
          Database: SensitiveString,
          DbUser: S.optional(SensitiveString),
          StatementName: S.optional(SensitiveString),
          WithEvent: S.optional(S.Boolean),
          Sqls: __S(12, __c1, 4),
        }),
      ).annotate({
        identifier: "PipeTargetRedshiftDataParameters",
      });
    case 2:
      return S.suspend(() => S.Struct({ Name: SensitiveString, Value: SensitiveString })).annotate({
        identifier: "SageMakerPipelineParameter",
      });
    case 3:
      return S.Array(__S(58, __c7, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ PipelineParameterList: S.optional(__S(59, __c7, 3)) }),
      ).annotate({
        identifier: "PipeTargetSageMakerPipelineParameters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EndpointId: S.optional(SensitiveString),
          DetailType: S.optional(SensitiveString),
          Source: S.optional(SensitiveString),
          Resources: S.optional(__S(30, __c3, 6)),
          Time: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PipeTargetEventBridgeEventBusParameters",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ LogStreamName: S.optional(S.String), Timestamp: S.optional(S.String) }),
      ).annotate({
        identifier: "PipeTargetCloudWatchLogsParameters",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DimensionValue: S.String,
          DimensionValueType: S.String,
          DimensionName: S.String,
        }),
      ).annotate({ identifier: "DimensionMapping" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(63, __c7, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ MeasureValue: S.String, MeasureValueType: S.String, MeasureName: S.String }),
      ).annotate({ identifier: "SingleMeasureMapping" });
    case 2:
      return S.Array(__S(65, __c8, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          MeasureValue: S.String,
          MeasureValueType: S.String,
          MultiMeasureAttributeName: S.String,
        }),
      ).annotate({
        identifier: "MultiMeasureAttributeMapping",
      });
    case 4:
      return S.Array(__S(67, __c8, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          MultiMeasureName: S.String,
          MultiMeasureAttributeMappings: __S(68, __c8, 4),
        }),
      ).annotate({ identifier: "MultiMeasureMapping" });
    case 6:
      return S.Array(__S(69, __c8, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          TimeValue: S.String,
          EpochTimeUnit: S.optional(S.String),
          TimeFieldType: S.optional(S.String),
          TimestampFormat: S.optional(S.String),
          VersionValue: S.String,
          DimensionMappings: __S(64, __c8, 0),
          SingleMeasureMappings: S.optional(__S(66, __c8, 2)),
          MultiMeasureMappings: S.optional(__S(70, __c8, 6)),
        }),
      ).annotate({
        identifier: "PipeTargetTimestreamParameters",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InputTemplate: S.optional(SensitiveString),
          LambdaFunctionParameters: S.optional(__S(20, __c2, 4)),
          StepFunctionStateMachineParameters: S.optional(__S(20, __c2, 4)),
          KinesisStreamParameters: S.optional(__S(21, __c2, 5)),
          EcsTaskParameters: S.optional(__S(43, __c5, 3)),
          BatchJobParameters: S.optional(__S(54, __c6, 6)),
          SqsQueueParameters: S.optional(__S(55, __c6, 7)),
          HttpParameters: S.optional(__S(56, __c7, 0)),
          RedshiftDataParameters: S.optional(__S(57, __c7, 1)),
          SageMakerPipelineParameters: S.optional(__S(60, __c7, 4)),
          EventBridgeEventBusParameters: S.optional(__S(61, __c7, 5)),
          CloudWatchLogsParameters: S.optional(__S(62, __c7, 6)),
          TimestreamParameters: S.optional(__S(71, __c8, 7)),
        }),
      ).annotate({ identifier: "PipeTargetParameters" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          BucketName: S.String,
          BucketOwner: S.String,
          OutputFormat: S.optional(S.String),
          Prefix: S.optional(S.String),
        }),
      ).annotate({
        identifier: "S3LogDestinationParameters",
      });
    case 2:
      return S.suspend(() => S.Struct({ DeliveryStreamArn: S.String })).annotate({
        identifier: "FirehoseLogDestinationParameters",
      });
    case 3:
      return S.suspend(() => S.Struct({ LogGroupArn: S.String })).annotate({
        identifier: "CloudwatchLogsLogDestinationParameters",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          S3LogDestination: S.optional(__S(73, __c9, 1)),
          FirehoseLogDestination: S.optional(__S(74, __c9, 2)),
          CloudwatchLogsLogDestination: S.optional(__S(75, __c9, 3)),
          Level: S.String,
          IncludeExecutionData: S.optional(__S(30, __c3, 6)),
        }),
      ).annotate({
        identifier: "PipeLogConfigurationParameters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.String.pipe(T.HttpLabel("Name")),
          Description: S.optional(SensitiveString),
          DesiredState: S.optional(S.String),
          Source: S.String,
          SourceParameters: S.optional(__S(16, __c2, 0)),
          Enrichment: S.optional(S.String),
          EnrichmentParameters: S.optional(__S(19, __c2, 3)),
          Target: S.String,
          TargetParameters: S.optional(__S(72, __c9, 0)),
          RoleArn: S.String,
          Tags: S.optional(__S(17, __c2, 1)),
          LogConfiguration: S.optional(__S(76, __c9, 4)),
          KmsKeyIdentifier: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/pipes/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreatePipeRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          DesiredState: S.optional(S.String),
          CurrentState: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({ identifier: "CreatePipeResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.String.pipe(T.HttpLabel("Name")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v1/pipes/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeletePipeRequest" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Name: S.String.pipe(T.HttpLabel("Name")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/pipes/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribePipeRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          BucketName: S.optional(S.String),
          Prefix: S.optional(S.String),
          BucketOwner: S.optional(S.String),
          OutputFormat: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3LogDestination" });
    case 2:
      return S.suspend(() => S.Struct({ DeliveryStreamArn: S.optional(S.String) })).annotate({
        identifier: "FirehoseLogDestination",
      });
    case 3:
      return S.suspend(() => S.Struct({ LogGroupArn: S.optional(S.String) })).annotate({
        identifier: "CloudwatchLogsLogDestination",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          S3LogDestination: S.optional(__S(81, __c10, 1)),
          FirehoseLogDestination: S.optional(__S(82, __c10, 2)),
          CloudwatchLogsLogDestination: S.optional(__S(83, __c10, 3)),
          Level: S.optional(S.String),
          IncludeExecutionData: S.optional(__S(30, __c3, 6)),
        }),
      ).annotate({ identifier: "PipeLogConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(SensitiveString),
          DesiredState: S.optional(S.String),
          CurrentState: S.optional(S.String),
          StateReason: S.optional(S.String),
          Source: S.optional(S.String),
          SourceParameters: S.optional(__S(16, __c2, 0)),
          Enrichment: S.optional(S.String),
          EnrichmentParameters: S.optional(__S(19, __c2, 3)),
          Target: S.optional(S.String),
          TargetParameters: S.optional(__S(72, __c9, 0)),
          RoleArn: S.optional(S.String),
          Tags: S.optional(__S(17, __c2, 1)),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LogConfiguration: S.optional(__S(84, __c10, 4)),
          KmsKeyIdentifier: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "DescribePipeResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NamePrefix: S.optional(S.String).pipe(T.HttpQuery("NamePrefix")),
          DesiredState: S.optional(S.String).pipe(T.HttpQuery("DesiredState")),
          CurrentState: S.optional(S.String).pipe(T.HttpQuery("CurrentState")),
          SourcePrefix: S.optional(S.String).pipe(T.HttpQuery("SourcePrefix")),
          TargetPrefix: S.optional(S.String).pipe(T.HttpQuery("TargetPrefix")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("NextToken")),
          Limit: S.optional(S.Number).pipe(T.HttpQuery("Limit")),
        }).pipe(
          T.all(ns, T.Http({ method: "GET", uri: "/v1/pipes" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListPipesRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          DesiredState: S.optional(S.String),
          CurrentState: S.optional(S.String),
          StateReason: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Source: S.optional(S.String),
          Target: S.optional(S.String),
          Enrichment: S.optional(S.String),
        }),
      ).annotate({ identifier: "Pipe" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87, __c10, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Pipes: S.optional(__S(88, __c11, 0)),
          NextToken: S.optional(SensitiveString),
        }).pipe(ns),
      ).annotate({ identifier: "ListPipesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
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
    case 3:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(17, __c2, 1)) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.String.pipe(T.HttpLabel("Name")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/pipes/{Name}/start" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartPipeRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.String.pipe(T.HttpLabel("Name")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/pipes/{Name}/stop" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopPipeRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(17, __c2, 1),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagResourceResponse",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(30, __c3, 6).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          BatchSize: S.optional(S.Number),
          DeadLetterConfig: S.optional(__S(3, __c0, 3)),
          OnPartialBatchItemFailure: S.optional(S.String),
          MaximumBatchingWindowInSeconds: S.optional(S.Number),
          MaximumRecordAgeInSeconds: S.optional(S.Number),
          MaximumRetryAttempts: S.optional(S.Number),
          ParallelizationFactor: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "UpdatePipeSourceKinesisStreamParameters",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Credentials: __S(7, __c0, 7),
          BatchSize: S.optional(S.Number),
          MaximumBatchingWindowInSeconds: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "UpdatePipeSourceActiveMQBrokerParameters",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          BatchSize: S.optional(S.Number),
          Credentials: S.optional(__S(10, __c1, 2)),
          MaximumBatchingWindowInSeconds: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "UpdatePipeSourceManagedStreamingKafkaParameters",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          BatchSize: S.optional(S.Number),
          MaximumBatchingWindowInSeconds: S.optional(S.Number),
          Credentials: S.optional(__S(13, __c1, 5)),
          ServerRootCaCertificate: S.optional(S.String),
          Vpc: S.optional(__S(14, __c1, 6)),
        }),
      ).annotate({
        identifier: "UpdatePipeSourceSelfManagedKafkaParameters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FilterCriteria: S.optional(__S(2, __c0, 2)),
          KinesisStreamParameters: S.optional(__S(97, __c12, 1)),
          DynamoDBStreamParameters: S.optional(__S(97, __c12, 1)),
          SqsQueueParameters: S.optional(__S(6, __c0, 6)),
          ActiveMQBrokerParameters: S.optional(__S(98, __c12, 2)),
          RabbitMQBrokerParameters: S.optional(__S(98, __c12, 2)),
          ManagedStreamingKafkaParameters: S.optional(__S(99, __c12, 3)),
          SelfManagedKafkaParameters: S.optional(__S(100, __c12, 4)),
        }),
      ).annotate({
        identifier: "UpdatePipeSourceParameters",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String.pipe(T.HttpLabel("Name")),
          Description: S.optional(SensitiveString),
          DesiredState: S.optional(S.String),
          SourceParameters: S.optional(__S(101, __c12, 5)),
          Enrichment: S.optional(S.String),
          EnrichmentParameters: S.optional(__S(19, __c2, 3)),
          Target: S.optional(S.String),
          TargetParameters: S.optional(__S(72, __c9, 0)),
          RoleArn: S.String,
          LogConfiguration: S.optional(__S(76, __c9, 4)),
          KmsKeyIdentifier: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v1/pipes/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdatePipeRequest" });
    case 7:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(103, __c12, 7));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
