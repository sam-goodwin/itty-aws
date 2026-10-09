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
import { SensitiveString, SensitiveBlob } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "SecurityAgent",
  serviceShapeName: "SecurityAgent",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "securityagent" });
const ver = /*@__PURE__*/ T.ServiceVersion("2025-09-06");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
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
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true) {
          return e(
            `https://securityagent-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://securityagent.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()("ValidationException", {
    message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
    fieldList: /*@__PURE__*/ S.optional(
      /*@__PURE__*/ S.suspend(() => __S(353, __c44, 1)).annotate({
        identifier: "ValidationExceptionFieldList",
      }),
    ),
  }) {}
export type AgentSpaceId = string;
export type ArtifactType =
  | "TXT"
  | "PNG"
  | "JPEG"
  | "MD"
  | "PDF"
  | "DOCX"
  | "DOC"
  | "JSON"
  | "YAML"
  | (string & {});
export interface AddArtifactInput {
  agentSpaceId: string;
  artifactContent: Uint8Array;
  artifactType: ArtifactType;
  fileName: string;
}
export type ArtifactId = string;
export interface AddArtifactOutput {
  artifactId: string;
}
export type SecurityRequirementPackId = string;
export type SecurityRequirementName = string;
export interface CreateSecurityRequirementEntry {
  name: string;
  description: string;
  domain: string;
  evaluation: string;
  remediation?: string;
}
export type CreateSecurityRequirementEntryList = CreateSecurityRequirementEntry[];
export interface BatchCreateSecurityRequirementsInput {
  packId: string;
  securityRequirements: CreateSecurityRequirementEntry[];
}
export interface BatchCreateSecurityRequirementResult {
  packId: string;
  name: string;
  description: string;
  domain: string;
  evaluation: string;
  remediation?: string;
  createdAt: Date;
  updatedAt: Date;
}
export type BatchCreateSecurityRequirementResultList = BatchCreateSecurityRequirementResult[];
export interface BatchSecurityRequirementError {
  securityRequirementName: string;
  code: string;
  message: string;
}
export type BatchSecurityRequirementErrors = BatchSecurityRequirementError[];
export interface BatchCreateSecurityRequirementsOutput {
  securityRequirements: BatchCreateSecurityRequirementResult[];
  errors: BatchSecurityRequirementError[];
}
export type CodeReviewIdList = string[];
export interface BatchDeleteCodeReviewsInput {
  codeReviewIds: string[];
  agentSpaceId: string;
}
export interface DeleteCodeReviewFailure {
  codeReviewId?: string;
  reason?: string;
}
export type DeleteCodeReviewFailureList = DeleteCodeReviewFailure[];
export interface BatchDeleteCodeReviewsOutput {
  deleted?: string[];
  failed?: DeleteCodeReviewFailure[];
}
export type PentestIdList = string[];
export interface BatchDeletePentestsInput {
  pentestIds: string[];
  agentSpaceId: string;
}
export interface Endpoint {
  uri?: string;
}
const Endpoint = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<Endpoint>;
export type EndpointList = Endpoint[];
export type UriList = string[];
export type AuthenticationProviderType =
  | "SECRETS_MANAGER"
  | "AWS_LAMBDA"
  | "AWS_IAM_ROLE"
  | "AWS_INTERNAL"
  | (string & {});
export interface Authentication {
  providerType?: AuthenticationProviderType;
  value?: string;
}
export type SensitiveEmailAddress = string | redacted.Redacted<string>;
export interface Actor {
  identifier?: string;
  uris?: string[];
  authentication?: Authentication;
  description?: string;
  enableEmailMfa?: boolean;
  mfaForwardingAddress?: string | redacted.Redacted<string>;
}
export type ActorList = Actor[];
export interface IntegratedDocument {
  integrationId: string;
  resourceId: string;
}
export interface DocumentInfo {
  s3Location?: string;
  artifactId?: string;
  integratedDocument?: IntegratedDocument;
}
export type DocumentList = DocumentInfo[];
export interface SourceCodeRepository {
  s3Location?: string;
}
export type SourceCodeRepositoryList = SourceCodeRepository[];
export interface IntegratedRepository {
  integrationId: string;
  providerResourceId: string;
  branch?: string;
}
export type IntegratedRepositoryList = IntegratedRepository[];
export type CaCertificatePem = string | redacted.Redacted<string>;
export type CaCertificateSource =
  | { inlinePem: string | redacted.Redacted<string>; artifactId?: never; s3Location?: never }
  | { inlinePem?: never; artifactId: string; s3Location?: never }
  | { inlinePem?: never; artifactId?: never; s3Location: string };
export interface TrustedCaCertificate {
  source: CaCertificateSource;
}
export type TrustedCaCertificateList = TrustedCaCertificate[];
export interface Assets {
  endpoints?: Endpoint[];
  actors?: Actor[];
  documents?: DocumentInfo[];
  sourceCode?: SourceCodeRepository[];
  integratedRepositories?: IntegratedRepository[];
  trustedCaCertificates?: TrustedCaCertificate[];
}
export type RiskType =
  | "CROSS_SITE_SCRIPTING"
  | "DEFAULT_CREDENTIALS"
  | "INSECURE_DIRECT_OBJECT_REFERENCE"
  | "PRIVILEGE_ESCALATION"
  | "SERVER_SIDE_TEMPLATE_INJECTION"
  | "COMMAND_INJECTION"
  | "CODE_INJECTION"
  | "SQL_INJECTION"
  | "ARBITRARY_FILE_UPLOAD"
  | "INSECURE_DESERIALIZATION"
  | "LOCAL_FILE_INCLUSION"
  | "INFORMATION_DISCLOSURE"
  | "PATH_TRAVERSAL"
  | "SERVER_SIDE_REQUEST_FORGERY"
  | "JSON_WEB_TOKEN_VULNERABILITIES"
  | "XML_EXTERNAL_ENTITY"
  | "FILE_DELETION"
  | "OTHER"
  | "GRAPHQL_VULNERABILITIES"
  | "BUSINESS_LOGIC_VULNERABILITIES"
  | "CRYPTOGRAPHIC_VULNERABILITIES"
  | "DENIAL_OF_SERVICE"
  | "FILE_ACCESS"
  | "FILE_CREATION"
  | "DATABASE_MODIFICATION"
  | "DATABASE_ACCESS"
  | "OUTBOUND_SERVICE_REQUEST"
  | "UNKNOWN"
  | (string & {});
export type RiskTypeList = RiskType[];
export type ServiceRole = string;
export interface CloudWatchLog {
  logGroup?: string;
  logStream?: string;
}
export type VpcArn = string;
export type SecurityGroupArn = string;
export type SecurityGroupArns = string[];
export type SubnetArn = string;
export type SubnetArns = string[];
export interface VpcConfig {
  vpcArn?: string;
  securityGroupArns?: string[];
  subnetArns?: string[];
}
export type NetworkTrafficRuleEffect = "ALLOW" | "DENY" | (string & {});
export type NetworkTrafficRuleType = "URL" | (string & {});
export interface NetworkTrafficRule {
  effect?: NetworkTrafficRuleEffect;
  pattern?: string;
  networkTrafficRuleType?: NetworkTrafficRuleType;
}
export type NetworkTrafficRuleList = NetworkTrafficRule[];
export interface CustomHeader {
  name?: string;
  value?: string;
}
export type CustomHeaderList = CustomHeader[];
export interface NetworkTrafficConfig {
  rules?: NetworkTrafficRule[];
  customHeaders?: CustomHeader[];
}
export type CodeRemediationStrategy = "AUTOMATIC" | "DISABLED" | (string & {});
export type CleanUpStrategy = "BEST_EFFORT_DELETE" | "RETAIN_ALL" | (string & {});
export type SkillType = "FINDING_PERSONALIZATION" | "LOGIN_OPTIMIZATION" | (string & {});
export type SkillTypeList = SkillType[];
export interface ReportDestination {
  integrationId: string;
  containerId: string;
  parentId?: string;
  documentId?: string;
}
export type RiskLevel =
  | "UNKNOWN"
  | "INFORMATIONAL"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "CRITICAL"
  | (string & {});
export type RiskLevelFilterList = RiskLevel[];
export type ConfidenceLevel =
  | "FALSE_POSITIVE"
  | "UNCONFIRMED"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | (string & {});
export type ConfidenceLevelFilterList = ConfidenceLevel[];
export type FindingStatus = "ACTIVE" | "RESOLVED" | "ACCEPTED" | "FALSE_POSITIVE" | (string & {});
export type FindingStatusFilterList = FindingStatus[];
export type RiskTypeFilterList = RiskType[];
export type ReportFilterValue = string;
export type ReportFilterList = string[];
export type TaskExecutionStatus =
  | "IN_PROGRESS"
  | "ABORTED"
  | "COMPLETED"
  | "INTERNAL_ERROR"
  | "FAILED"
  | (string & {});
export type TaskExecutionStatusFilterList = TaskExecutionStatus[];
export interface ReportFilters {
  riskLevels?: RiskLevel[];
  confidenceLevels?: ConfidenceLevel[];
  statuses?: FindingStatus[];
  riskTypes?: RiskType[];
  findingTypes?: string[];
  taskStatuses?: TaskExecutionStatus[];
  annotationNotes?: boolean;
  complianceReport?: boolean;
}
export interface CiCdConfiguration {
  enabled?: boolean;
}
export interface Pentest {
  pentestId: string;
  agentSpaceId: string;
  title: string;
  assets: Assets;
  excludeRiskTypes?: RiskType[];
  serviceRole?: string;
  logConfig?: CloudWatchLog;
  vpcConfig?: VpcConfig;
  networkTrafficConfig?: NetworkTrafficConfig;
  codeRemediationStrategy?: CodeRemediationStrategy;
  cleanUpStrategy?: CleanUpStrategy;
  disableManagedSkills?: SkillType[];
  maxTaskHours?: number;
  reportDestination?: ReportDestination;
  reportFilters?: ReportFilters;
  cicdConfiguration?: CiCdConfiguration;
  createdAt?: Date;
  updatedAt?: Date;
}
export type PentestList = Pentest[];
export interface DeletePentestFailure {
  pentestId?: string;
  reason?: string;
}
export type DeletePentestFailureList = DeletePentestFailure[];
export interface BatchDeletePentestsOutput {
  deleted?: Pentest[];
  failed?: DeletePentestFailure[];
}
export type SecurityRequirementNameList = string[];
export interface BatchDeleteSecurityRequirementsInput {
  packId: string;
  securityRequirementNames: string[];
}
export interface BatchDeleteSecurityRequirementsOutput {
  deletedSecurityRequirementNames: string[];
  errors: BatchSecurityRequirementError[];
}
export type ThreatModelIdList = string[];
export interface BatchDeleteThreatModelsInput {
  threatModelIds: string[];
  agentSpaceId: string;
}
export interface DeleteThreatModelFailure {
  threatModelId?: string;
  reason?: string;
}
export type DeleteThreatModelFailureList = DeleteThreatModelFailure[];
export interface BatchDeleteThreatModelsOutput {
  deleted?: string[];
  failed?: DeleteThreatModelFailure[];
}
export type AgentSpaceIdList = string[];
export interface BatchGetAgentSpacesInput {
  agentSpaceIds: string[];
}
export type VpcConfigs = VpcConfig[];
export type LogGroupArn = string;
export type LogGroupArns = string[];
export type S3BucketArn = string;
export type S3BucketArns = string[];
export type SecretArn = string;
export type SecretArns = string[];
export type LambdaFunctionArn = string;
export type LambdaFunctionArns = string[];
export type IamRoles = string[];
export interface AWSResources {
  vpcs?: VpcConfig[];
  logGroups?: string[];
  s3Buckets?: string[];
  secretArns?: string[];
  lambdaFunctionArns?: string[];
  iamRoles?: string[];
}
export type TargetDomainIdList = string[];
export interface CodeReviewSettings {
  controlsScanning: boolean;
  generalPurposeScanning: boolean;
}
export type KmsKeyId = string;
export interface AgentSpace {
  agentSpaceId: string;
  name: string;
  description?: string;
  awsResources?: AWSResources;
  targetDomainIds?: string[];
  codeReviewSettings?: CodeReviewSettings;
  kmsKeyId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export type AgentSpaceList = AgentSpace[];
export interface BatchGetAgentSpacesOutput {
  agentSpaces?: AgentSpace[];
  notFound?: string[];
}
export type ArtifactIds = string[];
export interface BatchGetArtifactMetadataInput {
  agentSpaceId: string;
  artifactIds: string[];
}
export interface ArtifactMetadataItem {
  agentSpaceId: string;
  artifactId: string;
  fileName: string;
  updatedAt: Date;
}
export type ArtifactMetadataList = ArtifactMetadataItem[];
export interface BatchGetArtifactMetadataOutput {
  artifactMetadataList: ArtifactMetadataItem[];
}
export type CodeReviewJobIdList = string[];
export interface BatchGetCodeReviewJobsInput {
  codeReviewJobIds: string[];
  agentSpaceId: string;
}
export type JobStatus =
  | "IN_PROGRESS"
  | "STOPPING"
  | "STOPPED"
  | "FAILED"
  | "COMPLETED"
  | (string & {});
export type StepName =
  | "PREFLIGHT"
  | "STATIC_ANALYSIS"
  | "PENTEST"
  | "FINALIZING"
  | "VALIDATION"
  | (string & {});
export type StepStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "STOPPED"
  | (string & {});
export interface Step {
  name?: StepName;
  status?: StepStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
export type StepList = Step[];
export type ContextType = "ERROR" | "CLIENT_ERROR" | "WARNING" | "INFO" | (string & {});
export interface ExecutionContext {
  contextType?: ContextType;
  context?: string;
  timestamp?: Date;
}
export type ExecutionContextList = ExecutionContext[];
export type ErrorCode = "CLIENT_ERROR" | "INTERNAL_ERROR" | "STOPPED_BY_USER" | (string & {});
export interface ErrorInformation {
  code?: ErrorCode;
  message?: string;
}
export interface CodeReviewJob {
  codeReviewJobId?: string;
  codeReviewId?: string;
  title?: string;
  overview?: string;
  status?: JobStatus;
  documents?: DocumentInfo[];
  sourceCode?: SourceCodeRepository[];
  steps?: Step[];
  executionContext?: ExecutionContext[];
  serviceRole?: string;
  logConfig?: CloudWatchLog;
  errorInformation?: ErrorInformation;
  integratedRepositories?: IntegratedRepository[];
  codeRemediationStrategy?: CodeRemediationStrategy;
  maxTaskHours?: number;
  reportDestination?: ReportDestination;
  createdAt?: Date;
  updatedAt?: Date;
}
export type CodeReviewJobList = CodeReviewJob[];
export interface BatchGetCodeReviewJobsOutput {
  codeReviewJobs?: CodeReviewJob[];
  notFound?: string[];
}
export type TaskIdList = string[];
export interface BatchGetCodeReviewJobTasksInput {
  agentSpaceId: string;
  codeReviewJobTaskIds: string[];
}
export interface Category {
  name?: string;
  isPrimary?: boolean;
}
export type CategoryList = Category[];
export type LogType = "CLOUDWATCH" | (string & {});
export interface LogLocation {
  logType?: LogType;
  cloudWatchLog?: CloudWatchLog;
}
export interface CodeReviewJobTask {
  taskId: string;
  codeReviewId?: string;
  codeReviewJobId?: string;
  agentSpaceId?: string;
  title?: string;
  description?: string;
  categories?: Category[];
  riskType?: RiskType;
  executionStatus?: TaskExecutionStatus;
  logsLocation?: LogLocation;
  createdAt?: Date;
  updatedAt?: Date;
}
export type CodeReviewJobTaskList = CodeReviewJobTask[];
export interface BatchGetCodeReviewJobTasksOutput {
  codeReviewJobTasks?: CodeReviewJobTask[];
  notFound?: string[];
}
export interface BatchGetCodeReviewsInput {
  codeReviewIds: string[];
  agentSpaceId: string;
}
export type ValidationMode = "DISABLED" | "SIMULATED" | (string & {});
export interface CodeReview {
  codeReviewId: string;
  agentSpaceId: string;
  title: string;
  assets: Assets;
  serviceRole?: string;
  logConfig?: CloudWatchLog;
  codeRemediationStrategy?: CodeRemediationStrategy;
  validationMode?: ValidationMode;
  maxTaskHours?: number;
  reportDestination?: ReportDestination;
  reportFilters?: ReportFilters;
  createdAt?: Date;
  updatedAt?: Date;
}
export type CodeReviewList = CodeReview[];
export interface BatchGetCodeReviewsOutput {
  codeReviews?: CodeReview[];
  notFound?: string[];
}
export type FindingIdList = string[];
export interface BatchGetFindingsInput {
  findingIds: string[];
  agentSpaceId: string;
}
export type ValidationStatus =
  | "CONFIRMED"
  | "NOT_REPRODUCED"
  | "VALIDATION_FAILED"
  | "VALIDATING"
  | "NOT_VALIDATED"
  | (string & {});
export type CodeRemediationTaskStatus = "IN_PROGRESS" | "COMPLETED" | "FAILED" | (string & {});
export interface CodeRemediationTaskDetails {
  repoName?: string;
  codeDiffLink?: string;
  pullRequestLink?: string;
}
export type CodeRemediationTaskDetailsList = CodeRemediationTaskDetails[];
export interface CodeRemediationTask {
  status: CodeRemediationTaskStatus;
  statusReason?: string;
  taskDetails?: CodeRemediationTaskDetails[];
}
export interface CodeLocation {
  filePath: string;
  lineStart?: number;
  lineEnd?: number;
  label?: string;
}
export type CodeLocationList = CodeLocation[];
export interface VerificationScriptEnvVar {
  name?: string;
  value?: string;
}
export type VerificationScriptEnvVarList = VerificationScriptEnvVar[];
export interface VerificationScript {
  scriptType?: string;
  scriptUrl?: string;
  instructions?: string;
  envVars?: VerificationScriptEnvVar[];
}
export type StringList = string[];
export interface Finding {
  findingId: string;
  agentSpaceId: string;
  pentestId?: string;
  pentestJobId?: string;
  codeReviewId?: string;
  codeReviewJobId?: string;
  taskId?: string;
  name?: string;
  description?: string;
  status?: FindingStatus;
  riskType?: string;
  riskLevel?: RiskLevel;
  riskScore?: string;
  reasoning?: string;
  confidence?: ConfidenceLevel;
  validationStatus?: ValidationStatus;
  attackScript?: string;
  codeRemediationTask?: CodeRemediationTask;
  lastUpdatedBy?: string;
  customerNote?: string;
  codeLocations?: CodeLocation[];
  verificationScript?: VerificationScript;
  alignmentRationale?: string;
  revalidationJobIds?: string[];
  originalFindingId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export type FindingList = Finding[];
export interface BatchGetFindingsOutput {
  findings?: Finding[];
  notFound?: string[];
}
export type PentestJobIdList = string[];
export interface BatchGetPentestJobsInput {
  pentestJobIds: string[];
  agentSpaceId: string;
}
export type JobType = "FULL" | "REVALIDATION" | "CICD" | (string & {});
export type ScopeDecision = "IN_SCOPE" | "SCOPED_OUT" | "SCOPE_CONFLICT" | (string & {});
export interface ScopeResult {
  decision: ScopeDecision;
  reason: string;
}
export interface ScopeChange {
  integrationId: string;
  providerResourceId: string;
  baseCommitSha?: string;
  headCommitSha: string;
  triggerRunId?: string;
}
export type ScopeChangeList = ScopeChange[];
export interface PentestJob {
  pentestJobId?: string;
  pentestId?: string;
  title?: string;
  overview?: string;
  status?: JobStatus;
  endpoints?: Endpoint[];
  actors?: Actor[];
  documents?: DocumentInfo[];
  sourceCode?: SourceCodeRepository[];
  excludePaths?: Endpoint[];
  allowedDomains?: Endpoint[];
  excludeRiskTypes?: RiskType[];
  steps?: Step[];
  executionContext?: ExecutionContext[];
  serviceRole?: string;
  logConfig?: CloudWatchLog;
  vpcConfig?: VpcConfig;
  networkTrafficConfig?: NetworkTrafficConfig;
  errorInformation?: ErrorInformation;
  integratedRepositories?: IntegratedRepository[];
  trustedCaCertificates?: TrustedCaCertificate[];
  codeRemediationStrategy?: CodeRemediationStrategy;
  cleanUpStrategy?: CleanUpStrategy;
  disableManagedSkills?: SkillType[];
  maxTaskHours?: number;
  jobType?: JobType;
  selectedFindingIds?: string[];
  reportDestination?: ReportDestination;
  reportUrl?: string;
  scopeResult?: ScopeResult;
  scopeChanges?: ScopeChange[];
  cicdConfiguration?: CiCdConfiguration;
  createdAt?: Date;
  updatedAt?: Date;
}
export type PentestJobList = PentestJob[];
export interface BatchGetPentestJobsOutput {
  pentestJobs?: PentestJob[];
  notFound?: string[];
}
export interface BatchGetPentestJobTasksInput {
  agentSpaceId: string;
  taskIds: string[];
}
export interface Task {
  taskId: string;
  pentestId?: string;
  pentestJobId?: string;
  agentSpaceId?: string;
  title?: string;
  description?: string;
  categories?: Category[];
  riskType?: RiskType;
  targetEndpoint?: Endpoint;
  executionStatus?: TaskExecutionStatus;
  logsLocation?: LogLocation;
  taskHours?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
export type TaskList = Task[];
export interface BatchGetPentestJobTasksOutput {
  tasks?: Task[];
  notFound?: string[];
}
export interface BatchGetPentestsInput {
  pentestIds: string[];
  agentSpaceId: string;
}
export interface BatchGetPentestsOutput {
  pentests?: Pentest[];
  notFound?: string[];
}
export interface BatchGetSecurityRequirementsInput {
  packId: string;
  securityRequirementNames: string[];
}
export interface BatchGetSecurityRequirementResult {
  packId: string;
  name: string;
  description: string;
  domain: string;
  evaluation: string;
  remediation?: string;
  createdAt: Date;
  updatedAt: Date;
}
export type BatchGetSecurityRequirementResultList = BatchGetSecurityRequirementResult[];
export interface BatchGetSecurityRequirementsOutput {
  securityRequirements: BatchGetSecurityRequirementResult[];
  errors: BatchSecurityRequirementError[];
}
export interface BatchGetTargetDomainsInput {
  targetDomainIds: string[];
}
export type TargetDomainId = string;
export type TargetDomainStatus = "PENDING" | "VERIFIED" | "FAILED" | "UNREACHABLE" | (string & {});
export type DomainVerificationMethod = "DNS_TXT" | "HTTP_ROUTE" | "PRIVATE_VPC" | (string & {});
export type DNSRecordType = "TXT" | (string & {});
export interface DnsVerification {
  token?: string;
  dnsRecordName?: string;
  dnsRecordType?: DNSRecordType;
}
export interface HttpVerification {
  token?: string;
  routePath?: string;
}
export interface VerificationDetails {
  method?: DomainVerificationMethod;
  dnsTxt?: DnsVerification;
  httpRoute?: HttpVerification;
}
export interface TargetDomain {
  targetDomainId: string;
  domainName: string;
  verificationStatus?: TargetDomainStatus;
  verificationStatusReason?: string;
  verificationDetails?: VerificationDetails;
  createdAt?: Date;
  verifiedAt?: Date;
}
export type TargetDomainList = TargetDomain[];
export interface BatchGetTargetDomainsOutput {
  targetDomains?: TargetDomain[];
  notFound?: string[];
}
export type ThreatModelJobIdList = string[];
export interface BatchGetThreatModelJobsInput {
  threatModelJobIds: string[];
  agentSpaceId: string;
}
export interface ThreatModelJob {
  threatModelJobId?: string;
  threatModelId?: string;
  agentSpaceId?: string;
  title?: string;
  status?: JobStatus;
  createdAt?: Date;
  updatedAt?: Date;
  executionStartTime?: Date;
  executionEndTime?: Date;
  sourceCode?: SourceCodeRepository[];
  integratedRepositories?: IntegratedRepository[];
  documents?: DocumentInfo[];
  scopeDocs?: DocumentInfo[];
  errorInformation?: ErrorInformation;
  systemOverview?: string;
  reportDestination?: ReportDestination;
}
export type ThreatModelJobList = ThreatModelJob[];
export interface BatchGetThreatModelJobsOutput {
  threatModelJobs?: ThreatModelJob[];
  notFound?: string[];
}
export interface BatchGetThreatModelJobTasksInput {
  agentSpaceId: string;
  threatModelJobTaskIds: string[];
}
export interface ThreatModelJobTask {
  taskId: string;
  threatModelId?: string;
  threatModelJobId?: string;
  agentSpaceId?: string;
  title?: string;
  description?: string;
  executionStatus?: TaskExecutionStatus;
  logsLocation?: LogLocation;
  createdAt?: Date;
  updatedAt?: Date;
}
export type ThreatModelJobTaskList = ThreatModelJobTask[];
export interface BatchGetThreatModelJobTasksOutput {
  threatModelJobTasks?: ThreatModelJobTask[];
  notFound?: string[];
}
export interface BatchGetThreatModelsInput {
  threatModelIds: string[];
  agentSpaceId: string;
}
export interface ThreatModel {
  threatModelId: string;
  agentSpaceId: string;
  title: string;
  description?: string;
  assets: Assets;
  scopeDocs?: DocumentInfo[];
  serviceRole?: string;
  logConfig?: CloudWatchLog;
  reportDestination?: ReportDestination;
  createdAt?: Date;
  updatedAt?: Date;
}
export type ThreatModelList = ThreatModel[];
export interface BatchGetThreatModelsOutput {
  threatModels?: ThreatModel[];
  notFound?: string[];
}
export type ThreatIdList = string[];
export interface BatchGetThreatsInput {
  threatIds: string[];
  agentSpaceId: string;
}
export type ThreatSeverity = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "INFO" | (string & {});
export type ThreatStatus = "OPEN" | "RESOLVED" | "DISMISSED" | (string & {});
export interface ThreatAnchorShape {
  kind?: string;
  id?: string;
  packageId?: string;
}
export interface ThreatEvidenceShape {
  packageId?: string;
  path?: string;
}
export type ThreatEvidenceList = ThreatEvidenceShape[];
export type StrideCategory =
  | "SPOOFING"
  | "TAMPERING"
  | "REPUDIATION"
  | "INFORMATION_DISCLOSURE"
  | "DENIAL_OF_SERVICE"
  | "ELEVATION_OF_PRIVILEGE"
  | (string & {});
export type StrideCategoryList = StrideCategory[];
export type ThreatActor = "CUSTOMER" | "AGENT" | (string & {});
export interface Threat {
  threatId?: string;
  threatJobId?: string;
  title?: string;
  statement?: string;
  severity?: ThreatSeverity;
  status?: ThreatStatus;
  comments?: string;
  threatSource?: string;
  prerequisites?: string;
  threatAction?: string;
  threatImpact?: string;
  impactedGoal?: string[];
  impactedAssets?: string[];
  anchor?: ThreatAnchorShape;
  evidence?: ThreatEvidenceShape[];
  stride?: StrideCategory[];
  recommendation?: string;
  createdBy?: ThreatActor;
  updatedBy?: ThreatActor;
  createdAt?: Date;
  updatedAt?: Date;
}
export type ThreatList = Threat[];
export interface BatchGetThreatsOutput {
  threats?: Threat[];
  notFound?: string[];
}
export interface UpdateSecurityRequirementEntry {
  name: string;
  description?: string;
  domain?: string;
  evaluation?: string;
  remediation?: string;
}
export type UpdateSecurityRequirementEntryList = UpdateSecurityRequirementEntry[];
export interface BatchUpdateSecurityRequirementsInput {
  packId: string;
  securityRequirements: UpdateSecurityRequirementEntry[];
}
export interface BatchUpdateSecurityRequirementsOutput {
  updatedSecurityRequirementNames: string[];
  errors: BatchSecurityRequirementError[];
}
export type AgentName = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateAgentSpaceInput {
  name: string;
  description?: string;
  awsResources?: AWSResources;
  targetDomainIds?: string[];
  codeReviewSettings?: CodeReviewSettings;
  kmsKeyId?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateAgentSpaceOutput {
  agentSpaceId: string;
  name: string;
  description?: string;
  awsResources?: AWSResources;
  targetDomainIds?: string[];
  codeReviewSettings?: CodeReviewSettings;
  kmsKeyId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export type IdCInstanceArn = string;
export type RoleArn = string;
export type DefaultKmsKeyId = string;
export interface CreateApplicationRequest {
  idcInstanceArn?: string;
  roleArn?: string;
  defaultKmsKeyId?: string;
  tags?: { [key: string]: string | undefined };
}
export type ApplicationId = string;
export interface CreateApplicationResponse {
  applicationId: string;
}
export interface CreateCodeReviewInput {
  title: string;
  agentSpaceId: string;
  assets: Assets;
  serviceRole?: string;
  logConfig?: CloudWatchLog;
  codeRemediationStrategy?: CodeRemediationStrategy;
  validationMode?: ValidationMode;
  maxTaskHours?: number;
  reportDestination?: ReportDestination;
  reportFilters?: ReportFilters;
}
export interface CreateCodeReviewOutput {
  codeReviewId: string;
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
  assets?: Assets;
  serviceRole?: string;
  logConfig?: CloudWatchLog;
  agentSpaceId?: string;
  codeRemediationStrategy?: CodeRemediationStrategy;
  validationMode?: ValidationMode;
  maxTaskHours?: number;
  reportDestination?: ReportDestination;
  reportFilters?: ReportFilters;
}
export type Provider =
  | "GITHUB"
  | "GITLAB"
  | "BITBUCKET"
  | "CONFLUENCE"
  | "AZURE_DEVOPS"
  | (string & {});
export type AuthCode = string;
export type CsrfState = string;
export type TargetUrl = string;
export interface GitHubIntegrationInput {
  code: string;
  state: string;
  organizationName?: string;
  targetUrl?: string;
  installationId?: string;
}
export type AccessToken = string | redacted.Redacted<string>;
export type GitLabTokenType = "PERSONAL" | "GROUP" | (string & {});
export interface GitLabIntegrationInput {
  accessToken: string | redacted.Redacted<string>;
  targetUrl?: string;
  tokenType: GitLabTokenType;
  groupId?: string;
}
export type BitbucketInstallationId = string;
export type BitbucketWorkspace = string;
export interface BitbucketIntegrationInput {
  installationId: string;
  workspace: string;
  code: string;
  state: string;
}
export type ConfluenceInstallationId = string;
export type ConfluenceSiteUrl = string;
export interface ConfluenceIntegrationInput {
  installationId: string;
  code: string;
  state: string;
  siteUrl: string;
}
export interface AzureDevOpsIntegrationInput {
  code: string;
  state: string;
  organizationName: string;
}
export interface BitbucketDataCenterIntegrationInput {
  targetUrl: string;
  code: string;
  state: string;
}
export type ProviderInput =
  | {
      github: GitHubIntegrationInput;
      gitlab?: never;
      bitbucket?: never;
      confluence?: never;
      azureDevOps?: never;
      bitbucketDataCenter?: never;
    }
  | {
      github?: never;
      gitlab: GitLabIntegrationInput;
      bitbucket?: never;
      confluence?: never;
      azureDevOps?: never;
      bitbucketDataCenter?: never;
    }
  | {
      github?: never;
      gitlab?: never;
      bitbucket: BitbucketIntegrationInput;
      confluence?: never;
      azureDevOps?: never;
      bitbucketDataCenter?: never;
    }
  | {
      github?: never;
      gitlab?: never;
      bitbucket?: never;
      confluence: ConfluenceIntegrationInput;
      azureDevOps?: never;
      bitbucketDataCenter?: never;
    }
  | {
      github?: never;
      gitlab?: never;
      bitbucket?: never;
      confluence?: never;
      azureDevOps: AzureDevOpsIntegrationInput;
      bitbucketDataCenter?: never;
    }
  | {
      github?: never;
      gitlab?: never;
      bitbucket?: never;
      confluence?: never;
      azureDevOps?: never;
      bitbucketDataCenter: BitbucketDataCenterIntegrationInput;
    };
export type PrivateConnectionName = string;
export interface CreateIntegrationInput {
  provider: Provider;
  input: ProviderInput;
  integrationDisplayName: string;
  kmsKeyId?: string;
  tags?: { [key: string]: string | undefined };
  privateConnectionName?: string;
}
export type IntegrationId = string;
export interface CreateIntegrationOutput {
  integrationId: string;
}
export type MembershipId = string;
export type MembershipType = "USER" | (string & {});
export type UserRole = "MEMBER" | (string & {});
export interface UserConfig {
  role?: UserRole;
}
export type MembershipConfig = { user: UserConfig };
export interface CreateMembershipRequest {
  applicationId: string;
  agentSpaceId: string;
  membershipId: string;
  memberType: MembershipType;
  config?: MembershipConfig;
}
export interface CreateMembershipResponse {}
export interface CreatePentestInput {
  title: string;
  agentSpaceId: string;
  assets?: Assets;
  excludeRiskTypes?: RiskType[];
  serviceRole?: string;
  logConfig?: CloudWatchLog;
  vpcConfig?: VpcConfig;
  networkTrafficConfig?: NetworkTrafficConfig;
  codeRemediationStrategy?: CodeRemediationStrategy;
  disableManagedSkills?: SkillType[];
  maxTaskHours?: number;
  reportDestination?: ReportDestination;
  reportFilters?: ReportFilters;
  cicdConfiguration?: CiCdConfiguration;
}
export interface CreatePentestOutput {
  pentestId?: string;
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
  assets?: Assets;
  excludeRiskTypes?: RiskType[];
  serviceRole?: string;
  logConfig?: CloudWatchLog;
  agentSpaceId?: string;
  reportDestination?: ReportDestination;
  reportFilters?: ReportFilters;
  cicdConfiguration?: CiCdConfiguration;
}
export type HostAddress = string;
export type PrivateConnectionVpcId = string;
export type PrivateConnectionSubnetId = string;
export type PrivateConnectionSubnetIds = string[];
export type PrivateConnectionSecurityGroupId = string;
export type PrivateConnectionSecurityGroupIds = string[];
export type IpAddressType = "IPV4" | "IPV6" | "DUAL_STACK" | (string & {});
export type MaxIpv4AddressesPerEni = number;
export type PortRange = string;
export type PortRanges = string[];
export type CertificateChain = string | redacted.Redacted<string>;
export type ResourceConfigDnsResolution = "PUBLIC" | "IN_VPC" | (string & {});
export interface ServiceManagedInput {
  hostAddress: string;
  vpcId: string;
  subnetIds: string[];
  securityGroupIds?: string[];
  ipAddressType?: IpAddressType;
  ipv4AddressesPerEni?: number;
  portRanges?: string[];
  certificate?: string | redacted.Redacted<string>;
  dnsResolution?: ResourceConfigDnsResolution;
}
export type ResourceConfigurationId = string;
export interface SelfManagedInput {
  resourceConfigurationId: string;
  certificate?: string | redacted.Redacted<string>;
}
export type PrivateConnectionMode =
  | { serviceManaged: ServiceManagedInput; selfManaged?: never }
  | { serviceManaged?: never; selfManaged: SelfManagedInput };
export interface CreatePrivateConnectionInput {
  privateConnectionName: string;
  mode: PrivateConnectionMode;
  tags?: { [key: string]: string | undefined };
}
export type PrivateConnectionType = "SERVICE_MANAGED" | "SELF_MANAGED" | (string & {});
export type PrivateConnectionStatus =
  | "ACTIVE"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | (string & {});
export type ResourceGatewayId = string;
export interface CreatePrivateConnectionOutput {
  name: string;
  type: PrivateConnectionType;
  status: PrivateConnectionStatus;
  resourceGatewayId?: string;
  hostAddress?: string;
  vpcId?: string;
  resourceConfigurationId?: string;
  certificateExpiryTime?: Date;
  dnsResolution?: ResourceConfigDnsResolution;
  failureMessage?: string;
  tags?: { [key: string]: string | undefined };
}
export type SecurityRequirementPackName = string;
export type SecurityRequirementPackStatus = "ENABLED" | "DISABLED" | (string & {});
export interface CreateSecurityRequirementPackInput {
  name: string;
  description?: string;
  status?: SecurityRequirementPackStatus;
  kmsKeyId?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateSecurityRequirementPackOutput {
  packId: string;
  status: SecurityRequirementPackStatus;
  kmsKeyId?: string;
}
export interface CreateTargetDomainInput {
  targetDomainName: string;
  verificationMethod: DomainVerificationMethod;
  tags?: { [key: string]: string | undefined };
}
export interface CreateTargetDomainOutput {
  targetDomainId: string;
  domainName: string;
  verificationStatus: TargetDomainStatus;
  verificationStatusReason?: string;
  verificationDetails?: VerificationDetails;
  createdAt?: Date;
  verifiedAt?: Date;
}
export interface CreateThreatInput {
  agentSpaceId: string;
  threatJobId: string;
  title?: string;
  statement?: string;
  severity?: ThreatSeverity;
  comments?: string;
  stride?: StrideCategory[];
  threatSource?: string;
  prerequisites?: string;
  threatAction?: string;
  threatImpact?: string;
  impactedGoal?: string[];
  impactedAssets?: string[];
  anchor?: ThreatAnchorShape;
  evidence?: ThreatEvidenceShape[];
  recommendation?: string;
}
export interface CreateThreatOutput {
  threatId: string;
  threatJobId: string;
  title?: string;
  statement?: string;
  severity?: ThreatSeverity;
  status?: ThreatStatus;
  comments?: string;
  stride?: StrideCategory[];
  threatSource?: string;
  prerequisites?: string;
  threatAction?: string;
  threatImpact?: string;
  impactedGoal?: string[];
  impactedAssets?: string[];
  anchor?: ThreatAnchorShape;
  evidence?: ThreatEvidenceShape[];
  recommendation?: string;
  createdBy?: ThreatActor;
  updatedBy?: ThreatActor;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface CreateThreatModelInput {
  title: string;
  agentSpaceId: string;
  description?: string;
  assets?: Assets;
  scopeDocs?: DocumentInfo[];
  serviceRole: string;
  logConfig?: CloudWatchLog;
  reportDestination?: ReportDestination;
}
export interface CreateThreatModelOutput {
  threatModelId: string;
  title?: string;
  agentSpaceId?: string;
  description?: string;
  assets?: Assets;
  scopeDocs?: DocumentInfo[];
  serviceRole?: string;
  logConfig?: CloudWatchLog;
  createdAt?: Date;
  updatedAt?: Date;
  reportDestination?: ReportDestination;
}
export interface DeleteAgentSpaceInput {
  agentSpaceId: string;
}
export interface DeleteAgentSpaceOutput {
  agentSpaceId?: string;
}
export interface DeleteApplicationRequest {
  applicationId: string;
}
export interface DeleteApplicationResponse {}
export interface DeleteArtifactInput {
  agentSpaceId: string;
  artifactId: string;
}
export interface DeleteArtifactOutput {}
export interface DeleteIntegrationInput {
  integrationId: string;
}
export interface DeleteIntegrationOutput {}
export interface DeleteMembershipRequest {
  applicationId: string;
  agentSpaceId: string;
  membershipId: string;
  memberType?: MembershipType;
}
export interface DeleteMembershipResponse {}
export interface DeletePrivateConnectionInput {
  privateConnectionName: string;
}
export interface DeletePrivateConnectionOutput {
  name: string;
  type: PrivateConnectionType;
  status: PrivateConnectionStatus;
  resourceGatewayId?: string;
  hostAddress?: string;
  vpcId?: string;
  resourceConfigurationId?: string;
  certificateExpiryTime?: Date;
  dnsResolution?: ResourceConfigDnsResolution;
  failureMessage?: string;
  tags?: { [key: string]: string | undefined };
}
export interface DeleteSecurityRequirementPackInput {
  packId: string;
}
export interface DeleteSecurityRequirementPackOutput {}
export interface DeleteTargetDomainInput {
  targetDomainId: string;
}
export interface DeleteTargetDomainOutput {
  targetDomainId?: string;
}
export interface DescribePrivateConnectionInput {
  privateConnectionName: string;
}
export interface DescribePrivateConnectionOutput {
  name: string;
  type: PrivateConnectionType;
  status: PrivateConnectionStatus;
  resourceGatewayId?: string;
  hostAddress?: string;
  vpcId?: string;
  resourceConfigurationId?: string;
  certificateExpiryTime?: Date;
  dnsResolution?: ResourceConfigDnsResolution;
  failureMessage?: string;
  tags?: { [key: string]: string | undefined };
}
export interface GetApplicationRequest {
  applicationId: string;
}
export type ApplicationDomain = string;
export type IdCApplicationArn = string;
export interface IdCConfiguration {
  idcApplicationArn?: string;
  idcInstanceArn?: string;
}
export interface GetApplicationResponse {
  applicationId: string;
  domain: string;
  applicationName?: string;
  idcConfiguration?: IdCConfiguration;
  roleArn?: string;
  defaultKmsKeyId?: string;
}
export interface GetArtifactInput {
  agentSpaceId: string;
  artifactId: string;
}
export interface Artifact {
  contents: string;
  type: ArtifactType;
}
export interface GetArtifactOutput {
  agentSpaceId: string;
  artifactId: string;
  artifact: Artifact;
  fileName: string;
  updatedAt: Date;
}
export interface GetIntegrationInput {
  integrationId: string;
}
export type ProviderType = "SOURCE_CODE" | "DOCUMENTATION" | (string & {});
export interface GetIntegrationOutput {
  integrationId: string;
  installationId: string;
  provider: Provider;
  providerType: ProviderType;
  displayName?: string;
  kmsKeyId?: string;
  targetUrl?: string;
  webhookUrl?: string;
  privateConnectionName?: string;
}
export interface GetSecurityRequirementPackInput {
  packId: string;
}
export type ManagementType = "AWS_MANAGED" | "CUSTOMER_MANAGED" | (string & {});
export type SecurityRequirementPackImportStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "FAILED"
  | "COMPLETED"
  | (string & {});
export interface GetSecurityRequirementPackOutput {
  packId: string;
  name: string;
  description?: string;
  vendorName?: string;
  managementType: ManagementType;
  status: SecurityRequirementPackStatus;
  importStatus?: SecurityRequirementPackImportStatus;
  createdAt: Date;
  updatedAt: Date;
  kmsKeyId?: string;
}
export type SecurityRequirementArtifactName = string;
export type SecurityRequirementArtifactFormat =
  | "MD"
  | "PDF"
  | "TXT"
  | "DOCX"
  | "DOC"
  | (string & {});
export type SecurityRequirementDocumentContent = Uint8Array | redacted.Redacted<Uint8Array>;
export interface SecurityRequirementArtifact {
  name: string;
  format: SecurityRequirementArtifactFormat;
  content: Uint8Array | redacted.Redacted<Uint8Array>;
}
export type SecurityRequirementArtifactList = SecurityRequirementArtifact[];
export type ImportSource = { documents: SecurityRequirementArtifact[] };
export interface ImportSecurityRequirementsInput {
  packId: string;
  input: ImportSource;
}
export interface ImportSecurityRequirementsOutput {
  packId: string;
  importStatus: SecurityRequirementPackImportStatus;
}
export type ClientId = string;
export type ClientSecret = string | redacted.Redacted<string>;
export interface InitiateProviderRegistrationInput {
  provider: Provider;
  targetUrl?: string;
  organizationName?: string;
  clientId?: string;
  clientSecret?: string | redacted.Redacted<string>;
}
export type Location = string;
export interface InitiateProviderRegistrationOutput {
  redirectTo: string;
  csrfState: string;
}
export type MaxResults = number;
export type NextToken = string;
export interface ListActorMessagesInput {
  maxResults?: number;
  nextToken?: string;
  agentSpaceId: string;
  pentestId: string;
  actorIdentifier: string;
}
export type SensitiveMessageSender = string | redacted.Redacted<string>;
export type SensitiveMessageSubject = string | redacted.Redacted<string>;
export type SensitiveMessageBody = string | redacted.Redacted<string>;
export interface ActorMessage {
  sender?: string | redacted.Redacted<string>;
  subject?: string | redacted.Redacted<string>;
  body?: string | redacted.Redacted<string>;
  receivedAt?: Date;
}
export type ActorMessageList = ActorMessage[];
export interface ListActorMessagesOutput {
  messages?: ActorMessage[];
  nextToken?: string;
}
export interface ListAgentSpacesInput {
  nextToken?: string;
  maxResults?: number;
}
export interface AgentSpaceSummary {
  agentSpaceId: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export type AgentSpaceSummaryList = AgentSpaceSummary[];
export interface ListAgentSpacesOutput {
  agentSpaceSummaries?: AgentSpaceSummary[];
  nextToken?: string;
}
export interface ListApplicationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ApplicationSummary {
  applicationId: string;
  applicationName: string;
  domain: string;
  defaultKmsKeyId?: string;
}
export type ApplicationSummaryList = ApplicationSummary[];
export interface ListApplicationsResponse {
  applicationSummaries: ApplicationSummary[];
  nextToken?: string;
}
export interface ListArtifactsInput {
  agentSpaceId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ArtifactSummary {
  artifactId: string;
  fileName: string;
  artifactType: ArtifactType;
}
export type ArtifactSummaryList = ArtifactSummary[];
export interface ListArtifactsOutput {
  artifactSummaries: ArtifactSummary[];
  nextToken?: string;
}
export interface ListCodeReviewJobsForCodeReviewInput {
  maxResults?: number;
  codeReviewId: string;
  agentSpaceId: string;
  nextToken?: string;
}
export interface CodeReviewJobSummary {
  codeReviewJobId: string;
  codeReviewId: string;
  title?: string;
  status?: JobStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
export type CodeReviewJobSummaryList = CodeReviewJobSummary[];
export interface ListCodeReviewJobsForCodeReviewOutput {
  codeReviewJobSummaries?: CodeReviewJobSummary[];
  nextToken?: string;
}
export interface ListCodeReviewJobTasksInput {
  agentSpaceId: string;
  maxResults?: number;
  codeReviewJobId?: string;
  stepName?: StepName;
  categoryName?: string;
  nextToken?: string;
}
export interface CodeReviewJobTaskSummary {
  taskId: string;
  codeReviewId?: string;
  codeReviewJobId?: string;
  agentSpaceId?: string;
  title?: string;
  riskType?: RiskType;
  executionStatus?: TaskExecutionStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
export type CodeReviewJobTaskSummaryList = CodeReviewJobTaskSummary[];
export interface ListCodeReviewJobTasksOutput {
  codeReviewJobTaskSummaries?: CodeReviewJobTaskSummary[];
  nextToken?: string;
}
export interface ListCodeReviewsInput {
  maxResults?: number;
  nextToken?: string;
  agentSpaceId: string;
}
export interface CodeReviewSummary {
  codeReviewId: string;
  agentSpaceId: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export type CodeReviewSummaryList = CodeReviewSummary[];
export interface ListCodeReviewsOutput {
  codeReviewSummaries?: CodeReviewSummary[];
  nextToken?: string;
}
export interface ListDiscoveredEndpointsInput {
  maxResults?: number;
  pentestJobId: string;
  agentSpaceId: string;
  prefix?: string;
  nextToken?: string;
}
export interface DiscoveredEndpoint {
  uri: string;
  pentestJobId: string;
  taskId: string;
  agentSpaceId: string;
  evidence?: string;
  operation?: string;
  description?: string;
}
export type DiscoveredEndpointList = DiscoveredEndpoint[];
export interface ListDiscoveredEndpointsOutput {
  discoveredEndpoints?: DiscoveredEndpoint[];
  nextToken?: string;
}
export interface ListFindingsInput {
  maxResults?: number;
  pentestJobId?: string;
  codeReviewJobId?: string;
  agentSpaceId: string;
  nextToken?: string;
  riskType?: string;
  riskLevel?: RiskLevel;
  status?: FindingStatus;
  confidence?: ConfidenceLevel;
  name?: string;
}
export interface FindingSummary {
  findingId: string;
  agentSpaceId: string;
  pentestId?: string;
  pentestJobId?: string;
  codeReviewId?: string;
  codeReviewJobId?: string;
  name?: string;
  status?: FindingStatus;
  riskType?: string;
  riskLevel?: RiskLevel;
  confidence?: ConfidenceLevel;
  validationStatus?: ValidationStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
export type FindingSummaryList = FindingSummary[];
export interface ListFindingsOutput {
  findingsSummaries?: FindingSummary[];
  nextToken?: string;
}
export type ResourceType = "CODE_REPOSITORY" | "DOCUMENT" | (string & {});
export interface ListIntegratedResourcesInput {
  agentSpaceId: string;
  integrationId?: string;
  resourceType?: ResourceType;
  nextToken?: string;
  maxResults?: number;
}
export type ProviderResourceName = string;
export type ProviderResourceId = string;
export type GitHubOwner = string;
export type AccessType = "PRIVATE" | "PUBLIC" | (string & {});
export interface GitHubRepositoryMetadata {
  name: string;
  providerResourceId: string;
  owner: string;
  accessType?: AccessType;
}
export type GitLabNamespace = string;
export interface GitLabRepositoryMetadata {
  name: string;
  providerResourceId: string;
  namespace: string;
  accessType?: AccessType;
}
export interface BitbucketRepositoryMetadata {
  name: string;
  providerResourceId: string;
  workspace: string;
  accessType?: AccessType;
}
export interface ConfluenceDocumentMetadata {
  name: string;
  providerResourceId: string;
  spaceKey: string;
  pageId: string;
  title?: string;
  spaceTitle?: string;
}
export type AzureDevOpsOrganization = string;
export interface AzureDevOpsRepositoryMetadata {
  name: string;
  providerResourceId: string;
  organization: string;
  project?: string;
  projectId?: string;
  accessType?: AccessType;
}
export type IntegratedResourceMetadata =
  | {
      githubRepository: GitHubRepositoryMetadata;
      gitlabRepository?: never;
      bitbucketRepository?: never;
      confluenceDocument?: never;
      azureDevOpsRepository?: never;
    }
  | {
      githubRepository?: never;
      gitlabRepository: GitLabRepositoryMetadata;
      bitbucketRepository?: never;
      confluenceDocument?: never;
      azureDevOpsRepository?: never;
    }
  | {
      githubRepository?: never;
      gitlabRepository?: never;
      bitbucketRepository: BitbucketRepositoryMetadata;
      confluenceDocument?: never;
      azureDevOpsRepository?: never;
    }
  | {
      githubRepository?: never;
      gitlabRepository?: never;
      bitbucketRepository?: never;
      confluenceDocument: ConfluenceDocumentMetadata;
      azureDevOpsRepository?: never;
    }
  | {
      githubRepository?: never;
      gitlabRepository?: never;
      bitbucketRepository?: never;
      confluenceDocument?: never;
      azureDevOpsRepository: AzureDevOpsRepositoryMetadata;
    };
export type TriggerEvent =
  | "PULL_REQUEST_READY_FOR_REVIEW"
  | "PULL_REQUEST_DRAFT"
  | "PULL_REQUEST_LABEL_ADDED"
  | (string & {});
export type TriggerEventList = TriggerEvent[];
export type TriggerFilterType = "TARGET_BRANCH" | "LABEL" | (string & {});
export type TriggerRegexPattern = string;
export type TriggerRegexPatternList = string[];
export type TriggerFilterMatchMode = "INCLUDE" | "EXCLUDE" | (string & {});
export interface TriggerFilter {
  type: TriggerFilterType;
  patterns: string[];
  matchMode?: TriggerFilterMatchMode;
}
export type TriggerFilterList = TriggerFilter[];
export interface TriggerFilterGroup {
  events?: TriggerEvent[];
  filters?: TriggerFilter[];
}
export type TriggerFilterGroups = TriggerFilterGroup[];
export interface GitHubResourceCapabilities {
  triggerFilterGroups?: TriggerFilterGroup[];
  leaveComments?: boolean;
  remediateCode?: boolean;
}
export interface GitLabResourceCapabilities {
  triggerFilterGroups?: TriggerFilterGroup[];
  leaveComments?: boolean;
  remediateCode?: boolean;
}
export interface BitbucketResourceCapabilities {
  triggerFilterGroups?: TriggerFilterGroup[];
  leaveComments?: boolean;
  remediateCode?: boolean;
}
export interface ConfluenceResourceCapabilities {
  fetchDocument?: boolean;
  createDocument?: boolean;
  updateDocument?: boolean;
}
export interface AzureDevOpsResourceCapabilities {
  triggerFilterGroups?: TriggerFilterGroup[];
  leaveComments?: boolean;
  remediateCode?: boolean;
}
export type ProviderResourceCapabilities =
  | {
      github: GitHubResourceCapabilities;
      gitlab?: never;
      bitbucket?: never;
      confluence?: never;
      azureDevOps?: never;
    }
  | {
      github?: never;
      gitlab: GitLabResourceCapabilities;
      bitbucket?: never;
      confluence?: never;
      azureDevOps?: never;
    }
  | {
      github?: never;
      gitlab?: never;
      bitbucket: BitbucketResourceCapabilities;
      confluence?: never;
      azureDevOps?: never;
    }
  | {
      github?: never;
      gitlab?: never;
      bitbucket?: never;
      confluence: ConfluenceResourceCapabilities;
      azureDevOps?: never;
    }
  | {
      github?: never;
      gitlab?: never;
      bitbucket?: never;
      confluence?: never;
      azureDevOps: AzureDevOpsResourceCapabilities;
    };
export interface IntegratedResourceSummary {
  integrationId: string;
  resource: IntegratedResourceMetadata;
  capabilities?: ProviderResourceCapabilities;
}
export type IntegratedResourceSummaryList = IntegratedResourceSummary[];
export interface ListIntegratedResourcesOutput {
  integratedResourceSummaries: IntegratedResourceSummary[];
  nextToken?: string;
}
export type IntegrationFilter =
  | { provider: Provider; providerType?: never }
  | { provider?: never; providerType: ProviderType };
export interface ListIntegrationsInput {
  filter?: IntegrationFilter;
  nextToken?: string;
  maxResults?: number;
}
export interface IntegrationSummary {
  integrationId: string;
  installationId: string;
  provider: Provider;
  providerType: ProviderType;
  displayName: string;
  targetUrl?: string;
  webhookUrl?: string;
  privateConnectionName?: string;
}
export type IntegrationSummaryList = IntegrationSummary[];
export interface ListIntegrationsOutput {
  integrationSummaries: IntegrationSummary[];
  nextToken?: string;
}
export type MembershipTypeFilter = "USER" | "ALL" | (string & {});
export interface ListMembershipsRequest {
  applicationId: string;
  agentSpaceId: string;
  memberType?: MembershipTypeFilter;
  maxResults?: number;
  nextToken?: string;
}
export type SensitiveEmail = string;
export interface UserMetadata {
  username: string;
  email: string;
}
export type MemberMetadata = { user: UserMetadata };
export interface MembershipSummary {
  membershipId: string;
  applicationId: string;
  agentSpaceId: string;
  memberType: MembershipType;
  config?: MembershipConfig;
  metadata?: MemberMetadata;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}
export type MembershipSummaryList = MembershipSummary[];
export interface ListMembershipsResponse {
  membershipSummaries: MembershipSummary[];
  nextToken?: string;
}
export interface ListPentestJobsForPentestInput {
  maxResults?: number;
  pentestId: string;
  agentSpaceId: string;
  nextToken?: string;
  jobType?: JobType;
}
export interface PentestJobSummary {
  pentestJobId: string;
  pentestId: string;
  title?: string;
  status?: JobStatus;
  createdAt?: Date;
  updatedAt?: Date;
  jobType?: JobType;
  reportUrl?: string;
}
export type PentestJobSummaryList = PentestJobSummary[];
export interface ListPentestJobsForPentestOutput {
  pentestJobSummaries?: PentestJobSummary[];
  nextToken?: string;
}
export interface ListPentestJobTasksInput {
  agentSpaceId: string;
  maxResults?: number;
  pentestJobId?: string;
  stepName?: StepName;
  categoryName?: string;
  nextToken?: string;
}
export interface TaskSummary {
  taskId: string;
  pentestId?: string;
  pentestJobId?: string;
  agentSpaceId?: string;
  title?: string;
  riskType?: RiskType;
  executionStatus?: TaskExecutionStatus;
  taskHours?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
export type TaskSummaryList = TaskSummary[];
export interface ListPentestJobTasksOutput {
  taskSummaries?: TaskSummary[];
  nextToken?: string;
}
export interface ListPentestsInput {
  maxResults?: number;
  nextToken?: string;
  agentSpaceId: string;
}
export interface PentestSummary {
  pentestId: string;
  agentSpaceId: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export type PentestSummaryList = PentestSummary[];
export interface ListPentestsOutput {
  pentestSummaries?: PentestSummary[];
  nextToken?: string;
}
export interface ListPrivateConnectionsInput {
  maxResults?: number;
  nextToken?: string;
}
export interface PrivateConnectionSummary {
  name: string;
  type: PrivateConnectionType;
  status: PrivateConnectionStatus;
  resourceGatewayId?: string;
  hostAddress?: string;
  vpcId?: string;
  resourceConfigurationId?: string;
  certificateExpiryTime?: Date;
  dnsResolution?: ResourceConfigDnsResolution;
  failureMessage?: string;
  tags?: { [key: string]: string | undefined };
}
export type PrivateConnectionList = PrivateConnectionSummary[];
export interface ListPrivateConnectionsOutput {
  privateConnections: PrivateConnectionSummary[];
  nextToken?: string;
}
export interface ListSecurityRequirementPackFilter {
  managementType?: ManagementType;
  status?: SecurityRequirementPackStatus;
}
export interface ListSecurityRequirementPacksInput {
  filter?: ListSecurityRequirementPackFilter;
  nextToken?: string;
  maxResults?: number;
}
export interface SecurityRequirementPackSummary {
  packId: string;
  name: string;
  description?: string;
  vendorName?: string;
  managementType: ManagementType;
  status: SecurityRequirementPackStatus;
  createdAt: Date;
  updatedAt: Date;
}
export type SecurityRequirementPackSummaryList = SecurityRequirementPackSummary[];
export interface ListSecurityRequirementPacksOutput {
  securityRequirementPackSummaries: SecurityRequirementPackSummary[];
  nextToken?: string;
}
export interface ListSecurityRequirementsInput {
  packId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface SecurityRequirementSummary {
  packId: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
export type SecurityRequirementSummaryList = SecurityRequirementSummary[];
export interface ListSecurityRequirementsOutput {
  securityRequirementSummaries: SecurityRequirementSummary[];
  nextToken?: string;
}
export type ResourceArn = string;
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags?: { [key: string]: string | undefined };
}
export interface ListTargetDomainsInput {
  nextToken?: string;
  maxResults?: number;
}
export interface TargetDomainSummary {
  targetDomainId: string;
  domainName: string;
  verificationStatus?: TargetDomainStatus;
}
export type TargetDomainSummaryList = TargetDomainSummary[];
export interface ListTargetDomainsOutput {
  targetDomainSummaries?: TargetDomainSummary[];
  nextToken?: string;
}
export interface ListThreatModelJobsInput {
  maxResults?: number;
  threatModelId: string;
  agentSpaceId: string;
  nextToken?: string;
}
export interface ThreatModelJobSummary {
  threatModelJobId: string;
  threatModelId: string;
  agentSpaceId?: string;
  title?: string;
  status?: JobStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
export type ThreatModelJobSummaryList = ThreatModelJobSummary[];
export interface ListThreatModelJobsOutput {
  threatModelJobSummaries?: ThreatModelJobSummary[];
  nextToken?: string;
}
export interface ListThreatModelJobTasksInput {
  agentSpaceId: string;
  maxResults?: number;
  threatModelJobId: string;
  nextToken?: string;
}
export interface ThreatModelJobTaskSummary {
  taskId: string;
  threatModelId?: string;
  threatModelJobId?: string;
  agentSpaceId?: string;
  title?: string;
  executionStatus?: TaskExecutionStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
export type ThreatModelJobTaskSummaryList = ThreatModelJobTaskSummary[];
export interface ListThreatModelJobTasksOutput {
  threatModelJobTaskSummaries?: ThreatModelJobTaskSummary[];
  nextToken?: string;
}
export interface ListThreatModelsInput {
  maxResults?: number;
  nextToken?: string;
  agentSpaceId: string;
}
export interface ThreatModelSummary {
  threatModelId: string;
  agentSpaceId: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export type ThreatModelSummaryList = ThreatModelSummary[];
export interface ListThreatModelsOutput {
  threatModelSummaries?: ThreatModelSummary[];
  nextToken?: string;
}
export interface ListThreatsInput {
  threatJobId: string;
  agentSpaceId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ThreatSummary {
  threatId?: string;
  threatJobId?: string;
  title?: string;
  statement?: string;
  severity?: ThreatSeverity;
  status?: ThreatStatus;
  stride?: StrideCategory[];
  createdBy?: ThreatActor;
  updatedBy?: ThreatActor;
  createdAt?: Date;
  updatedAt?: Date;
}
export type ThreatSummaryList = ThreatSummary[];
export interface ListThreatsOutput {
  threats?: ThreatSummary[];
  nextToken?: string;
}
export interface StartCodeRemediationInput {
  agentSpaceId: string;
  pentestJobId?: string;
  codeReviewJobId?: string;
  findingIds: string[];
}
export interface StartCodeRemediationOutput {}
export type DiffSource = { s3Uri: string };
export interface StartCodeReviewJobInput {
  agentSpaceId: string;
  codeReviewId: string;
  diffSource?: DiffSource;
}
export interface StartCodeReviewJobOutput {
  title?: string;
  status?: JobStatus;
  createdAt?: Date;
  updatedAt?: Date;
  codeReviewId: string;
  codeReviewJobId: string;
  agentSpaceId?: string;
}
export interface StartPentestJobInput {
  agentSpaceId: string;
  pentestId: string;
  jobType?: JobType;
  selectedFindingIds?: string[];
  scopeChanges?: ScopeChange[];
}
export interface StartPentestJobOutput {
  title?: string;
  status?: JobStatus;
  createdAt?: Date;
  updatedAt?: Date;
  pentestId?: string;
  pentestJobId?: string;
  agentSpaceId?: string;
}
export interface StartThreatModelJobInput {
  agentSpaceId: string;
  threatModelId: string;
}
export interface StartThreatModelJobOutput {
  title?: string;
  status?: JobStatus;
  createdAt?: Date;
  updatedAt?: Date;
  threatModelId?: string;
  threatModelJobId: string;
  agentSpaceId?: string;
}
export interface StopCodeReviewJobInput {
  agentSpaceId: string;
  codeReviewJobId: string;
}
export interface StopCodeReviewJobOutput {}
export interface StopPentestJobInput {
  agentSpaceId: string;
  pentestJobId: string;
}
export interface StopPentestJobOutput {}
export interface StopThreatModelJobInput {
  agentSpaceId: string;
  threatModelJobId: string;
}
export interface StopThreatModelJobOutput {}
export interface TagResourceInput {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceOutput {}
export type TagKeyList = string[];
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceOutput {}
export interface UpdateAgentSpaceInput {
  agentSpaceId: string;
  name?: string;
  description?: string;
  awsResources?: AWSResources;
  targetDomainIds?: string[];
  codeReviewSettings?: CodeReviewSettings;
}
export interface UpdateAgentSpaceOutput {
  agentSpaceId: string;
  name: string;
  description?: string;
  awsResources?: AWSResources;
  targetDomainIds?: string[];
  codeReviewSettings?: CodeReviewSettings;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface UpdateApplicationRequest {
  applicationId: string;
  roleArn?: string;
  defaultKmsKeyId?: string;
}
export interface UpdateApplicationResponse {
  applicationId: string;
}
export interface UpdateCodeReviewInput {
  codeReviewId: string;
  agentSpaceId: string;
  title?: string;
  assets?: Assets;
  serviceRole?: string;
  logConfig?: CloudWatchLog;
  codeRemediationStrategy?: CodeRemediationStrategy;
  validationMode?: ValidationMode;
  maxTaskHours?: number;
  reportDestination?: ReportDestination;
  reportFilters?: ReportFilters;
}
export interface UpdateCodeReviewOutput {
  codeReviewId: string;
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
  assets?: Assets;
  serviceRole?: string;
  logConfig?: CloudWatchLog;
  agentSpaceId?: string;
  codeRemediationStrategy?: CodeRemediationStrategy;
  validationMode?: ValidationMode;
  maxTaskHours?: number;
  reportDestination?: ReportDestination;
  reportFilters?: ReportFilters;
}
export interface UpdateFindingInput {
  findingId: string;
  agentSpaceId: string;
  name?: string;
  description?: string;
  riskType?: string;
  riskLevel?: RiskLevel;
  riskScore?: string;
  attackScript?: string;
  reasoning?: string;
  status?: FindingStatus;
  customerNote?: string;
}
export interface UpdateFindingOutput {}
export interface GitHubRepositoryResource {
  name: string;
  owner: string;
}
export interface GitLabRepositoryResource {
  name: string;
  namespace: string;
}
export interface BitbucketRepositoryResource {
  name: string;
  workspace: string;
}
export interface ConfluenceDocumentResource {
  name: string;
  spaceKey: string;
  pageId: string;
  title?: string;
  spaceTitle?: string;
}
export interface AzureDevOpsRepositoryResource {
  name: string;
  organization: string;
  project?: string;
}
export type IntegratedResource =
  | {
      githubRepository: GitHubRepositoryResource;
      gitlabRepository?: never;
      bitbucketRepository?: never;
      confluenceDocument?: never;
      azureDevOpsRepository?: never;
    }
  | {
      githubRepository?: never;
      gitlabRepository: GitLabRepositoryResource;
      bitbucketRepository?: never;
      confluenceDocument?: never;
      azureDevOpsRepository?: never;
    }
  | {
      githubRepository?: never;
      gitlabRepository?: never;
      bitbucketRepository: BitbucketRepositoryResource;
      confluenceDocument?: never;
      azureDevOpsRepository?: never;
    }
  | {
      githubRepository?: never;
      gitlabRepository?: never;
      bitbucketRepository?: never;
      confluenceDocument: ConfluenceDocumentResource;
      azureDevOpsRepository?: never;
    }
  | {
      githubRepository?: never;
      gitlabRepository?: never;
      bitbucketRepository?: never;
      confluenceDocument?: never;
      azureDevOpsRepository: AzureDevOpsRepositoryResource;
    };
export interface IntegratedResourceInputItem {
  resource: IntegratedResource;
  capabilities?: ProviderResourceCapabilities;
}
export type IntegratedResourceInputItemList = IntegratedResourceInputItem[];
export interface UpdateIntegratedResourcesInput {
  agentSpaceId: string;
  integrationId: string;
  items: IntegratedResourceInputItem[];
}
export interface UpdateIntegratedResourcesOutput {}
export type WebhookAction = "CREATE_IF_ABSENT" | "ROTATE" | (string & {});
export interface UpdateIntegrationInput {
  integrationId: string;
  webhookAction: WebhookAction;
}
export type WebhookSecret = string | redacted.Redacted<string>;
export interface UpdateIntegrationOutput {
  integrationId: string;
  webhookUrl?: string;
  secret?: string | redacted.Redacted<string>;
}
export interface UpdatePentestInput {
  pentestId: string;
  agentSpaceId: string;
  title?: string;
  assets?: Assets;
  excludeRiskTypes?: RiskType[];
  serviceRole?: string;
  logConfig?: CloudWatchLog;
  vpcConfig?: VpcConfig;
  networkTrafficConfig?: NetworkTrafficConfig;
  codeRemediationStrategy?: CodeRemediationStrategy;
  disableManagedSkills?: SkillType[];
  maxTaskHours?: number;
  reportDestination?: ReportDestination;
  reportFilters?: ReportFilters;
  cicdConfiguration?: CiCdConfiguration;
}
export interface UpdatePentestOutput {
  pentestId?: string;
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
  assets?: Assets;
  excludeRiskTypes?: RiskType[];
  serviceRole?: string;
  logConfig?: CloudWatchLog;
  agentSpaceId?: string;
  reportDestination?: ReportDestination;
  reportFilters?: ReportFilters;
  cicdConfiguration?: CiCdConfiguration;
}
export interface UpdatePrivateConnectionCertificateInput {
  privateConnectionName: string;
  certificate: string | redacted.Redacted<string>;
}
export interface UpdatePrivateConnectionCertificateOutput {
  name: string;
  type: PrivateConnectionType;
  status: PrivateConnectionStatus;
  resourceGatewayId?: string;
  hostAddress?: string;
  vpcId?: string;
  resourceConfigurationId?: string;
  certificateExpiryTime?: Date;
  dnsResolution?: ResourceConfigDnsResolution;
  failureMessage?: string;
  tags?: { [key: string]: string | undefined };
}
export interface UpdateSecurityRequirementPackInput {
  packId: string;
  name?: string;
  description?: string;
  status?: SecurityRequirementPackStatus;
}
export interface UpdateSecurityRequirementPackOutput {
  packId: string;
  name?: string;
  description?: string;
  status?: SecurityRequirementPackStatus;
}
export interface UpdateTargetDomainInput {
  targetDomainId: string;
  verificationMethod: DomainVerificationMethod;
}
export interface UpdateTargetDomainOutput {
  targetDomainId: string;
  domainName: string;
  verificationStatus: TargetDomainStatus;
  verificationStatusReason?: string;
  verificationDetails?: VerificationDetails;
  createdAt?: Date;
  verifiedAt?: Date;
}
export interface UpdateThreatInput {
  threatId: string;
  agentSpaceId: string;
  title?: string;
  status?: ThreatStatus;
  comments?: string;
  statement?: string;
  severity?: ThreatSeverity;
  threatSource?: string;
  prerequisites?: string;
  threatAction?: string;
  threatImpact?: string;
  impactedGoal?: string[];
  impactedAssets?: string[];
  anchor?: ThreatAnchorShape;
  evidence?: ThreatEvidenceShape[];
  recommendation?: string;
}
export interface UpdateThreatOutput {
  threatId: string;
  threatJobId: string;
  title?: string;
  statement?: string;
  severity?: ThreatSeverity;
  status?: ThreatStatus;
  comments?: string;
  stride?: StrideCategory[];
  threatSource?: string;
  prerequisites?: string;
  threatAction?: string;
  threatImpact?: string;
  impactedGoal?: string[];
  impactedAssets?: string[];
  anchor?: ThreatAnchorShape;
  evidence?: ThreatEvidenceShape[];
  recommendation?: string;
  createdBy?: ThreatActor;
  updatedBy?: ThreatActor;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface UpdateThreatModelInput {
  threatModelId: string;
  agentSpaceId: string;
  title?: string;
  description?: string;
  assets?: Assets;
  scopeDocs?: DocumentInfo[];
  serviceRole?: string;
  logConfig?: CloudWatchLog;
  reportDestination?: ReportDestination;
}
export interface UpdateThreatModelOutput {
  threatModelId: string;
  title?: string;
  agentSpaceId?: string;
  description?: string;
  assets?: Assets;
  scopeDocs?: DocumentInfo[];
  serviceRole?: string;
  logConfig?: CloudWatchLog;
  createdAt?: Date;
  updatedAt?: Date;
  reportDestination?: ReportDestination;
}
export interface VerifyTargetDomainInput {
  targetDomainId: string;
}
export interface VerifyTargetDomainOutput {
  targetDomainId?: string;
  domainName?: string;
  createdAt?: Date;
  updatedAt?: Date;
  verifiedAt?: Date;
  status?: TargetDomainStatus;
  verificationStatusReason?: string;
}
export interface ValidationExceptionField {
  path: string;
  message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type AddArtifactError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Uploads an artifact to an agent space. Artifacts provide additional context for security testing, such as architecture diagrams, API specifications, or configuration files.
 */
export const addArtifact: API.OperationMethod<
  AddArtifactInput,
  AddArtifactOutput,
  AddArtifactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<AddArtifactInput>,
  output: __S(1, __c0, 1) as any as S.Schema<AddArtifactOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddArtifact",
}));

export type BatchCreateSecurityRequirementsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Batch creates security requirements in a customer managed pack.
 */
export const batchCreateSecurityRequirements: API.OperationMethod<
  BatchCreateSecurityRequirementsInput,
  BatchCreateSecurityRequirementsOutput,
  BatchCreateSecurityRequirementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4, __c0, 4) as any as S.Schema<BatchCreateSecurityRequirementsInput>,
  output: __S(9, __c1, 1) as any as S.Schema<BatchCreateSecurityRequirementsOutput>,
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
  operationName: "BatchCreateSecurityRequirements",
}));

export type BatchDeleteCodeReviewsError = CommonErrors;
/**
 * Deletes one or more code reviews from an agent space.
 */
export const batchDeleteCodeReviews: API.OperationMethod<
  BatchDeleteCodeReviewsInput,
  BatchDeleteCodeReviewsOutput,
  BatchDeleteCodeReviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11, __c1, 3) as any as S.Schema<BatchDeleteCodeReviewsInput>,
  output: __S(14, __c1, 6) as any as S.Schema<BatchDeleteCodeReviewsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteCodeReviews",
}));

export type BatchDeletePentestsError = CommonErrors;
/**
 * Deletes one or more pentests from an agent space.
 */
export const batchDeletePentests: API.OperationMethod<
  BatchDeletePentestsInput,
  BatchDeletePentestsOutput,
  BatchDeletePentestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15, __c1, 7) as any as S.Schema<BatchDeletePentestsInput>,
  output: __S(47, __c5, 7) as any as S.Schema<BatchDeletePentestsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeletePentests",
}));

export type BatchDeleteSecurityRequirementsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Batch deletes security requirements from a customer managed pack.
 */
export const batchDeleteSecurityRequirements: API.OperationMethod<
  BatchDeleteSecurityRequirementsInput,
  BatchDeleteSecurityRequirementsOutput,
  BatchDeleteSecurityRequirementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48, __c6, 0) as any as S.Schema<BatchDeleteSecurityRequirementsInput>,
  output: __S(49, __c6, 1) as any as S.Schema<BatchDeleteSecurityRequirementsOutput>,
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
  operationName: "BatchDeleteSecurityRequirements",
}));

export type BatchDeleteThreatModelsError = CommonErrors;
/**
 * Deletes one or more threat models from an agent space.
 */
export const batchDeleteThreatModels: API.OperationMethod<
  BatchDeleteThreatModelsInput,
  BatchDeleteThreatModelsOutput,
  BatchDeleteThreatModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50, __c6, 2) as any as S.Schema<BatchDeleteThreatModelsInput>,
  output: __S(53, __c6, 5) as any as S.Schema<BatchDeleteThreatModelsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteThreatModels",
}));

export type BatchGetAgentSpacesError = CommonErrors;
/**
 * Retrieves information about one or more agent spaces.
 */
export const batchGetAgentSpaces: API.OperationMethod<
  BatchGetAgentSpacesInput,
  BatchGetAgentSpacesOutput,
  BatchGetAgentSpacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54, __c6, 6) as any as S.Schema<BatchGetAgentSpacesInput>,
  output: __S(60, __c7, 4) as any as S.Schema<BatchGetAgentSpacesOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetAgentSpaces",
}));

export type BatchGetArtifactMetadataError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves metadata for one or more artifacts in an agent space.
 */
export const batchGetArtifactMetadata: API.OperationMethod<
  BatchGetArtifactMetadataInput,
  BatchGetArtifactMetadataOutput,
  BatchGetArtifactMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61, __c7, 5) as any as S.Schema<BatchGetArtifactMetadataInput>,
  output: __S(64, __c8, 0) as any as S.Schema<BatchGetArtifactMetadataOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetArtifactMetadata",
}));

export type BatchGetCodeReviewJobsError = CommonErrors;
/**
 * Retrieves information about one or more code review jobs in an agent space.
 */
export const batchGetCodeReviewJobs: API.OperationMethod<
  BatchGetCodeReviewJobsInput,
  BatchGetCodeReviewJobsOutput,
  BatchGetCodeReviewJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<BatchGetCodeReviewJobsInput>,
  output: __S(73, __c9, 1) as any as S.Schema<BatchGetCodeReviewJobsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetCodeReviewJobs",
}));

export type BatchGetCodeReviewJobTasksError = CommonErrors;
/**
 * Retrieves information about one or more tasks within a code review job.
 */
export const batchGetCodeReviewJobTasks: API.OperationMethod<
  BatchGetCodeReviewJobTasksInput,
  BatchGetCodeReviewJobTasksOutput,
  BatchGetCodeReviewJobTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74, __c9, 2) as any as S.Schema<BatchGetCodeReviewJobTasksInput>,
  output: __S(80, __c10, 0) as any as S.Schema<BatchGetCodeReviewJobTasksOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetCodeReviewJobTasks",
}));

export type BatchGetCodeReviewsError = CommonErrors;
/**
 * Retrieves information about one or more code reviews in an agent space.
 */
export const batchGetCodeReviews: API.OperationMethod<
  BatchGetCodeReviewsInput,
  BatchGetCodeReviewsOutput,
  BatchGetCodeReviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81, __c10, 1) as any as S.Schema<BatchGetCodeReviewsInput>,
  output: __S(84, __c10, 4) as any as S.Schema<BatchGetCodeReviewsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetCodeReviews",
}));

export type BatchGetFindingsError = CommonErrors;
/**
 * Retrieves information about one or more security findings in an agent space.
 */
export const batchGetFindings: API.OperationMethod<
  BatchGetFindingsInput,
  BatchGetFindingsOutput,
  BatchGetFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(85, __c10, 5) as any as S.Schema<BatchGetFindingsInput>,
  output: __S(94, __c11, 6) as any as S.Schema<BatchGetFindingsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetFindings",
}));

export type BatchGetPentestJobsError = CommonErrors;
/**
 * Retrieves information about one or more pentest jobs in an agent space.
 */
export const batchGetPentestJobs: API.OperationMethod<
  BatchGetPentestJobsInput,
  BatchGetPentestJobsOutput,
  BatchGetPentestJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95, __c11, 7) as any as S.Schema<BatchGetPentestJobsInput>,
  output: __S(101, __c12, 5) as any as S.Schema<BatchGetPentestJobsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetPentestJobs",
}));

export type BatchGetPentestJobTasksError = CommonErrors;
/**
 * Retrieves information about one or more tasks within a pentest job.
 */
export const batchGetPentestJobTasks: API.OperationMethod<
  BatchGetPentestJobTasksInput,
  BatchGetPentestJobTasksOutput,
  BatchGetPentestJobTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(102, __c12, 6) as any as S.Schema<BatchGetPentestJobTasksInput>,
  output: __S(105, __c13, 1) as any as S.Schema<BatchGetPentestJobTasksOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetPentestJobTasks",
}));

export type BatchGetPentestsError = CommonErrors;
/**
 * Retrieves information about one or more pentests in an agent space.
 */
export const batchGetPentests: API.OperationMethod<
  BatchGetPentestsInput,
  BatchGetPentestsOutput,
  BatchGetPentestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106, __c13, 2) as any as S.Schema<BatchGetPentestsInput>,
  output: __S(107, __c13, 3) as any as S.Schema<BatchGetPentestsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetPentests",
}));

export type BatchGetSecurityRequirementsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Batch retrieves security requirements from a pack.
 */
export const batchGetSecurityRequirements: API.OperationMethod<
  BatchGetSecurityRequirementsInput,
  BatchGetSecurityRequirementsOutput,
  BatchGetSecurityRequirementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(108, __c13, 4) as any as S.Schema<BatchGetSecurityRequirementsInput>,
  output: __S(9, __c1, 1) as any as S.Schema<BatchGetSecurityRequirementsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetSecurityRequirements",
}));

export type BatchGetTargetDomainsError = CommonErrors;
/**
 * Retrieves information about one or more target domains.
 */
export const batchGetTargetDomains: API.OperationMethod<
  BatchGetTargetDomainsInput,
  BatchGetTargetDomainsOutput,
  BatchGetTargetDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109, __c13, 5) as any as S.Schema<BatchGetTargetDomainsInput>,
  output: __S(115, __c14, 3) as any as S.Schema<BatchGetTargetDomainsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetTargetDomains",
}));

export type BatchGetThreatModelJobsError = CommonErrors;
/**
 * Retrieves information about one or more threat model jobs in an agent space.
 */
export const batchGetThreatModelJobs: API.OperationMethod<
  BatchGetThreatModelJobsInput,
  BatchGetThreatModelJobsOutput,
  BatchGetThreatModelJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(116, __c14, 4) as any as S.Schema<BatchGetThreatModelJobsInput>,
  output: __S(119, __c14, 7) as any as S.Schema<BatchGetThreatModelJobsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetThreatModelJobs",
}));

export type BatchGetThreatModelJobTasksError = CommonErrors;
/**
 * Retrieves information about one or more tasks within a threat model job.
 */
export const batchGetThreatModelJobTasks: API.OperationMethod<
  BatchGetThreatModelJobTasksInput,
  BatchGetThreatModelJobTasksOutput,
  BatchGetThreatModelJobTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120, __c15, 0) as any as S.Schema<BatchGetThreatModelJobTasksInput>,
  output: __S(123, __c15, 3) as any as S.Schema<BatchGetThreatModelJobTasksOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetThreatModelJobTasks",
}));

export type BatchGetThreatModelsError = CommonErrors;
/**
 * Retrieves information about one or more threat models in an agent space.
 */
export const batchGetThreatModels: API.OperationMethod<
  BatchGetThreatModelsInput,
  BatchGetThreatModelsOutput,
  BatchGetThreatModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124, __c15, 4) as any as S.Schema<BatchGetThreatModelsInput>,
  output: __S(127, __c15, 7) as any as S.Schema<BatchGetThreatModelsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetThreatModels",
}));

export type BatchGetThreatsError = CommonErrors;
/**
 * Retrieves information about one or more threats.
 */
export const batchGetThreats: API.OperationMethod<
  BatchGetThreatsInput,
  BatchGetThreatsOutput,
  BatchGetThreatsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(128, __c16, 0) as any as S.Schema<BatchGetThreatsInput>,
  output: __S(134, __c16, 6) as any as S.Schema<BatchGetThreatsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetThreats",
}));

export type BatchUpdateSecurityRequirementsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Batch updates security requirements within a customer managed pack.
 */
export const batchUpdateSecurityRequirements: API.OperationMethod<
  BatchUpdateSecurityRequirementsInput,
  BatchUpdateSecurityRequirementsOutput,
  BatchUpdateSecurityRequirementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(137, __c17, 1) as any as S.Schema<BatchUpdateSecurityRequirementsInput>,
  output: __S(138, __c17, 2) as any as S.Schema<BatchUpdateSecurityRequirementsOutput>,
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
  operationName: "BatchUpdateSecurityRequirements",
}));

export type CreateAgentSpaceError = CommonErrors;
/**
 * Creates a new agent space. An agent space is a dedicated workspace for securing a specific application.
 */
export const createAgentSpace: API.OperationMethod<
  CreateAgentSpaceInput,
  CreateAgentSpaceOutput,
  CreateAgentSpaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(140, __c17, 4) as any as S.Schema<CreateAgentSpaceInput>,
  output: __S(58, __c7, 2) as any as S.Schema<CreateAgentSpaceOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAgentSpace",
}));

export type CreateApplicationError = CommonErrors;
/**
 * Creates a new application. An application is the top-level organizational unit that supports IAM Identity Center integration.
 */
export const createApplication: API.OperationMethod<
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(141, __c17, 5) as any as S.Schema<CreateApplicationRequest>,
  output: __S(142, __c17, 6) as any as S.Schema<CreateApplicationResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplication",
}));

export type CreateCodeReviewError = CommonErrors;
/**
 * Creates a new code review configuration in an agent space. A code review defines the parameters for automated security-focused code analysis.
 */
export const createCodeReview: API.OperationMethod<
  CreateCodeReviewInput,
  CreateCodeReviewOutput,
  CreateCodeReviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(143, __c17, 7) as any as S.Schema<CreateCodeReviewInput>,
  output: __S(144, __c18, 0) as any as S.Schema<CreateCodeReviewOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCodeReview",
}));

export type CreateIntegrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new integration with a third-party provider, such as GitHub, for code review and remediation.
 */
export const createIntegration: API.OperationMethod<
  CreateIntegrationInput,
  CreateIntegrationOutput,
  CreateIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(152, __c19, 0) as any as S.Schema<CreateIntegrationInput>,
  output: __S(153, __c19, 1) as any as S.Schema<CreateIntegrationOutput>,
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
  operationName: "CreateIntegration",
}));

export type CreateMembershipError = CommonErrors;
/**
 * Creates a new membership, granting a user access to an agent space within an application.
 */
export const createMembership: API.OperationMethod<
  CreateMembershipRequest,
  CreateMembershipResponse,
  CreateMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(156, __c19, 4) as any as S.Schema<CreateMembershipRequest>,
  output: __S(157, __c19, 5) as any as S.Schema<CreateMembershipResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMembership",
}));

export type CreatePentestError = CommonErrors;
/**
 * Creates a new pentest configuration in an agent space. A pentest defines the security test parameters, including target assets, risk type exclusions, and logging configuration.
 */
export const createPentest: API.OperationMethod<
  CreatePentestInput,
  CreatePentestOutput,
  CreatePentestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(158, __c19, 6) as any as S.Schema<CreatePentestInput>,
  output: __S(159, __c19, 7) as any as S.Schema<CreatePentestOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePentest",
}));

export type CreatePrivateConnectionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a private connection for reaching a self-hosted provider instance over private networking using Amazon VPC Lattice.
 */
export const createPrivateConnection: API.OperationMethod<
  CreatePrivateConnectionInput,
  CreatePrivateConnectionOutput,
  CreatePrivateConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(163, __c20, 3) as any as S.Schema<CreatePrivateConnectionInput>,
  output: __S(164, __c20, 4) as any as S.Schema<CreatePrivateConnectionOutput>,
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
  operationName: "CreatePrivateConnection",
}));

export type CreateSecurityRequirementPackError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a customer managed security requirement pack.
 */
export const createSecurityRequirementPack: API.OperationMethod<
  CreateSecurityRequirementPackInput,
  CreateSecurityRequirementPackOutput,
  CreateSecurityRequirementPackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(165, __c20, 5) as any as S.Schema<CreateSecurityRequirementPackInput>,
  output: __S(166, __c20, 6) as any as S.Schema<CreateSecurityRequirementPackOutput>,
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
  operationName: "CreateSecurityRequirementPack",
}));

export type CreateTargetDomainError = CommonErrors;
/**
 * Creates a new target domain for penetration testing. A target domain is a web domain that must be registered and verified before it can be tested.
 */
export const createTargetDomain: API.OperationMethod<
  CreateTargetDomainInput,
  CreateTargetDomainOutput,
  CreateTargetDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(167, __c20, 7) as any as S.Schema<CreateTargetDomainInput>,
  output: __S(168, __c21, 0) as any as S.Schema<CreateTargetDomainOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTargetDomain",
}));

export type CreateThreatError = CommonErrors;
/**
 * Creates a new threat under a threat model job.
 */
export const createThreat: API.OperationMethod<
  CreateThreatInput,
  CreateThreatOutput,
  CreateThreatError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(169, __c21, 1) as any as S.Schema<CreateThreatInput>,
  output: __S(170, __c21, 2) as any as S.Schema<CreateThreatOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateThreat",
}));

export type CreateThreatModelError = CommonErrors;
/**
 * Creates a new threat model configuration in an agent space. A threat model defines the parameters for automated threat analysis.
 */
export const createThreatModel: API.OperationMethod<
  CreateThreatModelInput,
  CreateThreatModelOutput,
  CreateThreatModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(171, __c21, 3) as any as S.Schema<CreateThreatModelInput>,
  output: __S(172, __c21, 4) as any as S.Schema<CreateThreatModelOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateThreatModel",
}));

export type DeleteAgentSpaceError = CommonErrors;
/**
 * Deletes an agent space and all of its associated resources, including pentests, findings, and artifacts.
 */
export const deleteAgentSpace: API.OperationMethod<
  DeleteAgentSpaceInput,
  DeleteAgentSpaceOutput,
  DeleteAgentSpaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(173, __c21, 5) as any as S.Schema<DeleteAgentSpaceInput>,
  output: __S(174, __c21, 6) as any as S.Schema<DeleteAgentSpaceOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAgentSpace",
}));

export type DeleteApplicationError = CommonErrors;
/**
 * Deletes an application and its associated configuration, including IAM Identity Center settings.
 */
export const deleteApplication: API.OperationMethod<
  DeleteApplicationRequest,
  DeleteApplicationResponse,
  DeleteApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(175, __c21, 7) as any as S.Schema<DeleteApplicationRequest>,
  output: __S(157, __c19, 5) as any as S.Schema<DeleteApplicationResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplication",
}));

export type DeleteArtifactError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an artifact from an agent space.
 */
export const deleteArtifact: API.OperationMethod<
  DeleteArtifactInput,
  DeleteArtifactOutput,
  DeleteArtifactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(176, __c22, 0) as any as S.Schema<DeleteArtifactInput>,
  output: __S(157, __c19, 5) as any as S.Schema<DeleteArtifactOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteArtifact",
}));

export type DeleteIntegrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an integration with a third-party provider.
 */
export const deleteIntegration: API.OperationMethod<
  DeleteIntegrationInput,
  DeleteIntegrationOutput,
  DeleteIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(177, __c22, 1) as any as S.Schema<DeleteIntegrationInput>,
  output: __S(157, __c19, 5) as any as S.Schema<DeleteIntegrationOutput>,
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
  operationName: "DeleteIntegration",
}));

export type DeleteMembershipError = CommonErrors;
/**
 * Deletes a membership, revoking a user's access to an agent space.
 */
export const deleteMembership: API.OperationMethod<
  DeleteMembershipRequest,
  DeleteMembershipResponse,
  DeleteMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(178, __c22, 2) as any as S.Schema<DeleteMembershipRequest>,
  output: __S(157, __c19, 5) as any as S.Schema<DeleteMembershipResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMembership",
}));

export type DeletePrivateConnectionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a private connection.
 */
export const deletePrivateConnection: API.OperationMethod<
  DeletePrivateConnectionInput,
  DeletePrivateConnectionOutput,
  DeletePrivateConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(179, __c22, 3) as any as S.Schema<DeletePrivateConnectionInput>,
  output: __S(164, __c20, 4) as any as S.Schema<DeletePrivateConnectionOutput>,
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
  operationName: "DeletePrivateConnection",
}));

export type DeleteSecurityRequirementPackError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a customer managed security requirement pack and all its associated security requirements.
 */
export const deleteSecurityRequirementPack: API.OperationMethod<
  DeleteSecurityRequirementPackInput,
  DeleteSecurityRequirementPackOutput,
  DeleteSecurityRequirementPackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(180, __c22, 4) as any as S.Schema<DeleteSecurityRequirementPackInput>,
  output: __S(181, __c22, 5) as any as S.Schema<DeleteSecurityRequirementPackOutput>,
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
  operationName: "DeleteSecurityRequirementPack",
}));

export type DeleteTargetDomainError = CommonErrors;
/**
 * Deletes a target domain registration. After deletion, the domain can no longer be used for penetration testing.
 */
export const deleteTargetDomain: API.OperationMethod<
  DeleteTargetDomainInput,
  DeleteTargetDomainOutput,
  DeleteTargetDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182, __c22, 6) as any as S.Schema<DeleteTargetDomainInput>,
  output: __S(183, __c22, 7) as any as S.Schema<DeleteTargetDomainOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTargetDomain",
}));

export type DescribePrivateConnectionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of a private connection.
 */
export const describePrivateConnection: API.OperationMethod<
  DescribePrivateConnectionInput,
  DescribePrivateConnectionOutput,
  DescribePrivateConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(184, __c23, 0) as any as S.Schema<DescribePrivateConnectionInput>,
  output: __S(164, __c20, 4) as any as S.Schema<DescribePrivateConnectionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePrivateConnection",
}));

export type GetApplicationError = CommonErrors;
/**
 * Retrieves information about an application.
 */
export const getApplication: API.OperationMethod<
  GetApplicationRequest,
  GetApplicationResponse,
  GetApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(185, __c23, 1) as any as S.Schema<GetApplicationRequest>,
  output: __S(187, __c23, 3) as any as S.Schema<GetApplicationResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApplication",
}));

export type GetArtifactError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves an artifact from an agent space.
 */
export const getArtifact: API.OperationMethod<
  GetArtifactInput,
  GetArtifactOutput,
  GetArtifactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(188, __c23, 4) as any as S.Schema<GetArtifactInput>,
  output: __S(190, __c23, 6) as any as S.Schema<GetArtifactOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetArtifact",
}));

export type GetIntegrationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an integration.
 */
export const getIntegration: API.OperationMethod<
  GetIntegrationInput,
  GetIntegrationOutput,
  GetIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(191, __c23, 7) as any as S.Schema<GetIntegrationInput>,
  output: __S(192, __c24, 0) as any as S.Schema<GetIntegrationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIntegration",
}));

export type GetSecurityRequirementPackError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a security requirement pack.
 */
export const getSecurityRequirementPack: API.OperationMethod<
  GetSecurityRequirementPackInput,
  GetSecurityRequirementPackOutput,
  GetSecurityRequirementPackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(193, __c24, 1) as any as S.Schema<GetSecurityRequirementPackInput>,
  output: __S(194, __c24, 2) as any as S.Schema<GetSecurityRequirementPackOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSecurityRequirementPack",
}));

export type ImportSecurityRequirementsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Imports security requirements from uploaded documents into a customer managed security requirement pack. The import process asynchronously extracts and generates structured security requirements from the provided source files.
 */
export const importSecurityRequirements: API.OperationMethod<
  ImportSecurityRequirementsInput,
  ImportSecurityRequirementsOutput,
  ImportSecurityRequirementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(198, __c24, 6) as any as S.Schema<ImportSecurityRequirementsInput>,
  output: __S(199, __c24, 7) as any as S.Schema<ImportSecurityRequirementsOutput>,
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
  operationName: "ImportSecurityRequirements",
}));

export type InitiateProviderRegistrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Initiates the OAuth registration flow with a third-party provider. Returns a redirect URL and CSRF state token for completing the authorization.
 */
export const initiateProviderRegistration: API.OperationMethod<
  InitiateProviderRegistrationInput,
  InitiateProviderRegistrationOutput,
  InitiateProviderRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(200, __c25, 0) as any as S.Schema<InitiateProviderRegistrationInput>,
  output: __S(201, __c25, 1) as any as S.Schema<InitiateProviderRegistrationOutput>,
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
  operationName: "InitiateProviderRegistration",
}));

export type ListActorMessagesError = CommonErrors;
/**
 * Returns a paginated list of the email MFA messages received for an actor at its server-generated email address, most recent first.
 */
export const listActorMessages: API.PaginatedOperationMethod<
  ListActorMessagesInput,
  ListActorMessagesOutput,
  ListActorMessagesError,
  Credentials | HttpClient.HttpClient,
  ActorMessage
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(202, __c25, 2) as any as S.Schema<ListActorMessagesInput>,
  output: __S(205, __c25, 5) as any as S.Schema<ListActorMessagesOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListActorMessages",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "messages",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAgentSpacesError = CommonErrors;
/**
 * Returns a paginated list of agent space summaries in your account.
 */
export const listAgentSpaces: API.PaginatedOperationMethod<
  ListAgentSpacesInput,
  ListAgentSpacesOutput,
  ListAgentSpacesError,
  Credentials | HttpClient.HttpClient,
  AgentSpaceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(206, __c25, 6) as any as S.Schema<ListAgentSpacesInput>,
  output: __S(209, __c26, 1) as any as S.Schema<ListAgentSpacesOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentSpaces",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "agentSpaceSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListApplicationsError = CommonErrors;
/**
 * Returns a paginated list of application summaries in your account.
 */
export const listApplications: API.PaginatedOperationMethod<
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListApplicationsError,
  Credentials | HttpClient.HttpClient,
  ApplicationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(210, __c26, 2) as any as S.Schema<ListApplicationsRequest>,
  output: __S(213, __c26, 5) as any as S.Schema<ListApplicationsResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplications",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "applicationSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListArtifactsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of artifact summaries for the specified agent space.
 */
export const listArtifacts: API.PaginatedOperationMethod<
  ListArtifactsInput,
  ListArtifactsOutput,
  ListArtifactsError,
  Credentials | HttpClient.HttpClient,
  ArtifactSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(214, __c26, 6) as any as S.Schema<ListArtifactsInput>,
  output: __S(217, __c27, 1) as any as S.Schema<ListArtifactsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListArtifacts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "artifactSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCodeReviewJobsForCodeReviewError = CommonErrors;
/**
 * Returns a paginated list of code review job summaries for the specified code review configuration.
 */
export const listCodeReviewJobsForCodeReview: API.PaginatedOperationMethod<
  ListCodeReviewJobsForCodeReviewInput,
  ListCodeReviewJobsForCodeReviewOutput,
  ListCodeReviewJobsForCodeReviewError,
  Credentials | HttpClient.HttpClient,
  CodeReviewJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(218, __c27, 2) as any as S.Schema<ListCodeReviewJobsForCodeReviewInput>,
  output: __S(221, __c27, 5) as any as S.Schema<ListCodeReviewJobsForCodeReviewOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCodeReviewJobsForCodeReview",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "codeReviewJobSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCodeReviewJobTasksError = CommonErrors;
/**
 * Returns a paginated list of task summaries for the specified code review job, optionally filtered by step name or category.
 */
export const listCodeReviewJobTasks: API.PaginatedOperationMethod<
  ListCodeReviewJobTasksInput,
  ListCodeReviewJobTasksOutput,
  ListCodeReviewJobTasksError,
  Credentials | HttpClient.HttpClient,
  CodeReviewJobTaskSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(222, __c27, 6) as any as S.Schema<ListCodeReviewJobTasksInput>,
  output: __S(225, __c28, 1) as any as S.Schema<ListCodeReviewJobTasksOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCodeReviewJobTasks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "codeReviewJobTaskSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCodeReviewsError = CommonErrors;
/**
 * Returns a paginated list of code review summaries for the specified agent space.
 */
export const listCodeReviews: API.PaginatedOperationMethod<
  ListCodeReviewsInput,
  ListCodeReviewsOutput,
  ListCodeReviewsError,
  Credentials | HttpClient.HttpClient,
  CodeReviewSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(226, __c28, 2) as any as S.Schema<ListCodeReviewsInput>,
  output: __S(229, __c28, 5) as any as S.Schema<ListCodeReviewsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCodeReviews",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "codeReviewSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDiscoveredEndpointsError = CommonErrors;
/**
 * Returns a paginated list of endpoints discovered during a pentest job execution.
 */
export const listDiscoveredEndpoints: API.PaginatedOperationMethod<
  ListDiscoveredEndpointsInput,
  ListDiscoveredEndpointsOutput,
  ListDiscoveredEndpointsError,
  Credentials | HttpClient.HttpClient,
  DiscoveredEndpoint
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(230, __c28, 6) as any as S.Schema<ListDiscoveredEndpointsInput>,
  output: __S(233, __c29, 1) as any as S.Schema<ListDiscoveredEndpointsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDiscoveredEndpoints",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "discoveredEndpoints",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFindingsError = CommonErrors;
/**
 * Lists the security findings for a pentest job.
 */
export const listFindings: API.PaginatedOperationMethod<
  ListFindingsInput,
  ListFindingsOutput,
  ListFindingsError,
  Credentials | HttpClient.HttpClient,
  FindingSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(234, __c29, 2) as any as S.Schema<ListFindingsInput>,
  output: __S(237, __c29, 5) as any as S.Schema<ListFindingsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFindings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "findingsSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIntegratedResourcesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the integrated resources for an agent space, optionally filtered by integration or resource type.
 */
export const listIntegratedResources: API.PaginatedOperationMethod<
  ListIntegratedResourcesInput,
  ListIntegratedResourcesOutput,
  ListIntegratedResourcesError,
  Credentials | HttpClient.HttpClient,
  IntegratedResourceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(238, __c29, 6) as any as S.Schema<ListIntegratedResourcesInput>,
  output: __S(254, __c31, 6) as any as S.Schema<ListIntegratedResourcesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIntegratedResources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "integratedResourceSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIntegrationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the integrations in your account, optionally filtered by provider or provider type.
 */
export const listIntegrations: API.PaginatedOperationMethod<
  ListIntegrationsInput,
  ListIntegrationsOutput,
  ListIntegrationsError,
  Credentials | HttpClient.HttpClient,
  IntegrationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(256, __c32, 0) as any as S.Schema<ListIntegrationsInput>,
  output: __S(259, __c32, 3) as any as S.Schema<ListIntegrationsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIntegrations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "integrationSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMembershipsError = CommonErrors;
/**
 * Returns a paginated list of membership summaries for the specified agent space within an application.
 */
export const listMemberships: API.PaginatedOperationMethod<
  ListMembershipsRequest,
  ListMembershipsResponse,
  ListMembershipsError,
  Credentials | HttpClient.HttpClient,
  MembershipSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(260, __c32, 4) as any as S.Schema<ListMembershipsRequest>,
  output: __S(265, __c33, 1) as any as S.Schema<ListMembershipsResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMemberships",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "membershipSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPentestJobsForPentestError = CommonErrors;
/**
 * Returns a paginated list of pentest job summaries for the specified pentest configuration.
 */
export const listPentestJobsForPentest: API.PaginatedOperationMethod<
  ListPentestJobsForPentestInput,
  ListPentestJobsForPentestOutput,
  ListPentestJobsForPentestError,
  Credentials | HttpClient.HttpClient,
  PentestJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(266, __c33, 2) as any as S.Schema<ListPentestJobsForPentestInput>,
  output: __S(269, __c33, 5) as any as S.Schema<ListPentestJobsForPentestOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPentestJobsForPentest",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "pentestJobSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPentestJobTasksError = CommonErrors;
/**
 * Returns a paginated list of task summaries for the specified pentest job, optionally filtered by step name or category.
 */
export const listPentestJobTasks: API.PaginatedOperationMethod<
  ListPentestJobTasksInput,
  ListPentestJobTasksOutput,
  ListPentestJobTasksError,
  Credentials | HttpClient.HttpClient,
  TaskSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(270, __c33, 6) as any as S.Schema<ListPentestJobTasksInput>,
  output: __S(273, __c34, 1) as any as S.Schema<ListPentestJobTasksOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPentestJobTasks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "taskSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPentestsError = CommonErrors;
/**
 * Returns a paginated list of pentest summaries for the specified agent space.
 */
export const listPentests: API.PaginatedOperationMethod<
  ListPentestsInput,
  ListPentestsOutput,
  ListPentestsError,
  Credentials | HttpClient.HttpClient,
  PentestSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(274, __c34, 2) as any as S.Schema<ListPentestsInput>,
  output: __S(277, __c34, 5) as any as S.Schema<ListPentestsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPentests",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "pentestSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPrivateConnectionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the private connections in your account.
 */
export const listPrivateConnections: API.PaginatedOperationMethod<
  ListPrivateConnectionsInput,
  ListPrivateConnectionsOutput,
  ListPrivateConnectionsError,
  Credentials | HttpClient.HttpClient,
  PrivateConnectionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(278, __c34, 6) as any as S.Schema<ListPrivateConnectionsInput>,
  output: __S(281, __c35, 1) as any as S.Schema<ListPrivateConnectionsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPrivateConnections",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "privateConnections",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSecurityRequirementPacksError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all security requirement packs in the caller's account.
 */
export const listSecurityRequirementPacks: API.PaginatedOperationMethod<
  ListSecurityRequirementPacksInput,
  ListSecurityRequirementPacksOutput,
  ListSecurityRequirementPacksError,
  Credentials | HttpClient.HttpClient,
  SecurityRequirementPackSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(283, __c35, 3) as any as S.Schema<ListSecurityRequirementPacksInput>,
  output: __S(286, __c35, 6) as any as S.Schema<ListSecurityRequirementPacksOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSecurityRequirementPacks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "securityRequirementPackSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSecurityRequirementsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists security requirements within a pack.
 */
export const listSecurityRequirements: API.PaginatedOperationMethod<
  ListSecurityRequirementsInput,
  ListSecurityRequirementsOutput,
  ListSecurityRequirementsError,
  Credentials | HttpClient.HttpClient,
  SecurityRequirementSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(287, __c35, 7) as any as S.Schema<ListSecurityRequirementsInput>,
  output: __S(290, __c36, 2) as any as S.Schema<ListSecurityRequirementsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSecurityRequirements",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "securityRequirementSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError = CommonErrors;
/**
 * Returns the tags associated with the specified resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(291, __c36, 3) as any as S.Schema<ListTagsForResourceInput>,
  output: __S(292, __c36, 4) as any as S.Schema<ListTagsForResourceOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTargetDomainsError = CommonErrors;
/**
 * Returns a paginated list of target domain summaries in your account.
 */
export const listTargetDomains: API.PaginatedOperationMethod<
  ListTargetDomainsInput,
  ListTargetDomainsOutput,
  ListTargetDomainsError,
  Credentials | HttpClient.HttpClient,
  TargetDomainSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(293, __c36, 5) as any as S.Schema<ListTargetDomainsInput>,
  output: __S(296, __c37, 0) as any as S.Schema<ListTargetDomainsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTargetDomains",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "targetDomainSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListThreatModelJobsError = CommonErrors;
/**
 * Returns a paginated list of threat model job summaries for the specified threat model.
 */
export const listThreatModelJobs: API.PaginatedOperationMethod<
  ListThreatModelJobsInput,
  ListThreatModelJobsOutput,
  ListThreatModelJobsError,
  Credentials | HttpClient.HttpClient,
  ThreatModelJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(297, __c37, 1) as any as S.Schema<ListThreatModelJobsInput>,
  output: __S(300, __c37, 4) as any as S.Schema<ListThreatModelJobsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThreatModelJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "threatModelJobSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListThreatModelJobTasksError = CommonErrors;
/**
 * Returns a paginated list of task summaries for the specified threat model job.
 */
export const listThreatModelJobTasks: API.PaginatedOperationMethod<
  ListThreatModelJobTasksInput,
  ListThreatModelJobTasksOutput,
  ListThreatModelJobTasksError,
  Credentials | HttpClient.HttpClient,
  ThreatModelJobTaskSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(301, __c37, 5) as any as S.Schema<ListThreatModelJobTasksInput>,
  output: __S(304, __c38, 0) as any as S.Schema<ListThreatModelJobTasksOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThreatModelJobTasks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "threatModelJobTaskSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListThreatModelsError = CommonErrors;
/**
 * Returns a paginated list of threat model summaries for the specified agent space.
 */
export const listThreatModels: API.PaginatedOperationMethod<
  ListThreatModelsInput,
  ListThreatModelsOutput,
  ListThreatModelsError,
  Credentials | HttpClient.HttpClient,
  ThreatModelSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(305, __c38, 1) as any as S.Schema<ListThreatModelsInput>,
  output: __S(308, __c38, 4) as any as S.Schema<ListThreatModelsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThreatModels",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "threatModelSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListThreatsError = CommonErrors;
/**
 * Returns a paginated list of threats for a threat model job.
 */
export const listThreats: API.PaginatedOperationMethod<
  ListThreatsInput,
  ListThreatsOutput,
  ListThreatsError,
  Credentials | HttpClient.HttpClient,
  ThreatSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(309, __c38, 5) as any as S.Schema<ListThreatsInput>,
  output: __S(312, __c39, 0) as any as S.Schema<ListThreatsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThreats",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "threats",
    pageSize: "maxResults",
  } as const,
})) as any;

export type StartCodeRemediationError = CommonErrors;
/**
 * Initiates code remediation for one or more security findings. This creates pull requests in integrated repositories to fix the identified vulnerabilities.
 */
export const startCodeRemediation: API.OperationMethod<
  StartCodeRemediationInput,
  StartCodeRemediationOutput,
  StartCodeRemediationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(313, __c39, 1) as any as S.Schema<StartCodeRemediationInput>,
  output: __S(157, __c19, 5) as any as S.Schema<StartCodeRemediationOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartCodeRemediation",
}));

export type StartCodeReviewJobError = CommonErrors;
/**
 * Starts a new code review job for a code review configuration. The job executes the security-focused code analysis defined in the code review.
 */
export const startCodeReviewJob: API.OperationMethod<
  StartCodeReviewJobInput,
  StartCodeReviewJobOutput,
  StartCodeReviewJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(315, __c39, 3) as any as S.Schema<StartCodeReviewJobInput>,
  output: __S(316, __c39, 4) as any as S.Schema<StartCodeReviewJobOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartCodeReviewJob",
}));

export type StartPentestJobError = CommonErrors;
/**
 * Starts a new pentest job for a pentest configuration. The job executes the security tests defined in the pentest.
 */
export const startPentestJob: API.OperationMethod<
  StartPentestJobInput,
  StartPentestJobOutput,
  StartPentestJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(317, __c39, 5) as any as S.Schema<StartPentestJobInput>,
  output: __S(318, __c39, 6) as any as S.Schema<StartPentestJobOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartPentestJob",
}));

export type StartThreatModelJobError = CommonErrors;
/**
 * Starts a new threat model job for a threat model configuration.
 */
export const startThreatModelJob: API.OperationMethod<
  StartThreatModelJobInput,
  StartThreatModelJobOutput,
  StartThreatModelJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(319, __c39, 7) as any as S.Schema<StartThreatModelJobInput>,
  output: __S(320, __c40, 0) as any as S.Schema<StartThreatModelJobOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartThreatModelJob",
}));

export type StopCodeReviewJobError = CommonErrors;
/**
 * Stops a running code review job. The job transitions to a stopping state and then to stopped after cleanup completes.
 */
export const stopCodeReviewJob: API.OperationMethod<
  StopCodeReviewJobInput,
  StopCodeReviewJobOutput,
  StopCodeReviewJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(321, __c40, 1) as any as S.Schema<StopCodeReviewJobInput>,
  output: __S(157, __c19, 5) as any as S.Schema<StopCodeReviewJobOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopCodeReviewJob",
}));

export type StopPentestJobError = CommonErrors;
/**
 * Stops a running pentest job. The job transitions to a stopping state and then to stopped after cleanup completes.
 */
export const stopPentestJob: API.OperationMethod<
  StopPentestJobInput,
  StopPentestJobOutput,
  StopPentestJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(322, __c40, 2) as any as S.Schema<StopPentestJobInput>,
  output: __S(157, __c19, 5) as any as S.Schema<StopPentestJobOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopPentestJob",
}));

export type StopThreatModelJobError = CommonErrors;
/**
 * Stops a running threat model job.
 */
export const stopThreatModelJob: API.OperationMethod<
  StopThreatModelJobInput,
  StopThreatModelJobOutput,
  StopThreatModelJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(323, __c40, 3) as any as S.Schema<StopThreatModelJobInput>,
  output: __S(157, __c19, 5) as any as S.Schema<StopThreatModelJobOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopThreatModelJob",
}));

export type TagResourceError = CommonErrors;
/**
 * Adds tags to a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(324, __c40, 4) as any as S.Schema<TagResourceInput>,
  output: __S(157, __c19, 5) as any as S.Schema<TagResourceOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = CommonErrors;
/**
 * Removes tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(325, __c40, 5) as any as S.Schema<UntagResourceInput>,
  output: __S(157, __c19, 5) as any as S.Schema<UntagResourceOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAgentSpaceError = CommonErrors;
/**
 * Updates the configuration of an existing agent space, including its name, description, AWS resources, target domains, and code review settings.
 */
export const updateAgentSpace: API.OperationMethod<
  UpdateAgentSpaceInput,
  UpdateAgentSpaceOutput,
  UpdateAgentSpaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(326, __c40, 6) as any as S.Schema<UpdateAgentSpaceInput>,
  output: __S(327, __c40, 7) as any as S.Schema<UpdateAgentSpaceOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAgentSpace",
}));

export type UpdateApplicationError = CommonErrors;
/**
 * Updates the configuration of an existing application, including the IAM role and default KMS key.
 */
export const updateApplication: API.OperationMethod<
  UpdateApplicationRequest,
  UpdateApplicationResponse,
  UpdateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(328, __c41, 0) as any as S.Schema<UpdateApplicationRequest>,
  output: __S(142, __c17, 6) as any as S.Schema<UpdateApplicationResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplication",
}));

export type UpdateCodeReviewError = CommonErrors;
/**
 * Updates an existing code review configuration.
 */
export const updateCodeReview: API.OperationMethod<
  UpdateCodeReviewInput,
  UpdateCodeReviewOutput,
  UpdateCodeReviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(329, __c41, 1) as any as S.Schema<UpdateCodeReviewInput>,
  output: __S(144, __c18, 0) as any as S.Schema<UpdateCodeReviewOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCodeReview",
}));

export type UpdateFindingError = CommonErrors;
/**
 * Updates the status or risk level of a security finding.
 */
export const updateFinding: API.OperationMethod<
  UpdateFindingInput,
  UpdateFindingOutput,
  UpdateFindingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(330, __c41, 2) as any as S.Schema<UpdateFindingInput>,
  output: __S(157, __c19, 5) as any as S.Schema<UpdateFindingOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFinding",
}));

export type UpdateIntegratedResourcesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the integrated resources for an agent space, including their capabilities.
 */
export const updateIntegratedResources: API.OperationMethod<
  UpdateIntegratedResourcesInput,
  UpdateIntegratedResourcesOutput,
  UpdateIntegratedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(339, __c42, 3) as any as S.Schema<UpdateIntegratedResourcesInput>,
  output: __S(340, __c42, 4) as any as S.Schema<UpdateIntegratedResourcesOutput>,
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
  operationName: "UpdateIntegratedResources",
}));

export type UpdateIntegrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an integration's webhook, or rotates the HMAC signing secret of an existing one. The secret is returned only once, in this response, and cannot be retrieved again.
 */
export const updateIntegration: API.OperationMethod<
  UpdateIntegrationInput,
  UpdateIntegrationOutput,
  UpdateIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(341, __c42, 5) as any as S.Schema<UpdateIntegrationInput>,
  output: __S(342, __c42, 6) as any as S.Schema<UpdateIntegrationOutput>,
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
  operationName: "UpdateIntegration",
}));

export type UpdatePentestError = CommonErrors;
/**
 * Updates an existing pentest configuration.
 */
export const updatePentest: API.OperationMethod<
  UpdatePentestInput,
  UpdatePentestOutput,
  UpdatePentestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(343, __c42, 7) as any as S.Schema<UpdatePentestInput>,
  output: __S(159, __c19, 7) as any as S.Schema<UpdatePentestOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePentest",
}));

export type UpdatePrivateConnectionCertificateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the certificate associated with a private connection. Certificates can be added or replaced but not removed.
 */
export const updatePrivateConnectionCertificate: API.OperationMethod<
  UpdatePrivateConnectionCertificateInput,
  UpdatePrivateConnectionCertificateOutput,
  UpdatePrivateConnectionCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(344, __c43, 0) as any as S.Schema<UpdatePrivateConnectionCertificateInput>,
  output: __S(164, __c20, 4) as any as S.Schema<UpdatePrivateConnectionCertificateOutput>,
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
  operationName: "UpdatePrivateConnectionCertificate",
}));

export type UpdateSecurityRequirementPackError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a security requirement pack. For customer managed packs, both metadata and status can be updated. For AWS managed packs, only status can be updated.
 */
export const updateSecurityRequirementPack: API.OperationMethod<
  UpdateSecurityRequirementPackInput,
  UpdateSecurityRequirementPackOutput,
  UpdateSecurityRequirementPackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(345, __c43, 1) as any as S.Schema<UpdateSecurityRequirementPackInput>,
  output: __S(346, __c43, 2) as any as S.Schema<UpdateSecurityRequirementPackOutput>,
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
  operationName: "UpdateSecurityRequirementPack",
}));

export type UpdateTargetDomainError = CommonErrors;
/**
 * Updates the verification method for a target domain.
 */
export const updateTargetDomain: API.OperationMethod<
  UpdateTargetDomainInput,
  UpdateTargetDomainOutput,
  UpdateTargetDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(347, __c43, 3) as any as S.Schema<UpdateTargetDomainInput>,
  output: __S(168, __c21, 0) as any as S.Schema<UpdateTargetDomainOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTargetDomain",
}));

export type UpdateThreatError = CommonErrors;
/**
 * Updates a threat.
 */
export const updateThreat: API.OperationMethod<
  UpdateThreatInput,
  UpdateThreatOutput,
  UpdateThreatError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(348, __c43, 4) as any as S.Schema<UpdateThreatInput>,
  output: __S(170, __c21, 2) as any as S.Schema<UpdateThreatOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateThreat",
}));

export type UpdateThreatModelError = CommonErrors;
/**
 * Updates an existing threat model configuration.
 */
export const updateThreatModel: API.OperationMethod<
  UpdateThreatModelInput,
  UpdateThreatModelOutput,
  UpdateThreatModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(349, __c43, 5) as any as S.Schema<UpdateThreatModelInput>,
  output: __S(172, __c21, 4) as any as S.Schema<UpdateThreatModelOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateThreatModel",
}));

export type VerifyTargetDomainError = CommonErrors;
/**
 * Initiates verification of a target domain. This checks whether the domain ownership verification token has been properly configured.
 */
export const verifyTargetDomain: API.OperationMethod<
  VerifyTargetDomainInput,
  VerifyTargetDomainOutput,
  VerifyTargetDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(350, __c43, 6) as any as S.Schema<VerifyTargetDomainInput>,
  output: __S(351, __c43, 7) as any as S.Schema<VerifyTargetDomainOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "VerifyTargetDomain",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          artifactContent: T.Blob,
          artifactType: S.String,
          fileName: S.String,
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/AddArtifact" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AddArtifactInput" });
    case 1:
      return S.suspend(() => S.Struct({ artifactId: S.String })).annotate({
        identifier: "AddArtifactOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.String,
          domain: S.String,
          evaluation: S.String,
          remediation: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateSecurityRequirementEntry",
      });
    case 3:
      return S.Array(__S(2, __c0, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          packId: S.String,
          securityRequirements: __S(3, __c0, 3),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchCreateSecurityRequirements" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchCreateSecurityRequirementsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          packId: S.String,
          name: S.String,
          description: S.String,
          domain: S.String,
          evaluation: S.String,
          remediation: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "BatchCreateSecurityRequirementResult",
      });
    case 6:
      return S.Array(__S(5, __c0, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ securityRequirementName: S.String, code: S.String, message: S.String }),
      ).annotate({
        identifier: "BatchSecurityRequirementError",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7, __c0, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          securityRequirements: __S(6, __c0, 6),
          errors: __S(8, __c1, 0),
        }),
      ).annotate({
        identifier: "BatchCreateSecurityRequirementsOutput",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({ codeReviewIds: __S(10, __c1, 2), agentSpaceId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchDeleteCodeReviews" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDeleteCodeReviewsInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ codeReviewId: S.optional(S.String), reason: S.optional(S.String) }),
      ).annotate({ identifier: "DeleteCodeReviewFailure" });
    case 5:
      return S.Array(__S(12, __c1, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          deleted: S.optional(__S(10, __c1, 2)),
          failed: S.optional(__S(13, __c1, 5)),
        }),
      ).annotate({
        identifier: "BatchDeleteCodeReviewsOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ pentestIds: __S(10, __c1, 2), agentSpaceId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchDeletePentests" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchDeletePentestsInput" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ uri: S.optional(S.String) })).annotate({
        identifier: "Endpoint",
      });
    case 1:
      return S.Array(Endpoint);
    case 2:
      return S.suspend(() =>
        S.Struct({
          providerType: S.optional(S.String),
          value: S.optional(S.String),
        }),
      ).annotate({ identifier: "Authentication" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          identifier: S.optional(S.String),
          uris: S.optional(__S(10, __c1, 2)),
          authentication: S.optional(__S(18, __c2, 2)),
          description: S.optional(S.String),
          enableEmailMfa: S.optional(S.Boolean),
          mfaForwardingAddress: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Actor" });
    case 4:
      return S.Array(__S(19, __c2, 3));
    case 5:
      return S.suspend(() => S.Struct({ integrationId: S.String, resourceId: S.String })).annotate({
        identifier: "IntegratedDocument",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          s3Location: S.optional(S.String),
          artifactId: S.optional(S.String),
          integratedDocument: S.optional(__S(21, __c2, 5)),
        }),
      ).annotate({ identifier: "DocumentInfo" });
    case 7:
      return S.Array(__S(22, __c2, 6));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ s3Location: S.optional(S.String) })).annotate({
        identifier: "SourceCodeRepository",
      });
    case 1:
      return S.Array(__S(24, __c3, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          integrationId: S.String,
          providerResourceId: S.String,
          branch: S.optional(S.String),
        }),
      ).annotate({ identifier: "IntegratedRepository" });
    case 3:
      return S.Array(__S(26, __c3, 2));
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ inlinePem: SensitiveString }),
        /*@__PURE__*/ S.Struct({ artifactId: S.String }),
        /*@__PURE__*/ S.Struct({ s3Location: S.String }),
      ]);
    case 5:
      return S.suspend(() => S.Struct({ source: __S(28, __c3, 4) })).annotate({
        identifier: "TrustedCaCertificate",
      });
    case 6:
      return S.Array(__S(29, __c3, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          endpoints: S.optional(__S(17, __c2, 1)),
          actors: S.optional(__S(20, __c2, 4)),
          documents: S.optional(__S(23, __c2, 7)),
          sourceCode: S.optional(__S(25, __c3, 1)),
          integratedRepositories: S.optional(__S(27, __c3, 3)),
          trustedCaCertificates: S.optional(__S(30, __c3, 6)),
        }),
      ).annotate({ identifier: "Assets" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({ logGroup: S.optional(S.String), logStream: S.optional(S.String) }),
      ).annotate({ identifier: "CloudWatchLog" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          vpcArn: S.optional(S.String),
          securityGroupArns: S.optional(__S(10, __c1, 2)),
          subnetArns: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({ identifier: "VpcConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          effect: S.optional(S.String),
          pattern: S.optional(S.String),
          networkTrafficRuleType: S.optional(S.String),
        }),
      ).annotate({ identifier: "NetworkTrafficRule" });
    case 4:
      return S.Array(__S(35, __c4, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "CustomHeader" });
    case 6:
      return S.Array(__S(37, __c4, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          rules: S.optional(__S(36, __c4, 4)),
          customHeaders: S.optional(__S(38, __c4, 6)),
        }),
      ).annotate({ identifier: "NetworkTrafficConfig" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          integrationId: S.String,
          containerId: S.String,
          parentId: S.optional(S.String),
          documentId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReportDestination" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          riskLevels: S.optional(__S(32, __c4, 0)),
          confidenceLevels: S.optional(__S(32, __c4, 0)),
          statuses: S.optional(__S(32, __c4, 0)),
          riskTypes: S.optional(__S(32, __c4, 0)),
          findingTypes: S.optional(__S(10, __c1, 2)),
          taskStatuses: S.optional(__S(32, __c4, 0)),
          annotationNotes: S.optional(S.Boolean),
          complianceReport: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ReportFilters" });
    case 2:
      return S.suspend(() => S.Struct({ enabled: S.optional(S.Boolean) })).annotate({
        identifier: "CiCdConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          pentestId: S.String,
          agentSpaceId: S.String,
          title: S.String,
          assets: __S(31, __c3, 7),
          excludeRiskTypes: S.optional(__S(32, __c4, 0)),
          serviceRole: S.optional(S.String),
          logConfig: S.optional(__S(33, __c4, 1)),
          vpcConfig: S.optional(__S(34, __c4, 2)),
          networkTrafficConfig: S.optional(__S(39, __c4, 7)),
          codeRemediationStrategy: S.optional(S.String),
          cleanUpStrategy: S.optional(S.String),
          disableManagedSkills: S.optional(__S(32, __c4, 0)),
          maxTaskHours: S.optional(S.Number),
          reportDestination: S.optional(__S(40, __c5, 0)),
          reportFilters: S.optional(__S(41, __c5, 1)),
          cicdConfiguration: S.optional(__S(42, __c5, 2)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "Pentest" });
    case 4:
      return S.Array(__S(43, __c5, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ pentestId: S.optional(S.String), reason: S.optional(S.String) }),
      ).annotate({ identifier: "DeletePentestFailure" });
    case 6:
      return S.Array(__S(45, __c5, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          deleted: S.optional(__S(44, __c5, 4)),
          failed: S.optional(__S(46, __c5, 6)),
        }),
      ).annotate({
        identifier: "BatchDeletePentestsOutput",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ packId: S.String, securityRequirementNames: __S(10, __c1, 2) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchDeleteSecurityRequirements" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDeleteSecurityRequirementsInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          deletedSecurityRequirementNames: __S(10, __c1, 2),
          errors: __S(8, __c1, 0),
        }),
      ).annotate({
        identifier: "BatchDeleteSecurityRequirementsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ threatModelIds: __S(10, __c1, 2), agentSpaceId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchDeleteThreatModels" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDeleteThreatModelsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ threatModelId: S.optional(S.String), reason: S.optional(S.String) }),
      ).annotate({ identifier: "DeleteThreatModelFailure" });
    case 4:
      return S.Array(__S(51, __c6, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          deleted: S.optional(__S(10, __c1, 2)),
          failed: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({
        identifier: "BatchDeleteThreatModelsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ agentSpaceIds: __S(10, __c1, 2) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchGetAgentSpaces" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchGetAgentSpacesInput" });
    case 7:
      return S.Array(__S(34, __c4, 2));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          vpcs: S.optional(__S(55, __c6, 7)),
          logGroups: S.optional(__S(10, __c1, 2)),
          s3Buckets: S.optional(__S(10, __c1, 2)),
          secretArns: S.optional(__S(10, __c1, 2)),
          lambdaFunctionArns: S.optional(__S(10, __c1, 2)),
          iamRoles: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({ identifier: "AWSResources" });
    case 1:
      return S.suspend(() =>
        S.Struct({ controlsScanning: S.Boolean, generalPurposeScanning: S.Boolean }),
      ).annotate({ identifier: "CodeReviewSettings" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          name: S.String,
          description: S.optional(S.String),
          awsResources: S.optional(__S(56, __c7, 0)),
          targetDomainIds: S.optional(__S(10, __c1, 2)),
          codeReviewSettings: S.optional(__S(57, __c7, 1)),
          kmsKeyId: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "AgentSpace" });
    case 3:
      return S.Array(__S(58, __c7, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          agentSpaces: S.optional(__S(59, __c7, 3)),
          notFound: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({
        identifier: "BatchGetAgentSpacesOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ agentSpaceId: S.String, artifactIds: __S(10, __c1, 2) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchGetArtifactMetadata" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetArtifactMetadataInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          artifactId: S.String,
          fileName: S.String,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "ArtifactMetadataItem" });
    case 7:
      return S.Array(__S(62, __c7, 6));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ artifactMetadataList: __S(63, __c7, 7) })).annotate({
        identifier: "BatchGetArtifactMetadataOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ codeReviewJobIds: __S(10, __c1, 2), agentSpaceId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchGetCodeReviewJobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetCodeReviewJobsInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          status: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "Step" });
    case 3:
      return S.Array(__S(66, __c8, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          contextType: S.optional(S.String),
          context: S.optional(S.String),
          timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ExecutionContext" });
    case 5:
      return S.Array(__S(68, __c8, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ code: S.optional(S.String), message: S.optional(S.String) }),
      ).annotate({ identifier: "ErrorInformation" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          codeReviewJobId: S.optional(S.String),
          codeReviewId: S.optional(S.String),
          title: S.optional(S.String),
          overview: S.optional(S.String),
          status: S.optional(S.String),
          documents: S.optional(__S(23, __c2, 7)),
          sourceCode: S.optional(__S(25, __c3, 1)),
          steps: S.optional(__S(67, __c8, 3)),
          executionContext: S.optional(__S(69, __c8, 5)),
          serviceRole: S.optional(S.String),
          logConfig: S.optional(__S(33, __c4, 1)),
          errorInformation: S.optional(__S(70, __c8, 6)),
          integratedRepositories: S.optional(__S(27, __c3, 3)),
          codeRemediationStrategy: S.optional(S.String),
          maxTaskHours: S.optional(S.Number),
          reportDestination: S.optional(__S(40, __c5, 0)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CodeReviewJob" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(71, __c8, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          codeReviewJobs: S.optional(__S(72, __c9, 0)),
          notFound: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({
        identifier: "BatchGetCodeReviewJobsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ agentSpaceId: S.String, codeReviewJobTaskIds: __S(10, __c1, 2) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchGetCodeReviewJobTasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetCodeReviewJobTasksInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), isPrimary: S.optional(S.Boolean) }),
      ).annotate({ identifier: "Category" });
    case 4:
      return S.Array(__S(75, __c9, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ logType: S.optional(S.String), cloudWatchLog: S.optional(__S(33, __c4, 1)) }),
      ).annotate({ identifier: "LogLocation" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          taskId: S.String,
          codeReviewId: S.optional(S.String),
          codeReviewJobId: S.optional(S.String),
          agentSpaceId: S.optional(S.String),
          title: S.optional(S.String),
          description: S.optional(S.String),
          categories: S.optional(__S(76, __c9, 4)),
          riskType: S.optional(S.String),
          executionStatus: S.optional(S.String),
          logsLocation: S.optional(__S(77, __c9, 5)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CodeReviewJobTask" });
    case 7:
      return S.Array(__S(78, __c9, 6));
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          codeReviewJobTasks: S.optional(__S(79, __c9, 7)),
          notFound: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({
        identifier: "BatchGetCodeReviewJobTasksOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ codeReviewIds: __S(10, __c1, 2), agentSpaceId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchGetCodeReviews" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchGetCodeReviewsInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          codeReviewId: S.String,
          agentSpaceId: S.String,
          title: S.String,
          assets: __S(31, __c3, 7),
          serviceRole: S.optional(S.String),
          logConfig: S.optional(__S(33, __c4, 1)),
          codeRemediationStrategy: S.optional(S.String),
          validationMode: S.optional(S.String),
          maxTaskHours: S.optional(S.Number),
          reportDestination: S.optional(__S(40, __c5, 0)),
          reportFilters: S.optional(__S(41, __c5, 1)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CodeReview" });
    case 3:
      return S.Array(__S(82, __c10, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          codeReviews: S.optional(__S(83, __c10, 3)),
          notFound: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({
        identifier: "BatchGetCodeReviewsOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ findingIds: __S(10, __c1, 2), agentSpaceId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/BatchGetFindings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "BatchGetFindingsInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          repoName: S.optional(S.String),
          codeDiffLink: S.optional(S.String),
          pullRequestLink: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CodeRemediationTaskDetails",
      });
    case 7:
      return S.Array(__S(86, __c10, 6));
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          status: S.String,
          statusReason: S.optional(S.String),
          taskDetails: S.optional(__S(87, __c10, 7)),
        }),
      ).annotate({ identifier: "CodeRemediationTask" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          filePath: S.String,
          lineStart: S.optional(S.Number),
          lineEnd: S.optional(S.Number),
          label: S.optional(S.String),
        }),
      ).annotate({ identifier: "CodeLocation" });
    case 2:
      return S.Array(__S(89, __c11, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          scriptType: S.optional(S.String),
          scriptUrl: S.optional(S.String),
          instructions: S.optional(S.String),
          envVars: S.optional(__S(38, __c4, 6)),
        }),
      ).annotate({ identifier: "VerificationScript" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          findingId: S.String,
          agentSpaceId: S.String,
          pentestId: S.optional(S.String),
          pentestJobId: S.optional(S.String),
          codeReviewId: S.optional(S.String),
          codeReviewJobId: S.optional(S.String),
          taskId: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          status: S.optional(S.String),
          riskType: S.optional(S.String),
          riskLevel: S.optional(S.String),
          riskScore: S.optional(S.String),
          reasoning: S.optional(S.String),
          confidence: S.optional(S.String),
          validationStatus: S.optional(S.String),
          attackScript: S.optional(S.String),
          codeRemediationTask: S.optional(__S(88, __c11, 0)),
          lastUpdatedBy: S.optional(S.String),
          customerNote: S.optional(S.String),
          codeLocations: S.optional(__S(90, __c11, 2)),
          verificationScript: S.optional(__S(91, __c11, 3)),
          alignmentRationale: S.optional(S.String),
          revalidationJobIds: S.optional(__S(10, __c1, 2)),
          originalFindingId: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "Finding" });
    case 5:
      return S.Array(__S(92, __c11, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          findings: S.optional(__S(93, __c11, 5)),
          notFound: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({ identifier: "BatchGetFindingsOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ pentestJobIds: __S(10, __c1, 2), agentSpaceId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchGetPentestJobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchGetPentestJobsInput" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ decision: S.String, reason: S.String })).annotate({
        identifier: "ScopeResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          integrationId: S.String,
          providerResourceId: S.String,
          baseCommitSha: S.optional(S.String),
          headCommitSha: S.String,
          triggerRunId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ScopeChange" });
    case 2:
      return S.Array(__S(97, __c12, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          pentestJobId: S.optional(S.String),
          pentestId: S.optional(S.String),
          title: S.optional(S.String),
          overview: S.optional(S.String),
          status: S.optional(S.String),
          endpoints: S.optional(__S(17, __c2, 1)),
          actors: S.optional(__S(20, __c2, 4)),
          documents: S.optional(__S(23, __c2, 7)),
          sourceCode: S.optional(__S(25, __c3, 1)),
          excludePaths: S.optional(__S(17, __c2, 1)),
          allowedDomains: S.optional(__S(17, __c2, 1)),
          excludeRiskTypes: S.optional(__S(32, __c4, 0)),
          steps: S.optional(__S(67, __c8, 3)),
          executionContext: S.optional(__S(69, __c8, 5)),
          serviceRole: S.optional(S.String),
          logConfig: S.optional(__S(33, __c4, 1)),
          vpcConfig: S.optional(__S(34, __c4, 2)),
          networkTrafficConfig: S.optional(__S(39, __c4, 7)),
          errorInformation: S.optional(__S(70, __c8, 6)),
          integratedRepositories: S.optional(__S(27, __c3, 3)),
          trustedCaCertificates: S.optional(__S(30, __c3, 6)),
          codeRemediationStrategy: S.optional(S.String),
          cleanUpStrategy: S.optional(S.String),
          disableManagedSkills: S.optional(__S(32, __c4, 0)),
          maxTaskHours: S.optional(S.Number),
          jobType: S.optional(S.String),
          selectedFindingIds: S.optional(__S(10, __c1, 2)),
          reportDestination: S.optional(__S(40, __c5, 0)),
          reportUrl: S.optional(S.String),
          scopeResult: S.optional(__S(96, __c12, 0)),
          scopeChanges: S.optional(__S(98, __c12, 2)),
          cicdConfiguration: S.optional(__S(42, __c5, 2)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "PentestJob" });
    case 4:
      return S.Array(__S(99, __c12, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          pentestJobs: S.optional(__S(100, __c12, 4)),
          notFound: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({
        identifier: "BatchGetPentestJobsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ agentSpaceId: S.String, taskIds: __S(10, __c1, 2) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchGetPentestJobTasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetPentestJobTasksInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          taskId: S.String,
          pentestId: S.optional(S.String),
          pentestJobId: S.optional(S.String),
          agentSpaceId: S.optional(S.String),
          title: S.optional(S.String),
          description: S.optional(S.String),
          categories: S.optional(__S(76, __c9, 4)),
          riskType: S.optional(S.String),
          targetEndpoint: S.optional(Endpoint),
          executionStatus: S.optional(S.String),
          logsLocation: S.optional(__S(77, __c9, 5)),
          taskHours: S.optional(S.Number),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "Task" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(103, __c12, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ tasks: S.optional(__S(104, __c13, 0)), notFound: S.optional(__S(10, __c1, 2)) }),
      ).annotate({
        identifier: "BatchGetPentestJobTasksOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ pentestIds: __S(10, __c1, 2), agentSpaceId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/BatchGetPentests" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "BatchGetPentestsInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          pentests: S.optional(__S(44, __c5, 4)),
          notFound: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({ identifier: "BatchGetPentestsOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ packId: S.String, securityRequirementNames: __S(10, __c1, 2) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchGetSecurityRequirements" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetSecurityRequirementsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ targetDomainIds: __S(10, __c1, 2) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchGetTargetDomains" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetTargetDomainsInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          token: S.optional(S.String),
          dnsRecordName: S.optional(S.String),
          dnsRecordType: S.optional(S.String),
        }),
      ).annotate({ identifier: "DnsVerification" });
    case 7:
      return S.suspend(() =>
        S.Struct({ token: S.optional(S.String), routePath: S.optional(S.String) }),
      ).annotate({ identifier: "HttpVerification" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          method: S.optional(S.String),
          dnsTxt: S.optional(__S(110, __c13, 6)),
          httpRoute: S.optional(__S(111, __c13, 7)),
        }),
      ).annotate({ identifier: "VerificationDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          targetDomainId: S.String,
          domainName: S.String,
          verificationStatus: S.optional(S.String),
          verificationStatusReason: S.optional(S.String),
          verificationDetails: S.optional(__S(112, __c14, 0)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          verifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "TargetDomain" });
    case 2:
      return S.Array(__S(113, __c14, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          targetDomains: S.optional(__S(114, __c14, 2)),
          notFound: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({
        identifier: "BatchGetTargetDomainsOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ threatModelJobIds: __S(10, __c1, 2), agentSpaceId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchGetThreatModelJobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetThreatModelJobsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          threatModelJobId: S.optional(S.String),
          threatModelId: S.optional(S.String),
          agentSpaceId: S.optional(S.String),
          title: S.optional(S.String),
          status: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          executionStartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          executionEndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          sourceCode: S.optional(__S(25, __c3, 1)),
          integratedRepositories: S.optional(__S(27, __c3, 3)),
          documents: S.optional(__S(23, __c2, 7)),
          scopeDocs: S.optional(__S(23, __c2, 7)),
          errorInformation: S.optional(__S(70, __c8, 6)),
          systemOverview: S.optional(S.String),
          reportDestination: S.optional(__S(40, __c5, 0)),
        }),
      ).annotate({ identifier: "ThreatModelJob" });
    case 6:
      return S.Array(__S(117, __c14, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          threatModelJobs: S.optional(__S(118, __c14, 6)),
          notFound: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({
        identifier: "BatchGetThreatModelJobsOutput",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ agentSpaceId: S.String, threatModelJobTaskIds: __S(10, __c1, 2) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchGetThreatModelJobTasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetThreatModelJobTasksInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          taskId: S.String,
          threatModelId: S.optional(S.String),
          threatModelJobId: S.optional(S.String),
          agentSpaceId: S.optional(S.String),
          title: S.optional(S.String),
          description: S.optional(S.String),
          executionStatus: S.optional(S.String),
          logsLocation: S.optional(__S(77, __c9, 5)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ThreatModelJobTask" });
    case 2:
      return S.Array(__S(121, __c15, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          threatModelJobTasks: S.optional(__S(122, __c15, 2)),
          notFound: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({
        identifier: "BatchGetThreatModelJobTasksOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ threatModelIds: __S(10, __c1, 2), agentSpaceId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchGetThreatModels" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetThreatModelsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          threatModelId: S.String,
          agentSpaceId: S.String,
          title: S.String,
          description: S.optional(S.String),
          assets: __S(31, __c3, 7),
          scopeDocs: S.optional(__S(23, __c2, 7)),
          serviceRole: S.optional(S.String),
          logConfig: S.optional(__S(33, __c4, 1)),
          reportDestination: S.optional(__S(40, __c5, 0)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ThreatModel" });
    case 6:
      return S.Array(__S(125, __c15, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          threatModels: S.optional(__S(126, __c15, 6)),
          notFound: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({
        identifier: "BatchGetThreatModelsOutput",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ threatIds: __S(10, __c1, 2), agentSpaceId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/BatchGetThreats" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "BatchGetThreatsInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          kind: S.optional(S.String),
          id: S.optional(S.String),
          packageId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ThreatAnchorShape" });
    case 2:
      return S.suspend(() =>
        S.Struct({ packageId: S.optional(S.String), path: S.optional(S.String) }),
      ).annotate({ identifier: "ThreatEvidenceShape" });
    case 3:
      return S.Array(__S(130, __c16, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          threatId: S.optional(S.String),
          threatJobId: S.optional(S.String),
          title: S.optional(S.String),
          statement: S.optional(S.String),
          severity: S.optional(S.String),
          status: S.optional(S.String),
          comments: S.optional(S.String),
          threatSource: S.optional(S.String),
          prerequisites: S.optional(S.String),
          threatAction: S.optional(S.String),
          threatImpact: S.optional(S.String),
          impactedGoal: S.optional(__S(10, __c1, 2)),
          impactedAssets: S.optional(__S(10, __c1, 2)),
          anchor: S.optional(__S(129, __c16, 1)),
          evidence: S.optional(__S(131, __c16, 3)),
          stride: S.optional(__S(32, __c4, 0)),
          recommendation: S.optional(S.String),
          createdBy: S.optional(S.String),
          updatedBy: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "Threat" });
    case 5:
      return S.Array(__S(132, __c16, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          threats: S.optional(__S(133, __c16, 5)),
          notFound: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({ identifier: "BatchGetThreatsOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          domain: S.optional(S.String),
          evaluation: S.optional(S.String),
          remediation: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateSecurityRequirementEntry",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(135, __c16, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          packId: S.String,
          securityRequirements: __S(136, __c17, 0),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchUpdateSecurityRequirements" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchUpdateSecurityRequirementsInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          updatedSecurityRequirementNames: __S(10, __c1, 2),
          errors: __S(8, __c1, 0),
        }),
      ).annotate({
        identifier: "BatchUpdateSecurityRequirementsOutput",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          awsResources: S.optional(__S(56, __c7, 0)),
          targetDomainIds: S.optional(__S(10, __c1, 2)),
          codeReviewSettings: S.optional(__S(57, __c7, 1)),
          kmsKeyId: S.optional(S.String),
          tags: S.optional(__S(139, __c17, 3)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateAgentSpace" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateAgentSpaceInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          idcInstanceArn: S.optional(S.String),
          roleArn: S.optional(S.String),
          defaultKmsKeyId: S.optional(S.String),
          tags: S.optional(__S(139, __c17, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateApplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateApplicationRequest" });
    case 6:
      return S.suspend(() => S.Struct({ applicationId: S.String })).annotate({
        identifier: "CreateApplicationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          title: S.String,
          agentSpaceId: S.String,
          assets: __S(31, __c3, 7),
          serviceRole: S.optional(S.String),
          logConfig: S.optional(__S(33, __c4, 1)),
          codeRemediationStrategy: S.optional(S.String),
          validationMode: S.optional(S.String),
          maxTaskHours: S.optional(S.Number),
          reportDestination: S.optional(__S(40, __c5, 0)),
          reportFilters: S.optional(__S(41, __c5, 1)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateCodeReview" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateCodeReviewInput" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          codeReviewId: S.String,
          title: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          assets: S.optional(__S(31, __c3, 7)),
          serviceRole: S.optional(S.String),
          logConfig: S.optional(__S(33, __c4, 1)),
          agentSpaceId: S.optional(S.String),
          codeRemediationStrategy: S.optional(S.String),
          validationMode: S.optional(S.String),
          maxTaskHours: S.optional(S.Number),
          reportDestination: S.optional(__S(40, __c5, 0)),
          reportFilters: S.optional(__S(41, __c5, 1)),
        }),
      ).annotate({ identifier: "CreateCodeReviewOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          code: S.String,
          state: S.String,
          organizationName: S.optional(S.String),
          targetUrl: S.optional(S.String),
          installationId: S.optional(S.String),
        }),
      ).annotate({ identifier: "GitHubIntegrationInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          accessToken: SensitiveString,
          targetUrl: S.optional(S.String),
          tokenType: S.String,
          groupId: S.optional(S.String),
        }),
      ).annotate({ identifier: "GitLabIntegrationInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          installationId: S.String,
          workspace: S.String,
          code: S.String,
          state: S.String,
        }),
      ).annotate({
        identifier: "BitbucketIntegrationInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ installationId: S.String, code: S.String, state: S.String, siteUrl: S.String }),
      ).annotate({
        identifier: "ConfluenceIntegrationInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ code: S.String, state: S.String, organizationName: S.String }),
      ).annotate({
        identifier: "AzureDevOpsIntegrationInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ targetUrl: S.String, code: S.String, state: S.String }),
      ).annotate({
        identifier: "BitbucketDataCenterIntegrationInput",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ github: __S(145, __c18, 1) }),
        /*@__PURE__*/ S.Struct({ gitlab: __S(146, __c18, 2) }),
        /*@__PURE__*/ S.Struct({ bitbucket: __S(147, __c18, 3) }),
        /*@__PURE__*/ S.Struct({ confluence: __S(148, __c18, 4) }),
        /*@__PURE__*/ S.Struct({ azureDevOps: __S(149, __c18, 5) }),
        /*@__PURE__*/ S.Struct({ bitbucketDataCenter: __S(150, __c18, 6) }),
      ]);
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          provider: S.String,
          input: __S(151, __c18, 7),
          integrationDisplayName: S.String,
          kmsKeyId: S.optional(S.String),
          tags: S.optional(__S(139, __c17, 3)),
          privateConnectionName: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateIntegration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateIntegrationInput" });
    case 1:
      return S.suspend(() => S.Struct({ integrationId: S.String })).annotate({
        identifier: "CreateIntegrationOutput",
      });
    case 2:
      return S.suspend(() => S.Struct({ role: S.optional(S.String) })).annotate({
        identifier: "UserConfig",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ user: __S(154, __c19, 2) })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String,
          agentSpaceId: S.String,
          membershipId: S.String,
          memberType: S.String,
          config: S.optional(__S(155, __c19, 3)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateMembership" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateMembershipRequest" });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CreateMembershipResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          title: S.String,
          agentSpaceId: S.String,
          assets: S.optional(__S(31, __c3, 7)),
          excludeRiskTypes: S.optional(__S(32, __c4, 0)),
          serviceRole: S.optional(S.String),
          logConfig: S.optional(__S(33, __c4, 1)),
          vpcConfig: S.optional(__S(34, __c4, 2)),
          networkTrafficConfig: S.optional(__S(39, __c4, 7)),
          codeRemediationStrategy: S.optional(S.String),
          disableManagedSkills: S.optional(__S(32, __c4, 0)),
          maxTaskHours: S.optional(S.Number),
          reportDestination: S.optional(__S(40, __c5, 0)),
          reportFilters: S.optional(__S(41, __c5, 1)),
          cicdConfiguration: S.optional(__S(42, __c5, 2)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreatePentest" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreatePentestInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          pentestId: S.optional(S.String),
          title: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          assets: S.optional(__S(31, __c3, 7)),
          excludeRiskTypes: S.optional(__S(32, __c4, 0)),
          serviceRole: S.optional(S.String),
          logConfig: S.optional(__S(33, __c4, 1)),
          agentSpaceId: S.optional(S.String),
          reportDestination: S.optional(__S(40, __c5, 0)),
          reportFilters: S.optional(__S(41, __c5, 1)),
          cicdConfiguration: S.optional(__S(42, __c5, 2)),
        }),
      ).annotate({ identifier: "CreatePentestOutput" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          hostAddress: S.String,
          vpcId: S.String,
          subnetIds: __S(10, __c1, 2),
          securityGroupIds: S.optional(__S(10, __c1, 2)),
          ipAddressType: S.optional(S.String),
          ipv4AddressesPerEni: S.optional(S.Number),
          portRanges: S.optional(__S(10, __c1, 2)),
          certificate: S.optional(SensitiveString),
          dnsResolution: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServiceManagedInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceConfigurationId: S.String, certificate: S.optional(SensitiveString) }),
      ).annotate({ identifier: "SelfManagedInput" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ serviceManaged: __S(160, __c20, 0) }),
        /*@__PURE__*/ S.Struct({ selfManaged: __S(161, __c20, 1) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          privateConnectionName: S.String,
          mode: __S(162, __c20, 2),
          tags: S.optional(__S(139, __c17, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreatePrivateConnection" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePrivateConnectionInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: S.String,
          status: S.String,
          resourceGatewayId: S.optional(S.String),
          hostAddress: S.optional(S.String),
          vpcId: S.optional(S.String),
          resourceConfigurationId: S.optional(S.String),
          certificateExpiryTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          dnsResolution: S.optional(S.String),
          failureMessage: S.optional(S.String),
          tags: S.optional(__S(139, __c17, 3)),
        }),
      ).annotate({
        identifier: "CreatePrivateConnectionOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          status: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
          tags: S.optional(__S(139, __c17, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateSecurityRequirementPack" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSecurityRequirementPackInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          packId: S.String,
          status: S.String,
          kmsKeyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateSecurityRequirementPackOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          targetDomainName: S.String,
          verificationMethod: S.String,
          tags: S.optional(__S(139, __c17, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateTargetDomain" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateTargetDomainInput" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          targetDomainId: S.String,
          domainName: S.String,
          verificationStatus: S.String,
          verificationStatusReason: S.optional(S.String),
          verificationDetails: S.optional(__S(112, __c14, 0)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          verifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CreateTargetDomainOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          threatJobId: S.String,
          title: S.optional(S.String),
          statement: S.optional(S.String),
          severity: S.optional(S.String),
          comments: S.optional(S.String),
          stride: S.optional(__S(32, __c4, 0)),
          threatSource: S.optional(S.String),
          prerequisites: S.optional(S.String),
          threatAction: S.optional(S.String),
          threatImpact: S.optional(S.String),
          impactedGoal: S.optional(__S(10, __c1, 2)),
          impactedAssets: S.optional(__S(10, __c1, 2)),
          anchor: S.optional(__S(129, __c16, 1)),
          evidence: S.optional(__S(131, __c16, 3)),
          recommendation: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateThreat" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateThreatInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          threatId: S.String,
          threatJobId: S.String,
          title: S.optional(S.String),
          statement: S.optional(S.String),
          severity: S.optional(S.String),
          status: S.optional(S.String),
          comments: S.optional(S.String),
          stride: S.optional(__S(32, __c4, 0)),
          threatSource: S.optional(S.String),
          prerequisites: S.optional(S.String),
          threatAction: S.optional(S.String),
          threatImpact: S.optional(S.String),
          impactedGoal: S.optional(__S(10, __c1, 2)),
          impactedAssets: S.optional(__S(10, __c1, 2)),
          anchor: S.optional(__S(129, __c16, 1)),
          evidence: S.optional(__S(131, __c16, 3)),
          recommendation: S.optional(S.String),
          createdBy: S.optional(S.String),
          updatedBy: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CreateThreatOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          title: S.String,
          agentSpaceId: S.String,
          description: S.optional(S.String),
          assets: S.optional(__S(31, __c3, 7)),
          scopeDocs: S.optional(__S(23, __c2, 7)),
          serviceRole: S.String,
          logConfig: S.optional(__S(33, __c4, 1)),
          reportDestination: S.optional(__S(40, __c5, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateThreatModel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateThreatModelInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          threatModelId: S.String,
          title: S.optional(S.String),
          agentSpaceId: S.optional(S.String),
          description: S.optional(S.String),
          assets: S.optional(__S(31, __c3, 7)),
          scopeDocs: S.optional(__S(23, __c2, 7)),
          serviceRole: S.optional(S.String),
          logConfig: S.optional(__S(33, __c4, 1)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          reportDestination: S.optional(__S(40, __c5, 0)),
        }),
      ).annotate({ identifier: "CreateThreatModelOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ agentSpaceId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteAgentSpace" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteAgentSpaceInput" });
    case 6:
      return S.suspend(() => S.Struct({ agentSpaceId: S.optional(S.String) })).annotate({
        identifier: "DeleteAgentSpaceOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ applicationId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteApplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteApplicationRequest" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ agentSpaceId: S.String, artifactId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteArtifact" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteArtifactInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ integrationId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteIntegration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteIntegrationInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String,
          agentSpaceId: S.String,
          membershipId: S.String,
          memberType: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteMembership" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteMembershipRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ privateConnectionName: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeletePrivateConnection" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePrivateConnectionInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ packId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteSecurityRequirementPack" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSecurityRequirementPackInput",
      });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteSecurityRequirementPackOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ targetDomainId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteTargetDomain" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTargetDomainInput" });
    case 7:
      return S.suspend(() => S.Struct({ targetDomainId: S.optional(S.String) })).annotate({
        identifier: "DeleteTargetDomainOutput",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ privateConnectionName: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DescribePrivateConnection" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribePrivateConnectionInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ applicationId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetApplication" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetApplicationRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ idcApplicationArn: S.optional(S.String), idcInstanceArn: S.optional(S.String) }),
      ).annotate({ identifier: "IdCConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String,
          domain: S.String,
          applicationName: S.optional(S.String),
          idcConfiguration: S.optional(__S(186, __c23, 2)),
          roleArn: S.optional(S.String),
          defaultKmsKeyId: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetApplicationResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ agentSpaceId: S.String, artifactId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetArtifact" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetArtifactInput" });
    case 5:
      return S.suspend(() => S.Struct({ contents: S.String, type: S.String })).annotate({
        identifier: "Artifact",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          artifactId: S.String,
          artifact: __S(189, __c23, 5),
          fileName: S.String,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "GetArtifactOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ integrationId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetIntegration" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetIntegrationInput" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          integrationId: S.String,
          installationId: S.String,
          provider: S.String,
          providerType: S.String,
          displayName: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
          targetUrl: S.optional(S.String),
          webhookUrl: S.optional(S.String),
          privateConnectionName: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetIntegrationOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ packId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetSecurityRequirementPack" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSecurityRequirementPackInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          packId: S.String,
          name: S.String,
          description: S.optional(S.String),
          vendorName: S.optional(S.String),
          managementType: S.String,
          status: S.String,
          importStatus: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          kmsKeyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetSecurityRequirementPackOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          format: S.String,
          content: SensitiveBlob,
        }),
      ).annotate({
        identifier: "SecurityRequirementArtifact",
      });
    case 4:
      return S.Array(__S(195, __c24, 3));
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ documents: __S(196, __c24, 4) })]);
    case 6:
      return S.suspend(() =>
        S.Struct({ packId: S.String, input: __S(197, __c24, 5) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ImportSecurityRequirements" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ImportSecurityRequirementsInput",
      });
    case 7:
      return S.suspend(() => S.Struct({ packId: S.String, importStatus: S.String })).annotate({
        identifier: "ImportSecurityRequirementsOutput",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          provider: S.String,
          targetUrl: S.optional(S.String),
          organizationName: S.optional(S.String),
          clientId: S.optional(S.String),
          clientSecret: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/oauth2/provider/register" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "InitiateProviderRegistrationInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ redirectTo: S.String, csrfState: S.String })).annotate({
        identifier: "InitiateProviderRegistrationOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          agentSpaceId: S.String,
          pentestId: S.String,
          actorIdentifier: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListActorMessages" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListActorMessagesInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sender: S.optional(SensitiveString),
          subject: S.optional(SensitiveString),
          body: S.optional(SensitiveString),
          receivedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ActorMessage" });
    case 4:
      return S.Array(__S(203, __c25, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ messages: S.optional(__S(204, __c25, 4)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListActorMessagesOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListAgentSpaces" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAgentSpacesInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          name: S.String,
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "AgentSpaceSummary" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(207, __c25, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          agentSpaceSummaries: S.optional(__S(208, __c26, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListAgentSpacesOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListApplications" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListApplicationsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String,
          applicationName: S.String,
          domain: S.String,
          defaultKmsKeyId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ApplicationSummary" });
    case 4:
      return S.Array(__S(211, __c26, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ applicationSummaries: __S(212, __c26, 4), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListApplicationsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListArtifacts" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListArtifactsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ artifactId: S.String, fileName: S.String, artifactType: S.String }),
      ).annotate({ identifier: "ArtifactSummary" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(215, __c26, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ artifactSummaries: __S(216, __c27, 0), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListArtifactsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          codeReviewId: S.String,
          agentSpaceId: S.String,
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListCodeReviewJobsForCodeReview" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCodeReviewJobsForCodeReviewInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          codeReviewJobId: S.String,
          codeReviewId: S.String,
          title: S.optional(S.String),
          status: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CodeReviewJobSummary" });
    case 4:
      return S.Array(__S(219, __c27, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          codeReviewJobSummaries: S.optional(__S(220, __c27, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCodeReviewJobsForCodeReviewOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          maxResults: S.optional(S.Number),
          codeReviewJobId: S.optional(S.String),
          stepName: S.optional(S.String),
          categoryName: S.optional(S.String),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListCodeReviewJobTasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCodeReviewJobTasksInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          taskId: S.String,
          codeReviewId: S.optional(S.String),
          codeReviewJobId: S.optional(S.String),
          agentSpaceId: S.optional(S.String),
          title: S.optional(S.String),
          riskType: S.optional(S.String),
          executionStatus: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CodeReviewJobTaskSummary" });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(223, __c27, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          codeReviewJobTaskSummaries: S.optional(__S(224, __c28, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCodeReviewJobTasksOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          agentSpaceId: S.String,
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListCodeReviews" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListCodeReviewsInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          codeReviewId: S.String,
          agentSpaceId: S.String,
          title: S.String,
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CodeReviewSummary" });
    case 4:
      return S.Array(__S(227, __c28, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          codeReviewSummaries: S.optional(__S(228, __c28, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListCodeReviewsOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          pentestJobId: S.String,
          agentSpaceId: S.String,
          prefix: S.optional(S.String),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListDiscoveredEndpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDiscoveredEndpointsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          uri: S.String,
          pentestJobId: S.String,
          taskId: S.String,
          agentSpaceId: S.String,
          evidence: S.optional(S.String),
          operation: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "DiscoveredEndpoint" });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(231, __c28, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          discoveredEndpoints: S.optional(__S(232, __c29, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDiscoveredEndpointsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          pentestJobId: S.optional(S.String),
          codeReviewJobId: S.optional(S.String),
          agentSpaceId: S.String,
          nextToken: S.optional(S.String),
          riskType: S.optional(S.String),
          riskLevel: S.optional(S.String),
          status: S.optional(S.String),
          confidence: S.optional(S.String),
          name: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListFindings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListFindingsInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          findingId: S.String,
          agentSpaceId: S.String,
          pentestId: S.optional(S.String),
          pentestJobId: S.optional(S.String),
          codeReviewId: S.optional(S.String),
          codeReviewJobId: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(S.String),
          riskType: S.optional(S.String),
          riskLevel: S.optional(S.String),
          confidence: S.optional(S.String),
          validationStatus: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "FindingSummary" });
    case 4:
      return S.Array(__S(235, __c29, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          findingsSummaries: S.optional(__S(236, __c29, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListFindingsOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          integrationId: S.optional(S.String),
          resourceType: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListIntegratedResources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListIntegratedResourcesInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          providerResourceId: S.String,
          owner: S.String,
          accessType: S.optional(S.String),
        }),
      ).annotate({ identifier: "GitHubRepositoryMetadata" });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          providerResourceId: S.String,
          namespace: S.String,
          accessType: S.optional(S.String),
        }),
      ).annotate({ identifier: "GitLabRepositoryMetadata" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          providerResourceId: S.String,
          workspace: S.String,
          accessType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BitbucketRepositoryMetadata",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          providerResourceId: S.String,
          spaceKey: S.String,
          pageId: S.String,
          title: S.optional(S.String),
          spaceTitle: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ConfluenceDocumentMetadata",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          providerResourceId: S.String,
          organization: S.String,
          project: S.optional(S.String),
          projectId: S.optional(S.String),
          accessType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AzureDevOpsRepositoryMetadata",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ githubRepository: __S(239, __c29, 7) }),
        /*@__PURE__*/ S.Struct({ gitlabRepository: __S(240, __c30, 0) }),
        /*@__PURE__*/ S.Struct({ bitbucketRepository: __S(241, __c30, 1) }),
        /*@__PURE__*/ S.Struct({ confluenceDocument: __S(242, __c30, 2) }),
        /*@__PURE__*/ S.Struct({ azureDevOpsRepository: __S(243, __c30, 3) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          patterns: __S(10, __c1, 2),
          matchMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "TriggerFilter" });
    case 6:
      return S.Array(__S(245, __c30, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ events: S.optional(__S(32, __c4, 0)), filters: S.optional(__S(246, __c30, 6)) }),
      ).annotate({ identifier: "TriggerFilterGroup" });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(247, __c30, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          triggerFilterGroups: S.optional(__S(248, __c31, 0)),
          leaveComments: S.optional(S.Boolean),
          remediateCode: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "GitHubResourceCapabilities",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          fetchDocument: S.optional(S.Boolean),
          createDocument: S.optional(S.Boolean),
          updateDocument: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ConfluenceResourceCapabilities",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ github: __S(249, __c31, 1) }),
        /*@__PURE__*/ S.Struct({ gitlab: __S(249, __c31, 1) }),
        /*@__PURE__*/ S.Struct({ bitbucket: __S(249, __c31, 1) }),
        /*@__PURE__*/ S.Struct({ confluence: __S(250, __c31, 2) }),
        /*@__PURE__*/ S.Struct({ azureDevOps: __S(249, __c31, 1) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          integrationId: S.String,
          resource: __S(244, __c30, 4),
          capabilities: S.optional(__S(251, __c31, 3)),
        }),
      ).annotate({
        identifier: "IntegratedResourceSummary",
      });
    case 5:
      return S.Array(__S(252, __c31, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          integratedResourceSummaries: __S(253, __c31, 5),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListIntegratedResourcesOutput",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ provider: S.String }),
        /*@__PURE__*/ S.Struct({ providerType: S.String }),
      ]);
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          filter: S.optional(__S(255, __c31, 7)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListIntegrations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListIntegrationsInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          integrationId: S.String,
          installationId: S.String,
          provider: S.String,
          providerType: S.String,
          displayName: S.String,
          targetUrl: S.optional(S.String),
          webhookUrl: S.optional(S.String),
          privateConnectionName: S.optional(S.String),
        }),
      ).annotate({ identifier: "IntegrationSummary" });
    case 2:
      return S.Array(__S(257, __c32, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ integrationSummaries: __S(258, __c32, 2), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListIntegrationsOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String,
          agentSpaceId: S.String,
          memberType: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListMemberships" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListMembershipsRequest" });
    case 5:
      return S.suspend(() => S.Struct({ username: S.String, email: S.String })).annotate({
        identifier: "UserMetadata",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ user: __S(261, __c32, 5) })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          membershipId: S.String,
          applicationId: S.String,
          agentSpaceId: S.String,
          memberType: S.String,
          config: S.optional(__S(155, __c19, 3)),
          metadata: S.optional(__S(262, __c32, 6)),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedBy: S.String,
        }),
      ).annotate({ identifier: "MembershipSummary" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(263, __c32, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ membershipSummaries: __S(264, __c33, 0), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListMembershipsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          pentestId: S.String,
          agentSpaceId: S.String,
          nextToken: S.optional(S.String),
          jobType: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListPentestJobsForPentest" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPentestJobsForPentestInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          pentestJobId: S.String,
          pentestId: S.String,
          title: S.optional(S.String),
          status: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          jobType: S.optional(S.String),
          reportUrl: S.optional(S.String),
        }),
      ).annotate({ identifier: "PentestJobSummary" });
    case 4:
      return S.Array(__S(267, __c33, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          pentestJobSummaries: S.optional(__S(268, __c33, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPentestJobsForPentestOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          maxResults: S.optional(S.Number),
          pentestJobId: S.optional(S.String),
          stepName: S.optional(S.String),
          categoryName: S.optional(S.String),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListPentestJobTasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListPentestJobTasksInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          taskId: S.String,
          pentestId: S.optional(S.String),
          pentestJobId: S.optional(S.String),
          agentSpaceId: S.optional(S.String),
          title: S.optional(S.String),
          riskType: S.optional(S.String),
          executionStatus: S.optional(S.String),
          taskHours: S.optional(S.Number),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "TaskSummary" });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(271, __c33, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          taskSummaries: S.optional(__S(272, __c34, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPentestJobTasksOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          agentSpaceId: S.String,
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListPentests" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListPentestsInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          pentestId: S.String,
          agentSpaceId: S.String,
          title: S.String,
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "PentestSummary" });
    case 4:
      return S.Array(__S(275, __c34, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          pentestSummaries: S.optional(__S(276, __c34, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListPentestsOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListPrivateConnections" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPrivateConnectionsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: S.String,
          status: S.String,
          resourceGatewayId: S.optional(S.String),
          hostAddress: S.optional(S.String),
          vpcId: S.optional(S.String),
          resourceConfigurationId: S.optional(S.String),
          certificateExpiryTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          dnsResolution: S.optional(S.String),
          failureMessage: S.optional(S.String),
          tags: S.optional(__S(139, __c17, 3)),
        }),
      ).annotate({ identifier: "PrivateConnectionSummary" });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(279, __c34, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ privateConnections: __S(280, __c35, 0), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListPrivateConnectionsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          managementType: S.optional(S.String),
          status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSecurityRequirementPackFilter",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          filter: S.optional(__S(282, __c35, 2)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListSecurityRequirementPacks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSecurityRequirementPacksInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          packId: S.String,
          name: S.String,
          description: S.optional(S.String),
          vendorName: S.optional(S.String),
          managementType: S.String,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "SecurityRequirementPackSummary",
      });
    case 5:
      return S.Array(__S(284, __c35, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          securityRequirementPackSummaries: __S(285, __c35, 5),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSecurityRequirementPacksOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          packId: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListSecurityRequirements" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSecurityRequirementsInput",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          packId: S.String,
          name: S.String,
          description: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "SecurityRequirementSummary",
      });
    case 1:
      return S.Array(__S(288, __c36, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          securityRequirementSummaries: __S(289, __c36, 1),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSecurityRequirementsOutput",
      });
    case 3:
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
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 4:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(139, __c17, 3)) })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListTargetDomains" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTargetDomainsInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          targetDomainId: S.String,
          domainName: S.String,
          verificationStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "TargetDomainSummary" });
    case 7:
      return S.Array(__S(294, __c36, 6));
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          targetDomainSummaries: S.optional(__S(295, __c36, 7)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListTargetDomainsOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          threatModelId: S.String,
          agentSpaceId: S.String,
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListThreatModelJobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListThreatModelJobsInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          threatModelJobId: S.String,
          threatModelId: S.String,
          agentSpaceId: S.optional(S.String),
          title: S.optional(S.String),
          status: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ThreatModelJobSummary" });
    case 3:
      return S.Array(__S(298, __c37, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          threatModelJobSummaries: S.optional(__S(299, __c37, 3)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListThreatModelJobsOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          maxResults: S.optional(S.Number),
          threatModelJobId: S.String,
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListThreatModelJobTasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListThreatModelJobTasksInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          taskId: S.String,
          threatModelId: S.optional(S.String),
          threatModelJobId: S.optional(S.String),
          agentSpaceId: S.optional(S.String),
          title: S.optional(S.String),
          executionStatus: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "ThreatModelJobTaskSummary",
      });
    case 7:
      return S.Array(__S(302, __c37, 6));
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          threatModelJobTaskSummaries: S.optional(__S(303, __c37, 7)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListThreatModelJobTasksOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          agentSpaceId: S.String,
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListThreatModels" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListThreatModelsInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          threatModelId: S.String,
          agentSpaceId: S.String,
          title: S.String,
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ThreatModelSummary" });
    case 3:
      return S.Array(__S(306, __c38, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          threatModelSummaries: S.optional(__S(307, __c38, 3)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListThreatModelsOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          threatJobId: S.String,
          agentSpaceId: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListThreats" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListThreatsInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          threatId: S.optional(S.String),
          threatJobId: S.optional(S.String),
          title: S.optional(S.String),
          statement: S.optional(S.String),
          severity: S.optional(S.String),
          status: S.optional(S.String),
          stride: S.optional(__S(32, __c4, 0)),
          createdBy: S.optional(S.String),
          updatedBy: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ThreatSummary" });
    case 7:
      return S.Array(__S(310, __c38, 6));
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ threats: S.optional(__S(311, __c38, 7)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListThreatsOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          pentestJobId: S.optional(S.String),
          codeReviewJobId: S.optional(S.String),
          findingIds: __S(10, __c1, 2),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartCodeRemediation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartCodeRemediationInput",
      });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ s3Uri: S.String })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          codeReviewId: S.String,
          diffSource: S.optional(__S(314, __c39, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartCodeReviewJob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartCodeReviewJobInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          title: S.optional(S.String),
          status: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          codeReviewId: S.String,
          codeReviewJobId: S.String,
          agentSpaceId: S.optional(S.String),
        }),
      ).annotate({ identifier: "StartCodeReviewJobOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          pentestId: S.String,
          jobType: S.optional(S.String),
          selectedFindingIds: S.optional(__S(10, __c1, 2)),
          scopeChanges: S.optional(__S(98, __c12, 2)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StartPentestJob" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartPentestJobInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          title: S.optional(S.String),
          status: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          pentestId: S.optional(S.String),
          pentestJobId: S.optional(S.String),
          agentSpaceId: S.optional(S.String),
        }),
      ).annotate({ identifier: "StartPentestJobOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ agentSpaceId: S.String, threatModelId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartThreatModelJob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartThreatModelJobInput" });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          title: S.optional(S.String),
          status: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          threatModelId: S.optional(S.String),
          threatModelJobId: S.String,
          agentSpaceId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StartThreatModelJobOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ agentSpaceId: S.String, codeReviewJobId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StopCodeReviewJob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopCodeReviewJobInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ agentSpaceId: S.String, pentestJobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StopPentestJob" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopPentestJobInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ agentSpaceId: S.String, threatModelJobId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StopThreatModelJob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopThreatModelJobInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(139, __c17, 3),
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
      ).annotate({ identifier: "TagResourceInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(10, __c1, 2).pipe(T.HttpQuery("tagKeys")),
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
      ).annotate({ identifier: "UntagResourceInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          awsResources: S.optional(__S(56, __c7, 0)),
          targetDomainIds: S.optional(__S(10, __c1, 2)),
          codeReviewSettings: S.optional(__S(57, __c7, 1)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdateAgentSpace" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateAgentSpaceInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          name: S.String,
          description: S.optional(S.String),
          awsResources: S.optional(__S(56, __c7, 0)),
          targetDomainIds: S.optional(__S(10, __c1, 2)),
          codeReviewSettings: S.optional(__S(57, __c7, 1)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "UpdateAgentSpaceOutput" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String,
          roleArn: S.optional(S.String),
          defaultKmsKeyId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateApplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateApplicationRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          codeReviewId: S.String,
          agentSpaceId: S.String,
          title: S.optional(S.String),
          assets: S.optional(__S(31, __c3, 7)),
          serviceRole: S.optional(S.String),
          logConfig: S.optional(__S(33, __c4, 1)),
          codeRemediationStrategy: S.optional(S.String),
          validationMode: S.optional(S.String),
          maxTaskHours: S.optional(S.Number),
          reportDestination: S.optional(__S(40, __c5, 0)),
          reportFilters: S.optional(__S(41, __c5, 1)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdateCodeReview" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateCodeReviewInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          findingId: S.String,
          agentSpaceId: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          riskType: S.optional(S.String),
          riskLevel: S.optional(S.String),
          riskScore: S.optional(S.String),
          attackScript: S.optional(S.String),
          reasoning: S.optional(S.String),
          status: S.optional(S.String),
          customerNote: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdateFinding" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateFindingInput" });
    case 3:
      return S.suspend(() => S.Struct({ name: S.String, owner: S.String })).annotate({
        identifier: "GitHubRepositoryResource",
      });
    case 4:
      return S.suspend(() => S.Struct({ name: S.String, namespace: S.String })).annotate({
        identifier: "GitLabRepositoryResource",
      });
    case 5:
      return S.suspend(() => S.Struct({ name: S.String, workspace: S.String })).annotate({
        identifier: "BitbucketRepositoryResource",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          spaceKey: S.String,
          pageId: S.String,
          title: S.optional(S.String),
          spaceTitle: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ConfluenceDocumentResource",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ name: S.String, organization: S.String, project: S.optional(S.String) }),
      ).annotate({
        identifier: "AzureDevOpsRepositoryResource",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ githubRepository: __S(331, __c41, 3) }),
        /*@__PURE__*/ S.Struct({ gitlabRepository: __S(332, __c41, 4) }),
        /*@__PURE__*/ S.Struct({ bitbucketRepository: __S(333, __c41, 5) }),
        /*@__PURE__*/ S.Struct({ confluenceDocument: __S(334, __c41, 6) }),
        /*@__PURE__*/ S.Struct({ azureDevOpsRepository: __S(335, __c41, 7) }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          resource: __S(336, __c42, 0),
          capabilities: S.optional(__S(251, __c31, 3)),
        }),
      ).annotate({
        identifier: "IntegratedResourceInputItem",
      });
    case 2:
      return S.Array(__S(337, __c42, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          integrationId: S.String,
          items: __S(338, __c42, 2),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateIntegratedResources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateIntegratedResourcesInput",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "UpdateIntegratedResourcesOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ integrationId: S.String, webhookAction: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateIntegration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateIntegrationInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          integrationId: S.String,
          webhookUrl: S.optional(S.String),
          secret: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "UpdateIntegrationOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          pentestId: S.String,
          agentSpaceId: S.String,
          title: S.optional(S.String),
          assets: S.optional(__S(31, __c3, 7)),
          excludeRiskTypes: S.optional(__S(32, __c4, 0)),
          serviceRole: S.optional(S.String),
          logConfig: S.optional(__S(33, __c4, 1)),
          vpcConfig: S.optional(__S(34, __c4, 2)),
          networkTrafficConfig: S.optional(__S(39, __c4, 7)),
          codeRemediationStrategy: S.optional(S.String),
          disableManagedSkills: S.optional(__S(32, __c4, 0)),
          maxTaskHours: S.optional(S.Number),
          reportDestination: S.optional(__S(40, __c5, 0)),
          reportFilters: S.optional(__S(41, __c5, 1)),
          cicdConfiguration: S.optional(__S(42, __c5, 2)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdatePentest" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdatePentestInput" });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ privateConnectionName: S.String, certificate: SensitiveString }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdatePrivateConnectionCertificate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdatePrivateConnectionCertificateInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          packId: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          status: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateSecurityRequirementPack" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSecurityRequirementPackInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          packId: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateSecurityRequirementPackOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ targetDomainId: S.String, verificationMethod: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateTargetDomain" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateTargetDomainInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          threatId: S.String,
          agentSpaceId: S.String,
          title: S.optional(S.String),
          status: S.optional(S.String),
          comments: S.optional(S.String),
          statement: S.optional(S.String),
          severity: S.optional(S.String),
          threatSource: S.optional(S.String),
          prerequisites: S.optional(S.String),
          threatAction: S.optional(S.String),
          threatImpact: S.optional(S.String),
          impactedGoal: S.optional(__S(10, __c1, 2)),
          impactedAssets: S.optional(__S(10, __c1, 2)),
          anchor: S.optional(__S(129, __c16, 1)),
          evidence: S.optional(__S(131, __c16, 3)),
          recommendation: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdateThreat" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateThreatInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          threatModelId: S.String,
          agentSpaceId: S.String,
          title: S.optional(S.String),
          description: S.optional(S.String),
          assets: S.optional(__S(31, __c3, 7)),
          scopeDocs: S.optional(__S(23, __c2, 7)),
          serviceRole: S.optional(S.String),
          logConfig: S.optional(__S(33, __c4, 1)),
          reportDestination: S.optional(__S(40, __c5, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateThreatModel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateThreatModelInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ targetDomainId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/VerifyTargetDomain" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "VerifyTargetDomainInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          targetDomainId: S.optional(S.String),
          domainName: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          verifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          status: S.optional(S.String),
          verificationStatusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "VerifyTargetDomainOutput" });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ path: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 1:
      return S.Array(__S(352, __c44, 0));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
