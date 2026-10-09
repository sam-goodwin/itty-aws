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
const ns = /*@__PURE__*/ T.XmlNamespace("http://amplify.amazonaws.com");
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "Amplify", serviceShapeName: "Amplify" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "amplify" });
const ver = /*@__PURE__*/ T.ServiceVersion("2017-07-25");
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
              `https://amplify-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://amplify-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://amplify.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://amplify.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class DependentServiceFailureException
  extends /*@__PURE__*/ S.TaggedError<DependentServiceFailureException>()(
    "DependentServiceFailureException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class InternalFailureException
  extends /*@__PURE__*/ S.TaggedError<InternalFailureException>()(
    "InternalFailureException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { code: S.String, message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class TimeoutException
  extends /*@__PURE__*/ S.TaggedError<TimeoutException>()("TimeoutException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class UnauthorizedException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedException>()(
    "UnauthorizedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export type Name = string;
export type Description = string;
export type Repository = string;
export type Platform = "WEB" | "WEB_DYNAMIC" | "WEB_COMPUTE" | (string & {});
const Platform = S.String;

export type ComputeRoleArn = string;
export type ServiceRoleArn = string;
export type OauthToken = string | redacted.Redacted<string>;
export type AccessToken = string | redacted.Redacted<string>;
export type EnvKey = string;
export type EnvValue = string;
export type EnvironmentVariables = { [key: string]: string | undefined };
const EnvironmentVariables = /*@__PURE__*/ __L.at(__c0, 0);
export type EnableBranchAutoBuild = boolean;
export type EnableBranchAutoDeletion = boolean;
export type EnableBasicAuth = boolean;
export type BasicAuthCredentials = string | redacted.Redacted<string>;
export type Source = string;
export type Target = string;
export type Status = string;
export type Condition = string;
export interface CustomRule {
  source: string;
  target: string;
  status?: string;
  condition?: string;
}
const CustomRule = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<CustomRule>;
export type CustomRules = CustomRule[];
const CustomRules = /*@__PURE__*/ __L.at(__c0, 2);
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c0, 3);
export type BuildSpec = string | redacted.Redacted<string>;
export type CustomHeaders = string;
export type EnableAutoBranchCreation = boolean;
export type AutoBranchCreationPattern = string;
export type AutoBranchCreationPatterns = string[];
const AutoBranchCreationPatterns = /*@__PURE__*/ __L.at(__c0, 4);
export type Stage =
  | "PRODUCTION"
  | "BETA"
  | "DEVELOPMENT"
  | "EXPERIMENTAL"
  | "PULL_REQUEST"
  | (string & {});
const Stage = S.String;

export type Framework = string;
export type EnableAutoBuild = boolean;
export type EnablePerformanceMode = boolean;
export type EnablePullRequestPreview = boolean;
export type PullRequestEnvironmentName = string;
export interface AutoBranchCreationConfig {
  stage?: Stage;
  framework?: string;
  enableAutoBuild?: boolean;
  environmentVariables?: { [key: string]: string | undefined };
  basicAuthCredentials?: string | redacted.Redacted<string>;
  enableBasicAuth?: boolean;
  enablePerformanceMode?: boolean;
  buildSpec?: string | redacted.Redacted<string>;
  enablePullRequestPreview?: boolean;
  pullRequestEnvironmentName?: string;
}
const AutoBranchCreationConfig = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<AutoBranchCreationConfig>;
export type BuildComputeType = "STANDARD_8GB" | "LARGE_16GB" | "XLARGE_72GB" | (string & {});
const BuildComputeType = S.String;

export interface JobConfig {
  buildComputeType: BuildComputeType;
}
const JobConfig = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<JobConfig>;
export type CacheConfigType = "AMPLIFY_MANAGED" | "AMPLIFY_MANAGED_NO_COOKIES" | (string & {});
const CacheConfigType = S.String;

export interface CacheConfig {
  type: CacheConfigType;
}
const CacheConfig = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<CacheConfig>;
export interface CreateAppRequest {
  name: string;
  description?: string;
  repository?: string;
  platform?: Platform;
  computeRoleArn?: string;
  iamServiceRoleArn?: string;
  oauthToken?: string | redacted.Redacted<string>;
  accessToken?: string | redacted.Redacted<string>;
  environmentVariables?: { [key: string]: string | undefined };
  enableBranchAutoBuild?: boolean;
  enableBranchAutoDeletion?: boolean;
  enableBasicAuth?: boolean;
  basicAuthCredentials?: string | redacted.Redacted<string>;
  customRules?: CustomRule[];
  tags?: { [key: string]: string | undefined };
  buildSpec?: string | redacted.Redacted<string>;
  customHeaders?: string;
  enableAutoBranchCreation?: boolean;
  autoBranchCreationPatterns?: string[];
  autoBranchCreationConfig?: AutoBranchCreationConfig;
  jobConfig?: JobConfig;
  cacheConfig?: CacheConfig;
}
const CreateAppRequest = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<CreateAppRequest>;
export type AppId = string;
export type AppArn = string;
export type CreateTime = Date;
export type UpdateTime = Date;
export type DefaultDomain = string;
export type LastDeployTime = Date;
export type ThumbnailUrl = string;
export type BranchName = string;
export interface ProductionBranch {
  lastDeployTime?: Date;
  status?: string;
  thumbnailUrl?: string;
  branchName?: string;
}
const ProductionBranch = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<ProductionBranch>;
export type RepositoryCloneMethod = "SSH" | "TOKEN" | "SIGV4" | (string & {});
const RepositoryCloneMethod = S.String;

export type WebhookCreateTime = Date;
export type WebAclArn = string;
export type WafStatus =
  | "ASSOCIATING"
  | "ASSOCIATION_FAILED"
  | "ASSOCIATION_SUCCESS"
  | "DISASSOCIATING"
  | "DISASSOCIATION_FAILED"
  | (string & {});
const WafStatus = S.String;

export type StatusReason = string;
export interface WafConfiguration {
  webAclArn?: string;
  wafStatus?: WafStatus;
  statusReason?: string;
}
const WafConfiguration = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<WafConfiguration>;
export interface App {
  appId: string;
  appArn: string;
  name: string;
  tags?: { [key: string]: string | undefined };
  description?: string;
  repository?: string;
  platform?: Platform;
  createTime: Date;
  updateTime: Date;
  computeRoleArn?: string;
  iamServiceRoleArn?: string;
  environmentVariables?: { [key: string]: string | undefined };
  defaultDomain?: string;
  enableBranchAutoBuild?: boolean;
  enableBranchAutoDeletion?: boolean;
  enableBasicAuth?: boolean;
  basicAuthCredentials?: string | redacted.Redacted<string>;
  customRules?: CustomRule[];
  productionBranch?: ProductionBranch;
  buildSpec?: string | redacted.Redacted<string>;
  customHeaders?: string;
  enableAutoBranchCreation?: boolean;
  autoBranchCreationPatterns?: string[];
  autoBranchCreationConfig?: AutoBranchCreationConfig;
  repositoryCloneMethod?: RepositoryCloneMethod;
  cacheConfig?: CacheConfig;
  webhookCreateTime?: Date;
  wafConfiguration?: WafConfiguration;
  jobConfig?: JobConfig;
}
const App = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<App>;
export interface CreateAppResult {
  app: App;
}
const CreateAppResult = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<CreateAppResult>;
export type EnvironmentName = string;
export type StackName = string;
export type DeploymentArtifacts = string;
export interface CreateBackendEnvironmentRequest {
  appId: string;
  environmentName: string;
  stackName?: string;
  deploymentArtifacts?: string;
}
const CreateBackendEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<CreateBackendEnvironmentRequest>;
export type BackendEnvironmentArn = string;
export interface BackendEnvironment {
  backendEnvironmentArn: string;
  environmentName: string;
  stackName?: string;
  deploymentArtifacts?: string;
  createTime: Date;
  updateTime: Date;
}
const BackendEnvironment = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<BackendEnvironment>;
export interface CreateBackendEnvironmentResult {
  backendEnvironment: BackendEnvironment;
}
const CreateBackendEnvironmentResult = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<CreateBackendEnvironmentResult>;
export type EnableNotification = boolean;
export type EnableSkewProtection = boolean;
export type TTL = string;
export type DisplayName = string;
export type StackArn = string;
export interface Backend {
  stackArn?: string;
}
const Backend = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<Backend>;
export interface CreateBranchRequest {
  appId: string;
  branchName: string;
  description?: string;
  stage?: Stage;
  framework?: string;
  enableNotification?: boolean;
  enableAutoBuild?: boolean;
  enableSkewProtection?: boolean;
  environmentVariables?: { [key: string]: string | undefined };
  basicAuthCredentials?: string | redacted.Redacted<string>;
  enableBasicAuth?: boolean;
  enablePerformanceMode?: boolean;
  tags?: { [key: string]: string | undefined };
  buildSpec?: string | redacted.Redacted<string>;
  ttl?: string;
  displayName?: string;
  enablePullRequestPreview?: boolean;
  pullRequestEnvironmentName?: string;
  backendEnvironmentArn?: string;
  backend?: Backend;
  computeRoleArn?: string;
}
const CreateBranchRequest = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<CreateBranchRequest>;
export type BranchArn = string;
export type CustomDomain = string;
export type CustomDomains = string[];
const CustomDomains = AutoBranchCreationPatterns as any as S.Schema<CustomDomains>;
export type ActiveJobId = string;
export type TotalNumberOfJobs = string;
export type AssociatedResource = string;
export type AssociatedResources = string[];
const AssociatedResources = AutoBranchCreationPatterns as any as S.Schema<AssociatedResources>;
export interface Branch {
  branchArn: string;
  branchName: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
  stage?: Stage;
  displayName?: string;
  enableNotification?: boolean;
  createTime: Date;
  updateTime: Date;
  environmentVariables?: { [key: string]: string | undefined };
  enableAutoBuild?: boolean;
  enableSkewProtection?: boolean;
  customDomains?: string[];
  framework?: string;
  activeJobId?: string;
  totalNumberOfJobs?: string;
  enableBasicAuth?: boolean;
  enablePerformanceMode?: boolean;
  thumbnailUrl?: string;
  basicAuthCredentials?: string | redacted.Redacted<string>;
  buildSpec?: string | redacted.Redacted<string>;
  ttl?: string;
  associatedResources?: string[];
  enablePullRequestPreview?: boolean;
  pullRequestEnvironmentName?: string;
  destinationBranch?: string;
  sourceBranch?: string;
  backendEnvironmentArn?: string;
  backend?: Backend;
  computeRoleArn?: string;
}
const Branch = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<Branch>;
export interface CreateBranchResult {
  branch: Branch;
}
const CreateBranchResult = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<CreateBranchResult>;
export type FileName = string;
export type MD5Hash = string;
export type FileMap = { [key: string]: string | undefined };
const FileMap = TagMap as any as S.Schema<FileMap>;
export interface CreateDeploymentRequest {
  appId: string;
  branchName: string;
  fileMap?: { [key: string]: string | undefined };
}
const CreateDeploymentRequest = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<CreateDeploymentRequest>;
export type JobId = string;
export type UploadUrl = string;
export type FileUploadUrls = { [key: string]: string | undefined };
const FileUploadUrls = EnvironmentVariables as any as S.Schema<FileUploadUrls>;
export interface CreateDeploymentResult {
  jobId?: string;
  fileUploadUrls?: { [key: string]: string | undefined };
  zipUploadUrl: string;
}
const CreateDeploymentResult = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<CreateDeploymentResult>;
export type DomainName = string;
export type EnableAutoSubDomain = boolean;
export type DomainPrefix = string;
export interface SubDomainSetting {
  prefix: string;
  branchName: string;
}
const SubDomainSetting = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<SubDomainSetting>;
export type SubDomainSettings = SubDomainSetting[];
const SubDomainSettings = /*@__PURE__*/ __L.at(__c2, 7);
export type AutoSubDomainCreationPattern = string;
export type AutoSubDomainCreationPatterns = string[];
const AutoSubDomainCreationPatterns =
  AutoBranchCreationPatterns as any as S.Schema<AutoSubDomainCreationPatterns>;
export type AutoSubDomainIAMRole = string;
export type CertificateType = "AMPLIFY_MANAGED" | "CUSTOM" | (string & {});
const CertificateType = S.String;

export type CertificateArn = string;
export interface CertificateSettings {
  type: CertificateType;
  customCertificateArn?: string;
}
const CertificateSettings = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<CertificateSettings>;
export interface CreateDomainAssociationRequest {
  appId: string;
  domainName: string;
  enableAutoSubDomain?: boolean;
  subDomainSettings: SubDomainSetting[];
  autoSubDomainCreationPatterns?: string[];
  autoSubDomainIAMRole?: string;
  certificateSettings?: CertificateSettings;
}
const CreateDomainAssociationRequest = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<CreateDomainAssociationRequest>;
export type DomainAssociationArn = string;
export type DomainStatus =
  | "PENDING_VERIFICATION"
  | "IN_PROGRESS"
  | "AVAILABLE"
  | "IMPORTING_CUSTOM_CERTIFICATE"
  | "PENDING_DEPLOYMENT"
  | "AWAITING_APP_CNAME"
  | "FAILED"
  | "CREATING"
  | "REQUESTING_CERTIFICATE"
  | "UPDATING"
  | (string & {});
const DomainStatus = S.String;

export type UpdateStatus =
  | "REQUESTING_CERTIFICATE"
  | "PENDING_VERIFICATION"
  | "IMPORTING_CUSTOM_CERTIFICATE"
  | "PENDING_DEPLOYMENT"
  | "AWAITING_APP_CNAME"
  | "UPDATE_COMPLETE"
  | "UPDATE_FAILED"
  | (string & {});
const UpdateStatus = S.String;

export type CertificateVerificationDNSRecord = string;
export type Verified = boolean;
export type DNSRecord = string;
export interface SubDomain {
  subDomainSetting: SubDomainSetting;
  verified: boolean;
  dnsRecord: string;
}
const SubDomain = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<SubDomain>;
export type SubDomains = SubDomain[];
const SubDomains = /*@__PURE__*/ __L.at(__c3, 3);
export interface Certificate {
  type: CertificateType;
  customCertificateArn?: string;
  certificateVerificationDNSRecord?: string;
}
const Certificate = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<Certificate>;
export interface DomainAssociation {
  domainAssociationArn: string;
  domainName: string;
  enableAutoSubDomain: boolean;
  autoSubDomainCreationPatterns?: string[];
  autoSubDomainIAMRole?: string;
  domainStatus: DomainStatus;
  updateStatus?: UpdateStatus;
  statusReason: string;
  certificateVerificationDNSRecord?: string;
  subDomains: SubDomain[];
  certificate?: Certificate;
}
const DomainAssociation = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<DomainAssociation>;
export interface CreateDomainAssociationResult {
  domainAssociation: DomainAssociation;
}
const CreateDomainAssociationResult = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<CreateDomainAssociationResult>;
export interface CreateWebhookRequest {
  appId: string;
  branchName: string;
  description?: string;
}
const CreateWebhookRequest = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<CreateWebhookRequest>;
export type WebhookArn = string;
export type WebhookId = string;
export type WebhookUrl = string;
export interface Webhook {
  webhookArn: string;
  webhookId: string;
  webhookUrl: string;
  appId?: string;
  branchName: string;
  description: string;
  createTime: Date;
  updateTime: Date;
}
const Webhook = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<Webhook>;
export interface CreateWebhookResult {
  webhook: Webhook;
}
const CreateWebhookResult = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<CreateWebhookResult>;
export interface DeleteAppRequest {
  appId: string;
}
const DeleteAppRequest = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<DeleteAppRequest>;
export interface DeleteAppResult {
  app: App;
}
const DeleteAppResult = CreateAppResult as any as S.Schema<DeleteAppResult>;
export interface DeleteBackendEnvironmentRequest {
  appId: string;
  environmentName: string;
}
const DeleteBackendEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<DeleteBackendEnvironmentRequest>;
export interface DeleteBackendEnvironmentResult {
  backendEnvironment: BackendEnvironment;
}
const DeleteBackendEnvironmentResult =
  CreateBackendEnvironmentResult as any as S.Schema<DeleteBackendEnvironmentResult>;
export interface DeleteBranchRequest {
  appId: string;
  branchName: string;
}
const DeleteBranchRequest = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<DeleteBranchRequest>;
export interface DeleteBranchResult {
  branch: Branch;
}
const DeleteBranchResult = CreateBranchResult as any as S.Schema<DeleteBranchResult>;
export interface DeleteDomainAssociationRequest {
  appId: string;
  domainName: string;
}
const DeleteDomainAssociationRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<DeleteDomainAssociationRequest>;
export interface DeleteDomainAssociationResult {
  domainAssociation: DomainAssociation;
}
const DeleteDomainAssociationResult =
  CreateDomainAssociationResult as any as S.Schema<DeleteDomainAssociationResult>;
export interface DeleteJobRequest {
  appId: string;
  branchName: string;
  jobId: string;
}
const DeleteJobRequest = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<DeleteJobRequest>;
export type JobArn = string;
export type CommitId = string;
export type CommitMessage = string;
export type CommitTime = Date;
export type StartTime = Date;
export type JobStatus =
  | "CREATED"
  | "PENDING"
  | "PROVISIONING"
  | "RUNNING"
  | "FAILED"
  | "SUCCEED"
  | "CANCELLING"
  | "CANCELLED"
  | (string & {});
const JobStatus = S.String;

export type EndTime = Date;
export type JobType = "RELEASE" | "RETRY" | "MANUAL" | "WEB_HOOK" | (string & {});
const JobType = S.String;

export type SourceUrl = string;
export type SourceUrlType = "ZIP" | "BUCKET_PREFIX" | (string & {});
const SourceUrlType = S.String;

export interface JobSummary {
  jobArn: string;
  jobId: string;
  commitId?: string;
  commitMessage?: string;
  commitTime?: Date;
  startTime: Date;
  status: JobStatus;
  endTime?: Date;
  jobType?: JobType;
  sourceUrl?: string;
  sourceUrlType?: SourceUrlType;
}
const JobSummary = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<JobSummary>;
export interface DeleteJobResult {
  jobSummary: JobSummary;
}
const DeleteJobResult = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<DeleteJobResult>;
export interface DeleteWebhookRequest {
  webhookId: string;
}
const DeleteWebhookRequest = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<DeleteWebhookRequest>;
export interface DeleteWebhookResult {
  webhook: Webhook;
}
const DeleteWebhookResult = CreateWebhookResult as any as S.Schema<DeleteWebhookResult>;
export interface GenerateAccessLogsRequest {
  startTime?: Date;
  endTime?: Date;
  domainName: string;
  appId: string;
}
const GenerateAccessLogsRequest = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<GenerateAccessLogsRequest>;
export type LogUrl = string;
export interface GenerateAccessLogsResult {
  logUrl?: string;
}
const GenerateAccessLogsResult = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<GenerateAccessLogsResult>;
export interface GetAppRequest {
  appId: string;
}
const GetAppRequest = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<GetAppRequest>;
export interface GetAppResult {
  app: App;
}
const GetAppResult = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<GetAppResult>;
export type ArtifactId = string;
export interface GetArtifactUrlRequest {
  artifactId: string;
}
const GetArtifactUrlRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<GetArtifactUrlRequest>;
export type ArtifactUrl = string;
export interface GetArtifactUrlResult {
  artifactId: string;
  artifactUrl: string;
}
const GetArtifactUrlResult = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<GetArtifactUrlResult>;
export interface GetBackendEnvironmentRequest {
  appId: string;
  environmentName: string;
}
const GetBackendEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<GetBackendEnvironmentRequest>;
export interface GetBackendEnvironmentResult {
  backendEnvironment: BackendEnvironment;
}
const GetBackendEnvironmentResult =
  CreateBackendEnvironmentResult as any as S.Schema<GetBackendEnvironmentResult>;
export interface GetBranchRequest {
  appId: string;
  branchName: string;
}
const GetBranchRequest = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<GetBranchRequest>;
export interface GetBranchResult {
  branch: Branch;
}
const GetBranchResult = CreateBranchResult as any as S.Schema<GetBranchResult>;
export interface GetDomainAssociationRequest {
  appId: string;
  domainName: string;
}
const GetDomainAssociationRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<GetDomainAssociationRequest>;
export interface GetDomainAssociationResult {
  domainAssociation: DomainAssociation;
}
const GetDomainAssociationResult =
  CreateDomainAssociationResult as any as S.Schema<GetDomainAssociationResult>;
export interface GetJobRequest {
  appId: string;
  branchName: string;
  jobId: string;
}
const GetJobRequest = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<GetJobRequest>;
export type StepName = string;
export type ArtifactsUrl = string;
export type TestArtifactsUrl = string;
export type TestConfigUrl = string;
export type ThumbnailName = string;
export type Screenshots = { [key: string]: string | undefined };
const Screenshots = EnvironmentVariables as any as S.Schema<Screenshots>;
export type Context = string;
export interface Step {
  stepName: string;
  startTime: Date;
  status: JobStatus;
  endTime?: Date;
  logUrl?: string;
  artifactsUrl?: string;
  testArtifactsUrl?: string;
  testConfigUrl?: string;
  screenshots?: { [key: string]: string | undefined };
  statusReason?: string;
  context?: string;
}
const Step = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<Step>;
export type Steps = Step[];
const Steps = /*@__PURE__*/ __L.at(__c6, 5);
export interface Job {
  summary: JobSummary;
  steps: Step[];
}
const Job = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<Job>;
export interface GetJobResult {
  job: Job;
}
const GetJobResult = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<GetJobResult>;
export interface GetWebhookRequest {
  webhookId: string;
}
const GetWebhookRequest = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<GetWebhookRequest>;
export interface GetWebhookResult {
  webhook: Webhook;
}
const GetWebhookResult = CreateWebhookResult as any as S.Schema<GetWebhookResult>;
export type NextToken = string;
export type MaxResultsForListApps = number;
export interface ListAppsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListAppsRequest = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<ListAppsRequest>;
export type Apps = App[];
const Apps = /*@__PURE__*/ __L.at(__c7, 2);
export interface ListAppsResult {
  apps: App[];
  nextToken?: string;
}
const ListAppsResult = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<ListAppsResult>;
export type MaxResults = number;
export interface ListArtifactsRequest {
  appId: string;
  branchName: string;
  jobId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListArtifactsRequest = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<ListArtifactsRequest>;
export type ArtifactFileName = string;
export interface Artifact {
  artifactFileName: string;
  artifactId: string;
}
const Artifact = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<Artifact>;
export type Artifacts = Artifact[];
const Artifacts = /*@__PURE__*/ __L.at(__c7, 6);
export interface ListArtifactsResult {
  artifacts: Artifact[];
  nextToken?: string;
}
const ListArtifactsResult = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<ListArtifactsResult>;
export interface ListBackendEnvironmentsRequest {
  appId: string;
  environmentName?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListBackendEnvironmentsRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<ListBackendEnvironmentsRequest>;
export type BackendEnvironments = BackendEnvironment[];
const BackendEnvironments = /*@__PURE__*/ __L.at(__c8, 1);
export interface ListBackendEnvironmentsResult {
  backendEnvironments: BackendEnvironment[];
  nextToken?: string;
}
const ListBackendEnvironmentsResult = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<ListBackendEnvironmentsResult>;
export interface ListBranchesRequest {
  appId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListBranchesRequest = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<ListBranchesRequest>;
export type Branches = Branch[];
const Branches = /*@__PURE__*/ __L.at(__c8, 4);
export interface ListBranchesResult {
  branches: Branch[];
  nextToken?: string;
}
const ListBranchesResult = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<ListBranchesResult>;
export interface ListDomainAssociationsRequest {
  appId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListDomainAssociationsRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<ListDomainAssociationsRequest>;
export type DomainAssociations = DomainAssociation[];
const DomainAssociations = /*@__PURE__*/ __L.at(__c8, 7);
export interface ListDomainAssociationsResult {
  domainAssociations: DomainAssociation[];
  nextToken?: string;
}
const ListDomainAssociationsResult = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<ListDomainAssociationsResult>;
export interface ListJobsRequest {
  appId: string;
  branchName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListJobsRequest = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<ListJobsRequest>;
export type JobSummaries = JobSummary[];
const JobSummaries = /*@__PURE__*/ __L.at(__c9, 2);
export interface ListJobsResult {
  jobSummaries: JobSummary[];
  nextToken?: string;
}
const ListJobsResult = /*@__PURE__*/ __L.at(__c9, 3) as any as S.Schema<ListJobsResult>;
export type ResourceArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListWebhooksRequest {
  appId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListWebhooksRequest = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<ListWebhooksRequest>;
export type Webhooks = Webhook[];
const Webhooks = /*@__PURE__*/ __L.at(__c9, 7);
export interface ListWebhooksResult {
  webhooks: Webhook[];
  nextToken?: string;
}
const ListWebhooksResult = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<ListWebhooksResult>;
export interface StartDeploymentRequest {
  appId: string;
  branchName: string;
  jobId?: string;
  sourceUrl?: string;
  sourceUrlType?: SourceUrlType;
}
const StartDeploymentRequest = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<StartDeploymentRequest>;
export interface StartDeploymentResult {
  jobSummary: JobSummary;
}
const StartDeploymentResult = DeleteJobResult as any as S.Schema<StartDeploymentResult>;
export type JobReason = string;
export interface StartJobRequest {
  appId: string;
  branchName: string;
  jobId?: string;
  jobType: JobType;
  jobReason?: string;
  commitId?: string;
  commitMessage?: string;
  commitTime?: Date;
}
const StartJobRequest = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<StartJobRequest>;
export interface StartJobResult {
  jobSummary: JobSummary;
}
const StartJobResult = DeleteJobResult as any as S.Schema<StartJobResult>;
export interface StopJobRequest {
  appId: string;
  branchName: string;
  jobId: string;
}
const StopJobRequest = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<StopJobRequest>;
export interface StopJobResult {
  jobSummary: JobSummary;
}
const StopJobResult = DeleteJobResult as any as S.Schema<StopJobResult>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = /*@__PURE__*/ __L.at(__c10, 5) as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = AutoBranchCreationPatterns as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = TagResourceResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAppRequest {
  appId: string;
  name?: string;
  description?: string;
  platform?: Platform;
  computeRoleArn?: string;
  iamServiceRoleArn?: string;
  environmentVariables?: { [key: string]: string | undefined };
  enableBranchAutoBuild?: boolean;
  enableBranchAutoDeletion?: boolean;
  enableBasicAuth?: boolean;
  basicAuthCredentials?: string | redacted.Redacted<string>;
  customRules?: CustomRule[];
  buildSpec?: string | redacted.Redacted<string>;
  customHeaders?: string;
  enableAutoBranchCreation?: boolean;
  autoBranchCreationPatterns?: string[];
  autoBranchCreationConfig?: AutoBranchCreationConfig;
  repository?: string;
  oauthToken?: string | redacted.Redacted<string>;
  accessToken?: string | redacted.Redacted<string>;
  jobConfig?: JobConfig;
  cacheConfig?: CacheConfig;
}
const UpdateAppRequest = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<UpdateAppRequest>;
export interface UpdateAppResult {
  app: App;
}
const UpdateAppResult = CreateAppResult as any as S.Schema<UpdateAppResult>;
export interface UpdateBranchRequest {
  appId: string;
  branchName: string;
  description?: string;
  framework?: string;
  stage?: Stage;
  enableNotification?: boolean;
  enableAutoBuild?: boolean;
  enableSkewProtection?: boolean;
  environmentVariables?: { [key: string]: string | undefined };
  basicAuthCredentials?: string | redacted.Redacted<string>;
  enableBasicAuth?: boolean;
  enablePerformanceMode?: boolean;
  buildSpec?: string | redacted.Redacted<string>;
  ttl?: string;
  displayName?: string;
  enablePullRequestPreview?: boolean;
  pullRequestEnvironmentName?: string;
  backendEnvironmentArn?: string;
  backend?: Backend;
  computeRoleArn?: string;
}
const UpdateBranchRequest = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<UpdateBranchRequest>;
export interface UpdateBranchResult {
  branch: Branch;
}
const UpdateBranchResult = CreateBranchResult as any as S.Schema<UpdateBranchResult>;
export interface UpdateDomainAssociationRequest {
  appId: string;
  domainName: string;
  enableAutoSubDomain?: boolean;
  subDomainSettings?: SubDomainSetting[];
  autoSubDomainCreationPatterns?: string[];
  autoSubDomainIAMRole?: string;
  certificateSettings?: CertificateSettings;
}
const UpdateDomainAssociationRequest = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<UpdateDomainAssociationRequest>;
export interface UpdateDomainAssociationResult {
  domainAssociation: DomainAssociation;
}
const UpdateDomainAssociationResult =
  CreateDomainAssociationResult as any as S.Schema<UpdateDomainAssociationResult>;
export interface UpdateWebhookRequest {
  webhookId: string;
  branchName?: string;
  description?: string;
}
const UpdateWebhookRequest = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<UpdateWebhookRequest>;
export interface UpdateWebhookResult {
  webhook: Webhook;
}
const UpdateWebhookResult = CreateWebhookResult as any as S.Schema<UpdateWebhookResult>;
export type ErrorMessage = string;
export type Code = string;
export type CreateAppError =
  | BadRequestException
  | DependentServiceFailureException
  | InternalFailureException
  | LimitExceededException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Creates a new Amplify app.
 */
export const createApp: API.OperationMethod<
  CreateAppRequest,
  CreateAppResult,
  CreateAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAppRequest,
  output: CreateAppResult,
  errors: [
    BadRequestException,
    DependentServiceFailureException,
    InternalFailureException,
    LimitExceededException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApp",
}));

export type CreateBackendEnvironmentError =
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Creates a new backend environment for an Amplify app.
 *
 * This API is available only to Amplify Gen 1 applications where the
 * backend is created using Amplify Studio or the Amplify
 * command line interface (CLI). This API isn't available to Amplify Gen 2
 * applications. When you deploy an application with Amplify Gen 2, you provision the app's
 * backend infrastructure using Typescript code.
 */
export const createBackendEnvironment: API.OperationMethod<
  CreateBackendEnvironmentRequest,
  CreateBackendEnvironmentResult,
  CreateBackendEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBackendEnvironmentRequest,
  output: CreateBackendEnvironmentResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBackendEnvironment",
}));

export type CreateBranchError =
  | BadRequestException
  | DependentServiceFailureException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Creates a new branch for an Amplify app.
 */
export const createBranch: API.OperationMethod<
  CreateBranchRequest,
  CreateBranchResult,
  CreateBranchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBranchRequest,
  output: CreateBranchResult,
  errors: [
    BadRequestException,
    DependentServiceFailureException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBranch",
}));

export type CreateDeploymentError =
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Creates a deployment for a manually deployed Amplify app. Manually deployed apps are
 * not connected to a Git repository.
 *
 * The maximum duration between the `CreateDeployment` call and the
 * `StartDeployment` call cannot exceed 8 hours. If the duration exceeds 8
 * hours, the `StartDeployment` call and the associated `Job` will
 * fail.
 */
export const createDeployment: API.OperationMethod<
  CreateDeploymentRequest,
  CreateDeploymentResult,
  CreateDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDeploymentRequest,
  output: CreateDeploymentResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDeployment",
}));

export type CreateDomainAssociationError =
  | BadRequestException
  | DependentServiceFailureException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Creates a new domain association for an Amplify app. This action associates a custom
 * domain with the Amplify app
 */
export const createDomainAssociation: API.OperationMethod<
  CreateDomainAssociationRequest,
  CreateDomainAssociationResult,
  CreateDomainAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDomainAssociationRequest,
  output: CreateDomainAssociationResult,
  errors: [
    BadRequestException,
    DependentServiceFailureException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDomainAssociation",
}));

export type CreateWebhookError =
  | BadRequestException
  | DependentServiceFailureException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Creates a new webhook on an Amplify app.
 */
export const createWebhook: API.OperationMethod<
  CreateWebhookRequest,
  CreateWebhookResult,
  CreateWebhookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWebhookRequest,
  output: CreateWebhookResult,
  errors: [
    BadRequestException,
    DependentServiceFailureException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWebhook",
}));

export type DeleteAppError =
  | BadRequestException
  | DependentServiceFailureException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Deletes an existing Amplify app specified by an app ID.
 */
export const deleteApp: API.OperationMethod<
  DeleteAppRequest,
  DeleteAppResult,
  DeleteAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAppRequest,
  output: DeleteAppResult,
  errors: [
    BadRequestException,
    DependentServiceFailureException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApp",
}));

export type DeleteBackendEnvironmentError =
  | BadRequestException
  | DependentServiceFailureException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Deletes a backend environment for an Amplify app.
 *
 * This API is available only to Amplify Gen 1 applications where the
 * backend is created using Amplify Studio or the Amplify
 * command line interface (CLI). This API isn't available to Amplify Gen 2
 * applications. When you deploy an application with Amplify Gen 2, you provision the app's
 * backend infrastructure using Typescript code.
 */
export const deleteBackendEnvironment: API.OperationMethod<
  DeleteBackendEnvironmentRequest,
  DeleteBackendEnvironmentResult,
  DeleteBackendEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBackendEnvironmentRequest,
  output: DeleteBackendEnvironmentResult,
  errors: [
    BadRequestException,
    DependentServiceFailureException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBackendEnvironment",
}));

export type DeleteBranchError =
  | BadRequestException
  | DependentServiceFailureException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Deletes a branch for an Amplify app.
 */
export const deleteBranch: API.OperationMethod<
  DeleteBranchRequest,
  DeleteBranchResult,
  DeleteBranchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBranchRequest,
  output: DeleteBranchResult,
  errors: [
    BadRequestException,
    DependentServiceFailureException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBranch",
}));

export type DeleteDomainAssociationError =
  | BadRequestException
  | DependentServiceFailureException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Deletes a domain association for an Amplify app.
 */
export const deleteDomainAssociation: API.OperationMethod<
  DeleteDomainAssociationRequest,
  DeleteDomainAssociationResult,
  DeleteDomainAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDomainAssociationRequest,
  output: DeleteDomainAssociationResult,
  errors: [
    BadRequestException,
    DependentServiceFailureException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDomainAssociation",
}));

export type DeleteJobError =
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Deletes a job for a branch of an Amplify app.
 */
export const deleteJob: API.OperationMethod<
  DeleteJobRequest,
  DeleteJobResult,
  DeleteJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteJobRequest,
  output: DeleteJobResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteJob",
}));

export type DeleteWebhookError =
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Deletes a webhook.
 */
export const deleteWebhook: API.OperationMethod<
  DeleteWebhookRequest,
  DeleteWebhookResult,
  DeleteWebhookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWebhookRequest,
  output: DeleteWebhookResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWebhook",
}));

export type GenerateAccessLogsError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Returns the website access logs for a specific time range using a presigned URL.
 */
export const generateAccessLogs: API.OperationMethod<
  GenerateAccessLogsRequest,
  GenerateAccessLogsResult,
  GenerateAccessLogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GenerateAccessLogsRequest,
  output: GenerateAccessLogsResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GenerateAccessLogs",
}));

export type GetAppError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Returns an existing Amplify app specified by an app ID.
 */
export const getApp: API.OperationMethod<
  GetAppRequest,
  GetAppResult,
  GetAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAppRequest,
  output: GetAppResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApp",
}));

export type GetArtifactUrlError =
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Returns the artifact info that corresponds to an artifact id.
 */
export const getArtifactUrl: API.OperationMethod<
  GetArtifactUrlRequest,
  GetArtifactUrlResult,
  GetArtifactUrlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetArtifactUrlRequest,
  output: GetArtifactUrlResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetArtifactUrl",
}));

export type GetBackendEnvironmentError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Returns a backend environment for an Amplify app.
 *
 * This API is available only to Amplify Gen 1 applications where the
 * backend is created using Amplify Studio or the Amplify
 * command line interface (CLI). This API isn't available to Amplify Gen 2
 * applications. When you deploy an application with Amplify Gen 2, you provision the app's
 * backend infrastructure using Typescript code.
 */
export const getBackendEnvironment: API.OperationMethod<
  GetBackendEnvironmentRequest,
  GetBackendEnvironmentResult,
  GetBackendEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBackendEnvironmentRequest,
  output: GetBackendEnvironmentResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBackendEnvironment",
}));

export type GetBranchError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Returns a branch for an Amplify app.
 */
export const getBranch: API.OperationMethod<
  GetBranchRequest,
  GetBranchResult,
  GetBranchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBranchRequest,
  output: GetBranchResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBranch",
}));

export type GetDomainAssociationError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Returns the domain information for an Amplify app.
 */
export const getDomainAssociation: API.OperationMethod<
  GetDomainAssociationRequest,
  GetDomainAssociationResult,
  GetDomainAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDomainAssociationRequest,
  output: GetDomainAssociationResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDomainAssociation",
}));

export type GetJobError =
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Returns a job for a branch of an Amplify app.
 */
export const getJob: API.OperationMethod<
  GetJobRequest,
  GetJobResult,
  GetJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetJobRequest,
  output: GetJobResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJob",
}));

export type GetWebhookError =
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Returns the webhook information that corresponds to a specified webhook ID.
 */
export const getWebhook: API.OperationMethod<
  GetWebhookRequest,
  GetWebhookResult,
  GetWebhookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWebhookRequest,
  output: GetWebhookResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWebhook",
}));

export type ListAppsError =
  | BadRequestException
  | InternalFailureException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Returns a list of the existing Amplify apps.
 */
export const listApps: API.PaginatedOperationMethod<
  ListAppsRequest,
  ListAppsResult,
  ListAppsError,
  Credentials | HttpClient.HttpClient,
  App
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppsRequest,
  output: ListAppsResult,
  errors: [BadRequestException, InternalFailureException, UnauthorizedException, TimeoutException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApps",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "apps",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListArtifactsError =
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Returns a list of end-to-end testing artifacts for a specified app, branch, and
 * job.
 *
 * To return the build artifacts, use the GetJob API.
 *
 * For more information about Amplify testing support, see Setting up
 * end-to-end Cypress tests for your Amplify application in the
 * *Amplify Hosting User Guide*.
 */
export const listArtifacts: API.OperationMethod<
  ListArtifactsRequest,
  ListArtifactsResult,
  ListArtifactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListArtifactsRequest,
  output: ListArtifactsResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListArtifacts",
}));

export type ListBackendEnvironmentsError =
  | BadRequestException
  | InternalFailureException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Lists the backend environments for an Amplify app.
 *
 * This API is available only to Amplify Gen 1 applications where the
 * backend is created using Amplify Studio or the Amplify
 * command line interface (CLI). This API isn't available to Amplify Gen 2
 * applications. When you deploy an application with Amplify Gen 2, you provision the app's
 * backend infrastructure using Typescript code.
 */
export const listBackendEnvironments: API.OperationMethod<
  ListBackendEnvironmentsRequest,
  ListBackendEnvironmentsResult,
  ListBackendEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListBackendEnvironmentsRequest,
  output: ListBackendEnvironmentsResult,
  errors: [BadRequestException, InternalFailureException, UnauthorizedException, TimeoutException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBackendEnvironments",
}));

export type ListBranchesError =
  | BadRequestException
  | InternalFailureException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Lists the branches of an Amplify app.
 */
export const listBranches: API.PaginatedOperationMethod<
  ListBranchesRequest,
  ListBranchesResult,
  ListBranchesError,
  Credentials | HttpClient.HttpClient,
  Branch
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBranchesRequest,
  output: ListBranchesResult,
  errors: [BadRequestException, InternalFailureException, UnauthorizedException, TimeoutException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBranches",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "branches",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDomainAssociationsError =
  | BadRequestException
  | InternalFailureException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Returns the domain associations for an Amplify app.
 */
export const listDomainAssociations: API.PaginatedOperationMethod<
  ListDomainAssociationsRequest,
  ListDomainAssociationsResult,
  ListDomainAssociationsError,
  Credentials | HttpClient.HttpClient,
  DomainAssociation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDomainAssociationsRequest,
  output: ListDomainAssociationsResult,
  errors: [BadRequestException, InternalFailureException, UnauthorizedException, TimeoutException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomainAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "domainAssociations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListJobsError =
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Lists the jobs for a branch of an Amplify app.
 */
export const listJobs: API.PaginatedOperationMethod<
  ListJobsRequest,
  ListJobsResult,
  ListJobsError,
  Credentials | HttpClient.HttpClient,
  JobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListJobsRequest,
  output: ListJobsResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | BadRequestException
  | InternalFailureException
  | ResourceNotFoundException
  | TimeoutException
  | CommonErrors;
/**
 * Returns a list of tags for a specified Amazon Resource Name (ARN).
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    BadRequestException,
    InternalFailureException,
    ResourceNotFoundException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListWebhooksError =
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Returns a list of webhooks for an Amplify app.
 */
export const listWebhooks: API.OperationMethod<
  ListWebhooksRequest,
  ListWebhooksResult,
  ListWebhooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListWebhooksRequest,
  output: ListWebhooksResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWebhooks",
}));

export type StartDeploymentError =
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Starts a deployment for a manually deployed app. Manually deployed apps are not
 * connected to a Git repository.
 *
 * The maximum duration between the `CreateDeployment` call and the
 * `StartDeployment` call cannot exceed 8 hours. If the duration exceeds 8
 * hours, the `StartDeployment` call and the associated `Job` will
 * fail.
 */
export const startDeployment: API.OperationMethod<
  StartDeploymentRequest,
  StartDeploymentResult,
  StartDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartDeploymentRequest,
  output: StartDeploymentResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDeployment",
}));

export type StartJobError =
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Starts a new job for a branch of an Amplify app.
 */
export const startJob: API.OperationMethod<
  StartJobRequest,
  StartJobResult,
  StartJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartJobRequest,
  output: StartJobResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartJob",
}));

export type StopJobError =
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Stops a job that is in progress for a branch of an Amplify app.
 */
export const stopJob: API.OperationMethod<
  StopJobRequest,
  StopJobResult,
  StopJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopJobRequest,
  output: StopJobResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopJob",
}));

export type TagResourceError =
  | BadRequestException
  | InternalFailureException
  | ResourceNotFoundException
  | TimeoutException
  | CommonErrors;
/**
 * Tags the resource with a tag key and value.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [
    BadRequestException,
    InternalFailureException,
    ResourceNotFoundException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | BadRequestException
  | InternalFailureException
  | ResourceNotFoundException
  | TimeoutException
  | CommonErrors;
/**
 * Untags a resource with a specified Amazon Resource Name (ARN).
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [
    BadRequestException,
    InternalFailureException,
    ResourceNotFoundException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAppError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Updates an existing Amplify app.
 */
export const updateApp: API.OperationMethod<
  UpdateAppRequest,
  UpdateAppResult,
  UpdateAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAppRequest,
  output: UpdateAppResult,
  errors: [
    BadRequestException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApp",
}));

export type UpdateBranchError =
  | BadRequestException
  | DependentServiceFailureException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Updates a branch for an Amplify app.
 */
export const updateBranch: API.OperationMethod<
  UpdateBranchRequest,
  UpdateBranchResult,
  UpdateBranchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBranchRequest,
  output: UpdateBranchResult,
  errors: [
    BadRequestException,
    DependentServiceFailureException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBranch",
}));

export type UpdateDomainAssociationError =
  | BadRequestException
  | DependentServiceFailureException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Creates a new domain association for an Amplify app.
 */
export const updateDomainAssociation: API.OperationMethod<
  UpdateDomainAssociationRequest,
  UpdateDomainAssociationResult,
  UpdateDomainAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDomainAssociationRequest,
  output: UpdateDomainAssociationResult,
  errors: [
    BadRequestException,
    DependentServiceFailureException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDomainAssociation",
}));

export type UpdateWebhookError =
  | BadRequestException
  | DependentServiceFailureException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | TimeoutException
  | CommonErrors;
/**
 * Updates a webhook.
 */
export const updateWebhook: API.OperationMethod<
  UpdateWebhookRequest,
  UpdateWebhookResult,
  UpdateWebhookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWebhookRequest,
  output: UpdateWebhookResult,
  errors: [
    BadRequestException,
    DependentServiceFailureException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
    TimeoutException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWebhook",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          source: S.String,
          target: S.String,
          status: S.optional(S.String),
          condition: S.optional(S.String),
        }),
      ).annotate({ identifier: "CustomRule" });
    case 2:
      return S.Array(CustomRule);
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          stage: S.optional(Stage),
          framework: S.optional(S.String),
          enableAutoBuild: S.optional(S.Boolean),
          environmentVariables: S.optional(EnvironmentVariables),
          basicAuthCredentials: S.optional(SensitiveString),
          enableBasicAuth: S.optional(S.Boolean),
          enablePerformanceMode: S.optional(S.Boolean),
          buildSpec: S.optional(SensitiveString),
          enablePullRequestPreview: S.optional(S.Boolean),
          pullRequestEnvironmentName: S.optional(S.String),
        }),
      ).annotate({ identifier: "AutoBranchCreationConfig" });
    case 6:
      return S.suspend(() => S.Struct({ buildComputeType: BuildComputeType })).annotate({
        identifier: "JobConfig",
      });
    case 7:
      return S.suspend(() => S.Struct({ type: CacheConfigType })).annotate({
        identifier: "CacheConfig",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          repository: S.optional(S.String),
          platform: S.optional(Platform),
          computeRoleArn: S.optional(S.String),
          iamServiceRoleArn: S.optional(S.String),
          oauthToken: S.optional(SensitiveString),
          accessToken: S.optional(SensitiveString),
          environmentVariables: S.optional(EnvironmentVariables),
          enableBranchAutoBuild: S.optional(S.Boolean),
          enableBranchAutoDeletion: S.optional(S.Boolean),
          enableBasicAuth: S.optional(S.Boolean),
          basicAuthCredentials: S.optional(SensitiveString),
          customRules: S.optional(CustomRules),
          tags: S.optional(TagMap),
          buildSpec: S.optional(SensitiveString),
          customHeaders: S.optional(S.String),
          enableAutoBranchCreation: S.optional(S.Boolean),
          autoBranchCreationPatterns: S.optional(AutoBranchCreationPatterns),
          autoBranchCreationConfig: S.optional(AutoBranchCreationConfig),
          jobConfig: S.optional(JobConfig),
          cacheConfig: S.optional(CacheConfig),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/apps" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateAppRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          lastDeployTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          thumbnailUrl: S.optional(S.String),
          branchName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProductionBranch" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          webAclArn: S.optional(S.String),
          wafStatus: S.optional(WafStatus),
          statusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "WafConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          appId: S.String,
          appArn: S.String,
          name: S.String,
          tags: S.optional(TagMap),
          description: S.optional(S.String),
          repository: S.optional(S.String),
          platform: S.optional(Platform),
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          computeRoleArn: S.optional(S.String),
          iamServiceRoleArn: S.optional(S.String),
          environmentVariables: S.optional(EnvironmentVariables),
          defaultDomain: S.optional(S.String),
          enableBranchAutoBuild: S.optional(S.Boolean),
          enableBranchAutoDeletion: S.optional(S.Boolean),
          enableBasicAuth: S.optional(S.Boolean),
          basicAuthCredentials: S.optional(SensitiveString),
          customRules: S.optional(CustomRules),
          productionBranch: S.optional(ProductionBranch),
          buildSpec: S.optional(SensitiveString),
          customHeaders: S.optional(S.String),
          enableAutoBranchCreation: S.optional(S.Boolean),
          autoBranchCreationPatterns: S.optional(AutoBranchCreationPatterns),
          autoBranchCreationConfig: S.optional(AutoBranchCreationConfig),
          repositoryCloneMethod: S.optional(RepositoryCloneMethod),
          cacheConfig: S.optional(CacheConfig),
          webhookCreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          wafConfiguration: S.optional(WafConfiguration),
          jobConfig: S.optional(JobConfig),
        }),
      ).annotate({ identifier: "App" });
    case 4:
      return S.suspend(() => S.Struct({ app: App }).pipe(ns)).annotate({
        identifier: "CreateAppResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String,
          stackName: S.optional(S.String),
          deploymentArtifacts: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/apps/{appId}/backendenvironments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateBackendEnvironmentRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          backendEnvironmentArn: S.String,
          environmentName: S.String,
          stackName: S.optional(S.String),
          deploymentArtifacts: S.optional(S.String),
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "BackendEnvironment" });
    case 7:
      return S.suspend(() =>
        S.Struct({ backendEnvironment: BackendEnvironment }).pipe(ns),
      ).annotate({
        identifier: "CreateBackendEnvironmentResult",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ stackArn: S.optional(S.String) })).annotate({
        identifier: "Backend",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          branchName: S.String,
          description: S.optional(S.String),
          stage: S.optional(Stage),
          framework: S.optional(S.String),
          enableNotification: S.optional(S.Boolean),
          enableAutoBuild: S.optional(S.Boolean),
          enableSkewProtection: S.optional(S.Boolean),
          environmentVariables: S.optional(EnvironmentVariables),
          basicAuthCredentials: S.optional(SensitiveString),
          enableBasicAuth: S.optional(S.Boolean),
          enablePerformanceMode: S.optional(S.Boolean),
          tags: S.optional(TagMap),
          buildSpec: S.optional(SensitiveString),
          ttl: S.optional(S.String),
          displayName: S.optional(S.String),
          enablePullRequestPreview: S.optional(S.Boolean),
          pullRequestEnvironmentName: S.optional(S.String),
          backendEnvironmentArn: S.optional(S.String),
          backend: S.optional(Backend),
          computeRoleArn: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/apps/{appId}/branches" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateBranchRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          branchArn: S.String,
          branchName: S.String,
          description: S.optional(S.String),
          tags: S.optional(TagMap),
          stage: S.optional(Stage),
          displayName: S.optional(S.String),
          enableNotification: S.optional(S.Boolean),
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          environmentVariables: S.optional(EnvironmentVariables),
          enableAutoBuild: S.optional(S.Boolean),
          enableSkewProtection: S.optional(S.Boolean),
          customDomains: S.optional(CustomDomains),
          framework: S.optional(S.String),
          activeJobId: S.optional(S.String),
          totalNumberOfJobs: S.optional(S.String),
          enableBasicAuth: S.optional(S.Boolean),
          enablePerformanceMode: S.optional(S.Boolean),
          thumbnailUrl: S.optional(S.String),
          basicAuthCredentials: S.optional(SensitiveString),
          buildSpec: S.optional(SensitiveString),
          ttl: S.optional(S.String),
          associatedResources: S.optional(AssociatedResources),
          enablePullRequestPreview: S.optional(S.Boolean),
          pullRequestEnvironmentName: S.optional(S.String),
          destinationBranch: S.optional(S.String),
          sourceBranch: S.optional(S.String),
          backendEnvironmentArn: S.optional(S.String),
          backend: S.optional(Backend),
          computeRoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Branch" });
    case 3:
      return S.suspend(() => S.Struct({ branch: Branch }).pipe(ns)).annotate({
        identifier: "CreateBranchResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          branchName: S.String.pipe(T.HttpLabel("branchName")),
          fileMap: S.optional(FileMap),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/apps/{appId}/branches/{branchName}/deployments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateDeploymentRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobId: S.optional(S.String),
          fileUploadUrls: S.optional(FileUploadUrls),
          zipUploadUrl: S.String,
        }).pipe(ns),
      ).annotate({ identifier: "CreateDeploymentResult" });
    case 6:
      return S.suspend(() => S.Struct({ prefix: S.String, branchName: S.String })).annotate({
        identifier: "SubDomainSetting",
      });
    case 7:
      return S.Array(SubDomainSetting);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ type: CertificateType, customCertificateArn: S.optional(S.String) }),
      ).annotate({ identifier: "CertificateSettings" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          domainName: S.String,
          enableAutoSubDomain: S.optional(S.Boolean),
          subDomainSettings: SubDomainSettings,
          autoSubDomainCreationPatterns: S.optional(AutoSubDomainCreationPatterns),
          autoSubDomainIAMRole: S.optional(S.String),
          certificateSettings: S.optional(CertificateSettings),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/apps/{appId}/domains" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDomainAssociationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ subDomainSetting: SubDomainSetting, verified: S.Boolean, dnsRecord: S.String }),
      ).annotate({ identifier: "SubDomain" });
    case 3:
      return S.Array(SubDomain);
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: CertificateType,
          customCertificateArn: S.optional(S.String),
          certificateVerificationDNSRecord: S.optional(S.String),
        }),
      ).annotate({ identifier: "Certificate" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainAssociationArn: S.String,
          domainName: S.String,
          enableAutoSubDomain: S.Boolean,
          autoSubDomainCreationPatterns: S.optional(AutoSubDomainCreationPatterns),
          autoSubDomainIAMRole: S.optional(S.String),
          domainStatus: DomainStatus,
          updateStatus: S.optional(UpdateStatus),
          statusReason: S.String,
          certificateVerificationDNSRecord: S.optional(S.String),
          subDomains: SubDomains,
          certificate: S.optional(Certificate),
        }),
      ).annotate({ identifier: "DomainAssociation" });
    case 6:
      return S.suspend(() => S.Struct({ domainAssociation: DomainAssociation }).pipe(ns)).annotate({
        identifier: "CreateDomainAssociationResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          branchName: S.String,
          description: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/apps/{appId}/webhooks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateWebhookRequest" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          webhookArn: S.String,
          webhookId: S.String,
          webhookUrl: S.String,
          appId: S.optional(S.String),
          branchName: S.String,
          description: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "Webhook" });
    case 1:
      return S.suspend(() => S.Struct({ webhook: Webhook }).pipe(ns)).annotate({
        identifier: "CreateWebhookResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ appId: S.String.pipe(T.HttpLabel("appId")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/apps/{appId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAppRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "DELETE",
              uri: "/apps/{appId}/backendenvironments/{environmentName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteBackendEnvironmentRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          branchName: S.String.pipe(T.HttpLabel("branchName")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/apps/{appId}/branches/{branchName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteBranchRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          domainName: S.String.pipe(T.HttpLabel("domainName")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/apps/{appId}/domains/{domainName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDomainAssociationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          branchName: S.String.pipe(T.HttpLabel("branchName")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/apps/{appId}/branches/{branchName}/jobs/{jobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteJobRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          jobArn: S.String,
          jobId: S.String,
          commitId: S.optional(S.String),
          commitMessage: S.optional(S.String),
          commitTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: JobStatus,
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          jobType: S.optional(JobType),
          sourceUrl: S.optional(S.String),
          sourceUrlType: S.optional(SourceUrlType),
        }),
      ).annotate({ identifier: "JobSummary" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ jobSummary: JobSummary }).pipe(ns)).annotate({
        identifier: "DeleteJobResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ webhookId: S.String.pipe(T.HttpLabel("webhookId")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/webhooks/{webhookId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteWebhookRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          domainName: S.String,
          appId: S.String.pipe(T.HttpLabel("appId")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/apps/{appId}/accesslogs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GenerateAccessLogsRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ logUrl: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "GenerateAccessLogsResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ appId: S.String.pipe(T.HttpLabel("appId")) }).pipe(
          T.all(ns, T.Http({ method: "GET", uri: "/apps/{appId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAppRequest" });
    case 5:
      return S.suspend(() => S.Struct({ app: App }).pipe(ns)).annotate({
        identifier: "GetAppResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ artifactId: S.String.pipe(T.HttpLabel("artifactId")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/artifacts/{artifactId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetArtifactUrlRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ artifactId: S.String, artifactUrl: S.String }).pipe(ns),
      ).annotate({ identifier: "GetArtifactUrlResult" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/apps/{appId}/backendenvironments/{environmentName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetBackendEnvironmentRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          branchName: S.String.pipe(T.HttpLabel("branchName")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/apps/{appId}/branches/{branchName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetBranchRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          domainName: S.String.pipe(T.HttpLabel("domainName")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/apps/{appId}/domains/{domainName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDomainAssociationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          branchName: S.String.pipe(T.HttpLabel("branchName")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/apps/{appId}/branches/{branchName}/jobs/{jobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetJobRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          stepName: S.String,
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: JobStatus,
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          logUrl: S.optional(S.String),
          artifactsUrl: S.optional(S.String),
          testArtifactsUrl: S.optional(S.String),
          testConfigUrl: S.optional(S.String),
          screenshots: S.optional(Screenshots),
          statusReason: S.optional(S.String),
          context: S.optional(S.String),
        }),
      ).annotate({ identifier: "Step" });
    case 5:
      return S.Array(Step);
    case 6:
      return S.suspend(() => S.Struct({ summary: JobSummary, steps: Steps })).annotate({
        identifier: "Job",
      });
    case 7:
      return S.suspend(() => S.Struct({ job: Job }).pipe(ns)).annotate({
        identifier: "GetJobResult",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ webhookId: S.String.pipe(T.HttpLabel("webhookId")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/webhooks/{webhookId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetWebhookRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(ns, T.Http({ method: "GET", uri: "/apps" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAppsRequest" });
    case 2:
      return S.Array(App);
    case 3:
      return S.suspend(() =>
        S.Struct({ apps: Apps, nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListAppsResult" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          branchName: S.String.pipe(T.HttpLabel("branchName")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/apps/{appId}/branches/{branchName}/jobs/{jobId}/artifacts",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListArtifactsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ artifactFileName: S.String, artifactId: S.String }),
      ).annotate({ identifier: "Artifact" });
    case 6:
      return S.Array(Artifact);
    case 7:
      return S.suspend(() =>
        S.Struct({ artifacts: Artifacts, nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListArtifactsResult" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.optional(S.String).pipe(T.HttpQuery("environmentName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/apps/{appId}/backendenvironments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListBackendEnvironmentsRequest",
      });
    case 1:
      return S.Array(BackendEnvironment);
    case 2:
      return S.suspend(() =>
        S.Struct({
          backendEnvironments: BackendEnvironments,
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListBackendEnvironmentsResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/apps/{appId}/branches" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListBranchesRequest" });
    case 4:
      return S.Array(Branch);
    case 5:
      return S.suspend(() =>
        S.Struct({ branches: Branches, nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListBranchesResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/apps/{appId}/domains" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDomainAssociationsRequest",
      });
    case 7:
      return S.Array(DomainAssociation);
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ domainAssociations: DomainAssociations, nextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "ListDomainAssociationsResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          branchName: S.String.pipe(T.HttpLabel("branchName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/apps/{appId}/branches/{branchName}/jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListJobsRequest" });
    case 2:
      return S.Array(JobSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ jobSummaries: JobSummaries, nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListJobsResult" });
    case 4:
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
    case 5:
      return S.suspend(() => S.Struct({ tags: S.optional(TagMap) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/apps/{appId}/webhooks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListWebhooksRequest" });
    case 7:
      return S.Array(Webhook);
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ webhooks: Webhooks, nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListWebhooksResult" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          branchName: S.String.pipe(T.HttpLabel("branchName")),
          jobId: S.optional(S.String),
          sourceUrl: S.optional(S.String),
          sourceUrlType: S.optional(SourceUrlType),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/apps/{appId}/branches/{branchName}/deployments/start",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartDeploymentRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          branchName: S.String.pipe(T.HttpLabel("branchName")),
          jobId: S.optional(S.String),
          jobType: JobType,
          jobReason: S.optional(S.String),
          commitId: S.optional(S.String),
          commitMessage: S.optional(S.String),
          commitTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/apps/{appId}/branches/{branchName}/jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartJobRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          branchName: S.String.pipe(T.HttpLabel("branchName")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "DELETE",
              uri: "/apps/{appId}/branches/{branchName}/jobs/{jobId}/stop",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopJobRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagMap }).pipe(
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
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
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
    case 7:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          name: S.optional(S.String),
          description: S.optional(S.String),
          platform: S.optional(Platform),
          computeRoleArn: S.optional(S.String),
          iamServiceRoleArn: S.optional(S.String),
          environmentVariables: S.optional(EnvironmentVariables),
          enableBranchAutoBuild: S.optional(S.Boolean),
          enableBranchAutoDeletion: S.optional(S.Boolean),
          enableBasicAuth: S.optional(S.Boolean),
          basicAuthCredentials: S.optional(SensitiveString),
          customRules: S.optional(CustomRules),
          buildSpec: S.optional(SensitiveString),
          customHeaders: S.optional(S.String),
          enableAutoBranchCreation: S.optional(S.Boolean),
          autoBranchCreationPatterns: S.optional(AutoBranchCreationPatterns),
          autoBranchCreationConfig: S.optional(AutoBranchCreationConfig),
          repository: S.optional(S.String),
          oauthToken: S.optional(SensitiveString),
          accessToken: S.optional(SensitiveString),
          jobConfig: S.optional(JobConfig),
          cacheConfig: S.optional(CacheConfig),
        }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/apps/{appId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateAppRequest" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          branchName: S.String.pipe(T.HttpLabel("branchName")),
          description: S.optional(S.String),
          framework: S.optional(S.String),
          stage: S.optional(Stage),
          enableNotification: S.optional(S.Boolean),
          enableAutoBuild: S.optional(S.Boolean),
          enableSkewProtection: S.optional(S.Boolean),
          environmentVariables: S.optional(EnvironmentVariables),
          basicAuthCredentials: S.optional(SensitiveString),
          enableBasicAuth: S.optional(S.Boolean),
          enablePerformanceMode: S.optional(S.Boolean),
          buildSpec: S.optional(SensitiveString),
          ttl: S.optional(S.String),
          displayName: S.optional(S.String),
          enablePullRequestPreview: S.optional(S.Boolean),
          pullRequestEnvironmentName: S.optional(S.String),
          backendEnvironmentArn: S.optional(S.String),
          backend: S.optional(Backend),
          computeRoleArn: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/apps/{appId}/branches/{branchName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateBranchRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          domainName: S.String.pipe(T.HttpLabel("domainName")),
          enableAutoSubDomain: S.optional(S.Boolean),
          subDomainSettings: S.optional(SubDomainSettings),
          autoSubDomainCreationPatterns: S.optional(AutoSubDomainCreationPatterns),
          autoSubDomainIAMRole: S.optional(S.String),
          certificateSettings: S.optional(CertificateSettings),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/apps/{appId}/domains/{domainName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDomainAssociationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          webhookId: S.String.pipe(T.HttpLabel("webhookId")),
          branchName: S.optional(S.String),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/webhooks/{webhookId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateWebhookRequest" });
  }
}
