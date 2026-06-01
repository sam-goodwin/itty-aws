/**
 * Cloudflare SECURITY-CENTER API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service security-center
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// ByInsightInsightAuditLog
// =============================================================================

const ListByInsightInsightAuditLogBaseFields = {
  issueId: Schema.String.pipe(T.HttpPath("issueId")),
} as const;

interface ListByInsightInsightAuditLogBaseRequest {
  issueId: string;
}

export interface ListByInsightInsightAuditLogForAccountRequest extends ListByInsightInsightAuditLogBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface ListByInsightInsightAuditLogForZoneRequest extends ListByInsightInsightAuditLogBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const ListByInsightInsightAuditLogForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...ListByInsightInsightAuditLogBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/security-center/insights/{issueId}/audit-log",
    }),
  ) as unknown as Schema.Schema<ListByInsightInsightAuditLogForAccountRequest>;

export const ListByInsightInsightAuditLogForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...ListByInsightInsightAuditLogBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/security-center/insights/{issueId}/audit-log",
    }),
  ) as unknown as Schema.Schema<ListByInsightInsightAuditLogForZoneRequest>;

export interface ListByInsightInsightAuditLogResponse {
  result: {
    id?: string | null;
    changedAt?: string | null;
    changedBy?: string | null;
    currentValue?: string | null;
    fieldChanged?: "status" | "user_classification" | (string & {}) | null;
    issueId?: string | null;
    previousValue?: string | null;
    rationale?: string | null;
    zoneId?: number | null;
  }[];
  resultInfo?: {
    count?: number | null;
    cursor?: string | null;
    perPage?: number | null;
  } | null;
}

export const ListByInsightInsightAuditLogResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        changedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        changedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        currentValue: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        fieldChanged: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["status", "user_classification"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        issueId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        previousValue: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        rationale: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        zoneId: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      }).pipe(
        Schema.encodeKeys({
          id: "id",
          changedAt: "changed_at",
          changedBy: "changed_by",
          currentValue: "current_value",
          fieldChanged: "field_changed",
          issueId: "issue_id",
          previousValue: "previous_value",
          rationale: "rationale",
          zoneId: "zone_id",
        }),
      ),
    ),
    resultInfo: Schema.optional(
      Schema.Union([
        Schema.Struct({
          count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          cursor: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        }).pipe(
          Schema.encodeKeys({
            count: "count",
            cursor: "cursor",
            perPage: "per_page",
          }),
        ),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
  ) as unknown as Schema.Schema<ListByInsightInsightAuditLogResponse>;

export type ListByInsightInsightAuditLogError = DefaultErrors;

export const listByInsightInsightAuditLogForAccount: API.PaginatedOperationMethod<
  ListByInsightInsightAuditLogForAccountRequest,
  ListByInsightInsightAuditLogResponse,
  ListByInsightInsightAuditLogError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListByInsightInsightAuditLogForAccountRequest,
  output: ListByInsightInsightAuditLogResponse,
  errors: [],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursor",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export const listByInsightInsightAuditLogForZone: API.PaginatedOperationMethod<
  ListByInsightInsightAuditLogForZoneRequest,
  ListByInsightInsightAuditLogResponse,
  ListByInsightInsightAuditLogError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListByInsightInsightAuditLogForZoneRequest,
  output: ListByInsightInsightAuditLogResponse,
  errors: [],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursor",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

// =============================================================================
// Insight
// =============================================================================

const ListInsightsBaseFields = {} as const;

interface ListInsightsBaseRequest {}

export interface ListInsightsForAccountRequest extends ListInsightsBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface ListInsightsForZoneRequest extends ListInsightsBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const ListInsightsForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...ListInsightsBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/security-center/insights",
    }),
  ) as unknown as Schema.Schema<ListInsightsForAccountRequest>;

export const ListInsightsForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...ListInsightsBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/security-center/insights",
    }),
  ) as unknown as Schema.Schema<ListInsightsForZoneRequest>;

export interface ListInsightsResponse {
  result: {
    items?:
      | {
          count?: number | null;
          issues?:
            | {
                id?: string | null;
                dismissed?: boolean | null;
                hasExtendedContext?: boolean | null;
                issueClass?: string | null;
                issueType?:
                  | "compliance_violation"
                  | "email_security"
                  | "exposed_infrastructure"
                  | "insecure_configuration"
                  | "weak_authentication"
                  | "configuration_suggestion"
                  | (string & {})
                  | null;
                payload?: {
                  detectionMethod?: string | null;
                  zoneTag?: string | null;
                } | null;
                resolveLink?: string | null;
                resolveText?: string | null;
                severity?:
                  | "Low"
                  | "Moderate"
                  | "Critical"
                  | (string & {})
                  | null;
                since?: string | null;
                status?: "active" | "resolved" | (string & {}) | null;
                subject?: string | null;
                timestamp?: string | null;
                userClassification?:
                  | "false_positive"
                  | "accept_risk"
                  | "other"
                  | null;
              }[]
            | null;
          page?: number | null;
          perPage?: number | null;
        }[]
      | null;
  };
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListInsightsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Struct({
    items: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            issues: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    dismissed: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                    hasExtendedContext: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                    issueClass: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    issueType: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals([
                            "compliance_violation",
                            "email_security",
                            "exposed_infrastructure",
                            "insecure_configuration",
                            "weak_authentication",
                            "configuration_suggestion",
                          ]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                    payload: Schema.optional(
                      Schema.Union([
                        Schema.Struct({
                          detectionMethod: Schema.optional(
                            Schema.Union([Schema.String, Schema.Null]),
                          ),
                          zoneTag: Schema.optional(
                            Schema.Union([Schema.String, Schema.Null]),
                          ),
                        }).pipe(
                          Schema.encodeKeys({
                            detectionMethod: "detection_method",
                            zoneTag: "zone_tag",
                          }),
                        ),
                        Schema.Null,
                      ]),
                    ),
                    resolveLink: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    resolveText: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    severity: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals(["Low", "Moderate", "Critical"]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                    since: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    status: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals(["active", "resolved"]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                    subject: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    timestamp: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    userClassification: Schema.optional(
                      Schema.Union([
                        Schema.Literal("false_positive"),
                        Schema.Literal("accept_risk"),
                        Schema.Literal("other"),
                        Schema.Null,
                      ]),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      id: "id",
                      dismissed: "dismissed",
                      hasExtendedContext: "has_extended_context",
                      issueClass: "issue_class",
                      issueType: "issue_type",
                      payload: "payload",
                      resolveLink: "resolve_link",
                      resolveText: "resolve_text",
                      severity: "severity",
                      since: "since",
                      status: "status",
                      subject: "subject",
                      timestamp: "timestamp",
                      userClassification: "user_classification",
                    }),
                  ),
                ),
                Schema.Null,
              ]),
            ),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              issues: "issues",
              page: "page",
              perPage: "per_page",
            }),
          ),
        ),
        Schema.Null,
      ]),
    ),
  }),
  resultInfo: Schema.optional(
    Schema.Union([
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
      Schema.Null,
    ]),
  ),
}).pipe(
  Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
) as unknown as Schema.Schema<ListInsightsResponse>;

export type ListInsightsError = DefaultErrors;

export const listInsightsForAccount: API.PaginatedOperationMethod<
  ListInsightsForAccountRequest,
  ListInsightsResponse,
  ListInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListInsightsForAccountRequest,
  output: ListInsightsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result.items",
    pageSize: "perPage",
  } as const,
}));

export const listInsightsForZone: API.PaginatedOperationMethod<
  ListInsightsForZoneRequest,
  ListInsightsResponse,
  ListInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListInsightsForZoneRequest,
  output: ListInsightsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result.items",
    pageSize: "perPage",
  } as const,
}));

const DismissInsightBaseFields = {
  issueId: Schema.String.pipe(T.HttpPath("issueId")),
  dismiss: Schema.optional(Schema.Boolean),
} as const;

interface DismissInsightBaseRequest {
  issueId: string;
  /** Body param */
  dismiss?: boolean;
}

