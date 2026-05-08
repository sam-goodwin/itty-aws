// ==========================================================================
// AdMob API (admob v1)
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
  name: "admob",
  version: "v1",
  rootUrl: "https://admob.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface MediationReportSpecSortCondition {
  /** Sort by the specified dimension. */
  dimension?:
    | "DIMENSION_UNSPECIFIED"
    | "DATE"
    | "MONTH"
    | "WEEK"
    | "AD_SOURCE"
    | "AD_SOURCE_INSTANCE"
    | "AD_UNIT"
    | "APP"
    | "MEDIATION_GROUP"
    | "COUNTRY"
    | "FORMAT"
    | "PLATFORM"
    | "MOBILE_OS_VERSION"
    | "GMA_SDK_VERSION"
    | "APP_VERSION_NAME"
    | "SERVING_RESTRICTION"
    | (string & {});
  /** Sort by the specified metric. */
  metric?:
    | "METRIC_UNSPECIFIED"
    | "AD_REQUESTS"
    | "CLICKS"
    | "ESTIMATED_EARNINGS"
    | "IMPRESSIONS"
    | "IMPRESSION_CTR"
    | "MATCHED_REQUESTS"
    | "MATCH_RATE"
    | "OBSERVED_ECPM"
    | (string & {});
  /** Sorting order of the dimension or metric. */
  order?: "SORT_ORDER_UNSPECIFIED" | "ASCENDING" | "DESCENDING" | (string & {});
}

export const MediationReportSpecSortCondition: Schema.Schema<MediationReportSpecSortCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimension: Schema.optional(Schema.String),
    metric: Schema.optional(Schema.String),
    order: Schema.optional(Schema.String),
  }).annotate({ identifier: "MediationReportSpecSortCondition" });

export interface StringList {
  /** The string values. */
  values?: ReadonlyArray<string>;
}

export const StringList: Schema.Schema<StringList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "StringList" });

export interface MediationReportSpecDimensionFilter {
  /** Matches a row if its value for the specified dimension is in one of the values specified in this condition. */
  matchesAny?: StringList;
  /** Applies the filter criterion to the specified dimension. */
  dimension?:
    | "DIMENSION_UNSPECIFIED"
    | "DATE"
    | "MONTH"
    | "WEEK"
    | "AD_SOURCE"
    | "AD_SOURCE_INSTANCE"
    | "AD_UNIT"
    | "APP"
    | "MEDIATION_GROUP"
    | "COUNTRY"
    | "FORMAT"
    | "PLATFORM"
    | "MOBILE_OS_VERSION"
    | "GMA_SDK_VERSION"
    | "APP_VERSION_NAME"
    | "SERVING_RESTRICTION"
    | (string & {});
}

export const MediationReportSpecDimensionFilter: Schema.Schema<MediationReportSpecDimensionFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchesAny: Schema.optional(StringList),
    dimension: Schema.optional(Schema.String),
  }).annotate({ identifier: "MediationReportSpecDimensionFilter" });

export interface LocalizationSettings {
  /** Currency code of the earning related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion. Defaults to the account currency code if unspecified. */
  currencyCode?: string;
  /** Language used for any localized text, such as some dimension value display labels. The language tag defined in the IETF BCP47. Defaults to 'en-US' if unspecified. */
  languageCode?: string;
}

export const LocalizationSettings: Schema.Schema<LocalizationSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currencyCode: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "LocalizationSettings" });

export interface Admob_Date {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
}

export const Admob_Date: Schema.Schema<Admob_Date> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    year: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Admob_Date" });

export interface DateRange {
  /** Start date of the date range, inclusive. Must be less than or equal to the end date. */
  startDate?: Admob_Date;
  /** End date of the date range, inclusive. Must be greater than or equal to the start date. */
  endDate?: Admob_Date;
}

export const DateRange: Schema.Schema<DateRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startDate: Schema.optional(Admob_Date),
    endDate: Schema.optional(Admob_Date),
  }).annotate({ identifier: "DateRange" });

