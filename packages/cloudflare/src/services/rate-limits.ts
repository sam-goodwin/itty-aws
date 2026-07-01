/**
 * Cloudflare RATE-LIMITS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service rate-limits
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Response {
  /** The response body to return. The value must conform to the configured content type. */
  body?: string | null;
  /** The content type of the body. Must be one of the following: `text/plain`, `text/xml`, or `application/json`. */
  contentType?: string | null;
}
const Response = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    body: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    contentType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(Schema.encodeKeys({ body: "body", contentType: "content_type" })),
) as unknown as Schema.Codec<Response>;

interface Action {
  /** The action to perform. */
  mode?:
    | "simulate"
    | "ban"
    | "challenge"
    | "js_challenge"
    | "managed_challenge"
    | (string & {})
    | null;
  /** A custom content type and reponse to return when the threshold is exceeded. The custom response configured in this object will override the custom error for the zone. This object is optional. Notes: I */
  response?: { body?: string | null; contentType?: string | null } | null;
  /** The time in seconds during which Cloudflare will perform the mitigation action. Must be an integer value greater than or equal to the period. Notes: If "mode" is "challenge", "managed_challenge", or " */
  timeout?: number | null;
}
const Action = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    mode: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "simulate",
            "ban",
            "challenge",
            "js_challenge",
            "managed_challenge",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    response: Schema.optional(Schema.Union([Response, Schema.Null])),
    timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Action>;

interface Bypass {
  name?: "url" | null;
  /** The URL to bypass. */
  value?: string | null;
}
const Bypass = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.optional(Schema.Union([Schema.Literal("url"), Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Bypass>;

interface Header {
  /** The name of the response header to match. */
  name?: string | null;
  /** The operator used when matching: `eq` means "equal" and `ne` means "not equal". */
  op?: "eq" | "ne" | (string & {}) | null;
  /** The value of the response header, which must match exactly. */
  value?: string | null;
}
const Header = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    op: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["eq", "ne"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Header>;

interface Request {
  /** The HTTP methods to match. You can specify a subset (for example, `['POST','PUT']`) or all methods (`['_ALL_']`). This field is optional when creating a rate limit. */
  methods?:
    | (
        | "GET"
        | "POST"
        | "PUT"
        | "DELETE"
        | "PATCH"
        | "HEAD"
        | "_ALL_"
        | (string & {})
      )[]
    | null;
  /** The HTTP schemes to match. You can specify one scheme (`['HTTPS']`), both schemes (`['HTTP','HTTPS']`), or all schemes (`['_ALL_']`). This field is optional. */
  schemes?: string[] | null;
  /** The URL pattern to match, composed of a host and a path such as `example.org/path `. Normalization is applied before the pattern is matched. ` ` wildcards are expanded to match applicable traffic. Que */
  url?: string | null;
}
const Request = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    methods: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "GET",
              "POST",
              "PUT",
              "DELETE",
              "PATCH",
              "HEAD",
              "_ALL_",
            ]),
            Schema.String,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    schemes: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Request>;

interface Response2 {
  /** When true, only the uncached traffic served from your origin servers will count towards rate limiting. In this case, any cached traffic served by Cloudflare will not count towards rate limiting. This  */
  originTraffic?: boolean | null;
}
const Response2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    originTraffic: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(Schema.encodeKeys({ originTraffic: "origin_traffic" })),
) as unknown as Schema.Codec<Response2>;

interface Match {
  headers?:
    | {
        name?: string | null;
        op?: "eq" | "ne" | (string & {}) | null;
        value?: string | null;
      }[]
    | null;
  request?: {
    methods?:
      | (
          | "GET"
          | "POST"
          | "PUT"
          | "DELETE"
          | "PATCH"
          | "HEAD"
          | "_ALL_"
          | (string & {})
        )[]
      | null;
    schemes?: string[] | null;
    url?: string | null;
  } | null;
  response?: { originTraffic?: boolean | null } | null;
}
const Match = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    headers: Schema.optional(Schema.Union([Schema.Array(Header), Schema.Null])),
    request: Schema.optional(Schema.Union([Request, Schema.Null])),
    response: Schema.optional(Schema.Union([Response2, Schema.Null])),
  }),
) as unknown as Schema.Codec<Match>;