export interface DismissInsightForAccountRequest extends DismissInsightBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface DismissInsightForZoneRequest extends DismissInsightBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const DismissInsightForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...DismissInsightBaseFields,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/security-center/insights/{issueId}/dismiss",
    }),
  ) as unknown as Schema.Schema<DismissInsightForAccountRequest>;

export const DismissInsightForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...DismissInsightBaseFields,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/security-center/insights/{issueId}/dismiss",
    }),
  ) as unknown as Schema.Schema<DismissInsightForZoneRequest>;

export interface DismissInsightResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const DismissInsightResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    errors: Schema.Array(
      Schema.Struct({
        code: Schema.Number,
        message: Schema.String,
        documentationUrl: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        source: Schema.optional(
          Schema.Union([
            Schema.Struct({
              pointer: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          code: "code",
          message: "message",
          documentationUrl: "documentation_url",
          source: "source",
        }),
      ),
    ),
    messages: Schema.Array(
      Schema.Struct({
        code: Schema.Number,
        message: Schema.String,
        documentationUrl: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        source: Schema.optional(
          Schema.Union([
            Schema.Struct({
              pointer: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          code: "code",
          message: "message",
          documentationUrl: "documentation_url",
          source: "source",
        }),
      ),
    ),
    success: Schema.Literal(true),
  },
) as unknown as Schema.Schema<DismissInsightResponse>;

export type DismissInsightError = DefaultErrors;

export const dismissInsightForAccount: API.OperationMethod<
  DismissInsightForAccountRequest,
  DismissInsightResponse,
  DismissInsightError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DismissInsightForAccountRequest,
  output: DismissInsightResponse,
  errors: [],
}));

export const dismissInsightForZone: API.OperationMethod<
  DismissInsightForZoneRequest,
  DismissInsightResponse,
  DismissInsightError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DismissInsightForZoneRequest,
  output: DismissInsightResponse,
  errors: [],
}));

