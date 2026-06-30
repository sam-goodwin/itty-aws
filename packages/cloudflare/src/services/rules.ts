/**
 * Cloudflare RULES API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service rules
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

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class ListAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ListAlreadyExists>()("ListAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10021 }],
) {}

export class ListNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ListNotFound>()("ListNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10001 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface ListListsResponseResult {
  /** The unique ID of the list. */
  id: string;
  /** The RFC 3339 timestamp of when the list was created. */
  createdOn: string;
  /** The type of the list. Each type supports specific list items (IP addresses, ASNs, hostnames or redirects). */
  kind: "ip" | "redirect" | "hostname" | "asn" | (string & {});
  /** The RFC 3339 timestamp of when the list was last modified. */
  modifiedOn: string;
  /** An informative name for the list. Use this name in filter and rule expressions. */
  name: string;
  /** The number of items in the list. */
  numItems: number;
  /** The number of [filters](/api/resources/filters/) referencing the list. */
  numReferencingFilters: number;
  /** An informative summary of the list. */
  description?: string | null;
}
const ListListsResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdOn: Schema.String,
    kind: Schema.Union([
      Schema.Literals(["ip", "redirect", "hostname", "asn"]),
      Schema.String,
    ]),
    modifiedOn: Schema.String,
    name: Schema.String,
    numItems: Schema.Number,
    numReferencingFilters: Schema.Number,
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdOn: "created_on",
      kind: "kind",
      modifiedOn: "modified_on",
      name: "name",
      numItems: "num_items",
      numReferencingFilters: "num_referencing_filters",
      description: "description",
    }),
  ),
) as unknown as Schema.Codec<ListListsResponseResult>;

interface ListsBulkOperationPendingOrRunning {
  /** The unique operation ID of the asynchronous action. */
  id: string;
  /** The current status of the asynchronous operation. */
  status: "pending" | "running" | (string & {});
}
const ListsBulkOperationPendingOrRunning =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      status: Schema.Union([
        Schema.Literals(["pending", "running"]),
        Schema.String,
      ]),
    }),
  ) as unknown as Schema.Codec<ListsBulkOperationPendingOrRunning>;

interface ListsBulkOperationCompleted {
  /** The unique operation ID of the asynchronous action. */
  id: string;
  /** The RFC 3339 timestamp of when the operation was completed. */
  completed: string;
  /** The current status of the asynchronous operation. */
  status: "completed";
}
const ListsBulkOperationCompleted = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      completed: Schema.String,
      status: Schema.Literal("completed"),
    }),
) as unknown as Schema.Codec<ListsBulkOperationCompleted>;

interface ListsBulkOperationFailed {
  /** The unique operation ID of the asynchronous action. */
  id: string;
  /** The RFC 3339 timestamp of when the operation was completed. */
  completed: string;
  /** A message describing the error when the status is `failed`. */
  error: string;
  /** The current status of the asynchronous operation. */
  status: "failed";
}
const ListsBulkOperationFailed = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      completed: Schema.String,
      error: Schema.String,
      status: Schema.Literal("failed"),
    }),
) as unknown as Schema.Codec<ListsBulkOperationFailed>;

interface ListsListItemIPFull {
  /** Defines the unique ID of the item in the List. */
  id: string;
  /** The RFC 3339 timestamp of when the list was created. */
  createdOn: string;
  /** An IPv4 address, an IPv4 CIDR, an IPv6 address, or an IPv6 CIDR. */
  ip: string;
  /** The RFC 3339 timestamp of when the list was last modified. */
  modifiedOn: string;
  /** Defines an informative summary of the list item. */
  comment?: string | null;
}
const ListsListItemIPFull = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdOn: Schema.String,
    ip: Schema.String,
    modifiedOn: Schema.String,
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdOn: "created_on",
      ip: "ip",
      modifiedOn: "modified_on",
      comment: "comment",
    }),
  ),
) as unknown as Schema.Codec<ListsListItemIPFull>;

