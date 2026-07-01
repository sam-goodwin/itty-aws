/**
 * Cloudflare REQUEST-TRACERS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service request-tracers
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Body {
  /** Base64 encoded request body */
  base64?: string | null;
  /** Arbitrary json as request body */
  json?: unknown | null;
  /** Request body as plain text */
  plainText?: string | null;
}
const Body = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    base64: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    json: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    plainText: Schema.optional(Schema.Union([SensitiveString, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      base64: "base64",
      json: "json",
      plainText: "plain_text",
    }),
  ),
) as unknown as Schema.Codec<Body>;

interface Geoloc {
  city?: string | null;
  continent?: string | null;
  isEuCountry?: boolean | null;
  isoCode?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  postalCode?: string | null;
  regionCode?: string | null;
  subdivision_2IsoCode?: string | null;
  timezone?: string | null;
}
const Geoloc = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    city: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    continent: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    isEuCountry: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    isoCode: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    latitude: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    longitude: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    postalCode: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    regionCode: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    subdivision_2IsoCode: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    timezone: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      city: "city",
      continent: "continent",
      isEuCountry: "is_eu_country",
      isoCode: "iso_code",
      latitude: "latitude",
      longitude: "longitude",
      postalCode: "postal_code",
      regionCode: "region_code",
      subdivision_2IsoCode: "subdivision_2_iso_code",
      timezone: "timezone",
    }),
  ),
) as unknown as Schema.Codec<Geoloc>;

interface Context {
  /** Bot score used for evaluating tracing request processing */
  botScore?: number | null;
  /** Geodata for tracing request */
  geoloc?: {
    city?: string | null;
    continent?: string | null;
    isEuCountry?: boolean | null;
    isoCode?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    postalCode?: string | null;
    regionCode?: string | null;
    subdivision_2IsoCode?: string | null;
    timezone?: string | null;
  } | null;
  /** Whether to skip any challenges for tracing request (e.g.: captcha) */
  skipChallenge?: boolean | null;
  /** Threat score used for evaluating tracing request processing */
  threatScore?: number | null;
}
const Context = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    botScore: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    geoloc: Schema.optional(Schema.Union([Geoloc, Schema.Null])),
    skipChallenge: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    threatScore: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      botScore: "bot_score",
      geoloc: "geoloc",
      skipChallenge: "skip_challenge",
      threatScore: "threat_score",
    }),
  ),
) as unknown as Schema.Codec<Context>;

interface TraceItem {
  /** If step type is rule, then action performed by this rule */
  action?: string | null;
  /** If step type is rule, then action parameters of this rule as JSON */
  actionParameters?: unknown | null;
  /** If step type is rule or ruleset, the description of this entity */
  description?: string | null;
  /** If step type is rule, then expression used to match for this rule */
  expression?: string | null;
  /** If step type is ruleset, then kind of this ruleset */
  kind?: string | null;
  /** Whether tracing step affected tracing request/response */
  matched?: boolean | null;
  /** If step type is ruleset, then name of this ruleset */
  name?: string | null;
  /** Tracing step identifying name */
  stepName?: string | null;
  trace?: unknown | null;
  /** Tracing step type */
  type?: string | null;
}
const TraceItem = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    action: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    actionParameters: Schema.optional(
      Schema.Union([Schema.Unknown, Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    kind: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    matched: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    stepName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    trace: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      action: "action",
      actionParameters: "action_parameters",
      description: "description",
      expression: "expression",
      kind: "kind",
      matched: "matched",
      name: "name",
      stepName: "step_name",
      trace: "trace",
      type: "type",
    }),
  ),
) as unknown as Schema.Codec<TraceItem>;

// =============================================================================
// Trace
// =============================================================================

export interface CreateTraceRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: HTTP Method of tracing request */
  method: string;
  /** Body param: URL to which perform tracing request */
  url: string;
  /** Body param */
  body?: { base64?: string; json?: unknown; plainText?: string };
  /** Body param: Additional request parameters */
  context?: {
    botScore?: number;
    geoloc?: {
      city?: string;
      continent?: string;
      isEuCountry?: boolean;
      isoCode?: string;
      latitude?: number;
      longitude?: number;
      postalCode?: string;
      regionCode?: string;
      subdivision_2IsoCode?: string;
      timezone?: string;
    };
    skipChallenge?: boolean;
    threatScore?: number;
  };
  /** Body param: Cookies added to tracing request */
  cookies?: Record<string, unknown>;
  /** Body param: Headers added to tracing request */
  headers?: Record<string, unknown>;
  /** Body param: HTTP Protocol of tracing request */
  protocol?: string;
  /** Body param: Skip sending the request to the Origin server after all rules evaluation */
  skipResponse?: boolean;
}

export const CreateTraceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      method: Schema.String,
      url: Schema.String,
      body: Schema.optional(Body),
      context: Schema.optional(Context),
      cookies: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      headers: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      protocol: Schema.optional(Schema.String),
      skipResponse: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        method: "method",
        url: "url",
        body: "body",
        context: "context",
        cookies: "cookies",
        headers: "headers",
        protocol: "protocol",
        skipResponse: "skip_response",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/request-tracer/trace",
      }),
    ),
) as unknown as Schema.Codec<CreateTraceRequest>;

export interface CreateTraceResponse {
  /** HTTP Status code of zone response */
  statusCode?: number | null;
  trace?:
    | {
        action?: string | null;
        actionParameters?: unknown | null;
        description?: string | null;
        expression?: string | null;
        kind?: string | null;
        matched?: boolean | null;
        name?: string | null;
        stepName?: string | null;
        trace?: unknown | null;
        type?: string | null;
      }[]
    | null;
}

export const CreateTraceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      statusCode: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      trace: Schema.optional(
        Schema.Union([Schema.Array(TraceItem), Schema.Null]),
      ),
    })
      .pipe(Schema.encodeKeys({ statusCode: "status_code", trace: "trace" }))
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateTraceResponse>;

export type CreateTraceError = DefaultErrors;

export const createTrace: API.OperationMethod<
  CreateTraceRequest,
  CreateTraceResponse,
  CreateTraceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateTraceRequest,
  output: CreateTraceResponse,
  errors: [],
}));
