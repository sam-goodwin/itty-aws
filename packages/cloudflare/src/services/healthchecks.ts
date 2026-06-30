/**
 * Cloudflare HEALTHCHECKS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service healthchecks
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

export class HealthcheckAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<HealthcheckAlreadyExists>()(
    "HealthcheckAlreadyExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ message: { includes: "already exists" } }],
) {}

export class HealthcheckNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<HealthcheckNotFound>()("HealthcheckNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Httpconfiguration {
  /** Do not validate the certificate when the health check uses HTTPS. */
  allowInsecure?: boolean | null;
  /** A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. */
  expectedBody?: string | null;
  /** The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all codes starting with 2) of the health check. */
  expectedCodes?: string[] | null;
  /** Follow redirects if the origin returns a 3xx status code. */
  followRedirects?: boolean | null;
  /** The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden. */
  header?: Record<string, unknown> | null;
  /** The HTTP method to use for the health check. */
  method?: "GET" | "HEAD" | (string & {}) | null;
  /** The endpoint path to health check against. */
  path?: string | null;
  /** Port number to connect to for the health check. Defaults to 80 if type is HTTP or 443 if type is HTTPS. */
  port?: number | null;
}
const Httpconfiguration = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    allowInsecure: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    expectedBody: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    expectedCodes: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    followRedirects: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    header: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    method: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["GET", "HEAD"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    path: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      allowInsecure: "allow_insecure",
      expectedBody: "expected_body",
      expectedCodes: "expected_codes",
      followRedirects: "follow_redirects",
      header: "header",
      method: "method",
      path: "path",
      port: "port",
    }),
  ),
) as unknown as Schema.Codec<Httpconfiguration>;

interface Tcpconfiguration {
  /** The TCP connection method to use for the health check. */
  method?: "connection_established" | null;
  /** Port number to connect to for the health check. Defaults to 80. */
  port?: number | null;
}
const Tcpconfiguration = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    method: Schema.optional(
      Schema.Union([Schema.Literal("connection_established"), Schema.Null]),
    ),
    port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Tcpconfiguration>;

interface ListHealthchecksResponseResult {
  /** Identifier */
  id?: string | null;
  /** The hostname or IP address of the origin server to run health checks on. */
  address?: string | null;
  /** A list of regions from which to run health checks. Null means Cloudflare will pick a default region. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "IN"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  /** The number of consecutive fails required from a health check before changing the health to unhealthy. */
  consecutiveFails?: number | null;
  /** The number of consecutive successes required from a health check before changing the health to healthy. */
  consecutiveSuccesses?: number | null;
  createdOn?: string | null;
  /** A human-readable description of the health check. */
  description?: string | null;
  /** The current failure reason if status is unhealthy. */
  failureReason?: string | null;
  /** Parameters specific to an HTTP or HTTPS health check. */
  httpConfig?: {
    allowInsecure?: boolean | null;
    expectedBody?: string | null;
    expectedCodes?: string[] | null;
    followRedirects?: boolean | null;
    header?: Record<string, unknown> | null;
    method?: "GET" | "HEAD" | (string & {}) | null;
    path?: string | null;
    port?: number | null;
  } | null;
  /** The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations. */
  interval?: number | null;
  modifiedOn?: string | null;
  /** A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed. */
  name?: string | null;
  /** The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number | null;
  /** The current status of the origin server according to the health check. */
  status?:
    | "unknown"
    | "healthy"
    | "unhealthy"
    | "suspended"
    | (string & {})
    | null;
  /** If suspended, no health checks are sent to the origin. */
  suspended?: boolean | null;
  /** Parameters specific to TCP health check. */
  tcpConfig?: {
    method?: "connection_established" | null;
    port?: number | null;
  } | null;
  /** The timeout (in seconds) before marking the health check as failed. */
  timeout?: number | null;
  /** The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'. */
  type?: string | null;
}
const ListHealthchecksResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      address: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      checkRegions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "WNAM",
                "ENAM",
                "WEU",
                "EEU",
                "NSAM",
                "SSAM",
                "OC",
                "ME",
                "NAF",
                "SAF",
                "IN",
                "SEAS",
                "NEAS",
                "ALL_REGIONS",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      consecutiveFails: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      consecutiveSuccesses: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      failureReason: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      httpConfig: Schema.optional(
        Schema.Union([Httpconfiguration, Schema.Null]),
      ),
      interval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      retries: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["unknown", "healthy", "unhealthy", "suspended"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      suspended: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      tcpConfig: Schema.optional(Schema.Union([Tcpconfiguration, Schema.Null])),
      timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        address: "address",
        checkRegions: "check_regions",
        consecutiveFails: "consecutive_fails",
        consecutiveSuccesses: "consecutive_successes",
        createdOn: "created_on",
        description: "description",
        failureReason: "failure_reason",
        httpConfig: "http_config",
        interval: "interval",
        modifiedOn: "modified_on",
        name: "name",
        retries: "retries",
        status: "status",
        suspended: "suspended",
        tcpConfig: "tcp_config",
        timeout: "timeout",
        type: "type",
      }),
    ),
  ) as unknown as Schema.Codec<ListHealthchecksResponseResult>;

interface ListHealthchecksResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListHealthchecksResponseResultInfo =
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
  ) as unknown as Schema.Codec<ListHealthchecksResponseResultInfo>;

