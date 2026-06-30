/**
 * Cloudflare SECURITY-CENTER API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service security-center
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

interface ListByInsightInsightAuditLogResponseResult {
  /** UUIDv7 identifier for the audit log entry, time-ordered. */
  id?: string | null;
  /** The timestamp when the change occurred. */
  changedAt?: string | null;
  /** The actor that made the change. 'system' for automated changes, or a user identifier. */
  changedBy?: string | null;
  /** The value of the field after the change. Null if the field was cleared. */
  currentValue?: string | null;
  /** The field that was changed. */
  fieldChanged?: "status" | "user_classification" | (string & {}) | null;
  /** The ID of the insight this audit log entry relates to. */
  issueId?: string | null;
  /** The value of the field before the change. Null if the field was not previously set. */
  previousValue?: string | null;
  /** Optional rationale provided for the change. */
  rationale?: string | null;
  /** The zone ID associated with the insight. Only present for zone-level insights. */
  zoneId?: number | null;
}
const ListByInsightInsightAuditLogResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      changedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      changedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      currentValue: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
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
  ) as unknown as Schema.Codec<ListByInsightInsightAuditLogResponseResult>;

interface ListByInsightInsightAuditLogResponseResultInfo {
  count?: number | null;
  cursor?: string | null;
  perPage?: number | null;
}
const ListByInsightInsightAuditLogResponseResultInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
  ) as unknown as Schema.Codec<ListByInsightInsightAuditLogResponseResultInfo>;

interface Payload {
  /** Describes the method used to detect insight. */
  detectionMethod?: string | null;
  zoneTag?: string | null;
}
const Payload = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    detectionMethod: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    zoneTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      detectionMethod: "detection_method",
      zoneTag: "zone_tag",
    }),
  ),
) as unknown as Schema.Codec<Payload>;

interface Issue {
  id?: string | null;
  dismissed?: boolean | null;
  /** Indicates whether the insight has a large payload that requires fetching via the context endpoint. */
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
  payload?: { detectionMethod?: string | null; zoneTag?: string | null } | null;
  resolveLink?: string | null;
  resolveText?: string | null;
  severity?: "Low" | "Moderate" | "Critical" | (string & {}) | null;
  since?: string | null;
  /** The current status of the insight. */
  status?: "active" | "resolved" | (string & {}) | null;
  subject?: string | null;
  timestamp?: string | null;
  /** User-defined classification for the insight. Can be 'false_positive', 'accept_risk', 'other', or null. */
  userClassification?: "false_positive" | "accept_risk" | "other" | null;
}
const Issue = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    dismissed: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    hasExtendedContext: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    issueClass: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
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
    payload: Schema.optional(Schema.Union([Payload, Schema.Null])),
    resolveLink: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    resolveText: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    severity: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["Low", "Moderate", "Critical"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    since: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["active", "resolved"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    subject: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    timestamp: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
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
) as unknown as Schema.Codec<Issue>;

interface ListInsightsResponseResultItem {
  /** Indicates the total number of results. */
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
        severity?: "Low" | "Moderate" | "Critical" | (string & {}) | null;
        since?: string | null;
        status?: "active" | "resolved" | (string & {}) | null;
        subject?: string | null;
        timestamp?: string | null;
        userClassification?: "false_positive" | "accept_risk" | "other" | null;
      }[]
    | null;
  /** Specifies the current page within paginated list of results. */
  page?: number | null;
  /** Sets the number of results per page of results. */
  perPage?: number | null;
}
const ListInsightsResponseResultItem =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      issues: Schema.optional(Schema.Union([Schema.Array(Issue), Schema.Null])),
      page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        count: "count",
        issues: "issues",
        page: "page",
        perPage: "per_page",
      }),
    ),
  ) as unknown as Schema.Codec<ListInsightsResponseResultItem>;

interface ListInsightsResponseResult {
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
              severity?: "Low" | "Moderate" | "Critical" | (string & {}) | null;
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
}
const ListInsightsResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      items: Schema.optional(
        Schema.Union([
          Schema.Array(ListInsightsResponseResultItem),
          Schema.Null,
        ]),
      ),
    }),
) as unknown as Schema.Codec<ListInsightsResponseResult>;

