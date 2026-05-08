// ==========================================================================
// Local Services API (localservices v1)
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
  name: "localservices",
  version: "v1",
  rootUrl: "https://localservices.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleAdsHomeservicesLocalservicesV1MessageLead {
  /** Name of the customer who created the lead. */
  customerName?: string;
  /** The job type of the specified lead. */
  jobType?: string;
  /** Consumer phone number associated with the message lead. */
  consumerPhoneNumber?: string;
  /** The postal code of the customer who created the lead. */
  postalCode?: string;
}

export const GoogleAdsHomeservicesLocalservicesV1MessageLead: Schema.Schema<GoogleAdsHomeservicesLocalservicesV1MessageLead> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerName: Schema.optional(Schema.String),
    jobType: Schema.optional(Schema.String),
    consumerPhoneNumber: Schema.optional(Schema.String),
    postalCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsHomeservicesLocalservicesV1MessageLead",
  });

export interface GoogleAdsHomeservicesLocalservicesV1AggregatorInfo {
  /** Provider id (listed in aggregator system) which maps to a account id in GLS system. */
  aggregatorProviderId?: string;
}

export const GoogleAdsHomeservicesLocalservicesV1AggregatorInfo: Schema.Schema<GoogleAdsHomeservicesLocalservicesV1AggregatorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aggregatorProviderId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsHomeservicesLocalservicesV1AggregatorInfo",
  });

export interface GoogleTypeTimeZone {
  /** Optional. IANA Time Zone Database version number. For example "2019a". */
  version?: string;
  /** IANA Time Zone Database time zone. For example "America/New_York". */
  id?: string;
}

export const GoogleTypeTimeZone: Schema.Schema<GoogleTypeTimeZone> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleTypeTimeZone" });

export interface GoogleAdsHomeservicesLocalservicesV1PhoneLead {
  /** Consumer phone number associated with the phone lead. */
  consumerPhoneNumber?: string;
  /** Timestamp of the phone call which resulted in a charged phone lead. */
  chargedCallTimestamp?: string;
  /** Duration of the charged phone call in seconds. */
  chargedConnectedCallDurationSeconds?: string;
}

export const GoogleAdsHomeservicesLocalservicesV1PhoneLead: Schema.Schema<GoogleAdsHomeservicesLocalservicesV1PhoneLead> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consumerPhoneNumber: Schema.optional(Schema.String),
    chargedCallTimestamp: Schema.optional(Schema.String),
    chargedConnectedCallDurationSeconds: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsHomeservicesLocalservicesV1PhoneLead" });

export interface GoogleAdsHomeservicesLocalservicesV1BookingLead {
  /** Consumer phone number associated with the booking lead. */
  consumerPhoneNumber?: string;
  /** Timestamp of when service is provided by advertiser. */
  bookingAppointmentTimestamp?: string;
  /** Name of the customer who created the lead. */
  customerName?: string;
  /** The job type of the specified lead. */
  jobType?: string;
  /** Consumer email associated with the booking lead. */
  consumerEmail?: string;
}

export const GoogleAdsHomeservicesLocalservicesV1BookingLead: Schema.Schema<GoogleAdsHomeservicesLocalservicesV1BookingLead> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consumerPhoneNumber: Schema.optional(Schema.String),
    bookingAppointmentTimestamp: Schema.optional(Schema.String),
    customerName: Schema.optional(Schema.String),
    jobType: Schema.optional(Schema.String),
    consumerEmail: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsHomeservicesLocalservicesV1BookingLead",
  });

export interface GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport {
  /** More information associated to only message leads. */
  messageLead?: GoogleAdsHomeservicesLocalservicesV1MessageLead;
  /** Deprecated in favor of google_ads_lead_id. Unique identifier of a Detailed Lead Report. */
  leadId?: string;
  /** Identifies account that received the lead. */
  accountId?: string;
  /** Timestamp of when the lead was created. */
  leadCreationTimestamp?: string;
  /** Aggregator specific information related to the lead. */
  aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo;
  /** Price of the lead (available only after it has been charged). */
  leadPrice?: number;
  /** Timezone of the particular provider associated to a lead. */
  timezone?: GoogleTypeTimeZone;
  /** Whether the lead has been charged. */
  chargeStatus?:
    | "CHARGE_STATUS_UNSPECIFIED"
    | "CHARGED"
    | "NOT_CHARGED"
    | (string & {});
  /** Dispute status related to the lead. */
  disputeStatus?: string;
  /** Business name associated to the account. */
  businessName?: string;
  /** Unique identifier of a Detailed Lead Report. */
  googleAdsLeadId?: string;
  /** Currency code. */
  currencyCode?: string;
  /** More information associated to only phone leads. */
  phoneLead?: GoogleAdsHomeservicesLocalservicesV1PhoneLead;
  /** Location of the associated account's home city. */
  geo?: string;
  /** Lead category (e.g. hvac, plumber) */
  leadCategory?: string;
  /** More information associated to only booking leads. */
  bookingLead?: GoogleAdsHomeservicesLocalservicesV1BookingLead;
  /** Lead type. */
  leadType?:
    | "LEAD_TYPE_UNSPECIFIED"
    | "MESSAGE"
    | "PHONE_CALL"
    | "BOOKING"
    | (string & {});
}

