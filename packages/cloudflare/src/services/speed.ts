/**
 * Cloudflare SPEED API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service speed
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Errors
// =============================================================================

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class TestScheduleAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TestScheduleAlreadyExists>()(
    "TestScheduleAlreadyExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 400, message: { includes: "scheduled_test_already_exists" } }],
) {}

export class TestScheduleNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TestScheduleNotFound>()("TestScheduleNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 404, message: { includes: "schedule_not_found" } }, { status: 404 }],
) {}

export class TestScheduleQuotaReached extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TestScheduleQuotaReached>()(
    "TestScheduleQuotaReached",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 429, message: { includes: "quota reached" } }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Value {
  business?: number | null;
  enterprise?: number | null;
  free?: number | null;
  pro?: number | null;
}
const Value = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    business: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    enterprise: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    free: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    pro: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Value>;

interface QuotasPerPlan {
  /** Counts per account plan. */
  value?: {
    business?: number | null;
    enterprise?: number | null;
    free?: number | null;
    pro?: number | null;
  } | null;
}
const QuotasPerPlan = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    value: Schema.optional(Schema.Union([Value, Schema.Null])),
  }),
) as unknown as Schema.Codec<QuotasPerPlan>;

interface Quota {
  /** Cloudflare plan. */
  plan?: string | null;
  /** The number of tests available per plan. */
  quotasPerPlan?: {
    value?: {
      business?: number | null;
      enterprise?: number | null;
      free?: number | null;
      pro?: number | null;
    } | null;
  } | null;
  /** The number of remaining schedules available. */
  remainingSchedules?: number | null;
  /** The number of remaining tests available. */
  remainingTests?: number | null;
  /** The number of schedules available per plan. */
  scheduleQuotasPerPlan?: {
    value?: {
      business?: number | null;
      enterprise?: number | null;
      free?: number | null;
      pro?: number | null;
    } | null;
  } | null;
}
const Quota = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    plan: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    quotasPerPlan: Schema.optional(Schema.Union([QuotasPerPlan, Schema.Null])),
    remainingSchedules: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    remainingTests: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    scheduleQuotasPerPlan: Schema.optional(
      Schema.Union([QuotasPerPlan, Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Quota>;

interface LabeledRegion {
  label?: string | null;
  /** A test region. */
  value?:
    | "asia-east1"
    | "asia-northeast1"
    | "asia-northeast2"
    | "asia-south1"
    | "asia-southeast1"
    | "australia-southeast1"
    | "europe-north1"
    | "europe-southwest1"
    | "europe-west1"
    | "europe-west2"
    | "europe-west3"
    | "europe-west4"
    | "europe-west8"
    | "europe-west9"
    | "me-west1"
    | "southamerica-east1"
    | "us-central1"
    | "us-east1"
    | "us-east4"
    | "us-south1"
    | "us-west1"
    | (string & {})
    | null;
}
const LabeledRegion = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    label: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "asia-east1",
            "asia-northeast1",
            "asia-northeast2",
            "asia-south1",
            "asia-southeast1",
            "australia-southeast1",
            "europe-north1",
            "europe-southwest1",
            "europe-west1",
            "europe-west2",
            "europe-west3",
            "europe-west4",
            "europe-west8",
            "europe-west9",
            "me-west1",
            "southamerica-east1",
            "us-central1",
            "us-east1",
            "us-east4",
            "us-south1",
            "us-west1",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<LabeledRegion>;

interface RegionsPerPlan {
  business?:
    | {
        label?: string | null;
        value?:
          | "asia-east1"
          | "asia-northeast1"
          | "asia-northeast2"
          | "asia-south1"
          | "asia-southeast1"
          | "australia-southeast1"
          | "europe-north1"
          | "europe-southwest1"
          | "europe-west1"
          | "europe-west2"
          | "europe-west3"
          | "europe-west4"
          | "europe-west8"
          | "europe-west9"
          | "me-west1"
          | "southamerica-east1"
          | "us-central1"
          | "us-east1"
          | "us-east4"
          | "us-south1"
          | "us-west1"
          | (string & {})
          | null;
      }[]
    | null;
  enterprise?:
    | {
        label?: string | null;
        value?:
          | "asia-east1"
          | "asia-northeast1"
          | "asia-northeast2"
          | "asia-south1"
          | "asia-southeast1"
          | "australia-southeast1"
          | "europe-north1"
          | "europe-southwest1"
          | "europe-west1"
          | "europe-west2"
          | "europe-west3"
          | "europe-west4"
          | "europe-west8"
          | "europe-west9"
          | "me-west1"
          | "southamerica-east1"
          | "us-central1"
          | "us-east1"
          | "us-east4"
          | "us-south1"
          | "us-west1"
          | (string & {})
          | null;
      }[]
    | null;
  free?:
    | {
        label?: string | null;
        value?:
          | "asia-east1"
          | "asia-northeast1"
          | "asia-northeast2"
          | "asia-south1"
          | "asia-southeast1"
          | "australia-southeast1"
          | "europe-north1"
          | "europe-southwest1"
          | "europe-west1"
          | "europe-west2"
          | "europe-west3"
          | "europe-west4"
          | "europe-west8"
          | "europe-west9"
          | "me-west1"
          | "southamerica-east1"
          | "us-central1"
          | "us-east1"
          | "us-east4"
          | "us-south1"
          | "us-west1"
          | (string & {})
          | null;
      }[]
    | null;
  pro?:
    | {
        label?: string | null;
        value?:
          | "asia-east1"
          | "asia-northeast1"
          | "asia-northeast2"
          | "asia-south1"
          | "asia-southeast1"
          | "australia-southeast1"
          | "europe-north1"
          | "europe-southwest1"
          | "europe-west1"
          | "europe-west2"
          | "europe-west3"
          | "europe-west4"
          | "europe-west8"
          | "europe-west9"
          | "me-west1"
          | "southamerica-east1"
          | "us-central1"
          | "us-east1"
          | "us-east4"
          | "us-south1"
          | "us-west1"
          | (string & {})
          | null;
      }[]
    | null;
}
const RegionsPerPlan = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    business: Schema.optional(
      Schema.Union([Schema.Array(LabeledRegion), Schema.Null]),
    ),
    enterprise: Schema.optional(
      Schema.Union([Schema.Array(LabeledRegion), Schema.Null]),
    ),
    free: Schema.optional(
      Schema.Union([Schema.Array(LabeledRegion), Schema.Null]),
    ),
    pro: Schema.optional(
      Schema.Union([Schema.Array(LabeledRegion), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<RegionsPerPlan>;

interface Error2 {
  /** The error code of the Lighthouse result. */
  code?:
    | "NOT_REACHABLE"
    | "DNS_FAILURE"
    | "NOT_HTML"
    | "LIGHTHOUSE_TIMEOUT"
    | "UNKNOWN"
    | (string & {})
    | null;
  /** Detailed error message. */
  detail?: string | null;
  /** The final URL displayed to the user. */
  finalDisplayedUrl?: string | null;
}
const Error2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    code: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "NOT_REACHABLE",
            "DNS_FAILURE",
            "NOT_HTML",
            "LIGHTHOUSE_TIMEOUT",
            "UNKNOWN",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    detail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    finalDisplayedUrl: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Error2>;

interface LighthouseReport {
  /** Cumulative Layout Shift. */
  cls?: number | null;
  /** The type of device. */
  deviceType?: "DESKTOP" | "MOBILE" | (string & {}) | null;
  error?: {
    code?:
      | "NOT_REACHABLE"
      | "DNS_FAILURE"
      | "NOT_HTML"
      | "LIGHTHOUSE_TIMEOUT"
      | "UNKNOWN"
      | (string & {})
      | null;
    detail?: string | null;
    finalDisplayedUrl?: string | null;
  } | null;
  /** First Contentful Paint. */
  fcp?: number | null;
  /** The URL to the full Lighthouse JSON report. */
  jsonReportUrl?: string | null;
  /** Largest Contentful Paint. */
  lcp?: number | null;
  /** The Lighthouse performance score. */
  performanceScore?: number | null;
  /** Speed Index. */
  si?: number | null;
  /** The state of the Lighthouse report. */
  state?: "RUNNING" | "COMPLETE" | "FAILED" | (string & {}) | null;
  /** Total Blocking Time. */
  tbt?: number | null;
  /** Time To First Byte. */
  ttfb?: number | null;
  /** Time To Interactive. */
  tti?: number | null;
}
const LighthouseReport = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cls: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    deviceType: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["DESKTOP", "MOBILE"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    error: Schema.optional(Schema.Union([Error2, Schema.Null])),
    fcp: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    jsonReportUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    lcp: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    performanceScore: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    si: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    state: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["RUNNING", "COMPLETE", "FAILED"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    tbt: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    ttfb: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    tti: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<LighthouseReport>;

interface Test {
  /** UUID. */
  id?: string | null;
  date?: string | null;
  /** The Lighthouse report. */
  desktopReport?: {
    cls?: number | null;
    deviceType?: "DESKTOP" | "MOBILE" | (string & {}) | null;
    error?: {
      code?:
        | "NOT_REACHABLE"
        | "DNS_FAILURE"
        | "NOT_HTML"
        | "LIGHTHOUSE_TIMEOUT"
        | "UNKNOWN"
        | (string & {})
        | null;
      detail?: string | null;
      finalDisplayedUrl?: string | null;
    } | null;
    fcp?: number | null;
    jsonReportUrl?: string | null;
    lcp?: number | null;
    performanceScore?: number | null;
    si?: number | null;
    state?: "RUNNING" | "COMPLETE" | "FAILED" | (string & {}) | null;
    tbt?: number | null;
    ttfb?: number | null;
    tti?: number | null;
  } | null;
  /** The Lighthouse report. */
  mobileReport?: {
    cls?: number | null;
    deviceType?: "DESKTOP" | "MOBILE" | (string & {}) | null;
    error?: {
      code?:
        | "NOT_REACHABLE"
        | "DNS_FAILURE"
        | "NOT_HTML"
        | "LIGHTHOUSE_TIMEOUT"
        | "UNKNOWN"
        | (string & {})
        | null;
      detail?: string | null;
      finalDisplayedUrl?: string | null;
    } | null;
    fcp?: number | null;
    jsonReportUrl?: string | null;
    lcp?: number | null;
    performanceScore?: number | null;
    si?: number | null;
    state?: "RUNNING" | "COMPLETE" | "FAILED" | (string & {}) | null;
    tbt?: number | null;
    ttfb?: number | null;
    tti?: number | null;
  } | null;
  /** A test region with a label. */
  region?: {
    label?: string | null;
    value?:
      | "asia-east1"
      | "asia-northeast1"
      | "asia-northeast2"
      | "asia-south1"
      | "asia-southeast1"
      | "australia-southeast1"
      | "europe-north1"
      | "europe-southwest1"
      | "europe-west1"
      | "europe-west2"
      | "europe-west3"
      | "europe-west4"
      | "europe-west8"
      | "europe-west9"
      | "me-west1"
      | "southamerica-east1"
      | "us-central1"
      | "us-east1"
      | "us-east4"
      | "us-south1"
      | "us-west1"
      | (string & {})
      | null;
  } | null;
  /** The frequency of the test. */
  scheduleFrequency?: "DAILY" | "WEEKLY" | (string & {}) | null;
  /** A URL. */
  url?: string | null;
}
const Test = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    date: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    desktopReport: Schema.optional(
      Schema.Union([LighthouseReport, Schema.Null]),
    ),
    mobileReport: Schema.optional(
      Schema.Union([LighthouseReport, Schema.Null]),
    ),
    region: Schema.optional(Schema.Union([LabeledRegion, Schema.Null])),
    scheduleFrequency: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["DAILY", "WEEKLY"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Test>;

interface ListPagesResponseResult {
  /** A test region with a label. */
  region?: {
    label?: string | null;
    value?:
      | "asia-east1"
      | "asia-northeast1"
      | "asia-northeast2"
      | "asia-south1"
      | "asia-southeast1"
      | "australia-southeast1"
      | "europe-north1"
      | "europe-southwest1"
      | "europe-west1"
      | "europe-west2"
      | "europe-west3"
      | "europe-west4"
      | "europe-west8"
      | "europe-west9"
      | "me-west1"
      | "southamerica-east1"
      | "us-central1"
      | "us-east1"
      | "us-east4"
      | "us-south1"
      | "us-west1"
      | (string & {})
      | null;
  } | null;
  /** The frequency of the test. */
  scheduleFrequency?: "DAILY" | "WEEKLY" | (string & {}) | null;
  tests?:
    | {
        id?: string | null;
        date?: string | null;
        desktopReport?: {
          cls?: number | null;
          deviceType?: "DESKTOP" | "MOBILE" | (string & {}) | null;
          error?: {
            code?:
              | "NOT_REACHABLE"
              | "DNS_FAILURE"
              | "NOT_HTML"
              | "LIGHTHOUSE_TIMEOUT"
              | "UNKNOWN"
              | (string & {})
              | null;
            detail?: string | null;
            finalDisplayedUrl?: string | null;
          } | null;
          fcp?: number | null;
          jsonReportUrl?: string | null;
          lcp?: number | null;
          performanceScore?: number | null;
          si?: number | null;
          state?: "RUNNING" | "COMPLETE" | "FAILED" | (string & {}) | null;
          tbt?: number | null;
          ttfb?: number | null;
          tti?: number | null;
        } | null;
        mobileReport?: {
          cls?: number | null;
          deviceType?: "DESKTOP" | "MOBILE" | (string & {}) | null;
          error?: {
            code?:
              | "NOT_REACHABLE"
              | "DNS_FAILURE"
              | "NOT_HTML"
              | "LIGHTHOUSE_TIMEOUT"
              | "UNKNOWN"
              | (string & {})
              | null;
            detail?: string | null;
            finalDisplayedUrl?: string | null;
          } | null;
          fcp?: number | null;
          jsonReportUrl?: string | null;
          lcp?: number | null;
          performanceScore?: number | null;
          si?: number | null;
          state?: "RUNNING" | "COMPLETE" | "FAILED" | (string & {}) | null;
          tbt?: number | null;
          ttfb?: number | null;
          tti?: number | null;
        } | null;
        region?: {
          label?: string | null;
          value?:
            | "asia-east1"
            | "asia-northeast1"
            | "asia-northeast2"
            | "asia-south1"
            | "asia-southeast1"
            | "australia-southeast1"
            | "europe-north1"
            | "europe-southwest1"
            | "europe-west1"
            | "europe-west2"
            | "europe-west3"
            | "europe-west4"
            | "europe-west8"
            | "europe-west9"
            | "me-west1"
            | "southamerica-east1"
            | "us-central1"
            | "us-east1"
            | "us-east4"
            | "us-south1"
            | "us-west1"
            | (string & {})
            | null;
        } | null;
        scheduleFrequency?: "DAILY" | "WEEKLY" | (string & {}) | null;
        url?: string | null;
      }[]
    | null;
  /** A URL. */
  url?: string | null;
}
const ListPagesResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    region: Schema.optional(Schema.Union([LabeledRegion, Schema.Null])),
    scheduleFrequency: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["DAILY", "WEEKLY"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    tests: Schema.optional(Schema.Union([Schema.Array(Test), Schema.Null])),
    url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ListPagesResponseResult>;

interface ListPageTestsResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListPageTestsResponseResultInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      totalCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        count: "count",
        page: "page",
        perPage: "per_page",
        totalCount: "total_count",
      }),
    ),
  ) as unknown as Schema.Codec<ListPageTestsResponseResultInfo>;

interface Schedule {
  /** The frequency of the test. */
  frequency?: "DAILY" | "WEEKLY" | (string & {}) | null;
  /** A test region. */
  region?:
    | "asia-east1"
    | "asia-northeast1"
    | "asia-northeast2"
    | "asia-south1"
    | "asia-southeast1"
    | "australia-southeast1"
    | "europe-north1"
    | "europe-southwest1"
    | "europe-west1"
    | "europe-west2"
    | "europe-west3"
    | "europe-west4"
    | "europe-west8"
    | "europe-west9"
    | "me-west1"
    | "southamerica-east1"
    | "us-central1"
    | "us-east1"
    | "us-east4"
    | "us-south1"
    | "us-west1"
    | (string & {})
    | null;
  /** A URL. */
  url?: string | null;
}
const Schedule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    frequency: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["DAILY", "WEEKLY"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    region: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "asia-east1",
            "asia-northeast1",
            "asia-northeast2",
            "asia-south1",
            "asia-southeast1",
            "australia-southeast1",
            "europe-north1",
            "europe-southwest1",
            "europe-west1",
            "europe-west2",
            "europe-west3",
            "europe-west4",
            "europe-west8",
            "europe-west9",
            "me-west1",
            "southamerica-east1",
            "us-central1",
            "us-east1",
            "us-east4",
            "us-south1",
            "us-west1",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Schedule>;

// =============================================================================
// Availability
// =============================================================================

export interface ListAvailabilitiesRequest {
  /** Identifier. */
  zoneId: string;
}

export const ListAvailabilitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/speed_api/availabilities",
      }),
    ),
  ) as unknown as Schema.Codec<ListAvailabilitiesRequest>;

export interface ListAvailabilitiesResponse {
  quota?: {
    plan?: string | null;
    quotasPerPlan?: {
      value?: {
        business?: number | null;
        enterprise?: number | null;
        free?: number | null;
        pro?: number | null;
      } | null;
    } | null;
    remainingSchedules?: number | null;
    remainingTests?: number | null;
    scheduleQuotasPerPlan?: {
      value?: {
        business?: number | null;
        enterprise?: number | null;
        free?: number | null;
        pro?: number | null;
      } | null;
    } | null;
  } | null;
  regions?:
    | {
        label?: string | null;
        value?:
          | "asia-east1"
          | "asia-northeast1"
          | "asia-northeast2"
          | "asia-south1"
          | "asia-southeast1"
          | "australia-southeast1"
          | "europe-north1"
          | "europe-southwest1"
          | "europe-west1"
          | "europe-west2"
          | "europe-west3"
          | "europe-west4"
          | "europe-west8"
          | "europe-west9"
          | "me-west1"
          | "southamerica-east1"
          | "us-central1"
          | "us-east1"
          | "us-east4"
          | "us-south1"
          | "us-west1"
          | (string & {})
          | null;
      }[]
    | null;
  /** Available regions. */
  regionsPerPlan?: {
    business?:
      | {
          label?: string | null;
          value?:
            | "asia-east1"
            | "asia-northeast1"
            | "asia-northeast2"
            | "asia-south1"
            | "asia-southeast1"
            | "australia-southeast1"
            | "europe-north1"
            | "europe-southwest1"
            | "europe-west1"
            | "europe-west2"
            | "europe-west3"
            | "europe-west4"
            | "europe-west8"
            | "europe-west9"
            | "me-west1"
            | "southamerica-east1"
            | "us-central1"
            | "us-east1"
            | "us-east4"
            | "us-south1"
            | "us-west1"
            | (string & {})
            | null;
        }[]
      | null;
    enterprise?:
      | {
          label?: string | null;
          value?:
            | "asia-east1"
            | "asia-northeast1"
            | "asia-northeast2"
            | "asia-south1"
            | "asia-southeast1"
            | "australia-southeast1"
            | "europe-north1"
            | "europe-southwest1"
            | "europe-west1"
            | "europe-west2"
            | "europe-west3"
            | "europe-west4"
            | "europe-west8"
            | "europe-west9"
            | "me-west1"
            | "southamerica-east1"
            | "us-central1"
            | "us-east1"
            | "us-east4"
            | "us-south1"
            | "us-west1"
            | (string & {})
            | null;
        }[]
      | null;
    free?:
      | {
          label?: string | null;
          value?:
            | "asia-east1"
            | "asia-northeast1"
            | "asia-northeast2"
            | "asia-south1"
            | "asia-southeast1"
            | "australia-southeast1"
            | "europe-north1"
            | "europe-southwest1"
            | "europe-west1"
            | "europe-west2"
            | "europe-west3"
            | "europe-west4"
            | "europe-west8"
            | "europe-west9"
            | "me-west1"
            | "southamerica-east1"
            | "us-central1"
            | "us-east1"
            | "us-east4"
            | "us-south1"
            | "us-west1"
            | (string & {})
            | null;
        }[]
      | null;
    pro?:
      | {
          label?: string | null;
          value?:
            | "asia-east1"
            | "asia-northeast1"
            | "asia-northeast2"
            | "asia-south1"
            | "asia-southeast1"
            | "australia-southeast1"
            | "europe-north1"
            | "europe-southwest1"
            | "europe-west1"
            | "europe-west2"
            | "europe-west3"
            | "europe-west4"
            | "europe-west8"
            | "europe-west9"
            | "me-west1"
            | "southamerica-east1"
            | "us-central1"
            | "us-east1"
            | "us-east4"
            | "us-south1"
            | "us-west1"
            | (string & {})
            | null;
        }[]
      | null;
  } | null;
}

export const ListAvailabilitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      quota: Schema.optional(Schema.Union([Quota, Schema.Null])),
      regions: Schema.optional(
        Schema.Union([Schema.Array(LabeledRegion), Schema.Null]),
      ),
      regionsPerPlan: Schema.optional(
        Schema.Union([RegionsPerPlan, Schema.Null]),
      ),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ListAvailabilitiesResponse>;

export type ListAvailabilitiesError = DefaultErrors;

export const listAvailabilities: API.OperationMethod<
  ListAvailabilitiesRequest,
  ListAvailabilitiesResponse,
  ListAvailabilitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAvailabilitiesRequest,
  output: ListAvailabilitiesResponse,
  errors: [],
}));

