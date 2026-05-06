// ==========================================================================
// Google Analytics API (analytics v3)
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
  name: "analytics",
  version: "v3",
  rootUrl: "https://analytics.googleapis.com/",
  servicePath: "analytics/v3/",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Segment {
  /** Link for this segment. */
  selfLink?: string;
  /** Segment definition. */
  definition?: string;
  /** Segment name. */
  name?: string;
  /** Segment ID. */
  id?: string;
  /** Time the segment was created. */
  created?: string;
  /** Time the segment was last modified. */
  updated?: string;
  /** Segment ID. Can be used with the 'segment' parameter in Core Reporting API. */
  segmentId?: string;
  /** Resource type for Analytics segment. */
  kind?: string;
  /** Type for a segment. Possible values are "BUILT_IN" or "CUSTOM". */
  type?: string;
}

export const Segment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  selfLink: Schema.optional(Schema.String),
  definition: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  created: Schema.optional(Schema.String),
  updated: Schema.optional(Schema.String),
  segmentId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "Segment" });

export interface Segments {
  /** A list of segments. */
  items?: ReadonlyArray<Segment>;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Collection type for segments. */
  kind?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** Link to next page for this segment collection. */
  nextLink?: string;
  /** Email ID of the authenticated user */
  username?: string;
  /** Link to previous page for this segment collection. */
  previousLink?: string;
}

export const Segments = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.optional(Schema.Array(Segment)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  nextLink: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  previousLink: Schema.optional(Schema.String),
}).annotate({ identifier: "Segments" });

export interface ProfileSummary {
  /** View (profile) name. */
  name?: string;
  /** Resource type for Analytics ProfileSummary. */
  kind?: string;
  /** Indicates whether this view (profile) is starred or not. */
  starred?: boolean;
  /** View (Profile) type. Supported types: WEB or APP. */
  type?: string;
  /** View (profile) ID. */
  id?: string;
}

export const ProfileSummary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  starred: Schema.optional(Schema.Boolean),
  type: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "ProfileSummary" });

export interface WebPropertySummary {
  /** List of profiles under this web property. */
  profiles?: ReadonlyArray<ProfileSummary>;
  /** Web property name. */
  name?: string;
  /** Web property ID of the form UA-XXXXX-YY. */
  id?: string;
  /** Resource type for Analytics WebPropertySummary. */
  kind?: string;
  /** Level for this web property. Possible values are STANDARD or PREMIUM. */
  level?: string;
  /** Indicates whether this web property is starred or not. */
  starred?: boolean;
  /** Internal ID for this web property. */
  internalWebPropertyId?: string;
  /** Website url for this web property. */
  websiteUrl?: string;
}

export const WebPropertySummary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profiles: Schema.optional(Schema.Array(ProfileSummary)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  level: Schema.optional(Schema.String),
  starred: Schema.optional(Schema.Boolean),
  internalWebPropertyId: Schema.optional(Schema.String),
  websiteUrl: Schema.optional(Schema.String),
}).annotate({ identifier: "WebPropertySummary" });

export interface AccountSummary {
  /** Account name. */
  name?: string;
  /** Resource type for Analytics AccountSummary. */
  kind?: string;
  /** Indicates whether this account is starred or not. */
  starred?: boolean;
  /** List of web properties under this account. */
  webProperties?: ReadonlyArray<WebPropertySummary>;
  /** Account ID. */
  id?: string;
}

export const AccountSummary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  starred: Schema.optional(Schema.Boolean),
  webProperties: Schema.optional(Schema.Array(WebPropertySummary)),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "AccountSummary" });

export interface AccountSummaries {
  /** Link to previous page for this AccountSummary collection. */
  previousLink?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** Link to next page for this AccountSummary collection. */
  nextLink?: string;
  /** Email ID of the authenticated user */
  username?: string;
  /** A list of AccountSummaries. */
  items?: ReadonlyArray<AccountSummary>;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Collection type. */
  kind?: string;
}

export const AccountSummaries = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  previousLink: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  nextLink: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(AccountSummary)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "AccountSummaries" });

export interface FilterExpression {
  /** Match type for this filter. Possible values are BEGINS_WITH, EQUAL, ENDS_WITH, CONTAINS, or MATCHES. GEO_DOMAIN, GEO_IP_ADDRESS, PAGE_REQUEST_URI, or PAGE_HOSTNAME filters can use any match type; all other filters must use MATCHES. */
  matchType?: string;
  /** Field to filter. Possible values: - Content and Traffic - PAGE_REQUEST_URI, - PAGE_HOSTNAME, - PAGE_TITLE, - REFERRAL, - COST_DATA_URI (Campaign target URL), - HIT_TYPE, - INTERNAL_SEARCH_TERM, - INTERNAL_SEARCH_TYPE, - SOURCE_PROPERTY_TRACKING_ID, - Campaign or AdGroup - CAMPAIGN_SOURCE, - CAMPAIGN_MEDIUM, - CAMPAIGN_NAME, - CAMPAIGN_AD_GROUP, - CAMPAIGN_TERM, - CAMPAIGN_CONTENT, - CAMPAIGN_CODE, - CAMPAIGN_REFERRAL_PATH, - E-Commerce - TRANSACTION_COUNTRY, - TRANSACTION_REGION, - TRANSACTION_CITY, - TRANSACTION_AFFILIATION (Store or order location), - ITEM_NAME, - ITEM_CODE, - ITEM_VARIATION, - TRANSACTION_ID, - TRANSACTION_CURRENCY_CODE, - PRODUCT_ACTION_TYPE, - Audience/Users - BROWSER, - BROWSER_VERSION, - BROWSER_SIZE, - PLATFORM, - PLATFORM_VERSION, - LANGUAGE, - SCREEN_RESOLUTION, - SCREEN_COLORS, - JAVA_ENABLED (Boolean Field), - FLASH_VERSION, - GEO_SPEED (Connection speed), - VISITOR_TYPE, - GEO_ORGANIZATION (ISP organization), - GEO_DOMAIN, - GEO_IP_ADDRESS, - GEO_IP_VERSION, - Location - GEO_COUNTRY, - GEO_REGION, - GEO_CITY, - Event - EVENT_CATEGORY, - EVENT_ACTION, - EVENT_LABEL, - Other - CUSTOM_FIELD_1, - CUSTOM_FIELD_2, - USER_DEFINED_VALUE, - Application - APP_ID, - APP_INSTALLER_ID, - APP_NAME, - APP_VERSION, - SCREEN, - IS_APP (Boolean Field), - IS_FATAL_EXCEPTION (Boolean Field), - EXCEPTION_DESCRIPTION, - Mobile device - IS_MOBILE (Boolean Field, Deprecated. Use DEVICE_CATEGORY=mobile), - IS_TABLET (Boolean Field, Deprecated. Use DEVICE_CATEGORY=tablet), - DEVICE_CATEGORY, - MOBILE_HAS_QWERTY_KEYBOARD (Boolean Field), - MOBILE_HAS_NFC_SUPPORT (Boolean Field), - MOBILE_HAS_CELLULAR_RADIO (Boolean Field), - MOBILE_HAS_WIFI_SUPPORT (Boolean Field), - MOBILE_BRAND_NAME, - MOBILE_MODEL_NAME, - MOBILE_MARKETING_NAME, - MOBILE_POINTING_METHOD, - Social - SOCIAL_NETWORK, - SOCIAL_ACTION, - SOCIAL_ACTION_TARGET, - Custom dimension - CUSTOM_DIMENSION (See accompanying field index), */
  field?: string;
  /** The Index of the custom dimension. Set only if the field is a is CUSTOM_DIMENSION. */
  fieldIndex?: number;
  /** Determines if the filter is case sensitive. */
  caseSensitive?: boolean;
  /** Kind value for filter expression */
  kind?: string;
  /** Filter expression value */
  expressionValue?: string;
}

export const FilterExpression = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  matchType: Schema.optional(Schema.String),
  field: Schema.optional(Schema.String),
  fieldIndex: Schema.optional(Schema.Number),
  caseSensitive: Schema.optional(Schema.Boolean),
  kind: Schema.optional(Schema.String),
  expressionValue: Schema.optional(Schema.String),
}).annotate({ identifier: "FilterExpression" });

export interface Filter {
  /** Details for the filter of the type UPPER. */
  uppercaseDetails?: { field?: string; fieldIndex?: number };
  /** Link for this filter. */
  selfLink?: string;
  /** Name of this filter. */
  name?: string;
  /** Details for the filter of the type INCLUDE. */
  includeDetails?: FilterExpression;
  /** Filter ID. */
  id?: string;
  /** Account ID to which this filter belongs. */
  accountId?: string;
  /** Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED. */
  type?: string;
  /** Parent link for this filter. Points to the account to which this filter belongs. */
  parentLink?: { href?: string; type?: string };
  /** Details for the filter of the type ADVANCED. */
  advancedDetails?: {
    fieldB?: string;
    outputConstructor?: string;
    outputToFieldIndex?: number;
    fieldARequired?: boolean;
    fieldA?: string;
    fieldBIndex?: number;
    caseSensitive?: boolean;
    extractA?: string;
    overrideOutputField?: boolean;
    extractB?: string;
    fieldAIndex?: number;
    outputToField?: string;
    fieldBRequired?: boolean;
  };
  /** Details for the filter of the type LOWER. */
  lowercaseDetails?: { field?: string; fieldIndex?: number };
  /** Time this filter was created. */
  created?: string;
  /** Time this filter was last modified. */
  updated?: string;
  /** Details for the filter of the type EXCLUDE. */
  excludeDetails?: FilterExpression;
  /** Resource type for Analytics filter. */
  kind?: string;
  /** Details for the filter of the type SEARCH_AND_REPLACE. */
  searchAndReplaceDetails?: {
    caseSensitive?: boolean;
    replaceString?: string;
    field?: string;
    fieldIndex?: number;
    searchString?: string;
  };
}

export const Filter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uppercaseDetails: Schema.optional(
    Schema.Struct({
      field: Schema.optional(Schema.String),
      fieldIndex: Schema.optional(Schema.Number),
    }),
  ),
  selfLink: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  includeDetails: Schema.optional(FilterExpression),
  id: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  parentLink: Schema.optional(
    Schema.Struct({
      href: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
    }),
  ),
  advancedDetails: Schema.optional(
    Schema.Struct({
      fieldB: Schema.optional(Schema.String),
      outputConstructor: Schema.optional(Schema.String),
      outputToFieldIndex: Schema.optional(Schema.Number),
      fieldARequired: Schema.optional(Schema.Boolean),
      fieldA: Schema.optional(Schema.String),
      fieldBIndex: Schema.optional(Schema.Number),
      caseSensitive: Schema.optional(Schema.Boolean),
      extractA: Schema.optional(Schema.String),
      overrideOutputField: Schema.optional(Schema.Boolean),
      extractB: Schema.optional(Schema.String),
      fieldAIndex: Schema.optional(Schema.Number),
      outputToField: Schema.optional(Schema.String),
      fieldBRequired: Schema.optional(Schema.Boolean),
    }),
  ),
  lowercaseDetails: Schema.optional(
    Schema.Struct({
      field: Schema.optional(Schema.String),
      fieldIndex: Schema.optional(Schema.Number),
    }),
  ),
  created: Schema.optional(Schema.String),
  updated: Schema.optional(Schema.String),
  excludeDetails: Schema.optional(FilterExpression),
  kind: Schema.optional(Schema.String),
  searchAndReplaceDetails: Schema.optional(
    Schema.Struct({
      caseSensitive: Schema.optional(Schema.Boolean),
      replaceString: Schema.optional(Schema.String),
      field: Schema.optional(Schema.String),
      fieldIndex: Schema.optional(Schema.Number),
      searchString: Schema.optional(Schema.String),
    }),
  ),
}).annotate({ identifier: "Filter" });

export interface AdWordsAccount {
  /** Resource type for Google Ads account. */
  kind?: string;
  /** True if auto-tagging is enabled on the Google Ads account. Read-only after the insert operation. */
  autoTaggingEnabled?: boolean;
  /** Customer ID. This field is required when creating a Google Ads link. */
  customerId?: string;
}

export const AdWordsAccount = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  autoTaggingEnabled: Schema.optional(Schema.Boolean),
  customerId: Schema.optional(Schema.String),
}).annotate({ identifier: "AdWordsAccount" });

export interface WebPropertyRef {
  /** Link for this web property. */
  href?: string;
  /** Account ID to which this web property belongs. */
  accountId?: string;
  /** Name of this web property. */
  name?: string;
  /** Web property ID of the form UA-XXXXX-YY. */
  id?: string;
  /** Internal ID for this web property. */
  internalWebPropertyId?: string;
  /** Analytics web property reference. */
  kind?: string;
}

export const WebPropertyRef = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  href: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  internalWebPropertyId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "WebPropertyRef" });

export interface EntityAdWordsLink {
  /** A list of Google Ads client accounts. These cannot be MCC accounts. This field is required when creating a Google Ads link. It cannot be empty. */
  adWordsAccounts?: ReadonlyArray<AdWordsAccount>;
  /** Name of the link. This field is required when creating a Google Ads link. */
  name?: string;
  /** URL link for this Google Analytics - Google Ads link. */
  selfLink?: string;
  /** Web property being linked. */
  entity?: { webPropertyRef?: WebPropertyRef };
  /** Resource type for entity Google Ads link. */
  kind?: string;
  /** IDs of linked Views (Profiles) represented as strings. */
  profileIds?: ReadonlyArray<string>;
  /** Entity Google Ads link ID */
  id?: string;
}

export const EntityAdWordsLink = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  adWordsAccounts: Schema.optional(Schema.Array(AdWordsAccount)),
  name: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  entity: Schema.optional(
    Schema.Struct({ webPropertyRef: Schema.optional(WebPropertyRef) }),
  ),
  kind: Schema.optional(Schema.String),
  profileIds: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "EntityAdWordsLink" });

export interface EntityAdWordsLinks {
  /** Previous link for this Google Ads link collection. */
  previousLink?: string;
  /** A list of entity Google Ads links. */
  items?: ReadonlyArray<EntityAdWordsLink>;
  /** The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Collection type. */
  kind?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** Next link for this Google Ads link collection. */
  nextLink?: string;
}

export const EntityAdWordsLinks = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  previousLink: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(EntityAdWordsLink)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  nextLink: Schema.optional(Schema.String),
}).annotate({ identifier: "EntityAdWordsLinks" });

export interface Upload {
  /** Custom data source Id to which this data import belongs. */
  customDataSourceId?: string;
  /** Data import errors collection. */
  errors?: ReadonlyArray<string>;
  /** Account Id to which this upload belongs. */
  accountId?: string;
  /** Resource type for Analytics upload. */
  kind?: string;
  /** Time this file is uploaded. */
  uploadTime?: string;
  /** A unique ID for this upload. */
  id?: string;
  /** Upload status. Possible values: PENDING, COMPLETED, FAILED, DELETING, DELETED. */
  status?: string;
}

export const Upload = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customDataSourceId: Schema.optional(Schema.String),
  errors: Schema.optional(Schema.Array(Schema.String)),
  accountId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  uploadTime: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
}).annotate({ identifier: "Upload" });

export interface RealtimeData {
  /** Unique ID for this data response. */
  id?: string;
  /** Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request. */
  columnHeaders?: ReadonlyArray<{
    dataType?: string;
    columnType?: string;
    name?: string;
  }>;
  /** Information for the view (profile), for which the real time data was requested. */
  profileInfo?: {
    accountId?: string;
    profileName?: string;
    profileId?: string;
    tableId?: string;
    webPropertyId?: string;
    internalWebPropertyId?: string;
  };
  /** Real time data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request. */
  rows?: ReadonlyArray<ReadonlyArray<string>>;
  /** Link to this page. */
  selfLink?: string;
  /** The total number of rows for the query, regardless of the number of rows in the response. */
  totalResults?: number;
  /** Resource type. */
  kind?: string;
  /** Real time data request query parameters. */
  query?: {
    sort?: ReadonlyArray<string>;
    metrics?: ReadonlyArray<string>;
    ids?: string;
    "max-results"?: number;
    dimensions?: string;
    filters?: string;
  };
  /** Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request. */
  totalsForAllResults?: Record<string, string>;
}

export const RealtimeData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  columnHeaders: Schema.optional(
    Schema.Array(
      Schema.Struct({
        dataType: Schema.optional(Schema.String),
        columnType: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
      }),
    ),
  ),
  profileInfo: Schema.optional(
    Schema.Struct({
      accountId: Schema.optional(Schema.String),
      profileName: Schema.optional(Schema.String),
      profileId: Schema.optional(Schema.String),
      tableId: Schema.optional(Schema.String),
      webPropertyId: Schema.optional(Schema.String),
      internalWebPropertyId: Schema.optional(Schema.String),
    }),
  ),
  rows: Schema.optional(Schema.Array(Schema.Array(Schema.String))),
  selfLink: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  query: Schema.optional(
    Schema.Struct({
      sort: Schema.optional(Schema.Array(Schema.String)),
      metrics: Schema.optional(Schema.Array(Schema.String)),
      ids: Schema.optional(Schema.String),
      "max-results": Schema.optional(Schema.Number),
      dimensions: Schema.optional(Schema.String),
      filters: Schema.optional(Schema.String),
    }),
  ),
  totalsForAllResults: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
}).annotate({ identifier: "RealtimeData" });

export interface CustomDimension {
  /** Boolean indicating whether the custom dimension is active. */
  active?: boolean;
  /** Scope of the custom dimension: HIT, SESSION, USER or PRODUCT. */
  scope?: string;
  /** Index of the custom dimension. */
  index?: number;
  /** Custom dimension ID. */
  id?: string;
  /** Name of the custom dimension. */
  name?: string;
  /** Link for the custom dimension */
  selfLink?: string;
  /** Parent link for the custom dimension. Points to the property to which the custom dimension belongs. */
  parentLink?: { type?: string; href?: string };
  /** Kind value for a custom dimension. Set to "analytics#customDimension". It is a read-only field. */
  kind?: string;
  /** Property ID. */
  webPropertyId?: string;
  /** Time the custom dimension was last modified. */
  updated?: string;
  /** Account ID. */
  accountId?: string;
  /** Time the custom dimension was created. */
  created?: string;
}

export const CustomDimension = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  active: Schema.optional(Schema.Boolean),
  scope: Schema.optional(Schema.String),
  index: Schema.optional(Schema.Number),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  parentLink: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      href: Schema.optional(Schema.String),
    }),
  ),
  kind: Schema.optional(Schema.String),
  webPropertyId: Schema.optional(Schema.String),
  updated: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  created: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomDimension" });

export interface CustomDimensions {
  /** Link to previous page for this custom dimension collection. */
  previousLink?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** Link to next page for this custom dimension collection. */
  nextLink?: string;
  /** Email ID of the authenticated user */
  username?: string;
  /** Collection of custom dimensions. */
  items?: ReadonlyArray<CustomDimension>;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Collection type. */
  kind?: string;
}

export const CustomDimensions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  previousLink: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  nextLink: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(CustomDimension)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomDimensions" });

export interface FilterRef {
  /** Filter ID. */
  id?: string;
  /** Kind value for filter reference. */
  kind?: string;
  /** Link for this filter. */
  href?: string;
  /** Account ID to which this filter belongs. */
  accountId?: string;
  /** Name of this filter. */
  name?: string;
}

