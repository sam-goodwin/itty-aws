/**
 * Cloudflare CUSTOM-CSRS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service custom-csrs
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// CustomCsr
// =============================================================================

const GetCustomCsrBaseFields = {
  customCsrId: Schema.String.pipe(T.HttpPath("customCsrId")),
} as const;

interface GetCustomCsrBaseRequest {
  customCsrId: string;
}

export interface GetCustomCsrForAccountRequest extends GetCustomCsrBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetCustomCsrForZoneRequest extends GetCustomCsrBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetCustomCsrForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...GetCustomCsrBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/custom_csrs/{customCsrId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetCustomCsrForAccountRequest>;

export const GetCustomCsrForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...GetCustomCsrBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/custom_csrs/{customCsrId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetCustomCsrForZoneRequest>;

export interface GetCustomCsrResponse {
  /** Custom CSR identifier tag. */
  id: string;
  /** When the CSR was created. */
  createdAt: string;
  /** The key algorithm used to generate the CSR. */
  keyType: "rsa2048" | "p256v1" | (string & {});
  /** Account identifier associated with this CSR. */
  accountTag?: string | null;
  /** The common name (domain) for the CSR. */
  commonName?: string | null;
  /** Two-letter ISO 3166-1 alpha-2 country code. */
  country?: string | null;
  /** The PEM-encoded Certificate Signing Request. */
  csr?: string | null;
  /** Optional description for the CSR. */
  description?: string | null;
  /** City or locality name. */
  locality?: string | null;
  /** Human-readable name for the CSR. */
  name?: string | null;
  /** Organization name. */
  organization?: string | null;
  /** Organizational unit name. */
  organizationalUnit?: string | null;
  /** Subject Alternative Names included in the CSR. */
  sans?: string[] | null;
  /** State or province name. */
  state?: string | null;
}

export const GetCustomCsrResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      keyType: Schema.Union([
        Schema.Literals(["rsa2048", "p256v1"]),
        Schema.String,
      ]),
      accountTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      commonName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      country: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      csr: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      locality: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      organization: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      organizationalUnit: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      sans: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      state: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          keyType: "key_type",
          accountTag: "account_tag",
          commonName: "common_name",
          country: "country",
          csr: "csr",
          description: "description",
          locality: "locality",
          name: "name",
          organization: "organization",
          organizationalUnit: "organizational_unit",
          sans: "sans",
          state: "state",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetCustomCsrResponse>;

export type GetCustomCsrError = DefaultErrors;

export const getCustomCsrForAccount: API.OperationMethod<
  GetCustomCsrForAccountRequest,
  GetCustomCsrResponse,
  GetCustomCsrError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomCsrForAccountRequest,
  output: GetCustomCsrResponse,
  errors: [],
}));

export const getCustomCsrForZone: API.OperationMethod<
  GetCustomCsrForZoneRequest,
  GetCustomCsrResponse,
  GetCustomCsrError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomCsrForZoneRequest,
  output: GetCustomCsrResponse,
  errors: [],
}));

const ListCustomCsrsBaseFields = {
  page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
  perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
} as const;

interface ListCustomCsrsBaseRequest {
  page?: number;
  perPage?: number;
}

export interface ListCustomCsrsForAccountRequest extends ListCustomCsrsBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface ListCustomCsrsForZoneRequest extends ListCustomCsrsBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const ListCustomCsrsForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...ListCustomCsrsBaseFields,
    }).pipe(
      T.Http({ method: "GET", path: "/accounts/{account_id}/custom_csrs" }),
    ),
  ) as unknown as Schema.Schema<ListCustomCsrsForAccountRequest>;

export const ListCustomCsrsForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...ListCustomCsrsBaseFields,
    }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/custom_csrs" })),
  ) as unknown as Schema.Schema<ListCustomCsrsForZoneRequest>;

