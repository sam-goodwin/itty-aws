import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class LookoutVision extends AWSServiceClient {
  createDataset(
    input: CreateDatasetRequest,
  ): Effect.Effect<
    CreateDatasetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createModel(
    input: CreateModelRequest,
  ): Effect.Effect<
    CreateModelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createProject(
    input: CreateProjectRequest,
  ): Effect.Effect<
    CreateProjectResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDataset(
    input: DeleteDatasetRequest,
  ): Effect.Effect<
    DeleteDatasetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteModel(
    input: DeleteModelRequest,
  ): Effect.Effect<
    DeleteModelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteProject(
    input: DeleteProjectRequest,
  ): Effect.Effect<
    DeleteProjectResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeDataset(
    input: DescribeDatasetRequest,
  ): Effect.Effect<
    DescribeDatasetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeModel(
    input: DescribeModelRequest,
  ): Effect.Effect<
    DescribeModelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeModelPackagingJob(
    input: DescribeModelPackagingJobRequest,
  ): Effect.Effect<
    DescribeModelPackagingJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeProject(
    input: DescribeProjectRequest,
  ): Effect.Effect<
    DescribeProjectResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  detectAnomalies(
    input: DetectAnomaliesRequest,
  ): Effect.Effect<
    DetectAnomaliesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDatasetEntries(
    input: ListDatasetEntriesRequest,
  ): Effect.Effect<
    ListDatasetEntriesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listModelPackagingJobs(
    input: ListModelPackagingJobsRequest,
  ): Effect.Effect<
    ListModelPackagingJobsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listModels(
    input: ListModelsRequest,
  ): Effect.Effect<
    ListModelsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProjects(
    input: ListProjectsRequest,
  ): Effect.Effect<
    ListProjectsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startModel(
    input: StartModelRequest,
  ): Effect.Effect<
    StartModelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startModelPackagingJob(
    input: StartModelPackagingJobRequest,
  ): Effect.Effect<
    StartModelPackagingJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopModel(
    input: StopModelRequest,
  ): Effect.Effect<
    StopModelResponse,
    | AccessDeniedException
    | ConflictException
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
    | ConflictException
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
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDatasetEntries(
    input: UpdateDatasetEntriesRequest,
  ): Effect.Effect<
    UpdateDatasetEntriesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Lookoutvision extends LookoutVision {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export interface Anomaly {
  Name?: string;
  PixelAnomaly?: PixelAnomaly;
}
export type AnomalyClassFilter = string;

export type AnomalyList = Array<Anomaly>;
export type AnomalyMask = Uint8Array | string;

export type AnomalyName = string;

export type LookoutvisionBoolean = boolean;

export type ClientToken = string;

export type Color = string;

export type CompilerOptions = string;

export type ComponentDescription = string;

export type ComponentName = string;

export type ComponentVersion = string;

export type ComponentVersionArn = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: ResourceType;
}> {}
export type ContentType = string;

export interface CreateDatasetRequest {
  ProjectName: string;
  DatasetType: string;
  DatasetSource?: DatasetSource;
  ClientToken?: string;
}
export interface CreateDatasetResponse {
  DatasetMetadata?: DatasetMetadata;
}
export interface CreateModelRequest {
  ProjectName: string;
  Description?: string;
  ClientToken?: string;
  OutputConfig: OutputConfig;
  KmsKeyId?: string;
  Tags?: Array<Tag>;
}
export interface CreateModelResponse {
  ModelMetadata?: ModelMetadata;
}
export interface CreateProjectRequest {
  ProjectName: string;
  ClientToken?: string;
}
export interface CreateProjectResponse {
  ProjectMetadata?: ProjectMetadata;
}
export type DatasetChanges = Uint8Array | string;

export interface DatasetDescription {
  ProjectName?: string;
  DatasetType?: string;
  CreationTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
  Status?: DatasetStatus;
  StatusMessage?: string;
  ImageStats?: DatasetImageStats;
}
export type DatasetEntry = string;

export type DatasetEntryList = Array<string>;
export interface DatasetGroundTruthManifest {
  S3Object?: InputS3Object;
}
export interface DatasetImageStats {
  Total?: number;
  Labeled?: number;
  Normal?: number;
  Anomaly?: number;
}
export interface DatasetMetadata {
  DatasetType?: string;
  CreationTimestamp?: Date | string;
  Status?: DatasetStatus;
  StatusMessage?: string;
}
export type DatasetMetadataList = Array<DatasetMetadata>;
export interface DatasetSource {
  GroundTruthManifest?: DatasetGroundTruthManifest;
}
export type DatasetStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_COMPLETE"
  | "CREATE_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_COMPLETE"
  | "UPDATE_FAILED_ROLLBACK_IN_PROGRESS"
  | "UPDATE_FAILED_ROLLBACK_COMPLETE"
  | "DELETE_IN_PROGRESS"
  | "DELETE_COMPLETE"
  | "DELETE_FAILED";
export type DatasetStatusMessage = string;

export type DatasetType = string;

export type DateTime = Date | string;

export interface DeleteDatasetRequest {
  ProjectName: string;
  DatasetType: string;
  ClientToken?: string;
}
export interface DeleteDatasetResponse {}
export interface DeleteModelRequest {
  ProjectName: string;
  ModelVersion: string;
  ClientToken?: string;
}
export interface DeleteModelResponse {
  ModelArn?: string;
}
export interface DeleteProjectRequest {
  ProjectName: string;
  ClientToken?: string;
}
export interface DeleteProjectResponse {
  ProjectArn?: string;
}
export interface DescribeDatasetRequest {
  ProjectName: string;
  DatasetType: string;
}
export interface DescribeDatasetResponse {
  DatasetDescription?: DatasetDescription;
}
export interface DescribeModelPackagingJobRequest {
  ProjectName: string;
  JobName: string;
}
export interface DescribeModelPackagingJobResponse {
  ModelPackagingDescription?: ModelPackagingDescription;
}
export interface DescribeModelRequest {
  ProjectName: string;
  ModelVersion: string;
}
export interface DescribeModelResponse {
  ModelDescription?: ModelDescription;
}
export interface DescribeProjectRequest {
  ProjectName: string;
}
export interface DescribeProjectResponse {
  ProjectDescription?: ProjectDescription;
}
export interface DetectAnomaliesRequest {
  ProjectName: string;
  ModelVersion: string;
  Body: Uint8Array | string;
  ContentType: string;
}
export interface DetectAnomaliesResponse {
  DetectAnomalyResult?: DetectAnomalyResult;
}
export interface DetectAnomalyResult {
  Source?: ImageSource;
  IsAnomalous?: boolean;
  Confidence?: number;
  Anomalies?: Array<Anomaly>;
  AnomalyMask?: Uint8Array | string;
}
export type ExceptionString = string;

export type Float = number;

export interface GreengrassConfiguration {
  CompilerOptions?: string;
  TargetDevice?: TargetDevice;
  TargetPlatform?: TargetPlatform;
  S3OutputLocation: S3Location;
  ComponentName: string;
  ComponentVersion?: string;
  ComponentDescription?: string;
  Tags?: Array<Tag>;
}
export interface GreengrassOutputDetails {
  ComponentVersionArn?: string;
  ComponentName?: string;
  ComponentVersion?: string;
}
export interface ImageSource {
  Type?: string;
}
export type ImageSourceType = string;

export type InferenceUnits = number;

export interface InputS3Object {
  Bucket: string;
  Key: string;
  VersionId?: string;
}
export type Integer = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
  readonly RetryAfterSeconds?: number;
}> {}
export type IsLabeled = boolean;

