import * as API from "@distilled.cloud/core/api";
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
const GuardrailContentSource = S.String;

export type GuardrailContentQualifier =
  | "grounding_source"
  | "query"
  | "guard_content"
  | (string & {});
const GuardrailContentQualifier = S.String;

export type GuardrailContentQualifierList = GuardrailContentQualifier[];
const GuardrailContentQualifierList = /*@__PURE__*/ S.Array(GuardrailContentQualifier);
export interface GuardrailTextBlock {
  text: string;
  qualifiers?: GuardrailContentQualifier[];
}
const GuardrailTextBlock = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ text: S.String, qualifiers: S.optional(GuardrailContentQualifierList) }),
).annotate({ identifier: "GuardrailTextBlock" }) as any as S.Schema<GuardrailTextBlock>;
export type GuardrailImageFormat = "png" | "jpeg" | (string & {});
const GuardrailImageFormat = S.String;

export type GuardrailImageSource = { bytes: Uint8Array };
const GuardrailImageSource = /*@__PURE__*/ S.Union([/*@__PURE__*/ S.Struct({ bytes: T.Blob })]);
export interface GuardrailImageBlock {
  format: GuardrailImageFormat;
  source: GuardrailImageSource;
}
const GuardrailImageBlock = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ format: GuardrailImageFormat, source: GuardrailImageSource }),
).annotate({ identifier: "GuardrailImageBlock" }) as any as S.Schema<GuardrailImageBlock>;
export type GuardrailContentBlock =
  | { text: GuardrailTextBlock; image?: never }
  | { text?: never; image: GuardrailImageBlock };
const GuardrailContentBlock = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ text: GuardrailTextBlock }),
  /*@__PURE__*/ S.Struct({ image: GuardrailImageBlock }),
]);
export type GuardrailContentBlockList = GuardrailContentBlock[];
const GuardrailContentBlockList = /*@__PURE__*/ S.Array(GuardrailContentBlock);
export type GuardrailOutputScope = "INTERVENTIONS" | "FULL" | (string & {});
const GuardrailOutputScope = S.String;

export interface ApplyGuardrailRequest {
  guardrailIdentifier: string;
  guardrailVersion: string;
  source: GuardrailContentSource;
  content: GuardrailContentBlock[];
  outputScope?: GuardrailOutputScope;
}
const ApplyGuardrailRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    guardrailIdentifier: S.String.pipe(T.HttpLabel("guardrailIdentifier")),
    guardrailVersion: S.String.pipe(T.HttpLabel("guardrailVersion")),
    source: GuardrailContentSource,
    content: GuardrailContentBlockList,
    outputScope: S.optional(GuardrailOutputScope),
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
).annotate({ identifier: "ApplyGuardrailRequest" }) as any as S.Schema<ApplyGuardrailRequest>;
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
const GuardrailUsage = /*@__PURE__*/ S.suspend(() =>
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
).annotate({ identifier: "GuardrailUsage" }) as any as S.Schema<GuardrailUsage>;
export type GuardrailAction = "NONE" | "GUARDRAIL_INTERVENED" | (string & {});
const GuardrailAction = S.String;

export type GuardrailOutputText = string;
export interface GuardrailOutputContent {
  text?: string;
}
const GuardrailOutputContent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ text: S.optional(S.String) }),
).annotate({ identifier: "GuardrailOutputContent" }) as any as S.Schema<GuardrailOutputContent>;
export type GuardrailOutputContentList = GuardrailOutputContent[];
const GuardrailOutputContentList = /*@__PURE__*/ S.Array(GuardrailOutputContent);
export type GuardrailTopicType = "DENY" | (string & {});
const GuardrailTopicType = S.String;

export type GuardrailTopicPolicyAction = "BLOCKED" | "NONE" | (string & {});
const GuardrailTopicPolicyAction = S.String;

export interface GuardrailTopic {
  name: string;
  type: GuardrailTopicType;
  action: GuardrailTopicPolicyAction;
  detected?: boolean;
}
const GuardrailTopic = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    type: GuardrailTopicType,
    action: GuardrailTopicPolicyAction,
    detected: S.optional(S.Boolean),
  }),
).annotate({ identifier: "GuardrailTopic" }) as any as S.Schema<GuardrailTopic>;
export type GuardrailTopicList = GuardrailTopic[];
const GuardrailTopicList = /*@__PURE__*/ S.Array(GuardrailTopic);
export interface GuardrailTopicPolicyAssessment {
  topics: GuardrailTopic[];
}
const GuardrailTopicPolicyAssessment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ topics: GuardrailTopicList }),
).annotate({
  identifier: "GuardrailTopicPolicyAssessment",
}) as any as S.Schema<GuardrailTopicPolicyAssessment>;
export type GuardrailContentFilterType =
  | "INSULTS"
  | "HATE"
  | "SEXUAL"
  | "VIOLENCE"
  | "MISCONDUCT"
  | "PROMPT_ATTACK"
  | (string & {});
const GuardrailContentFilterType = S.String;

export type GuardrailContentFilterConfidence = "NONE" | "LOW" | "MEDIUM" | "HIGH" | (string & {});
const GuardrailContentFilterConfidence = S.String;

export type GuardrailContentFilterStrength = "NONE" | "LOW" | "MEDIUM" | "HIGH" | (string & {});
const GuardrailContentFilterStrength = S.String;

export type GuardrailContentPolicyAction = "BLOCKED" | "NONE" | (string & {});
const GuardrailContentPolicyAction = S.String;

export interface GuardrailContentFilter {
  type: GuardrailContentFilterType;
  confidence: GuardrailContentFilterConfidence;
  filterStrength?: GuardrailContentFilterStrength;
  action: GuardrailContentPolicyAction;
  detected?: boolean;
}
const GuardrailContentFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: GuardrailContentFilterType,
    confidence: GuardrailContentFilterConfidence,
    filterStrength: S.optional(GuardrailContentFilterStrength),
    action: GuardrailContentPolicyAction,
    detected: S.optional(S.Boolean),
  }),
).annotate({ identifier: "GuardrailContentFilter" }) as any as S.Schema<GuardrailContentFilter>;
export type GuardrailContentFilterList = GuardrailContentFilter[];
const GuardrailContentFilterList = /*@__PURE__*/ S.Array(GuardrailContentFilter);
export interface GuardrailContentPolicyAssessment {
  filters: GuardrailContentFilter[];
}
const GuardrailContentPolicyAssessment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ filters: GuardrailContentFilterList }),
).annotate({
  identifier: "GuardrailContentPolicyAssessment",
}) as any as S.Schema<GuardrailContentPolicyAssessment>;
export type GuardrailWordPolicyAction = "BLOCKED" | "NONE" | (string & {});
const GuardrailWordPolicyAction = S.String;

export interface GuardrailCustomWord {
  match: string;
  action: GuardrailWordPolicyAction;
  detected?: boolean;
}
const GuardrailCustomWord = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ match: S.String, action: GuardrailWordPolicyAction, detected: S.optional(S.Boolean) }),
).annotate({ identifier: "GuardrailCustomWord" }) as any as S.Schema<GuardrailCustomWord>;
export type GuardrailCustomWordList = GuardrailCustomWord[];
const GuardrailCustomWordList = /*@__PURE__*/ S.Array(GuardrailCustomWord);
export type GuardrailManagedWordType = "PROFANITY" | (string & {});
const GuardrailManagedWordType = S.String;

export interface GuardrailManagedWord {
  match: string;
  type: GuardrailManagedWordType;
  action: GuardrailWordPolicyAction;
  detected?: boolean;
}
const GuardrailManagedWord = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    match: S.String,
    type: GuardrailManagedWordType,
    action: GuardrailWordPolicyAction,
    detected: S.optional(S.Boolean),
  }),
).annotate({ identifier: "GuardrailManagedWord" }) as any as S.Schema<GuardrailManagedWord>;
export type GuardrailManagedWordList = GuardrailManagedWord[];
const GuardrailManagedWordList = /*@__PURE__*/ S.Array(GuardrailManagedWord);
export interface GuardrailWordPolicyAssessment {
  customWords: GuardrailCustomWord[];
  managedWordLists: GuardrailManagedWord[];
}
const GuardrailWordPolicyAssessment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ customWords: GuardrailCustomWordList, managedWordLists: GuardrailManagedWordList }),
).annotate({
  identifier: "GuardrailWordPolicyAssessment",
}) as any as S.Schema<GuardrailWordPolicyAssessment>;
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
const GuardrailSensitiveInformationPolicyAction = S.String;

export interface GuardrailPiiEntityFilter {
  match: string;
  type: GuardrailPiiEntityType;
  action: GuardrailSensitiveInformationPolicyAction;
  detected?: boolean;
}
export type GuardrailPiiEntityFilterList = GuardrailPiiEntityFilter[];
const GuardrailPiiEntityFilterList =
  GuardrailManagedWordList as any as S.Schema<GuardrailPiiEntityFilterList>;
export interface GuardrailRegexFilter {
  name?: string;
  match?: string;
  regex?: string;
  action: GuardrailSensitiveInformationPolicyAction;
  detected?: boolean;
}
const GuardrailRegexFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.optional(S.String),
    match: S.optional(S.String),
    regex: S.optional(S.String),
    action: GuardrailSensitiveInformationPolicyAction,
    detected: S.optional(S.Boolean),
  }),
).annotate({ identifier: "GuardrailRegexFilter" }) as any as S.Schema<GuardrailRegexFilter>;
export type GuardrailRegexFilterList = GuardrailRegexFilter[];
const GuardrailRegexFilterList = /*@__PURE__*/ S.Array(GuardrailRegexFilter);
export interface GuardrailSensitiveInformationPolicyAssessment {
  piiEntities: GuardrailPiiEntityFilter[];
  regexes: GuardrailRegexFilter[];
}
const GuardrailSensitiveInformationPolicyAssessment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ piiEntities: GuardrailPiiEntityFilterList, regexes: GuardrailRegexFilterList }),
).annotate({
  identifier: "GuardrailSensitiveInformationPolicyAssessment",
}) as any as S.Schema<GuardrailSensitiveInformationPolicyAssessment>;
export type GuardrailContextualGroundingFilterType = "GROUNDING" | "RELEVANCE" | (string & {});
const GuardrailContextualGroundingFilterType = S.String;

export type GuardrailContextualGroundingPolicyAction = "BLOCKED" | "NONE" | (string & {});
const GuardrailContextualGroundingPolicyAction = S.String;

export interface GuardrailContextualGroundingFilter {
  type: GuardrailContextualGroundingFilterType;
  threshold: number;
  score: number;
  action: GuardrailContextualGroundingPolicyAction;
  detected?: boolean;
}
const GuardrailContextualGroundingFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: GuardrailContextualGroundingFilterType,
    threshold: S.Number,
    score: S.Number,
    action: GuardrailContextualGroundingPolicyAction,
    detected: S.optional(S.Boolean),
  }),
).annotate({
  identifier: "GuardrailContextualGroundingFilter",
}) as any as S.Schema<GuardrailContextualGroundingFilter>;
export type GuardrailContextualGroundingFilters = GuardrailContextualGroundingFilter[];
const GuardrailContextualGroundingFilters = /*@__PURE__*/ S.Array(
  GuardrailContextualGroundingFilter,
);
export interface GuardrailContextualGroundingPolicyAssessment {
  filters?: GuardrailContextualGroundingFilter[];
}
const GuardrailContextualGroundingPolicyAssessment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ filters: S.optional(GuardrailContextualGroundingFilters) }),
).annotate({
  identifier: "GuardrailContextualGroundingPolicyAssessment",
}) as any as S.Schema<GuardrailContextualGroundingPolicyAssessment>;
export type GuardrailAutomatedReasoningStatementLogicContent = string | redacted.Redacted<string>;
export type GuardrailAutomatedReasoningStatementNaturalLanguageContent =
  | string
  | redacted.Redacted<string>;
