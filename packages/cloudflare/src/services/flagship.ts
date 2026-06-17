/**
 * Cloudflare FLAGSHIP API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service flagship
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

export class FlagshipAppNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<FlagshipAppNotFound>()("FlagshipAppNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404, message: { includes: "App not found" } }],
) {}

export class FlagshipFlagAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<FlagshipFlagAlreadyExists>()(
    "FlagshipFlagAlreadyExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 409, message: { includes: "Flag already exists" } }],
) {}

export class FlagshipFlagNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<FlagshipFlagNotFound>()("FlagshipFlagNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404, message: { includes: "Flag not found" } }],
) {}

// =============================================================================
// App
// =============================================================================

export interface GetAppRequest {
  appId: string;
  /** Cloudflare account ID. */
  accountId: string;
}

export const GetAppRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    appId: Schema.String.pipe(T.HttpPath("appId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/flagship/apps/{appId}",
    }),
  ),
) as unknown as Schema.Schema<GetAppRequest>;

export interface GetAppResponse {
  id: string;
  createdAt: string;
  name: string;
  updatedAt: string;
  /** Email of the actor who last modified the app, or `edge-gateway` for gateway-authenticated changes. */
  updatedBy: string;
}

export const GetAppResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdAt: Schema.String,
    name: Schema.String,
    updatedAt: Schema.String,
    updatedBy: Schema.String,
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        createdAt: "created_at",
        name: "name",
        updatedAt: "updated_at",
        updatedBy: "updated_by",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetAppResponse>;

export type GetAppError = DefaultErrors | FlagshipAppNotFound;

export const getApp: API.OperationMethod<
  GetAppRequest,
  GetAppResponse,
  GetAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAppRequest,
  output: GetAppResponse,
  errors: [FlagshipAppNotFound],
}));

export interface ListAppsRequest {
  /** Cloudflare account ID. */
  accountId: string;
}

export const ListAppsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/flagship/apps" }),
  ),
) as unknown as Schema.Schema<ListAppsRequest>;

export interface ListAppsResponse {
  result: {
    id: string;
    createdAt: string;
    name: string;
    updatedAt: string;
    updatedBy: string;
  }[];
}

export const ListAppsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        createdAt: Schema.String,
        name: Schema.String,
        updatedAt: Schema.String,
        updatedBy: Schema.String,
      }).pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          name: "name",
          updatedAt: "updated_at",
          updatedBy: "updated_by",
        }),
      ),
    ),
  }),
) as unknown as Schema.Schema<ListAppsResponse>;

export type ListAppsError = DefaultErrors;

export const listApps: API.PaginatedOperationMethod<
  ListAppsRequest,
  ListAppsResponse,
  ListAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAppsRequest,
  output: ListAppsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateAppRequest {
  /** Path param: Cloudflare account ID. */
  accountId: string;
  /** Body param */
  name: string;
}

export const CreateAppRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    name: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/accounts/{account_id}/flagship/apps" }),
  ),
) as unknown as Schema.Schema<CreateAppRequest>;

export interface CreateAppResponse {
  id: string;
  createdAt: string;
  name: string;
  updatedAt: string;
  /** Email of the actor who last modified the app, or `edge-gateway` for gateway-authenticated changes. */
  updatedBy: string;
}

export const CreateAppResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      name: Schema.String,
      updatedAt: Schema.String,
      updatedBy: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          name: "name",
          updatedAt: "updated_at",
          updatedBy: "updated_by",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<CreateAppResponse>;

export type CreateAppError = DefaultErrors;

export const createApp: API.OperationMethod<
  CreateAppRequest,
  CreateAppResponse,
  CreateAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAppRequest,
  output: CreateAppResponse,
  errors: [],
}));

export interface UpdateAppRequest {
  appId: string;
  /** Path param: Cloudflare account ID. */
  accountId: string;
  /** Body param */
  name?: string;
}

export const UpdateAppRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    appId: Schema.String.pipe(T.HttpPath("appId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/flagship/apps/{appId}",
    }),
  ),
) as unknown as Schema.Schema<UpdateAppRequest>;

export interface UpdateAppResponse {
  id: string;
  createdAt: string;
  name: string;
  updatedAt: string;
  /** Email of the actor who last modified the app, or `edge-gateway` for gateway-authenticated changes. */
  updatedBy: string;
}

export const UpdateAppResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      name: Schema.String,
      updatedAt: Schema.String,
      updatedBy: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          name: "name",
          updatedAt: "updated_at",
          updatedBy: "updated_by",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<UpdateAppResponse>;

export type UpdateAppError = DefaultErrors | FlagshipAppNotFound;

export const updateApp: API.OperationMethod<
  UpdateAppRequest,
  UpdateAppResponse,
  UpdateAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAppRequest,
  output: UpdateAppResponse,
  errors: [FlagshipAppNotFound],
}));

export interface DeleteAppRequest {
  appId: string;
  /** Cloudflare account ID. */
  accountId: string;
}

export const DeleteAppRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    appId: Schema.String.pipe(T.HttpPath("appId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/flagship/apps/{appId}",
    }),
  ),
) as unknown as Schema.Schema<DeleteAppRequest>;

export interface DeleteAppResponse {
  id: string;
}

export const DeleteAppResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<DeleteAppResponse>;

export type DeleteAppError = DefaultErrors | FlagshipAppNotFound;

export const deleteApp: API.OperationMethod<
  DeleteAppRequest,
  DeleteAppResponse,
  DeleteAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAppRequest,
  output: DeleteAppResponse,
  errors: [FlagshipAppNotFound],
}));

// =============================================================================
// AppEvaluate
// =============================================================================

export interface GetAppEvaluateRequest {
  appId: string;
  /** Path param: Cloudflare account ID. */
  accountId: string;
  /** Query param: The flag key to evaluate. */
  flagKey: string;
  /** Query param: Context targeting key (per OpenFeature spec); used for percentage rollout bucketing. */
  targetingKey?: string;
}

export const GetAppEvaluateRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      flagKey: Schema.String.pipe(T.HttpQuery("flagKey")),
      targetingKey: Schema.optional(Schema.String).pipe(
        T.HttpQuery("targetingKey"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/flagship/apps/{appId}/evaluate",
      }),
    ),
) as unknown as Schema.Schema<GetAppEvaluateRequest>;

export interface GetAppEvaluateResponse {
  flagKey: string;
  reason: "TARGETING_MATCH" | "DEFAULT" | "DISABLED" | "SPLIT" | (string & {});
  variant: string;
  value?:
    | string
    | null
    | number
    | boolean
    | Record<string, unknown>
    | unknown[];
}