// =============================================================================
// InsightAuditLog
// =============================================================================

const ListInsightAuditLogsBaseFields = {} as const;

interface ListInsightAuditLogsBaseRequest {}

export interface ListInsightAuditLogsForAccountRequest extends ListInsightAuditLogsBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface ListInsightAuditLogsForZoneRequest extends ListInsightAuditLogsBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const ListInsightAuditLogsForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...ListInsightAuditLogsBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/security-center/insights/audit-log",
    }),
  ) as unknown as Schema.Schema<ListInsightAuditLogsForAccountRequest>;

export const ListInsightAuditLogsForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...ListInsightAuditLogsBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/security-center/insights/audit-log",
    }),
  ) as unknown as Schema.Schema<ListInsightAuditLogsForZoneRequest>;

export interface ListInsightAuditLogsResponse {
  result: {
    id?: string | null;
    changedAt?: string | null;
    changedBy?: string | null;
    currentValue?: string | null;
    fieldChanged?: "status" | "user_classification" | (string & {}) | null;
    issueId?: string | null;
    previousValue?: string | null;
    rationale?: string | null;
    zoneId?: number | null;
  }[];
  resultInfo?: {
    count?: number | null;
    cursor?: string | null;
    perPage?: number | null;
  } | null;
}

export const ListInsightAuditLogsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        changedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        changedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        currentValue: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        fieldChanged: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["status", "user_classification"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        issueId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        previousValue: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        rationale: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        zoneId: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      }).pipe(
        Schema.encodeKeys({
          id: "id",
          changedAt: "changed_at",
          changedBy: "changed_by",
          currentValue: "current_value",
          fieldChanged: "field_changed",
          issueId: "issue_id",
          previousValue: "previous_value",
          rationale: "rationale",
          zoneId: "zone_id",
        }),
      ),
    ),
    resultInfo: Schema.optional(
      Schema.Union([
        Schema.Struct({
          count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          cursor: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        }).pipe(
          Schema.encodeKeys({
            count: "count",
            cursor: "cursor",
            perPage: "per_page",
          }),
        ),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
  ) as unknown as Schema.Schema<ListInsightAuditLogsResponse>;

export type ListInsightAuditLogsError = DefaultErrors;

export const listInsightAuditLogsForAccount: API.PaginatedOperationMethod<
  ListInsightAuditLogsForAccountRequest,
  ListInsightAuditLogsResponse,
  ListInsightAuditLogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListInsightAuditLogsForAccountRequest,
  output: ListInsightAuditLogsResponse,
  errors: [],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursor",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export const listInsightAuditLogsForZone: API.PaginatedOperationMethod<
  ListInsightAuditLogsForZoneRequest,
  ListInsightAuditLogsResponse,
  ListInsightAuditLogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListInsightAuditLogsForZoneRequest,
  output: ListInsightAuditLogsResponse,
  errors: [],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursor",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

// =============================================================================
// InsightClass
// =============================================================================

const GetInsightClassBaseFields = {} as const;

interface GetInsightClassBaseRequest {}

export interface GetInsightClassForAccountRequest extends GetInsightClassBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetInsightClassForZoneRequest extends GetInsightClassBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetInsightClassForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...GetInsightClassBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/security-center/insights/class",
    }),
  ) as unknown as Schema.Schema<GetInsightClassForAccountRequest>;