export interface MediationReportSpec {
  /** Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined. */
  sortConditions?: ReadonlyArray<MediationReportSpecSortCondition>;
  /** Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error. */
  maxReportRows?: number;
  /** Describes which report rows to match based on their dimension values. */
  dimensionFilters?: ReadonlyArray<MediationReportSpecDimensionFilter>;
  /** Localization settings of the report. */
  localizationSettings?: LocalizationSettings;
  /** A report time zone. Accepts an IANA TZ name values, such as "America/Los_Angeles." If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The "America/Los_Angeles" is the only supported value at the moment. */
  timeZone?: string;
  /** List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account. */
  dimensions?: ReadonlyArray<
    | "DIMENSION_UNSPECIFIED"
    | "DATE"
    | "MONTH"
    | "WEEK"
    | "AD_SOURCE"
    | "AD_SOURCE_INSTANCE"
    | "AD_UNIT"
    | "APP"
    | "MEDIATION_GROUP"
    | "COUNTRY"
    | "FORMAT"
    | "PLATFORM"
    | "MOBILE_OS_VERSION"
    | "GMA_SDK_VERSION"
    | "APP_VERSION_NAME"
    | "SERVING_RESTRICTION"
    | (string & {})
  >;
  /** The date range for which the report is generated. */
  dateRange?: DateRange;
  /** List of metrics of the report. A report must specify at least one metric. */
  metrics?: ReadonlyArray<
    | "METRIC_UNSPECIFIED"
    | "AD_REQUESTS"
    | "CLICKS"
    | "ESTIMATED_EARNINGS"
    | "IMPRESSIONS"
    | "IMPRESSION_CTR"
    | "MATCHED_REQUESTS"
    | "MATCH_RATE"
    | "OBSERVED_ECPM"
    | (string & {})
  >;
}

export const MediationReportSpec: Schema.Schema<MediationReportSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sortConditions: Schema.optional(
      Schema.Array(MediationReportSpecSortCondition),
    ),
    maxReportRows: Schema.optional(Schema.Number),
    dimensionFilters: Schema.optional(
      Schema.Array(MediationReportSpecDimensionFilter),
    ),
    localizationSettings: Schema.optional(LocalizationSettings),
    timeZone: Schema.optional(Schema.String),
    dimensions: Schema.optional(Schema.Array(Schema.String)),
    dateRange: Schema.optional(DateRange),
    metrics: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "MediationReportSpec" });

export interface GenerateMediationReportRequest {
  /** Network report specification. */
  reportSpec?: MediationReportSpec;
}

export const GenerateMediationReportRequest: Schema.Schema<GenerateMediationReportRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportSpec: Schema.optional(MediationReportSpec),
  }).annotate({ identifier: "GenerateMediationReportRequest" });

export interface PublisherAccount {
  /** Resource name of this account. Format is accounts/{publisher_id}. */
  name?: string;
  /** Currency code of the earning-related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion. */
  currencyCode?: string;
  /** The time zone that is used in reports that are generated for this account. The value is a time-zone ID as specified by the CLDR project, for example, "America/Los_Angeles". */
  reportingTimeZone?: string;
  /** The unique ID by which this publisher account can be identified in the API requests (for example, pub-1234567890). */
  publisherId?: string;
}

export const PublisherAccount: Schema.Schema<PublisherAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
    reportingTimeZone: Schema.optional(Schema.String),
    publisherId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PublisherAccount" });

export interface ListPublisherAccountsResponse {
  /** If not empty, indicates that there might be more accounts for the request; you must pass this value in a new `ListPublisherAccountsRequest`. */
  nextPageToken?: string;
  /** Publisher that the client credentials can access. */
  account?: ReadonlyArray<PublisherAccount>;
}