export interface GuardrailAutomatedReasoningStatement {
  logic?: string | redacted.Redacted<string>;
  naturalLanguage?: string | redacted.Redacted<string>;
}
const GuardrailAutomatedReasoningStatement = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ logic: S.optional(SensitiveString), naturalLanguage: S.optional(SensitiveString) }),
).annotate({
  identifier: "GuardrailAutomatedReasoningStatement",
}) as any as S.Schema<GuardrailAutomatedReasoningStatement>;
export type GuardrailAutomatedReasoningStatementList = GuardrailAutomatedReasoningStatement[];
const GuardrailAutomatedReasoningStatementList = /*@__PURE__*/ S.Array(
  GuardrailAutomatedReasoningStatement,
);
export interface GuardrailAutomatedReasoningInputTextReference {
  text?: string | redacted.Redacted<string>;
}
const GuardrailAutomatedReasoningInputTextReference = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ text: S.optional(SensitiveString) }),
).annotate({
  identifier: "GuardrailAutomatedReasoningInputTextReference",
}) as any as S.Schema<GuardrailAutomatedReasoningInputTextReference>;
export type GuardrailAutomatedReasoningInputTextReferenceList =
  GuardrailAutomatedReasoningInputTextReference[];
const GuardrailAutomatedReasoningInputTextReferenceList = /*@__PURE__*/ S.Array(
  GuardrailAutomatedReasoningInputTextReference,
);
export type GuardrailAutomatedReasoningTranslationConfidence = number;
export interface GuardrailAutomatedReasoningTranslation {
  premises?: GuardrailAutomatedReasoningStatement[];
  claims?: GuardrailAutomatedReasoningStatement[];
  untranslatedPremises?: GuardrailAutomatedReasoningInputTextReference[];
  untranslatedClaims?: GuardrailAutomatedReasoningInputTextReference[];
  confidence?: number;
}
const GuardrailAutomatedReasoningTranslation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    premises: S.optional(GuardrailAutomatedReasoningStatementList),
    claims: S.optional(GuardrailAutomatedReasoningStatementList),
    untranslatedPremises: S.optional(GuardrailAutomatedReasoningInputTextReferenceList),
    untranslatedClaims: S.optional(GuardrailAutomatedReasoningInputTextReferenceList),
    confidence: S.optional(S.Number),
  }),
).annotate({
  identifier: "GuardrailAutomatedReasoningTranslation",
}) as any as S.Schema<GuardrailAutomatedReasoningTranslation>;
export interface GuardrailAutomatedReasoningScenario {
  statements?: GuardrailAutomatedReasoningStatement[];
}
const GuardrailAutomatedReasoningScenario = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ statements: S.optional(GuardrailAutomatedReasoningStatementList) }),
).annotate({
  identifier: "GuardrailAutomatedReasoningScenario",
}) as any as S.Schema<GuardrailAutomatedReasoningScenario>;
export type AutomatedReasoningRuleIdentifier = string;
export type GuardrailAutomatedReasoningPolicyVersionArn = string;
export interface GuardrailAutomatedReasoningRule {
  identifier?: string;
  policyVersionArn?: string;
}
const GuardrailAutomatedReasoningRule = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ identifier: S.optional(S.String), policyVersionArn: S.optional(S.String) }),
).annotate({
  identifier: "GuardrailAutomatedReasoningRule",
}) as any as S.Schema<GuardrailAutomatedReasoningRule>;
export type GuardrailAutomatedReasoningRuleList = GuardrailAutomatedReasoningRule[];
const GuardrailAutomatedReasoningRuleList = /*@__PURE__*/ S.Array(GuardrailAutomatedReasoningRule);
export type GuardrailAutomatedReasoningLogicWarningType =
  | "ALWAYS_FALSE"
  | "ALWAYS_TRUE"
  | (string & {});
const GuardrailAutomatedReasoningLogicWarningType = S.String;

export interface GuardrailAutomatedReasoningLogicWarning {
  type?: GuardrailAutomatedReasoningLogicWarningType;
  premises?: GuardrailAutomatedReasoningStatement[];
  claims?: GuardrailAutomatedReasoningStatement[];
}
const GuardrailAutomatedReasoningLogicWarning = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.optional(GuardrailAutomatedReasoningLogicWarningType),
    premises: S.optional(GuardrailAutomatedReasoningStatementList),
    claims: S.optional(GuardrailAutomatedReasoningStatementList),
  }),
).annotate({
  identifier: "GuardrailAutomatedReasoningLogicWarning",
}) as any as S.Schema<GuardrailAutomatedReasoningLogicWarning>;
export interface GuardrailAutomatedReasoningValidFinding {
  translation?: GuardrailAutomatedReasoningTranslation;
  claimsTrueScenario?: GuardrailAutomatedReasoningScenario;
  supportingRules?: GuardrailAutomatedReasoningRule[];
  logicWarning?: GuardrailAutomatedReasoningLogicWarning;
}
const GuardrailAutomatedReasoningValidFinding = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    translation: S.optional(GuardrailAutomatedReasoningTranslation),
    claimsTrueScenario: S.optional(GuardrailAutomatedReasoningScenario),
    supportingRules: S.optional(GuardrailAutomatedReasoningRuleList),
    logicWarning: S.optional(GuardrailAutomatedReasoningLogicWarning),
  }),
).annotate({
  identifier: "GuardrailAutomatedReasoningValidFinding",
}) as any as S.Schema<GuardrailAutomatedReasoningValidFinding>;
export interface GuardrailAutomatedReasoningInvalidFinding {
  translation?: GuardrailAutomatedReasoningTranslation;
  contradictingRules?: GuardrailAutomatedReasoningRule[];
  logicWarning?: GuardrailAutomatedReasoningLogicWarning;
}
const GuardrailAutomatedReasoningInvalidFinding = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    translation: S.optional(GuardrailAutomatedReasoningTranslation),
    contradictingRules: S.optional(GuardrailAutomatedReasoningRuleList),
    logicWarning: S.optional(GuardrailAutomatedReasoningLogicWarning),
  }),
).annotate({
  identifier: "GuardrailAutomatedReasoningInvalidFinding",
}) as any as S.Schema<GuardrailAutomatedReasoningInvalidFinding>;
export interface GuardrailAutomatedReasoningSatisfiableFinding {
  translation?: GuardrailAutomatedReasoningTranslation;
  claimsTrueScenario?: GuardrailAutomatedReasoningScenario;
  claimsFalseScenario?: GuardrailAutomatedReasoningScenario;
  logicWarning?: GuardrailAutomatedReasoningLogicWarning;
}
const GuardrailAutomatedReasoningSatisfiableFinding = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    translation: S.optional(GuardrailAutomatedReasoningTranslation),
    claimsTrueScenario: S.optional(GuardrailAutomatedReasoningScenario),
    claimsFalseScenario: S.optional(GuardrailAutomatedReasoningScenario),
    logicWarning: S.optional(GuardrailAutomatedReasoningLogicWarning),
  }),
).annotate({
  identifier: "GuardrailAutomatedReasoningSatisfiableFinding",
}) as any as S.Schema<GuardrailAutomatedReasoningSatisfiableFinding>;
export interface GuardrailAutomatedReasoningImpossibleFinding {
  translation?: GuardrailAutomatedReasoningTranslation;
  contradictingRules?: GuardrailAutomatedReasoningRule[];
  logicWarning?: GuardrailAutomatedReasoningLogicWarning;
}
const GuardrailAutomatedReasoningImpossibleFinding =
  GuardrailAutomatedReasoningInvalidFinding as any as S.Schema<GuardrailAutomatedReasoningImpossibleFinding>;
export type GuardrailAutomatedReasoningTranslationList = GuardrailAutomatedReasoningTranslation[];
const GuardrailAutomatedReasoningTranslationList = /*@__PURE__*/ S.Array(
  GuardrailAutomatedReasoningTranslation,
);
export interface GuardrailAutomatedReasoningTranslationOption {
  translations?: GuardrailAutomatedReasoningTranslation[];
}
const GuardrailAutomatedReasoningTranslationOption = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ translations: S.optional(GuardrailAutomatedReasoningTranslationList) }),
).annotate({
  identifier: "GuardrailAutomatedReasoningTranslationOption",
}) as any as S.Schema<GuardrailAutomatedReasoningTranslationOption>;
export type GuardrailAutomatedReasoningTranslationOptionList =
  GuardrailAutomatedReasoningTranslationOption[];
const GuardrailAutomatedReasoningTranslationOptionList = /*@__PURE__*/ S.Array(
  GuardrailAutomatedReasoningTranslationOption,
);
export type GuardrailAutomatedReasoningDifferenceScenarioList =
  GuardrailAutomatedReasoningScenario[];
