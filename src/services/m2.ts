import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AwsSupernovaControlPlaneService {
  getSignedBluinsightsUrl(input: {}): Effect.Effect<
    GetSignedBluinsightsUrlResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError
  >;
  listEngineVersions(
    input: ListEngineVersionsRequest,
  ): Effect.Effect<
    ListEngineVersionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
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
    | ServiceQuotaExceededException
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

export type M2 = AwsSupernovaControlPlaneService;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface AlternateKey {
  name?: string;
  offset: number;
  length: number;
  allowDuplicates?: boolean;
}
export type AlternateKeyList = Array<AlternateKey>;
export type ApplicationDeploymentLifecycle = string;

export type ApplicationLifecycle = string;

export interface ApplicationSummary {
  name: string;
  description?: string;
  applicationId: string;
  applicationArn: string;
  applicationVersion: number;
  status: string;
  engineType: string;
  creationTime: Date | string;
  environmentId?: string;
  lastStartTime?: Date | string;
  versionStatus?: string;
  deploymentStatus?: string;
  roleArn?: string;
}
export type ApplicationSummaryList = Array<ApplicationSummary>;
export type ApplicationVersionLifecycle = string;

export interface ApplicationVersionSummary {
  applicationVersion: number;
  status: string;
  statusReason?: string;
  creationTime: Date | string;
}
export type ApplicationVersionSummaryList = Array<ApplicationVersionSummary>;
export type Arn = string;

export type ArnList = Array<string>;
export type AuthSecretsManagerArn = string;

export type BatchJobDefinition =
  | {
      fileBatchJobDefinition: FileBatchJobDefinition;
      scriptBatchJobDefinition?: undefined;
    }
  | {
      fileBatchJobDefinition?: undefined;
      scriptBatchJobDefinition: ScriptBatchJobDefinition;
    };
export type BatchJobDefinitions = Array<BatchJobDefinition>;
export type BatchJobExecutionStatus = string;

export interface BatchJobExecutionSummary {
  executionId: string;
  applicationId: string;
  jobId?: string;
  jobName?: string;
  jobType?: string;
  status: string;
  startTime: Date | string;
  endTime?: Date | string;
  returnCode?: string;
  batchJobIdentifier?: BatchJobIdentifier;
}
export type BatchJobExecutionSummaryList = Array<BatchJobExecutionSummary>;
export type BatchJobIdentifier =
  | {
      fileBatchJobIdentifier: FileBatchJobIdentifier;
      scriptBatchJobIdentifier?: undefined;
      s3BatchJobIdentifier?: undefined;
      restartBatchJobIdentifier?: undefined;
    }
  | {
      fileBatchJobIdentifier?: undefined;
      scriptBatchJobIdentifier: ScriptBatchJobIdentifier;
      s3BatchJobIdentifier?: undefined;
      restartBatchJobIdentifier?: undefined;
    }
  | {
      fileBatchJobIdentifier?: undefined;
      scriptBatchJobIdentifier?: undefined;
      s3BatchJobIdentifier: S3BatchJobIdentifier;
      restartBatchJobIdentifier?: undefined;
    }
  | {
      fileBatchJobIdentifier?: undefined;
      scriptBatchJobIdentifier?: undefined;
      s3BatchJobIdentifier?: undefined;
      restartBatchJobIdentifier: RestartBatchJobIdentifier;
    };
export type BatchJobParametersMap = Record<string, string>;
export type BatchJobStepList = Array<JobStep>;
export type BatchJobType = string;

export type BatchParamKey = string;

export type BatchParamValue = string;

export type M2Boolean = boolean;

export interface CancelBatchJobExecutionRequest {
  applicationId: string;
  executionId: string;
  authSecretsManagerArn?: string;
}
export interface CancelBatchJobExecutionResponse {}
export type CapacityValue = number;

export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export interface CreateApplicationRequest {
  name: string;
  description?: string;
  engineType: string;
  definition: Definition;
  tags?: Record<string, string>;
  clientToken?: string;
  kmsKeyId?: string;
  roleArn?: string;
}
export interface CreateApplicationResponse {
  applicationArn: string;
  applicationId: string;
  applicationVersion: number;
}
export interface CreateDataSetExportTaskRequest {
  applicationId: string;
  exportConfig: DataSetExportConfig;
  clientToken?: string;
  kmsKeyId?: string;
}
export interface CreateDataSetExportTaskResponse {
  taskId: string;
}
export interface CreateDataSetImportTaskRequest {
  applicationId: string;
  importConfig: DataSetImportConfig;
  clientToken?: string;
}
export interface CreateDataSetImportTaskResponse {
  taskId: string;
}
export interface CreateDeploymentRequest {
  environmentId: string;
  applicationId: string;
  applicationVersion: number;
  clientToken?: string;
}
export interface CreateDeploymentResponse {
  deploymentId: string;
}
export interface CreateEnvironmentRequest {
  name: string;
  instanceType: string;
  description?: string;
  engineType: string;
  engineVersion?: string;
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
  storageConfigurations?: Array<StorageConfiguration>;
  publiclyAccessible?: boolean;
  highAvailabilityConfig?: HighAvailabilityConfig;
  tags?: Record<string, string>;
  preferredMaintenanceWindow?: string;
  networkType?: string;
  clientToken?: string;
  kmsKeyId?: string;
}
export interface CreateEnvironmentResponse {
  environmentId: string;
}
export interface DataSet {
  storageType?: string;
  datasetName: string;
  datasetOrg: DatasetOrgAttributes;
  relativePath?: string;
  recordLength: RecordLength;
}
export type DatasetDetailOrgAttributes =
  | {
      vsam: VsamDetailAttributes;
      gdg?: undefined;
      po?: undefined;
      ps?: undefined;
    }
  | {
      vsam?: undefined;
      gdg: GdgDetailAttributes;
      po?: undefined;
      ps?: undefined;
    }
  | {
      vsam?: undefined;
      gdg?: undefined;
      po: PoDetailAttributes;
      ps?: undefined;
    }
  | {
      vsam?: undefined;
      gdg?: undefined;
      po?: undefined;
      ps: PsDetailAttributes;
    };
export type DataSetExportConfig =
  | { s3Location: string; dataSets?: undefined }
  | { s3Location?: undefined; dataSets: Array<DataSetExportItem> };
export interface DataSetExportItem {
  datasetName: string;
  externalLocation: ExternalLocation;
}
export type DataSetExportList = Array<DataSetExportItem>;
export interface DataSetExportSummary {
  total: number;
  succeeded: number;
  failed: number;
  pending: number;
  inProgress: number;
}
export interface DataSetExportTask {
  taskId: string;
  status: string;
  summary: DataSetExportSummary;
  statusReason?: string;
}
export type DataSetExportTaskList = Array<DataSetExportTask>;
export type DataSetImportConfig =
  | { s3Location: string; dataSets?: undefined }
  | { s3Location?: undefined; dataSets: Array<DataSetImportItem> };
export interface DataSetImportItem {
  dataSet: DataSet;
  externalLocation: ExternalLocation;
}
export type DataSetImportList = Array<DataSetImportItem>;
export interface DataSetImportSummary {
  total: number;
  succeeded: number;
  failed: number;
  pending: number;
  inProgress: number;
}
export interface DataSetImportTask {
  taskId: string;
  status: string;
  summary: DataSetImportSummary;
  statusReason?: string;
}
export type DataSetImportTaskList = Array<DataSetImportTask>;
export type DatasetOrgAttributes =
  | { vsam: VsamAttributes; gdg?: undefined; po?: undefined; ps?: undefined }
  | { vsam?: undefined; gdg: GdgAttributes; po?: undefined; ps?: undefined }
  | { vsam?: undefined; gdg?: undefined; po: PoAttributes; ps?: undefined }
  | { vsam?: undefined; gdg?: undefined; po?: undefined; ps: PsAttributes };
export type DataSetsSummaryList = Array<DataSetSummary>;
export interface DataSetSummary {
  dataSetName: string;
  dataSetOrg?: string;
  format?: string;
  creationTime?: Date | string;
  lastUpdatedTime?: Date | string;
  lastReferencedTime?: Date | string;
}
export type DataSetTaskLifecycle = string;

export type Definition =
  | { s3Location: string; content?: undefined }
  | { s3Location?: undefined; content: string };
export interface DeleteApplicationFromEnvironmentRequest {
  applicationId: string;
  environmentId: string;
}
export interface DeleteApplicationFromEnvironmentResponse {}
export interface DeleteApplicationRequest {
  applicationId: string;
}
export interface DeleteApplicationResponse {}
export interface DeleteEnvironmentRequest {
  environmentId: string;
}
export interface DeleteEnvironmentResponse {}
export interface DeployedVersionSummary {
  applicationVersion: number;
  status: string;
  statusReason?: string;
}
export type DeploymentLifecycle = string;

export type DeploymentList = Array<DeploymentSummary>;
export interface DeploymentSummary {
  deploymentId: string;
  applicationId: string;
  environmentId: string;
  applicationVersion: number;
  status: string;
  creationTime: Date | string;
  statusReason?: string;
}
export interface EfsStorageConfiguration {
  fileSystemId: string;
  mountPoint: string;
}
export type EngineType = string;

export type EngineVersion = string;

export interface EngineVersionsSummary {
  engineType: string;
  engineVersion: string;
}
export type EngineVersionsSummaryList = Array<EngineVersionsSummary>;
export type EntityDescription = string;

export type EntityName = string;

export type EntityNameList = Array<string>;
export type EnvironmentLifecycle = string;

export interface EnvironmentSummary {
  name: string;
  environmentArn: string;
  environmentId: string;
  instanceType: string;
  status: string;
  engineType: string;
  engineVersion: string;
  creationTime: Date | string;
  networkType?: string;
}
export type EnvironmentSummaryList = Array<EnvironmentSummary>;
export declare class ExecutionTimeoutException extends EffectData.TaggedError(
  "ExecutionTimeoutException",
)<{
  readonly message: string;
}> {}
export type ExternalLocation = { s3Location: string };
export interface FileBatchJobDefinition {
  fileName: string;
  folderPath?: string;
}
export interface FileBatchJobIdentifier {
  fileName: string;
  folderPath?: string;
}
export interface FsxStorageConfiguration {
  fileSystemId: string;
  mountPoint: string;
}
export interface GdgAttributes {
  limit?: number;
  rollDisposition?: string;
}
export interface GdgDetailAttributes {
  limit?: number;
  rollDisposition?: string;
}
export interface GetApplicationRequest {
  applicationId: string;
}
export interface GetApplicationResponse {
  name: string;
  description?: string;
  applicationId: string;
  applicationArn: string;
  status: string;
  latestVersion: ApplicationVersionSummary;
  deployedVersion?: DeployedVersionSummary;
  engineType: string;
  logGroups?: Array<LogGroupSummary>;
  creationTime: Date | string;
  lastStartTime?: Date | string;
  tags?: Record<string, string>;
  environmentId?: string;
  targetGroupArns?: Array<string>;
  listenerArns?: Array<string>;
  listenerPorts?: Array<number>;
  loadBalancerDnsName?: string;
  statusReason?: string;
  kmsKeyId?: string;
  roleArn?: string;
}
export interface GetApplicationVersionRequest {
  applicationId: string;
  applicationVersion: number;
}
export interface GetApplicationVersionResponse {
  name: string;
  applicationVersion: number;
  description?: string;
  definitionContent: string;
  status: string;
  creationTime: Date | string;
  statusReason?: string;
}
export interface GetBatchJobExecutionRequest {
  applicationId: string;
  executionId: string;
}
export interface GetBatchJobExecutionResponse {
  executionId: string;
  applicationId: string;
  jobId?: string;
  jobName?: string;
  jobUser?: string;
  jobType?: string;
  status: string;
  startTime: Date | string;
  endTime?: Date | string;
  statusReason?: string;
  returnCode?: string;
  batchJobIdentifier?: BatchJobIdentifier;
  jobStepRestartMarker?: JobStepRestartMarker;
}
export interface GetDataSetDetailsRequest {
  applicationId: string;
  dataSetName: string;
}
export interface GetDataSetDetailsResponse {
  dataSetName: string;
  dataSetOrg?: DatasetDetailOrgAttributes;
  recordLength?: number;
  location?: string;
  blocksize?: number;
  creationTime?: Date | string;
  lastUpdatedTime?: Date | string;
  lastReferencedTime?: Date | string;
  fileSize?: number;
}
export interface GetDataSetExportTaskRequest {
  applicationId: string;
  taskId: string;
}
export interface GetDataSetExportTaskResponse {
  taskId: string;
  status: string;
  summary?: DataSetExportSummary;
  statusReason?: string;
  kmsKeyArn?: string;
}
export interface GetDataSetImportTaskRequest {
  applicationId: string;
  taskId: string;
}
export interface GetDataSetImportTaskResponse {
  taskId: string;
  status: string;
  summary?: DataSetImportSummary;
}
export interface GetDeploymentRequest {
  deploymentId: string;
  applicationId: string;
}
export interface GetDeploymentResponse {
  deploymentId: string;
  applicationId: string;
  environmentId: string;
  applicationVersion: number;
  status: string;
  creationTime: Date | string;
  statusReason?: string;
}
export interface GetEnvironmentRequest {
  environmentId: string;
}
export interface GetEnvironmentResponse {
  name: string;
  description?: string;
  environmentArn: string;
  environmentId: string;
  instanceType: string;
  status: string;
  engineType: string;
  engineVersion: string;
  vpcId: string;
  subnetIds: Array<string>;
  securityGroupIds: Array<string>;
  creationTime: Date | string;
  storageConfigurations?: Array<StorageConfiguration>;
  tags?: Record<string, string>;
  highAvailabilityConfig?: HighAvailabilityConfig;
  publiclyAccessible?: boolean;
  actualCapacity?: number;
  loadBalancerArn?: string;
  statusReason?: string;
  preferredMaintenanceWindow?: string;
  pendingMaintenance?: PendingMaintenance;
  kmsKeyId?: string;
  networkType?: string;
}
export interface GetSignedBluinsightsUrlResponse {
  signedBiUrl: string;
}
export interface HighAvailabilityConfig {
  desiredCapacity: number;
}
export type Identifier = string;

export type IdentifierList = Array<string>;
export type Integer = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type JobIdentifier =
  | { fileName: string; scriptName?: undefined }
  | { fileName?: undefined; scriptName: string };
export interface JobStep {
  stepNumber?: number;
  stepName?: string;
  procStepNumber?: number;
  procStepName?: string;
  stepCondCode?: string;
  stepRestartable?: boolean;
  stepCheckpoint?: number;
  stepCheckpointStatus?: string;
  stepCheckpointTime?: Date | string;
}
export interface JobStepRestartMarker {
  fromStep: string;
  fromProcStep?: string;
  toStep?: string;
  toProcStep?: string;
  stepCheckpoint?: number;
  skip?: boolean;
}
export type KMSKeyId = string;

export interface ListApplicationsRequest {
  nextToken?: string;
  maxResults?: number;
  names?: Array<string>;
  environmentId?: string;
}
export interface ListApplicationsResponse {
  applications: Array<ApplicationSummary>;
  nextToken?: string;
}
export interface ListApplicationVersionsRequest {
  nextToken?: string;
  maxResults?: number;
  applicationId: string;
}
export interface ListApplicationVersionsResponse {
  applicationVersions: Array<ApplicationVersionSummary>;
  nextToken?: string;
}
export interface ListBatchJobDefinitionsRequest {
  nextToken?: string;
  maxResults?: number;
  applicationId: string;
  prefix?: string;
}
export interface ListBatchJobDefinitionsResponse {
  batchJobDefinitions: Array<BatchJobDefinition>;
  nextToken?: string;
}
export interface ListBatchJobExecutionsRequest {
  nextToken?: string;
  maxResults?: number;
  applicationId: string;
  executionIds?: Array<string>;
  jobName?: string;
  status?: string;
  startedAfter?: Date | string;
  startedBefore?: Date | string;
}
export interface ListBatchJobExecutionsResponse {
  batchJobExecutions: Array<BatchJobExecutionSummary>;
  nextToken?: string;
}
export interface ListBatchJobRestartPointsRequest {
  applicationId: string;
  executionId: string;
  authSecretsManagerArn?: string;
}
export interface ListBatchJobRestartPointsResponse {
  batchJobSteps?: Array<JobStep>;
}
export interface ListDataSetExportHistoryRequest {
  nextToken?: string;
  maxResults?: number;
  applicationId: string;
}
export interface ListDataSetExportHistoryResponse {
  dataSetExportTasks: Array<DataSetExportTask>;
  nextToken?: string;
}
export interface ListDataSetImportHistoryRequest {
  nextToken?: string;
  maxResults?: number;
  applicationId: string;
}
export interface ListDataSetImportHistoryResponse {
  dataSetImportTasks: Array<DataSetImportTask>;
  nextToken?: string;
}
export interface ListDataSetsRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
  prefix?: string;
  nameFilter?: string;
}
export interface ListDataSetsResponse {
  dataSets: Array<DataSetSummary>;
  nextToken?: string;
}
export interface ListDeploymentsRequest {
  nextToken?: string;
  maxResults?: number;
  applicationId: string;
}
export interface ListDeploymentsResponse {
  deployments: Array<DeploymentSummary>;
  nextToken?: string;
}
export interface ListEngineVersionsRequest {
  engineType?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListEngineVersionsResponse {
  engineVersions: Array<EngineVersionsSummary>;
  nextToken?: string;
}
export interface ListEnvironmentsRequest {
  nextToken?: string;
  maxResults?: number;
  names?: Array<string>;
  engineType?: string;
}
export interface ListEnvironmentsResponse {
  environments: Array<EnvironmentSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: Record<string, string>;
}
export type LogGroupIdentifier = string;

export type LogGroupSummaries = Array<LogGroupSummary>;
export interface LogGroupSummary {
  logType: string;
  logGroupName: string;
}
export interface MaintenanceSchedule {
  startTime?: Date | string;
  endTime?: Date | string;
}
export type MaxResults = number;

export type NetworkType = string;

export type NextToken = string;

export interface PendingMaintenance {
  schedule?: MaintenanceSchedule;
  engineVersion?: string;
}
export interface PoAttributes {
  format: string;
  encoding?: string;
  memberFileExtensions: Array<string>;
}
export interface PoDetailAttributes {
  format: string;
  encoding: string;
}
export type PortList = Array<number>;
export interface PrimaryKey {
  name?: string;
  offset: number;
  length: number;
}
export interface PsAttributes {
  format: string;
  encoding?: string;
}
export interface PsDetailAttributes {
  format: string;
  encoding: string;
}
export interface RecordLength {
  min: number;
  max: number;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export interface RestartBatchJobIdentifier {
  executionId: string;
  jobStepRestartMarker: JobStepRestartMarker;
}
export interface S3BatchJobIdentifier {
  bucket: string;
  keyPrefix?: string;
  identifier: JobIdentifier;
}
export interface ScriptBatchJobDefinition {
  scriptName: string;
}
export interface ScriptBatchJobIdentifier {
  scriptName: string;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message: string;
}> {}
export interface StartApplicationRequest {
  applicationId: string;
}
export interface StartApplicationResponse {}
export interface StartBatchJobRequest {
  applicationId: string;
  batchJobIdentifier: BatchJobIdentifier;
  jobParams?: Record<string, string>;
  authSecretsManagerArn?: string;
}
export interface StartBatchJobResponse {
  executionId: string;
}
export interface StopApplicationRequest {
  applicationId: string;
  forceStop?: boolean;
}
export interface StopApplicationResponse {}
export type StorageConfiguration =
  | { efs: EfsStorageConfiguration; fsx?: undefined }
  | { efs?: undefined; fsx: FsxStorageConfiguration };
export type StorageConfigurationList = Array<StorageConfiguration>;
export type String100 = string;

export type String20 = string;

export type String200 = string;

export type String2000 = string;

export type String20List = Array<string>;
export type String50 = string;

export type String50List = Array<string>;
export type StringFree65000 = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export type Timestamp = Date | string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateApplicationRequest {
  applicationId: string;
  description?: string;
  currentApplicationVersion: number;
  definition?: Definition;
}
export interface UpdateApplicationResponse {
  applicationVersion: number;
}
export interface UpdateEnvironmentRequest {
  environmentId: string;
  desiredCapacity?: number;
  instanceType?: string;
  engineVersion?: string;
  preferredMaintenanceWindow?: string;
  applyDuringMaintenanceWindow?: boolean;
  forceUpdate?: boolean;
}
export interface UpdateEnvironmentResponse {
  environmentId: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason?: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export type Version = number;

export interface VsamAttributes {
  format: string;
  encoding?: string;
  compressed?: boolean;
  primaryKey?: PrimaryKey;
  alternateKeys?: Array<AlternateKey>;
}
export interface VsamDetailAttributes {
  encoding?: string;
  recordFormat?: string;
  compressed?: boolean;
  cacheAtStartup?: boolean;
  primaryKey?: PrimaryKey;
  alternateKeys?: Array<AlternateKey>;
}
export declare namespace GetSignedBluinsightsUrl {
  export type Input = {};
  export type Output = GetSignedBluinsightsUrlResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListEngineVersions {
  export type Input = ListEngineVersionsRequest;
  export type Output = ListEngineVersionsResponse;
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

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
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
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