export const ListPublisherAccountsResponse: Schema.Schema<ListPublisherAccountsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    account: Schema.optional(Schema.Array(PublisherAccount)),
  }).annotate({ identifier: "ListPublisherAccountsResponse" });

export interface NetworkReportSpecSortCondition {
  /** Sort by the specified metric. */
  metric?:
    | "METRIC_UNSPECIFIED"
    | "AD_REQUESTS"
    | "CLICKS"
    | "ESTIMATED_EARNINGS"
    | "IMPRESSIONS"
    | "IMPRESSION_CTR"
    | "IMPRESSION_RPM"
    | "MATCHED_REQUESTS"
    | "MATCH_RATE"
    | "SHOW_RATE"
    | (string & {});
  /** Sorting order of the dimension or metric. */
  order?: "SORT_ORDER_UNSPECIFIED" | "ASCENDING" | "DESCENDING" | (string & {});
  /** Sort by the specified dimension. */
  dimension?:
    | "DIMENSION_UNSPECIFIED"
    | "DATE"
    | "MONTH"
    | "WEEK"
    | "AD_UNIT"
    | "APP"
    | "AD_TYPE"
    | "COUNTRY"
    | "FORMAT"
    | "PLATFORM"
    | "MOBILE_OS_VERSION"
    | "GMA_SDK_VERSION"
    | "APP_VERSION_NAME"
    | "SERVING_RESTRICTION"
    | (string & {});
}

export const NetworkReportSpecSortCondition: Schema.Schema<NetworkReportSpecSortCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metric: Schema.optional(Schema.String),
    order: Schema.optional(Schema.String),
    dimension: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkReportSpecSortCondition" });

export interface AdUnit {
  /** The display name of the ad unit as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters. */
  displayName?: string;
  /** The externally visible ID of the ad unit which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654/0123456789 */
  adUnitId?: string;
  /** The externally visible ID of the app this ad unit is associated with. Example: ca-app-pub-9876543210987654~0123456789 */
  appId?: string;
  /** AdFormat of the ad unit. Possible values are as follows: "APP_OPEN" - App Open ad format. "BANNER" - Banner ad format. "BANNER_INTERSTITIAL" - Legacy format that can be used as either banner or interstitial. This format can no longer be created but can be targeted by mediation groups. "INTERSTITIAL" - A full screen ad. Supported ad types are "RICH_MEDIA" and "VIDEO". "NATIVE" - Native ad format. "REWARDED" - An ad that, once viewed, gets a callback verifying the view so that a reward can be given to the user. Supported ad types are "RICH_MEDIA" (interactive) and video where video can not be excluded. "REWARDED_INTERSTITIAL" - Rewarded Interstitial ad format. Only supports video ad type. See https://support.google.com/admob/answer/9884467. */
  adFormat?: string;
  /** Resource name for this ad unit. Format is accounts/{publisher_id}/adUnits/{ad_unit_id_fragment} Example: accounts/pub-9876543210987654/adUnits/0123456789 */
  name?: string;
  /** Ad media type supported by this ad unit. Possible values as follows: "RICH_MEDIA" - Text, image, and other non-video media. "VIDEO" - Video media. */
  adTypes?: ReadonlyArray<string>;
}

export const AdUnit: Schema.Schema<AdUnit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    adUnitId: Schema.optional(Schema.String),
    appId: Schema.optional(Schema.String),
    adFormat: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    adTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AdUnit" });

export interface ListAdUnitsResponse {
  /** If not empty, indicates that there may be more ad units for the request; this value should be passed in a new `ListAdUnitsRequest`. */
  nextPageToken?: string;
  /** The resulting ad units for the requested account. */
  adUnits?: ReadonlyArray<AdUnit>;
}

export const ListAdUnitsResponse: Schema.Schema<ListAdUnitsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    adUnits: Schema.optional(Schema.Array(AdUnit)),
  }).annotate({ identifier: "ListAdUnitsResponse" });

