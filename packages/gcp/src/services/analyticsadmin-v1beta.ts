// ==========================================================================
// Google Analytics Admin API (analyticsadmin v1beta)
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
  name: "analyticsadmin",
  version: "v1beta",
  rootUrl: "https://analyticsadmin.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleAnalyticsAdminV1betaCustomMetric {
  /** Optional. Description for this custom dimension. Max length of 150 characters. */
  description?: string;
  /** Required. The type for the custom metric's value. */
  measurementUnit?:
    | "MEASUREMENT_UNIT_UNSPECIFIED"
    | "STANDARD"
    | "CURRENCY"
    | "FEET"
    | "METERS"
    | "KILOMETERS"
    | "MILES"
    | "MILLISECONDS"
    | "SECONDS"
    | "MINUTES"
    | "HOURS"
    | (string & {});
  /** Identifier. Resource name for this CustomMetric resource. Format: properties/{property}/customMetrics/{customMetric} */
  name?: string;
  /** Required. Immutable. The scope of this custom metric. */
  scope?: "METRIC_SCOPE_UNSPECIFIED" | "EVENT" | (string & {});
  /** Optional. Types of restricted data that this metric may contain. Required for metrics with CURRENCY measurement unit. Must be empty for metrics with a non-CURRENCY measurement unit. */
  restrictedMetricType?: ReadonlyArray<
    | "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
    | "COST_DATA"
    | "REVENUE_DATA"
    | (string & {})
  >;
  /** Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of 40 characters for event-scoped metrics. */
  parameterName?: string;
  /** Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets. */
  displayName?: string;
}

export const GoogleAnalyticsAdminV1betaCustomMetric =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    measurementUnit: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    restrictedMetricType: Schema.optional(Schema.Array(Schema.String)),
    parameterName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaCustomMetric" });

export interface GoogleAnalyticsAdminV1betaListCustomMetricsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of CustomMetrics. */
  customMetrics?: ReadonlyArray<GoogleAnalyticsAdminV1betaCustomMetric>;
}

export const GoogleAnalyticsAdminV1betaListCustomMetricsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    customMetrics: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaCustomMetric),
    ),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaListCustomMetricsResponse",
  });

export interface GoogleAnalyticsAdminV1betaGoogleAdsLink {
  /** Immutable. Google Ads customer ID. */
  customerId?: string;
  /** Identifier. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID. */
  name?: string;
  /** Output only. Time when this link was last updated. */
  updateTime?: string;
  /** Output only. If true, this link is for a Google Ads manager account. */
  canManageClients?: boolean;
  /** Output only. Email address of the user that created the link. An empty string will be returned if the email address can't be retrieved. */
  creatorEmailAddress?: string;
  /** Enable personalized advertising features with this integration. Automatically publish my Google Analytics audience lists and Google Analytics remarketing events/parameters to the linked Google Ads account. If this field is not set on create/update, it will be defaulted to true. */
  adsPersonalizationEnabled?: boolean;
  /** Output only. Time when this link was originally created. */
  createTime?: string;
}

export const GoogleAnalyticsAdminV1betaGoogleAdsLink =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    canManageClients: Schema.optional(Schema.Boolean),
    creatorEmailAddress: Schema.optional(Schema.String),
    adsPersonalizationEnabled: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaGoogleAdsLink" });

export interface GoogleAnalyticsAdminV1betaAccessMetric {
  /** The API name of the metric. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of metrics supported in this API. Metrics are referenced by name in `metricFilter` & `orderBys`. */
  metricName?: string;
}

export const GoogleAnalyticsAdminV1betaAccessMetric =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metricName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccessMetric" });

export interface GoogleAnalyticsAdminV1betaAccessInListFilter {
  /** The list of string values. Must be non-empty. */
  values?: ReadonlyArray<string>;
  /** If true, the string value is case sensitive. */
  caseSensitive?: boolean;
}

export const GoogleAnalyticsAdminV1betaAccessInListFilter =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
    caseSensitive: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccessInListFilter" });

export interface GoogleAnalyticsAdminV1betaAccessMetricValue {
  /** The measurement value. For example, this value may be '13'. */
  value?: string;
}

export const GoogleAnalyticsAdminV1betaAccessMetricValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccessMetricValue" });

export interface GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest {
  /** Required. An acknowledgement that the caller of this method understands the terms of user data collection. This field must contain the exact value: "I acknowledge that I have the necessary privacy disclosures and rights from my end users for the collection and processing of their data, including the association of such data with the visitation information Google Analytics collects from my site and/or app property." */
  acknowledgement?: string;
}

export const GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acknowledgement: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest",
  });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "GoogleProtobufEmpty" });

export interface GoogleAnalyticsAdminV1betaNumericValue {
  /** Integer value */
  int64Value?: string;
  /** Double value */
  doubleValue?: number;
}

export const GoogleAnalyticsAdminV1betaNumericValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    int64Value: Schema.optional(Schema.String),
    doubleValue: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaNumericValue" });

export interface GoogleAnalyticsAdminV1betaAccessBetweenFilter {
  /** Ends with this number. */
  toValue?: GoogleAnalyticsAdminV1betaNumericValue;
  /** Begins with this number. */
  fromValue?: GoogleAnalyticsAdminV1betaNumericValue;
}

export const GoogleAnalyticsAdminV1betaAccessBetweenFilter =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toValue: Schema.optional(GoogleAnalyticsAdminV1betaNumericValue),
    fromValue: Schema.optional(GoogleAnalyticsAdminV1betaNumericValue),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccessBetweenFilter" });

export interface GoogleAnalyticsAdminV1betaAccessNumericFilter {
  /** A numeric value or a date value. */
  value?: GoogleAnalyticsAdminV1betaNumericValue;
  /** The operation type for this filter. */
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "EQUAL"
    | "LESS_THAN"
    | "LESS_THAN_OR_EQUAL"
    | "GREATER_THAN"
    | "GREATER_THAN_OR_EQUAL"
    | (string & {});
}

export const GoogleAnalyticsAdminV1betaAccessNumericFilter =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(GoogleAnalyticsAdminV1betaNumericValue),
    operation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccessNumericFilter" });

export interface GoogleAnalyticsAdminV1betaAccessStringFilter {
  /** If true, the string value is case sensitive. */
  caseSensitive?: boolean;
  /** The match type for this filter. */
  matchType?:
    | "MATCH_TYPE_UNSPECIFIED"
    | "EXACT"
    | "BEGINS_WITH"
    | "ENDS_WITH"
    | "CONTAINS"
    | "FULL_REGEXP"
    | "PARTIAL_REGEXP"
    | (string & {});
  /** The string value used for the matching. */
  value?: string;
}

export const GoogleAnalyticsAdminV1betaAccessStringFilter =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caseSensitive: Schema.optional(Schema.Boolean),
    matchType: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccessStringFilter" });

export interface GoogleAnalyticsAdminV1betaAccessFilter {
  /** The dimension name or metric name. */
  fieldName?: string;
  /** A filter for two values. */
  betweenFilter?: GoogleAnalyticsAdminV1betaAccessBetweenFilter;
  /** A filter for numeric or date values. */
  numericFilter?: GoogleAnalyticsAdminV1betaAccessNumericFilter;
  /** Strings related filter. */
  stringFilter?: GoogleAnalyticsAdminV1betaAccessStringFilter;
  /** A filter for in list values. */
  inListFilter?: GoogleAnalyticsAdminV1betaAccessInListFilter;
}

export const GoogleAnalyticsAdminV1betaAccessFilter =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldName: Schema.optional(Schema.String),
    betweenFilter: Schema.optional(
      GoogleAnalyticsAdminV1betaAccessBetweenFilter,
    ),
    numericFilter: Schema.optional(
      GoogleAnalyticsAdminV1betaAccessNumericFilter,
    ),
    stringFilter: Schema.optional(GoogleAnalyticsAdminV1betaAccessStringFilter),
    inListFilter: Schema.optional(GoogleAnalyticsAdminV1betaAccessInListFilter),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccessFilter" });

export interface GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy {
  /** A metric name in the request to order by. */
  metricName?: string;
}

export const GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metricName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy",
  });

export interface GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData {
  /** Output only. ID of the corresponding iOS app in Firebase, if any. This ID can change if the iOS app is deleted and recreated. */
  firebaseAppId?: string;
  /** Required. Immutable. The Apple App Store Bundle ID for the app Example: "com.example.myiosapp" */
  bundleId?: string;
}

export const GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firebaseAppId: Schema.optional(Schema.String),
    bundleId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData",
  });

export interface GoogleAnalyticsAdminV1betaDataStreamWebStreamData {
  /** Domain name of the web app being measured, or empty. Example: "http://www.google.com", "https://www.google.com" */
  defaultUri?: string;
  /** Output only. Analytics Measurement ID. Example: "G-1A2BCD345E" */
  measurementId?: string;
  /** Output only. ID of the corresponding web app in Firebase, if any. This ID can change if the web app is deleted and recreated. */
  firebaseAppId?: string;
}

export const GoogleAnalyticsAdminV1betaDataStreamWebStreamData =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultUri: Schema.optional(Schema.String),
    measurementId: Schema.optional(Schema.String),
    firebaseAppId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaDataStreamWebStreamData",
  });

export interface GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData {
  /** Immutable. The package name for the app being measured. Example: "com.example.myandroidapp" */
  packageName?: string;
  /** Output only. ID of the corresponding Android app in Firebase, if any. This ID can change if the Android app is deleted and recreated. */
  firebaseAppId?: string;
}

export const GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    firebaseAppId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData",
  });

export interface GoogleAnalyticsAdminV1betaDataStream {
  /** Data specific to iOS app streams. Must be populated if type is IOS_APP_DATA_STREAM. */
  iosAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData;
  /** Output only. Time when this stream was originally created. */
  createTime?: string;
  /** Data specific to web streams. Must be populated if type is WEB_DATA_STREAM. */
  webStreamData?: GoogleAnalyticsAdminV1betaDataStreamWebStreamData;
  /** Identifier. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example: "properties/1000/dataStreams/2000" */
  name?: string;
  /** Required. Immutable. The type of this DataStream resource. */
  type?:
    | "DATA_STREAM_TYPE_UNSPECIFIED"
    | "WEB_DATA_STREAM"
    | "ANDROID_APP_DATA_STREAM"
    | "IOS_APP_DATA_STREAM"
    | (string & {});
  /** Output only. Time when stream payload fields were last updated. */
  updateTime?: string;
  /** Data specific to Android app streams. Must be populated if type is ANDROID_APP_DATA_STREAM. */
  androidAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData;
  /** Human-readable display name for the Data Stream. Required for web data streams. The max allowed display name length is 255 UTF-16 code units. */
  displayName?: string;
}

export const GoogleAnalyticsAdminV1betaDataStream =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iosAppStreamData: Schema.optional(
      GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData,
    ),
    createTime: Schema.optional(Schema.String),
    webStreamData: Schema.optional(
      GoogleAnalyticsAdminV1betaDataStreamWebStreamData,
    ),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    androidAppStreamData: Schema.optional(
      GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData,
    ),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaDataStream" });

export interface GoogleAnalyticsAdminV1betaProperty {
  /** Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK */
  industryCategory?:
    | "INDUSTRY_CATEGORY_UNSPECIFIED"
    | "AUTOMOTIVE"
    | "BUSINESS_AND_INDUSTRIAL_MARKETS"
    | "FINANCE"
    | "HEALTHCARE"
    | "TECHNOLOGY"
    | "TRAVEL"
    | "OTHER"
    | "ARTS_AND_ENTERTAINMENT"
    | "BEAUTY_AND_FITNESS"
    | "BOOKS_AND_LITERATURE"
    | "FOOD_AND_DRINK"
    | "GAMES"
    | "HOBBIES_AND_LEISURE"
    | "HOME_AND_GARDEN"
    | "INTERNET_AND_TELECOM"
    | "LAW_AND_GOVERNMENT"
    | "NEWS"
    | "ONLINE_COMMUNITIES"
    | "PEOPLE_AND_SOCIETY"
    | "PETS_AND_ANIMALS"
    | "REAL_ESTATE"
    | "REFERENCE"
    | "SCIENCE"
    | "SPORTS"
    | "JOBS_AND_EDUCATION"
    | "SHOPPING"
    | (string & {});
  /** Output only. Time when entity payload fields were last updated. */
  updateTime?: string;
  /** Immutable. The property type for this Property resource. When creating a property, if the type is "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied. */
  propertyType?:
    | "PROPERTY_TYPE_UNSPECIFIED"
    | "PROPERTY_TYPE_ORDINARY"
    | "PROPERTY_TYPE_SUBPROPERTY"
    | "PROPERTY_TYPE_ROLLUP"
    | (string & {});
  /** Immutable. Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/101" */
  parent?: string;
  /** Output only. The Google Analytics service level that applies to this property. */
  serviceLevel?:
    | "SERVICE_LEVEL_UNSPECIFIED"
    | "GOOGLE_ANALYTICS_STANDARD"
    | "GOOGLE_ANALYTICS_360"
    | (string & {});
  /** Output only. If set, the time at which this property was trashed. If not set, then this property is not currently in the trash can. */
  deleteTime?: string;
  /** Output only. Time when the entity was originally created. */
  createTime?: string;
  /** Output only. If set, the time at which this trashed property will be permanently deleted. If not set, then this property is not currently in the trash can and is not slated to be deleted. */
  expireTime?: string;
  /** Identifier. Resource name of this property. Format: properties/{property_id} Example: "properties/1000" */
  name?: string;
  /** Immutable. The resource name of the parent account Format: accounts/{account_id} Example: "accounts/123" */
  account?: string;
  /** Required. Human-readable display name for this property. The max allowed display name length is 100 UTF-16 code units. */
  displayName?: string;
  /** The currency type used in reports involving monetary values. Format: https://en.wikipedia.org/wiki/ISO_4217 Examples: "USD", "EUR", "JPY" */
  currencyCode?: string;
  /** Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: "America/Los_Angeles" */
  timeZone?: string;
}

