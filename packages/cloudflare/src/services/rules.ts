/**
 * Cloudflare RULES API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service rules
 */

import * as stream from "effect/Stream";
import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Shared Types
// =============================================================================

export interface Hostname {
  urlHostname: string;
  excludeExactHostname?: boolean | null;
}

export const Hostname: Schema.Schema<Hostname> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
  ) as unknown as Schema.Schema<Hostname>;

export interface HostnameParam {
  urlHostname: string;
  excludeExactHostname?: boolean | null;
}

export const HostnameParam: Schema.Schema<HostnameParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
  ) as unknown as Schema.Schema<HostnameParam>;

export interface ListsListItemASNComment {
  asn: number;
  comment?: string | null;
}

export const ListsListItemASNComment: Schema.Schema<ListsListItemASNComment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      asn: Schema.Number,
      comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<ListsListItemASNComment>;

export interface ListsListItemASNFull {
  id: string;
  asn: number;
  createdOn: string;
  modifiedOn: string;
  comment?: string | null;
}

export const ListsListItemASNFull: Schema.Schema<ListsListItemASNFull> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
  ) as unknown as Schema.Schema<ListsListItemASNFull>;

export interface ListsListItemHostnameComment {
  hostname: Hostname;
  comment?: string | null;
}

export const ListsListItemHostnameComment: Schema.Schema<ListsListItemHostnameComment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      hostname: Hostname,
      comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<ListsListItemHostnameComment>;

export interface ListsListItemHostnameFull {
  id: string;
  createdOn: string;
  hostname: Hostname;
  modifiedOn: string;
  comment?: string | null;
}

export const ListsListItemHostnameFull: Schema.Schema<ListsListItemHostnameFull> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
  ) as unknown as Schema.Schema<ListsListItemHostnameFull>;

export interface ListsListItemIPComment {
  ip: string;
  comment?: string | null;
}

export const ListsListItemIPComment: Schema.Schema<ListsListItemIPComment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      ip: Schema.String,
      comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<ListsListItemIPComment>;

export interface ListsListItemIPFull {
  id: string;
  createdOn: string;
  ip: string;
  modifiedOn: string;
  comment?: string | null;
}

export const ListsListItemIPFull: Schema.Schema<ListsListItemIPFull> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
  ) as unknown as Schema.Schema<ListsListItemIPFull>;

export interface ListsListItemRedirectComment {
  redirect: Redirect;
  comment?: string | null;
}

export const ListsListItemRedirectComment: Schema.Schema<ListsListItemRedirectComment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      redirect: Redirect,
      comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<ListsListItemRedirectComment>;

export interface ListsListItemRedirectFull {
  id: string;
  createdOn: string;
  modifiedOn: string;
  redirect: Redirect;
  comment?: string | null;
}

export const ListsListItemRedirectFull: Schema.Schema<ListsListItemRedirectFull> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
  ) as unknown as Schema.Schema<ListsListItemRedirectFull>;

export interface Redirect {
  sourceUrl: string;
  targetUrl: string;
  includeSubdomains?: boolean | null;
  preservePathSuffix?: boolean | null;
  preserveQueryString?: boolean | null;
  statusCode?: "301" | "302" | "307" | "308" | null;
  subpathMatching?: boolean | null;
}

export const Redirect: Schema.Schema<Redirect> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
          Schema.Literals(["301", "302", "307", "308"]),
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
  ) as unknown as Schema.Schema<Redirect>;

export interface RedirectParam {
  sourceUrl: string;
  targetUrl: string;
  includeSubdomains?: boolean | null;
  preservePathSuffix?: boolean | null;
  preserveQueryString?: boolean | null;
  statusCode?: "301" | "302" | "307" | "308" | null;
  subpathMatching?: boolean | null;
}

export const RedirectParam: Schema.Schema<RedirectParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
          Schema.Literals(["301", "302", "307", "308"]),
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
  ) as unknown as Schema.Schema<RedirectParam>;

// =============================================================================
// List
// =============================================================================

