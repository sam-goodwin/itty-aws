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
  sdkId: "KafkaConnect",
  serviceShapeName: "KafkaConnect",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "kafkaconnect" });
const ver = /*@__PURE__*/ T.ServiceVersion("2021-09-14");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseDualStack = false, UseFIPS = false, Endpoint, Region } = p;
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
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e(`https://kafkaconnect.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e(
            `https://kafkaconnect.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://kafkaconnect-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true && UseDualStack === false) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://kafkaconnect-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseFIPS === false && UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://kafkaconnect.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://kafkaconnect.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ForbiddenException
  extends /*@__PURE__*/ S.TaggedError<ForbiddenException>()(
    "ForbiddenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class InternalServerErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalServerErrorException>()(
    "InternalServerErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()(
    "TooManyRequestsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnauthorizedException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedException>()(
    "UnauthorizedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export type __integerMin1Max8 = number;
export type __integerMin1Max100 = number;
export interface ScaleInPolicy {
  cpuUtilizationPercentage: number;
}
export interface ScaleOutPolicy {
  cpuUtilizationPercentage: number;
}
export interface AutoScaling {
  maxWorkerCount: number;
  mcuCount: number;
  minWorkerCount: number;
  scaleInPolicy?: ScaleInPolicy;
  scaleOutPolicy?: ScaleOutPolicy;
  maxAutoscalingTaskCount?: number;
}
export interface ProvisionedCapacity {
  mcuCount: number;
  workerCount: number;
}
export interface Capacity {
  autoScaling?: AutoScaling;
  provisionedCapacity?: ProvisionedCapacity;
}
export type ConnectorConfiguration = { [key: string]: string | undefined };
export type __stringMax1024 = string;
export type __stringMin1Max128 = string;
export type __listOf__string = string[];
const __listOf__string = /*@__PURE__*/ __L.at(__c0, 5);
export interface Vpc {
  securityGroups?: string[];
  subnets: string[];
}
export interface ApacheKafkaCluster {
  bootstrapServers: string;
  vpc: Vpc;
}
export interface KafkaCluster {
  apacheKafkaCluster: ApacheKafkaCluster;
}
export type KafkaClusterClientAuthenticationType = string;
export interface KafkaClusterClientAuthentication {
  authenticationType: string;
}
export type KafkaClusterEncryptionInTransitType = string;
export interface KafkaClusterEncryptionInTransit {
  encryptionType: string;
}
export interface CloudWatchLogsLogDelivery {
  enabled: boolean;
  logGroup?: string;
}
export interface FirehoseLogDelivery {
  deliveryStream?: string;
  enabled: boolean;
}
export interface S3LogDelivery {
  bucket?: string;
  enabled: boolean;
  prefix?: string;
}
export interface WorkerLogDelivery {
  cloudWatchLogs?: CloudWatchLogsLogDelivery;
  firehose?: FirehoseLogDelivery;
  s3?: S3LogDelivery;
}
export interface LogDelivery {
  workerLogDelivery: WorkerLogDelivery;
}
export type NetworkType = string;
export type __longMin1 = number;
export interface CustomPlugin {
  customPluginArn: string;
  revision: number;
}
export interface Plugin {
  customPlugin: CustomPlugin;
}
export type __listOfPlugin = Plugin[];
const __listOfPlugin = /*@__PURE__*/ __L.at(__c2, 2);
export interface WorkerConfiguration {
  revision: number;
  workerConfigurationArn: string;
}
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
export interface CreateConnectorRequest {
  capacity: Capacity;
  connectorConfiguration: { [key: string]: string | undefined };
  connectorDescription?: string;
  connectorName: string;
  kafkaCluster: KafkaCluster;
  kafkaClusterClientAuthentication: KafkaClusterClientAuthentication;
  kafkaClusterEncryptionInTransit: KafkaClusterEncryptionInTransit;
  kafkaConnectVersion: string;
  logDelivery?: LogDelivery;
  networkType?: string;
  plugins: Plugin[];
  serviceExecutionRoleArn: string;
  workerConfiguration?: WorkerConfiguration;
  tags?: { [key: string]: string | undefined };
}
export type ConnectorState = string;
export interface CreateConnectorResponse {
  connectorArn?: string;
  connectorName?: string;
  connectorState?: string;
}
export type CustomPluginContentType = string;
export interface S3Location {
  bucketArn: string;
  fileKey: string;
  objectVersion?: string;
}
export interface CustomPluginLocation {
  s3Location: S3Location;
}
export interface CreateCustomPluginRequest {
  contentType: string;
  description?: string;
  location: CustomPluginLocation;
  name: string;
  tags?: { [key: string]: string | undefined };
}
export type CustomPluginState = string;
export interface CreateCustomPluginResponse {
  customPluginArn?: string;
  customPluginState?: string;
  name?: string;
  revision?: number;
}
export type __sensitiveString = string | redacted.Redacted<string>;
export interface CreateWorkerConfigurationRequest {
  description?: string;
  name: string;
  propertiesFileContent: string | redacted.Redacted<string>;
  tags?: { [key: string]: string | undefined };
}
export type __timestampIso8601 = Date;
export interface WorkerConfigurationRevisionSummary {
  creationTime?: Date;
  description?: string;
  revision?: number;
}
export type WorkerConfigurationState = string;
export interface CreateWorkerConfigurationResponse {
  creationTime?: Date;
  latestRevision?: WorkerConfigurationRevisionSummary;
  name?: string;
  workerConfigurationArn?: string;
  workerConfigurationState?: string;
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
export interface DescribeConnectorRequest {
  connectorArn: string;
}
export interface ScaleInPolicyDescription {
  cpuUtilizationPercentage?: number;
}
export interface ScaleOutPolicyDescription {
  cpuUtilizationPercentage?: number;
}
export interface AutoScalingDescription {
  maxWorkerCount?: number;
  mcuCount?: number;
  minWorkerCount?: number;
  scaleInPolicy?: ScaleInPolicyDescription;
  scaleOutPolicy?: ScaleOutPolicyDescription;
  maxAutoscalingTaskCount?: number;
}
export interface ProvisionedCapacityDescription {
  mcuCount?: number;
  workerCount?: number;
}
export interface CapacityDescription {
  autoScaling?: AutoScalingDescription;
  provisionedCapacity?: ProvisionedCapacityDescription;
}
export interface VpcDescription {
  securityGroups?: string[];
  subnets?: string[];
}
export interface ApacheKafkaClusterDescription {
  bootstrapServers?: string;
  vpc?: VpcDescription;
}
export interface KafkaClusterDescription {
  apacheKafkaCluster?: ApacheKafkaClusterDescription;
}
export interface KafkaClusterClientAuthenticationDescription {
  authenticationType?: string;
}
export interface KafkaClusterEncryptionInTransitDescription {
  encryptionType?: string;
}
export interface CloudWatchLogsLogDeliveryDescription {
  enabled?: boolean;
  logGroup?: string;
}
export interface FirehoseLogDeliveryDescription {
  deliveryStream?: string;
  enabled?: boolean;
}
export interface S3LogDeliveryDescription {
  bucket?: string;
  enabled?: boolean;
  prefix?: string;
}
export interface WorkerLogDeliveryDescription {
  cloudWatchLogs?: CloudWatchLogsLogDeliveryDescription;
  firehose?: FirehoseLogDeliveryDescription;
  s3?: S3LogDeliveryDescription;
}
export interface LogDeliveryDescription {
  workerLogDelivery?: WorkerLogDeliveryDescription;
}
export interface CustomPluginDescription {
  customPluginArn?: string;
  revision?: number;
}
export interface PluginDescription {
  customPlugin?: CustomPluginDescription;
}
export type __listOfPluginDescription = PluginDescription[];
const __listOfPluginDescription = /*@__PURE__*/ __L.at(__c6, 6);
export interface WorkerConfigurationDescription {
  revision?: number;
  workerConfigurationArn?: string;
}
export interface StateDescription {
  code?: string;
  message?: string;
}
export interface DescribeConnectorResponse {
  capacity?: CapacityDescription;
  connectorArn?: string;
  connectorConfiguration?: { [key: string]: string | undefined };
  connectorDescription?: string;
  connectorName?: string;
  connectorState?: string;
  creationTime?: Date;
  currentVersion?: string;
  kafkaCluster?: KafkaClusterDescription;
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;
  kafkaConnectVersion?: string;
  logDelivery?: LogDeliveryDescription;
  networkType?: string;
  plugins?: PluginDescription[];
  serviceExecutionRoleArn?: string;
  workerConfiguration?: WorkerConfigurationDescription;
  stateDescription?: StateDescription;
}
export interface DescribeConnectorOperationRequest {
  connectorOperationArn: string;
}
export type ConnectorOperationState = string;
export type ConnectorOperationType = string;
export type ConnectorOperationStepType = string;
export type ConnectorOperationStepState = string;
export interface ConnectorOperationStep {
  stepType?: string;
  stepState?: string;
}
export type __listOfConnectorOperationStep = ConnectorOperationStep[];
const __listOfConnectorOperationStep = /*@__PURE__*/ __L.at(__c7, 4);
export interface WorkerSetting {
  capacity?: CapacityDescription;
}
export interface DescribeConnectorOperationResponse {
  connectorArn?: string;
  connectorOperationArn?: string;
  connectorOperationState?: string;
  connectorOperationType?: string;
  operationSteps?: ConnectorOperationStep[];
  originWorkerSetting?: WorkerSetting;
  originConnectorConfiguration?: { [key: string]: string | undefined };
  targetWorkerSetting?: WorkerSetting;
  targetConnectorConfiguration?: { [key: string]: string | undefined };
  errorInfo?: StateDescription;
  creationTime?: Date;
  endTime?: Date;
}
export interface DescribeCustomPluginRequest {
  customPluginArn: string;
}
export interface CustomPluginFileDescription {
  fileMd5?: string;
  fileSize?: number;
}
export interface S3LocationDescription {
  bucketArn?: string;
  fileKey?: string;
  objectVersion?: string;
}
export interface CustomPluginLocationDescription {
  s3Location?: S3LocationDescription;
}
export interface CustomPluginRevisionSummary {
  contentType?: string;
  creationTime?: Date;
  description?: string;
  fileDescription?: CustomPluginFileDescription;
  location?: CustomPluginLocationDescription;
  revision?: number;
}
export interface DescribeCustomPluginResponse {
  creationTime?: Date;
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
export interface WorkerConfigurationRevisionDescription {
  creationTime?: Date;
  description?: string;
  propertiesFileContent?: string | redacted.Redacted<string>;
  revision?: number;
}
export interface DescribeWorkerConfigurationResponse {
  creationTime?: Date;
  description?: string;
  latestRevision?: WorkerConfigurationRevisionDescription;
  name?: string;
  workerConfigurationArn?: string;
  workerConfigurationState?: string;
}
export type MaxResults = number;
export interface ListConnectorOperationsRequest {
  connectorArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ConnectorOperationSummary {
  connectorOperationArn?: string;
  connectorOperationType?: string;
  connectorOperationState?: string;
  creationTime?: Date;
  endTime?: Date;
}
export type __listOfConnectorOperationSummary = ConnectorOperationSummary[];
const __listOfConnectorOperationSummary = /*@__PURE__*/ __L.at(__c9, 2);
export interface ListConnectorOperationsResponse {
  connectorOperations?: ConnectorOperationSummary[];
  nextToken?: string;
}
export interface ListConnectorsRequest {
  connectorNamePrefix?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ConnectorSummary {
  capacity?: CapacityDescription;
  connectorArn?: string;
  connectorDescription?: string;
  connectorName?: string;
  connectorState?: string;
  creationTime?: Date;
  currentVersion?: string;
  kafkaCluster?: KafkaClusterDescription;
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;
  kafkaConnectVersion?: string;
  logDelivery?: LogDeliveryDescription;
  networkType?: string;
  plugins?: PluginDescription[];
  serviceExecutionRoleArn?: string;
  workerConfiguration?: WorkerConfigurationDescription;
}
export type __listOfConnectorSummary = ConnectorSummary[];
const __listOfConnectorSummary = /*@__PURE__*/ __L.at(__c9, 6);
export interface ListConnectorsResponse {
  connectors?: ConnectorSummary[];
  nextToken?: string;
}
export interface ListCustomPluginsRequest {
  maxResults?: number;
  nextToken?: string;
  namePrefix?: string;
}
export interface CustomPluginSummary {
  creationTime?: Date;
  customPluginArn?: string;
  customPluginState?: string;
  description?: string;
  latestRevision?: CustomPluginRevisionSummary;
  name?: string;
}
export type __listOfCustomPluginSummary = CustomPluginSummary[];
const __listOfCustomPluginSummary = /*@__PURE__*/ __L.at(__c10, 2);
export interface ListCustomPluginsResponse {
  customPlugins?: CustomPluginSummary[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface ListWorkerConfigurationsRequest {
  maxResults?: number;
  nextToken?: string;
  namePrefix?: string;
}
export interface WorkerConfigurationSummary {
  creationTime?: Date;
  description?: string;
  latestRevision?: WorkerConfigurationRevisionSummary;
  name?: string;
  workerConfigurationArn?: string;
  workerConfigurationState?: string;
}
export type __listOfWorkerConfigurationSummary = WorkerConfigurationSummary[];
const __listOfWorkerConfigurationSummary = /*@__PURE__*/ __L.at(__c11, 0);
export interface ListWorkerConfigurationsResponse {
  nextToken?: string;
  workerConfigurations?: WorkerConfigurationSummary[];
}
export interface RestartConnectorRequest {
  connectorArn: string;
  onlyFailedTasks?: boolean;
}
export interface RestartConnectorResponse {
  connectorArn?: string;
  connectorOperationArn?: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
const TagKeyList = __listOf__string as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface ScaleInPolicyUpdate {
  cpuUtilizationPercentage: number;
}
export interface ScaleOutPolicyUpdate {
  cpuUtilizationPercentage: number;
}
export interface AutoScalingUpdate {
  maxWorkerCount: number;
  mcuCount: number;
  minWorkerCount: number;
  scaleInPolicy: ScaleInPolicyUpdate;
  scaleOutPolicy: ScaleOutPolicyUpdate;
  maxAutoscalingTaskCount?: number;
}
export interface ProvisionedCapacityUpdate {
  mcuCount: number;
  workerCount: number;
}
export interface CapacityUpdate {
  autoScaling?: AutoScalingUpdate;
  provisionedCapacity?: ProvisionedCapacityUpdate;
}
export type ConnectorConfigurationUpdate = { [key: string]: string | undefined };
export interface UpdateConnectorRequest {
  capacity?: CapacityUpdate;
  connectorConfiguration?: { [key: string]: string | undefined };
  connectorArn: string;
  currentVersion: string;
}
export interface UpdateConnectorResponse {
  connectorArn?: string;
  connectorState?: string;
  connectorOperationArn?: string;
}
export type CreateConnectorError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a connector using the specified properties.
 */
export const createConnector: API.OperationMethod<
  CreateConnectorRequest,
  CreateConnectorResponse,
  CreateConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21, __c2, 5) as any as S.Schema<CreateConnectorRequest>,
  output: __S(22, __c2, 6) as any as S.Schema<CreateConnectorResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConnector",
}));

export type CreateCustomPluginError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a custom plugin using the specified properties.
 */
export const createCustomPlugin: API.OperationMethod<
  CreateCustomPluginRequest,
  CreateCustomPluginResponse,
  CreateCustomPluginError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25, __c3, 1) as any as S.Schema<CreateCustomPluginRequest>,
  output: __S(26, __c3, 2) as any as S.Schema<CreateCustomPluginResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCustomPlugin",
}));

export type CreateWorkerConfigurationError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a worker configuration using the specified properties.
 */
export const createWorkerConfiguration: API.OperationMethod<
  CreateWorkerConfigurationRequest,
  CreateWorkerConfigurationResponse,
  CreateWorkerConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27, __c3, 3) as any as S.Schema<CreateWorkerConfigurationRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<CreateWorkerConfigurationResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWorkerConfiguration",
}));

