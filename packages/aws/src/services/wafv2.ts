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
        /*@__PURE__*/ S.suspend(() => DisallowedFeatures).annotate({
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
        /*@__PURE__*/ S.suspend(() => ParameterExceptionField).annotate({
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
const AssociateWebACLRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AssociateWebACLRequest>;
export interface AssociateWebACLResponse {}
const AssociateWebACLResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AssociateWebACLResponse>;
export type Scope = "CLOUDFRONT" | "REGIONAL" | (string & {});
const Scope = S.String;

export type EntityName = string;
export type RulePriority = number;
export type SearchString = Uint8Array;
export type FieldToMatchData = string;
export interface SingleHeader {
  Name: string;
}
const SingleHeader = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<SingleHeader>;
export interface SingleQueryArgument {
  Name: string;
}
const SingleQueryArgument = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<SingleQueryArgument>;
export interface AllQueryArguments {}
const AllQueryArguments = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<AllQueryArguments>;
export interface UriPath {}
const UriPath = AllQueryArguments as any as S.Schema<UriPath>;
export interface QueryString {}
const QueryString = AllQueryArguments as any as S.Schema<QueryString>;
export type OversizeHandling = "CONTINUE" | "MATCH" | "NO_MATCH" | (string & {});
const OversizeHandling = S.String;

export interface Body {
  OversizeHandling?: OversizeHandling;
}
const Body = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<Body>;
export interface Method {}
const Method = AllQueryArguments as any as S.Schema<Method>;
export interface All {}
const All = AllQueryArguments as any as S.Schema<All>;
export type JsonPointerPath = string;
export type JsonPointerPaths = string[];
const JsonPointerPaths = /*@__PURE__*/ __L.at(__c0, 6);
export interface JsonMatchPattern {
  All?: All;
  IncludedPaths?: string[];
}
const JsonMatchPattern = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<JsonMatchPattern>;
export type JsonMatchScope = "ALL" | "KEY" | "VALUE" | (string & {});
const JsonMatchScope = S.String;

export type BodyParsingFallbackBehavior =
  | "MATCH"
  | "NO_MATCH"
  | "EVALUATE_AS_STRING"
  | (string & {});
const BodyParsingFallbackBehavior = S.String;

export interface JsonBody {
  MatchPattern: JsonMatchPattern;
  MatchScope: JsonMatchScope;
  InvalidFallbackBehavior?: BodyParsingFallbackBehavior;
  OversizeHandling?: OversizeHandling;
}
const JsonBody = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<JsonBody>;
export type HeaderNames = string[];
const HeaderNames = JsonPointerPaths as any as S.Schema<HeaderNames>;
export interface HeaderMatchPattern {
  All?: All;
  IncludedHeaders?: string[];
  ExcludedHeaders?: string[];
}
const HeaderMatchPattern = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<HeaderMatchPattern>;
export type MapMatchScope = "ALL" | "KEY" | "VALUE" | (string & {});
const MapMatchScope = S.String;

export interface Headers {
  MatchPattern: HeaderMatchPattern;
  MatchScope: MapMatchScope;
  OversizeHandling: OversizeHandling;
}
const Headers = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<Headers>;
export type SingleCookieName = string;
export type CookieNames = string[];
const CookieNames = JsonPointerPaths as any as S.Schema<CookieNames>;
export interface CookieMatchPattern {
  All?: All;
  IncludedCookies?: string[];
  ExcludedCookies?: string[];
}
const CookieMatchPattern = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<CookieMatchPattern>;
export interface Cookies {
  MatchPattern: CookieMatchPattern;
  MatchScope: MapMatchScope;
  OversizeHandling: OversizeHandling;
}
const Cookies = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<Cookies>;
export interface HeaderOrder {
  OversizeHandling: OversizeHandling;
}
const HeaderOrder = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<HeaderOrder>;
export type FallbackBehavior = "MATCH" | "NO_MATCH" | (string & {});
const FallbackBehavior = S.String;

export interface JA3Fingerprint {
  FallbackBehavior: FallbackBehavior;
}
const JA3Fingerprint = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<JA3Fingerprint>;
export interface JA4Fingerprint {
  FallbackBehavior: FallbackBehavior;
}
const JA4Fingerprint = JA3Fingerprint as any as S.Schema<JA4Fingerprint>;
export interface UriFragment {
  FallbackBehavior?: FallbackBehavior;
}
const UriFragment = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<UriFragment>;
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
const FieldToMatch = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<FieldToMatch>;
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
const TextTransformationType = S.String;

export interface TextTransformation {
  Priority: number;
  Type: TextTransformationType;
}
const TextTransformation = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<TextTransformation>;
export type TextTransformations = TextTransformation[];
const TextTransformations = /*@__PURE__*/ __L.at(__c2, 2);
export type PreParseTextTransformationPriority = number;
export type PreParseTextTransformationType =
  | "NONE"
  | "URL_DECODE"
  | "URL_DECODE_UNI"
  | "COMBINE_DUPLICATE_QUERY_ARGS_BY_COMMA"
  | "REPLACE_SEMICOLONS_WITH_AMPERSANDS"
  | (string & {});
const PreParseTextTransformationType = S.String;

export interface PreParseTextTransformation {
  Priority: number;
  Type: PreParseTextTransformationType;
}
const PreParseTextTransformation = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<PreParseTextTransformation>;
export type PreParseTextTransformations = PreParseTextTransformation[];
const PreParseTextTransformations = /*@__PURE__*/ __L.at(__c2, 4);
export type PositionalConstraint =
  | "EXACTLY"
  | "STARTS_WITH"
  | "ENDS_WITH"
  | "CONTAINS"
  | "CONTAINS_WORD"
  | (string & {});
const PositionalConstraint = S.String;

export interface ByteMatchStatement {
  SearchString: Uint8Array;
  FieldToMatch: FieldToMatch;
  TextTransformations: TextTransformation[];
  PreParseTextTransformations?: PreParseTextTransformation[];
  PositionalConstraint: PositionalConstraint;
}
const ByteMatchStatement = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<ByteMatchStatement>;
export type SensitivityLevel = "LOW" | "HIGH" | (string & {});
const SensitivityLevel = S.String;

export interface SqliMatchStatement {
  FieldToMatch: FieldToMatch;
  TextTransformations: TextTransformation[];
  PreParseTextTransformations?: PreParseTextTransformation[];
  SensitivityLevel?: SensitivityLevel;
}
const SqliMatchStatement = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<SqliMatchStatement>;
export interface XssMatchStatement {
  FieldToMatch: FieldToMatch;
  TextTransformations: TextTransformation[];
  PreParseTextTransformations?: PreParseTextTransformation[];
}
const XssMatchStatement = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<XssMatchStatement>;
export type ComparisonOperator = "EQ" | "NE" | "LE" | "LT" | "GE" | "GT" | (string & {});
const ComparisonOperator = S.String;

export type Size = number;
export interface SizeConstraintStatement {
  FieldToMatch: FieldToMatch;
  ComparisonOperator: ComparisonOperator;
  Size: number;
  TextTransformations: TextTransformation[];
  PreParseTextTransformations?: PreParseTextTransformation[];
}
const SizeConstraintStatement = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<SizeConstraintStatement>;
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
const CountryCode = S.String;

export type CountryCodes = CountryCode[];
const CountryCodes = /*@__PURE__*/ __L.at(__c3, 1);
export type ForwardedIPHeaderName = string;
export interface ForwardedIPConfig {
  HeaderName: string;
  FallbackBehavior: FallbackBehavior;
}
const ForwardedIPConfig = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<ForwardedIPConfig>;
export interface GeoMatchStatement {
  CountryCodes?: CountryCode[];
  ForwardedIPConfig?: ForwardedIPConfig;
}
const GeoMatchStatement = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<GeoMatchStatement>;
export interface ExcludedRule {
  Name: string;
}
const ExcludedRule = SingleHeader as any as S.Schema<ExcludedRule>;
export type ExcludedRules = ExcludedRule[];
const ExcludedRules = /*@__PURE__*/ __L.at(__c3, 4);
export type ResponseStatusCode = number;
export type CustomHTTPHeaderName = string;
export type CustomHTTPHeaderValue = string;
export interface CustomHTTPHeader {
  Name: string;
  Value: string;
}
const CustomHTTPHeader = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<CustomHTTPHeader>;
export type CustomHTTPHeaders = CustomHTTPHeader[];
const CustomHTTPHeaders = /*@__PURE__*/ __L.at(__c3, 6);
export interface CustomResponse {
  ResponseCode: number;
  CustomResponseBodyKey?: string;
  ResponseHeaders?: CustomHTTPHeader[];
}
const CustomResponse = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<CustomResponse>;
export interface BlockAction {
  CustomResponse?: CustomResponse;
}
const BlockAction = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<BlockAction>;
export interface CustomRequestHandling {
  InsertHeaders: CustomHTTPHeader[];
}
const CustomRequestHandling = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<CustomRequestHandling>;
export interface AllowAction {
  CustomRequestHandling?: CustomRequestHandling;
}
const AllowAction = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<AllowAction>;
export interface CountAction {
  CustomRequestHandling?: CustomRequestHandling;
}
const CountAction = AllowAction as any as S.Schema<CountAction>;
export interface CaptchaAction {
  CustomRequestHandling?: CustomRequestHandling;
}
const CaptchaAction = AllowAction as any as S.Schema<CaptchaAction>;
export interface ChallengeAction {
  CustomRequestHandling?: CustomRequestHandling;
}
const ChallengeAction = AllowAction as any as S.Schema<ChallengeAction>;
export type PriceMultiplier = string;
export interface MonetizeAction {
  PriceMultiplier?: string;
}
const MonetizeAction = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<MonetizeAction>;
export interface RuleAction {
  Block?: BlockAction;
  Allow?: AllowAction;
  Count?: CountAction;
  Captcha?: CaptchaAction;
  Challenge?: ChallengeAction;
  Monetize?: MonetizeAction;
}
const RuleAction = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<RuleAction>;
export interface RuleActionOverride {
  Name: string;
  ActionToUse: RuleAction;
}
const RuleActionOverride = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<RuleActionOverride>;
export type RuleActionOverrides = RuleActionOverride[];
const RuleActionOverrides = /*@__PURE__*/ __L.at(__c4, 6);
export interface RuleGroupReferenceStatement {
  ARN: string;
  ExcludedRules?: ExcludedRule[];
  RuleActionOverrides?: RuleActionOverride[];
}
const RuleGroupReferenceStatement = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<RuleGroupReferenceStatement>;
export type ForwardedIPPosition = "FIRST" | "LAST" | "ANY" | (string & {});
const ForwardedIPPosition = S.String;

export interface IPSetForwardedIPConfig {
  HeaderName: string;
  FallbackBehavior: FallbackBehavior;
  Position: ForwardedIPPosition;
}
const IPSetForwardedIPConfig = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<IPSetForwardedIPConfig>;
export interface IPSetReferenceStatement {
  ARN: string;
  IPSetForwardedIPConfig?: IPSetForwardedIPConfig;
}
const IPSetReferenceStatement = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<IPSetReferenceStatement>;
export interface RegexPatternSetReferenceStatement {
  ARN: string;
  FieldToMatch: FieldToMatch;
  TextTransformations: TextTransformation[];
  PreParseTextTransformations?: PreParseTextTransformation[];
}
const RegexPatternSetReferenceStatement = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<RegexPatternSetReferenceStatement>;
export type RateLimit = number;
export type EvaluationWindowSec = number;
export type RateBasedStatementAggregateKeyType =
  | "IP"
  | "FORWARDED_IP"
  | "CUSTOM_KEYS"
  | "CONSTANT"
  | (string & {});
const RateBasedStatementAggregateKeyType = S.String;

export interface RateLimitHeader {
  Name: string;
  TextTransformations: TextTransformation[];
}
const RateLimitHeader = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<RateLimitHeader>;
export interface RateLimitCookie {
  Name: string;
  TextTransformations: TextTransformation[];
}
const RateLimitCookie = RateLimitHeader as any as S.Schema<RateLimitCookie>;
export interface RateLimitQueryArgument {
  Name: string;
  TextTransformations: TextTransformation[];
}
const RateLimitQueryArgument = RateLimitHeader as any as S.Schema<RateLimitQueryArgument>;
export interface RateLimitQueryString {
  TextTransformations: TextTransformation[];
}
const RateLimitQueryString = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<RateLimitQueryString>;
export interface RateLimitHTTPMethod {}
const RateLimitHTTPMethod = AllQueryArguments as any as S.Schema<RateLimitHTTPMethod>;
export interface RateLimitForwardedIP {}
const RateLimitForwardedIP = AllQueryArguments as any as S.Schema<RateLimitForwardedIP>;
export interface RateLimitIP {}
const RateLimitIP = AllQueryArguments as any as S.Schema<RateLimitIP>;
export type LabelNamespace = string;
export interface RateLimitLabelNamespace {
  Namespace: string;
}
const RateLimitLabelNamespace = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<RateLimitLabelNamespace>;
export interface RateLimitUriPath {
  TextTransformations: TextTransformation[];
}
const RateLimitUriPath = RateLimitQueryString as any as S.Schema<RateLimitUriPath>;
export interface RateLimitJA3Fingerprint {
  FallbackBehavior: FallbackBehavior;
}
const RateLimitJA3Fingerprint = JA3Fingerprint as any as S.Schema<RateLimitJA3Fingerprint>;
export interface RateLimitJA4Fingerprint {
  FallbackBehavior: FallbackBehavior;
}
const RateLimitJA4Fingerprint = JA3Fingerprint as any as S.Schema<RateLimitJA4Fingerprint>;
export interface RateLimitAsn {}
const RateLimitAsn = AllQueryArguments as any as S.Schema<RateLimitAsn>;
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
const RateBasedStatementCustomKey = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<RateBasedStatementCustomKey>;
export type RateBasedStatementCustomKeys = RateBasedStatementCustomKey[];
const RateBasedStatementCustomKeys = /*@__PURE__*/ __L.at(__c5, 7);
export interface RateBasedStatement {
  Limit: number;
  EvaluationWindowSec?: number;
  AggregateKeyType: RateBasedStatementAggregateKeyType;
  ScopeDownStatement?: Statement;
  ForwardedIPConfig?: ForwardedIPConfig;
  CustomKeys?: RateBasedStatementCustomKey[];
}
const RateBasedStatement = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<RateBasedStatement>;
export type Statements = Statement[];
const Statements = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<Statements>;
export interface AndStatement {
  Statements: Statement[];
}
const AndStatement = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<AndStatement>;
export interface OrStatement {
  Statements: Statement[];
}
const OrStatement = AndStatement as any as S.Schema<OrStatement>;
export interface NotStatement {
  Statement: Statement;
}
const NotStatement = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<NotStatement>;
export type VendorName = string;
export type VersionKeyString = string;
export type LoginPathString = string;
export type PayloadType = "JSON" | "FORM_ENCODED" | (string & {});
const PayloadType = S.String;

export type FieldIdentifier = string;
export interface UsernameField {
  Identifier: string;
}
const UsernameField = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<UsernameField>;
export interface PasswordField {
  Identifier: string;
}
const PasswordField = UsernameField as any as S.Schema<PasswordField>;
export type InspectionLevel = "COMMON" | "TARGETED" | (string & {});
const InspectionLevel = S.String;

export type EnableMachineLearning = boolean;
export interface AWSManagedRulesBotControlRuleSet {
  InspectionLevel: InspectionLevel;
  EnableMachineLearning?: boolean;
}
const AWSManagedRulesBotControlRuleSet = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<AWSManagedRulesBotControlRuleSet>;
export interface RequestInspection {
  PayloadType: PayloadType;
  UsernameField: UsernameField;
  PasswordField: PasswordField;
}
const RequestInspection = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<RequestInspection>;
export type SuccessCode = number;
export type ResponseInspectionStatusCodeSuccessCodes = number[];
const ResponseInspectionStatusCodeSuccessCodes = /*@__PURE__*/ __L.at(__c6, 7);
export type FailureCode = number;
export type ResponseInspectionStatusCodeFailureCodes = number[];
const ResponseInspectionStatusCodeFailureCodes =
  ResponseInspectionStatusCodeSuccessCodes as any as S.Schema<ResponseInspectionStatusCodeFailureCodes>;
export interface ResponseInspectionStatusCode {
  SuccessCodes: number[];
  FailureCodes: number[];
}
const ResponseInspectionStatusCode = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<ResponseInspectionStatusCode>;
export type ResponseInspectionHeaderName = string;
export type SuccessValue = string;
export type ResponseInspectionHeaderSuccessValues = string[];
const ResponseInspectionHeaderSuccessValues =
  JsonPointerPaths as any as S.Schema<ResponseInspectionHeaderSuccessValues>;
export type FailureValue = string;
export type ResponseInspectionHeaderFailureValues = string[];
const ResponseInspectionHeaderFailureValues =
  JsonPointerPaths as any as S.Schema<ResponseInspectionHeaderFailureValues>;
export interface ResponseInspectionHeader {
  Name: string;
  SuccessValues: string[];
  FailureValues: string[];
}
const ResponseInspectionHeader = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<ResponseInspectionHeader>;
export type ResponseInspectionBodyContainsSuccessStrings = string[];
const ResponseInspectionBodyContainsSuccessStrings =
  JsonPointerPaths as any as S.Schema<ResponseInspectionBodyContainsSuccessStrings>;
export type ResponseInspectionBodyContainsFailureStrings = string[];
const ResponseInspectionBodyContainsFailureStrings =
  JsonPointerPaths as any as S.Schema<ResponseInspectionBodyContainsFailureStrings>;
export interface ResponseInspectionBodyContains {
  SuccessStrings: string[];
  FailureStrings: string[];
}
const ResponseInspectionBodyContains = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<ResponseInspectionBodyContains>;
export type ResponseInspectionJsonSuccessValues = string[];
const ResponseInspectionJsonSuccessValues =
  JsonPointerPaths as any as S.Schema<ResponseInspectionJsonSuccessValues>;
export type ResponseInspectionJsonFailureValues = string[];
const ResponseInspectionJsonFailureValues =
  JsonPointerPaths as any as S.Schema<ResponseInspectionJsonFailureValues>;
export interface ResponseInspectionJson {
  Identifier: string;
  SuccessValues: string[];
  FailureValues: string[];
}
const ResponseInspectionJson = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<ResponseInspectionJson>;
export interface ResponseInspection {
  StatusCode?: ResponseInspectionStatusCode;
  Header?: ResponseInspectionHeader;
  BodyContains?: ResponseInspectionBodyContains;
  Json?: ResponseInspectionJson;
}
const ResponseInspection = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<ResponseInspection>;
export interface AWSManagedRulesATPRuleSet {
  LoginPath: string;
  RequestInspection?: RequestInspection;
  ResponseInspection?: ResponseInspection;
  EnableRegexInPath?: boolean;
}
const AWSManagedRulesATPRuleSet = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<AWSManagedRulesATPRuleSet>;
export type CreationPathString = string;
export type RegistrationPagePathString = string;
export interface EmailField {
  Identifier: string;
}
const EmailField = UsernameField as any as S.Schema<EmailField>;
export interface PhoneNumberField {
  Identifier: string;
}
const PhoneNumberField = UsernameField as any as S.Schema<PhoneNumberField>;
export type PhoneNumberFields = PhoneNumberField[];
const PhoneNumberFields = /*@__PURE__*/ __L.at(__c7, 6);
export interface AddressField {
  Identifier: string;
}
export type AddressFields = AddressField[];
const AddressFields = PhoneNumberFields as any as S.Schema<AddressFields>;
export interface RequestInspectionACFP {
  PayloadType: PayloadType;
  UsernameField?: UsernameField;
  PasswordField?: PasswordField;
  EmailField?: EmailField;
  PhoneNumberFields?: PhoneNumberField[];
  AddressFields?: AddressField[];
}
const RequestInspectionACFP = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<RequestInspectionACFP>;
export interface AWSManagedRulesACFPRuleSet {
  CreationPath: string;
  RegistrationPagePath: string;
  RequestInspection: RequestInspectionACFP;
  ResponseInspection?: ResponseInspection;
  EnableRegexInPath?: boolean;
}
const AWSManagedRulesACFPRuleSet = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<AWSManagedRulesACFPRuleSet>;
export type UsageOfAction = "ENABLED" | "DISABLED" | (string & {});
const UsageOfAction = S.String;

export type SensitivityToAct = "LOW" | "MEDIUM" | "HIGH" | (string & {});
const SensitivityToAct = S.String;

export type RegexPatternString = string;
export interface Regex {
  RegexString?: string;
}
const Regex = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<Regex>;
export type RegularExpressionList = Regex[];
const RegularExpressionList = /*@__PURE__*/ __L.at(__c8, 2);
export interface ClientSideAction {
  UsageOfAction: UsageOfAction;
  Sensitivity?: SensitivityToAct;
  ExemptUriRegularExpressions?: Regex[];
}
const ClientSideAction = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<ClientSideAction>;
export interface ClientSideActionConfig {
  Challenge: ClientSideAction;
}
const ClientSideActionConfig = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<ClientSideActionConfig>;
export interface AWSManagedRulesAntiDDoSRuleSet {
  ClientSideActionConfig: ClientSideActionConfig;
  SensitivityToBlock?: SensitivityToAct;
}
const AWSManagedRulesAntiDDoSRuleSet = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<AWSManagedRulesAntiDDoSRuleSet>;
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
const ManagedRuleGroupConfig = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<ManagedRuleGroupConfig>;
export type ManagedRuleGroupConfigs = ManagedRuleGroupConfig[];
const ManagedRuleGroupConfigs = /*@__PURE__*/ __L.at(__c8, 7);
export interface ManagedRuleGroupStatement {
  VendorName: string;
  Name: string;
  Version?: string;
  ExcludedRules?: ExcludedRule[];
  ScopeDownStatement?: Statement;
  ManagedRuleGroupConfigs?: ManagedRuleGroupConfig[];
  RuleActionOverrides?: RuleActionOverride[];
}
const ManagedRuleGroupStatement = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<ManagedRuleGroupStatement>;
export type LabelMatchScope = "LABEL" | "NAMESPACE" | (string & {});
const LabelMatchScope = S.String;

export type LabelMatchKey = string;
export interface LabelMatchStatement {
  Scope: LabelMatchScope;
  Key: string;
}
const LabelMatchStatement = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<LabelMatchStatement>;
export interface RegexMatchStatement {
  RegexString: string;
  FieldToMatch: FieldToMatch;
  TextTransformations: TextTransformation[];
  PreParseTextTransformations?: PreParseTextTransformation[];
}
const RegexMatchStatement = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<RegexMatchStatement>;
export type ASN = number;
export type AsnList = number[];
const AsnList = ResponseInspectionStatusCodeSuccessCodes as any as S.Schema<AsnList>;
export interface AsnMatchStatement {
  AsnList: number[];
  ForwardedIPConfig?: ForwardedIPConfig;
}
const AsnMatchStatement = /*@__PURE__*/ __L.at(__c9, 3) as any as S.Schema<AsnMatchStatement>;
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
const Statement = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<Statement>;
export interface NoneAction {}
const NoneAction = AllQueryArguments as any as S.Schema<NoneAction>;
export interface OverrideAction {
  Count?: CountAction;
  None?: NoneAction;
}
const OverrideAction = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<OverrideAction>;
export type LabelName = string;
export interface Label {
  Name: string;
}
export type Labels = Label[];
const Labels = ExcludedRules as any as S.Schema<Labels>;
export type MetricName = string;
export interface VisibilityConfig {
  SampledRequestsEnabled: boolean;
  CloudWatchMetricsEnabled: boolean;
  MetricName: string;
}
const VisibilityConfig = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<VisibilityConfig>;
export type TimeWindowSecond = number;
export interface ImmunityTimeProperty {
  ImmunityTime: number;
}
const ImmunityTimeProperty = /*@__PURE__*/ __L.at(__c9, 7) as any as S.Schema<ImmunityTimeProperty>;
export interface CaptchaConfig {
  ImmunityTimeProperty?: ImmunityTimeProperty;
}
const CaptchaConfig = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<CaptchaConfig>;
export interface ChallengeConfig {
  ImmunityTimeProperty?: ImmunityTimeProperty;
}
const ChallengeConfig = CaptchaConfig as any as S.Schema<ChallengeConfig>;
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
const Rule = /*@__PURE__*/ __L.at(__c10, 1) as any as S.Schema<Rule>;
export type Rules = Rule[];
const Rules = /*@__PURE__*/ __L.at(__c10, 2);
export interface CheckCapacityRequest {
  Scope: Scope;
  Rules: Rule[];
}
const CheckCapacityRequest = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<CheckCapacityRequest>;
export type ConsumedCapacity = number;
export interface CheckCapacityResponse {
  Capacity?: number;
}
const CheckCapacityResponse = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<CheckCapacityResponse>;
export type TokenDomain = string;
export type APIKeyTokenDomains = string[];
const APIKeyTokenDomains = JsonPointerPaths as any as S.Schema<APIKeyTokenDomains>;
export interface CreateAPIKeyRequest {
  Scope: Scope;
  TokenDomains: string[];
}
const CreateAPIKeyRequest = /*@__PURE__*/ __L.at(__c10, 5) as any as S.Schema<CreateAPIKeyRequest>;
export type APIKey = string;
export interface CreateAPIKeyResponse {
  APIKey?: string;
}
const CreateAPIKeyResponse = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<CreateAPIKeyResponse>;
export type EntityDescription = string;
export type IPAddressVersion = "IPV4" | "IPV6" | (string & {});
const IPAddressVersion = S.String;

export type IPAddress = string;
export type IPAddresses = string[];
const IPAddresses = JsonPointerPaths as any as S.Schema<IPAddresses>;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c11, 0);
export interface CreateIPSetRequest {
  Name: string;
  Scope: Scope;
  Description?: string;
  IPAddressVersion: IPAddressVersion;
  Addresses: string[];
  Tags?: Tag[];
}
const CreateIPSetRequest = /*@__PURE__*/ __L.at(__c11, 1) as any as S.Schema<CreateIPSetRequest>;
export type EntityId = string;
export type LockToken = string;
export interface IPSetSummary {
  Name?: string;
  Id?: string;
  Description?: string;
  LockToken?: string;
  ARN?: string;
}
const IPSetSummary = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<IPSetSummary>;
export interface CreateIPSetResponse {
  Summary?: IPSetSummary;
}
const CreateIPSetResponse = /*@__PURE__*/ __L.at(__c11, 3) as any as S.Schema<CreateIPSetResponse>;
export interface CreateRegexPatternSetRequest {
  Name: string;
  Scope: Scope;
  Description?: string;
  RegularExpressionList: Regex[];
  Tags?: Tag[];
}
const CreateRegexPatternSetRequest = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<CreateRegexPatternSetRequest>;
export interface RegexPatternSetSummary {
  Name?: string;
  Id?: string;
  Description?: string;
  LockToken?: string;
  ARN?: string;
}
const RegexPatternSetSummary = IPSetSummary as any as S.Schema<RegexPatternSetSummary>;
export interface CreateRegexPatternSetResponse {
  Summary?: RegexPatternSetSummary;
}
const CreateRegexPatternSetResponse = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<CreateRegexPatternSetResponse>;
export type CapacityUnit = number;
export type ResponseContentType = "TEXT_PLAIN" | "TEXT_HTML" | "APPLICATION_JSON" | (string & {});
const ResponseContentType = S.String;

export type ResponseContent = string;
export interface CustomResponseBody {
  ContentType: ResponseContentType;
  Content: string;
}
const CustomResponseBody = /*@__PURE__*/ __L.at(__c11, 6) as any as S.Schema<CustomResponseBody>;
export type CustomResponseBodies = { [key: string]: CustomResponseBody | undefined };
const CustomResponseBodies = /*@__PURE__*/ __L.at(__c11, 7);
export type BlockchainChain = "BASE" | "SOLANA" | "BASE_SEPOLIA" | "SOLANA_DEVNET" | (string & {});
const BlockchainChain = S.String;

export type WalletAddress = string;
export type PriceAmount = string;
export type CryptoCurrency = "USDC" | (string & {});
const CryptoCurrency = S.String;

export interface Price {
  Amount: string;
  Currency: CryptoCurrency;
}
const Price = /*@__PURE__*/ __L.at(__c12, 0) as any as S.Schema<Price>;
export type Prices = Price[];
const Prices = /*@__PURE__*/ __L.at(__c12, 1);
export interface PaymentNetwork {
  Chain: BlockchainChain;
  WalletAddress: string;
  Prices: Price[];
}
const PaymentNetwork = /*@__PURE__*/ __L.at(__c12, 2) as any as S.Schema<PaymentNetwork>;
export type PaymentNetworks = PaymentNetwork[];
const PaymentNetworks = /*@__PURE__*/ __L.at(__c12, 3);
export interface CryptoConfig {
  PaymentNetworks: PaymentNetwork[];
}
const CryptoConfig = /*@__PURE__*/ __L.at(__c12, 4) as any as S.Schema<CryptoConfig>;
export type CurrencyMode = "REAL" | "TEST" | (string & {});
const CurrencyMode = S.String;

export interface MonetizationConfig {
  CryptoConfig?: CryptoConfig;
  CurrencyMode?: CurrencyMode;
}
const MonetizationConfig = /*@__PURE__*/ __L.at(__c12, 5) as any as S.Schema<MonetizationConfig>;
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
const CreateRuleGroupRequest = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<CreateRuleGroupRequest>;
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
const CreateRuleGroupResponse = CreateIPSetResponse as any as S.Schema<CreateRuleGroupResponse>;
export interface DefaultAction {
  Block?: BlockAction;
  Allow?: AllowAction;
}
const DefaultAction = /*@__PURE__*/ __L.at(__c12, 7) as any as S.Schema<DefaultAction>;
export type FieldToProtectType =
  | "SINGLE_HEADER"
  | "SINGLE_COOKIE"
  | "SINGLE_QUERY_ARGUMENT"
  | "QUERY_STRING"
  | "BODY"
  | (string & {});
const FieldToProtectType = S.String;

export type FieldToProtectKeyName = string;
export type FieldToProtectKeys = string[];
const FieldToProtectKeys = JsonPointerPaths as any as S.Schema<FieldToProtectKeys>;
export interface FieldToProtect {
  FieldType: FieldToProtectType;
  FieldKeys?: string[];
}
const FieldToProtect = /*@__PURE__*/ __L.at(__c13, 0) as any as S.Schema<FieldToProtect>;
export type DataProtectionAction = "SUBSTITUTION" | "HASH" | (string & {});
const DataProtectionAction = S.String;

export interface DataProtection {
  Field: FieldToProtect;
  Action: DataProtectionAction;
  ExcludeRuleMatchDetails?: boolean;
  ExcludeRateBasedDetails?: boolean;
}
const DataProtection = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<DataProtection>;
export type DataProtections = DataProtection[];
const DataProtections = /*@__PURE__*/ __L.at(__c13, 2);
export interface DataProtectionConfig {
  DataProtections: DataProtection[];
}
const DataProtectionConfig = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<DataProtectionConfig>;
export type TokenDomains = string[];
const TokenDomains = JsonPointerPaths as any as S.Schema<TokenDomains>;
export type AssociatedResourceType =
  | "CLOUDFRONT"
  | "API_GATEWAY"
  | "COGNITO_USER_POOL"
  | "APP_RUNNER_SERVICE"
  | "VERIFIED_ACCESS_INSTANCE"
  | "AGENTCORE_GATEWAY"
  | (string & {});
const AssociatedResourceType = S.String;

export type SizeInspectionLimit = "KB_16" | "KB_32" | "KB_48" | "KB_64" | (string & {});
const SizeInspectionLimit = S.String;

export interface RequestBodyAssociatedResourceTypeConfig {
  DefaultSizeInspectionLimit: SizeInspectionLimit;
}
const RequestBodyAssociatedResourceTypeConfig = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<RequestBodyAssociatedResourceTypeConfig>;
export type RequestBody = {
  [key in AssociatedResourceType]?: RequestBodyAssociatedResourceTypeConfig;
};
const RequestBody = /*@__PURE__*/ __L.at(__c13, 5);
export interface AssociationConfig {
  RequestBody?: { [key: string]: RequestBodyAssociatedResourceTypeConfig | undefined };
}
const AssociationConfig = /*@__PURE__*/ __L.at(__c13, 6) as any as S.Schema<AssociationConfig>;
export type LowReputationMode = "ACTIVE_UNDER_DDOS" | "ALWAYS_ON" | (string & {});
const LowReputationMode = S.String;

export interface OnSourceDDoSProtectionConfig {
  ALBLowReputationMode: LowReputationMode;
}
const OnSourceDDoSProtectionConfig = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<OnSourceDDoSProtectionConfig>;
export type AttributeName = string;
export type AttributeValue = string;
export type AttributeValues = string[];
const AttributeValues = JsonPointerPaths as any as S.Schema<AttributeValues>;
export interface ApplicationAttribute {
  Name?: string;
  Values?: string[];
}
const ApplicationAttribute = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<ApplicationAttribute>;
export type ApplicationAttributes = ApplicationAttribute[];
const ApplicationAttributes = /*@__PURE__*/ __L.at(__c14, 1);
export interface ApplicationConfig {
  Attributes?: ApplicationAttribute[];
}
const ApplicationConfig = /*@__PURE__*/ __L.at(__c14, 2) as any as S.Schema<ApplicationConfig>;
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
const CreateWebACLRequest = /*@__PURE__*/ __L.at(__c14, 3) as any as S.Schema<CreateWebACLRequest>;
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
const CreateWebACLResponse = CreateIPSetResponse as any as S.Schema<CreateWebACLResponse>;
export interface DeleteAPIKeyRequest {
  Scope: Scope;
  APIKey: string;
}
const DeleteAPIKeyRequest = /*@__PURE__*/ __L.at(__c14, 4) as any as S.Schema<DeleteAPIKeyRequest>;
export interface DeleteAPIKeyResponse {}
const DeleteAPIKeyResponse = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<DeleteAPIKeyResponse>;
export interface DeleteFirewallManagerRuleGroupsRequest {
  WebACLArn: string;
  WebACLLockToken: string;
}
const DeleteFirewallManagerRuleGroupsRequest = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<DeleteFirewallManagerRuleGroupsRequest>;
export interface DeleteFirewallManagerRuleGroupsResponse {
  NextWebACLLockToken?: string;
}
const DeleteFirewallManagerRuleGroupsResponse = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<DeleteFirewallManagerRuleGroupsResponse>;
export interface DeleteIPSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
}
const DeleteIPSetRequest = /*@__PURE__*/ __L.at(__c15, 0) as any as S.Schema<DeleteIPSetRequest>;
export interface DeleteIPSetResponse {}
const DeleteIPSetResponse = DeleteAPIKeyResponse as any as S.Schema<DeleteIPSetResponse>;
export type LogType = "WAF_LOGS" | (string & {});
const LogType = S.String;

export type LogScope =
  | "CUSTOMER"
  | "SECURITY_LAKE"
  | "CLOUDWATCH_TELEMETRY_RULE_MANAGED"
  | (string & {});
const LogScope = S.String;

export interface DeleteLoggingConfigurationRequest {
  ResourceArn: string;
  LogType?: LogType;
  LogScope?: LogScope;
}
const DeleteLoggingConfigurationRequest = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<DeleteLoggingConfigurationRequest>;
export interface DeleteLoggingConfigurationResponse {}
const DeleteLoggingConfigurationResponse = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<DeleteLoggingConfigurationResponse>;
export interface DeletePermissionPolicyRequest {
  ResourceArn: string;
}
const DeletePermissionPolicyRequest = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<DeletePermissionPolicyRequest>;
export interface DeletePermissionPolicyResponse {}
const DeletePermissionPolicyResponse =
  DeleteLoggingConfigurationResponse as any as S.Schema<DeletePermissionPolicyResponse>;
export interface DeleteRegexPatternSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
}
const DeleteRegexPatternSetRequest = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<DeleteRegexPatternSetRequest>;
export interface DeleteRegexPatternSetResponse {}
const DeleteRegexPatternSetResponse =
  DeleteLoggingConfigurationResponse as any as S.Schema<DeleteRegexPatternSetResponse>;
export interface DeleteRuleGroupRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
}
const DeleteRuleGroupRequest = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<DeleteRuleGroupRequest>;
export interface DeleteRuleGroupResponse {}
const DeleteRuleGroupResponse = AssociateWebACLResponse as any as S.Schema<DeleteRuleGroupResponse>;
export interface DeleteWebACLRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
}
const DeleteWebACLRequest = /*@__PURE__*/ __L.at(__c15, 6) as any as S.Schema<DeleteWebACLRequest>;
export interface DeleteWebACLResponse {}
const DeleteWebACLResponse = DeleteAPIKeyResponse as any as S.Schema<DeleteWebACLResponse>;
export interface DescribeAllManagedProductsRequest {
  Scope: Scope;
}
const DescribeAllManagedProductsRequest = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<DescribeAllManagedProductsRequest>;
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
const ManagedProductDescriptor = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<ManagedProductDescriptor>;
export type ManagedProductDescriptors = ManagedProductDescriptor[];
const ManagedProductDescriptors = /*@__PURE__*/ __L.at(__c16, 1);
export interface DescribeAllManagedProductsResponse {
  ManagedProducts?: ManagedProductDescriptor[];
}
const DescribeAllManagedProductsResponse = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<DescribeAllManagedProductsResponse>;
export interface DescribeManagedProductsByVendorRequest {
  VendorName: string;
  Scope: Scope;
}
const DescribeManagedProductsByVendorRequest = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<DescribeManagedProductsByVendorRequest>;
export interface DescribeManagedProductsByVendorResponse {
  ManagedProducts?: ManagedProductDescriptor[];
}
const DescribeManagedProductsByVendorResponse =
  DescribeAllManagedProductsResponse as any as S.Schema<DescribeManagedProductsByVendorResponse>;
