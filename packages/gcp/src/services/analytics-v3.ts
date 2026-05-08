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

export interface Experiment {
  /** Resource type for an Analytics experiment. This field is read-only. */
  kind?: string;
  /** A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED. */
  winnerConfidenceLevel?: number;
  /** Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment. */
  name?: string;
  /** The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only. */
  endTime?: string;
  /** If true, the end user will be able to edit the experiment via the Google Analytics user interface. */
  editableInGaUi?: boolean;
  /** The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks", "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions", "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or "API". */
  objectiveMetric?: string;
  /** Internal ID for the web property to which this experiment belongs. This field is read-only. */
  internalWebPropertyId?: string;
  /** Time the experiment was last modified. This field is read-only. */
  updated?: string;
  /** Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED". */
  optimizationType?: string;
  /** Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING. */
  variations?: ReadonlyArray<{
    won?: boolean;
    url?: string;
    status?: string;
    name?: string;
    weight?: number;
  }>;
  /** Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only. */
  webPropertyId?: string;
  /** Time the experiment was created. This field is read-only. */
  created?: string;
  /** Link for this experiment. This field is read-only. */
  selfLink?: string;
  /** Notes about this experiment. */
  description?: string;
  /** The framework used to serve the experiment variations and evaluate the results. One of: - REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates the results. - API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible for serving the selected variation. - EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller is responsible for serving the selected variation and evaluating the results. */
  servingFramework?: string;
  /** The snippet of code to include on the control page(s). This field is read-only. */
  snippet?: string;
  /** Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment. */
  status?: string;
  /** Parent link for an experiment. Points to the view (profile) to which this experiment belongs. */
  parentLink?: { type?: string; href?: string };
  /** View (Profile) ID to which this experiment belongs. This field is read-only. */
  profileId?: string;
  /** Experiment ID. Required for patch and update. Disallowed for create. */
  id?: string;
  /** Boolean specifying whether a winner has been found for this experiment. This field is read-only. */
  winnerFound?: boolean;
  /** Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED. */
  rewriteVariationUrlsAsOriginal?: boolean;
  /** An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED. */
  minimumExperimentLengthInDays?: number;
  /** Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED. */
  equalWeighting?: boolean;
  /** Account ID to which this experiment belongs. This field is read-only. */
  accountId?: string;
  /** Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED", "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn't expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only. */
  reasonExperimentEnded?: string;
  /** A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED. */
  trafficCoverage?: number;
  /** The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only. */
  startTime?: string;
}

export const Experiment: Schema.Schema<Experiment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    winnerConfidenceLevel: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    editableInGaUi: Schema.optional(Schema.Boolean),
    objectiveMetric: Schema.optional(Schema.String),
    internalWebPropertyId: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
    optimizationType: Schema.optional(Schema.String),
    variations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          won: Schema.optional(Schema.Boolean),
          url: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          weight: Schema.optional(Schema.Number),
        }),
      ),
    ),
    webPropertyId: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    servingFramework: Schema.optional(Schema.String),
    snippet: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    parentLink: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        href: Schema.optional(Schema.String),
      }),
    ),
    profileId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    winnerFound: Schema.optional(Schema.Boolean),
    rewriteVariationUrlsAsOriginal: Schema.optional(Schema.Boolean),
    minimumExperimentLengthInDays: Schema.optional(Schema.Number),
    equalWeighting: Schema.optional(Schema.Boolean),
    accountId: Schema.optional(Schema.String),
    reasonExperimentEnded: Schema.optional(Schema.String),
    trafficCoverage: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Experiment" });

export interface Experiments {
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Email ID of the authenticated user */
  username?: string;
  /** The total number of results for the query, regardless of the number of resources in the result. */
  totalResults?: number;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Link to next page for this experiment collection. */
  nextLink?: string;
  /** Collection type. */
  kind?: string;
  /** A list of experiments. */
  items?: ReadonlyArray<Experiment>;
  /** Link to previous page for this experiment collection. */
  previousLink?: string;
}

export const Experiments: Schema.Schema<Experiments> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startIndex: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
    totalResults: Schema.optional(Schema.Number),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Experiment)),
    previousLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "Experiments" });

export interface McfData {
  /** Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request. */
  rows?: ReadonlyArray<
    ReadonlyArray<{
      conversionPathValue?: ReadonlyArray<{
        interactionType?: string;
        nodeValue?: string;
      }>;
      primitiveValue?: string;
    }>
  >;
  /** The number of samples used to calculate the result. */
  sampleSize?: string;
  /** Resource type. */
  kind?: string;
  /** Unique ID for this data response. */
  id?: string;
  /** Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request. */
  totalsForAllResults?: Record<string, string>;
  /** Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request. */
  columnHeaders?: ReadonlyArray<{
    name?: string;
    columnType?: string;
    dataType?: string;
  }>;
  /** The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Link to next page for this Analytics data query. */
  nextLink?: string;
  /** Information for the view (profile), for which the Analytics data was requested. */
  profileInfo?: {
    accountId?: string;
    internalWebPropertyId?: string;
    profileName?: string;
    profileId?: string;
    webPropertyId?: string;
    tableId?: string;
  };
  /** Total size of the sample space from which the samples were selected. */
  sampleSpace?: string;
  /** Analytics data request query parameters. */
  query?: {
    sort?: ReadonlyArray<string>;
    metrics?: ReadonlyArray<string>;
    "start-date"?: string;
    "max-results"?: number;
    filters?: string;
    samplingLevel?: string;
    "start-index"?: number;
    segment?: string;
    "end-date"?: string;
    dimensions?: string;
    ids?: string;
  };
  /** The total number of rows for the query, regardless of the number of rows in the response. */
  totalResults?: number;
  /** Link to this page. */
  selfLink?: string;
  /** Determines if the Analytics data contains sampled data. */
  containsSampledData?: boolean;
  /** Link to previous page for this Analytics data query. */
  previousLink?: string;
}

export const McfData: Schema.Schema<McfData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rows: Schema.optional(
      Schema.Array(
        Schema.Array(
          Schema.Struct({
            conversionPathValue: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  interactionType: Schema.optional(Schema.String),
                  nodeValue: Schema.optional(Schema.String),
                }),
              ),
            ),
            primitiveValue: Schema.optional(Schema.String),
          }),
        ),
      ),
    ),
    sampleSize: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    totalsForAllResults: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    columnHeaders: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          columnType: Schema.optional(Schema.String),
          dataType: Schema.optional(Schema.String),
        }),
      ),
    ),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    profileInfo: Schema.optional(
      Schema.Struct({
        accountId: Schema.optional(Schema.String),
        internalWebPropertyId: Schema.optional(Schema.String),
        profileName: Schema.optional(Schema.String),
        profileId: Schema.optional(Schema.String),
        webPropertyId: Schema.optional(Schema.String),
        tableId: Schema.optional(Schema.String),
      }),
    ),
    sampleSpace: Schema.optional(Schema.String),
    query: Schema.optional(
      Schema.Struct({
        sort: Schema.optional(Schema.Array(Schema.String)),
        metrics: Schema.optional(Schema.Array(Schema.String)),
        "start-date": Schema.optional(Schema.String),
        "max-results": Schema.optional(Schema.Number),
        filters: Schema.optional(Schema.String),
        samplingLevel: Schema.optional(Schema.String),
        "start-index": Schema.optional(Schema.Number),
        segment: Schema.optional(Schema.String),
        "end-date": Schema.optional(Schema.String),
        dimensions: Schema.optional(Schema.String),
        ids: Schema.optional(Schema.String),
      }),
    ),
    totalResults: Schema.optional(Schema.Number),
    selfLink: Schema.optional(Schema.String),
    containsSampledData: Schema.optional(Schema.Boolean),
    previousLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "McfData" });

export interface Segment {
  /** Segment definition. */
  definition?: string;
  /** Segment ID. */
  id?: string;
  /** Time the segment was created. */
  created?: string;
  /** Segment name. */
  name?: string;
  /** Link for this segment. */
  selfLink?: string;
  /** Time the segment was last modified. */
  updated?: string;
  /** Type for a segment. Possible values are "BUILT_IN" or "CUSTOM". */
  type?: string;
  /** Segment ID. Can be used with the 'segment' parameter in Core Reporting API. */
  segmentId?: string;
  /** Resource type for Analytics segment. */
  kind?: string;
}

export const Segment: Schema.Schema<Segment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    definition: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    segmentId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "Segment" });

export interface Segments {
  /** Collection type for segments. */
  kind?: string;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Link to next page for this segment collection. */
  nextLink?: string;
  /** Link to previous page for this segment collection. */
  previousLink?: string;
  /** A list of segments. */
  items?: ReadonlyArray<Segment>;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Email ID of the authenticated user */
  username?: string;
}

export const Segments: Schema.Schema<Segments> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    previousLink: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Segment)),
    totalResults: Schema.optional(Schema.Number),
    startIndex: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
  }).annotate({ identifier: "Segments" });

export interface ProfileSummary {
  /** View (profile) ID. */
  id?: string;
  /** View (profile) name. */
  name?: string;
  /** View (Profile) type. Supported types: WEB or APP. */
  type?: string;
  /** Indicates whether this view (profile) is starred or not. */
  starred?: boolean;
  /** Resource type for Analytics ProfileSummary. */
  kind?: string;
}

export const ProfileSummary: Schema.Schema<ProfileSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    starred: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProfileSummary" });

export interface WebPropertySummary {
  /** Web property ID of the form UA-XXXXX-YY. */
  id?: string;
  /** List of profiles under this web property. */
  profiles?: ReadonlyArray<ProfileSummary>;
  /** Website url for this web property. */
  websiteUrl?: string;
  /** Internal ID for this web property. */
  internalWebPropertyId?: string;
  /** Resource type for Analytics WebPropertySummary. */
  kind?: string;
  /** Level for this web property. Possible values are STANDARD or PREMIUM. */
  level?: string;
  /** Indicates whether this web property is starred or not. */
  starred?: boolean;
  /** Web property name. */
  name?: string;
}

export const WebPropertySummary: Schema.Schema<WebPropertySummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    profiles: Schema.optional(Schema.Array(ProfileSummary)),
    websiteUrl: Schema.optional(Schema.String),
    internalWebPropertyId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    level: Schema.optional(Schema.String),
    starred: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "WebPropertySummary" });

export interface AccountSummary {
  /** Account ID. */
  id?: string;
  /** Resource type for Analytics AccountSummary. */
  kind?: string;
  /** Indicates whether this account is starred or not. */
  starred?: boolean;
  /** Account name. */
  name?: string;
  /** List of web properties under this account. */
  webProperties?: ReadonlyArray<WebPropertySummary>;
}

export const AccountSummary: Schema.Schema<AccountSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    starred: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    webProperties: Schema.optional(Schema.Array(WebPropertySummary)),
  }).annotate({ identifier: "AccountSummary" });

export interface AccountSummaries {
  /** A list of AccountSummaries. */
  items?: ReadonlyArray<AccountSummary>;
  /** Link to previous page for this AccountSummary collection. */
  previousLink?: string;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Link to next page for this AccountSummary collection. */
  nextLink?: string;
  /** Collection type. */
  kind?: string;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Email ID of the authenticated user */
  username?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
}

export const AccountSummaries: Schema.Schema<AccountSummaries> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(AccountSummary)),
    previousLink: Schema.optional(Schema.String),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    startIndex: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
    totalResults: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AccountSummaries" });

export interface Upload {
  /** Data import errors collection. */
  errors?: ReadonlyArray<string>;
  /** Time this file is uploaded. */
  uploadTime?: string;
  /** Custom data source Id to which this data import belongs. */
  customDataSourceId?: string;
  /** Resource type for Analytics upload. */
  kind?: string;
  /** A unique ID for this upload. */
  id?: string;
  /** Upload status. Possible values: PENDING, COMPLETED, FAILED, DELETING, DELETED. */
  status?: string;
  /** Account Id to which this upload belongs. */
  accountId?: string;
}

export const Upload: Schema.Schema<Upload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(Schema.String)),
    uploadTime: Schema.optional(Schema.String),
    customDataSourceId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Upload" });

export interface Uploads {
  /** The total number of results for the query, regardless of the number of resources in the result. */
  totalResults?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Link to previous page for this upload collection. */
  previousLink?: string;
  /** A list of uploads. */
  items?: ReadonlyArray<Upload>;
  /** Collection type. */
  kind?: string;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Link to next page for this upload collection. */
  nextLink?: string;
}

export const Uploads: Schema.Schema<Uploads> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalResults: Schema.optional(Schema.Number),
    startIndex: Schema.optional(Schema.Number),
    previousLink: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Upload)),
    kind: Schema.optional(Schema.String),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "Uploads" });

export interface Column {
  /** Resource type for Analytics column. */
  kind?: string;
  /** Column id. */
  id?: string;
  /** Map of attribute name and value for this column. */
  attributes?: Record<string, string>;
}

export const Column: Schema.Schema<Column> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    attributes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Column" });

export interface Columns {
  /** Collection type. */
  kind?: string;
  /** List of attributes names returned by columns. */
  attributeNames?: ReadonlyArray<string>;
  /** List of columns for a report type. */
  items?: ReadonlyArray<Column>;
  /** Total number of columns returned in the response. */
  totalResults?: number;
  /** Etag of collection. This etag can be compared with the last response etag to check if response has changed. */
  etag?: string;
}

export const Columns: Schema.Schema<Columns> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    attributeNames: Schema.optional(Schema.Array(Schema.String)),
    items: Schema.optional(Schema.Array(Column)),
    totalResults: Schema.optional(Schema.Number),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Columns" });

export interface Account {
  /** Resource type for Analytics account. */
  kind?: string;
  /** Indicates whether this account is starred or not. */
  starred?: boolean;
  /** Child link for an account entry. Points to the list of web properties for this account. */
  childLink?: { href?: string; type?: string };
  /** Permissions the user has for this account. */
  permissions?: { effective?: ReadonlyArray<string> };
  /** Time the account was last modified. */
  updated?: string;
  /** Link for this account. */
  selfLink?: string;
  /** Time the account was created. */
  created?: string;
  /** Account name. */
  name?: string;
  /** Account ID. */
  id?: string;
}

