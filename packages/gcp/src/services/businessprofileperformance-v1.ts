// ==========================================================================
// Business Profile Performance API (businessprofileperformance v1)
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
  name: "businessprofileperformance",
  version: "v1",
  rootUrl: "https://businessprofileperformance.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Businessprofileperformance_Date {
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
}

export const Businessprofileperformance_Date =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    day: Schema.optional(Schema.Number),
    year: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Businessprofileperformance_Date" });

export interface DatedValue {
  /** The date that the datapoint corresponds to. This represents a month value if the day field is not set. */
  date?: Businessprofileperformance_Date;
  /** The value of the datapoint. This will not be present when the value is zero. */
  value?: string;
}

export const DatedValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  date: Schema.optional(Businessprofileperformance_Date),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "DatedValue" });

export interface TimeSeries {
  /** List of datapoints in the timeseries, where each datapoint is a date-value pair. */
  datedValues?: ReadonlyArray<DatedValue>;
}

export const TimeSeries = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datedValues: Schema.optional(Schema.Array(DatedValue)),
}).annotate({ identifier: "TimeSeries" });

export interface TimeOfDay {
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
}

export const TimeOfDay = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  seconds: Schema.optional(Schema.Number),
  minutes: Schema.optional(Schema.Number),
  nanos: Schema.optional(Schema.Number),
  hours: Schema.optional(Schema.Number),
}).annotate({ identifier: "TimeOfDay" });

export interface DailySubEntityType {
  /** Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics = NONE. */
  dayOfWeek?:
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {});
  /** Represents the time of the day in 24 hour format. Eg: 13:34:20 Currently supported DailyMetrics = NONE. */
  timeOfDay?: TimeOfDay;
}

export const DailySubEntityType = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dayOfWeek: Schema.optional(Schema.String),
  timeOfDay: Schema.optional(TimeOfDay),
}).annotate({ identifier: "DailySubEntityType" });

export interface DailyMetricTimeSeries {
  /** The DailyMetric that the TimeSeries represents. */
  dailyMetric?:
    | "DAILY_METRIC_UNKNOWN"
    | "BUSINESS_IMPRESSIONS_DESKTOP_MAPS"
    | "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH"
    | "BUSINESS_IMPRESSIONS_MOBILE_MAPS"
    | "BUSINESS_IMPRESSIONS_MOBILE_SEARCH"
    | "BUSINESS_CONVERSATIONS"
    | "BUSINESS_DIRECTION_REQUESTS"
    | "CALL_CLICKS"
    | "WEBSITE_CLICKS"
    | "BUSINESS_BOOKINGS"
    | "BUSINESS_FOOD_ORDERS"
    | "BUSINESS_FOOD_MENU_CLICKS"
    | (string & {});
  /** The DailySubEntityType that the TimeSeries represents. Will not be present when breakdown does not exist. */
  dailySubEntityType?: DailySubEntityType;
  /** List of datapoints where each datapoint is a date-value pair. */
  timeSeries?: TimeSeries;
}

export const DailyMetricTimeSeries = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dailyMetric: Schema.optional(Schema.String),
  dailySubEntityType: Schema.optional(DailySubEntityType),
  timeSeries: Schema.optional(TimeSeries),
}).annotate({ identifier: "DailyMetricTimeSeries" });

export interface MultiDailyMetricTimeSeries {
  /** List of DailyMetric-TimeSeries pairs. */
  dailyMetricTimeSeries?: ReadonlyArray<DailyMetricTimeSeries>;
}

export const MultiDailyMetricTimeSeries =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dailyMetricTimeSeries: Schema.optional(Schema.Array(DailyMetricTimeSeries)),
  }).annotate({ identifier: "MultiDailyMetricTimeSeries" });

export interface InsightsValue {
  /** Represents the actual value. */
  value?: string;
  /** Represents the threshold below which the actual value falls. */
  threshold?: string;
}

export const InsightsValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  threshold: Schema.optional(Schema.String),
}).annotate({ identifier: "InsightsValue" });

export interface SearchKeywordCount {
  /** One of either: 1) The sum of the number of unique users that used the keyword in a month, aggregated for each month requested. 2) A threshold that indicates that the actual value is below this threshold. */
  insightsValue?: InsightsValue;
  /** The lower-cased string that the user entered. */
  searchKeyword?: string;
}

export const SearchKeywordCount = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  insightsValue: Schema.optional(InsightsValue),
  searchKeyword: Schema.optional(Schema.String),
}).annotate({ identifier: "SearchKeywordCount" });

export interface ListSearchKeywordImpressionsMonthlyResponse {
  /** Search terms which have been used to find a business. */
  searchKeywordsCounts?: ReadonlyArray<SearchKeywordCount>;
  /** A token indicating the last paginated result returned. This can be used by succeeding requests to get the next "page" of keywords. It will only be present when there are more results to be returned. */
  nextPageToken?: string;
}

