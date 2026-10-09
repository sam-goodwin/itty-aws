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
const DeleteEarthObservationJobInput = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<DeleteEarthObservationJobInput>;
export interface DeleteEarthObservationJobOutput {}
const DeleteEarthObservationJobOutput = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<DeleteEarthObservationJobOutput>;
export type VectorEnrichmentJobArn = string;
export interface DeleteVectorEnrichmentJobInput {
  Arn: string;
}
const DeleteVectorEnrichmentJobInput = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<DeleteVectorEnrichmentJobInput>;
export interface DeleteVectorEnrichmentJobOutput {}
const DeleteVectorEnrichmentJobOutput =
  DeleteEarthObservationJobOutput as any as S.Schema<DeleteVectorEnrichmentJobOutput>;
export type ExecutionRoleArn = string;
export type S3Uri = string;
export type KmsKey = string;
export interface ExportS3DataInput {
  S3Uri: string;
  KmsKeyId?: string;
}
const ExportS3DataInput = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<ExportS3DataInput>;
export interface OutputConfigInput {
  S3Data: ExportS3DataInput;
}
const OutputConfigInput = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<OutputConfigInput>;
export interface ExportEarthObservationJobInput {
  Arn: string;
  ClientToken?: string;
  ExecutionRoleArn: string;
  OutputConfig: OutputConfigInput;
  ExportSourceImages?: boolean;
}
const ExportEarthObservationJobInput = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<ExportEarthObservationJobInput>;
export type EarthObservationJobExportStatus = string;
export interface ExportEarthObservationJobOutput {
  Arn: string;
  CreationTime: Date;
  ExportStatus: string;
  ExecutionRoleArn: string;
  OutputConfig: OutputConfigInput;
  ExportSourceImages?: boolean;
}
const ExportEarthObservationJobOutput = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<ExportEarthObservationJobOutput>;
export interface VectorEnrichmentJobS3Data {
  S3Uri: string;
  KmsKeyId?: string;
}
const VectorEnrichmentJobS3Data = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<VectorEnrichmentJobS3Data>;
export interface ExportVectorEnrichmentJobOutputConfig {
  S3Data: VectorEnrichmentJobS3Data;
}
const ExportVectorEnrichmentJobOutputConfig = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<ExportVectorEnrichmentJobOutputConfig>;
export interface ExportVectorEnrichmentJobInput {
  Arn: string;
  ClientToken?: string;
  ExecutionRoleArn: string;
  OutputConfig: ExportVectorEnrichmentJobOutputConfig;
}
const ExportVectorEnrichmentJobInput = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<ExportVectorEnrichmentJobInput>;
export type VectorEnrichmentJobExportStatus = string;
export interface ExportVectorEnrichmentJobOutput {
  Arn: string;
  CreationTime: Date;
  ExecutionRoleArn: string;
  ExportStatus: string;
  OutputConfig: ExportVectorEnrichmentJobOutputConfig;
}
const ExportVectorEnrichmentJobOutput = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<ExportVectorEnrichmentJobOutput>;
export interface GetEarthObservationJobInput {
  Arn: string;
}
const GetEarthObservationJobInput = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<GetEarthObservationJobInput>;
export type EarthObservationJobStatus = string;
export type DataCollectionArn = string;
export interface TimeRangeFilterOutput {
  StartTime: Date;
  EndTime: Date;
}
const TimeRangeFilterOutput = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<TimeRangeFilterOutput>;
export type Position = number[];
const Position = /*@__PURE__*/ __L.at(__c1, 5);
export type LinearRing = number[][];
const LinearRing = /*@__PURE__*/ __L.at(__c1, 6);
export type LinearRings = number[][][];
const LinearRings = /*@__PURE__*/ __L.at(__c1, 7);
export interface PolygonGeometryInput {
  Coordinates: number[][][];
}
const PolygonGeometryInput = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<PolygonGeometryInput>;
export type LinearRingsList = number[][][][];
const LinearRingsList = /*@__PURE__*/ __L.at(__c2, 1);
export interface MultiPolygonGeometryInput {
  Coordinates: number[][][][];
}
const MultiPolygonGeometryInput = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<MultiPolygonGeometryInput>;
export type AreaOfInterestGeometry =
  | { PolygonGeometry: PolygonGeometryInput; MultiPolygonGeometry?: never }
  | { PolygonGeometry?: never; MultiPolygonGeometry: MultiPolygonGeometryInput };