const GuardrailAutomatedReasoningDifferenceScenarioList = /*@__PURE__*/ S.Array(
  GuardrailAutomatedReasoningScenario,
);
export interface GuardrailAutomatedReasoningTranslationAmbiguousFinding {
  options?: GuardrailAutomatedReasoningTranslationOption[];
  differenceScenarios?: GuardrailAutomatedReasoningScenario[];
}
const GuardrailAutomatedReasoningTranslationAmbiguousFinding = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    options: S.optional(GuardrailAutomatedReasoningTranslationOptionList),
    differenceScenarios: S.optional(GuardrailAutomatedReasoningDifferenceScenarioList),
  }),
).annotate({
  identifier: "GuardrailAutomatedReasoningTranslationAmbiguousFinding",
}) as any as S.Schema<GuardrailAutomatedReasoningTranslationAmbiguousFinding>;
export interface GuardrailAutomatedReasoningTooComplexFinding {}
const GuardrailAutomatedReasoningTooComplexFinding = /*@__PURE__*/ S.suspend(() =>
  S.Struct({}),
).annotate({
  identifier: "GuardrailAutomatedReasoningTooComplexFinding",
}) as any as S.Schema<GuardrailAutomatedReasoningTooComplexFinding>;
export interface GuardrailAutomatedReasoningNoTranslationsFinding {}
const GuardrailAutomatedReasoningNoTranslationsFinding =
  GuardrailAutomatedReasoningTooComplexFinding as any as S.Schema<GuardrailAutomatedReasoningNoTranslationsFinding>;
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
const GuardrailAutomatedReasoningFinding = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ valid: GuardrailAutomatedReasoningValidFinding }),
  /*@__PURE__*/ S.Struct({ invalid: GuardrailAutomatedReasoningInvalidFinding }),
  /*@__PURE__*/ S.Struct({ satisfiable: GuardrailAutomatedReasoningSatisfiableFinding }),
  /*@__PURE__*/ S.Struct({ impossible: GuardrailAutomatedReasoningImpossibleFinding }),
  /*@__PURE__*/ S.Struct({
    translationAmbiguous: GuardrailAutomatedReasoningTranslationAmbiguousFinding,
  }),
  /*@__PURE__*/ S.Struct({ tooComplex: GuardrailAutomatedReasoningTooComplexFinding }),
  /*@__PURE__*/ S.Struct({ noTranslations: GuardrailAutomatedReasoningNoTranslationsFinding }),
]);
export type GuardrailAutomatedReasoningFindingList = GuardrailAutomatedReasoningFinding[];
const GuardrailAutomatedReasoningFindingList = /*@__PURE__*/ S.Array(
  GuardrailAutomatedReasoningFinding,
);
export interface GuardrailAutomatedReasoningPolicyAssessment {
  findings?: GuardrailAutomatedReasoningFinding[];
}
const GuardrailAutomatedReasoningPolicyAssessment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ findings: S.optional(GuardrailAutomatedReasoningFindingList) }),
).annotate({
  identifier: "GuardrailAutomatedReasoningPolicyAssessment",
}) as any as S.Schema<GuardrailAutomatedReasoningPolicyAssessment>;
export type GuardrailProcessingLatency = number;
export type TextCharactersGuarded = number;
export type TextCharactersTotal = number;
export interface GuardrailTextCharactersCoverage {
  guarded?: number;
  total?: number;
}
const GuardrailTextCharactersCoverage = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ guarded: S.optional(S.Number), total: S.optional(S.Number) }),
).annotate({
  identifier: "GuardrailTextCharactersCoverage",
}) as any as S.Schema<GuardrailTextCharactersCoverage>;
export type ImagesGuarded = number;
export type ImagesTotal = number;
export interface GuardrailImageCoverage {
  guarded?: number;
  total?: number;
}
const GuardrailImageCoverage = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ guarded: S.optional(S.Number), total: S.optional(S.Number) }),
).annotate({ identifier: "GuardrailImageCoverage" }) as any as S.Schema<GuardrailImageCoverage>;
export interface GuardrailCoverage {
  textCharacters?: GuardrailTextCharactersCoverage;
  images?: GuardrailImageCoverage;
}
const GuardrailCoverage = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    textCharacters: S.optional(GuardrailTextCharactersCoverage),
    images: S.optional(GuardrailImageCoverage),
  }),
).annotate({ identifier: "GuardrailCoverage" }) as any as S.Schema<GuardrailCoverage>;
export interface GuardrailInvocationMetrics {
  guardrailProcessingLatency?: number;
  usage?: GuardrailUsage;
  guardrailCoverage?: GuardrailCoverage;
}
const GuardrailInvocationMetrics = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    guardrailProcessingLatency: S.optional(S.Number),
    usage: S.optional(GuardrailUsage),
    guardrailCoverage: S.optional(GuardrailCoverage),
  }),
).annotate({
  identifier: "GuardrailInvocationMetrics",
}) as any as S.Schema<GuardrailInvocationMetrics>;
export type GuardrailId = string;
export type GuardrailArn = string;
export type GuardrailOrigin =
  | "REQUEST"
  | "ACCOUNT_ENFORCED"
  | "ORGANIZATION_ENFORCED"
  | (string & {});
export type GuardrailOriginList = GuardrailOrigin[];
const GuardrailOriginList = GuardrailContentQualifierList as any as S.Schema<GuardrailOriginList>;
export type GuardrailOwnership = "SELF" | "CROSS_ACCOUNT" | (string & {});
const GuardrailOwnership = S.String;

export interface AppliedGuardrailDetails {
  guardrailId?: string;
  guardrailVersion?: string;
  guardrailArn?: string;
  guardrailOrigin?: GuardrailOrigin[];
  guardrailOwnership?: GuardrailOwnership;
}
const AppliedGuardrailDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    guardrailId: S.optional(S.String),
    guardrailVersion: S.optional(S.String),
    guardrailArn: S.optional(S.String),
    guardrailOrigin: S.optional(GuardrailOriginList),
    guardrailOwnership: S.optional(GuardrailOwnership),
  }),
).annotate({ identifier: "AppliedGuardrailDetails" }) as any as S.Schema<AppliedGuardrailDetails>;
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
const GuardrailAssessment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    topicPolicy: S.optional(GuardrailTopicPolicyAssessment),
    contentPolicy: S.optional(GuardrailContentPolicyAssessment),
    wordPolicy: S.optional(GuardrailWordPolicyAssessment),
    sensitiveInformationPolicy: S.optional(GuardrailSensitiveInformationPolicyAssessment),
    contextualGroundingPolicy: S.optional(GuardrailContextualGroundingPolicyAssessment),
    automatedReasoningPolicy: S.optional(GuardrailAutomatedReasoningPolicyAssessment),
    invocationMetrics: S.optional(GuardrailInvocationMetrics),
    appliedGuardrailDetails: S.optional(AppliedGuardrailDetails),
  }),
).annotate({ identifier: "GuardrailAssessment" }) as any as S.Schema<GuardrailAssessment>;
export type GuardrailAssessmentList = GuardrailAssessment[];
const GuardrailAssessmentList = /*@__PURE__*/ S.Array(GuardrailAssessment);
export interface ApplyGuardrailResponse {
  usage: GuardrailUsage;
  action: GuardrailAction;
  actionReason?: string;
  outputs: GuardrailOutputContent[];
  assessments: GuardrailAssessment[];
  guardrailCoverage?: GuardrailCoverage;
}
const ApplyGuardrailResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    usage: GuardrailUsage,
    action: GuardrailAction,
    actionReason: S.optional(S.String),
    outputs: GuardrailOutputContentList,
    assessments: GuardrailAssessmentList,
    guardrailCoverage: S.optional(GuardrailCoverage),
  }),
).annotate({ identifier: "ApplyGuardrailResponse" }) as any as S.Schema<ApplyGuardrailResponse>;
export type ConversationalModelId = string;
export type ConversationRole = "user" | "assistant" | "system" | (string & {});
const ConversationRole = S.String;

export type ImageFormat = "png" | "jpeg" | "gif" | "webp" | (string & {});
const ImageFormat = S.String;

export type S3Uri = string;
export type AccountId = string;
export interface S3Location {
  uri: string;
  bucketOwner?: string;
}
const S3Location = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ uri: S.String, bucketOwner: S.optional(S.String) }),
).annotate({ identifier: "S3Location" }) as any as S.Schema<S3Location>;
export type ImageSource =
  | { bytes: Uint8Array; s3Location?: never }
  | { bytes?: never; s3Location: S3Location };
const ImageSource = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ bytes: T.Blob }),
  /*@__PURE__*/ S.Struct({ s3Location: S3Location }),
]);
export interface ErrorBlock {
  message?: string;
}
const ErrorBlock = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ message: S.optional(S.String) }),
).annotate({ identifier: "ErrorBlock" }) as any as S.Schema<ErrorBlock>;
export interface ImageBlock {
  format: ImageFormat;
  source: ImageSource;
  error?: ErrorBlock;
}
const ImageBlock = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ format: ImageFormat, source: ImageSource, error: S.optional(ErrorBlock) }),
).annotate({ identifier: "ImageBlock" }) as any as S.Schema<ImageBlock>;
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
const DocumentFormat = S.String;

export type DocumentContentBlock = { text: string };
const DocumentContentBlock = /*@__PURE__*/ S.Union([/*@__PURE__*/ S.Struct({ text: S.String })]);
export type DocumentContentBlocks = DocumentContentBlock[];
const DocumentContentBlocks = /*@__PURE__*/ S.Array(DocumentContentBlock);
export type DocumentSource =
  | { bytes: Uint8Array; s3Location?: never; text?: never; content?: never }
  | { bytes?: never; s3Location: S3Location; text?: never; content?: never }
  | { bytes?: never; s3Location?: never; text: string; content?: never }
  | { bytes?: never; s3Location?: never; text?: never; content: DocumentContentBlock[] };
const DocumentSource = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ bytes: T.Blob }),
  /*@__PURE__*/ S.Struct({ s3Location: S3Location }),
  /*@__PURE__*/ S.Struct({ text: S.String }),
  /*@__PURE__*/ S.Struct({ content: DocumentContentBlocks }),
]);
export interface CitationsConfig {
  enabled: boolean;
}
const CitationsConfig = /*@__PURE__*/ S.suspend(() => S.Struct({ enabled: S.Boolean })).annotate({
  identifier: "CitationsConfig",
}) as any as S.Schema<CitationsConfig>;
export interface DocumentBlock {
  format?: DocumentFormat;
  name: string;
  source: DocumentSource;
  context?: string;
  citations?: CitationsConfig;
}
const DocumentBlock = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    format: S.optional(DocumentFormat),
    name: S.String,
    source: DocumentSource,
    context: S.optional(S.String),
    citations: S.optional(CitationsConfig),
  }),
).annotate({ identifier: "DocumentBlock" }) as any as S.Schema<DocumentBlock>;
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
const VideoFormat = S.String;

export type VideoSource =
  | { bytes: Uint8Array; s3Location?: never }
  | { bytes?: never; s3Location: S3Location };
const VideoSource = ImageSource as any as S.Schema<VideoSource>;
export interface VideoBlock {
  format: VideoFormat;
  source: VideoSource;
}
const VideoBlock = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ format: VideoFormat, source: VideoSource }),
).annotate({ identifier: "VideoBlock" }) as any as S.Schema<VideoBlock>;
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
const AudioFormat = S.String;

export type AudioSource =
  | { bytes: Uint8Array; s3Location?: never }
  | { bytes?: never; s3Location: S3Location };
const AudioSource = ImageSource as any as S.Schema<AudioSource>;
export interface AudioBlock {
  format: AudioFormat;
  source: AudioSource;
  error?: ErrorBlock;
}
const AudioBlock = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ format: AudioFormat, source: AudioSource, error: S.optional(ErrorBlock) }),
).annotate({ identifier: "AudioBlock" }) as any as S.Schema<AudioBlock>;
export type ToolUseId = string;
export type ToolName = string;
export type ToolUseType = "server_tool_use" | (string & {});
const ToolUseType = S.String;

export interface ToolUseBlock {
  toolUseId: string;
  name: string;
  input: any;
  type?: ToolUseType;
}
const ToolUseBlock = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ toolUseId: S.String, name: S.String, input: S.Any, type: S.optional(ToolUseType) }),
).annotate({ identifier: "ToolUseBlock" }) as any as S.Schema<ToolUseBlock>;
export interface SearchResultContentBlock {
  text: string;
}
const SearchResultContentBlock = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ text: S.String }),
).annotate({ identifier: "SearchResultContentBlock" }) as any as S.Schema<SearchResultContentBlock>;
export type SearchResultContentBlocks = SearchResultContentBlock[];
const SearchResultContentBlocks = /*@__PURE__*/ S.Array(SearchResultContentBlock);
export interface SearchResultBlock {
  source: string;
  title: string;
  content: SearchResultContentBlock[];
  citations?: CitationsConfig;
}
const SearchResultBlock = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    source: S.String,
    title: S.String,
    content: SearchResultContentBlocks,
    citations: S.optional(CitationsConfig),
  }),
).annotate({ identifier: "SearchResultBlock" }) as any as S.Schema<SearchResultBlock>;
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
const ToolResultContentBlock = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ json: S.Any }),
  /*@__PURE__*/ S.Struct({ text: S.String }),
  /*@__PURE__*/ S.Struct({ image: ImageBlock }),
  /*@__PURE__*/ S.Struct({ document: DocumentBlock }),
  /*@__PURE__*/ S.Struct({ video: VideoBlock }),
  /*@__PURE__*/ S.Struct({ searchResult: SearchResultBlock }),
]);
export type ToolResultContentBlocks = ToolResultContentBlock[];
const ToolResultContentBlocks = /*@__PURE__*/ S.Array(ToolResultContentBlock);
export type ToolResultStatus = "success" | "error" | (string & {});
const ToolResultStatus = S.String;

