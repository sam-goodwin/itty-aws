import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "Textract", serviceShapeName: "Textract" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "textract" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-06-27");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
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
              `https://textract-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://textract-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://textract.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://textract.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()("AccessDeniedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }).pipe(C.withAuthError) {}
export class BadDocumentException
  extends /*@__PURE__*/ S.TaggedError<BadDocumentException>()("BadDocumentException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()("ConflictException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class DocumentTooLargeException
  extends /*@__PURE__*/ S.TaggedError<DocumentTooLargeException>()("DocumentTooLargeException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class HumanLoopQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<HumanLoopQuotaExceededException>()(
    "HumanLoopQuotaExceededException",
    {
      ResourceType: /*@__PURE__*/ S.optional(S.String),
      QuotaCode: /*@__PURE__*/ S.optional(S.String),
      ServiceCode: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class IdempotentParameterMismatchException
  extends /*@__PURE__*/ S.TaggedError<IdempotentParameterMismatchException>()(
    "IdempotentParameterMismatchException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class InternalServerError
  extends /*@__PURE__*/ S.TaggedError<InternalServerError>()("InternalServerError", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class InvalidJobIdException
  extends /*@__PURE__*/ S.TaggedError<InvalidJobIdException>()("InvalidJobIdException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class InvalidKMSKeyException
  extends /*@__PURE__*/ S.TaggedError<InvalidKMSKeyException>()("InvalidKMSKeyException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()("InvalidParameterException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class InvalidS3ObjectException
  extends /*@__PURE__*/ S.TaggedError<InvalidS3ObjectException>()("InvalidS3ObjectException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()("LimitExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class ProvisionedThroughputExceededException
  extends /*@__PURE__*/ S.TaggedError<ProvisionedThroughputExceededException>()(
    "ProvisionedThroughputExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()("ThrottlingException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class UnsupportedDocumentException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedDocumentException>()(
    "UnsupportedDocumentException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()("ValidationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export type ImageBlob = Uint8Array;
export type S3Bucket = string;
export type S3ObjectName = string;
export type S3ObjectVersion = string;
export interface S3Object {
  Bucket?: string;
  Name?: string;
  Version?: string;
}
const S3Object = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<S3Object>;
export interface Document {
  Bytes?: Uint8Array;
  S3Object?: S3Object;
}
const Document = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<Document>;
export type FeatureType = "TABLES" | "FORMS" | "QUERIES" | "SIGNATURES" | "LAYOUT" | (string & {});
const FeatureType = S.String;

export type FeatureTypes = FeatureType[];
const FeatureTypes = /*@__PURE__*/ __L.at(__c0, 2);
export type HumanLoopName = string;
export type FlowDefinitionArn = string;
export type ContentClassifier =
  | "FreeOfPersonallyIdentifiableInformation"
  | "FreeOfAdultContent"
  | (string & {});
export type ContentClassifiers = ContentClassifier[];
const ContentClassifiers = FeatureTypes as any as S.Schema<ContentClassifiers>;
export interface HumanLoopDataAttributes {
  ContentClassifiers?: ContentClassifier[];
}
const HumanLoopDataAttributes = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<HumanLoopDataAttributes>;
export interface HumanLoopConfig {
  HumanLoopName: string;
  FlowDefinitionArn: string;
  DataAttributes?: HumanLoopDataAttributes;
}
const HumanLoopConfig = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<HumanLoopConfig>;
export type QueryInput = string;
export type QueryPage = string;
export type QueryPages = string[];
const QueryPages = /*@__PURE__*/ __L.at(__c0, 5);
export interface Query {
  Text: string;
  Alias?: string;
  Pages?: string[];
}
const Query = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<Query>;
export type Queries = Query[];
const Queries = /*@__PURE__*/ __L.at(__c0, 7);
export interface QueriesConfig {
  Queries: Query[];
}
const QueriesConfig = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<QueriesConfig>;
export type AdapterId = string;
export type AdapterPage = string;
export type AdapterPages = string[];
const AdapterPages = QueryPages as any as S.Schema<AdapterPages>;
export type AdapterVersion = string;
export interface Adapter {
  AdapterId: string;
  Pages?: string[];
  Version: string;
}
const Adapter = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<Adapter>;
export type Adapters = Adapter[];
const Adapters = /*@__PURE__*/ __L.at(__c1, 2);
export interface AdaptersConfig {
  Adapters: Adapter[];
}
const AdaptersConfig = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<AdaptersConfig>;
export interface AnalyzeDocumentRequest {
  Document: Document;
  FeatureTypes: FeatureType[];
  HumanLoopConfig?: HumanLoopConfig;
  QueriesConfig?: QueriesConfig;
  AdaptersConfig?: AdaptersConfig;
}
const AnalyzeDocumentRequest = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<AnalyzeDocumentRequest>;
export type UInteger = number;
export interface DocumentMetadata {
  Pages?: number;
}
const DocumentMetadata = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<DocumentMetadata>;
export type BlockType =
  | "KEY_VALUE_SET"
  | "PAGE"
  | "LINE"
  | "WORD"
  | "TABLE"
  | "CELL"
  | "SELECTION_ELEMENT"
  | "MERGED_CELL"
  | "TITLE"
  | "QUERY"
  | "QUERY_RESULT"
  | "SIGNATURE"
  | "TABLE_TITLE"
  | "TABLE_FOOTER"
  | "LAYOUT_TEXT"
  | "LAYOUT_TITLE"
  | "LAYOUT_HEADER"
  | "LAYOUT_FOOTER"
  | "LAYOUT_SECTION_HEADER"
  | "LAYOUT_PAGE_NUMBER"
  | "LAYOUT_LIST"
  | "LAYOUT_FIGURE"
  | "LAYOUT_TABLE"
  | "LAYOUT_KEY_VALUE"
  | (string & {});
const BlockType = S.String;

export type Percent = number;
export type TextType = "HANDWRITING" | "PRINTED" | (string & {});
const TextType = S.String;

export interface BoundingBox {
  Width?: number;
  Height?: number;
  Left?: number;
  Top?: number;
}
const BoundingBox = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<BoundingBox>;
export interface Point {
  X?: number;
  Y?: number;
}
const Point = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<Point>;
export type Polygon = Point[];
const Polygon = /*@__PURE__*/ __L.at(__c2, 0);
export type Angle = number;
export interface Geometry {
  BoundingBox?: BoundingBox;
  Polygon?: Point[];
  RotationAngle?: number;
}
const Geometry = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<Geometry>;
export type NonEmptyString = string;
export type RelationshipType =
  | "VALUE"
  | "CHILD"
  | "COMPLEX_FEATURES"
  | "MERGED_CELL"
  | "TITLE"
  | "ANSWER"
  | "TABLE"
  | "TABLE_TITLE"
  | "TABLE_FOOTER"
  | (string & {});
const RelationshipType = S.String;

export type IdList = string[];
const IdList = QueryPages as any as S.Schema<IdList>;
export interface Relationship {
  Type?: RelationshipType;
  Ids?: string[];
}
const Relationship = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<Relationship>;
export type RelationshipList = Relationship[];
const RelationshipList = /*@__PURE__*/ __L.at(__c2, 3);
export type EntityType =
  | "KEY"
  | "VALUE"
  | "COLUMN_HEADER"
  | "TABLE_TITLE"
  | "TABLE_FOOTER"
  | "TABLE_SECTION_TITLE"
  | "TABLE_SUMMARY"
  | "STRUCTURED_TABLE"
  | "SEMI_STRUCTURED_TABLE"
  | (string & {});
export type EntityTypes = EntityType[];
const EntityTypes = FeatureTypes as any as S.Schema<EntityTypes>;
export type SelectionStatus = "SELECTED" | "NOT_SELECTED" | (string & {});
const SelectionStatus = S.String;

export interface Block {
  BlockType?: BlockType;
  Confidence?: number;
  Text?: string;
  TextType?: TextType;
  RowIndex?: number;
  ColumnIndex?: number;
  RowSpan?: number;
  ColumnSpan?: number;
  Geometry?: Geometry;
  Id?: string;
  Relationships?: Relationship[];
  EntityTypes?: EntityType[];
  SelectionStatus?: SelectionStatus;
  Page?: number;
  Query?: Query;
}
const Block = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<Block>;
export type BlockList = Block[];
const BlockList = /*@__PURE__*/ __L.at(__c2, 5);
export type HumanLoopArn = string;
export type HumanLoopActivationReason = string;
export type HumanLoopActivationReasons = string[];
const HumanLoopActivationReasons = QueryPages as any as S.Schema<HumanLoopActivationReasons>;
export type SynthesizedJsonHumanLoopActivationConditionsEvaluationResults = string;
export interface HumanLoopActivationOutput {
  HumanLoopArn?: string;
  HumanLoopActivationReasons?: string[];
  HumanLoopActivationConditionsEvaluationResults?: string;
}
const HumanLoopActivationOutput = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<HumanLoopActivationOutput>;
export interface AnalyzeDocumentResponse {
  DocumentMetadata?: DocumentMetadata;
  Blocks?: Block[];
  HumanLoopActivationOutput?: HumanLoopActivationOutput;
  AnalyzeDocumentModelVersion?: string;
}
const AnalyzeDocumentResponse = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<AnalyzeDocumentResponse>;
export interface AnalyzeExpenseRequest {
  Document: Document;
}
const AnalyzeExpenseRequest = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<AnalyzeExpenseRequest>;
export interface ExpenseType {
  Text?: string;
  Confidence?: number;
}
const ExpenseType = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<ExpenseType>;
export interface ExpenseDetection {
  Text?: string;
  Geometry?: Geometry;
  Confidence?: number;
}
const ExpenseDetection = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<ExpenseDetection>;
export interface ExpenseCurrency {
  Code?: string;
  Confidence?: number;
}
const ExpenseCurrency = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<ExpenseCurrency>;
export type StringList = string[];
const StringList = QueryPages as any as S.Schema<StringList>;
export interface ExpenseGroupProperty {
  Types?: string[];
  Id?: string;
}
const ExpenseGroupProperty = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<ExpenseGroupProperty>;
export type ExpenseGroupPropertyList = ExpenseGroupProperty[];
const ExpenseGroupPropertyList = /*@__PURE__*/ __L.at(__c3, 5);
export interface ExpenseField {
  Type?: ExpenseType;
  LabelDetection?: ExpenseDetection;
  ValueDetection?: ExpenseDetection;
  PageNumber?: number;
  Currency?: ExpenseCurrency;
  GroupProperties?: ExpenseGroupProperty[];
}
const ExpenseField = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<ExpenseField>;
export type ExpenseFieldList = ExpenseField[];
const ExpenseFieldList = /*@__PURE__*/ __L.at(__c3, 7);
export interface LineItemFields {
  LineItemExpenseFields?: ExpenseField[];
}
const LineItemFields = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<LineItemFields>;
export type LineItemList = LineItemFields[];
const LineItemList = /*@__PURE__*/ __L.at(__c4, 1);
export interface LineItemGroup {
  LineItemGroupIndex?: number;
  LineItems?: LineItemFields[];
}
const LineItemGroup = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<LineItemGroup>;
export type LineItemGroupList = LineItemGroup[];
const LineItemGroupList = /*@__PURE__*/ __L.at(__c4, 3);
export interface ExpenseDocument {
  ExpenseIndex?: number;
  SummaryFields?: ExpenseField[];
  LineItemGroups?: LineItemGroup[];
  Blocks?: Block[];
}
const ExpenseDocument = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<ExpenseDocument>;
export type ExpenseDocumentList = ExpenseDocument[];
const ExpenseDocumentList = /*@__PURE__*/ __L.at(__c4, 5);
export interface AnalyzeExpenseResponse {
  DocumentMetadata?: DocumentMetadata;
  ExpenseDocuments?: ExpenseDocument[];
}
const AnalyzeExpenseResponse = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<AnalyzeExpenseResponse>;
export type DocumentPages = Document[];
const DocumentPages = /*@__PURE__*/ __L.at(__c4, 7);
export interface AnalyzeIDRequest {
  DocumentPages: Document[];
}
const AnalyzeIDRequest = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<AnalyzeIDRequest>;
export type ValueType = "DATE" | (string & {});
const ValueType = S.String;

export interface NormalizedValue {
  Value?: string;
  ValueType?: ValueType;
}
const NormalizedValue = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<NormalizedValue>;
export interface AnalyzeIDDetections {
  Text: string;
  NormalizedValue?: NormalizedValue;
  Confidence?: number;
}
const AnalyzeIDDetections = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<AnalyzeIDDetections>;
export interface IdentityDocumentField {
  Type?: AnalyzeIDDetections;
  ValueDetection?: AnalyzeIDDetections;
}
const IdentityDocumentField = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<IdentityDocumentField>;
export type IdentityDocumentFieldList = IdentityDocumentField[];
const IdentityDocumentFieldList = /*@__PURE__*/ __L.at(__c5, 4);
export interface IdentityDocument {
  DocumentIndex?: number;
  IdentityDocumentFields?: IdentityDocumentField[];
  Blocks?: Block[];
}
const IdentityDocument = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<IdentityDocument>;
export type IdentityDocumentList = IdentityDocument[];
const IdentityDocumentList = /*@__PURE__*/ __L.at(__c5, 6);
export interface AnalyzeIDResponse {
  IdentityDocuments?: IdentityDocument[];
  DocumentMetadata?: DocumentMetadata;
  AnalyzeIDModelVersion?: string;
}
const AnalyzeIDResponse = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<AnalyzeIDResponse>;
export type AdapterName = string;
export type ClientRequestToken = string;
export type AdapterDescription = string;
export type AutoUpdate = "ENABLED" | "DISABLED" | (string & {});
const AutoUpdate = S.String;

export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c6, 0);
export interface CreateAdapterRequest {
  AdapterName: string;
  ClientRequestToken?: string;
  Description?: string;
  FeatureTypes: FeatureType[];
  AutoUpdate?: AutoUpdate;
  Tags?: { [key: string]: string | undefined };
}
const CreateAdapterRequest = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<CreateAdapterRequest>;
export interface CreateAdapterResponse {
  AdapterId?: string;
}
const CreateAdapterResponse = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<CreateAdapterResponse>;
export interface AdapterVersionDatasetConfig {
  ManifestS3Object?: S3Object;
}
const AdapterVersionDatasetConfig = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<AdapterVersionDatasetConfig>;
export type KMSKeyId = string;
export interface OutputConfig {
  S3Bucket: string;
  S3Prefix?: string;
}
const OutputConfig = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<OutputConfig>;
export interface CreateAdapterVersionRequest {
  AdapterId: string;
  ClientRequestToken?: string;
  DatasetConfig: AdapterVersionDatasetConfig;
  KMSKeyId?: string;
  OutputConfig: OutputConfig;
  Tags?: { [key: string]: string | undefined };
}
const CreateAdapterVersionRequest = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<CreateAdapterVersionRequest>;
export interface CreateAdapterVersionResponse {
  AdapterId?: string;
  AdapterVersion?: string;
}
const CreateAdapterVersionResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<CreateAdapterVersionResponse>;
export interface DeleteAdapterRequest {
  AdapterId: string;
}
const DeleteAdapterRequest = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<DeleteAdapterRequest>;
export interface DeleteAdapterResponse {}
const DeleteAdapterResponse = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DeleteAdapterResponse>;
export interface DeleteAdapterVersionRequest {
  AdapterId: string;
  AdapterVersion: string;
}
const DeleteAdapterVersionRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DeleteAdapterVersionRequest>;
export interface DeleteAdapterVersionResponse {}
const DeleteAdapterVersionResponse =
  DeleteAdapterResponse as any as S.Schema<DeleteAdapterVersionResponse>;
export interface DetectDocumentTextRequest {
  Document: Document;
}
const DetectDocumentTextRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DetectDocumentTextRequest>;
export interface DetectDocumentTextResponse {
  DocumentMetadata?: DocumentMetadata;
  Blocks?: Block[];
  DetectDocumentTextModelVersion?: string;
}
const DetectDocumentTextResponse = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<DetectDocumentTextResponse>;
export interface GetAdapterRequest {
  AdapterId: string;
}
const GetAdapterRequest = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<GetAdapterRequest>;
export interface GetAdapterResponse {
  AdapterId?: string;
  AdapterName?: string;
  CreationTime?: Date;
  Description?: string;
  FeatureTypes?: FeatureType[];
  AutoUpdate?: AutoUpdate;
  Tags?: { [key: string]: string | undefined };
}
const GetAdapterResponse = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<GetAdapterResponse>;
export interface GetAdapterVersionRequest {
  AdapterId: string;
  AdapterVersion: string;
}
const GetAdapterVersionRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<GetAdapterVersionRequest>;
export type AdapterVersionStatus =
  | "ACTIVE"
  | "AT_RISK"
  | "DEPRECATED"
  | "CREATION_ERROR"
  | "CREATION_IN_PROGRESS"
  | (string & {});
const AdapterVersionStatus = S.String;

export type AdapterVersionStatusMessage = string;
export interface EvaluationMetric {
  F1Score?: number;
  Precision?: number;
  Recall?: number;
}
const EvaluationMetric = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<EvaluationMetric>;
export interface AdapterVersionEvaluationMetric {
  Baseline?: EvaluationMetric;
  AdapterVersion?: EvaluationMetric;
  FeatureType?: FeatureType;
}
const AdapterVersionEvaluationMetric = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<AdapterVersionEvaluationMetric>;
export type AdapterVersionEvaluationMetrics = AdapterVersionEvaluationMetric[];
const AdapterVersionEvaluationMetrics = /*@__PURE__*/ __L.at(__c8, 1);
export interface GetAdapterVersionResponse {
  AdapterId?: string;
  AdapterVersion?: string;
  CreationTime?: Date;
  FeatureTypes?: FeatureType[];
  Status?: AdapterVersionStatus;
  StatusMessage?: string;
  DatasetConfig?: AdapterVersionDatasetConfig;
  KMSKeyId?: string;
  OutputConfig?: OutputConfig;
  EvaluationMetrics?: AdapterVersionEvaluationMetric[];
  Tags?: { [key: string]: string | undefined };
}
const GetAdapterVersionResponse = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<GetAdapterVersionResponse>;
export type JobId = string;
export type MaxResults = number;
export type PaginationToken = string;
export interface GetDocumentAnalysisRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
}
const GetDocumentAnalysisRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<GetDocumentAnalysisRequest>;
export type JobStatus = "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | "PARTIAL_SUCCESS" | (string & {});
const JobStatus = S.String;

export type ErrorCode = string;
export type Pages = number[];
const Pages = /*@__PURE__*/ __L.at(__c8, 4);
export interface Warning {
  ErrorCode?: string;
  Pages?: number[];
}
const Warning = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<Warning>;
export type Warnings = Warning[];
const Warnings = /*@__PURE__*/ __L.at(__c8, 6);
export type StatusMessage = string;
export interface GetDocumentAnalysisResponse {
  DocumentMetadata?: DocumentMetadata;
  JobStatus?: JobStatus;
  NextToken?: string;
  Blocks?: Block[];
  Warnings?: Warning[];
  StatusMessage?: string;
  AnalyzeDocumentModelVersion?: string;
}
const GetDocumentAnalysisResponse = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<GetDocumentAnalysisResponse>;
export interface GetDocumentTextDetectionRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
}
const GetDocumentTextDetectionRequest = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<GetDocumentTextDetectionRequest>;
export interface GetDocumentTextDetectionResponse {
  DocumentMetadata?: DocumentMetadata;
  JobStatus?: JobStatus;
  NextToken?: string;
  Blocks?: Block[];
  Warnings?: Warning[];
  StatusMessage?: string;
  DetectDocumentTextModelVersion?: string;
}
const GetDocumentTextDetectionResponse = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<GetDocumentTextDetectionResponse>;
export interface GetExpenseAnalysisRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
}
const GetExpenseAnalysisRequest = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<GetExpenseAnalysisRequest>;
export interface GetExpenseAnalysisResponse {
  DocumentMetadata?: DocumentMetadata;
  JobStatus?: JobStatus;
  NextToken?: string;
  ExpenseDocuments?: ExpenseDocument[];
  Warnings?: Warning[];
  StatusMessage?: string;
  AnalyzeExpenseModelVersion?: string;
}
const GetExpenseAnalysisResponse = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<GetExpenseAnalysisResponse>;
export interface GetLendingAnalysisRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
}
const GetLendingAnalysisRequest = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<GetLendingAnalysisRequest>;
export interface Prediction {
  Value?: string;
  Confidence?: number;
}
const Prediction = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<Prediction>;
export type PredictionList = Prediction[];
const PredictionList = /*@__PURE__*/ __L.at(__c9, 6);
export interface PageClassification {
  PageType: Prediction[];
  PageNumber: Prediction[];
}
const PageClassification = /*@__PURE__*/ __L.at(__c9, 7) as any as S.Schema<PageClassification>;
export interface LendingDetection {
  Text?: string;
  SelectionStatus?: SelectionStatus;
  Geometry?: Geometry;
  Confidence?: number;
}
const LendingDetection = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<LendingDetection>;
export type LendingDetectionList = LendingDetection[];
const LendingDetectionList = /*@__PURE__*/ __L.at(__c10, 1);
export interface LendingField {
  Type?: string;
  KeyDetection?: LendingDetection;
  ValueDetections?: LendingDetection[];
}
const LendingField = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<LendingField>;
export type LendingFieldList = LendingField[];
const LendingFieldList = /*@__PURE__*/ __L.at(__c10, 3);
export interface SignatureDetection {
  Confidence?: number;
  Geometry?: Geometry;
}
const SignatureDetection = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<SignatureDetection>;
export type SignatureDetectionList = SignatureDetection[];
const SignatureDetectionList = /*@__PURE__*/ __L.at(__c10, 5);
export interface LendingDocument {
  LendingFields?: LendingField[];
  SignatureDetections?: SignatureDetection[];
}
const LendingDocument = /*@__PURE__*/ __L.at(__c10, 6) as any as S.Schema<LendingDocument>;
export interface Extraction {
  LendingDocument?: LendingDocument;
  ExpenseDocument?: ExpenseDocument;
  IdentityDocument?: IdentityDocument;
}
const Extraction = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<Extraction>;
export type ExtractionList = Extraction[];
const ExtractionList = /*@__PURE__*/ __L.at(__c11, 0);
export interface LendingResult {
  Page?: number;
  PageClassification?: PageClassification;
  Extractions?: Extraction[];
}
const LendingResult = /*@__PURE__*/ __L.at(__c11, 1) as any as S.Schema<LendingResult>;
export type LendingResultList = LendingResult[];
const LendingResultList = /*@__PURE__*/ __L.at(__c11, 2);
export interface GetLendingAnalysisResponse {
  DocumentMetadata?: DocumentMetadata;
  JobStatus?: JobStatus;
  NextToken?: string;
  Results?: LendingResult[];
  Warnings?: Warning[];
  StatusMessage?: string;
  AnalyzeLendingModelVersion?: string;
}
const GetLendingAnalysisResponse = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<GetLendingAnalysisResponse>;
export interface GetLendingAnalysisSummaryRequest {
  JobId: string;
}
const GetLendingAnalysisSummaryRequest = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<GetLendingAnalysisSummaryRequest>;
export type PageList = number[];
const PageList = Pages as any as S.Schema<PageList>;
export interface SplitDocument {
  Index?: number;
  Pages?: number[];
}
const SplitDocument = /*@__PURE__*/ __L.at(__c11, 5) as any as S.Schema<SplitDocument>;
export type SplitDocumentList = SplitDocument[];
const SplitDocumentList = /*@__PURE__*/ __L.at(__c11, 6);
export interface DetectedSignature {
  Page?: number;
}
const DetectedSignature = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<DetectedSignature>;
export type DetectedSignatureList = DetectedSignature[];
const DetectedSignatureList = /*@__PURE__*/ __L.at(__c12, 0);
export interface UndetectedSignature {
  Page?: number;
}
export type UndetectedSignatureList = UndetectedSignature[];
const UndetectedSignatureList = DetectedSignatureList as any as S.Schema<UndetectedSignatureList>;
export interface DocumentGroup {
  Type?: string;
  SplitDocuments?: SplitDocument[];
  DetectedSignatures?: DetectedSignature[];
  UndetectedSignatures?: UndetectedSignature[];
}
const DocumentGroup = /*@__PURE__*/ __L.at(__c12, 1) as any as S.Schema<DocumentGroup>;
export type DocumentGroupList = DocumentGroup[];
const DocumentGroupList = /*@__PURE__*/ __L.at(__c12, 2);
export type UndetectedDocumentTypeList = string[];
const UndetectedDocumentTypeList = QueryPages as any as S.Schema<UndetectedDocumentTypeList>;
export interface LendingSummary {
  DocumentGroups?: DocumentGroup[];
  UndetectedDocumentTypes?: string[];
}
const LendingSummary = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<LendingSummary>;
export interface GetLendingAnalysisSummaryResponse {
  DocumentMetadata?: DocumentMetadata;
  JobStatus?: JobStatus;
  Summary?: LendingSummary;
  Warnings?: Warning[];
  StatusMessage?: string;
  AnalyzeLendingModelVersion?: string;
}
const GetLendingAnalysisSummaryResponse = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<GetLendingAnalysisSummaryResponse>;
export interface ListAdaptersRequest {
  AfterCreationTime?: Date;
  BeforeCreationTime?: Date;
  MaxResults?: number;
  NextToken?: string;
}
const ListAdaptersRequest = /*@__PURE__*/ __L.at(__c12, 5) as any as S.Schema<ListAdaptersRequest>;
export interface AdapterOverview {
  AdapterId?: string;
  AdapterName?: string;
  CreationTime?: Date;
  FeatureTypes?: FeatureType[];
}
const AdapterOverview = /*@__PURE__*/ __L.at(__c12, 6) as any as S.Schema<AdapterOverview>;
export type AdapterList = AdapterOverview[];
const AdapterList = /*@__PURE__*/ __L.at(__c12, 7);
export interface ListAdaptersResponse {
  Adapters?: AdapterOverview[];
  NextToken?: string;
}
const ListAdaptersResponse = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<ListAdaptersResponse>;
export interface ListAdapterVersionsRequest {
  AdapterId?: string;
  AfterCreationTime?: Date;
  BeforeCreationTime?: Date;
  MaxResults?: number;
  NextToken?: string;
}
const ListAdapterVersionsRequest = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<ListAdapterVersionsRequest>;
export interface AdapterVersionOverview {
  AdapterId?: string;
  AdapterVersion?: string;
  CreationTime?: Date;
  FeatureTypes?: FeatureType[];
  Status?: AdapterVersionStatus;
  StatusMessage?: string;
}
const AdapterVersionOverview = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<AdapterVersionOverview>;
export type AdapterVersionList = AdapterVersionOverview[];
const AdapterVersionList = /*@__PURE__*/ __L.at(__c13, 3);
export interface ListAdapterVersionsResponse {
  AdapterVersions?: AdapterVersionOverview[];
  NextToken?: string;
}
const ListAdapterVersionsResponse = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<ListAdapterVersionsResponse>;
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface DocumentLocation {
  S3Object?: S3Object;
}
const DocumentLocation = /*@__PURE__*/ __L.at(__c13, 7) as any as S.Schema<DocumentLocation>;
export type JobTag = string;
export type SNSTopicArn = string;
export type RoleArn = string;
export interface NotificationChannel {
  SNSTopicArn: string;
  RoleArn: string;
}
const NotificationChannel = /*@__PURE__*/ __L.at(__c14, 0) as any as S.Schema<NotificationChannel>;
export interface StartDocumentAnalysisRequest {
  DocumentLocation: DocumentLocation;
  FeatureTypes: FeatureType[];
  ClientRequestToken?: string;
  JobTag?: string;
  NotificationChannel?: NotificationChannel;
  OutputConfig?: OutputConfig;
  KMSKeyId?: string;
  QueriesConfig?: QueriesConfig;
  AdaptersConfig?: AdaptersConfig;
}
const StartDocumentAnalysisRequest = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<StartDocumentAnalysisRequest>;
export interface StartDocumentAnalysisResponse {
  JobId?: string;
}
const StartDocumentAnalysisResponse = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<StartDocumentAnalysisResponse>;
export interface StartDocumentTextDetectionRequest {
  DocumentLocation: DocumentLocation;
  ClientRequestToken?: string;
  JobTag?: string;
  NotificationChannel?: NotificationChannel;
  OutputConfig?: OutputConfig;
  KMSKeyId?: string;
}
const StartDocumentTextDetectionRequest = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<StartDocumentTextDetectionRequest>;
export interface StartDocumentTextDetectionResponse {
  JobId?: string;
}
const StartDocumentTextDetectionResponse =
  StartDocumentAnalysisResponse as any as S.Schema<StartDocumentTextDetectionResponse>;
export interface StartExpenseAnalysisRequest {
  DocumentLocation: DocumentLocation;
  ClientRequestToken?: string;
  JobTag?: string;
  NotificationChannel?: NotificationChannel;
  OutputConfig?: OutputConfig;
  KMSKeyId?: string;
}
const StartExpenseAnalysisRequest = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<StartExpenseAnalysisRequest>;
export interface StartExpenseAnalysisResponse {
  JobId?: string;
}
const StartExpenseAnalysisResponse =
  StartDocumentAnalysisResponse as any as S.Schema<StartExpenseAnalysisResponse>;
export interface StartLendingAnalysisRequest {
  DocumentLocation: DocumentLocation;
  ClientRequestToken?: string;
  JobTag?: string;
  NotificationChannel?: NotificationChannel;
  OutputConfig?: OutputConfig;
  KMSKeyId?: string;
}
const StartLendingAnalysisRequest = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<StartLendingAnalysisRequest>;
export interface StartLendingAnalysisResponse {
  JobId?: string;
}
const StartLendingAnalysisResponse =
  StartDocumentAnalysisResponse as any as S.Schema<StartLendingAnalysisResponse>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c14, 6) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteAdapterResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = QueryPages as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteAdapterResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAdapterRequest {
  AdapterId: string;
  Description?: string;
  AdapterName?: string;
  AutoUpdate?: AutoUpdate;
}
const UpdateAdapterRequest = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<UpdateAdapterRequest>;
export interface UpdateAdapterResponse {
  AdapterId?: string;
  AdapterName?: string;
  CreationTime?: Date;
  Description?: string;
  FeatureTypes?: FeatureType[];
  AutoUpdate?: AutoUpdate;
}
const UpdateAdapterResponse = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<UpdateAdapterResponse>;
export type AnalyzeDocumentError =
  | AccessDeniedException
  | BadDocumentException
  | DocumentTooLargeException
  | HumanLoopQuotaExceededException
  | InternalServerError
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | UnsupportedDocumentException
  | CommonErrors;
/**
 * Analyzes an input document for relationships between detected items.
 *
 * The types of information returned are as follows:
 *
 * - Form data (key-value pairs). The related information is returned in two Block objects, each of type `KEY_VALUE_SET`: a KEY
 * `Block` object and a VALUE `Block` object. For example,
 * *Name: Ana Silva Carolina* contains a key and value.
 * *Name:* is the key. *Ana Silva Carolina* is
 * the value.
 *
 * - Table and table cell data. A TABLE `Block` object contains information
 * about a detected table. A CELL `Block` object is returned for each cell in
 * a table.
 *
 * - Lines and words of text. A LINE `Block` object contains one or more
 * WORD `Block` objects. All lines and words that are detected in the
 * document are returned (including text that doesn't have a relationship with the value
 * of `FeatureTypes`).
 *
 * - Signatures. A SIGNATURE `Block` object contains the location information
 * of a signature in a document. If used in conjunction with forms or tables, a signature
 * can be given a Key-Value pairing or be detected in the cell of a table.
 *
 * - Query. A QUERY Block object contains the query text, alias and link to the
 * associated Query results block object.
 *
 * - Query Result. A QUERY_RESULT Block object contains the answer to the query and an
 * ID that connects it to the query asked. This Block also contains a confidence
 * score.
 *
 * Selection elements such as check boxes and option buttons (radio buttons) can be
 * detected in form data and in tables. A SELECTION_ELEMENT `Block` object contains
 * information about a selection element, including the selection status.
 *
 * You can choose which type of analysis to perform by specifying the
 * `FeatureTypes` list.
 *
 * The output is returned in a list of `Block` objects.
 *
 * `AnalyzeDocument` is a synchronous operation. To analyze documents
 * asynchronously, use StartDocumentAnalysis.
 *
 * For more information, see Document Text
 * Analysis.
 */
export const analyzeDocument: API.OperationMethod<
  AnalyzeDocumentRequest,
  AnalyzeDocumentResponse,
  AnalyzeDocumentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AnalyzeDocumentRequest,
  output: AnalyzeDocumentResponse,
  errors: [
    AccessDeniedException,
    BadDocumentException,
    DocumentTooLargeException,
    HumanLoopQuotaExceededException,
    InternalServerError,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    UnsupportedDocumentException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AnalyzeDocument",
}));

export type AnalyzeExpenseError =
  | AccessDeniedException
  | BadDocumentException
  | DocumentTooLargeException
  | InternalServerError
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | UnsupportedDocumentException
  | CommonErrors;
/**
 * `AnalyzeExpense` synchronously analyzes an input document for financially
 * related relationships between text.
 *
 * Information is returned as `ExpenseDocuments` and seperated as
 * follows:
 *
 * - `LineItemGroups`- A data set containing `LineItems` which
 * store information about the lines of text, such as an item purchased and its price on
 * a receipt.
 *
 * - `SummaryFields`- Contains all other information a receipt, such as
 * header information or the vendors name.
 */
export const analyzeExpense: API.OperationMethod<
  AnalyzeExpenseRequest,
  AnalyzeExpenseResponse,
  AnalyzeExpenseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AnalyzeExpenseRequest,
  output: AnalyzeExpenseResponse,
  errors: [
    AccessDeniedException,
    BadDocumentException,
    DocumentTooLargeException,
    InternalServerError,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    UnsupportedDocumentException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AnalyzeExpense",
}));

export type AnalyzeIDError =
  | AccessDeniedException
  | BadDocumentException
  | DocumentTooLargeException
  | InternalServerError
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | UnsupportedDocumentException
  | CommonErrors;
/**
 * Analyzes identity documents for relevant information. This information is extracted and
 * returned as `IdentityDocumentFields`, which records both the normalized field
 * and value of the extracted text. Unlike other Amazon Textract operations,
 * `AnalyzeID` doesn't return any Geometry data.
 */
export const analyzeID: API.OperationMethod<
  AnalyzeIDRequest,
  AnalyzeIDResponse,
  AnalyzeIDError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AnalyzeIDRequest,
  output: AnalyzeIDResponse,
  errors: [
    AccessDeniedException,
    BadDocumentException,
    DocumentTooLargeException,
    InternalServerError,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    UnsupportedDocumentException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AnalyzeID",
}));

export type CreateAdapterError =
  | AccessDeniedException
  | ConflictException
  | IdempotentParameterMismatchException
  | InternalServerError
  | InvalidParameterException
  | LimitExceededException
  | ProvisionedThroughputExceededException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an adapter, which can be fine-tuned for enhanced performance on user provided
 * documents. Takes an AdapterName and FeatureType. Currently the only supported feature type
 * is `QUERIES`. You can also provide a Description, Tags, and a
 * ClientRequestToken. You can choose whether or not the adapter should be AutoUpdated with
 * the AutoUpdate argument. By default, AutoUpdate is set to DISABLED.
 */
export const createAdapter: API.OperationMethod<
  CreateAdapterRequest,
  CreateAdapterResponse,
  CreateAdapterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAdapterRequest,
  output: CreateAdapterResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    IdempotentParameterMismatchException,
    InternalServerError,
    InvalidParameterException,
    LimitExceededException,
    ProvisionedThroughputExceededException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAdapter",
}));

export type CreateAdapterVersionError =
  | AccessDeniedException
  | ConflictException
  | IdempotentParameterMismatchException
  | InternalServerError
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | LimitExceededException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new version of an adapter. Operates on a provided AdapterId and a specified
 * dataset provided via the DatasetConfig argument. Requires that you
 * specify an Amazon S3 bucket with the OutputConfig argument. You can provide an optional KMSKeyId,
 * an optional ClientRequestToken, and optional tags.
 */
export const createAdapterVersion: API.OperationMethod<
  CreateAdapterVersionRequest,
  CreateAdapterVersionResponse,
  CreateAdapterVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAdapterVersionRequest,
  output: CreateAdapterVersionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    IdempotentParameterMismatchException,
    InternalServerError,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    LimitExceededException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAdapterVersion",
}));

export type DeleteAdapterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Textract adapter. Takes an AdapterId and deletes the adapter specified by the ID.
 */
export const deleteAdapter: API.OperationMethod<
  DeleteAdapterRequest,
  DeleteAdapterResponse,
  DeleteAdapterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAdapterRequest,
  output: DeleteAdapterResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAdapter",
}));

export type DeleteAdapterVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Textract adapter version. Requires that you specify both an AdapterId and a
 * AdapterVersion. Deletes the adapter version specified by the AdapterId and the AdapterVersion.
 */
export const deleteAdapterVersion: API.OperationMethod<
  DeleteAdapterVersionRequest,
  DeleteAdapterVersionResponse,
  DeleteAdapterVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAdapterVersionRequest,
  output: DeleteAdapterVersionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAdapterVersion",
}));

export type DetectDocumentTextError =
  | AccessDeniedException
  | BadDocumentException
  | DocumentTooLargeException
  | InternalServerError
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | UnsupportedDocumentException
  | CommonErrors;
/**
 * Detects text in the input document. Amazon Textract can detect lines of text and the
 * words that make up a line of text. The input document must be in one of the following image
 * formats: JPEG, PNG, PDF, or TIFF. `DetectDocumentText` returns the detected
 * text in an array of Block objects.
 *
 * Each document page has as an associated `Block` of type PAGE. Each PAGE `Block` object
 * is the parent of LINE `Block` objects that represent the lines of detected text on a page. A LINE `Block` object is
 * a parent for each word that makes up the line. Words are represented by `Block` objects of type WORD.
 *
 * `DetectDocumentText` is a synchronous operation. To analyze documents
 * asynchronously, use StartDocumentTextDetection.
 *
 * For more information, see Document Text Detection.
 */
export const detectDocumentText: API.OperationMethod<
  DetectDocumentTextRequest,
  DetectDocumentTextResponse,
  DetectDocumentTextError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetectDocumentTextRequest,
  output: DetectDocumentTextResponse,
  errors: [
    AccessDeniedException,
    BadDocumentException,
    DocumentTooLargeException,
    InternalServerError,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    UnsupportedDocumentException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectDocumentText",
}));

export type GetAdapterError =
  | AccessDeniedException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets configuration information for an adapter specified by an AdapterId, returning information on AdapterName, Description,
 * CreationTime, AutoUpdate status, and FeatureTypes.
 */
export const getAdapter: API.OperationMethod<
  GetAdapterRequest,
  GetAdapterResponse,
  GetAdapterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAdapterRequest,
  output: GetAdapterResponse,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAdapter",
}));

export type GetAdapterVersionError =
  | AccessDeniedException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets configuration information for the specified adapter version, including:
 * AdapterId, AdapterVersion, FeatureTypes, Status, StatusMessage, DatasetConfig,
 * KMSKeyId, OutputConfig, Tags and EvaluationMetrics.
 */
export const getAdapterVersion: API.OperationMethod<
  GetAdapterVersionRequest,
  GetAdapterVersionResponse,
  GetAdapterVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAdapterVersionRequest,
  output: GetAdapterVersionResponse,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAdapterVersion",
}));

export type GetDocumentAnalysisError =
  | AccessDeniedException
  | InternalServerError
  | InvalidJobIdException
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the results for an Amazon Textract asynchronous operation that analyzes text in a
 * document.
 *
 * You start asynchronous text analysis by calling StartDocumentAnalysis,
 * which returns a job identifier (`JobId`). When the text analysis operation
 * finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic
 * that's registered in the initial call to `StartDocumentAnalysis`. To get the
 * results of the text-detection operation, first check that the status value published to the
 * Amazon SNS topic is `SUCCEEDED`. If so, call `GetDocumentAnalysis`, and
 * pass the job identifier (`JobId`) from the initial call to
 * `StartDocumentAnalysis`.
 *
 * `GetDocumentAnalysis` returns an array of Block objects.
 * The following types of information are returned:
 *
 * - Form data (key-value pairs). The related information is returned in two Block objects, each of type `KEY_VALUE_SET`: a KEY
 * `Block` object and a VALUE `Block` object. For example,
 * *Name: Ana Silva Carolina* contains a key and value.
 * *Name:* is the key. *Ana Silva Carolina* is
 * the value.
 *
 * - Table and table cell data. A TABLE `Block` object contains information
 * about a detected table. A CELL `Block` object is returned for each cell in
 * a table.
 *
 * - Lines and words of text. A LINE `Block` object contains one or more
 * WORD `Block` objects. All lines and words that are detected in the
 * document are returned (including text that doesn't have a relationship with the value
 * of the `StartDocumentAnalysis`
 * `FeatureTypes` input parameter).
 *
 * - Query. A QUERY Block object contains the query text, alias and link to the
 * associated Query results block object.
 *
 * - Query Results. A QUERY_RESULT Block object contains the answer to the query and an
 * ID that connects it to the query asked. This Block also contains a confidence
 * score.
 *
 * While processing a document with queries, look out for
 * `INVALID_REQUEST_PARAMETERS` output. This indicates that either the per
 * page query limit has been exceeded or that the operation is trying to query a page in
 * the document which doesn't exist.
 *
 * Selection elements such as check boxes and option buttons (radio buttons) can be
 * detected in form data and in tables. A SELECTION_ELEMENT `Block` object contains
 * information about a selection element, including the selection status.
 *
 * Use the `MaxResults` parameter to limit the number of blocks that are
 * returned. If there are more results than specified in `MaxResults`, the value of
 * `NextToken` in the operation response contains a pagination token for getting
 * the next set of results. To get the next page of results, call
 * `GetDocumentAnalysis`, and populate the `NextToken` request
 * parameter with the token value that's returned from the previous call to
 * `GetDocumentAnalysis`.
 *
 * For more information, see Document Text
 * Analysis.
 */
export const getDocumentAnalysis: API.OperationMethod<
  GetDocumentAnalysisRequest,
  GetDocumentAnalysisResponse,
  GetDocumentAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDocumentAnalysisRequest,
  output: GetDocumentAnalysisResponse,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidJobIdException,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDocumentAnalysis",
}));

export type GetDocumentTextDetectionError =
  | AccessDeniedException
  | InternalServerError
  | InvalidJobIdException
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the results for an Amazon Textract asynchronous operation that detects text in a document.
 * Amazon Textract can detect lines of text and the words that make up a line of text.
 *
 * You start asynchronous text detection by calling StartDocumentTextDetection, which returns a job identifier
 * (`JobId`). When the text detection operation finishes, Amazon Textract publishes a
 * completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to
 * `StartDocumentTextDetection`. To get the results of the text-detection
 * operation, first check that the status value published to the Amazon SNS topic is
 * `SUCCEEDED`. If so, call `GetDocumentTextDetection`, and pass the
 * job identifier (`JobId`) from the initial call to
 * `StartDocumentTextDetection`.
 *
 * `GetDocumentTextDetection` returns an array of Block
 * objects.
 *
 * Each document page has as an associated `Block` of type PAGE. Each PAGE `Block` object
 * is the parent of LINE `Block` objects that represent the lines of detected text on a page. A LINE `Block` object is
 * a parent for each word that makes up the line. Words are represented by `Block` objects of type WORD.
 *
 * Use the MaxResults parameter to limit the number of blocks that are returned. If there
 * are more results than specified in `MaxResults`, the value of
 * `NextToken` in the operation response contains a pagination token for getting
 * the next set of results. To get the next page of results, call
 * `GetDocumentTextDetection`, and populate the `NextToken` request
 * parameter with the token value that's returned from the previous call to
 * `GetDocumentTextDetection`.
 *
 * For more information, see Document Text Detection.
 */
export const getDocumentTextDetection: API.OperationMethod<
  GetDocumentTextDetectionRequest,
  GetDocumentTextDetectionResponse,
  GetDocumentTextDetectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDocumentTextDetectionRequest,
  output: GetDocumentTextDetectionResponse,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidJobIdException,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDocumentTextDetection",
}));

export type GetExpenseAnalysisError =
  | AccessDeniedException
  | InternalServerError
  | InvalidJobIdException
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the results for an Amazon Textract asynchronous operation that analyzes invoices and
 * receipts. Amazon Textract finds contact information, items purchased, and vendor name, from input
 * invoices and receipts.
 *
 * You start asynchronous invoice/receipt analysis by calling StartExpenseAnalysis, which returns a job identifier (`JobId`). Upon
 * completion of the invoice/receipt analysis, Amazon Textract publishes the completion status to the
 * Amazon Simple Notification Service (Amazon SNS) topic. This topic must be registered in the initial call to
 * `StartExpenseAnalysis`. To get the results of the invoice/receipt analysis operation,
 * first ensure that the status value published to the Amazon SNS topic is `SUCCEEDED`. If so,
 * call `GetExpenseAnalysis`, and pass the job identifier (`JobId`) from the
 * initial call to `StartExpenseAnalysis`.
 *
 * Use the MaxResults parameter to limit the number of blocks that are returned. If there are
 * more results than specified in `MaxResults`, the value of `NextToken` in
 * the operation response contains a pagination token for getting the next set of results. To get
 * the next page of results, call `GetExpenseAnalysis`, and populate the
 * `NextToken` request parameter with the token value that's returned from the previous
 * call to `GetExpenseAnalysis`.
 *
 * For more information, see Analyzing Invoices and Receipts.
 */
export const getExpenseAnalysis: API.OperationMethod<
  GetExpenseAnalysisRequest,
  GetExpenseAnalysisResponse,
  GetExpenseAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetExpenseAnalysisRequest,
  output: GetExpenseAnalysisResponse,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidJobIdException,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExpenseAnalysis",
}));

export type GetLendingAnalysisError =
  | AccessDeniedException
  | InternalServerError
  | InvalidJobIdException
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the results for an Amazon Textract asynchronous operation that analyzes text in a
 * lending document.
 *
 * You start asynchronous text analysis by calling `StartLendingAnalysis`,
 * which returns a job identifier (`JobId`). When the text analysis operation
 * finishes, Amazon Textract publishes a completion status to the Amazon Simple
 * Notification Service (Amazon SNS) topic that's registered in the initial call to
 * `StartLendingAnalysis`.
 *
 * To get the results of the text analysis operation, first check that the status value
 * published to the Amazon SNS topic is SUCCEEDED. If so, call GetLendingAnalysis, and pass
 * the job identifier (`JobId`) from the initial call to
 * `StartLendingAnalysis`.
 */
export const getLendingAnalysis: API.OperationMethod<
  GetLendingAnalysisRequest,
  GetLendingAnalysisResponse,
  GetLendingAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLendingAnalysisRequest,
  output: GetLendingAnalysisResponse,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidJobIdException,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLendingAnalysis",
}));

export type GetLendingAnalysisSummaryError =
  | AccessDeniedException
  | InternalServerError
  | InvalidJobIdException
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets summarized results for the `StartLendingAnalysis` operation, which analyzes
 * text in a lending document. The returned summary consists of information about documents grouped
 * together by a common document type. Information like detected signatures, page numbers, and split
 * documents is returned with respect to the type of grouped document.
 *
 * You start asynchronous text analysis by calling `StartLendingAnalysis`, which
 * returns a job identifier (`JobId`). When the text analysis operation finishes, Amazon
 * Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS)
 * topic that's registered in the initial call to `StartLendingAnalysis`.
 *
 * To get the results of the text analysis operation, first check that the status value
 * published to the Amazon SNS topic is SUCCEEDED. If so, call
 * `GetLendingAnalysisSummary`, and pass the job identifier (`JobId`) from
 * the initial call to `StartLendingAnalysis`.
 */
export const getLendingAnalysisSummary: API.OperationMethod<
  GetLendingAnalysisSummaryRequest,
  GetLendingAnalysisSummaryResponse,
  GetLendingAnalysisSummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLendingAnalysisSummaryRequest,
  output: GetLendingAnalysisSummaryResponse,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidJobIdException,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLendingAnalysisSummary",
}));

export type ListAdaptersError =
  | AccessDeniedException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all adapters that match the specified filtration criteria.
 */
export const listAdapters: API.PaginatedOperationMethod<
  ListAdaptersRequest,
  ListAdaptersResponse,
  ListAdaptersError,
  Credentials | HttpClient.HttpClient,
  AdapterOverview
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAdaptersRequest,
  output: ListAdaptersResponse,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAdapters",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Adapters",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAdapterVersionsError =
  | AccessDeniedException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all version of an adapter that meet the specified filtration criteria.
 */
export const listAdapterVersions: API.PaginatedOperationMethod<
  ListAdapterVersionsRequest,
  ListAdapterVersionsResponse,
  ListAdapterVersionsError,
  Credentials | HttpClient.HttpClient,
  AdapterVersionOverview
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAdapterVersionsRequest,
  output: ListAdapterVersionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAdapterVersions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AdapterVersions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all tags for an Amazon Textract resource.
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
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type StartDocumentAnalysisError =
  | AccessDeniedException
  | BadDocumentException
  | DocumentTooLargeException
  | IdempotentParameterMismatchException
  | InternalServerError
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | LimitExceededException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | UnsupportedDocumentException
  | CommonErrors;
/**
 * Starts the asynchronous analysis of an input document for relationships between detected
 * items such as key-value pairs, tables, and selection elements.
 *
 * `StartDocumentAnalysis` can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The
 * documents are stored in an Amazon S3 bucket. Use DocumentLocation to specify the bucket name and file name
 * of the document.
 *
 * `StartDocumentAnalysis` returns a job identifier
 * (`JobId`) that you use to get the results of the operation. When text
 * analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS)
 * topic that you specify in `NotificationChannel`. To get the results of the text
 * analysis operation, first check that the status value published to the Amazon SNS topic is
 * `SUCCEEDED`. If so, call GetDocumentAnalysis, and pass
 * the job identifier (`JobId`) from the initial call to
 * `StartDocumentAnalysis`.
 *
 * For more information, see Document Text Analysis.
 */
export const startDocumentAnalysis: API.OperationMethod<
  StartDocumentAnalysisRequest,
  StartDocumentAnalysisResponse,
  StartDocumentAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartDocumentAnalysisRequest,
  output: StartDocumentAnalysisResponse,
  errors: [
    AccessDeniedException,
    BadDocumentException,
    DocumentTooLargeException,
    IdempotentParameterMismatchException,
    InternalServerError,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    LimitExceededException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    UnsupportedDocumentException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDocumentAnalysis",
}));

export type StartDocumentTextDetectionError =
  | AccessDeniedException
  | BadDocumentException
  | DocumentTooLargeException
  | IdempotentParameterMismatchException
  | InternalServerError
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | LimitExceededException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | UnsupportedDocumentException
  | CommonErrors;
/**
 * Starts the asynchronous detection of text in a document. Amazon Textract can detect lines of
 * text and the words that make up a line of text.
 *
 * `StartDocumentTextDetection` can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The
 * documents are stored in an Amazon S3 bucket. Use DocumentLocation to specify the bucket name and file name
 * of the document.
 *
 * `StartDocumentTextDetection` returns a job identifier
 * (`JobId`) that you use to get the results of the operation. When text
 * detection is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS)
 * topic that you specify in `NotificationChannel`. To get the results of the text
 * detection operation, first check that the status value published to the Amazon SNS topic is
 * `SUCCEEDED`. If so, call GetDocumentTextDetection, and
 * pass the job identifier (`JobId`) from the initial call to
 * `StartDocumentTextDetection`.
 *
 * For more information, see Document Text Detection.
 */
export const startDocumentTextDetection: API.OperationMethod<
  StartDocumentTextDetectionRequest,
  StartDocumentTextDetectionResponse,
  StartDocumentTextDetectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartDocumentTextDetectionRequest,
  output: StartDocumentTextDetectionResponse,
  errors: [
    AccessDeniedException,
    BadDocumentException,
    DocumentTooLargeException,
    IdempotentParameterMismatchException,
    InternalServerError,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    LimitExceededException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    UnsupportedDocumentException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDocumentTextDetection",
}));

export type StartExpenseAnalysisError =
  | AccessDeniedException
  | BadDocumentException
  | DocumentTooLargeException
  | IdempotentParameterMismatchException
  | InternalServerError
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | LimitExceededException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | UnsupportedDocumentException
  | CommonErrors;
/**
 * Starts the asynchronous analysis of invoices or receipts for data like contact information,
 * items purchased, and vendor names.
 *
 * `StartExpenseAnalysis` can analyze text in documents that are in JPEG, PNG, and
 * PDF format. The documents must be stored in an Amazon S3 bucket. Use the DocumentLocation parameter to specify the name of your S3 bucket and the name of the
 * document in that bucket.
 *
 * `StartExpenseAnalysis` returns a job identifier (`JobId`) that you
 * will provide to `GetExpenseAnalysis` to retrieve the results of the operation. When
 * the analysis of the input invoices/receipts is finished, Amazon Textract publishes a completion
 * status to the Amazon Simple Notification Service (Amazon SNS) topic that you provide to the `NotificationChannel`.
 * To obtain the results of the invoice and receipt analysis operation, ensure that the status value
 * published to the Amazon SNS topic is `SUCCEEDED`. If so, call GetExpenseAnalysis, and pass the job identifier (`JobId`) that was
 * returned by your call to `StartExpenseAnalysis`.
 *
 * For more information, see Analyzing Invoices and Receipts.
 */
export const startExpenseAnalysis: API.OperationMethod<
  StartExpenseAnalysisRequest,
  StartExpenseAnalysisResponse,
  StartExpenseAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartExpenseAnalysisRequest,
  output: StartExpenseAnalysisResponse,
  errors: [
    AccessDeniedException,
    BadDocumentException,
    DocumentTooLargeException,
    IdempotentParameterMismatchException,
    InternalServerError,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    LimitExceededException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    UnsupportedDocumentException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartExpenseAnalysis",
}));

export type StartLendingAnalysisError =
  | AccessDeniedException
  | BadDocumentException
  | DocumentTooLargeException
  | IdempotentParameterMismatchException
  | InternalServerError
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | LimitExceededException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | UnsupportedDocumentException
  | CommonErrors;
/**
 * Starts the classification and analysis of an input document.
 * `StartLendingAnalysis` initiates the classification and analysis of a packet of
 * lending documents. `StartLendingAnalysis` operates on a document file located in an
 * Amazon S3 bucket.
 *
 * `StartLendingAnalysis` can analyze text in documents that are in one of the
 * following formats: JPEG, PNG, TIFF, PDF. Use `DocumentLocation` to specify the bucket
 * name and the file name of the document.
 *
 * `StartLendingAnalysis` returns a job identifier (`JobId`) that you use
 * to get the results of the operation. When the text analysis is finished, Amazon Textract
 * publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that
 * you specify in `NotificationChannel`. To get the results of the text analysis
 * operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If
 * the status is SUCCEEDED you can call either `GetLendingAnalysis` or
 * `GetLendingAnalysisSummary` and provide the `JobId` to obtain the results
 * of the analysis.
 *
 * If using `OutputConfig` to specify an Amazon S3 bucket, the output will be contained
 * within the specified prefix in a directory labeled with the job-id. In the directory there are 3
 * sub-directories:
 *
 * - detailedResponse (contains the GetLendingAnalysis response)
 *
 * - summaryResponse (for the GetLendingAnalysisSummary response)
 *
 * - splitDocuments (documents split across logical boundaries)
 */
export const startLendingAnalysis: API.OperationMethod<
  StartLendingAnalysisRequest,
  StartLendingAnalysisResponse,
  StartLendingAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartLendingAnalysisRequest,
  output: StartLendingAnalysisResponse,
  errors: [
    AccessDeniedException,
    BadDocumentException,
    DocumentTooLargeException,
    IdempotentParameterMismatchException,
    InternalServerError,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    LimitExceededException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    UnsupportedDocumentException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartLendingAnalysis",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds one or more tags to the specified resource.
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
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes any tags with the specified keys from the specified resource.
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
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAdapterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update the configuration for an adapter. FeatureTypes configurations cannot be updated.
 * At least one new parameter must be specified as an argument.
 */
export const updateAdapter: API.OperationMethod<
  UpdateAdapterRequest,
  UpdateAdapterResponse,
  UpdateAdapterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAdapterRequest,
  output: UpdateAdapterResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAdapter",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Bucket: S.optional(S.String),
          Name: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3Object" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Bytes: S.optional(T.Blob), S3Object: S.optional(S3Object) }),
      ).annotate({ identifier: "Document" });
    case 2:
      return S.Array(FeatureType);
    case 3:
      return S.suspend(() =>
        S.Struct({ ContentClassifiers: S.optional(ContentClassifiers) }),
      ).annotate({ identifier: "HumanLoopDataAttributes" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          HumanLoopName: S.String,
          FlowDefinitionArn: S.String,
          DataAttributes: S.optional(HumanLoopDataAttributes),
        }),
      ).annotate({ identifier: "HumanLoopConfig" });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({ Text: S.String, Alias: S.optional(S.String), Pages: S.optional(QueryPages) }),
      ).annotate({ identifier: "Query" });
    case 7:
      return S.Array(Query);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Queries: Queries })).annotate({
        identifier: "QueriesConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AdapterId: S.String, Pages: S.optional(AdapterPages), Version: S.String }),
      ).annotate({ identifier: "Adapter" });
    case 2:
      return S.Array(Adapter);
    case 3:
      return S.suspend(() => S.Struct({ Adapters: Adapters })).annotate({
        identifier: "AdaptersConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Document: Document,
          FeatureTypes: FeatureTypes,
          HumanLoopConfig: S.optional(HumanLoopConfig),
          QueriesConfig: S.optional(QueriesConfig),
          AdaptersConfig: S.optional(AdaptersConfig),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "AnalyzeDocumentRequest" });
    case 5:
      return S.suspend(() => S.Struct({ Pages: S.optional(S.Number) })).annotate({
        identifier: "DocumentMetadata",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Width: S.optional(S.Number),
          Height: S.optional(S.Number),
          Left: S.optional(S.Number),
          Top: S.optional(S.Number),
        }),
      ).annotate({ identifier: "BoundingBox" });
    case 7:
      return S.suspend(() =>
        S.Struct({ X: S.optional(S.Number), Y: S.optional(S.Number) }),
      ).annotate({ identifier: "Point" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Point);
    case 1:
      return S.suspend(() =>
        S.Struct({
          BoundingBox: S.optional(BoundingBox),
          Polygon: S.optional(Polygon),
          RotationAngle: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Geometry" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(RelationshipType), Ids: S.optional(IdList) }),
      ).annotate({ identifier: "Relationship" });
    case 3:
      return S.Array(Relationship);
    case 4:
      return S.suspend(() =>
        S.Struct({
          BlockType: S.optional(BlockType),
          Confidence: S.optional(S.Number),
          Text: S.optional(S.String),
          TextType: S.optional(TextType),
          RowIndex: S.optional(S.Number),
          ColumnIndex: S.optional(S.Number),
          RowSpan: S.optional(S.Number),
          ColumnSpan: S.optional(S.Number),
          Geometry: S.optional(Geometry),
          Id: S.optional(S.String),
          Relationships: S.optional(RelationshipList),
          EntityTypes: S.optional(EntityTypes),
          SelectionStatus: S.optional(SelectionStatus),
          Page: S.optional(S.Number),
          Query: S.optional(Query),
        }),
      ).annotate({ identifier: "Block" });
    case 5:
      return S.Array(Block);
    case 6:
      return S.suspend(() =>
        S.Struct({
          HumanLoopArn: S.optional(S.String),
          HumanLoopActivationReasons: S.optional(HumanLoopActivationReasons),
          HumanLoopActivationConditionsEvaluationResults: S.optional(S.String),
        }),
      ).annotate({
        identifier: "HumanLoopActivationOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DocumentMetadata: S.optional(DocumentMetadata),
          Blocks: S.optional(BlockList),
          HumanLoopActivationOutput: S.optional(HumanLoopActivationOutput),
          AnalyzeDocumentModelVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "AnalyzeDocumentResponse" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Document: Document }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AnalyzeExpenseRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Text: S.optional(S.String), Confidence: S.optional(S.Number) }),
      ).annotate({ identifier: "ExpenseType" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Text: S.optional(S.String),
          Geometry: S.optional(Geometry),
          Confidence: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ExpenseDetection" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.String), Confidence: S.optional(S.Number) }),
      ).annotate({ identifier: "ExpenseCurrency" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Types: S.optional(StringList), Id: S.optional(S.String) }),
      ).annotate({ identifier: "ExpenseGroupProperty" });
    case 5:
      return S.Array(ExpenseGroupProperty);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(ExpenseType),
          LabelDetection: S.optional(ExpenseDetection),
          ValueDetection: S.optional(ExpenseDetection),
          PageNumber: S.optional(S.Number),
          Currency: S.optional(ExpenseCurrency),
          GroupProperties: S.optional(ExpenseGroupPropertyList),
        }),
      ).annotate({ identifier: "ExpenseField" });
    case 7:
      return S.Array(ExpenseField);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LineItemExpenseFields: S.optional(ExpenseFieldList) }),
      ).annotate({ identifier: "LineItemFields" });
    case 1:
      return S.Array(LineItemFields);
    case 2:
      return S.suspend(() =>
        S.Struct({ LineItemGroupIndex: S.optional(S.Number), LineItems: S.optional(LineItemList) }),
      ).annotate({ identifier: "LineItemGroup" });
    case 3:
      return S.Array(LineItemGroup);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ExpenseIndex: S.optional(S.Number),
          SummaryFields: S.optional(ExpenseFieldList),
          LineItemGroups: S.optional(LineItemGroupList),
          Blocks: S.optional(BlockList),
        }),
      ).annotate({ identifier: "ExpenseDocument" });
    case 5:
      return S.Array(ExpenseDocument);
    case 6:
      return S.suspend(() =>
        S.Struct({
          DocumentMetadata: S.optional(DocumentMetadata),
          ExpenseDocuments: S.optional(ExpenseDocumentList),
        }),
      ).annotate({ identifier: "AnalyzeExpenseResponse" });
    case 7:
      return S.Array(Document);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DocumentPages: DocumentPages }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AnalyzeIDRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Value: S.optional(S.String), ValueType: S.optional(ValueType) }),
      ).annotate({ identifier: "NormalizedValue" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Text: S.String,
          NormalizedValue: S.optional(NormalizedValue),
          Confidence: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AnalyzeIDDetections" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(AnalyzeIDDetections),
          ValueDetection: S.optional(AnalyzeIDDetections),
        }),
      ).annotate({ identifier: "IdentityDocumentField" });
    case 4:
      return S.Array(IdentityDocumentField);
    case 5:
      return S.suspend(() =>
        S.Struct({
          DocumentIndex: S.optional(S.Number),
          IdentityDocumentFields: S.optional(IdentityDocumentFieldList),
          Blocks: S.optional(BlockList),
        }),
      ).annotate({ identifier: "IdentityDocument" });
    case 6:
      return S.Array(IdentityDocument);
    case 7:
      return S.suspend(() =>
        S.Struct({
          IdentityDocuments: S.optional(IdentityDocumentList),
          DocumentMetadata: S.optional(DocumentMetadata),
          AnalyzeIDModelVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "AnalyzeIDResponse" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          AdapterName: S.String,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Description: S.optional(S.String),
          FeatureTypes: FeatureTypes,
          AutoUpdate: S.optional(AutoUpdate),
          Tags: S.optional(TagMap),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateAdapterRequest" });
    case 2:
      return S.suspend(() => S.Struct({ AdapterId: S.optional(S.String) })).annotate({
        identifier: "CreateAdapterResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ ManifestS3Object: S.optional(S3Object) })).annotate({
        identifier: "AdapterVersionDatasetConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ S3Bucket: S.String, S3Prefix: S.optional(S.String) }),
      ).annotate({ identifier: "OutputConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AdapterId: S.String,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          DatasetConfig: AdapterVersionDatasetConfig,
          KMSKeyId: S.optional(S.String),
          OutputConfig: OutputConfig,
          Tags: S.optional(TagMap),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateAdapterVersionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AdapterId: S.optional(S.String), AdapterVersion: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateAdapterVersionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AdapterId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteAdapterRequest" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAdapterResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AdapterId: S.String, AdapterVersion: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAdapterVersionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Document: Document }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DetectDocumentTextRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DocumentMetadata: S.optional(DocumentMetadata),
          Blocks: S.optional(BlockList),
          DetectDocumentTextModelVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DetectDocumentTextResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ AdapterId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAdapterRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AdapterId: S.optional(S.String),
          AdapterName: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(S.String),
          FeatureTypes: S.optional(FeatureTypes),
          AutoUpdate: S.optional(AutoUpdate),
          Tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "GetAdapterResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ AdapterId: S.String, AdapterVersion: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAdapterVersionRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          F1Score: S.optional(S.Number),
          Precision: S.optional(S.Number),
          Recall: S.optional(S.Number),
        }),
      ).annotate({ identifier: "EvaluationMetric" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Baseline: S.optional(EvaluationMetric),
          AdapterVersion: S.optional(EvaluationMetric),
          FeatureType: S.optional(FeatureType),
        }),
      ).annotate({
        identifier: "AdapterVersionEvaluationMetric",
      });
    case 1:
      return S.Array(AdapterVersionEvaluationMetric);
    case 2:
      return S.suspend(() =>
        S.Struct({
          AdapterId: S.optional(S.String),
          AdapterVersion: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FeatureTypes: S.optional(FeatureTypes),
          Status: S.optional(AdapterVersionStatus),
          StatusMessage: S.optional(S.String),
          DatasetConfig: S.optional(AdapterVersionDatasetConfig),
          KMSKeyId: S.optional(S.String),
          OutputConfig: S.optional(OutputConfig),
          EvaluationMetrics: S.optional(AdapterVersionEvaluationMetrics),
          Tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "GetAdapterVersionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          JobId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetDocumentAnalysisRequest",
      });
    case 4:
      return S.Array(S.Number);
    case 5:
      return S.suspend(() =>
        S.Struct({ ErrorCode: S.optional(S.String), Pages: S.optional(Pages) }),
      ).annotate({ identifier: "Warning" });
    case 6:
      return S.Array(Warning);
    case 7:
      return S.suspend(() =>
        S.Struct({
          DocumentMetadata: S.optional(DocumentMetadata),
          JobStatus: S.optional(JobStatus),
          NextToken: S.optional(S.String),
          Blocks: S.optional(BlockList),
          Warnings: S.optional(Warnings),
          StatusMessage: S.optional(S.String),
          AnalyzeDocumentModelVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetDocumentAnalysisResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          JobId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetDocumentTextDetectionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DocumentMetadata: S.optional(DocumentMetadata),
          JobStatus: S.optional(JobStatus),
          NextToken: S.optional(S.String),
          Blocks: S.optional(BlockList),
          Warnings: S.optional(Warnings),
          StatusMessage: S.optional(S.String),
          DetectDocumentTextModelVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetDocumentTextDetectionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          JobId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetExpenseAnalysisRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DocumentMetadata: S.optional(DocumentMetadata),
          JobStatus: S.optional(JobStatus),
          NextToken: S.optional(S.String),
          ExpenseDocuments: S.optional(ExpenseDocumentList),
          Warnings: S.optional(Warnings),
          StatusMessage: S.optional(S.String),
          AnalyzeExpenseModelVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetExpenseAnalysisResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          JobId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetLendingAnalysisRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Value: S.optional(S.String), Confidence: S.optional(S.Number) }),
      ).annotate({ identifier: "Prediction" });
    case 6:
      return S.Array(Prediction);
    case 7:
      return S.suspend(() =>
        S.Struct({ PageType: PredictionList, PageNumber: PredictionList }),
      ).annotate({ identifier: "PageClassification" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Text: S.optional(S.String),
          SelectionStatus: S.optional(SelectionStatus),
          Geometry: S.optional(Geometry),
          Confidence: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LendingDetection" });
    case 1:
      return S.Array(LendingDetection);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          KeyDetection: S.optional(LendingDetection),
          ValueDetections: S.optional(LendingDetectionList),
        }),
      ).annotate({ identifier: "LendingField" });
    case 3:
      return S.Array(LendingField);
    case 4:
      return S.suspend(() =>
        S.Struct({ Confidence: S.optional(S.Number), Geometry: S.optional(Geometry) }),
      ).annotate({ identifier: "SignatureDetection" });
    case 5:
      return S.Array(SignatureDetection);
    case 6:
      return S.suspend(() =>
        S.Struct({
          LendingFields: S.optional(LendingFieldList),
          SignatureDetections: S.optional(SignatureDetectionList),
        }),
      ).annotate({ identifier: "LendingDocument" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LendingDocument: S.optional(LendingDocument),
          ExpenseDocument: S.optional(ExpenseDocument),
          IdentityDocument: S.optional(IdentityDocument),
        }),
      ).annotate({ identifier: "Extraction" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Extraction);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Page: S.optional(S.Number),
          PageClassification: S.optional(PageClassification),
          Extractions: S.optional(ExtractionList),
        }),
      ).annotate({ identifier: "LendingResult" });
    case 2:
      return S.Array(LendingResult);
    case 3:
      return S.suspend(() =>
        S.Struct({
          DocumentMetadata: S.optional(DocumentMetadata),
          JobStatus: S.optional(JobStatus),
          NextToken: S.optional(S.String),
          Results: S.optional(LendingResultList),
          Warnings: S.optional(Warnings),
          StatusMessage: S.optional(S.String),
          AnalyzeLendingModelVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetLendingAnalysisResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetLendingAnalysisSummaryRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Index: S.optional(S.Number), Pages: S.optional(PageList) }),
      ).annotate({ identifier: "SplitDocument" });
    case 6:
      return S.Array(SplitDocument);
    case 7:
      return S.suspend(() => S.Struct({ Page: S.optional(S.Number) })).annotate({
        identifier: "DetectedSignature",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(DetectedSignature);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          SplitDocuments: S.optional(SplitDocumentList),
          DetectedSignatures: S.optional(DetectedSignatureList),
          UndetectedSignatures: S.optional(UndetectedSignatureList),
        }),
      ).annotate({ identifier: "DocumentGroup" });
    case 2:
      return S.Array(DocumentGroup);
    case 3:
      return S.suspend(() =>
        S.Struct({
          DocumentGroups: S.optional(DocumentGroupList),
          UndetectedDocumentTypes: S.optional(UndetectedDocumentTypeList),
        }),
      ).annotate({ identifier: "LendingSummary" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DocumentMetadata: S.optional(DocumentMetadata),
          JobStatus: S.optional(JobStatus),
          Summary: S.optional(LendingSummary),
          Warnings: S.optional(Warnings),
          StatusMessage: S.optional(S.String),
          AnalyzeLendingModelVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetLendingAnalysisSummaryResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AfterCreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          BeforeCreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAdaptersRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AdapterId: S.optional(S.String),
          AdapterName: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FeatureTypes: S.optional(FeatureTypes),
        }),
      ).annotate({ identifier: "AdapterOverview" });
    case 7:
      return S.Array(AdapterOverview);
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Adapters: S.optional(AdapterList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAdaptersResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AdapterId: S.optional(S.String),
          AfterCreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          BeforeCreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAdapterVersionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AdapterId: S.optional(S.String),
          AdapterVersion: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FeatureTypes: S.optional(FeatureTypes),
          Status: S.optional(AdapterVersionStatus),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "AdapterVersionOverview" });
    case 3:
      return S.Array(AdapterVersionOverview);
    case 4:
      return S.suspend(() =>
        S.Struct({
          AdapterVersions: S.optional(AdapterVersionList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAdapterVersionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ Tags: S.optional(TagMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ S3Object: S.optional(S3Object) })).annotate({
        identifier: "DocumentLocation",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ SNSTopicArn: S.String, RoleArn: S.String })).annotate({
        identifier: "NotificationChannel",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DocumentLocation: DocumentLocation,
          FeatureTypes: FeatureTypes,
          ClientRequestToken: S.optional(S.String),
          JobTag: S.optional(S.String),
          NotificationChannel: S.optional(NotificationChannel),
          OutputConfig: S.optional(OutputConfig),
          KMSKeyId: S.optional(S.String),
          QueriesConfig: S.optional(QueriesConfig),
          AdaptersConfig: S.optional(AdaptersConfig),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartDocumentAnalysisRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ JobId: S.optional(S.String) })).annotate({
        identifier: "StartDocumentAnalysisResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DocumentLocation: DocumentLocation,
          ClientRequestToken: S.optional(S.String),
          JobTag: S.optional(S.String),
          NotificationChannel: S.optional(NotificationChannel),
          OutputConfig: S.optional(OutputConfig),
          KMSKeyId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartDocumentTextDetectionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DocumentLocation: DocumentLocation,
          ClientRequestToken: S.optional(S.String),
          JobTag: S.optional(S.String),
          NotificationChannel: S.optional(NotificationChannel),
          OutputConfig: S.optional(OutputConfig),
          KMSKeyId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartExpenseAnalysisRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DocumentLocation: DocumentLocation,
          ClientRequestToken: S.optional(S.String),
          JobTag: S.optional(S.String),
          NotificationChannel: S.optional(NotificationChannel),
          OutputConfig: S.optional(OutputConfig),
          KMSKeyId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartLendingAnalysisRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: TagMap }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: TagKeyList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AdapterId: S.String,
          Description: S.optional(S.String),
          AdapterName: S.optional(S.String),
          AutoUpdate: S.optional(AutoUpdate),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateAdapterRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AdapterId: S.optional(S.String),
          AdapterName: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(S.String),
          FeatureTypes: S.optional(FeatureTypes),
          AutoUpdate: S.optional(AutoUpdate),
        }),
      ).annotate({ identifier: "UpdateAdapterResponse" });
  }
}
