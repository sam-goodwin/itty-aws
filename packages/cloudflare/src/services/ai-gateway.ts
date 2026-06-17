/**
 * Cloudflare AI-GATEWAY API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service ai-gateway
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Errors
// =============================================================================

export class DatasetNameAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DatasetNameAlreadyExists>()(
    "DatasetNameAlreadyExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 400, message: { includes: "already exists" } }],
) {}

export class DatasetNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DatasetNotFound>()("DatasetNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7002 }],
) {}

export class EvaluationNameAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<EvaluationNameAlreadyExists>()(
    "EvaluationNameAlreadyExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 400, message: { includes: "already exists" } }],
) {}

export class EvaluationNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<EvaluationNotFound>()("EvaluationNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7002 }],
) {}

export class GatewayAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<GatewayAlreadyExists>()("GatewayAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7001 }, { status: 504 }],
) {}

export class GatewayNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<GatewayNotFound>()("GatewayNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7002 }],
) {}

export class NoManualTopup extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NoManualTopup>()("NoManualTopup", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1000, message: { includes: "NO_MANUAL_TOPUP" } }],
) {}

export class ProviderConfigAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ProviderConfigAlreadyExists>()(
    "ProviderConfigAlreadyExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 7001, message: { includes: "already exists" } }],
) {}

export class ProviderConfigNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ProviderConfigNotFound>()("ProviderConfigNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7002 }],
) {}

export class ProviderConfigSecretNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ProviderConfigSecretNotFound>()(
    "ProviderConfigSecretNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 7001, message: { includes: "was not found" } }],
) {}

export class RouteAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<RouteAlreadyExists>()("RouteAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7005, message: { includes: "already exists" } }],
) {}

export class RouteNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<RouteNotFound>()("RouteNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7005, message: { includes: "not found" } }],
) {}

// =============================================================================
// AiGateway
// =============================================================================

export interface GetAiGatewayRequest {
  id: string;
  accountId: string;
}

export const GetAiGatewayRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/gateways/{id}",
      }),
    ),
) as unknown as Schema.Schema<GetAiGatewayRequest>;

export interface GetAiGatewayResponse {
  /** gateway id */
  id: string;
  cacheInvalidateOnUpdate: boolean;
  cacheTtl: number | null;
  collectLogs: boolean;
  createdAt: string;
  modifiedAt: string;
  rateLimitingInterval: number | null;
  rateLimitingLimit: number | null;
  authentication?: boolean | null;
  dlp?:
    | {
        action: "BLOCK" | "FLAG" | (string & {});
        enabled: boolean;
        profiles: string[];
      }
    | {
        enabled: boolean;
        policies: {
          id: string;
          action: "FLAG" | "BLOCK" | (string & {});
          check: ("REQUEST" | "RESPONSE" | (string & {}))[];
          enabled: boolean;
          profiles: string[];
        }[];
      }
    | null;
  guardrails?: {
    prompt: {
      p1?: "FLAG" | "BLOCK" | (string & {}) | null;
      s1?: "FLAG" | "BLOCK" | (string & {}) | null;
      s10?: "FLAG" | "BLOCK" | (string & {}) | null;
      s11?: "FLAG" | "BLOCK" | (string & {}) | null;
      s12?: "FLAG" | "BLOCK" | (string & {}) | null;
      s13?: "FLAG" | "BLOCK" | (string & {}) | null;
      s2?: "FLAG" | "BLOCK" | (string & {}) | null;
      s3?: "FLAG" | "BLOCK" | (string & {}) | null;
      s4?: "FLAG" | "BLOCK" | (string & {}) | null;
      s5?: "FLAG" | "BLOCK" | (string & {}) | null;
      s6?: "FLAG" | "BLOCK" | (string & {}) | null;
      s7?: "FLAG" | "BLOCK" | (string & {}) | null;
      s8?: "FLAG" | "BLOCK" | (string & {}) | null;
      s9?: "FLAG" | "BLOCK" | (string & {}) | null;
    };
    response: {
      p1?: "FLAG" | "BLOCK" | (string & {}) | null;
      s1?: "FLAG" | "BLOCK" | (string & {}) | null;
      s10?: "FLAG" | "BLOCK" | (string & {}) | null;
      s11?: "FLAG" | "BLOCK" | (string & {}) | null;
      s12?: "FLAG" | "BLOCK" | (string & {}) | null;
      s13?: "FLAG" | "BLOCK" | (string & {}) | null;
      s2?: "FLAG" | "BLOCK" | (string & {}) | null;
      s3?: "FLAG" | "BLOCK" | (string & {}) | null;
      s4?: "FLAG" | "BLOCK" | (string & {}) | null;
      s5?: "FLAG" | "BLOCK" | (string & {}) | null;
      s6?: "FLAG" | "BLOCK" | (string & {}) | null;
      s7?: "FLAG" | "BLOCK" | (string & {}) | null;
      s8?: "FLAG" | "BLOCK" | (string & {}) | null;
      s9?: "FLAG" | "BLOCK" | (string & {}) | null;
    };
  } | null;
  isDefault?: boolean | null;
  logManagement?: number | null;
  logManagementStrategy?: "STOP_INSERTING" | "DELETE_OLDEST" | null;
  logpush?: boolean | null;
  logpushPublicKey?: string | null;
  otel?:
    | {
        headers: Record<string, unknown>;
        url: string;
        authorization?: string | null;
        contentType?: "json" | "protobuf" | (string & {}) | null;
      }[]
    | null;
  rateLimitingTechnique?: "fixed" | "sliding" | null;
  /** Backoff strategy for retry delays */
  retryBackoff?: "constant" | "linear" | "exponential" | null;
  /** Delay between retry attempts in milliseconds (0-5000) */
  retryDelay?: number | null;
  /** Maximum number of retry attempts for failed requests (1-5) */
  retryMaxAttempts?: number | null;
  spendLimits?: {
    enabled?: boolean | null;
    rules?:
      | {
          limit: number;
          limitType: "cost";
          window: number;
          id?: string | null;
          enabled?: boolean | null;
          metadata?: Record<string, unknown> | null;
          model?: { mode: "filter"; values: string[] } | null;
          provider?: { mode: "filter"; values: string[] } | null;
          technique?: "fixed" | "sliding" | (string & {}) | null;
        }[]
      | null;
  } | null;
  storeId?: string | null;
  stripe?: { authorization: string; usageEvents: { payload: string }[] } | null;
  /** Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. */
  workersAiBillingMode?: "postpaid" | null;
  zdr?: boolean | null;
}

export const GetAiGatewayResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      cacheInvalidateOnUpdate: Schema.Boolean,
      cacheTtl: Schema.Union([Schema.Number, Schema.Null]),
      collectLogs: Schema.Boolean,
      createdAt: Schema.String,
      modifiedAt: Schema.String,
      rateLimitingInterval: Schema.Union([Schema.Number, Schema.Null]),
      rateLimitingLimit: Schema.Union([Schema.Number, Schema.Null]),
      authentication: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      dlp: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Struct({
              action: Schema.Union([
                Schema.Literals(["BLOCK", "FLAG"]),
                Schema.String,
              ]),
              enabled: Schema.Boolean,
              profiles: Schema.Array(Schema.String),
            }),
            Schema.Struct({
              enabled: Schema.Boolean,
              policies: Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                  action: Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  check: Schema.Array(
                    Schema.Union([
                      Schema.Literals(["REQUEST", "RESPONSE"]),
                      Schema.String,
                    ]),
                  ),
                  enabled: Schema.Boolean,
                  profiles: Schema.Array(Schema.String),
                }),
              ),
            }),
          ]),
          Schema.Null,
        ]),
      ),
      guardrails: Schema.optional(
        Schema.Union([
          Schema.Struct({
            prompt: Schema.Struct({
              p1: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s1: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s10: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s11: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s12: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s13: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s2: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s3: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s4: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s5: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s6: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s7: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s8: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s9: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                p1: "P1",
                s1: "S1",
                s10: "S10",
                s11: "S11",
                s12: "S12",
                s13: "S13",
                s2: "S2",
                s3: "S3",
                s4: "S4",
                s5: "S5",
                s6: "S6",
                s7: "S7",
                s8: "S8",
                s9: "S9",
              }),
            ),
            response: Schema.Struct({
              p1: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s1: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s10: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s11: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s12: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s13: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s2: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s3: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s4: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s5: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s6: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s7: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s8: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s9: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                p1: "P1",
                s1: "S1",
                s10: "S10",
                s11: "S11",
                s12: "S12",
                s13: "S13",
                s2: "S2",
                s3: "S3",
                s4: "S4",
                s5: "S5",
                s6: "S6",
                s7: "S7",
                s8: "S8",
                s9: "S9",
              }),
            ),
          }),
          Schema.Null,
        ]),
      ),
      isDefault: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      logManagement: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      logManagementStrategy: Schema.optional(
        Schema.Union([
          Schema.Literal("STOP_INSERTING"),
          Schema.Literal("DELETE_OLDEST"),
          Schema.Null,
        ]),
      ),
      logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      logpushPublicKey: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      otel: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              headers: Schema.Record(Schema.String, Schema.Unknown),
              url: Schema.String,
              authorization: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              contentType: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["json", "protobuf"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                headers: "headers",
                url: "url",
                authorization: "authorization",
                contentType: "content_type",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
      rateLimitingTechnique: Schema.optional(
        Schema.Union([
          Schema.Literal("fixed"),
          Schema.Literal("sliding"),
          Schema.Null,
        ]),
      ),
      retryBackoff: Schema.optional(
        Schema.Union([
          Schema.Literal("constant"),
          Schema.Literal("linear"),
          Schema.Literal("exponential"),
          Schema.Null,
        ]),
      ),
      retryDelay: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      retryMaxAttempts: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      spendLimits: Schema.optional(
        Schema.Union([
          Schema.Struct({
            enabled: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            rules: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    limit: Schema.Number,
                    limitType: Schema.Literal("cost"),
                    window: Schema.Number,
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    enabled: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                    metadata: Schema.optional(
                      Schema.Union([
                        Schema.Record(Schema.String, Schema.Unknown),
                        Schema.Null,
                      ]),
                    ),
                    model: Schema.optional(
                      Schema.Union([
                        Schema.Struct({
                          mode: Schema.Literal("filter"),
                          values: Schema.Array(Schema.String),
                        }),
                        Schema.Null,
                      ]),
                    ),
                    provider: Schema.optional(
                      Schema.Union([
                        Schema.Struct({
                          mode: Schema.Literal("filter"),
                          values: Schema.Array(Schema.String),
                        }),
                        Schema.Null,
                      ]),
                    ),
                    technique: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals(["fixed", "sliding"]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      storeId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      stripe: Schema.optional(
        Schema.Union([
          Schema.Struct({
            authorization: Schema.String,
            usageEvents: Schema.Array(
              Schema.Struct({
                payload: Schema.String,
              }),
            ),
          }).pipe(
            Schema.encodeKeys({
              authorization: "authorization",
              usageEvents: "usage_events",
            }),
          ),
          Schema.Null,
        ]),
      ),
      workersAiBillingMode: Schema.optional(
        Schema.Union([Schema.Literal("postpaid"), Schema.Null]),
      ),
      zdr: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          cacheInvalidateOnUpdate: "cache_invalidate_on_update",
          cacheTtl: "cache_ttl",
          collectLogs: "collect_logs",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          rateLimitingInterval: "rate_limiting_interval",
          rateLimitingLimit: "rate_limiting_limit",
          authentication: "authentication",
          dlp: "dlp",
          guardrails: "guardrails",
          isDefault: "is_default",
          logManagement: "log_management",
          logManagementStrategy: "log_management_strategy",
          logpush: "logpush",
          logpushPublicKey: "logpush_public_key",
          otel: "otel",
          rateLimitingTechnique: "rate_limiting_technique",
          retryBackoff: "retry_backoff",
          retryDelay: "retry_delay",
          retryMaxAttempts: "retry_max_attempts",
          spendLimits: "spend_limits",
          storeId: "store_id",
          stripe: "stripe",
          workersAiBillingMode: "workers_ai_billing_mode",
          zdr: "zdr",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetAiGatewayResponse>;

export type GetAiGatewayError = DefaultErrors | GatewayNotFound;

export const getAiGateway: API.OperationMethod<
  GetAiGatewayRequest,
  GetAiGatewayResponse,
  GetAiGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAiGatewayRequest,
  output: GetAiGatewayResponse,
  errors: [GatewayNotFound],
}));

export interface ListAiGatewaysRequest {
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Search by id */
  search?: string;
}

export const ListAiGatewaysRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/gateways",
      }),
    ),
) as unknown as Schema.Schema<ListAiGatewaysRequest>;