export interface ToolResultBlock {
  toolUseId: string;
  content: ToolResultContentBlock[];
  status?: ToolResultStatus;
  type?: string;
}
const ToolResultBlock = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    toolUseId: S.String,
    content: ToolResultContentBlocks,
    status: S.optional(ToolResultStatus),
    type: S.optional(S.String),
  }),
).annotate({ identifier: "ToolResultBlock" }) as any as S.Schema<ToolResultBlock>;
export type GuardrailConverseContentQualifier =
  | "grounding_source"
  | "query"
  | "guard_content"
  | (string & {});
const GuardrailConverseContentQualifier = S.String;

export type GuardrailConverseContentQualifierList = GuardrailConverseContentQualifier[];
const GuardrailConverseContentQualifierList = /*@__PURE__*/ S.Array(
  GuardrailConverseContentQualifier,
);
export interface GuardrailConverseTextBlock {
  text: string;
  qualifiers?: GuardrailConverseContentQualifier[];
}
const GuardrailConverseTextBlock = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ text: S.String, qualifiers: S.optional(GuardrailConverseContentQualifierList) }),
).annotate({
  identifier: "GuardrailConverseTextBlock",
}) as any as S.Schema<GuardrailConverseTextBlock>;
export type GuardrailConverseImageFormat = "png" | "jpeg" | (string & {});
const GuardrailConverseImageFormat = S.String;

export type GuardrailConverseImageSource = { bytes: Uint8Array };
const GuardrailConverseImageSource =
  GuardrailImageSource as any as S.Schema<GuardrailConverseImageSource>;
export interface GuardrailConverseImageBlock {
  format: GuardrailConverseImageFormat;
  source: GuardrailConverseImageSource;
}
const GuardrailConverseImageBlock = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ format: GuardrailConverseImageFormat, source: GuardrailConverseImageSource }),
).annotate({
  identifier: "GuardrailConverseImageBlock",
}) as any as S.Schema<GuardrailConverseImageBlock>;
export type GuardrailConverseContentBlock =
  | { text: GuardrailConverseTextBlock; image?: never }
  | { text?: never; image: GuardrailConverseImageBlock };
const GuardrailConverseContentBlock = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ text: GuardrailConverseTextBlock }),
  /*@__PURE__*/ S.Struct({ image: GuardrailConverseImageBlock }),
]);
export type CachePointType = "default" | (string & {});
const CachePointType = S.String;

export type CacheTTL = "5m" | "1h" | (string & {});
const CacheTTL = S.String;

export interface CachePointBlock {
  type: CachePointType;
  ttl?: CacheTTL;
}
const CachePointBlock = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ type: CachePointType, ttl: S.optional(CacheTTL) }),
).annotate({ identifier: "CachePointBlock" }) as any as S.Schema<CachePointBlock>;
export interface ReasoningTextBlock {
  text: string;
  signature?: string;
}
const ReasoningTextBlock = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ text: S.String, signature: S.optional(S.String) }),
).annotate({ identifier: "ReasoningTextBlock" }) as any as S.Schema<ReasoningTextBlock>;
export type ReasoningContentBlock =
  | { reasoningText: ReasoningTextBlock; redactedContent?: never }
  | { reasoningText?: never; redactedContent: Uint8Array };
const ReasoningContentBlock = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ reasoningText: ReasoningTextBlock }),
  /*@__PURE__*/ S.Struct({ redactedContent: T.Blob }),
]);
export type CitationGeneratedContent = { text: string };
export type CitationGeneratedContentList = CitationGeneratedContent[];
const CitationGeneratedContentList =
  DocumentContentBlocks as any as S.Schema<CitationGeneratedContentList>;
export type CitationSourceContent = { text: string };
export type CitationSourceContentList = CitationSourceContent[];
const CitationSourceContentList =
  DocumentContentBlocks as any as S.Schema<CitationSourceContentList>;
export interface WebLocation {
  url?: string;
  domain?: string;
}
const WebLocation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ url: S.optional(S.String), domain: S.optional(S.String) }),
).annotate({ identifier: "WebLocation" }) as any as S.Schema<WebLocation>;
export interface DocumentCharLocation {
  documentIndex?: number;
  start?: number;
  end?: number;
}
const DocumentCharLocation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    documentIndex: S.optional(S.Number),
    start: S.optional(S.Number),
    end: S.optional(S.Number),
  }),
).annotate({ identifier: "DocumentCharLocation" }) as any as S.Schema<DocumentCharLocation>;
export interface DocumentPageLocation {
  documentIndex?: number;
  start?: number;
  end?: number;
}
const DocumentPageLocation = DocumentCharLocation as any as S.Schema<DocumentPageLocation>;
export interface DocumentChunkLocation {
  documentIndex?: number;
  start?: number;
  end?: number;
}
const DocumentChunkLocation = DocumentCharLocation as any as S.Schema<DocumentChunkLocation>;
export interface SearchResultLocation {
  searchResultIndex?: number;
  start?: number;
  end?: number;
}
const SearchResultLocation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    searchResultIndex: S.optional(S.Number),
    start: S.optional(S.Number),
    end: S.optional(S.Number),
  }),
).annotate({ identifier: "SearchResultLocation" }) as any as S.Schema<SearchResultLocation>;
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
const CitationLocation = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ web: WebLocation }),
  /*@__PURE__*/ S.Struct({ documentChar: DocumentCharLocation }),
  /*@__PURE__*/ S.Struct({ documentPage: DocumentPageLocation }),
  /*@__PURE__*/ S.Struct({ documentChunk: DocumentChunkLocation }),
  /*@__PURE__*/ S.Struct({ searchResultLocation: SearchResultLocation }),
]);
export interface Citation {
  title?: string;
  source?: string;
  sourceContent?: CitationSourceContent[];
  location?: CitationLocation;
}
const Citation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    title: S.optional(S.String),
    source: S.optional(S.String),
    sourceContent: S.optional(CitationSourceContentList),
    location: S.optional(CitationLocation),
  }),
).annotate({ identifier: "Citation" }) as any as S.Schema<Citation>;
export type Citations = Citation[];
const Citations = /*@__PURE__*/ S.Array(Citation);
export interface CitationsContentBlock {
  content?: CitationGeneratedContent[];
  citations?: Citation[];
}
const CitationsContentBlock = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ content: S.optional(CitationGeneratedContentList), citations: S.optional(Citations) }),
).annotate({ identifier: "CitationsContentBlock" }) as any as S.Schema<CitationsContentBlock>;
export interface ToolReference {
  type?: string;
  name?: string;
  serverName?: string;
}
const ToolReference = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.optional(S.String),
    name: S.optional(S.String),
    serverName: S.optional(S.String),
  }),
).annotate({ identifier: "ToolReference" }) as any as S.Schema<ToolReference>;
export interface ToolAdditionBlock {
  tool: ToolReference;
}
const ToolAdditionBlock = /*@__PURE__*/ S.suspend(() => S.Struct({ tool: ToolReference })).annotate(
  { identifier: "ToolAdditionBlock" },
) as any as S.Schema<ToolAdditionBlock>;
export interface ToolRemovalBlock {
  tool: ToolReference;
}
const ToolRemovalBlock = ToolAdditionBlock as any as S.Schema<ToolRemovalBlock>;
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
const ContentBlock = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ text: S.String }),
  /*@__PURE__*/ S.Struct({ image: ImageBlock }),
  /*@__PURE__*/ S.Struct({ document: DocumentBlock }),
  /*@__PURE__*/ S.Struct({ video: VideoBlock }),
  /*@__PURE__*/ S.Struct({ audio: AudioBlock }),
  /*@__PURE__*/ S.Struct({ toolUse: ToolUseBlock }),
  /*@__PURE__*/ S.Struct({ toolResult: ToolResultBlock }),
  /*@__PURE__*/ S.Struct({ guardContent: GuardrailConverseContentBlock }),
  /*@__PURE__*/ S.Struct({ cachePoint: CachePointBlock }),
  /*@__PURE__*/ S.Struct({ reasoningContent: ReasoningContentBlock }),
  /*@__PURE__*/ S.Struct({ citationsContent: CitationsContentBlock }),
  /*@__PURE__*/ S.Struct({ searchResult: SearchResultBlock }),
  /*@__PURE__*/ S.Struct({ toolAddition: ToolAdditionBlock }),
  /*@__PURE__*/ S.Struct({ toolRemoval: ToolRemovalBlock }),
]);
export type ContentBlocks = ContentBlock[];
const ContentBlocks = /*@__PURE__*/ S.Array(ContentBlock);
export interface Message {
  role: ConversationRole;
  content: ContentBlock[];
}
const Message = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ role: ConversationRole, content: ContentBlocks }),
).annotate({ identifier: "Message" }) as any as S.Schema<Message>;
export type Messages = Message[];
const Messages = /*@__PURE__*/ S.Array(Message);
export type NonEmptyString = string;
export type SystemContentBlock =
  | { text: string; guardContent?: never; cachePoint?: never }
  | { text?: never; guardContent: GuardrailConverseContentBlock; cachePoint?: never }
  | { text?: never; guardContent?: never; cachePoint: CachePointBlock };
const SystemContentBlock = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ text: S.String }),
  /*@__PURE__*/ S.Struct({ guardContent: GuardrailConverseContentBlock }),
  /*@__PURE__*/ S.Struct({ cachePoint: CachePointBlock }),
]);
export type SystemContentBlocks = SystemContentBlock[];
const SystemContentBlocks = /*@__PURE__*/ S.Array(SystemContentBlock);
export type NonEmptyStringList = string[];
const NonEmptyStringList = /*@__PURE__*/ S.Array(S.String);
export interface InferenceConfiguration {
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  stopSequences?: string[];
}
const InferenceConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    maxTokens: S.optional(S.Number),
    temperature: S.optional(S.Number),
    topP: S.optional(S.Number),
    stopSequences: S.optional(NonEmptyStringList),
  }),
).annotate({ identifier: "InferenceConfiguration" }) as any as S.Schema<InferenceConfiguration>;
export type ToolInputSchema = { json: any };
const ToolInputSchema = /*@__PURE__*/ S.Union([/*@__PURE__*/ S.Struct({ json: S.Any })]);
export interface ToolSpecification {
  name: string;
  description?: string;
  inputSchema: ToolInputSchema;
  strict?: boolean;
}
const ToolSpecification = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    description: S.optional(S.String),
    inputSchema: ToolInputSchema,
    strict: S.optional(S.Boolean),
  }),
).annotate({ identifier: "ToolSpecification" }) as any as S.Schema<ToolSpecification>;
export interface SystemTool {
  name: string;
}
const SystemTool = /*@__PURE__*/ S.suspend(() => S.Struct({ name: S.String })).annotate({
  identifier: "SystemTool",
}) as any as S.Schema<SystemTool>;
export type Tool =
  | { toolSpec: ToolSpecification; systemTool?: never; cachePoint?: never }
  | { toolSpec?: never; systemTool: SystemTool; cachePoint?: never }
  | { toolSpec?: never; systemTool?: never; cachePoint: CachePointBlock };