// =============================================================================
// Page
// =============================================================================

export interface ListPagesRequest {
  /** Identifier. */
  zoneId: string;
}

export const ListPagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/speed_api/pages" })),
) as unknown as Schema.Codec<ListPagesRequest>;

export interface ListPagesResponse {
  result: {
    region?: {
      label?: string | null;
      value?:
        | "asia-east1"
        | "asia-northeast1"
        | "asia-northeast2"
        | "asia-south1"
        | "asia-southeast1"
        | "australia-southeast1"
        | "europe-north1"
        | "europe-southwest1"
        | "europe-west1"
        | "europe-west2"
        | "europe-west3"
        | "europe-west4"
        | "europe-west8"
        | "europe-west9"
        | "me-west1"
        | "southamerica-east1"
        | "us-central1"
        | "us-east1"
        | "us-east4"
        | "us-south1"
        | "us-west1"
        | (string & {})
        | null;
    } | null;
    scheduleFrequency?: "DAILY" | "WEEKLY" | (string & {}) | null;
    tests?:
      | {
          id?: string | null;
          date?: string | null;
          desktopReport?: {
            cls?: number | null;
            deviceType?: "DESKTOP" | "MOBILE" | (string & {}) | null;
            error?: {
              code?:
                | "NOT_REACHABLE"
                | "DNS_FAILURE"
                | "NOT_HTML"
                | "LIGHTHOUSE_TIMEOUT"
                | "UNKNOWN"
                | (string & {})
                | null;
              detail?: string | null;
              finalDisplayedUrl?: string | null;
            } | null;
            fcp?: number | null;
            jsonReportUrl?: string | null;
            lcp?: number | null;
            performanceScore?: number | null;
            si?: number | null;
            state?: "RUNNING" | "COMPLETE" | "FAILED" | (string & {}) | null;
            tbt?: number | null;
            ttfb?: number | null;
            tti?: number | null;
          } | null;
          mobileReport?: {
            cls?: number | null;
            deviceType?: "DESKTOP" | "MOBILE" | (string & {}) | null;
            error?: {
              code?:
                | "NOT_REACHABLE"
                | "DNS_FAILURE"
                | "NOT_HTML"
                | "LIGHTHOUSE_TIMEOUT"
                | "UNKNOWN"
                | (string & {})
                | null;
              detail?: string | null;
              finalDisplayedUrl?: string | null;
            } | null;
            fcp?: number | null;
            jsonReportUrl?: string | null;
            lcp?: number | null;
            performanceScore?: number | null;
            si?: number | null;
            state?: "RUNNING" | "COMPLETE" | "FAILED" | (string & {}) | null;
            tbt?: number | null;
            ttfb?: number | null;
            tti?: number | null;
          } | null;
          region?: {
            label?: string | null;
            value?:
              | "asia-east1"
              | "asia-northeast1"
              | "asia-northeast2"
              | "asia-south1"
              | "asia-southeast1"
              | "australia-southeast1"
              | "europe-north1"
              | "europe-southwest1"
              | "europe-west1"
              | "europe-west2"
              | "europe-west3"
              | "europe-west4"
              | "europe-west8"
              | "europe-west9"
              | "me-west1"
              | "southamerica-east1"
              | "us-central1"
              | "us-east1"
              | "us-east4"
              | "us-south1"
              | "us-west1"
              | (string & {})
              | null;
          } | null;
          scheduleFrequency?: "DAILY" | "WEEKLY" | (string & {}) | null;
          url?: string | null;
        }[]
      | null;
    url?: string | null;
  }[];
}

