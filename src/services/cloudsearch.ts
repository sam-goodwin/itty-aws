import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface A9SearchCloudConfigService2013 {
  buildSuggesters(
    input: BuildSuggestersRequest,
  ): Effect.Effect<
    BuildSuggestersResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createDomain(
    input: CreateDomainRequest,
  ): Effect.Effect<
    CreateDomainResponse,
    | BaseException
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ValidationException
    | CommonAwsError
  >;
  defineAnalysisScheme(
    input: DefineAnalysisSchemeRequest,
  ): Effect.Effect<
    DefineAnalysisSchemeResponse,
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  defineExpression(
    input: DefineExpressionRequest,
  ): Effect.Effect<
    DefineExpressionResponse,
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  defineIndexField(
    input: DefineIndexFieldRequest,
  ): Effect.Effect<
    DefineIndexFieldResponse,
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  defineSuggester(
    input: DefineSuggesterRequest,
  ): Effect.Effect<
    DefineSuggesterResponse,
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteAnalysisScheme(
    input: DeleteAnalysisSchemeRequest,
  ): Effect.Effect<
    DeleteAnalysisSchemeResponse,
    | BaseException
    | InternalException
    | InvalidTypeException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteDomain(
    input: DeleteDomainRequest,
  ): Effect.Effect<
    DeleteDomainResponse,
    BaseException | InternalException | CommonAwsError
  >;
  deleteExpression(
    input: DeleteExpressionRequest,
  ): Effect.Effect<
    DeleteExpressionResponse,
    | BaseException
    | InternalException
    | InvalidTypeException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteIndexField(
    input: DeleteIndexFieldRequest,
  ): Effect.Effect<
    DeleteIndexFieldResponse,
    | BaseException
    | InternalException
    | InvalidTypeException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteSuggester(
    input: DeleteSuggesterRequest,
  ): Effect.Effect<
    DeleteSuggesterResponse,
    | BaseException
    | InternalException
    | InvalidTypeException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeAnalysisSchemes(
    input: DescribeAnalysisSchemesRequest,
  ): Effect.Effect<
    DescribeAnalysisSchemesResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeAvailabilityOptions(
    input: DescribeAvailabilityOptionsRequest,
  ): Effect.Effect<
    DescribeAvailabilityOptionsResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeDomainEndpointOptions(
    input: DescribeDomainEndpointOptionsRequest,
  ): Effect.Effect<
    DescribeDomainEndpointOptionsResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeDomains(
    input: DescribeDomainsRequest,
  ): Effect.Effect<
    DescribeDomainsResponse,
    BaseException | InternalException | CommonAwsError
  >;
  describeExpressions(
    input: DescribeExpressionsRequest,
  ): Effect.Effect<
    DescribeExpressionsResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeIndexFields(
    input: DescribeIndexFieldsRequest,
  ): Effect.Effect<
    DescribeIndexFieldsResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeScalingParameters(
    input: DescribeScalingParametersRequest,
  ): Effect.Effect<
    DescribeScalingParametersResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeServiceAccessPolicies(
    input: DescribeServiceAccessPoliciesRequest,
  ): Effect.Effect<
    DescribeServiceAccessPoliciesResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeSuggesters(
    input: DescribeSuggestersRequest,
  ): Effect.Effect<
    DescribeSuggestersResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  indexDocuments(
    input: IndexDocumentsRequest,
  ): Effect.Effect<
    IndexDocumentsResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listDomainNames(input: {}): Effect.Effect<
    ListDomainNamesResponse,
    BaseException | CommonAwsError
  >;
  updateAvailabilityOptions(
    input: UpdateAvailabilityOptionsRequest,
  ): Effect.Effect<
    UpdateAvailabilityOptionsResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateDomainEndpointOptions(
    input: UpdateDomainEndpointOptionsRequest,
  ): Effect.Effect<
    UpdateDomainEndpointOptionsResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateScalingParameters(
    input: UpdateScalingParametersRequest,
  ): Effect.Effect<
    UpdateScalingParametersResponse,
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateServiceAccessPolicies(
    input: UpdateServiceAccessPoliciesRequest,
  ): Effect.Effect<
    UpdateServiceAccessPoliciesResponse,
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export type Cloudsearch = A9SearchCloudConfigService2013;

export interface AccessPoliciesStatus {
  Options: string;
  Status: OptionStatus;
}
export type AlgorithmicStemming = "none" | "minimal" | "light" | "full";
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
  | "zh_Hans"
  | "zh_Hant";
export interface AnalysisSchemeStatus {
  Options: AnalysisScheme;
  Status: OptionStatus;
}
export type AnalysisSchemeStatusList = Array<AnalysisSchemeStatus>;
export type APIVersion = string;

export type ARN = string;

export interface AvailabilityOptionsStatus {
  Options: boolean;
  Status: OptionStatus;
}
export declare class BaseException extends EffectData.TaggedError(
  "BaseException",
)<{
  readonly Code?: string;
  readonly Message?: string;
}> {}
export type CloudsearchBoolean = boolean;

export interface BuildSuggestersRequest {
  DomainName: string;
}
export interface BuildSuggestersResponse {
  FieldNames?: Array<string>;
}
export interface CreateDomainRequest {
  DomainName: string;
}
export interface CreateDomainResponse {
  DomainStatus?: DomainStatus;
}
export interface DateArrayOptions {
  DefaultValue?: string;
  SourceFields?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
}
export interface DateOptions {
  DefaultValue?: string;
  SourceField?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
  SortEnabled?: boolean;
}
export interface DefineAnalysisSchemeRequest {
  DomainName: string;
  AnalysisScheme: AnalysisScheme;
}
export interface DefineAnalysisSchemeResponse {
  AnalysisScheme: AnalysisSchemeStatus;
}
export interface DefineExpressionRequest {
  DomainName: string;
  Expression: Expression;
}
export interface DefineExpressionResponse {
  Expression: ExpressionStatus;
}
export interface DefineIndexFieldRequest {
  DomainName: string;
  IndexField: IndexField;
}
export interface DefineIndexFieldResponse {
  IndexField: IndexFieldStatus;
}
export interface DefineSuggesterRequest {
  DomainName: string;
  Suggester: Suggester;
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
export interface DescribeAnalysisSchemesRequest {
  DomainName: string;
  AnalysisSchemeNames?: Array<string>;
  Deployed?: boolean;
}
export interface DescribeAnalysisSchemesResponse {
  AnalysisSchemes: Array<AnalysisSchemeStatus>;
}
export interface DescribeAvailabilityOptionsRequest {
  DomainName: string;
  Deployed?: boolean;
}
export interface DescribeAvailabilityOptionsResponse {
  AvailabilityOptions?: AvailabilityOptionsStatus;
}
export interface DescribeDomainEndpointOptionsRequest {
  DomainName: string;
  Deployed?: boolean;
}
export interface DescribeDomainEndpointOptionsResponse {
  DomainEndpointOptions?: DomainEndpointOptionsStatus;
}
export interface DescribeDomainsRequest {
  DomainNames?: Array<string>;
}
export interface DescribeDomainsResponse {
  DomainStatusList: Array<DomainStatus>;
}
export interface DescribeExpressionsRequest {
  DomainName: string;
  ExpressionNames?: Array<string>;
  Deployed?: boolean;
}
export interface DescribeExpressionsResponse {
  Expressions: Array<ExpressionStatus>;
}
export interface DescribeIndexFieldsRequest {
  DomainName: string;
  FieldNames?: Array<string>;
  Deployed?: boolean;
}
export interface DescribeIndexFieldsResponse {
  IndexFields: Array<IndexFieldStatus>;
}
export interface DescribeScalingParametersRequest {
  DomainName: string;
}
export interface DescribeScalingParametersResponse {
  ScalingParameters: ScalingParametersStatus;
}
export interface DescribeServiceAccessPoliciesRequest {
  DomainName: string;
  Deployed?: boolean;
}
export interface DescribeServiceAccessPoliciesResponse {
  AccessPolicies: AccessPoliciesStatus;
}
export interface DescribeSuggestersRequest {
  DomainName: string;
  SuggesterNames?: Array<string>;
  Deployed?: boolean;
}
export interface DescribeSuggestersResponse {
  Suggesters: Array<SuggesterStatus>;
}
export declare class DisabledOperationException extends EffectData.TaggedError(
  "DisabledOperationException",
)<{
  readonly Code?: string;
  readonly Message?: string;
}> {}
export interface DocumentSuggesterOptions {
  SourceField: string;
  FuzzyMatching?: SuggesterFuzzyMatching;
  SortExpression?: string;
}
export interface DomainEndpointOptions {
  EnforceHTTPS?: boolean;
  TLSSecurityPolicy?: TLSSecurityPolicy;
}
export interface DomainEndpointOptionsStatus {
  Options: DomainEndpointOptions;
  Status: OptionStatus;
}
export type DomainId = string;

export type DomainName = string;

export type DomainNameList = Array<string>;
export type DomainNameMap = Record<string, string>;
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
export type DomainStatusList = Array<DomainStatus>;
export type Double = number;

export interface DoubleArrayOptions {
  DefaultValue?: number;
  SourceFields?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
}
export interface DoubleOptions {
  DefaultValue?: number;
  SourceField?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
  SortEnabled?: boolean;
}
export type DynamicFieldName = string;

export type DynamicFieldNameList = Array<string>;
export type ErrorCode = string;

export type ErrorMessage = string;

export interface Expression {
  ExpressionName: string;
  ExpressionValue: string;
}
export interface ExpressionStatus {
  Options: Expression;
  Status: OptionStatus;
}
export type ExpressionStatusList = Array<ExpressionStatus>;
export type ExpressionValue = string;

export type FieldName = string;

export type FieldNameCommaList = string;

export type FieldNameList = Array<string>;
export type FieldValue = string;

export interface IndexDocumentsRequest {
  DomainName: string;
}
export interface IndexDocumentsResponse {
  FieldNames?: Array<string>;
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
export interface IndexFieldStatus {
  Options: IndexField;
  Status: OptionStatus;
}
export type IndexFieldStatusList = Array<IndexFieldStatus>;
export type IndexFieldType =
  | "int"
  | "double"
  | "literal"
  | "text"
  | "date"
  | "latlon"
  | "int_array"
  | "double_array"
  | "literal_array"
  | "text_array"
  | "date_array";
export type InstanceCount = number;

export interface IntArrayOptions {
  DefaultValue?: number;
  SourceFields?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
}
export declare class InternalException extends EffectData.TaggedError(
  "InternalException",
)<{
  readonly Code?: string;
  readonly Message?: string;
}> {}
export interface IntOptions {
  DefaultValue?: number;
  SourceField?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
  SortEnabled?: boolean;
}
export declare class InvalidTypeException extends EffectData.TaggedError(
  "InvalidTypeException",
)<{
  readonly Code?: string;
  readonly Message?: string;
}> {}
export interface LatLonOptions {
  DefaultValue?: string;
  SourceField?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
  SortEnabled?: boolean;
}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Code?: string;
  readonly Message?: string;
}> {}
export interface Limits {
  MaximumReplicationCount: number;
  MaximumPartitionCount: number;
}
export interface ListDomainNamesResponse {
  DomainNames?: Record<string, string>;
}
export interface LiteralArrayOptions {
  DefaultValue?: string;
  SourceFields?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
}
export interface LiteralOptions {
  DefaultValue?: string;
  SourceField?: string;
  FacetEnabled?: boolean;
  SearchEnabled?: boolean;
  ReturnEnabled?: boolean;
  SortEnabled?: boolean;
}
export type Long = number;

export type MaximumPartitionCount = number;

export type MaximumReplicationCount = number;

export type MultiAZ = boolean;

export type OptionState =
  | "RequiresIndexDocuments"
  | "Processing"
  | "Active"
  | "FailedToValidate";
export interface OptionStatus {
  CreationDate: Date | string;
  UpdateDate: Date | string;
  UpdateVersion?: number;
  State: OptionState;
  PendingDeletion?: boolean;
}
export type PartitionCount = number;

export type PartitionInstanceType =
  | "search_m1_small"
  | "search_m1_large"
  | "search_m2_xlarge"
  | "search_m2_2xlarge"
  | "search_m3_medium"
  | "search_m3_large"
  | "search_m3_xlarge"
  | "search_m3_2xlarge"
  | "search_small"
  | "search_medium"
  | "search_large"
  | "search_xlarge"
  | "search_2xlarge"
  | "search_previousgeneration_small"
  | "search_previousgeneration_large"
  | "search_previousgeneration_xlarge"
  | "search_previousgeneration_2xlarge";
export type PolicyDocument = string;

export declare class ResourceAlreadyExistsException extends EffectData.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly Code?: string;
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Code?: string;
  readonly Message?: string;
}> {}
export interface ScalingParameters {
  DesiredInstanceType?: PartitionInstanceType;
  DesiredReplicationCount?: number;
  DesiredPartitionCount?: number;
}
export interface ScalingParametersStatus {
  Options: ScalingParameters;
  Status: OptionStatus;
}
export type SearchInstanceType = string;

export interface ServiceEndpoint {
  Endpoint?: string;
}
export type ServiceUrl = string;

export type StandardName = string;

export type StandardNameList = Array<string>;
export type CloudsearchString = string;

export interface Suggester {
  SuggesterName: string;
  DocumentSuggesterOptions: DocumentSuggesterOptions;
}
export type SuggesterFuzzyMatching = "none" | "low" | "high";
export interface SuggesterStatus {
  Options: Suggester;
  Status: OptionStatus;
}
export type SuggesterStatusList = Array<SuggesterStatus>;
export interface TextArrayOptions {
  DefaultValue?: string;
  SourceFields?: string;
  ReturnEnabled?: boolean;
  HighlightEnabled?: boolean;
  AnalysisScheme?: string;
}
export interface TextOptions {
  DefaultValue?: string;
  SourceField?: string;
  ReturnEnabled?: boolean;
  SortEnabled?: boolean;
  HighlightEnabled?: boolean;
  AnalysisScheme?: string;
}
export type TLSSecurityPolicy =
  | "POLICY_MIN_TLS_1_0_2019_07"
  | "POLICY_MIN_TLS_1_2_2019_07";
export type UIntValue = number;

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
export type UpdateTimestamp = Date | string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Code?: string;
  readonly Message?: string;
}> {}
export type Word = string;