export const GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport: Schema.Schema<GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageLead: Schema.optional(
      GoogleAdsHomeservicesLocalservicesV1MessageLead,
    ),
    leadId: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    leadCreationTimestamp: Schema.optional(Schema.String),
    aggregatorInfo: Schema.optional(
      GoogleAdsHomeservicesLocalservicesV1AggregatorInfo,
    ),
    leadPrice: Schema.optional(Schema.Number),
    timezone: Schema.optional(GoogleTypeTimeZone),
    chargeStatus: Schema.optional(Schema.String),
    disputeStatus: Schema.optional(Schema.String),
    businessName: Schema.optional(Schema.String),
    googleAdsLeadId: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
    phoneLead: Schema.optional(GoogleAdsHomeservicesLocalservicesV1PhoneLead),
    geo: Schema.optional(Schema.String),
    leadCategory: Schema.optional(Schema.String),
    bookingLead: Schema.optional(
      GoogleAdsHomeservicesLocalservicesV1BookingLead,
    ),
    leadType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport",
  });

export interface GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse {
  /** List of detailed lead reports uniquely identified by external lead id. */
  detailedLeadReports?: ReadonlyArray<GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport>;
  /** Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. */
  nextPageToken?: string;
}

export const GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse: Schema.Schema<GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detailedLeadReports: Schema.optional(
      Schema.Array(GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse",
  });

export interface GoogleAdsHomeservicesLocalservicesV1AccountReport {
  /** Average review rating score from 1-5 stars. */
  averageFiveStarRating?: number;
  /** Total cost of the account in previous specified period in the account's specified currency. */
  previousPeriodTotalCost?: number;
  /** Unique identifier of the GLS account. */
  accountId?: string;
  /** Number of phone calls in current specified period, including both connected and unconnected calls. */
  currentPeriodPhoneCalls?: string;
  /** Aggregator specific information related to the account. */
  aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo;
  /** Number of impressions that customers have had in the past 2 days. */
  impressionsLastTwoDays?: string;
  /** Average weekly budget in the currency code of the account. */
  averageWeeklyBudget?: number;
  /** Total cost of the account in current specified period in the account's specified currency. */
  currentPeriodTotalCost?: number;
  /** Number of phone calls in previous specified period, including both connected and unconnected calls. */
  previousPeriodPhoneCalls?: string;
  /** Number of connected phone calls (duration over 30s) in current specified period. */
  currentPeriodConnectedPhoneCalls?: string;
  /** Business name of the account. */
  businessName?: string;
  /** Total number of reviews the account has up to current date. */
  totalReview?: number;
  /** Number of charged leads the account received in previous specified period. */
  previousPeriodChargedLeads?: string;
  /** Currency code of the account. */
  currencyCode?: string;
  /** Number of connected phone calls (duration over 30s) in previous specified period. */
  previousPeriodConnectedPhoneCalls?: string;
  /** Number of charged leads the account received in current specified period. */
  currentPeriodChargedLeads?: string;
  /** Phone lead responsiveness of the account for the past 90 days from current date. This is computed by taking the total number of connected calls from charged phone leads and dividing by the total number of calls received. */
  phoneLeadResponsiveness?: number;
}

