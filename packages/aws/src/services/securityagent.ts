import * as HttpClient from "effect/unstable/http/HttpClient";
import * as S from "effect/Schema";
import * as stream from "effect/Stream";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import type { Region } from "../region.ts";
const svc = T.AwsApiService({
  sdkId: "SecurityAgent",
  serviceShapeName: "SecurityAgent",
});
const auth = T.AwsAuthSigv4({ name: "securityagent" });
const ver = T.ServiceVersion("2025-09-06");
const proto = T.AwsProtocolsRestJson1();
const rules = T.EndpointResolver((p, _) => {
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
      return err(
        "Invalid Configuration: FIPS and custom endpoint are not supported",
      );
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

//# Newtypes
export type AgentSpaceId = string;
export type ArtifactId = string;
export type ServiceRole = string;
export type VpcArn = string;
export type SecurityGroupArn = string;
export type SubnetArn = string;
export type ApplicationId = string;
export type MembershipId = string;
export type Location = string;
export type CsrfState = string;
export type NextToken = string;
export type MaxResults = number;
export type IntegrationId = string;
export type ProviderResourceName = string;
export type ProviderResourceId = string;
export type GitHubOwner = string;
export type SensitiveEmail = string;
export type ResourceArn = string;
export type TagKey = string;
export type TagValue = string;
export type TargetDomainId = string;
export type AgentName = string;
export type LogGroupArn = string;
export type S3BucketArn = string;
export type SecretArn = string;
export type LambdaFunctionArn = string;
export type KmsKeyId = string;
export type IdCInstanceArn = string;
export type RoleArn = string;
export type DefaultKmsKeyId = string;
export type ApplicationDomain = string;
export type IdCApplicationArn = string;
export type AuthCode = string;

//# Schemas
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
export const ArtifactType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface AddArtifactInput {
  agentSpaceId: string;
  artifactContent: Uint8Array;
  artifactType: ArtifactType;
  fileName: string;
}
export const AddArtifactInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String,
    artifactContent: T.Blob,
    artifactType: ArtifactType,
    fileName: S.String,
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/AddArtifact" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "AddArtifactInput",
}) as any as S.Schema<AddArtifactInput>;
export interface AddArtifactOutput {
  artifactId: string;
}
export const AddArtifactOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ artifactId: S.String }),
).annotate({
  identifier: "AddArtifactOutput",
}) as any as S.Schema<AddArtifactOutput>;
export interface ValidationExceptionField {
  path: string;
  message: string;
}
export const ValidationExceptionField = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ path: S.String, message: S.String }),
).annotate({
  identifier: "ValidationExceptionField",
}) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
export const ValidationExceptionFieldList = /*@__PURE__*/ /*#__PURE__*/ S.Array(
  ValidationExceptionField,
);
export type PentestIdList = string[];
export const PentestIdList = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface BatchDeletePentestsInput {
  pentestIds: string[];
  agentSpaceId: string;
}
export const BatchDeletePentestsInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({ pentestIds: PentestIdList, agentSpaceId: S.String }).pipe(
      T.all(
        T.Http({ method: "POST", uri: "/BatchDeletePentests" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "BatchDeletePentestsInput",
}) as any as S.Schema<BatchDeletePentestsInput>;
export interface Endpoint {
  uri?: string;
}
export const Endpoint = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ uri: S.optional(S.String) }),
).annotate({ identifier: "Endpoint" }) as any as S.Schema<Endpoint>;
export type EndpointList = Endpoint[];
export const EndpointList = /*@__PURE__*/ /*#__PURE__*/ S.Array(Endpoint);
export type UriList = string[];
export const UriList = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export type AuthenticationProviderType =
  | "SECRETS_MANAGER"
  | "AWS_LAMBDA"
  | "AWS_IAM_ROLE"
  | "AWS_INTERNAL"
  | (string & {});
export const AuthenticationProviderType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface Authentication {
  providerType?: AuthenticationProviderType;
  value?: string;
}
export const Authentication = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    providerType: S.optional(AuthenticationProviderType),
    value: S.optional(S.String),
  }),
).annotate({ identifier: "Authentication" }) as any as S.Schema<Authentication>;
export interface Actor {
  identifier?: string;
  uris?: string[];
  authentication?: Authentication;
  description?: string;
}
export const Actor = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    identifier: S.optional(S.String),
    uris: S.optional(UriList),
    authentication: S.optional(Authentication),
    description: S.optional(S.String),
  }),
).annotate({ identifier: "Actor" }) as any as S.Schema<Actor>;
export type ActorList = Actor[];
export const ActorList = /*@__PURE__*/ /*#__PURE__*/ S.Array(Actor);
export interface DocumentInfo {
  s3Location?: string;
  artifactId?: string;
}
export const DocumentInfo = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    s3Location: S.optional(S.String),
    artifactId: S.optional(S.String),
  }),
).annotate({ identifier: "DocumentInfo" }) as any as S.Schema<DocumentInfo>;
export type DocumentList = DocumentInfo[];
export const DocumentList = /*@__PURE__*/ /*#__PURE__*/ S.Array(DocumentInfo);
export interface SourceCodeRepository {
  s3Location?: string;
}
export const SourceCodeRepository = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ s3Location: S.optional(S.String) }),
).annotate({
  identifier: "SourceCodeRepository",
}) as any as S.Schema<SourceCodeRepository>;
export type SourceCodeRepositoryList = SourceCodeRepository[];
export const SourceCodeRepositoryList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(SourceCodeRepository);
export interface IntegratedRepository {
  integrationId: string;
  providerResourceId: string;
}
export const IntegratedRepository = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ integrationId: S.String, providerResourceId: S.String }),
).annotate({
  identifier: "IntegratedRepository",
}) as any as S.Schema<IntegratedRepository>;
export type IntegratedRepositoryList = IntegratedRepository[];
export const IntegratedRepositoryList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(IntegratedRepository);
export interface Assets {
  endpoints?: Endpoint[];
  actors?: Actor[];
  documents?: DocumentInfo[];
  sourceCode?: SourceCodeRepository[];
  integratedRepositories?: IntegratedRepository[];
}
export const Assets = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    endpoints: S.optional(EndpointList),
    actors: S.optional(ActorList),
    documents: S.optional(DocumentList),
    sourceCode: S.optional(SourceCodeRepositoryList),
    integratedRepositories: S.optional(IntegratedRepositoryList),
  }),
).annotate({ identifier: "Assets" }) as any as S.Schema<Assets>;
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
export const RiskType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type RiskTypeList = RiskType[];
export const RiskTypeList = /*@__PURE__*/ /*#__PURE__*/ S.Array(RiskType);
export interface CloudWatchLog {
  logGroup?: string;
  logStream?: string;
}
export const CloudWatchLog = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ logGroup: S.optional(S.String), logStream: S.optional(S.String) }),
).annotate({ identifier: "CloudWatchLog" }) as any as S.Schema<CloudWatchLog>;
export type SecurityGroupArns = string[];
export const SecurityGroupArns = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export type SubnetArns = string[];
export const SubnetArns = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface VpcConfig {
  vpcArn?: string;
  securityGroupArns?: string[];
  subnetArns?: string[];
}
export const VpcConfig = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    vpcArn: S.optional(S.String),
    securityGroupArns: S.optional(SecurityGroupArns),
    subnetArns: S.optional(SubnetArns),
  }),
).annotate({ identifier: "VpcConfig" }) as any as S.Schema<VpcConfig>;
export type NetworkTrafficRuleEffect = "ALLOW" | "DENY" | (string & {});
export const NetworkTrafficRuleEffect = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type NetworkTrafficRuleType = "URL" | (string & {});
export const NetworkTrafficRuleType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface NetworkTrafficRule {
  effect?: NetworkTrafficRuleEffect;
  pattern?: string;
  networkTrafficRuleType?: NetworkTrafficRuleType;
}
export const NetworkTrafficRule = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    effect: S.optional(NetworkTrafficRuleEffect),
    pattern: S.optional(S.String),
    networkTrafficRuleType: S.optional(NetworkTrafficRuleType),
  }),
).annotate({
  identifier: "NetworkTrafficRule",
}) as any as S.Schema<NetworkTrafficRule>;
export type NetworkTrafficRuleList = NetworkTrafficRule[];
export const NetworkTrafficRuleList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(NetworkTrafficRule);
export interface CustomHeader {
  name?: string;
  value?: string;
}
export const CustomHeader = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.optional(S.String), value: S.optional(S.String) }),
).annotate({ identifier: "CustomHeader" }) as any as S.Schema<CustomHeader>;
export type CustomHeaderList = CustomHeader[];
export const CustomHeaderList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(CustomHeader);
export interface NetworkTrafficConfig {
  rules?: NetworkTrafficRule[];
  customHeaders?: CustomHeader[];
}
export const NetworkTrafficConfig = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    rules: S.optional(NetworkTrafficRuleList),
    customHeaders: S.optional(CustomHeaderList),
  }),
).annotate({
  identifier: "NetworkTrafficConfig",
}) as any as S.Schema<NetworkTrafficConfig>;
export type CodeRemediationStrategy = "AUTOMATIC" | "DISABLED" | (string & {});
export const CodeRemediationStrategy = /*@__PURE__*/ /*#__PURE__*/ S.String;
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
  createdAt?: Date;
  updatedAt?: Date;
}
export const Pentest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    pentestId: S.String,
    agentSpaceId: S.String,
    title: S.String,
    assets: Assets,
    excludeRiskTypes: S.optional(RiskTypeList),
    serviceRole: S.optional(S.String),
    logConfig: S.optional(CloudWatchLog),
    vpcConfig: S.optional(VpcConfig),
    networkTrafficConfig: S.optional(NetworkTrafficConfig),
    codeRemediationStrategy: S.optional(CodeRemediationStrategy),
    createdAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
  }),
).annotate({ identifier: "Pentest" }) as any as S.Schema<Pentest>;
export type PentestList = Pentest[];
export const PentestList = /*@__PURE__*/ /*#__PURE__*/ S.Array(Pentest);
export interface DeletePentestFailure {
  pentestId?: string;
  reason?: string;
}
export const DeletePentestFailure = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ pentestId: S.optional(S.String), reason: S.optional(S.String) }),
).annotate({
  identifier: "DeletePentestFailure",
}) as any as S.Schema<DeletePentestFailure>;
export type DeletePentestFailureList = DeletePentestFailure[];
export const DeletePentestFailureList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(DeletePentestFailure);
export interface BatchDeletePentestsOutput {
  deleted?: Pentest[];
  failed?: DeletePentestFailure[];
}
export const BatchDeletePentestsOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      deleted: S.optional(PentestList),
      failed: S.optional(DeletePentestFailureList),
    }),
).annotate({
  identifier: "BatchDeletePentestsOutput",
}) as any as S.Schema<BatchDeletePentestsOutput>;
export type ArtifactIds = string[];
export const ArtifactIds = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface BatchGetArtifactMetadataInput {
  agentSpaceId: string;
  artifactIds: string[];
}
export const BatchGetArtifactMetadataInput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ agentSpaceId: S.String, artifactIds: ArtifactIds }).pipe(
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
  }) as any as S.Schema<BatchGetArtifactMetadataInput>;
export interface ArtifactMetadataItem {
  agentSpaceId: string;
  artifactId: string;
  fileName: string;
  updatedAt: Date;
}
export const ArtifactMetadataItem = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String,
    artifactId: S.String,
    fileName: S.String,
    updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
  }),
).annotate({
  identifier: "ArtifactMetadataItem",
}) as any as S.Schema<ArtifactMetadataItem>;
export type ArtifactMetadataList = ArtifactMetadataItem[];
export const ArtifactMetadataList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(ArtifactMetadataItem);
export interface BatchGetArtifactMetadataOutput {
  artifactMetadataList: ArtifactMetadataItem[];
}
export const BatchGetArtifactMetadataOutput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ artifactMetadataList: ArtifactMetadataList }),
  ).annotate({
    identifier: "BatchGetArtifactMetadataOutput",
  }) as any as S.Schema<BatchGetArtifactMetadataOutput>;