interface ListInsightsResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListInsightsResponseResultInfo =
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
  ) as unknown as Schema.Codec<ListInsightsResponseResultInfo>;

interface Source {
  pointer?: string | null;
}
const Source = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    pointer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Source>;

interface Error2 {
  code: number;
  message: string;
  documentationUrl?: string | null;
  source?: { pointer?: string | null } | null;
}
const Error2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    code: Schema.Number,
    message: Schema.String,
    documentationUrl: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    source: Schema.optional(Schema.Union([Source, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      code: "code",
      message: "message",
      documentationUrl: "documentation_url",
      source: "source",
    }),
  ),
) as unknown as Schema.Codec<Error2>;

interface ClassGetResponseItem {
  count?: number | null;
  value?: string | null;
}
const ClassGetResponseItem = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ClassGetResponseItem>;

// =============================================================================
// ByInsightInsightAuditLog
// =============================================================================

const ListByInsightInsightAuditLogBaseFields = {
  issueId: Schema.String.pipe(T.HttpPath("issueId")),
  perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
  cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
  before: Schema.optional(Schema.String).pipe(T.HttpQuery("before")),
  changedBy: Schema.optional(Schema.String).pipe(T.HttpQuery("changed_by")),
  fieldChanged: Schema.optional(
    Schema.Union([
      Schema.Literals(["status", "user_classification"]),
      Schema.String,
    ]),
  ).pipe(T.HttpQuery("field_changed")),
  order: Schema.optional(
    Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
  ).pipe(T.HttpQuery("order")),
  since: Schema.optional(Schema.String).pipe(T.HttpQuery("since")),
} as const;

interface ListByInsightInsightAuditLogBaseRequest {
  issueId: string;
  perPage?: number;
  cursor?: string;
  /** Query param: Filter entries changed before this timestamp (RFC 3339). */
  before?: string;
  /** Query param: Filter by the actor that made the change. */
  changedBy?: string;
  /** Query param: Filter by the field that was changed. */
  fieldChanged?: "status" | "user_classification" | (string & {});
  /** Query param: Sort order for results. Use 'asc' for oldest first or 'desc' for newest first. */
  order?: "asc" | "desc" | (string & {});
  /** Query param: Filter entries changed at or after this timestamp (RFC 3339). */
  since?: string;
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...ListByInsightInsightAuditLogBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/security-center/insights/{issueId}/audit-log",
      }),
    ),
  ) as unknown as Schema.Codec<ListByInsightInsightAuditLogForAccountRequest>;

export const ListByInsightInsightAuditLogForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...ListByInsightInsightAuditLogBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/security-center/insights/{issueId}/audit-log",
      }),
    ),
  ) as unknown as Schema.Codec<ListByInsightInsightAuditLogForZoneRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListByInsightInsightAuditLogResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([
          ListByInsightInsightAuditLogResponseResultInfo,
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListByInsightInsightAuditLogResponse>;

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

const ListInsightsBaseFields = {
  page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
  perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
  dismissed: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("dismissed")),
  issueClass: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("issue_class"),
  ),
  issueClassNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("issue_class~neq"),
  ),
  issueType: Schema.optional(
    Schema.Array(
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
    ),
  ).pipe(T.HttpQuery("issue_type")),
  issueTypeNeq: Schema.optional(
    Schema.Array(
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
    ),
  ).pipe(T.HttpQuery("issue_type~neq")),
  product: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("product"),
  ),
  productNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("product~neq"),
  ),
  severity: Schema.optional(
    Schema.Array(
      Schema.Union([
        Schema.Literals(["low", "moderate", "critical"]),
        Schema.String,
      ]),
    ),
  ).pipe(T.HttpQuery("severity")),
  severityNeq: Schema.optional(
    Schema.Array(
      Schema.Union([
        Schema.Literals(["low", "moderate", "critical"]),
        Schema.String,
      ]),
    ),
  ).pipe(T.HttpQuery("severity~neq")),
  subject: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("subject"),
  ),
  subjectNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("subject~neq"),
  ),
} as const;