interface Hostname {
  urlHostname: string;
  /** Only applies to wildcard hostnames (e.g., \ .example.com). When true (default), only subdomains are blocked. When false, both the root domain and subdomains are blocked. */
  excludeExactHostname?: boolean | null;
}
const Hostname = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    urlHostname: Schema.String,
    excludeExactHostname: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      urlHostname: "url_hostname",
      excludeExactHostname: "exclude_exact_hostname",
    }),
  ),
) as unknown as Schema.Codec<Hostname>;

interface ListsListItemHostnameFull {
  /** Defines the unique ID of the item in the List. */
  id: string;
  /** The RFC 3339 timestamp of when the list was created. */
  createdOn: string;
  /** Valid characters for hostnames are ASCII(7) letters from a to z, the digits from 0 to 9, wildcards (\ ), and the hyphen (-). */
  hostname: { urlHostname: string; excludeExactHostname?: boolean | null };
  /** The RFC 3339 timestamp of when the list was last modified. */
  modifiedOn: string;
  /** Defines an informative summary of the list item. */
  comment?: string | null;
}
const ListsListItemHostnameFull = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdOn: Schema.String,
      hostname: Hostname,
      modifiedOn: Schema.String,
      comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        createdOn: "created_on",
        hostname: "hostname",
        modifiedOn: "modified_on",
        comment: "comment",
      }),
    ),
) as unknown as Schema.Codec<ListsListItemHostnameFull>;

interface Redirect {
  sourceUrl: string;
  targetUrl: string;
  includeSubdomains?: boolean | null;
  preservePathSuffix?: boolean | null;
  preserveQueryString?: boolean | null;
  statusCode?: "301" | "302" | "307" | "308" | (string & {}) | null;
  subpathMatching?: boolean | null;
}
const Redirect = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    sourceUrl: Schema.String,
    targetUrl: Schema.String,
    includeSubdomains: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    preservePathSuffix: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    preserveQueryString: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    statusCode: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["301", "302", "307", "308"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    subpathMatching: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      sourceUrl: "source_url",
      targetUrl: "target_url",
      includeSubdomains: "include_subdomains",
      preservePathSuffix: "preserve_path_suffix",
      preserveQueryString: "preserve_query_string",
      statusCode: "status_code",
      subpathMatching: "subpath_matching",
    }),
  ),
) as unknown as Schema.Codec<Redirect>;

interface ListsListItemRedirectFull {
  /** Defines the unique ID of the item in the List. */
  id: string;
  /** The RFC 3339 timestamp of when the list was created. */
  createdOn: string;
  /** The RFC 3339 timestamp of when the list was last modified. */
  modifiedOn: string;
  /** The definition of the redirect. */
  redirect: {
    sourceUrl: string;
    targetUrl: string;
    includeSubdomains?: boolean | null;
    preservePathSuffix?: boolean | null;
    preserveQueryString?: boolean | null;
    statusCode?: "301" | "302" | "307" | "308" | (string & {}) | null;
    subpathMatching?: boolean | null;
  };
  /** Defines an informative summary of the list item. */
  comment?: string | null;
}
const ListsListItemRedirectFull = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdOn: Schema.String,
      modifiedOn: Schema.String,
      redirect: Redirect,
      comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        createdOn: "created_on",
        modifiedOn: "modified_on",
        redirect: "redirect",
        comment: "comment",
      }),
    ),
) as unknown as Schema.Codec<ListsListItemRedirectFull>;

interface ListsListItemASNFull {
  /** Defines the unique ID of the item in the List. */
  id: string;
  /** Defines a non-negative 32 bit integer. */
  asn: number;
  /** The RFC 3339 timestamp of when the list was created. */
  createdOn: string;
  /** The RFC 3339 timestamp of when the list was last modified. */
  modifiedOn: string;
  /** Defines an informative summary of the list item. */
  comment?: string | null;
}
const ListsListItemASNFull = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    asn: Schema.Number,
    createdOn: Schema.String,
    modifiedOn: Schema.String,
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      asn: "asn",
      createdOn: "created_on",
      modifiedOn: "modified_on",
      comment: "comment",
    }),
  ),
) as unknown as Schema.Codec<ListsListItemASNFull>;