export interface ListAiGatewaysResponse {
  result: {
    id: string;
    cacheInvalidateOnUpdate: boolean;
    cacheTtl: number | null;
    collectLogs: boolean;
    createdAt: string;
    modifiedAt: string;
    rateLimitingInterval: number | null;
    rateLimitingLimit: number | null;
    authentication?: boolean | null;
    dlp?:
      | {
          action: "BLOCK" | "FLAG" | (string & {});
          enabled: boolean;
          profiles: string[];
        }
      | {
          enabled: boolean;
          policies: {
            id: string;
            action: "FLAG" | "BLOCK" | (string & {});
            check: ("REQUEST" | "RESPONSE" | (string & {}))[];
            enabled: boolean;
            profiles: string[];
          }[];
        }
      | null;
    guardrails?: {
      prompt: {
        p1?: "FLAG" | "BLOCK" | (string & {}) | null;
        s1?: "FLAG" | "BLOCK" | (string & {}) | null;
        s10?: "FLAG" | "BLOCK" | (string & {}) | null;
        s11?: "FLAG" | "BLOCK" | (string & {}) | null;
        s12?: "FLAG" | "BLOCK" | (string & {}) | null;
        s13?: "FLAG" | "BLOCK" | (string & {}) | null;
        s2?: "FLAG" | "BLOCK" | (string & {}) | null;
        s3?: "FLAG" | "BLOCK" | (string & {}) | null;
        s4?: "FLAG" | "BLOCK" | (string & {}) | null;
        s5?: "FLAG" | "BLOCK" | (string & {}) | null;
        s6?: "FLAG" | "BLOCK" | (string & {}) | null;
        s7?: "FLAG" | "BLOCK" | (string & {}) | null;
        s8?: "FLAG" | "BLOCK" | (string & {}) | null;
        s9?: "FLAG" | "BLOCK" | (string & {}) | null;
      };
      response: {
        p1?: "FLAG" | "BLOCK" | (string & {}) | null;
        s1?: "FLAG" | "BLOCK" | (string & {}) | null;
        s10?: "FLAG" | "BLOCK" | (string & {}) | null;
        s11?: "FLAG" | "BLOCK" | (string & {}) | null;
        s12?: "FLAG" | "BLOCK" | (string & {}) | null;
        s13?: "FLAG" | "BLOCK" | (string & {}) | null;
        s2?: "FLAG" | "BLOCK" | (string & {}) | null;
        s3?: "FLAG" | "BLOCK" | (string & {}) | null;
        s4?: "FLAG" | "BLOCK" | (string & {}) | null;
        s5?: "FLAG" | "BLOCK" | (string & {}) | null;
        s6?: "FLAG" | "BLOCK" | (string & {}) | null;
        s7?: "FLAG" | "BLOCK" | (string & {}) | null;
        s8?: "FLAG" | "BLOCK" | (string & {}) | null;
        s9?: "FLAG" | "BLOCK" | (string & {}) | null;
      };
    } | null;
    isDefault?: boolean | null;
    logManagement?: number | null;
    logManagementStrategy?: "STOP_INSERTING" | "DELETE_OLDEST" | null;
    logpush?: boolean | null;
    logpushPublicKey?: string | null;
    otel?:
      | {
          headers: Record<string, unknown>;
          url: string;
          authorization?: string | null;
          contentType?: "json" | "protobuf" | (string & {}) | null;
        }[]
      | null;
    rateLimitingTechnique?: "fixed" | "sliding" | null;
    retryBackoff?: "constant" | "linear" | "exponential" | null;
    retryDelay?: number | null;
    retryMaxAttempts?: number | null;
    spendLimits?: {
      enabled?: boolean | null;
      rules?:
        | {
            limit: number;
            limitType: "cost";
            window: number;
            id?: string | null;
            enabled?: boolean | null;
            metadata?: Record<string, unknown> | null;
            model?: { mode: "filter"; values: string[] } | null;
            provider?: { mode: "filter"; values: string[] } | null;
            technique?: "fixed" | "sliding" | (string & {}) | null;
          }[]
        | null;
    } | null;
    storeId?: string | null;
    stripe?: {
      authorization: string;
      usageEvents: { payload: string }[];
    } | null;
    workersAiBillingMode?: "postpaid" | null;
    zdr?: boolean | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListAiGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          cacheInvalidateOnUpdate: Schema.Boolean,
          cacheTtl: Schema.Union([Schema.Number, Schema.Null]),
          collectLogs: Schema.Boolean,
          createdAt: Schema.String,
          modifiedAt: Schema.String,
          rateLimitingInterval: Schema.Union([Schema.Number, Schema.Null]),
          rateLimitingLimit: Schema.Union([Schema.Number, Schema.Null]),
          authentication: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          dlp: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Struct({
                  action: Schema.Union([
                    Schema.Literals(["BLOCK", "FLAG"]),
                    Schema.String,
                  ]),
                  enabled: Schema.Boolean,
                  profiles: Schema.Array(Schema.String),
                }),
                Schema.Struct({
                  enabled: Schema.Boolean,
                  policies: Schema.Array(
                    Schema.Struct({
                      id: Schema.String,
                      action: Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      check: Schema.Array(
                        Schema.Union([
                          Schema.Literals(["REQUEST", "RESPONSE"]),
                          Schema.String,
                        ]),
                      ),
                      enabled: Schema.Boolean,
                      profiles: Schema.Array(Schema.String),
                    }),
                  ),
                }),
              ]),
              Schema.Null,
            ]),
          ),
          guardrails: Schema.optional(
            Schema.Union([
              Schema.Struct({
                prompt: Schema.Struct({
                  p1: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s1: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s10: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s11: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s12: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s13: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s2: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s3: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s4: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s5: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s6: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s7: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s8: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s9: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    p1: "P1",
                    s1: "S1",
                    s10: "S10",
                    s11: "S11",
                    s12: "S12",
                    s13: "S13",
                    s2: "S2",
                    s3: "S3",
                    s4: "S4",
                    s5: "S5",
                    s6: "S6",
                    s7: "S7",
                    s8: "S8",
                    s9: "S9",
                  }),
                ),
                response: Schema.Struct({
                  p1: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s1: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s10: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s11: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s12: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s13: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s2: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s3: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s4: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s5: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s6: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s7: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s8: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  s9: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["FLAG", "BLOCK"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    p1: "P1",
                    s1: "S1",
                    s10: "S10",
                    s11: "S11",
                    s12: "S12",
                    s13: "S13",
                    s2: "S2",
                    s3: "S3",
                    s4: "S4",
                    s5: "S5",
                    s6: "S6",
                    s7: "S7",
                    s8: "S8",
                    s9: "S9",
                  }),
                ),
              }),
              Schema.Null,
            ]),
          ),
          isDefault: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          logManagement: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
          logManagementStrategy: Schema.optional(
            Schema.Union([
              Schema.Literal("STOP_INSERTING"),
              Schema.Literal("DELETE_OLDEST"),
              Schema.Null,
            ]),
          ),
          logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
          logpushPublicKey: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          otel: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  headers: Schema.Record(Schema.String, Schema.Unknown),
                  url: Schema.String,
                  authorization: Schema.optional(
                    Schema.Union([Schema.String, Schema.Null]),
                  ),
                  contentType: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["json", "protobuf"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    headers: "headers",
                    url: "url",
                    authorization: "authorization",
                    contentType: "content_type",
                  }),
                ),
              ),
              Schema.Null,
            ]),
          ),
          rateLimitingTechnique: Schema.optional(
            Schema.Union([
              Schema.Literal("fixed"),
              Schema.Literal("sliding"),
              Schema.Null,
            ]),
          ),
          retryBackoff: Schema.optional(
            Schema.Union([
              Schema.Literal("constant"),
              Schema.Literal("linear"),
              Schema.Literal("exponential"),
              Schema.Null,
            ]),
          ),
          retryDelay: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
          retryMaxAttempts: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
          spendLimits: Schema.optional(
            Schema.Union([
              Schema.Struct({
                enabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
                rules: Schema.optional(
                  Schema.Union([
                    Schema.Array(
                      Schema.Struct({
                        limit: Schema.Number,
                        limitType: Schema.Literal("cost"),
                        window: Schema.Number,
                        id: Schema.optional(
                          Schema.Union([Schema.String, Schema.Null]),
                        ),
                        enabled: Schema.optional(
                          Schema.Union([Schema.Boolean, Schema.Null]),
                        ),
                        metadata: Schema.optional(
                          Schema.Union([
                            Schema.Record(Schema.String, Schema.Unknown),
                            Schema.Null,
                          ]),
                        ),
                        model: Schema.optional(
                          Schema.Union([
                            Schema.Struct({
                              mode: Schema.Literal("filter"),
                              values: Schema.Array(Schema.String),
                            }),
                            Schema.Null,
                          ]),
                        ),
                        provider: Schema.optional(
                          Schema.Union([
                            Schema.Struct({
                              mode: Schema.Literal("filter"),
                              values: Schema.Array(Schema.String),
                            }),
                            Schema.Null,
                          ]),
                        ),
                        technique: Schema.optional(
                          Schema.Union([
                            Schema.Union([
                              Schema.Literals(["fixed", "sliding"]),
                              Schema.String,
                            ]),
                            Schema.Null,
                          ]),
                        ),
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          storeId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          stripe: Schema.optional(
            Schema.Union([
              Schema.Struct({
                authorization: Schema.String,
                usageEvents: Schema.Array(
                  Schema.Struct({
                    payload: Schema.String,
                  }),
                ),
              }).pipe(
                Schema.encodeKeys({
                  authorization: "authorization",
                  usageEvents: "usage_events",
                }),
              ),
              Schema.Null,
            ]),
          ),
          workersAiBillingMode: Schema.optional(
            Schema.Union([Schema.Literal("postpaid"), Schema.Null]),
          ),
          zdr: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            cacheInvalidateOnUpdate: "cache_invalidate_on_update",
            cacheTtl: "cache_ttl",
            collectLogs: "collect_logs",
            createdAt: "created_at",
            modifiedAt: "modified_at",
            rateLimitingInterval: "rate_limiting_interval",
            rateLimitingLimit: "rate_limiting_limit",
            authentication: "authentication",
            dlp: "dlp",
            guardrails: "guardrails",
            isDefault: "is_default",
            logManagement: "log_management",
            logManagementStrategy: "log_management_strategy",
            logpush: "logpush",
            logpushPublicKey: "logpush_public_key",
            otel: "otel",
            rateLimitingTechnique: "rate_limiting_technique",
            retryBackoff: "retry_backoff",
            retryDelay: "retry_delay",
            retryMaxAttempts: "retry_max_attempts",
            spendLimits: "spend_limits",
            storeId: "store_id",
            stripe: "stripe",
            workersAiBillingMode: "workers_ai_billing_mode",
            zdr: "zdr",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListAiGatewaysResponse>;

export type ListAiGatewaysError = DefaultErrors;

export const listAiGateways: API.PaginatedOperationMethod<
  ListAiGatewaysRequest,
  ListAiGatewaysResponse,
  ListAiGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAiGatewaysRequest,
  output: ListAiGatewaysResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateAiGatewayRequest {
  /** Path param */
  accountId: string;
  /** Body param: gateway id */
  id: string;
  /** Body param */
  cacheInvalidateOnUpdate: boolean;
  /** Body param */
  cacheTtl: number | null;
  /** Body param */
  collectLogs: boolean;
  /** Body param */
  rateLimitingInterval: number | null;
  /** Body param */
  rateLimitingLimit: number | null;
  /** Body param */
  authentication?: boolean;
  /** Body param */
  logManagement?: number | null;
  /** Body param */
  logManagementStrategy?: "STOP_INSERTING" | "DELETE_OLDEST" | null;
  /** Body param */
  logpush?: boolean;
  /** Body param */
  logpushPublicKey?: string | null;
  /** Body param */
  rateLimitingTechnique?: "fixed" | "sliding" | null;
  /** Body param: Backoff strategy for retry delays */
  retryBackoff?: "constant" | "linear" | "exponential" | null;
  /** Body param: Delay between retry attempts in milliseconds (0-5000) */
  retryDelay?: number | null;
  /** Body param: Maximum number of retry attempts for failed requests (1-5) */
  retryMaxAttempts?: number | null;
  /** Body param: Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. */
  workersAiBillingMode?: "postpaid";
  /** Body param */
  zdr?: boolean;
}

export const CreateAiGatewayRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      id: Schema.String,
      cacheInvalidateOnUpdate: Schema.Boolean,
      cacheTtl: Schema.Union([Schema.Number, Schema.Null]),
      collectLogs: Schema.Boolean,
      rateLimitingInterval: Schema.Union([Schema.Number, Schema.Null]),
      rateLimitingLimit: Schema.Union([Schema.Number, Schema.Null]),
      authentication: Schema.optional(Schema.Boolean),
      logManagement: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      logManagementStrategy: Schema.optional(
        Schema.Union([
          Schema.Literal("STOP_INSERTING"),
          Schema.Literal("DELETE_OLDEST"),
          Schema.Null,
        ]),
      ),
      logpush: Schema.optional(Schema.Boolean),
      logpushPublicKey: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      rateLimitingTechnique: Schema.optional(
        Schema.Union([
          Schema.Literal("fixed"),
          Schema.Literal("sliding"),
          Schema.Null,
        ]),
      ),
      retryBackoff: Schema.optional(
        Schema.Union([
          Schema.Literal("constant"),
          Schema.Literal("linear"),
          Schema.Literal("exponential"),
          Schema.Null,
        ]),
      ),
      retryDelay: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      retryMaxAttempts: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      workersAiBillingMode: Schema.optional(Schema.Literal("postpaid")),
      zdr: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        cacheInvalidateOnUpdate: "cache_invalidate_on_update",
        cacheTtl: "cache_ttl",
        collectLogs: "collect_logs",
        rateLimitingInterval: "rate_limiting_interval",
        rateLimitingLimit: "rate_limiting_limit",
        authentication: "authentication",
        logManagement: "log_management",
        logManagementStrategy: "log_management_strategy",
        logpush: "logpush",
        logpushPublicKey: "logpush_public_key",
        rateLimitingTechnique: "rate_limiting_technique",
        retryBackoff: "retry_backoff",
        retryDelay: "retry_delay",
        retryMaxAttempts: "retry_max_attempts",
        workersAiBillingMode: "workers_ai_billing_mode",
        zdr: "zdr",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-gateway/gateways",
      }),
    ),
  ) as unknown as Schema.Schema<CreateAiGatewayRequest>;

export interface CreateAiGatewayResponse {
  /** gateway id */
  id: string;
  cacheInvalidateOnUpdate: boolean;
  cacheTtl: number | null;
  collectLogs: boolean;
  createdAt: string;
  modifiedAt: string;
  rateLimitingInterval: number | null;
  rateLimitingLimit: number | null;
  authentication?: boolean | null;
  dlp?:
    | {
        action: "BLOCK" | "FLAG" | (string & {});
        enabled: boolean;
        profiles: string[];
      }
    | {
        enabled: boolean;
        policies: {
          id: string;
          action: "FLAG" | "BLOCK" | (string & {});
          check: ("REQUEST" | "RESPONSE" | (string & {}))[];
          enabled: boolean;
          profiles: string[];
        }[];
      }
    | null;
  guardrails?: {
    prompt: {
      p1?: "FLAG" | "BLOCK" | (string & {}) | null;
      s1?: "FLAG" | "BLOCK" | (string & {}) | null;
      s10?: "FLAG" | "BLOCK" | (string & {}) | null;
      s11?: "FLAG" | "BLOCK" | (string & {}) | null;
      s12?: "FLAG" | "BLOCK" | (string & {}) | null;
      s13?: "FLAG" | "BLOCK" | (string & {}) | null;
      s2?: "FLAG" | "BLOCK" | (string & {}) | null;
      s3?: "FLAG" | "BLOCK" | (string & {}) | null;
      s4?: "FLAG" | "BLOCK" | (string & {}) | null;
      s5?: "FLAG" | "BLOCK" | (string & {}) | null;
      s6?: "FLAG" | "BLOCK" | (string & {}) | null;
      s7?: "FLAG" | "BLOCK" | (string & {}) | null;
      s8?: "FLAG" | "BLOCK" | (string & {}) | null;
      s9?: "FLAG" | "BLOCK" | (string & {}) | null;
    };
    response: {
      p1?: "FLAG" | "BLOCK" | (string & {}) | null;
      s1?: "FLAG" | "BLOCK" | (string & {}) | null;
      s10?: "FLAG" | "BLOCK" | (string & {}) | null;
      s11?: "FLAG" | "BLOCK" | (string & {}) | null;
      s12?: "FLAG" | "BLOCK" | (string & {}) | null;
      s13?: "FLAG" | "BLOCK" | (string & {}) | null;
      s2?: "FLAG" | "BLOCK" | (string & {}) | null;
      s3?: "FLAG" | "BLOCK" | (string & {}) | null;
      s4?: "FLAG" | "BLOCK" | (string & {}) | null;
      s5?: "FLAG" | "BLOCK" | (string & {}) | null;
      s6?: "FLAG" | "BLOCK" | (string & {}) | null;
      s7?: "FLAG" | "BLOCK" | (string & {}) | null;
      s8?: "FLAG" | "BLOCK" | (string & {}) | null;
      s9?: "FLAG" | "BLOCK" | (string & {}) | null;
    };
  } | null;
  isDefault?: boolean | null;
  logManagement?: number | null;
  logManagementStrategy?: "STOP_INSERTING" | "DELETE_OLDEST" | null;
  logpush?: boolean | null;
  logpushPublicKey?: string | null;
  otel?:
    | {
        headers: Record<string, unknown>;
        url: string;
        authorization?: string | null;
        contentType?: "json" | "protobuf" | (string & {}) | null;
      }[]
    | null;
  rateLimitingTechnique?: "fixed" | "sliding" | null;
  /** Backoff strategy for retry delays */
  retryBackoff?: "constant" | "linear" | "exponential" | null;
  /** Delay between retry attempts in milliseconds (0-5000) */
  retryDelay?: number | null;
  /** Maximum number of retry attempts for failed requests (1-5) */
  retryMaxAttempts?: number | null;
  spendLimits?: {
    enabled?: boolean | null;
    rules?:
      | {
          limit: number;
          limitType: "cost";
          window: number;
          id?: string | null;
          enabled?: boolean | null;
          metadata?: Record<string, unknown> | null;
          model?: { mode: "filter"; values: string[] } | null;
          provider?: { mode: "filter"; values: string[] } | null;
          technique?: "fixed" | "sliding" | (string & {}) | null;
        }[]
      | null;
  } | null;
  storeId?: string | null;
  stripe?: { authorization: string; usageEvents: { payload: string }[] } | null;
  /** Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. */
  workersAiBillingMode?: "postpaid" | null;
  zdr?: boolean | null;
}

export const CreateAiGatewayResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      cacheInvalidateOnUpdate: Schema.Boolean,
      cacheTtl: Schema.Union([Schema.Number, Schema.Null]),
      collectLogs: Schema.Boolean,
      createdAt: Schema.String,
      modifiedAt: Schema.String,
      rateLimitingInterval: Schema.Union([Schema.Number, Schema.Null]),
      rateLimitingLimit: Schema.Union([Schema.Number, Schema.Null]),
      authentication: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      dlp: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Struct({
              action: Schema.Union([
                Schema.Literals(["BLOCK", "FLAG"]),
                Schema.String,
              ]),
              enabled: Schema.Boolean,
              profiles: Schema.Array(Schema.String),
            }),
            Schema.Struct({
              enabled: Schema.Boolean,
              policies: Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                  action: Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  check: Schema.Array(
                    Schema.Union([
                      Schema.Literals(["REQUEST", "RESPONSE"]),
                      Schema.String,
                    ]),
                  ),
                  enabled: Schema.Boolean,
                  profiles: Schema.Array(Schema.String),
                }),
              ),
            }),
          ]),
          Schema.Null,
        ]),
      ),
      guardrails: Schema.optional(
        Schema.Union([
          Schema.Struct({
            prompt: Schema.Struct({
              p1: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s1: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s10: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s11: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s12: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s13: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s2: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s3: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s4: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s5: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s6: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s7: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s8: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s9: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                p1: "P1",
                s1: "S1",
                s10: "S10",
                s11: "S11",
                s12: "S12",
                s13: "S13",
                s2: "S2",
                s3: "S3",
                s4: "S4",
                s5: "S5",
                s6: "S6",
                s7: "S7",
                s8: "S8",
                s9: "S9",
              }),
            ),
            response: Schema.Struct({
              p1: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s1: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s10: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s11: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s12: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s13: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s2: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s3: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s4: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s5: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s6: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s7: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s8: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s9: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                p1: "P1",
                s1: "S1",
                s10: "S10",
                s11: "S11",
                s12: "S12",
                s13: "S13",
                s2: "S2",
                s3: "S3",
                s4: "S4",
                s5: "S5",
                s6: "S6",
                s7: "S7",
                s8: "S8",
                s9: "S9",
              }),
            ),
          }),
          Schema.Null,
        ]),
      ),
      isDefault: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      logManagement: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      logManagementStrategy: Schema.optional(
        Schema.Union([
          Schema.Literal("STOP_INSERTING"),
          Schema.Literal("DELETE_OLDEST"),
          Schema.Null,
        ]),
      ),
      logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      logpushPublicKey: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      otel: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              headers: Schema.Record(Schema.String, Schema.Unknown),
              url: Schema.String,
              authorization: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              contentType: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["json", "protobuf"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                headers: "headers",
                url: "url",
                authorization: "authorization",
                contentType: "content_type",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
      rateLimitingTechnique: Schema.optional(
        Schema.Union([
          Schema.Literal("fixed"),
          Schema.Literal("sliding"),
          Schema.Null,
        ]),
      ),
      retryBackoff: Schema.optional(
        Schema.Union([
          Schema.Literal("constant"),
          Schema.Literal("linear"),
          Schema.Literal("exponential"),
          Schema.Null,
        ]),
      ),
      retryDelay: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      retryMaxAttempts: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      spendLimits: Schema.optional(
        Schema.Union([
          Schema.Struct({
            enabled: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            rules: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    limit: Schema.Number,
                    limitType: Schema.Literal("cost"),
                    window: Schema.Number,
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    enabled: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                    metadata: Schema.optional(
                      Schema.Union([
                        Schema.Record(Schema.String, Schema.Unknown),
                        Schema.Null,
                      ]),
                    ),
                    model: Schema.optional(
                      Schema.Union([
                        Schema.Struct({
                          mode: Schema.Literal("filter"),
                          values: Schema.Array(Schema.String),
                        }),
                        Schema.Null,
                      ]),
                    ),
                    provider: Schema.optional(
                      Schema.Union([
                        Schema.Struct({
                          mode: Schema.Literal("filter"),
                          values: Schema.Array(Schema.String),
                        }),
                        Schema.Null,
                      ]),
                    ),
                    technique: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals(["fixed", "sliding"]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      storeId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      stripe: Schema.optional(
        Schema.Union([
          Schema.Struct({
            authorization: Schema.String,
            usageEvents: Schema.Array(
              Schema.Struct({
                payload: Schema.String,
              }),
            ),
          }).pipe(
            Schema.encodeKeys({
              authorization: "authorization",
              usageEvents: "usage_events",
            }),
          ),
          Schema.Null,
        ]),
      ),
      workersAiBillingMode: Schema.optional(
        Schema.Union([Schema.Literal("postpaid"), Schema.Null]),
      ),
      zdr: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          cacheInvalidateOnUpdate: "cache_invalidate_on_update",
          cacheTtl: "cache_ttl",
          collectLogs: "collect_logs",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          rateLimitingInterval: "rate_limiting_interval",
          rateLimitingLimit: "rate_limiting_limit",
          authentication: "authentication",
          dlp: "dlp",
          guardrails: "guardrails",
          isDefault: "is_default",
          logManagement: "log_management",
          logManagementStrategy: "log_management_strategy",
          logpush: "logpush",
          logpushPublicKey: "logpush_public_key",
          otel: "otel",
          rateLimitingTechnique: "rate_limiting_technique",
          retryBackoff: "retry_backoff",
          retryDelay: "retry_delay",
          retryMaxAttempts: "retry_max_attempts",
          spendLimits: "spend_limits",
          storeId: "store_id",
          stripe: "stripe",
          workersAiBillingMode: "workers_ai_billing_mode",
          zdr: "zdr",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateAiGatewayResponse>;

export type CreateAiGatewayError = DefaultErrors | GatewayAlreadyExists;

export const createAiGateway: API.OperationMethod<
  CreateAiGatewayRequest,
  CreateAiGatewayResponse,
  CreateAiGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAiGatewayRequest,
  output: CreateAiGatewayResponse,
  errors: [GatewayAlreadyExists],
}));

export interface UpdateAiGatewayRequest {
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  cacheInvalidateOnUpdate: boolean;
  /** Body param */
  cacheTtl: number | null;
  /** Body param */
  collectLogs: boolean;
  /** Body param */
  rateLimitingInterval: number | null;
  /** Body param */
  rateLimitingLimit: number | null;
  /** Body param */
  authentication?: boolean;
  /** Body param */
  dlp?:
    | {
        action: "BLOCK" | "FLAG" | (string & {});
        enabled: boolean;
        profiles: string[];
      }
    | {
        enabled: boolean;
        policies: {
          id: string;
          action: "FLAG" | "BLOCK" | (string & {});
          check: ("REQUEST" | "RESPONSE" | (string & {}))[];
          enabled: boolean;
          profiles: string[];
        }[];
      };
  /** Body param */
  guardrails?: {
    prompt: {
      p1?: "FLAG" | "BLOCK" | (string & {});
      s1?: "FLAG" | "BLOCK" | (string & {});
      s10?: "FLAG" | "BLOCK" | (string & {});
      s11?: "FLAG" | "BLOCK" | (string & {});
      s12?: "FLAG" | "BLOCK" | (string & {});
      s13?: "FLAG" | "BLOCK" | (string & {});
      s2?: "FLAG" | "BLOCK" | (string & {});
      s3?: "FLAG" | "BLOCK" | (string & {});
      s4?: "FLAG" | "BLOCK" | (string & {});
      s5?: "FLAG" | "BLOCK" | (string & {});
      s6?: "FLAG" | "BLOCK" | (string & {});
      s7?: "FLAG" | "BLOCK" | (string & {});
      s8?: "FLAG" | "BLOCK" | (string & {});
      s9?: "FLAG" | "BLOCK" | (string & {});
    };
    response: {
      p1?: "FLAG" | "BLOCK" | (string & {});
      s1?: "FLAG" | "BLOCK" | (string & {});
      s10?: "FLAG" | "BLOCK" | (string & {});
      s11?: "FLAG" | "BLOCK" | (string & {});
      s12?: "FLAG" | "BLOCK" | (string & {});
      s13?: "FLAG" | "BLOCK" | (string & {});
      s2?: "FLAG" | "BLOCK" | (string & {});
      s3?: "FLAG" | "BLOCK" | (string & {});
      s4?: "FLAG" | "BLOCK" | (string & {});
      s5?: "FLAG" | "BLOCK" | (string & {});
      s6?: "FLAG" | "BLOCK" | (string & {});
      s7?: "FLAG" | "BLOCK" | (string & {});
      s8?: "FLAG" | "BLOCK" | (string & {});
      s9?: "FLAG" | "BLOCK" | (string & {});
    };
  } | null;
  /** Body param */
  logManagement?: number | null;
  /** Body param */
  logManagementStrategy?: "STOP_INSERTING" | "DELETE_OLDEST" | null;
  /** Body param */
  logpush?: boolean;
  /** Body param */
  logpushPublicKey?: string | null;
  /** Body param */
  otel?:
    | {
        headers: Record<string, unknown>;
        url: string;
        authorization?: string;
        contentType?: "json" | "protobuf" | (string & {});
      }[]
    | null;
  /** Body param */
  rateLimitingTechnique?: "fixed" | "sliding" | null;
  /** Body param: Backoff strategy for retry delays */
  retryBackoff?: "constant" | "linear" | "exponential" | null;
  /** Body param: Delay between retry attempts in milliseconds (0-5000) */
  retryDelay?: number | null;
  /** Body param: Maximum number of retry attempts for failed requests (1-5) */
  retryMaxAttempts?: number | null;
  /** Body param */
  spendLimits?: {
    enabled?: boolean;
    rules?: {
      limit: number;
      limitType: "cost";
      window: number;
      id?: string;
      enabled?: boolean;
      metadata?: Record<string, unknown>;
      model?: { mode: "filter"; values: string[] };
      provider?: { mode: "filter"; values: string[] };
      technique?: "fixed" | "sliding" | (string & {});
    }[];
  } | null;
  /** Body param */
  storeId?: string | null;
  /** Body param */
  stripe?: { authorization: string; usageEvents: { payload: string }[] } | null;
  /** Body param: Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. */
  workersAiBillingMode?: "postpaid";
  /** Body param */
  zdr?: boolean;
}

export const UpdateAiGatewayRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      cacheInvalidateOnUpdate: Schema.Boolean,
      cacheTtl: Schema.Union([Schema.Number, Schema.Null]),
      collectLogs: Schema.Boolean,
      rateLimitingInterval: Schema.Union([Schema.Number, Schema.Null]),
      rateLimitingLimit: Schema.Union([Schema.Number, Schema.Null]),
      authentication: Schema.optional(Schema.Boolean),
      dlp: Schema.optional(
        Schema.Union([
          Schema.Struct({
            action: Schema.Union([
              Schema.Literals(["BLOCK", "FLAG"]),
              Schema.String,
            ]),
            enabled: Schema.Boolean,
            profiles: Schema.Array(Schema.String),
          }),
          Schema.Struct({
            enabled: Schema.Boolean,
            policies: Schema.Array(
              Schema.Struct({
                id: Schema.String,
                action: Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
                check: Schema.Array(
                  Schema.Union([
                    Schema.Literals(["REQUEST", "RESPONSE"]),
                    Schema.String,
                  ]),
                ),
                enabled: Schema.Boolean,
                profiles: Schema.Array(Schema.String),
              }),
            ),
          }),
        ]),
      ),
      guardrails: Schema.optional(
        Schema.Union([
          Schema.Struct({
            prompt: Schema.Struct({
              p1: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s1: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s10: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s11: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s12: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s13: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s2: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s3: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s4: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s5: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s6: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s7: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s8: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s9: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                p1: "P1",
                s1: "S1",
                s10: "S10",
                s11: "S11",
                s12: "S12",
                s13: "S13",
                s2: "S2",
                s3: "S3",
                s4: "S4",
                s5: "S5",
                s6: "S6",
                s7: "S7",
                s8: "S8",
                s9: "S9",
              }),
            ),
            response: Schema.Struct({
              p1: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s1: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s10: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s11: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s12: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s13: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s2: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s3: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s4: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s5: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s6: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s7: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s8: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
              s9: Schema.optional(
                Schema.Union([
                  Schema.Literals(["FLAG", "BLOCK"]),
                  Schema.String,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                p1: "P1",
                s1: "S1",
                s10: "S10",
                s11: "S11",
                s12: "S12",
                s13: "S13",
                s2: "S2",
                s3: "S3",
                s4: "S4",
                s5: "S5",
                s6: "S6",
                s7: "S7",
                s8: "S8",
                s9: "S9",
              }),
            ),
          }),
          Schema.Null,
        ]),
      ),
      logManagement: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      logManagementStrategy: Schema.optional(
        Schema.Union([
          Schema.Literal("STOP_INSERTING"),
          Schema.Literal("DELETE_OLDEST"),
          Schema.Null,
        ]),
      ),
      logpush: Schema.optional(Schema.Boolean),
      logpushPublicKey: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      otel: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              headers: Schema.Record(Schema.String, Schema.Unknown),
              url: Schema.String,
              authorization: Schema.optional(Schema.String),
              contentType: Schema.optional(
                Schema.Union([
                  Schema.Literals(["json", "protobuf"]),
                  Schema.String,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                headers: "headers",
                url: "url",
                authorization: "authorization",
                contentType: "content_type",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
      rateLimitingTechnique: Schema.optional(
        Schema.Union([
          Schema.Literal("fixed"),
          Schema.Literal("sliding"),
          Schema.Null,
        ]),
      ),
      retryBackoff: Schema.optional(
        Schema.Union([
          Schema.Literal("constant"),
          Schema.Literal("linear"),
          Schema.Literal("exponential"),
          Schema.Null,
        ]),
      ),
      retryDelay: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      retryMaxAttempts: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      spendLimits: Schema.optional(
        Schema.Union([
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            rules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  limit: Schema.Number,
                  limitType: Schema.Literal("cost"),
                  window: Schema.Number,
                  id: Schema.optional(Schema.String),
                  enabled: Schema.optional(Schema.Boolean),
                  metadata: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  model: Schema.optional(
                    Schema.Struct({
                      mode: Schema.Literal("filter"),
                      values: Schema.Array(Schema.String),
                    }),
                  ),
                  provider: Schema.optional(
                    Schema.Struct({
                      mode: Schema.Literal("filter"),
                      values: Schema.Array(Schema.String),
                    }),
                  ),
                  technique: Schema.optional(
                    Schema.Union([
                      Schema.Literals(["fixed", "sliding"]),
                      Schema.String,
                    ]),
                  ),
                }),
              ),
            ),
          }),
          Schema.Null,
        ]),
      ),
      storeId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      stripe: Schema.optional(
        Schema.Union([
          Schema.Struct({
            authorization: Schema.String,
            usageEvents: Schema.Array(
              Schema.Struct({
                payload: Schema.String,
              }),
            ),
          }).pipe(
            Schema.encodeKeys({
              authorization: "authorization",
              usageEvents: "usage_events",
            }),
          ),
          Schema.Null,
        ]),
      ),
      workersAiBillingMode: Schema.optional(Schema.Literal("postpaid")),
      zdr: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        cacheInvalidateOnUpdate: "cache_invalidate_on_update",
        cacheTtl: "cache_ttl",
        collectLogs: "collect_logs",
        rateLimitingInterval: "rate_limiting_interval",
        rateLimitingLimit: "rate_limiting_limit",
        authentication: "authentication",
        dlp: "dlp",
        guardrails: "guardrails",
        logManagement: "log_management",
        logManagementStrategy: "log_management_strategy",
        logpush: "logpush",
        logpushPublicKey: "logpush_public_key",
        otel: "otel",
        rateLimitingTechnique: "rate_limiting_technique",
        retryBackoff: "retry_backoff",
        retryDelay: "retry_delay",
        retryMaxAttempts: "retry_max_attempts",
        spendLimits: "spend_limits",
        storeId: "store_id",
        stripe: "stripe",
        workersAiBillingMode: "workers_ai_billing_mode",
        zdr: "zdr",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/ai-gateway/gateways/{id}",
      }),
    ),
  ) as unknown as Schema.Schema<UpdateAiGatewayRequest>;