// =============================================================================
// Healthcheck
// =============================================================================

export interface GetHealthcheckRequest {
  healthcheckId: string;
  /** Identifier */
  zoneId: string;
}

export const GetHealthcheckRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      healthcheckId: Schema.String.pipe(T.HttpPath("healthcheckId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/healthchecks/{healthcheckId}",
      }),
    ),
) as unknown as Schema.Codec<GetHealthcheckRequest>;

export interface GetHealthcheckResponse {
  /** Identifier */
  id?: string | null;
  /** The hostname or IP address of the origin server to run health checks on. */
  address?: string | null;
  /** A list of regions from which to run health checks. Null means Cloudflare will pick a default region. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "IN"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  /** The number of consecutive fails required from a health check before changing the health to unhealthy. */
  consecutiveFails?: number | null;
  /** The number of consecutive successes required from a health check before changing the health to healthy. */
  consecutiveSuccesses?: number | null;
  createdOn?: string | null;
  /** A human-readable description of the health check. */
  description?: string | null;
  /** The current failure reason if status is unhealthy. */
  failureReason?: string | null;
  /** Parameters specific to an HTTP or HTTPS health check. */
  httpConfig?: {
    allowInsecure?: boolean | null;
    expectedBody?: string | null;
    expectedCodes?: string[] | null;
    followRedirects?: boolean | null;
    header?: Record<string, unknown> | null;
    method?: "GET" | "HEAD" | (string & {}) | null;
    path?: string | null;
    port?: number | null;
  } | null;
  /** The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations. */
  interval?: number | null;
  modifiedOn?: string | null;
  /** A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed. */
  name?: string | null;
  /** The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number | null;
  /** The current status of the origin server according to the health check. */
  status?:
    | "unknown"
    | "healthy"
    | "unhealthy"
    | "suspended"
    | (string & {})
    | null;
  /** If suspended, no health checks are sent to the origin. */
  suspended?: boolean | null;
  /** Parameters specific to TCP health check. */
  tcpConfig?: {
    method?: "connection_established" | null;
    port?: number | null;
  } | null;
  /** The timeout (in seconds) before marking the health check as failed. */
  timeout?: number | null;
  /** The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'. */
  type?: string | null;
}

export const GetHealthcheckResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      address: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      checkRegions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "WNAM",
                "ENAM",
                "WEU",
                "EEU",
                "NSAM",
                "SSAM",
                "OC",
                "ME",
                "NAF",
                "SAF",
                "IN",
                "SEAS",
                "NEAS",
                "ALL_REGIONS",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      consecutiveFails: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      consecutiveSuccesses: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      failureReason: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      httpConfig: Schema.optional(
        Schema.Union([Httpconfiguration, Schema.Null]),
      ),
      interval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      retries: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["unknown", "healthy", "unhealthy", "suspended"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      suspended: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      tcpConfig: Schema.optional(Schema.Union([Tcpconfiguration, Schema.Null])),
      timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          address: "address",
          checkRegions: "check_regions",
          consecutiveFails: "consecutive_fails",
          consecutiveSuccesses: "consecutive_successes",
          createdOn: "created_on",
          description: "description",
          failureReason: "failure_reason",
          httpConfig: "http_config",
          interval: "interval",
          modifiedOn: "modified_on",
          name: "name",
          retries: "retries",
          status: "status",
          suspended: "suspended",
          tcpConfig: "tcp_config",
          timeout: "timeout",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetHealthcheckResponse>;

export type GetHealthcheckError =
  | DefaultErrors
  | HealthcheckNotFound
  | Forbidden;

export const getHealthcheck: API.OperationMethod<
  GetHealthcheckRequest,
  GetHealthcheckResponse,
  GetHealthcheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetHealthcheckRequest,
  output: GetHealthcheckResponse,
  errors: [HealthcheckNotFound, Forbidden],
}));

export interface ListHealthchecksRequest {
  /** Path param: Identifier */
  zoneId: string;
  page?: number;
  perPage?: number;
}

export const ListHealthchecksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/healthchecks" })),
  ) as unknown as Schema.Codec<ListHealthchecksRequest>;