interface ListListItemsResponseResultInfoCursors {
  after?: string | null;
}
const ListListItemsResponseResultInfoCursors =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      after: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<ListListItemsResponseResultInfoCursors>;

interface ListListItemsResponseResultInfo {
  cursors?: { after?: string | null } | null;
}
const ListListItemsResponseResultInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      cursors: Schema.optional(
        Schema.Union([ListListItemsResponseResultInfoCursors, Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Codec<ListListItemsResponseResultInfo>;

interface ListsListItemIPComment {
  /** An IPv4 address, an IPv4 CIDR, an IPv6 address, or an IPv6 CIDR. */
  ip: string;
  /** Defines an informative summary of the list item. */
  comment?: string | null;
}
const ListsListItemIPComment = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    ip: Schema.String,
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ListsListItemIPComment>;

interface ListsListItemRedirectComment {
  /** The definition of the redirect. */
  redirect: {
    sourceUrl: string;
    targetUrl: string;
    includeSubdomains?: boolean | null;
    preservePathSuffix?: boolean | null;
    preserveQueryString?: boolean | null;
    statusCode?: "301" | "302" | "307" | "308" | (string & {}) | null;
    subpathMatching?: boolean | null;
  };
  /** Defines an informative summary of the list item. */
  comment?: string | null;
}
const ListsListItemRedirectComment = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      redirect: Redirect,
      comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
) as unknown as Schema.Codec<ListsListItemRedirectComment>;

interface ListsListItemHostnameComment {
  /** Valid characters for hostnames are ASCII(7) letters from a to z, the digits from 0 to 9, wildcards (\ ), and the hyphen (-). */
  hostname: { urlHostname: string; excludeExactHostname?: boolean | null };
  /** Defines an informative summary of the list item. */
  comment?: string | null;
}
const ListsListItemHostnameComment = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      hostname: Hostname,
      comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
) as unknown as Schema.Codec<ListsListItemHostnameComment>;

interface ListsListItemASNComment {
  /** Defines a non-negative 32 bit integer. */
  asn: number;
  /** Defines an informative summary of the list item. */
  comment?: string | null;
}
const ListsListItemASNComment = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    asn: Schema.Number,
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ListsListItemASNComment>;

interface Item {
  /** Defines the unique ID of the item in the List. */
  id: string;
}
const Item = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Item>;

// =============================================================================
// List
// =============================================================================

export interface GetListRequest {
  listId: string;
  /** The Account ID for this resource. */
  accountId: string;
}

export const GetListRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    listId: Schema.String.pipe(T.HttpPath("listId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/rules/lists/{listId}",
    }),
  ),
) as unknown as Schema.Codec<GetListRequest>;

export interface GetListResponse {
  /** The unique ID of the list. */
  id: string;
  /** The RFC 3339 timestamp of when the list was created. */
  createdOn: string;
  /** The type of the list. Each type supports specific list items (IP addresses, ASNs, hostnames or redirects). */
  kind: "ip" | "redirect" | "hostname" | "asn" | (string & {});
  /** The RFC 3339 timestamp of when the list was last modified. */
  modifiedOn: string;
  /** An informative name for the list. Use this name in filter and rule expressions. */
  name: string;
  /** The number of items in the list. */
  numItems: number;
  /** The number of [filters](/api/resources/filters/) referencing the list. */
  numReferencingFilters: number;
  /** An informative summary of the list. */
  description?: string | null;
}

export const GetListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdOn: Schema.String,
    kind: Schema.Union([
      Schema.Literals(["ip", "redirect", "hostname", "asn"]),
      Schema.String,
    ]),
    modifiedOn: Schema.String,
    name: Schema.String,
    numItems: Schema.Number,
    numReferencingFilters: Schema.Number,
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        createdOn: "created_on",
        kind: "kind",
        modifiedOn: "modified_on",
        name: "name",
        numItems: "num_items",
        numReferencingFilters: "num_referencing_filters",
        description: "description",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetListResponse>;