export const GetInsightClassForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...GetInsightClassBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/security-center/insights/class",
    }),
  ) as unknown as Schema.Schema<GetInsightClassForZoneRequest>;

export type GetInsightClassResponse = {
  count?: number | null;
  value?: string | null;
}[];

export const GetInsightClassResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<GetInsightClassResponse>;

export type GetInsightClassError = DefaultErrors;

export const getInsightClassForAccount: API.OperationMethod<
  GetInsightClassForAccountRequest,
  GetInsightClassResponse,
  GetInsightClassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInsightClassForAccountRequest,
  output: GetInsightClassResponse,
  errors: [],
}));

export const getInsightClassForZone: API.OperationMethod<
  GetInsightClassForZoneRequest,
  GetInsightClassResponse,
  GetInsightClassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInsightClassForZoneRequest,
  output: GetInsightClassResponse,
  errors: [],
}));

// =============================================================================
// InsightClassification
// =============================================================================

const PatchInsightClassificationBaseFields = {
  issueId: Schema.String.pipe(T.HttpPath("issueId")),
  classification: Schema.optional(
    Schema.Union([
      Schema.Literal("false_positive"),
      Schema.Literal("accept_risk"),
      Schema.Literal("other"),
      Schema.Null,
    ]),
  ),
  rationale: Schema.optional(Schema.String),
} as const;

interface PatchInsightClassificationBaseRequest {
  issueId: string;
  /** Body param: User-defined classification for the insight. Can be 'false_positive', 'accept_risk', 'other', or null. */
  classification?: "false_positive" | "accept_risk" | "other" | null;
  /** Body param: Rationale for the classification change. Required when classification is 'accept_risk' or 'other'. */
  rationale?: string;
}

export interface PatchInsightClassificationForAccountRequest extends PatchInsightClassificationBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface PatchInsightClassificationForZoneRequest extends PatchInsightClassificationBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const PatchInsightClassificationForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...PatchInsightClassificationBaseFields,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/accounts/{account_id}/security-center/insights/{issueId}/classification",
    }),
  ) as unknown as Schema.Schema<PatchInsightClassificationForAccountRequest>;

export const PatchInsightClassificationForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...PatchInsightClassificationBaseFields,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/zones/{zone_id}/security-center/insights/{issueId}/classification",
    }),
  ) as unknown as Schema.Schema<PatchInsightClassificationForZoneRequest>;

export interface PatchInsightClassificationResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const PatchInsightClassificationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.Array(
      Schema.Struct({
        code: Schema.Number,
        message: Schema.String,
        documentationUrl: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        source: Schema.optional(
          Schema.Union([
            Schema.Struct({
              pointer: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          code: "code",
          message: "message",
          documentationUrl: "documentation_url",
          source: "source",
        }),
      ),
    ),
    messages: Schema.Array(
      Schema.Struct({
        code: Schema.Number,
        message: Schema.String,
        documentationUrl: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        source: Schema.optional(
          Schema.Union([
            Schema.Struct({
              pointer: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          code: "code",
          message: "message",
          documentationUrl: "documentation_url",
          source: "source",
        }),
      ),
    ),
    success: Schema.Literal(true),
  }) as unknown as Schema.Schema<PatchInsightClassificationResponse>;

export type PatchInsightClassificationError = DefaultErrors;

export const patchInsightClassificationForAccount: API.OperationMethod<
  PatchInsightClassificationForAccountRequest,
  PatchInsightClassificationResponse,
  PatchInsightClassificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchInsightClassificationForAccountRequest,
  output: PatchInsightClassificationResponse,
  errors: [],
}));

export const patchInsightClassificationForZone: API.OperationMethod<
  PatchInsightClassificationForZoneRequest,
  PatchInsightClassificationResponse,
  PatchInsightClassificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchInsightClassificationForZoneRequest,
  output: PatchInsightClassificationResponse,
  errors: [],
}));