const AreaOfInterestGeometry = /*@__PURE__*/ __L.at(__c2, 3);
export type AreaOfInterest = { AreaOfInterestGeometry: AreaOfInterestGeometry };
const AreaOfInterest = /*@__PURE__*/ __L.at(__c2, 4);
export interface EoCloudCoverInput {
  LowerBound: number;
  UpperBound: number;
}
const EoCloudCoverInput = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<EoCloudCoverInput>;
export interface ViewOffNadirInput {
  LowerBound: number;
  UpperBound: number;
}
const ViewOffNadirInput = EoCloudCoverInput as any as S.Schema<ViewOffNadirInput>;
export interface ViewSunAzimuthInput {
  LowerBound: number;
  UpperBound: number;
}
const ViewSunAzimuthInput = EoCloudCoverInput as any as S.Schema<ViewSunAzimuthInput>;
export interface ViewSunElevationInput {
  LowerBound: number;
  UpperBound: number;
}
const ViewSunElevationInput = EoCloudCoverInput as any as S.Schema<ViewSunElevationInput>;
export type ComparisonOperator = string;
export interface PlatformInput {
  Value: string;
  ComparisonOperator?: string;
}
const PlatformInput = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<PlatformInput>;
export interface LandsatCloudCoverLandInput {
  LowerBound: number;
  UpperBound: number;
}
const LandsatCloudCoverLandInput = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<LandsatCloudCoverLandInput>;
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
const Property = /*@__PURE__*/ __L.at(__c3, 0);
export interface PropertyFilter {
  Property: Property;
}
const PropertyFilter = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<PropertyFilter>;
export type PropertyFiltersList = PropertyFilter[];
const PropertyFiltersList = /*@__PURE__*/ __L.at(__c3, 2);
export type LogicalOperator = string;
export interface PropertyFilters {
  Properties?: PropertyFilter[];
  LogicalOperator?: string;
}
const PropertyFilters = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<PropertyFilters>;
export interface RasterDataCollectionQueryOutput {
  RasterDataCollectionArn: string;
  RasterDataCollectionName: string;
  TimeRangeFilter: TimeRangeFilterOutput;
  AreaOfInterest?: AreaOfInterest;
  PropertyFilters?: PropertyFilters;
}
const RasterDataCollectionQueryOutput = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<RasterDataCollectionQueryOutput>;
export interface InputConfigOutput {
  PreviousEarthObservationJobArn?: string;
  RasterDataCollectionQuery?: RasterDataCollectionQueryOutput;
}
const InputConfigOutput = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<InputConfigOutput>;
export type StringListInput = string[];
const StringListInput = /*@__PURE__*/ __L.at(__c3, 6);
export type OutputType = string;
export interface Operation {
  Name: string;
  Equation: string;
  OutputType?: string;
}
const Operation = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<Operation>;
export type OperationsListInput = Operation[];
const OperationsListInput = /*@__PURE__*/ __L.at(__c4, 0);
export interface CustomIndicesInput {
  Operations?: Operation[];
}
const CustomIndicesInput = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<CustomIndicesInput>;
export interface BandMathConfigInput {
  PredefinedIndices?: string[];
  CustomIndices?: CustomIndicesInput;
}
const BandMathConfigInput = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<BandMathConfigInput>;
export type Unit = string;
export interface UserDefined {
  Value: number;
  Unit: string;
}
const UserDefined = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<UserDefined>;
export interface OutputResolutionResamplingInput {
  UserDefined: UserDefined;
}
const OutputResolutionResamplingInput = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<OutputResolutionResamplingInput>;
export type AlgorithmNameResampling = string;
export interface ResamplingConfigInput {
  OutputResolution: OutputResolutionResamplingInput;
  AlgorithmName?: string;
  TargetBands?: string[];
}
const ResamplingConfigInput = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<ResamplingConfigInput>;
export type GroupBy = string;
export type TemporalStatistics = string;
export type TemporalStatisticsListInput = string[];
const TemporalStatisticsListInput = StringListInput as any as S.Schema<TemporalStatisticsListInput>;
export interface TemporalStatisticsConfigInput {
  GroupBy?: string;
  Statistics: string[];
  TargetBands?: string[];
}
const TemporalStatisticsConfigInput = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<TemporalStatisticsConfigInput>;
export type AlgorithmNameCloudRemoval = string;
export interface CloudRemovalConfigInput {
  AlgorithmName?: string;
  InterpolationValue?: string;
  TargetBands?: string[];
}
const CloudRemovalConfigInput = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<CloudRemovalConfigInput>;
export type ZonalStatistics = string;
export type ZonalStatisticsListInput = string[];
const ZonalStatisticsListInput = StringListInput as any as S.Schema<ZonalStatisticsListInput>;
export interface ZonalStatisticsConfigInput {
  ZoneS3Path: string;
  Statistics: string[];
  TargetBands?: string[];
  ZoneS3PathKmsKeyId?: string;
}
const ZonalStatisticsConfigInput = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<ZonalStatisticsConfigInput>;
export type AlgorithmNameGeoMosaic = string;
export interface GeoMosaicConfigInput {
  AlgorithmName?: string;
  TargetBands?: string[];
}
const GeoMosaicConfigInput = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<GeoMosaicConfigInput>;
export type PredefinedResolution = string;
export interface OutputResolutionStackInput {
  Predefined?: string;
  UserDefined?: UserDefined;
}
const OutputResolutionStackInput = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<OutputResolutionStackInput>;
export interface StackConfigInput {
  OutputResolution?: OutputResolutionStackInput;
  TargetBands?: string[];
}
const StackConfigInput = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<StackConfigInput>;
export interface CloudMaskingConfigInput {}
const CloudMaskingConfigInput = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<CloudMaskingConfigInput>;
export interface LandCoverSegmentationConfigInput {}
const LandCoverSegmentationConfigInput = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<LandCoverSegmentationConfigInput>;
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
const JobConfigInput = /*@__PURE__*/ __L.at(__c5, 6);
export interface OutputBand {
  BandName: string;
  OutputDataType: string;
}
const OutputBand = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<OutputBand>;
export type EarthObservationJobOutputBands = OutputBand[];
const EarthObservationJobOutputBands = /*@__PURE__*/ __L.at(__c6, 0);
export type EarthObservationJobErrorType = string;
export interface EarthObservationJobErrorDetails {
  Type?: string;
  Message?: string;
}
const EarthObservationJobErrorDetails = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<EarthObservationJobErrorDetails>;
export type ExportErrorType = string;
export interface ExportErrorDetailsOutput {
  Type?: string;
  Message?: string;
}
const ExportErrorDetailsOutput = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<ExportErrorDetailsOutput>;
export interface ExportErrorDetails {
  ExportResults?: ExportErrorDetailsOutput;
  ExportSourceImages?: ExportErrorDetailsOutput;
}
const ExportErrorDetails = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<ExportErrorDetails>;
export type Tags = { [key: string]: string | undefined };
const Tags = /*@__PURE__*/ __L.at(__c6, 4);
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
const GetEarthObservationJobOutput = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<GetEarthObservationJobOutput>;
export interface GetRasterDataCollectionInput {
  Arn: string;
}
const GetRasterDataCollectionInput = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<GetRasterDataCollectionInput>;
export type DataCollectionType = string;
export interface Filter {
  Name: string;
  Type: string;
  Minimum?: number;
  Maximum?: number;
}
const Filter = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<Filter>;
export type FilterList = Filter[];
const FilterList = /*@__PURE__*/ __L.at(__c7, 0);
export type ImageSourceBandList = string[];
const ImageSourceBandList = StringListInput as any as S.Schema<ImageSourceBandList>;
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
const GetRasterDataCollectionOutput = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<GetRasterDataCollectionOutput>;
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
const GetTileInput = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<GetTileInput>;
export interface GetTileOutput {
  BinaryFile?: T.StreamingOutputBody;
}
const GetTileOutput = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<GetTileOutput>;
export interface GetVectorEnrichmentJobInput {
  Arn: string;
}
const GetVectorEnrichmentJobInput = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<GetVectorEnrichmentJobInput>;
export type VectorEnrichmentJobType = string;
export type VectorEnrichmentJobStatus = string;
export type VectorEnrichmentJobDocumentType = string;
export type VectorEnrichmentJobDataSourceConfigInput = { S3Data: VectorEnrichmentJobS3Data };
const VectorEnrichmentJobDataSourceConfigInput = /*@__PURE__*/ __L.at(__c7, 5);
export interface VectorEnrichmentJobInputConfig {
  DocumentType: string;
  DataSourceConfig: VectorEnrichmentJobDataSourceConfigInput;
}
const VectorEnrichmentJobInputConfig = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<VectorEnrichmentJobInputConfig>;
export interface ReverseGeocodingConfig {
  YAttributeName: string;
  XAttributeName: string;
}
const ReverseGeocodingConfig = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<ReverseGeocodingConfig>;
export interface MapMatchingConfig {
  IdAttributeName: string;
  YAttributeName: string;
  XAttributeName: string;
  TimestampAttributeName: string;
}
const MapMatchingConfig = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<MapMatchingConfig>;
export type VectorEnrichmentJobConfig =
  | { ReverseGeocodingConfig: ReverseGeocodingConfig; MapMatchingConfig?: never }
  | { ReverseGeocodingConfig?: never; MapMatchingConfig: MapMatchingConfig };
