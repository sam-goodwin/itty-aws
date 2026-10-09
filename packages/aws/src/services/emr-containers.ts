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
const CancelJobRunRequest = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<CancelJobRunRequest>;
export interface CancelJobRunResponse {
  id?: string;
  virtualClusterId?: string;
}
const CancelJobRunResponse = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<CancelJobRunResponse>;
export type ResourceNameString = string;
export type ClientToken = string;
export type ParametricIAMRoleArn = string;
export type ParametricReleaseLabel = string;
export type String1024 = string;
export type SensitivePropertiesMap = { [key: string]: string | undefined };
const SensitivePropertiesMap = /*@__PURE__*/ __L.at(__c0, 2);
export interface Configuration {
  classification: string;
  properties?: { [key: string]: string | undefined };
  configurations?: Configuration[];
}
const Configuration = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<Configuration>;
export type ConfigurationList = Configuration[];
const ConfigurationList = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<ConfigurationList>;
export type TemplateParameter = string;
export type String256 = string;
export interface ParametricCloudWatchMonitoringConfiguration {
  logGroupName?: string;
  logStreamNamePrefix?: string;
}
const ParametricCloudWatchMonitoringConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<ParametricCloudWatchMonitoringConfiguration>;
export type UriString = string;
export interface ParametricS3MonitoringConfiguration {
  logUri?: string;
}
const ParametricS3MonitoringConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<ParametricS3MonitoringConfiguration>;
export interface ParametricMonitoringConfiguration {
  persistentAppUI?: string;
  cloudWatchMonitoringConfiguration?: ParametricCloudWatchMonitoringConfiguration;
  s3MonitoringConfiguration?: ParametricS3MonitoringConfiguration;
}
const ParametricMonitoringConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<ParametricMonitoringConfiguration>;
export interface ParametricConfigurationOverrides {
  applicationConfiguration?: Configuration[];
  monitoringConfiguration?: ParametricMonitoringConfiguration;
}
const ParametricConfigurationOverrides = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<ParametricConfigurationOverrides>;
export type EntryPointPath = string | redacted.Redacted<string>;
export type EntryPointArgument = string | redacted.Redacted<string>;
export type EntryPointArguments = (string | redacted.Redacted<string>)[];
const EntryPointArguments = /*@__PURE__*/ __L.at(__c1, 1);
export type SparkSubmitParameters = string | redacted.Redacted<string>;
export interface SparkSubmitJobDriver {
  entryPoint: string | redacted.Redacted<string>;
  entryPointArguments?: (string | redacted.Redacted<string>)[];
  sparkSubmitParameters?: string | redacted.Redacted<string>;
}
const SparkSubmitJobDriver = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<SparkSubmitJobDriver>;
export type SparkSqlParameters = string | redacted.Redacted<string>;
export interface SparkSqlJobDriver {
  entryPoint?: string | redacted.Redacted<string>;
  sparkSqlParameters?: string | redacted.Redacted<string>;
}
const SparkSqlJobDriver = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<SparkSqlJobDriver>;
export interface JobDriver {
  sparkSubmitJobDriver?: SparkSubmitJobDriver;
  sparkSqlJobDriver?: SparkSqlJobDriver;
}
const JobDriver = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<JobDriver>;
export type TemplateParameterName = string;
export type TemplateParameterDataType = "NUMBER" | "STRING" | (string & {});
const TemplateParameterDataType = S.String;