export const Account: Schema.Schema<Account> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    starred: Schema.optional(Schema.Boolean),
    childLink: Schema.optional(
      Schema.Struct({
        href: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    permissions: Schema.optional(
      Schema.Struct({
        effective: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    updated: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "Account" });

export interface Profile {
  /** View (Profile) ID. */
  id?: string;
  /** Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled. */
  enhancedECommerceTracking?: boolean;
  /** Parent link for this view (profile). Points to the web property to which this view (profile) belongs. */
  parentLink?: { type?: string; href?: string };
  /** Whether or not Analytics will strip search category parameters from the URLs in your reports. */
  stripSiteSearchCategoryParameters?: boolean;
  /** Whether or not Analytics will strip search query parameters from the URLs in your reports. */
  stripSiteSearchQueryParameters?: boolean;
  /** Indicates whether this view (profile) is starred or not. */
  starred?: boolean;
  /** Child link for this view (profile). Points to the list of goals for this view (profile). */
  childLink?: { type?: string; href?: string };
  /** Account ID to which this view (profile) belongs. */
  accountId?: string;
  /** Default page for this view (profile). */
  defaultPage?: string;
  /** Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database. */
  timezone?: string;
  /** The currency type associated with this view (profile), defaults to USD. The supported values are: USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL */
  currency?: string;
  /** Website URL for this view (profile). */
  websiteUrl?: string;
  /** Site search category parameters for this view (profile). */
  siteSearchCategoryParameters?: string;
  /** Name of this view (profile). */
  name?: string;
  /** Indicates whether bot filtering is enabled for this view (profile). */
  botFilteringEnabled?: boolean;
  /** Indicates whether ecommerce tracking is enabled for this view (profile). */
  eCommerceTracking?: boolean;
  /** View (Profile) type. Supported types: WEB or APP. */
  type?: string;
  /** Resource type for Analytics view (profile). */
  kind?: string;
  /** The site search query parameters for this view (profile). */
  siteSearchQueryParameters?: string;
  /** The query parameters that are excluded from this view (profile). */
  excludeQueryParameters?: string;
  /** Time this view (profile) was created. */
  created?: string;
  /** Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs. */
  webPropertyId?: string;
  /** Link for this view (profile). */
  selfLink?: string;
  /** Permissions the user has for this view (profile). */
  permissions?: { effective?: ReadonlyArray<string> };
  /** Time this view (profile) was last modified. */
  updated?: string;
  /** Internal ID for the web property to which this view (profile) belongs. */
  internalWebPropertyId?: string;
}

export const Profile: Schema.Schema<Profile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    enhancedECommerceTracking: Schema.optional(Schema.Boolean),
    parentLink: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        href: Schema.optional(Schema.String),
      }),
    ),
    stripSiteSearchCategoryParameters: Schema.optional(Schema.Boolean),
    stripSiteSearchQueryParameters: Schema.optional(Schema.Boolean),
    starred: Schema.optional(Schema.Boolean),
    childLink: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        href: Schema.optional(Schema.String),
      }),
    ),
    accountId: Schema.optional(Schema.String),
    defaultPage: Schema.optional(Schema.String),
    timezone: Schema.optional(Schema.String),
    currency: Schema.optional(Schema.String),
    websiteUrl: Schema.optional(Schema.String),
    siteSearchCategoryParameters: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    botFilteringEnabled: Schema.optional(Schema.Boolean),
    eCommerceTracking: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    siteSearchQueryParameters: Schema.optional(Schema.String),
    excludeQueryParameters: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    webPropertyId: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    permissions: Schema.optional(
      Schema.Struct({
        effective: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    updated: Schema.optional(Schema.String),
    internalWebPropertyId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Profile" });

export interface Profiles {
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Email ID of the authenticated user */
  username?: string;
  /** Link to previous page for this view (profile) collection. */
  previousLink?: string;
  /** A list of views (profiles). */
  items?: ReadonlyArray<Profile>;
  /** Collection type. */
  kind?: string;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Link to next page for this view (profile) collection. */
  nextLink?: string;
}

export const Profiles: Schema.Schema<Profiles> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalResults: Schema.optional(Schema.Number),
    startIndex: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
    previousLink: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Profile)),
    kind: Schema.optional(Schema.String),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "Profiles" });

export interface Webproperty {
  /** Time this web property was created. */
  created?: string;
  /** Level for this web property. Possible values are STANDARD or PREMIUM. */
  level?: string;
  /** Link for this web property. */
  selfLink?: string;
  /** Account ID to which this web property belongs. */
  accountId?: string;
  /** The industry vertical/category selected for this web property. */
  industryVertical?: string;
  /** Internal ID for this web property. */
  internalWebPropertyId?: string;
  /** Permissions the user has for this web property. */
  permissions?: { effective?: ReadonlyArray<string> };
  /** Time this web property was last modified. */
  updated?: string;
  /** Default view (profile) ID. */
  defaultProfileId?: string;
  /** Name of this web property. */
  name?: string;
  /** Parent link for this web property. Points to the account to which this web property belongs. */
  parentLink?: { type?: string; href?: string };
  /** The length of time for which user and event data is retained. This property cannot be set on insert. */
  dataRetentionTtl?: string;
  /** Set to true to reset the retention period of the user identifier with each new event from that user (thus setting the expiration date to current time plus retention period). Set to false to delete data associated with the user identifier automatically after the rentention period. This property cannot be set on insert. */
  dataRetentionResetOnNewActivity?: boolean;
  /** Web property ID of the form UA-XXXXX-YY. */
  id?: string;
  /** Website url for this web property. */
  websiteUrl?: string;
  /** Child link for this web property. Points to the list of views (profiles) for this web property. */
  childLink?: { type?: string; href?: string };
  /** Indicates whether this web property is starred or not. */
  starred?: boolean;
  /** Resource type for Analytics WebProperty. */
  kind?: string;
  /** View (Profile) count for this web property. */
  profileCount?: number;
}

export const Webproperty: Schema.Schema<Webproperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.optional(Schema.String),
    level: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    industryVertical: Schema.optional(Schema.String),
    internalWebPropertyId: Schema.optional(Schema.String),
    permissions: Schema.optional(
      Schema.Struct({
        effective: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    updated: Schema.optional(Schema.String),
    defaultProfileId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    parentLink: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        href: Schema.optional(Schema.String),
      }),
    ),
    dataRetentionTtl: Schema.optional(Schema.String),
    dataRetentionResetOnNewActivity: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    websiteUrl: Schema.optional(Schema.String),
    childLink: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        href: Schema.optional(Schema.String),
      }),
    ),
    starred: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    profileCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Webproperty" });

export interface Webproperties {
  /** Link to previous page for this web property collection. */
  previousLink?: string;
  /** A list of web properties. */
  items?: ReadonlyArray<Webproperty>;
  /** Collection type. */
  kind?: string;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Link to next page for this web property collection. */
  nextLink?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Email ID of the authenticated user */
  username?: string;
}

export const Webproperties: Schema.Schema<Webproperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    previousLink: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Webproperty)),
    kind: Schema.optional(Schema.String),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    totalResults: Schema.optional(Schema.Number),
    startIndex: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
  }).annotate({ identifier: "Webproperties" });

export interface CustomMetric {
  /** Kind value for a custom metric. Set to "analytics#customMetric". It is a read-only field. */
  kind?: string;
  /** Data type of custom metric. */
  type?: string;
  /** Scope of the custom metric: HIT or PRODUCT. */
  scope?: string;
  /** Parent link for the custom metric. Points to the property to which the custom metric belongs. */
  parentLink?: { type?: string; href?: string };
  /** Name of the custom metric. */
  name?: string;
  /** Boolean indicating whether the custom metric is active. */
  active?: boolean;
  /** Custom metric ID. */
  id?: string;
  /** Min value of custom metric. */
  min_value?: string;
  /** Max value of custom metric. */
  max_value?: string;
  /** Time the custom metric was last modified. */
  updated?: string;
  /** Link for the custom metric */
  selfLink?: string;
  /** Time the custom metric was created. */
  created?: string;
  /** Index of the custom metric. */
  index?: number;
  /** Property ID. */
  webPropertyId?: string;
  /** Account ID. */
  accountId?: string;
}

export const CustomMetric: Schema.Schema<CustomMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    parentLink: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        href: Schema.optional(Schema.String),
      }),
    ),
    name: Schema.optional(Schema.String),
    active: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    min_value: Schema.optional(Schema.String),
    max_value: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    index: Schema.optional(Schema.Number),
    webPropertyId: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomMetric" });

export interface CustomMetrics {
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Email ID of the authenticated user */
  username?: string;
  /** Collection type. */
  kind?: string;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Link to next page for this custom metric collection. */
  nextLink?: string;
  /** Link to previous page for this custom metric collection. */
  previousLink?: string;
  /** Collection of custom metrics. */
  items?: ReadonlyArray<CustomMetric>;
}

export const CustomMetrics: Schema.Schema<CustomMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalResults: Schema.optional(Schema.Number),
    startIndex: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    previousLink: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(CustomMetric)),
  }).annotate({ identifier: "CustomMetrics" });

export interface FilterExpression {
  /** Determines if the filter is case sensitive. */
  caseSensitive?: boolean;
  /** Match type for this filter. Possible values are BEGINS_WITH, EQUAL, ENDS_WITH, CONTAINS, or MATCHES. GEO_DOMAIN, GEO_IP_ADDRESS, PAGE_REQUEST_URI, or PAGE_HOSTNAME filters can use any match type; all other filters must use MATCHES. */
  matchType?: string;
  /** Filter expression value */
  expressionValue?: string;
  /** Field to filter. Possible values: - Content and Traffic - PAGE_REQUEST_URI, - PAGE_HOSTNAME, - PAGE_TITLE, - REFERRAL, - COST_DATA_URI (Campaign target URL), - HIT_TYPE, - INTERNAL_SEARCH_TERM, - INTERNAL_SEARCH_TYPE, - SOURCE_PROPERTY_TRACKING_ID, - Campaign or AdGroup - CAMPAIGN_SOURCE, - CAMPAIGN_MEDIUM, - CAMPAIGN_NAME, - CAMPAIGN_AD_GROUP, - CAMPAIGN_TERM, - CAMPAIGN_CONTENT, - CAMPAIGN_CODE, - CAMPAIGN_REFERRAL_PATH, - E-Commerce - TRANSACTION_COUNTRY, - TRANSACTION_REGION, - TRANSACTION_CITY, - TRANSACTION_AFFILIATION (Store or order location), - ITEM_NAME, - ITEM_CODE, - ITEM_VARIATION, - TRANSACTION_ID, - TRANSACTION_CURRENCY_CODE, - PRODUCT_ACTION_TYPE, - Audience/Users - BROWSER, - BROWSER_VERSION, - BROWSER_SIZE, - PLATFORM, - PLATFORM_VERSION, - LANGUAGE, - SCREEN_RESOLUTION, - SCREEN_COLORS, - JAVA_ENABLED (Boolean Field), - FLASH_VERSION, - GEO_SPEED (Connection speed), - VISITOR_TYPE, - GEO_ORGANIZATION (ISP organization), - GEO_DOMAIN, - GEO_IP_ADDRESS, - GEO_IP_VERSION, - Location - GEO_COUNTRY, - GEO_REGION, - GEO_CITY, - Event - EVENT_CATEGORY, - EVENT_ACTION, - EVENT_LABEL, - Other - CUSTOM_FIELD_1, - CUSTOM_FIELD_2, - USER_DEFINED_VALUE, - Application - APP_ID, - APP_INSTALLER_ID, - APP_NAME, - APP_VERSION, - SCREEN, - IS_APP (Boolean Field), - IS_FATAL_EXCEPTION (Boolean Field), - EXCEPTION_DESCRIPTION, - Mobile device - IS_MOBILE (Boolean Field, Deprecated. Use DEVICE_CATEGORY=mobile), - IS_TABLET (Boolean Field, Deprecated. Use DEVICE_CATEGORY=tablet), - DEVICE_CATEGORY, - MOBILE_HAS_QWERTY_KEYBOARD (Boolean Field), - MOBILE_HAS_NFC_SUPPORT (Boolean Field), - MOBILE_HAS_CELLULAR_RADIO (Boolean Field), - MOBILE_HAS_WIFI_SUPPORT (Boolean Field), - MOBILE_BRAND_NAME, - MOBILE_MODEL_NAME, - MOBILE_MARKETING_NAME, - MOBILE_POINTING_METHOD, - Social - SOCIAL_NETWORK, - SOCIAL_ACTION, - SOCIAL_ACTION_TARGET, - Custom dimension - CUSTOM_DIMENSION (See accompanying field index), */
  field?: string;
  /** The Index of the custom dimension. Set only if the field is a is CUSTOM_DIMENSION. */
  fieldIndex?: number;
  /** Kind value for filter expression */
  kind?: string;
}

export const FilterExpression: Schema.Schema<FilterExpression> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caseSensitive: Schema.optional(Schema.Boolean),
    matchType: Schema.optional(Schema.String),
    expressionValue: Schema.optional(Schema.String),
    field: Schema.optional(Schema.String),
    fieldIndex: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "FilterExpression" });

export interface IncludeConditions {
  /** Resource type for include conditions. */
  kind?: string;
  /** The look-back window lets you specify a time frame for evaluating the behavior that qualifies users for your audience. For example, if your filters include users from Central Asia, and Transactions Greater than 2, and you set the look-back window to 14 days, then any user from Central Asia whose cumulative transactions exceed 2 during the last 14 days is added to the audience. */
  daysToLookBack?: number;
  /** Boolean indicating whether this segment is a smart list. https://support.google.com/analytics/answer/4628577 */
  isSmartList?: boolean;
  /** Number of days (in the range 1 to 540) a user remains in the audience. */
  membershipDurationDays?: number;
  /** The segment condition that will cause a user to be added to an audience. */
  segment?: string;
}

export const IncludeConditions: Schema.Schema<IncludeConditions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    daysToLookBack: Schema.optional(Schema.Number),
    isSmartList: Schema.optional(Schema.Boolean),
    membershipDurationDays: Schema.optional(Schema.Number),
    segment: Schema.optional(Schema.String),
  }).annotate({ identifier: "IncludeConditions" });

export interface LinkedForeignAccount {
  /** Web property ID of the form UA-XXXXX-YY to which this linked foreign account belongs. */
  webPropertyId?: string;
  /** Remarketing audience ID to which this linked foreign account belongs. */
  remarketingAudienceId?: string;
  /** Account ID to which this linked foreign account belongs. */
  accountId?: string;
  /** Boolean indicating whether this is eligible for search. */
  eligibleForSearch?: boolean;
  /** Entity ad account link ID. */
  id?: string;
  /** The type of the foreign account. For example, `ADWORDS_LINKS`, `DBM_LINKS`, `MCC_LINKS` or `OPTIMIZE`. */
  type?: string;
  /** The foreign account ID. For example the an Google Ads `linkedAccountId` has the following format XXX-XXX-XXXX. */
  linkedAccountId?: string;
  /** Resource type for linked foreign account. */
  kind?: string;
  /** Internal ID for the web property to which this linked foreign account belongs. */
  internalWebPropertyId?: string;
  /** The status of this foreign account link. */
  status?: string;
}

export const LinkedForeignAccount: Schema.Schema<LinkedForeignAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.optional(Schema.String),
    remarketingAudienceId: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    eligibleForSearch: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    linkedAccountId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    internalWebPropertyId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "LinkedForeignAccount" });

export interface RemarketingAudience {
  /** The description of this remarketing audience. */
  description?: string;
  /** Account ID to which this remarketing audience belongs. */
  accountId?: string;
  /** Time this remarketing audience was created. */
  created?: string;
  /** Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs. */
  webPropertyId?: string;
  /** The views (profiles) that this remarketing audience is linked to. */
  linkedViews?: ReadonlyArray<string>;
  /** Time this remarketing audience was last modified. */
  updated?: string;
  /** The simple audience definition that will cause a user to be added to an audience. */
  audienceDefinition?: { includeConditions?: IncludeConditions };
  /** Internal ID for the web property to which this remarketing audience belongs. */
  internalWebPropertyId?: string;
  /** A state based audience definition that will cause a user to be added or removed from an audience. */
  stateBasedAudienceDefinition?: {
    includeConditions?: IncludeConditions;
    excludeConditions?: { exclusionDuration?: string; segment?: string };
  };
  /** Remarketing Audience ID. */
  id?: string;
  /** The type of audience, either SIMPLE or STATE_BASED. */
  audienceType?: string;
  /** The name of this remarketing audience. */
  name?: string;
  /** The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one linkedAdAccount currently. */
  linkedAdAccounts?: ReadonlyArray<LinkedForeignAccount>;
  /** Collection type. */
  kind?: string;
}