export interface ListHealthchecksResponse {
  result: {
    id?: string | null;
    address?: string | null;
    checkRegions?:
      | (
          | "WNAM"
          | "ENAM"
          | "WEU"
          | "EEU"
          | "NSAM"
          | "SSAM"
          | "OC"
          | "ME"
          | "NAF"
          | "SAF"
          | "IN"
          | "SEAS"
          | "NEAS"
          | "ALL_REGIONS"
          | (string & {})
        )[]
      | null;
    consecutiveFails?: number | null;
    consecutiveSuccesses?: number | null;
    createdOn?: string | null;
    description?: string | null;
    failureReason?: string | null;
    httpConfig?: {
      allowInsecure?: boolean | null;
      expectedBody?: string | null;
      expectedCodes?: string[] | null;
      followRedirects?: boolean | null;
      header?: Record<string, unknown> | null;
      method?: "GET" | "HEAD" | (string & {}) | null;
      path?: string | null;
      port?: number | null;
    } | null;
    interval?: number | null;
    modifiedOn?: string | null;
    name?: string | null;
    retries?: number | null;
    status?:
      | "unknown"
      | "healthy"
      | "unhealthy"
      | "suspended"
      | (string & {})
      | null;
    suspended?: boolean | null;
    tcpConfig?: {
      method?: "connection_established" | null;
      port?: number | null;
    } | null;
    timeout?: number | null;
    type?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListHealthchecksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListHealthchecksResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListHealthchecksResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListHealthchecksResponse>;

export type ListHealthchecksError = DefaultErrors | Forbidden;

export const listHealthchecks: API.PaginatedOperationMethod<
  ListHealthchecksRequest,
  ListHealthchecksResponse,
  ListHealthchecksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListHealthchecksRequest,
  output: ListHealthchecksResponse,
  errors: [Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateHealthcheckRequest {
  /** Path param: Identifier */
  zoneId: string;
  /** Body param: The hostname or IP address of the origin server to run health checks on. */
  address: string;
  /** Body param: A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed. */
  name: string;
  /** Body param: A list of regions from which to run health checks. Null means Cloudflare will pick a default region. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "IN"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  /** Body param: The number of consecutive fails required from a health check before changing the health to unhealthy. */
  consecutiveFails?: number;
  /** Body param: The number of consecutive successes required from a health check before changing the health to healthy. */
  consecutiveSuccesses?: number;
  /** Body param: A human-readable description of the health check. */
  description?: string;
  /** Body param: Parameters specific to an HTTP or HTTPS health check. */
  httpConfig?: {
    allowInsecure?: boolean;
    expectedBody?: string;
    expectedCodes?: string[] | null;
    followRedirects?: boolean;
    header?: Record<string, unknown> | null;
    method?: "GET" | "HEAD" | (string & {});
    path?: string;
    port?: number;
  } | null;
  /** Body param: The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locati */
  interval?: number;
  /** Body param: The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number;
  /** Body param: If suspended, no health checks are sent to the origin. */
  suspended?: boolean;
  /** Body param: Parameters specific to TCP health check. */
  tcpConfig?: { method?: "connection_established"; port?: number } | null;
  /** Body param: The timeout (in seconds) before marking the health check as failed. */
  timeout?: number;
  /** Body param: The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'. */
  type?: string;
}

export const CreateHealthcheckRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      address: Schema.String,
      name: Schema.String,
      checkRegions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "WNAM",
                "ENAM",
                "WEU",
                "EEU",
                "NSAM",
                "SSAM",
                "OC",
                "ME",
                "NAF",
                "SAF",
                "IN",
                "SEAS",
                "NEAS",
                "ALL_REGIONS",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      consecutiveFails: Schema.optional(Schema.Number),
      consecutiveSuccesses: Schema.optional(Schema.Number),
      description: Schema.optional(Schema.String),
      httpConfig: Schema.optional(
        Schema.Union([Httpconfiguration, Schema.Null]),
      ),
      interval: Schema.optional(Schema.Number),
      retries: Schema.optional(Schema.Number),
      suspended: Schema.optional(Schema.Boolean),
      tcpConfig: Schema.optional(Schema.Union([Tcpconfiguration, Schema.Null])),
      timeout: Schema.optional(Schema.Number),
      type: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        address: "address",
        name: "name",
        checkRegions: "check_regions",
        consecutiveFails: "consecutive_fails",
        consecutiveSuccesses: "consecutive_successes",
        description: "description",
        httpConfig: "http_config",
        interval: "interval",
        retries: "retries",
        suspended: "suspended",
        tcpConfig: "tcp_config",
        timeout: "timeout",
        type: "type",
      }),
      T.Http({ method: "POST", path: "/zones/{zone_id}/healthchecks" }),
    ),
  ) as unknown as Schema.Codec<CreateHealthcheckRequest>;

export interface CreateHealthcheckResponse {
  /** Identifier */
  id?: string | null;
  /** The hostname or IP address of the origin server to run health checks on. */
  address?: string | null;
  /** A list of regions from which to run health checks. Null means Cloudflare will pick a default region. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "IN"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  /** The number of consecutive fails required from a health check before changing the health to unhealthy. */
  consecutiveFails?: number | null;
  /** The number of consecutive successes required from a health check before changing the health to healthy. */
  consecutiveSuccesses?: number | null;
  createdOn?: string | null;
  /** A human-readable description of the health check. */
  description?: string | null;
  /** The current failure reason if status is unhealthy. */
  failureReason?: string | null;
  /** Parameters specific to an HTTP or HTTPS health check. */
  httpConfig?: {
    allowInsecure?: boolean | null;
    expectedBody?: string | null;
    expectedCodes?: string[] | null;
    followRedirects?: boolean | null;
    header?: Record<string, unknown> | null;
    method?: "GET" | "HEAD" | (string & {}) | null;
    path?: string | null;
    port?: number | null;
  } | null;
  /** The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations. */
  interval?: number | null;
  modifiedOn?: string | null;
  /** A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed. */
  name?: string | null;
  /** The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number | null;
  /** The current status of the origin server according to the health check. */
  status?:
    | "unknown"
    | "healthy"
    | "unhealthy"
    | "suspended"
    | (string & {})
    | null;
  /** If suspended, no health checks are sent to the origin. */
  suspended?: boolean | null;
  /** Parameters specific to TCP health check. */
  tcpConfig?: {
    method?: "connection_established" | null;
    port?: number | null;
  } | null;
  /** The timeout (in seconds) before marking the health check as failed. */
  timeout?: number | null;
  /** The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'. */
  type?: string | null;
}