interface ListInsightsBaseRequest {
  page?: number;
  perPage?: number;
  /** Query param */
  dismissed?: boolean;
  /** Query param */
  issueClass?: string[];
  /** Query param */
  issueClassNeq?: string[];
  /** Query param */
  issueType?: (
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
  )[];
  /** Query param */
  issueTypeNeq?: (
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
  )[];
  /** Query param */
  product?: string[];
  /** Query param */
  productNeq?: string[];
  /** Query param */
  severity?: ("low" | "moderate" | "critical" | (string & {}))[];
  /** Query param */
  severityNeq?: ("low" | "moderate" | "critical" | (string & {}))[];
  /** Query param */
  subject?: string[];
  /** Query param */
  subjectNeq?: string[];
}

export interface ListInsightsForAccountRequest extends ListInsightsBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface ListInsightsForZoneRequest extends ListInsightsBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const ListInsightsForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...ListInsightsBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/security-center/insights",
      }),
    ),
  ) as unknown as Schema.Codec<ListInsightsForAccountRequest>;

export const ListInsightsForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...ListInsightsBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/security-center/insights",
      }),
    ),
  ) as unknown as Schema.Codec<ListInsightsForZoneRequest>;

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

export const ListInsightsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: ListInsightsResponseResult,
      resultInfo: Schema.optional(
        Schema.Union([ListInsightsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListInsightsResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...DismissInsightBaseFields,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/security-center/insights/{issueId}/dismiss",
      }),
    ),
  ) as unknown as Schema.Codec<DismissInsightForAccountRequest>;

export const DismissInsightForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...DismissInsightBaseFields,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/security-center/insights/{issueId}/dismiss",
      }),
    ),
  ) as unknown as Schema.Codec<DismissInsightForZoneRequest>;

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

export const DismissInsightResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(Error2),
      messages: Schema.Array(Error2),
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Codec<DismissInsightResponse>;

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

const ListInsightAuditLogsBaseFields = {
  perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
  cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
  before: Schema.optional(Schema.String).pipe(T.HttpQuery("before")),
  changedBy: Schema.optional(Schema.String).pipe(T.HttpQuery("changed_by")),
  fieldChanged: Schema.optional(
    Schema.Union([
      Schema.Literals(["status", "user_classification"]),
      Schema.String,
    ]),
  ).pipe(T.HttpQuery("field_changed")),
  order: Schema.optional(
    Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
  ).pipe(T.HttpQuery("order")),
  since: Schema.optional(Schema.String).pipe(T.HttpQuery("since")),
} as const;

interface ListInsightAuditLogsBaseRequest {
  perPage?: number;
  cursor?: string;
  /** Query param: Filter entries changed before this timestamp (RFC 3339). */
  before?: string;
  /** Query param: Filter by the actor that made the change. */
  changedBy?: string;
  /** Query param: Filter by the field that was changed. */
  fieldChanged?: "status" | "user_classification" | (string & {});
  /** Query param: Sort order for results. Use 'asc' for oldest first or 'desc' for newest first. */
  order?: "asc" | "desc" | (string & {});
  /** Query param: Filter entries changed at or after this timestamp (RFC 3339). */
  since?: string;
}

export interface ListInsightAuditLogsForAccountRequest extends ListInsightAuditLogsBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface ListInsightAuditLogsForZoneRequest extends ListInsightAuditLogsBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const ListInsightAuditLogsForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...ListInsightAuditLogsBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/security-center/insights/audit-log",
      }),
    ),
  ) as unknown as Schema.Codec<ListInsightAuditLogsForAccountRequest>;

