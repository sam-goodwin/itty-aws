import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials as Creds } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "EMR containers",
  serviceShapeName: "AwsChicagoWebService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "emr-containers" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-10-01");
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
              `https://emr-containers-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (Region === "us-gov-east-1") {
              return e("https://emr-containers.us-gov-east-1.amazonaws.com");
            }
            if (Region === "us-gov-west-1") {
              return e("https://emr-containers.us-gov-west-1.amazonaws.com");
            }
            return e(
              `https://emr-containers-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://emr-containers.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://emr-containers.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class EKSRequestThrottledException
  extends /*@__PURE__*/ S.TaggedError<EKSRequestThrottledException>()(
    "EKSRequestThrottledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidResourceArn
  extends /*@__PURE__*/ S.TaggedError<InvalidResourceArn>()(
    "InvalidResourceArn",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "BadRequestException",
      message: { includes: "Invalid input resource arn" },
    }),
  ) {}
export class RequestThrottledException
  extends /*@__PURE__*/ S.TaggedError<RequestThrottledException>()(
    "RequestThrottledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type ResourceIdString = string;
export interface CancelJobRunRequest {
  id: string;
  virtualClusterId: string;
}
export interface CancelJobRunResponse {
  id?: string;
  virtualClusterId?: string;
}
export type ResourceNameString = string;
export type ClientToken = string;
export type ParametricIAMRoleArn = string;
export type ParametricReleaseLabel = string;
export type String1024 = string;
export type SensitivePropertiesMap = { [key: string]: string | undefined };
export interface Configuration {
  classification: string;
  properties?: { [key: string]: string | undefined };
  configurations?: Configuration[];
}
export type ConfigurationList = Configuration[];
export type TemplateParameter = string;
export type String256 = string;
export interface ParametricCloudWatchMonitoringConfiguration {
  logGroupName?: string;
  logStreamNamePrefix?: string;
}
export type UriString = string;
export interface ParametricS3MonitoringConfiguration {
  logUri?: string;
}
export interface ParametricMonitoringConfiguration {
  persistentAppUI?: string;
  cloudWatchMonitoringConfiguration?: ParametricCloudWatchMonitoringConfiguration;
  s3MonitoringConfiguration?: ParametricS3MonitoringConfiguration;
}
export interface ParametricConfigurationOverrides {
  applicationConfiguration?: Configuration[];
  monitoringConfiguration?: ParametricMonitoringConfiguration;
}
export type EntryPointPath = string | redacted.Redacted<string>;
export type EntryPointArgument = string | redacted.Redacted<string>;
export type EntryPointArguments = (string | redacted.Redacted<string>)[];
export type SparkSubmitParameters = string | redacted.Redacted<string>;
export interface SparkSubmitJobDriver {
  entryPoint: string | redacted.Redacted<string>;
  entryPointArguments?: (string | redacted.Redacted<string>)[];
  sparkSubmitParameters?: string | redacted.Redacted<string>;
}
export type SparkSqlParameters = string | redacted.Redacted<string>;
export interface SparkSqlJobDriver {
  entryPoint?: string | redacted.Redacted<string>;
  sparkSqlParameters?: string | redacted.Redacted<string>;
}
export interface JobDriver {
  sparkSubmitJobDriver?: SparkSubmitJobDriver;
  sparkSqlJobDriver?: SparkSqlJobDriver;
}
export type TemplateParameterName = string;
export type TemplateParameterDataType = "NUMBER" | "STRING" | (string & {});
export interface TemplateParameterConfiguration {
  type?: TemplateParameterDataType;
  defaultValue?: string;
}
export type TemplateParameterConfigurationMap = {
  [key: string]: TemplateParameterConfiguration | undefined;
};
export type String128 = string;
export type StringEmpty256 = string;
export type TagMap = { [key: string]: string | undefined };
export interface JobTemplateData {
  executionRoleArn: string;
  releaseLabel: string;
  configurationOverrides?: ParametricConfigurationOverrides;
  jobDriver: JobDriver;
  parameterConfiguration?: { [key: string]: TemplateParameterConfiguration | undefined };
  jobTags?: { [key: string]: string | undefined };
}
export type KmsKeyArn = string;
export interface CreateJobTemplateRequest {
  name: string;
  clientToken: string;
  jobTemplateData: JobTemplateData;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
}
export type JobTemplateArn = string;
export interface CreateJobTemplateResponse {
  id?: string;
  name?: string;
  arn?: string;
  createdAt?: Date;
}
export type EndpointType = string;
export type ReleaseLabel = string;
export type IAMRoleArn = string;
export type ACMCertArn = string;
export type AllowAWSToRetainLogs = "ENABLED" | "DISABLED" | (string & {});
export interface ManagedLogs {
  allowAWSToRetainLogs?: AllowAWSToRetainLogs;
  encryptionKeyArn?: string;
}
export type PersistentAppUI = "ENABLED" | "DISABLED" | (string & {});
export type LogGroupName = string;
export interface CloudWatchMonitoringConfiguration {
  logGroupName: string;
  logStreamNamePrefix?: string;
}
export interface S3MonitoringConfiguration {
  logUri: string;
  encryptionKeyArn?: string;
}
export type RotationSize = string;
export type MaxFilesToKeep = number;
export interface ContainerLogRotationConfiguration {
  rotationSize: string;
  maxFilesToKeep: number;
}
export interface MonitoringConfiguration {
  managedLogs?: ManagedLogs;
  persistentAppUI?: PersistentAppUI;
  cloudWatchMonitoringConfiguration?: CloudWatchMonitoringConfiguration;
  s3MonitoringConfiguration?: S3MonitoringConfiguration;
  containerLogRotationConfiguration?: ContainerLogRotationConfiguration;
}
export interface ConfigurationOverrides {
  applicationConfiguration?: Configuration[];
  monitoringConfiguration?: MonitoringConfiguration;
}
export type SessionIdleTimeoutInMinutes = number;
export interface CreateManagedEndpointRequest {
  name: string;
  virtualClusterId: string;
  type: string;
  releaseLabel: string;
  executionRoleArn: string;
  certificateArn?: string;
  configurationOverrides?: ConfigurationOverrides;
  clientToken: string;
  tags?: { [key: string]: string | undefined };
  sessionIdleTimeoutInMinutes?: number;
}
export type EndpointArn = string;
export interface CreateManagedEndpointResponse {
  id?: string;
  name?: string;
  arn?: string;
  virtualClusterId?: string;
}
export type ContainerProviderType = "EKS" | (string & {});
export type ClusterId = string;
export type KubernetesNamespace = string;
export type NodeLabelString = string;
export interface EksInfo {
  namespace?: string;
  nodeLabel?: string;
}
export type ContainerInfo = { eksInfo: EksInfo };
export interface ContainerProvider {
  type: ContainerProviderType;
  id: string;
  info?: ContainerInfo;
}
export type SessionTagValue = string;
export interface SecureNamespaceInfo {
  clusterId?: string;
  namespace?: string;
}
export interface LakeFormationConfiguration {
  authorizedSessionTagValue?: string;
  secureNamespaceInfo?: SecureNamespaceInfo;
  queryEngineRoleArn?: string;
}
export type CertificateProviderType = "PEM" | (string & {});
export type SecretsManagerArn = string;
export interface TLSCertificateConfiguration {
  certificateProviderType?: CertificateProviderType;
  publicCertificateSecretArn?: string;
  privateCertificateSecretArn?: string;
}
export interface InTransitEncryptionConfiguration {
  tlsCertificateConfiguration?: TLSCertificateConfiguration;
}
export interface EncryptionConfiguration {
  inTransitEncryptionConfiguration?: InTransitEncryptionConfiguration;
}
export interface AuthorizationConfiguration {
  lakeFormationConfiguration?: LakeFormationConfiguration;
  encryptionConfiguration?: EncryptionConfiguration;
}
export type IdentityCenterInstanceARN = string;
export type EmrIdentityCenterApplicationARN = string;
export interface IdentityCenterConfiguration {
  enableIdentityCenter?: boolean;
  identityCenterApplicationAssignmentRequired?: boolean;
  identityCenterInstanceARN?: string;
  emrIdentityCenterApplicationARN?: string;
}
export interface IAMConfiguration {
  systemRole?: string;
}
export interface AuthenticationConfiguration {
  identityCenterConfiguration?: IdentityCenterConfiguration;
  iamConfiguration?: IAMConfiguration;
}
export interface SecurityConfigurationData {
  authorizationConfiguration?: AuthorizationConfiguration;
  authenticationConfiguration?: AuthenticationConfiguration;
}
export interface CreateSecurityConfigurationRequest {
  clientToken: string;
  name: string;
  containerProvider?: ContainerProvider;
  securityConfigurationData: SecurityConfigurationData;
  tags?: { [key: string]: string | undefined };
}
export type SecurityConfigurationArn = string;
export interface CreateSecurityConfigurationResponse {
  id?: string;
  name?: string;
  arn?: string;
}
export type InQueueJobLimitInteger = number;
export type JobLimitInteger = number;
export interface SchedulerConfiguration {
  maxInQueueJobRuns?: number;
  maxConcurrentJobRuns?: number;
}
export interface CreateVirtualClusterRequest {
  name: string;
  containerProvider: ContainerProvider;
  clientToken: string;
  tags?: { [key: string]: string | undefined };
  securityConfigurationId?: string;
  sessionEnabled?: boolean;
  schedulerConfiguration?: SchedulerConfiguration;
}
export type VirtualClusterArn = string;
export interface CreateVirtualClusterResponse {
  id?: string;
  name?: string;
  arn?: string;
}
export interface DeleteJobTemplateRequest {
  id: string;
}
export interface DeleteJobTemplateResponse {
  id?: string;
}
export interface DeleteManagedEndpointRequest {
  id: string;
  virtualClusterId: string;
}
export interface DeleteManagedEndpointResponse {
  id?: string;
  virtualClusterId?: string;
}
export interface DeleteSecurityConfigurationRequest {
  id: string;
}
export interface DeleteSecurityConfigurationResponse {
  id?: string;
}
export interface DeleteVirtualClusterRequest {
  id: string;
}
export interface DeleteVirtualClusterResponse {
  id?: string;
}
export interface DescribeJobRunRequest {
  id: string;
  virtualClusterId: string;
}
export type JobArn = string;
export type JobRunState =
  | "PENDING"
  | "SUBMITTED"
  | "RUNNING"
  | "FAILED"
  | "CANCELLED"
  | "CANCEL_PENDING"
  | "COMPLETED"
  | (string & {});
export type RequestIdentityUserArn = string;
export type FailureReason =
  | "INTERNAL_ERROR"
  | "USER_ERROR"
  | "VALIDATION_ERROR"
  | "CLUSTER_UNAVAILABLE"
  | (string & {});
export type JavaInteger = number;
export interface RetryPolicyConfiguration {
  maxAttempts: number;
}
export interface RetryPolicyExecution {
  currentAttemptCount: number;
}
export interface JobRun {
  id?: string;
  name?: string;
  virtualClusterId?: string;
  arn?: string;
  state?: JobRunState;
  clientToken?: string;
  executionRoleArn?: string;
  releaseLabel?: string;
  configurationOverrides?: ConfigurationOverrides;
  jobDriver?: JobDriver;
  createdAt?: Date;
  createdBy?: string;
  finishedAt?: Date;
  stateDetails?: string;
  failureReason?: FailureReason;
  tags?: { [key: string]: string | undefined };
  retryPolicyConfiguration?: RetryPolicyConfiguration;
  retryPolicyExecution?: RetryPolicyExecution;
}
export interface DescribeJobRunResponse {
  jobRun?: JobRun;
}
export interface DescribeJobTemplateRequest {
  id: string;
}
export type String2048 = string;
export interface JobTemplate {
  name?: string;
  id?: string;
  arn?: string;
  createdAt?: Date;
  createdBy?: string;
  tags?: { [key: string]: string | undefined };
  jobTemplateData: JobTemplateData;
  kmsKeyArn?: string;
  decryptionError?: string;
}
export interface DescribeJobTemplateResponse {
  jobTemplate?: JobTemplate;
}
export interface DescribeManagedEndpointRequest {
  id: string;
  virtualClusterId: string;
}
export type EndpointState =
  | "CREATING"
  | "ACTIVE"
  | "TERMINATING"
  | "TERMINATED"
  | "TERMINATED_WITH_ERRORS"
  | (string & {});
export type Base64Encoded = string;
export interface Certificate {
  certificateArn?: string;
  certificateData?: string;
}
export type SubnetIds = string[];
export interface Endpoint {
  id?: string;
  name?: string;
  arn?: string;
  virtualClusterId?: string;
  type?: string;
  state?: EndpointState;
  releaseLabel?: string;
  executionRoleArn?: string;
  certificateArn?: string;
  certificateAuthority?: Certificate;
  configurationOverrides?: ConfigurationOverrides;
  serverUrl?: string;
  authProxyUrl?: string;
  createdAt?: Date;
  securityGroup?: string;
  subnetIds?: string[];
  stateDetails?: string;
  failureReason?: FailureReason;
  tags?: { [key: string]: string | undefined };
}
const Endpoint = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<Endpoint>;
export interface DescribeManagedEndpointResponse {
  endpoint?: Endpoint;
}
export interface DescribeSecurityConfigurationRequest {
  id: string;
}
export interface SecurityConfiguration {
  id?: string;
  name?: string;
  arn?: string;
  createdAt?: Date;
  createdBy?: string;
  securityConfigurationData?: SecurityConfigurationData;
  tags?: { [key: string]: string | undefined };
}
export interface DescribeSecurityConfigurationResponse {
  securityConfiguration?: SecurityConfiguration;
}
export interface DescribeVirtualClusterRequest {
  id: string;
}
export type VirtualClusterState =
  | "RUNNING"
  | "TERMINATING"
  | "TERMINATED"
  | "ARRESTED"
  | (string & {});
export type NonNegativeInteger = number;
export interface SchedulerStatus {
  currentInQueueJobRuns?: number;
  currentConcurrentJobRuns?: number;
}
export interface VirtualCluster {
  id?: string;
  name?: string;
  arn?: string;
  state?: VirtualClusterState;
  containerProvider?: ContainerProvider;
  createdAt?: Date;
  tags?: { [key: string]: string | undefined };
  securityConfigurationId?: string;
  sessionEnabled?: boolean;
  schedulerConfiguration?: SchedulerConfiguration;
  schedulerStatus?: SchedulerStatus;
}
export interface DescribeVirtualClusterResponse {
  virtualCluster?: VirtualCluster;
}
export type CredentialType = string;
export type LogContext = string;
export interface GetManagedEndpointSessionCredentialsRequest {
  endpointIdentifier: string;
  virtualClusterIdentifier: string;
  executionRoleArn: string;
  credentialType: string;
  durationInSeconds?: number;
  logContext?: string;
  clientToken?: string;
}
export type Token = string | redacted.Redacted<string>;
export type Credentials = { token: string | redacted.Redacted<string> };
export interface GetManagedEndpointSessionCredentialsResponse {
  id?: string;
  credentials?: Credentials;
  endpointCredentials?: Credentials;
  expiresAt?: Date;
}
export type JobRunStates = JobRunState[];
export type NextToken = string;
export interface ListJobRunsRequest {
  virtualClusterId: string;
  createdBefore?: Date;
  createdAfter?: Date;
  name?: string;
  states?: JobRunState[];
  maxResults?: number;
  nextToken?: string;
}
export type JobRuns = JobRun[];
export interface ListJobRunsResponse {
  jobRuns?: JobRun[];
  nextToken?: string;
}
export interface ListJobTemplatesRequest {
  createdAfter?: Date;
  createdBefore?: Date;
  maxResults?: number;
  nextToken?: string;
}
export type JobTemplates = JobTemplate[];
export interface ListJobTemplatesResponse {
  templates?: JobTemplate[];
  nextToken?: string;
}
export type EndpointTypes = string[];
export type EndpointStates = EndpointState[];
export interface ListManagedEndpointsRequest {
  virtualClusterId: string;
  createdBefore?: Date;
  createdAfter?: Date;
  types?: string[];
  states?: EndpointState[];
  maxResults?: number;
  nextToken?: string;
}
export type Endpoints = Endpoint[];
export interface ListManagedEndpointsResponse {
  endpoints?: Endpoint[];
  nextToken?: string;
}
export interface ListSecurityConfigurationsRequest {
  createdAfter?: Date;
  createdBefore?: Date;
  maxResults?: number;
  nextToken?: string;
}
export type SecurityConfigurations = SecurityConfiguration[];
export interface ListSecurityConfigurationsResponse {
  securityConfigurations?: SecurityConfiguration[];
  nextToken?: string;
}
export type RsiArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export type VirtualClusterStates = VirtualClusterState[];
export interface ListVirtualClustersRequest {
  containerProviderId?: string;
  containerProviderType?: ContainerProviderType;
  createdAfter?: Date;
  createdBefore?: Date;
  states?: VirtualClusterState[];
  maxResults?: number;
  nextToken?: string;
  eksAccessEntryIntegrated?: boolean;
}
export type VirtualClusters = VirtualCluster[];
export interface ListVirtualClustersResponse {
  virtualClusters?: VirtualCluster[];
  nextToken?: string;
}
export type TemplateParameterInputMap = { [key: string]: string | undefined };
export interface StartJobRunRequest {
  name?: string;
  virtualClusterId: string;
  clientToken: string;
  executionRoleArn?: string;
  releaseLabel?: string;
  jobDriver?: JobDriver;
  configurationOverrides?: ConfigurationOverrides;
  tags?: { [key: string]: string | undefined };
  jobTemplateId?: string;
  jobTemplateParameters?: { [key: string]: string | undefined };
  retryPolicyConfiguration?: RetryPolicyConfiguration;
}
export interface StartJobRunResponse {
  id?: string;
  name?: string;
  arn?: string;
  virtualClusterId?: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateVirtualClusterRequest {
  id: string;
  schedulerConfiguration?: SchedulerConfiguration;
  clientToken: string;
}
export interface UpdateVirtualClusterResponse {
  virtualCluster?: VirtualCluster;
}
export type CancelJobRunError =
  | InternalServerException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or
 * SparkSQL query, that you submit to Amazon EMR on EKS.
 */
export const cancelJobRun: API.OperationMethod<
  CancelJobRunRequest,
  CancelJobRunResponse,
  CancelJobRunError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<CancelJobRunRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<CancelJobRunResponse>,
  errors: [InternalServerException, ValidationException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelJobRun",
}));