export interface DescribeManagedRuleGroupRequest {
  VendorName: string;
  Name: string;
  Scope: Scope;
  VersionName?: string;
}
const DescribeManagedRuleGroupRequest = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<DescribeManagedRuleGroupRequest>;
export interface RuleSummary {
  Name?: string;
  Action?: RuleAction;
}
const RuleSummary = /*@__PURE__*/ __L.at(__c16, 5) as any as S.Schema<RuleSummary>;
export type RuleSummaries = RuleSummary[];
const RuleSummaries = /*@__PURE__*/ __L.at(__c16, 6);
export interface LabelSummary {
  Name?: string;
}
const LabelSummary = /*@__PURE__*/ __L.at(__c16, 7) as any as S.Schema<LabelSummary>;
export type LabelSummaries = LabelSummary[];
const LabelSummaries = /*@__PURE__*/ __L.at(__c17, 0);
export interface DescribeManagedRuleGroupResponse {
  VersionName?: string;
  SnsTopicArn?: string;
  Capacity?: number;
  Rules?: RuleSummary[];
  LabelNamespace?: string;
  AvailableLabels?: LabelSummary[];
  ConsumedLabels?: LabelSummary[];
}
const DescribeManagedRuleGroupResponse = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<DescribeManagedRuleGroupResponse>;
export interface DisassociateWebACLRequest {
  ResourceArn: string;
}
const DisassociateWebACLRequest = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<DisassociateWebACLRequest>;
export interface DisassociateWebACLResponse {}
const DisassociateWebACLResponse =
  DeleteLoggingConfigurationResponse as any as S.Schema<DisassociateWebACLResponse>;