export interface TemplateParameterConfiguration {
  type?: TemplateParameterDataType;
  defaultValue?: string;
}
const TemplateParameterConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<TemplateParameterConfiguration>;
export type TemplateParameterConfigurationMap = {
  [key: string]: TemplateParameterConfiguration | undefined;
};
const TemplateParameterConfigurationMap = /*@__PURE__*/ __L.at(__c1, 6);
export type String128 = string;
export type StringEmpty256 = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c1, 7);
export interface JobTemplateData {
  executionRoleArn: string;
  releaseLabel: string;
  configurationOverrides?: ParametricConfigurationOverrides;
  jobDriver: JobDriver;
  parameterConfiguration?: { [key: string]: TemplateParameterConfiguration | undefined };
  jobTags?: { [key: string]: string | undefined };
}
const JobTemplateData = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<JobTemplateData>;
export type KmsKeyArn = string;
export interface CreateJobTemplateRequest {
  name: string;
  clientToken: string;
  jobTemplateData: JobTemplateData;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
}
const CreateJobTemplateRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<CreateJobTemplateRequest>;
export type JobTemplateArn = string;
export interface CreateJobTemplateResponse {
  id?: string;
  name?: string;
  arn?: string;
  createdAt?: Date;
}
const CreateJobTemplateResponse = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CreateJobTemplateResponse>;
export type EndpointType = string;
export type ReleaseLabel = string;
export type IAMRoleArn = string;
export type ACMCertArn = string;
export type AllowAWSToRetainLogs = "ENABLED" | "DISABLED" | (string & {});
const AllowAWSToRetainLogs = S.String;

export interface ManagedLogs {
  allowAWSToRetainLogs?: AllowAWSToRetainLogs;
  encryptionKeyArn?: string;
}
const ManagedLogs = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<ManagedLogs>;
export type PersistentAppUI = "ENABLED" | "DISABLED" | (string & {});
const PersistentAppUI = S.String;

export type LogGroupName = string;
export interface CloudWatchMonitoringConfiguration {
  logGroupName: string;
  logStreamNamePrefix?: string;
}
const CloudWatchMonitoringConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<CloudWatchMonitoringConfiguration>;
export interface S3MonitoringConfiguration {
  logUri: string;
  encryptionKeyArn?: string;
}
const S3MonitoringConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<S3MonitoringConfiguration>;
export type RotationSize = string;
export type MaxFilesToKeep = number;
export interface ContainerLogRotationConfiguration {
  rotationSize: string;
  maxFilesToKeep: number;
}
const ContainerLogRotationConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<ContainerLogRotationConfiguration>;
export interface MonitoringConfiguration {
  managedLogs?: ManagedLogs;
  persistentAppUI?: PersistentAppUI;
  cloudWatchMonitoringConfiguration?: CloudWatchMonitoringConfiguration;
  s3MonitoringConfiguration?: S3MonitoringConfiguration;
  containerLogRotationConfiguration?: ContainerLogRotationConfiguration;
}
const MonitoringConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<MonitoringConfiguration>;
export interface ConfigurationOverrides {
  applicationConfiguration?: Configuration[];
  monitoringConfiguration?: MonitoringConfiguration;
}
const ConfigurationOverrides = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<ConfigurationOverrides>;
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
const CreateManagedEndpointRequest = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<CreateManagedEndpointRequest>;
export type EndpointArn = string;
export interface CreateManagedEndpointResponse {
  id?: string;
  name?: string;
  arn?: string;
  virtualClusterId?: string;
}
const CreateManagedEndpointResponse = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<CreateManagedEndpointResponse>;
export type ContainerProviderType = "EKS" | (string & {});
const ContainerProviderType = S.String;

export type ClusterId = string;
export type KubernetesNamespace = string;
export type NodeLabelString = string;
export interface EksInfo {
  namespace?: string;
  nodeLabel?: string;
}
const EksInfo = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<EksInfo>;
export type ContainerInfo = { eksInfo: EksInfo };
const ContainerInfo = /*@__PURE__*/ __L.at(__c3, 4);
export interface ContainerProvider {
  type: ContainerProviderType;
  id: string;
  info?: ContainerInfo;
}
const ContainerProvider = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<ContainerProvider>;
export type SessionTagValue = string;
export interface SecureNamespaceInfo {
  clusterId?: string;
  namespace?: string;
}
const SecureNamespaceInfo = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<SecureNamespaceInfo>;
export interface LakeFormationConfiguration {
  authorizedSessionTagValue?: string;
  secureNamespaceInfo?: SecureNamespaceInfo;
  queryEngineRoleArn?: string;
}
const LakeFormationConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<LakeFormationConfiguration>;
export type CertificateProviderType = "PEM" | (string & {});
const CertificateProviderType = S.String;