export const RemarketingAudience: Schema.Schema<RemarketingAudience> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    webPropertyId: Schema.optional(Schema.String),
    linkedViews: Schema.optional(Schema.Array(Schema.String)),
    updated: Schema.optional(Schema.String),
    audienceDefinition: Schema.optional(
      Schema.Struct({ includeConditions: Schema.optional(IncludeConditions) }),
    ),
    internalWebPropertyId: Schema.optional(Schema.String),
    stateBasedAudienceDefinition: Schema.optional(
      Schema.Struct({
        includeConditions: Schema.optional(IncludeConditions),
        excludeConditions: Schema.optional(
          Schema.Struct({
            exclusionDuration: Schema.optional(Schema.String),
            segment: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    audienceType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    linkedAdAccounts: Schema.optional(Schema.Array(LinkedForeignAccount)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemarketingAudience" });

export interface RemarketingAudiences {
  /** A list of remarketing audiences. */
  items?: ReadonlyArray<RemarketingAudience>;
  /** Link to previous page for this view (profile) collection. */
  previousLink?: string;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Link to next page for this remarketing audience collection. */
  nextLink?: string;
  /** Collection type. */
  kind?: string;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Email ID of the authenticated user */
  username?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
}

export const RemarketingAudiences: Schema.Schema<RemarketingAudiences> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(RemarketingAudience)),
    previousLink: Schema.optional(Schema.String),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    startIndex: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
    totalResults: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RemarketingAudiences" });

export interface AccountTreeRequest {
  profileName?: string;
  websiteUrl?: string;
  webpropertyName?: string;
  accountName?: string;
  timezone?: string;
  /** Resource type for account ticket. */
  kind?: string;
}

export const AccountTreeRequest: Schema.Schema<AccountTreeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileName: Schema.optional(Schema.String),
    websiteUrl: Schema.optional(Schema.String),
    webpropertyName: Schema.optional(Schema.String),
    accountName: Schema.optional(Schema.String),
    timezone: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountTreeRequest" });

export interface WebPropertyRef {
  /** Account ID to which this web property belongs. */
  accountId?: string;
  /** Internal ID for this web property. */
  internalWebPropertyId?: string;
  /** Web property ID of the form UA-XXXXX-YY. */
  id?: string;
  /** Link for this web property. */
  href?: string;
  /** Analytics web property reference. */
  kind?: string;
  /** Name of this web property. */
  name?: string;
}

export const WebPropertyRef: Schema.Schema<WebPropertyRef> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    internalWebPropertyId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    href: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "WebPropertyRef" });

export interface AccountRef {
  /** Account ID. */
  id?: string;
  /** Analytics account reference. */
  kind?: string;
  /** Link for this account. */
  href?: string;
  /** Account name. */
  name?: string;
}

export const AccountRef: Schema.Schema<AccountRef> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    href: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountRef" });

export interface ProfileRef {
  /** Account ID to which this view (profile) belongs. */
  accountId?: string;
  /** Internal ID for the web property to which this view (profile) belongs. */
  internalWebPropertyId?: string;
  /** View (Profile) ID. */
  id?: string;
  /** Link for this view (profile). */
  href?: string;
  /** Analytics view (profile) reference. */
  kind?: string;
  /** Name of this view (profile). */
  name?: string;
  /** Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs. */
  webPropertyId?: string;
}

export const ProfileRef: Schema.Schema<ProfileRef> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    internalWebPropertyId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    href: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    webPropertyId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProfileRef" });

export interface UserRef {
  /** Email ID of this user. */
  email?: string;
  /** User ID. */
  id?: string;
  kind?: string;
}

export const UserRef: Schema.Schema<UserRef> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserRef" });

export interface EntityUserLink {
  /** Entity for this link. It can be an account, a web property, or a view (profile). */
  entity?: {
    webPropertyRef?: WebPropertyRef;
    accountRef?: AccountRef;
    profileRef?: ProfileRef;
  };
  /** Entity user link ID */
  id?: string;
  /** Permissions the user has for this entity. */
  permissions?: {
    effective?: ReadonlyArray<string>;
    local?: ReadonlyArray<string>;
  };
  /** User reference. */
  userRef?: UserRef;
  /** Self link for this resource. */
  selfLink?: string;
  /** Resource type for entity user link. */
  kind?: string;
}

export const EntityUserLink: Schema.Schema<EntityUserLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entity: Schema.optional(
      Schema.Struct({
        webPropertyRef: Schema.optional(WebPropertyRef),
        accountRef: Schema.optional(AccountRef),
        profileRef: Schema.optional(ProfileRef),
      }),
    ),
    id: Schema.optional(Schema.String),
    permissions: Schema.optional(
      Schema.Struct({
        effective: Schema.optional(Schema.Array(Schema.String)),
        local: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    userRef: Schema.optional(UserRef),
    selfLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "EntityUserLink" });

export interface CustomDataSource {
  /** Name of this custom data source. */
  name?: string;
  /** Parent link for this custom data source. Points to the web property to which this custom data source belongs. */
  parentLink?: { type?: string; href?: string };
  /** Upload type of the custom data source. */
  uploadType?: string;
  /** Custom data source ID. */
  id?: string;
  childLink?: { type?: string; href?: string };
  /** Collection of schema headers of the custom data source. */
  schema?: ReadonlyArray<string>;
  /** Type of the custom data source. */
  type?: string;
  importBehavior?: string;
  /** Resource type for Analytics custom data source. */
  kind?: string;
  /** Web property ID of the form UA-XXXXX-YY to which this custom data source belongs. */
  webPropertyId?: string;
  /** Time this custom data source was created. */
  created?: string;
  /** Link for this Analytics custom data source. */
  selfLink?: string;
  /** Description of custom data source. */
  description?: string;
  /** Account ID to which this custom data source belongs. */
  accountId?: string;
  /** IDs of views (profiles) linked to the custom data source. */
  profilesLinked?: ReadonlyArray<string>;
  /** Time this custom data source was last modified. */
  updated?: string;
}

export const CustomDataSource: Schema.Schema<CustomDataSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    parentLink: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        href: Schema.optional(Schema.String),
      }),
    ),
    uploadType: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    childLink: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        href: Schema.optional(Schema.String),
      }),
    ),
    schema: Schema.optional(Schema.Array(Schema.String)),
    type: Schema.optional(Schema.String),
    importBehavior: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    webPropertyId: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    profilesLinked: Schema.optional(Schema.Array(Schema.String)),
    updated: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomDataSource" });

export interface CustomDataSources {
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Email ID of the authenticated user */
  username?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** Collection of custom data sources. */
  items?: ReadonlyArray<CustomDataSource>;
  /** Link to previous page for this custom data source collection. */
  previousLink?: string;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Link to next page for this custom data source collection. */
  nextLink?: string;
  /** Collection type. */
  kind?: string;
}

export const CustomDataSources: Schema.Schema<CustomDataSources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startIndex: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
    totalResults: Schema.optional(Schema.Number),
    items: Schema.optional(Schema.Array(CustomDataSource)),
    previousLink: Schema.optional(Schema.String),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomDataSources" });

export interface Filter {
  /** Details for the filter of the type INCLUDE. */
  includeDetails?: FilterExpression;
  /** Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED. */
  type?: string;
  /** Details for the filter of the type ADVANCED. */
  advancedDetails?: {
    fieldAIndex?: number;
    extractA?: string;
    fieldB?: string;
    outputConstructor?: string;
    caseSensitive?: boolean;
    fieldA?: string;
    fieldBRequired?: boolean;
    outputToField?: string;
    extractB?: string;
    fieldARequired?: boolean;
    overrideOutputField?: boolean;
    fieldBIndex?: number;
    outputToFieldIndex?: number;
  };
  /** Resource type for Analytics filter. */
  kind?: string;
  /** Details for the filter of the type EXCLUDE. */
  excludeDetails?: FilterExpression;
  /** Filter ID. */
  id?: string;
  /** Name of this filter. */
  name?: string;
  /** Details for the filter of the type LOWER. */
  lowercaseDetails?: { field?: string; fieldIndex?: number };
  /** Parent link for this filter. Points to the account to which this filter belongs. */
  parentLink?: { type?: string; href?: string };
  /** Time this filter was last modified. */
  updated?: string;
  /** Details for the filter of the type UPPER. */
  uppercaseDetails?: { field?: string; fieldIndex?: number };
  /** Details for the filter of the type SEARCH_AND_REPLACE. */
  searchAndReplaceDetails?: {
    caseSensitive?: boolean;
    field?: string;
    fieldIndex?: number;
    replaceString?: string;
    searchString?: string;
  };
  /** Account ID to which this filter belongs. */
  accountId?: string;
  /** Time this filter was created. */
  created?: string;
  /** Link for this filter. */
  selfLink?: string;
}

export const Filter: Schema.Schema<Filter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeDetails: Schema.optional(FilterExpression),
    type: Schema.optional(Schema.String),
    advancedDetails: Schema.optional(
      Schema.Struct({
        fieldAIndex: Schema.optional(Schema.Number),
        extractA: Schema.optional(Schema.String),
        fieldB: Schema.optional(Schema.String),
        outputConstructor: Schema.optional(Schema.String),
        caseSensitive: Schema.optional(Schema.Boolean),
        fieldA: Schema.optional(Schema.String),
        fieldBRequired: Schema.optional(Schema.Boolean),
        outputToField: Schema.optional(Schema.String),
        extractB: Schema.optional(Schema.String),
        fieldARequired: Schema.optional(Schema.Boolean),
        overrideOutputField: Schema.optional(Schema.Boolean),
        fieldBIndex: Schema.optional(Schema.Number),
        outputToFieldIndex: Schema.optional(Schema.Number),
      }),
    ),
    kind: Schema.optional(Schema.String),
    excludeDetails: Schema.optional(FilterExpression),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    lowercaseDetails: Schema.optional(
      Schema.Struct({
        field: Schema.optional(Schema.String),
        fieldIndex: Schema.optional(Schema.Number),
      }),
    ),
    parentLink: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        href: Schema.optional(Schema.String),
      }),
    ),
    updated: Schema.optional(Schema.String),
    uppercaseDetails: Schema.optional(
      Schema.Struct({
        field: Schema.optional(Schema.String),
        fieldIndex: Schema.optional(Schema.Number),
      }),
    ),
    searchAndReplaceDetails: Schema.optional(
      Schema.Struct({
        caseSensitive: Schema.optional(Schema.Boolean),
        field: Schema.optional(Schema.String),
        fieldIndex: Schema.optional(Schema.Number),
        replaceString: Schema.optional(Schema.String),
        searchString: Schema.optional(Schema.String),
      }),
    ),
    accountId: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "Filter" });

export interface HashClientIdRequest {
  clientId?: string;
  kind?: string;
  webPropertyId?: string;
}

export const HashClientIdRequest: Schema.Schema<HashClientIdRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    webPropertyId: Schema.optional(Schema.String),
  }).annotate({ identifier: "HashClientIdRequest" });

export interface RealtimeData {
  /** Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request. */
  columnHeaders?: ReadonlyArray<{
    name?: string;
    columnType?: string;
    dataType?: string;
  }>;
  /** Information for the view (profile), for which the real time data was requested. */
  profileInfo?: {
    profileId?: string;
    accountId?: string;
    internalWebPropertyId?: string;
    profileName?: string;
    webPropertyId?: string;
    tableId?: string;
  };
  /** Link to this page. */
  selfLink?: string;
  /** The total number of rows for the query, regardless of the number of rows in the response. */
  totalResults?: number;
  /** Unique ID for this data response. */
  id?: string;
  /** Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request. */
  totalsForAllResults?: Record<string, string>;
  /** Real time data request query parameters. */
  query?: {
    ids?: string;
    "max-results"?: number;
    dimensions?: string;
    metrics?: ReadonlyArray<string>;
    sort?: ReadonlyArray<string>;
    filters?: string;
  };
  /** Resource type. */
  kind?: string;
  /** Real time data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request. */
  rows?: ReadonlyArray<ReadonlyArray<string>>;
}

export const RealtimeData: Schema.Schema<RealtimeData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columnHeaders: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          columnType: Schema.optional(Schema.String),
          dataType: Schema.optional(Schema.String),
        }),
      ),
    ),
    profileInfo: Schema.optional(
      Schema.Struct({
        profileId: Schema.optional(Schema.String),
        accountId: Schema.optional(Schema.String),
        internalWebPropertyId: Schema.optional(Schema.String),
        profileName: Schema.optional(Schema.String),
        webPropertyId: Schema.optional(Schema.String),
        tableId: Schema.optional(Schema.String),
      }),
    ),
    selfLink: Schema.optional(Schema.String),
    totalResults: Schema.optional(Schema.Number),
    id: Schema.optional(Schema.String),
    totalsForAllResults: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    query: Schema.optional(
      Schema.Struct({
        ids: Schema.optional(Schema.String),
        "max-results": Schema.optional(Schema.Number),
        dimensions: Schema.optional(Schema.String),
        metrics: Schema.optional(Schema.Array(Schema.String)),
        sort: Schema.optional(Schema.Array(Schema.String)),
        filters: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.String),
    rows: Schema.optional(Schema.Array(Schema.Array(Schema.String))),
  }).annotate({ identifier: "RealtimeData" });

export interface UserDeletionRequest {
  /** Firebase Project Id */
  firebaseProjectId?: string;
  /** Value is "analytics#userDeletionRequest". */
  kind?: string;
  /** Property ID */
  propertyId?: string;
  /** This marks the point in time for which all user data before should be deleted */
  deletionRequestTime?: string;
  /** Web property ID of the form UA-XXXXX-YY. */
  webPropertyId?: string;
  /** User ID. */
  id?: { type?: string; userId?: string };
}

export const UserDeletionRequest: Schema.Schema<UserDeletionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firebaseProjectId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    propertyId: Schema.optional(Schema.String),
    deletionRequestTime: Schema.optional(Schema.String),
    webPropertyId: Schema.optional(Schema.String),
    id: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        userId: Schema.optional(Schema.String),
      }),
    ),
  }).annotate({ identifier: "UserDeletionRequest" });

export interface Accounts {
  /** A list of accounts. */
  items?: ReadonlyArray<Account>;
  /** Previous link for this account collection. */
  previousLink?: string;
  /** The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Next link for this account collection. */
  nextLink?: string;
  /** Collection type. */
  kind?: string;
  /** The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Email ID of the authenticated user */
  username?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
}

export const Accounts: Schema.Schema<Accounts> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Account)),
    previousLink: Schema.optional(Schema.String),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    startIndex: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
    totalResults: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Accounts" });

export interface FilterRef {
  /** Account ID to which this filter belongs. */
  accountId?: string;
  /** Filter ID. */
  id?: string;
  /** Link for this filter. */
  href?: string;
  /** Kind value for filter reference. */
  kind?: string;
  /** Name of this filter. */
  name?: string;
}

export const FilterRef: Schema.Schema<FilterRef> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    href: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "FilterRef" });

