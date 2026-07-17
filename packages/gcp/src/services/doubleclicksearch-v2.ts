// ==========================================================================
// Search Ads 360 API (doubleclicksearch v2)
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
  name: "doubleclicksearch",
  version: "v2",
  rootUrl: "https://doubleclicksearch.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface CustomDimension {
  /** Custom dimension name. */
  name?: string;
  /** Custom dimension value. */
  value?: string;
}

export const CustomDimension: Schema.Codec<CustomDimension> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomDimension" });

export interface CustomMetric {
  /** Custom metric name. */
  name?: string;
  /** Custom metric numeric value. */
  value?: number;
}

export const CustomMetric: Schema.Codec<CustomMetric> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CustomMetric" });

export interface Conversion {
  /** The type of the conversion, that is, either `ACTION` or `TRANSACTION`. An `ACTION` conversion is an action by the user that has no monetarily quantifiable value, while a `TRANSACTION` conversion is an action that does have a monetarily quantifiable value. Examples are email list signups (`ACTION`) versus ecommerce purchases (`TRANSACTION`). */
  type?: string;
  /** The currency code for the conversion's revenue. Should be in ISO 4217 alphabetic (3-char) format. */
  currencyCode?: string;
  /** DS product group ID. */
  productGroupId?: string;
  /** Customer ID of a client account in the new Search Ads 360 experience. */
  customerId?: string;
  /** DS advertiser ID. */
  advertiserId?: string;
  /** DS agency ID. */
  agencyId?: string;
  /** Sales channel for the product. Acceptable values are: - "`local`": a physical store - "`online`": an online store */
  channel?: string;
  /** The type of device on which the conversion occurred. */
  deviceType?: string;
  /** For offline conversions, advertisers provide this ID. Advertisers can specify any ID that is meaningful to them. Each conversion in a request must specify a unique ID, and the combination of ID and timestamp must be unique amongst all conversions within the advertiser. For online conversions, DS copies the `dsConversionId` or `floodlightOrderId` into this property depending on the advertiser's Floodlight instructions. */
  conversionId?: string;
  /** Custom dimensions for the conversion, which can be used to filter data in a report. */
  customDimension?: ReadonlyArray<CustomDimension>;
  /** Available to advertisers only after contacting DoubleClick Search customer support. */
  countMillis?: string;
  /** DS criterion (keyword) ID. */
  criterionId?: string;
  /** The state of the conversion, that is, either `ACTIVE` or `REMOVED`. Note: state DELETED is deprecated. */
  state?: string;
  /** DS ad group ID. */
  adGroupId?: string;
  /** Represents consent for core platform services (CPS) preferences in settings. No default value. Acceptable values are: GRANTED: The desired consent status is to grant. Read the CPS preferences from GTE settings. DENIED: The desired consent status is to deny; CPS list is empty. */
  adUserDataConsent?: "UNKNOWN" | "GRANTED" | "DENIED" | (string & {});
  /** The language registered for the Merchant Center feed that contains the product. Use an ISO 639 code to specify a language. */
  productLanguage?: string;
  /** The revenue amount of this `TRANSACTION` conversion, in micros (value multiplied by 1000000, no decimal). For example, to specify a revenue value of "10" enter "10000000" (10 million) in your request. */
  revenueMicros?: string;
  /** Custom metrics for the conversion. */
  customMetric?: ReadonlyArray<CustomMetric>;
  /** The country registered for the Merchant Center feed that contains the product. Use an ISO 3166 code to specify a country. */
  productCountry?: string;
  /** The segmentation type of this conversion (for example, `FLOODLIGHT`). */
  segmentationType?: string;
  /** The quantity of this conversion, in millis. */
  quantityMillis?: string;
  /** DS click ID for the conversion. */
  clickId?: string;
  /** The time at which the conversion took place, in epoch millis UTC. */
  conversionTimestamp?: string;
  /** DS ad ID. */
  adId?: string;
  /** The ID of the local store for which the product was advertised. Applicable only when the channel is "`local`". */
  storeId?: string;
  /** ID that DoubleClick Search generates for each conversion. */
  dsConversionId?: string;
  /** Available to advertisers only after contacting DoubleClick Search customer support. */
  attributionModel?: string;
  /** The friendly segmentation identifier (for example, DoubleClick Search Floodlight activity name). */
  segmentationName?: string;
  /** The time at which the conversion was last modified, in epoch millis UTC. */
  conversionModifiedTimestamp?: string;
  /** DS campaign ID. */
  campaignId?: string;
  /** The Floodlight order ID provided by the advertiser for the conversion. */
  floodlightOrderId?: string;
  /** The numeric segmentation identifier (for example, DoubleClick Search Floodlight activity ID). */
  segmentationId?: string;
  /** ID that DS generates and uses to uniquely identify the inventory account that contains the product. */
  inventoryAccountId?: string;
  /** The product ID (SKU). */
  productId?: string;
  /** DS engine account ID. */
  engineAccountId?: string;
}