export interface ReportRowDimensionValue {
  /** Dimension value in the format specified in the report's spec Dimension enum. */
  value?: string;
  /** The localized string representation of the value. If unspecified, the display label should be derived from the value. */
  displayLabel?: string;
}

export const ReportRowDimensionValue: Schema.Schema<ReportRowDimensionValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    displayLabel: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportRowDimensionValue" });

export interface ReportHeader {
  /** The report time zone. The value is a time-zone ID as specified by the CLDR project, for example, "America/Los_Angeles". */
  reportingTimeZone?: string;
  /** The date range for which the report is generated. This is identical to the range specified in the report request. */
  dateRange?: DateRange;
  /** Localization settings of the report. This is identical to the settings in the report request. */
  localizationSettings?: LocalizationSettings;
}

export const ReportHeader: Schema.Schema<ReportHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportingTimeZone: Schema.optional(Schema.String),
    dateRange: Schema.optional(DateRange),
    localizationSettings: Schema.optional(LocalizationSettings),
  }).annotate({ identifier: "ReportHeader" });

export interface ReportWarning {
  /** Type of the warning. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE"
    | "DATA_DELAYED"
    | "OTHER"
    | "REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY"
    | (string & {});
  /** Describes the details of the warning message, in English. */
  description?: string;
}

export const ReportWarning: Schema.Schema<ReportWarning> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportWarning" });

export interface ReportFooter {
  /** Total number of rows that matched the request. Warning: This count does NOT always match the number of rows in the response. Do not make that assumption when processing the response. */
  matchingRowCount?: string;
  /** Warnings associated with generation of the report. */
  warnings?: ReadonlyArray<ReportWarning>;
}

export const ReportFooter: Schema.Schema<ReportFooter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchingRowCount: Schema.optional(Schema.String),
    warnings: Schema.optional(Schema.Array(ReportWarning)),
  }).annotate({ identifier: "ReportFooter" });

export interface AppManualAppInfo {
  /** The display name of the app as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters. */
  displayName?: string;
}

export const AppManualAppInfo: Schema.Schema<AppManualAppInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppManualAppInfo" });

export interface AppLinkedAppInfo {
  /** The app store ID of the app; present if and only if the app is linked to an app store. If the app is added to the Google Play store, it will be the application ID of the app. For example: "com.example.myapp". See https://developer.android.com/studio/build/application-id. If the app is added to the Apple App Store, it will be app store ID. For example "105169111". Note that setting the app store id is considered an irreversible action. Once an app is linked, it cannot be unlinked. */
  appStoreId?: string;
  /** Output only. Display name of the app as it appears in the app store. This is an output-only field, and may be empty if the app cannot be found in the store. */
  displayName?: string;
}

export const AppLinkedAppInfo: Schema.Schema<AppLinkedAppInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appStoreId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppLinkedAppInfo" });

export interface App {
  /** The information for an app that is not linked to any app store. After an app is linked, this information is still retrivable. If no name is provided for the app upon creation, a placeholder name will be used. */
  manualAppInfo?: AppManualAppInfo;
  /** The externally visible ID of the app which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654~0123456789 */
  appId?: string;
  /** Resource name for this app. Format is accounts/{publisher_id}/apps/{app_id_fragment} Example: accounts/pub-9876543210987654/apps/0123456789 */
  name?: string;
  /** Describes the platform of the app. Limited to "IOS" and "ANDROID". */
  platform?: string;
  /** Output only. The approval state for the app. The field is read-only. */
  appApprovalState?:
    | "APP_APPROVAL_STATE_UNSPECIFIED"
    | "ACTION_REQUIRED"
    | "IN_REVIEW"
    | "APPROVED"
    | (string & {});
  /** Immutable. The information for an app that is linked to an app store. This field is present if and only if the app is linked to an app store. */
  linkedAppInfo?: AppLinkedAppInfo;
}

