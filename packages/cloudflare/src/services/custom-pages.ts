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
// CustomPage
// =============================================================================

const GetCustomPageBaseFields = {
  identifier: Schema.Literals([
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
    | "waf_challenge";
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
  state?: "default" | "customized" | null;
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
    Schema.Union([Schema.Literals(["default", "customized"]), Schema.Null]),
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
    state?: "default" | "customized" | null;
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
            Schema.Literals(["default", "customized"]),
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
  identifier: Schema.Literals([
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
  ]).pipe(T.HttpPath("identifier")),
  state: Schema.Literals(["default", "customized"]),
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
    | "waf_challenge";
  /** Body param: The custom page state. */
  state: "default" | "customized";
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
  state?: "default" | "customized" | null;
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
    Schema.Union([Schema.Literals(["default", "customized"]), Schema.Null]),
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