export const Conversion: Schema.Codec<Conversion> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
    productGroupId: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    advertiserId: Schema.optional(Schema.String),
    agencyId: Schema.optional(Schema.String),
    channel: Schema.optional(Schema.String),
    deviceType: Schema.optional(Schema.String),
    conversionId: Schema.optional(Schema.String),
    customDimension: Schema.optional(Schema.Array(CustomDimension)),
    countMillis: Schema.optional(Schema.String),
    criterionId: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    adGroupId: Schema.optional(Schema.String),
    adUserDataConsent: Schema.optional(Schema.String),
    productLanguage: Schema.optional(Schema.String),
    revenueMicros: Schema.optional(Schema.String),
    customMetric: Schema.optional(Schema.Array(CustomMetric)),
    productCountry: Schema.optional(Schema.String),
    segmentationType: Schema.optional(Schema.String),
    quantityMillis: Schema.optional(Schema.String),
    clickId: Schema.optional(Schema.String),
    conversionTimestamp: Schema.optional(Schema.String),
    adId: Schema.optional(Schema.String),
    storeId: Schema.optional(Schema.String),
    dsConversionId: Schema.optional(Schema.String),
    attributionModel: Schema.optional(Schema.String),
    segmentationName: Schema.optional(Schema.String),
    conversionModifiedTimestamp: Schema.optional(Schema.String),
    campaignId: Schema.optional(Schema.String),
    floodlightOrderId: Schema.optional(Schema.String),
    segmentationId: Schema.optional(Schema.String),
    inventoryAccountId: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
    engineAccountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Conversion" });

export interface ConversionList {
  /** The conversions being requested. */
  conversion?: ReadonlyArray<Conversion>;
  /** Identifies this as a ConversionList resource. Value: the fixed string doubleclicksearch#conversionList. */
  kind?: string;
}

