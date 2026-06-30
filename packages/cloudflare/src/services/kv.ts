/**
 * Cloudflare KV API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service kv
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { UploadableSchema } from "../schemas.ts";

// =============================================================================
// Errors
// =============================================================================

export class InvalidExpirationTtl extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidExpirationTtl>()("InvalidExpirationTtl", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10034 }],
) {}

export class InvalidObjectIdentifier extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidObjectIdentifier>()(
    "InvalidObjectIdentifier",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 7003 }],
) {}

export class InvalidRequestBody extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidRequestBody>()("InvalidRequestBody", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10012 }],
) {}

export class KeyNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<KeyNotFound>()("KeyNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10009 }],
) {}

export class MethodNotAllowed extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MethodNotAllowed>()("MethodNotAllowed", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [
    { code: 10405, message: { includes: "not allowed" } },
    { code: 10000, message: { includes: "not allowed" } },
  ],
) {}

export class MinimumKeysRequired extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MinimumKeysRequired>()("MinimumKeysRequired", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10029 }],
) {}

export class NamespaceNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NamespaceNotFound>()("NamespaceNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10013 }],
) {}

export class NamespaceTitleAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NamespaceTitleAlreadyExists>()(
    "NamespaceTitleAlreadyExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 10014 }],
) {}

export class TitleRequired extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TitleRequired>()("TitleRequired", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10019 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface ListNamespacesResponseResult {
  /** Namespace identifier tag. */
  id: string;
  /** A human-readable string name for a Namespace. */
  title: string;
  /** True if keys written on the URL will be URL-decoded before storing. For example, if set to "true", a key written on the URL as "%3F" will be stored as "?". */
  supportsUrlEncoding?: boolean | null;
}
const ListNamespacesResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      title: Schema.String,
      supportsUrlEncoding: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        title: "title",
        supportsUrlEncoding: "supports_url_encoding",
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

interface WorkersKVBulkGetResult {
  /** Requested keys are paired with their values in an object. */
  values?: Record<string, unknown> | null;
}
const WorkersKVBulkGetResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    values: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<WorkersKVBulkGetResult>;

interface ListNamespaceKeysResponseResult {
  /** A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid. Use percent-encoding to define key names as part of a URL. */
  name: string;
  /** The time, measured in number of seconds since the UNIX epoch, at which the key will expire. This property is omitted for keys that will not expire. */
  expiration?: number | null;
  /** Arbitrary JSON that is associated with a key. */
  metadata?: unknown | null;
}
const ListNamespaceKeysResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
      expiration: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      metadata: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<ListNamespaceKeysResponseResult>;

interface ListNamespaceKeysResponseResultInfo {
  count?: number | null;
  cursor?: string | null;
  perPage?: number | null;
}
const ListNamespaceKeysResponseResultInfo =
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
  ) as unknown as Schema.Codec<ListNamespaceKeysResponseResultInfo>;

interface Body {
  /** A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid. */
  key: string;
  /** A UTF-8 encoded string to be stored, up to 25 MiB in length. */
  value: string;
  /** Indicates whether or not the server should base64 decode the value before storing it. Useful for writing values that wouldn't otherwise be valid JSON strings, such as images. */
  base64?: boolean | null;
  /** Expires the key at a certain time, measured in number of seconds since the UNIX epoch. */
  expiration?: number | null;
  /** Expires the key after a number of seconds. Must be at least 60. */
  expirationTtl?: number | null;
  /** Arbitrary JSON that is associated with a key. */
  metadata?: unknown | null;
}
const Body = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    key: Schema.String,
    value: Schema.String,
    base64: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    expiration: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    expirationTtl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    metadata: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      key: "key",
      value: "value",
      base64: "base64",
      expiration: "expiration",
      expirationTtl: "expiration_ttl",
      metadata: "metadata",
    }),
  ),
) as unknown as Schema.Codec<Body>;

// =============================================================================
// Namespace
// =============================================================================

export interface GetNamespaceRequest {
  namespaceId: string;
  /** Identifier. */
  accountId: string;
}

export const GetNamespaceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      namespaceId: Schema.String.pipe(T.HttpPath("namespaceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/storage/kv/namespaces/{namespaceId}",
      }),
    ),
) as unknown as Schema.Codec<GetNamespaceRequest>;

