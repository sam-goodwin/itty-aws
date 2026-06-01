/**
 * Cloudflare CUSTOM-PAGES API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service custom-pages
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Asset
// =============================================================================

const GetAssetBaseFields = {
  assetName: Schema.String.pipe(T.HttpPath("assetName")),
} as const;

interface GetAssetBaseRequest {
  assetName: string;
}

export interface GetAssetForAccountRequest extends GetAssetBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetAssetForZoneRequest extends GetAssetBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetAssetForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...GetAssetBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/custom_pages/assets/{assetName}",
    }),
  ) as unknown as Schema.Schema<GetAssetForAccountRequest>;

export const GetAssetForZoneRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...GetAssetBaseFields,
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/zones/{zone_id}/custom_pages/assets/{assetName}",
  }),
) as unknown as Schema.Schema<GetAssetForZoneRequest>;

export interface GetAssetResponse {
  /** A short description of the custom asset. */
  description?: string | null;
  lastUpdated?: string | null;
  /** The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (\_). */
  name?: string | null;
  /** The size of the asset content in bytes. */
  sizeBytes?: number | null;
  /** The URL where the asset content is fetched from. */
  url?: string | null;
}

export const GetAssetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  lastUpdated: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  sizeBytes: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      description: "description",
      lastUpdated: "last_updated",
      name: "name",
      sizeBytes: "size_bytes",
      url: "url",
    }),
  )
  .pipe(T.ResponsePath("result")) as unknown as Schema.Schema<GetAssetResponse>;

export type GetAssetError = DefaultErrors;

export const getAssetForAccount: API.OperationMethod<
  GetAssetForAccountRequest,
  GetAssetResponse,
  GetAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAssetForAccountRequest,
  output: GetAssetResponse,
  errors: [],
}));

export const getAssetForZone: API.OperationMethod<
  GetAssetForZoneRequest,
  GetAssetResponse,
  GetAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAssetForZoneRequest,
  output: GetAssetResponse,
  errors: [],
}));

const ListAssetsBaseFields = {} as const;

interface ListAssetsBaseRequest {}

export interface ListAssetsForAccountRequest extends ListAssetsBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface ListAssetsForZoneRequest extends ListAssetsBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const ListAssetsForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...ListAssetsBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/custom_pages/assets",
    }),
  ) as unknown as Schema.Schema<ListAssetsForAccountRequest>;

export const ListAssetsForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...ListAssetsBaseFields,
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/custom_pages/assets" }),
  ) as unknown as Schema.Schema<ListAssetsForZoneRequest>;

export interface ListAssetsResponse {
  result: {
    description?: string | null;
    lastUpdated?: string | null;
    name?: string | null;
    sizeBytes?: number | null;
    url?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListAssetsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Array(
    Schema.Struct({
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastUpdated: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sizeBytes: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        description: "description",
        lastUpdated: "last_updated",
        name: "name",
        sizeBytes: "size_bytes",
        url: "url",
      }),
    ),
  ),
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
) as unknown as Schema.Schema<ListAssetsResponse>;

export type ListAssetsError = DefaultErrors;

export const listAssetsForAccount: API.PaginatedOperationMethod<
  ListAssetsForAccountRequest,
  ListAssetsResponse,
  ListAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAssetsForAccountRequest,
  output: ListAssetsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export const listAssetsForZone: API.PaginatedOperationMethod<
  ListAssetsForZoneRequest,
  ListAssetsResponse,
  ListAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAssetsForZoneRequest,
  output: ListAssetsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

const CreateAssetBaseFields = {
  description: Schema.String,
  name: Schema.String,
  url: Schema.String,
} as const;

interface CreateAssetBaseRequest {
  /** Body param: A short description of the custom asset. */
  description: string;
  /** Body param: The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (\_). */
  name: string;
  /** Body param: The URL where the asset content is fetched from. */
  url: string;
}

export interface CreateAssetForAccountRequest extends CreateAssetBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface CreateAssetForZoneRequest extends CreateAssetBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const CreateAssetForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...CreateAssetBaseFields,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/custom_pages/assets",
    }),
  ) as unknown as Schema.Schema<CreateAssetForAccountRequest>;