export const ConversionList: Schema.Codec<ConversionList> =
  /*@__PURE__*/ Schema.Struct({
    conversion: Schema.optional(Schema.Array(Conversion)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConversionList" });

export interface Availability {
  /** The segmentation type that this availability is for (its default value is `FLOODLIGHT`). */
  segmentationType?: string;
  /** The time by which all conversions have been uploaded, in epoch millis UTC. */
  availabilityTimestamp?: string;
  /** DS agency ID. */
  agencyId?: string;
  /** DS advertiser ID. */
  advertiserId?: string;
  /** The numeric segmentation identifier (for example, DoubleClick Search Floodlight activity ID). */
  segmentationId?: string;
  /** Customer ID of a client account in the new Search Ads 360 experience. */
  customerId?: string;
  /** The friendly segmentation identifier (for example, DoubleClick Search Floodlight activity name). */
  segmentationName?: string;
}

export const Availability: Schema.Codec<Availability> =
  /*@__PURE__*/ Schema.Struct({
    segmentationType: Schema.optional(Schema.String),
    availabilityTimestamp: Schema.optional(Schema.String),
    agencyId: Schema.optional(Schema.String),
    advertiserId: Schema.optional(Schema.String),
    segmentationId: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    segmentationName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Availability" });

export interface UpdateAvailabilityRequest {
  /** The availabilities being requested. */
  availabilities?: ReadonlyArray<Availability>;
}

export const UpdateAvailabilityRequest: Schema.Codec<UpdateAvailabilityRequest> =
  /*@__PURE__*/ Schema.Struct({
    availabilities: Schema.optional(Schema.Array(Availability)),
  }).annotate({ identifier: "UpdateAvailabilityRequest" });

export interface IdMappingFile {}

export const IdMappingFile: Schema.Codec<IdMappingFile> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "IdMappingFile",
  });

export interface UpdateAvailabilityResponse {
  /** The availabilities being returned. */
  availabilities?: ReadonlyArray<Availability>;
}

export const UpdateAvailabilityResponse: Schema.Codec<UpdateAvailabilityResponse> =
  /*@__PURE__*/ Schema.Struct({
    availabilities: Schema.optional(Schema.Array(Availability)),
  }).annotate({ identifier: "UpdateAvailabilityResponse" });

export type ReportRow = Record<string, unknown>;
export const ReportRow: Schema.Codec<ReportRow> =
  /*@__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Unknown,
  ) as any as Schema.Codec<ReportRow>;

export interface SavedColumn {
  /** The type of data this saved column will produce. */
  type?: string;
  /** The name of the saved column. */
  savedColumnName?: string;
  /** Identifies this as a SavedColumn resource. Value: the fixed string doubleclicksearch#savedColumn. */
  kind?: string;
}

export const SavedColumn: Schema.Codec<SavedColumn> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    savedColumnName: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "SavedColumn" });

export interface ReportApiColumnSpec {
  /** Synchronous report only. Set to `true` to group by this column. Defaults to `false`. */
  groupByColumn?: boolean;
  /** Name of a saved column to include in the report. The report must be scoped at advertiser or lower, and this saved column must already be created in the DoubleClick Search UI. */
  savedColumnName?: string;
  /** Name of a DoubleClick Search column to include in the report. */
  columnName?: string;
  /** Text used to identify this column in the report output; defaults to `columnName` or `savedColumnName` when not specified. This can be used to prevent collisions between DoubleClick Search columns and saved columns with the same name. */
  headerText?: string;
  /** Segments a report by a custom dimension. The report must be scoped to an advertiser or lower, and the custom dimension must already be set up in DoubleClick Search. The custom dimension name, which appears in DoubleClick Search, is case sensitive.\ If used in a conversion report, returns the value of the specified custom dimension for the given conversion, if set. This column does not segment the conversion report. */
  customDimensionName?: string;
  /** Name of a custom metric to include in the report. The report must be scoped to an advertiser or lower, and the custom metric must already be set up in DoubleClick Search. The custom metric name, which appears in DoubleClick Search, is case sensitive. */
  customMetricName?: string;
  /** Inclusive date in YYYY-MM-DD format. When provided, this overrides the overall time range of the report for this column only. Must be provided together with `endDate`. */
  startDate?: string;
  /** Inclusive day in YYYY-MM-DD format. When provided, this overrides the overall time range of the report for this column only. Must be provided together with `startDate`. */
  endDate?: string;
  /** Returns metrics only for a specific type of product activity. Accepted values are: - "`sold`": returns metrics only for products that were sold - "`advertised`": returns metrics only for products that were advertised in a Shopping campaign, and that might or might not have been sold */
  productReportPerspective?: string;
  /** The platform that is used to provide data for the custom dimension. Acceptable values are "floodlight". */
  platformSource?: string;
}