interface ListRateLimitsResponseResult {
  /** The unique identifier of the rate limit. */
  id?: string | null;
  /** The action to perform when the threshold of matched traffic within the configured period is exceeded. */
  action?: {
    mode?:
      | "simulate"
      | "ban"
      | "challenge"
      | "js_challenge"
      | "managed_challenge"
      | (string & {})
      | null;
    response?: { body?: string | null; contentType?: string | null } | null;
    timeout?: number | null;
  } | null;
  /** Criteria specifying when the current rate limit should be bypassed. You can specify that the rate limit should not apply to one or more URLs. */
  bypass?: { name?: "url" | null; value?: string | null }[] | null;
  /** An informative summary of the rule. This value is sanitized and any tags will be removed. */
  description?: string | null;
  /** When true, indicates that the rate limit is currently disabled. */
  disabled?: boolean | null;
  /** Determines which traffic the rate limit counts towards the threshold. */
  match?: {
    headers?:
      | {
          name?: string | null;
          op?: "eq" | "ne" | (string & {}) | null;
          value?: string | null;
        }[]
      | null;
    request?: {
      methods?:
        | (
            | "GET"
            | "POST"
            | "PUT"
            | "DELETE"
            | "PATCH"
            | "HEAD"
            | "_ALL_"
            | (string & {})
          )[]
        | null;
      schemes?: string[] | null;
      url?: string | null;
    } | null;
    response?: { originTraffic?: boolean | null } | null;
  } | null;
  /** The time in seconds (an integer value) to count matching traffic. If the count exceeds the configured threshold within this period, Cloudflare will perform the configured action. */
  period?: number | null;
  /** The threshold that will trigger the configured mitigation action. Configure this value along with the `period` property to establish a threshold per period. */
  threshold?: number | null;
}
const ListRateLimitsResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(Schema.Union([Action, Schema.Null])),
      bypass: Schema.optional(
        Schema.Union([Schema.Array(Bypass), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      disabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      match: Schema.optional(Schema.Union([Match, Schema.Null])),
      period: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      threshold: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }),
) as unknown as Schema.Codec<ListRateLimitsResponseResult>;

interface ListRateLimitsResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListRateLimitsResponseResultInfo =
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
  ) as unknown as Schema.Codec<ListRateLimitsResponseResultInfo>;

// =============================================================================
// RateLimit
// =============================================================================

export interface GetRateLimitRequest {
  rateLimitId: string;
  /** Defines an identifier. */
  zoneId: string;
}

export const GetRateLimitRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      rateLimitId: Schema.String.pipe(T.HttpPath("rateLimitId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/rate_limits/{rateLimitId}",
      }),
    ),
) as unknown as Schema.Codec<GetRateLimitRequest>;

export interface GetRateLimitResponse {
  /** The unique identifier of the rate limit. */
  id?: string | null;
  /** The action to perform when the threshold of matched traffic within the configured period is exceeded. */
  action?: {
    mode?:
      | "simulate"
      | "ban"
      | "challenge"
      | "js_challenge"
      | "managed_challenge"
      | (string & {})
      | null;
    response?: { body?: string | null; contentType?: string | null } | null;
    timeout?: number | null;
  } | null;
  /** Criteria specifying when the current rate limit should be bypassed. You can specify that the rate limit should not apply to one or more URLs. */
  bypass?: { name?: "url" | null; value?: string | null }[] | null;
  /** An informative summary of the rule. This value is sanitized and any tags will be removed. */
  description?: string | null;
  /** When true, indicates that the rate limit is currently disabled. */
  disabled?: boolean | null;
  /** Determines which traffic the rate limit counts towards the threshold. */
  match?: {
    headers?:
      | {
          name?: string | null;
          op?: "eq" | "ne" | (string & {}) | null;
          value?: string | null;
        }[]
      | null;
    request?: {
      methods?:
        | (
            | "GET"
            | "POST"
            | "PUT"
            | "DELETE"
            | "PATCH"
            | "HEAD"
            | "_ALL_"
            | (string & {})
          )[]
        | null;
      schemes?: string[] | null;
      url?: string | null;
    } | null;
    response?: { originTraffic?: boolean | null } | null;
  } | null;
  /** The time in seconds (an integer value) to count matching traffic. If the count exceeds the configured threshold within this period, Cloudflare will perform the configured action. */
  period?: number | null;
  /** The threshold that will trigger the configured mitigation action. Configure this value along with the `period` property to establish a threshold per period. */
  threshold?: number | null;
}

