// ==========================================================================
// Cloud Search API (cloudsearch v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "cloudsearch",
  version: "v1",
  rootUrl: "https://cloudsearch.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Source {
  /** Predefined content source for Google Apps. */
  predefinedSource?:
    | "NONE"
    | "QUERY_HISTORY"
    | "PERSON"
    | "GOOGLE_DRIVE"
    | "GOOGLE_GMAIL"
    | "GOOGLE_SITES"
    | "GOOGLE_GROUPS"
    | "GOOGLE_CALENDAR"
    | "GOOGLE_KEEP"
    | (string & {});
  /** Source name for content indexed by the Indexing API. */
  name?: string;
}

export const Source: Schema.Schema<Source> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    predefinedSource: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Source" });

export interface SourceResultCount {
  /** The estimated result count for this source. */
  resultCountEstimate?: string;
  /** The source the result count information is associated with. */
  source?: Source;
  /** Whether there are more search results for this source. */
  hasMoreResults?: boolean;
  /** The exact result count for this source. */
  resultCountExact?: string;
}

export const SourceResultCount: Schema.Schema<SourceResultCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resultCountEstimate: Schema.optional(Schema.String),
    source: Schema.optional(Source),
    hasMoreResults: Schema.optional(Schema.Boolean),
    resultCountExact: Schema.optional(Schema.String),
  }).annotate({ identifier: "SourceResultCount" });

export interface PhoneNumber {
  type?: "OTHER" | "MOBILE" | "OFFICE" | (string & {});
  /** The phone number of the person. */
  phoneNumber?: string;
}

export const PhoneNumber: Schema.Schema<PhoneNumber> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "PhoneNumber" });

export interface QueryCountByStatus {
  /** This represents the http status code. */
  statusCode?: number;
  count?: string;
}

export const QueryCountByStatus: Schema.Schema<QueryCountByStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusCode: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryCountByStatus" });

export interface QueryInterpretationConfig {
  /** Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental results retrieval, and usage of synonyms including custom ones. If this flag is set to True, it will take precedence over the option set at Query level. For the default value of False, query level flag will set the correct interpretation for verbatim mode. */
  forceVerbatimMode?: boolean;
  /** Set this flag to disable supplemental results retrieval, setting a flag here will not retrieve supplemental results for queries associated with a given search application. If this flag is set to True, it will take precedence over the option set at Query level. For the default value of False, query level flag will set the correct interpretation for supplemental results. */
  forceDisableSupplementalResults?: boolean;
}

export const QueryInterpretationConfig: Schema.Schema<QueryInterpretationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forceVerbatimMode: Schema.optional(Schema.Boolean),
    forceDisableSupplementalResults: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "QueryInterpretationConfig" });

export interface ScoringConfig {
  /** Whether to use freshness as a ranking signal. By default, freshness is used as a ranking signal. Note that this setting is not available in the Admin UI. */
  disableFreshness?: boolean;
  /** Whether to personalize the results. By default, personal signals will be used to boost results. */
  disablePersonalization?: boolean;
}

export const ScoringConfig: Schema.Schema<ScoringConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disableFreshness: Schema.optional(Schema.Boolean),
    disablePersonalization: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ScoringConfig" });

export interface IntegerFacetingOptions {
  /** Buckets for given integer values should be in strictly ascending order. For example, if values supplied are (1,5,10,100), the following facet buckets will be formed {<1, [1,5), [5-10), [10-100), >=100}. */
  integerBuckets?: ReadonlyArray<string>;
}

export const IntegerFacetingOptions: Schema.Schema<IntegerFacetingOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    integerBuckets: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "IntegerFacetingOptions" });

export interface FacetOptions {
  /** The name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions */
  operatorName?: string;
  /** If set, describes integer faceting options for the given integer property. The corresponding integer property in the schema should be marked isFacetable. The number of buckets returned would be minimum of this and num_facet_buckets. */
  integerFacetingOptions?: IntegerFacetingOptions;
  /** If object_type is set, only those objects of that type will be used to compute facets. If empty, then all objects will be used to compute facets. */
  objectType?: string;
  /** Maximum number of facet buckets that should be returned for this facet. Defaults to 10. Maximum value is 100. */
  numFacetBuckets?: number;
  /** Source name to facet on. Format: datasources/{source_id} If empty, all data sources will be used. */
  sourceName?: string;
}

export const FacetOptions: Schema.Schema<FacetOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatorName: Schema.optional(Schema.String),
    integerFacetingOptions: Schema.optional(IntegerFacetingOptions),
    objectType: Schema.optional(Schema.String),
    numFacetBuckets: Schema.optional(Schema.Number),
    sourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "FacetOptions" });

export interface Cloudsearch_Date {
  /** Year of date. Must be from 1 to 9999. */
  year?: number;
  /** Month of date. Must be from 1 to 12. */
  month?: number;
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  day?: number;
}

export const Cloudsearch_Date: Schema.Schema<Cloudsearch_Date> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    year: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Cloudsearch_Date" });

export interface Value {
  booleanValue?: boolean;
  doubleValue?: number;
  dateValue?: Cloudsearch_Date;
  timestampValue?: string;
  stringValue?: string;
  integerValue?: string;
}

export const Value: Schema.Schema<Value> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    booleanValue: Schema.optional(Schema.Boolean),
    doubleValue: Schema.optional(Schema.Number),
    dateValue: Schema.optional(Cloudsearch_Date),
    timestampValue: Schema.optional(Schema.String),
    stringValue: Schema.optional(Schema.String),
    integerValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "Value" });

export interface ValueFilter {
  /** The `operator_name` applied to the query, such as *price_greater_than*. The filter can work against both types of filters defined in the schema for your data source: 1. `operator_name`, where the query filters results by the property that matches the value. 2. `greater_than_operator_name` or `less_than_operator_name` in your schema. The query filters the results for the property values that are greater than or less than the supplied value in the query. */
  operatorName?: string;
  /** The value to be compared with. */
  value?: Value;
}

export const ValueFilter: Schema.Schema<ValueFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatorName: Schema.optional(Schema.String),
    value: Schema.optional(Value),
  }).annotate({ identifier: "ValueFilter" });

export interface CompositeFilter {
  /** The logic operator of the sub filter. */
  logicOperator?: "AND" | "OR" | "NOT" | (string & {});
  /** Sub filters. */
  subFilters?: ReadonlyArray<Filter>;
}

export const CompositeFilter: Schema.Schema<CompositeFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      logicOperator: Schema.optional(Schema.String),
      subFilters: Schema.optional(Schema.Array(Filter)),
    }),
  ).annotate({
    identifier: "CompositeFilter",
  }) as any as Schema.Schema<CompositeFilter>;

export interface Filter {
  valueFilter?: ValueFilter;
  compositeFilter?: CompositeFilter;
}

export const Filter: Schema.Schema<Filter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      valueFilter: Schema.optional(ValueFilter),
      compositeFilter: Schema.optional(CompositeFilter),
    }),
  ).annotate({ identifier: "Filter" }) as any as Schema.Schema<Filter>;

export interface FilterOptions {
  /** If object_type is set, only objects of that type are returned. This should correspond to the name of the object that was registered within the definition of schema. The maximum length is 256 characters. */
  objectType?: string;
  /** Generic filter to restrict the search, such as `lang:en`, `site:xyz`. */
  filter?: Filter;
}

export const FilterOptions: Schema.Schema<FilterOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectType: Schema.optional(Schema.String),
    filter: Schema.optional(Filter),
  }).annotate({ identifier: "FilterOptions" });

export interface DataSourceRestriction {
  /** Filter options restricting the results. If multiple filters are present, they are grouped by object type before joining. Filters with the same object type are joined conjunctively, then the resulting expressions are joined disjunctively. The maximum number of elements is 20. NOTE: Suggest API supports only few filters at the moment: "objecttype", "type" and "mimetype". For now, schema specific filters cannot be used to filter suggestions. */
  filterOptions?: ReadonlyArray<FilterOptions>;
  /** The source of restriction. */
  source?: Source;
}

export const DataSourceRestriction: Schema.Schema<DataSourceRestriction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filterOptions: Schema.optional(Schema.Array(FilterOptions)),
    source: Schema.optional(Source),
  }).annotate({ identifier: "DataSourceRestriction" });

export interface SortOptions {
  /** Ascending is the default sort order */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** The name of the operator corresponding to the field to sort on. The corresponding property must be marked as sortable. */
  operatorName?: string;
}

export const SortOptions: Schema.Schema<SortOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sortOrder: Schema.optional(Schema.String),
    operatorName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SortOptions" });

export interface SourceCrowdingConfig {
  /** Maximum number of results allowed from a datasource in a result page as long as results from other sources are not exhausted. Value specified must not be negative. A default value is used if this value is equal to 0. To disable crowding, set the value greater than 100. */
  numResults?: number;
  /** Maximum number of suggestions allowed from a source. No limits will be set on results if this value is less than or equal to 0. */
  numSuggestions?: number;
}

export const SourceCrowdingConfig: Schema.Schema<SourceCrowdingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numResults: Schema.optional(Schema.Number),
    numSuggestions: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SourceCrowdingConfig" });

export interface SourceScoringConfig {
  /** Importance of the source. */
  sourceImportance?: "DEFAULT" | "LOW" | "HIGH" | (string & {});
}

export const SourceScoringConfig: Schema.Schema<SourceScoringConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceImportance: Schema.optional(Schema.String),
  }).annotate({ identifier: "SourceScoringConfig" });

export interface SourceConfig {
  /** The source for which this configuration is to be used. */
  source?: Source;
  /** The crowding configuration for the source. */
  crowdingConfig?: SourceCrowdingConfig;
  /** The scoring configuration for the source. */
  scoringConfig?: SourceScoringConfig;
}

export const SourceConfig: Schema.Schema<SourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Source),
    crowdingConfig: Schema.optional(SourceCrowdingConfig),
    scoringConfig: Schema.optional(SourceScoringConfig),
  }).annotate({ identifier: "SourceConfig" });

export interface SearchApplication {
  /** Indicates whether audit logging is on/off for requests made for the search application in query APIs. */
  enableAuditLog?: boolean;
  /** The name of the Search Application. Format: searchapplications/{application_id}. */
  name?: string;
  /** The default options for query interpretation */
  queryInterpretationConfig?: QueryInterpretationConfig;
  /** Configuration for ranking results. */
  scoringConfig?: ScoringConfig;
  /** The default fields for returning facet results. The sources specified here also have been included in data_source_restrictions above. */
  defaultFacetOptions?: ReadonlyArray<FacetOptions>;
  /** Retrictions applied to the configurations. The maximum number of elements is 10. */
  dataSourceRestrictions?: ReadonlyArray<DataSourceRestriction>;
  /** The default options for sorting the search results */
  defaultSortOptions?: SortOptions;
  /** Configuration for a sources specified in data_source_restrictions. */
  sourceConfig?: ReadonlyArray<SourceConfig>;
  /** With each result we should return the URI for its thumbnail (when applicable) */
  returnResultThumbnailUrls?: boolean;
  /** Output only. IDs of the Long Running Operations (LROs) currently running for this schema. Output only field. */
  operationIds?: ReadonlyArray<string>;
  /** Display name of the Search Application. The maximum length is 300 characters. */
  displayName?: string;
}

export const SearchApplication: Schema.Schema<SearchApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableAuditLog: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    queryInterpretationConfig: Schema.optional(QueryInterpretationConfig),
    scoringConfig: Schema.optional(ScoringConfig),
    defaultFacetOptions: Schema.optional(Schema.Array(FacetOptions)),
    dataSourceRestrictions: Schema.optional(
      Schema.Array(DataSourceRestriction),
    ),
    defaultSortOptions: Schema.optional(SortOptions),
    sourceConfig: Schema.optional(Schema.Array(SourceConfig)),
    returnResultThumbnailUrls: Schema.optional(Schema.Boolean),
    operationIds: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchApplication" });

export interface EnumValues {
  /** The maximum allowable length for string values is 32 characters. */
  values?: ReadonlyArray<string>;
}

export const EnumValues: Schema.Schema<EnumValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "EnumValues" });

export interface IntegerValues {
  values?: ReadonlyArray<string>;
}

export const IntegerValues: Schema.Schema<IntegerValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "IntegerValues" });

export interface DoubleValues {
  values?: ReadonlyArray<number>;
}

export const DoubleValues: Schema.Schema<DoubleValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "DoubleValues" });

export interface HtmlValues {
  /** The maximum allowable length for html values is 2048 characters. */
  values?: ReadonlyArray<string>;
}

export const HtmlValues: Schema.Schema<HtmlValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "HtmlValues" });

export interface StructuredDataObject {
  /** The properties for the object. The maximum number of elements is 1000. */
  properties?: ReadonlyArray<NamedProperty>;
}

export const StructuredDataObject: Schema.Schema<StructuredDataObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      properties: Schema.optional(Schema.Array(NamedProperty)),
    }),
  ).annotate({
    identifier: "StructuredDataObject",
  }) as any as Schema.Schema<StructuredDataObject>;

export interface ObjectValues {
  values?: ReadonlyArray<StructuredDataObject>;
}

export const ObjectValues: Schema.Schema<ObjectValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      values: Schema.optional(Schema.Array(StructuredDataObject)),
    }),
  ).annotate({
    identifier: "ObjectValues",
  }) as any as Schema.Schema<ObjectValues>;

export interface TimestampValues {
  values?: ReadonlyArray<string>;
}

export const TimestampValues: Schema.Schema<TimestampValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TimestampValues" });

export interface DateValues {
  values?: ReadonlyArray<Cloudsearch_Date>;
}

export const DateValues: Schema.Schema<DateValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Cloudsearch_Date)),
  }).annotate({ identifier: "DateValues" });

export interface TextValues {
  /** The maximum allowable length for text values is 2048 characters. */
  values?: ReadonlyArray<string>;
}

export const TextValues: Schema.Schema<TextValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TextValues" });

export interface NamedProperty {
  /** The name of the property. This name should correspond to the name of the property that was registered for object definition in the schema. The maximum allowable length for this property is 256 characters. */
  name?: string;
  enumValues?: EnumValues;
  integerValues?: IntegerValues;
  doubleValues?: DoubleValues;
  booleanValue?: boolean;
  htmlValues?: HtmlValues;
  objectValues?: ObjectValues;
  timestampValues?: TimestampValues;
  dateValues?: DateValues;
  textValues?: TextValues;
}

export const NamedProperty: Schema.Schema<NamedProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.optional(Schema.String),
      enumValues: Schema.optional(EnumValues),
      integerValues: Schema.optional(IntegerValues),
      doubleValues: Schema.optional(DoubleValues),
      booleanValue: Schema.optional(Schema.Boolean),
      htmlValues: Schema.optional(HtmlValues),
      objectValues: Schema.optional(ObjectValues),
      timestampValues: Schema.optional(TimestampValues),
      dateValues: Schema.optional(DateValues),
      textValues: Schema.optional(TextValues),
    }),
  ).annotate({
    identifier: "NamedProperty",
  }) as any as Schema.Schema<NamedProperty>;

export interface ResultDisplayField {
  /** The name value pair for the property. */
  property?: NamedProperty;
  /** The display label for the property. */
  label?: string;
  /** The operator name of the property. */
  operatorName?: string;
}

export const ResultDisplayField: Schema.Schema<ResultDisplayField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(NamedProperty),
    label: Schema.optional(Schema.String),
    operatorName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResultDisplayField" });

export interface ResultDisplayLine {
  fields?: ReadonlyArray<ResultDisplayField>;
}

export const ResultDisplayLine: Schema.Schema<ResultDisplayLine> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fields: Schema.optional(Schema.Array(ResultDisplayField)),
  }).annotate({ identifier: "ResultDisplayLine" });

export interface ResultDisplayMetadata {
  /** The display label for the object. */
  objectTypeLabel?: string;
  /** The metalines content to be displayed with the result. */
  metalines?: ReadonlyArray<ResultDisplayLine>;
}

export const ResultDisplayMetadata: Schema.Schema<ResultDisplayMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectTypeLabel: Schema.optional(Schema.String),
    metalines: Schema.optional(Schema.Array(ResultDisplayLine)),
  }).annotate({ identifier: "ResultDisplayMetadata" });

export interface CustomerUserStats {
  /** The count of unique active users in the past thirty days */
  thirtyDaysActiveUsersCount?: string;
  /** The count of unique active users in the past one day */
  oneDayActiveUsersCount?: string;
  /** The count of unique active users in the past seven days */
  sevenDaysActiveUsersCount?: string;
  /** The date for which session stats were calculated. Stats calculated on the next day close to midnight are returned. */
  date?: Cloudsearch_Date;
}

export const CustomerUserStats: Schema.Schema<CustomerUserStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    thirtyDaysActiveUsersCount: Schema.optional(Schema.String),
    oneDayActiveUsersCount: Schema.optional(Schema.String),
    sevenDaysActiveUsersCount: Schema.optional(Schema.String),
    date: Schema.optional(Cloudsearch_Date),
  }).annotate({ identifier: "CustomerUserStats" });

export interface GetCustomerUserStatsResponse {
  stats?: ReadonlyArray<CustomerUserStats>;
}

export const GetCustomerUserStatsResponse: Schema.Schema<GetCustomerUserStatsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stats: Schema.optional(Schema.Array(CustomerUserStats)),
  }).annotate({ identifier: "GetCustomerUserStatsResponse" });

export interface QueryOperator {
  /** Indicates if multiple values can be set for this property. */
  isRepeatable?: boolean;
  /** Can get suggestions for this field. */
  isSuggestable?: boolean;
  /** Indicates the operator name that can be used to isolate the property using the less-than operator. */
  lessThanOperatorName?: string;
  /** The type of the operator. */
  type?:
    | "UNKNOWN"
    | "INTEGER"
    | "DOUBLE"
    | "TIMESTAMP"
    | "BOOLEAN"
    | "ENUM"
    | "DATE"
    | "TEXT"
    | "HTML"
    | (string & {});
  /** The name of the object corresponding to the operator. This field is only filled for schema-specific operators, and is unset for common operators. */
  objectType?: string;
  /** Display name of the operator */
  displayName?: string;
  /** Can this operator be used to get facets. */
  isFacetable?: boolean;
  /** Indicates the operator name that can be used to isolate the property using the greater-than operator. */
  greaterThanOperatorName?: string;
  /** Potential list of values for the opeatror field. This field is only filled when we can safely enumerate all the possible values of this operator. */
  enumValues?: ReadonlyArray<string>;
  /** Can this operator be used to sort results. */
  isSortable?: boolean;
  /** The name of the operator. */
  operatorName?: string;
  /** Will the property associated with this facet be returned as part of search results. */
  isReturnable?: boolean;
}

export const QueryOperator: Schema.Schema<QueryOperator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isRepeatable: Schema.optional(Schema.Boolean),
    isSuggestable: Schema.optional(Schema.Boolean),
    lessThanOperatorName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    objectType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    isFacetable: Schema.optional(Schema.Boolean),
    greaterThanOperatorName: Schema.optional(Schema.String),
    enumValues: Schema.optional(Schema.Array(Schema.String)),
    isSortable: Schema.optional(Schema.Boolean),
    operatorName: Schema.optional(Schema.String),
    isReturnable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "QueryOperator" });

export interface QuerySource {
  /** List of all operators applicable for this source. */
  operators?: ReadonlyArray<QueryOperator>;
  /** Display name of the data source. */
  displayName?: string;
  /** A short name or alias for the source. This value can be used with the 'source' operator. */
  shortName?: string;
  /** The name of the source */
  source?: Source;
}

export const QuerySource: Schema.Schema<QuerySource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operators: Schema.optional(Schema.Array(QueryOperator)),
    displayName: Schema.optional(Schema.String),
    shortName: Schema.optional(Schema.String),
    source: Schema.optional(Source),
  }).annotate({ identifier: "QuerySource" });

export interface SafeUrlProto {
  /** IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message. */
  privateDoNotAccessOrElseSafeUrlWrappedValue?: string;
}

export const SafeUrlProto: Schema.Schema<SafeUrlProto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateDoNotAccessOrElseSafeUrlWrappedValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "SafeUrlProto" });

export interface EnterpriseTopazFrontendTeamsPersonCorePhoneNumber {
  /** Phone number URL */
  phoneUrl?: SafeUrlProto;
  type?: "UNKNOWN" | "MOBILE" | "OFFICE" | "OTHER" | (string & {});
  /** Phone number in no particular format (as comes from the Focus profile). */
  phoneNumber?: string;
}

export const EnterpriseTopazFrontendTeamsPersonCorePhoneNumber: Schema.Schema<EnterpriseTopazFrontendTeamsPersonCorePhoneNumber> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneUrl: Schema.optional(SafeUrlProto),
    type: Schema.optional(Schema.String),
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier: "EnterpriseTopazFrontendTeamsPersonCorePhoneNumber",
  });

export interface EnterpriseTopazSidekickCommonDebugInfo {
  /** Debug message. */
  message?: string;
}

export const EnterpriseTopazSidekickCommonDebugInfo: Schema.Schema<EnterpriseTopazSidekickCommonDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterpriseTopazSidekickCommonDebugInfo" });

export interface EnterpriseTopazSidekickCommonPersonBirthday {
  /** Unstructured birthday. */
  value?: string;
}

export const EnterpriseTopazSidekickCommonPersonBirthday: Schema.Schema<EnterpriseTopazSidekickCommonPersonBirthday> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterpriseTopazSidekickCommonPersonBirthday" });

export interface EnterpriseTopazSidekickCommonPerson {
  /** The URL for the Focus profile picture. */
  photoUrl?: string;
  /** The last name. */
  familyName?: string;
  /** The birthday. */
  birthday?: EnterpriseTopazSidekickCommonPersonBirthday;
  /** Email. */
  email?: string;
  /** The department the person works in (e.g. Engineering). */
  department?: string;
  /** The person's job title (e.g. Software Engineer). */
  jobTitle?: string;
  /** The street address (e.g. 1255 Pear Avenue). */
  streetAddress?: string;
  /** The fully formatted address (e.g. 1255 Pear Avenue, Mountain View 94043, United States). */
  fullAddress?: string;
  /** The obfuscated GAIA ID. */
  obfuscatedId?: string;
  /** Work desk phone number. */
  deskPhone?: string;
  /** Cell phone number. */
  cellPhone?: string;
  /** This field is deprecated. The obfuscated_id should be used instead. */
  gaiaId?: string;
  /** The manager. */
  manager?: EnterpriseTopazSidekickCommonPerson;
  /** Desk location (e.g. US-MTV-PR55-5-5B1I). */
  deskLocation?: string;
  /** The full name. */
  displayName?: string;
  /** The first name. */
  givenName?: string;
}

export const EnterpriseTopazSidekickCommonPerson: Schema.Schema<EnterpriseTopazSidekickCommonPerson> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      photoUrl: Schema.optional(Schema.String),
      familyName: Schema.optional(Schema.String),
      birthday: Schema.optional(EnterpriseTopazSidekickCommonPersonBirthday),
      email: Schema.optional(Schema.String),
      department: Schema.optional(Schema.String),
      jobTitle: Schema.optional(Schema.String),
      streetAddress: Schema.optional(Schema.String),
      fullAddress: Schema.optional(Schema.String),
      obfuscatedId: Schema.optional(Schema.String),
      deskPhone: Schema.optional(Schema.String),
      cellPhone: Schema.optional(Schema.String),
      gaiaId: Schema.optional(Schema.String),
      manager: Schema.optional(EnterpriseTopazSidekickCommonPerson),
      deskLocation: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.String),
      givenName: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "EnterpriseTopazSidekickCommonPerson",
  }) as any as Schema.Schema<EnterpriseTopazSidekickCommonPerson>;

export interface EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson {
  /** The profile of this person. */
  person?: EnterpriseTopazSidekickCommonPerson;
  /** The query that can be used to produce an answer card with the same attribute, but for this person. */
  query?: string;
}

export const EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson: Schema.Schema<EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    person: Schema.optional(EnterpriseTopazSidekickCommonPerson),
    query: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson",
  });

export interface EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo {
  /** A list of people that also matched the query. This list is not complete. */
  disambiguation?: ReadonlyArray<EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson>;
  /** The name that was extracted from the query. This may be in the form of the given name, last name, full name, LDAP, or email address. This name can be considered suitable for displaying to the user and can largely be considered to be normalized (e.g. "Bob's" -> "Bob"). */
  name?: string;
}

export const EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo: Schema.Schema<EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disambiguation: Schema.optional(
      Schema.Array(
        EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson,
      ),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo",
  });

export interface EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeader {
  /** The suggested title to display. This defaults to the user's query. */
  title?: string;
}

export const EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeader: Schema.Schema<EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
  }).annotate({
    identifier: "EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeader",
  });

export interface EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard {
  /** Disambiguation information. */
  disambiguationInfo?: EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo;
  /** The header to display for the card. */
  header?: EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeader;
  /** The profile of the person that was the subject of the query. */
  subject?: EnterpriseTopazSidekickCommonPerson;
  /** A list of people that are related to the query subject. */
  relatedPeople?: ReadonlyArray<EnterpriseTopazSidekickCommonPerson>;
  /** The response status. */
  responseStatus?:
    | "UNKNOWN"
    | "SUCCESS"
    | "MISSING_PERSON"
    | "MISSING_DATA"
    | (string & {});
  /** Defines the type of relation the list of people have with the subject of the card. */
  relationType?:
    | "UNKNOWN"
    | "DIRECT_REPORTS"
    | "MANAGER"
    | "PEERS"
    | (string & {});
  /** Localized user friendly message to display to the user in the case of missing data or an error. */
  statusMessage?: string;
}

export const EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard: Schema.Schema<EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disambiguationInfo: Schema.optional(
      EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo,
    ),
    header: Schema.optional(
      EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeader,
    ),
    subject: Schema.optional(EnterpriseTopazSidekickCommonPerson),
    relatedPeople: Schema.optional(
      Schema.Array(EnterpriseTopazSidekickCommonPerson),
    ),
    responseStatus: Schema.optional(Schema.String),
    relationType: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard",
  });

export interface ItemCountByStatus {
  /** Status of the items. */
  statusCode?:
    | "CODE_UNSPECIFIED"
    | "ERROR"
    | "MODIFIED"
    | "NEW_ITEM"
    | "ACCEPTED"
    | (string & {});
  /** Number of items matching the status code. */
  count?: string;
  /** Number of items matching the status code for which billing is done. This excludes virtual container items from the total count. This count would not be applicable for items with ERROR or NEW_ITEM status code. */
  indexedItemsCount?: string;
}

export const ItemCountByStatus: Schema.Schema<ItemCountByStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusCode: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
    indexedItemsCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "ItemCountByStatus" });

