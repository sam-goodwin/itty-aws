// ==========================================================================
// Google Search Console API (searchconsole v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "searchconsole",
  version: "v1",
  rootUrl: "https://searchconsole.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface RunMobileFriendlyTestRequest {
  /** URL for inspection. */
  url?: string;
  /** Whether or not screenshot is requested. Default is false. */
  requestScreenshot?: boolean;
}

export const RunMobileFriendlyTestRequest: Schema.Codec<RunMobileFriendlyTestRequest> =
  /*@__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    requestScreenshot: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RunMobileFriendlyTestRequest" });

export interface InspectUrlIndexRequest {
  /** Required. URL to inspect. Must be under the property specified in "site_url". */
  inspectionUrl?: string;
  /** Optional. An [IETF BCP-47](https://en.wikipedia.org/wiki/IETF_language_tag) language code representing the requested language for translated issue messages, e.g. "en-US", "or "de-CH". Default value is "en-US". */
  languageCode?: string;
  /** Required. The URL of the property as defined in Search Console. **Examples:** `http://www.example.com/` for a URL-prefix property, or `sc-domain:example.com` for a Domain property. */
  siteUrl?: string;
}

export const InspectUrlIndexRequest: Schema.Codec<InspectUrlIndexRequest> =
  /*@__PURE__*/ Schema.Struct({
    inspectionUrl: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    siteUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "InspectUrlIndexRequest" });

export interface RichResultsIssue {
  /** Rich Results issue type. */
  issueMessage?: string;
  /** Severity of this issue: WARNING, or ERROR. Items with an issue of status ERROR cannot appear with rich result features in Google Search results. */
  severity?: "SEVERITY_UNSPECIFIED" | "WARNING" | "ERROR" | (string & {});
}

export const RichResultsIssue: Schema.Codec<RichResultsIssue> =
  /*@__PURE__*/ Schema.Struct({
    issueMessage: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
  }).annotate({ identifier: "RichResultsIssue" });

export interface Item {
  /** The user-provided name of this item. */
  name?: string;
  /** A list of zero or more rich result issues found for this instance. */
  issues?: ReadonlyArray<RichResultsIssue>;
}

export const Item: Schema.Codec<Item> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    issues: Schema.optional(Schema.Array(RichResultsIssue)),
  }).annotate({ identifier: "Item" });

export interface DetectedItems {
  /** Rich Results type */
  richResultType?: string;
  /** List of Rich Results items. */
  items?: ReadonlyArray<Item>;
}

export const DetectedItems: Schema.Codec<DetectedItems> =
  /*@__PURE__*/ Schema.Struct({
    richResultType: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Item)),
  }).annotate({ identifier: "DetectedItems" });

export interface ApiDimensionFilter {
  expression?: string;
  operator?:
    | "EQUALS"
    | "NOT_EQUALS"
    | "CONTAINS"
    | "NOT_CONTAINS"
    | "INCLUDING_REGEX"
    | "EXCLUDING_REGEX"
    | (string & {});
  dimension?:
    | "QUERY"
    | "PAGE"
    | "COUNTRY"
    | "DEVICE"
    | "SEARCH_APPEARANCE"
    | (string & {});
}

export const ApiDimensionFilter: Schema.Codec<ApiDimensionFilter> =
  /*@__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    operator: Schema.optional(Schema.String),
    dimension: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApiDimensionFilter" });

export interface ApiDimensionFilterGroup {
  groupType?: "AND" | (string & {});
  filters?: ReadonlyArray<ApiDimensionFilter>;
}

export const ApiDimensionFilterGroup: Schema.Codec<ApiDimensionFilterGroup> =
  /*@__PURE__*/ Schema.Struct({
    groupType: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.Array(ApiDimensionFilter)),
  }).annotate({ identifier: "ApiDimensionFilterGroup" });