export const ListPagesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListPagesResponseResult),
    }),
) as unknown as Schema.Codec<ListPagesResponse>;

export type ListPagesError = DefaultErrors;

export const listPages: API.PaginatedOperationMethod<
  ListPagesRequest,
  ListPagesResponse,
  ListPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPagesRequest,
  output: ListPagesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface TrendPageRequest {
  url: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: The type of device. */
  deviceType: "DESKTOP" | "MOBILE" | (string & {});
  /** Query param: A comma-separated list of metrics to include in the results. */
  metrics: string;
  /** Query param: A test region. */
  region:
    | "asia-east1"
    | "asia-northeast1"
    | "asia-northeast2"
    | "asia-south1"
    | "asia-southeast1"
    | "australia-southeast1"
    | "europe-north1"
    | "europe-southwest1"
    | "europe-west1"
    | "europe-west2"
    | "europe-west3"
    | "europe-west4"
    | "europe-west8"
    | "europe-west9"
    | "me-west1"
    | "southamerica-east1"
    | "us-central1"
    | "us-east1"
    | "us-east4"
    | "us-south1"
    | "us-west1"
    | (string & {});
  /** Query param */
  start: string;
  /** Query param: The timezone of the start and end timestamps. */
  tz: string;
  /** Query param */
  end?: string;
}