const VectorEnrichmentJobConfig = /*@__PURE__*/ __L.at(__c8, 1);
export type VectorEnrichmentJobErrorType = string;
export interface VectorEnrichmentJobErrorDetails {
  ErrorType?: string;
  ErrorMessage?: string;
}
const VectorEnrichmentJobErrorDetails = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<VectorEnrichmentJobErrorDetails>;
export type VectorEnrichmentJobExportErrorType = string;
export interface VectorEnrichmentJobExportErrorDetails {
  Type?: string;
  Message?: string;
}
const VectorEnrichmentJobExportErrorDetails =
  EarthObservationJobErrorDetails as any as S.Schema<VectorEnrichmentJobExportErrorDetails>;
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
const GetVectorEnrichmentJobOutput = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<GetVectorEnrichmentJobOutput>;
export type SortOrder = string;
export type NextToken = string | redacted.Redacted<string>;
export interface ListEarthObservationJobInput {
  StatusEquals?: string;
  SortOrder?: string;
  SortBy?: string;
  NextToken?: string | redacted.Redacted<string>;
  MaxResults?: number;
}
const ListEarthObservationJobInput = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<ListEarthObservationJobInput>;
export interface ListEarthObservationJobOutputConfig {
  Arn: string;
  Name: string;
  CreationTime: Date;
  DurationInSeconds: number;
  Status: string;
  OperationType: string;
  Tags?: { [key: string]: string | undefined };
}
const ListEarthObservationJobOutputConfig = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<ListEarthObservationJobOutputConfig>;
export type EarthObservationJobList = ListEarthObservationJobOutputConfig[];
const EarthObservationJobList = /*@__PURE__*/ __L.at(__c8, 6);
export interface ListEarthObservationJobOutput {
  EarthObservationJobSummaries: ListEarthObservationJobOutputConfig[];
  NextToken?: string | redacted.Redacted<string>;
}
const ListEarthObservationJobOutput = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<ListEarthObservationJobOutput>;
export interface ListRasterDataCollectionsInput {
  NextToken?: string | redacted.Redacted<string>;
  MaxResults?: number;
}
const ListRasterDataCollectionsInput = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<ListRasterDataCollectionsInput>;
export interface RasterDataCollectionMetadata {
  Name: string;
  Arn: string;
  Type: string;
  Description: string;
  DescriptionPageUrl?: string;
  SupportedFilters: Filter[];
  Tags?: { [key: string]: string | undefined };
}
const RasterDataCollectionMetadata = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<RasterDataCollectionMetadata>;
export type DataCollectionsList = RasterDataCollectionMetadata[];
const DataCollectionsList = /*@__PURE__*/ __L.at(__c9, 2);
export interface ListRasterDataCollectionsOutput {
  RasterDataCollectionSummaries: RasterDataCollectionMetadata[];
  NextToken?: string | redacted.Redacted<string>;
}
const ListRasterDataCollectionsOutput = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<ListRasterDataCollectionsOutput>;
export type Arn = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListVectorEnrichmentJobInput {
  StatusEquals?: string;
  SortOrder?: string;
  SortBy?: string;
  NextToken?: string | redacted.Redacted<string>;
  MaxResults?: number;
}
const ListVectorEnrichmentJobInput = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<ListVectorEnrichmentJobInput>;
export interface ListVectorEnrichmentJobOutputConfig {
  Arn: string;
  Name: string;
  Type: string;
  CreationTime: Date;
  DurationInSeconds: number;
  Status: string;
  Tags?: { [key: string]: string | undefined };
}
const ListVectorEnrichmentJobOutputConfig = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<ListVectorEnrichmentJobOutputConfig>;
export type VectorEnrichmentJobList = ListVectorEnrichmentJobOutputConfig[];
const VectorEnrichmentJobList = /*@__PURE__*/ __L.at(__c10, 0);
export interface ListVectorEnrichmentJobOutput {
  VectorEnrichmentJobSummaries: ListVectorEnrichmentJobOutputConfig[];
  NextToken?: string | redacted.Redacted<string>;
}
const ListVectorEnrichmentJobOutput = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<ListVectorEnrichmentJobOutput>;
export interface TimeRangeFilterInput {
  StartTime: Date;
  EndTime: Date;
}
const TimeRangeFilterInput = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<TimeRangeFilterInput>;
export interface RasterDataCollectionQueryWithBandFilterInput {
  TimeRangeFilter: TimeRangeFilterInput;
  AreaOfInterest?: AreaOfInterest;
  PropertyFilters?: PropertyFilters;
  BandFilter?: string[];
}
const RasterDataCollectionQueryWithBandFilterInput = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<RasterDataCollectionQueryWithBandFilterInput>;
export interface SearchRasterDataCollectionInput {
  Arn: string;
  RasterDataCollectionQuery: RasterDataCollectionQueryWithBandFilterInput;
  NextToken?: string | redacted.Redacted<string>;
}
const SearchRasterDataCollectionInput = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<SearchRasterDataCollectionInput>;
export interface Geometry {
  Type: string;
  Coordinates: number[][][];
}
const Geometry = /*@__PURE__*/ __L.at(__c10, 5) as any as S.Schema<Geometry>;
export interface AssetValue {
  Href?: string;
}
const AssetValue = /*@__PURE__*/ __L.at(__c10, 6) as any as S.Schema<AssetValue>;
export type AssetsMap = { [key: string]: AssetValue | undefined };
const AssetsMap = /*@__PURE__*/ __L.at(__c10, 7);
export interface Properties {
  EoCloudCover?: number;
  ViewOffNadir?: number;
  ViewSunAzimuth?: number;
  ViewSunElevation?: number;
  Platform?: string;
  LandsatCloudCoverLand?: number;
}
const Properties = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<Properties>;
export interface ItemSource {
  Id: string;
  Geometry: Geometry;
  Assets?: { [key: string]: AssetValue | undefined };
  DateTime: Date;
  Properties?: Properties;
}
const ItemSource = /*@__PURE__*/ __L.at(__c11, 1) as any as S.Schema<ItemSource>;
export type ItemSourceList = ItemSource[];
const ItemSourceList = /*@__PURE__*/ __L.at(__c11, 2);
export interface SearchRasterDataCollectionOutput {
  ApproximateResultCount: number;
  NextToken?: string | redacted.Redacted<string>;
  Items?: ItemSource[];
}
const SearchRasterDataCollectionOutput = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<SearchRasterDataCollectionOutput>;
export interface RasterDataCollectionQueryInput {
  RasterDataCollectionArn: string;
  TimeRangeFilter: TimeRangeFilterInput;
  AreaOfInterest?: AreaOfInterest;
  PropertyFilters?: PropertyFilters;
}
const RasterDataCollectionQueryInput = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<RasterDataCollectionQueryInput>;
export interface InputConfigInput {
  PreviousEarthObservationJobArn?: string;
  RasterDataCollectionQuery?: RasterDataCollectionQueryInput;
}
const InputConfigInput = /*@__PURE__*/ __L.at(__c11, 5) as any as S.Schema<InputConfigInput>;
export interface StartEarthObservationJobInput {
  Name: string;
  ClientToken?: string;
  KmsKeyId?: string;
  InputConfig: InputConfigInput;
  JobConfig: JobConfigInput;
  ExecutionRoleArn: string;
  Tags?: { [key: string]: string | undefined };
}
const StartEarthObservationJobInput = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<StartEarthObservationJobInput>;
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
const StartEarthObservationJobOutput = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<StartEarthObservationJobOutput>;
export interface StartVectorEnrichmentJobInput {
  Name: string;
  ClientToken?: string;
  KmsKeyId?: string;
  InputConfig: VectorEnrichmentJobInputConfig;
  JobConfig: VectorEnrichmentJobConfig;
  ExecutionRoleArn: string;
  Tags?: { [key: string]: string | undefined };
}
const StartVectorEnrichmentJobInput = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<StartVectorEnrichmentJobInput>;
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
const StartVectorEnrichmentJobOutput = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<StartVectorEnrichmentJobOutput>;
export interface StopEarthObservationJobInput {
  Arn: string;
}
const StopEarthObservationJobInput = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<StopEarthObservationJobInput>;
export interface StopEarthObservationJobOutput {}
const StopEarthObservationJobOutput =
  CloudMaskingConfigInput as any as S.Schema<StopEarthObservationJobOutput>;