export const FilterRef = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  href: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "FilterRef" });

export interface ProfileRef {
  /** View (Profile) ID. */
  id?: string;
  /** Analytics view (profile) reference. */
  kind?: string;
  /** Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs. */
  webPropertyId?: string;
  /** Internal ID for the web property to which this view (profile) belongs. */
  internalWebPropertyId?: string;
  /** Account ID to which this view (profile) belongs. */
  accountId?: string;
  /** Link for this view (profile). */
  href?: string;
  /** Name of this view (profile). */
  name?: string;
}

export const ProfileRef = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  webPropertyId: Schema.optional(Schema.String),
  internalWebPropertyId: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  href: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "ProfileRef" });

export interface ProfileFilterLink {
  /** Profile filter link ID. */
  id?: string;
  /** Resource type for Analytics filter. */
  kind?: string;
  /** The rank of this profile filter link relative to the other filters linked to the same profile. For readonly (i.e., list and get) operations, the rank always starts at 1. For write (i.e., create, update, or delete) operations, you may specify a value between 0 and 255 inclusively, [0, 255]. In order to insert a link at the end of the list, either don't specify a rank or set a rank to a number greater than the largest rank in the list. In order to insert a link to the beginning of the list specify a rank that is less than or equal to 1. The new link will move all existing filters with the same or lower rank down the list. After the link is inserted/updated/deleted all profile filter links will be renumbered starting at 1. */
  rank?: number;
  /** Filter for this link. */
  filterRef?: FilterRef;
  /** Link for this profile filter link. */
  selfLink?: string;
  /** View (Profile) for this link. */
  profileRef?: ProfileRef;
}

export const ProfileFilterLink = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
  filterRef: Schema.optional(FilterRef),
  selfLink: Schema.optional(Schema.String),
  profileRef: Schema.optional(ProfileRef),
}).annotate({ identifier: "ProfileFilterLink" });

export interface ProfileFilterLinks {
  /** Link to next page for this profile filter link collection. */
  nextLink?: string;
  /** Email ID of the authenticated user */
  username?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** Collection type. */
  kind?: string;
  /** A list of profile filter links. */
  items?: ReadonlyArray<ProfileFilterLink>;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Link to previous page for this profile filter link collection. */
  previousLink?: string;
}

export const ProfileFilterLinks = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(ProfileFilterLink)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  previousLink: Schema.optional(Schema.String),
}).annotate({ identifier: "ProfileFilterLinks" });

export interface Experiment {
  /** View (Profile) ID to which this experiment belongs. This field is read-only. */
  profileId?: string;
  /** The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only. */
  startTime?: string;
  /** Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED. */
  rewriteVariationUrlsAsOriginal?: boolean;
  /** If true, the end user will be able to edit the experiment via the Google Analytics user interface. */
  editableInGaUi?: boolean;
  /** A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED. */
  winnerConfidenceLevel?: number;
  /** The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks", "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions", "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or "API". */
  objectiveMetric?: string;
  /** Time the experiment was last modified. This field is read-only. */
  updated?: string;
  /** Time the experiment was created. This field is read-only. */
  created?: string;
  /** Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED. */
  equalWeighting?: boolean;
  /** Resource type for an Analytics experiment. This field is read-only. */
  kind?: string;
  /** Internal ID for the web property to which this experiment belongs. This field is read-only. */
  internalWebPropertyId?: string;
  /** A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED. */
  trafficCoverage?: number;
  /** Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING. */
  variations?: ReadonlyArray<{
    name?: string;
    url?: string;
    weight?: number;
    won?: boolean;
    status?: string;
  }>;
  /** The framework used to serve the experiment variations and evaluate the results. One of: - REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates the results. - API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible for serving the selected variation. - EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller is responsible for serving the selected variation and evaluating the results. */
  servingFramework?: string;
  /** Link for this experiment. This field is read-only. */
  selfLink?: string;
  /** Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED". */
  optimizationType?: string;
  /** The snippet of code to include on the control page(s). This field is read-only. */
  snippet?: string;
  /** Experiment ID. Required for patch and update. Disallowed for create. */
  id?: string;
  /** Boolean specifying whether a winner has been found for this experiment. This field is read-only. */
  winnerFound?: boolean;
  /** Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED", "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn't expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only. */
  reasonExperimentEnded?: string;
  /** Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only. */
  webPropertyId?: string;
  /** Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment. */
  status?: string;
  /** Parent link for an experiment. Points to the view (profile) to which this experiment belongs. */
  parentLink?: { type?: string; href?: string };
  /** Notes about this experiment. */
  description?: string;
  /** Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment. */
  name?: string;
  /** An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED. */
  minimumExperimentLengthInDays?: number;
  /** The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only. */
  endTime?: string;
  /** Account ID to which this experiment belongs. This field is read-only. */
  accountId?: string;
}

export const Experiment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  rewriteVariationUrlsAsOriginal: Schema.optional(Schema.Boolean),
  editableInGaUi: Schema.optional(Schema.Boolean),
  winnerConfidenceLevel: Schema.optional(Schema.Number),
  objectiveMetric: Schema.optional(Schema.String),
  updated: Schema.optional(Schema.String),
  created: Schema.optional(Schema.String),
  equalWeighting: Schema.optional(Schema.Boolean),
  kind: Schema.optional(Schema.String),
  internalWebPropertyId: Schema.optional(Schema.String),
  trafficCoverage: Schema.optional(Schema.Number),
  variations: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
        weight: Schema.optional(Schema.Number),
        won: Schema.optional(Schema.Boolean),
        status: Schema.optional(Schema.String),
      }),
    ),
  ),
  servingFramework: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  optimizationType: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  winnerFound: Schema.optional(Schema.Boolean),
  reasonExperimentEnded: Schema.optional(Schema.String),
  webPropertyId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  parentLink: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      href: Schema.optional(Schema.String),
    }),
  ),
  description: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  minimumExperimentLengthInDays: Schema.optional(Schema.Number),
  endTime: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
}).annotate({ identifier: "Experiment" });

export interface IncludeConditions {
  /** Number of days (in the range 1 to 540) a user remains in the audience. */
  membershipDurationDays?: number;
  /** The look-back window lets you specify a time frame for evaluating the behavior that qualifies users for your audience. For example, if your filters include users from Central Asia, and Transactions Greater than 2, and you set the look-back window to 14 days, then any user from Central Asia whose cumulative transactions exceed 2 during the last 14 days is added to the audience. */
  daysToLookBack?: number;
  /** Boolean indicating whether this segment is a smart list. https://support.google.com/analytics/answer/4628577 */
  isSmartList?: boolean;
  /** Resource type for include conditions. */
  kind?: string;
  /** The segment condition that will cause a user to be added to an audience. */
  segment?: string;
}

export const IncludeConditions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  membershipDurationDays: Schema.optional(Schema.Number),
  daysToLookBack: Schema.optional(Schema.Number),
  isSmartList: Schema.optional(Schema.Boolean),
  kind: Schema.optional(Schema.String),
  segment: Schema.optional(Schema.String),
}).annotate({ identifier: "IncludeConditions" });

export interface LinkedForeignAccount {
  /** Resource type for linked foreign account. */
  kind?: string;
  /** The type of the foreign account. For example, `ADWORDS_LINKS`, `DBM_LINKS`, `MCC_LINKS` or `OPTIMIZE`. */
  type?: string;
  /** Web property ID of the form UA-XXXXX-YY to which this linked foreign account belongs. */
  webPropertyId?: string;
  /** Internal ID for the web property to which this linked foreign account belongs. */
  internalWebPropertyId?: string;
  /** The status of this foreign account link. */
  status?: string;
  /** The foreign account ID. For example the an Google Ads `linkedAccountId` has the following format XXX-XXX-XXXX. */
  linkedAccountId?: string;
  /** Remarketing audience ID to which this linked foreign account belongs. */
  remarketingAudienceId?: string;
  /** Boolean indicating whether this is eligible for search. */
  eligibleForSearch?: boolean;
  /** Account ID to which this linked foreign account belongs. */
  accountId?: string;
  /** Entity ad account link ID. */
  id?: string;
}

export const LinkedForeignAccount = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  webPropertyId: Schema.optional(Schema.String),
  internalWebPropertyId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  linkedAccountId: Schema.optional(Schema.String),
  remarketingAudienceId: Schema.optional(Schema.String),
  eligibleForSearch: Schema.optional(Schema.Boolean),
  accountId: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "LinkedForeignAccount" });

export interface RemarketingAudience {
  /** Time this remarketing audience was last modified. */
  updated?: string;
  /** The simple audience definition that will cause a user to be added to an audience. */
  audienceDefinition?: { includeConditions?: IncludeConditions };
  /** Time this remarketing audience was created. */
  created?: string;
  /** Internal ID for the web property to which this remarketing audience belongs. */
  internalWebPropertyId?: string;
  /** Collection type. */
  kind?: string;
  /** The description of this remarketing audience. */
  description?: string;
  /** The type of audience, either SIMPLE or STATE_BASED. */
  audienceType?: string;
  /** The views (profiles) that this remarketing audience is linked to. */
  linkedViews?: ReadonlyArray<string>;
  /** A state based audience definition that will cause a user to be added or removed from an audience. */
  stateBasedAudienceDefinition?: {
    excludeConditions?: { exclusionDuration?: string; segment?: string };
    includeConditions?: IncludeConditions;
  };
  /** Account ID to which this remarketing audience belongs. */
  accountId?: string;
  /** Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs. */
  webPropertyId?: string;
  /** The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one linkedAdAccount currently. */
  linkedAdAccounts?: ReadonlyArray<LinkedForeignAccount>;
  /** The name of this remarketing audience. */
  name?: string;
  /** Remarketing Audience ID. */
  id?: string;
}

export const RemarketingAudience = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updated: Schema.optional(Schema.String),
  audienceDefinition: Schema.optional(
    Schema.Struct({ includeConditions: Schema.optional(IncludeConditions) }),
  ),
  created: Schema.optional(Schema.String),
  internalWebPropertyId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  audienceType: Schema.optional(Schema.String),
  linkedViews: Schema.optional(Schema.Array(Schema.String)),
  stateBasedAudienceDefinition: Schema.optional(
    Schema.Struct({
      excludeConditions: Schema.optional(
        Schema.Struct({
          exclusionDuration: Schema.optional(Schema.String),
          segment: Schema.optional(Schema.String),
        }),
      ),
      includeConditions: Schema.optional(IncludeConditions),
    }),
  ),
  accountId: Schema.optional(Schema.String),
  webPropertyId: Schema.optional(Schema.String),
  linkedAdAccounts: Schema.optional(Schema.Array(LinkedForeignAccount)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "RemarketingAudience" });

export interface GaData {
  dataTable?: {
    cols?: ReadonlyArray<{ label?: string; type?: string; id?: string }>;
    rows?: ReadonlyArray<{ c?: ReadonlyArray<{ v?: string }> }>;
  };
  /** Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request. */
  rows?: ReadonlyArray<ReadonlyArray<string>>;
  /** Information for the view (profile), for which the Analytics data was requested. */
  profileInfo?: {
    profileId?: string;
    profileName?: string;
    accountId?: string;
    internalWebPropertyId?: string;
    webPropertyId?: string;
    tableId?: string;
  };
  /** Link to next page for this Analytics data query. */
  nextLink?: string;
  /** Analytics data request query parameters. */
  query?: {
    dimensions?: string;
    filters?: string;
    "max-results"?: number;
    segment?: string;
    "start-date"?: string;
    sort?: ReadonlyArray<string>;
    metrics?: ReadonlyArray<string>;
    samplingLevel?: string;
    ids?: string;
    "end-date"?: string;
    "start-index"?: number;
  };
  /** The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Resource type. */
  kind?: string;
  /** The total number of rows for the query, regardless of the number of rows in the response. */
  totalResults?: number;
  /** Link to previous page for this Analytics data query. */
  previousLink?: string;
  /** Link to this page. */
  selfLink?: string;
  /** Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request. */
  columnHeaders?: ReadonlyArray<{
    name?: string;
    columnType?: string;
    dataType?: string;
  }>;
  /** The last refreshed time in seconds for Analytics data. */
  dataLastRefreshed?: string;
  /** Unique ID for this data response. */
  id?: string;
  /** Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request. */
  totalsForAllResults?: Record<string, string>;
  /** Determines if Analytics data contains samples. */
  containsSampledData?: boolean;
  /** Total size of the sample space from which the samples were selected. */
  sampleSpace?: string;
  /** The number of samples used to calculate the result. */
  sampleSize?: string;
}

export const GaData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataTable: Schema.optional(
    Schema.Struct({
      cols: Schema.optional(
        Schema.Array(
          Schema.Struct({
            label: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
            id: Schema.optional(Schema.String),
          }),
        ),
      ),
      rows: Schema.optional(
        Schema.Array(
          Schema.Struct({
            c: Schema.optional(
              Schema.Array(
                Schema.Struct({ v: Schema.optional(Schema.String) }),
              ),
            ),
          }),
        ),
      ),
    }),
  ),
  rows: Schema.optional(Schema.Array(Schema.Array(Schema.String))),
  profileInfo: Schema.optional(
    Schema.Struct({
      profileId: Schema.optional(Schema.String),
      profileName: Schema.optional(Schema.String),
      accountId: Schema.optional(Schema.String),
      internalWebPropertyId: Schema.optional(Schema.String),
      webPropertyId: Schema.optional(Schema.String),
      tableId: Schema.optional(Schema.String),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
  query: Schema.optional(
    Schema.Struct({
      dimensions: Schema.optional(Schema.String),
      filters: Schema.optional(Schema.String),
      "max-results": Schema.optional(Schema.Number),
      segment: Schema.optional(Schema.String),
      "start-date": Schema.optional(Schema.String),
      sort: Schema.optional(Schema.Array(Schema.String)),
      metrics: Schema.optional(Schema.Array(Schema.String)),
      samplingLevel: Schema.optional(Schema.String),
      ids: Schema.optional(Schema.String),
      "end-date": Schema.optional(Schema.String),
      "start-index": Schema.optional(Schema.Number),
    }),
  ),
  itemsPerPage: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  previousLink: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  columnHeaders: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        columnType: Schema.optional(Schema.String),
        dataType: Schema.optional(Schema.String),
      }),
    ),
  ),
  dataLastRefreshed: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  totalsForAllResults: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  containsSampledData: Schema.optional(Schema.Boolean),
  sampleSpace: Schema.optional(Schema.String),
  sampleSize: Schema.optional(Schema.String),
}).annotate({ identifier: "GaData" });

export interface Account {
  /** Link for this account. */
  selfLink?: string;
  /** Account name. */
  name?: string;
  /** Account ID. */
  id?: string;
  /** Time the account was created. */
  created?: string;
  /** Permissions the user has for this account. */
  permissions?: { effective?: ReadonlyArray<string> };
  /** Time the account was last modified. */
  updated?: string;
  /** Child link for an account entry. Points to the list of web properties for this account. */
  childLink?: { href?: string; type?: string };
  /** Resource type for Analytics account. */
  kind?: string;
  /** Indicates whether this account is starred or not. */
  starred?: boolean;
}

export const Account = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  selfLink: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  created: Schema.optional(Schema.String),
  permissions: Schema.optional(
    Schema.Struct({ effective: Schema.optional(Schema.Array(Schema.String)) }),
  ),
  updated: Schema.optional(Schema.String),
  childLink: Schema.optional(
    Schema.Struct({
      href: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
    }),
  ),
  kind: Schema.optional(Schema.String),
  starred: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Account" });

export interface Accounts {
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** Next link for this account collection. */
  nextLink?: string;
  /** Email ID of the authenticated user */
  username?: string;
  /** A list of accounts. */
  items?: ReadonlyArray<Account>;
  /** The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Collection type. */
  kind?: string;
  /** Previous link for this account collection. */
  previousLink?: string;
}

export const Accounts = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  totalResults: Schema.optional(Schema.Number),
  nextLink: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Account)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  previousLink: Schema.optional(Schema.String),
}).annotate({ identifier: "Accounts" });

export interface AnalyticsDataimportDeleteUploadDataRequest {
  /** A list of upload UIDs. */
  customDataImportUids?: ReadonlyArray<string>;
}

export const AnalyticsDataimportDeleteUploadDataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customDataImportUids: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AnalyticsDataimportDeleteUploadDataRequest" });

export interface Goal {
  /** Details for the goal of the type URL_DESTINATION. */
  urlDestinationDetails?: {
    matchType?: string;
    steps?: ReadonlyArray<{ number?: number; name?: string; url?: string }>;
    url?: string;
    firstStepRequired?: boolean;
    caseSensitive?: boolean;
  };
  /** Details for the goal of the type VISIT_NUM_PAGES. */
  visitNumPagesDetails?: { comparisonType?: string; comparisonValue?: string };
  /** View (Profile) ID to which this goal belongs. */
  profileId?: string;
  /** Parent link for a goal. Points to the view (profile) to which this goal belongs. */
  parentLink?: { type?: string; href?: string };
  /** Internal ID for the web property to which this goal belongs. */
  internalWebPropertyId?: string;
  /** Details for the goal of the type EVENT. */
  eventDetails?: {
    eventConditions?: ReadonlyArray<{
      comparisonType?: string;
      matchType?: string;
      expression?: string;
      comparisonValue?: string;
      type?: string;
    }>;
    useEventValue?: boolean;
  };
  /** Resource type for an Analytics goal. */
  kind?: string;
  /** Time this goal was last modified. */
  updated?: string;
  /** Details for the goal of the type VISIT_TIME_ON_SITE. */
  visitTimeOnSiteDetails?: {
    comparisonType?: string;
    comparisonValue?: string;
  };
  /** Time this goal was created. */
  created?: string;
  /** Determines whether this goal is active. */
  active?: boolean;
  /** Goal ID. */
  id?: string;
  /** Goal name. */
  name?: string;
  /** Link for this goal. */
  selfLink?: string;
  /** Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT. */
  type?: string;
  /** Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY. */
  webPropertyId?: string;
  /** Goal value. */
  value?: number;
  /** Account ID to which this goal belongs. */
  accountId?: string;
}

export const Goal = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  urlDestinationDetails: Schema.optional(
    Schema.Struct({
      matchType: Schema.optional(Schema.String),
      steps: Schema.optional(
        Schema.Array(
          Schema.Struct({
            number: Schema.optional(Schema.Number),
            name: Schema.optional(Schema.String),
            url: Schema.optional(Schema.String),
          }),
        ),
      ),
      url: Schema.optional(Schema.String),
      firstStepRequired: Schema.optional(Schema.Boolean),
      caseSensitive: Schema.optional(Schema.Boolean),
    }),
  ),
  visitNumPagesDetails: Schema.optional(
    Schema.Struct({
      comparisonType: Schema.optional(Schema.String),
      comparisonValue: Schema.optional(Schema.String),
    }),
  ),
  profileId: Schema.optional(Schema.String),
  parentLink: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      href: Schema.optional(Schema.String),
    }),
  ),
  internalWebPropertyId: Schema.optional(Schema.String),
  eventDetails: Schema.optional(
    Schema.Struct({
      eventConditions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            comparisonType: Schema.optional(Schema.String),
            matchType: Schema.optional(Schema.String),
            expression: Schema.optional(Schema.String),
            comparisonValue: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
      ),
      useEventValue: Schema.optional(Schema.Boolean),
    }),
  ),
  kind: Schema.optional(Schema.String),
  updated: Schema.optional(Schema.String),
  visitTimeOnSiteDetails: Schema.optional(
    Schema.Struct({
      comparisonType: Schema.optional(Schema.String),
      comparisonValue: Schema.optional(Schema.String),
    }),
  ),
  created: Schema.optional(Schema.String),
  active: Schema.optional(Schema.Boolean),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  webPropertyId: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Number),
  accountId: Schema.optional(Schema.String),
}).annotate({ identifier: "Goal" });