export type FindingIdList = string[];
export const FindingIdList = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface BatchGetFindingsInput {
  findingIds: string[];
  agentSpaceId: string;
}
export const BatchGetFindingsInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ findingIds: FindingIdList, agentSpaceId: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/BatchGetFindings" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "BatchGetFindingsInput",
}) as any as S.Schema<BatchGetFindingsInput>;
export type FindingStatus =
  | "ACTIVE"
  | "RESOLVED"
  | "ACCEPTED"
  | "FALSE_POSITIVE"
  | (string & {});
export const FindingStatus = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type RiskLevel =
  | "UNKNOWN"
  | "INFORMATIONAL"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "CRITICAL"
  | (string & {});
export const RiskLevel = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type ConfidenceLevel =
  | "FALSE_POSITIVE"
  | "UNCONFIRMED"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | (string & {});
export const ConfidenceLevel = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type CodeRemediationTaskStatus =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | (string & {});
export const CodeRemediationTaskStatus = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface CodeRemediationTaskDetails {
  repoName?: string;
  codeDiffLink?: string;
  pullRequestLink?: string;
}
export const CodeRemediationTaskDetails = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      repoName: S.optional(S.String),
      codeDiffLink: S.optional(S.String),
      pullRequestLink: S.optional(S.String),
    }),
).annotate({
  identifier: "CodeRemediationTaskDetails",
}) as any as S.Schema<CodeRemediationTaskDetails>;
export type CodeRemediationTaskDetailsList = CodeRemediationTaskDetails[];
export const CodeRemediationTaskDetailsList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(CodeRemediationTaskDetails);
export interface CodeRemediationTask {
  status: CodeRemediationTaskStatus;
  statusReason?: string;
  taskDetails?: CodeRemediationTaskDetails[];
}
export const CodeRemediationTask = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    status: CodeRemediationTaskStatus,
    statusReason: S.optional(S.String),
    taskDetails: S.optional(CodeRemediationTaskDetailsList),
  }),
).annotate({
  identifier: "CodeRemediationTask",
}) as any as S.Schema<CodeRemediationTask>;
export interface Finding {
  findingId: string;
  agentSpaceId: string;
  pentestId?: string;
  pentestJobId?: string;
  taskId?: string;
  name?: string;
  description?: string;
  status?: FindingStatus;
  riskType?: string;
  riskLevel?: RiskLevel;
  riskScore?: string;
  reasoning?: string;
  confidence?: ConfidenceLevel;
  attackScript?: string;
  codeRemediationTask?: CodeRemediationTask;
  lastUpdatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export const Finding = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    findingId: S.String,
    agentSpaceId: S.String,
    pentestId: S.optional(S.String),
    pentestJobId: S.optional(S.String),
    taskId: S.optional(S.String),
    name: S.optional(S.String),
    description: S.optional(S.String),
    status: S.optional(FindingStatus),
    riskType: S.optional(S.String),
    riskLevel: S.optional(RiskLevel),
    riskScore: S.optional(S.String),
    reasoning: S.optional(S.String),
    confidence: S.optional(ConfidenceLevel),
    attackScript: S.optional(S.String),
    codeRemediationTask: S.optional(CodeRemediationTask),
    lastUpdatedBy: S.optional(S.String),
    createdAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
  }),
).annotate({ identifier: "Finding" }) as any as S.Schema<Finding>;
export type FindingList = Finding[];
export const FindingList = /*@__PURE__*/ /*#__PURE__*/ S.Array(Finding);
export interface BatchGetFindingsOutput {
  findings?: Finding[];
  notFound?: string[];
}
export const BatchGetFindingsOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      findings: S.optional(FindingList),
      notFound: S.optional(FindingIdList),
    }),
).annotate({
  identifier: "BatchGetFindingsOutput",
}) as any as S.Schema<BatchGetFindingsOutput>;
export type PentestJobIdList = string[];
export const PentestJobIdList = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface BatchGetPentestJobsInput {
  pentestJobIds: string[];
  agentSpaceId: string;
}
export const BatchGetPentestJobsInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({ pentestJobIds: PentestJobIdList, agentSpaceId: S.String }).pipe(
      T.all(
        T.Http({ method: "POST", uri: "/BatchGetPentestJobs" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "BatchGetPentestJobsInput",
}) as any as S.Schema<BatchGetPentestJobsInput>;
export type JobStatus =
  | "IN_PROGRESS"
  | "STOPPING"
  | "STOPPED"
  | "FAILED"
  | "COMPLETED"
  | (string & {});
export const JobStatus = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type StepName =
  | "PREFLIGHT"
  | "STATIC_ANALYSIS"
  | "PENTEST"
  | "FINALIZING"
  | (string & {});
export const StepName = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type StepStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "STOPPED"
  | (string & {});
export const StepStatus = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface Step {
  name?: StepName;
  status?: StepStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
export const Step = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.optional(StepName),
    status: S.optional(StepStatus),
    createdAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
  }),
).annotate({ identifier: "Step" }) as any as S.Schema<Step>;
export type StepList = Step[];
export const StepList = /*@__PURE__*/ /*#__PURE__*/ S.Array(Step);
export type ContextType =
  | "ERROR"
  | "CLIENT_ERROR"
  | "WARNING"
  | "INFO"
  | (string & {});
export const ContextType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface ExecutionContext {
  contextType?: ContextType;
  context?: string;
  timestamp?: Date;
}
export const ExecutionContext = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    contextType: S.optional(ContextType),
    context: S.optional(S.String),
    timestamp: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
  }),
).annotate({
  identifier: "ExecutionContext",
}) as any as S.Schema<ExecutionContext>;
export type ExecutionContextList = ExecutionContext[];
export const ExecutionContextList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(ExecutionContext);
export type ErrorCode =
  | "CLIENT_ERROR"
  | "INTERNAL_ERROR"
  | "STOPPED_BY_USER"
  | (string & {});
export const ErrorCode = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface ErrorInformation {
  code?: ErrorCode;
  message?: string;
}
export const ErrorInformation = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ code: S.optional(ErrorCode), message: S.optional(S.String) }),
).annotate({
  identifier: "ErrorInformation",
}) as any as S.Schema<ErrorInformation>;
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
  codeRemediationStrategy?: CodeRemediationStrategy;
  createdAt?: Date;
  updatedAt?: Date;
}
export const PentestJob = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    pentestJobId: S.optional(S.String),
    pentestId: S.optional(S.String),
    title: S.optional(S.String),
    overview: S.optional(S.String),
    status: S.optional(JobStatus),
    endpoints: S.optional(EndpointList),
    actors: S.optional(ActorList),
    documents: S.optional(DocumentList),
    sourceCode: S.optional(SourceCodeRepositoryList),
    excludePaths: S.optional(EndpointList),
    allowedDomains: S.optional(EndpointList),
    excludeRiskTypes: S.optional(RiskTypeList),
    steps: S.optional(StepList),
    executionContext: S.optional(ExecutionContextList),
    serviceRole: S.optional(S.String),
    logConfig: S.optional(CloudWatchLog),
    vpcConfig: S.optional(VpcConfig),
    networkTrafficConfig: S.optional(NetworkTrafficConfig),
    errorInformation: S.optional(ErrorInformation),
    integratedRepositories: S.optional(IntegratedRepositoryList),
    codeRemediationStrategy: S.optional(CodeRemediationStrategy),
    createdAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
  }),
).annotate({ identifier: "PentestJob" }) as any as S.Schema<PentestJob>;
export type PentestJobList = PentestJob[];
export const PentestJobList = /*@__PURE__*/ /*#__PURE__*/ S.Array(PentestJob);
export interface BatchGetPentestJobsOutput {
  pentestJobs?: PentestJob[];
  notFound?: string[];
}
export const BatchGetPentestJobsOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      pentestJobs: S.optional(PentestJobList),
      notFound: S.optional(PentestJobIdList),
    }),
).annotate({
  identifier: "BatchGetPentestJobsOutput",
}) as any as S.Schema<BatchGetPentestJobsOutput>;
export type TaskIdList = string[];
export const TaskIdList = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface BatchGetPentestJobTasksInput {
  agentSpaceId: string;
  taskIds: string[];
}
export const BatchGetPentestJobTasksInput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ agentSpaceId: S.String, taskIds: TaskIdList }).pipe(
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
  }) as any as S.Schema<BatchGetPentestJobTasksInput>;
export interface Category {
  name?: string;
  isPrimary?: boolean;
}
export const Category = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.optional(S.String), isPrimary: S.optional(S.Boolean) }),
).annotate({ identifier: "Category" }) as any as S.Schema<Category>;
export type CategoryList = Category[];
export const CategoryList = /*@__PURE__*/ /*#__PURE__*/ S.Array(Category);
export type TaskExecutionStatus =
  | "IN_PROGRESS"
  | "ABORTED"
  | "COMPLETED"
  | "INTERNAL_ERROR"
  | "FAILED"
  | (string & {});
export const TaskExecutionStatus = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type LogType = "CLOUDWATCH" | (string & {});
export const LogType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface LogLocation {
  logType?: LogType;
  cloudWatchLog?: CloudWatchLog;
}
export const LogLocation = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    logType: S.optional(LogType),
    cloudWatchLog: S.optional(CloudWatchLog),
  }),
).annotate({ identifier: "LogLocation" }) as any as S.Schema<LogLocation>;
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
  createdAt?: Date;
  updatedAt?: Date;
}
export const Task = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    taskId: S.String,
    pentestId: S.optional(S.String),
    pentestJobId: S.optional(S.String),
    agentSpaceId: S.optional(S.String),
    title: S.optional(S.String),
    description: S.optional(S.String),
    categories: S.optional(CategoryList),
    riskType: S.optional(RiskType),
    targetEndpoint: S.optional(Endpoint),
    executionStatus: S.optional(TaskExecutionStatus),
    logsLocation: S.optional(LogLocation),
    createdAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
  }),
).annotate({ identifier: "Task" }) as any as S.Schema<Task>;
export type TaskList = Task[];
export const TaskList = /*@__PURE__*/ /*#__PURE__*/ S.Array(Task);
export interface BatchGetPentestJobTasksOutput {
  tasks?: Task[];
  notFound?: string[];
}
export const BatchGetPentestJobTasksOutput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ tasks: S.optional(TaskList), notFound: S.optional(TaskIdList) }),
  ).annotate({
    identifier: "BatchGetPentestJobTasksOutput",
  }) as any as S.Schema<BatchGetPentestJobTasksOutput>;