export type CreateJobTemplateError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a job template. Job template stores values of StartJobRun API request in a
 * template and can be used to start a job run. Job template allows two use cases: avoid
 * repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun
 * API request.
 */
export const createJobTemplate: API.OperationMethod<
  CreateJobTemplateRequest,
  CreateJobTemplateResponse,
  CreateJobTemplateError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17, __c2, 1) as any as S.Schema<CreateJobTemplateRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<CreateJobTemplateResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateJobTemplate",
}));

export type CreateManagedEndpointError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can
 * communicate with your virtual cluster.
 */
export const createManagedEndpoint: API.OperationMethod<
  CreateManagedEndpointRequest,
  CreateManagedEndpointResponse,
  CreateManagedEndpointError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25, __c3, 1) as any as S.Schema<CreateManagedEndpointRequest>,
  output: __S(26, __c3, 2) as any as S.Schema<CreateManagedEndpointResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateManagedEndpoint",
}));

export type CreateSecurityConfigurationError =
  | InternalServerException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a security configuration. Security configurations in Amazon EMR on EKS are
 * templates for different security setups. You can use security configurations to configure
 * the Lake Formation integration setup. You can also create a security configuration
 * to re-use a security setup each time you create a virtual cluster.
 */
export const createSecurityConfiguration: API.OperationMethod<
  CreateSecurityConfigurationRequest,
  CreateSecurityConfigurationResponse,
  CreateSecurityConfigurationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40, __c5, 0) as any as S.Schema<CreateSecurityConfigurationRequest>,
  output: __S(41, __c5, 1) as any as S.Schema<CreateSecurityConfigurationResponse>,
  errors: [InternalServerException, ValidationException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSecurityConfiguration",
}));