export const GetAppEvaluateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      flagKey: Schema.String,
      reason: Schema.Union([
        Schema.Literals(["TARGETING_MATCH", "DEFAULT", "DISABLED", "SPLIT"]),
        Schema.String,
      ]),
      variant: Schema.String,
      value: Schema.optional(
        Schema.Union([
          Schema.String,
          Schema.Null,
          Schema.Number,
          Schema.Boolean,
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Array(Schema.Unknown),
        ]),
      ),
    }),
  ) as unknown as Schema.Schema<GetAppEvaluateResponse>;

export type GetAppEvaluateError = DefaultErrors;

export const getAppEvaluate: API.OperationMethod<
  GetAppEvaluateRequest,
  GetAppEvaluateResponse,
  GetAppEvaluateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAppEvaluateRequest,
  output: GetAppEvaluateResponse,
  errors: [],
}));

// =============================================================================
// AppFlag
// =============================================================================

export interface GetAppFlagRequest {
  appId: string;
  flagKey: string;
  /** Cloudflare account ID. */
  accountId: string;
}

export const GetAppFlagRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      flagKey: Schema.String.pipe(T.HttpPath("flagKey")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/flagship/apps/{appId}/flags/{flagKey}",
      }),
    ),
) as unknown as Schema.Schema<GetAppFlagRequest>;

export interface GetAppFlagResponse {
  /** Variation served when no rule matches or the flag is disabled. Must be a key in `variations`. */
  defaultVariation: string;
  /** When false, the flag bypasses all rules and always serves `default_variation`. */
  enabled: boolean;
  /** Unique identifier for the flag within an app. Used in all evaluation and SDK calls. */
  key: string;
  /** Targeting rules evaluated in ascending `priority`; the first matching rule wins. An empty array means the flag always serves `default_variation`. */
  rules: {
    conditions: (
      | {
          attribute: string;
          operator:
            | "equals"
            | "not_equals"
            | "greater_than"
            | "less_than"
            | "greater_than_or_equals"
            | "less_than_or_equals"
            | "contains"
            | "starts_with"
            | "ends_with"
            | "in"
            | "not_in"
            | (string & {});
          value: unknown;
        }
      | {
          clauses: (
            | {
                attribute: string;
                operator:
                  | "equals"
                  | "not_equals"
                  | "greater_than"
                  | "less_than"
                  | "greater_than_or_equals"
                  | "less_than_or_equals"
                  | "contains"
                  | "starts_with"
                  | "ends_with"
                  | "in"
                  | "not_in"
                  | (string & {});
                value: unknown;
              }
            | {
                clauses: (
                  | { attribute: unknown; operator: unknown; value: unknown }
                  | { clauses: unknown; logicalOperator: unknown }
                )[];
                logicalOperator: "AND" | "OR" | (string & {});
              }
          )[];
          logicalOperator: "AND" | "OR" | (string & {});
        }
    )[];
    priority: number;
    serveVariation: string;
    rollout?: { percentage: number; attribute?: string | null } | null;
  }[];
  /** Map of variation name to value. All values must be the same type (boolean, string, number, or JSON object/array). Each serialized value must be 10KB or smaller. */
  variations: Record<string, unknown>;
  description?: string | null;
  /** Value type of the flag's variations. Inferred from the variation values on write, so it may be omitted in requests. */
  type?: "boolean" | "string" | "number" | "json" | (string & {}) | null;
  updatedAt?: string | null;
  updatedBy?: string | null;
}

export const GetAppFlagResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      defaultVariation: Schema.String,
      enabled: Schema.Boolean,
      key: Schema.String,
      rules: Schema.Array(
        Schema.Struct({
          conditions: Schema.Array(
            Schema.Union([
              Schema.Struct({
                attribute: Schema.String,
                operator: Schema.Union([
                  Schema.Literals([
                    "equals",
                    "not_equals",
                    "greater_than",
                    "less_than",
                    "greater_than_or_equals",
                    "less_than_or_equals",
                    "contains",
                    "starts_with",
                    "ends_with",
                    "in",
                    "not_in",
                  ]),
                  Schema.String,
                ]),
                value: Schema.Unknown,
              }),
              Schema.Struct({
                clauses: Schema.Array(
                  Schema.Union([
                    Schema.Struct({
                      attribute: Schema.String,
                      operator: Schema.Union([
                        Schema.Literals([
                          "equals",
                          "not_equals",
                          "greater_than",
                          "less_than",
                          "greater_than_or_equals",
                          "less_than_or_equals",
                          "contains",
                          "starts_with",
                          "ends_with",
                          "in",
                          "not_in",
                        ]),
                        Schema.String,
                      ]),
                      value: Schema.Unknown,
                    }),
                    Schema.Struct({
                      clauses: Schema.Array(
                        Schema.Union([
                          Schema.Struct({
                            attribute: Schema.Unknown,
                            operator: Schema.Unknown,
                            value: Schema.Unknown,
                          }),
                          Schema.Struct({
                            clauses: Schema.Unknown,
                            logicalOperator: Schema.Unknown,
                          }).pipe(
                            Schema.encodeKeys({
                              clauses: "clauses",
                              logicalOperator: "logical_operator",
                            }),
                          ),
                        ]),
                      ),
                      logicalOperator: Schema.Union([
                        Schema.Literals(["AND", "OR"]),
                        Schema.String,
                      ]),
                    }).pipe(
                      Schema.encodeKeys({
                        clauses: "clauses",
                        logicalOperator: "logical_operator",
                      }),
                    ),
                  ]),
                ),
                logicalOperator: Schema.Union([
                  Schema.Literals(["AND", "OR"]),
                  Schema.String,
                ]),
              }).pipe(
                Schema.encodeKeys({
                  clauses: "clauses",
                  logicalOperator: "logical_operator",
                }),
              ),
            ]),
          ),
          priority: Schema.Number,
          serveVariation: Schema.String,
          rollout: Schema.optional(
            Schema.Union([
              Schema.Struct({
                percentage: Schema.Number,
                attribute: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            conditions: "conditions",
            priority: "priority",
            serveVariation: "serve_variation",
            rollout: "rollout",
          }),
        ),
      ),
      variations: Schema.Record(Schema.String, Schema.Unknown),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["boolean", "string", "number", "json"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      updatedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          defaultVariation: "default_variation",
          enabled: "enabled",
          key: "key",
          rules: "rules",
          variations: "variations",
          description: "description",
          type: "type",
          updatedAt: "updated_at",
          updatedBy: "updated_by",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetAppFlagResponse>;

export type GetAppFlagError =
  | DefaultErrors
  | FlagshipFlagNotFound
  | FlagshipAppNotFound;

export const getAppFlag: API.OperationMethod<
  GetAppFlagRequest,
  GetAppFlagResponse,
  GetAppFlagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAppFlagRequest,
  output: GetAppFlagResponse,
  errors: [FlagshipFlagNotFound, FlagshipAppNotFound],
}));

export interface ListAppFlagsRequest {
  appId: string;
  /** Path param: Cloudflare account ID. */
  accountId: string;
  cursor?: string;
  /** Query param: Max items to return (1–200). */
  limit?: string;
}

export const ListAppFlagsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
      limit: Schema.optional(Schema.String).pipe(T.HttpQuery("limit")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/flagship/apps/{appId}/flags",
      }),
    ),
) as unknown as Schema.Schema<ListAppFlagsRequest>;