export const ReportApiColumnSpec: Schema.Codec<ReportApiColumnSpec> =
  /*@__PURE__*/ Schema.Struct({
    groupByColumn: Schema.optional(Schema.Boolean),
    savedColumnName: Schema.optional(Schema.String),
    columnName: Schema.optional(Schema.String),
    headerText: Schema.optional(Schema.String),
    customDimensionName: Schema.optional(Schema.String),
    customMetricName: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    productReportPerspective: Schema.optional(Schema.String),
    platformSource: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportApiColumnSpec" });

export interface ReportRequest {
  /** Synchronous report only. A list of columns and directions defining sorting to be performed on the report rows.\ The maximum number of orderings per request is 300. */
  orderBy?: ReadonlyArray<{ column?: ReportApiColumnSpec; sortOrder?: string }>;
  /** Synchronous report only. The maximum number of rows to return; additional rows are dropped. Acceptable values are `0` to `10000`, inclusive. Defaults to `10000`. */
  rowCount?: number;
  /** Specifies the currency in which monetary will be returned. Possible values are: `usd`, `agency` (valid if the report is scoped to agency or lower), `advertiser` (valid if the report is scoped to * advertiser or lower), or `account` (valid if the report is scoped to engine account or lower). */
  statisticsCurrency?: string;
  /** The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required. */
  reportScope?: {
    adId?: string;
    advertiserId?: string;
    campaignId?: string;
    adGroupId?: string;
    keywordId?: string;
    engineAccountId?: string;
    agencyId?: string;
  };
  /** Determines the type of rows that are returned in the report. For example, if you specify `reportType: keyword`, each row in the report will contain data about a keyword. See the [Types of Reports](/search-ads/v2/report-types/) reference for the columns that are available for each type. */
  reportType?: string;
  /** The columns to include in the report. This includes both DoubleClick Search columns and saved columns. For DoubleClick Search columns, only the `columnName` parameter is required. For saved columns only the `savedColumnName` parameter is required. Both `columnName` and `savedColumnName` cannot be set in the same stanza.\ The maximum number of columns per request is 300. */
  columns?: ReadonlyArray<ReportApiColumnSpec>;
  /** Synchronous report only. Zero-based index of the first row to return. Acceptable values are `0` to `50000`, inclusive. Defaults to `0`. */
  startRow?: number;
  /** Asynchronous report only. The maximum number of rows per report file. A large report is split into many files based on this field. Acceptable values are `1000000` to `100000000`, inclusive. */
  maxRowsPerFile?: number;
  /** If `true`, the report would only be created if all the requested stat data are sourced from a single timezone. Defaults to `false`. */
  verifySingleTimeZone?: boolean;
  /** Format that the report should be returned in. Currently `csv` or `tsv` is supported. */
  downloadFormat?: string;
  /** A list of filters to be applied to the report.\ The maximum number of filters per request is 300. */
  filters?: ReadonlyArray<{
    column?: ReportApiColumnSpec;
    operator?: string;
    values?: ReadonlyArray<unknown>;
  }>;
  /** Determines if removed entities should be included in the report. Defaults to `false`. */
  includeRemovedEntities?: boolean;
  /** Determines if removed entities should be included in the report. Defaults to `false`. Deprecated, please use `includeRemovedEntities` instead. */
  includeDeletedEntities?: boolean;
  /** If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range. */
  timeRange?: {
    changedMetricsSinceTimestamp?: string;
    changedAttributesSinceTimestamp?: string;
    startDate?: string;
    endDate?: string;
  };
}

export const ReportRequest: Schema.Codec<ReportRequest> =
  /*@__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(
      Schema.Array(
        Schema.Struct({
          column: Schema.optional(ReportApiColumnSpec),
          sortOrder: Schema.optional(Schema.String),
        }),
      ),
    ),
    rowCount: Schema.optional(Schema.Number),
    statisticsCurrency: Schema.optional(Schema.String),
    reportScope: Schema.optional(
      Schema.Struct({
        adId: Schema.optional(Schema.String),
        advertiserId: Schema.optional(Schema.String),
        campaignId: Schema.optional(Schema.String),
        adGroupId: Schema.optional(Schema.String),
        keywordId: Schema.optional(Schema.String),
        engineAccountId: Schema.optional(Schema.String),
        agencyId: Schema.optional(Schema.String),
      }),
    ),
    reportType: Schema.optional(Schema.String),
    columns: Schema.optional(Schema.Array(ReportApiColumnSpec)),
    startRow: Schema.optional(Schema.Number),
    maxRowsPerFile: Schema.optional(Schema.Number),
    verifySingleTimeZone: Schema.optional(Schema.Boolean),
    downloadFormat: Schema.optional(Schema.String),
    filters: Schema.optional(
      Schema.Array(
        Schema.Struct({
          column: Schema.optional(ReportApiColumnSpec),
          operator: Schema.optional(Schema.String),
          values: Schema.optional(Schema.Array(Schema.Unknown)),
        }),
      ),
    ),
    includeRemovedEntities: Schema.optional(Schema.Boolean),
    includeDeletedEntities: Schema.optional(Schema.Boolean),
    timeRange: Schema.optional(
      Schema.Struct({
        changedMetricsSinceTimestamp: Schema.optional(Schema.String),
        changedAttributesSinceTimestamp: Schema.optional(Schema.String),
        startDate: Schema.optional(Schema.String),
        endDate: Schema.optional(Schema.String),
      }),
    ),
  }).annotate({ identifier: "ReportRequest" });

export interface Report {
  /** Asynchronous report only. Id of the report. */
  id?: string;
  /** Synchronous report only. Generated report rows. */
  rows?: ReadonlyArray<ReportRow>;
  /** Asynchronous report only. Contains a list of generated report files once the report has successfully completed. */
  files?: ReadonlyArray<{ url?: string; byteCount?: string }>;
  /** The request that created the report. Optional fields not specified in the original request are filled with default values. */
  request?: ReportRequest;
  /** Asynchronous report only. True if and only if the report has completed successfully and the report files are ready to be downloaded. */
  isReportReady?: boolean;
  /** Identifies this as a Report resource. Value: the fixed string `doubleclicksearch#report`. */
  kind?: string;
  /** The number of report rows generated by the report, not including headers. */
  rowCount?: number;
  /** The currency code of all monetary values produced in the report, including values that are set by users (e.g., keyword bid settings) and metrics (e.g., cost and revenue). The currency code of a report is determined by the `statisticsCurrency` field of the report request. */
  statisticsCurrencyCode?: string;
  /** If all statistics of the report are sourced from the same time zone, this would be it. Otherwise the field is unset. */
  statisticsTimeZone?: string;
}

export const Report: Schema.Codec<Report> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    rows: Schema.optional(Schema.Array(ReportRow)),
    files: Schema.optional(
      Schema.Array(
        Schema.Struct({
          url: Schema.optional(Schema.String),
          byteCount: Schema.optional(Schema.String),
        }),
      ),
    ),
    request: Schema.optional(ReportRequest),
    isReportReady: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    rowCount: Schema.optional(Schema.Number),
    statisticsCurrencyCode: Schema.optional(Schema.String),
    statisticsTimeZone: Schema.optional(Schema.String),
  }).annotate({ identifier: "Report" });

