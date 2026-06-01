/**
 * Cloudflare BRAND-PROTECTION API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service brand-protection
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { UploadableSchema } from "../schemas.ts";

// =============================================================================
// BrandProtection
// =============================================================================

export interface SubmitBrandProtectionRequest {
  accountId: string;
}

export const SubmitBrandProtectionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/brand-protection/submit",
    }),
  ) as unknown as Schema.Schema<SubmitBrandProtectionRequest>;

export interface SubmitBrandProtectionResponse {
  skippedUrls?: Record<string, unknown>[] | null;
  submittedUrls?: Record<string, unknown>[] | null;
}

export const SubmitBrandProtectionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skippedUrls: Schema.optional(
      Schema.Union([
        Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        Schema.Null,
      ]),
    ),
    submittedUrls: Schema.optional(
      Schema.Union([
        Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      skippedUrls: "skipped_urls",
      submittedUrls: "submitted_urls",
    }),
  ) as unknown as Schema.Schema<SubmitBrandProtectionResponse>;

export type SubmitBrandProtectionError = DefaultErrors;

export const submitBrandProtection: API.OperationMethod<
  SubmitBrandProtectionRequest,
  SubmitBrandProtectionResponse,
  SubmitBrandProtectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SubmitBrandProtectionRequest,
  output: SubmitBrandProtectionResponse,
  errors: [],
}));

// =============================================================================
// InfoBrandProtection
// =============================================================================

export interface UrlInfoBrandProtectionRequest {
  accountId: string;
}

export const UrlInfoBrandProtectionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/brand-protection/url-info",
    }),
  ) as unknown as Schema.Schema<UrlInfoBrandProtectionRequest>;

export interface UrlInfoBrandProtectionResponse {
  result: Record<string, unknown>[];
}

export const UrlInfoBrandProtectionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  }) as unknown as Schema.Schema<UrlInfoBrandProtectionResponse>;

export type UrlInfoBrandProtectionError = DefaultErrors;

export const urlInfoBrandProtection: API.PaginatedOperationMethod<
  UrlInfoBrandProtectionRequest,
  UrlInfoBrandProtectionResponse,
  UrlInfoBrandProtectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: UrlInfoBrandProtectionRequest,
  output: UrlInfoBrandProtectionResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Logo
// =============================================================================

export interface CreateLogoRequest {
  /** Path param */
  accountId: string;
  /** Query param */
  matchType?: string;
  /** Query param */
  tag?: string;
  /** Query param */
  threshold?: number;
  /** Body param */
  image?: File | Blob;
}

export const CreateLogoRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  matchType: Schema.optional(Schema.String).pipe(T.HttpQuery("match_type")),
  tag: Schema.optional(Schema.String).pipe(T.HttpQuery("tag")),
  threshold: Schema.optional(Schema.Number).pipe(T.HttpQuery("threshold")),
  image: Schema.optional(UploadableSchema.pipe(T.HttpFormDataFile())),
}).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/brand-protection/logos",
    contentType: "multipart",
  }),
) as unknown as Schema.Schema<CreateLogoRequest>;

export interface CreateLogoResponse {
  id?: number | null;
  tag?: string | null;
  uploadPath?: string | null;
}

export const CreateLogoResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  tag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  uploadPath: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
}).pipe(
  Schema.encodeKeys({ id: "id", tag: "tag", uploadPath: "upload_path" }),
) as unknown as Schema.Schema<CreateLogoResponse>;

export type CreateLogoError = DefaultErrors;

export const createLogo: API.OperationMethod<
  CreateLogoRequest,
  CreateLogoResponse,
  CreateLogoError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateLogoRequest,
  output: CreateLogoResponse,
  errors: [],
}));

export interface DeleteLogoRequest {
  logoId: string;
  accountId: string;
}

export const DeleteLogoRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  logoId: Schema.String.pipe(T.HttpPath("logoId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/accounts/{account_id}/brand-protection/logos/{logoId}",
  }),
) as unknown as Schema.Schema<DeleteLogoRequest>;

export type DeleteLogoResponse = unknown;

export const DeleteLogoResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Schema<DeleteLogoResponse>;

export type DeleteLogoError = DefaultErrors;

export const deleteLogo: API.OperationMethod<
  DeleteLogoRequest,
  DeleteLogoResponse,
  DeleteLogoError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteLogoRequest,
  output: DeleteLogoResponse,
  errors: [],
}));