export interface CustomerIndexStats {
  /** The date for which statistics were calculated. */
  date?: Cloudsearch_Date;
  /** Number of items aggregrated by status code. */
  itemCountByStatus?: ReadonlyArray<ItemCountByStatus>;
}

export const CustomerIndexStats: Schema.Schema<CustomerIndexStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.optional(Cloudsearch_Date),
    itemCountByStatus: Schema.optional(Schema.Array(ItemCountByStatus)),
  }).annotate({ identifier: "CustomerIndexStats" });

export interface GetCustomerIndexStatsResponse {
  /** Average item count for the given date range for which billing is done. */
  averageIndexedItemCount?: string;
  /** Summary of indexed item counts, one for each day in the requested range. */
  stats?: ReadonlyArray<CustomerIndexStats>;
}

export const GetCustomerIndexStatsResponse: Schema.Schema<GetCustomerIndexStatsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    averageIndexedItemCount: Schema.optional(Schema.String),
    stats: Schema.optional(Schema.Array(CustomerIndexStats)),
  }).annotate({ identifier: "GetCustomerIndexStatsResponse" });

export interface BooleanOperatorOptions {
  /** Indicates the operator name required in the query in order to isolate the boolean property. For example, if operatorName is *closed* and the property's name is *isClosed*, then queries like *closed:<value>* show results only where the value of the property named *isClosed* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
  operatorName?: string;
}

export const BooleanOperatorOptions: Schema.Schema<BooleanOperatorOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatorName: Schema.optional(Schema.String),
  }).annotate({ identifier: "BooleanOperatorOptions" });

export interface SearchApplicationSessionStats {
  /** The date for which session stats were calculated. Stats are calculated on the following day, close to midnight PST, and then returned. */
  date?: Cloudsearch_Date;
  /** The count of search sessions on the day */
  searchSessionsCount?: string;
}

export const SearchApplicationSessionStats: Schema.Schema<SearchApplicationSessionStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.optional(Cloudsearch_Date),
    searchSessionsCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchApplicationSessionStats" });

export interface GetSearchApplicationSessionStatsResponse {
  stats?: ReadonlyArray<SearchApplicationSessionStats>;
}

export const GetSearchApplicationSessionStatsResponse: Schema.Schema<GetSearchApplicationSessionStatsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stats: Schema.optional(Schema.Array(SearchApplicationSessionStats)),
  }).annotate({ identifier: "GetSearchApplicationSessionStatsResponse" });

export interface EnterpriseTopazSidekickGenericAnswerCard {
  /** Title or header of the card. */
  title?: string;
  /** The answer. */
  answer?: string;
}

export const EnterpriseTopazSidekickGenericAnswerCard: Schema.Schema<EnterpriseTopazSidekickGenericAnswerCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    answer: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterpriseTopazSidekickGenericAnswerCard" });

export interface DisplayedProperty {
  /** The name of the top-level property as defined in a property definition for the object. If the name is not a defined property in the schema, an error is given when attempting to update the schema. */
  propertyName?: string;
}

export const DisplayedProperty: Schema.Schema<DisplayedProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    propertyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DisplayedProperty" });

export interface EmailAddress {
  /** Indicates if this is the user's primary email. Only one entry can be marked as primary. */
  primary?: boolean;
  /** The type of the email account. Acceptable values are: "custom", "home", "other", "work". */
  type?: string;
  /** The URL to send email. */
  emailUrl?: string;
  /** The email address. */
  emailAddress?: string;
  /** If the value of type is custom, this property contains the custom type string. */
  customType?: string;
}

export const EmailAddress: Schema.Schema<EmailAddress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primary: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
    emailUrl: Schema.optional(Schema.String),
    emailAddress: Schema.optional(Schema.String),
    customType: Schema.optional(Schema.String),
  }).annotate({ identifier: "EmailAddress" });

export interface VPCSettings {
  /** The resource name of the GCP Project to be used for VPC SC policy check. VPC security settings on this project will be honored for Cloud Search APIs after project_name has been updated through CustomerService. Format: projects/{project_id} */
  project?: string;
}

export const VPCSettings: Schema.Schema<VPCSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.optional(Schema.String),
  }).annotate({ identifier: "VPCSettings" });

export interface AuditLoggingSettings {
  /** Indicates whether audit logging is on/off for data access write APIs i.e. IndexItem etc. */
  logDataWriteActions?: boolean;
  /** The resource name of the GCP Project to store audit logs. Cloud audit logging will be enabled after project_name has been updated through CustomerService. Format: projects/{project_id} */
  project?: string;
  /** Indicates whether audit logging is on/off for admin activity read APIs i.e. Get/List DataSources, Get/List SearchApplications etc. */
  logAdminReadActions?: boolean;
  /** Indicates whether audit logging is on/off for data access read APIs i.e. ListItems, GetItem etc. */
  logDataReadActions?: boolean;
}

export const AuditLoggingSettings: Schema.Schema<AuditLoggingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logDataWriteActions: Schema.optional(Schema.Boolean),
    project: Schema.optional(Schema.String),
    logAdminReadActions: Schema.optional(Schema.Boolean),
    logDataReadActions: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AuditLoggingSettings" });

export interface CustomerSettings {
  /** VPC SC settings for the customer. If update_mask is empty then this field will be updated based on UpdateCustomerSettings request. */
  vpcSettings?: VPCSettings;
  /** Audit Logging settings for the customer. If update_mask is empty then this field will be updated based on UpdateCustomerSettings request. */
  auditLoggingSettings?: AuditLoggingSettings;
}

export const CustomerSettings: Schema.Schema<CustomerSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcSettings: Schema.optional(VPCSettings),
    auditLoggingSettings: Schema.optional(AuditLoggingSettings),
  }).annotate({ identifier: "CustomerSettings" });

export interface DateOperatorOptions {
  /** Indicates the operator name required in the query in order to isolate the date property using the greater-than operator. For example, if greaterThanOperatorName is *closedafter* and the property's name is *closeDate*, then queries like *closedafter:<value>* show results only where the value of the property named *closeDate* is later than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
  greaterThanOperatorName?: string;
  /** Indicates the operator name required in the query in order to isolate the date property using the less-than operator. For example, if lessThanOperatorName is *closedbefore* and the property's name is *closeDate*, then queries like *closedbefore:<value>* show results only where the value of the property named *closeDate* is earlier than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
  lessThanOperatorName?: string;
  /** Indicates the actual string required in the query in order to isolate the date property. For example, suppose an issue tracking schema object has a property named *closeDate* that specifies an operator with an operatorName of *closedon*. For searches on that data, queries like *closedon:<value>* show results only where the value of the *closeDate* property matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the indexed datasource. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
  operatorName?: string;
}

export const DateOperatorOptions: Schema.Schema<DateOperatorOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    greaterThanOperatorName: Schema.optional(Schema.String),
    lessThanOperatorName: Schema.optional(Schema.String),
    operatorName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DateOperatorOptions" });

export interface DatePropertyOptions {
  /** If set, describes how the date should be used as a search operator. */
  operatorOptions?: DateOperatorOptions;
}

export const DatePropertyOptions: Schema.Schema<DatePropertyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatorOptions: Schema.optional(DateOperatorOptions),
  }).annotate({ identifier: "DatePropertyOptions" });

export interface UploadItemRef {
  /** The name of the content reference. The maximum length is 2048 characters. */
  name?: string;
}

export const UploadItemRef: Schema.Schema<UploadItemRef> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "UploadItemRef" });

export interface ItemContent {
  contentFormat?: "UNSPECIFIED" | "HTML" | "TEXT" | "RAW" | (string & {});
  /** Upload reference ID of a previously uploaded content via write method. */
  contentDataRef?: UploadItemRef;
  /** Hashing info calculated and provided by the API client for content. Can be used with the items.push method to calculate modified state. The maximum length is 2048 characters. */
  hash?: string;
  /** Content that is supplied inlined within the update method. The maximum length is 102400 bytes (100 KiB). */
  inlineContent?: string;
}

export const ItemContent: Schema.Schema<ItemContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentFormat: Schema.optional(Schema.String),
    contentDataRef: Schema.optional(UploadItemRef),
    hash: Schema.optional(Schema.String),
    inlineContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "ItemContent" });

export interface FieldViolation {
  /** Path of field with violation. */
  field?: string;
  /** The description of the error. */
  description?: string;
}

export const FieldViolation: Schema.Schema<FieldViolation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "FieldViolation" });

export interface ProcessingError {
  /** The description of the error. */
  errorMessage?: string;
  /** In case the item fields are invalid, this field contains the details about the validation errors. */
  fieldViolations?: ReadonlyArray<FieldViolation>;
  /** Error code indicating the nature of the error. */
  code?:
    | "PROCESSING_ERROR_CODE_UNSPECIFIED"
    | "MALFORMED_REQUEST"
    | "UNSUPPORTED_CONTENT_FORMAT"
    | "INDIRECT_BROKEN_ACL"
    | "ACL_CYCLE"
    | (string & {});
}

export const ProcessingError: Schema.Schema<ProcessingError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorMessage: Schema.optional(Schema.String),
    fieldViolations: Schema.optional(Schema.Array(FieldViolation)),
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProcessingError" });

export interface RepositoryError {
  /** Error codes. Matches the definition of HTTP status codes. */
  httpStatusCode?: number;
  /** Message that describes the error. The maximum allowable length of the message is 8192 characters. */
  errorMessage?: string;
  /** The type of error. */
  type?:
    | "UNKNOWN"
    | "NETWORK_ERROR"
    | "DNS_ERROR"
    | "CONNECTION_ERROR"
    | "AUTHENTICATION_ERROR"
    | "AUTHORIZATION_ERROR"
    | "SERVER_ERROR"
    | "QUOTA_EXCEEDED"
    | "SERVICE_UNAVAILABLE"
    | "CLIENT_ERROR"
    | (string & {});
}

export const RepositoryError: Schema.Schema<RepositoryError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    httpStatusCode: Schema.optional(Schema.Number),
    errorMessage: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "RepositoryError" });

export interface ItemStatus {
  /** Status code. */
  code?:
    | "CODE_UNSPECIFIED"
    | "ERROR"
    | "MODIFIED"
    | "NEW_ITEM"
    | "ACCEPTED"
    | (string & {});
  /** Error details in case the item is in ERROR state. */
  processingErrors?: ReadonlyArray<ProcessingError>;
  /** Repository error reported by connector. */
  repositoryErrors?: ReadonlyArray<RepositoryError>;
}

export const ItemStatus: Schema.Schema<ItemStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    processingErrors: Schema.optional(Schema.Array(ProcessingError)),
    repositoryErrors: Schema.optional(Schema.Array(RepositoryError)),
  }).annotate({ identifier: "ItemStatus" });

export interface GSuitePrincipal {
  /** This principal references a Google Workspace group name. */
  gsuiteGroupEmail?: string;
  /** This principal represents all users of the Google Workspace domain of the customer. */
  gsuiteDomain?: boolean;
  /** This principal references a Google Workspace user account. */
  gsuiteUserEmail?: string;
}

export const GSuitePrincipal: Schema.Schema<GSuitePrincipal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gsuiteGroupEmail: Schema.optional(Schema.String),
    gsuiteDomain: Schema.optional(Schema.Boolean),
    gsuiteUserEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "GSuitePrincipal" });

export interface Principal {
  /** This principal is a Google Workspace user, group or domain. */
  gsuitePrincipal?: GSuitePrincipal;
  /** This principal is a user identified using an external identity. The name field must specify the user resource name with this format: identitysources/{source_id}/users/{ID} */
  userResourceName?: string;
  /** This principal is a group identified using an external identity. The name field must specify the group resource name with this format: identitysources/{source_id}/groups/{ID} */
  groupResourceName?: string;
}

export const Principal: Schema.Schema<Principal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gsuitePrincipal: Schema.optional(GSuitePrincipal),
    userResourceName: Schema.optional(Schema.String),
    groupResourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Principal" });

export interface ItemAcl {
  /** The name of the item to inherit the Access Permission List (ACL) from. Note: ACL inheritance *only* provides access permissions to child items and does not define structural relationships, nor does it provide convenient ways to delete large groups of items. Deleting an ACL parent from the index only alters the access permissions of child items that reference the parent in the inheritAclFrom field. The item is still in the index, but may not visible in search results. By contrast, deletion of a container item also deletes all items that reference the container via the containerName field. The maximum length for this field is 1536 characters. */
  inheritAclFrom?: string;
  /** Sets the type of access rules to apply when an item inherits its ACL from a parent. This should always be set in tandem with the inheritAclFrom field. Also, when the inheritAclFrom field is set, this field should be set to a valid AclInheritanceType. */
  aclInheritanceType?:
    | "NOT_APPLICABLE"
    | "CHILD_OVERRIDE"
    | "PARENT_OVERRIDE"
    | "BOTH_PERMIT"
    | (string & {});
  /** List of principals who are allowed to see the item in search results. Optional if inheriting permissions from another item or if the item is not intended to be visible, such as virtual containers. The maximum number of elements is 1000. */
  readers?: ReadonlyArray<Principal>;
  /** Optional. List of owners for the item. This field has no bearing on document access permissions. It does, however, offer a slight ranking boosts items where the querying user is an owner. The maximum number of elements is 5. */
  owners?: ReadonlyArray<Principal>;
  /** List of principals who are explicitly denied access to the item in search results. While principals are denied access by default, use denied readers to handle exceptions and override the list allowed readers. The maximum number of elements is 100. */
  deniedReaders?: ReadonlyArray<Principal>;
}

export const ItemAcl: Schema.Schema<ItemAcl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inheritAclFrom: Schema.optional(Schema.String),
    aclInheritanceType: Schema.optional(Schema.String),
    readers: Schema.optional(Schema.Array(Principal)),
    owners: Schema.optional(Schema.Array(Principal)),
    deniedReaders: Schema.optional(Schema.Array(Principal)),
  }).annotate({ identifier: "ItemAcl" });

export interface ItemStructuredData {
  /** The structured data object that should conform to a registered object definition in the schema for the data source. */
  object?: StructuredDataObject;
  /** Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters. */
  hash?: string;
}

export const ItemStructuredData: Schema.Schema<ItemStructuredData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(StructuredDataObject),
    hash: Schema.optional(Schema.String),
  }).annotate({ identifier: "ItemStructuredData" });

export interface ContextAttribute {
  /** Text values of the attribute. The maximum number of elements is 10. The maximum length of an element in the array is 32 characters. The value will be normalized (lower-cased) before being matched. */
  values?: ReadonlyArray<string>;
  /** The name of the attribute. It should not be empty. The maximum length is 32 characters. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The name will be normalized (lower-cased) before being matched. */
  name?: string;
}

export const ContextAttribute: Schema.Schema<ContextAttribute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContextAttribute" });

export interface Interaction {
  type?: "UNSPECIFIED" | "VIEW" | "EDIT" | (string & {});
  /** The user that acted on the item. */
  principal?: Principal;
  /** The time when the user acted on the item. If multiple actions of the same type exist for a single user, only the most recent action is recorded. */
  interactionTime?: string;
}

export const Interaction: Schema.Schema<Interaction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    principal: Schema.optional(Principal),
    interactionTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Interaction" });

export interface SearchQualityMetadata {
  /** An indication of the quality of the item, used to influence search quality. Value should be between 0.0 (lowest quality) and 1.0 (highest quality). The default value is 0.0. */
  quality?: number;
}

export const SearchQualityMetadata: Schema.Schema<SearchQualityMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quality: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SearchQualityMetadata" });

export interface ItemMetadata {
  /** A set of named attributes associated with the item. This can be used for influencing the ranking of the item based on the context in the request. The maximum number of elements is 10. */
  contextAttributes?: ReadonlyArray<ContextAttribute>;
  /** The type of the item. This should correspond to the name of an object definition in the schema registered for the data source. For example, if the schema for the data source contains an object definition with name 'document', then item indexing requests for objects of that type should set objectType to 'document'. The maximum length is 256 characters. */
  objectType?: string;
  /** Link to the source repository serving the data. Seach results apply this link to the title. Whitespace or special characters may cause Cloud Seach result links to trigger a redirect notice; to avoid this, encode the URL. The maximum length is 2048 characters. */
  sourceRepositoryUrl?: string;
  /** A list of interactions for the item. Interactions are used to improve Search quality, but are not exposed to end users. The maximum number of elements is 1000. */
  interactions?: ReadonlyArray<Interaction>;
  /** The title of the item. If given, this will be the displayed title of the Search result. The maximum length is 2048 characters. */
  title?: string;
  /** The name of the container for this item. Deletion of the container item leads to automatic deletion of this item. Note: ACLs are not inherited from a container item. To provide ACL inheritance for an item, use the inheritAclFrom field. The maximum length is 1536 characters. */
  containerName?: string;
  /** Additional keywords or phrases that should match the item. Used internally for user generated content. The maximum number of elements is 100. The maximum length is 8192 characters. */
  keywords?: ReadonlyArray<string>;
  /** The time when the item was created in the source repository. */
  createTime?: string;
  /** The BCP-47 language code for the item, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. The maximum length is 32 characters. */
  contentLanguage?: string;
  /** Additional search quality metadata of the item */
  searchQualityMetadata?: SearchQualityMetadata;
  /** The time when the item was last modified in the source repository. */
  updateTime?: string;
  /** The original mime-type of ItemContent.content in the source repository. The maximum length is 256 characters. */
  mimeType?: string;
  /** Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters. */
  hash?: string;
}

export const ItemMetadata: Schema.Schema<ItemMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextAttributes: Schema.optional(Schema.Array(ContextAttribute)),
    objectType: Schema.optional(Schema.String),
    sourceRepositoryUrl: Schema.optional(Schema.String),
    interactions: Schema.optional(Schema.Array(Interaction)),
    title: Schema.optional(Schema.String),
    containerName: Schema.optional(Schema.String),
    keywords: Schema.optional(Schema.Array(Schema.String)),
    createTime: Schema.optional(Schema.String),
    contentLanguage: Schema.optional(Schema.String),
    searchQualityMetadata: Schema.optional(SearchQualityMetadata),
    updateTime: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
    hash: Schema.optional(Schema.String),
  }).annotate({ identifier: "ItemMetadata" });

export interface Item {
  /** The name of the Item. Format: datasources/{source_id}/items/{item_id} This is a required field. The maximum length is 1536 characters. */
  name?: string;
  /** Item content to be indexed and made text searchable. */
  content?: ItemContent;
  /** Status of the item. Output only field. */
  status?: ItemStatus;
  /** Access control list for this item. */
  acl?: ItemAcl;
  /** Queue this item belongs to. The maximum length is 100 characters. */
  queue?: string;
  /** Additional state connector can store for this item. The maximum length is 10000 bytes. */
  payload?: string;
  /** Required. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't index or delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes. For information on how item version affects the deletion process, refer to [Handle revisions after manual deletes](https://developers.google.com/workspace/cloud-search/docs/guides/operations). */
  version?: string;
  /** The structured data for the item that should conform to a registered object definition in the schema for the data source. */
  structuredData?: ItemStructuredData;
  /** The metadata information. */
  metadata?: ItemMetadata;
  /** The type for this item. */
  itemType?:
    | "UNSPECIFIED"
    | "CONTENT_ITEM"
    | "CONTAINER_ITEM"
    | "VIRTUAL_CONTAINER_ITEM"
    | (string & {});
}

export const Item: Schema.Schema<Item> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    content: Schema.optional(ItemContent),
    status: Schema.optional(ItemStatus),
    acl: Schema.optional(ItemAcl),
    queue: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    structuredData: Schema.optional(ItemStructuredData),
    metadata: Schema.optional(ItemMetadata),
    itemType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Item" });

export interface EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata {
  /** The drive document cosmo id. Client could use the id to build a URL to open a document. Please use Document.document_id. */
  documentId?: string;
  /** Timestamp of the last updated time of the document in milliseconds since epoch. */
  lastUpdatedTimeMs?: string;
  /** Additional field to identify whether a document is private since scope set to LIMITED can mean both that the doc is private or that it's shared with others. is_private indicates whether the doc is not shared with anyone except for the owner. */
  isPrivate?: boolean;
  /** The owner of the document. */
  owner?: EnterpriseTopazSidekickCommonPerson;
  /** Timestamp of the most recent edit from the current user in milliseconds since epoch. */
  lastEditTimeMs?: string;
  /** Last modification time of the document (independent of the user that modified it). */
  lastModificationTimeMillis?: string;
  /** ACL scope of the document which identifies the sharing status of the doc (e.g., limited, shared with link, team drive, ...). */
  scope?:
    | "UNKNOWN_DOCUMENT_SCOPE"
    | "LIMITED"
    | "DASHER_DOMAIN_WITH_LINK"
    | "DASHER_DOMAIN"
    | "PUBLIC_WITH_LINK"
    | "PUBLIC"
    | "TEAM_DRIVE"
    | (string & {});
  /** Timestamp of the most recent comment added to the document in milliseconds since epoch. */
  lastCommentTimeMs?: string;
  /** Timestamp of the most recent view from the current user in milliseconds since epoch. */
  lastViewTimeMs?: string;
}

export const EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata: Schema.Schema<EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentId: Schema.optional(Schema.String),
    lastUpdatedTimeMs: Schema.optional(Schema.String),
    isPrivate: Schema.optional(Schema.Boolean),
    owner: Schema.optional(EnterpriseTopazSidekickCommonPerson),
    lastEditTimeMs: Schema.optional(Schema.String),
    lastModificationTimeMillis: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    lastCommentTimeMs: Schema.optional(Schema.String),
    lastViewTimeMs: Schema.optional(Schema.String),
  }).annotate({
    identifier: "EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata",
  });

export interface EnterpriseTopazSidekickCommonDocumentJustification {
  /** A locale aware message that explains why this document was selected. */
  justification?: string;
  /** Reason on why the document is selected. Populate for trending documents. */
  reason?:
    | "UNKNOWN"
    | "TRENDING_IN_COLLABORATORS"
    | "TRENDING_IN_DOMAIN"
    | "FREQUENTLY_VIEWED"
    | "FREQUENTLY_EDITED"
    | "NEW_UPDATES"
    | "NEW_COMMENTS"
    | "EVENT_DESCRIPTION"
    | "EVENT_ATTACHMENT"
    | "EVENT_METADATA_ATTACHMENT"
    | "MINED_DOCUMENT"
    | "NEW_MENTIONS"
    | "NEW_SHARES"
    | (string & {});
}

export const EnterpriseTopazSidekickCommonDocumentJustification: Schema.Schema<EnterpriseTopazSidekickCommonDocumentJustification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    justification: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  }).annotate({
    identifier: "EnterpriseTopazSidekickCommonDocumentJustification",
  });

export interface EnterpriseTopazSidekickCommonDocument {
  /** Absolute URL of the document. */
  url?: string;
  /** Information for debugging. */
  debugInfo?: EnterpriseTopazSidekickCommonDebugInfo;
  /** Type of the document. */
  type?:
    | "UNKNOWN"
    | "DOCUMENT"
    | "PRESENTATION"
    | "SPREADSHEET"
    | "PDF"
    | "IMAGE"
    | "BINARY_BLOB"
    | "FUSION_TABLE"
    | "FOLDER"
    | "DRAWING"
    | "VIDEO"
    | "FORM"
    | "LINK_URL"
    | "LINK_GO"
    | "LINK_GOO_GL"
    | "LINK_BIT_LY"
    | "LINK_GMAIL"
    | "LINK_MAILTO"
    | "VIDEO_YOUTUBE"
    | "VIDEO_LIVE"
    | "GROUPS"
    | "NEWS"
    | "SITES"
    | "HANGOUT"
    | "AUDIO"
    | "MS_WORD"
    | "MS_POWERPOINT"
    | "MS_EXCEL"
    | "MS_OUTLOOK"
    | (string & {});
  /** Document provenance. */
  provenance?:
    | "UNKNOWN_PROVENANCE"
    | "CALENDAR_DESCRIPTION"
    | "CALENDAR_ATTACHMENT"
    | "MINED"
    | "CALENDAR_ASSIST_ATTACHMENT"
    | (string & {});
  /** Thumbnail URL. */
  thumbnailUrl?: string;
  /** A sampling of the text from the document. */
  snippet?: string;
  /** Document id. */
  documentId?: string;
  /** Drive document metadata. */
  driveDocumentMetadata?: EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata;
  /** Title of the document. */
  title?: string;
  /** Generic Drive-based url in the format of drive.google.com/open to be used for deeplink */
  genericUrl?: string;
  /** Justification on why the document is selected. */
  justification?: EnterpriseTopazSidekickCommonDocumentJustification;
  /** Justification of why this document is being returned. */
  reason?:
    | "UNKNOWN"
    | "TRENDING_IN_COLLABORATORS"
    | "TRENDING_IN_DOMAIN"
    | "FREQUENTLY_VIEWED"
    | "FREQUENTLY_EDITED"
    | "NEW_UPDATES"
    | "NEW_COMMENTS"
    | "EVENT_DESCRIPTION"
    | "EVENT_ATTACHMENT"
    | "EVENT_METADATA_ATTACHMENT"
    | "MINED_DOCUMENT"
    | "NEW_MENTIONS"
    | "NEW_SHARES"
    | (string & {});
  /** Access type, i.e., whether the user has access to the document or not. */
  accessType?: "UNKNOWN_ACCESS" | "ALLOWED" | "NOT_ALLOWED" | (string & {});
  /** MIME type */
  mimeType?: string;
}

export const EnterpriseTopazSidekickCommonDocument: Schema.Schema<EnterpriseTopazSidekickCommonDocument> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    debugInfo: Schema.optional(EnterpriseTopazSidekickCommonDebugInfo),
    type: Schema.optional(Schema.String),
    provenance: Schema.optional(Schema.String),
    thumbnailUrl: Schema.optional(Schema.String),
    snippet: Schema.optional(Schema.String),
    documentId: Schema.optional(Schema.String),
    driveDocumentMetadata: Schema.optional(
      EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata,
    ),
    title: Schema.optional(Schema.String),
    genericUrl: Schema.optional(Schema.String),
    justification: Schema.optional(
      EnterpriseTopazSidekickCommonDocumentJustification,
    ),
    reason: Schema.optional(Schema.String),
    accessType: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterpriseTopazSidekickCommonDocument" });

export interface EnterpriseTopazSidekickPerson {
  /** Gaia id. */
  gaiaId?: string;
  /** Name. */
  name?: string;
  /** Whether the invitee is a group. */
  isGroup?: boolean;
  /** The level of affinity this person has with the requesting user. */
  affinityLevel?: "UNKNOWN" | "LOW" | "MEDIUM" | "HIGH" | (string & {});
  /** Email. */
  email?: string;
  /** Attendance status of the person when included in a meeting event. */
  attendingStatus?: "AWAITING" | "YES" | "NO" | "MAYBE" | (string & {});
  /** Absolute URL to the profile photo of the person. */
  photoUrl?: string;
  /** Obfuscated Gaia id. */
  obfuscatedGaiaId?: string;
}

