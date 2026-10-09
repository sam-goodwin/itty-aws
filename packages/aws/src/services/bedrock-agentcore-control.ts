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
  sdkId: "Bedrock AgentCore Control",
  serviceShapeName: "AmazonBedrockAgentCoreControl",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "bedrock-agentcore" });
const ver = /*@__PURE__*/ T.ServiceVersion("2023-06-05");
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
              `https://bedrock-agentcore-control-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://bedrock-agentcore-control-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://bedrock-agentcore-control.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://bedrock-agentcore-control.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConcurrentModificationException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentModificationException>()(
    "ConcurrentModificationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class DecryptionFailure
  extends /*@__PURE__*/ S.TaggedError<DecryptionFailure>()(
    "DecryptionFailure",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class EncryptionFailure
  extends /*@__PURE__*/ S.TaggedError<EncryptionFailure>()(
    "EncryptionFailure",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ResourceLimitExceededException>()(
    "ResourceLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class RetryableConflictException
  extends /*@__PURE__*/ S.TaggedError<RetryableConflictException>()(
    "RetryableConflictException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(409), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withConflictError, C.withRetryableError) {}
export class ServiceException
  extends /*@__PURE__*/ S.TaggedError<ServiceException>()(
    "ServiceException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class SubscriptionRequiredException
  extends /*@__PURE__*/ S.TaggedError<SubscriptionRequiredException>()(
    "SubscriptionRequiredException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      subscriptionUrl: /*@__PURE__*/ S.optional(S.String),
      productName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ThrottledException
  extends /*@__PURE__*/ S.TaggedError<ThrottledException>()(
    "ThrottledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(429), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnauthorizedException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedException>()(
    "UnauthorizedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.suspend(() => S.String).annotate({
        identifier: "ValidationExceptionReason",
      }),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(764, __c95, 4)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type DatasetId = string;
export type ClientToken = string;
export type SensitiveJson = unknown;
export type DatasetExampleList = any[];
export interface InlineExamplesSource {
  examples: any[];
}
export type S3Uri = string;
export interface S3Source {
  s3Uri: string;
}
export type DataSourceType =
  | { inlineExamples: InlineExamplesSource; s3Source?: never }
  | { inlineExamples?: never; s3Source: S3Source };
export interface AddDatasetExamplesRequest {
  datasetId: string;
  clientToken?: string;
  source: DataSourceType;
}
export type DatasetArn = string;
export type DatasetStatus =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "ACTIVE"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "DELETE_FAILED"
  | (string & {});
export type ExampleId = string;
export type ExampleIdList = string[];
export interface AddDatasetExamplesResponse {
  datasetArn: string;
  datasetId: string;
  status: DatasetStatus;
  addedCount: number;
  updatedAt: Date;
  exampleIds: string[];
}
export type GatewayIdentifier = string;
export type GatewayRateLimitId = string;
export type GatewayRateLimitDescription = string;
export type DimensionKey = string;
export type DimensionKeys = string[];
export type DimensionValue = string;
export type Dimensions = { [key: string]: string | undefined };
export type Period = "second" | "minute" | (string & {});
export interface RateConfig {
  rate: number;
  period: Period;
}
export type RateConfigs = RateConfig[];
export interface LimitEntry {
  dimensions: { [key: string]: string | undefined };
  requests?: RateConfig[];
  tokens?: RateConfig[];
  connections?: RateConfig[];
}
export type LimitEntries = LimitEntry[];
export interface BatchPutLimitEntry {
  rateLimitId?: string;
  description?: string;
  dimensionKeys: string[];
  entries: LimitEntry[];
}
export type BatchPutLimitEntries = BatchPutLimitEntry[];
export interface BatchPutGatewayRateLimitsRequest {
  gatewayIdentifier: string;
  clientToken?: string;
  rateLimits: BatchPutLimitEntry[];
}
export type GatewayRateLimitStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | (string & {});
export interface GatewayRateLimitDetail {
  rateLimitId: string;
  gatewayIdentifier: string;
  description?: string;
  dimensionKeys: string[];
  entries: LimitEntry[];
  status: GatewayRateLimitStatus;
  createdAt: Date;
  updatedAt: Date;
}
export type GatewayRateLimits = GatewayRateLimitDetail[];
export interface BatchPutGatewayRateLimitsResponse {
  rateLimits: GatewayRateLimitDetail[];
}
export type AgentRuntimeName = string;
export type RuntimeContainerUri = string;
export interface ContainerConfiguration {
  containerUri: string;
}
export interface S3Location {
  bucket: string;
  prefix: string;
  versionId?: string;
}
export type Code = { s3: S3Location };
export type AgentManagedRuntimeType =
  | "PYTHON_3_10"
  | "PYTHON_3_11"
  | "PYTHON_3_12"
  | "PYTHON_3_13"
  | "PYTHON_3_14"
  | "NODE_22"
  | (string & {});
export type EntryPoint = string;
export type EntryPoints = string[];
export interface CodeConfiguration {
  code: Code;
  runtime: AgentManagedRuntimeType;
  entryPoint: string[];
}
export type AgentRuntimeArtifact =
  | { containerConfiguration: ContainerConfiguration; codeConfiguration?: never }
  | { containerConfiguration?: never; codeConfiguration: CodeConfiguration };
export type RoleArn = string;
export type NetworkMode = "PUBLIC" | "VPC" | (string & {});
export type SecurityGroupId = string;
export type SecurityGroups = string[];
export type SubnetId = string;
export type Subnets = string[];
export interface VpcConfig {
  securityGroups: string[];
  subnets: string[];
  requireServiceS3Endpoint?: boolean;
}
export interface NetworkConfiguration {
  networkMode: NetworkMode;
  networkModeConfig?: VpcConfig;
}
export type Description = string | redacted.Redacted<string>;
export type DiscoveryUrl = string;
export type AllowedAudience = string;
export type AllowedAudienceList = string[];
export type AllowedClient = string;
export type AllowedClientsList = string[];
export type AllowedScopeType = string;
export type AllowedScopesType = string[];
export type AdvertisedScopeMappingType = { [key: string]: string | undefined };
export type InboundTokenClaimNameType = string;
export type InboundTokenClaimValueType = "STRING" | "STRING_ARRAY" | (string & {});
export type MatchValueString = string;
export type MatchValueStringList = string[];
export type ClaimMatchValueType =
  | { matchValueString: string; matchValueStringList?: never }
  | { matchValueString?: never; matchValueStringList: string[] };
export type ClaimMatchOperatorType = "EQUALS" | "CONTAINS" | "CONTAINS_ANY" | (string & {});
export interface AuthorizingClaimMatchValueType {
  claimMatchValue: ClaimMatchValueType;
  claimMatchOperator: ClaimMatchOperatorType;
}
export interface CustomClaimValidationType {
  inboundTokenClaimName: string;
  inboundTokenClaimValueType: InboundTokenClaimValueType;
  authorizingClaimMatchValue: AuthorizingClaimMatchValueType;
}
export type CustomClaimValidationsType = CustomClaimValidationType[];
export type ResourceConfigurationIdentifier = string;
export type SelfManagedLatticeResource = { resourceConfigurationIdentifier: string };
export type VpcIdentifier = string;
export type SubnetIds = string[];
export type EndpointIpAddressType = "IPV4" | "IPV6" | (string & {});
export type SecurityGroupIdentifier = string;
export type SecurityGroupIds = string[];
export type TagKey = string;
export type TagValue = string;
export type TagsMap = { [key: string]: string | undefined };
export type RoutingDomain = string;
export interface ManagedVpcResource {
  vpcIdentifier: string;
  subnetIds: string[];
  endpointIpAddressType: EndpointIpAddressType;
  securityGroupIds?: string[];
  tags?: { [key: string]: string | undefined };
  routingDomain?: string;
}
export type PrivateEndpoint =
  | { selfManagedLatticeResource: SelfManagedLatticeResource; managedVpcResource?: never }
  | { selfManagedLatticeResource?: never; managedVpcResource: ManagedVpcResource };
export type PrivateEndpointOverrideDomain = string;
export interface PrivateEndpointOverride {
  domain: string;
  privateEndpoint: PrivateEndpoint;
}
export type PrivateEndpointOverrides = PrivateEndpointOverride[];
export type BedrockAgentcoreResourceArn = string;
export interface HostingEnvironment {
  arn: string;
}
export type HostingEnvironmentListType = HostingEnvironment[];
export type WorkloadIdentityNameType = string;
export type WorkloadIdentityNameListType = string[];
export interface AllowedWorkloadConfiguration {
  hostingEnvironments?: HostingEnvironment[];
  workloadIdentities?: string[];
}
export interface CustomJWTAuthorizerConfiguration {
  discoveryUrl: string;
  allowedAudience?: string[];
  allowedClients?: string[];
  allowedScopes?: string[];
  advertisedScopeMapping?: { [key: string]: string | undefined };
  customClaims?: CustomClaimValidationType[];
  privateEndpoint?: PrivateEndpoint;
  privateEndpointOverrides?: PrivateEndpointOverride[];
  allowedWorkloadConfiguration?: AllowedWorkloadConfiguration;
}
export type AuthorizerConfiguration = { customJWTAuthorizer: CustomJWTAuthorizerConfiguration };
export type HeaderName = string;
export type RequestHeaderAllowlist = string[];
export type RequestHeaderConfiguration = { requestHeaderAllowlist: string[] };
export type ServerProtocol = "MCP" | "HTTP" | "A2A" | "AGUI" | (string & {});
export interface ProtocolConfiguration {
  serverProtocol: ServerProtocol;
}
export interface LifecycleConfiguration {
  idleRuntimeSessionTimeout?: number;
  maxLifetime?: number;
}
export type EnvironmentVariableKey = string;
export type EnvironmentVariableValue = string;
export type EnvironmentVariablesMap = { [key: string]: string | undefined };
export type MountPath = string;
export interface SessionStorageConfiguration {
  mountPath: string;
}
export type S3FilesAccessPointArn = string;
export interface S3FilesAccessPointConfiguration {
  accessPointArn: string;
  mountPath: string;
}
export type EfsAccessPointArn = string;
export interface EfsAccessPointConfiguration {
  accessPointArn: string;
  mountPath: string;
}
export type CapacityProviderVolumeName = string;
export interface CapacityProviderVolumeConfiguration {
  volumeName: string;
  mountPath: string;
}
export type FilesystemConfiguration =
  | {
      sessionStorage: SessionStorageConfiguration;
      s3FilesAccessPoint?: never;
      efsAccessPoint?: never;
      capacityProviderVolume?: never;
    }
  | {
      sessionStorage?: never;
      s3FilesAccessPoint: S3FilesAccessPointConfiguration;
      efsAccessPoint?: never;
      capacityProviderVolume?: never;
    }
  | {
      sessionStorage?: never;
      s3FilesAccessPoint?: never;
      efsAccessPoint: EfsAccessPointConfiguration;
      capacityProviderVolume?: never;
    }
  | {
      sessionStorage?: never;
      s3FilesAccessPoint?: never;
      efsAccessPoint?: never;
      capacityProviderVolume: CapacityProviderVolumeConfiguration;
    };
export type FilesystemConfigurations = FilesystemConfiguration[];
export type CapacityProviderArn = string;
export interface CapacityProviderConfiguration {
  capacityProviderArn?: string;
}
export type PlatformVersion = string;
export interface CreateAgentRuntimeRequest {
  agentRuntimeName: string;
  agentRuntimeArtifact: AgentRuntimeArtifact;
  roleArn: string;
  networkConfiguration?: NetworkConfiguration;
  clientToken?: string;
  description?: string | redacted.Redacted<string>;
  authorizerConfiguration?: AuthorizerConfiguration;
  requestHeaderConfiguration?: RequestHeaderConfiguration;
  protocolConfiguration?: ProtocolConfiguration;
  lifecycleConfiguration?: LifecycleConfiguration;
  environmentVariables?: { [key: string]: string | undefined };
  filesystemConfigurations?: FilesystemConfiguration[];
  capacityProviderConfiguration?: CapacityProviderConfiguration;
  tags?: { [key: string]: string | undefined };
  platformVersion?: string;
}
export type AgentRuntimeArn = string;
export type WorkloadIdentityArn = string;
export interface WorkloadIdentityDetails {
  workloadIdentityArn?: string;
}
export type AgentRuntimeId = string;
export type AgentRuntimeVersion = string;
export type AgentRuntimeStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "READY"
  | "DELETING"
  | "DELETE_FAILED"
  | (string & {});
export interface CreateAgentRuntimeResponse {
  agentRuntimeArn: string;
  workloadIdentityDetails?: WorkloadIdentityDetails;
  agentRuntimeId: string;
  agentRuntimeVersion: string;
  createdAt: Date;
  status: AgentRuntimeStatus;
}
export type EndpointName = string | redacted.Redacted<string>;
export type AgentEndpointDescription = string;
export interface CreateAgentRuntimeEndpointRequest {
  agentRuntimeId: string;
  name: string | redacted.Redacted<string>;
  agentRuntimeVersion?: string;
  description?: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type AgentRuntimeEndpointArn = string;
export type AgentRuntimeEndpointStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "READY"
  | "DELETING"
  | "DELETE_FAILED"
  | (string & {});
export interface CreateAgentRuntimeEndpointResponse {
  targetVersion: string;
  agentRuntimeEndpointArn: string;
  agentRuntimeArn: string;
  agentRuntimeId?: string;
  endpointName?: string | redacted.Redacted<string>;
  status: AgentRuntimeEndpointStatus;
  createdAt: Date;
}
export type CredentialProviderName = string;
export type DefaultApiKeyType = string | redacted.Redacted<string>;
export type SecretIdType = string;
export type SecretJsonKeyType = string;
export interface SecretReference {
  secretId: string;
  jsonKey: string;
}
export type SecretSourceType = "MANAGED" | "EXTERNAL" | (string & {});
export interface CreateApiKeyCredentialProviderRequest {
  name: string;
  apiKey?: string | redacted.Redacted<string>;
  apiKeySecretConfig?: SecretReference;
  apiKeySecretSource?: SecretSourceType;
  tags?: { [key: string]: string | undefined };
}
export type SecretArn = string;
export interface Secret {
  secretArn: string;
}
export type ApiKeyCredentialProviderArnType = string;
export interface CreateApiKeyCredentialProviderResponse {
  apiKeySecretArn: Secret;
  apiKeySecretJsonKey?: string;
  apiKeySecretSource?: SecretSourceType;
  name: string;
  credentialProviderArn: string;
}
export type SandboxName = string;
export type BrowserNetworkMode = "PUBLIC" | "VPC" | (string & {});
export interface BrowserNetworkConfiguration {
  networkMode: BrowserNetworkMode;
  vpcConfig?: VpcConfig;
}
export interface RecordingConfig {
  enabled?: boolean;
  s3Location?: S3Location;
}
export interface BrowserSigningConfigInput {
  enabled: boolean;
}
export type ResourceLocation = { s3: S3Location };
export type BrowserEnterprisePolicyType = "MANAGED" | "RECOMMENDED" | (string & {});
export interface BrowserEnterprisePolicy {
  location: ResourceLocation;
  type?: BrowserEnterprisePolicyType;
}
export type BrowserEnterprisePolicies = BrowserEnterprisePolicy[];
export type ToolSecretArn = string;
export interface SecretsManagerLocation {
  secretArn: string;
}
export type CertificateLocation = { secretsManager: SecretsManagerLocation };
export interface Certificate {
  location: CertificateLocation;
}
export type Certificates = Certificate[];
export type S3FilesFileSystemArn = string;
export interface S3FilesConfiguration {
  accessPointArn: string;
  mountPath: string;
  fileSystemArn: string;
}
export type EfsFileSystemArn = string;
export interface EfsConfiguration {
  accessPointArn: string;
  mountPath: string;
  fileSystemArn: string;
}
export type ToolsFileSystemConfiguration =
  | { s3FilesConfiguration: S3FilesConfiguration; efsConfiguration?: never }
  | { s3FilesConfiguration?: never; efsConfiguration: EfsConfiguration };
export type ToolsFileSystemConfigurations = ToolsFileSystemConfiguration[];
export interface CreateBrowserRequest {
  name: string;
  description?: string | redacted.Redacted<string>;
  executionRoleArn?: string;
  networkConfiguration: BrowserNetworkConfiguration;
  recording?: RecordingConfig;
  browserSigning?: BrowserSigningConfigInput;
  enterprisePolicies?: BrowserEnterprisePolicy[];
  certificates?: Certificate[];
  filesystemConfigurations?: ToolsFileSystemConfiguration[];
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type BrowserId = string;
export type BrowserArn = string;
export type BrowserStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "READY"
  | "DELETING"
  | "DELETE_FAILED"
  | "DELETED"
  | (string & {});
export interface CreateBrowserResponse {
  browserId: string;
  browserArn: string;
  createdAt: Date;
  status: BrowserStatus;
}
export type BrowserProfileName = string;
export interface CreateBrowserProfileRequest {
  name: string;
  description?: string | redacted.Redacted<string>;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type BrowserProfileId = string;
export type BrowserProfileArn = string;
export type BrowserProfileStatus = "READY" | "DELETING" | "DELETED" | "SAVING" | (string & {});
export interface CreateBrowserProfileResponse {
  profileId: string;
  profileArn: string;
  createdAt: Date;
  status: BrowserProfileStatus;
}
export type CapacityProviderName = string;
export interface PermissionsConfiguration {
  capacityProviderOperatorRoleArn: string;
}
export type OperatingSystem = "LINUX_X86_64" | "LINUX_ARM64" | (string & {});
export type EC2InstanceType = string;
export type InstanceTypeList = string[];
export interface InstanceRequirements {
  allowedInstanceTypes: string[];
}
export type DeviceName = string;
export type VirtualDeviceName = string;
export type EbsVolumeType =
  | "standard"
  | "io1"
  | "io2"
  | "gp2"
  | "sc1"
  | "st1"
  | "gp3"
  | (string & {});
export type VolumeIops = number;
export type VolumeThroughput = number;
export type KmsKeyId = string;
export type EbsSnapshotId = string;
export type VolumeSizeGiB = number;
export type EbsVolumeInitializationRate = number;
export type EbsCardIndex = number;
export interface EphemeralEBSVolumeConfiguration {
  volumeType?: EbsVolumeType;
  iops?: number;
  throughput?: number;
  encrypted?: boolean;
  kmsKeyId?: string;
  snapshotId?: string;
  volumeSize?: number;
  volumeInitializationRate?: number;
  ebsCardIndex?: number;
}
export interface EphemeralBlockDeviceMapping {
  deviceName?: string;
  virtualName?: string;
  ebs?: EphemeralEBSVolumeConfiguration;
}
export type EphemeralBlockDeviceMappingList = EphemeralBlockDeviceMapping[];
export type Monitoring = "BASIC" | "DETAILED" | (string & {});
export type LicenseConfigurationArn = string;
export interface LicenseSpecification {
  licenseConfigurationArn: string;
}
export type LicenseSpecificationList = LicenseSpecification[];
export type CapacityReservationPreference =
  | "capacity-reservations-only"
  | "open"
  | "none"
  | (string & {});
export type CapacityReservationId = string;
export type CapacityReservationResourceGroupArn = string;
export interface CapacityReservationTarget {
  capacityReservationId?: string;
  capacityReservationResourceGroupArn?: string;
}
export interface CapacityReservationSpecification {
  capacityReservationPreference?: CapacityReservationPreference;
  capacityReservationTarget?: CapacityReservationTarget;
}
export type SSHKeyName = string;
export type InstanceProfileArn = string;
export interface LaunchParameters {
  operatingSystem: OperatingSystem;
  instanceRequirements: InstanceRequirements;
  ephemeralVolumes?: EphemeralBlockDeviceMapping[];
  monitoring?: Monitoring;
  licenseSpecifications?: LicenseSpecification[];
  capacityReservationSpecification?: CapacityReservationSpecification;
  sshKeyName?: string;
  instanceProfileArn?: string;
  propagatedTags?: { [key: string]: string | undefined };
}
export type LaunchTemplateSource = { launchParameters: LaunchParameters };
export type SubnetIdList = string[];
export type SecurityGroupIdList = string[];
export interface VpcConfiguration {
  subnets: string[];
  securityGroups: string[];
}
export type VolumeName = string;
export interface EbsVolumeConfiguration {
  name: string;
  sizeGiB: number;
  volumeType?: EbsVolumeType;
  iops?: number;
  throughput?: number;
  encrypted?: boolean;
  kmsKeyId?: string;
  snapshotId?: string;
}
export type VolumeConfiguration = { ebsConfiguration: EbsVolumeConfiguration };
export type VolumeConfigurationList = VolumeConfiguration[];
export interface InstanceLifecycleConfiguration {
  idleInstanceTimeout?: number;
  maxLifetime?: number;
}
export interface RootVolumeConfiguration {
  volumeType?: EbsVolumeType;
  iops?: number;
  throughput?: number;
  encrypted?: boolean;
  kmsKeyId?: string;
  freeSpaceGiB?: number;
}
export interface Ec2Configuration {
  launchTemplateSource: LaunchTemplateSource;
  vpcConfiguration: VpcConfiguration;
  volumes?: VolumeConfiguration[];
  lifecycleConfiguration?: InstanceLifecycleConfiguration;
  rootVolume?: RootVolumeConfiguration;
}
export type ComputeConfiguration = { ec2Configuration: Ec2Configuration };
export interface CreateCapacityProviderInput {
  name: string;
  description?: string | redacted.Redacted<string>;
  permissionsConfiguration: PermissionsConfiguration;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
  computeConfiguration: ComputeConfiguration;
}
export type CapacityProviderId = string;
export type CapacityProviderStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "READY"
  | "DELETING"
  | "DELETE_FAILED"
  | (string & {});
export interface CreateCapacityProviderOutput {
  capacityProviderId: string;
  capacityProviderArn: string;
  name: string;
  status: CapacityProviderStatus;
}
export type CodeInterpreterNetworkMode = "PUBLIC" | "SANDBOX" | "VPC" | (string & {});
export interface CodeInterpreterNetworkConfiguration {
  networkMode: CodeInterpreterNetworkMode;
  vpcConfig?: VpcConfig;
}
export interface CreateCodeInterpreterRequest {
  name: string;
  description?: string | redacted.Redacted<string>;
  executionRoleArn?: string;
  networkConfiguration: CodeInterpreterNetworkConfiguration;
  certificates?: Certificate[];
  filesystemConfigurations?: ToolsFileSystemConfiguration[];
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type CodeInterpreterId = string;
export type CodeInterpreterArn = string;
export type CodeInterpreterStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "READY"
  | "DELETING"
  | "DELETE_FAILED"
  | "DELETED"
  | (string & {});
export interface CreateCodeInterpreterResponse {
  codeInterpreterId: string;
  codeInterpreterArn: string;
  createdAt: Date;
  status: CodeInterpreterStatus;
}
export type ConfigurationBundleName = string;
export type ConfigurationBundleDescription = string | redacted.Redacted<string>;
export type ComponentIdentifier = string;
export interface ComponentConfiguration {
  configuration: any;
}
export type ComponentConfigurationMap = { [key: string]: ComponentConfiguration | undefined };
export type BranchName = string;
export interface VersionCreatedBySource {
  name: string;
  arn?: string;
}
export type KmsKeyArn = string;
export interface CreateConfigurationBundleRequest {
  clientToken?: string;
  bundleName: string;
  description?: string | redacted.Redacted<string>;
  components: { [key: string]: ComponentConfiguration | undefined };
  branchName?: string;
  commitMessage?: string;
  createdBy?: VersionCreatedBySource;
  kmsKeyArn?: string;
  tags?: { [key: string]: string | undefined };
}
export type ConfigurationBundleArn = string;
export type ConfigurationBundleId = string;
export type ConfigurationBundleVersion = string;
export interface CreateConfigurationBundleResponse {
  bundleArn: string;
  bundleId: string;
  versionId: string;
  createdAt: Date;
}
export type ExecutionRoleArnType = string;
export type OAuth2CredentialProviderArn = string;
export type AllowedAudienceType = string;
export interface ConsentPortalIdpConfig {
  credentialProviderArn: string;
  scopes: string[];
  audience?: string;
}
export type ConsentPortalNameType = string;
export type ConsentPortalSourceIdentifierType = string;
export type ConsentPortalSourceType = "agentcore-gateway" | (string & {});
export interface ConsentPortalSource {
  identifier: string;
  type: ConsentPortalSourceType;
}
export type ConsentPortalSources = ConsentPortalSource[];
export type ConsentPortalDescriptionType = string;
export interface CreateConsentPortalRequest {
  executionRoleArn: string;
  idpConfig: ConsentPortalIdpConfig;
  name: string;
  sources: ConsentPortalSource[];
  description?: string;
  tags?: { [key: string]: string | undefined };
}
export type ConsentPortalArnType = string;
export type ConsentPortalIdType = string;
export type PortalUrlType = string;
export type ConsentPortalStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "DELETING"
  | "FAILED"
  | (string & {});
export type StatusReasonType = string;
export interface CreateConsentPortalResponse {
  sources: ConsentPortalSource[];
  consentPortalArn: string;
  consentPortalId: string;
  createdAt: Date;
  description?: string;
  executionRoleArn: string;
  idpConfig: ConsentPortalIdpConfig;
  name: string;
  portalUrl?: string;
  status: ConsentPortalStatus;
  statusReason?: string;
  updatedAt: Date;
}
export type DatasetName = string;
export type DatasetSchemaType =
  | "AGENTCORE_EVALUATION_PREDEFINED_V1"
  | "AGENTCORE_EVALUATION_SIMULATED_V1"
  | "THIRD_PARTY_EVALUATION_V1"
  | (string & {});
export interface CreateDatasetRequest {
  clientToken?: string;
  datasetName: string;
  description?: string;
  source: DataSourceType;
  schemaType: DatasetSchemaType;
  kmsKeyArn?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateDatasetResponse {
  datasetArn: string;
  datasetId: string;
  status: DatasetStatus;
  createdAt: Date;
}
export interface CreateDatasetVersionRequest {
  datasetId: string;
  clientToken?: string;
}
export type DatasetVersion = string;
export interface CreateDatasetVersionResponse {
  datasetArn: string;
  datasetId: string;
  status: DatasetStatus;
  datasetVersion: string;
  createdAt: Date;
}
export type CustomEvaluatorName = string;
export type EvaluatorDescription = string | redacted.Redacted<string>;
export type EvaluatorInstructions = string | redacted.Redacted<string>;
export interface NumericalScaleDefinition {
  definition: string;
  value: number;
  label: string;
}
export type NumericalScaleDefinitions = NumericalScaleDefinition[];
export interface CategoricalScaleDefinition {
  definition: string;
  label: string;
}
export type CategoricalScaleDefinitions = CategoricalScaleDefinition[];
export type RatingScale =
  | { numerical: NumericalScaleDefinition[]; categorical?: never }
  | { numerical?: never; categorical: CategoricalScaleDefinition[] };
export type ModelId = string;
export type NonEmptyString = string;
export type NonEmptyStringList = string[];
export interface InferenceConfiguration {
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  stopSequences?: string[];
}
export type AdditionalModelRequestFields = unknown;
export interface BedrockEvaluatorModelConfig {
  modelId: string;
  inferenceConfig?: InferenceConfiguration;
  additionalModelRequestFields?: any;
}
export interface ReasoningConfiguration {
  effort?: string;
}
export interface OpenResponsesEvaluatorModelConfig {
  modelId: string;
  maxOutputTokens?: number;
  temperature?: number;
  topP?: number;
  reasoning?: ReasoningConfiguration;
}
export type EvaluatorModelConfig =
  | {
      bedrockEvaluatorModelConfig: BedrockEvaluatorModelConfig;
      responsesEvaluatorModelConfig?: never;
    }
  | {
      bedrockEvaluatorModelConfig?: never;
      responsesEvaluatorModelConfig: OpenResponsesEvaluatorModelConfig;
    };
export interface LlmAsAJudgeEvaluatorConfig {
  instructions: string | redacted.Redacted<string>;
  ratingScale: RatingScale;
  modelConfig: EvaluatorModelConfig;
}
export type LambdaArn = string;
export interface LambdaEvaluatorConfig {
  lambdaArn: string;
  lambdaTimeoutInSeconds?: number;
}
export type CodeBasedEvaluatorConfig = { lambdaConfig: LambdaEvaluatorConfig };
export type EvaluatorId = string;
export interface DerivedEvaluatorConfig {
  baseEvaluatorId: string;
  modelConfig: EvaluatorModelConfig;
}
export type EvaluatorConfig =
  | { llmAsAJudge: LlmAsAJudgeEvaluatorConfig; codeBased?: never; derived?: never }
  | { llmAsAJudge?: never; codeBased: CodeBasedEvaluatorConfig; derived?: never }
  | { llmAsAJudge?: never; codeBased?: never; derived: DerivedEvaluatorConfig };
export type EvaluatorLevel = "TOOL_CALL" | "TRACE" | "SESSION" | (string & {});
export interface CreateEvaluatorRequest {
  clientToken?: string;
  evaluatorName: string;
  description?: string | redacted.Redacted<string>;
  evaluatorConfig: EvaluatorConfig;
  level: EvaluatorLevel;
  kmsKeyArn?: string;
  tags?: { [key: string]: string | undefined };
}
export type CustomEvaluatorArn = string;
export type EvaluatorStatus =
  | "ACTIVE"
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "DELETING"
  | (string & {});
export interface CreateEvaluatorResponse {
  evaluatorArn: string;
  evaluatorId: string;
  createdAt: Date;
  status: EvaluatorStatus;
}
export type GatewayName = string;
export type GatewayDescription = string | redacted.Redacted<string>;
export type GatewayProtocolType = "MCP" | (string & {});
export type McpVersion = string;
export type McpSupportedVersions = string[];
export type McpInstructions = string | redacted.Redacted<string>;
export type SearchType = "SEMANTIC" | (string & {});
export interface SessionConfiguration {
  sessionTimeoutInSeconds?: number;
}
export interface StreamingConfiguration {
  enableResponseStreaming?: boolean;
}
export interface MCPGatewayConfiguration {
  supportedVersions?: string[];
  instructions?: string | redacted.Redacted<string>;
  searchType?: SearchType;
  sessionConfiguration?: SessionConfiguration;
  streamingConfiguration?: StreamingConfiguration;
  disableMcpListToolsPagination?: boolean;
}
export type GatewayProtocolConfiguration = { mcp: MCPGatewayConfiguration };
export type AuthorizerType =
  | "CUSTOM_JWT"
  | "AWS_IAM"
  | "NONE"
  | "AUTHENTICATE_ONLY"
  | (string & {});
export type LambdaFunctionArn = string;
export interface LambdaInterceptorConfiguration {
  arn: string;
}
export type InterceptorConfiguration = { lambda: LambdaInterceptorConfiguration };
export type GatewayInterceptionPoint = "REQUEST" | "RESPONSE" | (string & {});
export type GatewayInterceptionPoints = GatewayInterceptionPoint[];
export type InterceptorPayloadExclusion = "RESPONSE_BODY" | (string & {});
export type InterceptorPayloadExclusionSelector = { field: InterceptorPayloadExclusion };
export type InterceptorPayloadExclusionSelectorList = InterceptorPayloadExclusionSelector[];
export interface InterceptorPayloadFilter {
  exclude: InterceptorPayloadExclusionSelector[];
}
export interface InterceptorInputConfiguration {
  passRequestHeaders: boolean;
  payloadFilter?: InterceptorPayloadFilter;
}
export interface GatewayInterceptorConfiguration {
  interceptor: InterceptorConfiguration;
  interceptionPoints: GatewayInterceptionPoint[];
  inputConfiguration?: InterceptorInputConfiguration;
}
export type GatewayInterceptorConfigurations = GatewayInterceptorConfiguration[];
export type GatewayPolicyEngineArn = string;
export type GatewayPolicyEngineMode = "LOG_ONLY" | "ENFORCE" | (string & {});
export interface GatewayPolicyEngineConfiguration {
  arn: string;
  mode: GatewayPolicyEngineMode;
}
export type ExceptionLevel = "DEBUG" | (string & {});
export interface CreateGatewayRequest {
  name: string;
  description?: string | redacted.Redacted<string>;
  clientToken?: string;
  roleArn: string;
  protocolType?: GatewayProtocolType;
  protocolConfiguration?: GatewayProtocolConfiguration;
  authorizerType: AuthorizerType;
  authorizerConfiguration?: AuthorizerConfiguration;
  kmsKeyArn?: string;
  interceptorConfigurations?: GatewayInterceptorConfiguration[];
  policyEngineConfiguration?: GatewayPolicyEngineConfiguration;
  exceptionLevel?: ExceptionLevel;
  tags?: { [key: string]: string | undefined };
}
export type GatewayArn = string;
export type GatewayId = string;
export type GatewayUrl = string;
export type GatewayStatus =
  | "CREATING"
  | "UPDATING"
  | "UPDATE_UNSUCCESSFUL"
  | "DELETING"
  | "READY"
  | "FAILED"
  | (string & {});
export type StatusReason = string;
export type StatusReasons = string[];
export interface LambdaTransformConfiguration {
  arn?: string;
}
export interface CustomTransformConfiguration {
  lambda?: LambdaTransformConfiguration;
}
export type WebAclArn = string;
export type WafFailureMode = "FAIL_CLOSE" | "FAIL_OPEN" | (string & {});
export interface WafConfiguration {
  failureMode?: WafFailureMode;
}
export interface CreateGatewayResponse {
  gatewayArn: string;
  gatewayId: string;
  gatewayUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  status: GatewayStatus;
  statusReasons?: string[];
  name: string;
  description?: string | redacted.Redacted<string>;
  roleArn?: string;
  protocolType?: GatewayProtocolType;
  protocolConfiguration?: GatewayProtocolConfiguration;
  authorizerType: AuthorizerType;
  authorizerConfiguration?: AuthorizerConfiguration;
  kmsKeyArn?: string;
  customTransformConfiguration?: CustomTransformConfiguration;
  interceptorConfigurations?: GatewayInterceptorConfiguration[];
  policyEngineConfiguration?: GatewayPolicyEngineConfiguration;
  workloadIdentityDetails?: WorkloadIdentityDetails;
  exceptionLevel?: ExceptionLevel;
  webAclArn?: string;
  wafConfiguration?: WafConfiguration;
}
export interface CreateGatewayRateLimitRequest {
  gatewayIdentifier: string;
  clientToken?: string;
  rateLimitId?: string;
  description?: string;
  dimensionKeys: string[];
  entries: LimitEntry[];
}
export interface CreateGatewayRateLimitResponse {
  rateLimitId: string;
  gatewayIdentifier: string;
  description?: string;
  dimensionKeys: string[];
  entries: LimitEntry[];
  status: GatewayRateLimitStatus;
  createdAt: Date;
  updatedAt: Date;
}
export type GatewayRulePriority = number;
export type IamPrincipalArn = string;
export type PrincipalMatchOperator = "StringEquals" | "StringLike" | (string & {});
export interface IamPrincipal {
  arn: string;
  operator?: PrincipalMatchOperator;
}
export type MatchPrincipalEntry = { iamPrincipal: IamPrincipal };
export type MatchPrincipalEntries = MatchPrincipalEntry[];
export interface MatchPrincipals {
  anyOf: MatchPrincipalEntry[];
}
export type MatchPathPattern = string;
export type MatchPathPatterns = string[];
export interface MatchPaths {
  anyOf: string[];
}
export type Condition =
  | { matchPrincipals: MatchPrincipals; matchPaths?: never }
  | { matchPrincipals?: never; matchPaths: MatchPaths };
export type Conditions = Condition[];
export type GatewayConfigurationBundleArn = string;
export interface StaticOverride {
  bundleArn: string;
  bundleVersion: string;
}
export interface ConfigurationBundleReference {
  bundleArn: string;
  bundleVersion: string;
}
export type TrafficSplitMetadataKey = string;
export type TrafficSplitMetadataValue = string;
export type TrafficSplitMetadataMap = { [key: string]: string | undefined };
export interface TrafficSplitEntry {
  name: string;
  weight: number;
  configurationBundle: ConfigurationBundleReference;
  description?: string;
  metadata?: { [key: string]: string | undefined };
}
export type TrafficSplitEntries = TrafficSplitEntry[];
export interface WeightedOverride {
  trafficSplit: TrafficSplitEntry[];
}
export type ConfigurationBundleAction =
  | { staticOverride: StaticOverride; weightedOverride?: never }
  | { staticOverride?: never; weightedOverride: WeightedOverride };
export type TargetName = string | redacted.Redacted<string>;
export interface StaticRoute {
  targetName: string | redacted.Redacted<string>;
}
export interface TargetTrafficSplitEntry {
  name: string;
  weight: number;
  targetName: string | redacted.Redacted<string>;
  description?: string;
  metadata?: { [key: string]: string | undefined };
}
export type TargetTrafficSplitEntries = TargetTrafficSplitEntry[];
export interface WeightedRoute {
  trafficSplit: TargetTrafficSplitEntry[];
}
export type RouteToTargetAction =
  | { staticRoute: StaticRoute; weightedRoute?: never }
  | { staticRoute?: never; weightedRoute: WeightedRoute };
export type Action =
  | { configurationBundle: ConfigurationBundleAction; routeToTarget?: never }
  | { configurationBundle?: never; routeToTarget: RouteToTargetAction };
export type Actions = Action[];
export type GatewayRuleDescription = string;
export interface CreateGatewayRuleRequest {
  gatewayIdentifier: string;
  clientToken?: string;
  priority: number;
  conditions?: Condition[];
  actions: Action[];
  description?: string;
}
export type GatewayRuleId = string;
export type GatewayRuleStatus = "CREATING" | "ACTIVE" | "UPDATING" | "DELETING" | (string & {});
export interface SystemManagedBlock {
  managedBy: string;
}
export interface CreateGatewayRuleResponse {
  ruleId: string;
  gatewayArn: string;
  priority: number;
  conditions?: Condition[];
  actions: Action[];
  description?: string;
  createdAt: Date;
  status: GatewayRuleStatus;
  system?: SystemManagedBlock;
}
export type TargetDescription = string | redacted.Redacted<string>;
export type S3BucketUri = string;
export type AwsAccountId = string;
export interface S3Configuration {
  uri?: string;
  bucketOwnerAccountId?: string;
}
export type InlinePayload = string | redacted.Redacted<string>;
export type ApiSchemaConfiguration =
  | { s3: S3Configuration; inlinePayload?: never }
  | { s3?: never; inlinePayload: string | redacted.Redacted<string> };
export type SchemaType =
  | "string"
  | "number"
  | "object"
  | "array"
  | "boolean"
  | "integer"
  | (string & {});
export type SchemaProperties = { [key: string]: SchemaDefinition | undefined };
export type RequiredProperties = string[];
export interface SchemaDefinition {
  type: SchemaType;
  properties?: { [key: string]: SchemaDefinition | undefined };
  required?: string[];
  items?: SchemaDefinition;
  description?: string;
}
export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: SchemaDefinition;
  outputSchema?: SchemaDefinition;
}
export type ToolDefinitions = ToolDefinition[];
export type ToolSchema =
  | { s3: S3Configuration; inlinePayload?: never }
  | { s3?: never; inlinePayload: ToolDefinition[] };
export interface McpLambdaTargetConfiguration {
  lambdaArn: string;
  toolSchema: ToolSchema;
}
export type McpToolSchemaConfiguration =
  | { s3: S3Configuration; inlinePayload?: never }
  | { s3?: never; inlinePayload: string | redacted.Redacted<string> };
export type ListingMode = "DEFAULT" | "DYNAMIC" | (string & {});
export type TargetResourcePriority = number;
export interface McpServerTargetConfiguration {
  endpoint: string;
  mcpToolSchema?: McpToolSchemaConfiguration;
  listingMode?: ListingMode;
  resourcePriority?: number;
}
export type RestApiMethod =
  | "GET"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "PATCH"
  | "PUT"
  | "POST"
  | (string & {});
export interface ApiGatewayToolOverride {
  name: string;
  description?: string;
  path: string;
  method: RestApiMethod;
}
export type ApiGatewayToolOverrides = ApiGatewayToolOverride[];
export type RestApiMethods = RestApiMethod[];
export interface ApiGatewayToolFilter {
  filterPath: string;
  methods: RestApiMethod[];
}
export type ApiGatewayToolFilters = ApiGatewayToolFilter[];
export interface ApiGatewayToolConfiguration {
  toolOverrides?: ApiGatewayToolOverride[];
  toolFilters: ApiGatewayToolFilter[];
}
export interface ApiGatewayTargetConfiguration {
  restApiId: string;
  stage: string;
  apiGatewayToolConfiguration: ApiGatewayToolConfiguration;
}
export type ConnectorId = string;
export type ConnectorVersion = string;
export interface ConnectorSource {
  connectorId: string;
  version?: string;
}
export type EnabledConnectors = string[];
export interface ConnectorParameterOverride {
  path: string;
  description?: string;
  visible?: boolean;
}
export type ConnectorParameterOverrides = ConnectorParameterOverride[];
export interface ConnectorConfiguration {
  name: string;
  description?: string;
  parameterValues?: any;
  parameterOverrides?: ConnectorParameterOverride[];
}
export type ConnectorConfigurations = ConnectorConfiguration[];
export interface ConnectorTargetConfiguration {
  source: ConnectorSource;
  enabled?: string[];
  configurations?: ConnectorConfiguration[];
}
export type McpTargetConfiguration =
  | {
      openApiSchema: ApiSchemaConfiguration;
      smithyModel?: never;
      lambda?: never;
      mcpServer?: never;
      apiGateway?: never;
      connector?: never;
    }
  | {
      openApiSchema?: never;
      smithyModel: ApiSchemaConfiguration;
      lambda?: never;
      mcpServer?: never;
      apiGateway?: never;
      connector?: never;
    }
  | {
      openApiSchema?: never;
      smithyModel?: never;
      lambda: McpLambdaTargetConfiguration;
      mcpServer?: never;
      apiGateway?: never;
      connector?: never;
    }
  | {
      openApiSchema?: never;
      smithyModel?: never;
      lambda?: never;
      mcpServer: McpServerTargetConfiguration;
      apiGateway?: never;
      connector?: never;
    }
  | {
      openApiSchema?: never;
      smithyModel?: never;
      lambda?: never;
      mcpServer?: never;
      apiGateway: ApiGatewayTargetConfiguration;
      connector?: never;
    }
  | {
      openApiSchema?: never;
      smithyModel?: never;
      lambda?: never;
      mcpServer?: never;
      apiGateway?: never;
      connector: ConnectorTargetConfiguration;
    };
export type RuntimeArn = string;
export type RuntimeQualifier = string;
export interface HttpApiSchemaConfiguration {
  source: ApiSchemaConfiguration;
}
export interface RuntimeTargetConfiguration {
  arn: string;
  qualifier?: string;
  schema?: HttpApiSchemaConfiguration;
}
export type PassthroughEndpoint = string;
export type PassthroughProtocolType = "MCP" | "A2A" | "INFERENCE" | "CUSTOM" | (string & {});
export type StickinessTimeout = number;
export type CompositeIdentifierEntry = string;
export type CompositeIdentifierList = string[];
export interface StickinessConfiguration {
  identifier: string;
  timeout?: number;
  compositeIdentifier?: string[];
}
export type StaticQueryParameterName = string;
export type StaticQueryParameterValue = string | redacted.Redacted<string>;
export type StaticQueryParameters = {
  [key: string]: string | redacted.Redacted<string> | undefined;
};
export type StaticQueryParameterConflictResolution =
  | "CLIENT_OVERRIDE"
  | "STATIC_OVERRIDE"
  | (string & {});
export interface PassthroughTargetConfiguration {
  endpoint: string;
  protocolType: PassthroughProtocolType;
  schema?: HttpApiSchemaConfiguration;
  stickinessConfiguration?: StickinessConfiguration;
  staticQueryParameters?: { [key: string]: string | redacted.Redacted<string> | undefined };
  staticQueryParameterConflictResolution?: StaticQueryParameterConflictResolution;
}
export interface HttpConnectorSource {
  connectorId: string;
}
export type ConnectorParameterName = string;
export type ConnectorParameterValue = string;
export type HttpConnectorParameters = { [key: string]: string | undefined };
export interface HttpConnectorTargetConfiguration {
  source: HttpConnectorSource;
  parameters?: { [key: string]: string | undefined };
}
export type HttpTargetConfiguration =
  | { agentcoreRuntime: RuntimeTargetConfiguration; passthrough?: never; connector?: never }
  | { agentcoreRuntime?: never; passthrough: PassthroughTargetConfiguration; connector?: never }
  | { agentcoreRuntime?: never; passthrough?: never; connector: HttpConnectorTargetConfiguration };
export type InferenceConnectorId = string;
export interface InferenceConnectorSource {
  connectorId: string;
}
export interface InferenceConnectorTargetConfiguration {
  source: InferenceConnectorSource;
}
export interface ProviderPrefix {
  strip?: boolean;
  separator?: string;
}
export interface ModelMapping {
  providerPrefix?: ProviderPrefix;
}
export type InferenceOperationPath = string;
export type ModelPattern = string;
export interface ModelEntry {
  model: string;
}
export type ModelEntries = ModelEntry[];
export interface InferenceOperationConfiguration {
  path: string;
  providerPath?: string;
  models?: ModelEntry[];
}
export type InferenceOperationConfigurations = InferenceOperationConfiguration[];
export interface InferenceProviderTargetConfiguration {
  endpoint: string;
  modelMapping?: ModelMapping;
  operations?: InferenceOperationConfiguration[];
}
export type InferenceTargetConfiguration =
  | { connector: InferenceConnectorTargetConfiguration; provider?: never }
  | { connector?: never; provider: InferenceProviderTargetConfiguration };
export type TargetConfiguration =
  | { mcp: McpTargetConfiguration; http?: never; inference?: never }
  | { mcp?: never; http: HttpTargetConfiguration; inference?: never }
  | { mcp?: never; http?: never; inference: InferenceTargetConfiguration };
export type CredentialProviderType =
  | "GATEWAY_IAM_ROLE"
  | "OAUTH"
  | "API_KEY"
  | "CALLER_IAM_CREDENTIALS"
  | "JWT_PASSTHROUGH"
  | (string & {});
export type OAuthCredentialProviderArn = string;
export type OAuthScope = string;
export type OAuthScopes = string[];
export type OAuthCustomParametersKey = string;
export type OAuthCustomParametersValue = string | redacted.Redacted<string>;
export type OAuthCustomParameters = {
  [key: string]: string | redacted.Redacted<string> | undefined;
};
export type OAuthGrantType =
  | "CLIENT_CREDENTIALS"
  | "AUTHORIZATION_CODE"
  | "TOKEN_EXCHANGE"
  | (string & {});
export type OAuthDefaultReturnUrl = string;
export interface OAuthCredentialProvider {
  providerArn: string;
  scopes: string[];
  customParameters?: { [key: string]: string | redacted.Redacted<string> | undefined };
  grantType?: OAuthGrantType;
  defaultReturnUrl?: string;
}
export type ApiKeyCredentialProviderArn = string;
export type ApiKeyCredentialParameterName = string;
export type ApiKeyCredentialPrefix = string;
export type ApiKeyCredentialLocation = "HEADER" | "QUERY_PARAMETER" | (string & {});
export interface GatewayApiKeyCredentialProvider {
  providerArn: string;
  credentialParameterName?: string;
  credentialPrefix?: string;
  credentialLocation?: ApiKeyCredentialLocation;
}
export interface IamCredentialProvider {
  service: string;
  region?: string;
}
export type CredentialProvider =
  | {
      oauthCredentialProvider: OAuthCredentialProvider;
      apiKeyCredentialProvider?: never;
      iamCredentialProvider?: never;
    }
  | {
      oauthCredentialProvider?: never;
      apiKeyCredentialProvider: GatewayApiKeyCredentialProvider;
      iamCredentialProvider?: never;
    }
  | {
      oauthCredentialProvider?: never;
      apiKeyCredentialProvider?: never;
      iamCredentialProvider: IamCredentialProvider;
    };
export interface CredentialProviderConfiguration {
  credentialProviderType: CredentialProviderType;
  credentialProvider?: CredentialProvider;
}
export type CredentialProviderConfigurations = CredentialProviderConfiguration[];
export type HttpHeaderName = string;
export type AllowedRequestHeaders = string[];
export type HttpQueryParameterName = string;
export type AllowedQueryParameters = string[];
export type AllowedResponseHeaders = string[];
export interface MetadataConfiguration {
  allowedRequestHeaders?: string[];
  allowedQueryParameters?: string[];
  allowedResponseHeaders?: string[];
}
export type CertificateS3Uri = string;
export type CertificateBucketOwnerAccountId = string;
export interface S3CertificateConfiguration {
  uri: string;
  bucketOwnerAccountId?: string;
}
export type CertificateSecretArn = string;
export interface SecretsManagerCertificateConfiguration {
  secretArn: string;
}
export type CertificateConfiguration =
  | { s3: S3CertificateConfiguration; secretsManager?: never }
  | { s3?: never; secretsManager: SecretsManagerCertificateConfiguration };
export type CertificateConfigurationList = CertificateConfiguration[];
export interface CreateGatewayTargetRequest {
  gatewayIdentifier: string;
  name?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  clientToken?: string;
  targetConfiguration: TargetConfiguration;
  credentialProviderConfigurations?: CredentialProviderConfiguration[];
  metadataConfiguration?: MetadataConfiguration;
  privateEndpoint?: PrivateEndpoint;
  certificateConfigurations?: CertificateConfiguration[];
}
export type TargetId = string;
export type TargetStatus =
  | "CREATING"
  | "UPDATING"
  | "UPDATE_UNSUCCESSFUL"
  | "DELETING"
  | "READY"
  | "FAILED"
  | "SYNCHRONIZING"
  | "SYNCHRONIZE_UNSUCCESSFUL"
  | "CREATE_PENDING_AUTH"
  | "UPDATE_PENDING_AUTH"
  | "SYNCHRONIZE_PENDING_AUTH"
  | (string & {});
export type DomainName = string;
export type ResourceGatewayArn = string;
export type ResourceAssociationArn = string;
export interface ManagedResourceDetails {
  domain?: string;
  resourceGatewayArn?: string;
  resourceAssociationArn?: string;
}
export type PrivateEndpointManagedResources = ManagedResourceDetails[];
export interface OAuth2AuthorizationData {
  authorizationUrl: string;
  userId?: string;
}
export type AuthorizationData = { oauth2: OAuth2AuthorizationData };
export type TargetProtocolType = "MCP" | "HTTP" | (string & {});
export interface CreateGatewayTargetResponse {
  gatewayArn: string;
  targetId: string;
  createdAt: Date;
  updatedAt: Date;
  status: TargetStatus;
  statusReasons?: string[];
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  targetConfiguration: TargetConfiguration;
  credentialProviderConfigurations: CredentialProviderConfiguration[];
  lastSynchronizedAt?: Date;
  metadataConfiguration?: MetadataConfiguration;
  privateEndpoint?: PrivateEndpoint;
  privateEndpointManagedResources?: ManagedResourceDetails[];
  authorizationData?: AuthorizationData;
  protocolType?: TargetProtocolType;
  certificateConfigurations?: CertificateConfiguration[];
}
export type HarnessName = string;
export interface HarnessAgentCoreRuntimeEnvironmentRequest {
  lifecycleConfiguration?: LifecycleConfiguration;
  networkConfiguration?: NetworkConfiguration;
  filesystemConfigurations?: FilesystemConfiguration[];
}
export type HarnessEnvironmentProviderRequest = {
  agentCoreRuntimeEnvironment: HarnessAgentCoreRuntimeEnvironmentRequest;
};
export type HarnessEnvironmentArtifact = { containerConfiguration: ContainerConfiguration };
export type MaxTokens = number;
export type Temperature = number;
export type TopP = number;
export type HarnessBedrockApiFormat =
  | "converse_stream"
  | "responses"
  | "chat_completions"
  | (string & {});
export interface HarnessBedrockModelConfig {
  modelId: string;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  apiFormat?: HarnessBedrockApiFormat;
  additionalParams?: any;
}
export type ApiKeyArn = string;
export type HarnessOpenAiApiBase = string | redacted.Redacted<string>;
export type HarnessOpenAiApiFormat = "chat_completions" | "responses" | (string & {});
export interface HarnessOpenAiModelConfig {
  modelId: string;
  apiKeyArn: string;
  apiBase?: string | redacted.Redacted<string>;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  apiFormat?: HarnessOpenAiApiFormat;
  additionalParams?: any;
}
export type TopK = number;
export interface HarnessGeminiModelConfig {
  modelId: string;
  apiKeyArn: string;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  topK?: number;
  additionalParams?: any;
}
export type HarnessLiteLlmApiBase = string | redacted.Redacted<string>;
export interface HarnessLiteLlmModelConfig {
  modelId: string;
  apiKeyArn?: string;
  apiBase?: string | redacted.Redacted<string>;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  additionalParams?: any;
}
export type HarnessModelConfiguration =
  | {
      bedrockModelConfig: HarnessBedrockModelConfig;
      openAiModelConfig?: never;
      geminiModelConfig?: never;
      liteLlmModelConfig?: never;
    }
  | {
      bedrockModelConfig?: never;
      openAiModelConfig: HarnessOpenAiModelConfig;
      geminiModelConfig?: never;
      liteLlmModelConfig?: never;
    }
  | {
      bedrockModelConfig?: never;
      openAiModelConfig?: never;
      geminiModelConfig: HarnessGeminiModelConfig;
      liteLlmModelConfig?: never;
    }
  | {
      bedrockModelConfig?: never;
      openAiModelConfig?: never;
      geminiModelConfig?: never;
      liteLlmModelConfig: HarnessLiteLlmModelConfig;
    };
export type SensitiveText = string | redacted.Redacted<string>;
export type HarnessSystemContentBlock = { text: string | redacted.Redacted<string> };
export type HarnessSystemPrompt = HarnessSystemContentBlock[];
export type HarnessToolType =
  | "remote_mcp"
  | "agentcore_browser"
  | "agentcore_gateway"
  | "inline_function"
  | "agentcore_code_interpreter"
  | (string & {});
export type HarnessToolName = string;
export type HarnessRemoteMcpUrl = string | redacted.Redacted<string>;
export type HttpHeaderKey = string;
export type HttpHeaderValue = string;
export type HttpHeadersMap = { [key: string]: string | undefined };
export interface HarnessRemoteMcpConfig {
  url: string | redacted.Redacted<string>;
  headers?: { [key: string]: string | undefined };
}
export type HarnessBrowserArn = string;
export interface HarnessAgentCoreBrowserConfig {
  browserArn?: string;
}
export type HarnessGatewayOutboundAuth =
  | { awsIam: Record<string, never>; none?: never; oauth?: never }
  | { awsIam?: never; none: Record<string, never>; oauth?: never }
  | { awsIam?: never; none?: never; oauth: OAuthCredentialProvider };
export interface HarnessAgentCoreGatewayConfig {
  gatewayArn: string;
  outboundAuth?: HarnessGatewayOutboundAuth;
}
export type HarnessInlineFunctionDescription = string | redacted.Redacted<string>;
export interface HarnessInlineFunctionConfig {
  description: string | redacted.Redacted<string>;
  inputSchema: any;
}
export type HarnessCodeInterpreterArn = string;
export interface HarnessAgentCoreCodeInterpreterConfig {
  codeInterpreterArn?: string;
}
export type HarnessToolConfiguration =
  | {
      remoteMcp: HarnessRemoteMcpConfig;
      agentCoreBrowser?: never;
      agentCoreGateway?: never;
      inlineFunction?: never;
      agentCoreCodeInterpreter?: never;
    }
  | {
      remoteMcp?: never;
      agentCoreBrowser: HarnessAgentCoreBrowserConfig;
      agentCoreGateway?: never;
      inlineFunction?: never;
      agentCoreCodeInterpreter?: never;
    }
  | {
      remoteMcp?: never;
      agentCoreBrowser?: never;
      agentCoreGateway: HarnessAgentCoreGatewayConfig;
      inlineFunction?: never;
      agentCoreCodeInterpreter?: never;
    }
  | {
      remoteMcp?: never;
      agentCoreBrowser?: never;
      agentCoreGateway?: never;
      inlineFunction: HarnessInlineFunctionConfig;
      agentCoreCodeInterpreter?: never;
    }
  | {
      remoteMcp?: never;
      agentCoreBrowser?: never;
      agentCoreGateway?: never;
      inlineFunction?: never;
      agentCoreCodeInterpreter: HarnessAgentCoreCodeInterpreterConfig;
    };
export interface HarnessTool {
  type: HarnessToolType;
  name?: string;
  config?: HarnessToolConfiguration;
}
export type HarnessTools = HarnessTool[];
export type HarnessSkillPath = string;
export type HarnessSkillS3Uri = string;
export interface HarnessSkillS3Source {
  uri: string;
}
export type HarnessSkillGitUrl = string;
export interface HarnessSkillGitAuth {
  credentialArn: string;
  username?: string;
}
export interface HarnessSkillGitSource {
  url: string;
  path?: string;
  auth?: HarnessSkillGitAuth;
}
export type HarnessAwsSkillPath = string;
export type HarnessAwsSkillPaths = string[];
export interface HarnessSkillAwsSkillsSource {
  paths?: string[];
}
export type HarnessSkill =
  | { path: string; s3?: never; git?: never; awsSkills?: never }
  | { path?: never; s3: HarnessSkillS3Source; git?: never; awsSkills?: never }
  | { path?: never; s3?: never; git: HarnessSkillGitSource; awsSkills?: never }
  | { path?: never; s3?: never; git?: never; awsSkills: HarnessSkillAwsSkillsSource };
export type HarnessSkills = HarnessSkill[];
export type HarnessAllowedTool = string;
export type HarnessAllowedTools = string[];
export type MemoryArn = string;
export interface HarnessAgentCoreMemoryRetrievalConfig {
  topK?: number;
  relevanceScore?: number;
  strategyId?: string;
}
export type HarnessAgentCoreMemoryRetrievalConfigs = {
  [key: string]: HarnessAgentCoreMemoryRetrievalConfig | undefined;
};
export interface HarnessAgentCoreMemoryConfiguration {
  arn: string;
  actorId?: string;
  messagesCount?: number;
  retrievalConfig?: { [key: string]: HarnessAgentCoreMemoryRetrievalConfig | undefined };
}
export type HarnessManagedMemoryStrategyType =
  | "SEMANTIC"
  | "SUMMARIZATION"
  | "USER_PREFERENCE"
  | "EPISODIC"
  | (string & {});
export type HarnessManagedMemoryStrategyList = HarnessManagedMemoryStrategyType[];
export interface HarnessManagedMemoryConfiguration {
  arn?: string;
  strategies?: HarnessManagedMemoryStrategyType[];
  eventExpiryDuration?: number;
  encryptionKeyArn?: string;
}
export interface HarnessDisabledMemoryConfiguration {}
export type HarnessMemoryConfiguration =
  | {
      agentCoreMemoryConfiguration: HarnessAgentCoreMemoryConfiguration;
      managedMemoryConfiguration?: never;
      disabled?: never;
    }
  | {
      agentCoreMemoryConfiguration?: never;
      managedMemoryConfiguration: HarnessManagedMemoryConfiguration;
      disabled?: never;
    }
  | {
      agentCoreMemoryConfiguration?: never;
      managedMemoryConfiguration?: never;
      disabled: HarnessDisabledMemoryConfiguration;
    };
export type HarnessTruncationStrategy = "sliding_window" | "summarization" | "none" | (string & {});
export interface HarnessSlidingWindowConfiguration {
  messagesCount?: number;
}
export interface HarnessSummarizationConfiguration {
  summaryRatio?: number;
  preserveRecentMessages?: number;
  summarizationSystemPrompt?: string;
}
export type HarnessTruncationStrategyConfiguration =
  | { slidingWindow: HarnessSlidingWindowConfiguration; summarization?: never }
  | { slidingWindow?: never; summarization: HarnessSummarizationConfiguration };
export interface HarnessTruncationConfiguration {
  strategy: HarnessTruncationStrategy;
  config?: HarnessTruncationStrategyConfiguration;
}
export type HarnessHookName = string;
export type HarnessLambdaFunctionArn = string;
export type HarnessHookFailureMode = "allow" | "deny" | (string & {});
export interface HarnessHookLambdaTarget {
  arn: string;
  timeoutSeconds?: number;
  failureMode?: HarnessHookFailureMode;
}
export type HarnessSnsTopicArn = string;
export interface HarnessHookSnsTarget {
  arn: string;
}
export type HarnessEventBridgeBusArn = string;
export interface HarnessHookEventBridgeTarget {
  arn: string;
}
export type HarnessHookTarget =
  | { lambda: HarnessHookLambdaTarget; sns?: never; eventBridge?: never }
  | { lambda?: never; sns: HarnessHookSnsTarget; eventBridge?: never }
  | { lambda?: never; sns?: never; eventBridge: HarnessHookEventBridgeTarget };
export interface HarnessBeforeInvocationHook {
  name: string;
  target: HarnessHookTarget;
}
export interface HarnessAfterInvocationHook {
  name: string;
  target: HarnessHookTarget;
}
export interface HarnessBeforeToolCallHook {
  name: string;
  target: HarnessHookTarget;
}
export interface HarnessAfterToolCallHook {
  name: string;
  target: HarnessHookTarget;
}
export type HarnessHook =
  | {
      beforeInvocation: HarnessBeforeInvocationHook;
      afterInvocation?: never;
      beforeToolCall?: never;
      afterToolCall?: never;
    }
  | {
      beforeInvocation?: never;
      afterInvocation: HarnessAfterInvocationHook;
      beforeToolCall?: never;
      afterToolCall?: never;
    }
  | {
      beforeInvocation?: never;
      afterInvocation?: never;
      beforeToolCall: HarnessBeforeToolCallHook;
      afterToolCall?: never;
    }
  | {
      beforeInvocation?: never;
      afterInvocation?: never;
      beforeToolCall?: never;
      afterToolCall: HarnessAfterToolCallHook;
    };
export type HarnessHooks = HarnessHook[];
export interface CreateHarnessRequest {
  harnessName: string;
  clientToken?: string;
  executionRoleArn: string;
  environment?: HarnessEnvironmentProviderRequest;
  environmentArtifact?: HarnessEnvironmentArtifact;
  environmentVariables?: { [key: string]: string | undefined };
  authorizerConfiguration?: AuthorizerConfiguration;
  model?: HarnessModelConfiguration;
  systemPrompt?: HarnessSystemContentBlock[];
  tools?: HarnessTool[];
  skills?: HarnessSkill[];
  allowedTools?: string[];
  memory?: HarnessMemoryConfiguration;
  truncation?: HarnessTruncationConfiguration;
  hooks?: HarnessHook[];
  maxIterations?: number;
  maxTokens?: number;
  timeoutSeconds?: number;
  tags?: { [key: string]: string | undefined };
}
export type HarnessId = string;
export type HarnessArn = string;
export type HarnessStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "READY"
  | "DELETING"
  | "DELETE_FAILED"
  | (string & {});
export type HarnessVersion = string;
export interface HarnessAgentCoreRuntimeEnvironment {
  agentRuntimeArn: string;
  agentRuntimeName: string;
  agentRuntimeId: string;
  lifecycleConfiguration: LifecycleConfiguration;
  networkConfiguration: NetworkConfiguration;
  filesystemConfigurations?: FilesystemConfiguration[];
}
export type HarnessEnvironmentProvider = {
  agentCoreRuntimeEnvironment: HarnessAgentCoreRuntimeEnvironment;
};
export interface Harness {
  harnessId: string;
  harnessName: string;
  arn: string;
  status: HarnessStatus;
  harnessVersion?: string;
  executionRoleArn: string;
  createdAt: Date;
  updatedAt: Date;
  model: HarnessModelConfiguration;
  systemPrompt: HarnessSystemContentBlock[];
  tools: HarnessTool[];
  skills: HarnessSkill[];
  allowedTools: string[];
  truncation: HarnessTruncationConfiguration;
  environment: HarnessEnvironmentProvider;
  environmentArtifact?: HarnessEnvironmentArtifact;
  environmentVariables?: { [key: string]: string | undefined };
  authorizerConfiguration?: AuthorizerConfiguration;
  memory?: HarnessMemoryConfiguration;
  hooks?: HarnessHook[];
  maxIterations?: number;
  maxTokens?: number;
  timeoutSeconds?: number;
  failureReason?: string;
}
export interface CreateHarnessResponse {
  harness: Harness;
}
export type HarnessEndpointName = string;
export type HarnessEndpointDescription = string;
export interface CreateHarnessEndpointRequest {
  harnessId: string;
  endpointName: string;
  targetVersion?: string;
  description?: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type HarnessEndpointArn = string;
export type HarnessEndpointStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "READY"
  | "DELETING"
  | "DELETE_FAILED"
  | (string & {});
export interface HarnessEndpoint {
  harnessId: string;
  harnessName: string;
  endpointName: string;
  arn: string;
  status: HarnessEndpointStatus;
  createdAt: Date;
  updatedAt: Date;
  liveVersion?: string;
  targetVersion?: string;
  description?: string;
  failureReason?: string;
}
export interface CreateHarnessEndpointResponse {
  endpoint: HarnessEndpoint;
}
export type Name = string;
export type Arn = string;
export type Namespace = string;
export type NamespacesList = string[];
export type MetadataKey = string;
export type MetadataValueType = "STRING" | "STRINGLIST" | "NUMBER" | (string & {});
export type ExtractionType = "LLM_INFERRED" | "STRICTLY_CONSISTENT" | (string & {});
export type LlmExtractionInstruction = string | redacted.Redacted<string>;
export type Definition = string | redacted.Redacted<string>;
export type AllowedStringValue = string;
export type AllowedStringValuesList = string[];
export interface StringValidation {
  allowedValues: string[];
}
export type AllowedStringListValue = string;
export type AllowedStringListValuesList = string[];
export interface StringListValidation {
  allowedValues?: string[];
  maxItems?: number;
}
export interface NumberValidation {
  minValue?: number;
  maxValue?: number;
}
export type Validation =
  | { stringValidation: StringValidation; stringListValidation?: never; numberValidation?: never }
  | {
      stringValidation?: never;
      stringListValidation: StringListValidation;
      numberValidation?: never;
    }
  | { stringValidation?: never; stringListValidation?: never; numberValidation: NumberValidation };
export interface LlmExtractionConfig {
  llmExtractionInstruction?: string | redacted.Redacted<string>;
  definition: string | redacted.Redacted<string>;
  validation?: Validation;
}
export type ExtractionConfig = { llmExtractionConfig: LlmExtractionConfig };
export interface MetadataSchemaEntry {
  key: string;
  type?: MetadataValueType;
  extractionType?: ExtractionType;
  extractionConfig?: ExtractionConfig;
}
export type MetadataSchemaList = MetadataSchemaEntry[];
export interface MemoryRecordSchema {
  metadataSchema?: MetadataSchemaEntry[];
}
export interface SemanticMemoryStrategyInput {
  name: string;
  description?: string | redacted.Redacted<string>;
  namespaces?: string[];
  namespaceTemplates?: string[];
  memoryRecordSchema?: MemoryRecordSchema;
}
export interface SummaryMemoryStrategyInput {
  name: string;
  description?: string | redacted.Redacted<string>;
  namespaces?: string[];
  namespaceTemplates?: string[];
  memoryRecordSchema?: MemoryRecordSchema;
}
export interface UserPreferenceMemoryStrategyInput {
  name: string;
  description?: string | redacted.Redacted<string>;
  namespaces?: string[];
  namespaceTemplates?: string[];
  memoryRecordSchema?: MemoryRecordSchema;
}
export type Prompt = string | redacted.Redacted<string>;
export interface SemanticOverrideExtractionConfigurationInput {
  appendToPrompt: string | redacted.Redacted<string>;
  modelId: string;
}
export interface SemanticOverrideConsolidationConfigurationInput {
  appendToPrompt: string | redacted.Redacted<string>;
  modelId: string;
}
export interface SemanticOverrideConfigurationInput {
  extraction?: SemanticOverrideExtractionConfigurationInput;
  consolidation?: SemanticOverrideConsolidationConfigurationInput;
}
export interface SummaryOverrideConsolidationConfigurationInput {
  appendToPrompt: string | redacted.Redacted<string>;
  modelId: string;
}
export interface SummaryOverrideConfigurationInput {
  consolidation?: SummaryOverrideConsolidationConfigurationInput;
}
export interface UserPreferenceOverrideExtractionConfigurationInput {
  appendToPrompt: string | redacted.Redacted<string>;
  modelId: string;
}
export interface UserPreferenceOverrideConsolidationConfigurationInput {
  appendToPrompt: string | redacted.Redacted<string>;
  modelId: string;
}
export interface UserPreferenceOverrideConfigurationInput {
  extraction?: UserPreferenceOverrideExtractionConfigurationInput;
  consolidation?: UserPreferenceOverrideConsolidationConfigurationInput;
}
export interface EpisodicOverrideExtractionConfigurationInput {
  appendToPrompt: string | redacted.Redacted<string>;
  modelId: string;
}
export interface EpisodicOverrideConsolidationConfigurationInput {
  appendToPrompt: string | redacted.Redacted<string>;
  modelId: string;
}
export interface EpisodicOverrideReflectionConfigurationInput {
  appendToPrompt: string | redacted.Redacted<string>;
  modelId: string;
  namespaces?: string[];
  namespaceTemplates?: string[];
  memoryRecordSchema?: MemoryRecordSchema;
}
export interface EpisodicOverrideConfigurationInput {
  extraction?: EpisodicOverrideExtractionConfigurationInput;
  consolidation?: EpisodicOverrideConsolidationConfigurationInput;
  reflection?: EpisodicOverrideReflectionConfigurationInput;
}
export interface MessageBasedTriggerInput {
  messageCount?: number;
}
export interface TokenBasedTriggerInput {
  tokenCount?: number;
}
export interface TimeBasedTriggerInput {
  idleSessionTimeout?: number;
}
export type TriggerConditionInput =
  | {
      messageBasedTrigger: MessageBasedTriggerInput;
      tokenBasedTrigger?: never;
      timeBasedTrigger?: never;
    }
  | {
      messageBasedTrigger?: never;
      tokenBasedTrigger: TokenBasedTriggerInput;
      timeBasedTrigger?: never;
    }
  | {
      messageBasedTrigger?: never;
      tokenBasedTrigger?: never;
      timeBasedTrigger: TimeBasedTriggerInput;
    };
export type TriggerConditionInputList = TriggerConditionInput[];
export interface InvocationConfigurationInput {
  topicArn: string;
  payloadDeliveryBucketName: string;
}
export interface SelfManagedConfigurationInput {
  triggerConditions?: TriggerConditionInput[];
  invocationConfiguration: InvocationConfigurationInput;
  historicalContextWindowSize?: number;
}
export type CustomConfigurationInput =
  | {
      semanticOverride: SemanticOverrideConfigurationInput;
      summaryOverride?: never;
      userPreferenceOverride?: never;
      episodicOverride?: never;
      selfManagedConfiguration?: never;
    }
  | {
      semanticOverride?: never;
      summaryOverride: SummaryOverrideConfigurationInput;
      userPreferenceOverride?: never;
      episodicOverride?: never;
      selfManagedConfiguration?: never;
    }
  | {
      semanticOverride?: never;
      summaryOverride?: never;
      userPreferenceOverride: UserPreferenceOverrideConfigurationInput;
      episodicOverride?: never;
      selfManagedConfiguration?: never;
    }
  | {
      semanticOverride?: never;
      summaryOverride?: never;
      userPreferenceOverride?: never;
      episodicOverride: EpisodicOverrideConfigurationInput;
      selfManagedConfiguration?: never;
    }
  | {
      semanticOverride?: never;
      summaryOverride?: never;
      userPreferenceOverride?: never;
      episodicOverride?: never;
      selfManagedConfiguration: SelfManagedConfigurationInput;
    };
export interface CustomMemoryStrategyInput {
  name: string;
  description?: string | redacted.Redacted<string>;
  namespaces?: string[];
  namespaceTemplates?: string[];
  configuration?: CustomConfigurationInput;
  memoryRecordSchema?: MemoryRecordSchema;
}
export interface EpisodicReflectionConfigurationInput {
  namespaces?: string[];
  namespaceTemplates?: string[];
  memoryRecordSchema?: MemoryRecordSchema;
}
export interface EpisodicMemoryStrategyInput {
  name: string;
  description?: string | redacted.Redacted<string>;
  namespaces?: string[];
  namespaceTemplates?: string[];
  reflectionConfiguration?: EpisodicReflectionConfigurationInput;
  memoryRecordSchema?: MemoryRecordSchema;
}
export type MemoryStrategyInput =
  | {
      semanticMemoryStrategy: SemanticMemoryStrategyInput;
      summaryMemoryStrategy?: never;
      userPreferenceMemoryStrategy?: never;
      customMemoryStrategy?: never;
      episodicMemoryStrategy?: never;
    }
  | {
      semanticMemoryStrategy?: never;
      summaryMemoryStrategy: SummaryMemoryStrategyInput;
      userPreferenceMemoryStrategy?: never;
      customMemoryStrategy?: never;
      episodicMemoryStrategy?: never;
    }
  | {
      semanticMemoryStrategy?: never;
      summaryMemoryStrategy?: never;
      userPreferenceMemoryStrategy: UserPreferenceMemoryStrategyInput;
      customMemoryStrategy?: never;
      episodicMemoryStrategy?: never;
    }
  | {
      semanticMemoryStrategy?: never;
      summaryMemoryStrategy?: never;
      userPreferenceMemoryStrategy?: never;
      customMemoryStrategy: CustomMemoryStrategyInput;
      episodicMemoryStrategy?: never;
    }
  | {
      semanticMemoryStrategy?: never;
      summaryMemoryStrategy?: never;
      userPreferenceMemoryStrategy?: never;
      customMemoryStrategy?: never;
      episodicMemoryStrategy: EpisodicMemoryStrategyInput;
    };
export type MemoryStrategyInputList = MemoryStrategyInput[];
export interface IndexedKey {
  key: string;
  type: MetadataValueType;
}
export type IndexedKeysList = IndexedKey[];
export type NamespaceVariableKey = string;
export type NamespaceAllowedValue = string;
export type NamespaceAllowedValuesList = string[];
export type NamespaceRegexPattern = string;
export interface NamespaceKeyValidation {
  allowedValues?: string[];
  regexPattern?: string;
}
export interface NamespaceKeyEntry {
  key: string;
  validation?: NamespaceKeyValidation;
}
export type NamespaceKeysList = NamespaceKeyEntry[];
export type ContentType = "MEMORY_RECORDS" | (string & {});
export type ContentLevel = "METADATA_ONLY" | "FULL_CONTENT" | (string & {});
export interface ContentConfiguration {
  type: ContentType;
  level?: ContentLevel;
}
export type ContentConfigurationList = ContentConfiguration[];
export interface KinesisResource {
  dataStreamArn: string;
  contentConfigurations: ContentConfiguration[];
}
export type StreamDeliveryResource = { kinesis: KinesisResource };
export type StreamDeliveryResourcesList = StreamDeliveryResource[];
export interface StreamDeliveryResources {
  resources: StreamDeliveryResource[];
}
export interface CreateMemoryInput {
  clientToken?: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  encryptionKeyArn?: string;
  memoryExecutionRoleArn?: string;
  eventExpiryDuration: number;
  memoryStrategies?: MemoryStrategyInput[];
  indexedKeys?: IndexedKey[];
  namespaceKeys?: NamespaceKeyEntry[];
  streamDeliveryResources?: StreamDeliveryResources;
  tags?: { [key: string]: string | undefined };
}
export type MemoryId = string;
export type MemoryStatus =
  | "CREATING"
  | "ACTIVE"
  | "FAILED"
  | "DELETING"
  | "UPDATING"
  | (string & {});
export type MemoryStrategyId = string;
export type OverrideType =
  | "SEMANTIC_OVERRIDE"
  | "SUMMARY_OVERRIDE"
  | "USER_PREFERENCE_OVERRIDE"
  | "SELF_MANAGED"
  | "EPISODIC_OVERRIDE"
  | (string & {});
export interface SemanticExtractionOverride {
  appendToPrompt: string | redacted.Redacted<string>;
  modelId: string;
}
export interface UserPreferenceExtractionOverride {
  appendToPrompt: string | redacted.Redacted<string>;
  modelId: string;
}
export interface EpisodicExtractionOverride {
  appendToPrompt: string | redacted.Redacted<string>;
  modelId: string;
}
export type CustomExtractionConfiguration =
  | {
      semanticExtractionOverride: SemanticExtractionOverride;
      userPreferenceExtractionOverride?: never;
      episodicExtractionOverride?: never;
    }
  | {
      semanticExtractionOverride?: never;
      userPreferenceExtractionOverride: UserPreferenceExtractionOverride;
      episodicExtractionOverride?: never;
    }
  | {
      semanticExtractionOverride?: never;
      userPreferenceExtractionOverride?: never;
      episodicExtractionOverride: EpisodicExtractionOverride;
    };
export type ExtractionConfiguration = {
  customExtractionConfiguration: CustomExtractionConfiguration;
};
export interface SemanticConsolidationOverride {
  appendToPrompt: string | redacted.Redacted<string>;
  modelId: string;
}
export interface SummaryConsolidationOverride {
  appendToPrompt: string | redacted.Redacted<string>;
  modelId: string;
}
export interface UserPreferenceConsolidationOverride {
  appendToPrompt: string | redacted.Redacted<string>;
  modelId: string;
}
export interface EpisodicConsolidationOverride {
  appendToPrompt: string | redacted.Redacted<string>;
  modelId: string;
}
export type CustomConsolidationConfiguration =
  | {
      semanticConsolidationOverride: SemanticConsolidationOverride;
      summaryConsolidationOverride?: never;
      userPreferenceConsolidationOverride?: never;
      episodicConsolidationOverride?: never;
    }
  | {
      semanticConsolidationOverride?: never;
      summaryConsolidationOverride: SummaryConsolidationOverride;
      userPreferenceConsolidationOverride?: never;
      episodicConsolidationOverride?: never;
    }
  | {
      semanticConsolidationOverride?: never;
      summaryConsolidationOverride?: never;
      userPreferenceConsolidationOverride: UserPreferenceConsolidationOverride;
      episodicConsolidationOverride?: never;
    }
  | {
      semanticConsolidationOverride?: never;
      summaryConsolidationOverride?: never;
      userPreferenceConsolidationOverride?: never;
      episodicConsolidationOverride: EpisodicConsolidationOverride;
    };
export type ConsolidationConfiguration = {
  customConsolidationConfiguration: CustomConsolidationConfiguration;
};
export interface EpisodicReflectionOverride {
  appendToPrompt: string | redacted.Redacted<string>;
  modelId: string;
  namespaces?: string[];
  namespaceTemplates?: string[];
  memoryRecordSchema?: MemoryRecordSchema;
}
export type CustomReflectionConfiguration = {
  episodicReflectionOverride: EpisodicReflectionOverride;
};
export interface EpisodicReflectionConfiguration {
  namespaces?: string[];
  namespaceTemplates?: string[];
  memoryRecordSchema?: MemoryRecordSchema;
}
export type ReflectionConfiguration =
  | {
      customReflectionConfiguration: CustomReflectionConfiguration;
      episodicReflectionConfiguration?: never;
    }
  | {
      customReflectionConfiguration?: never;
      episodicReflectionConfiguration: EpisodicReflectionConfiguration;
    };
export interface MessageBasedTrigger {
  messageCount?: number;
}
export interface TokenBasedTrigger {
  tokenCount?: number;
}
export interface TimeBasedTrigger {
  idleSessionTimeout?: number;
}
export type TriggerCondition =
  | {
      messageBasedTrigger: MessageBasedTrigger;
      tokenBasedTrigger?: never;
      timeBasedTrigger?: never;
    }
  | { messageBasedTrigger?: never; tokenBasedTrigger: TokenBasedTrigger; timeBasedTrigger?: never }
  | { messageBasedTrigger?: never; tokenBasedTrigger?: never; timeBasedTrigger: TimeBasedTrigger };
export type TriggerConditionsList = TriggerCondition[];
export interface InvocationConfiguration {
  topicArn: string;
  payloadDeliveryBucketName: string;
}
export interface SelfManagedConfiguration {
  triggerConditions: TriggerCondition[];
  invocationConfiguration: InvocationConfiguration;
  historicalContextWindowSize: number;
}
export interface StrategyConfiguration {
  type?: OverrideType;
  extraction?: ExtractionConfiguration;
  consolidation?: ConsolidationConfiguration;
  reflection?: ReflectionConfiguration;
  selfManagedConfiguration?: SelfManagedConfiguration;
}
export type MemoryStrategyType =
  | "SEMANTIC"
  | "SUMMARIZATION"
  | "USER_PREFERENCE"
  | "CUSTOM"
  | "EPISODIC"
  | (string & {});
export type MemoryStrategyStatus = "CREATING" | "ACTIVE" | "DELETING" | "FAILED" | (string & {});
export interface MemoryStrategy {
  strategyId: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  configuration?: StrategyConfiguration;
  type: MemoryStrategyType;
  namespaces: string[];
  namespaceTemplates: string[];
  createdAt?: Date;
  updatedAt?: Date;
  status?: MemoryStrategyStatus;
  memoryRecordSchema?: MemoryRecordSchema;
}
export type MemoryStrategyList = MemoryStrategy[];
export interface Memory {
  arn: string;
  id: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  encryptionKeyArn?: string;
  memoryExecutionRoleArn?: string;
  eventExpiryDuration: number;
  status: MemoryStatus;
  failureReason?: string;
  createdAt: Date;
  updatedAt: Date;
  strategies?: MemoryStrategy[];
  indexedKeys?: IndexedKey[];
  namespaceKeys?: NamespaceKeyEntry[];
  streamDeliveryResources?: StreamDeliveryResources;
  managedByResourceArn?: string;
}
export interface CreateMemoryOutput {
  memory?: Memory;
}
export type CredentialProviderVendorType =
  | "GoogleOauth2"
  | "GithubOauth2"
  | "SlackOauth2"
  | "SalesforceOauth2"
  | "MicrosoftOauth2"
  | "CustomOauth2"
  | "AtlassianOauth2"
  | "LinkedinOauth2"
  | "XOauth2"
  | "OktaOauth2"
  | "OneLoginOauth2"
  | "PingOneOauth2"
  | "FacebookOauth2"
  | "YandexOauth2"
  | "RedditOauth2"
  | "ZoomOauth2"
  | "TwitchOauth2"
  | "SpotifyOauth2"
  | "DropboxOauth2"
  | "NotionOauth2"
  | "HubspotOauth2"
  | "CyberArkOauth2"
  | "FusionAuthOauth2"
  | "Auth0Oauth2"
  | "CognitoOauth2"
  | (string & {});
export type DiscoveryUrlType = string;
export type IssuerUrlType = string;
export type AuthorizationEndpointType = string;
export type TokenEndpointType = string;
export type ResponseType = string;
export type ResponseListType = string[];
export type TokenAuthMethod = string;
export type TokenEndpointAuthMethodsType = string[];
export interface Oauth2AuthorizationServerMetadata {
  issuer: string;
  authorizationEndpoint: string;
  tokenEndpoint: string;
  responseTypes?: string[];
  tokenEndpointAuthMethods?: string[];
}
export type Oauth2Discovery =
  | { discoveryUrl: string; authorizationServerMetadata?: never }
  | { discoveryUrl?: never; authorizationServerMetadata: Oauth2AuthorizationServerMetadata };
export type DefaultClientIdType = string;
export type DefaultClientSecretType = string | redacted.Redacted<string>;
export type OnBehalfOfTokenExchangeGrantTypeType =
  | "TOKEN_EXCHANGE"
  | "JWT_AUTHORIZATION_GRANT"
  | (string & {});
export type ActorTokenContentType = "NONE" | "M2M" | "AWS_IAM_ID_TOKEN_JWT" | (string & {});
export type ScopeType = string;
export type ScopesListType = string[];
export interface TokenExchangeGrantTypeConfigType {
  actorTokenContent: ActorTokenContentType;
  actorTokenScopes?: string[];
}
export interface OnBehalfOfTokenExchangeConfigType {
  grantType: OnBehalfOfTokenExchangeGrantTypeType;
  tokenExchangeGrantTypeConfig?: TokenExchangeGrantTypeConfigType;
}
export type ClientAuthenticationMethodType =
  | "CLIENT_SECRET_BASIC"
  | "CLIENT_SECRET_POST"
  | "AWS_IAM_ID_TOKEN_JWT"
  | "PRIVATE_KEY_JWT"
  | (string & {});
export interface KmsKeySourceType {
  kmsKeyArn: string;
}
export type PrivateKeySource = { kmsKeySource: KmsKeySourceType };
export type SigningAlgorithm = "RS256" | "PS256" | "ES256" | (string & {});
export type AdditionalClaimName = string;
export type AdditionalClaimValue = string | redacted.Redacted<string>;
export type AdditionalClaims = { [key: string]: string | redacted.Redacted<string> | undefined };
export interface PrivateKeyJwtConfig {
  privateKeySource?: PrivateKeySource;
  signingAlgorithm?: SigningAlgorithm;
  additionalHeaderClaims?: { [key: string]: string | redacted.Redacted<string> | undefined };
  additionalPayloadClaims?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
export interface CustomOauth2ProviderConfigInput {
  oauthDiscovery: Oauth2Discovery;
  clientId?: string;
  clientSecret?: string | redacted.Redacted<string>;
  clientSecretConfig?: SecretReference;
  clientSecretSource?: SecretSourceType;
  onBehalfOfTokenExchangeConfig?: OnBehalfOfTokenExchangeConfigType;
  clientAuthenticationMethod?: ClientAuthenticationMethodType;
  privateKeyJwtConfig?: PrivateKeyJwtConfig;
  privateEndpoint?: PrivateEndpoint;
  privateEndpointOverrides?: PrivateEndpointOverride[];
}
export type ClientIdType = string;
export interface GoogleOauth2ProviderConfigInput {
  clientId: string;
  clientSecret?: string | redacted.Redacted<string>;
  clientSecretConfig?: SecretReference;
  clientSecretSource?: SecretSourceType;
}
export interface GithubOauth2ProviderConfigInput {
  clientId: string;
  clientSecret?: string | redacted.Redacted<string>;
  clientSecretConfig?: SecretReference;
  clientSecretSource?: SecretSourceType;
}
export interface SlackOauth2ProviderConfigInput {
  clientId: string;
  clientSecret?: string | redacted.Redacted<string>;
  clientSecretConfig?: SecretReference;
  clientSecretSource?: SecretSourceType;
}
export interface SalesforceOauth2ProviderConfigInput {
  clientId: string;
  clientSecret?: string | redacted.Redacted<string>;
  clientSecretConfig?: SecretReference;
  clientSecretSource?: SecretSourceType;
}
export type TenantIdType = string;
export interface MicrosoftOauth2ProviderConfigInput {
  clientId: string;
  clientSecret?: string | redacted.Redacted<string>;
  clientSecretConfig?: SecretReference;
  clientSecretSource?: SecretSourceType;
  tenantId?: string;
}
export interface AtlassianOauth2ProviderConfigInput {
  clientId: string;
  clientSecret?: string | redacted.Redacted<string>;
  clientSecretConfig?: SecretReference;
  clientSecretSource?: SecretSourceType;
}
export interface LinkedinOauth2ProviderConfigInput {
  clientId: string;
  clientSecret?: string | redacted.Redacted<string>;
  clientSecretConfig?: SecretReference;
  clientSecretSource?: SecretSourceType;
}
export interface IncludedOauth2ProviderConfigInput {
  clientId: string;
  clientSecret?: string | redacted.Redacted<string>;
  clientSecretConfig?: SecretReference;
  clientSecretSource?: SecretSourceType;
  issuer?: string;
  authorizationEndpoint?: string;
  tokenEndpoint?: string;
}
export type Oauth2ProviderConfigInput =
  | {
      customOauth2ProviderConfig: CustomOauth2ProviderConfigInput;
      googleOauth2ProviderConfig?: never;
      githubOauth2ProviderConfig?: never;
      slackOauth2ProviderConfig?: never;
      salesforceOauth2ProviderConfig?: never;
      microsoftOauth2ProviderConfig?: never;
      atlassianOauth2ProviderConfig?: never;
      linkedinOauth2ProviderConfig?: never;
      includedOauth2ProviderConfig?: never;
    }
  | {
      customOauth2ProviderConfig?: never;
      googleOauth2ProviderConfig: GoogleOauth2ProviderConfigInput;
      githubOauth2ProviderConfig?: never;
      slackOauth2ProviderConfig?: never;
      salesforceOauth2ProviderConfig?: never;
      microsoftOauth2ProviderConfig?: never;
      atlassianOauth2ProviderConfig?: never;
      linkedinOauth2ProviderConfig?: never;
      includedOauth2ProviderConfig?: never;
    }
  | {
      customOauth2ProviderConfig?: never;
      googleOauth2ProviderConfig?: never;
      githubOauth2ProviderConfig: GithubOauth2ProviderConfigInput;
      slackOauth2ProviderConfig?: never;
      salesforceOauth2ProviderConfig?: never;
      microsoftOauth2ProviderConfig?: never;
      atlassianOauth2ProviderConfig?: never;
      linkedinOauth2ProviderConfig?: never;
      includedOauth2ProviderConfig?: never;
    }
  | {
      customOauth2ProviderConfig?: never;
      googleOauth2ProviderConfig?: never;
      githubOauth2ProviderConfig?: never;
      slackOauth2ProviderConfig: SlackOauth2ProviderConfigInput;
      salesforceOauth2ProviderConfig?: never;
      microsoftOauth2ProviderConfig?: never;
      atlassianOauth2ProviderConfig?: never;
      linkedinOauth2ProviderConfig?: never;
      includedOauth2ProviderConfig?: never;
    }
  | {
      customOauth2ProviderConfig?: never;
      googleOauth2ProviderConfig?: never;
      githubOauth2ProviderConfig?: never;
      slackOauth2ProviderConfig?: never;
      salesforceOauth2ProviderConfig: SalesforceOauth2ProviderConfigInput;
      microsoftOauth2ProviderConfig?: never;
      atlassianOauth2ProviderConfig?: never;
      linkedinOauth2ProviderConfig?: never;
      includedOauth2ProviderConfig?: never;
    }
  | {
      customOauth2ProviderConfig?: never;
      googleOauth2ProviderConfig?: never;
      githubOauth2ProviderConfig?: never;
      slackOauth2ProviderConfig?: never;
      salesforceOauth2ProviderConfig?: never;
      microsoftOauth2ProviderConfig: MicrosoftOauth2ProviderConfigInput;
      atlassianOauth2ProviderConfig?: never;
      linkedinOauth2ProviderConfig?: never;
      includedOauth2ProviderConfig?: never;
    }
  | {
      customOauth2ProviderConfig?: never;
      googleOauth2ProviderConfig?: never;
      githubOauth2ProviderConfig?: never;
      slackOauth2ProviderConfig?: never;
      salesforceOauth2ProviderConfig?: never;
      microsoftOauth2ProviderConfig?: never;
      atlassianOauth2ProviderConfig: AtlassianOauth2ProviderConfigInput;
      linkedinOauth2ProviderConfig?: never;
      includedOauth2ProviderConfig?: never;
    }
  | {
      customOauth2ProviderConfig?: never;
      googleOauth2ProviderConfig?: never;
      githubOauth2ProviderConfig?: never;
      slackOauth2ProviderConfig?: never;
      salesforceOauth2ProviderConfig?: never;
      microsoftOauth2ProviderConfig?: never;
      atlassianOauth2ProviderConfig?: never;
      linkedinOauth2ProviderConfig: LinkedinOauth2ProviderConfigInput;
      includedOauth2ProviderConfig?: never;
    }
  | {
      customOauth2ProviderConfig?: never;
      googleOauth2ProviderConfig?: never;
      githubOauth2ProviderConfig?: never;
      slackOauth2ProviderConfig?: never;
      salesforceOauth2ProviderConfig?: never;
      microsoftOauth2ProviderConfig?: never;
      atlassianOauth2ProviderConfig?: never;
      linkedinOauth2ProviderConfig?: never;
      includedOauth2ProviderConfig: IncludedOauth2ProviderConfigInput;
    };
export interface CreateOauth2CredentialProviderRequest {
  name: string;
  credentialProviderVendor: CredentialProviderVendorType;
  oauth2ProviderConfigInput: Oauth2ProviderConfigInput;
  tags?: { [key: string]: string | undefined };
}
export type CredentialProviderArnType = string;
export interface CustomOauth2ProviderConfigOutput {
  oauthDiscovery: Oauth2Discovery;
  clientId?: string;
  onBehalfOfTokenExchangeConfig?: OnBehalfOfTokenExchangeConfigType;
  clientAuthenticationMethod?: ClientAuthenticationMethodType;
  privateEndpoint?: PrivateEndpoint;
  privateEndpointOverrides?: PrivateEndpointOverride[];
  privateKeyJwtConfig?: PrivateKeyJwtConfig;
}
export interface GoogleOauth2ProviderConfigOutput {
  oauthDiscovery: Oauth2Discovery;
  clientId?: string;
}
export interface GithubOauth2ProviderConfigOutput {
  oauthDiscovery: Oauth2Discovery;
  clientId?: string;
}
export interface SlackOauth2ProviderConfigOutput {
  oauthDiscovery: Oauth2Discovery;
  clientId?: string;
}
export interface SalesforceOauth2ProviderConfigOutput {
  oauthDiscovery: Oauth2Discovery;
  clientId?: string;
}
export interface MicrosoftOauth2ProviderConfigOutput {
  oauthDiscovery: Oauth2Discovery;
  clientId?: string;
}
export interface AtlassianOauth2ProviderConfigOutput {
  oauthDiscovery: Oauth2Discovery;
  clientId?: string;
}
export interface LinkedinOauth2ProviderConfigOutput {
  oauthDiscovery: Oauth2Discovery;
  clientId?: string;
}
export interface IncludedOauth2ProviderConfigOutput {
  oauthDiscovery: Oauth2Discovery;
  clientId?: string;
}
export type Oauth2ProviderConfigOutput =
  | {
      customOauth2ProviderConfig: CustomOauth2ProviderConfigOutput;
      googleOauth2ProviderConfig?: never;
      githubOauth2ProviderConfig?: never;
      slackOauth2ProviderConfig?: never;
      salesforceOauth2ProviderConfig?: never;
      microsoftOauth2ProviderConfig?: never;
      atlassianOauth2ProviderConfig?: never;
      linkedinOauth2ProviderConfig?: never;
      includedOauth2ProviderConfig?: never;
    }
  | {
      customOauth2ProviderConfig?: never;
      googleOauth2ProviderConfig: GoogleOauth2ProviderConfigOutput;
      githubOauth2ProviderConfig?: never;
      slackOauth2ProviderConfig?: never;
      salesforceOauth2ProviderConfig?: never;
      microsoftOauth2ProviderConfig?: never;
      atlassianOauth2ProviderConfig?: never;
      linkedinOauth2ProviderConfig?: never;
      includedOauth2ProviderConfig?: never;
    }
  | {
      customOauth2ProviderConfig?: never;
      googleOauth2ProviderConfig?: never;
      githubOauth2ProviderConfig: GithubOauth2ProviderConfigOutput;
      slackOauth2ProviderConfig?: never;
      salesforceOauth2ProviderConfig?: never;
      microsoftOauth2ProviderConfig?: never;
      atlassianOauth2ProviderConfig?: never;
      linkedinOauth2ProviderConfig?: never;
      includedOauth2ProviderConfig?: never;
    }
  | {
      customOauth2ProviderConfig?: never;
      googleOauth2ProviderConfig?: never;
      githubOauth2ProviderConfig?: never;
      slackOauth2ProviderConfig: SlackOauth2ProviderConfigOutput;
      salesforceOauth2ProviderConfig?: never;
      microsoftOauth2ProviderConfig?: never;
      atlassianOauth2ProviderConfig?: never;
      linkedinOauth2ProviderConfig?: never;
      includedOauth2ProviderConfig?: never;
    }
  | {
      customOauth2ProviderConfig?: never;
      googleOauth2ProviderConfig?: never;
      githubOauth2ProviderConfig?: never;
      slackOauth2ProviderConfig?: never;
      salesforceOauth2ProviderConfig: SalesforceOauth2ProviderConfigOutput;
      microsoftOauth2ProviderConfig?: never;
      atlassianOauth2ProviderConfig?: never;
      linkedinOauth2ProviderConfig?: never;
      includedOauth2ProviderConfig?: never;
    }
  | {
      customOauth2ProviderConfig?: never;
      googleOauth2ProviderConfig?: never;
      githubOauth2ProviderConfig?: never;
      slackOauth2ProviderConfig?: never;
      salesforceOauth2ProviderConfig?: never;
      microsoftOauth2ProviderConfig: MicrosoftOauth2ProviderConfigOutput;
      atlassianOauth2ProviderConfig?: never;
      linkedinOauth2ProviderConfig?: never;
      includedOauth2ProviderConfig?: never;
    }
  | {
      customOauth2ProviderConfig?: never;
      googleOauth2ProviderConfig?: never;
      githubOauth2ProviderConfig?: never;
      slackOauth2ProviderConfig?: never;
      salesforceOauth2ProviderConfig?: never;
      microsoftOauth2ProviderConfig?: never;
      atlassianOauth2ProviderConfig: AtlassianOauth2ProviderConfigOutput;
      linkedinOauth2ProviderConfig?: never;
      includedOauth2ProviderConfig?: never;
    }
  | {
      customOauth2ProviderConfig?: never;
      googleOauth2ProviderConfig?: never;
      githubOauth2ProviderConfig?: never;
      slackOauth2ProviderConfig?: never;
      salesforceOauth2ProviderConfig?: never;
      microsoftOauth2ProviderConfig?: never;
      atlassianOauth2ProviderConfig?: never;
      linkedinOauth2ProviderConfig: LinkedinOauth2ProviderConfigOutput;
      includedOauth2ProviderConfig?: never;
    }
  | {
      customOauth2ProviderConfig?: never;
      googleOauth2ProviderConfig?: never;
      githubOauth2ProviderConfig?: never;
      slackOauth2ProviderConfig?: never;
      salesforceOauth2ProviderConfig?: never;
      microsoftOauth2ProviderConfig?: never;
      atlassianOauth2ProviderConfig?: never;
      linkedinOauth2ProviderConfig?: never;
      includedOauth2ProviderConfig: IncludedOauth2ProviderConfigOutput;
    };
export type Status =
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "READY"
  | "DELETING"
  | "DELETE_FAILED"
  | (string & {});
export interface CreateOauth2CredentialProviderResponse {
  clientSecretArn: Secret;
  clientSecretJsonKey?: string;
  clientSecretSource?: SecretSourceType;
  name: string;
  credentialProviderArn: string;
  callbackUrl?: string;
  oauth2ProviderConfigOutput?: Oauth2ProviderConfigOutput;
  status?: Status;
}
export type EvaluationConfigName = string;
export type EvaluationConfigDescription = string | redacted.Redacted<string>;
export type SamplingPercentage = number;
export interface SamplingConfig {
  samplingPercentage: number;
}
export type FilterOperator =
  | "Equals"
  | "NotEquals"
  | "GreaterThan"
  | "LessThan"
  | "GreaterThanOrEqual"
  | "LessThanOrEqual"
  | "Contains"
  | "NotContains"
  | (string & {});
export type FilterValue =
  | { stringValue: string; doubleValue?: never; booleanValue?: never }
  | { stringValue?: never; doubleValue: number; booleanValue?: never }
  | { stringValue?: never; doubleValue?: never; booleanValue: boolean };
export interface Filter {
  key: string;
  operator: FilterOperator;
  value: FilterValue;
}
export type FilterList = Filter[];
export interface SessionConfig {
  sessionTimeoutMinutes: number;
}
export interface Rule {
  samplingConfig: SamplingConfig;
  filters?: Filter[];
  sessionConfig?: SessionConfig;
}
export type LogGroupName = string;
export type LogGroupNamesList = string[];
export type LogGroupNamePrefix = string;
export type LogGroupNamePrefixList = string[];
export type ServiceName = string;
export type ServiceNamesList = string[];
export interface CloudWatchLogsInputConfig {
  logGroupNames?: string[];
  logGroupNamePrefixes?: string[];
  serviceNames: string[];
}
export type DataSourceConfig = { cloudWatchLogs: CloudWatchLogsInputConfig };
export type EvaluatorReference = { evaluatorId: string };
export type EvaluatorList = EvaluatorReference[];
export type InsightId = string;
export interface Insight {
  insightId: string;
}
export type InsightList = Insight[];
export type ClusteringFrequency = "DAILY" | "WEEKLY" | "MONTHLY" | (string & {});
export type ClusteringFrequencyList = ClusteringFrequency[];
export interface ClusteringConfig {
  frequencies: ClusteringFrequency[];
}
export type OptionalLogGroupName = string;
export type MetricsNamespace = string;
export type ResultDestination = "DEDICATED_LOG_GROUP" | "SOURCE_LOG_GROUP" | (string & {});
export interface CloudWatchOutputConfig {
  logGroupName?: string;
  metricsNamespace?: string;
  resultDestination?: ResultDestination;
}
export interface OutputConfig {
  cloudWatchConfig: CloudWatchOutputConfig;
}
export interface CreateOnlineEvaluationConfigRequest {
  clientToken?: string;
  onlineEvaluationConfigName: string;
  description?: string | redacted.Redacted<string>;
  rule: Rule;
  dataSourceConfig: DataSourceConfig;
  evaluators?: EvaluatorReference[];
  insights?: Insight[];
  clusteringConfig?: ClusteringConfig;
  outputConfig?: OutputConfig;
  evaluationExecutionRoleArn: string;
  enableOnCreate: boolean;
  tags?: { [key: string]: string | undefined };
}
export type OnlineEvaluationConfigArn = string;
export type OnlineEvaluationConfigId = string;
export type OnlineEvaluationConfigStatus =
  | "ACTIVE"
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "DELETING"
  | "ERROR"
  | (string & {});
export type OnlineEvaluationExecutionStatus = "ENABLED" | "DISABLED" | (string & {});
export interface CreateOnlineEvaluationConfigResponse {
  onlineEvaluationConfigArn: string;
  onlineEvaluationConfigId: string;
  createdAt: Date;
  outputConfig?: OutputConfig;
  status: OnlineEvaluationConfigStatus;
  executionStatus: OnlineEvaluationExecutionStatus;
  failureReason?: string;
}
export type PaymentManagerId = string;
export type PaymentConnectorName = string;
export type PaymentsDescription = string;
export type PaymentConnectorType = "CoinbaseCDP" | "StripePrivy" | (string & {});
export type PaymentCredentialProviderArn = string;
export interface PaymentCredentialProviderConfiguration {
  credentialProviderArn: string;
}
export type CredentialsProviderConfiguration =
  | { coinbaseCDP: PaymentCredentialProviderConfiguration; stripePrivy?: never }
  | { coinbaseCDP?: never; stripePrivy: PaymentCredentialProviderConfiguration };
export type CredentialsProviderConfigurations = CredentialsProviderConfiguration[];
export type PaymentConnectorProvisionMode = "MANUAL" | "QUICK_CREATE" | (string & {});
export interface CreatePaymentConnectorRequest {
  paymentManagerId: string;
  name: string;
  description?: string;
  type: PaymentConnectorType;
  credentialProviderConfigurations: CredentialsProviderConfiguration[];
  provisionMode?: PaymentConnectorProvisionMode;
  clientToken?: string;
}
export type PaymentConnectorId = string;
export type PaymentConnectorStatus =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "READY"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "DELETE_FAILED"
  | "AWS_MARKETPLACE_SUBSCRIPTION_REQUIRED"
  | "PENDING_AUTHENTICATION"
  | "PROVISIONING"
  | "AUTHENTICATION_EXPIRED"
  | "AUTHENTICATION_FAILED"
  | (string & {});
export type PaymentConnectorAuthorizationUrl = string;
export interface CreatePaymentConnectorResponse {
  paymentConnectorId: string;
  paymentManagerId: string;
  name: string;
  type: PaymentConnectorType;
  credentialProviderConfigurations: CredentialsProviderConfiguration[];
  createdAt: Date;
  status: PaymentConnectorStatus;
  authorizationUrl?: string;
}
export type PaymentCredentialProviderVendorType = "CoinbaseCDP" | "StripePrivy" | (string & {});
export type CoinbaseCdpApiKeyIdType = string;
export type DefaultCoinbaseCdpApiKeySecretType = string | redacted.Redacted<string>;
export type DefaultCoinbaseCdpWalletSecretType = string | redacted.Redacted<string>;
export interface CoinbaseCdpConfigurationInput {
  apiKeyId: string;
  apiKeySecret?: string | redacted.Redacted<string>;
  apiKeySecretSource?: SecretSourceType;
  apiKeySecretConfig?: SecretReference;
  walletSecret?: string | redacted.Redacted<string>;
  walletSecretSource?: SecretSourceType;
  walletSecretConfig?: SecretReference;
}
export type StripePrivyAppIdType = string;
export type DefaultStripePrivyAppSecretType = string | redacted.Redacted<string>;
export type DefaultStripePrivyAuthorizationPrivateKeyType = string | redacted.Redacted<string>;
export type StripePrivyAuthorizationIdType = string;
export interface StripePrivyConfigurationInput {
  appId: string;
  appSecret?: string | redacted.Redacted<string>;
  appSecretSource?: SecretSourceType;
  appSecretConfig?: SecretReference;
  authorizationPrivateKey?: string | redacted.Redacted<string>;
  authorizationPrivateKeySource?: SecretSourceType;
  authorizationPrivateKeyConfig?: SecretReference;
  authorizationId: string;
}
export type PaymentProviderConfigurationInput =
  | { coinbaseCdpConfiguration: CoinbaseCdpConfigurationInput; stripePrivyConfiguration?: never }
  | { coinbaseCdpConfiguration?: never; stripePrivyConfiguration: StripePrivyConfigurationInput };
export interface CreatePaymentCredentialProviderRequest {
  name: string;
  credentialProviderVendor: PaymentCredentialProviderVendorType;
  providerConfigurationInput: PaymentProviderConfigurationInput;
  tags?: { [key: string]: string | undefined };
}
export type PaymentCredentialProviderArnType = string;
export interface CoinbaseCdpConfigurationOutput {
  apiKeyId: string;
  apiKeySecretArn: Secret;
  apiKeySecretJsonKey?: string;
  apiKeySecretSource?: SecretSourceType;
  walletSecretArn: Secret;
  walletSecretJsonKey?: string;
  walletSecretSource?: SecretSourceType;
}
export interface StripePrivyConfigurationOutput {
  appId: string;
  appSecretArn: Secret;
  appSecretJsonKey?: string;
  appSecretSource?: SecretSourceType;
  authorizationPrivateKeyArn: Secret;
  authorizationPrivateKeyJsonKey?: string;
  authorizationPrivateKeySource?: SecretSourceType;
  authorizationId: string;
}
export type PaymentProviderConfigurationOutput =
  | { coinbaseCdpConfiguration: CoinbaseCdpConfigurationOutput; stripePrivyConfiguration?: never }
  | { coinbaseCdpConfiguration?: never; stripePrivyConfiguration: StripePrivyConfigurationOutput };
export interface CreatePaymentCredentialProviderResponse {
  name: string;
  credentialProviderVendor: PaymentCredentialProviderVendorType;
  credentialProviderArn: string;
  providerConfigurationOutput: PaymentProviderConfigurationOutput;
}
export type PaymentManagerName = string;
export type PaymentsAuthorizerType = "CUSTOM_JWT" | "AWS_IAM" | (string & {});
export interface CreatePaymentManagerRequest {
  name: string;
  description?: string;
  authorizerType: PaymentsAuthorizerType;
  authorizerConfiguration?: AuthorizerConfiguration;
  roleArn: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
}
export type PaymentManagerArn = string;
export type PaymentManagerStatus =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "READY"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "DELETE_FAILED"
  | (string & {});
export interface CreatePaymentManagerResponse {
  paymentManagerArn: string;
  paymentManagerId: string;
  name: string;
  authorizerType: PaymentsAuthorizerType;
  authorizerConfiguration?: AuthorizerConfiguration;
  roleArn: string;
  workloadIdentityDetails?: WorkloadIdentityDetails;
  createdAt: Date;
  status: PaymentManagerStatus;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
}
export type PolicyName = string;
export type Statement = string;
export interface CedarPolicy {
  statement: string;
}
export type ResourceId = string;
export interface PolicyGenerationDetails {
  policyGenerationId: string;
  policyGenerationAssetId: string;
}
export interface PolicyStatement {
  statement: string;
}
export type PolicyDefinition =
  | { cedar: CedarPolicy; policyGeneration?: never; policy?: never }
  | { cedar?: never; policyGeneration: PolicyGenerationDetails; policy?: never }
  | { cedar?: never; policyGeneration?: never; policy: PolicyStatement };
export type PolicyValidationMode = "FAIL_ON_ANY_FINDINGS" | "IGNORE_ALL_FINDINGS" | (string & {});
export type EnforcementMode = "ACTIVE" | "LOG_ONLY" | (string & {});
export interface CreatePolicyRequest {
  name: string;
  definition: PolicyDefinition;
  description?: string | redacted.Redacted<string>;
  validationMode?: PolicyValidationMode;
  enforcementMode?: EnforcementMode;
  policyEngineId: string;
  clientToken?: string;
}
export type PolicyArn = string;
export type PolicyStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "DELETE_FAILED"
  | (string & {});
export type PolicyStatusReasons = string[];
export interface CreatePolicyResponse {
  policyId: string;
  name: string;
  policyEngineId: string;
  createdAt: Date;
  updatedAt: Date;
  policyArn: string;
  status: PolicyStatus;
  enforcementMode?: EnforcementMode;
  definition: PolicyDefinition;
  description?: string | redacted.Redacted<string>;
  statusReasons: string[];
}
export type PolicyEngineName = string;
export interface CreatePolicyEngineRequest {
  name: string;
  description?: string | redacted.Redacted<string>;
  clientToken?: string;
  encryptionKeyArn?: string;
  tags?: { [key: string]: string | undefined };
}
export type PolicyEngineArn = string;
export type PolicyEngineStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "DELETE_FAILED"
  | (string & {});
export interface CreatePolicyEngineResponse {
  policyEngineId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  policyEngineArn: string;
  status: PolicyEngineStatus;
  encryptionKeyArn?: string;
  description?: string | redacted.Redacted<string>;
  statusReasons: string[];
}
export type RegistryName = string;
export type RegistryAuthorizerType = "CUSTOM_JWT" | "AWS_IAM" | (string & {});
export interface ApprovalConfiguration {
  autoApproval?: boolean;
}
export interface CreateRegistryRequest {
  name: string;
  description?: string | redacted.Redacted<string>;
  authorizerType?: RegistryAuthorizerType;
  authorizerConfiguration?: AuthorizerConfiguration;
  clientToken?: string;
  approvalConfiguration?: ApprovalConfiguration;
}
export type RegistryArn = string;
export interface CreateRegistryResponse {
  registryArn: string;
}
export type RegistryIdentifier = string;
export type RegistryRecordName = string;
export type DescriptorType = "MCP" | "A2A" | "CUSTOM" | "AGENT_SKILLS" | (string & {});
export type SchemaVersion = string;
export type InlineContent = string;
export interface ServerDefinition {
  schemaVersion?: string;
  inlineContent?: string;
}
export interface ToolsDefinition {
  protocolVersion?: string;
  inlineContent?: string;
}
export interface McpDescriptor {
  server?: ServerDefinition;
  tools?: ToolsDefinition;
}
export interface AgentCardDefinition {
  schemaVersion?: string;
  inlineContent?: string;
}
export interface A2aDescriptor {
  agentCard?: AgentCardDefinition;
}
export interface CustomDescriptor {
  inlineContent?: string;
}
export interface SkillMdDefinition {
  inlineContent?: string;
}
export interface SkillDefinition {
  schemaVersion?: string;
  inlineContent?: string;
}
export interface AgentSkillsDescriptor {
  skillMd?: SkillMdDefinition;
  skillDefinition?: SkillDefinition;
}
export interface Descriptors {
  mcp?: McpDescriptor;
  a2a?: A2aDescriptor;
  custom?: CustomDescriptor;
  agentSkills?: AgentSkillsDescriptor;
}
export type RegistryRecordVersion = string;
export type SynchronizationType = "URL" | (string & {});
export type McpServerUrl = string;
export type RegistryRecordCredentialProviderType = "OAUTH" | "IAM" | (string & {});
export type CredentialProviderArn = string;
export type RegistryRecordOAuthGrantType = "CLIENT_CREDENTIALS" | (string & {});
export type ScopeList = string[];
export type CustomParameterMap = { [key: string]: string | undefined };
export interface RegistryRecordOAuthCredentialProvider {
  providerArn: string;
  grantType?: RegistryRecordOAuthGrantType;
  scopes?: string[];
  customParameters?: { [key: string]: string | undefined };
}
export type IamRoleArn = string;
export type IamSigningServiceName = string;
export type IamSigningRegion = string;
export interface RegistryRecordIamCredentialProvider {
  roleArn?: string;
  service?: string;
  region?: string;
}
export type RegistryRecordCredentialProviderUnion =
  | {
      oauthCredentialProvider: RegistryRecordOAuthCredentialProvider;
      iamCredentialProvider?: never;
    }
  | { oauthCredentialProvider?: never; iamCredentialProvider: RegistryRecordIamCredentialProvider };
export interface RegistryRecordCredentialProviderConfiguration {
  credentialProviderType: RegistryRecordCredentialProviderType;
  credentialProvider: RegistryRecordCredentialProviderUnion;
}
export type RegistryRecordCredentialProviderConfigurationList =
  RegistryRecordCredentialProviderConfiguration[];
export interface FromUrlSynchronizationConfiguration {
  url: string;
  credentialProviderConfigurations?: RegistryRecordCredentialProviderConfiguration[];
}
export interface SynchronizationConfiguration {
  fromUrl?: FromUrlSynchronizationConfiguration;
}
export interface CreateRegistryRecordRequest {
  registryId: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  descriptorType: DescriptorType;
  descriptors?: Descriptors;
  recordVersion?: string;
  synchronizationType?: SynchronizationType;
  synchronizationConfiguration?: SynchronizationConfiguration;
  clientToken?: string;
}
export type RegistryRecordArn = string;
export type RegistryRecordStatus =
  | "DRAFT"
  | "PENDING_APPROVAL"
  | "APPROVED"
  | "REJECTED"
  | "DEPRECATED"
  | "CREATING"
  | "UPDATING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | (string & {});
export interface CreateRegistryRecordResponse {
  recordArn: string;
  status: RegistryRecordStatus;
}
export type ResourceOauth2ReturnUrlType = string;
export type ResourceOauth2ReturnUrlListType = string[];
export interface CreateWorkloadIdentityRequest {
  name: string;
  allowedResourceOauth2ReturnUrls?: string[];
  tags?: { [key: string]: string | undefined };
}
export type WorkloadIdentityArnType = string;
export interface CreateWorkloadIdentityResponse {
  name: string;
  workloadIdentityArn: string;
  allowedResourceOauth2ReturnUrls?: string[];
}
export interface DeleteAgentRuntimeRequest {
  agentRuntimeId: string;
  agentRuntimeVersion?: string;
  clientToken?: string;
}
export interface DeleteAgentRuntimeResponse {
  status: AgentRuntimeStatus;
  agentRuntimeId?: string;
  agentRuntimeVersion?: string;
}
export interface DeleteAgentRuntimeEndpointRequest {
  agentRuntimeId: string;
  endpointName: string | redacted.Redacted<string>;
  clientToken?: string;
}
export interface DeleteAgentRuntimeEndpointResponse {
  status: AgentRuntimeEndpointStatus;
  agentRuntimeId?: string;
  endpointName?: string | redacted.Redacted<string>;
}
export interface DeleteApiKeyCredentialProviderRequest {
  name: string;
}
export interface DeleteApiKeyCredentialProviderResponse {}
export interface DeleteBrowserRequest {
  browserId: string;
  clientToken?: string;
}
export interface DeleteBrowserResponse {
  browserId: string;
  status: BrowserStatus;
  lastUpdatedAt: Date;
}
export interface DeleteBrowserProfileRequest {
  profileId: string;
  clientToken?: string;
}
export interface DeleteBrowserProfileResponse {
  profileId: string;
  profileArn: string;
  status: BrowserProfileStatus;
  lastUpdatedAt: Date;
  lastSavedAt?: Date;
}
export interface DeleteCapacityProviderInput {
  capacityProviderId: string;
  clientToken?: string;
}
export interface DeleteCapacityProviderOutput {
  capacityProviderId: string;
  status: CapacityProviderStatus;
}
export interface DeleteCodeInterpreterRequest {
  codeInterpreterId: string;
  clientToken?: string;
}
export interface DeleteCodeInterpreterResponse {
  codeInterpreterId: string;
  status: CodeInterpreterStatus;
  lastUpdatedAt: Date;
}
export interface DeleteConfigurationBundleRequest {
  bundleId: string;
}
export type ConfigurationBundleStatus =
  | "ACTIVE"
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "DELETING"
  | "DELETE_FAILED"
  | (string & {});
export interface DeleteConfigurationBundleResponse {
  bundleArn: string;
  bundleId: string;
  status: ConfigurationBundleStatus;
}
export type ConsentPortalIdentifier = string;
export interface DeleteConsentPortalRequest {
  consentPortalIdentifier: string;
}
export interface DeleteConsentPortalResponse {}
export interface DeleteDatasetRequest {
  datasetId: string;
  datasetVersion?: string;
}
export interface DeleteDatasetResponse {
  datasetArn: string;
  datasetId: string;
  status: DatasetStatus;
  datasetVersion: string;
  updatedAt: Date;
}
export interface DeleteDatasetExamplesRequest {
  datasetId: string;
  clientToken?: string;
  exampleIds: string[];
}
export interface DeleteDatasetExamplesResponse {
  datasetArn: string;
  datasetId: string;
  status: DatasetStatus;
  deletedCount: number;
  updatedAt: Date;
}
export interface DeleteEvaluatorRequest {
  evaluatorId: string;
}
export type EvaluatorArn = string;
export interface DeleteEvaluatorResponse {
  evaluatorArn: string;
  evaluatorId: string;
  status: EvaluatorStatus;
}
export interface DeleteGatewayRequest {
  gatewayIdentifier: string;
}
export interface DeleteGatewayResponse {
  gatewayId: string;
  status: GatewayStatus;
  statusReasons?: string[];
}
export interface DeleteGatewayRateLimitRequest {
  gatewayIdentifier: string;
  rateLimitId: string;
}
export interface DeleteGatewayRateLimitResponse {
  rateLimitId: string;
  status: GatewayRateLimitStatus;
}
export interface DeleteGatewayRuleRequest {
  gatewayIdentifier: string;
  ruleId: string;
}
export interface DeleteGatewayRuleResponse {
  ruleId: string;
  status: GatewayRuleStatus;
}
export interface DeleteGatewayTargetRequest {
  gatewayIdentifier: string;
  targetId: string;
}
export interface DeleteGatewayTargetResponse {
  gatewayArn: string;
  targetId: string;
  status: TargetStatus;
  statusReasons?: string[];
}
export interface DeleteHarnessRequest {
  harnessId: string;
  clientToken?: string;
  deleteManagedMemory?: boolean;
}
export interface DeleteHarnessResponse {
  harness?: Harness;
}
export interface DeleteHarnessEndpointRequest {
  harnessId: string;
  endpointName: string;
  clientToken?: string;
}
export interface DeleteHarnessEndpointResponse {
  endpoint: HarnessEndpoint;
}
export interface DeleteMemoryInput {
  clientToken?: string;
  memoryId: string;
}
export interface DeleteMemoryOutput {
  memoryId: string;
  status?: MemoryStatus;
}
export interface DeleteOauth2CredentialProviderRequest {
  name: string;
}
export interface DeleteOauth2CredentialProviderResponse {}
export interface DeleteOnlineEvaluationConfigRequest {
  onlineEvaluationConfigId: string;
}
export interface DeleteOnlineEvaluationConfigResponse {
  onlineEvaluationConfigArn: string;
  onlineEvaluationConfigId: string;
  status: OnlineEvaluationConfigStatus;
}
export interface DeletePaymentConnectorRequest {
  paymentManagerId: string;
  paymentConnectorId: string;
  clientToken?: string;
}
export interface DeletePaymentConnectorResponse {
  status: PaymentConnectorStatus;
  paymentConnectorId?: string;
}
export interface DeletePaymentCredentialProviderRequest {
  name: string;
}
export interface DeletePaymentCredentialProviderResponse {}
export interface DeletePaymentManagerRequest {
  paymentManagerId: string;
  clientToken?: string;
}
export interface DeletePaymentManagerResponse {
  status: PaymentManagerStatus;
  paymentManagerId?: string;
}
export interface DeletePolicyRequest {
  policyEngineId: string;
  policyId: string;
}
export interface DeletePolicyResponse {
  policyId: string;
  name: string;
  policyEngineId: string;
  createdAt: Date;
  updatedAt: Date;
  policyArn: string;
  status: PolicyStatus;
  enforcementMode?: EnforcementMode;
  definition: PolicyDefinition;
  description?: string | redacted.Redacted<string>;
  statusReasons: string[];
}
export interface DeletePolicyEngineRequest {
  policyEngineId: string;
}
export interface DeletePolicyEngineResponse {
  policyEngineId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  policyEngineArn: string;
  status: PolicyEngineStatus;
  encryptionKeyArn?: string;
  description?: string | redacted.Redacted<string>;
  statusReasons: string[];
}
export interface DeleteRegistryRequest {
  registryId: string;
}
export type RegistryStatus =
  | "CREATING"
  | "READY"
  | "UPDATING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "DELETING"
  | "DELETE_FAILED"
  | (string & {});
export interface DeleteRegistryResponse {
  status: RegistryStatus;
}
export type RecordIdentifier = string;
export interface DeleteRegistryRecordRequest {
  registryId: string;
  recordId: string;
}
export interface DeleteRegistryRecordResponse {}
export interface DeleteResourcePolicyRequest {
  resourceArn: string;
}
export interface DeleteResourcePolicyResponse {}
export interface DeleteWorkloadIdentityRequest {
  name: string;
}
export interface DeleteWorkloadIdentityResponse {}
export interface GetAgentRuntimeRequest {
  agentRuntimeId: string;
  agentRuntimeVersion?: string;
}
export interface RuntimeMetadataConfiguration {
  requireMMDSV2: boolean;
}
export interface GetAgentRuntimeResponse {
  agentRuntimeArn: string;
  agentRuntimeName: string;
  agentRuntimeId: string;
  agentRuntimeVersion: string;
  createdAt: Date;
  lastUpdatedAt: Date;
  roleArn: string;
  networkConfiguration?: NetworkConfiguration;
  status: AgentRuntimeStatus;
  lifecycleConfiguration: LifecycleConfiguration;
  failureReason?: string;
  description?: string | redacted.Redacted<string>;
  workloadIdentityDetails?: WorkloadIdentityDetails;
  agentRuntimeArtifact?: AgentRuntimeArtifact;
  protocolConfiguration?: ProtocolConfiguration;
  environmentVariables?: { [key: string]: string | undefined };
  authorizerConfiguration?: AuthorizerConfiguration;
  requestHeaderConfiguration?: RequestHeaderConfiguration;
  metadataConfiguration?: RuntimeMetadataConfiguration;
  filesystemConfigurations?: FilesystemConfiguration[];
  capacityProviderConfiguration?: CapacityProviderConfiguration & {
    capacityProviderArn: CapacityProviderArn;
  };
  platformVersion?: string;
}
export interface GetAgentRuntimeEndpointRequest {
  agentRuntimeId: string;
  endpointName: string | redacted.Redacted<string>;
}
export type AgentRuntimeEndpointId = string;
export interface GetAgentRuntimeEndpointResponse {
  liveVersion?: string;
  targetVersion?: string;
  agentRuntimeEndpointArn: string;
  agentRuntimeArn: string;
  description?: string;
  status: AgentRuntimeEndpointStatus;
  createdAt: Date;
  lastUpdatedAt: Date;
  failureReason?: string;
  name: string | redacted.Redacted<string>;
  id: string;
}
export interface GetApiKeyCredentialProviderRequest {
  name: string;
}
export interface GetApiKeyCredentialProviderResponse {
  apiKeySecretArn: Secret;
  apiKeySecretJsonKey?: string;
  apiKeySecretSource?: SecretSourceType;
  name: string;
  credentialProviderArn: string;
  createdTime: Date;
  lastUpdatedTime: Date;
}
export interface GetBrowserRequest {
  browserId: string;
}
export interface BrowserSigningConfigOutput {
  enabled: boolean;
}
export interface GetBrowserResponse {
  browserId: string;
  browserArn: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  executionRoleArn?: string;
  networkConfiguration: BrowserNetworkConfiguration;
  recording?: RecordingConfig;
  browserSigning?: BrowserSigningConfigOutput;
  enterprisePolicies?: BrowserEnterprisePolicy[];
  certificates?: Certificate[];
  filesystemConfigurations?: ToolsFileSystemConfiguration[];
  status: BrowserStatus;
  failureReason?: string;
  createdAt: Date;
  lastUpdatedAt: Date;
}
export interface GetBrowserProfileRequest {
  profileId: string;
}
export type BrowserSessionId = string;
export interface GetBrowserProfileResponse {
  profileId: string;
  profileArn: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  status: BrowserProfileStatus;
  createdAt: Date;
  lastUpdatedAt: Date;
  lastSavedAt?: Date;
  lastSavedBrowserSessionId?: string;
  lastSavedBrowserId?: string;
}
export interface GetCapacityProviderInput {
  capacityProviderId: string;
}
export type CapacityProviderStatusCode =
  | "VALIDATION_ERROR"
  | "QUOTA_EXCEEDED"
  | "THROTTLED"
  | "INTERNAL_SERVER_EXCEPTION"
  | (string & {});
export interface GetCapacityProviderOutput {
  capacityProviderId: string;
  capacityProviderArn: string;
  name: string;
  status: CapacityProviderStatus;
  description?: string | redacted.Redacted<string>;
  statusCode?: CapacityProviderStatusCode;
  statusReason?: string;
  permissionsConfiguration: PermissionsConfiguration;
  computeConfiguration: ComputeConfiguration;
  createdAt: Date;
  lastUpdatedAt: Date;
}
export interface GetCodeInterpreterRequest {
  codeInterpreterId: string;
}
export interface GetCodeInterpreterResponse {
  codeInterpreterId: string;
  codeInterpreterArn: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  executionRoleArn?: string;
  networkConfiguration: CodeInterpreterNetworkConfiguration;
  status: CodeInterpreterStatus;
  certificates?: Certificate[];
  filesystemConfigurations?: ToolsFileSystemConfiguration[];
  failureReason?: string;
  createdAt: Date;
  lastUpdatedAt: Date;
}
export interface GetConfigurationBundleRequest {
  bundleId: string;
  branchName?: string;
}
export type ConfigurationBundleVersionList = string[];
export interface VersionLineageMetadata {
  parentVersionIds?: string[];
  branchName?: string;
  createdBy?: VersionCreatedBySource;
  commitMessage?: string;
}
export interface GetConfigurationBundleResponse {
  bundleArn: string;
  bundleId: string;
  bundleName: string;
  description?: string | redacted.Redacted<string>;
  versionId: string;
  components: { [key: string]: ComponentConfiguration | undefined };
  lineageMetadata?: VersionLineageMetadata;
  createdAt: Date;
  updatedAt: Date;
  kmsKeyArn?: string;
}
export interface GetConfigurationBundleVersionRequest {
  bundleId: string;
  versionId: string;
}
export interface GetConfigurationBundleVersionResponse {
  bundleArn: string;
  bundleId: string;
  bundleName: string;
  description?: string | redacted.Redacted<string>;
  versionId: string;
  components: { [key: string]: ComponentConfiguration | undefined };
  lineageMetadata?: VersionLineageMetadata;
  createdAt: Date;
  versionCreatedAt: Date;
  kmsKeyArn?: string;
}
export interface GetConsentPortalRequest {
  consentPortalIdentifier: string;
}
export interface GetConsentPortalResponse {
  sources: ConsentPortalSource[];
  consentPortalArn: string;
  consentPortalId: string;
  createdAt: Date;
  description?: string;
  executionRoleArn: string;
  idpConfig: ConsentPortalIdpConfig;
  name: string;
  portalUrl?: string;
  status: ConsentPortalStatus;
  statusReason?: string;
  updatedAt: Date;
}
export interface GetDatasetRequest {
  datasetId: string;
  datasetVersion?: string;
}
export type DraftStatus = "MODIFIED" | "UNMODIFIED" | (string & {});
export type DownloadUrl = string | redacted.Redacted<string>;
export interface GetDatasetResponse {
  datasetArn: string;
  datasetId: string;
  datasetVersion: string;
  datasetName: string;
  description?: string;
  status: DatasetStatus;
  draftStatus?: DraftStatus;
  failureReason?: string;
  schemaType: DatasetSchemaType;
  kmsKeyArn?: string;
  exampleCount: number;
  downloadUrl?: string | redacted.Redacted<string>;
  downloadUrlExpiresAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  tags?: { [key: string]: string | undefined };
}
export type IncludedData = "ALL_DATA" | "METADATA_ONLY" | (string & {});
export interface GetEvaluatorRequest {
  evaluatorId: string;
  includedData?: IncludedData;
}
export type EvaluatorName = string;
export type EvaluatorType =
  | "Builtin"
  | "ThirdParty"
  | "Custom"
  | "CustomCode"
  | "CustomDerived"
  | (string & {});
export type Provider = "AWS" | "DeepEval" | "AutoEval" | "Custom" | (string & {});
export interface GetEvaluatorResponse {
  evaluatorArn: string;
  evaluatorId: string;
  evaluatorName: string;
  description?: string | redacted.Redacted<string>;
  evaluatorConfig: EvaluatorConfig;
  evaluatorType?: EvaluatorType;
  provider?: Provider;
  level: EvaluatorLevel;
  status: EvaluatorStatus;
  createdAt: Date;
  updatedAt: Date;
  lockedForModification?: boolean;
  kmsKeyArn?: string;
}
export interface GetGatewayRequest {
  gatewayIdentifier: string;
}
export interface GetGatewayResponse {
  gatewayArn: string;
  gatewayId: string;
  gatewayUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  status: GatewayStatus;
  statusReasons?: string[];
  name: string;
  description?: string | redacted.Redacted<string>;
  roleArn?: string;
  protocolType?: GatewayProtocolType;
  protocolConfiguration?: GatewayProtocolConfiguration;
  authorizerType: AuthorizerType;
  authorizerConfiguration?: AuthorizerConfiguration;
  kmsKeyArn?: string;
  customTransformConfiguration?: CustomTransformConfiguration;
  interceptorConfigurations?: GatewayInterceptorConfiguration[];
  policyEngineConfiguration?: GatewayPolicyEngineConfiguration;
  workloadIdentityDetails?: WorkloadIdentityDetails;
  exceptionLevel?: ExceptionLevel;
  webAclArn?: string;
  wafConfiguration?: WafConfiguration;
}
export interface GetGatewayRateLimitRequest {
  gatewayIdentifier: string;
  rateLimitId: string;
}
export interface GetGatewayRateLimitResponse {
  rateLimitId: string;
  gatewayIdentifier: string;
  description?: string;
  dimensionKeys: string[];
  entries: LimitEntry[];
  status: GatewayRateLimitStatus;
  createdAt: Date;
  updatedAt: Date;
}
export interface GetGatewayRuleRequest {
  gatewayIdentifier: string;
  ruleId: string;
}
export interface GetGatewayRuleResponse {
  ruleId: string;
  gatewayArn: string;
  priority: number;
  conditions?: Condition[];
  actions: Action[];
  description?: string;
  createdAt: Date;
  status: GatewayRuleStatus;
  system?: SystemManagedBlock;
  updatedAt?: Date;
}
export interface GetGatewayTargetRequest {
  gatewayIdentifier: string;
  targetId: string;
}
export interface GetGatewayTargetResponse {
  gatewayArn: string;
  targetId: string;
  createdAt: Date;
  updatedAt: Date;
  status: TargetStatus;
  statusReasons?: string[];
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  targetConfiguration: TargetConfiguration;
  credentialProviderConfigurations: CredentialProviderConfiguration[];
  lastSynchronizedAt?: Date;
  metadataConfiguration?: MetadataConfiguration;
  privateEndpoint?: PrivateEndpoint;
  privateEndpointManagedResources?: ManagedResourceDetails[];
  authorizationData?: AuthorizationData;
  protocolType?: TargetProtocolType;
  certificateConfigurations?: CertificateConfiguration[];
}
export interface GetHarnessRequest {
  harnessId: string;
  harnessVersion?: string;
}
export interface GetHarnessResponse {
  harness: Harness;
}
export interface GetHarnessEndpointRequest {
  harnessId: string;
  endpointName: string;
}
export interface GetHarnessEndpointResponse {
  endpoint: HarnessEndpoint;
}
export type MemoryView = "full" | "without_decryption" | (string & {});
export interface GetMemoryInput {
  memoryId: string;
  view?: MemoryView;
}
export interface GetMemoryOutput {
  memory: Memory;
}
export interface GetOauth2CredentialProviderRequest {
  name: string;
}
export interface GetOauth2CredentialProviderResponse {
  clientSecretArn: Secret;
  clientSecretJsonKey?: string;
  clientSecretSource?: SecretSourceType;
  name: string;
  credentialProviderArn: string;
  credentialProviderVendor: CredentialProviderVendorType;
  callbackUrl?: string;
  oauth2ProviderConfigOutput: Oauth2ProviderConfigOutput;
  createdTime: Date;
  lastUpdatedTime: Date;
  status?: Status;
  failureReason?: string;
}
export interface GetOnlineEvaluationConfigRequest {
  onlineEvaluationConfigId: string;
}
export interface GetOnlineEvaluationConfigResponse {
  onlineEvaluationConfigArn: string;
  onlineEvaluationConfigId: string;
  onlineEvaluationConfigName: string;
  description?: string | redacted.Redacted<string>;
  rule: Rule;
  dataSourceConfig: DataSourceConfig;
  evaluators?: EvaluatorReference[];
  insights?: Insight[];
  clusteringConfig?: ClusteringConfig;
  outputConfig?: OutputConfig;
  evaluationExecutionRoleArn?: string;
  status: OnlineEvaluationConfigStatus;
  executionStatus: OnlineEvaluationExecutionStatus;
  createdAt: Date;
  updatedAt: Date;
  failureReason?: string;
}
export interface GetPaymentConnectorRequest {
  paymentManagerId: string;
  paymentConnectorId: string;
}
export interface GetPaymentConnectorResponse {
  paymentConnectorId: string;
  name: string;
  description?: string;
  type: PaymentConnectorType;
  provisionMode?: PaymentConnectorProvisionMode;
  credentialProviderConfigurations: CredentialsProviderConfiguration[];
  createdAt: Date;
  lastUpdatedAt: Date;
  status: PaymentConnectorStatus;
  authorizationUrl?: string;
  credentialsUpdatedAt?: Date;
}
export interface GetPaymentCredentialProviderRequest {
  name: string;
}
export interface GetPaymentCredentialProviderResponse {
  name: string;
  credentialProviderArn: string;
  credentialProviderVendor: PaymentCredentialProviderVendorType;
  providerConfigurationOutput: PaymentProviderConfigurationOutput;
  createdTime: Date;
  lastUpdatedTime: Date;
  tags?: { [key: string]: string | undefined };
}
export interface GetPaymentManagerRequest {
  paymentManagerId: string;
}
export interface GetPaymentManagerResponse {
  paymentManagerArn: string;
  paymentManagerId: string;
  name: string;
  description?: string;
  authorizerType: PaymentsAuthorizerType;
  authorizerConfiguration?: AuthorizerConfiguration;
  roleArn: string;
  workloadIdentityDetails?: WorkloadIdentityDetails;
  createdAt: Date;
  lastUpdatedAt: Date;
  status: PaymentManagerStatus;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
}
export interface GetPolicyRequest {
  policyEngineId: string;
  policyId: string;
}
export interface GetPolicyResponse {
  policyId: string;
  name: string;
  policyEngineId: string;
  createdAt: Date;
  updatedAt: Date;
  policyArn: string;
  status: PolicyStatus;
  enforcementMode?: EnforcementMode;
  definition: PolicyDefinition;
  description?: string | redacted.Redacted<string>;
  statusReasons: string[];
}
export interface GetPolicyEngineRequest {
  policyEngineId: string;
}
export interface GetPolicyEngineResponse {
  policyEngineId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  policyEngineArn: string;
  status: PolicyEngineStatus;
  encryptionKeyArn?: string;
  description?: string | redacted.Redacted<string>;
  statusReasons: string[];
}
export interface GetPolicyEngineSummaryRequest {
  policyEngineId: string;
}
export interface GetPolicyEngineSummaryResponse {
  policyEngineId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  policyEngineArn: string;
  status: PolicyEngineStatus;
  encryptionKeyArn?: string;
}
export interface GetPolicyGenerationRequest {
  policyGenerationId: string;
  policyEngineId: string;
}
export type PolicyGenerationName = string;
export type PolicyGenerationArn = string;
export type Resource = { arn: string };
export type PolicyGenerationStatus =
  | "GENERATING"
  | "GENERATED"
  | "GENERATE_FAILED"
  | "DELETE_FAILED"
  | (string & {});
export interface GetPolicyGenerationResponse {
  policyEngineId: string;
  policyGenerationId: string;
  name: string;
  policyGenerationArn: string;
  resource: Resource;
  createdAt: Date;
  updatedAt: Date;
  status: PolicyGenerationStatus;
  findings?: string;
  statusReasons: string[];
}
export interface GetPolicyGenerationSummaryRequest {
  policyGenerationId: string;
  policyEngineId: string;
}
export interface GetPolicyGenerationSummaryResponse {
  policyEngineId: string;
  policyGenerationId: string;
  name: string;
  policyGenerationArn: string;
  resource: Resource;
  createdAt: Date;
  updatedAt: Date;
  status: PolicyGenerationStatus;
  findings?: string;
}
export interface GetPolicySummaryRequest {
  policyEngineId: string;
  policyId: string;
}
export interface GetPolicySummaryResponse {
  policyId: string;
  name: string;
  policyEngineId: string;
  createdAt: Date;
  updatedAt: Date;
  policyArn: string;
  status: PolicyStatus;
  enforcementMode?: EnforcementMode;
}
export interface GetRegistryRequest {
  registryId: string;
}
export type RegistryId = string;
export interface GetRegistryResponse {
  name: string;
  description?: string | redacted.Redacted<string>;
  registryId: string;
  registryArn: string;
  authorizerType?: RegistryAuthorizerType;
  authorizerConfiguration?: AuthorizerConfiguration;
  approvalConfiguration?: ApprovalConfiguration;
  status: RegistryStatus;
  statusReason?: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface GetRegistryRecordRequest {
  registryId: string;
  recordId: string;
}
export type RegistryRecordId = string;
export interface GetRegistryRecordResponse {
  registryArn: string;
  recordArn: string;
  recordId: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  descriptorType: DescriptorType;
  descriptors: Descriptors;
  recordVersion?: string;
  status: RegistryRecordStatus;
  createdAt: Date;
  updatedAt: Date;
  statusReason?: string;
  synchronizationType?: SynchronizationType;
  synchronizationConfiguration?: SynchronizationConfiguration;
}
export interface GetResourcePolicyRequest {
  resourceArn: string;
}
export type ResourcePolicyBody = string;
export interface GetResourcePolicyResponse {
  policy?: string;
}
export type TokenVaultIdType = string;
export interface GetTokenVaultRequest {
  tokenVaultId?: string;
}
export type KeyType = "CustomerManagedKey" | "ServiceManagedKey" | (string & {});
export interface KmsConfiguration {
  keyType: KeyType;
  kmsKeyArn?: string;
}
export interface GetTokenVaultResponse {
  tokenVaultId: string;
  kmsConfiguration: KmsConfiguration;
  lastModifiedDate: Date;
}
export interface GetWorkloadIdentityRequest {
  name: string;
}
export interface GetWorkloadIdentityResponse {
  name: string;
  workloadIdentityArn: string;
  allowedResourceOauth2ReturnUrls?: string[];
  createdTime: Date;
  lastUpdatedTime: Date;
}
export type MaxResults = number;
export type NextToken = string;
export interface ListAgentRuntimeEndpointsRequest {
  agentRuntimeId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface AgentRuntimeEndpoint {
  name: string | redacted.Redacted<string>;
  liveVersion?: string;
  targetVersion?: string;
  agentRuntimeEndpointArn: string;
  agentRuntimeArn: string;
  status: AgentRuntimeEndpointStatus;
  id: string;
  description?: string;
  createdAt: Date;
  lastUpdatedAt: Date;
}
export type AgentRuntimeEndpoints = AgentRuntimeEndpoint[];
export interface ListAgentRuntimeEndpointsResponse {
  runtimeEndpoints: AgentRuntimeEndpoint[];
  nextToken?: string;
}
export interface ListAgentRuntimesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface AgentRuntime {
  agentRuntimeArn: string;
  agentRuntimeId: string;
  agentRuntimeVersion: string;
  agentRuntimeName: string;
  description: string | redacted.Redacted<string>;
  lastUpdatedAt: Date;
  status: AgentRuntimeStatus;
}
export type AgentRuntimes = AgentRuntime[];
export interface ListAgentRuntimesResponse {
  agentRuntimes: AgentRuntime[];
  nextToken?: string;
}
export interface ListAgentRuntimeVersionsRequest {
  agentRuntimeId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListAgentRuntimeVersionsResponse {
  agentRuntimes: AgentRuntime[];
  nextToken?: string;
}
export interface ListAgentRuntimeVersionsByCapacityProviderInput {
  capacityProviderId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface AgentRuntimeVersionSummary {
  agentRuntimeArn: string;
  agentRuntimeVersion: string;
  status: AgentRuntimeStatus;
}
export type AgentRuntimeVersionSummaryList = AgentRuntimeVersionSummary[];
export interface ListAgentRuntimeVersionsByCapacityProviderOutput {
  agentRuntimes: AgentRuntimeVersionSummary[];
  nextToken?: string;
}
export interface ListApiKeyCredentialProvidersRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ApiKeyCredentialProviderItem {
  name: string;
  credentialProviderArn: string;
  createdTime: Date;
  lastUpdatedTime: Date;
}
export type ApiKeyCredentialProviders = ApiKeyCredentialProviderItem[];
export interface ListApiKeyCredentialProvidersResponse {
  credentialProviders: ApiKeyCredentialProviderItem[];
  nextToken?: string;
}
export interface ListBrowserProfilesRequest {
  maxResults?: number;
  nextToken?: string;
  name?: string;
}
export interface BrowserProfileSummary {
  profileId: string;
  profileArn: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  status: BrowserProfileStatus;
  createdAt: Date;
  lastUpdatedAt: Date;
  lastSavedAt?: Date;
  lastSavedBrowserSessionId?: string;
  lastSavedBrowserId?: string;
}
export type BrowserProfileSummaries = BrowserProfileSummary[];
export interface ListBrowserProfilesResponse {
  profileSummaries: BrowserProfileSummary[];
  nextToken?: string;
}
export type ResourceType = "SYSTEM" | "CUSTOM" | (string & {});
export interface ListBrowsersRequest {
  maxResults?: number;
  nextToken?: string;
  type?: ResourceType;
}
export interface BrowserSummary {
  browserId: string;
  browserArn: string;
  name?: string;
  description?: string | redacted.Redacted<string>;
  status: BrowserStatus;
  createdAt: Date;
  lastUpdatedAt?: Date;
}
export type BrowserSummaries = BrowserSummary[];
export interface ListBrowsersResponse {
  browserSummaries: BrowserSummary[];
  nextToken?: string;
}
export interface ListCapacityProvidersInput {
  maxResults?: number;
  nextToken?: string;
}
export interface CapacityProviderSummary {
  capacityProviderId: string;
  capacityProviderArn: string;
  name: string;
  status: CapacityProviderStatus;
  lastUpdatedAt: Date;
}
export type CapacityProviderList = CapacityProviderSummary[];
export interface ListCapacityProvidersOutput {
  capacityProviders: CapacityProviderSummary[];
  nextToken?: string;
}
export interface ListCodeInterpretersRequest {
  maxResults?: number;
  nextToken?: string;
  type?: ResourceType;
}
export interface CodeInterpreterSummary {
  codeInterpreterId: string;
  codeInterpreterArn: string;
  name?: string;
  description?: string | redacted.Redacted<string>;
  status: CodeInterpreterStatus;
  createdAt: Date;
  lastUpdatedAt?: Date;
}
export type CodeInterpreterSummaries = CodeInterpreterSummary[];
export interface ListCodeInterpretersResponse {
  codeInterpreterSummaries: CodeInterpreterSummary[];
  nextToken?: string;
}
export interface ListConfigurationBundlesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ConfigurationBundleSummary {
  bundleArn: string;
  bundleId: string;
  bundleName: string;
  description?: string | redacted.Redacted<string>;
  createdAt?: Date;
}
export type ConfigurationBundleSummaryList = ConfigurationBundleSummary[];
export interface ListConfigurationBundlesResponse {
  bundles: ConfigurationBundleSummary[];
  nextToken?: string;
}
export interface VersionFilter {
  branchName?: string;
  createdByName?: string;
  latestPerBranch?: boolean;
}
export interface ListConfigurationBundleVersionsRequest {
  bundleId: string;
  nextToken?: string;
  maxResults?: number;
  filter?: VersionFilter;
}
export interface ConfigurationBundleVersionSummary {
  bundleArn: string;
  bundleId: string;
  versionId: string;
  lineageMetadata?: VersionLineageMetadata;
  versionCreatedAt: Date;
}
export type ConfigurationBundleVersionSummaryList = ConfigurationBundleVersionSummary[];
export interface ListConfigurationBundleVersionsResponse {
  versions: ConfigurationBundleVersionSummary[];
  nextToken?: string;
}
export interface ListConsentPortalsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ConsentPortalSummary {
  sources: ConsentPortalSource[];
  consentPortalArn: string;
  consentPortalId: string;
  createdAt: Date;
  description?: string;
  name: string;
  portalUrl?: string;
  status: ConsentPortalStatus;
  updatedAt: Date;
}
export type ConsentPortalSummaries = ConsentPortalSummary[];
export interface ListConsentPortalsResponse {
  consentPortals: ConsentPortalSummary[];
  nextToken?: string;
}
export interface ListDatasetExamplesRequest {
  datasetId: string;
  datasetVersion?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListDatasetExamplesResponse {
  datasetArn: string;
  datasetId: string;
  datasetVersion: string;
  examples: any[];
  nextToken?: string;
}
export interface ListDatasetsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface DatasetSummary {
  datasetArn: string;
  datasetId: string;
  datasetName: string;
  description?: string;
  status: DatasetStatus;
  draftStatus?: DraftStatus;
  schemaType: DatasetSchemaType;
  exampleCount: number;
  createdAt: Date;
  updatedAt: Date;
}
export type DatasetSummaryList = DatasetSummary[];
export interface ListDatasetsResponse {
  datasets: DatasetSummary[];
  nextToken?: string;
}
export interface ListDatasetVersionsRequest {
  datasetId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface DatasetVersionSummary {
  datasetVersion: string;
  exampleCount: number;
  createdAt: Date;
}
export type DatasetVersionSummaryList = DatasetVersionSummary[];
export interface ListDatasetVersionsResponse {
  versions: DatasetVersionSummary[];
  nextToken?: string;
}
export interface ListEvaluatorsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface EvaluatorSummary {
  evaluatorArn: string;
  evaluatorId: string;
  evaluatorName: string;
  description?: string | redacted.Redacted<string>;
  evaluatorType: EvaluatorType;
  provider?: Provider;
  level?: EvaluatorLevel;
  status: EvaluatorStatus;
  createdAt: Date;
  updatedAt: Date;
  lockedForModification?: boolean;
  kmsKeyArn?: string;
}
export type EvaluatorSummaryList = EvaluatorSummary[];
export interface ListEvaluatorsResponse {
  evaluators: EvaluatorSummary[];
  nextToken?: string;
}
export type GatewayRateLimitMaxResults = number;
export type GatewayRateLimitNextToken = string;
export interface ListGatewayRateLimitsRequest {
  gatewayIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListGatewayRateLimitsResponse {
  rateLimits: GatewayRateLimitDetail[];
  nextToken?: string;
}
export type GatewayRuleMaxResults = number;
export type GatewayRuleNextToken = string;
export interface ListGatewayRulesRequest {
  gatewayIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface GatewayRuleDetail {
  ruleId: string;
  gatewayArn: string;
  priority: number;
  conditions?: Condition[];
  actions: Action[];
  description?: string;
  createdAt: Date;
  status: GatewayRuleStatus;
  system?: SystemManagedBlock;
  updatedAt?: Date;
}
export type GatewayRules = GatewayRuleDetail[];
export interface ListGatewayRulesResponse {
  gatewayRules: GatewayRuleDetail[];
  nextToken?: string;
}
export type GatewayMaxResults = number;
export type GatewayNextToken = string;
export interface ListGatewaysRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface GatewaySummary {
  gatewayId: string;
  name: string;
  status: GatewayStatus;
  description?: string | redacted.Redacted<string>;
  createdAt: Date;
  updatedAt: Date;
  authorizerType: AuthorizerType;
  protocolType?: GatewayProtocolType;
}
export type GatewaySummaries = GatewaySummary[];
export interface ListGatewaysResponse {
  items: GatewaySummary[];
  nextToken?: string;
}
export type TargetMaxResults = number;
export type TargetNextToken = string;
export interface ListGatewayTargetsRequest {
  gatewayIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export type TargetType =
  | "OPEN_API_SCHEMA"
  | "SMITHY_MODEL"
  | "MCP_SERVER"
  | "LAMBDA"
  | "API_GATEWAY"
  | "CONNECTOR"
  | "AGENTCORE_RUNTIME"
  | "PASSTHROUGH"
  | "PROVIDER"
  | "HTTP_CONNECTOR"
  | (string & {});
export interface TargetSummary {
  targetId: string;
  name: string | redacted.Redacted<string>;
  status: TargetStatus;
  description?: string | redacted.Redacted<string>;
  createdAt: Date;
  updatedAt: Date;
  resourcePriority?: number;
  lastSynchronizedAt?: Date;
  authorizationData?: AuthorizationData;
  targetType?: TargetType;
  listingMode?: ListingMode;
}
export type TargetSummaries = TargetSummary[];
export interface ListGatewayTargetsResponse {
  items: TargetSummary[];
  nextToken?: string;
}
export interface ListHarnessEndpointsRequest {
  harnessId: string;
  maxResults?: number;
  nextToken?: string;
}
export type HarnessEndpoints = HarnessEndpoint[];
export interface ListHarnessEndpointsResponse {
  endpoints: HarnessEndpoint[];
  nextToken?: string;
}
export interface ListHarnessesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface HarnessSummary {
  harnessId: string;
  harnessName: string;
  arn: string;
  status: HarnessStatus;
  createdAt: Date;
  updatedAt: Date;
  harnessVersion?: string;
}
export type HarnessSummaries = HarnessSummary[];
export interface ListHarnessesResponse {
  harnesses: HarnessSummary[];
  nextToken?: string;
}
export interface ListHarnessVersionsRequest {
  harnessId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface HarnessVersionSummary {
  harnessId: string;
  harnessName: string;
  arn: string;
  harnessVersion: string;
  status: HarnessStatus;
  createdAt: Date;
  updatedAt: Date;
  failureReason?: string;
}
export type HarnessVersionSummaries = HarnessVersionSummary[];
export interface ListHarnessVersionsResponse {
  harnessVersions: HarnessVersionSummary[];
  nextToken?: string;
}
export interface ListMemoriesInput {
  maxResults?: number;
  nextToken?: string;
}
export interface MemorySummary {
  arn?: string;
  id?: string;
  status?: MemoryStatus;
  createdAt: Date;
  updatedAt: Date;
  managedByResourceArn?: string;
}
export type MemorySummaryList = MemorySummary[];
export interface ListMemoriesOutput {
  memories: MemorySummary[];
  nextToken?: string;
}
export interface ListOauth2CredentialProvidersRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface Oauth2CredentialProviderItem {
  name: string;
  credentialProviderVendor: CredentialProviderVendorType;
  credentialProviderArn: string;
  createdTime: Date;
  lastUpdatedTime: Date;
}
export type Oauth2CredentialProviders = Oauth2CredentialProviderItem[];
export interface ListOauth2CredentialProvidersResponse {
  credentialProviders: Oauth2CredentialProviderItem[];
  nextToken?: string;
}
export interface ListOnlineEvaluationConfigsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface OnlineEvaluationConfigSummary {
  onlineEvaluationConfigArn: string;
  onlineEvaluationConfigId: string;
  onlineEvaluationConfigName: string;
  description?: string | redacted.Redacted<string>;
  status: OnlineEvaluationConfigStatus;
  executionStatus: OnlineEvaluationExecutionStatus;
  createdAt: Date;
  updatedAt: Date;
  failureReason?: string;
  insights?: Insight[];
  clusteringConfig?: ClusteringConfig;
}
export type OnlineEvaluationConfigSummaryList = OnlineEvaluationConfigSummary[];
export interface ListOnlineEvaluationConfigsResponse {
  onlineEvaluationConfigs: OnlineEvaluationConfigSummary[];
  nextToken?: string;
}
export interface ListPaymentConnectorsRequest {
  paymentManagerId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface PaymentConnectorSummary {
  paymentConnectorId: string;
  name: string;
  type: PaymentConnectorType;
  provisionMode?: PaymentConnectorProvisionMode;
  status: PaymentConnectorStatus;
  lastUpdatedAt: Date;
}
export type PaymentConnectorSummaries = PaymentConnectorSummary[];
export interface ListPaymentConnectorsResponse {
  paymentConnectors: PaymentConnectorSummary[];
  nextToken?: string;
}
export interface ListPaymentCredentialProvidersRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface PaymentCredentialProviderItem {
  name: string;
  credentialProviderVendor: PaymentCredentialProviderVendorType;
  credentialProviderArn: string;
  createdTime: Date;
  lastUpdatedTime: Date;
}
export type PaymentCredentialProviders = PaymentCredentialProviderItem[];
export interface ListPaymentCredentialProvidersResponse {
  credentialProviders: PaymentCredentialProviderItem[];
  nextToken?: string;
}
export interface ListPaymentManagersRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface PaymentManagerSummary {
  paymentManagerArn: string;
  paymentManagerId: string;
  name: string;
  description?: string;
  authorizerType: PaymentsAuthorizerType;
  roleArn: string;
  status: PaymentManagerStatus;
  createdAt?: Date;
  lastUpdatedAt: Date;
  kmsKeyArn?: string;
}
export type PaymentManagerSummaries = PaymentManagerSummary[];
export interface ListPaymentManagersResponse {
  paymentManagers: PaymentManagerSummary[];
  nextToken?: string;
}
export interface ListPoliciesRequest {
  nextToken?: string;
  maxResults?: number;
  policyEngineId: string;
  targetResourceScope?: string;
}
export interface Policy {
  policyId: string;
  name: string;
  policyEngineId: string;
  createdAt: Date;
  updatedAt: Date;
  policyArn: string;
  status: PolicyStatus;
  enforcementMode?: EnforcementMode;
  definition: PolicyDefinition;
  description?: string | redacted.Redacted<string>;
  statusReasons: string[];
}
export type Policies = Policy[];
export interface ListPoliciesResponse {
  policies: Policy[];
  nextToken?: string;
}
export interface ListPolicyEnginesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface PolicyEngine {
  policyEngineId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  policyEngineArn: string;
  status: PolicyEngineStatus;
  encryptionKeyArn?: string;
  description?: string | redacted.Redacted<string>;
  statusReasons: string[];
}
export type PolicyEngines = PolicyEngine[];
export interface ListPolicyEnginesResponse {
  policyEngines: PolicyEngine[];
  nextToken?: string;
}
export interface ListPolicyEngineSummariesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface PolicyEngineSummary {
  policyEngineId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  policyEngineArn: string;
  status: PolicyEngineStatus;
  encryptionKeyArn?: string;
}
export type PolicyEngineSummaryList = PolicyEngineSummary[];
export interface ListPolicyEngineSummariesResponse {
  policyEngines: PolicyEngineSummary[];
  nextToken?: string;
}
export interface ListPolicyGenerationAssetsRequest {
  policyGenerationId: string;
  policyEngineId: string;
  nextToken?: string;
  maxResults?: number;
}
export type NaturalLanguage = string;
export type FindingType =
  | "VALID"
  | "INVALID"
  | "NOT_TRANSLATABLE"
  | "ALLOW_ALL"
  | "ALLOW_NONE"
  | "DENY_ALL"
  | "DENY_NONE"
  | (string & {});
export interface Finding {
  type?: FindingType;
  description?: string;
}
export type Findings = Finding[];
export interface PolicyGenerationAsset {
  policyGenerationAssetId: string;
  definition?: PolicyDefinition;
  rawTextFragment: string;
  findings: Finding[];
}
export type PolicyGenerationAssets = PolicyGenerationAsset[];
export interface ListPolicyGenerationAssetsResponse {
  policyGenerationAssets?: PolicyGenerationAsset[];
  nextToken?: string;
}
export interface ListPolicyGenerationsRequest {
  nextToken?: string;
  maxResults?: number;
  policyEngineId: string;
}
export interface PolicyGeneration {
  policyEngineId: string;
  policyGenerationId: string;
  name: string;
  policyGenerationArn: string;
  resource: Resource;
  createdAt: Date;
  updatedAt: Date;
  status: PolicyGenerationStatus;
  findings?: string;
  statusReasons: string[];
}
export type PolicyGenerations = PolicyGeneration[];
export interface ListPolicyGenerationsResponse {
  policyGenerations: PolicyGeneration[];
  nextToken?: string;
}
export interface ListPolicyGenerationSummariesRequest {
  nextToken?: string;
  maxResults?: number;
  policyEngineId: string;
}
export interface PolicyGenerationSummary {
  policyEngineId: string;
  policyGenerationId: string;
  name: string;
  policyGenerationArn: string;
  resource: Resource;
  createdAt: Date;
  updatedAt: Date;
  status: PolicyGenerationStatus;
  findings?: string;
}
export type PolicyGenerationSummaryList = PolicyGenerationSummary[];
export interface ListPolicyGenerationSummariesResponse {
  policyGenerations: PolicyGenerationSummary[];
  nextToken?: string;
}
export interface ListPolicySummariesRequest {
  nextToken?: string;
  maxResults?: number;
  policyEngineId: string;
  targetResourceScope?: string;
}
export interface PolicySummary {
  policyId: string;
  name: string;
  policyEngineId: string;
  createdAt: Date;
  updatedAt: Date;
  policyArn: string;
  status: PolicyStatus;
  enforcementMode?: EnforcementMode;
}
export type PolicySummaryList = PolicySummary[];
export interface ListPolicySummariesResponse {
  policies: PolicySummary[];
  nextToken?: string;
}
export interface ListRegistriesRequest {
  maxResults?: number;
  nextToken?: string;
  status?: RegistryStatus;
  authorizerType?: RegistryAuthorizerType;
}
export interface RegistrySummary {
  name: string;
  description?: string | redacted.Redacted<string>;
  registryId: string;
  registryArn: string;
  authorizerType?: RegistryAuthorizerType;
  status: RegistryStatus;
  statusReason?: string;
  createdAt: Date;
  updatedAt: Date;
}
export type RegistrySummaryList = RegistrySummary[];
export interface ListRegistriesResponse {
  registries: RegistrySummary[];
  nextToken?: string;
}
export interface ListRegistryRecordsRequest {
  registryId: string;
  maxResults?: number;
  nextToken?: string;
  name?: string;
  status?: RegistryRecordStatus;
  descriptorType?: DescriptorType;
}
export interface RegistryRecordSummary {
  registryArn: string;
  recordArn: string;
  recordId: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  descriptorType: DescriptorType;
  recordVersion: string;
  status: RegistryRecordStatus;
  createdAt: Date;
  updatedAt: Date;
}
export type RegistryRecordSummaryList = RegistryRecordSummary[];
export interface ListRegistryRecordsResponse {
  registryRecords: RegistryRecordSummary[];
  nextToken?: string;
}
export type TaggableResourcesArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface ListWorkloadIdentitiesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface WorkloadIdentityType {
  name: string;
  workloadIdentityArn: string;
}
export type WorkloadIdentityList = WorkloadIdentityType[];
export interface ListWorkloadIdentitiesResponse {
  workloadIdentities: WorkloadIdentityType[];
  nextToken?: string;
}
export interface PutResourcePolicyRequest {
  resourceArn: string;
  policy: string;
}
export interface PutResourcePolicyResponse {
  policy: string;
}
export type CoinbaseCdpSecret = "API_KEY" | "WALLET_SECRET" | (string & {});
export type CoinbaseCdpSecrets = CoinbaseCdpSecret[];
export interface CoinbaseCdpRotationTargets {
  secrets: CoinbaseCdpSecret[];
}
export type CredentialRotationConfig = { coinbaseCDP: CoinbaseCdpRotationTargets };
export interface RotatePaymentConnectorCredentialsRequest {
  paymentManagerId: string;
  paymentConnectorId: string;
  credentialsToRotate: CredentialRotationConfig;
  clientToken?: string;
}
export interface RotatePaymentConnectorCredentialsResponse {
  paymentConnectorId: string;
  paymentManagerId: string;
  lastUpdatedAt: Date;
  status: PaymentConnectorStatus;
}
export interface SetTokenVaultCMKRequest {
  tokenVaultId?: string;
  kmsConfiguration: KmsConfiguration;
}
export interface SetTokenVaultCMKResponse {
  tokenVaultId: string;
  kmsConfiguration: KmsConfiguration;
  lastModifiedDate: Date;
}
export type Content = { rawText: string };
export interface StartPolicyGenerationRequest {
  policyEngineId: string;
  resource: Resource;
  content: Content;
  name: string;
  clientToken?: string;
}
export interface StartPolicyGenerationResponse {
  policyEngineId: string;
  policyGenerationId: string;
  name: string;
  policyGenerationArn: string;
  resource: Resource;
  createdAt: Date;
  updatedAt: Date;
  status: PolicyGenerationStatus;
  findings?: string;
  statusReasons: string[];
}
export interface SubmitRegistryRecordForApprovalRequest {
  registryId: string;
  recordId: string;
}
export interface SubmitRegistryRecordForApprovalResponse {
  registryArn: string;
  recordArn: string;
  recordId: string;
  status: RegistryRecordStatus;
  updatedAt: Date;
}
export type TargetIdList = string[];
export interface SynchronizeGatewayTargetsRequest {
  gatewayIdentifier: string;
  targetIdList: string[];
}
export interface GatewayTarget {
  gatewayArn: string;
  targetId: string;
  createdAt: Date;
  updatedAt: Date;
  status: TargetStatus;
  statusReasons?: string[];
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  targetConfiguration: TargetConfiguration;
  credentialProviderConfigurations: CredentialProviderConfiguration[];
  lastSynchronizedAt?: Date;
  metadataConfiguration?: MetadataConfiguration;
  privateEndpoint?: PrivateEndpoint;
  privateEndpointManagedResources?: ManagedResourceDetails[];
  authorizationData?: AuthorizationData;
  protocolType?: TargetProtocolType;
  certificateConfigurations?: CertificateConfiguration[];
}
export type GatewayTargetList = GatewayTarget[];
export interface SynchronizeGatewayTargetsResponse {
  targets?: GatewayTarget[];
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
export interface UpdateAgentRuntimeRequest {
  agentRuntimeId: string;
  agentRuntimeArtifact: AgentRuntimeArtifact;
  roleArn: string;
  networkConfiguration?: NetworkConfiguration;
  description?: string | redacted.Redacted<string>;
  authorizerConfiguration?: AuthorizerConfiguration;
  requestHeaderConfiguration?: RequestHeaderConfiguration;
  protocolConfiguration?: ProtocolConfiguration;
  lifecycleConfiguration?: LifecycleConfiguration;
  metadataConfiguration?: RuntimeMetadataConfiguration;
  environmentVariables?: { [key: string]: string | undefined };
  filesystemConfigurations?: FilesystemConfiguration[];
  capacityProviderConfiguration?: CapacityProviderConfiguration;
  platformVersion?: string;
  clientToken?: string;
}
export interface UpdateAgentRuntimeResponse {
  agentRuntimeArn: string;
  agentRuntimeId: string;
  workloadIdentityDetails?: WorkloadIdentityDetails;
  agentRuntimeVersion: string;
  createdAt: Date;
  lastUpdatedAt: Date;
  status: AgentRuntimeStatus;
}
export interface UpdateAgentRuntimeEndpointRequest {
  agentRuntimeId: string;
  endpointName: string | redacted.Redacted<string>;
  agentRuntimeVersion?: string;
  description?: string;
  clientToken?: string;
}
export interface UpdateAgentRuntimeEndpointResponse {
  liveVersion?: string;
  targetVersion?: string;
  agentRuntimeEndpointArn: string;
  agentRuntimeArn: string;
  status: AgentRuntimeEndpointStatus;
  createdAt: Date;
  lastUpdatedAt: Date;
}
export interface UpdateApiKeyCredentialProviderRequest {
  name: string;
  apiKey?: string | redacted.Redacted<string>;
  apiKeySecretConfig?: SecretReference;
  apiKeySecretSource?: SecretSourceType;
}
export interface UpdateApiKeyCredentialProviderResponse {
  apiKeySecretArn: Secret;
  apiKeySecretJsonKey?: string;
  apiKeySecretSource?: SecretSourceType;
  name: string;
  credentialProviderArn: string;
  createdTime: Date;
  lastUpdatedTime: Date;
}
export interface UpdatedDescription {
  optionalValue?: string | redacted.Redacted<string>;
}
export interface UpdateCapacityProviderInput {
  capacityProviderId: string;
  description?: UpdatedDescription;
  clientToken?: string;
}
export interface UpdateCapacityProviderOutput {
  capacityProviderId: string;
  capacityProviderArn: string;
  name: string;
  status: CapacityProviderStatus;
  createdAt: Date;
  lastUpdatedAt: Date;
}
export interface UpdateConfigurationBundleRequest {
  clientToken?: string;
  bundleId: string;
  bundleName?: string;
  description?: string | redacted.Redacted<string>;
  components?: { [key: string]: ComponentConfiguration | undefined };
  parentVersionIds: string[];
  branchName?: string;
  commitMessage: string;
  createdBy?: VersionCreatedBySource;
  kmsKeyArn?: string;
}
export interface UpdateConfigurationBundleResponse {
  bundleArn: string;
  bundleId: string;
  versionId: string;
  updatedAt: Date;
}
export interface UpdateConsentPortalRequest {
  consentPortalIdentifier: string;
  executionRoleArn?: string;
  idpConfig?: ConsentPortalIdpConfig;
  description?: string;
}
export interface UpdateConsentPortalResponse {
  sources: ConsentPortalSource[];
  consentPortalArn: string;
  consentPortalId: string;
  createdAt: Date;
  description?: string;
  executionRoleArn: string;
  idpConfig: ConsentPortalIdpConfig;
  name: string;
  portalUrl?: string;
  status: ConsentPortalStatus;
  statusReason?: string;
  updatedAt: Date;
}
export interface UpdateDatasetRequest {
  datasetId: string;
  clientToken?: string;
  description?: string;
}
export interface UpdateDatasetResponse {
  datasetArn: string;
  datasetId: string;
  updatedAt: Date;
}
export interface UpdateDatasetExamplesRequest {
  datasetId: string;
  clientToken?: string;
  examples: any[];
}
export interface UpdateDatasetExamplesResponse {
  datasetArn: string;
  datasetId: string;
  status: DatasetStatus;
  updatedCount: number;
  updatedAt: Date;
}
export interface UpdateEvaluatorRequest {
  clientToken?: string;
  evaluatorId: string;
  description?: string | redacted.Redacted<string>;
  evaluatorConfig?: EvaluatorConfig;
  level?: EvaluatorLevel;
  kmsKeyArn?: string;
}
export interface UpdateEvaluatorResponse {
  evaluatorArn: string;
  evaluatorId: string;
  updatedAt: Date;
  status: EvaluatorStatus;
}
export interface UpdateGatewayRequest {
  gatewayIdentifier: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  roleArn: string;
  protocolType?: GatewayProtocolType;
  protocolConfiguration?: GatewayProtocolConfiguration;
  authorizerType: AuthorizerType;
  authorizerConfiguration?: AuthorizerConfiguration;
  kmsKeyArn?: string;
  customTransformConfiguration?: CustomTransformConfiguration;
  interceptorConfigurations?: GatewayInterceptorConfiguration[];
  policyEngineConfiguration?: GatewayPolicyEngineConfiguration;
  exceptionLevel?: ExceptionLevel;
  wafConfiguration?: WafConfiguration;
}
export interface UpdateGatewayResponse {
  gatewayArn: string;
  gatewayId: string;
  gatewayUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  status: GatewayStatus;
  statusReasons?: string[];
  name: string;
  description?: string | redacted.Redacted<string>;
  roleArn?: string;
  protocolType?: GatewayProtocolType;
  protocolConfiguration?: GatewayProtocolConfiguration;
  authorizerType: AuthorizerType;
  authorizerConfiguration?: AuthorizerConfiguration;
  kmsKeyArn?: string;
  customTransformConfiguration?: CustomTransformConfiguration;
  interceptorConfigurations?: GatewayInterceptorConfiguration[];
  policyEngineConfiguration?: GatewayPolicyEngineConfiguration;
  workloadIdentityDetails?: WorkloadIdentityDetails;
  exceptionLevel?: ExceptionLevel;
  webAclArn?: string;
  wafConfiguration?: WafConfiguration;
}
export interface UpdateGatewayRateLimitRequest {
  gatewayIdentifier: string;
  rateLimitId: string;
  description?: string;
  entries: LimitEntry[];
}
export interface UpdateGatewayRateLimitResponse {
  rateLimitId: string;
  gatewayIdentifier: string;
  description?: string;
  dimensionKeys: string[];
  entries: LimitEntry[];
  status: GatewayRateLimitStatus;
  createdAt: Date;
  updatedAt: Date;
}
export interface UpdateGatewayRuleRequest {
  gatewayIdentifier: string;
  ruleId: string;
  priority?: number;
  conditions?: Condition[];
  actions?: Action[];
  description?: string;
}
export interface UpdateGatewayRuleResponse {
  ruleId: string;
  gatewayArn: string;
  priority: number;
  conditions?: Condition[];
  actions: Action[];
  description?: string;
  createdAt: Date;
  status: GatewayRuleStatus;
  system?: SystemManagedBlock;
  updatedAt?: Date;
}
export interface UpdateGatewayTargetRequest {
  gatewayIdentifier: string;
  targetId: string;
  name?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  targetConfiguration: TargetConfiguration;
  credentialProviderConfigurations?: CredentialProviderConfiguration[];
  metadataConfiguration?: MetadataConfiguration;
  privateEndpoint?: PrivateEndpoint;
  certificateConfigurations?: CertificateConfiguration[];
}
export interface UpdateGatewayTargetResponse {
  gatewayArn: string;
  targetId: string;
  createdAt: Date;
  updatedAt: Date;
  status: TargetStatus;
  statusReasons?: string[];
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  targetConfiguration: TargetConfiguration;
  credentialProviderConfigurations: CredentialProviderConfiguration[];
  lastSynchronizedAt?: Date;
  metadataConfiguration?: MetadataConfiguration;
  privateEndpoint?: PrivateEndpoint;
  privateEndpointManagedResources?: ManagedResourceDetails[];
  authorizationData?: AuthorizationData;
  protocolType?: TargetProtocolType;
  certificateConfigurations?: CertificateConfiguration[];
}
export interface UpdatedHarnessEnvironmentArtifact {
  optionalValue?: HarnessEnvironmentArtifact;
}
export interface UpdatedAuthorizerConfiguration {
  optionalValue?: AuthorizerConfiguration;
}
export interface UpdatedHarnessMemoryConfiguration {
  optionalValue?: HarnessMemoryConfiguration;
}
export interface UpdateHarnessRequest {
  harnessId: string;
  clientToken?: string;
  executionRoleArn?: string;
  environment?: HarnessEnvironmentProviderRequest;
  environmentArtifact?: UpdatedHarnessEnvironmentArtifact;
  environmentVariables?: { [key: string]: string | undefined };
  authorizerConfiguration?: UpdatedAuthorizerConfiguration;
  model?: HarnessModelConfiguration;
  systemPrompt?: HarnessSystemContentBlock[];
  tools?: HarnessTool[];
  skills?: HarnessSkill[];
  allowedTools?: string[];
  memory?: UpdatedHarnessMemoryConfiguration;
  truncation?: HarnessTruncationConfiguration;
  hooks?: HarnessHook[];
  maxIterations?: number;
  maxTokens?: number;
  timeoutSeconds?: number;
}
export interface UpdateHarnessResponse {
  harness: Harness;
}
export interface UpdateHarnessEndpointRequest {
  harnessId: string;
  endpointName: string;
  targetVersion?: string;
  description?: string;
  clientToken?: string;
}
export interface UpdateHarnessEndpointResponse {
  endpoint: HarnessEndpoint;
}
export type CustomExtractionConfigurationInput =
  | {
      semanticExtractionOverride: SemanticOverrideExtractionConfigurationInput;
      userPreferenceExtractionOverride?: never;
      episodicExtractionOverride?: never;
    }
  | {
      semanticExtractionOverride?: never;
      userPreferenceExtractionOverride: UserPreferenceOverrideExtractionConfigurationInput;
      episodicExtractionOverride?: never;
    }
  | {
      semanticExtractionOverride?: never;
      userPreferenceExtractionOverride?: never;
      episodicExtractionOverride: EpisodicOverrideExtractionConfigurationInput;
    };
export type ModifyExtractionConfiguration = {
  customExtractionConfiguration: CustomExtractionConfigurationInput;
};
export type CustomConsolidationConfigurationInput =
  | {
      semanticConsolidationOverride: SemanticOverrideConsolidationConfigurationInput;
      summaryConsolidationOverride?: never;
      userPreferenceConsolidationOverride?: never;
      episodicConsolidationOverride?: never;
    }
  | {
      semanticConsolidationOverride?: never;
      summaryConsolidationOverride: SummaryOverrideConsolidationConfigurationInput;
      userPreferenceConsolidationOverride?: never;
      episodicConsolidationOverride?: never;
    }
  | {
      semanticConsolidationOverride?: never;
      summaryConsolidationOverride?: never;
      userPreferenceConsolidationOverride: UserPreferenceOverrideConsolidationConfigurationInput;
      episodicConsolidationOverride?: never;
    }
  | {
      semanticConsolidationOverride?: never;
      summaryConsolidationOverride?: never;
      userPreferenceConsolidationOverride?: never;
      episodicConsolidationOverride: EpisodicOverrideConsolidationConfigurationInput;
    };
export type ModifyConsolidationConfiguration = {
  customConsolidationConfiguration: CustomConsolidationConfigurationInput;
};
export type CustomReflectionConfigurationInput = {
  episodicReflectionOverride: EpisodicOverrideReflectionConfigurationInput;
};
export type ModifyReflectionConfiguration =
  | {
      episodicReflectionConfiguration: EpisodicReflectionConfigurationInput;
      customReflectionConfiguration?: never;
    }
  | {
      episodicReflectionConfiguration?: never;
      customReflectionConfiguration: CustomReflectionConfigurationInput;
    };
export interface ModifyInvocationConfigurationInput {
  topicArn?: string;
  payloadDeliveryBucketName?: string;
}
export interface ModifySelfManagedConfiguration {
  triggerConditions?: TriggerConditionInput[];
  invocationConfiguration?: ModifyInvocationConfigurationInput;
  historicalContextWindowSize?: number;
}
export interface ModifyStrategyConfiguration {
  extraction?: ModifyExtractionConfiguration;
  consolidation?: ModifyConsolidationConfiguration;
  reflection?: ModifyReflectionConfiguration;
  selfManagedConfiguration?: ModifySelfManagedConfiguration;
}
export interface ModifyMemoryStrategyInput {
  memoryStrategyId: string;
  description?: string | redacted.Redacted<string>;
  namespaces?: string[];
  namespaceTemplates?: string[];
  configuration?: ModifyStrategyConfiguration;
  memoryRecordSchema?: MemoryRecordSchema;
}
export type ModifyMemoryStrategiesList = ModifyMemoryStrategyInput[];
export interface DeleteMemoryStrategyInput {
  memoryStrategyId: string;
}
export type DeleteMemoryStrategiesList = DeleteMemoryStrategyInput[];
export interface ModifyMemoryStrategies {
  addMemoryStrategies?: MemoryStrategyInput[];
  modifyMemoryStrategies?: ModifyMemoryStrategyInput[];
  deleteMemoryStrategies?: DeleteMemoryStrategyInput[];
}
export interface UpdateMemoryInput {
  clientToken?: string;
  memoryId: string;
  description?: string | redacted.Redacted<string>;
  eventExpiryDuration?: number;
  memoryExecutionRoleArn?: string;
  memoryStrategies?: ModifyMemoryStrategies;
  addIndexedKeys?: IndexedKey[];
  namespaceKeys?: NamespaceKeyEntry[];
  streamDeliveryResources?: StreamDeliveryResources;
}
export interface UpdateMemoryOutput {
  memory?: Memory;
}
export interface UpdateOauth2CredentialProviderRequest {
  name: string;
  credentialProviderVendor: CredentialProviderVendorType;
  oauth2ProviderConfigInput: Oauth2ProviderConfigInput;
}
export interface UpdateOauth2CredentialProviderResponse {
  clientSecretArn: Secret;
  clientSecretJsonKey?: string;
  clientSecretSource?: SecretSourceType;
  name: string;
  credentialProviderVendor: CredentialProviderVendorType;
  credentialProviderArn: string;
  callbackUrl?: string;
  oauth2ProviderConfigOutput: Oauth2ProviderConfigOutput;
  createdTime: Date;
  lastUpdatedTime: Date;
  status?: Status;
}
export interface UpdateOnlineEvaluationConfigRequest {
  clientToken?: string;
  onlineEvaluationConfigId: string;
  description?: string | redacted.Redacted<string>;
  rule?: Rule;
  dataSourceConfig?: DataSourceConfig;
  evaluators?: EvaluatorReference[];
  insights?: Insight[];
  clusteringConfig?: ClusteringConfig;
  outputConfig?: OutputConfig;
  evaluationExecutionRoleArn?: string;
  executionStatus?: OnlineEvaluationExecutionStatus;
}
export interface UpdateOnlineEvaluationConfigResponse {
  onlineEvaluationConfigArn: string;
  onlineEvaluationConfigId: string;
  updatedAt: Date;
  status: OnlineEvaluationConfigStatus;
  executionStatus: OnlineEvaluationExecutionStatus;
  failureReason?: string;
}
export interface UpdatePaymentConnectorRequest {
  paymentManagerId: string;
  paymentConnectorId: string;
  description?: string;
  type?: PaymentConnectorType;
  credentialProviderConfigurations?: CredentialsProviderConfiguration[];
  clientToken?: string;
}
export interface UpdatePaymentConnectorResponse {
  paymentConnectorId: string;
  paymentManagerId: string;
  name: string;
  type: PaymentConnectorType;
  credentialProviderConfigurations: CredentialsProviderConfiguration[];
  lastUpdatedAt: Date;
  status: PaymentConnectorStatus;
  authorizationUrl?: string;
}
export interface UpdatePaymentCredentialProviderRequest {
  name: string;
  credentialProviderVendor: PaymentCredentialProviderVendorType;
  providerConfigurationInput: PaymentProviderConfigurationInput;
}
export interface UpdatePaymentCredentialProviderResponse {
  name: string;
  credentialProviderVendor: PaymentCredentialProviderVendorType;
  credentialProviderArn: string;
  providerConfigurationOutput: PaymentProviderConfigurationOutput;
  createdTime: Date;
  lastUpdatedTime: Date;
}
export interface UpdatePaymentManagerRequest {
  paymentManagerId: string;
  description?: string;
  authorizerType?: PaymentsAuthorizerType;
  authorizerConfiguration?: AuthorizerConfiguration;
  roleArn?: string;
  clientToken?: string;
  kmsKeyArn?: string;
}
export interface UpdatePaymentManagerResponse {
  paymentManagerArn: string;
  paymentManagerId: string;
  name: string;
  authorizerType: PaymentsAuthorizerType;
  roleArn: string;
  workloadIdentityDetails?: WorkloadIdentityDetails;
  lastUpdatedAt: Date;
  status: PaymentManagerStatus;
  kmsKeyArn?: string;
}
export interface UpdatePolicyRequest {
  policyEngineId: string;
  policyId: string;
  description?: UpdatedDescription;
  definition?: PolicyDefinition;
  validationMode?: PolicyValidationMode;
  enforcementMode?: EnforcementMode;
}
export interface UpdatePolicyResponse {
  policyId: string;
  name: string;
  policyEngineId: string;
  createdAt: Date;
  updatedAt: Date;
  policyArn: string;
  status: PolicyStatus;
  enforcementMode?: EnforcementMode;
  definition: PolicyDefinition;
  description?: string | redacted.Redacted<string>;
  statusReasons: string[];
}
export interface UpdatePolicyEngineRequest {
  policyEngineId: string;
  description?: UpdatedDescription;
}
export interface UpdatePolicyEngineResponse {
  policyEngineId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  policyEngineArn: string;
  status: PolicyEngineStatus;
  encryptionKeyArn?: string;
  description?: string | redacted.Redacted<string>;
  statusReasons: string[];
}
export interface UpdatedApprovalConfiguration {
  optionalValue?: ApprovalConfiguration;
}
export interface UpdateRegistryRequest {
  registryId: string;
  name?: string;
  description?: UpdatedDescription;
  authorizerConfiguration?: UpdatedAuthorizerConfiguration;
  approvalConfiguration?: UpdatedApprovalConfiguration;
}
export interface UpdateRegistryResponse {
  name: string;
  description?: string | redacted.Redacted<string>;
  registryId: string;
  registryArn: string;
  authorizerType?: RegistryAuthorizerType;
  authorizerConfiguration?: AuthorizerConfiguration;
  approvalConfiguration?: ApprovalConfiguration;
  status: RegistryStatus;
  statusReason?: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface UpdatedServerDefinition {
  optionalValue?: ServerDefinition;
}
export interface UpdatedToolsDefinition {
  optionalValue?: ToolsDefinition;
}
export interface UpdatedMcpDescriptorFields {
  server?: UpdatedServerDefinition;
  tools?: UpdatedToolsDefinition;
}
export interface UpdatedMcpDescriptor {
  optionalValue?: UpdatedMcpDescriptorFields;
}
export interface UpdatedA2aDescriptor {
  optionalValue?: A2aDescriptor;
}
export interface UpdatedCustomDescriptor {
  optionalValue?: CustomDescriptor;
}
export interface UpdatedSkillMdDefinition {
  optionalValue?: SkillMdDefinition;
}
export interface UpdatedSkillDefinition {
  optionalValue?: SkillDefinition;
}
export interface UpdatedAgentSkillsDescriptorFields {
  skillMd?: UpdatedSkillMdDefinition;
  skillDefinition?: UpdatedSkillDefinition;
}
export interface UpdatedAgentSkillsDescriptor {
  optionalValue?: UpdatedAgentSkillsDescriptorFields;
}
export interface UpdatedDescriptorsUnion {
  mcp?: UpdatedMcpDescriptor;
  a2a?: UpdatedA2aDescriptor;
  custom?: UpdatedCustomDescriptor;
  agentSkills?: UpdatedAgentSkillsDescriptor;
}
export interface UpdatedDescriptors {
  optionalValue?: UpdatedDescriptorsUnion;
}
export interface UpdatedSynchronizationType {
  optionalValue?: SynchronizationType;
}
export interface UpdatedSynchronizationConfiguration {
  optionalValue?: SynchronizationConfiguration;
}
export interface UpdateRegistryRecordRequest {
  registryId: string;
  recordId: string;
  name?: string;
  description?: UpdatedDescription;
  descriptorType?: DescriptorType;
  descriptors?: UpdatedDescriptors;
  recordVersion?: string;
  synchronizationType?: UpdatedSynchronizationType;
  synchronizationConfiguration?: UpdatedSynchronizationConfiguration;
  triggerSynchronization?: boolean;
}
export interface UpdateRegistryRecordResponse {
  registryArn: string;
  recordArn: string;
  recordId: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  descriptorType: DescriptorType;
  descriptors: Descriptors;
  recordVersion?: string;
  status: RegistryRecordStatus;
  createdAt: Date;
  updatedAt: Date;
  statusReason?: string;
  synchronizationType?: SynchronizationType;
  synchronizationConfiguration?: SynchronizationConfiguration;
}
export interface UpdateRegistryRecordStatusRequest {
  registryId: string;
  recordId: string;
  status: RegistryRecordStatus;
  statusReason: string;
}
export interface UpdateRegistryRecordStatusResponse {
  registryArn: string;
  recordArn: string;
  recordId: string;
  status: RegistryRecordStatus;
  statusReason: string;
  updatedAt: Date;
}
export interface UpdateWorkloadIdentityRequest {
  name: string;
  allowedResourceOauth2ReturnUrls?: string[];
}
export interface UpdateWorkloadIdentityResponse {
  name: string;
  workloadIdentityArn: string;
  allowedResourceOauth2ReturnUrls?: string[];
  createdTime: Date;
  lastUpdatedTime: Date;
}
export type NonBlankString = string;
export type ValidationExceptionReason =
  | "CannotParse"
  | "FieldValidationFailed"
  | "IdempotentParameterMismatchException"
  | "EventInOtherSession"
  | "ResourceConflict"
  | (string & {});
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type AddDatasetExamplesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds examples to the dataset's DRAFT. All examples are validated against the dataset's schema type before any writes occur. If any example fails validation, the entire batch is rejected (all-or-nothing semantics).
 */
export const addDatasetExamples: API.OperationMethod<
  AddDatasetExamplesRequest,
  AddDatasetExamplesResponse,
  AddDatasetExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4, __c0, 4) as any as S.Schema<AddDatasetExamplesRequest>,
  output: __S(6, __c0, 6) as any as S.Schema<AddDatasetExamplesResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddDatasetExamples",
}));

export type BatchPutGatewayRateLimitsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Atomically creates or updates multiple rate limits for a gateway. The operation updates existing limits with matching keys and creates new limits for new keys. If the operation fails, the service applies no changes. Retry the request after resolving the issue.
 */
export const batchPutGatewayRateLimits: API.OperationMethod<
  BatchPutGatewayRateLimitsRequest,
  BatchPutGatewayRateLimitsResponse,
  BatchPutGatewayRateLimitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14, __c1, 6) as any as S.Schema<BatchPutGatewayRateLimitsRequest>,
  output: __S(17, __c2, 1) as any as S.Schema<BatchPutGatewayRateLimitsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchPutGatewayRateLimits",
}));

export type CreateAgentRuntimeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Bedrock AgentCore Runtime.
 */
export const createAgentRuntime: API.OperationMethod<
  CreateAgentRuntimeRequest,
  CreateAgentRuntimeResponse,
  CreateAgentRuntimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49, __c6, 1) as any as S.Schema<CreateAgentRuntimeRequest>,
  output: __S(51, __c6, 3) as any as S.Schema<CreateAgentRuntimeResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAgentRuntime",
}));

export type CreateAgentRuntimeEndpointError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an AgentCore Runtime endpoint.
 */
export const createAgentRuntimeEndpoint: API.OperationMethod<
  CreateAgentRuntimeEndpointRequest,
  CreateAgentRuntimeEndpointResponse,
  CreateAgentRuntimeEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52, __c6, 4) as any as S.Schema<CreateAgentRuntimeEndpointRequest>,
  output: __S(53, __c6, 5) as any as S.Schema<CreateAgentRuntimeEndpointResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAgentRuntimeEndpoint",
}));

export type CreateApiKeyCredentialProviderError =
  | AccessDeniedException
  | ConflictException
  | DecryptionFailure
  | EncryptionFailure
  | InternalServerException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new API key credential provider.
 */
export const createApiKeyCredentialProvider: API.OperationMethod<
  CreateApiKeyCredentialProviderRequest,
  CreateApiKeyCredentialProviderResponse,
  CreateApiKeyCredentialProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<CreateApiKeyCredentialProviderRequest>,
  output: __S(57, __c7, 1) as any as S.Schema<CreateApiKeyCredentialProviderResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DecryptionFailure,
    EncryptionFailure,
    InternalServerException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApiKeyCredentialProvider",
}));

export type CreateBrowserError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a custom browser.
 */
export const createBrowser: API.OperationMethod<
  CreateBrowserRequest,
  CreateBrowserResponse,
  CreateBrowserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<CreateBrowserRequest>,
  output: __S(71, __c8, 7) as any as S.Schema<CreateBrowserResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBrowser",
}));

export type CreateBrowserProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a browser profile in Amazon Bedrock AgentCore. A browser profile stores persistent browser data such as cookies, local storage, session storage, and browsing history that can be saved from browser sessions and reused in subsequent sessions.
 */
export const createBrowserProfile: API.OperationMethod<
  CreateBrowserProfileRequest,
  CreateBrowserProfileResponse,
  CreateBrowserProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72, __c9, 0) as any as S.Schema<CreateBrowserProfileRequest>,
  output: __S(73, __c9, 1) as any as S.Schema<CreateBrowserProfileResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBrowserProfile",
}));

export type CreateCapacityProviderError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | RetryableConflictException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a capacity provider. A capacity provider defines the Amazon EC2 infrastructure for AgentCore Runtime, including the operating system, allowed instance types, networking, and storage. It also specifies the IAM permissions that AgentCore uses to manage those instances.
 *
 * The capacity provider name must be unique within your account. After you create the capacity provider, it enters a `CREATING` state and transitions to `READY` when it is available for use.
 */
export const createCapacityProvider: API.OperationMethod<
  CreateCapacityProviderInput,
  CreateCapacityProviderOutput,
  CreateCapacityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93, __c11, 5) as any as S.Schema<CreateCapacityProviderInput>,
  output: __S(94, __c11, 6) as any as S.Schema<CreateCapacityProviderOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    RetryableConflictException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCapacityProvider",
}));

export type CreateCodeInterpreterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a custom code interpreter.
 */
export const createCodeInterpreter: API.OperationMethod<
  CreateCodeInterpreterRequest,
  CreateCodeInterpreterResponse,
  CreateCodeInterpreterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95, __c11, 7) as any as S.Schema<CreateCodeInterpreterRequest>,
  output: __S(96, __c12, 0) as any as S.Schema<CreateCodeInterpreterResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCodeInterpreter",
}));

export type CreateConfigurationBundleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new configuration bundle resource. A configuration bundle stores versioned component configurations for agent evaluation workflows.
 */
export const createConfigurationBundle: API.OperationMethod<
  CreateConfigurationBundleRequest,
  CreateConfigurationBundleResponse,
  CreateConfigurationBundleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(100, __c12, 4) as any as S.Schema<CreateConfigurationBundleRequest>,
  output: __S(101, __c12, 5) as any as S.Schema<CreateConfigurationBundleResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConfigurationBundle",
}));

export type CreateConsentPortalError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new consent portal.
 */
export const createConsentPortal: API.OperationMethod<
  CreateConsentPortalRequest,
  CreateConsentPortalResponse,
  CreateConsentPortalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(105, __c13, 1) as any as S.Schema<CreateConsentPortalRequest>,
  output: __S(106, __c13, 2) as any as S.Schema<CreateConsentPortalResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConsentPortal",
}));

export type CreateDatasetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new dataset resource asynchronously. Returns immediately with status CREATING. Poll `GetDataset` until status transitions to ACTIVE or CREATE_FAILED.
 */
export const createDataset: API.OperationMethod<
  CreateDatasetRequest,
  CreateDatasetResponse,
  CreateDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(107, __c13, 3) as any as S.Schema<CreateDatasetRequest>,
  output: __S(108, __c13, 4) as any as S.Schema<CreateDatasetResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataset",
}));

export type CreateDatasetVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Publishes the current DRAFT as a new numbered version. The DRAFT is preserved and remains editable after publishing. Returns immediately with status UPDATING. Poll `GetDataset` until status transitions to ACTIVE or UPDATE_FAILED.
 */
export const createDatasetVersion: API.OperationMethod<
  CreateDatasetVersionRequest,
  CreateDatasetVersionResponse,
  CreateDatasetVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109, __c13, 5) as any as S.Schema<CreateDatasetVersionRequest>,
  output: __S(110, __c13, 6) as any as S.Schema<CreateDatasetVersionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDatasetVersion",
}));

export type CreateEvaluatorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a custom evaluator for agent quality assessment. Custom evaluators can use either LLM-as-a-Judge configurations with user-defined prompts, rating scales, and model settings, or code-based configurations with customer-managed Lambda functions to evaluate agent performance at tool call, trace, or session levels.
 */
export const createEvaluator: API.OperationMethod<
  CreateEvaluatorRequest,
  CreateEvaluatorResponse,
  CreateEvaluatorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126, __c15, 6) as any as S.Schema<CreateEvaluatorRequest>,
  output: __S(127, __c15, 7) as any as S.Schema<CreateEvaluatorResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEvaluator",
}));

export type CreateGatewayError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a gateway for Amazon Bedrock Agent. A gateway serves as an integration point between your agent and external services.
 *
 * If you specify `CUSTOM_JWT` as the `authorizerType`, you must provide an `authorizerConfiguration`.
 */
export const createGateway: API.OperationMethod<
  CreateGatewayRequest,
  CreateGatewayResponse,
  CreateGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(142, __c17, 6) as any as S.Schema<CreateGatewayRequest>,
  output: __S(146, __c18, 2) as any as S.Schema<CreateGatewayResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGateway",
}));

export type CreateGatewayRateLimitError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a rate limit for a gateway. Rate limits define throttling rules for each dimension that control request rates, token consumption rates, and concurrent connections through the gateway.
 */
export const createGatewayRateLimit: API.OperationMethod<
  CreateGatewayRateLimitRequest,
  CreateGatewayRateLimitResponse,
  CreateGatewayRateLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(147, __c18, 3) as any as S.Schema<CreateGatewayRateLimitRequest>,
  output: __S(148, __c18, 4) as any as S.Schema<CreateGatewayRateLimitResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGatewayRateLimit",
}));

export type CreateGatewayRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a rule for a gateway. Rules define conditions and actions that control how requests are routed and processed through the gateway, including principal-based access control and path-based routing.
 */
export const createGatewayRule: API.OperationMethod<
  CreateGatewayRuleRequest,
  CreateGatewayRuleResponse,
  CreateGatewayRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(169, __c21, 1) as any as S.Schema<CreateGatewayRuleRequest>,
  output: __S(171, __c21, 3) as any as S.Schema<CreateGatewayRuleResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGatewayRule",
}));

export type CreateGatewayTargetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a target for a gateway. A target defines an endpoint that the gateway can connect to.
 */
export const createGatewayTarget: API.OperationMethod<
  CreateGatewayTargetRequest,
  CreateGatewayTargetResponse,
  CreateGatewayTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(223, __c27, 7) as any as S.Schema<CreateGatewayTargetRequest>,
  output: __S(228, __c28, 4) as any as S.Schema<CreateGatewayTargetResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGatewayTarget",
}));

export type CreateHarnessError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Operation to create a harness.
 */
export const createHarness: API.OperationMethod<
  CreateHarnessRequest,
  CreateHarnessResponse,
  CreateHarnessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(271, __c33, 7) as any as S.Schema<CreateHarnessRequest>,
  output: __S(275, __c34, 3) as any as S.Schema<CreateHarnessResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateHarness",
}));

export type CreateHarnessEndpointError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Operation to create a harness endpoint.
 */
export const createHarnessEndpoint: API.OperationMethod<
  CreateHarnessEndpointRequest,
  CreateHarnessEndpointResponse,
  CreateHarnessEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(276, __c34, 4) as any as S.Schema<CreateHarnessEndpointRequest>,
  output: __S(278, __c34, 6) as any as S.Schema<CreateHarnessEndpointResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateHarnessEndpoint",
}));

export type CreateMemoryError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new Amazon Bedrock AgentCore Memory resource.
 */
export const createMemory: API.OperationMethod<
  CreateMemoryInput,
  CreateMemoryOutput,
  CreateMemoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(318, __c39, 6) as any as S.Schema<CreateMemoryInput>,
  output: __S(331, __c41, 3) as any as S.Schema<CreateMemoryOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMemory",
}));

export type CreateOauth2CredentialProviderError =
  | AccessDeniedException
  | ConflictException
  | DecryptionFailure
  | EncryptionFailure
  | InternalServerException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new OAuth2 credential provider.
 */
export const createOauth2CredentialProvider: API.OperationMethod<
  CreateOauth2CredentialProviderRequest,
  CreateOauth2CredentialProviderResponse,
  CreateOauth2CredentialProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(344, __c43, 0) as any as S.Schema<CreateOauth2CredentialProviderRequest>,
  output: __S(348, __c43, 4) as any as S.Schema<CreateOauth2CredentialProviderResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DecryptionFailure,
    EncryptionFailure,
    InternalServerException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateOauth2CredentialProvider",
}));

export type CreateOnlineEvaluationConfigError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an online evaluation configuration for continuous monitoring of agent performance. Online evaluation automatically samples live traffic from CloudWatch logs at specified rates and applies evaluators to assess agent quality in production.
 */
export const createOnlineEvaluationConfig: API.OperationMethod<
  CreateOnlineEvaluationConfigRequest,
  CreateOnlineEvaluationConfigResponse,
  CreateOnlineEvaluationConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(364, __c45, 4) as any as S.Schema<CreateOnlineEvaluationConfigRequest>,
  output: __S(365, __c45, 5) as any as S.Schema<CreateOnlineEvaluationConfigResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateOnlineEvaluationConfig",
}));

export type CreatePaymentConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | SubscriptionRequiredException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new payment connector for a payment manager. A payment connector integrates with a supported payment provider to enable payment processing capabilities.
 */
export const createPaymentConnector: API.OperationMethod<
  CreatePaymentConnectorRequest,
  CreatePaymentConnectorResponse,
  CreatePaymentConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(369, __c46, 1) as any as S.Schema<CreatePaymentConnectorRequest>,
  output: __S(370, __c46, 2) as any as S.Schema<CreatePaymentConnectorResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    SubscriptionRequiredException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePaymentConnector",
}));

export type CreatePaymentCredentialProviderError =
  | AccessDeniedException
  | ConflictException
  | DecryptionFailure
  | EncryptionFailure
  | InternalServerException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new payment credential provider for storing authentication credentials used by payment connectors to communicate with external payment providers.
 */
export const createPaymentCredentialProvider: API.OperationMethod<
  CreatePaymentCredentialProviderRequest,
  CreatePaymentCredentialProviderResponse,
  CreatePaymentCredentialProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(374, __c46, 6) as any as S.Schema<CreatePaymentCredentialProviderRequest>,
  output: __S(378, __c47, 2) as any as S.Schema<CreatePaymentCredentialProviderResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DecryptionFailure,
    EncryptionFailure,
    InternalServerException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePaymentCredentialProvider",
}));

export type CreatePaymentManagerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new payment manager in your Amazon Web Services account. A payment manager serves as the top-level resource for managing payment processing capabilities, including payment connectors that integrate with supported payment providers.
 *
 * If you specify `CUSTOM_JWT` as the `authorizerType`, you must provide an `authorizerConfiguration`.
 */
export const createPaymentManager: API.OperationMethod<
  CreatePaymentManagerRequest,
  CreatePaymentManagerResponse,
  CreatePaymentManagerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(379, __c47, 3) as any as S.Schema<CreatePaymentManagerRequest>,
  output: __S(380, __c47, 4) as any as S.Schema<CreatePaymentManagerResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePaymentManager",
}));

export type CreatePolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a policy within the AgentCore Policy system. Policies provide real-time, deterministic control over agentic interactions with AgentCore Gateway. Using Cedar or Dogwood, you can define fine-grained policies that specify which interactions with Gateway tools are permitted based on input parameters and OAuth claims, ensuring agents operate within defined boundaries and business rules. The policy is validated during creation against the Cedar schema generated from the Gateway's tools' input schemas, which defines the available tools, their parameters, and expected data types. This is an asynchronous operation. Use the GetPolicy operation to poll the `status` field to track completion.
 *
 * If the new policy is a temporal policy, creating it invalidates the policy engine's active temporal sessions. For more information about temporal policy sessions, see session-based temporal policies. The policy engine returns an HTTP 409 `ConflictException` to in-flight sessions. To resume, you must start a new session with a new session ID.
 */
export const createPolicy: API.OperationMethod<
  CreatePolicyRequest,
  CreatePolicyResponse,
  CreatePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(384, __c48, 0) as any as S.Schema<CreatePolicyRequest>,
  output: __S(385, __c48, 1) as any as S.Schema<CreatePolicyResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePolicy",
}));

export type CreatePolicyEngineError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new policy engine within the AgentCore Policy system. A policy engine is a collection of policies that evaluates and authorizes agent tool calls. When associated with Gateways (each Gateway can be associated with at most one policy engine, but multiple Gateways can be associated with the same engine), the policy engine intercepts all agent requests and determines whether to allow or deny each action based on the defined policies. This is an asynchronous operation. Use the GetPolicyEngine operation to poll the `status` field to track completion.
 */
export const createPolicyEngine: API.OperationMethod<
  CreatePolicyEngineRequest,
  CreatePolicyEngineResponse,
  CreatePolicyEngineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(386, __c48, 2) as any as S.Schema<CreatePolicyEngineRequest>,
  output: __S(387, __c48, 3) as any as S.Schema<CreatePolicyEngineResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePolicyEngine",
}));

export type CreateRegistryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new registry in your Amazon Web Services account. A registry serves as a centralized catalog for organizing and managing registry records, including MCP servers, A2A agents, agent skills, and custom resource types.
 *
 * If you specify `CUSTOM_JWT` as the `authorizerType`, you must provide an `authorizerConfiguration`.
 */
export const createRegistry: API.OperationMethod<
  CreateRegistryRequest,
  CreateRegistryResponse,
  CreateRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(389, __c48, 5) as any as S.Schema<CreateRegistryRequest>,
  output: __S(390, __c48, 6) as any as S.Schema<CreateRegistryResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRegistry",
}));

export type CreateRegistryRecordError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new registry record within the specified registry. A registry record represents an individual AI resource's metadata in the registry. This could be an MCP server (and associated tools), A2A agent, agent skill, or a custom resource with a custom schema.
 *
 * The record is processed asynchronously and returns HTTP 202 Accepted.
 */
export const createRegistryRecord: API.OperationMethod<
  CreateRegistryRecordRequest,
  CreateRegistryRecordResponse,
  CreateRegistryRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(405, __c50, 5) as any as S.Schema<CreateRegistryRecordRequest>,
  output: __S(406, __c50, 6) as any as S.Schema<CreateRegistryRecordResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRegistryRecord",
}));

export type CreateWorkloadIdentityError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new workload identity.
 */
export const createWorkloadIdentity: API.OperationMethod<
  CreateWorkloadIdentityRequest,
  CreateWorkloadIdentityResponse,
  CreateWorkloadIdentityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(407, __c50, 7) as any as S.Schema<CreateWorkloadIdentityRequest>,
  output: __S(408, __c51, 0) as any as S.Schema<CreateWorkloadIdentityResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWorkloadIdentity",
}));

export type DeleteAgentRuntimeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes an Amazon Bedrock AgentCore Runtime, or a single version of an AgentCore Runtime when you provide the version qualifier.
 */
export const deleteAgentRuntime: API.OperationMethod<
  DeleteAgentRuntimeRequest,
  DeleteAgentRuntimeResponse,
  DeleteAgentRuntimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(409, __c51, 1) as any as S.Schema<DeleteAgentRuntimeRequest>,
  output: __S(410, __c51, 2) as any as S.Schema<DeleteAgentRuntimeResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAgentRuntime",
}));

export type DeleteAgentRuntimeEndpointError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes an AgentCore Runtime endpoint.
 */
export const deleteAgentRuntimeEndpoint: API.OperationMethod<
  DeleteAgentRuntimeEndpointRequest,
  DeleteAgentRuntimeEndpointResponse,
  DeleteAgentRuntimeEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(411, __c51, 3) as any as S.Schema<DeleteAgentRuntimeEndpointRequest>,
  output: __S(412, __c51, 4) as any as S.Schema<DeleteAgentRuntimeEndpointResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAgentRuntimeEndpoint",
}));

export type DeleteApiKeyCredentialProviderError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an API key credential provider.
 */
export const deleteApiKeyCredentialProvider: API.OperationMethod<
  DeleteApiKeyCredentialProviderRequest,
  DeleteApiKeyCredentialProviderResponse,
  DeleteApiKeyCredentialProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(413, __c51, 5) as any as S.Schema<DeleteApiKeyCredentialProviderRequest>,
  output: __S(259, __c32, 3) as any as S.Schema<DeleteApiKeyCredentialProviderResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApiKeyCredentialProvider",
}));

export type DeleteBrowserError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a custom browser.
 */
export const deleteBrowser: API.OperationMethod<
  DeleteBrowserRequest,
  DeleteBrowserResponse,
  DeleteBrowserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(414, __c51, 6) as any as S.Schema<DeleteBrowserRequest>,
  output: __S(415, __c51, 7) as any as S.Schema<DeleteBrowserResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBrowser",
}));

export type DeleteBrowserProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a browser profile.
 */
export const deleteBrowserProfile: API.OperationMethod<
  DeleteBrowserProfileRequest,
  DeleteBrowserProfileResponse,
  DeleteBrowserProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(416, __c52, 0) as any as S.Schema<DeleteBrowserProfileRequest>,
  output: __S(417, __c52, 1) as any as S.Schema<DeleteBrowserProfileResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBrowserProfile",
}));

export type DeleteCapacityProviderError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | RetryableConflictException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a capacity provider. Before you delete a capacity provider, disassociate all agent runtimes and runtime versions that reference it. If any references remain, the operation fails.
 */
export const deleteCapacityProvider: API.OperationMethod<
  DeleteCapacityProviderInput,
  DeleteCapacityProviderOutput,
  DeleteCapacityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(418, __c52, 2) as any as S.Schema<DeleteCapacityProviderInput>,
  output: __S(419, __c52, 3) as any as S.Schema<DeleteCapacityProviderOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    RetryableConflictException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCapacityProvider",
}));

export type DeleteCodeInterpreterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a custom code interpreter.
 */
export const deleteCodeInterpreter: API.OperationMethod<
  DeleteCodeInterpreterRequest,
  DeleteCodeInterpreterResponse,
  DeleteCodeInterpreterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(420, __c52, 4) as any as S.Schema<DeleteCodeInterpreterRequest>,
  output: __S(421, __c52, 5) as any as S.Schema<DeleteCodeInterpreterResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCodeInterpreter",
}));

export type DeleteConfigurationBundleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a configuration bundle and all of its versions.
 */
export const deleteConfigurationBundle: API.OperationMethod<
  DeleteConfigurationBundleRequest,
  DeleteConfigurationBundleResponse,
  DeleteConfigurationBundleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(422, __c52, 6) as any as S.Schema<DeleteConfigurationBundleRequest>,
  output: __S(423, __c52, 7) as any as S.Schema<DeleteConfigurationBundleResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfigurationBundle",
}));

export type DeleteConsentPortalError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a consent portal.
 */
export const deleteConsentPortal: API.OperationMethod<
  DeleteConsentPortalRequest,
  DeleteConsentPortalResponse,
  DeleteConsentPortalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(424, __c53, 0) as any as S.Schema<DeleteConsentPortalRequest>,
  output: __S(425, __c53, 1) as any as S.Schema<DeleteConsentPortalResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConsentPortal",
}));

export type DeleteDatasetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a dataset version or an entire dataset asynchronously. If `datasetVersion` is absent, deletes all versions and the dataset record itself. If provided, deletes only that specific version.
 */
export const deleteDataset: API.OperationMethod<
  DeleteDatasetRequest,
  DeleteDatasetResponse,
  DeleteDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(426, __c53, 2) as any as S.Schema<DeleteDatasetRequest>,
  output: __S(427, __c53, 3) as any as S.Schema<DeleteDatasetResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataset",
}));

export type DeleteDatasetExamplesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes specific examples by ID from DRAFT. All example IDs are validated before any deletes occur. If any ID does not exist in DRAFT, the entire batch is rejected (all-or-nothing semantics).
 */
export const deleteDatasetExamples: API.OperationMethod<
  DeleteDatasetExamplesRequest,
  DeleteDatasetExamplesResponse,
  DeleteDatasetExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(428, __c53, 4) as any as S.Schema<DeleteDatasetExamplesRequest>,
  output: __S(429, __c53, 5) as any as S.Schema<DeleteDatasetExamplesResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDatasetExamples",
}));

export type DeleteEvaluatorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a custom evaluator. Builtin evaluators cannot be deleted. The evaluator must not be referenced by any active online evaluation configurations.
 */
export const deleteEvaluator: API.OperationMethod<
  DeleteEvaluatorRequest,
  DeleteEvaluatorResponse,
  DeleteEvaluatorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(430, __c53, 6) as any as S.Schema<DeleteEvaluatorRequest>,
  output: __S(431, __c53, 7) as any as S.Schema<DeleteEvaluatorResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEvaluator",
}));

export type DeleteGatewayError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a gateway.
 */
export const deleteGateway: API.OperationMethod<
  DeleteGatewayRequest,
  DeleteGatewayResponse,
  DeleteGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(432, __c54, 0) as any as S.Schema<DeleteGatewayRequest>,
  output: __S(433, __c54, 1) as any as S.Schema<DeleteGatewayResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGateway",
}));

export type DeleteGatewayRateLimitError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a gateway rate limit.
 */
export const deleteGatewayRateLimit: API.OperationMethod<
  DeleteGatewayRateLimitRequest,
  DeleteGatewayRateLimitResponse,
  DeleteGatewayRateLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(434, __c54, 2) as any as S.Schema<DeleteGatewayRateLimitRequest>,
  output: __S(435, __c54, 3) as any as S.Schema<DeleteGatewayRateLimitResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGatewayRateLimit",
}));

export type DeleteGatewayRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a gateway rule.
 */
export const deleteGatewayRule: API.OperationMethod<
  DeleteGatewayRuleRequest,
  DeleteGatewayRuleResponse,
  DeleteGatewayRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(436, __c54, 4) as any as S.Schema<DeleteGatewayRuleRequest>,
  output: __S(437, __c54, 5) as any as S.Schema<DeleteGatewayRuleResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGatewayRule",
}));

export type DeleteGatewayTargetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a gateway target.
 *
 * You cannot delete a target that is in a pending authorization state (`CREATE_PENDING_AUTH`, `UPDATE_PENDING_AUTH`, or `SYNCHRONIZE_PENDING_AUTH`). Wait for the authorization to complete or fail before deleting the target.
 */
export const deleteGatewayTarget: API.OperationMethod<
  DeleteGatewayTargetRequest,
  DeleteGatewayTargetResponse,
  DeleteGatewayTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(438, __c54, 6) as any as S.Schema<DeleteGatewayTargetRequest>,
  output: __S(439, __c54, 7) as any as S.Schema<DeleteGatewayTargetResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGatewayTarget",
}));

export type DeleteHarnessError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Operation to delete a Harness.
 */
export const deleteHarness: API.OperationMethod<
  DeleteHarnessRequest,
  DeleteHarnessResponse,
  DeleteHarnessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(440, __c55, 0) as any as S.Schema<DeleteHarnessRequest>,
  output: __S(441, __c55, 1) as any as S.Schema<DeleteHarnessResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteHarness",
}));

export type DeleteHarnessEndpointError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Operation to delete a harness endpoint.
 */
export const deleteHarnessEndpoint: API.OperationMethod<
  DeleteHarnessEndpointRequest,
  DeleteHarnessEndpointResponse,
  DeleteHarnessEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(442, __c55, 2) as any as S.Schema<DeleteHarnessEndpointRequest>,
  output: __S(278, __c34, 6) as any as S.Schema<DeleteHarnessEndpointResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteHarnessEndpoint",
}));

export type DeleteMemoryError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Bedrock AgentCore Memory resource. When you delete a memory resource, it is permanently removed.
 */
export const deleteMemory: API.OperationMethod<
  DeleteMemoryInput,
  DeleteMemoryOutput,
  DeleteMemoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(443, __c55, 3) as any as S.Schema<DeleteMemoryInput>,
  output: __S(444, __c55, 4) as any as S.Schema<DeleteMemoryOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMemory",
}));

export type DeleteOauth2CredentialProviderError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an OAuth2 credential provider.
 */
export const deleteOauth2CredentialProvider: API.OperationMethod<
  DeleteOauth2CredentialProviderRequest,
  DeleteOauth2CredentialProviderResponse,
  DeleteOauth2CredentialProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(445, __c55, 5) as any as S.Schema<DeleteOauth2CredentialProviderRequest>,
  output: __S(259, __c32, 3) as any as S.Schema<DeleteOauth2CredentialProviderResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteOauth2CredentialProvider",
}));

export type DeleteOnlineEvaluationConfigError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an online evaluation configuration and stops any ongoing evaluation processes associated with it.
 */
export const deleteOnlineEvaluationConfig: API.OperationMethod<
  DeleteOnlineEvaluationConfigRequest,
  DeleteOnlineEvaluationConfigResponse,
  DeleteOnlineEvaluationConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(446, __c55, 6) as any as S.Schema<DeleteOnlineEvaluationConfigRequest>,
  output: __S(447, __c55, 7) as any as S.Schema<DeleteOnlineEvaluationConfigResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteOnlineEvaluationConfig",
}));

export type DeletePaymentConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a payment connector.
 */
export const deletePaymentConnector: API.OperationMethod<
  DeletePaymentConnectorRequest,
  DeletePaymentConnectorResponse,
  DeletePaymentConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(448, __c56, 0) as any as S.Schema<DeletePaymentConnectorRequest>,
  output: __S(449, __c56, 1) as any as S.Schema<DeletePaymentConnectorResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePaymentConnector",
}));

export type DeletePaymentCredentialProviderError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a payment credential provider and its associated stored credentials.
 */
export const deletePaymentCredentialProvider: API.OperationMethod<
  DeletePaymentCredentialProviderRequest,
  DeletePaymentCredentialProviderResponse,
  DeletePaymentCredentialProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(450, __c56, 2) as any as S.Schema<DeletePaymentCredentialProviderRequest>,
  output: __S(259, __c32, 3) as any as S.Schema<DeletePaymentCredentialProviderResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePaymentCredentialProvider",
}));

export type DeletePaymentManagerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a payment manager. All payment connectors associated with the payment manager must be deleted before the payment manager can be deleted. This operation initiates the deletion process asynchronously.
 */
export const deletePaymentManager: API.OperationMethod<
  DeletePaymentManagerRequest,
  DeletePaymentManagerResponse,
  DeletePaymentManagerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(451, __c56, 3) as any as S.Schema<DeletePaymentManagerRequest>,
  output: __S(452, __c56, 4) as any as S.Schema<DeletePaymentManagerResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePaymentManager",
}));

export type DeletePolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing policy from the AgentCore Policy system. Once deleted, the policy can no longer be used for agent behavior control and all references to it become invalid. This is an asynchronous operation. Use the `GetPolicy` operation to poll the `status` field to track completion.
 */
export const deletePolicy: API.OperationMethod<
  DeletePolicyRequest,
  DeletePolicyResponse,
  DeletePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(453, __c56, 5) as any as S.Schema<DeletePolicyRequest>,
  output: __S(385, __c48, 1) as any as S.Schema<DeletePolicyResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePolicy",
}));

export type DeletePolicyEngineError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing policy engine from the AgentCore Policy system. The policy engine must not have any associated policies before deletion. Once deleted, the policy engine and all its configurations become unavailable for policy management and evaluation. This is an asynchronous operation. Use the `GetPolicyEngine` operation to poll the `status` field to track completion.
 */
export const deletePolicyEngine: API.OperationMethod<
  DeletePolicyEngineRequest,
  DeletePolicyEngineResponse,
  DeletePolicyEngineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(454, __c56, 6) as any as S.Schema<DeletePolicyEngineRequest>,
  output: __S(387, __c48, 3) as any as S.Schema<DeletePolicyEngineResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePolicyEngine",
}));

export type DeleteRegistryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a registry. The registry must contain zero records before it can be deleted. This operation initiates the deletion process asynchronously.
 */
export const deleteRegistry: API.OperationMethod<
  DeleteRegistryRequest,
  DeleteRegistryResponse,
  DeleteRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(455, __c56, 7) as any as S.Schema<DeleteRegistryRequest>,
  output: __S(456, __c57, 0) as any as S.Schema<DeleteRegistryResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRegistry",
}));

export type DeleteRegistryRecordError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a registry record. The record's status transitions to `DELETING` and the record is removed asynchronously.
 */
export const deleteRegistryRecord: API.OperationMethod<
  DeleteRegistryRecordRequest,
  DeleteRegistryRecordResponse,
  DeleteRegistryRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(457, __c57, 1) as any as S.Schema<DeleteRegistryRecordRequest>,
  output: __S(425, __c53, 1) as any as S.Schema<DeleteRegistryRecordResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRegistryRecord",
}));

export type DeleteResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the resource-based policy for a specified resource.
 *
 * This feature is currently available only for AgentCore Runtime and Gateway.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(458, __c57, 2) as any as S.Schema<DeleteResourcePolicyRequest>,
  output: __S(425, __c53, 1) as any as S.Schema<DeleteResourcePolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicy",
}));

export type DeleteWorkloadIdentityError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a workload identity.
 */
export const deleteWorkloadIdentity: API.OperationMethod<
  DeleteWorkloadIdentityRequest,
  DeleteWorkloadIdentityResponse,
  DeleteWorkloadIdentityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(459, __c57, 3) as any as S.Schema<DeleteWorkloadIdentityRequest>,
  output: __S(425, __c53, 1) as any as S.Schema<DeleteWorkloadIdentityResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorkloadIdentity",
}));

export type GetAgentRuntimeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an Amazon Bedrock AgentCore Runtime.
 */
export const getAgentRuntime: API.OperationMethod<
  GetAgentRuntimeRequest,
  GetAgentRuntimeResponse,
  GetAgentRuntimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(460, __c57, 4) as any as S.Schema<GetAgentRuntimeRequest>,
  output: __S(462, __c57, 6) as any as S.Schema<GetAgentRuntimeResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentRuntime",
}));

export type GetAgentRuntimeEndpointError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about an Amazon Secure AgentEndpoint.
 */
export const getAgentRuntimeEndpoint: API.OperationMethod<
  GetAgentRuntimeEndpointRequest,
  GetAgentRuntimeEndpointResponse,
  GetAgentRuntimeEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(463, __c57, 7) as any as S.Schema<GetAgentRuntimeEndpointRequest>,
  output: __S(464, __c58, 0) as any as S.Schema<GetAgentRuntimeEndpointResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentRuntimeEndpoint",
}));

export type GetApiKeyCredentialProviderError =
  | AccessDeniedException
  | DecryptionFailure
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an API key credential provider.
 */
export const getApiKeyCredentialProvider: API.OperationMethod<
  GetApiKeyCredentialProviderRequest,
  GetApiKeyCredentialProviderResponse,
  GetApiKeyCredentialProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(465, __c58, 1) as any as S.Schema<GetApiKeyCredentialProviderRequest>,
  output: __S(466, __c58, 2) as any as S.Schema<GetApiKeyCredentialProviderResponse>,
  errors: [
    AccessDeniedException,
    DecryptionFailure,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApiKeyCredentialProvider",
}));

export type GetBrowserError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets information about a custom browser.
 */
export const getBrowser: API.OperationMethod<
  GetBrowserRequest,
  GetBrowserResponse,
  GetBrowserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(467, __c58, 3) as any as S.Schema<GetBrowserRequest>,
  output: __S(468, __c58, 4) as any as S.Schema<GetBrowserResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBrowser",
}));

export type GetBrowserProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a browser profile.
 */
export const getBrowserProfile: API.OperationMethod<
  GetBrowserProfileRequest,
  GetBrowserProfileResponse,
  GetBrowserProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(469, __c58, 5) as any as S.Schema<GetBrowserProfileRequest>,
  output: __S(470, __c58, 6) as any as S.Schema<GetBrowserProfileResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBrowserProfile",
}));

export type GetCapacityProviderError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a capacity provider, including its status, permissions configuration, and compute configuration.
 */
export const getCapacityProvider: API.OperationMethod<
  GetCapacityProviderInput,
  GetCapacityProviderOutput,
  GetCapacityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(471, __c58, 7) as any as S.Schema<GetCapacityProviderInput>,
  output: __S(472, __c59, 0) as any as S.Schema<GetCapacityProviderOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCapacityProvider",
}));

export type GetCodeInterpreterError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets information about a custom code interpreter.
 */
export const getCodeInterpreter: API.OperationMethod<
  GetCodeInterpreterRequest,
  GetCodeInterpreterResponse,
  GetCodeInterpreterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(473, __c59, 1) as any as S.Schema<GetCodeInterpreterRequest>,
  output: __S(474, __c59, 2) as any as S.Schema<GetCodeInterpreterResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCodeInterpreter",
}));

export type GetConfigurationBundleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the latest version of a configuration bundle. By default, returns the latest version on the mainline branch. Use `GetConfigurationBundleVersion` to retrieve a specific historical version.
 */
export const getConfigurationBundle: API.OperationMethod<
  GetConfigurationBundleRequest,
  GetConfigurationBundleResponse,
  GetConfigurationBundleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(475, __c59, 3) as any as S.Schema<GetConfigurationBundleRequest>,
  output: __S(477, __c59, 5) as any as S.Schema<GetConfigurationBundleResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfigurationBundle",
}));

export type GetConfigurationBundleVersionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a specific version of a configuration bundle by its version identifier.
 */
export const getConfigurationBundleVersion: API.OperationMethod<
  GetConfigurationBundleVersionRequest,
  GetConfigurationBundleVersionResponse,
  GetConfigurationBundleVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(478, __c59, 6) as any as S.Schema<GetConfigurationBundleVersionRequest>,
  output: __S(479, __c59, 7) as any as S.Schema<GetConfigurationBundleVersionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfigurationBundleVersion",
}));

export type GetConsentPortalError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a consent portal.
 */
export const getConsentPortal: API.OperationMethod<
  GetConsentPortalRequest,
  GetConsentPortalResponse,
  GetConsentPortalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(480, __c60, 0) as any as S.Schema<GetConsentPortalRequest>,
  output: __S(481, __c60, 1) as any as S.Schema<GetConsentPortalResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConsentPortal",
}));

export type GetDatasetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves dataset metadata. Use the `datasetVersion` query parameter to retrieve a specific version's metadata. If absent, defaults to DRAFT. For paginated example content, use `ListDatasetExamples`.
 */
export const getDataset: API.OperationMethod<
  GetDatasetRequest,
  GetDatasetResponse,
  GetDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(482, __c60, 2) as any as S.Schema<GetDatasetRequest>,
  output: __S(483, __c60, 3) as any as S.Schema<GetDatasetResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataset",
}));

export type GetEvaluatorError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about an evaluator, including its configuration, status, and metadata. Works with both built-in and custom evaluators.
 */
export const getEvaluator: API.OperationMethod<
  GetEvaluatorRequest,
  GetEvaluatorResponse,
  GetEvaluatorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(484, __c60, 4) as any as S.Schema<GetEvaluatorRequest>,
  output: __S(485, __c60, 5) as any as S.Schema<GetEvaluatorResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEvaluator",
}));

export type GetGatewayError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a specific Gateway.
 */
export const getGateway: API.OperationMethod<
  GetGatewayRequest,
  GetGatewayResponse,
  GetGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(486, __c60, 6) as any as S.Schema<GetGatewayRequest>,
  output: __S(146, __c18, 2) as any as S.Schema<GetGatewayResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGateway",
}));

export type GetGatewayRateLimitError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a gateway rate limit.
 */
export const getGatewayRateLimit: API.OperationMethod<
  GetGatewayRateLimitRequest,
  GetGatewayRateLimitResponse,
  GetGatewayRateLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(487, __c60, 7) as any as S.Schema<GetGatewayRateLimitRequest>,
  output: __S(148, __c18, 4) as any as S.Schema<GetGatewayRateLimitResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGatewayRateLimit",
}));

export type GetGatewayRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific gateway rule.
 */
export const getGatewayRule: API.OperationMethod<
  GetGatewayRuleRequest,
  GetGatewayRuleResponse,
  GetGatewayRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(488, __c61, 0) as any as S.Schema<GetGatewayRuleRequest>,
  output: __S(489, __c61, 1) as any as S.Schema<GetGatewayRuleResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGatewayRule",
}));

export type GetGatewayTargetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a specific gateway target.
 */
export const getGatewayTarget: API.OperationMethod<
  GetGatewayTargetRequest,
  GetGatewayTargetResponse,
  GetGatewayTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(490, __c61, 2) as any as S.Schema<GetGatewayTargetRequest>,
  output: __S(491, __c61, 3) as any as S.Schema<GetGatewayTargetResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGatewayTarget",
}));

export type GetHarnessError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Operation to get a single harness.
 */
export const getHarness: API.OperationMethod<
  GetHarnessRequest,
  GetHarnessResponse,
  GetHarnessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(492, __c61, 4) as any as S.Schema<GetHarnessRequest>,
  output: __S(275, __c34, 3) as any as S.Schema<GetHarnessResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetHarness",
}));

export type GetHarnessEndpointError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Operation to get a single harness endpoint.
 */
export const getHarnessEndpoint: API.OperationMethod<
  GetHarnessEndpointRequest,
  GetHarnessEndpointResponse,
  GetHarnessEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(493, __c61, 5) as any as S.Schema<GetHarnessEndpointRequest>,
  output: __S(278, __c34, 6) as any as S.Schema<GetHarnessEndpointResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetHarnessEndpoint",
}));

export type GetMemoryError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ServiceException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Retrieve an existing Amazon Bedrock AgentCore Memory resource.
 */
export const getMemory: API.OperationMethod<
  GetMemoryInput,
  GetMemoryOutput,
  GetMemoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(494, __c61, 6) as any as S.Schema<GetMemoryInput>,
  output: __S(495, __c61, 7) as any as S.Schema<GetMemoryOutput>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ServiceException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMemory",
}));

export type GetOauth2CredentialProviderError =
  | AccessDeniedException
  | DecryptionFailure
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an OAuth2 credential provider.
 */
export const getOauth2CredentialProvider: API.OperationMethod<
  GetOauth2CredentialProviderRequest,
  GetOauth2CredentialProviderResponse,
  GetOauth2CredentialProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(496, __c62, 0) as any as S.Schema<GetOauth2CredentialProviderRequest>,
  output: __S(497, __c62, 1) as any as S.Schema<GetOauth2CredentialProviderResponse>,
  errors: [
    AccessDeniedException,
    DecryptionFailure,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOauth2CredentialProvider",
}));

export type GetOnlineEvaluationConfigError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about an online evaluation configuration, including its rules, data sources, evaluators, and execution status.
 */
export const getOnlineEvaluationConfig: API.OperationMethod<
  GetOnlineEvaluationConfigRequest,
  GetOnlineEvaluationConfigResponse,
  GetOnlineEvaluationConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(498, __c62, 2) as any as S.Schema<GetOnlineEvaluationConfigRequest>,
  output: __S(499, __c62, 3) as any as S.Schema<GetOnlineEvaluationConfigResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOnlineEvaluationConfig",
}));

export type GetPaymentConnectorError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a specific payment connector.
 */
export const getPaymentConnector: API.OperationMethod<
  GetPaymentConnectorRequest,
  GetPaymentConnectorResponse,
  GetPaymentConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(500, __c62, 4) as any as S.Schema<GetPaymentConnectorRequest>,
  output: __S(501, __c62, 5) as any as S.Schema<GetPaymentConnectorResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPaymentConnector",
}));

export type GetPaymentCredentialProviderError =
  | AccessDeniedException
  | DecryptionFailure
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a specific payment credential provider.
 */
export const getPaymentCredentialProvider: API.OperationMethod<
  GetPaymentCredentialProviderRequest,
  GetPaymentCredentialProviderResponse,
  GetPaymentCredentialProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(502, __c62, 6) as any as S.Schema<GetPaymentCredentialProviderRequest>,
  output: __S(503, __c62, 7) as any as S.Schema<GetPaymentCredentialProviderResponse>,
  errors: [
    AccessDeniedException,
    DecryptionFailure,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPaymentCredentialProvider",
}));

export type GetPaymentManagerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a specific payment manager.
 */
export const getPaymentManager: API.OperationMethod<
  GetPaymentManagerRequest,
  GetPaymentManagerResponse,
  GetPaymentManagerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(504, __c63, 0) as any as S.Schema<GetPaymentManagerRequest>,
  output: __S(505, __c63, 1) as any as S.Schema<GetPaymentManagerResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPaymentManager",
}));

export type GetPolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific policy within the AgentCore Policy system. This operation returns the complete policy definition, metadata, and current status, allowing administrators to review and manage policy configurations.
 */
export const getPolicy: API.OperationMethod<
  GetPolicyRequest,
  GetPolicyResponse,
  GetPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(506, __c63, 2) as any as S.Schema<GetPolicyRequest>,
  output: __S(385, __c48, 1) as any as S.Schema<GetPolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicy",
}));

export type GetPolicyEngineError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific policy engine within the AgentCore Policy system. This operation returns the complete policy engine configuration, metadata, and current status, allowing administrators to review and manage policy engine settings.
 */
export const getPolicyEngine: API.OperationMethod<
  GetPolicyEngineRequest,
  GetPolicyEngineResponse,
  GetPolicyEngineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(507, __c63, 3) as any as S.Schema<GetPolicyEngineRequest>,
  output: __S(508, __c63, 4) as any as S.Schema<GetPolicyEngineResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicyEngine",
}));

export type GetPolicyEngineSummaryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a metadata-only summary of a specific policy engine without decrypting customer content. This lightweight read operation returns resource identifiers, status, timestamps, and the encryption key ARN, but does not include the description or status reasons. Because this operation does not require access to the customer's KMS key, it is suitable for resource discovery, inventory, and integration scenarios where only metadata is needed.
 */
export const getPolicyEngineSummary: API.OperationMethod<
  GetPolicyEngineSummaryRequest,
  GetPolicyEngineSummaryResponse,
  GetPolicyEngineSummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(509, __c63, 5) as any as S.Schema<GetPolicyEngineSummaryRequest>,
  output: __S(510, __c63, 6) as any as S.Schema<GetPolicyEngineSummaryResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicyEngineSummary",
}));

export type GetPolicyGenerationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a policy generation request within the AgentCore Policy system. Policy generation converts natural language descriptions into Dogwood policy statements using AI-powered translation, enabling non-technical users to create policies.
 */
export const getPolicyGeneration: API.OperationMethod<
  GetPolicyGenerationRequest,
  GetPolicyGenerationResponse,
  GetPolicyGenerationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(511, __c63, 7) as any as S.Schema<GetPolicyGenerationRequest>,
  output: __S(513, __c64, 1) as any as S.Schema<GetPolicyGenerationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicyGeneration",
}));

export type GetPolicyGenerationSummaryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a metadata-only summary of a specific policy generation request without decrypting customer content. This lightweight read operation returns resource identifiers, status, timestamps, and findings, but does not include status reasons. Because this operation does not require access to the customer's KMS key, it is suitable for resource discovery, inventory, and integration scenarios where only metadata is needed.
 */
export const getPolicyGenerationSummary: API.OperationMethod<
  GetPolicyGenerationSummaryRequest,
  GetPolicyGenerationSummaryResponse,
  GetPolicyGenerationSummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(514, __c64, 2) as any as S.Schema<GetPolicyGenerationSummaryRequest>,
  output: __S(515, __c64, 3) as any as S.Schema<GetPolicyGenerationSummaryResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicyGenerationSummary",
}));

export type GetPolicySummaryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a metadata-only summary of a specific policy without decrypting customer content. This lightweight read operation returns resource identifiers, status, and timestamps, but does not include the policy definition, description, or status reasons. Because this operation does not require access to the customer's KMS key, it is suitable for resource discovery, inventory, and integration scenarios where only metadata is needed.
 */
export const getPolicySummary: API.OperationMethod<
  GetPolicySummaryRequest,
  GetPolicySummaryResponse,
  GetPolicySummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(516, __c64, 4) as any as S.Schema<GetPolicySummaryRequest>,
  output: __S(517, __c64, 5) as any as S.Schema<GetPolicySummaryResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicySummary",
}));

export type GetRegistryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a specific registry.
 */
export const getRegistry: API.OperationMethod<
  GetRegistryRequest,
  GetRegistryResponse,
  GetRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(518, __c64, 6) as any as S.Schema<GetRegistryRequest>,
  output: __S(519, __c64, 7) as any as S.Schema<GetRegistryResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRegistry",
}));

export type GetRegistryRecordError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a specific registry record.
 */
export const getRegistryRecord: API.OperationMethod<
  GetRegistryRecordRequest,
  GetRegistryRecordResponse,
  GetRegistryRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(520, __c65, 0) as any as S.Schema<GetRegistryRecordRequest>,
  output: __S(521, __c65, 1) as any as S.Schema<GetRegistryRecordResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRegistryRecord",
}));

export type GetResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the resource-based policy for a specified resource.
 *
 * This feature is currently available only for AgentCore Runtime and Gateway.
 */
export const getResourcePolicy: API.OperationMethod<
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(522, __c65, 2) as any as S.Schema<GetResourcePolicyRequest>,
  output: __S(523, __c65, 3) as any as S.Schema<GetResourcePolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePolicy",
}));

export type GetTokenVaultError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a token vault.
 */
export const getTokenVault: API.OperationMethod<
  GetTokenVaultRequest,
  GetTokenVaultResponse,
  GetTokenVaultError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(524, __c65, 4) as any as S.Schema<GetTokenVaultRequest>,
  output: __S(526, __c65, 6) as any as S.Schema<GetTokenVaultResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTokenVault",
}));

export type GetWorkloadIdentityError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a workload identity.
 */
export const getWorkloadIdentity: API.OperationMethod<
  GetWorkloadIdentityRequest,
  GetWorkloadIdentityResponse,
  GetWorkloadIdentityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(527, __c65, 7) as any as S.Schema<GetWorkloadIdentityRequest>,
  output: __S(528, __c66, 0) as any as S.Schema<GetWorkloadIdentityResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkloadIdentity",
}));

export type ListAgentRuntimeEndpointsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all endpoints for a specific Amazon Secure Agent.
 */
export const listAgentRuntimeEndpoints: API.PaginatedOperationMethod<
  ListAgentRuntimeEndpointsRequest,
  ListAgentRuntimeEndpointsResponse,
  ListAgentRuntimeEndpointsError,
  Credentials | HttpClient.HttpClient,
  AgentRuntimeEndpoint
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(529, __c66, 1) as any as S.Schema<ListAgentRuntimeEndpointsRequest>,
  output: __S(532, __c66, 4) as any as S.Schema<ListAgentRuntimeEndpointsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentRuntimeEndpoints",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "runtimeEndpoints",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAgentRuntimesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all Amazon Secure Agents in your account.
 */
export const listAgentRuntimes: API.PaginatedOperationMethod<
  ListAgentRuntimesRequest,
  ListAgentRuntimesResponse,
  ListAgentRuntimesError,
  Credentials | HttpClient.HttpClient,
  AgentRuntime
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(533, __c66, 5) as any as S.Schema<ListAgentRuntimesRequest>,
  output: __S(536, __c67, 0) as any as S.Schema<ListAgentRuntimesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentRuntimes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "agentRuntimes",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAgentRuntimeVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all versions of a specific Amazon Secure Agent.
 */
export const listAgentRuntimeVersions: API.PaginatedOperationMethod<
  ListAgentRuntimeVersionsRequest,
  ListAgentRuntimeVersionsResponse,
  ListAgentRuntimeVersionsError,
  Credentials | HttpClient.HttpClient,
  AgentRuntime
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(537, __c67, 1) as any as S.Schema<ListAgentRuntimeVersionsRequest>,
  output: __S(536, __c67, 0) as any as S.Schema<ListAgentRuntimeVersionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentRuntimeVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "agentRuntimes",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAgentRuntimeVersionsByCapacityProviderError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the agent runtime versions that are associated with a capacity provider. Use this operation to identify the runtimes you must disassociate before you can delete the capacity provider. Results are paginated; use the `nextToken` parameter to retrieve additional results.
 */
export const listAgentRuntimeVersionsByCapacityProvider: API.PaginatedOperationMethod<
  ListAgentRuntimeVersionsByCapacityProviderInput,
  ListAgentRuntimeVersionsByCapacityProviderOutput,
  ListAgentRuntimeVersionsByCapacityProviderError,
  Credentials | HttpClient.HttpClient,
  AgentRuntimeVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(538, __c67, 2) as any as S.Schema<ListAgentRuntimeVersionsByCapacityProviderInput>,
  output: __S(541, __c67, 5) as any as S.Schema<ListAgentRuntimeVersionsByCapacityProviderOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentRuntimeVersionsByCapacityProvider",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "agentRuntimes",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListApiKeyCredentialProvidersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists all API key credential providers in your account.
 */
export const listApiKeyCredentialProviders: API.PaginatedOperationMethod<
  ListApiKeyCredentialProvidersRequest,
  ListApiKeyCredentialProvidersResponse,
  ListApiKeyCredentialProvidersError,
  Credentials | HttpClient.HttpClient,
  ApiKeyCredentialProviderItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(542, __c67, 6) as any as S.Schema<ListApiKeyCredentialProvidersRequest>,
  output: __S(545, __c68, 1) as any as S.Schema<ListApiKeyCredentialProvidersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApiKeyCredentialProviders",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "credentialProviders",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBrowserProfilesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all browser profiles in your account.
 */
export const listBrowserProfiles: API.PaginatedOperationMethod<
  ListBrowserProfilesRequest,
  ListBrowserProfilesResponse,
  ListBrowserProfilesError,
  Credentials | HttpClient.HttpClient,
  BrowserProfileSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(546, __c68, 2) as any as S.Schema<ListBrowserProfilesRequest>,
  output: __S(549, __c68, 5) as any as S.Schema<ListBrowserProfilesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBrowserProfiles",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "profileSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBrowsersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all custom browsers in your account.
 */
export const listBrowsers: API.PaginatedOperationMethod<
  ListBrowsersRequest,
  ListBrowsersResponse,
  ListBrowsersError,
  Credentials | HttpClient.HttpClient,
  BrowserSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(550, __c68, 6) as any as S.Schema<ListBrowsersRequest>,
  output: __S(553, __c69, 1) as any as S.Schema<ListBrowsersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBrowsers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "browserSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCapacityProvidersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the capacity providers in your account and returns summary information for each one. To retrieve the full configuration for a specific capacity provider, use `GetCapacityProvider`. Results are paginated; use the `nextToken` parameter to retrieve additional results.
 */
export const listCapacityProviders: API.PaginatedOperationMethod<
  ListCapacityProvidersInput,
  ListCapacityProvidersOutput,
  ListCapacityProvidersError,
  Credentials | HttpClient.HttpClient,
  CapacityProviderSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(554, __c69, 2) as any as S.Schema<ListCapacityProvidersInput>,
  output: __S(557, __c69, 5) as any as S.Schema<ListCapacityProvidersOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCapacityProviders",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "capacityProviders",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCodeInterpretersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all custom code interpreters in your account.
 */
export const listCodeInterpreters: API.PaginatedOperationMethod<
  ListCodeInterpretersRequest,
  ListCodeInterpretersResponse,
  ListCodeInterpretersError,
  Credentials | HttpClient.HttpClient,
  CodeInterpreterSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(558, __c69, 6) as any as S.Schema<ListCodeInterpretersRequest>,
  output: __S(561, __c70, 1) as any as S.Schema<ListCodeInterpretersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCodeInterpreters",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "codeInterpreterSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConfigurationBundlesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all configuration bundles in the account.
 */
export const listConfigurationBundles: API.PaginatedOperationMethod<
  ListConfigurationBundlesRequest,
  ListConfigurationBundlesResponse,
  ListConfigurationBundlesError,
  Credentials | HttpClient.HttpClient,
  ConfigurationBundleSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(562, __c70, 2) as any as S.Schema<ListConfigurationBundlesRequest>,
  output: __S(565, __c70, 5) as any as S.Schema<ListConfigurationBundlesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfigurationBundles",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "bundles",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConfigurationBundleVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all versions of a configuration bundle, with optional filtering by branch name or creation source.
 */
export const listConfigurationBundleVersions: API.PaginatedOperationMethod<
  ListConfigurationBundleVersionsRequest,
  ListConfigurationBundleVersionsResponse,
  ListConfigurationBundleVersionsError,
  Credentials | HttpClient.HttpClient,
  ConfigurationBundleVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(567, __c70, 7) as any as S.Schema<ListConfigurationBundleVersionsRequest>,
  output: __S(570, __c71, 2) as any as S.Schema<ListConfigurationBundleVersionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfigurationBundleVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "versions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConsentPortalsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists all of the consent portals in your account.
 */
export const listConsentPortals: API.PaginatedOperationMethod<
  ListConsentPortalsRequest,
  ListConsentPortalsResponse,
  ListConsentPortalsError,
  Credentials | HttpClient.HttpClient,
  ConsentPortalSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(571, __c71, 3) as any as S.Schema<ListConsentPortalsRequest>,
  output: __S(574, __c71, 6) as any as S.Schema<ListConsentPortalsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConsentPortals",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "consentPortals",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDatasetExamplesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns paginated examples from the dataset. The server embeds the resolved version in the pagination token. Once pagination begins, all subsequent pages are pinned to that version regardless of concurrent mutations.
 */
export const listDatasetExamples: API.PaginatedOperationMethod<
  ListDatasetExamplesRequest,
  ListDatasetExamplesResponse,
  ListDatasetExamplesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(575, __c71, 7) as any as S.Schema<ListDatasetExamplesRequest>,
  output: __S(576, __c72, 0) as any as S.Schema<ListDatasetExamplesResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDatasetExamples",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "examples",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDatasetsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all datasets in the caller's account, paginated.
 */
export const listDatasets: API.PaginatedOperationMethod<
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListDatasetsError,
  Credentials | HttpClient.HttpClient,
  DatasetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(577, __c72, 1) as any as S.Schema<ListDatasetsRequest>,
  output: __S(580, __c72, 4) as any as S.Schema<ListDatasetsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDatasets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "datasets",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDatasetVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all published versions of a dataset, sorted by version number descending (newest first). Does not include the DRAFT working copy.
 */
export const listDatasetVersions: API.PaginatedOperationMethod<
  ListDatasetVersionsRequest,
  ListDatasetVersionsResponse,
  ListDatasetVersionsError,
  Credentials | HttpClient.HttpClient,
  DatasetVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(581, __c72, 5) as any as S.Schema<ListDatasetVersionsRequest>,
  output: __S(584, __c73, 0) as any as S.Schema<ListDatasetVersionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDatasetVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "versions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEvaluatorsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all available evaluators, including both builtin evaluators provided by the service and custom evaluators created by the user.
 */
export const listEvaluators: API.PaginatedOperationMethod<
  ListEvaluatorsRequest,
  ListEvaluatorsResponse,
  ListEvaluatorsError,
  Credentials | HttpClient.HttpClient,
  EvaluatorSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(585, __c73, 1) as any as S.Schema<ListEvaluatorsRequest>,
  output: __S(588, __c73, 4) as any as S.Schema<ListEvaluatorsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEvaluators",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "evaluators",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListGatewayRateLimitsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all rate limits for a gateway. Results are paginated. Use the `nextToken` parameter to retrieve additional results.
 */
export const listGatewayRateLimits: API.PaginatedOperationMethod<
  ListGatewayRateLimitsRequest,
  ListGatewayRateLimitsResponse,
  ListGatewayRateLimitsError,
  Credentials | HttpClient.HttpClient,
  GatewayRateLimitDetail
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(589, __c73, 5) as any as S.Schema<ListGatewayRateLimitsRequest>,
  output: __S(590, __c73, 6) as any as S.Schema<ListGatewayRateLimitsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGatewayRateLimits",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "rateLimits",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListGatewayRulesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all rules for a gateway.
 */
export const listGatewayRules: API.PaginatedOperationMethod<
  ListGatewayRulesRequest,
  ListGatewayRulesResponse,
  ListGatewayRulesError,
  Credentials | HttpClient.HttpClient,
  GatewayRuleDetail
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(591, __c73, 7) as any as S.Schema<ListGatewayRulesRequest>,
  output: __S(593, __c74, 1) as any as S.Schema<ListGatewayRulesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGatewayRules",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "gatewayRules",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListGatewaysError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all gateways in the account.
 */
export const listGateways: API.PaginatedOperationMethod<
  ListGatewaysRequest,
  ListGatewaysResponse,
  ListGatewaysError,
  Credentials | HttpClient.HttpClient,
  GatewaySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(594, __c74, 2) as any as S.Schema<ListGatewaysRequest>,
  output: __S(597, __c74, 5) as any as S.Schema<ListGatewaysResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGateways",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListGatewayTargetsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all targets for a specific gateway.
 */
export const listGatewayTargets: API.PaginatedOperationMethod<
  ListGatewayTargetsRequest,
  ListGatewayTargetsResponse,
  ListGatewayTargetsError,
  Credentials | HttpClient.HttpClient,
  TargetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(598, __c74, 6) as any as S.Schema<ListGatewayTargetsRequest>,
  output: __S(601, __c75, 1) as any as S.Schema<ListGatewayTargetsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGatewayTargets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListHarnessEndpointsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Operation to list the endpoints of a harness.
 */
export const listHarnessEndpoints: API.PaginatedOperationMethod<
  ListHarnessEndpointsRequest,
  ListHarnessEndpointsResponse,
  ListHarnessEndpointsError,
  Credentials | HttpClient.HttpClient,
  HarnessEndpoint
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(602, __c75, 2) as any as S.Schema<ListHarnessEndpointsRequest>,
  output: __S(604, __c75, 4) as any as S.Schema<ListHarnessEndpointsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListHarnessEndpoints",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "endpoints",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListHarnessesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Operation to list harnesses.
 */
export const listHarnesses: API.PaginatedOperationMethod<
  ListHarnessesRequest,
  ListHarnessesResponse,
  ListHarnessesError,
  Credentials | HttpClient.HttpClient,
  HarnessSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(605, __c75, 5) as any as S.Schema<ListHarnessesRequest>,
  output: __S(608, __c76, 0) as any as S.Schema<ListHarnessesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListHarnesses",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "harnesses",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListHarnessVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Operation to list the versions of a Harness.
 */
export const listHarnessVersions: API.PaginatedOperationMethod<
  ListHarnessVersionsRequest,
  ListHarnessVersionsResponse,
  ListHarnessVersionsError,
  Credentials | HttpClient.HttpClient,
  HarnessVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(609, __c76, 1) as any as S.Schema<ListHarnessVersionsRequest>,
  output: __S(612, __c76, 4) as any as S.Schema<ListHarnessVersionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListHarnessVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "harnessVersions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMemoriesError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ServiceException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Lists the available Amazon Bedrock AgentCore Memory resources in the current Amazon Web Services Region.
 */
export const listMemories: API.PaginatedOperationMethod<
  ListMemoriesInput,
  ListMemoriesOutput,
  ListMemoriesError,
  Credentials | HttpClient.HttpClient,
  MemorySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(613, __c76, 5) as any as S.Schema<ListMemoriesInput>,
  output: __S(616, __c77, 0) as any as S.Schema<ListMemoriesOutput>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ServiceException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMemories",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "memories",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListOauth2CredentialProvidersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists all OAuth2 credential providers in your account.
 */
export const listOauth2CredentialProviders: API.PaginatedOperationMethod<
  ListOauth2CredentialProvidersRequest,
  ListOauth2CredentialProvidersResponse,
  ListOauth2CredentialProvidersError,
  Credentials | HttpClient.HttpClient,
  Oauth2CredentialProviderItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(617, __c77, 1) as any as S.Schema<ListOauth2CredentialProvidersRequest>,
  output: __S(620, __c77, 4) as any as S.Schema<ListOauth2CredentialProvidersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOauth2CredentialProviders",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "credentialProviders",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListOnlineEvaluationConfigsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all online evaluation configurations in the account, providing summary information about each configuration's status and settings.
 */
export const listOnlineEvaluationConfigs: API.PaginatedOperationMethod<
  ListOnlineEvaluationConfigsRequest,
  ListOnlineEvaluationConfigsResponse,
  ListOnlineEvaluationConfigsError,
  Credentials | HttpClient.HttpClient,
  OnlineEvaluationConfigSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(621, __c77, 5) as any as S.Schema<ListOnlineEvaluationConfigsRequest>,
  output: __S(624, __c78, 0) as any as S.Schema<ListOnlineEvaluationConfigsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOnlineEvaluationConfigs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "onlineEvaluationConfigs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPaymentConnectorsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all payment connectors for a specified payment manager.
 */
export const listPaymentConnectors: API.PaginatedOperationMethod<
  ListPaymentConnectorsRequest,
  ListPaymentConnectorsResponse,
  ListPaymentConnectorsError,
  Credentials | HttpClient.HttpClient,
  PaymentConnectorSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(625, __c78, 1) as any as S.Schema<ListPaymentConnectorsRequest>,
  output: __S(628, __c78, 4) as any as S.Schema<ListPaymentConnectorsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPaymentConnectors",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "paymentConnectors",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPaymentCredentialProvidersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists all payment credential providers in the account.
 */
export const listPaymentCredentialProviders: API.PaginatedOperationMethod<
  ListPaymentCredentialProvidersRequest,
  ListPaymentCredentialProvidersResponse,
  ListPaymentCredentialProvidersError,
  Credentials | HttpClient.HttpClient,
  PaymentCredentialProviderItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(629, __c78, 5) as any as S.Schema<ListPaymentCredentialProvidersRequest>,
  output: __S(620, __c77, 4) as any as S.Schema<ListPaymentCredentialProvidersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPaymentCredentialProviders",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "credentialProviders",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPaymentManagersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all payment managers in the account.
 */
export const listPaymentManagers: API.PaginatedOperationMethod<
  ListPaymentManagersRequest,
  ListPaymentManagersResponse,
  ListPaymentManagersError,
  Credentials | HttpClient.HttpClient,
  PaymentManagerSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(630, __c78, 6) as any as S.Schema<ListPaymentManagersRequest>,
  output: __S(633, __c79, 1) as any as S.Schema<ListPaymentManagersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPaymentManagers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "paymentManagers",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPoliciesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of policies within the AgentCore Policy engine. This operation supports pagination and filtering to help administrators manage and discover policies across policy engines. Results can be filtered by policy engine or resource associations.
 */
export const listPolicies: API.PaginatedOperationMethod<
  ListPoliciesRequest,
  ListPoliciesResponse,
  ListPoliciesError,
  Credentials | HttpClient.HttpClient,
  Policy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(634, __c79, 2) as any as S.Schema<ListPoliciesRequest>,
  output: __S(636, __c79, 4) as any as S.Schema<ListPoliciesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicies",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "policies",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPolicyEnginesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of policy engines within the AgentCore Policy system. This operation supports pagination to help administrators discover and manage policy engines across their account. Each policy engine serves as a container for related policies.
 */
export const listPolicyEngines: API.PaginatedOperationMethod<
  ListPolicyEnginesRequest,
  ListPolicyEnginesResponse,
  ListPolicyEnginesError,
  Credentials | HttpClient.HttpClient,
  PolicyEngine
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(637, __c79, 5) as any as S.Schema<ListPolicyEnginesRequest>,
  output: __S(639, __c79, 7) as any as S.Schema<ListPolicyEnginesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicyEngines",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "policyEngines",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPolicyEngineSummariesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a paginated list of metadata-only policy engine summaries without decrypting customer content. This lightweight read operation returns resource identifiers, status, and timestamps for each policy engine, but does not include descriptions or status reasons. Because this operation does not require access to the customer's KMS key, it is suitable for resource discovery, inventory, and integration scenarios where only metadata is needed.
 */
export const listPolicyEngineSummaries: API.PaginatedOperationMethod<
  ListPolicyEngineSummariesRequest,
  ListPolicyEngineSummariesResponse,
  ListPolicyEngineSummariesError,
  Credentials | HttpClient.HttpClient,
  PolicyEngineSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(640, __c80, 0) as any as S.Schema<ListPolicyEngineSummariesRequest>,
  output: __S(643, __c80, 3) as any as S.Schema<ListPolicyEngineSummariesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicyEngineSummaries",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "policyEngines",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPolicyGenerationAssetsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of generated policy assets from a policy generation request within the AgentCore Policy system. This operation returns the actual Dogwood policies and related artifacts produced by the AI-powered policy generation process, allowing users to review and select from multiple generated policy options.
 */
export const listPolicyGenerationAssets: API.PaginatedOperationMethod<
  ListPolicyGenerationAssetsRequest,
  ListPolicyGenerationAssetsResponse,
  ListPolicyGenerationAssetsError,
  Credentials | HttpClient.HttpClient,
  PolicyGenerationAsset
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(644, __c80, 4) as any as S.Schema<ListPolicyGenerationAssetsRequest>,
  output: __S(649, __c81, 1) as any as S.Schema<ListPolicyGenerationAssetsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicyGenerationAssets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "policyGenerationAssets",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPolicyGenerationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of policy generation requests within the AgentCore Policy system. This operation supports pagination and filtering to help track and manage AI-powered policy generation operations.
 */
export const listPolicyGenerations: API.PaginatedOperationMethod<
  ListPolicyGenerationsRequest,
  ListPolicyGenerationsResponse,
  ListPolicyGenerationsError,
  Credentials | HttpClient.HttpClient,
  PolicyGeneration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(650, __c81, 2) as any as S.Schema<ListPolicyGenerationsRequest>,
  output: __S(653, __c81, 5) as any as S.Schema<ListPolicyGenerationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicyGenerations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "policyGenerations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPolicyGenerationSummariesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a paginated list of metadata-only policy generation summaries within a policy engine without decrypting customer content. This lightweight read operation returns resource identifiers, status, timestamps, and findings for each policy generation, but does not include status reasons. Because this operation does not require access to the customer's KMS key, it is suitable for resource discovery, inventory, and integration scenarios where only metadata is needed.
 */
export const listPolicyGenerationSummaries: API.PaginatedOperationMethod<
  ListPolicyGenerationSummariesRequest,
  ListPolicyGenerationSummariesResponse,
  ListPolicyGenerationSummariesError,
  Credentials | HttpClient.HttpClient,
  PolicyGenerationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(654, __c81, 6) as any as S.Schema<ListPolicyGenerationSummariesRequest>,
  output: __S(657, __c82, 1) as any as S.Schema<ListPolicyGenerationSummariesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicyGenerationSummaries",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "policyGenerations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPolicySummariesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a paginated list of metadata-only policy summaries within a policy engine without decrypting customer content. This lightweight read operation returns resource identifiers, status, and timestamps for each policy, but does not include policy definitions, descriptions, or status reasons. Because this operation does not require access to the customer's KMS key, it is suitable for resource discovery, inventory, and integration scenarios where only metadata is needed.
 */
export const listPolicySummaries: API.PaginatedOperationMethod<
  ListPolicySummariesRequest,
  ListPolicySummariesResponse,
  ListPolicySummariesError,
  Credentials | HttpClient.HttpClient,
  PolicySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(658, __c82, 2) as any as S.Schema<ListPolicySummariesRequest>,
  output: __S(660, __c82, 4) as any as S.Schema<ListPolicySummariesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicySummaries",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "policies",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRegistriesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all registries in the account. You can optionally filter results by status using the `status` parameter, or by authorizer type using the `authorizerType` parameter.
 */
export const listRegistries: API.PaginatedOperationMethod<
  ListRegistriesRequest,
  ListRegistriesResponse,
  ListRegistriesError,
  Credentials | HttpClient.HttpClient,
  RegistrySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(661, __c82, 5) as any as S.Schema<ListRegistriesRequest>,
  output: __S(664, __c83, 0) as any as S.Schema<ListRegistriesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRegistries",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "registries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRegistryRecordsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists registry records within a registry. You can optionally filter results using the `name`, `status`, and `descriptorType` parameters. When multiple filters are specified, they are combined using AND logic.
 */
export const listRegistryRecords: API.PaginatedOperationMethod<
  ListRegistryRecordsRequest,
  ListRegistryRecordsResponse,
  ListRegistryRecordsError,
  Credentials | HttpClient.HttpClient,
  RegistryRecordSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(665, __c83, 1) as any as S.Schema<ListRegistryRecordsRequest>,
  output: __S(668, __c83, 4) as any as S.Schema<ListRegistryRecordsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRegistryRecords",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "registryRecords",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags associated with the specified resource.
 *
 * This feature is currently available only for AgentCore Runtime, Browser, Browser Profile, Code Interpreter tool, and Gateway.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(669, __c83, 5) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(670, __c83, 6) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListWorkloadIdentitiesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists all workload identities in your account.
 */
export const listWorkloadIdentities: API.PaginatedOperationMethod<
  ListWorkloadIdentitiesRequest,
  ListWorkloadIdentitiesResponse,
  ListWorkloadIdentitiesError,
  Credentials | HttpClient.HttpClient,
  WorkloadIdentityType
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(671, __c83, 7) as any as S.Schema<ListWorkloadIdentitiesRequest>,
  output: __S(674, __c84, 2) as any as S.Schema<ListWorkloadIdentitiesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkloadIdentities",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "workloadIdentities",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates a resource-based policy for a resource with the specified resourceArn.
 *
 * This feature is currently available only for AgentCore Runtime and Gateway.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(675, __c84, 3) as any as S.Schema<PutResourcePolicyRequest>,
  output: __S(676, __c84, 4) as any as S.Schema<PutResourcePolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourcePolicy",
}));

export type RotatePaymentConnectorCredentialsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Replaces the service-managed credentials of a payment connector with newly issued credentials.
 *
 * Use this operation only for payment connectors with a `provisionMode` of `QUICK_CREATE`. For payment connectors with a `provisionMode` of `MANUAL`, call `UpdatePaymentCredentialProvider` instead after rotating credentials with the payment provider directly.
 *
 * The rotation finishes before the response is returned, and only one rotation runs at a time for a given payment connector. When it succeeds, the new credential is in effect and the payment connector stays in the `READY` state. When it fails, an error is returned, the payment connector and its existing credential are left unchanged, and you can retry the request.
 *
 * Rotation replaces the credential on the connector's credential provider, so every payment connector that uses that provider is affected. Replace any copy of the previous credential that you use outside AgentCore.
 */
export const rotatePaymentConnectorCredentials: API.OperationMethod<
  RotatePaymentConnectorCredentialsRequest,
  RotatePaymentConnectorCredentialsResponse,
  RotatePaymentConnectorCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(679, __c84, 7) as any as S.Schema<RotatePaymentConnectorCredentialsRequest>,
  output: __S(680, __c85, 0) as any as S.Schema<RotatePaymentConnectorCredentialsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RotatePaymentConnectorCredentials",
}));

export type SetTokenVaultCMKError =
  | AccessDeniedException
  | ConcurrentModificationException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Sets the customer master key (CMK) for a token vault.
 */
export const setTokenVaultCMK: API.OperationMethod<
  SetTokenVaultCMKRequest,
  SetTokenVaultCMKResponse,
  SetTokenVaultCMKError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(681, __c85, 1) as any as S.Schema<SetTokenVaultCMKRequest>,
  output: __S(526, __c65, 6) as any as S.Schema<SetTokenVaultCMKResponse>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetTokenVaultCMK",
}));

export type StartPolicyGenerationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Initiates the AI-powered generation of Dogwood policies from natural language descriptions within the AgentCore Policy system. This feature enables both technical and non-technical users to create policies by describing their authorization requirements in plain English, which is then automatically translated into formal Dogwood policy statements. The generation process analyzes the natural language input along with the Gateway's tool context to produce validated policy options. Generated policy assets are automatically deleted after 7 days, so you should review and create policies from the generated assets within this timeframe. Once created, policies are permanent and not subject to this expiration. Generated policies should be reviewed and tested in log-only mode before deploying to production. Use this when you want to describe policy intent naturally rather than learning Dogwood syntax, though generated policies may require refinement for complex scenarios.
 */
export const startPolicyGeneration: API.OperationMethod<
  StartPolicyGenerationRequest,
  StartPolicyGenerationResponse,
  StartPolicyGenerationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(683, __c85, 3) as any as S.Schema<StartPolicyGenerationRequest>,
  output: __S(513, __c64, 1) as any as S.Schema<StartPolicyGenerationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartPolicyGeneration",
}));

export type SubmitRegistryRecordForApprovalError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Submits a registry record for approval. This transitions the record from `DRAFT` status to `PENDING_APPROVAL` status. If the registry has auto-approval enabled, the record is automatically approved.
 */
export const submitRegistryRecordForApproval: API.OperationMethod<
  SubmitRegistryRecordForApprovalRequest,
  SubmitRegistryRecordForApprovalResponse,
  SubmitRegistryRecordForApprovalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(684, __c85, 4) as any as S.Schema<SubmitRegistryRecordForApprovalRequest>,
  output: __S(685, __c85, 5) as any as S.Schema<SubmitRegistryRecordForApprovalResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SubmitRegistryRecordForApproval",
}));

export type SynchronizeGatewayTargetsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Synchronizes the gateway targets by fetching the latest tool definitions from the target endpoints.
 *
 * You cannot synchronize a target that is in a pending authorization state (`CREATE_PENDING_AUTH`, `UPDATE_PENDING_AUTH`, or `SYNCHRONIZE_PENDING_AUTH`). Wait for the authorization to complete or fail before synchronizing.
 *
 * You cannot synchronize a target that has a static tool schema (`mcpToolSchema`) configured. Remove the static schema through an `UpdateGatewayTarget` call to enable dynamic tool synchronization.
 */
export const synchronizeGatewayTargets: API.OperationMethod<
  SynchronizeGatewayTargetsRequest,
  SynchronizeGatewayTargetsResponse,
  SynchronizeGatewayTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(686, __c85, 6) as any as S.Schema<SynchronizeGatewayTargetsRequest>,
  output: __S(688, __c86, 0) as any as S.Schema<SynchronizeGatewayTargetsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SynchronizeGatewayTargets",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
 *
 * This feature is currently available only for AgentCore Runtime, Browser, Browser Profile, Code Interpreter tool, and Gateway.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(689, __c86, 1) as any as S.Schema<TagResourceRequest>,
  output: __S(425, __c53, 1) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified tags from the specified resource.
 *
 * This feature is currently available only for AgentCore Runtime, Browser, Browser Profile, Code Interpreter tool, and Gateway.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(690, __c86, 2) as any as S.Schema<UntagResourceRequest>,
  output: __S(425, __c53, 1) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAgentRuntimeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing Amazon Secure Agent.
 */
export const updateAgentRuntime: API.OperationMethod<
  UpdateAgentRuntimeRequest,
  UpdateAgentRuntimeResponse,
  UpdateAgentRuntimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(691, __c86, 3) as any as S.Schema<UpdateAgentRuntimeRequest>,
  output: __S(692, __c86, 4) as any as S.Schema<UpdateAgentRuntimeResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAgentRuntime",
}));

export type UpdateAgentRuntimeEndpointError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing Amazon Bedrock AgentCore Runtime endpoint.
 */
export const updateAgentRuntimeEndpoint: API.OperationMethod<
  UpdateAgentRuntimeEndpointRequest,
  UpdateAgentRuntimeEndpointResponse,
  UpdateAgentRuntimeEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(693, __c86, 5) as any as S.Schema<UpdateAgentRuntimeEndpointRequest>,
  output: __S(694, __c86, 6) as any as S.Schema<UpdateAgentRuntimeEndpointResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAgentRuntimeEndpoint",
}));

export type UpdateApiKeyCredentialProviderError =
  | AccessDeniedException
  | ConflictException
  | DecryptionFailure
  | EncryptionFailure
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing API key credential provider.
 */
export const updateApiKeyCredentialProvider: API.OperationMethod<
  UpdateApiKeyCredentialProviderRequest,
  UpdateApiKeyCredentialProviderResponse,
  UpdateApiKeyCredentialProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(695, __c86, 7) as any as S.Schema<UpdateApiKeyCredentialProviderRequest>,
  output: __S(466, __c58, 2) as any as S.Schema<UpdateApiKeyCredentialProviderResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DecryptionFailure,
    EncryptionFailure,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApiKeyCredentialProvider",
}));

export type UpdateCapacityProviderError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | RetryableConflictException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a capacity provider. Only the description can be changed. To change other configuration, such as instance types, networking, or storage, create a new capacity provider.
 */
export const updateCapacityProvider: API.OperationMethod<
  UpdateCapacityProviderInput,
  UpdateCapacityProviderOutput,
  UpdateCapacityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(697, __c87, 1) as any as S.Schema<UpdateCapacityProviderInput>,
  output: __S(698, __c87, 2) as any as S.Schema<UpdateCapacityProviderOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    RetryableConflictException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCapacityProvider",
}));

export type UpdateConfigurationBundleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a configuration bundle by creating a new version with the specified changes. Each update creates a new version in the version history.
 */
export const updateConfigurationBundle: API.OperationMethod<
  UpdateConfigurationBundleRequest,
  UpdateConfigurationBundleResponse,
  UpdateConfigurationBundleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(699, __c87, 3) as any as S.Schema<UpdateConfigurationBundleRequest>,
  output: __S(700, __c87, 4) as any as S.Schema<UpdateConfigurationBundleResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConfigurationBundle",
}));

export type UpdateConsentPortalError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing consent portal.
 */
export const updateConsentPortal: API.OperationMethod<
  UpdateConsentPortalRequest,
  UpdateConsentPortalResponse,
  UpdateConsentPortalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(701, __c87, 5) as any as S.Schema<UpdateConsentPortalRequest>,
  output: __S(106, __c13, 2) as any as S.Schema<UpdateConsentPortalResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConsentPortal",
}));

export type UpdateDatasetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a dataset's metadata. Synchronous operation. Only provided fields are updated; omitted fields remain unchanged. To modify dataset content, use `AddDatasetExamples`, `UpdateDatasetExamples`, or `DeleteDatasetExamples`.
 */
export const updateDataset: API.OperationMethod<
  UpdateDatasetRequest,
  UpdateDatasetResponse,
  UpdateDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(702, __c87, 6) as any as S.Schema<UpdateDatasetRequest>,
  output: __S(703, __c87, 7) as any as S.Schema<UpdateDatasetResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDataset",
}));

export type UpdateDatasetExamplesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates multiple existing examples in-place on DRAFT. All examples are validated against the dataset's schema type before any writes occur. If any example fails validation, the entire batch is rejected (all-or-nothing semantics).
 */
export const updateDatasetExamples: API.OperationMethod<
  UpdateDatasetExamplesRequest,
  UpdateDatasetExamplesResponse,
  UpdateDatasetExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(704, __c88, 0) as any as S.Schema<UpdateDatasetExamplesRequest>,
  output: __S(705, __c88, 1) as any as S.Schema<UpdateDatasetExamplesResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDatasetExamples",
}));

export type UpdateEvaluatorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a custom evaluator's configuration, description, or evaluation level. Built-in evaluators cannot be updated. The evaluator must not be locked for modification.
 */
export const updateEvaluator: API.OperationMethod<
  UpdateEvaluatorRequest,
  UpdateEvaluatorResponse,
  UpdateEvaluatorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(706, __c88, 2) as any as S.Schema<UpdateEvaluatorRequest>,
  output: __S(707, __c88, 3) as any as S.Schema<UpdateEvaluatorResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEvaluator",
}));

export type UpdateGatewayError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing gateway.
 */
export const updateGateway: API.OperationMethod<
  UpdateGatewayRequest,
  UpdateGatewayResponse,
  UpdateGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(708, __c88, 4) as any as S.Schema<UpdateGatewayRequest>,
  output: __S(146, __c18, 2) as any as S.Schema<UpdateGatewayResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGateway",
}));

export type UpdateGatewayRateLimitError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the entries of a gateway rate limit. The dimension keys are immutable after creation.
 */
export const updateGatewayRateLimit: API.OperationMethod<
  UpdateGatewayRateLimitRequest,
  UpdateGatewayRateLimitResponse,
  UpdateGatewayRateLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(709, __c88, 5) as any as S.Schema<UpdateGatewayRateLimitRequest>,
  output: __S(148, __c18, 4) as any as S.Schema<UpdateGatewayRateLimitResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGatewayRateLimit",
}));

export type UpdateGatewayRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a gateway rule's priority, conditions, actions, or description.
 */
export const updateGatewayRule: API.OperationMethod<
  UpdateGatewayRuleRequest,
  UpdateGatewayRuleResponse,
  UpdateGatewayRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(710, __c88, 6) as any as S.Schema<UpdateGatewayRuleRequest>,
  output: __S(711, __c88, 7) as any as S.Schema<UpdateGatewayRuleResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGatewayRule",
}));

export type UpdateGatewayTargetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing gateway target.
 *
 * You cannot update a target that is in a pending authorization state (`CREATE_PENDING_AUTH`, `UPDATE_PENDING_AUTH`, or `SYNCHRONIZE_PENDING_AUTH`). Wait for the authorization to complete or fail before updating the target.
 */
export const updateGatewayTarget: API.OperationMethod<
  UpdateGatewayTargetRequest,
  UpdateGatewayTargetResponse,
  UpdateGatewayTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(712, __c89, 0) as any as S.Schema<UpdateGatewayTargetRequest>,
  output: __S(228, __c28, 4) as any as S.Schema<UpdateGatewayTargetResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGatewayTarget",
}));

export type UpdateHarnessError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Operation to update a harness.
 */
export const updateHarness: API.OperationMethod<
  UpdateHarnessRequest,
  UpdateHarnessResponse,
  UpdateHarnessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(716, __c89, 4) as any as S.Schema<UpdateHarnessRequest>,
  output: __S(275, __c34, 3) as any as S.Schema<UpdateHarnessResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateHarness",
}));

export type UpdateHarnessEndpointError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Operation to update a harness endpoint.
 */
export const updateHarnessEndpoint: API.OperationMethod<
  UpdateHarnessEndpointRequest,
  UpdateHarnessEndpointResponse,
  UpdateHarnessEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(717, __c89, 5) as any as S.Schema<UpdateHarnessEndpointRequest>,
  output: __S(278, __c34, 6) as any as S.Schema<UpdateHarnessEndpointResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateHarnessEndpoint",
}));

export type UpdateMemoryError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Update an Amazon Bedrock AgentCore Memory resource memory.
 */
export const updateMemory: API.OperationMethod<
  UpdateMemoryInput,
  UpdateMemoryOutput,
  UpdateMemoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(732, __c91, 4) as any as S.Schema<UpdateMemoryInput>,
  output: __S(331, __c41, 3) as any as S.Schema<UpdateMemoryOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMemory",
}));

export type UpdateOauth2CredentialProviderError =
  | AccessDeniedException
  | ConflictException
  | DecryptionFailure
  | EncryptionFailure
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing OAuth2 credential provider.
 */
export const updateOauth2CredentialProvider: API.OperationMethod<
  UpdateOauth2CredentialProviderRequest,
  UpdateOauth2CredentialProviderResponse,
  UpdateOauth2CredentialProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(733, __c91, 5) as any as S.Schema<UpdateOauth2CredentialProviderRequest>,
  output: __S(734, __c91, 6) as any as S.Schema<UpdateOauth2CredentialProviderResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DecryptionFailure,
    EncryptionFailure,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOauth2CredentialProvider",
}));

export type UpdateOnlineEvaluationConfigError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an online evaluation configuration's settings, including rules, data sources, evaluators, and execution status. Changes take effect immediately for ongoing evaluations.
 */
export const updateOnlineEvaluationConfig: API.OperationMethod<
  UpdateOnlineEvaluationConfigRequest,
  UpdateOnlineEvaluationConfigResponse,
  UpdateOnlineEvaluationConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(735, __c91, 7) as any as S.Schema<UpdateOnlineEvaluationConfigRequest>,
  output: __S(736, __c92, 0) as any as S.Schema<UpdateOnlineEvaluationConfigResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOnlineEvaluationConfig",
}));

export type UpdatePaymentConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | SubscriptionRequiredException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing payment connector. This operation uses PATCH semantics, so you only need to specify the fields you want to change.
 */
export const updatePaymentConnector: API.OperationMethod<
  UpdatePaymentConnectorRequest,
  UpdatePaymentConnectorResponse,
  UpdatePaymentConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(737, __c92, 1) as any as S.Schema<UpdatePaymentConnectorRequest>,
  output: __S(738, __c92, 2) as any as S.Schema<UpdatePaymentConnectorResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    SubscriptionRequiredException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePaymentConnector",
}));

export type UpdatePaymentCredentialProviderError =
  | AccessDeniedException
  | ConflictException
  | DecryptionFailure
  | EncryptionFailure
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing payment credential provider with new authentication credentials.
 */
export const updatePaymentCredentialProvider: API.OperationMethod<
  UpdatePaymentCredentialProviderRequest,
  UpdatePaymentCredentialProviderResponse,
  UpdatePaymentCredentialProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(739, __c92, 3) as any as S.Schema<UpdatePaymentCredentialProviderRequest>,
  output: __S(740, __c92, 4) as any as S.Schema<UpdatePaymentCredentialProviderResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DecryptionFailure,
    EncryptionFailure,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePaymentCredentialProvider",
}));

export type UpdatePaymentManagerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing payment manager. This operation uses PATCH semantics, so you only need to specify the fields you want to change.
 */
export const updatePaymentManager: API.OperationMethod<
  UpdatePaymentManagerRequest,
  UpdatePaymentManagerResponse,
  UpdatePaymentManagerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(741, __c92, 5) as any as S.Schema<UpdatePaymentManagerRequest>,
  output: __S(742, __c92, 6) as any as S.Schema<UpdatePaymentManagerResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePaymentManager",
}));

export type UpdatePolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing policy within the AgentCore Policy system. This operation allows modification of the policy description and definition while maintaining the policy's identity. The updated policy is validated against the Cedar schema before being applied. This is an asynchronous operation. Use the `GetPolicy` operation to poll the `status` field to track completion.
 *
 * If the updated policy is a temporal policy, the policy engine invalidates all active temporal sessions. If the update adds or removes temporal operators, the policy engine also invalidates active temporal sessions. For more information about temporal policy sessions, see session-based temporal policies. The policy engine returns an HTTP 409 `ConflictException` to in-flight sessions. To resume, you must start a new session with a new session ID.
 */
export const updatePolicy: API.OperationMethod<
  UpdatePolicyRequest,
  UpdatePolicyResponse,
  UpdatePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(743, __c92, 7) as any as S.Schema<UpdatePolicyRequest>,
  output: __S(385, __c48, 1) as any as S.Schema<UpdatePolicyResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePolicy",
}));

export type UpdatePolicyEngineError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing policy engine within the AgentCore Policy system. This operation allows modification of the policy engine description while maintaining its identity. This is an asynchronous operation. Use the `GetPolicyEngine` operation to poll the `status` field to track completion.
 */
export const updatePolicyEngine: API.OperationMethod<
  UpdatePolicyEngineRequest,
  UpdatePolicyEngineResponse,
  UpdatePolicyEngineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(744, __c93, 0) as any as S.Schema<UpdatePolicyEngineRequest>,
  output: __S(387, __c48, 3) as any as S.Schema<UpdatePolicyEngineResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePolicyEngine",
}));

export type UpdateRegistryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing registry. This operation uses PATCH semantics, so you only need to specify the fields you want to change.
 */
export const updateRegistry: API.OperationMethod<
  UpdateRegistryRequest,
  UpdateRegistryResponse,
  UpdateRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(746, __c93, 2) as any as S.Schema<UpdateRegistryRequest>,
  output: __S(519, __c64, 7) as any as S.Schema<UpdateRegistryResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRegistry",
}));

export type UpdateRegistryRecordError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing registry record. This operation uses PATCH semantics, so you only need to specify the fields you want to change. The update is processed asynchronously and returns HTTP 202 Accepted.
 */
export const updateRegistryRecord: API.OperationMethod<
  UpdateRegistryRecordRequest,
  UpdateRegistryRecordResponse,
  UpdateRegistryRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(759, __c94, 7) as any as S.Schema<UpdateRegistryRecordRequest>,
  output: __S(521, __c65, 1) as any as S.Schema<UpdateRegistryRecordResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRegistryRecord",
}));

export type UpdateRegistryRecordStatusError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the status of a registry record. Use this operation to approve, reject, or deprecate a registry record.
 */
export const updateRegistryRecordStatus: API.OperationMethod<
  UpdateRegistryRecordStatusRequest,
  UpdateRegistryRecordStatusResponse,
  UpdateRegistryRecordStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(760, __c95, 0) as any as S.Schema<UpdateRegistryRecordStatusRequest>,
  output: __S(761, __c95, 1) as any as S.Schema<UpdateRegistryRecordStatusResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRegistryRecordStatus",
}));

export type UpdateWorkloadIdentityError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing workload identity.
 */
export const updateWorkloadIdentity: API.OperationMethod<
  UpdateWorkloadIdentityRequest,
  UpdateWorkloadIdentityResponse,
  UpdateWorkloadIdentityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(762, __c95, 2) as any as S.Schema<UpdateWorkloadIdentityRequest>,
  output: __S(528, __c66, 0) as any as S.Schema<UpdateWorkloadIdentityResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorkloadIdentity",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.Any);
    case 1:
      return S.suspend(() => S.Struct({ examples: __S(0, __c0, 0) })).annotate({
        identifier: "InlineExamplesSource",
      });
    case 2:
      return S.suspend(() => S.Struct({ s3Uri: S.String })).annotate({
        identifier: "S3Source",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ inlineExamples: __S(1, __c0, 1) }),
        /*@__PURE__*/ S.Struct({ s3Source: __S(2, __c0, 2) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          source: __S(3, __c0, 3),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/datasets/{datasetId}/examples/add" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AddDatasetExamplesRequest",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          datasetArn: S.String,
          datasetId: S.String,
          status: S.String,
          addedCount: S.Number,
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          exampleIds: __S(5, __c0, 5),
        }),
      ).annotate({
        identifier: "AddDatasetExamplesResponse",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ rate: S.Number, period: S.String })).annotate({
        identifier: "RateConfig",
      });
    case 1:
      return S.Array(__S(8, __c1, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          dimensions: __S(7, __c0, 7),
          requests: S.optional(__S(9, __c1, 1)),
          tokens: S.optional(__S(9, __c1, 1)),
          connections: S.optional(__S(9, __c1, 1)),
        }),
      ).annotate({ identifier: "LimitEntry" });
    case 3:
      return S.Array(__S(10, __c1, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          rateLimitId: S.optional(S.String),
          description: S.optional(S.String),
          dimensionKeys: __S(5, __c0, 5),
          entries: __S(11, __c1, 3),
        }),
      ).annotate({ identifier: "BatchPutLimitEntry" });
    case 5:
      return S.Array(__S(12, __c1, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          rateLimits: __S(13, __c1, 5),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/gateways/{gatewayIdentifier}/rate-limits/batch" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchPutGatewayRateLimitsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          rateLimitId: S.String,
          gatewayIdentifier: S.String,
          description: S.optional(S.String),
          dimensionKeys: __S(5, __c0, 5),
          entries: __S(11, __c1, 3),
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "GatewayRateLimitDetail" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15, __c1, 7));
    case 1:
      return S.suspend(() => S.Struct({ rateLimits: __S(16, __c2, 0) })).annotate({
        identifier: "BatchPutGatewayRateLimitsResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ containerUri: S.String })).annotate({
        identifier: "ContainerConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ bucket: S.String, prefix: S.String, versionId: S.optional(S.String) }),
      ).annotate({ identifier: "S3Location" });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ s3: __S(19, __c2, 3) })]);
    case 5:
      return S.suspend(() =>
        S.Struct({ code: __S(20, __c2, 4), runtime: S.String, entryPoint: __S(5, __c0, 5) }),
      ).annotate({ identifier: "CodeConfiguration" });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ containerConfiguration: __S(18, __c2, 2) }),
        /*@__PURE__*/ S.Struct({ codeConfiguration: __S(21, __c2, 5) }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          securityGroups: __S(5, __c0, 5),
          subnets: __S(5, __c0, 5),
          requireServiceS3Endpoint: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "VpcConfig" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ networkMode: S.String, networkModeConfig: S.optional(__S(23, __c2, 7)) }),
      ).annotate({ identifier: "NetworkConfiguration" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ matchValueString: S.String }),
        /*@__PURE__*/ S.Struct({ matchValueStringList: __S(5, __c0, 5) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          claimMatchValue: __S(26, __c3, 2),
          claimMatchOperator: S.String,
        }),
      ).annotate({
        identifier: "AuthorizingClaimMatchValueType",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          inboundTokenClaimName: S.String,
          inboundTokenClaimValueType: S.String,
          authorizingClaimMatchValue: __S(27, __c3, 3),
        }),
      ).annotate({
        identifier: "CustomClaimValidationType",
      });
    case 5:
      return S.Array(__S(28, __c3, 4));
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ resourceConfigurationIdentifier: S.String })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          vpcIdentifier: S.String,
          subnetIds: __S(5, __c0, 5),
          endpointIpAddressType: S.String,
          securityGroupIds: S.optional(__S(5, __c0, 5)),
          tags: S.optional(__S(7, __c0, 7)),
          routingDomain: S.optional(S.String),
        }),
      ).annotate({ identifier: "ManagedVpcResource" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ selfManagedLatticeResource: __S(30, __c3, 6) }),
        /*@__PURE__*/ S.Struct({ managedVpcResource: __S(31, __c3, 7) }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({ domain: S.String, privateEndpoint: __S(32, __c4, 0) }),
      ).annotate({ identifier: "PrivateEndpointOverride" });
    case 2:
      return S.Array(__S(33, __c4, 1));
    case 3:
      return S.suspend(() => S.Struct({ arn: S.String })).annotate({
        identifier: "HostingEnvironment",
      });
    case 4:
      return S.Array(__S(35, __c4, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          hostingEnvironments: S.optional(__S(36, __c4, 4)),
          workloadIdentities: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({
        identifier: "AllowedWorkloadConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          discoveryUrl: S.String,
          allowedAudience: S.optional(__S(5, __c0, 5)),
          allowedClients: S.optional(__S(5, __c0, 5)),
          allowedScopes: S.optional(__S(5, __c0, 5)),
          advertisedScopeMapping: S.optional(__S(25, __c3, 1)),
          customClaims: S.optional(__S(29, __c3, 5)),
          privateEndpoint: S.optional(__S(32, __c4, 0)),
          privateEndpointOverrides: S.optional(__S(34, __c4, 2)),
          allowedWorkloadConfiguration: S.optional(__S(37, __c4, 5)),
        }),
      ).annotate({
        identifier: "CustomJWTAuthorizerConfiguration",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ customJWTAuthorizer: __S(38, __c4, 6) })]);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ requestHeaderAllowlist: __S(5, __c0, 5) })]);
    case 1:
      return S.suspend(() => S.Struct({ serverProtocol: S.String })).annotate({
        identifier: "ProtocolConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          idleRuntimeSessionTimeout: S.optional(S.Number),
          maxLifetime: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LifecycleConfiguration" });
    case 3:
      return S.suspend(() => S.Struct({ mountPath: S.String })).annotate({
        identifier: "SessionStorageConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ accessPointArn: S.String, mountPath: S.String })).annotate({
        identifier: "S3FilesAccessPointConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ volumeName: S.String, mountPath: S.String })).annotate({
        identifier: "CapacityProviderVolumeConfiguration",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ sessionStorage: __S(43, __c5, 3) }),
        /*@__PURE__*/ S.Struct({ s3FilesAccessPoint: __S(44, __c5, 4) }),
        /*@__PURE__*/ S.Struct({ efsAccessPoint: __S(44, __c5, 4) }),
        /*@__PURE__*/ S.Struct({ capacityProviderVolume: __S(45, __c5, 5) }),
      ]);
    case 7:
      return S.Array(__S(46, __c5, 6));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ capacityProviderArn: S.optional(S.String) })).annotate({
        identifier: "CapacityProviderConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          agentRuntimeName: S.String,
          agentRuntimeArtifact: __S(22, __c2, 6),
          roleArn: S.String,
          networkConfiguration: S.optional(__S(24, __c3, 0)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          description: S.optional(SensitiveString),
          authorizerConfiguration: S.optional(__S(39, __c4, 7)),
          requestHeaderConfiguration: S.optional(__S(40, __c5, 0)),
          protocolConfiguration: S.optional(__S(41, __c5, 1)),
          lifecycleConfiguration: S.optional(__S(42, __c5, 2)),
          environmentVariables: S.optional(__S(25, __c3, 1)),
          filesystemConfigurations: S.optional(__S(47, __c5, 7)),
          capacityProviderConfiguration: S.optional(__S(48, __c6, 0)),
          tags: S.optional(__S(7, __c0, 7)),
          platformVersion: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/runtimes/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateAgentRuntimeRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ workloadIdentityArn: S.optional(S.String) })).annotate({
        identifier: "WorkloadIdentityDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentRuntimeArn: S.String,
          workloadIdentityDetails: S.optional(__S(50, __c6, 2)),
          agentRuntimeId: S.String,
          agentRuntimeVersion: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
        }),
      ).annotate({
        identifier: "CreateAgentRuntimeResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          agentRuntimeId: S.String.pipe(T.HttpLabel("agentRuntimeId")),
          name: SensitiveString,
          agentRuntimeVersion: S.optional(S.String),
          description: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/runtimes/{agentRuntimeId}/runtime-endpoints/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAgentRuntimeEndpointRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          targetVersion: S.String,
          agentRuntimeEndpointArn: S.String,
          agentRuntimeArn: S.String,
          agentRuntimeId: S.optional(S.String),
          endpointName: S.optional(SensitiveString),
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "CreateAgentRuntimeEndpointResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ secretId: S.String, jsonKey: S.String })).annotate({
        identifier: "SecretReference",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          apiKey: S.optional(SensitiveString),
          apiKeySecretConfig: S.optional(__S(54, __c6, 6)),
          apiKeySecretSource: S.optional(S.String),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/CreateApiKeyCredentialProvider" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateApiKeyCredentialProviderRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ secretArn: S.String })).annotate({
        identifier: "Secret",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          apiKeySecretArn: __S(56, __c7, 0),
          apiKeySecretJsonKey: S.optional(S.String),
          apiKeySecretSource: S.optional(S.String),
          name: S.String,
          credentialProviderArn: S.String,
        }),
      ).annotate({
        identifier: "CreateApiKeyCredentialProviderResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ networkMode: S.String, vpcConfig: S.optional(__S(23, __c2, 7)) }),
      ).annotate({
        identifier: "BrowserNetworkConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ enabled: S.optional(S.Boolean), s3Location: S.optional(__S(19, __c2, 3)) }),
      ).annotate({ identifier: "RecordingConfig" });
    case 4:
      return S.suspend(() => S.Struct({ enabled: S.Boolean })).annotate({
        identifier: "BrowserSigningConfigInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ location: __S(20, __c2, 4), type: S.optional(S.String) }),
      ).annotate({ identifier: "BrowserEnterprisePolicy" });
    case 6:
      return S.Array(__S(61, __c7, 5));
    case 7:
      return S.suspend(() => S.Struct({ secretArn: S.String })).annotate({
        identifier: "SecretsManagerLocation",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ secretsManager: __S(63, __c7, 7) })]);
    case 1:
      return S.suspend(() => S.Struct({ location: __S(64, __c8, 0) })).annotate({
        identifier: "Certificate",
      });
    case 2:
      return S.Array(__S(65, __c8, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ accessPointArn: S.String, mountPath: S.String, fileSystemArn: S.String }),
      ).annotate({ identifier: "S3FilesConfiguration" });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3FilesConfiguration: __S(67, __c8, 3) }),
        /*@__PURE__*/ S.Struct({ efsConfiguration: __S(67, __c8, 3) }),
      ]);
    case 5:
      return S.Array(__S(68, __c8, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          executionRoleArn: S.optional(S.String),
          networkConfiguration: __S(58, __c7, 2),
          recording: S.optional(__S(59, __c7, 3)),
          browserSigning: S.optional(__S(60, __c7, 4)),
          enterprisePolicies: S.optional(__S(62, __c7, 6)),
          certificates: S.optional(__S(66, __c8, 2)),
          filesystemConfigurations: S.optional(__S(69, __c8, 5)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/browsers" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateBrowserRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          browserId: S.String,
          browserArn: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
        }),
      ).annotate({ identifier: "CreateBrowserResponse" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/browser-profiles" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateBrowserProfileRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          profileId: S.String,
          profileArn: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
        }),
      ).annotate({
        identifier: "CreateBrowserProfileResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ capacityProviderOperatorRoleArn: S.String })).annotate({
        identifier: "PermissionsConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ allowedInstanceTypes: __S(5, __c0, 5) })).annotate({
        identifier: "InstanceRequirements",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          volumeType: S.optional(S.String),
          iops: S.optional(S.Number),
          throughput: S.optional(S.Number),
          encrypted: S.optional(S.Boolean),
          kmsKeyId: S.optional(S.String),
          snapshotId: S.optional(S.String),
          volumeSize: S.optional(S.Number),
          volumeInitializationRate: S.optional(S.Number),
          ebsCardIndex: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "EphemeralEBSVolumeConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          deviceName: S.optional(S.String),
          virtualName: S.optional(S.String),
          ebs: S.optional(__S(76, __c9, 4)),
        }),
      ).annotate({
        identifier: "EphemeralBlockDeviceMapping",
      });
    case 6:
      return S.Array(__S(77, __c9, 5));
    case 7:
      return S.suspend(() => S.Struct({ licenseConfigurationArn: S.String })).annotate({
        identifier: "LicenseSpecification",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(79, __c9, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          capacityReservationId: S.optional(S.String),
          capacityReservationResourceGroupArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CapacityReservationTarget",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          capacityReservationPreference: S.optional(S.String),
          capacityReservationTarget: S.optional(__S(81, __c10, 1)),
        }),
      ).annotate({
        identifier: "CapacityReservationSpecification",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          operatingSystem: S.String,
          instanceRequirements: __S(75, __c9, 3),
          ephemeralVolumes: S.optional(__S(78, __c9, 6)),
          monitoring: S.optional(S.String),
          licenseSpecifications: S.optional(__S(80, __c10, 0)),
          capacityReservationSpecification: S.optional(__S(82, __c10, 2)),
          sshKeyName: S.optional(S.String),
          instanceProfileArn: S.optional(S.String),
          propagatedTags: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({ identifier: "LaunchParameters" });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ launchParameters: __S(83, __c10, 3) })]);
    case 5:
      return S.suspend(() =>
        S.Struct({ subnets: __S(5, __c0, 5), securityGroups: __S(5, __c0, 5) }),
      ).annotate({ identifier: "VpcConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          sizeGiB: S.Number,
          volumeType: S.optional(S.String),
          iops: S.optional(S.Number),
          throughput: S.optional(S.Number),
          encrypted: S.optional(S.Boolean),
          kmsKeyId: S.optional(S.String),
          snapshotId: S.optional(S.String),
        }),
      ).annotate({ identifier: "EbsVolumeConfiguration" });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ ebsConfiguration: __S(86, __c10, 6) })]);
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87, __c10, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ idleInstanceTimeout: S.optional(S.Number), maxLifetime: S.optional(S.Number) }),
      ).annotate({
        identifier: "InstanceLifecycleConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          volumeType: S.optional(S.String),
          iops: S.optional(S.Number),
          throughput: S.optional(S.Number),
          encrypted: S.optional(S.Boolean),
          kmsKeyId: S.optional(S.String),
          freeSpaceGiB: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RootVolumeConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          launchTemplateSource: __S(84, __c10, 4),
          vpcConfiguration: __S(85, __c10, 5),
          volumes: S.optional(__S(88, __c11, 0)),
          lifecycleConfiguration: S.optional(__S(89, __c11, 1)),
          rootVolume: S.optional(__S(90, __c11, 2)),
        }),
      ).annotate({ identifier: "Ec2Configuration" });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ ec2Configuration: __S(91, __c11, 3) })]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          permissionsConfiguration: __S(74, __c9, 2),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(7, __c0, 7)),
          computeConfiguration: __S(92, __c11, 4),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/capacity-providers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateCapacityProviderInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          capacityProviderId: S.String,
          capacityProviderArn: S.String,
          name: S.String,
          status: S.String,
        }),
      ).annotate({
        identifier: "CreateCapacityProviderOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          executionRoleArn: S.optional(S.String),
          networkConfiguration: __S(58, __c7, 2),
          certificates: S.optional(__S(66, __c8, 2)),
          filesystemConfigurations: S.optional(__S(69, __c8, 5)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/code-interpreters" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateCodeInterpreterRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          codeInterpreterId: S.String,
          codeInterpreterArn: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
        }),
      ).annotate({
        identifier: "CreateCodeInterpreterResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ configuration: S.Any })).annotate({
        identifier: "ComponentConfiguration",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(97, __c12, 1).pipe(S.optional));
    case 3:
      return S.suspend(() => S.Struct({ name: S.String, arn: S.optional(S.String) })).annotate({
        identifier: "VersionCreatedBySource",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          bundleName: S.String,
          description: S.optional(SensitiveString),
          components: __S(98, __c12, 2),
          branchName: S.optional(S.String),
          commitMessage: S.optional(S.String),
          createdBy: S.optional(__S(99, __c12, 3)),
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configuration-bundles/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConfigurationBundleRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          bundleArn: S.String,
          bundleId: S.String,
          versionId: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "CreateConfigurationBundleResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          credentialProviderArn: S.String,
          scopes: __S(5, __c0, 5),
          audience: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConsentPortalIdpConfig" });
    case 7:
      return S.suspend(() => S.Struct({ identifier: S.String, type: S.String })).annotate({
        identifier: "ConsentPortalSource",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(103, __c12, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          executionRoleArn: S.String,
          idpConfig: __S(102, __c12, 6),
          name: S.String,
          sources: __S(104, __c13, 0),
          description: S.optional(S.String),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/CreateConsentPortal" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConsentPortalRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          sources: __S(104, __c13, 0),
          consentPortalArn: S.String,
          consentPortalId: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          description: S.optional(S.String),
          executionRoleArn: S.String,
          idpConfig: __S(102, __c12, 6),
          name: S.String,
          portalUrl: S.optional(S.String),
          status: S.String,
          statusReason: S.optional(S.String),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "CreateConsentPortalResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          datasetName: S.String,
          description: S.optional(S.String),
          source: __S(3, __c0, 3),
          schemaType: S.String,
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/datasets" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDatasetRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          datasetArn: S.String,
          datasetId: S.String,
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "CreateDatasetResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/datasets/{datasetId}/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDatasetVersionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          datasetArn: S.String,
          datasetId: S.String,
          status: S.String,
          datasetVersion: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "CreateDatasetVersionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ definition: S.String, value: S.Number, label: S.String }),
      ).annotate({ identifier: "NumericalScaleDefinition" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(111, __c13, 7));
    case 1:
      return S.suspend(() => S.Struct({ definition: S.String, label: S.String })).annotate({
        identifier: "CategoricalScaleDefinition",
      });
    case 2:
      return S.Array(__S(113, __c14, 1));
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ numerical: __S(112, __c14, 0) }),
        /*@__PURE__*/ S.Struct({ categorical: __S(114, __c14, 2) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          maxTokens: S.optional(S.Number),
          temperature: S.optional(S.Number),
          topP: S.optional(S.Number),
          stopSequences: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "InferenceConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          inferenceConfig: S.optional(__S(116, __c14, 4)),
          additionalModelRequestFields: S.optional(S.Any),
        }),
      ).annotate({
        identifier: "BedrockEvaluatorModelConfig",
      });
    case 6:
      return S.suspend(() => S.Struct({ effort: S.optional(S.String) })).annotate({
        identifier: "ReasoningConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          maxOutputTokens: S.optional(S.Number),
          temperature: S.optional(S.Number),
          topP: S.optional(S.Number),
          reasoning: S.optional(__S(118, __c14, 6)),
        }),
      ).annotate({
        identifier: "OpenResponsesEvaluatorModelConfig",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ bedrockEvaluatorModelConfig: __S(117, __c14, 5) }),
        /*@__PURE__*/ S.Struct({
          responsesEvaluatorModelConfig: __S(119, __c14, 7),
        }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          instructions: SensitiveString,
          ratingScale: __S(115, __c14, 3),
          modelConfig: __S(120, __c15, 0),
        }),
      ).annotate({
        identifier: "LlmAsAJudgeEvaluatorConfig",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ lambdaArn: S.String, lambdaTimeoutInSeconds: S.optional(S.Number) }),
      ).annotate({ identifier: "LambdaEvaluatorConfig" });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ lambdaConfig: __S(122, __c15, 2) })]);
    case 4:
      return S.suspend(() =>
        S.Struct({ baseEvaluatorId: S.String, modelConfig: __S(120, __c15, 0) }),
      ).annotate({ identifier: "DerivedEvaluatorConfig" });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ llmAsAJudge: __S(121, __c15, 1) }),
        /*@__PURE__*/ S.Struct({ codeBased: __S(123, __c15, 3) }),
        /*@__PURE__*/ S.Struct({ derived: __S(124, __c15, 4) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          evaluatorName: S.String,
          description: S.optional(SensitiveString),
          evaluatorConfig: __S(125, __c15, 5),
          level: S.String,
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/evaluators/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateEvaluatorRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          evaluatorArn: S.String,
          evaluatorId: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: S.String,
        }),
      ).annotate({ identifier: "CreateEvaluatorResponse" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ sessionTimeoutInSeconds: S.optional(S.Number) })).annotate({
        identifier: "SessionConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ enableResponseStreaming: S.optional(S.Boolean) })).annotate(
        { identifier: "StreamingConfiguration" },
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          supportedVersions: S.optional(__S(5, __c0, 5)),
          instructions: S.optional(SensitiveString),
          searchType: S.optional(S.String),
          sessionConfiguration: S.optional(__S(128, __c16, 0)),
          streamingConfiguration: S.optional(__S(129, __c16, 1)),
          disableMcpListToolsPagination: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "MCPGatewayConfiguration" });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ mcp: __S(130, __c16, 2) })]);
    case 4:
      return S.suspend(() => S.Struct({ arn: S.String })).annotate({
        identifier: "LambdaInterceptorConfiguration",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ lambda: __S(132, __c16, 4) })]);
    case 6:
      return S.Array(S.String);
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ field: S.String })]);
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(135, __c16, 7));
    case 1:
      return S.suspend(() => S.Struct({ exclude: __S(136, __c17, 0) })).annotate({
        identifier: "InterceptorPayloadFilter",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          passRequestHeaders: S.Boolean,
          payloadFilter: S.optional(__S(137, __c17, 1)),
        }),
      ).annotate({
        identifier: "InterceptorInputConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          interceptor: __S(133, __c16, 5),
          interceptionPoints: __S(134, __c16, 6),
          inputConfiguration: S.optional(__S(138, __c17, 2)),
        }),
      ).annotate({
        identifier: "GatewayInterceptorConfiguration",
      });
    case 4:
      return S.Array(__S(139, __c17, 3));
    case 5:
      return S.suspend(() => S.Struct({ arn: S.String, mode: S.String })).annotate({
        identifier: "GatewayPolicyEngineConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          roleArn: S.String,
          protocolType: S.optional(S.String),
          protocolConfiguration: S.optional(__S(131, __c16, 3)),
          authorizerType: S.String,
          authorizerConfiguration: S.optional(__S(39, __c4, 7)),
          kmsKeyArn: S.optional(S.String),
          interceptorConfigurations: S.optional(__S(140, __c17, 4)),
          policyEngineConfiguration: S.optional(__S(141, __c17, 5)),
          exceptionLevel: S.optional(S.String),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/gateways/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateGatewayRequest" });
    case 7:
      return S.suspend(() => S.Struct({ arn: S.optional(S.String) })).annotate({
        identifier: "LambdaTransformConfiguration",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ lambda: S.optional(__S(143, __c17, 7)) })).annotate({
        identifier: "CustomTransformConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ failureMode: S.optional(S.String) })).annotate({
        identifier: "WafConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          gatewayArn: S.String,
          gatewayId: S.String,
          gatewayUrl: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          statusReasons: S.optional(__S(5, __c0, 5)),
          name: S.String,
          description: S.optional(SensitiveString),
          roleArn: S.optional(S.String),
          protocolType: S.optional(S.String),
          protocolConfiguration: S.optional(__S(131, __c16, 3)),
          authorizerType: S.String,
          authorizerConfiguration: S.optional(__S(39, __c4, 7)),
          kmsKeyArn: S.optional(S.String),
          customTransformConfiguration: S.optional(__S(144, __c18, 0)),
          interceptorConfigurations: S.optional(__S(140, __c17, 4)),
          policyEngineConfiguration: S.optional(__S(141, __c17, 5)),
          workloadIdentityDetails: S.optional(__S(50, __c6, 2)),
          exceptionLevel: S.optional(S.String),
          webAclArn: S.optional(S.String),
          wafConfiguration: S.optional(__S(145, __c18, 1)),
        }),
      ).annotate({ identifier: "CreateGatewayResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          rateLimitId: S.optional(S.String),
          description: S.optional(S.String),
          dimensionKeys: __S(5, __c0, 5),
          entries: __S(11, __c1, 3),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/gateways/{gatewayIdentifier}/rate-limits" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateGatewayRateLimitRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          rateLimitId: S.String,
          gatewayIdentifier: S.String,
          description: S.optional(S.String),
          dimensionKeys: __S(5, __c0, 5),
          entries: __S(11, __c1, 3),
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "CreateGatewayRateLimitResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ arn: S.String, operator: S.optional(S.String) })).annotate({
        identifier: "IamPrincipal",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ iamPrincipal: __S(149, __c18, 5) })]);
    case 7:
      return S.Array(__S(150, __c18, 6));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ anyOf: __S(151, __c18, 7) })).annotate({
        identifier: "MatchPrincipals",
      });
    case 1:
      return S.suspend(() => S.Struct({ anyOf: __S(5, __c0, 5) })).annotate({
        identifier: "MatchPaths",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ matchPrincipals: __S(152, __c19, 0) }),
        /*@__PURE__*/ S.Struct({ matchPaths: __S(153, __c19, 1) }),
      ]);
    case 3:
      return S.Array(__S(154, __c19, 2));
    case 4:
      return S.suspend(() => S.Struct({ bundleArn: S.String, bundleVersion: S.String })).annotate({
        identifier: "StaticOverride",
      });
    case 5:
      return S.suspend(() => S.Struct({ bundleArn: S.String, bundleVersion: S.String })).annotate({
        identifier: "ConfigurationBundleReference",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          weight: S.Number,
          configurationBundle: __S(157, __c19, 5),
          description: S.optional(S.String),
          metadata: S.optional(__S(25, __c3, 1)),
        }),
      ).annotate({ identifier: "TrafficSplitEntry" });
    case 7:
      return S.Array(__S(158, __c19, 6));
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ trafficSplit: __S(159, __c19, 7) })).annotate({
        identifier: "WeightedOverride",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ staticOverride: __S(156, __c19, 4) }),
        /*@__PURE__*/ S.Struct({ weightedOverride: __S(160, __c20, 0) }),
      ]);
    case 2:
      return S.suspend(() => S.Struct({ targetName: SensitiveString })).annotate({
        identifier: "StaticRoute",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          weight: S.Number,
          targetName: SensitiveString,
          description: S.optional(S.String),
          metadata: S.optional(__S(25, __c3, 1)),
        }),
      ).annotate({ identifier: "TargetTrafficSplitEntry" });
    case 4:
      return S.Array(__S(163, __c20, 3));
    case 5:
      return S.suspend(() => S.Struct({ trafficSplit: __S(164, __c20, 4) })).annotate({
        identifier: "WeightedRoute",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ staticRoute: __S(162, __c20, 2) }),
        /*@__PURE__*/ S.Struct({ weightedRoute: __S(165, __c20, 5) }),
      ]);
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ configurationBundle: __S(161, __c20, 1) }),
        /*@__PURE__*/ S.Struct({ routeToTarget: __S(166, __c20, 6) }),
      ]);
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(167, __c20, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          priority: S.Number,
          conditions: S.optional(__S(155, __c19, 3)),
          actions: __S(168, __c21, 0),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/gateways/{gatewayIdentifier}/rules" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateGatewayRuleRequest" });
    case 2:
      return S.suspend(() => S.Struct({ managedBy: S.String })).annotate({
        identifier: "SystemManagedBlock",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ruleId: S.String,
          gatewayArn: S.String,
          priority: S.Number,
          conditions: S.optional(__S(155, __c19, 3)),
          actions: __S(168, __c21, 0),
          description: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          system: S.optional(__S(170, __c21, 2)),
        }),
      ).annotate({
        identifier: "CreateGatewayRuleResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ uri: S.optional(S.String), bucketOwnerAccountId: S.optional(S.String) }),
      ).annotate({ identifier: "S3Configuration" });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: __S(172, __c21, 4) }),
        /*@__PURE__*/ S.Struct({ inlinePayload: SensitiveString }),
      ]);
    case 6:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend((): S.Schema<SchemaDefinition> => __S(175, __c21, 7))
          .annotate({ identifier: "SchemaDefinition" })
          .pipe(S.optional),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          properties: S.optional(
            S.suspend(() => __S(174, __c21, 6)).annotate({ identifier: "SchemaProperties" }),
          ),
          required: S.optional(__S(5, __c0, 5)),
          items: S.optional(
            S.suspend((): S.Schema<SchemaDefinition> => __S(175, __c21, 7)).annotate({
              identifier: "SchemaDefinition",
            }),
          ),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "SchemaDefinition" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.String,
          inputSchema: __S(175, __c21, 7),
          outputSchema: S.optional(__S(175, __c21, 7)),
        }),
      ).annotate({ identifier: "ToolDefinition" });
    case 1:
      return S.Array(__S(176, __c22, 0));
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: __S(172, __c21, 4) }),
        /*@__PURE__*/ S.Struct({ inlinePayload: __S(177, __c22, 1) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({ lambdaArn: S.String, toolSchema: __S(178, __c22, 2) }),
      ).annotate({
        identifier: "McpLambdaTargetConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          endpoint: S.String,
          mcpToolSchema: S.optional(__S(173, __c21, 5)),
          listingMode: S.optional(S.String),
          resourcePriority: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "McpServerTargetConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          path: S.String,
          method: S.String,
        }),
      ).annotate({ identifier: "ApiGatewayToolOverride" });
    case 6:
      return S.Array(__S(181, __c22, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ filterPath: S.String, methods: __S(134, __c16, 6) }),
      ).annotate({
        identifier: "ApiGatewayToolFilter",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(183, __c22, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          toolOverrides: S.optional(__S(182, __c22, 6)),
          toolFilters: __S(184, __c23, 0),
        }),
      ).annotate({
        identifier: "ApiGatewayToolConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          restApiId: S.String,
          stage: S.String,
          apiGatewayToolConfiguration: __S(185, __c23, 1),
        }),
      ).annotate({
        identifier: "ApiGatewayTargetConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ connectorId: S.String, version: S.optional(S.String) }),
      ).annotate({ identifier: "ConnectorSource" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          path: S.String,
          description: S.optional(S.String),
          visible: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ConnectorParameterOverride",
      });
    case 5:
      return S.Array(__S(188, __c23, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          parameterValues: S.optional(S.Any),
          parameterOverrides: S.optional(__S(189, __c23, 5)),
        }),
      ).annotate({ identifier: "ConnectorConfiguration" });
    case 7:
      return S.Array(__S(190, __c23, 6));
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          source: __S(187, __c23, 3),
          enabled: S.optional(__S(5, __c0, 5)),
          configurations: S.optional(__S(191, __c23, 7)),
        }),
      ).annotate({
        identifier: "ConnectorTargetConfiguration",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ openApiSchema: __S(173, __c21, 5) }),
        /*@__PURE__*/ S.Struct({ smithyModel: __S(173, __c21, 5) }),
        /*@__PURE__*/ S.Struct({ lambda: __S(179, __c22, 3) }),
        /*@__PURE__*/ S.Struct({ mcpServer: __S(180, __c22, 4) }),
        /*@__PURE__*/ S.Struct({ apiGateway: __S(186, __c23, 2) }),
        /*@__PURE__*/ S.Struct({ connector: __S(192, __c24, 0) }),
      ]);
    case 2:
      return S.suspend(() => S.Struct({ source: __S(173, __c21, 5) })).annotate({
        identifier: "HttpApiSchemaConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          qualifier: S.optional(S.String),
          schema: S.optional(__S(194, __c24, 2)),
        }),
      ).annotate({
        identifier: "RuntimeTargetConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          timeout: S.optional(S.Number),
          compositeIdentifier: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "StickinessConfiguration" });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ SensitiveString.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          endpoint: S.String,
          protocolType: S.String,
          schema: S.optional(__S(194, __c24, 2)),
          stickinessConfiguration: S.optional(__S(196, __c24, 4)),
          staticQueryParameters: S.optional(__S(197, __c24, 5)),
          staticQueryParameterConflictResolution: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PassthroughTargetConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ connectorId: S.String })).annotate({
        identifier: "HttpConnectorSource",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ source: __S(199, __c24, 7), parameters: S.optional(__S(25, __c3, 1)) }),
      ).annotate({
        identifier: "HttpConnectorTargetConfiguration",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ agentcoreRuntime: __S(195, __c24, 3) }),
        /*@__PURE__*/ S.Struct({ passthrough: __S(198, __c24, 6) }),
        /*@__PURE__*/ S.Struct({ connector: __S(200, __c25, 0) }),
      ]);
    case 2:
      return S.suspend(() => S.Struct({ source: __S(199, __c24, 7) })).annotate({
        identifier: "InferenceConnectorTargetConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ strip: S.optional(S.Boolean), separator: S.optional(S.String) }),
      ).annotate({ identifier: "ProviderPrefix" });
    case 4:
      return S.suspend(() => S.Struct({ providerPrefix: S.optional(__S(203, __c25, 3)) })).annotate(
        {
          identifier: "ModelMapping",
        },
      );
    case 5:
      return S.suspend(() => S.Struct({ model: S.String })).annotate({
        identifier: "ModelEntry",
      });
    case 6:
      return S.Array(__S(205, __c25, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          path: S.String,
          providerPath: S.optional(S.String),
          models: S.optional(__S(206, __c25, 6)),
        }),
      ).annotate({
        identifier: "InferenceOperationConfiguration",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(207, __c25, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          endpoint: S.String,
          modelMapping: S.optional(__S(204, __c25, 4)),
          operations: S.optional(__S(208, __c26, 0)),
        }),
      ).annotate({
        identifier: "InferenceProviderTargetConfiguration",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ connector: __S(202, __c25, 2) }),
        /*@__PURE__*/ S.Struct({ provider: __S(209, __c26, 1) }),
      ]);
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ mcp: __S(193, __c24, 1) }),
        /*@__PURE__*/ S.Struct({ http: __S(201, __c25, 1) }),
        /*@__PURE__*/ S.Struct({ inference: __S(210, __c26, 2) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          providerArn: S.String,
          scopes: __S(5, __c0, 5),
          customParameters: S.optional(__S(197, __c24, 5)),
          grantType: S.optional(S.String),
          defaultReturnUrl: S.optional(S.String),
        }),
      ).annotate({ identifier: "OAuthCredentialProvider" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          providerArn: S.String,
          credentialParameterName: S.optional(S.String),
          credentialPrefix: S.optional(S.String),
          credentialLocation: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GatewayApiKeyCredentialProvider",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ service: S.String, region: S.optional(S.String) }),
      ).annotate({ identifier: "IamCredentialProvider" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ oauthCredentialProvider: __S(212, __c26, 4) }),
        /*@__PURE__*/ S.Struct({ apiKeyCredentialProvider: __S(213, __c26, 5) }),
        /*@__PURE__*/ S.Struct({ iamCredentialProvider: __S(214, __c26, 6) }),
      ]);
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          credentialProviderType: S.String,
          credentialProvider: S.optional(__S(215, __c26, 7)),
        }),
      ).annotate({
        identifier: "CredentialProviderConfiguration",
      });
    case 1:
      return S.Array(__S(216, __c27, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          allowedRequestHeaders: S.optional(__S(5, __c0, 5)),
          allowedQueryParameters: S.optional(__S(5, __c0, 5)),
          allowedResponseHeaders: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "MetadataConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({ uri: S.String, bucketOwnerAccountId: S.optional(S.String) }),
      ).annotate({
        identifier: "S3CertificateConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ secretArn: S.String })).annotate({
        identifier: "SecretsManagerCertificateConfiguration",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: __S(219, __c27, 3) }),
        /*@__PURE__*/ S.Struct({ secretsManager: __S(220, __c27, 4) }),
      ]);
    case 6:
      return S.Array(__S(221, __c27, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          name: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          targetConfiguration: __S(211, __c26, 3),
          credentialProviderConfigurations: S.optional(__S(217, __c27, 1)),
          metadataConfiguration: S.optional(__S(218, __c27, 2)),
          privateEndpoint: S.optional(__S(32, __c4, 0)),
          certificateConfigurations: S.optional(__S(222, __c27, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/gateways/{gatewayIdentifier}/targets/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateGatewayTargetRequest",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domain: S.optional(S.String),
          resourceGatewayArn: S.optional(S.String),
          resourceAssociationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ManagedResourceDetails" });
    case 1:
      return S.Array(__S(224, __c28, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ authorizationUrl: S.String, userId: S.optional(S.String) }),
      ).annotate({ identifier: "OAuth2AuthorizationData" });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ oauth2: __S(226, __c28, 2) })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          gatewayArn: S.String,
          targetId: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          statusReasons: S.optional(__S(5, __c0, 5)),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          targetConfiguration: __S(211, __c26, 3),
          credentialProviderConfigurations: __S(217, __c27, 1),
          lastSynchronizedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          metadataConfiguration: S.optional(__S(218, __c27, 2)),
          privateEndpoint: S.optional(__S(32, __c4, 0)),
          privateEndpointManagedResources: S.optional(__S(225, __c28, 1)),
          authorizationData: S.optional(__S(227, __c28, 3)),
          protocolType: S.optional(S.String),
          certificateConfigurations: S.optional(__S(222, __c27, 6)),
        }),
      ).annotate({
        identifier: "CreateGatewayTargetResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          lifecycleConfiguration: S.optional(__S(42, __c5, 2)),
          networkConfiguration: S.optional(__S(24, __c3, 0)),
          filesystemConfigurations: S.optional(__S(47, __c5, 7)),
        }),
      ).annotate({
        identifier: "HarnessAgentCoreRuntimeEnvironmentRequest",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          agentCoreRuntimeEnvironment: __S(229, __c28, 5),
        }),
      ]);
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ containerConfiguration: __S(18, __c2, 2) })]);
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          maxTokens: S.optional(S.Number),
          temperature: S.optional(S.Number),
          topP: S.optional(S.Number),
          apiFormat: S.optional(S.String),
          additionalParams: S.optional(S.Any),
        }),
      ).annotate({
        identifier: "HarnessBedrockModelConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          apiKeyArn: S.String,
          apiBase: S.optional(SensitiveString),
          maxTokens: S.optional(S.Number),
          temperature: S.optional(S.Number),
          topP: S.optional(S.Number),
          apiFormat: S.optional(S.String),
          additionalParams: S.optional(S.Any),
        }),
      ).annotate({ identifier: "HarnessOpenAiModelConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          apiKeyArn: S.String,
          maxTokens: S.optional(S.Number),
          temperature: S.optional(S.Number),
          topP: S.optional(S.Number),
          topK: S.optional(S.Number),
          additionalParams: S.optional(S.Any),
        }),
      ).annotate({ identifier: "HarnessGeminiModelConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          apiKeyArn: S.optional(S.String),
          apiBase: S.optional(SensitiveString),
          maxTokens: S.optional(S.Number),
          temperature: S.optional(S.Number),
          topP: S.optional(S.Number),
          additionalParams: S.optional(S.Any),
        }),
      ).annotate({
        identifier: "HarnessLiteLlmModelConfig",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ bedrockModelConfig: __S(232, __c29, 0) }),
        /*@__PURE__*/ S.Struct({ openAiModelConfig: __S(233, __c29, 1) }),
        /*@__PURE__*/ S.Struct({ geminiModelConfig: __S(234, __c29, 2) }),
        /*@__PURE__*/ S.Struct({ liteLlmModelConfig: __S(235, __c29, 3) }),
      ]);
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ text: SensitiveString })]);
    case 6:
      return S.Array(__S(237, __c29, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ url: SensitiveString, headers: S.optional(__S(25, __c3, 1)) }),
      ).annotate({ identifier: "HarnessRemoteMcpConfig" });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ browserArn: S.optional(S.String) })).annotate({
        identifier: "HarnessAgentCoreBrowserConfig",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ awsIam: /*@__PURE__*/ S.Struct({}) }),
        /*@__PURE__*/ S.Struct({ none: /*@__PURE__*/ S.Struct({}) }),
        /*@__PURE__*/ S.Struct({ oauth: __S(212, __c26, 4) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({ gatewayArn: S.String, outboundAuth: S.optional(__S(241, __c30, 1)) }),
      ).annotate({
        identifier: "HarnessAgentCoreGatewayConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ description: SensitiveString, inputSchema: S.Any }),
      ).annotate({
        identifier: "HarnessInlineFunctionConfig",
      });
    case 4:
      return S.suspend(() => S.Struct({ codeInterpreterArn: S.optional(S.String) })).annotate({
        identifier: "HarnessAgentCoreCodeInterpreterConfig",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ remoteMcp: __S(239, __c29, 7) }),
        /*@__PURE__*/ S.Struct({ agentCoreBrowser: __S(240, __c30, 0) }),
        /*@__PURE__*/ S.Struct({ agentCoreGateway: __S(242, __c30, 2) }),
        /*@__PURE__*/ S.Struct({ inlineFunction: __S(243, __c30, 3) }),
        /*@__PURE__*/ S.Struct({ agentCoreCodeInterpreter: __S(244, __c30, 4) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          name: S.optional(S.String),
          config: S.optional(__S(245, __c30, 5)),
        }),
      ).annotate({ identifier: "HarnessTool" });
    case 7:
      return S.Array(__S(246, __c30, 6));
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ uri: S.String })).annotate({
        identifier: "HarnessSkillS3Source",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ credentialArn: S.String, username: S.optional(S.String) }),
      ).annotate({ identifier: "HarnessSkillGitAuth" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          url: S.String,
          path: S.optional(S.String),
          auth: S.optional(__S(249, __c31, 1)),
        }),
      ).annotate({ identifier: "HarnessSkillGitSource" });
    case 3:
      return S.suspend(() => S.Struct({ paths: S.optional(__S(5, __c0, 5)) })).annotate({
        identifier: "HarnessSkillAwsSkillsSource",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ path: S.String }),
        /*@__PURE__*/ S.Struct({ s3: __S(248, __c31, 0) }),
        /*@__PURE__*/ S.Struct({ git: __S(250, __c31, 2) }),
        /*@__PURE__*/ S.Struct({ awsSkills: __S(251, __c31, 3) }),
      ]);
    case 5:
      return S.Array(__S(252, __c31, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          topK: S.optional(S.Number),
          relevanceScore: S.optional(S.Number),
          strategyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "HarnessAgentCoreMemoryRetrievalConfig",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(254, __c31, 6).pipe(S.optional));
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          actorId: S.optional(S.String),
          messagesCount: S.optional(S.Number),
          retrievalConfig: S.optional(__S(255, __c31, 7)),
        }),
      ).annotate({
        identifier: "HarnessAgentCoreMemoryConfiguration",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          strategies: S.optional(__S(257, __c32, 1)),
          eventExpiryDuration: S.optional(S.Number),
          encryptionKeyArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "HarnessManagedMemoryConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "HarnessDisabledMemoryConfiguration",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          agentCoreMemoryConfiguration: __S(256, __c32, 0),
        }),
        /*@__PURE__*/ S.Struct({ managedMemoryConfiguration: __S(258, __c32, 2) }),
        /*@__PURE__*/ S.Struct({ disabled: __S(259, __c32, 3) }),
      ]);
    case 5:
      return S.suspend(() => S.Struct({ messagesCount: S.optional(S.Number) })).annotate({
        identifier: "HarnessSlidingWindowConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          summaryRatio: S.optional(S.Number),
          preserveRecentMessages: S.optional(S.Number),
          summarizationSystemPrompt: S.optional(S.String),
        }),
      ).annotate({
        identifier: "HarnessSummarizationConfiguration",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ slidingWindow: __S(261, __c32, 5) }),
        /*@__PURE__*/ S.Struct({ summarization: __S(262, __c32, 6) }),
      ]);
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          strategy: S.String,
          config: S.optional(__S(263, __c32, 7)),
        }),
      ).annotate({
        identifier: "HarnessTruncationConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          timeoutSeconds: S.optional(S.Number),
          failureMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "HarnessHookLambdaTarget" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ lambda: __S(265, __c33, 1) }),
        /*@__PURE__*/ S.Struct({ sns: __S(35, __c4, 3) }),
        /*@__PURE__*/ S.Struct({ eventBridge: __S(132, __c16, 4) }),
      ]);
    case 3:
      return S.suspend(() => S.Struct({ name: S.String, target: __S(266, __c33, 2) })).annotate({
        identifier: "HarnessBeforeInvocationHook",
      });
    case 4:
      return S.suspend(() => S.Struct({ name: S.String, target: __S(266, __c33, 2) })).annotate({
        identifier: "HarnessAfterToolCallHook",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ beforeInvocation: __S(267, __c33, 3) }),
        /*@__PURE__*/ S.Struct({ afterInvocation: __S(267, __c33, 3) }),
        /*@__PURE__*/ S.Struct({ beforeToolCall: __S(267, __c33, 3) }),
        /*@__PURE__*/ S.Struct({ afterToolCall: __S(268, __c33, 4) }),
      ]);
    case 6:
      return S.Array(__S(269, __c33, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          harnessName: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          executionRoleArn: S.String,
          environment: S.optional(__S(230, __c28, 6)),
          environmentArtifact: S.optional(__S(231, __c28, 7)),
          environmentVariables: S.optional(__S(25, __c3, 1)),
          authorizerConfiguration: S.optional(__S(39, __c4, 7)),
          model: S.optional(__S(236, __c29, 4)),
          systemPrompt: S.optional(__S(238, __c29, 6)),
          tools: S.optional(__S(247, __c30, 7)),
          skills: S.optional(__S(253, __c31, 5)),
          allowedTools: S.optional(__S(5, __c0, 5)),
          memory: S.optional(__S(260, __c32, 4)),
          truncation: S.optional(__S(264, __c33, 0)),
          hooks: S.optional(__S(270, __c33, 6)),
          maxIterations: S.optional(S.Number),
          maxTokens: S.optional(S.Number),
          timeoutSeconds: S.optional(S.Number),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/harnesses" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateHarnessRequest" });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentRuntimeArn: S.String,
          agentRuntimeName: S.String,
          agentRuntimeId: S.String,
          lifecycleConfiguration: __S(42, __c5, 2),
          networkConfiguration: __S(24, __c3, 0),
          filesystemConfigurations: S.optional(__S(47, __c5, 7)),
        }),
      ).annotate({
        identifier: "HarnessAgentCoreRuntimeEnvironment",
      });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ agentCoreRuntimeEnvironment: __S(272, __c34, 0) })]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          harnessId: S.String,
          harnessName: S.String,
          arn: S.String,
          status: S.String,
          harnessVersion: S.optional(S.String),
          executionRoleArn: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          model: __S(236, __c29, 4),
          systemPrompt: __S(238, __c29, 6),
          tools: __S(247, __c30, 7),
          skills: __S(253, __c31, 5),
          allowedTools: __S(5, __c0, 5),
          truncation: __S(264, __c33, 0),
          environment: __S(273, __c34, 1),
          environmentArtifact: S.optional(__S(231, __c28, 7)),
          environmentVariables: S.optional(__S(25, __c3, 1)),
          authorizerConfiguration: S.optional(__S(39, __c4, 7)),
          memory: S.optional(__S(260, __c32, 4)),
          hooks: S.optional(__S(270, __c33, 6)),
          maxIterations: S.optional(S.Number),
          maxTokens: S.optional(S.Number),
          timeoutSeconds: S.optional(S.Number),
          failureReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "Harness" });
    case 3:
      return S.suspend(() => S.Struct({ harness: __S(274, __c34, 2) })).annotate({
        identifier: "CreateHarnessResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          harnessId: S.String.pipe(T.HttpLabel("harnessId")),
          endpointName: S.String,
          targetVersion: S.optional(S.String),
          description: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/harnesses/{harnessId}/endpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateHarnessEndpointRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          harnessId: S.String,
          harnessName: S.String,
          endpointName: S.String,
          arn: S.String,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          liveVersion: S.optional(S.String),
          targetVersion: S.optional(S.String),
          description: S.optional(S.String),
          failureReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "HarnessEndpoint" });
    case 6:
      return S.suspend(() => S.Struct({ endpoint: __S(277, __c34, 5) })).annotate({
        identifier: "CreateHarnessEndpointResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ allowedValues: __S(5, __c0, 5) })).annotate({
        identifier: "StringValidation",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          allowedValues: S.optional(__S(5, __c0, 5)),
          maxItems: S.optional(S.Number),
        }),
      ).annotate({ identifier: "StringListValidation" });
    case 1:
      return S.suspend(() =>
        S.Struct({ minValue: S.optional(S.Number), maxValue: S.optional(S.Number) }),
      ).annotate({ identifier: "NumberValidation" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ stringValidation: __S(279, __c34, 7) }),
        /*@__PURE__*/ S.Struct({ stringListValidation: __S(280, __c35, 0) }),
        /*@__PURE__*/ S.Struct({ numberValidation: __S(281, __c35, 1) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          llmExtractionInstruction: S.optional(SensitiveString),
          definition: SensitiveString,
          validation: S.optional(__S(282, __c35, 2)),
        }),
      ).annotate({ identifier: "LlmExtractionConfig" });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ llmExtractionConfig: __S(283, __c35, 3) })]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          key: S.String,
          type: S.optional(S.String),
          extractionType: S.optional(S.String),
          extractionConfig: S.optional(__S(284, __c35, 4)),
        }),
      ).annotate({ identifier: "MetadataSchemaEntry" });
    case 6:
      return S.Array(__S(285, __c35, 5));
    case 7:
      return S.suspend(() => S.Struct({ metadataSchema: S.optional(__S(286, __c35, 6)) })).annotate(
        { identifier: "MemoryRecordSchema" },
      );
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          namespaces: S.optional(__S(5, __c0, 5)),
          namespaceTemplates: S.optional(__S(5, __c0, 5)),
          memoryRecordSchema: S.optional(__S(287, __c35, 7)),
        }),
      ).annotate({
        identifier: "SemanticMemoryStrategyInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ appendToPrompt: SensitiveString, modelId: S.String }),
      ).annotate({
        identifier: "SemanticOverrideExtractionConfigurationInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          extraction: S.optional(__S(289, __c36, 1)),
          consolidation: S.optional(__S(289, __c36, 1)),
        }),
      ).annotate({
        identifier: "SemanticOverrideConfigurationInput",
      });
    case 3:
      return S.suspend(() => S.Struct({ consolidation: S.optional(__S(289, __c36, 1)) })).annotate({
        identifier: "SummaryOverrideConfigurationInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          appendToPrompt: SensitiveString,
          modelId: S.String,
          namespaces: S.optional(__S(5, __c0, 5)),
          namespaceTemplates: S.optional(__S(5, __c0, 5)),
          memoryRecordSchema: S.optional(__S(287, __c35, 7)),
        }),
      ).annotate({
        identifier: "EpisodicOverrideReflectionConfigurationInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          extraction: S.optional(__S(289, __c36, 1)),
          consolidation: S.optional(__S(289, __c36, 1)),
          reflection: S.optional(__S(292, __c36, 4)),
        }),
      ).annotate({
        identifier: "EpisodicOverrideConfigurationInput",
      });
    case 6:
      return S.suspend(() => S.Struct({ messageCount: S.optional(S.Number) })).annotate({
        identifier: "MessageBasedTriggerInput",
      });
    case 7:
      return S.suspend(() => S.Struct({ tokenCount: S.optional(S.Number) })).annotate({
        identifier: "TokenBasedTriggerInput",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ idleSessionTimeout: S.optional(S.Number) })).annotate({
        identifier: "TimeBasedTriggerInput",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ messageBasedTrigger: __S(294, __c36, 6) }),
        /*@__PURE__*/ S.Struct({ tokenBasedTrigger: __S(295, __c36, 7) }),
        /*@__PURE__*/ S.Struct({ timeBasedTrigger: __S(296, __c37, 0) }),
      ]);
    case 2:
      return S.Array(__S(297, __c37, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ topicArn: S.String, payloadDeliveryBucketName: S.String }),
      ).annotate({
        identifier: "InvocationConfigurationInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          triggerConditions: S.optional(__S(298, __c37, 2)),
          invocationConfiguration: __S(299, __c37, 3),
          historicalContextWindowSize: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "SelfManagedConfigurationInput",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ semanticOverride: __S(290, __c36, 2) }),
        /*@__PURE__*/ S.Struct({ summaryOverride: __S(291, __c36, 3) }),
        /*@__PURE__*/ S.Struct({
          userPreferenceOverride: __S(290, __c36, 2),
        }),
        /*@__PURE__*/ S.Struct({ episodicOverride: __S(293, __c36, 5) }),
        /*@__PURE__*/ S.Struct({ selfManagedConfiguration: __S(300, __c37, 4) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          namespaces: S.optional(__S(5, __c0, 5)),
          namespaceTemplates: S.optional(__S(5, __c0, 5)),
          configuration: S.optional(__S(301, __c37, 5)),
          memoryRecordSchema: S.optional(__S(287, __c35, 7)),
        }),
      ).annotate({
        identifier: "CustomMemoryStrategyInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          namespaces: S.optional(__S(5, __c0, 5)),
          namespaceTemplates: S.optional(__S(5, __c0, 5)),
          memoryRecordSchema: S.optional(__S(287, __c35, 7)),
        }),
      ).annotate({
        identifier: "EpisodicReflectionConfigurationInput",
      });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          namespaces: S.optional(__S(5, __c0, 5)),
          namespaceTemplates: S.optional(__S(5, __c0, 5)),
          reflectionConfiguration: S.optional(__S(303, __c37, 7)),
          memoryRecordSchema: S.optional(__S(287, __c35, 7)),
        }),
      ).annotate({
        identifier: "EpisodicMemoryStrategyInput",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ semanticMemoryStrategy: __S(288, __c36, 0) }),
        /*@__PURE__*/ S.Struct({ summaryMemoryStrategy: __S(288, __c36, 0) }),
        /*@__PURE__*/ S.Struct({ userPreferenceMemoryStrategy: __S(288, __c36, 0) }),
        /*@__PURE__*/ S.Struct({ customMemoryStrategy: __S(302, __c37, 6) }),
        /*@__PURE__*/ S.Struct({ episodicMemoryStrategy: __S(304, __c38, 0) }),
      ]);
    case 2:
      return S.Array(__S(305, __c38, 1));
    case 3:
      return S.suspend(() => S.Struct({ key: S.String, type: S.String })).annotate({
        identifier: "IndexedKey",
      });
    case 4:
      return S.Array(__S(307, __c38, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          allowedValues: S.optional(__S(5, __c0, 5)),
          regexPattern: S.optional(S.String),
        }),
      ).annotate({ identifier: "NamespaceKeyValidation" });
    case 6:
      return S.suspend(() =>
        S.Struct({ key: S.String, validation: S.optional(__S(309, __c38, 5)) }),
      ).annotate({ identifier: "NamespaceKeyEntry" });
    case 7:
      return S.Array(__S(310, __c38, 6));
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ type: S.String, level: S.optional(S.String) })).annotate({
        identifier: "ContentConfiguration",
      });
    case 1:
      return S.Array(__S(312, __c39, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ dataStreamArn: S.String, contentConfigurations: __S(313, __c39, 1) }),
      ).annotate({ identifier: "KinesisResource" });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ kinesis: __S(314, __c39, 2) })]);
    case 4:
      return S.Array(__S(315, __c39, 3));
    case 5:
      return S.suspend(() => S.Struct({ resources: __S(316, __c39, 4) })).annotate({
        identifier: "StreamDeliveryResources",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          name: S.String,
          description: S.optional(SensitiveString),
          encryptionKeyArn: S.optional(S.String),
          memoryExecutionRoleArn: S.optional(S.String),
          eventExpiryDuration: S.Number,
          memoryStrategies: S.optional(__S(306, __c38, 2)),
          indexedKeys: S.optional(__S(308, __c38, 4)),
          namespaceKeys: S.optional(__S(311, __c38, 7)),
          streamDeliveryResources: S.optional(__S(317, __c39, 5)),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/memories/create" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateMemoryInput" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ semanticExtractionOverride: __S(289, __c36, 1) }),
        /*@__PURE__*/ S.Struct({
          userPreferenceExtractionOverride: __S(289, __c36, 1),
        }),
        /*@__PURE__*/ S.Struct({ episodicExtractionOverride: __S(289, __c36, 1) }),
      ]);
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ customExtractionConfiguration: __S(319, __c39, 7) }),
      ]);
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ semanticConsolidationOverride: __S(289, __c36, 1) }),
        /*@__PURE__*/ S.Struct({ summaryConsolidationOverride: __S(289, __c36, 1) }),
        /*@__PURE__*/ S.Struct({
          userPreferenceConsolidationOverride: __S(289, __c36, 1),
        }),
        /*@__PURE__*/ S.Struct({ episodicConsolidationOverride: __S(289, __c36, 1) }),
      ]);
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          customConsolidationConfiguration: __S(321, __c40, 1),
        }),
      ]);
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ episodicReflectionOverride: __S(292, __c36, 4) })]);
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ customReflectionConfiguration: __S(323, __c40, 3) }),
        /*@__PURE__*/ S.Struct({
          episodicReflectionConfiguration: __S(303, __c37, 7),
        }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({ topicArn: S.String, payloadDeliveryBucketName: S.String }),
      ).annotate({ identifier: "InvocationConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          triggerConditions: __S(298, __c37, 2),
          invocationConfiguration: __S(325, __c40, 5),
          historicalContextWindowSize: S.Number,
        }),
      ).annotate({ identifier: "SelfManagedConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          extraction: S.optional(__S(320, __c40, 0)),
          consolidation: S.optional(__S(322, __c40, 2)),
          reflection: S.optional(__S(324, __c40, 4)),
          selfManagedConfiguration: S.optional(__S(326, __c40, 6)),
        }),
      ).annotate({ identifier: "StrategyConfiguration" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          strategyId: S.String,
          name: S.String,
          description: S.optional(SensitiveString),
          configuration: S.optional(__S(327, __c40, 7)),
          type: S.String,
          namespaces: __S(5, __c0, 5),
          namespaceTemplates: __S(5, __c0, 5),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          memoryRecordSchema: S.optional(__S(287, __c35, 7)),
        }),
      ).annotate({ identifier: "MemoryStrategy" });
    case 1:
      return S.Array(__S(328, __c41, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          id: S.String,
          name: S.String,
          description: S.optional(SensitiveString),
          encryptionKeyArn: S.optional(S.String),
          memoryExecutionRoleArn: S.optional(S.String),
          eventExpiryDuration: S.Number,
          status: S.String,
          failureReason: S.optional(S.String),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          strategies: S.optional(__S(329, __c41, 1)),
          indexedKeys: S.optional(__S(308, __c38, 4)),
          namespaceKeys: S.optional(__S(311, __c38, 7)),
          streamDeliveryResources: S.optional(__S(317, __c39, 5)),
          managedByResourceArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Memory" });
    case 3:
      return S.suspend(() => S.Struct({ memory: S.optional(__S(330, __c41, 2)) })).annotate({
        identifier: "CreateMemoryOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          issuer: S.String,
          authorizationEndpoint: S.String,
          tokenEndpoint: S.String,
          responseTypes: S.optional(__S(5, __c0, 5)),
          tokenEndpointAuthMethods: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({
        identifier: "Oauth2AuthorizationServerMetadata",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ discoveryUrl: S.String }),
        /*@__PURE__*/ S.Struct({ authorizationServerMetadata: __S(332, __c41, 4) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          actorTokenContent: S.String,
          actorTokenScopes: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({
        identifier: "TokenExchangeGrantTypeConfigType",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          grantType: S.String,
          tokenExchangeGrantTypeConfig: S.optional(__S(334, __c41, 6)),
        }),
      ).annotate({
        identifier: "OnBehalfOfTokenExchangeConfigType",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ kmsKeyArn: S.String })).annotate({
        identifier: "KmsKeySourceType",
      });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ kmsKeySource: __S(336, __c42, 0) })]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          privateKeySource: S.optional(__S(337, __c42, 1)),
          signingAlgorithm: S.optional(S.String),
          additionalHeaderClaims: S.optional(__S(197, __c24, 5)),
          additionalPayloadClaims: S.optional(__S(197, __c24, 5)),
        }),
      ).annotate({ identifier: "PrivateKeyJwtConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          oauthDiscovery: __S(333, __c41, 5),
          clientId: S.optional(S.String),
          clientSecret: S.optional(SensitiveString),
          clientSecretConfig: S.optional(__S(54, __c6, 6)),
          clientSecretSource: S.optional(S.String),
          onBehalfOfTokenExchangeConfig: S.optional(__S(335, __c41, 7)),
          clientAuthenticationMethod: S.optional(S.String),
          privateKeyJwtConfig: S.optional(__S(338, __c42, 2)),
          privateEndpoint: S.optional(__S(32, __c4, 0)),
          privateEndpointOverrides: S.optional(__S(34, __c4, 2)),
        }),
      ).annotate({
        identifier: "CustomOauth2ProviderConfigInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          clientId: S.String,
          clientSecret: S.optional(SensitiveString),
          clientSecretConfig: S.optional(__S(54, __c6, 6)),
          clientSecretSource: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GoogleOauth2ProviderConfigInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          clientId: S.String,
          clientSecret: S.optional(SensitiveString),
          clientSecretConfig: S.optional(__S(54, __c6, 6)),
          clientSecretSource: S.optional(S.String),
          tenantId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MicrosoftOauth2ProviderConfigInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientId: S.String,
          clientSecret: S.optional(SensitiveString),
          clientSecretConfig: S.optional(__S(54, __c6, 6)),
          clientSecretSource: S.optional(S.String),
          issuer: S.optional(S.String),
          authorizationEndpoint: S.optional(S.String),
          tokenEndpoint: S.optional(S.String),
        }),
      ).annotate({
        identifier: "IncludedOauth2ProviderConfigInput",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ customOauth2ProviderConfig: __S(339, __c42, 3) }),
        /*@__PURE__*/ S.Struct({ googleOauth2ProviderConfig: __S(340, __c42, 4) }),
        /*@__PURE__*/ S.Struct({ githubOauth2ProviderConfig: __S(340, __c42, 4) }),
        /*@__PURE__*/ S.Struct({ slackOauth2ProviderConfig: __S(340, __c42, 4) }),
        /*@__PURE__*/ S.Struct({
          salesforceOauth2ProviderConfig: __S(340, __c42, 4),
        }),
        /*@__PURE__*/ S.Struct({
          microsoftOauth2ProviderConfig: __S(341, __c42, 5),
        }),
        /*@__PURE__*/ S.Struct({
          atlassianOauth2ProviderConfig: __S(340, __c42, 4),
        }),
        /*@__PURE__*/ S.Struct({ linkedinOauth2ProviderConfig: __S(340, __c42, 4) }),
        /*@__PURE__*/ S.Struct({ includedOauth2ProviderConfig: __S(342, __c42, 6) }),
      ]);
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          credentialProviderVendor: S.String,
          oauth2ProviderConfigInput: __S(343, __c42, 7),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/CreateOauth2CredentialProvider" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateOauth2CredentialProviderRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          oauthDiscovery: __S(333, __c41, 5),
          clientId: S.optional(S.String),
          onBehalfOfTokenExchangeConfig: S.optional(__S(335, __c41, 7)),
          clientAuthenticationMethod: S.optional(S.String),
          privateEndpoint: S.optional(__S(32, __c4, 0)),
          privateEndpointOverrides: S.optional(__S(34, __c4, 2)),
          privateKeyJwtConfig: S.optional(__S(338, __c42, 2)),
        }),
      ).annotate({
        identifier: "CustomOauth2ProviderConfigOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ oauthDiscovery: __S(333, __c41, 5), clientId: S.optional(S.String) }),
      ).annotate({
        identifier: "GoogleOauth2ProviderConfigOutput",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ customOauth2ProviderConfig: __S(345, __c43, 1) }),
        /*@__PURE__*/ S.Struct({ googleOauth2ProviderConfig: __S(346, __c43, 2) }),
        /*@__PURE__*/ S.Struct({ githubOauth2ProviderConfig: __S(346, __c43, 2) }),
        /*@__PURE__*/ S.Struct({ slackOauth2ProviderConfig: __S(346, __c43, 2) }),
        /*@__PURE__*/ S.Struct({
          salesforceOauth2ProviderConfig: __S(346, __c43, 2),
        }),
        /*@__PURE__*/ S.Struct({
          microsoftOauth2ProviderConfig: __S(346, __c43, 2),
        }),
        /*@__PURE__*/ S.Struct({
          atlassianOauth2ProviderConfig: __S(346, __c43, 2),
        }),
        /*@__PURE__*/ S.Struct({
          linkedinOauth2ProviderConfig: __S(346, __c43, 2),
        }),
        /*@__PURE__*/ S.Struct({
          includedOauth2ProviderConfig: __S(346, __c43, 2),
        }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          clientSecretArn: __S(56, __c7, 0),
          clientSecretJsonKey: S.optional(S.String),
          clientSecretSource: S.optional(S.String),
          name: S.String,
          credentialProviderArn: S.String,
          callbackUrl: S.optional(S.String),
          oauth2ProviderConfigOutput: S.optional(__S(347, __c43, 3)),
          status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateOauth2CredentialProviderResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ samplingPercentage: S.Number })).annotate({
        identifier: "SamplingConfig",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ stringValue: S.String }),
        /*@__PURE__*/ S.Struct({ doubleValue: S.Number }),
        /*@__PURE__*/ S.Struct({ booleanValue: S.Boolean }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({ key: S.String, operator: S.String, value: __S(350, __c43, 6) }),
      ).annotate({ identifier: "Filter" });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(351, __c43, 7));
    case 1:
      return S.suspend(() => S.Struct({ sessionTimeoutMinutes: S.Number })).annotate({
        identifier: "SessionConfig",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          samplingConfig: __S(349, __c43, 5),
          filters: S.optional(__S(352, __c44, 0)),
          sessionConfig: S.optional(__S(353, __c44, 1)),
        }),
      ).annotate({ identifier: "Rule" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          logGroupNames: S.optional(__S(5, __c0, 5)),
          logGroupNamePrefixes: S.optional(__S(5, __c0, 5)),
          serviceNames: __S(5, __c0, 5),
        }),
      ).annotate({
        identifier: "CloudWatchLogsInputConfig",
      });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ cloudWatchLogs: __S(355, __c44, 3) })]);
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ evaluatorId: S.String })]);
    case 6:
      return S.Array(__S(357, __c44, 5));
    case 7:
      return S.suspend(() => S.Struct({ insightId: S.String })).annotate({
        identifier: "Insight",
      });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(359, __c44, 7));
    case 1:
      return S.suspend(() => S.Struct({ frequencies: __S(134, __c16, 6) })).annotate({
        identifier: "ClusteringConfig",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.optional(S.String),
          metricsNamespace: S.optional(S.String),
          resultDestination: S.optional(S.String),
        }),
      ).annotate({ identifier: "CloudWatchOutputConfig" });
    case 3:
      return S.suspend(() => S.Struct({ cloudWatchConfig: __S(362, __c45, 2) })).annotate({
        identifier: "OutputConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          onlineEvaluationConfigName: S.String,
          description: S.optional(SensitiveString),
          rule: __S(354, __c44, 2),
          dataSourceConfig: __S(356, __c44, 4),
          evaluators: S.optional(__S(358, __c44, 6)),
          insights: S.optional(__S(360, __c45, 0)),
          clusteringConfig: S.optional(__S(361, __c45, 1)),
          outputConfig: S.optional(__S(363, __c45, 3)),
          evaluationExecutionRoleArn: S.String,
          enableOnCreate: S.Boolean,
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/online-evaluation-configs/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateOnlineEvaluationConfigRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          onlineEvaluationConfigArn: S.String,
          onlineEvaluationConfigId: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          outputConfig: S.optional(__S(363, __c45, 3)),
          status: S.String,
          executionStatus: S.String,
          failureReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateOnlineEvaluationConfigResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ credentialProviderArn: S.String })).annotate({
        identifier: "PaymentCredentialProviderConfiguration",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ coinbaseCDP: __S(366, __c45, 6) }),
        /*@__PURE__*/ S.Struct({ stripePrivy: __S(366, __c45, 6) }),
      ]);
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(367, __c45, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          paymentManagerId: S.String.pipe(T.HttpLabel("paymentManagerId")),
          name: S.String,
          description: S.optional(S.String),
          type: S.String,
          credentialProviderConfigurations: __S(368, __c46, 0),
          provisionMode: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/payments/managers/{paymentManagerId}/connectors" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePaymentConnectorRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          paymentConnectorId: S.String,
          paymentManagerId: S.String,
          name: S.String,
          type: S.String,
          credentialProviderConfigurations: __S(368, __c46, 0),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          authorizationUrl: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreatePaymentConnectorResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          apiKeyId: S.String,
          apiKeySecret: S.optional(SensitiveString),
          apiKeySecretSource: S.optional(S.String),
          apiKeySecretConfig: S.optional(__S(54, __c6, 6)),
          walletSecret: S.optional(SensitiveString),
          walletSecretSource: S.optional(S.String),
          walletSecretConfig: S.optional(__S(54, __c6, 6)),
        }),
      ).annotate({
        identifier: "CoinbaseCdpConfigurationInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          appId: S.String,
          appSecret: S.optional(SensitiveString),
          appSecretSource: S.optional(S.String),
          appSecretConfig: S.optional(__S(54, __c6, 6)),
          authorizationPrivateKey: S.optional(SensitiveString),
          authorizationPrivateKeySource: S.optional(S.String),
          authorizationPrivateKeyConfig: S.optional(__S(54, __c6, 6)),
          authorizationId: S.String,
        }),
      ).annotate({
        identifier: "StripePrivyConfigurationInput",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ coinbaseCdpConfiguration: __S(371, __c46, 3) }),
        /*@__PURE__*/ S.Struct({ stripePrivyConfiguration: __S(372, __c46, 4) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          credentialProviderVendor: S.String,
          providerConfigurationInput: __S(373, __c46, 5),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/CreatePaymentCredentialProvider" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePaymentCredentialProviderRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          apiKeyId: S.String,
          apiKeySecretArn: __S(56, __c7, 0),
          apiKeySecretJsonKey: S.optional(S.String),
          apiKeySecretSource: S.optional(S.String),
          walletSecretArn: __S(56, __c7, 0),
          walletSecretJsonKey: S.optional(S.String),
          walletSecretSource: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CoinbaseCdpConfigurationOutput",
      });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          appId: S.String,
          appSecretArn: __S(56, __c7, 0),
          appSecretJsonKey: S.optional(S.String),
          appSecretSource: S.optional(S.String),
          authorizationPrivateKeyArn: __S(56, __c7, 0),
          authorizationPrivateKeyJsonKey: S.optional(S.String),
          authorizationPrivateKeySource: S.optional(S.String),
          authorizationId: S.String,
        }),
      ).annotate({
        identifier: "StripePrivyConfigurationOutput",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ coinbaseCdpConfiguration: __S(375, __c46, 7) }),
        /*@__PURE__*/ S.Struct({ stripePrivyConfiguration: __S(376, __c47, 0) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          credentialProviderVendor: S.String,
          credentialProviderArn: S.String,
          providerConfigurationOutput: __S(377, __c47, 1),
        }),
      ).annotate({
        identifier: "CreatePaymentCredentialProviderResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          authorizerType: S.String,
          authorizerConfiguration: S.optional(__S(39, __c4, 7)),
          roleArn: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(7, __c0, 7)),
          kmsKeyArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/payments/managers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePaymentManagerRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          paymentManagerArn: S.String,
          paymentManagerId: S.String,
          name: S.String,
          authorizerType: S.String,
          authorizerConfiguration: S.optional(__S(39, __c4, 7)),
          roleArn: S.String,
          workloadIdentityDetails: S.optional(__S(50, __c6, 2)),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          tags: S.optional(__S(7, __c0, 7)),
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreatePaymentManagerResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ statement: S.String })).annotate({
        identifier: "CedarPolicy",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ policyGenerationId: S.String, policyGenerationAssetId: S.String }),
      ).annotate({ identifier: "PolicyGenerationDetails" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ cedar: __S(381, __c47, 5) }),
        /*@__PURE__*/ S.Struct({ policyGeneration: __S(382, __c47, 6) }),
        /*@__PURE__*/ S.Struct({ policy: __S(381, __c47, 5) }),
      ]);
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          definition: __S(383, __c47, 7),
          description: S.optional(SensitiveString),
          validationMode: S.optional(S.String),
          enforcementMode: S.optional(S.String),
          policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/policy-engines/{policyEngineId}/policies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreatePolicyRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          policyId: S.String,
          name: S.String,
          policyEngineId: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          policyArn: S.String,
          status: S.String,
          enforcementMode: S.optional(S.String),
          definition: __S(383, __c47, 7),
          description: S.optional(SensitiveString),
          statusReasons: __S(5, __c0, 5),
        }),
      ).annotate({ identifier: "CreatePolicyResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          encryptionKeyArn: S.optional(S.String),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/policy-engines" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreatePolicyEngineRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          policyEngineId: S.String,
          name: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          policyEngineArn: S.String,
          status: S.String,
          encryptionKeyArn: S.optional(S.String),
          description: S.optional(SensitiveString),
          statusReasons: __S(5, __c0, 5),
        }),
      ).annotate({
        identifier: "CreatePolicyEngineResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ autoApproval: S.optional(S.Boolean) })).annotate({
        identifier: "ApprovalConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          authorizerType: S.optional(S.String),
          authorizerConfiguration: S.optional(__S(39, __c4, 7)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          approvalConfiguration: S.optional(__S(388, __c48, 4)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/registries" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateRegistryRequest" });
    case 6:
      return S.suspend(() => S.Struct({ registryArn: S.String })).annotate({
        identifier: "CreateRegistryResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ schemaVersion: S.optional(S.String), inlineContent: S.optional(S.String) }),
      ).annotate({ identifier: "ServerDefinition" });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ protocolVersion: S.optional(S.String), inlineContent: S.optional(S.String) }),
      ).annotate({ identifier: "ToolsDefinition" });
    case 1:
      return S.suspend(() =>
        S.Struct({ server: S.optional(__S(391, __c48, 7)), tools: S.optional(__S(392, __c49, 0)) }),
      ).annotate({ identifier: "McpDescriptor" });
    case 2:
      return S.suspend(() => S.Struct({ agentCard: S.optional(__S(391, __c48, 7)) })).annotate({
        identifier: "A2aDescriptor",
      });
    case 3:
      return S.suspend(() => S.Struct({ inlineContent: S.optional(S.String) })).annotate({
        identifier: "CustomDescriptor",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          skillMd: S.optional(__S(395, __c49, 3)),
          skillDefinition: S.optional(__S(391, __c48, 7)),
        }),
      ).annotate({ identifier: "AgentSkillsDescriptor" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          mcp: S.optional(__S(393, __c49, 1)),
          a2a: S.optional(__S(394, __c49, 2)),
          custom: S.optional(__S(395, __c49, 3)),
          agentSkills: S.optional(__S(396, __c49, 4)),
        }),
      ).annotate({ identifier: "Descriptors" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          providerArn: S.String,
          grantType: S.optional(S.String),
          scopes: S.optional(__S(5, __c0, 5)),
          customParameters: S.optional(__S(25, __c3, 1)),
        }),
      ).annotate({
        identifier: "RegistryRecordOAuthCredentialProvider",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.optional(S.String),
          service: S.optional(S.String),
          region: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RegistryRecordIamCredentialProvider",
      });
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ oauthCredentialProvider: __S(398, __c49, 6) }),
        /*@__PURE__*/ S.Struct({ iamCredentialProvider: __S(399, __c49, 7) }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          credentialProviderType: S.String,
          credentialProvider: __S(400, __c50, 0),
        }),
      ).annotate({
        identifier: "RegistryRecordCredentialProviderConfiguration",
      });
    case 2:
      return S.Array(__S(401, __c50, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          url: S.String,
          credentialProviderConfigurations: S.optional(__S(402, __c50, 2)),
        }),
      ).annotate({
        identifier: "FromUrlSynchronizationConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ fromUrl: S.optional(__S(403, __c50, 3)) })).annotate({
        identifier: "SynchronizationConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          registryId: S.String.pipe(T.HttpLabel("registryId")),
          name: S.String,
          description: S.optional(SensitiveString),
          descriptorType: S.String,
          descriptors: S.optional(__S(397, __c49, 5)),
          recordVersion: S.optional(S.String),
          synchronizationType: S.optional(S.String),
          synchronizationConfiguration: S.optional(__S(404, __c50, 4)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/registries/{registryId}/records" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateRegistryRecordRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ recordArn: S.String, status: S.String })).annotate({
        identifier: "CreateRegistryRecordResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          allowedResourceOauth2ReturnUrls: S.optional(__S(5, __c0, 5)),
          tags: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/CreateWorkloadIdentity" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateWorkloadIdentityRequest",
      });
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          workloadIdentityArn: S.String,
          allowedResourceOauth2ReturnUrls: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({
        identifier: "CreateWorkloadIdentityResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          agentRuntimeId: S.String.pipe(T.HttpLabel("agentRuntimeId")),
          agentRuntimeVersion: S.optional(S.String).pipe(T.HttpQuery("version")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/runtimes/{agentRuntimeId}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAgentRuntimeRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          status: S.String,
          agentRuntimeId: S.optional(S.String),
          agentRuntimeVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteAgentRuntimeResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentRuntimeId: S.String.pipe(T.HttpLabel("agentRuntimeId")),
          endpointName: SensitiveString.pipe(T.HttpLabel("endpointName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/runtimes/{agentRuntimeId}/runtime-endpoints/{endpointName}/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAgentRuntimeEndpointRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          status: S.String,
          agentRuntimeId: S.optional(S.String),
          endpointName: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "DeleteAgentRuntimeEndpointResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/DeleteApiKeyCredentialProvider" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteApiKeyCredentialProviderRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          browserId: S.String.pipe(T.HttpLabel("browserId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/browsers/{browserId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteBrowserRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          browserId: S.String,
          status: S.String,
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "DeleteBrowserResponse" });
  }
}
function __c52(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          profileId: S.String.pipe(T.HttpLabel("profileId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/browser-profiles/{profileId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteBrowserProfileRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          profileId: S.String,
          profileArn: S.String,
          status: S.String,
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastSavedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "DeleteBrowserProfileResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          capacityProviderId: S.String.pipe(T.HttpLabel("capacityProviderId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/capacity-providers/{capacityProviderId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCapacityProviderInput",
      });
    case 3:
      return S.suspend(() => S.Struct({ capacityProviderId: S.String, status: S.String })).annotate(
        {
          identifier: "DeleteCapacityProviderOutput",
        },
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          codeInterpreterId: S.String.pipe(T.HttpLabel("codeInterpreterId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/code-interpreters/{codeInterpreterId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCodeInterpreterRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          codeInterpreterId: S.String,
          status: S.String,
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "DeleteCodeInterpreterResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ bundleId: S.String.pipe(T.HttpLabel("bundleId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/configuration-bundles/{bundleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConfigurationBundleRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          bundleArn: S.optional(S.String),
          bundleId: S.String,
          status: S.String,
        }),
      ).annotate({
        identifier: "DeleteConfigurationBundleResponse",
      });
  }
}
function __c53(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ consentPortalIdentifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/DeleteConsentPortal" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConsentPortalRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteConsentPortalResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          datasetVersion: S.optional(S.String).pipe(T.HttpQuery("datasetVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/datasets/{datasetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDatasetRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          datasetArn: S.String,
          datasetId: S.String,
          status: S.String,
          datasetVersion: S.String,
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "DeleteDatasetResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          exampleIds: __S(5, __c0, 5),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/datasets/{datasetId}/examples/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDatasetExamplesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          datasetArn: S.String,
          datasetId: S.String,
          status: S.String,
          deletedCount: S.Number,
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "DeleteDatasetExamplesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ evaluatorId: S.String.pipe(T.HttpLabel("evaluatorId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/evaluators/{evaluatorId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteEvaluatorRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ evaluatorArn: S.String, evaluatorId: S.String, status: S.String }),
      ).annotate({ identifier: "DeleteEvaluatorResponse" });
  }
}
function __c54(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/gateways/{gatewayIdentifier}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteGatewayRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          status: S.String,
          statusReasons: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "DeleteGatewayResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          rateLimitId: S.String.pipe(T.HttpLabel("rateLimitId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/gateways/{gatewayIdentifier}/rate-limits/{rateLimitId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteGatewayRateLimitRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ rateLimitId: S.String, status: S.String })).annotate({
        identifier: "DeleteGatewayRateLimitResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          ruleId: S.String.pipe(T.HttpLabel("ruleId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/gateways/{gatewayIdentifier}/rules/{ruleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteGatewayRuleRequest" });
    case 5:
      return S.suspend(() => S.Struct({ ruleId: S.String, status: S.String })).annotate({
        identifier: "DeleteGatewayRuleResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          targetId: S.String.pipe(T.HttpLabel("targetId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/gateways/{gatewayIdentifier}/targets/{targetId}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteGatewayTargetRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          gatewayArn: S.String,
          targetId: S.String,
          status: S.String,
          statusReasons: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({
        identifier: "DeleteGatewayTargetResponse",
      });
  }
}
function __c55(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          harnessId: S.String.pipe(T.HttpLabel("harnessId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          deleteManagedMemory: S.optional(S.Boolean).pipe(T.HttpQuery("deleteManagedMemory")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/harnesses/{harnessId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteHarnessRequest" });
    case 1:
      return S.suspend(() => S.Struct({ harness: S.optional(__S(274, __c34, 2)) })).annotate({
        identifier: "DeleteHarnessResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          harnessId: S.String.pipe(T.HttpLabel("harnessId")),
          endpointName: S.String.pipe(T.HttpLabel("endpointName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/harnesses/{harnessId}/endpoints/{endpointName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteHarnessEndpointRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/memories/{memoryId}/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteMemoryInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ memoryId: S.String, status: S.optional(S.String) }),
      ).annotate({ identifier: "DeleteMemoryOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/DeleteOauth2CredentialProvider" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteOauth2CredentialProviderRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          onlineEvaluationConfigId: S.String.pipe(T.HttpLabel("onlineEvaluationConfigId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/online-evaluation-configs/{onlineEvaluationConfigId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteOnlineEvaluationConfigRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          onlineEvaluationConfigArn: S.String,
          onlineEvaluationConfigId: S.String,
          status: S.String,
        }),
      ).annotate({
        identifier: "DeleteOnlineEvaluationConfigResponse",
      });
  }
}
function __c56(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          paymentManagerId: S.String.pipe(T.HttpLabel("paymentManagerId")),
          paymentConnectorId: S.String.pipe(T.HttpLabel("paymentConnectorId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/payments/managers/{paymentManagerId}/connectors/{paymentConnectorId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePaymentConnectorRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ status: S.String, paymentConnectorId: S.optional(S.String) }),
      ).annotate({
        identifier: "DeletePaymentConnectorResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/DeletePaymentCredentialProvider" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePaymentCredentialProviderRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          paymentManagerId: S.String.pipe(T.HttpLabel("paymentManagerId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/payments/managers/{paymentManagerId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePaymentManagerRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ status: S.String, paymentManagerId: S.optional(S.String) }),
      ).annotate({
        identifier: "DeletePaymentManagerResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")),
          policyId: S.String.pipe(T.HttpLabel("policyId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/policy-engines/{policyEngineId}/policies/{policyId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeletePolicyRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/policy-engines/{policyEngineId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePolicyEngineRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ registryId: S.String.pipe(T.HttpLabel("registryId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/registries/{registryId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteRegistryRequest" });
  }
}
function __c57(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ status: S.String })).annotate({
        identifier: "DeleteRegistryResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          registryId: S.String.pipe(T.HttpLabel("registryId")),
          recordId: S.String.pipe(T.HttpLabel("recordId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/registries/{registryId}/records/{recordId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRegistryRecordRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/resourcepolicy/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/DeleteWorkloadIdentity" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteWorkloadIdentityRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          agentRuntimeId: S.String.pipe(T.HttpLabel("agentRuntimeId")),
          agentRuntimeVersion: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/runtimes/{agentRuntimeId}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAgentRuntimeRequest" });
    case 5:
      return S.suspend(() => S.Struct({ requireMMDSV2: S.Boolean })).annotate({
        identifier: "RuntimeMetadataConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentRuntimeArn: S.String,
          agentRuntimeName: S.String,
          agentRuntimeId: S.String,
          agentRuntimeVersion: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          roleArn: S.String,
          networkConfiguration: S.optional(__S(24, __c3, 0)),
          status: S.String,
          lifecycleConfiguration: __S(42, __c5, 2),
          failureReason: S.optional(S.String),
          description: S.optional(SensitiveString),
          workloadIdentityDetails: S.optional(__S(50, __c6, 2)),
          agentRuntimeArtifact: S.optional(__S(22, __c2, 6)),
          protocolConfiguration: S.optional(__S(41, __c5, 1)),
          environmentVariables: S.optional(__S(25, __c3, 1)),
          authorizerConfiguration: S.optional(__S(39, __c4, 7)),
          requestHeaderConfiguration: S.optional(__S(40, __c5, 0)),
          metadataConfiguration: S.optional(__S(461, __c57, 5)),
          filesystemConfigurations: S.optional(__S(47, __c5, 7)),
          capacityProviderConfiguration: S.optional(__S(48, __c6, 0)),
          platformVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetAgentRuntimeResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentRuntimeId: S.String.pipe(T.HttpLabel("agentRuntimeId")),
          endpointName: SensitiveString.pipe(T.HttpLabel("endpointName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/runtimes/{agentRuntimeId}/runtime-endpoints/{endpointName}/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAgentRuntimeEndpointRequest",
      });
  }
}
function __c58(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          liveVersion: S.optional(S.String),
          targetVersion: S.optional(S.String),
          agentRuntimeEndpointArn: S.String,
          agentRuntimeArn: S.String,
          description: S.optional(S.String),
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          failureReason: S.optional(S.String),
          name: SensitiveString,
          id: S.String,
        }),
      ).annotate({
        identifier: "GetAgentRuntimeEndpointResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/GetApiKeyCredentialProvider" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetApiKeyCredentialProviderRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          apiKeySecretArn: __S(56, __c7, 0),
          apiKeySecretJsonKey: S.optional(S.String),
          apiKeySecretSource: S.optional(S.String),
          name: S.String,
          credentialProviderArn: S.String,
          createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "GetApiKeyCredentialProviderResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ browserId: S.String.pipe(T.HttpLabel("browserId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/browsers/{browserId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetBrowserRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          browserId: S.String,
          browserArn: S.String,
          name: S.String,
          description: S.optional(SensitiveString),
          executionRoleArn: S.optional(S.String),
          networkConfiguration: __S(58, __c7, 2),
          recording: S.optional(__S(59, __c7, 3)),
          browserSigning: S.optional(__S(60, __c7, 4)),
          enterprisePolicies: S.optional(__S(62, __c7, 6)),
          certificates: S.optional(__S(66, __c8, 2)),
          filesystemConfigurations: S.optional(__S(69, __c8, 5)),
          status: S.String,
          failureReason: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "GetBrowserResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ profileId: S.String.pipe(T.HttpLabel("profileId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/browser-profiles/{profileId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetBrowserProfileRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          profileId: S.String,
          profileArn: S.String,
          name: S.String,
          description: S.optional(SensitiveString),
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastSavedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastSavedBrowserSessionId: S.optional(S.String),
          lastSavedBrowserId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetBrowserProfileResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ capacityProviderId: S.String.pipe(T.HttpLabel("capacityProviderId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/capacity-providers/{capacityProviderId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetCapacityProviderInput" });
  }
}
function __c59(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          capacityProviderId: S.String,
          capacityProviderArn: S.String,
          name: S.String,
          status: S.String,
          description: S.optional(SensitiveString),
          statusCode: S.optional(S.String),
          statusReason: S.optional(S.String),
          permissionsConfiguration: __S(74, __c9, 2),
          computeConfiguration: __S(92, __c11, 4),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "GetCapacityProviderOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ codeInterpreterId: S.String.pipe(T.HttpLabel("codeInterpreterId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/code-interpreters/{codeInterpreterId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCodeInterpreterRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          codeInterpreterId: S.String,
          codeInterpreterArn: S.String,
          name: S.String,
          description: S.optional(SensitiveString),
          executionRoleArn: S.optional(S.String),
          networkConfiguration: __S(58, __c7, 2),
          status: S.String,
          certificates: S.optional(__S(66, __c8, 2)),
          filesystemConfigurations: S.optional(__S(69, __c8, 5)),
          failureReason: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "GetCodeInterpreterResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          bundleId: S.String.pipe(T.HttpLabel("bundleId")),
          branchName: S.optional(S.String).pipe(T.HttpQuery("branchName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/configuration-bundles/{bundleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfigurationBundleRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          parentVersionIds: S.optional(__S(5, __c0, 5)),
          branchName: S.optional(S.String),
          createdBy: S.optional(__S(99, __c12, 3)),
          commitMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "VersionLineageMetadata" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          bundleArn: S.String,
          bundleId: S.String,
          bundleName: S.String,
          description: S.optional(SensitiveString),
          versionId: S.String,
          components: __S(98, __c12, 2),
          lineageMetadata: S.optional(__S(476, __c59, 4)),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetConfigurationBundleResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          bundleId: S.String.pipe(T.HttpLabel("bundleId")),
          versionId: S.String.pipe(T.HttpLabel("versionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/configuration-bundles/{bundleId}/versions/{versionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfigurationBundleVersionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          bundleArn: S.String,
          bundleId: S.String,
          bundleName: S.String,
          description: S.optional(SensitiveString),
          versionId: S.String,
          components: __S(98, __c12, 2),
          lineageMetadata: S.optional(__S(476, __c59, 4)),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          versionCreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetConfigurationBundleVersionResponse",
      });
  }
}
function __c60(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ consentPortalIdentifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/GetConsentPortal" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetConsentPortalRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          sources: __S(104, __c13, 0),
          consentPortalArn: S.String,
          consentPortalId: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          description: S.optional(S.String),
          executionRoleArn: S.String,
          idpConfig: __S(102, __c12, 6),
          name: S.String,
          portalUrl: S.optional(S.String),
          status: S.String,
          statusReason: S.optional(S.String),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "GetConsentPortalResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          datasetVersion: S.optional(S.String).pipe(T.HttpQuery("datasetVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/datasets/{datasetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDatasetRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          datasetArn: S.String,
          datasetId: S.String,
          datasetVersion: S.String,
          datasetName: S.String,
          description: S.optional(S.String),
          status: S.String,
          draftStatus: S.optional(S.String),
          failureReason: S.optional(S.String),
          schemaType: S.String,
          kmsKeyArn: S.optional(S.String),
          exampleCount: S.Number,
          downloadUrl: S.optional(SensitiveString),
          downloadUrlExpiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          tags: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({ identifier: "GetDatasetResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          evaluatorId: S.String.pipe(T.HttpLabel("evaluatorId")),
          includedData: S.optional(S.String).pipe(T.HttpQuery("includedData")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/evaluators/{evaluatorId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEvaluatorRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          evaluatorArn: S.String,
          evaluatorId: S.String,
          evaluatorName: S.String,
          description: S.optional(SensitiveString),
          evaluatorConfig: __S(125, __c15, 5),
          evaluatorType: S.optional(S.String),
          provider: S.optional(S.String),
          level: S.String,
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lockedForModification: S.optional(S.Boolean),
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetEvaluatorResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/gateways/{gatewayIdentifier}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetGatewayRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          rateLimitId: S.String.pipe(T.HttpLabel("rateLimitId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/gateways/{gatewayIdentifier}/rate-limits/{rateLimitId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetGatewayRateLimitRequest",
      });
  }
}
function __c61(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          ruleId: S.String.pipe(T.HttpLabel("ruleId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/gateways/{gatewayIdentifier}/rules/{ruleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetGatewayRuleRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ruleId: S.String,
          gatewayArn: S.String,
          priority: S.Number,
          conditions: S.optional(__S(155, __c19, 3)),
          actions: __S(168, __c21, 0),
          description: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          system: S.optional(__S(170, __c21, 2)),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "GetGatewayRuleResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          targetId: S.String.pipe(T.HttpLabel("targetId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/gateways/{gatewayIdentifier}/targets/{targetId}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetGatewayTargetRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          gatewayArn: S.String,
          targetId: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          statusReasons: S.optional(__S(5, __c0, 5)),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          targetConfiguration: __S(211, __c26, 3),
          credentialProviderConfigurations: __S(217, __c27, 1),
          lastSynchronizedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          metadataConfiguration: S.optional(__S(218, __c27, 2)),
          privateEndpoint: S.optional(__S(32, __c4, 0)),
          privateEndpointManagedResources: S.optional(__S(225, __c28, 1)),
          authorizationData: S.optional(__S(227, __c28, 3)),
          protocolType: S.optional(S.String),
          certificateConfigurations: S.optional(__S(222, __c27, 6)),
        }),
      ).annotate({ identifier: "GetGatewayTargetResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          harnessId: S.String.pipe(T.HttpLabel("harnessId")),
          harnessVersion: S.optional(S.String).pipe(T.HttpQuery("harnessVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/harnesses/{harnessId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetHarnessRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          harnessId: S.String.pipe(T.HttpLabel("harnessId")),
          endpointName: S.String.pipe(T.HttpLabel("endpointName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/harnesses/{harnessId}/endpoints/{endpointName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetHarnessEndpointRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          view: S.optional(S.String).pipe(T.HttpQuery("view")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/memories/{memoryId}/details" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMemoryInput" });
    case 7:
      return S.suspend(() => S.Struct({ memory: __S(330, __c41, 2) })).annotate({
        identifier: "GetMemoryOutput",
      });
  }
}
function __c62(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/GetOauth2CredentialProvider" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetOauth2CredentialProviderRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          clientSecretArn: __S(56, __c7, 0),
          clientSecretJsonKey: S.optional(S.String),
          clientSecretSource: S.optional(S.String),
          name: S.String,
          credentialProviderArn: S.String,
          credentialProviderVendor: S.String,
          callbackUrl: S.optional(S.String),
          oauth2ProviderConfigOutput: __S(347, __c43, 3),
          createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: S.optional(S.String),
          failureReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetOauth2CredentialProviderResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          onlineEvaluationConfigId: S.String.pipe(T.HttpLabel("onlineEvaluationConfigId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/online-evaluation-configs/{onlineEvaluationConfigId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetOnlineEvaluationConfigRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          onlineEvaluationConfigArn: S.String,
          onlineEvaluationConfigId: S.String,
          onlineEvaluationConfigName: S.String,
          description: S.optional(SensitiveString),
          rule: __S(354, __c44, 2),
          dataSourceConfig: __S(356, __c44, 4),
          evaluators: S.optional(__S(358, __c44, 6)),
          insights: S.optional(__S(360, __c45, 0)),
          clusteringConfig: S.optional(__S(361, __c45, 1)),
          outputConfig: S.optional(__S(363, __c45, 3)),
          evaluationExecutionRoleArn: S.optional(S.String),
          status: S.String,
          executionStatus: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          failureReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetOnlineEvaluationConfigResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          paymentManagerId: S.String.pipe(T.HttpLabel("paymentManagerId")),
          paymentConnectorId: S.String.pipe(T.HttpLabel("paymentConnectorId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/payments/managers/{paymentManagerId}/connectors/{paymentConnectorId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPaymentConnectorRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          paymentConnectorId: S.String,
          name: S.String,
          description: S.optional(S.String),
          type: S.String,
          provisionMode: S.optional(S.String),
          credentialProviderConfigurations: __S(368, __c46, 0),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          authorizationUrl: S.optional(S.String),
          credentialsUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "GetPaymentConnectorResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/GetPaymentCredentialProvider" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPaymentCredentialProviderRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          credentialProviderArn: S.String,
          credentialProviderVendor: S.String,
          providerConfigurationOutput: __S(377, __c47, 1),
          createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          tags: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({
        identifier: "GetPaymentCredentialProviderResponse",
      });
  }
}
function __c63(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ paymentManagerId: S.String.pipe(T.HttpLabel("paymentManagerId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/payments/managers/{paymentManagerId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPaymentManagerRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          paymentManagerArn: S.String,
          paymentManagerId: S.String,
          name: S.String,
          description: S.optional(S.String),
          authorizerType: S.String,
          authorizerConfiguration: S.optional(__S(39, __c4, 7)),
          roleArn: S.String,
          workloadIdentityDetails: S.optional(__S(50, __c6, 2)),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          tags: S.optional(__S(7, __c0, 7)),
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetPaymentManagerResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")),
          policyId: S.String.pipe(T.HttpLabel("policyId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/policy-engines/{policyEngineId}/policies/{policyId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPolicyRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/policy-engines/{policyEngineId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPolicyEngineRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          policyEngineId: S.String,
          name: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          policyEngineArn: S.String,
          status: S.String,
          encryptionKeyArn: S.optional(S.String),
          description: S.optional(SensitiveString),
          statusReasons: __S(5, __c0, 5),
        }),
      ).annotate({ identifier: "GetPolicyEngineResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/policy-engine-summaries/{policyEngineId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPolicyEngineSummaryRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          policyEngineId: S.String,
          name: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          policyEngineArn: S.String,
          status: S.String,
          encryptionKeyArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetPolicyEngineSummaryResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          policyGenerationId: S.String.pipe(T.HttpLabel("policyGenerationId")),
          policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/policy-engines/{policyEngineId}/policy-generations/{policyGenerationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPolicyGenerationRequest",
      });
  }
}
function __c64(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ arn: S.String })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          policyEngineId: S.String,
          policyGenerationId: S.String,
          name: S.String,
          policyGenerationArn: S.String,
          resource: __S(512, __c64, 0),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          findings: S.optional(S.String),
          statusReasons: __S(5, __c0, 5),
        }),
      ).annotate({
        identifier: "GetPolicyGenerationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          policyGenerationId: S.String.pipe(T.HttpLabel("policyGenerationId")),
          policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/policy-engines/{policyEngineId}/policy-generation-summaries/{policyGenerationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPolicyGenerationSummaryRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          policyEngineId: S.String,
          policyGenerationId: S.String,
          name: S.String,
          policyGenerationArn: S.String,
          resource: __S(512, __c64, 0),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          findings: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetPolicyGenerationSummaryResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")),
          policyId: S.String.pipe(T.HttpLabel("policyId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/policy-engines/{policyEngineId}/policy-summaries/{policyId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPolicySummaryRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          policyId: S.String,
          name: S.String,
          policyEngineId: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          policyArn: S.String,
          status: S.String,
          enforcementMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetPolicySummaryResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ registryId: S.String.pipe(T.HttpLabel("registryId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/registries/{registryId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRegistryRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          registryId: S.String,
          registryArn: S.String,
          authorizerType: S.optional(S.String),
          authorizerConfiguration: S.optional(__S(39, __c4, 7)),
          approvalConfiguration: S.optional(__S(388, __c48, 4)),
          status: S.String,
          statusReason: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "GetRegistryResponse" });
  }
}
function __c65(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          registryId: S.String.pipe(T.HttpLabel("registryId")),
          recordId: S.String.pipe(T.HttpLabel("recordId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/registries/{registryId}/records/{recordId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRegistryRecordRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          registryArn: S.String,
          recordArn: S.String,
          recordId: S.String,
          name: S.String,
          description: S.optional(SensitiveString),
          descriptorType: S.String,
          descriptors: __S(397, __c49, 5),
          recordVersion: S.optional(S.String),
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          statusReason: S.optional(S.String),
          synchronizationType: S.optional(S.String),
          synchronizationConfiguration: S.optional(__S(404, __c50, 4)),
        }),
      ).annotate({
        identifier: "GetRegistryRecordResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/resourcepolicy/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetResourcePolicyRequest" });
    case 3:
      return S.suspend(() => S.Struct({ policy: S.optional(S.String) })).annotate({
        identifier: "GetResourcePolicyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ tokenVaultId: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/get-token-vault" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetTokenVaultRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ keyType: S.String, kmsKeyArn: S.optional(S.String) }),
      ).annotate({ identifier: "KmsConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          tokenVaultId: S.String,
          kmsConfiguration: __S(525, __c65, 5),
          lastModifiedDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "GetTokenVaultResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/GetWorkloadIdentity" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWorkloadIdentityRequest",
      });
  }
}
function __c66(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          workloadIdentityArn: S.String,
          allowedResourceOauth2ReturnUrls: S.optional(__S(5, __c0, 5)),
          createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "GetWorkloadIdentityResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          agentRuntimeId: S.String.pipe(T.HttpLabel("agentRuntimeId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/runtimes/{agentRuntimeId}/runtime-endpoints/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAgentRuntimeEndpointsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: SensitiveString,
          liveVersion: S.optional(S.String),
          targetVersion: S.optional(S.String),
          agentRuntimeEndpointArn: S.String,
          agentRuntimeArn: S.String,
          status: S.String,
          id: S.String,
          description: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "AgentRuntimeEndpoint" });
    case 3:
      return S.Array(__S(530, __c66, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ runtimeEndpoints: __S(531, __c66, 3), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAgentRuntimeEndpointsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/runtimes/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAgentRuntimesRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentRuntimeArn: S.String,
          agentRuntimeId: S.String,
          agentRuntimeVersion: S.String,
          agentRuntimeName: S.String,
          description: SensitiveString,
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
        }),
      ).annotate({ identifier: "AgentRuntime" });
    case 7:
      return S.Array(__S(534, __c66, 6));
  }
}
function __c67(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ agentRuntimes: __S(535, __c66, 7), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAgentRuntimesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          agentRuntimeId: S.String.pipe(T.HttpLabel("agentRuntimeId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/runtimes/{agentRuntimeId}/versions/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAgentRuntimeVersionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          capacityProviderId: S.String.pipe(T.HttpLabel("capacityProviderId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/capacity-providers/{capacityProviderId}/runtime-versions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAgentRuntimeVersionsByCapacityProviderInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentRuntimeArn: S.String,
          agentRuntimeVersion: S.String,
          status: S.String,
        }),
      ).annotate({
        identifier: "AgentRuntimeVersionSummary",
      });
    case 4:
      return S.Array(__S(539, __c67, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentRuntimes: __S(540, __c67, 4),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAgentRuntimeVersionsByCapacityProviderOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/ListApiKeyCredentialProviders" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListApiKeyCredentialProvidersRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          credentialProviderArn: S.String,
          createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "ApiKeyCredentialProviderItem",
      });
  }
}
function __c68(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(543, __c67, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          credentialProviders: __S(544, __c68, 0),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListApiKeyCredentialProvidersResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          name: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/browser-profiles" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListBrowserProfilesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          profileId: S.String,
          profileArn: S.String,
          name: S.String,
          description: S.optional(SensitiveString),
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastSavedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastSavedBrowserSessionId: S.optional(S.String),
          lastSavedBrowserId: S.optional(S.String),
        }),
      ).annotate({ identifier: "BrowserProfileSummary" });
    case 4:
      return S.Array(__S(547, __c68, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ profileSummaries: __S(548, __c68, 4), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListBrowserProfilesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          type: S.optional(S.String).pipe(T.HttpQuery("type")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/browsers" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListBrowsersRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          browserId: S.String,
          browserArn: S.String,
          name: S.optional(S.String),
          description: S.optional(SensitiveString),
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "BrowserSummary" });
  }
}
function __c69(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(551, __c68, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ browserSummaries: __S(552, __c69, 0), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListBrowsersResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/capacity-providers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCapacityProvidersInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          capacityProviderId: S.String,
          capacityProviderArn: S.String,
          name: S.String,
          status: S.String,
          lastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "CapacityProviderSummary" });
    case 4:
      return S.Array(__S(555, __c69, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ capacityProviders: __S(556, __c69, 4), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListCapacityProvidersOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          type: S.optional(S.String).pipe(T.HttpQuery("type")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/code-interpreters" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCodeInterpretersRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          codeInterpreterId: S.String,
          codeInterpreterArn: S.String,
          name: S.optional(S.String),
          description: S.optional(SensitiveString),
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CodeInterpreterSummary" });
  }
}
function __c70(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(559, __c69, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          codeInterpreterSummaries: __S(560, __c70, 0),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCodeInterpretersResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configuration-bundles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConfigurationBundlesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          bundleArn: S.String,
          bundleId: S.String,
          bundleName: S.String,
          description: S.optional(SensitiveString),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "ConfigurationBundleSummary",
      });
    case 4:
      return S.Array(__S(563, __c70, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ bundles: __S(564, __c70, 4), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListConfigurationBundlesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          branchName: S.optional(S.String),
          createdByName: S.optional(S.String),
          latestPerBranch: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "VersionFilter" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          bundleId: S.String.pipe(T.HttpLabel("bundleId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          filter: S.optional(__S(566, __c70, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configuration-bundles/{bundleId}/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConfigurationBundleVersionsRequest",
      });
  }
}
function __c71(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          bundleArn: S.String,
          bundleId: S.String,
          versionId: S.String,
          lineageMetadata: S.optional(__S(476, __c59, 4)),
          versionCreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "ConfigurationBundleVersionSummary",
      });
    case 1:
      return S.Array(__S(568, __c71, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          versions: __S(569, __c71, 1),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListConfigurationBundleVersionsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/ListConsentPortals" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConsentPortalsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sources: __S(104, __c13, 0),
          consentPortalArn: S.String,
          consentPortalId: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          description: S.optional(S.String),
          name: S.String,
          portalUrl: S.optional(S.String),
          status: S.String,
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "ConsentPortalSummary" });
    case 5:
      return S.Array(__S(572, __c71, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ consentPortals: __S(573, __c71, 5), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListConsentPortalsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          datasetVersion: S.optional(S.String).pipe(T.HttpQuery("datasetVersion")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/datasets/{datasetId}/examples" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDatasetExamplesRequest",
      });
  }
}
function __c72(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          datasetArn: S.String,
          datasetId: S.String,
          datasetVersion: S.String,
          examples: __S(0, __c0, 0),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDatasetExamplesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/datasets" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDatasetsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          datasetArn: S.String,
          datasetId: S.String,
          datasetName: S.String,
          description: S.optional(S.String),
          status: S.String,
          draftStatus: S.optional(S.String),
          schemaType: S.String,
          exampleCount: S.Number,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "DatasetSummary" });
    case 3:
      return S.Array(__S(578, __c72, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ datasets: __S(579, __c72, 3), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDatasetsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/datasets/{datasetId}/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDatasetVersionsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          datasetVersion: S.String,
          exampleCount: S.Number,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "DatasetVersionSummary" });
    case 7:
      return S.Array(__S(582, __c72, 6));
  }
}
function __c73(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ versions: __S(583, __c72, 7), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDatasetVersionsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/evaluators" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListEvaluatorsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          evaluatorArn: S.String,
          evaluatorId: S.String,
          evaluatorName: S.String,
          description: S.optional(SensitiveString),
          evaluatorType: S.String,
          provider: S.optional(S.String),
          level: S.optional(S.String),
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lockedForModification: S.optional(S.Boolean),
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "EvaluatorSummary" });
    case 3:
      return S.Array(__S(586, __c73, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ evaluators: __S(587, __c73, 3), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListEvaluatorsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/gateways/{gatewayIdentifier}/rate-limits" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListGatewayRateLimitsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ rateLimits: __S(16, __c2, 0), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListGatewayRateLimitsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/gateways/{gatewayIdentifier}/rules" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListGatewayRulesRequest" });
  }
}
function __c74(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(489, __c61, 1));
    case 1:
      return S.suspend(() =>
        S.Struct({ gatewayRules: __S(592, __c74, 0), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListGatewayRulesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/gateways/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListGatewaysRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          name: S.String,
          status: S.String,
          description: S.optional(SensitiveString),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          authorizerType: S.String,
          protocolType: S.optional(S.String),
        }),
      ).annotate({ identifier: "GatewaySummary" });
    case 4:
      return S.Array(__S(595, __c74, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ items: __S(596, __c74, 4), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListGatewaysResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/gateways/{gatewayIdentifier}/targets/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListGatewayTargetsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          targetId: S.String,
          name: SensitiveString,
          status: S.String,
          description: S.optional(SensitiveString),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          resourcePriority: S.optional(S.Number),
          lastSynchronizedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          authorizationData: S.optional(__S(227, __c28, 3)),
          targetType: S.optional(S.String),
          listingMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "TargetSummary" });
  }
}
function __c75(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(599, __c74, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ items: __S(600, __c75, 0), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListGatewayTargetsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          harnessId: S.String.pipe(T.HttpLabel("harnessId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/harnesses/{harnessId}/endpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListHarnessEndpointsRequest",
      });
    case 3:
      return S.Array(__S(277, __c34, 5));
    case 4:
      return S.suspend(() =>
        S.Struct({ endpoints: __S(603, __c75, 3), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListHarnessEndpointsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/harnesses" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListHarnessesRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          harnessId: S.String,
          harnessName: S.String,
          arn: S.String,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          harnessVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "HarnessSummary" });
    case 7:
      return S.Array(__S(606, __c75, 6));
  }
}
function __c76(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ harnesses: __S(607, __c75, 7), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListHarnessesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          harnessId: S.String.pipe(T.HttpLabel("harnessId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/harnesses/{harnessId}/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListHarnessVersionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          harnessId: S.String,
          harnessName: S.String,
          arn: S.String,
          harnessVersion: S.String,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          failureReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "HarnessVersionSummary" });
    case 3:
      return S.Array(__S(610, __c76, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ harnessVersions: __S(611, __c76, 3), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListHarnessVersionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/memories/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListMemoriesInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          status: S.optional(S.String),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          managedByResourceArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "MemorySummary" });
    case 7:
      return S.Array(__S(614, __c76, 6));
  }
}
function __c77(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ memories: __S(615, __c76, 7), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListMemoriesOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/ListOauth2CredentialProviders" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListOauth2CredentialProvidersRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          credentialProviderVendor: S.String,
          credentialProviderArn: S.String,
          createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "Oauth2CredentialProviderItem",
      });
    case 3:
      return S.Array(__S(618, __c77, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          credentialProviders: __S(619, __c77, 3),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListOauth2CredentialProvidersResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/online-evaluation-configs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListOnlineEvaluationConfigsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          onlineEvaluationConfigArn: S.String,
          onlineEvaluationConfigId: S.String,
          onlineEvaluationConfigName: S.String,
          description: S.optional(SensitiveString),
          status: S.String,
          executionStatus: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          failureReason: S.optional(S.String),
          insights: S.optional(__S(360, __c45, 0)),
          clusteringConfig: S.optional(__S(361, __c45, 1)),
        }),
      ).annotate({
        identifier: "OnlineEvaluationConfigSummary",
      });
    case 7:
      return S.Array(__S(622, __c77, 6));
  }
}
function __c78(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          onlineEvaluationConfigs: __S(623, __c77, 7),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListOnlineEvaluationConfigsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          paymentManagerId: S.String.pipe(T.HttpLabel("paymentManagerId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/payments/managers/{paymentManagerId}/connectors-list",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPaymentConnectorsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          paymentConnectorId: S.String,
          name: S.String,
          type: S.String,
          provisionMode: S.optional(S.String),
          status: S.String,
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "PaymentConnectorSummary" });
    case 3:
      return S.Array(__S(626, __c78, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ paymentConnectors: __S(627, __c78, 3), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListPaymentConnectorsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/ListPaymentCredentialProviders" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPaymentCredentialProvidersRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/payments/managers-list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPaymentManagersRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          paymentManagerArn: S.String,
          paymentManagerId: S.String,
          name: S.String,
          description: S.optional(S.String),
          authorizerType: S.String,
          roleArn: S.String,
          status: S.String,
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "PaymentManagerSummary" });
  }
}
function __c79(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(631, __c78, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ paymentManagers: __S(632, __c79, 0), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListPaymentManagersResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")),
          targetResourceScope: S.optional(S.String).pipe(T.HttpQuery("targetResourceScope")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/policy-engines/{policyEngineId}/policies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListPoliciesRequest" });
    case 3:
      return S.Array(__S(385, __c48, 1));
    case 4:
      return S.suspend(() =>
        S.Struct({ policies: __S(635, __c79, 3), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListPoliciesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/policy-engines" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListPolicyEnginesRequest" });
    case 6:
      return S.Array(__S(508, __c63, 4));
    case 7:
      return S.suspend(() =>
        S.Struct({ policyEngines: __S(638, __c79, 6), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListPolicyEnginesResponse",
      });
  }
}
function __c80(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/policy-engine-summaries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPolicyEngineSummariesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          policyEngineId: S.String,
          name: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          policyEngineArn: S.String,
          status: S.String,
          encryptionKeyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "PolicyEngineSummary" });
    case 2:
      return S.Array(__S(641, __c80, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ policyEngines: __S(642, __c80, 2), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListPolicyEngineSummariesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          policyGenerationId: S.String.pipe(T.HttpLabel("policyGenerationId")),
          policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/policy-engines/{policyEngineId}/policy-generations/{policyGenerationId}/assets",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPolicyGenerationAssetsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ type: S.optional(S.String), description: S.optional(S.String) }),
      ).annotate({ identifier: "Finding" });
    case 6:
      return S.Array(__S(645, __c80, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          policyGenerationAssetId: S.String,
          definition: S.optional(__S(383, __c47, 7)),
          rawTextFragment: S.String,
          findings: __S(646, __c80, 6),
        }),
      ).annotate({ identifier: "PolicyGenerationAsset" });
  }
}
function __c81(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(647, __c80, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          policyGenerationAssets: S.optional(__S(648, __c81, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPolicyGenerationAssetsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/policy-engines/{policyEngineId}/policy-generations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPolicyGenerationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          policyEngineId: S.String,
          policyGenerationId: S.String,
          name: S.String,
          policyGenerationArn: S.String,
          resource: __S(512, __c64, 0),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          findings: S.optional(S.String),
          statusReasons: __S(5, __c0, 5),
        }),
      ).annotate({ identifier: "PolicyGeneration" });
    case 4:
      return S.Array(__S(651, __c81, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ policyGenerations: __S(652, __c81, 4), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListPolicyGenerationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/policy-engines/{policyEngineId}/policy-generation-summaries",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPolicyGenerationSummariesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          policyEngineId: S.String,
          policyGenerationId: S.String,
          name: S.String,
          policyGenerationArn: S.String,
          resource: __S(512, __c64, 0),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          findings: S.optional(S.String),
        }),
      ).annotate({ identifier: "PolicyGenerationSummary" });
  }
}
function __c82(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(655, __c81, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          policyGenerations: __S(656, __c82, 0),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPolicyGenerationSummariesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")),
          targetResourceScope: S.optional(S.String).pipe(T.HttpQuery("targetResourceScope")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/policy-engines/{policyEngineId}/policy-summaries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPolicySummariesRequest",
      });
    case 3:
      return S.Array(__S(517, __c64, 5));
    case 4:
      return S.suspend(() =>
        S.Struct({ policies: __S(659, __c82, 3), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListPolicySummariesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          authorizerType: S.optional(S.String).pipe(T.HttpQuery("authorizerType")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/registries" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRegistriesRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          registryId: S.String,
          registryArn: S.String,
          authorizerType: S.optional(S.String),
          status: S.String,
          statusReason: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "RegistrySummary" });
    case 7:
      return S.Array(__S(662, __c82, 6));
  }
}
function __c83(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ registries: __S(663, __c82, 7), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRegistriesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          registryId: S.String.pipe(T.HttpLabel("registryId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          name: S.optional(S.String).pipe(T.HttpQuery("name")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          descriptorType: S.optional(S.String).pipe(T.HttpQuery("descriptorType")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/registries/{registryId}/records" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRegistryRecordsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          registryArn: S.String,
          recordArn: S.String,
          recordId: S.String,
          name: S.String,
          description: S.optional(SensitiveString),
          descriptorType: S.String,
          recordVersion: S.String,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "RegistryRecordSummary" });
    case 3:
      return S.Array(__S(666, __c83, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ registryRecords: __S(667, __c83, 3), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListRegistryRecordsResponse",
      });
    case 5:
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
    case 6:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(7, __c0, 7)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/ListWorkloadIdentities" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListWorkloadIdentitiesRequest",
      });
  }
}
function __c84(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.String, workloadIdentityArn: S.String })).annotate({
        identifier: "WorkloadIdentityType",
      });
    case 1:
      return S.Array(__S(672, __c84, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ workloadIdentities: __S(673, __c84, 1), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListWorkloadIdentitiesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), policy: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/resourcepolicy/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutResourcePolicyRequest" });
    case 4:
      return S.suspend(() => S.Struct({ policy: S.String })).annotate({
        identifier: "PutResourcePolicyResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ secrets: __S(134, __c16, 6) })).annotate({
        identifier: "CoinbaseCdpRotationTargets",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ coinbaseCDP: __S(677, __c84, 5) })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          paymentManagerId: S.String.pipe(T.HttpLabel("paymentManagerId")),
          paymentConnectorId: S.String.pipe(T.HttpLabel("paymentConnectorId")),
          credentialsToRotate: __S(678, __c84, 6),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/payments/managers/{paymentManagerId}/connectors/{paymentConnectorId}/rotate-credentials",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RotatePaymentConnectorCredentialsRequest",
      });
  }
}
function __c85(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          paymentConnectorId: S.String,
          paymentManagerId: S.String,
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
        }),
      ).annotate({
        identifier: "RotatePaymentConnectorCredentialsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ tokenVaultId: S.optional(S.String), kmsConfiguration: __S(525, __c65, 5) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/set-token-vault-cmk" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SetTokenVaultCMKRequest" });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ rawText: S.String })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")),
          resource: __S(512, __c64, 0),
          content: __S(682, __c85, 2),
          name: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/policy-engines/{policyEngineId}/policy-generations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartPolicyGenerationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          registryId: S.String.pipe(T.HttpLabel("registryId")),
          recordId: S.String.pipe(T.HttpLabel("recordId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/registries/{registryId}/records/{recordId}/submit-for-approval",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SubmitRegistryRecordForApprovalRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          registryArn: S.String,
          recordArn: S.String,
          recordId: S.String,
          status: S.String,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "SubmitRegistryRecordForApprovalResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          targetIdList: __S(5, __c0, 5),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/gateways/{gatewayIdentifier}/synchronizeTargets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SynchronizeGatewayTargetsRequest",
      });
    case 7:
      return S.Array(__S(491, __c61, 3));
  }
}
function __c86(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ targets: S.optional(__S(687, __c85, 7)) })).annotate({
        identifier: "SynchronizeGatewayTargetsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(7, __c0, 7),
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
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(5, __c0, 5).pipe(T.HttpQuery("tagKeys")),
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
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentRuntimeId: S.String.pipe(T.HttpLabel("agentRuntimeId")),
          agentRuntimeArtifact: __S(22, __c2, 6),
          roleArn: S.String,
          networkConfiguration: S.optional(__S(24, __c3, 0)),
          description: S.optional(SensitiveString),
          authorizerConfiguration: S.optional(__S(39, __c4, 7)),
          requestHeaderConfiguration: S.optional(__S(40, __c5, 0)),
          protocolConfiguration: S.optional(__S(41, __c5, 1)),
          lifecycleConfiguration: S.optional(__S(42, __c5, 2)),
          metadataConfiguration: S.optional(__S(461, __c57, 5)),
          environmentVariables: S.optional(__S(25, __c3, 1)),
          filesystemConfigurations: S.optional(__S(47, __c5, 7)),
          capacityProviderConfiguration: S.optional(__S(48, __c6, 0)),
          platformVersion: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/runtimes/{agentRuntimeId}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAgentRuntimeRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          agentRuntimeArn: S.String,
          agentRuntimeId: S.String,
          workloadIdentityDetails: S.optional(__S(50, __c6, 2)),
          agentRuntimeVersion: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
        }),
      ).annotate({
        identifier: "UpdateAgentRuntimeResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentRuntimeId: S.String.pipe(T.HttpLabel("agentRuntimeId")),
          endpointName: SensitiveString.pipe(T.HttpLabel("endpointName")),
          agentRuntimeVersion: S.optional(S.String),
          description: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/runtimes/{agentRuntimeId}/runtime-endpoints/{endpointName}/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAgentRuntimeEndpointRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          liveVersion: S.optional(S.String),
          targetVersion: S.optional(S.String),
          agentRuntimeEndpointArn: S.String,
          agentRuntimeArn: S.String,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "UpdateAgentRuntimeEndpointResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          apiKey: S.optional(SensitiveString),
          apiKeySecretConfig: S.optional(__S(54, __c6, 6)),
          apiKeySecretSource: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/UpdateApiKeyCredentialProvider" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateApiKeyCredentialProviderRequest",
      });
  }
}
function __c87(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(SensitiveString) })).annotate({
        identifier: "UpdatedDescription",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          capacityProviderId: S.String.pipe(T.HttpLabel("capacityProviderId")),
          description: S.optional(__S(696, __c87, 0)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/capacity-providers/{capacityProviderId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateCapacityProviderInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          capacityProviderId: S.String,
          capacityProviderArn: S.String,
          name: S.String,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "UpdateCapacityProviderOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          bundleId: S.String.pipe(T.HttpLabel("bundleId")),
          bundleName: S.optional(S.String),
          description: S.optional(SensitiveString),
          components: S.optional(__S(98, __c12, 2)),
          parentVersionIds: __S(5, __c0, 5),
          branchName: S.optional(S.String),
          commitMessage: S.String,
          createdBy: S.optional(__S(99, __c12, 3)),
          kmsKeyArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/configuration-bundles/{bundleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConfigurationBundleRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          bundleArn: S.String,
          bundleId: S.String,
          versionId: S.String,
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "UpdateConfigurationBundleResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          consentPortalIdentifier: S.String,
          executionRoleArn: S.optional(S.String),
          idpConfig: S.optional(__S(102, __c12, 6)),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/UpdateConsentPortal" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConsentPortalRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/datasets/{datasetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDatasetRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          datasetArn: S.String,
          datasetId: S.String,
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "UpdateDatasetResponse" });
  }
}
function __c88(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          examples: __S(0, __c0, 0),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/datasets/{datasetId}/examples/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDatasetExamplesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          datasetArn: S.String,
          datasetId: S.String,
          status: S.String,
          updatedCount: S.Number,
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "UpdateDatasetExamplesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          evaluatorId: S.String.pipe(T.HttpLabel("evaluatorId")),
          description: S.optional(SensitiveString),
          evaluatorConfig: S.optional(__S(125, __c15, 5)),
          level: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/evaluators/{evaluatorId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateEvaluatorRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          evaluatorArn: S.String,
          evaluatorId: S.String,
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: S.String,
        }),
      ).annotate({ identifier: "UpdateEvaluatorResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          name: S.String,
          description: S.optional(SensitiveString),
          roleArn: S.String,
          protocolType: S.optional(S.String),
          protocolConfiguration: S.optional(__S(131, __c16, 3)),
          authorizerType: S.String,
          authorizerConfiguration: S.optional(__S(39, __c4, 7)),
          kmsKeyArn: S.optional(S.String),
          customTransformConfiguration: S.optional(__S(144, __c18, 0)),
          interceptorConfigurations: S.optional(__S(140, __c17, 4)),
          policyEngineConfiguration: S.optional(__S(141, __c17, 5)),
          exceptionLevel: S.optional(S.String),
          wafConfiguration: S.optional(__S(145, __c18, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/gateways/{gatewayIdentifier}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateGatewayRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          rateLimitId: S.String.pipe(T.HttpLabel("rateLimitId")),
          description: S.optional(S.String),
          entries: __S(11, __c1, 3),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/gateways/{gatewayIdentifier}/rate-limits/{rateLimitId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateGatewayRateLimitRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          ruleId: S.String.pipe(T.HttpLabel("ruleId")),
          priority: S.optional(S.Number),
          conditions: S.optional(__S(155, __c19, 3)),
          actions: S.optional(__S(168, __c21, 0)),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/gateways/{gatewayIdentifier}/rules/{ruleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateGatewayRuleRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ruleId: S.String,
          gatewayArn: S.String,
          priority: S.Number,
          conditions: S.optional(__S(155, __c19, 3)),
          actions: __S(168, __c21, 0),
          description: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          system: S.optional(__S(170, __c21, 2)),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "UpdateGatewayRuleResponse",
      });
  }
}
function __c89(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          gatewayIdentifier: S.String.pipe(T.HttpLabel("gatewayIdentifier")),
          targetId: S.String.pipe(T.HttpLabel("targetId")),
          name: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          targetConfiguration: __S(211, __c26, 3),
          credentialProviderConfigurations: S.optional(__S(217, __c27, 1)),
          metadataConfiguration: S.optional(__S(218, __c27, 2)),
          privateEndpoint: S.optional(__S(32, __c4, 0)),
          certificateConfigurations: S.optional(__S(222, __c27, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/gateways/{gatewayIdentifier}/targets/{targetId}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateGatewayTargetRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(231, __c28, 7)) })).annotate({
        identifier: "UpdatedHarnessEnvironmentArtifact",
      });
    case 2:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(39, __c4, 7)) })).annotate({
        identifier: "UpdatedAuthorizerConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(260, __c32, 4)) })).annotate({
        identifier: "UpdatedHarnessMemoryConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          harnessId: S.String.pipe(T.HttpLabel("harnessId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          executionRoleArn: S.optional(S.String),
          environment: S.optional(__S(230, __c28, 6)),
          environmentArtifact: S.optional(__S(713, __c89, 1)),
          environmentVariables: S.optional(__S(25, __c3, 1)),
          authorizerConfiguration: S.optional(__S(714, __c89, 2)),
          model: S.optional(__S(236, __c29, 4)),
          systemPrompt: S.optional(__S(238, __c29, 6)),
          tools: S.optional(__S(247, __c30, 7)),
          skills: S.optional(__S(253, __c31, 5)),
          allowedTools: S.optional(__S(5, __c0, 5)),
          memory: S.optional(__S(715, __c89, 3)),
          truncation: S.optional(__S(264, __c33, 0)),
          hooks: S.optional(__S(270, __c33, 6)),
          maxIterations: S.optional(S.Number),
          maxTokens: S.optional(S.Number),
          timeoutSeconds: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/harnesses/{harnessId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateHarnessRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          harnessId: S.String.pipe(T.HttpLabel("harnessId")),
          endpointName: S.String.pipe(T.HttpLabel("endpointName")),
          targetVersion: S.optional(S.String),
          description: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/harnesses/{harnessId}/endpoints/{endpointName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateHarnessEndpointRequest",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          semanticExtractionOverride: __S(289, __c36, 1),
        }),
        /*@__PURE__*/ S.Struct({
          userPreferenceExtractionOverride: __S(289, __c36, 1),
        }),
        /*@__PURE__*/ S.Struct({
          episodicExtractionOverride: __S(289, __c36, 1),
        }),
      ]);
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          customExtractionConfiguration: __S(718, __c89, 6),
        }),
      ]);
  }
}
function __c90(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          semanticConsolidationOverride: __S(289, __c36, 1),
        }),
        /*@__PURE__*/ S.Struct({
          summaryConsolidationOverride: __S(289, __c36, 1),
        }),
        /*@__PURE__*/ S.Struct({
          userPreferenceConsolidationOverride: __S(289, __c36, 1),
        }),
        /*@__PURE__*/ S.Struct({
          episodicConsolidationOverride: __S(289, __c36, 1),
        }),
      ]);
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          customConsolidationConfiguration: __S(720, __c90, 0),
        }),
      ]);
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          episodicReflectionOverride: __S(292, __c36, 4),
        }),
      ]);
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          episodicReflectionConfiguration: __S(303, __c37, 7),
        }),
        /*@__PURE__*/ S.Struct({
          customReflectionConfiguration: __S(722, __c90, 2),
        }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          topicArn: S.optional(S.String),
          payloadDeliveryBucketName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ModifyInvocationConfigurationInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          triggerConditions: S.optional(__S(298, __c37, 2)),
          invocationConfiguration: S.optional(__S(724, __c90, 4)),
          historicalContextWindowSize: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ModifySelfManagedConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          extraction: S.optional(__S(719, __c89, 7)),
          consolidation: S.optional(__S(721, __c90, 1)),
          reflection: S.optional(__S(723, __c90, 3)),
          selfManagedConfiguration: S.optional(__S(725, __c90, 5)),
        }),
      ).annotate({
        identifier: "ModifyStrategyConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          memoryStrategyId: S.String,
          description: S.optional(SensitiveString),
          namespaces: S.optional(__S(5, __c0, 5)),
          namespaceTemplates: S.optional(__S(5, __c0, 5)),
          configuration: S.optional(__S(726, __c90, 6)),
          memoryRecordSchema: S.optional(__S(287, __c35, 7)),
        }),
      ).annotate({
        identifier: "ModifyMemoryStrategyInput",
      });
  }
}
function __c91(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(727, __c90, 7));
    case 1:
      return S.suspend(() => S.Struct({ memoryStrategyId: S.String })).annotate({
        identifier: "DeleteMemoryStrategyInput",
      });
    case 2:
      return S.Array(__S(729, __c91, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          addMemoryStrategies: S.optional(__S(306, __c38, 2)),
          modifyMemoryStrategies: S.optional(__S(728, __c91, 0)),
          deleteMemoryStrategies: S.optional(__S(730, __c91, 2)),
        }),
      ).annotate({ identifier: "ModifyMemoryStrategies" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          description: S.optional(SensitiveString),
          eventExpiryDuration: S.optional(S.Number),
          memoryExecutionRoleArn: S.optional(S.String),
          memoryStrategies: S.optional(__S(731, __c91, 3)),
          addIndexedKeys: S.optional(__S(308, __c38, 4)),
          namespaceKeys: S.optional(__S(311, __c38, 7)),
          streamDeliveryResources: S.optional(__S(317, __c39, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/memories/{memoryId}/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateMemoryInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          credentialProviderVendor: S.String,
          oauth2ProviderConfigInput: __S(343, __c42, 7),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/UpdateOauth2CredentialProvider" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateOauth2CredentialProviderRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientSecretArn: __S(56, __c7, 0),
          clientSecretJsonKey: S.optional(S.String),
          clientSecretSource: S.optional(S.String),
          name: S.String,
          credentialProviderVendor: S.String,
          credentialProviderArn: S.String,
          callbackUrl: S.optional(S.String),
          oauth2ProviderConfigOutput: __S(347, __c43, 3),
          createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateOauth2CredentialProviderResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          onlineEvaluationConfigId: S.String.pipe(T.HttpLabel("onlineEvaluationConfigId")),
          description: S.optional(SensitiveString),
          rule: S.optional(__S(354, __c44, 2)),
          dataSourceConfig: S.optional(__S(356, __c44, 4)),
          evaluators: S.optional(__S(358, __c44, 6)),
          insights: S.optional(__S(360, __c45, 0)),
          clusteringConfig: S.optional(__S(361, __c45, 1)),
          outputConfig: S.optional(__S(363, __c45, 3)),
          evaluationExecutionRoleArn: S.optional(S.String),
          executionStatus: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/online-evaluation-configs/{onlineEvaluationConfigId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateOnlineEvaluationConfigRequest",
      });
  }
}
function __c92(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          onlineEvaluationConfigArn: S.String,
          onlineEvaluationConfigId: S.String,
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: S.String,
          executionStatus: S.String,
          failureReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateOnlineEvaluationConfigResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          paymentManagerId: S.String.pipe(T.HttpLabel("paymentManagerId")),
          paymentConnectorId: S.String.pipe(T.HttpLabel("paymentConnectorId")),
          description: S.optional(S.String),
          type: S.optional(S.String),
          credentialProviderConfigurations: S.optional(__S(368, __c46, 0)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/payments/managers/{paymentManagerId}/connectors/{paymentConnectorId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdatePaymentConnectorRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          paymentConnectorId: S.String,
          paymentManagerId: S.String,
          name: S.String,
          type: S.String,
          credentialProviderConfigurations: __S(368, __c46, 0),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          authorizationUrl: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdatePaymentConnectorResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          credentialProviderVendor: S.String,
          providerConfigurationInput: __S(373, __c46, 5),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/UpdatePaymentCredentialProvider" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdatePaymentCredentialProviderRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          credentialProviderVendor: S.String,
          credentialProviderArn: S.String,
          providerConfigurationOutput: __S(377, __c47, 1),
          createdTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "UpdatePaymentCredentialProviderResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          paymentManagerId: S.String.pipe(T.HttpLabel("paymentManagerId")),
          description: S.optional(S.String),
          authorizerType: S.optional(S.String),
          authorizerConfiguration: S.optional(__S(39, __c4, 7)),
          roleArn: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          kmsKeyArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/payments/managers/{paymentManagerId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdatePaymentManagerRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          paymentManagerArn: S.String,
          paymentManagerId: S.String,
          name: S.String,
          authorizerType: S.String,
          roleArn: S.String,
          workloadIdentityDetails: S.optional(__S(50, __c6, 2)),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdatePaymentManagerResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")),
          policyId: S.String.pipe(T.HttpLabel("policyId")),
          description: S.optional(__S(696, __c87, 0)),
          definition: S.optional(__S(383, __c47, 7)),
          validationMode: S.optional(S.String),
          enforcementMode: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/policy-engines/{policyEngineId}/policies/{policyId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdatePolicyRequest" });
  }
}
function __c93(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          policyEngineId: S.String.pipe(T.HttpLabel("policyEngineId")),
          description: S.optional(__S(696, __c87, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/policy-engines/{policyEngineId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdatePolicyEngineRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(388, __c48, 4)) })).annotate({
        identifier: "UpdatedApprovalConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          registryId: S.String.pipe(T.HttpLabel("registryId")),
          name: S.optional(S.String),
          description: S.optional(__S(696, __c87, 0)),
          authorizerConfiguration: S.optional(__S(714, __c89, 2)),
          approvalConfiguration: S.optional(__S(745, __c93, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/registries/{registryId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateRegistryRequest" });
    case 3:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(391, __c48, 7)) })).annotate({
        identifier: "UpdatedServerDefinition",
      });
    case 4:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(392, __c49, 0)) })).annotate({
        identifier: "UpdatedToolsDefinition",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          server: S.optional(__S(747, __c93, 3)),
          tools: S.optional(__S(748, __c93, 4)),
        }),
      ).annotate({
        identifier: "UpdatedMcpDescriptorFields",
      });
    case 6:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(749, __c93, 5)) })).annotate({
        identifier: "UpdatedMcpDescriptor",
      });
    case 7:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(394, __c49, 2)) })).annotate({
        identifier: "UpdatedA2aDescriptor",
      });
  }
}
function __c94(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(395, __c49, 3)) })).annotate({
        identifier: "UpdatedCustomDescriptor",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          skillMd: S.optional(__S(752, __c94, 0)),
          skillDefinition: S.optional(__S(747, __c93, 3)),
        }),
      ).annotate({
        identifier: "UpdatedAgentSkillsDescriptorFields",
      });
    case 2:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(753, __c94, 1)) })).annotate({
        identifier: "UpdatedAgentSkillsDescriptor",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          mcp: S.optional(__S(750, __c93, 6)),
          a2a: S.optional(__S(751, __c93, 7)),
          custom: S.optional(__S(752, __c94, 0)),
          agentSkills: S.optional(__S(754, __c94, 2)),
        }),
      ).annotate({ identifier: "UpdatedDescriptorsUnion" });
    case 4:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(755, __c94, 3)) })).annotate({
        identifier: "UpdatedDescriptors",
      });
    case 5:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(S.String) })).annotate({
        identifier: "UpdatedSynchronizationType",
      });
    case 6:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(404, __c50, 4)) })).annotate({
        identifier: "UpdatedSynchronizationConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          registryId: S.String.pipe(T.HttpLabel("registryId")),
          recordId: S.String.pipe(T.HttpLabel("recordId")),
          name: S.optional(S.String),
          description: S.optional(__S(696, __c87, 0)),
          descriptorType: S.optional(S.String),
          descriptors: S.optional(__S(756, __c94, 4)),
          recordVersion: S.optional(S.String),
          synchronizationType: S.optional(__S(757, __c94, 5)),
          synchronizationConfiguration: S.optional(__S(758, __c94, 6)),
          triggerSynchronization: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/registries/{registryId}/records/{recordId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateRegistryRecordRequest",
      });
  }
}
function __c95(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          registryId: S.String.pipe(T.HttpLabel("registryId")),
          recordId: S.String.pipe(T.HttpLabel("recordId")),
          status: S.String,
          statusReason: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/registries/{registryId}/records/{recordId}/status" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateRegistryRecordStatusRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          registryArn: S.String,
          recordArn: S.String,
          recordId: S.String,
          status: S.String,
          statusReason: S.String,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "UpdateRegistryRecordStatusResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          allowedResourceOauth2ReturnUrls: S.optional(__S(5, __c0, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/UpdateWorkloadIdentity" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateWorkloadIdentityRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 4:
      return S.Array(__S(763, __c95, 3));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