export type DeleteConnectorError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes the specified connector.
 */
export const deleteConnector: API.OperationMethod<
  DeleteConnectorRequest,
  DeleteConnectorResponse,
  DeleteConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30, __c3, 6) as any as S.Schema<DeleteConnectorRequest>,
  output: __S(31, __c3, 7) as any as S.Schema<DeleteConnectorResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnector",
}));

export type DeleteCustomPluginError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a custom plugin.
 */
export const deleteCustomPlugin: API.OperationMethod<
  DeleteCustomPluginRequest,
  DeleteCustomPluginResponse,
  DeleteCustomPluginError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32, __c4, 0) as any as S.Schema<DeleteCustomPluginRequest>,
  output: __S(33, __c4, 1) as any as S.Schema<DeleteCustomPluginResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCustomPlugin",
}));

export type DeleteWorkerConfigurationError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes the specified worker configuration.
 */
export const deleteWorkerConfiguration: API.OperationMethod<
  DeleteWorkerConfigurationRequest,
  DeleteWorkerConfigurationResponse,
  DeleteWorkerConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34, __c4, 2) as any as S.Schema<DeleteWorkerConfigurationRequest>,
  output: __S(35, __c4, 3) as any as S.Schema<DeleteWorkerConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorkerConfiguration",
}));