export interface ListAppFlagsResponse {
  result: {
    defaultVariation: string;
    enabled: boolean;
    key: string;
    rules: {
      conditions: (
        | {
            attribute: string;
            operator:
              | "equals"
              | "not_equals"
              | "greater_than"
              | "less_than"
              | "greater_than_or_equals"
              | "less_than_or_equals"
              | "contains"
              | "starts_with"
              | "ends_with"
              | "in"
              | "not_in"
              | (string & {});
            value: unknown;
          }
        | {
            clauses: (
              | {
                  attribute: string;
                  operator: unknown | (string & {});
                  value: unknown;
                }
              | { clauses: unknown[]; logicalOperator: unknown | (string & {}) }
            )[];
            logicalOperator: "AND" | "OR" | (string & {});
          }
      )[];
      priority: number;
      serveVariation: string;
      rollout?: { percentage: number; attribute?: string | null } | null;
    }[];
    variations: Record<string, unknown>;
    description?: string | null;
    type?: "boolean" | "string" | "number" | "json" | (string & {}) | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
  }[];
  resultInfo?: { cursors?: { after?: string | null } | null } | null;
}

export const ListAppFlagsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          defaultVariation: Schema.String,
          enabled: Schema.Boolean,
          key: Schema.String,
          rules: Schema.Array(
            Schema.Struct({
              conditions: Schema.Array(
                Schema.Union([
                  Schema.Struct({
                    attribute: Schema.String,
                    operator: Schema.Union([
                      Schema.Literals([
                        "equals",
                        "not_equals",
                        "greater_than",
                        "less_than",
                        "greater_than_or_equals",
                        "less_than_or_equals",
                        "contains",
                        "starts_with",
                        "ends_with",
                        "in",
                        "not_in",
                      ]),
                      Schema.String,
                    ]),
                    value: Schema.Unknown,
                  }),
                  Schema.Struct({
                    clauses: Schema.Array(
                      Schema.Union([
                        Schema.Struct({
                          attribute: Schema.String,
                          operator: Schema.Union([
                            Schema.Literals([
                              "equals",
                              "not_equals",
                              "greater_than",
                              "less_than",
                              "greater_than_or_equals",
                              "less_than_or_equals",
                              "contains",
                              "starts_with",
                              "ends_with",
                              "in",
                              "not_in",
                            ]),
                            Schema.String,
                          ]),
                          value: Schema.Unknown,
                        }),
                        Schema.Struct({
                          clauses: Schema.Array(Schema.Unknown),
                          logicalOperator: Schema.Union([
                            Schema.Literals(["AND", "OR"]),
                            Schema.String,
                          ]),
                        }).pipe(
                          Schema.encodeKeys({
                            clauses: "clauses",
                            logicalOperator: "logical_operator",
                          }),
                        ),
                      ]),
                    ),
                    logicalOperator: Schema.Union([
                      Schema.Literals(["AND", "OR"]),
                      Schema.String,
                    ]),
                  }).pipe(
                    Schema.encodeKeys({
                      clauses: "clauses",
                      logicalOperator: "logical_operator",
                    }),
                  ),
                ]),
              ),
              priority: Schema.Number,
              serveVariation: Schema.String,
              rollout: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    percentage: Schema.Number,
                    attribute: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                conditions: "conditions",
                priority: "priority",
                serveVariation: "serve_variation",
                rollout: "rollout",
              }),
            ),
          ),
          variations: Schema.Record(Schema.String, Schema.Unknown),
          description: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          type: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["boolean", "string", "number", "json"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          updatedAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          updatedBy: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            defaultVariation: "default_variation",
            enabled: "enabled",
            key: "key",
            rules: "rules",
            variations: "variations",
            description: "description",
            type: "type",
            updatedAt: "updated_at",
            updatedBy: "updated_by",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            cursors: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  after: Schema.optional(
                    Schema.Union([Schema.String, Schema.Null]),
                  ),
                }),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Schema<ListAppFlagsResponse>;

export type ListAppFlagsError = DefaultErrors | FlagshipAppNotFound;

export const listAppFlags: API.PaginatedOperationMethod<
  ListAppFlagsRequest,
  ListAppFlagsResponse,
  ListAppFlagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAppFlagsRequest,
  output: ListAppFlagsResponse,
  errors: [FlagshipAppNotFound],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursors.after",
    items: "result",
  } as const,
}));

export interface CreateAppFlagRequest {
  appId: string;
  /** Path param: Cloudflare account ID. */
  accountId: string;
  /** Body param: Variation served when no rule matches or the flag is disabled. Must be a key in `variations`. */
  defaultVariation: string;
  /** Body param: When false, the flag bypasses all rules and always serves `default_variation`. */
  enabled: boolean;
  /** Body param: Unique identifier for the flag within an app. Used in all evaluation and SDK calls. */
  key: string;
  /** Body param: Targeting rules evaluated in ascending `priority`; the first matching rule wins. An empty array means the flag always serves `default_variation`. */
  rules: {
    conditions: (
      | {
          attribute: string;
          operator:
            | "equals"
            | "not_equals"
            | "greater_than"
            | "less_than"
            | "greater_than_or_equals"
            | "less_than_or_equals"
            | "contains"
            | "starts_with"
            | "ends_with"
            | "in"
            | "not_in"
            | (string & {});
          value: unknown;
        }
      | {
          clauses: (
            | {
                attribute: string;
                operator:
                  | "equals"
                  | "not_equals"
                  | "greater_than"
                  | "less_than"
                  | "greater_than_or_equals"
                  | "less_than_or_equals"
                  | "contains"
                  | "starts_with"
                  | "ends_with"
                  | "in"
                  | "not_in"
                  | (string & {});
                value: unknown;
              }
            | {
                clauses: (
                  | { attribute: unknown; operator: unknown; value: unknown }
                  | { clauses: unknown; logicalOperator: unknown }
                )[];
                logicalOperator: "AND" | "OR" | (string & {});
              }
          )[];
          logicalOperator: "AND" | "OR" | (string & {});
        }
    )[];
    priority: number;
    serveVariation: string;
    rollout?: { percentage: number; attribute?: string };
  }[];
  /** Body param: Map of variation name to value. All values must be the same type (boolean, string, number, or JSON object/array). Each serialized value must be 10KB or smaller. */
  variations: Record<string, unknown>;
  /** Body param */
  description?: string | null;
  /** Body param: Value type of the flag's variations. Inferred from the variation values on write, so it may be omitted in requests. */
  type?: "boolean" | "string" | "number" | "json" | (string & {});
}