export interface UpdateAiGatewayResponse {
  /** gateway id */
  id: string;
  cacheInvalidateOnUpdate: boolean;
  cacheTtl: number | null;
  collectLogs: boolean;
  createdAt: string;
  modifiedAt: string;
  rateLimitingInterval: number | null;
  rateLimitingLimit: number | null;
  authentication?: boolean | null;
  dlp?:
    | {
        action: "BLOCK" | "FLAG" | (string & {});
        enabled: boolean;
        profiles: string[];
      }
    | {
        enabled: boolean;
        policies: {
          id: string;
          action: "FLAG" | "BLOCK" | (string & {});
          check: ("REQUEST" | "RESPONSE" | (string & {}))[];
          enabled: boolean;
          profiles: string[];
        }[];
      }
    | null;
  guardrails?: {
    prompt: {
      p1?: "FLAG" | "BLOCK" | (string & {}) | null;
      s1?: "FLAG" | "BLOCK" | (string & {}) | null;
      s10?: "FLAG" | "BLOCK" | (string & {}) | null;
      s11?: "FLAG" | "BLOCK" | (string & {}) | null;
      s12?: "FLAG" | "BLOCK" | (string & {}) | null;
      s13?: "FLAG" | "BLOCK" | (string & {}) | null;
      s2?: "FLAG" | "BLOCK" | (string & {}) | null;
      s3?: "FLAG" | "BLOCK" | (string & {}) | null;
      s4?: "FLAG" | "BLOCK" | (string & {}) | null;
      s5?: "FLAG" | "BLOCK" | (string & {}) | null;
      s6?: "FLAG" | "BLOCK" | (string & {}) | null;
      s7?: "FLAG" | "BLOCK" | (string & {}) | null;
      s8?: "FLAG" | "BLOCK" | (string & {}) | null;
      s9?: "FLAG" | "BLOCK" | (string & {}) | null;
    };
    response: {
      p1?: "FLAG" | "BLOCK" | (string & {}) | null;
      s1?: "FLAG" | "BLOCK" | (string & {}) | null;
      s10?: "FLAG" | "BLOCK" | (string & {}) | null;
      s11?: "FLAG" | "BLOCK" | (string & {}) | null;
      s12?: "FLAG" | "BLOCK" | (string & {}) | null;
      s13?: "FLAG" | "BLOCK" | (string & {}) | null;
      s2?: "FLAG" | "BLOCK" | (string & {}) | null;
      s3?: "FLAG" | "BLOCK" | (string & {}) | null;
      s4?: "FLAG" | "BLOCK" | (string & {}) | null;
      s5?: "FLAG" | "BLOCK" | (string & {}) | null;
      s6?: "FLAG" | "BLOCK" | (string & {}) | null;
      s7?: "FLAG" | "BLOCK" | (string & {}) | null;
      s8?: "FLAG" | "BLOCK" | (string & {}) | null;
      s9?: "FLAG" | "BLOCK" | (string & {}) | null;
    };
  } | null;
  isDefault?: boolean | null;
  logManagement?: number | null;
  logManagementStrategy?: "STOP_INSERTING" | "DELETE_OLDEST" | null;
  logpush?: boolean | null;
  logpushPublicKey?: string | null;
  otel?:
    | {
        headers: Record<string, unknown>;
        url: string;
        authorization?: string | null;
        contentType?: "json" | "protobuf" | (string & {}) | null;
      }[]
    | null;
  rateLimitingTechnique?: "fixed" | "sliding" | null;
  /** Backoff strategy for retry delays */
  retryBackoff?: "constant" | "linear" | "exponential" | null;
  /** Delay between retry attempts in milliseconds (0-5000) */
  retryDelay?: number | null;
  /** Maximum number of retry attempts for failed requests (1-5) */
  retryMaxAttempts?: number | null;
  spendLimits?: {
    enabled?: boolean | null;
    rules?:
      | {
          limit: number;
          limitType: "cost";
          window: number;
          id?: string | null;
          enabled?: boolean | null;
          metadata?: Record<string, unknown> | null;
          model?: { mode: "filter"; values: string[] } | null;
          provider?: { mode: "filter"; values: string[] } | null;
          technique?: "fixed" | "sliding" | (string & {}) | null;
        }[]
      | null;
  } | null;
  storeId?: string | null;
  stripe?: { authorization: string; usageEvents: { payload: string }[] } | null;
  /** Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. */
  workersAiBillingMode?: "postpaid" | null;
  zdr?: boolean | null;
}

export const UpdateAiGatewayResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      cacheInvalidateOnUpdate: Schema.Boolean,
      cacheTtl: Schema.Union([Schema.Number, Schema.Null]),
      collectLogs: Schema.Boolean,
      createdAt: Schema.String,
      modifiedAt: Schema.String,
      rateLimitingInterval: Schema.Union([Schema.Number, Schema.Null]),
      rateLimitingLimit: Schema.Union([Schema.Number, Schema.Null]),
      authentication: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      dlp: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Struct({
              action: Schema.Union([
                Schema.Literals(["BLOCK", "FLAG"]),
                Schema.String,
              ]),
              enabled: Schema.Boolean,
              profiles: Schema.Array(Schema.String),
            }),
            Schema.Struct({
              enabled: Schema.Boolean,
              policies: Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                  action: Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  check: Schema.Array(
                    Schema.Union([
                      Schema.Literals(["REQUEST", "RESPONSE"]),
                      Schema.String,
                    ]),
                  ),
                  enabled: Schema.Boolean,
                  profiles: Schema.Array(Schema.String),
                }),
              ),
            }),
          ]),
          Schema.Null,
        ]),
      ),
      guardrails: Schema.optional(
        Schema.Union([
          Schema.Struct({
            prompt: Schema.Struct({
              p1: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s1: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s10: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s11: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s12: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s13: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s2: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s3: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s4: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s5: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s6: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s7: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s8: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s9: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                p1: "P1",
                s1: "S1",
                s10: "S10",
                s11: "S11",
                s12: "S12",
                s13: "S13",
                s2: "S2",
                s3: "S3",
                s4: "S4",
                s5: "S5",
                s6: "S6",
                s7: "S7",
                s8: "S8",
                s9: "S9",
              }),
            ),
            response: Schema.Struct({
              p1: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s1: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s10: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s11: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s12: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s13: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s2: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s3: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s4: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s5: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s6: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s7: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s8: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s9: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                p1: "P1",
                s1: "S1",
                s10: "S10",
                s11: "S11",
                s12: "S12",
                s13: "S13",
                s2: "S2",
                s3: "S3",
                s4: "S4",
                s5: "S5",
                s6: "S6",
                s7: "S7",
                s8: "S8",
                s9: "S9",
              }),
            ),
          }),
          Schema.Null,
        ]),
      ),
      isDefault: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      logManagement: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      logManagementStrategy: Schema.optional(
        Schema.Union([
          Schema.Literal("STOP_INSERTING"),
          Schema.Literal("DELETE_OLDEST"),
          Schema.Null,
        ]),
      ),
      logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      logpushPublicKey: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      otel: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              headers: Schema.Record(Schema.String, Schema.Unknown),
              url: Schema.String,
              authorization: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              contentType: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["json", "protobuf"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                headers: "headers",
                url: "url",
                authorization: "authorization",
                contentType: "content_type",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
      rateLimitingTechnique: Schema.optional(
        Schema.Union([
          Schema.Literal("fixed"),
          Schema.Literal("sliding"),
          Schema.Null,
        ]),
      ),
      retryBackoff: Schema.optional(
        Schema.Union([
          Schema.Literal("constant"),
          Schema.Literal("linear"),
          Schema.Literal("exponential"),
          Schema.Null,
        ]),
      ),
      retryDelay: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      retryMaxAttempts: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      spendLimits: Schema.optional(
        Schema.Union([
          Schema.Struct({
            enabled: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            rules: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    limit: Schema.Number,
                    limitType: Schema.Literal("cost"),
                    window: Schema.Number,
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    enabled: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                    metadata: Schema.optional(
                      Schema.Union([
                        Schema.Record(Schema.String, Schema.Unknown),
                        Schema.Null,
                      ]),
                    ),
                    model: Schema.optional(
                      Schema.Union([
                        Schema.Struct({
                          mode: Schema.Literal("filter"),
                          values: Schema.Array(Schema.String),
                        }),
                        Schema.Null,
                      ]),
                    ),
                    provider: Schema.optional(
                      Schema.Union([
                        Schema.Struct({
                          mode: Schema.Literal("filter"),
                          values: Schema.Array(Schema.String),
                        }),
                        Schema.Null,
                      ]),
                    ),
                    technique: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals(["fixed", "sliding"]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      storeId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      stripe: Schema.optional(
        Schema.Union([
          Schema.Struct({
            authorization: Schema.String,
            usageEvents: Schema.Array(
              Schema.Struct({
                payload: Schema.String,
              }),
            ),
          }).pipe(
            Schema.encodeKeys({
              authorization: "authorization",
              usageEvents: "usage_events",
            }),
          ),
          Schema.Null,
        ]),
      ),
      workersAiBillingMode: Schema.optional(
        Schema.Union([Schema.Literal("postpaid"), Schema.Null]),
      ),
      zdr: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          cacheInvalidateOnUpdate: "cache_invalidate_on_update",
          cacheTtl: "cache_ttl",
          collectLogs: "collect_logs",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          rateLimitingInterval: "rate_limiting_interval",
          rateLimitingLimit: "rate_limiting_limit",
          authentication: "authentication",
          dlp: "dlp",
          guardrails: "guardrails",
          isDefault: "is_default",
          logManagement: "log_management",
          logManagementStrategy: "log_management_strategy",
          logpush: "logpush",
          logpushPublicKey: "logpush_public_key",
          otel: "otel",
          rateLimitingTechnique: "rate_limiting_technique",
          retryBackoff: "retry_backoff",
          retryDelay: "retry_delay",
          retryMaxAttempts: "retry_max_attempts",
          spendLimits: "spend_limits",
          storeId: "store_id",
          stripe: "stripe",
          workersAiBillingMode: "workers_ai_billing_mode",
          zdr: "zdr",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<UpdateAiGatewayResponse>;

export type UpdateAiGatewayError = DefaultErrors | GatewayNotFound;

export const updateAiGateway: API.OperationMethod<
  UpdateAiGatewayRequest,
  UpdateAiGatewayResponse,
  UpdateAiGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAiGatewayRequest,
  output: UpdateAiGatewayResponse,
  errors: [GatewayNotFound],
}));

export interface DeleteAiGatewayRequest {
  id: string;
  accountId: string;
}

export const DeleteAiGatewayRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/ai-gateway/gateways/{id}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteAiGatewayRequest>;

export interface DeleteAiGatewayResponse {
  /** gateway id */
  id: string;
  cacheInvalidateOnUpdate: boolean;
  cacheTtl: number | null;
  collectLogs: boolean;
  createdAt: string;
  modifiedAt: string;
  rateLimitingInterval: number | null;
  rateLimitingLimit: number | null;
  authentication?: boolean | null;
  dlp?:
    | {
        action: "BLOCK" | "FLAG" | (string & {});
        enabled: boolean;
        profiles: string[];
      }
    | {
        enabled: boolean;
        policies: {
          id: string;
          action: "FLAG" | "BLOCK" | (string & {});
          check: ("REQUEST" | "RESPONSE" | (string & {}))[];
          enabled: boolean;
          profiles: string[];
        }[];
      }
    | null;
  guardrails?: {
    prompt: {
      p1?: "FLAG" | "BLOCK" | (string & {}) | null;
      s1?: "FLAG" | "BLOCK" | (string & {}) | null;
      s10?: "FLAG" | "BLOCK" | (string & {}) | null;
      s11?: "FLAG" | "BLOCK" | (string & {}) | null;
      s12?: "FLAG" | "BLOCK" | (string & {}) | null;
      s13?: "FLAG" | "BLOCK" | (string & {}) | null;
      s2?: "FLAG" | "BLOCK" | (string & {}) | null;
      s3?: "FLAG" | "BLOCK" | (string & {}) | null;
      s4?: "FLAG" | "BLOCK" | (string & {}) | null;
      s5?: "FLAG" | "BLOCK" | (string & {}) | null;
      s6?: "FLAG" | "BLOCK" | (string & {}) | null;
      s7?: "FLAG" | "BLOCK" | (string & {}) | null;
      s8?: "FLAG" | "BLOCK" | (string & {}) | null;
      s9?: "FLAG" | "BLOCK" | (string & {}) | null;
    };
    response: {
      p1?: "FLAG" | "BLOCK" | (string & {}) | null;
      s1?: "FLAG" | "BLOCK" | (string & {}) | null;
      s10?: "FLAG" | "BLOCK" | (string & {}) | null;
      s11?: "FLAG" | "BLOCK" | (string & {}) | null;
      s12?: "FLAG" | "BLOCK" | (string & {}) | null;
      s13?: "FLAG" | "BLOCK" | (string & {}) | null;
      s2?: "FLAG" | "BLOCK" | (string & {}) | null;
      s3?: "FLAG" | "BLOCK" | (string & {}) | null;
      s4?: "FLAG" | "BLOCK" | (string & {}) | null;
      s5?: "FLAG" | "BLOCK" | (string & {}) | null;
      s6?: "FLAG" | "BLOCK" | (string & {}) | null;
      s7?: "FLAG" | "BLOCK" | (string & {}) | null;
      s8?: "FLAG" | "BLOCK" | (string & {}) | null;
      s9?: "FLAG" | "BLOCK" | (string & {}) | null;
    };
  } | null;
  isDefault?: boolean | null;
  logManagement?: number | null;
  logManagementStrategy?: "STOP_INSERTING" | "DELETE_OLDEST" | null;
  logpush?: boolean | null;
  logpushPublicKey?: string | null;
  otel?:
    | {
        headers: Record<string, unknown>;
        url: string;
        authorization?: string | null;
        contentType?: "json" | "protobuf" | (string & {}) | null;
      }[]
    | null;
  rateLimitingTechnique?: "fixed" | "sliding" | null;
  /** Backoff strategy for retry delays */
  retryBackoff?: "constant" | "linear" | "exponential" | null;
  /** Delay between retry attempts in milliseconds (0-5000) */
  retryDelay?: number | null;
  /** Maximum number of retry attempts for failed requests (1-5) */
  retryMaxAttempts?: number | null;
  spendLimits?: {
    enabled?: boolean | null;
    rules?:
      | {
          limit: number;
          limitType: "cost";
          window: number;
          id?: string | null;
          enabled?: boolean | null;
          metadata?: Record<string, unknown> | null;
          model?: { mode: "filter"; values: string[] } | null;
          provider?: { mode: "filter"; values: string[] } | null;
          technique?: "fixed" | "sliding" | (string & {}) | null;
        }[]
      | null;
  } | null;
  storeId?: string | null;
  stripe?: { authorization: string; usageEvents: { payload: string }[] } | null;
  /** Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. */
  workersAiBillingMode?: "postpaid" | null;
  zdr?: boolean | null;
}

export const DeleteAiGatewayResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      cacheInvalidateOnUpdate: Schema.Boolean,
      cacheTtl: Schema.Union([Schema.Number, Schema.Null]),
      collectLogs: Schema.Boolean,
      createdAt: Schema.String,
      modifiedAt: Schema.String,
      rateLimitingInterval: Schema.Union([Schema.Number, Schema.Null]),
      rateLimitingLimit: Schema.Union([Schema.Number, Schema.Null]),
      authentication: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      dlp: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Struct({
              action: Schema.Union([
                Schema.Literals(["BLOCK", "FLAG"]),
                Schema.String,
              ]),
              enabled: Schema.Boolean,
              profiles: Schema.Array(Schema.String),
            }),
            Schema.Struct({
              enabled: Schema.Boolean,
              policies: Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                  action: Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  check: Schema.Array(
                    Schema.Union([
                      Schema.Literals(["REQUEST", "RESPONSE"]),
                      Schema.String,
                    ]),
                  ),
                  enabled: Schema.Boolean,
                  profiles: Schema.Array(Schema.String),
                }),
              ),
            }),
          ]),
          Schema.Null,
        ]),
      ),
      guardrails: Schema.optional(
        Schema.Union([
          Schema.Struct({
            prompt: Schema.Struct({
              p1: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s1: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s10: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s11: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s12: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s13: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s2: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s3: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s4: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s5: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s6: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s7: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s8: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s9: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                p1: "P1",
                s1: "S1",
                s10: "S10",
                s11: "S11",
                s12: "S12",
                s13: "S13",
                s2: "S2",
                s3: "S3",
                s4: "S4",
                s5: "S5",
                s6: "S6",
                s7: "S7",
                s8: "S8",
                s9: "S9",
              }),
            ),
            response: Schema.Struct({
              p1: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s1: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s10: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s11: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s12: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s13: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s2: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s3: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s4: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s5: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s6: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s7: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s8: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              s9: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["FLAG", "BLOCK"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                p1: "P1",
                s1: "S1",
                s10: "S10",
                s11: "S11",
                s12: "S12",
                s13: "S13",
                s2: "S2",
                s3: "S3",
                s4: "S4",
                s5: "S5",
                s6: "S6",
                s7: "S7",
                s8: "S8",
                s9: "S9",
              }),
            ),
          }),
          Schema.Null,
        ]),
      ),
      isDefault: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      logManagement: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      logManagementStrategy: Schema.optional(
        Schema.Union([
          Schema.Literal("STOP_INSERTING"),
          Schema.Literal("DELETE_OLDEST"),
          Schema.Null,
        ]),
      ),
      logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      logpushPublicKey: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      otel: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              headers: Schema.Record(Schema.String, Schema.Unknown),
              url: Schema.String,
              authorization: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              contentType: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["json", "protobuf"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                headers: "headers",
                url: "url",
                authorization: "authorization",
                contentType: "content_type",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
      rateLimitingTechnique: Schema.optional(
        Schema.Union([
          Schema.Literal("fixed"),
          Schema.Literal("sliding"),
          Schema.Null,
        ]),
      ),
      retryBackoff: Schema.optional(
        Schema.Union([
          Schema.Literal("constant"),
          Schema.Literal("linear"),
          Schema.Literal("exponential"),
          Schema.Null,
        ]),
      ),
      retryDelay: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      retryMaxAttempts: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      spendLimits: Schema.optional(
        Schema.Union([
          Schema.Struct({
            enabled: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            rules: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    limit: Schema.Number,
                    limitType: Schema.Literal("cost"),
                    window: Schema.Number,
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    enabled: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                    metadata: Schema.optional(
                      Schema.Union([
                        Schema.Record(Schema.String, Schema.Unknown),
                        Schema.Null,
                      ]),
                    ),
                    model: Schema.optional(
                      Schema.Union([
                        Schema.Struct({
                          mode: Schema.Literal("filter"),
                          values: Schema.Array(Schema.String),
                        }),
                        Schema.Null,
                      ]),
                    ),
                    provider: Schema.optional(
                      Schema.Union([
                        Schema.Struct({
                          mode: Schema.Literal("filter"),
                          values: Schema.Array(Schema.String),
                        }),
                        Schema.Null,
                      ]),
                    ),
                    technique: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals(["fixed", "sliding"]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      storeId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      stripe: Schema.optional(
        Schema.Union([
          Schema.Struct({
            authorization: Schema.String,
            usageEvents: Schema.Array(
              Schema.Struct({
                payload: Schema.String,
              }),
            ),
          }).pipe(
            Schema.encodeKeys({
              authorization: "authorization",
              usageEvents: "usage_events",
            }),
          ),
          Schema.Null,
        ]),
      ),
      workersAiBillingMode: Schema.optional(
        Schema.Union([Schema.Literal("postpaid"), Schema.Null]),
      ),
      zdr: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          cacheInvalidateOnUpdate: "cache_invalidate_on_update",
          cacheTtl: "cache_ttl",
          collectLogs: "collect_logs",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          rateLimitingInterval: "rate_limiting_interval",
          rateLimitingLimit: "rate_limiting_limit",
          authentication: "authentication",
          dlp: "dlp",
          guardrails: "guardrails",
          isDefault: "is_default",
          logManagement: "log_management",
          logManagementStrategy: "log_management_strategy",
          logpush: "logpush",
          logpushPublicKey: "logpush_public_key",
          otel: "otel",
          rateLimitingTechnique: "rate_limiting_technique",
          retryBackoff: "retry_backoff",
          retryDelay: "retry_delay",
          retryMaxAttempts: "retry_max_attempts",
          spendLimits: "spend_limits",
          storeId: "store_id",
          stripe: "stripe",
          workersAiBillingMode: "workers_ai_billing_mode",
          zdr: "zdr",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteAiGatewayResponse>;

export type DeleteAiGatewayError = DefaultErrors | GatewayNotFound;

export const deleteAiGateway: API.OperationMethod<
  DeleteAiGatewayRequest,
  DeleteAiGatewayResponse,
  DeleteAiGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAiGatewayRequest,
  output: DeleteAiGatewayResponse,
  errors: [GatewayNotFound],
}));

// =============================================================================
// BalanceBilling
// =============================================================================

export interface CreditBalanceBillingRequest {
  /** Cloudflare account ID. */
  accountId: string;
}

export const CreditBalanceBillingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/billing/credit-balance",
      }),
    ),
  ) as unknown as Schema.Schema<CreditBalanceBillingRequest>;

