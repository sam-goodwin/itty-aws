import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Amplify {
  createApp(
    input: CreateAppRequest,
  ): Effect.Effect<
    CreateAppResult,
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError
  >;
  createBackendEnvironment(
    input: CreateBackendEnvironmentRequest,
  ): Effect.Effect<
    CreateBackendEnvironmentResult,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  createBranch(
    input: CreateBranchRequest,
  ): Effect.Effect<
    CreateBranchResult,
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  createDeployment(
    input: CreateDeploymentRequest,
  ): Effect.Effect<
    CreateDeploymentResult,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError
  >;
  createDomainAssociation(
    input: CreateDomainAssociationRequest,
  ): Effect.Effect<
    CreateDomainAssociationResult,
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  createWebhook(
    input: CreateWebhookRequest,
  ): Effect.Effect<
    CreateWebhookResult,
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteApp(
    input: DeleteAppRequest,
  ): Effect.Effect<
    DeleteAppResult,
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteBackendEnvironment(
    input: DeleteBackendEnvironmentRequest,
  ): Effect.Effect<
    DeleteBackendEnvironmentResult,
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteBranch(
    input: DeleteBranchRequest,
  ): Effect.Effect<
    DeleteBranchResult,
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteDomainAssociation(
    input: DeleteDomainAssociationRequest,
  ): Effect.Effect<
    DeleteDomainAssociationResult,
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteJob(
    input: DeleteJobRequest,
  ): Effect.Effect<
    DeleteJobResult,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteWebhook(
    input: DeleteWebhookRequest,
  ): Effect.Effect<
    DeleteWebhookResult,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  generateAccessLogs(
    input: GenerateAccessLogsRequest,
  ): Effect.Effect<
    GenerateAccessLogsResult,
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  getApp(
    input: GetAppRequest,
  ): Effect.Effect<
    GetAppResult,
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  getArtifactUrl(
    input: GetArtifactUrlRequest,
  ): Effect.Effect<
    GetArtifactUrlResult,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  getBackendEnvironment(
    input: GetBackendEnvironmentRequest,
  ): Effect.Effect<
    GetBackendEnvironmentResult,
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  getBranch(
    input: GetBranchRequest,
  ): Effect.Effect<
    GetBranchResult,
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  getDomainAssociation(
    input: GetDomainAssociationRequest,
  ): Effect.Effect<
    GetDomainAssociationResult,
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  getJob(
    input: GetJobRequest,
  ): Effect.Effect<
    GetJobResult,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  getWebhook(
    input: GetWebhookRequest,
  ): Effect.Effect<
    GetWebhookResult,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  listApps(
    input: ListAppsRequest,
  ): Effect.Effect<
    ListAppsResult,
    | BadRequestException
    | InternalFailureException
    | UnauthorizedException
    | CommonAwsError
  >;
  listArtifacts(
    input: ListArtifactsRequest,
  ): Effect.Effect<
    ListArtifactsResult,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError
  >;
  listBackendEnvironments(
    input: ListBackendEnvironmentsRequest,
  ): Effect.Effect<
    ListBackendEnvironmentsResult,
    | BadRequestException
    | InternalFailureException
    | UnauthorizedException
    | CommonAwsError
  >;
  listBranches(
    input: ListBranchesRequest,
  ): Effect.Effect<
    ListBranchesResult,
    | BadRequestException
    | InternalFailureException
    | UnauthorizedException
    | CommonAwsError
  >;
  listDomainAssociations(
    input: ListDomainAssociationsRequest,
  ): Effect.Effect<
    ListDomainAssociationsResult,
    | BadRequestException
    | InternalFailureException
    | UnauthorizedException
    | CommonAwsError
  >;
  listJobs(
    input: ListJobsRequest,
  ): Effect.Effect<
    ListJobsResult,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | InternalFailureException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listWebhooks(
    input: ListWebhooksRequest,
  ): Effect.Effect<
    ListWebhooksResult,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError
  >;
  startDeployment(
    input: StartDeploymentRequest,
  ): Effect.Effect<
    StartDeploymentResult,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  startJob(
    input: StartJobRequest,
  ): Effect.Effect<
    StartJobResult,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  stopJob(
    input: StopJobRequest,
  ): Effect.Effect<
    StopJobResult,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | BadRequestException
    | InternalFailureException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | BadRequestException
    | InternalFailureException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateApp(
    input: UpdateAppRequest,
  ): Effect.Effect<
    UpdateAppResult,
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateBranch(
    input: UpdateBranchRequest,
  ): Effect.Effect<
    UpdateBranchResult,
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateDomainAssociation(
    input: UpdateDomainAssociationRequest,
  ): Effect.Effect<
    UpdateDomainAssociationResult,
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateWebhook(
    input: UpdateWebhookRequest,
  ): Effect.Effect<
    UpdateWebhookResult,
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
}