export const CreateAssetForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...CreateAssetBaseFields,
  }).pipe(
    T.Http({ method: "POST", path: "/zones/{zone_id}/custom_pages/assets" }),
  ) as unknown as Schema.Schema<CreateAssetForZoneRequest>;

export interface CreateAssetResponse {
  /** A short description of the custom asset. */
  description?: string | null;
  lastUpdated?: string | null;
  /** The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (\_). */
  name?: string | null;
  /** The size of the asset content in bytes. */
  sizeBytes?: number | null;
  /** The URL where the asset content is fetched from. */
  url?: string | null;
}

export const CreateAssetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  lastUpdated: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  sizeBytes: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      description: "description",
      lastUpdated: "last_updated",
      name: "name",
      sizeBytes: "size_bytes",
      url: "url",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateAssetResponse>;

export type CreateAssetError = DefaultErrors;

export const createAssetForAccount: API.OperationMethod<
  CreateAssetForAccountRequest,
  CreateAssetResponse,
  CreateAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAssetForAccountRequest,
  output: CreateAssetResponse,
  errors: [],
}));

export const createAssetForZone: API.OperationMethod<
  CreateAssetForZoneRequest,
  CreateAssetResponse,
  CreateAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAssetForZoneRequest,
  output: CreateAssetResponse,
  errors: [],
}));

const UpdateAssetBaseFields = {
  assetName: Schema.String.pipe(T.HttpPath("assetName")),
  description: Schema.String,
  url: Schema.String,
} as const;

interface UpdateAssetBaseRequest {
  assetName: string;
  /** Body param: A short description of the custom asset. */
  description: string;
  /** Body param: The URL where the asset content is fetched from. */
  url: string;
}

export interface UpdateAssetForAccountRequest extends UpdateAssetBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface UpdateAssetForZoneRequest extends UpdateAssetBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const UpdateAssetForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...UpdateAssetBaseFields,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/custom_pages/assets/{assetName}",
    }),
  ) as unknown as Schema.Schema<UpdateAssetForAccountRequest>;

export const UpdateAssetForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...UpdateAssetBaseFields,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/custom_pages/assets/{assetName}",
    }),
  ) as unknown as Schema.Schema<UpdateAssetForZoneRequest>;

export interface UpdateAssetResponse {
  /** A short description of the custom asset. */
  description?: string | null;
  lastUpdated?: string | null;
  /** The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (\_). */
  name?: string | null;
  /** The size of the asset content in bytes. */
  sizeBytes?: number | null;
  /** The URL where the asset content is fetched from. */
  url?: string | null;
}

export const UpdateAssetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  lastUpdated: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  sizeBytes: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      description: "description",
      lastUpdated: "last_updated",
      name: "name",
      sizeBytes: "size_bytes",
      url: "url",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<UpdateAssetResponse>;

export type UpdateAssetError = DefaultErrors;

export const updateAssetForAccount: API.OperationMethod<
  UpdateAssetForAccountRequest,
  UpdateAssetResponse,
  UpdateAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAssetForAccountRequest,
  output: UpdateAssetResponse,
  errors: [],
}));

export const updateAssetForZone: API.OperationMethod<
  UpdateAssetForZoneRequest,
  UpdateAssetResponse,
  UpdateAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAssetForZoneRequest,
  output: UpdateAssetResponse,
  errors: [],
}));

const DeleteAssetBaseFields = {
  assetName: Schema.String.pipe(T.HttpPath("assetName")),
} as const;

interface DeleteAssetBaseRequest {
  assetName: string;
}

export interface DeleteAssetForAccountRequest extends DeleteAssetBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface DeleteAssetForZoneRequest extends DeleteAssetBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const DeleteAssetForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...DeleteAssetBaseFields,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/custom_pages/assets/{assetName}",
    }),
  ) as unknown as Schema.Schema<DeleteAssetForAccountRequest>;

export const DeleteAssetForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...DeleteAssetBaseFields,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/zones/{zone_id}/custom_pages/assets/{assetName}",
    }),
  ) as unknown as Schema.Schema<DeleteAssetForZoneRequest>;

export type DeleteAssetResponse = unknown;

export const DeleteAssetResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Schema<DeleteAssetResponse>;

export type DeleteAssetError = DefaultErrors;