const Tool = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ toolSpec: ToolSpecification }),
  /*@__PURE__*/ S.Struct({ systemTool: SystemTool }),
  /*@__PURE__*/ S.Struct({ cachePoint: CachePointBlock }),
]);
export type Tools = Tool[];
const Tools = /*@__PURE__*/ S.Array(Tool);
export interface AutoToolChoice {}
const AutoToolChoice = /*@__PURE__*/ S.suspend(() => S.Struct({})).annotate({
  identifier: "AutoToolChoice",
}) as any as S.Schema<AutoToolChoice>;
export interface AnyToolChoice {}
const AnyToolChoice = AutoToolChoice as any as S.Schema<AnyToolChoice>;
export interface SpecificToolChoice {
  name: string;
}
const SpecificToolChoice = /*@__PURE__*/ S.suspend(() => S.Struct({ name: S.String })).annotate({
  identifier: "SpecificToolChoice",
}) as any as S.Schema<SpecificToolChoice>;
export type ToolChoice =
  | { auto: AutoToolChoice; any?: never; tool?: never }
  | { auto?: never; any: AnyToolChoice; tool?: never }
  | { auto?: never; any?: never; tool: SpecificToolChoice };
const ToolChoice = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ auto: AutoToolChoice }),
  /*@__PURE__*/ S.Struct({ any: AnyToolChoice }),
  /*@__PURE__*/ S.Struct({ tool: SpecificToolChoice }),
]);
export interface ToolConfiguration {
  tools: Tool[];
  toolChoice?: ToolChoice;
}
const ToolConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ tools: Tools, toolChoice: S.optional(ToolChoice) }),
).annotate({ identifier: "ToolConfiguration" }) as any as S.Schema<ToolConfiguration>;
export type GuardrailTrace = "enabled" | "disabled" | "enabled_full" | (string & {});
const GuardrailTrace = S.String;

export interface GuardrailConfiguration {
  guardrailIdentifier?: string;
  guardrailVersion?: string;
  trace?: GuardrailTrace;
}
const GuardrailConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    guardrailIdentifier: S.optional(S.String),
    guardrailVersion: S.optional(S.String),
    trace: S.optional(GuardrailTrace),
  }),
).annotate({ identifier: "GuardrailConfiguration" }) as any as S.Schema<GuardrailConfiguration>;
export type PromptVariableValues = { text: string };
const PromptVariableValues = DocumentContentBlock as any as S.Schema<PromptVariableValues>;
export type PromptVariableMap = { [key: string]: PromptVariableValues | undefined };
const PromptVariableMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ PromptVariableValues.pipe(S.optional),
);
export type AdditionalModelResponseFieldPaths = string[];
const AdditionalModelResponseFieldPaths =
  NonEmptyStringList as any as S.Schema<AdditionalModelResponseFieldPaths>;
export type RequestMetadata = { [key: string]: string | undefined };
const RequestMetadata = /*@__PURE__*/ S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
export type PerformanceConfigLatency = "standard" | "optimized" | (string & {});
const PerformanceConfigLatency = S.String;

export interface PerformanceConfiguration {
  latency?: PerformanceConfigLatency;
}
const PerformanceConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ latency: S.optional(PerformanceConfigLatency) }),
).annotate({ identifier: "PerformanceConfiguration" }) as any as S.Schema<PerformanceConfiguration>;
export type ServiceTierType = "priority" | "default" | "flex" | "reserved" | (string & {});
const ServiceTierType = S.String;

export interface ServiceTier {
  type: ServiceTierType;
}
const ServiceTier = /*@__PURE__*/ S.suspend(() => S.Struct({ type: ServiceTierType })).annotate({
  identifier: "ServiceTier",
}) as any as S.Schema<ServiceTier>;
export type OutputFormatType = "json_schema" | (string & {});
const OutputFormatType = S.String;

export interface JsonSchemaDefinition {
  schema: string;
  name?: string;
  description?: string;
}
const JsonSchemaDefinition = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ schema: S.String, name: S.optional(S.String), description: S.optional(S.String) }),
).annotate({ identifier: "JsonSchemaDefinition" }) as any as S.Schema<JsonSchemaDefinition>;
export type OutputFormatStructure = { jsonSchema: JsonSchemaDefinition };
const OutputFormatStructure = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ jsonSchema: JsonSchemaDefinition }),
]);
export interface OutputFormat {
  type: OutputFormatType;
  structure: OutputFormatStructure;
}
const OutputFormat = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ type: OutputFormatType, structure: OutputFormatStructure }),
).annotate({ identifier: "OutputFormat" }) as any as S.Schema<OutputFormat>;
export interface OutputConfig {
  textFormat?: OutputFormat;
  effort?: string;
}
const OutputConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ textFormat: S.optional(OutputFormat), effort: S.optional(S.String) }),
).annotate({ identifier: "OutputConfig" }) as any as S.Schema<OutputConfig>;
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
const ConverseRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    modelId: S.String.pipe(T.HttpLabel("modelId")),
    messages: S.optional(Messages),
    system: S.optional(SystemContentBlocks),
    inferenceConfig: S.optional(InferenceConfiguration),
    toolConfig: S.optional(ToolConfiguration),
    guardrailConfig: S.optional(GuardrailConfiguration),
    additionalModelRequestFields: S.optional(S.Any),
    promptVariables: S.optional(PromptVariableMap),
    additionalModelResponseFieldPaths: S.optional(AdditionalModelResponseFieldPaths),
    requestMetadata: S.optional(RequestMetadata),
    performanceConfig: S.optional(PerformanceConfiguration),
    serviceTier: S.optional(ServiceTier),
    outputConfig: S.optional(OutputConfig),
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
).annotate({ identifier: "ConverseRequest" }) as any as S.Schema<ConverseRequest>;
export type ConverseOutput = { message: Message };
const ConverseOutput = /*@__PURE__*/ S.Union([/*@__PURE__*/ S.Struct({ message: Message })]);
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
const StopReason = S.String;

export interface CacheDetail {
  ttl: CacheTTL;
  inputTokens: number;
}
const CacheDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ttl: CacheTTL, inputTokens: S.Number }),
).annotate({ identifier: "CacheDetail" }) as any as S.Schema<CacheDetail>;
export type CacheDetailsList = CacheDetail[];
const CacheDetailsList = /*@__PURE__*/ S.Array(CacheDetail);
export interface TokenUsage {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
  cacheReadInputTokens?: number;
  cacheWriteInputTokens?: number;
  cacheDetails?: CacheDetail[];
}
const TokenUsage = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    inputTokens: S.Number,
    outputTokens: S.Number,
    totalTokens: S.Number,
    cacheReadInputTokens: S.optional(S.Number),
    cacheWriteInputTokens: S.optional(S.Number),
    cacheDetails: S.optional(CacheDetailsList),
  }),
).annotate({ identifier: "TokenUsage" }) as any as S.Schema<TokenUsage>;
export interface ConverseMetrics {
  latencyMs: number;
}
const ConverseMetrics = /*@__PURE__*/ S.suspend(() => S.Struct({ latencyMs: S.Number })).annotate({
  identifier: "ConverseMetrics",
}) as any as S.Schema<ConverseMetrics>;
export type ModelOutputs = string[];
const ModelOutputs = NonEmptyStringList as any as S.Schema<ModelOutputs>;
export type GuardrailAssessmentMap = { [key: string]: GuardrailAssessment | undefined };
const GuardrailAssessmentMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ GuardrailAssessment.pipe(S.optional),
);
export type GuardrailAssessmentListMap = { [key: string]: GuardrailAssessment[] | undefined };
const GuardrailAssessmentListMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ GuardrailAssessmentList.pipe(S.optional),
);
export interface GuardrailTraceAssessment {
  modelOutput?: string[];
  inputAssessment?: { [key: string]: GuardrailAssessment | undefined };
  outputAssessments?: { [key: string]: GuardrailAssessment[] | undefined };
  actionReason?: string;
}
const GuardrailTraceAssessment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    modelOutput: S.optional(ModelOutputs),
    inputAssessment: S.optional(GuardrailAssessmentMap),
    outputAssessments: S.optional(GuardrailAssessmentListMap),
    actionReason: S.optional(S.String),
  }),
).annotate({ identifier: "GuardrailTraceAssessment" }) as any as S.Schema<GuardrailTraceAssessment>;
export type InvokedModelId = string;
export interface PromptRouterTrace {
  invokedModelId?: string;
}
const PromptRouterTrace = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ invokedModelId: S.optional(S.String) }),
).annotate({ identifier: "PromptRouterTrace" }) as any as S.Schema<PromptRouterTrace>;
export interface ConverseTrace {
  guardrail?: GuardrailTraceAssessment;
  promptRouter?: PromptRouterTrace;
}
const ConverseTrace = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    guardrail: S.optional(GuardrailTraceAssessment),
    promptRouter: S.optional(PromptRouterTrace),
  }),
).annotate({ identifier: "ConverseTrace" }) as any as S.Schema<ConverseTrace>;
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
const ConverseResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    output: ConverseOutput,
    stopReason: StopReason,
    usage: TokenUsage,
    metrics: ConverseMetrics,
    additionalModelResponseFields: S.optional(S.Any),
    trace: S.optional(ConverseTrace),
    performanceConfig: S.optional(PerformanceConfiguration),
    serviceTier: S.optional(ServiceTier),
  }),
).annotate({ identifier: "ConverseResponse" }) as any as S.Schema<ConverseResponse>;
export type GuardrailStreamProcessingMode = "sync" | "async" | (string & {});
const GuardrailStreamProcessingMode = S.String;

export interface GuardrailStreamConfiguration {
  guardrailIdentifier?: string;
  guardrailVersion?: string;
  trace?: GuardrailTrace;
  streamProcessingMode?: GuardrailStreamProcessingMode;
}
const GuardrailStreamConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    guardrailIdentifier: S.optional(S.String),
    guardrailVersion: S.optional(S.String),
    trace: S.optional(GuardrailTrace),
    streamProcessingMode: S.optional(GuardrailStreamProcessingMode),
  }),
).annotate({
  identifier: "GuardrailStreamConfiguration",
}) as any as S.Schema<GuardrailStreamConfiguration>;
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
const ConverseStreamRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    modelId: S.String.pipe(T.HttpLabel("modelId")),
    messages: S.optional(Messages),
    system: S.optional(SystemContentBlocks),
    inferenceConfig: S.optional(InferenceConfiguration),
    toolConfig: S.optional(ToolConfiguration),
    guardrailConfig: S.optional(GuardrailStreamConfiguration),
    additionalModelRequestFields: S.optional(S.Any),
    promptVariables: S.optional(PromptVariableMap),
    additionalModelResponseFieldPaths: S.optional(AdditionalModelResponseFieldPaths),
    requestMetadata: S.optional(RequestMetadata),
    performanceConfig: S.optional(PerformanceConfiguration),
    serviceTier: S.optional(ServiceTier),
    outputConfig: S.optional(OutputConfig),
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
).annotate({ identifier: "ConverseStreamRequest" }) as any as S.Schema<ConverseStreamRequest>;
export interface MessageStartEvent {
  role: ConversationRole;
}
const MessageStartEvent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ role: ConversationRole }),
).annotate({ identifier: "MessageStartEvent" }) as any as S.Schema<MessageStartEvent>;
export interface ToolUseBlockStart {
  toolUseId: string;
  name: string;
  type?: ToolUseType;
}
const ToolUseBlockStart = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ toolUseId: S.String, name: S.String, type: S.optional(ToolUseType) }),
).annotate({ identifier: "ToolUseBlockStart" }) as any as S.Schema<ToolUseBlockStart>;
export interface ToolResultBlockStart {
  toolUseId: string;
  type?: string;
  status?: ToolResultStatus;
}
const ToolResultBlockStart = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    toolUseId: S.String,
    type: S.optional(S.String),
    status: S.optional(ToolResultStatus),
  }),
).annotate({ identifier: "ToolResultBlockStart" }) as any as S.Schema<ToolResultBlockStart>;
export interface ImageBlockStart {
  format: ImageFormat;
}
const ImageBlockStart = /*@__PURE__*/ S.suspend(() => S.Struct({ format: ImageFormat })).annotate({
  identifier: "ImageBlockStart",
}) as any as S.Schema<ImageBlockStart>;
export type ContentBlockStart =
  | { toolUse: ToolUseBlockStart; toolResult?: never; image?: never }
  | { toolUse?: never; toolResult: ToolResultBlockStart; image?: never }
  | { toolUse?: never; toolResult?: never; image: ImageBlockStart };