export const CreateAppFlagRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      defaultVariation: Schema.String,
      enabled: Schema.Boolean,
      key: Schema.String,
      rules: Schema.Array(
        Schema.Struct({
          conditions: Schema.Array(
            Schema.Union([
              Schema.Struct({
                attribute: Schema.String,
                operator: Schema.Union([
                  Schema.Literals([
                    "equals",
                    "not_equals",
                    "greater_than",
                    "less_than",
                    "greater_than_or_equals",
                    "less_than_or_equals",
                    "contains",
                    "starts_with",
                    "ends_with",
                    "in",
                    "not_in",
                  ]),
                  Schema.String,
                ]),
                value: Schema.Unknown,
              }),
              Schema.Struct({
                clauses: Schema.Array(
                  Schema.Union([
                    Schema.Struct({
                      attribute: Schema.String,
                      operator: Schema.Union([
                        Schema.Literals([
                          "equals",
                          "not_equals",
                          "greater_than",
                          "less_than",
                          "greater_than_or_equals",
                          "less_than_or_equals",
                          "contains",
                          "starts_with",
                          "ends_with",
                          "in",
                          "not_in",
                        ]),
                        Schema.String,
                      ]),
                      value: Schema.Unknown,
                    }),
                    Schema.Struct({
                      clauses: Schema.Array(
                        Schema.Union([
                          Schema.Struct({
                            attribute: Schema.Unknown,
                            operator: Schema.Unknown,
                            value: Schema.Unknown,
                          }),
                          Schema.Struct({
                            clauses: Schema.Unknown,
                            logicalOperator: Schema.Unknown,
                          }).pipe(
                            Schema.encodeKeys({
                              clauses: "clauses",
                              logicalOperator: "logical_operator",
                            }),
                          ),
                        ]),
                      ),
                      logicalOperator: Schema.Union([
                        Schema.Literals(["AND", "OR"]),
                        Schema.String,
                      ]),
                    }).pipe(
                      Schema.encodeKeys({
                        clauses: "clauses",
                        logicalOperator: "logical_operator",
                      }),
                    ),
                  ]),
                ),
                logicalOperator: Schema.Union([
                  Schema.Literals(["AND", "OR"]),
                  Schema.String,
                ]),
              }).pipe(
                Schema.encodeKeys({
                  clauses: "clauses",
                  logicalOperator: "logical_operator",
                }),
              ),
            ]),
          ),
          priority: Schema.Number,
          serveVariation: Schema.String,
          rollout: Schema.optional(
            Schema.Struct({
              percentage: Schema.Number,
              attribute: Schema.optional(Schema.String),
            }),
          ),
        }).pipe(
          Schema.encodeKeys({
            conditions: "conditions",
            priority: "priority",
            serveVariation: "serve_variation",
            rollout: "rollout",
          }),
        ),
      ),
      variations: Schema.Record(Schema.String, Schema.Unknown),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Literals(["boolean", "string", "number", "json"]),
          Schema.String,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        defaultVariation: "default_variation",
        enabled: "enabled",
        key: "key",
        rules: "rules",
        variations: "variations",
        description: "description",
        type: "type",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/flagship/apps/{appId}/flags",
      }),
    ),
) as unknown as Schema.Schema<CreateAppFlagRequest>;

export interface CreateAppFlagResponse {
  /** Variation served when no rule matches or the flag is disabled. Must be a key in `variations`. */
  defaultVariation: string;
  /** When false, the flag bypasses all rules and always serves `default_variation`. */
  enabled: boolean;
  /** Unique identifier for the flag within an app. Used in all evaluation and SDK calls. */
  key: string;
  /** Targeting rules evaluated in ascending `priority`; the first matching rule wins. An empty array means the flag always serves `default_variation`. */
  rules: {
    conditions: (
      | {
          attribute: string;
          operator:
            | "equals"
            | "not_equals"
            | "greater_than"
            | "less_than"
            | "greater_than_or_equals"
            | "less_than_or_equals"
            | "contains"
            | "starts_with"
            | "ends_with"
            | "in"
            | "not_in"
            | (string & {});
          value: unknown;
        }
      | {
          clauses: (
            | {
                attribute: string;
                operator:
                  | "equals"
                  | "not_equals"
                  | "greater_than"
                  | "less_than"
                  | "greater_than_or_equals"
                  | "less_than_or_equals"
                  | "contains"
                  | "starts_with"
                  | "ends_with"
                  | "in"
                  | "not_in"
                  | (string & {});
                value: unknown;
              }
            | {
                clauses: (
                  | { attribute: unknown; operator: unknown; value: unknown }
                  | { clauses: unknown; logicalOperator: unknown }
                )[];
                logicalOperator: "AND" | "OR" | (string & {});
              }
          )[];
          logicalOperator: "AND" | "OR" | (string & {});
        }
    )[];
    priority: number;
    serveVariation: string;
    rollout?: { percentage: number; attribute?: string | null } | null;
  }[];
  /** Map of variation name to value. All values must be the same type (boolean, string, number, or JSON object/array). Each serialized value must be 10KB or smaller. */
  variations: Record<string, unknown>;
  description?: string | null;
  /** Value type of the flag's variations. Inferred from the variation values on write, so it may be omitted in requests. */
  type?: "boolean" | "string" | "number" | "json" | (string & {}) | null;
  updatedAt?: string | null;
  updatedBy?: string | null;
}