export interface SearchAnalyticsQueryRequest {
  /** [Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number. */
  startRow?: number;
  /** [Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This value is included in the range. */
  startDate?: string;
  /** Optional. [Optional; Default is \"web\"] Type of report: search type, or either Discover or Gnews. */
  type?:
    | "WEB"
    | "IMAGE"
    | "VIDEO"
    | "NEWS"
    | "DISCOVER"
    | "GOOGLE_NEWS"
    | (string & {});
  /** [Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in the Search Analytics page. Dimensions are combined to create a unique row key for each row. Results are grouped in the order that you supply these dimensions. */
  dimensions?: ReadonlyArray<
    | "DATE"
    | "QUERY"
    | "PAGE"
    | "COUNTRY"
    | "DEVICE"
    | "SEARCH_APPEARANCE"
    | "HOUR"
    | (string & {})
  >;
  /** [Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 25,000 (inclusive). */
  rowLimit?: number;
  /** The data state to be fetched, can be full or all, the latter including full and partial data. */
  dataState?:
    | "DATA_STATE_UNSPECIFIED"
    | "FINAL"
    | "ALL"
    | "HOURLY_ALL"
    | (string & {});
  /** [Optional; Default is \"web\"] The search type to filter for. */
  searchType?:
    | "WEB"
    | "IMAGE"
    | "VIDEO"
    | "NEWS"
    | "DISCOVER"
    | "GOOGLE_NEWS"
    | (string & {});
  /** [Optional; Default is \"auto\"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see the help documentation to learn how data is calculated differently by site versus by page. **Note:** If you group or filter by page, you cannot aggregate by property. If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid. */
  aggregationType?:
    | "AUTO"
    | "BY_PROPERTY"
    | "BY_PAGE"
    | "BY_NEWS_SHOWCASE_PANEL"
    | (string & {});
  /** [Optional] Zero or more filters to apply to the dimension grouping values; for example, 'query contains \"buy\"' to see only data where the query string contains the substring \"buy\" (not case-sensitive). You can filter by a dimension without grouping by it. */
  dimensionFilterGroups?: ReadonlyArray<ApiDimensionFilterGroup>;
  /** [Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than or equal to the start date. This value is included in the range. */
  endDate?: string;
}

export const SearchAnalyticsQueryRequest: Schema.Codec<SearchAnalyticsQueryRequest> =
  /*@__PURE__*/ Schema.Struct({
    startRow: Schema.optional(Schema.Number),
    startDate: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    dimensions: Schema.optional(Schema.Array(Schema.String)),
    rowLimit: Schema.optional(Schema.Number),
    dataState: Schema.optional(Schema.String),
    searchType: Schema.optional(Schema.String),
    aggregationType: Schema.optional(Schema.String),
    dimensionFilterGroups: Schema.optional(
      Schema.Array(ApiDimensionFilterGroup),
    ),
    endDate: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchAnalyticsQueryRequest" });

export interface WmxSitemapContent {
  /** The number of URLs in the sitemap (of the content type). */
  submitted?: string;
  /** *Deprecated; do not use.* */
  indexed?: string;
  /** The specific type of content in this sitemap. For example: `web`. */
  type?:
    | "WEB"
    | "IMAGE"
    | "VIDEO"
    | "NEWS"
    | "MOBILE"
    | "ANDROID_APP"
    | "PATTERN"
    | "IOS_APP"
    | "DATA_FEED_ELEMENT"
    | (string & {});
}

export const WmxSitemapContent: Schema.Codec<WmxSitemapContent> =
  /*@__PURE__*/ Schema.Struct({
    submitted: Schema.optional(Schema.String),
    indexed: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "WmxSitemapContent" });

export interface WmxSitemap {
  /** If true, the sitemap is a collection of sitemaps. */
  isSitemapsIndex?: boolean;
  /** Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps. */
  warnings?: string;
  /** The various content types in the sitemap. */
  contents?: ReadonlyArray<WmxSitemapContent>;
  /** If true, the sitemap has not been processed. */
  isPending?: boolean;
  /** Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed before it can be processed correctly. */
  errors?: string;
  /** Date & time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd). */
  lastSubmitted?: string;
  /** Date & time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd). */
  lastDownloaded?: string;
  /** The type of the sitemap. For example: `rssFeed`. */
  type?:
    | "NOT_SITEMAP"
    | "URL_LIST"
    | "SITEMAP"
    | "RSS_FEED"
    | "ATOM_FEED"
    | "PATTERN_SITEMAP"
    | "OCEANFRONT"
    | (string & {});
  /** The url of the sitemap. */
  path?: string;
}

export const WmxSitemap: Schema.Codec<WmxSitemap> =
  /*@__PURE__*/ Schema.Struct({
    isSitemapsIndex: Schema.optional(Schema.Boolean),
    warnings: Schema.optional(Schema.String),
    contents: Schema.optional(Schema.Array(WmxSitemapContent)),
    isPending: Schema.optional(Schema.Boolean),
    errors: Schema.optional(Schema.String),
    lastSubmitted: Schema.optional(Schema.String),
    lastDownloaded: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "WmxSitemap" });

export interface AmpIssue {
  /** Severity of this issue: WARNING or ERROR. */
  severity?: "SEVERITY_UNSPECIFIED" | "WARNING" | "ERROR" | (string & {});
  /** Brief description of this issue. */
  issueMessage?: string;
}

export const AmpIssue: Schema.Codec<AmpIssue> =
  /*@__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    issueMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "AmpIssue" });

export interface BlockedResource {
  /** URL of the blocked resource. */
  url?: string;
}

export const BlockedResource: Schema.Codec<BlockedResource> =
  /*@__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "BlockedResource" });

export interface ResourceIssue {
  /** Describes a blocked resource issue. */
  blockedResource?: BlockedResource;
}