export interface GetListRequest {
  listId: string;
  /** The Account ID for this resource. */
  accountId: string;
}

export const GetListRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  listId: Schema.String.pipe(T.HttpPath("listId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/rules/lists/{listId}",
  }),
) as unknown as Schema.Schema<GetListRequest>;

export interface GetListResponse {
  /** The unique ID of the list. */
  id: string;
  /** The RFC 3339 timestamp of when the list was created. */
  createdOn: string;
  /** The type of the list. Each type supports specific list items (IP addresses, ASNs, hostnames or redirects). */
  kind: "ip" | "redirect" | "hostname" | "asn";
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

export const GetListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  createdOn: Schema.String,
  kind: Schema.Literals(["ip", "redirect", "hostname", "asn"]),
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
  .pipe(T.ResponsePath("result")) as unknown as Schema.Schema<GetListResponse>;

export type GetListError = DefaultErrors;

export const getList: API.OperationMethod<
  GetListRequest,
  GetListResponse,
  GetListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetListRequest,
  output: GetListResponse,
  errors: [],
}));

export interface ListListsRequest {
  /** The Account ID for this resource. */
  accountId: string;
}

export const ListListsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({ method: "GET", path: "/accounts/{account_id}/rules/lists" }),
) as unknown as Schema.Schema<ListListsRequest>;

export interface ListListsResponse {
  result: {
    id: string;
    createdOn: string;
    kind: "ip" | "redirect" | "hostname" | "asn";
    modifiedOn: string;
    name: string;
    numItems: number;
    numReferencingFilters: number;
    description?: string | null;
  }[];
}

export const ListListsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      createdOn: Schema.String,
      kind: Schema.Literals(["ip", "redirect", "hostname", "asn"]),
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
  ),
}) as unknown as Schema.Schema<ListListsResponse>;

export type ListListsError = DefaultErrors;

export const listLists: API.PaginatedOperationMethod<
  ListListsRequest,
  ListListsResponse,
  ListListsError,
  Credentials | HttpClient.HttpClient
> & {
  pages: (
    input: ListListsRequest,
  ) => stream.Stream<
    ListListsResponse,
    ListListsError,
    Credentials | HttpClient.HttpClient
  >;
  items: (input: ListListsRequest) => stream.Stream<
    {
      id: string;
      createdOn: string;
      kind: "ip" | "redirect" | "hostname" | "asn";
      modifiedOn: string;
      name: string;
      numItems: number;
      numReferencingFilters: number;
      description?: string | null;
    },
    ListListsError,
    Credentials | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListListsRequest,
  output: ListListsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateListRequest {
  /** Path param: The Account ID for this resource. */
  accountId: string;
  /** Body param: The type of the list. Each type supports specific list items (IP addresses, ASNs, hostnames or redirects). */
  kind: "ip" | "redirect" | "hostname" | "asn";
  /** Body param: An informative name for the list. Use this name in filter and rule expressions. */
  name: string;
  /** Body param: An informative summary of the list. */
  description?: string;
}

export const CreateListRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  kind: Schema.Literals(["ip", "redirect", "hostname", "asn"]),
  name: Schema.String,
  description: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/accounts/{account_id}/rules/lists" }),
) as unknown as Schema.Schema<CreateListRequest>;

export interface CreateListResponse {
  /** The unique ID of the list. */
  id: string;
  /** The RFC 3339 timestamp of when the list was created. */
  createdOn: string;
  /** The type of the list. Each type supports specific list items (IP addresses, ASNs, hostnames or redirects). */
  kind: "ip" | "redirect" | "hostname" | "asn";
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

export const CreateListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  createdOn: Schema.String,
  kind: Schema.Literals(["ip", "redirect", "hostname", "asn"]),
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
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateListResponse>;

export type CreateListError = DefaultErrors;

export const createList: API.OperationMethod<
  CreateListRequest,
  CreateListResponse,
  CreateListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateListRequest,
  output: CreateListResponse,
  errors: [],
}));