export interface UnsampledReport {
  /** The segment for the unsampled report. */
  segment?: string;
  /** Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY. */
  webPropertyId?: string;
  /** Status of this unsampled report. Possible values are PENDING, COMPLETED, or FAILED. */
  status?: string;
  /** Account ID to which this unsampled report belongs. */
  accountId?: string;
  /** The dimensions for the unsampled report. */
  dimensions?: string;
  /** The end date for the unsampled report. */
  "end-date"?: string;
  /** Download details for a file stored in Google Drive. */
  driveDownloadDetails?: { documentId?: string };
  /** Unsampled report ID. */
  id?: string;
  /** Link for this unsampled report. */
  selfLink?: string;
  /** The start date for the unsampled report. */
  "start-date"?: string;
  /** Resource type for an Analytics unsampled report. */
  kind?: string;
  /** Time this unsampled report was last modified. */
  updated?: string;
  /** Title of the unsampled report. */
  title?: string;
  /** Time this unsampled report was created. */
  created?: string;
  /** The filters for the unsampled report. */
  filters?: string;
  /** Download details for a file stored in Google Cloud Storage. */
  cloudStorageDownloadDetails?: { bucketId?: string; objectId?: string };
  /** The type of download you need to use for the report data file. Possible values include `GOOGLE_DRIVE` and `GOOGLE_CLOUD_STORAGE`. If the value is `GOOGLE_DRIVE`, see the `driveDownloadDetails` field. If the value is `GOOGLE_CLOUD_STORAGE`, see the `cloudStorageDownloadDetails` field. */
  downloadType?: string;
  /** View (Profile) ID to which this unsampled report belongs. */
  profileId?: string;
  /** The metrics for the unsampled report. */
  metrics?: string;
}

export const UnsampledReport = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  segment: Schema.optional(Schema.String),
  webPropertyId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  dimensions: Schema.optional(Schema.String),
  "end-date": Schema.optional(Schema.String),
  driveDownloadDetails: Schema.optional(
    Schema.Struct({ documentId: Schema.optional(Schema.String) }),
  ),
  id: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  "start-date": Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  updated: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  created: Schema.optional(Schema.String),
  filters: Schema.optional(Schema.String),
  cloudStorageDownloadDetails: Schema.optional(
    Schema.Struct({
      bucketId: Schema.optional(Schema.String),
      objectId: Schema.optional(Schema.String),
    }),
  ),
  downloadType: Schema.optional(Schema.String),
  profileId: Schema.optional(Schema.String),
  metrics: Schema.optional(Schema.String),
}).annotate({ identifier: "UnsampledReport" });

export interface AccountTreeRequest {
  /** Resource type for account ticket. */
  kind?: string;
  timezone?: string;
  webpropertyName?: string;
  websiteUrl?: string;
  accountName?: string;
  profileName?: string;
}

export const AccountTreeRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  timezone: Schema.optional(Schema.String),
  webpropertyName: Schema.optional(Schema.String),
  websiteUrl: Schema.optional(Schema.String),
  accountName: Schema.optional(Schema.String),
  profileName: Schema.optional(Schema.String),
}).annotate({ identifier: "AccountTreeRequest" });

export interface Filters {
  /** Link to next page for this filter collection. */
  nextLink?: string;
  /** Email ID of the authenticated user */
  username?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** Collection type. */
  kind?: string;
  /** A list of filters. */
  items?: ReadonlyArray<Filter>;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Link to previous page for this filter collection. */
  previousLink?: string;
}

export const Filters = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Filter)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  previousLink: Schema.optional(Schema.String),
}).annotate({ identifier: "Filters" });

export interface McfData {
  /** Determines if the Analytics data contains sampled data. */
  containsSampledData?: boolean;
  /** Total size of the sample space from which the samples were selected. */
  sampleSpace?: string;
  /** Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request. */
  totalsForAllResults?: Record<string, string>;
  /** The number of samples used to calculate the result. */
  sampleSize?: string;
  /** Link to previous page for this Analytics data query. */
  previousLink?: string;
  /** Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request. */
  columnHeaders?: ReadonlyArray<{
    name?: string;
    dataType?: string;
    columnType?: string;
  }>;
  /** Link to this page. */
  selfLink?: string;
  /** Unique ID for this data response. */
  id?: string;
  /** Analytics data request query parameters. */
  query?: {
    "max-results"?: number;
    dimensions?: string;
    filters?: string;
    sort?: ReadonlyArray<string>;
    segment?: string;
    "start-date"?: string;
    ids?: string;
    metrics?: ReadonlyArray<string>;
    samplingLevel?: string;
    "start-index"?: number;
    "end-date"?: string;
  };
  /** Resource type. */
  kind?: string;
  /** The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The total number of rows for the query, regardless of the number of rows in the response. */
  totalResults?: number;
  /** Information for the view (profile), for which the Analytics data was requested. */
  profileInfo?: {
    webPropertyId?: string;
    internalWebPropertyId?: string;
    tableId?: string;
    profileId?: string;
    accountId?: string;
    profileName?: string;
  };
  /** Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request. */
  rows?: ReadonlyArray<
    ReadonlyArray<{
      primitiveValue?: string;
      conversionPathValue?: ReadonlyArray<{
        interactionType?: string;
        nodeValue?: string;
      }>;
    }>
  >;
  /** Link to next page for this Analytics data query. */
  nextLink?: string;
}

export const McfData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  containsSampledData: Schema.optional(Schema.Boolean),
  sampleSpace: Schema.optional(Schema.String),
  totalsForAllResults: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  sampleSize: Schema.optional(Schema.String),
  previousLink: Schema.optional(Schema.String),
  columnHeaders: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        dataType: Schema.optional(Schema.String),
        columnType: Schema.optional(Schema.String),
      }),
    ),
  ),
  selfLink: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  query: Schema.optional(
    Schema.Struct({
      "max-results": Schema.optional(Schema.Number),
      dimensions: Schema.optional(Schema.String),
      filters: Schema.optional(Schema.String),
      sort: Schema.optional(Schema.Array(Schema.String)),
      segment: Schema.optional(Schema.String),
      "start-date": Schema.optional(Schema.String),
      ids: Schema.optional(Schema.String),
      metrics: Schema.optional(Schema.Array(Schema.String)),
      samplingLevel: Schema.optional(Schema.String),
      "start-index": Schema.optional(Schema.Number),
      "end-date": Schema.optional(Schema.String),
    }),
  ),
  kind: Schema.optional(Schema.String),
  itemsPerPage: Schema.optional(Schema.Number),
  totalResults: Schema.optional(Schema.Number),
  profileInfo: Schema.optional(
    Schema.Struct({
      webPropertyId: Schema.optional(Schema.String),
      internalWebPropertyId: Schema.optional(Schema.String),
      tableId: Schema.optional(Schema.String),
      profileId: Schema.optional(Schema.String),
      accountId: Schema.optional(Schema.String),
      profileName: Schema.optional(Schema.String),
    }),
  ),
  rows: Schema.optional(
    Schema.Array(
      Schema.Array(
        Schema.Struct({
          primitiveValue: Schema.optional(Schema.String),
          conversionPathValue: Schema.optional(
            Schema.Array(
              Schema.Struct({
                interactionType: Schema.optional(Schema.String),
                nodeValue: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}).annotate({ identifier: "McfData" });

export interface Column {
  /** Resource type for Analytics column. */
  kind?: string;
  /** Column id. */
  id?: string;
  /** Map of attribute name and value for this column. */
  attributes?: Record<string, string>;
}

export const Column = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  attributes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "Column" });

export interface Columns {
  /** List of attributes names returned by columns. */
  attributeNames?: ReadonlyArray<string>;
  /** Etag of collection. This etag can be compared with the last response etag to check if response has changed. */
  etag?: string;
  /** Total number of columns returned in the response. */
  totalResults?: number;
  /** Collection type. */
  kind?: string;
  /** List of columns for a report type. */
  items?: ReadonlyArray<Column>;
}

export const Columns = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  attributeNames: Schema.optional(Schema.Array(Schema.String)),
  etag: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Column)),
}).annotate({ identifier: "Columns" });

export interface Experiments {
  /** Link to previous page for this experiment collection. */
  previousLink?: string;
  /** Link to next page for this experiment collection. */
  nextLink?: string;
  /** Email ID of the authenticated user */
  username?: string;
  /** The total number of results for the query, regardless of the number of resources in the result. */
  totalResults?: number;
  /** Collection type. */
  kind?: string;
  /** A list of experiments. */
  items?: ReadonlyArray<Experiment>;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
}

export const Experiments = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  previousLink: Schema.optional(Schema.String),
  nextLink: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Experiment)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
}).annotate({ identifier: "Experiments" });

export interface UnsampledReports {
  /** Link to next page for this unsampled report collection. */
  nextLink?: string;
  /** Email ID of the authenticated user */
  username?: string;
  /** The total number of results for the query, regardless of the number of resources in the result. */
  totalResults?: number;
  /** Collection type. */
  kind?: string;
  /** A list of unsampled reports. */
  items?: ReadonlyArray<UnsampledReport>;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Link to previous page for this unsampled report collection. */
  previousLink?: string;
}

export const UnsampledReports = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(UnsampledReport)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  previousLink: Schema.optional(Schema.String),
}).annotate({ identifier: "UnsampledReports" });

export interface HashClientIdRequest {
  clientId?: string;
  kind?: string;
  webPropertyId?: string;
}

export const HashClientIdRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clientId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  webPropertyId: Schema.optional(Schema.String),
}).annotate({ identifier: "HashClientIdRequest" });

export interface CustomDataSource {
  /** Resource type for Analytics custom data source. */
  kind?: string;
  /** Collection of schema headers of the custom data source. */
  schema?: ReadonlyArray<string>;
  childLink?: { href?: string; type?: string };
  /** Time this custom data source was last modified. */
  updated?: string;
  /** Time this custom data source was created. */
  created?: string;
  /** Description of custom data source. */
  description?: string;
  /** Parent link for this custom data source. Points to the web property to which this custom data source belongs. */
  parentLink?: { type?: string; href?: string };
  /** IDs of views (profiles) linked to the custom data source. */
  profilesLinked?: ReadonlyArray<string>;
  /** Type of the custom data source. */
  type?: string;
  /** Web property ID of the form UA-XXXXX-YY to which this custom data source belongs. */
  webPropertyId?: string;
  /** Upload type of the custom data source. */
  uploadType?: string;
  /** Account ID to which this custom data source belongs. */
  accountId?: string;
  importBehavior?: string;
  /** Custom data source ID. */
  id?: string;
  /** Name of this custom data source. */
  name?: string;
  /** Link for this Analytics custom data source. */
  selfLink?: string;
}

export const CustomDataSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  schema: Schema.optional(Schema.Array(Schema.String)),
  childLink: Schema.optional(
    Schema.Struct({
      href: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
    }),
  ),
  updated: Schema.optional(Schema.String),
  created: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  parentLink: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      href: Schema.optional(Schema.String),
    }),
  ),
  profilesLinked: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.String),
  webPropertyId: Schema.optional(Schema.String),
  uploadType: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  importBehavior: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomDataSource" });

export interface CustomDataSources {
  /** Collection of custom data sources. */
  items?: ReadonlyArray<CustomDataSource>;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Collection type. */
  kind?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** Link to next page for this custom data source collection. */
  nextLink?: string;
  /** Email ID of the authenticated user */
  username?: string;
  /** Link to previous page for this custom data source collection. */
  previousLink?: string;
}

export const CustomDataSources = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.optional(Schema.Array(CustomDataSource)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  nextLink: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  previousLink: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomDataSources" });

export interface AccountRef {
  /** Link for this account. */
  href?: string;
  /** Account ID. */
  id?: string;
  /** Analytics account reference. */
  kind?: string;
  /** Account name. */
  name?: string;
}

export const AccountRef = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  href: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "AccountRef" });

export interface UserRef {
  /** Email ID of this user. */
  email?: string;
  /** User ID. */
  id?: string;
  kind?: string;
}

export const UserRef = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "UserRef" });

export interface EntityUserLink {
  /** Entity for this link. It can be an account, a web property, or a view (profile). */
  entity?: {
    accountRef?: AccountRef;
    profileRef?: ProfileRef;
    webPropertyRef?: WebPropertyRef;
  };
  /** Resource type for entity user link. */
  kind?: string;
  /** Entity user link ID */
  id?: string;
  /** User reference. */
  userRef?: UserRef;
  /** Permissions the user has for this entity. */
  permissions?: {
    effective?: ReadonlyArray<string>;
    local?: ReadonlyArray<string>;
  };
  /** Self link for this resource. */
  selfLink?: string;
}

export const EntityUserLink = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  entity: Schema.optional(
    Schema.Struct({
      accountRef: Schema.optional(AccountRef),
      profileRef: Schema.optional(ProfileRef),
      webPropertyRef: Schema.optional(WebPropertyRef),
    }),
  ),
  kind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  userRef: Schema.optional(UserRef),
  permissions: Schema.optional(
    Schema.Struct({
      effective: Schema.optional(Schema.Array(Schema.String)),
      local: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
  selfLink: Schema.optional(Schema.String),
}).annotate({ identifier: "EntityUserLink" });

export interface EntityUserLinks {
  /** Next link for this account collection. */
  nextLink?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** Collection type. */
  kind?: string;
  /** A list of entity user links. */
  items?: ReadonlyArray<EntityUserLink>;
  /** The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Previous link for this account collection. */
  previousLink?: string;
}

export const EntityUserLinks = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(EntityUserLink)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  previousLink: Schema.optional(Schema.String),
}).annotate({ identifier: "EntityUserLinks" });

export interface Profile {
  /** Default page for this view (profile). */
  defaultPage?: string;
  /** Name of this view (profile). */
  name?: string;
  /** The currency type associated with this view (profile), defaults to USD. The supported values are: USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL */
  currency?: string;
  /** Account ID to which this view (profile) belongs. */
  accountId?: string;
  /** Permissions the user has for this view (profile). */
  permissions?: { effective?: ReadonlyArray<string> };
  /** Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database. */
  timezone?: string;
  /** Parent link for this view (profile). Points to the web property to which this view (profile) belongs. */
  parentLink?: { type?: string; href?: string };
  /** The query parameters that are excluded from this view (profile). */
  excludeQueryParameters?: string;
  /** The site search query parameters for this view (profile). */
  siteSearchQueryParameters?: string;
  /** Whether or not Analytics will strip search query parameters from the URLs in your reports. */
  stripSiteSearchQueryParameters?: boolean;
  /** Site search category parameters for this view (profile). */
  siteSearchCategoryParameters?: string;
  /** Indicates whether this view (profile) is starred or not. */
  starred?: boolean;
  /** Whether or not Analytics will strip search category parameters from the URLs in your reports. */
  stripSiteSearchCategoryParameters?: boolean;
  /** Link for this view (profile). */
  selfLink?: string;
  /** Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled. */
  enhancedECommerceTracking?: boolean;
  /** View (Profile) ID. */
  id?: string;
  /** View (Profile) type. Supported types: WEB or APP. */
  type?: string;
  /** Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs. */
  webPropertyId?: string;
  /** Indicates whether bot filtering is enabled for this view (profile). */
  botFilteringEnabled?: boolean;
  /** Website URL for this view (profile). */
  websiteUrl?: string;
  /** Time this view (profile) was created. */
  created?: string;
  /** Time this view (profile) was last modified. */
  updated?: string;
  /** Child link for this view (profile). Points to the list of goals for this view (profile). */
  childLink?: { type?: string; href?: string };
  /** Indicates whether ecommerce tracking is enabled for this view (profile). */
  eCommerceTracking?: boolean;
  /** Resource type for Analytics view (profile). */
  kind?: string;
  /** Internal ID for the web property to which this view (profile) belongs. */
  internalWebPropertyId?: string;
}

export const Profile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  defaultPage: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  currency: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  permissions: Schema.optional(
    Schema.Struct({ effective: Schema.optional(Schema.Array(Schema.String)) }),
  ),
  timezone: Schema.optional(Schema.String),
  parentLink: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      href: Schema.optional(Schema.String),
    }),
  ),
  excludeQueryParameters: Schema.optional(Schema.String),
  siteSearchQueryParameters: Schema.optional(Schema.String),
  stripSiteSearchQueryParameters: Schema.optional(Schema.Boolean),
  siteSearchCategoryParameters: Schema.optional(Schema.String),
  starred: Schema.optional(Schema.Boolean),
  stripSiteSearchCategoryParameters: Schema.optional(Schema.Boolean),
  selfLink: Schema.optional(Schema.String),
  enhancedECommerceTracking: Schema.optional(Schema.Boolean),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  webPropertyId: Schema.optional(Schema.String),
  botFilteringEnabled: Schema.optional(Schema.Boolean),
  websiteUrl: Schema.optional(Schema.String),
  created: Schema.optional(Schema.String),
  updated: Schema.optional(Schema.String),
  childLink: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      href: Schema.optional(Schema.String),
    }),
  ),
  eCommerceTracking: Schema.optional(Schema.Boolean),
  kind: Schema.optional(Schema.String),
  internalWebPropertyId: Schema.optional(Schema.String),
}).annotate({ identifier: "Profile" });

export interface Profiles {
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** Link to next page for this view (profile) collection. */
  nextLink?: string;
  /** Email ID of the authenticated user */
  username?: string;
  /** A list of views (profiles). */
  items?: ReadonlyArray<Profile>;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Collection type. */
  kind?: string;
  /** Link to previous page for this view (profile) collection. */
  previousLink?: string;
}

export const Profiles = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  totalResults: Schema.optional(Schema.Number),
  nextLink: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Profile)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  previousLink: Schema.optional(Schema.String),
}).annotate({ identifier: "Profiles" });

export interface Goals {
  /** Link to previous page for this goal collection. */
  previousLink?: string;
  /** The total number of results for the query, regardless of the number of resources in the result. */
  totalResults?: number;
  /** Link to next page for this goal collection. */
  nextLink?: string;
  /** Email ID of the authenticated user */
  username?: string;
  /** A list of goals. */
  items?: ReadonlyArray<Goal>;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Collection type. */
  kind?: string;
}

export const Goals = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  previousLink: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  nextLink: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Goal)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "Goals" });

export interface Uploads {
  /** Link to next page for this upload collection. */
  nextLink?: string;
  /** The total number of results for the query, regardless of the number of resources in the result. */
  totalResults?: number;
  /** Collection type. */
  kind?: string;
  /** A list of uploads. */
  items?: ReadonlyArray<Upload>;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Link to previous page for this upload collection. */
  previousLink?: string;
}

