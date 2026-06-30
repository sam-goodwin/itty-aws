/**
 * Cloudflare MOQ API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service moq
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

interface LingeringSubscribe {
  enabled?: boolean | null;
  /** Relay-level ceiling on lingering subscribe timeout (ms). Default 30000. */
  maxTimeoutMs?: number | null;
}
const LingeringSubscribe = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    maxTimeoutMs: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({ enabled: "enabled", maxTimeoutMs: "max_timeout_ms" }),
  ),
) as unknown as Schema.Codec<LingeringSubscribe>;

interface Origin {
  /** Upstream origin relay URL. */
  url?: string | null;
}
const Origin = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Origin>;

interface OriginFallback {
  enabled?: boolean | null;
  /** Ordered list of upstream origin relays. Each entry is an object (not a bare string) so per-origin configuration can be added in the future without another breaking change. */
  origins?: { url?: string | null }[] | null;
}
const OriginFallback = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    origins: Schema.optional(Schema.Union([Schema.Array(Origin), Schema.Null])),
  }),
) as unknown as Schema.Codec<OriginFallback>;

interface Config {
  lingeringSubscribe?: {
    enabled?: boolean | null;
    maxTimeoutMs?: number | null;
  } | null;
  originFallback?: {
    enabled?: boolean | null;
    origins?: { url?: string | null }[] | null;
  } | null;
}
const Config = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lingeringSubscribe: Schema.optional(
      Schema.Union([LingeringSubscribe, Schema.Null]),
    ),
    originFallback: Schema.optional(
      Schema.Union([OriginFallback, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      lingeringSubscribe: "lingering_subscribe",
      originFallback: "origin_fallback",
    }),
  ),
) as unknown as Schema.Codec<Config>;

interface ListRelaysResponseResult {
  created: string;
  modified: string;
  name: string;
  uid: string;
}
const ListRelaysResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      created: Schema.String,
      modified: Schema.String,
      name: Schema.String,
      uid: Schema.String,
    }),
) as unknown as Schema.Codec<ListRelaysResponseResult>;

// =============================================================================
// Relay
// =============================================================================

export interface GetRelayRequest {
  relayId: string;
  /** Cloudflare account identifier. */
  accountId: string;
}

export const GetRelayRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    relayId: Schema.String.pipe(T.HttpPath("relayId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/moq/relays/{relayId}",
    }),
  ),
) as unknown as Schema.Codec<GetRelayRequest>;

export interface GetRelayResponse {
  /** origin_fallback and lingering_subscribe are mutually exclusive. */
  config: {
    lingeringSubscribe?: {
      enabled?: boolean | null;
      maxTimeoutMs?: number | null;
    } | null;
    originFallback?: {
      enabled?: boolean | null;
      origins?: { url?: string | null }[] | null;
    } | null;
  };
  created: string;
  modified: string;
  name: string;
  uid: string;
  /** "connected" when active, omitted otherwise. */
  status?: "connected" | null;
}

export const GetRelayResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    config: Config,
    created: Schema.String,
    modified: Schema.String,
    name: Schema.String,
    uid: Schema.String,
    status: Schema.optional(
      Schema.Union([Schema.Literal("connected"), Schema.Null]),
    ),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetRelayResponse>;

export type GetRelayError = DefaultErrors;

export const getRelay: API.OperationMethod<
  GetRelayRequest,
  GetRelayResponse,
  GetRelayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRelayRequest,
  output: GetRelayResponse,
  errors: [],
}));

export interface ListRelaysRequest {
  /** Path param: Cloudflare account identifier. */
  accountId: string;
  /** Query param: Sort order by `created`. When true, results are returned oldest-first (ascending); otherwise newest-first (descending, the default). */
  asc?: boolean;
  /** Query param: Cursor for pagination. Returns relays created strictly after this RFC 3339 timestamp (typically the `created` value of the last item on the current page, to fetch the next page). */
  createdAfter?: string;
  /** Query param: Cursor for pagination. Returns relays created strictly before this RFC 3339 timestamp (typically the `created` value of the first item on the current page, to fetch the previous page). */
  createdBefore?: string;
  /** Query param: Maximum number of relays to return per page. */
  perPage?: number;
}

export const ListRelaysRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      asc: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("asc")),
      createdAfter: Schema.optional(Schema.String).pipe(
        T.HttpQuery("created_after"),
      ),
      createdBefore: Schema.optional(Schema.String).pipe(
        T.HttpQuery("created_before"),
      ),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(
      T.Http({ method: "GET", path: "/accounts/{account_id}/moq/relays" }),
    ),
) as unknown as Schema.Codec<ListRelaysRequest>;

export interface ListRelaysResponse {
  result: { created: string; modified: string; name: string; uid: string }[];
}

export const ListRelaysResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListRelaysResponseResult),
    }),
) as unknown as Schema.Codec<ListRelaysResponse>;

export type ListRelaysError = DefaultErrors;

export const listRelays: API.PaginatedOperationMethod<
  ListRelaysRequest,
  ListRelaysResponse,
  ListRelaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRelaysRequest,
  output: ListRelaysResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateRelayRequest {
  /** Path param: Cloudflare account identifier. */
  accountId: string;
  /** Body param: Human-readable name for the relay. */
  name: string;
}

export const CreateRelayRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
    }).pipe(
      T.Http({ method: "POST", path: "/accounts/{account_id}/moq/relays" }),
    ),
) as unknown as Schema.Codec<CreateRelayRequest>;