export interface ProfileFilterLink {
  /** Filter for this link. */
  filterRef?: FilterRef;
  /** Profile filter link ID. */
  id?: string;
  /** View (Profile) for this link. */
  profileRef?: ProfileRef;
  /** The rank of this profile filter link relative to the other filters linked to the same profile. For readonly (i.e., list and get) operations, the rank always starts at 1. For write (i.e., create, update, or delete) operations, you may specify a value between 0 and 255 inclusively, [0, 255]. In order to insert a link at the end of the list, either don't specify a rank or set a rank to a number greater than the largest rank in the list. In order to insert a link to the beginning of the list specify a rank that is less than or equal to 1. The new link will move all existing filters with the same or lower rank down the list. After the link is inserted/updated/deleted all profile filter links will be renumbered starting at 1. */
  rank?: number;
  /** Resource type for Analytics filter. */
  kind?: string;
  /** Link for this profile filter link. */
  selfLink?: string;
}

export const ProfileFilterLink: Schema.Schema<ProfileFilterLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filterRef: Schema.optional(FilterRef),
    id: Schema.optional(Schema.String),
    profileRef: Schema.optional(ProfileRef),
    rank: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProfileFilterLink" });

export interface GaData {
  /** Resource type. */
  kind?: string;
  /** The number of samples used to calculate the result. */
  sampleSize?: string;
  /** Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request. */
  rows?: ReadonlyArray<ReadonlyArray<string>>;
  dataTable?: {
    cols?: ReadonlyArray<{ id?: string; label?: string; type?: string }>;
    rows?: ReadonlyArray<{ c?: ReadonlyArray<{ v?: string }> }>;
  };
  /** Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request. */
  columnHeaders?: ReadonlyArray<{
    dataType?: string;
    name?: string;
    columnType?: string;
  }>;
  /** The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Link to next page for this Analytics data query. */
  nextLink?: string;
  /** Information for the view (profile), for which the Analytics data was requested. */
  profileInfo?: {
    webPropertyId?: string;
    tableId?: string;
    profileId?: string;
    accountId?: string;
    internalWebPropertyId?: string;
    profileName?: string;
  };
  /** Unique ID for this data response. */
  id?: string;
  /** Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request. */
  totalsForAllResults?: Record<string, string>;
  /** Total size of the sample space from which the samples were selected. */
  sampleSpace?: string;
  /** Analytics data request query parameters. */
  query?: {
    "end-date"?: string;
    segment?: string;
    filters?: string;
    samplingLevel?: string;
    "start-index"?: number;
    ids?: string;
    dimensions?: string;
    metrics?: ReadonlyArray<string>;
    sort?: ReadonlyArray<string>;
    "max-results"?: number;
    "start-date"?: string;
  };
  /** The last refreshed time in seconds for Analytics data. */
  dataLastRefreshed?: string;
  /** Link to this page. */
  selfLink?: string;
  /** Determines if Analytics data contains samples. */
  containsSampledData?: boolean;
  /** Link to previous page for this Analytics data query. */
  previousLink?: string;
  /** The total number of rows for the query, regardless of the number of rows in the response. */
  totalResults?: number;
}

export const GaData: Schema.Schema<GaData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    sampleSize: Schema.optional(Schema.String),
    rows: Schema.optional(Schema.Array(Schema.Array(Schema.String))),
    dataTable: Schema.optional(
      Schema.Struct({
        cols: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              label: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
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
    columnHeaders: Schema.optional(
      Schema.Array(
        Schema.Struct({
          dataType: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          columnType: Schema.optional(Schema.String),
        }),
      ),
    ),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    profileInfo: Schema.optional(
      Schema.Struct({
        webPropertyId: Schema.optional(Schema.String),
        tableId: Schema.optional(Schema.String),
        profileId: Schema.optional(Schema.String),
        accountId: Schema.optional(Schema.String),
        internalWebPropertyId: Schema.optional(Schema.String),
        profileName: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    totalsForAllResults: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    sampleSpace: Schema.optional(Schema.String),
    query: Schema.optional(
      Schema.Struct({
        "end-date": Schema.optional(Schema.String),
        segment: Schema.optional(Schema.String),
        filters: Schema.optional(Schema.String),
        samplingLevel: Schema.optional(Schema.String),
        "start-index": Schema.optional(Schema.Number),
        ids: Schema.optional(Schema.String),
        dimensions: Schema.optional(Schema.String),
        metrics: Schema.optional(Schema.Array(Schema.String)),
        sort: Schema.optional(Schema.Array(Schema.String)),
        "max-results": Schema.optional(Schema.Number),
        "start-date": Schema.optional(Schema.String),
      }),
    ),
    dataLastRefreshed: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    containsSampledData: Schema.optional(Schema.Boolean),
    previousLink: Schema.optional(Schema.String),
    totalResults: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GaData" });

export interface CustomDimension {
  /** Boolean indicating whether the custom dimension is active. */
  active?: boolean;
  /** Custom dimension ID. */
  id?: string;
  /** Account ID. */
  accountId?: string;
  /** Link for the custom dimension */
  selfLink?: string;
  /** Parent link for the custom dimension. Points to the property to which the custom dimension belongs. */
  parentLink?: { type?: string; href?: string };
  /** Time the custom dimension was created. */
  created?: string;
  /** Index of the custom dimension. */
  index?: number;
  /** Name of the custom dimension. */
  name?: string;
  /** Property ID. */
  webPropertyId?: string;
  /** Scope of the custom dimension: HIT, SESSION, USER or PRODUCT. */
  scope?: string;
  /** Time the custom dimension was last modified. */
  updated?: string;
  /** Kind value for a custom dimension. Set to "analytics#customDimension". It is a read-only field. */
  kind?: string;
}

export const CustomDimension: Schema.Schema<CustomDimension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    parentLink: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        href: Schema.optional(Schema.String),
      }),
    ),
    created: Schema.optional(Schema.String),
    index: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    webPropertyId: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomDimension" });

export interface CustomDimensions {
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Email ID of the authenticated user */
  username?: string;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Link to next page for this custom dimension collection. */
  nextLink?: string;
  /** Collection type. */
  kind?: string;
  /** Collection of custom dimensions. */
  items?: ReadonlyArray<CustomDimension>;
  /** Link to previous page for this custom dimension collection. */
  previousLink?: string;
}

export const CustomDimensions: Schema.Schema<CustomDimensions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startIndex: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
    totalResults: Schema.optional(Schema.Number),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(CustomDimension)),
    previousLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomDimensions" });

export interface AdWordsAccount {
  /** Customer ID. This field is required when creating a Google Ads link. */
  customerId?: string;
  /** True if auto-tagging is enabled on the Google Ads account. Read-only after the insert operation. */
  autoTaggingEnabled?: boolean;
  /** Resource type for Google Ads account. */
  kind?: string;
}

export const AdWordsAccount: Schema.Schema<AdWordsAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.optional(Schema.String),
    autoTaggingEnabled: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdWordsAccount" });

export interface EntityAdWordsLink {
  /** A list of Google Ads client accounts. These cannot be MCC accounts. This field is required when creating a Google Ads link. It cannot be empty. */
  adWordsAccounts?: ReadonlyArray<AdWordsAccount>;
  /** Web property being linked. */
  entity?: { webPropertyRef?: WebPropertyRef };
  /** Entity Google Ads link ID */
  id?: string;
  /** URL link for this Google Analytics - Google Ads link. */
  selfLink?: string;
  /** Resource type for entity Google Ads link. */
  kind?: string;
  /** Name of the link. This field is required when creating a Google Ads link. */
  name?: string;
  /** IDs of linked Views (Profiles) represented as strings. */
  profileIds?: ReadonlyArray<string>;
}

export const EntityAdWordsLink: Schema.Schema<EntityAdWordsLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adWordsAccounts: Schema.optional(Schema.Array(AdWordsAccount)),
    entity: Schema.optional(
      Schema.Struct({ webPropertyRef: Schema.optional(WebPropertyRef) }),
    ),
    id: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    profileIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "EntityAdWordsLink" });

export interface HashClientIdResponse {
  clientId?: string;
  kind?: string;
  webPropertyId?: string;
  hashedClientId?: string;
}

export const HashClientIdResponse: Schema.Schema<HashClientIdResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    webPropertyId: Schema.optional(Schema.String),
    hashedClientId: Schema.optional(Schema.String),
  }).annotate({ identifier: "HashClientIdResponse" });

export interface EntityUserLinks {
  /** The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Next link for this account collection. */
  nextLink?: string;
  /** Collection type. */
  kind?: string;
  /** A list of entity user links. */
  items?: ReadonlyArray<EntityUserLink>;
  /** Previous link for this account collection. */
  previousLink?: string;
}

export const EntityUserLinks: Schema.Schema<EntityUserLinks> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startIndex: Schema.optional(Schema.Number),
    totalResults: Schema.optional(Schema.Number),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(EntityUserLink)),
    previousLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "EntityUserLinks" });

export interface Filters {
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Email ID of the authenticated user */
  username?: string;
  /** Collection type. */
  kind?: string;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Link to next page for this filter collection. */
  nextLink?: string;
  /** Link to previous page for this filter collection. */
  previousLink?: string;
  /** A list of filters. */
  items?: ReadonlyArray<Filter>;
}

export const Filters: Schema.Schema<Filters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalResults: Schema.optional(Schema.Number),
    startIndex: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    previousLink: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Filter)),
  }).annotate({ identifier: "Filters" });

export interface AnalyticsDataimportDeleteUploadDataRequest {
  /** A list of upload UIDs. */
  customDataImportUids?: ReadonlyArray<string>;
}

export const AnalyticsDataimportDeleteUploadDataRequest: Schema.Schema<AnalyticsDataimportDeleteUploadDataRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customDataImportUids: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AnalyticsDataimportDeleteUploadDataRequest" });

export interface AccountTreeResponse {
  /** Web property for the account. */
  webproperty?: Webproperty;
  /** View (Profile) for the account. */
  profile?: Profile;
  /** The account created. */
  account?: Account;
  /** Resource type for account ticket. */
  kind?: string;
}

export const AccountTreeResponse: Schema.Schema<AccountTreeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webproperty: Schema.optional(Webproperty),
    profile: Schema.optional(Profile),
    account: Schema.optional(Account),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountTreeResponse" });

export interface AccountTicket {
  /** Web property for the account. */
  webproperty?: Webproperty;
  /** Account for this ticket. */
  account?: Account;
  /** Resource type for account ticket. */
  kind?: string;
  /** View (Profile) for the account. */
  profile?: Profile;
  /** Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a callback URL. */
  redirectUri?: string;
  /** Account ticket ID used to access the account ticket. */
  id?: string;
}

export const AccountTicket: Schema.Schema<AccountTicket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webproperty: Schema.optional(Webproperty),
    account: Schema.optional(Account),
    kind: Schema.optional(Schema.String),
    profile: Schema.optional(Profile),
    redirectUri: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountTicket" });

export interface Goal {
  /** View (Profile) ID to which this goal belongs. */
  profileId?: string;
  /** Determines whether this goal is active. */
  active?: boolean;
  /** Goal ID. */
  id?: string;
  /** Goal name. */
  name?: string;
  /** Parent link for a goal. Points to the view (profile) to which this goal belongs. */
  parentLink?: { href?: string; type?: string };
  /** Details for the goal of the type EVENT. */
  eventDetails?: {
    eventConditions?: ReadonlyArray<{
      matchType?: string;
      comparisonType?: string;
      comparisonValue?: string;
      expression?: string;
      type?: string;
    }>;
    useEventValue?: boolean;
  };
  /** Details for the goal of the type VISIT_NUM_PAGES. */
  visitNumPagesDetails?: { comparisonType?: string; comparisonValue?: string };
  /** Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT. */
  type?: string;
  /** Resource type for an Analytics goal. */
  kind?: string;
  /** Goal value. */
  value?: number;
  /** Account ID to which this goal belongs. */
  accountId?: string;
  /** Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY. */
  webPropertyId?: string;
  /** Time this goal was created. */
  created?: string;
  /** Link for this goal. */
  selfLink?: string;
  /** Details for the goal of the type URL_DESTINATION. */
  urlDestinationDetails?: {
    caseSensitive?: boolean;
    url?: string;
    matchType?: string;
    firstStepRequired?: boolean;
    steps?: ReadonlyArray<{ number?: number; name?: string; url?: string }>;
  };
  /** Details for the goal of the type VISIT_TIME_ON_SITE. */
  visitTimeOnSiteDetails?: {
    comparisonType?: string;
    comparisonValue?: string;
  };
  /** Internal ID for the web property to which this goal belongs. */
  internalWebPropertyId?: string;
  /** Time this goal was last modified. */
  updated?: string;
}

export const Goal: Schema.Schema<Goal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.optional(Schema.String),
    active: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    parentLink: Schema.optional(
      Schema.Struct({
        href: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    eventDetails: Schema.optional(
      Schema.Struct({
        eventConditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              matchType: Schema.optional(Schema.String),
              comparisonType: Schema.optional(Schema.String),
              comparisonValue: Schema.optional(Schema.String),
              expression: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        useEventValue: Schema.optional(Schema.Boolean),
      }),
    ),
    visitNumPagesDetails: Schema.optional(
      Schema.Struct({
        comparisonType: Schema.optional(Schema.String),
        comparisonValue: Schema.optional(Schema.String),
      }),
    ),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
    accountId: Schema.optional(Schema.String),
    webPropertyId: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    urlDestinationDetails: Schema.optional(
      Schema.Struct({
        caseSensitive: Schema.optional(Schema.Boolean),
        url: Schema.optional(Schema.String),
        matchType: Schema.optional(Schema.String),
        firstStepRequired: Schema.optional(Schema.Boolean),
        steps: Schema.optional(
          Schema.Array(
            Schema.Struct({
              number: Schema.optional(Schema.Number),
              name: Schema.optional(Schema.String),
              url: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    visitTimeOnSiteDetails: Schema.optional(
      Schema.Struct({
        comparisonType: Schema.optional(Schema.String),
        comparisonValue: Schema.optional(Schema.String),
      }),
    ),
    internalWebPropertyId: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
  }).annotate({ identifier: "Goal" });

export interface ProfileFilterLinks {
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Email ID of the authenticated user */
  username?: string;
  /** Collection type. */
  kind?: string;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Link to next page for this profile filter link collection. */
  nextLink?: string;
  /** Link to previous page for this profile filter link collection. */
  previousLink?: string;
  /** A list of profile filter links. */
  items?: ReadonlyArray<ProfileFilterLink>;
}

export const ProfileFilterLinks: Schema.Schema<ProfileFilterLinks> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalResults: Schema.optional(Schema.Number),
    startIndex: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    previousLink: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(ProfileFilterLink)),
  }).annotate({ identifier: "ProfileFilterLinks" });

export interface UnsampledReport {
  /** Unsampled report ID. */
  id?: string;
  /** The metrics for the unsampled report. */
  metrics?: string;
  /** View (Profile) ID to which this unsampled report belongs. */
  profileId?: string;
  /** Resource type for an Analytics unsampled report. */
  kind?: string;
  /** The dimensions for the unsampled report. */
  dimensions?: string;
  /** Download details for a file stored in Google Cloud Storage. */
  cloudStorageDownloadDetails?: { objectId?: string; bucketId?: string };
  /** Status of this unsampled report. Possible values are PENDING, COMPLETED, or FAILED. */
  status?: string;
  /** Download details for a file stored in Google Drive. */
  driveDownloadDetails?: { documentId?: string };
  /** The filters for the unsampled report. */
  filters?: string;
  /** Link for this unsampled report. */
  selfLink?: string;
  /** The start date for the unsampled report. */
  "start-date"?: string;
  /** Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY. */
  webPropertyId?: string;
  /** Time this unsampled report was created. */
  created?: string;
  /** Account ID to which this unsampled report belongs. */
  accountId?: string;
  /** Title of the unsampled report. */
  title?: string;
  /** The type of download you need to use for the report data file. Possible values include `GOOGLE_DRIVE` and `GOOGLE_CLOUD_STORAGE`. If the value is `GOOGLE_DRIVE`, see the `driveDownloadDetails` field. If the value is `GOOGLE_CLOUD_STORAGE`, see the `cloudStorageDownloadDetails` field. */
  downloadType?: string;
  /** The segment for the unsampled report. */
  segment?: string;
  /** The end date for the unsampled report. */
  "end-date"?: string;
  /** Time this unsampled report was last modified. */
  updated?: string;
}

export const UnsampledReport: Schema.Schema<UnsampledReport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    metrics: Schema.optional(Schema.String),
    profileId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    dimensions: Schema.optional(Schema.String),
    cloudStorageDownloadDetails: Schema.optional(
      Schema.Struct({
        objectId: Schema.optional(Schema.String),
        bucketId: Schema.optional(Schema.String),
      }),
    ),
    status: Schema.optional(Schema.String),
    driveDownloadDetails: Schema.optional(
      Schema.Struct({ documentId: Schema.optional(Schema.String) }),
    ),
    filters: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    "start-date": Schema.optional(Schema.String),
    webPropertyId: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    downloadType: Schema.optional(Schema.String),
    segment: Schema.optional(Schema.String),
    "end-date": Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnsampledReport" });

export interface Goals {
  /** The total number of results for the query, regardless of the number of resources in the result. */
  totalResults?: number;
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Email ID of the authenticated user */
  username?: string;
  /** Collection type. */
  kind?: string;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Link to next page for this goal collection. */
  nextLink?: string;
  /** Link to previous page for this goal collection. */
  previousLink?: string;
  /** A list of goals. */
  items?: ReadonlyArray<Goal>;
}

export const Goals: Schema.Schema<Goals> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalResults: Schema.optional(Schema.Number),
    startIndex: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    previousLink: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Goal)),
  }).annotate({ identifier: "Goals" });

export interface EntityAdWordsLinks {
  /** The total number of results for the query, regardless of the number of results in the response. */
  totalResults?: number;
  /** The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Collection type. */
  kind?: string;
  /** The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Next link for this Google Ads link collection. */
  nextLink?: string;
  /** Previous link for this Google Ads link collection. */
  previousLink?: string;
  /** A list of entity Google Ads links. */
  items?: ReadonlyArray<EntityAdWordsLink>;
}

export const EntityAdWordsLinks: Schema.Schema<EntityAdWordsLinks> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalResults: Schema.optional(Schema.Number),
    startIndex: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    previousLink: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(EntityAdWordsLink)),
  }).annotate({ identifier: "EntityAdWordsLinks" });