export const TrendPageRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    url: Schema.String.pipe(T.HttpPath("url")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    deviceType: Schema.Union([
      Schema.Literals(["DESKTOP", "MOBILE"]),
      Schema.String,
    ]).pipe(T.HttpQuery("deviceType")),
    metrics: Schema.String.pipe(T.HttpQuery("metrics")),
    region: Schema.Union([
      Schema.Literals([
        "asia-east1",
        "asia-northeast1",
        "asia-northeast2",
        "asia-south1",
        "asia-southeast1",
        "australia-southeast1",
        "europe-north1",
        "europe-southwest1",
        "europe-west1",
        "europe-west2",
        "europe-west3",
        "europe-west4",
        "europe-west8",
        "europe-west9",
        "me-west1",
        "southamerica-east1",
        "us-central1",
        "us-east1",
        "us-east4",
        "us-south1",
        "us-west1",
      ]),
      Schema.String,
    ]).pipe(T.HttpQuery("region")),
    start: Schema.String.pipe(T.HttpQuery("start")),
    tz: Schema.String.pipe(T.HttpQuery("tz")),
    end: Schema.optional(Schema.String).pipe(T.HttpQuery("end")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/speed_api/pages/{url}/trend",
    }),
  ),
) as unknown as Schema.Codec<TrendPageRequest>;

