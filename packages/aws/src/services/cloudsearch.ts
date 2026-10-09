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
const ns = /*@__PURE__*/ T.XmlNamespace("http://cloudsearch.amazonaws.com/doc/2013-01-01/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "CloudSearch",
  serviceShapeName: "A9SearchCloudConfigService2013",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "cloudsearch" });
const ver = /*@__PURE__*/ T.ServiceVersion("2013-01-01");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsQuery();
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
              `https://cloudsearch-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://cloudsearch-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://cloudsearch.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://cloudsearch.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class BaseException
  extends /*@__PURE__*/ S.TaggedError<BaseException>()("BaseException", {
    Code: /*@__PURE__*/ S.optional(S.String),
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class DisabledOperationException
  extends /*@__PURE__*/ S.TaggedError<DisabledOperationException>()(
    "DisabledOperationException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DisabledAction", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class InternalException
  extends /*@__PURE__*/ S.TaggedError<InternalException>()(
    "InternalException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InternalException", httpResponseCode: 500 }),
      /*@__PURE__*/ T.HttpError(500),
    ),
  ).pipe(C.withServerError) {}
export class InvalidTypeException
  extends /*@__PURE__*/ S.TaggedError<InvalidTypeException>()(
    "InvalidTypeException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidType", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "LimitExceeded", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class ResourceAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ResourceAlreadyExistsException>()(
    "ResourceAlreadyExistsException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceAlreadyExists", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError, C.withAlreadyExistsError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceNotFound", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type DomainName = string;
export interface BuildSuggestersRequest {
  DomainName: string;
}
export type FieldName = string;
export type FieldNameList = string[];
export interface BuildSuggestersResponse {
  FieldNames?: string[];
}
export interface CreateDomainRequest {
  DomainName: string;
}
export type DomainId = string;
export type ARN = string;
export type ServiceUrl = string;
export interface ServiceEndpoint {
  Endpoint?: string;
}
export type SearchInstanceType = string;
export type PartitionCount = number;
export type InstanceCount = number;
export type MaximumReplicationCount = number;
export type MaximumPartitionCount = number;
export interface Limits {
  MaximumReplicationCount: number;
  MaximumPartitionCount: number;
}
export interface DomainStatus {
  DomainId: string;
  DomainName: string;
  ARN?: string;
  Created?: boolean;
  Deleted?: boolean;
  DocService?: ServiceEndpoint;
  SearchService?: ServiceEndpoint;
  RequiresIndexDocuments: boolean;
  Processing?: boolean;
  SearchInstanceType?: string;
  SearchPartitionCount?: number;
  SearchInstanceCount?: number;
  Limits?: Limits;
}
export interface CreateDomainResponse {
  DomainStatus?: DomainStatus;
}
export type StandardName = string;
export type AnalysisSchemeLanguage =
  | "ar"
  | "bg"
  | "ca"
  | "cs"
  | "da"
  | "de"
  | "el"
  | "en"
  | "es"
  | "eu"
  | "fa"
  | "fi"
  | "fr"
  | "ga"
  | "gl"
  | "he"
  | "hi"
  | "hu"
  | "hy"
  | "id"
  | "it"
  | "ja"
  | "ko"
  | "lv"
  | "mul"
  | "nl"
  | "no"
  | "pt"
  | "ro"
  | "ru"
  | "sv"
  | "th"
  | "tr"
  | "zh-Hans"
  | "zh-Hant"
  | (string & {});
export type AlgorithmicStemming = "none" | "minimal" | "light" | "full" | (string & {});
export interface AnalysisOptions {
  Synonyms?: string;
  Stopwords?: string;
  StemmingDictionary?: string;
  JapaneseTokenizationDictionary?: string;
  AlgorithmicStemming?: AlgorithmicStemming;
}
export interface AnalysisScheme {
  AnalysisSchemeName: string;
  AnalysisSchemeLanguage: AnalysisSchemeLanguage;
  AnalysisOptions?: AnalysisOptions;
}
export interface DefineAnalysisSchemeRequest {
  DomainName: string;
  AnalysisScheme: AnalysisScheme;
}
export type UpdateTimestamp = Date;
export type UIntValue = number;
export type OptionState =
  | "RequiresIndexDocuments"
  | "Processing"
  | "Active"
  | "FailedToValidate"
  | (string & {});
export interface OptionStatus {
  CreationDate: Date;
  UpdateDate: Date;
  UpdateVersion?: number;
  State: OptionState;
  PendingDeletion?: boolean;
}
export interface AnalysisSchemeStatus {
  Options: AnalysisScheme;
  Status: OptionStatus;
}
export interface DefineAnalysisSchemeResponse {
  AnalysisScheme: AnalysisSchemeStatus;
}
export type ExpressionValue = string;
export interface Expression {
  ExpressionName: string;
  ExpressionValue: string;
}
export interface DefineExpressionRequest {
  DomainName: string;
  Expression: Expression;
}
export interface ExpressionStatus {
  Options: Expression;
  Status: OptionStatus;
}
export interface DefineExpressionResponse {
  Expression: ExpressionStatus;
}
export type DynamicFieldName = string;
export type IndexFieldType =
  | "int"
  | "double"
  | "literal"
  | "text"
  | "date"
  | "latlon"
  | "int-array"
  | "double-array"
  | "literal-array"
  | "text-array"
  | "date-array"
  | (string & {});
export interface IntOptions {
  DefaultValue?: number;
  SourceField?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
  SortEnabled?: boolean;
}
export interface DoubleOptions {
  DefaultValue?: number;
  SourceField?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
  SortEnabled?: boolean;
}
export type FieldValue = string;
export interface LiteralOptions {
  DefaultValue?: string;
  SourceField?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
  SortEnabled?: boolean;
}
export type Word = string;
export interface TextOptions {
  DefaultValue?: string;
  SourceField?: string;
  ReturnEnabled?: boolean;
  SortEnabled?: boolean;
  HighlightEnabled?: boolean;
  AnalysisScheme?: string;
}
export interface DateOptions {
  DefaultValue?: string;
  SourceField?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
  SortEnabled?: boolean;
}
export interface LatLonOptions {
  DefaultValue?: string;
  SourceField?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
  SortEnabled?: boolean;
}
export type FieldNameCommaList = string;
export interface IntArrayOptions {
  DefaultValue?: number;
  SourceFields?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
}
export interface DoubleArrayOptions {
  DefaultValue?: number;
  SourceFields?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
}
export interface LiteralArrayOptions {
  DefaultValue?: string;
  SourceFields?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
}
export interface TextArrayOptions {
  DefaultValue?: string;
  SourceFields?: string;
  ReturnEnabled?: boolean;
  HighlightEnabled?: boolean;
  AnalysisScheme?: string;
}
export interface DateArrayOptions {
  DefaultValue?: string;
  SourceFields?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
}
export interface IndexField {
  IndexFieldName: string;
  IndexFieldType: IndexFieldType;
  IntOptions?: IntOptions;
  DoubleOptions?: DoubleOptions;
  LiteralOptions?: LiteralOptions;
  TextOptions?: TextOptions;
  DateOptions?: DateOptions;
  LatLonOptions?: LatLonOptions;
  IntArrayOptions?: IntArrayOptions;
  DoubleArrayOptions?: DoubleArrayOptions;
  LiteralArrayOptions?: LiteralArrayOptions;
  TextArrayOptions?: TextArrayOptions;
  DateArrayOptions?: DateArrayOptions;
}
export interface DefineIndexFieldRequest {
  DomainName: string;
  IndexField: IndexField;
}
export interface IndexFieldStatus {
  Options: IndexField;
  Status: OptionStatus;
}
export interface DefineIndexFieldResponse {
  IndexField: IndexFieldStatus;
}
export type SuggesterFuzzyMatching = "none" | "low" | "high" | (string & {});
export interface DocumentSuggesterOptions {
  SourceField: string;
  FuzzyMatching?: SuggesterFuzzyMatching;
  SortExpression?: string;
}
export interface Suggester {
  SuggesterName: string;
  DocumentSuggesterOptions: DocumentSuggesterOptions;
}
export interface DefineSuggesterRequest {
  DomainName: string;
  Suggester: Suggester;
}
export interface SuggesterStatus {
  Options: Suggester;
  Status: OptionStatus;
}
export interface DefineSuggesterResponse {
  Suggester: SuggesterStatus;
}
export interface DeleteAnalysisSchemeRequest {
  DomainName: string;
  AnalysisSchemeName: string;
}
export interface DeleteAnalysisSchemeResponse {
  AnalysisScheme: AnalysisSchemeStatus;
}
export interface DeleteDomainRequest {
  DomainName: string;
}
export interface DeleteDomainResponse {
  DomainStatus?: DomainStatus;
}
export interface DeleteExpressionRequest {
  DomainName: string;
  ExpressionName: string;
}
export interface DeleteExpressionResponse {
  Expression: ExpressionStatus;
}
export interface DeleteIndexFieldRequest {
  DomainName: string;
  IndexFieldName: string;
}
export interface DeleteIndexFieldResponse {
  IndexField: IndexFieldStatus;
}
export interface DeleteSuggesterRequest {
  DomainName: string;
  SuggesterName: string;
}
export interface DeleteSuggesterResponse {
  Suggester: SuggesterStatus;
}
export type StandardNameList = string[];
export interface DescribeAnalysisSchemesRequest {
  DomainName: string;
  AnalysisSchemeNames?: string[];
  Deployed?: boolean;
}
export type AnalysisSchemeStatusList = AnalysisSchemeStatus[];
export interface DescribeAnalysisSchemesResponse {
  AnalysisSchemes: AnalysisSchemeStatus[];
}
export interface DescribeAvailabilityOptionsRequest {
  DomainName: string;
  Deployed?: boolean;
}
export type MultiAZ = boolean;
export interface AvailabilityOptionsStatus {
  Options: boolean;
  Status: OptionStatus;
}
export interface DescribeAvailabilityOptionsResponse {
  AvailabilityOptions?: AvailabilityOptionsStatus;
}
export interface DescribeDomainEndpointOptionsRequest {
  DomainName: string;
  Deployed?: boolean;
}
export type TLSSecurityPolicy =
  | "Policy-Min-TLS-1-0-2019-07"
  | "Policy-Min-TLS-1-2-2019-07"
  | (string & {});
export interface DomainEndpointOptions {
  EnforceHTTPS?: boolean;
  TLSSecurityPolicy?: TLSSecurityPolicy;
}
export interface DomainEndpointOptionsStatus {
  Options: DomainEndpointOptions;
  Status: OptionStatus;
}
export interface DescribeDomainEndpointOptionsResponse {
  DomainEndpointOptions?: DomainEndpointOptionsStatus;
}
export type DomainNameList = string[];
export interface DescribeDomainsRequest {
  DomainNames?: string[];
}
export type DomainStatusList = DomainStatus[];
export interface DescribeDomainsResponse {
  DomainStatusList: DomainStatus[];
}
export interface DescribeExpressionsRequest {
  DomainName: string;
  ExpressionNames?: string[];
  Deployed?: boolean;
}
export type ExpressionStatusList = ExpressionStatus[];
export interface DescribeExpressionsResponse {
  Expressions: ExpressionStatus[];
}
export type DynamicFieldNameList = string[];
export interface DescribeIndexFieldsRequest {
  DomainName: string;
  FieldNames?: string[];
  Deployed?: boolean;
}
export type IndexFieldStatusList = IndexFieldStatus[];
export interface DescribeIndexFieldsResponse {
  IndexFields: IndexFieldStatus[];
}
export interface DescribeScalingParametersRequest {
  DomainName: string;
}
export type PartitionInstanceType =
  | "search.m1.small"
  | "search.m1.large"
  | "search.m2.xlarge"
  | "search.m2.2xlarge"
  | "search.m3.medium"
  | "search.m3.large"
  | "search.m3.xlarge"
  | "search.m3.2xlarge"
  | "search.small"
  | "search.medium"
  | "search.large"
  | "search.xlarge"
  | "search.2xlarge"
  | "search.previousgeneration.small"
  | "search.previousgeneration.large"
  | "search.previousgeneration.xlarge"
  | "search.previousgeneration.2xlarge"
  | (string & {});
export interface ScalingParameters {
  DesiredInstanceType?: PartitionInstanceType;
  DesiredReplicationCount?: number;
  DesiredPartitionCount?: number;
}
export interface ScalingParametersStatus {
  Options: ScalingParameters;
  Status: OptionStatus;
}
export interface DescribeScalingParametersResponse {
  ScalingParameters: ScalingParametersStatus;
}
export interface DescribeServiceAccessPoliciesRequest {
  DomainName: string;
  Deployed?: boolean;
}
export type PolicyDocument = string;
export interface AccessPoliciesStatus {
  Options: string;
  Status: OptionStatus;
}
export interface DescribeServiceAccessPoliciesResponse {
  AccessPolicies: AccessPoliciesStatus;
}
export interface DescribeSuggestersRequest {
  DomainName: string;
  SuggesterNames?: string[];
  Deployed?: boolean;
}
export type SuggesterStatusList = SuggesterStatus[];
export interface DescribeSuggestersResponse {
  Suggesters: SuggesterStatus[];
}
export interface IndexDocumentsRequest {
  DomainName: string;
}
export interface IndexDocumentsResponse {
  FieldNames?: string[];
}
export interface ListDomainNamesRequest {}
export type APIVersion = string;
export type DomainNameMap = { [key: string]: string | undefined };
export interface ListDomainNamesResponse {
  DomainNames?: { [key: string]: string | undefined };
}
export interface UpdateAvailabilityOptionsRequest {
  DomainName: string;
  MultiAZ: boolean;
}
export interface UpdateAvailabilityOptionsResponse {
  AvailabilityOptions?: AvailabilityOptionsStatus;
}
export interface UpdateDomainEndpointOptionsRequest {
  DomainName: string;
  DomainEndpointOptions: DomainEndpointOptions;
}
export interface UpdateDomainEndpointOptionsResponse {
  DomainEndpointOptions?: DomainEndpointOptionsStatus;
}
export interface UpdateScalingParametersRequest {
  DomainName: string;
  ScalingParameters: ScalingParameters;
}
export interface UpdateScalingParametersResponse {
  ScalingParameters: ScalingParametersStatus;
}
export interface UpdateServiceAccessPoliciesRequest {
  DomainName: string;
  AccessPolicies: string;
}
export interface UpdateServiceAccessPoliciesResponse {
  AccessPolicies: AccessPoliciesStatus;
}
export type ErrorCode = string;
export type ErrorMessage = string;
export type BuildSuggestersError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Indexes the search suggestions. For more information, see Configuring Suggesters in the *Amazon CloudSearch Developer Guide*.
 */
export const buildSuggesters: API.OperationMethod<
  BuildSuggestersRequest,
  BuildSuggestersResponse,
  BuildSuggestersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<BuildSuggestersRequest>,
  output: __S(2) as any as S.Schema<BuildSuggestersResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BuildSuggesters",
}));

export type CreateDomainError =
  | BaseException
  | InternalException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new search domain. For more information,
 * see Creating a Search Domain in the *Amazon CloudSearch Developer Guide*.
 */
export const createDomain: API.OperationMethod<
  CreateDomainRequest,
  CreateDomainResponse,
  CreateDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3) as any as S.Schema<CreateDomainRequest>,
  output: __S(7) as any as S.Schema<CreateDomainResponse>,
  errors: [
    BaseException,
    InternalException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDomain",
}));

export type DefineAnalysisSchemeError =
  | BaseException
  | InternalException
  | InvalidTypeException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Configures an analysis scheme that can be applied to a `text` or `text-array` field to define language-specific text processing options. For more information, see Configuring Analysis Schemes in the *Amazon CloudSearch Developer Guide*.
 */
export const defineAnalysisScheme: API.OperationMethod<
  DefineAnalysisSchemeRequest,
  DefineAnalysisSchemeResponse,
  DefineAnalysisSchemeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10) as any as S.Schema<DefineAnalysisSchemeRequest>,
  output: __S(13) as any as S.Schema<DefineAnalysisSchemeResponse>,
  errors: [
    BaseException,
    InternalException,
    InvalidTypeException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DefineAnalysisScheme",
}));

export type DefineExpressionError =
  | BaseException
  | InternalException
  | InvalidTypeException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Configures an `Expression` for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see Configuring Expressions in the *Amazon CloudSearch Developer Guide*.
 */
export const defineExpression: API.OperationMethod<
  DefineExpressionRequest,
  DefineExpressionResponse,
  DefineExpressionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15) as any as S.Schema<DefineExpressionRequest>,
  output: __S(17) as any as S.Schema<DefineExpressionResponse>,
  errors: [
    BaseException,
    InternalException,
    InvalidTypeException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DefineExpression",
}));

export type DefineIndexFieldError =
  | BaseException
  | InternalException
  | InvalidTypeException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Configures an `IndexField` for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the `IndexFieldType`. If the field exists, the new configuration replaces the old one. For more information, see Configuring Index Fields in the *Amazon CloudSearch Developer Guide*.
 */
export const defineIndexField: API.OperationMethod<
  DefineIndexFieldRequest,
  DefineIndexFieldResponse,
  DefineIndexFieldError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30) as any as S.Schema<DefineIndexFieldRequest>,
  output: __S(32) as any as S.Schema<DefineIndexFieldResponse>,
  errors: [
    BaseException,
    InternalException,
    InvalidTypeException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DefineIndexField",
}));

export type DefineSuggesterError =
  | BaseException
  | InternalException
  | InvalidTypeException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see Getting Search Suggestions in the *Amazon CloudSearch Developer Guide*.
 */
export const defineSuggester: API.OperationMethod<
  DefineSuggesterRequest,
  DefineSuggesterResponse,
  DefineSuggesterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35) as any as S.Schema<DefineSuggesterRequest>,
  output: __S(37) as any as S.Schema<DefineSuggesterResponse>,
  errors: [
    BaseException,
    InternalException,
    InvalidTypeException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DefineSuggester",
}));

export type DeleteAnalysisSchemeError =
  | BaseException
  | InternalException
  | InvalidTypeException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an analysis scheme. For more information, see Configuring Analysis Schemes in the *Amazon CloudSearch Developer Guide*.
 */
export const deleteAnalysisScheme: API.OperationMethod<
  DeleteAnalysisSchemeRequest,
  DeleteAnalysisSchemeResponse,
  DeleteAnalysisSchemeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38) as any as S.Schema<DeleteAnalysisSchemeRequest>,
  output: __S(39) as any as S.Schema<DeleteAnalysisSchemeResponse>,
  errors: [
    BaseException,
    InternalException,
    InvalidTypeException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAnalysisScheme",
}));

export type DeleteDomainError = BaseException | InternalException | CommonErrors;
/**
 * Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information,
 * see Deleting a Search Domain in the *Amazon CloudSearch Developer Guide*.
 */
export const deleteDomain: API.OperationMethod<
  DeleteDomainRequest,
  DeleteDomainResponse,
  DeleteDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40) as any as S.Schema<DeleteDomainRequest>,
  output: __S(41) as any as S.Schema<DeleteDomainResponse>,
  errors: [BaseException, InternalException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDomain",
}));

export type DeleteExpressionError =
  | BaseException
  | InternalException
  | InvalidTypeException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes an `Expression` from the search domain. For more information, see Configuring Expressions in the *Amazon CloudSearch Developer Guide*.
 */
export const deleteExpression: API.OperationMethod<
  DeleteExpressionRequest,
  DeleteExpressionResponse,
  DeleteExpressionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42) as any as S.Schema<DeleteExpressionRequest>,
  output: __S(43) as any as S.Schema<DeleteExpressionResponse>,
  errors: [
    BaseException,
    InternalException,
    InvalidTypeException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteExpression",
}));

export type DeleteIndexFieldError =
  | BaseException
  | InternalException
  | InvalidTypeException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes an `IndexField` from the search domain. For more information, see Configuring Index Fields in the *Amazon CloudSearch Developer Guide*.
 */
export const deleteIndexField: API.OperationMethod<
  DeleteIndexFieldRequest,
  DeleteIndexFieldResponse,
  DeleteIndexFieldError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44) as any as S.Schema<DeleteIndexFieldRequest>,
  output: __S(45) as any as S.Schema<DeleteIndexFieldResponse>,
  errors: [
    BaseException,
    InternalException,
    InvalidTypeException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIndexField",
}));

export type DeleteSuggesterError =
  | BaseException
  | InternalException
  | InvalidTypeException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a suggester. For more information, see Getting Search Suggestions in the *Amazon CloudSearch Developer Guide*.
 */
export const deleteSuggester: API.OperationMethod<
  DeleteSuggesterRequest,
  DeleteSuggesterResponse,
  DeleteSuggesterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(46) as any as S.Schema<DeleteSuggesterRequest>,
  output: __S(47) as any as S.Schema<DeleteSuggesterResponse>,
  errors: [
    BaseException,
    InternalException,
    InvalidTypeException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSuggester",
}));

export type DescribeAnalysisSchemesError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a `text` field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information, see Configuring Analysis Schemes in the *Amazon CloudSearch Developer Guide*.
 */
export const describeAnalysisSchemes: API.OperationMethod<
  DescribeAnalysisSchemesRequest,
  DescribeAnalysisSchemesResponse,
  DescribeAnalysisSchemesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49) as any as S.Schema<DescribeAnalysisSchemesRequest>,
  output: __S(51) as any as S.Schema<DescribeAnalysisSchemesResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAnalysisSchemes",
}));

export type DescribeAvailabilityOptionsError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | InvalidTypeException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information, see Configuring Availability Options in the *Amazon CloudSearch Developer Guide*.
 */
export const describeAvailabilityOptions: API.OperationMethod<
  DescribeAvailabilityOptionsRequest,
  DescribeAvailabilityOptionsResponse,
  DescribeAvailabilityOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52) as any as S.Schema<DescribeAvailabilityOptionsRequest>,
  output: __S(54) as any as S.Schema<DescribeAvailabilityOptionsResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    InvalidTypeException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAvailabilityOptions",
}));

export type DescribeDomainEndpointOptionsError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see Configuring Domain Endpoint Options in the *Amazon CloudSearch Developer Guide*.
 */
export const describeDomainEndpointOptions: API.OperationMethod<
  DescribeDomainEndpointOptionsRequest,
  DescribeDomainEndpointOptionsResponse,
  DescribeDomainEndpointOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55) as any as S.Schema<DescribeDomainEndpointOptionsRequest>,
  output: __S(58) as any as S.Schema<DescribeDomainEndpointOptionsResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDomainEndpointOptions",
}));

export type DescribeDomainsError = BaseException | InternalException | CommonErrors;
/**
 * Gets information about the search domains owned by this account. Can be limited to specific domains. Shows
 * all domains by default. To get the number of searchable documents in a domain, use the console or submit a `matchall` request to your domain's search endpoint: `q=matchall&q.parser=structured&size=0`. For more information,
 * see Getting Information about a Search Domain in the *Amazon CloudSearch Developer Guide*.
 */
export const describeDomains: API.OperationMethod<
  DescribeDomainsRequest,
  DescribeDomainsResponse,
  DescribeDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60) as any as S.Schema<DescribeDomainsRequest>,
  output: __S(62) as any as S.Schema<DescribeDomainsResponse>,
  errors: [BaseException, InternalException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDomains",
}));

export type DescribeExpressionsError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information, see Configuring Expressions in the *Amazon CloudSearch Developer Guide*.
 */
export const describeExpressions: API.OperationMethod<
  DescribeExpressionsRequest,
  DescribeExpressionsResponse,
  DescribeExpressionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63) as any as S.Schema<DescribeExpressionsRequest>,
  output: __S(65) as any as S.Schema<DescribeExpressionsResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeExpressions",
}));

export type DescribeIndexFieldsError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Gets information about the index fields configured for the search domain.
 * Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information,
 * see Getting Domain Information in the *Amazon CloudSearch Developer Guide*.
 */
export const describeIndexFields: API.OperationMethod<
  DescribeIndexFieldsRequest,
  DescribeIndexFieldsResponse,
  DescribeIndexFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67) as any as S.Schema<DescribeIndexFieldsRequest>,
  output: __S(69) as any as S.Schema<DescribeIndexFieldsResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeIndexFields",
}));

export type DescribeScalingParametersError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see Configuring Scaling Options in the *Amazon CloudSearch Developer Guide*.
 */
export const describeScalingParameters: API.OperationMethod<
  DescribeScalingParametersRequest,
  DescribeScalingParametersResponse,
  DescribeScalingParametersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70) as any as S.Schema<DescribeScalingParametersRequest>,
  output: __S(73) as any as S.Schema<DescribeScalingParametersResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeScalingParameters",
}));

export type DescribeServiceAccessPoliciesError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information,
 * see Configuring Access for a Search Domain in the *Amazon CloudSearch Developer Guide*.
 */
export const describeServiceAccessPolicies: API.OperationMethod<
  DescribeServiceAccessPoliciesRequest,
  DescribeServiceAccessPoliciesResponse,
  DescribeServiceAccessPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74) as any as S.Schema<DescribeServiceAccessPoliciesRequest>,
  output: __S(76) as any as S.Schema<DescribeServiceAccessPoliciesResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeServiceAccessPolicies",
}));

export type DescribeSuggestersError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information, see Getting Search Suggestions in the *Amazon CloudSearch Developer Guide*.
 */
export const describeSuggesters: API.OperationMethod<
  DescribeSuggestersRequest,
  DescribeSuggestersResponse,
  DescribeSuggestersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77) as any as S.Schema<DescribeSuggestersRequest>,
  output: __S(79) as any as S.Schema<DescribeSuggestersResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSuggesters",
}));

export type IndexDocumentsError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose OptionStatus is `RequiresIndexDocuments`.
 */
export const indexDocuments: API.OperationMethod<
  IndexDocumentsRequest,
  IndexDocumentsResponse,
  IndexDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80) as any as S.Schema<IndexDocumentsRequest>,
  output: __S(81) as any as S.Schema<IndexDocumentsResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "IndexDocuments",
}));

export type ListDomainNamesError = BaseException | CommonErrors;
/**
 * Lists all search domains owned by an account.
 */
export const listDomainNames: API.OperationMethod<
  ListDomainNamesRequest,
  ListDomainNamesResponse,
  ListDomainNamesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(82) as any as S.Schema<ListDomainNamesRequest>,
  output: __S(84) as any as S.Schema<ListDomainNamesResponse>,
  errors: [BaseException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomainNames",
}));

export type UpdateAvailabilityOptionsError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | InvalidTypeException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see Configuring Availability Options in the *Amazon CloudSearch Developer Guide*.
 */
export const updateAvailabilityOptions: API.OperationMethod<
  UpdateAvailabilityOptionsRequest,
  UpdateAvailabilityOptionsResponse,
  UpdateAvailabilityOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(85) as any as S.Schema<UpdateAvailabilityOptionsRequest>,
  output: __S(86) as any as S.Schema<UpdateAvailabilityOptionsResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    InvalidTypeException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAvailabilityOptions",
}));

export type UpdateDomainEndpointOptionsError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | InvalidTypeException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see Configuring Domain Endpoint Options in the *Amazon CloudSearch Developer Guide*.
 */
export const updateDomainEndpointOptions: API.OperationMethod<
  UpdateDomainEndpointOptionsRequest,
  UpdateDomainEndpointOptionsResponse,
  UpdateDomainEndpointOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(87) as any as S.Schema<UpdateDomainEndpointOptionsRequest>,
  output: __S(88) as any as S.Schema<UpdateDomainEndpointOptionsResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    InvalidTypeException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDomainEndpointOptions",
}));

export type UpdateScalingParametersError =
  | BaseException
  | InternalException
  | InvalidTypeException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see Configuring Scaling Options in the *Amazon CloudSearch Developer Guide*.
 */
export const updateScalingParameters: API.OperationMethod<
  UpdateScalingParametersRequest,
  UpdateScalingParametersResponse,
  UpdateScalingParametersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89) as any as S.Schema<UpdateScalingParametersRequest>,
  output: __S(90) as any as S.Schema<UpdateScalingParametersResponse>,
  errors: [
    BaseException,
    InternalException,
    InvalidTypeException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateScalingParameters",
}));

export type UpdateServiceAccessPoliciesError =
  | BaseException
  | InternalException
  | InvalidTypeException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Configures the access rules that control access to the domain's document and search endpoints.
 * For more information, see
 * Configuring Access for an Amazon CloudSearch Domain.
 */
export const updateServiceAccessPolicies: API.OperationMethod<
  UpdateServiceAccessPoliciesRequest,
  UpdateServiceAccessPoliciesResponse,
  UpdateServiceAccessPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(91) as any as S.Schema<UpdateServiceAccessPoliciesRequest>,
  output: __S(92) as any as S.Schema<UpdateServiceAccessPoliciesResponse>,
  errors: [
    BaseException,
    InternalException,
    InvalidTypeException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateServiceAccessPolicies",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "BuildSuggestersRequest" });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() => S.Struct({ FieldNames: S.optional(__S(1)) }).pipe(ns)).annotate({
        identifier: "BuildSuggestersResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateDomainRequest" });
    case 4:
      return S.suspend(() => S.Struct({ Endpoint: S.optional(S.String) })).annotate({
        identifier: "ServiceEndpoint",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ MaximumReplicationCount: S.Number, MaximumPartitionCount: S.Number }),
      ).annotate({ identifier: "Limits" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainId: S.String,
          DomainName: S.String,
          ARN: S.optional(S.String),
          Created: S.optional(S.Boolean),
          Deleted: S.optional(S.Boolean),
          DocService: S.optional(__S(4)),
          SearchService: S.optional(__S(4)),
          RequiresIndexDocuments: S.Boolean,
          Processing: S.optional(S.Boolean),
          SearchInstanceType: S.optional(S.String),
          SearchPartitionCount: S.optional(S.Number),
          SearchInstanceCount: S.optional(S.Number),
          Limits: S.optional(__S(5)),
        }),
      ).annotate({ identifier: "DomainStatus" });
    case 7:
      return S.suspend(() => S.Struct({ DomainStatus: S.optional(__S(6)) }).pipe(ns)).annotate({
        identifier: "CreateDomainResponse",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Synonyms: S.optional(S.String),
          Stopwords: S.optional(S.String),
          StemmingDictionary: S.optional(S.String),
          JapaneseTokenizationDictionary: S.optional(S.String),
          AlgorithmicStemming: S.optional(S.String),
        }),
      ).annotate({ identifier: "AnalysisOptions" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AnalysisSchemeName: S.String,
          AnalysisSchemeLanguage: S.String,
          AnalysisOptions: S.optional(__S(8)),
        }),
      ).annotate({ identifier: "AnalysisScheme" });
    case 2:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String, AnalysisScheme: __S(9) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DefineAnalysisSchemeRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CreationDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          UpdateDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          UpdateVersion: S.optional(S.Number),
          State: S.String,
          PendingDeletion: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "OptionStatus" });
    case 4:
      return S.suspend(() => S.Struct({ Options: __S(9), Status: __S(11) })).annotate({
        identifier: "AnalysisSchemeStatus",
      });
    case 5:
      return S.suspend(() => S.Struct({ AnalysisScheme: __S(12) }).pipe(ns)).annotate({
        identifier: "DefineAnalysisSchemeResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ExpressionName: S.String, ExpressionValue: S.String }),
      ).annotate({ identifier: "Expression" });
    case 7:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String, Expression: __S(14) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DefineExpressionRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Options: __S(14), Status: __S(11) })).annotate({
        identifier: "ExpressionStatus",
      });
    case 1:
      return S.suspend(() => S.Struct({ Expression: __S(16) }).pipe(ns)).annotate({
        identifier: "DefineExpressionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(S.Number),
          SourceField: S.optional(S.String),
          FacetEnabled: S.optional(S.Boolean),
          SearchEnabled: S.optional(S.Boolean),
          ReturnEnabled: S.optional(S.Boolean),
          SortEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "IntOptions" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(S.Number),
          SourceField: S.optional(S.String),
          FacetEnabled: S.optional(S.Boolean),
          SearchEnabled: S.optional(S.Boolean),
          ReturnEnabled: S.optional(S.Boolean),
          SortEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DoubleOptions" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(S.String),
          SourceField: S.optional(S.String),
          FacetEnabled: S.optional(S.Boolean),
          SearchEnabled: S.optional(S.Boolean),
          ReturnEnabled: S.optional(S.Boolean),
          SortEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "LiteralOptions" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(S.String),
          SourceField: S.optional(S.String),
          ReturnEnabled: S.optional(S.Boolean),
          SortEnabled: S.optional(S.Boolean),
          HighlightEnabled: S.optional(S.Boolean),
          AnalysisScheme: S.optional(S.String),
        }),
      ).annotate({ identifier: "TextOptions" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(S.String),
          SourceField: S.optional(S.String),
          FacetEnabled: S.optional(S.Boolean),
          SearchEnabled: S.optional(S.Boolean),
          ReturnEnabled: S.optional(S.Boolean),
          SortEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DateOptions" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(S.String),
          SourceField: S.optional(S.String),
          FacetEnabled: S.optional(S.Boolean),
          SearchEnabled: S.optional(S.Boolean),
          ReturnEnabled: S.optional(S.Boolean),
          SortEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "LatLonOptions" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(S.Number),
          SourceFields: S.optional(S.String),
          FacetEnabled: S.optional(S.Boolean),
          SearchEnabled: S.optional(S.Boolean),
          ReturnEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "IntArrayOptions" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(S.Number),
          SourceFields: S.optional(S.String),
          FacetEnabled: S.optional(S.Boolean),
          SearchEnabled: S.optional(S.Boolean),
          ReturnEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DoubleArrayOptions" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(S.String),
          SourceFields: S.optional(S.String),
          FacetEnabled: S.optional(S.Boolean),
          SearchEnabled: S.optional(S.Boolean),
          ReturnEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "LiteralArrayOptions" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(S.String),
          SourceFields: S.optional(S.String),
          ReturnEnabled: S.optional(S.Boolean),
          HighlightEnabled: S.optional(S.Boolean),
          AnalysisScheme: S.optional(S.String),
        }),
      ).annotate({ identifier: "TextArrayOptions" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(S.String),
          SourceFields: S.optional(S.String),
          FacetEnabled: S.optional(S.Boolean),
          SearchEnabled: S.optional(S.Boolean),
          ReturnEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DateArrayOptions" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          IndexFieldName: S.String,
          IndexFieldType: S.String,
          IntOptions: S.optional(__S(18)),
          DoubleOptions: S.optional(__S(19)),
          LiteralOptions: S.optional(__S(20)),
          TextOptions: S.optional(__S(21)),
          DateOptions: S.optional(__S(22)),
          LatLonOptions: S.optional(__S(23)),
          IntArrayOptions: S.optional(__S(24)),
          DoubleArrayOptions: S.optional(__S(25)),
          LiteralArrayOptions: S.optional(__S(26)),
          TextArrayOptions: S.optional(__S(27)),
          DateArrayOptions: S.optional(__S(28)),
        }),
      ).annotate({ identifier: "IndexField" });
    case 6:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String, IndexField: __S(29) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DefineIndexFieldRequest" });
    case 7:
      return S.suspend(() => S.Struct({ Options: __S(29), Status: __S(11) })).annotate({
        identifier: "IndexFieldStatus",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ IndexField: __S(31) }).pipe(ns)).annotate({
        identifier: "DefineIndexFieldResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SourceField: S.String,
          FuzzyMatching: S.optional(S.String),
          SortExpression: S.optional(S.String),
        }),
      ).annotate({ identifier: "DocumentSuggesterOptions" });
    case 2:
      return S.suspend(() =>
        S.Struct({ SuggesterName: S.String, DocumentSuggesterOptions: __S(33) }),
      ).annotate({ identifier: "Suggester" });
    case 3:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String, Suggester: __S(34) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DefineSuggesterRequest" });
    case 4:
      return S.suspend(() => S.Struct({ Options: __S(34), Status: __S(11) })).annotate({
        identifier: "SuggesterStatus",
      });
    case 5:
      return S.suspend(() => S.Struct({ Suggester: __S(36) }).pipe(ns)).annotate({
        identifier: "DefineSuggesterResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String, AnalysisSchemeName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAnalysisSchemeRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ AnalysisScheme: __S(12) }).pipe(ns)).annotate({
        identifier: "DeleteAnalysisSchemeResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteDomainRequest" });
    case 1:
      return S.suspend(() => S.Struct({ DomainStatus: S.optional(__S(6)) }).pipe(ns)).annotate({
        identifier: "DeleteDomainResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String, ExpressionName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteExpressionRequest" });
    case 3:
      return S.suspend(() => S.Struct({ Expression: __S(16) }).pipe(ns)).annotate({
        identifier: "DeleteExpressionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String, IndexFieldName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteIndexFieldRequest" });
    case 5:
      return S.suspend(() => S.Struct({ IndexField: __S(31) }).pipe(ns)).annotate({
        identifier: "DeleteIndexFieldResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String, SuggesterName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteSuggesterRequest" });
    case 7:
      return S.suspend(() => S.Struct({ Suggester: __S(36) }).pipe(ns)).annotate({
        identifier: "DeleteSuggesterResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          AnalysisSchemeNames: S.optional(__S(48)),
          Deployed: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeAnalysisSchemesRequest",
      });
    case 2:
      return S.Array(__S(12));
    case 3:
      return S.suspend(() => S.Struct({ AnalysisSchemes: __S(50) }).pipe(ns)).annotate({
        identifier: "DescribeAnalysisSchemesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String, Deployed: S.optional(S.Boolean) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAvailabilityOptionsRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ Options: S.Boolean, Status: __S(11) })).annotate({
        identifier: "AvailabilityOptionsStatus",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AvailabilityOptions: S.optional(__S(53)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeAvailabilityOptionsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String, Deployed: S.optional(S.Boolean) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeDomainEndpointOptionsRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EnforceHTTPS: S.optional(S.Boolean),
          TLSSecurityPolicy: S.optional(S.String),
        }),
      ).annotate({ identifier: "DomainEndpointOptions" });
    case 1:
      return S.suspend(() => S.Struct({ Options: __S(56), Status: __S(11) })).annotate({
        identifier: "DomainEndpointOptionsStatus",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DomainEndpointOptions: S.optional(__S(57)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeDomainEndpointOptionsResponse",
      });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({ DomainNames: S.optional(__S(59)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeDomainsRequest" });
    case 5:
      return S.Array(__S(6));
    case 6:
      return S.suspend(() => S.Struct({ DomainStatusList: __S(61) }).pipe(ns)).annotate({
        identifier: "DescribeDomainsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          ExpressionNames: S.optional(__S(48)),
          Deployed: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeExpressionsRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(16));
    case 1:
      return S.suspend(() => S.Struct({ Expressions: __S(64) }).pipe(ns)).annotate({
        identifier: "DescribeExpressionsResponse",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          FieldNames: S.optional(__S(66)),
          Deployed: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeIndexFieldsRequest",
      });
    case 4:
      return S.Array(__S(31));
    case 5:
      return S.suspend(() => S.Struct({ IndexFields: __S(68) }).pipe(ns)).annotate({
        identifier: "DescribeIndexFieldsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeScalingParametersRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DesiredInstanceType: S.optional(S.String),
          DesiredReplicationCount: S.optional(S.Number),
          DesiredPartitionCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ScalingParameters" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Options: __S(71), Status: __S(11) })).annotate({
        identifier: "ScalingParametersStatus",
      });
    case 1:
      return S.suspend(() => S.Struct({ ScalingParameters: __S(72) }).pipe(ns)).annotate({
        identifier: "DescribeScalingParametersResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String, Deployed: S.optional(S.Boolean) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeServiceAccessPoliciesRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ Options: S.String, Status: __S(11) })).annotate({
        identifier: "AccessPoliciesStatus",
      });
    case 4:
      return S.suspend(() => S.Struct({ AccessPolicies: __S(75) }).pipe(ns)).annotate({
        identifier: "DescribeServiceAccessPoliciesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          SuggesterNames: S.optional(__S(48)),
          Deployed: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeSuggestersRequest",
      });
    case 6:
      return S.Array(__S(36));
    case 7:
      return S.suspend(() => S.Struct({ Suggesters: __S(78) }).pipe(ns)).annotate({
        identifier: "DescribeSuggestersResponse",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "IndexDocumentsRequest" });
    case 1:
      return S.suspend(() => S.Struct({ FieldNames: S.optional(__S(1)) }).pipe(ns)).annotate({
        identifier: "IndexDocumentsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListDomainNamesRequest" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() => S.Struct({ DomainNames: S.optional(__S(83)) }).pipe(ns)).annotate({
        identifier: "ListDomainNamesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String, MultiAZ: S.Boolean }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateAvailabilityOptionsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AvailabilityOptions: S.optional(__S(53)) }).pipe(ns),
      ).annotate({
        identifier: "UpdateAvailabilityOptionsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String, DomainEndpointOptions: __S(56) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateDomainEndpointOptionsRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DomainEndpointOptions: S.optional(__S(57)) }).pipe(ns),
      ).annotate({
        identifier: "UpdateDomainEndpointOptionsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String, ScalingParameters: __S(71) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateScalingParametersRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ ScalingParameters: __S(72) }).pipe(ns)).annotate({
        identifier: "UpdateScalingParametersResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String, AccessPolicies: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateServiceAccessPoliciesRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ AccessPolicies: __S(75) }).pipe(ns)).annotate({
        identifier: "UpdateServiceAccessPoliciesResponse",
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
  }
}
