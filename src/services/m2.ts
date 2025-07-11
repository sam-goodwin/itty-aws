import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AwsSupernovaControlPlaneService {
  cancelBatchJobExecution(
    input: CancelBatchJobExecutionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createDataSetExportTask(
    input: CreateDataSetExportTaskRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createDataSetImportTask(
    input: CreateDataSetImportTaskRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createDeployment(
    input: CreateDeploymentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createEnvironment(
    input: CreateEnvironmentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteApplicationFromEnvironment(
    input: DeleteApplicationFromEnvironmentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteEnvironment(
    input: DeleteEnvironmentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getApplication(
    input: GetApplicationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getApplicationVersion(
    input: GetApplicationVersionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getBatchJobExecution(
    input: GetBatchJobExecutionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDataSetDetails(
    input: GetDataSetDetailsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ExecutionTimeoutException | InternalServerException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDataSetExportTask(
    input: GetDataSetExportTaskRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDataSetImportTask(
    input: GetDataSetImportTaskRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDeployment(
    input: GetDeploymentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getEnvironment(
    input: GetEnvironmentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getSignedBluinsightsUrl(
    input: {},
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | CommonAwsError
  >;
  listApplicationVersions(
    input: ListApplicationVersionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listBatchJobDefinitions(
    input: ListBatchJobDefinitionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listBatchJobExecutions(
    input: ListBatchJobExecutionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listBatchJobRestartPoints(
    input: ListBatchJobRestartPointsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDataSetExportHistory(
    input: ListDataSetExportHistoryRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDataSetImportHistory(
    input: ListDataSetImportHistoryRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDataSets(
    input: ListDataSetsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ExecutionTimeoutException | InternalServerException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDeployments(
    input: ListDeploymentsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listEngineVersions(
    input: ListEngineVersionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listEnvironments(
    input: ListEnvironmentsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startApplication(
    input: StartApplicationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startBatchJob(
    input: StartBatchJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  stopApplication(
    input: StopApplicationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateEnvironment(
    input: UpdateEnvironmentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type M2 = AwsSupernovaControlPlaneService;

export interface AccessDeniedException {
}
export interface AlternateKey {
}
export type AlternateKeyList = Array<unknown>;
export type ApplicationDeploymentLifecycle = string;

export type ApplicationLifecycle = string;

export interface ApplicationSummary {
}
export type ApplicationSummaryList = Array<unknown>;
export type ApplicationVersionLifecycle = string;

export interface ApplicationVersionSummary {
}
export type ApplicationVersionSummaryList = Array<unknown>;
export type Arn = string;

export type ArnList = Array<unknown>;
export type AuthSecretsManagerArn = string;

export type BatchJobDefinition = never;
export type BatchJobDefinitions = Array<unknown>;
export type BatchJobExecutionStatus = string;

export interface BatchJobExecutionSummary {
}
export type BatchJobExecutionSummaryList = Array<unknown>;
export type BatchJobIdentifier = never;
export type BatchJobParametersMap = Record<string, unknown>;
export type BatchJobStepList = Array<unknown>;
export type BatchJobType = string;

export type BatchParamKey = string;

export type BatchParamValue = string;

export interface CancelBatchJobExecutionRequest {
}
export interface CancelBatchJobExecutionResponse {
}
export type CapacityValue = number;

export type ClientToken = string;

export interface ConflictException {
}
export interface CreateApplicationRequest {
}
export interface CreateApplicationResponse {
}
export interface CreateDataSetExportTaskRequest {
}
export interface CreateDataSetExportTaskResponse {
}
export interface CreateDataSetImportTaskRequest {
}
export interface CreateDataSetImportTaskResponse {
}
export interface CreateDeploymentRequest {
}
export interface CreateDeploymentResponse {
}
export interface CreateEnvironmentRequest {
}
export interface CreateEnvironmentResponse {
}
export interface DataSet {
}
export type DatasetDetailOrgAttributes = never;
export type DataSetExportConfig = never;
export interface DataSetExportItem {
}
export type DataSetExportList = Array<unknown>;
export interface DataSetExportSummary {
}
export interface DataSetExportTask {
}
export type DataSetExportTaskList = Array<unknown>;
export type DataSetImportConfig = never;
export interface DataSetImportItem {
}
export type DataSetImportList = Array<unknown>;
export interface DataSetImportSummary {
}
export interface DataSetImportTask {
}
export type DataSetImportTaskList = Array<unknown>;
export type DatasetOrgAttributes = never;
export type DataSetsSummaryList = Array<unknown>;
export interface DataSetSummary {
}
export type DataSetTaskLifecycle = string;

export type Definition = never;
export interface DeleteApplicationFromEnvironmentRequest {
}
export interface DeleteApplicationFromEnvironmentResponse {
}
export interface DeleteApplicationRequest {
}
export interface DeleteApplicationResponse {
}
export interface DeleteEnvironmentRequest {
}
export interface DeleteEnvironmentResponse {
}
export interface DeployedVersionSummary {
}
export type DeploymentLifecycle = string;

export type DeploymentList = Array<unknown>;
export interface DeploymentSummary {
}
export interface EfsStorageConfiguration {
}
export type EngineType = string;

export type EngineVersion = string;

export interface EngineVersionsSummary {
}
export type EngineVersionsSummaryList = Array<unknown>;
export type EntityDescription = string;

export type EntityName = string;

export type EntityNameList = Array<unknown>;
export type EnvironmentLifecycle = string;

export interface EnvironmentSummary {
}
export type EnvironmentSummaryList = Array<unknown>;
export interface ExecutionTimeoutException {
}
export type ExternalLocation = never;
export interface FileBatchJobDefinition {
}
export interface FileBatchJobIdentifier {
}
export interface FsxStorageConfiguration {
}
export interface GdgAttributes {
}
export interface GdgDetailAttributes {
}
export interface GetApplicationRequest {
}
export interface GetApplicationResponse {
}
export interface GetApplicationVersionRequest {
}
export interface GetApplicationVersionResponse {
}
export interface GetBatchJobExecutionRequest {
}
export interface GetBatchJobExecutionResponse {
}
export interface GetDataSetDetailsRequest {
}
export interface GetDataSetDetailsResponse {
}
export interface GetDataSetExportTaskRequest {
}
export interface GetDataSetExportTaskResponse {
}
export interface GetDataSetImportTaskRequest {
}
export interface GetDataSetImportTaskResponse {
}
export interface GetDeploymentRequest {
}
export interface GetDeploymentResponse {
}
export interface GetEnvironmentRequest {
}
export interface GetEnvironmentResponse {
}
export interface GetSignedBluinsightsUrlResponse {
}
export interface HighAvailabilityConfig {
}
export type Identifier = string;

export type IdentifierList = Array<unknown>;
export type Integer = number;

export interface InternalServerException {
}
export type JobIdentifier = never;
export interface JobStep {
}
export interface JobStepRestartMarker {
}
export type KMSKeyId = string;

export interface ListApplicationsRequest {
}
export interface ListApplicationsResponse {
}
export interface ListApplicationVersionsRequest {
}
export interface ListApplicationVersionsResponse {
}
export interface ListBatchJobDefinitionsRequest {
}
export interface ListBatchJobDefinitionsResponse {
}
export interface ListBatchJobExecutionsRequest {
}
export interface ListBatchJobExecutionsResponse {
}
export interface ListBatchJobRestartPointsRequest {
}
export interface ListBatchJobRestartPointsResponse {
}
export interface ListDataSetExportHistoryRequest {
}
export interface ListDataSetExportHistoryResponse {
}
export interface ListDataSetImportHistoryRequest {
}
export interface ListDataSetImportHistoryResponse {
}
export interface ListDataSetsRequest {
}
export interface ListDataSetsResponse {
}
export interface ListDeploymentsRequest {
}
export interface ListDeploymentsResponse {
}
export interface ListEngineVersionsRequest {
}
export interface ListEngineVersionsResponse {
}
export interface ListEnvironmentsRequest {
}
export interface ListEnvironmentsResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export type LogGroupIdentifier = string;

export type LogGroupSummaries = Array<unknown>;
export interface LogGroupSummary {
}
export interface MaintenanceSchedule {
}
export type MaxResults = number;

export type NetworkType = string;

export type NextToken = string;

export interface PendingMaintenance {
}
export interface PoAttributes {
}
export interface PoDetailAttributes {
}
export type PortList = Array<unknown>;
export interface PrimaryKey {
}
export interface PsAttributes {
}
export interface PsDetailAttributes {
}
export interface RecordLength {
}
export interface ResourceNotFoundException {
}
export interface RestartBatchJobIdentifier {
}
export interface S3BatchJobIdentifier {
}
export interface ScriptBatchJobDefinition {
}
export interface ScriptBatchJobIdentifier {
}
export interface ServiceQuotaExceededException {
}
export interface ServiceUnavailableException {
}
export interface StartApplicationRequest {
}
export interface StartApplicationResponse {
}
export interface StartBatchJobRequest {
}
export interface StartBatchJobResponse {
}
export interface StopApplicationRequest {
}
export interface StopApplicationResponse {
}
export type StorageConfiguration = never;
export type StorageConfigurationList = Array<unknown>;
export type String100 = string;

export type String20 = string;

export type String200 = string;

export type String2000 = string;

export type String20List = Array<unknown>;
export type String50 = string;

export type String50List = Array<unknown>;
export type StringFree65000 = string;

export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagMap = Record<string, unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValue = string;

export interface ThrottlingException {
}
export type Timestamp = Date | string;

export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateApplicationRequest {
}
export interface UpdateApplicationResponse {
}
export interface UpdateEnvironmentRequest {
}
export interface UpdateEnvironmentResponse {
}
export interface ValidationException {
}
export interface ValidationExceptionField {
}
export type ValidationExceptionFieldList = Array<unknown>;
export type ValidationExceptionReason = string;

export type Version = number;

export interface VsamAttributes {
}
export interface VsamDetailAttributes {
}
export declare namespace CancelBatchJobExecution {
  export type Input = CancelBatchJobExecutionRequest;
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

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDataSetExportTask {
  export type Input = CreateDataSetExportTaskRequest;
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

export declare namespace CreateDataSetImportTask {
  export type Input = CreateDataSetImportTaskRequest;
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

export declare namespace CreateDeployment {
  export type Input = CreateDeploymentRequest;
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

export declare namespace CreateEnvironment {
  export type Input = CreateEnvironmentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteApplicationFromEnvironment {
  export type Input = DeleteApplicationFromEnvironmentRequest;
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

export declare namespace DeleteEnvironment {
  export type Input = DeleteEnvironmentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetApplication {
  export type Input = GetApplicationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetApplicationVersion {
  export type Input = GetApplicationVersionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetBatchJobExecution {
  export type Input = GetBatchJobExecutionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataSetDetails {
  export type Input = GetDataSetDetailsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ExecutionTimeoutException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataSetExportTask {
  export type Input = GetDataSetExportTaskRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataSetImportTask {
  export type Input = GetDataSetImportTaskRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDeployment {
  export type Input = GetDeploymentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEnvironment {
  export type Input = GetEnvironmentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSignedBluinsightsUrl {
  export type Input = {};
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListApplicationVersions {
  export type Input = ListApplicationVersionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBatchJobDefinitions {
  export type Input = ListBatchJobDefinitionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBatchJobExecutions {
  export type Input = ListBatchJobExecutionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBatchJobRestartPoints {
  export type Input = ListBatchJobRestartPointsRequest;
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

export declare namespace ListDataSetExportHistory {
  export type Input = ListDataSetExportHistoryRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSetImportHistory {
  export type Input = ListDataSetImportHistoryRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSets {
  export type Input = ListDataSetsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ExecutionTimeoutException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDeployments {
  export type Input = ListDeploymentsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEngineVersions {
  export type Input = ListEngineVersionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnvironments {
  export type Input = ListEnvironmentsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartApplication {
  export type Input = StartApplicationRequest;
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

export declare namespace StartBatchJob {
  export type Input = StartBatchJobRequest;
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

export declare namespace StopApplication {
  export type Input = StopApplicationRequest;
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

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
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

export declare namespace UpdateEnvironment {
  export type Input = UpdateEnvironmentRequest;
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