export interface ListCustomCsrsResponse {
  result: {
    id: string;
    createdAt: string;
    keyType: "rsa2048" | "p256v1" | (string & {});
    accountTag?: string | null;
    commonName?: string | null;
    country?: string | null;
    csr?: string | null;
    description?: string | null;
    locality?: string | null;
    name?: string | null;
    organization?: string | null;
    organizationalUnit?: string | null;
    sans?: string[] | null;
    state?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListCustomCsrsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          createdAt: Schema.String,
          keyType: Schema.Union([
            Schema.Literals(["rsa2048", "p256v1"]),
            Schema.String,
          ]),
          accountTag: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          commonName: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          country: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          csr: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          description: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          locality: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          organization: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          organizationalUnit: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          sans: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          state: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            createdAt: "created_at",
            keyType: "key_type",
            accountTag: "account_tag",
            commonName: "common_name",
            country: "country",
            csr: "csr",
            description: "description",
            locality: "locality",
            name: "name",
            organization: "organization",
            organizationalUnit: "organizational_unit",
            sans: "sans",
            state: "state",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
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
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListCustomCsrsResponse>;

export type ListCustomCsrsError = DefaultErrors;

export const listCustomCsrsForAccount: API.PaginatedOperationMethod<
  ListCustomCsrsForAccountRequest,
  ListCustomCsrsResponse,
  ListCustomCsrsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomCsrsForAccountRequest,
  output: ListCustomCsrsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export const listCustomCsrsForZone: API.PaginatedOperationMethod<
  ListCustomCsrsForZoneRequest,
  ListCustomCsrsResponse,
  ListCustomCsrsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomCsrsForZoneRequest,
  output: ListCustomCsrsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

const CreateCustomCsrBaseFields = {
  commonName: Schema.String,
  country: Schema.String,
  locality: Schema.String,
  organization: Schema.String,
  sans: Schema.Array(Schema.String),
  state: Schema.String,
  description: Schema.optional(Schema.String),
  keyType: Schema.optional(
    Schema.Union([Schema.Literals(["rsa2048", "p256v1"]), Schema.String]),
  ),
  name: Schema.optional(Schema.String),
  organizationalUnit: Schema.optional(Schema.String),
} as const;

interface CreateCustomCsrBaseRequest {
  /** Body param: The common name (domain) for the CSR. Must be at most 64 characters. */
  commonName: string;
  /** Body param: Two-letter ISO 3166-1 alpha-2 country code. */
  country: string;
  /** Body param: City or locality name. */
  locality: string;
  /** Body param: Organization name. */
  organization: string;
  /** Body param: Subject Alternative Names for the CSR. At least one SAN is required. */
  sans: string[];
  /** Body param: State or province name. */
  state: string;
  /** Body param: Optional description for the CSR. */
  description?: string;
  /** Body param: Key algorithm to use for the CSR. Defaults to rsa2048 if not specified. */
  keyType?: "rsa2048" | "p256v1" | (string & {});
  /** Body param: Human-readable name for the CSR. */
  name?: string;
  /** Body param: Organizational unit name. */
  organizationalUnit?: string;
}

export interface CreateCustomCsrForAccountRequest extends CreateCustomCsrBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface CreateCustomCsrForZoneRequest extends CreateCustomCsrBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const CreateCustomCsrForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...CreateCustomCsrBaseFields,
    }).pipe(
      Schema.encodeKeys({
        commonName: "common_name",
        country: "country",
        locality: "locality",
        organization: "organization",
        sans: "sans",
        state: "state",
        description: "description",
        keyType: "key_type",
        name: "name",
        organizationalUnit: "organizational_unit",
      }),
      T.Http({ method: "POST", path: "/accounts/{account_id}/custom_csrs" }),
    ),
  ) as unknown as Schema.Schema<CreateCustomCsrForAccountRequest>;

export const CreateCustomCsrForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...CreateCustomCsrBaseFields,
    }).pipe(
      Schema.encodeKeys({
        commonName: "common_name",
        country: "country",
        locality: "locality",
        organization: "organization",
        sans: "sans",
        state: "state",
        description: "description",
        keyType: "key_type",
        name: "name",
        organizationalUnit: "organizational_unit",
      }),
      T.Http({ method: "POST", path: "/zones/{zone_id}/custom_csrs" }),
    ),
  ) as unknown as Schema.Schema<CreateCustomCsrForZoneRequest>;