// =============================================================================
// LogoMatch
// =============================================================================

export interface GetLogoMatchRequest {
  /** Path param */
  accountId: string;
  /** Query param */
  limit?: string;
  /** Query param */
  logoId?: string[];
  /** Query param */
  offset?: string;
}

export const GetLogoMatchRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  limit: Schema.optional(Schema.String).pipe(T.HttpQuery("limit")),
  logoId: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("logo_id"),
  ),
  offset: Schema.optional(Schema.String).pipe(T.HttpQuery("offset")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/brand-protection/logo-matches",
  }),
) as unknown as Schema.Schema<GetLogoMatchRequest>;

export interface GetLogoMatchResponse {
  matches?: Record<string, unknown>[] | null;
  total?: number | null;
}

export const GetLogoMatchResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  matches: Schema.optional(
    Schema.Union([
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
      Schema.Null,
    ]),
  ),
  total: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
}) as unknown as Schema.Schema<GetLogoMatchResponse>;

export type GetLogoMatchError = DefaultErrors;

export const getLogoMatch: API.OperationMethod<
  GetLogoMatchRequest,
  GetLogoMatchResponse,
  GetLogoMatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLogoMatchRequest,
  output: GetLogoMatchResponse,
  errors: [],
}));

export interface DownloadLogoMatchRequest {
  /** Path param */
  accountId: string;
  /** Query param */
  limit?: string;
  /** Query param */
  logoId?: string[];
  /** Query param */
  offset?: string;
}

export const DownloadLogoMatchRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    limit: Schema.optional(Schema.String).pipe(T.HttpQuery("limit")),
    logoId: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("logo_id"),
    ),
    offset: Schema.optional(Schema.String).pipe(T.HttpQuery("offset")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/brand-protection/logo-matches/download",
    }),
  ) as unknown as Schema.Schema<DownloadLogoMatchRequest>;

export interface DownloadLogoMatchResponse {
  matches?: Record<string, unknown>[] | null;
  total?: number | null;
}

export const DownloadLogoMatchResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matches: Schema.optional(
      Schema.Union([
        Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        Schema.Null,
      ]),
    ),
    total: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }) as unknown as Schema.Schema<DownloadLogoMatchResponse>;

export type DownloadLogoMatchError = DefaultErrors;

export const downloadLogoMatch: API.OperationMethod<
  DownloadLogoMatchRequest,
  DownloadLogoMatchResponse,
  DownloadLogoMatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DownloadLogoMatchRequest,
  output: DownloadLogoMatchResponse,
  errors: [],
}));

// =============================================================================
// Match
// =============================================================================

export interface GetMatchRequest {
  /** Path param */
  accountId: string;
  /** Query param */
  id?: string;
  /** Query param */
  includeDomainId?: boolean;
  /** Query param */
  limit?: number;
  /** Query param */
  offset?: number;
}

export const GetMatchRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  id: Schema.optional(Schema.String).pipe(T.HttpQuery("id")),
  includeDomainId: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("include_domain_id"),
  ),
  limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
  offset: Schema.optional(Schema.Number).pipe(T.HttpQuery("offset")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/brand-protection/matches",
  }),
) as unknown as Schema.Schema<GetMatchRequest>;

export interface GetMatchResponse {
  matches?: Record<string, unknown>[] | null;
  total?: number | null;
}

export const GetMatchResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  matches: Schema.optional(
    Schema.Union([
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
      Schema.Null,
    ]),
  ),
  total: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
}) as unknown as Schema.Schema<GetMatchResponse>;

export type GetMatchError = DefaultErrors;

export const getMatch: API.OperationMethod<
  GetMatchRequest,
  GetMatchResponse,
  GetMatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMatchRequest,
  output: GetMatchResponse,
  errors: [],
}));

export interface DownloadMatchRequest {
  /** Path param */
  accountId: string;
  /** Query param */
  id?: string;
  /** Query param */
  includeDomainId?: boolean;
  /** Query param */
  limit?: number;
  /** Query param */
  offset?: number;
}

export const DownloadMatchRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  id: Schema.optional(Schema.String).pipe(T.HttpQuery("id")),
  includeDomainId: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("include_domain_id"),
  ),
  limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
  offset: Schema.optional(Schema.Number).pipe(T.HttpQuery("offset")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/brand-protection/matches/download",
  }),
) as unknown as Schema.Schema<DownloadMatchRequest>;