export const ResourceIssue: Schema.Codec<ResourceIssue> =
  /*@__PURE__*/ Schema.Struct({
    blockedResource: Schema.optional(BlockedResource),
  }).annotate({ identifier: "ResourceIssue" });

export interface ApiDataRow {
  position?: number;
  ctr?: number;
  clicks?: number;
  keys?: ReadonlyArray<string>;
  impressions?: number;
}

export const ApiDataRow: Schema.Codec<ApiDataRow> =
  /*@__PURE__*/ Schema.Struct({
    position: Schema.optional(Schema.Number),
    ctr: Schema.optional(Schema.Number),
    clicks: Schema.optional(Schema.Number),
    keys: Schema.optional(Schema.Array(Schema.String)),
    impressions: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ApiDataRow" });

export interface Image {
  /** The mime-type of the image data. */
  mimeType?: string;
  /** Image data in format determined by the mime type. Currently, the format will always be "image/png", but this might change in the future. */
  data?: string;
}

export const Image: Schema.Codec<Image> =
  /*@__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
  }).annotate({ identifier: "Image" });

export interface Metadata {
  /** The first date for which the data is still being collected and processed, presented in `YYYY-MM-DD` format (ISO-8601 extended local date format). This field is populated only when the request's `dataState` is "`all`", data is grouped by "`DATE`", and the requested date range contains incomplete data points. All values after the `first_incomplete_date` may still change noticeably. */
  firstIncompleteDate?: string;
  /** The first hour for which the data is still being collected and processed, presented in `YYYY-MM-DDThh:mm:ss[+|-]hh:mm` format (ISO-8601 extended offset date-time format). This field is populated only when the request's `dataState` is "`hourly_all`", data is grouped by "`HOUR`" and the requested date range contains incomplete data points. All values after the `first_incomplete_hour` may still change noticeably. */
  firstIncompleteHour?: string;
}

export const Metadata: Schema.Codec<Metadata> =
  /*@__PURE__*/ Schema.Struct({
    firstIncompleteDate: Schema.optional(Schema.String),
    firstIncompleteHour: Schema.optional(Schema.String),
  }).annotate({ identifier: "Metadata" });

export interface SearchAnalyticsQueryResponse {
  /** A list of rows grouped by the key values in the order given in the query. */
  rows?: ReadonlyArray<ApiDataRow>;
  /** An object that may be returned with your query results, providing context about the state of the data. See details in Metadata object documentation. */
  metadata?: Metadata;
  /** How the results were aggregated. */
  responseAggregationType?:
    | "AUTO"
    | "BY_PROPERTY"
    | "BY_PAGE"
    | "BY_NEWS_SHOWCASE_PANEL"
    | (string & {});
}

export const SearchAnalyticsQueryResponse: Schema.Codec<SearchAnalyticsQueryResponse> =
  /*@__PURE__*/ Schema.Struct({
    rows: Schema.optional(Schema.Array(ApiDataRow)),
    metadata: Schema.optional(Metadata),
    responseAggregationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchAnalyticsQueryResponse" });

export interface AmpInspectionResult {
  /** Whether or not the page is blocked to Google by a robots.txt rule. */
  robotsTxtState?:
    | "ROBOTS_TXT_STATE_UNSPECIFIED"
    | "ALLOWED"
    | "DISALLOWED"
    | (string & {});
  /** Whether or not the page blocks indexing through a noindex rule. */
  indexingState?:
    | "AMP_INDEXING_STATE_UNSPECIFIED"
    | "AMP_INDEXING_ALLOWED"
    | "BLOCKED_DUE_TO_NOINDEX"
    | "BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER"
    | (string & {});
  /** Index status of the AMP URL. */
  ampIndexStatusVerdict?:
    | "VERDICT_UNSPECIFIED"
    | "PASS"
    | "PARTIAL"
    | "FAIL"
    | "NEUTRAL"
    | (string & {});
  /** Whether or not Google could fetch the AMP. */
  pageFetchState?:
    | "PAGE_FETCH_STATE_UNSPECIFIED"
    | "SUCCESSFUL"
    | "SOFT_404"
    | "BLOCKED_ROBOTS_TXT"
    | "NOT_FOUND"
    | "ACCESS_DENIED"
    | "SERVER_ERROR"
    | "REDIRECT_ERROR"
    | "ACCESS_FORBIDDEN"
    | "BLOCKED_4XX"
    | "INTERNAL_CRAWL_ERROR"
    | "INVALID_URL"
    | (string & {});
  /** A list of zero or more AMP issues found for the inspected URL. */
  issues?: ReadonlyArray<AmpIssue>;
  /** Last time this AMP version was crawled by Google. Absent if the URL was never crawled successfully. */
  lastCrawlTime?: string;
  /** The status of the most severe error on the page. If a page has both warnings and errors, the page status is error. Error status means the page cannot be shown in Search results. */
  verdict?:
    | "VERDICT_UNSPECIFIED"
    | "PASS"
    | "PARTIAL"
    | "FAIL"
    | "NEUTRAL"
    | (string & {});
  /** URL of the AMP that was inspected. If the submitted URL is a desktop page that refers to an AMP version, the AMP version will be inspected. */
  ampUrl?: string;
}

export const AmpInspectionResult: Schema.Codec<AmpInspectionResult> =
  /*@__PURE__*/ Schema.Struct({
    robotsTxtState: Schema.optional(Schema.String),
    indexingState: Schema.optional(Schema.String),
    ampIndexStatusVerdict: Schema.optional(Schema.String),
    pageFetchState: Schema.optional(Schema.String),
    issues: Schema.optional(Schema.Array(AmpIssue)),
    lastCrawlTime: Schema.optional(Schema.String),
    verdict: Schema.optional(Schema.String),
    ampUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "AmpInspectionResult" });

export interface MobileUsabilityIssue {
  /** Not returned; reserved for future use. */
  severity?: "SEVERITY_UNSPECIFIED" | "WARNING" | "ERROR" | (string & {});
  /** Mobile-usability issue type. */
  issueType?:
    | "MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED"
    | "USES_INCOMPATIBLE_PLUGINS"
    | "CONFIGURE_VIEWPORT"
    | "FIXED_WIDTH_VIEWPORT"
    | "SIZE_CONTENT_TO_VIEWPORT"
    | "USE_LEGIBLE_FONT_SIZES"
    | "TAP_TARGETS_TOO_CLOSE"
    | (string & {});
  /** Additional information regarding the issue. */
  message?: string;
}

export const MobileUsabilityIssue: Schema.Codec<MobileUsabilityIssue> =
  /*@__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    issueType: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "MobileUsabilityIssue" });

export interface WmxSite {
  /** The URL of the site. */
  siteUrl?: string;
  /** The user's permission level for the site. */
  permissionLevel?:
    | "SITE_PERMISSION_LEVEL_UNSPECIFIED"
    | "SITE_OWNER"
    | "SITE_FULL_USER"
    | "SITE_RESTRICTED_USER"
    | "SITE_UNVERIFIED_USER"
    | (string & {});
}

export const WmxSite: Schema.Codec<WmxSite> =
  /*@__PURE__*/ Schema.Struct({
    siteUrl: Schema.optional(Schema.String),
    permissionLevel: Schema.optional(Schema.String),
  }).annotate({ identifier: "WmxSite" });

export interface SitesListResponse {
  /** Contains permission level information about a Search Console site. For more information, see [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999). */
  siteEntry?: ReadonlyArray<WmxSite>;
}

export const SitesListResponse: Schema.Codec<SitesListResponse> =
  /*@__PURE__*/ Schema.Struct({
    siteEntry: Schema.optional(Schema.Array(WmxSite)),
  }).annotate({ identifier: "SitesListResponse" });

export interface RichResultsInspectionResult {
  /** High-level rich results inspection result for this URL. */
  verdict?:
    | "VERDICT_UNSPECIFIED"
    | "PASS"
    | "PARTIAL"
    | "FAIL"
    | "NEUTRAL"
    | (string & {});
  /** A list of zero or more rich results detected on this page. Rich results that cannot even be parsed due to syntactic issues will not be listed here. */
  detectedItems?: ReadonlyArray<DetectedItems>;
}

export const RichResultsInspectionResult: Schema.Codec<RichResultsInspectionResult> =
  /*@__PURE__*/ Schema.Struct({
    verdict: Schema.optional(Schema.String),
    detectedItems: Schema.optional(Schema.Array(DetectedItems)),
  }).annotate({ identifier: "RichResultsInspectionResult" });

export interface IndexStatusInspectionResult {
  /** Whether or not Google could retrieve the page from your server. Equivalent to ["page fetch"](https://support.google.com/webmasters/answer/9012289#index_coverage) in the URL inspection report. */
  pageFetchState?:
    | "PAGE_FETCH_STATE_UNSPECIFIED"
    | "SUCCESSFUL"
    | "SOFT_404"
    | "BLOCKED_ROBOTS_TXT"
    | "NOT_FOUND"
    | "ACCESS_DENIED"
    | "SERVER_ERROR"
    | "REDIRECT_ERROR"
    | "ACCESS_FORBIDDEN"
    | "BLOCKED_4XX"
    | "INTERNAL_CRAWL_ERROR"
    | "INVALID_URL"
    | (string & {});
  /** Whether or not the page blocks indexing through a noindex rule. */
  indexingState?:
    | "INDEXING_STATE_UNSPECIFIED"
    | "INDEXING_ALLOWED"
    | "BLOCKED_BY_META_TAG"
    | "BLOCKED_BY_HTTP_HEADER"
    | "BLOCKED_BY_ROBOTS_TXT"
    | (string & {});
  /** High level verdict about whether the URL *is* indexed (indexed status), or *can be* indexed (live inspection). */
  verdict?:
    | "VERDICT_UNSPECIFIED"
    | "PASS"
    | "PARTIAL"
    | "FAIL"
    | "NEUTRAL"
    | (string & {});
  /** Could Google find and index the page. More details about page indexing appear in 'indexing_state'. */
  coverageState?: string;
  /** The URL that your page or site [declares as canonical](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls?#define-canonical). If you did not declare a canonical URL, this field is absent. */
  userCanonical?: string;
  /** Whether or not the page is blocked to Google by a robots.txt rule. */
  robotsTxtState?:
    | "ROBOTS_TXT_STATE_UNSPECIFIED"
    | "ALLOWED"
    | "DISALLOWED"
    | (string & {});
  /** URLs that link to the inspected URL, directly and indirectly. */
  referringUrls?: ReadonlyArray<string>;
  /** Primary crawler that was used by Google to crawl your site. */
  crawledAs?:
    | "CRAWLING_USER_AGENT_UNSPECIFIED"
    | "DESKTOP"
    | "MOBILE"
    | (string & {});
  /** The URL of the page that Google selected as canonical. If the page was not indexed, this field is absent. */
  googleCanonical?: string;
  /** Any sitemaps that this URL was listed in, as known by Google. Not guaranteed to be an exhaustive list, especially if Google did not discover this URL through a sitemap. Absent if no sitemaps were found. */
  sitemap?: ReadonlyArray<string>;
  /** Last time this URL was crawled by Google using the [primary crawler](https://support.google.com/webmasters/answer/7440203#primary_crawler). Absent if the URL was never crawled successfully. */
  lastCrawlTime?: string;
}

export const IndexStatusInspectionResult: Schema.Codec<IndexStatusInspectionResult> =
  /*@__PURE__*/ Schema.Struct({
    pageFetchState: Schema.optional(Schema.String),
    indexingState: Schema.optional(Schema.String),
    verdict: Schema.optional(Schema.String),
    coverageState: Schema.optional(Schema.String),
    userCanonical: Schema.optional(Schema.String),
    robotsTxtState: Schema.optional(Schema.String),
    referringUrls: Schema.optional(Schema.Array(Schema.String)),
    crawledAs: Schema.optional(Schema.String),
    googleCanonical: Schema.optional(Schema.String),
    sitemap: Schema.optional(Schema.Array(Schema.String)),
    lastCrawlTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "IndexStatusInspectionResult" });

export interface MobileUsabilityInspectionResult {
  /** High-level mobile-usability inspection result for this URL. */
  verdict?:
    | "VERDICT_UNSPECIFIED"
    | "PASS"
    | "PARTIAL"
    | "FAIL"
    | "NEUTRAL"
    | (string & {});
  /** A list of zero or more mobile-usability issues detected for this URL. */
  issues?: ReadonlyArray<MobileUsabilityIssue>;
}

export const MobileUsabilityInspectionResult: Schema.Codec<MobileUsabilityInspectionResult> =
  /*@__PURE__*/ Schema.Struct({
    verdict: Schema.optional(Schema.String),
    issues: Schema.optional(Schema.Array(MobileUsabilityIssue)),
  }).annotate({ identifier: "MobileUsabilityInspectionResult" });

export interface UrlInspectionResult {
  /** Result of the Rich Results analysis. Absent if there are no rich results found. */
  richResultsResult?: RichResultsInspectionResult;
  /** Result of the AMP analysis. Absent if the page is not an AMP page. */
  ampResult?: AmpInspectionResult;
  /** Link to Search Console URL inspection. */
  inspectionResultLink?: string;
  /** Result of the index status analysis. */
  indexStatusResult?: IndexStatusInspectionResult;
  /** Result of the Mobile usability analysis. */
  mobileUsabilityResult?: MobileUsabilityInspectionResult;
}

export const UrlInspectionResult: Schema.Codec<UrlInspectionResult> =
  /*@__PURE__*/ Schema.Struct({
    richResultsResult: Schema.optional(RichResultsInspectionResult),
    ampResult: Schema.optional(AmpInspectionResult),
    inspectionResultLink: Schema.optional(Schema.String),
    indexStatusResult: Schema.optional(IndexStatusInspectionResult),
    mobileUsabilityResult: Schema.optional(MobileUsabilityInspectionResult),
  }).annotate({ identifier: "UrlInspectionResult" });

export interface SitemapsListResponse {
  /** Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184). */
  sitemap?: ReadonlyArray<WmxSitemap>;
}

export const SitemapsListResponse: Schema.Codec<SitemapsListResponse> =
  /*@__PURE__*/ Schema.Struct({
    sitemap: Schema.optional(Schema.Array(WmxSitemap)),
  }).annotate({ identifier: "SitemapsListResponse" });

export interface MobileFriendlyIssue {
  /** Rule violated. */
  rule?:
    | "MOBILE_FRIENDLY_RULE_UNSPECIFIED"
    | "USES_INCOMPATIBLE_PLUGINS"
    | "CONFIGURE_VIEWPORT"
    | "FIXED_WIDTH_VIEWPORT"
    | "SIZE_CONTENT_TO_VIEWPORT"
    | "USE_LEGIBLE_FONT_SIZES"
    | "TAP_TARGETS_TOO_CLOSE"
    | (string & {});
}

export const MobileFriendlyIssue: Schema.Codec<MobileFriendlyIssue> =
  /*@__PURE__*/ Schema.Struct({
    rule: Schema.optional(Schema.String),
  }).annotate({ identifier: "MobileFriendlyIssue" });

export interface TestStatus {
  /** Status of the test. */
  status?:
    | "TEST_STATUS_UNSPECIFIED"
    | "COMPLETE"
    | "INTERNAL_ERROR"
    | "PAGE_UNREACHABLE"
    | (string & {});
  /** Error details if applicable. */
  details?: string;
}

export const TestStatus: Schema.Codec<TestStatus> =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
  }).annotate({ identifier: "TestStatus" });