export interface BatchGetPentestsInput {
  pentestIds: string[];
  agentSpaceId: string;
}
export const BatchGetPentestsInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ pentestIds: PentestIdList, agentSpaceId: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/BatchGetPentests" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "BatchGetPentestsInput",
}) as any as S.Schema<BatchGetPentestsInput>;
export interface BatchGetPentestsOutput {
  pentests?: Pentest[];
  notFound?: string[];
}
export const BatchGetPentestsOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      pentests: S.optional(PentestList),
      notFound: S.optional(PentestIdList),
    }),
).annotate({
  identifier: "BatchGetPentestsOutput",
}) as any as S.Schema<BatchGetPentestsOutput>;
export type MembershipType = "USER" | (string & {});
export const MembershipType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export type UserRole = "MEMBER" | (string & {});
export const UserRole = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface UserConfig {
  role?: UserRole;
}
export const UserConfig = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ role: S.optional(UserRole) }),
).annotate({ identifier: "UserConfig" }) as any as S.Schema<UserConfig>;
export type MembershipConfig = { user: UserConfig };
export const MembershipConfig = /*@__PURE__*/ /*#__PURE__*/ S.Union([
  S.Struct({ user: UserConfig }),
]);
export interface CreateMembershipRequest {
  applicationId: string;
  agentSpaceId: string;
  membershipId: string;
  memberType: MembershipType;
  config?: MembershipConfig;
}
export const CreateMembershipRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      applicationId: S.String,
      agentSpaceId: S.String,
      membershipId: S.String,
      memberType: MembershipType,
      config: S.optional(MembershipConfig),
    }).pipe(
      T.all(
        T.Http({ method: "POST", uri: "/CreateMembership" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "CreateMembershipRequest",
}) as any as S.Schema<CreateMembershipRequest>;
export interface CreateMembershipResponse {}
export const CreateMembershipResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({}),
).annotate({
  identifier: "CreateMembershipResponse",
}) as any as S.Schema<CreateMembershipResponse>;
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
}
export const CreatePentestInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    title: S.String,
    agentSpaceId: S.String,
    assets: S.optional(Assets),
    excludeRiskTypes: S.optional(RiskTypeList),
    serviceRole: S.optional(S.String),
    logConfig: S.optional(CloudWatchLog),
    vpcConfig: S.optional(VpcConfig),
    networkTrafficConfig: S.optional(NetworkTrafficConfig),
    codeRemediationStrategy: S.optional(CodeRemediationStrategy),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/CreatePentest" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreatePentestInput",
}) as any as S.Schema<CreatePentestInput>;
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
}
export const CreatePentestOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    pentestId: S.optional(S.String),
    title: S.optional(S.String),
    createdAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    assets: S.optional(Assets),
    excludeRiskTypes: S.optional(RiskTypeList),
    serviceRole: S.optional(S.String),
    logConfig: S.optional(CloudWatchLog),
    agentSpaceId: S.optional(S.String),
  }),
).annotate({
  identifier: "CreatePentestOutput",
}) as any as S.Schema<CreatePentestOutput>;
export interface DeleteArtifactInput {
  agentSpaceId: string;
  artifactId: string;
}
export const DeleteArtifactInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ agentSpaceId: S.String, artifactId: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/DeleteArtifact" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteArtifactInput",
}) as any as S.Schema<DeleteArtifactInput>;
export interface DeleteArtifactOutput {}
export const DeleteArtifactOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({}),
).annotate({
  identifier: "DeleteArtifactOutput",
}) as any as S.Schema<DeleteArtifactOutput>;
export interface DeleteMembershipRequest {
  applicationId: string;
  agentSpaceId: string;
  membershipId: string;
  memberType?: MembershipType;
}
export const DeleteMembershipRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      applicationId: S.String,
      agentSpaceId: S.String,
      membershipId: S.String,
      memberType: S.optional(MembershipType),
    }).pipe(
      T.all(
        T.Http({ method: "POST", uri: "/DeleteMembership" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "DeleteMembershipRequest",
}) as any as S.Schema<DeleteMembershipRequest>;
export interface DeleteMembershipResponse {}
export const DeleteMembershipResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({}),
).annotate({
  identifier: "DeleteMembershipResponse",
}) as any as S.Schema<DeleteMembershipResponse>;
export interface GetArtifactInput {
  agentSpaceId: string;
  artifactId: string;
}
export const GetArtifactInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ agentSpaceId: S.String, artifactId: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/GetArtifact" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetArtifactInput",
}) as any as S.Schema<GetArtifactInput>;
export interface Artifact {
  contents: string;
  type: ArtifactType;
}
export const Artifact = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ contents: S.String, type: ArtifactType }),
).annotate({ identifier: "Artifact" }) as any as S.Schema<Artifact>;
export interface GetArtifactOutput {
  agentSpaceId: string;
  artifactId: string;
  artifact: Artifact;
  fileName: string;
  updatedAt: Date;
}
export const GetArtifactOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String,
    artifactId: S.String,
    artifact: Artifact,
    fileName: S.String,
    updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
  }),
).annotate({
  identifier: "GetArtifactOutput",
}) as any as S.Schema<GetArtifactOutput>;
export type Provider = "GITHUB" | (string & {});
export const Provider = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface InitiateProviderRegistrationInput {
  provider: Provider;
}
export const InitiateProviderRegistrationInput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ provider: Provider }).pipe(
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
  }) as any as S.Schema<InitiateProviderRegistrationInput>;
export interface InitiateProviderRegistrationOutput {
  redirectTo: string;
  csrfState: string;
}
export const InitiateProviderRegistrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({ redirectTo: S.String, csrfState: S.String }),
  ).annotate({
    identifier: "InitiateProviderRegistrationOutput",
  }) as any as S.Schema<InitiateProviderRegistrationOutput>;
export interface ListArtifactsInput {
  agentSpaceId: string;
  nextToken?: string;
  maxResults?: number;
}
export const ListArtifactsInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String,
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/ListArtifacts" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListArtifactsInput",
}) as any as S.Schema<ListArtifactsInput>;
export interface ArtifactSummary {
  artifactId: string;
  fileName: string;
  artifactType: ArtifactType;
}
export const ArtifactSummary = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    artifactId: S.String,
    fileName: S.String,
    artifactType: ArtifactType,
  }),
).annotate({
  identifier: "ArtifactSummary",
}) as any as S.Schema<ArtifactSummary>;
export type ArtifactSummaryList = ArtifactSummary[];
export const ArtifactSummaryList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(ArtifactSummary);
export interface ListArtifactsOutput {
  artifactSummaries: ArtifactSummary[];
  nextToken?: string;
}
export const ListArtifactsOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    artifactSummaries: ArtifactSummaryList,
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListArtifactsOutput",
}) as any as S.Schema<ListArtifactsOutput>;
export interface ListDiscoveredEndpointsInput {
  maxResults?: number;
  pentestJobId: string;
  agentSpaceId: string;
  prefix?: string;
  nextToken?: string;
}
export const ListDiscoveredEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
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
  }) as any as S.Schema<ListDiscoveredEndpointsInput>;
export interface DiscoveredEndpoint {
  uri: string;
  pentestJobId: string;
  taskId: string;
  agentSpaceId: string;
  evidence?: string;
  operation?: string;
  description?: string;
}
export const DiscoveredEndpoint = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    uri: S.String,
    pentestJobId: S.String,
    taskId: S.String,
    agentSpaceId: S.String,
    evidence: S.optional(S.String),
    operation: S.optional(S.String),
    description: S.optional(S.String),
  }),
).annotate({
  identifier: "DiscoveredEndpoint",
}) as any as S.Schema<DiscoveredEndpoint>;
export type DiscoveredEndpointList = DiscoveredEndpoint[];
export const DiscoveredEndpointList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(DiscoveredEndpoint);
export interface ListDiscoveredEndpointsOutput {
  discoveredEndpoints?: DiscoveredEndpoint[];
  nextToken?: string;
}
export const ListDiscoveredEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      discoveredEndpoints: S.optional(DiscoveredEndpointList),
      nextToken: S.optional(S.String),
    }),
  ).annotate({
    identifier: "ListDiscoveredEndpointsOutput",
  }) as any as S.Schema<ListDiscoveredEndpointsOutput>;
export interface ListFindingsInput {
  maxResults?: number;
  pentestJobId: string;
  agentSpaceId: string;
  nextToken?: string;
  riskType?: string;
  riskLevel?: RiskLevel;
  status?: FindingStatus;
  confidence?: ConfidenceLevel;
  name?: string;
}
export const ListFindingsInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    maxResults: S.optional(S.Number),
    pentestJobId: S.String,
    agentSpaceId: S.String,
    nextToken: S.optional(S.String),
    riskType: S.optional(S.String),
    riskLevel: S.optional(RiskLevel),
    status: S.optional(FindingStatus),
    confidence: S.optional(ConfidenceLevel),
    name: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/ListFindings" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListFindingsInput",
}) as any as S.Schema<ListFindingsInput>;
export interface FindingSummary {
  findingId: string;
  agentSpaceId: string;
  pentestId?: string;
  pentestJobId?: string;
  name?: string;
  status?: FindingStatus;
  riskType?: string;
  riskLevel?: RiskLevel;
  confidence?: ConfidenceLevel;
  createdAt?: Date;
  updatedAt?: Date;
}
export const FindingSummary = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    findingId: S.String,
    agentSpaceId: S.String,
    pentestId: S.optional(S.String),
    pentestJobId: S.optional(S.String),
    name: S.optional(S.String),
    status: S.optional(FindingStatus),
    riskType: S.optional(S.String),
    riskLevel: S.optional(RiskLevel),
    confidence: S.optional(ConfidenceLevel),
    createdAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
  }),
).annotate({ identifier: "FindingSummary" }) as any as S.Schema<FindingSummary>;
export type FindingSummaryList = FindingSummary[];
export const FindingSummaryList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(FindingSummary);
export interface ListFindingsOutput {
  findingsSummaries?: FindingSummary[];
  nextToken?: string;
}
export const ListFindingsOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    findingsSummaries: S.optional(FindingSummaryList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListFindingsOutput",
}) as any as S.Schema<ListFindingsOutput>;
export type ResourceType = "CODE_REPOSITORY" | (string & {});
export const ResourceType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface ListIntegratedResourcesInput {
  agentSpaceId: string;
  integrationId?: string;
  resourceType?: ResourceType;
  nextToken?: string;
  maxResults?: number;
}
export const ListIntegratedResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      agentSpaceId: S.String,
      integrationId: S.optional(S.String),
      resourceType: S.optional(ResourceType),
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
  }) as any as S.Schema<ListIntegratedResourcesInput>;
export type AccessType = "PRIVATE" | "PUBLIC" | (string & {});
export const AccessType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface GitHubRepositoryMetadata {
  name: string;
  providerResourceId: string;
  owner: string;
  accessType?: AccessType;
}
export const GitHubRepositoryMetadata = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      name: S.String,
      providerResourceId: S.String,
      owner: S.String,
      accessType: S.optional(AccessType),
    }),
).annotate({
  identifier: "GitHubRepositoryMetadata",
}) as any as S.Schema<GitHubRepositoryMetadata>;
export type IntegratedResourceMetadata = {
  githubRepository: GitHubRepositoryMetadata;
};
export const IntegratedResourceMetadata = /*@__PURE__*/ /*#__PURE__*/ S.Union([
  S.Struct({ githubRepository: GitHubRepositoryMetadata }),
]);
export interface GitHubResourceCapabilities {
  leaveComments?: boolean;
  remediateCode?: boolean;
}
export const GitHubResourceCapabilities = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      leaveComments: S.optional(S.Boolean),
      remediateCode: S.optional(S.Boolean),
    }),
).annotate({
  identifier: "GitHubResourceCapabilities",
}) as any as S.Schema<GitHubResourceCapabilities>;
export type ProviderResourceCapabilities = {
  github: GitHubResourceCapabilities;
};
export const ProviderResourceCapabilities = /*@__PURE__*/ /*#__PURE__*/ S.Union(
  [S.Struct({ github: GitHubResourceCapabilities })],
);
export interface IntegratedResourceSummary {
  integrationId: string;
  resource: IntegratedResourceMetadata;
  capabilities?: ProviderResourceCapabilities;
}
export const IntegratedResourceSummary = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      integrationId: S.String,
      resource: IntegratedResourceMetadata,
      capabilities: S.optional(ProviderResourceCapabilities),
    }),
).annotate({
  identifier: "IntegratedResourceSummary",
}) as any as S.Schema<IntegratedResourceSummary>;
export type IntegratedResourceSummaryList = IntegratedResourceSummary[];
export const IntegratedResourceSummaryList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(IntegratedResourceSummary);
export interface ListIntegratedResourcesOutput {
  integratedResourceSummaries: IntegratedResourceSummary[];
  nextToken?: string;
}
export const ListIntegratedResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      integratedResourceSummaries: IntegratedResourceSummaryList,
      nextToken: S.optional(S.String),
    }),
  ).annotate({
    identifier: "ListIntegratedResourcesOutput",
  }) as any as S.Schema<ListIntegratedResourcesOutput>;