export const GoogleAnalyticsAdminV1betaProperty =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    industryCategory: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    propertyType: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    serviceLevel: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    account: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaProperty" });

export interface GoogleAnalyticsAdminV1betaFirebaseLink {
  /** Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project_name that contains a project number. Format: 'projects/{project number}' Example: 'projects/1234' */
  project?: string;
  /** Output only. Time when this FirebaseLink was originally created. */
  createTime?: string;
  /** Identifier. Example format: properties/1234/firebaseLinks/5678 */
  name?: string;
}

export const GoogleAnalyticsAdminV1betaFirebaseLink =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaFirebaseLink" });

export interface GoogleAnalyticsAdminV1betaListFirebaseLinksResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one FirebaseLink per property, so this will never be populated. */
  nextPageToken?: string;
  /** List of FirebaseLinks. This will have at most one value. */
  firebaseLinks?: ReadonlyArray<GoogleAnalyticsAdminV1betaFirebaseLink>;
}

export const GoogleAnalyticsAdminV1betaListFirebaseLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    firebaseLinks: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaFirebaseLink),
    ),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaListFirebaseLinksResponse",
  });

export interface GoogleAnalyticsAdminV1betaCustomDimension {
  /** Optional. Description for this custom dimension. Max length of 150 characters. */
  description?: string;
  /** Optional. If set to true, sets this dimension as NPA and excludes it from ads personalization. This is currently only supported by user-scoped custom dimensions. */
  disallowAdsPersonalization?: boolean;
  /** Required. Immutable. The scope of this dimension. */
  scope?:
    | "DIMENSION_SCOPE_UNSPECIFIED"
    | "EVENT"
    | "USER"
    | "ITEM"
    | (string & {});
  /** Required. Immutable. Tagging parameter name for this custom dimension. If this is a user-scoped dimension, then this is the user property name. If this is an event-scoped dimension, then this is the event parameter name. If this is an item-scoped dimension, then this is the parameter name found in the eCommerce items array. May only contain alphanumeric and underscore characters, starting with a letter. Max length of 24 characters for user-scoped dimensions, 40 characters for event-scoped dimensions. */
  parameterName?: string;
  /** Required. Display name for this custom dimension as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets. */
  displayName?: string;
  /** Identifier. Resource name for this CustomDimension resource. Format: properties/{property}/customDimensions/{customDimension} */
  name?: string;
}

export const GoogleAnalyticsAdminV1betaCustomDimension =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    disallowAdsPersonalization: Schema.optional(Schema.Boolean),
    scope: Schema.optional(Schema.String),
    parameterName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaCustomDimension" });

export interface GoogleAnalyticsAdminV1betaDataRetentionSettings {
  /** Identifier. Resource name for this DataRetentionSetting resource. Format: properties/{property}/dataRetentionSettings */
  name?: string;
  /** If true, reset the retention period for the user identifier with every event from that user. */
  resetUserDataOnNewActivity?: boolean;
  /** Required. The length of time that user-level data is retained. */
  userDataRetention?:
    | "RETENTION_DURATION_UNSPECIFIED"
    | "TWO_MONTHS"
    | "FOURTEEN_MONTHS"
    | "TWENTY_SIX_MONTHS"
    | "THIRTY_EIGHT_MONTHS"
    | "FIFTY_MONTHS"
    | (string & {});
  /** Required. The length of time that event-level data is retained. */
  eventDataRetention?:
    | "RETENTION_DURATION_UNSPECIFIED"
    | "TWO_MONTHS"
    | "FOURTEEN_MONTHS"
    | "TWENTY_SIX_MONTHS"
    | "THIRTY_EIGHT_MONTHS"
    | "FIFTY_MONTHS"
    | (string & {});
}

export const GoogleAnalyticsAdminV1betaDataRetentionSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    resetUserDataOnNewActivity: Schema.optional(Schema.Boolean),
    userDataRetention: Schema.optional(Schema.String),
    eventDataRetention: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaDataRetentionSettings",
  });

export interface GoogleAnalyticsAdminV1betaAccount {
  /** Country of business. Must be a Unicode CLDR region code. */
  regionCode?: string;
  /** Identifier. Resource name of this account. Format: accounts/{account} Example: "accounts/100" */
  name?: string;
  /** Output only. Time when account payload fields were last updated. */
  updateTime?: string;
  /** Required. Human-readable display name for this account. */
  displayName?: string;
  /** Output only. The URI for a Google Marketing Platform organization resource. Only set when this account is connected to a GMP organization. Format: marketingplatformadmin.googleapis.com/organizations/{org_id} */
  gmpOrganization?: string;
  /** Output only. Indicates whether this Account is soft-deleted or not. Deleted accounts are excluded from List results unless specifically requested. */
  deleted?: boolean;
  /** Output only. Time when this account was originally created. */
  createTime?: string;
}

export const GoogleAnalyticsAdminV1betaAccount =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    gmpOrganization: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccount" });

export interface GoogleAnalyticsAdminV1betaConversionEventDefaultConversionValue {
  /** This value will be used to populate the value for all conversions of the specified event_name where the event "value" parameter is unset. */
  value?: number;
  /** When a conversion event for this event_name has no set currency, this currency will be applied as the default. Must be in ISO 4217 currency code format. See https://en.wikipedia.org/wiki/ISO_4217 for more information. */
  currencyCode?: string;
}

export const GoogleAnalyticsAdminV1betaConversionEventDefaultConversionValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
    currencyCode: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAnalyticsAdminV1betaConversionEventDefaultConversionValue",
  });

export interface GoogleAnalyticsAdminV1betaConversionEvent {
  /** Output only. Time when this conversion event was created in the property. */
  createTime?: string;
  /** Immutable. The event name for this conversion event. Examples: 'click', 'purchase' */
  eventName?: string;
  /** Output only. If set, this event can currently be deleted with DeleteConversionEvent. */
  deletable?: boolean;
  /** Output only. If set to true, this conversion event refers to a custom event. If set to false, this conversion event refers to a default event in GA. Default events typically have special meaning in GA. Default events are usually created for you by the GA system, but in some cases can be created by property admins. Custom events count towards the maximum number of custom conversion events that may be created per property. */
  custom?: boolean;
  /** Optional. Defines a default value/currency for a conversion event. */
  defaultConversionValue?: GoogleAnalyticsAdminV1betaConversionEventDefaultConversionValue;
  /** Optional. The method by which conversions will be counted across multiple events within a session. If this value is not provided, it will be set to `ONCE_PER_EVENT`. */
  countingMethod?:
    | "CONVERSION_COUNTING_METHOD_UNSPECIFIED"
    | "ONCE_PER_EVENT"
    | "ONCE_PER_SESSION"
    | (string & {});
  /** Identifier. Resource name of this conversion event. Format: properties/{property}/conversionEvents/{conversion_event} */
  name?: string;
}

export const GoogleAnalyticsAdminV1betaConversionEvent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    eventName: Schema.optional(Schema.String),
    deletable: Schema.optional(Schema.Boolean),
    custom: Schema.optional(Schema.Boolean),
    defaultConversionValue: Schema.optional(
      GoogleAnalyticsAdminV1betaConversionEventDefaultConversionValue,
    ),
    countingMethod: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaConversionEvent" });

export interface GoogleAnalyticsAdminV1betaMeasurementProtocolSecret {
  /** Identifier. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret} */
  name?: string;
  /** Required. Human-readable display name for this secret. */
  displayName?: string;
  /** Output only. The measurement protocol secret value. Pass this value to the api_secret field of the Measurement Protocol API when sending hits to this secret's parent property. */
  secretValue?: string;
}

export const GoogleAnalyticsAdminV1betaMeasurementProtocolSecret =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    secretValue: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaMeasurementProtocolSecret",
  });

export interface GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource {
  /** A snapshot of a data retention settings resource in change history. */
  dataRetentionSettings?: GoogleAnalyticsAdminV1betaDataRetentionSettings;
  /** A snapshot of an Account resource in change history. */
  account?: GoogleAnalyticsAdminV1betaAccount;
  /** A snapshot of a Property resource in change history. */
  property?: GoogleAnalyticsAdminV1betaProperty;
  /** A snapshot of a GoogleAdsLink resource in change history. */
  googleAdsLink?: GoogleAnalyticsAdminV1betaGoogleAdsLink;
  /** A snapshot of a ConversionEvent resource in change history. */
  conversionEvent?: GoogleAnalyticsAdminV1betaConversionEvent;
  /** A snapshot of a DataStream resource in change history. */
  dataStream?: GoogleAnalyticsAdminV1betaDataStream;
  /** A snapshot of a FirebaseLink resource in change history. */
  firebaseLink?: GoogleAnalyticsAdminV1betaFirebaseLink;
  /** A snapshot of a MeasurementProtocolSecret resource in change history. */
  measurementProtocolSecret?: GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;
}

export const GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataRetentionSettings: Schema.optional(
      GoogleAnalyticsAdminV1betaDataRetentionSettings,
    ),
    account: Schema.optional(GoogleAnalyticsAdminV1betaAccount),
    property: Schema.optional(GoogleAnalyticsAdminV1betaProperty),
    googleAdsLink: Schema.optional(GoogleAnalyticsAdminV1betaGoogleAdsLink),
    conversionEvent: Schema.optional(GoogleAnalyticsAdminV1betaConversionEvent),
    dataStream: Schema.optional(GoogleAnalyticsAdminV1betaDataStream),
    firebaseLink: Schema.optional(GoogleAnalyticsAdminV1betaFirebaseLink),
    measurementProtocolSecret: Schema.optional(
      GoogleAnalyticsAdminV1betaMeasurementProtocolSecret,
    ),
  }).annotate({
    identifier:
      "GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource",
  });

export interface GoogleAnalyticsAdminV1betaPropertySummary {
  /** Resource name of property referred to by this property summary Format: properties/{property_id} Example: "properties/1000" */
  property?: string;
  /** The property's property type. */
  propertyType?:
    | "PROPERTY_TYPE_UNSPECIFIED"
    | "PROPERTY_TYPE_ORDINARY"
    | "PROPERTY_TYPE_SUBPROPERTY"
    | "PROPERTY_TYPE_ROLLUP"
    | (string & {});
  /** Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/200" */
  parent?: string;
  /** Display name for the property referred to in this property summary. */
  displayName?: string;
}

export const GoogleAnalyticsAdminV1betaPropertySummary =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(Schema.String),
    propertyType: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaPropertySummary" });

export interface GoogleAnalyticsAdminV1betaAccountSummary {
  /** Identifier. Resource name for this account summary. Format: accountSummaries/{account_id} Example: "accountSummaries/1000" */
  name?: string;
  /** List of summaries for child accounts of this account. */
  propertySummaries?: ReadonlyArray<GoogleAnalyticsAdminV1betaPropertySummary>;
  /** Resource name of account referred to by this account summary Format: accounts/{account_id} Example: "accounts/1000" */
  account?: string;
  /** Display name for the account referred to in this account summary. */
  displayName?: string;
}

export const GoogleAnalyticsAdminV1betaAccountSummary =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    propertySummaries: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaPropertySummary),
    ),
    account: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccountSummary" });

export interface GoogleAnalyticsAdminV1betaListAccountSummariesResponse {
  /** Account summaries of all accounts the caller has access to. */
  accountSummaries?: ReadonlyArray<GoogleAnalyticsAdminV1betaAccountSummary>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleAnalyticsAdminV1betaListAccountSummariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountSummaries: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaAccountSummary),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaListAccountSummariesResponse",
  });

