import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface HealthLake {
  createFHIRDatastore(
    input: CreateFHIRDatastoreRequest,
  ): Effect.Effect<
    CreateFHIRDatastoreResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteFHIRDatastore(
    input: DeleteFHIRDatastoreRequest,
  ): Effect.Effect<
    DeleteFHIRDatastoreResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeFHIRDatastore(
    input: DescribeFHIRDatastoreRequest,
  ): Effect.Effect<
    DescribeFHIRDatastoreResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeFHIRExportJob(
    input: DescribeFHIRExportJobRequest,
  ): Effect.Effect<
    DescribeFHIRExportJobResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeFHIRImportJob(
    input: DescribeFHIRImportJobRequest,
  ): Effect.Effect<
    DescribeFHIRImportJobResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFHIRDatastores(
    input: ListFHIRDatastoresRequest,
  ): Effect.Effect<
    ListFHIRDatastoresResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFHIRExportJobs(
    input: ListFHIRExportJobsRequest,
  ): Effect.Effect<
    ListFHIRExportJobsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFHIRImportJobs(
    input: ListFHIRImportJobsRequest,
  ): Effect.Effect<
    ListFHIRImportJobsResponse,
    | AccessDeniedException
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
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  startFHIRExportJob(
    input: StartFHIRExportJobRequest,
  ): Effect.Effect<
    StartFHIRExportJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startFHIRImportJob(
    input: StartFHIRImportJobRequest,
  ): Effect.Effect<
    StartFHIRImportJobResponse,
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
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export type Healthlake = HealthLake;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AmazonResourceName = string;

export type AuthorizationStrategy = "SMARTV1" | "SMART_ON_FHIR" | "AWS_AUTH";
export type HealthlakeBoolean = boolean;

export type BoundedLengthString = string;

export type ClientTokenString = string;

export type CmkType = "CM_CMK" | "AO_CMK";
export type ConfigurationMetadata = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface CreateFHIRDatastoreRequest {
  DatastoreName?: string;
  DatastoreTypeVersion: FHIRVersion;
  SseConfiguration?: SseConfiguration;
  PreloadDataConfig?: PreloadDataConfig;
  ClientToken?: string;
  Tags?: Array<Tag>;
  IdentityProviderConfiguration?: IdentityProviderConfiguration;
}
export interface CreateFHIRDatastoreResponse {
  DatastoreId: string;
  DatastoreArn: string;
  DatastoreStatus: DatastoreStatus;
  DatastoreEndpoint: string;
}
export type DatastoreArn = string;

export interface DatastoreFilter {
  DatastoreName?: string;
  DatastoreStatus?: DatastoreStatus;
  CreatedBefore?: Date | string;
  CreatedAfter?: Date | string;
}
export type DatastoreId = string;

export type DatastoreName = string;

export interface DatastoreProperties {
  DatastoreId: string;
  DatastoreArn: string;
  DatastoreName?: string;
  DatastoreStatus: DatastoreStatus;
  CreatedAt?: Date | string;
  DatastoreTypeVersion: FHIRVersion;
  DatastoreEndpoint: string;
  SseConfiguration?: SseConfiguration;
  PreloadDataConfig?: PreloadDataConfig;
  IdentityProviderConfiguration?: IdentityProviderConfiguration;
  ErrorCause?: ErrorCause;
}
export type DatastorePropertiesList = Array<DatastoreProperties>;
export type DatastoreStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "DELETED"
  | "CREATE_FAILED";
export interface DeleteFHIRDatastoreRequest {
  DatastoreId: string;
}
export interface DeleteFHIRDatastoreResponse {
  DatastoreId: string;
  DatastoreArn: string;
  DatastoreStatus: DatastoreStatus;
  DatastoreEndpoint: string;
}
export interface DescribeFHIRDatastoreRequest {
  DatastoreId: string;
}
export interface DescribeFHIRDatastoreResponse {
  DatastoreProperties: DatastoreProperties;
}
export interface DescribeFHIRExportJobRequest {
  DatastoreId: string;
  JobId: string;
}
export interface DescribeFHIRExportJobResponse {
  ExportJobProperties: ExportJobProperties;
}
export interface DescribeFHIRImportJobRequest {
  DatastoreId: string;
  JobId: string;
}
export interface DescribeFHIRImportJobResponse {
  ImportJobProperties: ImportJobProperties;
}
export type EncryptionKeyID = string;

export type ErrorCategory = "RETRYABLE_ERROR" | "NON_RETRYABLE_ERROR";
export interface ErrorCause {
  ErrorMessage?: string;
  ErrorCategory?: ErrorCategory;
}
export type ErrorMessage = string;

export interface ExportJobProperties {
  JobId: string;
  JobName?: string;
  JobStatus: JobStatus;
  SubmitTime: Date | string;
  EndTime?: Date | string;
  DatastoreId: string;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn?: string;
  Message?: string;
}
export type ExportJobPropertiesList = Array<ExportJobProperties>;
export type FHIRVersion = "R4";
export type GenericDouble = number;

export type GenericLong = number;

export type IamRoleArn = string;

export interface IdentityProviderConfiguration {
  AuthorizationStrategy: AuthorizationStrategy;
  FineGrainedAuthorizationEnabled?: boolean;
  Metadata?: string;
  IdpLambdaArn?: string;
}
export interface ImportJobProperties {
  JobId: string;
  JobName?: string;
  JobStatus: JobStatus;
  SubmitTime: Date | string;
  EndTime?: Date | string;
  DatastoreId: string;
  InputDataConfig: InputDataConfig;
  JobOutputDataConfig?: OutputDataConfig;
  JobProgressReport?: JobProgressReport;
  DataAccessRoleArn?: string;
  Message?: string;
}
export type ImportJobPropertiesList = Array<ImportJobProperties>;
interface _InputDataConfig {
  S3Uri?: string;
}

export type InputDataConfig = _InputDataConfig & { S3Uri: string };
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type JobId = string;

export type JobName = string;

export interface JobProgressReport {
  TotalNumberOfScannedFiles?: number;
  TotalSizeOfScannedFilesInMB?: number;
  TotalNumberOfImportedFiles?: number;
  TotalNumberOfResourcesScanned?: number;
  TotalNumberOfResourcesImported?: number;
  TotalNumberOfResourcesWithCustomerError?: number;
  TotalNumberOfFilesReadWithCustomerError?: number;
  Throughput?: number;
}
export type JobStatus =
  | "SUBMITTED"
  | "QUEUED"
  | "IN_PROGRESS"
  | "COMPLETED_WITH_ERRORS"
  | "COMPLETED"
  | "FAILED"
  | "CANCEL_SUBMITTED"
  | "CANCEL_IN_PROGRESS"
  | "CANCEL_COMPLETED"
  | "CANCEL_FAILED";
export interface KmsEncryptionConfig {
  CmkType: CmkType;
  KmsKeyId?: string;
}
export type LambdaArn = string;

export interface ListFHIRDatastoresRequest {
  Filter?: DatastoreFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFHIRDatastoresResponse {
  DatastorePropertiesList: Array<DatastoreProperties>;
  NextToken?: string;
}
export interface ListFHIRExportJobsRequest {
  DatastoreId: string;
  NextToken?: string;
  MaxResults?: number;
  JobName?: string;
  JobStatus?: JobStatus;
  SubmittedBefore?: Date | string;
  SubmittedAfter?: Date | string;
}
export interface ListFHIRExportJobsResponse {
  ExportJobPropertiesList: Array<ExportJobProperties>;
  NextToken?: string;
}
export interface ListFHIRImportJobsRequest {
  DatastoreId: string;
  NextToken?: string;
  MaxResults?: number;
  JobName?: string;
  JobStatus?: JobStatus;
  SubmittedBefore?: Date | string;
  SubmittedAfter?: Date | string;
}
export interface ListFHIRImportJobsResponse {
  ImportJobPropertiesList: Array<ImportJobProperties>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type MaxResultsInteger = number;

export type Message = string;

export type NextToken = string;

interface _OutputDataConfig {
  S3Configuration?: S3Configuration;
}

export type OutputDataConfig = _OutputDataConfig & {
  S3Configuration: S3Configuration;
};
export interface PreloadDataConfig {
  PreloadDataType: PreloadDataType;
}
export type PreloadDataType = "SYNTHEA";
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface S3Configuration {
  S3Uri: string;
  KmsKeyId: string;
}
export type S3Uri = string;

export interface SseConfiguration {
  KmsEncryptionConfig: KmsEncryptionConfig;
}
export interface StartFHIRExportJobRequest {
  JobName?: string;
  OutputDataConfig: OutputDataConfig;
  DatastoreId: string;
  DataAccessRoleArn: string;
  ClientToken?: string;
}
export interface StartFHIRExportJobResponse {
  JobId: string;
  JobStatus: JobStatus;
  DatastoreId?: string;
}
export interface StartFHIRImportJobRequest {
  JobName?: string;
  InputDataConfig: InputDataConfig;
  JobOutputDataConfig: OutputDataConfig;
  DatastoreId: string;
  DataAccessRoleArn: string;
  ClientToken?: string;
}
export interface StartFHIRImportJobResponse {
  JobId: string;
  JobStatus: JobStatus;
  DatastoreId?: string;
}
export type HealthlakeString = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type Timestamp = Date | string;

export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace CreateFHIRDatastore {
  export type Input = CreateFHIRDatastoreRequest;
  export type Output = CreateFHIRDatastoreResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteFHIRDatastore {
  export type Input = DeleteFHIRDatastoreRequest;
  export type Output = DeleteFHIRDatastoreResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeFHIRDatastore {
  export type Input = DescribeFHIRDatastoreRequest;
  export type Output = DescribeFHIRDatastoreResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeFHIRExportJob {
  export type Input = DescribeFHIRExportJobRequest;
  export type Output = DescribeFHIRExportJobResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeFHIRImportJob {
  export type Input = DescribeFHIRImportJobRequest;
  export type Output = DescribeFHIRImportJobResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFHIRDatastores {
  export type Input = ListFHIRDatastoresRequest;
  export type Output = ListFHIRDatastoresResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFHIRExportJobs {
  export type Input = ListFHIRExportJobsRequest;
  export type Output = ListFHIRExportJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFHIRImportJobs {
  export type Input = ListFHIRImportJobsRequest;
  export type Output = ListFHIRImportJobsResponse;
  export type Error =
    | AccessDeniedException
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
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartFHIRExportJob {
  export type Input = StartFHIRExportJobRequest;
  export type Output = StartFHIRExportJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartFHIRImportJob {
  export type Input = StartFHIRImportJobRequest;
  export type Output = StartFHIRImportJobResponse;
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
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