export type AccessToken = string;

export type ActiveJobId = string;

export interface App {
  appId: string;
  appArn: string;
  name: string;
  tags?: Record<string, string>;
  description: string;
  repository: string;
  platform: Platform;
  createTime: Date | string;
  updateTime: Date | string;
  computeRoleArn?: string;
  iamServiceRoleArn?: string;
  environmentVariables: Record<string, string>;
  defaultDomain: string;
  enableBranchAutoBuild: boolean;
  enableBranchAutoDeletion?: boolean;
  enableBasicAuth: boolean;
  basicAuthCredentials?: string;
  customRules?: Array<CustomRule>;
  productionBranch?: ProductionBranch;
  buildSpec?: string;
  customHeaders?: string;
  enableAutoBranchCreation?: boolean;
  autoBranchCreationPatterns?: Array<string>;
  autoBranchCreationConfig?: AutoBranchCreationConfig;
  repositoryCloneMethod?: RepositoryCloneMethod;
  cacheConfig?: CacheConfig;
  webhookCreateTime?: Date | string;
  wafConfiguration?: WafConfiguration;
  jobConfig?: JobConfig;
}
export type AppArn = string;

export type AppId = string;

export type Apps = Array<App>;
export interface Artifact {
  artifactFileName: string;
  artifactId: string;
}
export type ArtifactFileName = string;

export type ArtifactId = string;

export type Artifacts = Array<Artifact>;
export type ArtifactsUrl = string;

export type ArtifactUrl = string;

export type AssociatedResource = string;

export type AssociatedResources = Array<string>;
export interface AutoBranchCreationConfig {
  stage?: Stage;
  framework?: string;
  enableAutoBuild?: boolean;
  environmentVariables?: Record<string, string>;
  basicAuthCredentials?: string;
  enableBasicAuth?: boolean;
  enablePerformanceMode?: boolean;
  buildSpec?: string;
  enablePullRequestPreview?: boolean;
  pullRequestEnvironmentName?: string;
}
export type AutoBranchCreationPattern = string;

export type AutoBranchCreationPatterns = Array<string>;
export type AutoSubDomainCreationPattern = string;

export type AutoSubDomainCreationPatterns = Array<string>;
export type AutoSubDomainIAMRole = string;

export interface Backend {
  stackArn?: string;
}
export interface BackendEnvironment {
  backendEnvironmentArn: string;
  environmentName: string;
  stackName?: string;
  deploymentArtifacts?: string;
  createTime: Date | string;
  updateTime: Date | string;
}
export type BackendEnvironmentArn = string;

export type BackendEnvironments = Array<BackendEnvironment>;
export declare class BadRequestException extends Data.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
}> {}
export type BasicAuthCredentials = string;

export interface Branch {
  branchArn: string;
  branchName: string;
  description: string;
  tags?: Record<string, string>;
  stage: Stage;
  displayName: string;
  enableNotification: boolean;
  createTime: Date | string;
  updateTime: Date | string;
  environmentVariables: Record<string, string>;
  enableAutoBuild: boolean;
  enableSkewProtection?: boolean;
  customDomains: Array<string>;
  framework: string;
  activeJobId: string;
  totalNumberOfJobs: string;
  enableBasicAuth: boolean;
  enablePerformanceMode?: boolean;
  thumbnailUrl?: string;
  basicAuthCredentials?: string;
  buildSpec?: string;
  ttl: string;
  associatedResources?: Array<string>;
  enablePullRequestPreview: boolean;
  pullRequestEnvironmentName?: string;
  destinationBranch?: string;
  sourceBranch?: string;
  backendEnvironmentArn?: string;
  backend?: Backend;
  computeRoleArn?: string;
}
export type BranchArn = string;