export type DescribeConnectorError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns summary information about the connector.
 */
export const describeConnector: API.OperationMethod<
  DescribeConnectorRequest,
  DescribeConnectorResponse,
  DescribeConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36, __c4, 4) as any as S.Schema<DescribeConnectorRequest>,
  output: __S(57, __c7, 1) as any as S.Schema<DescribeConnectorResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConnector",
}));

export type DescribeConnectorOperationError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns information about the specified connector's operations.
 */
export const describeConnectorOperation: API.OperationMethod<
  DescribeConnectorOperationRequest,
  DescribeConnectorOperationResponse,
  DescribeConnectorOperationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58, __c7, 2) as any as S.Schema<DescribeConnectorOperationRequest>,
  output: __S(62, __c7, 6) as any as S.Schema<DescribeConnectorOperationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConnectorOperation",
}));

export type DescribeCustomPluginError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * A summary description of the custom plugin.
 */
export const describeCustomPlugin: API.OperationMethod<
  DescribeCustomPluginRequest,
  DescribeCustomPluginResponse,
  DescribeCustomPluginError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63, __c7, 7) as any as S.Schema<DescribeCustomPluginRequest>,
  output: __S(68, __c8, 4) as any as S.Schema<DescribeCustomPluginResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCustomPlugin",
}));

