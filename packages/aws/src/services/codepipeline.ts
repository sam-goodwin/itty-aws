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
const ns = /*@__PURE__*/ T.XmlNamespace("http://codepipeline.amazonaws.com/doc/2015-07-09/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "CodePipeline",
  serviceShapeName: "CodePipeline_20150709",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "codepipeline" });
const ver = /*@__PURE__*/ T.ServiceVersion("2015-07-09");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
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
              `https://codepipeline-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://codepipeline-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://codepipeline.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://codepipeline.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ActionExecutionNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ActionExecutionNotFoundException>()(
    "ActionExecutionNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ActionNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ActionNotFoundException>()("ActionNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ActionTypeNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ActionTypeNotFoundException>()(
    "ActionTypeNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ApprovalAlreadyCompletedException
  extends /*@__PURE__*/ S.TaggedError<ApprovalAlreadyCompletedException>()(
    "ApprovalAlreadyCompletedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ConcurrentModificationException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentModificationException>()(
    "ConcurrentModificationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ConcurrentPipelineExecutionsLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentPipelineExecutionsLimitExceededException>()(
    "ConcurrentPipelineExecutionsLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ConditionNotOverridableException
  extends /*@__PURE__*/ S.TaggedError<ConditionNotOverridableException>()(
    "ConditionNotOverridableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class DuplicatedStopRequestException
  extends /*@__PURE__*/ S.TaggedError<DuplicatedStopRequestException>()(
    "DuplicatedStopRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InvalidActionDeclarationException
  extends /*@__PURE__*/ S.TaggedError<InvalidActionDeclarationException>()(
    "InvalidActionDeclarationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InvalidApprovalTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidApprovalTokenException>()(
    "InvalidApprovalTokenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InvalidArnException
  extends /*@__PURE__*/ S.TaggedError<InvalidArnException>()("InvalidArnException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidBlockerDeclarationException
  extends /*@__PURE__*/ S.TaggedError<InvalidBlockerDeclarationException>()(
    "InvalidBlockerDeclarationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InvalidClientTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidClientTokenException>()(
    "InvalidClientTokenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InvalidJobException
  extends /*@__PURE__*/ S.TaggedError<InvalidJobException>()("InvalidJobException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidJobStateException
  extends /*@__PURE__*/ S.TaggedError<InvalidJobStateException>()("InvalidJobStateException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidNextTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidNonceException
  extends /*@__PURE__*/ S.TaggedError<InvalidNonceException>()("InvalidNonceException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidStageDeclarationException
  extends /*@__PURE__*/ S.TaggedError<InvalidStageDeclarationException>()(
    "InvalidStageDeclarationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InvalidStructureException
  extends /*@__PURE__*/ S.TaggedError<InvalidStructureException>()("InvalidStructureException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidTagsException
  extends /*@__PURE__*/ S.TaggedError<InvalidTagsException>()("InvalidTagsException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidWebhookAuthenticationParametersException
  extends /*@__PURE__*/ S.TaggedError<InvalidWebhookAuthenticationParametersException>()(
    "InvalidWebhookAuthenticationParametersException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InvalidWebhookFilterPatternException
  extends /*@__PURE__*/ S.TaggedError<InvalidWebhookFilterPatternException>()(
    "InvalidWebhookFilterPatternException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class JobNotFoundException
  extends /*@__PURE__*/ S.TaggedError<JobNotFoundException>()("JobNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()("LimitExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class NotLatestPipelineExecutionException
  extends /*@__PURE__*/ S.TaggedError<NotLatestPipelineExecutionException>()(
    "NotLatestPipelineExecutionException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class OutputVariablesSizeExceededException
  extends /*@__PURE__*/ S.TaggedError<OutputVariablesSizeExceededException>()(
    "OutputVariablesSizeExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class PipelineExecutionNotFoundException
  extends /*@__PURE__*/ S.TaggedError<PipelineExecutionNotFoundException>()(
    "PipelineExecutionNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class PipelineExecutionNotStoppableException
  extends /*@__PURE__*/ S.TaggedError<PipelineExecutionNotStoppableException>()(
    "PipelineExecutionNotStoppableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class PipelineExecutionOutdatedException
  extends /*@__PURE__*/ S.TaggedError<PipelineExecutionOutdatedException>()(
    "PipelineExecutionOutdatedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class PipelineNameInUseException
  extends /*@__PURE__*/ S.TaggedError<PipelineNameInUseException>()("PipelineNameInUseException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class PipelineNotFoundException
  extends /*@__PURE__*/ S.TaggedError<PipelineNotFoundException>()("PipelineNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class PipelineVersionNotFoundException
  extends /*@__PURE__*/ S.TaggedError<PipelineVersionNotFoundException>()(
    "PipelineVersionNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class RequestFailedException
  extends /*@__PURE__*/ S.TaggedError<RequestFailedException>()("RequestFailedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class StageNotFoundException
  extends /*@__PURE__*/ S.TaggedError<StageNotFoundException>()("StageNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class StageNotRetryableException
  extends /*@__PURE__*/ S.TaggedError<StageNotRetryableException>()("StageNotRetryableException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()("TooManyTagsException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class UnableToRollbackStageException
  extends /*@__PURE__*/ S.TaggedError<UnableToRollbackStageException>()(
    "UnableToRollbackStageException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()("ValidationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class WebhookNotFoundException
  extends /*@__PURE__*/ S.TaggedError<WebhookNotFoundException>()("WebhookNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export type JobId = string;
export type Nonce = string;
export interface AcknowledgeJobInput {
  jobId: string;
  nonce: string;
}
export type JobStatus =
  | "Created"
  | "Queued"
  | "Dispatched"
  | "InProgress"
  | "TimedOut"
  | "Succeeded"
  | "Failed"
  | (string & {});
export interface AcknowledgeJobOutput {
  status?: JobStatus;
}
export type ThirdPartyJobId = string;
export type ClientToken = string;
export interface AcknowledgeThirdPartyJobInput {
  jobId: string;
  nonce: string;
  clientToken: string;
}
export interface AcknowledgeThirdPartyJobOutput {
  status?: JobStatus;
}
export type ActionCategory =
  | "Source"
  | "Build"
  | "Deploy"
  | "Test"
  | "Invoke"
  | "Approval"
  | "Compute"
  | (string & {});
export type ActionProvider = string;
export type Version = string;
export type Url = string;
export type UrlTemplate = string;
export interface ActionTypeSettings {
  thirdPartyConfigurationUrl?: string;
  entityUrlTemplate?: string;
  executionUrlTemplate?: string;
  revisionUrlTemplate?: string;
}
export type ActionConfigurationKey = string;
export type Description = string;
export type ActionConfigurationPropertyType = "String" | "Number" | "Boolean" | (string & {});
export interface ActionConfigurationProperty {
  name: string;
  required: boolean;
  key: boolean;
  secret: boolean;
  queryable?: boolean;
  description?: string;
  type?: ActionConfigurationPropertyType;
}
export type ActionConfigurationPropertyList = ActionConfigurationProperty[];
export type MinimumArtifactCount = number;
export type MaximumArtifactCount = number;
export interface ArtifactDetails {
  minimumCount: number;
  maximumCount: number;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
export type TagList = Tag[];
export interface CreateCustomActionTypeInput {
  category: ActionCategory;
  provider: string;
  version: string;
  settings?: ActionTypeSettings;
  configurationProperties?: ActionConfigurationProperty[];
  inputArtifactDetails: ArtifactDetails;
  outputArtifactDetails: ArtifactDetails;
  tags?: Tag[];
}
export type ActionOwner = "AWS" | "ThirdParty" | "Custom" | (string & {});
export interface ActionTypeId {
  category: ActionCategory;
  owner: ActionOwner;
  provider: string;
  version: string;
}
export interface ActionType {
  id: ActionTypeId;
  settings?: ActionTypeSettings;
  actionConfigurationProperties?: ActionConfigurationProperty[];
  inputArtifactDetails: ArtifactDetails;
  outputArtifactDetails: ArtifactDetails;
}
export interface CreateCustomActionTypeOutput {
  actionType: ActionType;
  tags?: Tag[];
}
export type PipelineName = string;
export type RoleArn = string;
export type ArtifactStoreType = "S3" | (string & {});
export type ArtifactStoreLocation = string;
export type EncryptionKeyId = string;
export type EncryptionKeyType = "KMS" | (string & {});
export interface EncryptionKey {
  id: string;
  type: EncryptionKeyType;
}
export interface ArtifactStore {
  type: ArtifactStoreType;
  location: string;
  encryptionKey?: EncryptionKey;
}
export type AWSRegionName = string;
export type ArtifactStoreMap = { [key: string]: ArtifactStore | undefined };
export type StageName = string;
export type BlockerName = string;
export type BlockerType = "Schedule" | (string & {});
export interface BlockerDeclaration {
  name: string;
  type: BlockerType;
}
export type StageBlockerDeclarationList = BlockerDeclaration[];
export type ActionName = string;
export type ActionRunOrder = number;
export type ActionConfigurationValue = string;
export type ActionConfigurationMap = { [key: string]: string | undefined };
export type Command = string;
export type CommandList = string[];
export type ArtifactName = string;
export type FilePath = string;
export type FilePathList = string[];
export interface OutputArtifact {
  name: string;
  files?: string[];
}
export type OutputArtifactList = OutputArtifact[];
export interface InputArtifact {
  name: string;
}
export type InputArtifactList = InputArtifact[];
export type OutputVariable = string;
export type OutputVariableList = string[];
export type ActionNamespace = string;
export type ActionTimeout = number;
export type EnvironmentVariableName = string;
export type EnvironmentVariableValue = string;
export type EnvironmentVariableType = "PLAINTEXT" | "SECRETS_MANAGER" | (string & {});
export interface EnvironmentVariable {
  name: string;
  value: string;
  type?: EnvironmentVariableType;
}
export type EnvironmentVariableList = EnvironmentVariable[];
export interface ActionDeclaration {
  name: string;
  actionTypeId: ActionTypeId;
  runOrder?: number;
  configuration?: { [key: string]: string | undefined };
  commands?: string[];
  outputArtifacts?: OutputArtifact[];
  inputArtifacts?: InputArtifact[];
  outputVariables?: string[];
  roleArn?: string;
  region?: string;
  namespace?: string;
  timeoutInMinutes?: number;
  environmentVariables?: EnvironmentVariable[];
}
export type StageActionDeclarationList = ActionDeclaration[];
export type Result = "ROLLBACK" | "FAIL" | "RETRY" | "SKIP" | (string & {});
export type StageRetryMode = "FAILED_ACTIONS" | "ALL_ACTIONS" | (string & {});
export interface RetryConfiguration {
  retryMode?: StageRetryMode;
}
export type RuleName = string;
export type RuleCategory = "Rule" | (string & {});
export type RuleOwner = "AWS" | (string & {});
export type RuleProvider = string;
export interface RuleTypeId {
  category: RuleCategory;
  owner?: RuleOwner;
  provider: string;
  version?: string;
}
export type RuleConfigurationKey = string;
export type RuleConfigurationValue = string;
export type RuleConfigurationMap = { [key: string]: string | undefined };
export type RuleTimeout = number;
export interface RuleDeclaration {
  name: string;
  ruleTypeId: RuleTypeId;
  configuration?: { [key: string]: string | undefined };
  commands?: string[];
  inputArtifacts?: InputArtifact[];
  roleArn?: string;
  region?: string;
  timeoutInMinutes?: number;
}
export type RuleDeclarationList = RuleDeclaration[];
export interface Condition {
  result?: Result;
  rules?: RuleDeclaration[];
}
export type ConditionList = Condition[];
export interface FailureConditions {
  result?: Result;
  retryConfiguration?: RetryConfiguration;
  conditions?: Condition[];
}
export interface SuccessConditions {
  conditions: Condition[];
}
export interface BeforeEntryConditions {
  conditions: Condition[];
}
export interface StageDeclaration {
  name: string;
  blockers?: BlockerDeclaration[];
  actions: ActionDeclaration[];
  onFailure?: FailureConditions;
  onSuccess?: SuccessConditions;
  beforeEntry?: BeforeEntryConditions;
}
export type PipelineStageDeclarationList = StageDeclaration[];
export type PipelineVersion = number;
export type ExecutionMode = "QUEUED" | "SUPERSEDED" | "PARALLEL" | (string & {});
export type PipelineType = "V1" | "V2" | (string & {});
export type PipelineVariableName = string;
export type PipelineVariableValue = string;
export type PipelineVariableDescription = string;
export interface PipelineVariableDeclaration {
  name: string;
  defaultValue?: string;
  description?: string;
}
export type PipelineVariableDeclarationList = PipelineVariableDeclaration[];
export type PipelineTriggerProviderType = "CodeStarSourceConnection" | (string & {});
export type GitTagNamePattern = string;
export type GitTagPatternList = string[];
export interface GitTagFilterCriteria {
  includes?: string[];
  excludes?: string[];
}
export type GitBranchNamePattern = string;
export type GitBranchPatternList = string[];
export interface GitBranchFilterCriteria {
  includes?: string[];
  excludes?: string[];
}
export type GitFilePathPattern = string;
export type GitFilePathPatternList = string[];
export interface GitFilePathFilterCriteria {
  includes?: string[];
  excludes?: string[];
}
export interface GitPushFilter {
  tags?: GitTagFilterCriteria;
  branches?: GitBranchFilterCriteria;
  filePaths?: GitFilePathFilterCriteria;
}
export type GitPushFilterList = GitPushFilter[];
export type GitPullRequestEventType = "OPEN" | "UPDATED" | "CLOSED" | (string & {});
export type GitPullRequestEventTypeList = GitPullRequestEventType[];
export interface GitPullRequestFilter {
  events?: GitPullRequestEventType[];
  branches?: GitBranchFilterCriteria;
  filePaths?: GitFilePathFilterCriteria;
}
export type GitPullRequestFilterList = GitPullRequestFilter[];
export interface GitConfiguration {
  sourceActionName: string;
  push?: GitPushFilter[];
  pullRequest?: GitPullRequestFilter[];
}
export interface PipelineTriggerDeclaration {
  providerType: PipelineTriggerProviderType;
  gitConfiguration: GitConfiguration;
}
export type PipelineTriggerDeclarationList = PipelineTriggerDeclaration[];
export interface PipelineDeclaration {
  name: string;
  roleArn: string;
  artifactStore?: ArtifactStore;
  artifactStores?: { [key: string]: ArtifactStore | undefined };
  stages: StageDeclaration[];
  version?: number;
  executionMode?: ExecutionMode;
  pipelineType?: PipelineType;
  variables?: PipelineVariableDeclaration[];
  triggers?: PipelineTriggerDeclaration[];
}
export interface CreatePipelineInput {
  pipeline: PipelineDeclaration;
  tags?: Tag[];
}
export interface CreatePipelineOutput {
  pipeline?: PipelineDeclaration;
  tags?: Tag[];
}
export interface DeleteCustomActionTypeInput {
  category: ActionCategory;
  provider: string;
  version: string;
}
export interface DeleteCustomActionTypeResponse {}
export interface DeletePipelineInput {
  name: string;
}
export interface DeletePipelineResponse {}
export type WebhookName = string;
export interface DeleteWebhookInput {
  name: string;
}
export interface DeleteWebhookOutput {}
export interface DeregisterWebhookWithThirdPartyInput {
  webhookName?: string;
}
export interface DeregisterWebhookWithThirdPartyOutput {}
export type StageTransitionType = "Inbound" | "Outbound" | (string & {});
export type DisabledReason = string;
export interface DisableStageTransitionInput {
  pipelineName: string;
  stageName: string;
  transitionType: StageTransitionType;
  reason: string;
}
export interface DisableStageTransitionResponse {}
export interface EnableStageTransitionInput {
  pipelineName: string;
  stageName: string;
  transitionType: StageTransitionType;
}
export interface EnableStageTransitionResponse {}
export type ActionTypeOwner = string;
export interface GetActionTypeInput {
  category: ActionCategory;
  owner: string;
  provider: string;
  version: string;
}
export type ActionTypeDescription = string;
export type LambdaFunctionArn = string;
export interface LambdaExecutorConfiguration {
  lambdaFunctionArn: string;
}
export type AccountId = string;
export type PollingAccountList = string[];
export type ServicePrincipal = string;
export type PollingServicePrincipalList = string[];
export interface JobWorkerExecutorConfiguration {
  pollingAccounts?: string[];
  pollingServicePrincipals?: string[];
}
export interface ExecutorConfiguration {
  lambdaExecutorConfiguration?: LambdaExecutorConfiguration;
  jobWorkerExecutorConfiguration?: JobWorkerExecutorConfiguration;
}
export type ExecutorType = "JobWorker" | "Lambda" | (string & {});
export type PolicyStatementsTemplate = string;
export type JobTimeout = number;
export interface ActionTypeExecutor {
  configuration: ExecutorConfiguration;
  type: ExecutorType;
  policyStatementsTemplate?: string;
  jobTimeout?: number;
}
export interface ActionTypeIdentifier {
  category: ActionCategory;
  owner: string;
  provider: string;
  version: string;
}
export type MinimumActionTypeArtifactCount = number;
export type MaximumActionTypeArtifactCount = number;
export interface ActionTypeArtifactDetails {
  minimumCount: number;
  maximumCount: number;
}
export type AllowedAccount = string;
export type AllowedAccounts = string[];
export interface ActionTypePermissions {
  allowedAccounts: string[];
}
export type PropertyDescription = string;
export interface ActionTypeProperty {
  name: string;
  optional: boolean;
  key: boolean;
  noEcho: boolean;
  queryable?: boolean;
  description?: string;
}
export type ActionTypeProperties = ActionTypeProperty[];
export interface ActionTypeUrls {
  configurationUrl?: string;
  entityUrlTemplate?: string;
  executionUrlTemplate?: string;
  revisionUrlTemplate?: string;
}
export interface ActionTypeDeclaration {
  description?: string;
  executor: ActionTypeExecutor;
  id: ActionTypeIdentifier;
  inputArtifactDetails: ActionTypeArtifactDetails;
  outputArtifactDetails: ActionTypeArtifactDetails;
  permissions?: ActionTypePermissions;
  properties?: ActionTypeProperty[];
  urls?: ActionTypeUrls;
}
export interface GetActionTypeOutput {
  actionType?: ActionTypeDeclaration;
}
export interface GetJobDetailsInput {
  jobId: string;
}
export interface ActionConfiguration {
  configuration?: { [key: string]: string | undefined };
}
export interface StageContext {
  name?: string;
}
export type ActionExecutionId = string;
export interface ActionContext {
  name?: string;
  actionExecutionId?: string;
}
export type PipelineArn = string;
export type PipelineExecutionId = string;
export interface PipelineContext {
  pipelineName?: string;
  stage?: StageContext;
  action?: ActionContext;
  pipelineArn?: string;
  pipelineExecutionId?: string;
}
export type Revision = string;
export type ArtifactLocationType = "S3" | (string & {});
export type S3BucketName = string;
export type S3ObjectKey = string;
export interface S3ArtifactLocation {
  bucketName: string;
  objectKey: string;
}
export interface ArtifactLocation {
  type?: ArtifactLocationType;
  s3Location?: S3ArtifactLocation;
}
export interface Artifact {
  name?: string;
  revision?: string;
  location?: ArtifactLocation;
}
export type ArtifactList = Artifact[];
export type AccessKeyId = string | redacted.Redacted<string>;
export type SecretAccessKey = string | redacted.Redacted<string>;
export type SessionToken = string | redacted.Redacted<string>;
export interface AWSSessionCredentials {
  accessKeyId: string | redacted.Redacted<string>;
  secretAccessKey: string | redacted.Redacted<string>;
  sessionToken: string | redacted.Redacted<string>;
}
export type ContinuationToken = string;
export interface JobData {
  actionTypeId?: ActionTypeId;
  actionConfiguration?: ActionConfiguration;
  pipelineContext?: PipelineContext;
  inputArtifacts?: Artifact[];
  outputArtifacts?: Artifact[];
  artifactCredentials?: AWSSessionCredentials;
  continuationToken?: string;
  encryptionKey?: EncryptionKey;
}
export interface JobDetails {
  id?: string;
  data?: JobData;
  accountId?: string;
}
export interface GetJobDetailsOutput {
  jobDetails?: JobDetails;
}
export interface GetPipelineInput {
  name: string;
  version?: number;
}
export interface PipelineMetadata {
  pipelineArn?: string;
  created?: Date;
  updated?: Date;
  pollingDisabledAt?: Date;
}
export interface GetPipelineOutput {
  pipeline?: PipelineDeclaration;
  metadata?: PipelineMetadata;
}
export interface GetPipelineExecutionInput {
  pipelineName: string;
  pipelineExecutionId: string;
}
export type PipelineExecutionStatus =
  | "Cancelled"
  | "InProgress"
  | "Stopped"
  | "Stopping"
  | "Succeeded"
  | "Superseded"
  | "Failed"
  | (string & {});
export type PipelineExecutionStatusSummary = string;
export type RevisionChangeIdentifier = string;
export type RevisionSummary = string;
export interface ArtifactRevision {
  name?: string;
  revisionId?: string;
  revisionChangeIdentifier?: string;
  revisionSummary?: string;
  created?: Date;
  revisionUrl?: string;
}
export type ArtifactRevisionList = ArtifactRevision[];
export interface ResolvedPipelineVariable {
  name?: string;
  resolvedValue?: string;
}
export type ResolvedPipelineVariableList = ResolvedPipelineVariable[];
export type TriggerType =
  | "CreatePipeline"
  | "StartPipelineExecution"
  | "PollForSourceChanges"
  | "Webhook"
  | "CloudWatchEvent"
  | "PutActionRevision"
  | "WebhookV2"
  | "ManualRollback"
  | "AutomatedRollback"
  | (string & {});
export type TriggerDetail = string;
export interface ExecutionTrigger {
  triggerType?: TriggerType;
  triggerDetail?: string;
}
export type ExecutionType = "STANDARD" | "ROLLBACK" | (string & {});
export interface PipelineRollbackMetadata {
  rollbackTargetPipelineExecutionId?: string;
}
export interface PipelineExecution {
  pipelineName?: string;
  pipelineVersion?: number;
  pipelineExecutionId?: string;
  status?: PipelineExecutionStatus;
  statusSummary?: string;
  artifactRevisions?: ArtifactRevision[];
  variables?: ResolvedPipelineVariable[];
  trigger?: ExecutionTrigger;
  executionMode?: ExecutionMode;
  executionType?: ExecutionType;
  rollbackMetadata?: PipelineRollbackMetadata;
}
export interface GetPipelineExecutionOutput {
  pipelineExecution?: PipelineExecution;
}
export interface GetPipelineStateInput {
  name: string;
}
export type StageExecutionStatus =
  | "Cancelled"
  | "InProgress"
  | "Failed"
  | "Stopped"
  | "Stopping"
  | "Succeeded"
  | "Skipped"
  | (string & {});
export interface StageExecution {
  pipelineExecutionId: string;
  status: StageExecutionStatus;
  type?: ExecutionType;
}
export type StageExecutionList = StageExecution[];
export type Enabled = boolean;
export type LastChangedBy = string;
export type LastChangedAt = Date;
export interface TransitionState {
  enabled?: boolean;
  lastChangedBy?: string;
  lastChangedAt?: Date;
  disabledReason?: string;
}
export interface ActionRevision {
  revisionId: string;
  revisionChangeId?: string;
  created?: Date;
}
export type ActionExecutionStatus =
  | "InProgress"
  | "Abandoned"
  | "Succeeded"
  | "Failed"
  | (string & {});
export type ExecutionSummary = string;
export type ActionExecutionToken = string;
export type LastUpdatedBy = string;
export type ExecutionId = string;
export type Percentage = number;
export type Code = string;
export type Message = string;
export interface ErrorDetails {
  code?: string;
  message?: string;
}
export type LogStreamARN = string;
export interface ActionExecution {
  actionExecutionId?: string;
  status?: ActionExecutionStatus;
  summary?: string;
  lastStatusChange?: Date;
  token?: string;
  lastUpdatedBy?: string;
  externalExecutionId?: string;
  externalExecutionUrl?: string;
  percentComplete?: number;
  errorDetails?: ErrorDetails;
  logStreamARN?: string;
}
export interface ActionState {
  actionName?: string;
  currentRevision?: ActionRevision;
  latestExecution?: ActionExecution;
  entityUrl?: string;
  revisionUrl?: string;
}
export type ActionStateList = ActionState[];
export type ConditionExecutionStatus =
  | "InProgress"
  | "Failed"
  | "Errored"
  | "Succeeded"
  | "Cancelled"
  | "Abandoned"
  | "Overridden"
  | (string & {});
export interface StageConditionsExecution {
  status?: ConditionExecutionStatus;
  summary?: string;
}
export interface ConditionExecution {
  status?: ConditionExecutionStatus;
  summary?: string;
  lastStatusChange?: Date;
}
export interface RuleRevision {
  revisionId: string;
  revisionChangeId?: string;
  created?: Date;
}
export type RuleExecutionId = string;
export type RuleExecutionStatus =
  | "InProgress"
  | "Abandoned"
  | "Succeeded"
  | "Failed"
  | (string & {});
export type RuleExecutionToken = string;
export interface RuleExecution {
  ruleExecutionId?: string;
  status?: RuleExecutionStatus;
  summary?: string;
  lastStatusChange?: Date;
  token?: string;
  lastUpdatedBy?: string;
  externalExecutionId?: string;
  externalExecutionUrl?: string;
  errorDetails?: ErrorDetails;
}
export interface RuleState {
  ruleName?: string;
  currentRevision?: RuleRevision;
  latestExecution?: RuleExecution;
  entityUrl?: string;
  revisionUrl?: string;
}
export type RuleStateList = RuleState[];
export interface ConditionState {
  latestExecution?: ConditionExecution;
  ruleStates?: RuleState[];
}
export type ConditionStateList = ConditionState[];
export interface StageConditionState {
  latestExecution?: StageConditionsExecution;
  conditionStates?: ConditionState[];
}
export type RetryAttempt = number;
export type RetryTrigger = "AutomatedStageRetry" | "ManualStageRetry" | (string & {});
export interface RetryStageMetadata {
  autoStageRetryAttempt?: number;
  manualStageRetryAttempt?: number;
  latestRetryTrigger?: RetryTrigger;
}
export interface StageState {
  stageName?: string;
  inboundExecution?: StageExecution;
  inboundExecutions?: StageExecution[];
  inboundTransitionState?: TransitionState;
  actionStates?: ActionState[];
  latestExecution?: StageExecution;
  beforeEntryConditionState?: StageConditionState;
  onSuccessConditionState?: StageConditionState;
  onFailureConditionState?: StageConditionState;
  retryStageMetadata?: RetryStageMetadata;
}
export type StageStateList = StageState[];
export interface GetPipelineStateOutput {
  pipelineName?: string;
  pipelineVersion?: number;
  stageStates?: StageState[];
  created?: Date;
  updated?: Date;
}
export interface GetThirdPartyJobDetailsInput {
  jobId: string;
  clientToken: string;
}
export interface ThirdPartyJobData {
  actionTypeId?: ActionTypeId;
  actionConfiguration?: ActionConfiguration;
  pipelineContext?: PipelineContext;
  inputArtifacts?: Artifact[];
  outputArtifacts?: Artifact[];
  artifactCredentials?: AWSSessionCredentials;
  continuationToken?: string;
  encryptionKey?: EncryptionKey;
}
export interface ThirdPartyJobDetails {
  id?: string;
  data?: ThirdPartyJobData;
  nonce?: string;
}
export interface GetThirdPartyJobDetailsOutput {
  jobDetails?: ThirdPartyJobDetails;
}
export type StartTimeRange = "Latest" | "All" | (string & {});
export interface LatestInPipelineExecutionFilter {
  pipelineExecutionId: string;
  startTimeRange: StartTimeRange;
}
export interface ActionExecutionFilter {
  pipelineExecutionId?: string;
  latestInPipelineExecution?: LatestInPipelineExecutionFilter;
}
export type MaxResults = number;
export type NextToken = string;
export interface ListActionExecutionsInput {
  pipelineName: string;
  filter?: ActionExecutionFilter;
  maxResults?: number;
  nextToken?: string;
}
export type ResolvedActionConfigurationMap = { [key: string]: string | undefined };
export type S3Bucket = string;
export type S3Key = string;
export interface S3Location {
  bucket?: string;
  key?: string;
}
export interface ArtifactDetail {
  name?: string;
  s3location?: S3Location;
}
export type ArtifactDetailList = ArtifactDetail[];
export interface ActionExecutionInput {
  actionTypeId?: ActionTypeId;
  configuration?: { [key: string]: string | undefined };
  resolvedConfiguration?: { [key: string]: string | undefined };
  roleArn?: string;
  region?: string;
  inputArtifacts?: ArtifactDetail[];
  namespace?: string;
}
export type ExternalExecutionId = string;
export type ExternalExecutionSummary = string;
export interface ActionExecutionResult {
  externalExecutionId?: string;
  externalExecutionSummary?: string;
  externalExecutionUrl?: string;
  errorDetails?: ErrorDetails;
  logStreamARN?: string;
}
export type OutputVariablesKey = string;
export type OutputVariablesValue = string;
export type OutputVariablesMap = { [key: string]: string | undefined };
export interface ActionExecutionOutput {
  outputArtifacts?: ArtifactDetail[];
  executionResult?: ActionExecutionResult;
  outputVariables?: { [key: string]: string | undefined };
}
export interface ActionExecutionDetail {
  pipelineExecutionId?: string;
  actionExecutionId?: string;
  pipelineVersion?: number;
  stageName?: string;
  actionName?: string;
  startTime?: Date;
  lastUpdateTime?: Date;
  updatedBy?: string;
  status?: ActionExecutionStatus;
  input?: ActionExecutionInput;
  output?: ActionExecutionOutput;
}
export type ActionExecutionDetailList = ActionExecutionDetail[];
export interface ListActionExecutionsOutput {
  actionExecutionDetails?: ActionExecutionDetail[];
  nextToken?: string;
}
export interface ListActionTypesInput {
  actionOwnerFilter?: ActionOwner;
  nextToken?: string;
  regionFilter?: string;
}
export type ActionTypeList = ActionType[];
export interface ListActionTypesOutput {
  actionTypes: ActionType[];
  nextToken?: string;
}
export type TargetFilterName = "TARGET_STATUS" | (string & {});
export type TargetFilterValue = string;
export type TargetFilterValueList = string[];
export interface TargetFilter {
  name?: TargetFilterName;
  values?: string[];
}
export type TargetFilterList = TargetFilter[];
export interface ListDeployActionExecutionTargetsInput {
  pipelineName?: string;
  actionExecutionId: string;
  filters?: TargetFilter[];
  maxResults?: number;
  nextToken?: string;
}
export interface DeployTargetEventContext {
  ssmCommandId?: string;
  message?: string;
}
export interface DeployTargetEvent {
  name?: string;
  status?: string;
  startTime?: Date;
  endTime?: Date;
  context?: DeployTargetEventContext;
}
export type DeployTargetEventList = DeployTargetEvent[];
export interface DeployActionExecutionTarget {
  targetId?: string;
  targetType?: string;
  status?: string;
  startTime?: Date;
  endTime?: Date;
  events?: DeployTargetEvent[];
}
export type DeployActionExecutionTargetList = DeployActionExecutionTarget[];
export interface ListDeployActionExecutionTargetsOutput {
  targets?: DeployActionExecutionTarget[];
  nextToken?: string;
}
export interface SucceededInStageFilter {
  stageName?: string;
}
export interface PipelineExecutionFilter {
  succeededInStage?: SucceededInStageFilter;
}
export interface ListPipelineExecutionsInput {
  pipelineName: string;
  maxResults?: number;
  filter?: PipelineExecutionFilter;
  nextToken?: string;
}
export interface SourceRevision {
  actionName: string;
  revisionId?: string;
  revisionSummary?: string;
  revisionUrl?: string;
}
export type SourceRevisionList = SourceRevision[];
export type StopPipelineExecutionReason = string;
export interface StopExecutionTrigger {
  reason?: string;
}
export interface PipelineExecutionSummary {
  pipelineExecutionId?: string;
  status?: PipelineExecutionStatus;
  statusSummary?: string;
  startTime?: Date;
  lastUpdateTime?: Date;
  sourceRevisions?: SourceRevision[];
  trigger?: ExecutionTrigger;
  stopTrigger?: StopExecutionTrigger;
  executionMode?: ExecutionMode;
  executionType?: ExecutionType;
  rollbackMetadata?: PipelineRollbackMetadata;
}
export type PipelineExecutionSummaryList = PipelineExecutionSummary[];
export interface ListPipelineExecutionsOutput {
  pipelineExecutionSummaries?: PipelineExecutionSummary[];
  nextToken?: string;
}
export type MaxPipelines = number;
export interface ListPipelinesInput {
  nextToken?: string;
  maxResults?: number;
}
export interface PipelineSummary {
  name?: string;
  version?: number;
  pipelineType?: PipelineType;
  executionMode?: ExecutionMode;
  created?: Date;
  updated?: Date;
}
export type PipelineList = PipelineSummary[];
export interface ListPipelinesOutput {
  pipelines?: PipelineSummary[];
  nextToken?: string;
}
export interface RuleExecutionFilter {
  pipelineExecutionId?: string;
  latestInPipelineExecution?: LatestInPipelineExecutionFilter;
}
export interface ListRuleExecutionsInput {
  pipelineName: string;
  filter?: RuleExecutionFilter;
  maxResults?: number;
  nextToken?: string;
}
export type ResolvedRuleConfigurationMap = { [key: string]: string | undefined };
export interface RuleExecutionInput {
  ruleTypeId?: RuleTypeId;
  configuration?: { [key: string]: string | undefined };
  resolvedConfiguration?: { [key: string]: string | undefined };
  roleArn?: string;
  region?: string;
  inputArtifacts?: ArtifactDetail[];
}
export interface RuleExecutionResult {
  externalExecutionId?: string;
  externalExecutionSummary?: string;
  externalExecutionUrl?: string;
  errorDetails?: ErrorDetails;
}
export interface RuleExecutionOutput {
  executionResult?: RuleExecutionResult;
}
export interface RuleExecutionDetail {
  pipelineExecutionId?: string;
  ruleExecutionId?: string;
  pipelineVersion?: number;
  stageName?: string;
  ruleName?: string;
  startTime?: Date;
  lastUpdateTime?: Date;
  updatedBy?: string;
  status?: RuleExecutionStatus;
  input?: RuleExecutionInput;
  output?: RuleExecutionOutput;
}
export type RuleExecutionDetailList = RuleExecutionDetail[];
export interface ListRuleExecutionsOutput {
  ruleExecutionDetails?: RuleExecutionDetail[];
  nextToken?: string;
}
export interface ListRuleTypesInput {
  ruleOwnerFilter?: RuleOwner;
  regionFilter?: string;
}
export interface RuleTypeSettings {
  thirdPartyConfigurationUrl?: string;
  entityUrlTemplate?: string;
  executionUrlTemplate?: string;
  revisionUrlTemplate?: string;
}
export type RuleConfigurationPropertyType = "String" | "Number" | "Boolean" | (string & {});
export interface RuleConfigurationProperty {
  name: string;
  required: boolean;
  key: boolean;
  secret: boolean;
  queryable?: boolean;
  description?: string;
  type?: RuleConfigurationPropertyType;
}
export type RuleConfigurationPropertyList = RuleConfigurationProperty[];
export interface RuleType {
  id: RuleTypeId;
  settings?: RuleTypeSettings;
  ruleConfigurationProperties?: RuleConfigurationProperty[];
  inputArtifactDetails: ArtifactDetails;
}
export type RuleTypeList = RuleType[];
export interface ListRuleTypesOutput {
  ruleTypes: RuleType[];
}
export type ResourceArn = string;
export interface ListTagsForResourceInput {
  resourceArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTagsForResourceOutput {
  tags?: Tag[];
  nextToken?: string;
}
export interface ListWebhooksInput {
  NextToken?: string;
  MaxResults?: number;
}
export type JsonPath = string;
export type MatchEquals = string;
export interface WebhookFilterRule {
  jsonPath: string;
  matchEquals?: string;
}
export type WebhookFilters = WebhookFilterRule[];
export type WebhookAuthenticationType = "GITHUB_HMAC" | "IP" | "UNAUTHENTICATED" | (string & {});
export type WebhookAuthConfigurationAllowedIPRange = string;
export type WebhookAuthConfigurationSecretToken = string;
export interface WebhookAuthConfiguration {
  AllowedIPRange?: string;
  SecretToken?: string | redacted.Redacted<string>;
}
export interface WebhookDefinition {
  name: string;
  targetPipeline: string;
  targetAction: string;
  filters: WebhookFilterRule[];
  authentication: WebhookAuthenticationType;
  authenticationConfiguration: WebhookAuthConfiguration;
}
export type WebhookUrl = string;
export type WebhookErrorMessage = string;
export type WebhookErrorCode = string;
export type WebhookLastTriggered = Date;
export type WebhookArn = string;
export interface ListWebhookItem {
  definition: WebhookDefinition;
  url: string;
  errorMessage?: string;
  errorCode?: string;
  lastTriggered?: Date;
  arn?: string;
  tags?: Tag[];
}
export type WebhookList = ListWebhookItem[];
export interface ListWebhooksOutput {
  webhooks?: ListWebhookItem[];
  NextToken?: string;
}
export type ConditionType = "BEFORE_ENTRY" | "ON_SUCCESS" | (string & {});
export interface OverrideStageConditionInput {
  pipelineName: string;
  stageName: string;
  pipelineExecutionId: string;
  conditionType: ConditionType;
}
export interface OverrideStageConditionResponse {}
export type MaxBatchSize = number;
export type ActionConfigurationQueryableValue = string;
export type QueryParamMap = { [key: string]: string | undefined };
export interface PollForJobsInput {
  actionTypeId: ActionTypeId;
  maxBatchSize?: number;
  queryParam?: { [key: string]: string | undefined };
}
export interface Job {
  id?: string;
  data?: JobData;
  nonce?: string;
  accountId?: string;
}
export type JobList = Job[];
export interface PollForJobsOutput {
  jobs?: Job[];
}
export interface PollForThirdPartyJobsInput {
  actionTypeId: ActionTypeId;
  maxBatchSize?: number;
}
export type ClientId = string;
export interface ThirdPartyJob {
  clientId?: string;
  jobId?: string;
}
export type ThirdPartyJobList = ThirdPartyJob[];
export interface PollForThirdPartyJobsOutput {
  jobs?: ThirdPartyJob[];
}
export interface PutActionRevisionInput {
  pipelineName: string;
  stageName: string;
  actionName: string;
  actionRevision: ActionRevision;
}
export interface PutActionRevisionOutput {
  newRevision?: boolean;
  pipelineExecutionId?: string;
}
export type ApprovalSummary = string;
export type ApprovalStatus = "Approved" | "Rejected" | (string & {});
export interface ApprovalResult {
  summary: string;
  status: ApprovalStatus;
}
export type ApprovalToken = string;
export interface PutApprovalResultInput {
  pipelineName: string;
  stageName: string;
  actionName: string;
  result: ApprovalResult;
  token: string;
}
export interface PutApprovalResultOutput {
  approvedAt?: Date;
}
export type FailureType =
  | "JobFailed"
  | "ConfigurationError"
  | "PermissionError"
  | "RevisionOutOfSync"
  | "RevisionUnavailable"
  | "SystemUnavailable"
  | (string & {});
export interface FailureDetails {
  type: FailureType;
  message: string;
  externalExecutionId?: string;
}
export interface PutJobFailureResultInput {
  jobId: string;
  failureDetails: FailureDetails;
}
export interface PutJobFailureResultResponse {}
export interface CurrentRevision {
  revision: string;
  changeIdentifier: string;
  created?: Date;
  revisionSummary?: string;
}
export interface ExecutionDetails {
  summary?: string;
  externalExecutionId?: string;
  percentComplete?: number;
}
export interface PutJobSuccessResultInput {
  jobId: string;
  currentRevision?: CurrentRevision;
  continuationToken?: string;
  executionDetails?: ExecutionDetails;
  outputVariables?: { [key: string]: string | undefined };
}
export interface PutJobSuccessResultResponse {}
export interface PutThirdPartyJobFailureResultInput {
  jobId: string;
  clientToken: string;
  failureDetails: FailureDetails;
}
export interface PutThirdPartyJobFailureResultResponse {}
export interface PutThirdPartyJobSuccessResultInput {
  jobId: string;
  clientToken: string;
  currentRevision?: CurrentRevision;
  continuationToken?: string;
  executionDetails?: ExecutionDetails;
}
export interface PutThirdPartyJobSuccessResultResponse {}
export interface PutWebhookInput {
  webhook: WebhookDefinition;
  tags?: Tag[];
}
export interface PutWebhookOutput {
  webhook?: ListWebhookItem;
}
export interface RegisterWebhookWithThirdPartyInput {
  webhookName?: string;
}
export interface RegisterWebhookWithThirdPartyOutput {}
export interface RetryStageExecutionInput {
  pipelineName: string;
  stageName: string;
  pipelineExecutionId: string;
  retryMode: StageRetryMode;
}
export interface RetryStageExecutionOutput {
  pipelineExecutionId?: string;
}
export interface RollbackStageInput {
  pipelineName: string;
  stageName: string;
  targetPipelineExecutionId: string;
}
export interface RollbackStageOutput {
  pipelineExecutionId: string;
}
export interface PipelineVariable {
  name: string;
  value: string;
}
export type PipelineVariableList = PipelineVariable[];
export type ClientRequestToken = string;
export type SourceRevisionType =
  | "COMMIT_ID"
  | "IMAGE_DIGEST"
  | "S3_OBJECT_VERSION_ID"
  | "S3_OBJECT_KEY"
  | (string & {});
export interface SourceRevisionOverride {
  actionName: string;
  revisionType: SourceRevisionType;
  revisionValue: string;
}
export type SourceRevisionOverrideList = SourceRevisionOverride[];
export interface StartPipelineExecutionInput {
  name: string;
  variables?: PipelineVariable[];
  clientRequestToken?: string;
  sourceRevisions?: SourceRevisionOverride[];
}
export interface StartPipelineExecutionOutput {
  pipelineExecutionId?: string;
}
export interface StopPipelineExecutionInput {
  pipelineName: string;
  pipelineExecutionId: string;
  abandon?: boolean;
  reason?: string;
}
export interface StopPipelineExecutionOutput {
  pipelineExecutionId?: string;
}
export interface TagResourceInput {
  resourceArn: string;
  tags: Tag[];
}
export interface TagResourceOutput {}
export type TagKeyList = string[];
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceOutput {}
export interface UpdateActionTypeInput {
  actionType: ActionTypeDeclaration;
}
export interface UpdateActionTypeResponse {}
export interface UpdatePipelineInput {
  pipeline: PipelineDeclaration;
}
export interface UpdatePipelineOutput {
  pipeline?: PipelineDeclaration;
}
export type AcknowledgeJobError =
  | InvalidNonceException
  | JobNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a specified job and whether that job has been received by
 * the job worker. Used for custom actions only.
 */
export const acknowledgeJob: API.OperationMethod<
  AcknowledgeJobInput,
  AcknowledgeJobOutput,
  AcknowledgeJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<AcknowledgeJobInput>,
  output: __S(1, __c0, 1) as any as S.Schema<AcknowledgeJobOutput>,
  errors: [InvalidNonceException, JobNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcknowledgeJob",
}));

export type AcknowledgeThirdPartyJobError =
  | InvalidClientTokenException
  | InvalidNonceException
  | JobNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Confirms a job worker has received the specified job. Used for partner actions
 * only.
 */
export const acknowledgeThirdPartyJob: API.OperationMethod<
  AcknowledgeThirdPartyJobInput,
  AcknowledgeThirdPartyJobOutput,
  AcknowledgeThirdPartyJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<AcknowledgeThirdPartyJobInput>,
  output: __S(3, __c0, 3) as any as S.Schema<AcknowledgeThirdPartyJobOutput>,
  errors: [
    InvalidClientTokenException,
    InvalidNonceException,
    JobNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcknowledgeThirdPartyJob",
}));

export type CreateCustomActionTypeError =
  | ConcurrentModificationException
  | InvalidTagsException
  | LimitExceededException
  | TooManyTagsException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new custom action that can be used in all pipelines associated with the
 * Amazon Web Services account. Only used for custom actions.
 */
export const createCustomActionType: API.OperationMethod<
  CreateCustomActionTypeInput,
  CreateCustomActionTypeOutput,
  CreateCustomActionTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10, __c1, 2) as any as S.Schema<CreateCustomActionTypeInput>,
  output: __S(13, __c1, 5) as any as S.Schema<CreateCustomActionTypeOutput>,
  errors: [
    ConcurrentModificationException,
    InvalidTagsException,
    LimitExceededException,
    TooManyTagsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCustomActionType",
}));

export type CreatePipelineError =
  | ConcurrentModificationException
  | InvalidActionDeclarationException
  | InvalidBlockerDeclarationException
  | InvalidStageDeclarationException
  | InvalidStructureException
  | InvalidTagsException
  | LimitExceededException
  | PipelineNameInUseException
  | TooManyTagsException
  | ValidationException
  | CommonErrors;
/**
 * Creates a pipeline.
 *
 * In the pipeline structure, you must include either `artifactStore`
 * or `artifactStores` in your pipeline, but you cannot use both. If you
 * create a cross-region action in your pipeline, you must use
 * `artifactStores`.
 */
export const createPipeline: API.OperationMethod<
  CreatePipelineInput,
  CreatePipelineOutput,
  CreatePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53, __c6, 5) as any as S.Schema<CreatePipelineInput>,
  output: __S(54, __c6, 6) as any as S.Schema<CreatePipelineOutput>,
  errors: [
    ConcurrentModificationException,
    InvalidActionDeclarationException,
    InvalidBlockerDeclarationException,
    InvalidStageDeclarationException,
    InvalidStructureException,
    InvalidTagsException,
    LimitExceededException,
    PipelineNameInUseException,
    TooManyTagsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePipeline",
}));

export type DeleteCustomActionTypeError =
  | ConcurrentModificationException
  | ValidationException
  | CommonErrors;
/**
 * Marks a custom action as deleted. `PollForJobs` for the custom action
 * fails after the action is marked for deletion. Used for custom actions only.
 *
 * To re-create a custom action after it has been deleted you must use a string in
 * the version field that has never been used before. This string can be an incremented
 * version number, for example. To restore a deleted custom action, use a JSON file
 * that is identical to the deleted action, including the original string in the
 * version field.
 */
export const deleteCustomActionType: API.OperationMethod<
  DeleteCustomActionTypeInput,
  DeleteCustomActionTypeResponse,
  DeleteCustomActionTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<DeleteCustomActionTypeInput>,
  output: __S(56, __c7, 0) as any as S.Schema<DeleteCustomActionTypeResponse>,
  errors: [ConcurrentModificationException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCustomActionType",
}));

export type DeletePipelineError =
  | ConcurrentModificationException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified pipeline.
 */
export const deletePipeline: API.OperationMethod<
  DeletePipelineInput,
  DeletePipelineResponse,
  DeletePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57, __c7, 1) as any as S.Schema<DeletePipelineInput>,
  output: __S(58, __c7, 2) as any as S.Schema<DeletePipelineResponse>,
  errors: [ConcurrentModificationException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePipeline",
}));

export type DeleteWebhookError =
  | ConcurrentModificationException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a previously created webhook by name. Deleting the webhook stops CodePipeline from starting a pipeline every time an external event occurs. The API
 * returns successfully when trying to delete a webhook that is already deleted. If a
 * deleted webhook is re-created by calling PutWebhook with the same name, it will have a
 * different URL.
 */
export const deleteWebhook: API.OperationMethod<
  DeleteWebhookInput,
  DeleteWebhookOutput,
  DeleteWebhookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<DeleteWebhookInput>,
  output: __S(60, __c7, 4) as any as S.Schema<DeleteWebhookOutput>,
  errors: [ConcurrentModificationException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWebhook",
}));

export type DeregisterWebhookWithThirdPartyError =
  | ValidationException
  | WebhookNotFoundException
  | CommonErrors;
/**
 * Removes the connection between the webhook that was created by CodePipeline
 * and the external tool with events to be detected. Currently supported only for webhooks
 * that target an action type of GitHub.
 */
export const deregisterWebhookWithThirdParty: API.OperationMethod<
  DeregisterWebhookWithThirdPartyInput,
  DeregisterWebhookWithThirdPartyOutput,
  DeregisterWebhookWithThirdPartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61, __c7, 5) as any as S.Schema<DeregisterWebhookWithThirdPartyInput>,
  output: __S(56, __c7, 0) as any as S.Schema<DeregisterWebhookWithThirdPartyOutput>,
  errors: [ValidationException, WebhookNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterWebhookWithThirdParty",
}));

export type DisableStageTransitionError =
  | PipelineNotFoundException
  | StageNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Prevents artifacts in a pipeline from transitioning to the next stage in the
 * pipeline.
 */
export const disableStageTransition: API.OperationMethod<
  DisableStageTransitionInput,
  DisableStageTransitionResponse,
  DisableStageTransitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62, __c7, 6) as any as S.Schema<DisableStageTransitionInput>,
  output: __S(56, __c7, 0) as any as S.Schema<DisableStageTransitionResponse>,
  errors: [PipelineNotFoundException, StageNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableStageTransition",
}));

export type EnableStageTransitionError =
  | PipelineNotFoundException
  | StageNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Enables artifacts in a pipeline to transition to a stage in a pipeline.
 */
export const enableStageTransition: API.OperationMethod<
  EnableStageTransitionInput,
  EnableStageTransitionResponse,
  EnableStageTransitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63, __c7, 7) as any as S.Schema<EnableStageTransitionInput>,
  output: __S(56, __c7, 0) as any as S.Schema<EnableStageTransitionResponse>,
  errors: [PipelineNotFoundException, StageNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableStageTransition",
}));

export type GetActionTypeError = ActionTypeNotFoundException | ValidationException | CommonErrors;
/**
 * Returns information about an action type created for an external provider, where the
 * action is to be used by customers of the external provider. The action can be created
 * with any supported integration model.
 */
export const getActionType: API.OperationMethod<
  GetActionTypeInput,
  GetActionTypeOutput,
  GetActionTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64, __c8, 0) as any as S.Schema<GetActionTypeInput>,
  output: __S(76, __c9, 4) as any as S.Schema<GetActionTypeOutput>,
  errors: [ActionTypeNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetActionType",
}));

export type GetJobDetailsError = JobNotFoundException | ValidationException | CommonErrors;
/**
 * Returns information about a job. Used for custom actions only.
 *
 * When this API is called, CodePipeline returns temporary credentials for
 * the S3 bucket used to store artifacts for the pipeline, if the action requires
 * access to that S3 bucket for input or output artifacts. This API also returns any
 * secret values defined for the action.
 */
export const getJobDetails: API.OperationMethod<
  GetJobDetailsInput,
  GetJobDetailsOutput,
  GetJobDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<GetJobDetailsInput>,
  output: __S(89, __c11, 1) as any as S.Schema<GetJobDetailsOutput>,
  errors: [JobNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJobDetails",
}));

export type GetPipelineError =
  | PipelineNotFoundException
  | PipelineVersionNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns the metadata, structure, stages, and actions of a pipeline. Can be used to
 * return the entire structure of a pipeline in JSON format, which can then be modified and
 * used to update the pipeline structure with UpdatePipeline.
 */
export const getPipeline: API.OperationMethod<
  GetPipelineInput,
  GetPipelineOutput,
  GetPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(90, __c11, 2) as any as S.Schema<GetPipelineInput>,
  output: __S(92, __c11, 4) as any as S.Schema<GetPipelineOutput>,
  errors: [PipelineNotFoundException, PipelineVersionNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPipeline",
}));

export type GetPipelineExecutionError =
  | PipelineExecutionNotFoundException
  | PipelineNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about an execution of a pipeline, including details about
 * artifacts, the pipeline execution ID, and the name, version, and status of the
 * pipeline.
 */
export const getPipelineExecution: API.OperationMethod<
  GetPipelineExecutionInput,
  GetPipelineExecutionOutput,
  GetPipelineExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93, __c11, 5) as any as S.Schema<GetPipelineExecutionInput>,
  output: __S(101, __c12, 5) as any as S.Schema<GetPipelineExecutionOutput>,
  errors: [PipelineExecutionNotFoundException, PipelineNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPipelineExecution",
}));

export type GetPipelineStateError = PipelineNotFoundException | ValidationException | CommonErrors;
/**
 * Returns information about the state of a pipeline, including the stages and
 * actions.
 *
 * Values returned in the `revisionId` and `revisionUrl`
 * fields indicate the source revision information, such as the commit ID, for the
 * current state.
 */
export const getPipelineState: API.OperationMethod<
  GetPipelineStateInput,
  GetPipelineStateOutput,
  GetPipelineStateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(102, __c12, 6) as any as S.Schema<GetPipelineStateInput>,
  output: __S(122, __c15, 2) as any as S.Schema<GetPipelineStateOutput>,
  errors: [PipelineNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPipelineState",
}));

export type GetThirdPartyJobDetailsError =
  | InvalidClientTokenException
  | InvalidJobException
  | JobNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Requests the details of a job for a third party action. Used for partner actions
 * only.
 *
 * When this API is called, CodePipeline returns temporary credentials for
 * the S3 bucket used to store artifacts for the pipeline, if the action requires
 * access to that S3 bucket for input or output artifacts. This API also returns any
 * secret values defined for the action.
 */
export const getThirdPartyJobDetails: API.OperationMethod<
  GetThirdPartyJobDetailsInput,
  GetThirdPartyJobDetailsOutput,
  GetThirdPartyJobDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(123, __c15, 3) as any as S.Schema<GetThirdPartyJobDetailsInput>,
  output: __S(125, __c15, 5) as any as S.Schema<GetThirdPartyJobDetailsOutput>,
  errors: [
    InvalidClientTokenException,
    InvalidJobException,
    JobNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetThirdPartyJobDetails",
}));

export type ListActionExecutionsError =
  | InvalidNextTokenException
  | PipelineExecutionNotFoundException
  | PipelineNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the action executions that have occurred in a pipeline.
 */
export const listActionExecutions: API.PaginatedOperationMethod<
  ListActionExecutionsInput,
  ListActionExecutionsOutput,
  ListActionExecutionsError,
  Credentials | HttpClient.HttpClient,
  ActionExecutionDetail
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(128, __c16, 0) as any as S.Schema<ListActionExecutionsInput>,
  output: __S(137, __c17, 1) as any as S.Schema<ListActionExecutionsOutput>,
  errors: [
    InvalidNextTokenException,
    PipelineExecutionNotFoundException,
    PipelineNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListActionExecutions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "actionExecutionDetails",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListActionTypesError = InvalidNextTokenException | ValidationException | CommonErrors;
/**
 * Gets a summary of all CodePipeline action types associated with your
 * account.
 */
export const listActionTypes: API.PaginatedOperationMethod<
  ListActionTypesInput,
  ListActionTypesOutput,
  ListActionTypesError,
  Credentials | HttpClient.HttpClient,
  ActionType
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(138, __c17, 2) as any as S.Schema<ListActionTypesInput>,
  output: __S(140, __c17, 4) as any as S.Schema<ListActionTypesOutput>,
  errors: [InvalidNextTokenException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListActionTypes",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "actionTypes" } as const,
})) as any;

export type ListDeployActionExecutionTargetsError =
  | ActionExecutionNotFoundException
  | InvalidNextTokenException
  | PipelineNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the targets for the deploy action.
 */
export const listDeployActionExecutionTargets: API.PaginatedOperationMethod<
  ListDeployActionExecutionTargetsInput,
  ListDeployActionExecutionTargetsOutput,
  ListDeployActionExecutionTargetsError,
  Credentials | HttpClient.HttpClient,
  DeployActionExecutionTarget
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(143, __c17, 7) as any as S.Schema<ListDeployActionExecutionTargetsInput>,
  output: __S(149, __c18, 5) as any as S.Schema<ListDeployActionExecutionTargetsOutput>,
  errors: [
    ActionExecutionNotFoundException,
    InvalidNextTokenException,
    PipelineNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDeployActionExecutionTargets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "targets",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPipelineExecutionsError =
  | InvalidNextTokenException
  | PipelineNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets a summary of the most recent executions for a pipeline.
 *
 * When applying the filter for pipeline executions that have succeeded in the stage,
 * the operation returns all executions in the current pipeline version beginning on
 * February 1, 2024.
 */
export const listPipelineExecutions: API.PaginatedOperationMethod<
  ListPipelineExecutionsInput,
  ListPipelineExecutionsOutput,
  ListPipelineExecutionsError,
  Credentials | HttpClient.HttpClient,
  PipelineExecutionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(152, __c19, 0) as any as S.Schema<ListPipelineExecutionsInput>,
  output: __S(158, __c19, 6) as any as S.Schema<ListPipelineExecutionsOutput>,
  errors: [InvalidNextTokenException, PipelineNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPipelineExecutions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "pipelineExecutionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPipelinesError = InvalidNextTokenException | ValidationException | CommonErrors;
/**
 * Gets a summary of all of the pipelines associated with your account.
 */
export const listPipelines: API.PaginatedOperationMethod<
  ListPipelinesInput,
  ListPipelinesOutput,
  ListPipelinesError,
  Credentials | HttpClient.HttpClient,
  PipelineSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(159, __c19, 7) as any as S.Schema<ListPipelinesInput>,
  output: __S(162, __c20, 2) as any as S.Schema<ListPipelinesOutput>,
  errors: [InvalidNextTokenException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPipelines",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "pipelines",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRuleExecutionsError =
  | InvalidNextTokenException
  | PipelineExecutionNotFoundException
  | PipelineNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the rule executions that have occurred in a pipeline configured for conditions
 * with rules.
 */
export const listRuleExecutions: API.PaginatedOperationMethod<
  ListRuleExecutionsInput,
  ListRuleExecutionsOutput,
  ListRuleExecutionsError,
  Credentials | HttpClient.HttpClient,
  RuleExecutionDetail
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(163, __c20, 3) as any as S.Schema<ListRuleExecutionsInput>,
  output: __S(169, __c21, 1) as any as S.Schema<ListRuleExecutionsOutput>,
  errors: [
    InvalidNextTokenException,
    PipelineExecutionNotFoundException,
    PipelineNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRuleExecutions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "ruleExecutionDetails",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRuleTypesError = InvalidNextTokenException | ValidationException | CommonErrors;
/**
 * Lists the rules for the condition. For more information about conditions, see Stage
 * conditions and How do
 * stage conditions work?.For more information about rules, see the CodePipeline rule reference.
 */
export const listRuleTypes: API.OperationMethod<
  ListRuleTypesInput,
  ListRuleTypesOutput,
  ListRuleTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(170, __c21, 2) as any as S.Schema<ListRuleTypesInput>,
  output: __S(173, __c21, 5) as any as S.Schema<ListRuleTypesOutput>,
  errors: [InvalidNextTokenException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRuleTypes",
}));

export type ListTagsForResourceError =
  | InvalidArnException
  | InvalidNextTokenException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets the set of key-value pairs (metadata) that are used to manage the
 * resource.
 */
export const listTagsForResource: API.PaginatedOperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(174, __c21, 6) as any as S.Schema<ListTagsForResourceInput>,
  output: __S(175, __c21, 7) as any as S.Schema<ListTagsForResourceOutput>,
  errors: [
    InvalidArnException,
    InvalidNextTokenException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "tags",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWebhooksError = InvalidNextTokenException | ValidationException | CommonErrors;
/**
 * Gets a listing of all the webhooks in this Amazon Web Services Region for this
 * account. The output lists all webhooks and includes the webhook URL and ARN and the
 * configuration for each webhook.
 *
 * If a secret token was provided, it will be redacted in the response.
 */
export const listWebhooks: API.PaginatedOperationMethod<
  ListWebhooksInput,
  ListWebhooksOutput,
  ListWebhooksError,
  Credentials | HttpClient.HttpClient,
  ListWebhookItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(176, __c22, 0) as any as S.Schema<ListWebhooksInput>,
  output: __S(183, __c22, 7) as any as S.Schema<ListWebhooksOutput>,
  errors: [InvalidNextTokenException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWebhooks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "webhooks",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type OverrideStageConditionError =
  | ConcurrentPipelineExecutionsLimitExceededException
  | ConditionNotOverridableException
  | ConflictException
  | NotLatestPipelineExecutionException
  | PipelineNotFoundException
  | StageNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Used to override a stage condition. For more information about conditions, see Stage
 * conditions and How do
 * stage conditions work?.
 */
export const overrideStageCondition: API.OperationMethod<
  OverrideStageConditionInput,
  OverrideStageConditionResponse,
  OverrideStageConditionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(184, __c23, 0) as any as S.Schema<OverrideStageConditionInput>,
  output: __S(56, __c7, 0) as any as S.Schema<OverrideStageConditionResponse>,
  errors: [
    ConcurrentPipelineExecutionsLimitExceededException,
    ConditionNotOverridableException,
    ConflictException,
    NotLatestPipelineExecutionException,
    PipelineNotFoundException,
    StageNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "OverrideStageCondition",
}));

export type PollForJobsError = ActionTypeNotFoundException | ValidationException | CommonErrors;
/**
 * Returns information about any jobs for CodePipeline to act on.
 * `PollForJobs` is valid only for action types with "Custom" in the owner
 * field. If the action type contains `AWS` or `ThirdParty` in the
 * owner field, the `PollForJobs` action returns an error.
 *
 * When this API is called, CodePipeline returns temporary credentials for
 * the S3 bucket used to store artifacts for the pipeline, if the action requires
 * access to that S3 bucket for input or output artifacts. This API also returns any
 * secret values defined for the action.
 */
export const pollForJobs: API.OperationMethod<
  PollForJobsInput,
  PollForJobsOutput,
  PollForJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(185, __c23, 1) as any as S.Schema<PollForJobsInput>,
  output: __S(188, __c23, 4) as any as S.Schema<PollForJobsOutput>,
  errors: [ActionTypeNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PollForJobs",
}));

export type PollForThirdPartyJobsError =
  | ActionTypeNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Determines whether there are any third party jobs for a job worker to act on. Used
 * for partner actions only.
 *
 * When this API is called, CodePipeline returns temporary credentials for
 * the S3 bucket used to store artifacts for the pipeline, if the action requires
 * access to that S3 bucket for input or output artifacts.
 */
export const pollForThirdPartyJobs: API.OperationMethod<
  PollForThirdPartyJobsInput,
  PollForThirdPartyJobsOutput,
  PollForThirdPartyJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(189, __c23, 5) as any as S.Schema<PollForThirdPartyJobsInput>,
  output: __S(192, __c24, 0) as any as S.Schema<PollForThirdPartyJobsOutput>,
  errors: [ActionTypeNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PollForThirdPartyJobs",
}));

export type PutActionRevisionError =
  | ActionNotFoundException
  | ConcurrentPipelineExecutionsLimitExceededException
  | PipelineNotFoundException
  | StageNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Provides information to CodePipeline about new revisions to a
 * source.
 */
export const putActionRevision: API.OperationMethod<
  PutActionRevisionInput,
  PutActionRevisionOutput,
  PutActionRevisionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(193, __c24, 1) as any as S.Schema<PutActionRevisionInput>,
  output: __S(194, __c24, 2) as any as S.Schema<PutActionRevisionOutput>,
  errors: [
    ActionNotFoundException,
    ConcurrentPipelineExecutionsLimitExceededException,
    PipelineNotFoundException,
    StageNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutActionRevision",
}));

export type PutApprovalResultError =
  | ActionNotFoundException
  | ApprovalAlreadyCompletedException
  | InvalidApprovalTokenException
  | PipelineNotFoundException
  | StageNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Provides the response to a manual approval request to CodePipeline. Valid
 * responses include Approved and Rejected.
 */
export const putApprovalResult: API.OperationMethod<
  PutApprovalResultInput,
  PutApprovalResultOutput,
  PutApprovalResultError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(196, __c24, 4) as any as S.Schema<PutApprovalResultInput>,
  output: __S(197, __c24, 5) as any as S.Schema<PutApprovalResultOutput>,
  errors: [
    ActionNotFoundException,
    ApprovalAlreadyCompletedException,
    InvalidApprovalTokenException,
    PipelineNotFoundException,
    StageNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutApprovalResult",
}));

export type PutJobFailureResultError =
  | InvalidJobStateException
  | JobNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Represents the failure of a job as returned to the pipeline by a job worker. Used
 * for custom actions only.
 */
export const putJobFailureResult: API.OperationMethod<
  PutJobFailureResultInput,
  PutJobFailureResultResponse,
  PutJobFailureResultError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(199, __c24, 7) as any as S.Schema<PutJobFailureResultInput>,
  output: __S(56, __c7, 0) as any as S.Schema<PutJobFailureResultResponse>,
  errors: [InvalidJobStateException, JobNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutJobFailureResult",
}));

export type PutJobSuccessResultError =
  | InvalidJobStateException
  | JobNotFoundException
  | OutputVariablesSizeExceededException
  | ValidationException
  | CommonErrors;
/**
 * Represents the success of a job as returned to the pipeline by a job worker. Used
 * for custom actions only.
 */
export const putJobSuccessResult: API.OperationMethod<
  PutJobSuccessResultInput,
  PutJobSuccessResultResponse,
  PutJobSuccessResultError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(202, __c25, 2) as any as S.Schema<PutJobSuccessResultInput>,
  output: __S(56, __c7, 0) as any as S.Schema<PutJobSuccessResultResponse>,
  errors: [
    InvalidJobStateException,
    JobNotFoundException,
    OutputVariablesSizeExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutJobSuccessResult",
}));

export type PutThirdPartyJobFailureResultError =
  | InvalidClientTokenException
  | InvalidJobStateException
  | JobNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Represents the failure of a third party job as returned to the pipeline by a job
 * worker. Used for partner actions only.
 */
export const putThirdPartyJobFailureResult: API.OperationMethod<
  PutThirdPartyJobFailureResultInput,
  PutThirdPartyJobFailureResultResponse,
  PutThirdPartyJobFailureResultError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(203, __c25, 3) as any as S.Schema<PutThirdPartyJobFailureResultInput>,
  output: __S(56, __c7, 0) as any as S.Schema<PutThirdPartyJobFailureResultResponse>,
  errors: [
    InvalidClientTokenException,
    InvalidJobStateException,
    JobNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutThirdPartyJobFailureResult",
}));

export type PutThirdPartyJobSuccessResultError =
  | InvalidClientTokenException
  | InvalidJobStateException
  | JobNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Represents the success of a third party job as returned to the pipeline by a job
 * worker. Used for partner actions only.
 */
export const putThirdPartyJobSuccessResult: API.OperationMethod<
  PutThirdPartyJobSuccessResultInput,
  PutThirdPartyJobSuccessResultResponse,
  PutThirdPartyJobSuccessResultError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(204, __c25, 4) as any as S.Schema<PutThirdPartyJobSuccessResultInput>,
  output: __S(56, __c7, 0) as any as S.Schema<PutThirdPartyJobSuccessResultResponse>,
  errors: [
    InvalidClientTokenException,
    InvalidJobStateException,
    JobNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutThirdPartyJobSuccessResult",
}));

export type PutWebhookError =
  | ConcurrentModificationException
  | InvalidTagsException
  | InvalidWebhookAuthenticationParametersException
  | InvalidWebhookFilterPatternException
  | LimitExceededException
  | PipelineNotFoundException
  | TooManyTagsException
  | ValidationException
  | CommonErrors;
/**
 * Defines a webhook and returns a unique webhook URL generated by CodePipeline.
 * This URL can be supplied to third party source hosting providers to call every time
 * there's a code change. When CodePipeline receives a POST request on this URL, the
 * pipeline defined in the webhook is started as long as the POST request satisfied the
 * authentication and filtering requirements supplied when defining the webhook.
 * RegisterWebhookWithThirdParty and DeregisterWebhookWithThirdParty APIs can be used to
 * automatically configure supported third parties to call the generated webhook
 * URL.
 *
 * When creating CodePipeline webhooks, do not use your own credentials or
 * reuse the same secret token across multiple webhooks. For optimal security, generate
 * a unique secret token for each webhook you create. The secret token is an arbitrary
 * string that you provide, which GitHub uses to compute and sign the webhook payloads
 * sent to CodePipeline, for protecting the integrity and authenticity of the
 * webhook payloads. Using your own credentials or reusing the same token across
 * multiple webhooks can lead to security vulnerabilities.
 *
 * If a secret token was provided, it will be redacted in the response.
 */
export const putWebhook: API.OperationMethod<
  PutWebhookInput,
  PutWebhookOutput,
  PutWebhookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(205, __c25, 5) as any as S.Schema<PutWebhookInput>,
  output: __S(206, __c25, 6) as any as S.Schema<PutWebhookOutput>,
  errors: [
    ConcurrentModificationException,
    InvalidTagsException,
    InvalidWebhookAuthenticationParametersException,
    InvalidWebhookFilterPatternException,
    LimitExceededException,
    PipelineNotFoundException,
    TooManyTagsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutWebhook",
}));

export type RegisterWebhookWithThirdPartyError =
  | ValidationException
  | WebhookNotFoundException
  | CommonErrors;
/**
 * Configures a connection between the webhook that was created and the external tool
 * with events to be detected.
 */
export const registerWebhookWithThirdParty: API.OperationMethod<
  RegisterWebhookWithThirdPartyInput,
  RegisterWebhookWithThirdPartyOutput,
  RegisterWebhookWithThirdPartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(207, __c25, 7) as any as S.Schema<RegisterWebhookWithThirdPartyInput>,
  output: __S(56, __c7, 0) as any as S.Schema<RegisterWebhookWithThirdPartyOutput>,
  errors: [ValidationException, WebhookNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterWebhookWithThirdParty",
}));

export type RetryStageExecutionError =
  | ConcurrentPipelineExecutionsLimitExceededException
  | ConflictException
  | NotLatestPipelineExecutionException
  | PipelineNotFoundException
  | StageNotFoundException
  | StageNotRetryableException
  | ValidationException
  | CommonErrors;
/**
 * You can retry a stage that has failed without having to run a pipeline again from
 * the beginning. You do this by either retrying the failed actions in a stage or by
 * retrying all actions in the stage starting from the first action in the stage. When you
 * retry the failed actions in a stage, all actions that are still in progress continue
 * working, and failed actions are triggered again. When you retry a failed stage from the
 * first action in the stage, the stage cannot have any actions in progress. Before a stage
 * can be retried, it must either have all actions failed or some actions failed and some
 * succeeded.
 */
export const retryStageExecution: API.OperationMethod<
  RetryStageExecutionInput,
  RetryStageExecutionOutput,
  RetryStageExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(208, __c26, 0) as any as S.Schema<RetryStageExecutionInput>,
  output: __S(209, __c26, 1) as any as S.Schema<RetryStageExecutionOutput>,
  errors: [
    ConcurrentPipelineExecutionsLimitExceededException,
    ConflictException,
    NotLatestPipelineExecutionException,
    PipelineNotFoundException,
    StageNotFoundException,
    StageNotRetryableException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RetryStageExecution",
}));

export type RollbackStageError =
  | ConflictException
  | PipelineExecutionNotFoundException
  | PipelineExecutionOutdatedException
  | PipelineNotFoundException
  | StageNotFoundException
  | UnableToRollbackStageException
  | ValidationException
  | CommonErrors;
/**
 * Rolls back a stage execution.
 */
export const rollbackStage: API.OperationMethod<
  RollbackStageInput,
  RollbackStageOutput,
  RollbackStageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(210, __c26, 2) as any as S.Schema<RollbackStageInput>,
  output: __S(211, __c26, 3) as any as S.Schema<RollbackStageOutput>,
  errors: [
    ConflictException,
    PipelineExecutionNotFoundException,
    PipelineExecutionOutdatedException,
    PipelineNotFoundException,
    StageNotFoundException,
    UnableToRollbackStageException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RollbackStage",
}));

export type StartPipelineExecutionError =
  | ConcurrentPipelineExecutionsLimitExceededException
  | ConflictException
  | PipelineNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Starts the specified pipeline. Specifically, it begins processing the latest commit
 * to the source location specified as part of the pipeline.
 */
export const startPipelineExecution: API.OperationMethod<
  StartPipelineExecutionInput,
  StartPipelineExecutionOutput,
  StartPipelineExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(216, __c27, 0) as any as S.Schema<StartPipelineExecutionInput>,
  output: __S(209, __c26, 1) as any as S.Schema<StartPipelineExecutionOutput>,
  errors: [
    ConcurrentPipelineExecutionsLimitExceededException,
    ConflictException,
    PipelineNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartPipelineExecution",
}));

export type StopPipelineExecutionError =
  | ConflictException
  | DuplicatedStopRequestException
  | PipelineExecutionNotStoppableException
  | PipelineNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Stops the specified pipeline execution. You choose to either stop the pipeline
 * execution by completing in-progress actions without starting subsequent actions, or by
 * abandoning in-progress actions. While completing or abandoning in-progress actions, the
 * pipeline execution is in a `Stopping` state. After all in-progress actions
 * are completed or abandoned, the pipeline execution is in a `Stopped`
 * state.
 */
export const stopPipelineExecution: API.OperationMethod<
  StopPipelineExecutionInput,
  StopPipelineExecutionOutput,
  StopPipelineExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(217, __c27, 1) as any as S.Schema<StopPipelineExecutionInput>,
  output: __S(209, __c26, 1) as any as S.Schema<StopPipelineExecutionOutput>,
  errors: [
    ConflictException,
    DuplicatedStopRequestException,
    PipelineExecutionNotStoppableException,
    PipelineNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopPipelineExecution",
}));

export type TagResourceError =
  | ConcurrentModificationException
  | InvalidArnException
  | InvalidTagsException
  | ResourceNotFoundException
  | TooManyTagsException
  | ValidationException
  | CommonErrors;
/**
 * Adds to or modifies the tags of the given resource. Tags are metadata that can be used
 * to manage a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(218, __c27, 2) as any as S.Schema<TagResourceInput>,
  output: __S(60, __c7, 4) as any as S.Schema<TagResourceOutput>,
  errors: [
    ConcurrentModificationException,
    InvalidArnException,
    InvalidTagsException,
    ResourceNotFoundException,
    TooManyTagsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | ConcurrentModificationException
  | InvalidArnException
  | InvalidTagsException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes tags from an Amazon Web Services resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(219, __c27, 3) as any as S.Schema<UntagResourceInput>,
  output: __S(60, __c7, 4) as any as S.Schema<UntagResourceOutput>,
  errors: [
    ConcurrentModificationException,
    InvalidArnException,
    InvalidTagsException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateActionTypeError =
  | ActionTypeNotFoundException
  | RequestFailedException
  | ValidationException
  | CommonErrors;
/**
 * Updates an action type that was created with any supported integration model, where
 * the action type is to be used by customers of the action type provider. Use a JSON file
 * with the action definition and `UpdateActionType` to provide the full
 * structure.
 */
export const updateActionType: API.OperationMethod<
  UpdateActionTypeInput,
  UpdateActionTypeResponse,
  UpdateActionTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(220, __c27, 4) as any as S.Schema<UpdateActionTypeInput>,
  output: __S(221, __c27, 5) as any as S.Schema<UpdateActionTypeResponse>,
  errors: [ActionTypeNotFoundException, RequestFailedException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateActionType",
}));

export type UpdatePipelineError =
  | InvalidActionDeclarationException
  | InvalidBlockerDeclarationException
  | InvalidStageDeclarationException
  | InvalidStructureException
  | LimitExceededException
  | ValidationException
  | CommonErrors;
/**
 * Updates a specified pipeline with edits or changes to its structure. Use a JSON
 * file with the pipeline structure and `UpdatePipeline` to provide the full
 * structure of the pipeline. Updating the pipeline increases the version number of the
 * pipeline by 1.
 */
export const updatePipeline: API.OperationMethod<
  UpdatePipelineInput,
  UpdatePipelineOutput,
  UpdatePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(222, __c27, 6) as any as S.Schema<UpdatePipelineInput>,
  output: __S(223, __c27, 7) as any as S.Schema<UpdatePipelineOutput>,
  errors: [
    InvalidActionDeclarationException,
    InvalidBlockerDeclarationException,
    InvalidStageDeclarationException,
    InvalidStructureException,
    LimitExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePipeline",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ jobId: S.String, nonce: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AcknowledgeJobInput" });
    case 1:
      return S.suspend(() => S.Struct({ status: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "AcknowledgeJobOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ jobId: S.String, nonce: S.String, clientToken: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AcknowledgeThirdPartyJobInput",
      });
    case 3:
      return S.suspend(() => S.Struct({ status: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "AcknowledgeThirdPartyJobOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          thirdPartyConfigurationUrl: S.optional(S.String),
          entityUrlTemplate: S.optional(S.String),
          executionUrlTemplate: S.optional(S.String),
          revisionUrlTemplate: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActionTypeSettings" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          required: S.Boolean,
          key: S.Boolean,
          secret: S.Boolean,
          queryable: S.optional(S.Boolean),
          description: S.optional(S.String),
          type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ActionConfigurationProperty",
      });
    case 6:
      return S.Array(__S(5, __c0, 5));
    case 7:
      return S.suspend(() => S.Struct({ minimumCount: S.Number, maximumCount: S.Number })).annotate(
        { identifier: "ArtifactDetails" },
      );
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(__S(8, __c1, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          category: S.String,
          provider: S.String,
          version: S.String,
          settings: S.optional(__S(4, __c0, 4)),
          configurationProperties: S.optional(__S(6, __c0, 6)),
          inputArtifactDetails: __S(7, __c0, 7),
          outputArtifactDetails: __S(7, __c0, 7),
          tags: S.optional(__S(9, __c1, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateCustomActionTypeInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          category: S.String,
          owner: S.String,
          provider: S.String,
          version: S.String,
        }),
      ).annotate({ identifier: "ActionTypeId" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: __S(11, __c1, 3),
          settings: S.optional(__S(4, __c0, 4)),
          actionConfigurationProperties: S.optional(__S(6, __c0, 6)),
          inputArtifactDetails: __S(7, __c0, 7),
          outputArtifactDetails: __S(7, __c0, 7),
        }),
      ).annotate({ identifier: "ActionType" });
    case 5:
      return S.suspend(() =>
        S.Struct({ actionType: __S(12, __c1, 4), tags: S.optional(__S(9, __c1, 1)) }).pipe(ns),
      ).annotate({
        identifier: "CreateCustomActionTypeOutput",
      });
    case 6:
      return S.suspend(() => S.Struct({ id: S.String, type: S.String })).annotate({
        identifier: "EncryptionKey",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          location: S.String,
          encryptionKey: S.optional(__S(14, __c1, 6)),
        }),
      ).annotate({ identifier: "ArtifactStore" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(15, __c1, 7).pipe(S.optional));
    case 1:
      return S.suspend(() => S.Struct({ name: S.String, type: S.String })).annotate({
        identifier: "BlockerDeclaration",
      });
    case 2:
      return S.Array(__S(17, __c2, 1));
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.String, files: S.optional(__S(20, __c2, 4)) }),
      ).annotate({ identifier: "OutputArtifact" });
    case 6:
      return S.Array(__S(21, __c2, 5));
    case 7:
      return S.suspend(() => S.Struct({ name: S.String })).annotate({
        identifier: "InputArtifact",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(23, __c2, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.String, value: S.String, type: S.optional(S.String) }),
      ).annotate({ identifier: "EnvironmentVariable" });
    case 2:
      return S.Array(__S(25, __c3, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          actionTypeId: __S(11, __c1, 3),
          runOrder: S.optional(S.Number),
          configuration: S.optional(__S(19, __c2, 3)),
          commands: S.optional(__S(20, __c2, 4)),
          outputArtifacts: S.optional(__S(22, __c2, 6)),
          inputArtifacts: S.optional(__S(24, __c3, 0)),
          outputVariables: S.optional(__S(20, __c2, 4)),
          roleArn: S.optional(S.String),
          region: S.optional(S.String),
          namespace: S.optional(S.String),
          timeoutInMinutes: S.optional(S.Number),
          environmentVariables: S.optional(__S(26, __c3, 2)),
        }),
      ).annotate({ identifier: "ActionDeclaration" });
    case 4:
      return S.Array(__S(27, __c3, 3));
    case 5:
      return S.suspend(() => S.Struct({ retryMode: S.optional(S.String) })).annotate({
        identifier: "RetryConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          category: S.String,
          owner: S.optional(S.String),
          provider: S.String,
          version: S.optional(S.String),
        }),
      ).annotate({ identifier: "RuleTypeId" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          ruleTypeId: __S(30, __c3, 6),
          configuration: S.optional(__S(19, __c2, 3)),
          commands: S.optional(__S(20, __c2, 4)),
          inputArtifacts: S.optional(__S(24, __c3, 0)),
          roleArn: S.optional(S.String),
          region: S.optional(S.String),
          timeoutInMinutes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RuleDeclaration" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31, __c3, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ result: S.optional(S.String), rules: S.optional(__S(32, __c4, 0)) }),
      ).annotate({ identifier: "Condition" });
    case 2:
      return S.Array(__S(33, __c4, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          result: S.optional(S.String),
          retryConfiguration: S.optional(__S(29, __c3, 5)),
          conditions: S.optional(__S(34, __c4, 2)),
        }),
      ).annotate({ identifier: "FailureConditions" });
    case 4:
      return S.suspend(() => S.Struct({ conditions: __S(34, __c4, 2) })).annotate({
        identifier: "SuccessConditions",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          blockers: S.optional(__S(18, __c2, 2)),
          actions: __S(28, __c3, 4),
          onFailure: S.optional(__S(35, __c4, 3)),
          onSuccess: S.optional(__S(36, __c4, 4)),
          beforeEntry: S.optional(__S(36, __c4, 4)),
        }),
      ).annotate({ identifier: "StageDeclaration" });
    case 6:
      return S.Array(__S(37, __c4, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          defaultValue: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PipelineVariableDeclaration",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(39, __c4, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          includes: S.optional(__S(20, __c2, 4)),
          excludes: S.optional(__S(20, __c2, 4)),
        }),
      ).annotate({ identifier: "GitTagFilterCriteria" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          includes: S.optional(__S(20, __c2, 4)),
          excludes: S.optional(__S(20, __c2, 4)),
        }),
      ).annotate({ identifier: "GitBranchFilterCriteria" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          includes: S.optional(__S(20, __c2, 4)),
          excludes: S.optional(__S(20, __c2, 4)),
        }),
      ).annotate({
        identifier: "GitFilePathFilterCriteria",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          tags: S.optional(__S(41, __c5, 1)),
          branches: S.optional(__S(42, __c5, 2)),
          filePaths: S.optional(__S(43, __c5, 3)),
        }),
      ).annotate({ identifier: "GitPushFilter" });
    case 5:
      return S.Array(__S(44, __c5, 4));
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          events: S.optional(__S(46, __c5, 6)),
          branches: S.optional(__S(42, __c5, 2)),
          filePaths: S.optional(__S(43, __c5, 3)),
        }),
      ).annotate({ identifier: "GitPullRequestFilter" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(47, __c5, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          sourceActionName: S.String,
          push: S.optional(__S(45, __c5, 5)),
          pullRequest: S.optional(__S(48, __c6, 0)),
        }),
      ).annotate({ identifier: "GitConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({ providerType: S.String, gitConfiguration: __S(49, __c6, 1) }),
      ).annotate({
        identifier: "PipelineTriggerDeclaration",
      });
    case 3:
      return S.Array(__S(50, __c6, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          roleArn: S.String,
          artifactStore: S.optional(__S(15, __c1, 7)),
          artifactStores: S.optional(__S(16, __c2, 0)),
          stages: __S(38, __c4, 6),
          version: S.optional(S.Number),
          executionMode: S.optional(S.String),
          pipelineType: S.optional(S.String),
          variables: S.optional(__S(40, __c5, 0)),
          triggers: S.optional(__S(51, __c6, 3)),
        }),
      ).annotate({ identifier: "PipelineDeclaration" });
    case 5:
      return S.suspend(() =>
        S.Struct({ pipeline: __S(52, __c6, 4), tags: S.optional(__S(9, __c1, 1)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreatePipelineInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          pipeline: S.optional(__S(52, __c6, 4)),
          tags: S.optional(__S(9, __c1, 1)),
        }).pipe(ns),
      ).annotate({ identifier: "CreatePipelineOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ category: S.String, provider: S.String, version: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteCustomActionTypeInput",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteCustomActionTypeResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeletePipelineInput" });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeletePipelineResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteWebhookInput" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteWebhookOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ webhookName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeregisterWebhookWithThirdPartyInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.String,
          stageName: S.String,
          transitionType: S.String,
          reason: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DisableStageTransitionInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.String,
          stageName: S.String,
          transitionType: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "EnableStageTransitionInput",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          category: S.String,
          owner: S.String,
          provider: S.String,
          version: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetActionTypeInput" });
    case 1:
      return S.suspend(() => S.Struct({ lambdaFunctionArn: S.String })).annotate({
        identifier: "LambdaExecutorConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          pollingAccounts: S.optional(__S(20, __c2, 4)),
          pollingServicePrincipals: S.optional(__S(20, __c2, 4)),
        }),
      ).annotate({
        identifier: "JobWorkerExecutorConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          lambdaExecutorConfiguration: S.optional(__S(65, __c8, 1)),
          jobWorkerExecutorConfiguration: S.optional(__S(66, __c8, 2)),
        }),
      ).annotate({ identifier: "ExecutorConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          configuration: __S(67, __c8, 3),
          type: S.String,
          policyStatementsTemplate: S.optional(S.String),
          jobTimeout: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ActionTypeExecutor" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          category: S.String,
          owner: S.String,
          provider: S.String,
          version: S.String,
        }),
      ).annotate({ identifier: "ActionTypeIdentifier" });
    case 6:
      return S.suspend(() => S.Struct({ minimumCount: S.Number, maximumCount: S.Number })).annotate(
        {
          identifier: "ActionTypeArtifactDetails",
        },
      );
    case 7:
      return S.suspend(() => S.Struct({ allowedAccounts: __S(20, __c2, 4) })).annotate({
        identifier: "ActionTypePermissions",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          optional: S.Boolean,
          key: S.Boolean,
          noEcho: S.Boolean,
          queryable: S.optional(S.Boolean),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActionTypeProperty" });
    case 1:
      return S.Array(__S(72, __c9, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          configurationUrl: S.optional(S.String),
          entityUrlTemplate: S.optional(S.String),
          executionUrlTemplate: S.optional(S.String),
          revisionUrlTemplate: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActionTypeUrls" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          executor: __S(68, __c8, 4),
          id: __S(69, __c8, 5),
          inputArtifactDetails: __S(70, __c8, 6),
          outputArtifactDetails: __S(70, __c8, 6),
          permissions: S.optional(__S(71, __c8, 7)),
          properties: S.optional(__S(73, __c9, 1)),
          urls: S.optional(__S(74, __c9, 2)),
        }),
      ).annotate({ identifier: "ActionTypeDeclaration" });
    case 4:
      return S.suspend(() =>
        S.Struct({ actionType: S.optional(__S(75, __c9, 3)) }).pipe(ns),
      ).annotate({ identifier: "GetActionTypeOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ jobId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetJobDetailsInput" });
    case 6:
      return S.suspend(() => S.Struct({ configuration: S.optional(__S(19, __c2, 3)) })).annotate({
        identifier: "ActionConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ name: S.optional(S.String) })).annotate({
        identifier: "StageContext",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), actionExecutionId: S.optional(S.String) }),
      ).annotate({ identifier: "ActionContext" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.optional(S.String),
          stage: S.optional(__S(79, __c9, 7)),
          action: S.optional(__S(80, __c10, 0)),
          pipelineArn: S.optional(S.String),
          pipelineExecutionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "PipelineContext" });
    case 2:
      return S.suspend(() => S.Struct({ bucketName: S.String, objectKey: S.String })).annotate({
        identifier: "S3ArtifactLocation",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          s3Location: S.optional(__S(82, __c10, 2)),
        }),
      ).annotate({ identifier: "ArtifactLocation" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          revision: S.optional(S.String),
          location: S.optional(__S(83, __c10, 3)),
        }),
      ).annotate({ identifier: "Artifact" });
    case 5:
      return S.Array(__S(84, __c10, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          accessKeyId: SensitiveString,
          secretAccessKey: SensitiveString,
          sessionToken: SensitiveString,
        }),
      ).annotate({ identifier: "AWSSessionCredentials" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          actionTypeId: S.optional(__S(11, __c1, 3)),
          actionConfiguration: S.optional(__S(78, __c9, 6)),
          pipelineContext: S.optional(__S(81, __c10, 1)),
          inputArtifacts: S.optional(__S(85, __c10, 5)),
          outputArtifacts: S.optional(__S(85, __c10, 5)),
          artifactCredentials: S.optional(__S(86, __c10, 6)),
          continuationToken: S.optional(S.String),
          encryptionKey: S.optional(__S(14, __c1, 6)),
        }),
      ).annotate({ identifier: "JobData" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          data: S.optional(__S(87, __c10, 7)),
          accountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "JobDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({ jobDetails: S.optional(__S(88, __c11, 0)) }).pipe(ns),
      ).annotate({
        identifier: "GetJobDetailsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.String, version: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetPipelineInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          pipelineArn: S.optional(S.String),
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          pollingDisabledAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "PipelineMetadata" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          pipeline: S.optional(__S(52, __c6, 4)),
          metadata: S.optional(__S(91, __c11, 3)),
        }).pipe(ns),
      ).annotate({ identifier: "GetPipelineOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ pipelineName: S.String, pipelineExecutionId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetPipelineExecutionInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          revisionId: S.optional(S.String),
          revisionChangeIdentifier: S.optional(S.String),
          revisionSummary: S.optional(S.String),
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          revisionUrl: S.optional(S.String),
        }),
      ).annotate({ identifier: "ArtifactRevision" });
    case 7:
      return S.Array(__S(94, __c11, 6));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), resolvedValue: S.optional(S.String) }),
      ).annotate({ identifier: "ResolvedPipelineVariable" });
    case 1:
      return S.Array(__S(96, __c12, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ triggerType: S.optional(S.String), triggerDetail: S.optional(S.String) }),
      ).annotate({ identifier: "ExecutionTrigger" });
    case 3:
      return S.suspend(() =>
        S.Struct({ rollbackTargetPipelineExecutionId: S.optional(S.String) }),
      ).annotate({ identifier: "PipelineRollbackMetadata" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.optional(S.String),
          pipelineVersion: S.optional(S.Number),
          pipelineExecutionId: S.optional(S.String),
          status: S.optional(S.String),
          statusSummary: S.optional(S.String),
          artifactRevisions: S.optional(__S(95, __c11, 7)),
          variables: S.optional(__S(97, __c12, 1)),
          trigger: S.optional(__S(98, __c12, 2)),
          executionMode: S.optional(S.String),
          executionType: S.optional(S.String),
          rollbackMetadata: S.optional(__S(99, __c12, 3)),
        }),
      ).annotate({ identifier: "PipelineExecution" });
    case 5:
      return S.suspend(() =>
        S.Struct({ pipelineExecution: S.optional(__S(100, __c12, 4)) }).pipe(ns),
      ).annotate({
        identifier: "GetPipelineExecutionOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetPipelineStateInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          pipelineExecutionId: S.String,
          status: S.String,
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "StageExecution" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(103, __c12, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          enabled: S.optional(S.Boolean),
          lastChangedBy: S.optional(S.String),
          lastChangedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          disabledReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "TransitionState" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          revisionId: S.String,
          revisionChangeId: S.optional(S.String),
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ActionRevision" });
    case 3:
      return S.suspend(() =>
        S.Struct({ code: S.optional(S.String), message: S.optional(S.String) }),
      ).annotate({ identifier: "ErrorDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          actionExecutionId: S.optional(S.String),
          status: S.optional(S.String),
          summary: S.optional(S.String),
          lastStatusChange: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          token: S.optional(S.String),
          lastUpdatedBy: S.optional(S.String),
          externalExecutionId: S.optional(S.String),
          externalExecutionUrl: S.optional(S.String),
          percentComplete: S.optional(S.Number),
          errorDetails: S.optional(__S(107, __c13, 3)),
          logStreamARN: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActionExecution" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          actionName: S.optional(S.String),
          currentRevision: S.optional(__S(106, __c13, 2)),
          latestExecution: S.optional(__S(108, __c13, 4)),
          entityUrl: S.optional(S.String),
          revisionUrl: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActionState" });
    case 6:
      return S.Array(__S(109, __c13, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ status: S.optional(S.String), summary: S.optional(S.String) }),
      ).annotate({ identifier: "StageConditionsExecution" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          summary: S.optional(S.String),
          lastStatusChange: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ConditionExecution" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ruleExecutionId: S.optional(S.String),
          status: S.optional(S.String),
          summary: S.optional(S.String),
          lastStatusChange: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          token: S.optional(S.String),
          lastUpdatedBy: S.optional(S.String),
          externalExecutionId: S.optional(S.String),
          externalExecutionUrl: S.optional(S.String),
          errorDetails: S.optional(__S(107, __c13, 3)),
        }),
      ).annotate({ identifier: "RuleExecution" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ruleName: S.optional(S.String),
          currentRevision: S.optional(__S(106, __c13, 2)),
          latestExecution: S.optional(__S(113, __c14, 1)),
          entityUrl: S.optional(S.String),
          revisionUrl: S.optional(S.String),
        }),
      ).annotate({ identifier: "RuleState" });
    case 3:
      return S.Array(__S(114, __c14, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          latestExecution: S.optional(__S(112, __c14, 0)),
          ruleStates: S.optional(__S(115, __c14, 3)),
        }),
      ).annotate({ identifier: "ConditionState" });
    case 5:
      return S.Array(__S(116, __c14, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          latestExecution: S.optional(__S(111, __c13, 7)),
          conditionStates: S.optional(__S(117, __c14, 5)),
        }),
      ).annotate({ identifier: "StageConditionState" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          autoStageRetryAttempt: S.optional(S.Number),
          manualStageRetryAttempt: S.optional(S.Number),
          latestRetryTrigger: S.optional(S.String),
        }),
      ).annotate({ identifier: "RetryStageMetadata" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          stageName: S.optional(S.String),
          inboundExecution: S.optional(__S(103, __c12, 7)),
          inboundExecutions: S.optional(__S(104, __c13, 0)),
          inboundTransitionState: S.optional(__S(105, __c13, 1)),
          actionStates: S.optional(__S(110, __c13, 6)),
          latestExecution: S.optional(__S(103, __c12, 7)),
          beforeEntryConditionState: S.optional(__S(118, __c14, 6)),
          onSuccessConditionState: S.optional(__S(118, __c14, 6)),
          onFailureConditionState: S.optional(__S(118, __c14, 6)),
          retryStageMetadata: S.optional(__S(119, __c14, 7)),
        }),
      ).annotate({ identifier: "StageState" });
    case 1:
      return S.Array(__S(120, __c15, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.optional(S.String),
          pipelineVersion: S.optional(S.Number),
          stageStates: S.optional(__S(121, __c15, 1)),
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({ identifier: "GetPipelineStateOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ jobId: S.String, clientToken: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetThirdPartyJobDetailsInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          data: S.optional(__S(87, __c10, 7)),
          nonce: S.optional(S.String),
        }),
      ).annotate({ identifier: "ThirdPartyJobDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({ jobDetails: S.optional(__S(124, __c15, 4)) }).pipe(ns),
      ).annotate({
        identifier: "GetThirdPartyJobDetailsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ pipelineExecutionId: S.String, startTimeRange: S.String }),
      ).annotate({
        identifier: "LatestInPipelineExecutionFilter",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          pipelineExecutionId: S.optional(S.String),
          latestInPipelineExecution: S.optional(__S(126, __c15, 6)),
        }),
      ).annotate({ identifier: "ActionExecutionFilter" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.String,
          filter: S.optional(__S(127, __c15, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListActionExecutionsInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ bucket: S.optional(S.String), key: S.optional(S.String) }),
      ).annotate({ identifier: "S3Location" });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), s3location: S.optional(__S(129, __c16, 1)) }),
      ).annotate({ identifier: "ArtifactDetail" });
    case 3:
      return S.Array(__S(130, __c16, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          actionTypeId: S.optional(__S(11, __c1, 3)),
          configuration: S.optional(__S(19, __c2, 3)),
          resolvedConfiguration: S.optional(__S(19, __c2, 3)),
          roleArn: S.optional(S.String),
          region: S.optional(S.String),
          inputArtifacts: S.optional(__S(131, __c16, 3)),
          namespace: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActionExecutionInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          externalExecutionId: S.optional(S.String),
          externalExecutionSummary: S.optional(S.String),
          externalExecutionUrl: S.optional(S.String),
          errorDetails: S.optional(__S(107, __c13, 3)),
          logStreamARN: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActionExecutionResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          outputArtifacts: S.optional(__S(131, __c16, 3)),
          executionResult: S.optional(__S(133, __c16, 5)),
          outputVariables: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({ identifier: "ActionExecutionOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          pipelineExecutionId: S.optional(S.String),
          actionExecutionId: S.optional(S.String),
          pipelineVersion: S.optional(S.Number),
          stageName: S.optional(S.String),
          actionName: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedBy: S.optional(S.String),
          status: S.optional(S.String),
          input: S.optional(__S(132, __c16, 4)),
          output: S.optional(__S(134, __c16, 6)),
        }),
      ).annotate({ identifier: "ActionExecutionDetail" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(135, __c16, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          actionExecutionDetails: S.optional(__S(136, __c17, 0)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListActionExecutionsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          actionOwnerFilter: S.optional(S.String),
          nextToken: S.optional(S.String),
          regionFilter: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListActionTypesInput" });
    case 3:
      return S.Array(__S(12, __c1, 4));
    case 4:
      return S.suspend(() =>
        S.Struct({ actionTypes: __S(139, __c17, 3), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListActionTypesOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), values: S.optional(__S(20, __c2, 4)) }),
      ).annotate({ identifier: "TargetFilter" });
    case 6:
      return S.Array(__S(141, __c17, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.optional(S.String),
          actionExecutionId: S.String,
          filters: S.optional(__S(142, __c17, 6)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListDeployActionExecutionTargetsInput",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ssmCommandId: S.optional(S.String), message: S.optional(S.String) }),
      ).annotate({ identifier: "DeployTargetEventContext" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          status: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          context: S.optional(__S(144, __c18, 0)),
        }),
      ).annotate({ identifier: "DeployTargetEvent" });
    case 2:
      return S.Array(__S(145, __c18, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          targetId: S.optional(S.String),
          targetType: S.optional(S.String),
          status: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          events: S.optional(__S(146, __c18, 2)),
        }),
      ).annotate({
        identifier: "DeployActionExecutionTarget",
      });
    case 4:
      return S.Array(__S(147, __c18, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          targets: S.optional(__S(148, __c18, 4)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListDeployActionExecutionTargetsOutput",
      });
    case 6:
      return S.suspend(() => S.Struct({ stageName: S.optional(S.String) })).annotate({
        identifier: "SucceededInStageFilter",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ succeededInStage: S.optional(__S(150, __c18, 6)) }),
      ).annotate({ identifier: "PipelineExecutionFilter" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.String,
          maxResults: S.optional(S.Number),
          filter: S.optional(__S(151, __c18, 7)),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPipelineExecutionsInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          actionName: S.String,
          revisionId: S.optional(S.String),
          revisionSummary: S.optional(S.String),
          revisionUrl: S.optional(S.String),
        }),
      ).annotate({ identifier: "SourceRevision" });
    case 2:
      return S.Array(__S(153, __c19, 1));
    case 3:
      return S.suspend(() => S.Struct({ reason: S.optional(S.String) })).annotate({
        identifier: "StopExecutionTrigger",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          pipelineExecutionId: S.optional(S.String),
          status: S.optional(S.String),
          statusSummary: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          sourceRevisions: S.optional(__S(154, __c19, 2)),
          trigger: S.optional(__S(98, __c12, 2)),
          stopTrigger: S.optional(__S(155, __c19, 3)),
          executionMode: S.optional(S.String),
          executionType: S.optional(S.String),
          rollbackMetadata: S.optional(__S(99, __c12, 3)),
        }),
      ).annotate({ identifier: "PipelineExecutionSummary" });
    case 5:
      return S.Array(__S(156, __c19, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          pipelineExecutionSummaries: S.optional(__S(157, __c19, 5)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListPipelineExecutionsOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListPipelinesInput" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          version: S.optional(S.Number),
          pipelineType: S.optional(S.String),
          executionMode: S.optional(S.String),
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "PipelineSummary" });
    case 1:
      return S.Array(__S(160, __c20, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          pipelines: S.optional(__S(161, __c20, 1)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListPipelinesOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.String,
          filter: S.optional(__S(127, __c15, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRuleExecutionsInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ruleTypeId: S.optional(__S(30, __c3, 6)),
          configuration: S.optional(__S(19, __c2, 3)),
          resolvedConfiguration: S.optional(__S(19, __c2, 3)),
          roleArn: S.optional(S.String),
          region: S.optional(S.String),
          inputArtifacts: S.optional(__S(131, __c16, 3)),
        }),
      ).annotate({ identifier: "RuleExecutionInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          externalExecutionId: S.optional(S.String),
          externalExecutionSummary: S.optional(S.String),
          externalExecutionUrl: S.optional(S.String),
          errorDetails: S.optional(__S(107, __c13, 3)),
        }),
      ).annotate({ identifier: "RuleExecutionResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({ executionResult: S.optional(__S(165, __c20, 5)) }),
      ).annotate({ identifier: "RuleExecutionOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          pipelineExecutionId: S.optional(S.String),
          ruleExecutionId: S.optional(S.String),
          pipelineVersion: S.optional(S.Number),
          stageName: S.optional(S.String),
          ruleName: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedBy: S.optional(S.String),
          status: S.optional(S.String),
          input: S.optional(__S(164, __c20, 4)),
          output: S.optional(__S(166, __c20, 6)),
        }),
      ).annotate({ identifier: "RuleExecutionDetail" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(167, __c20, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ruleExecutionDetails: S.optional(__S(168, __c21, 0)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListRuleExecutionsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ruleOwnerFilter: S.optional(S.String),
          regionFilter: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRuleTypesInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: __S(30, __c3, 6),
          settings: S.optional(__S(4, __c0, 4)),
          ruleConfigurationProperties: S.optional(__S(6, __c0, 6)),
          inputArtifactDetails: __S(7, __c0, 7),
        }),
      ).annotate({ identifier: "RuleType" });
    case 4:
      return S.Array(__S(171, __c21, 3));
    case 5:
      return S.suspend(() => S.Struct({ ruleTypes: __S(172, __c21, 4) }).pipe(ns)).annotate({
        identifier: "ListRuleTypesOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ tags: S.optional(__S(9, __c1, 1)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "ListTagsForResourceOutput",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListWebhooksInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ jsonPath: S.String, matchEquals: S.optional(S.String) }),
      ).annotate({ identifier: "WebhookFilterRule" });
    case 2:
      return S.Array(__S(177, __c22, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          AllowedIPRange: S.optional(S.String),
          SecretToken: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "WebhookAuthConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          targetPipeline: S.String,
          targetAction: S.String,
          filters: __S(178, __c22, 2),
          authentication: S.String,
          authenticationConfiguration: __S(179, __c22, 3),
        }),
      ).annotate({ identifier: "WebhookDefinition" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          definition: __S(180, __c22, 4),
          url: S.String,
          errorMessage: S.optional(S.String),
          errorCode: S.optional(S.String),
          lastTriggered: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          arn: S.optional(S.String),
          tags: S.optional(__S(9, __c1, 1)),
        }),
      ).annotate({ identifier: "ListWebhookItem" });
    case 6:
      return S.Array(__S(181, __c22, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          webhooks: S.optional(__S(182, __c22, 6)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListWebhooksOutput" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.String,
          stageName: S.String,
          pipelineExecutionId: S.String,
          conditionType: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "OverrideStageConditionInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          actionTypeId: __S(11, __c1, 3),
          maxBatchSize: S.optional(S.Number),
          queryParam: S.optional(__S(19, __c2, 3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PollForJobsInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          data: S.optional(__S(87, __c10, 7)),
          nonce: S.optional(S.String),
          accountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "Job" });
    case 3:
      return S.Array(__S(186, __c23, 2));
    case 4:
      return S.suspend(() => S.Struct({ jobs: S.optional(__S(187, __c23, 3)) }).pipe(ns)).annotate({
        identifier: "PollForJobsOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ actionTypeId: __S(11, __c1, 3), maxBatchSize: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PollForThirdPartyJobsInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ clientId: S.optional(S.String), jobId: S.optional(S.String) }),
      ).annotate({ identifier: "ThirdPartyJob" });
    case 7:
      return S.Array(__S(190, __c23, 6));
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ jobs: S.optional(__S(191, __c23, 7)) }).pipe(ns)).annotate({
        identifier: "PollForThirdPartyJobsOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.String,
          stageName: S.String,
          actionName: S.String,
          actionRevision: __S(106, __c13, 2),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutActionRevisionInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          newRevision: S.optional(S.Boolean),
          pipelineExecutionId: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "PutActionRevisionOutput" });
    case 3:
      return S.suspend(() => S.Struct({ summary: S.String, status: S.String })).annotate({
        identifier: "ApprovalResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.String,
          stageName: S.String,
          actionName: S.String,
          result: __S(195, __c24, 3),
          token: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutApprovalResultInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ approvedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "PutApprovalResultOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          message: S.String,
          externalExecutionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "FailureDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({ jobId: S.String, failureDetails: __S(198, __c24, 6) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutJobFailureResultInput" });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          revision: S.String,
          changeIdentifier: S.String,
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          revisionSummary: S.optional(S.String),
        }),
      ).annotate({ identifier: "CurrentRevision" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          summary: S.optional(S.String),
          externalExecutionId: S.optional(S.String),
          percentComplete: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ExecutionDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          currentRevision: S.optional(__S(200, __c25, 0)),
          continuationToken: S.optional(S.String),
          executionDetails: S.optional(__S(201, __c25, 1)),
          outputVariables: S.optional(__S(19, __c2, 3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutJobSuccessResultInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          clientToken: S.String,
          failureDetails: __S(198, __c24, 6),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutThirdPartyJobFailureResultInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          clientToken: S.String,
          currentRevision: S.optional(__S(200, __c25, 0)),
          continuationToken: S.optional(S.String),
          executionDetails: S.optional(__S(201, __c25, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutThirdPartyJobSuccessResultInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ webhook: __S(180, __c22, 4), tags: S.optional(__S(9, __c1, 1)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutWebhookInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ webhook: S.optional(__S(181, __c22, 5)) }).pipe(ns),
      ).annotate({
        identifier: "PutWebhookOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ webhookName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RegisterWebhookWithThirdPartyInput",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.String,
          stageName: S.String,
          pipelineExecutionId: S.String,
          retryMode: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RetryStageExecutionInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ pipelineExecutionId: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "RetryStageExecutionOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.String,
          stageName: S.String,
          targetPipelineExecutionId: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RollbackStageInput" });
    case 3:
      return S.suspend(() => S.Struct({ pipelineExecutionId: S.String }).pipe(ns)).annotate({
        identifier: "RollbackStageOutput",
      });
    case 4:
      return S.suspend(() => S.Struct({ name: S.String, value: S.String })).annotate({
        identifier: "PipelineVariable",
      });
    case 5:
      return S.Array(__S(212, __c26, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          actionName: S.String,
          revisionType: S.String,
          revisionValue: S.String,
        }),
      ).annotate({ identifier: "SourceRevisionOverride" });
    case 7:
      return S.Array(__S(214, __c26, 6));
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          variables: S.optional(__S(213, __c26, 5)),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          sourceRevisions: S.optional(__S(215, __c26, 7)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartPipelineExecutionInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          pipelineName: S.String,
          pipelineExecutionId: S.String,
          abandon: S.optional(S.Boolean),
          reason: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StopPipelineExecutionInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: __S(9, __c1, 1) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tagKeys: __S(20, __c2, 4) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ actionType: __S(75, __c9, 3) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateActionTypeInput" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateActionTypeResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ pipeline: __S(52, __c6, 4) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdatePipelineInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ pipeline: S.optional(__S(52, __c6, 4)) }).pipe(ns),
      ).annotate({ identifier: "UpdatePipelineOutput" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