export const ListSearchKeywordImpressionsMonthlyResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    searchKeywordsCounts: Schema.optional(Schema.Array(SearchKeywordCount)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSearchKeywordImpressionsMonthlyResponse" });

export interface GetDailyMetricsTimeSeriesResponse {
  /** The daily time series. */
  timeSeries?: TimeSeries;
}

export const GetDailyMetricsTimeSeriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeSeries: Schema.optional(TimeSeries),
  }).annotate({ identifier: "GetDailyMetricsTimeSeriesResponse" });

export interface FetchMultiDailyMetricsTimeSeriesResponse {
  /** DailyMetrics and their corresponding time series. */
  multiDailyMetricTimeSeries?: ReadonlyArray<MultiDailyMetricTimeSeries>;
}

export const FetchMultiDailyMetricsTimeSeriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    multiDailyMetricTimeSeries: Schema.optional(
      Schema.Array(MultiDailyMetricTimeSeries),
    ),
  }).annotate({ identifier: "FetchMultiDailyMetricsTimeSeriesResponse" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
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
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface FetchMultiDailyMetricsTimeSeriesLocationsRequest {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  "dailyRange.endDate.year"?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  "dailyRange.endDate.day"?: number;
  /** Required. The metrics to retrieve time series for. */
  dailyMetrics?:
    | "DAILY_METRIC_UNKNOWN"
    | "BUSINESS_IMPRESSIONS_DESKTOP_MAPS"
    | "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH"
    | "BUSINESS_IMPRESSIONS_MOBILE_MAPS"
    | "BUSINESS_IMPRESSIONS_MOBILE_SEARCH"
    | "BUSINESS_CONVERSATIONS"
    | "BUSINESS_DIRECTION_REQUESTS"
    | "CALL_CLICKS"
    | "WEBSITE_CLICKS"
    | "BUSINESS_BOOKINGS"
    | "BUSINESS_FOOD_ORDERS"
    | "BUSINESS_FOOD_MENU_CLICKS"
    | (string & {})[];
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  "dailyRange.startDate.month"?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  "dailyRange.endDate.month"?: number;
  /** Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id. */
  location: string;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  "dailyRange.startDate.year"?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  "dailyRange.startDate.day"?: number;
}

export const FetchMultiDailyMetricsTimeSeriesLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "dailyRange.endDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("dailyRange.endDate.year"),
    ),
    "dailyRange.endDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("dailyRange.endDate.day"),
    ),
    dailyMetrics: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("dailyMetrics"),
    ),
    "dailyRange.startDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("dailyRange.startDate.month"),
    ),
    "dailyRange.endDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("dailyRange.endDate.month"),
    ),
    location: Schema.String.pipe(T.HttpPath("location")),
    "dailyRange.startDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("dailyRange.startDate.year"),
    ),
    "dailyRange.startDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("dailyRange.startDate.day"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{location}:fetchMultiDailyMetricsTimeSeries",
    }),
    svc,
  ) as unknown as Schema.Schema<FetchMultiDailyMetricsTimeSeriesLocationsRequest>;

export type FetchMultiDailyMetricsTimeSeriesLocationsResponse =
  FetchMultiDailyMetricsTimeSeriesResponse;
export const FetchMultiDailyMetricsTimeSeriesLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchMultiDailyMetricsTimeSeriesResponse;

