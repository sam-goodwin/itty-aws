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

export interface GoogleAdsHomeservicesLocalservicesV1BookingLead {
  /** Consumer email associated with the booking lead. */
  consumerEmail?: string;
  /** Consumer phone number associated with the booking lead. */
  consumerPhoneNumber?: string;
  /** The job type of the specified lead. */
  jobType?: string;
  /** Timestamp of when service is provided by advertiser. */
  bookingAppointmentTimestamp?: string;
  /** Name of the customer who created the lead. */
  customerName?: string;
}

export const GoogleAdsHomeservicesLocalservicesV1BookingLead =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consumerEmail: Schema.optional(Schema.String),
    consumerPhoneNumber: Schema.optional(Schema.String),
    jobType: Schema.optional(Schema.String),
    bookingAppointmentTimestamp: Schema.optional(Schema.String),
    customerName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsHomeservicesLocalservicesV1BookingLead",
  });

export interface GoogleTypeTimeZone {
  /** IANA Time Zone Database time zone. For example "America/New_York". */
  id?: string;
  /** Optional. IANA Time Zone Database version number. For example "2019a". */
  version?: string;
}

export const GoogleTypeTimeZone = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
}).annotate({ identifier: "GoogleTypeTimeZone" });

export interface GoogleAdsHomeservicesLocalservicesV1AggregatorInfo {
  /** Provider id (listed in aggregator system) which maps to a account id in GLS system. */
  aggregatorProviderId?: string;
}

export const GoogleAdsHomeservicesLocalservicesV1AggregatorInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aggregatorProviderId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsHomeservicesLocalservicesV1AggregatorInfo",
  });

export interface GoogleAdsHomeservicesLocalservicesV1PhoneLead {
  /** Timestamp of the phone call which resulted in a charged phone lead. */
  chargedCallTimestamp?: string;
  /** Duration of the charged phone call in seconds. */
  chargedConnectedCallDurationSeconds?: string;
  /** Consumer phone number associated with the phone lead. */
  consumerPhoneNumber?: string;
}

export const GoogleAdsHomeservicesLocalservicesV1PhoneLead =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    chargedCallTimestamp: Schema.optional(Schema.String),
    chargedConnectedCallDurationSeconds: Schema.optional(Schema.String),
    consumerPhoneNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAdsHomeservicesLocalservicesV1PhoneLead" });

export interface GoogleAdsHomeservicesLocalservicesV1MessageLead {
  /** Name of the customer who created the lead. */
  customerName?: string;
  /** Consumer phone number associated with the message lead. */
  consumerPhoneNumber?: string;
  /** The job type of the specified lead. */
  jobType?: string;
  /** The postal code of the customer who created the lead. */
  postalCode?: string;
}

export const GoogleAdsHomeservicesLocalservicesV1MessageLead =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerName: Schema.optional(Schema.String),
    consumerPhoneNumber: Schema.optional(Schema.String),
    jobType: Schema.optional(Schema.String),
    postalCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsHomeservicesLocalservicesV1MessageLead",
  });

export interface GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport {
  /** Aggregator specific information related to the lead. */
  aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo;
  /** Identifies account that received the lead. */
  accountId?: string;
  /** More information associated to only phone leads. */
  phoneLead?: GoogleAdsHomeservicesLocalservicesV1PhoneLead;
  /** Business name associated to the account. */
  businessName?: string;
  /** Whether the lead has been charged. */
  chargeStatus?:
    | "CHARGE_STATUS_UNSPECIFIED"
    | "CHARGED"
    | "NOT_CHARGED"
    | (string & {});
  /** Timestamp of when the lead was created. */
  leadCreationTimestamp?: string;
  /** Location of the associated account's home city. */
  geo?: string;
  /** More information associated to only message leads. */
  messageLead?: GoogleAdsHomeservicesLocalservicesV1MessageLead;
  /** Currency code. */
  currencyCode?: string;
  /** Deprecated in favor of google_ads_lead_id. Unique identifier of a Detailed Lead Report. */
  leadId?: string;
  /** Lead category (e.g. hvac, plumber) */
  leadCategory?: string;
  /** Lead type. */
  leadType?:
    | "LEAD_TYPE_UNSPECIFIED"
    | "MESSAGE"
    | "PHONE_CALL"
    | "BOOKING"
    | (string & {});
  /** More information associated to only booking leads. */
  bookingLead?: GoogleAdsHomeservicesLocalservicesV1BookingLead;
  /** Price of the lead (available only after it has been charged). */
  leadPrice?: number;
  /** Unique identifier of a Detailed Lead Report. */
  googleAdsLeadId?: string;
  /** Timezone of the particular provider associated to a lead. */
  timezone?: GoogleTypeTimeZone;
  /** Dispute status related to the lead. */
  disputeStatus?: string;
}