export const GoogleAdsHomeservicesLocalservicesV1AccountReport: Schema.Schema<GoogleAdsHomeservicesLocalservicesV1AccountReport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    averageFiveStarRating: Schema.optional(Schema.Number),
    previousPeriodTotalCost: Schema.optional(Schema.Number),
    accountId: Schema.optional(Schema.String),
    currentPeriodPhoneCalls: Schema.optional(Schema.String),
    aggregatorInfo: Schema.optional(
      GoogleAdsHomeservicesLocalservicesV1AggregatorInfo,
    ),
    impressionsLastTwoDays: Schema.optional(Schema.String),
    averageWeeklyBudget: Schema.optional(Schema.Number),
    currentPeriodTotalCost: Schema.optional(Schema.Number),
    previousPeriodPhoneCalls: Schema.optional(Schema.String),
    currentPeriodConnectedPhoneCalls: Schema.optional(Schema.String),
    businessName: Schema.optional(Schema.String),
    totalReview: Schema.optional(Schema.Number),
    previousPeriodChargedLeads: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
    previousPeriodConnectedPhoneCalls: Schema.optional(Schema.String),
    currentPeriodChargedLeads: Schema.optional(Schema.String),
    phoneLeadResponsiveness: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleAdsHomeservicesLocalservicesV1AccountReport",
  });

export interface GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse {
  /** Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. */
  nextPageToken?: string;
  /** List of account reports which maps 1:1 to a particular linked GLS account. */
  accountReports?: ReadonlyArray<GoogleAdsHomeservicesLocalservicesV1AccountReport>;
}

export const GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse: Schema.Schema<GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    accountReports: Schema.optional(
      Schema.Array(GoogleAdsHomeservicesLocalservicesV1AccountReport),
    ),
  }).annotate({
    identifier:
      "GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse",
  });

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

// ==========================================================================
// Operations
// ==========================================================================

export interface SearchAccountReportsRequest {
  /** The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional. */
  pageSize?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  "endDate.month"?: number;
  /** A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked accounts. Search expressions are case insensitive. Example query: | Query | Description | |-------------------------|-----------------------------------------------| | manager_customer_id:123 | Get Account Report for Manager with id 123. | Required. */
  query?: string;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  "startDate.month"?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  "endDate.year"?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  "endDate.day"?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  "startDate.year"?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  "startDate.day"?: number;
  /** The `next_page_token` value returned from a previous request to SearchAccountReports that indicates where listing should continue. Optional. */
  pageToken?: string;
}

export const SearchAccountReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    "endDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("endDate.month"),
    ),
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
    "startDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("startDate.month"),
    ),
    "endDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("endDate.year"),
    ),
    "endDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("endDate.day"),
    ),
    "startDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("startDate.year"),
    ),
    "startDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("startDate.day"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/accountReports:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchAccountReportsRequest>;

export type SearchAccountReportsResponse =
  GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse;
export const SearchAccountReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse;

export type SearchAccountReportsError = DefaultErrors | NotFound | Forbidden;

/** Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts. */
export const searchAccountReports: API.PaginatedOperationMethod<
  SearchAccountReportsRequest,
  SearchAccountReportsResponse,
  SearchAccountReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchAccountReportsRequest,
  output: SearchAccountReportsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SearchDetailedLeadReportsRequest {
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  "startDate.month"?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  "endDate.year"?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  "endDate.day"?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  "startDate.year"?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  "startDate.day"?: number;
  /** The `next_page_token` value returned from a previous request to SearchDetailedLeadReports that indicates where listing should continue. Optional. */
  pageToken?: string;
  /** The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional. */
  pageSize?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  "endDate.month"?: number;
  /** A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked accounts. Search expressions are case insensitive. Example query: | Query | Description | |-------------------------|-----------------------------------------------| | manager_customer_id:123 | Get Detailed Lead Report for Manager with id | | | 123. | Required. */
  query?: string;
}

export const SearchDetailedLeadReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "startDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("startDate.month"),
    ),
    "endDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("endDate.year"),
    ),
    "endDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("endDate.day"),
    ),
    "startDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("startDate.year"),
    ),
    "startDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("startDate.day"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    "endDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("endDate.month"),
    ),
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/detailedLeadReports:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchDetailedLeadReportsRequest>;

export type SearchDetailedLeadReportsResponse =
  GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse;
export const SearchDetailedLeadReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse;

export type SearchDetailedLeadReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts. */
export const searchDetailedLeadReports: API.PaginatedOperationMethod<
  SearchDetailedLeadReportsRequest,
  SearchDetailedLeadReportsResponse,
  SearchDetailedLeadReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchDetailedLeadReportsRequest,
  output: SearchDetailedLeadReportsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