export const CreateHealthcheckResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      address: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      checkRegions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "WNAM",
                "ENAM",
                "WEU",
                "EEU",
                "NSAM",
                "SSAM",
                "OC",
                "ME",
                "NAF",
                "SAF",
                "IN",
                "SEAS",
                "NEAS",
                "ALL_REGIONS",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      consecutiveFails: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      consecutiveSuccesses: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      failureReason: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      httpConfig: Schema.optional(
        Schema.Union([Httpconfiguration, Schema.Null]),
      ),
      interval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      retries: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["unknown", "healthy", "unhealthy", "suspended"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      suspended: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      tcpConfig: Schema.optional(Schema.Union([Tcpconfiguration, Schema.Null])),
      timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          address: "address",
          checkRegions: "check_regions",
          consecutiveFails: "consecutive_fails",
          consecutiveSuccesses: "consecutive_successes",
          createdOn: "created_on",
          description: "description",
          failureReason: "failure_reason",
          httpConfig: "http_config",
          interval: "interval",
          modifiedOn: "modified_on",
          name: "name",
          retries: "retries",
          status: "status",
          suspended: "suspended",
          tcpConfig: "tcp_config",
          timeout: "timeout",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateHealthcheckResponse>;

export type CreateHealthcheckError =
  | DefaultErrors
  | HealthcheckAlreadyExists
  | Forbidden;

export const createHealthcheck: API.OperationMethod<
  CreateHealthcheckRequest,
  CreateHealthcheckResponse,
  CreateHealthcheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateHealthcheckRequest,
  output: CreateHealthcheckResponse,
  errors: [HealthcheckAlreadyExists, Forbidden],
}));

export interface UpdateHealthcheckRequest {
  healthcheckId: string;
  /** Path param: Identifier */
  zoneId: string;
  /** Body param: The hostname or IP address of the origin server to run health checks on. */
  address: string;
  /** Body param: A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed. */
  name: string;
  /** Body param: A list of regions from which to run health checks. Null means Cloudflare will pick a default region. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "IN"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  /** Body param: The number of consecutive fails required from a health check before changing the health to unhealthy. */
  consecutiveFails?: number;
  /** Body param: The number of consecutive successes required from a health check before changing the health to healthy. */
  consecutiveSuccesses?: number;
  /** Body param: A human-readable description of the health check. */
  description?: string;
  /** Body param: Parameters specific to an HTTP or HTTPS health check. */
  httpConfig?: {
    allowInsecure?: boolean;
    expectedBody?: string;
    expectedCodes?: string[] | null;
    followRedirects?: boolean;
    header?: Record<string, unknown> | null;
    method?: "GET" | "HEAD" | (string & {});
    path?: string;
    port?: number;
  } | null;
  /** Body param: The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locati */
  interval?: number;
  /** Body param: The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number;
  /** Body param: If suspended, no health checks are sent to the origin. */
  suspended?: boolean;
  /** Body param: Parameters specific to TCP health check. */
  tcpConfig?: { method?: "connection_established"; port?: number } | null;
  /** Body param: The timeout (in seconds) before marking the health check as failed. */
  timeout?: number;
  /** Body param: The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'. */
  type?: string;
}

export const UpdateHealthcheckRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      healthcheckId: Schema.String.pipe(T.HttpPath("healthcheckId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      address: Schema.String,
      name: Schema.String,
      checkRegions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "WNAM",
                "ENAM",
                "WEU",
                "EEU",
                "NSAM",
                "SSAM",
                "OC",
                "ME",
                "NAF",
                "SAF",
                "IN",
                "SEAS",
                "NEAS",
                "ALL_REGIONS",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      consecutiveFails: Schema.optional(Schema.Number),
      consecutiveSuccesses: Schema.optional(Schema.Number),
      description: Schema.optional(Schema.String),
      httpConfig: Schema.optional(
        Schema.Union([Httpconfiguration, Schema.Null]),
      ),
      interval: Schema.optional(Schema.Number),
      retries: Schema.optional(Schema.Number),
      suspended: Schema.optional(Schema.Boolean),
      tcpConfig: Schema.optional(Schema.Union([Tcpconfiguration, Schema.Null])),
      timeout: Schema.optional(Schema.Number),
      type: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        address: "address",
        name: "name",
        checkRegions: "check_regions",
        consecutiveFails: "consecutive_fails",
        consecutiveSuccesses: "consecutive_successes",
        description: "description",
        httpConfig: "http_config",
        interval: "interval",
        retries: "retries",
        suspended: "suspended",
        tcpConfig: "tcp_config",
        timeout: "timeout",
        type: "type",
      }),
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/healthchecks/{healthcheckId}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateHealthcheckRequest>;