export type GetListError = DefaultErrors | ListNotFound | Forbidden;

export const getList: API.OperationMethod<
  GetListRequest,
  GetListResponse,
  GetListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetListRequest,
  output: GetListResponse,
  errors: [ListNotFound, Forbidden],
}));

export interface ListListsRequest {
  /** The Account ID for this resource. */
  accountId: string;
}

export const ListListsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/rules/lists" }),
  ),
) as unknown as Schema.Codec<ListListsRequest>;

export interface ListListsResponse {
  result: {
    id: string;
    createdOn: string;
    kind: "ip" | "redirect" | "hostname" | "asn" | (string & {});
    modifiedOn: string;
    name: string;
    numItems: number;
    numReferencingFilters: number;
    description?: string | null;
  }[];
}

export const ListListsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListListsResponseResult),
    }),
) as unknown as Schema.Codec<ListListsResponse>;

export type ListListsError = DefaultErrors | Forbidden;

export const listLists: API.PaginatedOperationMethod<
  ListListsRequest,
  ListListsResponse,
  ListListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListListsRequest,
  output: ListListsResponse,
  errors: [Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateListRequest {
  /** Path param: The Account ID for this resource. */
  accountId: string;
  /** Body param: The type of the list. Each type supports specific list items (IP addresses, ASNs, hostnames or redirects). */
  kind: "ip" | "redirect" | "hostname" | "asn" | (string & {});
  /** Body param: An informative name for the list. Use this name in filter and rule expressions. */
  name: string;
  /** Body param: An informative summary of the list. */
  description?: string;
}

export const CreateListRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      kind: Schema.Union([
        Schema.Literals(["ip", "redirect", "hostname", "asn"]),
        Schema.String,
      ]),
      name: Schema.String,
      description: Schema.optional(Schema.String),
    }).pipe(
      T.Http({ method: "POST", path: "/accounts/{account_id}/rules/lists" }),
    ),
) as unknown as Schema.Codec<CreateListRequest>;

export interface CreateListResponse {
  /** The unique ID of the list. */
  id: string;
  /** The RFC 3339 timestamp of when the list was created. */
  createdOn: string;
  /** The type of the list. Each type supports specific list items (IP addresses, ASNs, hostnames or redirects). */
  kind: "ip" | "redirect" | "hostname" | "asn" | (string & {});
  /** The RFC 3339 timestamp of when the list was last modified. */
  modifiedOn: string;
  /** An informative name for the list. Use this name in filter and rule expressions. */
  name: string;
  /** The number of items in the list. */
  numItems: number;
  /** The number of [filters](/api/resources/filters/) referencing the list. */
  numReferencingFilters: number;
  /** An informative summary of the list. */
  description?: string | null;
}

export const CreateListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdOn: Schema.String,
      kind: Schema.Union([
        Schema.Literals(["ip", "redirect", "hostname", "asn"]),
        Schema.String,
      ]),
      modifiedOn: Schema.String,
      name: Schema.String,
      numItems: Schema.Number,
      numReferencingFilters: Schema.Number,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdOn: "created_on",
          kind: "kind",
          modifiedOn: "modified_on",
          name: "name",
          numItems: "num_items",
          numReferencingFilters: "num_referencing_filters",
          description: "description",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateListResponse>;

export type CreateListError = DefaultErrors | ListAlreadyExists | Forbidden;

export const createList: API.OperationMethod<
  CreateListRequest,
  CreateListResponse,
  CreateListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateListRequest,
  output: CreateListResponse,
  errors: [ListAlreadyExists, Forbidden],
}));

export interface UpdateListRequest {
  listId: string;
  /** Path param: The Account ID for this resource. */
  accountId: string;
  /** Body param: An informative summary of the list. */
  description?: string;
}

export const UpdateListRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      listId: Schema.String.pipe(T.HttpPath("listId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      description: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/rules/lists/{listId}",
      }),
    ),
) as unknown as Schema.Codec<UpdateListRequest>;