export interface GetNamespaceResponse {
  /** Namespace identifier tag. */
  id: string;
  /** A human-readable string name for a Namespace. */
  title: string;
  /** True if keys written on the URL will be URL-decoded before storing. For example, if set to "true", a key written on the URL as "%3F" will be stored as "?". */
  supportsUrlEncoding?: boolean | null;
}

export const GetNamespaceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      title: Schema.String,
      supportsUrlEncoding: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          title: "title",
          supportsUrlEncoding: "supports_url_encoding",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetNamespaceResponse>;

export type GetNamespaceError =
  | DefaultErrors
  | NamespaceNotFound
  | InvalidObjectIdentifier;

export const getNamespace: API.OperationMethod<
  GetNamespaceRequest,
  GetNamespaceResponse,
  GetNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNamespaceRequest,
  output: GetNamespaceResponse,
  errors: [NamespaceNotFound, InvalidObjectIdentifier],
}));

export interface ListNamespacesRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Direction to order namespaces. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Field to order results by. */
  order?: "id" | "title" | (string & {});
}

export const ListNamespacesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      order: Schema.optional(
        Schema.Union([Schema.Literals(["id", "title"]), Schema.String]),
      ).pipe(T.HttpQuery("order")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/storage/kv/namespaces",
      }),
    ),
) as unknown as Schema.Codec<ListNamespacesRequest>;

export interface ListNamespacesResponse {
  result: { id: string; title: string; supportsUrlEncoding?: boolean | null }[];
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

export type ListNamespacesError = DefaultErrors;

export const listNamespaces: API.PaginatedOperationMethod<
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNamespacesRequest,
  output: ListNamespacesResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateNamespaceRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: A human-readable string name for a Namespace. */
  title: string;
}

export const CreateNamespaceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      title: Schema.String,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/storage/kv/namespaces",
      }),
    ),
  ) as unknown as Schema.Codec<CreateNamespaceRequest>;

export interface CreateNamespaceResponse {
  /** Namespace identifier tag. */
  id: string;
  /** A human-readable string name for a Namespace. */
  title: string;
  /** True if keys written on the URL will be URL-decoded before storing. For example, if set to "true", a key written on the URL as "%3F" will be stored as "?". */
  supportsUrlEncoding?: boolean | null;
}

export const CreateNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      title: Schema.String,
      supportsUrlEncoding: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          title: "title",
          supportsUrlEncoding: "supports_url_encoding",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateNamespaceResponse>;

export type CreateNamespaceError =
  | DefaultErrors
  | TitleRequired
  | InvalidObjectIdentifier
  | NamespaceTitleAlreadyExists;

export const createNamespace: API.OperationMethod<
  CreateNamespaceRequest,
  CreateNamespaceResponse,
  CreateNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNamespaceRequest,
  output: CreateNamespaceResponse,
  errors: [TitleRequired, InvalidObjectIdentifier, NamespaceTitleAlreadyExists],
}));

export interface UpdateNamespaceRequest {
  namespaceId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: A human-readable string name for a Namespace. */
  title: string;
}

export const UpdateNamespaceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      namespaceId: Schema.String.pipe(T.HttpPath("namespaceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      title: Schema.String,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/storage/kv/namespaces/{namespaceId}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateNamespaceRequest>;

export interface UpdateNamespaceResponse {
  /** Namespace identifier tag. */
  id: string;
  /** A human-readable string name for a Namespace. */
  title: string;
  /** True if keys written on the URL will be URL-decoded before storing. For example, if set to "true", a key written on the URL as "%3F" will be stored as "?". */
  supportsUrlEncoding?: boolean | null;
}

export const UpdateNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      title: Schema.String,
      supportsUrlEncoding: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          title: "title",
          supportsUrlEncoding: "supports_url_encoding",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateNamespaceResponse>;

export type UpdateNamespaceError =
  | DefaultErrors
  | NamespaceNotFound
  | TitleRequired
  | InvalidObjectIdentifier
  | NamespaceTitleAlreadyExists;

export const updateNamespace: API.OperationMethod<
  UpdateNamespaceRequest,
  UpdateNamespaceResponse,
  UpdateNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateNamespaceRequest,
  output: UpdateNamespaceResponse,
  errors: [
    NamespaceNotFound,
    TitleRequired,
    InvalidObjectIdentifier,
    NamespaceTitleAlreadyExists,
  ],
}));