export interface GoogleAnalyticsAdminV1betaDataSharingSettings {
  /** Identifier. Resource name. Format: accounts/{account}/dataSharingSettings Example: "accounts/1000/dataSharingSettings" */
  name?: string;
  /** Deprecated. This field is no longer used and always returns false. */
  sharingWithGoogleAnySalesEnabled?: boolean;
  /** Allows Google technical support representatives access to your Google Analytics data and account when necessary to provide service and find solutions to technical issues. This field maps to the "Technical support" field in the Google Analytics Admin UI. */
  sharingWithGoogleSupportEnabled?: boolean;
  /** Allows Google to use the data to improve other Google products or services. This fields maps to the "Google products & services" field in the Google Analytics Admin UI. */
  sharingWithGoogleProductsEnabled?: boolean;
  /** Allows Google access to your Google Analytics account data, including account usage and configuration data, product spending, and users associated with your Google Analytics account, so that Google can help you make the most of Google products, providing you with insights, offers, recommendations, and optimization tips across Google Analytics and other Google products for business. This field maps to the "Recommendations for your business" field in the Google Analytics Admin UI. */
  sharingWithGoogleAssignedSalesEnabled?: boolean;
  /** Enable features like predictions, modeled data, and benchmarking that can provide you with richer business insights when you contribute aggregated measurement data. The data you share (including information about the property from which it is shared) is aggregated and de-identified before being used to generate business insights. This field maps to the "Modeling contributions & business insights" field in the Google Analytics Admin UI. */
  sharingWithOthersEnabled?: boolean;
}

export const GoogleAnalyticsAdminV1betaDataSharingSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    sharingWithGoogleAnySalesEnabled: Schema.optional(Schema.Boolean),
    sharingWithGoogleSupportEnabled: Schema.optional(Schema.Boolean),
    sharingWithGoogleProductsEnabled: Schema.optional(Schema.Boolean),
    sharingWithGoogleAssignedSalesEnabled: Schema.optional(Schema.Boolean),
    sharingWithOthersEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaDataSharingSettings" });

export interface GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse {
  /** The param to be passed in the ToS link. */
  accountTicketId?: string;
}

export const GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountTicketId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse",
  });

export interface GoogleAnalyticsAdminV1betaKeyEventDefaultValue {
  /** Required. This will be used to populate the "value" parameter for all occurrences of this Key Event (specified by event_name) where that parameter is unset. */
  numericValue?: number;
  /** Required. When an occurrence of this Key Event (specified by event_name) has no set currency this currency will be applied as the default. Must be in ISO 4217 currency code format. See https://en.wikipedia.org/wiki/ISO_4217 for more information. */
  currencyCode?: string;
}

export const GoogleAnalyticsAdminV1betaKeyEventDefaultValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numericValue: Schema.optional(Schema.Number),
    currencyCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaKeyEventDefaultValue" });

export interface GoogleAnalyticsAdminV1betaKeyEvent {
  /** Output only. Time when this key event was created in the property. */
  createTime?: string;
  /** Output only. If set to true, this key event refers to a custom event. If set to false, this key event refers to a default event in GA. Default events typically have special meaning in GA. Default events are usually created for you by the GA system, but in some cases can be created by property admins. Custom events count towards the maximum number of custom key events that may be created per property. */
  custom?: boolean;
  /** Immutable. The event name for this key event. Examples: 'click', 'purchase' */
  eventName?: string;
  /** Output only. If set to true, this event can be deleted. */
  deletable?: boolean;
  /** Output only. Resource name of this key event. Format: properties/{property}/keyEvents/{key_event} */
  name?: string;
  /** Optional. Defines a default value/currency for a key event. */
  defaultValue?: GoogleAnalyticsAdminV1betaKeyEventDefaultValue;
  /** Required. The method by which Key Events will be counted across multiple events within a session. */
  countingMethod?:
    | "COUNTING_METHOD_UNSPECIFIED"
    | "ONCE_PER_EVENT"
    | "ONCE_PER_SESSION"
    | (string & {});
}

export const GoogleAnalyticsAdminV1betaKeyEvent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    custom: Schema.optional(Schema.Boolean),
    eventName: Schema.optional(Schema.String),
    deletable: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    defaultValue: Schema.optional(
      GoogleAnalyticsAdminV1betaKeyEventDefaultValue,
    ),
    countingMethod: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaKeyEvent" });

export interface GoogleAnalyticsAdminV1betaListAccountsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Results that were accessible to the caller. */
  accounts?: ReadonlyArray<GoogleAnalyticsAdminV1betaAccount>;
}

export const GoogleAnalyticsAdminV1betaListAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    accounts: Schema.optional(Schema.Array(GoogleAnalyticsAdminV1betaAccount)),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaListAccountsResponse" });

export interface GoogleAnalyticsAdminV1betaAccessQuotaStatus {
  /** Quota consumed by this request. */
  consumed?: number;
  /** Quota remaining after this request. */
  remaining?: number;
}

export const GoogleAnalyticsAdminV1betaAccessQuotaStatus =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consumed: Schema.optional(Schema.Number),
    remaining: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccessQuotaStatus" });

export interface GoogleAnalyticsAdminV1betaChangeHistoryChange {
  /** The type of action that changed this resource. */
  action?:
    | "ACTION_TYPE_UNSPECIFIED"
    | "CREATED"
    | "UPDATED"
    | "DELETED"
    | (string & {});
  /** Resource contents from before the change was made. If this resource was created in this change, this field will be missing. */
  resourceBeforeChange?: GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource;
  /** Resource contents from after the change was made. If this resource was deleted in this change, this field will be missing. */
  resourceAfterChange?: GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource;
  /** Resource name of the resource whose changes are described by this entry. */
  resource?: string;
}

export const GoogleAnalyticsAdminV1betaChangeHistoryChange =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    resourceBeforeChange: Schema.optional(
      GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource,
    ),
    resourceAfterChange: Schema.optional(
      GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource,
    ),
    resource: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaChangeHistoryChange" });

export interface GoogleAnalyticsAdminV1betaAccessQuota {
  /** Properties can use 250,000 tokens per day. Most requests consume fewer than 10 tokens. */
  tokensPerDay?: GoogleAnalyticsAdminV1betaAccessQuotaStatus;
  /** Properties can use 50,000 tokens per hour. An API request consumes a single number of tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas. */
  tokensPerHour?: GoogleAnalyticsAdminV1betaAccessQuotaStatus;
  /** Properties can use up to 25% of their tokens per project per hour. This amounts to Analytics 360 Properties can use 12,500 tokens per project per hour. An API request consumes a single number of tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas. */
  tokensPerProjectPerHour?: GoogleAnalyticsAdminV1betaAccessQuotaStatus;
  /** Properties and cloud project pairs can have up to 50 server errors per hour. */
  serverErrorsPerProjectPerHour?: GoogleAnalyticsAdminV1betaAccessQuotaStatus;
  /** Properties can use up to 50 concurrent requests. */
  concurrentRequests?: GoogleAnalyticsAdminV1betaAccessQuotaStatus;
}

export const GoogleAnalyticsAdminV1betaAccessQuota =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokensPerDay: Schema.optional(GoogleAnalyticsAdminV1betaAccessQuotaStatus),
    tokensPerHour: Schema.optional(GoogleAnalyticsAdminV1betaAccessQuotaStatus),
    tokensPerProjectPerHour: Schema.optional(
      GoogleAnalyticsAdminV1betaAccessQuotaStatus,
    ),
    serverErrorsPerProjectPerHour: Schema.optional(
      GoogleAnalyticsAdminV1betaAccessQuotaStatus,
    ),
    concurrentRequests: Schema.optional(
      GoogleAnalyticsAdminV1betaAccessQuotaStatus,
    ),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccessQuota" });

export interface GoogleAnalyticsAdminV1betaAccessDateRange {
  /** The inclusive start date for the query in the format `YYYY-MM-DD`. Cannot be after `endDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone. */
  startDate?: string;
  /** The inclusive end date for the query in the format `YYYY-MM-DD`. Cannot be before `startDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone. */
  endDate?: string;
}

export const GoogleAnalyticsAdminV1betaAccessDateRange =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startDate: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccessDateRange" });

export interface GoogleAnalyticsAdminV1betaListDataStreamsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of DataStreams. */
  dataStreams?: ReadonlyArray<GoogleAnalyticsAdminV1betaDataStream>;
}

export const GoogleAnalyticsAdminV1betaListDataStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    dataStreams: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaDataStream),
    ),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaListDataStreamsResponse",
  });

export interface GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest {
  /** Optional. If set, only return changes if they are for a resource that matches at least one of these types. */
  resourceType?: ReadonlyArray<
    | "CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED"
    | "ACCOUNT"
    | "PROPERTY"
    | "FIREBASE_LINK"
    | "GOOGLE_ADS_LINK"
    | "GOOGLE_SIGNALS_SETTINGS"
    | "CONVERSION_EVENT"
    | "MEASUREMENT_PROTOCOL_SECRET"
    | "CUSTOM_DIMENSION"
    | "CUSTOM_METRIC"
    | "DATA_RETENTION_SETTINGS"
    | "DISPLAY_VIDEO_360_ADVERTISER_LINK"
    | "DISPLAY_VIDEO_360_ADVERTISER_LINK_PROPOSAL"
    | "DATA_STREAM"
    | "ATTRIBUTION_SETTINGS"
    | (string & {})
  >;
  /** Optional. If set, only return changes if they are made by a user in this list. */
  actorEmail?: ReadonlyArray<string>;
  /** Optional. If set, only return changes made after this time (inclusive). */
  earliestChangeTime?: string;
  /** Optional. If set, only return changes made before this time (inclusive). */
  latestChangeTime?: string;
  /** Optional. Resource name for a child property. If set, only return changes made to this property or its child resources. Format: properties/{propertyId} Example: `properties/100` */
  property?: string;
  /** Optional. If set, only return changes that match one or more of these types of actions. */
  action?: ReadonlyArray<
    | "ACTION_TYPE_UNSPECIFIED"
    | "CREATED"
    | "UPDATED"
    | "DELETED"
    | (string & {})
  >;
  /** Optional. A page token, received from a previous `SearchChangeHistoryEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchChangeHistoryEvents` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of ChangeHistoryEvent items to return. If unspecified, at most 50 items will be returned. The maximum value is 200 (higher values will be coerced to the maximum). Note that the service may return a page with fewer items than this value specifies (potentially even zero), and that there still may be additional pages. If you want a particular number of items, you'll need to continue requesting additional pages using `page_token` until you get the needed number. */
  pageSize?: number;
}

export const GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.Array(Schema.String)),
    actorEmail: Schema.optional(Schema.Array(Schema.String)),
    earliestChangeTime: Schema.optional(Schema.String),
    latestChangeTime: Schema.optional(Schema.String),
    property: Schema.optional(Schema.String),
    action: Schema.optional(Schema.Array(Schema.String)),
    pageToken: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest",
  });

export interface GoogleAnalyticsAdminV1betaAccessDimensionValue {
  /** The dimension value. For example, this value may be 'France' for the 'country' dimension. */
  value?: string;
}

export const GoogleAnalyticsAdminV1betaAccessDimensionValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccessDimensionValue" });

export interface GoogleAnalyticsAdminV1betaAccessRow {
  /** List of dimension values. These values are in the same order as specified in the request. */
  dimensionValues?: ReadonlyArray<GoogleAnalyticsAdminV1betaAccessDimensionValue>;
  /** List of metric values. These values are in the same order as specified in the request. */
  metricValues?: ReadonlyArray<GoogleAnalyticsAdminV1betaAccessMetricValue>;
}

export const GoogleAnalyticsAdminV1betaAccessRow =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensionValues: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaAccessDimensionValue),
    ),
    metricValues: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaAccessMetricValue),
    ),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccessRow" });

export interface GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** A list of secrets for the parent stream specified in the request. */
  measurementProtocolSecrets?: ReadonlyArray<GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>;
}

export const GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    measurementProtocolSecrets: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaMeasurementProtocolSecret),
    ),
  }).annotate({
    identifier:
      "GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse",
  });

export interface GoogleAnalyticsAdminV1betaAccessMetricHeader {
  /** The metric's name; for example 'accessCount'. */
  metricName?: string;
}

export const GoogleAnalyticsAdminV1betaAccessMetricHeader =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metricName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccessMetricHeader" });

export interface GoogleAnalyticsAdminV1betaAccessDimensionHeader {
  /** The dimension's name; for example 'userEmail'. */
  dimensionName?: string;
}

export const GoogleAnalyticsAdminV1betaAccessDimensionHeader =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensionName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaAccessDimensionHeader",
  });

export interface GoogleAnalyticsAdminV1betaRunAccessReportResponse {
  /** Rows of dimension value combinations and metric values in the report. */
  rows?: ReadonlyArray<GoogleAnalyticsAdminV1betaAccessRow>;
  /** The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
  rowCount?: number;
  /** The header for a column in the report that corresponds to a specific metric. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows. */
  metricHeaders?: ReadonlyArray<GoogleAnalyticsAdminV1betaAccessMetricHeader>;
  /** The header for a column in the report that corresponds to a specific dimension. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows. */
  dimensionHeaders?: ReadonlyArray<GoogleAnalyticsAdminV1betaAccessDimensionHeader>;
  /** The quota state for this Analytics property including this request. This field doesn't work with account-level requests. */
  quota?: GoogleAnalyticsAdminV1betaAccessQuota;
}

