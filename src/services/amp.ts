import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonPrometheusService {
  getDefaultScraperConfiguration(
    input: GetDefaultScraperConfigurationRequest,
  ): Effect.Effect<
    GetDefaultScraperConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type Amp = AmazonPrometheusService;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AlertManagerDefinitionData = Uint8Array | string;

export interface AlertManagerDefinitionDescription {
  status: AlertManagerDefinitionStatus;
  data: Uint8Array | string;
  createdAt: Date | string;
  modifiedAt: Date | string;
}
export interface AlertManagerDefinitionStatus {
  statusCode: string;
  statusReason?: string;
}
export type AlertManagerDefinitionStatusCode = string;

export interface AmpConfiguration {
  workspaceArn: string;
}
export interface CloudWatchLogDestination {
  logGroupArn: string;
}
export type ClusterArn = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface CreateAlertManagerDefinitionRequest {
  workspaceId: string;
  data: Uint8Array | string;
  clientToken?: string;
}
export interface CreateAlertManagerDefinitionResponse {
  status: AlertManagerDefinitionStatus;
}
export interface CreateLoggingConfigurationRequest {
  workspaceId: string;
  logGroupArn: string;
  clientToken?: string;
}
export interface CreateLoggingConfigurationResponse {
  status: LoggingConfigurationStatus;
}
export interface CreateQueryLoggingConfigurationRequest {
  workspaceId: string;
  destinations: Array<LoggingDestination>;
  clientToken?: string;
}
export interface CreateQueryLoggingConfigurationResponse {
  status: QueryLoggingConfigurationStatus;
}
export interface CreateRuleGroupsNamespaceRequest {
  workspaceId: string;
  name: string;
  data: Uint8Array | string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateRuleGroupsNamespaceResponse {
  name: string;
  arn: string;
  status: RuleGroupsNamespaceStatus;
  tags?: Record<string, string>;
}
export interface CreateScraperRequest {
  alias?: string;
  scrapeConfiguration: ScrapeConfiguration;
  source: Source;
  destination: Destination;
  roleConfiguration?: RoleConfiguration;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateScraperResponse {
  scraperId: string;
  arn: string;
  status: ScraperStatus;
  tags?: Record<string, string>;
}
export interface CreateWorkspaceRequest {
  alias?: string;
  clientToken?: string;
  tags?: Record<string, string>;
  kmsKeyArn?: string;
}
export interface CreateWorkspaceResponse {
  workspaceId: string;
  arn: string;
  status: WorkspaceStatus;
  tags?: Record<string, string>;
  kmsKeyArn?: string;
}
export interface DeleteAlertManagerDefinitionRequest {
  workspaceId: string;
  clientToken?: string;
}
export interface DeleteLoggingConfigurationRequest {
  workspaceId: string;
  clientToken?: string;
}
export interface DeleteQueryLoggingConfigurationRequest {
  workspaceId: string;
  clientToken?: string;
}
export interface DeleteRuleGroupsNamespaceRequest {
  workspaceId: string;
  name: string;
  clientToken?: string;
}
export interface DeleteScraperRequest {
  scraperId: string;
  clientToken?: string;
}
export interface DeleteScraperResponse {
  scraperId: string;
  status: ScraperStatus;
}
export interface DeleteWorkspaceRequest {
  workspaceId: string;
  clientToken?: string;
}
export interface DescribeAlertManagerDefinitionRequest {
  workspaceId: string;
}
export interface DescribeAlertManagerDefinitionResponse {
  alertManagerDefinition: AlertManagerDefinitionDescription;
}
export interface DescribeLoggingConfigurationRequest {
  workspaceId: string;
}
export interface DescribeLoggingConfigurationResponse {
  loggingConfiguration: LoggingConfigurationMetadata;
}
export interface DescribeQueryLoggingConfigurationRequest {
  workspaceId: string;
}
export interface DescribeQueryLoggingConfigurationResponse {
  queryLoggingConfiguration: QueryLoggingConfigurationMetadata;
}
export interface DescribeRuleGroupsNamespaceRequest {
  workspaceId: string;
  name: string;
}
export interface DescribeRuleGroupsNamespaceResponse {
  ruleGroupsNamespace: RuleGroupsNamespaceDescription;
}
export interface DescribeScraperRequest {
  scraperId: string;
}
export interface DescribeScraperResponse {
  scraper: ScraperDescription;
}
export interface DescribeWorkspaceConfigurationRequest {
  workspaceId: string;
}
export interface DescribeWorkspaceConfigurationResponse {
  workspaceConfiguration: WorkspaceConfigurationDescription;
}
export interface DescribeWorkspaceRequest {
  workspaceId: string;
}
export interface DescribeWorkspaceResponse {
  workspace: WorkspaceDescription;
}
export type Destination = { ampConfiguration: AmpConfiguration };
export interface EksConfiguration {
  clusterArn: string;
  securityGroupIds?: Array<string>;
  subnetIds: Array<string>;
}
export type FilterKey = string;

export type FilterValue = string;

export type FilterValues = Array<string>;
export interface GetDefaultScraperConfigurationRequest {}
export interface GetDefaultScraperConfigurationResponse {
  configuration: Uint8Array | string;
}
export type IamRoleArn = string;

export type IdempotencyToken = string;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type KmsKeyArn = string;

export type LabelName = string;

export type LabelSet = Record<string, string>;
export type LabelValue = string;

export interface LimitsPerLabelSet {
  limits: LimitsPerLabelSetEntry;
  labelSet: Record<string, string>;
}
export interface LimitsPerLabelSetEntry {
  maxSeries?: number;
}
export type LimitsPerLabelSetList = Array<LimitsPerLabelSet>;
export interface ListRuleGroupsNamespacesRequest {
  workspaceId: string;
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListRuleGroupsNamespacesResponse {
  ruleGroupsNamespaces: Array<RuleGroupsNamespaceSummary>;
  nextToken?: string;
}
export interface ListScrapersRequest {
  filters?: Record<string, Array<string>>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListScrapersResponse {
  scrapers: Array<ScraperSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListWorkspacesRequest {
  nextToken?: string;
  alias?: string;
  maxResults?: number;
}
export interface ListWorkspacesResponse {
  workspaces: Array<WorkspaceSummary>;
  nextToken?: string;
}
export interface LoggingConfigurationMetadata {
  status: LoggingConfigurationStatus;
  workspace: string;
  logGroupArn: string;
  createdAt: Date | string;
  modifiedAt: Date | string;
}
export interface LoggingConfigurationStatus {
  statusCode: string;
  statusReason?: string;
}
export type LoggingConfigurationStatusCode = string;

export interface LoggingDestination {
  cloudWatchLogs: CloudWatchLogDestination;
  filters: LoggingFilter;
}
export type LoggingDestinations = Array<LoggingDestination>;
export interface LoggingFilter {
  qspThreshold: number;
}
export type LogGroupArn = string;

export type PaginationToken = string;

export interface PutAlertManagerDefinitionRequest {
  workspaceId: string;
  data: Uint8Array | string;
  clientToken?: string;
}
export interface PutAlertManagerDefinitionResponse {
  status: AlertManagerDefinitionStatus;
}
export interface PutRuleGroupsNamespaceRequest {
  workspaceId: string;
  name: string;
  data: Uint8Array | string;
  clientToken?: string;
}
export interface PutRuleGroupsNamespaceResponse {
  name: string;
  arn: string;
  status: RuleGroupsNamespaceStatus;
  tags?: Record<string, string>;
}
export interface QueryLoggingConfigurationMetadata {
  status: QueryLoggingConfigurationStatus;
  workspace: string;
  destinations: Array<LoggingDestination>;
  createdAt: Date | string;
  modifiedAt: Date | string;
}
export interface QueryLoggingConfigurationStatus {
  statusCode: string;
  statusReason?: string;
}
export type QueryLoggingConfigurationStatusCode = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface RoleConfiguration {
  sourceRoleArn?: string;
  targetRoleArn?: string;
}
export type RuleGroupsNamespaceArn = string;

export type RuleGroupsNamespaceData = Uint8Array | string;

export interface RuleGroupsNamespaceDescription {
  arn: string;
  name: string;
  status: RuleGroupsNamespaceStatus;
  data: Uint8Array | string;
  createdAt: Date | string;
  modifiedAt: Date | string;
  tags?: Record<string, string>;
}
export type RuleGroupsNamespaceName = string;

export interface RuleGroupsNamespaceStatus {
  statusCode: string;
  statusReason?: string;
}
export type RuleGroupsNamespaceStatusCode = string;

export interface RuleGroupsNamespaceSummary {
  arn: string;
  name: string;
  status: RuleGroupsNamespaceStatus;
  createdAt: Date | string;
  modifiedAt: Date | string;
  tags?: Record<string, string>;
}
export type RuleGroupsNamespaceSummaryList = Array<RuleGroupsNamespaceSummary>;
export type ScrapeConfiguration = { configurationBlob: Uint8Array | string };
export type ScraperAlias = string;

export type ScraperArn = string;

export interface ScraperDescription {
  alias?: string;
  scraperId: string;
  arn: string;
  roleArn: string;
  status: ScraperStatus;
  createdAt: Date | string;
  lastModifiedAt: Date | string;
  tags?: Record<string, string>;
  statusReason?: string;
  scrapeConfiguration: ScrapeConfiguration;
  source: Source;
  destination: Destination;
  roleConfiguration?: RoleConfiguration;
}
export type ScraperFilters = Record<string, Array<string>>;
export type ScraperId = string;

export interface ScraperStatus {
  statusCode: string;
}
export type ScraperStatusCode = string;

export interface ScraperSummary {
  alias?: string;
  scraperId: string;
  arn: string;
  roleArn: string;
  status: ScraperStatus;
  createdAt: Date | string;
  lastModifiedAt: Date | string;
  tags?: Record<string, string>;
  statusReason?: string;
  source: Source;
  destination: Destination;
  roleConfiguration?: RoleConfiguration;
}
export type ScraperSummaryList = Array<ScraperSummary>;
export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
}> {}
export type Source = { eksConfiguration: EksConfiguration };
export type StatusReason = string;

export type SubnetId = string;

export type SubnetIds = Array<string>;
export type TagKey = string;

export type TagKeys = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateLoggingConfigurationRequest {
  workspaceId: string;
  logGroupArn: string;
  clientToken?: string;
}
export interface UpdateLoggingConfigurationResponse {
  status: LoggingConfigurationStatus;
}
export interface UpdateQueryLoggingConfigurationRequest {
  workspaceId: string;
  destinations: Array<LoggingDestination>;
  clientToken?: string;
}
export interface UpdateQueryLoggingConfigurationResponse {
  status: QueryLoggingConfigurationStatus;
}
export interface UpdateScraperRequest {
  scraperId: string;
  alias?: string;
  scrapeConfiguration?: ScrapeConfiguration;
  destination?: Destination;
  roleConfiguration?: RoleConfiguration;
  clientToken?: string;
}
export interface UpdateScraperResponse {
  scraperId: string;
  arn: string;
  status: ScraperStatus;
  tags?: Record<string, string>;
}
export interface UpdateWorkspaceAliasRequest {
  workspaceId: string;
  alias?: string;
  clientToken?: string;
}
export interface UpdateWorkspaceConfigurationRequest {
  workspaceId: string;
  clientToken?: string;
  limitsPerLabelSet?: Array<LimitsPerLabelSet>;
  retentionPeriodInDays?: number;
}
export interface UpdateWorkspaceConfigurationResponse {
  status: WorkspaceConfigurationStatus;
}
export type Uri = string;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export type WorkspaceAlias = string;

export type WorkspaceArn = string;

export interface WorkspaceConfigurationDescription {
  status: WorkspaceConfigurationStatus;
  limitsPerLabelSet?: Array<LimitsPerLabelSet>;
  retentionPeriodInDays?: number;
}
export interface WorkspaceConfigurationStatus {
  statusCode: string;
  statusReason?: string;
}
export type WorkspaceConfigurationStatusCode = string;

export interface WorkspaceDescription {
  workspaceId: string;
  alias?: string;
  arn: string;
  status: WorkspaceStatus;
  prometheusEndpoint?: string;
  createdAt: Date | string;
  tags?: Record<string, string>;
  kmsKeyArn?: string;
}
export type WorkspaceId = string;

export interface WorkspaceStatus {
  statusCode: string;
}
export type WorkspaceStatusCode = string;

export interface WorkspaceSummary {
  workspaceId: string;
  alias?: string;
  arn: string;
  status: WorkspaceStatus;
  createdAt: Date | string;
  tags?: Record<string, string>;
  kmsKeyArn?: string;
}
export type WorkspaceSummaryList = Array<WorkspaceSummary>;
export declare namespace GetDefaultScraperConfiguration {
  export type Input = GetDefaultScraperConfigurationRequest;
  export type Output = GetDefaultScraperConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
