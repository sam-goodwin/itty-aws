import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface KafkaConnect {
  createConnector(
    input: CreateConnectorRequest,
  ): Effect.Effect<
    CreateConnectorResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createCustomPlugin(
    input: CreateCustomPluginRequest,
  ): Effect.Effect<
    CreateCustomPluginResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createWorkerConfiguration(
    input: CreateWorkerConfigurationRequest,
  ): Effect.Effect<
    CreateWorkerConfigurationResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteConnector(
    input: DeleteConnectorRequest,
  ): Effect.Effect<
    DeleteConnectorResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteCustomPlugin(
    input: DeleteCustomPluginRequest,
  ): Effect.Effect<
    DeleteCustomPluginResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteWorkerConfiguration(
    input: DeleteWorkerConfigurationRequest,
  ): Effect.Effect<
    DeleteWorkerConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeConnector(
    input: DescribeConnectorRequest,
  ): Effect.Effect<
    DescribeConnectorResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeConnectorOperation(
    input: DescribeConnectorOperationRequest,
  ): Effect.Effect<
    DescribeConnectorOperationResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeCustomPlugin(
    input: DescribeCustomPluginRequest,
  ): Effect.Effect<
    DescribeCustomPluginResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeWorkerConfiguration(
    input: DescribeWorkerConfigurationRequest,
  ): Effect.Effect<
    DescribeWorkerConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  listConnectorOperations(
    input: ListConnectorOperationsRequest,
  ): Effect.Effect<
    ListConnectorOperationsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  listConnectors(
    input: ListConnectorsRequest,
  ): Effect.Effect<
    ListConnectorsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  listCustomPlugins(
    input: ListCustomPluginsRequest,
  ): Effect.Effect<
    ListCustomPluginsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  listWorkerConfigurations(
    input: ListWorkerConfigurationsRequest,
  ): Effect.Effect<
    ListWorkerConfigurationsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateConnector(
    input: UpdateConnectorRequest,
  ): Effect.Effect<
    UpdateConnectorResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
}

export type Kafkaconnect = KafkaConnect;

export type __boolean = boolean;

export type __integer = number;

export type __integerMin1Max100 = number;

export type __integerMin1Max8 = number;

export type __listOf__string = Array<string>;
export type __listOfConnectorOperationStep = Array<ConnectorOperationStep>;
export type __listOfConnectorOperationSummary =
  Array<ConnectorOperationSummary>;
export type __listOfConnectorSummary = Array<ConnectorSummary>;
export type __listOfCustomPluginSummary = Array<CustomPluginSummary>;
export type __listOfPlugin = Array<Plugin>;
export type __listOfPluginDescription = Array<PluginDescription>;
export type __listOfWorkerConfigurationSummary =
  Array<WorkerConfigurationSummary>;
export type __long = number;

export type __longMin1 = number;

export type __sensitiveString = string;

export type __string = string;

export type __stringMax1024 = string;

export type __stringMin1Max128 = string;

export type __timestampIso8601 = Date | string;