export interface SavedColumnList {
  /** Identifies this as a SavedColumnList resource. Value: the fixed string doubleclicksearch#savedColumnList. */
  kind?: string;
  /** The saved columns being requested. */
  items?: ReadonlyArray<SavedColumn>;
}

export const SavedColumnList: Schema.Codec<SavedColumnList> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(SavedColumn)),
  }).annotate({ identifier: "SavedColumnList" });

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

export interface ListSavedColumnsRequest {
  /** DS ID of the agency. */
  agencyId: string;
  /** DS ID of the advertiser. */
  advertiserId: string;
}

export const ListSavedColumnsRequest =
  /*@__PURE__*/ Schema.Struct({
    agencyId: Schema.String.pipe(T.HttpPath("agencyId")),
    advertiserId: Schema.String.pipe(T.HttpPath("advertiserId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/savedcolumns",
    }),
    svc,
  ) as unknown as Schema.Codec<ListSavedColumnsRequest>;

export type ListSavedColumnsResponse = SavedColumnList;
export const ListSavedColumnsResponse = /*@__PURE__*/ SavedColumnList;

export type ListSavedColumnsError = DefaultErrors | NotFound | Forbidden;

/** Retrieve the list of saved columns for a specified advertiser. */
export const listSavedColumns: API.OperationMethod<
  ListSavedColumnsRequest,
  ListSavedColumnsResponse,
  ListSavedColumnsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListSavedColumnsRequest,
  output: ListSavedColumnsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateConversionRequest {
  /** Request body */
  body?: ConversionList;
}

export const UpdateConversionRequest =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(ConversionList).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "doubleclicksearch/v2/conversion",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdateConversionRequest>;

export type UpdateConversionResponse = ConversionList;
export const UpdateConversionResponse = /*@__PURE__*/ ConversionList;

export type UpdateConversionError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a batch of conversions in DoubleClick Search. */
export const updateConversion: API.OperationMethod<
  UpdateConversionRequest,
  UpdateConversionResponse,
  UpdateConversionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConversionRequest,
  output: UpdateConversionResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAvailabilityConversionRequest {
  /** Request body */
  body?: UpdateAvailabilityRequest;
}

export const UpdateAvailabilityConversionRequest =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(UpdateAvailabilityRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "doubleclicksearch/v2/conversion/updateAvailability",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdateAvailabilityConversionRequest>;

export type UpdateAvailabilityConversionResponse = UpdateAvailabilityResponse;
export const UpdateAvailabilityConversionResponse =
  /*@__PURE__*/ UpdateAvailabilityResponse;

export type UpdateAvailabilityConversionError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the availabilities of a batch of floodlight activities in DoubleClick Search. */
export const updateAvailabilityConversion: API.OperationMethod<
  UpdateAvailabilityConversionRequest,
  UpdateAvailabilityConversionResponse,
  UpdateAvailabilityConversionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAvailabilityConversionRequest,
  output: UpdateAvailabilityConversionResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetConversionRequest {
  /** Numeric ID of the engine account. */
  engineAccountId: string;
  /** Numeric ID of the criterion. */
  criterionId?: string;
  /** The number of conversions to return per call. */
  rowCount: number;
  /** Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd. */
  endDate: number;
  /** First date (inclusive) on which to retrieve conversions. Format is yyyymmdd. */
  startDate: number;
  /** Numeric ID of the ad. */
  adId?: string;
  /** Numeric ID of the ad group. */
  adGroupId?: string;
  /** Numeric ID of the campaign. */
  campaignId?: string;
  /** Numeric ID of the agency. */
  agencyId: string;
  /** The 0-based starting index for retrieving conversions results. */
  startRow: number;
  /** Customer ID of a client account in the new Search Ads 360 experience. */
  customerId?: string;
  /** Numeric ID of the advertiser. */
  advertiserId: string;
}

export const GetConversionRequest = /*@__PURE__*/ Schema.Struct({
  engineAccountId: Schema.String.pipe(T.HttpPath("engineAccountId")),
  criterionId: Schema.optional(Schema.String).pipe(T.HttpQuery("criterionId")),
  rowCount: Schema.Number.pipe(T.HttpQuery("rowCount")),
  endDate: Schema.Number.pipe(T.HttpQuery("endDate")),
  startDate: Schema.Number.pipe(T.HttpQuery("startDate")),
  adId: Schema.optional(Schema.String).pipe(T.HttpQuery("adId")),
  adGroupId: Schema.optional(Schema.String).pipe(T.HttpQuery("adGroupId")),
  campaignId: Schema.optional(Schema.String).pipe(T.HttpQuery("campaignId")),
  agencyId: Schema.String.pipe(T.HttpPath("agencyId")),
  startRow: Schema.Number.pipe(T.HttpQuery("startRow")),
  customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
  advertiserId: Schema.String.pipe(T.HttpPath("advertiserId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/engine/{engineAccountId}/conversion",
  }),
  svc,
) as unknown as Schema.Codec<GetConversionRequest>;

export type GetConversionResponse = ConversionList;
export const GetConversionResponse = /*@__PURE__*/ ConversionList;

export type GetConversionError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of conversions from a DoubleClick Search engine account. */
export const getConversion: API.OperationMethod<
  GetConversionRequest,
  GetConversionResponse,
  GetConversionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConversionRequest,
  output: GetConversionResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetByCustomerIdConversionRequest {
  /** Customer ID of a client account in the new Search Ads 360 experience. */
  customerId: string;
  /** Numeric ID of the advertiser. */
  advertiserId?: string;
  /** Numeric ID of the agency. */
  agencyId?: string;
  /** The 0-based starting index for retrieving conversions results. */
  startRow: number;
  /** Numeric ID of the ad group. */
  adGroupId?: string;
  /** Numeric ID of the campaign. */
  campaignId?: string;
  /** Numeric ID of the ad. */
  adId?: string;
  /** Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd. */
  endDate: number;
  /** First date (inclusive) on which to retrieve conversions. Format is yyyymmdd. */
  startDate: number;
  /** Numeric ID of the criterion. */
  criterionId?: string;
  /** Numeric ID of the engine account. */
  engineAccountId?: string;
  /** The number of conversions to return per call. */
  rowCount: number;
}

export const GetByCustomerIdConversionRequest =
  /*@__PURE__*/ Schema.Struct({
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
    advertiserId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("advertiserId"),
    ),
    agencyId: Schema.optional(Schema.String).pipe(T.HttpQuery("agencyId")),
    startRow: Schema.Number.pipe(T.HttpQuery("startRow")),
    adGroupId: Schema.optional(Schema.String).pipe(T.HttpQuery("adGroupId")),
    campaignId: Schema.optional(Schema.String).pipe(T.HttpQuery("campaignId")),
    adId: Schema.optional(Schema.String).pipe(T.HttpQuery("adId")),
    endDate: Schema.Number.pipe(T.HttpQuery("endDate")),
    startDate: Schema.Number.pipe(T.HttpQuery("startDate")),
    criterionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("criterionId"),
    ),
    engineAccountId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("engineAccountId"),
    ),
    rowCount: Schema.Number.pipe(T.HttpQuery("rowCount")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "doubleclicksearch/v2/customer/{customerId}/conversion",
    }),
    svc,
  ) as unknown as Schema.Codec<GetByCustomerIdConversionRequest>;