export interface UpdateListRequest {
  listId: string;
  /** Path param: The Account ID for this resource. */
  accountId: string;
  /** Body param: An informative summary of the list. */
  description?: string;
}

export const UpdateListRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  listId: Schema.String.pipe(T.HttpPath("listId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  description: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/accounts/{account_id}/rules/lists/{listId}",
  }),
) as unknown as Schema.Schema<UpdateListRequest>;

export interface UpdateListResponse {
  /** The unique ID of the list. */
  id: string;
  /** The RFC 3339 timestamp of when the list was created. */
  createdOn: string;
  /** The type of the list. Each type supports specific list items (IP addresses, ASNs, hostnames or redirects). */
  kind: "ip" | "redirect" | "hostname" | "asn";
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

export const UpdateListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  createdOn: Schema.String,
  kind: Schema.Literals(["ip", "redirect", "hostname", "asn"]),
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
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<UpdateListResponse>;

export type UpdateListError = DefaultErrors;

export const updateList: API.OperationMethod<
  UpdateListRequest,
  UpdateListResponse,
  UpdateListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateListRequest,
  output: UpdateListResponse,
  errors: [],
}));

export interface DeleteListRequest {
  listId: string;
  /** The Account ID for this resource. */
  accountId: string;
}

export const DeleteListRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  listId: Schema.String.pipe(T.HttpPath("listId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/accounts/{account_id}/rules/lists/{listId}",
  }),
) as unknown as Schema.Schema<DeleteListRequest>;

export interface DeleteListResponse {
  /** The unique ID of the list. */
  id: string;
}

export const DeleteListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
}).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<DeleteListResponse>;

export type DeleteListError = DefaultErrors;

export const deleteList: API.OperationMethod<
  DeleteListRequest,
  DeleteListResponse,
  DeleteListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteListRequest,
  output: DeleteListResponse,
  errors: [],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationId: Schema.String.pipe(T.HttpPath("operationId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/rules/lists/bulk_operations/{operationId}",
    }),
  ) as unknown as Schema.Schema<GetListBulkOperationRequest>;

export type GetListBulkOperationResponse =
  | { id: string; status: "pending" | "running" }
  | { id: string; completed: string; status: "completed" }
  | { id: string; completed: string; error: string; status: "failed" };

export const GetListBulkOperationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      id: Schema.String,
      status: Schema.Literals(["pending", "running"]),
    }),
    Schema.Struct({
      id: Schema.String,
      completed: Schema.String,
      status: Schema.Literal("completed"),
    }),
    Schema.Struct({
      id: Schema.String,
      completed: Schema.String,
      error: Schema.String,
      status: Schema.Literal("failed"),
    }),
  ]).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetListBulkOperationResponse>;

export type GetListBulkOperationError = DefaultErrors;

export const getListBulkOperation: API.OperationMethod<
  GetListBulkOperationRequest,
  GetListBulkOperationResponse,
  GetListBulkOperationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetListBulkOperationRequest,
  output: GetListBulkOperationResponse,
  errors: [],
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

export const GetListItemRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  listId: Schema.String.pipe(T.HttpPath("listId")),
  itemId: Schema.String.pipe(T.HttpPath("itemId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/rules/lists/{listId}/items/{itemId}",
  }),
) as unknown as Schema.Schema<GetListItemRequest>;

export type GetListItemResponse =
  | ListsListItemIPFull
  | ListsListItemHostnameFull
  | ListsListItemRedirectFull
  | ListsListItemASNFull;

export const GetListItemResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
  ListsListItemIPFull,
  ListsListItemHostnameFull,
  ListsListItemRedirectFull,
  ListsListItemASNFull,
]).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<GetListItemResponse>;

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
  /** Query param: Amount of results to include in each paginated response. A non-negative 32 bit integer. */
  perPage?: number;
  /** Query param: A search query to filter returned items. Its meaning depends on the list type: IP addresses must start with the provided string, hostnames and bulk redirects must contain the string, and  */
  search?: string;
}