export const EnterpriseTopazSidekickPerson: Schema.Schema<EnterpriseTopazSidekickPerson> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gaiaId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    isGroup: Schema.optional(Schema.Boolean),
    affinityLevel: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    attendingStatus: Schema.optional(Schema.String),
    photoUrl: Schema.optional(Schema.String),
    obfuscatedGaiaId: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterpriseTopazSidekickPerson" });

export interface EnterpriseTopazSidekickAgendaEntry {
  /** Whether the details of this entry should be displayed to the user. */
  showFullEventDetailsToUse?: boolean;
  /** Items related to the current AgendaEntry. E.g., related drive/mail/groups documents. */
  document?: ReadonlyArray<EnterpriseTopazSidekickCommonDocument>;
  /** Person who created the event. */
  creator?: EnterpriseTopazSidekickPerson;
  /** End date "Friday, August 26" in the user's timezone. */
  endDate?: string;
  /** The chronology from the present. */
  chronology?:
    | "STALE"
    | "ALL_DAY"
    | "PAST"
    | "RECENTLY_PAST"
    | "PRESENT"
    | "NEAR_FUTURE"
    | "FUTURE"
    | (string & {});
  /** Start time (HH:mm) in the user's timezone. */
  startTime?: string;
  /** End time (HH:mm) in the user's timezone. */
  endTime?: string;
  /** URL of the agenda item. */
  agendaItemUrl?: string;
  /** Whether the entry lasts all day. */
  isAllDay?: boolean;
  /** Hangout meeting identifier. */
  hangoutId?: string;
  /** Absolute URL for the Hangout meeting. */
  hangoutUrl?: string;
  /** Event id provided by Calendar API. */
  eventId?: string;
  /** Whether guest list is not returned because number of attendees is too large. */
  otherAttendeesExcluded?: boolean;
  /** Start time in milliseconds. */
  startTimeMs?: string;
  /** Description of the agenda item (i.e., typically, summary in calendar event). */
  description?: string;
  /** Agenda item location. */
  location?: string;
  /** End time in milliseconds */
  endTimeMs?: string;
  /** Attendance status for the current user making the request. This is a convenience data member in order to avoid figuring out the same by iterating the invitee list above on the caller side. */
  currentUserAttendingStatus?:
    | "AWAITING"
    | "YES"
    | "NO"
    | "MAYBE"
    | (string & {});
  /** Whether the guests of the event can be seen. If false, the user is going to be reported as the only attendee to the meeting, even though there may be more attendees. */
  guestsCanSeeGuests?: boolean;
  /** Whether the requester is the owner of the agenda entry. */
  requesterIsOwner?: boolean;
  /** People attending the meeting. */
  invitee?: ReadonlyArray<EnterpriseTopazSidekickPerson>;
  /** Title of the agenda item. */
  title?: string;
  /** User's calendar timezone; */
  timeZone?: string;
  /** Whether this should be notified to the user. */
  notifyToUser?: boolean;
  /** Whether the guests can invite other guests. */
  guestsCanInviteOthers?: boolean;
  /** Whether the guests can modify the event. */
  guestsCanModify?: boolean;
  /** Start date "Friday, August 26" in the user's timezone. */
  startDate?: string;
  /** Last time the event was modified. */
  lastModificationTimeMs?: string;
}

export const EnterpriseTopazSidekickAgendaEntry: Schema.Schema<EnterpriseTopazSidekickAgendaEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    showFullEventDetailsToUse: Schema.optional(Schema.Boolean),
    document: Schema.optional(
      Schema.Array(EnterpriseTopazSidekickCommonDocument),
    ),
    creator: Schema.optional(EnterpriseTopazSidekickPerson),
    endDate: Schema.optional(Schema.String),
    chronology: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    agendaItemUrl: Schema.optional(Schema.String),
    isAllDay: Schema.optional(Schema.Boolean),
    hangoutId: Schema.optional(Schema.String),
    hangoutUrl: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    otherAttendeesExcluded: Schema.optional(Schema.Boolean),
    startTimeMs: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    endTimeMs: Schema.optional(Schema.String),
    currentUserAttendingStatus: Schema.optional(Schema.String),
    guestsCanSeeGuests: Schema.optional(Schema.Boolean),
    requesterIsOwner: Schema.optional(Schema.Boolean),
    invitee: Schema.optional(Schema.Array(EnterpriseTopazSidekickPerson)),
    title: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
    notifyToUser: Schema.optional(Schema.Boolean),
    guestsCanInviteOthers: Schema.optional(Schema.Boolean),
    guestsCanModify: Schema.optional(Schema.Boolean),
    startDate: Schema.optional(Schema.String),
    lastModificationTimeMs: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterpriseTopazSidekickAgendaEntry" });

export interface EnterpriseTopazSidekickMeetingNotesCardError {
  /** The description of the reason why create-meeting-notes failed. */
  description?: string;
  /** The reason why create-meeting-notes failed. */
  reason?: "NONE" | "NOT_OWNER" | "UNKNOWN" | (string & {});
  /** The event to request meeting notes creation */
  event?: EnterpriseTopazSidekickAgendaEntry;
}

export const EnterpriseTopazSidekickMeetingNotesCardError: Schema.Schema<EnterpriseTopazSidekickMeetingNotesCardError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    event: Schema.optional(EnterpriseTopazSidekickAgendaEntry),
  }).annotate({ identifier: "EnterpriseTopazSidekickMeetingNotesCardError" });

export interface DebugOptions {
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  enableDebugging?: boolean;
}

export const DebugOptions: Schema.Schema<DebugOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableDebugging: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DebugOptions" });

export interface StartUploadItemRequest {
  /** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
  connectorName?: string;
  /** Common debug options. */
  debugOptions?: DebugOptions;
}

export const StartUploadItemRequest: Schema.Schema<StartUploadItemRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectorName: Schema.optional(Schema.String),
    debugOptions: Schema.optional(DebugOptions),
  }).annotate({ identifier: "StartUploadItemRequest" });

export interface UnreserveItemsRequest {
  /** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
  connectorName?: string;
  /** Common debug options. */
  debugOptions?: DebugOptions;
  /** The name of a queue to unreserve items from. */
  queue?: string;
}

export const UnreserveItemsRequest: Schema.Schema<UnreserveItemsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectorName: Schema.optional(Schema.String),
    debugOptions: Schema.optional(DebugOptions),
    queue: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnreserveItemsRequest" });

export interface CustomerQueryStats {
  queryCountByStatus?: ReadonlyArray<QueryCountByStatus>;
  /** The date for which query stats were calculated. Stats calculated on the next day close to midnight are returned. */
  date?: Cloudsearch_Date;
}

export const CustomerQueryStats: Schema.Schema<CustomerQueryStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryCountByStatus: Schema.optional(Schema.Array(QueryCountByStatus)),
    date: Schema.optional(Cloudsearch_Date),
  }).annotate({ identifier: "CustomerQueryStats" });

export interface EnterpriseTopazFrontendTeamsLink {
  /** The identifying link type */
  type?: string;
  url?: SafeUrlProto;
}

export const EnterpriseTopazFrontendTeamsLink: Schema.Schema<EnterpriseTopazFrontendTeamsLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    url: Schema.optional(SafeUrlProto),
  }).annotate({ identifier: "EnterpriseTopazFrontendTeamsLink" });

export interface MapTile {
  /** Map tile x coordinate */
  tileX?: number;
  /** URL to an image file containing an office layout of the user's location for their organization, if one is available. For google.com, this image is from Corp Campus Maps. */
  imageUrl?: SafeUrlProto;
  /** Map tile y coordinate */
  tileY?: number;
}

export const MapTile: Schema.Schema<MapTile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tileX: Schema.optional(Schema.Number),
    imageUrl: Schema.optional(SafeUrlProto),
    tileY: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MapTile" });

export interface MapInfo {
  /** URL to a view of a map centered on the user's work location in Campus Maps (for google.com) or Google Maps (external). */
  locationUrl?: SafeUrlProto;
  /** Latitude in degrees */
  lat?: number;
  /** Longitude in degrees */
  long?: number;
  /** MapTiles for the area around a user's work location */
  mapTile?: ReadonlyArray<MapTile>;
  /** The zoom level of the map. A constant zoom value of 18 is used for now to match the zoom of the map shown on a Moma Teams Profile page */
  zoom?: number;
}

export const MapInfo: Schema.Schema<MapInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationUrl: Schema.optional(SafeUrlProto),
    lat: Schema.optional(Schema.Number),
    long: Schema.optional(Schema.Number),
    mapTile: Schema.optional(Schema.Array(MapTile)),
    zoom: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MapInfo" });

export interface PersonCore {
  /** The profile owner's direct dotted line managers in no particular order. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. */
  dottedLineManagers?: ReadonlyArray<PersonCore>;
  /** Instructions for how to address this person (e.g. custom pronouns). For google.com this is a set of pronouns from a defined list of options. */
  addressMeAs?: string;
  /** Person birthday. */
  birthday?: Cloudsearch_Date;
  /** Custom mission statement the profile owner has added. */
  mission?: string;
  /** Full-time equivalent (in ‰) (e.g. 800 for a person who's working 80%). */
  ftePermille?: string;
  waldoComeBackTime?: string;
  /** Human-readable Unicode display name. */
  name?: string;
  /** The URL to open the profile owner's primary calendar. */
  calendarUrl?: SafeUrlProto;
  gmailUrl?: string;
  /** E-mail addresses of the person. The primary or preferred email should be first. */
  emails?: ReadonlyArray<string>;
  /** List of keys to use from the map 'keywords'. */
  keywordTypes?: ReadonlyArray<string>;
  /** A subset of the profile owner's dotted-line reports. The number of entities here may be less than total_dlr_count. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. */
  dottedLineReports?: ReadonlyArray<PersonCore>;
  /** Custom links the profile owner has added. */
  links?: ReadonlyArray<EnterpriseTopazFrontendTeamsLink>;
  /** Profile owner's job title (e.g. "Software Engineer"). For google.com this is the Workday preferred job title. */
  jobTitle?: string;
  /** The person's obfuscated Gaia ID. */
  personId?: string;
  phoneNumbers?: ReadonlyArray<EnterpriseTopazFrontendTeamsPersonCorePhoneNumber>;
  /** The sum of all profile owner's reports and their own full-time-equivalents in ‰ (e.g. 1800 if one report is working 80% and profile owner 100%). */
  totalFteCount?: string;
  /** The profile owner's admins in no particular order. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. */
  admins?: ReadonlyArray<PersonCore>;
  /** Person's employee number (external ID of type "organization") For google.com this is the badge number (e.g. 2 for Larry Page). */
  employeeId?: string;
  availabilityStatus?:
    | "UNKNOWN"
    | "OUT_OF_OFFICE"
    | "OUTSIDE_WORKING_HOURS"
    | "AVAILABLE"
    | (string & {});
  /** Person's cost center as a string, e.g. "926: Googler Apps". */
  costCenter?: string;
  /** Postal address of office/building. */
  postalAddress?: string;
  /** Person photo. */
  photoUrl?: SafeUrlProto;
  /** People the profile owner is an admin to. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. */
  adminTo?: ReadonlyArray<PersonCore>;
  /** Custom keywords the domain admin has added. */
  keywords?: Record<string, string>;
  /** A fingerprint used by PAPI to reliably determine if a resource has changed Externally it is used as part of the etag. */
  fingerprint?: string;
  /** Office/building identifier within the company. For google.com this is the office code (e.g. "DE-MUC-ARP"). */
  officeLocation?: string;
  /** The URL to start a chat conversation with the profile owner. For google.com this is a Hangouts URL. */
  chatUrl?: SafeUrlProto;
  geoLocation?: MapInfo;
  /** The profile owner's management chain from top to bottom, where managers[0] is the CEO, manager[N-2] is the person's manager's manager and managers[N-1] is the person's direct manager. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. */
  managers?: ReadonlyArray<PersonCore>;
  /** A subset of the profile owner's direct reports. The number of entities here may be less than total_direct_reports_count, because typically ProfileResponse does not include all the person's reports, if there are too many to retrieve efficiently. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. */
  directReports?: ReadonlyArray<PersonCore>;
  /** Total count of the profile owner's dotted-line reports. */
  totalDlrCount?: number;
  /** Total count of the profile owner's direct reports. */
  totalDirectReportsCount?: number;
  /** The person's Organization department, e.g. "People Operations". For google.com this is usually called "area". */
  department?: string;
  /** External ID of type "login_id" for the profile. For google.com this is the username/LDAP. */
  username?: string;
  /** Detailed desk location within the company. For google.com this is the desk location code (e.g. "DE-MUC-ARP-6T2-6T2C0C") if the person has a desk. */
  location?: string;
}

export const PersonCore: Schema.Schema<PersonCore> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dottedLineManagers: Schema.optional(Schema.Array(PersonCore)),
      addressMeAs: Schema.optional(Schema.String),
      birthday: Schema.optional(Cloudsearch_Date),
      mission: Schema.optional(Schema.String),
      ftePermille: Schema.optional(Schema.String),
      waldoComeBackTime: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      calendarUrl: Schema.optional(SafeUrlProto),
      gmailUrl: Schema.optional(Schema.String),
      emails: Schema.optional(Schema.Array(Schema.String)),
      keywordTypes: Schema.optional(Schema.Array(Schema.String)),
      dottedLineReports: Schema.optional(Schema.Array(PersonCore)),
      links: Schema.optional(Schema.Array(EnterpriseTopazFrontendTeamsLink)),
      jobTitle: Schema.optional(Schema.String),
      personId: Schema.optional(Schema.String),
      phoneNumbers: Schema.optional(
        Schema.Array(EnterpriseTopazFrontendTeamsPersonCorePhoneNumber),
      ),
      totalFteCount: Schema.optional(Schema.String),
      admins: Schema.optional(Schema.Array(PersonCore)),
      employeeId: Schema.optional(Schema.String),
      availabilityStatus: Schema.optional(Schema.String),
      costCenter: Schema.optional(Schema.String),
      postalAddress: Schema.optional(Schema.String),
      photoUrl: Schema.optional(SafeUrlProto),
      adminTo: Schema.optional(Schema.Array(PersonCore)),
      keywords: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      fingerprint: Schema.optional(Schema.String),
      officeLocation: Schema.optional(Schema.String),
      chatUrl: Schema.optional(SafeUrlProto),
      geoLocation: Schema.optional(MapInfo),
      managers: Schema.optional(Schema.Array(PersonCore)),
      directReports: Schema.optional(Schema.Array(PersonCore)),
      totalDlrCount: Schema.optional(Schema.Number),
      totalDirectReportsCount: Schema.optional(Schema.Number),
      department: Schema.optional(Schema.String),
      username: Schema.optional(Schema.String),
      location: Schema.optional(Schema.String),
    }),
  ).annotate({ identifier: "PersonCore" }) as any as Schema.Schema<PersonCore>;

export interface CustomerSearchApplicationStats {
  /** The count of search applications for the date. */
  count?: string;
  /** The date for which search application stats were calculated. */
  date?: Cloudsearch_Date;
}

export const CustomerSearchApplicationStats: Schema.Schema<CustomerSearchApplicationStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
    date: Schema.optional(Cloudsearch_Date),
  }).annotate({ identifier: "CustomerSearchApplicationStats" });

export interface GetCustomerSearchApplicationStatsResponse {
  /** Search application stats by date. */
  stats?: ReadonlyArray<CustomerSearchApplicationStats>;
  /** Average search application count for the given date range. */
  averageSearchApplicationCount?: string;
}

export const GetCustomerSearchApplicationStatsResponse: Schema.Schema<GetCustomerSearchApplicationStatsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stats: Schema.optional(Schema.Array(CustomerSearchApplicationStats)),
    averageSearchApplicationCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetCustomerSearchApplicationStatsResponse" });

export interface RequestOptions {
  /** Debug options of the request */
  debugOptions?: DebugOptions;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. The Suggest API uses this field as a hint to make better third-party autocomplete predictions. */
  languageCode?: string;
  /** Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used. */
  timeZone?: string;
  /** The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922). */
  searchApplicationId?: string;
  /** The BCP-47 language code, such as "pt" or "en". It represents the user's preferred Display Language. */
  clientDisplayLanguageCode?: string;
}

export const RequestOptions: Schema.Schema<RequestOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    debugOptions: Schema.optional(DebugOptions),
    languageCode: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
    searchApplicationId: Schema.optional(Schema.String),
    clientDisplayLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "RequestOptions" });

export interface SuggestRequest {
  /** The sources to use for suggestions. If not specified, the data sources are taken from the current search application. NOTE: Suggestions are only supported for the following sources: * Third-party data sources * PredefinedSource.PERSON * PredefinedSource.GOOGLE_DRIVE */
  dataSourceRestrictions?: ReadonlyArray<DataSourceRestriction>;
  /** Request options, such as the search application and user timezone. */
  requestOptions?: RequestOptions;
  /** Partial query for which autocomplete suggestions will be shown. For example, if the query is "sea", then the server might return "season", "search", "seagull" and so on. */
  query?: string;
}

export const SuggestRequest: Schema.Schema<SuggestRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSourceRestrictions: Schema.optional(
      Schema.Array(DataSourceRestriction),
    ),
    requestOptions: Schema.optional(RequestOptions),
    query: Schema.optional(Schema.String),
  }).annotate({ identifier: "SuggestRequest" });

export interface QuerySuggestion {
  /** Last query time of the suggestion for query history suggestions. */
  lastQueryTime?: string;
  /** Source corpus of the suggestion. */
  sourceCorpus?:
    | "SOURCE_CORPUS_UNSPECIFIED"
    | "GMAIL"
    | "DRIVE"
    | "CHAT"
    | "CALENDAR"
    | (string & {});
}

export const QuerySuggestion: Schema.Schema<QuerySuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastQueryTime: Schema.optional(Schema.String),
    sourceCorpus: Schema.optional(Schema.String),
  }).annotate({ identifier: "QuerySuggestion" });

export interface Name {
  /** The read-only display name formatted according to the locale specified by the viewer's account or the `Accept-Language` HTTP header. */
  displayName?: string;
}

export const Name: Schema.Schema<Name> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Name" });

export interface Photo {
  /** The URL of the photo. */
  url?: string;
}

export const Photo: Schema.Schema<Photo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "Photo" });

export interface Person {
  /** The person's name */
  personNames?: ReadonlyArray<Name>;
  /** A person's read-only photo. A picture shown next to the person's name to help others recognize the person in search results. */
  photos?: ReadonlyArray<Photo>;
  /** The resource name of the person to provide information about. See [`People.get`](https://developers.google.com/people/api/rest/v1/people/get) from the Google People API. */
  name?: string;
  /** Obfuscated ID of a person. */
  obfuscatedId?: string;
  /** The person's email addresses */
  emailAddresses?: ReadonlyArray<EmailAddress>;
  /** The person's phone numbers */
  phoneNumbers?: ReadonlyArray<PhoneNumber>;
}

export const Person: Schema.Schema<Person> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    personNames: Schema.optional(Schema.Array(Name)),
    photos: Schema.optional(Schema.Array(Photo)),
    name: Schema.optional(Schema.String),
    obfuscatedId: Schema.optional(Schema.String),
    emailAddresses: Schema.optional(Schema.Array(EmailAddress)),
    phoneNumbers: Schema.optional(Schema.Array(PhoneNumber)),
  }).annotate({ identifier: "Person" });

export interface PeopleSuggestion {
  /** Suggested person. All fields of the person object might not be populated. */
  person?: Person;
}

export const PeopleSuggestion: Schema.Schema<PeopleSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    person: Schema.optional(Person),
  }).annotate({ identifier: "PeopleSuggestion" });

export interface SuggestResult {
  /** This field will be present if the suggested query is a word/phrase completion. */
  querySuggestion?: QuerySuggestion;
  /** The source of the suggestion. */
  source?: Source;
  /** The suggested query that will be used for search, when the user clicks on the suggestion */
  suggestedQuery?: string;
  /** This is present when the suggestion indicates a person. It contains more information about the person - like their email ID, name etc. */
  peopleSuggestion?: PeopleSuggestion;
}

export const SuggestResult: Schema.Schema<SuggestResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    querySuggestion: Schema.optional(QuerySuggestion),
    source: Schema.optional(Source),
    suggestedQuery: Schema.optional(Schema.String),
    peopleSuggestion: Schema.optional(PeopleSuggestion),
  }).annotate({ identifier: "SuggestResult" });

export interface SuggestResponse {
  /** List of suggestions. */
  suggestResults?: ReadonlyArray<SuggestResult>;
}

export const SuggestResponse: Schema.Schema<SuggestResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestResults: Schema.optional(Schema.Array(SuggestResult)),
  }).annotate({ identifier: "SuggestResponse" });

export interface DoubleOperatorOptions {
  /** Indicates the operator name required in the query in order to use the double property in sorting or as a facet. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
  operatorName?: string;
}

export const DoubleOperatorOptions: Schema.Schema<DoubleOperatorOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatorName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DoubleOperatorOptions" });

export interface IndexItemOptions {
  /** Specifies if the index request should allow Google Workspace principals that do not exist or are deleted. */
  allowUnknownGsuitePrincipals?: boolean;
}

export const IndexItemOptions: Schema.Schema<IndexItemOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowUnknownGsuitePrincipals: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "IndexItemOptions" });

export interface EnumOperatorOptions {
  /** Indicates the operator name required in the query in order to isolate the enum property. For example, if operatorName is *priority* and the property's name is *priorityVal*, then queries like *priority:<value>* show results only where the value of the property named *priorityVal* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
  operatorName?: string;
}

export const EnumOperatorOptions: Schema.Schema<EnumOperatorOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatorName: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnumOperatorOptions" });

export interface EnumValuePair {
  /** The string value of the EnumValuePair. The maximum length is 32 characters. */
  stringValue?: string;
  /** The integer value of the EnumValuePair which must be non-negative. Optional. */
  integerValue?: number;
}

export const EnumValuePair: Schema.Schema<EnumValuePair> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stringValue: Schema.optional(Schema.String),
    integerValue: Schema.optional(Schema.Number),
  }).annotate({ identifier: "EnumValuePair" });

export interface EnumPropertyOptions {
  /** If set, describes how the enum should be used as a search operator. */
  operatorOptions?: EnumOperatorOptions;
  /** The list of possible values for the enumeration property. All EnumValuePairs must provide a string value. If you specify an integer value for one EnumValuePair, then all possible EnumValuePairs must provide an integer value. Both the string value and integer value must be unique over all possible values. Once set, possible values cannot be removed or modified. If you supply an ordered ranking and think you might insert additional enum values in the future, leave gaps in the initial integer values to allow adding a value in between previously registered values. The maximum number of elements is 100. */
  possibleValues?: ReadonlyArray<EnumValuePair>;
  /** Used to specify the ordered ranking for the enumeration that determines how the integer values provided in the possible EnumValuePairs are used to rank results. If specified, integer values must be provided for all possible EnumValuePair values given for this property. Can only be used if isRepeatable is false. */
  orderedRanking?: "NO_ORDER" | "ASCENDING" | "DESCENDING" | (string & {});
}

export const EnumPropertyOptions: Schema.Schema<EnumPropertyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatorOptions: Schema.optional(EnumOperatorOptions),
    possibleValues: Schema.optional(Schema.Array(EnumValuePair)),
    orderedRanking: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnumPropertyOptions" });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface RemoveActivityResponse {}

export const RemoveActivityResponse: Schema.Schema<RemoveActivityResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RemoveActivityResponse",
  });

export interface PropertyDisplayOptions {
  /** The user friendly label for the property that is used if the property is specified to be displayed in ObjectDisplayOptions. If provided, the display label is shown in front of the property values when the property is part of the object display options. For example, if the property value is '1', the value by itself may not be useful context for the user. If the display name given was 'priority', then the user sees 'priority : 1' in the search results which provides clear context to search users. This is OPTIONAL; if not given, only the property values are displayed. The maximum length is 64 characters. */
  displayLabel?: string;
}

export const PropertyDisplayOptions: Schema.Schema<PropertyDisplayOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayLabel: Schema.optional(Schema.String),
  }).annotate({ identifier: "PropertyDisplayOptions" });

export interface DataSource {
  /** Can a user request to get thumbnail URI for Items indexed in this data source. */
  returnThumbnailUrls?: boolean;
  /** Disable serving any search or assist results. */
  disableServing?: boolean;
  /** List of service accounts that have indexing access. */
  indexingServiceAccounts?: ReadonlyArray<string>;
  /** If true, sets the datasource to read-only mode. In read-only mode, the Indexing API rejects any requests to index or delete items in this source. Enabling read-only mode does not stop the processing of previously accepted data. */
  disableModifications?: boolean;
  /** A short name or alias for the source. This value will be used to match the 'source' operator. For example, if the short name is *<value>* then queries like *source:<value>* will only return results for this source. The value must be unique across all datasources. The value must only contain alphanumeric characters (a-zA-Z0-9). The value cannot start with 'google' and cannot be one of the following: mail, gmail, docs, drive, groups, sites, calendar, hangouts, gplus, keep, people, teams. Its maximum length is 32 characters. */
  shortName?: string;
  /** This field restricts visibility to items at the datasource level. Items within the datasource are restricted to the union of users and groups included in this field. Note that, this does not ensure access to a specific item, as users need to have ACL permissions on the contained items. This ensures a high level access on the entire datasource, and that the individual items are not shared outside this visibility. */
  itemsVisibility?: ReadonlyArray<GSuitePrincipal>;
  /** The name of the datasource resource. Format: datasources/{source_id}. The name is ignored when creating a datasource. */
  name?: string;
  /** Required. Display name of the datasource The maximum length is 300 characters. */
  displayName?: string;
  /** IDs of the Long Running Operations (LROs) currently running for this schema. */
  operationIds?: ReadonlyArray<string>;
}

export const DataSource: Schema.Schema<DataSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnThumbnailUrls: Schema.optional(Schema.Boolean),
    disableServing: Schema.optional(Schema.Boolean),
    indexingServiceAccounts: Schema.optional(Schema.Array(Schema.String)),
    disableModifications: Schema.optional(Schema.Boolean),
    shortName: Schema.optional(Schema.String),
    itemsVisibility: Schema.optional(Schema.Array(GSuitePrincipal)),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    operationIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DataSource" });

export interface DriveTimeSpanRestrict {
  type?:
    | "UNSPECIFIED"
    | "TODAY"
    | "YESTERDAY"
    | "LAST_7_DAYS"
    | "LAST_30_DAYS"
    | "LAST_90_DAYS"
    | (string & {});
}

export const DriveTimeSpanRestrict: Schema.Schema<DriveTimeSpanRestrict> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "DriveTimeSpanRestrict" });