export interface CreateCustomCsrResponse {
  /** Custom CSR identifier tag. */
  id: string;
  /** When the CSR was created. */
  createdAt: string;
  /** The key algorithm used to generate the CSR. */
  keyType: "rsa2048" | "p256v1" | (string & {});
  /** Account identifier associated with this CSR. */
  accountTag?: string | null;
  /** The common name (domain) for the CSR. */
  commonName?: string | null;
  /** Two-letter ISO 3166-1 alpha-2 country code. */
  country?: string | null;
  /** The PEM-encoded Certificate Signing Request. */
  csr?: string | null;
  /** Optional description for the CSR. */
  description?: string | null;
  /** City or locality name. */
  locality?: string | null;
  /** Human-readable name for the CSR. */
  name?: string | null;
  /** Organization name. */
  organization?: string | null;
  /** Organizational unit name. */
  organizationalUnit?: string | null;
  /** Subject Alternative Names included in the CSR. */
  sans?: string[] | null;
  /** State or province name. */
  state?: string | null;
}

export const CreateCustomCsrResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      keyType: Schema.Union([
        Schema.Literals(["rsa2048", "p256v1"]),
        Schema.String,
      ]),
      accountTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      commonName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      country: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      csr: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      locality: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      organization: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      organizationalUnit: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      sans: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      state: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          keyType: "key_type",
          accountTag: "account_tag",
          commonName: "common_name",
          country: "country",
          csr: "csr",
          description: "description",
          locality: "locality",
          name: "name",
          organization: "organization",
          organizationalUnit: "organizational_unit",
          sans: "sans",
          state: "state",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateCustomCsrResponse>;

export type CreateCustomCsrError = DefaultErrors;

export const createCustomCsrForAccount: API.OperationMethod<
  CreateCustomCsrForAccountRequest,
  CreateCustomCsrResponse,
  CreateCustomCsrError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCustomCsrForAccountRequest,
  output: CreateCustomCsrResponse,
  errors: [],
}));

export const createCustomCsrForZone: API.OperationMethod<
  CreateCustomCsrForZoneRequest,
  CreateCustomCsrResponse,
  CreateCustomCsrError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCustomCsrForZoneRequest,
  output: CreateCustomCsrResponse,
  errors: [],
}));

const DeleteCustomCsrBaseFields = {
  customCsrId: Schema.String.pipe(T.HttpPath("customCsrId")),
} as const;

interface DeleteCustomCsrBaseRequest {
  customCsrId: string;
}

export interface DeleteCustomCsrForAccountRequest extends DeleteCustomCsrBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface DeleteCustomCsrForZoneRequest extends DeleteCustomCsrBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const DeleteCustomCsrForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...DeleteCustomCsrBaseFields,
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/custom_csrs/{customCsrId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteCustomCsrForAccountRequest>;

export const DeleteCustomCsrForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...DeleteCustomCsrBaseFields,
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/custom_csrs/{customCsrId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteCustomCsrForZoneRequest>;

export interface DeleteCustomCsrResponse {
  /** Custom CSR identifier tag. */
  id?: string | null;
}

export const DeleteCustomCsrResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteCustomCsrResponse>;

export type DeleteCustomCsrError = DefaultErrors;

export const deleteCustomCsrForAccount: API.OperationMethod<
  DeleteCustomCsrForAccountRequest,
  DeleteCustomCsrResponse,
  DeleteCustomCsrError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCustomCsrForAccountRequest,
  output: DeleteCustomCsrResponse,
  errors: [],
}));

export const deleteCustomCsrForZone: API.OperationMethod<
  DeleteCustomCsrForZoneRequest,
  DeleteCustomCsrResponse,
  DeleteCustomCsrError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCustomCsrForZoneRequest,
  output: DeleteCustomCsrResponse,
  errors: [],
}));