export const GoogleAnalyticsAdminV1betaRunAccessReportResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rows: Schema.optional(Schema.Array(GoogleAnalyticsAdminV1betaAccessRow)),
    rowCount: Schema.optional(Schema.Number),
    metricHeaders: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaAccessMetricHeader),
    ),
    dimensionHeaders: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaAccessDimensionHeader),
    ),
    quota: Schema.optional(GoogleAnalyticsAdminV1betaAccessQuota),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaRunAccessReportResponse",
  });

export interface GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse {
  /** List of GoogleAdsLinks. */
  googleAdsLinks?: ReadonlyArray<GoogleAnalyticsAdminV1betaGoogleAdsLink>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleAdsLinks: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaGoogleAdsLink),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse",
  });

export interface GoogleAnalyticsAdminV1betaChangeHistoryEvent {
  /** ID of this change history event. This ID is unique across Google Analytics. */
  id?: string;
  /** Email address of the Google account that made the change. This will be a valid email address if the actor field is set to USER, and empty otherwise. Google accounts that have been deleted will cause an error. */
  userActorEmail?: string;
  /** Time when change was made. */
  changeTime?: string;
  /** The type of actor that made this change. */
  actorType?:
    | "ACTOR_TYPE_UNSPECIFIED"
    | "USER"
    | "SYSTEM"
    | "SUPPORT"
    | (string & {});
  /** If true, then the list of changes returned was filtered, and does not represent all changes that occurred in this event. */
  changesFiltered?: boolean;
  /** A list of changes made in this change history event that fit the filters specified in SearchChangeHistoryEventsRequest. */
  changes?: ReadonlyArray<GoogleAnalyticsAdminV1betaChangeHistoryChange>;
}

export const GoogleAnalyticsAdminV1betaChangeHistoryEvent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    userActorEmail: Schema.optional(Schema.String),
    changeTime: Schema.optional(Schema.String),
    actorType: Schema.optional(Schema.String),
    changesFiltered: Schema.optional(Schema.Boolean),
    changes: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaChangeHistoryChange),
    ),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaChangeHistoryEvent" });

export interface GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Results that were accessible to the caller. */
  changeHistoryEvents?: ReadonlyArray<GoogleAnalyticsAdminV1betaChangeHistoryEvent>;
}

export const GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    changeHistoryEvents: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaChangeHistoryEvent),
    ),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse",
  });

export interface GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy {
  /** A dimension name in the request to order by. */
  dimensionName?: string;
  /** Controls the rule for dimension value ordering. */
  orderType?:
    | "ORDER_TYPE_UNSPECIFIED"
    | "ALPHANUMERIC"
    | "CASE_INSENSITIVE_ALPHANUMERIC"
    | "NUMERIC"
    | (string & {});
}

export const GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensionName: Schema.optional(Schema.String),
    orderType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy",
  });

export interface GoogleAnalyticsAdminV1betaAccessOrderBy {
  /** If true, sorts by descending order. If false or unspecified, sorts in ascending order. */
  desc?: boolean;
  /** Sorts results by a metric's values. */
  metric?: GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy;
  /** Sorts results by a dimension's values. */
  dimension?: GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy;
}

export const GoogleAnalyticsAdminV1betaAccessOrderBy =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    desc: Schema.optional(Schema.Boolean),
    metric: Schema.optional(
      GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy,
    ),
    dimension: Schema.optional(
      GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy,
    ),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccessOrderBy" });

export interface GoogleAnalyticsAdminV1betaArchiveCustomDimensionRequest {}

export const GoogleAnalyticsAdminV1betaArchiveCustomDimensionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAnalyticsAdminV1betaArchiveCustomDimensionRequest",
  });

export interface GoogleAnalyticsAdminV1betaArchiveCustomMetricRequest {}

export const GoogleAnalyticsAdminV1betaArchiveCustomMetricRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAnalyticsAdminV1betaArchiveCustomMetricRequest",
  });

export interface GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse {}

export const GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse",
  });

export interface GoogleAnalyticsAdminV1betaListConversionEventsResponse {
  /** The requested conversion events */
  conversionEvents?: ReadonlyArray<GoogleAnalyticsAdminV1betaConversionEvent>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleAnalyticsAdminV1betaListConversionEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversionEvents: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaConversionEvent),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaListConversionEventsResponse",
  });

export interface GoogleAnalyticsAdminV1betaListKeyEventsResponse {
  /** The requested Key Events */
  keyEvents?: ReadonlyArray<GoogleAnalyticsAdminV1betaKeyEvent>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleAnalyticsAdminV1betaListKeyEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyEvents: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaKeyEvent),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaListKeyEventsResponse",
  });

export interface GoogleAnalyticsAdminV1betaProvisionAccountTicketRequest {
  /** The account to create. */
  account?: GoogleAnalyticsAdminV1betaAccount;
  /** Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in Cloud Console as a Redirect URI. */
  redirectUri?: string;
}

export const GoogleAnalyticsAdminV1betaProvisionAccountTicketRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.optional(GoogleAnalyticsAdminV1betaAccount),
    redirectUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaProvisionAccountTicketRequest",
  });

export interface GoogleAnalyticsAdminV1betaListPropertiesResponse {
  /** Results that matched the filter criteria and were accessible to the caller. */
  properties?: ReadonlyArray<GoogleAnalyticsAdminV1betaProperty>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleAnalyticsAdminV1betaListPropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaProperty),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaListPropertiesResponse",
  });

export interface GoogleAnalyticsAdminV1betaAccessFilterExpressionList {
  /** A list of filter expressions. */
  expressions?: ReadonlyArray<GoogleAnalyticsAdminV1betaAccessFilterExpression>;
}

export const GoogleAnalyticsAdminV1betaAccessFilterExpressionList: Schema.Schema<GoogleAnalyticsAdminV1betaAccessFilterExpressionList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      expressions: Schema.optional(
        Schema.Array(GoogleAnalyticsAdminV1betaAccessFilterExpression),
      ),
    }),
  ).annotate({
    identifier: "GoogleAnalyticsAdminV1betaAccessFilterExpressionList",
  }) as any as Schema.Schema<GoogleAnalyticsAdminV1betaAccessFilterExpressionList>;

export interface GoogleAnalyticsAdminV1betaAccessFilterExpression {
  /** Each of the FilterExpressions in the or_group has an OR relationship. */
  orGroup?: GoogleAnalyticsAdminV1betaAccessFilterExpressionList;
  /** Each of the FilterExpressions in the and_group has an AND relationship. */
  andGroup?: GoogleAnalyticsAdminV1betaAccessFilterExpressionList;
  /** The FilterExpression is NOT of not_expression. */
  notExpression?: GoogleAnalyticsAdminV1betaAccessFilterExpression;
  /** A primitive filter. In the same FilterExpression, all of the filter's field names need to be either all dimensions or all metrics. */
  accessFilter?: GoogleAnalyticsAdminV1betaAccessFilter;
}

export const GoogleAnalyticsAdminV1betaAccessFilterExpression: Schema.Schema<GoogleAnalyticsAdminV1betaAccessFilterExpression> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      orGroup: Schema.optional(
        GoogleAnalyticsAdminV1betaAccessFilterExpressionList,
      ),
      andGroup: Schema.optional(
        GoogleAnalyticsAdminV1betaAccessFilterExpressionList,
      ),
      notExpression: Schema.optional(
        GoogleAnalyticsAdminV1betaAccessFilterExpression,
      ),
      accessFilter: Schema.optional(GoogleAnalyticsAdminV1betaAccessFilter),
    }),
  ).annotate({
    identifier: "GoogleAnalyticsAdminV1betaAccessFilterExpression",
  }) as any as Schema.Schema<GoogleAnalyticsAdminV1betaAccessFilterExpression>;

export interface GoogleAnalyticsAdminV1betaAccessDimension {
  /** The API name of the dimension. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of dimensions supported in this API. Dimensions are referenced by name in `dimensionFilter` and `orderBys`. */
  dimensionName?: string;
}

export const GoogleAnalyticsAdminV1betaAccessDimension =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensionName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAnalyticsAdminV1betaAccessDimension" });

export interface GoogleAnalyticsAdminV1betaRunAccessReportRequest {
  /** Dimension filters let you restrict report response to specific dimension values which match the filter. For example, filtering on access records of a single user. To learn more, see [Fundamentals of Dimension Filters](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#dimension_filters) for examples. Metrics cannot be used in this filter. */
  dimensionFilter?: GoogleAnalyticsAdminV1betaAccessFilterExpression;
  /** The row count of the start row. The first row is counted as row 0. If offset is unspecified, it is treated as 0. If offset is zero, then this method will return the first page of results with `limit` entries. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
  offset?: string;
  /** Date ranges of access records to read. If multiple date ranges are requested, each response row will contain a zero based date range index. If two date ranges overlap, the access records for the overlapping days is included in the response rows for both date ranges. Requests are allowed up to 2 date ranges. */
  dateRanges?: ReadonlyArray<GoogleAnalyticsAdminV1betaAccessDateRange>;
  /** Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [AccessQuota](#AccessQuota). For account-level requests, this field must be false. */
  returnEntityQuota?: boolean;
  /** Metric filters allow you to restrict report response to specific metric values which match the filter. Metric filters are applied after aggregating the report's rows, similar to SQL having-clause. Dimensions cannot be used in this filter. */
  metricFilter?: GoogleAnalyticsAdminV1betaAccessFilterExpression;
  /** This request's time zone if specified. If unspecified, the property's time zone is used. The request's time zone is used to interpret the start & end dates of the report. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo". */
  timeZone?: string;
  /** Optional. Determines whether to include users who have never made an API call in the response. If true, all users with access to the specified property or account are included in the response, regardless of whether they have made an API call or not. If false, only the users who have made an API call will be included. */
  includeAllUsers?: boolean;
  /** The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 100,000 rows per request, no matter how many you ask for. `limit` must be positive. The API may return fewer rows than the requested `limit`, if there aren't as many remaining rows as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
  limit?: string;
  /** Optional. Decides whether to return the users within user groups. This field works only when include_all_users is set to true. If true, it will return all users with access to the specified property or account. If false, only the users with direct access will be returned. */
  expandGroups?: boolean;
  /** The metrics requested and displayed in the response. Requests are allowed up to 10 metrics. */
  metrics?: ReadonlyArray<GoogleAnalyticsAdminV1betaAccessMetric>;
  /** The dimensions requested and displayed in the response. Requests are allowed up to 9 dimensions. */
  dimensions?: ReadonlyArray<GoogleAnalyticsAdminV1betaAccessDimension>;
  /** Specifies how rows are ordered in the response. */
  orderBys?: ReadonlyArray<GoogleAnalyticsAdminV1betaAccessOrderBy>;
}

export const GoogleAnalyticsAdminV1betaRunAccessReportRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensionFilter: Schema.optional(
      GoogleAnalyticsAdminV1betaAccessFilterExpression,
    ),
    offset: Schema.optional(Schema.String),
    dateRanges: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaAccessDateRange),
    ),
    returnEntityQuota: Schema.optional(Schema.Boolean),
    metricFilter: Schema.optional(
      GoogleAnalyticsAdminV1betaAccessFilterExpression,
    ),
    timeZone: Schema.optional(Schema.String),
    includeAllUsers: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.String),
    expandGroups: Schema.optional(Schema.Boolean),
    metrics: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaAccessMetric),
    ),
    dimensions: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaAccessDimension),
    ),
    orderBys: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaAccessOrderBy),
    ),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaRunAccessReportRequest",
  });

export interface GoogleAnalyticsAdminV1betaListCustomDimensionsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of CustomDimensions. */
  customDimensions?: ReadonlyArray<GoogleAnalyticsAdminV1betaCustomDimension>;
}

export const GoogleAnalyticsAdminV1betaListCustomDimensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    customDimensions: Schema.optional(
      Schema.Array(GoogleAnalyticsAdminV1betaCustomDimension),
    ),
  }).annotate({
    identifier: "GoogleAnalyticsAdminV1betaListCustomDimensionsResponse",
  });

// ==========================================================================
// Operations
// ==========================================================================