export type GetByCustomerIdConversionResponse = ConversionList;
export const GetByCustomerIdConversionResponse = /*@__PURE__*/ ConversionList;

export type GetByCustomerIdConversionError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a list of conversions from a DoubleClick Search engine account. */
export const getByCustomerIdConversion: API.OperationMethod<
  GetByCustomerIdConversionRequest,
  GetByCustomerIdConversionResponse,
  GetByCustomerIdConversionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetByCustomerIdConversionRequest,
  output: GetByCustomerIdConversionResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertConversionRequest {
  /** Request body */
  body?: ConversionList;
}

export const InsertConversionRequest =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(ConversionList).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "doubleclicksearch/v2/conversion",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<InsertConversionRequest>;

export type InsertConversionResponse = ConversionList;
export const InsertConversionResponse = /*@__PURE__*/ ConversionList;

export type InsertConversionError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a batch of new conversions into DoubleClick Search. */
export const insertConversion: API.OperationMethod<
  InsertConversionRequest,
  InsertConversionResponse,
  InsertConversionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InsertConversionRequest,
  output: InsertConversionResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFileReportsRequest {
  /** ID of the report. */
  reportId: string;
  /** The index of the report fragment to download. */
  reportFragment: number;
}

export const GetFileReportsRequest = /*@__PURE__*/ Schema.Struct({
  reportId: Schema.String.pipe(T.HttpPath("reportId")),
  reportFragment: Schema.Number.pipe(T.HttpPath("reportFragment")),
}).pipe(
  T.Http({
    method: "GET",
    path: "doubleclicksearch/v2/reports/{reportId}/files/{reportFragment}",
  }),
  svc,
) as unknown as Schema.Codec<GetFileReportsRequest>;