export type CreateVirtualClusterError =
  | EKSRequestThrottledException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, update, describe, list and delete virtual clusters. They do not consume any
 * additional resource in your system. A single virtual cluster maps to a single Kubernetes
 * namespace. Given this relationship, you can model virtual clusters the same way you model
 * Kubernetes namespaces to meet your requirements.
 */
export const createVirtualCluster: API.OperationMethod<
  CreateVirtualClusterRequest,
  CreateVirtualClusterResponse,
  CreateVirtualClusterError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43, __c5, 3) as any as S.Schema<CreateVirtualClusterRequest>,
  output: __S(41, __c5, 1) as any as S.Schema<CreateVirtualClusterResponse>,
  errors: [
    EKSRequestThrottledException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVirtualCluster",
}));

export type DeleteJobTemplateError =
  | InternalServerException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a job template. Job template stores values of StartJobRun API request in a
 * template and can be used to start a job run. Job template allows two use cases: avoid
 * repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun
 * API request.
 */
export const deleteJobTemplate: API.OperationMethod<
  DeleteJobTemplateRequest,
  DeleteJobTemplateResponse,
  DeleteJobTemplateError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44, __c5, 4) as any as S.Schema<DeleteJobTemplateRequest>,
  output: __S(45, __c5, 5) as any as S.Schema<DeleteJobTemplateResponse>,
  errors: [InternalServerException, ValidationException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteJobTemplate",
}));