export type DescribeWorkerConfigurationError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns information about a worker configuration.
 */
export const describeWorkerConfiguration: API.OperationMethod<
  DescribeWorkerConfigurationRequest,
  DescribeWorkerConfigurationResponse,
  DescribeWorkerConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69, __c8, 5) as any as S.Schema<DescribeWorkerConfigurationRequest>,
  output: __S(71, __c8, 7) as any as S.Schema<DescribeWorkerConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkerConfiguration",
}));

export type ListConnectorOperationsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists information about a connector's operation(s).
 */
export const listConnectorOperations: API.PaginatedOperationMethod<
  ListConnectorOperationsRequest,
  ListConnectorOperationsResponse,
  ListConnectorOperationsError,
  Credentials | HttpClient.HttpClient,
  ConnectorOperationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(72, __c9, 0) as any as S.Schema<ListConnectorOperationsRequest>,
  output: __S(75, __c9, 3) as any as S.Schema<ListConnectorOperationsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnectorOperations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "connectorOperations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConnectorsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
 */
export const listConnectors: API.PaginatedOperationMethod<
  ListConnectorsRequest,
  ListConnectorsResponse,
  ListConnectorsError,
  Credentials | HttpClient.HttpClient,
  ConnectorSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(76, __c9, 4) as any as S.Schema<ListConnectorsRequest>,
  output: __S(79, __c9, 7) as any as S.Schema<ListConnectorsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnectors",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "connectors",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCustomPluginsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns a list of all of the custom plugins in this account and Region.
 */