export const ListListItemsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  listId: Schema.String.pipe(T.HttpPath("listId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
  search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/rules/lists/{listId}/items",
  }),
) as unknown as Schema.Schema<ListListItemsRequest>;

export interface ListListItemsResponse {
  result: (
    | ListsListItemIPFull
    | ListsListItemHostnameFull
    | ListsListItemRedirectFull
    | ListsListItemASNFull
  )[];
  resultInfo: { cursors?: { after?: string | null } | null };
}

export const ListListItemsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Array(
    Schema.Union([
      ListsListItemIPFull,
      ListsListItemHostnameFull,
      ListsListItemRedirectFull,
      ListsListItemASNFull,
    ]),
  ),
  resultInfo: Schema.Struct({
    cursors: Schema.optional(
      Schema.Union([
        Schema.Struct({
          after: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
        Schema.Null,
      ]),
    ),
  }),
}).pipe(
  Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
) as unknown as Schema.Schema<ListListItemsResponse>;

export type ListListItemsError = DefaultErrors;

export const listListItems: API.PaginatedOperationMethod<
  ListListItemsRequest,
  ListListItemsResponse,
  ListListItemsError,
  Credentials | HttpClient.HttpClient
> & {
  pages: (
    input: ListListItemsRequest,
  ) => stream.Stream<
    ListListItemsResponse,
    ListListItemsError,
    Credentials | HttpClient.HttpClient
  >;
  items: (
    input: ListListItemsRequest,
  ) => stream.Stream<
    | ListsListItemIPFull
    | ListsListItemHostnameFull
    | ListsListItemRedirectFull
    | ListsListItemASNFull,
    ListListItemsError,
    Credentials | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListListItemsRequest,
  output: ListListItemsResponse,
  errors: [],
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
  /** Body param: */
  body: (
    | ListsListItemIPComment
    | ListsListItemRedirectComment
    | ListsListItemHostnameComment
    | ListsListItemASNComment
  )[];
}

export const CreateListItemRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Schema<CreateListItemRequest>;

export interface CreateListItemResponse {
  /** The unique operation ID of the asynchronous action. */
  operationId: string;
}

export const CreateListItemResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    operationId: Schema.String,
  },
)
  .pipe(Schema.encodeKeys({ operationId: "operation_id" }))
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateListItemResponse>;

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
  /** Body param: */
  body: (
    | ListsListItemIPComment
    | ListsListItemRedirectComment
    | ListsListItemHostnameComment
    | ListsListItemASNComment
  )[];
}

export const UpdateListItemRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Schema<UpdateListItemRequest>;

export interface UpdateListItemResponse {
  /** The unique operation ID of the asynchronous action. */
  operationId: string;
}

export const UpdateListItemResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    operationId: Schema.String,
  },
)
  .pipe(Schema.encodeKeys({ operationId: "operation_id" }))
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<UpdateListItemResponse>;

export type UpdateListItemError = DefaultErrors;

export const updateListItem: API.OperationMethod<
  UpdateListItemRequest,
  UpdateListItemResponse,
  UpdateListItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateListItemRequest,
  output: UpdateListItemResponse,
  errors: [],
}));

export interface DeleteListItemRequest {
  listId: string;
  /** Path param: The Account ID for this resource. */
  accountId: string;
  /** Body param: */
  items?: { id: string }[];
}

export const DeleteListItemRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  listId: Schema.String.pipe(T.HttpPath("listId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  items: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.String,
      }),
    ),
  ),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/accounts/{account_id}/rules/lists/{listId}/items",
  }),
) as unknown as Schema.Schema<DeleteListItemRequest>;

export interface DeleteListItemResponse {
  /** The unique operation ID of the asynchronous action. */
  operationId: string;
}

export const DeleteListItemResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    operationId: Schema.String,
  },
)
  .pipe(Schema.encodeKeys({ operationId: "operation_id" }))
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DeleteListItemResponse>;

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
