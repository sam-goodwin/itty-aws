/**
 * Cloudflare AUDIT-LOGS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service audit-logs
 */

import * as stream from "effect/Stream";
import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// AuditLog
// =============================================================================

export interface ListAuditLogsRequest {
  /** Path param: Identifier */
  accountId: string;
  /** Query param: Finds a specific log by its ID. */
  id?: string;
  /** Query param: */
  action?: { type?: string };
  /** Query param: */
  actor?: { email?: string; ip?: string };
  /** Query param: Limits the returned results to logs older than the specified date. A `full-date` that conforms to RFC3339. */
  before?: unknown;
  /** Query param: Changes the direction of the chronological sorting. */
  direction?: "desc" | "asc";
  /** Query param: Indicates that this request is an export of logs in CSV format. */
  export?: boolean;
  /** Query param: Indicates whether or not to hide user level audit logs. */
  hideUserLogs?: boolean;
  /** Query param: Limits the returned results to logs newer than the specified date. A `full-date` that conforms to RFC3339. */
  since?: unknown;
  /** Query param: */
  zone?: { name?: string };
}

export const ListAuditLogsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  id: Schema.optional(Schema.String).pipe(T.HttpQuery("id")),
  action: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
    }),
  ).pipe(T.HttpQuery("action")),
  actor: Schema.optional(
    Schema.Struct({
      email: Schema.optional(Schema.String),
      ip: Schema.optional(Schema.String),
    }),
  ).pipe(T.HttpQuery("actor")),
  before: Schema.optional(Schema.Unknown).pipe(T.HttpQuery("before")),
  direction: Schema.optional(Schema.Literals(["desc", "asc"])).pipe(
    T.HttpQuery("direction"),
  ),
  export: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("export")),
  hideUserLogs: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("hide_user_logs"),
  ),
  since: Schema.optional(Schema.Unknown).pipe(T.HttpQuery("since")),
  zone: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
    }),
  ).pipe(T.HttpQuery("zone")),
}).pipe(
  T.Http({ method: "GET", path: "/accounts/{account_id}/audit_logs" }),
) as unknown as Schema.Schema<ListAuditLogsRequest>;

export interface ListAuditLogsResponse {
  result: {
    id?: string | null;
    action?: { result?: boolean | null; type?: string | null } | null;
    actor?: {
      id?: string | null;
      email?: string | null;
      ip?: string | null;
      type?: "user" | "admin" | "Cloudflare" | null;
    } | null;
    interface?: string | null;
    metadata?: unknown | null;
    newValue?: string | null;
    oldValue?: string | null;
    owner?: { id?: string | null } | null;
    resource?: { id?: string | null; type?: string | null } | null;
    when?: string | null;
  }[];
  resultInfo: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  };
}

export const ListAuditLogsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([
          Schema.Struct({
            result: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          }),
          Schema.Null,
        ]),
      ),
      actor: Schema.optional(
        Schema.Union([
          Schema.Struct({
            id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            ip: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            type: Schema.optional(
              Schema.Union([
                Schema.Literals(["user", "admin", "Cloudflare"]),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      interface: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      metadata: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
      newValue: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      oldValue: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      owner: Schema.optional(
        Schema.Union([
          Schema.Struct({
            id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          }),
          Schema.Null,
        ]),
      ),
      resource: Schema.optional(
        Schema.Union([
          Schema.Struct({
            id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          }),
          Schema.Null,
        ]),
      ),
      when: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ),
  resultInfo: Schema.Struct({
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
}).pipe(
  Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
) as unknown as Schema.Schema<ListAuditLogsResponse>;

export type ListAuditLogsError = DefaultErrors;

export const listAuditLogs: API.PaginatedOperationMethod<
  ListAuditLogsRequest,
  ListAuditLogsResponse,
  ListAuditLogsError,
  Credentials | HttpClient.HttpClient
> & {
  pages: (
    input: ListAuditLogsRequest,
  ) => stream.Stream<
    ListAuditLogsResponse,
    ListAuditLogsError,
    Credentials | HttpClient.HttpClient
  >;
  items: (input: ListAuditLogsRequest) => stream.Stream<
    {
      id?: string | null;
      action?: { result?: boolean | null; type?: string | null } | null;
      actor?: {
        id?: string | null;
        email?: string | null;
        ip?: string | null;
        type?: "user" | "admin" | "Cloudflare" | null;
      } | null;
      interface?: string | null;
      metadata?: unknown | null;
      newValue?: string | null;
      oldValue?: string | null;
      owner?: { id?: string | null } | null;
      resource?: { id?: string | null; type?: string | null } | null;
      when?: string | null;
    },
    ListAuditLogsError,
    Credentials | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAuditLogsRequest,
  output: ListAuditLogsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));
