import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as stream from "effect/Stream";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString, SensitiveBlob } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Bedrock Runtime",
  serviceShapeName: "AmazonBedrockFrontendService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "bedrock" });
const ver = /*@__PURE__*/ T.ServiceVersion("2023-09-30");
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
              `https://bedrock-runtime-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://bedrock-runtime-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://bedrock-runtime.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://bedrock-runtime.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ModelErrorException
  extends /*@__PURE__*/ S.TaggedError<ModelErrorException>()(
    "ModelErrorException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      originalStatusCode: /*@__PURE__*/ S.optional(S.Number),
      resourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(424),
  ) {}
export class ModelNotReadyException
  extends /*@__PURE__*/ S.TaggedError<ModelNotReadyException>()(
    "ModelNotReadyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(429), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ModelStreamErrorException
  extends /*@__PURE__*/ S.TaggedError<ModelStreamErrorException>()(
    "ModelStreamErrorException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      originalStatusCode: /*@__PURE__*/ S.optional(S.Number),
      originalMessage: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(424),
  ) {}
export class ModelTimeoutException
  extends /*@__PURE__*/ S.TaggedError<ModelTimeoutException>()(
    "ModelTimeoutException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(408),
  ).pipe(C.withTimeoutError) {}
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
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type GuardrailIdentifier = string;
export type GuardrailVersion = string;
export type GuardrailContentSource = "INPUT" | "OUTPUT" | (string & {});
export type GuardrailContentQualifier =
  | "grounding_source"
  | "query"
  | "guard_content"
  | (string & {});
export type GuardrailContentQualifierList = GuardrailContentQualifier[];
export interface GuardrailTextBlock {
  text: string;
  qualifiers?: GuardrailContentQualifier[];
}
export type GuardrailImageFormat = "png" | "jpeg" | (string & {});
export type GuardrailImageSource = { bytes: Uint8Array };
export interface GuardrailImageBlock {
  format: GuardrailImageFormat;
  source: GuardrailImageSource;
}
export type GuardrailContentBlock =
  | { text: GuardrailTextBlock; image?: never }
  | { text?: never; image: GuardrailImageBlock };
export type GuardrailContentBlockList = GuardrailContentBlock[];
export type GuardrailOutputScope = "INTERVENTIONS" | "FULL" | (string & {});
export interface ApplyGuardrailRequest {
  guardrailIdentifier: string;
  guardrailVersion: string;
  source: GuardrailContentSource;
  content: GuardrailContentBlock[];
  outputScope?: GuardrailOutputScope;
}
export type GuardrailTopicPolicyUnitsProcessed = number;
export type GuardrailContentPolicyUnitsProcessed = number;
export type GuardrailWordPolicyUnitsProcessed = number;
export type GuardrailSensitiveInformationPolicyUnitsProcessed = number;
export type GuardrailSensitiveInformationPolicyFreeUnitsProcessed = number;
export type GuardrailContextualGroundingPolicyUnitsProcessed = number;
export type GuardrailContentPolicyImageUnitsProcessed = number;
export type GuardrailAutomatedReasoningPolicyUnitsProcessed = number;
export type GuardrailAutomatedReasoningPoliciesProcessed = number;
export interface GuardrailUsage {
  topicPolicyUnits: number;
  contentPolicyUnits: number;
  wordPolicyUnits: number;
  sensitiveInformationPolicyUnits: number;
  sensitiveInformationPolicyFreeUnits: number;
  contextualGroundingPolicyUnits: number;
  contentPolicyImageUnits?: number;
  automatedReasoningPolicyUnits?: number;
  automatedReasoningPolicies?: number;
}
export type GuardrailAction = "NONE" | "GUARDRAIL_INTERVENED" | (string & {});
export type GuardrailOutputText = string;
export interface GuardrailOutputContent {
  text?: string;
}
export type GuardrailOutputContentList = GuardrailOutputContent[];
export type GuardrailTopicType = "DENY" | (string & {});
export type GuardrailTopicPolicyAction = "BLOCKED" | "NONE" | (string & {});
export interface GuardrailTopic {
  name: string;
  type: GuardrailTopicType;
  action: GuardrailTopicPolicyAction;
  detected?: boolean;
}
export type GuardrailTopicList = GuardrailTopic[];
export interface GuardrailTopicPolicyAssessment {
  topics: GuardrailTopic[];
}
export type GuardrailContentFilterType =
  | "INSULTS"
  | "HATE"
  | "SEXUAL"
  | "VIOLENCE"
  | "MISCONDUCT"
  | "PROMPT_ATTACK"
  | (string & {});
export type GuardrailContentFilterConfidence = "NONE" | "LOW" | "MEDIUM" | "HIGH" | (string & {});
export type GuardrailContentFilterStrength = "NONE" | "LOW" | "MEDIUM" | "HIGH" | (string & {});
export type GuardrailContentPolicyAction = "BLOCKED" | "NONE" | (string & {});
export interface GuardrailContentFilter {
  type: GuardrailContentFilterType;
  confidence: GuardrailContentFilterConfidence;
  filterStrength?: GuardrailContentFilterStrength;
  action: GuardrailContentPolicyAction;
  detected?: boolean;
}
export type GuardrailContentFilterList = GuardrailContentFilter[];
export interface GuardrailContentPolicyAssessment {
  filters: GuardrailContentFilter[];
}
export type GuardrailWordPolicyAction = "BLOCKED" | "NONE" | (string & {});
export interface GuardrailCustomWord {
  match: string;
  action: GuardrailWordPolicyAction;
  detected?: boolean;
}
export type GuardrailCustomWordList = GuardrailCustomWord[];
export type GuardrailManagedWordType = "PROFANITY" | (string & {});
export interface GuardrailManagedWord {
  match: string;
  type: GuardrailManagedWordType;
  action: GuardrailWordPolicyAction;
  detected?: boolean;
}
export type GuardrailManagedWordList = GuardrailManagedWord[];
export interface GuardrailWordPolicyAssessment {
  customWords: GuardrailCustomWord[];
  managedWordLists: GuardrailManagedWord[];
}
export type GuardrailPiiEntityType =
  | "ADDRESS"
  | "AGE"
  | "AWS_ACCESS_KEY"
  | "AWS_SECRET_KEY"
  | "CA_HEALTH_NUMBER"
  | "CA_SOCIAL_INSURANCE_NUMBER"
  | "CREDIT_DEBIT_CARD_CVV"
  | "CREDIT_DEBIT_CARD_EXPIRY"
  | "CREDIT_DEBIT_CARD_NUMBER"
  | "DRIVER_ID"
  | "EMAIL"
  | "INTERNATIONAL_BANK_ACCOUNT_NUMBER"
  | "IP_ADDRESS"
  | "LICENSE_PLATE"
  | "MAC_ADDRESS"
  | "NAME"
  | "PASSWORD"
  | "PHONE"
  | "PIN"
  | "SWIFT_CODE"
  | "UK_NATIONAL_HEALTH_SERVICE_NUMBER"
  | "UK_NATIONAL_INSURANCE_NUMBER"
  | "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER"
  | "URL"
  | "USERNAME"
  | "US_BANK_ACCOUNT_NUMBER"
  | "US_BANK_ROUTING_NUMBER"
  | "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER"
  | "US_PASSPORT_NUMBER"
  | "US_SOCIAL_SECURITY_NUMBER"
  | "VEHICLE_IDENTIFICATION_NUMBER"
  | (string & {});
export type GuardrailSensitiveInformationPolicyAction =
  | "ANONYMIZED"
  | "BLOCKED"
  | "NONE"
  | (string & {});
export interface GuardrailPiiEntityFilter {
  match: string;
  type: GuardrailPiiEntityType;
  action: GuardrailSensitiveInformationPolicyAction;
  detected?: boolean;
}
export type GuardrailPiiEntityFilterList = GuardrailPiiEntityFilter[];
export interface GuardrailRegexFilter {
  name?: string;
  match?: string;
  regex?: string;
  action: GuardrailSensitiveInformationPolicyAction;
  detected?: boolean;
}
export type GuardrailRegexFilterList = GuardrailRegexFilter[];
export interface GuardrailSensitiveInformationPolicyAssessment {
  piiEntities: GuardrailPiiEntityFilter[];
  regexes: GuardrailRegexFilter[];
}
export type GuardrailContextualGroundingFilterType = "GROUNDING" | "RELEVANCE" | (string & {});
export type GuardrailContextualGroundingPolicyAction = "BLOCKED" | "NONE" | (string & {});
export interface GuardrailContextualGroundingFilter {
  type: GuardrailContextualGroundingFilterType;
  threshold: number;
  score: number;
  action: GuardrailContextualGroundingPolicyAction;
  detected?: boolean;
}
export type GuardrailContextualGroundingFilters = GuardrailContextualGroundingFilter[];
export interface GuardrailContextualGroundingPolicyAssessment {
  filters?: GuardrailContextualGroundingFilter[];
}
export type GuardrailAutomatedReasoningStatementLogicContent = string | redacted.Redacted<string>;
export type GuardrailAutomatedReasoningStatementNaturalLanguageContent =
  | string
  | redacted.Redacted<string>;
export interface GuardrailAutomatedReasoningStatement {
  logic?: string | redacted.Redacted<string>;
  naturalLanguage?: string | redacted.Redacted<string>;
}
export type GuardrailAutomatedReasoningStatementList = GuardrailAutomatedReasoningStatement[];
export interface GuardrailAutomatedReasoningInputTextReference {
  text?: string | redacted.Redacted<string>;
}
export type GuardrailAutomatedReasoningInputTextReferenceList =
  GuardrailAutomatedReasoningInputTextReference[];
export type GuardrailAutomatedReasoningTranslationConfidence = number;
export interface GuardrailAutomatedReasoningTranslation {
  premises?: GuardrailAutomatedReasoningStatement[];
  claims?: GuardrailAutomatedReasoningStatement[];
  untranslatedPremises?: GuardrailAutomatedReasoningInputTextReference[];
  untranslatedClaims?: GuardrailAutomatedReasoningInputTextReference[];
  confidence?: number;
}
export interface GuardrailAutomatedReasoningScenario {
  statements?: GuardrailAutomatedReasoningStatement[];
}
export type AutomatedReasoningRuleIdentifier = string;
export type GuardrailAutomatedReasoningPolicyVersionArn = string;
export interface GuardrailAutomatedReasoningRule {
  identifier?: string;
  policyVersionArn?: string;
}
export type GuardrailAutomatedReasoningRuleList = GuardrailAutomatedReasoningRule[];
export type GuardrailAutomatedReasoningLogicWarningType =
  | "ALWAYS_FALSE"
  | "ALWAYS_TRUE"
  | (string & {});
export interface GuardrailAutomatedReasoningLogicWarning {
  type?: GuardrailAutomatedReasoningLogicWarningType;
  premises?: GuardrailAutomatedReasoningStatement[];
  claims?: GuardrailAutomatedReasoningStatement[];
}
export interface GuardrailAutomatedReasoningValidFinding {
  translation?: GuardrailAutomatedReasoningTranslation;
  claimsTrueScenario?: GuardrailAutomatedReasoningScenario;
  supportingRules?: GuardrailAutomatedReasoningRule[];
  logicWarning?: GuardrailAutomatedReasoningLogicWarning;
}
export interface GuardrailAutomatedReasoningInvalidFinding {
  translation?: GuardrailAutomatedReasoningTranslation;
  contradictingRules?: GuardrailAutomatedReasoningRule[];
  logicWarning?: GuardrailAutomatedReasoningLogicWarning;
}
export interface GuardrailAutomatedReasoningSatisfiableFinding {
  translation?: GuardrailAutomatedReasoningTranslation;
  claimsTrueScenario?: GuardrailAutomatedReasoningScenario;
  claimsFalseScenario?: GuardrailAutomatedReasoningScenario;
  logicWarning?: GuardrailAutomatedReasoningLogicWarning;
}
export interface GuardrailAutomatedReasoningImpossibleFinding {
  translation?: GuardrailAutomatedReasoningTranslation;
  contradictingRules?: GuardrailAutomatedReasoningRule[];
  logicWarning?: GuardrailAutomatedReasoningLogicWarning;
}
export type GuardrailAutomatedReasoningTranslationList = GuardrailAutomatedReasoningTranslation[];
export interface GuardrailAutomatedReasoningTranslationOption {
  translations?: GuardrailAutomatedReasoningTranslation[];
}
export type GuardrailAutomatedReasoningTranslationOptionList =
  GuardrailAutomatedReasoningTranslationOption[];
export type GuardrailAutomatedReasoningDifferenceScenarioList =
  GuardrailAutomatedReasoningScenario[];
export interface GuardrailAutomatedReasoningTranslationAmbiguousFinding {
  options?: GuardrailAutomatedReasoningTranslationOption[];
  differenceScenarios?: GuardrailAutomatedReasoningScenario[];
}
export interface GuardrailAutomatedReasoningTooComplexFinding {}
export interface GuardrailAutomatedReasoningNoTranslationsFinding {}
export type GuardrailAutomatedReasoningFinding =
  | {
      valid: GuardrailAutomatedReasoningValidFinding;
      invalid?: never;
      satisfiable?: never;
      impossible?: never;
      translationAmbiguous?: never;
      tooComplex?: never;
      noTranslations?: never;
    }
  | {
      valid?: never;
      invalid: GuardrailAutomatedReasoningInvalidFinding;
      satisfiable?: never;
      impossible?: never;
      translationAmbiguous?: never;
      tooComplex?: never;
      noTranslations?: never;
    }
  | {
      valid?: never;
      invalid?: never;
      satisfiable: GuardrailAutomatedReasoningSatisfiableFinding;
      impossible?: never;
      translationAmbiguous?: never;
      tooComplex?: never;
      noTranslations?: never;
    }
  | {
      valid?: never;
      invalid?: never;
      satisfiable?: never;
      impossible: GuardrailAutomatedReasoningImpossibleFinding;
      translationAmbiguous?: never;
      tooComplex?: never;
      noTranslations?: never;
    }
  | {
      valid?: never;
      invalid?: never;
      satisfiable?: never;
      impossible?: never;
      translationAmbiguous: GuardrailAutomatedReasoningTranslationAmbiguousFinding;
      tooComplex?: never;
      noTranslations?: never;
    }
  | {
      valid?: never;
      invalid?: never;
      satisfiable?: never;
      impossible?: never;
      translationAmbiguous?: never;
      tooComplex: GuardrailAutomatedReasoningTooComplexFinding;
      noTranslations?: never;
    }
  | {
      valid?: never;
      invalid?: never;
      satisfiable?: never;
      impossible?: never;
      translationAmbiguous?: never;
      tooComplex?: never;
      noTranslations: GuardrailAutomatedReasoningNoTranslationsFinding;
    };
export type GuardrailAutomatedReasoningFindingList = GuardrailAutomatedReasoningFinding[];
export interface GuardrailAutomatedReasoningPolicyAssessment {
  findings?: GuardrailAutomatedReasoningFinding[];
}
export type GuardrailProcessingLatency = number;
export type TextCharactersGuarded = number;
export type TextCharactersTotal = number;
export interface GuardrailTextCharactersCoverage {
  guarded?: number;
  total?: number;
}
export type ImagesGuarded = number;
export type ImagesTotal = number;
export interface GuardrailImageCoverage {
  guarded?: number;
  total?: number;
}
export interface GuardrailCoverage {
  textCharacters?: GuardrailTextCharactersCoverage;
  images?: GuardrailImageCoverage;
}
export interface GuardrailInvocationMetrics {
  guardrailProcessingLatency?: number;
  usage?: GuardrailUsage;
  guardrailCoverage?: GuardrailCoverage;
}
export type GuardrailId = string;
export type GuardrailArn = string;
export type GuardrailOrigin =
  | "REQUEST"
  | "ACCOUNT_ENFORCED"
  | "ORGANIZATION_ENFORCED"
  | (string & {});
export type GuardrailOriginList = GuardrailOrigin[];
export type GuardrailOwnership = "SELF" | "CROSS_ACCOUNT" | (string & {});
export interface AppliedGuardrailDetails {
  guardrailId?: string;
  guardrailVersion?: string;
  guardrailArn?: string;
  guardrailOrigin?: GuardrailOrigin[];
  guardrailOwnership?: GuardrailOwnership;
}
export interface GuardrailAssessment {
  topicPolicy?: GuardrailTopicPolicyAssessment;
  contentPolicy?: GuardrailContentPolicyAssessment;
  wordPolicy?: GuardrailWordPolicyAssessment;
  sensitiveInformationPolicy?: GuardrailSensitiveInformationPolicyAssessment;
  contextualGroundingPolicy?: GuardrailContextualGroundingPolicyAssessment;
  automatedReasoningPolicy?: GuardrailAutomatedReasoningPolicyAssessment;
  invocationMetrics?: GuardrailInvocationMetrics;
  appliedGuardrailDetails?: AppliedGuardrailDetails;
}
export type GuardrailAssessmentList = GuardrailAssessment[];
export interface ApplyGuardrailResponse {
  usage: GuardrailUsage;
  action: GuardrailAction;
  actionReason?: string;
  outputs: GuardrailOutputContent[];
  assessments: GuardrailAssessment[];
  guardrailCoverage?: GuardrailCoverage;
}
export type ConversationalModelId = string;
export type ConversationRole = "user" | "assistant" | "system" | (string & {});
export type ImageFormat = "png" | "jpeg" | "gif" | "webp" | (string & {});
export type S3Uri = string;
export type AccountId = string;
export interface S3Location {
  uri: string;
  bucketOwner?: string;
}
export type ImageSource =
  | { bytes: Uint8Array; s3Location?: never }
  | { bytes?: never; s3Location: S3Location };
export interface ErrorBlock {
  message?: string;
}
export interface ImageBlock {
  format: ImageFormat;
  source: ImageSource;
  error?: ErrorBlock;
}
export type DocumentFormat =
  | "pdf"
  | "csv"
  | "doc"
  | "docx"
  | "xls"
  | "xlsx"
  | "html"
  | "txt"
  | "md"
  | (string & {});
export type DocumentContentBlock = { text: string };
export type DocumentContentBlocks = DocumentContentBlock[];
export type DocumentSource =
  | { bytes: Uint8Array; s3Location?: never; text?: never; content?: never }
  | { bytes?: never; s3Location: S3Location; text?: never; content?: never }
  | { bytes?: never; s3Location?: never; text: string; content?: never }
  | { bytes?: never; s3Location?: never; text?: never; content: DocumentContentBlock[] };
export interface CitationsConfig {
  enabled: boolean;
}
export interface DocumentBlock {
  format?: DocumentFormat;
  name: string;
  source: DocumentSource;
  context?: string;
  citations?: CitationsConfig;
}
export type VideoFormat =
  | "mkv"
  | "mov"
  | "mp4"
  | "webm"
  | "flv"
  | "mpeg"
  | "mpg"
  | "wmv"
  | "three_gp"
  | (string & {});
export type VideoSource =
  | { bytes: Uint8Array; s3Location?: never }
  | { bytes?: never; s3Location: S3Location };
export interface VideoBlock {
  format: VideoFormat;
  source: VideoSource;
}
export type AudioFormat =
  | "mp3"
  | "opus"
  | "wav"
  | "aac"
  | "flac"
  | "mp4"
  | "ogg"
  | "mkv"
  | "mka"
  | "x-aac"
  | "m4a"
  | "mpeg"
  | "mpga"
  | "pcm"
  | "webm"
  | (string & {});
export type AudioSource =
  | { bytes: Uint8Array; s3Location?: never }
  | { bytes?: never; s3Location: S3Location };
export interface AudioBlock {
  format: AudioFormat;
  source: AudioSource;
  error?: ErrorBlock;
}
export type ToolUseId = string;
export type ToolName = string;
export type ToolUseType = "server_tool_use" | (string & {});
export interface ToolUseBlock {
  toolUseId: string;
  name: string;
  input: any;
  type?: ToolUseType;
}
export interface SearchResultContentBlock {
  text: string;
}
export type SearchResultContentBlocks = SearchResultContentBlock[];
export interface SearchResultBlock {
  source: string;
  title: string;
  content: SearchResultContentBlock[];
  citations?: CitationsConfig;
}
export type ToolResultContentBlock =
  | {
      json: any;
      text?: never;
      image?: never;
      document?: never;
      video?: never;
      searchResult?: never;
    }
  | {
      json?: never;
      text: string;
      image?: never;
      document?: never;
      video?: never;
      searchResult?: never;
    }
  | {
      json?: never;
      text?: never;
      image: ImageBlock;
      document?: never;
      video?: never;
      searchResult?: never;
    }
  | {
      json?: never;
      text?: never;
      image?: never;
      document: DocumentBlock;
      video?: never;
      searchResult?: never;
    }
  | {
      json?: never;
      text?: never;
      image?: never;
      document?: never;
      video: VideoBlock;
      searchResult?: never;
    }
  | {
      json?: never;
      text?: never;
      image?: never;
      document?: never;
      video?: never;
      searchResult: SearchResultBlock;
    };
export type ToolResultContentBlocks = ToolResultContentBlock[];
export type ToolResultStatus = "success" | "error" | (string & {});
export interface ToolResultBlock {
  toolUseId: string;
  content: ToolResultContentBlock[];
  status?: ToolResultStatus;
  type?: string;
}
export type GuardrailConverseContentQualifier =
  | "grounding_source"
  | "query"
  | "guard_content"
  | (string & {});
export type GuardrailConverseContentQualifierList = GuardrailConverseContentQualifier[];
export interface GuardrailConverseTextBlock {
  text: string;
  qualifiers?: GuardrailConverseContentQualifier[];
}
export type GuardrailConverseImageFormat = "png" | "jpeg" | (string & {});
export type GuardrailConverseImageSource = { bytes: Uint8Array };
export interface GuardrailConverseImageBlock {
  format: GuardrailConverseImageFormat;
  source: GuardrailConverseImageSource;
}
export type GuardrailConverseContentBlock =
  | { text: GuardrailConverseTextBlock; image?: never }
  | { text?: never; image: GuardrailConverseImageBlock };
export type CachePointType = "default" | (string & {});
export type CacheTTL = "5m" | "1h" | (string & {});
export interface CachePointBlock {
  type: CachePointType;
  ttl?: CacheTTL;
}
export interface ReasoningTextBlock {
  text: string;
  signature?: string;
}
export type ReasoningContentBlock =
  | { reasoningText: ReasoningTextBlock; redactedContent?: never }
  | { reasoningText?: never; redactedContent: Uint8Array };
export type CitationGeneratedContent = { text: string };
export type CitationGeneratedContentList = CitationGeneratedContent[];
export type CitationSourceContent = { text: string };
export type CitationSourceContentList = CitationSourceContent[];
export interface WebLocation {
  url?: string;
  domain?: string;
}
export interface DocumentCharLocation {
  documentIndex?: number;
  start?: number;
  end?: number;
}
export interface DocumentPageLocation {
  documentIndex?: number;
  start?: number;
  end?: number;
}
export interface DocumentChunkLocation {
  documentIndex?: number;
  start?: number;
  end?: number;
}
export interface SearchResultLocation {
  searchResultIndex?: number;
  start?: number;
  end?: number;
}
export type CitationLocation =
  | {
      web: WebLocation;
      documentChar?: never;
      documentPage?: never;
      documentChunk?: never;
      searchResultLocation?: never;
    }
  | {
      web?: never;
      documentChar: DocumentCharLocation;
      documentPage?: never;
      documentChunk?: never;
      searchResultLocation?: never;
    }
  | {
      web?: never;
      documentChar?: never;
      documentPage: DocumentPageLocation;
      documentChunk?: never;
      searchResultLocation?: never;
    }
  | {
      web?: never;
      documentChar?: never;
      documentPage?: never;
      documentChunk: DocumentChunkLocation;
      searchResultLocation?: never;
    }
  | {
      web?: never;
      documentChar?: never;
      documentPage?: never;
      documentChunk?: never;
      searchResultLocation: SearchResultLocation;
    };
export interface Citation {
  title?: string;
  source?: string;
  sourceContent?: CitationSourceContent[];
  location?: CitationLocation;
}
export type Citations = Citation[];
export interface CitationsContentBlock {
  content?: CitationGeneratedContent[];
  citations?: Citation[];
}
export interface ToolReference {
  type?: string;
  name?: string;
  serverName?: string;
}
export interface ToolAdditionBlock {
  tool: ToolReference;
}
export interface ToolRemovalBlock {
  tool: ToolReference;
}
export type ContentBlock =
  | {
      text: string;
      image?: never;
      document?: never;
      video?: never;
      audio?: never;
      toolUse?: never;
      toolResult?: never;
      guardContent?: never;
      cachePoint?: never;
      reasoningContent?: never;
      citationsContent?: never;
      searchResult?: never;
      toolAddition?: never;
      toolRemoval?: never;
    }
  | {
      text?: never;
      image: ImageBlock;
      document?: never;
      video?: never;
      audio?: never;
      toolUse?: never;
      toolResult?: never;
      guardContent?: never;
      cachePoint?: never;
      reasoningContent?: never;
      citationsContent?: never;
      searchResult?: never;
      toolAddition?: never;
      toolRemoval?: never;
    }
  | {
      text?: never;
      image?: never;
      document: DocumentBlock;
      video?: never;
      audio?: never;
      toolUse?: never;
      toolResult?: never;
      guardContent?: never;
      cachePoint?: never;
      reasoningContent?: never;
      citationsContent?: never;
      searchResult?: never;
      toolAddition?: never;
      toolRemoval?: never;
    }
  | {
      text?: never;
      image?: never;
      document?: never;
      video: VideoBlock;
      audio?: never;
      toolUse?: never;
      toolResult?: never;
      guardContent?: never;
      cachePoint?: never;
      reasoningContent?: never;
      citationsContent?: never;
      searchResult?: never;
      toolAddition?: never;
      toolRemoval?: never;
    }
  | {
      text?: never;
      image?: never;
      document?: never;
      video?: never;
      audio: AudioBlock;
      toolUse?: never;
      toolResult?: never;
      guardContent?: never;
      cachePoint?: never;
      reasoningContent?: never;
      citationsContent?: never;
      searchResult?: never;
      toolAddition?: never;
      toolRemoval?: never;
    }
  | {
      text?: never;
      image?: never;
      document?: never;
      video?: never;
      audio?: never;
      toolUse: ToolUseBlock;
      toolResult?: never;
      guardContent?: never;
      cachePoint?: never;
      reasoningContent?: never;
      citationsContent?: never;
      searchResult?: never;
      toolAddition?: never;
      toolRemoval?: never;
    }
  | {
      text?: never;
      image?: never;
      document?: never;
      video?: never;
      audio?: never;
      toolUse?: never;
      toolResult: ToolResultBlock;
      guardContent?: never;
      cachePoint?: never;
      reasoningContent?: never;
      citationsContent?: never;
      searchResult?: never;
      toolAddition?: never;
      toolRemoval?: never;
    }
  | {
      text?: never;
      image?: never;
      document?: never;
      video?: never;
      audio?: never;
      toolUse?: never;
      toolResult?: never;
      guardContent: GuardrailConverseContentBlock;
      cachePoint?: never;
      reasoningContent?: never;
      citationsContent?: never;
      searchResult?: never;
      toolAddition?: never;
      toolRemoval?: never;
    }
  | {
      text?: never;
      image?: never;
      document?: never;
      video?: never;
      audio?: never;
      toolUse?: never;
      toolResult?: never;
      guardContent?: never;
      cachePoint: CachePointBlock;
      reasoningContent?: never;
      citationsContent?: never;
      searchResult?: never;
      toolAddition?: never;
      toolRemoval?: never;
    }
  | {
      text?: never;
      image?: never;
      document?: never;
      video?: never;
      audio?: never;
      toolUse?: never;
      toolResult?: never;
      guardContent?: never;
      cachePoint?: never;
      reasoningContent: ReasoningContentBlock;
      citationsContent?: never;
      searchResult?: never;
      toolAddition?: never;
      toolRemoval?: never;
    }
  | {
      text?: never;
      image?: never;
      document?: never;
      video?: never;
      audio?: never;
      toolUse?: never;
      toolResult?: never;
      guardContent?: never;
      cachePoint?: never;
      reasoningContent?: never;
      citationsContent: CitationsContentBlock;
      searchResult?: never;
      toolAddition?: never;
      toolRemoval?: never;
    }
  | {
      text?: never;
      image?: never;
      document?: never;
      video?: never;
      audio?: never;
      toolUse?: never;
      toolResult?: never;
      guardContent?: never;
      cachePoint?: never;
      reasoningContent?: never;
      citationsContent?: never;
      searchResult: SearchResultBlock;
      toolAddition?: never;
      toolRemoval?: never;
    }
  | {
      text?: never;
      image?: never;
      document?: never;
      video?: never;
      audio?: never;
      toolUse?: never;
      toolResult?: never;
      guardContent?: never;
      cachePoint?: never;
      reasoningContent?: never;
      citationsContent?: never;
      searchResult?: never;
      toolAddition: ToolAdditionBlock;
      toolRemoval?: never;
    }
  | {
      text?: never;
      image?: never;
      document?: never;
      video?: never;
      audio?: never;
      toolUse?: never;
      toolResult?: never;
      guardContent?: never;
      cachePoint?: never;
      reasoningContent?: never;
      citationsContent?: never;
      searchResult?: never;
      toolAddition?: never;
      toolRemoval: ToolRemovalBlock;
    };
export type ContentBlocks = ContentBlock[];
export interface Message {
  role: ConversationRole;
  content: ContentBlock[];
}
export type Messages = Message[];
export type NonEmptyString = string;
export type SystemContentBlock =
  | { text: string; guardContent?: never; cachePoint?: never }
  | { text?: never; guardContent: GuardrailConverseContentBlock; cachePoint?: never }
  | { text?: never; guardContent?: never; cachePoint: CachePointBlock };
export type SystemContentBlocks = SystemContentBlock[];
export type NonEmptyStringList = string[];
export interface InferenceConfiguration {
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  stopSequences?: string[];
}
export type ToolInputSchema = { json: any };
export interface ToolSpecification {
  name: string;
  description?: string;
  inputSchema: ToolInputSchema;
  strict?: boolean;
}
export interface SystemTool {
  name: string;
}
export type Tool =
  | { toolSpec: ToolSpecification; systemTool?: never; cachePoint?: never }
  | { toolSpec?: never; systemTool: SystemTool; cachePoint?: never }
  | { toolSpec?: never; systemTool?: never; cachePoint: CachePointBlock };
export type Tools = Tool[];
export interface AutoToolChoice {}
export interface AnyToolChoice {}
export interface SpecificToolChoice {
  name: string;
}
export type ToolChoice =
  | { auto: AutoToolChoice; any?: never; tool?: never }
  | { auto?: never; any: AnyToolChoice; tool?: never }
  | { auto?: never; any?: never; tool: SpecificToolChoice };
export interface ToolConfiguration {
  tools: Tool[];
  toolChoice?: ToolChoice;
}
export type GuardrailTrace = "enabled" | "disabled" | "enabled_full" | (string & {});
export interface GuardrailConfiguration {
  guardrailIdentifier?: string;
  guardrailVersion?: string;
  trace?: GuardrailTrace;
}
export type PromptVariableValues = { text: string };
export type PromptVariableMap = { [key: string]: PromptVariableValues | undefined };
export type AdditionalModelResponseFieldPaths = string[];
export type RequestMetadata = { [key: string]: string | undefined };
export type PerformanceConfigLatency = "standard" | "optimized" | (string & {});
export interface PerformanceConfiguration {
  latency?: PerformanceConfigLatency;
}
export type ServiceTierType = "priority" | "default" | "flex" | "reserved" | (string & {});
export interface ServiceTier {
  type: ServiceTierType;
}
export type OutputFormatType = "json_schema" | (string & {});
export interface JsonSchemaDefinition {
  schema: string;
  name?: string;
  description?: string;
}
export type OutputFormatStructure = { jsonSchema: JsonSchemaDefinition };
export interface OutputFormat {
  type: OutputFormatType;
  structure: OutputFormatStructure;
}
export interface OutputConfig {
  textFormat?: OutputFormat;
  effort?: string;
}
export interface ConverseRequest {
  modelId: string;
  messages?: Message[];
  system?: SystemContentBlock[];
  inferenceConfig?: InferenceConfiguration;
  toolConfig?: ToolConfiguration;
  guardrailConfig?: GuardrailConfiguration;
  additionalModelRequestFields?: any;
  promptVariables?: { [key: string]: PromptVariableValues | undefined };
  additionalModelResponseFieldPaths?: string[];
  requestMetadata?: { [key: string]: string | undefined };
  performanceConfig?: PerformanceConfiguration;
  serviceTier?: ServiceTier;
  outputConfig?: OutputConfig;
}
export type ConverseOutput = { message: Message };
export type StopReason =
  | "end_turn"
  | "tool_use"
  | "max_tokens"
  | "stop_sequence"
  | "guardrail_intervened"
  | "content_filtered"
  | "malformed_model_output"
  | "malformed_tool_use"
  | "model_context_window_exceeded"
  | (string & {});
export interface CacheDetail {
  ttl: CacheTTL;
  inputTokens: number;
}
export type CacheDetailsList = CacheDetail[];
export interface TokenUsage {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
  cacheReadInputTokens?: number;
  cacheWriteInputTokens?: number;
  cacheDetails?: CacheDetail[];
}
export interface ConverseMetrics {
  latencyMs: number;
}
export type ModelOutputs = string[];
export type GuardrailAssessmentMap = { [key: string]: GuardrailAssessment | undefined };
export type GuardrailAssessmentListMap = { [key: string]: GuardrailAssessment[] | undefined };
export interface GuardrailTraceAssessment {
  modelOutput?: string[];
  inputAssessment?: { [key: string]: GuardrailAssessment | undefined };
  outputAssessments?: { [key: string]: GuardrailAssessment[] | undefined };
  actionReason?: string;
}
export type InvokedModelId = string;
export interface PromptRouterTrace {
  invokedModelId?: string;
}
export interface ConverseTrace {
  guardrail?: GuardrailTraceAssessment;
  promptRouter?: PromptRouterTrace;
}
export interface ConverseResponse {
  output: ConverseOutput;
  stopReason: StopReason;
  usage: TokenUsage;
  metrics: ConverseMetrics;
  additionalModelResponseFields?: any;
  trace?: ConverseTrace;
  performanceConfig?: PerformanceConfiguration;
  serviceTier?: ServiceTier;
}
export type GuardrailStreamProcessingMode = "sync" | "async" | (string & {});
export interface GuardrailStreamConfiguration {
  guardrailIdentifier?: string;
  guardrailVersion?: string;
  trace?: GuardrailTrace;
  streamProcessingMode?: GuardrailStreamProcessingMode;
}
export interface ConverseStreamRequest {
  modelId: string;
  messages?: Message[];
  system?: SystemContentBlock[];
  inferenceConfig?: InferenceConfiguration;
  toolConfig?: ToolConfiguration;
  guardrailConfig?: GuardrailStreamConfiguration;
  additionalModelRequestFields?: any;
  promptVariables?: { [key: string]: PromptVariableValues | undefined };
  additionalModelResponseFieldPaths?: string[];
  requestMetadata?: { [key: string]: string | undefined };
  performanceConfig?: PerformanceConfiguration;
  serviceTier?: ServiceTier;
  outputConfig?: OutputConfig;
}
export interface MessageStartEvent {
  role: ConversationRole;
}
export interface ToolUseBlockStart {
  toolUseId: string;
  name: string;
  type?: ToolUseType;
}
export interface ToolResultBlockStart {
  toolUseId: string;
  type?: string;
  status?: ToolResultStatus;
}
export interface ImageBlockStart {
  format: ImageFormat;
}
export type ContentBlockStart =
  | { toolUse: ToolUseBlockStart; toolResult?: never; image?: never }
  | { toolUse?: never; toolResult: ToolResultBlockStart; image?: never }
  | { toolUse?: never; toolResult?: never; image: ImageBlockStart };
export type NonNegativeInteger = number;
export interface ContentBlockStartEvent {
  start: ContentBlockStart;
  contentBlockIndex: number;
}
export interface ToolUseBlockDelta {
  input: string;
}
export type ToolResultBlockDelta = { text: string; json?: never } | { text?: never; json: any };
export type ToolResultBlocksDelta = ToolResultBlockDelta[];
export type ReasoningContentBlockDelta =
  | { text: string; redactedContent?: never; signature?: never }
  | { text?: never; redactedContent: Uint8Array; signature?: never }
  | { text?: never; redactedContent?: never; signature: string };
export interface CitationSourceContentDelta {
  text?: string;
}
export type CitationSourceContentListDelta = CitationSourceContentDelta[];
export interface CitationsDelta {
  title?: string;
  source?: string;
  sourceContent?: CitationSourceContentDelta[];
  location?: CitationLocation;
}
export interface ImageBlockDelta {
  source?: ImageSource;
  error?: ErrorBlock;
}
export type ContentBlockDelta =
  | {
      text: string;
      toolUse?: never;
      toolResult?: never;
      reasoningContent?: never;
      citation?: never;
      image?: never;
    }
  | {
      text?: never;
      toolUse: ToolUseBlockDelta;
      toolResult?: never;
      reasoningContent?: never;
      citation?: never;
      image?: never;
    }
  | {
      text?: never;
      toolUse?: never;
      toolResult: ToolResultBlockDelta[];
      reasoningContent?: never;
      citation?: never;
      image?: never;
    }
  | {
      text?: never;
      toolUse?: never;
      toolResult?: never;
      reasoningContent: ReasoningContentBlockDelta;
      citation?: never;
      image?: never;
    }
  | {
      text?: never;
      toolUse?: never;
      toolResult?: never;
      reasoningContent?: never;
      citation: CitationsDelta;
      image?: never;
    }
  | {
      text?: never;
      toolUse?: never;
      toolResult?: never;
      reasoningContent?: never;
      citation?: never;
      image: ImageBlockDelta;
    };
export interface ContentBlockDeltaEvent {
  delta: ContentBlockDelta;
  contentBlockIndex: number;
}
export interface ContentBlockStopEvent {
  contentBlockIndex: number;
}
export interface MessageStopEvent {
  stopReason: StopReason;
  additionalModelResponseFields?: any;
}
export interface ConverseStreamMetrics {
  latencyMs: number;
}
export interface ConverseStreamTrace {
  guardrail?: GuardrailTraceAssessment;
  promptRouter?: PromptRouterTrace;
}
export interface ConverseStreamMetadataEvent {
  usage: TokenUsage;
  metrics: ConverseStreamMetrics;
  trace?: ConverseStreamTrace;
  performanceConfig?: PerformanceConfiguration;
  serviceTier?: ServiceTier;
}
export type NonBlankString = string;
export type StatusCode = number;
export type ConverseStreamOutput =
  | {
      messageStart: MessageStartEvent;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop?: never;
      metadata?: never;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException?: never;
      serviceUnavailableException?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart: ContentBlockStartEvent;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop?: never;
      metadata?: never;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException?: never;
      serviceUnavailableException?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta: ContentBlockDeltaEvent;
      contentBlockStop?: never;
      messageStop?: never;
      metadata?: never;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException?: never;
      serviceUnavailableException?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop: ContentBlockStopEvent;
      messageStop?: never;
      metadata?: never;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException?: never;
      serviceUnavailableException?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop: MessageStopEvent;
      metadata?: never;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException?: never;
      serviceUnavailableException?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop?: never;
      metadata: ConverseStreamMetadataEvent;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException?: never;
      serviceUnavailableException?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop?: never;
      metadata?: never;
      internalServerException: InternalServerException;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException?: never;
      serviceUnavailableException?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop?: never;
      metadata?: never;
      internalServerException?: never;
      modelStreamErrorException: ModelStreamErrorException;
      validationException?: never;
      throttlingException?: never;
      serviceUnavailableException?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop?: never;
      metadata?: never;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException: ValidationException;
      throttlingException?: never;
      serviceUnavailableException?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop?: never;
      metadata?: never;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException: ThrottlingException;
      serviceUnavailableException?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop?: never;
      metadata?: never;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException?: never;
      serviceUnavailableException: ServiceUnavailableException;
    };
export interface ConverseStreamResponse {
  stream?: stream.Stream<ConverseStreamOutput, Error, never>;
}
export type FoundationModelVersionIdentifier = string;
export type Body = Uint8Array | redacted.Redacted<Uint8Array>;
export interface InvokeModelTokensRequest {
  body: Uint8Array | redacted.Redacted<Uint8Array>;
}
export interface ConverseTokensRequest {
  messages?: Message[];
  system?: SystemContentBlock[];
  toolConfig?: ToolConfiguration;
  additionalModelRequestFields?: any;
}
export type CountTokensInput =
  | { invokeModel: InvokeModelTokensRequest; converse?: never }
  | { invokeModel?: never; converse: ConverseTokensRequest };
export interface CountTokensRequest {
  modelId: string;
  input: CountTokensInput;
}
export interface CountTokensResponse {
  inputTokens: number;
}
export type InvocationArn = string;
export interface GetAsyncInvokeRequest {
  invocationArn: string;
}
export type AsyncInvokeArn = string;
export type AsyncInvokeIdempotencyToken = string;
export type AsyncInvokeStatus = "InProgress" | "Completed" | "Failed" | (string & {});
export type AsyncInvokeMessage = string | redacted.Redacted<string>;
export type KmsKeyId = string;
export interface AsyncInvokeS3OutputDataConfig {
  s3Uri: string;
  kmsKeyId?: string;
  bucketOwner?: string;
}
export type AsyncInvokeOutputDataConfig = { s3OutputDataConfig: AsyncInvokeS3OutputDataConfig };
export interface GetAsyncInvokeResponse {
  invocationArn: string;
  modelArn: string;
  clientRequestToken?: string;
  status: AsyncInvokeStatus;
  failureMessage?: string | redacted.Redacted<string>;
  submitTime: Date;
  lastModifiedTime?: Date;
  endTime?: Date;
  outputDataConfig: AsyncInvokeOutputDataConfig;
}
export type GuardrailChecksRole = "user" | "assistant" | "system" | (string & {});
export type GuardrailChecksTextContent = string | redacted.Redacted<string>;
export type GuardrailChecksContentBlock = { text: string | redacted.Redacted<string> };
export type GuardrailChecksContentBlockList = GuardrailChecksContentBlock[];
export interface GuardrailChecksMessage {
  role: GuardrailChecksRole;
  content: GuardrailChecksContentBlock[];
}
export type GuardrailChecksMessageList = GuardrailChecksMessage[];
export type GuardrailChecksContentFilterCategory =
  | "VIOLENCE"
  | "HATE"
  | "SEXUAL"
  | "MISCONDUCT"
  | "INSULTS"
  | (string & {});
export interface GuardrailChecksContentFilterCategoryConfig {
  category: GuardrailChecksContentFilterCategory;
}
export type GuardrailChecksContentFilterCategoryConfigList =
  GuardrailChecksContentFilterCategoryConfig[];
export interface GuardrailChecksContentFilterConfig {
  categories: GuardrailChecksContentFilterCategoryConfig[];
}
export type GuardrailChecksPromptAttackCategory =
  | "JAILBREAK"
  | "PROMPT_INJECTION"
  | "PROMPT_LEAKAGE"
  | (string & {});
export interface GuardrailChecksPromptAttackCategoryConfig {
  category: GuardrailChecksPromptAttackCategory;
}
export type GuardrailChecksPromptAttackCategoryConfigList =
  GuardrailChecksPromptAttackCategoryConfig[];
export interface GuardrailChecksPromptAttackConfig {
  categories: GuardrailChecksPromptAttackCategoryConfig[];
}
export type GuardrailChecksSensitiveInformationEntityType =
  | "ADDRESS"
  | "AGE"
  | "AWS_ACCESS_KEY"
  | "AWS_SECRET_KEY"
  | "CA_HEALTH_NUMBER"
  | "CA_SOCIAL_INSURANCE_NUMBER"
  | "CREDIT_DEBIT_CARD_CVV"
  | "CREDIT_DEBIT_CARD_EXPIRY"
  | "CREDIT_DEBIT_CARD_NUMBER"
  | "DRIVER_ID"
  | "EMAIL"
  | "INTERNATIONAL_BANK_ACCOUNT_NUMBER"
  | "IP_ADDRESS"
  | "LICENSE_PLATE"
  | "MAC_ADDRESS"
  | "NAME"
  | "PASSWORD"
  | "PHONE"
  | "PIN"
  | "SWIFT_CODE"
  | "UK_NATIONAL_HEALTH_SERVICE_NUMBER"
  | "UK_NATIONAL_INSURANCE_NUMBER"
  | "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER"
  | "URL"
  | "USERNAME"
  | "US_BANK_ACCOUNT_NUMBER"
  | "US_BANK_ROUTING_NUMBER"
  | "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER"
  | "US_PASSPORT_NUMBER"
  | "US_SOCIAL_SECURITY_NUMBER"
  | "VEHICLE_IDENTIFICATION_NUMBER"
  | (string & {});
export interface GuardrailChecksSensitiveInformationEntityConfig {
  type: GuardrailChecksSensitiveInformationEntityType;
}
export type GuardrailChecksSensitiveInformationEntityConfigList =
  GuardrailChecksSensitiveInformationEntityConfig[];
export interface GuardrailChecksSensitiveInformationConfig {
  entities: GuardrailChecksSensitiveInformationEntityConfig[];
}
export interface GuardrailChecksConfig {
  contentFilter?: GuardrailChecksContentFilterConfig;
  promptAttack?: GuardrailChecksPromptAttackConfig;
  sensitiveInformation?: GuardrailChecksSensitiveInformationConfig;
}
export interface InvokeGuardrailChecksRequest {
  messages: GuardrailChecksMessage[];
  checks: GuardrailChecksConfig;
}
export interface GuardrailChecksContentFilterResultEntry {
  category: GuardrailChecksContentFilterCategory;
  severityScore: number;
}
export type GuardrailChecksContentFilterResultList = GuardrailChecksContentFilterResultEntry[];
export interface GuardrailChecksContentFilterResult {
  results: GuardrailChecksContentFilterResultEntry[];
}
export interface GuardrailChecksPromptAttackResultEntry {
  category: GuardrailChecksPromptAttackCategory;
  severityScore: number;
}
export type GuardrailChecksPromptAttackResultList = GuardrailChecksPromptAttackResultEntry[];
export interface GuardrailChecksPromptAttackResult {
  results: GuardrailChecksPromptAttackResultEntry[];
}
export interface GuardrailChecksSensitiveInformationResultEntry {
  type: GuardrailChecksSensitiveInformationEntityType;
  confidenceScore: number;
  beginOffset: number;
  endOffset: number;
  messageIndex: number;
  contentIndex: number;
}
export type GuardrailChecksSensitiveInformationResultList =
  GuardrailChecksSensitiveInformationResultEntry[];
export interface GuardrailChecksSensitiveInformationResult {
  results: GuardrailChecksSensitiveInformationResultEntry[];
  truncated?: boolean;
}
export interface GuardrailChecksResults {
  contentFilter?: GuardrailChecksContentFilterResult;
  promptAttack?: GuardrailChecksPromptAttackResult;
  sensitiveInformation?: GuardrailChecksSensitiveInformationResult;
}
export interface GuardrailChecksContentFilterUsage {
  textUnits: number;
}
export interface GuardrailChecksPromptAttackUsage {
  textUnits: number;
}
export interface GuardrailChecksSensitiveInformationUsage {
  textUnits: number;
}
export interface GuardrailChecksUsageResults {
  contentFilter?: GuardrailChecksContentFilterUsage;
  promptAttack?: GuardrailChecksPromptAttackUsage;
  sensitiveInformation?: GuardrailChecksSensitiveInformationUsage;
}
export interface InvokeGuardrailChecksResponse {
  results: GuardrailChecksResults;
  usage: GuardrailChecksUsageResults;
}
export type MimeType = string;
export type InvokeModelIdentifier = string;
export type Trace = "ENABLED" | "DISABLED" | "ENABLED_FULL" | (string & {});
export type RequestMetadataJson = string | redacted.Redacted<string>;
export interface InvokeModelRequest {
  body?: T.StreamingInputBody;
  contentType?: string;
  accept?: string;
  modelId: string;
  trace?: Trace;
  guardrailIdentifier?: string;
  guardrailVersion?: string;
  performanceConfigLatency?: PerformanceConfigLatency;
  serviceTier?: ServiceTierType;
  requestMetadata?: string | redacted.Redacted<string>;
}
export interface InvokeModelResponse {
  body: T.StreamingOutputBody;
  contentType: string;
  performanceConfigLatency?: PerformanceConfigLatency;
  serviceTier?: ServiceTierType;
}
export type PartBody = Uint8Array | redacted.Redacted<Uint8Array>;
export interface BidirectionalInputPayloadPart {
  bytes?: Uint8Array | redacted.Redacted<Uint8Array>;
}
export type InvokeModelWithBidirectionalStreamInput = { chunk: BidirectionalInputPayloadPart };
export interface InvokeModelWithBidirectionalStreamRequest {
  modelId: string;
  body: stream.Stream<InvokeModelWithBidirectionalStreamInput, Error, never>;
}
export interface BidirectionalOutputPayloadPart {
  bytes?: Uint8Array | redacted.Redacted<Uint8Array>;
}
export type InvokeModelWithBidirectionalStreamOutput =
  | {
      chunk: BidirectionalOutputPayloadPart;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException?: never;
      modelTimeoutException?: never;
      serviceUnavailableException?: never;
    }
  | {
      chunk?: never;
      internalServerException: InternalServerException;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException?: never;
      modelTimeoutException?: never;
      serviceUnavailableException?: never;
    }
  | {
      chunk?: never;
      internalServerException?: never;
      modelStreamErrorException: ModelStreamErrorException;
      validationException?: never;
      throttlingException?: never;
      modelTimeoutException?: never;
      serviceUnavailableException?: never;
    }
  | {
      chunk?: never;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException: ValidationException;
      throttlingException?: never;
      modelTimeoutException?: never;
      serviceUnavailableException?: never;
    }
  | {
      chunk?: never;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException: ThrottlingException;
      modelTimeoutException?: never;
      serviceUnavailableException?: never;
    }
  | {
      chunk?: never;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException?: never;
      modelTimeoutException: ModelTimeoutException;
      serviceUnavailableException?: never;
    }
  | {
      chunk?: never;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException?: never;
      modelTimeoutException?: never;
      serviceUnavailableException: ServiceUnavailableException;
    };
export interface InvokeModelWithBidirectionalStreamResponse {
  body: stream.Stream<InvokeModelWithBidirectionalStreamOutput, Error, never>;
}
export interface InvokeModelWithResponseStreamRequest {
  body?: T.StreamingInputBody;
  contentType?: string;
  accept?: string;
  modelId: string;
  trace?: Trace;
  guardrailIdentifier?: string;
  guardrailVersion?: string;
  performanceConfigLatency?: PerformanceConfigLatency;
  serviceTier?: ServiceTierType;
  requestMetadata?: string | redacted.Redacted<string>;
}
export interface PayloadPart {
  bytes?: Uint8Array | redacted.Redacted<Uint8Array>;
}
export type ResponseStream =
  | {
      chunk: PayloadPart;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException?: never;
      modelTimeoutException?: never;
      serviceUnavailableException?: never;
    }
  | {
      chunk?: never;
      internalServerException: InternalServerException;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException?: never;
      modelTimeoutException?: never;
      serviceUnavailableException?: never;
    }
  | {
      chunk?: never;
      internalServerException?: never;
      modelStreamErrorException: ModelStreamErrorException;
      validationException?: never;
      throttlingException?: never;
      modelTimeoutException?: never;
      serviceUnavailableException?: never;
    }
  | {
      chunk?: never;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException: ValidationException;
      throttlingException?: never;
      modelTimeoutException?: never;
      serviceUnavailableException?: never;
    }
  | {
      chunk?: never;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException: ThrottlingException;
      modelTimeoutException?: never;
      serviceUnavailableException?: never;
    }
  | {
      chunk?: never;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException?: never;
      modelTimeoutException: ModelTimeoutException;
      serviceUnavailableException?: never;
    }
  | {
      chunk?: never;
      internalServerException?: never;
      modelStreamErrorException?: never;
      validationException?: never;
      throttlingException?: never;
      modelTimeoutException?: never;
      serviceUnavailableException: ServiceUnavailableException;
    };
export interface InvokeModelWithResponseStreamResponse {
  body: stream.Stream<ResponseStream, Error, never>;
  contentType: string;
  performanceConfigLatency?: PerformanceConfigLatency;
  serviceTier?: ServiceTierType;
}
export type MaxResults = number;
export type PaginationToken = string;
export type SortAsyncInvocationBy = "SubmissionTime" | (string & {});
export type SortOrder = "Ascending" | "Descending" | (string & {});
export interface ListAsyncInvokesRequest {
  submitTimeAfter?: Date;
  submitTimeBefore?: Date;
  statusEquals?: AsyncInvokeStatus;
  maxResults?: number;
  nextToken?: string;
  sortBy?: SortAsyncInvocationBy;
  sortOrder?: SortOrder;
}
export interface AsyncInvokeSummary {
  invocationArn: string;
  modelArn: string;
  clientRequestToken?: string;
  status?: AsyncInvokeStatus;
  failureMessage?: string | redacted.Redacted<string>;
  submitTime: Date;
  lastModifiedTime?: Date;
  endTime?: Date;
  outputDataConfig: AsyncInvokeOutputDataConfig;
}
export type AsyncInvokeSummaries = AsyncInvokeSummary[];
export interface ListAsyncInvokesResponse {
  nextToken?: string;
  asyncInvokeSummaries?: AsyncInvokeSummary[];
}
export type AsyncInvokeIdentifier = string;
export type ModelInputPayload = unknown;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
export type TagList = Tag[];
export interface StartAsyncInvokeRequest {
  clientRequestToken?: string;
  modelId: string;
  modelInput: any;
  outputDataConfig: AsyncInvokeOutputDataConfig;
  tags?: Tag[];
}
export interface StartAsyncInvokeResponse {
  invocationArn: string;
}
export type ApplyGuardrailError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The action to apply a guardrail.
 *
 * For troubleshooting some of the common errors you might encounter when using the `ApplyGuardrail` API, see Troubleshooting Amazon Bedrock API Error Codes in the Amazon Bedrock User Guide
 */
export const applyGuardrail: API.OperationMethod<
  ApplyGuardrailRequest,
  ApplyGuardrailResponse,
  ApplyGuardrailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6) as any as S.Schema<ApplyGuardrailRequest>,
  output: __S(55) as any as S.Schema<ApplyGuardrailResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ApplyGuardrail",
}));

export type ConverseError =
  | AccessDeniedException
  | InternalServerException
  | ModelErrorException
  | ModelNotReadyException
  | ModelTimeoutException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends messages to the specified Amazon Bedrock model. `Converse` provides a consistent interface that works with all models that support messages. This allows you to write code once and use it with different models. If a model has unique inference parameters, you can also pass those unique parameters to the model.
 *
 * Amazon Bedrock doesn't store any text, images, or documents that you provide as content. The data is only used to generate the response.
 *
 * You can submit a prompt by including it in the `messages` field, specifying the `modelId` of a foundation model or inference profile to run inference on it, and including any other fields that are relevant to your use case.
 *
 * You can also submit a prompt from Prompt management by specifying the ARN of the prompt version and including a map of variables to values in the `promptVariables` field. You can append more messages to the prompt by using the `messages` field. If you use a prompt from Prompt management, you can't include the following fields in the request: `additionalModelRequestFields`, `inferenceConfig`, `system`, or `toolConfig`. Instead, these fields must be defined through Prompt management. For more information, see Use a prompt from Prompt management.
 *
 * For information about the Converse API, see *Use the Converse API* in the *Amazon Bedrock User Guide*. To use a guardrail, see *Use a guardrail with the Converse API* in the *Amazon Bedrock User Guide*. To use a tool with a model, see *Tool use (Function calling)* in the *Amazon Bedrock User Guide*
 *
 * For example code, see *Converse API examples* in the *Amazon Bedrock User Guide*.
 *
 * This operation requires permission for the `bedrock:InvokeModel` action.
 *
 * To deny all inference access to resources that you specify in the modelId field, you need to deny access to the `bedrock:InvokeModel` and `bedrock:InvokeModelWithResponseStream` actions. Doing this also denies access to the resource through the base inference actions (InvokeModel and InvokeModelWithResponseStream). For more information see Deny access for inference on specific models.
 *
 * For troubleshooting some of the common errors you might encounter when using the `Converse` API, see Troubleshooting Amazon Bedrock API Error Codes in the Amazon Bedrock User Guide
 */
export const converse: API.OperationMethod<
  ConverseRequest,
  ConverseResponse,
  ConverseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(116) as any as S.Schema<ConverseRequest>,
  output: __S(127) as any as S.Schema<ConverseResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ModelErrorException,
    ModelNotReadyException,
    ModelTimeoutException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Converse",
}));

export type ConverseStreamError =
  | AccessDeniedException
  | InternalServerException
  | ModelErrorException
  | ModelNotReadyException
  | ModelTimeoutException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends messages to the specified Amazon Bedrock model and returns the response in a stream. `ConverseStream` provides a consistent API that works with all Amazon Bedrock models that support messages. This allows you to write code once and use it with different models. Should a model have unique inference parameters, you can also pass those unique parameters to the model.
 *
 * To find out if a model supports streaming, call GetFoundationModel and check the `responseStreamingSupported` field in the response.
 *
 * The CLI doesn't support streaming operations in Amazon Bedrock, including `ConverseStream`.
 *
 * Amazon Bedrock doesn't store any text, images, or documents that you provide as content. The data is only used to generate the response.
 *
 * You can submit a prompt by including it in the `messages` field, specifying the `modelId` of a foundation model or inference profile to run inference on it, and including any other fields that are relevant to your use case.
 *
 * You can also submit a prompt from Prompt management by specifying the ARN of the prompt version and including a map of variables to values in the `promptVariables` field. You can append more messages to the prompt by using the `messages` field. If you use a prompt from Prompt management, you can't include the following fields in the request: `additionalModelRequestFields`, `inferenceConfig`, `system`, or `toolConfig`. Instead, these fields must be defined through Prompt management. For more information, see Use a prompt from Prompt management.
 *
 * For information about the Converse API, see *Use the Converse API* in the *Amazon Bedrock User Guide*. To use a guardrail, see *Use a guardrail with the Converse API* in the *Amazon Bedrock User Guide*. To use a tool with a model, see *Tool use (Function calling)* in the *Amazon Bedrock User Guide*
 *
 * For example code, see *Conversation streaming example* in the *Amazon Bedrock User Guide*.
 *
 * This operation requires permission for the `bedrock:InvokeModelWithResponseStream` action.
 *
 * To deny all inference access to resources that you specify in the modelId field, you need to deny access to the `bedrock:InvokeModel` and `bedrock:InvokeModelWithResponseStream` actions. Doing this also denies access to the resource through the base inference actions (InvokeModel and InvokeModelWithResponseStream). For more information see Deny access for inference on specific models.
 *
 * For troubleshooting some of the common errors you might encounter when using the `ConverseStream` API, see Troubleshooting Amazon Bedrock API Error Codes in the Amazon Bedrock User Guide
 */
export const converseStream: API.OperationMethod<
  ConverseStreamRequest,
  ConverseStreamResponse,
  ConverseStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(129) as any as S.Schema<ConverseStreamRequest>,
  output: __S(150) as any as S.Schema<ConverseStreamResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ModelErrorException,
    ModelNotReadyException,
    ModelTimeoutException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ConverseStream",
}));

export type CountTokensError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the token count for a given inference request. This operation helps you estimate token usage before sending requests to foundation models by returning the token count that would be used if the same input were sent to the model in an inference request.
 *
 * Token counting is model-specific because different models use different tokenization strategies. The token count returned by this operation will match the token count that would be charged if the same input were sent to the model in an `InvokeModel` or `Converse` request.
 *
 * You can use this operation to:
 *
 * - Estimate costs before sending inference requests.
 *
 * - Optimize prompts to fit within token limits.
 *
 * - Plan for token usage in your applications.
 *
 * This operation accepts the same input formats as `InvokeModel` and `Converse`, allowing you to count tokens for both raw text inputs and structured conversation formats.
 *
 * The following operations are related to `CountTokens`:
 *
 * - InvokeModel - Sends inference requests to foundation models
 *
 * - Converse - Sends conversation-based inference requests to foundation models
 */
export const countTokens: API.OperationMethod<
  CountTokensRequest,
  CountTokensResponse,
  CountTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(154) as any as S.Schema<CountTokensRequest>,
  output: __S(155) as any as S.Schema<CountTokensResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CountTokens",
}));

export type GetAsyncInvokeError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieve information about an asynchronous invocation.
 */
export const getAsyncInvoke: API.OperationMethod<
  GetAsyncInvokeRequest,
  GetAsyncInvokeResponse,
  GetAsyncInvokeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(156) as any as S.Schema<GetAsyncInvokeRequest>,
  output: __S(159) as any as S.Schema<GetAsyncInvokeResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAsyncInvoke",
}));

export type InvokeGuardrailChecksError =
  | AccessDeniedException
  | InternalServerException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Evaluates messages against inline guardrail checks. You specify the check configurations directly in the request, and Amazon Bedrock returns per-check results with severity or confidence scores.
 */
export const invokeGuardrailChecks: API.OperationMethod<
  InvokeGuardrailChecksRequest,
  InvokeGuardrailChecksResponse,
  InvokeGuardrailChecksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(171) as any as S.Schema<InvokeGuardrailChecksRequest>,
  output: __S(181) as any as S.Schema<InvokeGuardrailChecksResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InvokeGuardrailChecks",
}));

export type InvokeModelError =
  | AccessDeniedException
  | InternalServerException
  | ModelErrorException
  | ModelNotReadyException
  | ModelTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Invokes the specified Amazon Bedrock model to run inference using the prompt and inference parameters provided in the request body. You use model inference to generate text, images, and embeddings.
 *
 * For example code, see *Invoke model code examples* in the *Amazon Bedrock User Guide*.
 *
 * This operation requires permission for the `bedrock:InvokeModel` action.
 *
 * To deny all inference access to resources that you specify in the modelId field, you need to deny access to the `bedrock:InvokeModel` and `bedrock:InvokeModelWithResponseStream` actions. Doing this also denies access to the resource through the Converse API actions (Converse and ConverseStream). For more information see Deny access for inference on specific models.
 *
 * For troubleshooting some of the common errors you might encounter when using the `InvokeModel` API, see Troubleshooting Amazon Bedrock API Error Codes in the Amazon Bedrock User Guide
 */
export const invokeModel: API.OperationMethod<
  InvokeModelRequest,
  InvokeModelResponse,
  InvokeModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182) as any as S.Schema<InvokeModelRequest>,
  output: __S(183) as any as S.Schema<InvokeModelResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ModelErrorException,
    ModelNotReadyException,
    ModelTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InvokeModel",
}));

export type InvokeModelWithBidirectionalStreamError =
  | AccessDeniedException
  | InternalServerException
  | ModelErrorException
  | ModelNotReadyException
  | ModelStreamErrorException
  | ModelTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Invoke the specified Amazon Bedrock model to run inference using the bidirectional stream. The response is returned in a stream that remains open for 8 minutes. A single session can contain multiple prompts and responses from the model. The prompts to the model are provided as audio files and the model's responses are spoken back to the user and transcribed.
 *
 * It is possible for users to interrupt the model's response with a new prompt, which will halt the response speech. The model will retain contextual awareness of the conversation while pivoting to respond to the new prompt.
 */
export const invokeModelWithBidirectionalStream: API.OperationMethod<
  InvokeModelWithBidirectionalStreamRequest,
  InvokeModelWithBidirectionalStreamResponse,
  InvokeModelWithBidirectionalStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186) as any as S.Schema<InvokeModelWithBidirectionalStreamRequest>,
  output: __S(188) as any as S.Schema<InvokeModelWithBidirectionalStreamResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ModelErrorException,
    ModelNotReadyException,
    ModelStreamErrorException,
    ModelTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InvokeModelWithBidirectionalStream",
}));

export type InvokeModelWithResponseStreamError =
  | AccessDeniedException
  | InternalServerException
  | ModelErrorException
  | ModelNotReadyException
  | ModelStreamErrorException
  | ModelTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Invoke the specified Amazon Bedrock model to run inference using the prompt and inference parameters provided in the request body. The response is returned in a stream.
 *
 * To see if a model supports streaming, call GetFoundationModel and check the `responseStreamingSupported` field in the response.
 *
 * The CLI doesn't support streaming operations in Amazon Bedrock, including `InvokeModelWithResponseStream`.
 *
 * For example code, see *Invoke model with streaming code example* in the *Amazon Bedrock User Guide*.
 *
 * This operation requires permissions to perform the `bedrock:InvokeModelWithResponseStream` action.
 *
 * To deny all inference access to resources that you specify in the modelId field, you need to deny access to the `bedrock:InvokeModel` and `bedrock:InvokeModelWithResponseStream` actions. Doing this also denies access to the resource through the Converse API actions (Converse and ConverseStream). For more information see Deny access for inference on specific models.
 *
 * For troubleshooting some of the common errors you might encounter when using the `InvokeModelWithResponseStream` API, see Troubleshooting Amazon Bedrock API Error Codes in the Amazon Bedrock User Guide
 */
export const invokeModelWithResponseStream: API.OperationMethod<
  InvokeModelWithResponseStreamRequest,
  InvokeModelWithResponseStreamResponse,
  InvokeModelWithResponseStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(189) as any as S.Schema<InvokeModelWithResponseStreamRequest>,
  output: __S(192) as any as S.Schema<InvokeModelWithResponseStreamResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ModelErrorException,
    ModelNotReadyException,
    ModelStreamErrorException,
    ModelTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InvokeModelWithResponseStream",
}));

export type ListAsyncInvokesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists asynchronous invocations.
 */
export const listAsyncInvokes: API.PaginatedOperationMethod<
  ListAsyncInvokesRequest,
  ListAsyncInvokesResponse,
  ListAsyncInvokesError,
  Credentials | HttpClient.HttpClient,
  AsyncInvokeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(193) as any as S.Schema<ListAsyncInvokesRequest>,
  output: __S(196) as any as S.Schema<ListAsyncInvokesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAsyncInvokes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "asyncInvokeSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type StartAsyncInvokeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts an asynchronous invocation.
 *
 * This operation requires permission for the `bedrock:InvokeModel` action.
 *
 * To deny all inference access to resources that you specify in the modelId field, you need to deny access to the `bedrock:InvokeModel` and `bedrock:InvokeModelWithResponseStream` actions. Doing this also denies access to the resource through the Converse API actions (Converse and ConverseStream). For more information see Deny access for inference on specific models.
 */
export const startAsyncInvoke: API.OperationMethod<
  StartAsyncInvokeRequest,
  StartAsyncInvokeResponse,
  StartAsyncInvokeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(199) as any as S.Schema<StartAsyncInvokeRequest>,
  output: __S(200) as any as S.Schema<StartAsyncInvokeResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartAsyncInvoke",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() => S.Struct({ text: S.String, qualifiers: S.optional(__S(0)) })).annotate(
        { identifier: "GuardrailTextBlock" },
      );
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ bytes: T.Blob })]);
    case 3:
      return S.suspend(() => S.Struct({ format: S.String, source: __S(2) })).annotate({
        identifier: "GuardrailImageBlock",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: __S(1) }),
        /*@__PURE__*/ S.Struct({ image: __S(3) }),
      ]);
    case 5:
      return S.Array(__S(4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          guardrailIdentifier: S.String.pipe(T.HttpLabel("guardrailIdentifier")),
          guardrailVersion: S.String.pipe(T.HttpLabel("guardrailVersion")),
          source: S.String,
          content: __S(5),
          outputScope: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/guardrail/{guardrailIdentifier}/version/{guardrailVersion}/apply",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ApplyGuardrailRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          topicPolicyUnits: S.Number,
          contentPolicyUnits: S.Number,
          wordPolicyUnits: S.Number,
          sensitiveInformationPolicyUnits: S.Number,
          sensitiveInformationPolicyFreeUnits: S.Number,
          contextualGroundingPolicyUnits: S.Number,
          contentPolicyImageUnits: S.optional(S.Number),
          automatedReasoningPolicyUnits: S.optional(S.Number),
          automatedReasoningPolicies: S.optional(S.Number),
        }),
      ).annotate({ identifier: "GuardrailUsage" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ text: S.optional(S.String) })).annotate({
        identifier: "GuardrailOutputContent",
      });
    case 1:
      return S.Array(__S(8));
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: S.String,
          action: S.String,
          detected: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "GuardrailTopic" });
    case 3:
      return S.Array(__S(10));
    case 4:
      return S.suspend(() => S.Struct({ topics: __S(11) })).annotate({
        identifier: "GuardrailTopicPolicyAssessment",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          confidence: S.String,
          filterStrength: S.optional(S.String),
          action: S.String,
          detected: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "GuardrailContentFilter" });
    case 6:
      return S.Array(__S(13));
    case 7:
      return S.suspend(() => S.Struct({ filters: __S(14) })).annotate({
        identifier: "GuardrailContentPolicyAssessment",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          match: S.String,
          action: S.String,
          detected: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "GuardrailCustomWord" });
    case 1:
      return S.Array(__S(16));
    case 2:
      return S.suspend(() =>
        S.Struct({
          match: S.String,
          type: S.String,
          action: S.String,
          detected: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "GuardrailManagedWord" });
    case 3:
      return S.Array(__S(18));
    case 4:
      return S.suspend(() =>
        S.Struct({
          customWords: __S(17),
          managedWordLists: __S(19),
        }),
      ).annotate({
        identifier: "GuardrailWordPolicyAssessment",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          match: S.optional(S.String),
          regex: S.optional(S.String),
          action: S.String,
          detected: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "GuardrailRegexFilter" });
    case 6:
      return S.Array(__S(21));
    case 7:
      return S.suspend(() => S.Struct({ piiEntities: __S(19), regexes: __S(22) })).annotate({
        identifier: "GuardrailSensitiveInformationPolicyAssessment",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          threshold: S.Number,
          score: S.Number,
          action: S.String,
          detected: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "GuardrailContextualGroundingFilter",
      });
    case 1:
      return S.Array(__S(24));
    case 2:
      return S.suspend(() => S.Struct({ filters: S.optional(__S(25)) })).annotate({
        identifier: "GuardrailContextualGroundingPolicyAssessment",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          logic: S.optional(SensitiveString),
          naturalLanguage: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "GuardrailAutomatedReasoningStatement",
      });
    case 4:
      return S.Array(__S(27));
    case 5:
      return S.suspend(() => S.Struct({ text: S.optional(SensitiveString) })).annotate({
        identifier: "GuardrailAutomatedReasoningInputTextReference",
      });
    case 6:
      return S.Array(__S(29));
    case 7:
      return S.suspend(() =>
        S.Struct({
          premises: S.optional(__S(28)),
          claims: S.optional(__S(28)),
          untranslatedPremises: S.optional(__S(30)),
          untranslatedClaims: S.optional(__S(30)),
          confidence: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "GuardrailAutomatedReasoningTranslation",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ statements: S.optional(__S(28)) })).annotate({
        identifier: "GuardrailAutomatedReasoningScenario",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ identifier: S.optional(S.String), policyVersionArn: S.optional(S.String) }),
      ).annotate({
        identifier: "GuardrailAutomatedReasoningRule",
      });
    case 2:
      return S.Array(__S(33));
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          premises: S.optional(__S(28)),
          claims: S.optional(__S(28)),
        }),
      ).annotate({
        identifier: "GuardrailAutomatedReasoningLogicWarning",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          translation: S.optional(__S(31)),
          claimsTrueScenario: S.optional(__S(32)),
          supportingRules: S.optional(__S(34)),
          logicWarning: S.optional(__S(35)),
        }),
      ).annotate({
        identifier: "GuardrailAutomatedReasoningValidFinding",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          translation: S.optional(__S(31)),
          contradictingRules: S.optional(__S(34)),
          logicWarning: S.optional(__S(35)),
        }),
      ).annotate({
        identifier: "GuardrailAutomatedReasoningInvalidFinding",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          translation: S.optional(__S(31)),
          claimsTrueScenario: S.optional(__S(32)),
          claimsFalseScenario: S.optional(__S(32)),
          logicWarning: S.optional(__S(35)),
        }),
      ).annotate({
        identifier: "GuardrailAutomatedReasoningSatisfiableFinding",
      });
    case 7:
      return S.Array(__S(31));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ translations: S.optional(__S(39)) })).annotate({
        identifier: "GuardrailAutomatedReasoningTranslationOption",
      });
    case 1:
      return S.Array(__S(40));
    case 2:
      return S.Array(__S(32));
    case 3:
      return S.suspend(() =>
        S.Struct({
          options: S.optional(__S(41)),
          differenceScenarios: S.optional(__S(42)),
        }),
      ).annotate({
        identifier: "GuardrailAutomatedReasoningTranslationAmbiguousFinding",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "GuardrailAutomatedReasoningTooComplexFinding",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ valid: __S(36) }),
        /*@__PURE__*/ S.Struct({ invalid: __S(37) }),
        /*@__PURE__*/ S.Struct({ satisfiable: __S(38) }),
        /*@__PURE__*/ S.Struct({ impossible: __S(37) }),
        /*@__PURE__*/ S.Struct({
          translationAmbiguous: __S(43),
        }),
        /*@__PURE__*/ S.Struct({ tooComplex: __S(44) }),
        /*@__PURE__*/ S.Struct({
          noTranslations: __S(44),
        }),
      ]);
    case 6:
      return S.Array(__S(45));
    case 7:
      return S.suspend(() => S.Struct({ findings: S.optional(__S(46)) })).annotate({
        identifier: "GuardrailAutomatedReasoningPolicyAssessment",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ guarded: S.optional(S.Number), total: S.optional(S.Number) }),
      ).annotate({
        identifier: "GuardrailTextCharactersCoverage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ guarded: S.optional(S.Number), total: S.optional(S.Number) }),
      ).annotate({ identifier: "GuardrailImageCoverage" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          textCharacters: S.optional(__S(48)),
          images: S.optional(__S(49)),
        }),
      ).annotate({ identifier: "GuardrailCoverage" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          guardrailProcessingLatency: S.optional(S.Number),
          usage: S.optional(__S(7)),
          guardrailCoverage: S.optional(__S(50)),
        }),
      ).annotate({
        identifier: "GuardrailInvocationMetrics",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          guardrailId: S.optional(S.String),
          guardrailVersion: S.optional(S.String),
          guardrailArn: S.optional(S.String),
          guardrailOrigin: S.optional(__S(0)),
          guardrailOwnership: S.optional(S.String),
        }),
      ).annotate({ identifier: "AppliedGuardrailDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          topicPolicy: S.optional(__S(12)),
          contentPolicy: S.optional(__S(15)),
          wordPolicy: S.optional(__S(20)),
          sensitiveInformationPolicy: S.optional(__S(23)),
          contextualGroundingPolicy: S.optional(__S(26)),
          automatedReasoningPolicy: S.optional(__S(47)),
          invocationMetrics: S.optional(__S(51)),
          appliedGuardrailDetails: S.optional(__S(52)),
        }),
      ).annotate({ identifier: "GuardrailAssessment" });
    case 6:
      return S.Array(__S(53));
    case 7:
      return S.suspend(() =>
        S.Struct({
          usage: __S(7),
          action: S.String,
          actionReason: S.optional(S.String),
          outputs: __S(9),
          assessments: __S(54),
          guardrailCoverage: S.optional(__S(50)),
        }),
      ).annotate({ identifier: "ApplyGuardrailResponse" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ uri: S.String, bucketOwner: S.optional(S.String) }),
      ).annotate({ identifier: "S3Location" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ bytes: T.Blob }),
        /*@__PURE__*/ S.Struct({ s3Location: __S(56) }),
      ]);
    case 2:
      return S.suspend(() => S.Struct({ message: S.optional(S.String) })).annotate({
        identifier: "ErrorBlock",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ format: S.String, source: __S(57), error: S.optional(__S(58)) }),
      ).annotate({ identifier: "ImageBlock" });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ text: S.String })]);
    case 5:
      return S.Array(__S(60));
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ bytes: T.Blob }),
        /*@__PURE__*/ S.Struct({ s3Location: __S(56) }),
        /*@__PURE__*/ S.Struct({ text: S.String }),
        /*@__PURE__*/ S.Struct({ content: __S(61) }),
      ]);
    case 7:
      return S.suspend(() => S.Struct({ enabled: S.Boolean })).annotate({
        identifier: "CitationsConfig",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          format: S.optional(S.String),
          name: S.String,
          source: __S(62),
          context: S.optional(S.String),
          citations: S.optional(__S(63)),
        }),
      ).annotate({ identifier: "DocumentBlock" });
    case 1:
      return S.suspend(() => S.Struct({ format: S.String, source: __S(57) })).annotate({
        identifier: "VideoBlock",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ format: S.String, source: __S(57), error: S.optional(__S(58)) }),
      ).annotate({ identifier: "AudioBlock" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          toolUseId: S.String,
          name: S.String,
          input: S.Any,
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "ToolUseBlock" });
    case 4:
      return S.suspend(() => S.Struct({ text: S.String })).annotate({
        identifier: "SearchResultContentBlock",
      });
    case 5:
      return S.Array(__S(68));
    case 6:
      return S.suspend(() =>
        S.Struct({
          source: S.String,
          title: S.String,
          content: __S(69),
          citations: S.optional(__S(63)),
        }),
      ).annotate({ identifier: "SearchResultBlock" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ json: S.Any }),
        /*@__PURE__*/ S.Struct({ text: S.String }),
        /*@__PURE__*/ S.Struct({ image: __S(59) }),
        /*@__PURE__*/ S.Struct({ document: __S(64) }),
        /*@__PURE__*/ S.Struct({ video: __S(65) }),
        /*@__PURE__*/ S.Struct({ searchResult: __S(70) }),
      ]);
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(71));
    case 1:
      return S.suspend(() =>
        S.Struct({
          toolUseId: S.String,
          content: __S(72),
          status: S.optional(S.String),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "ToolResultBlock" });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({ text: S.String, qualifiers: S.optional(__S(74)) }),
      ).annotate({
        identifier: "GuardrailConverseTextBlock",
      });
    case 4:
      return S.suspend(() => S.Struct({ format: S.String, source: __S(2) })).annotate({
        identifier: "GuardrailConverseImageBlock",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: __S(75) }),
        /*@__PURE__*/ S.Struct({ image: __S(76) }),
      ]);
    case 6:
      return S.suspend(() => S.Struct({ type: S.String, ttl: S.optional(S.String) })).annotate({
        identifier: "CachePointBlock",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ text: S.String, signature: S.optional(S.String) }),
      ).annotate({ identifier: "ReasoningTextBlock" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ reasoningText: __S(79) }),
        /*@__PURE__*/ S.Struct({ redactedContent: T.Blob }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({ url: S.optional(S.String), domain: S.optional(S.String) }),
      ).annotate({ identifier: "WebLocation" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          documentIndex: S.optional(S.Number),
          start: S.optional(S.Number),
          end: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DocumentCharLocation" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          searchResultIndex: S.optional(S.Number),
          start: S.optional(S.Number),
          end: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SearchResultLocation" });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ web: __S(81) }),
        /*@__PURE__*/ S.Struct({ documentChar: __S(82) }),
        /*@__PURE__*/ S.Struct({ documentPage: __S(82) }),
        /*@__PURE__*/ S.Struct({ documentChunk: __S(82) }),
        /*@__PURE__*/ S.Struct({ searchResultLocation: __S(83) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          title: S.optional(S.String),
          source: S.optional(S.String),
          sourceContent: S.optional(__S(61)),
          location: S.optional(__S(84)),
        }),
      ).annotate({ identifier: "Citation" });
    case 6:
      return S.Array(__S(85));
    case 7:
      return S.suspend(() =>
        S.Struct({
          content: S.optional(__S(61)),
          citations: S.optional(__S(86)),
        }),
      ).annotate({ identifier: "CitationsContentBlock" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          name: S.optional(S.String),
          serverName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ToolReference" });
    case 1:
      return S.suspend(() => S.Struct({ tool: __S(88) })).annotate({
        identifier: "ToolAdditionBlock",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: S.String }),
        /*@__PURE__*/ S.Struct({ image: __S(59) }),
        /*@__PURE__*/ S.Struct({ document: __S(64) }),
        /*@__PURE__*/ S.Struct({ video: __S(65) }),
        /*@__PURE__*/ S.Struct({ audio: __S(66) }),
        /*@__PURE__*/ S.Struct({ toolUse: __S(67) }),
        /*@__PURE__*/ S.Struct({ toolResult: __S(73) }),
        /*@__PURE__*/ S.Struct({ guardContent: __S(77) }),
        /*@__PURE__*/ S.Struct({ cachePoint: __S(78) }),
        /*@__PURE__*/ S.Struct({ reasoningContent: __S(80) }),
        /*@__PURE__*/ S.Struct({ citationsContent: __S(87) }),
        /*@__PURE__*/ S.Struct({ searchResult: __S(70) }),
        /*@__PURE__*/ S.Struct({ toolAddition: __S(89) }),
        /*@__PURE__*/ S.Struct({ toolRemoval: __S(89) }),
      ]);
    case 3:
      return S.Array(__S(90));
    case 4:
      return S.suspend(() => S.Struct({ role: S.String, content: __S(91) })).annotate({
        identifier: "Message",
      });
    case 5:
      return S.Array(__S(92));
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: S.String }),
        /*@__PURE__*/ S.Struct({ guardContent: __S(77) }),
        /*@__PURE__*/ S.Struct({ cachePoint: __S(78) }),
      ]);
    case 7:
      return S.Array(__S(94));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxTokens: S.optional(S.Number),
          temperature: S.optional(S.Number),
          topP: S.optional(S.Number),
          stopSequences: S.optional(__S(96)),
        }),
      ).annotate({ identifier: "InferenceConfiguration" });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ json: S.Any })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          inputSchema: __S(98),
          strict: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ToolSpecification" });
    case 4:
      return S.suspend(() => S.Struct({ name: S.String })).annotate({
        identifier: "SystemTool",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ toolSpec: __S(99) }),
        /*@__PURE__*/ S.Struct({ systemTool: __S(100) }),
        /*@__PURE__*/ S.Struct({ cachePoint: __S(78) }),
      ]);
    case 6:
      return S.Array(__S(101));
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AutoToolChoice",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.String })).annotate({
        identifier: "SpecificToolChoice",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ auto: __S(103) }),
        /*@__PURE__*/ S.Struct({ any: __S(103) }),
        /*@__PURE__*/ S.Struct({ tool: __S(104) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({ tools: __S(102), toolChoice: S.optional(__S(105)) }),
      ).annotate({ identifier: "ToolConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          guardrailIdentifier: S.optional(S.String),
          guardrailVersion: S.optional(S.String),
          trace: S.optional(S.String),
        }),
      ).annotate({ identifier: "GuardrailConfiguration" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(60).pipe(S.optional));
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() => S.Struct({ latency: S.optional(S.String) })).annotate({
        identifier: "PerformanceConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ type: S.String })).annotate({
        identifier: "ServiceTier",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          schema: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "JsonSchemaDefinition" });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ jsonSchema: __S(112) })]);
    case 2:
      return S.suspend(() => S.Struct({ type: S.String, structure: __S(113) })).annotate({
        identifier: "OutputFormat",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ textFormat: S.optional(__S(114)), effort: S.optional(S.String) }),
      ).annotate({ identifier: "OutputConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String.pipe(T.HttpLabel("modelId")),
          messages: S.optional(__S(93)),
          system: S.optional(__S(95)),
          inferenceConfig: S.optional(__S(97)),
          toolConfig: S.optional(__S(106)),
          guardrailConfig: S.optional(__S(107)),
          additionalModelRequestFields: S.optional(S.Any),
          promptVariables: S.optional(__S(108)),
          additionalModelResponseFieldPaths: S.optional(__S(96)),
          requestMetadata: S.optional(__S(109)),
          performanceConfig: S.optional(__S(110)),
          serviceTier: S.optional(__S(111)),
          outputConfig: S.optional(__S(115)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/model/{modelId}/converse" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ConverseRequest" });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ message: __S(92) })]);
    case 6:
      return S.suspend(() => S.Struct({ ttl: S.String, inputTokens: S.Number })).annotate({
        identifier: "CacheDetail",
      });
    case 7:
      return S.Array(__S(118));
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          inputTokens: S.Number,
          outputTokens: S.Number,
          totalTokens: S.Number,
          cacheReadInputTokens: S.optional(S.Number),
          cacheWriteInputTokens: S.optional(S.Number),
          cacheDetails: S.optional(__S(119)),
        }),
      ).annotate({ identifier: "TokenUsage" });
    case 1:
      return S.suspend(() => S.Struct({ latencyMs: S.Number })).annotate({
        identifier: "ConverseMetrics",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(53).pipe(S.optional));
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(54).pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          modelOutput: S.optional(__S(96)),
          inputAssessment: S.optional(__S(122)),
          outputAssessments: S.optional(__S(123)),
          actionReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "GuardrailTraceAssessment" });
    case 5:
      return S.suspend(() => S.Struct({ invokedModelId: S.optional(S.String) })).annotate({
        identifier: "PromptRouterTrace",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          guardrail: S.optional(__S(124)),
          promptRouter: S.optional(__S(125)),
        }),
      ).annotate({ identifier: "ConverseTrace" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          output: __S(117),
          stopReason: S.String,
          usage: __S(120),
          metrics: __S(121),
          additionalModelResponseFields: S.optional(S.Any),
          trace: S.optional(__S(126)),
          performanceConfig: S.optional(__S(110)),
          serviceTier: S.optional(__S(111)),
        }),
      ).annotate({ identifier: "ConverseResponse" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          guardrailIdentifier: S.optional(S.String),
          guardrailVersion: S.optional(S.String),
          trace: S.optional(S.String),
          streamProcessingMode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GuardrailStreamConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String.pipe(T.HttpLabel("modelId")),
          messages: S.optional(__S(93)),
          system: S.optional(__S(95)),
          inferenceConfig: S.optional(__S(97)),
          toolConfig: S.optional(__S(106)),
          guardrailConfig: S.optional(__S(128)),
          additionalModelRequestFields: S.optional(S.Any),
          promptVariables: S.optional(__S(108)),
          additionalModelResponseFieldPaths: S.optional(__S(96)),
          requestMetadata: S.optional(__S(109)),
          performanceConfig: S.optional(__S(110)),
          serviceTier: S.optional(__S(111)),
          outputConfig: S.optional(__S(115)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/model/{modelId}/converse-stream" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ConverseStreamRequest" });
    case 2:
      return S.suspend(() => S.Struct({ role: S.String })).annotate({
        identifier: "MessageStartEvent",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ toolUseId: S.String, name: S.String, type: S.optional(S.String) }),
      ).annotate({ identifier: "ToolUseBlockStart" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          toolUseId: S.String,
          type: S.optional(S.String),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "ToolResultBlockStart" });
    case 5:
      return S.suspend(() => S.Struct({ format: S.String })).annotate({
        identifier: "ImageBlockStart",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ toolUse: __S(131) }),
        /*@__PURE__*/ S.Struct({ toolResult: __S(132) }),
        /*@__PURE__*/ S.Struct({ image: __S(133) }),
      ]);
    case 7:
      return S.suspend(() => S.Struct({ start: __S(134), contentBlockIndex: S.Number })).annotate({
        identifier: "ContentBlockStartEvent",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ input: S.String })).annotate({
        identifier: "ToolUseBlockDelta",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: S.String }),
        /*@__PURE__*/ S.Struct({ json: S.Any }),
      ]);
    case 2:
      return S.Array(__S(137));
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: S.String }),
        /*@__PURE__*/ S.Struct({ redactedContent: T.Blob }),
        /*@__PURE__*/ S.Struct({ signature: S.String }),
      ]);
    case 4:
      return S.suspend(() => S.Struct({ text: S.optional(S.String) })).annotate({
        identifier: "CitationSourceContentDelta",
      });
    case 5:
      return S.Array(__S(140));
    case 6:
      return S.suspend(() =>
        S.Struct({
          title: S.optional(S.String),
          source: S.optional(S.String),
          sourceContent: S.optional(__S(141)),
          location: S.optional(__S(84)),
        }),
      ).annotate({ identifier: "CitationsDelta" });
    case 7:
      return S.suspend(() =>
        S.Struct({ source: S.optional(__S(57)), error: S.optional(__S(58)) }),
      ).annotate({ identifier: "ImageBlockDelta" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: S.String }),
        /*@__PURE__*/ S.Struct({ toolUse: __S(136) }),
        /*@__PURE__*/ S.Struct({ toolResult: __S(138) }),
        /*@__PURE__*/ S.Struct({ reasoningContent: __S(139) }),
        /*@__PURE__*/ S.Struct({ citation: __S(142) }),
        /*@__PURE__*/ S.Struct({ image: __S(143) }),
      ]);
    case 1:
      return S.suspend(() => S.Struct({ delta: __S(144), contentBlockIndex: S.Number })).annotate({
        identifier: "ContentBlockDeltaEvent",
      });
    case 2:
      return S.suspend(() => S.Struct({ contentBlockIndex: S.Number })).annotate({
        identifier: "ContentBlockStopEvent",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ stopReason: S.String, additionalModelResponseFields: S.optional(S.Any) }),
      ).annotate({ identifier: "MessageStopEvent" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          usage: __S(120),
          metrics: __S(121),
          trace: S.optional(__S(126)),
          performanceConfig: S.optional(__S(110)),
          serviceTier: S.optional(__S(111)),
        }),
      ).annotate({
        identifier: "ConverseStreamMetadataEvent",
      });
    case 5:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ messageStart: __S(130) }),
          /*@__PURE__*/ S.Struct({ contentBlockStart: __S(135) }),
          /*@__PURE__*/ S.Struct({ contentBlockDelta: __S(145) }),
          /*@__PURE__*/ S.Struct({ contentBlockStop: __S(146) }),
          /*@__PURE__*/ S.Struct({ messageStop: __S(147) }),
          /*@__PURE__*/ S.Struct({ metadata: __S(148) }),
          /*@__PURE__*/ S.Struct({
            internalServerException: /*@__PURE__*/ S.suspend(
              () => InternalServerException,
            ).annotate({
              identifier: "InternalServerException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            modelStreamErrorException: /*@__PURE__*/ S.suspend(
              () => ModelStreamErrorException,
            ).annotate({
              identifier: "ModelStreamErrorException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            validationException: /*@__PURE__*/ S.suspend(() => ValidationException).annotate({
              identifier: "ValidationException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            throttlingException: /*@__PURE__*/ S.suspend(() => ThrottlingException).annotate({
              identifier: "ThrottlingException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            serviceUnavailableException: /*@__PURE__*/ S.suspend(
              () => ServiceUnavailableException,
            ).annotate({
              identifier: "ServiceUnavailableException",
            }),
          }),
        ]),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({ stream: S.optional(__S(149)).pipe(T.HttpPayload()) }),
      ).annotate({ identifier: "ConverseStreamResponse" });
    case 7:
      return S.suspend(() => S.Struct({ body: SensitiveBlob })).annotate({
        identifier: "InvokeModelTokensRequest",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          messages: S.optional(__S(93)),
          system: S.optional(__S(95)),
          toolConfig: S.optional(__S(106)),
          additionalModelRequestFields: S.optional(S.Any),
        }),
      ).annotate({ identifier: "ConverseTokensRequest" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ invokeModel: __S(151) }),
        /*@__PURE__*/ S.Struct({ converse: __S(152) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({ modelId: S.String.pipe(T.HttpLabel("modelId")), input: __S(153) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/model/{modelId}/count-tokens" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CountTokensRequest" });
    case 3:
      return S.suspend(() => S.Struct({ inputTokens: S.Number })).annotate({
        identifier: "CountTokensResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ invocationArn: S.String.pipe(T.HttpLabel("invocationArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/async-invoke/{invocationArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAsyncInvokeRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          s3Uri: S.String,
          kmsKeyId: S.optional(S.String),
          bucketOwner: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AsyncInvokeS3OutputDataConfig",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ s3OutputDataConfig: __S(157) })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          invocationArn: S.String,
          modelArn: S.String,
          clientRequestToken: S.optional(S.String),
          status: S.String,
          failureMessage: S.optional(SensitiveString),
          submitTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          outputDataConfig: __S(158),
        }),
      ).annotate({ identifier: "GetAsyncInvokeResponse" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ text: SensitiveString })]);
    case 1:
      return S.Array(__S(160));
    case 2:
      return S.suspend(() => S.Struct({ role: S.String, content: __S(161) })).annotate({
        identifier: "GuardrailChecksMessage",
      });
    case 3:
      return S.Array(__S(162));
    case 4:
      return S.suspend(() => S.Struct({ category: S.String })).annotate({
        identifier: "GuardrailChecksContentFilterCategoryConfig",
      });
    case 5:
      return S.Array(__S(164));
    case 6:
      return S.suspend(() => S.Struct({ categories: __S(165) })).annotate({
        identifier: "GuardrailChecksContentFilterConfig",
      });
    case 7:
      return S.suspend(() => S.Struct({ type: S.String })).annotate({
        identifier: "GuardrailChecksSensitiveInformationEntityConfig",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(167));
    case 1:
      return S.suspend(() => S.Struct({ entities: __S(168) })).annotate({
        identifier: "GuardrailChecksSensitiveInformationConfig",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          contentFilter: S.optional(__S(166)),
          promptAttack: S.optional(__S(166)),
          sensitiveInformation: S.optional(__S(169)),
        }),
      ).annotate({ identifier: "GuardrailChecksConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({ messages: __S(163), checks: __S(170) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/guardrail-checks/invoke" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "InvokeGuardrailChecksRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ category: S.String, severityScore: S.Number })).annotate({
        identifier: "GuardrailChecksContentFilterResultEntry",
      });
    case 5:
      return S.Array(__S(172));
    case 6:
      return S.suspend(() => S.Struct({ results: __S(173) })).annotate({
        identifier: "GuardrailChecksContentFilterResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          confidenceScore: S.Number,
          beginOffset: S.Number,
          endOffset: S.Number,
          messageIndex: S.Number,
          contentIndex: S.Number,
        }),
      ).annotate({
        identifier: "GuardrailChecksSensitiveInformationResultEntry",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(175));
    case 1:
      return S.suspend(() =>
        S.Struct({
          results: __S(176),
          truncated: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "GuardrailChecksSensitiveInformationResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          contentFilter: S.optional(__S(174)),
          promptAttack: S.optional(__S(174)),
          sensitiveInformation: S.optional(__S(177)),
        }),
      ).annotate({ identifier: "GuardrailChecksResults" });
    case 3:
      return S.suspend(() => S.Struct({ textUnits: S.Number })).annotate({
        identifier: "GuardrailChecksContentFilterUsage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          contentFilter: S.optional(__S(179)),
          promptAttack: S.optional(__S(179)),
          sensitiveInformation: S.optional(__S(179)),
        }),
      ).annotate({
        identifier: "GuardrailChecksUsageResults",
      });
    case 5:
      return S.suspend(() => S.Struct({ results: __S(178), usage: __S(180) })).annotate({
        identifier: "InvokeGuardrailChecksResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          body: S.optional(T.StreamingInput).pipe(T.HttpPayload()),
          contentType: S.optional(S.String).pipe(T.HttpHeader("Content-Type")),
          accept: S.optional(S.String).pipe(T.HttpHeader("Accept")),
          modelId: S.String.pipe(T.HttpLabel("modelId")),
          trace: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Bedrock-Trace")),
          guardrailIdentifier: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-GuardrailIdentifier"),
          ),
          guardrailVersion: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-GuardrailVersion"),
          ),
          performanceConfigLatency: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-PerformanceConfig-Latency"),
          ),
          serviceTier: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Bedrock-Service-Tier")),
          requestMetadata: S.optional(SensitiveString).pipe(
            T.HttpHeader("X-Amzn-Bedrock-Request-Metadata"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/model/{modelId}/invoke" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "InvokeModelRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          body: T.StreamingOutput.pipe(T.HttpPayload()),
          contentType: S.String.pipe(T.HttpHeader("Content-Type")),
          performanceConfigLatency: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-PerformanceConfig-Latency"),
          ),
          serviceTier: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Bedrock-Service-Tier")),
        }),
      ).annotate({ identifier: "InvokeModelResponse" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ bytes: S.optional(SensitiveBlob) })).annotate({
        identifier: "BidirectionalInputPayloadPart",
      });
    case 1:
      return T.InputEventStream(
        /*@__PURE__*/ S.Union([/*@__PURE__*/ S.Struct({ chunk: __S(184) })]),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String.pipe(T.HttpLabel("modelId")),
          body: __S(185).pipe(T.HttpPayload()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/model/{modelId}/invoke-with-bidirectional-stream" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "InvokeModelWithBidirectionalStreamRequest",
      });
    case 3:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ chunk: __S(184) }),
          /*@__PURE__*/ S.Struct({
            internalServerException: /*@__PURE__*/ S.suspend(
              () => InternalServerException,
            ).annotate({
              identifier: "InternalServerException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            modelStreamErrorException: /*@__PURE__*/ S.suspend(
              () => ModelStreamErrorException,
            ).annotate({
              identifier: "ModelStreamErrorException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            validationException: /*@__PURE__*/ S.suspend(() => ValidationException).annotate({
              identifier: "ValidationException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            throttlingException: /*@__PURE__*/ S.suspend(() => ThrottlingException).annotate({
              identifier: "ThrottlingException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            modelTimeoutException: /*@__PURE__*/ S.suspend(() => ModelTimeoutException).annotate({
              identifier: "ModelTimeoutException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            serviceUnavailableException: /*@__PURE__*/ S.suspend(
              () => ServiceUnavailableException,
            ).annotate({
              identifier: "ServiceUnavailableException",
            }),
          }),
        ]),
      );
    case 4:
      return S.suspend(() => S.Struct({ body: __S(187).pipe(T.HttpPayload()) })).annotate({
        identifier: "InvokeModelWithBidirectionalStreamResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          body: S.optional(T.StreamingInput).pipe(T.HttpPayload()),
          contentType: S.optional(S.String).pipe(T.HttpHeader("Content-Type")),
          accept: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Bedrock-Accept")),
          modelId: S.String.pipe(T.HttpLabel("modelId")),
          trace: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Bedrock-Trace")),
          guardrailIdentifier: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-GuardrailIdentifier"),
          ),
          guardrailVersion: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-GuardrailVersion"),
          ),
          performanceConfigLatency: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-PerformanceConfig-Latency"),
          ),
          serviceTier: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Bedrock-Service-Tier")),
          requestMetadata: S.optional(SensitiveString).pipe(
            T.HttpHeader("X-Amzn-Bedrock-Request-Metadata"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/model/{modelId}/invoke-with-response-stream" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "InvokeModelWithResponseStreamRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ bytes: S.optional(SensitiveBlob) })).annotate({
        identifier: "PayloadPart",
      });
    case 7:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ chunk: __S(190) }),
          /*@__PURE__*/ S.Struct({
            internalServerException: /*@__PURE__*/ S.suspend(
              () => InternalServerException,
            ).annotate({
              identifier: "InternalServerException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            modelStreamErrorException: /*@__PURE__*/ S.suspend(
              () => ModelStreamErrorException,
            ).annotate({
              identifier: "ModelStreamErrorException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            validationException: /*@__PURE__*/ S.suspend(() => ValidationException).annotate({
              identifier: "ValidationException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            throttlingException: /*@__PURE__*/ S.suspend(() => ThrottlingException).annotate({
              identifier: "ThrottlingException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            modelTimeoutException: /*@__PURE__*/ S.suspend(() => ModelTimeoutException).annotate({
              identifier: "ModelTimeoutException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            serviceUnavailableException: /*@__PURE__*/ S.suspend(
              () => ServiceUnavailableException,
            ).annotate({
              identifier: "ServiceUnavailableException",
            }),
          }),
        ]),
      );
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          body: __S(191).pipe(T.HttpPayload()),
          contentType: S.String.pipe(T.HttpHeader("X-Amzn-Bedrock-Content-Type")),
          performanceConfigLatency: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-PerformanceConfig-Latency"),
          ),
          serviceTier: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Bedrock-Service-Tier")),
        }),
      ).annotate({
        identifier: "InvokeModelWithResponseStreamResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          submitTimeAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("submitTimeAfter"),
          ),
          submitTimeBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("submitTimeBefore"),
          ),
          statusEquals: S.optional(S.String).pipe(T.HttpQuery("statusEquals")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          sortBy: S.optional(S.String).pipe(T.HttpQuery("sortBy")),
          sortOrder: S.optional(S.String).pipe(T.HttpQuery("sortOrder")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/async-invoke" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAsyncInvokesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          invocationArn: S.String,
          modelArn: S.String,
          clientRequestToken: S.optional(S.String),
          status: S.optional(S.String),
          failureMessage: S.optional(SensitiveString),
          submitTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          outputDataConfig: __S(158),
        }),
      ).annotate({ identifier: "AsyncInvokeSummary" });
    case 3:
      return S.Array(__S(194));
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          asyncInvokeSummaries: S.optional(__S(195)),
        }),
      ).annotate({ identifier: "ListAsyncInvokesResponse" });
    case 5:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "Tag",
      });
    case 6:
      return S.Array(__S(197));
    case 7:
      return S.suspend(() =>
        S.Struct({
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          modelId: S.String,
          modelInput: S.Any,
          outputDataConfig: __S(158),
          tags: S.optional(__S(198)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/async-invoke" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartAsyncInvokeRequest" });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ invocationArn: S.String })).annotate({
        identifier: "StartAsyncInvokeResponse",
      });
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
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
    case 23:
      return __c23(i & 7);
    case 24:
      return __c24(i & 7);
    case 25:
      return __c25(i & 7);
  }
}