export interface TrendPageResponse {
  /** Cumulative Layout Shift trend. */
  cls?: (number | null)[] | null;
  /** First Contentful Paint trend. */
  fcp?: (number | null)[] | null;
  /** Largest Contentful Paint trend. */
  lcp?: (number | null)[] | null;
  /** The Lighthouse score trend. */
  performanceScore?: (number | null)[] | null;
  /** Speed Index trend. */
  si?: (number | null)[] | null;
  /** Total Blocking Time trend. */
  tbt?: (number | null)[] | null;
  /** Time To First Byte trend. */
  ttfb?: (number | null)[] | null;
  /** Time To Interactive trend. */
  tti?: (number | null)[] | null;
}

export const TrendPageResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      cls: Schema.optional(
        Schema.Union([
          Schema.Array(Schema.Union([Schema.Number, Schema.Null])),
          Schema.Null,
        ]),
      ),
      fcp: Schema.optional(
        Schema.Union([
          Schema.Array(Schema.Union([Schema.Number, Schema.Null])),
          Schema.Null,
        ]),
      ),
      lcp: Schema.optional(
        Schema.Union([
          Schema.Array(Schema.Union([Schema.Number, Schema.Null])),
          Schema.Null,
        ]),
      ),
      performanceScore: Schema.optional(
        Schema.Union([
          Schema.Array(Schema.Union([Schema.Number, Schema.Null])),
          Schema.Null,
        ]),
      ),
      si: Schema.optional(
        Schema.Union([
          Schema.Array(Schema.Union([Schema.Number, Schema.Null])),
          Schema.Null,
        ]),
      ),
      tbt: Schema.optional(
        Schema.Union([
          Schema.Array(Schema.Union([Schema.Number, Schema.Null])),
          Schema.Null,
        ]),
      ),
      ttfb: Schema.optional(
        Schema.Union([
          Schema.Array(Schema.Union([Schema.Number, Schema.Null])),
          Schema.Null,
        ]),
      ),
      tti: Schema.optional(
        Schema.Union([
          Schema.Array(Schema.Union([Schema.Number, Schema.Null])),
          Schema.Null,
        ]),
      ),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<TrendPageResponse>;

export type TrendPageError = DefaultErrors;

export const trendPage: API.OperationMethod<
  TrendPageRequest,
  TrendPageResponse,
  TrendPageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TrendPageRequest,
  output: TrendPageResponse,
  errors: [],
}));

// =============================================================================
// PageTest
// =============================================================================

export interface GetPageTestRequest {
  url: string;
  testId: string;
  /** Identifier. */
  zoneId: string;
}

export const GetPageTestRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      url: Schema.String.pipe(T.HttpPath("url")),
      testId: Schema.String.pipe(T.HttpPath("testId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/speed_api/pages/{url}/tests/{testId}",
      }),
    ),
) as unknown as Schema.Codec<GetPageTestRequest>;

export interface GetPageTestResponse {
  /** UUID. */
  id?: string | null;
  date?: string | null;
  /** The Lighthouse report. */
  desktopReport?: {
    cls?: number | null;
    deviceType?: "DESKTOP" | "MOBILE" | (string & {}) | null;
    error?: {
      code?:
        | "NOT_REACHABLE"
        | "DNS_FAILURE"
        | "NOT_HTML"
        | "LIGHTHOUSE_TIMEOUT"
        | "UNKNOWN"
        | (string & {})
        | null;
      detail?: string | null;
      finalDisplayedUrl?: string | null;
    } | null;
    fcp?: number | null;
    jsonReportUrl?: string | null;
    lcp?: number | null;
    performanceScore?: number | null;
    si?: number | null;
    state?: "RUNNING" | "COMPLETE" | "FAILED" | (string & {}) | null;
    tbt?: number | null;
    ttfb?: number | null;
    tti?: number | null;
  } | null;
  /** The Lighthouse report. */
  mobileReport?: {
    cls?: number | null;
    deviceType?: "DESKTOP" | "MOBILE" | (string & {}) | null;
    error?: {
      code?:
        | "NOT_REACHABLE"
        | "DNS_FAILURE"
        | "NOT_HTML"
        | "LIGHTHOUSE_TIMEOUT"
        | "UNKNOWN"
        | (string & {})
        | null;
      detail?: string | null;
      finalDisplayedUrl?: string | null;
    } | null;
    fcp?: number | null;
    jsonReportUrl?: string | null;
    lcp?: number | null;
    performanceScore?: number | null;
    si?: number | null;
    state?: "RUNNING" | "COMPLETE" | "FAILED" | (string & {}) | null;
    tbt?: number | null;
    ttfb?: number | null;
    tti?: number | null;
  } | null;
  /** A test region with a label. */
  region?: {
    label?: string | null;
    value?:
      | "asia-east1"
      | "asia-northeast1"
      | "asia-northeast2"
      | "asia-south1"
      | "asia-southeast1"
      | "australia-southeast1"
      | "europe-north1"
      | "europe-southwest1"
      | "europe-west1"
      | "europe-west2"
      | "europe-west3"
      | "europe-west4"
      | "europe-west8"
      | "europe-west9"
      | "me-west1"
      | "southamerica-east1"
      | "us-central1"
      | "us-east1"
      | "us-east4"
      | "us-south1"
      | "us-west1"
      | (string & {})
      | null;
  } | null;
  /** The frequency of the test. */
  scheduleFrequency?: "DAILY" | "WEEKLY" | (string & {}) | null;
  /** A URL. */
  url?: string | null;
}

export const GetPageTestResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      date: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      desktopReport: Schema.optional(
        Schema.Union([LighthouseReport, Schema.Null]),
      ),
      mobileReport: Schema.optional(
        Schema.Union([LighthouseReport, Schema.Null]),
      ),
      region: Schema.optional(Schema.Union([LabeledRegion, Schema.Null])),
      scheduleFrequency: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["DAILY", "WEEKLY"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetPageTestResponse>;

export type GetPageTestError = DefaultErrors;

export const getPageTest: API.OperationMethod<
  GetPageTestRequest,
  GetPageTestResponse,
  GetPageTestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPageTestRequest,
  output: GetPageTestResponse,
  errors: [],
}));

export interface ListPageTestsRequest {
  url: string;
  /** Path param: Identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: A test region. */
  region?:
    | "asia-east1"
    | "asia-northeast1"
    | "asia-northeast2"
    | "asia-south1"
    | "asia-southeast1"
    | "australia-southeast1"
    | "europe-north1"
    | "europe-southwest1"
    | "europe-west1"
    | "europe-west2"
    | "europe-west3"
    | "europe-west4"
    | "europe-west8"
    | "europe-west9"
    | "me-west1"
    | "southamerica-east1"
    | "us-central1"
    | "us-east1"
    | "us-east4"
    | "us-south1"
    | "us-west1"
    | (string & {});
}