export const listCustomPlugins: API.PaginatedOperationMethod<
  ListCustomPluginsRequest,
  ListCustomPluginsResponse,
  ListCustomPluginsError,
  Credentials | HttpClient.HttpClient,
  CustomPluginSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(80, __c10, 0) as any as S.Schema<ListCustomPluginsRequest>,
  output: __S(83, __c10, 3) as any as S.Schema<ListCustomPluginsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCustomPlugins",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "customPlugins",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists all the tags attached to the specified resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(84, __c10, 4) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(85, __c10, 5) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListWorkerConfigurationsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns a list of all of the worker configurations in this account and Region.
 */
export const listWorkerConfigurations: API.PaginatedOperationMethod<
  ListWorkerConfigurationsRequest,
  ListWorkerConfigurationsResponse,
  ListWorkerConfigurationsError,
  Credentials | HttpClient.HttpClient,
  WorkerConfigurationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(86, __c10, 6) as any as S.Schema<ListWorkerConfigurationsRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<ListWorkerConfigurationsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkerConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "workerConfigurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type RestartConnectorError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Restarts the specified connector. By default, this operation restarts the connector and all of its tasks. This operation is asynchronous and returns a connector operation ARN that you can pass to `DescribeConnectorOperation` to track the state of the restart.
 */
export const restartConnector: API.OperationMethod<
  RestartConnectorRequest,
  RestartConnectorResponse,
  RestartConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(90, __c11, 2) as any as S.Schema<RestartConnectorRequest>,
  output: __S(91, __c11, 3) as any as S.Schema<RestartConnectorResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestartConnector",
}));

export type TagResourceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Attaches tags to the specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(92, __c11, 4) as any as S.Schema<TagResourceRequest>,
  output: __S(93, __c11, 5) as any as S.Schema<TagResourceResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Removes tags from the specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(94, __c11, 6) as any as S.Schema<UntagResourceRequest>,
  output: __S(93, __c11, 5) as any as S.Schema<UntagResourceResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateConnectorError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates the specified connector. For request body, specify only one parameter: either `capacity` or `connectorConfiguration`.
 */