export const Uploads = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Upload)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  previousLink: Schema.optional(Schema.String),
}).annotate({ identifier: "Uploads" });

export interface CustomMetric {
  /** Account ID. */
  accountId?: string;
  /** Data type of custom metric. */
  type?: string;
  /** Property ID. */
  webPropertyId?: string;
  /** Name of the custom metric. */
  name?: string;
  /** Link for the custom metric */
  selfLink?: string;
  /** Boolean indicating whether the custom metric is active. */
  active?: boolean;
  /** Scope of the custom metric: HIT or PRODUCT. */
  scope?: string;
  /** Index of the custom metric. */
  index?: number;
  /** Custom metric ID. */
  id?: string;
  /** Time the custom metric was last modified. */
  updated?: string;
  /** Min value of custom metric. */
  min_value?: string;
  /** Time the custom metric was created. */
  created?: string;
  /** Kind value for a custom metric. Set to "analytics#customMetric". It is a read-only field. */
  kind?: string;
  /** Parent link for the custom metric. Points to the property to which the custom metric belongs. */
  parentLink?: { type?: string; href?: string };
  /** Max value of custom metric. */
  max_value?: string;
}

export const CustomMetric = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  webPropertyId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  active: Schema.optional(Schema.Boolean),
  scope: Schema.optional(Schema.String),
  index: Schema.optional(Schema.Number),
  id: Schema.optional(Schema.String),
  updated: Schema.optional(Schema.String),
  min_value: Schema.optional(Schema.String),
  created: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  parentLink: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      href: Schema.optional(Schema.String),
    }),
  ),
  max_value: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomMetric" });

export interface CustomMetrics {
  /** Collection type. */
  kind?: string;
  /** Collection of custom metrics. */
  items?: ReadonlyArray<CustomMetric>;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Link to next page for this custom metric collection. */
  nextLink?: string;
  /** Email ID of the authenticated user */
  username?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** Link to previous page for this custom metric collection. */
  previousLink?: string;
}

export const CustomMetrics = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(CustomMetric)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  nextLink: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  previousLink: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomMetrics" });

export interface Webproperty {
  /** Website url for this web property. */
  websiteUrl?: string;
  /** Level for this web property. Possible values are STANDARD or PREMIUM. */
  level?: string;
  /** Parent link for this web property. Points to the account to which this web property belongs. */
  parentLink?: { type?: string; href?: string };
  /** Child link for this web property. Points to the list of views (profiles) for this web property. */
  childLink?: { href?: string; type?: string };
  /** Internal ID for this web property. */
  internalWebPropertyId?: string;
  /** View (Profile) count for this web property. */
  profileCount?: number;
  /** Resource type for Analytics WebProperty. */
  kind?: string;
  /** Indicates whether this web property is starred or not. */
  starred?: boolean;
  /** The industry vertical/category selected for this web property. */
  industryVertical?: string;
  /** Time this web property was created. */
  created?: string;
  /** Time this web property was last modified. */
  updated?: string;
  /** Web property ID of the form UA-XXXXX-YY. */
  id?: string;
  /** The length of time for which user and event data is retained. This property cannot be set on insert. */
  dataRetentionTtl?: string;
  /** Link for this web property. */
  selfLink?: string;
  /** Set to true to reset the retention period of the user identifier with each new event from that user (thus setting the expiration date to current time plus retention period). Set to false to delete data associated with the user identifier automatically after the rentention period. This property cannot be set on insert. */
  dataRetentionResetOnNewActivity?: boolean;
  /** Name of this web property. */
  name?: string;
  /** Account ID to which this web property belongs. */
  accountId?: string;
  /** Default view (profile) ID. */
  defaultProfileId?: string;
  /** Permissions the user has for this web property. */
  permissions?: { effective?: ReadonlyArray<string> };
}

export const Webproperty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  websiteUrl: Schema.optional(Schema.String),
  level: Schema.optional(Schema.String),
  parentLink: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      href: Schema.optional(Schema.String),
    }),
  ),
  childLink: Schema.optional(
    Schema.Struct({
      href: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
    }),
  ),
  internalWebPropertyId: Schema.optional(Schema.String),
  profileCount: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  starred: Schema.optional(Schema.Boolean),
  industryVertical: Schema.optional(Schema.String),
  created: Schema.optional(Schema.String),
  updated: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  dataRetentionTtl: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  dataRetentionResetOnNewActivity: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  defaultProfileId: Schema.optional(Schema.String),
  permissions: Schema.optional(
    Schema.Struct({ effective: Schema.optional(Schema.Array(Schema.String)) }),
  ),
}).annotate({ identifier: "Webproperty" });

export interface AccountTreeResponse {
  /** View (Profile) for the account. */
  profile?: Profile;
  /** The account created. */
  account?: Account;
  /** Resource type for account ticket. */
  kind?: string;
  /** Web property for the account. */
  webproperty?: Webproperty;
}

export const AccountTreeResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profile: Schema.optional(Profile),
  account: Schema.optional(Account),
  kind: Schema.optional(Schema.String),
  webproperty: Schema.optional(Webproperty),
}).annotate({ identifier: "AccountTreeResponse" });

export interface RemarketingAudiences {
  /** Link to previous page for this view (profile) collection. */
  previousLink?: string;
  /** Collection type. */
  kind?: string;
  /** A list of remarketing audiences. */
  items?: ReadonlyArray<RemarketingAudience>;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Link to next page for this remarketing audience collection. */
  nextLink?: string;
  /** Email ID of the authenticated user */
  username?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
}

export const RemarketingAudiences = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  previousLink: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(RemarketingAudience)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  nextLink: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
}).annotate({ identifier: "RemarketingAudiences" });

export interface Webproperties {
  /** Collection type. */
  kind?: string;
  /** A list of web properties. */
  items?: ReadonlyArray<Webproperty>;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Link to next page for this web property collection. */
  nextLink?: string;
  /** Email ID of the authenticated user */
  username?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** Link to previous page for this web property collection. */
  previousLink?: string;
}

export const Webproperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Webproperty)),
  itemsPerPage: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  nextLink: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  totalResults: Schema.optional(Schema.Number),
  previousLink: Schema.optional(Schema.String),
}).annotate({ identifier: "Webproperties" });

export interface HashClientIdResponse {
  clientId?: string;
  hashedClientId?: string;
  kind?: string;
  webPropertyId?: string;
}

export const HashClientIdResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clientId: Schema.optional(Schema.String),
  hashedClientId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  webPropertyId: Schema.optional(Schema.String),
}).annotate({ identifier: "HashClientIdResponse" });

export interface AccountTicket {
  /** Account ticket ID used to access the account ticket. */
  id?: string;
  /** Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a callback URL. */
  redirectUri?: string;
  /** Account for this ticket. */
  account?: Account;
  /** Resource type for account ticket. */
  kind?: string;
  /** View (Profile) for the account. */
  profile?: Profile;
  /** Web property for the account. */
  webproperty?: Webproperty;
}

export const AccountTicket = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  redirectUri: Schema.optional(Schema.String),
  account: Schema.optional(Account),
  kind: Schema.optional(Schema.String),
  profile: Schema.optional(Profile),
  webproperty: Schema.optional(Webproperty),
}).annotate({ identifier: "AccountTicket" });

export interface UserDeletionRequest {
  /** User ID. */
  id?: { userId?: string; type?: string };
  /** This marks the point in time for which all user data before should be deleted */
  deletionRequestTime?: string;
  /** Value is "analytics#userDeletionRequest". */
  kind?: string;
  /** Web property ID of the form UA-XXXXX-YY. */
  webPropertyId?: string;
  /** Firebase Project Id */
  firebaseProjectId?: string;
  /** Property ID */
  propertyId?: string;
}

export const UserDeletionRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(
    Schema.Struct({
      userId: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
    }),
  ),
  deletionRequestTime: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  webPropertyId: Schema.optional(Schema.String),
  firebaseProjectId: Schema.optional(Schema.String),
  propertyId: Schema.optional(Schema.String),
}).annotate({ identifier: "UserDeletionRequest" });

// ==========================================================================
// Operations
// ==========================================================================

export interface ListMetadataColumnsRequest {
  /** Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API */
  reportType: string;
}

export const ListMetadataColumnsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportType: Schema.String.pipe(T.HttpPath("reportType")),
  }).pipe(
    T.Http({ method: "GET", path: "metadata/{reportType}/columns" }),
    svc,
  ) as unknown as Schema.Schema<ListMetadataColumnsRequest>;

export type ListMetadataColumnsResponse = Columns;
export const ListMetadataColumnsResponse = /*@__PURE__*/ /*#__PURE__*/ Columns;

export type ListMetadataColumnsError = DefaultErrors;

/** Lists all columns for a report type */
export const listMetadataColumns: API.OperationMethod<
  ListMetadataColumnsRequest,
  ListMetadataColumnsResponse,
  ListMetadataColumnsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListMetadataColumnsRequest,
  output: ListMetadataColumnsResponse,
  errors: [],
}));

export interface DeleteManagementRemarketingAudienceRequest {
  /** Account ID to which the remarketing audience belongs. */
  accountId: string;
  /** The ID of the remarketing audience to delete. */
  remarketingAudienceId: string;
  /** Web property ID to which the remarketing audience belongs. */
  webPropertyId: string;
}

export const DeleteManagementRemarketingAudienceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    remarketingAudienceId: Schema.String.pipe(
      T.HttpPath("remarketingAudienceId"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteManagementRemarketingAudienceRequest>;

export interface DeleteManagementRemarketingAudienceResponse {}
export const DeleteManagementRemarketingAudienceResponse: Schema.Schema<DeleteManagementRemarketingAudienceResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteManagementRemarketingAudienceResponse>;

export type DeleteManagementRemarketingAudienceError = DefaultErrors;

/** Delete a remarketing audience. */
export const deleteManagementRemarketingAudience: API.OperationMethod<
  DeleteManagementRemarketingAudienceRequest,
  DeleteManagementRemarketingAudienceResponse,
  DeleteManagementRemarketingAudienceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementRemarketingAudienceRequest,
  output: DeleteManagementRemarketingAudienceResponse,
  errors: [],
}));

export interface UpdateManagementRemarketingAudienceRequest {
  /** The ID of the remarketing audience to update. */
  remarketingAudienceId: string;
  /** The web property ID of the remarketing audience to update. */
  webPropertyId: string;
  /** The account ID of the remarketing audience to update. */
  accountId: string;
  /** Request body */
  body?: RemarketingAudience;
}

export const UpdateManagementRemarketingAudienceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    remarketingAudienceId: Schema.String.pipe(
      T.HttpPath("remarketingAudienceId"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(RemarketingAudience).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateManagementRemarketingAudienceRequest>;

export type UpdateManagementRemarketingAudienceResponse = RemarketingAudience;
export const UpdateManagementRemarketingAudienceResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingAudience;

export type UpdateManagementRemarketingAudienceError = DefaultErrors;

/** Updates an existing remarketing audience. */
export const updateManagementRemarketingAudience: API.OperationMethod<
  UpdateManagementRemarketingAudienceRequest,
  UpdateManagementRemarketingAudienceResponse,
  UpdateManagementRemarketingAudienceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementRemarketingAudienceRequest,
  output: UpdateManagementRemarketingAudienceResponse,
  errors: [],
}));

export interface GetManagementRemarketingAudienceRequest {
  /** The account ID of the remarketing audience to retrieve. */
  accountId: string;
  /** The ID of the remarketing audience to retrieve. */
  remarketingAudienceId: string;
  /** The web property ID of the remarketing audience to retrieve. */
  webPropertyId: string;
}

export const GetManagementRemarketingAudienceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    remarketingAudienceId: Schema.String.pipe(
      T.HttpPath("remarketingAudienceId"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetManagementRemarketingAudienceRequest>;

export type GetManagementRemarketingAudienceResponse = RemarketingAudience;
export const GetManagementRemarketingAudienceResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingAudience;

export type GetManagementRemarketingAudienceError = DefaultErrors;

/** Gets a remarketing audience to which the user has access. */
export const getManagementRemarketingAudience: API.OperationMethod<
  GetManagementRemarketingAudienceRequest,
  GetManagementRemarketingAudienceResponse,
  GetManagementRemarketingAudienceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementRemarketingAudienceRequest,
  output: GetManagementRemarketingAudienceResponse,
  errors: [],
}));

export interface PatchManagementRemarketingAudienceRequest {
  /** The account ID of the remarketing audience to update. */
  accountId: string;
  /** The ID of the remarketing audience to update. */
  remarketingAudienceId: string;
  /** The web property ID of the remarketing audience to update. */
  webPropertyId: string;
  /** Request body */
  body?: RemarketingAudience;
}

export const PatchManagementRemarketingAudienceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    remarketingAudienceId: Schema.String.pipe(
      T.HttpPath("remarketingAudienceId"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    body: Schema.optional(RemarketingAudience).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchManagementRemarketingAudienceRequest>;

export type PatchManagementRemarketingAudienceResponse = RemarketingAudience;
export const PatchManagementRemarketingAudienceResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingAudience;

export type PatchManagementRemarketingAudienceError = DefaultErrors;

/** Updates an existing remarketing audience. This method supports patch semantics. */
export const patchManagementRemarketingAudience: API.OperationMethod<
  PatchManagementRemarketingAudienceRequest,
  PatchManagementRemarketingAudienceResponse,
  PatchManagementRemarketingAudienceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementRemarketingAudienceRequest,
  output: PatchManagementRemarketingAudienceResponse,
  errors: [],
}));

export interface ListManagementRemarketingAudienceRequest {
  /** The account ID of the remarketing audiences to retrieve. */
  accountId: string;
  /** The maximum number of remarketing audiences to include in this response. */
  "max-results"?: number;
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  type?: string;
  /** The web property ID of the remarketing audiences to retrieve. */
  webPropertyId: string;
}

export const ListManagementRemarketingAudienceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagementRemarketingAudienceRequest>;

export type ListManagementRemarketingAudienceResponse = RemarketingAudiences;
export const ListManagementRemarketingAudienceResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingAudiences;

export type ListManagementRemarketingAudienceError = DefaultErrors;

/** Lists remarketing audiences to which the user has access. */
export const listManagementRemarketingAudience: API.OperationMethod<
  ListManagementRemarketingAudienceRequest,
  ListManagementRemarketingAudienceResponse,
  ListManagementRemarketingAudienceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementRemarketingAudienceRequest,
  output: ListManagementRemarketingAudienceResponse,
  errors: [],
}));

export interface InsertManagementRemarketingAudienceRequest {
  /** The account ID for which to create the remarketing audience. */
  accountId: string;
  /** Web property ID for which to create the remarketing audience. */
  webPropertyId: string;
  /** Request body */
  body?: RemarketingAudience;
}

export const InsertManagementRemarketingAudienceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    body: Schema.optional(RemarketingAudience).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertManagementRemarketingAudienceRequest>;

export type InsertManagementRemarketingAudienceResponse = RemarketingAudience;
export const InsertManagementRemarketingAudienceResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingAudience;

export type InsertManagementRemarketingAudienceError = DefaultErrors;

/** Creates a new remarketing audience. */
export const insertManagementRemarketingAudience: API.OperationMethod<
  InsertManagementRemarketingAudienceRequest,
  InsertManagementRemarketingAudienceResponse,
  InsertManagementRemarketingAudienceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementRemarketingAudienceRequest,
  output: InsertManagementRemarketingAudienceResponse,
  errors: [],
}));

export interface GetManagementWebpropertiesRequest {
  /** Account ID to retrieve the web property for. */
  accountId: string;
  /** ID to retrieve the web property for. */
  webPropertyId: string;
}

export const GetManagementWebpropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetManagementWebpropertiesRequest>;

export type GetManagementWebpropertiesResponse = Webproperty;
export const GetManagementWebpropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Webproperty;

export type GetManagementWebpropertiesError = DefaultErrors;

/** Gets a web property to which the user has access. */
export const getManagementWebproperties: API.OperationMethod<
  GetManagementWebpropertiesRequest,
  GetManagementWebpropertiesResponse,
  GetManagementWebpropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementWebpropertiesRequest,
  output: GetManagementWebpropertiesResponse,
  errors: [],
}));

export interface UpdateManagementWebpropertiesRequest {
  /** Account ID to which the web property belongs */
  accountId: string;
  /** Web property ID */
  webPropertyId: string;
  /** Request body */
  body?: Webproperty;
}

export const UpdateManagementWebpropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    body: Schema.optional(Webproperty).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateManagementWebpropertiesRequest>;

export type UpdateManagementWebpropertiesResponse = Webproperty;
export const UpdateManagementWebpropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Webproperty;

export type UpdateManagementWebpropertiesError = DefaultErrors;

/** Updates an existing web property. */
export const updateManagementWebproperties: API.OperationMethod<
  UpdateManagementWebpropertiesRequest,
  UpdateManagementWebpropertiesResponse,
  UpdateManagementWebpropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementWebpropertiesRequest,
  output: UpdateManagementWebpropertiesResponse,
  errors: [],
}));

export interface ListManagementWebpropertiesRequest {
  /** The maximum number of web properties to include in this response. */
  "max-results"?: number;
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to. */
  accountId: string;
}

export const ListManagementWebpropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagementWebpropertiesRequest>;

export type ListManagementWebpropertiesResponse = Webproperties;
export const ListManagementWebpropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Webproperties;

export type ListManagementWebpropertiesError = DefaultErrors;

/** Lists web properties to which the user has access. */
export const listManagementWebproperties: API.OperationMethod<
  ListManagementWebpropertiesRequest,
  ListManagementWebpropertiesResponse,
  ListManagementWebpropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementWebpropertiesRequest,
  output: ListManagementWebpropertiesResponse,
  errors: [],
}));

export interface InsertManagementWebpropertiesRequest {
  /** Account ID to create the web property for. */
  accountId: string;
  /** Request body */
  body?: Webproperty;
}

export const InsertManagementWebpropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(Webproperty).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/accounts/{accountId}/webproperties",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertManagementWebpropertiesRequest>;

export type InsertManagementWebpropertiesResponse = Webproperty;
export const InsertManagementWebpropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Webproperty;

export type InsertManagementWebpropertiesError = DefaultErrors;

/** Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile. */
export const insertManagementWebproperties: API.OperationMethod<
  InsertManagementWebpropertiesRequest,
  InsertManagementWebpropertiesResponse,
  InsertManagementWebpropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementWebpropertiesRequest,
  output: InsertManagementWebpropertiesResponse,
  errors: [],
}));

export interface PatchManagementWebpropertiesRequest {
  /** Account ID to which the web property belongs */
  accountId: string;
  /** Web property ID */
  webPropertyId: string;
  /** Request body */
  body?: Webproperty;
}

export const PatchManagementWebpropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    body: Schema.optional(Webproperty).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchManagementWebpropertiesRequest>;

export type PatchManagementWebpropertiesResponse = Webproperty;
export const PatchManagementWebpropertiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Webproperty;

export type PatchManagementWebpropertiesError = DefaultErrors;

/** Updates an existing web property. This method supports patch semantics. */
export const patchManagementWebproperties: API.OperationMethod<
  PatchManagementWebpropertiesRequest,
  PatchManagementWebpropertiesResponse,
  PatchManagementWebpropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementWebpropertiesRequest,
  output: PatchManagementWebpropertiesResponse,
  errors: [],
}));