export interface GetFileReportsResponse {}
export const GetFileReportsResponse: Schema.Codec<GetFileReportsResponse> =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<GetFileReportsResponse>;

export type GetFileReportsError = DefaultErrors | NotFound | Forbidden;

/** Downloads a report file encoded in UTF-8. */
export const getFileReports: API.OperationMethod<
  GetFileReportsRequest,
  GetFileReportsResponse,
  GetFileReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFileReportsRequest,
  output: GetFileReportsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetReportsRequest {
  /** ID of the report request being polled. */
  reportId: string;
}

export const GetReportsRequest = /*@__PURE__*/ Schema.Struct({
  reportId: Schema.String.pipe(T.HttpPath("reportId")),
}).pipe(
  T.Http({ method: "GET", path: "doubleclicksearch/v2/reports/{reportId}" }),
  svc,
) as unknown as Schema.Codec<GetReportsRequest>;

export type GetReportsResponse = Report;
export const GetReportsResponse = /*@__PURE__*/ Report;

export type GetReportsError = DefaultErrors | NotFound | Forbidden;

/** Polls for the status of a report request. */
export const getReports: API.OperationMethod<
  GetReportsRequest,
  GetReportsResponse,
  GetReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetReportsRequest,
  output: GetReportsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetIdMappingFileReportsRequest {
  /** Legacy SA360 agency ID. */
  agencyId: string;
  /** Legacy SA360 advertiser ID. */
  advertiserId: string;
}