export const ListPageTestsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      url: Schema.String.pipe(T.HttpPath("url")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      region: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "asia-east1",
            "asia-northeast1",
            "asia-northeast2",
            "asia-south1",
            "asia-southeast1",
            "australia-southeast1",
            "europe-north1",
            "europe-southwest1",
            "europe-west1",
            "europe-west2",
            "europe-west3",
            "europe-west4",
            "europe-west8",
            "europe-west9",
            "me-west1",
            "southamerica-east1",
            "us-central1",
            "us-east1",
            "us-east4",
            "us-south1",
            "us-west1",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("region")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/speed_api/pages/{url}/tests",
      }),
    ),
) as unknown as Schema.Codec<ListPageTestsRequest>;

export interface ListPageTestsResponse {
  result: {
    id?: string | null;
    date?: string | null;
    desktopReport?: {
      cls?: number | null;
      deviceType?: "DESKTOP" | "MOBILE" | (string & {}) | null;
      error?: {
        code?:
          | "NOT_REACHABLE"
          | "DNS_FAILURE"
          | "NOT_HTML"
          | "LIGHTHOUSE_TIMEOUT"
          | "UNKNOWN"
          | (string & {})
          | null;
        detail?: string | null;
        finalDisplayedUrl?: string | null;
      } | null;
      fcp?: number | null;
      jsonReportUrl?: string | null;
      lcp?: number | null;
      performanceScore?: number | null;
      si?: number | null;
      state?: "RUNNING" | "COMPLETE" | "FAILED" | (string & {}) | null;
      tbt?: number | null;
      ttfb?: number | null;
      tti?: number | null;
    } | null;
    mobileReport?: {
      cls?: number | null;
      deviceType?: "DESKTOP" | "MOBILE" | (string & {}) | null;
      error?: {
        code?:
          | "NOT_REACHABLE"
          | "DNS_FAILURE"
          | "NOT_HTML"
          | "LIGHTHOUSE_TIMEOUT"
          | "UNKNOWN"
          | (string & {})
          | null;
        detail?: string | null;
        finalDisplayedUrl?: string | null;
      } | null;
      fcp?: number | null;
      jsonReportUrl?: string | null;
      lcp?: number | null;
      performanceScore?: number | null;
      si?: number | null;
      state?: "RUNNING" | "COMPLETE" | "FAILED" | (string & {}) | null;
      tbt?: number | null;
      ttfb?: number | null;
      tti?: number | null;
    } | null;
    region?: {
      label?: string | null;
      value?:
        | "asia-east1"
        | "asia-northeast1"
        | "asia-northeast2"
        | "asia-south1"
        | "asia-southeast1"
        | "australia-southeast1"
        | "europe-north1"
        | "europe-southwest1"
        | "europe-west1"
        | "europe-west2"
        | "europe-west3"
        | "europe-west4"
        | "europe-west8"
        | "europe-west9"
        | "me-west1"
        | "southamerica-east1"
        | "us-central1"
        | "us-east1"
        | "us-east4"
        | "us-south1"
        | "us-west1"
        | (string & {})
        | null;
    } | null;
    scheduleFrequency?: "DAILY" | "WEEKLY" | (string & {}) | null;
    url?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListPageTestsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(Test),
      resultInfo: Schema.optional(
        Schema.Union([ListPageTestsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListPageTestsResponse>;

export type ListPageTestsError = DefaultErrors;

export const listPageTests: API.PaginatedOperationMethod<
  ListPageTestsRequest,
  ListPageTestsResponse,
  ListPageTestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPageTestsRequest,
  output: ListPageTestsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreatePageTestRequest {
  url: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: A test region. */
  region?:
    | "asia-east1"
    | "asia-northeast1"
    | "asia-northeast2"
    | "asia-south1"
    | "asia-southeast1"
    | "australia-southeast1"
    | "europe-north1"
    | "europe-southwest1"
    | "europe-west1"
    | "europe-west2"
    | "europe-west3"
    | "europe-west4"
    | "europe-west8"
    | "europe-west9"
    | "me-west1"
    | "southamerica-east1"
    | "us-central1"
    | "us-east1"
    | "us-east4"
    | "us-south1"
    | "us-west1"
    | (string & {});
}

export const CreatePageTestRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      url: Schema.String.pipe(T.HttpPath("url")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      region: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "asia-east1",
            "asia-northeast1",
            "asia-northeast2",
            "asia-south1",
            "asia-southeast1",
            "australia-southeast1",
            "europe-north1",
            "europe-southwest1",
            "europe-west1",
            "europe-west2",
            "europe-west3",
            "europe-west4",
            "europe-west8",
            "europe-west9",
            "me-west1",
            "southamerica-east1",
            "us-central1",
            "us-east1",
            "us-east4",
            "us-south1",
            "us-west1",
          ]),
          Schema.String,
        ]),
      ),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/speed_api/pages/{url}/tests",
      }),
    ),
) as unknown as Schema.Codec<CreatePageTestRequest>;

export interface CreatePageTestResponse {
  /** UUID. */
  id?: string | null;
  date?: string | null;
  /** The Lighthouse report. */
  desktopReport?: {
    cls?: number | null;
    deviceType?: "DESKTOP" | "MOBILE" | (string & {}) | null;
    error?: {
      code?:
        | "NOT_REACHABLE"
        | "DNS_FAILURE"
        | "NOT_HTML"
        | "LIGHTHOUSE_TIMEOUT"
        | "UNKNOWN"
        | (string & {})
        | null;
      detail?: string | null;
      finalDisplayedUrl?: string | null;
    } | null;
    fcp?: number | null;
    jsonReportUrl?: string | null;
    lcp?: number | null;
    performanceScore?: number | null;
    si?: number | null;
    state?: "RUNNING" | "COMPLETE" | "FAILED" | (string & {}) | null;
    tbt?: number | null;
    ttfb?: number | null;
    tti?: number | null;
  } | null;
  /** The Lighthouse report. */
  mobileReport?: {
    cls?: number | null;
    deviceType?: "DESKTOP" | "MOBILE" | (string & {}) | null;
    error?: {
      code?:
        | "NOT_REACHABLE"
        | "DNS_FAILURE"
        | "NOT_HTML"
        | "LIGHTHOUSE_TIMEOUT"
        | "UNKNOWN"
        | (string & {})
        | null;
      detail?: string | null;
      finalDisplayedUrl?: string | null;
    } | null;
    fcp?: number | null;
    jsonReportUrl?: string | null;
    lcp?: number | null;
    performanceScore?: number | null;
    si?: number | null;
    state?: "RUNNING" | "COMPLETE" | "FAILED" | (string & {}) | null;
    tbt?: number | null;
    ttfb?: number | null;
    tti?: number | null;
  } | null;
  /** A test region with a label. */
  region?: {
    label?: string | null;
    value?:
      | "asia-east1"
      | "asia-northeast1"
      | "asia-northeast2"
      | "asia-south1"
      | "asia-southeast1"
      | "australia-southeast1"
      | "europe-north1"
      | "europe-southwest1"
      | "europe-west1"
      | "europe-west2"
      | "europe-west3"
      | "europe-west4"
      | "europe-west8"
      | "europe-west9"
      | "me-west1"
      | "southamerica-east1"
      | "us-central1"
      | "us-east1"
      | "us-east4"
      | "us-south1"
      | "us-west1"
      | (string & {})
      | null;
  } | null;
  /** The frequency of the test. */
  scheduleFrequency?: "DAILY" | "WEEKLY" | (string & {}) | null;
  /** A URL. */
  url?: string | null;
}