export const ListInsightAuditLogsForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...ListInsightAuditLogsBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/security-center/insights/audit-log",
      }),
    ),
  ) as unknown as Schema.Codec<ListInsightAuditLogsForZoneRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListByInsightInsightAuditLogResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([
          ListByInsightInsightAuditLogResponseResultInfo,
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListInsightAuditLogsResponse>;

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

const GetInsightClassBaseFields = {
  dismissed: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("dismissed")),
  issueClass: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("issue_class"),
  ),
  issueClassNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("issue_class~neq"),
  ),
  issueType: Schema.optional(
    Schema.Array(
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
    ),
  ).pipe(T.HttpQuery("issue_type")),
  issueTypeNeq: Schema.optional(
    Schema.Array(
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
    ),
  ).pipe(T.HttpQuery("issue_type~neq")),
  product: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("product"),
  ),
  productNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("product~neq"),
  ),
  severity: Schema.optional(
    Schema.Array(
      Schema.Union([
        Schema.Literals(["low", "moderate", "critical"]),
        Schema.String,
      ]),
    ),
  ).pipe(T.HttpQuery("severity")),
  severityNeq: Schema.optional(
    Schema.Array(
      Schema.Union([
        Schema.Literals(["low", "moderate", "critical"]),
        Schema.String,
      ]),
    ),
  ).pipe(T.HttpQuery("severity~neq")),
  subject: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("subject"),
  ),
  subjectNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("subject~neq"),
  ),
} as const;

interface GetInsightClassBaseRequest {
  /** Query param */
  dismissed?: boolean;
  /** Query param */
  issueClass?: string[];
  /** Query param */
  issueClassNeq?: string[];
  /** Query param */
  issueType?: (
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
  )[];
  /** Query param */
  issueTypeNeq?: (
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
  )[];
  /** Query param */
  product?: string[];
  /** Query param */
  productNeq?: string[];
  /** Query param */
  severity?: ("low" | "moderate" | "critical" | (string & {}))[];
  /** Query param */
  severityNeq?: ("low" | "moderate" | "critical" | (string & {}))[];
  /** Query param */
  subject?: string[];
  /** Query param */
  subjectNeq?: string[];
}

export interface GetInsightClassForAccountRequest extends GetInsightClassBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetInsightClassForZoneRequest extends GetInsightClassBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetInsightClassForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...GetInsightClassBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/security-center/insights/class",
      }),
    ),
  ) as unknown as Schema.Codec<GetInsightClassForAccountRequest>;

export const GetInsightClassForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...GetInsightClassBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/security-center/insights/class",
      }),
    ),
  ) as unknown as Schema.Codec<GetInsightClassForZoneRequest>;

export type GetInsightClassResponse = {
  count?: number | null;
  value?: string | null;
}[];

export const GetInsightClassResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Array(ClassGetResponseItem).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetInsightClassResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...PatchInsightClassificationBaseFields,
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/security-center/insights/{issueId}/classification",
      }),
    ),
  ) as unknown as Schema.Codec<PatchInsightClassificationForAccountRequest>;

export const PatchInsightClassificationForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...PatchInsightClassificationBaseFields,
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/security-center/insights/{issueId}/classification",
      }),
    ),
  ) as unknown as Schema.Codec<PatchInsightClassificationForZoneRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(Error2),
      messages: Schema.Array(Error2),
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Codec<PatchInsightClassificationResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      issueId: Schema.String.pipe(T.HttpPath("issueId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/security-center/insights/{issueId}/context",
      }),
    ),
  ) as unknown as Schema.Codec<GetInsightContextRequest>;

export type GetInsightContextResponse = Record<string, unknown>;

export const GetInsightContextResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Record(Schema.String, Schema.Unknown).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetInsightContextResponse>;

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

const GetInsightSeverityBaseFields = {
  dismissed: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("dismissed")),
  issueClass: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("issue_class"),
  ),
  issueClassNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("issue_class~neq"),
  ),
  issueType: Schema.optional(
    Schema.Array(
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
    ),
  ).pipe(T.HttpQuery("issue_type")),
  issueTypeNeq: Schema.optional(
    Schema.Array(
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
    ),
  ).pipe(T.HttpQuery("issue_type~neq")),
  product: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("product"),
  ),
  productNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("product~neq"),
  ),
  severity: Schema.optional(
    Schema.Array(
      Schema.Union([
        Schema.Literals(["low", "moderate", "critical"]),
        Schema.String,
      ]),
    ),
  ).pipe(T.HttpQuery("severity")),
  severityNeq: Schema.optional(
    Schema.Array(
      Schema.Union([
        Schema.Literals(["low", "moderate", "critical"]),
        Schema.String,
      ]),
    ),
  ).pipe(T.HttpQuery("severity~neq")),
  subject: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("subject"),
  ),
  subjectNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("subject~neq"),
  ),
} as const;