export interface DownloadMatchResponse {
  matches?: Record<string, unknown>[] | null;
  total?: number | null;
}

export const DownloadMatchResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  matches: Schema.optional(
    Schema.Union([
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
      Schema.Null,
    ]),
  ),
  total: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
}) as unknown as Schema.Schema<DownloadMatchResponse>;

export type DownloadMatchError = DefaultErrors;

export const downloadMatch: API.OperationMethod<
  DownloadMatchRequest,
  DownloadMatchResponse,
  DownloadMatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DownloadMatchRequest,
  output: DownloadMatchResponse,
  errors: [],
}));

// =============================================================================
// Query
// =============================================================================

export interface CreateQueryRequest {
  /** Path param */
  accountId: string;
  /** Query param */
  id?: string;
  /** Query param */
  queryScan?: boolean;
  /** Query param */
  queryTag?: string;
  /** Body param */
  maxTime?: string | null;
  /** Body param */
  minTime?: string | null;
  /** Body param */
  bodyScan?: boolean;
  /** Body param */
  stringMatches?: unknown;
  /** Body param */
  bodyTag?: string;
}

export const CreateQueryRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  id: Schema.optional(Schema.String).pipe(T.HttpQuery("id")),
  queryScan: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("query_scan")),
  queryTag: Schema.optional(Schema.String).pipe(T.HttpQuery("query_tag")),
  maxTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  minTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  bodyScan: Schema.optional(Schema.Boolean),
  stringMatches: Schema.optional(Schema.Unknown),
  bodyTag: Schema.optional(Schema.String),
}).pipe(
  Schema.encodeKeys({
    maxTime: "max_time",
    minTime: "min_time",
    bodyScan: "body_scan",
    stringMatches: "string_matches",
    bodyTag: "body_tag",
  }),
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/brand-protection/queries",
  }),
) as unknown as Schema.Schema<CreateQueryRequest>;

export type CreateQueryResponse = unknown;

export const CreateQueryResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Schema<CreateQueryResponse>;

export type CreateQueryError = DefaultErrors;

export const createQuery: API.OperationMethod<
  CreateQueryRequest,
  CreateQueryResponse,
  CreateQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateQueryRequest,
  output: CreateQueryResponse,
  errors: [],
}));

export interface DeleteQueryRequest {
  /** Path param */
  accountId: string;
  /** Query param */
  id?: string;
  /** Query param */
  scan?: boolean;
  /** Query param */
  tag?: string;
}

export const DeleteQueryRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  id: Schema.optional(Schema.String).pipe(T.HttpQuery("id")),
  scan: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("scan")),
  tag: Schema.optional(Schema.String).pipe(T.HttpQuery("tag")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/accounts/{account_id}/brand-protection/queries",
  }),
) as unknown as Schema.Schema<DeleteQueryRequest>;

export type DeleteQueryResponse = unknown;

export const DeleteQueryResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Schema<DeleteQueryResponse>;

export type DeleteQueryError = DefaultErrors;

export const deleteQuery: API.OperationMethod<
  DeleteQueryRequest,
  DeleteQueryResponse,
  DeleteQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteQueryRequest,
  output: DeleteQueryResponse,
  errors: [],
}));

export interface BulkQueryRequest {
  /** Path param */
  accountId: string;
  /** Body param */
  queries?: Record<string, unknown>[];
}

export const BulkQueryRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  queries: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/brand-protection/queries/bulk",
  }),
) as unknown as Schema.Schema<BulkQueryRequest>;

export type BulkQueryResponse = unknown;

export const BulkQueryResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Schema<BulkQueryResponse>;

export type BulkQueryError = DefaultErrors;

export const bulkQuery: API.OperationMethod<
  BulkQueryRequest,
  BulkQueryResponse,
  BulkQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkQueryRequest,
  output: BulkQueryResponse,
  errors: [],
}));

// =============================================================================
// V2Logo
// =============================================================================

export interface GetV2LogoRequest {
  /** Path param */
  accountId: string;
  /** Query param: Optional query ID to retrieve a specific logo query */
  id?: string;
  /** Query param: If true, include base64-encoded image data in the response */
  download?: string;
}