export interface UpdateHealthcheckResponse {
  /** Identifier */
  id?: string | null;
  /** The hostname or IP address of the origin server to run health checks on. */
  address?: string | null;
  /** A list of regions from which to run health checks. Null means Cloudflare will pick a default region. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "IN"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  /** The number of consecutive fails required from a health check before changing the health to unhealthy. */
  consecutiveFails?: number | null;
  /** The number of consecutive successes required from a health check before changing the health to healthy. */
  consecutiveSuccesses?: number | null;
  createdOn?: string | null;
  /** A human-readable description of the health check. */
  description?: string | null;
  /** The current failure reason if status is unhealthy. */
  failureReason?: string | null;
  /** Parameters specific to an HTTP or HTTPS health check. */
  httpConfig?: {
    allowInsecure?: boolean | null;
    expectedBody?: string | null;
    expectedCodes?: string[] | null;
    followRedirects?: boolean | null;
    header?: Record<string, unknown> | null;
    method?: "GET" | "HEAD" | (string & {}) | null;
    path?: string | null;
    port?: number | null;
  } | null;
  /** The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations. */
  interval?: number | null;
  modifiedOn?: string | null;
  /** A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed. */
  name?: string | null;
  /** The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number | null;
  /** The current status of the origin server according to the health check. */
  status?:
    | "unknown"
    | "healthy"
    | "unhealthy"
    | "suspended"
    | (string & {})
    | null;
  /** If suspended, no health checks are sent to the origin. */
  suspended?: boolean | null;
  /** Parameters specific to TCP health check. */
  tcpConfig?: {
    method?: "connection_established" | null;
    port?: number | null;
  } | null;
  /** The timeout (in seconds) before marking the health check as failed. */
  timeout?: number | null;
  /** The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'. */
  type?: string | null;
}

export const UpdateHealthcheckResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      address: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      checkRegions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "WNAM",
                "ENAM",
                "WEU",
                "EEU",
                "NSAM",
                "SSAM",
                "OC",
                "ME",
                "NAF",
                "SAF",
                "IN",
                "SEAS",
                "NEAS",
                "ALL_REGIONS",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      consecutiveFails: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      consecutiveSuccesses: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      failureReason: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      httpConfig: Schema.optional(
        Schema.Union([Httpconfiguration, Schema.Null]),
      ),
      interval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      retries: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["unknown", "healthy", "unhealthy", "suspended"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      suspended: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      tcpConfig: Schema.optional(Schema.Union([Tcpconfiguration, Schema.Null])),
      timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          address: "address",
          checkRegions: "check_regions",
          consecutiveFails: "consecutive_fails",
          consecutiveSuccesses: "consecutive_successes",
          createdOn: "created_on",
          description: "description",
          failureReason: "failure_reason",
          httpConfig: "http_config",
          interval: "interval",
          modifiedOn: "modified_on",
          name: "name",
          retries: "retries",
          status: "status",
          suspended: "suspended",
          tcpConfig: "tcp_config",
          timeout: "timeout",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateHealthcheckResponse>;

export type UpdateHealthcheckError =
  | DefaultErrors
  | HealthcheckNotFound
  | Forbidden;

export const updateHealthcheck: API.OperationMethod<
  UpdateHealthcheckRequest,
  UpdateHealthcheckResponse,
  UpdateHealthcheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateHealthcheckRequest,
  output: UpdateHealthcheckResponse,
  errors: [HealthcheckNotFound, Forbidden],
}));

export interface PatchHealthcheckRequest {
  healthcheckId: string;
  /** Path param: Identifier */
  zoneId: string;
  /** Body param: The hostname or IP address of the origin server to run health checks on. */
  address: string;
  /** Body param: A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed. */
  name: string;
  /** Body param: A list of regions from which to run health checks. Null means Cloudflare will pick a default region. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "IN"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  /** Body param: The number of consecutive fails required from a health check before changing the health to unhealthy. */
  consecutiveFails?: number;
  /** Body param: The number of consecutive successes required from a health check before changing the health to healthy. */
  consecutiveSuccesses?: number;
  /** Body param: A human-readable description of the health check. */
  description?: string;
  /** Body param: Parameters specific to an HTTP or HTTPS health check. */
  httpConfig?: {
    allowInsecure?: boolean;
    expectedBody?: string;
    expectedCodes?: string[] | null;
    followRedirects?: boolean;
    header?: Record<string, unknown> | null;
    method?: "GET" | "HEAD" | (string & {});
    path?: string;
    port?: number;
  } | null;
  /** Body param: The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locati */
  interval?: number;
  /** Body param: The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number;
  /** Body param: If suspended, no health checks are sent to the origin. */
  suspended?: boolean;
  /** Body param: Parameters specific to TCP health check. */
  tcpConfig?: { method?: "connection_established"; port?: number } | null;
  /** Body param: The timeout (in seconds) before marking the health check as failed. */
  timeout?: number;
  /** Body param: The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'. */
  type?: string;
}

export const PatchHealthcheckRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      healthcheckId: Schema.String.pipe(T.HttpPath("healthcheckId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      address: Schema.String,
      name: Schema.String,
      checkRegions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "WNAM",
                "ENAM",
                "WEU",
                "EEU",
                "NSAM",
                "SSAM",
                "OC",
                "ME",
                "NAF",
                "SAF",
                "IN",
                "SEAS",
                "NEAS",
                "ALL_REGIONS",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      consecutiveFails: Schema.optional(Schema.Number),
      consecutiveSuccesses: Schema.optional(Schema.Number),
      description: Schema.optional(Schema.String),
      httpConfig: Schema.optional(
        Schema.Union([Httpconfiguration, Schema.Null]),
      ),
      interval: Schema.optional(Schema.Number),
      retries: Schema.optional(Schema.Number),
      suspended: Schema.optional(Schema.Boolean),
      tcpConfig: Schema.optional(Schema.Union([Tcpconfiguration, Schema.Null])),
      timeout: Schema.optional(Schema.Number),
      type: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        address: "address",
        name: "name",
        checkRegions: "check_regions",
        consecutiveFails: "consecutive_fails",
        consecutiveSuccesses: "consecutive_successes",
        description: "description",
        httpConfig: "http_config",
        interval: "interval",
        retries: "retries",
        suspended: "suspended",
        tcpConfig: "tcp_config",
        timeout: "timeout",
        type: "type",
      }),
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/healthchecks/{healthcheckId}",
      }),
    ),
  ) as unknown as Schema.Codec<PatchHealthcheckRequest>;