export interface RunMobileFriendlyTestResponse {
  /** Information about embedded resources issues. */
  resourceIssues?: ReadonlyArray<ResourceIssue>;
  /** Test verdict, whether the page is mobile friendly or not. */
  mobileFriendliness?:
    | "MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED"
    | "MOBILE_FRIENDLY"
    | "NOT_MOBILE_FRIENDLY"
    | (string & {});
  /** Screenshot of the requested URL. */
  screenshot?: Image;
  /** List of mobile-usability issues. */
  mobileFriendlyIssues?: ReadonlyArray<MobileFriendlyIssue>;
  /** Final state of the test, can be either complete or an error. */
  testStatus?: TestStatus;
}

export const RunMobileFriendlyTestResponse: Schema.Codec<RunMobileFriendlyTestResponse> =
  /*@__PURE__*/ Schema.Struct({
    resourceIssues: Schema.optional(Schema.Array(ResourceIssue)),
    mobileFriendliness: Schema.optional(Schema.String),
    screenshot: Schema.optional(Image),
    mobileFriendlyIssues: Schema.optional(Schema.Array(MobileFriendlyIssue)),
    testStatus: Schema.optional(TestStatus),
  }).annotate({ identifier: "RunMobileFriendlyTestResponse" });

export interface InspectUrlIndexResponse {
  /** URL inspection results. */
  inspectionResult?: UrlInspectionResult;
}