export const CreateAppFlagResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      defaultVariation: Schema.String,
      enabled: Schema.Boolean,
      key: Schema.String,
      rules: Schema.Array(
        Schema.Struct({
          conditions: Schema.Array(
            Schema.Union([
              Schema.Struct({
                attribute: Schema.String,
                operator: Schema.Union([
                  Schema.Literals([
                    "equals",
                    "not_equals",
                    "greater_than",
                    "less_than",
                    "greater_than_or_equals",
                    "less_than_or_equals",
                    "contains",
                    "starts_with",
                    "ends_with",
                    "in",
                    "not_in",
                  ]),
                  Schema.String,
                ]),
                value: Schema.Unknown,
              }),
              Schema.Struct({
                clauses: Schema.Array(
                  Schema.Union([
                    Schema.Struct({
                      attribute: Schema.String,
                      operator: Schema.Union([
                        Schema.Literals([
                          "equals",
                          "not_equals",
                          "greater_than",
                          "less_than",
                          "greater_than_or_equals",
                          "less_than_or_equals",
                          "contains",
                          "starts_with",
                          "ends_with",
                          "in",
                          "not_in",
                        ]),
                        Schema.String,
                      ]),
                      value: Schema.Unknown,
                    }),
                    Schema.Struct({
                      clauses: Schema.Array(
                        Schema.Union([
                          Schema.Struct({
                            attribute: Schema.Unknown,
                            operator: Schema.Unknown,
                            value: Schema.Unknown,
                          }),
                          Schema.Struct({
                            clauses: Schema.Unknown,
                            logicalOperator: Schema.Unknown,
                          }).pipe(
                            Schema.encodeKeys({
                              clauses: "clauses",
                              logicalOperator: "logical_operator",
                            }),
                          ),
                        ]),
                      ),
                      logicalOperator: Schema.Union([
                        Schema.Literals(["AND", "OR"]),
                        Schema.String,
                      ]),
                    }).pipe(
                      Schema.encodeKeys({
                        clauses: "clauses",
                        logicalOperator: "logical_operator",
                      }),
                    ),
                  ]),
                ),
                logicalOperator: Schema.Union([
                  Schema.Literals(["AND", "OR"]),
                  Schema.String,
                ]),
              }).pipe(
                Schema.encodeKeys({
                  clauses: "clauses",
                  logicalOperator: "logical_operator",
                }),
              ),
            ]),
          ),
          priority: Schema.Number,
          serveVariation: Schema.String,
          rollout: Schema.optional(
            Schema.Union([
              Schema.Struct({
                percentage: Schema.Number,
                attribute: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            conditions: "conditions",
            priority: "priority",
            serveVariation: "serve_variation",
            rollout: "rollout",
          }),
        ),
      ),
      variations: Schema.Record(Schema.String, Schema.Unknown),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["boolean", "string", "number", "json"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      updatedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          defaultVariation: "default_variation",
          enabled: "enabled",
          key: "key",
          rules: "rules",
          variations: "variations",
          description: "description",
          type: "type",
          updatedAt: "updated_at",
          updatedBy: "updated_by",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<CreateAppFlagResponse>;

export type CreateAppFlagError =
  | DefaultErrors
  | FlagshipFlagAlreadyExists
  | FlagshipAppNotFound;

export const createAppFlag: API.OperationMethod<
  CreateAppFlagRequest,
  CreateAppFlagResponse,
  CreateAppFlagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAppFlagRequest,
  output: CreateAppFlagResponse,
  errors: [FlagshipFlagAlreadyExists, FlagshipAppNotFound],
}));

export interface UpdateAppFlagRequest {
  appId: string;
  flagKey: string;
  /** Path param: Cloudflare account ID. */
  accountId: string;
  /** Body param: Variation served when no rule matches or the flag is disabled. Must be a key in `variations`. */
  defaultVariation: string;
  /** Body param: When false, the flag bypasses all rules and always serves `default_variation`. */
  enabled: boolean;
  /** Body param: Unique identifier for the flag within an app. Used in all evaluation and SDK calls. */
  key: string;
  /** Body param: Targeting rules evaluated in ascending `priority`; the first matching rule wins. An empty array means the flag always serves `default_variation`. */
  rules: {
    conditions: (
      | {
          attribute: string;
          operator:
            | "equals"
            | "not_equals"
            | "greater_than"
            | "less_than"
            | "greater_than_or_equals"
            | "less_than_or_equals"
            | "contains"
            | "starts_with"
            | "ends_with"
            | "in"
            | "not_in"
            | (string & {});
          value: unknown;
        }
      | {
          clauses: (
            | {
                attribute: string;
                operator:
                  | "equals"
                  | "not_equals"
                  | "greater_than"
                  | "less_than"
                  | "greater_than_or_equals"
                  | "less_than_or_equals"
                  | "contains"
                  | "starts_with"
                  | "ends_with"
                  | "in"
                  | "not_in"
                  | (string & {});
                value: unknown;
              }
            | {
                clauses: (
                  | { attribute: unknown; operator: unknown; value: unknown }
                  | { clauses: unknown; logicalOperator: unknown }
                )[];
                logicalOperator: "AND" | "OR" | (string & {});
              }
          )[];
          logicalOperator: "AND" | "OR" | (string & {});
        }
    )[];
    priority: number;
    serveVariation: string;
    rollout?: { percentage: number; attribute?: string };
  }[];
  /** Body param: Map of variation name to value. All values must be the same type (boolean, string, number, or JSON object/array). Each serialized value must be 10KB or smaller. */
  variations: Record<string, unknown>;
  /** Body param */
  description?: string | null;
  /** Body param: Value type of the flag's variations. Inferred from the variation values on write, so it may be omitted in requests. */
  type?: "boolean" | "string" | "number" | "json" | (string & {});
}

export const UpdateAppFlagRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      flagKey: Schema.String.pipe(T.HttpPath("flagKey")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      defaultVariation: Schema.String,
      enabled: Schema.Boolean,
      key: Schema.String,
      rules: Schema.Array(
        Schema.Struct({
          conditions: Schema.Array(
            Schema.Union([
              Schema.Struct({
                attribute: Schema.String,
                operator: Schema.Union([
                  Schema.Literals([
                    "equals",
                    "not_equals",
                    "greater_than",
                    "less_than",
                    "greater_than_or_equals",
                    "less_than_or_equals",
                    "contains",
                    "starts_with",
                    "ends_with",
                    "in",
                    "not_in",
                  ]),
                  Schema.String,
                ]),
                value: Schema.Unknown,
              }),
              Schema.Struct({
                clauses: Schema.Array(
                  Schema.Union([
                    Schema.Struct({
                      attribute: Schema.String,
                      operator: Schema.Union([
                        Schema.Literals([
                          "equals",
                          "not_equals",
                          "greater_than",
                          "less_than",
                          "greater_than_or_equals",
                          "less_than_or_equals",
                          "contains",
                          "starts_with",
                          "ends_with",
                          "in",
                          "not_in",
                        ]),
                        Schema.String,
                      ]),
                      value: Schema.Unknown,
                    }),
                    Schema.Struct({
                      clauses: Schema.Array(
                        Schema.Union([
                          Schema.Struct({
                            attribute: Schema.Unknown,
                            operator: Schema.Unknown,
                            value: Schema.Unknown,
                          }),
                          Schema.Struct({
                            clauses: Schema.Unknown,
                            logicalOperator: Schema.Unknown,
                          }).pipe(
                            Schema.encodeKeys({
                              clauses: "clauses",
                              logicalOperator: "logical_operator",
                            }),
                          ),
                        ]),
                      ),
                      logicalOperator: Schema.Union([
                        Schema.Literals(["AND", "OR"]),
                        Schema.String,
                      ]),
                    }).pipe(
                      Schema.encodeKeys({
                        clauses: "clauses",
                        logicalOperator: "logical_operator",
                      }),
                    ),
                  ]),
                ),
                logicalOperator: Schema.Union([
                  Schema.Literals(["AND", "OR"]),
                  Schema.String,
                ]),
              }).pipe(
                Schema.encodeKeys({
                  clauses: "clauses",
                  logicalOperator: "logical_operator",
                }),
              ),
            ]),
          ),
          priority: Schema.Number,
          serveVariation: Schema.String,
          rollout: Schema.optional(
            Schema.Struct({
              percentage: Schema.Number,
              attribute: Schema.optional(Schema.String),
            }),
          ),
        }).pipe(
          Schema.encodeKeys({
            conditions: "conditions",
            priority: "priority",
            serveVariation: "serve_variation",
            rollout: "rollout",
          }),
        ),
      ),
      variations: Schema.Record(Schema.String, Schema.Unknown),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Literals(["boolean", "string", "number", "json"]),
          Schema.String,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        defaultVariation: "default_variation",
        enabled: "enabled",
        key: "key",
        rules: "rules",
        variations: "variations",
        description: "description",
        type: "type",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/flagship/apps/{appId}/flags/{flagKey}",
      }),
    ),
) as unknown as Schema.Schema<UpdateAppFlagRequest>;