export interface ListAccountsRequest {
  /** Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) */
  pageSize?: number;
  /** Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not. */
  showDeleted?: boolean;
  /** Optional. A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  showDeleted: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("showDeleted")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta/accounts" }),
  svc,
) as unknown as Schema.Schema<ListAccountsRequest>;

export type ListAccountsResponse =
  GoogleAnalyticsAdminV1betaListAccountsResponse;
export const ListAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaListAccountsResponse;

export type ListAccountsError = DefaultErrors;

/** Returns all accounts accessible by the caller. Note that these accounts might not currently have GA properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found. */
export const listAccounts: API.PaginatedOperationMethod<
  ListAccountsRequest,
  ListAccountsResponse,
  ListAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsRequest,
  output: ListAccountsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetDataSharingSettingsAccountsRequest {
  /** Required. The name of the settings to lookup. Format: accounts/{account}/dataSharingSettings Example: `accounts/1000/dataSharingSettings` */
  name: string;
}

export const GetDataSharingSettingsAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetDataSharingSettingsAccountsRequest>;

export type GetDataSharingSettingsAccountsResponse =
  GoogleAnalyticsAdminV1betaDataSharingSettings;
export const GetDataSharingSettingsAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaDataSharingSettings;

export type GetDataSharingSettingsAccountsError = DefaultErrors;

/** Get data sharing settings on an account. Data sharing settings are singletons. */
export const getDataSharingSettingsAccounts: API.OperationMethod<
  GetDataSharingSettingsAccountsRequest,
  GetDataSharingSettingsAccountsResponse,
  GetDataSharingSettingsAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDataSharingSettingsAccountsRequest,
  output: GetDataSharingSettingsAccountsResponse,
  errors: [],
}));

export interface GetAccountsRequest {
  /** Required. The name of the account to lookup. Format: accounts/{account} Example: "accounts/100" */
  name: string;
}

export const GetAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta/{name}" }),
  svc,
) as unknown as Schema.Schema<GetAccountsRequest>;

export type GetAccountsResponse = GoogleAnalyticsAdminV1betaAccount;
export const GetAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaAccount;

export type GetAccountsError = DefaultErrors;

/** Lookup for a single Account. */
export const getAccounts: API.OperationMethod<
  GetAccountsRequest,
  GetAccountsResponse,
  GetAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsRequest,
  output: GetAccountsResponse,
  errors: [],
}));

export interface PatchAccountsRequest {
  /** Identifier. Resource name of this account. Format: accounts/{account} Example: "accounts/100" */
  name: string;
  /** Required. The list of fields to be updated. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. */
  updateMask?: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaAccount;
}

export const PatchAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
  body: Schema.optional(GoogleAnalyticsAdminV1betaAccount).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "PATCH", path: "v1beta/{name}", hasBody: true }),
  svc,
) as unknown as Schema.Schema<PatchAccountsRequest>;

export type PatchAccountsResponse = GoogleAnalyticsAdminV1betaAccount;
export const PatchAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaAccount;

export type PatchAccountsError = DefaultErrors;

/** Updates an account. */
export const patchAccounts: API.OperationMethod<
  PatchAccountsRequest,
  PatchAccountsResponse,
  PatchAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAccountsRequest,
  output: PatchAccountsResponse,
  errors: [],
}));

export interface DeleteAccountsRequest {
  /** Required. The name of the Account to soft-delete. Format: accounts/{account} Example: "accounts/100" */
  name: string;
}

export const DeleteAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "DELETE", path: "v1beta/{name}" }),
  svc,
) as unknown as Schema.Schema<DeleteAccountsRequest>;

export type DeleteAccountsResponse = GoogleProtobufEmpty;
export const DeleteAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteAccountsError = DefaultErrors;

/** Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted accounts. However, they can be restored using the Trash Can UI. If the accounts are not restored before the expiration time, the account and all child resources (eg: Properties, GoogleAdsLinks, Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found. */
export const deleteAccounts: API.OperationMethod<
  DeleteAccountsRequest,
  DeleteAccountsResponse,
  DeleteAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsRequest,
  output: DeleteAccountsResponse,
  errors: [],
}));

export interface ProvisionAccountTicketAccountsRequest {
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaProvisionAccountTicketRequest;
}

export const ProvisionAccountTicketAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      GoogleAnalyticsAdminV1betaProvisionAccountTicketRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/accounts:provisionAccountTicket",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ProvisionAccountTicketAccountsRequest>;

export type ProvisionAccountTicketAccountsResponse =
  GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse;
export const ProvisionAccountTicketAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse;

export type ProvisionAccountTicketAccountsError = DefaultErrors;

/** Requests a ticket for creating an account. */
export const provisionAccountTicketAccounts: API.OperationMethod<
  ProvisionAccountTicketAccountsRequest,
  ProvisionAccountTicketAccountsResponse,
  ProvisionAccountTicketAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ProvisionAccountTicketAccountsRequest,
  output: ProvisionAccountTicketAccountsResponse,
  errors: [],
}));

export interface SearchChangeHistoryEventsAccountsRequest {
  /** Required. The account resource for which to return change history resources. Format: accounts/{account} Example: `accounts/100` */
  account: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest;
}

export const SearchChangeHistoryEventsAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String.pipe(T.HttpPath("account")),
    body: Schema.optional(
      GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{account}:searchChangeHistoryEvents",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchChangeHistoryEventsAccountsRequest>;

export type SearchChangeHistoryEventsAccountsResponse =
  GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse;
export const SearchChangeHistoryEventsAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse;

export type SearchChangeHistoryEventsAccountsError = DefaultErrors;

/** Searches through all changes to an account or its children given the specified set of filters. Only returns the subset of changes supported by the API. The UI may return additional changes. */
export const searchChangeHistoryEventsAccounts: API.OperationMethod<
  SearchChangeHistoryEventsAccountsRequest,
  SearchChangeHistoryEventsAccountsResponse,
  SearchChangeHistoryEventsAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchChangeHistoryEventsAccountsRequest,
  output: SearchChangeHistoryEventsAccountsResponse,
  errors: [],
}));

export interface RunAccessReportAccountsRequest {
  /** The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your Google Analytics property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your Google Analytics Account ID. */
  entity: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaRunAccessReportRequest;
}

export const RunAccessReportAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entity: Schema.String.pipe(T.HttpPath("entity")),
    body: Schema.optional(
      GoogleAnalyticsAdminV1betaRunAccessReportRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{entity}:runAccessReport",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RunAccessReportAccountsRequest>;

export type RunAccessReportAccountsResponse =
  GoogleAnalyticsAdminV1betaRunAccessReportResponse;
export const RunAccessReportAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaRunAccessReportResponse;

export type RunAccessReportAccountsError = DefaultErrors;

/** Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents). To give your feedback on this API, complete the [Google Analytics Access Reports feedback](https://docs.google.com/forms/d/e/1FAIpQLSdmEBUrMzAEdiEKk5TV5dEHvDUZDRlgWYdQdAeSdtR4hVjEhw/viewform) form. */
export const runAccessReportAccounts: API.OperationMethod<
  RunAccessReportAccountsRequest,
  RunAccessReportAccountsResponse,
  RunAccessReportAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunAccessReportAccountsRequest,
  output: RunAccessReportAccountsResponse,
  errors: [],
}));

export interface ListAccountSummariesRequest {
  /** Optional. A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) */
  pageSize?: number;
}

export const ListAccountSummariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/accountSummaries" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountSummariesRequest>;

export type ListAccountSummariesResponse =
  GoogleAnalyticsAdminV1betaListAccountSummariesResponse;
export const ListAccountSummariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaListAccountSummariesResponse;

export type ListAccountSummariesError = DefaultErrors;

/** Returns summaries of all accounts accessible by the caller. */
export const listAccountSummaries: API.PaginatedOperationMethod<
  ListAccountSummariesRequest,
  ListAccountSummariesResponse,
  ListAccountSummariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountSummariesRequest,
  output: ListAccountSummariesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateDataRetentionSettingsPropertiesRequest {
  /** Identifier. Resource name for this DataRetentionSetting resource. Format: properties/{property}/dataRetentionSettings */
  name: string;
  /** Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. */
  updateMask?: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaDataRetentionSettings;
}

export const UpdateDataRetentionSettingsPropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleAnalyticsAdminV1betaDataRetentionSettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateDataRetentionSettingsPropertiesRequest>;

export type UpdateDataRetentionSettingsPropertiesResponse =
  GoogleAnalyticsAdminV1betaDataRetentionSettings;
export const UpdateDataRetentionSettingsPropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaDataRetentionSettings;

export type UpdateDataRetentionSettingsPropertiesError = DefaultErrors;

/** Updates the singleton data retention settings for this property. */
export const updateDataRetentionSettingsProperties: API.OperationMethod<
  UpdateDataRetentionSettingsPropertiesRequest,
  UpdateDataRetentionSettingsPropertiesResponse,
  UpdateDataRetentionSettingsPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateDataRetentionSettingsPropertiesRequest,
  output: UpdateDataRetentionSettingsPropertiesResponse,
  errors: [],
}));

export interface CreatePropertiesRequest {
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaProperty;
}

export const CreatePropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(GoogleAnalyticsAdminV1betaProperty).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/properties", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreatePropertiesRequest>;

export type CreatePropertiesResponse = GoogleAnalyticsAdminV1betaProperty;
export const CreatePropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaProperty;

export type CreatePropertiesError = DefaultErrors;

/** Creates a Google Analytics property with the specified location and attributes. */
export const createProperties: API.OperationMethod<
  CreatePropertiesRequest,
  CreatePropertiesResponse,
  CreatePropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePropertiesRequest,
  output: CreatePropertiesResponse,
  errors: [],
}));

export interface GetDataRetentionSettingsPropertiesRequest {
  /** Required. The name of the settings to lookup. Format: properties/{property}/dataRetentionSettings Example: "properties/1000/dataRetentionSettings" */
  name: string;
}

export const GetDataRetentionSettingsPropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetDataRetentionSettingsPropertiesRequest>;

export type GetDataRetentionSettingsPropertiesResponse =
  GoogleAnalyticsAdminV1betaDataRetentionSettings;
export const GetDataRetentionSettingsPropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaDataRetentionSettings;

export type GetDataRetentionSettingsPropertiesError = DefaultErrors;

/** Returns the singleton data retention settings for this property. */
export const getDataRetentionSettingsProperties: API.OperationMethod<
  GetDataRetentionSettingsPropertiesRequest,
  GetDataRetentionSettingsPropertiesResponse,
  GetDataRetentionSettingsPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDataRetentionSettingsPropertiesRequest,
  output: GetDataRetentionSettingsPropertiesResponse,
  errors: [],
}));

export interface GetPropertiesRequest {
  /** Required. The name of the property to lookup. Format: properties/{property_id} Example: "properties/1000" */
  name: string;
}

export const GetPropertiesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta/{name}" }),
  svc,
) as unknown as Schema.Schema<GetPropertiesRequest>;

export type GetPropertiesResponse = GoogleAnalyticsAdminV1betaProperty;
export const GetPropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaProperty;

export type GetPropertiesError = DefaultErrors;

/** Lookup for a single GA Property. */
export const getProperties: API.OperationMethod<
  GetPropertiesRequest,
  GetPropertiesResponse,
  GetPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPropertiesRequest,
  output: GetPropertiesResponse,
  errors: [],
}));

export interface AcknowledgeUserDataCollectionPropertiesRequest {
  /** Required. The property for which to acknowledge user data collection. */
  property: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest;
}

export const AcknowledgeUserDataCollectionPropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.String.pipe(T.HttpPath("property")),
    body: Schema.optional(
      GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{property}:acknowledgeUserDataCollection",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AcknowledgeUserDataCollectionPropertiesRequest>;

export type AcknowledgeUserDataCollectionPropertiesResponse =
  GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse;
export const AcknowledgeUserDataCollectionPropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse;

export type AcknowledgeUserDataCollectionPropertiesError = DefaultErrors;

/** Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created. */
export const acknowledgeUserDataCollectionProperties: API.OperationMethod<
  AcknowledgeUserDataCollectionPropertiesRequest,
  AcknowledgeUserDataCollectionPropertiesResponse,
  AcknowledgeUserDataCollectionPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AcknowledgeUserDataCollectionPropertiesRequest,
  output: AcknowledgeUserDataCollectionPropertiesResponse,
  errors: [],
}));

export interface RunAccessReportPropertiesRequest {
  /** The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your Google Analytics property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your Google Analytics Account ID. */
  entity: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaRunAccessReportRequest;
}

export const RunAccessReportPropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entity: Schema.String.pipe(T.HttpPath("entity")),
    body: Schema.optional(
      GoogleAnalyticsAdminV1betaRunAccessReportRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{entity}:runAccessReport",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RunAccessReportPropertiesRequest>;

export type RunAccessReportPropertiesResponse =
  GoogleAnalyticsAdminV1betaRunAccessReportResponse;
export const RunAccessReportPropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaRunAccessReportResponse;

export type RunAccessReportPropertiesError = DefaultErrors;

/** Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents). To give your feedback on this API, complete the [Google Analytics Access Reports feedback](https://docs.google.com/forms/d/e/1FAIpQLSdmEBUrMzAEdiEKk5TV5dEHvDUZDRlgWYdQdAeSdtR4hVjEhw/viewform) form. */
export const runAccessReportProperties: API.OperationMethod<
  RunAccessReportPropertiesRequest,
  RunAccessReportPropertiesResponse,
  RunAccessReportPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunAccessReportPropertiesRequest,
  output: RunAccessReportPropertiesResponse,
  errors: [],
}));