export const InspectUrlIndexResponse: Schema.Codec<InspectUrlIndexResponse> =
  /*@__PURE__*/ Schema.Struct({
    inspectionResult: Schema.optional(UrlInspectionResult),
  }).annotate({ identifier: "InspectUrlIndexResponse" });

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

export interface DeleteSitemapsRequest {
  /** The site's URL, including protocol. For example: `http://www.example.com/`. */
  siteUrl: string;
  /** The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. */
  feedpath: string;
}

export const DeleteSitemapsRequest = /*@__PURE__*/ Schema.Struct({
  siteUrl: Schema.String.pipe(T.HttpPath("siteUrl")),
  feedpath: Schema.String.pipe(T.HttpPath("feedpath")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}",
  }),
  svc,
) as unknown as Schema.Codec<DeleteSitemapsRequest>;

export interface DeleteSitemapsResponse {}
export const DeleteSitemapsResponse: Schema.Codec<DeleteSitemapsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteSitemapsResponse>;

export type DeleteSitemapsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap. */
export const deleteSitemaps: API.OperationMethod<
  DeleteSitemapsRequest,
  DeleteSitemapsResponse,
  DeleteSitemapsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSitemapsRequest,
  output: DeleteSitemapsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListSitemapsRequest {
  /** A URL of a site's sitemap index. For example: `http://www.example.com/sitemapindex.xml`. */
  sitemapIndex?: string;
  /** The site's URL, including protocol. For example: `http://www.example.com/`. */
  siteUrl: string;
}