export const GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aggregatorInfo: Schema.optional(
      GoogleAdsHomeservicesLocalservicesV1AggregatorInfo,
    ),
    accountId: Schema.optional(Schema.String),
    phoneLead: Schema.optional(GoogleAdsHomeservicesLocalservicesV1PhoneLead),
    businessName: Schema.optional(Schema.String),
    chargeStatus: Schema.optional(Schema.String),
    leadCreationTimestamp: Schema.optional(Schema.String),
    geo: Schema.optional(Schema.String),
    messageLead: Schema.optional(
      GoogleAdsHomeservicesLocalservicesV1MessageLead,
    ),
    currencyCode: Schema.optional(Schema.String),
    leadId: Schema.optional(Schema.String),
    leadCategory: Schema.optional(Schema.String),
    leadType: Schema.optional(Schema.String),
    bookingLead: Schema.optional(
      GoogleAdsHomeservicesLocalservicesV1BookingLead,
    ),
    leadPrice: Schema.optional(Schema.Number),
    googleAdsLeadId: Schema.optional(Schema.String),
    timezone: Schema.optional(GoogleTypeTimeZone),
    disputeStatus: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport",
  });

export interface GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse {
  /** Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. */
  nextPageToken?: string;
  /** List of detailed lead reports uniquely identified by external lead id. */
  detailedLeadReports?: ReadonlyArray<GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport>;
}

export const GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    detailedLeadReports: Schema.optional(
      Schema.Array(GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport),
    ),
  }).annotate({
    identifier:
      "GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse",
  });

export interface GoogleAdsHomeservicesLocalservicesV1AccountReport {
  /** Total number of reviews the account has up to current date. */
  totalReview?: number;
  /** Number of phone calls in current specified period, including both connected and unconnected calls. */
  currentPeriodPhoneCalls?: string;
  /** Number of connected phone calls (duration over 30s) in current specified period. */
  currentPeriodConnectedPhoneCalls?: string;
  /** Number of connected phone calls (duration over 30s) in previous specified period. */
  previousPeriodConnectedPhoneCalls?: string;
  /** Number of charged leads the account received in current specified period. */
  currentPeriodChargedLeads?: string;
  /** Average weekly budget in the currency code of the account. */
  averageWeeklyBudget?: number;
  /** Number of charged leads the account received in previous specified period. */
  previousPeriodChargedLeads?: string;
  /** Currency code of the account. */
  currencyCode?: string;
  /** Total cost of the account in previous specified period in the account's specified currency. */
  previousPeriodTotalCost?: number;
  /** Average review rating score from 1-5 stars. */
  averageFiveStarRating?: number;
  /** Business name of the account. */
  businessName?: string;
  /** Unique identifier of the GLS account. */
  accountId?: string;
  /** Total cost of the account in current specified period in the account's specified currency. */
  currentPeriodTotalCost?: number;
  /** Number of phone calls in previous specified period, including both connected and unconnected calls. */
  previousPeriodPhoneCalls?: string;
  /** Number of impressions that customers have had in the past 2 days. */
  impressionsLastTwoDays?: string;
  /** Aggregator specific information related to the account. */
  aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo;
  /** Phone lead responsiveness of the account for the past 90 days from current date. This is computed by taking the total number of connected calls from charged phone leads and dividing by the total number of calls received. */
  phoneLeadResponsiveness?: number;
}