export type Branches = Array<Branch>;
export type BranchName = string;

export type BuildComputeType = "STANDARD_8GB" | "LARGE_16GB" | "XLARGE_72GB";
export type BuildSpec = string;

export interface CacheConfig {
  type: CacheConfigType;
}
export type CacheConfigType = "AMPLIFY_MANAGED" | "AMPLIFY_MANAGED_NO_COOKIES";
export interface Certificate {
  type: CertificateType;
  customCertificateArn?: string;
  certificateVerificationDNSRecord?: string;
}
export type CertificateArn = string;

export interface CertificateSettings {
  type: CertificateType;
  customCertificateArn?: string;
}
export type CertificateType = "AMPLIFY_MANAGED" | "CUSTOM";
export type CertificateVerificationDNSRecord = string;

export type Code = string;

export type CommitId = string;

export type CommitMessage = string;

export type CommitTime = Date | string;

export type ComputeRoleArn = string;

export type Condition = string;

export type Context = string;

export interface CreateAppRequest {
  name: string;
  description?: string;
  repository?: string;
  platform?: Platform;
  computeRoleArn?: string;
  iamServiceRoleArn?: string;
  oauthToken?: string;
  accessToken?: string;
  environmentVariables?: Record<string, string>;
  enableBranchAutoBuild?: boolean;
  enableBranchAutoDeletion?: boolean;
  enableBasicAuth?: boolean;
  basicAuthCredentials?: string;
  customRules?: Array<CustomRule>;
  tags?: Record<string, string>;
  buildSpec?: string;
  customHeaders?: string;
  enableAutoBranchCreation?: boolean;
  autoBranchCreationPatterns?: Array<string>;
  autoBranchCreationConfig?: AutoBranchCreationConfig;
  jobConfig?: JobConfig;
  cacheConfig?: CacheConfig;
}
export interface CreateAppResult {
  app: App;
}
export interface CreateBackendEnvironmentRequest {
  appId: string;
  environmentName: string;
  stackName?: string;
  deploymentArtifacts?: string;
}
export interface CreateBackendEnvironmentResult {
  backendEnvironment: BackendEnvironment;
}
export interface CreateBranchRequest {
  appId: string;
  branchName: string;
  description?: string;
  stage?: Stage;
  framework?: string;
  enableNotification?: boolean;
  enableAutoBuild?: boolean;
  enableSkewProtection?: boolean;
  environmentVariables?: Record<string, string>;
  basicAuthCredentials?: string;
  enableBasicAuth?: boolean;
  enablePerformanceMode?: boolean;
  tags?: Record<string, string>;
  buildSpec?: string;
  ttl?: string;
  displayName?: string;
  enablePullRequestPreview?: boolean;
  pullRequestEnvironmentName?: string;
  backendEnvironmentArn?: string;
  backend?: Backend;
  computeRoleArn?: string;
}
export interface CreateBranchResult {
  branch: Branch;
}
export interface CreateDeploymentRequest {
  appId: string;
  branchName: string;
  fileMap?: Record<string, string>;
}
export interface CreateDeploymentResult {
  jobId?: string;
  fileUploadUrls: Record<string, string>;
  zipUploadUrl: string;
}
export interface CreateDomainAssociationRequest {
  appId: string;
  domainName: string;
  enableAutoSubDomain?: boolean;
  subDomainSettings: Array<SubDomainSetting>;
  autoSubDomainCreationPatterns?: Array<string>;
  autoSubDomainIAMRole?: string;
  certificateSettings?: CertificateSettings;
}
export interface CreateDomainAssociationResult {
  domainAssociation: DomainAssociation;
}
export type CreateTime = Date | string;

export interface CreateWebhookRequest {
  appId: string;
  branchName: string;
  description?: string;
}
export interface CreateWebhookResult {
  webhook: Webhook;
}
export type CustomDomain = string;

export type CustomDomains = Array<string>;
export type CustomHeaders = string;