export interface Metaline {
  /** The list of displayed properties for the metaline. The maximum number of properties is 5. */
  properties?: ReadonlyArray<DisplayedProperty>;
}

export const Metaline: Schema.Schema<Metaline> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Array(DisplayedProperty)),
  }).annotate({ identifier: "Metaline" });

export interface ObjectDisplayOptions {
  /** The user friendly label to display in the search result to indicate the type of the item. This is OPTIONAL; if not provided, an object label isn't displayed on the context line of the search results. The maximum length is 64 characters. */
  objectDisplayLabel?: string;
  /** Defines the properties that are displayed in the metalines of the search results. The property values are displayed in the order given here. If a property holds multiple values, all of the values are displayed before the next properties. For this reason, it is a good practice to specify singular properties before repeated properties in this list. All of the properties must set is_returnable to true. The maximum number of metalines is 3. */
  metalines?: ReadonlyArray<Metaline>;
}

export const ObjectDisplayOptions: Schema.Schema<ObjectDisplayOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectDisplayLabel: Schema.optional(Schema.String),
    metalines: Schema.optional(Schema.Array(Metaline)),
  }).annotate({ identifier: "ObjectDisplayOptions" });

export interface FreshnessOptions {
  /** This property indicates the freshness level of the object in the index. If set, this property must be a top-level property within the property definitions and it must be a timestamp type or date type. Otherwise, the Indexing API uses updateTime as the freshness indicator. The maximum length is 256 characters. When a property is used to calculate freshness, the value defaults to 2 years from the current time. */
  freshnessProperty?: string;
  /** The duration after which an object should be considered stale. The default value is 180 days (in seconds). */
  freshnessDuration?: string;
}

export const FreshnessOptions: Schema.Schema<FreshnessOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    freshnessProperty: Schema.optional(Schema.String),
    freshnessDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "FreshnessOptions" });

export interface ObjectOptions {
  /** The freshness options for an object. */
  freshnessOptions?: FreshnessOptions;
  /** Operators that can be used to filter suggestions. For Suggest API, only operators mentioned here will be honored in the FilterOptions. Only TEXT and ENUM operators are supported. NOTE: "objecttype", "type" and "mimetype" are already supported. This property is to configure schema specific operators. Even though this is an array, only one operator can be specified. This is an array for future extensibility. Operators mapping to multiple properties within the same object are not supported. If the operator spans across different object types, this option has to be set once for each object definition. */
  suggestionFilteringOperators?: ReadonlyArray<string>;
  /** The options that determine how the object is displayed in the Cloud Search results page. */
  displayOptions?: ObjectDisplayOptions;
}

export const ObjectOptions: Schema.Schema<ObjectOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    freshnessOptions: Schema.optional(FreshnessOptions),
    suggestionFilteringOperators: Schema.optional(Schema.Array(Schema.String)),
    displayOptions: Schema.optional(ObjectDisplayOptions),
  }).annotate({ identifier: "ObjectOptions" });

export interface QueryActivity {
  /** User input query to be logged/removed. */
  query?: string;
}

export const QueryActivity: Schema.Schema<QueryActivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryActivity" });

export interface UserActivity {
  /** Contains data which needs to be logged/removed. */
  queryActivity?: QueryActivity;
}

export const UserActivity: Schema.Schema<UserActivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryActivity: Schema.optional(QueryActivity),
  }).annotate({ identifier: "UserActivity" });

export interface RemoveActivityRequest {
  /** User Activity containing the data to be deleted. */
  userActivity?: UserActivity;
  /** Request options, such as the search application and clientId. */
  requestOptions?: RequestOptions;
}

export const RemoveActivityRequest: Schema.Schema<RemoveActivityRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userActivity: Schema.optional(UserActivity),
    requestOptions: Schema.optional(RequestOptions),
  }).annotate({ identifier: "RemoveActivityRequest" });

export interface ListItemsResponse {
  items?: ReadonlyArray<Item>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const ListItemsResponse: Schema.Schema<ListItemsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Item)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListItemsResponse" });

export interface QueryInterpretationOptions {
  /** Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental result retrieval, and usage of synonyms including custom ones. Nl interpretation will be disabled if either one of the two flags is true. */
  enableVerbatimMode?: boolean;
  /** Use this flag to disable supplemental results for a query. Supplemental results setting chosen at SearchApplication level will take precedence if set to True. */
  disableSupplementalResults?: boolean;
  /** Flag to disable natural language (NL) interpretation of queries. Default is false, Set to true to disable natural language interpretation. NL interpretation only applies to predefined datasources. */
  disableNlInterpretation?: boolean;
}

export const QueryInterpretationOptions: Schema.Schema<QueryInterpretationOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableVerbatimMode: Schema.optional(Schema.Boolean),
    disableSupplementalResults: Schema.optional(Schema.Boolean),
    disableNlInterpretation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "QueryInterpretationOptions" });

export interface EnterpriseTopazSidekickPersonProfileCardRelatedPeople {
  /** Relation type. */
  relation?: "UNKNOWN" | "MANAGER" | "DIRECT_REPORT" | (string & {});
  /** Related people. */
  relatedPerson?: ReadonlyArray<EnterpriseTopazSidekickCommonPerson>;
}

export const EnterpriseTopazSidekickPersonProfileCardRelatedPeople: Schema.Schema<EnterpriseTopazSidekickPersonProfileCardRelatedPeople> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relation: Schema.optional(Schema.String),
    relatedPerson: Schema.optional(
      Schema.Array(EnterpriseTopazSidekickCommonPerson),
    ),
  }).annotate({
    identifier: "EnterpriseTopazSidekickPersonProfileCardRelatedPeople",
  });

export interface ResultCounts {
  /** Result count information for each source with results. */
  sourceResultCounts?: ReadonlyArray<SourceResultCount>;
}

export const ResultCounts: Schema.Schema<ResultCounts> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceResultCounts: Schema.optional(Schema.Array(SourceResultCount)),
  }).annotate({ identifier: "ResultCounts" });

export interface Metadata {
  /** Owner (usually creator) of the document or object of the search result. */
  owner?: Person;
  /** The last modified date for the object in the search result. If not set in the item, the value returned here is empty. When `updateTime` is used for calculating freshness and is not set, this value defaults to 2 years from the current time. */
  updateTime?: string;
  /** Mime type of the search result. */
  mimeType?: string;
  /** Options that specify how to display a structured data search result. */
  displayOptions?: ResultDisplayMetadata;
  /** The thumbnail URL of the result. */
  thumbnailUrl?: string;
  /** The named source for the result, such as Gmail. */
  source?: Source;
  /** Indexed fields in structured data, returned as a generic named property. */
  fields?: ReadonlyArray<NamedProperty>;
  /** The creation time for this document or object in the search result. */
  createTime?: string;
  /** Object type of the search result. */
  objectType?: string;
}

export const Metadata: Schema.Schema<Metadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    owner: Schema.optional(Person),
    updateTime: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
    displayOptions: Schema.optional(ResultDisplayMetadata),
    thumbnailUrl: Schema.optional(Schema.String),
    source: Schema.optional(Source),
    fields: Schema.optional(Schema.Array(NamedProperty)),
    createTime: Schema.optional(Schema.String),
    objectType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Metadata" });

export interface DataSourceIndexStats {
  /** The date for which index stats were calculated. If the date of request is not the current date then stats calculated on the next day are returned. Stats are calculated close to mid night in this case. If date of request is current date, then real time stats are returned. */
  date?: Cloudsearch_Date;
  /** Number of items aggregrated by status code. */
  itemCountByStatus?: ReadonlyArray<ItemCountByStatus>;
}

export const DataSourceIndexStats: Schema.Schema<DataSourceIndexStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.optional(Cloudsearch_Date),
    itemCountByStatus: Schema.optional(Schema.Array(ItemCountByStatus)),
  }).annotate({ identifier: "DataSourceIndexStats" });

export interface EnterpriseTopazSidekickAgendaGroupCardProtoContext {
  /** User friendly free text that describes the context of the card (e.g. "Next meeting with Bob"). This is largely only applicable when the card is generated from a query. */
  context?: string;
  /** Localized free text that describes the dates represented by the card. Currently, the card will only represent a single day. */
  date?: string;
  /** Represents restrictions applied to the events requested in the user's query. */
  eventsRestrict?: "NONE" | "NEXT_MEETING" | (string & {});
}

export const EnterpriseTopazSidekickAgendaGroupCardProtoContext: Schema.Schema<EnterpriseTopazSidekickAgendaGroupCardProtoContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    context: Schema.optional(Schema.String),
    date: Schema.optional(Schema.String),
    eventsRestrict: Schema.optional(Schema.String),
  }).annotate({
    identifier: "EnterpriseTopazSidekickAgendaGroupCardProtoContext",
  });

export interface EnterpriseTopazSidekickConflictingEventsCardProto {
  /** All the events that conflict with main_event. */
  conflictingEvent?: ReadonlyArray<EnterpriseTopazSidekickAgendaEntry>;
  /** The event identified as being the most important. */
  mainEvent?: EnterpriseTopazSidekickAgendaEntry;
}

export const EnterpriseTopazSidekickConflictingEventsCardProto: Schema.Schema<EnterpriseTopazSidekickConflictingEventsCardProto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conflictingEvent: Schema.optional(
      Schema.Array(EnterpriseTopazSidekickAgendaEntry),
    ),
    mainEvent: Schema.optional(EnterpriseTopazSidekickAgendaEntry),
  }).annotate({
    identifier: "EnterpriseTopazSidekickConflictingEventsCardProto",
  });

export interface EnterpriseTopazSidekickGap {
  /** Localized time string in the format:(Locale CZ) 8:30 odp. */
  startTime?: string;
  /** Localized time string in the format: 1 hour 15 minutes */
  displayRemainingTime?: string;
  endTimeMs?: string;
  /** Localized time string in the format:(Locale CZ) 8:30 odp. */
  endTime?: string;
  startTimeMs?: string;
  remainingTime?: string;
}

export const EnterpriseTopazSidekickGap: Schema.Schema<EnterpriseTopazSidekickGap> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    displayRemainingTime: Schema.optional(Schema.String),
    endTimeMs: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    startTimeMs: Schema.optional(Schema.String),
    remainingTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterpriseTopazSidekickGap" });

export interface EnterpriseTopazSidekickAgendaItem {
  conflictedGroup?: EnterpriseTopazSidekickConflictingEventsCardProto;
  gapBefore?: EnterpriseTopazSidekickGap;
  meeting?: EnterpriseTopazSidekickAgendaEntry;
}

export const EnterpriseTopazSidekickAgendaItem: Schema.Schema<EnterpriseTopazSidekickAgendaItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conflictedGroup: Schema.optional(
      EnterpriseTopazSidekickConflictingEventsCardProto,
    ),
    gapBefore: Schema.optional(EnterpriseTopazSidekickGap),
    meeting: Schema.optional(EnterpriseTopazSidekickAgendaEntry),
  }).annotate({ identifier: "EnterpriseTopazSidekickAgendaItem" });

export interface EnterpriseTopazSidekickAgendaGroupCardProto {
  context?: EnterpriseTopazSidekickAgendaGroupCardProtoContext;
  currentAgendaItem?: EnterpriseTopazSidekickAgendaItem;
  agendaItem?: ReadonlyArray<EnterpriseTopazSidekickAgendaItem>;
}

export const EnterpriseTopazSidekickAgendaGroupCardProto: Schema.Schema<EnterpriseTopazSidekickAgendaGroupCardProto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    context: Schema.optional(
      EnterpriseTopazSidekickAgendaGroupCardProtoContext,
    ),
    currentAgendaItem: Schema.optional(EnterpriseTopazSidekickAgendaItem),
    agendaItem: Schema.optional(
      Schema.Array(EnterpriseTopazSidekickAgendaItem),
    ),
  }).annotate({ identifier: "EnterpriseTopazSidekickAgendaGroupCardProto" });

export interface SafeHtmlProto {
  /** IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message. */
  privateDoNotAccessOrElseSafeHtmlWrappedValue?: string;
}

export const SafeHtmlProto: Schema.Schema<SafeHtmlProto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateDoNotAccessOrElseSafeHtmlWrappedValue: Schema.optional(
      Schema.String,
    ),
  }).annotate({ identifier: "SafeHtmlProto" });

export interface EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer {
  /** A localized label for the answer (e.g. "Cell phone" vs "Desk phone"). */
  label?: string;
  /** The free text answer. */
  answer?: string;
}

export const EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer: Schema.Schema<EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    answer: Schema.optional(Schema.String),
  }).annotate({
    identifier: "EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer",
  });

export interface EnterpriseTopazSidekickAnswerAnswerList {
  /** Answer type. */
  type?:
    | "UNKNOWN"
    | "PERSON_ADDRESS"
    | "PERSON_BIRTHDAY"
    | "PERSON_DEPARTMENT"
    | "PERSON_DESK_LOCATION"
    | "PERSON_EMAIL"
    | "PERSON_JOB_TITLE"
    | "PERSON_PHONE"
    | (string & {});
  /** Answers that have a corresponding label. */
  labeledAnswer?: ReadonlyArray<EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer>;
}

export const EnterpriseTopazSidekickAnswerAnswerList: Schema.Schema<EnterpriseTopazSidekickAnswerAnswerList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    labeledAnswer: Schema.optional(
      Schema.Array(EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer),
    ),
  }).annotate({ identifier: "EnterpriseTopazSidekickAnswerAnswerList" });

export interface EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard {
  /** Localized user friendly message to display to the user in the case of missing data or an error. */
  statusMessage?: string;
  /** The response status. */
  responseStatus?:
    | "UNKNOWN"
    | "SUCCESS"
    | "MISSING_PERSON"
    | "MISSING_DATA"
    | (string & {});
  /** The header to display for the card. */
  header?: EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeader;
  /** The profile of the person that was the subject of the query. */
  subject?: EnterpriseTopazSidekickCommonPerson;
  /** List of answers. */
  answer?: ReadonlyArray<SafeHtmlProto>;
  /** List of answers. */
  answerText?: EnterpriseTopazSidekickAnswerAnswerList;
  /** Disambiguation information. */
  disambiguationInfo?: EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo;
}

export const EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard: Schema.Schema<EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusMessage: Schema.optional(Schema.String),
    responseStatus: Schema.optional(Schema.String),
    header: Schema.optional(
      EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeader,
    ),
    subject: Schema.optional(EnterpriseTopazSidekickCommonPerson),
    answer: Schema.optional(Schema.Array(SafeHtmlProto)),
    answerText: Schema.optional(EnterpriseTopazSidekickAnswerAnswerList),
    disambiguationInfo: Schema.optional(
      EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo,
    ),
  }).annotate({
    identifier: "EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard",
  });

export interface ResetSearchApplicationRequest {
  /** Common debug options. */
  debugOptions?: DebugOptions;
}

export const ResetSearchApplicationRequest: Schema.Schema<ResetSearchApplicationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    debugOptions: Schema.optional(DebugOptions),
  }).annotate({ identifier: "ResetSearchApplicationRequest" });

export interface TimestampOperatorOptions {
  /** Indicates the operator name required in the query in order to isolate the timestamp property using the greater-than operator. For example, if greaterThanOperatorName is *closedafter* and the property's name is *closeDate*, then queries like *closedafter:<value>* show results only where the value of the property named *closeDate* is later than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
  greaterThanOperatorName?: string;
  /** Indicates the operator name required in the query in order to isolate the timestamp property using the less-than operator. For example, if lessThanOperatorName is *closedbefore* and the property's name is *closeDate*, then queries like *closedbefore:<value>* show results only where the value of the property named *closeDate* is earlier than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
  lessThanOperatorName?: string;
  /** Indicates the operator name required in the query in order to isolate the timestamp property. For example, if operatorName is *closedon* and the property's name is *closeDate*, then queries like *closedon:<value>* show results only where the value of the property named *closeDate* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
  operatorName?: string;
}

export const TimestampOperatorOptions: Schema.Schema<TimestampOperatorOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    greaterThanOperatorName: Schema.optional(Schema.String),
    lessThanOperatorName: Schema.optional(Schema.String),
    operatorName: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimestampOperatorOptions" });

export interface TimestampPropertyOptions {
  /** If set, describes how the timestamp should be used as a search operator. */
  operatorOptions?: TimestampOperatorOptions;
}

export const TimestampPropertyOptions: Schema.Schema<TimestampPropertyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatorOptions: Schema.optional(TimestampOperatorOptions),
  }).annotate({ identifier: "TimestampPropertyOptions" });

export interface HtmlOperatorOptions {
  /** Indicates the operator name required in the query in order to isolate the html property. For example, if operatorName is *subject* and the property's name is *subjectLine*, then queries like *subject:<value>* show results only where the value of the property named *subjectLine* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator return all items where *<value>* matches the value of any html properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
  operatorName?: string;
}

export const HtmlOperatorOptions: Schema.Schema<HtmlOperatorOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatorName: Schema.optional(Schema.String),
  }).annotate({ identifier: "HtmlOperatorOptions" });

export interface RetrievalImportance {
  /** Indicates the ranking importance given to property when it is matched during retrieval. Once set, the token importance of a property cannot be changed. */
  importance?: "DEFAULT" | "HIGHEST" | "HIGH" | "LOW" | "NONE" | (string & {});
}

export const RetrievalImportance: Schema.Schema<RetrievalImportance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    importance: Schema.optional(Schema.String),
  }).annotate({ identifier: "RetrievalImportance" });

export interface HtmlPropertyOptions {
  /** If set, describes how the property should be used as a search operator. */
  operatorOptions?: HtmlOperatorOptions;
  /** Indicates the search quality importance of the tokens within the field when used for retrieval. Can only be set to DEFAULT or NONE. */
  retrievalImportance?: RetrievalImportance;
}

export const HtmlPropertyOptions: Schema.Schema<HtmlPropertyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatorOptions: Schema.optional(HtmlOperatorOptions),
    retrievalImportance: Schema.optional(RetrievalImportance),
  }).annotate({ identifier: "HtmlPropertyOptions" });

export interface EnterpriseTopazSidekickNlpMetadata {
  /** Confidence of the interpretation that generated this card. */
  confidence?: number;
}

export const EnterpriseTopazSidekickNlpMetadata: Schema.Schema<EnterpriseTopazSidekickNlpMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "EnterpriseTopazSidekickNlpMetadata" });

export interface PushItem {
  /** Provides additional document state information for the connector, such as an alternate repository ID and other metadata. The maximum length is 8192 bytes. */
  payload?: string;
  /** Queue to which this item belongs. The `default` queue is chosen if this field is not specified. The maximum length is 512 characters. */
  queue?: string;
  /** The type of the push operation that defines the push behavior. */
  type?:
    | "UNSPECIFIED"
    | "MODIFIED"
    | "NOT_MODIFIED"
    | "REPOSITORY_ERROR"
    | "REQUEUE"
    | (string & {});
  /** Content hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters. */
  contentHash?: string;
  /** Populate this field to store Connector or repository error details. This information is displayed in the Admin Console. This field may only be populated when the Type is REPOSITORY_ERROR. */
  repositoryError?: RepositoryError;
  /** The metadata hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters. */
  metadataHash?: string;
  /** Structured data hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters. */
  structuredDataHash?: string;
}

export const PushItem: Schema.Schema<PushItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payload: Schema.optional(Schema.String),
    queue: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    contentHash: Schema.optional(Schema.String),
    repositoryError: Schema.optional(RepositoryError),
    metadataHash: Schema.optional(Schema.String),
    structuredDataHash: Schema.optional(Schema.String),
  }).annotate({ identifier: "PushItem" });

export interface PushItemRequest {
  /** Item to push onto the queue. */
  item?: PushItem;
  /** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
  connectorName?: string;
  /** Common debug options. */
  debugOptions?: DebugOptions;
}

export const PushItemRequest: Schema.Schema<PushItemRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    item: Schema.optional(PushItem),
    connectorName: Schema.optional(Schema.String),
    debugOptions: Schema.optional(DebugOptions),
  }).annotate({ identifier: "PushItemRequest" });

export interface ListItemNamesForUnmappedIdentityResponse {
  itemNames?: ReadonlyArray<string>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const ListItemNamesForUnmappedIdentityResponse: Schema.Schema<ListItemNamesForUnmappedIdentityResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    itemNames: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListItemNamesForUnmappedIdentityResponse" });

export interface Context {
  /** [Required only for Answer and RHS cards - will be ignored for Homepage] cards. It's the exact case-insensitive queries that will trigger the Answer or RHS card. */
  query?: ReadonlyArray<string>;
  /** [Optional] Date (in seconds since epoch) when the card should start being shown. If missing, start_date_sec will be Jan 1st, 1970 UTC. */
  startDateSec?: string;
  /** [Optional] Text-free locations where the card should be shown. This is expected to match the user's location in focus. If no location is specified, the card will be shown for any location. */
  location?: ReadonlyArray<string>;
  /** [Optional] App where the card should be shown. If missing, the card will be shown in TOPAZ. */
  app?: ReadonlyArray<"UNKNOWN_APP" | "TOPAZ" | "MOMA" | (string & {})>;
  /** [Optional] Date (in seconds since epoch) when the card should stop being shown. If missing, end_date_sec will be set to Jan 1st, 2100. */
  endDateSec?: string;
  /** [Optional] Day of week when the card should be shown, where 0 is Monday. */
  dayOfWeek?: ReadonlyArray<number>;
  /** [Required] Type of the card (homepage, Answer or RHS). */
  type?: ReadonlyArray<
    | "UNKNOWN_CARD_TYPE"
    | "HOMEPAGE_CARD"
    | "ANSWER_CARD"
    | "RHS_CARD"
    | (string & {})
  >;
  /** [Optional] End time in seconds, within a day, when the card should stop being shown if it's within [start_date_sec, end_date_sec]. If missing, this is set to 86400 (24 hours x 3600 sec/hour), i.e., midnight next day. */
  endDayOffsetSec?: string;
  /** [Optional] The locales for which the card should be triggered (e.g., en_US and en_CA). If missing, the card is going to show to clients regardless of their locale. */
  locale?: ReadonlyArray<string>;
  /** [Optional] Surface where the card should be shown in. If missing, the card will be shown in any surface. */
  surface?: ReadonlyArray<
    | "UNKNOWN_SURFACE"
    | "DESKTOP"
    | "ANDROID"
    | "IOS"
    | "MOBILE"
    | "ANY"
    | (string & {})
  >;
  /** [Optional] Start time in seconds, within a day, when the card should be shown if it's within [start_date_sec, end_date_sec]. If 0, the card will be shown from 12:00am on. */
  startDayOffsetSec?: string;
}

export const Context: Schema.Schema<Context> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.Array(Schema.String)),
    startDateSec: Schema.optional(Schema.String),
    location: Schema.optional(Schema.Array(Schema.String)),
    app: Schema.optional(Schema.Array(Schema.String)),
    endDateSec: Schema.optional(Schema.String),
    dayOfWeek: Schema.optional(Schema.Array(Schema.Number)),
    type: Schema.optional(Schema.Array(Schema.String)),
    endDayOffsetSec: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.Array(Schema.String)),
    surface: Schema.optional(Schema.Array(Schema.String)),
    startDayOffsetSec: Schema.optional(Schema.String),
  }).annotate({ identifier: "Context" });

export interface EnterpriseTopazSidekickTimeSlot {
  /** Day start time at user's timezone. */
  startTimeDay?: string;
  /** Hour and minute of the end time at the user's timezone. */
  endTimeHourAndMinute?: string;
  /** End time in milliseconds. */
  endTimeInMillis?: string;
  /** Hour and minute of the start time at the user's timezone. */
  startTimeHourAndMinute?: string;
  /** Start time in milliseconds. */
  startTimeInMillis?: string;
  /** Day end time at the user's timezone. */
  endTimeDay?: string;
}

export const EnterpriseTopazSidekickTimeSlot: Schema.Schema<EnterpriseTopazSidekickTimeSlot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTimeDay: Schema.optional(Schema.String),
    endTimeHourAndMinute: Schema.optional(Schema.String),
    endTimeInMillis: Schema.optional(Schema.String),
    startTimeHourAndMinute: Schema.optional(Schema.String),
    startTimeInMillis: Schema.optional(Schema.String),
    endTimeDay: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterpriseTopazSidekickTimeSlot" });

export interface EnterpriseTopazSidekickScheduledMeeting {
  /** The meeting title. */
  meetingTitle?: string;
  /** The meeting location. */
  meetingLocation?: string;
  /** The meeting time slot. */
  meetingTime?: EnterpriseTopazSidekickTimeSlot;
}

export const EnterpriseTopazSidekickScheduledMeeting: Schema.Schema<EnterpriseTopazSidekickScheduledMeeting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meetingTitle: Schema.optional(Schema.String),
    meetingLocation: Schema.optional(Schema.String),
    meetingTime: Schema.optional(EnterpriseTopazSidekickTimeSlot),
  }).annotate({ identifier: "EnterpriseTopazSidekickScheduledMeeting" });

export interface EnterpriseTopazSidekickFindMeetingTimeCardProto {
  /** Invitees that have been skipped in the computation, most likely because they are groups. */
  skippedInvitees?: ReadonlyArray<EnterpriseTopazSidekickPerson>;
  /** Invitees to the event. */
  invitees?: ReadonlyArray<EnterpriseTopazSidekickPerson>;
  /** Requester. */
  requester?: EnterpriseTopazSidekickPerson;
  /** Min and max timestamp used to find a common available timeslot. */
  timeBoundaries?: EnterpriseTopazSidekickTimeSlot;
  /** Timezone ID. */
  timezoneId?: string;
  /** Details about the scheduled meeting, if one exists. */
  scheduledMeeting?: EnterpriseTopazSidekickScheduledMeeting;
  /** Slots when all attendees have availability. */
  commonAvailableTimeSlots?: ReadonlyArray<EnterpriseTopazSidekickTimeSlot>;
}

export const EnterpriseTopazSidekickFindMeetingTimeCardProto: Schema.Schema<EnterpriseTopazSidekickFindMeetingTimeCardProto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skippedInvitees: Schema.optional(
      Schema.Array(EnterpriseTopazSidekickPerson),
    ),
    invitees: Schema.optional(Schema.Array(EnterpriseTopazSidekickPerson)),
    requester: Schema.optional(EnterpriseTopazSidekickPerson),
    timeBoundaries: Schema.optional(EnterpriseTopazSidekickTimeSlot),
    timezoneId: Schema.optional(Schema.String),
    scheduledMeeting: Schema.optional(EnterpriseTopazSidekickScheduledMeeting),
    commonAvailableTimeSlots: Schema.optional(
      Schema.Array(EnterpriseTopazSidekickTimeSlot),
    ),
  }).annotate({
    identifier: "EnterpriseTopazSidekickFindMeetingTimeCardProto",
  });

