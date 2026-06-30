/**
 * Cloudflare AUDIT-LOGS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service audit-logs
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

interface Action {
  /** A boolean that indicates if the action attempted was successful. */
  result?: boolean | null;
  /** A short string that describes the action that was performed. */
  type?: string | null;
}
const Action = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Action>;

interface Actor {
  /** The ID of the actor that performed the action. If a user performed the action, this will be their User ID. */
  id?: string | null;
  /** The email of the user that performed the action. */
  email?: string | null;
  /** The IP address of the request that performed the action. */
  ip?: string | null;
  /** The type of actor, whether a User, Cloudflare Admin, or an Automated System. */
  type?: "user" | "admin" | "Cloudflare" | (string & {}) | null;
}
const Actor = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    ip: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["user", "admin", "Cloudflare"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Actor>;

interface Owner {
  /** Identifier */
  id?: string | null;
}
const Owner = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Owner>;

interface Resource {
  /** An identifier for the resource that was affected by the action. */
  id?: string | null;
  /** A short string that describes the resource that was affected by the action. */
  type?: string | null;
}
const Resource = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Resource>;

interface AuditLog {
  /** A string that uniquely identifies the audit log. */
  id?: string | null;
  action?: { result?: boolean | null; type?: string | null } | null;
  actor?: {
    id?: string | null;
    email?: string | null;
    ip?: string | null;
    type?: "user" | "admin" | "Cloudflare" | (string & {}) | null;
  } | null;
  /** The source of the event. */
  interface?: string | null;
  /** An object which can lend more context to the action being logged. This is a flexible value and varies between different actions. */
  metadata?: unknown | null;
  /** The new value of the resource that was modified. */
  newValue?: string | null;
  /** The value of the resource before it was modified. */
  oldValue?: string | null;
  owner?: { id?: string | null } | null;
  resource?: { id?: string | null; type?: string | null } | null;
  /** A UTC RFC3339 timestamp that specifies when the action being logged occured. */
  when?: string | null;
}
const AuditLog = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(Schema.Union([Action, Schema.Null])),
    actor: Schema.optional(Schema.Union([Actor, Schema.Null])),
    interface: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    metadata: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    newValue: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    oldValue: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    owner: Schema.optional(Schema.Union([Owner, Schema.Null])),
    resource: Schema.optional(Schema.Union([Resource, Schema.Null])),
    when: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<AuditLog>;

interface ListAuditLogsResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListAuditLogsResponseResultInfo =
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
  ) as unknown as Schema.Codec<ListAuditLogsResponseResultInfo>;

// =============================================================================
// AuditLog
// =============================================================================

export interface ListAuditLogsRequest {
  /** Path param: Identifier */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Finds a specific log by its ID. */
  id?: string;
  /** Query param */
  action?: { type?: string };
  /** Query param */
  actor?: { email?: string; ip?: string };
  /** Query param: Limits the returned results to logs older than the specified date. A `full-date` that conforms to RFC3339. */
  before?: unknown;
  /** Query param: Changes the direction of the chronological sorting. */
  direction?: "desc" | "asc" | (string & {});
  /** Query param: Indicates that this request is an export of logs in CSV format. */
  export?: boolean;
  /** Query param: Indicates whether or not to hide user level audit logs. */
  hideUserLogs?: boolean;
  /** Query param: Limits the returned results to logs newer than the specified date. A `full-date` that conforms to RFC3339. */
  since?: unknown;
  /** Query param */
  zone?: { name?: string };
}

export const ListAuditLogsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
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
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["desc", "asc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
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
    ),
) as unknown as Schema.Codec<ListAuditLogsRequest>;

export interface ListAuditLogsResponse {
  result: {
    id?: string | null;
    action?: { result?: boolean | null; type?: string | null } | null;
    actor?: {
      id?: string | null;
      email?: string | null;
      ip?: string | null;
      type?: "user" | "admin" | "Cloudflare" | (string & {}) | null;
    } | null;
    interface?: string | null;
    metadata?: unknown | null;
    newValue?: string | null;
    oldValue?: string | null;
    owner?: { id?: string | null } | null;
    resource?: { id?: string | null; type?: string | null } | null;
    when?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListAuditLogsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(AuditLog),
      resultInfo: Schema.optional(
        Schema.Union([ListAuditLogsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListAuditLogsResponse>;

export type ListAuditLogsError = DefaultErrors;

export const listAuditLogs: API.PaginatedOperationMethod<
  ListAuditLogsRequest,
  ListAuditLogsResponse,
  ListAuditLogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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