export const App: Schema.Schema<App> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    manualAppInfo: Schema.optional(AppManualAppInfo),
    appId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    platform: Schema.optional(Schema.String),
    appApprovalState: Schema.optional(Schema.String),
    linkedAppInfo: Schema.optional(AppLinkedAppInfo),
  }).annotate({ identifier: "App" });

export interface NetworkReportSpecDimensionFilter {
  /** Matches a row if its value for the specified dimension is in one of the values specified in this condition. */
  matchesAny?: StringList;
  /** Applies the filter criterion to the specified dimension. */
  dimension?:
    | "DIMENSION_UNSPECIFIED"
    | "DATE"
    | "MONTH"
    | "WEEK"
    | "AD_UNIT"
    | "APP"
    | "AD_TYPE"
    | "COUNTRY"
    | "FORMAT"
    | "PLATFORM"
    | "MOBILE_OS_VERSION"
    | "GMA_SDK_VERSION"
    | "APP_VERSION_NAME"
    | "SERVING_RESTRICTION"
    | (string & {});
}

export const NetworkReportSpecDimensionFilter: Schema.Schema<NetworkReportSpecDimensionFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchesAny: Schema.optional(StringList),
    dimension: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkReportSpecDimensionFilter" });

export interface NetworkReportSpec {
  /** A report time zone. Accepts an IANA TZ name values, such as "America/Los_Angeles." If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The "America/Los_Angeles" is the only supported value at the moment. */
  timeZone?: string;
  /** The date range for which the report is generated. */
  dateRange?: DateRange;
  /** List of metrics of the report. A report must specify at least one metric. */
  metrics?: ReadonlyArray<
    | "METRIC_UNSPECIFIED"
    | "AD_REQUESTS"
    | "CLICKS"
    | "ESTIMATED_EARNINGS"
    | "IMPRESSIONS"
    | "IMPRESSION_CTR"
    | "IMPRESSION_RPM"
    | "MATCHED_REQUESTS"
    | "MATCH_RATE"
    | "SHOW_RATE"
    | (string & {})
  >;
  /** List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account. */
  dimensions?: ReadonlyArray<
    | "DIMENSION_UNSPECIFIED"
    | "DATE"
    | "MONTH"
    | "WEEK"
    | "AD_UNIT"
    | "APP"
    | "AD_TYPE"
    | "COUNTRY"
    | "FORMAT"
    | "PLATFORM"
    | "MOBILE_OS_VERSION"
    | "GMA_SDK_VERSION"
    | "APP_VERSION_NAME"
    | "SERVING_RESTRICTION"
    | (string & {})
  >;
  /** Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error. */
  maxReportRows?: number;
  /** Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined. */
  sortConditions?: ReadonlyArray<NetworkReportSpecSortCondition>;
  /** Describes which report rows to match based on their dimension values. */
  dimensionFilters?: ReadonlyArray<NetworkReportSpecDimensionFilter>;
  /** Localization settings of the report. */
  localizationSettings?: LocalizationSettings;
}

export const NetworkReportSpec: Schema.Schema<NetworkReportSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeZone: Schema.optional(Schema.String),
    dateRange: Schema.optional(DateRange),
    metrics: Schema.optional(Schema.Array(Schema.String)),
    dimensions: Schema.optional(Schema.Array(Schema.String)),
    maxReportRows: Schema.optional(Schema.Number),
    sortConditions: Schema.optional(
      Schema.Array(NetworkReportSpecSortCondition),
    ),
    dimensionFilters: Schema.optional(
      Schema.Array(NetworkReportSpecDimensionFilter),
    ),
    localizationSettings: Schema.optional(LocalizationSettings),
  }).annotate({ identifier: "NetworkReportSpec" });

export interface ReportRowMetricValue {
  /** Metric integer value. */
  integerValue?: string;
  /** Double precision (approximate) decimal values. Rates are from 0 to 1. */
  doubleValue?: number;
  /** Amount in micros. One million is equivalent to one unit. Currency value is in the unit (USD, EUR or other) specified by the request. For example, $6.50 whould be represented as 6500000 micros. */
  microsValue?: string;
}