export interface PollItemsResponse {
  /** Set of items from the queue available for connector to process. These items have the following subset of fields populated: version metadata.hash structured_data.hash content.hash payload status queue */
  items?: ReadonlyArray<Item>;
}

export const PollItemsResponse: Schema.Schema<PollItemsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Item)),
  }).annotate({ identifier: "PollItemsResponse" });

export interface BackgroundColoredText {
  /** [Required] The text to display. */
  text?: string;
  /** [Optional] Color of the background. The text color can change depending on the selected background color, and the client does not have control over this. If missing, the background will be WHITE. */
  backgroundColor?:
    | "UNKNOWN_COLOR"
    | "WHITE"
    | "YELLOW"
    | "ORANGE"
    | "GREEN"
    | "BLUE"
    | "GREY"
    | (string & {});
}

export const BackgroundColoredText: Schema.Schema<BackgroundColoredText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    backgroundColor: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackgroundColoredText" });

export interface DoublePropertyOptions {
  /** If set, describes how the double should be used as a search operator. */
  operatorOptions?: DoubleOperatorOptions;
}

export const DoublePropertyOptions: Schema.Schema<DoublePropertyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatorOptions: Schema.optional(DoubleOperatorOptions),
  }).annotate({ identifier: "DoublePropertyOptions" });

export interface EnterpriseTopazSidekickMeetingNotesCardRequest {
  /** The event to request meeting notes creation */
  event?: EnterpriseTopazSidekickAgendaEntry;
  /** Who are the meeting notes created for. */
  canCreateFor?: ReadonlyArray<
    "UNKNOWN" | "MYSELF" | "ALL_ATTENDEES" | (string & {})
  >;
  /** The error and reason if known error occured. */
  error?: EnterpriseTopazSidekickMeetingNotesCardError;
}

export const EnterpriseTopazSidekickMeetingNotesCardRequest: Schema.Schema<EnterpriseTopazSidekickMeetingNotesCardRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(EnterpriseTopazSidekickAgendaEntry),
    canCreateFor: Schema.optional(Schema.Array(Schema.String)),
    error: Schema.optional(EnterpriseTopazSidekickMeetingNotesCardError),
  }).annotate({ identifier: "EnterpriseTopazSidekickMeetingNotesCardRequest" });

export interface MatchRange {
  /** Starting position of the match in the snippet. */
  start?: number;
  /** End of the match in the snippet. */
  end?: number;
}

export const MatchRange: Schema.Schema<MatchRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    start: Schema.optional(Schema.Number),
    end: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MatchRange" });

export interface Snippet {
  /** The snippet of the document. May contain escaped HTML character that should be unescaped prior to rendering. */
  snippet?: string;
  /** The matched ranges in the snippet. */
  matchRanges?: ReadonlyArray<MatchRange>;
}

export const Snippet: Schema.Schema<Snippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snippet: Schema.optional(Schema.String),
    matchRanges: Schema.optional(Schema.Array(MatchRange)),
  }).annotate({ identifier: "Snippet" });

export interface FacetBucket {
  value?: Value;
  /** Filter to be passed in the search request if the corresponding bucket is selected. */
  filter?: Filter;
  /** Number of results that match the bucket value. Counts are only returned for searches when count accuracy is ensured. Cloud Search does not guarantee facet counts for any query and facet counts might be present only intermittently, even for identical queries. Do not build dependencies on facet count existence; instead use facet ount percentages which are always returned. */
  count?: number;
  /** Percent of results that match the bucket value. The returned value is between (0-100], and is rounded down to an integer if fractional. If the value is not explicitly returned, it represents a percentage value that rounds to 0. Percentages are returned for all searches, but are an estimate. Because percentages are always returned, you should render percentages instead of counts. */
  percentage?: number;
}

export const FacetBucket: Schema.Schema<FacetBucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Value),
    filter: Schema.optional(Filter),
    count: Schema.optional(Schema.Number),
    percentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "FacetBucket" });

export interface SearchApplicationUserStats {
  /** The count of unique active users in the past thirty days */
  thirtyDaysActiveUsersCount?: string;
  /** The count of unique active users in the past one day */
  oneDayActiveUsersCount?: string;
  /** The count of unique active users in the past seven days */
  sevenDaysActiveUsersCount?: string;
  /** The date for which session stats were calculated. Stats calculated on the next day close to midnight are returned. */
  date?: Cloudsearch_Date;
}

export const SearchApplicationUserStats: Schema.Schema<SearchApplicationUserStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    thirtyDaysActiveUsersCount: Schema.optional(Schema.String),
    oneDayActiveUsersCount: Schema.optional(Schema.String),
    sevenDaysActiveUsersCount: Schema.optional(Schema.String),
    date: Schema.optional(Cloudsearch_Date),
  }).annotate({ identifier: "SearchApplicationUserStats" });

export interface EnterpriseTopazSidekickShareMeetingDocsCardProto {
  /** Event. */
  event?: EnterpriseTopazSidekickAgendaEntry;
  /** Documents to share for the given meeting. */
  document?: ReadonlyArray<EnterpriseTopazSidekickCommonDocument>;
}

export const EnterpriseTopazSidekickShareMeetingDocsCardProto: Schema.Schema<EnterpriseTopazSidekickShareMeetingDocsCardProto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(EnterpriseTopazSidekickAgendaEntry),
    document: Schema.optional(
      Schema.Array(EnterpriseTopazSidekickCommonDocument),
    ),
  }).annotate({
    identifier: "EnterpriseTopazSidekickShareMeetingDocsCardProto",
  });

export interface EnterpriseTopazSidekickDocumentGroup {
  /** Document group type */
  groupType?: "UNKNOWN_TYPE" | "ALL" | (string & {});
  /** The list of corresponding documents. */
  personalizedDocument?: ReadonlyArray<EnterpriseTopazSidekickCommonDocument>;
}

export const EnterpriseTopazSidekickDocumentGroup: Schema.Schema<EnterpriseTopazSidekickDocumentGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupType: Schema.optional(Schema.String),
    personalizedDocument: Schema.optional(
      Schema.Array(EnterpriseTopazSidekickCommonDocument),
    ),
  }).annotate({ identifier: "EnterpriseTopazSidekickDocumentGroup" });

export interface EnterpriseTopazSidekickPersonalizedDocsCardProto {
  /** Document group. */
  documentGroup?: ReadonlyArray<EnterpriseTopazSidekickDocumentGroup>;
}

export const EnterpriseTopazSidekickPersonalizedDocsCardProto: Schema.Schema<EnterpriseTopazSidekickPersonalizedDocsCardProto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentGroup: Schema.optional(
      Schema.Array(EnterpriseTopazSidekickDocumentGroup),
    ),
  }).annotate({
    identifier: "EnterpriseTopazSidekickPersonalizedDocsCardProto",
  });

export interface EnterpriseTopazSidekickRecentDocumentsCardProto {
  document?: ReadonlyArray<EnterpriseTopazSidekickCommonDocument>;
}

export const EnterpriseTopazSidekickRecentDocumentsCardProto: Schema.Schema<EnterpriseTopazSidekickRecentDocumentsCardProto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    document: Schema.optional(
      Schema.Array(EnterpriseTopazSidekickCommonDocument),
    ),
  }).annotate({
    identifier: "EnterpriseTopazSidekickRecentDocumentsCardProto",
  });

export interface EnterpriseTopazSidekickGetAndKeepAheadCardProtoDeclinedEvents {
  events?: ReadonlyArray<EnterpriseTopazSidekickAgendaEntry>;
}

export const EnterpriseTopazSidekickGetAndKeepAheadCardProtoDeclinedEvents: Schema.Schema<EnterpriseTopazSidekickGetAndKeepAheadCardProtoDeclinedEvents> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    events: Schema.optional(Schema.Array(EnterpriseTopazSidekickAgendaEntry)),
  }).annotate({
    identifier: "EnterpriseTopazSidekickGetAndKeepAheadCardProtoDeclinedEvents",
  });

export interface EnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntry {
  category?:
    | "UNKNOWN_DOCUMENT"
    | "ACTIONABLE"
    | "VIEWED"
    | "REPLIED"
    | "MENTION_VIEWED"
    | "MENTION_REPLIED"
    | "MENTION_NOT_VIEWED"
    | "SHARED_AND_VIEWED"
    | "SHARED_NOT_VIEWED"
    | "EDITED"
    | (string & {});
  document?: EnterpriseTopazSidekickCommonDocument;
  /** Reason this document was selected. */
  rationale?: string;
}

export const EnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntry: Schema.Schema<EnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    document: Schema.optional(EnterpriseTopazSidekickCommonDocument),
    rationale: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "EnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntry",
  });

export interface EnterpriseTopazSidekickDocumentPerCategoryList {
  documents?: ReadonlyArray<EnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntry>;
  listType?:
    | "UNKNOWN_LIST_TYPE"
    | "MENTIONS"
    | "SHARES"
    | "NEEDS_ATTENTION"
    | "VIEWS"
    | "EDITS"
    | (string & {});
  /** Description of the types of documents present in the list. */
  listTypeDescription?: string;
  /** Response message in case no documents are present in the card. */
  responseMessage?: string;
  /** Localized message explaining how the documents were derived (e.g. from the last 30 days activity). This field is optional. */
  helpMessage?: string;
}

export const EnterpriseTopazSidekickDocumentPerCategoryList: Schema.Schema<EnterpriseTopazSidekickDocumentPerCategoryList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documents: Schema.optional(
      Schema.Array(
        EnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntry,
      ),
    ),
    listType: Schema.optional(Schema.String),
    listTypeDescription: Schema.optional(Schema.String),
    responseMessage: Schema.optional(Schema.String),
    helpMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterpriseTopazSidekickDocumentPerCategoryList" });

export interface EnterpriseTopazSidekickGetAndKeepAheadCardProto {
  declinedEvents?: EnterpriseTopazSidekickGetAndKeepAheadCardProtoDeclinedEvents;
  mentionedDocuments?: EnterpriseTopazSidekickDocumentPerCategoryList;
  sharedDocuments?: EnterpriseTopazSidekickDocumentPerCategoryList;
}

export const EnterpriseTopazSidekickGetAndKeepAheadCardProto: Schema.Schema<EnterpriseTopazSidekickGetAndKeepAheadCardProto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    declinedEvents: Schema.optional(
      EnterpriseTopazSidekickGetAndKeepAheadCardProtoDeclinedEvents,
    ),
    mentionedDocuments: Schema.optional(
      EnterpriseTopazSidekickDocumentPerCategoryList,
    ),
    sharedDocuments: Schema.optional(
      EnterpriseTopazSidekickDocumentPerCategoryList,
    ),
  }).annotate({
    identifier: "EnterpriseTopazSidekickGetAndKeepAheadCardProto",
  });

export interface EnterpriseTopazSidekickRankingParams {
  /** The priority to determine between objects that have the same start_time_ms The lower-value of priority == ranked higher. Max-priority = 0. Expected to be set for all types. */
  priority?:
    | "UNKNOWN"
    | "CRITICAL"
    | "IMPORTANT"
    | "HIGH"
    | "NORMAL"
    | "BEST_EFFORT"
    | (string & {});
  /** The score of the card to be used to break priority-ties */
  score?: number;
  /** The packing type of this object. */
  type?: "FIXED" | "FLEXIBLE" | (string & {});
  /** The end-time that this object will expect to occur. If the type is marked as FIXED, then this end-time will persist after bidding. If the type is marked as FLEXIBLE, this field is NOT expected to be filled and will be filled in after it has won a bid. Expected to be set when type is set to FIXED. */
  endTimeMs?: string;
  /** The start-time that this object will bid-for If the type is marked as FIXED, then this start-time will persist after bidding. If the type is marked as FLEXIBLE, then it will occur at the given time or sometime after the requested time. Expected to be set for all types. */
  startTimeMs?: string;
  /** The span that this card will take in the stream Expected to be set when type is set to FLEXIBLE. */
  spanMs?: string;
}

export const EnterpriseTopazSidekickRankingParams: Schema.Schema<EnterpriseTopazSidekickRankingParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    priority: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
    endTimeMs: Schema.optional(Schema.String),
    startTimeMs: Schema.optional(Schema.String),
    spanMs: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterpriseTopazSidekickRankingParams" });

export interface EnterpriseTopazSidekickCardMetadata {
  /** An ID to identify the card and match actions to it. Be thoughtful of new card IDs since actions will be associated to that ID. E.g., if two card IDs collide, the system will think that the actions have been applied to the same card. Similarly, if EAS can return multiple cards of the same type (e.g., Meetings), ensure that the card_id identifies a given instance of the card so that, e.g., dismissals only affect the dismissed card as opposed to affecting all meeting cards. */
  cardId?: string;
  /** Render mode. */
  renderMode?: "UNKNOWN_RENDER" | "COLLAPSED" | "EXPANDED" | (string & {});
  /** Information about the NLP done to get the card. */
  nlpMetadata?: EnterpriseTopazSidekickNlpMetadata;
  /** Chronology. */
  chronology?:
    | "UNKNOWN"
    | "PAST"
    | "RECENTLY_PAST"
    | "PRESENT"
    | "NEAR_FUTURE"
    | "FUTURE"
    | (string & {});
  /** Declares a preference for how this card should be packed in MSCR. All cards in a response must correspond to a single category. As a result, cards may be dropped from the response if this field is set. Any card that does not match the category of the card with the highest priority in the response will be dropped. */
  cardCategory?:
    | "DEFAULT"
    | "ANSWER"
    | "KNOWLEDGE"
    | "HOMEPAGE"
    | (string & {});
  /** Debug info (only reported if request's debug_level > 0). */
  debugInfo?: string;
  /** Ranking params. */
  rankingParams?: EnterpriseTopazSidekickRankingParams;
}

export const EnterpriseTopazSidekickCardMetadata: Schema.Schema<EnterpriseTopazSidekickCardMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cardId: Schema.optional(Schema.String),
    renderMode: Schema.optional(Schema.String),
    nlpMetadata: Schema.optional(EnterpriseTopazSidekickNlpMetadata),
    chronology: Schema.optional(Schema.String),
    cardCategory: Schema.optional(Schema.String),
    debugInfo: Schema.optional(Schema.String),
    rankingParams: Schema.optional(EnterpriseTopazSidekickRankingParams),
  }).annotate({ identifier: "EnterpriseTopazSidekickCardMetadata" });

export interface EnterpriseTopazSidekickAnswerSuggestedQueryCategory {
  /** The query list category. */
  category?: "UNKNOWN" | "CALENDAR" | "DOCUMENT" | "PEOPLE" | (string & {});
  /** Whether this category is enabled. */
  isEnabled?: boolean;
  /** List of suggested queries to show the user. */
  query?: ReadonlyArray<string>;
}

export const EnterpriseTopazSidekickAnswerSuggestedQueryCategory: Schema.Schema<EnterpriseTopazSidekickAnswerSuggestedQueryCategory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    isEnabled: Schema.optional(Schema.Boolean),
    query: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "EnterpriseTopazSidekickAnswerSuggestedQueryCategory",
  });

export interface EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard {
  /** A list of queries to suggest. */
  suggestedQueryCategory?: ReadonlyArray<EnterpriseTopazSidekickAnswerSuggestedQueryCategory>;
}

export const EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard: Schema.Schema<EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestedQueryCategory: Schema.optional(
      Schema.Array(EnterpriseTopazSidekickAnswerSuggestedQueryCategory),
    ),
  }).annotate({
    identifier: "EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard",
  });

export interface Action {
  /** [Required] Title of the action. */
  title?: string;
  /** [Optional] Url of the action. */
  url?: string;
}

export const Action: Schema.Schema<Action> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "Action" });

export interface Content {
  /** [Optional] Title of the card. */
  title?: BackgroundColoredText;
  /** [Optional] Subtitle of the card. */
  subtitle?: BackgroundColoredText;
  /** [Optional] Description of the card. */
  description?: SafeHtmlProto;
  /** [Optional] Actions for this card. */
  actions?: ReadonlyArray<Action>;
}

export const Content: Schema.Schema<Content> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(BackgroundColoredText),
    subtitle: Schema.optional(BackgroundColoredText),
    description: Schema.optional(SafeHtmlProto),
    actions: Schema.optional(Schema.Array(Action)),
  }).annotate({ identifier: "Content" });

export interface ThirdPartyGenericCard {
  /** Priority of the card, where 0 is the highest priority. */
  priority?: number;
  /** [Required] Context where the card should be triggered. */
  context?: Context;
  /** Unique identifier for the card. */
  cardId?: string;
  /** Category that the card belongs to. */
  category?: string;
  /** [Required] Card content. */
  content?: Content;
  /** Whether the card can be dismissed. */
  isDismissible?: boolean;
}

export const ThirdPartyGenericCard: Schema.Schema<ThirdPartyGenericCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    priority: Schema.optional(Schema.Number),
    context: Schema.optional(Context),
    cardId: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    content: Schema.optional(Content),
    isDismissible: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ThirdPartyGenericCard" });

export interface EnterpriseTopazSidekickPersonProfileCard {
  /** The subject of the card. */
  subject?: EnterpriseTopazSidekickCommonPerson;
  relatedPeople?: ReadonlyArray<EnterpriseTopazSidekickPersonProfileCardRelatedPeople>;
}

export const EnterpriseTopazSidekickPersonProfileCard: Schema.Schema<EnterpriseTopazSidekickPersonProfileCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subject: Schema.optional(EnterpriseTopazSidekickCommonPerson),
    relatedPeople: Schema.optional(
      Schema.Array(EnterpriseTopazSidekickPersonProfileCardRelatedPeople),
    ),
  }).annotate({ identifier: "EnterpriseTopazSidekickPersonProfileCard" });

export interface EnterpriseTopazSidekickMeetingNotesCardProto {
  /** The event to request meeting notes creation. */
  event?: EnterpriseTopazSidekickAgendaEntry;
  /** Google Drive ID (a.k.a. resource ID) of the file. */
  fileId?: string;
  /** New URL. */
  url?: string;
  /** Title we want to show for meeting notes in the answer card */
  title?: string;
}

export const EnterpriseTopazSidekickMeetingNotesCardProto: Schema.Schema<EnterpriseTopazSidekickMeetingNotesCardProto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event: Schema.optional(EnterpriseTopazSidekickAgendaEntry),
    fileId: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnterpriseTopazSidekickMeetingNotesCardProto" });

export interface EnterpriseTopazSidekickPeopleDisambiguationCard {
  /** Candidate persons for the query. */
  person?: ReadonlyArray<EnterpriseTopazSidekickCommonPerson>;
}

export const EnterpriseTopazSidekickPeopleDisambiguationCard: Schema.Schema<EnterpriseTopazSidekickPeopleDisambiguationCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    person: Schema.optional(Schema.Array(EnterpriseTopazSidekickCommonPerson)),
  }).annotate({
    identifier: "EnterpriseTopazSidekickPeopleDisambiguationCard",
  });

export interface PeoplePromotionCard {
  people?: ReadonlyArray<PersonCore>;
}

export const PeoplePromotionCard: Schema.Schema<PeoplePromotionCard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    people: Schema.optional(Schema.Array(PersonCore)),
  }).annotate({ identifier: "PeoplePromotionCard" });

export interface EnterpriseTopazSidekickAssistCardProto {
  /** Sahre meeting docs card. */
  shareMeetingDocsCard?: EnterpriseTopazSidekickShareMeetingDocsCardProto;
  /** Answer card that represents a single person. */
  personAnswerCard?: EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard;
  /** Card with recommended documents for the user. */
  personalizedDocsCard?: EnterpriseTopazSidekickPersonalizedDocsCardProto;
  /** Request for meeting notes card. */
  meetingNotesCardRequest?: EnterpriseTopazSidekickMeetingNotesCardRequest;
  /** Answer card that represents a list of people related to a person. */
  relatedPeopleAnswerCard?: EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard;
  /** Work In Progress card. */
  workInProgressCardProto?: EnterpriseTopazSidekickRecentDocumentsCardProto;
  /** Get and keep ahead card. */
  getAndKeepAheadCard?: EnterpriseTopazSidekickGetAndKeepAheadCardProto;
  /** Card metadata such as chronology and render mode of the card. */
  cardMetadata?: EnterpriseTopazSidekickCardMetadata;
  /** Card type. */
  cardType?:
    | "UNKNOWN_TYPE"
    | "AGENDA"
    | "CHANGELISTS"
    | "CONFLICTING_MEETINGS"
    | "CREATE_NOTES_FOR_MEETING"
    | "CREATE_NOTES_FOR_MEETING_REQUEST"
    | "CUSTOMER_NEWS"
    | "FIND_MEETING_TIME"
    | "NEXT_MEETING"
    | "PERSONALIZED_DOCS"
    | "TRENDING_DOCS"
    | "UPCOMING_TRIP"
    | "SUMMARY"
    | "MEETINGS"
    | "HOMEPAGE"
    | "SHARE_MEETING_DOCS"
    | "DISCOVER_PEOPLE"
    | "HOMEPAGE_V3"
    | "AGENDA_GROUP"
    | "WORK_IN_PROGRESS"
    | "GET_AND_KEEP_AHEAD"
    | "GENERIC_ANSWER_CARD"
    | "THIRD_PARTY_ANSWER_CARD"
    | "DOMAIN_TRENDING_DOCS"
    | "TEAM_TRENDING_DOCS"
    | "DOCUMENT_LIST_ANSWER_CARD"
    | "SUGGESTED_QUERY_ANSWER_CARD"
    | "PERSON_ANSWER_CARD"
    | "RELATED_PEOPLE_ANSWER_CARD"
    | "PERSON_KNOWLEDGE_CARD"
    | "PEOPLE_SEARCH_PROMOTION_CARD"
    | (string & {});
  /** Answer card for what natural language queries the user can ask. */
  suggestedQueryAnswerCard?: EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard;
  /** Documents with mentions. */
  documentsWithMentions?: EnterpriseTopazSidekickDocumentPerCategoryList;
  /** Find meeting time card. */
  findMeetingTimeCard?: EnterpriseTopazSidekickFindMeetingTimeCardProto;
  /** Third party answer cards. */
  thirdPartyAnswerCard?: ThirdPartyGenericCard;
  /** Conflicting events card. */
  conflictingMeetingsCard?: EnterpriseTopazSidekickConflictingEventsCardProto;
  /** Meeting card. */
  meeting?: EnterpriseTopazSidekickAgendaEntry;
  /** Full profile card. */
  personProfileCard?: EnterpriseTopazSidekickPersonProfileCard;
  /** Agenda group card. */
  agendaGroupCardProto?: EnterpriseTopazSidekickAgendaGroupCardProto;
  /** Answer card for documents that are applicable to the current query. */
  documentListCard?: EnterpriseTopazSidekickDocumentPerCategoryList;
  /** Meeting notes card. */
  meetingNotesCard?: EnterpriseTopazSidekickMeetingNotesCardProto;
  /** Generic answer card. */
  genericAnswerCard?: EnterpriseTopazSidekickGenericAnswerCard;
  /** The people disambiguation card. */
  peopleDisambiguationCard?: EnterpriseTopazSidekickPeopleDisambiguationCard;
  /** Shared documents. */
  sharedDocuments?: EnterpriseTopazSidekickDocumentPerCategoryList;
  /** People Search promotion card. */
  peoplePromotionCard?: PeoplePromotionCard;
}

export const EnterpriseTopazSidekickAssistCardProto: Schema.Schema<EnterpriseTopazSidekickAssistCardProto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shareMeetingDocsCard: Schema.optional(
      EnterpriseTopazSidekickShareMeetingDocsCardProto,
    ),
    personAnswerCard: Schema.optional(
      EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard,
    ),
    personalizedDocsCard: Schema.optional(
      EnterpriseTopazSidekickPersonalizedDocsCardProto,
    ),
    meetingNotesCardRequest: Schema.optional(
      EnterpriseTopazSidekickMeetingNotesCardRequest,
    ),
    relatedPeopleAnswerCard: Schema.optional(
      EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard,
    ),
    workInProgressCardProto: Schema.optional(
      EnterpriseTopazSidekickRecentDocumentsCardProto,
    ),
    getAndKeepAheadCard: Schema.optional(
      EnterpriseTopazSidekickGetAndKeepAheadCardProto,
    ),
    cardMetadata: Schema.optional(EnterpriseTopazSidekickCardMetadata),
    cardType: Schema.optional(Schema.String),
    suggestedQueryAnswerCard: Schema.optional(
      EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard,
    ),
    documentsWithMentions: Schema.optional(
      EnterpriseTopazSidekickDocumentPerCategoryList,
    ),
    findMeetingTimeCard: Schema.optional(
      EnterpriseTopazSidekickFindMeetingTimeCardProto,
    ),
    thirdPartyAnswerCard: Schema.optional(ThirdPartyGenericCard),
    conflictingMeetingsCard: Schema.optional(
      EnterpriseTopazSidekickConflictingEventsCardProto,
    ),
    meeting: Schema.optional(EnterpriseTopazSidekickAgendaEntry),
    personProfileCard: Schema.optional(
      EnterpriseTopazSidekickPersonProfileCard,
    ),
    agendaGroupCardProto: Schema.optional(
      EnterpriseTopazSidekickAgendaGroupCardProto,
    ),
    documentListCard: Schema.optional(
      EnterpriseTopazSidekickDocumentPerCategoryList,
    ),
    meetingNotesCard: Schema.optional(
      EnterpriseTopazSidekickMeetingNotesCardProto,
    ),
    genericAnswerCard: Schema.optional(
      EnterpriseTopazSidekickGenericAnswerCard,
    ),
    peopleDisambiguationCard: Schema.optional(
      EnterpriseTopazSidekickPeopleDisambiguationCard,
    ),
    sharedDocuments: Schema.optional(
      EnterpriseTopazSidekickDocumentPerCategoryList,
    ),
    peoplePromotionCard: Schema.optional(PeoplePromotionCard),
  }).annotate({ identifier: "EnterpriseTopazSidekickAssistCardProto" });

export interface SearchApplicationQueryStats {
  queryCountByStatus?: ReadonlyArray<QueryCountByStatus>;
  /** The date for which query stats were calculated. Stats calculated on the next day close to midnight are returned. */
  date?: Cloudsearch_Date;
}

export const SearchApplicationQueryStats: Schema.Schema<SearchApplicationQueryStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryCountByStatus: Schema.optional(Schema.Array(QueryCountByStatus)),
    date: Schema.optional(Cloudsearch_Date),
  }).annotate({ identifier: "SearchApplicationQueryStats" });

export interface IndexItemRequest {
  indexItemOptions?: IndexItemOptions;
  /** The name of the item. Format: datasources/{source_id}/items/{item_id} */
  item?: Item;
  /** Required. The RequestMode for this request. */
  mode?: "UNSPECIFIED" | "SYNCHRONOUS" | "ASYNCHRONOUS" | (string & {});
  /** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
  connectorName?: string;
  /** Common debug options. */
  debugOptions?: DebugOptions;
}