const ContentBlockStart = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ toolUse: ToolUseBlockStart }),
  /*@__PURE__*/ S.Struct({ toolResult: ToolResultBlockStart }),
  /*@__PURE__*/ S.Struct({ image: ImageBlockStart }),
]);
export type NonNegativeInteger = number;
export interface ContentBlockStartEvent {
  start: ContentBlockStart;
  contentBlockIndex: number;
}
const ContentBlockStartEvent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ start: ContentBlockStart, contentBlockIndex: S.Number }),
).annotate({ identifier: "ContentBlockStartEvent" }) as any as S.Schema<ContentBlockStartEvent>;
export interface ToolUseBlockDelta {
  input: string;
}
const ToolUseBlockDelta = /*@__PURE__*/ S.suspend(() => S.Struct({ input: S.String })).annotate({
  identifier: "ToolUseBlockDelta",
}) as any as S.Schema<ToolUseBlockDelta>;
export type ToolResultBlockDelta = { text: string; json?: never } | { text?: never; json: any };
const ToolResultBlockDelta = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ text: S.String }),
  /*@__PURE__*/ S.Struct({ json: S.Any }),
]);
export type ToolResultBlocksDelta = ToolResultBlockDelta[];
const ToolResultBlocksDelta = /*@__PURE__*/ S.Array(ToolResultBlockDelta);
export type ReasoningContentBlockDelta =
  | { text: string; redactedContent?: never; signature?: never }
  | { text?: never; redactedContent: Uint8Array; signature?: never }
  | { text?: never; redactedContent?: never; signature: string };
const ReasoningContentBlockDelta = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ text: S.String }),
  /*@__PURE__*/ S.Struct({ redactedContent: T.Blob }),
  /*@__PURE__*/ S.Struct({ signature: S.String }),
]);
export interface CitationSourceContentDelta {
  text?: string;
}
const CitationSourceContentDelta = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ text: S.optional(S.String) }),
).annotate({
  identifier: "CitationSourceContentDelta",
}) as any as S.Schema<CitationSourceContentDelta>;
export type CitationSourceContentListDelta = CitationSourceContentDelta[];
const CitationSourceContentListDelta = /*@__PURE__*/ S.Array(CitationSourceContentDelta);
export interface CitationsDelta {
  title?: string;
  source?: string;
  sourceContent?: CitationSourceContentDelta[];
  location?: CitationLocation;
}
const CitationsDelta = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    title: S.optional(S.String),
    source: S.optional(S.String),
    sourceContent: S.optional(CitationSourceContentListDelta),
    location: S.optional(CitationLocation),
  }),
).annotate({ identifier: "CitationsDelta" }) as any as S.Schema<CitationsDelta>;
export interface ImageBlockDelta {
  source?: ImageSource;
  error?: ErrorBlock;
}
const ImageBlockDelta = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ source: S.optional(ImageSource), error: S.optional(ErrorBlock) }),
).annotate({ identifier: "ImageBlockDelta" }) as any as S.Schema<ImageBlockDelta>;
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
const ContentBlockDelta = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ text: S.String }),
  /*@__PURE__*/ S.Struct({ toolUse: ToolUseBlockDelta }),
  /*@__PURE__*/ S.Struct({ toolResult: ToolResultBlocksDelta }),
  /*@__PURE__*/ S.Struct({ reasoningContent: ReasoningContentBlockDelta }),
  /*@__PURE__*/ S.Struct({ citation: CitationsDelta }),
  /*@__PURE__*/ S.Struct({ image: ImageBlockDelta }),
]);
export interface ContentBlockDeltaEvent {
  delta: ContentBlockDelta;
  contentBlockIndex: number;
}
const ContentBlockDeltaEvent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ delta: ContentBlockDelta, contentBlockIndex: S.Number }),
).annotate({ identifier: "ContentBlockDeltaEvent" }) as any as S.Schema<ContentBlockDeltaEvent>;
export interface ContentBlockStopEvent {
  contentBlockIndex: number;
}
const ContentBlockStopEvent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ contentBlockIndex: S.Number }),
).annotate({ identifier: "ContentBlockStopEvent" }) as any as S.Schema<ContentBlockStopEvent>;
export interface MessageStopEvent {
  stopReason: StopReason;
  additionalModelResponseFields?: any;
}
const MessageStopEvent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ stopReason: StopReason, additionalModelResponseFields: S.optional(S.Any) }),
).annotate({ identifier: "MessageStopEvent" }) as any as S.Schema<MessageStopEvent>;
export interface ConverseStreamMetrics {
  latencyMs: number;
}
const ConverseStreamMetrics = ConverseMetrics as any as S.Schema<ConverseStreamMetrics>;
export interface ConverseStreamTrace {
  guardrail?: GuardrailTraceAssessment;
  promptRouter?: PromptRouterTrace;
}
const ConverseStreamTrace = ConverseTrace as any as S.Schema<ConverseStreamTrace>;
export interface ConverseStreamMetadataEvent {
  usage: TokenUsage;
  metrics: ConverseStreamMetrics;
  trace?: ConverseStreamTrace;
  performanceConfig?: PerformanceConfiguration;
  serviceTier?: ServiceTier;
}
const ConverseStreamMetadataEvent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    usage: TokenUsage,
    metrics: ConverseStreamMetrics,
    trace: S.optional(ConverseStreamTrace),
    performanceConfig: S.optional(PerformanceConfiguration),
    serviceTier: S.optional(ServiceTier),
  }),
).annotate({
  identifier: "ConverseStreamMetadataEvent",
}) as any as S.Schema<ConverseStreamMetadataEvent>;
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
const ConverseStreamOutput = /*@__PURE__*/ T.EventStream(
  /*@__PURE__*/ S.Union([
    /*@__PURE__*/ S.Struct({ messageStart: MessageStartEvent }),
    /*@__PURE__*/ S.Struct({ contentBlockStart: ContentBlockStartEvent }),
    /*@__PURE__*/ S.Struct({ contentBlockDelta: ContentBlockDeltaEvent }),
    /*@__PURE__*/ S.Struct({ contentBlockStop: ContentBlockStopEvent }),
    /*@__PURE__*/ S.Struct({ messageStop: MessageStopEvent }),
    /*@__PURE__*/ S.Struct({ metadata: ConverseStreamMetadataEvent }),
    /*@__PURE__*/ S.Struct({
      internalServerException: /*@__PURE__*/ S.suspend(() => InternalServerException).annotate({
        identifier: "InternalServerException",
      }),
    }),
    /*@__PURE__*/ S.Struct({
      modelStreamErrorException: /*@__PURE__*/ S.suspend(() => ModelStreamErrorException).annotate({
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
) as any as S.Schema<stream.Stream<ConverseStreamOutput, Error, never>>;
export interface ConverseStreamResponse {
  stream?: stream.Stream<ConverseStreamOutput, Error, never>;
}
const ConverseStreamResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ stream: S.optional(ConverseStreamOutput).pipe(T.HttpPayload()) }),
).annotate({ identifier: "ConverseStreamResponse" }) as any as S.Schema<ConverseStreamResponse>;
export type FoundationModelVersionIdentifier = string;
export type Body = Uint8Array | redacted.Redacted<Uint8Array>;
export interface InvokeModelTokensRequest {
  body: Uint8Array | redacted.Redacted<Uint8Array>;
}
const InvokeModelTokensRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ body: SensitiveBlob }),
).annotate({ identifier: "InvokeModelTokensRequest" }) as any as S.Schema<InvokeModelTokensRequest>;
export interface ConverseTokensRequest {
  messages?: Message[];
  system?: SystemContentBlock[];
  toolConfig?: ToolConfiguration;
  additionalModelRequestFields?: any;
}
const ConverseTokensRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    messages: S.optional(Messages),
    system: S.optional(SystemContentBlocks),
    toolConfig: S.optional(ToolConfiguration),
    additionalModelRequestFields: S.optional(S.Any),
  }),
).annotate({ identifier: "ConverseTokensRequest" }) as any as S.Schema<ConverseTokensRequest>;
export type CountTokensInput =
  | { invokeModel: InvokeModelTokensRequest; converse?: never }
  | { invokeModel?: never; converse: ConverseTokensRequest };
const CountTokensInput = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ invokeModel: InvokeModelTokensRequest }),
  /*@__PURE__*/ S.Struct({ converse: ConverseTokensRequest }),
]);
export interface CountTokensRequest {
  modelId: string;
  input: CountTokensInput;
}
const CountTokensRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ modelId: S.String.pipe(T.HttpLabel("modelId")), input: CountTokensInput }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/model/{modelId}/count-tokens" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "CountTokensRequest" }) as any as S.Schema<CountTokensRequest>;
export interface CountTokensResponse {
  inputTokens: number;
}
const CountTokensResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ inputTokens: S.Number }),
).annotate({ identifier: "CountTokensResponse" }) as any as S.Schema<CountTokensResponse>;
export type InvocationArn = string;
export interface GetAsyncInvokeRequest {
  invocationArn: string;
}
const GetAsyncInvokeRequest = /*@__PURE__*/ S.suspend(() =>
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
).annotate({ identifier: "GetAsyncInvokeRequest" }) as any as S.Schema<GetAsyncInvokeRequest>;
export type AsyncInvokeArn = string;
export type AsyncInvokeIdempotencyToken = string;
export type AsyncInvokeStatus = "InProgress" | "Completed" | "Failed" | (string & {});
const AsyncInvokeStatus = S.String;

export type AsyncInvokeMessage = string | redacted.Redacted<string>;
export type KmsKeyId = string;
export interface AsyncInvokeS3OutputDataConfig {
  s3Uri: string;
  kmsKeyId?: string;
  bucketOwner?: string;
}
const AsyncInvokeS3OutputDataConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ s3Uri: S.String, kmsKeyId: S.optional(S.String), bucketOwner: S.optional(S.String) }),
).annotate({
  identifier: "AsyncInvokeS3OutputDataConfig",
}) as any as S.Schema<AsyncInvokeS3OutputDataConfig>;
export type AsyncInvokeOutputDataConfig = { s3OutputDataConfig: AsyncInvokeS3OutputDataConfig };
const AsyncInvokeOutputDataConfig = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ s3OutputDataConfig: AsyncInvokeS3OutputDataConfig }),
]);
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
const GetAsyncInvokeResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    invocationArn: S.String,
    modelArn: S.String,
    clientRequestToken: S.optional(S.String),
    status: AsyncInvokeStatus,
    failureMessage: S.optional(SensitiveString),
    submitTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    lastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
    endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
    outputDataConfig: AsyncInvokeOutputDataConfig,
  }),
).annotate({ identifier: "GetAsyncInvokeResponse" }) as any as S.Schema<GetAsyncInvokeResponse>;
export type GuardrailChecksRole = "user" | "assistant" | "system" | (string & {});
const GuardrailChecksRole = S.String;