export interface ListPropertiesRequest {
  /** Optional. A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) */
  pageSize?: number;
  /** Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not. */
  showDeleted?: boolean;
  /** Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account/property) or `ancestor:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: ``` | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | parent:properties/123 | The property with property id: 123. | | ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ``` */
  filter?: string;
}

export const ListPropertiesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  showDeleted: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("showDeleted")),
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta/properties" }),
  svc,
) as unknown as Schema.Schema<ListPropertiesRequest>;

export type ListPropertiesResponse =
  GoogleAnalyticsAdminV1betaListPropertiesResponse;
export const ListPropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaListPropertiesResponse;

export type ListPropertiesError = DefaultErrors;

/** Returns child Properties under the specified parent Account. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found. */
export const listProperties: API.PaginatedOperationMethod<
  ListPropertiesRequest,
  ListPropertiesResponse,
  ListPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPropertiesRequest,
  output: ListPropertiesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchPropertiesRequest {
  /** Identifier. Resource name of this property. Format: properties/{property_id} Example: "properties/1000" */
  name: string;
  /** Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. */
  updateMask?: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaProperty;
}

export const PatchPropertiesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleAnalyticsAdminV1betaProperty).pipe(
      T.HttpBody(),
    ),
  },
).pipe(
  T.Http({ method: "PATCH", path: "v1beta/{name}", hasBody: true }),
  svc,
) as unknown as Schema.Schema<PatchPropertiesRequest>;

export type PatchPropertiesResponse = GoogleAnalyticsAdminV1betaProperty;
export const PatchPropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaProperty;

export type PatchPropertiesError = DefaultErrors;

/** Updates a property. */
export const patchProperties: API.OperationMethod<
  PatchPropertiesRequest,
  PatchPropertiesResponse,
  PatchPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPropertiesRequest,
  output: PatchPropertiesResponse,
  errors: [],
}));

export interface DeletePropertiesRequest {
  /** Required. The name of the Property to soft-delete. Format: properties/{property_id} Example: "properties/1000" */
  name: string;
}

export const DeletePropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeletePropertiesRequest>;

export type DeletePropertiesResponse = GoogleAnalyticsAdminV1betaProperty;
export const DeletePropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaProperty;

export type DeletePropertiesError = DefaultErrors;

/** Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted properties. However, they can be restored using the Trash Can UI. If the properties are not restored before the expiration time, the Property and all child resources (eg: GoogleAdsLinks, Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found. */
export const deleteProperties: API.OperationMethod<
  DeletePropertiesRequest,
  DeletePropertiesResponse,
  DeletePropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePropertiesRequest,
  output: DeletePropertiesResponse,
  errors: [],
}));

export interface ListPropertiesCustomDimensionsRequest {
  /** Optional. A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). */
  pageSize?: number;
  /** Required. Example format: properties/1234 */
  parent: string;
}

export const ListPropertiesCustomDimensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{parent}/customDimensions" }),
    svc,
  ) as unknown as Schema.Schema<ListPropertiesCustomDimensionsRequest>;

export type ListPropertiesCustomDimensionsResponse =
  GoogleAnalyticsAdminV1betaListCustomDimensionsResponse;
export const ListPropertiesCustomDimensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaListCustomDimensionsResponse;

export type ListPropertiesCustomDimensionsError = DefaultErrors;

/** Lists CustomDimensions on a property. */
export const listPropertiesCustomDimensions: API.PaginatedOperationMethod<
  ListPropertiesCustomDimensionsRequest,
  ListPropertiesCustomDimensionsResponse,
  ListPropertiesCustomDimensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPropertiesCustomDimensionsRequest,
  output: ListPropertiesCustomDimensionsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ArchivePropertiesCustomDimensionsRequest {
  /** Required. The name of the CustomDimension to archive. Example format: properties/1234/customDimensions/5678 */
  name: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaArchiveCustomDimensionRequest;
}

export const ArchivePropertiesCustomDimensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleAnalyticsAdminV1betaArchiveCustomDimensionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{name}:archive", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ArchivePropertiesCustomDimensionsRequest>;

export type ArchivePropertiesCustomDimensionsResponse = GoogleProtobufEmpty;
export const ArchivePropertiesCustomDimensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type ArchivePropertiesCustomDimensionsError = DefaultErrors;

/** Archives a CustomDimension on a property. */
export const archivePropertiesCustomDimensions: API.OperationMethod<
  ArchivePropertiesCustomDimensionsRequest,
  ArchivePropertiesCustomDimensionsResponse,
  ArchivePropertiesCustomDimensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ArchivePropertiesCustomDimensionsRequest,
  output: ArchivePropertiesCustomDimensionsResponse,
  errors: [],
}));

export interface PatchPropertiesCustomDimensionsRequest {
  /** Identifier. Resource name for this CustomDimension resource. Format: properties/{property}/customDimensions/{customDimension} */
  name: string;
  /** Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. */
  updateMask?: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaCustomDimension;
}

export const PatchPropertiesCustomDimensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleAnalyticsAdminV1betaCustomDimension).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchPropertiesCustomDimensionsRequest>;

export type PatchPropertiesCustomDimensionsResponse =
  GoogleAnalyticsAdminV1betaCustomDimension;
export const PatchPropertiesCustomDimensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaCustomDimension;

export type PatchPropertiesCustomDimensionsError = DefaultErrors;

/** Updates a CustomDimension on a property. */
export const patchPropertiesCustomDimensions: API.OperationMethod<
  PatchPropertiesCustomDimensionsRequest,
  PatchPropertiesCustomDimensionsResponse,
  PatchPropertiesCustomDimensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPropertiesCustomDimensionsRequest,
  output: PatchPropertiesCustomDimensionsResponse,
  errors: [],
}));

export interface GetPropertiesCustomDimensionsRequest {
  /** Required. The name of the CustomDimension to get. Example format: properties/1234/customDimensions/5678 */
  name: string;
}

export const GetPropertiesCustomDimensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetPropertiesCustomDimensionsRequest>;

export type GetPropertiesCustomDimensionsResponse =
  GoogleAnalyticsAdminV1betaCustomDimension;
export const GetPropertiesCustomDimensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaCustomDimension;

export type GetPropertiesCustomDimensionsError = DefaultErrors;

/** Lookup for a single CustomDimension. */
export const getPropertiesCustomDimensions: API.OperationMethod<
  GetPropertiesCustomDimensionsRequest,
  GetPropertiesCustomDimensionsResponse,
  GetPropertiesCustomDimensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPropertiesCustomDimensionsRequest,
  output: GetPropertiesCustomDimensionsResponse,
  errors: [],
}));

export interface CreatePropertiesCustomDimensionsRequest {
  /** Required. Example format: properties/1234 */
  parent: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaCustomDimension;
}

export const CreatePropertiesCustomDimensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleAnalyticsAdminV1betaCustomDimension).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{parent}/customDimensions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreatePropertiesCustomDimensionsRequest>;

export type CreatePropertiesCustomDimensionsResponse =
  GoogleAnalyticsAdminV1betaCustomDimension;
export const CreatePropertiesCustomDimensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaCustomDimension;

export type CreatePropertiesCustomDimensionsError = DefaultErrors;

/** Creates a CustomDimension. */
export const createPropertiesCustomDimensions: API.OperationMethod<
  CreatePropertiesCustomDimensionsRequest,
  CreatePropertiesCustomDimensionsResponse,
  CreatePropertiesCustomDimensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePropertiesCustomDimensionsRequest,
  output: CreatePropertiesCustomDimensionsResponse,
  errors: [],
}));

export interface ListPropertiesGoogleAdsLinksRequest {
  /** Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. Example format: properties/1234 */
  parent: string;
}

export const ListPropertiesGoogleAdsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{parent}/googleAdsLinks" }),
    svc,
  ) as unknown as Schema.Schema<ListPropertiesGoogleAdsLinksRequest>;

export type ListPropertiesGoogleAdsLinksResponse =
  GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse;
export const ListPropertiesGoogleAdsLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse;

export type ListPropertiesGoogleAdsLinksError = DefaultErrors;

/** Lists GoogleAdsLinks on a property. */
export const listPropertiesGoogleAdsLinks: API.PaginatedOperationMethod<
  ListPropertiesGoogleAdsLinksRequest,
  ListPropertiesGoogleAdsLinksResponse,
  ListPropertiesGoogleAdsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPropertiesGoogleAdsLinksRequest,
  output: ListPropertiesGoogleAdsLinksResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreatePropertiesGoogleAdsLinksRequest {
  /** Required. Example format: properties/1234 */
  parent: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaGoogleAdsLink;
}

export const CreatePropertiesGoogleAdsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleAnalyticsAdminV1betaGoogleAdsLink).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{parent}/googleAdsLinks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreatePropertiesGoogleAdsLinksRequest>;

export type CreatePropertiesGoogleAdsLinksResponse =
  GoogleAnalyticsAdminV1betaGoogleAdsLink;
export const CreatePropertiesGoogleAdsLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaGoogleAdsLink;

export type CreatePropertiesGoogleAdsLinksError = DefaultErrors;

/** Creates a GoogleAdsLink. */
export const createPropertiesGoogleAdsLinks: API.OperationMethod<
  CreatePropertiesGoogleAdsLinksRequest,
  CreatePropertiesGoogleAdsLinksResponse,
  CreatePropertiesGoogleAdsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePropertiesGoogleAdsLinksRequest,
  output: CreatePropertiesGoogleAdsLinksResponse,
  errors: [],
}));

export interface PatchPropertiesGoogleAdsLinksRequest {
  /** Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. */
  updateMask?: string;
  /** Identifier. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID. */
  name: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaGoogleAdsLink;
}

export const PatchPropertiesGoogleAdsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleAnalyticsAdminV1betaGoogleAdsLink).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchPropertiesGoogleAdsLinksRequest>;

export type PatchPropertiesGoogleAdsLinksResponse =
  GoogleAnalyticsAdminV1betaGoogleAdsLink;
export const PatchPropertiesGoogleAdsLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaGoogleAdsLink;

export type PatchPropertiesGoogleAdsLinksError = DefaultErrors;

/** Updates a GoogleAdsLink on a property */
export const patchPropertiesGoogleAdsLinks: API.OperationMethod<
  PatchPropertiesGoogleAdsLinksRequest,
  PatchPropertiesGoogleAdsLinksResponse,
  PatchPropertiesGoogleAdsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPropertiesGoogleAdsLinksRequest,
  output: PatchPropertiesGoogleAdsLinksResponse,
  errors: [],
}));

export interface DeletePropertiesGoogleAdsLinksRequest {
  /** Required. Example format: properties/1234/googleAdsLinks/5678 */
  name: string;
}

export const DeletePropertiesGoogleAdsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeletePropertiesGoogleAdsLinksRequest>;

export type DeletePropertiesGoogleAdsLinksResponse = GoogleProtobufEmpty;
export const DeletePropertiesGoogleAdsLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeletePropertiesGoogleAdsLinksError = DefaultErrors;

/** Deletes a GoogleAdsLink on a property */
export const deletePropertiesGoogleAdsLinks: API.OperationMethod<
  DeletePropertiesGoogleAdsLinksRequest,
  DeletePropertiesGoogleAdsLinksResponse,
  DeletePropertiesGoogleAdsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePropertiesGoogleAdsLinksRequest,
  output: DeletePropertiesGoogleAdsLinksResponse,
  errors: [],
}));

export interface PatchPropertiesConversionEventsRequest {
  /** Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. */
  updateMask?: string;
  /** Identifier. Resource name of this conversion event. Format: properties/{property}/conversionEvents/{conversion_event} */
  name: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaConversionEvent;
}

export const PatchPropertiesConversionEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleAnalyticsAdminV1betaConversionEvent).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchPropertiesConversionEventsRequest>;

export type PatchPropertiesConversionEventsResponse =
  GoogleAnalyticsAdminV1betaConversionEvent;
export const PatchPropertiesConversionEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaConversionEvent;

export type PatchPropertiesConversionEventsError = DefaultErrors;

/** Deprecated: Use `UpdateKeyEvent` instead. Updates a conversion event with the specified attributes. */
export const patchPropertiesConversionEvents: API.OperationMethod<
  PatchPropertiesConversionEventsRequest,
  PatchPropertiesConversionEventsResponse,
  PatchPropertiesConversionEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPropertiesConversionEventsRequest,
  output: PatchPropertiesConversionEventsResponse,
  errors: [],
}));

export interface GetPropertiesConversionEventsRequest {
  /** Required. The resource name of the conversion event to retrieve. Format: properties/{property}/conversionEvents/{conversion_event} Example: "properties/123/conversionEvents/456" */
  name: string;
}

export const GetPropertiesConversionEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetPropertiesConversionEventsRequest>;

export type GetPropertiesConversionEventsResponse =
  GoogleAnalyticsAdminV1betaConversionEvent;
export const GetPropertiesConversionEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaConversionEvent;

export type GetPropertiesConversionEventsError = DefaultErrors;

/** Deprecated: Use `GetKeyEvent` instead. Retrieve a single conversion event. */
export const getPropertiesConversionEvents: API.OperationMethod<
  GetPropertiesConversionEventsRequest,
  GetPropertiesConversionEventsResponse,
  GetPropertiesConversionEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPropertiesConversionEventsRequest,
  output: GetPropertiesConversionEventsResponse,
  errors: [],
}));