export type SecretsManagerArn = string;
export interface TLSCertificateConfiguration {
  certificateProviderType?: CertificateProviderType;
  publicCertificateSecretArn?: string;
  privateCertificateSecretArn?: string;
}
const TLSCertificateConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<TLSCertificateConfiguration>;
export interface InTransitEncryptionConfiguration {
  tlsCertificateConfiguration?: TLSCertificateConfiguration;
}
const InTransitEncryptionConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<InTransitEncryptionConfiguration>;
export interface EncryptionConfiguration {
  inTransitEncryptionConfiguration?: InTransitEncryptionConfiguration;
}
const EncryptionConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<EncryptionConfiguration>;
export interface AuthorizationConfiguration {
  lakeFormationConfiguration?: LakeFormationConfiguration;
  encryptionConfiguration?: EncryptionConfiguration;
}
const AuthorizationConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<AuthorizationConfiguration>;
export type IdentityCenterInstanceARN = string;
export type EmrIdentityCenterApplicationARN = string;
export interface IdentityCenterConfiguration {
  enableIdentityCenter?: boolean;
  identityCenterApplicationAssignmentRequired?: boolean;
  identityCenterInstanceARN?: string;
  emrIdentityCenterApplicationARN?: string;
}
const IdentityCenterConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<IdentityCenterConfiguration>;
export interface IAMConfiguration {
  systemRole?: string;
}
const IAMConfiguration = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<IAMConfiguration>;
export interface AuthenticationConfiguration {
  identityCenterConfiguration?: IdentityCenterConfiguration;
  iamConfiguration?: IAMConfiguration;
}
const AuthenticationConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<AuthenticationConfiguration>;
export interface SecurityConfigurationData {
  authorizationConfiguration?: AuthorizationConfiguration;
  authenticationConfiguration?: AuthenticationConfiguration;
}
const SecurityConfigurationData = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<SecurityConfigurationData>;
export interface CreateSecurityConfigurationRequest {
  clientToken: string;
  name: string;
  containerProvider?: ContainerProvider;
  securityConfigurationData: SecurityConfigurationData;
  tags?: { [key: string]: string | undefined };
}
const CreateSecurityConfigurationRequest = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<CreateSecurityConfigurationRequest>;
export type SecurityConfigurationArn = string;
export interface CreateSecurityConfigurationResponse {
  id?: string;
  name?: string;
  arn?: string;
}
const CreateSecurityConfigurationResponse = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<CreateSecurityConfigurationResponse>;
export type InQueueJobLimitInteger = number;
export type JobLimitInteger = number;
export interface SchedulerConfiguration {
  maxInQueueJobRuns?: number;
  maxConcurrentJobRuns?: number;
}
const SchedulerConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<SchedulerConfiguration>;
export interface CreateVirtualClusterRequest {
  name: string;
  containerProvider: ContainerProvider;
  clientToken: string;
  tags?: { [key: string]: string | undefined };
  securityConfigurationId?: string;
  sessionEnabled?: boolean;
  schedulerConfiguration?: SchedulerConfiguration;
}
const CreateVirtualClusterRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<CreateVirtualClusterRequest>;
export type VirtualClusterArn = string;
export interface CreateVirtualClusterResponse {
  id?: string;
  name?: string;
  arn?: string;
}
const CreateVirtualClusterResponse =
  CreateSecurityConfigurationResponse as any as S.Schema<CreateVirtualClusterResponse>;
export interface DeleteJobTemplateRequest {
  id: string;
}
const DeleteJobTemplateRequest = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<DeleteJobTemplateRequest>;
export interface DeleteJobTemplateResponse {
  id?: string;
}
const DeleteJobTemplateResponse = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<DeleteJobTemplateResponse>;
export interface DeleteManagedEndpointRequest {
  id: string;
  virtualClusterId: string;
}
const DeleteManagedEndpointRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<DeleteManagedEndpointRequest>;
export interface DeleteManagedEndpointResponse {
  id?: string;
  virtualClusterId?: string;
}
const DeleteManagedEndpointResponse = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<DeleteManagedEndpointResponse>;
export interface DeleteSecurityConfigurationRequest {
  id: string;
}
const DeleteSecurityConfigurationRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<DeleteSecurityConfigurationRequest>;
export interface DeleteSecurityConfigurationResponse {
  id?: string;
}
const DeleteSecurityConfigurationResponse =
  DeleteJobTemplateResponse as any as S.Schema<DeleteSecurityConfigurationResponse>;