// =============================================================================
// InsightContext
// =============================================================================

export interface GetInsightContextRequest {
  issueId: string;
  /** Identifier. */
  accountId: string;
}

export const GetInsightContextRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issueId: Schema.String.pipe(T.HttpPath("issueId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/security-center/insights/{issueId}/context",
    }),
  ) as unknown as Schema.Schema<GetInsightContextRequest>;

export type GetInsightContextResponse = Record<string, unknown>;

export const GetInsightContextResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetInsightContextResponse>;

export type GetInsightContextError = DefaultErrors;

export const getInsightContext: API.OperationMethod<
  GetInsightContextRequest,
  GetInsightContextResponse,
  GetInsightContextError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInsightContextRequest,
  output: GetInsightContextResponse,
  errors: [],
}));

// =============================================================================
// InsightSeverity
// =============================================================================

const GetInsightSeverityBaseFields = {} as const;

interface GetInsightSeverityBaseRequest {}

export interface GetInsightSeverityForAccountRequest extends GetInsightSeverityBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetInsightSeverityForZoneRequest extends GetInsightSeverityBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetInsightSeverityForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...GetInsightSeverityBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/security-center/insights/severity",
    }),
  ) as unknown as Schema.Schema<GetInsightSeverityForAccountRequest>;

export const GetInsightSeverityForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...GetInsightSeverityBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/security-center/insights/severity",
    }),
  ) as unknown as Schema.Schema<GetInsightSeverityForZoneRequest>;

export type GetInsightSeverityResponse = {
  count?: number | null;
  value?: string | null;
}[];

export const GetInsightSeverityResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetInsightSeverityResponse>;

export type GetInsightSeverityError = DefaultErrors;

export const getInsightSeverityForAccount: API.OperationMethod<
  GetInsightSeverityForAccountRequest,
  GetInsightSeverityResponse,
  GetInsightSeverityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInsightSeverityForAccountRequest,
  output: GetInsightSeverityResponse,
  errors: [],
}));

export const getInsightSeverityForZone: API.OperationMethod<
  GetInsightSeverityForZoneRequest,
  GetInsightSeverityResponse,
  GetInsightSeverityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInsightSeverityForZoneRequest,
  output: GetInsightSeverityResponse,
  errors: [],
}));

// =============================================================================
// InsightType
// =============================================================================

const GetInsightTypeBaseFields = {} as const;

interface GetInsightTypeBaseRequest {}

export interface GetInsightTypeForAccountRequest extends GetInsightTypeBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetInsightTypeForZoneRequest extends GetInsightTypeBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetInsightTypeForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...GetInsightTypeBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/security-center/insights/type",
    }),
  ) as unknown as Schema.Schema<GetInsightTypeForAccountRequest>;

export const GetInsightTypeForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...GetInsightTypeBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/security-center/insights/type",
    }),
  ) as unknown as Schema.Schema<GetInsightTypeForZoneRequest>;

export type GetInsightTypeResponse = {
  count?: number | null;
  value?: string | null;
}[];

export const GetInsightTypeResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<GetInsightTypeResponse>;

export type GetInsightTypeError = DefaultErrors;

export const getInsightTypeForAccount: API.OperationMethod<
  GetInsightTypeForAccountRequest,
  GetInsightTypeResponse,
  GetInsightTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInsightTypeForAccountRequest,
  output: GetInsightTypeResponse,
  errors: [],
}));

export const getInsightTypeForZone: API.OperationMethod<
  GetInsightTypeForZoneRequest,
  GetInsightTypeResponse,
  GetInsightTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInsightTypeForZoneRequest,
  output: GetInsightTypeResponse,
  errors: [],
}));