export const IndexItemRequest: Schema.Schema<IndexItemRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexItemOptions: Schema.optional(IndexItemOptions),
    item: Schema.optional(Item),
    mode: Schema.optional(Schema.String),
    connectorName: Schema.optional(Schema.String),
    debugOptions: Schema.optional(DebugOptions),
  }).annotate({ identifier: "IndexItemRequest" });

export interface SpellResult {
  /** The suggested spelling of the query. */
  suggestedQuery?: string;
  /** The sanitized HTML representing the spell corrected query that can be used in the UI. This usually has language-specific tags to mark up parts of the query that are spell checked. */
  suggestedQueryHtml?: SafeHtmlProto;
  /** Suggestion triggered for the current query. */
  suggestionType?:
    | "SUGGESTION_TYPE_UNSPECIFIED"
    | "NON_EMPTY_RESULTS_SPELL_SUGGESTION"
    | "ZERO_RESULTS_FULL_PAGE_REPLACEMENT"
    | (string & {});
}

export const SpellResult: Schema.Schema<SpellResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestedQuery: Schema.optional(Schema.String),
    suggestedQueryHtml: Schema.optional(SafeHtmlProto),
    suggestionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SpellResult" });

export interface ResultDebugInfo {
  /** General debug info formatted for display. */
  formattedDebugInfo?: string;
}

export const ResultDebugInfo: Schema.Schema<ResultDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    formattedDebugInfo: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResultDebugInfo" });

export interface StructuredResult {
  /** Representation of a person */
  person?: Person;
}

export const StructuredResult: Schema.Schema<StructuredResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    person: Schema.optional(Person),
  }).annotate({ identifier: "StructuredResult" });

export interface ResponseDebugInfo {
  /** General debug info formatted for display. */
  formattedDebugInfo?: string;
}

export const ResponseDebugInfo: Schema.Schema<ResponseDebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    formattedDebugInfo: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResponseDebugInfo" });

export interface SearchResult {
  /** The concatenation of all snippets (summaries) available for this result. */
  snippet?: Snippet;
  /** Metadata of the search result. */
  metadata?: Metadata;
  /** Title of the search result. */
  title?: string;
  /** Debugging information about this search result. */
  debugInfo?: ResultDebugInfo;
  /** The URL of the search result. The URL contains a Google redirect to the actual item. This URL is signed and shouldn't be changed. */
  url?: string;
  /** If source is clustered, provide list of clustered results. There will only be one level of clustered results. If current source is not enabled for clustering, this field will be empty. */
  clusteredResults?: ReadonlyArray<SearchResult>;
}

export const SearchResult: Schema.Schema<SearchResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      snippet: Schema.optional(Snippet),
      metadata: Schema.optional(Metadata),
      title: Schema.optional(Schema.String),
      debugInfo: Schema.optional(ResultDebugInfo),
      url: Schema.optional(Schema.String),
      clusteredResults: Schema.optional(Schema.Array(SearchResult)),
    }),
  ).annotate({
    identifier: "SearchResult",
  }) as any as Schema.Schema<SearchResult>;

export interface ErrorMessage {
  source?: Source;
  errorMessage?: string;
}

export const ErrorMessage: Schema.Schema<ErrorMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Source),
    errorMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "ErrorMessage" });

export interface ErrorInfo {
  errorMessages?: ReadonlyArray<ErrorMessage>;
}

export const ErrorInfo: Schema.Schema<ErrorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorMessages: Schema.optional(Schema.Array(ErrorMessage)),
  }).annotate({ identifier: "ErrorInfo" });

export interface FacetResult {
  /** Source name for which facet results are returned. Will not be empty. */
  sourceName?: string;
  /** The name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions */
  operatorName?: string;
  /** FacetBuckets for values in response containing at least a single result with the corresponding filter. */
  buckets?: ReadonlyArray<FacetBucket>;
  /** Object type for which facet results are returned. Can be empty. */
  objectType?: string;
}

export const FacetResult: Schema.Schema<FacetResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceName: Schema.optional(Schema.String),
    operatorName: Schema.optional(Schema.String),
    buckets: Schema.optional(Schema.Array(FacetBucket)),
    objectType: Schema.optional(Schema.String),
  }).annotate({ identifier: "FacetResult" });

export interface QueryInterpretation {
  /** The interpretation of the query used in search. For example, queries with natural language intent like "email from john" will be interpreted as "from:john source:mail". This field will not be filled when the reason is NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY. */
  interpretedQuery?: string;
  /** The actual number of results returned by the interpreted query. */
  interpretedQueryActualResultCount?: number;
  /** The reason for interpretation of the query. This field will not be UNSPECIFIED if the interpretation type is not NONE. */
  reason?:
    | "UNSPECIFIED"
    | "QUERY_HAS_NATURAL_LANGUAGE_INTENT"
    | "NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY"
    | (string & {});
  interpretationType?: "NONE" | "BLEND" | "REPLACE" | (string & {});
  /** The estimated number of results returned by the interpreted query. */
  interpretedQueryEstimatedResultCount?: string;
}

export const QueryInterpretation: Schema.Schema<QueryInterpretation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interpretedQuery: Schema.optional(Schema.String),
    interpretedQueryActualResultCount: Schema.optional(Schema.Number),
    reason: Schema.optional(Schema.String),
    interpretationType: Schema.optional(Schema.String),
    interpretedQueryEstimatedResultCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryInterpretation" });

export interface SearchResponse {
  /** Debugging information about the response. */
  debugInfo?: ResponseDebugInfo;
  /** Results from a search query. */
  results?: ReadonlyArray<SearchResult>;
  /** Suggested spelling for the query. */
  spellResults?: ReadonlyArray<SpellResult>;
  /** Whether there are more search results matching the query. */
  hasMoreResults?: boolean;
  /** The exact result count for this query. */
  resultCountExact?: string;
  /** Expanded result count information. */
  resultCounts?: ResultCounts;
  /** Error information about the response. */
  errorInfo?: ErrorInfo;
  /** The estimated result count for this query. */
  resultCountEstimate?: string;
  /** Structured results for the user query. These results are not counted against the page_size. */
  structuredResults?: ReadonlyArray<StructuredResult>;
  /** Repeated facet results. */
  facetResults?: ReadonlyArray<FacetResult>;
  /** Query interpretation result for user query. Empty if query interpretation is disabled. */
  queryInterpretation?: QueryInterpretation;
}

export const SearchResponse: Schema.Schema<SearchResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    debugInfo: Schema.optional(ResponseDebugInfo),
    results: Schema.optional(Schema.Array(SearchResult)),
    spellResults: Schema.optional(Schema.Array(SpellResult)),
    hasMoreResults: Schema.optional(Schema.Boolean),
    resultCountExact: Schema.optional(Schema.String),
    resultCounts: Schema.optional(ResultCounts),
    errorInfo: Schema.optional(ErrorInfo),
    resultCountEstimate: Schema.optional(Schema.String),
    structuredResults: Schema.optional(Schema.Array(StructuredResult)),
    facetResults: Schema.optional(Schema.Array(FacetResult)),
    queryInterpretation: Schema.optional(QueryInterpretation),
  }).annotate({ identifier: "SearchResponse" });

export interface IntegerOperatorOptions {
  /** Indicates the operator name required in the query in order to isolate the integer property. For example, if operatorName is *priority* and the property's name is *priorityVal*, then queries like *priority:<value>* show results only where the value of the property named *priorityVal* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
  operatorName?: string;
  /** Indicates the operator name required in the query in order to isolate the integer property using the less-than operator. For example, if lessThanOperatorName is *prioritybelow* and the property's name is *priorityVal*, then queries like *prioritybelow:<value>* show results only where the value of the property named *priorityVal* is less than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
  lessThanOperatorName?: string;
  /** Indicates the operator name required in the query in order to isolate the integer property using the greater-than operator. For example, if greaterThanOperatorName is *priorityabove* and the property's name is *priorityVal*, then queries like *priorityabove:<value>* show results only where the value of the property named *priorityVal* is greater than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
  greaterThanOperatorName?: string;
}

export const IntegerOperatorOptions: Schema.Schema<IntegerOperatorOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatorName: Schema.optional(Schema.String),
    lessThanOperatorName: Schema.optional(Schema.String),
    greaterThanOperatorName: Schema.optional(Schema.String),
  }).annotate({ identifier: "IntegerOperatorOptions" });

export interface IntegerPropertyOptions {
  /** The minimum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values less than the minimum are accepted and ranked with the same weight as items indexed with the minimum value. */
  minimumValue?: string;
  /** The maximum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values greater than the maximum are accepted and ranked with the same weight as items indexed with the maximum value. */
  maximumValue?: string;
  /** Used to specify the ordered ranking for the integer. Can only be used if isRepeatable is false. */
  orderedRanking?: "NO_ORDER" | "ASCENDING" | "DESCENDING" | (string & {});
  /** If set, describes integer faceting options for the given integer property. The corresponding integer property should be marked isFacetable. */
  integerFacetingOptions?: IntegerFacetingOptions;
  /** If set, describes how the integer should be used as a search operator. */
  operatorOptions?: IntegerOperatorOptions;
}

export const IntegerPropertyOptions: Schema.Schema<IntegerPropertyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minimumValue: Schema.optional(Schema.String),
    maximumValue: Schema.optional(Schema.String),
    orderedRanking: Schema.optional(Schema.String),
    integerFacetingOptions: Schema.optional(IntegerFacetingOptions),
    operatorOptions: Schema.optional(IntegerOperatorOptions),
  }).annotate({ identifier: "IntegerPropertyOptions" });

export interface BooleanPropertyOptions {
  /** If set, describes how the boolean should be used as a search operator. */
  operatorOptions?: BooleanOperatorOptions;
}

export const BooleanPropertyOptions: Schema.Schema<BooleanPropertyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatorOptions: Schema.optional(BooleanOperatorOptions),
  }).annotate({ identifier: "BooleanPropertyOptions" });

export interface ObjectPropertyOptions {
  /** The properties of the sub-object. These properties represent a nested object. For example, if this property represents a postal address, the subobjectProperties might be named *street*, *city*, and *state*. The maximum number of elements is 1000. */
  subobjectProperties?: ReadonlyArray<PropertyDefinition>;
}

export const ObjectPropertyOptions: Schema.Schema<ObjectPropertyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      subobjectProperties: Schema.optional(Schema.Array(PropertyDefinition)),
    }),
  ).annotate({
    identifier: "ObjectPropertyOptions",
  }) as any as Schema.Schema<ObjectPropertyOptions>;

export interface TextOperatorOptions {
  /** Indicates the operator name required in the query in order to isolate the text property. For example, if operatorName is *subject* and the property's name is *subjectLine*, then queries like *subject:<value>* show results only where the value of the property named *subjectLine* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any text properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
  operatorName?: string;
  /** If true, the text value is tokenized as one atomic value in operator searches and facet matches. For example, if the operator name is "genre" and the value is "science-fiction" the query restrictions "genre:science" and "genre:fiction" doesn't match the item; "genre:science-fiction" does. Text value matching is case-sensitive and does not remove special characters. If false, the text is tokenized. For example, if the value is "science-fiction" the queries "genre:science" and "genre:fiction" matches the item. */
  exactMatchWithOperator?: boolean;
}

export const TextOperatorOptions: Schema.Schema<TextOperatorOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatorName: Schema.optional(Schema.String),
    exactMatchWithOperator: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TextOperatorOptions" });

export interface TextPropertyOptions {
  /** If set, describes how the property should be used as a search operator. */
  operatorOptions?: TextOperatorOptions;
  /** Indicates the search quality importance of the tokens within the field when used for retrieval. */
  retrievalImportance?: RetrievalImportance;
}

export const TextPropertyOptions: Schema.Schema<TextPropertyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatorOptions: Schema.optional(TextOperatorOptions),
    retrievalImportance: Schema.optional(RetrievalImportance),
  }).annotate({ identifier: "TextPropertyOptions" });

export interface PropertyDefinition {
  integerPropertyOptions?: IntegerPropertyOptions;
  booleanPropertyOptions?: BooleanPropertyOptions;
  /** Indicates that users can perform wildcard search for this property. Only supported for Text properties. IsReturnable must be true to set this option. In a given datasource maximum of 5 properties can be marked as is_wildcard_searchable. For more details, see [Define object properties](https://developers.google.com/workspace/cloud-search/docs/guides/schema-guide#properties) */
  isWildcardSearchable?: boolean;
  timestampPropertyOptions?: TimestampPropertyOptions;
  datePropertyOptions?: DatePropertyOptions;
  objectPropertyOptions?: ObjectPropertyOptions;
  /** The options that determine how the property is displayed in the Cloud Search results page if it's specified to be displayed in the object's display options. */
  displayOptions?: PropertyDisplayOptions;
  /** Indicates that the property can be used for generating query suggestions. */
  isSuggestable?: boolean;
  /** Indicates that multiple values are allowed for the property. For example, a document only has one description but can have multiple comments. Cannot be true for properties whose type is a boolean. If set to false, properties that contain more than one value cause the indexing request for that item to be rejected. */
  isRepeatable?: boolean;
  /** Indicates that the property can be used for generating facets. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for boolean, enum, integer, and text properties. */
  isFacetable?: boolean;
  textPropertyOptions?: TextPropertyOptions;
  /** The name of the property. Item indexing requests sent to the Indexing API should set the property name equal to this value. For example, if name is *subject_line*, then indexing requests for document items with subject fields should set the name for that field equal to *subject_line*. Use the name as the identifier for the object property. Once registered as a property for an object, you cannot re-use this name for another property within that object. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters. */
  name?: string;
  htmlPropertyOptions?: HtmlPropertyOptions;
  /** Indicates that the property identifies data that should be returned in search results via the Query API. If set to *true*, indicates that Query API users can use matching property fields in results. However, storing fields requires more space allocation and uses more bandwidth for search queries, which impacts performance over large datasets. Set to *true* here only if the field is needed for search results. Cannot be true for properties whose type is an object. */
  isReturnable?: boolean;
  doublePropertyOptions?: DoublePropertyOptions;
  /** Indicates that the property can be used for sorting. Cannot be true for properties that are repeatable. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for boolean, date, double, integer, and timestamp properties. */
  isSortable?: boolean;
  enumPropertyOptions?: EnumPropertyOptions;
}

export const PropertyDefinition: Schema.Schema<PropertyDefinition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      integerPropertyOptions: Schema.optional(IntegerPropertyOptions),
      booleanPropertyOptions: Schema.optional(BooleanPropertyOptions),
      isWildcardSearchable: Schema.optional(Schema.Boolean),
      timestampPropertyOptions: Schema.optional(TimestampPropertyOptions),
      datePropertyOptions: Schema.optional(DatePropertyOptions),
      objectPropertyOptions: Schema.optional(ObjectPropertyOptions),
      displayOptions: Schema.optional(PropertyDisplayOptions),
      isSuggestable: Schema.optional(Schema.Boolean),
      isRepeatable: Schema.optional(Schema.Boolean),
      isFacetable: Schema.optional(Schema.Boolean),
      textPropertyOptions: Schema.optional(TextPropertyOptions),
      name: Schema.optional(Schema.String),
      htmlPropertyOptions: Schema.optional(HtmlPropertyOptions),
      isReturnable: Schema.optional(Schema.Boolean),
      doublePropertyOptions: Schema.optional(DoublePropertyOptions),
      isSortable: Schema.optional(Schema.Boolean),
      enumPropertyOptions: Schema.optional(EnumPropertyOptions),
    }),
  ).annotate({
    identifier: "PropertyDefinition",
  }) as any as Schema.Schema<PropertyDefinition>;

export interface ObjectDefinition {
  /** The optional object-specific options. */
  options?: ObjectOptions;
  /** The name for the object, which then defines its type. Item indexing requests should set the objectType field equal to this value. For example, if *name* is *Document*, then indexing requests for items of type Document should set objectType equal to *Document*. Each object definition must be uniquely named within a schema. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters. */
  name?: string;
  /** The property definitions for the object. The maximum number of elements is 1000. */
  propertyDefinitions?: ReadonlyArray<PropertyDefinition>;
}

export const ObjectDefinition: Schema.Schema<ObjectDefinition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    options: Schema.optional(ObjectOptions),
    name: Schema.optional(Schema.String),
    propertyDefinitions: Schema.optional(Schema.Array(PropertyDefinition)),
  }).annotate({ identifier: "ObjectDefinition" });

export interface Cloudsearch_Schema {
  /** The list of top-level objects for the data source. The maximum number of elements is 10. */
  objectDefinitions?: ReadonlyArray<ObjectDefinition>;
  /** IDs of the Long Running Operations (LROs) currently running for this schema. After modifying the schema, wait for operations to complete before indexing additional content. */
  operationIds?: ReadonlyArray<string>;
}

export const Cloudsearch_Schema: Schema.Schema<Cloudsearch_Schema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectDefinitions: Schema.optional(Schema.Array(ObjectDefinition)),
    operationIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Cloudsearch_Schema" });

export interface DriveFollowUpRestrict {
  type?:
    | "UNSPECIFIED"
    | "FOLLOWUP_SUGGESTIONS"
    | "FOLLOWUP_ACTION_ITEMS"
    | (string & {});
}

export const DriveFollowUpRestrict: Schema.Schema<DriveFollowUpRestrict> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "DriveFollowUpRestrict" });

export interface UnmappedIdentity {
  /** The resource name for an external user. */
  externalIdentity?: Principal;
  /** The resolution status for the external identity. */
  resolutionStatusCode?:
    | "CODE_UNSPECIFIED"
    | "NOT_FOUND"
    | "IDENTITY_SOURCE_NOT_FOUND"
    | "IDENTITY_SOURCE_MISCONFIGURED"
    | "TOO_MANY_MAPPINGS_FOUND"
    | "INTERNAL_ERROR"
    | (string & {});
}

export const UnmappedIdentity: Schema.Schema<UnmappedIdentity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalIdentity: Schema.optional(Principal),
    resolutionStatusCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnmappedIdentity" });

export interface ListUnmappedIdentitiesResponse {
  unmappedIdentities?: ReadonlyArray<UnmappedIdentity>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const ListUnmappedIdentitiesResponse: Schema.Schema<ListUnmappedIdentitiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unmappedIdentities: Schema.optional(Schema.Array(UnmappedIdentity)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListUnmappedIdentitiesResponse" });

export interface InitializeCustomerRequest {}

export const InitializeCustomerRequest: Schema.Schema<InitializeCustomerRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "InitializeCustomerRequest",
  });

export interface DriveLocationRestrict {
  type?: "UNSPECIFIED" | "TRASHED" | "STARRED" | (string & {});
}

export const DriveLocationRestrict: Schema.Schema<DriveLocationRestrict> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "DriveLocationRestrict" });

export interface DriveMimeTypeRestrict {
  type?:
    | "UNSPECIFIED"
    | "PDF"
    | "DOCUMENT"
    | "PRESENTATION"
    | "SPREADSHEET"
    | "FORM"
    | "DRAWING"
    | "SCRIPT"
    | "MAP"
    | "IMAGE"
    | "AUDIO"
    | "VIDEO"
    | "FOLDER"
    | "ARCHIVE"
    | "SITE"
    | (string & {});
}

export const DriveMimeTypeRestrict: Schema.Schema<DriveMimeTypeRestrict> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "DriveMimeTypeRestrict" });

export interface CustomerSessionStats {
  /** The date for which session stats were calculated. Stats are calculated on the following day, close to midnight PST, and then returned. */
  date?: Cloudsearch_Date;
  /** The count of search sessions on the day */
  searchSessionsCount?: string;
}

export const CustomerSessionStats: Schema.Schema<CustomerSessionStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.optional(Cloudsearch_Date),
    searchSessionsCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerSessionStats" });

export interface GetCustomerSessionStatsResponse {
  stats?: ReadonlyArray<CustomerSessionStats>;
}

export const GetCustomerSessionStatsResponse: Schema.Schema<GetCustomerSessionStatsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stats: Schema.optional(Schema.Array(CustomerSessionStats)),
  }).annotate({ identifier: "GetCustomerSessionStatsResponse" });

export interface ListOperationsResponse {
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface ListDataSourceResponse {
  sources?: ReadonlyArray<DataSource>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const ListDataSourceResponse: Schema.Schema<ListDataSourceResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(Schema.Array(DataSource)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDataSourceResponse" });

export interface SearchRequest {
  /** Starting index of the results. */
  start?: number;
  /** Options to interpret the user query. */
  queryInterpretationOptions?: QueryInterpretationOptions;
  facetOptions?: ReadonlyArray<FacetOptions>;
  /** Maximum number of search results to return in one page. Valid values are between 1 and 100, inclusive. Default value is 10. Minimum value is 50 when results beyond 2000 are requested. */
  pageSize?: number;
  /** Context attributes for the request which will be used to adjust ranking of search results. The maximum number of elements is 10. */
  contextAttributes?: ReadonlyArray<ContextAttribute>;
  /** The sources to use for querying. If not specified, all data sources from the current search application are used. */
  dataSourceRestrictions?: ReadonlyArray<DataSourceRestriction>;
  /** The options for sorting the search results */
  sortOptions?: SortOptions;
  /** Request options, such as the search application and user timezone. */
  requestOptions?: RequestOptions;
  /** The raw query string. See supported search operators in the [Narrow your search with operators](https://support.google.com/cloudsearch/answer/6172299) */
  query?: string;
}

export const SearchRequest: Schema.Schema<SearchRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    start: Schema.optional(Schema.Number),
    queryInterpretationOptions: Schema.optional(QueryInterpretationOptions),
    facetOptions: Schema.optional(Schema.Array(FacetOptions)),
    pageSize: Schema.optional(Schema.Number),
    contextAttributes: Schema.optional(Schema.Array(ContextAttribute)),
    dataSourceRestrictions: Schema.optional(
      Schema.Array(DataSourceRestriction),
    ),
    sortOptions: Schema.optional(SortOptions),
    requestOptions: Schema.optional(RequestOptions),
    query: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchRequest" });

export interface Media {
  /** Name of the media resource. */
  resourceName?: string;
}

export const Media: Schema.Schema<Media> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Media" });

export interface QueryItem {
  /** True if the text was generated by means other than a previous user search. */
  isSynthetic?: boolean;
}

export const QueryItem: Schema.Schema<QueryItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isSynthetic: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "QueryItem" });

export interface PollItemsRequest {
  /** Queue name to fetch items from. If unspecified, PollItems will fetch from 'default' queue. The maximum length is 100 characters. */
  queue?: string;
  /** Maximum number of items to return. The maximum value is 100 and the default value is 20. */
  limit?: number;
  /** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
  connectorName?: string;
  /** Common debug options. */
  debugOptions?: DebugOptions;
  /** Limit the items polled to the ones with these statuses. */
  statusCodes?: ReadonlyArray<
    | "CODE_UNSPECIFIED"
    | "ERROR"
    | "MODIFIED"
    | "NEW_ITEM"
    | "ACCEPTED"
    | (string & {})
  >;
}

export const PollItemsRequest: Schema.Schema<PollItemsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queue: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    connectorName: Schema.optional(Schema.String),
    debugOptions: Schema.optional(DebugOptions),
    statusCodes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PollItemsRequest" });

export interface UpdateDataSourceRequest {
  /** Common debug options. */
  debugOptions?: DebugOptions;
  source?: DataSource;
  /** Only applies to [`settings.datasources.patch`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.datasources/patch). Update mask to control which fields to update. Example field paths: `name`, `displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the source, that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated. */
  updateMask?: string;
}

export const UpdateDataSourceRequest: Schema.Schema<UpdateDataSourceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    debugOptions: Schema.optional(DebugOptions),
    source: Schema.optional(DataSource),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateDataSourceRequest" });

export interface RestrictItem {
  driveFollowUpRestrict?: DriveFollowUpRestrict;
  driveTimeSpanRestrict?: DriveTimeSpanRestrict;
  /** Drive Types. */
  driveMimeTypeRestrict?: DriveMimeTypeRestrict;
  driveLocationRestrict?: DriveLocationRestrict;
  /** The search restrict (e.g. "after:2017-09-11 before:2017-09-12"). */
  searchOperator?: string;
}

export const RestrictItem: Schema.Schema<RestrictItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    driveFollowUpRestrict: Schema.optional(DriveFollowUpRestrict),
    driveTimeSpanRestrict: Schema.optional(DriveTimeSpanRestrict),
    driveMimeTypeRestrict: Schema.optional(DriveMimeTypeRestrict),
    driveLocationRestrict: Schema.optional(DriveLocationRestrict),
    searchOperator: Schema.optional(Schema.String),
  }).annotate({ identifier: "RestrictItem" });

export interface CheckAccessResponse {
  /** Returns true if principal has access. Returns false otherwise. */
  hasAccess?: boolean;
}

export const CheckAccessResponse: Schema.Schema<CheckAccessResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hasAccess: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CheckAccessResponse" });

export interface SearchItemsByViewUrlRequest {
  /** The next_page_token value returned from a previous request, if any. */
  pageToken?: string;
  /** Common debug options. */
  debugOptions?: DebugOptions;
  /** Specify the full view URL to find the corresponding item. The maximum length is 2048 characters. */
  viewUrl?: string;
}

export const SearchItemsByViewUrlRequest: Schema.Schema<SearchItemsByViewUrlRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String),
    debugOptions: Schema.optional(DebugOptions),
    viewUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchItemsByViewUrlRequest" });

export interface GetSearchApplicationUserStatsResponse {
  stats?: ReadonlyArray<SearchApplicationUserStats>;
}

export const GetSearchApplicationUserStatsResponse: Schema.Schema<GetSearchApplicationUserStatsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stats: Schema.optional(Schema.Array(SearchApplicationUserStats)),
  }).annotate({ identifier: "GetSearchApplicationUserStatsResponse" });

export interface GetCustomerQueryStatsResponse {
  stats?: ReadonlyArray<CustomerQueryStats>;
  /** Total successful query count (status code 200) for the given date range. */
  totalQueryCount?: string;
}

export const GetCustomerQueryStatsResponse: Schema.Schema<GetCustomerQueryStatsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stats: Schema.optional(Schema.Array(CustomerQueryStats)),
    totalQueryCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetCustomerQueryStatsResponse" });

export interface DeleteQueueItemsRequest {
  /** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
  connectorName?: string;
  /** Common debug options. */
  debugOptions?: DebugOptions;
  /** The name of a queue to delete items from. */
  queue?: string;
}

export const DeleteQueueItemsRequest: Schema.Schema<DeleteQueueItemsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectorName: Schema.optional(Schema.String),
    debugOptions: Schema.optional(DebugOptions),
    queue: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeleteQueueItemsRequest" });