export type DeleteManagedEndpointError =
  | InternalServerException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can
 * communicate with your virtual cluster.
 */
export const deleteManagedEndpoint: API.OperationMethod<
  DeleteManagedEndpointRequest,
  DeleteManagedEndpointResponse,
  DeleteManagedEndpointError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(46, __c5, 6) as any as S.Schema<DeleteManagedEndpointRequest>,
  output: __S(47, __c5, 7) as any as S.Schema<DeleteManagedEndpointResponse>,
  errors: [InternalServerException, ValidationException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteManagedEndpoint",
}));

export type DeleteSecurityConfigurationError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a security configuration.
 */
export const deleteSecurityConfiguration: API.OperationMethod<
  DeleteSecurityConfigurationRequest,
  DeleteSecurityConfigurationResponse,
  DeleteSecurityConfigurationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48, __c6, 0) as any as S.Schema<DeleteSecurityConfigurationRequest>,
  output: __S(45, __c5, 5) as any as S.Schema<DeleteSecurityConfigurationResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSecurityConfiguration",
}));

export type DeleteVirtualClusterError =
  | InternalServerException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, update, describe, list and delete virtual clusters. They do not consume any
 * additional resource in your system. A single virtual cluster maps to a single Kubernetes
 * namespace. Given this relationship, you can model virtual clusters the same way you model
 * Kubernetes namespaces to meet your requirements.
 */
export const deleteVirtualCluster: API.OperationMethod<
  DeleteVirtualClusterRequest,
  DeleteVirtualClusterResponse,
  DeleteVirtualClusterError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49, __c6, 1) as any as S.Schema<DeleteVirtualClusterRequest>,
  output: __S(45, __c5, 5) as any as S.Schema<DeleteVirtualClusterResponse>,
  errors: [InternalServerException, ValidationException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVirtualCluster",
}));

export type DescribeJobRunError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays detailed information about a job run. A job run is a unit of work, such as a
 * Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
 */
export const describeJobRun: API.OperationMethod<
  DescribeJobRunRequest,
  DescribeJobRunResponse,
  DescribeJobRunError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50, __c6, 2) as any as S.Schema<DescribeJobRunRequest>,
  output: __S(54, __c6, 6) as any as S.Schema<DescribeJobRunResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeJobRun",
}));

export type DescribeJobTemplateError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays detailed information about a specified job template. Job template stores values
 * of StartJobRun API request in a template and can be used to start a job run. Job template
 * allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing
 * certain values in StartJobRun API request.
 */
export const describeJobTemplate: API.OperationMethod<
  DescribeJobTemplateRequest,
  DescribeJobTemplateResponse,
  DescribeJobTemplateError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<DescribeJobTemplateRequest>,
  output: __S(57, __c7, 1) as any as S.Schema<DescribeJobTemplateResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeJobTemplate",
}));

export type DescribeManagedEndpointError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays detailed information about a managed endpoint. A managed endpoint is a gateway
 * that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
 */
export const describeManagedEndpoint: API.OperationMethod<
  DescribeManagedEndpointRequest,
  DescribeManagedEndpointResponse,
  DescribeManagedEndpointError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58, __c7, 2) as any as S.Schema<DescribeManagedEndpointRequest>,
  output: __S(62, __c7, 6) as any as S.Schema<DescribeManagedEndpointResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeManagedEndpoint",
}));