export type KmsKeyId = string;

export interface ListDatasetEntriesRequest {
  ProjectName: string;
  DatasetType: string;
  Labeled?: boolean;
  AnomalyClass?: string;
  BeforeCreationDate?: Date | string;
  AfterCreationDate?: Date | string;
  NextToken?: string;
  MaxResults?: number;
  SourceRefContains?: string;
}
export interface ListDatasetEntriesResponse {
  DatasetEntries?: Array<string>;
  NextToken?: string;
}
export interface ListModelPackagingJobsRequest {
  ProjectName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListModelPackagingJobsResponse {
  ModelPackagingJobs?: Array<ModelPackagingJobMetadata>;
  NextToken?: string;
}
export interface ListModelsRequest {
  ProjectName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListModelsResponse {
  Models?: Array<ModelMetadata>;
  NextToken?: string;
}
export interface ListProjectsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListProjectsResponse {
  Projects?: Array<ProjectMetadata>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type ModelArn = string;

export interface ModelDescription {
  ModelVersion?: string;
  ModelArn?: string;
  CreationTimestamp?: Date | string;
  Description?: string;
  Status?: ModelStatus;
  StatusMessage?: string;
  Performance?: ModelPerformance;
  OutputConfig?: OutputConfig;
  EvaluationManifest?: OutputS3Object;
  EvaluationResult?: OutputS3Object;
  EvaluationEndTimestamp?: Date | string;
  KmsKeyId?: string;
  MinInferenceUnits?: number;
  MaxInferenceUnits?: number;
}
export type ModelDescriptionMessage = string;

export type ModelHostingStatus =
  | "STARTING_HOSTING"
  | "HOSTED"
  | "HOSTING_FAILED"
  | "STOPPING_HOSTING"
  | "SYSTEM_UPDATING";
export interface ModelMetadata {
  CreationTimestamp?: Date | string;
  ModelVersion?: string;
  ModelArn?: string;
  Description?: string;
  Status?: ModelStatus;
  StatusMessage?: string;
  Performance?: ModelPerformance;
}
export type ModelMetadataList = Array<ModelMetadata>;
export interface ModelPackagingConfiguration {
  Greengrass: GreengrassConfiguration;
}
export interface ModelPackagingDescription {
  JobName?: string;
  ProjectName?: string;
  ModelVersion?: string;
  ModelPackagingConfiguration?: ModelPackagingConfiguration;
  ModelPackagingJobDescription?: string;
  ModelPackagingMethod?: string;
  ModelPackagingOutputDetails?: ModelPackagingOutputDetails;
  Status?: ModelPackagingJobStatus;
  StatusMessage?: string;
  CreationTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
}
export type ModelPackagingJobDescription = string;

export interface ModelPackagingJobMetadata {
  JobName?: string;
  ProjectName?: string;
  ModelVersion?: string;
  ModelPackagingJobDescription?: string;
  ModelPackagingMethod?: string;
  Status?: ModelPackagingJobStatus;
  StatusMessage?: string;
  CreationTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
}
export type ModelPackagingJobName = string;

export type ModelPackagingJobsList = Array<ModelPackagingJobMetadata>;
export type ModelPackagingJobStatus =
  | "CREATED"
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED";
export type ModelPackagingMethod = string;

export interface ModelPackagingOutputDetails {
  Greengrass?: GreengrassOutputDetails;
}
export type ModelPackagingStatusMessage = string;

export interface ModelPerformance {
  F1Score?: number;
  Recall?: number;
  Precision?: number;
}
export type ModelStatus =
  | "TRAINING"
  | "TRAINED"
  | "TRAINING_FAILED"
  | "STARTING_HOSTING"
  | "HOSTED"
  | "HOSTING_FAILED"
  | "STOPPING_HOSTING"
  | "SYSTEM_UPDATING"
  | "DELETING";
export type ModelStatusMessage = string;

export type ModelVersion = string;

export type ModelVersionNoLatest = string;

export interface OutputConfig {
  S3Location: S3Location;
}
export interface OutputS3Object {
  Bucket: string;
  Key: string;
}
export type PageSize = number;

export type PaginationToken = string;

export interface PixelAnomaly {
  TotalPercentageArea?: number;
  Color?: string;
}
export type ProjectArn = string;

export interface ProjectDescription {
  ProjectArn?: string;
  ProjectName?: string;
  CreationTimestamp?: Date | string;
  Datasets?: Array<DatasetMetadata>;
}
export interface ProjectMetadata {
  ProjectArn?: string;
  ProjectName?: string;
  CreationTimestamp?: Date | string;
}
export type ProjectMetadataList = Array<ProjectMetadata>;
export type ProjectName = string;

export type QueryString = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: ResourceType;
}> {}
export type ResourceType =
  | "PROJECT"
  | "DATASET"
  | "MODEL"
  | "TRIAL"
  | "MODEL_PACKAGE_JOB";
export type RetryAfterSeconds = number;

export type S3BucketName = string;

export type S3KeyPrefix = string;

export interface S3Location {
  Bucket: string;
  Prefix?: string;
}
export type S3ObjectKey = string;

export type S3ObjectVersion = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
  readonly ResourceType?: ResourceType;
  readonly QuotaCode: string;
  readonly ServiceCode: string;
}> {}
export interface StartModelPackagingJobRequest {
  ProjectName: string;
  ModelVersion: string;
  JobName?: string;
  Configuration: ModelPackagingConfiguration;
  Description?: string;
  ClientToken?: string;
}
export interface StartModelPackagingJobResponse {
  JobName?: string;
}
export interface StartModelRequest {
  ProjectName: string;
  ModelVersion: string;
  MinInferenceUnits: number;
  ClientToken?: string;
  MaxInferenceUnits?: number;
}
export interface StartModelResponse {
  Status?: ModelHostingStatus;
}
export interface StopModelRequest {
  ProjectName: string;
  ModelVersion: string;
  ClientToken?: string;
}
export interface StopModelResponse {
  Status?: ModelHostingStatus;
}
export type Stream = Uint8Array | string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagArn = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TargetDevice = "JETSON_XAVIER";
export interface TargetPlatform {
  Os: TargetPlatformOs;
  Arch: TargetPlatformArch;
  Accelerator?: TargetPlatformAccelerator;
}
export type TargetPlatformAccelerator = "NVIDIA";
export type TargetPlatformArch = "ARM64" | "X86_64";
export type TargetPlatformOs = "LINUX";
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
  readonly QuotaCode?: string;
  readonly ServiceCode?: string;
  readonly RetryAfterSeconds?: number;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateDatasetEntriesRequest {
  ProjectName: string;
  DatasetType: string;
  Changes: Uint8Array | string;
  ClientToken?: string;
}
export interface UpdateDatasetEntriesResponse {
  Status?: DatasetStatus;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
}> {}
export declare namespace CreateDataset {
  export type Input = CreateDatasetRequest;
  export type Output = CreateDatasetResponse;
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

export declare namespace CreateModel {
  export type Input = CreateModelRequest;
  export type Output = CreateModelResponse;
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

export declare namespace CreateProject {
  export type Input = CreateProjectRequest;
  export type Output = CreateProjectResponse;
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

export declare namespace DeleteDataset {
  export type Input = DeleteDatasetRequest;
  export type Output = DeleteDatasetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteModel {
  export type Input = DeleteModelRequest;
  export type Output = DeleteModelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteProject {
  export type Input = DeleteProjectRequest;
  export type Output = DeleteProjectResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDataset {
  export type Input = DescribeDatasetRequest;
  export type Output = DescribeDatasetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeModel {
  export type Input = DescribeModelRequest;
  export type Output = DescribeModelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeModelPackagingJob {
  export type Input = DescribeModelPackagingJobRequest;
  export type Output = DescribeModelPackagingJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeProject {
  export type Input = DescribeProjectRequest;
  export type Output = DescribeProjectResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DetectAnomalies {
  export type Input = DetectAnomaliesRequest;
  export type Output = DetectAnomaliesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDatasetEntries {
  export type Input = ListDatasetEntriesRequest;
  export type Output = ListDatasetEntriesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListModelPackagingJobs {
  export type Input = ListModelPackagingJobsRequest;
  export type Output = ListModelPackagingJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListModels {
  export type Input = ListModelsRequest;
  export type Output = ListModelsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProjects {
  export type Input = ListProjectsRequest;
  export type Output = ListProjectsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartModel {
  export type Input = StartModelRequest;
  export type Output = StartModelResponse;
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

export declare namespace StartModelPackagingJob {
  export type Input = StartModelPackagingJobRequest;
  export type Output = StartModelPackagingJobResponse;
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

export declare namespace StopModel {
  export type Input = StopModelRequest;
  export type Output = StopModelResponse;
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
  export type Output = TagResourceResponse;
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

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDatasetEntries {
  export type Input = UpdateDatasetEntriesRequest;
  export type Output = UpdateDatasetEntriesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