export interface DeletePropertiesConversionEventsRequest {
  /** Required. The resource name of the conversion event to delete. Format: properties/{property}/conversionEvents/{conversion_event} Example: "properties/123/conversionEvents/456" */
  name: string;
}

export const DeletePropertiesConversionEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeletePropertiesConversionEventsRequest>;

export type DeletePropertiesConversionEventsResponse = GoogleProtobufEmpty;
export const DeletePropertiesConversionEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeletePropertiesConversionEventsError = DefaultErrors;

/** Deprecated: Use `DeleteKeyEvent` instead. Deletes a conversion event in a property. */
export const deletePropertiesConversionEvents: API.OperationMethod<
  DeletePropertiesConversionEventsRequest,
  DeletePropertiesConversionEventsResponse,
  DeletePropertiesConversionEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePropertiesConversionEventsRequest,
  output: DeletePropertiesConversionEventsResponse,
  errors: [],
}));

export interface ListPropertiesConversionEventsRequest {
  /** Required. The resource name of the parent property. Example: 'properties/123' */
  parent: string;
  /** Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListPropertiesConversionEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{parent}/conversionEvents" }),
    svc,
  ) as unknown as Schema.Schema<ListPropertiesConversionEventsRequest>;

export type ListPropertiesConversionEventsResponse =
  GoogleAnalyticsAdminV1betaListConversionEventsResponse;
export const ListPropertiesConversionEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaListConversionEventsResponse;

export type ListPropertiesConversionEventsError = DefaultErrors;

/** Deprecated: Use `ListKeyEvents` instead. Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found. */
export const listPropertiesConversionEvents: API.PaginatedOperationMethod<
  ListPropertiesConversionEventsRequest,
  ListPropertiesConversionEventsResponse,
  ListPropertiesConversionEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPropertiesConversionEventsRequest,
  output: ListPropertiesConversionEventsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreatePropertiesConversionEventsRequest {
  /** Required. The resource name of the parent property where this conversion event will be created. Format: properties/123 */
  parent: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaConversionEvent;
}

export const CreatePropertiesConversionEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleAnalyticsAdminV1betaConversionEvent).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{parent}/conversionEvents",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreatePropertiesConversionEventsRequest>;

export type CreatePropertiesConversionEventsResponse =
  GoogleAnalyticsAdminV1betaConversionEvent;
export const CreatePropertiesConversionEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaConversionEvent;

export type CreatePropertiesConversionEventsError = DefaultErrors;

/** Deprecated: Use `CreateKeyEvent` instead. Creates a conversion event with the specified attributes. */
export const createPropertiesConversionEvents: API.OperationMethod<
  CreatePropertiesConversionEventsRequest,
  CreatePropertiesConversionEventsResponse,
  CreatePropertiesConversionEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePropertiesConversionEventsRequest,
  output: CreatePropertiesConversionEventsResponse,
  errors: [],
}));

export interface ListPropertiesFirebaseLinksRequest {
  /** Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFirebaseLinks` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. Format: properties/{property_id} Example: `properties/1234` */
  parent: string;
}

export const ListPropertiesFirebaseLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{parent}/firebaseLinks" }),
    svc,
  ) as unknown as Schema.Schema<ListPropertiesFirebaseLinksRequest>;

export type ListPropertiesFirebaseLinksResponse =
  GoogleAnalyticsAdminV1betaListFirebaseLinksResponse;
export const ListPropertiesFirebaseLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaListFirebaseLinksResponse;

export type ListPropertiesFirebaseLinksError = DefaultErrors;

/** Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink. */
export const listPropertiesFirebaseLinks: API.PaginatedOperationMethod<
  ListPropertiesFirebaseLinksRequest,
  ListPropertiesFirebaseLinksResponse,
  ListPropertiesFirebaseLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPropertiesFirebaseLinksRequest,
  output: ListPropertiesFirebaseLinksResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreatePropertiesFirebaseLinksRequest {
  /** Required. Format: properties/{property_id} Example: `properties/1234` */
  parent: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaFirebaseLink;
}

export const CreatePropertiesFirebaseLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleAnalyticsAdminV1betaFirebaseLink).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{parent}/firebaseLinks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreatePropertiesFirebaseLinksRequest>;

export type CreatePropertiesFirebaseLinksResponse =
  GoogleAnalyticsAdminV1betaFirebaseLink;
export const CreatePropertiesFirebaseLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaFirebaseLink;

export type CreatePropertiesFirebaseLinksError = DefaultErrors;

/** Creates a FirebaseLink. Properties can have at most one FirebaseLink. */
export const createPropertiesFirebaseLinks: API.OperationMethod<
  CreatePropertiesFirebaseLinksRequest,
  CreatePropertiesFirebaseLinksResponse,
  CreatePropertiesFirebaseLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePropertiesFirebaseLinksRequest,
  output: CreatePropertiesFirebaseLinksResponse,
  errors: [],
}));

export interface DeletePropertiesFirebaseLinksRequest {
  /** Required. Format: properties/{property_id}/firebaseLinks/{firebase_link_id} Example: `properties/1234/firebaseLinks/5678` */
  name: string;
}

export const DeletePropertiesFirebaseLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeletePropertiesFirebaseLinksRequest>;

export type DeletePropertiesFirebaseLinksResponse = GoogleProtobufEmpty;
export const DeletePropertiesFirebaseLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeletePropertiesFirebaseLinksError = DefaultErrors;

/** Deletes a FirebaseLink on a property */
export const deletePropertiesFirebaseLinks: API.OperationMethod<
  DeletePropertiesFirebaseLinksRequest,
  DeletePropertiesFirebaseLinksResponse,
  DeletePropertiesFirebaseLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePropertiesFirebaseLinksRequest,
  output: DeletePropertiesFirebaseLinksResponse,
  errors: [],
}));

export interface CreatePropertiesCustomMetricsRequest {
  /** Required. Example format: properties/1234 */
  parent: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaCustomMetric;
}

export const CreatePropertiesCustomMetricsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleAnalyticsAdminV1betaCustomMetric).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{parent}/customMetrics",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreatePropertiesCustomMetricsRequest>;

export type CreatePropertiesCustomMetricsResponse =
  GoogleAnalyticsAdminV1betaCustomMetric;
export const CreatePropertiesCustomMetricsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaCustomMetric;

export type CreatePropertiesCustomMetricsError = DefaultErrors;

/** Creates a CustomMetric. */
export const createPropertiesCustomMetrics: API.OperationMethod<
  CreatePropertiesCustomMetricsRequest,
  CreatePropertiesCustomMetricsResponse,
  CreatePropertiesCustomMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePropertiesCustomMetricsRequest,
  output: CreatePropertiesCustomMetricsResponse,
  errors: [],
}));

export interface PatchPropertiesCustomMetricsRequest {
  /** Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. */
  updateMask?: string;
  /** Identifier. Resource name for this CustomMetric resource. Format: properties/{property}/customMetrics/{customMetric} */
  name: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaCustomMetric;
}

export const PatchPropertiesCustomMetricsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleAnalyticsAdminV1betaCustomMetric).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchPropertiesCustomMetricsRequest>;

export type PatchPropertiesCustomMetricsResponse =
  GoogleAnalyticsAdminV1betaCustomMetric;
export const PatchPropertiesCustomMetricsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaCustomMetric;

export type PatchPropertiesCustomMetricsError = DefaultErrors;

/** Updates a CustomMetric on a property. */
export const patchPropertiesCustomMetrics: API.OperationMethod<
  PatchPropertiesCustomMetricsRequest,
  PatchPropertiesCustomMetricsResponse,
  PatchPropertiesCustomMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPropertiesCustomMetricsRequest,
  output: PatchPropertiesCustomMetricsResponse,
  errors: [],
}));

export interface GetPropertiesCustomMetricsRequest {
  /** Required. The name of the CustomMetric to get. Example format: properties/1234/customMetrics/5678 */
  name: string;
}

export const GetPropertiesCustomMetricsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetPropertiesCustomMetricsRequest>;

export type GetPropertiesCustomMetricsResponse =
  GoogleAnalyticsAdminV1betaCustomMetric;
export const GetPropertiesCustomMetricsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaCustomMetric;

export type GetPropertiesCustomMetricsError = DefaultErrors;

/** Lookup for a single CustomMetric. */
export const getPropertiesCustomMetrics: API.OperationMethod<
  GetPropertiesCustomMetricsRequest,
  GetPropertiesCustomMetricsResponse,
  GetPropertiesCustomMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPropertiesCustomMetricsRequest,
  output: GetPropertiesCustomMetricsResponse,
  errors: [],
}));

export interface ListPropertiesCustomMetricsRequest {
  /** Required. Example format: properties/1234 */
  parent: string;
  /** The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). */
  pageSize?: number;
  /** A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListPropertiesCustomMetricsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{parent}/customMetrics" }),
    svc,
  ) as unknown as Schema.Schema<ListPropertiesCustomMetricsRequest>;

export type ListPropertiesCustomMetricsResponse =
  GoogleAnalyticsAdminV1betaListCustomMetricsResponse;
export const ListPropertiesCustomMetricsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaListCustomMetricsResponse;

export type ListPropertiesCustomMetricsError = DefaultErrors;

/** Lists CustomMetrics on a property. */
export const listPropertiesCustomMetrics: API.PaginatedOperationMethod<
  ListPropertiesCustomMetricsRequest,
  ListPropertiesCustomMetricsResponse,
  ListPropertiesCustomMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPropertiesCustomMetricsRequest,
  output: ListPropertiesCustomMetricsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ArchivePropertiesCustomMetricsRequest {
  /** Required. The name of the CustomMetric to archive. Example format: properties/1234/customMetrics/5678 */
  name: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaArchiveCustomMetricRequest;
}

export const ArchivePropertiesCustomMetricsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleAnalyticsAdminV1betaArchiveCustomMetricRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{name}:archive", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ArchivePropertiesCustomMetricsRequest>;

export type ArchivePropertiesCustomMetricsResponse = GoogleProtobufEmpty;
export const ArchivePropertiesCustomMetricsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type ArchivePropertiesCustomMetricsError = DefaultErrors;

/** Archives a CustomMetric on a property. */
export const archivePropertiesCustomMetrics: API.OperationMethod<
  ArchivePropertiesCustomMetricsRequest,
  ArchivePropertiesCustomMetricsResponse,
  ArchivePropertiesCustomMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ArchivePropertiesCustomMetricsRequest,
  output: ArchivePropertiesCustomMetricsResponse,
  errors: [],
}));

export interface PatchPropertiesDataStreamsRequest {
  /** Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. */
  updateMask?: string;
  /** Identifier. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example: "properties/1000/dataStreams/2000" */
  name: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaDataStream;
}

export const PatchPropertiesDataStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleAnalyticsAdminV1betaDataStream).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchPropertiesDataStreamsRequest>;

export type PatchPropertiesDataStreamsResponse =
  GoogleAnalyticsAdminV1betaDataStream;
export const PatchPropertiesDataStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaDataStream;

export type PatchPropertiesDataStreamsError = DefaultErrors;

/** Updates a DataStream on a property. */
export const patchPropertiesDataStreams: API.OperationMethod<
  PatchPropertiesDataStreamsRequest,
  PatchPropertiesDataStreamsResponse,
  PatchPropertiesDataStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPropertiesDataStreamsRequest,
  output: PatchPropertiesDataStreamsResponse,
  errors: [],
}));

export interface GetPropertiesDataStreamsRequest {
  /** Required. The name of the DataStream to get. Example format: properties/1234/dataStreams/5678 */
  name: string;
}

export const GetPropertiesDataStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetPropertiesDataStreamsRequest>;

export type GetPropertiesDataStreamsResponse =
  GoogleAnalyticsAdminV1betaDataStream;
export const GetPropertiesDataStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaDataStream;

export type GetPropertiesDataStreamsError = DefaultErrors;

/** Lookup for a single DataStream. */
export const getPropertiesDataStreams: API.OperationMethod<
  GetPropertiesDataStreamsRequest,
  GetPropertiesDataStreamsResponse,
  GetPropertiesDataStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPropertiesDataStreamsRequest,
  output: GetPropertiesDataStreamsResponse,
  errors: [],
}));

export interface DeletePropertiesDataStreamsRequest {
  /** Required. The name of the DataStream to delete. Example format: properties/1234/dataStreams/5678 */
  name: string;
}

export const DeletePropertiesDataStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeletePropertiesDataStreamsRequest>;

export type DeletePropertiesDataStreamsResponse = GoogleProtobufEmpty;
export const DeletePropertiesDataStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeletePropertiesDataStreamsError = DefaultErrors;