export interface CreditBalanceBillingResponse {
  balance: number;
  hasDefaultPaymentMethod: boolean;
  paymentMethod: { brand?: string | null; last4?: string | null } | null;
  topupConfig: {
    amount: number | null;
    disabledReason?: string | null;
    error?: string | null;
    lastFailedAt?: number | null;
    threshold: number | null;
  };
  firstTopupSuccess?: boolean | null;
}

export const CreditBalanceBillingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      balance: Schema.Number,
      hasDefaultPaymentMethod: Schema.Boolean,
      paymentMethod: Schema.Union([
        Schema.Struct({
          brand: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          last4: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
        Schema.Null,
      ]),
      topupConfig: Schema.Struct({
        amount: Schema.Union([Schema.Number, Schema.Null]),
        disabledReason: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        error: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        lastFailedAt: Schema.optional(
          Schema.Union([Schema.Number, Schema.Null]),
        ),
        threshold: Schema.Union([Schema.Number, Schema.Null]),
      }),
      firstTopupSuccess: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          balance: "balance",
          hasDefaultPaymentMethod: "has_default_payment_method",
          paymentMethod: "payment_method",
          topupConfig: "topup_config",
          firstTopupSuccess: "first_topup_success",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreditBalanceBillingResponse>;

export type CreditBalanceBillingError = DefaultErrors;

export const creditBalanceBilling: API.OperationMethod<
  CreditBalanceBillingRequest,
  CreditBalanceBillingResponse,
  CreditBalanceBillingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreditBalanceBillingRequest,
  output: CreditBalanceBillingResponse,
  errors: [],
}));

// =============================================================================
// BillingSpendingLimit
// =============================================================================

export interface GetBillingSpendingLimitRequest {
  /** Cloudflare account ID. */
  accountId: string;
}

export const GetBillingSpendingLimitRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/billing/spending-limit",
      }),
    ),
  ) as unknown as Schema.Schema<GetBillingSpendingLimitRequest>;

export interface GetBillingSpendingLimitResponse {
  config: {
    amount: number | null;
    duration: string | null;
    strategy: string | null;
  };
  enabled: boolean;
}

export const GetBillingSpendingLimitResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      config: Schema.Struct({
        amount: Schema.Union([Schema.Number, Schema.Null]),
        duration: Schema.Union([Schema.String, Schema.Null]),
        strategy: Schema.Union([Schema.String, Schema.Null]),
      }),
      enabled: Schema.Boolean,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetBillingSpendingLimitResponse>;

export type GetBillingSpendingLimitError = DefaultErrors;

export const getBillingSpendingLimit: API.OperationMethod<
  GetBillingSpendingLimitRequest,
  GetBillingSpendingLimitResponse,
  GetBillingSpendingLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBillingSpendingLimitRequest,
  output: GetBillingSpendingLimitResponse,
  errors: [],
}));

export interface CreateBillingSpendingLimitRequest {
  /** Path param: Cloudflare account ID. */
  accountId: string;
  /** Body param: Spending limit amount in cents (min 100). */
  amount: number;
  /** Body param: Spending limit duration. */
  duration: "daily" | "weekly" | "monthly" | (string & {});
  /** Body param: Spending limit strategy. */
  strategy: "fixed" | "sliding" | (string & {});
}

export const CreateBillingSpendingLimitRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      amount: Schema.Number,
      duration: Schema.Union([
        Schema.Literals(["daily", "weekly", "monthly"]),
        Schema.String,
      ]),
      strategy: Schema.Union([
        Schema.Literals(["fixed", "sliding"]),
        Schema.String,
      ]),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-gateway/billing/spending-limit",
      }),
    ),
  ) as unknown as Schema.Schema<CreateBillingSpendingLimitRequest>;

export type CreateBillingSpendingLimitResponse = unknown;

export const CreateBillingSpendingLimitResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateBillingSpendingLimitResponse>;

export type CreateBillingSpendingLimitError = DefaultErrors | NoManualTopup;

export const createBillingSpendingLimit: API.OperationMethod<
  CreateBillingSpendingLimitRequest,
  CreateBillingSpendingLimitResponse,
  CreateBillingSpendingLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateBillingSpendingLimitRequest,
  output: CreateBillingSpendingLimitResponse,
  errors: [NoManualTopup],
}));

export interface DeleteBillingSpendingLimitRequest {
  /** Cloudflare account ID. */
  accountId: string;
}

export const DeleteBillingSpendingLimitRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/ai-gateway/billing/spending-limit",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteBillingSpendingLimitRequest>;

export type DeleteBillingSpendingLimitResponse = unknown;

export const DeleteBillingSpendingLimitResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteBillingSpendingLimitResponse>;

export type DeleteBillingSpendingLimitError = DefaultErrors;

export const deleteBillingSpendingLimit: API.OperationMethod<
  DeleteBillingSpendingLimitRequest,
  DeleteBillingSpendingLimitResponse,
  DeleteBillingSpendingLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteBillingSpendingLimitRequest,
  output: DeleteBillingSpendingLimitResponse,
  errors: [],
}));

// =============================================================================
// BillingTopup
// =============================================================================

export interface CreateBillingTopupRequest {
  /** Path param: Cloudflare account ID. */
  accountId: string;
  /** Body param: Top-up amount in cents (min 1000). */
  amount: number;
}

export const CreateBillingTopupRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      amount: Schema.Number,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-gateway/billing/topup",
      }),
    ),
  ) as unknown as Schema.Schema<CreateBillingTopupRequest>;

export interface CreateBillingTopupResponse {
  /** Stripe PaymentIntent client secret. */
  clientSecret: string | null;
  /** Whether the user was already onboarded. */
  onboarding: boolean;
  /** Stripe invoice ID. */
  paymentIntentId: string;
  /** Card brand (visa, mastercard, etc.). */
  brand?: string | null;
  /** Last 4 digits of card. */
  last4?: string | null;
}

export const CreateBillingTopupResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      clientSecret: Schema.Union([Schema.String, Schema.Null]),
      onboarding: Schema.Boolean,
      paymentIntentId: Schema.String,
      brand: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      last4: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          clientSecret: "client_secret",
          onboarding: "onboarding",
          paymentIntentId: "payment_intent_id",
          brand: "brand",
          last4: "last4",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateBillingTopupResponse>;

export type CreateBillingTopupError = DefaultErrors;

export const createBillingTopup: API.OperationMethod<
  CreateBillingTopupRequest,
  CreateBillingTopupResponse,
  CreateBillingTopupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateBillingTopupRequest,
  output: CreateBillingTopupResponse,
  errors: [],
}));

export interface StatusBillingTopupRequest {
  /** Path param: Cloudflare account ID. */
  accountId: string;
  /** Body param: Stripe invoice ID to check status for. */
  paymentIntentId: string;
}

export const StatusBillingTopupRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      paymentIntentId: Schema.String,
    }).pipe(
      Schema.encodeKeys({ paymentIntentId: "payment_intent_id" }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-gateway/billing/topup/status",
      }),
    ),
  ) as unknown as Schema.Schema<StatusBillingTopupRequest>;

export interface StatusBillingTopupResponse {
  paymentIntentId: string;
  status: "completed" | "pending" | (string & {});
}

export const StatusBillingTopupResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      paymentIntentId: Schema.String,
      status: Schema.Union([
        Schema.Literals(["completed", "pending"]),
        Schema.String,
      ]),
    })
      .pipe(
        Schema.encodeKeys({
          paymentIntentId: "payment_intent_id",
          status: "status",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<StatusBillingTopupResponse>;

export type StatusBillingTopupError = DefaultErrors;

export const statusBillingTopup: API.OperationMethod<
  StatusBillingTopupRequest,
  StatusBillingTopupResponse,
  StatusBillingTopupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StatusBillingTopupRequest,
  output: StatusBillingTopupResponse,
  errors: [],
}));

// =============================================================================
// BillingTopupConfig
// =============================================================================

export interface GetBillingTopupConfigRequest {
  /** Cloudflare account ID. */
  accountId: string;
}

export const GetBillingTopupConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/billing/topup/config",
      }),
    ),
  ) as unknown as Schema.Schema<GetBillingTopupConfigRequest>;

export interface GetBillingTopupConfigResponse {
  amount: number | null;
  disabledReason?: string | null;
  error?: string | null;
  lastFailedAt?: number | null;
  threshold: number | null;
}

export const GetBillingTopupConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      amount: Schema.Union([Schema.Number, Schema.Null]),
      disabledReason: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      error: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastFailedAt: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      threshold: Schema.Union([Schema.Number, Schema.Null]),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetBillingTopupConfigResponse>;

export type GetBillingTopupConfigError = DefaultErrors;

export const getBillingTopupConfig: API.OperationMethod<
  GetBillingTopupConfigRequest,
  GetBillingTopupConfigResponse,
  GetBillingTopupConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBillingTopupConfigRequest,
  output: GetBillingTopupConfigResponse,
  errors: [],
}));

export interface CreateBillingTopupConfigRequest {
  /** Path param: Cloudflare account ID. */
  accountId: string;
  /** Body param: Auto top-up amount in cents (min 1000). */
  amount: number;
  /** Body param: Balance threshold in cents that triggers auto top-up (min 500). */
  threshold: number;
}

export const CreateBillingTopupConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      amount: Schema.Number,
      threshold: Schema.Number,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-gateway/billing/topup/config",
      }),
    ),
  ) as unknown as Schema.Schema<CreateBillingTopupConfigRequest>;

export interface CreateBillingTopupConfigResponse {
  amount: number;
  threshold: number;
}

export const CreateBillingTopupConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      amount: Schema.Number,
      threshold: Schema.Number,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateBillingTopupConfigResponse>;

export type CreateBillingTopupConfigError = DefaultErrors;

export const createBillingTopupConfig: API.OperationMethod<
  CreateBillingTopupConfigRequest,
  CreateBillingTopupConfigResponse,
  CreateBillingTopupConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateBillingTopupConfigRequest,
  output: CreateBillingTopupConfigResponse,
  errors: [],
}));

export interface DeleteBillingTopupConfigRequest {
  /** Cloudflare account ID. */
  accountId: string;
}

export const DeleteBillingTopupConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/ai-gateway/billing/topup/config",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteBillingTopupConfigRequest>;

export type DeleteBillingTopupConfigResponse = unknown;

export const DeleteBillingTopupConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteBillingTopupConfigResponse>;

export type DeleteBillingTopupConfigError = DefaultErrors;

export const deleteBillingTopupConfig: API.OperationMethod<
  DeleteBillingTopupConfigRequest,
  DeleteBillingTopupConfigResponse,
  DeleteBillingTopupConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteBillingTopupConfigRequest,
  output: DeleteBillingTopupConfigResponse,
  errors: [],
}));

// =============================================================================
// Dataset
// =============================================================================

export interface GetDatasetRequest {
  gatewayId: string;
  id: string;
  accountId: string;
}

export const GetDatasetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/datasets/{id}",
      }),
    ),
) as unknown as Schema.Schema<GetDatasetRequest>;

export interface GetDatasetResponse {
  id: string;
  createdAt: string;
  enable: boolean;
  filters: {
    key:
      | "created_at"
      | "request_content_type"
      | "response_content_type"
      | "success"
      | "cached"
      | "provider"
      | "model"
      | "cost"
      | "tokens"
      | "tokens_in"
      | "tokens_out"
      | "duration"
      | "feedback"
      | (string & {});
    operator: "eq" | "contains" | "lt" | "gt" | (string & {});
    value: (string | number | boolean)[];
  }[];
  /** gateway id */
  gatewayId: string;
  modifiedAt: string;
  name: string;
}

export const GetDatasetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      enable: Schema.Boolean,
      filters: Schema.Array(
        Schema.Struct({
          key: Schema.Union([
            Schema.Literals([
              "created_at",
              "request_content_type",
              "response_content_type",
              "success",
              "cached",
              "provider",
              "model",
              "cost",
              "tokens",
              "tokens_in",
              "tokens_out",
              "duration",
              "feedback",
            ]),
            Schema.String,
          ]),
          operator: Schema.Union([
            Schema.Literals(["eq", "contains", "lt", "gt"]),
            Schema.String,
          ]),
          value: Schema.Array(
            Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          ),
        }),
      ),
      gatewayId: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          enable: "enable",
          filters: "filters",
          gatewayId: "gateway_id",
          modifiedAt: "modified_at",
          name: "name",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetDatasetResponse>;

export type GetDatasetError = DefaultErrors | DatasetNotFound;

export const getDataset: API.OperationMethod<
  GetDatasetRequest,
  GetDatasetResponse,
  GetDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDatasetRequest,
  output: GetDatasetResponse,
  errors: [DatasetNotFound],
}));

export interface ListDatasetsRequest {
  gatewayId: string;
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param */
  enable?: boolean;
  /** Query param */
  name?: string;
  /** Query param: Search by id, name, filters */
  search?: string;
}

export const ListDatasetsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      enable: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("enable")),
      name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/datasets",
      }),
    ),
) as unknown as Schema.Schema<ListDatasetsRequest>;

export interface ListDatasetsResponse {
  result: {
    id: string;
    createdAt: string;
    enable: boolean;
    filters: {
      key:
        | "created_at"
        | "request_content_type"
        | "response_content_type"
        | "success"
        | "cached"
        | "provider"
        | "model"
        | "cost"
        | "tokens"
        | "tokens_in"
        | "tokens_out"
        | "duration"
        | "feedback"
        | (string & {});
      operator: "eq" | "contains" | "lt" | "gt" | (string & {});
      value: (string | number | boolean)[];
    }[];
    gatewayId: string;
    modifiedAt: string;
    name: string;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListDatasetsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          createdAt: Schema.String,
          enable: Schema.Boolean,
          filters: Schema.Array(
            Schema.Struct({
              key: Schema.Union([
                Schema.Literals([
                  "created_at",
                  "request_content_type",
                  "response_content_type",
                  "success",
                  "cached",
                  "provider",
                  "model",
                  "cost",
                  "tokens",
                  "tokens_in",
                  "tokens_out",
                  "duration",
                  "feedback",
                ]),
                Schema.String,
              ]),
              operator: Schema.Union([
                Schema.Literals(["eq", "contains", "lt", "gt"]),
                Schema.String,
              ]),
              value: Schema.Array(
                Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
              ),
            }),
          ),
          gatewayId: Schema.String,
          modifiedAt: Schema.String,
          name: Schema.String,
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            createdAt: "created_at",
            enable: "enable",
            filters: "filters",
            gatewayId: "gateway_id",
            modifiedAt: "modified_at",
            name: "name",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Schema<ListDatasetsResponse>;

export type ListDatasetsError = DefaultErrors | GatewayNotFound;

export const listDatasets: API.PaginatedOperationMethod<
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDatasetsRequest,
  output: ListDatasetsResponse,
  errors: [GatewayNotFound],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateDatasetRequest {
  gatewayId: string;
  /** Path param */
  accountId: string;
  /** Body param */
  enable: boolean;
  /** Body param */
  filters: {
    key:
      | "created_at"
      | "request_content_type"
      | "response_content_type"
      | "success"
      | "cached"
      | "provider"
      | "model"
      | "cost"
      | "tokens"
      | "tokens_in"
      | "tokens_out"
      | "duration"
      | "feedback"
      | (string & {});
    operator: "eq" | "contains" | "lt" | "gt" | (string & {});
    value: (string | number | boolean)[];
  }[];
  /** Body param */
  name: string;
}

export const CreateDatasetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      enable: Schema.Boolean,
      filters: Schema.Array(
        Schema.Struct({
          key: Schema.Union([
            Schema.Literals([
              "created_at",
              "request_content_type",
              "response_content_type",
              "success",
              "cached",
              "provider",
              "model",
              "cost",
              "tokens",
              "tokens_in",
              "tokens_out",
              "duration",
              "feedback",
            ]),
            Schema.String,
          ]),
          operator: Schema.Union([
            Schema.Literals(["eq", "contains", "lt", "gt"]),
            Schema.String,
          ]),
          value: Schema.Array(
            Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          ),
        }),
      ),
      name: Schema.String,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/datasets",
      }),
    ),
) as unknown as Schema.Schema<CreateDatasetRequest>;

export interface CreateDatasetResponse {
  id: string;
  createdAt: string;
  enable: boolean;
  filters: {
    key:
      | "created_at"
      | "request_content_type"
      | "response_content_type"
      | "success"
      | "cached"
      | "provider"
      | "model"
      | "cost"
      | "tokens"
      | "tokens_in"
      | "tokens_out"
      | "duration"
      | "feedback"
      | (string & {});
    operator: "eq" | "contains" | "lt" | "gt" | (string & {});
    value: (string | number | boolean)[];
  }[];
  /** gateway id */
  gatewayId: string;
  modifiedAt: string;
  name: string;
}

export const CreateDatasetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      enable: Schema.Boolean,
      filters: Schema.Array(
        Schema.Struct({
          key: Schema.Union([
            Schema.Literals([
              "created_at",
              "request_content_type",
              "response_content_type",
              "success",
              "cached",
              "provider",
              "model",
              "cost",
              "tokens",
              "tokens_in",
              "tokens_out",
              "duration",
              "feedback",
            ]),
            Schema.String,
          ]),
          operator: Schema.Union([
            Schema.Literals(["eq", "contains", "lt", "gt"]),
            Schema.String,
          ]),
          value: Schema.Array(
            Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          ),
        }),
      ),
      gatewayId: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          enable: "enable",
          filters: "filters",
          gatewayId: "gateway_id",
          modifiedAt: "modified_at",
          name: "name",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<CreateDatasetResponse>;

export type CreateDatasetError =
  | DefaultErrors
  | GatewayNotFound
  | DatasetNameAlreadyExists;

export const createDataset: API.OperationMethod<
  CreateDatasetRequest,
  CreateDatasetResponse,
  CreateDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateDatasetRequest,
  output: CreateDatasetResponse,
  errors: [GatewayNotFound, DatasetNameAlreadyExists],
}));

export interface UpdateDatasetRequest {
  gatewayId: string;
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  enable: boolean;
  /** Body param */
  filters: {
    key:
      | "created_at"
      | "request_content_type"
      | "response_content_type"
      | "success"
      | "cached"
      | "provider"
      | "model"
      | "cost"
      | "tokens"
      | "tokens_in"
      | "tokens_out"
      | "duration"
      | "feedback"
      | (string & {});
    operator: "eq" | "contains" | "lt" | "gt" | (string & {});
    value: (string | number | boolean)[];
  }[];
  /** Body param */
  name: string;
}

export const UpdateDatasetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      enable: Schema.Boolean,
      filters: Schema.Array(
        Schema.Struct({
          key: Schema.Union([
            Schema.Literals([
              "created_at",
              "request_content_type",
              "response_content_type",
              "success",
              "cached",
              "provider",
              "model",
              "cost",
              "tokens",
              "tokens_in",
              "tokens_out",
              "duration",
              "feedback",
            ]),
            Schema.String,
          ]),
          operator: Schema.Union([
            Schema.Literals(["eq", "contains", "lt", "gt"]),
            Schema.String,
          ]),
          value: Schema.Array(
            Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          ),
        }),
      ),
      name: Schema.String,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/datasets/{id}",
      }),
    ),
) as unknown as Schema.Schema<UpdateDatasetRequest>;

export interface UpdateDatasetResponse {
  id: string;
  createdAt: string;
  enable: boolean;
  filters: {
    key:
      | "created_at"
      | "request_content_type"
      | "response_content_type"
      | "success"
      | "cached"
      | "provider"
      | "model"
      | "cost"
      | "tokens"
      | "tokens_in"
      | "tokens_out"
      | "duration"
      | "feedback"
      | (string & {});
    operator: "eq" | "contains" | "lt" | "gt" | (string & {});
    value: (string | number | boolean)[];
  }[];
  /** gateway id */
  gatewayId: string;
  modifiedAt: string;
  name: string;
}

export const UpdateDatasetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      enable: Schema.Boolean,
      filters: Schema.Array(
        Schema.Struct({
          key: Schema.Union([
            Schema.Literals([
              "created_at",
              "request_content_type",
              "response_content_type",
              "success",
              "cached",
              "provider",
              "model",
              "cost",
              "tokens",
              "tokens_in",
              "tokens_out",
              "duration",
              "feedback",
            ]),
            Schema.String,
          ]),
          operator: Schema.Union([
            Schema.Literals(["eq", "contains", "lt", "gt"]),
            Schema.String,
          ]),
          value: Schema.Array(
            Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          ),
        }),
      ),
      gatewayId: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          enable: "enable",
          filters: "filters",
          gatewayId: "gateway_id",
          modifiedAt: "modified_at",
          name: "name",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<UpdateDatasetResponse>;

export type UpdateDatasetError = DefaultErrors | DatasetNotFound;

export const updateDataset: API.OperationMethod<
  UpdateDatasetRequest,
  UpdateDatasetResponse,
  UpdateDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateDatasetRequest,
  output: UpdateDatasetResponse,
  errors: [DatasetNotFound],
}));

export interface DeleteDatasetRequest {
  gatewayId: string;
  id: string;
  accountId: string;
}

export const DeleteDatasetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/datasets/{id}",
      }),
    ),
) as unknown as Schema.Schema<DeleteDatasetRequest>;