export interface UpdateAppFlagResponse {
  /** Variation served when no rule matches or the flag is disabled. Must be a key in `variations`. */
  defaultVariation: string;
  /** When false, the flag bypasses all rules and always serves `default_variation`. */
  enabled: boolean;
  /** Unique identifier for the flag within an app. Used in all evaluation and SDK calls. */
  key: string;
  /** Targeting rules evaluated in ascending `priority`; the first matching rule wins. An empty array means the flag always serves `default_variation`. */
  rules: {
    conditions: (
      | {
          attribute: string;
          operator:
            | "equals"
            | "not_equals"
            | "greater_than"
            | "less_than"
            | "greater_than_or_equals"
            | "less_than_or_equals"
            | "contains"
            | "starts_with"
            | "ends_with"
            | "in"
            | "not_in"
            | (string & {});
          value: unknown;
        }
      | {
          clauses: (
            | {
                attribute: string;
                operator:
                  | "equals"
                  | "not_equals"
                  | "greater_than"
                  | "less_than"
                  | "greater_than_or_equals"
                  | "less_than_or_equals"
                  | "contains"
                  | "starts_with"
                  | "ends_with"
                  | "in"
                  | "not_in"
                  | (string & {});
                value: unknown;
              }
            | {
                clauses: (
                  | { attribute: unknown; operator: unknown; value: unknown }
                  | { clauses: unknown; logicalOperator: unknown }
                )[];
                logicalOperator: "AND" | "OR" | (string & {});
              }
          )[];
          logicalOperator: "AND" | "OR" | (string & {});
        }
    )[];
    priority: number;
    serveVariation: string;
    rollout?: { percentage: number; attribute?: string | null } | null;
  }[];
  /** Map of variation name to value. All values must be the same type (boolean, string, number, or JSON object/array). Each serialized value must be 10KB or smaller. */
  variations: Record<string, unknown>;
  description?: string | null;
  /** Value type of the flag's variations. Inferred from the variation values on write, so it may be omitted in requests. */
  type?: "boolean" | "string" | "number" | "json" | (string & {}) | null;
  updatedAt?: string | null;
  updatedBy?: string | null;
}

export const UpdateAppFlagResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      defaultVariation: Schema.String,
      enabled: Schema.Boolean,
      key: Schema.String,
      rules: Schema.Array(
        Schema.Struct({
          conditions: Schema.Array(
            Schema.Union([
              Schema.Struct({
                attribute: Schema.String,
                operator: Schema.Union([
                  Schema.Literals([
                    "equals",
                    "not_equals",
                    "greater_than",
                    "less_than",
                    "greater_than_or_equals",
                    "less_than_or_equals",
                    "contains",
                    "starts_with",
                    "ends_with",
                    "in",
                    "not_in",
                  ]),
                  Schema.String,
                ]),
                value: Schema.Unknown,
              }),
              Schema.Struct({
                clauses: Schema.Array(
                  Schema.Union([
                    Schema.Struct({
                      attribute: Schema.String,
                      operator: Schema.Union([
                        Schema.Literals([
                          "equals",
                          "not_equals",
                          "greater_than",
                          "less_than",
                          "greater_than_or_equals",
                          "less_than_or_equals",
                          "contains",
                          "starts_with",
                          "ends_with",
                          "in",
                          "not_in",
                        ]),
                        Schema.String,
                      ]),
                      value: Schema.Unknown,
                    }),
                    Schema.Struct({
                      clauses: Schema.Array(
                        Schema.Union([
                          Schema.Struct({
                            attribute: Schema.Unknown,
                            operator: Schema.Unknown,
                            value: Schema.Unknown,
                          }),
                          Schema.Struct({
                            clauses: Schema.Unknown,
                            logicalOperator: Schema.Unknown,
                          }).pipe(
                            Schema.encodeKeys({
                              clauses: "clauses",
                              logicalOperator: "logical_operator",
                            }),
                          ),
                        ]),
                      ),
                      logicalOperator: Schema.Union([
                        Schema.Literals(["AND", "OR"]),
                        Schema.String,
                      ]),
                    }).pipe(
                      Schema.encodeKeys({
                        clauses: "clauses",
                        logicalOperator: "logical_operator",
                      }),
                    ),
                  ]),
                ),
                logicalOperator: Schema.Union([
                  Schema.Literals(["AND", "OR"]),
                  Schema.String,
                ]),
              }).pipe(
                Schema.encodeKeys({
                  clauses: "clauses",
                  logicalOperator: "logical_operator",
                }),
              ),
            ]),
          ),
          priority: Schema.Number,
          serveVariation: Schema.String,
          rollout: Schema.optional(
            Schema.Union([
              Schema.Struct({
                percentage: Schema.Number,
                attribute: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            conditions: "conditions",
            priority: "priority",
            serveVariation: "serve_variation",
            rollout: "rollout",
          }),
        ),
      ),
      variations: Schema.Record(Schema.String, Schema.Unknown),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["boolean", "string", "number", "json"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      updatedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          defaultVariation: "default_variation",
          enabled: "enabled",
          key: "key",
          rules: "rules",
          variations: "variations",
          description: "description",
          type: "type",
          updatedAt: "updated_at",
          updatedBy: "updated_by",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<UpdateAppFlagResponse>;

export type UpdateAppFlagError =
  | DefaultErrors
  | FlagshipFlagNotFound
  | FlagshipAppNotFound;

export const updateAppFlag: API.OperationMethod<
  UpdateAppFlagRequest,
  UpdateAppFlagResponse,
  UpdateAppFlagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAppFlagRequest,
  output: UpdateAppFlagResponse,
  errors: [FlagshipFlagNotFound, FlagshipAppNotFound],
}));

export interface DeleteAppFlagRequest {
  appId: string;
  flagKey: string;
  /** Cloudflare account ID. */
  accountId: string;
}

export const DeleteAppFlagRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      flagKey: Schema.String.pipe(T.HttpPath("flagKey")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/flagship/apps/{appId}/flags/{flagKey}",
      }),
    ),
) as unknown as Schema.Schema<DeleteAppFlagRequest>;