export interface CustomRule {
  source: string;
  target: string;
  status?: string;
  condition?: string;
}
export type CustomRules = Array<CustomRule>;
export type DefaultDomain = string;

export interface DeleteAppRequest {
  appId: string;
}
export interface DeleteAppResult {
  app: App;
}
export interface DeleteBackendEnvironmentRequest {
  appId: string;
  environmentName: string;
}
export interface DeleteBackendEnvironmentResult {
  backendEnvironment: BackendEnvironment;
}
export interface DeleteBranchRequest {
  appId: string;
  branchName: string;
}
export interface DeleteBranchResult {
  branch: Branch;
}
export interface DeleteDomainAssociationRequest {
  appId: string;
  domainName: string;
}
export interface DeleteDomainAssociationResult {
  domainAssociation: DomainAssociation;
}
export interface DeleteJobRequest {
  appId: string;
  branchName: string;
  jobId: string;
}
export interface DeleteJobResult {
  jobSummary: JobSummary;
}
export interface DeleteWebhookRequest {
  webhookId: string;
}
export interface DeleteWebhookResult {
  webhook: Webhook;
}
export declare class DependentServiceFailureException extends Data.TaggedError(
  "DependentServiceFailureException",
)<{
  readonly message?: string;
}> {}
export type DeploymentArtifacts = string;

export type Description = string;

export type DisplayName = string;

export type DNSRecord = string;

export interface DomainAssociation {
  domainAssociationArn: string;
  domainName: string;
  enableAutoSubDomain: boolean;
  autoSubDomainCreationPatterns?: Array<string>;
  autoSubDomainIAMRole?: string;
  domainStatus: DomainStatus;
  updateStatus?: UpdateStatus;
  statusReason: string;
  certificateVerificationDNSRecord?: string;
  subDomains: Array<SubDomain>;
  certificate?: Certificate;
}
export type DomainAssociationArn = string;

export type DomainAssociations = Array<DomainAssociation>;
export type DomainName = string;

export type DomainPrefix = string;

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
  | "UPDATING";
export type EnableAutoBranchCreation = boolean;

export type EnableAutoBuild = boolean;

export type EnableAutoSubDomain = boolean;

export type EnableBasicAuth = boolean;

export type EnableBranchAutoBuild = boolean;

export type EnableBranchAutoDeletion = boolean;

export type EnableNotification = boolean;

export type EnablePerformanceMode = boolean;

export type EnablePullRequestPreview = boolean;

export type EnableSkewProtection = boolean;

export type EndTime = Date | string;

export type EnvironmentName = string;

export type EnvironmentVariables = Record<string, string>;
export type EnvKey = string;

export type EnvValue = string;

export type ErrorMessage = string;

export type FileMap = Record<string, string>;
export type FileName = string;

export type FileUploadUrls = Record<string, string>;
export type Framework = string;

export interface GenerateAccessLogsRequest {
  startTime?: Date | string;
  endTime?: Date | string;
  domainName: string;
  appId: string;
}
export interface GenerateAccessLogsResult {
  logUrl?: string;
}
export interface GetAppRequest {
  appId: string;
}
export interface GetAppResult {
  app: App;
}
export interface GetArtifactUrlRequest {
  artifactId: string;
}
export interface GetArtifactUrlResult {
  artifactId: string;
  artifactUrl: string;
}
export interface GetBackendEnvironmentRequest {
  appId: string;
  environmentName: string;
}
export interface GetBackendEnvironmentResult {
  backendEnvironment: BackendEnvironment;
}
export interface GetBranchRequest {
  appId: string;
  branchName: string;
}
export interface GetBranchResult {
  branch: Branch;
}
export interface GetDomainAssociationRequest {
  appId: string;
  domainName: string;
}
export interface GetDomainAssociationResult {
  domainAssociation: DomainAssociation;
}
export interface GetJobRequest {
  appId: string;
  branchName: string;
  jobId: string;
}
export interface GetJobResult {
  job: Job;
}
export interface GetWebhookRequest {
  webhookId: string;
}
export interface GetWebhookResult {
  webhook: Webhook;
}
export declare class InternalFailureException extends Data.TaggedError(
  "InternalFailureException",
)<{
  readonly message?: string;
}> {}
export interface Job {
  summary: JobSummary;
  steps: Array<Step>;
}
export type JobArn = string;