export interface DeleteDatasetResponse {
  id: string;
  createdAt: string;
  enable: boolean;
  filters: {
    key:
      | "created_at"
      | "request_content_type"
      | "response_content_type"
      | "success"
      | "cached"
      | "provider"
      | "model"
      | "cost"
      | "tokens"
      | "tokens_in"
      | "tokens_out"
      | "duration"
      | "feedback"
      | (string & {});
    operator: "eq" | "contains" | "lt" | "gt" | (string & {});
    value: (string | number | boolean)[];
  }[];
  /** gateway id */
  gatewayId: string;
  modifiedAt: string;
  name: string;
}

export const DeleteDatasetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      enable: Schema.Boolean,
      filters: Schema.Array(
        Schema.Struct({
          key: Schema.Union([
            Schema.Literals([
              "created_at",
              "request_content_type",
              "response_content_type",
              "success",
              "cached",
              "provider",
              "model",
              "cost",
              "tokens",
              "tokens_in",
              "tokens_out",
              "duration",
              "feedback",
            ]),
            Schema.String,
          ]),
          operator: Schema.Union([
            Schema.Literals(["eq", "contains", "lt", "gt"]),
            Schema.String,
          ]),
          value: Schema.Array(
            Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          ),
        }),
      ),
      gatewayId: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          enable: "enable",
          filters: "filters",
          gatewayId: "gateway_id",
          modifiedAt: "modified_at",
          name: "name",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<DeleteDatasetResponse>;

export type DeleteDatasetError = DefaultErrors | DatasetNotFound;

export const deleteDataset: API.OperationMethod<
  DeleteDatasetRequest,
  DeleteDatasetResponse,
  DeleteDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDatasetRequest,
  output: DeleteDatasetResponse,
  errors: [DatasetNotFound],
}));

// =============================================================================
// DeploymentDynamicRouting
// =============================================================================

export interface CreateDeploymentDynamicRoutingRequest {
  gatewayId: string;
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  versionId: string;
}

export const CreateDeploymentDynamicRoutingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      versionId: Schema.String,
    }).pipe(
      Schema.encodeKeys({ versionId: "version_id" }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/routes/{id}/deployments",
      }),
    ),
  ) as unknown as Schema.Schema<CreateDeploymentDynamicRoutingRequest>;

export interface CreateDeploymentDynamicRoutingResponse {
  id: string;
  createdAt: string;
  elements?:
    | (
        | {
            id: string;
            outputs: { next: { elementId: string } };
            type: "start";
          }
        | {
            id: string;
            outputs: {
              false: { elementId: string };
              true: { elementId: string };
            };
            properties: { conditions?: unknown | null };
            type: "conditional";
          }
        | { id: string; outputs: Record<string, unknown>; type: "percentage" }
        | {
            id: string;
            outputs: {
              fallback: { elementId: string };
              success: { elementId: string };
            };
            properties: {
              key: string;
              limit: number;
              limitType: "count" | "cost" | (string & {});
              window: number;
            };
            type: "rate";
          }
        | {
            id: string;
            outputs: {
              fallback: { elementId: string };
              success: { elementId: string };
            };
            properties: {
              model: string;
              provider: string;
              retries: number;
              timeout: number;
            };
            type: "model";
          }
        | { id: string; outputs: Record<string, unknown>; type: "end" }
      )[]
    | null;
  gatewayId: string;
  modifiedAt: string;
  name: string;
}

export const CreateDeploymentDynamicRoutingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      elements: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  false: Schema.Struct({
                    elementId: Schema.String,
                  }),
                  true: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                properties: Schema.Struct({
                  conditions: Schema.optional(
                    Schema.Union([Schema.Unknown, Schema.Null]),
                  ),
                }),
                type: Schema.Literal("conditional"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  fallback: Schema.Struct({
                    elementId: Schema.String,
                  }),
                  success: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                properties: Schema.Struct({
                  key: Schema.String,
                  limit: Schema.Number,
                  limitType: Schema.Union([
                    Schema.Literals(["count", "cost"]),
                    Schema.String,
                  ]),
                  window: Schema.Number,
                }),
                type: Schema.Literal("rate"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  fallback: Schema.Struct({
                    elementId: Schema.String,
                  }),
                  success: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                properties: Schema.Struct({
                  model: Schema.String,
                  provider: Schema.String,
                  retries: Schema.Number,
                  timeout: Schema.Number,
                }),
                type: Schema.Literal("model"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  next: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                type: Schema.Literal("start"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Record(Schema.String, Schema.Unknown),
                type: Schema.Literal("percentage"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Record(Schema.String, Schema.Unknown),
                type: Schema.Literal("end"),
              }),
            ]),
          ),
          Schema.Null,
        ]),
      ),
      gatewayId: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          elements: "elements",
          gatewayId: "gateway_id",
          modifiedAt: "modified_at",
          name: "name",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateDeploymentDynamicRoutingResponse>;

export type CreateDeploymentDynamicRoutingError = DefaultErrors | RouteNotFound;

export const createDeploymentDynamicRouting: API.OperationMethod<
  CreateDeploymentDynamicRoutingRequest,
  CreateDeploymentDynamicRoutingResponse,
  CreateDeploymentDynamicRoutingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateDeploymentDynamicRoutingRequest,
  output: CreateDeploymentDynamicRoutingResponse,
  errors: [RouteNotFound],
}));

// =============================================================================
// DeploymentsDynamicRouting
// =============================================================================

export interface ListDeploymentsDynamicRoutingRequest {
  gatewayId: string;
  id: string;
  accountId: string;
}

export const ListDeploymentsDynamicRoutingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/routes/{id}/deployments",
      }),
    ),
  ) as unknown as Schema.Schema<ListDeploymentsDynamicRoutingRequest>;

export interface ListDeploymentsDynamicRoutingResponse {
  data: {
    deployments: {
      createdAt: string;
      deploymentId: string;
      versionId: string;
    }[];
    orderBy: string;
    orderByDirection: string;
    page: number;
    perPage: number;
  };
  success: boolean;
}

export const ListDeploymentsDynamicRoutingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.Struct({
        deployments: Schema.Array(
          Schema.Struct({
            createdAt: Schema.String,
            deploymentId: Schema.String,
            versionId: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              createdAt: "created_at",
              deploymentId: "deployment_id",
              versionId: "version_id",
            }),
          ),
        ),
        orderBy: Schema.String,
        orderByDirection: Schema.String,
        page: Schema.Number,
        perPage: Schema.Number,
      }).pipe(
        Schema.encodeKeys({
          deployments: "deployments",
          orderBy: "order_by",
          orderByDirection: "order_by_direction",
          page: "page",
          perPage: "per_page",
        }),
      ),
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Schema<ListDeploymentsDynamicRoutingResponse>;

export type ListDeploymentsDynamicRoutingError = DefaultErrors;

export const listDeploymentsDynamicRouting: API.OperationMethod<
  ListDeploymentsDynamicRoutingRequest,
  ListDeploymentsDynamicRoutingResponse,
  ListDeploymentsDynamicRoutingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListDeploymentsDynamicRoutingRequest,
  output: ListDeploymentsDynamicRoutingResponse,
  errors: [],
}));

// =============================================================================
// DynamicRouting
// =============================================================================

export interface GetDynamicRoutingRequest {
  gatewayId: string;
  id: string;
  accountId: string;
}

export const GetDynamicRoutingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/routes/{id}",
      }),
    ),
  ) as unknown as Schema.Schema<GetDynamicRoutingRequest>;

export interface GetDynamicRoutingResponse {
  id: string;
  createdAt: string;
  deployment: { createdAt: string; deploymentId: string; versionId: string };
  elements?:
    | (
        | {
            id: string;
            outputs: { next: { elementId: string } };
            type: "start";
          }
        | {
            id: string;
            outputs: {
              false: { elementId: string };
              true: { elementId: string };
            };
            properties: { conditions?: unknown | null };
            type: "conditional";
          }
        | { id: string; outputs: Record<string, unknown>; type: "percentage" }
        | {
            id: string;
            outputs: {
              fallback: { elementId: string };
              success: { elementId: string };
            };
            properties: {
              key: string;
              limit: number;
              limitType: "count" | "cost" | (string & {});
              window: number;
            };
            type: "rate";
          }
        | {
            id: string;
            outputs: {
              fallback: { elementId: string };
              success: { elementId: string };
            };
            properties: {
              model: string;
              provider: string;
              retries: number;
              timeout: number;
            };
            type: "model";
          }
        | { id: string; outputs: Record<string, unknown>; type: "end" }
      )[]
    | null;
  gatewayId: string;
  modifiedAt: string;
  name: string;
  version: {
    active: true | false;
    createdAt: string;
    data?: unknown | null;
    versionId: string;
    isValid?: boolean | null;
  };
}

export const GetDynamicRoutingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      deployment: Schema.Struct({
        createdAt: Schema.String,
        deploymentId: Schema.String,
        versionId: Schema.String,
      }).pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          deploymentId: "deployment_id",
          versionId: "version_id",
        }),
      ),
      elements: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  false: Schema.Struct({
                    elementId: Schema.String,
                  }),
                  true: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                properties: Schema.Struct({
                  conditions: Schema.optional(
                    Schema.Union([Schema.Unknown, Schema.Null]),
                  ),
                }),
                type: Schema.Literal("conditional"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  fallback: Schema.Struct({
                    elementId: Schema.String,
                  }),
                  success: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                properties: Schema.Struct({
                  key: Schema.String,
                  limit: Schema.Number,
                  limitType: Schema.Union([
                    Schema.Literals(["count", "cost"]),
                    Schema.String,
                  ]),
                  window: Schema.Number,
                }),
                type: Schema.Literal("rate"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  fallback: Schema.Struct({
                    elementId: Schema.String,
                  }),
                  success: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                properties: Schema.Struct({
                  model: Schema.String,
                  provider: Schema.String,
                  retries: Schema.Number,
                  timeout: Schema.Number,
                }),
                type: Schema.Literal("model"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  next: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                type: Schema.Literal("start"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Record(Schema.String, Schema.Unknown),
                type: Schema.Literal("percentage"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Record(Schema.String, Schema.Unknown),
                type: Schema.Literal("end"),
              }),
            ]),
          ),
          Schema.Null,
        ]),
      ),
      gatewayId: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
      version: Schema.Struct({
        active: Schema.Literals([true, false]),
        createdAt: Schema.String,
        data: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
        versionId: Schema.String,
        isValid: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      }).pipe(
        Schema.encodeKeys({
          active: "active",
          createdAt: "created_at",
          data: "data",
          versionId: "version_id",
          isValid: "is_valid",
        }),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          deployment: "deployment",
          elements: "elements",
          gatewayId: "gateway_id",
          modifiedAt: "modified_at",
          name: "name",
          version: "version",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetDynamicRoutingResponse>;

export type GetDynamicRoutingError =
  | DefaultErrors
  | RouteNotFound
  | GatewayNotFound;

export const getDynamicRouting: API.OperationMethod<
  GetDynamicRoutingRequest,
  GetDynamicRoutingResponse,
  GetDynamicRoutingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDynamicRoutingRequest,
  output: GetDynamicRoutingResponse,
  errors: [RouteNotFound, GatewayNotFound],
}));

export interface ListDynamicRoutingsRequest {
  gatewayId: string;
  /** Path param */
  accountId: string;
  /** Query param: Page number */
  page?: number;
  /** Query param: Number of routes per page */
  perPage?: number;
}

export const ListDynamicRoutingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/routes",
      }),
    ),
  ) as unknown as Schema.Schema<ListDynamicRoutingsRequest>;

export interface ListDynamicRoutingsResponse {
  data: {
    orderBy: string;
    orderByDirection: string;
    page: number;
    perPage: number;
    routes: {
      id: string;
      accountTag: string;
      createdAt: string;
      deployment: {
        createdAt: string;
        deploymentId: string;
        versionId: string;
      };
      elements?:
        | (
            | {
                id: string;
                outputs: { next: { elementId: string } };
                type: "start";
              }
            | {
                id: string;
                outputs: {
                  false: { elementId: string };
                  true: { elementId: string };
                };
                properties: { conditions?: unknown | null };
                type: "conditional";
              }
            | {
                id: string;
                outputs: Record<string, unknown>;
                type: "percentage";
              }
            | {
                id: string;
                outputs: {
                  fallback: { elementId: string };
                  success: { elementId: string };
                };
                properties: {
                  key: string;
                  limit: number;
                  limitType: "count" | "cost" | (string & {});
                  window: number;
                };
                type: "rate";
              }
            | {
                id: string;
                outputs: {
                  fallback: { elementId: string };
                  success: { elementId: string };
                };
                properties: {
                  model: string;
                  provider: string;
                  retries: number;
                  timeout: number;
                };
                type: "model";
              }
            | { id: string; outputs: Record<string, unknown>; type: "end" }
          )[]
        | null;
      gatewayId: string;
      modifiedAt: string;
      name: string;
      version: {
        active: true | false;
        createdAt: string;
        data?: unknown | null;
        versionId: string;
        isValid?: boolean | null;
      };
    }[];
  };
  success: boolean;
}

export const ListDynamicRoutingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.Struct({
        orderBy: Schema.String,
        orderByDirection: Schema.String,
        page: Schema.Number,
        perPage: Schema.Number,
        routes: Schema.Array(
          Schema.Struct({
            id: Schema.String,
            accountTag: Schema.String,
            createdAt: Schema.String,
            deployment: Schema.Struct({
              createdAt: Schema.String,
              deploymentId: Schema.String,
              versionId: Schema.String,
            }).pipe(
              Schema.encodeKeys({
                createdAt: "created_at",
                deploymentId: "deployment_id",
                versionId: "version_id",
              }),
            ),
            elements: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Union([
                    Schema.Struct({
                      id: Schema.String,
                      outputs: Schema.Struct({
                        false: Schema.Struct({
                          elementId: Schema.String,
                        }),
                        true: Schema.Struct({
                          elementId: Schema.String,
                        }),
                      }),
                      properties: Schema.Struct({
                        conditions: Schema.optional(
                          Schema.Union([Schema.Unknown, Schema.Null]),
                        ),
                      }),
                      type: Schema.Literal("conditional"),
                    }),
                    Schema.Struct({
                      id: Schema.String,
                      outputs: Schema.Struct({
                        fallback: Schema.Struct({
                          elementId: Schema.String,
                        }),
                        success: Schema.Struct({
                          elementId: Schema.String,
                        }),
                      }),
                      properties: Schema.Struct({
                        key: Schema.String,
                        limit: Schema.Number,
                        limitType: Schema.Union([
                          Schema.Literals(["count", "cost"]),
                          Schema.String,
                        ]),
                        window: Schema.Number,
                      }),
                      type: Schema.Literal("rate"),
                    }),
                    Schema.Struct({
                      id: Schema.String,
                      outputs: Schema.Struct({
                        fallback: Schema.Struct({
                          elementId: Schema.String,
                        }),
                        success: Schema.Struct({
                          elementId: Schema.String,
                        }),
                      }),
                      properties: Schema.Struct({
                        model: Schema.String,
                        provider: Schema.String,
                        retries: Schema.Number,
                        timeout: Schema.Number,
                      }),
                      type: Schema.Literal("model"),
                    }),
                    Schema.Struct({
                      id: Schema.String,
                      outputs: Schema.Struct({
                        next: Schema.Struct({
                          elementId: Schema.String,
                        }),
                      }),
                      type: Schema.Literal("start"),
                    }),
                    Schema.Struct({
                      id: Schema.String,
                      outputs: Schema.Record(Schema.String, Schema.Unknown),
                      type: Schema.Literal("percentage"),
                    }),
                    Schema.Struct({
                      id: Schema.String,
                      outputs: Schema.Record(Schema.String, Schema.Unknown),
                      type: Schema.Literal("end"),
                    }),
                  ]),
                ),
                Schema.Null,
              ]),
            ),
            gatewayId: Schema.String,
            modifiedAt: Schema.String,
            name: Schema.String,
            version: Schema.Struct({
              active: Schema.Literals([true, false]),
              createdAt: Schema.String,
              data: Schema.optional(
                Schema.Union([Schema.Unknown, Schema.Null]),
              ),
              versionId: Schema.String,
              isValid: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                active: "active",
                createdAt: "created_at",
                data: "data",
                versionId: "version_id",
                isValid: "is_valid",
              }),
            ),
          }).pipe(
            Schema.encodeKeys({
              id: "id",
              accountTag: "account_tag",
              createdAt: "created_at",
              deployment: "deployment",
              elements: "elements",
              gatewayId: "gateway_id",
              modifiedAt: "modified_at",
              name: "name",
              version: "version",
            }),
          ),
        ),
      }).pipe(
        Schema.encodeKeys({
          orderBy: "order_by",
          orderByDirection: "order_by_direction",
          page: "page",
          perPage: "per_page",
          routes: "routes",
        }),
      ),
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Schema<ListDynamicRoutingsResponse>;

export type ListDynamicRoutingsError = DefaultErrors | GatewayNotFound;

export const listDynamicRoutings: API.OperationMethod<
  ListDynamicRoutingsRequest,
  ListDynamicRoutingsResponse,
  ListDynamicRoutingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListDynamicRoutingsRequest,
  output: ListDynamicRoutingsResponse,
  errors: [GatewayNotFound],
}));

export interface CreateDynamicRoutingRequest {
  gatewayId: string;
  /** Path param */
  accountId: string;
  /** Body param */
  elements: (
    | { id: string; outputs: { next: { elementId: string } }; type: "start" }
    | {
        id: string;
        outputs: { false: { elementId: string }; true: { elementId: string } };
        properties: { conditions?: unknown };
        type: "conditional";
      }
    | { id: string; outputs: Record<string, unknown>; type: "percentage" }
    | {
        id: string;
        outputs: {
          fallback: { elementId: string };
          success: { elementId: string };
        };
        properties: {
          key: string;
          limit: number;
          limitType: "count" | "cost" | (string & {});
          window: number;
        };
        type: "rate";
      }
    | {
        id: string;
        outputs: {
          fallback: { elementId: string };
          success: { elementId: string };
        };
        properties: {
          model: string;
          provider: string;
          retries: number;
          timeout: number;
        };
        type: "model";
      }
    | { id: string; outputs: Record<string, unknown>; type: "end" }
  )[];
  /** Body param */
  name: string;
}

export const CreateDynamicRoutingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      elements: Schema.Array(
        Schema.Union([
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Struct({
              false: Schema.Struct({
                elementId: Schema.String,
              }),
              true: Schema.Struct({
                elementId: Schema.String,
              }),
            }),
            properties: Schema.Struct({
              conditions: Schema.optional(Schema.Unknown),
            }),
            type: Schema.Literal("conditional"),
          }),
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Struct({
              fallback: Schema.Struct({
                elementId: Schema.String,
              }),
              success: Schema.Struct({
                elementId: Schema.String,
              }),
            }),
            properties: Schema.Struct({
              key: Schema.String,
              limit: Schema.Number,
              limitType: Schema.Union([
                Schema.Literals(["count", "cost"]),
                Schema.String,
              ]),
              window: Schema.Number,
            }),
            type: Schema.Literal("rate"),
          }),
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Struct({
              fallback: Schema.Struct({
                elementId: Schema.String,
              }),
              success: Schema.Struct({
                elementId: Schema.String,
              }),
            }),
            properties: Schema.Struct({
              model: Schema.String,
              provider: Schema.String,
              retries: Schema.Number,
              timeout: Schema.Number,
            }),
            type: Schema.Literal("model"),
          }),
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Struct({
              next: Schema.Struct({
                elementId: Schema.String,
              }),
            }),
            type: Schema.Literal("start"),
          }),
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Record(Schema.String, Schema.Unknown),
            type: Schema.Literal("percentage"),
          }),
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Record(Schema.String, Schema.Unknown),
            type: Schema.Literal("end"),
          }),
        ]),
      ),
      name: Schema.String,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/routes",
      }),
    ),
  ) as unknown as Schema.Schema<CreateDynamicRoutingRequest>;

export interface CreateDynamicRoutingResponse {
  id: string;
  createdAt: string;
  deployment: { createdAt: string; deploymentId: string; versionId: string };
  elements?:
    | (
        | {
            id: string;
            outputs: { next: { elementId: string } };
            type: "start";
          }
        | {
            id: string;
            outputs: {
              false: { elementId: string };
              true: { elementId: string };
            };
            properties: { conditions?: unknown | null };
            type: "conditional";
          }
        | { id: string; outputs: Record<string, unknown>; type: "percentage" }
        | {
            id: string;
            outputs: {
              fallback: { elementId: string };
              success: { elementId: string };
            };
            properties: {
              key: string;
              limit: number;
              limitType: "count" | "cost" | (string & {});
              window: number;
            };
            type: "rate";
          }
        | {
            id: string;
            outputs: {
              fallback: { elementId: string };
              success: { elementId: string };
            };
            properties: {
              model: string;
              provider: string;
              retries: number;
              timeout: number;
            };
            type: "model";
          }
        | { id: string; outputs: Record<string, unknown>; type: "end" }
      )[]
    | null;
  gatewayId: string;
  modifiedAt: string;
  name: string;
  version: {
    active: true | false;
    createdAt: string;
    data?: unknown | null;
    versionId: string;
    isValid?: boolean | null;
  };
}

export const CreateDynamicRoutingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      deployment: Schema.Struct({
        createdAt: Schema.String,
        deploymentId: Schema.String,
        versionId: Schema.String,
      }).pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          deploymentId: "deployment_id",
          versionId: "version_id",
        }),
      ),
      elements: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  false: Schema.Struct({
                    elementId: Schema.String,
                  }),
                  true: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                properties: Schema.Struct({
                  conditions: Schema.optional(
                    Schema.Union([Schema.Unknown, Schema.Null]),
                  ),
                }),
                type: Schema.Literal("conditional"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  fallback: Schema.Struct({
                    elementId: Schema.String,
                  }),
                  success: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                properties: Schema.Struct({
                  key: Schema.String,
                  limit: Schema.Number,
                  limitType: Schema.Union([
                    Schema.Literals(["count", "cost"]),
                    Schema.String,
                  ]),
                  window: Schema.Number,
                }),
                type: Schema.Literal("rate"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  fallback: Schema.Struct({
                    elementId: Schema.String,
                  }),
                  success: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                properties: Schema.Struct({
                  model: Schema.String,
                  provider: Schema.String,
                  retries: Schema.Number,
                  timeout: Schema.Number,
                }),
                type: Schema.Literal("model"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  next: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                type: Schema.Literal("start"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Record(Schema.String, Schema.Unknown),
                type: Schema.Literal("percentage"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Record(Schema.String, Schema.Unknown),
                type: Schema.Literal("end"),
              }),
            ]),
          ),
          Schema.Null,
        ]),
      ),
      gatewayId: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
      version: Schema.Struct({
        active: Schema.Literals([true, false]),
        createdAt: Schema.String,
        data: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
        versionId: Schema.String,
        isValid: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      }).pipe(
        Schema.encodeKeys({
          active: "active",
          createdAt: "created_at",
          data: "data",
          versionId: "version_id",
          isValid: "is_valid",
        }),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          deployment: "deployment",
          elements: "elements",
          gatewayId: "gateway_id",
          modifiedAt: "modified_at",
          name: "name",
          version: "version",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateDynamicRoutingResponse>;

export type CreateDynamicRoutingError =
  | DefaultErrors
  | RouteAlreadyExists
  | GatewayNotFound;

export const createDynamicRouting: API.OperationMethod<
  CreateDynamicRoutingRequest,
  CreateDynamicRoutingResponse,
  CreateDynamicRoutingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateDynamicRoutingRequest,
  output: CreateDynamicRoutingResponse,
  errors: [RouteAlreadyExists, GatewayNotFound],
}));