export const deleteAssetForAccount: API.OperationMethod<
  DeleteAssetForAccountRequest,
  DeleteAssetResponse,
  DeleteAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAssetForAccountRequest,
  output: DeleteAssetResponse,
  errors: [],
}));

export const deleteAssetForZone: API.OperationMethod<
  DeleteAssetForZoneRequest,
  DeleteAssetResponse,
  DeleteAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAssetForZoneRequest,
  output: DeleteAssetResponse,
  errors: [],
}));

// =============================================================================
// CustomPage
// =============================================================================

const GetCustomPageBaseFields = {
  identifier: Schema.Union([
    Schema.Literals([
      "1000_errors",
      "500_errors",
      "basic_challenge",
      "country_challenge",
      "ip_block",
      "managed_challenge",
      "ratelimit_block",
      "under_attack",
      "waf_block",
      "waf_challenge",
    ]),
    Schema.String,
  ]).pipe(T.HttpPath("identifier")),
} as const;

interface GetCustomPageBaseRequest {
  identifier:
    | "1000_errors"
    | "500_errors"
    | "basic_challenge"
    | "country_challenge"
    | "ip_block"
    | "managed_challenge"
    | "ratelimit_block"
    | "under_attack"
    | "waf_block"
    | "waf_challenge"
    | (string & {});
}

export interface GetCustomPageForAccountRequest extends GetCustomPageBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetCustomPageForZoneRequest extends GetCustomPageBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetCustomPageForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...GetCustomPageBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/custom_pages/{identifier}",
    }),
  ) as unknown as Schema.Schema<GetCustomPageForAccountRequest>;

export const GetCustomPageForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...GetCustomPageBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/custom_pages/{identifier}",
    }),
  ) as unknown as Schema.Schema<GetCustomPageForZoneRequest>;

export interface GetCustomPageResponse {
  id?: string | null;
  createdOn?: string | null;
  description?: string | null;
  modifiedOn?: string | null;
  previewTarget?: string | null;
  requiredTokens?: string[] | null;
  /** The custom page state. */
  state?: "default" | "customized" | (string & {}) | null;
  /** The URL associated with the custom page. */
  url?: string | null;
}

export const GetCustomPageResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  previewTarget: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  requiredTokens: Schema.optional(
    Schema.Union([Schema.Array(Schema.String), Schema.Null]),
  ),
  state: Schema.optional(
    Schema.Union([
      Schema.Union([Schema.Literals(["default", "customized"]), Schema.String]),
      Schema.Null,
    ]),
  ),
  url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      createdOn: "created_on",
      description: "description",
      modifiedOn: "modified_on",
      previewTarget: "preview_target",
      requiredTokens: "required_tokens",
      state: "state",
      url: "url",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetCustomPageResponse>;

export type GetCustomPageError = DefaultErrors;

export const getCustomPageForAccount: API.OperationMethod<
  GetCustomPageForAccountRequest,
  GetCustomPageResponse,
  GetCustomPageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomPageForAccountRequest,
  output: GetCustomPageResponse,
  errors: [],
}));

export const getCustomPageForZone: API.OperationMethod<
  GetCustomPageForZoneRequest,
  GetCustomPageResponse,
  GetCustomPageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomPageForZoneRequest,
  output: GetCustomPageResponse,
  errors: [],
}));

const ListCustomPagesBaseFields = {} as const;

interface ListCustomPagesBaseRequest {}

export interface ListCustomPagesForAccountRequest extends ListCustomPagesBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface ListCustomPagesForZoneRequest extends ListCustomPagesBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const ListCustomPagesForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...ListCustomPagesBaseFields,
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/custom_pages" }),
  ) as unknown as Schema.Schema<ListCustomPagesForAccountRequest>;

export const ListCustomPagesForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...ListCustomPagesBaseFields,
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/custom_pages" }),
  ) as unknown as Schema.Schema<ListCustomPagesForZoneRequest>;

export interface ListCustomPagesResponse {
  result: {
    id?: string | null;
    createdOn?: string | null;
    description?: string | null;
    modifiedOn?: string | null;
    previewTarget?: string | null;
    requiredTokens?: string[] | null;
    state?: "default" | "customized" | (string & {}) | null;
    url?: string | null;
  }[];
}

