/**
 * Cloudflare DURABLE-OBJECTS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service durable-objects
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

export class InvalidIdentifier extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidIdentifier>()("InvalidIdentifier", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7003 }],
) {}

export class MalformedParameter extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MalformedParameter>()("MalformedParameter", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10077 }],
) {}

export class NamespaceNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NamespaceNotFound>()("NamespaceNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10066 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface ListNamespacesResponseResult {
  id?: string | null;
  class?: string | null;
  name?: string | null;
  script?: string | null;
  useSqlite?: boolean | null;
}
const ListNamespacesResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      class: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      script: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      useSqlite: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        class: "class",
        name: "name",
        script: "script",
        useSqlite: "use_sqlite",
      }),
    ),
) as unknown as Schema.Codec<ListNamespacesResponseResult>;

interface ListNamespacesResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListNamespacesResponseResultInfo =
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
  ) as unknown as Schema.Codec<ListNamespacesResponseResultInfo>;

interface ListNamespaceObjectsResponseResult {
  /** ID of the Durable Object. */
  id?: string | null;
  /** Whether the Durable Object has stored data. */
  hasStoredData?: boolean | null;
}
const ListNamespaceObjectsResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      hasStoredData: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Codec<ListNamespaceObjectsResponseResult>;

interface ListNamespaceObjectsResponseResultInfoCursors {
  after?: string | null;
}
const ListNamespaceObjectsResponseResultInfoCursors =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      after: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<ListNamespaceObjectsResponseResultInfoCursors>;

interface ListNamespaceObjectsResponseResultInfo {
  cursors?: { after?: string | null } | null;
}
const ListNamespaceObjectsResponseResultInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      cursors: Schema.optional(
        Schema.Union([
          ListNamespaceObjectsResponseResultInfoCursors,
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Codec<ListNamespaceObjectsResponseResultInfo>;

// =============================================================================
// Namespace
// =============================================================================

export interface ListNamespacesRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
}

export const ListNamespacesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/durable_objects/namespaces",
      }),
    ),
) as unknown as Schema.Codec<ListNamespacesRequest>;

export interface ListNamespacesResponse {
  result: {
    id?: string | null;
    class?: string | null;
    name?: string | null;
    script?: string | null;
    useSqlite?: boolean | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListNamespacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListNamespacesResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListNamespacesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListNamespacesResponse>;

export type ListNamespacesError = DefaultErrors | InvalidIdentifier;

export const listNamespaces: API.PaginatedOperationMethod<
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNamespacesRequest,
  output: ListNamespacesResponse,
  errors: [InvalidIdentifier],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

// =============================================================================
// NamespaceObject
// =============================================================================

export interface ListNamespaceObjectsRequest {
  id: string;
  /** Path param: Identifier. */
  accountId: string;
  cursor?: string;
  /** Query param: The number of objects to return. The cursor attribute may be used to iterate over the next batch of objects if there are more than the limit. */
  limit?: number;
}

export const ListNamespaceObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
      limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/durable_objects/namespaces/{id}/objects",
      }),
    ),
  ) as unknown as Schema.Codec<ListNamespaceObjectsRequest>;

export interface ListNamespaceObjectsResponse {
  result: { id?: string | null; hasStoredData?: boolean | null }[];
  resultInfo?: { cursors?: { after?: string | null } | null } | null;
}

export const ListNamespaceObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListNamespaceObjectsResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListNamespaceObjectsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListNamespaceObjectsResponse>;

export type ListNamespaceObjectsError =
  | DefaultErrors
  | NamespaceNotFound
  | InvalidIdentifier
  | MalformedParameter;

export const listNamespaceObjects: API.PaginatedOperationMethod<
  ListNamespaceObjectsRequest,
  ListNamespaceObjectsResponse,
  ListNamespaceObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNamespaceObjectsRequest,
  output: ListNamespaceObjectsResponse,
  errors: [NamespaceNotFound, InvalidIdentifier, MalformedParameter],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursors.after",
    items: "result",
  } as const,
}));
