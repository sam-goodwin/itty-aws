import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "SageMaker Geospatial",
  serviceShapeName: "SageMakerGeospatial",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "sagemaker-geospatial" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-05-27");
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
              `https://sagemaker-geospatial-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://sagemaker-geospatial-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://sagemaker-geospatial.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://sagemaker-geospatial.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type EarthObservationJobArn = string;
export interface DeleteEarthObservationJobInput {
  Arn: string;
}
export interface DeleteEarthObservationJobOutput {}
export type VectorEnrichmentJobArn = string;
export interface DeleteVectorEnrichmentJobInput {
  Arn: string;
}
export interface DeleteVectorEnrichmentJobOutput {}
export type ExecutionRoleArn = string;
export type S3Uri = string;
export type KmsKey = string;
export interface ExportS3DataInput {
  S3Uri: string;
  KmsKeyId?: string;
}
export interface OutputConfigInput {
  S3Data: ExportS3DataInput;
}
export interface ExportEarthObservationJobInput {
  Arn: string;
  ClientToken?: string;
  ExecutionRoleArn: string;
  OutputConfig: OutputConfigInput;
  ExportSourceImages?: boolean;
}
export type EarthObservationJobExportStatus = string;
export interface ExportEarthObservationJobOutput {
  Arn: string;
  CreationTime: Date;
  ExportStatus: string;
  ExecutionRoleArn: string;
  OutputConfig: OutputConfigInput;
  ExportSourceImages?: boolean;
}
export interface VectorEnrichmentJobS3Data {
  S3Uri: string;
  KmsKeyId?: string;
}
export interface ExportVectorEnrichmentJobOutputConfig {
  S3Data: VectorEnrichmentJobS3Data;
}
export interface ExportVectorEnrichmentJobInput {
  Arn: string;
  ClientToken?: string;
  ExecutionRoleArn: string;
  OutputConfig: ExportVectorEnrichmentJobOutputConfig;
}
export type VectorEnrichmentJobExportStatus = string;
export interface ExportVectorEnrichmentJobOutput {
  Arn: string;
  CreationTime: Date;
  ExecutionRoleArn: string;
  ExportStatus: string;
  OutputConfig: ExportVectorEnrichmentJobOutputConfig;
}
export interface GetEarthObservationJobInput {
  Arn: string;
}
export type EarthObservationJobStatus = string;
export type DataCollectionArn = string;
export interface TimeRangeFilterOutput {
  StartTime: Date;
  EndTime: Date;
}
export type Position = number[];
export type LinearRing = number[][];
export type LinearRings = number[][][];
export interface PolygonGeometryInput {
  Coordinates: number[][][];
}
export type LinearRingsList = number[][][][];
export interface MultiPolygonGeometryInput {
  Coordinates: number[][][][];
}
export type AreaOfInterestGeometry =
  | { PolygonGeometry: PolygonGeometryInput; MultiPolygonGeometry?: never }
  | { PolygonGeometry?: never; MultiPolygonGeometry: MultiPolygonGeometryInput };
export type AreaOfInterest = { AreaOfInterestGeometry: AreaOfInterestGeometry };
export interface EoCloudCoverInput {
  LowerBound: number;
  UpperBound: number;
}
export interface ViewOffNadirInput {
  LowerBound: number;
  UpperBound: number;
}
export interface ViewSunAzimuthInput {
  LowerBound: number;
  UpperBound: number;
}
export interface ViewSunElevationInput {
  LowerBound: number;
  UpperBound: number;
}
export type ComparisonOperator = string;
export interface PlatformInput {
  Value: string;
  ComparisonOperator?: string;
}
export interface LandsatCloudCoverLandInput {
  LowerBound: number;
  UpperBound: number;
}
export type Property =
  | {
      EoCloudCover: EoCloudCoverInput;
      ViewOffNadir?: never;
      ViewSunAzimuth?: never;
      ViewSunElevation?: never;
      Platform?: never;
      LandsatCloudCoverLand?: never;
    }
  | {
      EoCloudCover?: never;
      ViewOffNadir: ViewOffNadirInput;
      ViewSunAzimuth?: never;
      ViewSunElevation?: never;
      Platform?: never;
      LandsatCloudCoverLand?: never;
    }
  | {
      EoCloudCover?: never;
      ViewOffNadir?: never;
      ViewSunAzimuth: ViewSunAzimuthInput;
      ViewSunElevation?: never;
      Platform?: never;
      LandsatCloudCoverLand?: never;
    }
  | {
      EoCloudCover?: never;
      ViewOffNadir?: never;
      ViewSunAzimuth?: never;
      ViewSunElevation: ViewSunElevationInput;
      Platform?: never;
      LandsatCloudCoverLand?: never;
    }
  | {
      EoCloudCover?: never;
      ViewOffNadir?: never;
      ViewSunAzimuth?: never;
      ViewSunElevation?: never;
      Platform: PlatformInput;
      LandsatCloudCoverLand?: never;
    }
  | {
      EoCloudCover?: never;
      ViewOffNadir?: never;
      ViewSunAzimuth?: never;
      ViewSunElevation?: never;
      Platform?: never;
      LandsatCloudCoverLand: LandsatCloudCoverLandInput;
    };
export interface PropertyFilter {
  Property: Property;
}
export type PropertyFiltersList = PropertyFilter[];
export type LogicalOperator = string;
export interface PropertyFilters {
  Properties?: PropertyFilter[];
  LogicalOperator?: string;
}
export interface RasterDataCollectionQueryOutput {
  RasterDataCollectionArn: string;
  RasterDataCollectionName: string;
  TimeRangeFilter: TimeRangeFilterOutput;
  AreaOfInterest?: AreaOfInterest;
  PropertyFilters?: PropertyFilters;
}
export interface InputConfigOutput {
  PreviousEarthObservationJobArn?: string;
  RasterDataCollectionQuery?: RasterDataCollectionQueryOutput;
}
export type StringListInput = string[];
export type OutputType = string;
export interface Operation {
  Name: string;
  Equation: string;
  OutputType?: string;
}
export type OperationsListInput = Operation[];
export interface CustomIndicesInput {
  Operations?: Operation[];
}
export interface BandMathConfigInput {
  PredefinedIndices?: string[];
  CustomIndices?: CustomIndicesInput;
}
export type Unit = string;
export interface UserDefined {
  Value: number;
  Unit: string;
}
export interface OutputResolutionResamplingInput {
  UserDefined: UserDefined;
}
export type AlgorithmNameResampling = string;
export interface ResamplingConfigInput {
  OutputResolution: OutputResolutionResamplingInput;
  AlgorithmName?: string;
  TargetBands?: string[];
}
export type GroupBy = string;
export type TemporalStatistics = string;
export type TemporalStatisticsListInput = string[];
export interface TemporalStatisticsConfigInput {
  GroupBy?: string;
  Statistics: string[];
  TargetBands?: string[];
}
export type AlgorithmNameCloudRemoval = string;
export interface CloudRemovalConfigInput {
  AlgorithmName?: string;
  InterpolationValue?: string;
  TargetBands?: string[];
}
export type ZonalStatistics = string;
export type ZonalStatisticsListInput = string[];
export interface ZonalStatisticsConfigInput {
  ZoneS3Path: string;
  Statistics: string[];
  TargetBands?: string[];
  ZoneS3PathKmsKeyId?: string;
}
export type AlgorithmNameGeoMosaic = string;
export interface GeoMosaicConfigInput {
  AlgorithmName?: string;
  TargetBands?: string[];
}
export type PredefinedResolution = string;
export interface OutputResolutionStackInput {
  Predefined?: string;
  UserDefined?: UserDefined;
}
export interface StackConfigInput {
  OutputResolution?: OutputResolutionStackInput;
  TargetBands?: string[];
}
export interface CloudMaskingConfigInput {}
export interface LandCoverSegmentationConfigInput {}
export type JobConfigInput =
  | {
      BandMathConfig: BandMathConfigInput;
      ResamplingConfig?: never;
      TemporalStatisticsConfig?: never;
      CloudRemovalConfig?: never;
      ZonalStatisticsConfig?: never;
      GeoMosaicConfig?: never;
      StackConfig?: never;
      CloudMaskingConfig?: never;
      LandCoverSegmentationConfig?: never;
    }
  | {
      BandMathConfig?: never;
      ResamplingConfig: ResamplingConfigInput;
      TemporalStatisticsConfig?: never;
      CloudRemovalConfig?: never;
      ZonalStatisticsConfig?: never;
      GeoMosaicConfig?: never;
      StackConfig?: never;
      CloudMaskingConfig?: never;
      LandCoverSegmentationConfig?: never;
    }
  | {
      BandMathConfig?: never;
      ResamplingConfig?: never;
      TemporalStatisticsConfig: TemporalStatisticsConfigInput;
      CloudRemovalConfig?: never;
      ZonalStatisticsConfig?: never;
      GeoMosaicConfig?: never;
      StackConfig?: never;
      CloudMaskingConfig?: never;
      LandCoverSegmentationConfig?: never;
    }
  | {
      BandMathConfig?: never;
      ResamplingConfig?: never;
      TemporalStatisticsConfig?: never;
      CloudRemovalConfig: CloudRemovalConfigInput;
      ZonalStatisticsConfig?: never;
      GeoMosaicConfig?: never;
      StackConfig?: never;
      CloudMaskingConfig?: never;
      LandCoverSegmentationConfig?: never;
    }
  | {
      BandMathConfig?: never;
      ResamplingConfig?: never;
      TemporalStatisticsConfig?: never;
      CloudRemovalConfig?: never;
      ZonalStatisticsConfig: ZonalStatisticsConfigInput;
      GeoMosaicConfig?: never;
      StackConfig?: never;
      CloudMaskingConfig?: never;
      LandCoverSegmentationConfig?: never;
    }
  | {
      BandMathConfig?: never;
      ResamplingConfig?: never;
      TemporalStatisticsConfig?: never;
      CloudRemovalConfig?: never;
      ZonalStatisticsConfig?: never;
      GeoMosaicConfig: GeoMosaicConfigInput;
      StackConfig?: never;
      CloudMaskingConfig?: never;
      LandCoverSegmentationConfig?: never;
    }
  | {
      BandMathConfig?: never;
      ResamplingConfig?: never;
      TemporalStatisticsConfig?: never;
      CloudRemovalConfig?: never;
      ZonalStatisticsConfig?: never;
      GeoMosaicConfig?: never;
      StackConfig: StackConfigInput;
      CloudMaskingConfig?: never;
      LandCoverSegmentationConfig?: never;
    }
  | {
      BandMathConfig?: never;
      ResamplingConfig?: never;
      TemporalStatisticsConfig?: never;
      CloudRemovalConfig?: never;
      ZonalStatisticsConfig?: never;
      GeoMosaicConfig?: never;
      StackConfig?: never;
      CloudMaskingConfig: CloudMaskingConfigInput;
      LandCoverSegmentationConfig?: never;
    }
  | {
      BandMathConfig?: never;
      ResamplingConfig?: never;
      TemporalStatisticsConfig?: never;
      CloudRemovalConfig?: never;
      ZonalStatisticsConfig?: never;
      GeoMosaicConfig?: never;
      StackConfig?: never;
      CloudMaskingConfig?: never;
      LandCoverSegmentationConfig: LandCoverSegmentationConfigInput;
    };
export interface OutputBand {
  BandName: string;
  OutputDataType: string;
}
export type EarthObservationJobOutputBands = OutputBand[];
export type EarthObservationJobErrorType = string;
export interface EarthObservationJobErrorDetails {
  Type?: string;
  Message?: string;
}
export type ExportErrorType = string;
export interface ExportErrorDetailsOutput {
  Type?: string;
  Message?: string;
}
export interface ExportErrorDetails {
  ExportResults?: ExportErrorDetailsOutput;
  ExportSourceImages?: ExportErrorDetailsOutput;
}
export type Tags = { [key: string]: string | undefined };
export interface GetEarthObservationJobOutput {
  Arn: string;
  Name: string;
  CreationTime: Date;
  DurationInSeconds: number;
  Status: string;
  KmsKeyId?: string;
  InputConfig: InputConfigOutput;
  JobConfig: JobConfigInput;
  OutputBands?: OutputBand[];
  ExecutionRoleArn?: string;
  ErrorDetails?: EarthObservationJobErrorDetails;
  ExportStatus?: string;
  ExportErrorDetails?: ExportErrorDetails;
  Tags?: { [key: string]: string | undefined };
}
export interface GetRasterDataCollectionInput {
  Arn: string;
}
export type DataCollectionType = string;
export interface Filter {
  Name: string;
  Type: string;
  Minimum?: number;
  Maximum?: number;
}
export type FilterList = Filter[];
export type ImageSourceBandList = string[];
export interface GetRasterDataCollectionOutput {
  Name: string;
  Arn: string;
  Type: string;
  Description: string;
  DescriptionPageUrl: string;
  SupportedFilters: Filter[];
  ImageSourceBands: string[];
  Tags?: { [key: string]: string | undefined };
}
export type TargetOptions = string;
export interface GetTileInput {
  x: number;
  y: number;
  z: number;
  ImageAssets: string[];
  Target: string;
  Arn: string;
  ImageMask?: boolean;
  OutputFormat?: string;
  TimeRangeFilter?: string;
  PropertyFilters?: string;
  OutputDataType?: string;
  ExecutionRoleArn?: string;
}
export interface GetTileOutput {
  BinaryFile?: T.StreamingOutputBody;
}
export interface GetVectorEnrichmentJobInput {
  Arn: string;
}
export type VectorEnrichmentJobType = string;
export type VectorEnrichmentJobStatus = string;
export type VectorEnrichmentJobDocumentType = string;
export type VectorEnrichmentJobDataSourceConfigInput = { S3Data: VectorEnrichmentJobS3Data };
export interface VectorEnrichmentJobInputConfig {
  DocumentType: string;
  DataSourceConfig: VectorEnrichmentJobDataSourceConfigInput;
}
export interface ReverseGeocodingConfig {
  YAttributeName: string;
  XAttributeName: string;
}
export interface MapMatchingConfig {
  IdAttributeName: string;
  YAttributeName: string;
  XAttributeName: string;
  TimestampAttributeName: string;
}
export type VectorEnrichmentJobConfig =
  | { ReverseGeocodingConfig: ReverseGeocodingConfig; MapMatchingConfig?: never }
  | { ReverseGeocodingConfig?: never; MapMatchingConfig: MapMatchingConfig };
export type VectorEnrichmentJobErrorType = string;
export interface VectorEnrichmentJobErrorDetails {
  ErrorType?: string;
  ErrorMessage?: string;
}
export type VectorEnrichmentJobExportErrorType = string;
export interface VectorEnrichmentJobExportErrorDetails {
  Type?: string;
  Message?: string;
}
export interface GetVectorEnrichmentJobOutput {
  Arn: string;
  Type: string;
  Name: string;
  CreationTime: Date;
  DurationInSeconds: number;
  Status: string;
  KmsKeyId?: string;
  InputConfig: VectorEnrichmentJobInputConfig;
  JobConfig: VectorEnrichmentJobConfig;
  ExecutionRoleArn: string;
  ErrorDetails?: VectorEnrichmentJobErrorDetails;
  ExportStatus?: string;
  ExportErrorDetails?: VectorEnrichmentJobExportErrorDetails;
  Tags?: { [key: string]: string | undefined };
}
export type SortOrder = string;
export type NextToken = string | redacted.Redacted<string>;
export interface ListEarthObservationJobInput {
  StatusEquals?: string;
  SortOrder?: string;
  SortBy?: string;
  NextToken?: string | redacted.Redacted<string>;
  MaxResults?: number;
}
export interface ListEarthObservationJobOutputConfig {
  Arn: string;
  Name: string;
  CreationTime: Date;
  DurationInSeconds: number;
  Status: string;
  OperationType: string;
  Tags?: { [key: string]: string | undefined };
}
export type EarthObservationJobList = ListEarthObservationJobOutputConfig[];
export interface ListEarthObservationJobOutput {
  EarthObservationJobSummaries: ListEarthObservationJobOutputConfig[];
  NextToken?: string | redacted.Redacted<string>;
}
export interface ListRasterDataCollectionsInput {
  NextToken?: string | redacted.Redacted<string>;
  MaxResults?: number;
}
export interface RasterDataCollectionMetadata {
  Name: string;
  Arn: string;
  Type: string;
  Description: string;
  DescriptionPageUrl?: string;
  SupportedFilters: Filter[];
  Tags?: { [key: string]: string | undefined };
}
export type DataCollectionsList = RasterDataCollectionMetadata[];
export interface ListRasterDataCollectionsOutput {
  RasterDataCollectionSummaries: RasterDataCollectionMetadata[];
  NextToken?: string | redacted.Redacted<string>;
}
export type Arn = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
export interface ListVectorEnrichmentJobInput {
  StatusEquals?: string;
  SortOrder?: string;
  SortBy?: string;
  NextToken?: string | redacted.Redacted<string>;
  MaxResults?: number;
}
export interface ListVectorEnrichmentJobOutputConfig {
  Arn: string;
  Name: string;
  Type: string;
  CreationTime: Date;
  DurationInSeconds: number;
  Status: string;
  Tags?: { [key: string]: string | undefined };
}
export type VectorEnrichmentJobList = ListVectorEnrichmentJobOutputConfig[];
export interface ListVectorEnrichmentJobOutput {
  VectorEnrichmentJobSummaries: ListVectorEnrichmentJobOutputConfig[];
  NextToken?: string | redacted.Redacted<string>;
}
export interface TimeRangeFilterInput {
  StartTime: Date;
  EndTime: Date;
}
export interface RasterDataCollectionQueryWithBandFilterInput {
  TimeRangeFilter: TimeRangeFilterInput;
  AreaOfInterest?: AreaOfInterest;
  PropertyFilters?: PropertyFilters;
  BandFilter?: string[];
}
export interface SearchRasterDataCollectionInput {
  Arn: string;
  RasterDataCollectionQuery: RasterDataCollectionQueryWithBandFilterInput;
  NextToken?: string | redacted.Redacted<string>;
}
export interface Geometry {
  Type: string;
  Coordinates: number[][][];
}
export interface AssetValue {
  Href?: string;
}
export type AssetsMap = { [key: string]: AssetValue | undefined };
export interface Properties {
  EoCloudCover?: number;
  ViewOffNadir?: number;
  ViewSunAzimuth?: number;
  ViewSunElevation?: number;
  Platform?: string;
  LandsatCloudCoverLand?: number;
}
export interface ItemSource {
  Id: string;
  Geometry: Geometry;
  Assets?: { [key: string]: AssetValue | undefined };
  DateTime: Date;
  Properties?: Properties;
}
export type ItemSourceList = ItemSource[];
export interface SearchRasterDataCollectionOutput {
  ApproximateResultCount: number;
  NextToken?: string | redacted.Redacted<string>;
  Items?: ItemSource[];
}
export interface RasterDataCollectionQueryInput {
  RasterDataCollectionArn: string;
  TimeRangeFilter: TimeRangeFilterInput;
  AreaOfInterest?: AreaOfInterest;
  PropertyFilters?: PropertyFilters;
}
export interface InputConfigInput {
  PreviousEarthObservationJobArn?: string;
  RasterDataCollectionQuery?: RasterDataCollectionQueryInput;
}
export interface StartEarthObservationJobInput {
  Name: string;
  ClientToken?: string;
  KmsKeyId?: string;
  InputConfig: InputConfigInput;
  JobConfig: JobConfigInput;
  ExecutionRoleArn: string;
  Tags?: { [key: string]: string | undefined };
}
export interface StartEarthObservationJobOutput {
  Name: string;
  Arn: string;
  CreationTime: Date;
  DurationInSeconds: number;
  Status: string;
  KmsKeyId?: string;
  InputConfig?: InputConfigOutput;
  JobConfig: JobConfigInput;
  ExecutionRoleArn: string;
  Tags?: { [key: string]: string | undefined };
}
export interface StartVectorEnrichmentJobInput {
  Name: string;
  ClientToken?: string;
  KmsKeyId?: string;
  InputConfig: VectorEnrichmentJobInputConfig;
  JobConfig: VectorEnrichmentJobConfig;
  ExecutionRoleArn: string;
  Tags?: { [key: string]: string | undefined };
}
export interface StartVectorEnrichmentJobOutput {
  Name: string;
  Arn: string;
  Type: string;
  CreationTime: Date;
  DurationInSeconds: number;
  Status: string;
  KmsKeyId?: string;
  InputConfig: VectorEnrichmentJobInputConfig;
  JobConfig: VectorEnrichmentJobConfig;
  ExecutionRoleArn: string;
  Tags?: { [key: string]: string | undefined };
}
export interface StopEarthObservationJobInput {
  Arn: string;
}
export interface StopEarthObservationJobOutput {}
export interface StopVectorEnrichmentJobInput {
  Arn: string;
}
export interface StopVectorEnrichmentJobOutput {}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export type DeleteEarthObservationJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this operation to delete an Earth Observation job.
 */
export const deleteEarthObservationJob: API.OperationMethod<
  DeleteEarthObservationJobInput,
  DeleteEarthObservationJobOutput,
  DeleteEarthObservationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<DeleteEarthObservationJobInput>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteEarthObservationJobOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEarthObservationJob",
}));

export type DeleteVectorEnrichmentJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this operation to delete a Vector Enrichment job.
 */
export const deleteVectorEnrichmentJob: API.OperationMethod<
  DeleteVectorEnrichmentJobInput,
  DeleteVectorEnrichmentJobOutput,
  DeleteVectorEnrichmentJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<DeleteVectorEnrichmentJobInput>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteVectorEnrichmentJobOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVectorEnrichmentJob",
}));

export type ExportEarthObservationJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an Amazon S3 location.
 */
export const exportEarthObservationJob: API.OperationMethod<
  ExportEarthObservationJobInput,
  ExportEarthObservationJobOutput,
  ExportEarthObservationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5, __c0, 5) as any as S.Schema<ExportEarthObservationJobInput>,
  output: __S(6, __c0, 6) as any as S.Schema<ExportEarthObservationJobOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExportEarthObservationJob",
}));

export type ExportVectorEnrichmentJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this operation to copy results of a Vector Enrichment job to an Amazon S3 location.
 */
export const exportVectorEnrichmentJob: API.OperationMethod<
  ExportVectorEnrichmentJobInput,
  ExportVectorEnrichmentJobOutput,
  ExportVectorEnrichmentJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9, __c1, 1) as any as S.Schema<ExportVectorEnrichmentJobInput>,
  output: __S(10, __c1, 2) as any as S.Schema<ExportVectorEnrichmentJobOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExportVectorEnrichmentJob",
}));

export type GetEarthObservationJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the details for a previously initiated Earth Observation job.
 */
export const getEarthObservationJob: API.OperationMethod<
  GetEarthObservationJobInput,
  GetEarthObservationJobOutput,
  GetEarthObservationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11, __c1, 3) as any as S.Schema<GetEarthObservationJobInput>,
  output: __S(53, __c6, 5) as any as S.Schema<GetEarthObservationJobOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEarthObservationJob",
}));

export type GetRasterDataCollectionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this operation to get details of a specific raster data collection.
 */
export const getRasterDataCollection: API.OperationMethod<
  GetRasterDataCollectionInput,
  GetRasterDataCollectionOutput,
  GetRasterDataCollectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54, __c6, 6) as any as S.Schema<GetRasterDataCollectionInput>,
  output: __S(57, __c7, 1) as any as S.Schema<GetRasterDataCollectionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRasterDataCollection",
}));

export type GetTileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a web mercator tile for the given Earth Observation job.
 */
export const getTile: API.OperationMethod<
  GetTileInput,
  GetTileOutput,
  GetTileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58, __c7, 2) as any as S.Schema<GetTileInput>,
  output: __S(59, __c7, 3) as any as S.Schema<GetTileOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTile",
}));

export type GetVectorEnrichmentJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).
 */
export const getVectorEnrichmentJob: API.OperationMethod<
  GetVectorEnrichmentJobInput,
  GetVectorEnrichmentJobOutput,
  GetVectorEnrichmentJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60, __c7, 4) as any as S.Schema<GetVectorEnrichmentJobInput>,
  output: __S(67, __c8, 3) as any as S.Schema<GetVectorEnrichmentJobOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVectorEnrichmentJob",
}));

export type ListEarthObservationJobsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.
 */
export const listEarthObservationJobs: API.PaginatedOperationMethod<
  ListEarthObservationJobInput,
  ListEarthObservationJobOutput,
  ListEarthObservationJobsError,
  Credentials | HttpClient.HttpClient,
  ListEarthObservationJobOutputConfig
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(68, __c8, 4) as any as S.Schema<ListEarthObservationJobInput>,
  output: __S(71, __c8, 7) as any as S.Schema<ListEarthObservationJobOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEarthObservationJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "EarthObservationJobSummaries",
  } as const,
})) as any;

export type ListRasterDataCollectionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this operation to get raster data collections.
 */
export const listRasterDataCollections: API.PaginatedOperationMethod<
  ListRasterDataCollectionsInput,
  ListRasterDataCollectionsOutput,
  ListRasterDataCollectionsError,
  Credentials | HttpClient.HttpClient,
  RasterDataCollectionMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(72, __c9, 0) as any as S.Schema<ListRasterDataCollectionsInput>,
  output: __S(75, __c9, 3) as any as S.Schema<ListRasterDataCollectionsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRasterDataCollections",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RasterDataCollectionSummaries",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags attached to the resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76, __c9, 4) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(77, __c9, 5) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListVectorEnrichmentJobsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of vector enrichment jobs.
 */
export const listVectorEnrichmentJobs: API.PaginatedOperationMethod<
  ListVectorEnrichmentJobInput,
  ListVectorEnrichmentJobOutput,
  ListVectorEnrichmentJobsError,
  Credentials | HttpClient.HttpClient,
  ListVectorEnrichmentJobOutputConfig
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(78, __c9, 6) as any as S.Schema<ListVectorEnrichmentJobInput>,
  output: __S(81, __c10, 1) as any as S.Schema<ListVectorEnrichmentJobOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVectorEnrichmentJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "VectorEnrichmentJobSummaries",
  } as const,
})) as any;

export type SearchRasterDataCollectionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.
 */
export const searchRasterDataCollection: API.PaginatedOperationMethod<
  SearchRasterDataCollectionInput,
  SearchRasterDataCollectionOutput,
  SearchRasterDataCollectionError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(84, __c10, 4) as any as S.Schema<SearchRasterDataCollectionInput>,
  output: __S(91, __c11, 3) as any as S.Schema<SearchRasterDataCollectionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchRasterDataCollection",
  pagination: { inputToken: "NextToken", outputToken: "NextToken" } as const,
})) as any;

export type StartEarthObservationJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this operation to create an Earth observation job.
 */
export const startEarthObservationJob: API.OperationMethod<
  StartEarthObservationJobInput,
  StartEarthObservationJobOutput,
  StartEarthObservationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(94, __c11, 6) as any as S.Schema<StartEarthObservationJobInput>,
  output: __S(95, __c11, 7) as any as S.Schema<StartEarthObservationJobOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartEarthObservationJob",
}));

export type StartVectorEnrichmentJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a Vector Enrichment job for the supplied job type. Currently, there are two supported job types: reverse geocoding and map matching.
 */
export const startVectorEnrichmentJob: API.OperationMethod<
  StartVectorEnrichmentJobInput,
  StartVectorEnrichmentJobOutput,
  StartVectorEnrichmentJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(96, __c12, 0) as any as S.Schema<StartVectorEnrichmentJobInput>,
  output: __S(97, __c12, 1) as any as S.Schema<StartVectorEnrichmentJobOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartVectorEnrichmentJob",
}));

export type StopEarthObservationJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this operation to stop an existing earth observation job.
 */
export const stopEarthObservationJob: API.OperationMethod<
  StopEarthObservationJobInput,
  StopEarthObservationJobOutput,
  StopEarthObservationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(98, __c12, 2) as any as S.Schema<StopEarthObservationJobInput>,
  output: __S(44, __c5, 4) as any as S.Schema<StopEarthObservationJobOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopEarthObservationJob",
}));

export type StopVectorEnrichmentJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops the Vector Enrichment job for a given job ARN.
 */
export const stopVectorEnrichmentJob: API.OperationMethod<
  StopVectorEnrichmentJobInput,
  StopVectorEnrichmentJobOutput,
  StopVectorEnrichmentJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(99, __c12, 3) as any as S.Schema<StopVectorEnrichmentJobInput>,
  output: __S(44, __c5, 4) as any as S.Schema<StopVectorEnrichmentJobOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopVectorEnrichmentJob",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The resource you want to tag.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(100, __c12, 4) as any as S.Schema<TagResourceRequest>,
  output: __S(44, __c5, 4) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The resource you want to untag.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(101, __c12, 5) as any as S.Schema<UntagResourceRequest>,
  output: __S(44, __c5, 4) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/earth-observation-jobs/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteEarthObservationJobInput",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteEarthObservationJobOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/vector-enrichment-jobs/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVectorEnrichmentJobInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ S3Uri: S.String, KmsKeyId: S.optional(S.String) }),
      ).annotate({ identifier: "ExportS3DataInput" });
    case 4:
      return S.suspend(() => S.Struct({ S3Data: __S(3, __c0, 3) })).annotate({
        identifier: "OutputConfigInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ExecutionRoleArn: S.String,
          OutputConfig: __S(4, __c0, 4),
          ExportSourceImages: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/export-earth-observation-job" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ExportEarthObservationJobInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          CreationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ExportStatus: S.String,
          ExecutionRoleArn: S.String,
          OutputConfig: __S(4, __c0, 4),
          ExportSourceImages: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ExportEarthObservationJobOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ S3Uri: S.String, KmsKeyId: S.optional(S.String) }),
      ).annotate({
        identifier: "VectorEnrichmentJobS3Data",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ S3Data: __S(7, __c0, 7) })).annotate({
        identifier: "ExportVectorEnrichmentJobOutputConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ExecutionRoleArn: S.String,
          OutputConfig: __S(8, __c1, 0),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/export-vector-enrichment-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ExportVectorEnrichmentJobInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          CreationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ExecutionRoleArn: S.String,
          ExportStatus: S.String,
          OutputConfig: __S(8, __c1, 0),
        }),
      ).annotate({
        identifier: "ExportVectorEnrichmentJobOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/earth-observation-jobs/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEarthObservationJobInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StartTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          EndTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "TimeRangeFilterOutput" });
    case 5:
      return S.Array(S.Number);
    case 6:
      return S.Array(__S(13, __c1, 5));
    case 7:
      return S.Array(__S(14, __c1, 6));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Coordinates: __S(15, __c1, 7) })).annotate({
        identifier: "PolygonGeometryInput",
      });
    case 1:
      return S.Array(__S(15, __c1, 7));
    case 2:
      return S.suspend(() => S.Struct({ Coordinates: __S(17, __c2, 1) })).annotate({
        identifier: "MultiPolygonGeometryInput",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ PolygonGeometry: __S(16, __c2, 0) }),
        /*@__PURE__*/ S.Struct({ MultiPolygonGeometry: __S(18, __c2, 2) }),
      ]);
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ AreaOfInterestGeometry: __S(19, __c2, 3) })]);
    case 5:
      return S.suspend(() => S.Struct({ LowerBound: S.Number, UpperBound: S.Number })).annotate({
        identifier: "EoCloudCoverInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Value: S.String, ComparisonOperator: S.optional(S.String) }),
      ).annotate({ identifier: "PlatformInput" });
    case 7:
      return S.suspend(() => S.Struct({ LowerBound: S.Number, UpperBound: S.Number })).annotate({
        identifier: "LandsatCloudCoverLandInput",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ EoCloudCover: __S(21, __c2, 5) }),
        /*@__PURE__*/ S.Struct({ ViewOffNadir: __S(21, __c2, 5) }),
        /*@__PURE__*/ S.Struct({ ViewSunAzimuth: __S(21, __c2, 5) }),
        /*@__PURE__*/ S.Struct({ ViewSunElevation: __S(21, __c2, 5) }),
        /*@__PURE__*/ S.Struct({ Platform: __S(22, __c2, 6) }),
        /*@__PURE__*/ S.Struct({ LandsatCloudCoverLand: __S(23, __c2, 7) }),
      ]);
    case 1:
      return S.suspend(() => S.Struct({ Property: __S(24, __c3, 0) })).annotate({
        identifier: "PropertyFilter",
      });
    case 2:
      return S.Array(__S(25, __c3, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Properties: S.optional(__S(26, __c3, 2)),
          LogicalOperator: S.optional(S.String),
        }),
      ).annotate({ identifier: "PropertyFilters" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RasterDataCollectionArn: S.String,
          RasterDataCollectionName: S.String,
          TimeRangeFilter: __S(12, __c1, 4),
          AreaOfInterest: S.optional(__S(20, __c2, 4)),
          PropertyFilters: S.optional(__S(27, __c3, 3)),
        }),
      ).annotate({
        identifier: "RasterDataCollectionQueryOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PreviousEarthObservationJobArn: S.optional(S.String),
          RasterDataCollectionQuery: S.optional(__S(28, __c3, 4)),
        }),
      ).annotate({ identifier: "InputConfigOutput" });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Equation: S.String, OutputType: S.optional(S.String) }),
      ).annotate({ identifier: "Operation" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31, __c3, 7));
    case 1:
      return S.suspend(() => S.Struct({ Operations: S.optional(__S(32, __c4, 0)) })).annotate({
        identifier: "CustomIndicesInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PredefinedIndices: S.optional(__S(30, __c3, 6)),
          CustomIndices: S.optional(__S(33, __c4, 1)),
        }),
      ).annotate({ identifier: "BandMathConfigInput" });
    case 3:
      return S.suspend(() => S.Struct({ Value: S.Number, Unit: S.String })).annotate({
        identifier: "UserDefined",
      });
    case 4:
      return S.suspend(() => S.Struct({ UserDefined: __S(35, __c4, 3) })).annotate({
        identifier: "OutputResolutionResamplingInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OutputResolution: __S(36, __c4, 4),
          AlgorithmName: S.optional(S.String),
          TargetBands: S.optional(__S(30, __c3, 6)),
        }),
      ).annotate({ identifier: "ResamplingConfigInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          GroupBy: S.optional(S.String),
          Statistics: __S(30, __c3, 6),
          TargetBands: S.optional(__S(30, __c3, 6)),
        }),
      ).annotate({
        identifier: "TemporalStatisticsConfigInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AlgorithmName: S.optional(S.String),
          InterpolationValue: S.optional(S.String),
          TargetBands: S.optional(__S(30, __c3, 6)),
        }),
      ).annotate({ identifier: "CloudRemovalConfigInput" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ZoneS3Path: S.String,
          Statistics: __S(30, __c3, 6),
          TargetBands: S.optional(__S(30, __c3, 6)),
          ZoneS3PathKmsKeyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ZonalStatisticsConfigInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AlgorithmName: S.optional(S.String),
          TargetBands: S.optional(__S(30, __c3, 6)),
        }),
      ).annotate({ identifier: "GeoMosaicConfigInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Predefined: S.optional(S.String), UserDefined: S.optional(__S(35, __c4, 3)) }),
      ).annotate({
        identifier: "OutputResolutionStackInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          OutputResolution: S.optional(__S(42, __c5, 2)),
          TargetBands: S.optional(__S(30, __c3, 6)),
        }),
      ).annotate({ identifier: "StackConfigInput" });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CloudMaskingConfigInput",
      });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "LandCoverSegmentationConfigInput",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ BandMathConfig: __S(34, __c4, 2) }),
        /*@__PURE__*/ S.Struct({ ResamplingConfig: __S(37, __c4, 5) }),
        /*@__PURE__*/ S.Struct({ TemporalStatisticsConfig: __S(38, __c4, 6) }),
        /*@__PURE__*/ S.Struct({ CloudRemovalConfig: __S(39, __c4, 7) }),
        /*@__PURE__*/ S.Struct({ ZonalStatisticsConfig: __S(40, __c5, 0) }),
        /*@__PURE__*/ S.Struct({ GeoMosaicConfig: __S(41, __c5, 1) }),
        /*@__PURE__*/ S.Struct({ StackConfig: __S(43, __c5, 3) }),
        /*@__PURE__*/ S.Struct({ CloudMaskingConfig: __S(44, __c5, 4) }),
        /*@__PURE__*/ S.Struct({ LandCoverSegmentationConfig: __S(45, __c5, 5) }),
      ]);
    case 7:
      return S.suspend(() => S.Struct({ BandName: S.String, OutputDataType: S.String })).annotate({
        identifier: "OutputBand",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(47, __c5, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({
        identifier: "EarthObservationJobErrorDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({ identifier: "ExportErrorDetailsOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ExportResults: S.optional(__S(50, __c6, 2)),
          ExportSourceImages: S.optional(__S(50, __c6, 2)),
        }),
      ).annotate({ identifier: "ExportErrorDetails" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.String,
          CreationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          DurationInSeconds: S.Number,
          Status: S.String,
          KmsKeyId: S.optional(S.String),
          InputConfig: __S(29, __c3, 5),
          JobConfig: __S(46, __c5, 6),
          OutputBands: S.optional(__S(48, __c6, 0)),
          ExecutionRoleArn: S.optional(S.String),
          ErrorDetails: S.optional(__S(49, __c6, 1)),
          ExportStatus: S.optional(S.String),
          ExportErrorDetails: S.optional(__S(51, __c6, 3)),
          Tags: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({
        identifier: "GetEarthObservationJobOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/raster-data-collection/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRasterDataCollectionInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Type: S.String,
          Minimum: S.optional(S.Number),
          Maximum: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Filter" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55, __c6, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Arn: S.String,
          Type: S.String,
          Description: S.String,
          DescriptionPageUrl: S.String,
          SupportedFilters: __S(56, __c7, 0),
          ImageSourceBands: __S(30, __c3, 6),
          Tags: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({
        identifier: "GetRasterDataCollectionOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          x: S.Number.pipe(T.HttpLabel("x")),
          y: S.Number.pipe(T.HttpLabel("y")),
          z: S.Number.pipe(T.HttpLabel("z")),
          ImageAssets: __S(30, __c3, 6).pipe(T.HttpQuery("ImageAssets")),
          Target: S.String.pipe(T.HttpQuery("Target")),
          Arn: S.String.pipe(T.HttpQuery("Arn")),
          ImageMask: S.optional(S.Boolean).pipe(T.HttpQuery("ImageMask")),
          OutputFormat: S.optional(S.String).pipe(T.HttpQuery("OutputFormat")),
          TimeRangeFilter: S.optional(S.String).pipe(T.HttpQuery("TimeRangeFilter")),
          PropertyFilters: S.optional(S.String).pipe(T.HttpQuery("PropertyFilters")),
          OutputDataType: S.optional(S.String).pipe(T.HttpQuery("OutputDataType")),
          ExecutionRoleArn: S.optional(S.String).pipe(T.HttpQuery("ExecutionRoleArn")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/tile/{z}/{x}/{y}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTileInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ BinaryFile: S.optional(T.StreamingOutput).pipe(T.HttpPayload()) }),
      ).annotate({ identifier: "GetTileOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/vector-enrichment-jobs/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetVectorEnrichmentJobInput",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ S3Data: __S(7, __c0, 7) })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          DocumentType: S.String,
          DataSourceConfig: __S(61, __c7, 5),
        }),
      ).annotate({
        identifier: "VectorEnrichmentJobInputConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ YAttributeName: S.String, XAttributeName: S.String }),
      ).annotate({ identifier: "ReverseGeocodingConfig" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          IdAttributeName: S.String,
          YAttributeName: S.String,
          XAttributeName: S.String,
          TimestampAttributeName: S.String,
        }),
      ).annotate({ identifier: "MapMatchingConfig" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ ReverseGeocodingConfig: __S(63, __c7, 7) }),
        /*@__PURE__*/ S.Struct({ MapMatchingConfig: __S(64, __c8, 0) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({ ErrorType: S.optional(S.String), ErrorMessage: S.optional(S.String) }),
      ).annotate({
        identifier: "VectorEnrichmentJobErrorDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Type: S.String,
          Name: S.String,
          CreationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          DurationInSeconds: S.Number,
          Status: S.String,
          KmsKeyId: S.optional(S.String),
          InputConfig: __S(62, __c7, 6),
          JobConfig: __S(65, __c8, 1),
          ExecutionRoleArn: S.String,
          ErrorDetails: S.optional(__S(66, __c8, 2)),
          ExportStatus: S.optional(S.String),
          ExportErrorDetails: S.optional(__S(49, __c6, 1)),
          Tags: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({
        identifier: "GetVectorEnrichmentJobOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StatusEquals: S.optional(S.String),
          SortOrder: S.optional(S.String),
          SortBy: S.optional(S.String),
          NextToken: S.optional(SensitiveString),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-earth-observation-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEarthObservationJobInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.String,
          CreationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          DurationInSeconds: S.Number,
          Status: S.String,
          OperationType: S.String,
          Tags: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({
        identifier: "ListEarthObservationJobOutputConfig",
      });
    case 6:
      return S.Array(__S(69, __c8, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          EarthObservationJobSummaries: __S(70, __c8, 6),
          NextToken: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "ListEarthObservationJobOutput",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/raster-data-collections" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRasterDataCollectionsInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Arn: S.String,
          Type: S.String,
          Description: S.String,
          DescriptionPageUrl: S.optional(S.String),
          SupportedFilters: __S(56, __c7, 0),
          Tags: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({
        identifier: "RasterDataCollectionMetadata",
      });
    case 2:
      return S.Array(__S(73, __c9, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          RasterDataCollectionSummaries: __S(74, __c9, 2),
          NextToken: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "ListRasterDataCollectionsOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(52, __c6, 4)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StatusEquals: S.optional(S.String),
          SortOrder: S.optional(S.String),
          SortBy: S.optional(S.String),
          NextToken: S.optional(SensitiveString),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-vector-enrichment-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListVectorEnrichmentJobInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.String,
          Type: S.String,
          CreationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          DurationInSeconds: S.Number,
          Status: S.String,
          Tags: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({
        identifier: "ListVectorEnrichmentJobOutputConfig",
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
          VectorEnrichmentJobSummaries: __S(80, __c10, 0),
          NextToken: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "ListVectorEnrichmentJobOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "TimeRangeFilterInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TimeRangeFilter: __S(82, __c10, 2),
          AreaOfInterest: S.optional(__S(20, __c2, 4)),
          PropertyFilters: S.optional(__S(27, __c3, 3)),
          BandFilter: S.optional(__S(30, __c3, 6)),
        }),
      ).annotate({
        identifier: "RasterDataCollectionQueryWithBandFilterInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          RasterDataCollectionQuery: __S(83, __c10, 3),
          NextToken: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/search-raster-data-collection" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SearchRasterDataCollectionInput",
      });
    case 5:
      return S.suspend(() => S.Struct({ Type: S.String, Coordinates: __S(15, __c1, 7) })).annotate({
        identifier: "Geometry",
      });
    case 6:
      return S.suspend(() => S.Struct({ Href: S.optional(S.String) })).annotate({
        identifier: "AssetValue",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(86, __c10, 6).pipe(S.optional));
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EoCloudCover: S.optional(S.Number),
          ViewOffNadir: S.optional(S.Number),
          ViewSunAzimuth: S.optional(S.Number),
          ViewSunElevation: S.optional(S.Number),
          Platform: S.optional(S.String),
          LandsatCloudCoverLand: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Properties" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          Geometry: __S(85, __c10, 5),
          Assets: S.optional(__S(87, __c10, 7)),
          DateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Properties: S.optional(__S(88, __c11, 0)),
        }),
      ).annotate({ identifier: "ItemSource" });
    case 2:
      return S.Array(__S(89, __c11, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApproximateResultCount: S.Number,
          NextToken: S.optional(SensitiveString),
          Items: S.optional(__S(90, __c11, 2)),
        }),
      ).annotate({
        identifier: "SearchRasterDataCollectionOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RasterDataCollectionArn: S.String,
          TimeRangeFilter: __S(82, __c10, 2),
          AreaOfInterest: S.optional(__S(20, __c2, 4)),
          PropertyFilters: S.optional(__S(27, __c3, 3)),
        }),
      ).annotate({
        identifier: "RasterDataCollectionQueryInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PreviousEarthObservationJobArn: S.optional(S.String),
          RasterDataCollectionQuery: S.optional(__S(92, __c11, 4)),
        }),
      ).annotate({ identifier: "InputConfigInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          KmsKeyId: S.optional(S.String),
          InputConfig: __S(93, __c11, 5),
          JobConfig: __S(46, __c5, 6),
          ExecutionRoleArn: S.String,
          Tags: S.optional(__S(52, __c6, 4)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/earth-observation-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartEarthObservationJobInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Arn: S.String,
          CreationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          DurationInSeconds: S.Number,
          Status: S.String,
          KmsKeyId: S.optional(S.String),
          InputConfig: S.optional(__S(29, __c3, 5)),
          JobConfig: __S(46, __c5, 6),
          ExecutionRoleArn: S.String,
          Tags: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({
        identifier: "StartEarthObservationJobOutput",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          KmsKeyId: S.optional(S.String),
          InputConfig: __S(62, __c7, 6),
          JobConfig: __S(65, __c8, 1),
          ExecutionRoleArn: S.String,
          Tags: S.optional(__S(52, __c6, 4)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/vector-enrichment-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartVectorEnrichmentJobInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Arn: S.String,
          Type: S.String,
          CreationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          DurationInSeconds: S.Number,
          Status: S.String,
          KmsKeyId: S.optional(S.String),
          InputConfig: __S(62, __c7, 6),
          JobConfig: __S(65, __c8, 1),
          ExecutionRoleArn: S.String,
          Tags: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({
        identifier: "StartVectorEnrichmentJobOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/earth-observation-jobs/stop" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopEarthObservationJobInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/vector-enrichment-jobs/stop" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopVectorEnrichmentJobInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          Tags: __S(52, __c6, 4),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagKeys: __S(30, __c3, 6).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