export const ListCustomPagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        description: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        previewTarget: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        requiredTokens: Schema.optional(
          Schema.Union([Schema.Array(Schema.String), Schema.Null]),
        ),
        state: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["default", "customized"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }).pipe(
        Schema.encodeKeys({
          id: "id",
          createdOn: "created_on",
          description: "description",
          modifiedOn: "modified_on",
          previewTarget: "preview_target",
          requiredTokens: "required_tokens",
          state: "state",
          url: "url",
        }),
      ),
    ),
  }) as unknown as Schema.Schema<ListCustomPagesResponse>;

export type ListCustomPagesError = DefaultErrors;

export const listCustomPagesForAccount: API.PaginatedOperationMethod<
  ListCustomPagesForAccountRequest,
  ListCustomPagesResponse,
  ListCustomPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomPagesForAccountRequest,
  output: ListCustomPagesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export const listCustomPagesForZone: API.PaginatedOperationMethod<
  ListCustomPagesForZoneRequest,
  ListCustomPagesResponse,
  ListCustomPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomPagesForZoneRequest,
  output: ListCustomPagesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

const PutCustomPageBaseFields = {
  identifier: Schema.Union([
    Schema.Literals([
      "1000_errors",
      "500_errors",
      "basic_challenge",
      "country_challenge",
      "ip_block",
      "managed_challenge",
      "ratelimit_block",
      "under_attack",
      "waf_block",
      "waf_challenge",
    ]),
    Schema.String,
  ]).pipe(T.HttpPath("identifier")),
  state: Schema.Union([
    Schema.Literals(["default", "customized"]),
    Schema.String,
  ]),
  url: Schema.String,
} as const;

interface PutCustomPageBaseRequest {
  identifier:
    | "1000_errors"
    | "500_errors"
    | "basic_challenge"
    | "country_challenge"
    | "ip_block"
    | "managed_challenge"
    | "ratelimit_block"
    | "under_attack"
    | "waf_block"
    | "waf_challenge"
    | (string & {});
  /** Body param: The custom page state. */
  state: "default" | "customized" | (string & {});
  /** Body param: The URL associated with the custom page. */
  url: string;
}

export interface PutCustomPageForAccountRequest extends PutCustomPageBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface PutCustomPageForZoneRequest extends PutCustomPageBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const PutCustomPageForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...PutCustomPageBaseFields,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/custom_pages/{identifier}",
    }),
  ) as unknown as Schema.Schema<PutCustomPageForAccountRequest>;

export const PutCustomPageForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...PutCustomPageBaseFields,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/custom_pages/{identifier}",
    }),
  ) as unknown as Schema.Schema<PutCustomPageForZoneRequest>;

export interface PutCustomPageResponse {
  id?: string | null;
  createdOn?: string | null;
  description?: string | null;
  modifiedOn?: string | null;
  previewTarget?: string | null;
  requiredTokens?: string[] | null;
  /** The custom page state. */
  state?: "default" | "customized" | (string & {}) | null;
  /** The URL associated with the custom page. */
  url?: string | null;
}

export const PutCustomPageResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  previewTarget: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  requiredTokens: Schema.optional(
    Schema.Union([Schema.Array(Schema.String), Schema.Null]),
  ),
  state: Schema.optional(
    Schema.Union([
      Schema.Union([Schema.Literals(["default", "customized"]), Schema.String]),
      Schema.Null,
    ]),
  ),
  url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      createdOn: "created_on",
      description: "description",
      modifiedOn: "modified_on",
      previewTarget: "preview_target",
      requiredTokens: "required_tokens",
      state: "state",
      url: "url",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<PutCustomPageResponse>;

export type PutCustomPageError = DefaultErrors;

export const putCustomPageForAccount: API.OperationMethod<
  PutCustomPageForAccountRequest,
  PutCustomPageResponse,
  PutCustomPageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutCustomPageForAccountRequest,
  output: PutCustomPageResponse,
  errors: [],
}));

export const putCustomPageForZone: API.OperationMethod<
  PutCustomPageForZoneRequest,
  PutCustomPageResponse,
  PutCustomPageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutCustomPageForZoneRequest,
  output: PutCustomPageResponse,
  errors: [],
}));