export interface DeleteVirtualClusterRequest {
  id: string;
}
const DeleteVirtualClusterRequest = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<DeleteVirtualClusterRequest>;
export interface DeleteVirtualClusterResponse {
  id?: string;
}
const DeleteVirtualClusterResponse =
  DeleteJobTemplateResponse as any as S.Schema<DeleteVirtualClusterResponse>;
export interface DescribeJobRunRequest {
  id: string;
  virtualClusterId: string;
}
const DescribeJobRunRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<DescribeJobRunRequest>;
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
const JobRunState = S.String;

export type RequestIdentityUserArn = string;
export type FailureReason =
  | "INTERNAL_ERROR"
  | "USER_ERROR"
  | "VALIDATION_ERROR"
  | "CLUSTER_UNAVAILABLE"
  | (string & {});
const FailureReason = S.String;

export type JavaInteger = number;
export interface RetryPolicyConfiguration {
  maxAttempts: number;
}
const RetryPolicyConfiguration = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<RetryPolicyConfiguration>;
export interface RetryPolicyExecution {
  currentAttemptCount: number;
}
const RetryPolicyExecution = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<RetryPolicyExecution>;
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
const JobRun = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<JobRun>;
export interface DescribeJobRunResponse {
  jobRun?: JobRun;
}
const DescribeJobRunResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<DescribeJobRunResponse>;
export interface DescribeJobTemplateRequest {
  id: string;
}
const DescribeJobTemplateRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<DescribeJobTemplateRequest>;
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
const JobTemplate = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<JobTemplate>;
export interface DescribeJobTemplateResponse {
  jobTemplate?: JobTemplate;
}
const DescribeJobTemplateResponse = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DescribeJobTemplateResponse>;
export interface DescribeManagedEndpointRequest {
  id: string;
  virtualClusterId: string;
}
const DescribeManagedEndpointRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DescribeManagedEndpointRequest>;
export type EndpointState =
  | "CREATING"
  | "ACTIVE"
  | "TERMINATING"
  | "TERMINATED"
  | "TERMINATED_WITH_ERRORS"
  | (string & {});
const EndpointState = S.String;

export type Base64Encoded = string;
export interface Certificate {
  certificateArn?: string;
  certificateData?: string;
}
const Certificate = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<Certificate>;
export type SubnetIds = string[];
const SubnetIds = /*@__PURE__*/ __L.at(__c7, 4);
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
const DescribeManagedEndpointResponse = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<DescribeManagedEndpointResponse>;
export interface DescribeSecurityConfigurationRequest {
  id: string;
}
const DescribeSecurityConfigurationRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DescribeSecurityConfigurationRequest>;
export interface SecurityConfiguration {
  id?: string;
  name?: string;
  arn?: string;
  createdAt?: Date;
  createdBy?: string;
  securityConfigurationData?: SecurityConfigurationData;
  tags?: { [key: string]: string | undefined };
}
const SecurityConfiguration = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<SecurityConfiguration>;
export interface DescribeSecurityConfigurationResponse {
  securityConfiguration?: SecurityConfiguration;
}
const DescribeSecurityConfigurationResponse = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<DescribeSecurityConfigurationResponse>;
export interface DescribeVirtualClusterRequest {
  id: string;
}
const DescribeVirtualClusterRequest = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<DescribeVirtualClusterRequest>;
export type VirtualClusterState =
  | "RUNNING"
  | "TERMINATING"
  | "TERMINATED"
  | "ARRESTED"
  | (string & {});
const VirtualClusterState = S.String;