export interface ListManagementAccountSummariesRequest {
  /** The maximum number of account summaries to include in this response, where the largest acceptable value is 1000. */
  "max-results"?: number;
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
}

export const ListManagementAccountSummariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "management/accountSummaries" }),
    svc,
  ) as unknown as Schema.Schema<ListManagementAccountSummariesRequest>;

export type ListManagementAccountSummariesResponse = AccountSummaries;
export const ListManagementAccountSummariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountSummaries;

export type ListManagementAccountSummariesError = DefaultErrors;

/** Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access. */
export const listManagementAccountSummaries: API.OperationMethod<
  ListManagementAccountSummariesRequest,
  ListManagementAccountSummariesResponse,
  ListManagementAccountSummariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementAccountSummariesRequest,
  output: ListManagementAccountSummariesResponse,
  errors: [],
}));

export interface DeleteUploadDataManagementUploadsRequest {
  /** Custom data source Id for the uploads to be deleted. */
  customDataSourceId: string;
  /** Account Id for the uploads to be deleted. */
  accountId: string;
  /** Web property Id for the uploads to be deleted. */
  webPropertyId: string;
  /** Request body */
  body?: AnalyticsDataimportDeleteUploadDataRequest;
}

export const DeleteUploadDataManagementUploadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customDataSourceId: Schema.String.pipe(T.HttpPath("customDataSourceId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    body: Schema.optional(AnalyticsDataimportDeleteUploadDataRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/deleteUploadData",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteUploadDataManagementUploadsRequest>;

export interface DeleteUploadDataManagementUploadsResponse {}
export const DeleteUploadDataManagementUploadsResponse: Schema.Schema<DeleteUploadDataManagementUploadsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteUploadDataManagementUploadsResponse>;

export type DeleteUploadDataManagementUploadsError = DefaultErrors;

/** Delete data associated with a previous upload. */
export const deleteUploadDataManagementUploads: API.OperationMethod<
  DeleteUploadDataManagementUploadsRequest,
  DeleteUploadDataManagementUploadsResponse,
  DeleteUploadDataManagementUploadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteUploadDataManagementUploadsRequest,
  output: DeleteUploadDataManagementUploadsResponse,
  errors: [],
}));

export interface UploadDataManagementUploadsRequest {
  /** Account Id associated with the upload. */
  accountId: string;
  /** Custom data source Id to which the data being uploaded belongs. */
  customDataSourceId: string;
  /** Web property UA-string associated with the upload. */
  webPropertyId: string;
}

export const UploadDataManagementUploadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    customDataSourceId: Schema.String.pipe(T.HttpPath("customDataSourceId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UploadDataManagementUploadsRequest>;

export type UploadDataManagementUploadsResponse = Upload;
export const UploadDataManagementUploadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Upload;

export type UploadDataManagementUploadsError = DefaultErrors;

/** Upload data for a custom data source. */
export const uploadDataManagementUploads: API.OperationMethod<
  UploadDataManagementUploadsRequest,
  UploadDataManagementUploadsResponse,
  UploadDataManagementUploadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadDataManagementUploadsRequest,
  output: UploadDataManagementUploadsResponse,
  errors: [],
}));

export interface ListManagementUploadsRequest {
  /** Custom data source Id for uploads to retrieve. */
  customDataSourceId: string;
  /** The maximum number of uploads to include in this response. */
  "max-results"?: number;
  /** Account Id for the uploads to retrieve. */
  accountId: string;
  /** Web property Id for the uploads to retrieve. */
  webPropertyId: string;
  /** A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
}

export const ListManagementUploadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customDataSourceId: Schema.String.pipe(T.HttpPath("customDataSourceId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagementUploadsRequest>;

export type ListManagementUploadsResponse = Uploads;
export const ListManagementUploadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Uploads;

export type ListManagementUploadsError = DefaultErrors;

/** List uploads to which the user has access. */
export const listManagementUploads: API.OperationMethod<
  ListManagementUploadsRequest,
  ListManagementUploadsResponse,
  ListManagementUploadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementUploadsRequest,
  output: ListManagementUploadsResponse,
  errors: [],
}));

export interface GetManagementUploadsRequest {
  /** Web property Id for the upload to retrieve. */
  webPropertyId: string;
  /** Custom data source Id for upload to retrieve. */
  customDataSourceId: string;
  /** Upload Id to retrieve. */
  uploadId: string;
  /** Account Id for the upload to retrieve. */
  accountId: string;
}

export const GetManagementUploadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    customDataSourceId: Schema.String.pipe(T.HttpPath("customDataSourceId")),
    uploadId: Schema.String.pipe(T.HttpPath("uploadId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads/{uploadId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetManagementUploadsRequest>;

export type GetManagementUploadsResponse = Upload;
export const GetManagementUploadsResponse = /*@__PURE__*/ /*#__PURE__*/ Upload;

export type GetManagementUploadsError = DefaultErrors;

/** List uploads to which the user has access. */
export const getManagementUploads: API.OperationMethod<
  GetManagementUploadsRequest,
  GetManagementUploadsResponse,
  GetManagementUploadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementUploadsRequest,
  output: GetManagementUploadsResponse,
  errors: [],
}));

export interface DeleteManagementProfileUserLinksRequest {
  /** View (Profile) ID to delete the user link for. */
  profileId: string;
  /** Web Property ID to delete the user link for. */
  webPropertyId: string;
  /** Link ID to delete the user link for. */
  linkId: string;
  /** Account ID to delete the user link for. */
  accountId: string;
}

export const DeleteManagementProfileUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteManagementProfileUserLinksRequest>;

export interface DeleteManagementProfileUserLinksResponse {}
export const DeleteManagementProfileUserLinksResponse: Schema.Schema<DeleteManagementProfileUserLinksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteManagementProfileUserLinksResponse>;

export type DeleteManagementProfileUserLinksError = DefaultErrors;

/** Removes a user from the given view (profile). */
export const deleteManagementProfileUserLinks: API.OperationMethod<
  DeleteManagementProfileUserLinksRequest,
  DeleteManagementProfileUserLinksResponse,
  DeleteManagementProfileUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementProfileUserLinksRequest,
  output: DeleteManagementProfileUserLinksResponse,
  errors: [],
}));

export interface UpdateManagementProfileUserLinksRequest {
  /** View (Profile ID) to update the user link for. */
  profileId: string;
  /** Web Property ID to update the user link for. */
  webPropertyId: string;
  /** Link ID to update the user link for. */
  linkId: string;
  /** Account ID to update the user link for. */
  accountId: string;
  /** Request body */
  body?: EntityUserLink;
}

export const UpdateManagementProfileUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(EntityUserLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateManagementProfileUserLinksRequest>;

export type UpdateManagementProfileUserLinksResponse = EntityUserLink;
export const UpdateManagementProfileUserLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntityUserLink;

export type UpdateManagementProfileUserLinksError = DefaultErrors;

/** Updates permissions for an existing user on the given view (profile). */
export const updateManagementProfileUserLinks: API.OperationMethod<
  UpdateManagementProfileUserLinksRequest,
  UpdateManagementProfileUserLinksResponse,
  UpdateManagementProfileUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementProfileUserLinksRequest,
  output: UpdateManagementProfileUserLinksResponse,
  errors: [],
}));

export interface ListManagementProfileUserLinksRequest {
  /** The maximum number of profile-user links to include in this response. */
  "max-results"?: number;
  /** Account ID which the given view (profile) belongs to. */
  accountId: string;
  /** View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to. */
  profileId: string;
  /** An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to. */
  webPropertyId: string;
}

export const ListManagementProfileUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagementProfileUserLinksRequest>;

export type ListManagementProfileUserLinksResponse = EntityUserLinks;
export const ListManagementProfileUserLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntityUserLinks;

export type ListManagementProfileUserLinksError = DefaultErrors;

/** Lists profile-user links for a given view (profile). */
export const listManagementProfileUserLinks: API.OperationMethod<
  ListManagementProfileUserLinksRequest,
  ListManagementProfileUserLinksResponse,
  ListManagementProfileUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementProfileUserLinksRequest,
  output: ListManagementProfileUserLinksResponse,
  errors: [],
}));

export interface InsertManagementProfileUserLinksRequest {
  /** Account ID to create the user link for. */
  accountId: string;
  /** Web Property ID to create the user link for. */
  webPropertyId: string;
  /** View (Profile) ID to create the user link for. */
  profileId: string;
  /** Request body */
  body?: EntityUserLink;
}

export const InsertManagementProfileUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(EntityUserLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertManagementProfileUserLinksRequest>;

export type InsertManagementProfileUserLinksResponse = EntityUserLink;
export const InsertManagementProfileUserLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntityUserLink;

export type InsertManagementProfileUserLinksError = DefaultErrors;

/** Adds a new user to the given view (profile). */
export const insertManagementProfileUserLinks: API.OperationMethod<
  InsertManagementProfileUserLinksRequest,
  InsertManagementProfileUserLinksResponse,
  InsertManagementProfileUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementProfileUserLinksRequest,
  output: InsertManagementProfileUserLinksResponse,
  errors: [],
}));

export interface GetManagementUnsampledReportsRequest {
  /** Account ID to retrieve unsampled report for. */
  accountId: string;
  /** ID of the unsampled report to retrieve. */
  unsampledReportId: string;
  /** Web property ID to retrieve unsampled reports for. */
  webPropertyId: string;
  /** View (Profile) ID to retrieve unsampled report for. */
  profileId: string;
}

export const GetManagementUnsampledReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    unsampledReportId: Schema.String.pipe(T.HttpPath("unsampledReportId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetManagementUnsampledReportsRequest>;

export type GetManagementUnsampledReportsResponse = UnsampledReport;
export const GetManagementUnsampledReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UnsampledReport;

export type GetManagementUnsampledReportsError = DefaultErrors;

/** Returns a single unsampled report. */
export const getManagementUnsampledReports: API.OperationMethod<
  GetManagementUnsampledReportsRequest,
  GetManagementUnsampledReportsResponse,
  GetManagementUnsampledReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementUnsampledReportsRequest,
  output: GetManagementUnsampledReportsResponse,
  errors: [],
}));

export interface InsertManagementUnsampledReportsRequest {
  /** View (Profile) ID to create the unsampled report for. */
  profileId: string;
  /** Web property ID to create the unsampled report for. */
  webPropertyId: string;
  /** Account ID to create the unsampled report for. */
  accountId: string;
  /** Request body */
  body?: UnsampledReport;
}

export const InsertManagementUnsampledReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(UnsampledReport).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertManagementUnsampledReportsRequest>;

export type InsertManagementUnsampledReportsResponse = UnsampledReport;
export const InsertManagementUnsampledReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UnsampledReport;

export type InsertManagementUnsampledReportsError = DefaultErrors;

/** Create a new unsampled report. */
export const insertManagementUnsampledReports: API.OperationMethod<
  InsertManagementUnsampledReportsRequest,
  InsertManagementUnsampledReportsResponse,
  InsertManagementUnsampledReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementUnsampledReportsRequest,
  output: InsertManagementUnsampledReportsResponse,
  errors: [],
}));

export interface ListManagementUnsampledReportsRequest {
  /** View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported. */
  profileId: string;
  /** The maximum number of unsampled reports to include in this response. */
  "max-results"?: number;
  /** Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported. */
  accountId: string;
  /** Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported. */
  webPropertyId: string;
  /** An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
}

export const ListManagementUnsampledReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagementUnsampledReportsRequest>;

export type ListManagementUnsampledReportsResponse = UnsampledReports;
export const ListManagementUnsampledReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UnsampledReports;

export type ListManagementUnsampledReportsError = DefaultErrors;

/** Lists unsampled reports to which the user has access. */
export const listManagementUnsampledReports: API.OperationMethod<
  ListManagementUnsampledReportsRequest,
  ListManagementUnsampledReportsResponse,
  ListManagementUnsampledReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementUnsampledReportsRequest,
  output: ListManagementUnsampledReportsResponse,
  errors: [],
}));

export interface DeleteManagementUnsampledReportsRequest {
  /** View (Profile) ID to delete the unsampled report for. */
  profileId: string;
  /** Web property ID to delete the unsampled reports for. */
  webPropertyId: string;
  /** ID of the unsampled report to be deleted. */
  unsampledReportId: string;
  /** Account ID to delete the unsampled report for. */
  accountId: string;
}

export const DeleteManagementUnsampledReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    unsampledReportId: Schema.String.pipe(T.HttpPath("unsampledReportId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteManagementUnsampledReportsRequest>;

export interface DeleteManagementUnsampledReportsResponse {}
export const DeleteManagementUnsampledReportsResponse: Schema.Schema<DeleteManagementUnsampledReportsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteManagementUnsampledReportsResponse>;

export type DeleteManagementUnsampledReportsError = DefaultErrors;

/** Deletes an unsampled report. */
export const deleteManagementUnsampledReports: API.OperationMethod<
  DeleteManagementUnsampledReportsRequest,
  DeleteManagementUnsampledReportsResponse,
  DeleteManagementUnsampledReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementUnsampledReportsRequest,
  output: DeleteManagementUnsampledReportsResponse,
  errors: [],
}));

export interface PatchManagementGoalsRequest {
  /** View (Profile) ID to update the goal. */
  profileId: string;
  /** Index of the goal to be updated. */
  goalId: string;
  /** Web property ID to update the goal. */
  webPropertyId: string;
  /** Account ID to update the goal. */
  accountId: string;
  /** Request body */
  body?: Goal;
}

export const PatchManagementGoalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    goalId: Schema.String.pipe(T.HttpPath("goalId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(Goal).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchManagementGoalsRequest>;

export type PatchManagementGoalsResponse = Goal;
export const PatchManagementGoalsResponse = /*@__PURE__*/ /*#__PURE__*/ Goal;

export type PatchManagementGoalsError = DefaultErrors;

/** Updates an existing goal. This method supports patch semantics. */
export const patchManagementGoals: API.OperationMethod<
  PatchManagementGoalsRequest,
  PatchManagementGoalsResponse,
  PatchManagementGoalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementGoalsRequest,
  output: PatchManagementGoalsResponse,
  errors: [],
}));

export interface InsertManagementGoalsRequest {
  /** Account ID to create the goal for. */
  accountId: string;
  /** Web property ID to create the goal for. */
  webPropertyId: string;
  /** View (Profile) ID to create the goal for. */
  profileId: string;
  /** Request body */
  body?: Goal;
}

export const InsertManagementGoalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(Goal).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertManagementGoalsRequest>;

export type InsertManagementGoalsResponse = Goal;
export const InsertManagementGoalsResponse = /*@__PURE__*/ /*#__PURE__*/ Goal;

export type InsertManagementGoalsError = DefaultErrors;

/** Create a new goal. */
export const insertManagementGoals: API.OperationMethod<
  InsertManagementGoalsRequest,
  InsertManagementGoalsResponse,
  InsertManagementGoalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementGoalsRequest,
  output: InsertManagementGoalsResponse,
  errors: [],
}));

export interface ListManagementGoalsRequest {
  /** View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to. */
  profileId: string;
  /** The maximum number of goals to include in this response. */
  "max-results"?: number;
  /** Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to. */
  accountId: string;
  /** Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to. */
  webPropertyId: string;
  /** An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
}

export const ListManagementGoalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagementGoalsRequest>;

export type ListManagementGoalsResponse = Goals;
export const ListManagementGoalsResponse = /*@__PURE__*/ /*#__PURE__*/ Goals;

export type ListManagementGoalsError = DefaultErrors;

/** Lists goals to which the user has access. */
export const listManagementGoals: API.OperationMethod<
  ListManagementGoalsRequest,
  ListManagementGoalsResponse,
  ListManagementGoalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementGoalsRequest,
  output: ListManagementGoalsResponse,
  errors: [],
}));

export interface UpdateManagementGoalsRequest {
  /** Index of the goal to be updated. */
  goalId: string;
  /** Web property ID to update the goal. */
  webPropertyId: string;
  /** View (Profile) ID to update the goal. */
  profileId: string;
  /** Account ID to update the goal. */
  accountId: string;
  /** Request body */
  body?: Goal;
}

export const UpdateManagementGoalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    goalId: Schema.String.pipe(T.HttpPath("goalId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(Goal).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateManagementGoalsRequest>;

export type UpdateManagementGoalsResponse = Goal;
export const UpdateManagementGoalsResponse = /*@__PURE__*/ /*#__PURE__*/ Goal;

export type UpdateManagementGoalsError = DefaultErrors;

/** Updates an existing goal. */
export const updateManagementGoals: API.OperationMethod<
  UpdateManagementGoalsRequest,
  UpdateManagementGoalsResponse,
  UpdateManagementGoalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementGoalsRequest,
  output: UpdateManagementGoalsResponse,
  errors: [],
}));

export interface GetManagementGoalsRequest {
  /** Account ID to retrieve the goal for. */
  accountId: string;
  /** Goal ID to retrieve the goal for. */
  goalId: string;
  /** Web property ID to retrieve the goal for. */
  webPropertyId: string;
  /** View (Profile) ID to retrieve the goal for. */
  profileId: string;
}

export const GetManagementGoalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    goalId: Schema.String.pipe(T.HttpPath("goalId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetManagementGoalsRequest>;

export type GetManagementGoalsResponse = Goal;
export const GetManagementGoalsResponse = /*@__PURE__*/ /*#__PURE__*/ Goal;

export type GetManagementGoalsError = DefaultErrors;

/** Gets a goal to which the user has access. */
export const getManagementGoals: API.OperationMethod<
  GetManagementGoalsRequest,
  GetManagementGoalsResponse,
  GetManagementGoalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementGoalsRequest,
  output: GetManagementGoalsResponse,
  errors: [],
}));

export interface ListManagementWebpropertyUserLinksRequest {
  /** Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to. */
  webPropertyId: string;
  /** Account ID which the given web property belongs to. */
  accountId: string;
  /** The maximum number of webProperty-user Links to include in this response. */
  "max-results"?: number;
  /** An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
}

export const ListManagementWebpropertyUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagementWebpropertyUserLinksRequest>;

export type ListManagementWebpropertyUserLinksResponse = EntityUserLinks;
export const ListManagementWebpropertyUserLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntityUserLinks;

export type ListManagementWebpropertyUserLinksError = DefaultErrors;

/** Lists webProperty-user links for a given web property. */
export const listManagementWebpropertyUserLinks: API.OperationMethod<
  ListManagementWebpropertyUserLinksRequest,
  ListManagementWebpropertyUserLinksResponse,
  ListManagementWebpropertyUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementWebpropertyUserLinksRequest,
  output: ListManagementWebpropertyUserLinksResponse,
  errors: [],
}));

export interface InsertManagementWebpropertyUserLinksRequest {
  /** Account ID to create the user link for. */
  accountId: string;
  /** Web Property ID to create the user link for. */
  webPropertyId: string;
  /** Request body */
  body?: EntityUserLink;
}

export const InsertManagementWebpropertyUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    body: Schema.optional(EntityUserLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertManagementWebpropertyUserLinksRequest>;

export type InsertManagementWebpropertyUserLinksResponse = EntityUserLink;
export const InsertManagementWebpropertyUserLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntityUserLink;

export type InsertManagementWebpropertyUserLinksError = DefaultErrors;

/** Adds a new user to the given web property. */
export const insertManagementWebpropertyUserLinks: API.OperationMethod<
  InsertManagementWebpropertyUserLinksRequest,
  InsertManagementWebpropertyUserLinksResponse,
  InsertManagementWebpropertyUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementWebpropertyUserLinksRequest,
  output: InsertManagementWebpropertyUserLinksResponse,
  errors: [],
}));

export interface DeleteManagementWebpropertyUserLinksRequest {
  /** Account ID to delete the user link for. */
  accountId: string;
  /** Link ID to delete the user link for. */
  linkId: string;
  /** Web Property ID to delete the user link for. */
  webPropertyId: string;
}

export const DeleteManagementWebpropertyUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteManagementWebpropertyUserLinksRequest>;

export interface DeleteManagementWebpropertyUserLinksResponse {}
export const DeleteManagementWebpropertyUserLinksResponse: Schema.Schema<DeleteManagementWebpropertyUserLinksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteManagementWebpropertyUserLinksResponse>;

export type DeleteManagementWebpropertyUserLinksError = DefaultErrors;

/** Removes a user from the given web property. */
export const deleteManagementWebpropertyUserLinks: API.OperationMethod<
  DeleteManagementWebpropertyUserLinksRequest,
  DeleteManagementWebpropertyUserLinksResponse,
  DeleteManagementWebpropertyUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementWebpropertyUserLinksRequest,
  output: DeleteManagementWebpropertyUserLinksResponse,
  errors: [],
}));

export interface UpdateManagementWebpropertyUserLinksRequest {
  /** Web property ID to update the account-user link for. */
  webPropertyId: string;
  /** Link ID to update the account-user link for. */
  linkId: string;
  /** Account ID to update the account-user link for. */
  accountId: string;
  /** Request body */
  body?: EntityUserLink;
}

export const UpdateManagementWebpropertyUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(EntityUserLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateManagementWebpropertyUserLinksRequest>;

export type UpdateManagementWebpropertyUserLinksResponse = EntityUserLink;
export const UpdateManagementWebpropertyUserLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntityUserLink;

export type UpdateManagementWebpropertyUserLinksError = DefaultErrors;

/** Updates permissions for an existing user on the given web property. */
export const updateManagementWebpropertyUserLinks: API.OperationMethod<
  UpdateManagementWebpropertyUserLinksRequest,
  UpdateManagementWebpropertyUserLinksResponse,
  UpdateManagementWebpropertyUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementWebpropertyUserLinksRequest,
  output: UpdateManagementWebpropertyUserLinksResponse,
  errors: [],
}));

export interface ListManagementAccountsRequest {
  /** The maximum number of accounts to include in this response. */
  "max-results"?: number;
  /** An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
}

export const ListManagementAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "management/accounts" }),
    svc,
  ) as unknown as Schema.Schema<ListManagementAccountsRequest>;

export type ListManagementAccountsResponse = Accounts;
export const ListManagementAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Accounts;

export type ListManagementAccountsError = DefaultErrors;

/** Lists all accounts to which the user has access. */
export const listManagementAccounts: API.OperationMethod<
  ListManagementAccountsRequest,
  ListManagementAccountsResponse,
  ListManagementAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementAccountsRequest,
  output: ListManagementAccountsResponse,
  errors: [],
}));

export interface UpdateManagementCustomMetricsRequest {
  /** Account ID for the custom metric to update. */
  accountId: string;
  /** Custom metric ID for the custom metric to update. */
  customMetricId: string;
  /** Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set. */
  ignoreCustomDataSourceLinks?: boolean;
  /** Web property ID for the custom metric to update. */
  webPropertyId: string;
  /** Request body */
  body?: CustomMetric;
}

export const UpdateManagementCustomMetricsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    customMetricId: Schema.String.pipe(T.HttpPath("customMetricId")),
    ignoreCustomDataSourceLinks: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ignoreCustomDataSourceLinks"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    body: Schema.optional(CustomMetric).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateManagementCustomMetricsRequest>;

export type UpdateManagementCustomMetricsResponse = CustomMetric;
export const UpdateManagementCustomMetricsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomMetric;

export type UpdateManagementCustomMetricsError = DefaultErrors;

/** Updates an existing custom metric. */
export const updateManagementCustomMetrics: API.OperationMethod<
  UpdateManagementCustomMetricsRequest,
  UpdateManagementCustomMetricsResponse,
  UpdateManagementCustomMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementCustomMetricsRequest,
  output: UpdateManagementCustomMetricsResponse,
  errors: [],
}));

export interface GetManagementCustomMetricsRequest {
  /** Web property ID for the custom metric to retrieve. */
  webPropertyId: string;
  /** Account ID for the custom metric to retrieve. */
  accountId: string;
  /** The ID of the custom metric to retrieve. */
  customMetricId: string;
}

export const GetManagementCustomMetricsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    customMetricId: Schema.String.pipe(T.HttpPath("customMetricId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetManagementCustomMetricsRequest>;

export type GetManagementCustomMetricsResponse = CustomMetric;
export const GetManagementCustomMetricsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomMetric;

export type GetManagementCustomMetricsError = DefaultErrors;

/** Get a custom metric to which the user has access. */
export const getManagementCustomMetrics: API.OperationMethod<
  GetManagementCustomMetricsRequest,
  GetManagementCustomMetricsResponse,
  GetManagementCustomMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementCustomMetricsRequest,
  output: GetManagementCustomMetricsResponse,
  errors: [],
}));

export interface PatchManagementCustomMetricsRequest {
  /** Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set. */
  ignoreCustomDataSourceLinks?: boolean;
  /** Web property ID for the custom metric to update. */
  webPropertyId: string;
  /** Account ID for the custom metric to update. */
  accountId: string;
  /** Custom metric ID for the custom metric to update. */
  customMetricId: string;
  /** Request body */
  body?: CustomMetric;
}

export const PatchManagementCustomMetricsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ignoreCustomDataSourceLinks: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ignoreCustomDataSourceLinks"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    customMetricId: Schema.String.pipe(T.HttpPath("customMetricId")),
    body: Schema.optional(CustomMetric).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchManagementCustomMetricsRequest>;

export type PatchManagementCustomMetricsResponse = CustomMetric;
export const PatchManagementCustomMetricsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomMetric;

export type PatchManagementCustomMetricsError = DefaultErrors;

/** Updates an existing custom metric. This method supports patch semantics. */
export const patchManagementCustomMetrics: API.OperationMethod<
  PatchManagementCustomMetricsRequest,
  PatchManagementCustomMetricsResponse,
  PatchManagementCustomMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementCustomMetricsRequest,
  output: PatchManagementCustomMetricsResponse,
  errors: [],
}));

export interface ListManagementCustomMetricsRequest {
  /** Web property ID for the custom metrics to retrieve. */
  webPropertyId: string;
  /** The maximum number of custom metrics to include in this response. */
  "max-results"?: number;
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** Account ID for the custom metrics to retrieve. */
  accountId: string;
}

export const ListManagementCustomMetricsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagementCustomMetricsRequest>;

export type ListManagementCustomMetricsResponse = CustomMetrics;
export const ListManagementCustomMetricsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomMetrics;

export type ListManagementCustomMetricsError = DefaultErrors;

/** Lists custom metrics to which the user has access. */
export const listManagementCustomMetrics: API.OperationMethod<
  ListManagementCustomMetricsRequest,
  ListManagementCustomMetricsResponse,
  ListManagementCustomMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementCustomMetricsRequest,
  output: ListManagementCustomMetricsResponse,
  errors: [],
}));

export interface InsertManagementCustomMetricsRequest {
  /** Account ID for the custom metric to create. */
  accountId: string;
  /** Web property ID for the custom dimension to create. */
  webPropertyId: string;
  /** Request body */
  body?: CustomMetric;
}

export const InsertManagementCustomMetricsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    body: Schema.optional(CustomMetric).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertManagementCustomMetricsRequest>;

export type InsertManagementCustomMetricsResponse = CustomMetric;
export const InsertManagementCustomMetricsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomMetric;

export type InsertManagementCustomMetricsError = DefaultErrors;

/** Create a new custom metric. */
export const insertManagementCustomMetrics: API.OperationMethod<
  InsertManagementCustomMetricsRequest,
  InsertManagementCustomMetricsResponse,
  InsertManagementCustomMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementCustomMetricsRequest,
  output: InsertManagementCustomMetricsResponse,
  errors: [],
}));

export interface DeleteManagementAccountUserLinksRequest {
  /** Account ID to delete the user link for. */
  accountId: string;
  /** Link ID to delete the user link for. */
  linkId: string;
}

export const DeleteManagementAccountUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "management/accounts/{accountId}/entityUserLinks/{linkId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteManagementAccountUserLinksRequest>;

export interface DeleteManagementAccountUserLinksResponse {}
export const DeleteManagementAccountUserLinksResponse: Schema.Schema<DeleteManagementAccountUserLinksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteManagementAccountUserLinksResponse>;

export type DeleteManagementAccountUserLinksError = DefaultErrors;

/** Removes a user from the given account. */
export const deleteManagementAccountUserLinks: API.OperationMethod<
  DeleteManagementAccountUserLinksRequest,
  DeleteManagementAccountUserLinksResponse,
  DeleteManagementAccountUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementAccountUserLinksRequest,
  output: DeleteManagementAccountUserLinksResponse,
  errors: [],
}));

export interface UpdateManagementAccountUserLinksRequest {
  /** Account ID to update the account-user link for. */
  accountId: string;
  /** Link ID to update the account-user link for. */
  linkId: string;
  /** Request body */
  body?: EntityUserLink;
}

export const UpdateManagementAccountUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
    body: Schema.optional(EntityUserLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "management/accounts/{accountId}/entityUserLinks/{linkId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateManagementAccountUserLinksRequest>;

export type UpdateManagementAccountUserLinksResponse = EntityUserLink;
export const UpdateManagementAccountUserLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntityUserLink;

export type UpdateManagementAccountUserLinksError = DefaultErrors;

/** Updates permissions for an existing user on the given account. */
export const updateManagementAccountUserLinks: API.OperationMethod<
  UpdateManagementAccountUserLinksRequest,
  UpdateManagementAccountUserLinksResponse,
  UpdateManagementAccountUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementAccountUserLinksRequest,
  output: UpdateManagementAccountUserLinksResponse,
  errors: [],
}));

export interface ListManagementAccountUserLinksRequest {
  /** The maximum number of account-user links to include in this response. */
  "max-results"?: number;
  /** An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** Account ID to retrieve the user links for. */
  accountId: string;
}

export const ListManagementAccountUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/entityUserLinks",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagementAccountUserLinksRequest>;

export type ListManagementAccountUserLinksResponse = EntityUserLinks;
export const ListManagementAccountUserLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntityUserLinks;

export type ListManagementAccountUserLinksError = DefaultErrors;

/** Lists account-user links for a given account. */
export const listManagementAccountUserLinks: API.OperationMethod<
  ListManagementAccountUserLinksRequest,
  ListManagementAccountUserLinksResponse,
  ListManagementAccountUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementAccountUserLinksRequest,
  output: ListManagementAccountUserLinksResponse,
  errors: [],
}));

export interface InsertManagementAccountUserLinksRequest {
  /** Account ID to create the user link for. */
  accountId: string;
  /** Request body */
  body?: EntityUserLink;
}

export const InsertManagementAccountUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(EntityUserLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/accounts/{accountId}/entityUserLinks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertManagementAccountUserLinksRequest>;

export type InsertManagementAccountUserLinksResponse = EntityUserLink;
export const InsertManagementAccountUserLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntityUserLink;

export type InsertManagementAccountUserLinksError = DefaultErrors;

/** Adds a new user to the given account. */
export const insertManagementAccountUserLinks: API.OperationMethod<
  InsertManagementAccountUserLinksRequest,
  InsertManagementAccountUserLinksResponse,
  InsertManagementAccountUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementAccountUserLinksRequest,
  output: InsertManagementAccountUserLinksResponse,
  errors: [],
}));

export interface ListManagementProfileFilterLinksRequest {
  /** Account ID to retrieve profile filter links for. */
  accountId: string;
  /** The maximum number of profile filter links to include in this response. */
  "max-results"?: number;
  /** Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to. */
  profileId: string;
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to. */
  webPropertyId: string;
}

export const ListManagementProfileFilterLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagementProfileFilterLinksRequest>;

export type ListManagementProfileFilterLinksResponse = ProfileFilterLinks;
export const ListManagementProfileFilterLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProfileFilterLinks;

export type ListManagementProfileFilterLinksError = DefaultErrors;

/** Lists all profile filter links for a profile. */
export const listManagementProfileFilterLinks: API.OperationMethod<
  ListManagementProfileFilterLinksRequest,
  ListManagementProfileFilterLinksResponse,
  ListManagementProfileFilterLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementProfileFilterLinksRequest,
  output: ListManagementProfileFilterLinksResponse,
  errors: [],
}));

export interface InsertManagementProfileFilterLinksRequest {
  /** Web property Id to create profile filter link for. */
  webPropertyId: string;
  /** Profile ID to create filter link for. */
  profileId: string;
  /** Account ID to create profile filter link for. */
  accountId: string;
  /** Request body */
  body?: ProfileFilterLink;
}

export const InsertManagementProfileFilterLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(ProfileFilterLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertManagementProfileFilterLinksRequest>;

export type InsertManagementProfileFilterLinksResponse = ProfileFilterLink;
export const InsertManagementProfileFilterLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProfileFilterLink;

export type InsertManagementProfileFilterLinksError = DefaultErrors;

/** Create a new profile filter link. */
export const insertManagementProfileFilterLinks: API.OperationMethod<
  InsertManagementProfileFilterLinksRequest,
  InsertManagementProfileFilterLinksResponse,
  InsertManagementProfileFilterLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementProfileFilterLinksRequest,
  output: InsertManagementProfileFilterLinksResponse,
  errors: [],
}));

export interface PatchManagementProfileFilterLinksRequest {
  /** Profile ID to which filter link belongs */
  profileId: string;
  /** Web property Id to which profile filter link belongs */
  webPropertyId: string;
  /** ID of the profile filter link to be updated. */
  linkId: string;
  /** Account ID to which profile filter link belongs. */
  accountId: string;
  /** Request body */
  body?: ProfileFilterLink;
}

export const PatchManagementProfileFilterLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(ProfileFilterLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchManagementProfileFilterLinksRequest>;

export type PatchManagementProfileFilterLinksResponse = ProfileFilterLink;
export const PatchManagementProfileFilterLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProfileFilterLink;

export type PatchManagementProfileFilterLinksError = DefaultErrors;

/** Update an existing profile filter link. This method supports patch semantics. */
export const patchManagementProfileFilterLinks: API.OperationMethod<
  PatchManagementProfileFilterLinksRequest,
  PatchManagementProfileFilterLinksResponse,
  PatchManagementProfileFilterLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementProfileFilterLinksRequest,
  output: PatchManagementProfileFilterLinksResponse,
  errors: [],
}));

export interface GetManagementProfileFilterLinksRequest {
  /** Web property Id to retrieve profile filter link for. */
  webPropertyId: string;
  /** Profile ID to retrieve filter link for. */
  profileId: string;
  /** Account ID to retrieve profile filter link for. */
  accountId: string;
  /** ID of the profile filter link. */
  linkId: string;
}

export const GetManagementProfileFilterLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetManagementProfileFilterLinksRequest>;

export type GetManagementProfileFilterLinksResponse = ProfileFilterLink;
export const GetManagementProfileFilterLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProfileFilterLink;

export type GetManagementProfileFilterLinksError = DefaultErrors;

/** Returns a single profile filter link. */
export const getManagementProfileFilterLinks: API.OperationMethod<
  GetManagementProfileFilterLinksRequest,
  GetManagementProfileFilterLinksResponse,
  GetManagementProfileFilterLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementProfileFilterLinksRequest,
  output: GetManagementProfileFilterLinksResponse,
  errors: [],
}));

export interface DeleteManagementProfileFilterLinksRequest {
  /** Web property Id to which the profile filter link belongs. */
  webPropertyId: string;
  /** Profile ID to which the filter link belongs. */
  profileId: string;
  /** Account ID to which the profile filter link belongs. */
  accountId: string;
  /** ID of the profile filter link to delete. */
  linkId: string;
}

export const DeleteManagementProfileFilterLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteManagementProfileFilterLinksRequest>;

export interface DeleteManagementProfileFilterLinksResponse {}
export const DeleteManagementProfileFilterLinksResponse: Schema.Schema<DeleteManagementProfileFilterLinksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteManagementProfileFilterLinksResponse>;

export type DeleteManagementProfileFilterLinksError = DefaultErrors;

/** Delete a profile filter link. */
export const deleteManagementProfileFilterLinks: API.OperationMethod<
  DeleteManagementProfileFilterLinksRequest,
  DeleteManagementProfileFilterLinksResponse,
  DeleteManagementProfileFilterLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementProfileFilterLinksRequest,
  output: DeleteManagementProfileFilterLinksResponse,
  errors: [],
}));

export interface UpdateManagementProfileFilterLinksRequest {
  /** Profile ID to which filter link belongs */
  profileId: string;
  /** Web property Id to which profile filter link belongs */
  webPropertyId: string;
  /** ID of the profile filter link to be updated. */
  linkId: string;
  /** Account ID to which profile filter link belongs. */
  accountId: string;
  /** Request body */
  body?: ProfileFilterLink;
}

export const UpdateManagementProfileFilterLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(ProfileFilterLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateManagementProfileFilterLinksRequest>;

export type UpdateManagementProfileFilterLinksResponse = ProfileFilterLink;
export const UpdateManagementProfileFilterLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProfileFilterLink;

export type UpdateManagementProfileFilterLinksError = DefaultErrors;

/** Update an existing profile filter link. */
export const updateManagementProfileFilterLinks: API.OperationMethod<
  UpdateManagementProfileFilterLinksRequest,
  UpdateManagementProfileFilterLinksResponse,
  UpdateManagementProfileFilterLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementProfileFilterLinksRequest,
  output: UpdateManagementProfileFilterLinksResponse,
  errors: [],
}));

export interface GetManagementProfilesRequest {
  /** Account ID to retrieve the view (profile) for. */
  accountId: string;
  /** View (Profile) ID to retrieve the view (profile) for. */
  profileId: string;
  /** Web property ID to retrieve the view (profile) for. */
  webPropertyId: string;
}

export const GetManagementProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetManagementProfilesRequest>;

export type GetManagementProfilesResponse = Profile;
export const GetManagementProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Profile;

export type GetManagementProfilesError = DefaultErrors;

/** Gets a view (profile) to which the user has access. */
export const getManagementProfiles: API.OperationMethod<
  GetManagementProfilesRequest,
  GetManagementProfilesResponse,
  GetManagementProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementProfilesRequest,
  output: GetManagementProfilesResponse,
  errors: [],
}));