export interface JobConfig {
  buildComputeType: BuildComputeType;
}
export type JobId = string;

export type JobReason = string;

export type JobStatus =
  | "CREATED"
  | "PENDING"
  | "PROVISIONING"
  | "RUNNING"
  | "FAILED"
  | "SUCCEED"
  | "CANCELLING"
  | "CANCELLED";
export type JobSummaries = Array<JobSummary>;
export interface JobSummary {
  jobArn: string;
  jobId: string;
  commitId: string;
  commitMessage: string;
  commitTime: Date | string;
  startTime: Date | string;
  status: JobStatus;
  endTime?: Date | string;
  jobType: JobType;
  sourceUrl?: string;
  sourceUrlType?: SourceUrlType;
}
export type JobType = "RELEASE" | "RETRY" | "MANUAL" | "WEB_HOOK";
export type LastDeployTime = Date | string;

export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListAppsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListAppsResult {
  apps: Array<App>;
  nextToken?: string;
}
export interface ListArtifactsRequest {
  appId: string;
  branchName: string;
  jobId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListArtifactsResult {
  artifacts: Array<Artifact>;
  nextToken?: string;
}
export interface ListBackendEnvironmentsRequest {
  appId: string;
  environmentName?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListBackendEnvironmentsResult {
  backendEnvironments: Array<BackendEnvironment>;
  nextToken?: string;
}
export interface ListBranchesRequest {
  appId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListBranchesResult {
  branches: Array<Branch>;
  nextToken?: string;
}
export interface ListDomainAssociationsRequest {
  appId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDomainAssociationsResult {
  domainAssociations: Array<DomainAssociation>;
  nextToken?: string;
}
export interface ListJobsRequest {
  appId: string;
  branchName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListJobsResult {
  jobSummaries: Array<JobSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListWebhooksRequest {
  appId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListWebhooksResult {
  webhooks: Array<Webhook>;
  nextToken?: string;
}
export type LogUrl = string;

export type MaxResults = number;

export type MaxResultsForListApps = number;

export type MD5Hash = string;

export type Name = string;

export type NextToken = string;

export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
}> {}
export type OauthToken = string;

export type Platform = "WEB" | "WEB_DYNAMIC" | "WEB_COMPUTE";
export interface ProductionBranch {
  lastDeployTime?: Date | string;
  status?: string;
  thumbnailUrl?: string;
  branchName?: string;
}
export type PullRequestEnvironmentName = string;

export type Repository = string;

export type RepositoryCloneMethod = "SSH" | "TOKEN" | "SIGV4";
export type ResourceArn = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly code: string;
  readonly message: string;
}> {}
export type Screenshots = Record<string, string>;
export type ServiceRoleArn = string;

export type Source = string;

export type SourceUrl = string;

export type SourceUrlType = "ZIP" | "BUCKET_PREFIX";
export type StackArn = string;

export type StackName = string;

export type Stage =
  | "PRODUCTION"
  | "BETA"
  | "DEVELOPMENT"
  | "EXPERIMENTAL"
  | "PULL_REQUEST";
export interface StartDeploymentRequest {
  appId: string;
  branchName: string;
  jobId?: string;
  sourceUrl?: string;
  sourceUrlType?: SourceUrlType;
}
export interface StartDeploymentResult {
  jobSummary: JobSummary;
}
export interface StartJobRequest {
  appId: string;
  branchName: string;
  jobId?: string;
  jobType: JobType;
  jobReason?: string;
  commitId?: string;
  commitMessage?: string;
  commitTime?: Date | string;
}
export interface StartJobResult {
  jobSummary: JobSummary;
}
export type StartTime = Date | string;

export type Status = string;

export type StatusReason = string;

export interface Step {
  stepName: string;
  startTime: Date | string;
  status: JobStatus;
  endTime: Date | string;
  logUrl?: string;
  artifactsUrl?: string;
  testArtifactsUrl?: string;
  testConfigUrl?: string;
  screenshots?: Record<string, string>;
  statusReason?: string;
  context?: string;
}
export type StepName = string;

export type Steps = Array<Step>;
export interface StopJobRequest {
  appId: string;
  branchName: string;
  jobId: string;
}
export interface StopJobResult {
  jobSummary: JobSummary;
}
export interface SubDomain {
  subDomainSetting: SubDomainSetting;
  verified: boolean;
  dnsRecord: string;
}
export type SubDomains = Array<SubDomain>;
export interface SubDomainSetting {
  prefix: string;
  branchName: string;
}
export type SubDomainSettings = Array<SubDomainSetting>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type Target = string;

export type TestArtifactsUrl = string;

export type TestConfigUrl = string;

export type ThumbnailName = string;

export type ThumbnailUrl = string;

export type TotalNumberOfJobs = string;

export type TTL = string;

export declare class UnauthorizedException extends Data.TaggedError(
  "UnauthorizedException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAppRequest {
  appId: string;
  name?: string;
  description?: string;
  platform?: Platform;
  computeRoleArn?: string;
  iamServiceRoleArn?: string;
  environmentVariables?: Record<string, string>;
  enableBranchAutoBuild?: boolean;
  enableBranchAutoDeletion?: boolean;
  enableBasicAuth?: boolean;
  basicAuthCredentials?: string;
  customRules?: Array<CustomRule>;
  buildSpec?: string;
  customHeaders?: string;
  enableAutoBranchCreation?: boolean;
  autoBranchCreationPatterns?: Array<string>;
  autoBranchCreationConfig?: AutoBranchCreationConfig;
  repository?: string;
  oauthToken?: string;
  accessToken?: string;
  jobConfig?: JobConfig;
  cacheConfig?: CacheConfig;
}
export interface UpdateAppResult {
  app: App;
}
export interface UpdateBranchRequest {
  appId: string;
  branchName: string;
  description?: string;
  framework?: string;
  stage?: Stage;
  enableNotification?: boolean;
  enableAutoBuild?: boolean;
  enableSkewProtection?: boolean;
  environmentVariables?: Record<string, string>;
  basicAuthCredentials?: string;
  enableBasicAuth?: boolean;
  enablePerformanceMode?: boolean;
  buildSpec?: string;
  ttl?: string;
  displayName?: string;
  enablePullRequestPreview?: boolean;
  pullRequestEnvironmentName?: string;
  backendEnvironmentArn?: string;
  backend?: Backend;
  computeRoleArn?: string;
}
export interface UpdateBranchResult {
  branch: Branch;
}
export interface UpdateDomainAssociationRequest {
  appId: string;
  domainName: string;
  enableAutoSubDomain?: boolean;
  subDomainSettings?: Array<SubDomainSetting>;
  autoSubDomainCreationPatterns?: Array<string>;
  autoSubDomainIAMRole?: string;
  certificateSettings?: CertificateSettings;
}
export interface UpdateDomainAssociationResult {
  domainAssociation: DomainAssociation;
}
export type UpdateStatus =
  | "REQUESTING_CERTIFICATE"
  | "PENDING_VERIFICATION"
  | "IMPORTING_CUSTOM_CERTIFICATE"
  | "PENDING_DEPLOYMENT"
  | "AWAITING_APP_CNAME"
  | "UPDATE_COMPLETE"
  | "UPDATE_FAILED";
export type UpdateTime = Date | string;

export interface UpdateWebhookRequest {
  webhookId: string;
  branchName?: string;
  description?: string;
}
export interface UpdateWebhookResult {
  webhook: Webhook;
}
export type UploadUrl = string;

export type Verified = boolean;

export interface WafConfiguration {
  webAclArn?: string;
  wafStatus?: WafStatus;
  statusReason?: string;
}
export type WafStatus =
  | "ASSOCIATING"
  | "ASSOCIATION_FAILED"
  | "ASSOCIATION_SUCCESS"
  | "DISASSOCIATING"
  | "DISASSOCIATION_FAILED";
export type WebAclArn = string;

export interface Webhook {
  webhookArn: string;
  webhookId: string;
  webhookUrl: string;
  appId?: string;
  branchName: string;
  description: string;
  createTime: Date | string;
  updateTime: Date | string;
}
export type WebhookArn = string;

export type webhookCreateTime = Date | string;

export type WebhookId = string;

export type Webhooks = Array<Webhook>;
export type WebhookUrl = string;

export declare namespace CreateApp {
  export type Input = CreateAppRequest;
  export type Output = CreateAppResult;
  export type Error =
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateBackendEnvironment {
  export type Input = CreateBackendEnvironmentRequest;
  export type Output = CreateBackendEnvironmentResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateBranch {
  export type Input = CreateBranchRequest;
  export type Output = CreateBranchResult;
  export type Error =
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateDeployment {
  export type Input = CreateDeploymentRequest;
  export type Output = CreateDeploymentResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateDomainAssociation {
  export type Input = CreateDomainAssociationRequest;
  export type Output = CreateDomainAssociationResult;
  export type Error =
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateWebhook {
  export type Input = CreateWebhookRequest;
  export type Output = CreateWebhookResult;
  export type Error =
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteApp {
  export type Input = DeleteAppRequest;
  export type Output = DeleteAppResult;
  export type Error =
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteBackendEnvironment {
  export type Input = DeleteBackendEnvironmentRequest;
  export type Output = DeleteBackendEnvironmentResult;
  export type Error =
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteBranch {
  export type Input = DeleteBranchRequest;
  export type Output = DeleteBranchResult;
  export type Error =
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteDomainAssociation {
  export type Input = DeleteDomainAssociationRequest;
  export type Output = DeleteDomainAssociationResult;
  export type Error =
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteJob {
  export type Input = DeleteJobRequest;
  export type Output = DeleteJobResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteWebhook {
  export type Input = DeleteWebhookRequest;
  export type Output = DeleteWebhookResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GenerateAccessLogs {
  export type Input = GenerateAccessLogsRequest;
  export type Output = GenerateAccessLogsResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetApp {
  export type Input = GetAppRequest;
  export type Output = GetAppResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetArtifactUrl {
  export type Input = GetArtifactUrlRequest;
  export type Output = GetArtifactUrlResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetBackendEnvironment {
  export type Input = GetBackendEnvironmentRequest;
  export type Output = GetBackendEnvironmentResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetBranch {
  export type Input = GetBranchRequest;
  export type Output = GetBranchResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetDomainAssociation {
  export type Input = GetDomainAssociationRequest;
  export type Output = GetDomainAssociationResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetJob {
  export type Input = GetJobRequest;
  export type Output = GetJobResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetWebhook {
  export type Input = GetWebhookRequest;
  export type Output = GetWebhookResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListApps {
  export type Input = ListAppsRequest;
  export type Output = ListAppsResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListArtifacts {
  export type Input = ListArtifactsRequest;
  export type Output = ListArtifactsResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListBackendEnvironments {
  export type Input = ListBackendEnvironmentsRequest;
  export type Output = ListBackendEnvironmentsResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListBranches {
  export type Input = ListBranchesRequest;
  export type Output = ListBranchesResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListDomainAssociations {
  export type Input = ListDomainAssociationsRequest;
  export type Output = ListDomainAssociationsResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListJobs {
  export type Input = ListJobsRequest;
  export type Output = ListJobsResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListWebhooks {
  export type Input = ListWebhooksRequest;
  export type Output = ListWebhooksResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace StartDeployment {
  export type Input = StartDeploymentRequest;
  export type Output = StartDeploymentResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace StartJob {
  export type Input = StartJobRequest;
  export type Output = StartJobResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace StopJob {
  export type Input = StopJobRequest;
  export type Output = StopJobResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateApp {
  export type Input = UpdateAppRequest;
  export type Output = UpdateAppResult;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateBranch {
  export type Input = UpdateBranchRequest;
  export type Output = UpdateBranchResult;
  export type Error =
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateDomainAssociation {
  export type Input = UpdateDomainAssociationRequest;
  export type Output = UpdateDomainAssociationResult;
  export type Error =
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateWebhook {
  export type Input = UpdateWebhookRequest;
  export type Output = UpdateWebhookResult;
  export type Error =
    | BadRequestException
    | DependentServiceFailureException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}