export interface StopVectorEnrichmentJobInput {
  Arn: string;
}
const StopVectorEnrichmentJobInput = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<StopVectorEnrichmentJobInput>;
export interface StopVectorEnrichmentJobOutput {}
const StopVectorEnrichmentJobOutput =
  CloudMaskingConfigInput as any as S.Schema<StopVectorEnrichmentJobOutput>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c12, 4) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = CloudMaskingConfigInput as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = StringListInput as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = CloudMaskingConfigInput as any as S.Schema<UntagResourceResponse>;
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
  input: DeleteEarthObservationJobInput,
  output: DeleteEarthObservationJobOutput,
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
  input: DeleteVectorEnrichmentJobInput,
  output: DeleteVectorEnrichmentJobOutput,
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
  input: ExportEarthObservationJobInput,
  output: ExportEarthObservationJobOutput,
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
  input: ExportVectorEnrichmentJobInput,
  output: ExportVectorEnrichmentJobOutput,
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
  input: GetEarthObservationJobInput,
  output: GetEarthObservationJobOutput,
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
  input: GetRasterDataCollectionInput,
  output: GetRasterDataCollectionOutput,
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
  input: GetTileInput,
  output: GetTileOutput,
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
  input: GetVectorEnrichmentJobInput,
  output: GetVectorEnrichmentJobOutput,
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
  input: ListEarthObservationJobInput,
  output: ListEarthObservationJobOutput,
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
  input: ListRasterDataCollectionsInput,
  output: ListRasterDataCollectionsOutput,
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
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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
  input: ListVectorEnrichmentJobInput,
  output: ListVectorEnrichmentJobOutput,
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
  input: SearchRasterDataCollectionInput,
  output: SearchRasterDataCollectionOutput,
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
  input: StartEarthObservationJobInput,
  output: StartEarthObservationJobOutput,
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
  input: StartVectorEnrichmentJobInput,
  output: StartVectorEnrichmentJobOutput,
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
  input: StopEarthObservationJobInput,
  output: StopEarthObservationJobOutput,
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
  input: StopVectorEnrichmentJobInput,
  output: StopVectorEnrichmentJobOutput,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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
  input: UntagResourceRequest,
  output: UntagResourceResponse,
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
      return S.suspend(() => S.Struct({ S3Data: ExportS3DataInput })).annotate({
        identifier: "OutputConfigInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ExecutionRoleArn: S.String,
          OutputConfig: OutputConfigInput,
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
          OutputConfig: OutputConfigInput,
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
      return S.suspend(() => S.Struct({ S3Data: VectorEnrichmentJobS3Data })).annotate({
        identifier: "ExportVectorEnrichmentJobOutputConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ExecutionRoleArn: S.String,
          OutputConfig: ExportVectorEnrichmentJobOutputConfig,
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
          OutputConfig: ExportVectorEnrichmentJobOutputConfig,
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
      return S.Array(Position);
    case 7:
      return S.Array(LinearRing);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Coordinates: LinearRings })).annotate({
        identifier: "PolygonGeometryInput",
      });
    case 1:
      return S.Array(LinearRings);
    case 2:
      return S.suspend(() => S.Struct({ Coordinates: LinearRingsList })).annotate({
        identifier: "MultiPolygonGeometryInput",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ PolygonGeometry: PolygonGeometryInput }),
        /*@__PURE__*/ S.Struct({ MultiPolygonGeometry: MultiPolygonGeometryInput }),
      ]);
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ AreaOfInterestGeometry: AreaOfInterestGeometry })]);
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
        /*@__PURE__*/ S.Struct({ EoCloudCover: EoCloudCoverInput }),
        /*@__PURE__*/ S.Struct({ ViewOffNadir: ViewOffNadirInput }),
        /*@__PURE__*/ S.Struct({ ViewSunAzimuth: ViewSunAzimuthInput }),
        /*@__PURE__*/ S.Struct({ ViewSunElevation: ViewSunElevationInput }),
        /*@__PURE__*/ S.Struct({ Platform: PlatformInput }),
        /*@__PURE__*/ S.Struct({ LandsatCloudCoverLand: LandsatCloudCoverLandInput }),
      ]);
    case 1:
      return S.suspend(() => S.Struct({ Property: Property })).annotate({
        identifier: "PropertyFilter",
      });
    case 2:
      return S.Array(PropertyFilter);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Properties: S.optional(PropertyFiltersList),
          LogicalOperator: S.optional(S.String),
        }),
      ).annotate({ identifier: "PropertyFilters" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RasterDataCollectionArn: S.String,
          RasterDataCollectionName: S.String,
          TimeRangeFilter: TimeRangeFilterOutput,
          AreaOfInterest: S.optional(AreaOfInterest),
          PropertyFilters: S.optional(PropertyFilters),
        }),
      ).annotate({
        identifier: "RasterDataCollectionQueryOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PreviousEarthObservationJobArn: S.optional(S.String),
          RasterDataCollectionQuery: S.optional(RasterDataCollectionQueryOutput),
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
      return S.Array(Operation);
    case 1:
      return S.suspend(() => S.Struct({ Operations: S.optional(OperationsListInput) })).annotate({
        identifier: "CustomIndicesInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PredefinedIndices: S.optional(StringListInput),
          CustomIndices: S.optional(CustomIndicesInput),
        }),
      ).annotate({ identifier: "BandMathConfigInput" });
    case 3:
      return S.suspend(() => S.Struct({ Value: S.Number, Unit: S.String })).annotate({
        identifier: "UserDefined",
      });
    case 4:
      return S.suspend(() => S.Struct({ UserDefined: UserDefined })).annotate({
        identifier: "OutputResolutionResamplingInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OutputResolution: OutputResolutionResamplingInput,
          AlgorithmName: S.optional(S.String),
          TargetBands: S.optional(StringListInput),
        }),
      ).annotate({ identifier: "ResamplingConfigInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          GroupBy: S.optional(S.String),
          Statistics: TemporalStatisticsListInput,
          TargetBands: S.optional(StringListInput),
        }),
      ).annotate({
        identifier: "TemporalStatisticsConfigInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AlgorithmName: S.optional(S.String),
          InterpolationValue: S.optional(S.String),
          TargetBands: S.optional(StringListInput),
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
          Statistics: ZonalStatisticsListInput,
          TargetBands: S.optional(StringListInput),
          ZoneS3PathKmsKeyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ZonalStatisticsConfigInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AlgorithmName: S.optional(S.String), TargetBands: S.optional(StringListInput) }),
      ).annotate({ identifier: "GeoMosaicConfigInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Predefined: S.optional(S.String), UserDefined: S.optional(UserDefined) }),
      ).annotate({
        identifier: "OutputResolutionStackInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          OutputResolution: S.optional(OutputResolutionStackInput),
          TargetBands: S.optional(StringListInput),
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
        /*@__PURE__*/ S.Struct({ BandMathConfig: BandMathConfigInput }),
        /*@__PURE__*/ S.Struct({ ResamplingConfig: ResamplingConfigInput }),
        /*@__PURE__*/ S.Struct({ TemporalStatisticsConfig: TemporalStatisticsConfigInput }),
        /*@__PURE__*/ S.Struct({ CloudRemovalConfig: CloudRemovalConfigInput }),
        /*@__PURE__*/ S.Struct({ ZonalStatisticsConfig: ZonalStatisticsConfigInput }),
        /*@__PURE__*/ S.Struct({ GeoMosaicConfig: GeoMosaicConfigInput }),
        /*@__PURE__*/ S.Struct({ StackConfig: StackConfigInput }),
        /*@__PURE__*/ S.Struct({ CloudMaskingConfig: CloudMaskingConfigInput }),
        /*@__PURE__*/ S.Struct({ LandCoverSegmentationConfig: LandCoverSegmentationConfigInput }),
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
      return S.Array(OutputBand);
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
          ExportResults: S.optional(ExportErrorDetailsOutput),
          ExportSourceImages: S.optional(ExportErrorDetailsOutput),
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
          InputConfig: InputConfigOutput,
          JobConfig: JobConfigInput,
          OutputBands: S.optional(EarthObservationJobOutputBands),
          ExecutionRoleArn: S.optional(S.String),
          ErrorDetails: S.optional(EarthObservationJobErrorDetails),
          ExportStatus: S.optional(S.String),
          ExportErrorDetails: S.optional(ExportErrorDetails),
          Tags: S.optional(Tags),
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
      return S.Array(Filter);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Arn: S.String,
          Type: S.String,
          Description: S.String,
          DescriptionPageUrl: S.String,
          SupportedFilters: FilterList,
          ImageSourceBands: ImageSourceBandList,
          Tags: S.optional(Tags),
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
          ImageAssets: StringListInput.pipe(T.HttpQuery("ImageAssets")),
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
      return S.Union([/*@__PURE__*/ S.Struct({ S3Data: VectorEnrichmentJobS3Data })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          DocumentType: S.String,
          DataSourceConfig: VectorEnrichmentJobDataSourceConfigInput,
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
        /*@__PURE__*/ S.Struct({ ReverseGeocodingConfig: ReverseGeocodingConfig }),
        /*@__PURE__*/ S.Struct({ MapMatchingConfig: MapMatchingConfig }),
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
          InputConfig: VectorEnrichmentJobInputConfig,
          JobConfig: VectorEnrichmentJobConfig,
          ExecutionRoleArn: S.String,
          ErrorDetails: S.optional(VectorEnrichmentJobErrorDetails),
          ExportStatus: S.optional(S.String),
          ExportErrorDetails: S.optional(VectorEnrichmentJobExportErrorDetails),
          Tags: S.optional(Tags),
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
          Tags: S.optional(Tags),
        }),
      ).annotate({
        identifier: "ListEarthObservationJobOutputConfig",
      });
    case 6:
      return S.Array(ListEarthObservationJobOutputConfig);
    case 7:
      return S.suspend(() =>
        S.Struct({
          EarthObservationJobSummaries: EarthObservationJobList,
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
          SupportedFilters: FilterList,
          Tags: S.optional(Tags),
        }),
      ).annotate({
        identifier: "RasterDataCollectionMetadata",
      });
    case 2:
      return S.Array(RasterDataCollectionMetadata);
    case 3:
      return S.suspend(() =>
        S.Struct({
          RasterDataCollectionSummaries: DataCollectionsList,
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
      return S.suspend(() => S.Struct({ Tags: S.optional(Tags) })).annotate({
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
          Tags: S.optional(Tags),
        }),
      ).annotate({
        identifier: "ListVectorEnrichmentJobOutputConfig",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ListVectorEnrichmentJobOutputConfig);
    case 1:
      return S.suspend(() =>
        S.Struct({
          VectorEnrichmentJobSummaries: VectorEnrichmentJobList,
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
          TimeRangeFilter: TimeRangeFilterInput,
          AreaOfInterest: S.optional(AreaOfInterest),
          PropertyFilters: S.optional(PropertyFilters),
          BandFilter: S.optional(StringListInput),
        }),
      ).annotate({
        identifier: "RasterDataCollectionQueryWithBandFilterInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          RasterDataCollectionQuery: RasterDataCollectionQueryWithBandFilterInput,
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
      return S.suspend(() => S.Struct({ Type: S.String, Coordinates: LinearRings })).annotate({
        identifier: "Geometry",
      });
    case 6:
      return S.suspend(() => S.Struct({ Href: S.optional(S.String) })).annotate({
        identifier: "AssetValue",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ AssetValue.pipe(S.optional));
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
          Geometry: Geometry,
          Assets: S.optional(AssetsMap),
          DateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Properties: S.optional(Properties),
        }),
      ).annotate({ identifier: "ItemSource" });
    case 2:
      return S.Array(ItemSource);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApproximateResultCount: S.Number,
          NextToken: S.optional(SensitiveString),
          Items: S.optional(ItemSourceList),
        }),
      ).annotate({
        identifier: "SearchRasterDataCollectionOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RasterDataCollectionArn: S.String,
          TimeRangeFilter: TimeRangeFilterInput,
          AreaOfInterest: S.optional(AreaOfInterest),
          PropertyFilters: S.optional(PropertyFilters),
        }),
      ).annotate({
        identifier: "RasterDataCollectionQueryInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PreviousEarthObservationJobArn: S.optional(S.String),
          RasterDataCollectionQuery: S.optional(RasterDataCollectionQueryInput),
        }),
      ).annotate({ identifier: "InputConfigInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          KmsKeyId: S.optional(S.String),
          InputConfig: InputConfigInput,
          JobConfig: JobConfigInput,
          ExecutionRoleArn: S.String,
          Tags: S.optional(Tags),
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
          InputConfig: S.optional(InputConfigOutput),
          JobConfig: JobConfigInput,
          ExecutionRoleArn: S.String,
          Tags: S.optional(Tags),
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
          InputConfig: VectorEnrichmentJobInputConfig,
          JobConfig: VectorEnrichmentJobConfig,
          ExecutionRoleArn: S.String,
          Tags: S.optional(Tags),
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
          InputConfig: VectorEnrichmentJobInputConfig,
          JobConfig: VectorEnrichmentJobConfig,
          ExecutionRoleArn: S.String,
          Tags: S.optional(Tags),
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
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")), Tags: Tags }).pipe(
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
          TagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
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