export interface PatchHealthcheckResponse {
  /** Identifier */
  id?: string | null;
  /** The hostname or IP address of the origin server to run health checks on. */
  address?: string | null;
  /** A list of regions from which to run health checks. Null means Cloudflare will pick a default region. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "IN"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  /** The number of consecutive fails required from a health check before changing the health to unhealthy. */
  consecutiveFails?: number | null;
  /** The number of consecutive successes required from a health check before changing the health to healthy. */
  consecutiveSuccesses?: number | null;
  createdOn?: string | null;
  /** A human-readable description of the health check. */
  description?: string | null;
  /** The current failure reason if status is unhealthy. */
  failureReason?: string | null;
  /** Parameters specific to an HTTP or HTTPS health check. */
  httpConfig?: {
    allowInsecure?: boolean | null;
    expectedBody?: string | null;
    expectedCodes?: string[] | null;
    followRedirects?: boolean | null;
    header?: Record<string, unknown> | null;
    method?: "GET" | "HEAD" | (string & {}) | null;
    path?: string | null;
    port?: number | null;
  } | null;
  /** The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations. */
  interval?: number | null;
  modifiedOn?: string | null;
  /** A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed. */
  name?: string | null;
  /** The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number | null;
  /** The current status of the origin server according to the health check. */
  status?:
    | "unknown"
    | "healthy"
    | "unhealthy"
    | "suspended"
    | (string & {})
    | null;
  /** If suspended, no health checks are sent to the origin. */
  suspended?: boolean | null;
  /** Parameters specific to TCP health check. */
  tcpConfig?: {
    method?: "connection_established" | null;
    port?: number | null;
  } | null;
  /** The timeout (in seconds) before marking the health check as failed. */
  timeout?: number | null;
  /** The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'. */
  type?: string | null;
}

export const PatchHealthcheckResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      address: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      checkRegions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "WNAM",
                "ENAM",
                "WEU",
                "EEU",
                "NSAM",
                "SSAM",
                "OC",
                "ME",
                "NAF",
                "SAF",
                "IN",
                "SEAS",
                "NEAS",
                "ALL_REGIONS",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      consecutiveFails: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      consecutiveSuccesses: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      failureReason: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      httpConfig: Schema.optional(
        Schema.Union([Httpconfiguration, Schema.Null]),
      ),
      interval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      retries: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["unknown", "healthy", "unhealthy", "suspended"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      suspended: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      tcpConfig: Schema.optional(Schema.Union([Tcpconfiguration, Schema.Null])),
      timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          address: "address",
          checkRegions: "check_regions",
          consecutiveFails: "consecutive_fails",
          consecutiveSuccesses: "consecutive_successes",
          createdOn: "created_on",
          description: "description",
          failureReason: "failure_reason",
          httpConfig: "http_config",
          interval: "interval",
          modifiedOn: "modified_on",
          name: "name",
          retries: "retries",
          status: "status",
          suspended: "suspended",
          tcpConfig: "tcp_config",
          timeout: "timeout",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchHealthcheckResponse>;

export type PatchHealthcheckError = DefaultErrors;

export const patchHealthcheck: API.OperationMethod<
  PatchHealthcheckRequest,
  PatchHealthcheckResponse,
  PatchHealthcheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchHealthcheckRequest,
  output: PatchHealthcheckResponse,
  errors: [],
}));

export interface DeleteHealthcheckRequest {
  healthcheckId: string;
  /** Identifier */
  zoneId: string;
}

export const DeleteHealthcheckRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      healthcheckId: Schema.String.pipe(T.HttpPath("healthcheckId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/healthchecks/{healthcheckId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteHealthcheckRequest>;

export interface DeleteHealthcheckResponse {
  /** Identifier */
  id?: string | null;
}

export const DeleteHealthcheckResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteHealthcheckResponse>;

export type DeleteHealthcheckError =
  | DefaultErrors
  | HealthcheckNotFound
  | Forbidden;

export const deleteHealthcheck: API.OperationMethod<
  DeleteHealthcheckRequest,
  DeleteHealthcheckResponse,
  DeleteHealthcheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteHealthcheckRequest,
  output: DeleteHealthcheckResponse,
  errors: [HealthcheckNotFound, Forbidden],
}));

// =============================================================================
// Preview
// =============================================================================

export interface GetPreviewRequest {
  healthcheckId: string;
  /** Identifier */
  zoneId: string;
}

export const GetPreviewRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      healthcheckId: Schema.String.pipe(T.HttpPath("healthcheckId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/healthchecks/preview/{healthcheckId}",
      }),
    ),
) as unknown as Schema.Codec<GetPreviewRequest>;