export interface ApacheKafkaCluster {
  bootstrapServers: string;
  vpc: Vpc;
}
export interface ApacheKafkaClusterDescription {
  bootstrapServers?: string;
  vpc?: VpcDescription;
}
export interface AutoScaling {
  maxWorkerCount: number;
  mcuCount: number;
  minWorkerCount: number;
  scaleInPolicy?: ScaleInPolicy;
  scaleOutPolicy?: ScaleOutPolicy;
}
export interface AutoScalingDescription {
  maxWorkerCount?: number;
  mcuCount?: number;
  minWorkerCount?: number;
  scaleInPolicy?: ScaleInPolicyDescription;
  scaleOutPolicy?: ScaleOutPolicyDescription;
}
export interface AutoScalingUpdate {
  maxWorkerCount: number;
  mcuCount: number;
  minWorkerCount: number;
  scaleInPolicy: ScaleInPolicyUpdate;
  scaleOutPolicy: ScaleOutPolicyUpdate;
}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
}> {}
export interface Capacity {
  autoScaling?: AutoScaling;
  provisionedCapacity?: ProvisionedCapacity;
}
export interface CapacityDescription {
  autoScaling?: AutoScalingDescription;
  provisionedCapacity?: ProvisionedCapacityDescription;
}
export interface CapacityUpdate {
  autoScaling?: AutoScalingUpdate;
  provisionedCapacity?: ProvisionedCapacityUpdate;
}
export interface CloudWatchLogsLogDelivery {
  enabled: boolean;
  logGroup?: string;
}
export interface CloudWatchLogsLogDeliveryDescription {
  enabled?: boolean;
  logGroup?: string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ConnectorConfiguration = Record<string, string>;
export type ConnectorConfigurationUpdate = Record<string, string>;
export type ConnectorOperationState = string;

export interface ConnectorOperationStep {
  stepType?: string;
  stepState?: string;
}
export type ConnectorOperationStepState = string;

export type ConnectorOperationStepType = string;

export interface ConnectorOperationSummary {
  connectorOperationArn?: string;
  connectorOperationType?: string;
  connectorOperationState?: string;
  creationTime?: Date | string;
  endTime?: Date | string;
}
export type ConnectorOperationType = string;

export type ConnectorState = string;

export interface ConnectorSummary {
  capacity?: CapacityDescription;
  connectorArn?: string;
  connectorDescription?: string;
  connectorName?: string;
  connectorState?: string;
  creationTime?: Date | string;
  currentVersion?: string;
  kafkaCluster?: KafkaClusterDescription;
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;
  kafkaConnectVersion?: string;
  logDelivery?: LogDeliveryDescription;
  plugins?: Array<PluginDescription>;
  serviceExecutionRoleArn?: string;
  workerConfiguration?: WorkerConfigurationDescription;
}
export interface CreateConnectorRequest {
  capacity: Capacity;
  connectorConfiguration: Record<string, string>;
  connectorDescription?: string;
  connectorName: string;
  kafkaCluster: KafkaCluster;
  kafkaClusterClientAuthentication: KafkaClusterClientAuthentication;
  kafkaClusterEncryptionInTransit: KafkaClusterEncryptionInTransit;
  kafkaConnectVersion: string;
  logDelivery?: LogDelivery;
  plugins: Array<Plugin>;
  serviceExecutionRoleArn: string;
  workerConfiguration?: WorkerConfiguration;
  tags?: Record<string, string>;
}
export interface CreateConnectorResponse {
  connectorArn?: string;
  connectorName?: string;
  connectorState?: string;
}
export interface CreateCustomPluginRequest {
  contentType: string;
  description?: string;
  location: CustomPluginLocation;
  name: string;
  tags?: Record<string, string>;
}
export interface CreateCustomPluginResponse {
  customPluginArn?: string;
  customPluginState?: string;
  name?: string;
  revision?: number;
}
export interface CreateWorkerConfigurationRequest {
  description?: string;
  name: string;
  propertiesFileContent: string;
  tags?: Record<string, string>;
}
export interface CreateWorkerConfigurationResponse {
  creationTime?: Date | string;
  latestRevision?: WorkerConfigurationRevisionSummary;
  name?: string;
  workerConfigurationArn?: string;
  workerConfigurationState?: string;
}
export interface CustomPlugin {
  customPluginArn: string;
  revision: number;
}
export type CustomPluginContentType = string;

export interface CustomPluginDescription {
  customPluginArn?: string;
  revision?: number;
}
export interface CustomPluginFileDescription {
  fileMd5?: string;
  fileSize?: number;
}
export interface CustomPluginLocation {
  s3Location: S3Location;
}
export interface CustomPluginLocationDescription {
  s3Location?: S3LocationDescription;
}
export interface CustomPluginRevisionSummary {
  contentType?: string;
  creationTime?: Date | string;
  description?: string;
  fileDescription?: CustomPluginFileDescription;
  location?: CustomPluginLocationDescription;
  revision?: number;
}
export type CustomPluginState = string;

export interface CustomPluginSummary {
  creationTime?: Date | string;
  customPluginArn?: string;
  customPluginState?: string;
  description?: string;
  latestRevision?: CustomPluginRevisionSummary;
  name?: string;
}
export interface DeleteConnectorRequest {
  connectorArn: string;
  currentVersion?: string;
}
export interface DeleteConnectorResponse {
  connectorArn?: string;
  connectorState?: string;
}
export interface DeleteCustomPluginRequest {
  customPluginArn: string;
}
export interface DeleteCustomPluginResponse {
  customPluginArn?: string;
  customPluginState?: string;
}
export interface DeleteWorkerConfigurationRequest {
  workerConfigurationArn: string;
}
export interface DeleteWorkerConfigurationResponse {
  workerConfigurationArn?: string;
  workerConfigurationState?: string;
}
export interface DescribeConnectorOperationRequest {
  connectorOperationArn: string;
}
export interface DescribeConnectorOperationResponse {
  connectorArn?: string;
  connectorOperationArn?: string;
  connectorOperationState?: string;
  connectorOperationType?: string;
  operationSteps?: Array<ConnectorOperationStep>;
  originWorkerSetting?: WorkerSetting;
  originConnectorConfiguration?: Record<string, string>;
  targetWorkerSetting?: WorkerSetting;
  targetConnectorConfiguration?: Record<string, string>;
  errorInfo?: StateDescription;
  creationTime?: Date | string;
  endTime?: Date | string;
}
export interface DescribeConnectorRequest {
  connectorArn: string;
}
export interface DescribeConnectorResponse {
  capacity?: CapacityDescription;
  connectorArn?: string;
  connectorConfiguration?: Record<string, string>;
  connectorDescription?: string;
  connectorName?: string;
  connectorState?: string;
  creationTime?: Date | string;
  currentVersion?: string;
  kafkaCluster?: KafkaClusterDescription;
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;
  kafkaConnectVersion?: string;
  logDelivery?: LogDeliveryDescription;
  plugins?: Array<PluginDescription>;
  serviceExecutionRoleArn?: string;
  workerConfiguration?: WorkerConfigurationDescription;
  stateDescription?: StateDescription;
}
export interface DescribeCustomPluginRequest {
  customPluginArn: string;
}
export interface DescribeCustomPluginResponse {
  creationTime?: Date | string;
  customPluginArn?: string;
  customPluginState?: string;
  description?: string;
  latestRevision?: CustomPluginRevisionSummary;
  name?: string;
  stateDescription?: StateDescription;
}
export interface DescribeWorkerConfigurationRequest {
  workerConfigurationArn: string;
}
export interface DescribeWorkerConfigurationResponse {
  creationTime?: Date | string;
  description?: string;
  latestRevision?: WorkerConfigurationRevisionDescription;
  name?: string;
  workerConfigurationArn?: string;
  workerConfigurationState?: string;
}
export interface FirehoseLogDelivery {
  deliveryStream?: string;
  enabled: boolean;
}
export interface FirehoseLogDeliveryDescription {
  deliveryStream?: string;
  enabled?: boolean;
}
export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly message?: string;
}> {}
export declare class InternalServerErrorException extends EffectData.TaggedError(
  "InternalServerErrorException",
)<{
  readonly message?: string;
}> {}
export interface KafkaCluster {
  apacheKafkaCluster: ApacheKafkaCluster;
}
export interface KafkaClusterClientAuthentication {
  authenticationType: string;
}
export interface KafkaClusterClientAuthenticationDescription {
  authenticationType?: string;
}
export type KafkaClusterClientAuthenticationType = string;