export type Platform = "IOS" | "ANDROID" | (string & {});
const Platform = S.String;

export interface GenerateMobileSdkReleaseUrlRequest {
  Platform: Platform;
  ReleaseVersion: string;
}
const GenerateMobileSdkReleaseUrlRequest = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<GenerateMobileSdkReleaseUrlRequest>;
export type DownloadUrl = string;
export interface GenerateMobileSdkReleaseUrlResponse {
  Url?: string;
}
const GenerateMobileSdkReleaseUrlResponse = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<GenerateMobileSdkReleaseUrlResponse>;
export interface GetDecryptedAPIKeyRequest {
  Scope: Scope;
  APIKey: string;
}
const GetDecryptedAPIKeyRequest = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<GetDecryptedAPIKeyRequest>;
export interface GetDecryptedAPIKeyResponse {
  TokenDomains?: string[];
  CreationTimestamp?: Date;
}
const GetDecryptedAPIKeyResponse = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<GetDecryptedAPIKeyResponse>;
export interface GetIPSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
}
const GetIPSetRequest = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<GetIPSetRequest>;
export interface IPSet {
  Name: string;
  Id: string;
  ARN: string;
  Description?: string;
  IPAddressVersion: IPAddressVersion;
  Addresses: string[];
}
const IPSet = /*@__PURE__*/ __L.at(__c18, 0) as any as S.Schema<IPSet>;
export interface GetIPSetResponse {
  IPSet?: IPSet;
  LockToken?: string;
}
const GetIPSetResponse = /*@__PURE__*/ __L.at(__c18, 1) as any as S.Schema<GetIPSetResponse>;
export interface GetLoggingConfigurationRequest {
  ResourceArn: string;
  LogType?: LogType;
  LogScope?: LogScope;
}
const GetLoggingConfigurationRequest = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<GetLoggingConfigurationRequest>;
export type LogDestinationConfigs = string[];
const LogDestinationConfigs = JsonPointerPaths as any as S.Schema<LogDestinationConfigs>;
export type RedactedFields = FieldToMatch[];
const RedactedFields = /*@__PURE__*/ __L.at(__c18, 3);
export type FilterBehavior = "KEEP" | "DROP" | (string & {});
const FilterBehavior = S.String;

export type FilterRequirement = "MEETS_ALL" | "MEETS_ANY" | (string & {});
const FilterRequirement = S.String;

export type ActionValue =
  | "ALLOW"
  | "BLOCK"
  | "COUNT"
  | "CAPTCHA"
  | "CHALLENGE"
  | "MONETIZE"
  | "EXCLUDED_AS_COUNT"
  | (string & {});
const ActionValue = S.String;