export interface UnsampledReports {
  /** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
  startIndex?: number;
  /** Email ID of the authenticated user */
  username?: string;
  /** The total number of results for the query, regardless of the number of resources in the result. */
  totalResults?: number;
  /** A list of unsampled reports. */
  items?: ReadonlyArray<UnsampledReport>;
  /** Link to previous page for this unsampled report collection. */
  previousLink?: string;
  /** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
  itemsPerPage?: number;
  /** Link to next page for this unsampled report collection. */
  nextLink?: string;
  /** Collection type. */
  kind?: string;
}

export const UnsampledReports: Schema.Schema<UnsampledReports> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startIndex: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
    totalResults: Schema.optional(Schema.Number),
    items: Schema.optional(Schema.Array(UnsampledReport)),
    previousLink: Schema.optional(Schema.String),
    itemsPerPage: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnsampledReports" });

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

export interface ListManagementWebpropertiesRequest {
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to. */
  accountId: string;
  /** The maximum number of web properties to include in this response. */
  "max-results"?: number;
}

export const ListManagementWebpropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
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

export type ListManagementWebpropertiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists web properties to which the user has access. */
export const listManagementWebproperties: API.OperationMethod<
  ListManagementWebpropertiesRequest,
  ListManagementWebpropertiesResponse,
  ListManagementWebpropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementWebpropertiesRequest,
  output: ListManagementWebpropertiesResponse,
  errors: [NotFound, Forbidden],
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

export type GetManagementWebpropertiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a web property to which the user has access. */
export const getManagementWebproperties: API.OperationMethod<
  GetManagementWebpropertiesRequest,
  GetManagementWebpropertiesResponse,
  GetManagementWebpropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementWebpropertiesRequest,
  output: GetManagementWebpropertiesResponse,
  errors: [NotFound, Forbidden],
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

export type InsertManagementWebpropertiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile. */
export const insertManagementWebproperties: API.OperationMethod<
  InsertManagementWebpropertiesRequest,
  InsertManagementWebpropertiesResponse,
  InsertManagementWebpropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementWebpropertiesRequest,
  output: InsertManagementWebpropertiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type PatchManagementWebpropertiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing web property. This method supports patch semantics. */
export const patchManagementWebproperties: API.OperationMethod<
  PatchManagementWebpropertiesRequest,
  PatchManagementWebpropertiesResponse,
  PatchManagementWebpropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementWebpropertiesRequest,
  output: PatchManagementWebpropertiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateManagementWebpropertiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing web property. */
export const updateManagementWebproperties: API.OperationMethod<
  UpdateManagementWebpropertiesRequest,
  UpdateManagementWebpropertiesResponse,
  UpdateManagementWebpropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementWebpropertiesRequest,
  output: UpdateManagementWebpropertiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListManagementAccountsRequest {
  /** An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** The maximum number of accounts to include in this response. */
  "max-results"?: number;
}

export const ListManagementAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "management/accounts" }),
    svc,
  ) as unknown as Schema.Schema<ListManagementAccountsRequest>;

export type ListManagementAccountsResponse = Accounts;
export const ListManagementAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Accounts;

export type ListManagementAccountsError = DefaultErrors | NotFound | Forbidden;

/** Lists all accounts to which the user has access. */
export const listManagementAccounts: API.OperationMethod<
  ListManagementAccountsRequest,
  ListManagementAccountsResponse,
  ListManagementAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementAccountsRequest,
  output: ListManagementAccountsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateManagementProfilesRequest {
  /** ID of the view (profile) to be updated. */
  profileId: string;
  /** Web property ID to which the view (profile) belongs */
  webPropertyId: string;
  /** Account ID to which the view (profile) belongs */
  accountId: string;
  /** Request body */
  body?: Profile;
}

export const UpdateManagementProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type UpdateManagementProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing view (profile). */
export const updateManagementProfiles: API.OperationMethod<
  UpdateManagementProfilesRequest,
  UpdateManagementProfilesResponse,
  UpdateManagementProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementProfilesRequest,
  output: UpdateManagementProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteManagementProfilesRequest {
  /** ID of the view (profile) to be deleted. */
  profileId: string;
  /** Web property ID to delete the view (profile) for. */
  webPropertyId: string;
  /** Account ID to delete the view (profile) for. */
  accountId: string;
}

export const DeleteManagementProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
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

export type DeleteManagementProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a view (profile). */
export const deleteManagementProfiles: API.OperationMethod<
  DeleteManagementProfilesRequest,
  DeleteManagementProfilesResponse,
  DeleteManagementProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementProfilesRequest,
  output: DeleteManagementProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetManagementProfilesError = DefaultErrors | NotFound | Forbidden;

/** Gets a view (profile) to which the user has access. */
export const getManagementProfiles: API.OperationMethod<
  GetManagementProfilesRequest,
  GetManagementProfilesResponse,
  GetManagementProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementProfilesRequest,
  output: GetManagementProfilesResponse,
  errors: [NotFound, Forbidden],
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

export type InsertManagementProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new view (profile). */
export const insertManagementProfiles: API.OperationMethod<
  InsertManagementProfilesRequest,
  InsertManagementProfilesResponse,
  InsertManagementProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementProfilesRequest,
  output: InsertManagementProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchManagementProfilesRequest {
  /** Account ID to which the view (profile) belongs */
  accountId: string;
  /** ID of the view (profile) to be updated. */
  profileId: string;
  /** Web property ID to which the view (profile) belongs */
  webPropertyId: string;
  /** Request body */
  body?: Profile;
}

export const PatchManagementProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
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

export type PatchManagementProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing view (profile). This method supports patch semantics. */
export const patchManagementProfiles: API.OperationMethod<
  PatchManagementProfilesRequest,
  PatchManagementProfilesResponse,
  PatchManagementProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementProfilesRequest,
  output: PatchManagementProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListManagementProfilesRequest {
  /** Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access. */
  accountId: string;
  /** The maximum number of views (profiles) to include in this response. */
  "max-results"?: number;
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access. */
  webPropertyId: string;
}

export const ListManagementProfilesRequest =
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
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles",
    }),
    svc,
  ) as unknown as Schema.Schema<ListManagementProfilesRequest>;

export type ListManagementProfilesResponse = Profiles;
export const ListManagementProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Profiles;

export type ListManagementProfilesError = DefaultErrors | NotFound | Forbidden;

/** Lists views (profiles) to which the user has access. */
export const listManagementProfiles: API.OperationMethod<
  ListManagementProfilesRequest,
  ListManagementProfilesResponse,
  ListManagementProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementProfilesRequest,
  output: ListManagementProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetManagementRemarketingAudienceRequest {
  /** The account ID of the remarketing audience to retrieve. */
  accountId: string;
  /** The web property ID of the remarketing audience to retrieve. */
  webPropertyId: string;
  /** The ID of the remarketing audience to retrieve. */
  remarketingAudienceId: string;
}

export const GetManagementRemarketingAudienceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    remarketingAudienceId: Schema.String.pipe(
      T.HttpPath("remarketingAudienceId"),
    ),
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

export type GetManagementRemarketingAudienceError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a remarketing audience to which the user has access. */
export const getManagementRemarketingAudience: API.OperationMethod<
  GetManagementRemarketingAudienceRequest,
  GetManagementRemarketingAudienceResponse,
  GetManagementRemarketingAudienceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementRemarketingAudienceRequest,
  output: GetManagementRemarketingAudienceResponse,
  errors: [NotFound, Forbidden],
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

export type InsertManagementRemarketingAudienceError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new remarketing audience. */
export const insertManagementRemarketingAudience: API.OperationMethod<
  InsertManagementRemarketingAudienceRequest,
  InsertManagementRemarketingAudienceResponse,
  InsertManagementRemarketingAudienceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementRemarketingAudienceRequest,
  output: InsertManagementRemarketingAudienceResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchManagementRemarketingAudienceRequest {
  /** The account ID of the remarketing audience to update. */
  accountId: string;
  /** The web property ID of the remarketing audience to update. */
  webPropertyId: string;
  /** The ID of the remarketing audience to update. */
  remarketingAudienceId: string;
  /** Request body */
  body?: RemarketingAudience;
}

export const PatchManagementRemarketingAudienceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    remarketingAudienceId: Schema.String.pipe(
      T.HttpPath("remarketingAudienceId"),
    ),
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

export type PatchManagementRemarketingAudienceError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing remarketing audience. This method supports patch semantics. */
export const patchManagementRemarketingAudience: API.OperationMethod<
  PatchManagementRemarketingAudienceRequest,
  PatchManagementRemarketingAudienceResponse,
  PatchManagementRemarketingAudienceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementRemarketingAudienceRequest,
  output: PatchManagementRemarketingAudienceResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListManagementRemarketingAudienceRequest {
  /** The account ID of the remarketing audiences to retrieve. */
  accountId: string;
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** The maximum number of remarketing audiences to include in this response. */
  "max-results"?: number;
  type?: string;
  /** The web property ID of the remarketing audiences to retrieve. */
  webPropertyId: string;
}

export const ListManagementRemarketingAudienceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
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

export type ListManagementRemarketingAudienceError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists remarketing audiences to which the user has access. */
export const listManagementRemarketingAudience: API.OperationMethod<
  ListManagementRemarketingAudienceRequest,
  ListManagementRemarketingAudienceResponse,
  ListManagementRemarketingAudienceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementRemarketingAudienceRequest,
  output: ListManagementRemarketingAudienceResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateManagementRemarketingAudienceRequest {
  /** The account ID of the remarketing audience to update. */
  accountId: string;
  /** The ID of the remarketing audience to update. */
  remarketingAudienceId: string;
  /** The web property ID of the remarketing audience to update. */
  webPropertyId: string;
  /** Request body */
  body?: RemarketingAudience;
}

export const UpdateManagementRemarketingAudienceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    remarketingAudienceId: Schema.String.pipe(
      T.HttpPath("remarketingAudienceId"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
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

export type UpdateManagementRemarketingAudienceError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing remarketing audience. */
export const updateManagementRemarketingAudience: API.OperationMethod<
  UpdateManagementRemarketingAudienceRequest,
  UpdateManagementRemarketingAudienceResponse,
  UpdateManagementRemarketingAudienceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementRemarketingAudienceRequest,
  output: UpdateManagementRemarketingAudienceResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteManagementRemarketingAudienceRequest {
  /** Web property ID to which the remarketing audience belongs. */
  webPropertyId: string;
  /** The ID of the remarketing audience to delete. */
  remarketingAudienceId: string;
  /** Account ID to which the remarketing audience belongs. */
  accountId: string;
}

export const DeleteManagementRemarketingAudienceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    remarketingAudienceId: Schema.String.pipe(
      T.HttpPath("remarketingAudienceId"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type DeleteManagementRemarketingAudienceError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a remarketing audience. */
export const deleteManagementRemarketingAudience: API.OperationMethod<
  DeleteManagementRemarketingAudienceRequest,
  DeleteManagementRemarketingAudienceResponse,
  DeleteManagementRemarketingAudienceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementRemarketingAudienceRequest,
  output: DeleteManagementRemarketingAudienceResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetManagementWebPropertyAdWordsLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a web property-Google Ads link to which the user has access. */
export const getManagementWebPropertyAdWordsLinks: API.OperationMethod<
  GetManagementWebPropertyAdWordsLinksRequest,
  GetManagementWebPropertyAdWordsLinksResponse,
  GetManagementWebPropertyAdWordsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementWebPropertyAdWordsLinksRequest,
  output: GetManagementWebPropertyAdWordsLinksResponse,
  errors: [NotFound, Forbidden],
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

export type InsertManagementWebPropertyAdWordsLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a webProperty-Google Ads link. */
export const insertManagementWebPropertyAdWordsLinks: API.OperationMethod<
  InsertManagementWebPropertyAdWordsLinksRequest,
  InsertManagementWebPropertyAdWordsLinksResponse,
  InsertManagementWebPropertyAdWordsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementWebPropertyAdWordsLinksRequest,
  output: InsertManagementWebPropertyAdWordsLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchManagementWebPropertyAdWordsLinksRequest {
  /** Web property-Google Ads link ID. */
  webPropertyAdWordsLinkId: string;
  /** Web property ID to retrieve the Google Ads link for. */
  webPropertyId: string;
  /** ID of the account which the given web property belongs to. */
  accountId: string;
  /** Request body */
  body?: EntityAdWordsLink;
}

export const PatchManagementWebPropertyAdWordsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyAdWordsLinkId: Schema.String.pipe(
      T.HttpPath("webPropertyAdWordsLinkId"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type PatchManagementWebPropertyAdWordsLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing webProperty-Google Ads link. This method supports patch semantics. */
export const patchManagementWebPropertyAdWordsLinks: API.OperationMethod<
  PatchManagementWebPropertyAdWordsLinksRequest,
  PatchManagementWebPropertyAdWordsLinksResponse,
  PatchManagementWebPropertyAdWordsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementWebPropertyAdWordsLinksRequest,
  output: PatchManagementWebPropertyAdWordsLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListManagementWebPropertyAdWordsLinksRequest {
  /** An index of the first webProperty-Google Ads link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** Web property ID to retrieve the Google Ads links for. */
  webPropertyId: string;
  /** ID of the account which the given web property belongs to. */
  accountId: string;
  /** The maximum number of webProperty-Google Ads links to include in this response. */
  "max-results"?: number;
}

export const ListManagementWebPropertyAdWordsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
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

export type ListManagementWebPropertyAdWordsLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists webProperty-Google Ads links for a given web property. */
export const listManagementWebPropertyAdWordsLinks: API.OperationMethod<
  ListManagementWebPropertyAdWordsLinksRequest,
  ListManagementWebPropertyAdWordsLinksResponse,
  ListManagementWebPropertyAdWordsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementWebPropertyAdWordsLinksRequest,
  output: ListManagementWebPropertyAdWordsLinksResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateManagementWebPropertyAdWordsLinksRequest {
  /** Web property-Google Ads link ID. */
  webPropertyAdWordsLinkId: string;
  /** Web property ID to retrieve the Google Ads link for. */
  webPropertyId: string;
  /** ID of the account which the given web property belongs to. */
  accountId: string;
  /** Request body */
  body?: EntityAdWordsLink;
}

export const UpdateManagementWebPropertyAdWordsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyAdWordsLinkId: Schema.String.pipe(
      T.HttpPath("webPropertyAdWordsLinkId"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type UpdateManagementWebPropertyAdWordsLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing webProperty-Google Ads link. */
export const updateManagementWebPropertyAdWordsLinks: API.OperationMethod<
  UpdateManagementWebPropertyAdWordsLinksRequest,
  UpdateManagementWebPropertyAdWordsLinksResponse,
  UpdateManagementWebPropertyAdWordsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementWebPropertyAdWordsLinksRequest,
  output: UpdateManagementWebPropertyAdWordsLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteManagementWebPropertyAdWordsLinksRequest {
  /** Web property Google Ads link ID. */
  webPropertyAdWordsLinkId: string;
  /** Web property ID to delete the Google Ads link for. */
  webPropertyId: string;
  /** ID of the account which the given web property belongs to. */
  accountId: string;
}

export const DeleteManagementWebPropertyAdWordsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyAdWordsLinkId: Schema.String.pipe(
      T.HttpPath("webPropertyAdWordsLinkId"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type DeleteManagementWebPropertyAdWordsLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a web property-Google Ads link. */
export const deleteManagementWebPropertyAdWordsLinks: API.OperationMethod<
  DeleteManagementWebPropertyAdWordsLinksRequest,
  DeleteManagementWebPropertyAdWordsLinksResponse,
  DeleteManagementWebPropertyAdWordsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementWebPropertyAdWordsLinksRequest,
  output: DeleteManagementWebPropertyAdWordsLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListManagementAccountSummariesRequest {
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** The maximum number of account summaries to include in this response, where the largest acceptable value is 1000. */
  "max-results"?: number;
}

export const ListManagementAccountSummariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "management/accountSummaries" }),
    svc,
  ) as unknown as Schema.Schema<ListManagementAccountSummariesRequest>;

export type ListManagementAccountSummariesResponse = AccountSummaries;
export const ListManagementAccountSummariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountSummaries;

export type ListManagementAccountSummariesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access. */
export const listManagementAccountSummaries: API.OperationMethod<
  ListManagementAccountSummariesRequest,
  ListManagementAccountSummariesResponse,
  ListManagementAccountSummariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementAccountSummariesRequest,
  output: ListManagementAccountSummariesResponse,
  errors: [NotFound, Forbidden],
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

export type HashClientIdManagementClientIdError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Hashes the given Client ID. */
export const hashClientIdManagementClientId: API.OperationMethod<
  HashClientIdManagementClientIdRequest,
  HashClientIdManagementClientIdResponse,
  HashClientIdManagementClientIdError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: HashClientIdManagementClientIdRequest,
  output: HashClientIdManagementClientIdResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListManagementCustomDataSourcesRequest {
  /** Web property Id for the custom data sources to retrieve. */
  webPropertyId: string;
  /** A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** Account Id for the custom data sources to retrieve. */
  accountId: string;
  /** The maximum number of custom data sources to include in this response. */
  "max-results"?: number;
}

export const ListManagementCustomDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
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

export type ListManagementCustomDataSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List custom data sources to which the user has access. */
export const listManagementCustomDataSources: API.OperationMethod<
  ListManagementCustomDataSourcesRequest,
  ListManagementCustomDataSourcesResponse,
  ListManagementCustomDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementCustomDataSourcesRequest,
  output: ListManagementCustomDataSourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateManagementCustomMetricsRequest {
  /** Custom metric ID for the custom metric to update. */
  customMetricId: string;
  /** Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set. */
  ignoreCustomDataSourceLinks?: boolean;
  /** Web property ID for the custom metric to update. */
  webPropertyId: string;
  /** Account ID for the custom metric to update. */
  accountId: string;
  /** Request body */
  body?: CustomMetric;
}

export const UpdateManagementCustomMetricsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customMetricId: Schema.String.pipe(T.HttpPath("customMetricId")),
    ignoreCustomDataSourceLinks: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ignoreCustomDataSourceLinks"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type UpdateManagementCustomMetricsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing custom metric. */
export const updateManagementCustomMetrics: API.OperationMethod<
  UpdateManagementCustomMetricsRequest,
  UpdateManagementCustomMetricsResponse,
  UpdateManagementCustomMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementCustomMetricsRequest,
  output: UpdateManagementCustomMetricsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListManagementCustomMetricsRequest {
  /** Account ID for the custom metrics to retrieve. */
  accountId: string;
  /** The maximum number of custom metrics to include in this response. */
  "max-results"?: number;
  /** Web property ID for the custom metrics to retrieve. */
  webPropertyId: string;
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
}

export const ListManagementCustomMetricsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
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

export type ListManagementCustomMetricsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists custom metrics to which the user has access. */
export const listManagementCustomMetrics: API.OperationMethod<
  ListManagementCustomMetricsRequest,
  ListManagementCustomMetricsResponse,
  ListManagementCustomMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementCustomMetricsRequest,
  output: ListManagementCustomMetricsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetManagementCustomMetricsRequest {
  /** Account ID for the custom metric to retrieve. */
  accountId: string;
  /** The ID of the custom metric to retrieve. */
  customMetricId: string;
  /** Web property ID for the custom metric to retrieve. */
  webPropertyId: string;
}

export const GetManagementCustomMetricsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    customMetricId: Schema.String.pipe(T.HttpPath("customMetricId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
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

export type GetManagementCustomMetricsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a custom metric to which the user has access. */
export const getManagementCustomMetrics: API.OperationMethod<
  GetManagementCustomMetricsRequest,
  GetManagementCustomMetricsResponse,
  GetManagementCustomMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementCustomMetricsRequest,
  output: GetManagementCustomMetricsResponse,
  errors: [NotFound, Forbidden],
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

export type InsertManagementCustomMetricsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new custom metric. */
export const insertManagementCustomMetrics: API.OperationMethod<
  InsertManagementCustomMetricsRequest,
  InsertManagementCustomMetricsResponse,
  InsertManagementCustomMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementCustomMetricsRequest,
  output: InsertManagementCustomMetricsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchManagementCustomMetricsRequest {
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

export const PatchManagementCustomMetricsRequest =
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
      method: "PATCH",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchManagementCustomMetricsRequest>;

export type PatchManagementCustomMetricsResponse = CustomMetric;
export const PatchManagementCustomMetricsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomMetric;

export type PatchManagementCustomMetricsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing custom metric. This method supports patch semantics. */
export const patchManagementCustomMetrics: API.OperationMethod<
  PatchManagementCustomMetricsRequest,
  PatchManagementCustomMetricsResponse,
  PatchManagementCustomMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementCustomMetricsRequest,
  output: PatchManagementCustomMetricsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListManagementCustomDimensionsRequest {
  /** Account ID for the custom dimensions to retrieve. */
  accountId: string;
  /** The maximum number of custom dimensions to include in this response. */
  "max-results"?: number;
  /** Web property ID for the custom dimensions to retrieve. */
  webPropertyId: string;
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
}

export const ListManagementCustomDimensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
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

export type ListManagementCustomDimensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists custom dimensions to which the user has access. */
export const listManagementCustomDimensions: API.OperationMethod<
  ListManagementCustomDimensionsRequest,
  ListManagementCustomDimensionsResponse,
  ListManagementCustomDimensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementCustomDimensionsRequest,
  output: ListManagementCustomDimensionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetManagementCustomDimensionsRequest {
  /** Account ID for the custom dimension to retrieve. */
  accountId: string;
  /** The ID of the custom dimension to retrieve. */
  customDimensionId: string;
  /** Web property ID for the custom dimension to retrieve. */
  webPropertyId: string;
}

export const GetManagementCustomDimensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    customDimensionId: Schema.String.pipe(T.HttpPath("customDimensionId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
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

export type GetManagementCustomDimensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a custom dimension to which the user has access. */
export const getManagementCustomDimensions: API.OperationMethod<
  GetManagementCustomDimensionsRequest,
  GetManagementCustomDimensionsResponse,
  GetManagementCustomDimensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementCustomDimensionsRequest,
  output: GetManagementCustomDimensionsResponse,
  errors: [NotFound, Forbidden],
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

export type InsertManagementCustomDimensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new custom dimension. */
export const insertManagementCustomDimensions: API.OperationMethod<
  InsertManagementCustomDimensionsRequest,
  InsertManagementCustomDimensionsResponse,
  InsertManagementCustomDimensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementCustomDimensionsRequest,
  output: InsertManagementCustomDimensionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type PatchManagementCustomDimensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing custom dimension. This method supports patch semantics. */
export const patchManagementCustomDimensions: API.OperationMethod<
  PatchManagementCustomDimensionsRequest,
  PatchManagementCustomDimensionsResponse,
  PatchManagementCustomDimensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementCustomDimensionsRequest,
  output: PatchManagementCustomDimensionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateManagementCustomDimensionsRequest {
  /** Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set. */
  ignoreCustomDataSourceLinks?: boolean;
  /** Web property ID for the custom dimension to update. */
  webPropertyId: string;
  /** Custom dimension ID for the custom dimension to update. */
  customDimensionId: string;
  /** Account ID for the custom dimension to update. */
  accountId: string;
  /** Request body */
  body?: CustomDimension;
}

export const UpdateManagementCustomDimensionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ignoreCustomDataSourceLinks: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ignoreCustomDataSourceLinks"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    customDimensionId: Schema.String.pipe(T.HttpPath("customDimensionId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type UpdateManagementCustomDimensionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing custom dimension. */
export const updateManagementCustomDimensions: API.OperationMethod<
  UpdateManagementCustomDimensionsRequest,
  UpdateManagementCustomDimensionsResponse,
  UpdateManagementCustomDimensionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementCustomDimensionsRequest,
  output: UpdateManagementCustomDimensionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListManagementGoalsRequest {
  /** An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to. */
  profileId: string;
  /** Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to. */
  accountId: string;
  /** Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to. */
  webPropertyId: string;
  /** The maximum number of goals to include in this response. */
  "max-results"?: number;
}

export const ListManagementGoalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
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

export type ListManagementGoalsError = DefaultErrors | NotFound | Forbidden;

/** Lists goals to which the user has access. */
export const listManagementGoals: API.OperationMethod<
  ListManagementGoalsRequest,
  ListManagementGoalsResponse,
  ListManagementGoalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementGoalsRequest,
  output: ListManagementGoalsResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertManagementGoalsRequest {
  /** View (Profile) ID to create the goal for. */
  profileId: string;
  /** Web property ID to create the goal for. */
  webPropertyId: string;
  /** Account ID to create the goal for. */
  accountId: string;
  /** Request body */
  body?: Goal;
}

export const InsertManagementGoalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type InsertManagementGoalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new goal. */
export const insertManagementGoals: API.OperationMethod<
  InsertManagementGoalsRequest,
  InsertManagementGoalsResponse,
  InsertManagementGoalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementGoalsRequest,
  output: InsertManagementGoalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchManagementGoalsRequest {
  /** View (Profile) ID to update the goal. */
  profileId: string;
  /** Web property ID to update the goal. */
  webPropertyId: string;
  /** Account ID to update the goal. */
  accountId: string;
  /** Index of the goal to be updated. */
  goalId: string;
  /** Request body */
  body?: Goal;
}

export const PatchManagementGoalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    goalId: Schema.String.pipe(T.HttpPath("goalId")),
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

export type PatchManagementGoalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing goal. This method supports patch semantics. */
export const patchManagementGoals: API.OperationMethod<
  PatchManagementGoalsRequest,
  PatchManagementGoalsResponse,
  PatchManagementGoalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementGoalsRequest,
  output: PatchManagementGoalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetManagementGoalsRequest {
  /** Account ID to retrieve the goal for. */
  accountId: string;
  /** Goal ID to retrieve the goal for. */
  goalId: string;
  /** View (Profile) ID to retrieve the goal for. */
  profileId: string;
  /** Web property ID to retrieve the goal for. */
  webPropertyId: string;
}

export const GetManagementGoalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    goalId: Schema.String.pipe(T.HttpPath("goalId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetManagementGoalsRequest>;

export type GetManagementGoalsResponse = Goal;
export const GetManagementGoalsResponse = /*@__PURE__*/ /*#__PURE__*/ Goal;

export type GetManagementGoalsError = DefaultErrors | NotFound | Forbidden;

/** Gets a goal to which the user has access. */
export const getManagementGoals: API.OperationMethod<
  GetManagementGoalsRequest,
  GetManagementGoalsResponse,
  GetManagementGoalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementGoalsRequest,
  output: GetManagementGoalsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateManagementGoalsRequest {
  /** Account ID to update the goal. */
  accountId: string;
  /** Index of the goal to be updated. */
  goalId: string;
  /** View (Profile) ID to update the goal. */
  profileId: string;
  /** Web property ID to update the goal. */
  webPropertyId: string;
  /** Request body */
  body?: Goal;
}

export const UpdateManagementGoalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    goalId: Schema.String.pipe(T.HttpPath("goalId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
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

export type UpdateManagementGoalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing goal. */
export const updateManagementGoals: API.OperationMethod<
  UpdateManagementGoalsRequest,
  UpdateManagementGoalsResponse,
  UpdateManagementGoalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementGoalsRequest,
  output: UpdateManagementGoalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertManagementUnsampledReportsRequest {
  /** Account ID to create the unsampled report for. */
  accountId: string;
  /** View (Profile) ID to create the unsampled report for. */
  profileId: string;
  /** Web property ID to create the unsampled report for. */
  webPropertyId: string;
  /** Request body */
  body?: UnsampledReport;
}

export const InsertManagementUnsampledReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
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

export type InsertManagementUnsampledReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new unsampled report. */
export const insertManagementUnsampledReports: API.OperationMethod<
  InsertManagementUnsampledReportsRequest,
  InsertManagementUnsampledReportsResponse,
  InsertManagementUnsampledReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementUnsampledReportsRequest,
  output: InsertManagementUnsampledReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetManagementUnsampledReportsRequest {
  /** View (Profile) ID to retrieve unsampled report for. */
  profileId: string;
  /** Web property ID to retrieve unsampled reports for. */
  webPropertyId: string;
  /** ID of the unsampled report to retrieve. */
  unsampledReportId: string;
  /** Account ID to retrieve unsampled report for. */
  accountId: string;
}

export const GetManagementUnsampledReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    unsampledReportId: Schema.String.pipe(T.HttpPath("unsampledReportId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type GetManagementUnsampledReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a single unsampled report. */
export const getManagementUnsampledReports: API.OperationMethod<
  GetManagementUnsampledReportsRequest,
  GetManagementUnsampledReportsResponse,
  GetManagementUnsampledReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementUnsampledReportsRequest,
  output: GetManagementUnsampledReportsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteManagementUnsampledReportsRequest {
  /** View (Profile) ID to delete the unsampled report for. */
  profileId: string;
  /** Web property ID to delete the unsampled reports for. */
  webPropertyId: string;
  /** Account ID to delete the unsampled report for. */
  accountId: string;
  /** ID of the unsampled report to be deleted. */
  unsampledReportId: string;
}

export const DeleteManagementUnsampledReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    unsampledReportId: Schema.String.pipe(T.HttpPath("unsampledReportId")),
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

export type DeleteManagementUnsampledReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an unsampled report. */
export const deleteManagementUnsampledReports: API.OperationMethod<
  DeleteManagementUnsampledReportsRequest,
  DeleteManagementUnsampledReportsResponse,
  DeleteManagementUnsampledReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementUnsampledReportsRequest,
  output: DeleteManagementUnsampledReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListManagementUnsampledReportsRequest {
  /** Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported. */
  webPropertyId: string;
  /** The maximum number of unsampled reports to include in this response. */
  "max-results"?: number;
  /** An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported. */
  profileId: string;
  /** Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported. */
  accountId: string;
}

export const ListManagementUnsampledReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type ListManagementUnsampledReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists unsampled reports to which the user has access. */
export const listManagementUnsampledReports: API.OperationMethod<
  ListManagementUnsampledReportsRequest,
  ListManagementUnsampledReportsResponse,
  ListManagementUnsampledReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementUnsampledReportsRequest,
  output: ListManagementUnsampledReportsResponse,
  errors: [NotFound, Forbidden],
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

export type UpdateManagementFiltersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing filter. */
export const updateManagementFilters: API.OperationMethod<
  UpdateManagementFiltersRequest,
  UpdateManagementFiltersResponse,
  UpdateManagementFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementFiltersRequest,
  output: UpdateManagementFiltersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type DeleteManagementFiltersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a filter. */
export const deleteManagementFilters: API.OperationMethod<
  DeleteManagementFiltersRequest,
  DeleteManagementFiltersResponse,
  DeleteManagementFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementFiltersRequest,
  output: DeleteManagementFiltersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetManagementFiltersError = DefaultErrors | NotFound | Forbidden;

/** Returns filters to which the user has access. */
export const getManagementFilters: API.OperationMethod<
  GetManagementFiltersRequest,
  GetManagementFiltersResponse,
  GetManagementFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementFiltersRequest,
  output: GetManagementFiltersResponse,
  errors: [NotFound, Forbidden],
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

export type InsertManagementFiltersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new filter. */
export const insertManagementFilters: API.OperationMethod<
  InsertManagementFiltersRequest,
  InsertManagementFiltersResponse,
  InsertManagementFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementFiltersRequest,
  output: InsertManagementFiltersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type PatchManagementFiltersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing filter. This method supports patch semantics. */
export const patchManagementFilters: API.OperationMethod<
  PatchManagementFiltersRequest,
  PatchManagementFiltersResponse,
  PatchManagementFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementFiltersRequest,
  output: PatchManagementFiltersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type ListManagementFiltersError = DefaultErrors | NotFound | Forbidden;

/** Lists all filters for an account */
export const listManagementFilters: API.OperationMethod<
  ListManagementFiltersRequest,
  ListManagementFiltersResponse,
  ListManagementFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementFiltersRequest,
  output: ListManagementFiltersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListManagementExperimentsRequest {
  /** Account ID to retrieve experiments for. */
  accountId: string;
  /** An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** View (Profile) ID to retrieve experiments for. */
  profileId: string;
  /** The maximum number of experiments to include in this response. */
  "max-results"?: number;
  /** Web property ID to retrieve experiments for. */
  webPropertyId: string;
}

export const ListManagementExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
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

export type ListManagementExperimentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists experiments to which the user has access. */
export const listManagementExperiments: API.OperationMethod<
  ListManagementExperimentsRequest,
  ListManagementExperimentsResponse,
  ListManagementExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementExperimentsRequest,
  output: ListManagementExperimentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetManagementExperimentsRequest {
  /** Experiment ID to retrieve the experiment for. */
  experimentId: string;
  /** View (Profile) ID to retrieve the experiment for. */
  profileId: string;
  /** Web property ID to retrieve the experiment for. */
  webPropertyId: string;
  /** Account ID to retrieve the experiment for. */
  accountId: string;
}

export const GetManagementExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    experimentId: Schema.String.pipe(T.HttpPath("experimentId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
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

export type GetManagementExperimentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns an experiment to which the user has access. */
export const getManagementExperiments: API.OperationMethod<
  GetManagementExperimentsRequest,
  GetManagementExperimentsResponse,
  GetManagementExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementExperimentsRequest,
  output: GetManagementExperimentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertManagementExperimentsRequest {
  /** View (Profile) ID to create the experiment for. */
  profileId: string;
  /** Web property ID to create the experiment for. */
  webPropertyId: string;
  /** Account ID to create the experiment for. */
  accountId: string;
  /** Request body */
  body?: Experiment;
}

export const InsertManagementExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type InsertManagementExperimentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new experiment. */
export const insertManagementExperiments: API.OperationMethod<
  InsertManagementExperimentsRequest,
  InsertManagementExperimentsResponse,
  InsertManagementExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementExperimentsRequest,
  output: InsertManagementExperimentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchManagementExperimentsRequest {
  /** Account ID of the experiment to update. */
  accountId: string;
  /** Experiment ID of the experiment to update. */
  experimentId: string;
  /** View (Profile) ID of the experiment to update. */
  profileId: string;
  /** Web property ID of the experiment to update. */
  webPropertyId: string;
  /** Request body */
  body?: Experiment;
}

export const PatchManagementExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    experimentId: Schema.String.pipe(T.HttpPath("experimentId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
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

export type PatchManagementExperimentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update an existing experiment. This method supports patch semantics. */
export const patchManagementExperiments: API.OperationMethod<
  PatchManagementExperimentsRequest,
  PatchManagementExperimentsResponse,
  PatchManagementExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementExperimentsRequest,
  output: PatchManagementExperimentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteManagementExperimentsRequest {
  /** Account ID to which the experiment belongs */
  accountId: string;
  /** View (Profile) ID to which the experiment belongs */
  profileId: string;
  /** Web property ID to which the experiment belongs */
  webPropertyId: string;
  /** ID of the experiment to delete */
  experimentId: string;
}

export const DeleteManagementExperimentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
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

export type DeleteManagementExperimentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete an experiment. */
export const deleteManagementExperiments: API.OperationMethod<
  DeleteManagementExperimentsRequest,
  DeleteManagementExperimentsResponse,
  DeleteManagementExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementExperimentsRequest,
  output: DeleteManagementExperimentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateManagementExperimentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update an existing experiment. */
export const updateManagementExperiments: API.OperationMethod<
  UpdateManagementExperimentsRequest,
  UpdateManagementExperimentsResponse,
  UpdateManagementExperimentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementExperimentsRequest,
  output: UpdateManagementExperimentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteManagementAccountUserLinksRequest {
  /** Link ID to delete the user link for. */
  linkId: string;
  /** Account ID to delete the user link for. */
  accountId: string;
}

export const DeleteManagementAccountUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type DeleteManagementAccountUserLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a user from the given account. */
export const deleteManagementAccountUserLinks: API.OperationMethod<
  DeleteManagementAccountUserLinksRequest,
  DeleteManagementAccountUserLinksResponse,
  DeleteManagementAccountUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementAccountUserLinksRequest,
  output: DeleteManagementAccountUserLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListManagementAccountUserLinksRequest {
  /** An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** Account ID to retrieve the user links for. */
  accountId: string;
  /** The maximum number of account-user links to include in this response. */
  "max-results"?: number;
}

export const ListManagementAccountUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
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

export type ListManagementAccountUserLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists account-user links for a given account. */
export const listManagementAccountUserLinks: API.OperationMethod<
  ListManagementAccountUserLinksRequest,
  ListManagementAccountUserLinksResponse,
  ListManagementAccountUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementAccountUserLinksRequest,
  output: ListManagementAccountUserLinksResponse,
  errors: [NotFound, Forbidden],
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

export type InsertManagementAccountUserLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a new user to the given account. */
export const insertManagementAccountUserLinks: API.OperationMethod<
  InsertManagementAccountUserLinksRequest,
  InsertManagementAccountUserLinksResponse,
  InsertManagementAccountUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementAccountUserLinksRequest,
  output: InsertManagementAccountUserLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateManagementAccountUserLinksRequest {
  /** Link ID to update the account-user link for. */
  linkId: string;
  /** Account ID to update the account-user link for. */
  accountId: string;
  /** Request body */
  body?: EntityUserLink;
}

export const UpdateManagementAccountUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type UpdateManagementAccountUserLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates permissions for an existing user on the given account. */
export const updateManagementAccountUserLinks: API.OperationMethod<
  UpdateManagementAccountUserLinksRequest,
  UpdateManagementAccountUserLinksResponse,
  UpdateManagementAccountUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementAccountUserLinksRequest,
  output: UpdateManagementAccountUserLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetManagementProfileFilterLinksRequest {
  /** Profile ID to retrieve filter link for. */
  profileId: string;
  /** Web property Id to retrieve profile filter link for. */
  webPropertyId: string;
  /** ID of the profile filter link. */
  linkId: string;
  /** Account ID to retrieve profile filter link for. */
  accountId: string;
}

export const GetManagementProfileFilterLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type GetManagementProfileFilterLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a single profile filter link. */
export const getManagementProfileFilterLinks: API.OperationMethod<
  GetManagementProfileFilterLinksRequest,
  GetManagementProfileFilterLinksResponse,
  GetManagementProfileFilterLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementProfileFilterLinksRequest,
  output: GetManagementProfileFilterLinksResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertManagementProfileFilterLinksRequest {
  /** Account ID to create profile filter link for. */
  accountId: string;
  /** Profile ID to create filter link for. */
  profileId: string;
  /** Web property Id to create profile filter link for. */
  webPropertyId: string;
  /** Request body */
  body?: ProfileFilterLink;
}

export const InsertManagementProfileFilterLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
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

export type InsertManagementProfileFilterLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new profile filter link. */
export const insertManagementProfileFilterLinks: API.OperationMethod<
  InsertManagementProfileFilterLinksRequest,
  InsertManagementProfileFilterLinksResponse,
  InsertManagementProfileFilterLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementProfileFilterLinksRequest,
  output: InsertManagementProfileFilterLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type PatchManagementProfileFilterLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update an existing profile filter link. This method supports patch semantics. */
export const patchManagementProfileFilterLinks: API.OperationMethod<
  PatchManagementProfileFilterLinksRequest,
  PatchManagementProfileFilterLinksResponse,
  PatchManagementProfileFilterLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagementProfileFilterLinksRequest,
  output: PatchManagementProfileFilterLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListManagementProfileFilterLinksRequest {
  /** Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to. */
  webPropertyId: string;
  /** The maximum number of profile filter links to include in this response. */
  "max-results"?: number;
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to. */
  profileId: string;
  /** Account ID to retrieve profile filter links for. */
  accountId: string;
}

export const ListManagementProfileFilterLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type ListManagementProfileFilterLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all profile filter links for a profile. */
export const listManagementProfileFilterLinks: API.OperationMethod<
  ListManagementProfileFilterLinksRequest,
  ListManagementProfileFilterLinksResponse,
  ListManagementProfileFilterLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementProfileFilterLinksRequest,
  output: ListManagementProfileFilterLinksResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateManagementProfileFilterLinksRequest {
  /** Account ID to which profile filter link belongs. */
  accountId: string;
  /** Profile ID to which filter link belongs */
  profileId: string;
  /** Web property Id to which profile filter link belongs */
  webPropertyId: string;
  /** ID of the profile filter link to be updated. */
  linkId: string;
  /** Request body */
  body?: ProfileFilterLink;
}

export const UpdateManagementProfileFilterLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
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

export type UpdateManagementProfileFilterLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update an existing profile filter link. */
export const updateManagementProfileFilterLinks: API.OperationMethod<
  UpdateManagementProfileFilterLinksRequest,
  UpdateManagementProfileFilterLinksResponse,
  UpdateManagementProfileFilterLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementProfileFilterLinksRequest,
  output: UpdateManagementProfileFilterLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteManagementProfileFilterLinksRequest {
  /** Profile ID to which the filter link belongs. */
  profileId: string;
  /** Web property Id to which the profile filter link belongs. */
  webPropertyId: string;
  /** ID of the profile filter link to delete. */
  linkId: string;
  /** Account ID to which the profile filter link belongs. */
  accountId: string;
}

export const DeleteManagementProfileFilterLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type DeleteManagementProfileFilterLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a profile filter link. */
export const deleteManagementProfileFilterLinks: API.OperationMethod<
  DeleteManagementProfileFilterLinksRequest,
  DeleteManagementProfileFilterLinksResponse,
  DeleteManagementProfileFilterLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementProfileFilterLinksRequest,
  output: DeleteManagementProfileFilterLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type ListManagementSegmentsError = DefaultErrors | NotFound | Forbidden;

/** Lists segments to which the user has access. */
export const listManagementSegments: API.OperationMethod<
  ListManagementSegmentsRequest,
  ListManagementSegmentsResponse,
  ListManagementSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementSegmentsRequest,
  output: ListManagementSegmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListManagementProfileUserLinksRequest {
  /** Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to. */
  webPropertyId: string;
  /** The maximum number of profile-user links to include in this response. */
  "max-results"?: number;
  /** An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to. */
  profileId: string;
  /** Account ID which the given view (profile) belongs to. */
  accountId: string;
}

export const ListManagementProfileUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type ListManagementProfileUserLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists profile-user links for a given view (profile). */
export const listManagementProfileUserLinks: API.OperationMethod<
  ListManagementProfileUserLinksRequest,
  ListManagementProfileUserLinksResponse,
  ListManagementProfileUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementProfileUserLinksRequest,
  output: ListManagementProfileUserLinksResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteManagementProfileUserLinksRequest {
  /** Account ID to delete the user link for. */
  accountId: string;
  /** View (Profile) ID to delete the user link for. */
  profileId: string;
  /** Web Property ID to delete the user link for. */
  webPropertyId: string;
  /** Link ID to delete the user link for. */
  linkId: string;
}

export const DeleteManagementProfileUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
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

export type DeleteManagementProfileUserLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a user from the given view (profile). */
export const deleteManagementProfileUserLinks: API.OperationMethod<
  DeleteManagementProfileUserLinksRequest,
  DeleteManagementProfileUserLinksResponse,
  DeleteManagementProfileUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementProfileUserLinksRequest,
  output: DeleteManagementProfileUserLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateManagementProfileUserLinksRequest {
  /** Account ID to update the user link for. */
  accountId: string;
  /** Link ID to update the user link for. */
  linkId: string;
  /** View (Profile ID) to update the user link for. */
  profileId: string;
  /** Web Property ID to update the user link for. */
  webPropertyId: string;
  /** Request body */
  body?: EntityUserLink;
}

export const UpdateManagementProfileUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
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

export type UpdateManagementProfileUserLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates permissions for an existing user on the given view (profile). */
export const updateManagementProfileUserLinks: API.OperationMethod<
  UpdateManagementProfileUserLinksRequest,
  UpdateManagementProfileUserLinksResponse,
  UpdateManagementProfileUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementProfileUserLinksRequest,
  output: UpdateManagementProfileUserLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertManagementProfileUserLinksRequest {
  /** View (Profile) ID to create the user link for. */
  profileId: string;
  /** Web Property ID to create the user link for. */
  webPropertyId: string;
  /** Account ID to create the user link for. */
  accountId: string;
  /** Request body */
  body?: EntityUserLink;
}

export const InsertManagementProfileUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
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

export type InsertManagementProfileUserLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a new user to the given view (profile). */
export const insertManagementProfileUserLinks: API.OperationMethod<
  InsertManagementProfileUserLinksRequest,
  InsertManagementProfileUserLinksResponse,
  InsertManagementProfileUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementProfileUserLinksRequest,
  output: InsertManagementProfileUserLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListManagementWebpropertyUserLinksRequest {
  /** An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to. */
  webPropertyId: string;
  /** Account ID which the given web property belongs to. */
  accountId: string;
  /** The maximum number of webProperty-user Links to include in this response. */
  "max-results"?: number;
}

export const ListManagementWebpropertyUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
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

export type ListManagementWebpropertyUserLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists webProperty-user links for a given web property. */
export const listManagementWebpropertyUserLinks: API.OperationMethod<
  ListManagementWebpropertyUserLinksRequest,
  ListManagementWebpropertyUserLinksResponse,
  ListManagementWebpropertyUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementWebpropertyUserLinksRequest,
  output: ListManagementWebpropertyUserLinksResponse,
  errors: [NotFound, Forbidden],
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

export type DeleteManagementWebpropertyUserLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a user from the given web property. */
export const deleteManagementWebpropertyUserLinks: API.OperationMethod<
  DeleteManagementWebpropertyUserLinksRequest,
  DeleteManagementWebpropertyUserLinksResponse,
  DeleteManagementWebpropertyUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagementWebpropertyUserLinksRequest,
  output: DeleteManagementWebpropertyUserLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateManagementWebpropertyUserLinksRequest {
  /** Account ID to update the account-user link for. */
  accountId: string;
  /** Link ID to update the account-user link for. */
  linkId: string;
  /** Web property ID to update the account-user link for. */
  webPropertyId: string;
  /** Request body */
  body?: EntityUserLink;
}

export const UpdateManagementWebpropertyUserLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    linkId: Schema.String.pipe(T.HttpPath("linkId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
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

export type UpdateManagementWebpropertyUserLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates permissions for an existing user on the given web property. */
export const updateManagementWebpropertyUserLinks: API.OperationMethod<
  UpdateManagementWebpropertyUserLinksRequest,
  UpdateManagementWebpropertyUserLinksResponse,
  UpdateManagementWebpropertyUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateManagementWebpropertyUserLinksRequest,
  output: UpdateManagementWebpropertyUserLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type InsertManagementWebpropertyUserLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a new user to the given web property. */
export const insertManagementWebpropertyUserLinks: API.OperationMethod<
  InsertManagementWebpropertyUserLinksRequest,
  InsertManagementWebpropertyUserLinksResponse,
  InsertManagementWebpropertyUserLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertManagementWebpropertyUserLinksRequest,
  output: InsertManagementWebpropertyUserLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteUploadDataManagementUploadsRequest {
  /** Account Id for the uploads to be deleted. */
  accountId: string;
  /** Custom data source Id for the uploads to be deleted. */
  customDataSourceId: string;
  /** Web property Id for the uploads to be deleted. */
  webPropertyId: string;
  /** Request body */
  body?: AnalyticsDataimportDeleteUploadDataRequest;
}

export const DeleteUploadDataManagementUploadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    customDataSourceId: Schema.String.pipe(T.HttpPath("customDataSourceId")),
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

export type DeleteUploadDataManagementUploadsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete data associated with a previous upload. */
export const deleteUploadDataManagementUploads: API.OperationMethod<
  DeleteUploadDataManagementUploadsRequest,
  DeleteUploadDataManagementUploadsResponse,
  DeleteUploadDataManagementUploadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteUploadDataManagementUploadsRequest,
  output: DeleteUploadDataManagementUploadsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetManagementUploadsRequest {
  /** Web property Id for the upload to retrieve. */
  webPropertyId: string;
  /** Upload Id to retrieve. */
  uploadId: string;
  /** Account Id for the upload to retrieve. */
  accountId: string;
  /** Custom data source Id for upload to retrieve. */
  customDataSourceId: string;
}

export const GetManagementUploadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    uploadId: Schema.String.pipe(T.HttpPath("uploadId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    customDataSourceId: Schema.String.pipe(T.HttpPath("customDataSourceId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads/{uploadId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetManagementUploadsRequest>;

export type GetManagementUploadsResponse = Upload;
export const GetManagementUploadsResponse = /*@__PURE__*/ /*#__PURE__*/ Upload;

export type GetManagementUploadsError = DefaultErrors | NotFound | Forbidden;

/** List uploads to which the user has access. */
export const getManagementUploads: API.OperationMethod<
  GetManagementUploadsRequest,
  GetManagementUploadsResponse,
  GetManagementUploadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetManagementUploadsRequest,
  output: GetManagementUploadsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListManagementUploadsRequest {
  /** A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** Account Id for the uploads to retrieve. */
  accountId: string;
  /** Web property Id for the uploads to retrieve. */
  webPropertyId: string;
  /** Custom data source Id for uploads to retrieve. */
  customDataSourceId: string;
  /** The maximum number of uploads to include in this response. */
  "max-results"?: number;
}

export const ListManagementUploadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "start-index": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("start-index"),
    ),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    webPropertyId: Schema.String.pipe(T.HttpPath("webPropertyId")),
    customDataSourceId: Schema.String.pipe(T.HttpPath("customDataSourceId")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
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

export type ListManagementUploadsError = DefaultErrors | NotFound | Forbidden;

/** List uploads to which the user has access. */
export const listManagementUploads: API.OperationMethod<
  ListManagementUploadsRequest,
  ListManagementUploadsResponse,
  ListManagementUploadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagementUploadsRequest,
  output: ListManagementUploadsResponse,
  errors: [NotFound, Forbidden],
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

export type UploadDataManagementUploadsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Upload data for a custom data source. */
export const uploadDataManagementUploads: API.OperationMethod<
  UploadDataManagementUploadsRequest,
  UploadDataManagementUploadsResponse,
  UploadDataManagementUploadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadDataManagementUploadsRequest,
  output: UploadDataManagementUploadsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpsertUserDeletionUserDeletionRequestError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Insert or update a user deletion requests. */
export const upsertUserDeletionUserDeletionRequest: API.OperationMethod<
  UpsertUserDeletionUserDeletionRequestRequest,
  UpsertUserDeletionUserDeletionRequestResponse,
  UpsertUserDeletionUserDeletionRequestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpsertUserDeletionUserDeletionRequestRequest,
  output: UpsertUserDeletionUserDeletionRequestResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetDataMcfRequest {
  /** A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified. */
  metrics: string;
  /** A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data. */
  sort?: string;
  /** The maximum number of entries to include in this feed. */
  "max-results"?: number;
  /** Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo. */
  "start-date": string;
  /** End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo. */
  "end-date": string;
  /** A comma-separated list of dimension or metric filters to be applied to the Analytics data. */
  filters?: string;
  /** The desired sampling level. */
  samplingLevel?: "DEFAULT" | "FASTER" | "HIGHER_PRECISION" | (string & {});
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID. */
  ids: string;
  /** A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'. */
  dimensions?: string;
}

export const GetDataMcfRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metrics: Schema.String.pipe(T.HttpQuery("metrics")),
  sort: Schema.optional(Schema.String).pipe(T.HttpQuery("sort")),
  "max-results": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("max-results"),
  ),
  "start-date": Schema.String.pipe(T.HttpQuery("start-date")),
  "end-date": Schema.String.pipe(T.HttpQuery("end-date")),
  filters: Schema.optional(Schema.String).pipe(T.HttpQuery("filters")),
  samplingLevel: Schema.optional(Schema.String).pipe(
    T.HttpQuery("samplingLevel"),
  ),
  "start-index": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("start-index"),
  ),
  ids: Schema.String.pipe(T.HttpQuery("ids")),
  dimensions: Schema.optional(Schema.String).pipe(T.HttpQuery("dimensions")),
}).pipe(
  T.Http({ method: "GET", path: "data/mcf" }),
  svc,
) as unknown as Schema.Schema<GetDataMcfRequest>;

export type GetDataMcfResponse = McfData;
export const GetDataMcfResponse = /*@__PURE__*/ /*#__PURE__*/ McfData;

export type GetDataMcfError = DefaultErrors | NotFound | Forbidden;

/** Returns Analytics Multi-Channel Funnels data for a view (profile). */
export const getDataMcf: API.OperationMethod<
  GetDataMcfRequest,
  GetDataMcfResponse,
  GetDataMcfError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDataMcfRequest,
  output: GetDataMcfResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetDataRealtimeRequest {
  /** A comma-separated list of dimension or metric filters to be applied to real time data. */
  filters?: string;
  /** A comma-separated list of dimensions or metrics that determine the sort order for real time data. */
  sort?: string;
  /** A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified. */
  metrics: string;
  /** A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'. */
  dimensions?: string;
  /** The maximum number of entries to include in this feed. */
  "max-results"?: number;
  /** Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID. */
  ids: string;
}

export const GetDataRealtimeRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    filters: Schema.optional(Schema.String).pipe(T.HttpQuery("filters")),
    sort: Schema.optional(Schema.String).pipe(T.HttpQuery("sort")),
    metrics: Schema.String.pipe(T.HttpQuery("metrics")),
    dimensions: Schema.optional(Schema.String).pipe(T.HttpQuery("dimensions")),
    "max-results": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max-results"),
    ),
    ids: Schema.String.pipe(T.HttpQuery("ids")),
  },
).pipe(
  T.Http({ method: "GET", path: "data/realtime" }),
  svc,
) as unknown as Schema.Schema<GetDataRealtimeRequest>;

export type GetDataRealtimeResponse = RealtimeData;
export const GetDataRealtimeResponse = /*@__PURE__*/ /*#__PURE__*/ RealtimeData;

export type GetDataRealtimeError = DefaultErrors | NotFound | Forbidden;

/** Returns real time data for a view (profile). */
export const getDataRealtime: API.OperationMethod<
  GetDataRealtimeRequest,
  GetDataRealtimeResponse,
  GetDataRealtimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDataRealtimeRequest,
  output: GetDataRealtimeResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetDataGaRequest {
  /** End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday. */
  "end-date": string;
  /** The response will include empty rows if this parameter is set to true, the default is true */
  "include-empty-rows"?: boolean;
  /** An Analytics segment to be applied to data. */
  segment?: string;
  /** The desired sampling level. */
  samplingLevel?: "DEFAULT" | "FASTER" | "HIGHER_PRECISION" | (string & {});
  /** An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. */
  "start-index"?: number;
  /** The selected format for the response. Default format is JSON. */
  output?: "dataTable" | "json" | (string & {});
  /** A comma-separated list of dimensions or metrics that determine the sort order for Analytics data. */
  sort?: string;
  /** The maximum number of entries to include in this feed. */
  "max-results"?: number;
  /** Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo. */
  "start-date": string;
  /** A comma-separated list of dimension or metric filters to be applied to Analytics data. */
  filters?: string;
  /** Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID. */
  ids: string;
  /** A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'. */
  dimensions?: string;
  /** A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified. */
  metrics: string;
}

export const GetDataGaRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "end-date": Schema.String.pipe(T.HttpQuery("end-date")),
  "include-empty-rows": Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("include-empty-rows"),
  ),
  segment: Schema.optional(Schema.String).pipe(T.HttpQuery("segment")),
  samplingLevel: Schema.optional(Schema.String).pipe(
    T.HttpQuery("samplingLevel"),
  ),
  "start-index": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("start-index"),
  ),
  output: Schema.optional(Schema.String).pipe(T.HttpQuery("output")),
  sort: Schema.optional(Schema.String).pipe(T.HttpQuery("sort")),
  "max-results": Schema.optional(Schema.Number).pipe(
    T.HttpQuery("max-results"),
  ),
  "start-date": Schema.String.pipe(T.HttpQuery("start-date")),
  filters: Schema.optional(Schema.String).pipe(T.HttpQuery("filters")),
  ids: Schema.String.pipe(T.HttpQuery("ids")),
  dimensions: Schema.optional(Schema.String).pipe(T.HttpQuery("dimensions")),
  metrics: Schema.String.pipe(T.HttpQuery("metrics")),
}).pipe(
  T.Http({ method: "GET", path: "data/ga" }),
  svc,
) as unknown as Schema.Schema<GetDataGaRequest>;

export type GetDataGaResponse = GaData;
export const GetDataGaResponse = /*@__PURE__*/ /*#__PURE__*/ GaData;

export type GetDataGaError = DefaultErrors | NotFound | Forbidden;

/** Returns Analytics data for a view (profile). */
export const getDataGa: API.OperationMethod<
  GetDataGaRequest,
  GetDataGaResponse,
  GetDataGaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDataGaRequest,
  output: GetDataGaResponse,
  errors: [NotFound, Forbidden],
}));

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

export type ListMetadataColumnsError = DefaultErrors | NotFound | Forbidden;

/** Lists all columns for a report type */
export const listMetadataColumns: API.OperationMethod<
  ListMetadataColumnsRequest,
  ListMetadataColumnsResponse,
  ListMetadataColumnsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListMetadataColumnsRequest,
  output: ListMetadataColumnsResponse,
  errors: [NotFound, Forbidden],
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

export type CreateAccountTreeProvisioningError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Provision account. */
export const createAccountTreeProvisioning: API.OperationMethod<
  CreateAccountTreeProvisioningRequest,
  CreateAccountTreeProvisioningResponse,
  CreateAccountTreeProvisioningError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountTreeProvisioningRequest,
  output: CreateAccountTreeProvisioningResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type CreateAccountTicketProvisioningError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an account ticket. */
export const createAccountTicketProvisioning: API.OperationMethod<
  CreateAccountTicketProvisioningRequest,
  CreateAccountTicketProvisioningResponse,
  CreateAccountTicketProvisioningError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountTicketProvisioningRequest,
  output: CreateAccountTicketProvisioningResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