export const GetV2LogoRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  id: Schema.optional(Schema.String).pipe(T.HttpQuery("id")),
  download: Schema.optional(Schema.String).pipe(T.HttpQuery("download")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/cloudforce-one/v2/brand-protection/logo/queries",
  }),
) as unknown as Schema.Schema<GetV2LogoRequest>;

export type GetV2LogoResponse = {
  id: number;
  r2Path: string;
  similarityThreshold: number;
  tag: string;
  uploadedAt: string | null;
  contentType?: string | null;
  imageData?: string | null;
}[];

export const GetV2LogoResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    id: Schema.Number,
    r2Path: Schema.String,
    similarityThreshold: Schema.Number,
    tag: Schema.String,
    uploadedAt: Schema.Union([Schema.String, Schema.Null]),
    contentType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    imageData: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      r2Path: "r2_path",
      similarityThreshold: "similarity_threshold",
      tag: "tag",
      uploadedAt: "uploaded_at",
      contentType: "content_type",
      imageData: "image_data",
    }),
  ),
) as unknown as Schema.Schema<GetV2LogoResponse>;

export type GetV2LogoError = DefaultErrors;

export const getV2Logo: API.OperationMethod<
  GetV2LogoRequest,
  GetV2LogoResponse,
  GetV2LogoError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetV2LogoRequest,
  output: GetV2LogoResponse,
  errors: [],
}));

export interface CreateV2LogoRequest {
  /** Path param */
  accountId: string;
  /** Body param: Base64 encoded image data. Can include data URI prefix (e.g., 'data:image/png;base64,...') or just the base64 string. */
  imageData: string;
  /** Body param: Minimum similarity score (0-1) required for visual matches */
  similarityThreshold: number;
  /** Body param: Unique identifier for the logo query */
  tag: string;
  /** Body param: If true, search historic scanned images for matches above the similarity threshold */
  searchLookback?: boolean;
}

export const CreateV2LogoRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  imageData: Schema.String,
  similarityThreshold: Schema.Number,
  tag: Schema.String,
  searchLookback: Schema.optional(Schema.Boolean),
}).pipe(
  Schema.encodeKeys({
    imageData: "image_data",
    similarityThreshold: "similarity_threshold",
    tag: "tag",
    searchLookback: "search_lookback",
  }),
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/cloudforce-one/v2/brand-protection/logo/queries",
  }),
) as unknown as Schema.Schema<CreateV2LogoRequest>;

export interface CreateV2LogoResponse {
  message: string;
  success: boolean;
  queryId?: number | null;
}

export const CreateV2LogoResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.String,
  success: Schema.Boolean,
  queryId: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
}).pipe(
  Schema.encodeKeys({
    message: "message",
    success: "success",
    queryId: "query_id",
  }),
) as unknown as Schema.Schema<CreateV2LogoResponse>;

export type CreateV2LogoError = DefaultErrors;

export const createV2Logo: API.OperationMethod<
  CreateV2LogoRequest,
  CreateV2LogoResponse,
  CreateV2LogoError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateV2LogoRequest,
  output: CreateV2LogoResponse,
  errors: [],
}));

export interface DeleteV2LogoRequest {
  queryId: string;
  accountId: string;
}

export const DeleteV2LogoRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  queryId: Schema.String.pipe(T.HttpPath("queryId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/accounts/{account_id}/cloudforce-one/v2/brand-protection/logo/queries/{queryId}",
  }),
) as unknown as Schema.Schema<DeleteV2LogoRequest>;

export interface DeleteV2LogoResponse {
  message: string;
  success: boolean;
}

export const DeleteV2LogoResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.String,
  success: Schema.Boolean,
}) as unknown as Schema.Schema<DeleteV2LogoResponse>;

export type DeleteV2LogoError = DefaultErrors;

export const deleteV2Logo: API.OperationMethod<
  DeleteV2LogoRequest,
  DeleteV2LogoResponse,
  DeleteV2LogoError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteV2LogoRequest,
  output: DeleteV2LogoResponse,
  errors: [],
}));

// =============================================================================
// V2LogoMatch
// =============================================================================