export interface ActionCondition {
  Action: ActionValue;
}
const ActionCondition = /*@__PURE__*/ __L.at(__c18, 4) as any as S.Schema<ActionCondition>;
export interface LabelNameCondition {
  LabelName: string;
}
const LabelNameCondition = /*@__PURE__*/ __L.at(__c18, 5) as any as S.Schema<LabelNameCondition>;
export interface Condition {
  ActionCondition?: ActionCondition;
  LabelNameCondition?: LabelNameCondition;
}
const Condition = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<Condition>;
export type Conditions = Condition[];
const Conditions = /*@__PURE__*/ __L.at(__c18, 7);
export interface Filter {
  Behavior: FilterBehavior;
  Requirement: FilterRequirement;
  Conditions: Condition[];
}
const Filter = /*@__PURE__*/ __L.at(__c19, 0) as any as S.Schema<Filter>;
export type Filters = Filter[];
const Filters = /*@__PURE__*/ __L.at(__c19, 1);
export interface LoggingFilter {
  Filters: Filter[];
  DefaultBehavior: FilterBehavior;
}
const LoggingFilter = /*@__PURE__*/ __L.at(__c19, 2) as any as S.Schema<LoggingFilter>;
export interface LoggingConfiguration {
  ResourceArn: string;
  LogDestinationConfigs: string[];
  RedactedFields?: FieldToMatch[];
  ManagedByFirewallManager?: boolean;
  LoggingFilter?: LoggingFilter;
  LogType?: LogType;
  LogScope?: LogScope;
}
const LoggingConfiguration = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<LoggingConfiguration>;
export interface GetLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration;
}
const GetLoggingConfigurationResponse = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<GetLoggingConfigurationResponse>;
export interface GetManagedRuleSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
}
const GetManagedRuleSetRequest = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<GetManagedRuleSetRequest>;
export type TimeWindowDay = number;
export interface ManagedRuleSetVersion {
  AssociatedRuleGroupArn?: string;
  Capacity?: number;
  ForecastedLifetime?: number;
  PublishTimestamp?: Date;
  LastUpdateTimestamp?: Date;
  ExpiryTimestamp?: Date;
}
const ManagedRuleSetVersion = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<ManagedRuleSetVersion>;
export type PublishedVersions = { [key: string]: ManagedRuleSetVersion | undefined };
const PublishedVersions = /*@__PURE__*/ __L.at(__c19, 7);
export interface ManagedRuleSet {
  Name: string;
  Id: string;
  ARN: string;
  Description?: string;
  PublishedVersions?: { [key: string]: ManagedRuleSetVersion | undefined };
  RecommendedVersion?: string;
  LabelNamespace?: string;
}
const ManagedRuleSet = /*@__PURE__*/ __L.at(__c20, 0) as any as S.Schema<ManagedRuleSet>;
export interface GetManagedRuleSetResponse {
  ManagedRuleSet?: ManagedRuleSet;
  LockToken?: string;
}
const GetManagedRuleSetResponse = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<GetManagedRuleSetResponse>;
export interface GetMobileSdkReleaseRequest {
  Platform: Platform;
  ReleaseVersion: string;
}
const GetMobileSdkReleaseRequest = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<GetMobileSdkReleaseRequest>;
export type ReleaseNotes = string;
export interface MobileSdkRelease {
  ReleaseVersion?: string;
  Timestamp?: Date;
  ReleaseNotes?: string;
  Tags?: Tag[];
}
const MobileSdkRelease = /*@__PURE__*/ __L.at(__c20, 3) as any as S.Schema<MobileSdkRelease>;
export interface GetMobileSdkReleaseResponse {
  MobileSdkRelease?: MobileSdkRelease;
}
const GetMobileSdkReleaseResponse = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<GetMobileSdkReleaseResponse>;
export interface GetPermissionPolicyRequest {
  ResourceArn: string;
}
const GetPermissionPolicyRequest = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<GetPermissionPolicyRequest>;
export type PolicyString = string;
export interface GetPermissionPolicyResponse {
  Policy?: string;
}
const GetPermissionPolicyResponse = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<GetPermissionPolicyResponse>;
export interface GetRateBasedStatementManagedKeysRequest {
  Scope: Scope;
  WebACLName: string;
  WebACLId: string;
  RuleGroupRuleName?: string;
  RuleName: string;
}
const GetRateBasedStatementManagedKeysRequest = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<GetRateBasedStatementManagedKeysRequest>;
export interface RateBasedStatementManagedKeysIPSet {
  IPAddressVersion?: IPAddressVersion;
  Addresses?: string[];
}
const RateBasedStatementManagedKeysIPSet = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<RateBasedStatementManagedKeysIPSet>;
export interface GetRateBasedStatementManagedKeysResponse {
  ManagedKeysIPV4?: RateBasedStatementManagedKeysIPSet;
  ManagedKeysIPV6?: RateBasedStatementManagedKeysIPSet;
}
const GetRateBasedStatementManagedKeysResponse = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<GetRateBasedStatementManagedKeysResponse>;
export interface GetRegexPatternSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
}
const GetRegexPatternSetRequest = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<GetRegexPatternSetRequest>;
export interface RegexPatternSet {
  Name?: string;
  Id?: string;
  ARN?: string;
  Description?: string;
  RegularExpressionList?: Regex[];
}
const RegexPatternSet = /*@__PURE__*/ __L.at(__c21, 3) as any as S.Schema<RegexPatternSet>;
export interface GetRegexPatternSetResponse {
  RegexPatternSet?: RegexPatternSet;
  LockToken?: string;
}
const GetRegexPatternSetResponse = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<GetRegexPatternSetResponse>;
export type RankingStatisticType =
  | "TOP_SOURCES_BY_REVENUE"
  | "TOP_PATHS_BY_REVENUE"
  | (string & {});
const RankingStatisticType = S.String;

export interface TimeWindow {
  StartTime: Date;
  EndTime: Date;
}
const TimeWindow = /*@__PURE__*/ __L.at(__c21, 5) as any as S.Schema<TimeWindow>;
export type Currency = "USDC" | (string & {});
const Currency = S.String;

export type GroupByType =
  | "NAME"
  | "CATEGORY"
  | "INTENT"
  | "ORGANIZATION"
  | "WEBACL"
  | (string & {});
const GroupByType = S.String;

export type MonetizationFilterName = string;
export type MonetizationFilterValue = string;
export type MonetizationFilterValueList = string[];
const MonetizationFilterValueList =
  JsonPointerPaths as any as S.Schema<MonetizationFilterValueList>;
export interface MonetizationFilter {
  Name: string;
  Values: string[];
}
const MonetizationFilter = /*@__PURE__*/ __L.at(__c21, 6) as any as S.Schema<MonetizationFilter>;
export type MonetizationFilterList = MonetizationFilter[];
const MonetizationFilterList = /*@__PURE__*/ __L.at(__c21, 7);
export type NextMarker = string;
export type PathStatisticsLimit = number;
export type RankingSortBy = "REVENUE" | "PERCENTAGE" | "NAME" | (string & {});
const RankingSortBy = S.String;

export type SortOrder = "ASC" | "DESC" | (string & {});
const SortOrder = S.String;

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
const GetRevenueStatisticsRequest = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<GetRevenueStatisticsRequest>;
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
const SourceStatistics = /*@__PURE__*/ __L.at(__c22, 1) as any as S.Schema<SourceStatistics>;
export type SourceStatisticsList = SourceStatistics[];
const SourceStatisticsList = /*@__PURE__*/ __L.at(__c22, 2);
export type PathString = string;
export interface RevenuePathStatistics {
  Path: string;
  Percentage: number;
  Amount: string;
  RequestCount: number;
}
const RevenuePathStatistics = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<RevenuePathStatistics>;
export type RevenuePathStatisticsList = RevenuePathStatistics[];
const RevenuePathStatisticsList = /*@__PURE__*/ __L.at(__c22, 4);
export interface GetRevenueStatisticsResponse {
  SourceStatistics?: SourceStatistics[];
  RevenuePathStatistics?: RevenuePathStatistics[];
  NextMarker?: string;
}
const GetRevenueStatisticsResponse = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<GetRevenueStatisticsResponse>;
export interface GetRevenueStatisticsSummaryRequest {
  TimeWindow: TimeWindow;
  Scope: Scope;
  Currency: Currency;
  Filters?: MonetizationFilter[];
}
const GetRevenueStatisticsSummaryRequest = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<GetRevenueStatisticsSummaryRequest>;
export interface RevenueBreakdown {
  TotalAmount?: string;
  VerifiedAmount?: string;
  UnverifiedAmount?: string;
  Currency?: Currency;
  TotalSettled?: number;
  TotalMonetizeServed?: number;
}
const RevenueBreakdown = /*@__PURE__*/ __L.at(__c22, 7) as any as S.Schema<RevenueBreakdown>;
export interface GetRevenueStatisticsSummaryResponse {
  RevenueBreakdown?: RevenueBreakdown;
}
const GetRevenueStatisticsSummaryResponse = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<GetRevenueStatisticsSummaryResponse>;
export type TimeSeriesStatisticType = "DATE_HISTOGRAM" | "PAYMENT_TRAFFIC" | (string & {});
const TimeSeriesStatisticType = S.String;

export type IntervalType = "MINUTELY" | "FIVE_MINUTELY" | "HOURLY" | "DAILY" | (string & {});
const IntervalType = S.String;

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
const GetRevenueStatisticsTimeSeriesRequest = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<GetRevenueStatisticsTimeSeriesRequest>;
export interface DataPointEntry {
  Date?: Date;
  MonetizeServedCount?: number;
  SettledCount?: number;
  TotalAmount?: string;
  Category?: string;
  Intent?: string;
  GroupByValue?: string;
}
const DataPointEntry = /*@__PURE__*/ __L.at(__c23, 2) as any as S.Schema<DataPointEntry>;
export type DataPointsList = DataPointEntry[];
const DataPointsList = /*@__PURE__*/ __L.at(__c23, 3);
export interface GetRevenueStatisticsTimeSeriesResponse {
  DataPoints?: DataPointEntry[];
  NextMarker?: string;
}
const GetRevenueStatisticsTimeSeriesResponse = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<GetRevenueStatisticsTimeSeriesResponse>;
export interface GetRuleGroupRequest {
  Name?: string;
  Scope?: Scope;
  Id?: string;
  ARN?: string;
}
const GetRuleGroupRequest = /*@__PURE__*/ __L.at(__c23, 5) as any as S.Schema<GetRuleGroupRequest>;
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
const RuleGroup = /*@__PURE__*/ __L.at(__c23, 6) as any as S.Schema<RuleGroup>;
export interface GetRuleGroupResponse {
  RuleGroup?: RuleGroup;
  LockToken?: string;
}
const GetRuleGroupResponse = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<GetRuleGroupResponse>;
export type ListMaxItems = number;
export interface GetSampledRequestsRequest {
  WebAclArn: string;
  RuleMetricName: string;
  Scope: Scope;
  TimeWindow: TimeWindow;
  MaxItems: number;
}
const GetSampledRequestsRequest = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<GetSampledRequestsRequest>;
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
const HTTPHeader = /*@__PURE__*/ __L.at(__c24, 1) as any as S.Schema<HTTPHeader>;
export type HTTPHeaders = HTTPHeader[];
const HTTPHeaders = /*@__PURE__*/ __L.at(__c24, 2);
export interface HTTPRequest {
  ClientIP?: string;
  Country?: string;
  URI?: string;
  Method?: string;
  HTTPVersion?: string;
  Headers?: HTTPHeader[];
}
const HTTPRequest = /*@__PURE__*/ __L.at(__c24, 3) as any as S.Schema<HTTPRequest>;
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
const FailureReason = S.String;

