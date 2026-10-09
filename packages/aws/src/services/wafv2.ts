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
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const ns = /*@__PURE__*/ T.XmlNamespace("http://waf.amazonaws.com/doc/2019-07-29/");
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "WAFV2", serviceShapeName: "AWSWAF_20190729" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "wafv2" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-07-29");
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
              `https://wafv2-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://wafv2-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://wafv2.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://wafv2.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class WAFAssociatedItemException
  extends /*@__PURE__*/ S.TaggedError<WAFAssociatedItemException>()("WAFAssociatedItemException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class WAFConfigurationWarningException
  extends /*@__PURE__*/ S.TaggedError<WAFConfigurationWarningException>()(
    "WAFConfigurationWarningException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class WAFDuplicateItemException
  extends /*@__PURE__*/ S.TaggedError<WAFDuplicateItemException>()("WAFDuplicateItemException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class WAFExpiredManagedRuleGroupVersionException
  extends /*@__PURE__*/ S.TaggedError<WAFExpiredManagedRuleGroupVersionException>()(
    "WAFExpiredManagedRuleGroupVersionException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class WAFFeatureNotIncludedInPricingPlanException
  extends /*@__PURE__*/ S.TaggedError<WAFFeatureNotIncludedInPricingPlanException>()(
    "WAFFeatureNotIncludedInPricingPlanException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      DisallowedFeatures: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(272)).annotate({
          identifier: "DisallowedFeatures",
        }),
      ),
    },
  ) {}
export class WAFInternalErrorException
  extends /*@__PURE__*/ S.TaggedError<WAFInternalErrorException>()("WAFInternalErrorException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withServerError) {}
export class WAFInvalidOperationException
  extends /*@__PURE__*/ S.TaggedError<WAFInvalidOperationException>()(
    "WAFInvalidOperationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class WAFInvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<WAFInvalidParameterException>()(
    "WAFInvalidParameterException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Field: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({
          identifier: "ParameterExceptionField",
        }),
      ),
      Parameter: /*@__PURE__*/ S.optional(S.String),
      Reason: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class WAFInvalidPermissionPolicyException
  extends /*@__PURE__*/ S.TaggedError<WAFInvalidPermissionPolicyException>()(
    "WAFInvalidPermissionPolicyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class WAFInvalidResourceException
  extends /*@__PURE__*/ S.TaggedError<WAFInvalidResourceException>()(
    "WAFInvalidResourceException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class WAFLimitsExceededException
  extends /*@__PURE__*/ S.TaggedError<WAFLimitsExceededException>()("WAFLimitsExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    SourceType: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class WAFLogDestinationPermissionIssueException
  extends /*@__PURE__*/ S.TaggedError<WAFLogDestinationPermissionIssueException>()(
    "WAFLogDestinationPermissionIssueException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class WAFNonexistentItemException
  extends /*@__PURE__*/ S.TaggedError<WAFNonexistentItemException>()(
    "WAFNonexistentItemException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class WAFOptimisticLockException
  extends /*@__PURE__*/ S.TaggedError<WAFOptimisticLockException>()("WAFOptimisticLockException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class WAFServiceLinkedRoleErrorException
  extends /*@__PURE__*/ S.TaggedError<WAFServiceLinkedRoleErrorException>()(
    "WAFServiceLinkedRoleErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class WAFSubscriptionNotFoundException
  extends /*@__PURE__*/ S.TaggedError<WAFSubscriptionNotFoundException>()(
    "WAFSubscriptionNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class WAFTagOperationException
  extends /*@__PURE__*/ S.TaggedError<WAFTagOperationException>()("WAFTagOperationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class WAFTagOperationInternalErrorException
  extends /*@__PURE__*/ S.TaggedError<WAFTagOperationInternalErrorException>()(
    "WAFTagOperationInternalErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withServerError) {}
export class WAFUnavailableEntityException
  extends /*@__PURE__*/ S.TaggedError<WAFUnavailableEntityException>()(
    "WAFUnavailableEntityException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class WAFUnsupportedAggregateKeyTypeException
  extends /*@__PURE__*/ S.TaggedError<WAFUnsupportedAggregateKeyTypeException>()(
    "WAFUnsupportedAggregateKeyTypeException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export type ResourceArn = string;
export interface AssociateWebACLRequest {
  WebACLArn: string;
  ResourceArn: string;
}
export interface AssociateWebACLResponse {}
export type Scope = "CLOUDFRONT" | "REGIONAL" | (string & {});
export type EntityName = string;
export type RulePriority = number;
export type SearchString = Uint8Array;
export type FieldToMatchData = string;
export interface SingleHeader {
  Name: string;
}
export interface SingleQueryArgument {
  Name: string;
}
export interface AllQueryArguments {}
export interface UriPath {}
export interface QueryString {}
export type OversizeHandling = "CONTINUE" | "MATCH" | "NO_MATCH" | (string & {});
export interface Body {
  OversizeHandling?: OversizeHandling;
}
export interface Method {}
export interface All {}
export type JsonPointerPath = string;
export type JsonPointerPaths = string[];
export interface JsonMatchPattern {
  All?: All;
  IncludedPaths?: string[];
}
export type JsonMatchScope = "ALL" | "KEY" | "VALUE" | (string & {});
export type BodyParsingFallbackBehavior =
  | "MATCH"
  | "NO_MATCH"
  | "EVALUATE_AS_STRING"
  | (string & {});
export interface JsonBody {
  MatchPattern: JsonMatchPattern;
  MatchScope: JsonMatchScope;
  InvalidFallbackBehavior?: BodyParsingFallbackBehavior;
  OversizeHandling?: OversizeHandling;
}
export type HeaderNames = string[];
export interface HeaderMatchPattern {
  All?: All;
  IncludedHeaders?: string[];
  ExcludedHeaders?: string[];
}
export type MapMatchScope = "ALL" | "KEY" | "VALUE" | (string & {});
export interface Headers {
  MatchPattern: HeaderMatchPattern;
  MatchScope: MapMatchScope;
  OversizeHandling: OversizeHandling;
}
export type SingleCookieName = string;
export type CookieNames = string[];
export interface CookieMatchPattern {
  All?: All;
  IncludedCookies?: string[];
  ExcludedCookies?: string[];
}
export interface Cookies {
  MatchPattern: CookieMatchPattern;
  MatchScope: MapMatchScope;
  OversizeHandling: OversizeHandling;
}
export interface HeaderOrder {
  OversizeHandling: OversizeHandling;
}
export type FallbackBehavior = "MATCH" | "NO_MATCH" | (string & {});
export interface JA3Fingerprint {
  FallbackBehavior: FallbackBehavior;
}
export interface JA4Fingerprint {
  FallbackBehavior: FallbackBehavior;
}
export interface UriFragment {
  FallbackBehavior?: FallbackBehavior;
}
export interface FieldToMatch {
  SingleHeader?: SingleHeader;
  SingleQueryArgument?: SingleQueryArgument;
  AllQueryArguments?: AllQueryArguments;
  UriPath?: UriPath;
  QueryString?: QueryString;
  Body?: Body;
  Method?: Method;
  JsonBody?: JsonBody;
  Headers?: Headers;
  Cookies?: Cookies;
  HeaderOrder?: HeaderOrder;
  JA3Fingerprint?: JA3Fingerprint;
  JA4Fingerprint?: JA4Fingerprint;
  UriFragment?: UriFragment;
}
export type TextTransformationPriority = number;
export type TextTransformationType =
  | "NONE"
  | "COMPRESS_WHITE_SPACE"
  | "HTML_ENTITY_DECODE"
  | "LOWERCASE"
  | "CMD_LINE"
  | "URL_DECODE"
  | "BASE64_DECODE"
  | "HEX_DECODE"
  | "MD5"
  | "REPLACE_COMMENTS"
  | "ESCAPE_SEQ_DECODE"
  | "SQL_HEX_DECODE"
  | "CSS_DECODE"
  | "JS_DECODE"
  | "NORMALIZE_PATH"
  | "NORMALIZE_PATH_WIN"
  | "REMOVE_NULLS"
  | "REPLACE_NULLS"
  | "BASE64_DECODE_EXT"
  | "URL_DECODE_UNI"
  | "UTF8_TO_UNICODE"
  | "REMOVE_WHITESPACE"
  | "TRIM"
  | "TRIM_LEFT"
  | "TRIM_RIGHT"
  | "REMOVE_COMMENTS_CHAR"
  | "UPPERCASE"
  | "CMD_LINE_WIN"
  | "CMD_LINE_UNIX"
  | "JS_DECODE_EXT"
  | "SHA256"
  | (string & {});
export interface TextTransformation {
  Priority: number;
  Type: TextTransformationType;
}
export type TextTransformations = TextTransformation[];
export type PreParseTextTransformationPriority = number;
export type PreParseTextTransformationType =
  | "NONE"
  | "URL_DECODE"
  | "URL_DECODE_UNI"
  | "COMBINE_DUPLICATE_QUERY_ARGS_BY_COMMA"
  | "REPLACE_SEMICOLONS_WITH_AMPERSANDS"
  | (string & {});
export interface PreParseTextTransformation {
  Priority: number;
  Type: PreParseTextTransformationType;
}
export type PreParseTextTransformations = PreParseTextTransformation[];
export type PositionalConstraint =
  | "EXACTLY"
  | "STARTS_WITH"
  | "ENDS_WITH"
  | "CONTAINS"
  | "CONTAINS_WORD"
  | (string & {});
export interface ByteMatchStatement {
  SearchString: Uint8Array;
  FieldToMatch: FieldToMatch;
  TextTransformations: TextTransformation[];
  PreParseTextTransformations?: PreParseTextTransformation[];
  PositionalConstraint: PositionalConstraint;
}
export type SensitivityLevel = "LOW" | "HIGH" | (string & {});
export interface SqliMatchStatement {
  FieldToMatch: FieldToMatch;
  TextTransformations: TextTransformation[];
  PreParseTextTransformations?: PreParseTextTransformation[];
  SensitivityLevel?: SensitivityLevel;
}
export interface XssMatchStatement {
  FieldToMatch: FieldToMatch;
  TextTransformations: TextTransformation[];
  PreParseTextTransformations?: PreParseTextTransformation[];
}
export type ComparisonOperator = "EQ" | "NE" | "LE" | "LT" | "GE" | "GT" | (string & {});
export type Size = number;
export interface SizeConstraintStatement {
  FieldToMatch: FieldToMatch;
  ComparisonOperator: ComparisonOperator;
  Size: number;
  TextTransformations: TextTransformation[];
  PreParseTextTransformations?: PreParseTextTransformation[];
}
export type CountryCode =
  | "AF"
  | "AX"
  | "AL"
  | "DZ"
  | "AS"
  | "AD"
  | "AO"
  | "AI"
  | "AQ"
  | "AG"
  | "AR"
  | "AM"
  | "AW"
  | "AU"
  | "AT"
  | "AZ"
  | "BS"
  | "BH"
  | "BD"
  | "BB"
  | "BY"
  | "BE"
  | "BZ"
  | "BJ"
  | "BM"
  | "BT"
  | "BO"
  | "BQ"
  | "BA"
  | "BW"
  | "BV"
  | "BR"
  | "IO"
  | "BN"
  | "BG"
  | "BF"
  | "BI"
  | "KH"
  | "CM"
  | "CA"
  | "CV"
  | "KY"
  | "CF"
  | "TD"
  | "CL"
  | "CN"
  | "CX"
  | "CC"
  | "CO"
  | "KM"
  | "CG"
  | "CD"
  | "CK"
  | "CR"
  | "CI"
  | "HR"
  | "CU"
  | "CW"
  | "CY"
  | "CZ"
  | "DK"
  | "DJ"
  | "DM"
  | "DO"
  | "EC"
  | "EG"
  | "SV"
  | "GQ"
  | "ER"
  | "EE"
  | "ET"
  | "FK"
  | "FO"
  | "FJ"
  | "FI"
  | "FR"
  | "GF"
  | "PF"
  | "TF"
  | "GA"
  | "GM"
  | "GE"
  | "DE"
  | "GH"
  | "GI"
  | "GR"
  | "GL"
  | "GD"
  | "GP"
  | "GU"
  | "GT"
  | "GG"
  | "GN"
  | "GW"
  | "GY"
  | "HT"
  | "HM"
  | "VA"
  | "HN"
  | "HK"
  | "HU"
  | "IS"
  | "IN"
  | "ID"
  | "IR"
  | "IQ"
  | "IE"
  | "IM"
  | "IL"
  | "IT"
  | "JM"
  | "JP"
  | "JE"
  | "JO"
  | "KZ"
  | "KE"
  | "KI"
  | "KP"
  | "KR"
  | "KW"
  | "KG"
  | "LA"
  | "LV"
  | "LB"
  | "LS"
  | "LR"
  | "LY"
  | "LI"
  | "LT"
  | "LU"
  | "MO"
  | "MK"
  | "MG"
  | "MW"
  | "MY"
  | "MV"
  | "ML"
  | "MT"
  | "MH"
  | "MQ"
  | "MR"
  | "MU"
  | "YT"
  | "MX"
  | "FM"
  | "MD"
  | "MC"
  | "MN"
  | "ME"
  | "MS"
  | "MA"
  | "MZ"
  | "MM"
  | "NA"
  | "NR"
  | "NP"
  | "NL"
  | "NC"
  | "NZ"
  | "NI"
  | "NE"
  | "NG"
  | "NU"
  | "NF"
  | "MP"
  | "NO"
  | "OM"
  | "PK"
  | "PW"
  | "PS"
  | "PA"
  | "PG"
  | "PY"
  | "PE"
  | "PH"
  | "PN"
  | "PL"
  | "PT"
  | "PR"
  | "QA"
  | "RE"
  | "RO"
  | "RU"
  | "RW"
  | "BL"
  | "SH"
  | "KN"
  | "LC"
  | "MF"
  | "PM"
  | "VC"
  | "WS"
  | "SM"
  | "ST"
  | "SA"
  | "SN"
  | "RS"
  | "SC"
  | "SL"
  | "SG"
  | "SX"
  | "SK"
  | "SI"
  | "SB"
  | "SO"
  | "ZA"
  | "GS"
  | "SS"
  | "ES"
  | "LK"
  | "SD"
  | "SR"
  | "SJ"
  | "SZ"
  | "SE"
  | "CH"
  | "SY"
  | "TW"
  | "TJ"
  | "TZ"
  | "TH"
  | "TL"
  | "TG"
  | "TK"
  | "TO"
  | "TT"
  | "TN"
  | "TR"
  | "TM"
  | "TC"
  | "TV"
  | "UG"
  | "UA"
  | "AE"
  | "GB"
  | "US"
  | "UM"
  | "UY"
  | "UZ"
  | "VU"
  | "VE"
  | "VN"
  | "VG"
  | "VI"
  | "WF"
  | "EH"
  | "YE"
  | "ZM"
  | "ZW"
  | "XK"
  | (string & {});
export type CountryCodes = CountryCode[];
export type ForwardedIPHeaderName = string;
export interface ForwardedIPConfig {
  HeaderName: string;
  FallbackBehavior: FallbackBehavior;
}
export interface GeoMatchStatement {
  CountryCodes?: CountryCode[];
  ForwardedIPConfig?: ForwardedIPConfig;
}
export interface ExcludedRule {
  Name: string;
}
export type ExcludedRules = ExcludedRule[];
export type ResponseStatusCode = number;
export type CustomHTTPHeaderName = string;
export type CustomHTTPHeaderValue = string;
export interface CustomHTTPHeader {
  Name: string;
  Value: string;
}
export type CustomHTTPHeaders = CustomHTTPHeader[];
export interface CustomResponse {
  ResponseCode: number;
  CustomResponseBodyKey?: string;
  ResponseHeaders?: CustomHTTPHeader[];
}
export interface BlockAction {
  CustomResponse?: CustomResponse;
}
export interface CustomRequestHandling {
  InsertHeaders: CustomHTTPHeader[];
}
export interface AllowAction {
  CustomRequestHandling?: CustomRequestHandling;
}
export interface CountAction {
  CustomRequestHandling?: CustomRequestHandling;
}
export interface CaptchaAction {
  CustomRequestHandling?: CustomRequestHandling;
}
export interface ChallengeAction {
  CustomRequestHandling?: CustomRequestHandling;
}
export type PriceMultiplier = string;
export interface MonetizeAction {
  PriceMultiplier?: string;
}
export interface RuleAction {
  Block?: BlockAction;
  Allow?: AllowAction;
  Count?: CountAction;
  Captcha?: CaptchaAction;
  Challenge?: ChallengeAction;
  Monetize?: MonetizeAction;
}
export interface RuleActionOverride {
  Name: string;
  ActionToUse: RuleAction;
}
export type RuleActionOverrides = RuleActionOverride[];
export interface RuleGroupReferenceStatement {
  ARN: string;
  ExcludedRules?: ExcludedRule[];
  RuleActionOverrides?: RuleActionOverride[];
}
export type ForwardedIPPosition = "FIRST" | "LAST" | "ANY" | (string & {});
export interface IPSetForwardedIPConfig {
  HeaderName: string;
  FallbackBehavior: FallbackBehavior;
  Position: ForwardedIPPosition;
}
export interface IPSetReferenceStatement {
  ARN: string;
  IPSetForwardedIPConfig?: IPSetForwardedIPConfig;
}
export interface RegexPatternSetReferenceStatement {
  ARN: string;
  FieldToMatch: FieldToMatch;
  TextTransformations: TextTransformation[];
  PreParseTextTransformations?: PreParseTextTransformation[];
}
export type RateLimit = number;
export type EvaluationWindowSec = number;
export type RateBasedStatementAggregateKeyType =
  | "IP"
  | "FORWARDED_IP"
  | "CUSTOM_KEYS"
  | "CONSTANT"
  | (string & {});
export interface RateLimitHeader {
  Name: string;
  TextTransformations: TextTransformation[];
}
export interface RateLimitCookie {
  Name: string;
  TextTransformations: TextTransformation[];
}
export interface RateLimitQueryArgument {
  Name: string;
  TextTransformations: TextTransformation[];
}
export interface RateLimitQueryString {
  TextTransformations: TextTransformation[];
}
export interface RateLimitHTTPMethod {}
export interface RateLimitForwardedIP {}
export interface RateLimitIP {}
export type LabelNamespace = string;
export interface RateLimitLabelNamespace {
  Namespace: string;
}
export interface RateLimitUriPath {
  TextTransformations: TextTransformation[];
}
export interface RateLimitJA3Fingerprint {
  FallbackBehavior: FallbackBehavior;
}
export interface RateLimitJA4Fingerprint {
  FallbackBehavior: FallbackBehavior;
}
export interface RateLimitAsn {}
export interface RateBasedStatementCustomKey {
  Header?: RateLimitHeader;
  Cookie?: RateLimitCookie;
  QueryArgument?: RateLimitQueryArgument;
  QueryString?: RateLimitQueryString;
  HTTPMethod?: RateLimitHTTPMethod;
  ForwardedIP?: RateLimitForwardedIP;
  IP?: RateLimitIP;
  LabelNamespace?: RateLimitLabelNamespace;
  UriPath?: RateLimitUriPath;
  JA3Fingerprint?: RateLimitJA3Fingerprint;
  JA4Fingerprint?: RateLimitJA4Fingerprint;
  ASN?: RateLimitAsn;
}
export type RateBasedStatementCustomKeys = RateBasedStatementCustomKey[];
export interface RateBasedStatement {
  Limit: number;
  EvaluationWindowSec?: number;
  AggregateKeyType: RateBasedStatementAggregateKeyType;
  ScopeDownStatement?: Statement;
  ForwardedIPConfig?: ForwardedIPConfig;
  CustomKeys?: RateBasedStatementCustomKey[];
}
export type Statements = Statement[];
export interface AndStatement {
  Statements: Statement[];
}
export interface OrStatement {
  Statements: Statement[];
}
export interface NotStatement {
  Statement: Statement;
}
export type VendorName = string;
export type VersionKeyString = string;
export type LoginPathString = string;
export type PayloadType = "JSON" | "FORM_ENCODED" | (string & {});
export type FieldIdentifier = string;
export interface UsernameField {
  Identifier: string;
}
export interface PasswordField {
  Identifier: string;
}
export type InspectionLevel = "COMMON" | "TARGETED" | (string & {});
export type EnableMachineLearning = boolean;
export interface AWSManagedRulesBotControlRuleSet {
  InspectionLevel: InspectionLevel;
  EnableMachineLearning?: boolean;
}
export interface RequestInspection {
  PayloadType: PayloadType;
  UsernameField: UsernameField;
  PasswordField: PasswordField;
}
export type SuccessCode = number;
export type ResponseInspectionStatusCodeSuccessCodes = number[];
export type FailureCode = number;
export type ResponseInspectionStatusCodeFailureCodes = number[];
export interface ResponseInspectionStatusCode {
  SuccessCodes: number[];
  FailureCodes: number[];
}
export type ResponseInspectionHeaderName = string;
export type SuccessValue = string;
export type ResponseInspectionHeaderSuccessValues = string[];
export type FailureValue = string;
export type ResponseInspectionHeaderFailureValues = string[];
export interface ResponseInspectionHeader {
  Name: string;
  SuccessValues: string[];
  FailureValues: string[];
}
export type ResponseInspectionBodyContainsSuccessStrings = string[];
export type ResponseInspectionBodyContainsFailureStrings = string[];
export interface ResponseInspectionBodyContains {
  SuccessStrings: string[];
  FailureStrings: string[];
}
export type ResponseInspectionJsonSuccessValues = string[];
export type ResponseInspectionJsonFailureValues = string[];
export interface ResponseInspectionJson {
  Identifier: string;
  SuccessValues: string[];
  FailureValues: string[];
}
export interface ResponseInspection {
  StatusCode?: ResponseInspectionStatusCode;
  Header?: ResponseInspectionHeader;
  BodyContains?: ResponseInspectionBodyContains;
  Json?: ResponseInspectionJson;
}
export interface AWSManagedRulesATPRuleSet {
  LoginPath: string;
  RequestInspection?: RequestInspection;
  ResponseInspection?: ResponseInspection;
  EnableRegexInPath?: boolean;
}
export type CreationPathString = string;
export type RegistrationPagePathString = string;
export interface EmailField {
  Identifier: string;
}
export interface PhoneNumberField {
  Identifier: string;
}
export type PhoneNumberFields = PhoneNumberField[];
export interface AddressField {
  Identifier: string;
}
export type AddressFields = AddressField[];
export interface RequestInspectionACFP {
  PayloadType: PayloadType;
  UsernameField?: UsernameField;
  PasswordField?: PasswordField;
  EmailField?: EmailField;
  PhoneNumberFields?: PhoneNumberField[];
  AddressFields?: AddressField[];
}
export interface AWSManagedRulesACFPRuleSet {
  CreationPath: string;
  RegistrationPagePath: string;
  RequestInspection: RequestInspectionACFP;
  ResponseInspection?: ResponseInspection;
  EnableRegexInPath?: boolean;
}
export type UsageOfAction = "ENABLED" | "DISABLED" | (string & {});
export type SensitivityToAct = "LOW" | "MEDIUM" | "HIGH" | (string & {});
export type RegexPatternString = string;
export interface Regex {
  RegexString?: string;
}
export type RegularExpressionList = Regex[];
export interface ClientSideAction {
  UsageOfAction: UsageOfAction;
  Sensitivity?: SensitivityToAct;
  ExemptUriRegularExpressions?: Regex[];
}
export interface ClientSideActionConfig {
  Challenge: ClientSideAction;
}
export interface AWSManagedRulesAntiDDoSRuleSet {
  ClientSideActionConfig: ClientSideActionConfig;
  SensitivityToBlock?: SensitivityToAct;
}
export interface ManagedRuleGroupConfig {
  LoginPath?: string;
  PayloadType?: PayloadType;
  UsernameField?: UsernameField;
  PasswordField?: PasswordField;
  AWSManagedRulesBotControlRuleSet?: AWSManagedRulesBotControlRuleSet;
  AWSManagedRulesATPRuleSet?: AWSManagedRulesATPRuleSet;
  AWSManagedRulesACFPRuleSet?: AWSManagedRulesACFPRuleSet;
  AWSManagedRulesAntiDDoSRuleSet?: AWSManagedRulesAntiDDoSRuleSet;
}
export type ManagedRuleGroupConfigs = ManagedRuleGroupConfig[];
export interface ManagedRuleGroupStatement {
  VendorName: string;
  Name: string;
  Version?: string;
  ExcludedRules?: ExcludedRule[];
  ScopeDownStatement?: Statement;
  ManagedRuleGroupConfigs?: ManagedRuleGroupConfig[];
  RuleActionOverrides?: RuleActionOverride[];
}
export type LabelMatchScope = "LABEL" | "NAMESPACE" | (string & {});
export type LabelMatchKey = string;
export interface LabelMatchStatement {
  Scope: LabelMatchScope;
  Key: string;
}
export interface RegexMatchStatement {
  RegexString: string;
  FieldToMatch: FieldToMatch;
  TextTransformations: TextTransformation[];
  PreParseTextTransformations?: PreParseTextTransformation[];
}
export type ASN = number;
export type AsnList = number[];
export interface AsnMatchStatement {
  AsnList: number[];
  ForwardedIPConfig?: ForwardedIPConfig;
}
export interface Statement {
  ByteMatchStatement?: ByteMatchStatement;
  SqliMatchStatement?: SqliMatchStatement;
  XssMatchStatement?: XssMatchStatement;
  SizeConstraintStatement?: SizeConstraintStatement;
  GeoMatchStatement?: GeoMatchStatement;
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
  IPSetReferenceStatement?: IPSetReferenceStatement;
  RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
  RateBasedStatement?: RateBasedStatement;
  AndStatement?: AndStatement;
  OrStatement?: OrStatement;
  NotStatement?: NotStatement;
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
  LabelMatchStatement?: LabelMatchStatement;
  RegexMatchStatement?: RegexMatchStatement;
  AsnMatchStatement?: AsnMatchStatement;
}
export interface NoneAction {}
export interface OverrideAction {
  Count?: CountAction;
  None?: NoneAction;
}
export type LabelName = string;
export interface Label {
  Name: string;
}
export type Labels = Label[];
export type MetricName = string;
export interface VisibilityConfig {
  SampledRequestsEnabled: boolean;
  CloudWatchMetricsEnabled: boolean;
  MetricName: string;
}
export type TimeWindowSecond = number;
export interface ImmunityTimeProperty {
  ImmunityTime: number;
}
export interface CaptchaConfig {
  ImmunityTimeProperty?: ImmunityTimeProperty;
}
export interface ChallengeConfig {
  ImmunityTimeProperty?: ImmunityTimeProperty;
}
export interface Rule {
  Name: string;
  Priority: number;
  Statement: Statement;
  Action?: RuleAction;
  OverrideAction?: OverrideAction;
  RuleLabels?: Label[];
  VisibilityConfig: VisibilityConfig;
  CaptchaConfig?: CaptchaConfig;
  ChallengeConfig?: ChallengeConfig;
}
export type Rules = Rule[];
export interface CheckCapacityRequest {
  Scope: Scope;
  Rules: Rule[];
}
export type ConsumedCapacity = number;
export interface CheckCapacityResponse {
  Capacity?: number;
}
export type TokenDomain = string;
export type APIKeyTokenDomains = string[];
export interface CreateAPIKeyRequest {
  Scope: Scope;
  TokenDomains: string[];
}
export type APIKey = string;
export interface CreateAPIKeyResponse {
  APIKey?: string;
}
export type EntityDescription = string;
export type IPAddressVersion = "IPV4" | "IPV6" | (string & {});
export type IPAddress = string;
export type IPAddresses = string[];
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface CreateIPSetRequest {
  Name: string;
  Scope: Scope;
  Description?: string;
  IPAddressVersion: IPAddressVersion;
  Addresses: string[];
  Tags?: Tag[];
}
export type EntityId = string;
export type LockToken = string;
export interface IPSetSummary {
  Name?: string;
  Id?: string;
  Description?: string;
  LockToken?: string;
  ARN?: string;
}
export interface CreateIPSetResponse {
  Summary?: IPSetSummary;
}
export interface CreateRegexPatternSetRequest {
  Name: string;
  Scope: Scope;
  Description?: string;
  RegularExpressionList: Regex[];
  Tags?: Tag[];
}
export interface RegexPatternSetSummary {
  Name?: string;
  Id?: string;
  Description?: string;
  LockToken?: string;
  ARN?: string;
}
export interface CreateRegexPatternSetResponse {
  Summary?: RegexPatternSetSummary;
}
export type CapacityUnit = number;
export type ResponseContentType = "TEXT_PLAIN" | "TEXT_HTML" | "APPLICATION_JSON" | (string & {});
export type ResponseContent = string;
export interface CustomResponseBody {
  ContentType: ResponseContentType;
  Content: string;
}
export type CustomResponseBodies = { [key: string]: CustomResponseBody | undefined };
export type BlockchainChain = "BASE" | "SOLANA" | "BASE_SEPOLIA" | "SOLANA_DEVNET" | (string & {});
export type WalletAddress = string;
export type PriceAmount = string;
export type CryptoCurrency = "USDC" | (string & {});
export interface Price {
  Amount: string;
  Currency: CryptoCurrency;
}
export type Prices = Price[];
export interface PaymentNetwork {
  Chain: BlockchainChain;
  WalletAddress: string;
  Prices: Price[];
}
export type PaymentNetworks = PaymentNetwork[];
export interface CryptoConfig {
  PaymentNetworks: PaymentNetwork[];
}
export type CurrencyMode = "REAL" | "TEST" | (string & {});
export interface MonetizationConfig {
  CryptoConfig?: CryptoConfig;
  CurrencyMode?: CurrencyMode;
}
export interface CreateRuleGroupRequest {
  Name: string;
  Scope: Scope;
  Capacity: number;
  Description?: string;
  Rules?: Rule[];
  VisibilityConfig: VisibilityConfig;
  Tags?: Tag[];
  CustomResponseBodies?: { [key: string]: CustomResponseBody | undefined };
  MonetizationConfig?: MonetizationConfig;
}
export interface RuleGroupSummary {
  Name?: string;
  Id?: string;
  Description?: string;
  LockToken?: string;
  ARN?: string;
}
export interface CreateRuleGroupResponse {
  Summary?: RuleGroupSummary;
}
export interface DefaultAction {
  Block?: BlockAction;
  Allow?: AllowAction;
}
export type FieldToProtectType =
  | "SINGLE_HEADER"
  | "SINGLE_COOKIE"
  | "SINGLE_QUERY_ARGUMENT"
  | "QUERY_STRING"
  | "BODY"
  | (string & {});
export type FieldToProtectKeyName = string;
export type FieldToProtectKeys = string[];
export interface FieldToProtect {
  FieldType: FieldToProtectType;
  FieldKeys?: string[];
}
export type DataProtectionAction = "SUBSTITUTION" | "HASH" | (string & {});
export interface DataProtection {
  Field: FieldToProtect;
  Action: DataProtectionAction;
  ExcludeRuleMatchDetails?: boolean;
  ExcludeRateBasedDetails?: boolean;
}
export type DataProtections = DataProtection[];
export interface DataProtectionConfig {
  DataProtections: DataProtection[];
}
export type TokenDomains = string[];
export type AssociatedResourceType =
  | "CLOUDFRONT"
  | "API_GATEWAY"
  | "COGNITO_USER_POOL"
  | "APP_RUNNER_SERVICE"
  | "VERIFIED_ACCESS_INSTANCE"
  | "AGENTCORE_GATEWAY"
  | (string & {});
export type SizeInspectionLimit = "KB_16" | "KB_32" | "KB_48" | "KB_64" | (string & {});
export interface RequestBodyAssociatedResourceTypeConfig {
  DefaultSizeInspectionLimit: SizeInspectionLimit;
}
export type RequestBody = {
  [key in AssociatedResourceType]?: RequestBodyAssociatedResourceTypeConfig;
};
export interface AssociationConfig {
  RequestBody?: { [key: string]: RequestBodyAssociatedResourceTypeConfig | undefined };
}
export type LowReputationMode = "ACTIVE_UNDER_DDOS" | "ALWAYS_ON" | (string & {});
export interface OnSourceDDoSProtectionConfig {
  ALBLowReputationMode: LowReputationMode;
}
export type AttributeName = string;
export type AttributeValue = string;
export type AttributeValues = string[];
export interface ApplicationAttribute {
  Name?: string;
  Values?: string[];
}
export type ApplicationAttributes = ApplicationAttribute[];
export interface ApplicationConfig {
  Attributes?: ApplicationAttribute[];
}
export interface CreateWebACLRequest {
  Name: string;
  Scope: Scope;
  DefaultAction: DefaultAction;
  Description?: string;
  Rules?: Rule[];
  VisibilityConfig: VisibilityConfig;
  DataProtectionConfig?: DataProtectionConfig;
  Tags?: Tag[];
  CustomResponseBodies?: { [key: string]: CustomResponseBody | undefined };
  CaptchaConfig?: CaptchaConfig;
  ChallengeConfig?: ChallengeConfig;
  TokenDomains?: string[];
  AssociationConfig?: AssociationConfig;
  OnSourceDDoSProtectionConfig?: OnSourceDDoSProtectionConfig;
  ApplicationConfig?: ApplicationConfig;
  MonetizationConfig?: MonetizationConfig;
}
export interface WebACLSummary {
  Name?: string;
  Id?: string;
  Description?: string;
  LockToken?: string;
  ARN?: string;
}
export interface CreateWebACLResponse {
  Summary?: WebACLSummary;
}
export interface DeleteAPIKeyRequest {
  Scope: Scope;
  APIKey: string;
}
export interface DeleteAPIKeyResponse {}
export interface DeleteFirewallManagerRuleGroupsRequest {
  WebACLArn: string;
  WebACLLockToken: string;
}
export interface DeleteFirewallManagerRuleGroupsResponse {
  NextWebACLLockToken?: string;
}
export interface DeleteIPSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
}
export interface DeleteIPSetResponse {}
export type LogType = "WAF_LOGS" | (string & {});
export type LogScope =
  | "CUSTOMER"
  | "SECURITY_LAKE"
  | "CLOUDWATCH_TELEMETRY_RULE_MANAGED"
  | (string & {});
export interface DeleteLoggingConfigurationRequest {
  ResourceArn: string;
  LogType?: LogType;
  LogScope?: LogScope;
}
export interface DeleteLoggingConfigurationResponse {}
export interface DeletePermissionPolicyRequest {
  ResourceArn: string;
}
export interface DeletePermissionPolicyResponse {}
export interface DeleteRegexPatternSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
}
export interface DeleteRegexPatternSetResponse {}
export interface DeleteRuleGroupRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
}
export interface DeleteRuleGroupResponse {}
export interface DeleteWebACLRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
}
export interface DeleteWebACLResponse {}
export interface DescribeAllManagedProductsRequest {
  Scope: Scope;
}
export type ProductId = string;
export type ProductLink = string;
export type ProductTitle = string;
export type ProductDescription = string;
export interface ManagedProductDescriptor {
  VendorName?: string;
  ManagedRuleSetName?: string;
  ProductId?: string;
  ProductLink?: string;
  ProductTitle?: string;
  ProductDescription?: string;
  SnsTopicArn?: string;
  IsVersioningSupported?: boolean;
  IsAdvancedManagedRuleSet?: boolean;
}
export type ManagedProductDescriptors = ManagedProductDescriptor[];
export interface DescribeAllManagedProductsResponse {
  ManagedProducts?: ManagedProductDescriptor[];
}
export interface DescribeManagedProductsByVendorRequest {
  VendorName: string;
  Scope: Scope;
}
export interface DescribeManagedProductsByVendorResponse {
  ManagedProducts?: ManagedProductDescriptor[];
}
export interface DescribeManagedRuleGroupRequest {
  VendorName: string;
  Name: string;
  Scope: Scope;
  VersionName?: string;
}
export interface RuleSummary {
  Name?: string;
  Action?: RuleAction;
}
export type RuleSummaries = RuleSummary[];
export interface LabelSummary {
  Name?: string;
}
export type LabelSummaries = LabelSummary[];
export interface DescribeManagedRuleGroupResponse {
  VersionName?: string;
  SnsTopicArn?: string;
  Capacity?: number;
  Rules?: RuleSummary[];
  LabelNamespace?: string;
  AvailableLabels?: LabelSummary[];
  ConsumedLabels?: LabelSummary[];
}
export interface DisassociateWebACLRequest {
  ResourceArn: string;
}
export interface DisassociateWebACLResponse {}
export type Platform = "IOS" | "ANDROID" | (string & {});
export interface GenerateMobileSdkReleaseUrlRequest {
  Platform: Platform;
  ReleaseVersion: string;
}
export type DownloadUrl = string;
export interface GenerateMobileSdkReleaseUrlResponse {
  Url?: string;
}
export interface GetDecryptedAPIKeyRequest {
  Scope: Scope;
  APIKey: string;
}
export interface GetDecryptedAPIKeyResponse {
  TokenDomains?: string[];
  CreationTimestamp?: Date;
}
export interface GetIPSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
}
export interface IPSet {
  Name: string;
  Id: string;
  ARN: string;
  Description?: string;
  IPAddressVersion: IPAddressVersion;
  Addresses: string[];
}
export interface GetIPSetResponse {
  IPSet?: IPSet;
  LockToken?: string;
}
export interface GetLoggingConfigurationRequest {
  ResourceArn: string;
  LogType?: LogType;
  LogScope?: LogScope;
}
export type LogDestinationConfigs = string[];
export type RedactedFields = FieldToMatch[];
export type FilterBehavior = "KEEP" | "DROP" | (string & {});
export type FilterRequirement = "MEETS_ALL" | "MEETS_ANY" | (string & {});
export type ActionValue =
  | "ALLOW"
  | "BLOCK"
  | "COUNT"
  | "CAPTCHA"
  | "CHALLENGE"
  | "MONETIZE"
  | "EXCLUDED_AS_COUNT"
  | (string & {});
export interface ActionCondition {
  Action: ActionValue;
}
export interface LabelNameCondition {
  LabelName: string;
}
export interface Condition {
  ActionCondition?: ActionCondition;
  LabelNameCondition?: LabelNameCondition;
}
export type Conditions = Condition[];
export interface Filter {
  Behavior: FilterBehavior;
  Requirement: FilterRequirement;
  Conditions: Condition[];
}
export type Filters = Filter[];
export interface LoggingFilter {
  Filters: Filter[];
  DefaultBehavior: FilterBehavior;
}
export interface LoggingConfiguration {
  ResourceArn: string;
  LogDestinationConfigs: string[];
  RedactedFields?: FieldToMatch[];
  ManagedByFirewallManager?: boolean;
  LoggingFilter?: LoggingFilter;
  LogType?: LogType;
  LogScope?: LogScope;
}
export interface GetLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration;
}
export interface GetManagedRuleSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
}
export type TimeWindowDay = number;
export interface ManagedRuleSetVersion {
  AssociatedRuleGroupArn?: string;
  Capacity?: number;
  ForecastedLifetime?: number;
  PublishTimestamp?: Date;
  LastUpdateTimestamp?: Date;
  ExpiryTimestamp?: Date;
}
export type PublishedVersions = { [key: string]: ManagedRuleSetVersion | undefined };
export interface ManagedRuleSet {
  Name: string;
  Id: string;
  ARN: string;
  Description?: string;
  PublishedVersions?: { [key: string]: ManagedRuleSetVersion | undefined };
  RecommendedVersion?: string;
  LabelNamespace?: string;
}
export interface GetManagedRuleSetResponse {
  ManagedRuleSet?: ManagedRuleSet;
  LockToken?: string;
}
export interface GetMobileSdkReleaseRequest {
  Platform: Platform;
  ReleaseVersion: string;
}
export type ReleaseNotes = string;
export interface MobileSdkRelease {
  ReleaseVersion?: string;
  Timestamp?: Date;
  ReleaseNotes?: string;
  Tags?: Tag[];
}
export interface GetMobileSdkReleaseResponse {
  MobileSdkRelease?: MobileSdkRelease;
}
export interface GetPermissionPolicyRequest {
  ResourceArn: string;
}
export type PolicyString = string;
export interface GetPermissionPolicyResponse {
  Policy?: string;
}
export interface GetRateBasedStatementManagedKeysRequest {
  Scope: Scope;
  WebACLName: string;
  WebACLId: string;
  RuleGroupRuleName?: string;
  RuleName: string;
}
export interface RateBasedStatementManagedKeysIPSet {
  IPAddressVersion?: IPAddressVersion;
  Addresses?: string[];
}
export interface GetRateBasedStatementManagedKeysResponse {
  ManagedKeysIPV4?: RateBasedStatementManagedKeysIPSet;
  ManagedKeysIPV6?: RateBasedStatementManagedKeysIPSet;
}
export interface GetRegexPatternSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
}
export interface RegexPatternSet {
  Name?: string;
  Id?: string;
  ARN?: string;
  Description?: string;
  RegularExpressionList?: Regex[];
}
export interface GetRegexPatternSetResponse {
  RegexPatternSet?: RegexPatternSet;
  LockToken?: string;
}
export type RankingStatisticType =
  | "TOP_SOURCES_BY_REVENUE"
  | "TOP_PATHS_BY_REVENUE"
  | (string & {});
export interface TimeWindow {
  StartTime: Date;
  EndTime: Date;
}
export type Currency = "USDC" | (string & {});
export type GroupByType =
  | "NAME"
  | "CATEGORY"
  | "INTENT"
  | "ORGANIZATION"
  | "WEBACL"
  | (string & {});
export type MonetizationFilterName = string;
export type MonetizationFilterValue = string;
export type MonetizationFilterValueList = string[];
export interface MonetizationFilter {
  Name: string;
  Values: string[];
}
export type MonetizationFilterList = MonetizationFilter[];
export type NextMarker = string;
export type PathStatisticsLimit = number;
export type RankingSortBy = "REVENUE" | "PERCENTAGE" | "NAME" | (string & {});
export type SortOrder = "ASC" | "DESC" | (string & {});
export interface GetRevenueStatisticsRequest {
  StatisticType: RankingStatisticType;
  TimeWindow: TimeWindow;
  Scope: Scope;
  Currency: Currency;
  GroupBy?: GroupByType;
  Filters?: MonetizationFilter[];
  NextMarker?: string;
  Limit?: number;
  SortBy?: RankingSortBy;
  SortOrder?: SortOrder;
}
export type FilterString = string;
export type PercentageValue = number;
export type MonetizationAmountValue = string;
export type RequestCount = number;
export type VerifiedStatus = boolean;
export interface SourceStatistics {
  SourceName: string;
  Percentage: number;
  Amount: string;
  RequestCount: number;
  SourceCategory?: string;
  Intent?: string;
  Organization?: string;
  Verified?: boolean;
  GroupByValue?: string;
}
export type SourceStatisticsList = SourceStatistics[];
export type PathString = string;
export interface RevenuePathStatistics {
  Path: string;
  Percentage: number;
  Amount: string;
  RequestCount: number;
}
export type RevenuePathStatisticsList = RevenuePathStatistics[];
export interface GetRevenueStatisticsResponse {
  SourceStatistics?: SourceStatistics[];
  RevenuePathStatistics?: RevenuePathStatistics[];
  NextMarker?: string;
}
export interface GetRevenueStatisticsSummaryRequest {
  TimeWindow: TimeWindow;
  Scope: Scope;
  Currency: Currency;
  Filters?: MonetizationFilter[];
}
export interface RevenueBreakdown {
  TotalAmount?: string;
  VerifiedAmount?: string;
  UnverifiedAmount?: string;
  Currency?: Currency;
  TotalSettled?: number;
  TotalMonetizeServed?: number;
}
export interface GetRevenueStatisticsSummaryResponse {
  RevenueBreakdown?: RevenueBreakdown;
}
export type TimeSeriesStatisticType = "DATE_HISTOGRAM" | "PAYMENT_TRAFFIC" | (string & {});
export type IntervalType = "MINUTELY" | "FIVE_MINUTELY" | "HOURLY" | "DAILY" | (string & {});
export type MaxDataPoints = number;
export interface GetRevenueStatisticsTimeSeriesRequest {
  StatisticType: TimeSeriesStatisticType;
  TimeWindow: TimeWindow;
  Scope: Scope;
  Interval: IntervalType;
  Currency: Currency;
  GroupBy?: GroupByType;
  Filters?: MonetizationFilter[];
  Limit?: number;
  NextMarker?: string;
}
export interface DataPointEntry {
  Date?: Date;
  MonetizeServedCount?: number;
  SettledCount?: number;
  TotalAmount?: string;
  Category?: string;
  Intent?: string;
  GroupByValue?: string;
}
export type DataPointsList = DataPointEntry[];
export interface GetRevenueStatisticsTimeSeriesResponse {
  DataPoints?: DataPointEntry[];
  NextMarker?: string;
}
export interface GetRuleGroupRequest {
  Name?: string;
  Scope?: Scope;
  Id?: string;
  ARN?: string;
}
export interface RuleGroup {
  Name: string;
  Id: string;
  Capacity: number;
  ARN: string;
  Description?: string;
  Rules?: Rule[];
  VisibilityConfig: VisibilityConfig;
  LabelNamespace?: string;
  CustomResponseBodies?: { [key: string]: CustomResponseBody | undefined };
  AvailableLabels?: LabelSummary[];
  ConsumedLabels?: LabelSummary[];
  MonetizationConfig?: MonetizationConfig;
}
export interface GetRuleGroupResponse {
  RuleGroup?: RuleGroup;
  LockToken?: string;
}
export type ListMaxItems = number;
export interface GetSampledRequestsRequest {
  WebAclArn: string;
  RuleMetricName: string;
  Scope: Scope;
  TimeWindow: TimeWindow;
  MaxItems: number;
}
export type IPString = string;
export type Country = string;
export type URIString = string;
export type HTTPMethod = string;
export type HTTPVersion = string;
export type HeaderName = string;
export type HeaderValue = string;
export interface HTTPHeader {
  Name?: string;
  Value?: string;
}
export type HTTPHeaders = HTTPHeader[];
export interface HTTPRequest {
  ClientIP?: string;
  Country?: string;
  URI?: string;
  Method?: string;
  HTTPVersion?: string;
  Headers?: HTTPHeader[];
}
export type SampleWeight = number;
export type Action = string;
export type ResponseCode = number;
export type SolveTimestamp = number;
export type FailureReason =
  | "TOKEN_MISSING"
  | "TOKEN_EXPIRED"
  | "TOKEN_INVALID"
  | "TOKEN_DOMAIN_MISMATCH"
  | (string & {});
export interface CaptchaResponse {
  ResponseCode?: number;
  SolveTimestamp?: number;
  FailureReason?: FailureReason;
}
export interface ChallengeResponse {
  ResponseCode?: number;
  SolveTimestamp?: number;
  FailureReason?: FailureReason;
}
export interface SampledHTTPRequest {
  Request: HTTPRequest;
  Weight: number;
  Timestamp?: Date;
  Action?: string;
  RuleNameWithinRuleGroup?: string;
  RequestHeadersInserted?: HTTPHeader[];
  ResponseCodeSent?: number;
  Labels?: Label[];
  CaptchaResponse?: CaptchaResponse;
  ChallengeResponse?: ChallengeResponse;
  OverriddenAction?: string;
}
export type SampledHTTPRequests = SampledHTTPRequest[];
export type PopulationSize = number;
export interface GetSampledRequestsResponse {
  SampledRequests?: SampledHTTPRequest[];
  PopulationSize?: number;
  TimeWindow?: TimeWindow;
}
export type UriPathPrefixString = string;
export type NumberOfTopTrafficBotsPerPath = number;
export interface GetTopPathStatisticsByTrafficRequest {
  WebAclArn: string;
  Scope: Scope;
  UriPathPrefix?: string;
  TimeWindow: TimeWindow;
  BotCategory?: string;
  BotOrganization?: string;
  BotName?: string;
  Limit: number;
  NumberOfTopTrafficBotsPerPath: number;
  NextMarker?: string;
}
export interface FilterSource {
  BotCategory?: string;
  BotOrganization?: string;
  BotName?: string;
}
export interface BotStatistics {
  BotName: string;
  RequestCount: number;
  Percentage: number;
}
export type BotStatisticsList = BotStatistics[];
export interface PathStatistics {
  Source?: FilterSource;
  Path: string;
  RequestCount: number;
  Percentage: number;
  TopBots?: BotStatistics[];
}
export type PathStatisticsList = PathStatistics[];
export interface GetTopPathStatisticsByTrafficResponse {
  PathStatistics: PathStatistics[];
  TotalRequestCount: number;
  NextMarker?: string;
  TopCategories?: PathStatistics[];
}
export interface GetWebACLRequest {
  Name?: string;
  Scope?: Scope;
  Id?: string;
  ARN?: string;
}
export interface FirewallManagerStatement {
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
}
export interface FirewallManagerRuleGroup {
  Name: string;
  Priority: number;
  FirewallManagerStatement: FirewallManagerStatement;
  OverrideAction: OverrideAction;
  VisibilityConfig: VisibilityConfig;
}
export type FirewallManagerRuleGroups = FirewallManagerRuleGroup[];
export interface WebACL {
  Name: string;
  Id: string;
  ARN: string;
  DefaultAction: DefaultAction;
  Description?: string;
  Rules?: Rule[];
  VisibilityConfig: VisibilityConfig;
  DataProtectionConfig?: DataProtectionConfig;
  Capacity?: number;
  PreProcessFirewallManagerRuleGroups?: FirewallManagerRuleGroup[];
  PostProcessFirewallManagerRuleGroups?: FirewallManagerRuleGroup[];
  ManagedByFirewallManager?: boolean;
  LabelNamespace?: string;
  CustomResponseBodies?: { [key: string]: CustomResponseBody | undefined };
  CaptchaConfig?: CaptchaConfig;
  ChallengeConfig?: ChallengeConfig;
  TokenDomains?: string[];
  AssociationConfig?: AssociationConfig;
  RetrofittedByFirewallManager?: boolean;
  OnSourceDDoSProtectionConfig?: OnSourceDDoSProtectionConfig;
  ApplicationConfig?: ApplicationConfig;
  MonetizationConfig?: MonetizationConfig;
}
export type OutputUrl = string;
export interface GetWebACLResponse {
  WebACL?: WebACL;
  LockToken?: string;
  ApplicationIntegrationURL?: string;
}
export interface GetWebACLForResourceRequest {
  ResourceArn: string;
}
export interface GetWebACLForResourceResponse {
  WebACL?: WebACL;
}
export type PaginationLimit = number;
export interface ListAPIKeysRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
export type APIKeyVersion = number;
export interface APIKeySummary {
  TokenDomains?: string[];
  APIKey?: string;
  CreationTimestamp?: Date;
  Version?: number;
}
export type APIKeySummaries = APIKeySummary[];
export interface ListAPIKeysResponse {
  NextMarker?: string;
  APIKeySummaries?: APIKeySummary[];
  ApplicationIntegrationURL?: string;
}
export interface ListAvailableManagedRuleGroupsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
export interface ManagedRuleGroupSummary {
  VendorName?: string;
  Name?: string;
  VersioningSupported?: boolean;
  Description?: string;
}
export type ManagedRuleGroupSummaries = ManagedRuleGroupSummary[];
export interface ListAvailableManagedRuleGroupsResponse {
  NextMarker?: string;
  ManagedRuleGroups?: ManagedRuleGroupSummary[];
}
export interface ListAvailableManagedRuleGroupVersionsRequest {
  VendorName: string;
  Name: string;
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
export interface ManagedRuleGroupVersion {
  Name?: string;
  LastUpdateTimestamp?: Date;
}
export type ManagedRuleGroupVersions = ManagedRuleGroupVersion[];
export interface ListAvailableManagedRuleGroupVersionsResponse {
  NextMarker?: string;
  Versions?: ManagedRuleGroupVersion[];
  CurrentDefaultVersion?: string;
}
export interface ListIPSetsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
export type IPSetSummaries = IPSetSummary[];
export interface ListIPSetsResponse {
  NextMarker?: string;
  IPSets?: IPSetSummary[];
}
export interface ListLoggingConfigurationsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
  LogScope?: LogScope;
}
export type LoggingConfigurations = LoggingConfiguration[];
export interface ListLoggingConfigurationsResponse {
  LoggingConfigurations?: LoggingConfiguration[];
  NextMarker?: string;
}
export interface ListManagedRuleSetsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
export interface ManagedRuleSetSummary {
  Name?: string;
  Id?: string;
  Description?: string;
  LockToken?: string;
  ARN?: string;
  LabelNamespace?: string;
}
export type ManagedRuleSetSummaries = ManagedRuleSetSummary[];
export interface ListManagedRuleSetsResponse {
  NextMarker?: string;
  ManagedRuleSets?: ManagedRuleSetSummary[];
}
export interface ListMobileSdkReleasesRequest {
  Platform: Platform;
  NextMarker?: string;
  Limit?: number;
}
export interface ReleaseSummary {
  ReleaseVersion?: string;
  Timestamp?: Date;
}
export type ReleaseSummaries = ReleaseSummary[];
export interface ListMobileSdkReleasesResponse {
  ReleaseSummaries?: ReleaseSummary[];
  NextMarker?: string;
}
export interface ListRegexPatternSetsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
export type RegexPatternSetSummaries = RegexPatternSetSummary[];
export interface ListRegexPatternSetsResponse {
  NextMarker?: string;
  RegexPatternSets?: RegexPatternSetSummary[];
}
export type ResourceType =
  | "APPLICATION_LOAD_BALANCER"
  | "API_GATEWAY"
  | "APPSYNC"
  | "COGNITO_USER_POOL"
  | "APP_RUNNER_SERVICE"
  | "VERIFIED_ACCESS_INSTANCE"
  | "AMPLIFY"
  | "AGENTCORE_GATEWAY"
  | (string & {});
export interface ListResourcesForWebACLRequest {
  WebACLArn: string;
  ResourceType?: ResourceType;
}
export type ResourceArns = string[];
export interface ListResourcesForWebACLResponse {
  ResourceArns?: string[];
}
export interface ListRuleGroupsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
export type RuleGroupSummaries = RuleGroupSummary[];
export interface ListRuleGroupsResponse {
  NextMarker?: string;
  RuleGroups?: RuleGroupSummary[];
}
export type SettlementSortBy = "TIMESTAMP" | "AMOUNT" | "NAME" | "STATUS" | (string & {});
export type SettlementRecordLimit = number;
export interface ListSettlementRecordsRequest {
  TimeWindow: TimeWindow;
  Scope: Scope;
  Currency: Currency;
  Filters?: MonetizationFilter[];
  SortBy?: SettlementSortBy;
  SortOrder?: SortOrder;
  Limit?: number;
  NextMarker?: string;
}
export type SettlementFilterString = string;
export type SettlementStatus =
  | "SETTLED"
  | "PENDING"
  | "FAILED"
  | "SERVICE_ERROR"
  | "SKIPPED_ORIGIN_ERROR"
  | "DUPLICATE"
  | (string & {});
export type SettlementIdString = string;
export interface SettlementRecord {
  Timestamp: Date;
  PayerAddress?: string;
  WalletAddress?: string;
  Status: SettlementStatus;
  Amount: string;
  Currency?: Currency;
  Network?: string;
  TransactionId?: string;
  RequestId?: string;
  SourceName?: string;
  Organization?: string;
  SourceCategory?: string;
  Intent?: string;
  Verified?: boolean;
  ContentPath?: string;
  WebAclArn?: string;
  RequestTimestamp?: Date;
}
export type SettlementRecordList = SettlementRecord[];
export interface ListSettlementRecordsResponse {
  Settlements?: SettlementRecord[];
  NextMarker?: string;
}
export interface ListTagsForResourceRequest {
  NextMarker?: string;
  Limit?: number;
  ResourceARN: string;
}
export interface TagInfoForResource {
  ResourceARN?: string;
  TagList?: Tag[];
}
export interface ListTagsForResourceResponse {
  NextMarker?: string;
  TagInfoForResource?: TagInfoForResource;
}
export interface ListWebACLsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
export type WebACLSummaries = WebACLSummary[];
export interface ListWebACLsResponse {
  NextMarker?: string;
  WebACLs?: WebACLSummary[];
}
export interface PutLoggingConfigurationRequest {
  LoggingConfiguration: LoggingConfiguration;
}
export interface PutLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration;
}
export interface VersionToPublish {
  AssociatedRuleGroupArn?: string;
  ForecastedLifetime?: number;
}
export type VersionsToPublish = { [key: string]: VersionToPublish | undefined };
export interface PutManagedRuleSetVersionsRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
  RecommendedVersion?: string;
  VersionsToPublish?: { [key: string]: VersionToPublish | undefined };
}
export interface PutManagedRuleSetVersionsResponse {
  NextLockToken?: string;
}
export interface PutPermissionPolicyRequest {
  ResourceArn: string;
  Policy: string;
}
export interface PutPermissionPolicyResponse {}
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateIPSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  Description?: string;
  Addresses: string[];
  LockToken: string;
}
export interface UpdateIPSetResponse {
  NextLockToken?: string;
}
export interface UpdateManagedRuleSetVersionExpiryDateRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
  VersionToExpire: string;
  ExpiryTimestamp: Date;
}
export interface UpdateManagedRuleSetVersionExpiryDateResponse {
  ExpiringVersion?: string;
  ExpiryTimestamp?: Date;
  NextLockToken?: string;
}
export interface UpdateRegexPatternSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  Description?: string;
  RegularExpressionList: Regex[];
  LockToken: string;
}
export interface UpdateRegexPatternSetResponse {
  NextLockToken?: string;
}
export interface UpdateRuleGroupRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  Description?: string;
  Rules?: Rule[];
  VisibilityConfig: VisibilityConfig;
  LockToken: string;
  CustomResponseBodies?: { [key: string]: CustomResponseBody | undefined };
  MonetizationConfig?: MonetizationConfig;
}
export interface UpdateRuleGroupResponse {
  NextLockToken?: string;
}
export interface UpdateWebACLRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  DefaultAction: DefaultAction;
  Description?: string;
  Rules?: Rule[];
  VisibilityConfig: VisibilityConfig;
  DataProtectionConfig?: DataProtectionConfig;
  LockToken: string;
  CustomResponseBodies?: { [key: string]: CustomResponseBody | undefined };
  CaptchaConfig?: CaptchaConfig;
  ChallengeConfig?: ChallengeConfig;
  TokenDomains?: string[];
  AssociationConfig?: AssociationConfig;
  OnSourceDDoSProtectionConfig?: OnSourceDDoSProtectionConfig;
  ApplicationConfig?: ApplicationConfig;
  MonetizationConfig?: MonetizationConfig;
}
export interface UpdateWebACLResponse {
  NextLockToken?: string;
}
export type ErrorMessage = string;
export type PricingPlanFeatureName = string;
export type RequiredPricingPlanName = string;
export interface DisallowedFeature {
  Feature?: string;
  RequiredPricingPlan?: string;
}
export type DisallowedFeatures = DisallowedFeature[];
export type ParameterExceptionField =
  | "WEB_ACL"
  | "RULE_GROUP"
  | "REGEX_PATTERN_SET"
  | "IP_SET"
  | "MANAGED_RULE_SET"
  | "RULE"
  | "EXCLUDED_RULE"
  | "STATEMENT"
  | "BYTE_MATCH_STATEMENT"
  | "SQLI_MATCH_STATEMENT"
  | "XSS_MATCH_STATEMENT"
  | "SIZE_CONSTRAINT_STATEMENT"
  | "GEO_MATCH_STATEMENT"
  | "RATE_BASED_STATEMENT"
  | "RULE_GROUP_REFERENCE_STATEMENT"
  | "REGEX_PATTERN_REFERENCE_STATEMENT"
  | "IP_SET_REFERENCE_STATEMENT"
  | "MANAGED_RULE_SET_STATEMENT"
  | "LABEL_MATCH_STATEMENT"
  | "AND_STATEMENT"
  | "OR_STATEMENT"
  | "NOT_STATEMENT"
  | "IP_ADDRESS"
  | "IP_ADDRESS_VERSION"
  | "FIELD_TO_MATCH"
  | "TEXT_TRANSFORMATION"
  | "SINGLE_QUERY_ARGUMENT"
  | "SINGLE_HEADER"
  | "DEFAULT_ACTION"
  | "RULE_ACTION"
  | "ENTITY_LIMIT"
  | "OVERRIDE_ACTION"
  | "SCOPE_VALUE"
  | "RESOURCE_ARN"
  | "RESOURCE_TYPE"
  | "TAGS"
  | "TAG_KEYS"
  | "METRIC_NAME"
  | "FIREWALL_MANAGER_STATEMENT"
  | "FALLBACK_BEHAVIOR"
  | "POSITION"
  | "FORWARDED_IP_CONFIG"
  | "IP_SET_FORWARDED_IP_CONFIG"
  | "HEADER_NAME"
  | "CUSTOM_REQUEST_HANDLING"
  | "RESPONSE_CONTENT_TYPE"
  | "CUSTOM_RESPONSE"
  | "CUSTOM_RESPONSE_BODY"
  | "JSON_MATCH_PATTERN"
  | "JSON_MATCH_SCOPE"
  | "BODY_PARSING_FALLBACK_BEHAVIOR"
  | "LOGGING_FILTER"
  | "FILTER_CONDITION"
  | "EXPIRE_TIMESTAMP"
  | "CHANGE_PROPAGATION_STATUS"
  | "ASSOCIABLE_RESOURCE"
  | "LOG_DESTINATION"
  | "MANAGED_RULE_GROUP_CONFIG"
  | "PAYLOAD_TYPE"
  | "HEADER_MATCH_PATTERN"
  | "COOKIE_MATCH_PATTERN"
  | "MAP_MATCH_SCOPE"
  | "OVERSIZE_HANDLING"
  | "CHALLENGE_CONFIG"
  | "TOKEN_DOMAIN"
  | "ATP_RULE_SET_RESPONSE_INSPECTION"
  | "ASSOCIATED_RESOURCE_TYPE"
  | "SCOPE_DOWN"
  | "CUSTOM_KEYS"
  | "ACP_RULE_SET_RESPONSE_INSPECTION"
  | "DATA_PROTECTION_CONFIG"
  | "LOW_REPUTATION_MODE"
  | "MONETIZATION_CONFIG"
  | "WALLET_ADDRESS"
  | "PRICE_AMOUNT"
  | "PAYMENT_NETWORK"
  | "PRE_PARSE_TEXT_TRANSFORMATION"
  | (string & {});
export type ParameterExceptionParameter = string;
export type ErrorReason = string;
export type SourceType = string;
export type AssociateWebACLError =
  | WAFFeatureNotIncludedInPricingPlanException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFLimitsExceededException
  | WAFNonexistentItemException
  | WAFUnavailableEntityException
  | CommonErrors;
/**
 * Associates a web ACL with a resource, to protect the resource.
 *
 * Use this for all resource types except for Amazon CloudFront distributions. For Amazon CloudFront, call `UpdateDistribution` for the distribution and provide the Amazon Resource Name (ARN) of the web ACL in the web ACL ID. For information, see UpdateDistribution in the *Amazon CloudFront Developer Guide*.
 *
 * **Required permissions for customer-managed IAM policies**
 *
 * This call requires permissions that are specific to the protected resource type.
 * For details, see Permissions for AssociateWebACL in the *WAF Developer Guide*.
 *
 * **Temporary inconsistencies during updates**
 *
 * When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes.
 *
 * The following are examples of the temporary inconsistencies that you might notice during change propagation:
 *
 * - After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable.
 *
 * - After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another.
 *
 * - After you change a rule action setting, you might see the old action in some places and the new action in others.
 *
 * - After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.
 */
export const associateWebACL: API.OperationMethod<
  AssociateWebACLRequest,
  AssociateWebACLResponse,
  AssociateWebACLError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<AssociateWebACLRequest>,
  output: __S(1) as any as S.Schema<AssociateWebACLResponse>,
  errors: [
    WAFFeatureNotIncludedInPricingPlanException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFLimitsExceededException,
    WAFNonexistentItemException,
    WAFUnavailableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateWebACL",
}));

export type CheckCapacityError =
  | WAFExpiredManagedRuleGroupVersionException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFInvalidResourceException
  | WAFLimitsExceededException
  | WAFNonexistentItemException
  | WAFSubscriptionNotFoundException
  | WAFUnavailableEntityException
  | CommonErrors;
/**
 * Returns the web ACL capacity unit (WCU) requirements for a specified scope and set of rules.
 * You can use this to check the capacity requirements for the rules you want to use in a
 * RuleGroup or WebACL.
 *
 * WAF uses WCUs to calculate and control the operating
 * resources that are used to run your rules, rule groups, and web ACLs. WAF
 * calculates capacity differently for each rule type, to reflect the relative cost of each rule.
 * Simple rules that cost little to run use fewer WCUs than more complex rules
 * that use more processing power.
 * Rule group capacity is fixed at creation, which helps users plan their
 * web ACL WCU usage when they use a rule group. For more information, see WAF web ACL capacity units (WCU)
 * in the *WAF Developer Guide*.
 */
export const checkCapacity: API.OperationMethod<
  CheckCapacityRequest,
  CheckCapacityResponse,
  CheckCapacityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(83) as any as S.Schema<CheckCapacityRequest>,
  output: __S(84) as any as S.Schema<CheckCapacityResponse>,
  errors: [
    WAFExpiredManagedRuleGroupVersionException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFInvalidResourceException,
    WAFLimitsExceededException,
    WAFNonexistentItemException,
    WAFSubscriptionNotFoundException,
    WAFUnavailableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CheckCapacity",
}));

export type CreateAPIKeyError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFLimitsExceededException
  | CommonErrors;
/**
 * Creates an API key that contains a set of token domains.
 *
 * API keys are required for the integration of the CAPTCHA API in your JavaScript client applications.
 * The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users.
 * For more information about the CAPTCHA JavaScript integration, see WAF client application integration in the *WAF Developer Guide*.
 *
 * You can use a single key for up to 5 domains. After you generate a key, you can copy it for use in your JavaScript
 * integration.
 */
export const createAPIKey: API.OperationMethod<
  CreateAPIKeyRequest,
  CreateAPIKeyResponse,
  CreateAPIKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(85) as any as S.Schema<CreateAPIKeyRequest>,
  output: __S(86) as any as S.Schema<CreateAPIKeyResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFLimitsExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAPIKey",
}));

export type CreateIPSetError =
  | WAFDuplicateItemException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFLimitsExceededException
  | WAFOptimisticLockException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException
  | CommonErrors;
/**
 * Creates an IPSet, which you use to identify web requests that
 * originate from specific IP addresses or ranges of IP addresses. For example, if you're
 * receiving a lot of requests from a ranges of IP addresses, you can configure WAF to
 * block them using an IPSet that lists those IP addresses.
 */
export const createIPSet: API.OperationMethod<
  CreateIPSetRequest,
  CreateIPSetResponse,
  CreateIPSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89) as any as S.Schema<CreateIPSetRequest>,
  output: __S(91) as any as S.Schema<CreateIPSetResponse>,
  errors: [
    WAFDuplicateItemException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFLimitsExceededException,
    WAFOptimisticLockException,
    WAFTagOperationException,
    WAFTagOperationInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIPSet",
}));

export type CreateRegexPatternSetError =
  | WAFDuplicateItemException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFLimitsExceededException
  | WAFOptimisticLockException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException
  | CommonErrors;
/**
 * Creates a RegexPatternSet, which you reference in a RegexPatternSetReferenceStatement, to have WAF inspect a web request
 * component for the specified patterns.
 */
export const createRegexPatternSet: API.OperationMethod<
  CreateRegexPatternSetRequest,
  CreateRegexPatternSetResponse,
  CreateRegexPatternSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(92) as any as S.Schema<CreateRegexPatternSetRequest>,
  output: __S(93) as any as S.Schema<CreateRegexPatternSetResponse>,
  errors: [
    WAFDuplicateItemException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFLimitsExceededException,
    WAFOptimisticLockException,
    WAFTagOperationException,
    WAFTagOperationInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRegexPatternSet",
}));

export type CreateRuleGroupError =
  | WAFDuplicateItemException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFLimitsExceededException
  | WAFNonexistentItemException
  | WAFOptimisticLockException
  | WAFSubscriptionNotFoundException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException
  | WAFUnavailableEntityException
  | CommonErrors;
/**
 * Creates a RuleGroup per the specifications provided.
 *
 * A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements.
 */
export const createRuleGroup: API.OperationMethod<
  CreateRuleGroupRequest,
  CreateRuleGroupResponse,
  CreateRuleGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(102) as any as S.Schema<CreateRuleGroupRequest>,
  output: __S(91) as any as S.Schema<CreateRuleGroupResponse>,
  errors: [
    WAFDuplicateItemException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFLimitsExceededException,
    WAFNonexistentItemException,
    WAFOptimisticLockException,
    WAFSubscriptionNotFoundException,
    WAFTagOperationException,
    WAFTagOperationInternalErrorException,
    WAFUnavailableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRuleGroup",
}));

export type CreateWebACLError =
  | WAFConfigurationWarningException
  | WAFDuplicateItemException
  | WAFExpiredManagedRuleGroupVersionException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFInvalidResourceException
  | WAFLimitsExceededException
  | WAFNonexistentItemException
  | WAFOptimisticLockException
  | WAFSubscriptionNotFoundException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException
  | WAFUnavailableEntityException
  | CommonErrors;
/**
 * Creates a WebACL per the specifications provided.
 *
 * A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has a statement that defines what to look for in web requests and an action that WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types Rule, RuleGroup, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resource types include Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync GraphQL API, Amazon Cognito user pool, App Runner service, Amplify application, Amazon Web Services Verified Access instance, and Amazon Bedrock AgentCore Gateway.
 */
export const createWebACL: API.OperationMethod<
  CreateWebACLRequest,
  CreateWebACLResponse,
  CreateWebACLError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115) as any as S.Schema<CreateWebACLRequest>,
  output: __S(91) as any as S.Schema<CreateWebACLResponse>,
  errors: [
    WAFConfigurationWarningException,
    WAFDuplicateItemException,
    WAFExpiredManagedRuleGroupVersionException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFInvalidResourceException,
    WAFLimitsExceededException,
    WAFNonexistentItemException,
    WAFOptimisticLockException,
    WAFSubscriptionNotFoundException,
    WAFTagOperationException,
    WAFTagOperationInternalErrorException,
    WAFUnavailableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWebACL",
}));

export type DeleteAPIKeyError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | WAFOptimisticLockException
  | CommonErrors;
/**
 * Deletes the specified API key.
 *
 * After you delete a key, it can take up to 24 hours for WAF to disallow use of the key in all regions.
 */
export const deleteAPIKey: API.OperationMethod<
  DeleteAPIKeyRequest,
  DeleteAPIKeyResponse,
  DeleteAPIKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(116) as any as S.Schema<DeleteAPIKeyRequest>,
  output: __S(117) as any as S.Schema<DeleteAPIKeyResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
    WAFOptimisticLockException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAPIKey",
}));

export type DeleteFirewallManagerRuleGroupsError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | WAFOptimisticLockException
  | CommonErrors;
/**
 * Deletes all rule groups that are managed by Firewall Manager from the specified WebACL.
 *
 * You can only use this if `ManagedByFirewallManager` and `RetrofittedByFirewallManager` are both false in the web ACL.
 */
export const deleteFirewallManagerRuleGroups: API.OperationMethod<
  DeleteFirewallManagerRuleGroupsRequest,
  DeleteFirewallManagerRuleGroupsResponse,
  DeleteFirewallManagerRuleGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(118) as any as S.Schema<DeleteFirewallManagerRuleGroupsRequest>,
  output: __S(119) as any as S.Schema<DeleteFirewallManagerRuleGroupsResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
    WAFOptimisticLockException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFirewallManagerRuleGroups",
}));

export type DeleteIPSetError =
  | WAFAssociatedItemException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | WAFOptimisticLockException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException
  | CommonErrors;
/**
 * Deletes the specified IPSet.
 */
export const deleteIPSet: API.OperationMethod<
  DeleteIPSetRequest,
  DeleteIPSetResponse,
  DeleteIPSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120) as any as S.Schema<DeleteIPSetRequest>,
  output: __S(117) as any as S.Schema<DeleteIPSetResponse>,
  errors: [
    WAFAssociatedItemException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
    WAFOptimisticLockException,
    WAFTagOperationException,
    WAFTagOperationInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIPSet",
}));

export type DeleteLoggingConfigurationError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | WAFOptimisticLockException
  | CommonErrors;
/**
 * Deletes the LoggingConfiguration from the specified web ACL.
 */
export const deleteLoggingConfiguration: API.OperationMethod<
  DeleteLoggingConfigurationRequest,
  DeleteLoggingConfigurationResponse,
  DeleteLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(121) as any as S.Schema<DeleteLoggingConfigurationRequest>,
  output: __S(122) as any as S.Schema<DeleteLoggingConfigurationResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
    WAFOptimisticLockException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLoggingConfiguration",
}));

export type DeletePermissionPolicyError =
  | WAFInternalErrorException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Permanently deletes an IAM policy from the specified rule group.
 *
 * You must be the owner of the rule group to perform this operation.
 */
export const deletePermissionPolicy: API.OperationMethod<
  DeletePermissionPolicyRequest,
  DeletePermissionPolicyResponse,
  DeletePermissionPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(123) as any as S.Schema<DeletePermissionPolicyRequest>,
  output: __S(122) as any as S.Schema<DeletePermissionPolicyResponse>,
  errors: [WAFInternalErrorException, WAFInvalidParameterException, WAFNonexistentItemException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePermissionPolicy",
}));

export type DeleteRegexPatternSetError =
  | WAFAssociatedItemException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | WAFOptimisticLockException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException
  | CommonErrors;
/**
 * Deletes the specified RegexPatternSet.
 */
export const deleteRegexPatternSet: API.OperationMethod<
  DeleteRegexPatternSetRequest,
  DeleteRegexPatternSetResponse,
  DeleteRegexPatternSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124) as any as S.Schema<DeleteRegexPatternSetRequest>,
  output: __S(122) as any as S.Schema<DeleteRegexPatternSetResponse>,
  errors: [
    WAFAssociatedItemException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
    WAFOptimisticLockException,
    WAFTagOperationException,
    WAFTagOperationInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRegexPatternSet",
}));

export type DeleteRuleGroupError =
  | WAFAssociatedItemException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | WAFOptimisticLockException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException
  | CommonErrors;
/**
 * Deletes the specified RuleGroup.
 */
export const deleteRuleGroup: API.OperationMethod<
  DeleteRuleGroupRequest,
  DeleteRuleGroupResponse,
  DeleteRuleGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(125) as any as S.Schema<DeleteRuleGroupRequest>,
  output: __S(1) as any as S.Schema<DeleteRuleGroupResponse>,
  errors: [
    WAFAssociatedItemException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
    WAFOptimisticLockException,
    WAFTagOperationException,
    WAFTagOperationInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRuleGroup",
}));

export type DeleteWebACLError =
  | WAFAssociatedItemException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | WAFOptimisticLockException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException
  | CommonErrors;
/**
 * Deletes the specified WebACL.
 *
 * You can only use this if `ManagedByFirewallManager` is false in the web ACL.
 *
 * Before deleting any web ACL, first disassociate it from all resources.
 *
 * - To retrieve a list of the resources that are associated with a web ACL, use the
 * following calls:
 *
 * - For Amazon CloudFront distributions, use the CloudFront call
 * `ListDistributionsByWebACLId`. For information, see ListDistributionsByWebACLId
 * in the *Amazon CloudFront API Reference*.
 *
 * - For all other resources, call ListResourcesForWebACL.
 *
 * - To disassociate a resource from a web ACL, use the following calls:
 *
 * - For Amazon CloudFront distributions, provide an empty web ACL ID in the CloudFront call
 * `UpdateDistribution`. For information, see UpdateDistribution
 * in the *Amazon CloudFront API Reference*.
 *
 * - For all other resources, call DisassociateWebACL.
 */
export const deleteWebACL: API.OperationMethod<
  DeleteWebACLRequest,
  DeleteWebACLResponse,
  DeleteWebACLError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126) as any as S.Schema<DeleteWebACLRequest>,
  output: __S(117) as any as S.Schema<DeleteWebACLResponse>,
  errors: [
    WAFAssociatedItemException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
    WAFOptimisticLockException,
    WAFTagOperationException,
    WAFTagOperationInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWebACL",
}));

export type DescribeAllManagedProductsError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | CommonErrors;
/**
 * Provides high-level information for the Amazon Web Services Managed Rules rule groups and Amazon Web Services Marketplace managed rule groups.
 */
export const describeAllManagedProducts: API.OperationMethod<
  DescribeAllManagedProductsRequest,
  DescribeAllManagedProductsResponse,
  DescribeAllManagedProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(127) as any as S.Schema<DescribeAllManagedProductsRequest>,
  output: __S(130) as any as S.Schema<DescribeAllManagedProductsResponse>,
  errors: [WAFInternalErrorException, WAFInvalidOperationException, WAFInvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAllManagedProducts",
}));

export type DescribeManagedProductsByVendorError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | CommonErrors;
/**
 * Provides high-level information for the managed rule groups owned by a specific vendor.
 */
export const describeManagedProductsByVendor: API.OperationMethod<
  DescribeManagedProductsByVendorRequest,
  DescribeManagedProductsByVendorResponse,
  DescribeManagedProductsByVendorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131) as any as S.Schema<DescribeManagedProductsByVendorRequest>,
  output: __S(130) as any as S.Schema<DescribeManagedProductsByVendorResponse>,
  errors: [WAFInternalErrorException, WAFInvalidOperationException, WAFInvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeManagedProductsByVendor",
}));

export type DescribeManagedRuleGroupError =
  | WAFExpiredManagedRuleGroupVersionException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFInvalidResourceException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Provides high-level information for a managed rule group, including descriptions of the rules.
 */
export const describeManagedRuleGroup: API.OperationMethod<
  DescribeManagedRuleGroupRequest,
  DescribeManagedRuleGroupResponse,
  DescribeManagedRuleGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(132) as any as S.Schema<DescribeManagedRuleGroupRequest>,
  output: __S(137) as any as S.Schema<DescribeManagedRuleGroupResponse>,
  errors: [
    WAFExpiredManagedRuleGroupVersionException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFInvalidResourceException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeManagedRuleGroup",
}));

export type DisassociateWebACLError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | WAFUnavailableEntityException
  | CommonErrors;
/**
 * Disassociates the specified resource from its web ACL
 * association, if it has one.
 *
 * Use this for all resource types except for Amazon CloudFront distributions. For Amazon CloudFront, call `UpdateDistribution` for the distribution and provide an empty web ACL ID. For information, see UpdateDistribution in the *Amazon CloudFront API Reference*.
 *
 * **Required permissions for customer-managed IAM policies**
 *
 * This call requires permissions that are specific to the protected resource type.
 * For details, see Permissions for DisassociateWebACL in the *WAF Developer Guide*.
 */
export const disassociateWebACL: API.OperationMethod<
  DisassociateWebACLRequest,
  DisassociateWebACLResponse,
  DisassociateWebACLError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(138) as any as S.Schema<DisassociateWebACLRequest>,
  output: __S(122) as any as S.Schema<DisassociateWebACLResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
    WAFUnavailableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateWebACL",
}));

export type GenerateMobileSdkReleaseUrlError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Generates a presigned download URL for the specified release of the mobile SDK.
 *
 * The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see
 * WAF client application integration in the *WAF Developer Guide*.
 */
export const generateMobileSdkReleaseUrl: API.OperationMethod<
  GenerateMobileSdkReleaseUrlRequest,
  GenerateMobileSdkReleaseUrlResponse,
  GenerateMobileSdkReleaseUrlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(139) as any as S.Schema<GenerateMobileSdkReleaseUrlRequest>,
  output: __S(140) as any as S.Schema<GenerateMobileSdkReleaseUrlResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GenerateMobileSdkReleaseUrl",
}));

export type GetDecryptedAPIKeyError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFInvalidResourceException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Returns your API key in decrypted form. Use this to check the token domains that you have defined for the key.
 *
 * API keys are required for the integration of the CAPTCHA API in your JavaScript client applications.
 * The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users.
 * For more information about the CAPTCHA JavaScript integration, see WAF client application integration in the *WAF Developer Guide*.
 */
export const getDecryptedAPIKey: API.OperationMethod<
  GetDecryptedAPIKeyRequest,
  GetDecryptedAPIKeyResponse,
  GetDecryptedAPIKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(141) as any as S.Schema<GetDecryptedAPIKeyRequest>,
  output: __S(142) as any as S.Schema<GetDecryptedAPIKeyResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFInvalidResourceException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDecryptedAPIKey",
}));

export type GetIPSetError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Retrieves the specified IPSet.
 */
export const getIPSet: API.OperationMethod<
  GetIPSetRequest,
  GetIPSetResponse,
  GetIPSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(143) as any as S.Schema<GetIPSetRequest>,
  output: __S(145) as any as S.Schema<GetIPSetResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIPSet",
}));

export type GetLoggingConfigurationError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Returns the LoggingConfiguration for the specified web ACL.
 */
export const getLoggingConfiguration: API.OperationMethod<
  GetLoggingConfigurationRequest,
  GetLoggingConfigurationResponse,
  GetLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(146) as any as S.Schema<GetLoggingConfigurationRequest>,
  output: __S(156) as any as S.Schema<GetLoggingConfigurationResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLoggingConfiguration",
}));

export type GetManagedRuleSetError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Retrieves the specified managed rule set.
 *
 * This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers.
 *
 * Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are `ListManagedRuleSets`, `GetManagedRuleSet`, `PutManagedRuleSetVersions`, and `UpdateManagedRuleSetVersionExpiryDate`.
 */
export const getManagedRuleSet: API.OperationMethod<
  GetManagedRuleSetRequest,
  GetManagedRuleSetResponse,
  GetManagedRuleSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(157) as any as S.Schema<GetManagedRuleSetRequest>,
  output: __S(161) as any as S.Schema<GetManagedRuleSetResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetManagedRuleSet",
}));

export type GetMobileSdkReleaseError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Retrieves information for the specified mobile SDK release, including release notes and
 * tags.
 *
 * The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see
 * WAF client application integration in the *WAF Developer Guide*.
 */
export const getMobileSdkRelease: API.OperationMethod<
  GetMobileSdkReleaseRequest,
  GetMobileSdkReleaseResponse,
  GetMobileSdkReleaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(162) as any as S.Schema<GetMobileSdkReleaseRequest>,
  output: __S(164) as any as S.Schema<GetMobileSdkReleaseResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMobileSdkRelease",
}));

export type GetPermissionPolicyError =
  | WAFInternalErrorException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Returns the IAM policy that is attached to the specified rule group.
 *
 * You must be the owner of the rule group to perform this operation.
 */
export const getPermissionPolicy: API.OperationMethod<
  GetPermissionPolicyRequest,
  GetPermissionPolicyResponse,
  GetPermissionPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(165) as any as S.Schema<GetPermissionPolicyRequest>,
  output: __S(166) as any as S.Schema<GetPermissionPolicyResponse>,
  errors: [WAFInternalErrorException, WAFInvalidParameterException, WAFNonexistentItemException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPermissionPolicy",
}));

export type GetRateBasedStatementManagedKeysError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | WAFUnsupportedAggregateKeyTypeException
  | CommonErrors;
/**
 * Retrieves the IP addresses that are currently blocked by a rate-based rule instance. This
 * is only available for rate-based rules that aggregate solely on the IP address or on the forwarded IP
 * address.
 *
 * The maximum
 * number of addresses that can be blocked for a single rate-based rule instance is 10,000.
 * If more than 10,000 addresses exceed the rate limit, those with the highest rates are
 * blocked.
 *
 * For a rate-based rule that you've defined inside a rule group, provide the name of the
 * rule group reference statement in your request, in addition to the rate-based rule name and
 * the web ACL name.
 *
 * WAF monitors web requests and manages keys independently for each unique combination
 * of web ACL, optional rule group, and rate-based rule. For example, if you define a
 * rate-based rule inside a rule group, and then use the rule group in a web ACL, WAF
 * monitors web requests and manages keys for that web ACL, rule group reference statement,
 * and rate-based rule instance. If you use the same rule group in a second web ACL, WAF
 * monitors web requests and manages keys for this second usage completely independent of your
 * first.
 */
export const getRateBasedStatementManagedKeys: API.OperationMethod<
  GetRateBasedStatementManagedKeysRequest,
  GetRateBasedStatementManagedKeysResponse,
  GetRateBasedStatementManagedKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(167) as any as S.Schema<GetRateBasedStatementManagedKeysRequest>,
  output: __S(169) as any as S.Schema<GetRateBasedStatementManagedKeysResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
    WAFUnsupportedAggregateKeyTypeException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRateBasedStatementManagedKeys",
}));

export type GetRegexPatternSetError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Retrieves the specified RegexPatternSet.
 */
export const getRegexPatternSet: API.OperationMethod<
  GetRegexPatternSetRequest,
  GetRegexPatternSetResponse,
  GetRegexPatternSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(170) as any as S.Schema<GetRegexPatternSetRequest>,
  output: __S(172) as any as S.Schema<GetRegexPatternSetResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRegexPatternSet",
}));

export type GetRevenueStatisticsError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Retrieves ranked monetization statistics. Use the `StatisticType` parameter to specify the ranking: `TOP_SOURCES_BY_REVENUE` for top sources by revenue, or `TOP_PATHS_BY_REVENUE` for top content paths by revenue. This operation is only available for `CLOUDFRONT` scope. The maximum supported time window is 90 days. When no `CurrencyMode` filter is provided, results default to `REAL`. To retrieve test data, include a `CurrencyMode` filter with the value `TEST`.
 */
export const getRevenueStatistics: API.OperationMethod<
  GetRevenueStatisticsRequest,
  GetRevenueStatisticsResponse,
  GetRevenueStatisticsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(176) as any as S.Schema<GetRevenueStatisticsRequest>,
  output: __S(181) as any as S.Schema<GetRevenueStatisticsResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRevenueStatistics",
}));

export type GetRevenueStatisticsSummaryError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Retrieves a summary of monetization revenue for the specified time window. Returns total revenue, revenue by verification tier, total settlements, and total HTTP 402 responses served. This operation is only available for `CLOUDFRONT` scope. The maximum supported time window is 90 days. When no `CurrencyMode` filter is provided, results default to `REAL`. To retrieve test data, include a `CurrencyMode` filter with the value `TEST`.
 */
export const getRevenueStatisticsSummary: API.OperationMethod<
  GetRevenueStatisticsSummaryRequest,
  GetRevenueStatisticsSummaryResponse,
  GetRevenueStatisticsSummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182) as any as S.Schema<GetRevenueStatisticsSummaryRequest>,
  output: __S(184) as any as S.Schema<GetRevenueStatisticsSummaryResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRevenueStatisticsSummary",
}));

export type GetRevenueStatisticsTimeSeriesError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Retrieves time series data for monetization revenue. Returns data points aggregated at the specified interval for the given time window. This operation is only available for `CLOUDFRONT` scope. The maximum supported time window is 90 days. When no `CurrencyMode` filter is provided, results default to `REAL`. To retrieve test data, include a `CurrencyMode` filter with the value `TEST`.
 */
export const getRevenueStatisticsTimeSeries: API.OperationMethod<
  GetRevenueStatisticsTimeSeriesRequest,
  GetRevenueStatisticsTimeSeriesResponse,
  GetRevenueStatisticsTimeSeriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(185) as any as S.Schema<GetRevenueStatisticsTimeSeriesRequest>,
  output: __S(188) as any as S.Schema<GetRevenueStatisticsTimeSeriesResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRevenueStatisticsTimeSeries",
}));

export type GetRuleGroupError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Retrieves the specified RuleGroup.
 */
export const getRuleGroup: API.OperationMethod<
  GetRuleGroupRequest,
  GetRuleGroupResponse,
  GetRuleGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(189) as any as S.Schema<GetRuleGroupRequest>,
  output: __S(191) as any as S.Schema<GetRuleGroupResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRuleGroup",
}));

export type GetSampledRequestsError =
  | WAFInternalErrorException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Gets detailed information about a specified number of requests--a sample--that WAF
 * randomly selects from among the first 5,000 requests that your Amazon Web Services resource received
 * during a time range that you choose. You can specify a sample size of up to 500 requests,
 * and you can specify any time range in the previous three hours.
 *
 * `GetSampledRequests` returns a time range, which is usually the time range that
 * you specified. However, if your resource (such as a CloudFront distribution) received 5,000
 * requests before the specified time range elapsed, `GetSampledRequests` returns
 * an updated time range. This new time range indicates the actual period during which WAF
 * selected the requests in the sample.
 */
export const getSampledRequests: API.OperationMethod<
  GetSampledRequestsRequest,
  GetSampledRequestsResponse,
  GetSampledRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192) as any as S.Schema<GetSampledRequestsRequest>,
  output: __S(199) as any as S.Schema<GetSampledRequestsResponse>,
  errors: [WAFInternalErrorException, WAFInvalidParameterException, WAFNonexistentItemException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSampledRequests",
}));

export type GetTopPathStatisticsByTrafficError =
  | WAFFeatureNotIncludedInPricingPlanException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Retrieves aggregated statistics about the top URI paths accessed by bot traffic for a specified web ACL and time window.
 * You can use this operation to analyze which paths on your web application receive the most bot traffic and identify the specific bots accessing those paths.
 * The operation supports filtering by bot category, organization, or name, and allows you to drill down into specific path prefixes to view detailed URI-level statistics.
 */
export const getTopPathStatisticsByTraffic: API.OperationMethod<
  GetTopPathStatisticsByTrafficRequest,
  GetTopPathStatisticsByTrafficResponse,
  GetTopPathStatisticsByTrafficError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(200) as any as S.Schema<GetTopPathStatisticsByTrafficRequest>,
  output: __S(206) as any as S.Schema<GetTopPathStatisticsByTrafficResponse>,
  errors: [
    WAFFeatureNotIncludedInPricingPlanException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTopPathStatisticsByTraffic",
}));

export type GetWebACLError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Retrieves the specified WebACL.
 */
export const getWebACL: API.OperationMethod<
  GetWebACLRequest,
  GetWebACLResponse,
  GetWebACLError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(207) as any as S.Schema<GetWebACLRequest>,
  output: __S(212) as any as S.Schema<GetWebACLResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWebACL",
}));

export type GetWebACLForResourceError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | WAFUnavailableEntityException
  | CommonErrors;
/**
 * Retrieves the WebACL for the specified resource.
 *
 * This call uses `GetWebACL`, to verify that your account has permission to access the retrieved web ACL.
 * If you get an error that indicates that your account isn't authorized to perform `wafv2:GetWebACL` on the resource,
 * that error won't be included in your CloudTrail event history.
 *
 * For Amazon CloudFront, don't use this call. Instead, call the CloudFront action
 * `GetDistributionConfig`. For information, see GetDistributionConfig in the *Amazon CloudFront API Reference*.
 *
 * **Required permissions for customer-managed IAM policies**
 *
 * This call requires permissions that are specific to the protected resource type.
 * For details, see Permissions for GetWebACLForResource in the *WAF Developer Guide*.
 */
export const getWebACLForResource: API.OperationMethod<
  GetWebACLForResourceRequest,
  GetWebACLForResourceResponse,
  GetWebACLForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(213) as any as S.Schema<GetWebACLForResourceRequest>,
  output: __S(214) as any as S.Schema<GetWebACLForResourceResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
    WAFUnavailableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWebACLForResource",
}));

export type ListAPIKeysError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFInvalidResourceException
  | CommonErrors;
/**
 * Retrieves a list of the API keys that you've defined for the specified scope.
 *
 * API keys are required for the integration of the CAPTCHA API in your JavaScript client applications.
 * The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users.
 * For more information about the CAPTCHA JavaScript integration, see WAF client application integration in the *WAF Developer Guide*.
 */
export const listAPIKeys: API.OperationMethod<
  ListAPIKeysRequest,
  ListAPIKeysResponse,
  ListAPIKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(215) as any as S.Schema<ListAPIKeysRequest>,
  output: __S(218) as any as S.Schema<ListAPIKeysResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFInvalidResourceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAPIKeys",
}));

export type ListAvailableManagedRuleGroupsError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | CommonErrors;
/**
 * Retrieves an array of managed rule groups that are available for you to use. This list
 * includes all Amazon Web Services Managed Rules rule groups and all of the Amazon Web Services Marketplace managed rule groups that you're
 * subscribed to.
 */
export const listAvailableManagedRuleGroups: API.OperationMethod<
  ListAvailableManagedRuleGroupsRequest,
  ListAvailableManagedRuleGroupsResponse,
  ListAvailableManagedRuleGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(219) as any as S.Schema<ListAvailableManagedRuleGroupsRequest>,
  output: __S(222) as any as S.Schema<ListAvailableManagedRuleGroupsResponse>,
  errors: [WAFInternalErrorException, WAFInvalidOperationException, WAFInvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAvailableManagedRuleGroups",
}));

export type ListAvailableManagedRuleGroupVersionsError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Returns a list of the available versions for the specified managed rule group.
 */
export const listAvailableManagedRuleGroupVersions: API.OperationMethod<
  ListAvailableManagedRuleGroupVersionsRequest,
  ListAvailableManagedRuleGroupVersionsResponse,
  ListAvailableManagedRuleGroupVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(223) as any as S.Schema<ListAvailableManagedRuleGroupVersionsRequest>,
  output: __S(226) as any as S.Schema<ListAvailableManagedRuleGroupVersionsResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAvailableManagedRuleGroupVersions",
}));

export type ListIPSetsError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | CommonErrors;
/**
 * Retrieves an array of IPSetSummary objects for the IP sets that you
 * manage.
 */
export const listIPSets: API.OperationMethod<
  ListIPSetsRequest,
  ListIPSetsResponse,
  ListIPSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(227) as any as S.Schema<ListIPSetsRequest>,
  output: __S(229) as any as S.Schema<ListIPSetsResponse>,
  errors: [WAFInternalErrorException, WAFInvalidOperationException, WAFInvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIPSets",
}));

export type ListLoggingConfigurationsError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | CommonErrors;
/**
 * Retrieves an array of your LoggingConfiguration objects.
 */
export const listLoggingConfigurations: API.OperationMethod<
  ListLoggingConfigurationsRequest,
  ListLoggingConfigurationsResponse,
  ListLoggingConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(230) as any as S.Schema<ListLoggingConfigurationsRequest>,
  output: __S(232) as any as S.Schema<ListLoggingConfigurationsResponse>,
  errors: [WAFInternalErrorException, WAFInvalidOperationException, WAFInvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLoggingConfigurations",
}));

export type ListManagedRuleSetsError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | CommonErrors;
/**
 * Retrieves the managed rule sets that you own.
 *
 * This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers.
 *
 * Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are `ListManagedRuleSets`, `GetManagedRuleSet`, `PutManagedRuleSetVersions`, and `UpdateManagedRuleSetVersionExpiryDate`.
 */
export const listManagedRuleSets: API.OperationMethod<
  ListManagedRuleSetsRequest,
  ListManagedRuleSetsResponse,
  ListManagedRuleSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(233) as any as S.Schema<ListManagedRuleSetsRequest>,
  output: __S(236) as any as S.Schema<ListManagedRuleSetsResponse>,
  errors: [WAFInternalErrorException, WAFInvalidOperationException, WAFInvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedRuleSets",
}));

export type ListMobileSdkReleasesError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | CommonErrors;
/**
 * Retrieves a list of the available releases for the mobile SDK and the specified device
 * platform.
 *
 * The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see
 * WAF client application integration in the *WAF Developer Guide*.
 */
export const listMobileSdkReleases: API.OperationMethod<
  ListMobileSdkReleasesRequest,
  ListMobileSdkReleasesResponse,
  ListMobileSdkReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(237) as any as S.Schema<ListMobileSdkReleasesRequest>,
  output: __S(240) as any as S.Schema<ListMobileSdkReleasesResponse>,
  errors: [WAFInternalErrorException, WAFInvalidOperationException, WAFInvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMobileSdkReleases",
}));

export type ListRegexPatternSetsError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | CommonErrors;
/**
 * Retrieves an array of RegexPatternSetSummary objects for the regex
 * pattern sets that you manage.
 */
export const listRegexPatternSets: API.OperationMethod<
  ListRegexPatternSetsRequest,
  ListRegexPatternSetsResponse,
  ListRegexPatternSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(241) as any as S.Schema<ListRegexPatternSetsRequest>,
  output: __S(242) as any as S.Schema<ListRegexPatternSetsResponse>,
  errors: [WAFInternalErrorException, WAFInvalidOperationException, WAFInvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRegexPatternSets",
}));

export type ListResourcesForWebACLError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Retrieves an array of the Amazon Resource Names (ARNs) for the resources that
 * are associated with the specified web ACL.
 *
 * For Amazon CloudFront, don't use this call. Instead, use the CloudFront call
 * `ListDistributionsByWebACLId`. For information, see ListDistributionsByWebACLId
 * in the *Amazon CloudFront API Reference*.
 *
 * **Required permissions for customer-managed IAM policies**
 *
 * This call requires permissions that are specific to the protected resource type.
 * For details, see Permissions for ListResourcesForWebACL in the *WAF Developer Guide*.
 */
export const listResourcesForWebACL: API.OperationMethod<
  ListResourcesForWebACLRequest,
  ListResourcesForWebACLResponse,
  ListResourcesForWebACLError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(243) as any as S.Schema<ListResourcesForWebACLRequest>,
  output: __S(244) as any as S.Schema<ListResourcesForWebACLResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourcesForWebACL",
}));

export type ListRuleGroupsError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | CommonErrors;
/**
 * Retrieves an array of RuleGroupSummary objects for the rule groups
 * that you manage.
 */
export const listRuleGroups: API.OperationMethod<
  ListRuleGroupsRequest,
  ListRuleGroupsResponse,
  ListRuleGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(245) as any as S.Schema<ListRuleGroupsRequest>,
  output: __S(246) as any as S.Schema<ListRuleGroupsResponse>,
  errors: [WAFInternalErrorException, WAFInvalidOperationException, WAFInvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRuleGroups",
}));

export type ListSettlementRecordsError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Retrieves individual settlement transaction records for monetization. Each record represents a single payment transaction between a client and your protected resource. This operation is only available for `CLOUDFRONT` scope. The maximum supported time window is 90 days. When no `CurrencyMode` filter is provided, results default to `REAL`. To retrieve test data, include a `CurrencyMode` filter with the value `TEST`.
 */
export const listSettlementRecords: API.OperationMethod<
  ListSettlementRecordsRequest,
  ListSettlementRecordsResponse,
  ListSettlementRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(247) as any as S.Schema<ListSettlementRecordsRequest>,
  output: __S(250) as any as S.Schema<ListSettlementRecordsResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSettlementRecords",
}));

export type ListTagsForResourceError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException
  | CommonErrors;
/**
 * Retrieves the TagInfoForResource for the specified resource. Tags are
 * key:value pairs that you can use to categorize and manage your resources, for purposes like
 * billing. For example, you might set the tag key to "customer" and the value to the customer
 * name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags
 * for a resource.
 *
 * You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule
 * groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF
 * console.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(251) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(253) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
    WAFTagOperationException,
    WAFTagOperationInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListWebACLsError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | CommonErrors;
/**
 * Retrieves an array of WebACLSummary objects for the web ACLs that you
 * manage.
 */
export const listWebACLs: API.OperationMethod<
  ListWebACLsRequest,
  ListWebACLsResponse,
  ListWebACLsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(254) as any as S.Schema<ListWebACLsRequest>,
  output: __S(255) as any as S.Schema<ListWebACLsResponse>,
  errors: [WAFInternalErrorException, WAFInvalidOperationException, WAFInvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWebACLs",
}));

export type PutLoggingConfigurationError =
  | WAFFeatureNotIncludedInPricingPlanException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFLimitsExceededException
  | WAFLogDestinationPermissionIssueException
  | WAFNonexistentItemException
  | WAFOptimisticLockException
  | WAFServiceLinkedRoleErrorException
  | CommonErrors;
/**
 * Enables the specified LoggingConfiguration, to start logging from a
 * web ACL, according to the configuration provided.
 *
 * If you configure data protection for the web ACL, the protection applies to the data that WAF sends to the logs.
 *
 * This operation completely replaces any mutable specifications that you already have for a logging configuration with the ones that you provide to this call.
 *
 * To modify an existing logging configuration, do the following:
 *
 * - Retrieve it by calling GetLoggingConfiguration
 *
 * - Update its settings as needed
 *
 * - Provide the complete logging configuration specification to this call
 *
 * You can define one logging destination per web ACL.
 *
 * You can access information about the traffic that WAF inspects using the following
 * steps:
 *
 * - Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose.
 *
 * The name that you give the destination must start with `aws-waf-logs-`. Depending on the type of destination, you might need to configure additional settings or permissions.
 *
 * For configuration requirements and pricing information for each destination type, see
 * Logging web ACL traffic
 * in the *WAF Developer Guide*.
 *
 * - Associate your logging destination to your web ACL using a
 * `PutLoggingConfiguration` request.
 *
 * When you successfully enable logging using a `PutLoggingConfiguration`
 * request, WAF creates an additional role or policy that is required to write
 * logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group.
 * For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role.
 *
 * For additional information about web ACL logging, see
 * Logging web ACL traffic information
 * in the *WAF Developer Guide*.
 */
export const putLoggingConfiguration: API.OperationMethod<
  PutLoggingConfigurationRequest,
  PutLoggingConfigurationResponse,
  PutLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(256) as any as S.Schema<PutLoggingConfigurationRequest>,
  output: __S(156) as any as S.Schema<PutLoggingConfigurationResponse>,
  errors: [
    WAFFeatureNotIncludedInPricingPlanException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFLimitsExceededException,
    WAFLogDestinationPermissionIssueException,
    WAFNonexistentItemException,
    WAFOptimisticLockException,
    WAFServiceLinkedRoleErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutLoggingConfiguration",
}));

export type PutManagedRuleSetVersionsError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | WAFOptimisticLockException
  | CommonErrors;
/**
 * Defines the versions of your managed rule set that you are offering to the customers.
 * Customers see your offerings as managed rule groups with versioning.
 *
 * This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers.
 *
 * Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are `ListManagedRuleSets`, `GetManagedRuleSet`, `PutManagedRuleSetVersions`, and `UpdateManagedRuleSetVersionExpiryDate`.
 *
 * Customers retrieve their managed rule group list by calling ListAvailableManagedRuleGroups. The name that you provide here for your
 * managed rule set is the name the customer sees for the corresponding managed rule group.
 * Customers can retrieve the available versions for a managed rule group by calling ListAvailableManagedRuleGroupVersions. You provide a rule group
 * specification for each version. For each managed rule set, you must specify a version that
 * you recommend using.
 *
 * To initiate the expiration of a managed rule group version, use UpdateManagedRuleSetVersionExpiryDate.
 */
export const putManagedRuleSetVersions: API.OperationMethod<
  PutManagedRuleSetVersionsRequest,
  PutManagedRuleSetVersionsResponse,
  PutManagedRuleSetVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(259) as any as S.Schema<PutManagedRuleSetVersionsRequest>,
  output: __S(260) as any as S.Schema<PutManagedRuleSetVersionsResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
    WAFOptimisticLockException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutManagedRuleSetVersions",
}));

export type PutPermissionPolicyError =
  | WAFInternalErrorException
  | WAFInvalidParameterException
  | WAFInvalidPermissionPolicyException
  | WAFNonexistentItemException
  | CommonErrors;
/**
 * Use this to share a rule group with other accounts.
 *
 * This action attaches an IAM policy to the specified resource. You must be the owner of the rule group to perform this operation.
 *
 * This action is subject to the following restrictions:
 *
 * - You can attach only one policy with each `PutPermissionPolicy`
 * request.
 *
 * - The ARN in the request must be a valid WAF RuleGroup ARN and the
 * rule group must exist in the same Region.
 *
 * - The user making the request must be the owner of the rule group.
 *
 * If a rule group has been shared with your account, you can access it through the call `GetRuleGroup`,
 * and you can reference it in `CreateWebACL` and `UpdateWebACL`.
 * Rule groups that are shared with you don't appear in your WAF console rule groups listing.
 */
export const putPermissionPolicy: API.OperationMethod<
  PutPermissionPolicyRequest,
  PutPermissionPolicyResponse,
  PutPermissionPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(261) as any as S.Schema<PutPermissionPolicyRequest>,
  output: __S(122) as any as S.Schema<PutPermissionPolicyResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidParameterException,
    WAFInvalidPermissionPolicyException,
    WAFNonexistentItemException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutPermissionPolicy",
}));

export type TagResourceError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFLimitsExceededException
  | WAFNonexistentItemException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException
  | CommonErrors;
/**
 * Associates tags with the specified Amazon Web Services resource. Tags are key:value pairs that you can
 * use to categorize and manage your resources, for purposes like billing. For example, you
 * might set the tag key to "customer" and the value to the customer name or ID. You can
 * specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a
 * resource.
 *
 * You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule
 * groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF
 * console.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(262) as any as S.Schema<TagResourceRequest>,
  output: __S(117) as any as S.Schema<TagResourceResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFLimitsExceededException,
    WAFNonexistentItemException,
    WAFTagOperationException,
    WAFTagOperationInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException
  | CommonErrors;
/**
 * Disassociates tags from an Amazon Web Services resource. Tags are key:value pairs that you can
 * associate with Amazon Web Services resources. For example, the tag key might be "customer" and the tag
 * value might be "companyA." You can specify one or more tags to add to each container. You
 * can add up to 50 tags to each Amazon Web Services resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(263) as any as S.Schema<UntagResourceRequest>,
  output: __S(117) as any as S.Schema<UntagResourceResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
    WAFTagOperationException,
    WAFTagOperationInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateIPSetError =
  | WAFDuplicateItemException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFLimitsExceededException
  | WAFNonexistentItemException
  | WAFOptimisticLockException
  | CommonErrors;
/**
 * Updates the specified IPSet.
 *
 * This operation completely replaces the mutable specifications that you already have for the IP set with the ones that you provide to this call.
 *
 * To modify an IP set, do the following:
 *
 * - Retrieve it by calling GetIPSet
 *
 * - Update its settings as needed
 *
 * - Provide the complete IP set specification to this call
 *
 * **Temporary inconsistencies during updates**
 *
 * When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes.
 *
 * The following are examples of the temporary inconsistencies that you might notice during change propagation:
 *
 * - After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable.
 *
 * - After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another.
 *
 * - After you change a rule action setting, you might see the old action in some places and the new action in others.
 *
 * - After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.
 */
export const updateIPSet: API.OperationMethod<
  UpdateIPSetRequest,
  UpdateIPSetResponse,
  UpdateIPSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(264) as any as S.Schema<UpdateIPSetRequest>,
  output: __S(265) as any as S.Schema<UpdateIPSetResponse>,
  errors: [
    WAFDuplicateItemException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFLimitsExceededException,
    WAFNonexistentItemException,
    WAFOptimisticLockException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIPSet",
}));

export type UpdateManagedRuleSetVersionExpiryDateError =
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | WAFOptimisticLockException
  | CommonErrors;
/**
 * Updates the expiration information for your managed rule set. Use this to initiate the
 * expiration of a managed rule group version. After you initiate expiration for a version,
 * WAF excludes it from the response to ListAvailableManagedRuleGroupVersions for the managed rule group.
 *
 * This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers.
 *
 * Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are `ListManagedRuleSets`, `GetManagedRuleSet`, `PutManagedRuleSetVersions`, and `UpdateManagedRuleSetVersionExpiryDate`.
 */
export const updateManagedRuleSetVersionExpiryDate: API.OperationMethod<
  UpdateManagedRuleSetVersionExpiryDateRequest,
  UpdateManagedRuleSetVersionExpiryDateResponse,
  UpdateManagedRuleSetVersionExpiryDateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(266) as any as S.Schema<UpdateManagedRuleSetVersionExpiryDateRequest>,
  output: __S(267) as any as S.Schema<UpdateManagedRuleSetVersionExpiryDateResponse>,
  errors: [
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFNonexistentItemException,
    WAFOptimisticLockException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateManagedRuleSetVersionExpiryDate",
}));

export type UpdateRegexPatternSetError =
  | WAFDuplicateItemException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFLimitsExceededException
  | WAFNonexistentItemException
  | WAFOptimisticLockException
  | CommonErrors;
/**
 * Updates the specified RegexPatternSet.
 *
 * This operation completely replaces the mutable specifications that you already have for the regex pattern set with the ones that you provide to this call.
 *
 * To modify a regex pattern set, do the following:
 *
 * - Retrieve it by calling GetRegexPatternSet
 *
 * - Update its settings as needed
 *
 * - Provide the complete regex pattern set specification to this call
 *
 * **Temporary inconsistencies during updates**
 *
 * When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes.
 *
 * The following are examples of the temporary inconsistencies that you might notice during change propagation:
 *
 * - After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable.
 *
 * - After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another.
 *
 * - After you change a rule action setting, you might see the old action in some places and the new action in others.
 *
 * - After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.
 */
export const updateRegexPatternSet: API.OperationMethod<
  UpdateRegexPatternSetRequest,
  UpdateRegexPatternSetResponse,
  UpdateRegexPatternSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(268) as any as S.Schema<UpdateRegexPatternSetRequest>,
  output: __S(260) as any as S.Schema<UpdateRegexPatternSetResponse>,
  errors: [
    WAFDuplicateItemException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFLimitsExceededException,
    WAFNonexistentItemException,
    WAFOptimisticLockException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRegexPatternSet",
}));

export type UpdateRuleGroupError =
  | WAFConfigurationWarningException
  | WAFDuplicateItemException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFLimitsExceededException
  | WAFNonexistentItemException
  | WAFOptimisticLockException
  | WAFSubscriptionNotFoundException
  | WAFUnavailableEntityException
  | CommonErrors;
/**
 * Updates the specified RuleGroup.
 *
 * This operation completely replaces the mutable specifications that you already have for the rule group with the ones that you provide to this call.
 *
 * To modify a rule group, do the following:
 *
 * - Retrieve it by calling GetRuleGroup
 *
 * - Update its settings as needed
 *
 * - Provide the complete rule group specification to this call
 *
 * A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements.
 *
 * **Temporary inconsistencies during updates**
 *
 * When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes.
 *
 * The following are examples of the temporary inconsistencies that you might notice during change propagation:
 *
 * - After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable.
 *
 * - After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another.
 *
 * - After you change a rule action setting, you might see the old action in some places and the new action in others.
 *
 * - After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.
 */
export const updateRuleGroup: API.OperationMethod<
  UpdateRuleGroupRequest,
  UpdateRuleGroupResponse,
  UpdateRuleGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(269) as any as S.Schema<UpdateRuleGroupRequest>,
  output: __S(265) as any as S.Schema<UpdateRuleGroupResponse>,
  errors: [
    WAFConfigurationWarningException,
    WAFDuplicateItemException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFLimitsExceededException,
    WAFNonexistentItemException,
    WAFOptimisticLockException,
    WAFSubscriptionNotFoundException,
    WAFUnavailableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRuleGroup",
}));

export type UpdateWebACLError =
  | WAFConfigurationWarningException
  | WAFDuplicateItemException
  | WAFExpiredManagedRuleGroupVersionException
  | WAFFeatureNotIncludedInPricingPlanException
  | WAFInternalErrorException
  | WAFInvalidOperationException
  | WAFInvalidParameterException
  | WAFInvalidResourceException
  | WAFLimitsExceededException
  | WAFNonexistentItemException
  | WAFOptimisticLockException
  | WAFSubscriptionNotFoundException
  | WAFUnavailableEntityException
  | CommonErrors;
/**
 * Updates the specified WebACL. While updating a web ACL, WAF provides
 * continuous coverage to the resources that you have associated with the web ACL.
 *
 * This operation completely replaces the mutable specifications that you already have for the web ACL with the ones that you provide to this call.
 *
 * To modify a web ACL, do the following:
 *
 * - Retrieve it by calling GetWebACL
 *
 * - Update its settings as needed
 *
 * - Provide the complete web ACL specification to this call
 *
 * A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has a statement that defines what to look for in web requests and an action that WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types Rule, RuleGroup, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resource types include Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync GraphQL API, Amazon Cognito user pool, App Runner service, Amplify application, Amazon Web Services Verified Access instance, and Amazon Bedrock AgentCore Gateway.
 *
 * **Temporary inconsistencies during updates**
 *
 * When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes.
 *
 * The following are examples of the temporary inconsistencies that you might notice during change propagation:
 *
 * - After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable.
 *
 * - After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another.
 *
 * - After you change a rule action setting, you might see the old action in some places and the new action in others.
 *
 * - After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.
 */
export const updateWebACL: API.OperationMethod<
  UpdateWebACLRequest,
  UpdateWebACLResponse,
  UpdateWebACLError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(270) as any as S.Schema<UpdateWebACLRequest>,
  output: __S(265) as any as S.Schema<UpdateWebACLResponse>,
  errors: [
    WAFConfigurationWarningException,
    WAFDuplicateItemException,
    WAFExpiredManagedRuleGroupVersionException,
    WAFFeatureNotIncludedInPricingPlanException,
    WAFInternalErrorException,
    WAFInvalidOperationException,
    WAFInvalidParameterException,
    WAFInvalidResourceException,
    WAFLimitsExceededException,
    WAFNonexistentItemException,
    WAFOptimisticLockException,
    WAFSubscriptionNotFoundException,
    WAFUnavailableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWebACL",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ WebACLArn: S.String, ResourceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AssociateWebACLRequest" });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AssociateWebACLResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ Name: S.String })).annotate({
        identifier: "SingleHeader",
      });
    case 3:
      return S.suspend(() => S.Struct({ Name: S.String })).annotate({
        identifier: "SingleQueryArgument",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AllQueryArguments",
      });
    case 5:
      return S.suspend(() => S.Struct({ OversizeHandling: S.optional(S.String) })).annotate({
        identifier: "Body",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ All: S.optional(__S(4)), IncludedPaths: S.optional(__S(6)) }),
      ).annotate({ identifier: "JsonMatchPattern" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MatchPattern: __S(7),
          MatchScope: S.String,
          InvalidFallbackBehavior: S.optional(S.String),
          OversizeHandling: S.optional(S.String),
        }),
      ).annotate({ identifier: "JsonBody" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          All: S.optional(__S(4)),
          IncludedHeaders: S.optional(__S(6)),
          ExcludedHeaders: S.optional(__S(6)),
        }),
      ).annotate({ identifier: "HeaderMatchPattern" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MatchPattern: __S(9),
          MatchScope: S.String,
          OversizeHandling: S.String,
        }),
      ).annotate({ identifier: "Headers" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          All: S.optional(__S(4)),
          IncludedCookies: S.optional(__S(6)),
          ExcludedCookies: S.optional(__S(6)),
        }),
      ).annotate({ identifier: "CookieMatchPattern" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MatchPattern: __S(11),
          MatchScope: S.String,
          OversizeHandling: S.String,
        }),
      ).annotate({ identifier: "Cookies" });
    case 5:
      return S.suspend(() => S.Struct({ OversizeHandling: S.String })).annotate({
        identifier: "HeaderOrder",
      });
    case 6:
      return S.suspend(() => S.Struct({ FallbackBehavior: S.String })).annotate({
        identifier: "JA3Fingerprint",
      });
    case 7:
      return S.suspend(() => S.Struct({ FallbackBehavior: S.optional(S.String) })).annotate({
        identifier: "UriFragment",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SingleHeader: S.optional(__S(2)),
          SingleQueryArgument: S.optional(__S(3)),
          AllQueryArguments: S.optional(__S(4)),
          UriPath: S.optional(__S(4)),
          QueryString: S.optional(__S(4)),
          Body: S.optional(__S(5)),
          Method: S.optional(__S(4)),
          JsonBody: S.optional(__S(8)),
          Headers: S.optional(__S(10)),
          Cookies: S.optional(__S(12)),
          HeaderOrder: S.optional(__S(13)),
          JA3Fingerprint: S.optional(__S(14)),
          JA4Fingerprint: S.optional(__S(14)),
          UriFragment: S.optional(__S(15)),
        }),
      ).annotate({ identifier: "FieldToMatch" });
    case 1:
      return S.suspend(() => S.Struct({ Priority: S.Number, Type: S.String })).annotate({
        identifier: "TextTransformation",
      });
    case 2:
      return S.Array(__S(17));
    case 3:
      return S.suspend(() => S.Struct({ Priority: S.Number, Type: S.String })).annotate({
        identifier: "PreParseTextTransformation",
      });
    case 4:
      return S.Array(__S(19));
    case 5:
      return S.suspend(() =>
        S.Struct({
          SearchString: T.Blob,
          FieldToMatch: __S(16),
          TextTransformations: __S(18),
          PreParseTextTransformations: S.optional(__S(20)),
          PositionalConstraint: S.String,
        }),
      ).annotate({ identifier: "ByteMatchStatement" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FieldToMatch: __S(16),
          TextTransformations: __S(18),
          PreParseTextTransformations: S.optional(__S(20)),
          SensitivityLevel: S.optional(S.String),
        }),
      ).annotate({ identifier: "SqliMatchStatement" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          FieldToMatch: __S(16),
          TextTransformations: __S(18),
          PreParseTextTransformations: S.optional(__S(20)),
        }),
      ).annotate({ identifier: "XssMatchStatement" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FieldToMatch: __S(16),
          ComparisonOperator: S.String,
          Size: S.Number,
          TextTransformations: __S(18),
          PreParseTextTransformations: S.optional(__S(20)),
        }),
      ).annotate({ identifier: "SizeConstraintStatement" });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({ HeaderName: S.String, FallbackBehavior: S.String }),
      ).annotate({ identifier: "ForwardedIPConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CountryCodes: S.optional(__S(25)),
          ForwardedIPConfig: S.optional(__S(26)),
        }),
      ).annotate({ identifier: "GeoMatchStatement" });
    case 4:
      return S.Array(__S(2));
    case 5:
      return S.suspend(() => S.Struct({ Name: S.String, Value: S.String })).annotate({
        identifier: "CustomHTTPHeader",
      });
    case 6:
      return S.Array(__S(29));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResponseCode: S.Number,
          CustomResponseBodyKey: S.optional(S.String),
          ResponseHeaders: S.optional(__S(30)),
        }),
      ).annotate({ identifier: "CustomResponse" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ CustomResponse: S.optional(__S(31)) })).annotate({
        identifier: "BlockAction",
      });
    case 1:
      return S.suspend(() => S.Struct({ InsertHeaders: __S(30) })).annotate({
        identifier: "CustomRequestHandling",
      });
    case 2:
      return S.suspend(() => S.Struct({ CustomRequestHandling: S.optional(__S(33)) })).annotate({
        identifier: "AllowAction",
      });
    case 3:
      return S.suspend(() => S.Struct({ PriceMultiplier: S.optional(S.String) })).annotate({
        identifier: "MonetizeAction",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Block: S.optional(__S(32)),
          Allow: S.optional(__S(34)),
          Count: S.optional(__S(34)),
          Captcha: S.optional(__S(34)),
          Challenge: S.optional(__S(34)),
          Monetize: S.optional(__S(35)),
        }),
      ).annotate({ identifier: "RuleAction" });
    case 5:
      return S.suspend(() => S.Struct({ Name: S.String, ActionToUse: __S(36) })).annotate({
        identifier: "RuleActionOverride",
      });
    case 6:
      return S.Array(__S(37));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ARN: S.String,
          ExcludedRules: S.optional(__S(28)),
          RuleActionOverrides: S.optional(__S(38)),
        }),
      ).annotate({
        identifier: "RuleGroupReferenceStatement",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          HeaderName: S.String,
          FallbackBehavior: S.String,
          Position: S.String,
        }),
      ).annotate({ identifier: "IPSetForwardedIPConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ARN: S.String, IPSetForwardedIPConfig: S.optional(__S(40)) }),
      ).annotate({ identifier: "IPSetReferenceStatement" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ARN: S.String,
          FieldToMatch: __S(16),
          TextTransformations: __S(18),
          PreParseTextTransformations: S.optional(__S(20)),
        }),
      ).annotate({
        identifier: "RegexPatternSetReferenceStatement",
      });
    case 3:
      return S.suspend(() => S.Struct({ Name: S.String, TextTransformations: __S(18) })).annotate({
        identifier: "RateLimitHeader",
      });
    case 4:
      return S.suspend(() => S.Struct({ TextTransformations: __S(18) })).annotate({
        identifier: "RateLimitQueryString",
      });
    case 5:
      return S.suspend(() => S.Struct({ Namespace: S.String })).annotate({
        identifier: "RateLimitLabelNamespace",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Header: S.optional(__S(43)),
          Cookie: S.optional(__S(43)),
          QueryArgument: S.optional(__S(43)),
          QueryString: S.optional(__S(44)),
          HTTPMethod: S.optional(__S(4)),
          ForwardedIP: S.optional(__S(4)),
          IP: S.optional(__S(4)),
          LabelNamespace: S.optional(__S(45)),
          UriPath: S.optional(__S(44)),
          JA3Fingerprint: S.optional(__S(14)),
          JA4Fingerprint: S.optional(__S(14)),
          ASN: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "RateBasedStatementCustomKey",
      });
    case 7:
      return S.Array(__S(46));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Limit: S.Number,
          EvaluationWindowSec: S.optional(S.Number),
          AggregateKeyType: S.String,
          ScopeDownStatement: S.optional(
            S.suspend((): S.Schema<Statement> => __S(76)).annotate({ identifier: "Statement" }),
          ),
          ForwardedIPConfig: S.optional(__S(26)),
          CustomKeys: S.optional(__S(47)),
        }),
      ).annotate({ identifier: "RateBasedStatement" });
    case 1:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<Statement> => __S(76)).annotate({
          identifier: "Statement",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          Statements: S.suspend(() => __S(49)).annotate({ identifier: "Statements" }),
        }),
      ).annotate({ identifier: "AndStatement" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Statement: S.suspend((): S.Schema<Statement> => __S(76)).annotate({
            identifier: "Statement",
          }),
        }),
      ).annotate({ identifier: "NotStatement" });
    case 4:
      return S.suspend(() => S.Struct({ Identifier: S.String })).annotate({
        identifier: "UsernameField",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InspectionLevel: S.String,
          EnableMachineLearning: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AWSManagedRulesBotControlRuleSet",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PayloadType: S.String,
          UsernameField: __S(52),
          PasswordField: __S(52),
        }),
      ).annotate({ identifier: "RequestInspection" });
    case 7:
      return S.Array(S.Number);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SuccessCodes: __S(55),
          FailureCodes: __S(55),
        }),
      ).annotate({
        identifier: "ResponseInspectionStatusCode",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          SuccessValues: __S(6),
          FailureValues: __S(6),
        }),
      ).annotate({ identifier: "ResponseInspectionHeader" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SuccessStrings: __S(6),
          FailureStrings: __S(6),
        }),
      ).annotate({
        identifier: "ResponseInspectionBodyContains",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String,
          SuccessValues: __S(6),
          FailureValues: __S(6),
        }),
      ).annotate({ identifier: "ResponseInspectionJson" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StatusCode: S.optional(__S(56)),
          Header: S.optional(__S(57)),
          BodyContains: S.optional(__S(58)),
          Json: S.optional(__S(59)),
        }),
      ).annotate({ identifier: "ResponseInspection" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LoginPath: S.String,
          RequestInspection: S.optional(__S(54)),
          ResponseInspection: S.optional(__S(60)),
          EnableRegexInPath: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AWSManagedRulesATPRuleSet",
      });
    case 6:
      return S.Array(__S(52));
    case 7:
      return S.suspend(() =>
        S.Struct({
          PayloadType: S.String,
          UsernameField: S.optional(__S(52)),
          PasswordField: S.optional(__S(52)),
          EmailField: S.optional(__S(52)),
          PhoneNumberFields: S.optional(__S(62)),
          AddressFields: S.optional(__S(62)),
        }),
      ).annotate({ identifier: "RequestInspectionACFP" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CreationPath: S.String,
          RegistrationPagePath: S.String,
          RequestInspection: __S(63),
          ResponseInspection: S.optional(__S(60)),
          EnableRegexInPath: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AWSManagedRulesACFPRuleSet",
      });
    case 1:
      return S.suspend(() => S.Struct({ RegexString: S.optional(S.String) })).annotate({
        identifier: "Regex",
      });
    case 2:
      return S.Array(__S(65));
    case 3:
      return S.suspend(() =>
        S.Struct({
          UsageOfAction: S.String,
          Sensitivity: S.optional(S.String),
          ExemptUriRegularExpressions: S.optional(__S(66)),
        }),
      ).annotate({ identifier: "ClientSideAction" });
    case 4:
      return S.suspend(() => S.Struct({ Challenge: __S(67) })).annotate({
        identifier: "ClientSideActionConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClientSideActionConfig: __S(68),
          SensitivityToBlock: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AWSManagedRulesAntiDDoSRuleSet",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LoginPath: S.optional(S.String),
          PayloadType: S.optional(S.String),
          UsernameField: S.optional(__S(52)),
          PasswordField: S.optional(__S(52)),
          AWSManagedRulesBotControlRuleSet: S.optional(__S(53)),
          AWSManagedRulesATPRuleSet: S.optional(__S(61)),
          AWSManagedRulesACFPRuleSet: S.optional(__S(64)),
          AWSManagedRulesAntiDDoSRuleSet: S.optional(__S(69)),
        }),
      ).annotate({ identifier: "ManagedRuleGroupConfig" });
    case 7:
      return S.Array(__S(70));
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VendorName: S.String,
          Name: S.String,
          Version: S.optional(S.String),
          ExcludedRules: S.optional(__S(28)),
          ScopeDownStatement: S.optional(
            S.suspend((): S.Schema<Statement> => __S(76)).annotate({ identifier: "Statement" }),
          ),
          ManagedRuleGroupConfigs: S.optional(__S(71)),
          RuleActionOverrides: S.optional(__S(38)),
        }),
      ).annotate({
        identifier: "ManagedRuleGroupStatement",
      });
    case 1:
      return S.suspend(() => S.Struct({ Scope: S.String, Key: S.String })).annotate({
        identifier: "LabelMatchStatement",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RegexString: S.String,
          FieldToMatch: __S(16),
          TextTransformations: __S(18),
          PreParseTextTransformations: S.optional(__S(20)),
        }),
      ).annotate({ identifier: "RegexMatchStatement" });
    case 3:
      return S.suspend(() =>
        S.Struct({ AsnList: __S(55), ForwardedIPConfig: S.optional(__S(26)) }),
      ).annotate({ identifier: "AsnMatchStatement" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ByteMatchStatement: S.optional(__S(21)),
          SqliMatchStatement: S.optional(__S(22)),
          XssMatchStatement: S.optional(__S(23)),
          SizeConstraintStatement: S.optional(__S(24)),
          GeoMatchStatement: S.optional(__S(27)),
          RuleGroupReferenceStatement: S.optional(__S(39)),
          IPSetReferenceStatement: S.optional(__S(41)),
          RegexPatternSetReferenceStatement: S.optional(__S(42)),
          RateBasedStatement: S.optional(
            S.suspend((): S.Schema<RateBasedStatement> => __S(48)).annotate({
              identifier: "RateBasedStatement",
            }),
          ),
          AndStatement: S.optional(
            S.suspend((): S.Schema<AndStatement> => __S(50)).annotate({
              identifier: "AndStatement",
            }),
          ),
          OrStatement: S.optional(
            S.suspend((): S.Schema<OrStatement> => __S(50)).annotate({
              identifier: "OrStatement",
            }),
          ),
          NotStatement: S.optional(
            S.suspend((): S.Schema<NotStatement> => __S(51)).annotate({
              identifier: "NotStatement",
            }),
          ),
          ManagedRuleGroupStatement: S.optional(
            S.suspend((): S.Schema<ManagedRuleGroupStatement> => __S(72)).annotate({
              identifier: "ManagedRuleGroupStatement",
            }),
          ),
          LabelMatchStatement: S.optional(__S(73)),
          RegexMatchStatement: S.optional(__S(74)),
          AsnMatchStatement: S.optional(__S(75)),
        }),
      ).annotate({ identifier: "Statement" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Count: S.optional(__S(34)), None: S.optional(__S(4)) }),
      ).annotate({ identifier: "OverrideAction" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SampledRequestsEnabled: S.Boolean,
          CloudWatchMetricsEnabled: S.Boolean,
          MetricName: S.String,
        }),
      ).annotate({ identifier: "VisibilityConfig" });
    case 7:
      return S.suspend(() => S.Struct({ ImmunityTime: S.Number })).annotate({
        identifier: "ImmunityTimeProperty",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ImmunityTimeProperty: S.optional(__S(79)) })).annotate({
        identifier: "CaptchaConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Priority: S.Number,
          Statement: __S(76),
          Action: S.optional(__S(36)),
          OverrideAction: S.optional(__S(77)),
          RuleLabels: S.optional(__S(28)),
          VisibilityConfig: __S(78),
          CaptchaConfig: S.optional(__S(80)),
          ChallengeConfig: S.optional(__S(80)),
        }),
      ).annotate({ identifier: "Rule" });
    case 2:
      return S.Array(__S(81));
    case 3:
      return S.suspend(() =>
        S.Struct({ Scope: S.String, Rules: __S(82) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CheckCapacityRequest" });
    case 4:
      return S.suspend(() => S.Struct({ Capacity: S.optional(S.Number) }).pipe(ns)).annotate({
        identifier: "CheckCapacityResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Scope: S.String, TokenDomains: __S(6) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateAPIKeyRequest" });
    case 6:
      return S.suspend(() => S.Struct({ APIKey: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateAPIKeyResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: S.String,
          Description: S.optional(S.String),
          IPAddressVersion: S.String,
          Addresses: __S(6),
          Tags: S.optional(__S(88)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateIPSetRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Id: S.optional(S.String),
          Description: S.optional(S.String),
          LockToken: S.optional(S.String),
          ARN: S.optional(S.String),
        }),
      ).annotate({ identifier: "IPSetSummary" });
    case 3:
      return S.suspend(() => S.Struct({ Summary: S.optional(__S(90)) }).pipe(ns)).annotate({
        identifier: "CreateIPSetResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: S.String,
          Description: S.optional(S.String),
          RegularExpressionList: __S(66),
          Tags: S.optional(__S(88)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateRegexPatternSetRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ Summary: S.optional(__S(90)) }).pipe(ns)).annotate({
        identifier: "CreateRegexPatternSetResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ ContentType: S.String, Content: S.String })).annotate({
        identifier: "CustomResponseBody",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(94).pipe(S.optional));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Amount: S.String, Currency: S.String })).annotate({
        identifier: "Price",
      });
    case 1:
      return S.Array(__S(96));
    case 2:
      return S.suspend(() =>
        S.Struct({ Chain: S.String, WalletAddress: S.String, Prices: __S(97) }),
      ).annotate({ identifier: "PaymentNetwork" });
    case 3:
      return S.Array(__S(98));
    case 4:
      return S.suspend(() => S.Struct({ PaymentNetworks: __S(99) })).annotate({
        identifier: "CryptoConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CryptoConfig: S.optional(__S(100)),
          CurrencyMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "MonetizationConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: S.String,
          Capacity: S.Number,
          Description: S.optional(S.String),
          Rules: S.optional(__S(82)),
          VisibilityConfig: __S(78),
          Tags: S.optional(__S(88)),
          CustomResponseBodies: S.optional(__S(95)),
          MonetizationConfig: S.optional(__S(101)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRuleGroupRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Block: S.optional(__S(32)), Allow: S.optional(__S(34)) }),
      ).annotate({ identifier: "DefaultAction" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ FieldType: S.String, FieldKeys: S.optional(__S(6)) }),
      ).annotate({ identifier: "FieldToProtect" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Field: __S(104),
          Action: S.String,
          ExcludeRuleMatchDetails: S.optional(S.Boolean),
          ExcludeRateBasedDetails: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DataProtection" });
    case 2:
      return S.Array(__S(105));
    case 3:
      return S.suspend(() => S.Struct({ DataProtections: __S(106) })).annotate({
        identifier: "DataProtectionConfig",
      });
    case 4:
      return S.suspend(() => S.Struct({ DefaultSizeInspectionLimit: S.String })).annotate({
        identifier: "RequestBodyAssociatedResourceTypeConfig",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ __S(108).pipe(S.optional));
    case 6:
      return S.suspend(() => S.Struct({ RequestBody: S.optional(__S(109)) })).annotate({
        identifier: "AssociationConfig",
      });
    case 7:
      return S.suspend(() => S.Struct({ ALBLowReputationMode: S.String })).annotate({
        identifier: "OnSourceDDoSProtectionConfig",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Values: S.optional(__S(6)) }),
      ).annotate({ identifier: "ApplicationAttribute" });
    case 1:
      return S.Array(__S(112));
    case 2:
      return S.suspend(() => S.Struct({ Attributes: S.optional(__S(113)) })).annotate({
        identifier: "ApplicationConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: S.String,
          DefaultAction: __S(103),
          Description: S.optional(S.String),
          Rules: S.optional(__S(82)),
          VisibilityConfig: __S(78),
          DataProtectionConfig: S.optional(__S(107)),
          Tags: S.optional(__S(88)),
          CustomResponseBodies: S.optional(__S(95)),
          CaptchaConfig: S.optional(__S(80)),
          ChallengeConfig: S.optional(__S(80)),
          TokenDomains: S.optional(__S(6)),
          AssociationConfig: S.optional(__S(110)),
          OnSourceDDoSProtectionConfig: S.optional(__S(111)),
          ApplicationConfig: S.optional(__S(114)),
          MonetizationConfig: S.optional(__S(101)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateWebACLRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Scope: S.String, APIKey: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteAPIKeyRequest" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteAPIKeyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ WebACLArn: S.String, WebACLLockToken: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteFirewallManagerRuleGroupsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ NextWebACLLockToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DeleteFirewallManagerRuleGroupsResponse",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Scope: S.String, Id: S.String, LockToken: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteIPSetRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          LogType: S.optional(S.String),
          LogScope: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteLoggingConfigurationRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteLoggingConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeletePermissionPolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Scope: S.String, Id: S.String, LockToken: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteRegexPatternSetRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Scope: S.String, Id: S.String, LockToken: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteRuleGroupRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Scope: S.String, Id: S.String, LockToken: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteWebACLRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Scope: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAllManagedProductsRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VendorName: S.optional(S.String),
          ManagedRuleSetName: S.optional(S.String),
          ProductId: S.optional(S.String),
          ProductLink: S.optional(S.String),
          ProductTitle: S.optional(S.String),
          ProductDescription: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          IsVersioningSupported: S.optional(S.Boolean),
          IsAdvancedManagedRuleSet: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ManagedProductDescriptor" });
    case 1:
      return S.Array(__S(128));
    case 2:
      return S.suspend(() => S.Struct({ ManagedProducts: S.optional(__S(129)) }).pipe(ns)).annotate(
        {
          identifier: "DescribeAllManagedProductsResponse",
        },
      );
    case 3:
      return S.suspend(() =>
        S.Struct({ VendorName: S.String, Scope: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeManagedProductsByVendorRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          VendorName: S.String,
          Name: S.String,
          Scope: S.String,
          VersionName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeManagedRuleGroupRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Action: S.optional(__S(36)) }),
      ).annotate({ identifier: "RuleSummary" });
    case 6:
      return S.Array(__S(133));
    case 7:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "LabelSummary",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(135));
    case 1:
      return S.suspend(() =>
        S.Struct({
          VersionName: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          Capacity: S.optional(S.Number),
          Rules: S.optional(__S(134)),
          LabelNamespace: S.optional(S.String),
          AvailableLabels: S.optional(__S(136)),
          ConsumedLabels: S.optional(__S(136)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeManagedRuleGroupResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateWebACLRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Platform: S.String, ReleaseVersion: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GenerateMobileSdkReleaseUrlRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ Url: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "GenerateMobileSdkReleaseUrlResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Scope: S.String, APIKey: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetDecryptedAPIKeyRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TokenDomains: S.optional(__S(6)),
          CreationTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({
        identifier: "GetDecryptedAPIKeyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Scope: S.String, Id: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetIPSetRequest" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Id: S.String,
          ARN: S.String,
          Description: S.optional(S.String),
          IPAddressVersion: S.String,
          Addresses: __S(6),
        }),
      ).annotate({ identifier: "IPSet" });
    case 1:
      return S.suspend(() =>
        S.Struct({ IPSet: S.optional(__S(144)), LockToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "GetIPSetResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          LogType: S.optional(S.String),
          LogScope: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetLoggingConfigurationRequest",
      });
    case 3:
      return S.Array(__S(16));
    case 4:
      return S.suspend(() => S.Struct({ Action: S.String })).annotate({
        identifier: "ActionCondition",
      });
    case 5:
      return S.suspend(() => S.Struct({ LabelName: S.String })).annotate({
        identifier: "LabelNameCondition",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ActionCondition: S.optional(__S(148)),
          LabelNameCondition: S.optional(__S(149)),
        }),
      ).annotate({ identifier: "Condition" });
    case 7:
      return S.Array(__S(150));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Behavior: S.String,
          Requirement: S.String,
          Conditions: __S(151),
        }),
      ).annotate({ identifier: "Filter" });
    case 1:
      return S.Array(__S(152));
    case 2:
      return S.suspend(() => S.Struct({ Filters: __S(153), DefaultBehavior: S.String })).annotate({
        identifier: "LoggingFilter",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          LogDestinationConfigs: __S(6),
          RedactedFields: S.optional(__S(147)),
          ManagedByFirewallManager: S.optional(S.Boolean),
          LoggingFilter: S.optional(__S(154)),
          LogType: S.optional(S.String),
          LogScope: S.optional(S.String),
        }),
      ).annotate({ identifier: "LoggingConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({ LoggingConfiguration: S.optional(__S(155)) }).pipe(ns),
      ).annotate({
        identifier: "GetLoggingConfigurationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Scope: S.String, Id: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetManagedRuleSetRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AssociatedRuleGroupArn: S.optional(S.String),
          Capacity: S.optional(S.Number),
          ForecastedLifetime: S.optional(S.Number),
          PublishTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdateTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ExpiryTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ManagedRuleSetVersion" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(158).pipe(S.optional));
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Id: S.String,
          ARN: S.String,
          Description: S.optional(S.String),
          PublishedVersions: S.optional(__S(159)),
          RecommendedVersion: S.optional(S.String),
          LabelNamespace: S.optional(S.String),
        }),
      ).annotate({ identifier: "ManagedRuleSet" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ManagedRuleSet: S.optional(__S(160)),
          LockToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetManagedRuleSetResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Platform: S.String, ReleaseVersion: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetMobileSdkReleaseRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ReleaseVersion: S.optional(S.String),
          Timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ReleaseNotes: S.optional(S.String),
          Tags: S.optional(__S(88)),
        }),
      ).annotate({ identifier: "MobileSdkRelease" });
    case 4:
      return S.suspend(() =>
        S.Struct({ MobileSdkRelease: S.optional(__S(163)) }).pipe(ns),
      ).annotate({
        identifier: "GetMobileSdkReleaseResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetPermissionPolicyRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ Policy: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "GetPermissionPolicyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Scope: S.String,
          WebACLName: S.String,
          WebACLId: S.String,
          RuleGroupRuleName: S.optional(S.String),
          RuleName: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetRateBasedStatementManagedKeysRequest",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          IPAddressVersion: S.optional(S.String),
          Addresses: S.optional(__S(6)),
        }),
      ).annotate({
        identifier: "RateBasedStatementManagedKeysIPSet",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ManagedKeysIPV4: S.optional(__S(168)),
          ManagedKeysIPV6: S.optional(__S(168)),
        }).pipe(ns),
      ).annotate({
        identifier: "GetRateBasedStatementManagedKeysResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Scope: S.String, Id: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetRegexPatternSetRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Id: S.optional(S.String),
          ARN: S.optional(S.String),
          Description: S.optional(S.String),
          RegularExpressionList: S.optional(__S(66)),
        }),
      ).annotate({ identifier: "RegexPatternSet" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RegexPatternSet: S.optional(__S(171)),
          LockToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetRegexPatternSetResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "TimeWindow" });
    case 6:
      return S.suspend(() => S.Struct({ Name: S.String, Values: __S(6) })).annotate({
        identifier: "MonetizationFilter",
      });
    case 7:
      return S.Array(__S(174));
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StatisticType: S.String,
          TimeWindow: __S(173),
          Scope: S.String,
          Currency: S.String,
          GroupBy: S.optional(S.String),
          Filters: S.optional(__S(175)),
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
          SortBy: S.optional(S.String),
          SortOrder: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetRevenueStatisticsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SourceName: S.String,
          Percentage: S.Number,
          Amount: S.String,
          RequestCount: S.Number,
          SourceCategory: S.optional(S.String),
          Intent: S.optional(S.String),
          Organization: S.optional(S.String),
          Verified: S.optional(S.Boolean),
          GroupByValue: S.optional(S.String),
        }),
      ).annotate({ identifier: "SourceStatistics" });
    case 2:
      return S.Array(__S(177));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Path: S.String,
          Percentage: S.Number,
          Amount: S.String,
          RequestCount: S.Number,
        }),
      ).annotate({ identifier: "RevenuePathStatistics" });
    case 4:
      return S.Array(__S(179));
    case 5:
      return S.suspend(() =>
        S.Struct({
          SourceStatistics: S.optional(__S(178)),
          RevenuePathStatistics: S.optional(__S(180)),
          NextMarker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetRevenueStatisticsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TimeWindow: __S(173),
          Scope: S.String,
          Currency: S.String,
          Filters: S.optional(__S(175)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetRevenueStatisticsSummaryRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TotalAmount: S.optional(S.String),
          VerifiedAmount: S.optional(S.String),
          UnverifiedAmount: S.optional(S.String),
          Currency: S.optional(S.String),
          TotalSettled: S.optional(S.Number),
          TotalMonetizeServed: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RevenueBreakdown" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ RevenueBreakdown: S.optional(__S(183)) }).pipe(ns),
      ).annotate({
        identifier: "GetRevenueStatisticsSummaryResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          StatisticType: S.String,
          TimeWindow: __S(173),
          Scope: S.String,
          Interval: S.String,
          Currency: S.String,
          GroupBy: S.optional(S.String),
          Filters: S.optional(__S(175)),
          Limit: S.optional(S.Number),
          NextMarker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetRevenueStatisticsTimeSeriesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Date: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          MonetizeServedCount: S.optional(S.Number),
          SettledCount: S.optional(S.Number),
          TotalAmount: S.optional(S.String),
          Category: S.optional(S.String),
          Intent: S.optional(S.String),
          GroupByValue: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataPointEntry" });
    case 3:
      return S.Array(__S(186));
    case 4:
      return S.suspend(() =>
        S.Struct({ DataPoints: S.optional(__S(187)), NextMarker: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "GetRevenueStatisticsTimeSeriesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Scope: S.optional(S.String),
          Id: S.optional(S.String),
          ARN: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetRuleGroupRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Id: S.String,
          Capacity: S.Number,
          ARN: S.String,
          Description: S.optional(S.String),
          Rules: S.optional(__S(82)),
          VisibilityConfig: __S(78),
          LabelNamespace: S.optional(S.String),
          CustomResponseBodies: S.optional(__S(95)),
          AvailableLabels: S.optional(__S(136)),
          ConsumedLabels: S.optional(__S(136)),
          MonetizationConfig: S.optional(__S(101)),
        }),
      ).annotate({ identifier: "RuleGroup" });
    case 7:
      return S.suspend(() =>
        S.Struct({ RuleGroup: S.optional(__S(190)), LockToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "GetRuleGroupResponse" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          WebAclArn: S.String,
          RuleMetricName: S.String,
          Scope: S.String,
          TimeWindow: __S(173),
          MaxItems: S.Number,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetSampledRequestsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "HTTPHeader" });
    case 2:
      return S.Array(__S(193));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClientIP: S.optional(S.String),
          Country: S.optional(S.String),
          URI: S.optional(S.String),
          Method: S.optional(S.String),
          HTTPVersion: S.optional(S.String),
          Headers: S.optional(__S(194)),
        }),
      ).annotate({ identifier: "HTTPRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResponseCode: S.optional(S.Number),
          SolveTimestamp: S.optional(S.Number),
          FailureReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "CaptchaResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Request: __S(195),
          Weight: S.Number,
          Timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Action: S.optional(S.String),
          RuleNameWithinRuleGroup: S.optional(S.String),
          RequestHeadersInserted: S.optional(__S(194)),
          ResponseCodeSent: S.optional(S.Number),
          Labels: S.optional(__S(28)),
          CaptchaResponse: S.optional(__S(196)),
          ChallengeResponse: S.optional(__S(196)),
          OverriddenAction: S.optional(S.String),
        }),
      ).annotate({ identifier: "SampledHTTPRequest" });
    case 6:
      return S.Array(__S(197));
    case 7:
      return S.suspend(() =>
        S.Struct({
          SampledRequests: S.optional(__S(198)),
          PopulationSize: S.optional(S.Number),
          TimeWindow: S.optional(__S(173)),
        }).pipe(ns),
      ).annotate({
        identifier: "GetSampledRequestsResponse",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          WebAclArn: S.String,
          Scope: S.String,
          UriPathPrefix: S.optional(S.String),
          TimeWindow: __S(173),
          BotCategory: S.optional(S.String),
          BotOrganization: S.optional(S.String),
          BotName: S.optional(S.String),
          Limit: S.Number,
          NumberOfTopTrafficBotsPerPath: S.Number,
          NextMarker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetTopPathStatisticsByTrafficRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          BotCategory: S.optional(S.String),
          BotOrganization: S.optional(S.String),
          BotName: S.optional(S.String),
        }),
      ).annotate({ identifier: "FilterSource" });
    case 2:
      return S.suspend(() =>
        S.Struct({ BotName: S.String, RequestCount: S.Number, Percentage: S.Number }),
      ).annotate({ identifier: "BotStatistics" });
    case 3:
      return S.Array(__S(202));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Source: S.optional(__S(201)),
          Path: S.String,
          RequestCount: S.Number,
          Percentage: S.Number,
          TopBots: S.optional(__S(203)),
        }),
      ).annotate({ identifier: "PathStatistics" });
    case 5:
      return S.Array(__S(204));
    case 6:
      return S.suspend(() =>
        S.Struct({
          PathStatistics: __S(205),
          TotalRequestCount: S.Number,
          NextMarker: S.optional(S.String),
          TopCategories: S.optional(__S(205)),
        }).pipe(ns),
      ).annotate({
        identifier: "GetTopPathStatisticsByTrafficResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Scope: S.optional(S.String),
          Id: S.optional(S.String),
          ARN: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetWebACLRequest" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ManagedRuleGroupStatement: S.optional(__S(72)),
          RuleGroupReferenceStatement: S.optional(__S(39)),
        }),
      ).annotate({ identifier: "FirewallManagerStatement" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Priority: S.Number,
          FirewallManagerStatement: __S(208),
          OverrideAction: __S(77),
          VisibilityConfig: __S(78),
        }),
      ).annotate({ identifier: "FirewallManagerRuleGroup" });
    case 2:
      return S.Array(__S(209));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Id: S.String,
          ARN: S.String,
          DefaultAction: __S(103),
          Description: S.optional(S.String),
          Rules: S.optional(__S(82)),
          VisibilityConfig: __S(78),
          DataProtectionConfig: S.optional(__S(107)),
          Capacity: S.optional(S.Number),
          PreProcessFirewallManagerRuleGroups: S.optional(__S(210)),
          PostProcessFirewallManagerRuleGroups: S.optional(__S(210)),
          ManagedByFirewallManager: S.optional(S.Boolean),
          LabelNamespace: S.optional(S.String),
          CustomResponseBodies: S.optional(__S(95)),
          CaptchaConfig: S.optional(__S(80)),
          ChallengeConfig: S.optional(__S(80)),
          TokenDomains: S.optional(__S(6)),
          AssociationConfig: S.optional(__S(110)),
          RetrofittedByFirewallManager: S.optional(S.Boolean),
          OnSourceDDoSProtectionConfig: S.optional(__S(111)),
          ApplicationConfig: S.optional(__S(114)),
          MonetizationConfig: S.optional(__S(101)),
        }),
      ).annotate({ identifier: "WebACL" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          WebACL: S.optional(__S(211)),
          LockToken: S.optional(S.String),
          ApplicationIntegrationURL: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "GetWebACLResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetWebACLForResourceRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ WebACL: S.optional(__S(211)) }).pipe(ns)).annotate({
        identifier: "GetWebACLForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Scope: S.String,
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAPIKeysRequest" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TokenDomains: S.optional(__S(6)),
          APIKey: S.optional(S.String),
          CreationTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Version: S.optional(S.Number),
        }),
      ).annotate({ identifier: "APIKeySummary" });
    case 1:
      return S.Array(__S(216));
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextMarker: S.optional(S.String),
          APIKeySummaries: S.optional(__S(217)),
          ApplicationIntegrationURL: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListAPIKeysResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Scope: S.String,
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAvailableManagedRuleGroupsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          VendorName: S.optional(S.String),
          Name: S.optional(S.String),
          VersioningSupported: S.optional(S.Boolean),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "ManagedRuleGroupSummary" });
    case 5:
      return S.Array(__S(220));
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextMarker: S.optional(S.String),
          ManagedRuleGroups: S.optional(__S(221)),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAvailableManagedRuleGroupsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          VendorName: S.String,
          Name: S.String,
          Scope: S.String,
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAvailableManagedRuleGroupVersionsRequest",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          LastUpdateTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ManagedRuleGroupVersion" });
    case 1:
      return S.Array(__S(224));
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextMarker: S.optional(S.String),
          Versions: S.optional(__S(225)),
          CurrentDefaultVersion: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAvailableManagedRuleGroupVersionsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Scope: S.String,
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListIPSetsRequest" });
    case 4:
      return S.Array(__S(90));
    case 5:
      return S.suspend(() =>
        S.Struct({ NextMarker: S.optional(S.String), IPSets: S.optional(__S(228)) }).pipe(ns),
      ).annotate({ identifier: "ListIPSetsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Scope: S.String,
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
          LogScope: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListLoggingConfigurationsRequest",
      });
    case 7:
      return S.Array(__S(155));
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LoggingConfigurations: S.optional(__S(231)),
          NextMarker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListLoggingConfigurationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Scope: S.String,
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListManagedRuleSetsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Id: S.optional(S.String),
          Description: S.optional(S.String),
          LockToken: S.optional(S.String),
          ARN: S.optional(S.String),
          LabelNamespace: S.optional(S.String),
        }),
      ).annotate({ identifier: "ManagedRuleSetSummary" });
    case 3:
      return S.Array(__S(234));
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextMarker: S.optional(S.String),
          ManagedRuleSets: S.optional(__S(235)),
        }).pipe(ns),
      ).annotate({
        identifier: "ListManagedRuleSetsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Platform: S.String,
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListMobileSdkReleasesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ReleaseVersion: S.optional(S.String),
          Timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ReleaseSummary" });
    case 7:
      return S.Array(__S(238));
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ReleaseSummaries: S.optional(__S(239)),
          NextMarker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListMobileSdkReleasesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Scope: S.String,
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListRegexPatternSetsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextMarker: S.optional(S.String),
          RegexPatternSets: S.optional(__S(228)),
        }).pipe(ns),
      ).annotate({
        identifier: "ListRegexPatternSetsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ WebACLArn: S.String, ResourceType: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListResourcesForWebACLRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ ResourceArns: S.optional(__S(6)) }).pipe(ns)).annotate({
        identifier: "ListResourcesForWebACLResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Scope: S.String,
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRuleGroupsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextMarker: S.optional(S.String),
          RuleGroups: S.optional(__S(228)),
        }).pipe(ns),
      ).annotate({ identifier: "ListRuleGroupsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TimeWindow: __S(173),
          Scope: S.String,
          Currency: S.String,
          Filters: S.optional(__S(175)),
          SortBy: S.optional(S.String),
          SortOrder: S.optional(S.String),
          Limit: S.optional(S.Number),
          NextMarker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListSettlementRecordsRequest",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          PayerAddress: S.optional(S.String),
          WalletAddress: S.optional(S.String),
          Status: S.String,
          Amount: S.String,
          Currency: S.optional(S.String),
          Network: S.optional(S.String),
          TransactionId: S.optional(S.String),
          RequestId: S.optional(S.String),
          SourceName: S.optional(S.String),
          Organization: S.optional(S.String),
          SourceCategory: S.optional(S.String),
          Intent: S.optional(S.String),
          Verified: S.optional(S.Boolean),
          ContentPath: S.optional(S.String),
          WebAclArn: S.optional(S.String),
          RequestTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SettlementRecord" });
    case 1:
      return S.Array(__S(248));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Settlements: S.optional(__S(249)),
          NextMarker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListSettlementRecordsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
          ResourceARN: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.optional(S.String), TagList: S.optional(__S(88)) }),
      ).annotate({ identifier: "TagInfoForResource" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextMarker: S.optional(S.String),
          TagInfoForResource: S.optional(__S(252)),
        }).pipe(ns),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Scope: S.String,
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListWebACLsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ NextMarker: S.optional(S.String), WebACLs: S.optional(__S(228)) }).pipe(ns),
      ).annotate({ identifier: "ListWebACLsResponse" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LoggingConfiguration: __S(155) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutLoggingConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AssociatedRuleGroupArn: S.optional(S.String),
          ForecastedLifetime: S.optional(S.Number),
        }),
      ).annotate({ identifier: "VersionToPublish" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(257).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: S.String,
          Id: S.String,
          LockToken: S.String,
          RecommendedVersion: S.optional(S.String),
          VersionsToPublish: S.optional(__S(258)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutManagedRuleSetVersionsRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ NextLockToken: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "PutManagedRuleSetVersionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Policy: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutPermissionPolicyRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: __S(88) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: __S(6) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: S.String,
          Id: S.String,
          Description: S.optional(S.String),
          Addresses: __S(6),
          LockToken: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateIPSetRequest" });
    case 1:
      return S.suspend(() => S.Struct({ NextLockToken: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "UpdateIPSetResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: S.String,
          Id: S.String,
          LockToken: S.String,
          VersionToExpire: S.String,
          ExpiryTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateManagedRuleSetVersionExpiryDateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ExpiringVersion: S.optional(S.String),
          ExpiryTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          NextLockToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "UpdateManagedRuleSetVersionExpiryDateResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: S.String,
          Id: S.String,
          Description: S.optional(S.String),
          RegularExpressionList: __S(66),
          LockToken: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateRegexPatternSetRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: S.String,
          Id: S.String,
          Description: S.optional(S.String),
          Rules: S.optional(__S(82)),
          VisibilityConfig: __S(78),
          LockToken: S.String,
          CustomResponseBodies: S.optional(__S(95)),
          MonetizationConfig: S.optional(__S(101)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateRuleGroupRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: S.String,
          Id: S.String,
          DefaultAction: __S(103),
          Description: S.optional(S.String),
          Rules: S.optional(__S(82)),
          VisibilityConfig: __S(78),
          DataProtectionConfig: S.optional(__S(107)),
          LockToken: S.String,
          CustomResponseBodies: S.optional(__S(95)),
          CaptchaConfig: S.optional(__S(80)),
          ChallengeConfig: S.optional(__S(80)),
          TokenDomains: S.optional(__S(6)),
          AssociationConfig: S.optional(__S(110)),
          OnSourceDDoSProtectionConfig: S.optional(__S(111)),
          ApplicationConfig: S.optional(__S(114)),
          MonetizationConfig: S.optional(__S(101)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateWebACLRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Feature: S.optional(S.String), RequiredPricingPlan: S.optional(S.String) }),
      ).annotate({ identifier: "DisallowedFeature" });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(271));
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
    case 26:
      return __c26(i & 7);
    case 27:
      return __c27(i & 7);
    case 28:
      return __c28(i & 7);
    case 29:
      return __c29(i & 7);
    case 30:
      return __c30(i & 7);
    case 31:
      return __c31(i & 7);
    case 32:
      return __c32(i & 7);
    case 33:
      return __c33(i & 7);
    case 34:
      return __c34(i & 7);
  }
}