export interface GetPreviewResponse {
  /** Identifier */
  id?: string | null;
  /** The hostname or IP address of the origin server to run health checks on. */
  address?: string | null;
  /** A list of regions from which to run health checks. Null means Cloudflare will pick a default region. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "IN"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  /** The number of consecutive fails required from a health check before changing the health to unhealthy. */
  consecutiveFails?: number | null;
  /** The number of consecutive successes required from a health check before changing the health to healthy. */
  consecutiveSuccesses?: number | null;
  createdOn?: string | null;
  /** A human-readable description of the health check. */
  description?: string | null;
  /** The current failure reason if status is unhealthy. */
  failureReason?: string | null;
  /** Parameters specific to an HTTP or HTTPS health check. */
  httpConfig?: {
    allowInsecure?: boolean | null;
    expectedBody?: string | null;
    expectedCodes?: string[] | null;
    followRedirects?: boolean | null;
    header?: Record<string, unknown> | null;
    method?: "GET" | "HEAD" | (string & {}) | null;
    path?: string | null;
    port?: number | null;
  } | null;
  /** The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations. */
  interval?: number | null;
  modifiedOn?: string | null;
  /** A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed. */
  name?: string | null;
  /** The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number | null;
  /** The current status of the origin server according to the health check. */
  status?:
    | "unknown"
    | "healthy"
    | "unhealthy"
    | "suspended"
    | (string & {})
    | null;
  /** If suspended, no health checks are sent to the origin. */
  suspended?: boolean | null;
  /** Parameters specific to TCP health check. */
  tcpConfig?: {
    method?: "connection_established" | null;
    port?: number | null;
  } | null;
  /** The timeout (in seconds) before marking the health check as failed. */
  timeout?: number | null;
  /** The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'. */
  type?: string | null;
}

export const GetPreviewResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      address: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      checkRegions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "WNAM",
                "ENAM",
                "WEU",
                "EEU",
                "NSAM",
                "SSAM",
                "OC",
                "ME",
                "NAF",
                "SAF",
                "IN",
                "SEAS",
                "NEAS",
                "ALL_REGIONS",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      consecutiveFails: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      consecutiveSuccesses: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      failureReason: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      httpConfig: Schema.optional(
        Schema.Union([Httpconfiguration, Schema.Null]),
      ),
      interval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      retries: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["unknown", "healthy", "unhealthy", "suspended"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      suspended: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      tcpConfig: Schema.optional(Schema.Union([Tcpconfiguration, Schema.Null])),
      timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          address: "address",
          checkRegions: "check_regions",
          consecutiveFails: "consecutive_fails",
          consecutiveSuccesses: "consecutive_successes",
          createdOn: "created_on",
          description: "description",
          failureReason: "failure_reason",
          httpConfig: "http_config",
          interval: "interval",
          modifiedOn: "modified_on",
          name: "name",
          retries: "retries",
          status: "status",
          suspended: "suspended",
          tcpConfig: "tcp_config",
          timeout: "timeout",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetPreviewResponse>;

export type GetPreviewError = DefaultErrors;

export const getPreview: API.OperationMethod<
  GetPreviewRequest,
  GetPreviewResponse,
  GetPreviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPreviewRequest,
  output: GetPreviewResponse,
  errors: [],
}));

export interface CreatePreviewRequest {
  /** Path param: Identifier */
  zoneId: string;
  /** Body param: The hostname or IP address of the origin server to run health checks on. */
  address: string;
  /** Body param: A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed. */
  name: string;
  /** Body param: A list of regions from which to run health checks. Null means Cloudflare will pick a default region. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "IN"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  /** Body param: The number of consecutive fails required from a health check before changing the health to unhealthy. */
  consecutiveFails?: number;
  /** Body param: The number of consecutive successes required from a health check before changing the health to healthy. */
  consecutiveSuccesses?: number;
  /** Body param: A human-readable description of the health check. */
  description?: string;
  /** Body param: Parameters specific to an HTTP or HTTPS health check. */
  httpConfig?: {
    allowInsecure?: boolean;
    expectedBody?: string;
    expectedCodes?: string[] | null;
    followRedirects?: boolean;
    header?: Record<string, unknown> | null;
    method?: "GET" | "HEAD" | (string & {});
    path?: string;
    port?: number;
  } | null;
  /** Body param: The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locati */
  interval?: number;
  /** Body param: The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number;
  /** Body param: If suspended, no health checks are sent to the origin. */
  suspended?: boolean;
  /** Body param: Parameters specific to TCP health check. */
  tcpConfig?: { method?: "connection_established"; port?: number } | null;
  /** Body param: The timeout (in seconds) before marking the health check as failed. */
  timeout?: number;
  /** Body param: The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'. */
  type?: string;
}