export const ListSitemapsRequest = /*@__PURE__*/ Schema.Struct({
  sitemapIndex: Schema.optional(Schema.String).pipe(
    T.HttpQuery("sitemapIndex"),
  ),
  siteUrl: Schema.String.pipe(T.HttpPath("siteUrl")),
}).pipe(
  T.Http({ method: "GET", path: "webmasters/v3/sites/{siteUrl}/sitemaps" }),
  svc,
) as unknown as Schema.Codec<ListSitemapsRequest>;

export type ListSitemapsResponse = SitemapsListResponse;
export const ListSitemapsResponse = /*@__PURE__*/ SitemapsListResponse;

export type ListSitemapsError = DefaultErrors | NotFound | Forbidden;

/** Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request). */
export const listSitemaps: API.OperationMethod<
  ListSitemapsRequest,
  ListSitemapsResponse,
  ListSitemapsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListSitemapsRequest,
  output: ListSitemapsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SubmitSitemapsRequest {
  /** The site's URL, including protocol. For example: `http://www.example.com/`. */
  siteUrl: string;
  /** The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. */
  feedpath: string;
}

export const SubmitSitemapsRequest = /*@__PURE__*/ Schema.Struct({
  siteUrl: Schema.String.pipe(T.HttpPath("siteUrl")),
  feedpath: Schema.String.pipe(T.HttpPath("feedpath")),
}).pipe(
  T.Http({
    method: "PUT",
    path: "webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<SubmitSitemapsRequest>;

export interface SubmitSitemapsResponse {}
export const SubmitSitemapsResponse: Schema.Codec<SubmitSitemapsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<SubmitSitemapsResponse>;

export type SubmitSitemapsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Submits a sitemap for a site. */
export const submitSitemaps: API.OperationMethod<
  SubmitSitemapsRequest,
  SubmitSitemapsResponse,
  SubmitSitemapsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SubmitSitemapsRequest,
  output: SubmitSitemapsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSitemapsRequest {
  /** The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. */
  feedpath: string;
  /** The site's URL, including protocol. For example: `http://www.example.com/`. */
  siteUrl: string;
}

export const GetSitemapsRequest = /*@__PURE__*/ Schema.Struct({
  feedpath: Schema.String.pipe(T.HttpPath("feedpath")),
  siteUrl: Schema.String.pipe(T.HttpPath("siteUrl")),
}).pipe(
  T.Http({
    method: "GET",
    path: "webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}",
  }),
  svc,
) as unknown as Schema.Codec<GetSitemapsRequest>;

export type GetSitemapsResponse = WmxSitemap;
export const GetSitemapsResponse = /*@__PURE__*/ WmxSitemap;

export type GetSitemapsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves information about a specific sitemap. */
export const getSitemaps: API.OperationMethod<
  GetSitemapsRequest,
  GetSitemapsResponse,
  GetSitemapsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSitemapsRequest,
  output: GetSitemapsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteSitesRequest {
  /** The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`. */
  siteUrl: string;
}

export const DeleteSitesRequest = /*@__PURE__*/ Schema.Struct({
  siteUrl: Schema.String.pipe(T.HttpPath("siteUrl")),
}).pipe(
  T.Http({ method: "DELETE", path: "webmasters/v3/sites/{siteUrl}" }),
  svc,
) as unknown as Schema.Codec<DeleteSitesRequest>;

export interface DeleteSitesResponse {}
export const DeleteSitesResponse: Schema.Codec<DeleteSitesResponse> =
  /*@__PURE__*/ Schema.Struct({}) as any as Schema.Codec<DeleteSitesResponse>;

export type DeleteSitesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a site from the set of the user's Search Console sites. */
export const deleteSites: API.OperationMethod<
  DeleteSitesRequest,
  DeleteSitesResponse,
  DeleteSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSitesRequest,
  output: DeleteSitesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListSitesRequest {}

export const ListSitesRequest = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "webmasters/v3/sites" }),
  svc,
) as unknown as Schema.Codec<ListSitesRequest>;