export interface CaptchaResponse {
  ResponseCode?: number;
  SolveTimestamp?: number;
  FailureReason?: FailureReason;
}
const CaptchaResponse = /*@__PURE__*/ __L.at(__c24, 4) as any as S.Schema<CaptchaResponse>;
export interface ChallengeResponse {
  ResponseCode?: number;
  SolveTimestamp?: number;
  FailureReason?: FailureReason;
}
const ChallengeResponse = CaptchaResponse as any as S.Schema<ChallengeResponse>;
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
const SampledHTTPRequest = /*@__PURE__*/ __L.at(__c24, 5) as any as S.Schema<SampledHTTPRequest>;
export type SampledHTTPRequests = SampledHTTPRequest[];
const SampledHTTPRequests = /*@__PURE__*/ __L.at(__c24, 6);
export type PopulationSize = number;
export interface GetSampledRequestsResponse {
  SampledRequests?: SampledHTTPRequest[];
  PopulationSize?: number;
  TimeWindow?: TimeWindow;
}
const GetSampledRequestsResponse = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<GetSampledRequestsResponse>;
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
const GetTopPathStatisticsByTrafficRequest = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<GetTopPathStatisticsByTrafficRequest>;
export interface FilterSource {
  BotCategory?: string;
  BotOrganization?: string;
  BotName?: string;
}
const FilterSource = /*@__PURE__*/ __L.at(__c25, 1) as any as S.Schema<FilterSource>;
export interface BotStatistics {
  BotName: string;
  RequestCount: number;
  Percentage: number;
}
const BotStatistics = /*@__PURE__*/ __L.at(__c25, 2) as any as S.Schema<BotStatistics>;
export type BotStatisticsList = BotStatistics[];
const BotStatisticsList = /*@__PURE__*/ __L.at(__c25, 3);
export interface PathStatistics {
  Source?: FilterSource;
  Path: string;
  RequestCount: number;
  Percentage: number;
  TopBots?: BotStatistics[];
}
const PathStatistics = /*@__PURE__*/ __L.at(__c25, 4) as any as S.Schema<PathStatistics>;
export type PathStatisticsList = PathStatistics[];
const PathStatisticsList = /*@__PURE__*/ __L.at(__c25, 5);
export interface GetTopPathStatisticsByTrafficResponse {
  PathStatistics: PathStatistics[];
  TotalRequestCount: number;
  NextMarker?: string;
  TopCategories?: PathStatistics[];
}
const GetTopPathStatisticsByTrafficResponse = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<GetTopPathStatisticsByTrafficResponse>;
export interface GetWebACLRequest {
  Name?: string;
  Scope?: Scope;
  Id?: string;
  ARN?: string;
}
const GetWebACLRequest = /*@__PURE__*/ __L.at(__c25, 7) as any as S.Schema<GetWebACLRequest>;
export interface FirewallManagerStatement {
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
}
const FirewallManagerStatement = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<FirewallManagerStatement>;
export interface FirewallManagerRuleGroup {
  Name: string;
  Priority: number;
  FirewallManagerStatement: FirewallManagerStatement;
  OverrideAction: OverrideAction;
  VisibilityConfig: VisibilityConfig;
}
const FirewallManagerRuleGroup = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<FirewallManagerRuleGroup>;
export type FirewallManagerRuleGroups = FirewallManagerRuleGroup[];
const FirewallManagerRuleGroups = /*@__PURE__*/ __L.at(__c26, 2);
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
const WebACL = /*@__PURE__*/ __L.at(__c26, 3) as any as S.Schema<WebACL>;
export type OutputUrl = string;
export interface GetWebACLResponse {
  WebACL?: WebACL;
  LockToken?: string;
  ApplicationIntegrationURL?: string;
}
const GetWebACLResponse = /*@__PURE__*/ __L.at(__c26, 4) as any as S.Schema<GetWebACLResponse>;
export interface GetWebACLForResourceRequest {
  ResourceArn: string;
}
const GetWebACLForResourceRequest = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<GetWebACLForResourceRequest>;
export interface GetWebACLForResourceResponse {
  WebACL?: WebACL;
}
const GetWebACLForResourceResponse = /*@__PURE__*/ __L.at(
  __c26,
  6,
) as any as S.Schema<GetWebACLForResourceResponse>;
export type PaginationLimit = number;
export interface ListAPIKeysRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
const ListAPIKeysRequest = /*@__PURE__*/ __L.at(__c26, 7) as any as S.Schema<ListAPIKeysRequest>;
export type APIKeyVersion = number;
export interface APIKeySummary {
  TokenDomains?: string[];
  APIKey?: string;
  CreationTimestamp?: Date;
  Version?: number;
}
const APIKeySummary = /*@__PURE__*/ __L.at(__c27, 0) as any as S.Schema<APIKeySummary>;
export type APIKeySummaries = APIKeySummary[];
const APIKeySummaries = /*@__PURE__*/ __L.at(__c27, 1);
export interface ListAPIKeysResponse {
  NextMarker?: string;
  APIKeySummaries?: APIKeySummary[];
  ApplicationIntegrationURL?: string;
}
const ListAPIKeysResponse = /*@__PURE__*/ __L.at(__c27, 2) as any as S.Schema<ListAPIKeysResponse>;
export interface ListAvailableManagedRuleGroupsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
const ListAvailableManagedRuleGroupsRequest = /*@__PURE__*/ __L.at(
  __c27,
  3,
) as any as S.Schema<ListAvailableManagedRuleGroupsRequest>;
export interface ManagedRuleGroupSummary {
  VendorName?: string;
  Name?: string;
  VersioningSupported?: boolean;
  Description?: string;
}
const ManagedRuleGroupSummary = /*@__PURE__*/ __L.at(
  __c27,
  4,
) as any as S.Schema<ManagedRuleGroupSummary>;
export type ManagedRuleGroupSummaries = ManagedRuleGroupSummary[];
const ManagedRuleGroupSummaries = /*@__PURE__*/ __L.at(__c27, 5);
export interface ListAvailableManagedRuleGroupsResponse {
  NextMarker?: string;
  ManagedRuleGroups?: ManagedRuleGroupSummary[];
}
const ListAvailableManagedRuleGroupsResponse = /*@__PURE__*/ __L.at(
  __c27,
  6,
) as any as S.Schema<ListAvailableManagedRuleGroupsResponse>;
export interface ListAvailableManagedRuleGroupVersionsRequest {
  VendorName: string;
  Name: string;
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
const ListAvailableManagedRuleGroupVersionsRequest = /*@__PURE__*/ __L.at(
  __c27,
  7,
) as any as S.Schema<ListAvailableManagedRuleGroupVersionsRequest>;
export interface ManagedRuleGroupVersion {
  Name?: string;
  LastUpdateTimestamp?: Date;
}
const ManagedRuleGroupVersion = /*@__PURE__*/ __L.at(
  __c28,
  0,
) as any as S.Schema<ManagedRuleGroupVersion>;
export type ManagedRuleGroupVersions = ManagedRuleGroupVersion[];
const ManagedRuleGroupVersions = /*@__PURE__*/ __L.at(__c28, 1);
export interface ListAvailableManagedRuleGroupVersionsResponse {
  NextMarker?: string;
  Versions?: ManagedRuleGroupVersion[];
  CurrentDefaultVersion?: string;
}
const ListAvailableManagedRuleGroupVersionsResponse = /*@__PURE__*/ __L.at(
  __c28,
  2,
) as any as S.Schema<ListAvailableManagedRuleGroupVersionsResponse>;
export interface ListIPSetsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
const ListIPSetsRequest = /*@__PURE__*/ __L.at(__c28, 3) as any as S.Schema<ListIPSetsRequest>;
export type IPSetSummaries = IPSetSummary[];
const IPSetSummaries = /*@__PURE__*/ __L.at(__c28, 4);
export interface ListIPSetsResponse {
  NextMarker?: string;
  IPSets?: IPSetSummary[];
}
const ListIPSetsResponse = /*@__PURE__*/ __L.at(__c28, 5) as any as S.Schema<ListIPSetsResponse>;
export interface ListLoggingConfigurationsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
  LogScope?: LogScope;
}
const ListLoggingConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c28,
  6,
) as any as S.Schema<ListLoggingConfigurationsRequest>;
export type LoggingConfigurations = LoggingConfiguration[];
const LoggingConfigurations = /*@__PURE__*/ __L.at(__c28, 7);
export interface ListLoggingConfigurationsResponse {
  LoggingConfigurations?: LoggingConfiguration[];
  NextMarker?: string;
}
const ListLoggingConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c29,
  0,
) as any as S.Schema<ListLoggingConfigurationsResponse>;
export interface ListManagedRuleSetsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
const ListManagedRuleSetsRequest = /*@__PURE__*/ __L.at(
  __c29,
  1,
) as any as S.Schema<ListManagedRuleSetsRequest>;
export interface ManagedRuleSetSummary {
  Name?: string;
  Id?: string;
  Description?: string;
  LockToken?: string;
  ARN?: string;
  LabelNamespace?: string;
}
const ManagedRuleSetSummary = /*@__PURE__*/ __L.at(
  __c29,
  2,
) as any as S.Schema<ManagedRuleSetSummary>;
export type ManagedRuleSetSummaries = ManagedRuleSetSummary[];
const ManagedRuleSetSummaries = /*@__PURE__*/ __L.at(__c29, 3);
export interface ListManagedRuleSetsResponse {
  NextMarker?: string;
  ManagedRuleSets?: ManagedRuleSetSummary[];
}
const ListManagedRuleSetsResponse = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<ListManagedRuleSetsResponse>;
export interface ListMobileSdkReleasesRequest {
  Platform: Platform;
  NextMarker?: string;
  Limit?: number;
}
const ListMobileSdkReleasesRequest = /*@__PURE__*/ __L.at(
  __c29,
  5,
) as any as S.Schema<ListMobileSdkReleasesRequest>;
export interface ReleaseSummary {
  ReleaseVersion?: string;
  Timestamp?: Date;
}
const ReleaseSummary = /*@__PURE__*/ __L.at(__c29, 6) as any as S.Schema<ReleaseSummary>;
export type ReleaseSummaries = ReleaseSummary[];
const ReleaseSummaries = /*@__PURE__*/ __L.at(__c29, 7);
export interface ListMobileSdkReleasesResponse {
  ReleaseSummaries?: ReleaseSummary[];
  NextMarker?: string;
}
const ListMobileSdkReleasesResponse = /*@__PURE__*/ __L.at(
  __c30,
  0,
) as any as S.Schema<ListMobileSdkReleasesResponse>;
export interface ListRegexPatternSetsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
const ListRegexPatternSetsRequest = /*@__PURE__*/ __L.at(
  __c30,
  1,
) as any as S.Schema<ListRegexPatternSetsRequest>;
export type RegexPatternSetSummaries = RegexPatternSetSummary[];
const RegexPatternSetSummaries = IPSetSummaries as any as S.Schema<RegexPatternSetSummaries>;
export interface ListRegexPatternSetsResponse {
  NextMarker?: string;
  RegexPatternSets?: RegexPatternSetSummary[];
}
const ListRegexPatternSetsResponse = /*@__PURE__*/ __L.at(
  __c30,
  2,
) as any as S.Schema<ListRegexPatternSetsResponse>;
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
const ResourceType = S.String;

export interface ListResourcesForWebACLRequest {
  WebACLArn: string;
  ResourceType?: ResourceType;
}
const ListResourcesForWebACLRequest = /*@__PURE__*/ __L.at(
  __c30,
  3,
) as any as S.Schema<ListResourcesForWebACLRequest>;
export type ResourceArns = string[];
const ResourceArns = JsonPointerPaths as any as S.Schema<ResourceArns>;
export interface ListResourcesForWebACLResponse {
  ResourceArns?: string[];
}
const ListResourcesForWebACLResponse = /*@__PURE__*/ __L.at(
  __c30,
  4,
) as any as S.Schema<ListResourcesForWebACLResponse>;
export interface ListRuleGroupsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
const ListRuleGroupsRequest = /*@__PURE__*/ __L.at(
  __c30,
  5,
) as any as S.Schema<ListRuleGroupsRequest>;
export type RuleGroupSummaries = RuleGroupSummary[];
const RuleGroupSummaries = IPSetSummaries as any as S.Schema<RuleGroupSummaries>;
export interface ListRuleGroupsResponse {
  NextMarker?: string;
  RuleGroups?: RuleGroupSummary[];
}
const ListRuleGroupsResponse = /*@__PURE__*/ __L.at(
  __c30,
  6,
) as any as S.Schema<ListRuleGroupsResponse>;
export type SettlementSortBy = "TIMESTAMP" | "AMOUNT" | "NAME" | "STATUS" | (string & {});
const SettlementSortBy = S.String;

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
const ListSettlementRecordsRequest = /*@__PURE__*/ __L.at(
  __c30,
  7,
) as any as S.Schema<ListSettlementRecordsRequest>;
export type SettlementFilterString = string;
export type SettlementStatus =
  | "SETTLED"
  | "PENDING"
  | "FAILED"
  | "SERVICE_ERROR"
  | "SKIPPED_ORIGIN_ERROR"
  | "DUPLICATE"
  | (string & {});