export type MembershipTypeFilter = "USER" | "ALL" | (string & {});
export const MembershipTypeFilter = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface ListMembershipsRequest {
  applicationId: string;
  agentSpaceId: string;
  memberType?: MembershipTypeFilter;
  maxResults?: number;
  nextToken?: string;
}
export const ListMembershipsRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      applicationId: S.String,
      agentSpaceId: S.String,
      memberType: S.optional(MembershipTypeFilter),
      maxResults: S.optional(S.Number),
      nextToken: S.optional(S.String),
    }).pipe(
      T.all(
        T.Http({ method: "POST", uri: "/ListMemberships" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "ListMembershipsRequest",
}) as any as S.Schema<ListMembershipsRequest>;
export interface UserMetadata {
  username: string;
  email: string;
}
export const UserMetadata = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ username: S.String, email: S.String }),
).annotate({ identifier: "UserMetadata" }) as any as S.Schema<UserMetadata>;
export type MemberMetadata = { user: UserMetadata };
export const MemberMetadata = /*@__PURE__*/ /*#__PURE__*/ S.Union([
  S.Struct({ user: UserMetadata }),
]);
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
export const MembershipSummary = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    membershipId: S.String,
    applicationId: S.String,
    agentSpaceId: S.String,
    memberType: MembershipType,
    config: S.optional(MembershipConfig),
    metadata: S.optional(MemberMetadata),
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    createdBy: S.String,
    updatedBy: S.String,
  }),
).annotate({
  identifier: "MembershipSummary",
}) as any as S.Schema<MembershipSummary>;
export type MembershipSummaryList = MembershipSummary[];
export const MembershipSummaryList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(MembershipSummary);
export interface ListMembershipsResponse {
  membershipSummaries: MembershipSummary[];
  nextToken?: string;
}
export const ListMembershipsResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      membershipSummaries: MembershipSummaryList,
      nextToken: S.optional(S.String),
    }),
).annotate({
  identifier: "ListMembershipsResponse",
}) as any as S.Schema<ListMembershipsResponse>;
export interface ListPentestJobsForPentestInput {
  maxResults?: number;
  pentestId: string;
  agentSpaceId: string;
  nextToken?: string;
}
export const ListPentestJobsForPentestInput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      maxResults: S.optional(S.Number),
      pentestId: S.String,
      agentSpaceId: S.String,
      nextToken: S.optional(S.String),
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
  }) as any as S.Schema<ListPentestJobsForPentestInput>;
export interface PentestJobSummary {
  pentestJobId: string;
  pentestId: string;
  title?: string;
  status?: JobStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
export const PentestJobSummary = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    pentestJobId: S.String,
    pentestId: S.String,
    title: S.optional(S.String),
    status: S.optional(JobStatus),
    createdAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
  }),
).annotate({
  identifier: "PentestJobSummary",
}) as any as S.Schema<PentestJobSummary>;
export type PentestJobSummaryList = PentestJobSummary[];
export const PentestJobSummaryList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(PentestJobSummary);
export interface ListPentestJobsForPentestOutput {
  pentestJobSummaries?: PentestJobSummary[];
  nextToken?: string;
}
export const ListPentestJobsForPentestOutput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      pentestJobSummaries: S.optional(PentestJobSummaryList),
      nextToken: S.optional(S.String),
    }),
  ).annotate({
    identifier: "ListPentestJobsForPentestOutput",
  }) as any as S.Schema<ListPentestJobsForPentestOutput>;
export interface ListPentestJobTasksInput {
  agentSpaceId: string;
  maxResults?: number;
  pentestJobId?: string;
  stepName?: StepName;
  categoryName?: string;
  nextToken?: string;
}
export const ListPentestJobTasksInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaceId: S.String,
      maxResults: S.optional(S.Number),
      pentestJobId: S.optional(S.String),
      stepName: S.optional(StepName),
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
).annotate({
  identifier: "ListPentestJobTasksInput",
}) as any as S.Schema<ListPentestJobTasksInput>;
export interface TaskSummary {
  taskId: string;
  pentestId?: string;
  pentestJobId?: string;
  agentSpaceId?: string;
  title?: string;
  riskType?: RiskType;
  executionStatus?: TaskExecutionStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
export const TaskSummary = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    taskId: S.String,
    pentestId: S.optional(S.String),
    pentestJobId: S.optional(S.String),
    agentSpaceId: S.optional(S.String),
    title: S.optional(S.String),
    riskType: S.optional(RiskType),
    executionStatus: S.optional(TaskExecutionStatus),
    createdAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
  }),
).annotate({ identifier: "TaskSummary" }) as any as S.Schema<TaskSummary>;
export type TaskSummaryList = TaskSummary[];
export const TaskSummaryList = /*@__PURE__*/ /*#__PURE__*/ S.Array(TaskSummary);
export interface ListPentestJobTasksOutput {
  taskSummaries?: TaskSummary[];
  nextToken?: string;
}
export const ListPentestJobTasksOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      taskSummaries: S.optional(TaskSummaryList),
      nextToken: S.optional(S.String),
    }),
).annotate({
  identifier: "ListPentestJobTasksOutput",
}) as any as S.Schema<ListPentestJobTasksOutput>;
export interface ListPentestsInput {
  maxResults?: number;
  nextToken?: string;
  agentSpaceId: string;
}
export const ListPentestsInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    maxResults: S.optional(S.Number),
    nextToken: S.optional(S.String),
    agentSpaceId: S.String,
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/ListPentests" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListPentestsInput",
}) as any as S.Schema<ListPentestsInput>;
export interface PentestSummary {
  pentestId: string;
  agentSpaceId: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export const PentestSummary = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    pentestId: S.String,
    agentSpaceId: S.String,
    title: S.String,
    createdAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
  }),
).annotate({ identifier: "PentestSummary" }) as any as S.Schema<PentestSummary>;
export type PentestSummaryList = PentestSummary[];
export const PentestSummaryList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(PentestSummary);
export interface ListPentestsOutput {
  pentestSummaries?: PentestSummary[];
  nextToken?: string;
}
export const ListPentestsOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    pentestSummaries: S.optional(PentestSummaryList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListPentestsOutput",
}) as any as S.Schema<ListPentestsOutput>;
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export const ListTagsForResourceInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
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
  identifier: "ListTagsForResourceInput",
}) as any as S.Schema<ListTagsForResourceInput>;
export type TagMap = { [key: string]: string | undefined };
export const TagMap = /*@__PURE__*/ /*#__PURE__*/ S.Record(
  S.String,
  S.String.pipe(S.optional),
);
export interface ListTagsForResourceOutput {
  tags?: { [key: string]: string | undefined };
}
export const ListTagsForResourceOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ tags: S.optional(TagMap) }),
).annotate({
  identifier: "ListTagsForResourceOutput",
}) as any as S.Schema<ListTagsForResourceOutput>;
export interface StartCodeRemediationInput {
  agentSpaceId: string;
  pentestJobId: string;
  findingIds: string[];
}
export const StartCodeRemediationInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaceId: S.String,
      pentestJobId: S.String,
      findingIds: FindingIdList,
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
}) as any as S.Schema<StartCodeRemediationInput>;
export interface StartCodeRemediationOutput {}
export const StartCodeRemediationOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({}),
).annotate({
  identifier: "StartCodeRemediationOutput",
}) as any as S.Schema<StartCodeRemediationOutput>;
export interface StartPentestJobInput {
  agentSpaceId: string;
  pentestId: string;
}
export const StartPentestJobInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ agentSpaceId: S.String, pentestId: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/StartPentestJob" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "StartPentestJobInput",
}) as any as S.Schema<StartPentestJobInput>;
export interface StartPentestJobOutput {
  title?: string;
  status?: JobStatus;
  createdAt?: Date;
  updatedAt?: Date;
  pentestId?: string;
  pentestJobId?: string;
  agentSpaceId?: string;
}
export const StartPentestJobOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    title: S.optional(S.String),
    status: S.optional(JobStatus),
    createdAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    pentestId: S.optional(S.String),
    pentestJobId: S.optional(S.String),
    agentSpaceId: S.optional(S.String),
  }),
).annotate({
  identifier: "StartPentestJobOutput",
}) as any as S.Schema<StartPentestJobOutput>;
export interface StopPentestJobInput {
  agentSpaceId: string;
  pentestJobId: string;
}
export const StopPentestJobInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ agentSpaceId: S.String, pentestJobId: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/StopPentestJob" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "StopPentestJobInput",
}) as any as S.Schema<StopPentestJobInput>;
export interface StopPentestJobOutput {}
export const StopPentestJobOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({}),
).annotate({
  identifier: "StopPentestJobOutput",
}) as any as S.Schema<StopPentestJobOutput>;
export interface TagResourceInput {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export const TagResourceInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
    tags: TagMap,
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
).annotate({
  identifier: "TagResourceInput",
}) as any as S.Schema<TagResourceInput>;
export interface TagResourceOutput {}
export const TagResourceOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({}),
).annotate({
  identifier: "TagResourceOutput",
}) as any as S.Schema<TagResourceOutput>;
export type TagKeyList = string[];
export const TagKeyList = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
export const UntagResourceInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
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
).annotate({
  identifier: "UntagResourceInput",
}) as any as S.Schema<UntagResourceInput>;
export interface UntagResourceOutput {}
export const UntagResourceOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({}),
).annotate({
  identifier: "UntagResourceOutput",
}) as any as S.Schema<UntagResourceOutput>;
export interface UpdateFindingInput {
  findingId: string;
  agentSpaceId: string;
  riskLevel?: RiskLevel;
  status?: FindingStatus;
}
export const UpdateFindingInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    findingId: S.String,
    agentSpaceId: S.String,
    riskLevel: S.optional(RiskLevel),
    status: S.optional(FindingStatus),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/UpdateFinding" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateFindingInput",
}) as any as S.Schema<UpdateFindingInput>;
export interface UpdateFindingOutput {}
export const UpdateFindingOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({}),
).annotate({
  identifier: "UpdateFindingOutput",
}) as any as S.Schema<UpdateFindingOutput>;
export interface GitHubRepositoryResource {
  name: string;
  owner: string;
}
export const GitHubRepositoryResource = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ name: S.String, owner: S.String }),
).annotate({
  identifier: "GitHubRepositoryResource",
}) as any as S.Schema<GitHubRepositoryResource>;
export type IntegratedResource = { githubRepository: GitHubRepositoryResource };
export const IntegratedResource = /*@__PURE__*/ /*#__PURE__*/ S.Union([
  S.Struct({ githubRepository: GitHubRepositoryResource }),
]);
export interface IntegratedResourceInputItem {
  resource: IntegratedResource;
  capabilities?: ProviderResourceCapabilities;
}
export const IntegratedResourceInputItem =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      resource: IntegratedResource,
      capabilities: S.optional(ProviderResourceCapabilities),
    }),
  ).annotate({
    identifier: "IntegratedResourceInputItem",
  }) as any as S.Schema<IntegratedResourceInputItem>;