export interface PatchDynamicRoutingRequest {
  gatewayId: string;
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  name: string;
}

export const PatchDynamicRoutingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/routes/{id}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchDynamicRoutingRequest>;

export interface PatchDynamicRoutingResponse {
  route: {
    id: string;
    accountTag: string;
    createdAt: string;
    deployment?: {
      createdAt: string;
      deploymentId: string;
      versionId: string;
    } | null;
    elements?:
      | (
          | {
              id: string;
              outputs: { next: { elementId: string } };
              type: "start";
            }
          | {
              id: string;
              outputs: {
                false: { elementId: string };
                true: { elementId: string };
              };
              properties: { conditions?: unknown | null };
              type: "conditional";
            }
          | { id: string; outputs: Record<string, unknown>; type: "percentage" }
          | {
              id: string;
              outputs: {
                fallback: { elementId: string };
                success: { elementId: string };
              };
              properties: {
                key: string;
                limit: number;
                limitType: "count" | "cost" | (string & {});
                window: number;
              };
              type: "rate";
            }
          | {
              id: string;
              outputs: {
                fallback: { elementId: string };
                success: { elementId: string };
              };
              properties: {
                model: string;
                provider: string;
                retries: number;
                timeout: number;
              };
              type: "model";
            }
          | { id: string; outputs: Record<string, unknown>; type: "end" }
        )[]
      | null;
    gatewayId: string;
    modifiedAt: string;
    name: string;
    version: {
      active: true | false;
      createdAt: string;
      data?: unknown | null;
      versionId: string;
      isValid?: boolean | null;
    };
  };
  success: boolean;
}

export const PatchDynamicRoutingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      route: Schema.Struct({
        id: Schema.String,
        accountTag: Schema.String,
        createdAt: Schema.String,
        deployment: Schema.optional(
          Schema.Union([
            Schema.Struct({
              createdAt: Schema.String,
              deploymentId: Schema.String,
              versionId: Schema.String,
            }).pipe(
              Schema.encodeKeys({
                createdAt: "created_at",
                deploymentId: "deployment_id",
                versionId: "version_id",
              }),
            ),
            Schema.Null,
          ]),
        ),
        elements: Schema.optional(
          Schema.Union([
            Schema.Array(
              Schema.Union([
                Schema.Struct({
                  id: Schema.String,
                  outputs: Schema.Struct({
                    false: Schema.Struct({
                      elementId: Schema.String,
                    }),
                    true: Schema.Struct({
                      elementId: Schema.String,
                    }),
                  }),
                  properties: Schema.Struct({
                    conditions: Schema.optional(
                      Schema.Union([Schema.Unknown, Schema.Null]),
                    ),
                  }),
                  type: Schema.Literal("conditional"),
                }),
                Schema.Struct({
                  id: Schema.String,
                  outputs: Schema.Struct({
                    fallback: Schema.Struct({
                      elementId: Schema.String,
                    }),
                    success: Schema.Struct({
                      elementId: Schema.String,
                    }),
                  }),
                  properties: Schema.Struct({
                    key: Schema.String,
                    limit: Schema.Number,
                    limitType: Schema.Union([
                      Schema.Literals(["count", "cost"]),
                      Schema.String,
                    ]),
                    window: Schema.Number,
                  }),
                  type: Schema.Literal("rate"),
                }),
                Schema.Struct({
                  id: Schema.String,
                  outputs: Schema.Struct({
                    fallback: Schema.Struct({
                      elementId: Schema.String,
                    }),
                    success: Schema.Struct({
                      elementId: Schema.String,
                    }),
                  }),
                  properties: Schema.Struct({
                    model: Schema.String,
                    provider: Schema.String,
                    retries: Schema.Number,
                    timeout: Schema.Number,
                  }),
                  type: Schema.Literal("model"),
                }),
                Schema.Struct({
                  id: Schema.String,
                  outputs: Schema.Struct({
                    next: Schema.Struct({
                      elementId: Schema.String,
                    }),
                  }),
                  type: Schema.Literal("start"),
                }),
                Schema.Struct({
                  id: Schema.String,
                  outputs: Schema.Record(Schema.String, Schema.Unknown),
                  type: Schema.Literal("percentage"),
                }),
                Schema.Struct({
                  id: Schema.String,
                  outputs: Schema.Record(Schema.String, Schema.Unknown),
                  type: Schema.Literal("end"),
                }),
              ]),
            ),
            Schema.Null,
          ]),
        ),
        gatewayId: Schema.String,
        modifiedAt: Schema.String,
        name: Schema.String,
        version: Schema.Struct({
          active: Schema.Literals([true, false]),
          createdAt: Schema.String,
          data: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
          versionId: Schema.String,
          isValid: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
        }).pipe(
          Schema.encodeKeys({
            active: "active",
            createdAt: "created_at",
            data: "data",
            versionId: "version_id",
            isValid: "is_valid",
          }),
        ),
      }).pipe(
        Schema.encodeKeys({
          id: "id",
          accountTag: "account_tag",
          createdAt: "created_at",
          deployment: "deployment",
          elements: "elements",
          gatewayId: "gateway_id",
          modifiedAt: "modified_at",
          name: "name",
          version: "version",
        }),
      ),
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Schema<PatchDynamicRoutingResponse>;

export type PatchDynamicRoutingError =
  | DefaultErrors
  | RouteNotFound
  | RouteAlreadyExists;

export const patchDynamicRouting: API.OperationMethod<
  PatchDynamicRoutingRequest,
  PatchDynamicRoutingResponse,
  PatchDynamicRoutingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchDynamicRoutingRequest,
  output: PatchDynamicRoutingResponse,
  errors: [RouteNotFound, RouteAlreadyExists],
}));

export interface DeleteDynamicRoutingRequest {
  gatewayId: string;
  id: string;
  accountId: string;
}

export const DeleteDynamicRoutingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/routes/{id}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteDynamicRoutingRequest>;

export interface DeleteDynamicRoutingResponse {
  id: string;
  createdAt: string;
  elements?:
    | (
        | {
            id: string;
            outputs: { next: { elementId: string } };
            type: "start";
          }
        | {
            id: string;
            outputs: {
              false: { elementId: string };
              true: { elementId: string };
            };
            properties: { conditions?: unknown | null };
            type: "conditional";
          }
        | { id: string; outputs: Record<string, unknown>; type: "percentage" }
        | {
            id: string;
            outputs: {
              fallback: { elementId: string };
              success: { elementId: string };
            };
            properties: {
              key: string;
              limit: number;
              limitType: "count" | "cost" | (string & {});
              window: number;
            };
            type: "rate";
          }
        | {
            id: string;
            outputs: {
              fallback: { elementId: string };
              success: { elementId: string };
            };
            properties: {
              model: string;
              provider: string;
              retries: number;
              timeout: number;
            };
            type: "model";
          }
        | { id: string; outputs: Record<string, unknown>; type: "end" }
      )[]
    | null;
  gatewayId: string;
  modifiedAt: string;
  name: string;
}

export const DeleteDynamicRoutingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      elements: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  false: Schema.Struct({
                    elementId: Schema.String,
                  }),
                  true: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                properties: Schema.Struct({
                  conditions: Schema.optional(
                    Schema.Union([Schema.Unknown, Schema.Null]),
                  ),
                }),
                type: Schema.Literal("conditional"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  fallback: Schema.Struct({
                    elementId: Schema.String,
                  }),
                  success: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                properties: Schema.Struct({
                  key: Schema.String,
                  limit: Schema.Number,
                  limitType: Schema.Union([
                    Schema.Literals(["count", "cost"]),
                    Schema.String,
                  ]),
                  window: Schema.Number,
                }),
                type: Schema.Literal("rate"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  fallback: Schema.Struct({
                    elementId: Schema.String,
                  }),
                  success: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                properties: Schema.Struct({
                  model: Schema.String,
                  provider: Schema.String,
                  retries: Schema.Number,
                  timeout: Schema.Number,
                }),
                type: Schema.Literal("model"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  next: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                type: Schema.Literal("start"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Record(Schema.String, Schema.Unknown),
                type: Schema.Literal("percentage"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Record(Schema.String, Schema.Unknown),
                type: Schema.Literal("end"),
              }),
            ]),
          ),
          Schema.Null,
        ]),
      ),
      gatewayId: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          elements: "elements",
          gatewayId: "gateway_id",
          modifiedAt: "modified_at",
          name: "name",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteDynamicRoutingResponse>;

export type DeleteDynamicRoutingError =
  | DefaultErrors
  | RouteNotFound
  | GatewayNotFound;

export const deleteDynamicRouting: API.OperationMethod<
  DeleteDynamicRoutingRequest,
  DeleteDynamicRoutingResponse,
  DeleteDynamicRoutingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDynamicRoutingRequest,
  output: DeleteDynamicRoutingResponse,
  errors: [RouteNotFound, GatewayNotFound],
}));

// =============================================================================
// Evaluation
// =============================================================================

export interface GetEvaluationRequest {
  gatewayId: string;
  id: string;
  accountId: string;
}

export const GetEvaluationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/evaluations/{id}",
      }),
    ),
) as unknown as Schema.Schema<GetEvaluationRequest>;

export interface GetEvaluationResponse {
  id: string;
  createdAt: string;
  datasets: {
    id: string;
    accountId?: string | null;
    accountTag?: string | null;
    createdAt: string;
    enable: unknown;
    filters: {
      key:
        | "created_at"
        | "request_content_type"
        | "response_content_type"
        | "success"
        | "cached"
        | "provider"
        | "model"
        | "cost"
        | "tokens"
        | "tokens_in"
        | "tokens_out"
        | "duration"
        | "feedback"
        | (string & {});
      operator: "eq" | "contains" | "lt" | "gt" | (string & {});
      value: (string | number | boolean)[];
    }[];
    gatewayId: string;
    modifiedAt: string;
    name: string;
  }[];
  /** gateway id */
  gatewayId: string;
  modifiedAt: string;
  name: string;
  processed: boolean;
  results: {
    id: string;
    createdAt: string;
    evaluationId: string;
    evaluationTypeId: string;
    modifiedAt: string;
    result: string;
    status: unknown;
    statusDescription: unknown;
    totalLogs: number;
  }[];
  totalLogs: number;
}

export const GetEvaluationResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      datasets: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          accountId: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          accountTag: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          createdAt: Schema.String,
          enable: Schema.Unknown,
          filters: Schema.Array(
            Schema.Struct({
              key: Schema.Union([
                Schema.Literals([
                  "created_at",
                  "request_content_type",
                  "response_content_type",
                  "success",
                  "cached",
                  "provider",
                  "model",
                  "cost",
                  "tokens",
                  "tokens_in",
                  "tokens_out",
                  "duration",
                  "feedback",
                ]),
                Schema.String,
              ]),
              operator: Schema.Union([
                Schema.Literals(["eq", "contains", "lt", "gt"]),
                Schema.String,
              ]),
              value: Schema.Array(
                Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
              ),
            }),
          ),
          gatewayId: Schema.String,
          modifiedAt: Schema.String,
          name: Schema.String,
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            accountId: "account_id",
            accountTag: "account_tag",
            createdAt: "created_at",
            enable: "enable",
            filters: "filters",
            gatewayId: "gateway_id",
            modifiedAt: "modified_at",
            name: "name",
          }),
        ),
      ),
      gatewayId: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
      processed: Schema.Boolean,
      results: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          createdAt: Schema.String,
          evaluationId: Schema.String,
          evaluationTypeId: Schema.String,
          modifiedAt: Schema.String,
          result: Schema.String,
          status: Schema.Unknown,
          statusDescription: Schema.Unknown,
          totalLogs: Schema.Number,
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            createdAt: "created_at",
            evaluationId: "evaluation_id",
            evaluationTypeId: "evaluation_type_id",
            modifiedAt: "modified_at",
            result: "result",
            status: "status",
            statusDescription: "status_description",
            totalLogs: "total_logs",
          }),
        ),
      ),
      totalLogs: Schema.Number,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          datasets: "datasets",
          gatewayId: "gateway_id",
          modifiedAt: "modified_at",
          name: "name",
          processed: "processed",
          results: "results",
          totalLogs: "total_logs",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetEvaluationResponse>;

export type GetEvaluationError = DefaultErrors | EvaluationNotFound;

export const getEvaluation: API.OperationMethod<
  GetEvaluationRequest,
  GetEvaluationResponse,
  GetEvaluationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEvaluationRequest,
  output: GetEvaluationResponse,
  errors: [EvaluationNotFound],
}));

export interface ListEvaluationsRequest {
  gatewayId: string;
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param */
  name?: string;
  /** Query param */
  processed?: boolean;
  /** Query param: Search by id, name */
  search?: string;
}

export const ListEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
      processed: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("processed")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/evaluations",
      }),
    ),
  ) as unknown as Schema.Schema<ListEvaluationsRequest>;

export interface ListEvaluationsResponse {
  result: {
    id: string;
    createdAt: string;
    datasets: {
      id: string;
      accountId?: string | null;
      accountTag?: string | null;
      createdAt: string;
      enable: unknown;
      filters: {
        key:
          | "created_at"
          | "request_content_type"
          | "response_content_type"
          | "success"
          | "cached"
          | "provider"
          | "model"
          | "cost"
          | "tokens"
          | "tokens_in"
          | "tokens_out"
          | "duration"
          | "feedback"
          | (string & {});
        operator: "eq" | "contains" | "lt" | "gt" | (string & {});
        value: (string | number | boolean)[];
      }[];
      gatewayId: string;
      modifiedAt: string;
      name: string;
    }[];
    gatewayId: string;
    modifiedAt: string;
    name: string;
    processed: boolean;
    results: {
      id: string;
      createdAt: string;
      evaluationId: string;
      evaluationTypeId: string;
      modifiedAt: string;
      result: string;
      status: unknown;
      statusDescription: unknown;
      totalLogs: number;
    }[];
    totalLogs: number;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          createdAt: Schema.String,
          datasets: Schema.Array(
            Schema.Struct({
              id: Schema.String,
              accountId: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              accountTag: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              createdAt: Schema.String,
              enable: Schema.Unknown,
              filters: Schema.Array(
                Schema.Struct({
                  key: Schema.Union([
                    Schema.Literals([
                      "created_at",
                      "request_content_type",
                      "response_content_type",
                      "success",
                      "cached",
                      "provider",
                      "model",
                      "cost",
                      "tokens",
                      "tokens_in",
                      "tokens_out",
                      "duration",
                      "feedback",
                    ]),
                    Schema.String,
                  ]),
                  operator: Schema.Union([
                    Schema.Literals(["eq", "contains", "lt", "gt"]),
                    Schema.String,
                  ]),
                  value: Schema.Array(
                    Schema.Union([
                      Schema.String,
                      Schema.Number,
                      Schema.Boolean,
                    ]),
                  ),
                }),
              ),
              gatewayId: Schema.String,
              modifiedAt: Schema.String,
              name: Schema.String,
            }).pipe(
              Schema.encodeKeys({
                id: "id",
                accountId: "account_id",
                accountTag: "account_tag",
                createdAt: "created_at",
                enable: "enable",
                filters: "filters",
                gatewayId: "gateway_id",
                modifiedAt: "modified_at",
                name: "name",
              }),
            ),
          ),
          gatewayId: Schema.String,
          modifiedAt: Schema.String,
          name: Schema.String,
          processed: Schema.Boolean,
          results: Schema.Array(
            Schema.Struct({
              id: Schema.String,
              createdAt: Schema.String,
              evaluationId: Schema.String,
              evaluationTypeId: Schema.String,
              modifiedAt: Schema.String,
              result: Schema.String,
              status: Schema.Unknown,
              statusDescription: Schema.Unknown,
              totalLogs: Schema.Number,
            }).pipe(
              Schema.encodeKeys({
                id: "id",
                createdAt: "created_at",
                evaluationId: "evaluation_id",
                evaluationTypeId: "evaluation_type_id",
                modifiedAt: "modified_at",
                result: "result",
                status: "status",
                statusDescription: "status_description",
                totalLogs: "total_logs",
              }),
            ),
          ),
          totalLogs: Schema.Number,
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            createdAt: "created_at",
            datasets: "datasets",
            gatewayId: "gateway_id",
            modifiedAt: "modified_at",
            name: "name",
            processed: "processed",
            results: "results",
            totalLogs: "total_logs",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListEvaluationsResponse>;

export type ListEvaluationsError = DefaultErrors;

export const listEvaluations: API.PaginatedOperationMethod<
  ListEvaluationsRequest,
  ListEvaluationsResponse,
  ListEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListEvaluationsRequest,
  output: ListEvaluationsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateEvaluationRequest {
  gatewayId: string;
  /** Path param */
  accountId: string;
  /** Body param */
  datasetIds: string[];
  /** Body param */
  evaluationTypeIds: string[];
  /** Body param */
  name: string;
}

export const CreateEvaluationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      datasetIds: Schema.Array(Schema.String),
      evaluationTypeIds: Schema.Array(Schema.String),
      name: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        datasetIds: "dataset_ids",
        evaluationTypeIds: "evaluation_type_ids",
        name: "name",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/evaluations",
      }),
    ),
  ) as unknown as Schema.Schema<CreateEvaluationRequest>;

export interface CreateEvaluationResponse {
  id: string;
  createdAt: string;
  datasets: {
    id: string;
    accountId?: string | null;
    accountTag?: string | null;
    createdAt: string;
    enable: unknown;
    filters: {
      key:
        | "created_at"
        | "request_content_type"
        | "response_content_type"
        | "success"
        | "cached"
        | "provider"
        | "model"
        | "cost"
        | "tokens"
        | "tokens_in"
        | "tokens_out"
        | "duration"
        | "feedback"
        | (string & {});
      operator: "eq" | "contains" | "lt" | "gt" | (string & {});
      value: (string | number | boolean)[];
    }[];
    gatewayId: string;
    modifiedAt: string;
    name: string;
  }[];
  /** gateway id */
  gatewayId: string;
  modifiedAt: string;
  name: string;
  processed: boolean;
  results: {
    id: string;
    createdAt: string;
    evaluationId: string;
    evaluationTypeId: string;
    modifiedAt: string;
    result: string;
    status: unknown;
    statusDescription: unknown;
    totalLogs: number;
  }[];
  totalLogs: number;
}

export const CreateEvaluationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      datasets: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          accountId: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          accountTag: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          createdAt: Schema.String,
          enable: Schema.Unknown,
          filters: Schema.Array(
            Schema.Struct({
              key: Schema.Union([
                Schema.Literals([
                  "created_at",
                  "request_content_type",
                  "response_content_type",
                  "success",
                  "cached",
                  "provider",
                  "model",
                  "cost",
                  "tokens",
                  "tokens_in",
                  "tokens_out",
                  "duration",
                  "feedback",
                ]),
                Schema.String,
              ]),
              operator: Schema.Union([
                Schema.Literals(["eq", "contains", "lt", "gt"]),
                Schema.String,
              ]),
              value: Schema.Array(
                Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
              ),
            }),
          ),
          gatewayId: Schema.String,
          modifiedAt: Schema.String,
          name: Schema.String,
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            accountId: "account_id",
            accountTag: "account_tag",
            createdAt: "created_at",
            enable: "enable",
            filters: "filters",
            gatewayId: "gateway_id",
            modifiedAt: "modified_at",
            name: "name",
          }),
        ),
      ),
      gatewayId: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
      processed: Schema.Boolean,
      results: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          createdAt: Schema.String,
          evaluationId: Schema.String,
          evaluationTypeId: Schema.String,
          modifiedAt: Schema.String,
          result: Schema.String,
          status: Schema.Unknown,
          statusDescription: Schema.Unknown,
          totalLogs: Schema.Number,
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            createdAt: "created_at",
            evaluationId: "evaluation_id",
            evaluationTypeId: "evaluation_type_id",
            modifiedAt: "modified_at",
            result: "result",
            status: "status",
            statusDescription: "status_description",
            totalLogs: "total_logs",
          }),
        ),
      ),
      totalLogs: Schema.Number,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          datasets: "datasets",
          gatewayId: "gateway_id",
          modifiedAt: "modified_at",
          name: "name",
          processed: "processed",
          results: "results",
          totalLogs: "total_logs",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateEvaluationResponse>;

export type CreateEvaluationError =
  | DefaultErrors
  | GatewayNotFound
  | EvaluationNameAlreadyExists;

export const createEvaluation: API.OperationMethod<
  CreateEvaluationRequest,
  CreateEvaluationResponse,
  CreateEvaluationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateEvaluationRequest,
  output: CreateEvaluationResponse,
  errors: [GatewayNotFound, EvaluationNameAlreadyExists],
}));

export interface DeleteEvaluationRequest {
  gatewayId: string;
  id: string;
  accountId: string;
}

export const DeleteEvaluationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/evaluations/{id}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteEvaluationRequest>;

export interface DeleteEvaluationResponse {
  id: string;
  createdAt: string;
  datasets?:
    | {
        id: string;
        accountId?: string | null;
        accountTag?: string | null;
        createdAt: string;
        enable: unknown;
        filters: {
          key:
            | "created_at"
            | "request_content_type"
            | "response_content_type"
            | "success"
            | "cached"
            | "provider"
            | "model"
            | "cost"
            | "tokens"
            | "tokens_in"
            | "tokens_out"
            | "duration"
            | "feedback"
            | (string & {});
          operator: "eq" | "contains" | "lt" | "gt" | (string & {});
          value: (string | number | boolean)[];
        }[];
        gatewayId: string;
        modifiedAt: string;
        name: string;
      }[]
    | null;
  /** gateway id */
  gatewayId: string;
  modifiedAt: string;
  name: string;
  processed: boolean;
  results?:
    | {
        id: string;
        createdAt: string;
        evaluationId: string;
        evaluationTypeId: string;
        modifiedAt: string;
        result: string;
        status: unknown;
        statusDescription: unknown;
        totalLogs: number;
      }[]
    | null;
  totalLogs: number;
}