export const ReportRowMetricValue: Schema.Schema<ReportRowMetricValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    integerValue: Schema.optional(Schema.String),
    doubleValue: Schema.optional(Schema.Number),
    microsValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportRowMetricValue" });

export interface ReportRow {
  /** Map of metric values in a row, with keys as enum name of the metrics. If a metric being requested has no value returned, the map will not include it. */
  metricValues?: Record<string, ReportRowMetricValue>;
  /** Map of dimension values in a row, with keys as enum name of the dimensions. */
  dimensionValues?: Record<string, ReportRowDimensionValue>;
}

export const ReportRow: Schema.Schema<ReportRow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metricValues: Schema.optional(
      Schema.Record(Schema.String, ReportRowMetricValue),
    ),
    dimensionValues: Schema.optional(
      Schema.Record(Schema.String, ReportRowDimensionValue),
    ),
  }).annotate({ identifier: "ReportRow" });

export interface GenerateMediationReportResponse {
  /** Report generation settings that describes the report contents, such as the report date range and localization settings. */
  header?: ReportHeader;
  /** Actual report data. */
  row?: ReportRow;
  /** Additional information about the generated report, such as warnings about the data. */
  footer?: ReportFooter;
}

export const GenerateMediationReportResponse: Schema.Schema<GenerateMediationReportResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    header: Schema.optional(ReportHeader),
    row: Schema.optional(ReportRow),
    footer: Schema.optional(ReportFooter),
  }).annotate({ identifier: "GenerateMediationReportResponse" });

export interface GenerateNetworkReportRequest {
  /** Network report specification. */
  reportSpec?: NetworkReportSpec;
}

export const GenerateNetworkReportRequest: Schema.Schema<GenerateNetworkReportRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportSpec: Schema.optional(NetworkReportSpec),
  }).annotate({ identifier: "GenerateNetworkReportRequest" });

export interface GenerateNetworkReportResponse {
  /** Report generation settings that describes the report contents, such as the report date range and localization settings. */
  header?: ReportHeader;
  /** Actual report data. */
  row?: ReportRow;
  /** Additional information about the generated report, such as warnings about the data. */
  footer?: ReportFooter;
}

export const GenerateNetworkReportResponse: Schema.Schema<GenerateNetworkReportResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    header: Schema.optional(ReportHeader),
    row: Schema.optional(ReportRow),
    footer: Schema.optional(ReportFooter),
  }).annotate({ identifier: "GenerateNetworkReportResponse" });

export interface ListAppsResponse {
  /** The resulting apps for the requested account. */
  apps?: ReadonlyArray<App>;
  /** If not empty, indicates that there may be more apps for the request; this value should be passed in a new `ListAppsRequest`. */
  nextPageToken?: string;
}