export interface ListQuerySourcesResponse {
  sources?: ReadonlyArray<QuerySource>;
  nextPageToken?: string;
}

export const ListQuerySourcesResponse: Schema.Schema<ListQuerySourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(Schema.Array(QuerySource)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListQuerySourcesResponse" });

export interface SearchItemsByViewUrlResponse {
  items?: ReadonlyArray<Item>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const SearchItemsByViewUrlResponse: Schema.Schema<SearchItemsByViewUrlResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Item)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchItemsByViewUrlResponse" });

export interface ListSearchApplicationsResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  searchApplications?: ReadonlyArray<SearchApplication>;
}

export const ListSearchApplicationsResponse: Schema.Schema<ListSearchApplicationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    searchApplications: Schema.optional(Schema.Array(SearchApplication)),
  }).annotate({ identifier: "ListSearchApplicationsResponse" });

export interface GetSearchApplicationQueryStatsResponse {
  /** Query stats per date for a search application. */
  stats?: ReadonlyArray<SearchApplicationQueryStats>;
  /** Total successful query count (status code 200) for the given date range. */
  totalQueryCount?: string;
}

export const GetSearchApplicationQueryStatsResponse: Schema.Schema<GetSearchApplicationQueryStatsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stats: Schema.optional(Schema.Array(SearchApplicationQueryStats)),
    totalQueryCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetSearchApplicationQueryStatsResponse" });

export interface GetDataSourceIndexStatsResponse {
  /** Summary of indexed item counts, one for each day in the requested range. */
  stats?: ReadonlyArray<DataSourceIndexStats>;
  /** Average item count for the given date range for which billing is done. */
  averageIndexedItemCount?: string;
}

export const GetDataSourceIndexStatsResponse: Schema.Schema<GetDataSourceIndexStatsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stats: Schema.optional(Schema.Array(DataSourceIndexStats)),
    averageIndexedItemCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetDataSourceIndexStatsResponse" });

export interface UpdateSchemaRequest {
  /** If true, the schema will be checked for validity, but will not be registered with the data source, even if valid. */
  validateOnly?: boolean;
  /** Common debug options. */
  debugOptions?: DebugOptions;
  /** The new schema for the source. */
  schema?: Cloudsearch_Schema;
}

export const UpdateSchemaRequest: Schema.Schema<UpdateSchemaRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean),
    debugOptions: Schema.optional(DebugOptions),
    schema: Schema.optional(Cloudsearch_Schema),
  }).annotate({ identifier: "UpdateSchemaRequest" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface GetOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOperationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetOperationsRequest>;

export type GetOperationsResponse = Operation;
export const GetOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetOperationsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOperations: API.OperationMethod<
  GetOperationsRequest,
  GetOperationsResponse,
  GetOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOperationsRequest,
  output: GetOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOperationsLroRequest {
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListOperationsLroRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/lro" }),
    svc,
  ) as unknown as Schema.Schema<ListOperationsLroRequest>;

export type ListOperationsLroResponse = ListOperationsResponse;
export const ListOperationsLroResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListOperationsLroError = DefaultErrors | NotFound | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listOperationsLro: API.PaginatedOperationMethod<
  ListOperationsLroRequest,
  ListOperationsLroResponse,
  ListOperationsLroError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOperationsLroRequest,
  output: ListOperationsLroResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface InitializeCustomerV1Request {
  /** Request body */
  body?: InitializeCustomerRequest;
}

export const InitializeCustomerV1Request =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(InitializeCustomerRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1:initializeCustomer", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<InitializeCustomerV1Request>;

export type InitializeCustomerV1Response = Operation;
export const InitializeCustomerV1Response =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type InitializeCustomerV1Error =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute. */
export const initializeCustomerV1: API.OperationMethod<
  InitializeCustomerV1Request,
  InitializeCustomerV1Response,
  InitializeCustomerV1Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InitializeCustomerV1Request,
  output: InitializeCustomerV1Response,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateSchemaIndexingDatasourcesRequest {
  /** The name of the data source to update Schema. Format: datasources/{source_id} */
  name: string;
  /** Request body */
  body?: UpdateSchemaRequest;
}

export const UpdateSchemaIndexingDatasourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpdateSchemaRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "v1/indexing/{+name}/schema",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateSchemaIndexingDatasourcesRequest>;

export type UpdateSchemaIndexingDatasourcesResponse = Operation;
export const UpdateSchemaIndexingDatasourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateSchemaIndexingDatasourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute. */
export const updateSchemaIndexingDatasources: API.OperationMethod<
  UpdateSchemaIndexingDatasourcesRequest,
  UpdateSchemaIndexingDatasourcesResponse,
  UpdateSchemaIndexingDatasourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSchemaIndexingDatasourcesRequest,
  output: UpdateSchemaIndexingDatasourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSchemaIndexingDatasourcesRequest {
  /** The name of the data source to get Schema. Format: datasources/{source_id} */
  name: string;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "debugOptions.enableDebugging"?: boolean;
}

export const GetSchemaIndexingDatasourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    "debugOptions.enableDebugging": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("debugOptions.enableDebugging"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/indexing/{+name}/schema" }),
    svc,
  ) as unknown as Schema.Schema<GetSchemaIndexingDatasourcesRequest>;

export type GetSchemaIndexingDatasourcesResponse = Cloudsearch_Schema;
export const GetSchemaIndexingDatasourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Cloudsearch_Schema;

export type GetSchemaIndexingDatasourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the schema of a data source. **Note:** This API requires an admin or service account to execute. */
export const getSchemaIndexingDatasources: API.OperationMethod<
  GetSchemaIndexingDatasourcesRequest,
  GetSchemaIndexingDatasourcesResponse,
  GetSchemaIndexingDatasourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSchemaIndexingDatasourcesRequest,
  output: GetSchemaIndexingDatasourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteSchemaIndexingDatasourcesRequest {
  /** The name of the data source to delete Schema. Format: datasources/{source_id} */
  name: string;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "debugOptions.enableDebugging"?: boolean;
}

export const DeleteSchemaIndexingDatasourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    "debugOptions.enableDebugging": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("debugOptions.enableDebugging"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/indexing/{+name}/schema" }),
    svc,
  ) as unknown as Schema.Schema<DeleteSchemaIndexingDatasourcesRequest>;

export type DeleteSchemaIndexingDatasourcesResponse = Operation;
export const DeleteSchemaIndexingDatasourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteSchemaIndexingDatasourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute. */
export const deleteSchemaIndexingDatasources: API.OperationMethod<
  DeleteSchemaIndexingDatasourcesRequest,
  DeleteSchemaIndexingDatasourcesResponse,
  DeleteSchemaIndexingDatasourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSchemaIndexingDatasourcesRequest,
  output: DeleteSchemaIndexingDatasourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteQueueItemsIndexingDatasourcesItemsRequest {
  /** The name of the Data Source to delete items in a queue. Format: datasources/{source_id} */
  name: string;
  /** Request body */
  body?: DeleteQueueItemsRequest;
}

export const DeleteQueueItemsIndexingDatasourcesItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DeleteQueueItemsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/indexing/{+name}/items:deleteQueueItems",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteQueueItemsIndexingDatasourcesItemsRequest>;

export type DeleteQueueItemsIndexingDatasourcesItemsResponse = Operation;
export const DeleteQueueItemsIndexingDatasourcesItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteQueueItemsIndexingDatasourcesItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source. */
export const deleteQueueItemsIndexingDatasourcesItems: API.OperationMethod<
  DeleteQueueItemsIndexingDatasourcesItemsRequest,
  DeleteQueueItemsIndexingDatasourcesItemsResponse,
  DeleteQueueItemsIndexingDatasourcesItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteQueueItemsIndexingDatasourcesItemsRequest,
  output: DeleteQueueItemsIndexingDatasourcesItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteIndexingDatasourcesItemsRequest {
  /** Required. The RequestMode for this request. */
  mode?: "UNSPECIFIED" | "SYNCHRONOUS" | "ASYNCHRONOUS" | (string & {});
  /** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
  connectorName?: string;
  /** Required. The incremented version of the item to delete from the index. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes. For information on how item version affects the deletion process, refer to [Handle revisions after manual deletes](https://developers.google.com/workspace/cloud-search/docs/guides/operations). */
  version?: string;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "debugOptions.enableDebugging"?: boolean;
  /** Required. The name of the item to delete. Format: datasources/{source_id}/items/{item_id} */
  name: string;
}

export const DeleteIndexingDatasourcesItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String).pipe(T.HttpQuery("mode")),
    connectorName: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectorName"),
    ),
    version: Schema.optional(Schema.String).pipe(T.HttpQuery("version")),
    "debugOptions.enableDebugging": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("debugOptions.enableDebugging"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/indexing/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteIndexingDatasourcesItemsRequest>;

export type DeleteIndexingDatasourcesItemsResponse = Operation;
export const DeleteIndexingDatasourcesItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteIndexingDatasourcesItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source. */
export const deleteIndexingDatasourcesItems: API.OperationMethod<
  DeleteIndexingDatasourcesItemsRequest,
  DeleteIndexingDatasourcesItemsResponse,
  DeleteIndexingDatasourcesItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteIndexingDatasourcesItemsRequest,
  output: DeleteIndexingDatasourcesItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PollIndexingDatasourcesItemsRequest {
  /** The name of the Data Source to poll items. Format: datasources/{source_id} */
  name: string;
  /** Request body */
  body?: PollItemsRequest;
}

export const PollIndexingDatasourcesItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PollItemsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/indexing/{+name}/items:poll",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PollIndexingDatasourcesItemsRequest>;

export type PollIndexingDatasourcesItemsResponse = PollItemsResponse;
export const PollIndexingDatasourcesItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PollItemsResponse;

export type PollIndexingDatasourcesItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source. */
export const pollIndexingDatasourcesItems: API.OperationMethod<
  PollIndexingDatasourcesItemsRequest,
  PollIndexingDatasourcesItemsResponse,
  PollIndexingDatasourcesItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PollIndexingDatasourcesItemsRequest,
  output: PollIndexingDatasourcesItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListIndexingDatasourcesItemsRequest {
  /** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
  connectorName?: string;
  /** When set to true, the indexing system only populates the following fields: name, version, queue. metadata.hash, metadata.title, metadata.sourceRepositoryURL, metadata.objectType, metadata.createTime, metadata.updateTime, metadata.contentLanguage, metadata.mimeType, structured_data.hash, content.hash, itemType, itemStatus.code, itemStatus.processingError.code, itemStatus.repositoryError.type, If this value is false, then all the fields are populated in Item. */
  brief?: boolean;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "debugOptions.enableDebugging"?: boolean;
  /** The name of the Data Source to list Items. Format: datasources/{source_id} */
  name: string;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
  /** Maximum number of items to fetch in a request. The max value is 1000 when brief is true. The max value is 10 if brief is false. The default value is 10 */
  pageSize?: number;
}

export const ListIndexingDatasourcesItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectorName: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectorName"),
    ),
    brief: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("brief")),
    "debugOptions.enableDebugging": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("debugOptions.enableDebugging"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/indexing/{+name}/items" }),
    svc,
  ) as unknown as Schema.Schema<ListIndexingDatasourcesItemsRequest>;

export type ListIndexingDatasourcesItemsResponse = ListItemsResponse;
export const ListIndexingDatasourcesItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListItemsResponse;

export type ListIndexingDatasourcesItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source. */
export const listIndexingDatasourcesItems: API.PaginatedOperationMethod<
  ListIndexingDatasourcesItemsRequest,
  ListIndexingDatasourcesItemsResponse,
  ListIndexingDatasourcesItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListIndexingDatasourcesItemsRequest,
  output: ListIndexingDatasourcesItemsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface GetIndexingDatasourcesItemsRequest {
  /** The name of the item to get info. Format: datasources/{source_id}/items/{item_id} */
  name: string;
  /** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
  connectorName?: string;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "debugOptions.enableDebugging"?: boolean;
}

export const GetIndexingDatasourcesItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    connectorName: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectorName"),
    ),
    "debugOptions.enableDebugging": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("debugOptions.enableDebugging"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/indexing/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetIndexingDatasourcesItemsRequest>;

export type GetIndexingDatasourcesItemsResponse = Item;
export const GetIndexingDatasourcesItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Item;

export type GetIndexingDatasourcesItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source. */
export const getIndexingDatasourcesItems: API.OperationMethod<
  GetIndexingDatasourcesItemsRequest,
  GetIndexingDatasourcesItemsResponse,
  GetIndexingDatasourcesItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIndexingDatasourcesItemsRequest,
  output: GetIndexingDatasourcesItemsResponse,
  errors: [NotFound, Forbidden],
}));

export interface IndexIndexingDatasourcesItemsRequest {
  /** The name of the Item. Format: datasources/{source_id}/items/{item_id} This is a required field. The maximum length is 1536 characters. */
  name: string;
  /** Request body */
  body?: IndexItemRequest;
}

export const IndexIndexingDatasourcesItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(IndexItemRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/indexing/{+name}:index",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<IndexIndexingDatasourcesItemsRequest>;

export type IndexIndexingDatasourcesItemsResponse = Operation;
export const IndexIndexingDatasourcesItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type IndexIndexingDatasourcesItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source. */
export const indexIndexingDatasourcesItems: API.OperationMethod<
  IndexIndexingDatasourcesItemsRequest,
  IndexIndexingDatasourcesItemsResponse,
  IndexIndexingDatasourcesItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: IndexIndexingDatasourcesItemsRequest,
  output: IndexIndexingDatasourcesItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PushIndexingDatasourcesItemsRequest {
  /** The name of the item to push into the indexing queue. Format: datasources/{source_id}/items/{ID} This is a required field. The maximum length is 1536 characters. */
  name: string;
  /** Request body */
  body?: PushItemRequest;
}

export const PushIndexingDatasourcesItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PushItemRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/indexing/{+name}:push", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PushIndexingDatasourcesItemsRequest>;

export type PushIndexingDatasourcesItemsResponse = Item;
export const PushIndexingDatasourcesItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Item;

export type PushIndexingDatasourcesItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source. */
export const pushIndexingDatasourcesItems: API.OperationMethod<
  PushIndexingDatasourcesItemsRequest,
  PushIndexingDatasourcesItemsResponse,
  PushIndexingDatasourcesItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PushIndexingDatasourcesItemsRequest,
  output: PushIndexingDatasourcesItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnreserveIndexingDatasourcesItemsRequest {
  /** The name of the Data Source to unreserve all items. Format: datasources/{source_id} */
  name: string;
  /** Request body */
  body?: UnreserveItemsRequest;
}

export const UnreserveIndexingDatasourcesItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UnreserveItemsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/indexing/{+name}/items:unreserve",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UnreserveIndexingDatasourcesItemsRequest>;

export type UnreserveIndexingDatasourcesItemsResponse = Operation;
export const UnreserveIndexingDatasourcesItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UnreserveIndexingDatasourcesItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source. */
export const unreserveIndexingDatasourcesItems: API.OperationMethod<
  UnreserveIndexingDatasourcesItemsRequest,
  UnreserveIndexingDatasourcesItemsResponse,
  UnreserveIndexingDatasourcesItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnreserveIndexingDatasourcesItemsRequest,
  output: UnreserveIndexingDatasourcesItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UploadIndexingDatasourcesItemsRequest {
  /** The name of the Item to start a resumable upload. Format: datasources/{source_id}/items/{item_id}. The maximum length is 1536 bytes. */
  name: string;
  /** Request body */
  body?: StartUploadItemRequest;
}

export const UploadIndexingDatasourcesItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StartUploadItemRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/indexing/{+name}:upload",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UploadIndexingDatasourcesItemsRequest>;

export type UploadIndexingDatasourcesItemsResponse = UploadItemRef;
export const UploadIndexingDatasourcesItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UploadItemRef;

export type UploadIndexingDatasourcesItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source. */
export const uploadIndexingDatasourcesItems: API.OperationMethod<
  UploadIndexingDatasourcesItemsRequest,
  UploadIndexingDatasourcesItemsResponse,
  UploadIndexingDatasourcesItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadIndexingDatasourcesItemsRequest,
  output: UploadIndexingDatasourcesItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SuggestQueryRequest {
  /** Request body */
  body?: SuggestRequest;
}

export const SuggestQueryRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(SuggestRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/query/suggest", hasBody: true }),
  svc,
) as unknown as Schema.Schema<SuggestQueryRequest>;

export type SuggestQueryResponse = SuggestResponse;
export const SuggestQueryResponse = /*@__PURE__*/ /*#__PURE__*/ SuggestResponse;

export type SuggestQueryError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/workspace/cloud-search/docs/guides/delegation/). */
export const suggestQuery: API.OperationMethod<
  SuggestQueryRequest,
  SuggestQueryResponse,
  SuggestQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SuggestQueryRequest,
  output: SuggestQueryResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchQueryRequest {
  /** Request body */
  body?: SearchRequest;
}

export const SearchQueryRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(SearchRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/query/search", hasBody: true }),
  svc,
) as unknown as Schema.Schema<SearchQueryRequest>;

export type SearchQueryResponse = SearchResponse;
export const SearchQueryResponse = /*@__PURE__*/ /*#__PURE__*/ SearchResponse;

export type SearchQueryError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/workspace/cloud-search/docs/guides/delegation/). */
export const searchQuery: API.OperationMethod<
  SearchQueryRequest,
  SearchQueryResponse,
  SearchQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchQueryRequest,
  output: SearchQueryResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemoveActivityQueryRequest {
  /** Request body */
  body?: RemoveActivityRequest;
}

export const RemoveActivityQueryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(RemoveActivityRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/query:removeActivity", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RemoveActivityQueryRequest>;

export type RemoveActivityQueryResponse = RemoveActivityResponse;
export const RemoveActivityQueryResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemoveActivityResponse;

export type RemoveActivityQueryError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Provides functionality to remove logged activity for a user. Currently to be used only for Chat 1p clients **Note:** This API requires a standard end user account to execute. A service account can't perform Remove Activity requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/workspace/cloud-search/docs/guides/delegation/). */
export const removeActivityQuery: API.OperationMethod<
  RemoveActivityQueryRequest,
  RemoveActivityQueryResponse,
  RemoveActivityQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveActivityQueryRequest,
  output: RemoveActivityQueryResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListQuerySourcesRequest {
  /** The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922). */
  "requestOptions.searchApplicationId"?: string;
  /** Number of sources to return in the response. */
  pageToken?: string;
  /** The BCP-47 language code, such as "pt" or "en". It represents the user's preferred Display Language. */
  "requestOptions.clientDisplayLanguageCode"?: string;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "requestOptions.debugOptions.enableDebugging"?: boolean;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. The Suggest API uses this field as a hint to make better third-party autocomplete predictions. */
  "requestOptions.languageCode"?: string;
  /** Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used. */
  "requestOptions.timeZone"?: string;
}

export const ListQuerySourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "requestOptions.searchApplicationId": Schema.optional(Schema.String).pipe(
      T.HttpQuery("requestOptions.searchApplicationId"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    "requestOptions.clientDisplayLanguageCode": Schema.optional(
      Schema.String,
    ).pipe(T.HttpQuery("requestOptions.clientDisplayLanguageCode")),
    "requestOptions.debugOptions.enableDebugging": Schema.optional(
      Schema.Boolean,
    ).pipe(T.HttpQuery("requestOptions.debugOptions.enableDebugging")),
    "requestOptions.languageCode": Schema.optional(Schema.String).pipe(
      T.HttpQuery("requestOptions.languageCode"),
    ),
    "requestOptions.timeZone": Schema.optional(Schema.String).pipe(
      T.HttpQuery("requestOptions.timeZone"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/query/sources" }),
    svc,
  ) as unknown as Schema.Schema<ListQuerySourcesRequest>;

export type ListQuerySourcesResponse_Op = ListQuerySourcesResponse;
export const ListQuerySourcesResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListQuerySourcesResponse;

export type ListQuerySourcesError = DefaultErrors | NotFound | Forbidden;

/** Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/workspace/cloud-search/docs/guides/delegation/). */
export const listQuerySources: API.PaginatedOperationMethod<
  ListQuerySourcesRequest,
  ListQuerySourcesResponse_Op,
  ListQuerySourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListQuerySourcesRequest,
  output: ListQuerySourcesResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UploadMediaRequest {
  /** Name of the media that is being downloaded. See ReadRequest.resource_name. */
  resourceName: string;
  /** Request body */
  body?: Media;
}

export const UploadMediaRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceName: Schema.String.pipe(T.HttpPath("resourceName")),
  body: Schema.optional(Media).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/media/{+resourceName}", hasBody: true }),
  svc,
) as unknown as Schema.Schema<UploadMediaRequest>;

export type UploadMediaResponse = Media;
export const UploadMediaResponse = /*@__PURE__*/ /*#__PURE__*/ Media;

export type UploadMediaError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content connector using the REST API](https://developers.google.com/workspace/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute. */
export const uploadMedia: API.OperationMethod<
  UploadMediaRequest,
  UploadMediaResponse,
  UploadMediaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadMediaRequest,
  output: UploadMediaResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CheckAccessDebugDatasourcesItemsRequest {
  /** Item name, format: datasources/{source_id}/items/{item_id} */
  name: string;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "debugOptions.enableDebugging"?: boolean;
  /** Request body */
  body?: Principal;
}

export const CheckAccessDebugDatasourcesItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    "debugOptions.enableDebugging": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("debugOptions.enableDebugging"),
    ),
    body: Schema.optional(Principal).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/debug/{+name}:checkAccess",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CheckAccessDebugDatasourcesItemsRequest>;

export type CheckAccessDebugDatasourcesItemsResponse = CheckAccessResponse;
export const CheckAccessDebugDatasourcesItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CheckAccessResponse;

export type CheckAccessDebugDatasourcesItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute. */
export const checkAccessDebugDatasourcesItems: API.OperationMethod<
  CheckAccessDebugDatasourcesItemsRequest,
  CheckAccessDebugDatasourcesItemsResponse,
  CheckAccessDebugDatasourcesItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CheckAccessDebugDatasourcesItemsRequest,
  output: CheckAccessDebugDatasourcesItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchByViewUrlDebugDatasourcesItemsRequest {
  /** Source name, format: datasources/{source_id} */
  name: string;
  /** Request body */
  body?: SearchItemsByViewUrlRequest;
}

export const SearchByViewUrlDebugDatasourcesItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SearchItemsByViewUrlRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/debug/{+name}/items:searchByViewUrl",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchByViewUrlDebugDatasourcesItemsRequest>;

export type SearchByViewUrlDebugDatasourcesItemsResponse =
  SearchItemsByViewUrlResponse;
export const SearchByViewUrlDebugDatasourcesItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchItemsByViewUrlResponse;

export type SearchByViewUrlDebugDatasourcesItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute. */
export const searchByViewUrlDebugDatasourcesItems: API.OperationMethod<
  SearchByViewUrlDebugDatasourcesItemsRequest,
  SearchByViewUrlDebugDatasourcesItemsResponse,
  SearchByViewUrlDebugDatasourcesItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchByViewUrlDebugDatasourcesItemsRequest,
  output: SearchByViewUrlDebugDatasourcesItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDebugDatasourcesItemsUnmappedidsRequest {
  /** The name of the item, in the following format: datasources/{source_id}/items/{ID} */
  parent: string;
  /** Maximum number of items to fetch in a request. Defaults to 100. */
  pageSize?: number;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "debugOptions.enableDebugging"?: boolean;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListDebugDatasourcesItemsUnmappedidsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    "debugOptions.enableDebugging": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("debugOptions.enableDebugging"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/debug/{+parent}/unmappedids" }),
    svc,
  ) as unknown as Schema.Schema<ListDebugDatasourcesItemsUnmappedidsRequest>;

export type ListDebugDatasourcesItemsUnmappedidsResponse =
  ListUnmappedIdentitiesResponse;
export const ListDebugDatasourcesItemsUnmappedidsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUnmappedIdentitiesResponse;

export type ListDebugDatasourcesItemsUnmappedidsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all unmapped identities for a specific item. **Note:** This API requires an admin account to execute. */
export const listDebugDatasourcesItemsUnmappedids: API.PaginatedOperationMethod<
  ListDebugDatasourcesItemsUnmappedidsRequest,
  ListDebugDatasourcesItemsUnmappedidsResponse,
  ListDebugDatasourcesItemsUnmappedidsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDebugDatasourcesItemsUnmappedidsRequest,
  output: ListDebugDatasourcesItemsUnmappedidsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListDebugIdentitysourcesUnmappedidsRequest {
  /** The name of the identity source, in the following format: identitysources/{source_id} */
  parent: string;
  /** Limit users selection to this status. */
  resolutionStatusCode?:
    | "CODE_UNSPECIFIED"
    | "NOT_FOUND"
    | "IDENTITY_SOURCE_NOT_FOUND"
    | "IDENTITY_SOURCE_MISCONFIGURED"
    | "TOO_MANY_MAPPINGS_FOUND"
    | "INTERNAL_ERROR"
    | (string & {});
  /** Maximum number of items to fetch in a request. Defaults to 100. */
  pageSize?: number;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "debugOptions.enableDebugging"?: boolean;
}

export const ListDebugIdentitysourcesUnmappedidsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    resolutionStatusCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resolutionStatusCode"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    "debugOptions.enableDebugging": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("debugOptions.enableDebugging"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/debug/{+parent}/unmappedids" }),
    svc,
  ) as unknown as Schema.Schema<ListDebugIdentitysourcesUnmappedidsRequest>;

export type ListDebugIdentitysourcesUnmappedidsResponse =
  ListUnmappedIdentitiesResponse;
export const ListDebugIdentitysourcesUnmappedidsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUnmappedIdentitiesResponse;

export type ListDebugIdentitysourcesUnmappedidsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute. */
export const listDebugIdentitysourcesUnmappedids: API.PaginatedOperationMethod<
  ListDebugIdentitysourcesUnmappedidsRequest,
  ListDebugIdentitysourcesUnmappedidsResponse,
  ListDebugIdentitysourcesUnmappedidsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDebugIdentitysourcesUnmappedidsRequest,
  output: ListDebugIdentitysourcesUnmappedidsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListForunmappedidentityDebugIdentitysourcesItemsRequest {
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
  userResourceName?: string;
  /** The name of the identity source, in the following format: identitysources/{source_id}} */
  parent: string;
  /** Maximum number of items to fetch in a request. Defaults to 100. */
  pageSize?: number;
  groupResourceName?: string;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "debugOptions.enableDebugging"?: boolean;
}