export interface KafkaClusterDescription {
  apacheKafkaCluster?: ApacheKafkaClusterDescription;
}
export interface KafkaClusterEncryptionInTransit {
  encryptionType: string;
}
export interface KafkaClusterEncryptionInTransitDescription {
  encryptionType?: string;
}
export type KafkaClusterEncryptionInTransitType = string;

export interface ListConnectorOperationsRequest {
  connectorArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListConnectorOperationsResponse {
  connectorOperations?: Array<ConnectorOperationSummary>;
  nextToken?: string;
}
export interface ListConnectorsRequest {
  connectorNamePrefix?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListConnectorsResponse {
  connectors?: Array<ConnectorSummary>;
  nextToken?: string;
}
export interface ListCustomPluginsRequest {
  maxResults?: number;
  nextToken?: string;
  namePrefix?: string;
}
export interface ListCustomPluginsResponse {
  customPlugins?: Array<CustomPluginSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListWorkerConfigurationsRequest {
  maxResults?: number;
  nextToken?: string;
  namePrefix?: string;
}
export interface ListWorkerConfigurationsResponse {
  nextToken?: string;
  workerConfigurations?: Array<WorkerConfigurationSummary>;
}
export interface LogDelivery {
  workerLogDelivery: WorkerLogDelivery;
}
export interface LogDeliveryDescription {
  workerLogDelivery?: WorkerLogDeliveryDescription;
}
export type MaxResults = number;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
}> {}
export interface Plugin {
  customPlugin: CustomPlugin;
}
export interface PluginDescription {
  customPlugin?: CustomPluginDescription;
}
export interface ProvisionedCapacity {
  mcuCount: number;
  workerCount: number;
}
export interface ProvisionedCapacityDescription {
  mcuCount?: number;
  workerCount?: number;
}
export interface ProvisionedCapacityUpdate {
  mcuCount: number;
  workerCount: number;
}
export interface S3Location {
  bucketArn: string;
  fileKey: string;
  objectVersion?: string;
}
export interface S3LocationDescription {
  bucketArn?: string;
  fileKey?: string;
  objectVersion?: string;
}
export interface S3LogDelivery {
  bucket?: string;
  enabled: boolean;
  prefix?: string;
}
export interface S3LogDeliveryDescription {
  bucket?: string;
  enabled?: boolean;
  prefix?: string;
}
export interface ScaleInPolicy {
  cpuUtilizationPercentage: number;
}
export interface ScaleInPolicyDescription {
  cpuUtilizationPercentage?: number;
}
export interface ScaleInPolicyUpdate {
  cpuUtilizationPercentage: number;
}
export interface ScaleOutPolicy {
  cpuUtilizationPercentage: number;
}
export interface ScaleOutPolicyDescription {
  cpuUtilizationPercentage?: number;
}
export interface ScaleOutPolicyUpdate {
  cpuUtilizationPercentage: number;
}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export interface StateDescription {
  code?: string;
  message?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TagValue = string;

export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly message?: string;
}> {}
export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateConnectorRequest {
  capacity?: CapacityUpdate;
  connectorConfiguration?: Record<string, string>;
  connectorArn: string;
  currentVersion: string;
}
export interface UpdateConnectorResponse {
  connectorArn?: string;
  connectorState?: string;
  connectorOperationArn?: string;
}
export interface Vpc {
  securityGroups?: Array<string>;
  subnets: Array<string>;
}
export interface VpcDescription {
  securityGroups?: Array<string>;
  subnets?: Array<string>;
}
export interface WorkerConfiguration {
  revision: number;
  workerConfigurationArn: string;
}
export interface WorkerConfigurationDescription {
  revision?: number;
  workerConfigurationArn?: string;
}
export interface WorkerConfigurationRevisionDescription {
  creationTime?: Date | string;
  description?: string;
  propertiesFileContent?: string;
  revision?: number;
}
export interface WorkerConfigurationRevisionSummary {
  creationTime?: Date | string;
  description?: string;
  revision?: number;
}
export type WorkerConfigurationState = string;

export interface WorkerConfigurationSummary {
  creationTime?: Date | string;
  description?: string;
  latestRevision?: WorkerConfigurationRevisionSummary;
  name?: string;
  workerConfigurationArn?: string;
  workerConfigurationState?: string;
}
export interface WorkerLogDelivery {
  cloudWatchLogs?: CloudWatchLogsLogDelivery;
  firehose?: FirehoseLogDelivery;
  s3?: S3LogDelivery;
}
export interface WorkerLogDeliveryDescription {
  cloudWatchLogs?: CloudWatchLogsLogDeliveryDescription;
  firehose?: FirehoseLogDeliveryDescription;
  s3?: S3LogDeliveryDescription;
}
export interface WorkerSetting {
  capacity?: CapacityDescription;
}
export declare namespace CreateConnector {
  export type Input = CreateConnectorRequest;
  export type Output = CreateConnectorResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateCustomPlugin {
  export type Input = CreateCustomPluginRequest;
  export type Output = CreateCustomPluginResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateWorkerConfiguration {
  export type Input = CreateWorkerConfigurationRequest;
  export type Output = CreateWorkerConfigurationResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteConnector {
  export type Input = DeleteConnectorRequest;
  export type Output = DeleteConnectorResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteCustomPlugin {
  export type Input = DeleteCustomPluginRequest;
  export type Output = DeleteCustomPluginResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteWorkerConfiguration {
  export type Input = DeleteWorkerConfigurationRequest;
  export type Output = DeleteWorkerConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeConnector {
  export type Input = DescribeConnectorRequest;
  export type Output = DescribeConnectorResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeConnectorOperation {
  export type Input = DescribeConnectorOperationRequest;
  export type Output = DescribeConnectorOperationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeCustomPlugin {
  export type Input = DescribeCustomPluginRequest;
  export type Output = DescribeCustomPluginResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeWorkerConfiguration {
  export type Input = DescribeWorkerConfigurationRequest;
  export type Output = DescribeWorkerConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListConnectorOperations {
  export type Input = ListConnectorOperationsRequest;
  export type Output = ListConnectorOperationsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListConnectors {
  export type Input = ListConnectorsRequest;
  export type Output = ListConnectorsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListCustomPlugins {
  export type Input = ListCustomPluginsRequest;
  export type Output = ListCustomPluginsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListWorkerConfigurations {
  export type Input = ListWorkerConfigurationsRequest;
  export type Output = ListWorkerConfigurationsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateConnector {
  export type Input = UpdateConnectorRequest;
  export type Output = UpdateConnectorResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}