export const GoogleAdsHomeservicesLocalservicesV1AccountReport =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalReview: Schema.optional(Schema.Number),
    currentPeriodPhoneCalls: Schema.optional(Schema.String),
    currentPeriodConnectedPhoneCalls: Schema.optional(Schema.String),
    previousPeriodConnectedPhoneCalls: Schema.optional(Schema.String),
    currentPeriodChargedLeads: Schema.optional(Schema.String),
    averageWeeklyBudget: Schema.optional(Schema.Number),
    previousPeriodChargedLeads: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
    previousPeriodTotalCost: Schema.optional(Schema.Number),
    averageFiveStarRating: Schema.optional(Schema.Number),
    businessName: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    currentPeriodTotalCost: Schema.optional(Schema.Number),
    previousPeriodPhoneCalls: Schema.optional(Schema.String),
    impressionsLastTwoDays: Schema.optional(Schema.String),
    aggregatorInfo: Schema.optional(
      GoogleAdsHomeservicesLocalservicesV1AggregatorInfo,
    ),
    phoneLeadResponsiveness: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleAdsHomeservicesLocalservicesV1AccountReport",
  });

export interface GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse {
  /** List of account reports which maps 1:1 to a particular linked GLS account. */
  accountReports?: ReadonlyArray<GoogleAdsHomeservicesLocalservicesV1AccountReport>;
  /** Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. */
  nextPageToken?: string;
}

export const GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountReports: Schema.optional(
      Schema.Array(GoogleAdsHomeservicesLocalservicesV1AccountReport),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse",
  });

// ==========================================================================
// Operations
// ==========================================================================

export interface SearchAccountReportsRequest {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  "startDate.year"?: number;
  /** The `next_page_token` value returned from a previous request to SearchAccountReports that indicates where listing should continue. Optional. */
  pageToken?: string;
  /** A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked accounts. Search expressions are case insensitive. Example query: | Query | Description | |-------------------------|-----------------------------------------------| | manager_customer_id:123 | Get Account Report for Manager with id 123. | Required. */
  query?: string;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  "startDate.month"?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  "endDate.month"?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  "endDate.year"?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  "startDate.day"?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  "endDate.day"?: number;
  /** The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional. */
  pageSize?: number;
}

export const SearchAccountReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "startDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("startDate.year"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
    "startDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("startDate.month"),
    ),
    "endDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("endDate.month"),
    ),
    "endDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("endDate.year"),
    ),
    "startDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("startDate.day"),
    ),
    "endDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("endDate.day"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/accountReports:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchAccountReportsRequest>;

export type SearchAccountReportsResponse =
  GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse;
export const SearchAccountReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse;

export type SearchAccountReportsError = DefaultErrors;

/** Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts. */
export const searchAccountReports: API.PaginatedOperationMethod<
  SearchAccountReportsRequest,
  SearchAccountReportsResponse,
  SearchAccountReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchAccountReportsRequest,
  output: SearchAccountReportsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SearchDetailedLeadReportsRequest {
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  "startDate.day"?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  "endDate.day"?: number;
  /** The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional. */
  pageSize?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  "endDate.month"?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  "endDate.year"?: number;
  /** The `next_page_token` value returned from a previous request to SearchDetailedLeadReports that indicates where listing should continue. Optional. */
  pageToken?: string;
  /** A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked accounts. Search expressions are case insensitive. Example query: | Query | Description | |-------------------------|-----------------------------------------------| | manager_customer_id:123 | Get Detailed Lead Report for Manager with id | | | 123. | Required. */
  query?: string;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  "startDate.month"?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  "startDate.year"?: number;
}

export const SearchDetailedLeadReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "startDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("startDate.day"),
    ),
    "endDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("endDate.day"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    "endDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("endDate.month"),
    ),
    "endDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("endDate.year"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
    "startDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("startDate.month"),
    ),
    "startDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("startDate.year"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/detailedLeadReports:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchDetailedLeadReportsRequest>;

export type SearchDetailedLeadReportsResponse =
  GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse;
export const SearchDetailedLeadReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse;

export type SearchDetailedLeadReportsError = DefaultErrors;

/** Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts. */
export const searchDetailedLeadReports: API.PaginatedOperationMethod<
  SearchDetailedLeadReportsRequest,
  SearchDetailedLeadReportsResponse,
  SearchDetailedLeadReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchDetailedLeadReportsRequest,
  output: SearchDetailedLeadReportsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