export const DeleteEvaluationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      datasets: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
              accountId: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              accountTag: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              createdAt: Schema.String,
              enable: Schema.Unknown,
              filters: Schema.Array(
                Schema.Struct({
                  key: Schema.Union([
                    Schema.Literals([
                      "created_at",
                      "request_content_type",
                      "response_content_type",
                      "success",
                      "cached",
                      "provider",
                      "model",
                      "cost",
                      "tokens",
                      "tokens_in",
                      "tokens_out",
                      "duration",
                      "feedback",
                    ]),
                    Schema.String,
                  ]),
                  operator: Schema.Union([
                    Schema.Literals(["eq", "contains", "lt", "gt"]),
                    Schema.String,
                  ]),
                  value: Schema.Array(
                    Schema.Union([
                      Schema.String,
                      Schema.Number,
                      Schema.Boolean,
                    ]),
                  ),
                }),
              ),
              gatewayId: Schema.String,
              modifiedAt: Schema.String,
              name: Schema.String,
            }).pipe(
              Schema.encodeKeys({
                id: "id",
                accountId: "account_id",
                accountTag: "account_tag",
                createdAt: "created_at",
                enable: "enable",
                filters: "filters",
                gatewayId: "gateway_id",
                modifiedAt: "modified_at",
                name: "name",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
      gatewayId: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
      processed: Schema.Boolean,
      results: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
              createdAt: Schema.String,
              evaluationId: Schema.String,
              evaluationTypeId: Schema.String,
              modifiedAt: Schema.String,
              result: Schema.String,
              status: Schema.Unknown,
              statusDescription: Schema.Unknown,
              totalLogs: Schema.Number,
            }).pipe(
              Schema.encodeKeys({
                id: "id",
                createdAt: "created_at",
                evaluationId: "evaluation_id",
                evaluationTypeId: "evaluation_type_id",
                modifiedAt: "modified_at",
                result: "result",
                status: "status",
                statusDescription: "status_description",
                totalLogs: "total_logs",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
      totalLogs: Schema.Number,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          datasets: "datasets",
          gatewayId: "gateway_id",
          modifiedAt: "modified_at",
          name: "name",
          processed: "processed",
          results: "results",
          totalLogs: "total_logs",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteEvaluationResponse>;

export type DeleteEvaluationError = DefaultErrors | EvaluationNotFound;

export const deleteEvaluation: API.OperationMethod<
  DeleteEvaluationRequest,
  DeleteEvaluationResponse,
  DeleteEvaluationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteEvaluationRequest,
  output: DeleteEvaluationResponse,
  errors: [EvaluationNotFound],
}));

// =============================================================================
// EvaluationType
// =============================================================================

export interface ListEvaluationTypesRequest {
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param */
  orderBy?: string;
  /** Query param */
  orderByDirection?: "asc" | "desc" | (string & {});
}

export const ListEvaluationTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("order_by")),
      orderByDirection: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("order_by_direction")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/evaluation-types",
      }),
    ),
  ) as unknown as Schema.Schema<ListEvaluationTypesRequest>;

export interface ListEvaluationTypesResponse {
  result: {
    id: string;
    createdAt: string;
    description: string;
    enable: boolean;
    mandatory: boolean;
    modifiedAt: string;
    name: string;
    type: string;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListEvaluationTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          createdAt: Schema.String,
          description: Schema.String,
          enable: Schema.Boolean,
          mandatory: Schema.Boolean,
          modifiedAt: Schema.String,
          name: Schema.String,
          type: Schema.String,
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            createdAt: "created_at",
            description: "description",
            enable: "enable",
            mandatory: "mandatory",
            modifiedAt: "modified_at",
            name: "name",
            type: "type",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListEvaluationTypesResponse>;

export type ListEvaluationTypesError = DefaultErrors;

export const listEvaluationTypes: API.PaginatedOperationMethod<
  ListEvaluationTypesRequest,
  ListEvaluationTypesResponse,
  ListEvaluationTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListEvaluationTypesRequest,
  output: ListEvaluationTypesResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

// =============================================================================
// HistoryBilling
// =============================================================================

export interface InvoiceHistoryBillingRequest {
  /** Path param: Cloudflare account ID. */
  accountId: string;
  /** Query param: Filter invoice type: auto, manual, or all. */
  type?: "auto" | "all" | "manual" | (string & {});
}

export const InvoiceHistoryBillingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      type: Schema.optional(
        Schema.Union([
          Schema.Literals(["auto", "all", "manual"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("type")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/billing/invoice-history",
      }),
    ),
  ) as unknown as Schema.Schema<InvoiceHistoryBillingRequest>;

export interface InvoiceHistoryBillingResponse {
  invoices: {
    amountDue: number;
    amountPaid: number;
    amountRemaining: number;
    currency: string;
    id?: string | null;
    attemptCount?: number | null;
    attempted?: boolean | null;
    autoAdvance?: boolean | null;
    created?: number | null;
    createdBy?: string | null;
    description?: string | null;
    invoiceOrigin?: string | null;
    invoicePdf?: string | null;
    status?: string | null;
  }[];
  pagination: {
    hasMore: boolean;
    page: number;
    perPage: number;
    totalCount: number;
  };
}

export const InvoiceHistoryBillingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      invoices: Schema.Array(
        Schema.Struct({
          amountDue: Schema.Number,
          amountPaid: Schema.Number,
          amountRemaining: Schema.Number,
          currency: Schema.String,
          id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          attemptCount: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
          attempted: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          autoAdvance: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          created: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          createdBy: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          description: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          invoiceOrigin: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          invoicePdf: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }).pipe(
          Schema.encodeKeys({
            amountDue: "amount_due",
            amountPaid: "amount_paid",
            amountRemaining: "amount_remaining",
            currency: "currency",
            id: "id",
            attemptCount: "attempt_count",
            attempted: "attempted",
            autoAdvance: "auto_advance",
            created: "created",
            createdBy: "created_by",
            description: "description",
            invoiceOrigin: "invoice_origin",
            invoicePdf: "invoice_pdf",
            status: "status",
          }),
        ),
      ),
      pagination: Schema.Struct({
        hasMore: Schema.Boolean,
        page: Schema.Number,
        perPage: Schema.Number,
        totalCount: Schema.Number,
      }).pipe(
        Schema.encodeKeys({
          hasMore: "has_more",
          page: "page",
          perPage: "per_page",
          totalCount: "total_count",
        }),
      ),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<InvoiceHistoryBillingResponse>;

export type InvoiceHistoryBillingError = DefaultErrors;

export const invoiceHistoryBilling: API.OperationMethod<
  InvoiceHistoryBillingRequest,
  InvoiceHistoryBillingResponse,
  InvoiceHistoryBillingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InvoiceHistoryBillingRequest,
  output: InvoiceHistoryBillingResponse,
  errors: [],
}));

export interface UsageHistoryBillingRequest {
  /** Path param: Cloudflare account ID. */
  accountId: string;
  /** Query param: Grouping window for usage data. */
  valueGroupingWindow: "day" | "hour" | (string & {});
  /** Query param: End time as Unix timestamp in milliseconds. */
  endTime?: number | null;
  /** Query param: Start time as Unix timestamp in milliseconds. */
  startTime?: number | null;
}

export const UsageHistoryBillingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      valueGroupingWindow: Schema.Union([
        Schema.Literals(["day", "hour"]),
        Schema.String,
      ]).pipe(T.HttpQuery("value_grouping_window")),
      endTime: Schema.optional(Schema.Union([Schema.Number, Schema.Null])).pipe(
        T.HttpQuery("end_time"),
      ),
      startTime: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ).pipe(T.HttpQuery("start_time")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/billing/usage-history",
      }),
    ),
  ) as unknown as Schema.Schema<UsageHistoryBillingRequest>;

export interface UsageHistoryBillingResponse {
  history: {
    id: string;
    aggregatedValue: number;
    endTime: number;
    startTime: number;
  }[];
}

export const UsageHistoryBillingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      history: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          aggregatedValue: Schema.Number,
          endTime: Schema.Number,
          startTime: Schema.Number,
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            aggregatedValue: "aggregated_value",
            endTime: "end_time",
            startTime: "start_time",
          }),
        ),
      ),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<UsageHistoryBillingResponse>;

export type UsageHistoryBillingError = DefaultErrors;

export const usageHistoryBilling: API.OperationMethod<
  UsageHistoryBillingRequest,
  UsageHistoryBillingResponse,
  UsageHistoryBillingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UsageHistoryBillingRequest,
  output: UsageHistoryBillingResponse,
  errors: [],
}));

// =============================================================================
// Log
// =============================================================================

export interface GetLogRequest {
  gatewayId: string;
  id: string;
  accountId: string;
}

export const GetLogRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
    id: Schema.String.pipe(T.HttpPath("id")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/logs/{id}",
    }),
  ),
) as unknown as Schema.Schema<GetLogRequest>;

export interface GetLogResponse {
  id: string;
  cached: boolean;
  createdAt: string;
  duration: number;
  model: string;
  path: string;
  provider: string;
  success: boolean;
  tokensIn: number | null;
  tokensOut: number | null;
  cost?: number | null;
  customCost?: boolean | null;
  metadata?: string | null;
  modelType?: string | null;
  requestContentType?: string | null;
  requestHead?: string | null;
  requestHeadComplete?: boolean | null;
  requestSize?: number | null;
  requestType?: string | null;
  responseContentType?: string | null;
  responseHead?: string | null;
  responseHeadComplete?: boolean | null;
  responseSize?: number | null;
  statusCode?: number | null;
  step?: number | null;
}

export const GetLogResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    cached: Schema.Boolean,
    createdAt: Schema.String,
    duration: Schema.Number,
    model: Schema.String,
    path: Schema.String,
    provider: Schema.String,
    success: Schema.Boolean,
    tokensIn: Schema.Union([Schema.Number, Schema.Null]),
    tokensOut: Schema.Union([Schema.Number, Schema.Null]),
    cost: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    customCost: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    metadata: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modelType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    requestContentType: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    requestHead: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    requestHeadComplete: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    requestSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    requestType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    responseContentType: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    responseHead: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    responseHeadComplete: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    responseSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    statusCode: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    step: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        cached: "cached",
        createdAt: "created_at",
        duration: "duration",
        model: "model",
        path: "path",
        provider: "provider",
        success: "success",
        tokensIn: "tokens_in",
        tokensOut: "tokens_out",
        cost: "cost",
        customCost: "custom_cost",
        metadata: "metadata",
        modelType: "model_type",
        requestContentType: "request_content_type",
        requestHead: "request_head",
        requestHeadComplete: "request_head_complete",
        requestSize: "request_size",
        requestType: "request_type",
        responseContentType: "response_content_type",
        responseHead: "response_head",
        responseHeadComplete: "response_head_complete",
        responseSize: "response_size",
        statusCode: "status_code",
        step: "step",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetLogResponse>;

export type GetLogError = DefaultErrors;

export const getLog: API.OperationMethod<
  GetLogRequest,
  GetLogResponse,
  GetLogError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLogRequest,
  output: GetLogResponse,
  errors: [],
}));

export interface ListLogsRequest {
  gatewayId: string;
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
  /** @deprecated Query param */
  cached?: boolean;
  /** @deprecated Query param */
  direction?: "asc" | "desc" | (string & {});
  /** @deprecated Query param */
  endDate?: string;
  /** @deprecated Query param */
  feedback?: "0" | "1" | (string & {});
  /** Query param */
  filters?: {
    key:
      | "id"
      | "created_at"
      | "request_content_type"
      | "response_content_type"
      | "request_type"
      | "success"
      | "cached"
      | "provider"
      | "model"
      | "model_type"
      | "cost"
      | "tokens"
      | "tokens_in"
      | "tokens_out"
      | "duration"
      | "feedback"
      | "event_id"
      | "metadata.key"
      | "metadata.value"
      | "authentication"
      | "wholesale"
      | "compatibilityMode"
      | "dlp_action"
      | "user_agent"
      | (string & {});
    operator: "eq" | "neq" | "contains" | "lt" | "gt" | (string & {});
    value: (string | null | number | boolean)[];
  }[];
  /** @deprecated Query param */
  maxCost?: number;
  /** @deprecated Query param */
  maxDuration?: number;
  /** @deprecated Query param */
  maxTokensIn?: number;
  /** @deprecated Query param */
  maxTokensOut?: number;
  /** @deprecated Query param */
  maxTotalTokens?: number;
  /** Query param */
  metaInfo?: boolean;
  /** @deprecated Query param */
  minCost?: number;
  /** @deprecated Query param */
  minDuration?: number;
  /** @deprecated Query param */
  minTokensIn?: number;
  /** @deprecated Query param */
  minTokensOut?: number;
  /** @deprecated Query param */
  minTotalTokens?: number;
  /** @deprecated Query param */
  model?: string;
  /** @deprecated Query param */
  modelType?: string;
  /** Query param */
  orderBy?:
    | "created_at"
    | "provider"
    | "model"
    | "model_type"
    | "success"
    | "cached"
    | (string & {});
  /** Query param */
  orderByDirection?: "asc" | "desc" | (string & {});
  /** @deprecated Query param */
  provider?: string;
  /** @deprecated Query param */
  requestContentType?: string;
  /** @deprecated Query param */
  responseContentType?: string;
  /** Query param */
  search?: string;
  /** @deprecated Query param */
  startDate?: string;
  /** @deprecated Query param */
  success?: boolean;
}

export const ListLogsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    cached: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("cached")),
    direction: Schema.optional(
      Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
    ).pipe(T.HttpQuery("direction")),
    endDate: Schema.optional(Schema.String).pipe(T.HttpQuery("end_date")),
    feedback: Schema.optional(
      Schema.Union([Schema.Literals(["0", "1"]), Schema.String]),
    ).pipe(T.HttpQuery("feedback")),
    filters: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.Union([
            Schema.Literals([
              "id",
              "created_at",
              "request_content_type",
              "response_content_type",
              "request_type",
              "success",
              "cached",
              "provider",
              "model",
              "model_type",
              "cost",
              "tokens",
              "tokens_in",
              "tokens_out",
              "duration",
              "feedback",
              "event_id",
              "metadata.key",
              "metadata.value",
              "authentication",
              "wholesale",
              "compatibilityMode",
              "dlp_action",
              "user_agent",
            ]),
            Schema.String,
          ]),
          operator: Schema.Union([
            Schema.Literals(["eq", "neq", "contains", "lt", "gt"]),
            Schema.String,
          ]),
          value: Schema.Array(
            Schema.Union([
              Schema.String,
              Schema.Null,
              Schema.Number,
              Schema.Boolean,
            ]),
          ),
        }),
      ),
    ).pipe(T.HttpQuery("filters")),
    maxCost: Schema.optional(Schema.Number).pipe(T.HttpQuery("max_cost")),
    maxDuration: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max_duration"),
    ),
    maxTokensIn: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max_tokens_in"),
    ),
    maxTokensOut: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max_tokens_out"),
    ),
    maxTotalTokens: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("max_total_tokens"),
    ),
    metaInfo: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("meta_info")),
    minCost: Schema.optional(Schema.Number).pipe(T.HttpQuery("min_cost")),
    minDuration: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("min_duration"),
    ),
    minTokensIn: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("min_tokens_in"),
    ),
    minTokensOut: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("min_tokens_out"),
    ),
    minTotalTokens: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("min_total_tokens"),
    ),
    model: Schema.optional(Schema.String).pipe(T.HttpQuery("model")),
    modelType: Schema.optional(Schema.String).pipe(T.HttpQuery("model_type")),
    orderBy: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "created_at",
          "provider",
          "model",
          "model_type",
          "success",
          "cached",
        ]),
        Schema.String,
      ]),
    ).pipe(T.HttpQuery("order_by")),
    orderByDirection: Schema.optional(
      Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
    ).pipe(T.HttpQuery("order_by_direction")),
    provider: Schema.optional(Schema.String).pipe(T.HttpQuery("provider")),
    requestContentType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("request_content_type"),
    ),
    responseContentType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("response_content_type"),
    ),
    search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    startDate: Schema.optional(Schema.String).pipe(T.HttpQuery("start_date")),
    success: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("success")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/logs",
    }),
  ),
) as unknown as Schema.Schema<ListLogsRequest>;

export interface ListLogsResponse {
  result: {
    id: string;
    cached: boolean;
    createdAt: string;
    duration: number;
    model: string;
    path: string;
    provider: string;
    success: boolean;
    tokensIn: number | null;
    tokensOut: number | null;
    cost?: number | null;
    customCost?: boolean | null;
    metadata?: string | null;
    modelType?: string | null;
    requestContentType?: string | null;
    requestType?: string | null;
    responseContentType?: string | null;
    statusCode?: number | null;
    step?: number | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListLogsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        cached: Schema.Boolean,
        createdAt: Schema.String,
        duration: Schema.Number,
        model: Schema.String,
        path: Schema.String,
        provider: Schema.String,
        success: Schema.Boolean,
        tokensIn: Schema.Union([Schema.Number, Schema.Null]),
        tokensOut: Schema.Union([Schema.Number, Schema.Null]),
        cost: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        customCost: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        metadata: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        modelType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        requestContentType: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        requestType: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        responseContentType: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        statusCode: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        step: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      }).pipe(
        Schema.encodeKeys({
          id: "id",
          cached: "cached",
          createdAt: "created_at",
          duration: "duration",
          model: "model",
          path: "path",
          provider: "provider",
          success: "success",
          tokensIn: "tokens_in",
          tokensOut: "tokens_out",
          cost: "cost",
          customCost: "custom_cost",
          metadata: "metadata",
          modelType: "model_type",
          requestContentType: "request_content_type",
          requestType: "request_type",
          responseContentType: "response_content_type",
          statusCode: "status_code",
          step: "step",
        }),
      ),
    ),
    resultInfo: Schema.optional(
      Schema.Union([
        Schema.Struct({
          count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          totalCount: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            count: "count",
            page: "page",
            perPage: "per_page",
            totalCount: "total_count",
          }),
        ),
        Schema.Null,
      ]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Schema<ListLogsResponse>;

export type ListLogsError = DefaultErrors;

export const listLogs: API.PaginatedOperationMethod<
  ListLogsRequest,
  ListLogsResponse,
  ListLogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLogsRequest,
  output: ListLogsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface PatchLogRequest {
  gatewayId: string;
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  feedback?: number | null;
  /** Body param */
  metadata?: Record<string, unknown> | null;
  /** Body param */
  score?: number | null;
}

export const PatchLogRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
    id: Schema.String.pipe(T.HttpPath("id")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    feedback: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    metadata: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    score: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/logs/{id}",
    }),
  ),
) as unknown as Schema.Schema<PatchLogRequest>;

export type PatchLogResponse = unknown;

export const PatchLogResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<PatchLogResponse>;

export type PatchLogError = DefaultErrors;

export const patchLog: API.OperationMethod<
  PatchLogRequest,
  PatchLogResponse,
  PatchLogError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchLogRequest,
  output: PatchLogResponse,
  errors: [],
}));

export interface DeleteLogRequest {
  gatewayId: string;
  /** Path param */
  accountId: string;
  /** Query param */
  filters?: {
    key:
      | "id"
      | "created_at"
      | "request_content_type"
      | "response_content_type"
      | "request_type"
      | "success"
      | "cached"
      | "provider"
      | "model"
      | "model_type"
      | "cost"
      | "tokens"
      | "tokens_in"
      | "tokens_out"
      | "duration"
      | "feedback"
      | "event_id"
      | "metadata.key"
      | "metadata.value"
      | "authentication"
      | "wholesale"
      | "compatibilityMode"
      | "dlp_action"
      | "user_agent"
      | (string & {});
    operator: "eq" | "neq" | "contains" | "lt" | "gt" | (string & {});
    value: (string | null | number | boolean)[];
  }[];
  /** Query param */
  limit?: number;
  /** Query param */
  orderBy?:
    | "created_at"
    | "provider"
    | "model"
    | "model_type"
    | "success"
    | "cached"
    | "cost"
    | "tokens_in"
    | "tokens_out"
    | "duration"
    | "feedback"
    | (string & {});
  /** Query param */
  orderByDirection?: "asc" | "desc" | (string & {});
}

export const DeleteLogRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    filters: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.Union([
            Schema.Literals([
              "id",
              "created_at",
              "request_content_type",
              "response_content_type",
              "request_type",
              "success",
              "cached",
              "provider",
              "model",
              "model_type",
              "cost",
              "tokens",
              "tokens_in",
              "tokens_out",
              "duration",
              "feedback",
              "event_id",
              "metadata.key",
              "metadata.value",
              "authentication",
              "wholesale",
              "compatibilityMode",
              "dlp_action",
              "user_agent",
            ]),
            Schema.String,
          ]),
          operator: Schema.Union([
            Schema.Literals(["eq", "neq", "contains", "lt", "gt"]),
            Schema.String,
          ]),
          value: Schema.Array(
            Schema.Union([
              Schema.String,
              Schema.Null,
              Schema.Number,
              Schema.Boolean,
            ]),
          ),
        }),
      ),
    ).pipe(T.HttpQuery("filters")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    orderBy: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "created_at",
          "provider",
          "model",
          "model_type",
          "success",
          "cached",
          "cost",
          "tokens_in",
          "tokens_out",
          "duration",
          "feedback",
        ]),
        Schema.String,
      ]),
    ).pipe(T.HttpQuery("order_by")),
    orderByDirection: Schema.optional(
      Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
    ).pipe(T.HttpQuery("order_by_direction")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/logs",
    }),
  ),
) as unknown as Schema.Schema<DeleteLogRequest>;

export interface DeleteLogResponse {
  success: boolean;
}

export const DeleteLogResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      success: Schema.Boolean,
    }),
) as unknown as Schema.Schema<DeleteLogResponse>;

export type DeleteLogError = DefaultErrors;

export const deleteLog: API.OperationMethod<
  DeleteLogRequest,
  DeleteLogResponse,
  DeleteLogError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteLogRequest,
  output: DeleteLogResponse,
  errors: [],
}));