export const ListAppsResponse: Schema.Schema<ListAppsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apps: Schema.optional(Schema.Array(App)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAppsResponse" });

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

export interface GetAccountsRequest {
  /** Resource name of the publisher account to retrieve. Example: accounts/pub-9876543210987654 */
  name: string;
}

export const GetAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetAccountsRequest>;

export type GetAccountsResponse = PublisherAccount;
export const GetAccountsResponse = /*@__PURE__*/ /*#__PURE__*/ PublisherAccount;

export type GetAccountsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about the specified AdMob publisher account. */
export const getAccounts: API.OperationMethod<
  GetAccountsRequest,
  GetAccountsResponse,
  GetAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsRequest,
  output: GetAccountsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListAccountsRequest {
  /** Maximum number of accounts to return. */
  pageSize?: number;
  /** The value returned by the last `ListPublisherAccountsResponse`; indicates that this is a continuation of a prior `ListPublisherAccounts` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "v1/accounts" }),
  svc,
) as unknown as Schema.Schema<ListAccountsRequest>;

export type ListAccountsResponse = ListPublisherAccountsResponse;
export const ListAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPublisherAccountsResponse;

export type ListAccountsError = DefaultErrors | NotFound | Forbidden;

/** Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672. */
export const listAccounts: API.PaginatedOperationMethod<
  ListAccountsRequest,
  ListAccountsResponse,
  ListAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsRequest,
  output: ListAccountsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListAccountsAppsRequest {
  /** The maximum number of apps to return. If unspecified or 0, at most 10,000 apps will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000. */
  pageSize?: number;
  /** The value returned by the last `ListAppsResponse`; indicates that this is a continuation of a prior `ListApps` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. Resource name of the account to list apps for. Example: accounts/pub-9876543210987654 */
  parent: string;
}

export const ListAccountsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/apps" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsAppsRequest>;

export type ListAccountsAppsResponse = ListAppsResponse;
export const ListAccountsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAppsResponse;

export type ListAccountsAppsError = DefaultErrors | NotFound | Forbidden;

/** List the apps under the specified AdMob account. */
export const listAccountsApps: API.PaginatedOperationMethod<
  ListAccountsAppsRequest,
  ListAccountsAppsResponse,
  ListAccountsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsAppsRequest,
  output: ListAccountsAppsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListAccountsAdUnitsRequest {
  /** The maximum number of ad units to return. If unspecified or 0, at most 10,000 ad units will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000. */
  pageSize?: number;
  /** The value returned by the last `ListAdUnitsResponse`; indicates that this is a continuation of a prior `ListAdUnits` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. Resource name of the account to list ad units for. Example: accounts/pub-9876543210987654 */
  parent: string;
}

export const ListAccountsAdUnitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/adUnits" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsAdUnitsRequest>;

export type ListAccountsAdUnitsResponse = ListAdUnitsResponse;
export const ListAccountsAdUnitsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAdUnitsResponse;

export type ListAccountsAdUnitsError = DefaultErrors | NotFound | Forbidden;

/** List the ad units under the specified AdMob account. */
export const listAccountsAdUnits: API.PaginatedOperationMethod<
  ListAccountsAdUnitsRequest,
  ListAccountsAdUnitsResponse,
  ListAccountsAdUnitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsAdUnitsRequest,
  output: ListAccountsAdUnitsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GenerateAccountsMediationReportRequest {
  /** Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654 */
  parent: string;
  /** Request body */
  body?: GenerateMediationReportRequest;
}

export const GenerateAccountsMediationReportRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GenerateMediationReportRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/mediationReport:generate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateAccountsMediationReportRequest>;

export type GenerateAccountsMediationReportResponse =
  GenerateMediationReportResponse;
export const GenerateAccountsMediationReportResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateMediationReportResponse;

export type GenerateAccountsMediationReportError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates an AdMob Mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses. */
export const generateAccountsMediationReport: API.OperationMethod<
  GenerateAccountsMediationReportRequest,
  GenerateAccountsMediationReportResponse,
  GenerateAccountsMediationReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateAccountsMediationReportRequest,
  output: GenerateAccountsMediationReportResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateAccountsNetworkReportRequest {
  /** Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654 */
  parent: string;
  /** Request body */
  body?: GenerateNetworkReportRequest;
}

export const GenerateAccountsNetworkReportRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GenerateNetworkReportRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/networkReport:generate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateAccountsNetworkReportRequest>;

export type GenerateAccountsNetworkReportResponse =
  GenerateNetworkReportResponse;
export const GenerateAccountsNetworkReportResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateNetworkReportResponse;

export type GenerateAccountsNetworkReportError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses. */
export const generateAccountsNetworkReport: API.OperationMethod<
  GenerateAccountsNetworkReportRequest,
  GenerateAccountsNetworkReportResponse,
  GenerateAccountsNetworkReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateAccountsNetworkReportRequest,
  output: GenerateAccountsNetworkReportResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