export interface GetV2LogoMatchRequest {
  /** Path param */
  accountId: string;
  /** Query param */
  queryId: string;
  /** Query param */
  download?: string;
  /** Query param */
  limit?: string;
  /** Query param */
  offset?: string;
  /** Query param: Sort order. Options: 'asc' (ascending) or 'desc' (descending) */
  order?: "asc" | "desc" | (string & {});
  /** Query param: Column to sort by. Options: 'matchedAt', 'domain', 'similarityScore', or 'registrar' */
  orderBy?:
    | "matchedAt"
    | "domain"
    | "similarityScore"
    | "registrar"
    | (string & {});
}

export const GetV2LogoMatchRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  queryId: Schema.String.pipe(T.HttpQuery("query_id")),
  download: Schema.optional(Schema.String).pipe(T.HttpQuery("download")),
  limit: Schema.optional(Schema.String).pipe(T.HttpQuery("limit")),
  offset: Schema.optional(Schema.String).pipe(T.HttpQuery("offset")),
  order: Schema.optional(
    Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
  ).pipe(T.HttpQuery("order")),
  orderBy: Schema.optional(
    Schema.Union([
      Schema.Literals(["matchedAt", "domain", "similarityScore", "registrar"]),
      Schema.String,
    ]),
  ).pipe(T.HttpQuery("orderBy")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/cloudforce-one/v2/brand-protection/logo/matches",
  }),
) as unknown as Schema.Schema<GetV2LogoMatchRequest>;

export interface GetV2LogoMatchResponse {
  matches: {
    id: number;
    domain: string | null;
    matchedAt: string | null;
    queryId: number;
    registrar: string | null;
    similarityScore: number;
    urlScanId: string | null;
    contentType?: string | null;
    imageData?: string | null;
  }[];
  total: number;
}

export const GetV2LogoMatchResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    matches: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        domain: Schema.Union([Schema.String, Schema.Null]),
        matchedAt: Schema.Union([Schema.String, Schema.Null]),
        queryId: Schema.Number,
        registrar: Schema.Union([Schema.String, Schema.Null]),
        similarityScore: Schema.Number,
        urlScanId: Schema.Union([Schema.String, Schema.Null]),
        contentType: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        imageData: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }).pipe(
        Schema.encodeKeys({
          id: "id",
          domain: "domain",
          matchedAt: "matched_at",
          queryId: "query_id",
          registrar: "registrar",
          similarityScore: "similarity_score",
          urlScanId: "url_scan_id",
          contentType: "content_type",
          imageData: "image_data",
        }),
      ),
    ),
    total: Schema.Number,
  },
) as unknown as Schema.Schema<GetV2LogoMatchResponse>;

export type GetV2LogoMatchError = DefaultErrors;

export const getV2LogoMatch: API.OperationMethod<
  GetV2LogoMatchRequest,
  GetV2LogoMatchResponse,
  GetV2LogoMatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetV2LogoMatchRequest,
  output: GetV2LogoMatchResponse,
  errors: [],
}));

// =============================================================================
// V2Match
// =============================================================================

export interface GetV2MatchRequest {
  /** Path param */
  accountId: string;
  /** Query param: Query ID or comma-separated list of Query IDs. When multiple IDs are provided, matches are deduplicated across queries and each match includes a match_details array with per-match query m */
  queryId: string[];
  /** Query param: Filter matches by domain name (substring match) */
  domainSearch?: string;
  /** Query param */
  includeDismissed?: string;
  /** Query param */
  includeDomainId?: string;
  /** Query param */
  limit?: string;
  /** Query param */
  offset?: string;
  /** Query param: Sort order. Options: 'asc' (ascending) or 'desc' (descending) */
  order?: "asc" | "desc" | (string & {});
  /** Query param: Column to sort by. Options: 'domain', 'first_seen', or 'registrar' */
  orderBy?: "domain" | "first_seen" | "registrar" | (string & {});
}

export const GetV2MatchRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  queryId: Schema.Array(Schema.String).pipe(T.HttpQuery("query_id")),
  domainSearch: Schema.optional(Schema.String).pipe(
    T.HttpQuery("domain_search"),
  ),
  includeDismissed: Schema.optional(Schema.String).pipe(
    T.HttpQuery("include_dismissed"),
  ),
  includeDomainId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("include_domain_id"),
  ),
  limit: Schema.optional(Schema.String).pipe(T.HttpQuery("limit")),
  offset: Schema.optional(Schema.String).pipe(T.HttpQuery("offset")),
  order: Schema.optional(
    Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
  ).pipe(T.HttpQuery("order")),
  orderBy: Schema.optional(
    Schema.Union([
      Schema.Literals(["domain", "first_seen", "registrar"]),
      Schema.String,
    ]),
  ).pipe(T.HttpQuery("orderBy")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/cloudforce-one/v2/brand-protection/domain/matches",
  }),
) as unknown as Schema.Schema<GetV2MatchRequest>;