export const CreatePageTestResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      date: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      desktopReport: Schema.optional(
        Schema.Union([LighthouseReport, Schema.Null]),
      ),
      mobileReport: Schema.optional(
        Schema.Union([LighthouseReport, Schema.Null]),
      ),
      region: Schema.optional(Schema.Union([LabeledRegion, Schema.Null])),
      scheduleFrequency: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["DAILY", "WEEKLY"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreatePageTestResponse>;

export type CreatePageTestError = DefaultErrors;

export const createPageTest: API.OperationMethod<
  CreatePageTestRequest,
  CreatePageTestResponse,
  CreatePageTestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePageTestRequest,
  output: CreatePageTestResponse,
  errors: [],
}));

export interface DeletePageTestRequest {
  url: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: A test region. */
  region?:
    | "asia-east1"
    | "asia-northeast1"
    | "asia-northeast2"
    | "asia-south1"
    | "asia-southeast1"
    | "australia-southeast1"
    | "europe-north1"
    | "europe-southwest1"
    | "europe-west1"
    | "europe-west2"
    | "europe-west3"
    | "europe-west4"
    | "europe-west8"
    | "europe-west9"
    | "me-west1"
    | "southamerica-east1"
    | "us-central1"
    | "us-east1"
    | "us-east4"
    | "us-south1"
    | "us-west1"
    | (string & {});
}

export const DeletePageTestRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      url: Schema.String.pipe(T.HttpPath("url")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      region: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "asia-east1",
            "asia-northeast1",
            "asia-northeast2",
            "asia-south1",
            "asia-southeast1",
            "australia-southeast1",
            "europe-north1",
            "europe-southwest1",
            "europe-west1",
            "europe-west2",
            "europe-west3",
            "europe-west4",
            "europe-west8",
            "europe-west9",
            "me-west1",
            "southamerica-east1",
            "us-central1",
            "us-east1",
            "us-east4",
            "us-south1",
            "us-west1",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("region")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/speed_api/pages/{url}/tests",
      }),
    ),
) as unknown as Schema.Codec<DeletePageTestRequest>;

export interface DeletePageTestResponse {
  /** Number of items affected. */
  count?: number | null;
}

export const DeletePageTestResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeletePageTestResponse>;

export type DeletePageTestError = DefaultErrors;

export const deletePageTest: API.OperationMethod<
  DeletePageTestRequest,
  DeletePageTestResponse,
  DeletePageTestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePageTestRequest,
  output: DeletePageTestResponse,
  errors: [],
}));

// =============================================================================
// Schedule
// =============================================================================

export interface GetScheduleRequest {
  url: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: A test region. */
  region?:
    | "asia-east1"
    | "asia-northeast1"
    | "asia-northeast2"
    | "asia-south1"
    | "asia-southeast1"
    | "australia-southeast1"
    | "europe-north1"
    | "europe-southwest1"
    | "europe-west1"
    | "europe-west2"
    | "europe-west3"
    | "europe-west4"
    | "europe-west8"
    | "europe-west9"
    | "me-west1"
    | "southamerica-east1"
    | "us-central1"
    | "us-east1"
    | "us-east4"
    | "us-south1"
    | "us-west1"
    | (string & {});
}

export const GetScheduleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      url: Schema.String.pipe(T.HttpPath("url")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      region: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "asia-east1",
            "asia-northeast1",
            "asia-northeast2",
            "asia-south1",
            "asia-southeast1",
            "australia-southeast1",
            "europe-north1",
            "europe-southwest1",
            "europe-west1",
            "europe-west2",
            "europe-west3",
            "europe-west4",
            "europe-west8",
            "europe-west9",
            "me-west1",
            "southamerica-east1",
            "us-central1",
            "us-east1",
            "us-east4",
            "us-south1",
            "us-west1",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("region")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/speed_api/schedule/{url}",
      }),
    ),
) as unknown as Schema.Codec<GetScheduleRequest>;

export interface GetScheduleResponse {
  /** The frequency of the test. */
  frequency?: "DAILY" | "WEEKLY" | (string & {}) | null;
  /** A test region. */
  region?:
    | "asia-east1"
    | "asia-northeast1"
    | "asia-northeast2"
    | "asia-south1"
    | "asia-southeast1"
    | "australia-southeast1"
    | "europe-north1"
    | "europe-southwest1"
    | "europe-west1"
    | "europe-west2"
    | "europe-west3"
    | "europe-west4"
    | "europe-west8"
    | "europe-west9"
    | "me-west1"
    | "southamerica-east1"
    | "us-central1"
    | "us-east1"
    | "us-east4"
    | "us-south1"
    | "us-west1"
    | (string & {})
    | null;
  /** A URL. */
  url?: string | null;
}

export const GetScheduleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      frequency: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["DAILY", "WEEKLY"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      region: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "asia-east1",
              "asia-northeast1",
              "asia-northeast2",
              "asia-south1",
              "asia-southeast1",
              "australia-southeast1",
              "europe-north1",
              "europe-southwest1",
              "europe-west1",
              "europe-west2",
              "europe-west3",
              "europe-west4",
              "europe-west8",
              "europe-west9",
              "me-west1",
              "southamerica-east1",
              "us-central1",
              "us-east1",
              "us-east4",
              "us-south1",
              "us-west1",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetScheduleResponse>;

export type GetScheduleError = DefaultErrors | TestScheduleNotFound | Forbidden;

export const getSchedule: API.OperationMethod<
  GetScheduleRequest,
  GetScheduleResponse,
  GetScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetScheduleRequest,
  output: GetScheduleResponse,
  errors: [TestScheduleNotFound, Forbidden],
}));

export interface CreateScheduleRequest {
  url: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: The frequency of the scheduled test. Defaults to WEEKLY for free plans, DAILY for paid plans. */
  frequency?: "DAILY" | "WEEKLY" | (string & {});
  /** Query param: A test region. */
  region?:
    | "asia-east1"
    | "asia-northeast1"
    | "asia-northeast2"
    | "asia-south1"
    | "asia-southeast1"
    | "australia-southeast1"
    | "europe-north1"
    | "europe-southwest1"
    | "europe-west1"
    | "europe-west2"
    | "europe-west3"
    | "europe-west4"
    | "europe-west8"
    | "europe-west9"
    | "me-west1"
    | "southamerica-east1"
    | "us-central1"
    | "us-east1"
    | "us-east4"
    | "us-south1"
    | "us-west1"
    | (string & {});
}