export interface UpdateListResponse {
  /** The unique ID of the list. */
  id: string;
  /** The RFC 3339 timestamp of when the list was created. */
  createdOn: string;
  /** The type of the list. Each type supports specific list items (IP addresses, ASNs, hostnames or redirects). */
  kind: "ip" | "redirect" | "hostname" | "asn" | (string & {});
  /** The RFC 3339 timestamp of when the list was last modified. */
  modifiedOn: string;
  /** An informative name for the list. Use this name in filter and rule expressions. */
  name: string;
  /** The number of items in the list. */
  numItems: number;
  /** The number of [filters](/api/resources/filters/) referencing the list. */
  numReferencingFilters: number;
  /** An informative summary of the list. */
  description?: string | null;
}

export const UpdateListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdOn: Schema.String,
      kind: Schema.Union([
        Schema.Literals(["ip", "redirect", "hostname", "asn"]),
        Schema.String,
      ]),
      modifiedOn: Schema.String,
      name: Schema.String,
      numItems: Schema.Number,
      numReferencingFilters: Schema.Number,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdOn: "created_on",
          kind: "kind",
          modifiedOn: "modified_on",
          name: "name",
          numItems: "num_items",
          numReferencingFilters: "num_referencing_filters",
          description: "description",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdateListResponse>;

export type UpdateListError = DefaultErrors | ListNotFound | Forbidden;

export const updateList: API.OperationMethod<
  UpdateListRequest,
  UpdateListResponse,
  UpdateListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateListRequest,
  output: UpdateListResponse,
  errors: [ListNotFound, Forbidden],
}));

export interface DeleteListRequest {
  listId: string;
  /** The Account ID for this resource. */
  accountId: string;
}

export const DeleteListRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      listId: Schema.String.pipe(T.HttpPath("listId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/rules/lists/{listId}",
      }),
    ),
) as unknown as Schema.Codec<DeleteListRequest>;

export interface DeleteListResponse {
  /** The unique ID of the list. */
  id: string;
}

export const DeleteListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteListResponse>;

export type DeleteListError = DefaultErrors | ListNotFound | Forbidden;

export const deleteList: API.OperationMethod<
  DeleteListRequest,
  DeleteListResponse,
  DeleteListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteListRequest,
  output: DeleteListResponse,
  errors: [ListNotFound, Forbidden],
}));

// =============================================================================
// ListBulkOperation
// =============================================================================

export interface GetListBulkOperationRequest {
  operationId: string;
  /** The Account ID for this resource. */
  accountId: string;
}

export const GetListBulkOperationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      operationId: Schema.String.pipe(T.HttpPath("operationId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/rules/lists/bulk_operations/{operationId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetListBulkOperationRequest>;

export type GetListBulkOperationResponse =
  | { id: string; status: "pending" | "running" | (string & {}) }
  | { id: string; completed: string; status: "completed" }
  | { id: string; completed: string; error: string; status: "failed" };

export const GetListBulkOperationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Union([
      ListsBulkOperationFailed,
      ListsBulkOperationCompleted,
      ListsBulkOperationPendingOrRunning,
    ]).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetListBulkOperationResponse>;

export type GetListBulkOperationError =
  | DefaultErrors
  | ListNotFound
  | Forbidden;

export const getListBulkOperation: API.OperationMethod<
  GetListBulkOperationRequest,
  GetListBulkOperationResponse,
  GetListBulkOperationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetListBulkOperationRequest,
  output: GetListBulkOperationResponse,
  errors: [ListNotFound, Forbidden],
}));

// =============================================================================
// ListItem
// =============================================================================

export interface GetListItemRequest {
  listId: string;
  itemId: string;
  /** The Account ID for this resource. */
  accountId: string;
}

export const GetListItemRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      listId: Schema.String.pipe(T.HttpPath("listId")),
      itemId: Schema.String.pipe(T.HttpPath("itemId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/rules/lists/{listId}/items/{itemId}",
      }),
    ),
) as unknown as Schema.Codec<GetListItemRequest>;