export interface DeleteAppFlagResponse {
  key: string;
}

export const DeleteAppFlagResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      key: Schema.String,
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<DeleteAppFlagResponse>;

export type DeleteAppFlagError =
  | DefaultErrors
  | FlagshipFlagNotFound
  | FlagshipAppNotFound;

export const deleteAppFlag: API.OperationMethod<
  DeleteAppFlagRequest,
  DeleteAppFlagResponse,
  DeleteAppFlagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAppFlagRequest,
  output: DeleteAppFlagResponse,
  errors: [FlagshipFlagNotFound, FlagshipAppNotFound],
}));

// =============================================================================
// AppFlagChangelog
// =============================================================================

export interface ListAppFlagChangelogsRequest {
  appId: string;
  flagKey: string;
  /** Path param: Cloudflare account ID. */
  accountId: string;
  cursor?: string;
  /** Query param: Max items to return (1–200). */
  limit?: string;
}

export const ListAppFlagChangelogsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      flagKey: Schema.String.pipe(T.HttpPath("flagKey")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
      limit: Schema.optional(Schema.String).pipe(T.HttpQuery("limit")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/flagship/apps/{appId}/flags/{flagKey}/changelog",
      }),
    ),
  ) as unknown as Schema.Schema<ListAppFlagChangelogsRequest>;

export interface ListAppFlagChangelogsResponse {
  result: (
    | {
        after: {
          defaultVariation: string;
          enabled: boolean;
          key: string;
          rules: {
            conditions: (
              | {
                  attribute: string;
                  operator:
                    | "equals"
                    | "not_equals"
                    | "greater_than"
                    | "less_than"
                    | "greater_than_or_equals"
                    | "less_than_or_equals"
                    | "contains"
                    | "starts_with"
                    | "ends_with"
                    | "in"
                    | "not_in"
                    | (string & {});
                  value: unknown;
                }
              | {
                  clauses: unknown[];
                  logicalOperator: "AND" | "OR" | (string & {});
                }
            )[];
            priority: number;
            serveVariation: string;
            rollout?: { percentage: number; attribute?: string | null } | null;
          }[];
          variations: Record<string, unknown>;
          description?: string | null;
          type?:
            | "boolean"
            | "string"
            | "number"
            | "json"
            | (string & {})
            | null;
          updatedAt?: string | null;
          updatedBy?: string | null;
        };
        event: "create";
        flagKey: string;
      }
    | {
        after: {
          defaultVariation: string;
          enabled: boolean;
          key: string;
          rules: {
            conditions: (
              | {
                  attribute: string;
                  operator:
                    | "equals"
                    | "not_equals"
                    | "greater_than"
                    | "less_than"
                    | "greater_than_or_equals"
                    | "less_than_or_equals"
                    | "contains"
                    | "starts_with"
                    | "ends_with"
                    | "in"
                    | "not_in"
                    | (string & {});
                  value: unknown;
                }
              | {
                  clauses: unknown[];
                  logicalOperator: "AND" | "OR" | (string & {});
                }
            )[];
            priority: number;
            serveVariation: string;
            rollout?: { percentage: number; attribute?: string | null } | null;
          }[];
          variations: Record<string, unknown>;
          description?: string | null;
          type?:
            | "boolean"
            | "string"
            | "number"
            | "json"
            | (string & {})
            | null;
          updatedAt?: string | null;
          updatedBy?: string | null;
        };
        event: "delete";
        flagKey: string;
      }
    | {
        after: {
          defaultVariation: string;
          enabled: boolean;
          key: string;
          rules: {
            conditions: (
              | {
                  attribute: string;
                  operator:
                    | "equals"
                    | "not_equals"
                    | "greater_than"
                    | "less_than"
                    | "greater_than_or_equals"
                    | "less_than_or_equals"
                    | "contains"
                    | "starts_with"
                    | "ends_with"
                    | "in"
                    | "not_in"
                    | (string & {});
                  value: unknown;
                }
              | {
                  clauses: unknown[];
                  logicalOperator: "AND" | "OR" | (string & {});
                }
            )[];
            priority: number;
            serveVariation: string;
            rollout?: { percentage: number; attribute?: string | null } | null;
          }[];
          variations: Record<string, unknown>;
          description?: string | null;
          type?:
            | "boolean"
            | "string"
            | "number"
            | "json"
            | (string & {})
            | null;
          updatedAt?: string | null;
          updatedBy?: string | null;
        };
        diff: Record<string, unknown>;
        event: "update";
        flagKey: string;
      }
  )[];
  resultInfo?: { cursors?: { after?: string | null } | null } | null;
}

