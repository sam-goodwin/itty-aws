import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class ApplicationCostProfiler extends AWSServiceClient {
  deleteReportDefinition(
    input: DeleteReportDefinitionRequest,
  ): Effect.Effect<
    DeleteReportDefinitionResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getReportDefinition(
    input: GetReportDefinitionRequest,
  ): Effect.Effect<
    GetReportDefinitionResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  importApplicationUsage(
    input: ImportApplicationUsageRequest,
  ): Effect.Effect<
    ImportApplicationUsageResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listReportDefinitions(
    input: ListReportDefinitionsRequest,
  ): Effect.Effect<
    ListReportDefinitionsResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putReportDefinition(
    input: PutReportDefinitionRequest,
  ): Effect.Effect<
    PutReportDefinitionResult,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateReportDefinition(
    input: UpdateReportDefinitionRequest,
  ): Effect.Effect<
    UpdateReportDefinitionResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Applicationcostprofiler extends ApplicationCostProfiler {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface DeleteReportDefinitionRequest {
  reportId: string;
}
export interface DeleteReportDefinitionResult {
  reportId?: string;
}
export type ErrorMessage = string;

export type Format = "CSV" | "PARQUET";
export interface GetReportDefinitionRequest {
  reportId: string;
}
export interface GetReportDefinitionResult {
  reportId: string;
  reportDescription: string;
  reportFrequency: ReportFrequency;
  format: Format;
  destinationS3Location: S3Location;
  createdAt: Date | string;
  lastUpdated: Date | string;
}
export interface ImportApplicationUsageRequest {
  sourceS3Location: SourceS3Location;
}
export interface ImportApplicationUsageResult {
  importId: string;
}
export type ImportId = string;

export type Integer = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export interface ListReportDefinitionsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListReportDefinitionsResult {
  reportDefinitions?: Array<ReportDefinition>;
  nextToken?: string;
}
export interface PutReportDefinitionRequest {
  reportId: string;
  reportDescription: string;
  reportFrequency: ReportFrequency;
  format: Format;
  destinationS3Location: S3Location;
}
export interface PutReportDefinitionResult {
  reportId?: string;
}
export interface ReportDefinition {
  reportId?: string;
  reportDescription?: string;
  reportFrequency?: ReportFrequency;
  format?: Format;
  destinationS3Location?: S3Location;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export type ReportDefinitionList = Array<ReportDefinition>;
export type ReportDescription = string;

export type ReportFrequency = "MONTHLY" | "DAILY" | "ALL";
export type ReportId = string;

export type S3Bucket = string;

export type S3BucketRegion =
  | "AP_EAST_1"
  | "ME_SOUTH_1"
  | "EU_SOUTH_1"
  | "AF_SOUTH_1";
export type S3Key = string;

export interface S3Location {
  bucket: string;
  prefix: string;
}
export type S3Prefix = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export interface SourceS3Location {
  bucket: string;
  key: string;
  region?: S3BucketRegion;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type Timestamp = Date | string;

export type Token = string;

export interface UpdateReportDefinitionRequest {
  reportId: string;
  reportDescription: string;
  reportFrequency: ReportFrequency;
  format: Format;
  destinationS3Location: S3Location;
}
export interface UpdateReportDefinitionResult {
  reportId?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export declare namespace DeleteReportDefinition {
  export type Input = DeleteReportDefinitionRequest;
  export type Output = DeleteReportDefinitionResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetReportDefinition {
  export type Input = GetReportDefinitionRequest;
  export type Output = GetReportDefinitionResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ImportApplicationUsage {
  export type Input = ImportApplicationUsageRequest;
  export type Output = ImportApplicationUsageResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListReportDefinitions {
  export type Input = ListReportDefinitionsRequest;
  export type Output = ListReportDefinitionsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutReportDefinition {
  export type Input = PutReportDefinitionRequest;
  export type Output = PutReportDefinitionResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateReportDefinition {
  export type Input = UpdateReportDefinitionRequest;
  export type Output = UpdateReportDefinitionResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