export declare namespace BuildSuggesters {
  export type Input = BuildSuggestersRequest;
  export type Output = BuildSuggestersResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDomain {
  export type Input = CreateDomainRequest;
  export type Output = CreateDomainResponse;
  export type Error =
    | BaseException
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DefineAnalysisScheme {
  export type Input = DefineAnalysisSchemeRequest;
  export type Output = DefineAnalysisSchemeResponse;
  export type Error =
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DefineExpression {
  export type Input = DefineExpressionRequest;
  export type Output = DefineExpressionResponse;
  export type Error =
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DefineIndexField {
  export type Input = DefineIndexFieldRequest;
  export type Output = DefineIndexFieldResponse;
  export type Error =
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DefineSuggester {
  export type Input = DefineSuggesterRequest;
  export type Output = DefineSuggesterResponse;
  export type Error =
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAnalysisScheme {
  export type Input = DeleteAnalysisSchemeRequest;
  export type Output = DeleteAnalysisSchemeResponse;
  export type Error =
    | BaseException
    | InternalException
    | InvalidTypeException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDomain {
  export type Input = DeleteDomainRequest;
  export type Output = DeleteDomainResponse;
  export type Error = BaseException | InternalException | CommonAwsError;
}

export declare namespace DeleteExpression {
  export type Input = DeleteExpressionRequest;
  export type Output = DeleteExpressionResponse;
  export type Error =
    | BaseException
    | InternalException
    | InvalidTypeException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteIndexField {
  export type Input = DeleteIndexFieldRequest;
  export type Output = DeleteIndexFieldResponse;
  export type Error =
    | BaseException
    | InternalException
    | InvalidTypeException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSuggester {
  export type Input = DeleteSuggesterRequest;
  export type Output = DeleteSuggesterResponse;
  export type Error =
    | BaseException
    | InternalException
    | InvalidTypeException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAnalysisSchemes {
  export type Input = DescribeAnalysisSchemesRequest;
  export type Output = DescribeAnalysisSchemesResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeAvailabilityOptions {
  export type Input = DescribeAvailabilityOptionsRequest;
  export type Output = DescribeAvailabilityOptionsResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeDomainEndpointOptions {
  export type Input = DescribeDomainEndpointOptionsRequest;
  export type Output = DescribeDomainEndpointOptionsResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeDomains {
  export type Input = DescribeDomainsRequest;
  export type Output = DescribeDomainsResponse;
  export type Error = BaseException | InternalException | CommonAwsError;
}

export declare namespace DescribeExpressions {
  export type Input = DescribeExpressionsRequest;
  export type Output = DescribeExpressionsResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeIndexFields {
  export type Input = DescribeIndexFieldsRequest;
  export type Output = DescribeIndexFieldsResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeScalingParameters {
  export type Input = DescribeScalingParametersRequest;
  export type Output = DescribeScalingParametersResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeServiceAccessPolicies {
  export type Input = DescribeServiceAccessPoliciesRequest;
  export type Output = DescribeServiceAccessPoliciesResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeSuggesters {
  export type Input = DescribeSuggestersRequest;
  export type Output = DescribeSuggestersResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace IndexDocuments {
  export type Input = IndexDocumentsRequest;
  export type Output = IndexDocumentsResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDomainNames {
  export type Input = {};
  export type Output = ListDomainNamesResponse;
  export type Error = BaseException | CommonAwsError;
}

export declare namespace UpdateAvailabilityOptions {
  export type Input = UpdateAvailabilityOptionsRequest;
  export type Output = UpdateAvailabilityOptionsResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDomainEndpointOptions {
  export type Input = UpdateDomainEndpointOptionsRequest;
  export type Output = UpdateDomainEndpointOptionsResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateScalingParameters {
  export type Input = UpdateScalingParametersRequest;
  export type Output = UpdateScalingParametersResponse;
  export type Error =
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateServiceAccessPolicies {
  export type Input = UpdateServiceAccessPoliciesRequest;
  export type Output = UpdateServiceAccessPoliciesResponse;
  export type Error =
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