export interface RequestLogRequest {
  gatewayId: string;
  id: string;
  accountId: string;
}

export const RequestLogRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/logs/{id}/request",
      }),
    ),
) as unknown as Schema.Schema<RequestLogRequest>;

export type RequestLogResponse = unknown;

export const RequestLogResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Unknown,
) as unknown as Schema.Schema<RequestLogResponse>;

export type RequestLogError = DefaultErrors;

export const requestLog: API.OperationMethod<
  RequestLogRequest,
  RequestLogResponse,
  RequestLogError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RequestLogRequest,
  output: RequestLogResponse,
  errors: [],
}));

export interface ResponseLogRequest {
  gatewayId: string;
  id: string;
  accountId: string;
}

export const ResponseLogRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/logs/{id}/response",
      }),
    ),
) as unknown as Schema.Schema<ResponseLogRequest>;

export type ResponseLogResponse = unknown;

export const ResponseLogResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Unknown,
) as unknown as Schema.Schema<ResponseLogResponse>;

export type ResponseLogError = DefaultErrors;

export const responseLog: API.OperationMethod<
  ResponseLogRequest,
  ResponseLogResponse,
  ResponseLogError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResponseLogRequest,
  output: ResponseLogResponse,
  errors: [],
}));

// =============================================================================
// PreviewBilling
// =============================================================================

export interface InvoicePreviewBillingRequest {
  /** Cloudflare account ID. */
  accountId: string;
}

export const InvoicePreviewBillingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/billing/invoice-preview",
      }),
    ),
  ) as unknown as Schema.Schema<InvoicePreviewBillingRequest>;

export interface InvoicePreviewBillingResponse {
  id: string;
  amountDue: number;
  amountPaid: number;
  amountRemaining: number;
  currency: string;
  invoiceLines: {
    amount: number;
    currency: string;
    description: string | null;
    period: { end: number; start: number };
    pricing: { unitAmountDecimal: string | null };
    quantity: number;
    pretaxCreditAmounts?:
      | {
          amount: number;
          type: string;
          creditBalanceTransaction?: string | null;
          discount?: string | null;
        }[]
      | null;
  }[];
  periodEnd: number;
  periodStart: number;
  status: "draft" | "open" | "paid" | "uncollectible" | "void" | (string & {});
}

export const InvoicePreviewBillingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      amountDue: Schema.Number,
      amountPaid: Schema.Number,
      amountRemaining: Schema.Number,
      currency: Schema.String,
      invoiceLines: Schema.Array(
        Schema.Struct({
          amount: Schema.Number,
          currency: Schema.String,
          description: Schema.Union([Schema.String, Schema.Null]),
          period: Schema.Struct({
            end: Schema.Number,
            start: Schema.Number,
          }),
          pricing: Schema.Struct({
            unitAmountDecimal: Schema.Union([Schema.String, Schema.Null]),
          }).pipe(
            Schema.encodeKeys({ unitAmountDecimal: "unit_amount_decimal" }),
          ),
          quantity: Schema.Number,
          pretaxCreditAmounts: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  amount: Schema.Number,
                  type: Schema.String,
                  creditBalanceTransaction: Schema.optional(
                    Schema.Union([Schema.String, Schema.Null]),
                  ),
                  discount: Schema.optional(
                    Schema.Union([Schema.String, Schema.Null]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    amount: "amount",
                    type: "type",
                    creditBalanceTransaction: "credit_balance_transaction",
                    discount: "discount",
                  }),
                ),
              ),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            amount: "amount",
            currency: "currency",
            description: "description",
            period: "period",
            pricing: "pricing",
            quantity: "quantity",
            pretaxCreditAmounts: "pretax_credit_amounts",
          }),
        ),
      ),
      periodEnd: Schema.Number,
      periodStart: Schema.Number,
      status: Schema.Union([
        Schema.Literals(["draft", "open", "paid", "uncollectible", "void"]),
        Schema.String,
      ]),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          amountDue: "amount_due",
          amountPaid: "amount_paid",
          amountRemaining: "amount_remaining",
          currency: "currency",
          invoiceLines: "invoice_lines",
          periodEnd: "period_end",
          periodStart: "period_start",
          status: "status",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<InvoicePreviewBillingResponse>;

export type InvoicePreviewBillingError = DefaultErrors;

export const invoicePreviewBilling: API.OperationMethod<
  InvoicePreviewBillingRequest,
  InvoicePreviewBillingResponse,
  InvoicePreviewBillingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InvoicePreviewBillingRequest,
  output: InvoicePreviewBillingResponse,
  errors: [],
}));

// =============================================================================
// ProviderConfig
// =============================================================================

export interface ListProviderConfigsRequest {
  gatewayId: string;
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
}

export const ListProviderConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/provider_configs",
      }),
    ),
  ) as unknown as Schema.Schema<ListProviderConfigsRequest>;

export interface ListProviderConfigsResponse {
  result: {
    id: string;
    alias: string;
    defaultConfig: unknown;
    gatewayId: string;
    modifiedAt: string;
    providerSlug: string;
    secretId: string;
    secretPreview: string;
    rateLimit?: number | null;
    rateLimitPeriod?: number | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListProviderConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          alias: Schema.String,
          defaultConfig: Schema.Unknown,
          gatewayId: Schema.String,
          modifiedAt: Schema.String,
          providerSlug: Schema.String,
          secretId: Schema.String,
          secretPreview: Schema.String,
          rateLimit: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
          rateLimitPeriod: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            alias: "alias",
            defaultConfig: "default_config",
            gatewayId: "gateway_id",
            modifiedAt: "modified_at",
            providerSlug: "provider_slug",
            secretId: "secret_id",
            secretPreview: "secret_preview",
            rateLimit: "rate_limit",
            rateLimitPeriod: "rate_limit_period",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListProviderConfigsResponse>;

export type ListProviderConfigsError = DefaultErrors;

export const listProviderConfigs: API.PaginatedOperationMethod<
  ListProviderConfigsRequest,
  ListProviderConfigsResponse,
  ListProviderConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProviderConfigsRequest,
  output: ListProviderConfigsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateProviderConfigRequest {
  gatewayId: string;
  /** Path param */
  accountId: string;
  /** Body param */
  alias: string;
  /** Body param */
  defaultConfig: boolean;
  /** Body param */
  providerSlug: string;
  /** Body param */
  rateLimit?: number;
  /** Body param */
  rateLimitPeriod?: number;
  /** Body param */
  secret?: string;
  /** Body param */
  secretId?: string;
}

export const CreateProviderConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      alias: Schema.String,
      defaultConfig: Schema.Boolean,
      providerSlug: Schema.String,
      rateLimit: Schema.optional(Schema.Number),
      rateLimitPeriod: Schema.optional(Schema.Number),
      secret: Schema.optional(Schema.String),
      secretId: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        alias: "alias",
        defaultConfig: "default_config",
        providerSlug: "provider_slug",
        rateLimit: "rate_limit",
        rateLimitPeriod: "rate_limit_period",
        secret: "secret",
        secretId: "secret_id",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/provider_configs",
      }),
    ),
  ) as unknown as Schema.Schema<CreateProviderConfigRequest>;

export interface CreateProviderConfigResponse {
  id: string;
  alias: string;
  defaultConfig: unknown;
  /** gateway id */
  gatewayId: string;
  modifiedAt: string;
  providerSlug: string;
  secretId: string;
  secretPreview: string;
  rateLimit?: number | null;
  rateLimitPeriod?: number | null;
}

export const CreateProviderConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      alias: Schema.String,
      defaultConfig: Schema.Unknown,
      gatewayId: Schema.String,
      modifiedAt: Schema.String,
      providerSlug: Schema.String,
      secretId: Schema.String,
      secretPreview: Schema.String,
      rateLimit: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      rateLimitPeriod: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          alias: "alias",
          defaultConfig: "default_config",
          gatewayId: "gateway_id",
          modifiedAt: "modified_at",
          providerSlug: "provider_slug",
          secretId: "secret_id",
          secretPreview: "secret_preview",
          rateLimit: "rate_limit",
          rateLimitPeriod: "rate_limit_period",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateProviderConfigResponse>;

export type CreateProviderConfigError =
  | DefaultErrors
  | ProviderConfigSecretNotFound
  | ProviderConfigAlreadyExists
  | GatewayNotFound;

export const createProviderConfig: API.OperationMethod<
  CreateProviderConfigRequest,
  CreateProviderConfigResponse,
  CreateProviderConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProviderConfigRequest,
  output: CreateProviderConfigResponse,
  errors: [
    ProviderConfigSecretNotFound,
    ProviderConfigAlreadyExists,
    GatewayNotFound,
  ],
}));

export interface DeleteProviderConfigRequest {
  /** Account identifier */
  accountId: string;
  /** Gateway identifier */
  gatewayId: string;
  /** Provider config identifier */
  id: string;
}

export const DeleteProviderConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      id: Schema.String.pipe(T.HttpPath("id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/provider_configs/{id}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteProviderConfigRequest>;

export interface DeleteProviderConfigResponse {
  /** Provider config identifier */
  id: string;
  /** Alias of the deleted provider config */
  alias?: string | null;
  /** Provider slug (e.g. openai) */
  providerSlug?: string | null;
  /** The gateway the config belonged to */
  gatewayId?: string | null;
  /** Secrets Store secret id the config referenced */
  secretId?: string | null;
  /** When the config was last modified */
  modifiedAt?: string | null;
}

export const DeleteProviderConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      alias: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      providerSlug: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      gatewayId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      secretId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          alias: "alias",
          providerSlug: "provider_slug",
          gatewayId: "gateway_id",
          secretId: "secret_id",
          modifiedAt: "modified_at",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteProviderConfigResponse>;

export type DeleteProviderConfigError = DefaultErrors | ProviderConfigNotFound;

export const deleteProviderConfig: API.OperationMethod<
  DeleteProviderConfigRequest,
  DeleteProviderConfigResponse,
  DeleteProviderConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProviderConfigRequest,
  output: DeleteProviderConfigResponse,
  errors: [ProviderConfigNotFound],
}));

// =============================================================================
// Url
// =============================================================================

export interface GetUrlRequest {
  gatewayId: string;
  provider: string;
  accountId: string;
}

export const GetUrlRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
    provider: Schema.String.pipe(T.HttpPath("provider")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/url/{provider}",
    }),
  ),
) as unknown as Schema.Schema<GetUrlRequest>;

export type GetUrlResponse = string;

export const GetUrlResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.String.pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetUrlResponse>;

export type GetUrlError = DefaultErrors;

export const getUrl: API.OperationMethod<
  GetUrlRequest,
  GetUrlResponse,
  GetUrlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUrlRequest,
  output: GetUrlResponse,
  errors: [],
}));

// =============================================================================
// VersionDynamicRouting
// =============================================================================

export interface GetVersionDynamicRoutingRequest {
  gatewayId: string;
  id: string;
  versionId: string;
  accountId: string;
}

export const GetVersionDynamicRoutingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      id: Schema.String.pipe(T.HttpPath("id")),
      versionId: Schema.String.pipe(T.HttpPath("versionId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/routes/{id}/versions/{versionId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetVersionDynamicRoutingRequest>;

export interface GetVersionDynamicRoutingResponse {
  id: string;
  active: true | false;
  createdAt: string;
  data: string;
  elements: (
    | { id: string; outputs: { next: { elementId: string } }; type: "start" }
    | {
        id: string;
        outputs: { false: { elementId: string }; true: { elementId: string } };
        properties: { conditions?: unknown | null };
        type: "conditional";
      }
    | { id: string; outputs: Record<string, unknown>; type: "percentage" }
    | {
        id: string;
        outputs: {
          fallback: { elementId: string };
          success: { elementId: string };
        };
        properties: {
          key: string;
          limit: number;
          limitType: "count" | "cost" | (string & {});
          window: number;
        };
        type: "rate";
      }
    | {
        id: string;
        outputs: {
          fallback: { elementId: string };
          success: { elementId: string };
        };
        properties: {
          model: string;
          provider: string;
          retries: number;
          timeout: number;
        };
        type: "model";
      }
    | { id: string; outputs: Record<string, unknown>; type: "end" }
  )[];
  gatewayId: string;
  modifiedAt: string;
  name: string;
  versionId: string;
  isValid?: boolean | null;
}

export const GetVersionDynamicRoutingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      active: Schema.Literals([true, false]),
      createdAt: Schema.String,
      data: Schema.String,
      elements: Schema.Array(
        Schema.Union([
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Struct({
              false: Schema.Struct({
                elementId: Schema.String,
              }),
              true: Schema.Struct({
                elementId: Schema.String,
              }),
            }),
            properties: Schema.Struct({
              conditions: Schema.optional(
                Schema.Union([Schema.Unknown, Schema.Null]),
              ),
            }),
            type: Schema.Literal("conditional"),
          }),
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Struct({
              fallback: Schema.Struct({
                elementId: Schema.String,
              }),
              success: Schema.Struct({
                elementId: Schema.String,
              }),
            }),
            properties: Schema.Struct({
              key: Schema.String,
              limit: Schema.Number,
              limitType: Schema.Union([
                Schema.Literals(["count", "cost"]),
                Schema.String,
              ]),
              window: Schema.Number,
            }),
            type: Schema.Literal("rate"),
          }),
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Struct({
              fallback: Schema.Struct({
                elementId: Schema.String,
              }),
              success: Schema.Struct({
                elementId: Schema.String,
              }),
            }),
            properties: Schema.Struct({
              model: Schema.String,
              provider: Schema.String,
              retries: Schema.Number,
              timeout: Schema.Number,
            }),
            type: Schema.Literal("model"),
          }),
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Struct({
              next: Schema.Struct({
                elementId: Schema.String,
              }),
            }),
            type: Schema.Literal("start"),
          }),
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Record(Schema.String, Schema.Unknown),
            type: Schema.Literal("percentage"),
          }),
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Record(Schema.String, Schema.Unknown),
            type: Schema.Literal("end"),
          }),
        ]),
      ),
      gatewayId: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
      versionId: Schema.String,
      isValid: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          active: "active",
          createdAt: "created_at",
          data: "data",
          elements: "elements",
          gatewayId: "gateway_id",
          modifiedAt: "modified_at",
          name: "name",
          versionId: "version_id",
          isValid: "is_valid",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetVersionDynamicRoutingResponse>;

export type GetVersionDynamicRoutingError = DefaultErrors;

export const getVersionDynamicRouting: API.OperationMethod<
  GetVersionDynamicRoutingRequest,
  GetVersionDynamicRoutingResponse,
  GetVersionDynamicRoutingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVersionDynamicRoutingRequest,
  output: GetVersionDynamicRoutingResponse,
  errors: [],
}));

export interface CreateVersionDynamicRoutingRequest {
  gatewayId: string;
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  elements: (
    | { id: string; outputs: { next: { elementId: string } }; type: "start" }
    | {
        id: string;
        outputs: { false: { elementId: string }; true: { elementId: string } };
        properties: { conditions?: unknown };
        type: "conditional";
      }
    | { id: string; outputs: Record<string, unknown>; type: "percentage" }
    | {
        id: string;
        outputs: {
          fallback: { elementId: string };
          success: { elementId: string };
        };
        properties: {
          key: string;
          limit: number;
          limitType: "count" | "cost" | (string & {});
          window: number;
        };
        type: "rate";
      }
    | {
        id: string;
        outputs: {
          fallback: { elementId: string };
          success: { elementId: string };
        };
        properties: {
          model: string;
          provider: string;
          retries: number;
          timeout: number;
        };
        type: "model";
      }
    | { id: string; outputs: Record<string, unknown>; type: "end" }
  )[];
}

export const CreateVersionDynamicRoutingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      elements: Schema.Array(
        Schema.Union([
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Struct({
              false: Schema.Struct({
                elementId: Schema.String,
              }),
              true: Schema.Struct({
                elementId: Schema.String,
              }),
            }),
            properties: Schema.Struct({
              conditions: Schema.optional(Schema.Unknown),
            }),
            type: Schema.Literal("conditional"),
          }),
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Struct({
              fallback: Schema.Struct({
                elementId: Schema.String,
              }),
              success: Schema.Struct({
                elementId: Schema.String,
              }),
            }),
            properties: Schema.Struct({
              key: Schema.String,
              limit: Schema.Number,
              limitType: Schema.Union([
                Schema.Literals(["count", "cost"]),
                Schema.String,
              ]),
              window: Schema.Number,
            }),
            type: Schema.Literal("rate"),
          }),
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Struct({
              fallback: Schema.Struct({
                elementId: Schema.String,
              }),
              success: Schema.Struct({
                elementId: Schema.String,
              }),
            }),
            properties: Schema.Struct({
              model: Schema.String,
              provider: Schema.String,
              retries: Schema.Number,
              timeout: Schema.Number,
            }),
            type: Schema.Literal("model"),
          }),
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Struct({
              next: Schema.Struct({
                elementId: Schema.String,
              }),
            }),
            type: Schema.Literal("start"),
          }),
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Record(Schema.String, Schema.Unknown),
            type: Schema.Literal("percentage"),
          }),
          Schema.Struct({
            id: Schema.String,
            outputs: Schema.Record(Schema.String, Schema.Unknown),
            type: Schema.Literal("end"),
          }),
        ]),
      ),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/routes/{id}/versions",
      }),
    ),
  ) as unknown as Schema.Schema<CreateVersionDynamicRoutingRequest>;

export interface CreateVersionDynamicRoutingResponse {
  id: string;
  createdAt: string;
  elements?:
    | (
        | {
            id: string;
            outputs: { next: { elementId: string } };
            type: "start";
          }
        | {
            id: string;
            outputs: {
              false: { elementId: string };
              true: { elementId: string };
            };
            properties: { conditions?: unknown | null };
            type: "conditional";
          }
        | { id: string; outputs: Record<string, unknown>; type: "percentage" }
        | {
            id: string;
            outputs: {
              fallback: { elementId: string };
              success: { elementId: string };
            };
            properties: {
              key: string;
              limit: number;
              limitType: "count" | "cost" | (string & {});
              window: number;
            };
            type: "rate";
          }
        | {
            id: string;
            outputs: {
              fallback: { elementId: string };
              success: { elementId: string };
            };
            properties: {
              model: string;
              provider: string;
              retries: number;
              timeout: number;
            };
            type: "model";
          }
        | { id: string; outputs: Record<string, unknown>; type: "end" }
      )[]
    | null;
  gatewayId: string;
  modifiedAt: string;
  name: string;
  versionId: string;
}

export const CreateVersionDynamicRoutingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      elements: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  false: Schema.Struct({
                    elementId: Schema.String,
                  }),
                  true: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                properties: Schema.Struct({
                  conditions: Schema.optional(
                    Schema.Union([Schema.Unknown, Schema.Null]),
                  ),
                }),
                type: Schema.Literal("conditional"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  fallback: Schema.Struct({
                    elementId: Schema.String,
                  }),
                  success: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                properties: Schema.Struct({
                  key: Schema.String,
                  limit: Schema.Number,
                  limitType: Schema.Union([
                    Schema.Literals(["count", "cost"]),
                    Schema.String,
                  ]),
                  window: Schema.Number,
                }),
                type: Schema.Literal("rate"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  fallback: Schema.Struct({
                    elementId: Schema.String,
                  }),
                  success: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                properties: Schema.Struct({
                  model: Schema.String,
                  provider: Schema.String,
                  retries: Schema.Number,
                  timeout: Schema.Number,
                }),
                type: Schema.Literal("model"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Struct({
                  next: Schema.Struct({
                    elementId: Schema.String,
                  }),
                }),
                type: Schema.Literal("start"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Record(Schema.String, Schema.Unknown),
                type: Schema.Literal("percentage"),
              }),
              Schema.Struct({
                id: Schema.String,
                outputs: Schema.Record(Schema.String, Schema.Unknown),
                type: Schema.Literal("end"),
              }),
            ]),
          ),
          Schema.Null,
        ]),
      ),
      gatewayId: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
      versionId: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          elements: "elements",
          gatewayId: "gateway_id",
          modifiedAt: "modified_at",
          name: "name",
          versionId: "version_id",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateVersionDynamicRoutingResponse>;

export type CreateVersionDynamicRoutingError = DefaultErrors | RouteNotFound;

export const createVersionDynamicRouting: API.OperationMethod<
  CreateVersionDynamicRoutingRequest,
  CreateVersionDynamicRoutingResponse,
  CreateVersionDynamicRoutingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateVersionDynamicRoutingRequest,
  output: CreateVersionDynamicRoutingResponse,
  errors: [RouteNotFound],
}));

// =============================================================================
// VersionsDynamicRouting
// =============================================================================

export interface ListVersionsDynamicRoutingRequest {
  gatewayId: string;
  id: string;
  accountId: string;
}

export const ListVersionsDynamicRoutingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gatewayId: Schema.String.pipe(T.HttpPath("gatewayId")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-gateway/gateways/{gatewayId}/routes/{id}/versions",
      }),
    ),
  ) as unknown as Schema.Schema<ListVersionsDynamicRoutingRequest>;

export interface ListVersionsDynamicRoutingResponse {
  data: {
    orderBy: string;
    orderByDirection: string;
    page: number;
    perPage: number;
    versions: {
      active: true | false;
      createdAt: string;
      data: string;
      versionId: string;
      isValid?: boolean | null;
    }[];
  };
  success: boolean;
}

export const ListVersionsDynamicRoutingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.Struct({
        orderBy: Schema.String,
        orderByDirection: Schema.String,
        page: Schema.Number,
        perPage: Schema.Number,
        versions: Schema.Array(
          Schema.Struct({
            active: Schema.Literals([true, false]),
            createdAt: Schema.String,
            data: Schema.String,
            versionId: Schema.String,
            isValid: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              active: "active",
              createdAt: "created_at",
              data: "data",
              versionId: "version_id",
              isValid: "is_valid",
            }),
          ),
        ),
      }).pipe(
        Schema.encodeKeys({
          orderBy: "order_by",
          orderByDirection: "order_by_direction",
          page: "page",
          perPage: "per_page",
          versions: "versions",
        }),
      ),
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Schema<ListVersionsDynamicRoutingResponse>;

export type ListVersionsDynamicRoutingError = DefaultErrors;

export const listVersionsDynamicRouting: API.OperationMethod<
  ListVersionsDynamicRoutingRequest,
  ListVersionsDynamicRoutingResponse,
  ListVersionsDynamicRoutingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListVersionsDynamicRoutingRequest,
  output: ListVersionsDynamicRoutingResponse,
  errors: [],
}));