export type GetListItemResponse =
  | {
      id: string;
      createdOn: string;
      ip: string;
      modifiedOn: string;
      comment?: string | null;
    }
  | {
      id: string;
      createdOn: string;
      hostname: { urlHostname: string; excludeExactHostname?: boolean | null };
      modifiedOn: string;
      comment?: string | null;
    }
  | {
      id: string;
      createdOn: string;
      modifiedOn: string;
      redirect: {
        sourceUrl: string;
        targetUrl: string;
        includeSubdomains?: boolean | null;
        preservePathSuffix?: boolean | null;
        preserveQueryString?: boolean | null;
        statusCode?: "301" | "302" | "307" | "308" | (string & {}) | null;
        subpathMatching?: boolean | null;
      };
      comment?: string | null;
    }
  | {
      id: string;
      asn: number;
      createdOn: string;
      modifiedOn: string;
      comment?: string | null;
    };

export const GetListItemResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Union([
      ListsListItemIPFull,
      ListsListItemHostnameFull,
      ListsListItemRedirectFull,
      ListsListItemASNFull,
    ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetListItemResponse>;

export type GetListItemError = DefaultErrors;

export const getListItem: API.OperationMethod<
  GetListItemRequest,
  GetListItemResponse,
  GetListItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetListItemRequest,
  output: GetListItemResponse,
  errors: [],
}));

export interface ListListItemsRequest {
  listId: string;
  /** Path param: The Account ID for this resource. */
  accountId: string;
  cursor?: string;
  /** Query param: Amount of results to include in each paginated response. A non-negative 32 bit integer. */
  perPage?: number;
  /** Query param: A search query to filter returned items. Its meaning depends on the list type: IP addresses must start with the provided string, hostnames and bulk redirects must contain the string, and  */
  search?: string;
}

export const ListListItemsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      listId: Schema.String.pipe(T.HttpPath("listId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/rules/lists/{listId}/items",
      }),
    ),
) as unknown as Schema.Codec<ListListItemsRequest>;

export interface ListListItemsResponse {
  result: (
    | {
        id: string;
        createdOn: string;
        ip: string;
        modifiedOn: string;
        comment?: string | null;
      }
    | {
        id: string;
        createdOn: string;
        hostname: {
          urlHostname: string;
          excludeExactHostname?: boolean | null;
        };
        modifiedOn: string;
        comment?: string | null;
      }
    | {
        id: string;
        createdOn: string;
        modifiedOn: string;
        redirect: {
          sourceUrl: string;
          targetUrl: string;
          includeSubdomains?: boolean | null;
          preservePathSuffix?: boolean | null;
          preserveQueryString?: boolean | null;
          statusCode?: "301" | "302" | "307" | "308" | (string & {}) | null;
          subpathMatching?: boolean | null;
        };
        comment?: string | null;
      }
    | {
        id: string;
        asn: number;
        createdOn: string;
        modifiedOn: string;
        comment?: string | null;
      }
  )[];
  resultInfo?: { cursors?: { after?: string | null } | null } | null;
}

export const ListListItemsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Union([
          ListsListItemIPFull,
          ListsListItemHostnameFull,
          ListsListItemRedirectFull,
          ListsListItemASNFull,
        ]),
      ),
      resultInfo: Schema.optional(
        Schema.Union([ListListItemsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListListItemsResponse>;

export type ListListItemsError = DefaultErrors | ListNotFound | Forbidden;

export const listListItems: API.PaginatedOperationMethod<
  ListListItemsRequest,
  ListListItemsResponse,
  ListListItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListListItemsRequest,
  output: ListListItemsResponse,
  errors: [ListNotFound, Forbidden],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursors.after",
    items: "result",
  } as const,
}));

export interface CreateListItemRequest {
  listId: string;
  /** Path param: The Account ID for this resource. */
  accountId: string;
  /** Body param */
  body: (
    | { ip: string; comment?: string }
    | {
        redirect: {
          sourceUrl: string;
          targetUrl: string;
          includeSubdomains?: boolean;
          preservePathSuffix?: boolean;
          preserveQueryString?: boolean;
          statusCode?: "301" | "302" | "307" | "308" | (string & {});
          subpathMatching?: boolean;
        };
        comment?: string;
      }
    | {
        hostname: { urlHostname: string; excludeExactHostname?: boolean };
        comment?: string;
      }
    | { asn: number; comment?: string }
  )[];
}