export const GetRateLimitResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(Schema.Union([Action, Schema.Null])),
      bypass: Schema.optional(
        Schema.Union([Schema.Array(Bypass), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      disabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      match: Schema.optional(Schema.Union([Match, Schema.Null])),
      period: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      threshold: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetRateLimitResponse>;

export type GetRateLimitError = DefaultErrors;

export const getRateLimit: API.OperationMethod<
  GetRateLimitRequest,
  GetRateLimitResponse,
  GetRateLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRateLimitRequest,
  output: GetRateLimitResponse,
  errors: [],
}));

export interface ListRateLimitsRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
}

export const ListRateLimitsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/rate_limits" })),
) as unknown as Schema.Codec<ListRateLimitsRequest>;

export interface ListRateLimitsResponse {
  result: {
    id?: string | null;
    action?: {
      mode?:
        | "simulate"
        | "ban"
        | "challenge"
        | "js_challenge"
        | "managed_challenge"
        | (string & {})
        | null;
      response?: { body?: string | null; contentType?: string | null } | null;
      timeout?: number | null;
    } | null;
    bypass?: { name?: "url" | null; value?: string | null }[] | null;
    description?: string | null;
    disabled?: boolean | null;
    match?: {
      headers?:
        | {
            name?: string | null;
            op?: "eq" | "ne" | (string & {}) | null;
            value?: string | null;
          }[]
        | null;
      request?: {
        methods?:
          | (
              | "GET"
              | "POST"
              | "PUT"
              | "DELETE"
              | "PATCH"
              | "HEAD"
              | "_ALL_"
              | (string & {})
            )[]
          | null;
        schemes?: string[] | null;
        url?: string | null;
      } | null;
      response?: { originTraffic?: boolean | null } | null;
    } | null;
    period?: number | null;
    threshold?: number | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListRateLimitsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListRateLimitsResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListRateLimitsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListRateLimitsResponse>;

export type ListRateLimitsError = DefaultErrors;

export const listRateLimits: API.PaginatedOperationMethod<
  ListRateLimitsRequest,
  ListRateLimitsResponse,
  ListRateLimitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRateLimitsRequest,
  output: ListRateLimitsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateRateLimitRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param: The action to perform when the threshold of matched traffic within the configured period is exceeded. */
  action: {
    mode?:
      | "simulate"
      | "ban"
      | "challenge"
      | "js_challenge"
      | "managed_challenge"
      | (string & {});
    response?: { body?: string; contentType?: string };
    timeout?: number;
  };
  /** Body param: Determines which traffic the rate limit counts towards the threshold. */
  match: {
    headers?: {
      name?: string;
      op?: "eq" | "ne" | (string & {});
      value?: string;
    }[];
    request?: {
      methods?: (
        | "GET"
        | "POST"
        | "PUT"
        | "DELETE"
        | "PATCH"
        | "HEAD"
        | "_ALL_"
        | (string & {})
      )[];
      schemes?: string[];
      url?: string;
    };
    response?: { originTraffic?: boolean };
  };
  /** Body param: The time in seconds (an integer value) to count matching traffic. If the count exceeds the configured threshold within this period, Cloudflare will perform the configured action. */
  period: number;
  /** Body param: The threshold that will trigger the configured mitigation action. Configure this value along with the `period` property to establish a threshold per period. */
  threshold: number;
}

export const CreateRateLimitRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      action: Action,
      match: Match,
      period: Schema.Number,
      threshold: Schema.Number,
    }).pipe(T.Http({ method: "POST", path: "/zones/{zone_id}/rate_limits" })),
  ) as unknown as Schema.Codec<CreateRateLimitRequest>;