export interface CreateRelayResponse {
  /** origin_fallback and lingering_subscribe are mutually exclusive. */
  config: {
    lingeringSubscribe?: {
      enabled?: boolean | null;
      maxTimeoutMs?: number | null;
    } | null;
    originFallback?: {
      enabled?: boolean | null;
      origins?: { url?: string | null }[] | null;
    } | null;
  };
  created: string;
  modified: string;
  name: string;
  /** Full access token (publish + subscribe). Treat as sensitive. */
  tokenPublishSubscribe: string;
  /** Subscribe-only token. Treat as sensitive. */
  tokenSubscribe: string;
  /** Server-generated unique identifier (32 hex chars). */
  uid: string;
}

export const CreateRelayResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      config: Config,
      created: Schema.String,
      modified: Schema.String,
      name: Schema.String,
      tokenPublishSubscribe: Schema.String,
      tokenSubscribe: Schema.String,
      uid: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          config: "config",
          created: "created",
          modified: "modified",
          name: "name",
          tokenPublishSubscribe: "token_publish_subscribe",
          tokenSubscribe: "token_subscribe",
          uid: "uid",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateRelayResponse>;

export type CreateRelayError = DefaultErrors;

export const createRelay: API.OperationMethod<
  CreateRelayRequest,
  CreateRelayResponse,
  CreateRelayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateRelayRequest,
  output: CreateRelayResponse,
  errors: [],
}));

export interface UpdateRelayRequest {
  relayId: string;
  /** Path param: Cloudflare account identifier. */
  accountId: string;
  /** Body param: origin_fallback and lingering_subscribe are mutually exclusive. */
  config?: {
    lingeringSubscribe?: { enabled?: boolean; maxTimeoutMs?: number };
    originFallback?: { enabled?: boolean; origins?: { url?: string }[] };
  };
  /** Body param */
  name?: string;
}

export const UpdateRelayRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      relayId: Schema.String.pipe(T.HttpPath("relayId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      config: Schema.optional(Config),
      name: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/moq/relays/{relayId}",
      }),
    ),
) as unknown as Schema.Codec<UpdateRelayRequest>;

export interface UpdateRelayResponse {
  /** origin_fallback and lingering_subscribe are mutually exclusive. */
  config: {
    lingeringSubscribe?: {
      enabled?: boolean | null;
      maxTimeoutMs?: number | null;
    } | null;
    originFallback?: {
      enabled?: boolean | null;
      origins?: { url?: string | null }[] | null;
    } | null;
  };
  created: string;
  modified: string;
  name: string;
  uid: string;
  /** "connected" when active, omitted otherwise. */
  status?: "connected" | null;
}

export const UpdateRelayResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      config: Config,
      created: Schema.String,
      modified: Schema.String,
      name: Schema.String,
      uid: Schema.String,
      status: Schema.optional(
        Schema.Union([Schema.Literal("connected"), Schema.Null]),
      ),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdateRelayResponse>;

export type UpdateRelayError = DefaultErrors;

export const updateRelay: API.OperationMethod<
  UpdateRelayRequest,
  UpdateRelayResponse,
  UpdateRelayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRelayRequest,
  output: UpdateRelayResponse,
  errors: [],
}));

export interface DeleteRelayRequest {
  relayId: string;
  /** Cloudflare account identifier. */
  accountId: string;
}

export const DeleteRelayRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      relayId: Schema.String.pipe(T.HttpPath("relayId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/moq/relays/{relayId}",
      }),
    ),
) as unknown as Schema.Codec<DeleteRelayRequest>;

export type DeleteRelayResponse = unknown;

export const DeleteRelayResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteRelayResponse>;

export type DeleteRelayError = DefaultErrors;

export const deleteRelay: API.OperationMethod<
  DeleteRelayRequest,
  DeleteRelayResponse,
  DeleteRelayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRelayRequest,
  output: DeleteRelayResponse,
  errors: [],
}));

// =============================================================================
// RelayToken
// =============================================================================

export interface RotateRelayTokenRequest {
  relayId: string;
  /** Path param: Cloudflare account identifier. */
  accountId: string;
  /** Body param: Which token type to rotate. */
  type: "publish_subscribe" | "subscribe" | (string & {});
}

export const RotateRelayTokenRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      relayId: Schema.String.pipe(T.HttpPath("relayId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      type: Schema.Union([
        Schema.Literals(["publish_subscribe", "subscribe"]),
        Schema.String,
      ]),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/moq/relays/{relayId}/tokens/rotate",
      }),
    ),
  ) as unknown as Schema.Codec<RotateRelayTokenRequest>;

export interface RotateRelayTokenResponse {
  /** New token value (shown once). Treat as sensitive. */
  token: string;
  type: "publish_subscribe" | "subscribe" | (string & {});
}

export const RotateRelayTokenResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      token: Schema.String,
      type: Schema.Union([
        Schema.Literals(["publish_subscribe", "subscribe"]),
        Schema.String,
      ]),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<RotateRelayTokenResponse>;

export type RotateRelayTokenError = DefaultErrors;

export const rotateRelayToken: API.OperationMethod<
  RotateRelayTokenRequest,
  RotateRelayTokenResponse,
  RotateRelayTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RotateRelayTokenRequest,
  output: RotateRelayTokenResponse,
  errors: [],
}));