export const ListForunmappedidentityDebugIdentitysourcesItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    userResourceName: Schema.optional(Schema.String).pipe(
      T.HttpQuery("userResourceName"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    groupResourceName: Schema.optional(Schema.String).pipe(
      T.HttpQuery("groupResourceName"),
    ),
    "debugOptions.enableDebugging": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("debugOptions.enableDebugging"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/debug/{+parent}/items:forunmappedidentity",
    }),
    svc,
  ) as unknown as Schema.Schema<ListForunmappedidentityDebugIdentitysourcesItemsRequest>;

export type ListForunmappedidentityDebugIdentitysourcesItemsResponse =
  ListItemNamesForUnmappedIdentityResponse;
export const ListForunmappedidentityDebugIdentitysourcesItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListItemNamesForUnmappedIdentityResponse;

export type ListForunmappedidentityDebugIdentitysourcesItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute. */
export const listForunmappedidentityDebugIdentitysourcesItems: API.PaginatedOperationMethod<
  ListForunmappedidentityDebugIdentitysourcesItemsRequest,
  ListForunmappedidentityDebugIdentitysourcesItemsResponse,
  ListForunmappedidentityDebugIdentitysourcesItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListForunmappedidentityDebugIdentitysourcesItemsRequest,
  output: ListForunmappedidentityDebugIdentitysourcesItemsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetCustomerSettingsRequest {}

export const GetCustomerSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "v1/settings/customer" }),
    svc,
  ) as unknown as Schema.Schema<GetCustomerSettingsRequest>;

export type GetCustomerSettingsResponse = CustomerSettings;
export const GetCustomerSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomerSettings;

export type GetCustomerSettingsError = DefaultErrors | NotFound | Forbidden;

/** Get customer settings. **Note:** This API requires an admin account to execute. */
export const getCustomerSettings: API.OperationMethod<
  GetCustomerSettingsRequest,
  GetCustomerSettingsResponse,
  GetCustomerSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomerSettingsRequest,
  output: GetCustomerSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateCustomerSettingsRequest {
  /** Update mask to control which fields get updated. If you specify a field in the update_mask but don't specify its value here, that field will be cleared. If the mask is not present or empty, all fields will be updated. Currently supported field paths: vpc_settings and audit_logging_settings */
  updateMask?: string;
  /** Request body */
  body?: CustomerSettings;
}

export const UpdateCustomerSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(CustomerSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/settings/customer", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateCustomerSettingsRequest>;

export type UpdateCustomerSettingsResponse = Operation;
export const UpdateCustomerSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateCustomerSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update customer settings. **Note:** This API requires an admin account to execute. */
export const updateCustomerSettings: API.OperationMethod<
  UpdateCustomerSettingsRequest,
  UpdateCustomerSettingsResponse,
  UpdateCustomerSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateCustomerSettingsRequest,
  output: UpdateCustomerSettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchSettingsSearchapplicationsRequest {
  /** The name of the Search Application. Format: searchapplications/{application_id}. */
  name: string;
  /** Only applies to [`settings.searchapplications.patch`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch). Update mask to control which fields to update. Example field paths: `search_application.name`, `search_application.displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the `search_application`, then that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated. */
  updateMask?: string;
  /** Request body */
  body?: SearchApplication;
}

export const PatchSettingsSearchapplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SearchApplication).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/settings/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchSettingsSearchapplicationsRequest>;

export type PatchSettingsSearchapplicationsResponse = Operation;
export const PatchSettingsSearchapplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchSettingsSearchapplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a search application. **Note:** This API requires an admin account to execute. */
export const patchSettingsSearchapplications: API.OperationMethod<
  PatchSettingsSearchapplicationsRequest,
  PatchSettingsSearchapplicationsResponse,
  PatchSettingsSearchapplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSettingsSearchapplicationsRequest,
  output: PatchSettingsSearchapplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSettingsSearchapplicationsRequest {
  /** The name of the search application. Format: searchapplications/{application_id}. */
  name: string;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "debugOptions.enableDebugging"?: boolean;
}

export const GetSettingsSearchapplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    "debugOptions.enableDebugging": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("debugOptions.enableDebugging"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/settings/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSettingsSearchapplicationsRequest>;

export type GetSettingsSearchapplicationsResponse = SearchApplication;
export const GetSettingsSearchapplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchApplication;

export type GetSettingsSearchapplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the specified search application. **Note:** This API requires an admin account to execute. */
export const getSettingsSearchapplications: API.OperationMethod<
  GetSettingsSearchapplicationsRequest,
  GetSettingsSearchapplicationsResponse,
  GetSettingsSearchapplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingsSearchapplicationsRequest,
  output: GetSettingsSearchapplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ResetSettingsSearchapplicationsRequest {
  /** The name of the search application to be reset. Format: applications/{application_id}. */
  name: string;
  /** Request body */
  body?: ResetSearchApplicationRequest;
}

export const ResetSettingsSearchapplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ResetSearchApplicationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/settings/{+name}:reset",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResetSettingsSearchapplicationsRequest>;

export type ResetSettingsSearchapplicationsResponse = Operation;
export const ResetSettingsSearchapplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ResetSettingsSearchapplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute. */
export const resetSettingsSearchapplications: API.OperationMethod<
  ResetSettingsSearchapplicationsRequest,
  ResetSettingsSearchapplicationsResponse,
  ResetSettingsSearchapplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetSettingsSearchapplicationsRequest,
  output: ResetSettingsSearchapplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateSettingsSearchapplicationsRequest {
  /** Only applies to [`settings.searchapplications.patch`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch). Update mask to control which fields to update. Example field paths: `search_application.name`, `search_application.displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the `search_application`, then that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated. */
  updateMask?: string;
  /** The name of the Search Application. Format: searchapplications/{application_id}. */
  name: string;
  /** Request body */
  body?: SearchApplication;
}

export const UpdateSettingsSearchapplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SearchApplication).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v1/settings/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSettingsSearchapplicationsRequest>;

export type UpdateSettingsSearchapplicationsResponse = Operation;
export const UpdateSettingsSearchapplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateSettingsSearchapplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a search application. **Note:** This API requires an admin account to execute. */
export const updateSettingsSearchapplications: API.OperationMethod<
  UpdateSettingsSearchapplicationsRequest,
  UpdateSettingsSearchapplicationsResponse,
  UpdateSettingsSearchapplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSettingsSearchapplicationsRequest,
  output: UpdateSettingsSearchapplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateSettingsSearchapplicationsRequest {
  /** Request body */
  body?: SearchApplication;
}

export const CreateSettingsSearchapplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(SearchApplication).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/settings/searchapplications",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateSettingsSearchapplicationsRequest>;

export type CreateSettingsSearchapplicationsResponse = Operation;
export const CreateSettingsSearchapplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateSettingsSearchapplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a search application. **Note:** This API requires an admin account to execute. */
export const createSettingsSearchapplications: API.OperationMethod<
  CreateSettingsSearchapplicationsRequest,
  CreateSettingsSearchapplicationsResponse,
  CreateSettingsSearchapplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSettingsSearchapplicationsRequest,
  output: CreateSettingsSearchapplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListSettingsSearchapplicationsRequest {
  /** The next_page_token value returned from a previous List request, if any. The default value is 10 */
  pageToken?: string;
  /** The maximum number of items to return. */
  pageSize?: number;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "debugOptions.enableDebugging"?: boolean;
}

export const ListSettingsSearchapplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    "debugOptions.enableDebugging": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("debugOptions.enableDebugging"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/settings/searchapplications" }),
    svc,
  ) as unknown as Schema.Schema<ListSettingsSearchapplicationsRequest>;

export type ListSettingsSearchapplicationsResponse =
  ListSearchApplicationsResponse;
export const ListSettingsSearchapplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSearchApplicationsResponse;

export type ListSettingsSearchapplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all search applications. **Note:** This API requires an admin account to execute. */
export const listSettingsSearchapplications: API.PaginatedOperationMethod<
  ListSettingsSearchapplicationsRequest,
  ListSettingsSearchapplicationsResponse,
  ListSettingsSearchapplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSettingsSearchapplicationsRequest,
  output: ListSettingsSearchapplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteSettingsSearchapplicationsRequest {
  /** The name of the search application to be deleted. Format: applications/{application_id}. */
  name: string;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "debugOptions.enableDebugging"?: boolean;
}

export const DeleteSettingsSearchapplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    "debugOptions.enableDebugging": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("debugOptions.enableDebugging"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/settings/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteSettingsSearchapplicationsRequest>;

export type DeleteSettingsSearchapplicationsResponse = Operation;
export const DeleteSettingsSearchapplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteSettingsSearchapplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a search application. **Note:** This API requires an admin account to execute. */
export const deleteSettingsSearchapplications: API.OperationMethod<
  DeleteSettingsSearchapplicationsRequest,
  DeleteSettingsSearchapplicationsResponse,
  DeleteSettingsSearchapplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSettingsSearchapplicationsRequest,
  output: DeleteSettingsSearchapplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchSettingsDatasourcesRequest {
  /** The name of the datasource resource. Format: datasources/{source_id}. The name is ignored when creating a datasource. */
  name: string;
  /** Only applies to [`settings.datasources.patch`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.datasources/patch). Update mask to control which fields to update. Example field paths: `name`, `displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the source, that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated. */
  updateMask?: string;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "debugOptions.enableDebugging"?: boolean;
  /** Request body */
  body?: DataSource;
}

export const PatchSettingsDatasourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    "debugOptions.enableDebugging": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("debugOptions.enableDebugging"),
    ),
    body: Schema.optional(DataSource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/settings/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchSettingsDatasourcesRequest>;

export type PatchSettingsDatasourcesResponse = Operation;
export const PatchSettingsDatasourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchSettingsDatasourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a datasource. **Note:** This API requires an admin account to execute. */
export const patchSettingsDatasources: API.OperationMethod<
  PatchSettingsDatasourcesRequest,
  PatchSettingsDatasourcesResponse,
  PatchSettingsDatasourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSettingsDatasourcesRequest,
  output: PatchSettingsDatasourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSettingsDatasourcesRequest {
  /** The name of the datasource resource. Format: datasources/{source_id}. */
  name: string;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "debugOptions.enableDebugging"?: boolean;
}

export const GetSettingsDatasourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    "debugOptions.enableDebugging": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("debugOptions.enableDebugging"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/settings/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSettingsDatasourcesRequest>;

export type GetSettingsDatasourcesResponse = DataSource;
export const GetSettingsDatasourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataSource;

export type GetSettingsDatasourcesError = DefaultErrors | NotFound | Forbidden;

/** Gets a datasource. **Note:** This API requires an admin account to execute. */
export const getSettingsDatasources: API.OperationMethod<
  GetSettingsDatasourcesRequest,
  GetSettingsDatasourcesResponse,
  GetSettingsDatasourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingsDatasourcesRequest,
  output: GetSettingsDatasourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateSettingsDatasourcesRequest {
  /** The name of the datasource resource. Format: datasources/{source_id}. The name is ignored when creating a datasource. */
  name: string;
  /** Request body */
  body?: UpdateDataSourceRequest;
}

export const UpdateSettingsDatasourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpdateDataSourceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v1/settings/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSettingsDatasourcesRequest>;

export type UpdateSettingsDatasourcesResponse = Operation;
export const UpdateSettingsDatasourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateSettingsDatasourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a datasource. **Note:** This API requires an admin account to execute. */
export const updateSettingsDatasources: API.OperationMethod<
  UpdateSettingsDatasourcesRequest,
  UpdateSettingsDatasourcesResponse,
  UpdateSettingsDatasourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSettingsDatasourcesRequest,
  output: UpdateSettingsDatasourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateSettingsDatasourcesRequest {
  /** Request body */
  body?: DataSource;
}

export const CreateSettingsDatasourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(DataSource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/settings/datasources", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateSettingsDatasourcesRequest>;

export type CreateSettingsDatasourcesResponse = Operation;
export const CreateSettingsDatasourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateSettingsDatasourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a datasource. **Note:** This API requires an admin account to execute. */
export const createSettingsDatasources: API.OperationMethod<
  CreateSettingsDatasourcesRequest,
  CreateSettingsDatasourcesResponse,
  CreateSettingsDatasourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSettingsDatasourcesRequest,
  output: CreateSettingsDatasourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListSettingsDatasourcesRequest {
  /** Maximum number of datasources to fetch in a request. The max value is 1000. The default value is 1000. */
  pageSize?: number;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "debugOptions.enableDebugging"?: boolean;
  /** Starting index of the results. */
  pageToken?: string;
}

export const ListSettingsDatasourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    "debugOptions.enableDebugging": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("debugOptions.enableDebugging"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/settings/datasources" }),
    svc,
  ) as unknown as Schema.Schema<ListSettingsDatasourcesRequest>;

export type ListSettingsDatasourcesResponse = ListDataSourceResponse;
export const ListSettingsDatasourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDataSourceResponse;

export type ListSettingsDatasourcesError = DefaultErrors | NotFound | Forbidden;

/** Lists datasources. **Note:** This API requires an admin account to execute. */
export const listSettingsDatasources: API.PaginatedOperationMethod<
  ListSettingsDatasourcesRequest,
  ListSettingsDatasourcesResponse,
  ListSettingsDatasourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSettingsDatasourcesRequest,
  output: ListSettingsDatasourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteSettingsDatasourcesRequest {
  /** The name of the datasource. Format: datasources/{source_id}. */
  name: string;
  /** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
  "debugOptions.enableDebugging"?: boolean;
}

export const DeleteSettingsDatasourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    "debugOptions.enableDebugging": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("debugOptions.enableDebugging"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/settings/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteSettingsDatasourcesRequest>;

export type DeleteSettingsDatasourcesResponse = Operation;
export const DeleteSettingsDatasourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteSettingsDatasourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a datasource. **Note:** This API requires an admin account to execute. */
export const deleteSettingsDatasources: API.OperationMethod<
  DeleteSettingsDatasourcesRequest,
  DeleteSettingsDatasourcesResponse,
  DeleteSettingsDatasourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSettingsDatasourcesRequest,
  output: DeleteSettingsDatasourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetQueryStatsRequest {
  /** Year of date. Must be from 1 to 9999. */
  "fromDate.year"?: number;
  /** Month of date. Must be from 1 to 12. */
  "fromDate.month"?: number;
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "fromDate.day"?: number;
  /** Year of date. Must be from 1 to 9999. */
  "toDate.year"?: number;
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "toDate.day"?: number;
  /** Month of date. Must be from 1 to 12. */
  "toDate.month"?: number;
}

export const GetQueryStatsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "fromDate.year": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("fromDate.year"),
  ),
  "fromDate.month": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("fromDate.month"),
  ),
  "fromDate.day": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("fromDate.day"),
  ),
  "toDate.year": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("toDate.year"),
  ),
  "toDate.day": Schema.optional(Schema.Number).pipe(T.HttpQuery("toDate.day")),
  "toDate.month": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("toDate.month"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v1/stats/query" }),
  svc,
) as unknown as Schema.Schema<GetQueryStatsRequest>;

export type GetQueryStatsResponse = GetCustomerQueryStatsResponse;
export const GetQueryStatsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetCustomerQueryStatsResponse;

export type GetQueryStatsError = DefaultErrors | NotFound | Forbidden;

/** Get the query statistics for customer. **Note:** This API requires a standard end user account to execute. */
export const getQueryStats: API.OperationMethod<
  GetQueryStatsRequest,
  GetQueryStatsResponse,
  GetQueryStatsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetQueryStatsRequest,
  output: GetQueryStatsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetIndexStatsRequest {
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "fromDate.day"?: number;
  /** Year of date. Must be from 1 to 9999. */
  "toDate.year"?: number;
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "toDate.day"?: number;
  /** Year of date. Must be from 1 to 9999. */
  "fromDate.year"?: number;
  /** Month of date. Must be from 1 to 12. */
  "fromDate.month"?: number;
  /** Month of date. Must be from 1 to 12. */
  "toDate.month"?: number;
}

export const GetIndexStatsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "fromDate.day": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("fromDate.day"),
  ),
  "toDate.year": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("toDate.year"),
  ),
  "toDate.day": Schema.optional(Schema.Number).pipe(T.HttpQuery("toDate.day")),
  "fromDate.year": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("fromDate.year"),
  ),
  "fromDate.month": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("fromDate.month"),
  ),
  "toDate.month": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("toDate.month"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v1/stats/index" }),
  svc,
) as unknown as Schema.Schema<GetIndexStatsRequest>;

export type GetIndexStatsResponse = GetCustomerIndexStatsResponse;
export const GetIndexStatsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetCustomerIndexStatsResponse;

export type GetIndexStatsError = DefaultErrors | NotFound | Forbidden;

/** Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute. */
export const getIndexStats: API.OperationMethod<
  GetIndexStatsRequest,
  GetIndexStatsResponse,
  GetIndexStatsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIndexStatsRequest,
  output: GetIndexStatsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetSearchapplicationStatsRequest {
  /** Year of date. Must be from 1 to 9999. */
  "startDate.year"?: number;
  /** Month of date. Must be from 1 to 12. */
  "startDate.month"?: number;
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "endDate.day"?: number;
  /** Year of date. Must be from 1 to 9999. */
  "endDate.year"?: number;
  /** Month of date. Must be from 1 to 12. */
  "endDate.month"?: number;
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "startDate.day"?: number;
}

export const GetSearchapplicationStatsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "startDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("startDate.year"),
    ),
    "startDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("startDate.month"),
    ),
    "endDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("endDate.day"),
    ),
    "endDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("endDate.year"),
    ),
    "endDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("endDate.month"),
    ),
    "startDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("startDate.day"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/stats/searchapplication" }),
    svc,
  ) as unknown as Schema.Schema<GetSearchapplicationStatsRequest>;

export type GetSearchapplicationStatsResponse =
  GetCustomerSearchApplicationStatsResponse;
export const GetSearchapplicationStatsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetCustomerSearchApplicationStatsResponse;

export type GetSearchapplicationStatsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get search application stats for customer. **Note:** This API requires a standard end user account to execute. */
export const getSearchapplicationStats: API.OperationMethod<
  GetSearchapplicationStatsRequest,
  GetSearchapplicationStatsResponse,
  GetSearchapplicationStatsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSearchapplicationStatsRequest,
  output: GetSearchapplicationStatsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetUserStatsRequest {
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "fromDate.day"?: number;
  /** Year of date. Must be from 1 to 9999. */
  "toDate.year"?: number;
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "toDate.day"?: number;
  /** Year of date. Must be from 1 to 9999. */
  "fromDate.year"?: number;
  /** Month of date. Must be from 1 to 12. */
  "fromDate.month"?: number;
  /** Month of date. Must be from 1 to 12. */
  "toDate.month"?: number;
}

export const GetUserStatsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "fromDate.day": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("fromDate.day"),
  ),
  "toDate.year": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("toDate.year"),
  ),
  "toDate.day": Schema.optional(Schema.Number).pipe(T.HttpQuery("toDate.day")),
  "fromDate.year": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("fromDate.year"),
  ),
  "fromDate.month": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("fromDate.month"),
  ),
  "toDate.month": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("toDate.month"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v1/stats/user" }),
  svc,
) as unknown as Schema.Schema<GetUserStatsRequest>;

export type GetUserStatsResponse = GetCustomerUserStatsResponse;
export const GetUserStatsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetCustomerUserStatsResponse;

export type GetUserStatsError = DefaultErrors | NotFound | Forbidden;

/** Get the users statistics for customer. **Note:** This API requires a standard end user account to execute. */
export const getUserStats: API.OperationMethod<
  GetUserStatsRequest,
  GetUserStatsResponse,
  GetUserStatsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUserStatsRequest,
  output: GetUserStatsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetSessionStatsRequest {
  /** Year of date. Must be from 1 to 9999. */
  "fromDate.year"?: number;
  /** Month of date. Must be from 1 to 12. */
  "fromDate.month"?: number;
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "fromDate.day"?: number;
  /** Year of date. Must be from 1 to 9999. */
  "toDate.year"?: number;
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "toDate.day"?: number;
  /** Month of date. Must be from 1 to 12. */
  "toDate.month"?: number;
}

export const GetSessionStatsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    "fromDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("fromDate.year"),
    ),
    "fromDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("fromDate.month"),
    ),
    "fromDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("fromDate.day"),
    ),
    "toDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("toDate.year"),
    ),
    "toDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("toDate.day"),
    ),
    "toDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("toDate.month"),
    ),
  },
).pipe(
  T.Http({ method: "GET", path: "v1/stats/session" }),
  svc,
) as unknown as Schema.Schema<GetSessionStatsRequest>;

export type GetSessionStatsResponse = GetCustomerSessionStatsResponse;
export const GetSessionStatsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetCustomerSessionStatsResponse;

export type GetSessionStatsError = DefaultErrors | NotFound | Forbidden;

/** Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute. */
export const getSessionStats: API.OperationMethod<
  GetSessionStatsRequest,
  GetSessionStatsResponse,
  GetSessionStatsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSessionStatsRequest,
  output: GetSessionStatsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetStatsUserSearchapplicationsRequest {
  /** The resource id of the search application session stats, in the following format: searchapplications/{application_id} */
  name: string;
  /** Year of date. Must be from 1 to 9999. */
  "fromDate.year"?: number;
  /** Month of date. Must be from 1 to 12. */
  "fromDate.month"?: number;
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "fromDate.day"?: number;
  /** Year of date. Must be from 1 to 9999. */
  "toDate.year"?: number;
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "toDate.day"?: number;
  /** Month of date. Must be from 1 to 12. */
  "toDate.month"?: number;
}

export const GetStatsUserSearchapplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    "fromDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("fromDate.year"),
    ),
    "fromDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("fromDate.month"),
    ),
    "fromDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("fromDate.day"),
    ),
    "toDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("toDate.year"),
    ),
    "toDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("toDate.day"),
    ),
    "toDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("toDate.month"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/stats/user/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetStatsUserSearchapplicationsRequest>;

export type GetStatsUserSearchapplicationsResponse =
  GetSearchApplicationUserStatsResponse;
export const GetStatsUserSearchapplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetSearchApplicationUserStatsResponse;

export type GetStatsUserSearchapplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the users statistics for search application. **Note:** This API requires a standard end user account to execute. */
export const getStatsUserSearchapplications: API.OperationMethod<
  GetStatsUserSearchapplicationsRequest,
  GetStatsUserSearchapplicationsResponse,
  GetStatsUserSearchapplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetStatsUserSearchapplicationsRequest,
  output: GetStatsUserSearchapplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetStatsIndexDatasourcesRequest {
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "fromDate.day"?: number;
  /** Year of date. Must be from 1 to 9999. */
  "toDate.year"?: number;
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "toDate.day"?: number;
  /** The resource id of the data source to retrieve statistics for, in the following format: "datasources/{source_id}" */
  name: string;
  /** Year of date. Must be from 1 to 9999. */
  "fromDate.year"?: number;
  /** Month of date. Must be from 1 to 12. */
  "fromDate.month"?: number;
  /** Month of date. Must be from 1 to 12. */
  "toDate.month"?: number;
}

export const GetStatsIndexDatasourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "fromDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("fromDate.day"),
    ),
    "toDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("toDate.year"),
    ),
    "toDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("toDate.day"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    "fromDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("fromDate.year"),
    ),
    "fromDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("fromDate.month"),
    ),
    "toDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("toDate.month"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/stats/index/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetStatsIndexDatasourcesRequest>;

export type GetStatsIndexDatasourcesResponse = GetDataSourceIndexStatsResponse;
export const GetStatsIndexDatasourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetDataSourceIndexStatsResponse;

export type GetStatsIndexDatasourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute. */
export const getStatsIndexDatasources: API.OperationMethod<
  GetStatsIndexDatasourcesRequest,
  GetStatsIndexDatasourcesResponse,
  GetStatsIndexDatasourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetStatsIndexDatasourcesRequest,
  output: GetStatsIndexDatasourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetStatsSessionSearchapplicationsRequest {
  /** Month of date. Must be from 1 to 12. */
  "toDate.month"?: number;
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "fromDate.day"?: number;
  /** Year of date. Must be from 1 to 9999. */
  "toDate.year"?: number;
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "toDate.day"?: number;
  /** The resource id of the search application session stats, in the following format: searchapplications/{application_id} */
  name: string;
  /** Year of date. Must be from 1 to 9999. */
  "fromDate.year"?: number;
  /** Month of date. Must be from 1 to 12. */
  "fromDate.month"?: number;
}

export const GetStatsSessionSearchapplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "toDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("toDate.month"),
    ),
    "fromDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("fromDate.day"),
    ),
    "toDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("toDate.year"),
    ),
    "toDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("toDate.day"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    "fromDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("fromDate.year"),
    ),
    "fromDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("fromDate.month"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/stats/session/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetStatsSessionSearchapplicationsRequest>;

export type GetStatsSessionSearchapplicationsResponse =
  GetSearchApplicationSessionStatsResponse;
export const GetStatsSessionSearchapplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetSearchApplicationSessionStatsResponse;

export type GetStatsSessionSearchapplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute. */
export const getStatsSessionSearchapplications: API.OperationMethod<
  GetStatsSessionSearchapplicationsRequest,
  GetStatsSessionSearchapplicationsResponse,
  GetStatsSessionSearchapplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetStatsSessionSearchapplicationsRequest,
  output: GetStatsSessionSearchapplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetStatsQuerySearchapplicationsRequest {
  /** Month of date. Must be from 1 to 12. */
  "toDate.month"?: number;
  /** The resource id of the search application query stats, in the following format: searchapplications/{application_id} */
  name: string;
  /** Year of date. Must be from 1 to 9999. */
  "fromDate.year"?: number;
  /** Month of date. Must be from 1 to 12. */
  "fromDate.month"?: number;
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "fromDate.day"?: number;
  /** Year of date. Must be from 1 to 9999. */
  "toDate.year"?: number;
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  "toDate.day"?: number;
}

export const GetStatsQuerySearchapplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "toDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("toDate.month"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    "fromDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("fromDate.year"),
    ),
    "fromDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("fromDate.month"),
    ),
    "fromDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("fromDate.day"),
    ),
    "toDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("toDate.year"),
    ),
    "toDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("toDate.day"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/stats/query/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetStatsQuerySearchapplicationsRequest>;

export type GetStatsQuerySearchapplicationsResponse =
  GetSearchApplicationQueryStatsResponse;
export const GetStatsQuerySearchapplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetSearchApplicationQueryStatsResponse;

export type GetStatsQuerySearchapplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the query statistics for search application. **Note:** This API requires a standard end user account to execute. */
export const getStatsQuerySearchapplications: API.OperationMethod<
  GetStatsQuerySearchapplicationsRequest,
  GetStatsQuerySearchapplicationsResponse,
  GetStatsQuerySearchapplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetStatsQuerySearchapplicationsRequest,
  output: GetStatsQuerySearchapplicationsResponse,
  errors: [NotFound, Forbidden],
}));
