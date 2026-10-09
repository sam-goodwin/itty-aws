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
  sdkId: "Bedrock Data Automation",
  serviceShapeName: "AmazonBedrockKeystoneBuildTimeService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "bedrock" });
const ver = /*@__PURE__*/ T.ServiceVersion("2023-07-26");
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
              `https://bedrock-data-automation-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://bedrock-data-automation-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://bedrock-data-automation.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://bedrock-data-automation.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type BlueprintArn = string;
export type BlueprintStage = "DEVELOPMENT" | "LIVE" | (string & {});
const BlueprintStage = S.String;

export type ClientToken = string;
export interface CopyBlueprintStageRequest {
  blueprintArn: string;
  sourceStage: BlueprintStage;
  targetStage: BlueprintStage;
  clientToken?: string;
}
const CopyBlueprintStageRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<CopyBlueprintStageRequest>;
export interface CopyBlueprintStageResponse {}
const CopyBlueprintStageResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<CopyBlueprintStageResponse>;
export type BlueprintName = string | redacted.Redacted<string>;
export type Type = "DOCUMENT" | "IMAGE" | "AUDIO" | "VIDEO" | (string & {});
const Type = S.String;

export type BlueprintSchema = string | redacted.Redacted<string>;
export type KmsKeyId = string;
export type EncryptionContextKey = string;
export type EncryptionContextValue = string;
export type KmsEncryptionContext = { [key: string]: string | undefined };
const KmsEncryptionContext = /*@__PURE__*/ __L.at(__c0, 2);
export interface EncryptionConfiguration {
  kmsKeyId: string;
  kmsEncryptionContext?: { [key: string]: string | undefined };
}
const EncryptionConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<EncryptionConfiguration>;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c0, 5);
export interface CreateBlueprintRequest {
  blueprintName: string | redacted.Redacted<string>;
  type: Type;
  blueprintStage?: BlueprintStage;
  schema: string | redacted.Redacted<string>;
  clientToken?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  tags?: Tag[];
}
const CreateBlueprintRequest = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<CreateBlueprintRequest>;
export type BlueprintVersion = string;
export type S3Uri = string;
export type S3ObjectVersion = string;
export interface S3Object {
  s3Uri: string;
  version?: string;
}
const S3Object = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<S3Object>;
export interface BlueprintOptimizationSample {
  assetS3Object: S3Object;
  groundTruthS3Object: S3Object;
}
const BlueprintOptimizationSample = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<BlueprintOptimizationSample>;
export type BlueprintOptimizationSamples = BlueprintOptimizationSample[];
const BlueprintOptimizationSamples = /*@__PURE__*/ __L.at(__c1, 1);
export interface Blueprint {
  blueprintArn: string;
  schema: string | redacted.Redacted<string>;
  type: Type;
  creationTime: Date;
  lastModifiedTime: Date;
  blueprintName: string | redacted.Redacted<string>;
  blueprintVersion?: string;
  blueprintStage?: BlueprintStage;
  kmsKeyId?: string;
  kmsEncryptionContext?: { [key: string]: string | undefined };
  optimizationSamples?: BlueprintOptimizationSample[];
  optimizationTime?: Date;
}
const Blueprint = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<Blueprint>;
export interface CreateBlueprintResponse {
  blueprint: Blueprint;
}
const CreateBlueprintResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<CreateBlueprintResponse>;
export interface CreateBlueprintVersionRequest {
  blueprintArn: string;
  clientToken?: string;
}
const CreateBlueprintVersionRequest = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<CreateBlueprintVersionRequest>;
export interface CreateBlueprintVersionResponse {
  blueprint: Blueprint;
}
const CreateBlueprintVersionResponse = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<CreateBlueprintVersionResponse>;
export type DataAutomationLibraryName = string | redacted.Redacted<string>;
export type DataAutomationLibraryDescription = string | redacted.Redacted<string>;
export interface CreateDataAutomationLibraryRequest {
  libraryName: string | redacted.Redacted<string>;
  libraryDescription?: string | redacted.Redacted<string>;
  clientToken?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  tags?: Tag[];
}
const CreateDataAutomationLibraryRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CreateDataAutomationLibraryRequest>;
export type DataAutomationLibraryArn = string;
export type DataAutomationLibraryStatus = "ACTIVE" | "DELETING" | (string & {});
const DataAutomationLibraryStatus = S.String;

export interface CreateDataAutomationLibraryResponse {
  libraryArn?: string;
  status?: DataAutomationLibraryStatus;
}
const CreateDataAutomationLibraryResponse = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<CreateDataAutomationLibraryResponse>;
export type DataAutomationProjectName = string | redacted.Redacted<string>;
export type DataAutomationProjectDescription = string | redacted.Redacted<string>;
export type DataAutomationProjectStage = "DEVELOPMENT" | "LIVE" | (string & {});
const DataAutomationProjectStage = S.String;

export type DataAutomationProjectType = "ASYNC" | "SYNC" | (string & {});
const DataAutomationProjectType = S.String;

export type DocumentExtractionGranularityType =
  | "DOCUMENT"
  | "PAGE"
  | "ELEMENT"
  | "WORD"
  | "LINE"
  | (string & {});
const DocumentExtractionGranularityType = S.String;

export type DocumentExtractionGranularityTypes = DocumentExtractionGranularityType[];
const DocumentExtractionGranularityTypes = /*@__PURE__*/ __L.at(__c2, 0);
export interface DocumentExtractionGranularity {
  types?: DocumentExtractionGranularityType[];
}
const DocumentExtractionGranularity = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<DocumentExtractionGranularity>;
export type State = "ENABLED" | "DISABLED" | (string & {});
const State = S.String;

export interface DocumentBoundingBox {
  state: State;
}
const DocumentBoundingBox = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<DocumentBoundingBox>;
export interface DocumentStandardExtraction {
  granularity: DocumentExtractionGranularity;
  boundingBox: DocumentBoundingBox;
}
const DocumentStandardExtraction = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<DocumentStandardExtraction>;
export interface DocumentStandardGenerativeField {
  state: State;
}
const DocumentStandardGenerativeField = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<DocumentStandardGenerativeField>;
export type DocumentOutputTextFormatType =
  | "PLAIN_TEXT"
  | "MARKDOWN"
  | "HTML"
  | "CSV"
  | (string & {});
const DocumentOutputTextFormatType = S.String;

export type DocumentOutputTextFormatTypes = DocumentOutputTextFormatType[];
const DocumentOutputTextFormatTypes = /*@__PURE__*/ __L.at(__c2, 5);
export interface DocumentOutputTextFormat {
  types?: DocumentOutputTextFormatType[];
}
const DocumentOutputTextFormat = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<DocumentOutputTextFormat>;
export interface DocumentOutputAdditionalFileFormat {
  state: State;
}
const DocumentOutputAdditionalFileFormat =
  DocumentStandardGenerativeField as any as S.Schema<DocumentOutputAdditionalFileFormat>;
export interface DocumentOutputFormat {
  textFormat: DocumentOutputTextFormat;
  additionalFileFormat: DocumentOutputAdditionalFileFormat;
}
const DocumentOutputFormat = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<DocumentOutputFormat>;
export interface DocumentStandardOutputConfiguration {
  extraction?: DocumentStandardExtraction;
  generativeField?: DocumentStandardGenerativeField;
  outputFormat?: DocumentOutputFormat;
}
const DocumentStandardOutputConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<DocumentStandardOutputConfiguration>;
export type ImageExtractionCategoryType =
  | "CONTENT_MODERATION"
  | "TEXT_DETECTION"
  | "LOGOS"
  | (string & {});
export type ImageExtractionCategoryTypes = ImageExtractionCategoryType[];
const ImageExtractionCategoryTypes =
  DocumentOutputTextFormatTypes as any as S.Schema<ImageExtractionCategoryTypes>;
export interface ImageExtractionCategory {
  state: State;
  types?: ImageExtractionCategoryType[];
}
const ImageExtractionCategory = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<ImageExtractionCategory>;
export interface ImageBoundingBox {
  state: State;
}
const ImageBoundingBox = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<ImageBoundingBox>;
export interface ImageStandardExtraction {
  category: ImageExtractionCategory;
  boundingBox: ImageBoundingBox;
}
const ImageStandardExtraction = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<ImageStandardExtraction>;
export type ImageStandardGenerativeFieldType = "IMAGE_SUMMARY" | "IAB" | (string & {});
export type ImageStandardGenerativeFieldTypes = ImageStandardGenerativeFieldType[];
const ImageStandardGenerativeFieldTypes =
  DocumentExtractionGranularityTypes as any as S.Schema<ImageStandardGenerativeFieldTypes>;
export interface ImageStandardGenerativeField {
  state: State;
  types?: ImageStandardGenerativeFieldType[];
}
const ImageStandardGenerativeField = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<ImageStandardGenerativeField>;
export interface ImageStandardOutputConfiguration {
  extraction?: ImageStandardExtraction;
  generativeField?: ImageStandardGenerativeField;
}
const ImageStandardOutputConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<ImageStandardOutputConfiguration>;
export type VideoExtractionCategoryType =
  | "CONTENT_MODERATION"
  | "TEXT_DETECTION"
  | "TRANSCRIPT"
  | "LOGOS"
  | (string & {});
export type VideoExtractionCategoryTypes = VideoExtractionCategoryType[];
export interface VideoExtractionCategory {
  state: State;
  types?: VideoExtractionCategoryType[];
}
const VideoExtractionCategory = ImageExtractionCategory as any as S.Schema<VideoExtractionCategory>;
export interface VideoBoundingBox {
  state: State;
}
const VideoBoundingBox = ImageBoundingBox as any as S.Schema<VideoBoundingBox>;
export interface VideoStandardExtraction {
  category: VideoExtractionCategory;
  boundingBox: VideoBoundingBox;
}
const VideoStandardExtraction = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<VideoStandardExtraction>;
export type VideoStandardGenerativeFieldType =
  | "VIDEO_SUMMARY"
  | "IAB"
  | "CHAPTER_SUMMARY"
  | (string & {});
export type VideoStandardGenerativeFieldTypes = VideoStandardGenerativeFieldType[];
export interface VideoStandardGenerativeField {
  state: State;
  types?: VideoStandardGenerativeFieldType[];
}
const VideoStandardGenerativeField =
  ImageStandardGenerativeField as any as S.Schema<VideoStandardGenerativeField>;
export interface VideoStandardOutputConfiguration {
  extraction?: VideoStandardExtraction;
  generativeField?: VideoStandardGenerativeField;
}
const VideoStandardOutputConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<VideoStandardOutputConfiguration>;
export type AudioExtractionCategoryType =
  | "AUDIO_CONTENT_MODERATION"
  | "TRANSCRIPT"
  | "TOPIC_CONTENT_MODERATION"
  | (string & {});
export type AudioExtractionCategoryTypes = AudioExtractionCategoryType[];
const AudioExtractionCategoryTypes =
  DocumentOutputTextFormatTypes as any as S.Schema<AudioExtractionCategoryTypes>;
export interface SpeakerLabelingConfiguration {
  state: State;
}
const SpeakerLabelingConfiguration =
  DocumentStandardGenerativeField as any as S.Schema<SpeakerLabelingConfiguration>;
export interface ChannelLabelingConfiguration {
  state: State;
}
const ChannelLabelingConfiguration =
  DocumentStandardGenerativeField as any as S.Schema<ChannelLabelingConfiguration>;
export interface TranscriptConfiguration {
  speakerLabeling?: SpeakerLabelingConfiguration;
  channelLabeling?: ChannelLabelingConfiguration;
}
const TranscriptConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<TranscriptConfiguration>;
export interface AudioExtractionCategoryTypeConfiguration {
  transcript?: TranscriptConfiguration;
}
const AudioExtractionCategoryTypeConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<AudioExtractionCategoryTypeConfiguration>;
export interface AudioExtractionCategory {
  state: State;
  types?: AudioExtractionCategoryType[];
  typeConfiguration?: AudioExtractionCategoryTypeConfiguration;
}
const AudioExtractionCategory = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<AudioExtractionCategory>;
export interface AudioStandardExtraction {
  category: AudioExtractionCategory;
}
const AudioStandardExtraction = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<AudioStandardExtraction>;
export type AudioStandardGenerativeFieldType =
  | "AUDIO_SUMMARY"
  | "IAB"
  | "TOPIC_SUMMARY"
  | (string & {});
export type AudioStandardGenerativeFieldTypes = AudioStandardGenerativeFieldType[];
export interface AudioStandardGenerativeField {
  state: State;
  types?: AudioStandardGenerativeFieldType[];
}
const AudioStandardGenerativeField =
  ImageStandardGenerativeField as any as S.Schema<AudioStandardGenerativeField>;
export interface AudioStandardOutputConfiguration {
  extraction?: AudioStandardExtraction;
  generativeField?: AudioStandardGenerativeField;
}
const AudioStandardOutputConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<AudioStandardOutputConfiguration>;
export interface StandardOutputConfiguration {
  document?: DocumentStandardOutputConfiguration;
  image?: ImageStandardOutputConfiguration;
  video?: VideoStandardOutputConfiguration;
  audio?: AudioStandardOutputConfiguration;
}
const StandardOutputConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<StandardOutputConfiguration>;
export interface BlueprintItem {
  blueprintArn: string;
  blueprintVersion?: string;
  blueprintStage?: BlueprintStage;
}
const BlueprintItem = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<BlueprintItem>;
export type BlueprintItems = BlueprintItem[];
const BlueprintItems = /*@__PURE__*/ __L.at(__c4, 7);
export type FallbackBlueprintItems = BlueprintItem[];
const FallbackBlueprintItems = BlueprintItems as any as S.Schema<FallbackBlueprintItems>;
export interface DocumentCustomOutputConfiguration {
  fallbackBlueprints?: BlueprintItem[];
}
const DocumentCustomOutputConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<DocumentCustomOutputConfiguration>;
export interface CustomOutputConfiguration {
  blueprints?: BlueprintItem[];
  document?: DocumentCustomOutputConfiguration;
}
const CustomOutputConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<CustomOutputConfiguration>;
export interface SplitterConfiguration {
  state?: State;
}
const SplitterConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<SplitterConfiguration>;
export interface ModalityProcessingConfiguration {
  state?: State;
}
const ModalityProcessingConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<ModalityProcessingConfiguration>;
export type SensitiveDataDetectionMode = "DETECTION" | "DETECTION_AND_REDACTION" | (string & {});
const SensitiveDataDetectionMode = S.String;

export type SensitiveDataDetectionScopeType = "STANDARD" | "CUSTOM" | (string & {});
export type SensitiveDataDetectionScope = SensitiveDataDetectionScopeType[];
const SensitiveDataDetectionScope =
  DocumentOutputTextFormatTypes as any as S.Schema<SensitiveDataDetectionScope>;
export type PIIEntityType =
  | "ALL"
  | "ADDRESS"
  | "AGE"
  | "NAME"
  | "EMAIL"
  | "PHONE"
  | "USERNAME"
  | "PASSWORD"
  | "DRIVER_ID"
  | "LICENSE_PLATE"
  | "VEHICLE_IDENTIFICATION_NUMBER"
  | "CREDIT_DEBIT_CARD_CVV"
  | "CREDIT_DEBIT_CARD_EXPIRY"
  | "CREDIT_DEBIT_CARD_NUMBER"
  | "PIN"
  | "INTERNATIONAL_BANK_ACCOUNT_NUMBER"
  | "SWIFT_CODE"
  | "IP_ADDRESS"
  | "MAC_ADDRESS"
  | "URL"
  | "AWS_ACCESS_KEY"
  | "AWS_SECRET_KEY"
  | "US_BANK_ACCOUNT_NUMBER"
  | "US_BANK_ROUTING_NUMBER"
  | "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER"
  | "US_PASSPORT_NUMBER"
  | "US_SOCIAL_SECURITY_NUMBER"
  | "CA_HEALTH_NUMBER"
  | "CA_SOCIAL_INSURANCE_NUMBER"
  | "UK_NATIONAL_HEALTH_SERVICE_NUMBER"
  | "UK_NATIONAL_INSURANCE_NUMBER"
  | "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER"
  | (string & {});
export type PIIEntityTypes = PIIEntityType[];
const PIIEntityTypes = DocumentOutputTextFormatTypes as any as S.Schema<PIIEntityTypes>;
export type PIIRedactionMaskMode = "PII" | "ENTITY_TYPE" | (string & {});
const PIIRedactionMaskMode = S.String;

export interface PIIEntitiesConfiguration {
  piiEntityTypes?: PIIEntityType[];
  redactionMaskMode?: PIIRedactionMaskMode;
}
const PIIEntitiesConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<PIIEntitiesConfiguration>;
export interface SensitiveDataConfiguration {
  detectionMode: SensitiveDataDetectionMode;
  detectionScope?: SensitiveDataDetectionScopeType[];
  piiEntitiesConfiguration?: PIIEntitiesConfiguration;
}
const SensitiveDataConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<SensitiveDataConfiguration>;
export interface DocumentOverrideConfiguration {
  splitter?: SplitterConfiguration;
  modalityProcessing?: ModalityProcessingConfiguration;
  sensitiveDataConfiguration?: SensitiveDataConfiguration;
}
const DocumentOverrideConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<DocumentOverrideConfiguration>;
export interface ImageOverrideConfiguration {
  modalityProcessing?: ModalityProcessingConfiguration;
  sensitiveDataConfiguration?: SensitiveDataConfiguration;
}
const ImageOverrideConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<ImageOverrideConfiguration>;
export interface VideoOverrideConfiguration {
  modalityProcessing?: ModalityProcessingConfiguration;
  sensitiveDataConfiguration?: SensitiveDataConfiguration;
}
const VideoOverrideConfiguration =
  ImageOverrideConfiguration as any as S.Schema<VideoOverrideConfiguration>;
export type Language =
  | "EN"
  | "DE"
  | "ES"
  | "FR"
  | "IT"
  | "PT"
  | "JA"
  | "KO"
  | "CN"
  | "TW"
  | "HK"
  | (string & {});
const Language = S.String;

export type AudioInputLanguages = Language[];
const AudioInputLanguages = DocumentOutputTextFormatTypes as any as S.Schema<AudioInputLanguages>;
export type AudioGenerativeOutputLanguage = "DEFAULT" | "EN" | (string & {});
const AudioGenerativeOutputLanguage = S.String;

export interface AudioLanguageConfiguration {
  inputLanguages?: Language[];
  generativeOutputLanguage?: AudioGenerativeOutputLanguage;
  identifyMultipleLanguages?: boolean;
}
const AudioLanguageConfiguration = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<AudioLanguageConfiguration>;
export interface AudioOverrideConfiguration {
  modalityProcessing?: ModalityProcessingConfiguration;
  languageConfiguration?: AudioLanguageConfiguration;
  sensitiveDataConfiguration?: SensitiveDataConfiguration;
}
const AudioOverrideConfiguration = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<AudioOverrideConfiguration>;
export type DesiredModality = "IMAGE" | "DOCUMENT" | "AUDIO" | "VIDEO" | (string & {});
const DesiredModality = S.String;

export interface ModalityRoutingConfiguration {
  jpeg?: DesiredModality;
  png?: DesiredModality;
  mp4?: DesiredModality;
  mov?: DesiredModality;
}
const ModalityRoutingConfiguration = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<ModalityRoutingConfiguration>;
export interface OverrideConfiguration {
  document?: DocumentOverrideConfiguration;
  image?: ImageOverrideConfiguration;
  video?: VideoOverrideConfiguration;
  audio?: AudioOverrideConfiguration;
  modalityRouting?: ModalityRoutingConfiguration;
}
const OverrideConfiguration = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<OverrideConfiguration>;
export interface DataAutomationLibraryItem {
  libraryArn: string;
}
const DataAutomationLibraryItem = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<DataAutomationLibraryItem>;
export type DataAutomationLibraryItems = DataAutomationLibraryItem[];
const DataAutomationLibraryItems = /*@__PURE__*/ __L.at(__c6, 5);
export interface DataAutomationLibraryConfiguration {
  libraries?: DataAutomationLibraryItem[];
}
const DataAutomationLibraryConfiguration = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<DataAutomationLibraryConfiguration>;
export interface CreateDataAutomationProjectRequest {
  projectName: string | redacted.Redacted<string>;
  projectDescription?: string | redacted.Redacted<string>;
  projectStage?: DataAutomationProjectStage;
  projectType?: DataAutomationProjectType;
  standardOutputConfiguration: StandardOutputConfiguration;
  customOutputConfiguration?: CustomOutputConfiguration;
  overrideConfiguration?: OverrideConfiguration;
  dataAutomationLibraryConfiguration?: DataAutomationLibraryConfiguration;
  clientToken?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  tags?: Tag[];
}
const CreateDataAutomationProjectRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<CreateDataAutomationProjectRequest>;
export type DataAutomationProjectArn = string;
export type DataAutomationProjectStatus = "COMPLETED" | "IN_PROGRESS" | "FAILED" | (string & {});
const DataAutomationProjectStatus = S.String;

export interface CreateDataAutomationProjectResponse {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
  status?: DataAutomationProjectStatus;
}
const CreateDataAutomationProjectResponse = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<CreateDataAutomationProjectResponse>;
export interface DeleteBlueprintRequest {
  blueprintArn: string;
  blueprintVersion?: string;
}
const DeleteBlueprintRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DeleteBlueprintRequest>;
export interface DeleteBlueprintResponse {}
const DeleteBlueprintResponse =
  CopyBlueprintStageResponse as any as S.Schema<DeleteBlueprintResponse>;
export interface DeleteDataAutomationLibraryRequest {
  libraryArn: string;
}
const DeleteDataAutomationLibraryRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DeleteDataAutomationLibraryRequest>;
export interface DeleteDataAutomationLibraryResponse {
  libraryArn?: string;
  status?: DataAutomationLibraryStatus;
}
const DeleteDataAutomationLibraryResponse =
  CreateDataAutomationLibraryResponse as any as S.Schema<DeleteDataAutomationLibraryResponse>;
export interface DeleteDataAutomationProjectRequest {
  projectArn: string;
}
const DeleteDataAutomationProjectRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<DeleteDataAutomationProjectRequest>;
export interface DeleteDataAutomationProjectResponse {
  projectArn: string;
  status?: DataAutomationProjectStatus;
}
const DeleteDataAutomationProjectResponse = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<DeleteDataAutomationProjectResponse>;
export interface GetBlueprintRequest {
  blueprintArn: string;
  blueprintVersion?: string;
  blueprintStage?: BlueprintStage;
}
const GetBlueprintRequest = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<GetBlueprintRequest>;
export interface GetBlueprintResponse {
  blueprint: Blueprint;
}
const GetBlueprintResponse = CreateBlueprintResponse as any as S.Schema<GetBlueprintResponse>;
export type BlueprintOptimizationInvocationArn = string;
export interface GetBlueprintOptimizationStatusRequest {
  invocationArn: string;
}
const GetBlueprintOptimizationStatusRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<GetBlueprintOptimizationStatusRequest>;
export type BlueprintOptimizationJobStatus =
  | "Created"
  | "InProgress"
  | "Success"
  | "ServiceError"
  | "ClientError"
  | (string & {});
const BlueprintOptimizationJobStatus = S.String;

export interface BlueprintOptimizationOutputConfiguration {
  s3Object: S3Object;
}
const BlueprintOptimizationOutputConfiguration = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<BlueprintOptimizationOutputConfiguration>;
export interface GetBlueprintOptimizationStatusResponse {
  status?: BlueprintOptimizationJobStatus;
  errorType?: string;
  errorMessage?: string;
  outputConfiguration?: BlueprintOptimizationOutputConfiguration;
}
const GetBlueprintOptimizationStatusResponse = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<GetBlueprintOptimizationStatusResponse>;
export interface GetDataAutomationLibraryRequest {
  libraryArn: string;
}
const GetDataAutomationLibraryRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<GetDataAutomationLibraryRequest>;
export type EntityType = "VOCABULARY" | (string & {});
const EntityType = S.String;

export type EntityMetadata = string;
export interface EntityTypeInfo {
  entityType: EntityType;
  entityMetadata?: string;
}
const EntityTypeInfo = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<EntityTypeInfo>;
export type EntityTypeInfoList = EntityTypeInfo[];
const EntityTypeInfoList = /*@__PURE__*/ __L.at(__c8, 3);
export interface DataAutomationLibrary {
  libraryArn: string;
  creationTime: Date;
  libraryName: string | redacted.Redacted<string>;
  libraryDescription?: string | redacted.Redacted<string>;
  status: DataAutomationLibraryStatus;
  entityTypes?: EntityTypeInfo[];
  kmsKeyId?: string;
  kmsEncryptionContext?: { [key: string]: string | undefined };
}
const DataAutomationLibrary = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<DataAutomationLibrary>;
export interface GetDataAutomationLibraryResponse {
  library?: DataAutomationLibrary;
}
const GetDataAutomationLibraryResponse = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<GetDataAutomationLibraryResponse>;
export type EntityId = string;
export interface GetDataAutomationLibraryEntityRequest {
  libraryArn: string;
  entityType: EntityType;
  entityId: string;
}
const GetDataAutomationLibraryEntityRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<GetDataAutomationLibraryEntityRequest>;
export type EntityDescription = string | redacted.Redacted<string>;
export type PhraseText = string | redacted.Redacted<string>;
export type PhraseDisplayAsText = string | redacted.Redacted<string>;
export interface Phrase {
  text: string | redacted.Redacted<string>;
  displayAsText?: string | redacted.Redacted<string>;
}
const Phrase = /*@__PURE__*/ __L.at(__c8, 7) as any as S.Schema<Phrase>;
export type PhraseList = Phrase[];
const PhraseList = /*@__PURE__*/ __L.at(__c9, 0);
export interface VocabularyEntity {
  entityId?: string;
  description?: string | redacted.Redacted<string>;
  language?: Language;
  phrases?: Phrase[];
  lastModifiedTime?: Date;
}
const VocabularyEntity = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<VocabularyEntity>;
export type EntityDetails = { vocabulary: VocabularyEntity };
const EntityDetails = /*@__PURE__*/ __L.at(__c9, 2);
export interface GetDataAutomationLibraryEntityResponse {
  entity?: EntityDetails;
}
const GetDataAutomationLibraryEntityResponse = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<GetDataAutomationLibraryEntityResponse>;
export type DataAutomationLibraryIngestionJobArn = string;
export interface GetDataAutomationLibraryIngestionJobRequest {
  libraryArn: string;
  jobArn: string;
}
const GetDataAutomationLibraryIngestionJobRequest = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<GetDataAutomationLibraryIngestionJobRequest>;
export type LibraryIngestionJobOperationType = "UPSERT" | "DELETE" | (string & {});
const LibraryIngestionJobOperationType = S.String;

export type LibraryIngestionJobStatus =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "COMPLETED_WITH_ERRORS"
  | "FAILED"
  | (string & {});
const LibraryIngestionJobStatus = S.String;

export interface OutputConfiguration {
  s3Uri: string;
}
const OutputConfiguration = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<OutputConfiguration>;
export interface DataAutomationLibraryIngestionJob {
  jobArn: string;
  creationTime: Date;
  entityType: EntityType;
  operationType: LibraryIngestionJobOperationType;
  jobStatus: LibraryIngestionJobStatus;
  outputConfiguration: OutputConfiguration;
  completionTime?: Date;
  errorMessage?: string;
  errorType?: string;
}
const DataAutomationLibraryIngestionJob = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<DataAutomationLibraryIngestionJob>;
export interface GetDataAutomationLibraryIngestionJobResponse {
  job?: DataAutomationLibraryIngestionJob;
}
const GetDataAutomationLibraryIngestionJobResponse = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<GetDataAutomationLibraryIngestionJobResponse>;
export interface GetDataAutomationProjectRequest {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
}
const GetDataAutomationProjectRequest = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<GetDataAutomationProjectRequest>;
export interface DataAutomationProject {
  projectArn: string;
  creationTime: Date;
  lastModifiedTime: Date;
  projectName: string | redacted.Redacted<string>;
  projectStage?: DataAutomationProjectStage;
  projectType?: DataAutomationProjectType;
  projectDescription?: string | redacted.Redacted<string>;
  standardOutputConfiguration?: StandardOutputConfiguration;
  customOutputConfiguration?: CustomOutputConfiguration;
  overrideConfiguration?: OverrideConfiguration;
  dataAutomationLibraryConfiguration?: DataAutomationLibraryConfiguration;
  status: DataAutomationProjectStatus;
  kmsKeyId?: string;
  kmsEncryptionContext?: { [key: string]: string | undefined };
}
const DataAutomationProject = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<DataAutomationProject>;
export interface GetDataAutomationProjectResponse {
  project: DataAutomationProject;
}
const GetDataAutomationProjectResponse = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<GetDataAutomationProjectResponse>;
export interface BlueprintOptimizationObject {
  blueprintArn: string;
  stage?: BlueprintStage;
}
const BlueprintOptimizationObject = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<BlueprintOptimizationObject>;
export type DataAutomationProfileArn = string;
export interface InvokeBlueprintOptimizationAsyncRequest {
  blueprint: BlueprintOptimizationObject;
  samples: BlueprintOptimizationSample[];
  outputConfiguration: BlueprintOptimizationOutputConfiguration;
  dataAutomationProfileArn: string;
  encryptionConfiguration?: EncryptionConfiguration;
  tags?: Tag[];
}
const InvokeBlueprintOptimizationAsyncRequest = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<InvokeBlueprintOptimizationAsyncRequest>;
export interface InvokeBlueprintOptimizationAsyncResponse {
  invocationArn: string;
}
const InvokeBlueprintOptimizationAsyncResponse = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<InvokeBlueprintOptimizationAsyncResponse>;
export interface VocabularyEntityInfo {
  entityId?: string;
  description?: string | redacted.Redacted<string>;
  language: Language;
  phrases: Phrase[];
}
const VocabularyEntityInfo = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<VocabularyEntityInfo>;
export type UpsertEntityInfo = { vocabulary: VocabularyEntityInfo };
const UpsertEntityInfo = /*@__PURE__*/ __L.at(__c10, 7);
export type UpsertEntitiesInfo = UpsertEntityInfo[];
const UpsertEntitiesInfo = /*@__PURE__*/ __L.at(__c11, 0);
export type EntityIdList = string[];
const EntityIdList = /*@__PURE__*/ __L.at(__c11, 1);
export interface DeleteEntitiesInfo {
  entityIds: string[];
}
const DeleteEntitiesInfo = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<DeleteEntitiesInfo>;
export type InlinePayload =
  | { upsertEntitiesInfo: UpsertEntityInfo[]; deleteEntitiesInfo?: never }
  | { upsertEntitiesInfo?: never; deleteEntitiesInfo: DeleteEntitiesInfo };
const InlinePayload = /*@__PURE__*/ __L.at(__c11, 3);
export interface InputConfiguration {
  s3Object?: S3Object;
  inlinePayload?: InlinePayload;
}
const InputConfiguration = /*@__PURE__*/ __L.at(__c11, 4) as any as S.Schema<InputConfiguration>;
export interface EventBridgeConfiguration {
  eventBridgeEnabled: boolean;
}
const EventBridgeConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<EventBridgeConfiguration>;
export interface NotificationConfiguration {
  eventBridgeConfiguration: EventBridgeConfiguration;
}
const NotificationConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<NotificationConfiguration>;
export interface InvokeDataAutomationLibraryIngestionJobRequest {
  libraryArn: string;
  clientToken?: string;
  inputConfiguration: InputConfiguration;
  entityType: EntityType;
  operationType: LibraryIngestionJobOperationType;
  outputConfiguration: OutputConfiguration;
  notificationConfiguration?: NotificationConfiguration;
  tags?: Tag[];
}
const InvokeDataAutomationLibraryIngestionJobRequest = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<InvokeDataAutomationLibraryIngestionJobRequest>;
export interface InvokeDataAutomationLibraryIngestionJobResponse {
  jobArn?: string;
}
const InvokeDataAutomationLibraryIngestionJobResponse = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<InvokeDataAutomationLibraryIngestionJobResponse>;
export type ResourceOwner = "SERVICE" | "ACCOUNT" | (string & {});
const ResourceOwner = S.String;

export type BlueprintStageFilter = "DEVELOPMENT" | "LIVE" | "ALL" | (string & {});
const BlueprintStageFilter = S.String;

export type MaxResults = number;
export type NextToken = string;
export interface DataAutomationProjectFilter {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
}
const DataAutomationProjectFilter = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<DataAutomationProjectFilter>;
export interface ListBlueprintsRequest {
  blueprintArn?: string;
  resourceOwner?: ResourceOwner;
  blueprintStageFilter?: BlueprintStageFilter;
  maxResults?: number;
  nextToken?: string;
  projectFilter?: DataAutomationProjectFilter;
}
const ListBlueprintsRequest = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<ListBlueprintsRequest>;
export interface BlueprintSummary {
  blueprintArn: string;
  blueprintVersion?: string;
  blueprintStage?: BlueprintStage;
  blueprintName?: string | redacted.Redacted<string>;
  creationTime: Date;
  lastModifiedTime?: Date;
}
const BlueprintSummary = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<BlueprintSummary>;
export type Blueprints = BlueprintSummary[];
const Blueprints = /*@__PURE__*/ __L.at(__c12, 4);
export interface ListBlueprintsResponse {
  blueprints: BlueprintSummary[];
  nextToken?: string;
}
const ListBlueprintsResponse = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<ListBlueprintsResponse>;
export interface ListDataAutomationLibrariesRequest {
  maxResults?: number;
  nextToken?: string;
  projectFilter?: DataAutomationProjectFilter;
}
const ListDataAutomationLibrariesRequest = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<ListDataAutomationLibrariesRequest>;
export interface DataAutomationLibrarySummary {
  libraryArn: string;
  libraryName?: string | redacted.Redacted<string>;
  creationTime: Date;
}
const DataAutomationLibrarySummary = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<DataAutomationLibrarySummary>;
export type DataAutomationLibrarySummaries = DataAutomationLibrarySummary[];
const DataAutomationLibrarySummaries = /*@__PURE__*/ __L.at(__c13, 0);
export interface ListDataAutomationLibrariesResponse {
  libraries?: DataAutomationLibrarySummary[];
  nextToken?: string;
}
const ListDataAutomationLibrariesResponse = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<ListDataAutomationLibrariesResponse>;
export interface ListDataAutomationLibraryEntitiesRequest {
  libraryArn: string;
  entityType: EntityType;
  maxResults?: number;
  nextToken?: string;
}
const ListDataAutomationLibraryEntitiesRequest = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<ListDataAutomationLibraryEntitiesRequest>;
export interface VocabularyEntitySummary {
  entityId?: string;
  description?: string | redacted.Redacted<string>;
  language?: Language;
  numOfPhrases?: number;
  lastModifiedTime?: Date;
}
const VocabularyEntitySummary = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<VocabularyEntitySummary>;
export type DataAutomationLibraryEntitySummary = { vocabulary: VocabularyEntitySummary };
const DataAutomationLibraryEntitySummary = /*@__PURE__*/ __L.at(__c13, 4);
export type DataAutomationLibraryEntitySummaries = DataAutomationLibraryEntitySummary[];
const DataAutomationLibraryEntitySummaries = /*@__PURE__*/ __L.at(__c13, 5);
export interface ListDataAutomationLibraryEntitiesResponse {
  entities?: DataAutomationLibraryEntitySummary[];
  nextToken?: string;
}
const ListDataAutomationLibraryEntitiesResponse = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<ListDataAutomationLibraryEntitiesResponse>;
export interface ListDataAutomationLibraryIngestionJobsRequest {
  libraryArn: string;
  maxResults?: number;
  nextToken?: string;
}
const ListDataAutomationLibraryIngestionJobsRequest = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<ListDataAutomationLibraryIngestionJobsRequest>;
export interface DataAutomationLibraryIngestionJobSummary {
  jobArn: string;
  jobStatus: LibraryIngestionJobStatus;
  entityType: EntityType;
  operationType: LibraryIngestionJobOperationType;
  creationTime: Date;
  completionTime?: Date;
}
const DataAutomationLibraryIngestionJobSummary = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<DataAutomationLibraryIngestionJobSummary>;
export type DataAutomationLibraryIngestionJobSummaries = DataAutomationLibraryIngestionJobSummary[];
const DataAutomationLibraryIngestionJobSummaries = /*@__PURE__*/ __L.at(__c14, 1);
export interface ListDataAutomationLibraryIngestionJobsResponse {
  jobs?: DataAutomationLibraryIngestionJobSummary[];
  nextToken?: string;
}
const ListDataAutomationLibraryIngestionJobsResponse = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<ListDataAutomationLibraryIngestionJobsResponse>;
export type DataAutomationProjectStageFilter = "DEVELOPMENT" | "LIVE" | "ALL" | (string & {});
const DataAutomationProjectStageFilter = S.String;

export interface BlueprintFilter {
  blueprintArn: string;
  blueprintVersion?: string;
  blueprintStage?: BlueprintStage;
}
const BlueprintFilter = BlueprintItem as any as S.Schema<BlueprintFilter>;
export interface DataAutomationLibraryFilter {
  libraryArn: string;
}
const DataAutomationLibraryFilter =
  DataAutomationLibraryItem as any as S.Schema<DataAutomationLibraryFilter>;
export interface ListDataAutomationProjectsRequest {
  maxResults?: number;
  nextToken?: string;
  projectStageFilter?: DataAutomationProjectStageFilter;
  blueprintFilter?: BlueprintFilter;
  resourceOwner?: ResourceOwner;
  libraryFilter?: DataAutomationLibraryFilter;
}
const ListDataAutomationProjectsRequest = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<ListDataAutomationProjectsRequest>;
export interface DataAutomationProjectSummary {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
  projectType?: DataAutomationProjectType;
  projectName?: string | redacted.Redacted<string>;
  creationTime: Date;
}
const DataAutomationProjectSummary = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<DataAutomationProjectSummary>;
export type DataAutomationProjectSummaries = DataAutomationProjectSummary[];
const DataAutomationProjectSummaries = /*@__PURE__*/ __L.at(__c14, 5);
export interface ListDataAutomationProjectsResponse {
  projects: DataAutomationProjectSummary[];
  nextToken?: string;
}
const ListDataAutomationProjectsResponse = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<ListDataAutomationProjectsResponse>;
export type TaggableResourceArn = string;
export interface ListTagsForResourceRequest {
  resourceARN: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface TagResourceRequest {
  resourceARN: string;
  tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c15, 1) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = CopyBlueprintStageResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = EntityIdList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = CopyBlueprintStageResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateBlueprintRequest {
  blueprintArn: string;
  schema: string | redacted.Redacted<string>;
  blueprintStage?: BlueprintStage;
  encryptionConfiguration?: EncryptionConfiguration;
}
const UpdateBlueprintRequest = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<UpdateBlueprintRequest>;
export interface UpdateBlueprintResponse {
  blueprint: Blueprint;
}
const UpdateBlueprintResponse = CreateBlueprintResponse as any as S.Schema<UpdateBlueprintResponse>;
export interface UpdateDataAutomationLibraryRequest {
  libraryArn: string;
  libraryDescription?: string | redacted.Redacted<string>;
  clientToken?: string;
}
const UpdateDataAutomationLibraryRequest = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<UpdateDataAutomationLibraryRequest>;
export interface UpdateDataAutomationLibraryResponse {
  libraryArn?: string;
  status?: DataAutomationLibraryStatus;
}
const UpdateDataAutomationLibraryResponse =
  CreateDataAutomationLibraryResponse as any as S.Schema<UpdateDataAutomationLibraryResponse>;
export interface UpdateDataAutomationProjectRequest {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
  projectDescription?: string | redacted.Redacted<string>;
  standardOutputConfiguration: StandardOutputConfiguration;
  customOutputConfiguration?: CustomOutputConfiguration;
  overrideConfiguration?: OverrideConfiguration;
  dataAutomationLibraryConfiguration?: DataAutomationLibraryConfiguration;
  encryptionConfiguration?: EncryptionConfiguration;
}
const UpdateDataAutomationProjectRequest = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<UpdateDataAutomationProjectRequest>;
export interface UpdateDataAutomationProjectResponse {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
  status?: DataAutomationProjectStatus;
}
const UpdateDataAutomationProjectResponse =
  CreateDataAutomationProjectResponse as any as S.Schema<UpdateDataAutomationProjectResponse>;
export type NonBlankString = string;
export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c15, 7);
export type CopyBlueprintStageError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Copies a Blueprint from one stage to another
 */
export const copyBlueprintStage: API.OperationMethod<
  CopyBlueprintStageRequest,
  CopyBlueprintStageResponse,
  CopyBlueprintStageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CopyBlueprintStageRequest,
  output: CopyBlueprintStageResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CopyBlueprintStage",
}));

export type CreateBlueprintError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Bedrock Data Automation Blueprint
 */
export const createBlueprint: API.OperationMethod<
  CreateBlueprintRequest,
  CreateBlueprintResponse,
  CreateBlueprintError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBlueprintRequest,
  output: CreateBlueprintResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBlueprint",
}));

export type CreateBlueprintVersionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new version of an existing Amazon Bedrock Data Automation Blueprint
 */
export const createBlueprintVersion: API.OperationMethod<
  CreateBlueprintVersionRequest,
  CreateBlueprintVersionResponse,
  CreateBlueprintVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBlueprintVersionRequest,
  output: CreateBlueprintVersionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBlueprintVersion",
}));

export type CreateDataAutomationLibraryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Bedrock Data Automation Library
 */
export const createDataAutomationLibrary: API.OperationMethod<
  CreateDataAutomationLibraryRequest,
  CreateDataAutomationLibraryResponse,
  CreateDataAutomationLibraryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDataAutomationLibraryRequest,
  output: CreateDataAutomationLibraryResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataAutomationLibrary",
}));

export type CreateDataAutomationProjectError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Bedrock Data Automation Project
 */
export const createDataAutomationProject: API.OperationMethod<
  CreateDataAutomationProjectRequest,
  CreateDataAutomationProjectResponse,
  CreateDataAutomationProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDataAutomationProjectRequest,
  output: CreateDataAutomationProjectResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataAutomationProject",
}));

export type DeleteBlueprintError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing Amazon Bedrock Data Automation Blueprint
 */
export const deleteBlueprint: API.OperationMethod<
  DeleteBlueprintRequest,
  DeleteBlueprintResponse,
  DeleteBlueprintError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBlueprintRequest,
  output: DeleteBlueprintResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBlueprint",
}));

export type DeleteDataAutomationLibraryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing Amazon Bedrock Data Automation Library
 */
export const deleteDataAutomationLibrary: API.OperationMethod<
  DeleteDataAutomationLibraryRequest,
  DeleteDataAutomationLibraryResponse,
  DeleteDataAutomationLibraryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDataAutomationLibraryRequest,
  output: DeleteDataAutomationLibraryResponse,
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
  operationName: "DeleteDataAutomationLibrary",
}));

export type DeleteDataAutomationProjectError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing Amazon Bedrock Data Automation Project
 */
export const deleteDataAutomationProject: API.OperationMethod<
  DeleteDataAutomationProjectRequest,
  DeleteDataAutomationProjectResponse,
  DeleteDataAutomationProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDataAutomationProjectRequest,
  output: DeleteDataAutomationProjectResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataAutomationProject",
}));

export type GetBlueprintError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an existing Amazon Bedrock Data Automation Blueprint
 */
export const getBlueprint: API.OperationMethod<
  GetBlueprintRequest,
  GetBlueprintResponse,
  GetBlueprintError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBlueprintRequest,
  output: GetBlueprintResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBlueprint",
}));

export type GetBlueprintOptimizationStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * API used to get blueprint optimization status.
 */
export const getBlueprintOptimizationStatus: API.OperationMethod<
  GetBlueprintOptimizationStatusRequest,
  GetBlueprintOptimizationStatusResponse,
  GetBlueprintOptimizationStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBlueprintOptimizationStatusRequest,
  output: GetBlueprintOptimizationStatusResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBlueprintOptimizationStatus",
}));

export type GetDataAutomationLibraryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an existing Amazon Bedrock Data Automation Library
 */
export const getDataAutomationLibrary: API.OperationMethod<
  GetDataAutomationLibraryRequest,
  GetDataAutomationLibraryResponse,
  GetDataAutomationLibraryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDataAutomationLibraryRequest,
  output: GetDataAutomationLibraryResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataAutomationLibrary",
}));

export type GetDataAutomationLibraryEntityError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an existing entity based on entity type from the library
 */
export const getDataAutomationLibraryEntity: API.OperationMethod<
  GetDataAutomationLibraryEntityRequest,
  GetDataAutomationLibraryEntityResponse,
  GetDataAutomationLibraryEntityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDataAutomationLibraryEntityRequest,
  output: GetDataAutomationLibraryEntityResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataAutomationLibraryEntity",
}));

export type GetDataAutomationLibraryIngestionJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * API used to get status of data automation library ingestion job
 */
export const getDataAutomationLibraryIngestionJob: API.OperationMethod<
  GetDataAutomationLibraryIngestionJobRequest,
  GetDataAutomationLibraryIngestionJobResponse,
  GetDataAutomationLibraryIngestionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDataAutomationLibraryIngestionJobRequest,
  output: GetDataAutomationLibraryIngestionJobResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataAutomationLibraryIngestionJob",
}));

export type GetDataAutomationProjectError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an existing Amazon Bedrock Data Automation Project
 */
export const getDataAutomationProject: API.OperationMethod<
  GetDataAutomationProjectRequest,
  GetDataAutomationProjectResponse,
  GetDataAutomationProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDataAutomationProjectRequest,
  output: GetDataAutomationProjectResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataAutomationProject",
}));

export type InvokeBlueprintOptimizationAsyncError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Invoke an async job to perform Blueprint Optimization
 */
export const invokeBlueprintOptimizationAsync: API.OperationMethod<
  InvokeBlueprintOptimizationAsyncRequest,
  InvokeBlueprintOptimizationAsyncResponse,
  InvokeBlueprintOptimizationAsyncError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InvokeBlueprintOptimizationAsyncRequest,
  output: InvokeBlueprintOptimizationAsyncResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InvokeBlueprintOptimizationAsync",
}));

export type InvokeDataAutomationLibraryIngestionJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Async API: Invoke data automation library ingestion job
 */
export const invokeDataAutomationLibraryIngestionJob: API.OperationMethod<
  InvokeDataAutomationLibraryIngestionJobRequest,
  InvokeDataAutomationLibraryIngestionJobResponse,
  InvokeDataAutomationLibraryIngestionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InvokeDataAutomationLibraryIngestionJobRequest,
  output: InvokeDataAutomationLibraryIngestionJobResponse,
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
  operationName: "InvokeDataAutomationLibraryIngestionJob",
}));

export type ListBlueprintsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all existing Amazon Bedrock Data Automation Blueprints
 */
export const listBlueprints: API.PaginatedOperationMethod<
  ListBlueprintsRequest,
  ListBlueprintsResponse,
  ListBlueprintsError,
  Credentials | HttpClient.HttpClient,
  BlueprintSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBlueprintsRequest,
  output: ListBlueprintsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBlueprints",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "blueprints",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataAutomationLibrariesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all existing Amazon Bedrock Data Automation Libraries
 */
export const listDataAutomationLibraries: API.PaginatedOperationMethod<
  ListDataAutomationLibrariesRequest,
  ListDataAutomationLibrariesResponse,
  ListDataAutomationLibrariesError,
  Credentials | HttpClient.HttpClient,
  DataAutomationLibrarySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDataAutomationLibrariesRequest,
  output: ListDataAutomationLibrariesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataAutomationLibraries",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "libraries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataAutomationLibraryEntitiesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all stored entities in the library
 */
export const listDataAutomationLibraryEntities: API.PaginatedOperationMethod<
  ListDataAutomationLibraryEntitiesRequest,
  ListDataAutomationLibraryEntitiesResponse,
  ListDataAutomationLibraryEntitiesError,
  Credentials | HttpClient.HttpClient,
  DataAutomationLibraryEntitySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDataAutomationLibraryEntitiesRequest,
  output: ListDataAutomationLibraryEntitiesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataAutomationLibraryEntities",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "entities",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataAutomationLibraryIngestionJobsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all data automation library ingestion jobs
 */
export const listDataAutomationLibraryIngestionJobs: API.PaginatedOperationMethod<
  ListDataAutomationLibraryIngestionJobsRequest,
  ListDataAutomationLibraryIngestionJobsResponse,
  ListDataAutomationLibraryIngestionJobsError,
  Credentials | HttpClient.HttpClient,
  DataAutomationLibraryIngestionJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDataAutomationLibraryIngestionJobsRequest,
  output: ListDataAutomationLibraryIngestionJobsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataAutomationLibraryIngestionJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataAutomationProjectsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all existing Amazon Bedrock Data Automation Projects
 */
export const listDataAutomationProjects: API.PaginatedOperationMethod<
  ListDataAutomationProjectsRequest,
  ListDataAutomationProjectsResponse,
  ListDataAutomationProjectsError,
  Credentials | HttpClient.HttpClient,
  DataAutomationProjectSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDataAutomationProjectsRequest,
  output: ListDataAutomationProjectsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataAutomationProjects",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "projects",
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
 * List tags for an Amazon Bedrock Data Automation resource
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

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Tag an Amazon Bedrock Data Automation resource
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
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Untag an Amazon Bedrock Data Automation resource
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

export type UpdateBlueprintError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing Amazon Bedrock Data Automation Blueprint
 */
export const updateBlueprint: API.OperationMethod<
  UpdateBlueprintRequest,
  UpdateBlueprintResponse,
  UpdateBlueprintError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBlueprintRequest,
  output: UpdateBlueprintResponse,
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
  operationName: "UpdateBlueprint",
}));

export type UpdateDataAutomationLibraryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing Amazon Bedrock Data Automation Library
 */
export const updateDataAutomationLibrary: API.OperationMethod<
  UpdateDataAutomationLibraryRequest,
  UpdateDataAutomationLibraryResponse,
  UpdateDataAutomationLibraryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDataAutomationLibraryRequest,
  output: UpdateDataAutomationLibraryResponse,
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
  operationName: "UpdateDataAutomationLibrary",
}));

export type UpdateDataAutomationProjectError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing Amazon Bedrock Data Automation Project
 */
export const updateDataAutomationProject: API.OperationMethod<
  UpdateDataAutomationProjectRequest,
  UpdateDataAutomationProjectResponse,
  UpdateDataAutomationProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDataAutomationProjectRequest,
  output: UpdateDataAutomationProjectResponse,
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
  operationName: "UpdateDataAutomationProject",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          blueprintArn: S.String.pipe(T.HttpLabel("blueprintArn")),
          sourceStage: BlueprintStage,
          targetStage: BlueprintStage,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/blueprints/{blueprintArn}/copy-stage" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CopyBlueprintStageRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CopyBlueprintStageResponse",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({ kmsKeyId: S.String, kmsEncryptionContext: S.optional(KmsEncryptionContext) }),
      ).annotate({ identifier: "EncryptionConfiguration" });
    case 4:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "Tag",
      });
    case 5:
      return S.Array(Tag);
    case 6:
      return S.suspend(() =>
        S.Struct({
          blueprintName: SensitiveString,
          type: Type,
          blueprintStage: S.optional(BlueprintStage),
          schema: SensitiveString,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          encryptionConfiguration: S.optional(EncryptionConfiguration),
          tags: S.optional(TagList),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/blueprints/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateBlueprintRequest" });
    case 7:
      return S.suspend(() => S.Struct({ s3Uri: S.String, version: S.optional(S.String) })).annotate(
        { identifier: "S3Object" },
      );
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ assetS3Object: S3Object, groundTruthS3Object: S3Object }),
      ).annotate({
        identifier: "BlueprintOptimizationSample",
      });
    case 1:
      return S.Array(BlueprintOptimizationSample);
    case 2:
      return S.suspend(() =>
        S.Struct({
          blueprintArn: S.String,
          schema: SensitiveString,
          type: Type,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          blueprintName: SensitiveString,
          blueprintVersion: S.optional(S.String),
          blueprintStage: S.optional(BlueprintStage),
          kmsKeyId: S.optional(S.String),
          kmsEncryptionContext: S.optional(KmsEncryptionContext),
          optimizationSamples: S.optional(BlueprintOptimizationSamples),
          optimizationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "Blueprint" });
    case 3:
      return S.suspend(() => S.Struct({ blueprint: Blueprint })).annotate({
        identifier: "CreateBlueprintResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          blueprintArn: S.String.pipe(T.HttpLabel("blueprintArn")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/blueprints/{blueprintArn}/versions/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateBlueprintVersionRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ blueprint: Blueprint })).annotate({
        identifier: "CreateBlueprintVersionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          libraryName: SensitiveString,
          libraryDescription: S.optional(SensitiveString),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          encryptionConfiguration: S.optional(EncryptionConfiguration),
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/data-automation-libraries/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDataAutomationLibraryRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          libraryArn: S.optional(S.String),
          status: S.optional(DataAutomationLibraryStatus),
        }),
      ).annotate({
        identifier: "CreateDataAutomationLibraryResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(DocumentExtractionGranularityType);
    case 1:
      return S.suspend(() =>
        S.Struct({ types: S.optional(DocumentExtractionGranularityTypes) }),
      ).annotate({
        identifier: "DocumentExtractionGranularity",
      });
    case 2:
      return S.suspend(() => S.Struct({ state: State })).annotate({
        identifier: "DocumentBoundingBox",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ granularity: DocumentExtractionGranularity, boundingBox: DocumentBoundingBox }),
      ).annotate({
        identifier: "DocumentStandardExtraction",
      });
    case 4:
      return S.suspend(() => S.Struct({ state: State })).annotate({
        identifier: "DocumentStandardGenerativeField",
      });
    case 5:
      return S.Array(DocumentOutputTextFormatType);
    case 6:
      return S.suspend(() =>
        S.Struct({ types: S.optional(DocumentOutputTextFormatTypes) }),
      ).annotate({ identifier: "DocumentOutputTextFormat" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          textFormat: DocumentOutputTextFormat,
          additionalFileFormat: DocumentOutputAdditionalFileFormat,
        }),
      ).annotate({ identifier: "DocumentOutputFormat" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          extraction: S.optional(DocumentStandardExtraction),
          generativeField: S.optional(DocumentStandardGenerativeField),
          outputFormat: S.optional(DocumentOutputFormat),
        }),
      ).annotate({
        identifier: "DocumentStandardOutputConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ state: State, types: S.optional(ImageExtractionCategoryTypes) }),
      ).annotate({ identifier: "ImageExtractionCategory" });
    case 2:
      return S.suspend(() => S.Struct({ state: State })).annotate({
        identifier: "ImageBoundingBox",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ category: ImageExtractionCategory, boundingBox: ImageBoundingBox }),
      ).annotate({ identifier: "ImageStandardExtraction" });
    case 4:
      return S.suspend(() =>
        S.Struct({ state: State, types: S.optional(ImageStandardGenerativeFieldTypes) }),
      ).annotate({
        identifier: "ImageStandardGenerativeField",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          extraction: S.optional(ImageStandardExtraction),
          generativeField: S.optional(ImageStandardGenerativeField),
        }),
      ).annotate({
        identifier: "ImageStandardOutputConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ category: VideoExtractionCategory, boundingBox: VideoBoundingBox }),
      ).annotate({ identifier: "VideoStandardExtraction" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          extraction: S.optional(VideoStandardExtraction),
          generativeField: S.optional(VideoStandardGenerativeField),
        }),
      ).annotate({
        identifier: "VideoStandardOutputConfiguration",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          speakerLabeling: S.optional(SpeakerLabelingConfiguration),
          channelLabeling: S.optional(ChannelLabelingConfiguration),
        }),
      ).annotate({ identifier: "TranscriptConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({ transcript: S.optional(TranscriptConfiguration) }),
      ).annotate({
        identifier: "AudioExtractionCategoryTypeConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          state: State,
          types: S.optional(AudioExtractionCategoryTypes),
          typeConfiguration: S.optional(AudioExtractionCategoryTypeConfiguration),
        }),
      ).annotate({ identifier: "AudioExtractionCategory" });
    case 3:
      return S.suspend(() => S.Struct({ category: AudioExtractionCategory })).annotate({
        identifier: "AudioStandardExtraction",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          extraction: S.optional(AudioStandardExtraction),
          generativeField: S.optional(AudioStandardGenerativeField),
        }),
      ).annotate({
        identifier: "AudioStandardOutputConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          document: S.optional(DocumentStandardOutputConfiguration),
          image: S.optional(ImageStandardOutputConfiguration),
          video: S.optional(VideoStandardOutputConfiguration),
          audio: S.optional(AudioStandardOutputConfiguration),
        }),
      ).annotate({
        identifier: "StandardOutputConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          blueprintArn: S.String,
          blueprintVersion: S.optional(S.String),
          blueprintStage: S.optional(BlueprintStage),
        }),
      ).annotate({ identifier: "BlueprintItem" });
    case 7:
      return S.Array(BlueprintItem);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ fallbackBlueprints: S.optional(FallbackBlueprintItems) }),
      ).annotate({
        identifier: "DocumentCustomOutputConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          blueprints: S.optional(BlueprintItems),
          document: S.optional(DocumentCustomOutputConfiguration),
        }),
      ).annotate({
        identifier: "CustomOutputConfiguration",
      });
    case 2:
      return S.suspend(() => S.Struct({ state: S.optional(State) })).annotate({
        identifier: "SplitterConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ state: S.optional(State) })).annotate({
        identifier: "ModalityProcessingConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          piiEntityTypes: S.optional(PIIEntityTypes),
          redactionMaskMode: S.optional(PIIRedactionMaskMode),
        }),
      ).annotate({ identifier: "PIIEntitiesConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          detectionMode: SensitiveDataDetectionMode,
          detectionScope: S.optional(SensitiveDataDetectionScope),
          piiEntitiesConfiguration: S.optional(PIIEntitiesConfiguration),
        }),
      ).annotate({
        identifier: "SensitiveDataConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          splitter: S.optional(SplitterConfiguration),
          modalityProcessing: S.optional(ModalityProcessingConfiguration),
          sensitiveDataConfiguration: S.optional(SensitiveDataConfiguration),
        }),
      ).annotate({
        identifier: "DocumentOverrideConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          modalityProcessing: S.optional(ModalityProcessingConfiguration),
          sensitiveDataConfiguration: S.optional(SensitiveDataConfiguration),
        }),
      ).annotate({
        identifier: "ImageOverrideConfiguration",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          inputLanguages: S.optional(AudioInputLanguages),
          generativeOutputLanguage: S.optional(AudioGenerativeOutputLanguage),
          identifyMultipleLanguages: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AudioLanguageConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          modalityProcessing: S.optional(ModalityProcessingConfiguration),
          languageConfiguration: S.optional(AudioLanguageConfiguration),
          sensitiveDataConfiguration: S.optional(SensitiveDataConfiguration),
        }),
      ).annotate({
        identifier: "AudioOverrideConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          jpeg: S.optional(DesiredModality),
          png: S.optional(DesiredModality),
          mp4: S.optional(DesiredModality),
          mov: S.optional(DesiredModality),
        }),
      ).annotate({
        identifier: "ModalityRoutingConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          document: S.optional(DocumentOverrideConfiguration),
          image: S.optional(ImageOverrideConfiguration),
          video: S.optional(VideoOverrideConfiguration),
          audio: S.optional(AudioOverrideConfiguration),
          modalityRouting: S.optional(ModalityRoutingConfiguration),
        }),
      ).annotate({ identifier: "OverrideConfiguration" });
    case 4:
      return S.suspend(() => S.Struct({ libraryArn: S.String })).annotate({
        identifier: "DataAutomationLibraryItem",
      });
    case 5:
      return S.Array(DataAutomationLibraryItem);
    case 6:
      return S.suspend(() =>
        S.Struct({ libraries: S.optional(DataAutomationLibraryItems) }),
      ).annotate({
        identifier: "DataAutomationLibraryConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          projectName: SensitiveString,
          projectDescription: S.optional(SensitiveString),
          projectStage: S.optional(DataAutomationProjectStage),
          projectType: S.optional(DataAutomationProjectType),
          standardOutputConfiguration: StandardOutputConfiguration,
          customOutputConfiguration: S.optional(CustomOutputConfiguration),
          overrideConfiguration: S.optional(OverrideConfiguration),
          dataAutomationLibraryConfiguration: S.optional(DataAutomationLibraryConfiguration),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          encryptionConfiguration: S.optional(EncryptionConfiguration),
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/data-automation-projects/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDataAutomationProjectRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          projectArn: S.String,
          projectStage: S.optional(DataAutomationProjectStage),
          status: S.optional(DataAutomationProjectStatus),
        }),
      ).annotate({
        identifier: "CreateDataAutomationProjectResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          blueprintArn: S.String.pipe(T.HttpLabel("blueprintArn")),
          blueprintVersion: S.optional(S.String).pipe(T.HttpQuery("blueprintVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/blueprints/{blueprintArn}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteBlueprintRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ libraryArn: S.String.pipe(T.HttpLabel("libraryArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/data-automation-libraries/{libraryArn}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDataAutomationLibraryRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ projectArn: S.String.pipe(T.HttpLabel("projectArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/data-automation-projects/{projectArn}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDataAutomationProjectRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ projectArn: S.String, status: S.optional(DataAutomationProjectStatus) }),
      ).annotate({
        identifier: "DeleteDataAutomationProjectResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          blueprintArn: S.String.pipe(T.HttpLabel("blueprintArn")),
          blueprintVersion: S.optional(S.String),
          blueprintStage: S.optional(BlueprintStage),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/blueprints/{blueprintArn}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetBlueprintRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ invocationArn: S.String.pipe(T.HttpLabel("invocationArn")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/getBlueprintOptimizationStatus/{invocationArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetBlueprintOptimizationStatusRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ s3Object: S3Object })).annotate({
        identifier: "BlueprintOptimizationOutputConfiguration",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(BlueprintOptimizationJobStatus),
          errorType: S.optional(S.String),
          errorMessage: S.optional(S.String),
          outputConfiguration: S.optional(BlueprintOptimizationOutputConfiguration),
        }),
      ).annotate({
        identifier: "GetBlueprintOptimizationStatusResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ libraryArn: S.String.pipe(T.HttpLabel("libraryArn")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/data-automation-libraries/{libraryArn}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDataAutomationLibraryRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ entityType: EntityType, entityMetadata: S.optional(S.String) }),
      ).annotate({ identifier: "EntityTypeInfo" });
    case 3:
      return S.Array(EntityTypeInfo);
    case 4:
      return S.suspend(() =>
        S.Struct({
          libraryArn: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          libraryName: SensitiveString,
          libraryDescription: S.optional(SensitiveString),
          status: DataAutomationLibraryStatus,
          entityTypes: S.optional(EntityTypeInfoList),
          kmsKeyId: S.optional(S.String),
          kmsEncryptionContext: S.optional(KmsEncryptionContext),
        }),
      ).annotate({ identifier: "DataAutomationLibrary" });
    case 5:
      return S.suspend(() => S.Struct({ library: S.optional(DataAutomationLibrary) })).annotate({
        identifier: "GetDataAutomationLibraryResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          libraryArn: S.String.pipe(T.HttpLabel("libraryArn")),
          entityType: EntityType.pipe(T.HttpLabel("entityType")),
          entityId: S.String.pipe(T.HttpLabel("entityId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/data-automation-libraries/{libraryArn}/entityType/{entityType}/entities/{entityId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDataAutomationLibraryEntityRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ text: SensitiveString, displayAsText: S.optional(SensitiveString) }),
      ).annotate({ identifier: "Phrase" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Phrase);
    case 1:
      return S.suspend(() =>
        S.Struct({
          entityId: S.optional(S.String),
          description: S.optional(SensitiveString),
          language: S.optional(Language),
          phrases: S.optional(PhraseList),
          lastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "VocabularyEntity" });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ vocabulary: VocabularyEntity })]);
    case 3:
      return S.suspend(() => S.Struct({ entity: S.optional(EntityDetails) })).annotate({
        identifier: "GetDataAutomationLibraryEntityResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          libraryArn: S.String.pipe(T.HttpLabel("libraryArn")),
          jobArn: S.String.pipe(T.HttpLabel("jobArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/data-automation-libraries/{libraryArn}/library-ingestion-jobs/{jobArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDataAutomationLibraryIngestionJobRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ s3Uri: S.String })).annotate({
        identifier: "OutputConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          jobArn: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          entityType: EntityType,
          operationType: LibraryIngestionJobOperationType,
          jobStatus: LibraryIngestionJobStatus,
          outputConfiguration: OutputConfiguration,
          completionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          errorMessage: S.optional(S.String),
          errorType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DataAutomationLibraryIngestionJob",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ job: S.optional(DataAutomationLibraryIngestionJob) }),
      ).annotate({
        identifier: "GetDataAutomationLibraryIngestionJobResponse",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          projectArn: S.String.pipe(T.HttpLabel("projectArn")),
          projectStage: S.optional(DataAutomationProjectStage),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/data-automation-projects/{projectArn}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDataAutomationProjectRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          projectArn: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          projectName: SensitiveString,
          projectStage: S.optional(DataAutomationProjectStage),
          projectType: S.optional(DataAutomationProjectType),
          projectDescription: S.optional(SensitiveString),
          standardOutputConfiguration: S.optional(StandardOutputConfiguration),
          customOutputConfiguration: S.optional(CustomOutputConfiguration),
          overrideConfiguration: S.optional(OverrideConfiguration),
          dataAutomationLibraryConfiguration: S.optional(DataAutomationLibraryConfiguration),
          status: DataAutomationProjectStatus,
          kmsKeyId: S.optional(S.String),
          kmsEncryptionContext: S.optional(KmsEncryptionContext),
        }),
      ).annotate({ identifier: "DataAutomationProject" });
    case 2:
      return S.suspend(() => S.Struct({ project: DataAutomationProject })).annotate({
        identifier: "GetDataAutomationProjectResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ blueprintArn: S.String, stage: S.optional(BlueprintStage) }),
      ).annotate({
        identifier: "BlueprintOptimizationObject",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          blueprint: BlueprintOptimizationObject,
          samples: BlueprintOptimizationSamples,
          outputConfiguration: BlueprintOptimizationOutputConfiguration,
          dataAutomationProfileArn: S.String,
          encryptionConfiguration: S.optional(EncryptionConfiguration),
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/invokeBlueprintOptimizationAsync" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "InvokeBlueprintOptimizationAsyncRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ invocationArn: S.String })).annotate({
        identifier: "InvokeBlueprintOptimizationAsyncResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          entityId: S.optional(S.String),
          description: S.optional(SensitiveString),
          language: Language,
          phrases: PhraseList,
        }),
      ).annotate({ identifier: "VocabularyEntityInfo" });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ vocabulary: VocabularyEntityInfo })]);
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(UpsertEntityInfo);
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() => S.Struct({ entityIds: EntityIdList })).annotate({
        identifier: "DeleteEntitiesInfo",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ upsertEntitiesInfo: UpsertEntitiesInfo }),
        /*@__PURE__*/ S.Struct({ deleteEntitiesInfo: DeleteEntitiesInfo }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({ s3Object: S.optional(S3Object), inlinePayload: S.optional(InlinePayload) }),
      ).annotate({ identifier: "InputConfiguration" });
    case 5:
      return S.suspend(() => S.Struct({ eventBridgeEnabled: S.Boolean })).annotate({
        identifier: "EventBridgeConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ eventBridgeConfiguration: EventBridgeConfiguration }),
      ).annotate({
        identifier: "NotificationConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          libraryArn: S.String.pipe(T.HttpLabel("libraryArn")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          inputConfiguration: InputConfiguration,
          entityType: EntityType,
          operationType: LibraryIngestionJobOperationType,
          outputConfiguration: OutputConfiguration,
          notificationConfiguration: S.optional(NotificationConfiguration),
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/data-automation-libraries/{libraryArn}/library-ingestion-jobs/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "InvokeDataAutomationLibraryIngestionJobRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ jobArn: S.optional(S.String) })).annotate({
        identifier: "InvokeDataAutomationLibraryIngestionJobResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ projectArn: S.String, projectStage: S.optional(DataAutomationProjectStage) }),
      ).annotate({
        identifier: "DataAutomationProjectFilter",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          blueprintArn: S.optional(S.String),
          resourceOwner: S.optional(ResourceOwner),
          blueprintStageFilter: S.optional(BlueprintStageFilter),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          projectFilter: S.optional(DataAutomationProjectFilter),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/blueprints/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListBlueprintsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          blueprintArn: S.String,
          blueprintVersion: S.optional(S.String),
          blueprintStage: S.optional(BlueprintStage),
          blueprintName: S.optional(SensitiveString),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "BlueprintSummary" });
    case 4:
      return S.Array(BlueprintSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ blueprints: Blueprints, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListBlueprintsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          projectFilter: S.optional(DataAutomationProjectFilter),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/data-automation-libraries/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDataAutomationLibrariesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          libraryArn: S.String,
          libraryName: S.optional(SensitiveString),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "DataAutomationLibrarySummary",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(DataAutomationLibrarySummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          libraries: S.optional(DataAutomationLibrarySummaries),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDataAutomationLibrariesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          libraryArn: S.String.pipe(T.HttpLabel("libraryArn")),
          entityType: EntityType.pipe(T.HttpLabel("entityType")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/data-automation-libraries/{libraryArn}/entityType/{entityType}/entities/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDataAutomationLibraryEntitiesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          entityId: S.optional(S.String),
          description: S.optional(SensitiveString),
          language: S.optional(Language),
          numOfPhrases: S.optional(S.Number),
          lastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "VocabularyEntitySummary" });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ vocabulary: VocabularyEntitySummary })]);
    case 5:
      return S.Array(DataAutomationLibraryEntitySummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          entities: S.optional(DataAutomationLibraryEntitySummaries),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDataAutomationLibraryEntitiesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          libraryArn: S.String.pipe(T.HttpLabel("libraryArn")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/data-automation-libraries/{libraryArn}/library-ingestion-jobs/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDataAutomationLibraryIngestionJobsRequest",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          jobArn: S.String,
          jobStatus: LibraryIngestionJobStatus,
          entityType: EntityType,
          operationType: LibraryIngestionJobOperationType,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "DataAutomationLibraryIngestionJobSummary",
      });
    case 1:
      return S.Array(DataAutomationLibraryIngestionJobSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          jobs: S.optional(DataAutomationLibraryIngestionJobSummaries),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDataAutomationLibraryIngestionJobsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          projectStageFilter: S.optional(DataAutomationProjectStageFilter),
          blueprintFilter: S.optional(BlueprintFilter),
          resourceOwner: S.optional(ResourceOwner),
          libraryFilter: S.optional(DataAutomationLibraryFilter),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/data-automation-projects/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDataAutomationProjectsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          projectArn: S.String,
          projectStage: S.optional(DataAutomationProjectStage),
          projectType: S.optional(DataAutomationProjectType),
          projectName: S.optional(SensitiveString),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "DataAutomationProjectSummary",
      });
    case 5:
      return S.Array(DataAutomationProjectSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ projects: DataAutomationProjectSummaries, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDataAutomationProjectsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/listTagsForResource" }),
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
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ tags: S.optional(TagList) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String, tags: TagList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/tagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String, tagKeys: TagKeyList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/untagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          blueprintArn: S.String.pipe(T.HttpLabel("blueprintArn")),
          schema: SensitiveString,
          blueprintStage: S.optional(BlueprintStage),
          encryptionConfiguration: S.optional(EncryptionConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/blueprints/{blueprintArn}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateBlueprintRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          libraryArn: S.String.pipe(T.HttpLabel("libraryArn")),
          libraryDescription: S.optional(SensitiveString),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/data-automation-libraries/{libraryArn}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDataAutomationLibraryRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          projectArn: S.String.pipe(T.HttpLabel("projectArn")),
          projectStage: S.optional(DataAutomationProjectStage),
          projectDescription: S.optional(SensitiveString),
          standardOutputConfiguration: StandardOutputConfiguration,
          customOutputConfiguration: S.optional(CustomOutputConfiguration),
          overrideConfiguration: S.optional(OverrideConfiguration),
          dataAutomationLibraryConfiguration: S.optional(DataAutomationLibraryConfiguration),
          encryptionConfiguration: S.optional(EncryptionConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/data-automation-projects/{projectArn}/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDataAutomationProjectRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 7:
      return S.Array(ValidationExceptionField);
  }
}