export type GuardrailChecksTextContent = string | redacted.Redacted<string>;
export type GuardrailChecksContentBlock = { text: string | redacted.Redacted<string> };
const GuardrailChecksContentBlock = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ text: SensitiveString }),
]);
export type GuardrailChecksContentBlockList = GuardrailChecksContentBlock[];
const GuardrailChecksContentBlockList = /*@__PURE__*/ S.Array(GuardrailChecksContentBlock);
export interface GuardrailChecksMessage {
  role: GuardrailChecksRole;
  content: GuardrailChecksContentBlock[];
}
const GuardrailChecksMessage = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ role: GuardrailChecksRole, content: GuardrailChecksContentBlockList }),
).annotate({ identifier: "GuardrailChecksMessage" }) as any as S.Schema<GuardrailChecksMessage>;
export type GuardrailChecksMessageList = GuardrailChecksMessage[];
const GuardrailChecksMessageList = /*@__PURE__*/ S.Array(GuardrailChecksMessage);
export type GuardrailChecksContentFilterCategory =
  | "VIOLENCE"
  | "HATE"
  | "SEXUAL"
  | "MISCONDUCT"
  | "INSULTS"
  | (string & {});
const GuardrailChecksContentFilterCategory = S.String;

export interface GuardrailChecksContentFilterCategoryConfig {
  category: GuardrailChecksContentFilterCategory;
}
const GuardrailChecksContentFilterCategoryConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ category: GuardrailChecksContentFilterCategory }),
).annotate({
  identifier: "GuardrailChecksContentFilterCategoryConfig",
}) as any as S.Schema<GuardrailChecksContentFilterCategoryConfig>;
export type GuardrailChecksContentFilterCategoryConfigList =
  GuardrailChecksContentFilterCategoryConfig[];
const GuardrailChecksContentFilterCategoryConfigList = /*@__PURE__*/ S.Array(
  GuardrailChecksContentFilterCategoryConfig,
);
export interface GuardrailChecksContentFilterConfig {
  categories: GuardrailChecksContentFilterCategoryConfig[];
}
const GuardrailChecksContentFilterConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ categories: GuardrailChecksContentFilterCategoryConfigList }),
).annotate({
  identifier: "GuardrailChecksContentFilterConfig",
}) as any as S.Schema<GuardrailChecksContentFilterConfig>;
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
const GuardrailChecksPromptAttackConfig =
  GuardrailChecksContentFilterConfig as any as S.Schema<GuardrailChecksPromptAttackConfig>;
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
const GuardrailChecksSensitiveInformationEntityType = S.String;

export interface GuardrailChecksSensitiveInformationEntityConfig {
  type: GuardrailChecksSensitiveInformationEntityType;
}
const GuardrailChecksSensitiveInformationEntityConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ type: GuardrailChecksSensitiveInformationEntityType }),
).annotate({
  identifier: "GuardrailChecksSensitiveInformationEntityConfig",
}) as any as S.Schema<GuardrailChecksSensitiveInformationEntityConfig>;
export type GuardrailChecksSensitiveInformationEntityConfigList =
  GuardrailChecksSensitiveInformationEntityConfig[];
const GuardrailChecksSensitiveInformationEntityConfigList = /*@__PURE__*/ S.Array(
  GuardrailChecksSensitiveInformationEntityConfig,
);
export interface GuardrailChecksSensitiveInformationConfig {
  entities: GuardrailChecksSensitiveInformationEntityConfig[];
}
const GuardrailChecksSensitiveInformationConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ entities: GuardrailChecksSensitiveInformationEntityConfigList }),
).annotate({
  identifier: "GuardrailChecksSensitiveInformationConfig",
}) as any as S.Schema<GuardrailChecksSensitiveInformationConfig>;
export interface GuardrailChecksConfig {
  contentFilter?: GuardrailChecksContentFilterConfig;
  promptAttack?: GuardrailChecksPromptAttackConfig;
  sensitiveInformation?: GuardrailChecksSensitiveInformationConfig;
}
const GuardrailChecksConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    contentFilter: S.optional(GuardrailChecksContentFilterConfig),
    promptAttack: S.optional(GuardrailChecksPromptAttackConfig),
    sensitiveInformation: S.optional(GuardrailChecksSensitiveInformationConfig),
  }),
).annotate({ identifier: "GuardrailChecksConfig" }) as any as S.Schema<GuardrailChecksConfig>;
export interface InvokeGuardrailChecksRequest {
  messages: GuardrailChecksMessage[];
  checks: GuardrailChecksConfig;
}
const InvokeGuardrailChecksRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ messages: GuardrailChecksMessageList, checks: GuardrailChecksConfig }).pipe(
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
}) as any as S.Schema<InvokeGuardrailChecksRequest>;
export interface GuardrailChecksContentFilterResultEntry {
  category: GuardrailChecksContentFilterCategory;
  severityScore: number;
}
const GuardrailChecksContentFilterResultEntry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ category: GuardrailChecksContentFilterCategory, severityScore: S.Number }),
).annotate({
  identifier: "GuardrailChecksContentFilterResultEntry",
}) as any as S.Schema<GuardrailChecksContentFilterResultEntry>;
export type GuardrailChecksContentFilterResultList = GuardrailChecksContentFilterResultEntry[];
const GuardrailChecksContentFilterResultList = /*@__PURE__*/ S.Array(
  GuardrailChecksContentFilterResultEntry,
);
export interface GuardrailChecksContentFilterResult {
  results: GuardrailChecksContentFilterResultEntry[];
}
const GuardrailChecksContentFilterResult = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ results: GuardrailChecksContentFilterResultList }),
).annotate({
  identifier: "GuardrailChecksContentFilterResult",
}) as any as S.Schema<GuardrailChecksContentFilterResult>;
export interface GuardrailChecksPromptAttackResultEntry {
  category: GuardrailChecksPromptAttackCategory;
  severityScore: number;
}
export type GuardrailChecksPromptAttackResultList = GuardrailChecksPromptAttackResultEntry[];
export interface GuardrailChecksPromptAttackResult {
  results: GuardrailChecksPromptAttackResultEntry[];
}
const GuardrailChecksPromptAttackResult =
  GuardrailChecksContentFilterResult as any as S.Schema<GuardrailChecksPromptAttackResult>;
export interface GuardrailChecksSensitiveInformationResultEntry {
  type: GuardrailChecksSensitiveInformationEntityType;
  confidenceScore: number;
  beginOffset: number;
  endOffset: number;
  messageIndex: number;
  contentIndex: number;
}
const GuardrailChecksSensitiveInformationResultEntry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: GuardrailChecksSensitiveInformationEntityType,
    confidenceScore: S.Number,
    beginOffset: S.Number,
    endOffset: S.Number,
    messageIndex: S.Number,
    contentIndex: S.Number,
  }),
).annotate({
  identifier: "GuardrailChecksSensitiveInformationResultEntry",
}) as any as S.Schema<GuardrailChecksSensitiveInformationResultEntry>;
export type GuardrailChecksSensitiveInformationResultList =
  GuardrailChecksSensitiveInformationResultEntry[];
const GuardrailChecksSensitiveInformationResultList = /*@__PURE__*/ S.Array(
  GuardrailChecksSensitiveInformationResultEntry,
);
export interface GuardrailChecksSensitiveInformationResult {
  results: GuardrailChecksSensitiveInformationResultEntry[];
  truncated?: boolean;
}
const GuardrailChecksSensitiveInformationResult = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    results: GuardrailChecksSensitiveInformationResultList,
    truncated: S.optional(S.Boolean),
  }),
).annotate({
  identifier: "GuardrailChecksSensitiveInformationResult",
}) as any as S.Schema<GuardrailChecksSensitiveInformationResult>;
export interface GuardrailChecksResults {
  contentFilter?: GuardrailChecksContentFilterResult;
  promptAttack?: GuardrailChecksPromptAttackResult;
  sensitiveInformation?: GuardrailChecksSensitiveInformationResult;
}
const GuardrailChecksResults = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    contentFilter: S.optional(GuardrailChecksContentFilterResult),
    promptAttack: S.optional(GuardrailChecksPromptAttackResult),
    sensitiveInformation: S.optional(GuardrailChecksSensitiveInformationResult),
  }),
).annotate({ identifier: "GuardrailChecksResults" }) as any as S.Schema<GuardrailChecksResults>;
export interface GuardrailChecksContentFilterUsage {
  textUnits: number;
}
const GuardrailChecksContentFilterUsage = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ textUnits: S.Number }),
).annotate({
  identifier: "GuardrailChecksContentFilterUsage",
}) as any as S.Schema<GuardrailChecksContentFilterUsage>;
export interface GuardrailChecksPromptAttackUsage {
  textUnits: number;
}
const GuardrailChecksPromptAttackUsage =
  GuardrailChecksContentFilterUsage as any as S.Schema<GuardrailChecksPromptAttackUsage>;
export interface GuardrailChecksSensitiveInformationUsage {
  textUnits: number;
}
const GuardrailChecksSensitiveInformationUsage =
  GuardrailChecksContentFilterUsage as any as S.Schema<GuardrailChecksSensitiveInformationUsage>;
export interface GuardrailChecksUsageResults {
  contentFilter?: GuardrailChecksContentFilterUsage;
  promptAttack?: GuardrailChecksPromptAttackUsage;
  sensitiveInformation?: GuardrailChecksSensitiveInformationUsage;
}
const GuardrailChecksUsageResults = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    contentFilter: S.optional(GuardrailChecksContentFilterUsage),
    promptAttack: S.optional(GuardrailChecksPromptAttackUsage),
    sensitiveInformation: S.optional(GuardrailChecksSensitiveInformationUsage),
  }),
).annotate({
  identifier: "GuardrailChecksUsageResults",
}) as any as S.Schema<GuardrailChecksUsageResults>;
export interface InvokeGuardrailChecksResponse {
  results: GuardrailChecksResults;
  usage: GuardrailChecksUsageResults;
}
const InvokeGuardrailChecksResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ results: GuardrailChecksResults, usage: GuardrailChecksUsageResults }),
).annotate({
  identifier: "InvokeGuardrailChecksResponse",
}) as any as S.Schema<InvokeGuardrailChecksResponse>;
export type MimeType = string;
export type InvokeModelIdentifier = string;
export type Trace = "ENABLED" | "DISABLED" | "ENABLED_FULL" | (string & {});
const Trace = S.String;

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
const InvokeModelRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    body: S.optional(T.StreamingInput).pipe(T.HttpPayload()),
    contentType: S.optional(S.String).pipe(T.HttpHeader("Content-Type")),
    accept: S.optional(S.String).pipe(T.HttpHeader("Accept")),
    modelId: S.String.pipe(T.HttpLabel("modelId")),
    trace: S.optional(Trace).pipe(T.HttpHeader("X-Amzn-Bedrock-Trace")),
    guardrailIdentifier: S.optional(S.String).pipe(
      T.HttpHeader("X-Amzn-Bedrock-GuardrailIdentifier"),
    ),
    guardrailVersion: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Bedrock-GuardrailVersion")),
    performanceConfigLatency: S.optional(PerformanceConfigLatency).pipe(
      T.HttpHeader("X-Amzn-Bedrock-PerformanceConfig-Latency"),
    ),
    serviceTier: S.optional(ServiceTierType).pipe(T.HttpHeader("X-Amzn-Bedrock-Service-Tier")),
    requestMetadata: S.optional(SensitiveString).pipe(
      T.HttpHeader("X-Amzn-Bedrock-Request-Metadata"),
    ),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/model/{modelId}/invoke" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "InvokeModelRequest" }) as any as S.Schema<InvokeModelRequest>;