export type ListSitesResponse = SitesListResponse;
export const ListSitesResponse = /*@__PURE__*/ SitesListResponse;

export type ListSitesError = DefaultErrors | NotFound | Forbidden;

/** Lists the user's Search Console sites. */
export const listSites: API.OperationMethod<
  ListSitesRequest,
  ListSitesResponse,
  ListSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListSitesRequest,
  output: ListSitesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetSitesRequest {
  /** The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`. */
  siteUrl: string;
}

export const GetSitesRequest = /*@__PURE__*/ Schema.Struct({
  siteUrl: Schema.String.pipe(T.HttpPath("siteUrl")),
}).pipe(
  T.Http({ method: "GET", path: "webmasters/v3/sites/{siteUrl}" }),
  svc,
) as unknown as Schema.Codec<GetSitesRequest>;

export type GetSitesResponse = WmxSite;
export const GetSitesResponse = /*@__PURE__*/ WmxSite;

export type GetSitesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves information about specific site. */
export const getSites: API.OperationMethod<
  GetSitesRequest,
  GetSitesResponse,
  GetSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSitesRequest,
  output: GetSitesResponse,
  errors: [NotFound, Forbidden],
}));

export interface AddSitesRequest {
  /** The URL of the site to add. */
  siteUrl: string;
}