export interface DeleteNamespaceRequest {
  namespaceId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteNamespaceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      namespaceId: Schema.String.pipe(T.HttpPath("namespaceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/storage/kv/namespaces/{namespaceId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteNamespaceRequest>;

export interface DeleteNamespaceResponse {}

export const DeleteNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({}).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteNamespaceResponse>;

export type DeleteNamespaceError =
  | DefaultErrors
  | MethodNotAllowed
  | NamespaceNotFound
  | InvalidObjectIdentifier;

export const deleteNamespace: API.OperationMethod<
  DeleteNamespaceRequest,
  DeleteNamespaceResponse,
  DeleteNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNamespaceRequest,
  output: DeleteNamespaceResponse,
  errors: [MethodNotAllowed, NamespaceNotFound, InvalidObjectIdentifier],
}));

export interface BulkGetNamespacesRequest {
  namespaceId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Array of keys to retrieve (maximum of 100). */
  keys: string[];
  /** Body param: Whether to parse JSON values in the response. */
  type?: "text" | "json" | (string & {});
  /** Body param: Whether to include metadata in the response. */
  withMetadata?: boolean;
}

export const BulkGetNamespacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      namespaceId: Schema.String.pipe(T.HttpPath("namespaceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      keys: Schema.Array(Schema.String),
      type: Schema.optional(
        Schema.Union([Schema.Literals(["text", "json"]), Schema.String]),
      ),
      withMetadata: Schema.optional(Schema.Boolean),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/storage/kv/namespaces/{namespaceId}/bulk/get",
      }),
    ),
  ) as unknown as Schema.Codec<BulkGetNamespacesRequest>;

export type BulkGetNamespacesResponse = {
  values?: Record<string, unknown> | null;
};

export const BulkGetNamespacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    WorkersKVBulkGetResult.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<BulkGetNamespacesResponse>;

export type BulkGetNamespacesError =
  | DefaultErrors
  | InvalidRequestBody
  | MinimumKeysRequired
  | NamespaceNotFound
  | InvalidObjectIdentifier;

export const bulkGetNamespaces: API.OperationMethod<
  BulkGetNamespacesRequest,
  BulkGetNamespacesResponse,
  BulkGetNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkGetNamespacesRequest,
  output: BulkGetNamespacesResponse,
  errors: [
    InvalidRequestBody,
    MinimumKeysRequired,
    NamespaceNotFound,
    InvalidObjectIdentifier,
  ],
}));

export interface BulkDeleteNamespacesRequest {
  namespaceId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  body: string[];
}

export const BulkDeleteNamespacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      namespaceId: Schema.String.pipe(T.HttpPath("namespaceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.Array(Schema.String).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/storage/kv/namespaces/{namespaceId}/bulk/delete",
      }),
    ),
  ) as unknown as Schema.Codec<BulkDeleteNamespacesRequest>;

export interface BulkDeleteNamespacesResponse {
  /** Number of keys successfully updated. */
  successfulKeyCount?: number | null;
  /** Name of the keys that failed to be fully updated. They should be retried. */
  unsuccessfulKeys?: string[] | null;
}

export const BulkDeleteNamespacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      successfulKeyCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      unsuccessfulKeys: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          successfulKeyCount: "successful_key_count",
          unsuccessfulKeys: "unsuccessful_keys",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<BulkDeleteNamespacesResponse>;

export type BulkDeleteNamespacesError =
  | DefaultErrors
  | NamespaceNotFound
  | InvalidRequestBody
  | InvalidObjectIdentifier;

export const bulkDeleteNamespaces: API.OperationMethod<
  BulkDeleteNamespacesRequest,
  BulkDeleteNamespacesResponse,
  BulkDeleteNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkDeleteNamespacesRequest,
  output: BulkDeleteNamespacesResponse,
  errors: [NamespaceNotFound, InvalidRequestBody, InvalidObjectIdentifier],
}));

// =============================================================================
// NamespaceKey
// =============================================================================

export interface ListNamespaceKeysRequest {
  namespaceId: string;
  /** Path param: Identifier. */
  accountId: string;
  limit?: number;
  cursor?: string;
  /** Query param: Filters returned keys by a name prefix. Exact matches and any key names that begin with the prefix will be returned. */
  prefix?: string;
}