export type DescribeSecurityConfigurationError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays detailed information about a specified security configuration. Security
 * configurations in Amazon EMR on EKS are templates for different security setups. You
 * can use security configurations to configure the Lake Formation integration setup.
 * You can also create a security configuration to re-use a security setup each time you
 * create a virtual cluster.
 */
export const describeSecurityConfiguration: API.OperationMethod<
  DescribeSecurityConfigurationRequest,
  DescribeSecurityConfigurationResponse,
  DescribeSecurityConfigurationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63, __c7, 7) as any as S.Schema<DescribeSecurityConfigurationRequest>,
  output: __S(65, __c8, 1) as any as S.Schema<DescribeSecurityConfigurationResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSecurityConfiguration",
}));

export type DescribeVirtualClusterError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays detailed information about a specified virtual cluster. Virtual cluster is a
 * managed entity on Amazon EMR on EKS. You can create, update, describe, list and delete virtual
 * clusters. They do not consume any additional resource in your system. A single virtual
 * cluster maps to a single Kubernetes namespace. Given this relationship, you can model
 * virtual clusters the same way you model Kubernetes namespaces to meet your
 * requirements.
 */
export const describeVirtualCluster: API.OperationMethod<
  DescribeVirtualClusterRequest,
  DescribeVirtualClusterResponse,
  DescribeVirtualClusterError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66, __c8, 2) as any as S.Schema<DescribeVirtualClusterRequest>,
  output: __S(69, __c8, 5) as any as S.Schema<DescribeVirtualClusterResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeVirtualCluster",
}));

export type GetManagedEndpointSessionCredentialsError =
  | InternalServerException
  | RequestThrottledException
  | ResourceNotFoundException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Generate a session token to connect to a managed endpoint.
 */
export const getManagedEndpointSessionCredentials: API.OperationMethod<
  GetManagedEndpointSessionCredentialsRequest,
  GetManagedEndpointSessionCredentialsResponse,
  GetManagedEndpointSessionCredentialsError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<GetManagedEndpointSessionCredentialsRequest>,
  output: __S(72, __c9, 0) as any as S.Schema<GetManagedEndpointSessionCredentialsResponse>,
  errors: [
    InternalServerException,
    RequestThrottledException,
    ResourceNotFoundException,
    ValidationException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetManagedEndpointSessionCredentials",
}));

export type ListJobRunsError =
  | InternalServerException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists job runs based on a set of parameters. A job run is a unit of work, such as a
 * Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
 */