interface GetInsightSeverityBaseRequest {
  /** Query param */
  dismissed?: boolean;
  /** Query param */
  issueClass?: string[];
  /** Query param */
  issueClassNeq?: string[];
  /** Query param */
  issueType?: (
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
  )[];
  /** Query param */
  issueTypeNeq?: (
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
  )[];
  /** Query param */
  product?: string[];
  /** Query param */
  productNeq?: string[];
  /** Query param */
  severity?: ("low" | "moderate" | "critical" | (string & {}))[];
  /** Query param */
  severityNeq?: ("low" | "moderate" | "critical" | (string & {}))[];
  /** Query param */
  subject?: string[];
  /** Query param */
  subjectNeq?: string[];
}

export interface GetInsightSeverityForAccountRequest extends GetInsightSeverityBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetInsightSeverityForZoneRequest extends GetInsightSeverityBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetInsightSeverityForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...GetInsightSeverityBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/security-center/insights/severity",
      }),
    ),
  ) as unknown as Schema.Codec<GetInsightSeverityForAccountRequest>;

export const GetInsightSeverityForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...GetInsightSeverityBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/security-center/insights/severity",
      }),
    ),
  ) as unknown as Schema.Codec<GetInsightSeverityForZoneRequest>;

export type GetInsightSeverityResponse = {
  count?: number | null;
  value?: string | null;
}[];

export const GetInsightSeverityResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Array(ClassGetResponseItem).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetInsightSeverityResponse>;

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

const GetInsightTypeBaseFields = {
  dismissed: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("dismissed")),
  issueClass: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("issue_class"),
  ),
  issueClassNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("issue_class~neq"),
  ),
  issueType: Schema.optional(
    Schema.Array(
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
    ),
  ).pipe(T.HttpQuery("issue_type")),
  issueTypeNeq: Schema.optional(
    Schema.Array(
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
    ),
  ).pipe(T.HttpQuery("issue_type~neq")),
  product: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("product"),
  ),
  productNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("product~neq"),
  ),
  severity: Schema.optional(
    Schema.Array(
      Schema.Union([
        Schema.Literals(["low", "moderate", "critical"]),
        Schema.String,
      ]),
    ),
  ).pipe(T.HttpQuery("severity")),
  severityNeq: Schema.optional(
    Schema.Array(
      Schema.Union([
        Schema.Literals(["low", "moderate", "critical"]),
        Schema.String,
      ]),
    ),
  ).pipe(T.HttpQuery("severity~neq")),
  subject: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("subject"),
  ),
  subjectNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("subject~neq"),
  ),
} as const;

interface GetInsightTypeBaseRequest {
  /** Query param */
  dismissed?: boolean;
  /** Query param */
  issueClass?: string[];
  /** Query param */
  issueClassNeq?: string[];
  /** Query param */
  issueType?: (
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
  )[];
  /** Query param */
  issueTypeNeq?: (
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
  )[];
  /** Query param */
  product?: string[];
  /** Query param */
  productNeq?: string[];
  /** Query param */
  severity?: ("low" | "moderate" | "critical" | (string & {}))[];
  /** Query param */
  severityNeq?: ("low" | "moderate" | "critical" | (string & {}))[];
  /** Query param */
  subject?: string[];
  /** Query param */
  subjectNeq?: string[];
}

export interface GetInsightTypeForAccountRequest extends GetInsightTypeBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetInsightTypeForZoneRequest extends GetInsightTypeBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetInsightTypeForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...GetInsightTypeBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/security-center/insights/type",
      }),
    ),
  ) as unknown as Schema.Codec<GetInsightTypeForAccountRequest>;

export const GetInsightTypeForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...GetInsightTypeBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/security-center/insights/type",
      }),
    ),
  ) as unknown as Schema.Codec<GetInsightTypeForZoneRequest>;

export type GetInsightTypeResponse = {
  count?: number | null;
  value?: string | null;
}[];

export const GetInsightTypeResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Array(ClassGetResponseItem).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetInsightTypeResponse>;

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
