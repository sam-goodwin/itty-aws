import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "ObservabilityAdmin",
  serviceShapeName: "ObservabilityAdmin",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "observabilityadmin" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-10");
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
              `https://observabilityadmin-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://observabilityadmin-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://observabilityadmin.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://observabilityadmin.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      amznErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError, C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
      ResourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      amznErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidStateException
  extends /*@__PURE__*/ S.TaggedError<InvalidStateException>()(
    "InvalidStateException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
      ResourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
      ResourceType: /*@__PURE__*/ S.optional(S.String),
      ServiceCode: /*@__PURE__*/ S.optional(S.String),
      QuotaCode: /*@__PURE__*/ S.optional(S.String),
      amznErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()(
    "TooManyRequestsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Errors: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(137, __c17, 1)).annotate({
          identifier: "ValidationErrors",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type RuleName = string;
export type Region = string;
export type Regions = string[];
export type SourceFilterString = string;
export type LogsFilterString = string;
export type DataSourceFilterString = string;
export type EncryptedLogGroupStrategy = "ALLOW" | "SKIP" | (string & {});
export interface SourceLogsConfiguration {
  LogGroupSelectionCriteria?: string;
  DataSourceSelectionCriteria?: string;
  EncryptedLogGroupStrategy: EncryptedLogGroupStrategy;
}
export type MetricsFilterString = string;
export interface SourceMetricsConfiguration {
  MetricsSelectionCriteria?: string;
}
export interface SourceContextGraphConfiguration {}
export interface CentralizationRuleSource {
  Regions: string[];
  Scope?: string;
  SourceLogsConfiguration?: SourceLogsConfiguration;
  SourceMetricsConfiguration?: SourceMetricsConfiguration;
  SourceContextGraphConfiguration?: SourceContextGraphConfiguration;
}
export type AccountIdentifier = string;
export type EncryptionStrategy = "CUSTOMER_MANAGED" | "AWS_OWNED" | (string & {});
export type ResourceArn = string;
export type EncryptionConflictResolutionStrategy = "ALLOW" | "SKIP" | (string & {});
export type EncryptionScope =
  | "ENCRYPTED_SOURCE_ONLY"
  | "NEW_DESTINATION_LOG_GROUPS"
  | (string & {});
export interface LogsEncryptionConfiguration {
  EncryptionStrategy: EncryptionStrategy;
  KmsKeyArn?: string;
  EncryptionConflictResolutionStrategy?: EncryptionConflictResolutionStrategy;
  EncryptionScope?: EncryptionScope;
}
export interface LogsBackupConfiguration {
  Region: string;
  KmsKeyArn?: string;
}
export type LogGroupNamePattern = string;
export interface LogGroupNameConfiguration {
  LogGroupNamePattern: string;
}
export type IamRoleArn = string;
export type TagConflictResolutionStrategy = "IN_SYNC" | "ADD_ONLY" | "UPDATE_SYNC" | (string & {});
export interface TagPropagationConfiguration {
  DestinationRoleArn: string;
  TagConflictResolutionStrategy?: TagConflictResolutionStrategy;
}
export interface DestinationLogsConfiguration {
  LogsEncryptionConfiguration?: LogsEncryptionConfiguration;
  BackupConfiguration?: LogsBackupConfiguration;
  LogGroupNameConfiguration?: LogGroupNameConfiguration;
  TagPropagationConfiguration?: TagPropagationConfiguration;
}
export interface MetricsBackupConfiguration {
  Region: string;
}
export interface DestinationMetricsConfiguration {
  BackupConfiguration?: MetricsBackupConfiguration;
}
export interface CentralizationRuleDestination {
  Region: string;
  Account?: string;
  DestinationLogsConfiguration?: DestinationLogsConfiguration;
  DestinationMetricsConfiguration?: DestinationMetricsConfiguration;
}
export interface CentralizationRule {
  Source: CentralizationRuleSource;
  Destination: CentralizationRuleDestination;
}
export type TagKey = string;
export type TagValue = string;
export type TagMapInput = { [key: string]: string | undefined };
export interface CreateCentralizationRuleForOrganizationInput {
  RuleName: string;
  Rule: CentralizationRule;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateCentralizationRuleForOrganizationOutput {
  RuleArn?: string;
}
export interface CreateDatasetIntegrationInput {
  RoleArn: string;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateDatasetIntegrationOutput {
  Arn: string;
  RoleArn: string;
  CreatedAt: Date;
  UpdatedAt: Date;
}
export type SSEAlgorithm = "aws:kms" | "AES256" | (string & {});
export interface Encryption {
  SseAlgorithm: SSEAlgorithm;
  KmsKeyArn?: string;
}
export interface CreateS3TableIntegrationInput {
  Encryption: Encryption;
  RoleArn: string;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateS3TableIntegrationOutput {
  Arn?: string;
}
export type TelemetryPipelineName = string;
export type TelemetryPipelineConfigurationBody = string;
export interface TelemetryPipelineConfiguration {
  Body: string;
}
export interface CreateTelemetryPipelineInput {
  Name: string;
  Configuration: TelemetryPipelineConfiguration;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateTelemetryPipelineOutput {
  Arn?: string;
}
export type ResourceType =
  | "AWS::EC2::Instance"
  | "AWS::EC2::VPC"
  | "AWS::Lambda::Function"
  | "AWS::CloudTrail"
  | "AWS::EKS::Cluster"
  | "AWS::WAFv2::WebACL"
  | "AWS::ElasticLoadBalancingV2::LoadBalancer"
  | "AWS::Route53Resolver::ResolverEndpoint"
  | "AWS::BedrockAgentCore::Runtime"
  | "AWS::BedrockAgentCore::Browser"
  | "AWS::BedrockAgentCore::CodeInterpreter"
  | "AWS::BedrockAgentCore::Gateway"
  | "AWS::BedrockAgentCore::Memory"
  | "AWS::BedrockAgentCore::WorkloadIdentity"
  | "AWS::BedrockAgentCore::PaymentManager"
  | "AWS::SecurityHub::Hub"
  | "AWS::CloudFront::Distribution"
  | "AWS::SecurityHub::HubV2"
  | "AWS::CloudWatch::OTelEnrichment"
  | "AWS::MSK::Cluster"
  | "AWS::S3::Bucket"
  | "AWS::Bedrock::KnowledgeBase"
  | (string & {});
export type TelemetryType = "Logs" | "Metrics" | "Traces" | (string & {});
export type TelemetrySourceType =
  | "VPC_FLOW_LOGS"
  | "ROUTE53_RESOLVER_QUERY_LOGS"
  | "EKS_AUDIT_LOGS"
  | "EKS_AUTHENTICATOR_LOGS"
  | "EKS_CONTROLLER_MANAGER_LOGS"
  | "EKS_SCHEDULER_LOGS"
  | "EKS_API_LOGS"
  | (string & {});
export type TelemetrySourceTypes = TelemetrySourceType[];
export type DestinationType = "cloud-watch-logs" | (string & {});
export type RetentionPeriodInDays = number;
export interface VPCFlowLogParameters {
  LogFormat?: string;
  TrafficType?: string;
  MaxAggregationInterval?: number;
}
export type StringList = string[];
export interface AdvancedFieldSelector {
  Field: string;
  Equals?: string[];
  StartsWith?: string[];
  EndsWith?: string[];
  NotEquals?: string[];
  NotStartsWith?: string[];
  NotEndsWith?: string[];
}
export type FieldSelectors = AdvancedFieldSelector[];
export interface AdvancedEventSelector {
  Name?: string;
  FieldSelectors: AdvancedFieldSelector[];
}
export type AdvancedEventSelectors = AdvancedEventSelector[];
export interface CloudtrailParameters {
  AdvancedEventSelectors: AdvancedEventSelector[];
}
export type OutputFormat = "plain" | "json" | (string & {});
export interface ELBLoadBalancerLoggingParameters {
  OutputFormat?: OutputFormat;
  FieldDelimiter?: string;
}
export interface SingleHeader {
  Name?: string;
}
export interface FieldToMatch {
  SingleHeader?: SingleHeader;
  UriPath?: string;
  QueryString?: string;
  Method?: string;
}
export type RedactedFields = FieldToMatch[];
export type FilterBehavior = "KEEP" | "DROP" | (string & {});
export type FilterRequirement = "MEETS_ALL" | "MEETS_ANY" | (string & {});
export type Action =
  | "ALLOW"
  | "BLOCK"
  | "COUNT"
  | "CAPTCHA"
  | "CHALLENGE"
  | "EXCLUDED_AS_COUNT"
  | (string & {});
export interface ActionCondition {
  Action?: Action;
}
export interface LabelNameCondition {
  LabelName?: string;
}
export interface Condition {
  ActionCondition?: ActionCondition;
  LabelNameCondition?: LabelNameCondition;
}
export type Conditions = Condition[];
export interface Filter {
  Behavior?: FilterBehavior;
  Requirement?: FilterRequirement;
  Conditions?: Condition[];
}
export type Filters = Filter[];
export interface LoggingFilter {
  Filters?: Filter[];
  DefaultBehavior?: FilterBehavior;
}
export type WAFLogType = "WAF_LOGS" | (string & {});
export interface WAFLoggingParameters {
  RedactedFields?: FieldToMatch[];
  LoggingFilter?: LoggingFilter;
  LogType?: WAFLogType;
}
export type LogType =
  | "APPLICATION_LOGS"
  | "USAGE_LOGS"
  | "SECURITY_FINDING_LOGS"
  | "ACCESS_LOGS"
  | "CONNECTION_LOGS"
  | "S3_SERVER_ACCESS_LOGS"
  | "ALB_ACCESS_LOGS"
  | "ALB_CONNECTION_LOGS"
  | "ALB_HEALTH_CHECK_LOGS"
  | (string & {});
export type LogTypes = LogType[];
export interface LogDeliveryParameters {
  LogTypes?: LogType[];
}
export type MskEnhancedMonitoringLevel =
  | "DEFAULT"
  | "PER_BROKER"
  | "PER_TOPIC_PER_BROKER"
  | "PER_TOPIC_PER_PARTITION"
  | (string & {});
export interface MskMonitoringParameters {
  EnhancedMonitoring?: MskEnhancedMonitoringLevel;
}
export type KmsKeyArn = string;
export interface TelemetryDestinationConfiguration {
  DestinationType?: DestinationType;
  DestinationPattern?: string;
  RetentionInDays?: number;
  VPCFlowLogParameters?: VPCFlowLogParameters;
  CloudtrailParameters?: CloudtrailParameters;
  ELBLoadBalancerLoggingParameters?: ELBLoadBalancerLoggingParameters;
  WAFLoggingParameters?: WAFLoggingParameters;
  LogDeliveryParameters?: LogDeliveryParameters;
  MskMonitoringParameters?: MskMonitoringParameters;
  KmsKeyArn?: string;
}
export type AllRegions = boolean;
export interface TelemetryRule {
  ResourceType?: ResourceType;
  TelemetryType: TelemetryType;
  TelemetrySourceTypes?: TelemetrySourceType[];
  DestinationConfiguration?: TelemetryDestinationConfiguration;
  Scope?: string;
  SelectionCriteria?: string;
  AllowFieldUpdates?: boolean;
  Regions?: string[];
  AllRegions?: boolean;
}
export interface CreateTelemetryRuleInput {
  RuleName: string;
  Rule: TelemetryRule;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateTelemetryRuleOutput {
  RuleArn?: string;
}
export interface CreateTelemetryRuleForOrganizationInput {
  RuleName: string;
  Rule: TelemetryRule;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateTelemetryRuleForOrganizationOutput {
  RuleArn?: string;
}
export type RuleIdentifier = string;
export interface DeleteCentralizationRuleForOrganizationInput {
  RuleIdentifier: string;
}
export interface DeleteCentralizationRuleForOrganizationResponse {}
export interface DeleteDatasetIntegrationInput {
  Arn: string;
}
export interface DeleteDatasetIntegrationResponse {}
export interface DeleteS3TableIntegrationInput {
  Arn: string;
}
export interface DeleteS3TableIntegrationResponse {}
export type TelemetryPipelineIdentifier = string;
export interface DeleteTelemetryPipelineInput {
  PipelineIdentifier: string;
}
export interface DeleteTelemetryPipelineOutput {}
export interface DeleteTelemetryRuleInput {
  RuleIdentifier: string;
}
export interface DeleteTelemetryRuleResponse {}
export interface DeleteTelemetryRuleForOrganizationInput {
  RuleIdentifier: string;
}
export interface DeleteTelemetryRuleForOrganizationResponse {}
export interface GetCentralizationRuleForOrganizationInput {
  RuleIdentifier: string;
}
export type RuleHealth = "Healthy" | "Unhealthy" | "Provisioning" | (string & {});
export type CentralizationFailureReason =
  | "TRUSTED_ACCESS_NOT_ENABLED"
  | "DESTINATION_ACCOUNT_NOT_IN_ORGANIZATION"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
export type TagPropagationStatus = "Healthy" | "Unhealthy" | (string & {});
export type TagPropagationFailureReason =
  | "RoleNotAssumable"
  | "RoleLacksPermissions"
  | (string & {});
export type ContextGraphStatus = "Healthy" | "Unhealthy" | "Provisioning" | (string & {});
export interface GetCentralizationRuleForOrganizationOutput {
  RuleName?: string;
  RuleArn?: string;
  CreatorAccountId?: string;
  CreatedTimeStamp?: number;
  CreatedRegion?: string;
  LastUpdateTimeStamp?: number;
  RuleHealth?: RuleHealth;
  FailureReason?: CentralizationFailureReason;
  TagPropagationStatus?: TagPropagationStatus;
  TagPropagationFailureReason?: TagPropagationFailureReason;
  ContextGraphStatus?: ContextGraphStatus;
  CentralizationRule?: CentralizationRule;
}
export interface GetDatasetIntegrationInput {
  Arn: string;
}
export interface GetDatasetIntegrationOutput {
  Arn?: string;
  RoleArn?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export interface GetS3TableIntegrationInput {
  Arn: string;
}
export type IntegrationStatus = "ACTIVE" | "DELETING" | (string & {});
export interface GetS3TableIntegrationOutput {
  Arn?: string;
  RoleArn?: string;
  Status?: IntegrationStatus;
  Encryption?: Encryption;
  DestinationTableBucketArn?: string;
  CreatedTimeStamp?: number;
}
export interface GetTelemetryEnrichmentStatusRequest {}
export type TelemetryEnrichmentStatus = "Running" | "Stopped" | "Impaired" | (string & {});
export type AwsResourceExplorerManagedViewArn = string;
export interface GetTelemetryEnrichmentStatusOutput {
  Status?: TelemetryEnrichmentStatus;
  AwsResourceExplorerManagedViewArn?: string;
}
export interface GetTelemetryEvaluationStatusRequest {}
export type Status =
  | "NOT_STARTED"
  | "STARTING"
  | "FAILED_START"
  | "RUNNING"
  | "STOPPING"
  | "FAILED_STOP"
  | "STOPPED"
  | (string & {});
export type FailureReason = string;
export interface RegionStatus {
  Region?: string;
  Status?: string;
  FailureReason?: string;
  RuleArn?: string;
}
export type RegionStatuses = RegionStatus[];
export interface GetTelemetryEvaluationStatusOutput {
  Status?: Status;
  FailureReason?: string;
  HomeRegion?: string;
  RegionStatuses?: RegionStatus[];
}
export interface GetTelemetryEvaluationStatusForOrganizationRequest {}
export interface GetTelemetryEvaluationStatusForOrganizationOutput {
  Status?: Status;
  FailureReason?: string;
  HomeRegion?: string;
  RegionStatuses?: RegionStatus[];
}
export interface GetTelemetryPipelineInput {
  PipelineIdentifier: string;
}
export type TelemetryPipelineStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | (string & {});
export interface TelemetryPipelineStatusReason {
  Description?: string;
}
export type TagMapOutput = { [key: string]: string | undefined };
export interface TelemetryPipeline {
  CreatedTimeStamp?: number;
  LastUpdateTimeStamp?: number;
  Arn?: string;
  Name?: string;
  Configuration?: TelemetryPipelineConfiguration;
  Status?: TelemetryPipelineStatus;
  StatusReason?: TelemetryPipelineStatusReason;
  Tags?: { [key: string]: string | undefined };
}
export interface GetTelemetryPipelineOutput {
  Pipeline?: TelemetryPipeline;
}
export interface GetTelemetryRuleInput {
  RuleIdentifier: string;
}
export type IsReplicated = boolean;
export interface GetTelemetryRuleOutput {
  RuleName?: string;
  RuleArn?: string;
  CreatedTimeStamp?: number;
  LastUpdateTimeStamp?: number;
  TelemetryRule?: TelemetryRule;
  HomeRegion?: string;
  IsReplicated?: boolean;
  RegionStatuses?: RegionStatus[];
}
export interface GetTelemetryRuleForOrganizationInput {
  RuleIdentifier: string;
}
export interface GetTelemetryRuleForOrganizationOutput {
  RuleName?: string;
  RuleArn?: string;
  CreatedTimeStamp?: number;
  LastUpdateTimeStamp?: number;
  TelemetryRule?: TelemetryRule;
  HomeRegion?: string;
  IsReplicated?: boolean;
  RegionStatuses?: RegionStatus[];
}
export type ListCentralizationRulesForOrganizationMaxResults = number;
export type NextToken = string;
export interface ListCentralizationRulesForOrganizationInput {
  RuleNamePrefix?: string;
  AllRegions?: boolean;
  MaxResults?: number;
  NextToken?: string;
}
export interface CentralizationRuleSummary {
  RuleName?: string;
  RuleArn?: string;
  CreatorAccountId?: string;
  CreatedTimeStamp?: number;
  CreatedRegion?: string;
  LastUpdateTimeStamp?: number;
  RuleHealth?: RuleHealth;
  FailureReason?: CentralizationFailureReason;
  TagPropagationStatus?: TagPropagationStatus;
  TagPropagationFailureReason?: TagPropagationFailureReason;
  ContextGraphStatus?: ContextGraphStatus;
  DestinationAccountId?: string;
  DestinationRegion?: string;
}
export type CentralizationRuleSummaries = CentralizationRuleSummary[];
export interface ListCentralizationRulesForOrganizationOutput {
  CentralizationRuleSummaries?: CentralizationRuleSummary[];
  NextToken?: string;
}
export type ListDatasetIntegrationsMaxResults = number;
export interface ListDatasetIntegrationsInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface DatasetIntegrationSummary {
  Arn: string;
  RoleArn?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export type DatasetIntegrationSummaries = DatasetIntegrationSummary[];
export interface ListDatasetIntegrationsOutput {
  DatasetIntegrationSummaries: DatasetIntegrationSummary[];
  NextToken?: string;
}
export type ResourceIdentifierPrefix = string;
export type ResourceTypes = ResourceType[];
export type TelemetryState = "Enabled" | "Disabled" | "NotApplicable" | (string & {});
export type TelemetryConfigurationState = { [key in TelemetryType]?: TelemetryState };
export type ListResourceTelemetryMaxResults = number;
export interface ListResourceTelemetryInput {
  ResourceIdentifierPrefix?: string;
  ResourceTypes?: ResourceType[];
  TelemetryConfigurationState?: { [key: string]: TelemetryState | undefined };
  ResourceTags?: { [key: string]: string | undefined };
  MaxResults?: number;
  NextToken?: string;
}
export type ResourceIdentifier = string;
export interface TelemetryConfiguration {
  AccountIdentifier?: string;
  TelemetryConfigurationState?: { [key: string]: TelemetryState | undefined };
  ResourceType?: ResourceType;
  ResourceIdentifier?: string;
  ResourceTags?: { [key: string]: string | undefined };
  LastUpdateTimeStamp?: number;
  TelemetrySourceType?: TelemetrySourceType;
}
export type TelemetryConfigurations = TelemetryConfiguration[];
export interface ListResourceTelemetryOutput {
  TelemetryConfigurations?: TelemetryConfiguration[];
  NextToken?: string;
}
export type AccountIdentifiers = string[];
export type ListResourceTelemetryForOrganizationMaxResults = number;
export interface ListResourceTelemetryForOrganizationInput {
  AccountIdentifiers?: string[];
  ResourceIdentifierPrefix?: string;
  ResourceTypes?: ResourceType[];
  TelemetryConfigurationState?: { [key: string]: TelemetryState | undefined };
  ResourceTags?: { [key: string]: string | undefined };
  MaxResults?: number;
  NextToken?: string;
}
export interface ListResourceTelemetryForOrganizationOutput {
  TelemetryConfigurations?: TelemetryConfiguration[];
  NextToken?: string;
}
export type ListS3TableIntegrationsMaxResults = number;
export interface ListS3TableIntegrationsInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface IntegrationSummary {
  Arn?: string;
  Status?: IntegrationStatus;
}
export type IntegrationSummaries = IntegrationSummary[];
export interface ListS3TableIntegrationsOutput {
  IntegrationSummaries?: IntegrationSummary[];
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  ResourceARN: string;
}
export interface ListTagsForResourceOutput {
  Tags: { [key: string]: string | undefined };
}
export type ListTelemetryPipelinesMaxResults = number;
export interface ListTelemetryPipelinesInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface Source {
  Type?: string;
}
export type Sources = Source[];
export interface DataSource {
  Name?: string;
  Type?: string;
}
export type DataSources = DataSource[];
export type Processors = string[];
export type Sinks = string[];
export interface ConfigurationSummary {
  Sources?: Source[];
  DataSources?: DataSource[];
  Processors?: string[];
  ProcessorCount?: number;
  Sinks?: string[];
}
export interface TelemetryPipelineSummary {
  CreatedTimeStamp?: number;
  LastUpdateTimeStamp?: number;
  Arn?: string;
  Name?: string;
  Status?: TelemetryPipelineStatus;
  Tags?: { [key: string]: string | undefined };
  ConfigurationSummary?: ConfigurationSummary;
}
export type TelemetryPipelineSummaries = TelemetryPipelineSummary[];
export interface ListTelemetryPipelinesOutput {
  PipelineSummaries?: TelemetryPipelineSummary[];
  NextToken?: string;
}
export type ListTelemetryRulesMaxResults = number;
export interface ListTelemetryRulesInput {
  RuleNamePrefix?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface TelemetryRuleSummary {
  RuleName?: string;
  RuleArn?: string;
  CreatedTimeStamp?: number;
  LastUpdateTimeStamp?: number;
  ResourceType?: ResourceType;
  TelemetryType?: TelemetryType;
  TelemetrySourceTypes?: TelemetrySourceType[];
}
export type TelemetryRuleSummaries = TelemetryRuleSummary[];
export interface ListTelemetryRulesOutput {
  TelemetryRuleSummaries?: TelemetryRuleSummary[];
  NextToken?: string;
}
export type OrganizationUnitIdentifier = string;
export type OrganizationUnitIdentifiers = string[];
export type ListTelemetryRulesForOrganizationMaxResults = number;
export interface ListTelemetryRulesForOrganizationInput {
  RuleNamePrefix?: string;
  SourceAccountIds?: string[];
  SourceOrganizationUnitIds?: string[];
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTelemetryRulesForOrganizationOutput {
  TelemetryRuleSummaries?: TelemetryRuleSummary[];
  NextToken?: string;
}
export interface StartTelemetryEnrichmentRequest {}
export interface StartTelemetryEnrichmentOutput {
  Status?: TelemetryEnrichmentStatus;
  AwsResourceExplorerManagedViewArn?: string;
}
export interface StartTelemetryEvaluationInput {
  Regions?: string[];
  AllRegions?: boolean;
}
export interface StartTelemetryEvaluationResponse {}
export interface StartTelemetryEvaluationForOrganizationInput {
  Regions?: string[];
  AllRegions?: boolean;
}
export interface StartTelemetryEvaluationForOrganizationResponse {}
export interface StopTelemetryEnrichmentRequest {}
export interface StopTelemetryEnrichmentOutput {
  Status?: TelemetryEnrichmentStatus;
}
export interface StopTelemetryEvaluationRequest {}
export interface StopTelemetryEvaluationResponse {}
export interface StopTelemetryEvaluationForOrganizationRequest {}
export interface StopTelemetryEvaluationForOrganizationResponse {}
export interface TagResourceInput {
  ResourceARN: string;
  Tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type RecordFormat = "STRING" | "JSON" | (string & {});
export interface Record {
  Data?: string;
  Type?: RecordFormat;
}
export type Records = Record[];
export type SignalType = "LOG" | "METRIC" | (string & {});
export interface TestTelemetryPipelineInput {
  Records: Record[];
  Configuration: TelemetryPipelineConfiguration;
  SignalType?: SignalType;
}
export interface PipelineOutputError {
  Message?: string;
}
export interface PipelineOutput {
  Record?: Record;
  Error?: PipelineOutputError;
}
export type PipelineOutputs = PipelineOutput[];
export interface TestTelemetryPipelineOutput {
  Results?: PipelineOutput[];
}
export type TagKeyList = string[];
export interface UntagResourceInput {
  ResourceARN: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateCentralizationRuleForOrganizationInput {
  RuleIdentifier: string;
  Rule: CentralizationRule;
}
export interface UpdateCentralizationRuleForOrganizationOutput {
  RuleArn?: string;
}
export interface UpdateDatasetIntegrationInput {
  Arn: string;
  RoleArn: string;
}
export interface UpdateDatasetIntegrationOutput {
  Arn: string;
  RoleArn: string;
  CreatedAt: Date;
  UpdatedAt: Date;
}
export interface UpdateTelemetryPipelineInput {
  PipelineIdentifier: string;
  Configuration: TelemetryPipelineConfiguration;
}
export interface UpdateTelemetryPipelineOutput {}
export interface UpdateTelemetryRuleInput {
  RuleIdentifier: string;
  Rule: TelemetryRule;
}
export interface UpdateTelemetryRuleOutput {
  RuleArn?: string;
}
export interface UpdateTelemetryRuleForOrganizationInput {
  RuleIdentifier: string;
  Rule: TelemetryRule;
}
export interface UpdateTelemetryRuleForOrganizationOutput {
  RuleArn?: string;
}
export interface ValidateTelemetryPipelineConfigurationInput {
  Configuration: TelemetryPipelineConfiguration;
}
export type FieldMap = { [key: string]: string | undefined };
export interface ValidationError {
  Message?: string;
  Reason?: string;
  FieldMap?: { [key: string]: string | undefined };
}
export type ValidationErrors = ValidationError[];
export interface ValidateTelemetryPipelineConfigurationOutput {
  Errors?: ValidationError[];
}
export type CreateCentralizationRuleForOrganizationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Creates a centralization rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.
 */
export const createCentralizationRuleForOrganization: API.OperationMethod<
  CreateCentralizationRuleForOrganizationInput,
  CreateCentralizationRuleForOrganizationOutput,
  CreateCentralizationRuleForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15, __c1, 7) as any as S.Schema<CreateCentralizationRuleForOrganizationInput>,
  output: __S(16, __c2, 0) as any as S.Schema<CreateCentralizationRuleForOrganizationOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCentralizationRuleForOrganization",
}));

export type CreateDatasetIntegrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Creates a dataset integration for the caller's account in the current region and returns its ARN.
 *
 * To use this operation, you must have permission to access the dataset integration resources through the IAM role specified in the `RoleArn` parameter.
 *
 * If a dataset integration already exists for the account, this operation fails with a `ConflictException`.
 */
export const createDatasetIntegration: API.OperationMethod<
  CreateDatasetIntegrationInput,
  CreateDatasetIntegrationOutput,
  CreateDatasetIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17, __c2, 1) as any as S.Schema<CreateDatasetIntegrationInput>,
  output: __S(18, __c2, 2) as any as S.Schema<CreateDatasetIntegrationOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDatasetIntegration",
}));

export type CreateS3TableIntegrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Creates an integration between CloudWatch and S3 Tables for analytics. This integration enables querying CloudWatch telemetry data using analytics engines like Amazon Athena, Amazon Redshift, and Apache Spark.
 */
export const createS3TableIntegration: API.OperationMethod<
  CreateS3TableIntegrationInput,
  CreateS3TableIntegrationOutput,
  CreateS3TableIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20, __c2, 4) as any as S.Schema<CreateS3TableIntegrationInput>,
  output: __S(21, __c2, 5) as any as S.Schema<CreateS3TableIntegrationOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateS3TableIntegration",
}));

export type CreateTelemetryPipelineError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Creates a telemetry pipeline for processing and transforming telemetry data. The pipeline defines how data flows from sources through processors to destinations, enabling data transformation and delivering capabilities.
 */
export const createTelemetryPipeline: API.OperationMethod<
  CreateTelemetryPipelineInput,
  CreateTelemetryPipelineOutput,
  CreateTelemetryPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(23, __c2, 7) as any as S.Schema<CreateTelemetryPipelineInput>,
  output: __S(21, __c2, 5) as any as S.Schema<CreateTelemetryPipelineOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTelemetryPipeline",
}));

export type CreateTelemetryRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Creates a telemetry rule that defines how telemetry should be configured for Amazon Web Services resources in your account. The rule specifies which resources should have telemetry enabled and how that telemetry data should be collected based on resource type, telemetry type, and selection criteria.
 */
export const createTelemetryRule: API.OperationMethod<
  CreateTelemetryRuleInput,
  CreateTelemetryRuleOutput,
  CreateTelemetryRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47, __c5, 7) as any as S.Schema<CreateTelemetryRuleInput>,
  output: __S(16, __c2, 0) as any as S.Schema<CreateTelemetryRuleOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTelemetryRule",
}));

export type CreateTelemetryRuleForOrganizationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Creates a telemetry rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.
 */
export const createTelemetryRuleForOrganization: API.OperationMethod<
  CreateTelemetryRuleForOrganizationInput,
  CreateTelemetryRuleForOrganizationOutput,
  CreateTelemetryRuleForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48, __c6, 0) as any as S.Schema<CreateTelemetryRuleForOrganizationInput>,
  output: __S(16, __c2, 0) as any as S.Schema<CreateTelemetryRuleForOrganizationOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTelemetryRuleForOrganization",
}));

export type DeleteCentralizationRuleForOrganizationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an organization-wide centralization rule. This operation can only be called by the organization's management account or a delegated administrator account.
 */
export const deleteCentralizationRuleForOrganization: API.OperationMethod<
  DeleteCentralizationRuleForOrganizationInput,
  DeleteCentralizationRuleForOrganizationResponse,
  DeleteCentralizationRuleForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49, __c6, 1) as any as S.Schema<DeleteCentralizationRuleForOrganizationInput>,
  output: __S(50, __c6, 2) as any as S.Schema<DeleteCentralizationRuleForOrganizationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCentralizationRuleForOrganization",
}));

export type DeleteDatasetIntegrationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a dataset integration for the caller's account in the current region. This operation is idempotent; if you submit the same delete more than once, each call succeeds.
 */
export const deleteDatasetIntegration: API.OperationMethod<
  DeleteDatasetIntegrationInput,
  DeleteDatasetIntegrationResponse,
  DeleteDatasetIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51, __c6, 3) as any as S.Schema<DeleteDatasetIntegrationInput>,
  output: __S(50, __c6, 2) as any as S.Schema<DeleteDatasetIntegrationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDatasetIntegration",
}));

export type DeleteS3TableIntegrationError =
  | AccessDeniedException
  | InternalServerException
  | InvalidStateException
  | ServiceQuotaExceededException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an S3 Table integration and its associated data. This operation removes the connection between CloudWatch Observability Admin and S3 Tables.
 */
export const deleteS3TableIntegration: API.OperationMethod<
  DeleteS3TableIntegrationInput,
  DeleteS3TableIntegrationResponse,
  DeleteS3TableIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52, __c6, 4) as any as S.Schema<DeleteS3TableIntegrationInput>,
  output: __S(50, __c6, 2) as any as S.Schema<DeleteS3TableIntegrationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidStateException,
    ServiceQuotaExceededException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteS3TableIntegration",
}));

export type DeleteTelemetryPipelineError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a telemetry pipeline and its associated resources. This operation stops data processing and removes the pipeline configuration.
 */
export const deleteTelemetryPipeline: API.OperationMethod<
  DeleteTelemetryPipelineInput,
  DeleteTelemetryPipelineOutput,
  DeleteTelemetryPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53, __c6, 5) as any as S.Schema<DeleteTelemetryPipelineInput>,
  output: __S(54, __c6, 6) as any as S.Schema<DeleteTelemetryPipelineOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTelemetryPipeline",
}));

export type DeleteTelemetryRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a telemetry rule from your account. Any telemetry configurations previously created by the rule will remain but no new resources will be configured by this rule.
 */
export const deleteTelemetryRule: API.OperationMethod<
  DeleteTelemetryRuleInput,
  DeleteTelemetryRuleResponse,
  DeleteTelemetryRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<DeleteTelemetryRuleInput>,
  output: __S(54, __c6, 6) as any as S.Schema<DeleteTelemetryRuleResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTelemetryRule",
}));

export type DeleteTelemetryRuleForOrganizationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an organization-wide telemetry rule. This operation can only be called by the organization's management account or a delegated administrator account.
 */
export const deleteTelemetryRuleForOrganization: API.OperationMethod<
  DeleteTelemetryRuleForOrganizationInput,
  DeleteTelemetryRuleForOrganizationResponse,
  DeleteTelemetryRuleForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56, __c7, 0) as any as S.Schema<DeleteTelemetryRuleForOrganizationInput>,
  output: __S(50, __c6, 2) as any as S.Schema<DeleteTelemetryRuleForOrganizationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTelemetryRuleForOrganization",
}));

export type GetCentralizationRuleForOrganizationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of a specific organization centralization rule. This operation can only be called by the organization's management account or a delegated administrator account.
 */
export const getCentralizationRuleForOrganization: API.OperationMethod<
  GetCentralizationRuleForOrganizationInput,
  GetCentralizationRuleForOrganizationOutput,
  GetCentralizationRuleForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57, __c7, 1) as any as S.Schema<GetCentralizationRuleForOrganizationInput>,
  output: __S(58, __c7, 2) as any as S.Schema<GetCentralizationRuleForOrganizationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCentralizationRuleForOrganization",
}));

export type GetDatasetIntegrationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Returns the dataset integration for the caller's account in the current region.
 */
export const getDatasetIntegration: API.OperationMethod<
  GetDatasetIntegrationInput,
  GetDatasetIntegrationOutput,
  GetDatasetIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<GetDatasetIntegrationInput>,
  output: __S(60, __c7, 4) as any as S.Schema<GetDatasetIntegrationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDatasetIntegration",
}));

export type GetS3TableIntegrationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a specific S3 Table integration, including its configuration, status, and metadata.
 */
export const getS3TableIntegration: API.OperationMethod<
  GetS3TableIntegrationInput,
  GetS3TableIntegrationOutput,
  GetS3TableIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61, __c7, 5) as any as S.Schema<GetS3TableIntegrationInput>,
  output: __S(62, __c7, 6) as any as S.Schema<GetS3TableIntegrationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetS3TableIntegration",
}));

export type GetTelemetryEnrichmentStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns the current status of the resource tags for telemetry feature, which enhances telemetry data with additional resource metadata from Resource Explorer.
 */
export const getTelemetryEnrichmentStatus: API.OperationMethod<
  GetTelemetryEnrichmentStatusRequest,
  GetTelemetryEnrichmentStatusOutput,
  GetTelemetryEnrichmentStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63, __c7, 7) as any as S.Schema<GetTelemetryEnrichmentStatusRequest>,
  output: __S(64, __c8, 0) as any as S.Schema<GetTelemetryEnrichmentStatusOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTelemetryEnrichmentStatus",
}));

export type GetTelemetryEvaluationStatusError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns the current onboarding status of the telemetry config feature, including the status of the feature and reason the feature failed to start or stop.
 */
export const getTelemetryEvaluationStatus: API.OperationMethod<
  GetTelemetryEvaluationStatusRequest,
  GetTelemetryEvaluationStatusOutput,
  GetTelemetryEvaluationStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<GetTelemetryEvaluationStatusRequest>,
  output: __S(68, __c8, 4) as any as S.Schema<GetTelemetryEvaluationStatusOutput>,
  errors: [AccessDeniedException, InternalServerException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTelemetryEvaluationStatus",
}));

export type GetTelemetryEvaluationStatusForOrganizationError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * This returns the onboarding status of the telemetry configuration feature for the organization. It can only be called by a Management Account of an Amazon Web Services Organization or an assigned Delegated Admin Account of Amazon CloudWatch telemetry config.
 */
export const getTelemetryEvaluationStatusForOrganization: API.OperationMethod<
  GetTelemetryEvaluationStatusForOrganizationRequest,
  GetTelemetryEvaluationStatusForOrganizationOutput,
  GetTelemetryEvaluationStatusForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69, __c8, 5) as any as S.Schema<GetTelemetryEvaluationStatusForOrganizationRequest>,
  output: __S(68, __c8, 4) as any as S.Schema<GetTelemetryEvaluationStatusForOrganizationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTelemetryEvaluationStatusForOrganization",
}));

export type GetTelemetryPipelineError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a specific telemetry pipeline, including its configuration, status, and metadata.
 */
export const getTelemetryPipeline: API.OperationMethod<
  GetTelemetryPipelineInput,
  GetTelemetryPipelineOutput,
  GetTelemetryPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<GetTelemetryPipelineInput>,
  output: __S(73, __c9, 1) as any as S.Schema<GetTelemetryPipelineOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTelemetryPipeline",
}));

export type GetTelemetryRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of a specific telemetry rule in your account.
 */
export const getTelemetryRule: API.OperationMethod<
  GetTelemetryRuleInput,
  GetTelemetryRuleOutput,
  GetTelemetryRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74, __c9, 2) as any as S.Schema<GetTelemetryRuleInput>,
  output: __S(75, __c9, 3) as any as S.Schema<GetTelemetryRuleOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTelemetryRule",
}));

export type GetTelemetryRuleForOrganizationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of a specific organization telemetry rule. This operation can only be called by the organization's management account or a delegated administrator account.
 */
export const getTelemetryRuleForOrganization: API.OperationMethod<
  GetTelemetryRuleForOrganizationInput,
  GetTelemetryRuleForOrganizationOutput,
  GetTelemetryRuleForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76, __c9, 4) as any as S.Schema<GetTelemetryRuleForOrganizationInput>,
  output: __S(77, __c9, 5) as any as S.Schema<GetTelemetryRuleForOrganizationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTelemetryRuleForOrganization",
}));

export type ListCentralizationRulesForOrganizationError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Lists all centralization rules in your organization. This operation can only be called by the organization's management account or a delegated administrator account.
 */
export const listCentralizationRulesForOrganization: API.PaginatedOperationMethod<
  ListCentralizationRulesForOrganizationInput,
  ListCentralizationRulesForOrganizationOutput,
  ListCentralizationRulesForOrganizationError,
  Credentials | HttpClient.HttpClient,
  CentralizationRuleSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(78, __c9, 6) as any as S.Schema<ListCentralizationRulesForOrganizationInput>,
  output: __S(81, __c10, 1) as any as S.Schema<ListCentralizationRulesForOrganizationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCentralizationRulesForOrganization",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CentralizationRuleSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDatasetIntegrationsError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Returns the dataset integrations in your account.
 */
export const listDatasetIntegrations: API.PaginatedOperationMethod<
  ListDatasetIntegrationsInput,
  ListDatasetIntegrationsOutput,
  ListDatasetIntegrationsError,
  Credentials | HttpClient.HttpClient,
  DatasetIntegrationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(82, __c10, 2) as any as S.Schema<ListDatasetIntegrationsInput>,
  output: __S(85, __c10, 5) as any as S.Schema<ListDatasetIntegrationsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDatasetIntegrations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "DatasetIntegrationSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListResourceTelemetryError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of telemetry configurations for Amazon Web Services resources supported by telemetry config. For more information, see Auditing CloudWatch telemetry configurations.
 */
export const listResourceTelemetry: API.PaginatedOperationMethod<
  ListResourceTelemetryInput,
  ListResourceTelemetryOutput,
  ListResourceTelemetryError,
  Credentials | HttpClient.HttpClient,
  TelemetryConfiguration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(87, __c10, 7) as any as S.Schema<ListResourceTelemetryInput>,
  output: __S(90, __c11, 2) as any as S.Schema<ListResourceTelemetryOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceTelemetry",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TelemetryConfigurations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListResourceTelemetryForOrganizationError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of telemetry configurations for Amazon Web Services resources supported by telemetry config in the organization.
 */
export const listResourceTelemetryForOrganization: API.PaginatedOperationMethod<
  ListResourceTelemetryForOrganizationInput,
  ListResourceTelemetryForOrganizationOutput,
  ListResourceTelemetryForOrganizationError,
  Credentials | HttpClient.HttpClient,
  TelemetryConfiguration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(91, __c11, 3) as any as S.Schema<ListResourceTelemetryForOrganizationInput>,
  output: __S(90, __c11, 2) as any as S.Schema<ListResourceTelemetryForOrganizationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceTelemetryForOrganization",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TelemetryConfigurations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListS3TableIntegrationsError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Lists all S3 Table integrations in your account. We recommend using pagination to ensure that the operation returns quickly and successfully.
 */
export const listS3TableIntegrations: API.PaginatedOperationMethod<
  ListS3TableIntegrationsInput,
  ListS3TableIntegrationsOutput,
  ListS3TableIntegrationsError,
  Credentials | HttpClient.HttpClient,
  IntegrationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(92, __c11, 4) as any as S.Schema<ListS3TableIntegrationsInput>,
  output: __S(95, __c11, 7) as any as S.Schema<ListS3TableIntegrationsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListS3TableIntegrations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "IntegrationSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Lists all tags attached to the specified resource. Supports telemetry rule resources and telemetry pipeline resources.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(96, __c12, 0) as any as S.Schema<ListTagsForResourceInput>,
  output: __S(97, __c12, 1) as any as S.Schema<ListTagsForResourceOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTelemetryPipelinesError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of telemetry pipelines in your account. Returns up to 100 results. If more than 100 telemetry pipelines exist, include the `NextToken` value from the response to retrieve the next set of results.
 */
export const listTelemetryPipelines: API.PaginatedOperationMethod<
  ListTelemetryPipelinesInput,
  ListTelemetryPipelinesOutput,
  ListTelemetryPipelinesError,
  Credentials | HttpClient.HttpClient,
  TelemetryPipelineSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(98, __c12, 2) as any as S.Schema<ListTelemetryPipelinesInput>,
  output: __S(106, __c13, 2) as any as S.Schema<ListTelemetryPipelinesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTelemetryPipelines",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PipelineSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTelemetryRulesError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Lists all telemetry rules in your account. You can filter the results by specifying a rule name prefix.
 */
export const listTelemetryRules: API.PaginatedOperationMethod<
  ListTelemetryRulesInput,
  ListTelemetryRulesOutput,
  ListTelemetryRulesError,
  Credentials | HttpClient.HttpClient,
  TelemetryRuleSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(107, __c13, 3) as any as S.Schema<ListTelemetryRulesInput>,
  output: __S(110, __c13, 6) as any as S.Schema<ListTelemetryRulesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTelemetryRules",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TelemetryRuleSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTelemetryRulesForOrganizationError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Lists all telemetry rules in your organization. This operation can only be called by the organization's management account or a delegated administrator account.
 */
export const listTelemetryRulesForOrganization: API.PaginatedOperationMethod<
  ListTelemetryRulesForOrganizationInput,
  ListTelemetryRulesForOrganizationOutput,
  ListTelemetryRulesForOrganizationError,
  Credentials | HttpClient.HttpClient,
  TelemetryRuleSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(111, __c13, 7) as any as S.Schema<ListTelemetryRulesForOrganizationInput>,
  output: __S(112, __c14, 0) as any as S.Schema<ListTelemetryRulesForOrganizationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTelemetryRulesForOrganization",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TelemetryRuleSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type StartTelemetryEnrichmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Enables the resource tags for telemetry feature for your account, which enhances telemetry data with additional resource metadata from Resource Explorer to provide richer context for monitoring and observability.
 */
export const startTelemetryEnrichment: API.OperationMethod<
  StartTelemetryEnrichmentRequest,
  StartTelemetryEnrichmentOutput,
  StartTelemetryEnrichmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(113, __c14, 1) as any as S.Schema<StartTelemetryEnrichmentRequest>,
  output: __S(64, __c8, 0) as any as S.Schema<StartTelemetryEnrichmentOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartTelemetryEnrichment",
}));

export type StartTelemetryEvaluationError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * This action begins onboarding the caller Amazon Web Services account to the telemetry config feature.
 */
export const startTelemetryEvaluation: API.OperationMethod<
  StartTelemetryEvaluationInput,
  StartTelemetryEvaluationResponse,
  StartTelemetryEvaluationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114, __c14, 2) as any as S.Schema<StartTelemetryEvaluationInput>,
  output: __S(50, __c6, 2) as any as S.Schema<StartTelemetryEvaluationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartTelemetryEvaluation",
}));

export type StartTelemetryEvaluationForOrganizationError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * This actions begins onboarding the organization and all member accounts to the telemetry config feature.
 */
export const startTelemetryEvaluationForOrganization: API.OperationMethod<
  StartTelemetryEvaluationForOrganizationInput,
  StartTelemetryEvaluationForOrganizationResponse,
  StartTelemetryEvaluationForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115, __c14, 3) as any as S.Schema<StartTelemetryEvaluationForOrganizationInput>,
  output: __S(50, __c6, 2) as any as S.Schema<StartTelemetryEvaluationForOrganizationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartTelemetryEvaluationForOrganization",
}));

export type StopTelemetryEnrichmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Disables the resource tags for telemetry feature for your account, stopping the enhancement of telemetry data with additional resource metadata.
 */
export const stopTelemetryEnrichment: API.OperationMethod<
  StopTelemetryEnrichmentRequest,
  StopTelemetryEnrichmentOutput,
  StopTelemetryEnrichmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(116, __c14, 4) as any as S.Schema<StopTelemetryEnrichmentRequest>,
  output: __S(117, __c14, 5) as any as S.Schema<StopTelemetryEnrichmentOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopTelemetryEnrichment",
}));

export type StopTelemetryEvaluationError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * This action begins offboarding the caller Amazon Web Services account from the telemetry config feature.
 */
export const stopTelemetryEvaluation: API.OperationMethod<
  StopTelemetryEvaluationRequest,
  StopTelemetryEvaluationResponse,
  StopTelemetryEvaluationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(118, __c14, 6) as any as S.Schema<StopTelemetryEvaluationRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<StopTelemetryEvaluationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopTelemetryEvaluation",
}));

export type StopTelemetryEvaluationForOrganizationError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * This action offboards the Organization of the caller Amazon Web Services account from the telemetry config feature.
 */
export const stopTelemetryEvaluationForOrganization: API.OperationMethod<
  StopTelemetryEvaluationForOrganizationRequest,
  StopTelemetryEvaluationForOrganizationResponse,
  StopTelemetryEvaluationForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(119, __c14, 7) as any as S.Schema<StopTelemetryEvaluationForOrganizationRequest>,
  output: __S(50, __c6, 2) as any as S.Schema<StopTelemetryEvaluationForOrganizationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopTelemetryEvaluationForOrganization",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Adds or updates tags for a resource. Supports telemetry rule resources and telemetry pipeline resources.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120, __c15, 0) as any as S.Schema<TagResourceInput>,
  output: __S(54, __c6, 6) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type TestTelemetryPipelineError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Tests a pipeline configuration with sample records to validate data processing before deployment. This operation helps ensure your pipeline configuration works as expected.
 */
export const testTelemetryPipeline: API.OperationMethod<
  TestTelemetryPipelineInput,
  TestTelemetryPipelineOutput,
  TestTelemetryPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(123, __c15, 3) as any as S.Schema<TestTelemetryPipelineInput>,
  output: __S(127, __c15, 7) as any as S.Schema<TestTelemetryPipelineOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TestTelemetryPipeline",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Removes tags from a resource. Supports telemetry rule resources and telemetry pipeline resources.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(128, __c16, 0) as any as S.Schema<UntagResourceInput>,
  output: __S(54, __c6, 6) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateCentralizationRuleForOrganizationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing centralization rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.
 */
export const updateCentralizationRuleForOrganization: API.OperationMethod<
  UpdateCentralizationRuleForOrganizationInput,
  UpdateCentralizationRuleForOrganizationOutput,
  UpdateCentralizationRuleForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(129, __c16, 1) as any as S.Schema<UpdateCentralizationRuleForOrganizationInput>,
  output: __S(16, __c2, 0) as any as S.Schema<UpdateCentralizationRuleForOrganizationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCentralizationRuleForOrganization",
}));

export type UpdateDatasetIntegrationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Updates a dataset integration for the caller's account in the current region. This operation is idempotent; if you submit the same update more than once, each call succeeds.
 */
export const updateDatasetIntegration: API.OperationMethod<
  UpdateDatasetIntegrationInput,
  UpdateDatasetIntegrationOutput,
  UpdateDatasetIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(130, __c16, 2) as any as S.Schema<UpdateDatasetIntegrationInput>,
  output: __S(18, __c2, 2) as any as S.Schema<UpdateDatasetIntegrationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDatasetIntegration",
}));

export type UpdateTelemetryPipelineError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of an existing telemetry pipeline.
 *
 * The following attributes cannot be updated after pipeline creation:
 *
 * - **Pipeline name** - The pipeline name is immutable
 *
 * - **Pipeline ARN** - The ARN is automatically generated and cannot be changed
 *
 * - **Source type** - Once a pipeline is created with a specific source type (such as S3, CloudWatch Logs, GitHub, or third-party sources), it cannot be changed to a different source type
 *
 * Processors can be added, removed, or modified. However, some processors are not supported for third-party pipelines and cannot be added through updates.
 *
 * **Source-Specific Update Rules**
 *
 * ### CloudWatch Logs Sources (Vended and Custom)
 *
 * **Updatable:** `sts_role_arn`
 *
 * **Fixed:** `data_source_name`, `data_source_type`, sink (must remain `@original`)
 *
 * ### S3 Sources (Crowdstrike, Zscaler, SentinelOne, Custom)
 *
 * **Updatable:** All SQS configuration parameters, `sts_role_arn`, codec settings, compression type, bucket ownership settings, sink log group
 *
 * **Fixed:** `notification_type`, `aws.region`
 *
 * ### GitHub Audit Logs
 *
 * **Updatable:** All Amazon Web Services Secrets Manager attributes, `scope` (can switch between ORGANIZATION/ENTERPRISE), `organization` or `enterprise` name, `range`, authentication credentials (PAT or GitHub App)
 *
 * ### Microsoft Sources (Entra ID, Office365, Windows)
 *
 * **Updatable:** All Amazon Web Services Secrets Manager attributes, `tenant_id`, `workspace_id` (Windows only), OAuth2 credentials (`client_id`, `client_secret`)
 *
 * ### Okta Sources (SSO, Auth0)
 *
 * **Updatable:** All Amazon Web Services Secrets Manager attributes, `domain`, `range`, OAuth2 credentials (`client_id`, `client_secret`)
 *
 * ### Palo Alto Networks
 *
 * **Updatable:** All Amazon Web Services Secrets Manager attributes, `hostname`, basic authentication credentials (`username`, `password`)
 *
 * ### ServiceNow CMDB
 *
 * **Updatable:** All Amazon Web Services Secrets Manager attributes, `instance_url`, `range`, OAuth2 credentials (`client_id`, `client_secret`)
 *
 * ### Wiz CNAPP
 *
 * **Updatable:** All Amazon Web Services Secrets Manager attributes, `region`, `range`, OAuth2 credentials (`client_id`, `client_secret`)
 */
export const updateTelemetryPipeline: API.OperationMethod<
  UpdateTelemetryPipelineInput,
  UpdateTelemetryPipelineOutput,
  UpdateTelemetryPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131, __c16, 3) as any as S.Schema<UpdateTelemetryPipelineInput>,
  output: __S(54, __c6, 6) as any as S.Schema<UpdateTelemetryPipelineOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTelemetryPipeline",
}));

export type UpdateTelemetryRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing telemetry rule in your account. If multiple users attempt to modify the same telemetry rule simultaneously, a ConflictException is returned to provide specific error information for concurrent modification scenarios.
 */
export const updateTelemetryRule: API.OperationMethod<
  UpdateTelemetryRuleInput,
  UpdateTelemetryRuleOutput,
  UpdateTelemetryRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(132, __c16, 4) as any as S.Schema<UpdateTelemetryRuleInput>,
  output: __S(16, __c2, 0) as any as S.Schema<UpdateTelemetryRuleOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTelemetryRule",
}));

export type UpdateTelemetryRuleForOrganizationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing telemetry rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.
 */
export const updateTelemetryRuleForOrganization: API.OperationMethod<
  UpdateTelemetryRuleForOrganizationInput,
  UpdateTelemetryRuleForOrganizationOutput,
  UpdateTelemetryRuleForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(133, __c16, 5) as any as S.Schema<UpdateTelemetryRuleForOrganizationInput>,
  output: __S(16, __c2, 0) as any as S.Schema<UpdateTelemetryRuleForOrganizationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTelemetryRuleForOrganization",
}));

export type ValidateTelemetryPipelineConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Validates a pipeline configuration without creating the pipeline. This operation checks the configuration for syntax errors and compatibility issues.
 */
export const validateTelemetryPipelineConfiguration: API.OperationMethod<
  ValidateTelemetryPipelineConfigurationInput,
  ValidateTelemetryPipelineConfigurationOutput,
  ValidateTelemetryPipelineConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(134, __c16, 6) as any as S.Schema<ValidateTelemetryPipelineConfigurationInput>,
  output: __S(138, __c17, 2) as any as S.Schema<ValidateTelemetryPipelineConfigurationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ValidateTelemetryPipelineConfiguration",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          LogGroupSelectionCriteria: S.optional(S.String),
          DataSourceSelectionCriteria: S.optional(S.String),
          EncryptedLogGroupStrategy: S.String,
        }),
      ).annotate({ identifier: "SourceLogsConfiguration" });
    case 2:
      return S.suspend(() => S.Struct({ MetricsSelectionCriteria: S.optional(S.String) })).annotate(
        {
          identifier: "SourceMetricsConfiguration",
        },
      );
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "SourceContextGraphConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Regions: __S(0, __c0, 0),
          Scope: S.optional(S.String),
          SourceLogsConfiguration: S.optional(__S(1, __c0, 1)),
          SourceMetricsConfiguration: S.optional(__S(2, __c0, 2)),
          SourceContextGraphConfiguration: S.optional(__S(3, __c0, 3)),
        }),
      ).annotate({ identifier: "CentralizationRuleSource" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EncryptionStrategy: S.String,
          KmsKeyArn: S.optional(S.String),
          EncryptionConflictResolutionStrategy: S.optional(S.String),
          EncryptionScope: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LogsEncryptionConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Region: S.String, KmsKeyArn: S.optional(S.String) }),
      ).annotate({ identifier: "LogsBackupConfiguration" });
    case 7:
      return S.suspend(() => S.Struct({ LogGroupNamePattern: S.String })).annotate({
        identifier: "LogGroupNameConfiguration",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DestinationRoleArn: S.String,
          TagConflictResolutionStrategy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TagPropagationConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LogsEncryptionConfiguration: S.optional(__S(5, __c0, 5)),
          BackupConfiguration: S.optional(__S(6, __c0, 6)),
          LogGroupNameConfiguration: S.optional(__S(7, __c0, 7)),
          TagPropagationConfiguration: S.optional(__S(8, __c1, 0)),
        }),
      ).annotate({
        identifier: "DestinationLogsConfiguration",
      });
    case 2:
      return S.suspend(() => S.Struct({ Region: S.String })).annotate({
        identifier: "MetricsBackupConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ BackupConfiguration: S.optional(__S(10, __c1, 2)) }),
      ).annotate({
        identifier: "DestinationMetricsConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Region: S.String,
          Account: S.optional(S.String),
          DestinationLogsConfiguration: S.optional(__S(9, __c1, 1)),
          DestinationMetricsConfiguration: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({
        identifier: "CentralizationRuleDestination",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Source: __S(4, __c0, 4), Destination: __S(12, __c1, 4) }),
      ).annotate({ identifier: "CentralizationRule" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.String,
          Rule: __S(13, __c1, 5),
          Tags: S.optional(__S(14, __c1, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateCentralizationRuleForOrganization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateCentralizationRuleForOrganizationInput",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ RuleArn: S.optional(S.String) })).annotate({
        identifier: "CreateCentralizationRuleForOrganizationOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ RoleArn: S.String, Tags: S.optional(__S(14, __c1, 6)) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateDatasetIntegration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDatasetIntegrationInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          RoleArn: S.String,
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          UpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "CreateDatasetIntegrationOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ SseAlgorithm: S.String, KmsKeyArn: S.optional(S.String) }),
      ).annotate({ identifier: "Encryption" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Encryption: __S(19, __c2, 3),
          RoleArn: S.String,
          Tags: S.optional(__S(14, __c1, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateS3TableIntegration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateS3TableIntegrationInput",
      });
    case 5:
      return S.suspend(() => S.Struct({ Arn: S.optional(S.String) })).annotate({
        identifier: "CreateS3TableIntegrationOutput",
      });
    case 6:
      return S.suspend(() => S.Struct({ Body: S.String })).annotate({
        identifier: "TelemetryPipelineConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Configuration: __S(22, __c2, 6),
          Tags: S.optional(__S(14, __c1, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateTelemetryPipeline" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateTelemetryPipelineInput",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          LogFormat: S.optional(S.String),
          TrafficType: S.optional(S.String),
          MaxAggregationInterval: S.optional(S.Number),
        }),
      ).annotate({ identifier: "VPCFlowLogParameters" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Field: S.String,
          Equals: S.optional(__S(0, __c0, 0)),
          StartsWith: S.optional(__S(0, __c0, 0)),
          EndsWith: S.optional(__S(0, __c0, 0)),
          NotEquals: S.optional(__S(0, __c0, 0)),
          NotStartsWith: S.optional(__S(0, __c0, 0)),
          NotEndsWith: S.optional(__S(0, __c0, 0)),
        }),
      ).annotate({ identifier: "AdvancedFieldSelector" });
    case 3:
      return S.Array(__S(26, __c3, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), FieldSelectors: __S(27, __c3, 3) }),
      ).annotate({ identifier: "AdvancedEventSelector" });
    case 5:
      return S.Array(__S(28, __c3, 4));
    case 6:
      return S.suspend(() => S.Struct({ AdvancedEventSelectors: __S(29, __c3, 5) })).annotate({
        identifier: "CloudtrailParameters",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ OutputFormat: S.optional(S.String), FieldDelimiter: S.optional(S.String) }),
      ).annotate({
        identifier: "ELBLoadBalancerLoggingParameters",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "SingleHeader",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SingleHeader: S.optional(__S(32, __c4, 0)),
          UriPath: S.optional(S.String),
          QueryString: S.optional(S.String),
          Method: S.optional(S.String),
        }),
      ).annotate({ identifier: "FieldToMatch" });
    case 2:
      return S.Array(__S(33, __c4, 1));
    case 3:
      return S.suspend(() => S.Struct({ Action: S.optional(S.String) })).annotate({
        identifier: "ActionCondition",
      });
    case 4:
      return S.suspend(() => S.Struct({ LabelName: S.optional(S.String) })).annotate({
        identifier: "LabelNameCondition",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ActionCondition: S.optional(__S(35, __c4, 3)),
          LabelNameCondition: S.optional(__S(36, __c4, 4)),
        }),
      ).annotate({ identifier: "Condition" });
    case 6:
      return S.Array(__S(37, __c4, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Behavior: S.optional(S.String),
          Requirement: S.optional(S.String),
          Conditions: S.optional(__S(38, __c4, 6)),
        }),
      ).annotate({ identifier: "Filter" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(39, __c4, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ Filters: S.optional(__S(40, __c5, 0)), DefaultBehavior: S.optional(S.String) }),
      ).annotate({ identifier: "LoggingFilter" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RedactedFields: S.optional(__S(34, __c4, 2)),
          LoggingFilter: S.optional(__S(41, __c5, 1)),
          LogType: S.optional(S.String),
        }),
      ).annotate({ identifier: "WAFLoggingParameters" });
    case 3:
      return S.suspend(() => S.Struct({ LogTypes: S.optional(__S(24, __c3, 0)) })).annotate({
        identifier: "LogDeliveryParameters",
      });
    case 4:
      return S.suspend(() => S.Struct({ EnhancedMonitoring: S.optional(S.String) })).annotate({
        identifier: "MskMonitoringParameters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DestinationType: S.optional(S.String),
          DestinationPattern: S.optional(S.String),
          RetentionInDays: S.optional(S.Number),
          VPCFlowLogParameters: S.optional(__S(25, __c3, 1)),
          CloudtrailParameters: S.optional(__S(30, __c3, 6)),
          ELBLoadBalancerLoggingParameters: S.optional(__S(31, __c3, 7)),
          WAFLoggingParameters: S.optional(__S(42, __c5, 2)),
          LogDeliveryParameters: S.optional(__S(43, __c5, 3)),
          MskMonitoringParameters: S.optional(__S(44, __c5, 4)),
          KmsKeyArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TelemetryDestinationConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceType: S.optional(S.String),
          TelemetryType: S.String,
          TelemetrySourceTypes: S.optional(__S(24, __c3, 0)),
          DestinationConfiguration: S.optional(__S(45, __c5, 5)),
          Scope: S.optional(S.String),
          SelectionCriteria: S.optional(S.String),
          AllowFieldUpdates: S.optional(S.Boolean),
          Regions: S.optional(__S(0, __c0, 0)),
          AllRegions: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "TelemetryRule" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.String,
          Rule: __S(46, __c5, 6),
          Tags: S.optional(__S(14, __c1, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateTelemetryRule" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateTelemetryRuleInput" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.String,
          Rule: __S(46, __c5, 6),
          Tags: S.optional(__S(14, __c1, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateTelemetryRuleForOrganization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateTelemetryRuleForOrganizationInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ RuleIdentifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteCentralizationRuleForOrganization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCentralizationRuleForOrganizationInput",
      });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteCentralizationRuleForOrganizationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteDatasetIntegration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDatasetIntegrationInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteS3TableIntegration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteS3TableIntegrationInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ PipelineIdentifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteTelemetryPipeline" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTelemetryPipelineInput",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteTelemetryPipelineOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ RuleIdentifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteTelemetryRule" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTelemetryRuleInput" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ RuleIdentifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteTelemetryRuleForOrganization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTelemetryRuleForOrganizationInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ RuleIdentifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetCentralizationRuleForOrganization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCentralizationRuleForOrganizationInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.optional(S.String),
          RuleArn: S.optional(S.String),
          CreatorAccountId: S.optional(S.String),
          CreatedTimeStamp: S.optional(S.Number),
          CreatedRegion: S.optional(S.String),
          LastUpdateTimeStamp: S.optional(S.Number),
          RuleHealth: S.optional(S.String),
          FailureReason: S.optional(S.String),
          TagPropagationStatus: S.optional(S.String),
          TagPropagationFailureReason: S.optional(S.String),
          ContextGraphStatus: S.optional(S.String),
          CentralizationRule: S.optional(__S(13, __c1, 5)),
        }),
      ).annotate({
        identifier: "GetCentralizationRuleForOrganizationOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetDatasetIntegration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDatasetIntegrationInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          RoleArn: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "GetDatasetIntegrationOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetS3TableIntegration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetS3TableIntegrationInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          RoleArn: S.optional(S.String),
          Status: S.optional(S.String),
          Encryption: S.optional(__S(19, __c2, 3)),
          DestinationTableBucketArn: S.optional(S.String),
          CreatedTimeStamp: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "GetS3TableIntegrationOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetTelemetryEnrichmentStatus" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTelemetryEnrichmentStatusRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          AwsResourceExplorerManagedViewArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetTelemetryEnrichmentStatusOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetTelemetryEvaluationStatus" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTelemetryEvaluationStatusRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Region: S.optional(S.String),
          Status: S.optional(S.String),
          FailureReason: S.optional(S.String),
          RuleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "RegionStatus" });
    case 3:
      return S.Array(__S(66, __c8, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          FailureReason: S.optional(S.String),
          HomeRegion: S.optional(S.String),
          RegionStatuses: S.optional(__S(67, __c8, 3)),
        }),
      ).annotate({
        identifier: "GetTelemetryEvaluationStatusOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetTelemetryEvaluationStatusForOrganization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTelemetryEvaluationStatusForOrganizationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ PipelineIdentifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetTelemetryPipeline" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTelemetryPipelineInput",
      });
    case 7:
      return S.suspend(() => S.Struct({ Description: S.optional(S.String) })).annotate({
        identifier: "TelemetryPipelineStatusReason",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CreatedTimeStamp: S.optional(S.Number),
          LastUpdateTimeStamp: S.optional(S.Number),
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Configuration: S.optional(__S(22, __c2, 6)),
          Status: S.optional(S.String),
          StatusReason: S.optional(__S(71, __c8, 7)),
          Tags: S.optional(__S(14, __c1, 6)),
        }),
      ).annotate({ identifier: "TelemetryPipeline" });
    case 1:
      return S.suspend(() => S.Struct({ Pipeline: S.optional(__S(72, __c9, 0)) })).annotate({
        identifier: "GetTelemetryPipelineOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ RuleIdentifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetTelemetryRule" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTelemetryRuleInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.optional(S.String),
          RuleArn: S.optional(S.String),
          CreatedTimeStamp: S.optional(S.Number),
          LastUpdateTimeStamp: S.optional(S.Number),
          TelemetryRule: S.optional(__S(46, __c5, 6)),
          HomeRegion: S.optional(S.String),
          IsReplicated: S.optional(S.Boolean),
          RegionStatuses: S.optional(__S(67, __c8, 3)),
        }),
      ).annotate({ identifier: "GetTelemetryRuleOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ RuleIdentifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetTelemetryRuleForOrganization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTelemetryRuleForOrganizationInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.optional(S.String),
          RuleArn: S.optional(S.String),
          CreatedTimeStamp: S.optional(S.Number),
          LastUpdateTimeStamp: S.optional(S.Number),
          TelemetryRule: S.optional(__S(46, __c5, 6)),
          HomeRegion: S.optional(S.String),
          IsReplicated: S.optional(S.Boolean),
          RegionStatuses: S.optional(__S(67, __c8, 3)),
        }),
      ).annotate({
        identifier: "GetTelemetryRuleForOrganizationOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RuleNamePrefix: S.optional(S.String),
          AllRegions: S.optional(S.Boolean),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListCentralizationRulesForOrganization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCentralizationRulesForOrganizationInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.optional(S.String),
          RuleArn: S.optional(S.String),
          CreatorAccountId: S.optional(S.String),
          CreatedTimeStamp: S.optional(S.Number),
          CreatedRegion: S.optional(S.String),
          LastUpdateTimeStamp: S.optional(S.Number),
          RuleHealth: S.optional(S.String),
          FailureReason: S.optional(S.String),
          TagPropagationStatus: S.optional(S.String),
          TagPropagationFailureReason: S.optional(S.String),
          ContextGraphStatus: S.optional(S.String),
          DestinationAccountId: S.optional(S.String),
          DestinationRegion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CentralizationRuleSummary",
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
          CentralizationRuleSummaries: S.optional(__S(80, __c10, 0)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCentralizationRulesForOrganizationOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListDatasetIntegrations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDatasetIntegrationsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          RoleArn: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DatasetIntegrationSummary",
      });
    case 4:
      return S.Array(__S(83, __c10, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          DatasetIntegrationSummaries: __S(84, __c10, 4),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDatasetIntegrationsOutput",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifierPrefix: S.optional(S.String),
          ResourceTypes: S.optional(__S(24, __c3, 0)),
          TelemetryConfigurationState: S.optional(__S(86, __c10, 6)),
          ResourceTags: S.optional(__S(14, __c1, 6)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListResourceTelemetry" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResourceTelemetryInput",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountIdentifier: S.optional(S.String),
          TelemetryConfigurationState: S.optional(__S(86, __c10, 6)),
          ResourceType: S.optional(S.String),
          ResourceIdentifier: S.optional(S.String),
          ResourceTags: S.optional(__S(14, __c1, 6)),
          LastUpdateTimeStamp: S.optional(S.Number),
          TelemetrySourceType: S.optional(S.String),
        }),
      ).annotate({ identifier: "TelemetryConfiguration" });
    case 1:
      return S.Array(__S(88, __c11, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          TelemetryConfigurations: S.optional(__S(89, __c11, 1)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListResourceTelemetryOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountIdentifiers: S.optional(__S(0, __c0, 0)),
          ResourceIdentifierPrefix: S.optional(S.String),
          ResourceTypes: S.optional(__S(24, __c3, 0)),
          TelemetryConfigurationState: S.optional(__S(86, __c10, 6)),
          ResourceTags: S.optional(__S(14, __c1, 6)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListResourceTelemetryForOrganization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResourceTelemetryForOrganizationInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListS3TableIntegrations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListS3TableIntegrationsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({ identifier: "IntegrationSummary" });
    case 6:
      return S.Array(__S(93, __c11, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          IntegrationSummaries: S.optional(__S(94, __c11, 6)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListS3TableIntegrationsOutput",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListTagsForResource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 1:
      return S.suspend(() => S.Struct({ Tags: __S(14, __c1, 6) })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListTelemetryPipelines" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTelemetryPipelinesInput",
      });
    case 3:
      return S.suspend(() => S.Struct({ Type: S.optional(S.String) })).annotate({
        identifier: "Source",
      });
    case 4:
      return S.Array(__S(99, __c12, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Type: S.optional(S.String) }),
      ).annotate({ identifier: "DataSource" });
    case 6:
      return S.Array(__S(101, __c12, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Sources: S.optional(__S(100, __c12, 4)),
          DataSources: S.optional(__S(102, __c12, 6)),
          Processors: S.optional(__S(0, __c0, 0)),
          ProcessorCount: S.optional(S.Number),
          Sinks: S.optional(__S(0, __c0, 0)),
        }),
      ).annotate({ identifier: "ConfigurationSummary" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CreatedTimeStamp: S.optional(S.Number),
          LastUpdateTimeStamp: S.optional(S.Number),
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          Tags: S.optional(__S(14, __c1, 6)),
          ConfigurationSummary: S.optional(__S(103, __c12, 7)),
        }),
      ).annotate({ identifier: "TelemetryPipelineSummary" });
    case 1:
      return S.Array(__S(104, __c13, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          PipelineSummaries: S.optional(__S(105, __c13, 1)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTelemetryPipelinesOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RuleNamePrefix: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListTelemetryRules" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTelemetryRulesInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.optional(S.String),
          RuleArn: S.optional(S.String),
          CreatedTimeStamp: S.optional(S.Number),
          LastUpdateTimeStamp: S.optional(S.Number),
          ResourceType: S.optional(S.String),
          TelemetryType: S.optional(S.String),
          TelemetrySourceTypes: S.optional(__S(24, __c3, 0)),
        }),
      ).annotate({ identifier: "TelemetryRuleSummary" });
    case 5:
      return S.Array(__S(108, __c13, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          TelemetryRuleSummaries: S.optional(__S(109, __c13, 5)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListTelemetryRulesOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          RuleNamePrefix: S.optional(S.String),
          SourceAccountIds: S.optional(__S(0, __c0, 0)),
          SourceOrganizationUnitIds: S.optional(__S(0, __c0, 0)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListTelemetryRulesForOrganization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTelemetryRulesForOrganizationInput",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TelemetryRuleSummaries: S.optional(__S(109, __c13, 5)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTelemetryRulesForOrganizationOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartTelemetryEnrichment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartTelemetryEnrichmentRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Regions: S.optional(__S(0, __c0, 0)), AllRegions: S.optional(S.Boolean) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartTelemetryEvaluation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartTelemetryEvaluationInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Regions: S.optional(__S(0, __c0, 0)), AllRegions: S.optional(S.Boolean) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartTelemetryEvaluationForOrganization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartTelemetryEvaluationForOrganizationInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StopTelemetryEnrichment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopTelemetryEnrichmentRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ Status: S.optional(S.String) })).annotate({
        identifier: "StopTelemetryEnrichmentOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StopTelemetryEvaluation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopTelemetryEvaluationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StopTelemetryEvaluationForOrganization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopTelemetryEvaluationForOrganizationRequest",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: __S(14, __c1, 6) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/TagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Data: S.optional(S.String), Type: S.optional(S.String) }),
      ).annotate({ identifier: "Record" });
    case 2:
      return S.Array(__S(121, __c15, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Records: __S(122, __c15, 2),
          Configuration: __S(22, __c2, 6),
          SignalType: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/TestTelemetryPipeline" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "TestTelemetryPipelineInput",
      });
    case 4:
      return S.suspend(() => S.Struct({ Message: S.optional(S.String) })).annotate({
        identifier: "PipelineOutputError",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Record: S.optional(__S(121, __c15, 1)), Error: S.optional(__S(124, __c15, 4)) }),
      ).annotate({ identifier: "PipelineOutput" });
    case 6:
      return S.Array(__S(125, __c15, 5));
    case 7:
      return S.suspend(() => S.Struct({ Results: S.optional(__S(126, __c15, 6)) })).annotate({
        identifier: "TestTelemetryPipelineOutput",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: __S(0, __c0, 0) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UntagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ RuleIdentifier: S.String, Rule: __S(13, __c1, 5) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateCentralizationRuleForOrganization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateCentralizationRuleForOrganizationInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Arn: S.String, RoleArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateDatasetIntegration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDatasetIntegrationInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PipelineIdentifier: S.String,
          Configuration: __S(22, __c2, 6),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateTelemetryPipeline" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateTelemetryPipelineInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ RuleIdentifier: S.String, Rule: __S(46, __c5, 6) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateTelemetryRule" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateTelemetryRuleInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ RuleIdentifier: S.String, Rule: __S(46, __c5, 6) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateTelemetryRuleForOrganization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateTelemetryRuleForOrganizationInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Configuration: __S(22, __c2, 6) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ValidateTelemetryPipelineConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ValidateTelemetryPipelineConfigurationInput",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Message: S.optional(S.String),
          Reason: S.optional(S.String),
          FieldMap: S.optional(__S(135, __c16, 7)),
        }),
      ).annotate({ identifier: "ValidationError" });
    case 1:
      return S.Array(__S(136, __c17, 0));
    case 2:
      return S.suspend(() => S.Struct({ Errors: S.optional(__S(137, __c17, 1)) })).annotate({
        identifier: "ValidateTelemetryPipelineConfigurationOutput",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