export type FetchMultiDailyMetricsTimeSeriesLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the values for each date from a given time range and optionally the sub entity type, where applicable, that are associated with the specific daily metrics. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31` */
export const fetchMultiDailyMetricsTimeSeriesLocations: API.OperationMethod<
  FetchMultiDailyMetricsTimeSeriesLocationsRequest,
  FetchMultiDailyMetricsTimeSeriesLocationsResponse,
  FetchMultiDailyMetricsTimeSeriesLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchMultiDailyMetricsTimeSeriesLocationsRequest,
  output: FetchMultiDailyMetricsTimeSeriesLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetDailyMetricsTimeSeriesLocationsRequest {
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  "dailySubEntityType.timeOfDay.hours"?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  "dailyRange.startDate.day"?: number;
  /** Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics = NONE. */
  "dailySubEntityType.dayOfWeek"?:
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {});
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  "dailySubEntityType.timeOfDay.seconds"?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  "dailyRange.endDate.year"?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  "dailyRange.endDate.day"?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  "dailyRange.endDate.month"?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  "dailyRange.startDate.year"?: number;
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  "dailySubEntityType.timeOfDay.nanos"?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  "dailyRange.startDate.month"?: number;
  /** Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id. */
  name: string;
  /** Required. The metric to retrieve time series. */
  dailyMetric?:
    | "DAILY_METRIC_UNKNOWN"
    | "BUSINESS_IMPRESSIONS_DESKTOP_MAPS"
    | "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH"
    | "BUSINESS_IMPRESSIONS_MOBILE_MAPS"
    | "BUSINESS_IMPRESSIONS_MOBILE_SEARCH"
    | "BUSINESS_CONVERSATIONS"
    | "BUSINESS_DIRECTION_REQUESTS"
    | "CALL_CLICKS"
    | "WEBSITE_CLICKS"
    | "BUSINESS_BOOKINGS"
    | "BUSINESS_FOOD_ORDERS"
    | "BUSINESS_FOOD_MENU_CLICKS"
    | (string & {});
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  "dailySubEntityType.timeOfDay.minutes"?: number;
}

export const GetDailyMetricsTimeSeriesLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "dailySubEntityType.timeOfDay.hours": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("dailySubEntityType.timeOfDay.hours"),
    ),
    "dailyRange.startDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("dailyRange.startDate.day"),
    ),
    "dailySubEntityType.dayOfWeek": Schema.optional(Schema.String).pipe(
      T.HttpQuery("dailySubEntityType.dayOfWeek"),
    ),
    "dailySubEntityType.timeOfDay.seconds": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("dailySubEntityType.timeOfDay.seconds"),
    ),
    "dailyRange.endDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("dailyRange.endDate.year"),
    ),
    "dailyRange.endDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("dailyRange.endDate.day"),
    ),
    "dailyRange.endDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("dailyRange.endDate.month"),
    ),
    "dailyRange.startDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("dailyRange.startDate.year"),
    ),
    "dailySubEntityType.timeOfDay.nanos": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("dailySubEntityType.timeOfDay.nanos"),
    ),
    "dailyRange.startDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("dailyRange.startDate.month"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    dailyMetric: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dailyMetric"),
    ),
    "dailySubEntityType.timeOfDay.minutes": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("dailySubEntityType.timeOfDay.minutes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}:getDailyMetricsTimeSeries" }),
    svc,
  ) as unknown as Schema.Schema<GetDailyMetricsTimeSeriesLocationsRequest>;

export type GetDailyMetricsTimeSeriesLocationsResponse =
  GetDailyMetricsTimeSeriesResponse;
export const GetDailyMetricsTimeSeriesLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetDailyMetricsTimeSeriesResponse;

export type GetDailyMetricsTimeSeriesLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31` */
export const getDailyMetricsTimeSeriesLocations: API.OperationMethod<
  GetDailyMetricsTimeSeriesLocationsRequest,
  GetDailyMetricsTimeSeriesLocationsResponse,
  GetDailyMetricsTimeSeriesLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDailyMetricsTimeSeriesLocationsRequest,
  output: GetDailyMetricsTimeSeriesLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListLocationsSearchkeywordsImpressionsMonthlyRequest {
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  "monthlyRange.startMonth.month"?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  "monthlyRange.startMonth.day"?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  "monthlyRange.endMonth.year"?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  "monthlyRange.startMonth.year"?: number;
  /** Optional. The number of results requested. The default page size is 100. Page size can be set to a maximum of 100. */
  pageSize?: number;
  /** Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id. */
  parent: string;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  "monthlyRange.endMonth.month"?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  "monthlyRange.endMonth.day"?: number;
  /** Optional. A token indicating the next paginated result to be returned. */
  pageToken?: string;
}

export const ListLocationsSearchkeywordsImpressionsMonthlyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "monthlyRange.startMonth.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("monthlyRange.startMonth.month"),
    ),
    "monthlyRange.startMonth.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("monthlyRange.startMonth.day"),
    ),
    "monthlyRange.endMonth.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("monthlyRange.endMonth.year"),
    ),
    "monthlyRange.startMonth.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("monthlyRange.startMonth.year"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    "monthlyRange.endMonth.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("monthlyRange.endMonth.month"),
    ),
    "monthlyRange.endMonth.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("monthlyRange.endMonth.day"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{parent}/searchkeywords/impressions/monthly",
    }),
    svc,
  ) as unknown as Schema.Schema<ListLocationsSearchkeywordsImpressionsMonthlyRequest>;

export type ListLocationsSearchkeywordsImpressionsMonthlyResponse =
  ListSearchKeywordImpressionsMonthlyResponse;
export const ListLocationsSearchkeywordsImpressionsMonthlyResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSearchKeywordImpressionsMonthlyResponse;

export type ListLocationsSearchkeywordsImpressionsMonthlyError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3` */
export const listLocationsSearchkeywordsImpressionsMonthly: API.PaginatedOperationMethod<
  ListLocationsSearchkeywordsImpressionsMonthlyRequest,
  ListLocationsSearchkeywordsImpressionsMonthlyResponse,
  ListLocationsSearchkeywordsImpressionsMonthlyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLocationsSearchkeywordsImpressionsMonthlyRequest,
  output: ListLocationsSearchkeywordsImpressionsMonthlyResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