export type IntegratedResourceInputItemList = IntegratedResourceInputItem[];
export const IntegratedResourceInputItemList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(IntegratedResourceInputItem);
export interface UpdateIntegratedResourcesInput {
  agentSpaceId: string;
  integrationId: string;
  items: IntegratedResourceInputItem[];
}
export const UpdateIntegratedResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      agentSpaceId: S.String,
      integrationId: S.String,
      items: IntegratedResourceInputItemList,
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
  }) as any as S.Schema<UpdateIntegratedResourcesInput>;
export interface UpdateIntegratedResourcesOutput {}
export const UpdateIntegratedResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() => S.Struct({})).annotate({
    identifier: "UpdateIntegratedResourcesOutput",
  }) as any as S.Schema<UpdateIntegratedResourcesOutput>;
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
}
export const UpdatePentestInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    pentestId: S.String,
    agentSpaceId: S.String,
    title: S.optional(S.String),
    assets: S.optional(Assets),
    excludeRiskTypes: S.optional(RiskTypeList),
    serviceRole: S.optional(S.String),
    logConfig: S.optional(CloudWatchLog),
    vpcConfig: S.optional(VpcConfig),
    networkTrafficConfig: S.optional(NetworkTrafficConfig),
    codeRemediationStrategy: S.optional(CodeRemediationStrategy),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/UpdatePentest" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdatePentestInput",
}) as any as S.Schema<UpdatePentestInput>;
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
}
export const UpdatePentestOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    pentestId: S.optional(S.String),
    title: S.optional(S.String),
    createdAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    assets: S.optional(Assets),
    excludeRiskTypes: S.optional(RiskTypeList),
    serviceRole: S.optional(S.String),
    logConfig: S.optional(CloudWatchLog),
    agentSpaceId: S.optional(S.String),
  }),
).annotate({
  identifier: "UpdatePentestOutput",
}) as any as S.Schema<UpdatePentestOutput>;
export interface VerifyTargetDomainInput {
  targetDomainId: string;
}
export const VerifyTargetDomainInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
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
).annotate({
  identifier: "VerifyTargetDomainInput",
}) as any as S.Schema<VerifyTargetDomainInput>;
export type TargetDomainStatus =
  | "PENDING"
  | "VERIFIED"
  | "FAILED"
  | "UNREACHABLE"
  | (string & {});
export const TargetDomainStatus = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface VerifyTargetDomainOutput {
  targetDomainId?: string;
  domainName?: string;
  createdAt?: Date;
  updatedAt?: Date;
  verifiedAt?: Date;
  status?: TargetDomainStatus;
}
export const VerifyTargetDomainOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      targetDomainId: S.optional(S.String),
      domainName: S.optional(S.String),
      createdAt: S.optional(
        T.DateFromString.pipe(T.TimestampFormat("date-time")),
      ),
      updatedAt: S.optional(
        T.DateFromString.pipe(T.TimestampFormat("date-time")),
      ),
      verifiedAt: S.optional(
        T.DateFromString.pipe(T.TimestampFormat("date-time")),
      ),
      status: S.optional(TargetDomainStatus),
    }),
).annotate({
  identifier: "VerifyTargetDomainOutput",
}) as any as S.Schema<VerifyTargetDomainOutput>;
export type VpcConfigs = VpcConfig[];
export const VpcConfigs = /*@__PURE__*/ /*#__PURE__*/ S.Array(VpcConfig);
export type LogGroupArns = string[];
export const LogGroupArns = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export type S3BucketArns = string[];
export const S3BucketArns = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export type SecretArns = string[];
export const SecretArns = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export type LambdaFunctionArns = string[];
export const LambdaFunctionArns = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export type IamRoles = string[];
export const IamRoles = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface AWSResources {
  vpcs?: VpcConfig[];
  logGroups?: string[];
  s3Buckets?: string[];
  secretArns?: string[];
  lambdaFunctionArns?: string[];
  iamRoles?: string[];
}
export const AWSResources = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    vpcs: S.optional(VpcConfigs),
    logGroups: S.optional(LogGroupArns),
    s3Buckets: S.optional(S3BucketArns),
    secretArns: S.optional(SecretArns),
    lambdaFunctionArns: S.optional(LambdaFunctionArns),
    iamRoles: S.optional(IamRoles),
  }),
).annotate({ identifier: "AWSResources" }) as any as S.Schema<AWSResources>;
export type TargetDomainIdList = string[];
export const TargetDomainIdList = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface CodeReviewSettings {
  controlsScanning: boolean;
  generalPurposeScanning: boolean;
}
export const CodeReviewSettings = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ controlsScanning: S.Boolean, generalPurposeScanning: S.Boolean }),
).annotate({
  identifier: "CodeReviewSettings",
}) as any as S.Schema<CodeReviewSettings>;
export interface CreateAgentSpaceInput {
  name: string;
  description?: string;
  awsResources?: AWSResources;
  targetDomainIds?: string[];
  codeReviewSettings?: CodeReviewSettings;
  kmsKeyId?: string;
  tags?: { [key: string]: string | undefined };
}
export const CreateAgentSpaceInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    description: S.optional(S.String),
    awsResources: S.optional(AWSResources),
    targetDomainIds: S.optional(TargetDomainIdList),
    codeReviewSettings: S.optional(CodeReviewSettings),
    kmsKeyId: S.optional(S.String),
    tags: S.optional(TagMap),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/CreateAgentSpace" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateAgentSpaceInput",
}) as any as S.Schema<CreateAgentSpaceInput>;
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
export const CreateAgentSpaceOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaceId: S.String,
      name: S.String,
      description: S.optional(S.String),
      awsResources: S.optional(AWSResources),
      targetDomainIds: S.optional(TargetDomainIdList),
      codeReviewSettings: S.optional(CodeReviewSettings),
      kmsKeyId: S.optional(S.String),
      createdAt: S.optional(
        T.DateFromString.pipe(T.TimestampFormat("date-time")),
      ),
      updatedAt: S.optional(
        T.DateFromString.pipe(T.TimestampFormat("date-time")),
      ),
    }),
).annotate({
  identifier: "CreateAgentSpaceOutput",
}) as any as S.Schema<CreateAgentSpaceOutput>;
export interface UpdateAgentSpaceInput {
  agentSpaceId: string;
  name?: string;
  description?: string;
  awsResources?: AWSResources;
  targetDomainIds?: string[];
  codeReviewSettings?: CodeReviewSettings;
}
export const UpdateAgentSpaceInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String,
    name: S.optional(S.String),
    description: S.optional(S.String),
    awsResources: S.optional(AWSResources),
    targetDomainIds: S.optional(TargetDomainIdList),
    codeReviewSettings: S.optional(CodeReviewSettings),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/UpdateAgentSpace" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateAgentSpaceInput",
}) as any as S.Schema<UpdateAgentSpaceInput>;
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
export const UpdateAgentSpaceOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaceId: S.String,
      name: S.String,
      description: S.optional(S.String),
      awsResources: S.optional(AWSResources),
      targetDomainIds: S.optional(TargetDomainIdList),
      codeReviewSettings: S.optional(CodeReviewSettings),
      createdAt: S.optional(
        T.DateFromString.pipe(T.TimestampFormat("date-time")),
      ),
      updatedAt: S.optional(
        T.DateFromString.pipe(T.TimestampFormat("date-time")),
      ),
    }),
).annotate({
  identifier: "UpdateAgentSpaceOutput",
}) as any as S.Schema<UpdateAgentSpaceOutput>;
export interface DeleteAgentSpaceInput {
  agentSpaceId: string;
}
export const DeleteAgentSpaceInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ agentSpaceId: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/DeleteAgentSpace" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteAgentSpaceInput",
}) as any as S.Schema<DeleteAgentSpaceInput>;
export interface DeleteAgentSpaceOutput {
  agentSpaceId?: string;
}
export const DeleteAgentSpaceOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ agentSpaceId: S.optional(S.String) }),
).annotate({
  identifier: "DeleteAgentSpaceOutput",
}) as any as S.Schema<DeleteAgentSpaceOutput>;
export interface ListAgentSpacesInput {
  nextToken?: string;
  maxResults?: number;
}
export const ListAgentSpacesInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/ListAgentSpaces" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAgentSpacesInput",
}) as any as S.Schema<ListAgentSpacesInput>;
export interface AgentSpaceSummary {
  agentSpaceId: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export const AgentSpaceSummary = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String,
    name: S.String,
    createdAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
  }),
).annotate({
  identifier: "AgentSpaceSummary",
}) as any as S.Schema<AgentSpaceSummary>;
export type AgentSpaceSummaryList = AgentSpaceSummary[];
export const AgentSpaceSummaryList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(AgentSpaceSummary);
export interface ListAgentSpacesOutput {
  agentSpaceSummaries?: AgentSpaceSummary[];
  nextToken?: string;
}
export const ListAgentSpacesOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceSummaries: S.optional(AgentSpaceSummaryList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListAgentSpacesOutput",
}) as any as S.Schema<ListAgentSpacesOutput>;
export type AgentSpaceIdList = string[];
export const AgentSpaceIdList = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface BatchGetAgentSpacesInput {
  agentSpaceIds: string[];
}
export const BatchGetAgentSpacesInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({ agentSpaceIds: AgentSpaceIdList }).pipe(
      T.all(
        T.Http({ method: "POST", uri: "/BatchGetAgentSpaces" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "BatchGetAgentSpacesInput",
}) as any as S.Schema<BatchGetAgentSpacesInput>;
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
export const AgentSpace = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    agentSpaceId: S.String,
    name: S.String,
    description: S.optional(S.String),
    awsResources: S.optional(AWSResources),
    targetDomainIds: S.optional(TargetDomainIdList),
    codeReviewSettings: S.optional(CodeReviewSettings),
    kmsKeyId: S.optional(S.String),
    createdAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    updatedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
  }),
).annotate({ identifier: "AgentSpace" }) as any as S.Schema<AgentSpace>;
export type AgentSpaceList = AgentSpace[];
export const AgentSpaceList = /*@__PURE__*/ /*#__PURE__*/ S.Array(AgentSpace);
export interface BatchGetAgentSpacesOutput {
  agentSpaces?: AgentSpace[];
  notFound?: string[];
}
export const BatchGetAgentSpacesOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      agentSpaces: S.optional(AgentSpaceList),
      notFound: S.optional(AgentSpaceIdList),
    }),
).annotate({
  identifier: "BatchGetAgentSpacesOutput",
}) as any as S.Schema<BatchGetAgentSpacesOutput>;
export interface CreateApplicationRequest {
  idcInstanceArn?: string;
  roleArn?: string;
  defaultKmsKeyId?: string;
  tags?: { [key: string]: string | undefined };
}
export const CreateApplicationRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      idcInstanceArn: S.optional(S.String),
      roleArn: S.optional(S.String),
      defaultKmsKeyId: S.optional(S.String),
      tags: S.optional(TagMap),
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
).annotate({
  identifier: "CreateApplicationRequest",
}) as any as S.Schema<CreateApplicationRequest>;
export interface CreateApplicationResponse {
  applicationId: string;
}
export const CreateApplicationResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ applicationId: S.String }),
).annotate({
  identifier: "CreateApplicationResponse",
}) as any as S.Schema<CreateApplicationResponse>;
export interface GetApplicationRequest {
  applicationId: string;
}
export const GetApplicationRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ applicationId: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/GetApplication" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetApplicationRequest",
}) as any as S.Schema<GetApplicationRequest>;
export interface IdCConfiguration {
  idcApplicationArn?: string;
  idcInstanceArn?: string;
}
export const IdCConfiguration = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    idcApplicationArn: S.optional(S.String),
    idcInstanceArn: S.optional(S.String),
  }),
).annotate({
  identifier: "IdCConfiguration",
}) as any as S.Schema<IdCConfiguration>;
export interface GetApplicationResponse {
  applicationId: string;
  domain: string;
  applicationName?: string;
  idcConfiguration?: IdCConfiguration;
  roleArn?: string;
  defaultKmsKeyId?: string;
}
export const GetApplicationResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      applicationId: S.String,
      domain: S.String,
      applicationName: S.optional(S.String),
      idcConfiguration: S.optional(IdCConfiguration),
      roleArn: S.optional(S.String),
      defaultKmsKeyId: S.optional(S.String),
    }),
).annotate({
  identifier: "GetApplicationResponse",
}) as any as S.Schema<GetApplicationResponse>;
export interface UpdateApplicationRequest {
  applicationId: string;
  roleArn?: string;
  defaultKmsKeyId?: string;
}
export const UpdateApplicationRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
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
).annotate({
  identifier: "UpdateApplicationRequest",
}) as any as S.Schema<UpdateApplicationRequest>;
export interface UpdateApplicationResponse {
  applicationId: string;
}
export const UpdateApplicationResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ applicationId: S.String }),
).annotate({
  identifier: "UpdateApplicationResponse",
}) as any as S.Schema<UpdateApplicationResponse>;
export interface DeleteApplicationRequest {
  applicationId: string;
}
export const DeleteApplicationRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
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
).annotate({
  identifier: "DeleteApplicationRequest",
}) as any as S.Schema<DeleteApplicationRequest>;
export interface DeleteApplicationResponse {}
export const DeleteApplicationResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({}),
).annotate({
  identifier: "DeleteApplicationResponse",
}) as any as S.Schema<DeleteApplicationResponse>;
export interface ListApplicationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export const ListApplicationsRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      nextToken: S.optional(S.String),
      maxResults: S.optional(S.Number),
    }).pipe(
      T.all(
        T.Http({ method: "POST", uri: "/ListApplications" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "ListApplicationsRequest",
}) as any as S.Schema<ListApplicationsRequest>;
export interface ApplicationSummary {
  applicationId: string;
  applicationName: string;
  domain: string;
  defaultKmsKeyId?: string;
}
export const ApplicationSummary = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    applicationId: S.String,
    applicationName: S.String,
    domain: S.String,
    defaultKmsKeyId: S.optional(S.String),
  }),
).annotate({
  identifier: "ApplicationSummary",
}) as any as S.Schema<ApplicationSummary>;
export type ApplicationSummaryList = ApplicationSummary[];
export const ApplicationSummaryList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(ApplicationSummary);
export interface ListApplicationsResponse {
  applicationSummaries: ApplicationSummary[];
  nextToken?: string;
}
export const ListApplicationsResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      applicationSummaries: ApplicationSummaryList,
      nextToken: S.optional(S.String),
    }),
).annotate({
  identifier: "ListApplicationsResponse",
}) as any as S.Schema<ListApplicationsResponse>;
export interface GitHubIntegrationInput {
  code: string;
  state: string;
  organizationName?: string;
}
export const GitHubIntegrationInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      code: S.String,
      state: S.String,
      organizationName: S.optional(S.String),
    }),
).annotate({
  identifier: "GitHubIntegrationInput",
}) as any as S.Schema<GitHubIntegrationInput>;
export type ProviderInput = { github: GitHubIntegrationInput };
export const ProviderInput = /*@__PURE__*/ /*#__PURE__*/ S.Union([
  S.Struct({ github: GitHubIntegrationInput }),
]);
export interface CreateIntegrationInput {
  provider: Provider;
  input: ProviderInput;
  integrationDisplayName: string;
  kmsKeyId?: string;
  tags?: { [key: string]: string | undefined };
}
export const CreateIntegrationInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      provider: Provider,
      input: ProviderInput,
      integrationDisplayName: S.String,
      kmsKeyId: S.optional(S.String),
      tags: S.optional(TagMap),
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
).annotate({
  identifier: "CreateIntegrationInput",
}) as any as S.Schema<CreateIntegrationInput>;
export interface CreateIntegrationOutput {
  integrationId: string;
}
export const CreateIntegrationOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ integrationId: S.String }),
).annotate({
  identifier: "CreateIntegrationOutput",
}) as any as S.Schema<CreateIntegrationOutput>;
export interface GetIntegrationInput {
  integrationId: string;
}
export const GetIntegrationInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ integrationId: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/GetIntegration" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetIntegrationInput",
}) as any as S.Schema<GetIntegrationInput>;
export type ProviderType = "SOURCE_CODE" | "DOCUMENTATION" | (string & {});
export const ProviderType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface GetIntegrationOutput {
  integrationId: string;
  installationId: string;
  provider: Provider;
  providerType: ProviderType;
  displayName?: string;
  kmsKeyId?: string;
}
export const GetIntegrationOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    integrationId: S.String,
    installationId: S.String,
    provider: Provider,
    providerType: ProviderType,
    displayName: S.optional(S.String),
    kmsKeyId: S.optional(S.String),
  }),
).annotate({
  identifier: "GetIntegrationOutput",
}) as any as S.Schema<GetIntegrationOutput>;
export interface DeleteIntegrationInput {
  integrationId: string;
}
export const DeleteIntegrationInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
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
).annotate({
  identifier: "DeleteIntegrationInput",
}) as any as S.Schema<DeleteIntegrationInput>;
export interface DeleteIntegrationOutput {}
export const DeleteIntegrationOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({}),
).annotate({
  identifier: "DeleteIntegrationOutput",
}) as any as S.Schema<DeleteIntegrationOutput>;
export type IntegrationFilter =
  | { provider: Provider; providerType?: never }
  | { provider?: never; providerType: ProviderType };