export const listJobRuns: API.PaginatedOperationMethod<
  ListJobRunsRequest,
  ListJobRunsResponse,
  ListJobRunsError,
  Creds | HttpClient.HttpClient,
  JobRun
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(74, __c9, 2) as any as S.Schema<ListJobRunsRequest>,
  output: __S(76, __c9, 4) as any as S.Schema<ListJobRunsResponse>,
  errors: [InternalServerException, ValidationException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJobRuns",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobRuns",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListJobTemplatesError =
  | InternalServerException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists job templates based on a set of parameters. Job template stores values of
 * StartJobRun API request in a template and can be used to start a job run. Job template
 * allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing
 * certain values in StartJobRun API request.
 */
export const listJobTemplates: API.PaginatedOperationMethod<
  ListJobTemplatesRequest,
  ListJobTemplatesResponse,
  ListJobTemplatesError,
  Creds | HttpClient.HttpClient,
  JobTemplate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<ListJobTemplatesRequest>,
  output: __S(79, __c9, 7) as any as S.Schema<ListJobTemplatesResponse>,
  errors: [InternalServerException, ValidationException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJobTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "templates",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListManagedEndpointsError =
  | InternalServerException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway
 * that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
 */
export const listManagedEndpoints: API.PaginatedOperationMethod<
  ListManagedEndpointsRequest,
  ListManagedEndpointsResponse,
  ListManagedEndpointsError,
  Creds | HttpClient.HttpClient,
  Endpoint
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(80, __c10, 0) as any as S.Schema<ListManagedEndpointsRequest>,
  output: __S(82, __c10, 2) as any as S.Schema<ListManagedEndpointsResponse>,
  errors: [InternalServerException, ValidationException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedEndpoints",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "endpoints",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSecurityConfigurationsError =
  | InternalServerException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists security configurations based on a set of parameters. Security configurations in
 * Amazon EMR on EKS are templates for different security setups. You can use security
 * configurations to configure the Lake Formation integration setup. You can also
 * create a security configuration to re-use a security setup each time you create a virtual
 * cluster.
 */
export const listSecurityConfigurations: API.PaginatedOperationMethod<
  ListSecurityConfigurationsRequest,
  ListSecurityConfigurationsResponse,
  ListSecurityConfigurationsError,
  Creds | HttpClient.HttpClient,
  SecurityConfiguration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(83, __c10, 3) as any as S.Schema<ListSecurityConfigurationsRequest>,
  output: __S(85, __c10, 5) as any as S.Schema<ListSecurityConfigurationsResponse>,
  errors: [InternalServerException, ValidationException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSecurityConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "securityConfigurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists the tags assigned to the resources.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86, __c10, 6) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(87, __c10, 7) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListVirtualClustersError =
  | InternalServerException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists information about the specified virtual cluster. Virtual cluster is a managed
 * entity on Amazon EMR on EKS. You can create, update, describe, list and delete virtual
 * clusters. They do not consume any additional resource in your system. A single virtual
 * cluster maps to a single Kubernetes namespace. Given this relationship, you can model
 * virtual clusters the same way you model Kubernetes namespaces to meet your
 * requirements.
 */
export const listVirtualClusters: API.PaginatedOperationMethod<
  ListVirtualClustersRequest,
  ListVirtualClustersResponse,
  ListVirtualClustersError,
  Creds | HttpClient.HttpClient,
  VirtualCluster
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(88, __c11, 0) as any as S.Schema<ListVirtualClustersRequest>,
  output: __S(90, __c11, 2) as any as S.Schema<ListVirtualClustersResponse>,
  errors: [InternalServerException, ValidationException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVirtualClusters",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "virtualClusters",
    pageSize: "maxResults",
  } as const,
})) as any;

export type StartJobRunError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or
 * SparkSQL query, that you submit to Amazon EMR on EKS.
 */
export const startJobRun: API.OperationMethod<
  StartJobRunRequest,
  StartJobRunResponse,
  StartJobRunError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(91, __c11, 3) as any as S.Schema<StartJobRunRequest>,
  output: __S(92, __c11, 4) as any as S.Schema<StartJobRunResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartJobRun",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | TooManyRequestsException
  | InvalidResourceArn
  | CommonErrors;
/**
 * Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services
 * resource. Each tag consists of a key and an optional value, both of which you define. Tags
 * enable you to categorize your Amazon Web Services resources by attributes such as purpose,
 * owner, or environment. When you have many resources of the same type, you can quickly
 * identify a specific resource based on the tags you've assigned to it. For example, you can
 * define a set of tags for your Amazon EMR on EKS clusters to help you track each
 * cluster's owner and stack level. We recommend that you devise a consistent set of tag keys
 * for each resource type. You can then search and filter the resources based on the tags that
 * you add.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93, __c11, 5) as any as S.Schema<TagResourceRequest>,
  output: __S(94, __c11, 6) as any as S.Schema<TagResourceResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    TooManyRequestsException,
    InvalidResourceArn,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | TooManyRequestsException
  | InvalidResourceArn
  | CommonErrors;
/**
 * Removes tags from resources.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95, __c11, 7) as any as S.Schema<UntagResourceRequest>,
  output: __S(94, __c11, 6) as any as S.Schema<UntagResourceResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    TooManyRequestsException,
    InvalidResourceArn,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateVirtualClusterError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, update, describe, list and delete virtual clusters. They do not consume any
 * additional resource in your system. A single virtual cluster maps to a single Kubernetes
 * namespace. Given this relationship, you can model virtual clusters the same way you model
 * Kubernetes namespaces to meet your requirements.
 */
export const updateVirtualCluster: API.OperationMethod<
  UpdateVirtualClusterRequest,
  UpdateVirtualClusterResponse,
  UpdateVirtualClusterError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(96, __c12, 0) as any as S.Schema<UpdateVirtualClusterRequest>,
  output: __S(69, __c8, 5) as any as S.Schema<UpdateVirtualClusterResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVirtualCluster",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          virtualClusterId: S.String.pipe(T.HttpLabel("virtualClusterId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/virtualclusters/{virtualClusterId}/jobruns/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelJobRunRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), virtualClusterId: S.optional(S.String) }),
      ).annotate({ identifier: "CancelJobRunResponse" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          classification: S.String,
          properties: S.optional(__S(2, __c0, 2)),
          configurations: S.optional(
            S.suspend(() => __S(4, __c0, 4)).annotate({ identifier: "ConfigurationList" }),
          ),
        }),
      ).annotate({ identifier: "Configuration" });
    case 4:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<Configuration> => __S(3, __c0, 3)).annotate({
          identifier: "Configuration",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({ logGroupName: S.optional(S.String), logStreamNamePrefix: S.optional(S.String) }),
      ).annotate({
        identifier: "ParametricCloudWatchMonitoringConfiguration",
      });
    case 6:
      return S.suspend(() => S.Struct({ logUri: S.optional(S.String) })).annotate({
        identifier: "ParametricS3MonitoringConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          persistentAppUI: S.optional(S.String),
          cloudWatchMonitoringConfiguration: S.optional(__S(5, __c0, 5)),
          s3MonitoringConfiguration: S.optional(__S(6, __c0, 6)),
        }),
      ).annotate({
        identifier: "ParametricMonitoringConfiguration",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationConfiguration: S.optional(__S(4, __c0, 4)),
          monitoringConfiguration: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({
        identifier: "ParametricConfigurationOverrides",
      });
    case 1:
      return S.Array(SensitiveString);
    case 2:
      return S.suspend(() =>
        S.Struct({
          entryPoint: SensitiveString,
          entryPointArguments: S.optional(__S(9, __c1, 1)),
          sparkSubmitParameters: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "SparkSubmitJobDriver" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          entryPoint: S.optional(SensitiveString),
          sparkSqlParameters: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "SparkSqlJobDriver" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sparkSubmitJobDriver: S.optional(__S(10, __c1, 2)),
          sparkSqlJobDriver: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({ identifier: "JobDriver" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          defaultValue: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TemplateParameterConfiguration",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(13, __c1, 5).pipe(S.optional));
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          executionRoleArn: S.String,
          releaseLabel: S.String,
          configurationOverrides: S.optional(__S(8, __c1, 0)),
          jobDriver: __S(12, __c1, 4),
          parameterConfiguration: S.optional(__S(14, __c1, 6)),
          jobTags: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({ identifier: "JobTemplateData" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          clientToken: S.String.pipe(T.IdempotencyToken()),
          jobTemplateData: __S(16, __c2, 0),
          tags: S.optional(__S(15, __c1, 7)),
          kmsKeyArn: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/jobtemplates" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateJobTemplateRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "CreateJobTemplateResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          allowAWSToRetainLogs: S.optional(S.String),
          encryptionKeyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ManagedLogs" });
    case 4:
      return S.suspend(() =>
        S.Struct({ logGroupName: S.String, logStreamNamePrefix: S.optional(S.String) }),
      ).annotate({
        identifier: "CloudWatchMonitoringConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ logUri: S.String, encryptionKeyArn: S.optional(S.String) }),
      ).annotate({
        identifier: "S3MonitoringConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ rotationSize: S.String, maxFilesToKeep: S.Number }),
      ).annotate({
        identifier: "ContainerLogRotationConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          managedLogs: S.optional(__S(19, __c2, 3)),
          persistentAppUI: S.optional(S.String),
          cloudWatchMonitoringConfiguration: S.optional(__S(20, __c2, 4)),
          s3MonitoringConfiguration: S.optional(__S(21, __c2, 5)),
          containerLogRotationConfiguration: S.optional(__S(22, __c2, 6)),
        }),
      ).annotate({ identifier: "MonitoringConfiguration" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationConfiguration: S.optional(__S(4, __c0, 4)),
          monitoringConfiguration: S.optional(__S(23, __c2, 7)),
        }),
      ).annotate({ identifier: "ConfigurationOverrides" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          virtualClusterId: S.String.pipe(T.HttpLabel("virtualClusterId")),
          type: S.String,
          releaseLabel: S.String,
          executionRoleArn: S.String,
          certificateArn: S.optional(S.String),
          configurationOverrides: S.optional(__S(24, __c3, 0)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          tags: S.optional(__S(15, __c1, 7)),
          sessionIdleTimeoutInMinutes: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/virtualclusters/{virtualClusterId}/endpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateManagedEndpointRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          virtualClusterId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateManagedEndpointResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ namespace: S.optional(S.String), nodeLabel: S.optional(S.String) }),
      ).annotate({ identifier: "EksInfo" });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ eksInfo: __S(27, __c3, 3) })]);
    case 5:
      return S.suspend(() =>
        S.Struct({ type: S.String, id: S.String, info: S.optional(__S(28, __c3, 4)) }),
      ).annotate({ identifier: "ContainerProvider" });
    case 6:
      return S.suspend(() =>
        S.Struct({ clusterId: S.optional(S.String), namespace: S.optional(S.String) }),
      ).annotate({ identifier: "SecureNamespaceInfo" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          authorizedSessionTagValue: S.optional(S.String),
          secureNamespaceInfo: S.optional(__S(30, __c3, 6)),
          queryEngineRoleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LakeFormationConfiguration",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          certificateProviderType: S.optional(S.String),
          publicCertificateSecretArn: S.optional(S.String),
          privateCertificateSecretArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TLSCertificateConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ tlsCertificateConfiguration: S.optional(__S(32, __c4, 0)) }),
      ).annotate({
        identifier: "InTransitEncryptionConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          inTransitEncryptionConfiguration: S.optional(__S(33, __c4, 1)),
        }),
      ).annotate({ identifier: "EncryptionConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          lakeFormationConfiguration: S.optional(__S(31, __c3, 7)),
          encryptionConfiguration: S.optional(__S(34, __c4, 2)),
        }),
      ).annotate({
        identifier: "AuthorizationConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          enableIdentityCenter: S.optional(S.Boolean),
          identityCenterApplicationAssignmentRequired: S.optional(S.Boolean),
          identityCenterInstanceARN: S.optional(S.String),
          emrIdentityCenterApplicationARN: S.optional(S.String),
        }),
      ).annotate({
        identifier: "IdentityCenterConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ systemRole: S.optional(S.String) })).annotate({
        identifier: "IAMConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          identityCenterConfiguration: S.optional(__S(36, __c4, 4)),
          iamConfiguration: S.optional(__S(37, __c4, 5)),
        }),
      ).annotate({
        identifier: "AuthenticationConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          authorizationConfiguration: S.optional(__S(35, __c4, 3)),
          authenticationConfiguration: S.optional(__S(38, __c4, 6)),
        }),
      ).annotate({
        identifier: "SecurityConfigurationData",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.String.pipe(T.IdempotencyToken()),
          name: S.String,
          containerProvider: S.optional(__S(29, __c3, 5)),
          securityConfigurationData: __S(39, __c4, 7),
          tags: S.optional(__S(15, __c1, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/securityconfigurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSecurityConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateSecurityConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxInQueueJobRuns: S.optional(S.Number),
          maxConcurrentJobRuns: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SchedulerConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          containerProvider: __S(29, __c3, 5),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          tags: S.optional(__S(15, __c1, 7)),
          securityConfigurationId: S.optional(S.String),
          sessionEnabled: S.optional(S.Boolean),
          schedulerConfiguration: S.optional(__S(42, __c5, 2)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/virtualclusters" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateVirtualClusterRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/jobtemplates/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteJobTemplateRequest" });
    case 5:
      return S.suspend(() => S.Struct({ id: S.optional(S.String) })).annotate({
        identifier: "DeleteJobTemplateResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          virtualClusterId: S.String.pipe(T.HttpLabel("virtualClusterId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/virtualclusters/{virtualClusterId}/endpoints/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteManagedEndpointRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), virtualClusterId: S.optional(S.String) }),
      ).annotate({
        identifier: "DeleteManagedEndpointResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/securityconfigurations/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSecurityConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/virtualclusters/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVirtualClusterRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          virtualClusterId: S.String.pipe(T.HttpLabel("virtualClusterId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/virtualclusters/{virtualClusterId}/jobruns/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeJobRunRequest" });
    case 3:
      return S.suspend(() => S.Struct({ maxAttempts: S.Number })).annotate({
        identifier: "RetryPolicyConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ currentAttemptCount: S.Number })).annotate({
        identifier: "RetryPolicyExecution",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          virtualClusterId: S.optional(S.String),
          arn: S.optional(S.String),
          state: S.optional(S.String),
          clientToken: S.optional(S.String),
          executionRoleArn: S.optional(S.String),
          releaseLabel: S.optional(S.String),
          configurationOverrides: S.optional(__S(24, __c3, 0)),
          jobDriver: S.optional(__S(12, __c1, 4)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          createdBy: S.optional(S.String),
          finishedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          stateDetails: S.optional(S.String),
          failureReason: S.optional(S.String),
          tags: S.optional(__S(15, __c1, 7)),
          retryPolicyConfiguration: S.optional(__S(51, __c6, 3)),
          retryPolicyExecution: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({ identifier: "JobRun" });
    case 6:
      return S.suspend(() => S.Struct({ jobRun: S.optional(__S(53, __c6, 5)) })).annotate({
        identifier: "DescribeJobRunResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/jobtemplates/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeJobTemplateRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          id: S.optional(S.String),
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          createdBy: S.optional(S.String),
          tags: S.optional(__S(15, __c1, 7)),
          jobTemplateData: __S(16, __c2, 0),
          kmsKeyArn: S.optional(S.String),
          decryptionError: S.optional(S.String),
        }),
      ).annotate({ identifier: "JobTemplate" });
    case 1:
      return S.suspend(() => S.Struct({ jobTemplate: S.optional(__S(56, __c7, 0)) })).annotate({
        identifier: "DescribeJobTemplateResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          virtualClusterId: S.String.pipe(T.HttpLabel("virtualClusterId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/virtualclusters/{virtualClusterId}/endpoints/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeManagedEndpointRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ certificateArn: S.optional(S.String), certificateData: S.optional(S.String) }),
      ).annotate({ identifier: "Certificate" });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          virtualClusterId: S.optional(S.String),
          type: S.optional(S.String),
          state: S.optional(S.String),
          releaseLabel: S.optional(S.String),
          executionRoleArn: S.optional(S.String),
          certificateArn: S.optional(S.String),
          certificateAuthority: S.optional(__S(59, __c7, 3)),
          configurationOverrides: S.optional(__S(24, __c3, 0)),
          serverUrl: S.optional(S.String),
          authProxyUrl: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          securityGroup: S.optional(S.String),
          subnetIds: S.optional(__S(60, __c7, 4)),
          stateDetails: S.optional(S.String),
          failureReason: S.optional(S.String),
          tags: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({ identifier: "Endpoint" });
    case 6:
      return S.suspend(() => S.Struct({ endpoint: S.optional(Endpoint) })).annotate({
        identifier: "DescribeManagedEndpointResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/securityconfigurations/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeSecurityConfigurationRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          createdBy: S.optional(S.String),
          securityConfigurationData: S.optional(__S(39, __c4, 7)),
          tags: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({ identifier: "SecurityConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({ securityConfiguration: S.optional(__S(64, __c8, 0)) }),
      ).annotate({
        identifier: "DescribeSecurityConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/virtualclusters/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeVirtualClusterRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          currentInQueueJobRuns: S.optional(S.Number),
          currentConcurrentJobRuns: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SchedulerStatus" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          state: S.optional(S.String),
          containerProvider: S.optional(__S(29, __c3, 5)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          tags: S.optional(__S(15, __c1, 7)),
          securityConfigurationId: S.optional(S.String),
          sessionEnabled: S.optional(S.Boolean),
          schedulerConfiguration: S.optional(__S(42, __c5, 2)),
          schedulerStatus: S.optional(__S(67, __c8, 3)),
        }),
      ).annotate({ identifier: "VirtualCluster" });
    case 5:
      return S.suspend(() => S.Struct({ virtualCluster: S.optional(__S(68, __c8, 4)) })).annotate({
        identifier: "DescribeVirtualClusterResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          endpointIdentifier: S.String.pipe(T.HttpLabel("endpointIdentifier")),
          virtualClusterIdentifier: S.String.pipe(T.HttpLabel("virtualClusterIdentifier")),
          executionRoleArn: S.String,
          credentialType: S.String,
          durationInSeconds: S.optional(S.Number),
          logContext: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/virtualclusters/{virtualClusterIdentifier}/endpoints/{endpointIdentifier}/credentials",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetManagedEndpointSessionCredentialsRequest",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ token: SensitiveString })]);
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          credentials: S.optional(__S(71, __c8, 7)),
          endpointCredentials: S.optional(__S(71, __c8, 7)),
          expiresAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "GetManagedEndpointSessionCredentialsResponse",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          virtualClusterId: S.String.pipe(T.HttpLabel("virtualClusterId")),
          createdBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("createdBefore"),
          ),
          createdAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("createdAfter"),
          ),
          name: S.optional(S.String).pipe(T.HttpQuery("name")),
          states: S.optional(__S(73, __c9, 1)).pipe(T.HttpQuery("states")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/virtualclusters/{virtualClusterId}/jobruns" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListJobRunsRequest" });
    case 3:
      return S.Array(__S(53, __c6, 5));
    case 4:
      return S.suspend(() =>
        S.Struct({ jobRuns: S.optional(__S(75, __c9, 3)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListJobRunsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          createdAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("createdAfter"),
          ),
          createdBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("createdBefore"),
          ),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/jobtemplates" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListJobTemplatesRequest" });
    case 6:
      return S.Array(__S(56, __c7, 0));
    case 7:
      return S.suspend(() =>
        S.Struct({ templates: S.optional(__S(78, __c9, 6)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListJobTemplatesResponse" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          virtualClusterId: S.String.pipe(T.HttpLabel("virtualClusterId")),
          createdBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("createdBefore"),
          ),
          createdAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("createdAfter"),
          ),
          types: S.optional(__S(60, __c7, 4)).pipe(T.HttpQuery("types")),
          states: S.optional(__S(73, __c9, 1)).pipe(T.HttpQuery("states")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/virtualclusters/{virtualClusterId}/endpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListManagedEndpointsRequest",
      });
    case 1:
      return S.Array(Endpoint);
    case 2:
      return S.suspend(() =>
        S.Struct({ endpoints: S.optional(__S(81, __c10, 1)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListManagedEndpointsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          createdAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("createdAfter"),
          ),
          createdBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("createdBefore"),
          ),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/securityconfigurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSecurityConfigurationsRequest",
      });
    case 4:
      return S.Array(__S(64, __c8, 0));
    case 5:
      return S.suspend(() =>
        S.Struct({
          securityConfigurations: S.optional(__S(84, __c10, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSecurityConfigurationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
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
    case 7:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(15, __c1, 7)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          containerProviderId: S.optional(S.String).pipe(T.HttpQuery("containerProviderId")),
          containerProviderType: S.optional(S.String).pipe(T.HttpQuery("containerProviderType")),
          createdAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("createdAfter"),
          ),
          createdBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("createdBefore"),
          ),
          states: S.optional(__S(73, __c9, 1)).pipe(T.HttpQuery("states")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          eksAccessEntryIntegrated: S.optional(S.Boolean).pipe(
            T.HttpQuery("eksAccessEntryIntegrated"),
          ),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/virtualclusters" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListVirtualClustersRequest",
      });
    case 1:
      return S.Array(__S(68, __c8, 4));
    case 2:
      return S.suspend(() =>
        S.Struct({
          virtualClusters: S.optional(__S(89, __c11, 1)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListVirtualClustersResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          virtualClusterId: S.String.pipe(T.HttpLabel("virtualClusterId")),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          executionRoleArn: S.optional(S.String),
          releaseLabel: S.optional(S.String),
          jobDriver: S.optional(__S(12, __c1, 4)),
          configurationOverrides: S.optional(__S(24, __c3, 0)),
          tags: S.optional(__S(15, __c1, 7)),
          jobTemplateId: S.optional(S.String),
          jobTemplateParameters: S.optional(__S(2, __c0, 2)),
          retryPolicyConfiguration: S.optional(__S(51, __c6, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/virtualclusters/{virtualClusterId}/jobruns" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartJobRunRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          virtualClusterId: S.optional(S.String),
        }),
      ).annotate({ identifier: "StartJobRunResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(15, __c1, 7),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(60, __c7, 4).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          schedulerConfiguration: S.optional(__S(42, __c5, 2)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/virtualclusters/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateVirtualClusterRequest",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