export const CreateListItemRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      listId: Schema.String.pipe(T.HttpPath("listId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.Array(
        Schema.Union([
          ListsListItemIPComment,
          ListsListItemRedirectComment,
          ListsListItemHostnameComment,
          ListsListItemASNComment,
        ]),
      ).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/rules/lists/{listId}/items",
      }),
    ),
) as unknown as Schema.Codec<CreateListItemRequest>;

export interface CreateListItemResponse {
  /** The unique operation ID of the asynchronous action. */
  operationId: string;
}

export const CreateListItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      operationId: Schema.String,
    })
      .pipe(Schema.encodeKeys({ operationId: "operation_id" }))
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateListItemResponse>;

export type CreateListItemError = DefaultErrors;

export const createListItem: API.OperationMethod<
  CreateListItemRequest,
  CreateListItemResponse,
  CreateListItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateListItemRequest,
  output: CreateListItemResponse,
  errors: [],
}));

export interface UpdateListItemRequest {
  listId: string;
  /** Path param: The Account ID for this resource. */
  accountId: string;
  /** Body param */
  body: (
    | { ip: string; comment?: string }
    | {
        redirect: {
          sourceUrl: string;
          targetUrl: string;
          includeSubdomains?: boolean;
          preservePathSuffix?: boolean;
          preserveQueryString?: boolean;
          statusCode?: "301" | "302" | "307" | "308" | (string & {});
          subpathMatching?: boolean;
        };
        comment?: string;
      }
    | {
        hostname: { urlHostname: string; excludeExactHostname?: boolean };
        comment?: string;
      }
    | { asn: number; comment?: string }
  )[];
}

export const UpdateListItemRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      listId: Schema.String.pipe(T.HttpPath("listId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.Array(
        Schema.Union([
          ListsListItemIPComment,
          ListsListItemRedirectComment,
          ListsListItemHostnameComment,
          ListsListItemASNComment,
        ]),
      ).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/rules/lists/{listId}/items",
      }),
    ),
) as unknown as Schema.Codec<UpdateListItemRequest>;

export interface UpdateListItemResponse {
  /** The unique operation ID of the asynchronous action. */
  operationId: string;
}

export const UpdateListItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      operationId: Schema.String,
    })
      .pipe(Schema.encodeKeys({ operationId: "operation_id" }))
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateListItemResponse>;

export type UpdateListItemError = DefaultErrors | ListNotFound | Forbidden;

export const updateListItem: API.OperationMethod<
  UpdateListItemRequest,
  UpdateListItemResponse,
  UpdateListItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateListItemRequest,
  output: UpdateListItemResponse,
  errors: [ListNotFound, Forbidden],
}));

export interface DeleteListItemRequest {
  listId: string;
  /** Path param: The Account ID for this resource. */
  accountId: string;
  /** Body param */
  items?: { id: string }[];
}

export const DeleteListItemRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      listId: Schema.String.pipe(T.HttpPath("listId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      items: Schema.optional(Schema.Array(Item)),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/rules/lists/{listId}/items",
      }),
    ),
) as unknown as Schema.Codec<DeleteListItemRequest>;

export interface DeleteListItemResponse {
  /** The unique operation ID of the asynchronous action. */
  operationId: string;
}

export const DeleteListItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      operationId: Schema.String,
    })
      .pipe(Schema.encodeKeys({ operationId: "operation_id" }))
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteListItemResponse>;

export type DeleteListItemError = DefaultErrors;

export const deleteListItem: API.OperationMethod<
  DeleteListItemRequest,
  DeleteListItemResponse,
  DeleteListItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteListItemRequest,
  output: DeleteListItemResponse,
  errors: [],
}));