export interface InvokeModelResponse {
  body: T.StreamingOutputBody;
  contentType: string;
  performanceConfigLatency?: PerformanceConfigLatency;
  serviceTier?: ServiceTierType;
}
const InvokeModelResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    body: T.StreamingOutput.pipe(T.HttpPayload()),
    contentType: S.String.pipe(T.HttpHeader("Content-Type")),
    performanceConfigLatency: S.optional(PerformanceConfigLatency).pipe(
      T.HttpHeader("X-Amzn-Bedrock-PerformanceConfig-Latency"),
    ),
    serviceTier: S.optional(ServiceTierType).pipe(T.HttpHeader("X-Amzn-Bedrock-Service-Tier")),
  }),
).annotate({ identifier: "InvokeModelResponse" }) as any as S.Schema<InvokeModelResponse>;
export type PartBody = Uint8Array | redacted.Redacted<Uint8Array>;
export interface BidirectionalInputPayloadPart {
  bytes?: Uint8Array | redacted.Redacted<Uint8Array>;
}
const BidirectionalInputPayloadPart = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ bytes: S.optional(SensitiveBlob) }),
).annotate({
  identifier: "BidirectionalInputPayloadPart",
}) as any as S.Schema<BidirectionalInputPayloadPart>;
export type InvokeModelWithBidirectionalStreamInput = { chunk: BidirectionalInputPayloadPart };
const InvokeModelWithBidirectionalStreamInput = /*@__PURE__*/ T.InputEventStream(
  /*@__PURE__*/ S.Union([/*@__PURE__*/ S.Struct({ chunk: BidirectionalInputPayloadPart })]),
) as any as S.Schema<stream.Stream<InvokeModelWithBidirectionalStreamInput, Error, never>>;
export interface InvokeModelWithBidirectionalStreamRequest {
  modelId: string;
  body: stream.Stream<InvokeModelWithBidirectionalStreamInput, Error, never>;
}
const InvokeModelWithBidirectionalStreamRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    modelId: S.String.pipe(T.HttpLabel("modelId")),
    body: InvokeModelWithBidirectionalStreamInput.pipe(T.HttpPayload()),
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
}) as any as S.Schema<InvokeModelWithBidirectionalStreamRequest>;
export interface BidirectionalOutputPayloadPart {
  bytes?: Uint8Array | redacted.Redacted<Uint8Array>;
}
const BidirectionalOutputPayloadPart =
  BidirectionalInputPayloadPart as any as S.Schema<BidirectionalOutputPayloadPart>;
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
const InvokeModelWithBidirectionalStreamOutput = /*@__PURE__*/ T.EventStream(
  /*@__PURE__*/ S.Union([
    /*@__PURE__*/ S.Struct({ chunk: BidirectionalOutputPayloadPart }),
    /*@__PURE__*/ S.Struct({
      internalServerException: /*@__PURE__*/ S.suspend(() => InternalServerException).annotate({
        identifier: "InternalServerException",
      }),
    }),
    /*@__PURE__*/ S.Struct({
      modelStreamErrorException: /*@__PURE__*/ S.suspend(() => ModelStreamErrorException).annotate({
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
) as any as S.Schema<stream.Stream<InvokeModelWithBidirectionalStreamOutput, Error, never>>;
export interface InvokeModelWithBidirectionalStreamResponse {
  body: stream.Stream<InvokeModelWithBidirectionalStreamOutput, Error, never>;
}
const InvokeModelWithBidirectionalStreamResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ body: InvokeModelWithBidirectionalStreamOutput.pipe(T.HttpPayload()) }),
).annotate({
  identifier: "InvokeModelWithBidirectionalStreamResponse",
}) as any as S.Schema<InvokeModelWithBidirectionalStreamResponse>;
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
const InvokeModelWithResponseStreamRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    body: S.optional(T.StreamingInput).pipe(T.HttpPayload()),
    contentType: S.optional(S.String).pipe(T.HttpHeader("Content-Type")),
    accept: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Bedrock-Accept")),
    modelId: S.String.pipe(T.HttpLabel("modelId")),
    trace: S.optional(Trace).pipe(T.HttpHeader("X-Amzn-Bedrock-Trace")),
    guardrailIdentifier: S.optional(S.String).pipe(
      T.HttpHeader("X-Amzn-Bedrock-GuardrailIdentifier"),
    ),
    guardrailVersion: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Bedrock-GuardrailVersion")),
    performanceConfigLatency: S.optional(PerformanceConfigLatency).pipe(
      T.HttpHeader("X-Amzn-Bedrock-PerformanceConfig-Latency"),
    ),
    serviceTier: S.optional(ServiceTierType).pipe(T.HttpHeader("X-Amzn-Bedrock-Service-Tier")),
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
}) as any as S.Schema<InvokeModelWithResponseStreamRequest>;
export interface PayloadPart {
  bytes?: Uint8Array | redacted.Redacted<Uint8Array>;
}
const PayloadPart = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ bytes: S.optional(SensitiveBlob) }),
).annotate({ identifier: "PayloadPart" }) as any as S.Schema<PayloadPart>;
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
const ResponseStream = /*@__PURE__*/ T.EventStream(
  /*@__PURE__*/ S.Union([
    /*@__PURE__*/ S.Struct({ chunk: PayloadPart }),
    /*@__PURE__*/ S.Struct({
      internalServerException: /*@__PURE__*/ S.suspend(() => InternalServerException).annotate({
        identifier: "InternalServerException",
      }),
    }),
    /*@__PURE__*/ S.Struct({
      modelStreamErrorException: /*@__PURE__*/ S.suspend(() => ModelStreamErrorException).annotate({
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
) as any as S.Schema<stream.Stream<ResponseStream, Error, never>>;
export interface InvokeModelWithResponseStreamResponse {
  body: stream.Stream<ResponseStream, Error, never>;
  contentType: string;
  performanceConfigLatency?: PerformanceConfigLatency;
  serviceTier?: ServiceTierType;
}
const InvokeModelWithResponseStreamResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    body: ResponseStream.pipe(T.HttpPayload()),
    contentType: S.String.pipe(T.HttpHeader("X-Amzn-Bedrock-Content-Type")),
    performanceConfigLatency: S.optional(PerformanceConfigLatency).pipe(
      T.HttpHeader("X-Amzn-Bedrock-PerformanceConfig-Latency"),
    ),
    serviceTier: S.optional(ServiceTierType).pipe(T.HttpHeader("X-Amzn-Bedrock-Service-Tier")),
  }),
).annotate({
  identifier: "InvokeModelWithResponseStreamResponse",
}) as any as S.Schema<InvokeModelWithResponseStreamResponse>;
export type MaxResults = number;
export type PaginationToken = string;
export type SortAsyncInvocationBy = "SubmissionTime" | (string & {});
const SortAsyncInvocationBy = S.String;

export type SortOrder = "Ascending" | "Descending" | (string & {});
const SortOrder = S.String;

export interface ListAsyncInvokesRequest {
  submitTimeAfter?: Date;
  submitTimeBefore?: Date;
  statusEquals?: AsyncInvokeStatus;
  maxResults?: number;
  nextToken?: string;
  sortBy?: SortAsyncInvocationBy;
  sortOrder?: SortOrder;
}
const ListAsyncInvokesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    submitTimeAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
      T.HttpQuery("submitTimeAfter"),
    ),
    submitTimeBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
      T.HttpQuery("submitTimeBefore"),
    ),
    statusEquals: S.optional(AsyncInvokeStatus).pipe(T.HttpQuery("statusEquals")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    sortBy: S.optional(SortAsyncInvocationBy).pipe(T.HttpQuery("sortBy")),
    sortOrder: S.optional(SortOrder).pipe(T.HttpQuery("sortOrder")),
  }).pipe(T.all(T.Http({ method: "GET", uri: "/async-invoke" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListAsyncInvokesRequest" }) as any as S.Schema<ListAsyncInvokesRequest>;
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
const AsyncInvokeSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    invocationArn: S.String,
    modelArn: S.String,
    clientRequestToken: S.optional(S.String),
    status: S.optional(AsyncInvokeStatus),
    failureMessage: S.optional(SensitiveString),
    submitTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    lastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
    endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
    outputDataConfig: AsyncInvokeOutputDataConfig,
  }),
).annotate({ identifier: "AsyncInvokeSummary" }) as any as S.Schema<AsyncInvokeSummary>;
export type AsyncInvokeSummaries = AsyncInvokeSummary[];
const AsyncInvokeSummaries = /*@__PURE__*/ S.Array(AsyncInvokeSummary);
export interface ListAsyncInvokesResponse {
  nextToken?: string;
  asyncInvokeSummaries?: AsyncInvokeSummary[];
}
const ListAsyncInvokesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String),
    asyncInvokeSummaries: S.optional(AsyncInvokeSummaries),
  }),
).annotate({ identifier: "ListAsyncInvokesResponse" }) as any as S.Schema<ListAsyncInvokesResponse>;
export type AsyncInvokeIdentifier = string;
export type ModelInputPayload = unknown;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
const Tag = /*@__PURE__*/ S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
  identifier: "Tag",
}) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ S.Array(Tag);
export interface StartAsyncInvokeRequest {
  clientRequestToken?: string;
  modelId: string;
  modelInput: any;
  outputDataConfig: AsyncInvokeOutputDataConfig;
  tags?: Tag[];
}
const StartAsyncInvokeRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    modelId: S.String,
    modelInput: S.Any,
    outputDataConfig: AsyncInvokeOutputDataConfig,
    tags: S.optional(TagList),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/async-invoke" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "StartAsyncInvokeRequest" }) as any as S.Schema<StartAsyncInvokeRequest>;
export interface StartAsyncInvokeResponse {
  invocationArn: string;
}
const StartAsyncInvokeResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ invocationArn: S.String }),
).annotate({ identifier: "StartAsyncInvokeResponse" }) as any as S.Schema<StartAsyncInvokeResponse>;
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
  input: ApplyGuardrailRequest,
  output: ApplyGuardrailResponse,
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
  input: ConverseRequest,
  output: ConverseResponse,
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
  input: ConverseStreamRequest,
  output: ConverseStreamResponse,
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
  input: CountTokensRequest,
  output: CountTokensResponse,
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
  input: GetAsyncInvokeRequest,
  output: GetAsyncInvokeResponse,
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
  input: InvokeGuardrailChecksRequest,
  output: InvokeGuardrailChecksResponse,
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
  input: InvokeModelRequest,
  output: InvokeModelResponse,
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
  input: InvokeModelWithBidirectionalStreamRequest,
  output: InvokeModelWithBidirectionalStreamResponse,
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
  input: InvokeModelWithResponseStreamRequest,
  output: InvokeModelWithResponseStreamResponse,
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
  input: ListAsyncInvokesRequest,
  output: ListAsyncInvokesResponse,
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
  input: StartAsyncInvokeRequest,
  output: StartAsyncInvokeResponse,
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
