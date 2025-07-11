import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AmazonPrometheusService {
  createAlertManagerDefinition(
    input: CreateAlertManagerDefinitionRequest,
  ): Effect.Effect<
    CreateAlertManagerDefinitionResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createLoggingConfiguration(
    input: CreateLoggingConfigurationRequest,
  ): Effect.Effect<
    CreateLoggingConfigurationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  createQueryLoggingConfiguration(
    input: CreateQueryLoggingConfigurationRequest,
  ): Effect.Effect<
    CreateQueryLoggingConfigurationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  createRuleGroupsNamespace(
    input: CreateRuleGroupsNamespaceRequest,
  ): Effect.Effect<
    CreateRuleGroupsNamespaceResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createScraper(
    input: CreateScraperRequest,
  ): Effect.Effect<
    CreateScraperResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createWorkspace(
    input: CreateWorkspaceRequest,
  ): Effect.Effect<
    CreateWorkspaceResponse,
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteAlertManagerDefinition(
    input: DeleteAlertManagerDefinitionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteLoggingConfiguration(
    input: DeleteLoggingConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteQueryLoggingConfiguration(
    input: DeleteQueryLoggingConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteRuleGroupsNamespace(
    input: DeleteRuleGroupsNamespaceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteScraper(
    input: DeleteScraperRequest,
  ): Effect.Effect<
    DeleteScraperResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteWorkspace(
    input: DeleteWorkspaceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeAlertManagerDefinition(
    input: DescribeAlertManagerDefinitionRequest,
  ): Effect.Effect<
    DescribeAlertManagerDefinitionResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeLoggingConfiguration(
    input: DescribeLoggingConfigurationRequest,
  ): Effect.Effect<
    DescribeLoggingConfigurationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeQueryLoggingConfiguration(
    input: DescribeQueryLoggingConfigurationRequest,
  ): Effect.Effect<
    DescribeQueryLoggingConfigurationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeRuleGroupsNamespace(
    input: DescribeRuleGroupsNamespaceRequest,
  ): Effect.Effect<
    DescribeRuleGroupsNamespaceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeScraper(
    input: DescribeScraperRequest,
  ): Effect.Effect<
    DescribeScraperResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeWorkspace(
    input: DescribeWorkspaceRequest,
  ): Effect.Effect<
    DescribeWorkspaceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeWorkspaceConfiguration(
    input: DescribeWorkspaceConfigurationRequest,
  ): Effect.Effect<
    DescribeWorkspaceConfigurationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDefaultScraperConfiguration(
    input: GetDefaultScraperConfigurationRequest,
  ): Effect.Effect<
    GetDefaultScraperConfigurationResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | CommonAwsError
  >;
  listRuleGroupsNamespaces(
    input: ListRuleGroupsNamespacesRequest,
  ): Effect.Effect<
    ListRuleGroupsNamespacesResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listScrapers(
    input: ListScrapersRequest,
  ): Effect.Effect<
    ListScrapersResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listWorkspaces(
    input: ListWorkspacesRequest,
  ): Effect.Effect<
    ListWorkspacesResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  putAlertManagerDefinition(
    input: PutAlertManagerDefinitionRequest,
  ): Effect.Effect<
    PutAlertManagerDefinitionResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  putRuleGroupsNamespace(
    input: PutRuleGroupsNamespaceRequest,
  ): Effect.Effect<
    PutRuleGroupsNamespaceResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateLoggingConfiguration(
    input: UpdateLoggingConfigurationRequest,
  ): Effect.Effect<
    UpdateLoggingConfigurationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateQueryLoggingConfiguration(
    input: UpdateQueryLoggingConfigurationRequest,
  ): Effect.Effect<
    UpdateQueryLoggingConfigurationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateScraper(
    input: UpdateScraperRequest,
  ): Effect.Effect<
    UpdateScraperResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateWorkspaceAlias(
    input: UpdateWorkspaceAliasRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateWorkspaceConfiguration(
    input: UpdateWorkspaceConfigurationRequest,
  ): Effect.Effect<
    UpdateWorkspaceConfigurationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
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
export interface GetDefaultScraperConfigurationRequest {
}
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
export interface TagResourceResponse {
}
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
export interface UntagResourceResponse {
}
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
export declare namespace CreateAlertManagerDefinition {
  export type Input = CreateAlertManagerDefinitionRequest;
  export type Output = CreateAlertManagerDefinitionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLoggingConfiguration {
  export type Input = CreateLoggingConfigurationRequest;
  export type Output = CreateLoggingConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateQueryLoggingConfiguration {
  export type Input = CreateQueryLoggingConfigurationRequest;
  export type Output = CreateQueryLoggingConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRuleGroupsNamespace {
  export type Input = CreateRuleGroupsNamespaceRequest;
  export type Output = CreateRuleGroupsNamespaceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateScraper {
  export type Input = CreateScraperRequest;
  export type Output = CreateScraperResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWorkspace {
  export type Input = CreateWorkspaceRequest;
  export type Output = CreateWorkspaceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAlertManagerDefinition {
  export type Input = DeleteAlertManagerDefinitionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLoggingConfiguration {
  export type Input = DeleteLoggingConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteQueryLoggingConfiguration {
  export type Input = DeleteQueryLoggingConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRuleGroupsNamespace {
  export type Input = DeleteRuleGroupsNamespaceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteScraper {
  export type Input = DeleteScraperRequest;
  export type Output = DeleteScraperResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWorkspace {
  export type Input = DeleteWorkspaceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAlertManagerDefinition {
  export type Input = DescribeAlertManagerDefinitionRequest;
  export type Output = DescribeAlertManagerDefinitionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeLoggingConfiguration {
  export type Input = DescribeLoggingConfigurationRequest;
  export type Output = DescribeLoggingConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeQueryLoggingConfiguration {
  export type Input = DescribeQueryLoggingConfigurationRequest;
  export type Output = DescribeQueryLoggingConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRuleGroupsNamespace {
  export type Input = DescribeRuleGroupsNamespaceRequest;
  export type Output = DescribeRuleGroupsNamespaceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeScraper {
  export type Input = DescribeScraperRequest;
  export type Output = DescribeScraperResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeWorkspace {
  export type Input = DescribeWorkspaceRequest;
  export type Output = DescribeWorkspaceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeWorkspaceConfiguration {
  export type Input = DescribeWorkspaceConfigurationRequest;
  export type Output = DescribeWorkspaceConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDefaultScraperConfiguration {
  export type Input = GetDefaultScraperConfigurationRequest;
  export type Output = GetDefaultScraperConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListRuleGroupsNamespaces {
  export type Input = ListRuleGroupsNamespacesRequest;
  export type Output = ListRuleGroupsNamespacesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListScrapers {
  export type Input = ListScrapersRequest;
  export type Output = ListScrapersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
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

export declare namespace ListWorkspaces {
  export type Input = ListWorkspacesRequest;
  export type Output = ListWorkspacesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutAlertManagerDefinition {
  export type Input = PutAlertManagerDefinitionRequest;
  export type Output = PutAlertManagerDefinitionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutRuleGroupsNamespace {
  export type Input = PutRuleGroupsNamespaceRequest;
  export type Output = PutRuleGroupsNamespaceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
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

export declare namespace UpdateLoggingConfiguration {
  export type Input = UpdateLoggingConfigurationRequest;
  export type Output = UpdateLoggingConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateQueryLoggingConfiguration {
  export type Input = UpdateQueryLoggingConfigurationRequest;
  export type Output = UpdateQueryLoggingConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateScraper {
  export type Input = UpdateScraperRequest;
  export type Output = UpdateScraperResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWorkspaceAlias {
  export type Input = UpdateWorkspaceAliasRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWorkspaceConfiguration {
  export type Input = UpdateWorkspaceConfigurationRequest;
  export type Output = UpdateWorkspaceConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