export const IntegrationFilter = /*@__PURE__*/ /*#__PURE__*/ S.Union([
  S.Struct({ provider: Provider }),
  S.Struct({ providerType: ProviderType }),
]);
export interface ListIntegrationsInput {
  filter?: IntegrationFilter;
  nextToken?: string;
  maxResults?: number;
}
export const ListIntegrationsInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    filter: S.optional(IntegrationFilter),
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/ListIntegrations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListIntegrationsInput",
}) as any as S.Schema<ListIntegrationsInput>;
export interface IntegrationSummary {
  integrationId: string;
  installationId: string;
  provider: Provider;
  providerType: ProviderType;
  displayName: string;
}
export const IntegrationSummary = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    integrationId: S.String,
    installationId: S.String,
    provider: Provider,
    providerType: ProviderType,
    displayName: S.String,
  }),
).annotate({
  identifier: "IntegrationSummary",
}) as any as S.Schema<IntegrationSummary>;
export type IntegrationSummaryList = IntegrationSummary[];
export const IntegrationSummaryList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(IntegrationSummary);
export interface ListIntegrationsOutput {
  integrationSummaries: IntegrationSummary[];
  nextToken?: string;
}
export const ListIntegrationsOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      integrationSummaries: IntegrationSummaryList,
      nextToken: S.optional(S.String),
    }),
).annotate({
  identifier: "ListIntegrationsOutput",
}) as any as S.Schema<ListIntegrationsOutput>;
export type DomainVerificationMethod = "DNS_TXT" | "HTTP_ROUTE" | (string & {});
export const DomainVerificationMethod = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface CreateTargetDomainInput {
  targetDomainName: string;
  verificationMethod: DomainVerificationMethod;
  tags?: { [key: string]: string | undefined };
}
export const CreateTargetDomainInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      targetDomainName: S.String,
      verificationMethod: DomainVerificationMethod,
      tags: S.optional(TagMap),
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
).annotate({
  identifier: "CreateTargetDomainInput",
}) as any as S.Schema<CreateTargetDomainInput>;
export type DNSRecordType = "TXT" | (string & {});
export const DNSRecordType = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface DnsVerification {
  token?: string;
  dnsRecordName?: string;
  dnsRecordType?: DNSRecordType;
}
export const DnsVerification = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    token: S.optional(S.String),
    dnsRecordName: S.optional(S.String),
    dnsRecordType: S.optional(DNSRecordType),
  }),
).annotate({
  identifier: "DnsVerification",
}) as any as S.Schema<DnsVerification>;
export interface HttpVerification {
  token?: string;
  routePath?: string;
}
export const HttpVerification = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ token: S.optional(S.String), routePath: S.optional(S.String) }),
).annotate({
  identifier: "HttpVerification",
}) as any as S.Schema<HttpVerification>;
export interface VerificationDetails {
  method?: DomainVerificationMethod;
  dnsTxt?: DnsVerification;
  httpRoute?: HttpVerification;
}
export const VerificationDetails = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    method: S.optional(DomainVerificationMethod),
    dnsTxt: S.optional(DnsVerification),
    httpRoute: S.optional(HttpVerification),
  }),
).annotate({
  identifier: "VerificationDetails",
}) as any as S.Schema<VerificationDetails>;
export interface CreateTargetDomainOutput {
  targetDomainId: string;
  domainName: string;
  verificationStatus: TargetDomainStatus;
  verificationDetails?: VerificationDetails;
  createdAt?: Date;
  verifiedAt?: Date;
}
export const CreateTargetDomainOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      targetDomainId: S.String,
      domainName: S.String,
      verificationStatus: TargetDomainStatus,
      verificationDetails: S.optional(VerificationDetails),
      createdAt: S.optional(
        T.DateFromString.pipe(T.TimestampFormat("date-time")),
      ),
      verifiedAt: S.optional(
        T.DateFromString.pipe(T.TimestampFormat("date-time")),
      ),
    }),
).annotate({
  identifier: "CreateTargetDomainOutput",
}) as any as S.Schema<CreateTargetDomainOutput>;
export interface UpdateTargetDomainInput {
  targetDomainId: string;
  verificationMethod: DomainVerificationMethod;
}
export const UpdateTargetDomainInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      targetDomainId: S.String,
      verificationMethod: DomainVerificationMethod,
    }).pipe(
      T.all(
        T.Http({ method: "POST", uri: "/UpdateTargetDomain" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "UpdateTargetDomainInput",
}) as any as S.Schema<UpdateTargetDomainInput>;
export interface UpdateTargetDomainOutput {
  targetDomainId: string;
  domainName: string;
  verificationStatus: TargetDomainStatus;
  verificationDetails?: VerificationDetails;
  createdAt?: Date;
  verifiedAt?: Date;
}
export const UpdateTargetDomainOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      targetDomainId: S.String,
      domainName: S.String,
      verificationStatus: TargetDomainStatus,
      verificationDetails: S.optional(VerificationDetails),
      createdAt: S.optional(
        T.DateFromString.pipe(T.TimestampFormat("date-time")),
      ),
      verifiedAt: S.optional(
        T.DateFromString.pipe(T.TimestampFormat("date-time")),
      ),
    }),
).annotate({
  identifier: "UpdateTargetDomainOutput",
}) as any as S.Schema<UpdateTargetDomainOutput>;
export interface DeleteTargetDomainInput {
  targetDomainId: string;
}
export const DeleteTargetDomainInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
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
).annotate({
  identifier: "DeleteTargetDomainInput",
}) as any as S.Schema<DeleteTargetDomainInput>;
export interface DeleteTargetDomainOutput {
  targetDomainId?: string;
}
export const DeleteTargetDomainOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({ targetDomainId: S.optional(S.String) }),
).annotate({
  identifier: "DeleteTargetDomainOutput",
}) as any as S.Schema<DeleteTargetDomainOutput>;
export interface ListTargetDomainsInput {
  nextToken?: string;
  maxResults?: number;
}
export const ListTargetDomainsInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      nextToken: S.optional(S.String),
      maxResults: S.optional(S.Number),
    }).pipe(
      T.all(
        T.Http({ method: "POST", uri: "/ListTargetDomains" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "ListTargetDomainsInput",
}) as any as S.Schema<ListTargetDomainsInput>;
export interface TargetDomainSummary {
  targetDomainId: string;
  domainName: string;
  verificationStatus?: TargetDomainStatus;
}
export const TargetDomainSummary = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    targetDomainId: S.String,
    domainName: S.String,
    verificationStatus: S.optional(TargetDomainStatus),
  }),
).annotate({
  identifier: "TargetDomainSummary",
}) as any as S.Schema<TargetDomainSummary>;
export type TargetDomainSummaryList = TargetDomainSummary[];
export const TargetDomainSummaryList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(TargetDomainSummary);
export interface ListTargetDomainsOutput {
  targetDomainSummaries?: TargetDomainSummary[];
  nextToken?: string;
}
export const ListTargetDomainsOutput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      targetDomainSummaries: S.optional(TargetDomainSummaryList),
      nextToken: S.optional(S.String),
    }),
).annotate({
  identifier: "ListTargetDomainsOutput",
}) as any as S.Schema<ListTargetDomainsOutput>;
export interface BatchGetTargetDomainsInput {
  targetDomainIds: string[];
}
export const BatchGetTargetDomainsInput = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({ targetDomainIds: TargetDomainIdList }).pipe(
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
}) as any as S.Schema<BatchGetTargetDomainsInput>;
export interface TargetDomain {
  targetDomainId: string;
  domainName: string;
  verificationStatus?: TargetDomainStatus;
  verificationDetails?: VerificationDetails;
  createdAt?: Date;
  verifiedAt?: Date;
}
export const TargetDomain = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    targetDomainId: S.String,
    domainName: S.String,
    verificationStatus: S.optional(TargetDomainStatus),
    verificationDetails: S.optional(VerificationDetails),
    createdAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    verifiedAt: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
  }),
).annotate({ identifier: "TargetDomain" }) as any as S.Schema<TargetDomain>;
export type TargetDomainList = TargetDomain[];
export const TargetDomainList =
  /*@__PURE__*/ /*#__PURE__*/ S.Array(TargetDomain);