export type NonNegativeInteger = number;
export interface SchedulerStatus {
  currentInQueueJobRuns?: number;
  currentConcurrentJobRuns?: number;
}
const SchedulerStatus = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<SchedulerStatus>;
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
const VirtualCluster = /*@__PURE__*/ __L.at(__c8, 4) as any as S.Schema<VirtualCluster>;
export interface DescribeVirtualClusterResponse {
  virtualCluster?: VirtualCluster;
}
const DescribeVirtualClusterResponse = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DescribeVirtualClusterResponse>;
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
const GetManagedEndpointSessionCredentialsRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<GetManagedEndpointSessionCredentialsRequest>;
export type Token = string | redacted.Redacted<string>;
export type Credentials = { token: string | redacted.Redacted<string> };
const Credentials = /*@__PURE__*/ __L.at(__c8, 7);
export interface GetManagedEndpointSessionCredentialsResponse {
  id?: string;
  credentials?: Credentials;
  endpointCredentials?: Credentials;
  expiresAt?: Date;
}
const GetManagedEndpointSessionCredentialsResponse = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<GetManagedEndpointSessionCredentialsResponse>;
export type JobRunStates = JobRunState[];
const JobRunStates = /*@__PURE__*/ __L.at(__c9, 1);
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
const ListJobRunsRequest = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<ListJobRunsRequest>;
export type JobRuns = JobRun[];
const JobRuns = /*@__PURE__*/ __L.at(__c9, 3);
export interface ListJobRunsResponse {
  jobRuns?: JobRun[];
  nextToken?: string;
}
const ListJobRunsResponse = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<ListJobRunsResponse>;
export interface ListJobTemplatesRequest {
  createdAfter?: Date;
  createdBefore?: Date;
  maxResults?: number;
  nextToken?: string;
}
const ListJobTemplatesRequest = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<ListJobTemplatesRequest>;
export type JobTemplates = JobTemplate[];
const JobTemplates = /*@__PURE__*/ __L.at(__c9, 6);
export interface ListJobTemplatesResponse {
  templates?: JobTemplate[];
  nextToken?: string;
}
const ListJobTemplatesResponse = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<ListJobTemplatesResponse>;
export type EndpointTypes = string[];
const EndpointTypes = SubnetIds as any as S.Schema<EndpointTypes>;
export type EndpointStates = EndpointState[];
const EndpointStates = JobRunStates as any as S.Schema<EndpointStates>;
export interface ListManagedEndpointsRequest {
  virtualClusterId: string;
  createdBefore?: Date;
  createdAfter?: Date;
  types?: string[];
  states?: EndpointState[];
  maxResults?: number;
  nextToken?: string;
}
const ListManagedEndpointsRequest = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<ListManagedEndpointsRequest>;
export type Endpoints = Endpoint[];
const Endpoints = /*@__PURE__*/ __L.at(__c10, 1);
export interface ListManagedEndpointsResponse {
  endpoints?: Endpoint[];
  nextToken?: string;
}
const ListManagedEndpointsResponse = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<ListManagedEndpointsResponse>;
export interface ListSecurityConfigurationsRequest {
  createdAfter?: Date;
  createdBefore?: Date;
  maxResults?: number;
  nextToken?: string;
}
const ListSecurityConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<ListSecurityConfigurationsRequest>;
export type SecurityConfigurations = SecurityConfiguration[];
const SecurityConfigurations = /*@__PURE__*/ __L.at(__c10, 4);
export interface ListSecurityConfigurationsResponse {
  securityConfigurations?: SecurityConfiguration[];
  nextToken?: string;
}
const ListSecurityConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<ListSecurityConfigurationsResponse>;
export type RsiArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<ListTagsForResourceResponse>;
export type VirtualClusterStates = VirtualClusterState[];
const VirtualClusterStates = JobRunStates as any as S.Schema<VirtualClusterStates>;
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
const ListVirtualClustersRequest = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<ListVirtualClustersRequest>;
export type VirtualClusters = VirtualCluster[];
const VirtualClusters = /*@__PURE__*/ __L.at(__c11, 1);
export interface ListVirtualClustersResponse {
  virtualClusters?: VirtualCluster[];
  nextToken?: string;
}
const ListVirtualClustersResponse = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<ListVirtualClustersResponse>;
export type TemplateParameterInputMap = { [key: string]: string | undefined };
const TemplateParameterInputMap =
  SensitivePropertiesMap as any as S.Schema<TemplateParameterInputMap>;
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
const StartJobRunRequest = /*@__PURE__*/ __L.at(__c11, 3) as any as S.Schema<StartJobRunRequest>;
export interface StartJobRunResponse {
  id?: string;
  name?: string;
  arn?: string;
  virtualClusterId?: string;
}
const StartJobRunResponse = /*@__PURE__*/ __L.at(__c11, 4) as any as S.Schema<StartJobRunResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c11, 5) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = /*@__PURE__*/ __L.at(__c11, 6) as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = SubnetIds as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = TagResourceResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateVirtualClusterRequest {
  id: string;
  schedulerConfiguration?: SchedulerConfiguration;
  clientToken: string;
}
const UpdateVirtualClusterRequest = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<UpdateVirtualClusterRequest>;
export interface UpdateVirtualClusterResponse {
  virtualCluster?: VirtualCluster;
}
const UpdateVirtualClusterResponse =
  DescribeVirtualClusterResponse as any as S.Schema<UpdateVirtualClusterResponse>;
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
  input: CancelJobRunRequest,
  output: CancelJobRunResponse,
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
  input: CreateJobTemplateRequest,
  output: CreateJobTemplateResponse,
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
  input: CreateManagedEndpointRequest,
  output: CreateManagedEndpointResponse,
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
  input: CreateSecurityConfigurationRequest,
  output: CreateSecurityConfigurationResponse,
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
  input: CreateVirtualClusterRequest,
  output: CreateVirtualClusterResponse,
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
  input: DeleteJobTemplateRequest,
  output: DeleteJobTemplateResponse,
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
  input: DeleteManagedEndpointRequest,
  output: DeleteManagedEndpointResponse,
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
  input: DeleteSecurityConfigurationRequest,
  output: DeleteSecurityConfigurationResponse,
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
  input: DeleteVirtualClusterRequest,
  output: DeleteVirtualClusterResponse,
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
  input: DescribeJobRunRequest,
  output: DescribeJobRunResponse,
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
  input: DescribeJobTemplateRequest,
  output: DescribeJobTemplateResponse,
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
  input: DescribeManagedEndpointRequest,
  output: DescribeManagedEndpointResponse,
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
  input: DescribeSecurityConfigurationRequest,
  output: DescribeSecurityConfigurationResponse,
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
  input: DescribeVirtualClusterRequest,
  output: DescribeVirtualClusterResponse,
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
  input: GetManagedEndpointSessionCredentialsRequest,
  output: GetManagedEndpointSessionCredentialsResponse,
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
  input: ListJobRunsRequest,
  output: ListJobRunsResponse,
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
  input: ListJobTemplatesRequest,
  output: ListJobTemplatesResponse,
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
  input: ListManagedEndpointsRequest,
  output: ListManagedEndpointsResponse,
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
  input: ListSecurityConfigurationsRequest,
  output: ListSecurityConfigurationsResponse,
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
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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
  input: ListVirtualClustersRequest,
  output: ListVirtualClustersResponse,
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
  input: StartJobRunRequest,
  output: StartJobRunResponse,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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
  input: UntagResourceRequest,
  output: UntagResourceResponse,
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
  input: UpdateVirtualClusterRequest,
  output: UpdateVirtualClusterResponse,
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
          properties: S.optional(SensitivePropertiesMap),
          configurations: S.optional(
            S.suspend(() => ConfigurationList).annotate({ identifier: "ConfigurationList" }),
          ),
        }),
      ).annotate({ identifier: "Configuration" });
    case 4:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<Configuration> => Configuration).annotate({
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
          cloudWatchMonitoringConfiguration: S.optional(
            ParametricCloudWatchMonitoringConfiguration,
          ),
          s3MonitoringConfiguration: S.optional(ParametricS3MonitoringConfiguration),
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
          applicationConfiguration: S.optional(ConfigurationList),
          monitoringConfiguration: S.optional(ParametricMonitoringConfiguration),
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
          entryPointArguments: S.optional(EntryPointArguments),
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
          sparkSubmitJobDriver: S.optional(SparkSubmitJobDriver),
          sparkSqlJobDriver: S.optional(SparkSqlJobDriver),
        }),
      ).annotate({ identifier: "JobDriver" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(TemplateParameterDataType),
          defaultValue: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TemplateParameterConfiguration",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ TemplateParameterConfiguration.pipe(S.optional));
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
          configurationOverrides: S.optional(ParametricConfigurationOverrides),
          jobDriver: JobDriver,
          parameterConfiguration: S.optional(TemplateParameterConfigurationMap),
          jobTags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "JobTemplateData" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          clientToken: S.String.pipe(T.IdempotencyToken()),
          jobTemplateData: JobTemplateData,
          tags: S.optional(TagMap),
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
          allowAWSToRetainLogs: S.optional(AllowAWSToRetainLogs),
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
          managedLogs: S.optional(ManagedLogs),
          persistentAppUI: S.optional(PersistentAppUI),
          cloudWatchMonitoringConfiguration: S.optional(CloudWatchMonitoringConfiguration),
          s3MonitoringConfiguration: S.optional(S3MonitoringConfiguration),
          containerLogRotationConfiguration: S.optional(ContainerLogRotationConfiguration),
        }),
      ).annotate({ identifier: "MonitoringConfiguration" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationConfiguration: S.optional(ConfigurationList),
          monitoringConfiguration: S.optional(MonitoringConfiguration),
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
          configurationOverrides: S.optional(ConfigurationOverrides),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
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
      return S.Union([/*@__PURE__*/ S.Struct({ eksInfo: EksInfo })]);
    case 5:
      return S.suspend(() =>
        S.Struct({ type: ContainerProviderType, id: S.String, info: S.optional(ContainerInfo) }),
      ).annotate({ identifier: "ContainerProvider" });
    case 6:
      return S.suspend(() =>
        S.Struct({ clusterId: S.optional(S.String), namespace: S.optional(S.String) }),
      ).annotate({ identifier: "SecureNamespaceInfo" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          authorizedSessionTagValue: S.optional(S.String),
          secureNamespaceInfo: S.optional(SecureNamespaceInfo),
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
          certificateProviderType: S.optional(CertificateProviderType),
          publicCertificateSecretArn: S.optional(S.String),
          privateCertificateSecretArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TLSCertificateConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ tlsCertificateConfiguration: S.optional(TLSCertificateConfiguration) }),
      ).annotate({
        identifier: "InTransitEncryptionConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          inTransitEncryptionConfiguration: S.optional(InTransitEncryptionConfiguration),
        }),
      ).annotate({ identifier: "EncryptionConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          lakeFormationConfiguration: S.optional(LakeFormationConfiguration),
          encryptionConfiguration: S.optional(EncryptionConfiguration),
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
          identityCenterConfiguration: S.optional(IdentityCenterConfiguration),
          iamConfiguration: S.optional(IAMConfiguration),
        }),
      ).annotate({
        identifier: "AuthenticationConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          authorizationConfiguration: S.optional(AuthorizationConfiguration),
          authenticationConfiguration: S.optional(AuthenticationConfiguration),
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
          containerProvider: S.optional(ContainerProvider),
          securityConfigurationData: SecurityConfigurationData,
          tags: S.optional(TagMap),
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
          containerProvider: ContainerProvider,
          clientToken: S.String.pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
          securityConfigurationId: S.optional(S.String),
          sessionEnabled: S.optional(S.Boolean),
          schedulerConfiguration: S.optional(SchedulerConfiguration),
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
          state: S.optional(JobRunState),
          clientToken: S.optional(S.String),
          executionRoleArn: S.optional(S.String),
          releaseLabel: S.optional(S.String),
          configurationOverrides: S.optional(ConfigurationOverrides),
          jobDriver: S.optional(JobDriver),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          createdBy: S.optional(S.String),
          finishedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          stateDetails: S.optional(S.String),
          failureReason: S.optional(FailureReason),
          tags: S.optional(TagMap),
          retryPolicyConfiguration: S.optional(RetryPolicyConfiguration),
          retryPolicyExecution: S.optional(RetryPolicyExecution),
        }),
      ).annotate({ identifier: "JobRun" });
    case 6:
      return S.suspend(() => S.Struct({ jobRun: S.optional(JobRun) })).annotate({
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
          tags: S.optional(TagMap),
          jobTemplateData: JobTemplateData,
          kmsKeyArn: S.optional(S.String),
          decryptionError: S.optional(S.String),
        }),
      ).annotate({ identifier: "JobTemplate" });
    case 1:
      return S.suspend(() => S.Struct({ jobTemplate: S.optional(JobTemplate) })).annotate({
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
          state: S.optional(EndpointState),
          releaseLabel: S.optional(S.String),
          executionRoleArn: S.optional(S.String),
          certificateArn: S.optional(S.String),
          certificateAuthority: S.optional(Certificate),
          configurationOverrides: S.optional(ConfigurationOverrides),
          serverUrl: S.optional(S.String),
          authProxyUrl: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          securityGroup: S.optional(S.String),
          subnetIds: S.optional(SubnetIds),
          stateDetails: S.optional(S.String),
          failureReason: S.optional(FailureReason),
          tags: S.optional(TagMap),
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
          securityConfigurationData: S.optional(SecurityConfigurationData),
          tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "SecurityConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({ securityConfiguration: S.optional(SecurityConfiguration) }),
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
          state: S.optional(VirtualClusterState),
          containerProvider: S.optional(ContainerProvider),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          tags: S.optional(TagMap),
          securityConfigurationId: S.optional(S.String),
          sessionEnabled: S.optional(S.Boolean),
          schedulerConfiguration: S.optional(SchedulerConfiguration),
          schedulerStatus: S.optional(SchedulerStatus),
        }),
      ).annotate({ identifier: "VirtualCluster" });
    case 5:
      return S.suspend(() => S.Struct({ virtualCluster: S.optional(VirtualCluster) })).annotate({
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
          credentials: S.optional(Credentials),
          endpointCredentials: S.optional(Credentials),
          expiresAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "GetManagedEndpointSessionCredentialsResponse",
      });
    case 1:
      return S.Array(JobRunState);
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
          states: S.optional(JobRunStates).pipe(T.HttpQuery("states")),
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
      return S.Array(JobRun);
    case 4:
      return S.suspend(() =>
        S.Struct({ jobRuns: S.optional(JobRuns), nextToken: S.optional(S.String) }),
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
      return S.Array(JobTemplate);
    case 7:
      return S.suspend(() =>
        S.Struct({ templates: S.optional(JobTemplates), nextToken: S.optional(S.String) }),
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
          types: S.optional(EndpointTypes).pipe(T.HttpQuery("types")),
          states: S.optional(EndpointStates).pipe(T.HttpQuery("states")),
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
        S.Struct({ endpoints: S.optional(Endpoints), nextToken: S.optional(S.String) }),
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
      return S.Array(SecurityConfiguration);
    case 5:
      return S.suspend(() =>
        S.Struct({
          securityConfigurations: S.optional(SecurityConfigurations),
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
      return S.suspend(() => S.Struct({ tags: S.optional(TagMap) })).annotate({
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
          containerProviderType: S.optional(ContainerProviderType).pipe(
            T.HttpQuery("containerProviderType"),
          ),
          createdAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("createdAfter"),
          ),
          createdBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("createdBefore"),
          ),
          states: S.optional(VirtualClusterStates).pipe(T.HttpQuery("states")),
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
      return S.Array(VirtualCluster);
    case 2:
      return S.suspend(() =>
        S.Struct({ virtualClusters: S.optional(VirtualClusters), nextToken: S.optional(S.String) }),
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
          jobDriver: S.optional(JobDriver),
          configurationOverrides: S.optional(ConfigurationOverrides),
          tags: S.optional(TagMap),
          jobTemplateId: S.optional(S.String),
          jobTemplateParameters: S.optional(TemplateParameterInputMap),
          retryPolicyConfiguration: S.optional(RetryPolicyConfiguration),
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
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagMap }).pipe(
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
          tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
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
          schedulerConfiguration: S.optional(SchedulerConfiguration),
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