export interface CreateRateLimitResponse {
  /** The unique identifier of the rate limit. */
  id?: string | null;
  /** The action to perform when the threshold of matched traffic within the configured period is exceeded. */
  action?: {
    mode?:
      | "simulate"
      | "ban"
      | "challenge"
      | "js_challenge"
      | "managed_challenge"
      | (string & {})
      | null;
    response?: { body?: string | null; contentType?: string | null } | null;
    timeout?: number | null;
  } | null;
  /** Criteria specifying when the current rate limit should be bypassed. You can specify that the rate limit should not apply to one or more URLs. */
  bypass?: { name?: "url" | null; value?: string | null }[] | null;
  /** An informative summary of the rule. This value is sanitized and any tags will be removed. */
  description?: string | null;
  /** When true, indicates that the rate limit is currently disabled. */
  disabled?: boolean | null;
  /** Determines which traffic the rate limit counts towards the threshold. */
  match?: {
    headers?:
      | {
          name?: string | null;
          op?: "eq" | "ne" | (string & {}) | null;
          value?: string | null;
        }[]
      | null;
    request?: {
      methods?:
        | (
            | "GET"
            | "POST"
            | "PUT"
            | "DELETE"
            | "PATCH"
            | "HEAD"
            | "_ALL_"
            | (string & {})
          )[]
        | null;
      schemes?: string[] | null;
      url?: string | null;
    } | null;
    response?: { originTraffic?: boolean | null } | null;
  } | null;
  /** The time in seconds (an integer value) to count matching traffic. If the count exceeds the configured threshold within this period, Cloudflare will perform the configured action. */
  period?: number | null;
  /** The threshold that will trigger the configured mitigation action. Configure this value along with the `period` property to establish a threshold per period. */
  threshold?: number | null;
}

export const CreateRateLimitResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(Schema.Union([Action, Schema.Null])),
      bypass: Schema.optional(
        Schema.Union([Schema.Array(Bypass), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      disabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      match: Schema.optional(Schema.Union([Match, Schema.Null])),
      period: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      threshold: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateRateLimitResponse>;

export type CreateRateLimitError = DefaultErrors;

export const createRateLimit: API.OperationMethod<
  CreateRateLimitRequest,
  CreateRateLimitResponse,
  CreateRateLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateRateLimitRequest,
  output: CreateRateLimitResponse,
  errors: [],
}));

export interface DeleteRateLimitRequest {
  rateLimitId: string;
  /** Defines an identifier. */
  zoneId: string;
}

export const DeleteRateLimitRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      rateLimitId: Schema.String.pipe(T.HttpPath("rateLimitId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/rate_limits/{rateLimitId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteRateLimitRequest>;

export interface DeleteRateLimitResponse {
  /** The unique identifier of the rate limit. */
  id?: string | null;
  /** The action to perform when the threshold of matched traffic within the configured period is exceeded. */
  action?: {
    mode?:
      | "simulate"
      | "ban"
      | "challenge"
      | "js_challenge"
      | "managed_challenge"
      | (string & {})
      | null;
    response?: { body?: string | null; contentType?: string | null } | null;
    timeout?: number | null;
  } | null;
  /** Criteria specifying when the current rate limit should be bypassed. You can specify that the rate limit should not apply to one or more URLs. */
  bypass?: { name?: "url" | null; value?: string | null }[] | null;
  /** An informative summary of the rule. This value is sanitized and any tags will be removed. */
  description?: string | null;
  /** When true, indicates that the rate limit is currently disabled. */
  disabled?: boolean | null;
  /** Determines which traffic the rate limit counts towards the threshold. */
  match?: {
    headers?:
      | {
          name?: string | null;
          op?: "eq" | "ne" | (string & {}) | null;
          value?: string | null;
        }[]
      | null;
    request?: {
      methods?:
        | (
            | "GET"
            | "POST"
            | "PUT"
            | "DELETE"
            | "PATCH"
            | "HEAD"
            | "_ALL_"
            | (string & {})
          )[]
        | null;
      schemes?: string[] | null;
      url?: string | null;
    } | null;
    response?: { originTraffic?: boolean | null } | null;
  } | null;
  /** The time in seconds (an integer value) to count matching traffic. If the count exceeds the configured threshold within this period, Cloudflare will perform the configured action. */
  period?: number | null;
  /** The threshold that will trigger the configured mitigation action. Configure this value along with the `period` property to establish a threshold per period. */
  threshold?: number | null;
}

export const DeleteRateLimitResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(Schema.Union([Action, Schema.Null])),
      bypass: Schema.optional(
        Schema.Union([Schema.Array(Bypass), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      disabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      match: Schema.optional(Schema.Union([Match, Schema.Null])),
      period: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      threshold: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteRateLimitResponse>;

export type DeleteRateLimitError = DefaultErrors;

export const deleteRateLimit: API.OperationMethod<
  DeleteRateLimitRequest,
  DeleteRateLimitResponse,
  DeleteRateLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRateLimitRequest,
  output: DeleteRateLimitResponse,
  errors: [],
}));

export interface EditRateLimitRequest {
  rateLimitId: string;
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param: The action to perform when the threshold of matched traffic within the configured period is exceeded. */
  action: {
    mode?:
      | "simulate"
      | "ban"
      | "challenge"
      | "js_challenge"
      | "managed_challenge"
      | (string & {});
    response?: { body?: string; contentType?: string };
    timeout?: number;
  };
  /** Body param: Determines which traffic the rate limit counts towards the threshold. */
  match: {
    headers?: {
      name?: string;
      op?: "eq" | "ne" | (string & {});
      value?: string;
    }[];
    request?: {
      methods?: (
        | "GET"
        | "POST"
        | "PUT"
        | "DELETE"
        | "PATCH"
        | "HEAD"
        | "_ALL_"
        | (string & {})
      )[];
      schemes?: string[];
      url?: string;
    };
    response?: { originTraffic?: boolean };
  };
  /** Body param: The time in seconds (an integer value) to count matching traffic. If the count exceeds the configured threshold within this period, Cloudflare will perform the configured action. */
  period: number;
  /** Body param: The threshold that will trigger the configured mitigation action. Configure this value along with the `period` property to establish a threshold per period. */
  threshold: number;
}

export const EditRateLimitRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      rateLimitId: Schema.String.pipe(T.HttpPath("rateLimitId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      action: Action,
      match: Match,
      period: Schema.Number,
      threshold: Schema.Number,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/rate_limits/{rateLimitId}",
      }),
    ),
) as unknown as Schema.Codec<EditRateLimitRequest>;