export interface BatchGetTargetDomainsOutput {
  targetDomains?: TargetDomain[];
  notFound?: string[];
}
export const BatchGetTargetDomainsOutput =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      targetDomains: S.optional(TargetDomainList),
      notFound: S.optional(TargetDomainIdList),
    }),
  ).annotate({
    identifier: "BatchGetTargetDomainsOutput",
  }) as any as S.Schema<BatchGetTargetDomainsOutput>;

//# Errors
export class AccessDeniedException extends S.TaggedErrorClass<AccessDeniedException>()(
  "AccessDeniedException",
  { message: S.String },
).pipe(C.withAuthError) {}
export class InternalServerException extends S.TaggedErrorClass<InternalServerException>()(
  "InternalServerException",
  { message: S.String },
).pipe(C.withServerError) {}
export class ResourceNotFoundException extends S.TaggedErrorClass<ResourceNotFoundException>()(
  "ResourceNotFoundException",
  { message: S.String },
).pipe(C.withBadRequestError) {}
export class ThrottlingException extends S.TaggedErrorClass<ThrottlingException>()(
  "ThrottlingException",
  {
    message: S.String,
    serviceCode: S.optional(S.String),
    quotaCode: S.optional(S.String),
  },
).pipe(C.withThrottlingError) {}
export class ValidationException extends S.TaggedErrorClass<ValidationException>()(
  "ValidationException",
  { message: S.String, fieldList: S.optional(ValidationExceptionFieldList) },
) {}
export class ConflictException extends S.TaggedErrorClass<ConflictException>()(
  "ConflictException",
  { message: S.String },
).pipe(C.withConflictError) {}

//# Operations
export type AddArtifactError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds an Artifact for the given agent space
 */
export const addArtifact: API.OperationMethod<
  AddArtifactInput,
  AddArtifactOutput,
  AddArtifactError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddArtifactInput,
  output: AddArtifactOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type BatchDeletePentestsError = CommonErrors;
/**
 * Deletes multiple pentests in a single request
 */
export const batchDeletePentests: API.OperationMethod<
  BatchDeletePentestsInput,
  BatchDeletePentestsOutput,
  BatchDeletePentestsError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeletePentestsInput,
  output: BatchDeletePentestsOutput,
  errors: [],
}));
export type BatchGetArtifactMetadataError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieve the list of artifact metadata for the given agent space
 */
export const batchGetArtifactMetadata: API.OperationMethod<
  BatchGetArtifactMetadataInput,
  BatchGetArtifactMetadataOutput,
  BatchGetArtifactMetadataError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetArtifactMetadataInput,
  output: BatchGetArtifactMetadataOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type BatchGetFindingsError = CommonErrors;
/**
 * Retrieves multiple findings in a single request
 */
export const batchGetFindings: API.OperationMethod<
  BatchGetFindingsInput,
  BatchGetFindingsOutput,
  BatchGetFindingsError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetFindingsInput,
  output: BatchGetFindingsOutput,
  errors: [],
}));
export type BatchGetPentestJobsError = CommonErrors;
/**
 * Retrieves multiple pentest jobs in a single request
 */
export const batchGetPentestJobs: API.OperationMethod<
  BatchGetPentestJobsInput,
  BatchGetPentestJobsOutput,
  BatchGetPentestJobsError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetPentestJobsInput,
  output: BatchGetPentestJobsOutput,
  errors: [],
}));
export type BatchGetPentestJobTasksError = CommonErrors;
/**
 * Retrieves multiple tasks for a pentest job in a single request
 */
export const batchGetPentestJobTasks: API.OperationMethod<
  BatchGetPentestJobTasksInput,
  BatchGetPentestJobTasksOutput,
  BatchGetPentestJobTasksError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetPentestJobTasksInput,
  output: BatchGetPentestJobTasksOutput,
  errors: [],
}));
export type BatchGetPentestsError = CommonErrors;
/**
 * Retrieves multiple pentests in a single request
 */
export const batchGetPentests: API.OperationMethod<
  BatchGetPentestsInput,
  BatchGetPentestsOutput,
  BatchGetPentestsError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetPentestsInput,
  output: BatchGetPentestsOutput,
  errors: [],
}));
export type CreateMembershipError = CommonErrors;
/**
 * Adds a single member to an agent space with specified role
 */
export const createMembership: API.OperationMethod<
  CreateMembershipRequest,
  CreateMembershipResponse,
  CreateMembershipError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateMembershipRequest,
  output: CreateMembershipResponse,
  errors: [],
}));
export type CreatePentestError = CommonErrors;
/**
 * Creates a new pentest configuration
 */
export const createPentest: API.OperationMethod<
  CreatePentestInput,
  CreatePentestOutput,
  CreatePentestError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePentestInput,
  output: CreatePentestOutput,
  errors: [],
}));
export type DeleteArtifactError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete an Artifact from the given agent space
 */
export const deleteArtifact: API.OperationMethod<
  DeleteArtifactInput,
  DeleteArtifactOutput,
  DeleteArtifactError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteArtifactInput,
  output: DeleteArtifactOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type DeleteMembershipError = CommonErrors;
/**
 * Removes a single member associated to an agent space
 */
export const deleteMembership: API.OperationMethod<
  DeleteMembershipRequest,
  DeleteMembershipResponse,
  DeleteMembershipError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteMembershipRequest,
  output: DeleteMembershipResponse,
  errors: [],
}));
export type GetArtifactError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieve an Artifact for the given agent space
 */
export const getArtifact: API.OperationMethod<
  GetArtifactInput,
  GetArtifactOutput,
  GetArtifactError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetArtifactInput,
  output: GetArtifactOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
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
 * Initiates the registration of Security Agent App for an external Provider
 */
export const initiateProviderRegistration: API.OperationMethod<
  InitiateProviderRegistrationInput,
  InitiateProviderRegistrationOutput,
  InitiateProviderRegistrationError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InitiateProviderRegistrationInput,
  output: InitiateProviderRegistrationOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type ListArtifactsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the artifacts for the associated agent space
 */
export const listArtifacts: API.OperationMethod<
  ListArtifactsInput,
  ListArtifactsOutput,
  ListArtifactsError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListArtifactsInput,
  ) => stream.Stream<
    ListArtifactsOutput,
    ListArtifactsError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListArtifactsInput,
  ) => stream.Stream<
    ArtifactSummary,
    ListArtifactsError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListArtifactsInput,
  output: ListArtifactsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "artifactSummaries",
    pageSize: "maxResults",
  } as const,
}));
export type ListDiscoveredEndpointsError = CommonErrors;
/**
 * Lists discovered endpoints associated with a pentest job with optional URI prefix filtering
 */
export const listDiscoveredEndpoints: API.OperationMethod<
  ListDiscoveredEndpointsInput,
  ListDiscoveredEndpointsOutput,
  ListDiscoveredEndpointsError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListDiscoveredEndpointsInput,
  ) => stream.Stream<
    ListDiscoveredEndpointsOutput,
    ListDiscoveredEndpointsError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListDiscoveredEndpointsInput,
  ) => stream.Stream<
    DiscoveredEndpoint,
    ListDiscoveredEndpointsError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDiscoveredEndpointsInput,
  output: ListDiscoveredEndpointsOutput,
  errors: [],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "discoveredEndpoints",
    pageSize: "maxResults",
  } as const,
}));
export type ListFindingsError = CommonErrors;
/**
 * Lists findings with filtering and pagination support. When filters are applied, the actual number of results returned may be less than the specified limit
 */
export const listFindings: API.OperationMethod<
  ListFindingsInput,
  ListFindingsOutput,
  ListFindingsError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListFindingsInput,
  ) => stream.Stream<
    ListFindingsOutput,
    ListFindingsError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListFindingsInput,
  ) => stream.Stream<
    FindingSummary,
    ListFindingsError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFindingsInput,
  output: ListFindingsOutput,
  errors: [],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "findingsSummaries",
    pageSize: "maxResults",
  } as const,
}));
export type ListIntegratedResourcesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the integrated resources for an agent space
 */
export const listIntegratedResources: API.OperationMethod<
  ListIntegratedResourcesInput,
  ListIntegratedResourcesOutput,
  ListIntegratedResourcesError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListIntegratedResourcesInput,
  ) => stream.Stream<
    ListIntegratedResourcesOutput,
    ListIntegratedResourcesError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListIntegratedResourcesInput,
  ) => stream.Stream<
    IntegratedResourceSummary,
    ListIntegratedResourcesError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListIntegratedResourcesInput,
  output: ListIntegratedResourcesOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "integratedResourceSummaries",
    pageSize: "maxResults",
  } as const,
}));
export type ListMembershipsError = CommonErrors;
/**
 * Lists all members associated to an agent space with pagination support
 */
export const listMemberships: API.OperationMethod<
  ListMembershipsRequest,
  ListMembershipsResponse,
  ListMembershipsError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListMembershipsRequest,
  ) => stream.Stream<
    ListMembershipsResponse,
    ListMembershipsError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListMembershipsRequest,
  ) => stream.Stream<
    MembershipSummary,
    ListMembershipsError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListMembershipsRequest,
  output: ListMembershipsResponse,
  errors: [],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "membershipSummaries",
    pageSize: "maxResults",
  } as const,
}));
export type ListPentestJobsForPentestError = CommonErrors;
/**
 * Lists pentest jobs associated with a pentest
 */
export const listPentestJobsForPentest: API.OperationMethod<
  ListPentestJobsForPentestInput,
  ListPentestJobsForPentestOutput,
  ListPentestJobsForPentestError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListPentestJobsForPentestInput,
  ) => stream.Stream<
    ListPentestJobsForPentestOutput,
    ListPentestJobsForPentestError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListPentestJobsForPentestInput,
  ) => stream.Stream<
    PentestJobSummary,
    ListPentestJobsForPentestError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPentestJobsForPentestInput,
  output: ListPentestJobsForPentestOutput,
  errors: [],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "pentestJobSummaries",
    pageSize: "maxResults",
  } as const,
}));
export type ListPentestJobTasksError = CommonErrors;
/**
 * Lists tasks associated with a specific pentest job
 */