/** Deletes a DataStream on a property. */
export const deletePropertiesDataStreams: API.OperationMethod<
  DeletePropertiesDataStreamsRequest,
  DeletePropertiesDataStreamsResponse,
  DeletePropertiesDataStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePropertiesDataStreamsRequest,
  output: DeletePropertiesDataStreamsResponse,
  errors: [],
}));

export interface ListPropertiesDataStreamsRequest {
  /** Required. Example format: properties/1234 */
  parent: string;
  /** A page token, received from a previous `ListDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataStreams` must match the call that provided the page token. */
  pageToken?: string;
  /** The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). */
  pageSize?: number;
}

export const ListPropertiesDataStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{parent}/dataStreams" }),
    svc,
  ) as unknown as Schema.Schema<ListPropertiesDataStreamsRequest>;

export type ListPropertiesDataStreamsResponse =
  GoogleAnalyticsAdminV1betaListDataStreamsResponse;
export const ListPropertiesDataStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaListDataStreamsResponse;

export type ListPropertiesDataStreamsError = DefaultErrors;

/** Lists DataStreams on a property. */
export const listPropertiesDataStreams: API.PaginatedOperationMethod<
  ListPropertiesDataStreamsRequest,
  ListPropertiesDataStreamsResponse,
  ListPropertiesDataStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPropertiesDataStreamsRequest,
  output: ListPropertiesDataStreamsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreatePropertiesDataStreamsRequest {
  /** Required. Example format: properties/1234 */
  parent: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaDataStream;
}

export const CreatePropertiesDataStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleAnalyticsAdminV1betaDataStream).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{parent}/dataStreams",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreatePropertiesDataStreamsRequest>;

export type CreatePropertiesDataStreamsResponse =
  GoogleAnalyticsAdminV1betaDataStream;
export const CreatePropertiesDataStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaDataStream;

export type CreatePropertiesDataStreamsError = DefaultErrors;

/** Creates a DataStream. */
export const createPropertiesDataStreams: API.OperationMethod<
  CreatePropertiesDataStreamsRequest,
  CreatePropertiesDataStreamsResponse,
  CreatePropertiesDataStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePropertiesDataStreamsRequest,
  output: CreatePropertiesDataStreamsResponse,
  errors: [],
}));

export interface CreatePropertiesDataStreamsMeasurementProtocolSecretsRequest {
  /** Required. The parent resource where this secret will be created. Format: properties/{property}/dataStreams/{dataStream} */
  parent: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;
}

export const CreatePropertiesDataStreamsMeasurementProtocolSecretsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleAnalyticsAdminV1betaMeasurementProtocolSecret,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{parent}/measurementProtocolSecrets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreatePropertiesDataStreamsMeasurementProtocolSecretsRequest>;

export type CreatePropertiesDataStreamsMeasurementProtocolSecretsResponse =
  GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;
export const CreatePropertiesDataStreamsMeasurementProtocolSecretsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;

export type CreatePropertiesDataStreamsMeasurementProtocolSecretsError =
  DefaultErrors;

/** Creates a measurement protocol secret. */
export const createPropertiesDataStreamsMeasurementProtocolSecrets: API.OperationMethod<
  CreatePropertiesDataStreamsMeasurementProtocolSecretsRequest,
  CreatePropertiesDataStreamsMeasurementProtocolSecretsResponse,
  CreatePropertiesDataStreamsMeasurementProtocolSecretsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePropertiesDataStreamsMeasurementProtocolSecretsRequest,
  output: CreatePropertiesDataStreamsMeasurementProtocolSecretsResponse,
  errors: [],
}));

export interface ListPropertiesDataStreamsMeasurementProtocolSecretsRequest {
  /** Optional. A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum. */
  pageSize?: number;
  /** Required. The resource name of the parent stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets */
  parent: string;
}

export const ListPropertiesDataStreamsMeasurementProtocolSecretsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta/{parent}/measurementProtocolSecrets",
    }),
    svc,
  ) as unknown as Schema.Schema<ListPropertiesDataStreamsMeasurementProtocolSecretsRequest>;

export type ListPropertiesDataStreamsMeasurementProtocolSecretsResponse =
  GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse;
export const ListPropertiesDataStreamsMeasurementProtocolSecretsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse;

export type ListPropertiesDataStreamsMeasurementProtocolSecretsError =
  DefaultErrors;

/** Returns child MeasurementProtocolSecrets under the specified parent Property. */
export const listPropertiesDataStreamsMeasurementProtocolSecrets: API.PaginatedOperationMethod<
  ListPropertiesDataStreamsMeasurementProtocolSecretsRequest,
  ListPropertiesDataStreamsMeasurementProtocolSecretsResponse,
  ListPropertiesDataStreamsMeasurementProtocolSecretsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPropertiesDataStreamsMeasurementProtocolSecretsRequest,
  output: ListPropertiesDataStreamsMeasurementProtocolSecretsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetPropertiesDataStreamsMeasurementProtocolSecretsRequest {
  /** Required. The name of the measurement protocol secret to lookup. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret} */
  name: string;
}

export const GetPropertiesDataStreamsMeasurementProtocolSecretsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetPropertiesDataStreamsMeasurementProtocolSecretsRequest>;

export type GetPropertiesDataStreamsMeasurementProtocolSecretsResponse =
  GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;
export const GetPropertiesDataStreamsMeasurementProtocolSecretsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;

export type GetPropertiesDataStreamsMeasurementProtocolSecretsError =
  DefaultErrors;

/** Lookup for a single MeasurementProtocolSecret. */
export const getPropertiesDataStreamsMeasurementProtocolSecrets: API.OperationMethod<
  GetPropertiesDataStreamsMeasurementProtocolSecretsRequest,
  GetPropertiesDataStreamsMeasurementProtocolSecretsResponse,
  GetPropertiesDataStreamsMeasurementProtocolSecretsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPropertiesDataStreamsMeasurementProtocolSecretsRequest,
  output: GetPropertiesDataStreamsMeasurementProtocolSecretsResponse,
  errors: [],
}));

export interface PatchPropertiesDataStreamsMeasurementProtocolSecretsRequest {
  /** Identifier. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret} */
  name: string;
  /** Required. The list of fields to be updated. Omitted fields will not be updated. */
  updateMask?: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;
}

export const PatchPropertiesDataStreamsMeasurementProtocolSecretsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(
      GoogleAnalyticsAdminV1betaMeasurementProtocolSecret,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchPropertiesDataStreamsMeasurementProtocolSecretsRequest>;

export type PatchPropertiesDataStreamsMeasurementProtocolSecretsResponse =
  GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;
export const PatchPropertiesDataStreamsMeasurementProtocolSecretsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;

export type PatchPropertiesDataStreamsMeasurementProtocolSecretsError =
  DefaultErrors;

/** Updates a measurement protocol secret. */
export const patchPropertiesDataStreamsMeasurementProtocolSecrets: API.OperationMethod<
  PatchPropertiesDataStreamsMeasurementProtocolSecretsRequest,
  PatchPropertiesDataStreamsMeasurementProtocolSecretsResponse,
  PatchPropertiesDataStreamsMeasurementProtocolSecretsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPropertiesDataStreamsMeasurementProtocolSecretsRequest,
  output: PatchPropertiesDataStreamsMeasurementProtocolSecretsResponse,
  errors: [],
}));

export interface DeletePropertiesDataStreamsMeasurementProtocolSecretsRequest {
  /** Required. The name of the MeasurementProtocolSecret to delete. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret} */
  name: string;
}

export const DeletePropertiesDataStreamsMeasurementProtocolSecretsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeletePropertiesDataStreamsMeasurementProtocolSecretsRequest>;

export type DeletePropertiesDataStreamsMeasurementProtocolSecretsResponse =
  GoogleProtobufEmpty;
export const DeletePropertiesDataStreamsMeasurementProtocolSecretsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeletePropertiesDataStreamsMeasurementProtocolSecretsError =
  DefaultErrors;

/** Deletes target MeasurementProtocolSecret. */
export const deletePropertiesDataStreamsMeasurementProtocolSecrets: API.OperationMethod<
  DeletePropertiesDataStreamsMeasurementProtocolSecretsRequest,
  DeletePropertiesDataStreamsMeasurementProtocolSecretsResponse,
  DeletePropertiesDataStreamsMeasurementProtocolSecretsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePropertiesDataStreamsMeasurementProtocolSecretsRequest,
  output: DeletePropertiesDataStreamsMeasurementProtocolSecretsResponse,
  errors: [],
}));

export interface PatchPropertiesKeyEventsRequest {
  /** Output only. Resource name of this key event. Format: properties/{property}/keyEvents/{key_event} */
  name: string;
  /** Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. */
  updateMask?: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaKeyEvent;
}

export const PatchPropertiesKeyEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleAnalyticsAdminV1betaKeyEvent).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchPropertiesKeyEventsRequest>;

export type PatchPropertiesKeyEventsResponse =
  GoogleAnalyticsAdminV1betaKeyEvent;
export const PatchPropertiesKeyEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaKeyEvent;

export type PatchPropertiesKeyEventsError = DefaultErrors;

/** Updates a Key Event. */
export const patchPropertiesKeyEvents: API.OperationMethod<
  PatchPropertiesKeyEventsRequest,
  PatchPropertiesKeyEventsResponse,
  PatchPropertiesKeyEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPropertiesKeyEventsRequest,
  output: PatchPropertiesKeyEventsResponse,
  errors: [],
}));

export interface GetPropertiesKeyEventsRequest {
  /** Required. The resource name of the Key Event to retrieve. Format: properties/{property}/keyEvents/{key_event} Example: "properties/123/keyEvents/456" */
  name: string;
}

export const GetPropertiesKeyEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetPropertiesKeyEventsRequest>;

export type GetPropertiesKeyEventsResponse = GoogleAnalyticsAdminV1betaKeyEvent;
export const GetPropertiesKeyEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaKeyEvent;

export type GetPropertiesKeyEventsError = DefaultErrors;

/** Retrieve a single Key Event. */
export const getPropertiesKeyEvents: API.OperationMethod<
  GetPropertiesKeyEventsRequest,
  GetPropertiesKeyEventsResponse,
  GetPropertiesKeyEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPropertiesKeyEventsRequest,
  output: GetPropertiesKeyEventsResponse,
  errors: [],
}));

export interface DeletePropertiesKeyEventsRequest {
  /** Required. The resource name of the Key Event to delete. Format: properties/{property}/keyEvents/{key_event} Example: "properties/123/keyEvents/456" */
  name: string;
}

export const DeletePropertiesKeyEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeletePropertiesKeyEventsRequest>;

export type DeletePropertiesKeyEventsResponse = GoogleProtobufEmpty;
export const DeletePropertiesKeyEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeletePropertiesKeyEventsError = DefaultErrors;

/** Deletes a Key Event. */
export const deletePropertiesKeyEvents: API.OperationMethod<
  DeletePropertiesKeyEventsRequest,
  DeletePropertiesKeyEventsResponse,
  DeletePropertiesKeyEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePropertiesKeyEventsRequest,
  output: DeletePropertiesKeyEventsResponse,
  errors: [],
}));

export interface ListPropertiesKeyEventsRequest {
  /** Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListKeyEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListKeyEvents` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The resource name of the parent property. Example: 'properties/123' */
  parent: string;
}

export const ListPropertiesKeyEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{parent}/keyEvents" }),
    svc,
  ) as unknown as Schema.Schema<ListPropertiesKeyEventsRequest>;

export type ListPropertiesKeyEventsResponse =
  GoogleAnalyticsAdminV1betaListKeyEventsResponse;
export const ListPropertiesKeyEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaListKeyEventsResponse;

export type ListPropertiesKeyEventsError = DefaultErrors;

/** Returns a list of Key Events in the specified parent property. Returns an empty list if no Key Events are found. */
export const listPropertiesKeyEvents: API.PaginatedOperationMethod<
  ListPropertiesKeyEventsRequest,
  ListPropertiesKeyEventsResponse,
  ListPropertiesKeyEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPropertiesKeyEventsRequest,
  output: ListPropertiesKeyEventsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreatePropertiesKeyEventsRequest {
  /** Required. The resource name of the parent property where this Key Event will be created. Format: properties/123 */
  parent: string;
  /** Request body */
  body?: GoogleAnalyticsAdminV1betaKeyEvent;
}

export const CreatePropertiesKeyEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleAnalyticsAdminV1betaKeyEvent).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{parent}/keyEvents",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreatePropertiesKeyEventsRequest>;

export type CreatePropertiesKeyEventsResponse =
  GoogleAnalyticsAdminV1betaKeyEvent;
export const CreatePropertiesKeyEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAnalyticsAdminV1betaKeyEvent;

export type CreatePropertiesKeyEventsError = DefaultErrors;

/** Creates a Key Event. */
export const createPropertiesKeyEvents: API.OperationMethod<
  CreatePropertiesKeyEventsRequest,
  CreatePropertiesKeyEventsResponse,
  CreatePropertiesKeyEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePropertiesKeyEventsRequest,
  output: CreatePropertiesKeyEventsResponse,
  errors: [],
}));