export const GetIdMappingFileReportsRequest =
  /*@__PURE__*/ Schema.Struct({
    agencyId: Schema.String.pipe(T.HttpPath("agencyId")),
    advertiserId: Schema.String.pipe(T.HttpPath("advertiserId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/idmapping",
    }),
    svc,
  ) as unknown as Schema.Codec<GetIdMappingFileReportsRequest>;

export type GetIdMappingFileReportsResponse = IdMappingFile;
export const GetIdMappingFileReportsResponse = /*@__PURE__*/ IdMappingFile;

export type GetIdMappingFileReportsError = DefaultErrors | NotFound | Forbidden;

/** Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360. */
export const getIdMappingFileReports: API.OperationMethod<
  GetIdMappingFileReportsRequest,
  GetIdMappingFileReportsResponse,
  GetIdMappingFileReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIdMappingFileReportsRequest,
  output: GetIdMappingFileReportsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RequestReportsRequest {
  /** Request body */
  body?: ReportRequest;
}

export const RequestReportsRequest = /*@__PURE__*/ Schema.Struct({
  body: Schema.optional(ReportRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "doubleclicksearch/v2/reports",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<RequestReportsRequest>;

export type RequestReportsResponse = Report;
export const RequestReportsResponse = /*@__PURE__*/ Report;

export type RequestReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a report request into the reporting system. */
export const requestReports: API.OperationMethod<
  RequestReportsRequest,
  RequestReportsResponse,
  RequestReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RequestReportsRequest,
  output: RequestReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateReportsRequest {
  /** Request body */
  body?: ReportRequest;
}

export const GenerateReportsRequest = /*@__PURE__*/ Schema.Struct({
  body: Schema.optional(ReportRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "doubleclicksearch/v2/reports/generate",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<GenerateReportsRequest>;

export type GenerateReportsResponse = Report;
export const GenerateReportsResponse = /*@__PURE__*/ Report;

export type GenerateReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates and returns a report immediately. */
export const generateReports: API.OperationMethod<
  GenerateReportsRequest,
  GenerateReportsResponse,
  GenerateReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GenerateReportsRequest,
  output: GenerateReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