export const CreateScheduleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      url: Schema.String.pipe(T.HttpPath("url")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      frequency: Schema.optional(
        Schema.Union([Schema.Literals(["DAILY", "WEEKLY"]), Schema.String]),
      ).pipe(T.HttpQuery("frequency")),
      region: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "asia-east1",
            "asia-northeast1",
            "asia-northeast2",
            "asia-south1",
            "asia-southeast1",
            "australia-southeast1",
            "europe-north1",
            "europe-southwest1",
            "europe-west1",
            "europe-west2",
            "europe-west3",
            "europe-west4",
            "europe-west8",
            "europe-west9",
            "me-west1",
            "southamerica-east1",
            "us-central1",
            "us-east1",
            "us-east4",
            "us-south1",
            "us-west1",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("region")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/speed_api/schedule/{url}",
      }),
    ),
) as unknown as Schema.Codec<CreateScheduleRequest>;

export interface CreateScheduleResponse {
  /** The test schedule. */
  schedule?: {
    frequency?: "DAILY" | "WEEKLY" | (string & {}) | null;
    region?:
      | "asia-east1"
      | "asia-northeast1"
      | "asia-northeast2"
      | "asia-south1"
      | "asia-southeast1"
      | "australia-southeast1"
      | "europe-north1"
      | "europe-southwest1"
      | "europe-west1"
      | "europe-west2"
      | "europe-west3"
      | "europe-west4"
      | "europe-west8"
      | "europe-west9"
      | "me-west1"
      | "southamerica-east1"
      | "us-central1"
      | "us-east1"
      | "us-east4"
      | "us-south1"
      | "us-west1"
      | (string & {})
      | null;
    url?: string | null;
  } | null;
  test?: {
    id?: string | null;
    date?: string | null;
    desktopReport?: {
      cls?: number | null;
      deviceType?: "DESKTOP" | "MOBILE" | (string & {}) | null;
      error?: {
        code?:
          | "NOT_REACHABLE"
          | "DNS_FAILURE"
          | "NOT_HTML"
          | "LIGHTHOUSE_TIMEOUT"
          | "UNKNOWN"
          | (string & {})
          | null;
        detail?: string | null;
        finalDisplayedUrl?: string | null;
      } | null;
      fcp?: number | null;
      jsonReportUrl?: string | null;
      lcp?: number | null;
      performanceScore?: number | null;
      si?: number | null;
      state?: "RUNNING" | "COMPLETE" | "FAILED" | (string & {}) | null;
      tbt?: number | null;
      ttfb?: number | null;
      tti?: number | null;
    } | null;
    mobileReport?: {
      cls?: number | null;
      deviceType?: "DESKTOP" | "MOBILE" | (string & {}) | null;
      error?: {
        code?:
          | "NOT_REACHABLE"
          | "DNS_FAILURE"
          | "NOT_HTML"
          | "LIGHTHOUSE_TIMEOUT"
          | "UNKNOWN"
          | (string & {})
          | null;
        detail?: string | null;
        finalDisplayedUrl?: string | null;
      } | null;
      fcp?: number | null;
      jsonReportUrl?: string | null;
      lcp?: number | null;
      performanceScore?: number | null;
      si?: number | null;
      state?: "RUNNING" | "COMPLETE" | "FAILED" | (string & {}) | null;
      tbt?: number | null;
      ttfb?: number | null;
      tti?: number | null;
    } | null;
    region?: {
      label?: string | null;
      value?:
        | "asia-east1"
        | "asia-northeast1"
        | "asia-northeast2"
        | "asia-south1"
        | "asia-southeast1"
        | "australia-southeast1"
        | "europe-north1"
        | "europe-southwest1"
        | "europe-west1"
        | "europe-west2"
        | "europe-west3"
        | "europe-west4"
        | "europe-west8"
        | "europe-west9"
        | "me-west1"
        | "southamerica-east1"
        | "us-central1"
        | "us-east1"
        | "us-east4"
        | "us-south1"
        | "us-west1"
        | (string & {})
        | null;
    } | null;
    scheduleFrequency?: "DAILY" | "WEEKLY" | (string & {}) | null;
    url?: string | null;
  } | null;
}

export const CreateScheduleResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      schedule: Schema.optional(Schema.Union([Schedule, Schema.Null])),
      test: Schema.optional(Schema.Union([Test, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateScheduleResponse>;

export type CreateScheduleError =
  | DefaultErrors
  | TestScheduleAlreadyExists
  | TestScheduleQuotaReached
  | Forbidden;

export const createSchedule: API.OperationMethod<
  CreateScheduleRequest,
  CreateScheduleResponse,
  CreateScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateScheduleRequest,
  output: CreateScheduleResponse,
  errors: [TestScheduleAlreadyExists, TestScheduleQuotaReached, Forbidden],
}));

export interface DeleteScheduleRequest {
  url: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: A test region. */
  region?:
    | "asia-east1"
    | "asia-northeast1"
    | "asia-northeast2"
    | "asia-south1"
    | "asia-southeast1"
    | "australia-southeast1"
    | "europe-north1"
    | "europe-southwest1"
    | "europe-west1"
    | "europe-west2"
    | "europe-west3"
    | "europe-west4"
    | "europe-west8"
    | "europe-west9"
    | "me-west1"
    | "southamerica-east1"
    | "us-central1"
    | "us-east1"
    | "us-east4"
    | "us-south1"
    | "us-west1"
    | (string & {});
}

export const DeleteScheduleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      url: Schema.String.pipe(T.HttpPath("url")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      region: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "asia-east1",
            "asia-northeast1",
            "asia-northeast2",
            "asia-south1",
            "asia-southeast1",
            "australia-southeast1",
            "europe-north1",
            "europe-southwest1",
            "europe-west1",
            "europe-west2",
            "europe-west3",
            "europe-west4",
            "europe-west8",
            "europe-west9",
            "me-west1",
            "southamerica-east1",
            "us-central1",
            "us-east1",
            "us-east4",
            "us-south1",
            "us-west1",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("region")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/speed_api/schedule/{url}",
      }),
    ),
) as unknown as Schema.Codec<DeleteScheduleRequest>;

export interface DeleteScheduleResponse {
  /** Number of items affected. */
  count?: number | null;
}

export const DeleteScheduleResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteScheduleResponse>;

export type DeleteScheduleError =
  | DefaultErrors
  | TestScheduleNotFound
  | Forbidden;

export const deleteSchedule: API.OperationMethod<
  DeleteScheduleRequest,
  DeleteScheduleResponse,
  DeleteScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteScheduleRequest,
  output: DeleteScheduleResponse,
  errors: [TestScheduleNotFound, Forbidden],
}));
