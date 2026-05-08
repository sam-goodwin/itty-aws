// ==========================================================================
// Ad Experience Report API (adexperiencereport v1)
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
  name: "adexperiencereport",
  version: "v1",
  rootUrl: "https://adexperiencereport.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface PlatformSummary {
  /** The site's Ad Experience Report status on this platform. */
  betterAdsStatus?:
    | "UNKNOWN"
    | "PASSING"
    | "WARNING"
    | "FAILING"
    | (string & {});
  /** A link to the full Ad Experience Report for the site on this platform.. Not set in ViolatingSitesResponse. Note that you must complete the [Search Console verification process](https://support.google.com/webmasters/answer/9008080) for the site before you can access the full report. */
  reportUrl?: string;
  /** The time at which the site's status last changed on this platform. */
  lastChangeTime?: string;
  /** The site's regions on this platform. No longer populated, because there is no longer any semantic difference between sites in different regions. */
  region?: ReadonlyArray<
    "REGION_UNKNOWN" | "REGION_A" | "REGION_B" | "REGION_C" | (string & {})
  >;
  /** Whether the site is currently under review on this platform. */
  underReview?: boolean;
  /** The time at which [enforcement](https://support.google.com/webtools/answer/7308033) against the site began or will begin on this platform. Not set when the filter_status is OFF. */
  enforcementTime?: string;
  /** The site's [enforcement status](https://support.google.com/webtools/answer/7308033) on this platform. */
  filterStatus?:
    | "UNKNOWN"
    | "ON"
    | "OFF"
    | "PAUSED"
    | "PENDING"
    | (string & {});
}

export const PlatformSummary: Schema.Schema<PlatformSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    betterAdsStatus: Schema.optional(Schema.String),
    reportUrl: Schema.optional(Schema.String),
    lastChangeTime: Schema.optional(Schema.String),
    region: Schema.optional(Schema.Array(Schema.String)),
    underReview: Schema.optional(Schema.Boolean),
    enforcementTime: Schema.optional(Schema.String),
    filterStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlatformSummary" });

export interface SiteSummaryResponse {
  /** The name of the reviewed site, e.g. `google.com`. */
  reviewedSite?: string;
  /** The site's Ad Experience Report summary on desktop. */
  desktopSummary?: PlatformSummary;
  /** The site's Ad Experience Report summary on mobile. */
  mobileSummary?: PlatformSummary;
}

export const SiteSummaryResponse: Schema.Schema<SiteSummaryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reviewedSite: Schema.optional(Schema.String),
    desktopSummary: Schema.optional(PlatformSummary),
    mobileSummary: Schema.optional(PlatformSummary),
  }).annotate({ identifier: "SiteSummaryResponse" });

export interface ViolatingSitesResponse {
  /** The list of violating sites. */
  violatingSites?: ReadonlyArray<SiteSummaryResponse>;
}

export const ViolatingSitesResponse: Schema.Schema<ViolatingSitesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    violatingSites: Schema.optional(Schema.Array(SiteSummaryResponse)),
  }).annotate({ identifier: "ViolatingSitesResponse" });

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

export interface GetSitesRequest {
  /** Required. The name of the site whose summary to get, e.g. `sites/http%3A%2F%2Fwww.google.com%2F`. Format: `sites/{site}` */
  name: string;
}

export const GetSitesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetSitesRequest>;

export type GetSitesResponse = SiteSummaryResponse;
export const GetSitesResponse = /*@__PURE__*/ /*#__PURE__*/ SiteSummaryResponse;

export type GetSitesError = DefaultErrors | NotFound | Forbidden;

/** Gets a site's Ad Experience Report summary. */
export const getSites: API.OperationMethod<
  GetSitesRequest,
  GetSitesResponse,
  GetSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSitesRequest,
  output: GetSitesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListViolatingSitesRequest {}

export const ListViolatingSitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "v1/violatingSites" }),
    svc,
  ) as unknown as Schema.Schema<ListViolatingSitesRequest>;

export type ListViolatingSitesResponse = ViolatingSitesResponse;
export const ListViolatingSitesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ViolatingSitesResponse;

export type ListViolatingSitesError = DefaultErrors | NotFound | Forbidden;

/** Lists sites that are failing in the Ad Experience Report on at least one platform. */
export const listViolatingSites: API.OperationMethod<
  ListViolatingSitesRequest,
  ListViolatingSitesResponse,
  ListViolatingSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListViolatingSitesRequest,
  output: ListViolatingSitesResponse,
  errors: [NotFound, Forbidden],
}));