export const listPentestJobTasks: API.OperationMethod<
  ListPentestJobTasksInput,
  ListPentestJobTasksOutput,
  ListPentestJobTasksError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListPentestJobTasksInput,
  ) => stream.Stream<
    ListPentestJobTasksOutput,
    ListPentestJobTasksError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListPentestJobTasksInput,
  ) => stream.Stream<
    TaskSummary,
    ListPentestJobTasksError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPentestJobTasksInput,
  output: ListPentestJobTasksOutput,
  errors: [],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "taskSummaries",
    pageSize: "maxResults",
  } as const,
}));
export type ListPentestsError = CommonErrors;
/**
 * Lists pentests with optional filtering by status
 */
export const listPentests: API.OperationMethod<
  ListPentestsInput,
  ListPentestsOutput,
  ListPentestsError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListPentestsInput,
  ) => stream.Stream<
    ListPentestsOutput,
    ListPentestsError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListPentestsInput,
  ) => stream.Stream<
    PentestSummary,
    ListPentestsError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPentestsInput,
  output: ListPentestsOutput,
  errors: [],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "pentestSummaries",
    pageSize: "maxResults",
  } as const,
}));
export type ListTagsForResourceError = CommonErrors;
/**
 * Lists tags for a Security Agent resource
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListTagsForResourceInput,
  output: ListTagsForResourceOutput,
  errors: [],
}));
export type StartCodeRemediationError = CommonErrors;
/**
 * Starts code remediation for the specified findings
 */
export const startCodeRemediation: API.OperationMethod<
  StartCodeRemediationInput,
  StartCodeRemediationOutput,
  StartCodeRemediationError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartCodeRemediationInput,
  output: StartCodeRemediationOutput,
  errors: [],
}));
export type StartPentestJobError = CommonErrors;
/**
 * Initiates the execution of a pentest
 */
export const startPentestJob: API.OperationMethod<
  StartPentestJobInput,
  StartPentestJobOutput,
  StartPentestJobError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartPentestJobInput,
  output: StartPentestJobOutput,
  errors: [],
}));
export type StopPentestJobError = CommonErrors;
/**
 * Stops the execution of a running pentest
 */
export const stopPentestJob: API.OperationMethod<
  StopPentestJobInput,
  StopPentestJobOutput,
  StopPentestJobError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopPentestJobInput,
  output: StopPentestJobOutput,
  errors: [],
}));
export type TagResourceError = CommonErrors;
/**
 * Adds tags to a Security Agent resource
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TagResourceInput,
  output: TagResourceOutput,
  errors: [],
}));
export type UntagResourceError = CommonErrors;
/**
 * Removes tags from a Security Agent resource
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UntagResourceInput,
  output: UntagResourceOutput,
  errors: [],
}));
export type UpdateFindingError = CommonErrors;
/**
 * Updates an existing security finding with new details or status
 */
export const updateFinding: API.OperationMethod<
  UpdateFindingInput,
  UpdateFindingOutput,
  UpdateFindingError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateFindingInput,
  output: UpdateFindingOutput,
  errors: [],
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
 * Updates the integrated resources for an agent space
 */
export const updateIntegratedResources: API.OperationMethod<
  UpdateIntegratedResourcesInput,
  UpdateIntegratedResourcesOutput,
  UpdateIntegratedResourcesError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateIntegratedResourcesInput,
  output: UpdateIntegratedResourcesOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type UpdatePentestError = CommonErrors;
/**
 * Updates an existing pentest with new configuration or settings
 */
export const updatePentest: API.OperationMethod<
  UpdatePentestInput,
  UpdatePentestOutput,
  UpdatePentestError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePentestInput,
  output: UpdatePentestOutput,
  errors: [],
}));
export type VerifyTargetDomainError = CommonErrors;
/**
 * Verifies ownership for a registered target domain
 */
export const verifyTargetDomain: API.OperationMethod<
  VerifyTargetDomainInput,
  VerifyTargetDomainOutput,
  VerifyTargetDomainError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: VerifyTargetDomainInput,
  output: VerifyTargetDomainOutput,
  errors: [],
}));
export type CreateAgentSpaceError = CommonErrors;
/**
 * Creates an agent space record
 */
export const createAgentSpace: API.OperationMethod<
  CreateAgentSpaceInput,
  CreateAgentSpaceOutput,
  CreateAgentSpaceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAgentSpaceInput,
  output: CreateAgentSpaceOutput,
  errors: [],
}));
export type UpdateAgentSpaceError = CommonErrors;
/**
 * Updates an agent space record
 */
export const updateAgentSpace: API.OperationMethod<
  UpdateAgentSpaceInput,
  UpdateAgentSpaceOutput,
  UpdateAgentSpaceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAgentSpaceInput,
  output: UpdateAgentSpaceOutput,
  errors: [],
}));
export type DeleteAgentSpaceError = CommonErrors;
/**
 * Deletes an agent space record
 */
export const deleteAgentSpace: API.OperationMethod<
  DeleteAgentSpaceInput,
  DeleteAgentSpaceOutput,
  DeleteAgentSpaceError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAgentSpaceInput,
  output: DeleteAgentSpaceOutput,
  errors: [],
}));
export type ListAgentSpacesError = CommonErrors;
/**
 * Lists agent spaces
 */
export const listAgentSpaces: API.OperationMethod<
  ListAgentSpacesInput,
  ListAgentSpacesOutput,
  ListAgentSpacesError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListAgentSpacesInput,
  ) => stream.Stream<
    ListAgentSpacesOutput,
    ListAgentSpacesError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListAgentSpacesInput,
  ) => stream.Stream<
    AgentSpaceSummary,
    ListAgentSpacesError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAgentSpacesInput,
  output: ListAgentSpacesOutput,
  errors: [],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "agentSpaceSummaries",
    pageSize: "maxResults",
  } as const,
}));
export type BatchGetAgentSpacesError = CommonErrors;
/**
 * Retrieves multiple agent spaces in a single request
 */
export const batchGetAgentSpaces: API.OperationMethod<
  BatchGetAgentSpacesInput,
  BatchGetAgentSpacesOutput,
  BatchGetAgentSpacesError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetAgentSpacesInput,
  output: BatchGetAgentSpacesOutput,
  errors: [],
}));
export type CreateApplicationError = CommonErrors;
/**
 * Creates a new application
 */
export const createApplication: API.OperationMethod<
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateApplicationError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateApplicationRequest,
  output: CreateApplicationResponse,
  errors: [],
}));
export type GetApplicationError = CommonErrors;
/**
 * Retrieves application details by application ID
 */
export const getApplication: API.OperationMethod<
  GetApplicationRequest,
  GetApplicationResponse,
  GetApplicationError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetApplicationRequest,
  output: GetApplicationResponse,
  errors: [],
}));
export type UpdateApplicationError = CommonErrors;
/**
 * Updates application configuration
 */
export const updateApplication: API.OperationMethod<
  UpdateApplicationRequest,
  UpdateApplicationResponse,
  UpdateApplicationError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateApplicationRequest,
  output: UpdateApplicationResponse,
  errors: [],
}));
export type DeleteApplicationError = CommonErrors;
/**
 * Deletes an application
 */
export const deleteApplication: API.OperationMethod<
  DeleteApplicationRequest,
  DeleteApplicationResponse,
  DeleteApplicationError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteApplicationRequest,
  output: DeleteApplicationResponse,
  errors: [],
}));
export type ListApplicationsError = CommonErrors;
/**
 * Lists all applications in the account
 */
export const listApplications: API.OperationMethod<
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListApplicationsError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListApplicationsRequest,
  ) => stream.Stream<
    ListApplicationsResponse,
    ListApplicationsError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListApplicationsRequest,
  ) => stream.Stream<
    ApplicationSummary,
    ListApplicationsError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListApplicationsRequest,
  output: ListApplicationsResponse,
  errors: [],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "applicationSummaries",
    pageSize: "maxResults",
  } as const,
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
 * Creates the Integration of the Security Agent App with an external Provider
 */
export const createIntegration: API.OperationMethod<
  CreateIntegrationInput,
  CreateIntegrationOutput,
  CreateIntegrationError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateIntegrationInput,
  output: CreateIntegrationOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type GetIntegrationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets Integration metadata from the provided id
 */
export const getIntegration: API.OperationMethod<
  GetIntegrationInput,
  GetIntegrationOutput,
  GetIntegrationError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIntegrationInput,
  output: GetIntegrationOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
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
 * Deletes the Integration of the Security Agent App with an external Provider
 */
export const deleteIntegration: API.OperationMethod<
  DeleteIntegrationInput,
  DeleteIntegrationOutput,
  DeleteIntegrationError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteIntegrationInput,
  output: DeleteIntegrationOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
}));
export type ListIntegrationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the Integrations associated with the user's account
 */
export const listIntegrations: API.OperationMethod<
  ListIntegrationsInput,
  ListIntegrationsOutput,
  ListIntegrationsError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListIntegrationsInput,
  ) => stream.Stream<
    ListIntegrationsOutput,
    ListIntegrationsError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListIntegrationsInput,
  ) => stream.Stream<
    IntegrationSummary,
    ListIntegrationsError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListIntegrationsInput,
  output: ListIntegrationsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "integrationSummaries",
    pageSize: "maxResults",
  } as const,
}));
export type CreateTargetDomainError = CommonErrors;
/**
 * Creates a target domain record
 */
export const createTargetDomain: API.OperationMethod<
  CreateTargetDomainInput,
  CreateTargetDomainOutput,
  CreateTargetDomainError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateTargetDomainInput,
  output: CreateTargetDomainOutput,
  errors: [],
}));
export type UpdateTargetDomainError = CommonErrors;
/**
 * Updates a target domain record
 */
export const updateTargetDomain: API.OperationMethod<
  UpdateTargetDomainInput,
  UpdateTargetDomainOutput,
  UpdateTargetDomainError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateTargetDomainInput,
  output: UpdateTargetDomainOutput,
  errors: [],
}));
export type DeleteTargetDomainError = CommonErrors;
/**
 * Deletes a target domain record
 */
export const deleteTargetDomain: API.OperationMethod<
  DeleteTargetDomainInput,
  DeleteTargetDomainOutput,
  DeleteTargetDomainError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteTargetDomainInput,
  output: DeleteTargetDomainOutput,
  errors: [],
}));
export type ListTargetDomainsError = CommonErrors;
/**
 * Lists target domains
 */
export const listTargetDomains: API.OperationMethod<
  ListTargetDomainsInput,
  ListTargetDomainsOutput,
  ListTargetDomainsError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListTargetDomainsInput,
  ) => stream.Stream<
    ListTargetDomainsOutput,
    ListTargetDomainsError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListTargetDomainsInput,
  ) => stream.Stream<
    TargetDomainSummary,
    ListTargetDomainsError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListTargetDomainsInput,
  output: ListTargetDomainsOutput,
  errors: [],
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "targetDomainSummaries",
    pageSize: "maxResults",
  } as const,
}));
export type BatchGetTargetDomainsError = CommonErrors;
/**
 * Retrieves multiple target domains in a single request
 */
export const batchGetTargetDomains: API.OperationMethod<
  BatchGetTargetDomainsInput,
  BatchGetTargetDomainsOutput,
  BatchGetTargetDomainsError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetTargetDomainsInput,
  output: BatchGetTargetDomainsOutput,
  errors: [],
}));