export const CreatePreviewRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      address: Schema.String,
      name: Schema.String,
      checkRegions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "WNAM",
                "ENAM",
                "WEU",
                "EEU",
                "NSAM",
                "SSAM",
                "OC",
                "ME",
                "NAF",
                "SAF",
                "IN",
                "SEAS",
                "NEAS",
                "ALL_REGIONS",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      consecutiveFails: Schema.optional(Schema.Number),
      consecutiveSuccesses: Schema.optional(Schema.Number),
      description: Schema.optional(Schema.String),
      httpConfig: Schema.optional(
        Schema.Union([Httpconfiguration, Schema.Null]),
      ),
      interval: Schema.optional(Schema.Number),
      retries: Schema.optional(Schema.Number),
      suspended: Schema.optional(Schema.Boolean),
      tcpConfig: Schema.optional(Schema.Union([Tcpconfiguration, Schema.Null])),
      timeout: Schema.optional(Schema.Number),
      type: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        address: "address",
        name: "name",
        checkRegions: "check_regions",
        consecutiveFails: "consecutive_fails",
        consecutiveSuccesses: "consecutive_successes",
        description: "description",
        httpConfig: "http_config",
        interval: "interval",
        retries: "retries",
        suspended: "suspended",
        tcpConfig: "tcp_config",
        timeout: "timeout",
        type: "type",
      }),
      T.Http({ method: "POST", path: "/zones/{zone_id}/healthchecks/preview" }),
    ),
) as unknown as Schema.Codec<CreatePreviewRequest>;

export interface CreatePreviewResponse {
  /** Identifier */
  id?: string | null;
  /** The hostname or IP address of the origin server to run health checks on. */
  address?: string | null;
  /** A list of regions from which to run health checks. Null means Cloudflare will pick a default region. */
  checkRegions?:
    | (
        | "WNAM"
        | "ENAM"
        | "WEU"
        | "EEU"
        | "NSAM"
        | "SSAM"
        | "OC"
        | "ME"
        | "NAF"
        | "SAF"
        | "IN"
        | "SEAS"
        | "NEAS"
        | "ALL_REGIONS"
        | (string & {})
      )[]
    | null;
  /** The number of consecutive fails required from a health check before changing the health to unhealthy. */
  consecutiveFails?: number | null;
  /** The number of consecutive successes required from a health check before changing the health to healthy. */
  consecutiveSuccesses?: number | null;
  createdOn?: string | null;
  /** A human-readable description of the health check. */
  description?: string | null;
  /** The current failure reason if status is unhealthy. */
  failureReason?: string | null;
  /** Parameters specific to an HTTP or HTTPS health check. */
  httpConfig?: {
    allowInsecure?: boolean | null;
    expectedBody?: string | null;
    expectedCodes?: string[] | null;
    followRedirects?: boolean | null;
    header?: Record<string, unknown> | null;
    method?: "GET" | "HEAD" | (string & {}) | null;
    path?: string | null;
    port?: number | null;
  } | null;
  /** The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations. */
  interval?: number | null;
  modifiedOn?: string | null;
  /** A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed. */
  name?: string | null;
  /** The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. */
  retries?: number | null;
  /** The current status of the origin server according to the health check. */
  status?:
    | "unknown"
    | "healthy"
    | "unhealthy"
    | "suspended"
    | (string & {})
    | null;
  /** If suspended, no health checks are sent to the origin. */
  suspended?: boolean | null;
  /** Parameters specific to TCP health check. */
  tcpConfig?: {
    method?: "connection_established" | null;
    port?: number | null;
  } | null;
  /** The timeout (in seconds) before marking the health check as failed. */
  timeout?: number | null;
  /** The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'. */
  type?: string | null;
}

export const CreatePreviewResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      address: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      checkRegions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "WNAM",
                "ENAM",
                "WEU",
                "EEU",
                "NSAM",
                "SSAM",
                "OC",
                "ME",
                "NAF",
                "SAF",
                "IN",
                "SEAS",
                "NEAS",
                "ALL_REGIONS",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      consecutiveFails: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      consecutiveSuccesses: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      failureReason: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      httpConfig: Schema.optional(
        Schema.Union([Httpconfiguration, Schema.Null]),
      ),
      interval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      retries: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["unknown", "healthy", "unhealthy", "suspended"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      suspended: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      tcpConfig: Schema.optional(Schema.Union([Tcpconfiguration, Schema.Null])),
      timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          address: "address",
          checkRegions: "check_regions",
          consecutiveFails: "consecutive_fails",
          consecutiveSuccesses: "consecutive_successes",
          createdOn: "created_on",
          description: "description",
          failureReason: "failure_reason",
          httpConfig: "http_config",
          interval: "interval",
          modifiedOn: "modified_on",
          name: "name",
          retries: "retries",
          status: "status",
          suspended: "suspended",
          tcpConfig: "tcp_config",
          timeout: "timeout",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreatePreviewResponse>;

export type CreatePreviewError = DefaultErrors;

export const createPreview: API.OperationMethod<
  CreatePreviewRequest,
  CreatePreviewResponse,
  CreatePreviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePreviewRequest,
  output: CreatePreviewResponse,
  errors: [],
}));

export interface DeletePreviewRequest {
  healthcheckId: string;
  /** Identifier */
  zoneId: string;
}

export const DeletePreviewRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      healthcheckId: Schema.String.pipe(T.HttpPath("healthcheckId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/healthchecks/preview/{healthcheckId}",
      }),
    ),
) as unknown as Schema.Codec<DeletePreviewRequest>;

export interface DeletePreviewResponse {
  /** Identifier */
  id?: string | null;
}

export const DeletePreviewResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeletePreviewResponse>;

export type DeletePreviewError = DefaultErrors;

export const deletePreview: API.OperationMethod<
  DeletePreviewRequest,
  DeletePreviewResponse,
  DeletePreviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePreviewRequest,
  output: DeletePreviewResponse,
  errors: [],
}));