export const AddSitesRequest = /*@__PURE__*/ Schema.Struct({
  siteUrl: Schema.String.pipe(T.HttpPath("siteUrl")),
}).pipe(
  T.Http({
    method: "PUT",
    path: "webmasters/v3/sites/{siteUrl}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<AddSitesRequest>;

export interface AddSitesResponse {}
export const AddSitesResponse: Schema.Codec<AddSitesResponse> =
  /*@__PURE__*/ Schema.Struct({}) as any as Schema.Codec<AddSitesResponse>;

export type AddSitesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a site to the set of the user's sites in Search Console. */
export const addSites: API.OperationMethod<
  AddSitesRequest,
  AddSitesResponse,
  AddSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddSitesRequest,
  output: AddSitesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QuerySearchanalyticsRequest {
  /** The site's URL, including protocol. For example: `http://www.example.com/`. */
  siteUrl: string;
  /** Request body */
  body?: SearchAnalyticsQueryRequest;
}

export const QuerySearchanalyticsRequest =
  /*@__PURE__*/ Schema.Struct({
    siteUrl: Schema.String.pipe(T.HttpPath("siteUrl")),
    body: Schema.optional(SearchAnalyticsQueryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "webmasters/v3/sites/{siteUrl}/searchAnalytics/query",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<QuerySearchanalyticsRequest>;

export type QuerySearchanalyticsResponse = SearchAnalyticsQueryResponse;
export const QuerySearchanalyticsResponse =
  /*@__PURE__*/ SearchAnalyticsQueryResponse;

export type QuerySearchanalyticsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned. */
export const querySearchanalytics: API.OperationMethod<
  QuerySearchanalyticsRequest,
  QuerySearchanalyticsResponse,
  QuerySearchanalyticsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: QuerySearchanalyticsRequest,
  output: QuerySearchanalyticsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InspectUrlInspectionIndexRequest {
  /** Request body */
  body?: InspectUrlIndexRequest;
}

export const InspectUrlInspectionIndexRequest =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(InspectUrlIndexRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/urlInspection/index:inspect",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<InspectUrlInspectionIndexRequest>;

export type InspectUrlInspectionIndexResponse = InspectUrlIndexResponse;
export const InspectUrlInspectionIndexResponse =
  /*@__PURE__*/ InspectUrlIndexResponse;

export type InspectUrlInspectionIndexError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Index inspection. */
export const inspectUrlInspectionIndex: API.OperationMethod<
  InspectUrlInspectionIndexRequest,
  InspectUrlInspectionIndexResponse,
  InspectUrlInspectionIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InspectUrlInspectionIndexRequest,
  output: InspectUrlInspectionIndexResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunUrlTestingToolsMobileFriendlyTestRequest {
  /** Request body */
  body?: RunMobileFriendlyTestRequest;
}

export const RunUrlTestingToolsMobileFriendlyTestRequest =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(RunMobileFriendlyTestRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/urlTestingTools/mobileFriendlyTest:run",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RunUrlTestingToolsMobileFriendlyTestRequest>;

export type RunUrlTestingToolsMobileFriendlyTestResponse =
  RunMobileFriendlyTestResponse;
export const RunUrlTestingToolsMobileFriendlyTestResponse =
  /*@__PURE__*/ RunMobileFriendlyTestResponse;

export type RunUrlTestingToolsMobileFriendlyTestError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Runs Mobile-Friendly Test for a given URL. */
export const runUrlTestingToolsMobileFriendlyTest: API.OperationMethod<
  RunUrlTestingToolsMobileFriendlyTestRequest,
  RunUrlTestingToolsMobileFriendlyTestResponse,
  RunUrlTestingToolsMobileFriendlyTestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RunUrlTestingToolsMobileFriendlyTestRequest,
  output: RunUrlTestingToolsMobileFriendlyTestResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
