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
        /*@__PURE__*/ S.suspend(() => __S(127)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type BlueprintArn = string;
export type BlueprintStage = "DEVELOPMENT" | "LIVE" | (string & {});
export type ClientToken = string;
export interface CopyBlueprintStageRequest {
  blueprintArn: string;
  sourceStage: BlueprintStage;
  targetStage: BlueprintStage;
  clientToken?: string;
}
export interface CopyBlueprintStageResponse {}
export type BlueprintName = string | redacted.Redacted<string>;
export type Type = "DOCUMENT" | "IMAGE" | "AUDIO" | "VIDEO" | (string & {});
export type BlueprintSchema = string | redacted.Redacted<string>;
export type KmsKeyId = string;
export type EncryptionContextKey = string;
export type EncryptionContextValue = string;
export type KmsEncryptionContext = { [key: string]: string | undefined };
export interface EncryptionConfiguration {
  kmsKeyId: string;
  kmsEncryptionContext?: { [key: string]: string | undefined };
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
export type TagList = Tag[];
export interface CreateBlueprintRequest {
  blueprintName: string | redacted.Redacted<string>;
  type: Type;
  blueprintStage?: BlueprintStage;
  schema: string | redacted.Redacted<string>;
  clientToken?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  tags?: Tag[];
}
export type BlueprintVersion = string;
export type S3Uri = string;
export type S3ObjectVersion = string;
export interface S3Object {
  s3Uri: string;
  version?: string;
}
export interface BlueprintOptimizationSample {
  assetS3Object: S3Object;
  groundTruthS3Object: S3Object;
}
export type BlueprintOptimizationSamples = BlueprintOptimizationSample[];
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
export interface CreateBlueprintResponse {
  blueprint: Blueprint;
}
export interface CreateBlueprintVersionRequest {
  blueprintArn: string;
  clientToken?: string;
}
export interface CreateBlueprintVersionResponse {
  blueprint: Blueprint;
}
export type DataAutomationLibraryName = string | redacted.Redacted<string>;
export type DataAutomationLibraryDescription = string | redacted.Redacted<string>;
export interface CreateDataAutomationLibraryRequest {
  libraryName: string | redacted.Redacted<string>;
  libraryDescription?: string | redacted.Redacted<string>;
  clientToken?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  tags?: Tag[];
}
export type DataAutomationLibraryArn = string;
export type DataAutomationLibraryStatus = "ACTIVE" | "DELETING" | (string & {});
export interface CreateDataAutomationLibraryResponse {
  libraryArn?: string;
  status?: DataAutomationLibraryStatus;
}
export type DataAutomationProjectName = string | redacted.Redacted<string>;
export type DataAutomationProjectDescription = string | redacted.Redacted<string>;
export type DataAutomationProjectStage = "DEVELOPMENT" | "LIVE" | (string & {});
export type DataAutomationProjectType = "ASYNC" | "SYNC" | (string & {});
export type DocumentExtractionGranularityType =
  | "DOCUMENT"
  | "PAGE"
  | "ELEMENT"
  | "WORD"
  | "LINE"
  | (string & {});
export type DocumentExtractionGranularityTypes = DocumentExtractionGranularityType[];
export interface DocumentExtractionGranularity {
  types?: DocumentExtractionGranularityType[];
}
export type State = "ENABLED" | "DISABLED" | (string & {});
export interface DocumentBoundingBox {
  state: State;
}
export interface DocumentStandardExtraction {
  granularity: DocumentExtractionGranularity;
  boundingBox: DocumentBoundingBox;
}
export interface DocumentStandardGenerativeField {
  state: State;
}
export type DocumentOutputTextFormatType =
  | "PLAIN_TEXT"
  | "MARKDOWN"
  | "HTML"
  | "CSV"
  | (string & {});
export type DocumentOutputTextFormatTypes = DocumentOutputTextFormatType[];
export interface DocumentOutputTextFormat {
  types?: DocumentOutputTextFormatType[];
}
export interface DocumentOutputAdditionalFileFormat {
  state: State;
}
export interface DocumentOutputFormat {
  textFormat: DocumentOutputTextFormat;
  additionalFileFormat: DocumentOutputAdditionalFileFormat;
}
export interface DocumentStandardOutputConfiguration {
  extraction?: DocumentStandardExtraction;
  generativeField?: DocumentStandardGenerativeField;
  outputFormat?: DocumentOutputFormat;
}
export type ImageExtractionCategoryType =
  | "CONTENT_MODERATION"
  | "TEXT_DETECTION"
  | "LOGOS"
  | (string & {});
export type ImageExtractionCategoryTypes = ImageExtractionCategoryType[];
export interface ImageExtractionCategory {
  state: State;
  types?: ImageExtractionCategoryType[];
}
export interface ImageBoundingBox {
  state: State;
}
export interface ImageStandardExtraction {
  category: ImageExtractionCategory;
  boundingBox: ImageBoundingBox;
}
export type ImageStandardGenerativeFieldType = "IMAGE_SUMMARY" | "IAB" | (string & {});
export type ImageStandardGenerativeFieldTypes = ImageStandardGenerativeFieldType[];
export interface ImageStandardGenerativeField {
  state: State;
  types?: ImageStandardGenerativeFieldType[];
}
export interface ImageStandardOutputConfiguration {
  extraction?: ImageStandardExtraction;
  generativeField?: ImageStandardGenerativeField;
}
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
export interface VideoBoundingBox {
  state: State;
}
export interface VideoStandardExtraction {
  category: VideoExtractionCategory;
  boundingBox: VideoBoundingBox;
}
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
export interface VideoStandardOutputConfiguration {
  extraction?: VideoStandardExtraction;
  generativeField?: VideoStandardGenerativeField;
}
export type AudioExtractionCategoryType =
  | "AUDIO_CONTENT_MODERATION"
  | "TRANSCRIPT"
  | "TOPIC_CONTENT_MODERATION"
  | (string & {});
export type AudioExtractionCategoryTypes = AudioExtractionCategoryType[];
export interface SpeakerLabelingConfiguration {
  state: State;
}
export interface ChannelLabelingConfiguration {
  state: State;
}
export interface TranscriptConfiguration {
  speakerLabeling?: SpeakerLabelingConfiguration;
  channelLabeling?: ChannelLabelingConfiguration;
}
export interface AudioExtractionCategoryTypeConfiguration {
  transcript?: TranscriptConfiguration;
}
export interface AudioExtractionCategory {
  state: State;
  types?: AudioExtractionCategoryType[];
  typeConfiguration?: AudioExtractionCategoryTypeConfiguration;
}
export interface AudioStandardExtraction {
  category: AudioExtractionCategory;
}
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
export interface AudioStandardOutputConfiguration {
  extraction?: AudioStandardExtraction;
  generativeField?: AudioStandardGenerativeField;
}
export interface StandardOutputConfiguration {
  document?: DocumentStandardOutputConfiguration;
  image?: ImageStandardOutputConfiguration;
  video?: VideoStandardOutputConfiguration;
  audio?: AudioStandardOutputConfiguration;
}
export interface BlueprintItem {
  blueprintArn: string;
  blueprintVersion?: string;
  blueprintStage?: BlueprintStage;
}
export type BlueprintItems = BlueprintItem[];
export type FallbackBlueprintItems = BlueprintItem[];
export interface DocumentCustomOutputConfiguration {
  fallbackBlueprints?: BlueprintItem[];
}
export interface CustomOutputConfiguration {
  blueprints?: BlueprintItem[];
  document?: DocumentCustomOutputConfiguration;
}
export interface SplitterConfiguration {
  state?: State;
}
export interface ModalityProcessingConfiguration {
  state?: State;
}
export type SensitiveDataDetectionMode = "DETECTION" | "DETECTION_AND_REDACTION" | (string & {});
export type SensitiveDataDetectionScopeType = "STANDARD" | "CUSTOM" | (string & {});
export type SensitiveDataDetectionScope = SensitiveDataDetectionScopeType[];
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
export type PIIRedactionMaskMode = "PII" | "ENTITY_TYPE" | (string & {});
export interface PIIEntitiesConfiguration {
  piiEntityTypes?: PIIEntityType[];
  redactionMaskMode?: PIIRedactionMaskMode;
}
export interface SensitiveDataConfiguration {
  detectionMode: SensitiveDataDetectionMode;
  detectionScope?: SensitiveDataDetectionScopeType[];
  piiEntitiesConfiguration?: PIIEntitiesConfiguration;
}
export interface DocumentOverrideConfiguration {
  splitter?: SplitterConfiguration;
  modalityProcessing?: ModalityProcessingConfiguration;
  sensitiveDataConfiguration?: SensitiveDataConfiguration;
}
export interface ImageOverrideConfiguration {
  modalityProcessing?: ModalityProcessingConfiguration;
  sensitiveDataConfiguration?: SensitiveDataConfiguration;
}
export interface VideoOverrideConfiguration {
  modalityProcessing?: ModalityProcessingConfiguration;
  sensitiveDataConfiguration?: SensitiveDataConfiguration;
}
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
export type AudioInputLanguages = Language[];
export type AudioGenerativeOutputLanguage = "DEFAULT" | "EN" | (string & {});
export interface AudioLanguageConfiguration {
  inputLanguages?: Language[];
  generativeOutputLanguage?: AudioGenerativeOutputLanguage;
  identifyMultipleLanguages?: boolean;
}
export interface AudioOverrideConfiguration {
  modalityProcessing?: ModalityProcessingConfiguration;
  languageConfiguration?: AudioLanguageConfiguration;
  sensitiveDataConfiguration?: SensitiveDataConfiguration;
}
export type DesiredModality = "IMAGE" | "DOCUMENT" | "AUDIO" | "VIDEO" | (string & {});
export interface ModalityRoutingConfiguration {
  jpeg?: DesiredModality;
  png?: DesiredModality;
  mp4?: DesiredModality;
  mov?: DesiredModality;
}
export interface OverrideConfiguration {
  document?: DocumentOverrideConfiguration;
  image?: ImageOverrideConfiguration;
  video?: VideoOverrideConfiguration;
  audio?: AudioOverrideConfiguration;
  modalityRouting?: ModalityRoutingConfiguration;
}
export interface DataAutomationLibraryItem {
  libraryArn: string;
}
export type DataAutomationLibraryItems = DataAutomationLibraryItem[];
export interface DataAutomationLibraryConfiguration {
  libraries?: DataAutomationLibraryItem[];
}
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
export type DataAutomationProjectArn = string;
export type DataAutomationProjectStatus = "COMPLETED" | "IN_PROGRESS" | "FAILED" | (string & {});
export interface CreateDataAutomationProjectResponse {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
  status?: DataAutomationProjectStatus;
}
export interface DeleteBlueprintRequest {
  blueprintArn: string;
  blueprintVersion?: string;
}
export interface DeleteBlueprintResponse {}
export interface DeleteDataAutomationLibraryRequest {
  libraryArn: string;
}
export interface DeleteDataAutomationLibraryResponse {
  libraryArn?: string;
  status?: DataAutomationLibraryStatus;
}
export interface DeleteDataAutomationProjectRequest {
  projectArn: string;
}
export interface DeleteDataAutomationProjectResponse {
  projectArn: string;
  status?: DataAutomationProjectStatus;
}
export interface GetBlueprintRequest {
  blueprintArn: string;
  blueprintVersion?: string;
  blueprintStage?: BlueprintStage;
}
export interface GetBlueprintResponse {
  blueprint: Blueprint;
}
export type BlueprintOptimizationInvocationArn = string;
export interface GetBlueprintOptimizationStatusRequest {
  invocationArn: string;
}
export type BlueprintOptimizationJobStatus =
  | "Created"
  | "InProgress"
  | "Success"
  | "ServiceError"
  | "ClientError"
  | (string & {});
export interface BlueprintOptimizationOutputConfiguration {
  s3Object: S3Object;
}
export interface GetBlueprintOptimizationStatusResponse {
  status?: BlueprintOptimizationJobStatus;
  errorType?: string;
  errorMessage?: string;
  outputConfiguration?: BlueprintOptimizationOutputConfiguration;
}
export interface GetDataAutomationLibraryRequest {
  libraryArn: string;
}
export type EntityType = "VOCABULARY" | (string & {});
export type EntityMetadata = string;
export interface EntityTypeInfo {
  entityType: EntityType;
  entityMetadata?: string;
}
export type EntityTypeInfoList = EntityTypeInfo[];
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
export interface GetDataAutomationLibraryResponse {
  library?: DataAutomationLibrary;
}
export type EntityId = string;
export interface GetDataAutomationLibraryEntityRequest {
  libraryArn: string;
  entityType: EntityType;
  entityId: string;
}
export type EntityDescription = string | redacted.Redacted<string>;
export type PhraseText = string | redacted.Redacted<string>;
export type PhraseDisplayAsText = string | redacted.Redacted<string>;
export interface Phrase {
  text: string | redacted.Redacted<string>;
  displayAsText?: string | redacted.Redacted<string>;
}
export type PhraseList = Phrase[];
export interface VocabularyEntity {
  entityId?: string;
  description?: string | redacted.Redacted<string>;
  language?: Language;
  phrases?: Phrase[];
  lastModifiedTime?: Date;
}
export type EntityDetails = { vocabulary: VocabularyEntity };
export interface GetDataAutomationLibraryEntityResponse {
  entity?: EntityDetails;
}
export type DataAutomationLibraryIngestionJobArn = string;
export interface GetDataAutomationLibraryIngestionJobRequest {
  libraryArn: string;
  jobArn: string;
}
export type LibraryIngestionJobOperationType = "UPSERT" | "DELETE" | (string & {});
export type LibraryIngestionJobStatus =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "COMPLETED_WITH_ERRORS"
  | "FAILED"
  | (string & {});
export interface OutputConfiguration {
  s3Uri: string;
}
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
export interface GetDataAutomationLibraryIngestionJobResponse {
  job?: DataAutomationLibraryIngestionJob;
}
export interface GetDataAutomationProjectRequest {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
}
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
export interface GetDataAutomationProjectResponse {
  project: DataAutomationProject;
}
export interface BlueprintOptimizationObject {
  blueprintArn: string;
  stage?: BlueprintStage;
}
export type DataAutomationProfileArn = string;
export interface InvokeBlueprintOptimizationAsyncRequest {
  blueprint: BlueprintOptimizationObject;
  samples: BlueprintOptimizationSample[];
  outputConfiguration: BlueprintOptimizationOutputConfiguration;
  dataAutomationProfileArn: string;
  encryptionConfiguration?: EncryptionConfiguration;
  tags?: Tag[];
}
export interface InvokeBlueprintOptimizationAsyncResponse {
  invocationArn: string;
}
export interface VocabularyEntityInfo {
  entityId?: string;
  description?: string | redacted.Redacted<string>;
  language: Language;
  phrases: Phrase[];
}
export type UpsertEntityInfo = { vocabulary: VocabularyEntityInfo };
export type UpsertEntitiesInfo = UpsertEntityInfo[];
export type EntityIdList = string[];
export interface DeleteEntitiesInfo {
  entityIds: string[];
}
export type InlinePayload =
  | { upsertEntitiesInfo: UpsertEntityInfo[]; deleteEntitiesInfo?: never }
  | { upsertEntitiesInfo?: never; deleteEntitiesInfo: DeleteEntitiesInfo };
export interface InputConfiguration {
  s3Object?: S3Object;
  inlinePayload?: InlinePayload;
}
export interface EventBridgeConfiguration {
  eventBridgeEnabled: boolean;
}
export interface NotificationConfiguration {
  eventBridgeConfiguration: EventBridgeConfiguration;
}
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
export interface InvokeDataAutomationLibraryIngestionJobResponse {
  jobArn?: string;
}
export type ResourceOwner = "SERVICE" | "ACCOUNT" | (string & {});
export type BlueprintStageFilter = "DEVELOPMENT" | "LIVE" | "ALL" | (string & {});
export type MaxResults = number;
export type NextToken = string;
export interface DataAutomationProjectFilter {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
}
export interface ListBlueprintsRequest {
  blueprintArn?: string;
  resourceOwner?: ResourceOwner;
  blueprintStageFilter?: BlueprintStageFilter;
  maxResults?: number;
  nextToken?: string;
  projectFilter?: DataAutomationProjectFilter;
}
export interface BlueprintSummary {
  blueprintArn: string;
  blueprintVersion?: string;
  blueprintStage?: BlueprintStage;
  blueprintName?: string | redacted.Redacted<string>;
  creationTime: Date;
  lastModifiedTime?: Date;
}
export type Blueprints = BlueprintSummary[];
export interface ListBlueprintsResponse {
  blueprints: BlueprintSummary[];
  nextToken?: string;
}
export interface ListDataAutomationLibrariesRequest {
  maxResults?: number;
  nextToken?: string;
  projectFilter?: DataAutomationProjectFilter;
}
export interface DataAutomationLibrarySummary {
  libraryArn: string;
  libraryName?: string | redacted.Redacted<string>;
  creationTime: Date;
}
export type DataAutomationLibrarySummaries = DataAutomationLibrarySummary[];
export interface ListDataAutomationLibrariesResponse {
  libraries?: DataAutomationLibrarySummary[];
  nextToken?: string;
}
export interface ListDataAutomationLibraryEntitiesRequest {
  libraryArn: string;
  entityType: EntityType;
  maxResults?: number;
  nextToken?: string;
}
export interface VocabularyEntitySummary {
  entityId?: string;
  description?: string | redacted.Redacted<string>;
  language?: Language;
  numOfPhrases?: number;
  lastModifiedTime?: Date;
}
export type DataAutomationLibraryEntitySummary = { vocabulary: VocabularyEntitySummary };
export type DataAutomationLibraryEntitySummaries = DataAutomationLibraryEntitySummary[];
export interface ListDataAutomationLibraryEntitiesResponse {
  entities?: DataAutomationLibraryEntitySummary[];
  nextToken?: string;
}
export interface ListDataAutomationLibraryIngestionJobsRequest {
  libraryArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface DataAutomationLibraryIngestionJobSummary {
  jobArn: string;
  jobStatus: LibraryIngestionJobStatus;
  entityType: EntityType;
  operationType: LibraryIngestionJobOperationType;
  creationTime: Date;
  completionTime?: Date;
}
export type DataAutomationLibraryIngestionJobSummaries = DataAutomationLibraryIngestionJobSummary[];
export interface ListDataAutomationLibraryIngestionJobsResponse {
  jobs?: DataAutomationLibraryIngestionJobSummary[];
  nextToken?: string;
}
export type DataAutomationProjectStageFilter = "DEVELOPMENT" | "LIVE" | "ALL" | (string & {});
export interface BlueprintFilter {
  blueprintArn: string;
  blueprintVersion?: string;
  blueprintStage?: BlueprintStage;
}
export interface DataAutomationLibraryFilter {
  libraryArn: string;
}
export interface ListDataAutomationProjectsRequest {
  maxResults?: number;
  nextToken?: string;
  projectStageFilter?: DataAutomationProjectStageFilter;
  blueprintFilter?: BlueprintFilter;
  resourceOwner?: ResourceOwner;
  libraryFilter?: DataAutomationLibraryFilter;
}
export interface DataAutomationProjectSummary {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
  projectType?: DataAutomationProjectType;
  projectName?: string | redacted.Redacted<string>;
  creationTime: Date;
}
export type DataAutomationProjectSummaries = DataAutomationProjectSummary[];
export interface ListDataAutomationProjectsResponse {
  projects: DataAutomationProjectSummary[];
  nextToken?: string;
}
export type TaggableResourceArn = string;
export interface ListTagsForResourceRequest {
  resourceARN: string;
}
export interface ListTagsForResourceResponse {
  tags?: Tag[];
}
export interface TagResourceRequest {
  resourceARN: string;
  tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateBlueprintRequest {
  blueprintArn: string;
  schema: string | redacted.Redacted<string>;
  blueprintStage?: BlueprintStage;
  encryptionConfiguration?: EncryptionConfiguration;
}
export interface UpdateBlueprintResponse {
  blueprint: Blueprint;
}
export interface UpdateDataAutomationLibraryRequest {
  libraryArn: string;
  libraryDescription?: string | redacted.Redacted<string>;
  clientToken?: string;
}
export interface UpdateDataAutomationLibraryResponse {
  libraryArn?: string;
  status?: DataAutomationLibraryStatus;
}
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
export interface UpdateDataAutomationProjectResponse {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
  status?: DataAutomationProjectStatus;
}
export type NonBlankString = string;
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
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
  input: __S(0) as any as S.Schema<CopyBlueprintStageRequest>,
  output: __S(1) as any as S.Schema<CopyBlueprintStageResponse>,
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
  input: __S(6) as any as S.Schema<CreateBlueprintRequest>,
  output: __S(11) as any as S.Schema<CreateBlueprintResponse>,
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
  input: __S(12) as any as S.Schema<CreateBlueprintVersionRequest>,
  output: __S(13) as any as S.Schema<CreateBlueprintVersionResponse>,
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
  input: __S(14) as any as S.Schema<CreateDataAutomationLibraryRequest>,
  output: __S(15) as any as S.Schema<CreateDataAutomationLibraryResponse>,
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
  input: __S(55) as any as S.Schema<CreateDataAutomationProjectRequest>,
  output: __S(56) as any as S.Schema<CreateDataAutomationProjectResponse>,
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
  input: __S(57) as any as S.Schema<DeleteBlueprintRequest>,
  output: __S(1) as any as S.Schema<DeleteBlueprintResponse>,
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
  input: __S(58) as any as S.Schema<DeleteDataAutomationLibraryRequest>,
  output: __S(15) as any as S.Schema<DeleteDataAutomationLibraryResponse>,
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
  input: __S(59) as any as S.Schema<DeleteDataAutomationProjectRequest>,
  output: __S(60) as any as S.Schema<DeleteDataAutomationProjectResponse>,
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
  input: __S(61) as any as S.Schema<GetBlueprintRequest>,
  output: __S(11) as any as S.Schema<GetBlueprintResponse>,
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
  input: __S(62) as any as S.Schema<GetBlueprintOptimizationStatusRequest>,
  output: __S(64) as any as S.Schema<GetBlueprintOptimizationStatusResponse>,
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
  input: __S(65) as any as S.Schema<GetDataAutomationLibraryRequest>,
  output: __S(69) as any as S.Schema<GetDataAutomationLibraryResponse>,
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
  input: __S(70) as any as S.Schema<GetDataAutomationLibraryEntityRequest>,
  output: __S(75) as any as S.Schema<GetDataAutomationLibraryEntityResponse>,
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
  input: __S(76) as any as S.Schema<GetDataAutomationLibraryIngestionJobRequest>,
  output: __S(79) as any as S.Schema<GetDataAutomationLibraryIngestionJobResponse>,
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
  input: __S(80) as any as S.Schema<GetDataAutomationProjectRequest>,
  output: __S(82) as any as S.Schema<GetDataAutomationProjectResponse>,
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
  input: __S(84) as any as S.Schema<InvokeBlueprintOptimizationAsyncRequest>,
  output: __S(85) as any as S.Schema<InvokeBlueprintOptimizationAsyncResponse>,
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
  input: __S(95) as any as S.Schema<InvokeDataAutomationLibraryIngestionJobRequest>,
  output: __S(96) as any as S.Schema<InvokeDataAutomationLibraryIngestionJobResponse>,
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
  input: __S(98) as any as S.Schema<ListBlueprintsRequest>,
  output: __S(101) as any as S.Schema<ListBlueprintsResponse>,
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
  input: __S(102) as any as S.Schema<ListDataAutomationLibrariesRequest>,
  output: __S(105) as any as S.Schema<ListDataAutomationLibrariesResponse>,
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
  input: __S(106) as any as S.Schema<ListDataAutomationLibraryEntitiesRequest>,
  output: __S(110) as any as S.Schema<ListDataAutomationLibraryEntitiesResponse>,
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
  input: __S(111) as any as S.Schema<ListDataAutomationLibraryIngestionJobsRequest>,
  output: __S(114) as any as S.Schema<ListDataAutomationLibraryIngestionJobsResponse>,
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
  input: __S(115) as any as S.Schema<ListDataAutomationProjectsRequest>,
  output: __S(118) as any as S.Schema<ListDataAutomationProjectsResponse>,
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
  input: __S(119) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(120) as any as S.Schema<ListTagsForResourceResponse>,
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
  input: __S(121) as any as S.Schema<TagResourceRequest>,
  output: __S(1) as any as S.Schema<TagResourceResponse>,
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
  input: __S(122) as any as S.Schema<UntagResourceRequest>,
  output: __S(1) as any as S.Schema<UntagResourceResponse>,
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
  input: __S(123) as any as S.Schema<UpdateBlueprintRequest>,
  output: __S(11) as any as S.Schema<UpdateBlueprintResponse>,
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
  input: __S(124) as any as S.Schema<UpdateDataAutomationLibraryRequest>,
  output: __S(15) as any as S.Schema<UpdateDataAutomationLibraryResponse>,
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
  input: __S(125) as any as S.Schema<UpdateDataAutomationProjectRequest>,
  output: __S(56) as any as S.Schema<UpdateDataAutomationProjectResponse>,
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
          sourceStage: S.String,
          targetStage: S.String,
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
        S.Struct({ kmsKeyId: S.String, kmsEncryptionContext: S.optional(__S(2)) }),
      ).annotate({ identifier: "EncryptionConfiguration" });
    case 4:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "Tag",
      });
    case 5:
      return S.Array(__S(4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          blueprintName: SensitiveString,
          type: S.String,
          blueprintStage: S.optional(S.String),
          schema: SensitiveString,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          encryptionConfiguration: S.optional(__S(3)),
          tags: S.optional(__S(5)),
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
        S.Struct({ assetS3Object: __S(7), groundTruthS3Object: __S(7) }),
      ).annotate({
        identifier: "BlueprintOptimizationSample",
      });
    case 1:
      return S.Array(__S(8));
    case 2:
      return S.suspend(() =>
        S.Struct({
          blueprintArn: S.String,
          schema: SensitiveString,
          type: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          blueprintName: SensitiveString,
          blueprintVersion: S.optional(S.String),
          blueprintStage: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
          kmsEncryptionContext: S.optional(__S(2)),
          optimizationSamples: S.optional(__S(9)),
          optimizationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "Blueprint" });
    case 3:
      return S.suspend(() => S.Struct({ blueprint: __S(10) })).annotate({
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
      return S.suspend(() => S.Struct({ blueprint: __S(10) })).annotate({
        identifier: "CreateBlueprintVersionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          libraryName: SensitiveString,
          libraryDescription: S.optional(SensitiveString),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          encryptionConfiguration: S.optional(__S(3)),
          tags: S.optional(__S(5)),
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
          status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateDataAutomationLibraryResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() => S.Struct({ types: S.optional(__S(16)) })).annotate({
        identifier: "DocumentExtractionGranularity",
      });
    case 2:
      return S.suspend(() => S.Struct({ state: S.String })).annotate({
        identifier: "DocumentBoundingBox",
      });
    case 3:
      return S.suspend(() => S.Struct({ granularity: __S(17), boundingBox: __S(18) })).annotate({
        identifier: "DocumentStandardExtraction",
      });
    case 4:
      return S.suspend(() => S.Struct({ state: S.String })).annotate({
        identifier: "DocumentStandardGenerativeField",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() => S.Struct({ types: S.optional(__S(21)) })).annotate({
        identifier: "DocumentOutputTextFormat",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          textFormat: __S(22),
          additionalFileFormat: __S(20),
        }),
      ).annotate({ identifier: "DocumentOutputFormat" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          extraction: S.optional(__S(19)),
          generativeField: S.optional(__S(20)),
          outputFormat: S.optional(__S(23)),
        }),
      ).annotate({
        identifier: "DocumentStandardOutputConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ state: S.String, types: S.optional(__S(21)) })).annotate({
        identifier: "ImageExtractionCategory",
      });
    case 2:
      return S.suspend(() => S.Struct({ state: S.String })).annotate({
        identifier: "ImageBoundingBox",
      });
    case 3:
      return S.suspend(() => S.Struct({ category: __S(25), boundingBox: __S(26) })).annotate({
        identifier: "ImageStandardExtraction",
      });
    case 4:
      return S.suspend(() => S.Struct({ state: S.String, types: S.optional(__S(16)) })).annotate({
        identifier: "ImageStandardGenerativeField",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          extraction: S.optional(__S(27)),
          generativeField: S.optional(__S(28)),
        }),
      ).annotate({
        identifier: "ImageStandardOutputConfiguration",
      });
    case 6:
      return S.suspend(() => S.Struct({ category: __S(25), boundingBox: __S(26) })).annotate({
        identifier: "VideoStandardExtraction",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          extraction: S.optional(__S(30)),
          generativeField: S.optional(__S(28)),
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
          speakerLabeling: S.optional(__S(20)),
          channelLabeling: S.optional(__S(20)),
        }),
      ).annotate({ identifier: "TranscriptConfiguration" });
    case 1:
      return S.suspend(() => S.Struct({ transcript: S.optional(__S(32)) })).annotate({
        identifier: "AudioExtractionCategoryTypeConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          state: S.String,
          types: S.optional(__S(21)),
          typeConfiguration: S.optional(__S(33)),
        }),
      ).annotate({ identifier: "AudioExtractionCategory" });
    case 3:
      return S.suspend(() => S.Struct({ category: __S(34) })).annotate({
        identifier: "AudioStandardExtraction",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          extraction: S.optional(__S(35)),
          generativeField: S.optional(__S(28)),
        }),
      ).annotate({
        identifier: "AudioStandardOutputConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          document: S.optional(__S(24)),
          image: S.optional(__S(29)),
          video: S.optional(__S(31)),
          audio: S.optional(__S(36)),
        }),
      ).annotate({
        identifier: "StandardOutputConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          blueprintArn: S.String,
          blueprintVersion: S.optional(S.String),
          blueprintStage: S.optional(S.String),
        }),
      ).annotate({ identifier: "BlueprintItem" });
    case 7:
      return S.Array(__S(38));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ fallbackBlueprints: S.optional(__S(39)) })).annotate({
        identifier: "DocumentCustomOutputConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          blueprints: S.optional(__S(39)),
          document: S.optional(__S(40)),
        }),
      ).annotate({
        identifier: "CustomOutputConfiguration",
      });
    case 2:
      return S.suspend(() => S.Struct({ state: S.optional(S.String) })).annotate({
        identifier: "SplitterConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ state: S.optional(S.String) })).annotate({
        identifier: "ModalityProcessingConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          piiEntityTypes: S.optional(__S(21)),
          redactionMaskMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "PIIEntitiesConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          detectionMode: S.String,
          detectionScope: S.optional(__S(21)),
          piiEntitiesConfiguration: S.optional(__S(44)),
        }),
      ).annotate({
        identifier: "SensitiveDataConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          splitter: S.optional(__S(42)),
          modalityProcessing: S.optional(__S(43)),
          sensitiveDataConfiguration: S.optional(__S(45)),
        }),
      ).annotate({
        identifier: "DocumentOverrideConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          modalityProcessing: S.optional(__S(43)),
          sensitiveDataConfiguration: S.optional(__S(45)),
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
          inputLanguages: S.optional(__S(21)),
          generativeOutputLanguage: S.optional(S.String),
          identifyMultipleLanguages: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AudioLanguageConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          modalityProcessing: S.optional(__S(43)),
          languageConfiguration: S.optional(__S(48)),
          sensitiveDataConfiguration: S.optional(__S(45)),
        }),
      ).annotate({
        identifier: "AudioOverrideConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          jpeg: S.optional(S.String),
          png: S.optional(S.String),
          mp4: S.optional(S.String),
          mov: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ModalityRoutingConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          document: S.optional(__S(46)),
          image: S.optional(__S(47)),
          video: S.optional(__S(47)),
          audio: S.optional(__S(49)),
          modalityRouting: S.optional(__S(50)),
        }),
      ).annotate({ identifier: "OverrideConfiguration" });
    case 4:
      return S.suspend(() => S.Struct({ libraryArn: S.String })).annotate({
        identifier: "DataAutomationLibraryItem",
      });
    case 5:
      return S.Array(__S(52));
    case 6:
      return S.suspend(() => S.Struct({ libraries: S.optional(__S(53)) })).annotate({
        identifier: "DataAutomationLibraryConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          projectName: SensitiveString,
          projectDescription: S.optional(SensitiveString),
          projectStage: S.optional(S.String),
          projectType: S.optional(S.String),
          standardOutputConfiguration: __S(37),
          customOutputConfiguration: S.optional(__S(41)),
          overrideConfiguration: S.optional(__S(51)),
          dataAutomationLibraryConfiguration: S.optional(__S(54)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          encryptionConfiguration: S.optional(__S(3)),
          tags: S.optional(__S(5)),
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
          projectStage: S.optional(S.String),
          status: S.optional(S.String),
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
        S.Struct({ projectArn: S.String, status: S.optional(S.String) }),
      ).annotate({
        identifier: "DeleteDataAutomationProjectResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          blueprintArn: S.String.pipe(T.HttpLabel("blueprintArn")),
          blueprintVersion: S.optional(S.String),
          blueprintStage: S.optional(S.String),
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
      return S.suspend(() => S.Struct({ s3Object: __S(7) })).annotate({
        identifier: "BlueprintOptimizationOutputConfiguration",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          errorType: S.optional(S.String),
          errorMessage: S.optional(S.String),
          outputConfiguration: S.optional(__S(63)),
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
        S.Struct({ entityType: S.String, entityMetadata: S.optional(S.String) }),
      ).annotate({ identifier: "EntityTypeInfo" });
    case 3:
      return S.Array(__S(66));
    case 4:
      return S.suspend(() =>
        S.Struct({
          libraryArn: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          libraryName: SensitiveString,
          libraryDescription: S.optional(SensitiveString),
          status: S.String,
          entityTypes: S.optional(__S(67)),
          kmsKeyId: S.optional(S.String),
          kmsEncryptionContext: S.optional(__S(2)),
        }),
      ).annotate({ identifier: "DataAutomationLibrary" });
    case 5:
      return S.suspend(() => S.Struct({ library: S.optional(__S(68)) })).annotate({
        identifier: "GetDataAutomationLibraryResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          libraryArn: S.String.pipe(T.HttpLabel("libraryArn")),
          entityType: S.String.pipe(T.HttpLabel("entityType")),
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
      return S.Array(__S(71));
    case 1:
      return S.suspend(() =>
        S.Struct({
          entityId: S.optional(S.String),
          description: S.optional(SensitiveString),
          language: S.optional(S.String),
          phrases: S.optional(__S(72)),
          lastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "VocabularyEntity" });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ vocabulary: __S(73) })]);
    case 3:
      return S.suspend(() => S.Struct({ entity: S.optional(__S(74)) })).annotate({
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
          entityType: S.String,
          operationType: S.String,
          jobStatus: S.String,
          outputConfiguration: __S(77),
          completionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          errorMessage: S.optional(S.String),
          errorType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DataAutomationLibraryIngestionJob",
      });
    case 7:
      return S.suspend(() => S.Struct({ job: S.optional(__S(78)) })).annotate({
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
          projectStage: S.optional(S.String),
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
          projectStage: S.optional(S.String),
          projectType: S.optional(S.String),
          projectDescription: S.optional(SensitiveString),
          standardOutputConfiguration: S.optional(__S(37)),
          customOutputConfiguration: S.optional(__S(41)),
          overrideConfiguration: S.optional(__S(51)),
          dataAutomationLibraryConfiguration: S.optional(__S(54)),
          status: S.String,
          kmsKeyId: S.optional(S.String),
          kmsEncryptionContext: S.optional(__S(2)),
        }),
      ).annotate({ identifier: "DataAutomationProject" });
    case 2:
      return S.suspend(() => S.Struct({ project: __S(81) })).annotate({
        identifier: "GetDataAutomationProjectResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ blueprintArn: S.String, stage: S.optional(S.String) }),
      ).annotate({
        identifier: "BlueprintOptimizationObject",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          blueprint: __S(83),
          samples: __S(9),
          outputConfiguration: __S(63),
          dataAutomationProfileArn: S.String,
          encryptionConfiguration: S.optional(__S(3)),
          tags: S.optional(__S(5)),
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
          language: S.String,
          phrases: __S(72),
        }),
      ).annotate({ identifier: "VocabularyEntityInfo" });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ vocabulary: __S(86) })]);
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87));
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() => S.Struct({ entityIds: __S(89) })).annotate({
        identifier: "DeleteEntitiesInfo",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ upsertEntitiesInfo: __S(88) }),
        /*@__PURE__*/ S.Struct({ deleteEntitiesInfo: __S(90) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({ s3Object: S.optional(__S(7)), inlinePayload: S.optional(__S(91)) }),
      ).annotate({ identifier: "InputConfiguration" });
    case 5:
      return S.suspend(() => S.Struct({ eventBridgeEnabled: S.Boolean })).annotate({
        identifier: "EventBridgeConfiguration",
      });
    case 6:
      return S.suspend(() => S.Struct({ eventBridgeConfiguration: __S(93) })).annotate({
        identifier: "NotificationConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          libraryArn: S.String.pipe(T.HttpLabel("libraryArn")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          inputConfiguration: __S(92),
          entityType: S.String,
          operationType: S.String,
          outputConfiguration: __S(77),
          notificationConfiguration: S.optional(__S(94)),
          tags: S.optional(__S(5)),
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
        S.Struct({ projectArn: S.String, projectStage: S.optional(S.String) }),
      ).annotate({
        identifier: "DataAutomationProjectFilter",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          blueprintArn: S.optional(S.String),
          resourceOwner: S.optional(S.String),
          blueprintStageFilter: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          projectFilter: S.optional(__S(97)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/blueprints/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListBlueprintsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          blueprintArn: S.String,
          blueprintVersion: S.optional(S.String),
          blueprintStage: S.optional(S.String),
          blueprintName: S.optional(SensitiveString),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "BlueprintSummary" });
    case 4:
      return S.Array(__S(99));
    case 5:
      return S.suspend(() =>
        S.Struct({ blueprints: __S(100), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListBlueprintsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          projectFilter: S.optional(__S(97)),
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
      return S.Array(__S(103));
    case 1:
      return S.suspend(() =>
        S.Struct({
          libraries: S.optional(__S(104)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDataAutomationLibrariesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          libraryArn: S.String.pipe(T.HttpLabel("libraryArn")),
          entityType: S.String.pipe(T.HttpLabel("entityType")),
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
          language: S.optional(S.String),
          numOfPhrases: S.optional(S.Number),
          lastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "VocabularyEntitySummary" });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ vocabulary: __S(107) })]);
    case 5:
      return S.Array(__S(108));
    case 6:
      return S.suspend(() =>
        S.Struct({
          entities: S.optional(__S(109)),
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
          jobStatus: S.String,
          entityType: S.String,
          operationType: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "DataAutomationLibraryIngestionJobSummary",
      });
    case 1:
      return S.Array(__S(112));
    case 2:
      return S.suspend(() =>
        S.Struct({
          jobs: S.optional(__S(113)),
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
          projectStageFilter: S.optional(S.String),
          blueprintFilter: S.optional(__S(38)),
          resourceOwner: S.optional(S.String),
          libraryFilter: S.optional(__S(52)),
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
          projectStage: S.optional(S.String),
          projectType: S.optional(S.String),
          projectName: S.optional(SensitiveString),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "DataAutomationProjectSummary",
      });
    case 5:
      return S.Array(__S(116));
    case 6:
      return S.suspend(() =>
        S.Struct({ projects: __S(117), nextToken: S.optional(S.String) }),
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
      return S.suspend(() => S.Struct({ tags: S.optional(__S(5)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String, tags: __S(5) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/tagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String, tagKeys: __S(89) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/untagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          blueprintArn: S.String.pipe(T.HttpLabel("blueprintArn")),
          schema: SensitiveString,
          blueprintStage: S.optional(S.String),
          encryptionConfiguration: S.optional(__S(3)),
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
          projectStage: S.optional(S.String),
          projectDescription: S.optional(SensitiveString),
          standardOutputConfiguration: __S(37),
          customOutputConfiguration: S.optional(__S(41)),
          overrideConfiguration: S.optional(__S(51)),
          dataAutomationLibraryConfiguration: S.optional(__S(54)),
          encryptionConfiguration: S.optional(__S(3)),
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
      return S.Array(__S(126));
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
  }
}