export interface DeleteManagementProfilesRequest {
  /** Web property ID to delete the view (profile) for. */
  webPropertyId: string;
  /** ID of the view (profile) to be deleted. */
  profileId: string;
  /** Account ID to delete the view (profile) for. */
  accountId: string;
}

export const DeleteManagementProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteManagementProfilesRequest>;

export interface DeleteManagementProfilesResponse {}
export const DeleteManagementProfilesResponse: Schema.Schema<DeleteManagementProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteManagementProfilesResponse>;

export type DeleteManagementProfilesError = DefaultErrors;

/** Deletes a view (profile). */
export const deleteManagementProfiles: API.OperationMethod<
  DeleteManagementProfilesRequest,
  DeleteManagementProfilesResponse,
  DeleteManagementProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementProfilesRequest,
  output: DeleteManagementProfilesResponse,
  errors: [],
}));

export interface UpdateManagementProfilesRequest {
  /** Account ID to which the view (profile) belongs */
  accountId: string;
  /** ID of the view (profile) to be updated. */
  profileId: string;
  /** Web property ID to which the view (profile) belongs */
  webPropertyId: string;
  /** Request body */
  body?: Profile;
}

export const UpdateManagementProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    body: Schema.optional(Profile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateManagementProfilesRequest>;

export type UpdateManagementProfilesResponse = Profile;
export const UpdateManagementProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Profile;

export type UpdateManagementProfilesError = DefaultErrors;

/** Updates an existing view (profile). */
export const updateManagementProfiles: API.OperationMethod<
  UpdateManagementProfilesRequest,
  UpdateManagementProfilesResponse,
  UpdateManagementProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementProfilesRequest,
  output: UpdateManagementProfilesResponse,
  errors: [],
}));

export interface ListManagementProfilesRequest {
  /** Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access. */
  webPropertyId: string;
  /** Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access. */
  accountId: string;
  /** The maximum number of views (profiles) to include in this response. */
  "max-results"?: number;
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
}

export const ListManagementProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagementProfilesRequest>;

export type ListManagementProfilesResponse = Profiles;
export const ListManagementProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Profiles;

export type ListManagementProfilesError = DefaultErrors;

/** Lists views (profiles) to which the user has access. */
export const listManagementProfiles: API.OperationMethod<
  ListManagementProfilesRequest,
  ListManagementProfilesResponse,
  ListManagementProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementProfilesRequest,
  output: ListManagementProfilesResponse,
  errors: [],
}));

export interface InsertManagementProfilesRequest {
  /** Account ID to create the view (profile) for. */
  accountId: string;
  /** Web property ID to create the view (profile) for. */
  webPropertyId: string;
  /** Request body */
  body?: Profile;
}

export const InsertManagementProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    body: Schema.optional(Profile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertManagementProfilesRequest>;

export type InsertManagementProfilesResponse = Profile;
export const InsertManagementProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Profile;

export type InsertManagementProfilesError = DefaultErrors;

/** Create a new view (profile). */
export const insertManagementProfiles: API.OperationMethod<
  InsertManagementProfilesRequest,
  InsertManagementProfilesResponse,
  InsertManagementProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementProfilesRequest,
  output: InsertManagementProfilesResponse,
  errors: [],
}));

export interface PatchManagementProfilesRequest {
  /** Web property ID to which the view (profile) belongs */
  webPropertyId: string;
  /** ID of the view (profile) to be updated. */
  profileId: string;
  /** Account ID to which the view (profile) belongs */
  accountId: string;
  /** Request body */
  body?: Profile;
}

export const PatchManagementProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(Profile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchManagementProfilesRequest>;

export type PatchManagementProfilesResponse = Profile;
export const PatchManagementProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Profile;

export type PatchManagementProfilesError = DefaultErrors;

/** Updates an existing view (profile). This method supports patch semantics. */
export const patchManagementProfiles: API.OperationMethod<
  PatchManagementProfilesRequest,
  PatchManagementProfilesResponse,
  PatchManagementProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementProfilesRequest,
  output: PatchManagementProfilesResponse,
  errors: [],
}));

export interface InsertManagementFiltersRequest {
  /** Account ID to create filter for. */
  accountId: string;
  /** Request body */
  body?: Filter;
}

export const InsertManagementFiltersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(Filter).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/accounts/{accountId}/filters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertManagementFiltersRequest>;

export type InsertManagementFiltersResponse = Filter;
export const InsertManagementFiltersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Filter;

export type InsertManagementFiltersError = DefaultErrors;

/** Create a new filter. */
export const insertManagementFilters: API.OperationMethod<
  InsertManagementFiltersRequest,
  InsertManagementFiltersResponse,
  InsertManagementFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementFiltersRequest,
  output: InsertManagementFiltersResponse,
  errors: [],
}));

export interface ListManagementFiltersRequest {
  /** Account ID to retrieve filters for. */
  accountId: string;
  /** The maximum number of filters to include in this response. */
  "max-results"?: number;
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
}

export const ListManagementFiltersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "management/accounts/{accountId}/filters" }),
    svc,
  ) as unknown as Schema.Schema<ListManagementFiltersRequest>;

export type ListManagementFiltersResponse = Filters;
export const ListManagementFiltersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Filters;

export type ListManagementFiltersError = DefaultErrors;

/** Lists all filters for an account */
export const listManagementFilters: API.OperationMethod<
  ListManagementFiltersRequest,
  ListManagementFiltersResponse,
  ListManagementFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementFiltersRequest,
  output: ListManagementFiltersResponse,
  errors: [],
}));

export interface PatchManagementFiltersRequest {
  /** Account ID to which the filter belongs. */
  accountId: string;
  /** ID of the filter to be updated. */
  filterId: string;
  /** Request body */
  body?: Filter;
}

export const PatchManagementFiltersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    filterId: Schema.String.pipe(T.HttpPath("filterId")),
    body: Schema.optional(Filter).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "management/accounts/{accountId}/filters/{filterId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchManagementFiltersRequest>;

export type PatchManagementFiltersResponse = Filter;
export const PatchManagementFiltersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Filter;

export type PatchManagementFiltersError = DefaultErrors;

/** Updates an existing filter. This method supports patch semantics. */
export const patchManagementFilters: API.OperationMethod<
  PatchManagementFiltersRequest,
  PatchManagementFiltersResponse,
  PatchManagementFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementFiltersRequest,
  output: PatchManagementFiltersResponse,
  errors: [],
}));

export interface GetManagementFiltersRequest {
  /** Account ID to retrieve filters for. */
  accountId: string;
  /** Filter ID to retrieve filters for. */
  filterId: string;
}

export const GetManagementFiltersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    filterId: Schema.String.pipe(T.HttpPath("filterId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/filters/{filterId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetManagementFiltersRequest>;

export type GetManagementFiltersResponse = Filter;
export const GetManagementFiltersResponse = /*@__PURE__*/ /*#__PURE__*/ Filter;

export type GetManagementFiltersError = DefaultErrors;

/** Returns filters to which the user has access. */
export const getManagementFilters: API.OperationMethod<
  GetManagementFiltersRequest,
  GetManagementFiltersResponse,
  GetManagementFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementFiltersRequest,
  output: GetManagementFiltersResponse,
  errors: [],
}));

export interface UpdateManagementFiltersRequest {
  /** Account ID to which the filter belongs. */
  accountId: string;
  /** ID of the filter to be updated. */
  filterId: string;
  /** Request body */
  body?: Filter;
}

export const UpdateManagementFiltersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    filterId: Schema.String.pipe(T.HttpPath("filterId")),
    body: Schema.optional(Filter).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "management/accounts/{accountId}/filters/{filterId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateManagementFiltersRequest>;

export type UpdateManagementFiltersResponse = Filter;
export const UpdateManagementFiltersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Filter;

export type UpdateManagementFiltersError = DefaultErrors;

/** Updates an existing filter. */
export const updateManagementFilters: API.OperationMethod<
  UpdateManagementFiltersRequest,
  UpdateManagementFiltersResponse,
  UpdateManagementFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementFiltersRequest,
  output: UpdateManagementFiltersResponse,
  errors: [],
}));

export interface DeleteManagementFiltersRequest {
  /** Account ID to delete the filter for. */
  accountId: string;
  /** ID of the filter to be deleted. */
  filterId: string;
}

export const DeleteManagementFiltersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    filterId: Schema.String.pipe(T.HttpPath("filterId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "management/accounts/{accountId}/filters/{filterId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteManagementFiltersRequest>;

export type DeleteManagementFiltersResponse = Filter;
export const DeleteManagementFiltersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Filter;

export type DeleteManagementFiltersError = DefaultErrors;

/** Delete a filter. */
export const deleteManagementFilters: API.OperationMethod<
  DeleteManagementFiltersRequest,
  DeleteManagementFiltersResponse,
  DeleteManagementFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementFiltersRequest,
  output: DeleteManagementFiltersResponse,
  errors: [],
}));

export interface ListManagementCustomDataSourcesRequest {
  /** The maximum number of custom data sources to include in this response. */
  "max-results"?: number;
  /** A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** Account Id for the custom data sources to retrieve. */
  accountId: string;
  /** Web property Id for the custom data sources to retrieve. */
  webPropertyId: string;
}

export const ListManagementCustomDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagementCustomDataSourcesRequest>;

export type ListManagementCustomDataSourcesResponse = CustomDataSources;
export const ListManagementCustomDataSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomDataSources;

export type ListManagementCustomDataSourcesError = DefaultErrors;

/** List custom data sources to which the user has access. */
export const listManagementCustomDataSources: API.OperationMethod<
  ListManagementCustomDataSourcesRequest,
  ListManagementCustomDataSourcesResponse,
  ListManagementCustomDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementCustomDataSourcesRequest,
  output: ListManagementCustomDataSourcesResponse,
  errors: [],
}));

export interface PatchManagementExperimentsRequest {
  /** Web property ID of the experiment to update. */
  webPropertyId: string;
  /** View (Profile) ID of the experiment to update. */
  profileId: string;
  /** Account ID of the experiment to update. */
  accountId: string;
  /** Experiment ID of the experiment to update. */
  experimentId: string;
  /** Request body */
  body?: Experiment;
}

export const PatchManagementExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    experimentId: Schema.String.pipe(T.HttpPath("experimentId")),
    body: Schema.optional(Experiment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchManagementExperimentsRequest>;

export type PatchManagementExperimentsResponse = Experiment;
export const PatchManagementExperimentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Experiment;

export type PatchManagementExperimentsError = DefaultErrors;

/** Update an existing experiment. This method supports patch semantics. */
export const patchManagementExperiments: API.OperationMethod<
  PatchManagementExperimentsRequest,
  PatchManagementExperimentsResponse,
  PatchManagementExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementExperimentsRequest,
  output: PatchManagementExperimentsResponse,
  errors: [],
}));

export interface InsertManagementExperimentsRequest {
  /** Account ID to create the experiment for. */
  accountId: string;
  /** Web property ID to create the experiment for. */
  webPropertyId: string;
  /** View (Profile) ID to create the experiment for. */
  profileId: string;
  /** Request body */
  body?: Experiment;
}

export const InsertManagementExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(Experiment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertManagementExperimentsRequest>;

export type InsertManagementExperimentsResponse = Experiment;
export const InsertManagementExperimentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Experiment;

export type InsertManagementExperimentsError = DefaultErrors;

/** Create a new experiment. */
export const insertManagementExperiments: API.OperationMethod<
  InsertManagementExperimentsRequest,
  InsertManagementExperimentsResponse,
  InsertManagementExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementExperimentsRequest,
  output: InsertManagementExperimentsResponse,
  errors: [],
}));

export interface ListManagementExperimentsRequest {
  /** Web property ID to retrieve experiments for. */
  webPropertyId: string;
  /** An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** View (Profile) ID to retrieve experiments for. */
  profileId: string;
  /** The maximum number of experiments to include in this response. */
  "max-results"?: number;
  /** Account ID to retrieve experiments for. */
  accountId: string;
}

export const ListManagementExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagementExperimentsRequest>;

export type ListManagementExperimentsResponse = Experiments;
export const ListManagementExperimentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Experiments;

export type ListManagementExperimentsError = DefaultErrors;

/** Lists experiments to which the user has access. */
export const listManagementExperiments: API.OperationMethod<
  ListManagementExperimentsRequest,
  ListManagementExperimentsResponse,
  ListManagementExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementExperimentsRequest,
  output: ListManagementExperimentsResponse,
  errors: [],
}));

export interface UpdateManagementExperimentsRequest {
  /** View (Profile) ID of the experiment to update. */
  profileId: string;
  /** Web property ID of the experiment to update. */
  webPropertyId: string;
  /** Experiment ID of the experiment to update. */
  experimentId: string;
  /** Account ID of the experiment to update. */
  accountId: string;
  /** Request body */
  body?: Experiment;
}

export const UpdateManagementExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    experimentId: Schema.String.pipe(T.HttpPath("experimentId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(Experiment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateManagementExperimentsRequest>;

export type UpdateManagementExperimentsResponse = Experiment;
export const UpdateManagementExperimentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Experiment;

export type UpdateManagementExperimentsError = DefaultErrors;

/** Update an existing experiment. */
export const updateManagementExperiments: API.OperationMethod<
  UpdateManagementExperimentsRequest,
  UpdateManagementExperimentsResponse,
  UpdateManagementExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementExperimentsRequest,
  output: UpdateManagementExperimentsResponse,
  errors: [],
}));

export interface DeleteManagementExperimentsRequest {
  /** Web property ID to which the experiment belongs */
  webPropertyId: string;
  /** View (Profile) ID to which the experiment belongs */
  profileId: string;
  /** Account ID to which the experiment belongs */
  accountId: string;
  /** ID of the experiment to delete */
  experimentId: string;
}

export const DeleteManagementExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    experimentId: Schema.String.pipe(T.HttpPath("experimentId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteManagementExperimentsRequest>;

export interface DeleteManagementExperimentsResponse {}
export const DeleteManagementExperimentsResponse: Schema.Schema<DeleteManagementExperimentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteManagementExperimentsResponse>;

export type DeleteManagementExperimentsError = DefaultErrors;

/** Delete an experiment. */
export const deleteManagementExperiments: API.OperationMethod<
  DeleteManagementExperimentsRequest,
  DeleteManagementExperimentsResponse,
  DeleteManagementExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementExperimentsRequest,
  output: DeleteManagementExperimentsResponse,
  errors: [],
}));

export interface GetManagementExperimentsRequest {
  /** View (Profile) ID to retrieve the experiment for. */
  profileId: string;
  /** Web property ID to retrieve the experiment for. */
  webPropertyId: string;
  /** Experiment ID to retrieve the experiment for. */
  experimentId: string;
  /** Account ID to retrieve the experiment for. */
  accountId: string;
}

export const GetManagementExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    experimentId: Schema.String.pipe(T.HttpPath("experimentId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetManagementExperimentsRequest>;

export type GetManagementExperimentsResponse = Experiment;
export const GetManagementExperimentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Experiment;

export type GetManagementExperimentsError = DefaultErrors;

/** Returns an experiment to which the user has access. */
export const getManagementExperiments: API.OperationMethod<
  GetManagementExperimentsRequest,
  GetManagementExperimentsResponse,
  GetManagementExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementExperimentsRequest,
  output: GetManagementExperimentsResponse,
  errors: [],
}));

export interface GetManagementCustomDimensionsRequest {
  /** Web property ID for the custom dimension to retrieve. */
  webPropertyId: string;
  /** Account ID for the custom dimension to retrieve. */
  accountId: string;
  /** The ID of the custom dimension to retrieve. */
  customDimensionId: string;
}

export const GetManagementCustomDimensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    customDimensionId: Schema.String.pipe(T.HttpPath("customDimensionId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetManagementCustomDimensionsRequest>;

export type GetManagementCustomDimensionsResponse = CustomDimension;
export const GetManagementCustomDimensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomDimension;

export type GetManagementCustomDimensionsError = DefaultErrors;

/** Get a custom dimension to which the user has access. */
export const getManagementCustomDimensions: API.OperationMethod<
  GetManagementCustomDimensionsRequest,
  GetManagementCustomDimensionsResponse,
  GetManagementCustomDimensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementCustomDimensionsRequest,
  output: GetManagementCustomDimensionsResponse,
  errors: [],
}));

export interface UpdateManagementCustomDimensionsRequest {
  /** Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set. */
  ignoreCustomDataSourceLinks?: boolean;
  /** Web property ID for the custom dimension to update. */
  webPropertyId: string;
  /** Account ID for the custom dimension to update. */
  accountId: string;
  /** Custom dimension ID for the custom dimension to update. */
  customDimensionId: string;
  /** Request body */
  body?: CustomDimension;
}

export const UpdateManagementCustomDimensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ignoreCustomDataSourceLinks: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ignoreCustomDataSourceLinks"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    customDimensionId: Schema.String.pipe(T.HttpPath("customDimensionId")),
    body: Schema.optional(CustomDimension).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateManagementCustomDimensionsRequest>;

export type UpdateManagementCustomDimensionsResponse = CustomDimension;
export const UpdateManagementCustomDimensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomDimension;

export type UpdateManagementCustomDimensionsError = DefaultErrors;

/** Updates an existing custom dimension. */
export const updateManagementCustomDimensions: API.OperationMethod<
  UpdateManagementCustomDimensionsRequest,
  UpdateManagementCustomDimensionsResponse,
  UpdateManagementCustomDimensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementCustomDimensionsRequest,
  output: UpdateManagementCustomDimensionsResponse,
  errors: [],
}));

export interface InsertManagementCustomDimensionsRequest {
  /** Account ID for the custom dimension to create. */
  accountId: string;
  /** Web property ID for the custom dimension to create. */
  webPropertyId: string;
  /** Request body */
  body?: CustomDimension;
}

export const InsertManagementCustomDimensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    body: Schema.optional(CustomDimension).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertManagementCustomDimensionsRequest>;

export type InsertManagementCustomDimensionsResponse = CustomDimension;
export const InsertManagementCustomDimensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomDimension;

export type InsertManagementCustomDimensionsError = DefaultErrors;

/** Create a new custom dimension. */
export const insertManagementCustomDimensions: API.OperationMethod<
  InsertManagementCustomDimensionsRequest,
  InsertManagementCustomDimensionsResponse,
  InsertManagementCustomDimensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementCustomDimensionsRequest,
  output: InsertManagementCustomDimensionsResponse,
  errors: [],
}));

export interface ListManagementCustomDimensionsRequest {
  /** Account ID for the custom dimensions to retrieve. */
  accountId: string;
  /** The maximum number of custom dimensions to include in this response. */
  "max-results"?: number;
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** Web property ID for the custom dimensions to retrieve. */
  webPropertyId: string;
}

export const ListManagementCustomDimensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagementCustomDimensionsRequest>;

export type ListManagementCustomDimensionsResponse = CustomDimensions;
export const ListManagementCustomDimensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomDimensions;

export type ListManagementCustomDimensionsError = DefaultErrors;

/** Lists custom dimensions to which the user has access. */
export const listManagementCustomDimensions: API.OperationMethod<
  ListManagementCustomDimensionsRequest,
  ListManagementCustomDimensionsResponse,
  ListManagementCustomDimensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementCustomDimensionsRequest,
  output: ListManagementCustomDimensionsResponse,
  errors: [],
}));