export interface EditRateLimitResponse {
  /** The unique identifier of the rate limit. */
  id?: string | null;
  /** The action to perform when the threshold of matched traffic within the configured period is exceeded. */
  action?: {
    mode?:
      | "simulate"
      | "ban"
      | "challenge"
      | "js_challenge"
      | "managed_challenge"
      | (string & {})
      | null;
    response?: { body?: string | null; contentType?: string | null } | null;
    timeout?: number | null;
  } | null;
  /** Criteria specifying when the current rate limit should be bypassed. You can specify that the rate limit should not apply to one or more URLs. */
  bypass?: { name?: "url" | null; value?: string | null }[] | null;
  /** An informative summary of the rule. This value is sanitized and any tags will be removed. */
  description?: string | null;
  /** When true, indicates that the rate limit is currently disabled. */
  disabled?: boolean | null;
  /** Determines which traffic the rate limit counts towards the threshold. */
  match?: {
    headers?:
      | {
          name?: string | null;
          op?: "eq" | "ne" | (string & {}) | null;
          value?: string | null;
        }[]
      | null;
    request?: {
      methods?:
        | (
            | "GET"
            | "POST"
            | "PUT"
            | "DELETE"
            | "PATCH"
            | "HEAD"
            | "_ALL_"
            | (string & {})
          )[]
        | null;
      schemes?: string[] | null;
      url?: string | null;
    } | null;
    response?: { originTraffic?: boolean | null } | null;
  } | null;
  /** The time in seconds (an integer value) to count matching traffic. If the count exceeds the configured threshold within this period, Cloudflare will perform the configured action. */
  period?: number | null;
  /** The threshold that will trigger the configured mitigation action. Configure this value along with the `period` property to establish a threshold per period. */
  threshold?: number | null;
}

export const EditRateLimitResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(Schema.Union([Action, Schema.Null])),
      bypass: Schema.optional(
        Schema.Union([Schema.Array(Bypass), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      disabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      match: Schema.optional(Schema.Union([Match, Schema.Null])),
      period: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      threshold: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<EditRateLimitResponse>;

export type EditRateLimitError = DefaultErrors;

export const editRateLimit: API.OperationMethod<
  EditRateLimitRequest,
  EditRateLimitResponse,
  EditRateLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EditRateLimitRequest,
  output: EditRateLimitResponse,
  errors: [],
}));