export const ListNamespaceKeysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      namespaceId: Schema.String.pipe(T.HttpPath("namespaceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
      cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
      prefix: Schema.optional(Schema.String).pipe(T.HttpQuery("prefix")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/storage/kv/namespaces/{namespaceId}/keys",
      }),
    ),
  ) as unknown as Schema.Codec<ListNamespaceKeysRequest>;

export interface ListNamespaceKeysResponse {
  result: {
    name: string;
    expiration?: number | null;
    metadata?: unknown | null;
  }[];
  resultInfo?: {
    count?: number | null;
    cursor?: string | null;
    perPage?: number | null;
  } | null;
}

export const ListNamespaceKeysResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListNamespaceKeysResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListNamespaceKeysResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListNamespaceKeysResponse>;

export type ListNamespaceKeysError = DefaultErrors;

export const listNamespaceKeys: API.PaginatedOperationMethod<
  ListNamespaceKeysRequest,
  ListNamespaceKeysResponse,
  ListNamespaceKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNamespaceKeysRequest,
  output: ListNamespaceKeysResponse,
  errors: [],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursor",
    items: "result",
    pageSize: "limit",
  } as const,
}));

export interface BulkGetNamespaceKeysRequest {
  namespaceId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Array of keys to retrieve (maximum of 100). */
  keys: string[];
  /** Body param: Whether to parse JSON values in the response. */
  type?: "text" | "json" | (string & {});
  /** Body param: Whether to include metadata in the response. */
  withMetadata?: boolean;
}

export const BulkGetNamespaceKeysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      namespaceId: Schema.String.pipe(T.HttpPath("namespaceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      keys: Schema.Array(Schema.String),
      type: Schema.optional(
        Schema.Union([Schema.Literals(["text", "json"]), Schema.String]),
      ),
      withMetadata: Schema.optional(Schema.Boolean),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/storage/kv/namespaces/{namespaceId}/bulk/get",
      }),
    ),
  ) as unknown as Schema.Codec<BulkGetNamespaceKeysRequest>;

export type BulkGetNamespaceKeysResponse = {
  values?: Record<string, unknown> | null;
};

export const BulkGetNamespaceKeysResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    WorkersKVBulkGetResult.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<BulkGetNamespaceKeysResponse>;

export type BulkGetNamespaceKeysError =
  | DefaultErrors
  | InvalidRequestBody
  | NamespaceNotFound
  | InvalidObjectIdentifier;

export const bulkGetNamespaceKeys: API.OperationMethod<
  BulkGetNamespaceKeysRequest,
  BulkGetNamespaceKeysResponse,
  BulkGetNamespaceKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkGetNamespaceKeysRequest,
  output: BulkGetNamespaceKeysResponse,
  errors: [InvalidRequestBody, NamespaceNotFound, InvalidObjectIdentifier],
}));

export interface BulkDeleteNamespaceKeysRequest {
  namespaceId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  body: string[];
}

export const BulkDeleteNamespaceKeysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      namespaceId: Schema.String.pipe(T.HttpPath("namespaceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.Array(Schema.String).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/storage/kv/namespaces/{namespaceId}/bulk/delete",
      }),
    ),
  ) as unknown as Schema.Codec<BulkDeleteNamespaceKeysRequest>;

export interface BulkDeleteNamespaceKeysResponse {
  /** Number of keys successfully updated. */
  successfulKeyCount?: number | null;
  /** Name of the keys that failed to be fully updated. They should be retried. */
  unsuccessfulKeys?: string[] | null;
}

export const BulkDeleteNamespaceKeysResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      successfulKeyCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      unsuccessfulKeys: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          successfulKeyCount: "successful_key_count",
          unsuccessfulKeys: "unsuccessful_keys",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<BulkDeleteNamespaceKeysResponse>;

export type BulkDeleteNamespaceKeysError =
  | DefaultErrors
  | NamespaceNotFound
  | InvalidRequestBody
  | InvalidObjectIdentifier;

export const bulkDeleteNamespaceKeys: API.OperationMethod<
  BulkDeleteNamespaceKeysRequest,
  BulkDeleteNamespaceKeysResponse,
  BulkDeleteNamespaceKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkDeleteNamespaceKeysRequest,
  output: BulkDeleteNamespaceKeysResponse,
  errors: [NamespaceNotFound, InvalidRequestBody, InvalidObjectIdentifier],
}));

