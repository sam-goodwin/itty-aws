import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonPersonalize {
  createBatchInferenceJob(
    input: CreateBatchInferenceJobRequest,
  ): Effect.Effect<
    CreateBatchInferenceJobResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  createBatchSegmentJob(
    input: CreateBatchSegmentJobRequest,
  ): Effect.Effect<
    CreateBatchSegmentJobResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  createCampaign(
    input: CreateCampaignRequest,
  ): Effect.Effect<
    CreateCampaignResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  createDataDeletionJob(
    input: CreateDataDeletionJobRequest,
  ): Effect.Effect<
    CreateDataDeletionJobResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  createDataset(
    input: CreateDatasetRequest,
  ): Effect.Effect<
    CreateDatasetResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  createDatasetExportJob(
    input: CreateDatasetExportJobRequest,
  ): Effect.Effect<
    CreateDatasetExportJobResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  createDatasetGroup(
    input: CreateDatasetGroupRequest,
  ): Effect.Effect<
    CreateDatasetGroupResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | TooManyTagsException
    | CommonAwsError
  >;
  createDatasetImportJob(
    input: CreateDatasetImportJobRequest,
  ): Effect.Effect<
    CreateDatasetImportJobResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  createEventTracker(
    input: CreateEventTrackerRequest,
  ): Effect.Effect<
    CreateEventTrackerResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  createFilter(
    input: CreateFilterRequest,
  ): Effect.Effect<
    CreateFilterResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  createMetricAttribution(
    input: CreateMetricAttributionRequest,
  ): Effect.Effect<
    CreateMetricAttributionResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createRecommender(
    input: CreateRecommenderRequest,
  ): Effect.Effect<
    CreateRecommenderResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  createSchema(
    input: CreateSchemaRequest,
  ): Effect.Effect<
    CreateSchemaResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | CommonAwsError
  >;
  createSolution(
    input: CreateSolutionRequest,
  ): Effect.Effect<
    CreateSolutionResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  createSolutionVersion(
    input: CreateSolutionVersionRequest,
  ): Effect.Effect<
    CreateSolutionVersionResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  deleteCampaign(
    input: DeleteCampaignRequest,
  ): Effect.Effect<
    {},
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteDataset(
    input: DeleteDatasetRequest,
  ): Effect.Effect<
    {},
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteDatasetGroup(
    input: DeleteDatasetGroupRequest,
  ): Effect.Effect<
    {},
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteEventTracker(
    input: DeleteEventTrackerRequest,
  ): Effect.Effect<
    {},
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteFilter(
    input: DeleteFilterRequest,
  ): Effect.Effect<
    {},
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteMetricAttribution(
    input: DeleteMetricAttributionRequest,
  ): Effect.Effect<
    {},
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteRecommender(
    input: DeleteRecommenderRequest,
  ): Effect.Effect<
    {},
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteSchema(
    input: DeleteSchemaRequest,
  ): Effect.Effect<
    {},
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteSolution(
    input: DeleteSolutionRequest,
  ): Effect.Effect<
    {},
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeAlgorithm(
    input: DescribeAlgorithmRequest,
  ): Effect.Effect<
    DescribeAlgorithmResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeBatchInferenceJob(
    input: DescribeBatchInferenceJobRequest,
  ): Effect.Effect<
    DescribeBatchInferenceJobResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeBatchSegmentJob(
    input: DescribeBatchSegmentJobRequest,
  ): Effect.Effect<
    DescribeBatchSegmentJobResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeCampaign(
    input: DescribeCampaignRequest,
  ): Effect.Effect<
    DescribeCampaignResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeDataDeletionJob(
    input: DescribeDataDeletionJobRequest,
  ): Effect.Effect<
    DescribeDataDeletionJobResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeDataset(
    input: DescribeDatasetRequest,
  ): Effect.Effect<
    DescribeDatasetResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeDatasetExportJob(
    input: DescribeDatasetExportJobRequest,
  ): Effect.Effect<
    DescribeDatasetExportJobResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeDatasetGroup(
    input: DescribeDatasetGroupRequest,
  ): Effect.Effect<
    DescribeDatasetGroupResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeDatasetImportJob(
    input: DescribeDatasetImportJobRequest,
  ): Effect.Effect<
    DescribeDatasetImportJobResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeEventTracker(
    input: DescribeEventTrackerRequest,
  ): Effect.Effect<
    DescribeEventTrackerResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeFeatureTransformation(
    input: DescribeFeatureTransformationRequest,
  ): Effect.Effect<
    DescribeFeatureTransformationResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeFilter(
    input: DescribeFilterRequest,
  ): Effect.Effect<
    DescribeFilterResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeMetricAttribution(
    input: DescribeMetricAttributionRequest,
  ): Effect.Effect<
    DescribeMetricAttributionResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeRecipe(
    input: DescribeRecipeRequest,
  ): Effect.Effect<
    DescribeRecipeResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeRecommender(
    input: DescribeRecommenderRequest,
  ): Effect.Effect<
    DescribeRecommenderResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeSchema(
    input: DescribeSchemaRequest,
  ): Effect.Effect<
    DescribeSchemaResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeSolution(
    input: DescribeSolutionRequest,
  ): Effect.Effect<
    DescribeSolutionResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeSolutionVersion(
    input: DescribeSolutionVersionRequest,
  ): Effect.Effect<
    DescribeSolutionVersionResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  getSolutionMetrics(
    input: GetSolutionMetricsRequest,
  ): Effect.Effect<
    GetSolutionMetricsResponse,
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listBatchInferenceJobs(
    input: ListBatchInferenceJobsRequest,
  ): Effect.Effect<
    ListBatchInferenceJobsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listBatchSegmentJobs(
    input: ListBatchSegmentJobsRequest,
  ): Effect.Effect<
    ListBatchSegmentJobsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listCampaigns(
    input: ListCampaignsRequest,
  ): Effect.Effect<
    ListCampaignsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listDataDeletionJobs(
    input: ListDataDeletionJobsRequest,
  ): Effect.Effect<
    ListDataDeletionJobsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listDatasetExportJobs(
    input: ListDatasetExportJobsRequest,
  ): Effect.Effect<
    ListDatasetExportJobsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listDatasetGroups(
    input: ListDatasetGroupsRequest,
  ): Effect.Effect<
    ListDatasetGroupsResponse,
    InvalidNextTokenException | CommonAwsError
  >;
  listDatasetImportJobs(
    input: ListDatasetImportJobsRequest,
  ): Effect.Effect<
    ListDatasetImportJobsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listDatasets(
    input: ListDatasetsRequest,
  ): Effect.Effect<
    ListDatasetsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listEventTrackers(
    input: ListEventTrackersRequest,
  ): Effect.Effect<
    ListEventTrackersResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listFilters(
    input: ListFiltersRequest,
  ): Effect.Effect<
    ListFiltersResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listMetricAttributionMetrics(
    input: ListMetricAttributionMetricsRequest,
  ): Effect.Effect<
    ListMetricAttributionMetricsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listMetricAttributions(
    input: ListMetricAttributionsRequest,
  ): Effect.Effect<
    ListMetricAttributionsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listRecipes(
    input: ListRecipesRequest,
  ): Effect.Effect<
    ListRecipesResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listRecommenders(
    input: ListRecommendersRequest,
  ): Effect.Effect<
    ListRecommendersResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listSchemas(
    input: ListSchemasRequest,
  ): Effect.Effect<
    ListSchemasResponse,
    InvalidNextTokenException | CommonAwsError
  >;
  listSolutions(
    input: ListSolutionsRequest,
  ): Effect.Effect<
    ListSolutionsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listSolutionVersions(
    input: ListSolutionVersionsRequest,
  ): Effect.Effect<
    ListSolutionVersionsResponse,
    | InvalidInputException
    | InvalidNextTokenException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startRecommender(
    input: StartRecommenderRequest,
  ): Effect.Effect<
    StartRecommenderResponse,
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopRecommender(
    input: StopRecommenderRequest,
  ): Effect.Effect<
    StopRecommenderResponse,
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopSolutionVersionCreation(
    input: StopSolutionVersionCreationRequest,
  ): Effect.Effect<
    {},
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagKeysException
    | CommonAwsError
  >;
  updateCampaign(
    input: UpdateCampaignRequest,
  ): Effect.Effect<
    UpdateCampaignResponse,
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateDataset(
    input: UpdateDatasetRequest,
  ): Effect.Effect<
    UpdateDatasetResponse,
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateMetricAttribution(
    input: UpdateMetricAttributionRequest,
  ): Effect.Effect<
    UpdateMetricAttributionResponse,
    | InvalidInputException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateRecommender(
    input: UpdateRecommenderRequest,
  ): Effect.Effect<
    UpdateRecommenderResponse,
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateSolution(
    input: UpdateSolutionRequest,
  ): Effect.Effect<
    UpdateSolutionResponse,
    | InvalidInputException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export type Personalize = AmazonPersonalize;

export type AccountId = string;

export interface Algorithm {
  name?: string;
  algorithmArn?: string;
  algorithmImage?: AlgorithmImage;
  defaultHyperParameters?: Record<string, string>;
  defaultHyperParameterRanges?: DefaultHyperParameterRanges;
  defaultResourceConfig?: Record<string, string>;
  trainingInputMode?: string;
  roleArn?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export interface AlgorithmImage {
  name?: string;
  dockerURI: string;
}
export type Arn = string;

export type ArnList = Array<string>;
export interface AutoMLConfig {
  metricName?: string;
  recipeList?: Array<string>;
}
export interface AutoMLResult {
  bestRecipeArn?: string;
}
export interface AutoTrainingConfig {
  schedulingExpression?: string;
}
export type AvroSchema = string;

export interface BatchInferenceJob {
  jobName?: string;
  batchInferenceJobArn?: string;
  filterArn?: string;
  failureReason?: string;
  solutionVersionArn?: string;
  numResults?: number;
  jobInput?: BatchInferenceJobInput;
  jobOutput?: BatchInferenceJobOutput;
  batchInferenceJobConfig?: BatchInferenceJobConfig;
  roleArn?: string;
  batchInferenceJobMode?: BatchInferenceJobMode;
  themeGenerationConfig?: ThemeGenerationConfig;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export interface BatchInferenceJobConfig {
  itemExplorationConfig?: Record<string, string>;
}
export interface BatchInferenceJobInput {
  s3DataSource: S3DataConfig;
}
export type BatchInferenceJobMode = "BATCH_INFERENCE" | "THEME_GENERATION";
export interface BatchInferenceJobOutput {
  s3DataDestination: S3DataConfig;
}
export type BatchInferenceJobs = Array<BatchInferenceJobSummary>;
export interface BatchInferenceJobSummary {
  batchInferenceJobArn?: string;
  jobName?: string;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  failureReason?: string;
  solutionVersionArn?: string;
  batchInferenceJobMode?: BatchInferenceJobMode;
}
export interface BatchSegmentJob {
  jobName?: string;
  batchSegmentJobArn?: string;
  filterArn?: string;
  failureReason?: string;
  solutionVersionArn?: string;
  numResults?: number;
  jobInput?: BatchSegmentJobInput;
  jobOutput?: BatchSegmentJobOutput;
  roleArn?: string;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export interface BatchSegmentJobInput {
  s3DataSource: S3DataConfig;
}
export interface BatchSegmentJobOutput {
  s3DataDestination: S3DataConfig;
}
export type BatchSegmentJobs = Array<BatchSegmentJobSummary>;
export interface BatchSegmentJobSummary {
  batchSegmentJobArn?: string;
  jobName?: string;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  failureReason?: string;
  solutionVersionArn?: string;
}
export interface Campaign {
  name?: string;
  campaignArn?: string;
  solutionVersionArn?: string;
  minProvisionedTPS?: number;
  campaignConfig?: CampaignConfig;
  status?: string;
  failureReason?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  latestCampaignUpdate?: CampaignUpdateSummary;
}
export interface CampaignConfig {
  itemExplorationConfig?: Record<string, string>;
  enableMetadataWithRecommendations?: boolean;
  syncWithLatestSolutionVersion?: boolean;
}
export type Campaigns = Array<CampaignSummary>;
export interface CampaignSummary {
  name?: string;
  campaignArn?: string;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  failureReason?: string;
}
export interface CampaignUpdateSummary {
  solutionVersionArn?: string;
  minProvisionedTPS?: number;
  campaignConfig?: CampaignConfig;
  status?: string;
  failureReason?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export interface CategoricalHyperParameterRange {
  name?: string;
  values?: Array<string>;
}
export type CategoricalHyperParameterRanges =
  Array<CategoricalHyperParameterRange>;
export type CategoricalValue = string;

export type CategoricalValues = Array<string>;
export type ColumnName = string;

export type ColumnNamesList = Array<string>;
export interface ContinuousHyperParameterRange {
  name?: string;
  minValue?: number;
  maxValue?: number;
}
export type ContinuousHyperParameterRanges =
  Array<ContinuousHyperParameterRange>;
export type ContinuousMaxValue = number;

export type ContinuousMinValue = number;

export interface CreateBatchInferenceJobRequest {
  jobName: string;
  solutionVersionArn: string;
  filterArn?: string;
  numResults?: number;
  jobInput: BatchInferenceJobInput;
  jobOutput: BatchInferenceJobOutput;
  roleArn: string;
  batchInferenceJobConfig?: BatchInferenceJobConfig;
  tags?: Array<Tag>;
  batchInferenceJobMode?: BatchInferenceJobMode;
  themeGenerationConfig?: ThemeGenerationConfig;
}
export interface CreateBatchInferenceJobResponse {
  batchInferenceJobArn?: string;
}
export interface CreateBatchSegmentJobRequest {
  jobName: string;
  solutionVersionArn: string;
  filterArn?: string;
  numResults?: number;
  jobInput: BatchSegmentJobInput;
  jobOutput: BatchSegmentJobOutput;
  roleArn: string;
  tags?: Array<Tag>;
}
export interface CreateBatchSegmentJobResponse {
  batchSegmentJobArn?: string;
}
export interface CreateCampaignRequest {
  name: string;
  solutionVersionArn: string;
  minProvisionedTPS?: number;
  campaignConfig?: CampaignConfig;
  tags?: Array<Tag>;
}
export interface CreateCampaignResponse {
  campaignArn?: string;
}
export interface CreateDataDeletionJobRequest {
  jobName: string;
  datasetGroupArn: string;
  dataSource: DataSource;
  roleArn: string;
  tags?: Array<Tag>;
}
export interface CreateDataDeletionJobResponse {
  dataDeletionJobArn?: string;
}
export interface CreateDatasetExportJobRequest {
  jobName: string;
  datasetArn: string;
  ingestionMode?: IngestionMode;
  roleArn: string;
  jobOutput: DatasetExportJobOutput;
  tags?: Array<Tag>;
}
export interface CreateDatasetExportJobResponse {
  datasetExportJobArn?: string;
}
export interface CreateDatasetGroupRequest {
  name: string;
  roleArn?: string;
  kmsKeyArn?: string;
  domain?: Domain;
  tags?: Array<Tag>;
}
export interface CreateDatasetGroupResponse {
  datasetGroupArn?: string;
  domain?: Domain;
}
export interface CreateDatasetImportJobRequest {
  jobName: string;
  datasetArn: string;
  dataSource: DataSource;
  roleArn: string;
  tags?: Array<Tag>;
  importMode?: ImportMode;
  publishAttributionMetricsToS3?: boolean;
}
export interface CreateDatasetImportJobResponse {
  datasetImportJobArn?: string;
}
export interface CreateDatasetRequest {
  name: string;
  schemaArn: string;
  datasetGroupArn: string;
  datasetType: string;
  tags?: Array<Tag>;
}
export interface CreateDatasetResponse {
  datasetArn?: string;
}
export interface CreateEventTrackerRequest {
  name: string;
  datasetGroupArn: string;
  tags?: Array<Tag>;
}
export interface CreateEventTrackerResponse {
  eventTrackerArn?: string;
  trackingId?: string;
}
export interface CreateFilterRequest {
  name: string;
  datasetGroupArn: string;
  filterExpression: string;
  tags?: Array<Tag>;
}
export interface CreateFilterResponse {
  filterArn?: string;
}
export interface CreateMetricAttributionRequest {
  name: string;
  datasetGroupArn: string;
  metrics: Array<MetricAttribute>;
  metricsOutputConfig: MetricAttributionOutput;
}
export interface CreateMetricAttributionResponse {
  metricAttributionArn?: string;
}
export interface CreateRecommenderRequest {
  name: string;
  datasetGroupArn: string;
  recipeArn: string;
  recommenderConfig?: RecommenderConfig;
  tags?: Array<Tag>;
}
export interface CreateRecommenderResponse {
  recommenderArn?: string;
}
export interface CreateSchemaRequest {
  name: string;
  schema: string;
  domain?: Domain;
}
export interface CreateSchemaResponse {
  schemaArn?: string;
}
export interface CreateSolutionRequest {
  name: string;
  performHPO?: boolean;
  performAutoML?: boolean;
  performAutoTraining?: boolean;
  recipeArn?: string;
  datasetGroupArn: string;
  eventType?: string;
  solutionConfig?: SolutionConfig;
  tags?: Array<Tag>;
}
export interface CreateSolutionResponse {
  solutionArn?: string;
}
export interface CreateSolutionVersionRequest {
  name?: string;
  solutionArn: string;
  trainingMode?: TrainingMode;
  tags?: Array<Tag>;
}
export interface CreateSolutionVersionResponse {
  solutionVersionArn?: string;
}
export interface DataDeletionJob {
  jobName?: string;
  dataDeletionJobArn?: string;
  datasetGroupArn?: string;
  dataSource?: DataSource;
  roleArn?: string;
  status?: string;
  numDeleted?: number;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  failureReason?: string;
}
export type DataDeletionJobs = Array<DataDeletionJobSummary>;
export interface DataDeletionJobSummary {
  dataDeletionJobArn?: string;
  datasetGroupArn?: string;
  jobName?: string;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  failureReason?: string;
}
export interface Dataset {
  name?: string;
  datasetArn?: string;
  datasetGroupArn?: string;
  datasetType?: string;
  schemaArn?: string;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  latestDatasetUpdate?: DatasetUpdateSummary;
  trackingId?: string;
}
export interface DatasetExportJob {
  jobName?: string;
  datasetExportJobArn?: string;
  datasetArn?: string;
  ingestionMode?: IngestionMode;
  roleArn?: string;
  status?: string;
  jobOutput?: DatasetExportJobOutput;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  failureReason?: string;
}
export interface DatasetExportJobOutput {
  s3DataDestination: S3DataConfig;
}
export type DatasetExportJobs = Array<DatasetExportJobSummary>;
export interface DatasetExportJobSummary {
  datasetExportJobArn?: string;
  jobName?: string;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  failureReason?: string;
}
export interface DatasetGroup {
  name?: string;
  datasetGroupArn?: string;
  status?: string;
  roleArn?: string;
  kmsKeyArn?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  failureReason?: string;
  domain?: Domain;
}
export type DatasetGroups = Array<DatasetGroupSummary>;
export interface DatasetGroupSummary {
  name?: string;
  datasetGroupArn?: string;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  failureReason?: string;
  domain?: Domain;
}
export interface DatasetImportJob {
  jobName?: string;
  datasetImportJobArn?: string;
  datasetArn?: string;
  dataSource?: DataSource;
  roleArn?: string;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  failureReason?: string;
  importMode?: ImportMode;
  publishAttributionMetricsToS3?: boolean;
}
export type DatasetImportJobs = Array<DatasetImportJobSummary>;
export interface DatasetImportJobSummary {
  datasetImportJobArn?: string;
  jobName?: string;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  failureReason?: string;
  importMode?: ImportMode;
}
export type Datasets = Array<DatasetSummary>;
export interface DatasetSchema {
  name?: string;
  schemaArn?: string;
  schema?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  domain?: Domain;
}
export interface DatasetSchemaSummary {
  name?: string;
  schemaArn?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  domain?: Domain;
}
export interface DatasetSummary {
  name?: string;
  datasetArn?: string;
  datasetType?: string;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export type DatasetType = string;

export interface DatasetUpdateSummary {
  schemaArn?: string;
  status?: string;
  failureReason?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export interface DataSource {
  dataLocation?: string;
}
export interface DefaultCategoricalHyperParameterRange {
  name?: string;
  values?: Array<string>;
  isTunable?: boolean;
}
export type DefaultCategoricalHyperParameterRanges =
  Array<DefaultCategoricalHyperParameterRange>;
export interface DefaultContinuousHyperParameterRange {
  name?: string;
  minValue?: number;
  maxValue?: number;
  isTunable?: boolean;
}
export type DefaultContinuousHyperParameterRanges =
  Array<DefaultContinuousHyperParameterRange>;
export interface DefaultHyperParameterRanges {
  integerHyperParameterRanges?: Array<DefaultIntegerHyperParameterRange>;
  continuousHyperParameterRanges?: Array<DefaultContinuousHyperParameterRange>;
  categoricalHyperParameterRanges?: Array<DefaultCategoricalHyperParameterRange>;
}
export interface DefaultIntegerHyperParameterRange {
  name?: string;
  minValue?: number;
  maxValue?: number;
  isTunable?: boolean;
}
export type DefaultIntegerHyperParameterRanges =
  Array<DefaultIntegerHyperParameterRange>;
export interface DeleteCampaignRequest {
  campaignArn: string;
}
export interface DeleteDatasetGroupRequest {
  datasetGroupArn: string;
}
export interface DeleteDatasetRequest {
  datasetArn: string;
}
export interface DeleteEventTrackerRequest {
  eventTrackerArn: string;
}
export interface DeleteFilterRequest {
  filterArn: string;
}
export interface DeleteMetricAttributionRequest {
  metricAttributionArn: string;
}
export interface DeleteRecommenderRequest {
  recommenderArn: string;
}
export interface DeleteSchemaRequest {
  schemaArn: string;
}
export interface DeleteSolutionRequest {
  solutionArn: string;
}
export interface DescribeAlgorithmRequest {
  algorithmArn: string;
}
export interface DescribeAlgorithmResponse {
  algorithm?: Algorithm;
}
export interface DescribeBatchInferenceJobRequest {
  batchInferenceJobArn: string;
}
export interface DescribeBatchInferenceJobResponse {
  batchInferenceJob?: BatchInferenceJob;
}
export interface DescribeBatchSegmentJobRequest {
  batchSegmentJobArn: string;
}
export interface DescribeBatchSegmentJobResponse {
  batchSegmentJob?: BatchSegmentJob;
}
export interface DescribeCampaignRequest {
  campaignArn: string;
}
export interface DescribeCampaignResponse {
  campaign?: Campaign;
}
export interface DescribeDataDeletionJobRequest {
  dataDeletionJobArn: string;
}
export interface DescribeDataDeletionJobResponse {
  dataDeletionJob?: DataDeletionJob;
}
export interface DescribeDatasetExportJobRequest {
  datasetExportJobArn: string;
}
export interface DescribeDatasetExportJobResponse {
  datasetExportJob?: DatasetExportJob;
}
export interface DescribeDatasetGroupRequest {
  datasetGroupArn: string;
}
export interface DescribeDatasetGroupResponse {
  datasetGroup?: DatasetGroup;
}
export interface DescribeDatasetImportJobRequest {
  datasetImportJobArn: string;
}
export interface DescribeDatasetImportJobResponse {
  datasetImportJob?: DatasetImportJob;
}
export interface DescribeDatasetRequest {
  datasetArn: string;
}
export interface DescribeDatasetResponse {
  dataset?: Dataset;
}
export interface DescribeEventTrackerRequest {
  eventTrackerArn: string;
}
export interface DescribeEventTrackerResponse {
  eventTracker?: EventTracker;
}
export interface DescribeFeatureTransformationRequest {
  featureTransformationArn: string;
}
export interface DescribeFeatureTransformationResponse {
  featureTransformation?: FeatureTransformation;
}
export interface DescribeFilterRequest {
  filterArn: string;
}
export interface DescribeFilterResponse {
  filter?: Filter;
}
export interface DescribeMetricAttributionRequest {
  metricAttributionArn: string;
}
export interface DescribeMetricAttributionResponse {
  metricAttribution?: MetricAttribution;
}
export interface DescribeRecipeRequest {
  recipeArn: string;
}
export interface DescribeRecipeResponse {
  recipe?: Recipe;
}
export interface DescribeRecommenderRequest {
  recommenderArn: string;
}
export interface DescribeRecommenderResponse {
  recommender?: Recommender;
}
export interface DescribeSchemaRequest {
  schemaArn: string;
}
export interface DescribeSchemaResponse {
  schema?: DatasetSchema;
}
export interface DescribeSolutionRequest {
  solutionArn: string;
}
export interface DescribeSolutionResponse {
  solution?: Solution;
}
export interface DescribeSolutionVersionRequest {
  solutionVersionArn: string;
}
export interface DescribeSolutionVersionResponse {
  solutionVersion?: SolutionVersion;
}
export type Description = string;

export type DockerURI = string;

export type Domain = "ECOMMERCE" | "VIDEO_ON_DEMAND";
export type ErrorMessage = string;

export interface EventParameters {
  eventType?: string;
  eventValueThreshold?: number;
  weight?: number;
}
export type EventParametersList = Array<EventParameters>;
export interface EventsConfig {
  eventParametersList?: Array<EventParameters>;
}
export interface EventTracker {
  name?: string;
  eventTrackerArn?: string;
  accountId?: string;
  trackingId?: string;
  datasetGroupArn?: string;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export type EventTrackers = Array<EventTrackerSummary>;
export interface EventTrackerSummary {
  name?: string;
  eventTrackerArn?: string;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export type EventType = string;

export type EventTypeThresholdValue = number;

export type EventTypeWeight = number;

export type EventValueThreshold = string;

export type ExcludedDatasetColumns = Record<string, Array<string>>;
export type FailureReason = string;

export interface FeatureTransformation {
  name?: string;
  featureTransformationArn?: string;
  defaultParameters?: Record<string, string>;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  status?: string;
}
export type FeatureTransformationParameters = Record<string, string>;
export type FeaturizationParameters = Record<string, string>;
export interface FieldsForThemeGeneration {
  itemName: string;
}
export interface Filter {
  name?: string;
  filterArn?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  datasetGroupArn?: string;
  failureReason?: string;
  filterExpression?: string;
  status?: string;
}
export type FilterExpression = string;

export type Filters = Array<FilterSummary>;
export interface FilterSummary {
  name?: string;
  filterArn?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  datasetGroupArn?: string;
  failureReason?: string;
  status?: string;
}
export interface GetSolutionMetricsRequest {
  solutionVersionArn: string;
}
export interface GetSolutionMetricsResponse {
  solutionVersionArn?: string;
  metrics?: Record<string, number>;
}
export interface HPOConfig {
  hpoObjective?: HPOObjective;
  hpoResourceConfig?: HPOResourceConfig;
  algorithmHyperParameterRanges?: HyperParameterRanges;
}
export interface HPOObjective {
  type?: string;
  metricName?: string;
  metricRegex?: string;
}
export type HPOObjectiveType = string;

export type HPOResource = string;

export interface HPOResourceConfig {
  maxNumberOfTrainingJobs?: string;
  maxParallelTrainingJobs?: string;
}
export interface HyperParameterRanges {
  integerHyperParameterRanges?: Array<IntegerHyperParameterRange>;
  continuousHyperParameterRanges?: Array<ContinuousHyperParameterRange>;
  categoricalHyperParameterRanges?: Array<CategoricalHyperParameterRange>;
}
export type HyperParameters = Record<string, string>;
export type ImportMode = "FULL" | "INCREMENTAL";
export type IngestionMode = "BULK" | "PUT" | "ALL";
export type Integer = number;

export interface IntegerHyperParameterRange {
  name?: string;
  minValue?: number;
  maxValue?: number;
}
export type IntegerHyperParameterRanges = Array<IntegerHyperParameterRange>;
export type IntegerMaxValue = number;

export type IntegerMinValue = number;

export declare class InvalidInputException extends EffectData.TaggedError(
  "InvalidInputException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly message?: string;
}> {}
export type ItemAttribute = string;

export type KmsKeyArn = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListBatchInferenceJobsRequest {
  solutionVersionArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListBatchInferenceJobsResponse {
  batchInferenceJobs?: Array<BatchInferenceJobSummary>;
  nextToken?: string;
}
export interface ListBatchSegmentJobsRequest {
  solutionVersionArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListBatchSegmentJobsResponse {
  batchSegmentJobs?: Array<BatchSegmentJobSummary>;
  nextToken?: string;
}
export interface ListCampaignsRequest {
  solutionArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListCampaignsResponse {
  campaigns?: Array<CampaignSummary>;
  nextToken?: string;
}
export interface ListDataDeletionJobsRequest {
  datasetGroupArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDataDeletionJobsResponse {
  dataDeletionJobs?: Array<DataDeletionJobSummary>;
  nextToken?: string;
}
export interface ListDatasetExportJobsRequest {
  datasetArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDatasetExportJobsResponse {
  datasetExportJobs?: Array<DatasetExportJobSummary>;
  nextToken?: string;
}
export interface ListDatasetGroupsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListDatasetGroupsResponse {
  datasetGroups?: Array<DatasetGroupSummary>;
  nextToken?: string;
}
export interface ListDatasetImportJobsRequest {
  datasetArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDatasetImportJobsResponse {
  datasetImportJobs?: Array<DatasetImportJobSummary>;
  nextToken?: string;
}
export interface ListDatasetsRequest {
  datasetGroupArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDatasetsResponse {
  datasets?: Array<DatasetSummary>;
  nextToken?: string;
}
export interface ListEventTrackersRequest {
  datasetGroupArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListEventTrackersResponse {
  eventTrackers?: Array<EventTrackerSummary>;
  nextToken?: string;
}
export interface ListFiltersRequest {
  datasetGroupArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListFiltersResponse {
  Filters?: Array<FilterSummary>;
  nextToken?: string;
}
export interface ListMetricAttributionMetricsRequest {
  metricAttributionArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListMetricAttributionMetricsResponse {
  metrics?: Array<MetricAttribute>;
  nextToken?: string;
}
export interface ListMetricAttributionsRequest {
  datasetGroupArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListMetricAttributionsResponse {
  metricAttributions?: Array<MetricAttributionSummary>;
  nextToken?: string;
}
export interface ListRecipesRequest {
  recipeProvider?: RecipeProvider;
  nextToken?: string;
  maxResults?: number;
  domain?: Domain;
}
export interface ListRecipesResponse {
  recipes?: Array<RecipeSummary>;
  nextToken?: string;
}
export interface ListRecommendersRequest {
  datasetGroupArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListRecommendersResponse {
  recommenders?: Array<RecommenderSummary>;
  nextToken?: string;
}
export interface ListSchemasRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListSchemasResponse {
  schemas?: Array<DatasetSchemaSummary>;
  nextToken?: string;
}
export interface ListSolutionsRequest {
  datasetGroupArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListSolutionsResponse {
  solutions?: Array<SolutionSummary>;
  nextToken?: string;
}
export interface ListSolutionVersionsRequest {
  solutionArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListSolutionVersionsResponse {
  solutionVersions?: Array<SolutionVersionSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export type MaxResults = number;

export interface MetricAttribute {
  eventType: string;
  metricName: string;
  expression: string;
}
export type MetricAttributes = Array<MetricAttribute>;
export type MetricAttributesNamesList = Array<string>;
export interface MetricAttribution {
  name?: string;
  metricAttributionArn?: string;
  datasetGroupArn?: string;
  metricsOutputConfig?: MetricAttributionOutput;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  failureReason?: string;
}
export interface MetricAttributionOutput {
  s3DataDestination?: S3DataConfig;
  roleArn: string;
}
export type MetricAttributions = Array<MetricAttributionSummary>;
export interface MetricAttributionSummary {
  name?: string;
  metricAttributionArn?: string;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  failureReason?: string;
}
export type MetricExpression = string;

export type MetricName = string;

export type MetricRegex = string;

export type Metrics = Record<string, number>;
export type MetricValue = number;

export type Name = string;

export type NextToken = string;

export type NumBatchResults = number;

export type ObjectiveSensitivity = "LOW" | "MEDIUM" | "HIGH" | "OFF";
export interface OptimizationObjective {
  itemAttribute?: string;
  objectiveSensitivity?: ObjectiveSensitivity;
}
export type ParameterName = string;

export type ParameterValue = string;

export type PerformAutoML = boolean;

export type PerformAutoTraining = boolean;

export type PerformHPO = boolean;

export interface Recipe {
  name?: string;
  recipeArn?: string;
  algorithmArn?: string;
  featureTransformationArn?: string;
  status?: string;
  description?: string;
  creationDateTime?: Date | string;
  recipeType?: string;
  lastUpdatedDateTime?: Date | string;
}
export type RecipeProvider = "SERVICE";
export type Recipes = Array<RecipeSummary>;
export interface RecipeSummary {
  name?: string;
  recipeArn?: string;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  domain?: Domain;
}
export type RecipeType = string;

export interface Recommender {
  recommenderArn?: string;
  datasetGroupArn?: string;
  name?: string;
  recipeArn?: string;
  recommenderConfig?: RecommenderConfig;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  status?: string;
  failureReason?: string;
  latestRecommenderUpdate?: RecommenderUpdateSummary;
  modelMetrics?: Record<string, number>;
}
export interface RecommenderConfig {
  itemExplorationConfig?: Record<string, string>;
  minRecommendationRequestsPerSecond?: number;
  trainingDataConfig?: TrainingDataConfig;
  enableMetadataWithRecommendations?: boolean;
}
export type Recommenders = Array<RecommenderSummary>;
export interface RecommenderSummary {
  name?: string;
  recommenderArn?: string;
  datasetGroupArn?: string;
  recipeArn?: string;
  recommenderConfig?: RecommenderConfig;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export interface RecommenderUpdateSummary {
  recommenderConfig?: RecommenderConfig;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  status?: string;
  failureReason?: string;
}
export declare class ResourceAlreadyExistsException extends EffectData.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type ResourceConfig = Record<string, string>;
export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RoleArn = string;

export interface S3DataConfig {
  path: string;
  kmsKeyArn?: string;
}
export type S3Location = string;

export type SchedulingExpression = string;

export type Schemas = Array<DatasetSchemaSummary>;
export interface Solution {
  name?: string;
  solutionArn?: string;
  performHPO?: boolean;
  performAutoML?: boolean;
  performAutoTraining?: boolean;
  recipeArn?: string;
  datasetGroupArn?: string;
  eventType?: string;
  solutionConfig?: SolutionConfig;
  autoMLResult?: AutoMLResult;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  latestSolutionVersion?: SolutionVersionSummary;
  latestSolutionUpdate?: SolutionUpdateSummary;
}
export interface SolutionConfig {
  eventValueThreshold?: string;
  hpoConfig?: HPOConfig;
  algorithmHyperParameters?: Record<string, string>;
  featureTransformationParameters?: Record<string, string>;
  autoMLConfig?: AutoMLConfig;
  eventsConfig?: EventsConfig;
  optimizationObjective?: OptimizationObjective;
  trainingDataConfig?: TrainingDataConfig;
  autoTrainingConfig?: AutoTrainingConfig;
}
export type Solutions = Array<SolutionSummary>;
export interface SolutionSummary {
  name?: string;
  solutionArn?: string;
  status?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  recipeArn?: string;
}
export interface SolutionUpdateConfig {
  autoTrainingConfig?: AutoTrainingConfig;
  eventsConfig?: EventsConfig;
}
export interface SolutionUpdateSummary {
  solutionUpdateConfig?: SolutionUpdateConfig;
  status?: string;
  performAutoTraining?: boolean;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  failureReason?: string;
}
export interface SolutionVersion {
  name?: string;
  solutionVersionArn?: string;
  solutionArn?: string;
  performHPO?: boolean;
  performAutoML?: boolean;
  recipeArn?: string;
  eventType?: string;
  datasetGroupArn?: string;
  solutionConfig?: SolutionConfig;
  trainingHours?: number;
  trainingMode?: TrainingMode;
  tunedHPOParams?: TunedHPOParams;
  status?: string;
  failureReason?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  trainingType?: TrainingType;
}
export type SolutionVersions = Array<SolutionVersionSummary>;
export interface SolutionVersionSummary {
  solutionVersionArn?: string;
  status?: string;
  trainingMode?: TrainingMode;
  trainingType?: TrainingType;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  failureReason?: string;
}
export interface StartRecommenderRequest {
  recommenderArn: string;
}
export interface StartRecommenderResponse {
  recommenderArn?: string;
}
export type Status = string;

export interface StopRecommenderRequest {
  recommenderArn: string;
}
export interface StopRecommenderResponse {
  recommenderArn?: string;
}
export interface StopSolutionVersionCreationRequest {
  solutionVersionArn: string;
}
export interface Tag {
  tagKey: string;
  tagValue: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type Tags = Array<Tag>;
export type TagValue = string;

export interface ThemeGenerationConfig {
  fieldsForThemeGeneration: FieldsForThemeGeneration;
}
export declare class TooManyTagKeysException extends EffectData.TaggedError(
  "TooManyTagKeysException",
)<{
  readonly message?: string;
}> {}
export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export type TrackingId = string;

export interface TrainingDataConfig {
  excludedDatasetColumns?: Record<string, Array<string>>;
}
export type TrainingHours = number;

export type TrainingInputMode = string;

export type TrainingMode = "FULL" | "UPDATE" | "AUTOTRAIN";
export type TrainingType = "AUTOMATIC" | "MANUAL";
export type TransactionsPerSecond = number;

export type Tunable = boolean;

export interface TunedHPOParams {
  algorithmHyperParameters?: Record<string, string>;
}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateCampaignRequest {
  campaignArn: string;
  solutionVersionArn?: string;
  minProvisionedTPS?: number;
  campaignConfig?: CampaignConfig;
}
export interface UpdateCampaignResponse {
  campaignArn?: string;
}
export interface UpdateDatasetRequest {
  datasetArn: string;
  schemaArn: string;
}
export interface UpdateDatasetResponse {
  datasetArn?: string;
}
export interface UpdateMetricAttributionRequest {
  addMetrics?: Array<MetricAttribute>;
  removeMetrics?: Array<string>;
  metricsOutputConfig?: MetricAttributionOutput;
  metricAttributionArn?: string;
}
export interface UpdateMetricAttributionResponse {
  metricAttributionArn?: string;
}
export interface UpdateRecommenderRequest {
  recommenderArn: string;
  recommenderConfig: RecommenderConfig;
}
export interface UpdateRecommenderResponse {
  recommenderArn?: string;
}
export interface UpdateSolutionRequest {
  solutionArn: string;
  performAutoTraining?: boolean;
  solutionUpdateConfig?: SolutionUpdateConfig;
}
export interface UpdateSolutionResponse {
  solutionArn?: string;
}
export declare namespace CreateBatchInferenceJob {
  export type Input = CreateBatchInferenceJobRequest;
  export type Output = CreateBatchInferenceJobResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateBatchSegmentJob {
  export type Input = CreateBatchSegmentJobRequest;
  export type Output = CreateBatchSegmentJobResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateCampaign {
  export type Input = CreateCampaignRequest;
  export type Output = CreateCampaignResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateDataDeletionJob {
  export type Input = CreateDataDeletionJobRequest;
  export type Output = CreateDataDeletionJobResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateDataset {
  export type Input = CreateDatasetRequest;
  export type Output = CreateDatasetResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateDatasetExportJob {
  export type Input = CreateDatasetExportJobRequest;
  export type Output = CreateDatasetExportJobResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateDatasetGroup {
  export type Input = CreateDatasetGroupRequest;
  export type Output = CreateDatasetGroupResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateDatasetImportJob {
  export type Input = CreateDatasetImportJobRequest;
  export type Output = CreateDatasetImportJobResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateEventTracker {
  export type Input = CreateEventTrackerRequest;
  export type Output = CreateEventTrackerResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateFilter {
  export type Input = CreateFilterRequest;
  export type Output = CreateFilterResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateMetricAttribution {
  export type Input = CreateMetricAttributionRequest;
  export type Output = CreateMetricAttributionResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateRecommender {
  export type Input = CreateRecommenderRequest;
  export type Output = CreateRecommenderResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateSchema {
  export type Input = CreateSchemaRequest;
  export type Output = CreateSchemaResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | CommonAwsError;
}

export declare namespace CreateSolution {
  export type Input = CreateSolutionRequest;
  export type Output = CreateSolutionResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateSolutionVersion {
  export type Input = CreateSolutionVersionRequest;
  export type Output = CreateSolutionVersionResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace DeleteCampaign {
  export type Input = DeleteCampaignRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteDataset {
  export type Input = DeleteDatasetRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteDatasetGroup {
  export type Input = DeleteDatasetGroupRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteEventTracker {
  export type Input = DeleteEventTrackerRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteFilter {
  export type Input = DeleteFilterRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteMetricAttribution {
  export type Input = DeleteMetricAttributionRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteRecommender {
  export type Input = DeleteRecommenderRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteSchema {
  export type Input = DeleteSchemaRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteSolution {
  export type Input = DeleteSolutionRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeAlgorithm {
  export type Input = DescribeAlgorithmRequest;
  export type Output = DescribeAlgorithmResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeBatchInferenceJob {
  export type Input = DescribeBatchInferenceJobRequest;
  export type Output = DescribeBatchInferenceJobResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeBatchSegmentJob {
  export type Input = DescribeBatchSegmentJobRequest;
  export type Output = DescribeBatchSegmentJobResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeCampaign {
  export type Input = DescribeCampaignRequest;
  export type Output = DescribeCampaignResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeDataDeletionJob {
  export type Input = DescribeDataDeletionJobRequest;
  export type Output = DescribeDataDeletionJobResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeDataset {
  export type Input = DescribeDatasetRequest;
  export type Output = DescribeDatasetResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeDatasetExportJob {
  export type Input = DescribeDatasetExportJobRequest;
  export type Output = DescribeDatasetExportJobResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeDatasetGroup {
  export type Input = DescribeDatasetGroupRequest;
  export type Output = DescribeDatasetGroupResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeDatasetImportJob {
  export type Input = DescribeDatasetImportJobRequest;
  export type Output = DescribeDatasetImportJobResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeEventTracker {
  export type Input = DescribeEventTrackerRequest;
  export type Output = DescribeEventTrackerResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeFeatureTransformation {
  export type Input = DescribeFeatureTransformationRequest;
  export type Output = DescribeFeatureTransformationResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeFilter {
  export type Input = DescribeFilterRequest;
  export type Output = DescribeFilterResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeMetricAttribution {
  export type Input = DescribeMetricAttributionRequest;
  export type Output = DescribeMetricAttributionResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeRecipe {
  export type Input = DescribeRecipeRequest;
  export type Output = DescribeRecipeResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeRecommender {
  export type Input = DescribeRecommenderRequest;
  export type Output = DescribeRecommenderResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeSchema {
  export type Input = DescribeSchemaRequest;
  export type Output = DescribeSchemaResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeSolution {
  export type Input = DescribeSolutionRequest;
  export type Output = DescribeSolutionResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeSolutionVersion {
  export type Input = DescribeSolutionVersionRequest;
  export type Output = DescribeSolutionVersionResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetSolutionMetrics {
  export type Input = GetSolutionMetricsRequest;
  export type Output = GetSolutionMetricsResponse;
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListBatchInferenceJobs {
  export type Input = ListBatchInferenceJobsRequest;
  export type Output = ListBatchInferenceJobsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListBatchSegmentJobs {
  export type Input = ListBatchSegmentJobsRequest;
  export type Output = ListBatchSegmentJobsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListCampaigns {
  export type Input = ListCampaignsRequest;
  export type Output = ListCampaignsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListDataDeletionJobs {
  export type Input = ListDataDeletionJobsRequest;
  export type Output = ListDataDeletionJobsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListDatasetExportJobs {
  export type Input = ListDatasetExportJobsRequest;
  export type Output = ListDatasetExportJobsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListDatasetGroups {
  export type Input = ListDatasetGroupsRequest;
  export type Output = ListDatasetGroupsResponse;
  export type Error = InvalidNextTokenException | CommonAwsError;
}

export declare namespace ListDatasetImportJobs {
  export type Input = ListDatasetImportJobsRequest;
  export type Output = ListDatasetImportJobsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListDatasets {
  export type Input = ListDatasetsRequest;
  export type Output = ListDatasetsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListEventTrackers {
  export type Input = ListEventTrackersRequest;
  export type Output = ListEventTrackersResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListFilters {
  export type Input = ListFiltersRequest;
  export type Output = ListFiltersResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListMetricAttributionMetrics {
  export type Input = ListMetricAttributionMetricsRequest;
  export type Output = ListMetricAttributionMetricsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListMetricAttributions {
  export type Input = ListMetricAttributionsRequest;
  export type Output = ListMetricAttributionsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListRecipes {
  export type Input = ListRecipesRequest;
  export type Output = ListRecipesResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListRecommenders {
  export type Input = ListRecommendersRequest;
  export type Output = ListRecommendersResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListSchemas {
  export type Input = ListSchemasRequest;
  export type Output = ListSchemasResponse;
  export type Error = InvalidNextTokenException | CommonAwsError;
}

export declare namespace ListSolutions {
  export type Input = ListSolutionsRequest;
  export type Output = ListSolutionsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListSolutionVersions {
  export type Input = ListSolutionVersionsRequest;
  export type Output = ListSolutionVersionsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartRecommender {
  export type Input = StartRecommenderRequest;
  export type Output = StartRecommenderResponse;
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopRecommender {
  export type Input = StopRecommenderRequest;
  export type Output = StopRecommenderResponse;
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopSolutionVersionCreation {
  export type Input = StopSolutionVersionCreationRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagKeysException
    | CommonAwsError;
}

export declare namespace UpdateCampaign {
  export type Input = UpdateCampaignRequest;
  export type Output = UpdateCampaignResponse;
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateDataset {
  export type Input = UpdateDatasetRequest;
  export type Output = UpdateDatasetResponse;
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateMetricAttribution {
  export type Input = UpdateMetricAttributionRequest;
  export type Output = UpdateMetricAttributionResponse;
  export type Error =
    | InvalidInputException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateRecommender {
  export type Input = UpdateRecommenderRequest;
  export type Output = UpdateRecommenderResponse;
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateSolution {
  export type Input = UpdateSolutionRequest;
  export type Output = UpdateSolutionResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}