export interface GetV2MatchResponse {
  matches: {
    domain: string;
    firstSeen: string;
    publicScans: { submissionId: string } | null;
    registrar: string | null;
    scanStatus: string;
    scanSubmissionId: number | null;
    source: string | null;
    dismissed?: boolean | null;
    matchDetails?:
      | {
          dismissed: boolean;
          matchId: number;
          queryId: number;
          queryTag: string | null;
        }[]
      | null;
  }[];
  total: number;
}

export const GetV2MatchResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  matches: Schema.Array(
    Schema.Struct({
      domain: Schema.String,
      firstSeen: Schema.String,
      publicScans: Schema.Union([
        Schema.Struct({
          submissionId: Schema.String,
        }).pipe(Schema.encodeKeys({ submissionId: "submission_id" })),
        Schema.Null,
      ]),
      registrar: Schema.Union([Schema.String, Schema.Null]),
      scanStatus: Schema.String,
      scanSubmissionId: Schema.Union([Schema.Number, Schema.Null]),
      source: Schema.Union([Schema.String, Schema.Null]),
      dismissed: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      matchDetails: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              dismissed: Schema.Boolean,
              matchId: Schema.Number,
              queryId: Schema.Number,
              queryTag: Schema.Union([Schema.String, Schema.Null]),
            }).pipe(
              Schema.encodeKeys({
                dismissed: "dismissed",
                matchId: "match_id",
                queryId: "query_id",
                queryTag: "query_tag",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        domain: "domain",
        firstSeen: "first_seen",
        publicScans: "public_scans",
        registrar: "registrar",
        scanStatus: "scan_status",
        scanSubmissionId: "scan_submission_id",
        source: "source",
        dismissed: "dismissed",
        matchDetails: "match_details",
      }),
    ),
  ),
  total: Schema.Number,
}) as unknown as Schema.Schema<GetV2MatchResponse>;

export type GetV2MatchError = DefaultErrors;

export const getV2Match: API.OperationMethod<
  GetV2MatchRequest,
  GetV2MatchResponse,
  GetV2MatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetV2MatchRequest,
  output: GetV2MatchResponse,
  errors: [],
}));

// =============================================================================
// V2Query
// =============================================================================

export interface GetV2QueryRequest {
  /** Path param */
  accountId: string;
  /** Query param */
  id?: string;
}

export const GetV2QueryRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  id: Schema.optional(Schema.String).pipe(T.HttpQuery("id")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/cloudforce-one/v2/brand-protection/domain/queries",
  }),
) as unknown as Schema.Schema<GetV2QueryRequest>;

export type GetV2QueryResponse = {
  created: string;
  parameters: {
    stringMatches: { maxEditDistance: number; pattern: string }[];
    maxTime?: string | null;
    minTime?: string | null;
  } | null;
  queryId: number;
  queryTag: string;
  scan: boolean;
  updated: string;
}[];

export const GetV2QueryResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    created: Schema.String,
    parameters: Schema.Union([
      Schema.Struct({
        stringMatches: Schema.Array(
          Schema.Struct({
            maxEditDistance: Schema.Number,
            pattern: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              maxEditDistance: "max_edit_distance",
              pattern: "pattern",
            }),
          ),
        ),
        maxTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        minTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }).pipe(
        Schema.encodeKeys({
          stringMatches: "string_matches",
          maxTime: "max_time",
          minTime: "min_time",
        }),
      ),
      Schema.Null,
    ]),
    queryId: Schema.Number,
    queryTag: Schema.String,
    scan: Schema.Boolean,
    updated: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      created: "created",
      parameters: "parameters",
      queryId: "query_id",
      queryTag: "query_tag",
      scan: "scan",
      updated: "updated",
    }),
  ),
) as unknown as Schema.Schema<GetV2QueryResponse>;

export type GetV2QueryError = DefaultErrors;

export const getV2Query: API.OperationMethod<
  GetV2QueryRequest,
  GetV2QueryResponse,
  GetV2QueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetV2QueryRequest,
  output: GetV2QueryResponse,
  errors: [],
}));