// =============================================================================
// NamespaceMetadata
// =============================================================================

export interface GetNamespaceMetadataRequest {
  namespaceId: string;
  keyName: string;
  /** Identifier. */
  accountId: string;
}

export const GetNamespaceMetadataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      namespaceId: Schema.String.pipe(T.HttpPath("namespaceId")),
      keyName: Schema.String.pipe(T.HttpPath("keyName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/storage/kv/namespaces/{namespaceId}/metadata/{keyName}",
      }),
    ),
  ) as unknown as Schema.Codec<GetNamespaceMetadataRequest>;

export type GetNamespaceMetadataResponse = unknown;

export const GetNamespaceMetadataResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetNamespaceMetadataResponse>;

export type GetNamespaceMetadataError =
  | DefaultErrors
  | KeyNotFound
  | NamespaceNotFound
  | InvalidObjectIdentifier;

export const getNamespaceMetadata: API.OperationMethod<
  GetNamespaceMetadataRequest,
  GetNamespaceMetadataResponse,
  GetNamespaceMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNamespaceMetadataRequest,
  output: GetNamespaceMetadataResponse,
  errors: [KeyNotFound, NamespaceNotFound, InvalidObjectIdentifier],
}));

// =============================================================================
// NamespaceValue
// =============================================================================

export interface GetNamespaceValueRequest {
  namespaceId: string;
  keyName: string;
  /** Identifier. */
  accountId: string;
}

export const GetNamespaceValueRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      namespaceId: Schema.String.pipe(T.HttpPath("namespaceId")),
      keyName: Schema.String.pipe(T.HttpPath("keyName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/storage/kv/namespaces/{namespaceId}/values/{keyName}",
      }),
    ),
  ) as unknown as Schema.Codec<GetNamespaceValueRequest>;

export type GetNamespaceValueResponse = unknown;

export const GetNamespaceValueResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
    () => Schema.Unknown,
  ) as unknown as Schema.Codec<GetNamespaceValueResponse>;

export type GetNamespaceValueError =
  | DefaultErrors
  | KeyNotFound
  | NamespaceNotFound
  | InvalidObjectIdentifier;

export const getNamespaceValue: API.OperationMethod<
  GetNamespaceValueRequest,
  GetNamespaceValueResponse,
  GetNamespaceValueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNamespaceValueRequest,
  output: GetNamespaceValueResponse,
  errors: [KeyNotFound, NamespaceNotFound, InvalidObjectIdentifier],
}));

export interface PutNamespaceValueRequest {
  namespaceId: string;
  keyName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: Expires the key at a certain time, measured in number of seconds since the UNIX epoch. */
  expiration?: number;
  /** Query param: Expires the key after a number of seconds. Must be at least 60. */
  expirationTtl?: number;
  /** Body param: A byte sequence to be stored, up to 25 MiB in length. */
  value: string | File | Blob;
  /** Body param: Associates arbitrary JSON data with a key/value pair. */
  metadata?: unknown;
}

export const PutNamespaceValueRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      namespaceId: Schema.String.pipe(T.HttpPath("namespaceId")),
      keyName: Schema.String.pipe(T.HttpPath("keyName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      expiration: Schema.optional(Schema.Number).pipe(
        T.HttpQuery("expiration"),
      ),
      expirationTtl: Schema.optional(Schema.Number).pipe(
        T.HttpQuery("expiration_ttl"),
      ),
      value: Schema.Union([
        Schema.String,
        UploadableSchema.pipe(T.HttpFormDataFile()),
      ]),
      metadata: Schema.optional(Schema.Unknown),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/storage/kv/namespaces/{namespaceId}/values/{keyName}",
        contentType: "multipart",
      }),
    ),
  ) as unknown as Schema.Codec<PutNamespaceValueRequest>;

export interface PutNamespaceValueResponse {}

export const PutNamespaceValueResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({}).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutNamespaceValueResponse>;

export type PutNamespaceValueError =
  | DefaultErrors
  | NamespaceNotFound
  | InvalidObjectIdentifier
  | InvalidExpirationTtl;

export const putNamespaceValue: API.OperationMethod<
  PutNamespaceValueRequest,
  PutNamespaceValueResponse,
  PutNamespaceValueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutNamespaceValueRequest,
  output: PutNamespaceValueResponse,
  errors: [NamespaceNotFound, InvalidObjectIdentifier, InvalidExpirationTtl],
}));