export interface PatchManagementCustomDimensionsRequest {
  /** Account ID for the custom dimension to update. */
  accountId: string;
  /** Custom dimension ID for the custom dimension to update. */
  customDimensionId: string;
  /** Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set. */
  ignoreCustomDataSourceLinks?: boolean;
  /** Web property ID for the custom dimension to update. */
  webPropertyId: string;
  /** Request body */
  body?: CustomDimension;
}

export const PatchManagementCustomDimensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    customDimensionId: Schema.String.pipe(T.HttpPath("customDimensionId")),
    ignoreCustomDataSourceLinks: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ignoreCustomDataSourceLinks"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    body: Schema.optional(CustomDimension).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchManagementCustomDimensionsRequest>;

export type PatchManagementCustomDimensionsResponse = CustomDimension;
export const PatchManagementCustomDimensionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomDimension;

export type PatchManagementCustomDimensionsError = DefaultErrors;

/** Updates an existing custom dimension. This method supports patch semantics. */
export const patchManagementCustomDimensions: API.OperationMethod<
  PatchManagementCustomDimensionsRequest,
  PatchManagementCustomDimensionsResponse,
  PatchManagementCustomDimensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementCustomDimensionsRequest,
  output: PatchManagementCustomDimensionsResponse,
  errors: [],
}));

export interface GetManagementWebPropertyAdWordsLinksRequest {
  /** ID of the account which the given web property belongs to. */
  accountId: string;
  /** Web property-Google Ads link ID. */
  webPropertyAdWordsLinkId: string;
  /** Web property ID to retrieve the Google Ads link for. */
  webPropertyId: string;
}

export const GetManagementWebPropertyAdWordsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyAdWordsLinkId: Schema.String.pipe(
      T.HttpPath("webPropertyAdWordsLinkId"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetManagementWebPropertyAdWordsLinksRequest>;

export type GetManagementWebPropertyAdWordsLinksResponse = EntityAdWordsLink;
export const GetManagementWebPropertyAdWordsLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntityAdWordsLink;

export type GetManagementWebPropertyAdWordsLinksError = DefaultErrors;

/** Returns a web property-Google Ads link to which the user has access. */
export const getManagementWebPropertyAdWordsLinks: API.OperationMethod<
  GetManagementWebPropertyAdWordsLinksRequest,
  GetManagementWebPropertyAdWordsLinksResponse,
  GetManagementWebPropertyAdWordsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementWebPropertyAdWordsLinksRequest,
  output: GetManagementWebPropertyAdWordsLinksResponse,
  errors: [],
}));

export interface DeleteManagementWebPropertyAdWordsLinksRequest {
  /** ID of the account which the given web property belongs to. */
  accountId: string;
  /** Web property Google Ads link ID. */
  webPropertyAdWordsLinkId: string;
  /** Web property ID to delete the Google Ads link for. */
  webPropertyId: string;
}

export const DeleteManagementWebPropertyAdWordsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyAdWordsLinkId: Schema.String.pipe(
      T.HttpPath("webPropertyAdWordsLinkId"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteManagementWebPropertyAdWordsLinksRequest>;

export interface DeleteManagementWebPropertyAdWordsLinksResponse {}
export const DeleteManagementWebPropertyAdWordsLinksResponse: Schema.Schema<DeleteManagementWebPropertyAdWordsLinksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteManagementWebPropertyAdWordsLinksResponse>;

export type DeleteManagementWebPropertyAdWordsLinksError = DefaultErrors;

/** Deletes a web property-Google Ads link. */
export const deleteManagementWebPropertyAdWordsLinks: API.OperationMethod<
  DeleteManagementWebPropertyAdWordsLinksRequest,
  DeleteManagementWebPropertyAdWordsLinksResponse,
  DeleteManagementWebPropertyAdWordsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementWebPropertyAdWordsLinksRequest,
  output: DeleteManagementWebPropertyAdWordsLinksResponse,
  errors: [],
}));

export interface UpdateManagementWebPropertyAdWordsLinksRequest {
  /** Web property ID to retrieve the Google Ads link for. */
  webPropertyId: string;
  /** ID of the account which the given web property belongs to. */
  accountId: string;
  /** Web property-Google Ads link ID. */
  webPropertyAdWordsLinkId: string;
  /** Request body */
  body?: EntityAdWordsLink;
}

export const UpdateManagementWebPropertyAdWordsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyAdWordsLinkId: Schema.String.pipe(
      T.HttpPath("webPropertyAdWordsLinkId"),
    ),
    body: Schema.optional(EntityAdWordsLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateManagementWebPropertyAdWordsLinksRequest>;

export type UpdateManagementWebPropertyAdWordsLinksResponse = EntityAdWordsLink;
export const UpdateManagementWebPropertyAdWordsLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntityAdWordsLink;

export type UpdateManagementWebPropertyAdWordsLinksError = DefaultErrors;

/** Updates an existing webProperty-Google Ads link. */
export const updateManagementWebPropertyAdWordsLinks: API.OperationMethod<
  UpdateManagementWebPropertyAdWordsLinksRequest,
  UpdateManagementWebPropertyAdWordsLinksResponse,
  UpdateManagementWebPropertyAdWordsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementWebPropertyAdWordsLinksRequest,
  output: UpdateManagementWebPropertyAdWordsLinksResponse,
  errors: [],
}));

export interface ListManagementWebPropertyAdWordsLinksRequest {
  /** Web property ID to retrieve the Google Ads links for. */
  webPropertyId: string;
  /** The maximum number of webProperty-Google Ads links to include in this response. */
  "max-results"?: number;
  /** An index of the first webProperty-Google Ads link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** ID of the account which the given web property belongs to. */
  accountId: string;
}

export const ListManagementWebPropertyAdWordsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagementWebPropertyAdWordsLinksRequest>;

export type ListManagementWebPropertyAdWordsLinksResponse = EntityAdWordsLinks;
export const ListManagementWebPropertyAdWordsLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntityAdWordsLinks;

export type ListManagementWebPropertyAdWordsLinksError = DefaultErrors;

/** Lists webProperty-Google Ads links for a given web property. */
export const listManagementWebPropertyAdWordsLinks: API.OperationMethod<
  ListManagementWebPropertyAdWordsLinksRequest,
  ListManagementWebPropertyAdWordsLinksResponse,
  ListManagementWebPropertyAdWordsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementWebPropertyAdWordsLinksRequest,
  output: ListManagementWebPropertyAdWordsLinksResponse,
  errors: [],
}));

export interface InsertManagementWebPropertyAdWordsLinksRequest {
  /** ID of the Google Analytics account to create the link for. */
  accountId: string;
  /** Web property ID to create the link for. */
  webPropertyId: string;
  /** Request body */
  body?: EntityAdWordsLink;
}

export const InsertManagementWebPropertyAdWordsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    body: Schema.optional(EntityAdWordsLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertManagementWebPropertyAdWordsLinksRequest>;

export type InsertManagementWebPropertyAdWordsLinksResponse = EntityAdWordsLink;
export const InsertManagementWebPropertyAdWordsLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntityAdWordsLink;

export type InsertManagementWebPropertyAdWordsLinksError = DefaultErrors;

/** Creates a webProperty-Google Ads link. */
export const insertManagementWebPropertyAdWordsLinks: API.OperationMethod<
  InsertManagementWebPropertyAdWordsLinksRequest,
  InsertManagementWebPropertyAdWordsLinksResponse,
  InsertManagementWebPropertyAdWordsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementWebPropertyAdWordsLinksRequest,
  output: InsertManagementWebPropertyAdWordsLinksResponse,
  errors: [],
}));

export interface PatchManagementWebPropertyAdWordsLinksRequest {
  /** Web property ID to retrieve the Google Ads link for. */
  webPropertyId: string;
  /** ID of the account which the given web property belongs to. */
  accountId: string;
  /** Web property-Google Ads link ID. */
  webPropertyAdWordsLinkId: string;
  /** Request body */
  body?: EntityAdWordsLink;
}

export const PatchManagementWebPropertyAdWordsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyAdWordsLinkId: Schema.String.pipe(
      T.HttpPath("webPropertyAdWordsLinkId"),
    ),
    body: Schema.optional(EntityAdWordsLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchManagementWebPropertyAdWordsLinksRequest>;

export type PatchManagementWebPropertyAdWordsLinksResponse = EntityAdWordsLink;
export const PatchManagementWebPropertyAdWordsLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntityAdWordsLink;

export type PatchManagementWebPropertyAdWordsLinksError = DefaultErrors;

/** Updates an existing webProperty-Google Ads link. This method supports patch semantics. */
export const patchManagementWebPropertyAdWordsLinks: API.OperationMethod<
  PatchManagementWebPropertyAdWordsLinksRequest,
  PatchManagementWebPropertyAdWordsLinksResponse,
  PatchManagementWebPropertyAdWordsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementWebPropertyAdWordsLinksRequest,
  output: PatchManagementWebPropertyAdWordsLinksResponse,
  errors: [],
}));

export interface HashClientIdManagementClientIdRequest {
  /** Request body */
  body?: HashClientIdRequest;
}

export const HashClientIdManagementClientIdRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(HashClientIdRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "management/clientId:hashClientId",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<HashClientIdManagementClientIdRequest>;

export type HashClientIdManagementClientIdResponse = HashClientIdResponse;
export const HashClientIdManagementClientIdResponse =
  /*@__PURE__*/ /*#__PURE__*/ HashClientIdResponse;

export type HashClientIdManagementClientIdError = DefaultErrors;

/** Hashes the given Client ID. */
export const hashClientIdManagementClientId: API.OperationMethod<
  HashClientIdManagementClientIdRequest,
  HashClientIdManagementClientIdResponse,
  HashClientIdManagementClientIdError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: HashClientIdManagementClientIdRequest,
  output: HashClientIdManagementClientIdResponse,
  errors: [],
}));

export interface ListManagementSegmentsRequest {
  /** The maximum number of segments to include in this response. */
  "max-results"?: number;
  /** An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
}

export const ListManagementSegmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "management/segments" }),
    svc,
  ) as unknown as Schema.Schema<ListManagementSegmentsRequest>;

export type ListManagementSegmentsResponse = Segments;
export const ListManagementSegmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Segments;

export type ListManagementSegmentsError = DefaultErrors;

/** Lists segments to which the user has access. */
export const listManagementSegments: API.OperationMethod<
  ListManagementSegmentsRequest,
  ListManagementSegmentsResponse,
  ListManagementSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementSegmentsRequest,
  output: ListManagementSegmentsResponse,
  errors: [],
}));

export interface GetDataRealtimeRequest {
  /** Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID. */
  ids: string;
  /** The maximum number of entries to include in this feed. */
  "max-results"?: number;
  /** A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'. */
  dimensions?: string;
  /** A comma-separated list of dimension or metric filters to be applied to real time data. */
  filters?: string;
  /** A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified. */
  metrics: string;
  /** A comma-separated list of dimensions or metrics that determine the sort order for real time data. */
  sort?: string;
}

export const GetDataRealtimeRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    ids: Schema.String.pipe(T.HttpQuery("ids")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    dimensions: Schema.optional(Schema.String).pipe(T.HttpQuery("dimensions")),
    filters: Schema.optional(Schema.String).pipe(T.HttpQuery("filters")),
    metrics: Schema.String.pipe(T.HttpQuery("metrics")),
    sort: Schema.optional(Schema.String).pipe(T.HttpQuery("sort")),
  },
).pipe(
  T.Http({ method: "GET", path: "data/realtime" }),
  svc,
) as unknown as Schema.Schema<GetDataRealtimeRequest>;

export type GetDataRealtimeResponse = RealtimeData;
export const GetDataRealtimeResponse = /*@__PURE__*/ /*#__PURE__*/ RealtimeData;

export type GetDataRealtimeError = DefaultErrors;

/** Returns real time data for a view (profile). */
export const getDataRealtime: API.OperationMethod<
  GetDataRealtimeRequest,
  GetDataRealtimeResponse,
  GetDataRealtimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDataRealtimeRequest,
  output: GetDataRealtimeResponse,
  errors: [],
}));

export interface GetDataGaRequest {
  /** An Analytics segment to be applied to data. */
  segment?: string;
  /** A comma-separated list of dimensions or metrics that determine the sort order for Analytics data. */
  sort?: string;
  /** A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'. */
  dimensions?: string;
  /** End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday. */
  "end-date": string;
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** The response will include empty rows if this parameter is set to true, the default is true */
  "include-empty-rows"?: boolean;
  /** The selected format for the response. Default format is JSON. */
  output?: "dataTable" | "json" | (string & {});
  /** Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo. */
  "start-date": string;
  /** A comma-separated list of dimension or metric filters to be applied to Analytics data. */
  filters?: string;
  /** The maximum number of entries to include in this feed. */
  "max-results"?: number;
  /** A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified. */
  metrics: string;
  /** The desired sampling level. */
  samplingLevel?: "DEFAULT" | "FASTER" | "HIGHER_PRECISION" | (string & {});
  /** Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID. */
  ids: string;
}

export const GetDataGaRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  segment: Schema.optional(Schema.String).pipe(T.HttpQuery("segment")),
  sort: Schema.optional(Schema.String).pipe(T.HttpQuery("sort")),
  dimensions: Schema.optional(Schema.String).pipe(T.HttpQuery("dimensions")),
  "end-date": Schema.String.pipe(T.HttpQuery("end-date")),
  "start-index": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("start-index"),
  ),
  "include-empty-rows": Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("include-empty-rows"),
  ),
  output: Schema.optional(Schema.String).pipe(T.HttpQuery("output")),
  "start-date": Schema.String.pipe(T.HttpQuery("start-date")),
  filters: Schema.optional(Schema.String).pipe(T.HttpQuery("filters")),
  "max-results": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("max-results"),
  ),
  metrics: Schema.String.pipe(T.HttpQuery("metrics")),
  samplingLevel: Schema.optional(Schema.String).pipe(
    T.HttpQuery("samplingLevel"),
  ),
  ids: Schema.String.pipe(T.HttpQuery("ids")),
}).pipe(
  T.Http({ method: "GET", path: "data/ga" }),
  svc,
) as unknown as Schema.Schema<GetDataGaRequest>;

export type GetDataGaResponse = GaData;
export const GetDataGaResponse = /*@__PURE__*/ /*#__PURE__*/ GaData;

export type GetDataGaError = DefaultErrors;

/** Returns Analytics data for a view (profile). */
export const getDataGa: API.OperationMethod<
  GetDataGaRequest,
  GetDataGaResponse,
  GetDataGaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDataGaRequest,
  output: GetDataGaResponse,
  errors: [],
}));

export interface GetDataMcfRequest {
  /** A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified. */
  metrics: string;
  /** The desired sampling level. */
  samplingLevel?: "DEFAULT" | "FASTER" | "HIGHER_PRECISION" | (string & {});
  /** Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID. */
  ids: string;
  /** End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo. */
  "end-date": string;
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'. */
  dimensions?: string;
  /** A comma-separated list of dimension or metric filters to be applied to the Analytics data. */
  filters?: string;
  /** The maximum number of entries to include in this feed. */
  "max-results"?: number;
  /** Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo. */
  "start-date": string;
  /** A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data. */
  sort?: string;
}

export const GetDataMcfRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metrics: Schema.String.pipe(T.HttpQuery("metrics")),
  samplingLevel: Schema.optional(Schema.String).pipe(
    T.HttpQuery("samplingLevel"),
  ),
  ids: Schema.String.pipe(T.HttpQuery("ids")),
  "end-date": Schema.String.pipe(T.HttpQuery("end-date")),
  "start-index": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("start-index"),
  ),
  dimensions: Schema.optional(Schema.String).pipe(T.HttpQuery("dimensions")),
  filters: Schema.optional(Schema.String).pipe(T.HttpQuery("filters")),
  "max-results": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("max-results"),
  ),
  "start-date": Schema.String.pipe(T.HttpQuery("start-date")),
  sort: Schema.optional(Schema.String).pipe(T.HttpQuery("sort")),
}).pipe(
  T.Http({ method: "GET", path: "data/mcf" }),
  svc,
) as unknown as Schema.Schema<GetDataMcfRequest>;

export type GetDataMcfResponse = McfData;
export const GetDataMcfResponse = /*@__PURE__*/ /*#__PURE__*/ McfData;

export type GetDataMcfError = DefaultErrors;

/** Returns Analytics Multi-Channel Funnels data for a view (profile). */
export const getDataMcf: API.OperationMethod<
  GetDataMcfRequest,
  GetDataMcfResponse,
  GetDataMcfError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDataMcfRequest,
  output: GetDataMcfResponse,
  errors: [],
}));

export interface CreateAccountTicketProvisioningRequest {
  /** Request body */
  body?: AccountTicket;
}

export const CreateAccountTicketProvisioningRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(AccountTicket).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "provisioning/createAccountTicket",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountTicketProvisioningRequest>;

export type CreateAccountTicketProvisioningResponse = AccountTicket;
export const CreateAccountTicketProvisioningResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountTicket;

export type CreateAccountTicketProvisioningError = DefaultErrors;

/** Creates an account ticket. */
export const createAccountTicketProvisioning: API.OperationMethod<
  CreateAccountTicketProvisioningRequest,
  CreateAccountTicketProvisioningResponse,
  CreateAccountTicketProvisioningError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountTicketProvisioningRequest,
  output: CreateAccountTicketProvisioningResponse,
  errors: [],
}));

export interface CreateAccountTreeProvisioningRequest {
  /** Request body */
  body?: AccountTreeRequest;
}

export const CreateAccountTreeProvisioningRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(AccountTreeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "provisioning/createAccountTree",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountTreeProvisioningRequest>;

export type CreateAccountTreeProvisioningResponse = AccountTreeResponse;
export const CreateAccountTreeProvisioningResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountTreeResponse;

export type CreateAccountTreeProvisioningError = DefaultErrors;

/** Provision account. */
export const createAccountTreeProvisioning: API.OperationMethod<
  CreateAccountTreeProvisioningRequest,
  CreateAccountTreeProvisioningResponse,
  CreateAccountTreeProvisioningError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountTreeProvisioningRequest,
  output: CreateAccountTreeProvisioningResponse,
  errors: [],
}));

export interface UpsertUserDeletionUserDeletionRequestRequest {
  /** Request body */
  body?: UserDeletionRequest;
}

export const UpsertUserDeletionUserDeletionRequestRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(UserDeletionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userDeletion/userDeletionRequests:upsert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpsertUserDeletionUserDeletionRequestRequest>;

export type UpsertUserDeletionUserDeletionRequestResponse = UserDeletionRequest;
export const UpsertUserDeletionUserDeletionRequestResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserDeletionRequest;

export type UpsertUserDeletionUserDeletionRequestError = DefaultErrors;

/** Insert or update a user deletion requests. */
export const upsertUserDeletionUserDeletionRequest: API.OperationMethod<
  UpsertUserDeletionUserDeletionRequestRequest,
  UpsertUserDeletionUserDeletionRequestResponse,
  UpsertUserDeletionUserDeletionRequestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpsertUserDeletionUserDeletionRequestRequest,
  output: UpsertUserDeletionUserDeletionRequestResponse,
  errors: [],
}));
