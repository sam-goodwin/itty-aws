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
import { SensitiveString, SensitiveBlob } from "../sensitive.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Medical Imaging",
  serviceShapeName: "AHIGatewayService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "medical-imaging" });
const ver = /*@__PURE__*/ T.ServiceVersion("2023-07-19");
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
              `https://medical-imaging-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://medical-imaging-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://medical-imaging.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://medical-imaging.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class NotAcceptableException
  extends /*@__PURE__*/ S.TaggedError<NotAcceptableException>()(
    "NotAcceptableException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(406),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type DatastoreId = string;
export type ImageSetId = string;
export type ImageSetExternalVersionId = string;
export type CopiableAttributes = string | redacted.Redacted<string>;
export interface MetadataCopies {
  copiableAttributes: string | redacted.Redacted<string>;
}
const MetadataCopies = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<MetadataCopies>;
export interface CopySourceImageSetInformation {
  latestVersionId: string;
  DICOMCopies?: MetadataCopies;
}
const CopySourceImageSetInformation = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<CopySourceImageSetInformation>;
export interface CopyDestinationImageSet {
  imageSetId: string;
  latestVersionId: string;
}
const CopyDestinationImageSet = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<CopyDestinationImageSet>;
export interface CopyImageSetInformation {
  sourceImageSet: CopySourceImageSetInformation;
  destinationImageSet?: CopyDestinationImageSet;
}
const CopyImageSetInformation = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<CopyImageSetInformation>;
export interface CopyImageSetRequest {
  datastoreId: string;
  sourceImageSetId: string;
  copyImageSetInformation: CopyImageSetInformation;
  force?: boolean;
  promoteToPrimary?: boolean;
}
const CopyImageSetRequest = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<CopyImageSetRequest>;
export type ImageSetState = "ACTIVE" | "LOCKED" | "DELETED" | (string & {});
const ImageSetState = S.String;

export type ImageSetWorkflowStatus =
  | "CREATED"
  | "COPIED"
  | "COPYING"
  | "COPYING_WITH_READ_ONLY_ACCESS"
  | "COPY_FAILED"
  | "UPDATING"
  | "UPDATING_FOR_STUDY_CONSISTENCY"
  | "UPDATED"
  | "UPDATE_FAILED"
  | "DELETING"
  | "DELETED"
  | "IMPORTING"
  | "IMPORTED"
  | "IMPORT_FAILED"
  | (string & {});
const ImageSetWorkflowStatus = S.String;

export type Arn = string;
export interface CopySourceImageSetProperties {
  imageSetId: string;
  latestVersionId: string;
  imageSetState?: ImageSetState;
  imageSetWorkflowStatus?: ImageSetWorkflowStatus;
  createdAt?: Date;
  updatedAt?: Date;
  imageSetArn?: string;
}
const CopySourceImageSetProperties = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<CopySourceImageSetProperties>;
export interface CopyDestinationImageSetProperties {
  imageSetId: string;
  latestVersionId: string;
  imageSetState?: ImageSetState;
  imageSetWorkflowStatus?: ImageSetWorkflowStatus;
  createdAt?: Date;
  updatedAt?: Date;
  imageSetArn?: string;
}
const CopyDestinationImageSetProperties =
  CopySourceImageSetProperties as any as S.Schema<CopyDestinationImageSetProperties>;
export interface CopyImageSetResponse {
  datastoreId: string;
  sourceImageSetProperties: CopySourceImageSetProperties;
  destinationImageSetProperties: CopyDestinationImageSetProperties;
}
const CopyImageSetResponse = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<CopyImageSetResponse>;
export type DatastoreName = string;
export type ClientToken = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c0, 7);
export type KmsKeyArn = string;
export type LambdaArn = string;
export type LosslessStorageFormat = "HTJ2K" | "JPEG_2000_LOSSLESS" | (string & {});
const LosslessStorageFormat = S.String;

export interface CreateDatastoreRequest {
  datastoreName?: string;
  clientToken: string;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
  lambdaAuthorizerArn?: string;
  losslessStorageFormat?: LosslessStorageFormat;
}
const CreateDatastoreRequest = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<CreateDatastoreRequest>;
export type DatastoreStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETING"
  | "DELETED"
  | (string & {});
const DatastoreStatus = S.String;

export interface CreateDatastoreResponse {
  datastoreId: string;
  datastoreStatus: DatastoreStatus;
}
const CreateDatastoreResponse = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CreateDatastoreResponse>;
export interface DeleteDatastoreRequest {
  datastoreId: string;
}
const DeleteDatastoreRequest = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<DeleteDatastoreRequest>;
export interface DeleteDatastoreResponse {
  datastoreId: string;
  datastoreStatus: DatastoreStatus;
}
const DeleteDatastoreResponse = CreateDatastoreResponse as any as S.Schema<DeleteDatastoreResponse>;
export interface DeleteImageSetRequest {
  datastoreId: string;
  imageSetId: string;
}
const DeleteImageSetRequest = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<DeleteImageSetRequest>;
export interface DeleteImageSetResponse {
  datastoreId: string;
  imageSetId: string;
  imageSetState: ImageSetState;
  imageSetWorkflowStatus: ImageSetWorkflowStatus;
}
const DeleteImageSetResponse = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<DeleteImageSetResponse>;
export interface GetDatastoreRequest {
  datastoreId: string;
}
const GetDatastoreRequest = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<GetDatastoreRequest>;
export interface DatastoreProperties {
  datastoreId: string;
  datastoreName: string;
  datastoreStatus: DatastoreStatus;
  kmsKeyArn?: string;
  lambdaAuthorizerArn?: string;
  losslessStorageFormat?: LosslessStorageFormat;
  datastoreArn?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
const DatastoreProperties = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<DatastoreProperties>;
export interface GetDatastoreResponse {
  datastoreProperties: DatastoreProperties;
}
const GetDatastoreResponse = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<GetDatastoreResponse>;
export type JobId = string;
export interface GetDICOMImportJobRequest {
  datastoreId: string;
  jobId: string;
}
const GetDICOMImportJobRequest = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<GetDICOMImportJobRequest>;
export type JobName = string;
export type JobStatus = "SUBMITTED" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | (string & {});
const JobStatus = S.String;

export type RoleArn = string;
export type S3Uri = string;
export type Message = string;
export type DICOMStudyInstanceUID = string | redacted.Redacted<string>;
export type DICOMSeriesInstanceUID = string | redacted.Redacted<string>;
export type MetadataFilePath = string;
export interface DicomMetadataMapping {
  studyInstanceUID: string | redacted.Redacted<string>;
  seriesInstanceUID?: string | redacted.Redacted<string>;
  metadataFilePath: string;
}
const DicomMetadataMapping = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<DicomMetadataMapping>;
export type DicomMetadataMappings = DicomMetadataMapping[];
const DicomMetadataMappings = /*@__PURE__*/ __L.at(__c2, 2);
export interface DicomJsonMetadataImportConfiguration {
  dicomMetadataMappings: DicomMetadataMapping[];
}
const DicomJsonMetadataImportConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<DicomJsonMetadataImportConfiguration>;
export type ImportConfiguration = {
  dicomJsonMetadataImportConfiguration: DicomJsonMetadataImportConfiguration;
};
const ImportConfiguration = /*@__PURE__*/ __L.at(__c2, 4);
export interface DICOMImportJobProperties {
  jobId: string;
  jobName: string;
  jobStatus: JobStatus;
  datastoreId: string;
  dataAccessRoleArn: string;
  endedAt?: Date;
  submittedAt?: Date;
  inputS3Uri: string;
  outputS3Uri: string;
  message?: string;
  importConfiguration?: ImportConfiguration;
}
const DICOMImportJobProperties = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<DICOMImportJobProperties>;
export interface GetDICOMImportJobResponse {
  jobProperties: DICOMImportJobProperties;
}
const GetDICOMImportJobResponse = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<GetDICOMImportJobResponse>;
export type ImageFrameId = string;
export interface ImageFrameInformation {
  imageFrameId: string;
}
const ImageFrameInformation = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<ImageFrameInformation>;
export interface GetImageFrameRequest {
  datastoreId: string;
  imageSetId: string;
  imageFrameInformation: ImageFrameInformation;
}
const GetImageFrameRequest = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<GetImageFrameRequest>;
export interface GetImageFrameResponse {
  imageFrameBlob: T.StreamingOutputBody;
  contentType?: string;
}
const GetImageFrameResponse = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<GetImageFrameResponse>;
export interface GetImageSetRequest {
  datastoreId: string;
  imageSetId: string;
  versionId?: string;
}
const GetImageSetRequest = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<GetImageSetRequest>;
export interface Overrides {
  forced?: boolean;
}
const Overrides = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<Overrides>;
export type StorageTier = "FREQUENT_ACCESS" | "ARCHIVE_INSTANT_ACCESS" | (string & {});
const StorageTier = S.String;

export interface GetImageSetResponse {
  datastoreId: string;
  imageSetId: string;
  versionId: string;
  imageSetState: ImageSetState;
  imageSetWorkflowStatus?: ImageSetWorkflowStatus;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  message?: string;
  imageSetArn?: string;
  overrides?: Overrides;
  isPrimary?: boolean;
  lastAccessedAt?: Date;
  storageTier?: StorageTier;
}
const GetImageSetResponse = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<GetImageSetResponse>;
export interface GetImageSetMetadataRequest {
  datastoreId: string;
  imageSetId: string;
  versionId?: string;
}
const GetImageSetMetadataRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<GetImageSetMetadataRequest>;
export interface GetImageSetMetadataResponse {
  imageSetMetadataBlob: T.StreamingOutputBody;
  contentType?: string;
  contentEncoding?: string;
}
const GetImageSetMetadataResponse = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<GetImageSetMetadataResponse>;
export type NextToken = string;
export interface ListDatastoresRequest {
  datastoreStatus?: DatastoreStatus;
  nextToken?: string;
  maxResults?: number;
}
const ListDatastoresRequest = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<ListDatastoresRequest>;
export interface DatastoreSummary {
  datastoreId: string;
  datastoreName: string;
  datastoreStatus: DatastoreStatus;
  datastoreArn?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
const DatastoreSummary = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<DatastoreSummary>;
export type DatastoreSummaries = DatastoreSummary[];
const DatastoreSummaries = /*@__PURE__*/ __L.at(__c4, 1);
export interface ListDatastoresResponse {
  datastoreSummaries?: DatastoreSummary[];
  nextToken?: string;
}
const ListDatastoresResponse = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<ListDatastoresResponse>;
export interface ListDICOMImportJobsRequest {
  datastoreId: string;
  jobStatus?: JobStatus;
  nextToken?: string;
  maxResults?: number;
}
const ListDICOMImportJobsRequest = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<ListDICOMImportJobsRequest>;
export interface DICOMImportJobSummary {
  jobId: string;
  jobName: string;
  jobStatus: JobStatus;
  datastoreId: string;
  dataAccessRoleArn?: string;
  endedAt?: Date;
  submittedAt?: Date;
  message?: string;
}
const DICOMImportJobSummary = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<DICOMImportJobSummary>;
export type DICOMImportJobSummaries = DICOMImportJobSummary[];
const DICOMImportJobSummaries = /*@__PURE__*/ __L.at(__c4, 5);
export interface ListDICOMImportJobsResponse {
  jobSummaries: DICOMImportJobSummary[];
  nextToken?: string;
}
const ListDICOMImportJobsResponse = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<ListDICOMImportJobsResponse>;
export interface ListImageSetVersionsRequest {
  datastoreId: string;
  imageSetId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListImageSetVersionsRequest = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<ListImageSetVersionsRequest>;
export interface ImageSetProperties {
  imageSetId: string;
  versionId: string;
  imageSetState: ImageSetState;
  ImageSetWorkflowStatus?: ImageSetWorkflowStatus;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  message?: string;
  overrides?: Overrides;
  isPrimary?: boolean;
}
const ImageSetProperties = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<ImageSetProperties>;
export type ImageSetPropertiesList = ImageSetProperties[];
const ImageSetPropertiesList = /*@__PURE__*/ __L.at(__c5, 1);
export interface ListImageSetVersionsResponse {
  imageSetPropertiesList: ImageSetProperties[];
  nextToken?: string;
}
const ListImageSetVersionsResponse = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<ListImageSetVersionsResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<ListTagsForResourceResponse>;
export type DICOMPatientId = string | redacted.Redacted<string>;
export type DICOMAccessionNumber = string | redacted.Redacted<string>;
export type DICOMStudyId = string | redacted.Redacted<string>;
export type DICOMStudyDate = string | redacted.Redacted<string>;
export type DICOMStudyTime = string | redacted.Redacted<string>;
export interface DICOMStudyDateAndTime {
  DICOMStudyDate: string | redacted.Redacted<string>;
  DICOMStudyTime?: string | redacted.Redacted<string>;
}
const DICOMStudyDateAndTime = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<DICOMStudyDateAndTime>;
export type SearchByAttributeValue =
  | {
      DICOMPatientId: string | redacted.Redacted<string>;
      DICOMAccessionNumber?: never;
      DICOMStudyId?: never;
      DICOMStudyInstanceUID?: never;
      DICOMSeriesInstanceUID?: never;
      createdAt?: never;
      updatedAt?: never;
      DICOMStudyDateAndTime?: never;
      isPrimary?: never;
    }
  | {
      DICOMPatientId?: never;
      DICOMAccessionNumber: string | redacted.Redacted<string>;
      DICOMStudyId?: never;
      DICOMStudyInstanceUID?: never;
      DICOMSeriesInstanceUID?: never;
      createdAt?: never;
      updatedAt?: never;
      DICOMStudyDateAndTime?: never;
      isPrimary?: never;
    }
  | {
      DICOMPatientId?: never;
      DICOMAccessionNumber?: never;
      DICOMStudyId: string | redacted.Redacted<string>;
      DICOMStudyInstanceUID?: never;
      DICOMSeriesInstanceUID?: never;
      createdAt?: never;
      updatedAt?: never;
      DICOMStudyDateAndTime?: never;
      isPrimary?: never;
    }
  | {
      DICOMPatientId?: never;
      DICOMAccessionNumber?: never;
      DICOMStudyId?: never;
      DICOMStudyInstanceUID: string | redacted.Redacted<string>;
      DICOMSeriesInstanceUID?: never;
      createdAt?: never;
      updatedAt?: never;
      DICOMStudyDateAndTime?: never;
      isPrimary?: never;
    }
  | {
      DICOMPatientId?: never;
      DICOMAccessionNumber?: never;
      DICOMStudyId?: never;
      DICOMStudyInstanceUID?: never;
      DICOMSeriesInstanceUID: string | redacted.Redacted<string>;
      createdAt?: never;
      updatedAt?: never;
      DICOMStudyDateAndTime?: never;
      isPrimary?: never;
    }
  | {
      DICOMPatientId?: never;
      DICOMAccessionNumber?: never;
      DICOMStudyId?: never;
      DICOMStudyInstanceUID?: never;
      DICOMSeriesInstanceUID?: never;
      createdAt: Date;
      updatedAt?: never;
      DICOMStudyDateAndTime?: never;
      isPrimary?: never;
    }
  | {
      DICOMPatientId?: never;
      DICOMAccessionNumber?: never;
      DICOMStudyId?: never;
      DICOMStudyInstanceUID?: never;
      DICOMSeriesInstanceUID?: never;
      createdAt?: never;
      updatedAt: Date;
      DICOMStudyDateAndTime?: never;
      isPrimary?: never;
    }
  | {
      DICOMPatientId?: never;
      DICOMAccessionNumber?: never;
      DICOMStudyId?: never;
      DICOMStudyInstanceUID?: never;
      DICOMSeriesInstanceUID?: never;
      createdAt?: never;
      updatedAt?: never;
      DICOMStudyDateAndTime: DICOMStudyDateAndTime;
      isPrimary?: never;
    }
  | {
      DICOMPatientId?: never;
      DICOMAccessionNumber?: never;
      DICOMStudyId?: never;
      DICOMStudyInstanceUID?: never;
      DICOMSeriesInstanceUID?: never;
      createdAt?: never;
      updatedAt?: never;
      DICOMStudyDateAndTime?: never;
      isPrimary: boolean;
    };
const SearchByAttributeValue = /*@__PURE__*/ __L.at(__c5, 6);
export type SearchByAttributeValues = SearchByAttributeValue[];
const SearchByAttributeValues = /*@__PURE__*/ __L.at(__c5, 7);
export type Operator = "EQUAL" | "BETWEEN" | (string & {});
const Operator = S.String;

export interface SearchFilter {
  values: SearchByAttributeValue[];
  operator: Operator;
}
const SearchFilter = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<SearchFilter>;
export type SearchFilters = SearchFilter[];
const SearchFilters = /*@__PURE__*/ __L.at(__c6, 1);
export type SortOrder = "ASC" | "DESC" | (string & {});
const SortOrder = S.String;

export type SortField = "updatedAt" | "createdAt" | "DICOMStudyDateAndTime" | (string & {});
const SortField = S.String;

export interface Sort {
  sortOrder: SortOrder;
  sortField: SortField;
}
const Sort = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<Sort>;
export interface SearchCriteria {
  filters?: SearchFilter[];
  sort?: Sort;
}
const SearchCriteria = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<SearchCriteria>;
export interface SearchImageSetsRequest {
  datastoreId: string;
  searchCriteria?: SearchCriteria;
  maxResults?: number;
  nextToken?: string;
}
const SearchImageSetsRequest = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<SearchImageSetsRequest>;
export type DICOMPatientName = string | redacted.Redacted<string>;
export type DICOMPatientBirthDate = string | redacted.Redacted<string>;
export type DICOMPatientSex = string | redacted.Redacted<string>;
export type DICOMStudyDescription = string | redacted.Redacted<string>;
export type DICOMNumberOfStudyRelatedSeries = number;
export type DICOMNumberOfStudyRelatedInstances = number;
export type DICOMSeriesModality = string | redacted.Redacted<string>;
export type DICOMSeriesBodyPart = string | redacted.Redacted<string>;
export type DICOMSeriesNumber = number;
export interface DICOMTags {
  DICOMPatientId?: string | redacted.Redacted<string>;
  DICOMPatientName?: string | redacted.Redacted<string>;
  DICOMPatientBirthDate?: string | redacted.Redacted<string>;
  DICOMPatientSex?: string | redacted.Redacted<string>;
  DICOMStudyInstanceUID?: string | redacted.Redacted<string>;
  DICOMStudyId?: string | redacted.Redacted<string>;
  DICOMStudyDescription?: string | redacted.Redacted<string>;
  DICOMNumberOfStudyRelatedSeries?: number;
  DICOMNumberOfStudyRelatedInstances?: number;
  DICOMAccessionNumber?: string | redacted.Redacted<string>;
  DICOMSeriesInstanceUID?: string | redacted.Redacted<string>;
  DICOMSeriesModality?: string | redacted.Redacted<string>;
  DICOMSeriesBodyPart?: string | redacted.Redacted<string>;
  DICOMSeriesNumber?: number;
  DICOMStudyDate?: string | redacted.Redacted<string>;
  DICOMStudyTime?: string | redacted.Redacted<string>;
}
const DICOMTags = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<DICOMTags>;
export interface ImageSetsMetadataSummary {
  imageSetId: string;
  version?: number;
  createdAt?: Date;
  updatedAt?: Date;
  lastAccessedAt?: Date;
  storageTier?: StorageTier;
  DICOMTags?: DICOMTags;
  isPrimary?: boolean;
}
const ImageSetsMetadataSummary = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<ImageSetsMetadataSummary>;
export type ImageSetsMetadataSummaries = ImageSetsMetadataSummary[];
const ImageSetsMetadataSummaries = /*@__PURE__*/ __L.at(__c6, 7);
export interface SearchImageSetsResponse {
  imageSetsMetadataSummaries: ImageSetsMetadataSummary[];
  sort?: Sort;
  nextToken?: string;
}
const SearchImageSetsResponse = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<SearchImageSetsResponse>;
export type AwsAccountId = string;
export interface StartDICOMImportJobRequest {
  jobName?: string;
  dataAccessRoleArn: string;
  clientToken: string;
  datastoreId: string;
  inputS3Uri: string;
  outputS3Uri: string;
  inputOwnerAccountId?: string;
  importConfiguration?: ImportConfiguration;
}
const StartDICOMImportJobRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<StartDICOMImportJobRequest>;
export interface StartDICOMImportJobResponse {
  datastoreId: string;
  jobId: string;
  jobStatus: JobStatus;
  submittedAt: Date;
}
const StartDICOMImportJobResponse = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<StartDICOMImportJobResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = /*@__PURE__*/ __L.at(__c7, 5);
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = TagResourceResponse as any as S.Schema<UntagResourceResponse>;
export type DICOMAttribute = Uint8Array | redacted.Redacted<Uint8Array>;
export interface DICOMUpdates {
  removableAttributes?: Uint8Array | redacted.Redacted<Uint8Array>;
  updatableAttributes?: Uint8Array | redacted.Redacted<Uint8Array>;
}
const DICOMUpdates = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<DICOMUpdates>;
export type MetadataUpdates =
  | { DICOMUpdates: DICOMUpdates; revertToVersionId?: never }
  | { DICOMUpdates?: never; revertToVersionId: string };
const MetadataUpdates = /*@__PURE__*/ __L.at(__c8, 0);
export interface UpdateImageSetMetadataRequest {
  datastoreId: string;
  imageSetId: string;
  latestVersionId: string;
  force?: boolean;
  includeStudyImageSets?: boolean;
  updateImageSetMetadataUpdates: MetadataUpdates;
}
const UpdateImageSetMetadataRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<UpdateImageSetMetadataRequest>;
export interface UpdateImageSetMetadataResponse {
  datastoreId: string;
  imageSetId: string;
  latestVersionId: string;
  imageSetState: ImageSetState;
  imageSetWorkflowStatus?: ImageSetWorkflowStatus;
  createdAt?: Date;
  updatedAt?: Date;
  message?: string;
}
const UpdateImageSetMetadataResponse = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<UpdateImageSetMetadataResponse>;
export type CopyImageSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Copy an image set.
 */
export const copyImageSet: API.OperationMethod<
  CopyImageSetRequest,
  CopyImageSetResponse,
  CopyImageSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CopyImageSetRequest,
  output: CopyImageSetResponse,
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
  operationName: "CopyImageSet",
  endpointHostPrefix: "runtime-",
}));

export type CreateDatastoreError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a data store.
 */
export const createDatastore: API.OperationMethod<
  CreateDatastoreRequest,
  CreateDatastoreResponse,
  CreateDatastoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDatastoreRequest,
  output: CreateDatastoreResponse,
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
  operationName: "CreateDatastore",
}));

export type DeleteDatastoreError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete a data store.
 *
 * Before a data store can be deleted, you must first delete all image sets within it.
 */
export const deleteDatastore: API.OperationMethod<
  DeleteDatastoreRequest,
  DeleteDatastoreResponse,
  DeleteDatastoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDatastoreRequest,
  output: DeleteDatastoreResponse,
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
  operationName: "DeleteDatastore",
}));

export type DeleteImageSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete an image set.
 */
export const deleteImageSet: API.OperationMethod<
  DeleteImageSetRequest,
  DeleteImageSetResponse,
  DeleteImageSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteImageSetRequest,
  output: DeleteImageSetResponse,
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
  operationName: "DeleteImageSet",
  endpointHostPrefix: "runtime-",
}));

export type GetDatastoreError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get data store properties.
 */
export const getDatastore: API.OperationMethod<
  GetDatastoreRequest,
  GetDatastoreResponse,
  GetDatastoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDatastoreRequest,
  output: GetDatastoreResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDatastore",
}));

export type GetDICOMImportJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the import job properties to learn more about the job or job progress.
 *
 * The `jobStatus` refers to the execution of the import job. Therefore, an import job can return a `jobStatus` as `COMPLETED` even if validation issues are discovered during the import process. If a `jobStatus` returns as `COMPLETED`, we still recommend you review the output manifests written to S3, as they provide details on the success or failure of individual P10 object imports.
 */
export const getDICOMImportJob: API.OperationMethod<
  GetDICOMImportJobRequest,
  GetDICOMImportJobResponse,
  GetDICOMImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDICOMImportJobRequest,
  output: GetDICOMImportJobResponse,
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
  operationName: "GetDICOMImportJob",
}));

export type GetImageFrameError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | InternalServerException
  | NotAcceptableException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get an image frame (pixel data) for an image set.
 */
export const getImageFrame: API.OperationMethod<
  GetImageFrameRequest,
  GetImageFrameResponse,
  GetImageFrameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetImageFrameRequest,
  output: GetImageFrameResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    InternalServerException,
    NotAcceptableException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetImageFrame",
  endpointHostPrefix: "runtime-",
}));

export type GetImageSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get image set properties.
 */
export const getImageSet: API.OperationMethod<
  GetImageSetRequest,
  GetImageSetResponse,
  GetImageSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetImageSetRequest,
  output: GetImageSetResponse,
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
  operationName: "GetImageSet",
  endpointHostPrefix: "runtime-",
}));

export type GetImageSetMetadataError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get metadata attributes for an image set.
 */
export const getImageSetMetadata: API.OperationMethod<
  GetImageSetMetadataRequest,
  GetImageSetMetadataResponse,
  GetImageSetMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetImageSetMetadataRequest,
  output: GetImageSetMetadataResponse,
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
  operationName: "GetImageSetMetadata",
  endpointHostPrefix: "runtime-",
}));

export type ListDatastoresError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List data stores.
 */
export const listDatastores: API.PaginatedOperationMethod<
  ListDatastoresRequest,
  ListDatastoresResponse,
  ListDatastoresError,
  Credentials | HttpClient.HttpClient,
  DatastoreSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDatastoresRequest,
  output: ListDatastoresResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDatastores",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "datastoreSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDICOMImportJobsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List import jobs created for a specific data store.
 */
export const listDICOMImportJobs: API.PaginatedOperationMethod<
  ListDICOMImportJobsRequest,
  ListDICOMImportJobsResponse,
  ListDICOMImportJobsError,
  Credentials | HttpClient.HttpClient,
  DICOMImportJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDICOMImportJobsRequest,
  output: ListDICOMImportJobsResponse,
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
  operationName: "ListDICOMImportJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListImageSetVersionsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List image set versions.
 */
export const listImageSetVersions: API.PaginatedOperationMethod<
  ListImageSetVersionsRequest,
  ListImageSetVersionsResponse,
  ListImageSetVersionsError,
  Credentials | HttpClient.HttpClient,
  ImageSetProperties
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListImageSetVersionsRequest,
  output: ListImageSetVersionsResponse,
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
  operationName: "ListImageSetVersions",
  endpointHostPrefix: "runtime-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "imageSetPropertiesList",
    pageSize: "maxResults",
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
 * Lists all tags associated with a medical imaging resource.
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

export type SearchImageSetsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Search image sets based on defined input attributes.
 *
 * `SearchImageSets` accepts a single search query parameter and returns a paginated response of all image sets that have the matching criteria. All date range queries must be input as `(lowerBound, upperBound)`.
 *
 * By default, `SearchImageSets` uses the `updatedAt` field for sorting in descending order from newest to oldest.
 */
export const searchImageSets: API.PaginatedOperationMethod<
  SearchImageSetsRequest,
  SearchImageSetsResponse,
  SearchImageSetsError,
  Credentials | HttpClient.HttpClient,
  ImageSetsMetadataSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchImageSetsRequest,
  output: SearchImageSetsResponse,
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
  operationName: "SearchImageSets",
  endpointHostPrefix: "runtime-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "imageSetsMetadataSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type StartDICOMImportJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Start importing bulk data into an `ACTIVE` data store. The import job imports DICOM P10 files or enhances existing DICOM files with JSON metadata. The `importConfiguration` parameter specifies the import type. The data is found in the S3 prefix specified by the `inputS3Uri` parameter. The import job stores processing results in the file specified by the `outputS3Uri` parameter.
 */
export const startDICOMImportJob: API.OperationMethod<
  StartDICOMImportJobRequest,
  StartDICOMImportJobResponse,
  StartDICOMImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartDICOMImportJobRequest,
  output: StartDICOMImportJobResponse,
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
  operationName: "StartDICOMImportJob",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a user-specifed key and value tag to a medical imaging resource.
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
 * Removes tags from a medical imaging resource.
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

export type UpdateImageSetMetadataError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update image set metadata attributes.
 */
export const updateImageSetMetadata: API.OperationMethod<
  UpdateImageSetMetadataRequest,
  UpdateImageSetMetadataResponse,
  UpdateImageSetMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateImageSetMetadataRequest,
  output: UpdateImageSetMetadataResponse,
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
  operationName: "UpdateImageSetMetadata",
  endpointHostPrefix: "runtime-",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ copiableAttributes: SensitiveString })).annotate({
        identifier: "MetadataCopies",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ latestVersionId: S.String, DICOMCopies: S.optional(MetadataCopies) }),
      ).annotate({
        identifier: "CopySourceImageSetInformation",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ imageSetId: S.String, latestVersionId: S.String }),
      ).annotate({ identifier: "CopyDestinationImageSet" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sourceImageSet: CopySourceImageSetInformation,
          destinationImageSet: S.optional(CopyDestinationImageSet),
        }),
      ).annotate({ identifier: "CopyImageSetInformation" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String.pipe(T.HttpLabel("datastoreId")),
          sourceImageSetId: S.String.pipe(T.HttpLabel("sourceImageSetId")),
          copyImageSetInformation: CopyImageSetInformation.pipe(T.HttpPayload()).annotate({
            identifier: "CopyImageSetInformation",
          }),
          force: S.optional(S.Boolean).pipe(T.HttpQuery("force")),
          promoteToPrimary: S.optional(S.Boolean).pipe(T.HttpQuery("promoteToPrimary")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/datastore/{datastoreId}/imageSet/{sourceImageSetId}/copyImageSet",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CopyImageSetRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          imageSetId: S.String,
          latestVersionId: S.String,
          imageSetState: S.optional(ImageSetState),
          imageSetWorkflowStatus: S.optional(ImageSetWorkflowStatus),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          imageSetArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CopySourceImageSetProperties",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String,
          sourceImageSetProperties: CopySourceImageSetProperties,
          destinationImageSetProperties: CopyDestinationImageSetProperties,
        }),
      ).annotate({ identifier: "CopyImageSetResponse" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          datastoreName: S.optional(S.String),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
          kmsKeyArn: S.optional(S.String),
          lambdaAuthorizerArn: S.optional(S.String),
          losslessStorageFormat: S.optional(LosslessStorageFormat),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/datastore" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDatastoreRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ datastoreId: S.String, datastoreStatus: DatastoreStatus }),
      ).annotate({ identifier: "CreateDatastoreResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ datastoreId: S.String.pipe(T.HttpLabel("datastoreId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/datastore/{datastoreId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDatastoreRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String.pipe(T.HttpLabel("datastoreId")),
          imageSetId: S.String.pipe(T.HttpLabel("imageSetId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/datastore/{datastoreId}/imageSet/{imageSetId}/deleteImageSet",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteImageSetRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String,
          imageSetId: S.String,
          imageSetState: ImageSetState,
          imageSetWorkflowStatus: ImageSetWorkflowStatus,
        }),
      ).annotate({ identifier: "DeleteImageSetResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ datastoreId: S.String.pipe(T.HttpLabel("datastoreId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/datastore/{datastoreId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDatastoreRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String,
          datastoreName: S.String,
          datastoreStatus: DatastoreStatus,
          kmsKeyArn: S.optional(S.String),
          lambdaAuthorizerArn: S.optional(S.String),
          losslessStorageFormat: S.optional(LosslessStorageFormat),
          datastoreArn: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DatastoreProperties" });
    case 7:
      return S.suspend(() => S.Struct({ datastoreProperties: DatastoreProperties })).annotate({
        identifier: "GetDatastoreResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String.pipe(T.HttpLabel("datastoreId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/getDICOMImportJob/datastore/{datastoreId}/job/{jobId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDICOMImportJobRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          studyInstanceUID: SensitiveString,
          seriesInstanceUID: S.optional(SensitiveString),
          metadataFilePath: S.String,
        }),
      ).annotate({ identifier: "DicomMetadataMapping" });
    case 2:
      return S.Array(DicomMetadataMapping);
    case 3:
      return S.suspend(() => S.Struct({ dicomMetadataMappings: DicomMetadataMappings })).annotate({
        identifier: "DicomJsonMetadataImportConfiguration",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          dicomJsonMetadataImportConfiguration: DicomJsonMetadataImportConfiguration,
        }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          jobName: S.String,
          jobStatus: JobStatus,
          datastoreId: S.String,
          dataAccessRoleArn: S.String,
          endedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          submittedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          inputS3Uri: S.String,
          outputS3Uri: S.String,
          message: S.optional(S.String),
          importConfiguration: S.optional(ImportConfiguration),
        }),
      ).annotate({ identifier: "DICOMImportJobProperties" });
    case 6:
      return S.suspend(() => S.Struct({ jobProperties: DICOMImportJobProperties })).annotate({
        identifier: "GetDICOMImportJobResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ imageFrameId: S.String })).annotate({
        identifier: "ImageFrameInformation",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String.pipe(T.HttpLabel("datastoreId")),
          imageSetId: S.String.pipe(T.HttpLabel("imageSetId")),
          imageFrameInformation: ImageFrameInformation.pipe(T.HttpPayload()).annotate({
            identifier: "ImageFrameInformation",
          }),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/datastore/{datastoreId}/imageSet/{imageSetId}/getImageFrame",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetImageFrameRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          imageFrameBlob: T.StreamingOutput.pipe(T.HttpPayload()),
          contentType: S.optional(S.String).pipe(T.HttpHeader("Content-Type")),
        }),
      ).annotate({ identifier: "GetImageFrameResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String.pipe(T.HttpLabel("datastoreId")),
          imageSetId: S.String.pipe(T.HttpLabel("imageSetId")),
          versionId: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/datastore/{datastoreId}/imageSet/{imageSetId}/getImageSet",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetImageSetRequest" });
    case 3:
      return S.suspend(() => S.Struct({ forced: S.optional(S.Boolean) })).annotate({
        identifier: "Overrides",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String,
          imageSetId: S.String,
          versionId: S.String,
          imageSetState: ImageSetState,
          imageSetWorkflowStatus: S.optional(ImageSetWorkflowStatus),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          deletedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          message: S.optional(S.String),
          imageSetArn: S.optional(S.String),
          overrides: S.optional(Overrides),
          isPrimary: S.optional(S.Boolean),
          lastAccessedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          storageTier: S.optional(StorageTier),
        }),
      ).annotate({ identifier: "GetImageSetResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String.pipe(T.HttpLabel("datastoreId")),
          imageSetId: S.String.pipe(T.HttpLabel("imageSetId")),
          versionId: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/datastore/{datastoreId}/imageSet/{imageSetId}/getImageSetMetadata",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetImageSetMetadataRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          imageSetMetadataBlob: T.StreamingOutput.pipe(T.HttpPayload()),
          contentType: S.optional(S.String).pipe(T.HttpHeader("Content-Type")),
          contentEncoding: S.optional(S.String).pipe(T.HttpHeader("Content-Encoding")),
        }),
      ).annotate({
        identifier: "GetImageSetMetadataResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          datastoreStatus: S.optional(DatastoreStatus).pipe(T.HttpQuery("datastoreStatus")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/datastore" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDatastoresRequest" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String,
          datastoreName: S.String,
          datastoreStatus: DatastoreStatus,
          datastoreArn: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DatastoreSummary" });
    case 1:
      return S.Array(DatastoreSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          datastoreSummaries: S.optional(DatastoreSummaries),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListDatastoresResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String.pipe(T.HttpLabel("datastoreId")),
          jobStatus: S.optional(JobStatus).pipe(T.HttpQuery("jobStatus")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/listDICOMImportJobs/datastore/{datastoreId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDICOMImportJobsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          jobName: S.String,
          jobStatus: JobStatus,
          datastoreId: S.String,
          dataAccessRoleArn: S.optional(S.String),
          endedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          submittedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "DICOMImportJobSummary" });
    case 5:
      return S.Array(DICOMImportJobSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ jobSummaries: DICOMImportJobSummaries, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDICOMImportJobsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String.pipe(T.HttpLabel("datastoreId")),
          imageSetId: S.String.pipe(T.HttpLabel("imageSetId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/datastore/{datastoreId}/imageSet/{imageSetId}/listImageSetVersions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListImageSetVersionsRequest",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          imageSetId: S.String,
          versionId: S.String,
          imageSetState: ImageSetState,
          ImageSetWorkflowStatus: S.optional(ImageSetWorkflowStatus),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          deletedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          message: S.optional(S.String),
          overrides: S.optional(Overrides),
          isPrimary: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ImageSetProperties" });
    case 1:
      return S.Array(ImageSetProperties);
    case 2:
      return S.suspend(() =>
        S.Struct({
          imageSetPropertiesList: ImageSetPropertiesList,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListImageSetVersionsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
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
    case 4:
      return S.suspend(() => S.Struct({ tags: TagMap })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DICOMStudyDate: SensitiveString, DICOMStudyTime: S.optional(SensitiveString) }),
      ).annotate({ identifier: "DICOMStudyDateAndTime" });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ DICOMPatientId: SensitiveString }),
        /*@__PURE__*/ S.Struct({ DICOMAccessionNumber: SensitiveString }),
        /*@__PURE__*/ S.Struct({ DICOMStudyId: SensitiveString }),
        /*@__PURE__*/ S.Struct({ DICOMStudyInstanceUID: SensitiveString }),
        /*@__PURE__*/ S.Struct({ DICOMSeriesInstanceUID: SensitiveString }),
        /*@__PURE__*/ S.Struct({
          createdAt: /*@__PURE__*/ S.Date.pipe(/*@__PURE__*/ T.TimestampFormat("epoch-seconds")),
        }),
        /*@__PURE__*/ S.Struct({
          updatedAt: /*@__PURE__*/ S.Date.pipe(/*@__PURE__*/ T.TimestampFormat("epoch-seconds")),
        }),
        /*@__PURE__*/ S.Struct({ DICOMStudyDateAndTime: DICOMStudyDateAndTime }),
        /*@__PURE__*/ S.Struct({ isPrimary: S.Boolean }),
      ]);
    case 7:
      return S.Array(SearchByAttributeValue);
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ values: SearchByAttributeValues, operator: Operator }),
      ).annotate({ identifier: "SearchFilter" });
    case 1:
      return S.Array(SearchFilter);
    case 2:
      return S.suspend(() => S.Struct({ sortOrder: SortOrder, sortField: SortField })).annotate({
        identifier: "Sort",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ filters: S.optional(SearchFilters), sort: S.optional(Sort) }),
      ).annotate({ identifier: "SearchCriteria" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String.pipe(T.HttpLabel("datastoreId")),
          searchCriteria: S.optional(SearchCriteria)
            .pipe(T.HttpPayload())
            .annotate({ identifier: "SearchCriteria" }),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/datastore/{datastoreId}/searchImageSets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchImageSetsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DICOMPatientId: S.optional(SensitiveString),
          DICOMPatientName: S.optional(SensitiveString),
          DICOMPatientBirthDate: S.optional(SensitiveString),
          DICOMPatientSex: S.optional(SensitiveString),
          DICOMStudyInstanceUID: S.optional(SensitiveString),
          DICOMStudyId: S.optional(SensitiveString),
          DICOMStudyDescription: S.optional(SensitiveString),
          DICOMNumberOfStudyRelatedSeries: S.optional(S.Number),
          DICOMNumberOfStudyRelatedInstances: S.optional(S.Number),
          DICOMAccessionNumber: S.optional(SensitiveString),
          DICOMSeriesInstanceUID: S.optional(SensitiveString),
          DICOMSeriesModality: S.optional(SensitiveString),
          DICOMSeriesBodyPart: S.optional(SensitiveString),
          DICOMSeriesNumber: S.optional(S.Number),
          DICOMStudyDate: S.optional(SensitiveString),
          DICOMStudyTime: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "DICOMTags" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          imageSetId: S.String,
          version: S.optional(S.Number),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastAccessedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          storageTier: S.optional(StorageTier),
          DICOMTags: S.optional(DICOMTags),
          isPrimary: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ImageSetsMetadataSummary" });
    case 7:
      return S.Array(ImageSetsMetadataSummary);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          imageSetsMetadataSummaries: ImageSetsMetadataSummaries,
          sort: S.optional(Sort),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "SearchImageSetsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          jobName: S.optional(S.String),
          dataAccessRoleArn: S.String,
          clientToken: S.String.pipe(T.IdempotencyToken()),
          datastoreId: S.String.pipe(T.HttpLabel("datastoreId")),
          inputS3Uri: S.String,
          outputS3Uri: S.String,
          inputOwnerAccountId: S.optional(S.String),
          importConfiguration: S.optional(ImportConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/startDICOMImportJob/datastore/{datastoreId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartDICOMImportJobRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String,
          jobId: S.String,
          jobStatus: JobStatus,
          submittedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "StartDICOMImportJobResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagMap }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          removableAttributes: S.optional(SensitiveBlob),
          updatableAttributes: S.optional(SensitiveBlob),
        }),
      ).annotate({ identifier: "DICOMUpdates" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ DICOMUpdates: DICOMUpdates }),
        /*@__PURE__*/ S.Struct({ revertToVersionId: S.String }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String.pipe(T.HttpLabel("datastoreId")),
          imageSetId: S.String.pipe(T.HttpLabel("imageSetId")),
          latestVersionId: S.String.pipe(T.HttpQuery("latestVersion")),
          force: S.optional(S.Boolean).pipe(T.HttpQuery("force")),
          includeStudyImageSets: S.optional(S.Boolean).pipe(T.HttpQuery("includeStudyImageSets")),
          updateImageSetMetadataUpdates: MetadataUpdates.pipe(T.HttpPayload()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/datastore/{datastoreId}/imageSet/{imageSetId}/updateImageSetMetadata",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateImageSetMetadataRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          datastoreId: S.String,
          imageSetId: S.String,
          latestVersionId: S.String,
          imageSetState: ImageSetState,
          imageSetWorkflowStatus: S.optional(ImageSetWorkflowStatus),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateImageSetMetadataResponse",
      });
  }
}