export const ListAppFlagChangelogsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Union([
          Schema.Struct({
            after: Schema.Struct({
              defaultVariation: Schema.String,
              enabled: Schema.Boolean,
              key: Schema.String,
              rules: Schema.Array(
                Schema.Struct({
                  conditions: Schema.Array(
                    Schema.Union([
                      Schema.Struct({
                        attribute: Schema.String,
                        operator: Schema.Union([
                          Schema.Literals([
                            "equals",
                            "not_equals",
                            "greater_than",
                            "less_than",
                            "greater_than_or_equals",
                            "less_than_or_equals",
                            "contains",
                            "starts_with",
                            "ends_with",
                            "in",
                            "not_in",
                          ]),
                          Schema.String,
                        ]),
                        value: Schema.Unknown,
                      }),
                      Schema.Struct({
                        clauses: Schema.Array(Schema.Unknown),
                        logicalOperator: Schema.Union([
                          Schema.Literals(["AND", "OR"]),
                          Schema.String,
                        ]),
                      }).pipe(
                        Schema.encodeKeys({
                          clauses: "clauses",
                          logicalOperator: "logical_operator",
                        }),
                      ),
                    ]),
                  ),
                  priority: Schema.Number,
                  serveVariation: Schema.String,
                  rollout: Schema.optional(
                    Schema.Union([
                      Schema.Struct({
                        percentage: Schema.Number,
                        attribute: Schema.optional(
                          Schema.Union([Schema.String, Schema.Null]),
                        ),
                      }),
                      Schema.Null,
                    ]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    conditions: "conditions",
                    priority: "priority",
                    serveVariation: "serve_variation",
                    rollout: "rollout",
                  }),
                ),
              ),
              variations: Schema.Record(Schema.String, Schema.Unknown),
              description: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              type: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["boolean", "string", "number", "json"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              updatedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              updatedBy: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                defaultVariation: "default_variation",
                enabled: "enabled",
                key: "key",
                rules: "rules",
                variations: "variations",
                description: "description",
                type: "type",
                updatedAt: "updated_at",
                updatedBy: "updated_by",
              }),
            ),
            diff: Schema.Record(Schema.String, Schema.Unknown),
            event: Schema.Literal("update"),
            flagKey: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              after: "after",
              diff: "diff",
              event: "event",
              flagKey: "flag_key",
            }),
          ),
          Schema.Struct({
            after: Schema.Struct({
              defaultVariation: Schema.String,
              enabled: Schema.Boolean,
              key: Schema.String,
              rules: Schema.Array(
                Schema.Struct({
                  conditions: Schema.Array(
                    Schema.Union([
                      Schema.Struct({
                        attribute: Schema.String,
                        operator: Schema.Union([
                          Schema.Literals([
                            "equals",
                            "not_equals",
                            "greater_than",
                            "less_than",
                            "greater_than_or_equals",
                            "less_than_or_equals",
                            "contains",
                            "starts_with",
                            "ends_with",
                            "in",
                            "not_in",
                          ]),
                          Schema.String,
                        ]),
                        value: Schema.Unknown,
                      }),
                      Schema.Struct({
                        clauses: Schema.Array(Schema.Unknown),
                        logicalOperator: Schema.Union([
                          Schema.Literals(["AND", "OR"]),
                          Schema.String,
                        ]),
                      }).pipe(
                        Schema.encodeKeys({
                          clauses: "clauses",
                          logicalOperator: "logical_operator",
                        }),
                      ),
                    ]),
                  ),
                  priority: Schema.Number,
                  serveVariation: Schema.String,
                  rollout: Schema.optional(
                    Schema.Union([
                      Schema.Struct({
                        percentage: Schema.Number,
                        attribute: Schema.optional(
                          Schema.Union([Schema.String, Schema.Null]),
                        ),
                      }),
                      Schema.Null,
                    ]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    conditions: "conditions",
                    priority: "priority",
                    serveVariation: "serve_variation",
                    rollout: "rollout",
                  }),
                ),
              ),
              variations: Schema.Record(Schema.String, Schema.Unknown),
              description: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              type: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["boolean", "string", "number", "json"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              updatedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              updatedBy: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                defaultVariation: "default_variation",
                enabled: "enabled",
                key: "key",
                rules: "rules",
                variations: "variations",
                description: "description",
                type: "type",
                updatedAt: "updated_at",
                updatedBy: "updated_by",
              }),
            ),
            event: Schema.Literal("create"),
            flagKey: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              after: "after",
              event: "event",
              flagKey: "flag_key",
            }),
          ),
          Schema.Struct({
            after: Schema.Struct({
              defaultVariation: Schema.String,
              enabled: Schema.Boolean,
              key: Schema.String,
              rules: Schema.Array(
                Schema.Struct({
                  conditions: Schema.Array(
                    Schema.Union([
                      Schema.Struct({
                        attribute: Schema.String,
                        operator: Schema.Union([
                          Schema.Literals([
                            "equals",
                            "not_equals",
                            "greater_than",
                            "less_than",
                            "greater_than_or_equals",
                            "less_than_or_equals",
                            "contains",
                            "starts_with",
                            "ends_with",
                            "in",
                            "not_in",
                          ]),
                          Schema.String,
                        ]),
                        value: Schema.Unknown,
                      }),
                      Schema.Struct({
                        clauses: Schema.Array(Schema.Unknown),
                        logicalOperator: Schema.Union([
                          Schema.Literals(["AND", "OR"]),
                          Schema.String,
                        ]),
                      }).pipe(
                        Schema.encodeKeys({
                          clauses: "clauses",
                          logicalOperator: "logical_operator",
                        }),
                      ),
                    ]),
                  ),
                  priority: Schema.Number,
                  serveVariation: Schema.String,
                  rollout: Schema.optional(
                    Schema.Union([
                      Schema.Struct({
                        percentage: Schema.Number,
                        attribute: Schema.optional(
                          Schema.Union([Schema.String, Schema.Null]),
                        ),
                      }),
                      Schema.Null,
                    ]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    conditions: "conditions",
                    priority: "priority",
                    serveVariation: "serve_variation",
                    rollout: "rollout",
                  }),
                ),
              ),
              variations: Schema.Record(Schema.String, Schema.Unknown),
              description: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              type: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["boolean", "string", "number", "json"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              updatedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              updatedBy: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                defaultVariation: "default_variation",
                enabled: "enabled",
                key: "key",
                rules: "rules",
                variations: "variations",
                description: "description",
                type: "type",
                updatedAt: "updated_at",
                updatedBy: "updated_by",
              }),
            ),
            event: Schema.Literal("delete"),
            flagKey: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              after: "after",
              event: "event",
              flagKey: "flag_key",
            }),
          ),
        ]),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            cursors: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  after: Schema.optional(
                    Schema.Union([Schema.String, Schema.Null]),
                  ),
                }),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListAppFlagChangelogsResponse>;

export type ListAppFlagChangelogsError = DefaultErrors;

export const listAppFlagChangelogs: API.PaginatedOperationMethod<
  ListAppFlagChangelogsRequest,
  ListAppFlagChangelogsResponse,
  ListAppFlagChangelogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAppFlagChangelogsRequest,
  output: ListAppFlagChangelogsResponse,
  errors: [],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursors.after",
    items: "result",
  } as const,
}));