const SettlementStatus = S.String;

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
const SettlementRecord = /*@__PURE__*/ __L.at(__c31, 0) as any as S.Schema<SettlementRecord>;
export type SettlementRecordList = SettlementRecord[];
const SettlementRecordList = /*@__PURE__*/ __L.at(__c31, 1);
export interface ListSettlementRecordsResponse {
  Settlements?: SettlementRecord[];
  NextMarker?: string;
}
const ListSettlementRecordsResponse = /*@__PURE__*/ __L.at(
  __c31,
  2,
) as any as S.Schema<ListSettlementRecordsResponse>;
export interface ListTagsForResourceRequest {
  NextMarker?: string;
  Limit?: number;
  ResourceARN: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c31,
  3,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface TagInfoForResource {
  ResourceARN?: string;
  TagList?: Tag[];
}
const TagInfoForResource = /*@__PURE__*/ __L.at(__c31, 4) as any as S.Schema<TagInfoForResource>;
export interface ListTagsForResourceResponse {
  NextMarker?: string;
  TagInfoForResource?: TagInfoForResource;
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c31,
  5,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListWebACLsRequest {
  Scope: Scope;
  NextMarker?: string;
  Limit?: number;
}
const ListWebACLsRequest = /*@__PURE__*/ __L.at(__c31, 6) as any as S.Schema<ListWebACLsRequest>;
export type WebACLSummaries = WebACLSummary[];
const WebACLSummaries = IPSetSummaries as any as S.Schema<WebACLSummaries>;
export interface ListWebACLsResponse {
  NextMarker?: string;
  WebACLs?: WebACLSummary[];
}
const ListWebACLsResponse = /*@__PURE__*/ __L.at(__c31, 7) as any as S.Schema<ListWebACLsResponse>;
export interface PutLoggingConfigurationRequest {
  LoggingConfiguration: LoggingConfiguration;
}
const PutLoggingConfigurationRequest = /*@__PURE__*/ __L.at(
  __c32,
  0,
) as any as S.Schema<PutLoggingConfigurationRequest>;
export interface PutLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration;
}
const PutLoggingConfigurationResponse =
  GetLoggingConfigurationResponse as any as S.Schema<PutLoggingConfigurationResponse>;
export interface VersionToPublish {
  AssociatedRuleGroupArn?: string;
  ForecastedLifetime?: number;
}
const VersionToPublish = /*@__PURE__*/ __L.at(__c32, 1) as any as S.Schema<VersionToPublish>;
export type VersionsToPublish = { [key: string]: VersionToPublish | undefined };
const VersionsToPublish = /*@__PURE__*/ __L.at(__c32, 2);
export interface PutManagedRuleSetVersionsRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
  RecommendedVersion?: string;
  VersionsToPublish?: { [key: string]: VersionToPublish | undefined };
}
const PutManagedRuleSetVersionsRequest = /*@__PURE__*/ __L.at(
  __c32,
  3,
) as any as S.Schema<PutManagedRuleSetVersionsRequest>;
export interface PutManagedRuleSetVersionsResponse {
  NextLockToken?: string;
}
const PutManagedRuleSetVersionsResponse = /*@__PURE__*/ __L.at(
  __c32,
  4,
) as any as S.Schema<PutManagedRuleSetVersionsResponse>;
export interface PutPermissionPolicyRequest {
  ResourceArn: string;
  Policy: string;
}
const PutPermissionPolicyRequest = /*@__PURE__*/ __L.at(
  __c32,
  5,
) as any as S.Schema<PutPermissionPolicyRequest>;
export interface PutPermissionPolicyResponse {}
const PutPermissionPolicyResponse =
  DeleteLoggingConfigurationResponse as any as S.Schema<PutPermissionPolicyResponse>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c32, 6) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteAPIKeyResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = JsonPointerPaths as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c32,
  7,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteAPIKeyResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateIPSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  Description?: string;
  Addresses: string[];
  LockToken: string;
}
const UpdateIPSetRequest = /*@__PURE__*/ __L.at(__c33, 0) as any as S.Schema<UpdateIPSetRequest>;
export interface UpdateIPSetResponse {
  NextLockToken?: string;
}
const UpdateIPSetResponse = /*@__PURE__*/ __L.at(__c33, 1) as any as S.Schema<UpdateIPSetResponse>;
export interface UpdateManagedRuleSetVersionExpiryDateRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  LockToken: string;
  VersionToExpire: string;
  ExpiryTimestamp: Date;
}
const UpdateManagedRuleSetVersionExpiryDateRequest = /*@__PURE__*/ __L.at(
  __c33,
  2,
) as any as S.Schema<UpdateManagedRuleSetVersionExpiryDateRequest>;
export interface UpdateManagedRuleSetVersionExpiryDateResponse {
  ExpiringVersion?: string;
  ExpiryTimestamp?: Date;
  NextLockToken?: string;
}
const UpdateManagedRuleSetVersionExpiryDateResponse = /*@__PURE__*/ __L.at(
  __c33,
  3,
) as any as S.Schema<UpdateManagedRuleSetVersionExpiryDateResponse>;
export interface UpdateRegexPatternSetRequest {
  Name: string;
  Scope: Scope;
  Id: string;
  Description?: string;
  RegularExpressionList: Regex[];
  LockToken: string;
}
const UpdateRegexPatternSetRequest = /*@__PURE__*/ __L.at(
  __c33,
  4,
) as any as S.Schema<UpdateRegexPatternSetRequest>;
export interface UpdateRegexPatternSetResponse {
  NextLockToken?: string;
}
const UpdateRegexPatternSetResponse =
  PutManagedRuleSetVersionsResponse as any as S.Schema<UpdateRegexPatternSetResponse>;
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
const UpdateRuleGroupRequest = /*@__PURE__*/ __L.at(
  __c33,
  5,
) as any as S.Schema<UpdateRuleGroupRequest>;
export interface UpdateRuleGroupResponse {
  NextLockToken?: string;
}
const UpdateRuleGroupResponse = UpdateIPSetResponse as any as S.Schema<UpdateRuleGroupResponse>;
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
const UpdateWebACLRequest = /*@__PURE__*/ __L.at(__c33, 6) as any as S.Schema<UpdateWebACLRequest>;
export interface UpdateWebACLResponse {
  NextLockToken?: string;
}
const UpdateWebACLResponse = UpdateIPSetResponse as any as S.Schema<UpdateWebACLResponse>;
export type ErrorMessage = string;
export type PricingPlanFeatureName = string;
export type RequiredPricingPlanName = string;
export interface DisallowedFeature {
  Feature?: string;
  RequiredPricingPlan?: string;
}
const DisallowedFeature = /*@__PURE__*/ __L.at(__c33, 7) as any as S.Schema<DisallowedFeature>;
export type DisallowedFeatures = DisallowedFeature[];
const DisallowedFeatures = /*@__PURE__*/ __L.at(__c34, 0);
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
const ParameterExceptionField = S.String;

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
  input: AssociateWebACLRequest,
  output: AssociateWebACLResponse,
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
  input: CheckCapacityRequest,
  output: CheckCapacityResponse,
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
  input: CreateAPIKeyRequest,
  output: CreateAPIKeyResponse,
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
  input: CreateIPSetRequest,
  output: CreateIPSetResponse,
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
  input: CreateRegexPatternSetRequest,
  output: CreateRegexPatternSetResponse,
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
  input: CreateRuleGroupRequest,
  output: CreateRuleGroupResponse,
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
  input: CreateWebACLRequest,
  output: CreateWebACLResponse,
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
  input: DeleteAPIKeyRequest,
  output: DeleteAPIKeyResponse,
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
  input: DeleteFirewallManagerRuleGroupsRequest,
  output: DeleteFirewallManagerRuleGroupsResponse,
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
  input: DeleteIPSetRequest,
  output: DeleteIPSetResponse,
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
  input: DeleteLoggingConfigurationRequest,
  output: DeleteLoggingConfigurationResponse,
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
  input: DeletePermissionPolicyRequest,
  output: DeletePermissionPolicyResponse,
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
  input: DeleteRegexPatternSetRequest,
  output: DeleteRegexPatternSetResponse,
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
  input: DeleteRuleGroupRequest,
  output: DeleteRuleGroupResponse,
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
  input: DeleteWebACLRequest,
  output: DeleteWebACLResponse,
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
  input: DescribeAllManagedProductsRequest,
  output: DescribeAllManagedProductsResponse,
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
  input: DescribeManagedProductsByVendorRequest,
  output: DescribeManagedProductsByVendorResponse,
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
  input: DescribeManagedRuleGroupRequest,
  output: DescribeManagedRuleGroupResponse,
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
  input: DisassociateWebACLRequest,
  output: DisassociateWebACLResponse,
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
  input: GenerateMobileSdkReleaseUrlRequest,
  output: GenerateMobileSdkReleaseUrlResponse,
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
  input: GetDecryptedAPIKeyRequest,
  output: GetDecryptedAPIKeyResponse,
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
  input: GetIPSetRequest,
  output: GetIPSetResponse,
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
  input: GetLoggingConfigurationRequest,
  output: GetLoggingConfigurationResponse,
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
  input: GetManagedRuleSetRequest,
  output: GetManagedRuleSetResponse,
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
  input: GetMobileSdkReleaseRequest,
  output: GetMobileSdkReleaseResponse,
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
  input: GetPermissionPolicyRequest,
  output: GetPermissionPolicyResponse,
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
  input: GetRateBasedStatementManagedKeysRequest,
  output: GetRateBasedStatementManagedKeysResponse,
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
  input: GetRegexPatternSetRequest,
  output: GetRegexPatternSetResponse,
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
  input: GetRevenueStatisticsRequest,
  output: GetRevenueStatisticsResponse,
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
  input: GetRevenueStatisticsSummaryRequest,
  output: GetRevenueStatisticsSummaryResponse,
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
  input: GetRevenueStatisticsTimeSeriesRequest,
  output: GetRevenueStatisticsTimeSeriesResponse,
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
  input: GetRuleGroupRequest,
  output: GetRuleGroupResponse,
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
  input: GetSampledRequestsRequest,
  output: GetSampledRequestsResponse,
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
  input: GetTopPathStatisticsByTrafficRequest,
  output: GetTopPathStatisticsByTrafficResponse,
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
  input: GetWebACLRequest,
  output: GetWebACLResponse,
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
  input: GetWebACLForResourceRequest,
  output: GetWebACLForResourceResponse,
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
  input: ListAPIKeysRequest,
  output: ListAPIKeysResponse,
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
  input: ListAvailableManagedRuleGroupsRequest,
  output: ListAvailableManagedRuleGroupsResponse,
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
  input: ListAvailableManagedRuleGroupVersionsRequest,
  output: ListAvailableManagedRuleGroupVersionsResponse,
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
  input: ListIPSetsRequest,
  output: ListIPSetsResponse,
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
  input: ListLoggingConfigurationsRequest,
  output: ListLoggingConfigurationsResponse,
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
  input: ListManagedRuleSetsRequest,
  output: ListManagedRuleSetsResponse,
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
  input: ListMobileSdkReleasesRequest,
  output: ListMobileSdkReleasesResponse,
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
  input: ListRegexPatternSetsRequest,
  output: ListRegexPatternSetsResponse,
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
  input: ListResourcesForWebACLRequest,
  output: ListResourcesForWebACLResponse,
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
  input: ListRuleGroupsRequest,
  output: ListRuleGroupsResponse,
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
  input: ListSettlementRecordsRequest,
  output: ListSettlementRecordsResponse,
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
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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
  input: ListWebACLsRequest,
  output: ListWebACLsResponse,
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
  input: PutLoggingConfigurationRequest,
  output: PutLoggingConfigurationResponse,
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
  input: PutManagedRuleSetVersionsRequest,
  output: PutManagedRuleSetVersionsResponse,
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
  input: PutPermissionPolicyRequest,
  output: PutPermissionPolicyResponse,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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
  input: UntagResourceRequest,
  output: UntagResourceResponse,
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
  input: UpdateIPSetRequest,
  output: UpdateIPSetResponse,
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
  input: UpdateManagedRuleSetVersionExpiryDateRequest,
  output: UpdateManagedRuleSetVersionExpiryDateResponse,
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
  input: UpdateRegexPatternSetRequest,
  output: UpdateRegexPatternSetResponse,
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
  input: UpdateRuleGroupRequest,
  output: UpdateRuleGroupResponse,
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
  input: UpdateWebACLRequest,
  output: UpdateWebACLResponse,
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
      return S.suspend(() => S.Struct({ OversizeHandling: S.optional(OversizeHandling) })).annotate(
        { identifier: "Body" },
      );
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ All: S.optional(All), IncludedPaths: S.optional(JsonPointerPaths) }),
      ).annotate({ identifier: "JsonMatchPattern" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MatchPattern: JsonMatchPattern,
          MatchScope: JsonMatchScope,
          InvalidFallbackBehavior: S.optional(BodyParsingFallbackBehavior),
          OversizeHandling: S.optional(OversizeHandling),
        }),
      ).annotate({ identifier: "JsonBody" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          All: S.optional(All),
          IncludedHeaders: S.optional(HeaderNames),
          ExcludedHeaders: S.optional(HeaderNames),
        }),
      ).annotate({ identifier: "HeaderMatchPattern" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MatchPattern: HeaderMatchPattern,
          MatchScope: MapMatchScope,
          OversizeHandling: OversizeHandling,
        }),
      ).annotate({ identifier: "Headers" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          All: S.optional(All),
          IncludedCookies: S.optional(CookieNames),
          ExcludedCookies: S.optional(CookieNames),
        }),
      ).annotate({ identifier: "CookieMatchPattern" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MatchPattern: CookieMatchPattern,
          MatchScope: MapMatchScope,
          OversizeHandling: OversizeHandling,
        }),
      ).annotate({ identifier: "Cookies" });
    case 5:
      return S.suspend(() => S.Struct({ OversizeHandling: OversizeHandling })).annotate({
        identifier: "HeaderOrder",
      });
    case 6:
      return S.suspend(() => S.Struct({ FallbackBehavior: FallbackBehavior })).annotate({
        identifier: "JA3Fingerprint",
      });
    case 7:
      return S.suspend(() => S.Struct({ FallbackBehavior: S.optional(FallbackBehavior) })).annotate(
        { identifier: "UriFragment" },
      );
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SingleHeader: S.optional(SingleHeader),
          SingleQueryArgument: S.optional(SingleQueryArgument),
          AllQueryArguments: S.optional(AllQueryArguments),
          UriPath: S.optional(UriPath),
          QueryString: S.optional(QueryString),
          Body: S.optional(Body),
          Method: S.optional(Method),
          JsonBody: S.optional(JsonBody),
          Headers: S.optional(Headers),
          Cookies: S.optional(Cookies),
          HeaderOrder: S.optional(HeaderOrder),
          JA3Fingerprint: S.optional(JA3Fingerprint),
          JA4Fingerprint: S.optional(JA4Fingerprint),
          UriFragment: S.optional(UriFragment),
        }),
      ).annotate({ identifier: "FieldToMatch" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Priority: S.Number, Type: TextTransformationType }),
      ).annotate({ identifier: "TextTransformation" });
    case 2:
      return S.Array(TextTransformation);
    case 3:
      return S.suspend(() =>
        S.Struct({ Priority: S.Number, Type: PreParseTextTransformationType }),
      ).annotate({
        identifier: "PreParseTextTransformation",
      });
    case 4:
      return S.Array(PreParseTextTransformation);
    case 5:
      return S.suspend(() =>
        S.Struct({
          SearchString: T.Blob,
          FieldToMatch: FieldToMatch,
          TextTransformations: TextTransformations,
          PreParseTextTransformations: S.optional(PreParseTextTransformations),
          PositionalConstraint: PositionalConstraint,
        }),
      ).annotate({ identifier: "ByteMatchStatement" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FieldToMatch: FieldToMatch,
          TextTransformations: TextTransformations,
          PreParseTextTransformations: S.optional(PreParseTextTransformations),
          SensitivityLevel: S.optional(SensitivityLevel),
        }),
      ).annotate({ identifier: "SqliMatchStatement" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          FieldToMatch: FieldToMatch,
          TextTransformations: TextTransformations,
          PreParseTextTransformations: S.optional(PreParseTextTransformations),
        }),
      ).annotate({ identifier: "XssMatchStatement" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FieldToMatch: FieldToMatch,
          ComparisonOperator: ComparisonOperator,
          Size: S.Number,
          TextTransformations: TextTransformations,
          PreParseTextTransformations: S.optional(PreParseTextTransformations),
        }),
      ).annotate({ identifier: "SizeConstraintStatement" });
    case 1:
      return S.Array(CountryCode);
    case 2:
      return S.suspend(() =>
        S.Struct({ HeaderName: S.String, FallbackBehavior: FallbackBehavior }),
      ).annotate({ identifier: "ForwardedIPConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CountryCodes: S.optional(CountryCodes),
          ForwardedIPConfig: S.optional(ForwardedIPConfig),
        }),
      ).annotate({ identifier: "GeoMatchStatement" });
    case 4:
      return S.Array(ExcludedRule);
    case 5:
      return S.suspend(() => S.Struct({ Name: S.String, Value: S.String })).annotate({
        identifier: "CustomHTTPHeader",
      });
    case 6:
      return S.Array(CustomHTTPHeader);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResponseCode: S.Number,
          CustomResponseBodyKey: S.optional(S.String),
          ResponseHeaders: S.optional(CustomHTTPHeaders),
        }),
      ).annotate({ identifier: "CustomResponse" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ CustomResponse: S.optional(CustomResponse) })).annotate({
        identifier: "BlockAction",
      });
    case 1:
      return S.suspend(() => S.Struct({ InsertHeaders: CustomHTTPHeaders })).annotate({
        identifier: "CustomRequestHandling",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ CustomRequestHandling: S.optional(CustomRequestHandling) }),
      ).annotate({ identifier: "AllowAction" });
    case 3:
      return S.suspend(() => S.Struct({ PriceMultiplier: S.optional(S.String) })).annotate({
        identifier: "MonetizeAction",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Block: S.optional(BlockAction),
          Allow: S.optional(AllowAction),
          Count: S.optional(CountAction),
          Captcha: S.optional(CaptchaAction),
          Challenge: S.optional(ChallengeAction),
          Monetize: S.optional(MonetizeAction),
        }),
      ).annotate({ identifier: "RuleAction" });
    case 5:
      return S.suspend(() => S.Struct({ Name: S.String, ActionToUse: RuleAction })).annotate({
        identifier: "RuleActionOverride",
      });
    case 6:
      return S.Array(RuleActionOverride);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ARN: S.String,
          ExcludedRules: S.optional(ExcludedRules),
          RuleActionOverrides: S.optional(RuleActionOverrides),
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
          FallbackBehavior: FallbackBehavior,
          Position: ForwardedIPPosition,
        }),
      ).annotate({ identifier: "IPSetForwardedIPConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ARN: S.String, IPSetForwardedIPConfig: S.optional(IPSetForwardedIPConfig) }),
      ).annotate({ identifier: "IPSetReferenceStatement" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ARN: S.String,
          FieldToMatch: FieldToMatch,
          TextTransformations: TextTransformations,
          PreParseTextTransformations: S.optional(PreParseTextTransformations),
        }),
      ).annotate({
        identifier: "RegexPatternSetReferenceStatement",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.String, TextTransformations: TextTransformations }),
      ).annotate({ identifier: "RateLimitHeader" });
    case 4:
      return S.suspend(() => S.Struct({ TextTransformations: TextTransformations })).annotate({
        identifier: "RateLimitQueryString",
      });
    case 5:
      return S.suspend(() => S.Struct({ Namespace: S.String })).annotate({
        identifier: "RateLimitLabelNamespace",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Header: S.optional(RateLimitHeader),
          Cookie: S.optional(RateLimitCookie),
          QueryArgument: S.optional(RateLimitQueryArgument),
          QueryString: S.optional(RateLimitQueryString),
          HTTPMethod: S.optional(RateLimitHTTPMethod),
          ForwardedIP: S.optional(RateLimitForwardedIP),
          IP: S.optional(RateLimitIP),
          LabelNamespace: S.optional(RateLimitLabelNamespace),
          UriPath: S.optional(RateLimitUriPath),
          JA3Fingerprint: S.optional(RateLimitJA3Fingerprint),
          JA4Fingerprint: S.optional(RateLimitJA4Fingerprint),
          ASN: S.optional(RateLimitAsn),
        }),
      ).annotate({
        identifier: "RateBasedStatementCustomKey",
      });
    case 7:
      return S.Array(RateBasedStatementCustomKey);
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Limit: S.Number,
          EvaluationWindowSec: S.optional(S.Number),
          AggregateKeyType: RateBasedStatementAggregateKeyType,
          ScopeDownStatement: S.optional(
            S.suspend((): S.Schema<Statement> => Statement).annotate({ identifier: "Statement" }),
          ),
          ForwardedIPConfig: S.optional(ForwardedIPConfig),
          CustomKeys: S.optional(RateBasedStatementCustomKeys),
        }),
      ).annotate({ identifier: "RateBasedStatement" });
    case 1:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<Statement> => Statement).annotate({
          identifier: "Statement",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          Statements: S.suspend(() => Statements).annotate({ identifier: "Statements" }),
        }),
      ).annotate({ identifier: "AndStatement" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Statement: S.suspend((): S.Schema<Statement> => Statement).annotate({
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
          InspectionLevel: InspectionLevel,
          EnableMachineLearning: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AWSManagedRulesBotControlRuleSet",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PayloadType: PayloadType,
          UsernameField: UsernameField,
          PasswordField: PasswordField,
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
          SuccessCodes: ResponseInspectionStatusCodeSuccessCodes,
          FailureCodes: ResponseInspectionStatusCodeFailureCodes,
        }),
      ).annotate({
        identifier: "ResponseInspectionStatusCode",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          SuccessValues: ResponseInspectionHeaderSuccessValues,
          FailureValues: ResponseInspectionHeaderFailureValues,
        }),
      ).annotate({ identifier: "ResponseInspectionHeader" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SuccessStrings: ResponseInspectionBodyContainsSuccessStrings,
          FailureStrings: ResponseInspectionBodyContainsFailureStrings,
        }),
      ).annotate({
        identifier: "ResponseInspectionBodyContains",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String,
          SuccessValues: ResponseInspectionJsonSuccessValues,
          FailureValues: ResponseInspectionJsonFailureValues,
        }),
      ).annotate({ identifier: "ResponseInspectionJson" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StatusCode: S.optional(ResponseInspectionStatusCode),
          Header: S.optional(ResponseInspectionHeader),
          BodyContains: S.optional(ResponseInspectionBodyContains),
          Json: S.optional(ResponseInspectionJson),
        }),
      ).annotate({ identifier: "ResponseInspection" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LoginPath: S.String,
          RequestInspection: S.optional(RequestInspection),
          ResponseInspection: S.optional(ResponseInspection),
          EnableRegexInPath: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AWSManagedRulesATPRuleSet",
      });
    case 6:
      return S.Array(PhoneNumberField);
    case 7:
      return S.suspend(() =>
        S.Struct({
          PayloadType: PayloadType,
          UsernameField: S.optional(UsernameField),
          PasswordField: S.optional(PasswordField),
          EmailField: S.optional(EmailField),
          PhoneNumberFields: S.optional(PhoneNumberFields),
          AddressFields: S.optional(AddressFields),
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
          RequestInspection: RequestInspectionACFP,
          ResponseInspection: S.optional(ResponseInspection),
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
      return S.Array(Regex);
    case 3:
      return S.suspend(() =>
        S.Struct({
          UsageOfAction: UsageOfAction,
          Sensitivity: S.optional(SensitivityToAct),
          ExemptUriRegularExpressions: S.optional(RegularExpressionList),
        }),
      ).annotate({ identifier: "ClientSideAction" });
    case 4:
      return S.suspend(() => S.Struct({ Challenge: ClientSideAction })).annotate({
        identifier: "ClientSideActionConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClientSideActionConfig: ClientSideActionConfig,
          SensitivityToBlock: S.optional(SensitivityToAct),
        }),
      ).annotate({
        identifier: "AWSManagedRulesAntiDDoSRuleSet",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LoginPath: S.optional(S.String),
          PayloadType: S.optional(PayloadType),
          UsernameField: S.optional(UsernameField),
          PasswordField: S.optional(PasswordField),
          AWSManagedRulesBotControlRuleSet: S.optional(AWSManagedRulesBotControlRuleSet),
          AWSManagedRulesATPRuleSet: S.optional(AWSManagedRulesATPRuleSet),
          AWSManagedRulesACFPRuleSet: S.optional(AWSManagedRulesACFPRuleSet),
          AWSManagedRulesAntiDDoSRuleSet: S.optional(AWSManagedRulesAntiDDoSRuleSet),
        }),
      ).annotate({ identifier: "ManagedRuleGroupConfig" });
    case 7:
      return S.Array(ManagedRuleGroupConfig);
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
          ExcludedRules: S.optional(ExcludedRules),
          ScopeDownStatement: S.optional(
            S.suspend((): S.Schema<Statement> => Statement).annotate({ identifier: "Statement" }),
          ),
          ManagedRuleGroupConfigs: S.optional(ManagedRuleGroupConfigs),
          RuleActionOverrides: S.optional(RuleActionOverrides),
        }),
      ).annotate({
        identifier: "ManagedRuleGroupStatement",
      });
    case 1:
      return S.suspend(() => S.Struct({ Scope: LabelMatchScope, Key: S.String })).annotate({
        identifier: "LabelMatchStatement",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RegexString: S.String,
          FieldToMatch: FieldToMatch,
          TextTransformations: TextTransformations,
          PreParseTextTransformations: S.optional(PreParseTextTransformations),
        }),
      ).annotate({ identifier: "RegexMatchStatement" });
    case 3:
      return S.suspend(() =>
        S.Struct({ AsnList: AsnList, ForwardedIPConfig: S.optional(ForwardedIPConfig) }),
      ).annotate({ identifier: "AsnMatchStatement" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ByteMatchStatement: S.optional(ByteMatchStatement),
          SqliMatchStatement: S.optional(SqliMatchStatement),
          XssMatchStatement: S.optional(XssMatchStatement),
          SizeConstraintStatement: S.optional(SizeConstraintStatement),
          GeoMatchStatement: S.optional(GeoMatchStatement),
          RuleGroupReferenceStatement: S.optional(RuleGroupReferenceStatement),
          IPSetReferenceStatement: S.optional(IPSetReferenceStatement),
          RegexPatternSetReferenceStatement: S.optional(RegexPatternSetReferenceStatement),
          RateBasedStatement: S.optional(
            S.suspend((): S.Schema<RateBasedStatement> => RateBasedStatement).annotate({
              identifier: "RateBasedStatement",
            }),
          ),
          AndStatement: S.optional(
            S.suspend((): S.Schema<AndStatement> => AndStatement).annotate({
              identifier: "AndStatement",
            }),
          ),
          OrStatement: S.optional(
            S.suspend((): S.Schema<OrStatement> => OrStatement).annotate({
              identifier: "OrStatement",
            }),
          ),
          NotStatement: S.optional(
            S.suspend((): S.Schema<NotStatement> => NotStatement).annotate({
              identifier: "NotStatement",
            }),
          ),
          ManagedRuleGroupStatement: S.optional(
            S.suspend(
              (): S.Schema<ManagedRuleGroupStatement> => ManagedRuleGroupStatement,
            ).annotate({
              identifier: "ManagedRuleGroupStatement",
            }),
          ),
          LabelMatchStatement: S.optional(LabelMatchStatement),
          RegexMatchStatement: S.optional(RegexMatchStatement),
          AsnMatchStatement: S.optional(AsnMatchStatement),
        }),
      ).annotate({ identifier: "Statement" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Count: S.optional(CountAction), None: S.optional(NoneAction) }),
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
      return S.suspend(() =>
        S.Struct({ ImmunityTimeProperty: S.optional(ImmunityTimeProperty) }),
      ).annotate({ identifier: "CaptchaConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Priority: S.Number,
          Statement: Statement,
          Action: S.optional(RuleAction),
          OverrideAction: S.optional(OverrideAction),
          RuleLabels: S.optional(Labels),
          VisibilityConfig: VisibilityConfig,
          CaptchaConfig: S.optional(CaptchaConfig),
          ChallengeConfig: S.optional(ChallengeConfig),
        }),
      ).annotate({ identifier: "Rule" });
    case 2:
      return S.Array(Rule);
    case 3:
      return S.suspend(() =>
        S.Struct({ Scope: Scope, Rules: Rules }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CheckCapacityRequest" });
    case 4:
      return S.suspend(() => S.Struct({ Capacity: S.optional(S.Number) }).pipe(ns)).annotate({
        identifier: "CheckCapacityResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Scope: Scope, TokenDomains: APIKeyTokenDomains }).pipe(
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
      return S.Array(Tag);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: Scope,
          Description: S.optional(S.String),
          IPAddressVersion: IPAddressVersion,
          Addresses: IPAddresses,
          Tags: S.optional(TagList),
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
      return S.suspend(() => S.Struct({ Summary: S.optional(IPSetSummary) }).pipe(ns)).annotate({
        identifier: "CreateIPSetResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: Scope,
          Description: S.optional(S.String),
          RegularExpressionList: RegularExpressionList,
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateRegexPatternSetRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Summary: S.optional(RegexPatternSetSummary) }).pipe(ns),
      ).annotate({
        identifier: "CreateRegexPatternSetResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ContentType: ResponseContentType, Content: S.String }),
      ).annotate({ identifier: "CustomResponseBody" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ CustomResponseBody.pipe(S.optional));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Amount: S.String, Currency: CryptoCurrency })).annotate({
        identifier: "Price",
      });
    case 1:
      return S.Array(Price);
    case 2:
      return S.suspend(() =>
        S.Struct({ Chain: BlockchainChain, WalletAddress: S.String, Prices: Prices }),
      ).annotate({ identifier: "PaymentNetwork" });
    case 3:
      return S.Array(PaymentNetwork);
    case 4:
      return S.suspend(() => S.Struct({ PaymentNetworks: PaymentNetworks })).annotate({
        identifier: "CryptoConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CryptoConfig: S.optional(CryptoConfig),
          CurrencyMode: S.optional(CurrencyMode),
        }),
      ).annotate({ identifier: "MonetizationConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: Scope,
          Capacity: S.Number,
          Description: S.optional(S.String),
          Rules: S.optional(Rules),
          VisibilityConfig: VisibilityConfig,
          Tags: S.optional(TagList),
          CustomResponseBodies: S.optional(CustomResponseBodies),
          MonetizationConfig: S.optional(MonetizationConfig),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRuleGroupRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Block: S.optional(BlockAction), Allow: S.optional(AllowAction) }),
      ).annotate({ identifier: "DefaultAction" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ FieldType: FieldToProtectType, FieldKeys: S.optional(FieldToProtectKeys) }),
      ).annotate({ identifier: "FieldToProtect" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Field: FieldToProtect,
          Action: DataProtectionAction,
          ExcludeRuleMatchDetails: S.optional(S.Boolean),
          ExcludeRateBasedDetails: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DataProtection" });
    case 2:
      return S.Array(DataProtection);
    case 3:
      return S.suspend(() => S.Struct({ DataProtections: DataProtections })).annotate({
        identifier: "DataProtectionConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DefaultSizeInspectionLimit: SizeInspectionLimit }),
      ).annotate({
        identifier: "RequestBodyAssociatedResourceTypeConfig",
      });
    case 5:
      return S.Record(
        AssociatedResourceType,
        /*@__PURE__*/ RequestBodyAssociatedResourceTypeConfig.pipe(S.optional),
      );
    case 6:
      return S.suspend(() => S.Struct({ RequestBody: S.optional(RequestBody) })).annotate({
        identifier: "AssociationConfig",
      });
    case 7:
      return S.suspend(() => S.Struct({ ALBLowReputationMode: LowReputationMode })).annotate({
        identifier: "OnSourceDDoSProtectionConfig",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Values: S.optional(AttributeValues) }),
      ).annotate({ identifier: "ApplicationAttribute" });
    case 1:
      return S.Array(ApplicationAttribute);
    case 2:
      return S.suspend(() => S.Struct({ Attributes: S.optional(ApplicationAttributes) })).annotate({
        identifier: "ApplicationConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: Scope,
          DefaultAction: DefaultAction,
          Description: S.optional(S.String),
          Rules: S.optional(Rules),
          VisibilityConfig: VisibilityConfig,
          DataProtectionConfig: S.optional(DataProtectionConfig),
          Tags: S.optional(TagList),
          CustomResponseBodies: S.optional(CustomResponseBodies),
          CaptchaConfig: S.optional(CaptchaConfig),
          ChallengeConfig: S.optional(ChallengeConfig),
          TokenDomains: S.optional(TokenDomains),
          AssociationConfig: S.optional(AssociationConfig),
          OnSourceDDoSProtectionConfig: S.optional(OnSourceDDoSProtectionConfig),
          ApplicationConfig: S.optional(ApplicationConfig),
          MonetizationConfig: S.optional(MonetizationConfig),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateWebACLRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Scope: Scope, APIKey: S.String }).pipe(
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
        S.Struct({ Name: S.String, Scope: Scope, Id: S.String, LockToken: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteIPSetRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          LogType: S.optional(LogType),
          LogScope: S.optional(LogScope),
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
        S.Struct({ Name: S.String, Scope: Scope, Id: S.String, LockToken: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteRegexPatternSetRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Scope: Scope, Id: S.String, LockToken: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteRuleGroupRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Scope: Scope, Id: S.String, LockToken: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteWebACLRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Scope: Scope }).pipe(
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
      return S.Array(ManagedProductDescriptor);
    case 2:
      return S.suspend(() =>
        S.Struct({ ManagedProducts: S.optional(ManagedProductDescriptors) }).pipe(ns),
      ).annotate({
        identifier: "DescribeAllManagedProductsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ VendorName: S.String, Scope: Scope }).pipe(
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
          Scope: Scope,
          VersionName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeManagedRuleGroupRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Action: S.optional(RuleAction) }),
      ).annotate({ identifier: "RuleSummary" });
    case 6:
      return S.Array(RuleSummary);
    case 7:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "LabelSummary",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(LabelSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          VersionName: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          Capacity: S.optional(S.Number),
          Rules: S.optional(RuleSummaries),
          LabelNamespace: S.optional(S.String),
          AvailableLabels: S.optional(LabelSummaries),
          ConsumedLabels: S.optional(LabelSummaries),
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
        S.Struct({ Platform: Platform, ReleaseVersion: S.String }).pipe(
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
        S.Struct({ Scope: Scope, APIKey: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetDecryptedAPIKeyRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TokenDomains: S.optional(TokenDomains),
          CreationTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({
        identifier: "GetDecryptedAPIKeyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Scope: Scope, Id: S.String }).pipe(
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
          IPAddressVersion: IPAddressVersion,
          Addresses: IPAddresses,
        }),
      ).annotate({ identifier: "IPSet" });
    case 1:
      return S.suspend(() =>
        S.Struct({ IPSet: S.optional(IPSet), LockToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "GetIPSetResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          LogType: S.optional(LogType),
          LogScope: S.optional(LogScope),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetLoggingConfigurationRequest",
      });
    case 3:
      return S.Array(FieldToMatch);
    case 4:
      return S.suspend(() => S.Struct({ Action: ActionValue })).annotate({
        identifier: "ActionCondition",
      });
    case 5:
      return S.suspend(() => S.Struct({ LabelName: S.String })).annotate({
        identifier: "LabelNameCondition",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ActionCondition: S.optional(ActionCondition),
          LabelNameCondition: S.optional(LabelNameCondition),
        }),
      ).annotate({ identifier: "Condition" });
    case 7:
      return S.Array(Condition);
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Behavior: FilterBehavior,
          Requirement: FilterRequirement,
          Conditions: Conditions,
        }),
      ).annotate({ identifier: "Filter" });
    case 1:
      return S.Array(Filter);
    case 2:
      return S.suspend(() =>
        S.Struct({ Filters: Filters, DefaultBehavior: FilterBehavior }),
      ).annotate({ identifier: "LoggingFilter" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          LogDestinationConfigs: LogDestinationConfigs,
          RedactedFields: S.optional(RedactedFields),
          ManagedByFirewallManager: S.optional(S.Boolean),
          LoggingFilter: S.optional(LoggingFilter),
          LogType: S.optional(LogType),
          LogScope: S.optional(LogScope),
        }),
      ).annotate({ identifier: "LoggingConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({ LoggingConfiguration: S.optional(LoggingConfiguration) }).pipe(ns),
      ).annotate({
        identifier: "GetLoggingConfigurationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Scope: Scope, Id: S.String }).pipe(
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
      return S.Record(S.String, /*@__PURE__*/ ManagedRuleSetVersion.pipe(S.optional));
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
          PublishedVersions: S.optional(PublishedVersions),
          RecommendedVersion: S.optional(S.String),
          LabelNamespace: S.optional(S.String),
        }),
      ).annotate({ identifier: "ManagedRuleSet" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ManagedRuleSet: S.optional(ManagedRuleSet),
          LockToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetManagedRuleSetResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Platform: Platform, ReleaseVersion: S.String }).pipe(
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
          Tags: S.optional(TagList),
        }),
      ).annotate({ identifier: "MobileSdkRelease" });
    case 4:
      return S.suspend(() =>
        S.Struct({ MobileSdkRelease: S.optional(MobileSdkRelease) }).pipe(ns),
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
          Scope: Scope,
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
          IPAddressVersion: S.optional(IPAddressVersion),
          Addresses: S.optional(IPAddresses),
        }),
      ).annotate({
        identifier: "RateBasedStatementManagedKeysIPSet",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ManagedKeysIPV4: S.optional(RateBasedStatementManagedKeysIPSet),
          ManagedKeysIPV6: S.optional(RateBasedStatementManagedKeysIPSet),
        }).pipe(ns),
      ).annotate({
        identifier: "GetRateBasedStatementManagedKeysResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Scope: Scope, Id: S.String }).pipe(
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
          RegularExpressionList: S.optional(RegularExpressionList),
        }),
      ).annotate({ identifier: "RegexPatternSet" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RegexPatternSet: S.optional(RegexPatternSet),
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
      return S.suspend(() =>
        S.Struct({ Name: S.String, Values: MonetizationFilterValueList }),
      ).annotate({ identifier: "MonetizationFilter" });
    case 7:
      return S.Array(MonetizationFilter);
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StatisticType: RankingStatisticType,
          TimeWindow: TimeWindow,
          Scope: Scope,
          Currency: Currency,
          GroupBy: S.optional(GroupByType),
          Filters: S.optional(MonetizationFilterList),
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
          SortBy: S.optional(RankingSortBy),
          SortOrder: S.optional(SortOrder),
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
      return S.Array(SourceStatistics);
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
      return S.Array(RevenuePathStatistics);
    case 5:
      return S.suspend(() =>
        S.Struct({
          SourceStatistics: S.optional(SourceStatisticsList),
          RevenuePathStatistics: S.optional(RevenuePathStatisticsList),
          NextMarker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetRevenueStatisticsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TimeWindow: TimeWindow,
          Scope: Scope,
          Currency: Currency,
          Filters: S.optional(MonetizationFilterList),
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
          Currency: S.optional(Currency),
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
        S.Struct({ RevenueBreakdown: S.optional(RevenueBreakdown) }).pipe(ns),
      ).annotate({
        identifier: "GetRevenueStatisticsSummaryResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          StatisticType: TimeSeriesStatisticType,
          TimeWindow: TimeWindow,
          Scope: Scope,
          Interval: IntervalType,
          Currency: Currency,
          GroupBy: S.optional(GroupByType),
          Filters: S.optional(MonetizationFilterList),
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
      return S.Array(DataPointEntry);
    case 4:
      return S.suspend(() =>
        S.Struct({ DataPoints: S.optional(DataPointsList), NextMarker: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "GetRevenueStatisticsTimeSeriesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Scope: S.optional(Scope),
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
          Rules: S.optional(Rules),
          VisibilityConfig: VisibilityConfig,
          LabelNamespace: S.optional(S.String),
          CustomResponseBodies: S.optional(CustomResponseBodies),
          AvailableLabels: S.optional(LabelSummaries),
          ConsumedLabels: S.optional(LabelSummaries),
          MonetizationConfig: S.optional(MonetizationConfig),
        }),
      ).annotate({ identifier: "RuleGroup" });
    case 7:
      return S.suspend(() =>
        S.Struct({ RuleGroup: S.optional(RuleGroup), LockToken: S.optional(S.String) }).pipe(ns),
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
          Scope: Scope,
          TimeWindow: TimeWindow,
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
      return S.Array(HTTPHeader);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClientIP: S.optional(S.String),
          Country: S.optional(S.String),
          URI: S.optional(S.String),
          Method: S.optional(S.String),
          HTTPVersion: S.optional(S.String),
          Headers: S.optional(HTTPHeaders),
        }),
      ).annotate({ identifier: "HTTPRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResponseCode: S.optional(S.Number),
          SolveTimestamp: S.optional(S.Number),
          FailureReason: S.optional(FailureReason),
        }),
      ).annotate({ identifier: "CaptchaResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Request: HTTPRequest,
          Weight: S.Number,
          Timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Action: S.optional(S.String),
          RuleNameWithinRuleGroup: S.optional(S.String),
          RequestHeadersInserted: S.optional(HTTPHeaders),
          ResponseCodeSent: S.optional(S.Number),
          Labels: S.optional(Labels),
          CaptchaResponse: S.optional(CaptchaResponse),
          ChallengeResponse: S.optional(ChallengeResponse),
          OverriddenAction: S.optional(S.String),
        }),
      ).annotate({ identifier: "SampledHTTPRequest" });
    case 6:
      return S.Array(SampledHTTPRequest);
    case 7:
      return S.suspend(() =>
        S.Struct({
          SampledRequests: S.optional(SampledHTTPRequests),
          PopulationSize: S.optional(S.Number),
          TimeWindow: S.optional(TimeWindow),
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
          Scope: Scope,
          UriPathPrefix: S.optional(S.String),
          TimeWindow: TimeWindow,
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
      return S.Array(BotStatistics);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Source: S.optional(FilterSource),
          Path: S.String,
          RequestCount: S.Number,
          Percentage: S.Number,
          TopBots: S.optional(BotStatisticsList),
        }),
      ).annotate({ identifier: "PathStatistics" });
    case 5:
      return S.Array(PathStatistics);
    case 6:
      return S.suspend(() =>
        S.Struct({
          PathStatistics: PathStatisticsList,
          TotalRequestCount: S.Number,
          NextMarker: S.optional(S.String),
          TopCategories: S.optional(PathStatisticsList),
        }).pipe(ns),
      ).annotate({
        identifier: "GetTopPathStatisticsByTrafficResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Scope: S.optional(Scope),
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
          ManagedRuleGroupStatement: S.optional(ManagedRuleGroupStatement),
          RuleGroupReferenceStatement: S.optional(RuleGroupReferenceStatement),
        }),
      ).annotate({ identifier: "FirewallManagerStatement" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Priority: S.Number,
          FirewallManagerStatement: FirewallManagerStatement,
          OverrideAction: OverrideAction,
          VisibilityConfig: VisibilityConfig,
        }),
      ).annotate({ identifier: "FirewallManagerRuleGroup" });
    case 2:
      return S.Array(FirewallManagerRuleGroup);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Id: S.String,
          ARN: S.String,
          DefaultAction: DefaultAction,
          Description: S.optional(S.String),
          Rules: S.optional(Rules),
          VisibilityConfig: VisibilityConfig,
          DataProtectionConfig: S.optional(DataProtectionConfig),
          Capacity: S.optional(S.Number),
          PreProcessFirewallManagerRuleGroups: S.optional(FirewallManagerRuleGroups),
          PostProcessFirewallManagerRuleGroups: S.optional(FirewallManagerRuleGroups),
          ManagedByFirewallManager: S.optional(S.Boolean),
          LabelNamespace: S.optional(S.String),
          CustomResponseBodies: S.optional(CustomResponseBodies),
          CaptchaConfig: S.optional(CaptchaConfig),
          ChallengeConfig: S.optional(ChallengeConfig),
          TokenDomains: S.optional(TokenDomains),
          AssociationConfig: S.optional(AssociationConfig),
          RetrofittedByFirewallManager: S.optional(S.Boolean),
          OnSourceDDoSProtectionConfig: S.optional(OnSourceDDoSProtectionConfig),
          ApplicationConfig: S.optional(ApplicationConfig),
          MonetizationConfig: S.optional(MonetizationConfig),
        }),
      ).annotate({ identifier: "WebACL" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          WebACL: S.optional(WebACL),
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
      return S.suspend(() => S.Struct({ WebACL: S.optional(WebACL) }).pipe(ns)).annotate({
        identifier: "GetWebACLForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Scope: Scope,
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
          TokenDomains: S.optional(TokenDomains),
          APIKey: S.optional(S.String),
          CreationTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Version: S.optional(S.Number),
        }),
      ).annotate({ identifier: "APIKeySummary" });
    case 1:
      return S.Array(APIKeySummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextMarker: S.optional(S.String),
          APIKeySummaries: S.optional(APIKeySummaries),
          ApplicationIntegrationURL: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListAPIKeysResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Scope: Scope,
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
      return S.Array(ManagedRuleGroupSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextMarker: S.optional(S.String),
          ManagedRuleGroups: S.optional(ManagedRuleGroupSummaries),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAvailableManagedRuleGroupsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          VendorName: S.String,
          Name: S.String,
          Scope: Scope,
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
      return S.Array(ManagedRuleGroupVersion);
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextMarker: S.optional(S.String),
          Versions: S.optional(ManagedRuleGroupVersions),
          CurrentDefaultVersion: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAvailableManagedRuleGroupVersionsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Scope: Scope,
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListIPSetsRequest" });
    case 4:
      return S.Array(IPSetSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ NextMarker: S.optional(S.String), IPSets: S.optional(IPSetSummaries) }).pipe(ns),
      ).annotate({ identifier: "ListIPSetsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Scope: Scope,
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
          LogScope: S.optional(LogScope),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListLoggingConfigurationsRequest",
      });
    case 7:
      return S.Array(LoggingConfiguration);
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LoggingConfigurations: S.optional(LoggingConfigurations),
          NextMarker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListLoggingConfigurationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Scope: Scope,
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
      return S.Array(ManagedRuleSetSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextMarker: S.optional(S.String),
          ManagedRuleSets: S.optional(ManagedRuleSetSummaries),
        }).pipe(ns),
      ).annotate({
        identifier: "ListManagedRuleSetsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Platform: Platform,
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
      return S.Array(ReleaseSummary);
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ReleaseSummaries: S.optional(ReleaseSummaries),
          NextMarker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListMobileSdkReleasesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Scope: Scope,
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
          RegexPatternSets: S.optional(RegexPatternSetSummaries),
        }).pipe(ns),
      ).annotate({
        identifier: "ListRegexPatternSetsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ WebACLArn: S.String, ResourceType: S.optional(ResourceType) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListResourcesForWebACLRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArns: S.optional(ResourceArns) }).pipe(ns),
      ).annotate({
        identifier: "ListResourcesForWebACLResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Scope: Scope,
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRuleGroupsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextMarker: S.optional(S.String),
          RuleGroups: S.optional(RuleGroupSummaries),
        }).pipe(ns),
      ).annotate({ identifier: "ListRuleGroupsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TimeWindow: TimeWindow,
          Scope: Scope,
          Currency: Currency,
          Filters: S.optional(MonetizationFilterList),
          SortBy: S.optional(SettlementSortBy),
          SortOrder: S.optional(SortOrder),
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
          Status: SettlementStatus,
          Amount: S.String,
          Currency: S.optional(Currency),
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
      return S.Array(SettlementRecord);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Settlements: S.optional(SettlementRecordList),
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
        S.Struct({ ResourceARN: S.optional(S.String), TagList: S.optional(TagList) }),
      ).annotate({ identifier: "TagInfoForResource" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextMarker: S.optional(S.String),
          TagInfoForResource: S.optional(TagInfoForResource),
        }).pipe(ns),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Scope: Scope,
          NextMarker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListWebACLsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ NextMarker: S.optional(S.String), WebACLs: S.optional(WebACLSummaries) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "ListWebACLsResponse" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LoggingConfiguration: LoggingConfiguration }).pipe(
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
      return S.Record(S.String, /*@__PURE__*/ VersionToPublish.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: Scope,
          Id: S.String,
          LockToken: S.String,
          RecommendedVersion: S.optional(S.String),
          VersionsToPublish: S.optional(VersionsToPublish),
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
        S.Struct({ ResourceARN: S.String, Tags: TagList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: TagKeyList }).pipe(
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
          Scope: Scope,
          Id: S.String,
          Description: S.optional(S.String),
          Addresses: IPAddresses,
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
          Scope: Scope,
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
          Scope: Scope,
          Id: S.String,
          Description: S.optional(S.String),
          RegularExpressionList: RegularExpressionList,
          LockToken: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateRegexPatternSetRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: Scope,
          Id: S.String,
          Description: S.optional(S.String),
          Rules: S.optional(Rules),
          VisibilityConfig: VisibilityConfig,
          LockToken: S.String,
          CustomResponseBodies: S.optional(CustomResponseBodies),
          MonetizationConfig: S.optional(MonetizationConfig),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateRuleGroupRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Scope: Scope,
          Id: S.String,
          DefaultAction: DefaultAction,
          Description: S.optional(S.String),
          Rules: S.optional(Rules),
          VisibilityConfig: VisibilityConfig,
          DataProtectionConfig: S.optional(DataProtectionConfig),
          LockToken: S.String,
          CustomResponseBodies: S.optional(CustomResponseBodies),
          CaptchaConfig: S.optional(CaptchaConfig),
          ChallengeConfig: S.optional(ChallengeConfig),
          TokenDomains: S.optional(TokenDomains),
          AssociationConfig: S.optional(AssociationConfig),
          OnSourceDDoSProtectionConfig: S.optional(OnSourceDDoSProtectionConfig),
          ApplicationConfig: S.optional(ApplicationConfig),
          MonetizationConfig: S.optional(MonetizationConfig),
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
      return S.Array(DisallowedFeature);
  }
}