export interface DeleteNamespaceValueRequest {
  namespaceId: string;
  keyName: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteNamespaceValueRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      namespaceId: Schema.String.pipe(T.HttpPath("namespaceId")),
      keyName: Schema.String.pipe(T.HttpPath("keyName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/storage/kv/namespaces/{namespaceId}/values/{keyName}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteNamespaceValueRequest>;

export interface DeleteNamespaceValueResponse {}

export const DeleteNamespaceValueResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({}).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteNamespaceValueResponse>;

export type DeleteNamespaceValueError =
  | DefaultErrors
  | NamespaceNotFound
  | InvalidObjectIdentifier;

export const deleteNamespaceValue: API.OperationMethod<
  DeleteNamespaceValueRequest,
  DeleteNamespaceValueResponse,
  DeleteNamespaceValueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNamespaceValueRequest,
  output: DeleteNamespaceValueResponse,
  errors: [NamespaceNotFound, InvalidObjectIdentifier],
}));

// =============================================================================
// PutNamespace
// =============================================================================

export interface BulkPutNamespacesRequest {
  namespaceId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  body: {
    key: string;
    value: string;
    base64?: boolean;
    expiration?: number;
    expirationTtl?: number;
    metadata?: unknown;
  }[];
}

export const BulkPutNamespacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      namespaceId: Schema.String.pipe(T.HttpPath("namespaceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.Array(Body).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/storage/kv/namespaces/{namespaceId}/bulk",
      }),
    ),
  ) as unknown as Schema.Codec<BulkPutNamespacesRequest>;

export interface BulkPutNamespacesResponse {
  /** Number of keys successfully updated. */
  successfulKeyCount?: number | null;
  /** Name of the keys that failed to be fully updated. They should be retried. */
  unsuccessfulKeys?: string[] | null;
}

export const BulkPutNamespacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      successfulKeyCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      unsuccessfulKeys: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          successfulKeyCount: "successful_key_count",
          unsuccessfulKeys: "unsuccessful_keys",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<BulkPutNamespacesResponse>;

export type BulkPutNamespacesError =
  | DefaultErrors
  | InvalidRequestBody
  | NamespaceNotFound
  | InvalidObjectIdentifier;

export const bulkPutNamespaces: API.OperationMethod<
  BulkPutNamespacesRequest,
  BulkPutNamespacesResponse,
  BulkPutNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkPutNamespacesRequest,
  output: BulkPutNamespacesResponse,
  errors: [InvalidRequestBody, NamespaceNotFound, InvalidObjectIdentifier],
}));

// =============================================================================
// PutNamespaceKey
// =============================================================================

export interface BulkPutNamespaceKeysRequest {
  namespaceId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  body: {
    key: string;
    value: string;
    base64?: boolean;
    expiration?: number;
    expirationTtl?: number;
    metadata?: unknown;
  }[];
}

export const BulkPutNamespaceKeysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      namespaceId: Schema.String.pipe(T.HttpPath("namespaceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.Array(Body).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/storage/kv/namespaces/{namespaceId}/bulk",
      }),
    ),
  ) as unknown as Schema.Codec<BulkPutNamespaceKeysRequest>;

export interface BulkPutNamespaceKeysResponse {
  /** Number of keys successfully updated. */
  successfulKeyCount?: number | null;
  /** Name of the keys that failed to be fully updated. They should be retried. */
  unsuccessfulKeys?: string[] | null;
}

export const BulkPutNamespaceKeysResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      successfulKeyCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      unsuccessfulKeys: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          successfulKeyCount: "successful_key_count",
          unsuccessfulKeys: "unsuccessful_keys",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<BulkPutNamespaceKeysResponse>;

export type BulkPutNamespaceKeysError =
  | DefaultErrors
  | InvalidRequestBody
  | NamespaceNotFound
  | InvalidObjectIdentifier;

export const bulkPutNamespaceKeys: API.OperationMethod<
  BulkPutNamespaceKeysRequest,
  BulkPutNamespaceKeysResponse,
  BulkPutNamespaceKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkPutNamespaceKeysRequest,
  output: BulkPutNamespaceKeysResponse,
  errors: [InvalidRequestBody, NamespaceNotFound, InvalidObjectIdentifier],
}));
