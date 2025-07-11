import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class DataBrew extends AWSServiceClient {
  batchDeleteRecipeVersion(
    input: BatchDeleteRecipeVersionRequest,
  ): Effect.Effect<
    BatchDeleteRecipeVersionResponse,
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createDataset(
    input: CreateDatasetRequest,
  ): Effect.Effect<
    CreateDatasetResponse,
    | AccessDeniedException
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createProfileJob(
    input: CreateProfileJobRequest,
  ): Effect.Effect<
    CreateProfileJobResponse,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createProject(
    input: CreateProjectRequest,
  ): Effect.Effect<
    CreateProjectResponse,
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createRecipe(
    input: CreateRecipeRequest,
  ): Effect.Effect<
    CreateRecipeResponse,
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createRecipeJob(
    input: CreateRecipeJobRequest,
  ): Effect.Effect<
    CreateRecipeJobResponse,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createRuleset(
    input: CreateRulesetRequest,
  ): Effect.Effect<
    CreateRulesetResponse,
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createSchedule(
    input: CreateScheduleRequest,
  ): Effect.Effect<
    CreateScheduleResponse,
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteDataset(
    input: DeleteDatasetRequest,
  ): Effect.Effect<
    DeleteDatasetResponse,
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteJob(
    input: DeleteJobRequest,
  ): Effect.Effect<
    DeleteJobResponse,
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteProject(
    input: DeleteProjectRequest,
  ): Effect.Effect<
    DeleteProjectResponse,
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteRecipeVersion(
    input: DeleteRecipeVersionRequest,
  ): Effect.Effect<
    DeleteRecipeVersionResponse,
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteRuleset(
    input: DeleteRulesetRequest,
  ): Effect.Effect<
    DeleteRulesetResponse,
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteSchedule(
    input: DeleteScheduleRequest,
  ): Effect.Effect<
    DeleteScheduleResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeDataset(
    input: DescribeDatasetRequest,
  ): Effect.Effect<
    DescribeDatasetResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeJob(
    input: DescribeJobRequest,
  ): Effect.Effect<
    DescribeJobResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeJobRun(
    input: DescribeJobRunRequest,
  ): Effect.Effect<
    DescribeJobRunResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeProject(
    input: DescribeProjectRequest,
  ): Effect.Effect<
    DescribeProjectResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeRecipe(
    input: DescribeRecipeRequest,
  ): Effect.Effect<
    DescribeRecipeResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeRuleset(
    input: DescribeRulesetRequest,
  ): Effect.Effect<
    DescribeRulesetResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeSchedule(
    input: DescribeScheduleRequest,
  ): Effect.Effect<
    DescribeScheduleResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listDatasets(
    input: ListDatasetsRequest,
  ): Effect.Effect<ListDatasetsResponse, ValidationException | CommonAwsError>;
  listJobRuns(
    input: ListJobRunsRequest,
  ): Effect.Effect<
    ListJobRunsResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listJobs(
    input: ListJobsRequest,
  ): Effect.Effect<ListJobsResponse, ValidationException | CommonAwsError>;
  listProjects(
    input: ListProjectsRequest,
  ): Effect.Effect<ListProjectsResponse, ValidationException | CommonAwsError>;
  listRecipes(
    input: ListRecipesRequest,
  ): Effect.Effect<ListRecipesResponse, ValidationException | CommonAwsError>;
  listRecipeVersions(
    input: ListRecipeVersionsRequest,
  ): Effect.Effect<
    ListRecipeVersionsResponse,
    ValidationException | CommonAwsError
  >;
  listRulesets(
    input: ListRulesetsRequest,
  ): Effect.Effect<
    ListRulesetsResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listSchedules(
    input: ListSchedulesRequest,
  ): Effect.Effect<ListSchedulesResponse, ValidationException | CommonAwsError>;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  publishRecipe(
    input: PublishRecipeRequest,
  ): Effect.Effect<
    PublishRecipeResponse,
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  sendProjectSessionAction(
    input: SendProjectSessionActionRequest,
  ): Effect.Effect<
    SendProjectSessionActionResponse,
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  startJobRun(
    input: StartJobRunRequest,
  ): Effect.Effect<
    StartJobRunResponse,
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  startProjectSession(
    input: StartProjectSessionRequest,
  ): Effect.Effect<
    StartProjectSessionResponse,
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  stopJobRun(
    input: StopJobRunRequest,
  ): Effect.Effect<
    StopJobRunResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateDataset(
    input: UpdateDatasetRequest,
  ): Effect.Effect<
    UpdateDatasetResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateProfileJob(
    input: UpdateProfileJobRequest,
  ): Effect.Effect<
    UpdateProfileJobResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateProject(
    input: UpdateProjectRequest,
  ): Effect.Effect<
    UpdateProjectResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateRecipe(
    input: UpdateRecipeRequest,
  ): Effect.Effect<
    UpdateRecipeResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateRecipeJob(
    input: UpdateRecipeJobRequest,
  ): Effect.Effect<
    UpdateRecipeJobResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateRuleset(
    input: UpdateRulesetRequest,
  ): Effect.Effect<
    UpdateRulesetResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateSchedule(
    input: UpdateScheduleRequest,
  ): Effect.Effect<
    UpdateScheduleResponse,
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Databrew extends DataBrew {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AccountId = string;

export type ActionId = number;

export type AllowedStatisticList = Array<AllowedStatistics>;
export interface AllowedStatistics {
  Statistics: Array<string>;
}
export type AnalyticsMode = "ENABLE" | "DISABLE";
export type Arn = string;

export type AssumeControl = boolean;

export type Attempt = number;

export interface BatchDeleteRecipeVersionRequest {
  Name: string;
  RecipeVersions: Array<string>;
}
export interface BatchDeleteRecipeVersionResponse {
  Name: string;
  Errors?: Array<RecipeVersionErrorDetail>;
}
export type Bucket = string;

export type BucketOwner = string;

export type CatalogId = string;

export type ClientSessionId = string;

export type ColumnName = string;

export type ColumnNameList = Array<string>;
export type ColumnRange = number;

export interface ColumnSelector {
  Regex?: string;
  Name?: string;
}
export type ColumnSelectorList = Array<ColumnSelector>;
export interface ColumnStatisticsConfiguration {
  Selectors?: Array<ColumnSelector>;
  Statistics: StatisticsConfiguration;
}
export type ColumnStatisticsConfigurationList =
  Array<ColumnStatisticsConfiguration>;
export type CompressionFormat =
  | "GZIP"
  | "LZ4"
  | "SNAPPY"
  | "BZIP2"
  | "DEFLATE"
  | "LZO"
  | "BROTLI"
  | "ZSTD"
  | "ZLIB";
export type Condition = string;

export interface ConditionExpression {
  Condition: string;
  Value?: string;
  TargetColumn: string;
}
export type ConditionExpressionList = Array<ConditionExpression>;
export type ConditionValue = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export type CreateColumn = boolean;

export interface CreateDatasetRequest {
  Name: string;
  Format?: InputFormat;
  FormatOptions?: FormatOptions;
  Input: Input;
  PathOptions?: PathOptions;
  Tags?: Record<string, string>;
}
export interface CreateDatasetResponse {
  Name: string;
}
export type CreatedBy = string;

export interface CreateProfileJobRequest {
  DatasetName: string;
  EncryptionKeyArn?: string;
  EncryptionMode?: EncryptionMode;
  Name: string;
  LogSubscription?: LogSubscription;
  MaxCapacity?: number;
  MaxRetries?: number;
  OutputLocation: S3Location;
  Configuration?: ProfileConfiguration;
  ValidationConfigurations?: Array<ValidationConfiguration>;
  RoleArn: string;
  Tags?: Record<string, string>;
  Timeout?: number;
  JobSample?: JobSample;
}
export interface CreateProfileJobResponse {
  Name: string;
}
export interface CreateProjectRequest {
  DatasetName: string;
  Name: string;
  RecipeName: string;
  Sample?: Sample;
  RoleArn: string;
  Tags?: Record<string, string>;
}
export interface CreateProjectResponse {
  Name: string;
}
export interface CreateRecipeJobRequest {
  DatasetName?: string;
  EncryptionKeyArn?: string;
  EncryptionMode?: EncryptionMode;
  Name: string;
  LogSubscription?: LogSubscription;
  MaxCapacity?: number;
  MaxRetries?: number;
  Outputs?: Array<Output>;
  DataCatalogOutputs?: Array<DataCatalogOutput>;
  DatabaseOutputs?: Array<DatabaseOutput>;
  ProjectName?: string;
  RecipeReference?: RecipeReference;
  RoleArn: string;
  Tags?: Record<string, string>;
  Timeout?: number;
}
export interface CreateRecipeJobResponse {
  Name: string;
}
export interface CreateRecipeRequest {
  Description?: string;
  Name: string;
  Steps: Array<RecipeStep>;
  Tags?: Record<string, string>;
}
export interface CreateRecipeResponse {
  Name: string;
}
export interface CreateRulesetRequest {
  Name: string;
  Description?: string;
  TargetArn: string;
  Rules: Array<Rule>;
  Tags?: Record<string, string>;
}
export interface CreateRulesetResponse {
  Name: string;
}
export interface CreateScheduleRequest {
  JobNames?: Array<string>;
  CronExpression: string;
  Tags?: Record<string, string>;
  Name: string;
}
export interface CreateScheduleResponse {
  Name: string;
}
export type CronExpression = string;

export interface CsvOptions {
  Delimiter?: string;
  HeaderRow?: boolean;
}
export interface CsvOutputOptions {
  Delimiter?: string;
}
export interface DatabaseInputDefinition {
  GlueConnectionName: string;
  DatabaseTableName?: string;
  TempDirectory?: S3Location;
  QueryString?: string;
}
export type DatabaseName = string;

export interface DatabaseOutput {
  GlueConnectionName: string;
  DatabaseOptions: DatabaseTableOutputOptions;
  DatabaseOutputMode?: DatabaseOutputMode;
}
export type DatabaseOutputList = Array<DatabaseOutput>;
export type DatabaseOutputMode = "NEW_TABLE";
export type DatabaseTableName = string;

export interface DatabaseTableOutputOptions {
  TempDirectory?: S3Location;
  TableName: string;
}
export interface DataCatalogInputDefinition {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  TempDirectory?: S3Location;
}
export interface DataCatalogOutput {
  CatalogId?: string;
  DatabaseName: string;
  TableName: string;
  S3Options?: S3TableOutputOptions;
  DatabaseOptions?: DatabaseTableOutputOptions;
  Overwrite?: boolean;
}
export type DataCatalogOutputList = Array<DataCatalogOutput>;
export interface Dataset {
  AccountId?: string;
  CreatedBy?: string;
  CreateDate?: Date | string;
  Name: string;
  Format?: InputFormat;
  FormatOptions?: FormatOptions;
  Input: Input;
  LastModifiedDate?: Date | string;
  LastModifiedBy?: string;
  Source?: Source;
  PathOptions?: PathOptions;
  Tags?: Record<string, string>;
  ResourceArn?: string;
}
export type DatasetList = Array<Dataset>;
export type DatasetName = string;

export interface DatasetParameter {
  Name: string;
  Type: ParameterType;
  DatetimeOptions?: DatetimeOptions;
  CreateColumn?: boolean;
  Filter?: FilterExpression;
}
export type DatabrewDate = Date | string;

export type DatetimeFormat = string;

export interface DatetimeOptions {
  Format: string;
  TimezoneOffset?: string;
  LocaleCode?: string;
}
export interface DeleteDatasetRequest {
  Name: string;
}
export interface DeleteDatasetResponse {
  Name: string;
}
export interface DeleteJobRequest {
  Name: string;
}
export interface DeleteJobResponse {
  Name: string;
}
export interface DeleteProjectRequest {
  Name: string;
}
export interface DeleteProjectResponse {
  Name: string;
}
export interface DeleteRecipeVersionRequest {
  Name: string;
  RecipeVersion: string;
}
export interface DeleteRecipeVersionResponse {
  Name: string;
  RecipeVersion: string;
}
export interface DeleteRulesetRequest {
  Name: string;
}
export interface DeleteRulesetResponse {
  Name: string;
}
export interface DeleteScheduleRequest {
  Name: string;
}
export interface DeleteScheduleResponse {
  Name: string;
}
export type Delimiter = string;

export interface DescribeDatasetRequest {
  Name: string;
}
export interface DescribeDatasetResponse {
  CreatedBy?: string;
  CreateDate?: Date | string;
  Name: string;
  Format?: InputFormat;
  FormatOptions?: FormatOptions;
  Input: Input;
  LastModifiedDate?: Date | string;
  LastModifiedBy?: string;
  Source?: Source;
  PathOptions?: PathOptions;
  Tags?: Record<string, string>;
  ResourceArn?: string;
}
export interface DescribeJobRequest {
  Name: string;
}
export interface DescribeJobResponse {
  CreateDate?: Date | string;
  CreatedBy?: string;
  DatasetName?: string;
  EncryptionKeyArn?: string;
  EncryptionMode?: EncryptionMode;
  Name: string;
  Type?: JobType;
  LastModifiedBy?: string;
  LastModifiedDate?: Date | string;
  LogSubscription?: LogSubscription;
  MaxCapacity?: number;
  MaxRetries?: number;
  Outputs?: Array<Output>;
  DataCatalogOutputs?: Array<DataCatalogOutput>;
  DatabaseOutputs?: Array<DatabaseOutput>;
  ProjectName?: string;
  ProfileConfiguration?: ProfileConfiguration;
  ValidationConfigurations?: Array<ValidationConfiguration>;
  RecipeReference?: RecipeReference;
  ResourceArn?: string;
  RoleArn?: string;
  Tags?: Record<string, string>;
  Timeout?: number;
  JobSample?: JobSample;
}
export interface DescribeJobRunRequest {
  Name: string;
  RunId: string;
}
export interface DescribeJobRunResponse {
  Attempt?: number;
  CompletedOn?: Date | string;
  DatasetName?: string;
  ErrorMessage?: string;
  ExecutionTime?: number;
  JobName: string;
  ProfileConfiguration?: ProfileConfiguration;
  ValidationConfigurations?: Array<ValidationConfiguration>;
  RunId?: string;
  State?: JobRunState;
  LogSubscription?: LogSubscription;
  LogGroupName?: string;
  Outputs?: Array<Output>;
  DataCatalogOutputs?: Array<DataCatalogOutput>;
  DatabaseOutputs?: Array<DatabaseOutput>;
  RecipeReference?: RecipeReference;
  StartedBy?: string;
  StartedOn?: Date | string;
  JobSample?: JobSample;
}
export interface DescribeProjectRequest {
  Name: string;
}
export interface DescribeProjectResponse {
  CreateDate?: Date | string;
  CreatedBy?: string;
  DatasetName?: string;
  LastModifiedDate?: Date | string;
  LastModifiedBy?: string;
  Name: string;
  RecipeName?: string;
  ResourceArn?: string;
  Sample?: Sample;
  RoleArn?: string;
  Tags?: Record<string, string>;
  SessionStatus?: SessionStatus;
  OpenedBy?: string;
  OpenDate?: Date | string;
}
export interface DescribeRecipeRequest {
  Name: string;
  RecipeVersion?: string;
}
export interface DescribeRecipeResponse {
  CreatedBy?: string;
  CreateDate?: Date | string;
  LastModifiedBy?: string;
  LastModifiedDate?: Date | string;
  ProjectName?: string;
  PublishedBy?: string;
  PublishedDate?: Date | string;
  Description?: string;
  Name: string;
  Steps?: Array<RecipeStep>;
  Tags?: Record<string, string>;
  ResourceArn?: string;
  RecipeVersion?: string;
}
export interface DescribeRulesetRequest {
  Name: string;
}
export interface DescribeRulesetResponse {
  Name: string;
  Description?: string;
  TargetArn?: string;
  Rules?: Array<Rule>;
  CreateDate?: Date | string;
  CreatedBy?: string;
  LastModifiedBy?: string;
  LastModifiedDate?: Date | string;
  ResourceArn?: string;
  Tags?: Record<string, string>;
}
export interface DescribeScheduleRequest {
  Name: string;
}
export interface DescribeScheduleResponse {
  CreateDate?: Date | string;
  CreatedBy?: string;
  JobNames?: Array<string>;
  LastModifiedBy?: string;
  LastModifiedDate?: Date | string;
  ResourceArn?: string;
  CronExpression?: string;
  Tags?: Record<string, string>;
  Name: string;
}
export type Disabled = boolean;

export type EncryptionKeyArn = string;

export type EncryptionMode = "SSEKMS" | "SSES3";
export interface EntityDetectorConfiguration {
  EntityTypes: Array<string>;
  AllowedStatistics?: Array<AllowedStatistics>;
}
export type EntityType = string;

export type EntityTypeList = Array<string>;
export type ErrorCode = string;

export interface ExcelOptions {
  SheetNames?: Array<string>;
  SheetIndexes?: Array<number>;
  HeaderRow?: boolean;
}
export type ExecutionTime = number;

export type Expression = string;

export interface FilesLimit {
  MaxFiles: number;
  OrderedBy?: OrderedBy;
  Order?: Order;
}
export interface FilterExpression {
  Expression: string;
  ValuesMap: Record<string, string>;
}
export interface FormatOptions {
  Json?: JsonOptions;
  Excel?: ExcelOptions;
  Csv?: CsvOptions;
}
export type GlueConnectionName = string;

export type HeaderRow = boolean;

export type HiddenColumnList = Array<string>;
export interface Input {
  S3InputDefinition?: S3Location;
  DataCatalogInputDefinition?: DataCatalogInputDefinition;
  DatabaseInputDefinition?: DatabaseInputDefinition;
  Metadata?: Metadata;
}
export type InputFormat = "CSV" | "JSON" | "PARQUET" | "EXCEL" | "ORC";
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export interface Job {
  AccountId?: string;
  CreatedBy?: string;
  CreateDate?: Date | string;
  DatasetName?: string;
  EncryptionKeyArn?: string;
  EncryptionMode?: EncryptionMode;
  Name: string;
  Type?: JobType;
  LastModifiedBy?: string;
  LastModifiedDate?: Date | string;
  LogSubscription?: LogSubscription;
  MaxCapacity?: number;
  MaxRetries?: number;
  Outputs?: Array<Output>;
  DataCatalogOutputs?: Array<DataCatalogOutput>;
  DatabaseOutputs?: Array<DatabaseOutput>;
  ProjectName?: string;
  RecipeReference?: RecipeReference;
  ResourceArn?: string;
  RoleArn?: string;
  Timeout?: number;
  Tags?: Record<string, string>;
  JobSample?: JobSample;
  ValidationConfigurations?: Array<ValidationConfiguration>;
}
export type JobList = Array<Job>;
export type JobName = string;

export type JobNameList = Array<string>;
export interface JobRun {
  Attempt?: number;
  CompletedOn?: Date | string;
  DatasetName?: string;
  ErrorMessage?: string;
  ExecutionTime?: number;
  JobName?: string;
  RunId?: string;
  State?: JobRunState;
  LogSubscription?: LogSubscription;
  LogGroupName?: string;
  Outputs?: Array<Output>;
  DataCatalogOutputs?: Array<DataCatalogOutput>;
  DatabaseOutputs?: Array<DatabaseOutput>;
  RecipeReference?: RecipeReference;
  StartedBy?: string;
  StartedOn?: Date | string;
  JobSample?: JobSample;
  ValidationConfigurations?: Array<ValidationConfiguration>;
}
export type JobRunErrorMessage = string;

export type JobRunId = string;

export type JobRunList = Array<JobRun>;
export type JobRunState =
  | "STARTING"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED"
  | "SUCCEEDED"
  | "FAILED"
  | "TIMEOUT";
export interface JobSample {
  Mode?: SampleMode;
  Size?: number;
}
export type JobSize = number;

export type JobType = "PROFILE" | "RECIPE";
export interface JsonOptions {
  MultiLine?: boolean;
}
export type Key = string;

export type LastModifiedBy = string;

export interface ListDatasetsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDatasetsResponse {
  Datasets: Array<Dataset>;
  NextToken?: string;
}
export interface ListJobRunsRequest {
  Name: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListJobRunsResponse {
  JobRuns: Array<JobRun>;
  NextToken?: string;
}
export interface ListJobsRequest {
  DatasetName?: string;
  MaxResults?: number;
  NextToken?: string;
  ProjectName?: string;
}
export interface ListJobsResponse {
  Jobs: Array<Job>;
  NextToken?: string;
}
export interface ListProjectsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListProjectsResponse {
  Projects: Array<Project>;
  NextToken?: string;
}
export interface ListRecipesRequest {
  MaxResults?: number;
  NextToken?: string;
  RecipeVersion?: string;
}
export interface ListRecipesResponse {
  Recipes: Array<Recipe>;
  NextToken?: string;
}
export interface ListRecipeVersionsRequest {
  MaxResults?: number;
  NextToken?: string;
  Name: string;
}
export interface ListRecipeVersionsResponse {
  NextToken?: string;
  Recipes: Array<Recipe>;
}
export interface ListRulesetsRequest {
  TargetArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListRulesetsResponse {
  Rulesets: Array<RulesetItem>;
  NextToken?: string;
}
export interface ListSchedulesRequest {
  JobName?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSchedulesResponse {
  Schedules: Array<Schedule>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type LocaleCode = string;

export type LogGroupName = string;

export type LogSubscription = "ENABLE" | "DISABLE";
export type MaxCapacity = number;

export type MaxFiles = number;

export type MaxOutputFiles = number;

export type MaxResults100 = number;

export type MaxRetries = number;

export type Message = string;

export interface Metadata {
  SourceArn?: string;
}
export type MultiLine = boolean;

export type NextToken = string;

export type OpenedBy = string;

export type Operation = string;

export type Order = "DESCENDING" | "ASCENDING";
export type OrderedBy = "LAST_MODIFIED_DATE";
export interface Output {
  CompressionFormat?: CompressionFormat;
  Format?: OutputFormat;
  PartitionColumns?: Array<string>;
  Location: S3Location;
  Overwrite?: boolean;
  FormatOptions?: OutputFormatOptions;
  MaxOutputFiles?: number;
}
export type OutputFormat =
  | "CSV"
  | "JSON"
  | "PARQUET"
  | "GLUEPARQUET"
  | "AVRO"
  | "ORC"
  | "XML"
  | "TABLEAUHYPER";
export interface OutputFormatOptions {
  Csv?: CsvOutputOptions;
}
export type OutputList = Array<Output>;
export type OverwriteOutput = boolean;

export type ParameterMap = Record<string, string>;
export type ParameterName = string;

export type ParameterType = "Datetime" | "Number" | "String";
export type ParameterValue = string;

export interface PathOptions {
  LastModifiedDateCondition?: FilterExpression;
  FilesLimit?: FilesLimit;
  Parameters?: Record<string, DatasetParameter>;
}
export type PathParameterName = string;

export type PathParametersMap = Record<string, DatasetParameter>;
export type Preview = boolean;

export interface ProfileConfiguration {
  DatasetStatisticsConfiguration?: StatisticsConfiguration;
  ProfileColumns?: Array<ColumnSelector>;
  ColumnStatisticsConfigurations?: Array<ColumnStatisticsConfiguration>;
  EntityDetectorConfiguration?: EntityDetectorConfiguration;
}
export interface Project {
  AccountId?: string;
  CreateDate?: Date | string;
  CreatedBy?: string;
  DatasetName?: string;
  LastModifiedDate?: Date | string;
  LastModifiedBy?: string;
  Name: string;
  RecipeName: string;
  ResourceArn?: string;
  Sample?: Sample;
  Tags?: Record<string, string>;
  RoleArn?: string;
  OpenedBy?: string;
  OpenDate?: Date | string;
}
export type ProjectList = Array<Project>;
export type ProjectName = string;

export type PublishedBy = string;

export interface PublishRecipeRequest {
  Description?: string;
  Name: string;
}
export interface PublishRecipeResponse {
  Name: string;
}
export type QueryString = string;

export interface Recipe {
  CreatedBy?: string;
  CreateDate?: Date | string;
  LastModifiedBy?: string;
  LastModifiedDate?: Date | string;
  ProjectName?: string;
  PublishedBy?: string;
  PublishedDate?: Date | string;
  Description?: string;
  Name: string;
  ResourceArn?: string;
  Steps?: Array<RecipeStep>;
  Tags?: Record<string, string>;
  RecipeVersion?: string;
}
export interface RecipeAction {
  Operation: string;
  Parameters?: Record<string, string>;
}
export type RecipeDescription = string;

export type RecipeErrorList = Array<RecipeVersionErrorDetail>;
export type RecipeErrorMessage = string;

export type RecipeList = Array<Recipe>;
export type RecipeName = string;

export interface RecipeReference {
  Name: string;
  RecipeVersion?: string;
}
export interface RecipeStep {
  Action: RecipeAction;
  ConditionExpressions?: Array<ConditionExpression>;
}
export type RecipeStepList = Array<RecipeStep>;
export type RecipeVersion = string;

export interface RecipeVersionErrorDetail {
  ErrorCode?: string;
  ErrorMessage?: string;
  RecipeVersion?: string;
}
export type RecipeVersionList = Array<string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Result = string;

export type RowRange = number;

export interface Rule {
  Name: string;
  Disabled?: boolean;
  CheckExpression: string;
  SubstitutionMap?: Record<string, string>;
  Threshold?: Threshold;
  ColumnSelectors?: Array<ColumnSelector>;
}
export type RuleCount = number;

export type RuleList = Array<Rule>;
export type RuleName = string;

export type RulesetDescription = string;

export interface RulesetItem {
  AccountId?: string;
  CreatedBy?: string;
  CreateDate?: Date | string;
  Description?: string;
  LastModifiedBy?: string;
  LastModifiedDate?: Date | string;
  Name: string;
  ResourceArn?: string;
  RuleCount?: number;
  Tags?: Record<string, string>;
  TargetArn: string;
}
export type RulesetItemList = Array<RulesetItem>;
export type RulesetName = string;

export interface S3Location {
  Bucket: string;
  Key?: string;
  BucketOwner?: string;
}
export interface S3TableOutputOptions {
  Location: S3Location;
}
export interface Sample {
  Size?: number;
  Type: SampleType;
}
export type SampleMode = "FULL_DATASET" | "CUSTOM_ROWS";
export type SampleSize = number;

export type SampleType = "FIRST_N" | "LAST_N" | "RANDOM";
export interface Schedule {
  AccountId?: string;
  CreatedBy?: string;
  CreateDate?: Date | string;
  JobNames?: Array<string>;
  LastModifiedBy?: string;
  LastModifiedDate?: Date | string;
  ResourceArn?: string;
  CronExpression?: string;
  Tags?: Record<string, string>;
  Name: string;
}
export type ScheduleList = Array<Schedule>;
export type ScheduleName = string;

export interface SendProjectSessionActionRequest {
  Preview?: boolean;
  Name: string;
  RecipeStep?: RecipeStep;
  StepIndex?: number;
  ClientSessionId?: string;
  ViewFrame?: ViewFrame;
}
export interface SendProjectSessionActionResponse {
  Result?: string;
  Name: string;
  ActionId?: number;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export type SessionStatus =
  | "ASSIGNED"
  | "FAILED"
  | "INITIALIZING"
  | "PROVISIONING"
  | "READY"
  | "RECYCLING"
  | "ROTATING"
  | "TERMINATED"
  | "TERMINATING"
  | "UPDATING";
export type SheetIndex = number;

export type SheetIndexList = Array<number>;
export type SheetName = string;

export type SheetNameList = Array<string>;
export type Source = "S3" | "DATACATALOG" | "DATABASE";
export type StartColumnIndex = number;

export type StartedBy = string;

export interface StartJobRunRequest {
  Name: string;
}
export interface StartJobRunResponse {
  RunId: string;
}
export interface StartProjectSessionRequest {
  Name: string;
  AssumeControl?: boolean;
}
export interface StartProjectSessionResponse {
  Name: string;
  ClientSessionId?: string;
}
export type StartRowIndex = number;

export type Statistic = string;

export type StatisticList = Array<string>;
export interface StatisticOverride {
  Statistic: string;
  Parameters: Record<string, string>;
}
export type StatisticOverrideList = Array<StatisticOverride>;
export interface StatisticsConfiguration {
  IncludedStatistics?: Array<string>;
  Overrides?: Array<StatisticOverride>;
}
export type StepIndex = number;

export interface StopJobRunRequest {
  Name: string;
  RunId: string;
}
export interface StopJobRunResponse {
  RunId: string;
}
export type TableName = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TargetColumn = string;

export interface Threshold {
  Value: number;
  Type?: ThresholdType;
  Unit?: ThresholdUnit;
}
export type ThresholdType =
  | "GREATER_THAN_OR_EQUAL"
  | "LESS_THAN_OR_EQUAL"
  | "GREATER_THAN"
  | "LESS_THAN";
export type ThresholdUnit = "COUNT" | "PERCENTAGE";
export type ThresholdValue = number;

export type Timeout = number;

export type TimezoneOffset = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateDatasetRequest {
  Name: string;
  Format?: InputFormat;
  FormatOptions?: FormatOptions;
  Input: Input;
  PathOptions?: PathOptions;
}
export interface UpdateDatasetResponse {
  Name: string;
}
export interface UpdateProfileJobRequest {
  Configuration?: ProfileConfiguration;
  EncryptionKeyArn?: string;
  EncryptionMode?: EncryptionMode;
  Name: string;
  LogSubscription?: LogSubscription;
  MaxCapacity?: number;
  MaxRetries?: number;
  OutputLocation: S3Location;
  ValidationConfigurations?: Array<ValidationConfiguration>;
  RoleArn: string;
  Timeout?: number;
  JobSample?: JobSample;
}
export interface UpdateProfileJobResponse {
  Name: string;
}
export interface UpdateProjectRequest {
  Sample?: Sample;
  RoleArn: string;
  Name: string;
}
export interface UpdateProjectResponse {
  LastModifiedDate?: Date | string;
  Name: string;
}
export interface UpdateRecipeJobRequest {
  EncryptionKeyArn?: string;
  EncryptionMode?: EncryptionMode;
  Name: string;
  LogSubscription?: LogSubscription;
  MaxCapacity?: number;
  MaxRetries?: number;
  Outputs?: Array<Output>;
  DataCatalogOutputs?: Array<DataCatalogOutput>;
  DatabaseOutputs?: Array<DatabaseOutput>;
  RoleArn: string;
  Timeout?: number;
}
export interface UpdateRecipeJobResponse {
  Name: string;
}
export interface UpdateRecipeRequest {
  Description?: string;
  Name: string;
  Steps?: Array<RecipeStep>;
}
export interface UpdateRecipeResponse {
  Name: string;
}
export interface UpdateRulesetRequest {
  Name: string;
  Description?: string;
  Rules: Array<Rule>;
}
export interface UpdateRulesetResponse {
  Name: string;
}
export interface UpdateScheduleRequest {
  JobNames?: Array<string>;
  CronExpression: string;
  Name: string;
}
export interface UpdateScheduleResponse {
  Name: string;
}
export interface ValidationConfiguration {
  RulesetArn: string;
  ValidationMode?: ValidationMode;
}
export type ValidationConfigurationList = Array<ValidationConfiguration>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type ValidationMode = "CHECK_ALL";
export type ValueReference = string;

export type ValuesMap = Record<string, string>;
export interface ViewFrame {
  StartColumnIndex: number;
  ColumnRange?: number;
  HiddenColumns?: Array<string>;
  StartRowIndex?: number;
  RowRange?: number;
  Analytics?: AnalyticsMode;
}
export declare namespace BatchDeleteRecipeVersion {
  export type Input = BatchDeleteRecipeVersionRequest;
  export type Output = BatchDeleteRecipeVersionResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDataset {
  export type Input = CreateDatasetRequest;
  export type Output = CreateDatasetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateProfileJob {
  export type Input = CreateProfileJobRequest;
  export type Output = CreateProfileJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateProject {
  export type Input = CreateProjectRequest;
  export type Output = CreateProjectResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRecipe {
  export type Input = CreateRecipeRequest;
  export type Output = CreateRecipeResponse;
  export type Error =
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRecipeJob {
  export type Input = CreateRecipeJobRequest;
  export type Output = CreateRecipeJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRuleset {
  export type Input = CreateRulesetRequest;
  export type Output = CreateRulesetResponse;
  export type Error =
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSchedule {
  export type Input = CreateScheduleRequest;
  export type Output = CreateScheduleResponse;
  export type Error =
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDataset {
  export type Input = DeleteDatasetRequest;
  export type Output = DeleteDatasetResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteJob {
  export type Input = DeleteJobRequest;
  export type Output = DeleteJobResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteProject {
  export type Input = DeleteProjectRequest;
  export type Output = DeleteProjectResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRecipeVersion {
  export type Input = DeleteRecipeVersionRequest;
  export type Output = DeleteRecipeVersionResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRuleset {
  export type Input = DeleteRulesetRequest;
  export type Output = DeleteRulesetResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSchedule {
  export type Input = DeleteScheduleRequest;
  export type Output = DeleteScheduleResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDataset {
  export type Input = DescribeDatasetRequest;
  export type Output = DescribeDatasetResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeJob {
  export type Input = DescribeJobRequest;
  export type Output = DescribeJobResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeJobRun {
  export type Input = DescribeJobRunRequest;
  export type Output = DescribeJobRunResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeProject {
  export type Input = DescribeProjectRequest;
  export type Output = DescribeProjectResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRecipe {
  export type Input = DescribeRecipeRequest;
  export type Output = DescribeRecipeResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRuleset {
  export type Input = DescribeRulesetRequest;
  export type Output = DescribeRulesetResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSchedule {
  export type Input = DescribeScheduleRequest;
  export type Output = DescribeScheduleResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDatasets {
  export type Input = ListDatasetsRequest;
  export type Output = ListDatasetsResponse;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace ListJobRuns {
  export type Input = ListJobRunsRequest;
  export type Output = ListJobRunsResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListJobs {
  export type Input = ListJobsRequest;
  export type Output = ListJobsResponse;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace ListProjects {
  export type Input = ListProjectsRequest;
  export type Output = ListProjectsResponse;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace ListRecipes {
  export type Input = ListRecipesRequest;
  export type Output = ListRecipesResponse;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace ListRecipeVersions {
  export type Input = ListRecipeVersionsRequest;
  export type Output = ListRecipeVersionsResponse;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace ListRulesets {
  export type Input = ListRulesetsRequest;
  export type Output = ListRulesetsResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSchedules {
  export type Input = ListSchedulesRequest;
  export type Output = ListSchedulesResponse;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PublishRecipe {
  export type Input = PublishRecipeRequest;
  export type Output = PublishRecipeResponse;
  export type Error =
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendProjectSessionAction {
  export type Input = SendProjectSessionActionRequest;
  export type Output = SendProjectSessionActionResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartJobRun {
  export type Input = StartJobRunRequest;
  export type Output = StartJobRunResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartProjectSession {
  export type Input = StartProjectSessionRequest;
  export type Output = StartProjectSessionResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopJobRun {
  export type Input = StopJobRunRequest;
  export type Output = StopJobRunResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDataset {
  export type Input = UpdateDatasetRequest;
  export type Output = UpdateDatasetResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateProfileJob {
  export type Input = UpdateProfileJobRequest;
  export type Output = UpdateProfileJobResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateProject {
  export type Input = UpdateProjectRequest;
  export type Output = UpdateProjectResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRecipe {
  export type Input = UpdateRecipeRequest;
  export type Output = UpdateRecipeResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRecipeJob {
  export type Input = UpdateRecipeJobRequest;
  export type Output = UpdateRecipeJobResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRuleset {
  export type Input = UpdateRulesetRequest;
  export type Output = UpdateRulesetResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSchedule {
  export type Input = UpdateScheduleRequest;
  export type Output = UpdateScheduleResponse;
  export type Error =
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}