export const updateConnector: API.OperationMethod<
  UpdateConnectorRequest,
  UpdateConnectorResponse,
  UpdateConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(98, __c12, 2) as any as S.Schema<UpdateConnectorRequest>,
  output: __S(99, __c12, 3) as any as S.Schema<UpdateConnectorResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConnector",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ cpuUtilizationPercentage: S.Number })).annotate({
        identifier: "ScaleInPolicy",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxWorkerCount: S.Number,
          mcuCount: S.Number,
          minWorkerCount: S.Number,
          scaleInPolicy: S.optional(__S(0, __c0, 0)),
          scaleOutPolicy: S.optional(__S(0, __c0, 0)),
          maxAutoscalingTaskCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AutoScaling" });
    case 2:
      return S.suspend(() => S.Struct({ mcuCount: S.Number, workerCount: S.Number })).annotate({
        identifier: "ProvisionedCapacity",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          autoScaling: S.optional(__S(1, __c0, 1)),
          provisionedCapacity: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({ identifier: "Capacity" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({ securityGroups: S.optional(__listOf__string), subnets: __listOf__string }),
      ).annotate({ identifier: "Vpc" });
    case 7:
      return S.suspend(() =>
        S.Struct({ bootstrapServers: S.String, vpc: __S(6, __c0, 6) }),
      ).annotate({
        identifier: "ApacheKafkaCluster",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ apacheKafkaCluster: __S(7, __c0, 7) })).annotate({
        identifier: "KafkaCluster",
      });
    case 1:
      return S.suspend(() => S.Struct({ authenticationType: S.String })).annotate({
        identifier: "KafkaClusterClientAuthentication",
      });
    case 2:
      return S.suspend(() => S.Struct({ encryptionType: S.String })).annotate({
        identifier: "KafkaClusterEncryptionInTransit",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ enabled: S.Boolean, logGroup: S.optional(S.String) }),
      ).annotate({
        identifier: "CloudWatchLogsLogDelivery",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ deliveryStream: S.optional(S.String), enabled: S.Boolean }),
      ).annotate({ identifier: "FirehoseLogDelivery" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          bucket: S.optional(S.String),
          enabled: S.Boolean,
          prefix: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3LogDelivery" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          cloudWatchLogs: S.optional(__S(11, __c1, 3)),
          firehose: S.optional(__S(12, __c1, 4)),
          s3: S.optional(__S(13, __c1, 5)),
        }),
      ).annotate({ identifier: "WorkerLogDelivery" });
    case 7:
      return S.suspend(() => S.Struct({ workerLogDelivery: __S(14, __c1, 6) })).annotate({
        identifier: "LogDelivery",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ customPluginArn: S.String, revision: S.Number })).annotate({
        identifier: "CustomPlugin",
      });
    case 1:
      return S.suspend(() => S.Struct({ customPlugin: __S(16, __c2, 0) })).annotate({
        identifier: "Plugin",
      });
    case 2:
      return S.Array(__S(17, __c2, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ revision: S.Number, workerConfigurationArn: S.String }),
      ).annotate({ identifier: "WorkerConfiguration" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          capacity: __S(3, __c0, 3),
          connectorConfiguration: __S(4, __c0, 4),
          connectorDescription: S.optional(S.String),
          connectorName: S.String,
          kafkaCluster: __S(8, __c1, 0),
          kafkaClusterClientAuthentication: __S(9, __c1, 1),
          kafkaClusterEncryptionInTransit: __S(10, __c1, 2),
          kafkaConnectVersion: S.String,
          logDelivery: S.optional(__S(15, __c1, 7)),
          networkType: S.optional(S.String),
          plugins: __listOfPlugin,
          serviceExecutionRoleArn: S.String,
          workerConfiguration: S.optional(__S(19, __c2, 3)),
          tags: S.optional(__S(20, __c2, 4)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v1/connectors" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateConnectorRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          connectorArn: S.optional(S.String),
          connectorName: S.optional(S.String),
          connectorState: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateConnectorResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ bucketArn: S.String, fileKey: S.String, objectVersion: S.optional(S.String) }),
      ).annotate({ identifier: "S3Location" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ s3Location: __S(23, __c2, 7) })).annotate({
        identifier: "CustomPluginLocation",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          contentType: S.String,
          description: S.optional(S.String),
          location: __S(24, __c3, 0),
          name: S.String,
          tags: S.optional(__S(20, __c2, 4)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/custom-plugins" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateCustomPluginRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          customPluginArn: S.optional(S.String),
          customPluginState: S.optional(S.String),
          name: S.optional(S.String),
          revision: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CreateCustomPluginResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          name: S.String,
          propertiesFileContent: SensitiveString,
          tags: S.optional(__S(20, __c2, 4)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/worker-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateWorkerConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(S.String),
          revision: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "WorkerConfigurationRevisionSummary",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          latestRevision: S.optional(__S(28, __c3, 4)),
          name: S.optional(S.String),
          workerConfigurationArn: S.optional(S.String),
          workerConfigurationState: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateWorkerConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          connectorArn: S.String.pipe(T.HttpLabel("connectorArn")),
          currentVersion: S.optional(S.String).pipe(T.HttpQuery("currentVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/connectors/{connectorArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteConnectorRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ connectorArn: S.optional(S.String), connectorState: S.optional(S.String) }),
      ).annotate({ identifier: "DeleteConnectorResponse" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ customPluginArn: S.String.pipe(T.HttpLabel("customPluginArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/custom-plugins/{customPluginArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCustomPluginRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          customPluginArn: S.optional(S.String),
          customPluginState: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteCustomPluginResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          workerConfigurationArn: S.String.pipe(T.HttpLabel("workerConfigurationArn")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/worker-configurations/{workerConfigurationArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteWorkerConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workerConfigurationArn: S.optional(S.String),
          workerConfigurationState: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteWorkerConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ connectorArn: S.String.pipe(T.HttpLabel("connectorArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/connectors/{connectorArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeConnectorRequest" });
    case 5:
      return S.suspend(() => S.Struct({ cpuUtilizationPercentage: S.optional(S.Number) })).annotate(
        { identifier: "ScaleInPolicyDescription" },
      );
    case 6:
      return S.suspend(() => S.Struct({ cpuUtilizationPercentage: S.optional(S.Number) })).annotate(
        {
          identifier: "ScaleOutPolicyDescription",
        },
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxWorkerCount: S.optional(S.Number),
          mcuCount: S.optional(S.Number),
          minWorkerCount: S.optional(S.Number),
          scaleInPolicy: S.optional(__S(37, __c4, 5)),
          scaleOutPolicy: S.optional(__S(38, __c4, 6)),
          maxAutoscalingTaskCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AutoScalingDescription" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ mcuCount: S.optional(S.Number), workerCount: S.optional(S.Number) }),
      ).annotate({
        identifier: "ProvisionedCapacityDescription",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          autoScaling: S.optional(__S(39, __c4, 7)),
          provisionedCapacity: S.optional(__S(40, __c5, 0)),
        }),
      ).annotate({ identifier: "CapacityDescription" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          securityGroups: S.optional(__listOf__string),
          subnets: S.optional(__listOf__string),
        }),
      ).annotate({ identifier: "VpcDescription" });
    case 3:
      return S.suspend(() =>
        S.Struct({ bootstrapServers: S.optional(S.String), vpc: S.optional(__S(42, __c5, 2)) }),
      ).annotate({
        identifier: "ApacheKafkaClusterDescription",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ apacheKafkaCluster: S.optional(__S(43, __c5, 3)) }),
      ).annotate({ identifier: "KafkaClusterDescription" });
    case 5:
      return S.suspend(() => S.Struct({ authenticationType: S.optional(S.String) })).annotate({
        identifier: "KafkaClusterClientAuthenticationDescription",
      });
    case 6:
      return S.suspend(() => S.Struct({ encryptionType: S.optional(S.String) })).annotate({
        identifier: "KafkaClusterEncryptionInTransitDescription",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ enabled: S.optional(S.Boolean), logGroup: S.optional(S.String) }),
      ).annotate({
        identifier: "CloudWatchLogsLogDeliveryDescription",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ deliveryStream: S.optional(S.String), enabled: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "FirehoseLogDeliveryDescription",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          bucket: S.optional(S.String),
          enabled: S.optional(S.Boolean),
          prefix: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3LogDeliveryDescription" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          cloudWatchLogs: S.optional(__S(47, __c5, 7)),
          firehose: S.optional(__S(48, __c6, 0)),
          s3: S.optional(__S(49, __c6, 1)),
        }),
      ).annotate({
        identifier: "WorkerLogDeliveryDescription",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ workerLogDelivery: S.optional(__S(50, __c6, 2)) }),
      ).annotate({ identifier: "LogDeliveryDescription" });
    case 4:
      return S.suspend(() =>
        S.Struct({ customPluginArn: S.optional(S.String), revision: S.optional(S.Number) }),
      ).annotate({ identifier: "CustomPluginDescription" });
    case 5:
      return S.suspend(() => S.Struct({ customPlugin: S.optional(__S(52, __c6, 4)) })).annotate({
        identifier: "PluginDescription",
      });
    case 6:
      return S.Array(__S(53, __c6, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ revision: S.optional(S.Number), workerConfigurationArn: S.optional(S.String) }),
      ).annotate({
        identifier: "WorkerConfigurationDescription",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ code: S.optional(S.String), message: S.optional(S.String) }),
      ).annotate({ identifier: "StateDescription" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          capacity: S.optional(__S(41, __c5, 1)),
          connectorArn: S.optional(S.String),
          connectorConfiguration: S.optional(__S(4, __c0, 4)),
          connectorDescription: S.optional(S.String),
          connectorName: S.optional(S.String),
          connectorState: S.optional(S.String),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          currentVersion: S.optional(S.String),
          kafkaCluster: S.optional(__S(44, __c5, 4)),
          kafkaClusterClientAuthentication: S.optional(__S(45, __c5, 5)),
          kafkaClusterEncryptionInTransit: S.optional(__S(46, __c5, 6)),
          kafkaConnectVersion: S.optional(S.String),
          logDelivery: S.optional(__S(51, __c6, 3)),
          networkType: S.optional(S.String),
          plugins: S.optional(__listOfPluginDescription),
          serviceExecutionRoleArn: S.optional(S.String),
          workerConfiguration: S.optional(__S(55, __c6, 7)),
          stateDescription: S.optional(__S(56, __c7, 0)),
        }),
      ).annotate({
        identifier: "DescribeConnectorResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          connectorOperationArn: S.String.pipe(T.HttpLabel("connectorOperationArn")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/connectorOperations/{connectorOperationArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeConnectorOperationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ stepType: S.optional(S.String), stepState: S.optional(S.String) }),
      ).annotate({ identifier: "ConnectorOperationStep" });
    case 4:
      return S.Array(__S(59, __c7, 3));
    case 5:
      return S.suspend(() => S.Struct({ capacity: S.optional(__S(41, __c5, 1)) })).annotate({
        identifier: "WorkerSetting",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          connectorArn: S.optional(S.String),
          connectorOperationArn: S.optional(S.String),
          connectorOperationState: S.optional(S.String),
          connectorOperationType: S.optional(S.String),
          operationSteps: S.optional(__listOfConnectorOperationStep),
          originWorkerSetting: S.optional(__S(61, __c7, 5)),
          originConnectorConfiguration: S.optional(__S(4, __c0, 4)),
          targetWorkerSetting: S.optional(__S(61, __c7, 5)),
          targetConnectorConfiguration: S.optional(__S(4, __c0, 4)),
          errorInfo: S.optional(__S(56, __c7, 0)),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "DescribeConnectorOperationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ customPluginArn: S.String.pipe(T.HttpLabel("customPluginArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/custom-plugins/{customPluginArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeCustomPluginRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ fileMd5: S.optional(S.String), fileSize: S.optional(S.Number) }),
      ).annotate({
        identifier: "CustomPluginFileDescription",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          bucketArn: S.optional(S.String),
          fileKey: S.optional(S.String),
          objectVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3LocationDescription" });
    case 2:
      return S.suspend(() => S.Struct({ s3Location: S.optional(__S(65, __c8, 1)) })).annotate({
        identifier: "CustomPluginLocationDescription",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          contentType: S.optional(S.String),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(S.String),
          fileDescription: S.optional(__S(64, __c8, 0)),
          location: S.optional(__S(66, __c8, 2)),
          revision: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CustomPluginRevisionSummary",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          customPluginArn: S.optional(S.String),
          customPluginState: S.optional(S.String),
          description: S.optional(S.String),
          latestRevision: S.optional(__S(67, __c8, 3)),
          name: S.optional(S.String),
          stateDescription: S.optional(__S(56, __c7, 0)),
        }),
      ).annotate({
        identifier: "DescribeCustomPluginResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workerConfigurationArn: S.String.pipe(T.HttpLabel("workerConfigurationArn")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/worker-configurations/{workerConfigurationArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeWorkerConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(S.String),
          propertiesFileContent: S.optional(SensitiveString),
          revision: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "WorkerConfigurationRevisionDescription",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(S.String),
          latestRevision: S.optional(__S(70, __c8, 6)),
          name: S.optional(S.String),
          workerConfigurationArn: S.optional(S.String),
          workerConfigurationState: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeWorkerConfigurationResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          connectorArn: S.String.pipe(T.HttpLabel("connectorArn")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/connectors/{connectorArn}/operations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConnectorOperationsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          connectorOperationArn: S.optional(S.String),
          connectorOperationType: S.optional(S.String),
          connectorOperationState: S.optional(S.String),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "ConnectorOperationSummary",
      });
    case 2:
      return S.Array(__S(73, __c9, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          connectorOperations: S.optional(__listOfConnectorOperationSummary),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListConnectorOperationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          connectorNamePrefix: S.optional(S.String).pipe(T.HttpQuery("connectorNamePrefix")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/connectors" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListConnectorsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          capacity: S.optional(__S(41, __c5, 1)),
          connectorArn: S.optional(S.String),
          connectorDescription: S.optional(S.String),
          connectorName: S.optional(S.String),
          connectorState: S.optional(S.String),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          currentVersion: S.optional(S.String),
          kafkaCluster: S.optional(__S(44, __c5, 4)),
          kafkaClusterClientAuthentication: S.optional(__S(45, __c5, 5)),
          kafkaClusterEncryptionInTransit: S.optional(__S(46, __c5, 6)),
          kafkaConnectVersion: S.optional(S.String),
          logDelivery: S.optional(__S(51, __c6, 3)),
          networkType: S.optional(S.String),
          plugins: S.optional(__listOfPluginDescription),
          serviceExecutionRoleArn: S.optional(S.String),
          workerConfiguration: S.optional(__S(55, __c6, 7)),
        }),
      ).annotate({ identifier: "ConnectorSummary" });
    case 6:
      return S.Array(__S(77, __c9, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          connectors: S.optional(__listOfConnectorSummary),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListConnectorsResponse" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          namePrefix: S.optional(S.String).pipe(T.HttpQuery("namePrefix")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/custom-plugins" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListCustomPluginsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          customPluginArn: S.optional(S.String),
          customPluginState: S.optional(S.String),
          description: S.optional(S.String),
          latestRevision: S.optional(__S(67, __c8, 3)),
          name: S.optional(S.String),
        }),
      ).annotate({ identifier: "CustomPluginSummary" });
    case 2:
      return S.Array(__S(81, __c10, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          customPlugins: S.optional(__listOfCustomPluginSummary),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCustomPluginsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/tags/{resourceArn}" }),
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
    case 5:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(20, __c2, 4)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          namePrefix: S.optional(S.String).pipe(T.HttpQuery("namePrefix")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/worker-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListWorkerConfigurationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(S.String),
          latestRevision: S.optional(__S(28, __c3, 4)),
          name: S.optional(S.String),
          workerConfigurationArn: S.optional(S.String),
          workerConfigurationState: S.optional(S.String),
        }),
      ).annotate({
        identifier: "WorkerConfigurationSummary",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87, __c10, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          workerConfigurations: S.optional(__listOfWorkerConfigurationSummary),
        }),
      ).annotate({
        identifier: "ListWorkerConfigurationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          connectorArn: S.String.pipe(T.HttpLabel("connectorArn")),
          onlyFailedTasks: S.optional(S.Boolean).pipe(T.HttpQuery("onlyFailedTasks")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/connectors/{connectorArn}/restart" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RestartConnectorRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          connectorArn: S.optional(S.String),
          connectorOperationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "RestartConnectorResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(20, __c2, 4),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxWorkerCount: S.Number,
          mcuCount: S.Number,
          minWorkerCount: S.Number,
          scaleInPolicy: __S(0, __c0, 0),
          scaleOutPolicy: __S(0, __c0, 0),
          maxAutoscalingTaskCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AutoScalingUpdate" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ mcuCount: S.Number, workerCount: S.Number })).annotate({
        identifier: "ProvisionedCapacityUpdate",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          autoScaling: S.optional(__S(95, __c11, 7)),
          provisionedCapacity: S.optional(__S(96, __c12, 0)),
        }),
      ).annotate({ identifier: "CapacityUpdate" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          capacity: S.optional(__S(97, __c12, 1)),
          connectorConfiguration: S.optional(__S(4, __c0, 4)),
          connectorArn: S.String.pipe(T.HttpLabel("connectorArn")),
          currentVersion: S.String.pipe(T.HttpQuery("currentVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/connectors/{connectorArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateConnectorRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          connectorArn: S.optional(S.String),
          connectorState: S.optional(S.String),
          connectorOperationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "UpdateConnectorResponse" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
