/**
 * Cloudflare DLS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service dls
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Region
// =============================================================================

export interface GetRegionRequest {
  regionId: string;
  accountId: number;
}

export const GetRegionRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  regionId: Schema.String.pipe(T.HttpPath("regionId")),
  accountId: Schema.Number.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/dls/regions/{regionId}",
  }),
) as unknown as Schema.Schema<GetRegionRequest>;

export interface GetRegionResponse {
  id: string;
  createdOn: string;
  modifiedOn: string;
  name: string;
  regionKey: string;
  version: number;
  versionCreatedOn: string;
}

export const GetRegionResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  createdOn: Schema.String,
  modifiedOn: Schema.String,
  name: Schema.String,
  regionKey: Schema.String,
  version: Schema.Number,
  versionCreatedOn: Schema.String,
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      createdOn: "created_on",
      modifiedOn: "modified_on",
      name: "name",
      regionKey: "region_key",
      version: "version",
      versionCreatedOn: "version_created_on",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetRegionResponse>;

export type GetRegionError = DefaultErrors;

export const getRegion: API.OperationMethod<
  GetRegionRequest,
  GetRegionResponse,
  GetRegionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRegionRequest,
  output: GetRegionResponse,
  errors: [],
}));

export interface ListRegionsRequest {
  /** Path param */
  accountId: number;
  perPage?: number;
  cursor?: string;
  /** Query param: Filter regions by type. Omit to return all regions. */
  type?: "managed" | "custom" | (string & {});
}

export const ListRegionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.Number.pipe(T.HttpPath("account_id")),
  perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
  cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
  type: Schema.optional(
    Schema.Union([Schema.Literals(["managed", "custom"]), Schema.String]),
  ).pipe(T.HttpQuery("type")),
}).pipe(
  T.Http({ method: "GET", path: "/accounts/{account_id}/dls/regions" }),
) as unknown as Schema.Schema<ListRegionsRequest>;

export interface ListRegionsResponse {
  result: {
    id: string;
    createdOn: string;
    modifiedOn: string;
    name: string;
    regionKey: string;
    version: number;
    versionCreatedOn: string;
  }[];
  resultInfo?: {
    count?: number | null;
    cursor?: string | null;
    perPage?: number | null;
  } | null;
}

export const ListRegionsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      createdOn: Schema.String,
      modifiedOn: Schema.String,
      name: Schema.String,
      regionKey: Schema.String,
      version: Schema.Number,
      versionCreatedOn: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        createdOn: "created_on",
        modifiedOn: "modified_on",
        name: "name",
        regionKey: "region_key",
        version: "version",
        versionCreatedOn: "version_created_on",
      }),
    ),
  ),
  resultInfo: Schema.optional(
    Schema.Union([
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
      Schema.Null,
    ]),
  ),
}).pipe(
  Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
) as unknown as Schema.Schema<ListRegionsResponse>;

export type ListRegionsError = DefaultErrors;

export const listRegions: API.PaginatedOperationMethod<
  ListRegionsRequest,
  ListRegionsResponse,
  ListRegionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRegionsRequest,
  output: ListRegionsResponse,
  errors: [],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursor",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

// =============================================================================
// RegionalServicePrefixBinding
// =============================================================================

export interface GetRegionalServicePrefixBindingRequest {
  bindingId: string;
  accountId: number;
}

export const GetRegionalServicePrefixBindingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bindingId: Schema.String.pipe(T.HttpPath("bindingId")),
    accountId: Schema.Number.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/dls/regional_services/prefix_bindings/{bindingId}",
    }),
  ) as unknown as Schema.Schema<GetRegionalServicePrefixBindingRequest>;

export interface GetRegionalServicePrefixBindingResponse {
  /** The ID of the binding. */
  id: string;
  /** The CIDR that is bound. */
  cidr: string;
  /** The ID of the parent prefix. */
  prefixId: string;
  /** The region key used for the binding. */
  regionKey: string;
}

export const GetRegionalServicePrefixBindingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    cidr: Schema.String,
    prefixId: Schema.String,
    regionKey: Schema.String,
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        cidr: "cidr",
        prefixId: "prefix_id",
        regionKey: "region_key",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<GetRegionalServicePrefixBindingResponse>;

export type GetRegionalServicePrefixBindingError = DefaultErrors;

export const getRegionalServicePrefixBinding: API.OperationMethod<
  GetRegionalServicePrefixBindingRequest,
  GetRegionalServicePrefixBindingResponse,
  GetRegionalServicePrefixBindingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRegionalServicePrefixBindingRequest,
  output: GetRegionalServicePrefixBindingResponse,
  errors: [],
}));

export interface ListRegionalServicePrefixBindingsRequest {
  /** Path param */
  accountId: number;
  perPage?: number;
  cursor?: string;
}

export const ListRegionalServicePrefixBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.Number.pipe(T.HttpPath("account_id")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/dls/regional_services/prefix_bindings",
    }),
  ) as unknown as Schema.Schema<ListRegionalServicePrefixBindingsRequest>;

export interface ListRegionalServicePrefixBindingsResponse {
  result: { id: string; cidr: string; prefixId: string; regionKey: string }[];
  resultInfo?: {
    count?: number | null;
    cursor?: string | null;
    perPage?: number | null;
  } | null;
}

export const ListRegionalServicePrefixBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        cidr: Schema.String,
        prefixId: Schema.String,
        regionKey: Schema.String,
      }).pipe(
        Schema.encodeKeys({
          id: "id",
          cidr: "cidr",
          prefixId: "prefix_id",
          regionKey: "region_key",
        }),
      ),
    ),
    resultInfo: Schema.optional(
      Schema.Union([
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
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
  ) as unknown as Schema.Schema<ListRegionalServicePrefixBindingsResponse>;

export type ListRegionalServicePrefixBindingsError = DefaultErrors;

export const listRegionalServicePrefixBindings: API.PaginatedOperationMethod<
  ListRegionalServicePrefixBindingsRequest,
  ListRegionalServicePrefixBindingsResponse,
  ListRegionalServicePrefixBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRegionalServicePrefixBindingsRequest,
  output: ListRegionalServicePrefixBindingsResponse,
  errors: [],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursor",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateRegionalServicePrefixBindingRequest {
  /** Path param */
  accountId: number;
  /** Body param: IP prefix in CIDR notation to bind. */
  cidr: string;
  /** Body param: The ID of the parent IP prefix that contains the CIDR. */
  prefixId: string;
  /** Body param: Region key from managed regions (e.g., "us", "eu"). */
  regionKey: string;
}

export const CreateRegionalServicePrefixBindingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.Number.pipe(T.HttpPath("account_id")),
    cidr: Schema.String,
    prefixId: Schema.String,
    regionKey: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      cidr: "cidr",
      prefixId: "prefix_id",
      regionKey: "region_key",
    }),
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/dls/regional_services/prefix_bindings",
    }),
  ) as unknown as Schema.Schema<CreateRegionalServicePrefixBindingRequest>;

export interface CreateRegionalServicePrefixBindingResponse {
  /** The ID of the binding. */
  id: string;
  /** The CIDR that is bound. */
  cidr: string;
  /** The ID of the parent prefix. */
  prefixId: string;
  /** The region key used for the binding. */
  regionKey: string;
}

export const CreateRegionalServicePrefixBindingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    cidr: Schema.String,
    prefixId: Schema.String,
    regionKey: Schema.String,
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        cidr: "cidr",
        prefixId: "prefix_id",
        regionKey: "region_key",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<CreateRegionalServicePrefixBindingResponse>;

export type CreateRegionalServicePrefixBindingError = DefaultErrors;

export const createRegionalServicePrefixBinding: API.OperationMethod<
  CreateRegionalServicePrefixBindingRequest,
  CreateRegionalServicePrefixBindingResponse,
  CreateRegionalServicePrefixBindingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateRegionalServicePrefixBindingRequest,
  output: CreateRegionalServicePrefixBindingResponse,
  errors: [],
}));

export interface PatchRegionalServicePrefixBindingRequest {
  bindingId: string;
  /** Path param */
  accountId: number;
  /** Body param: New region key to assign (e.g., "us", "eu", "cfcanary"). */
  regionKey: string;
}

export const PatchRegionalServicePrefixBindingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bindingId: Schema.String.pipe(T.HttpPath("bindingId")),
    accountId: Schema.Number.pipe(T.HttpPath("account_id")),
    regionKey: Schema.String,
  }).pipe(
    Schema.encodeKeys({ regionKey: "region_key" }),
    T.Http({
      method: "PATCH",
      path: "/accounts/{account_id}/dls/regional_services/prefix_bindings/{bindingId}",
    }),
  ) as unknown as Schema.Schema<PatchRegionalServicePrefixBindingRequest>;

export interface PatchRegionalServicePrefixBindingResponse {
  /** The ID of the binding. */
  id: string;
  /** The CIDR that is bound. */
  cidr: string;
  /** The ID of the parent prefix. */
  prefixId: string;
  /** The region key used for the binding. */
  regionKey: string;
}

export const PatchRegionalServicePrefixBindingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    cidr: Schema.String,
    prefixId: Schema.String,
    regionKey: Schema.String,
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        cidr: "cidr",
        prefixId: "prefix_id",
        regionKey: "region_key",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<PatchRegionalServicePrefixBindingResponse>;

export type PatchRegionalServicePrefixBindingError = DefaultErrors;

export const patchRegionalServicePrefixBinding: API.OperationMethod<
  PatchRegionalServicePrefixBindingRequest,
  PatchRegionalServicePrefixBindingResponse,
  PatchRegionalServicePrefixBindingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchRegionalServicePrefixBindingRequest,
  output: PatchRegionalServicePrefixBindingResponse,
  errors: [],
}));

export interface DeleteRegionalServicePrefixBindingRequest {
  bindingId: string;
  accountId: number;
}

export const DeleteRegionalServicePrefixBindingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bindingId: Schema.String.pipe(T.HttpPath("bindingId")),
    accountId: Schema.Number.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/dls/regional_services/prefix_bindings/{bindingId}",
    }),
  ) as unknown as Schema.Schema<DeleteRegionalServicePrefixBindingRequest>;

export interface DeleteRegionalServicePrefixBindingResponse {
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  success: boolean;
  errors?:
    | {
        code: number;
        message: string;
        documentationUrl?: string | null;
        source?: { pointer?: string | null } | null;
      }[]
    | null;
}

export const DeleteRegionalServicePrefixBindingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.Array(
      Schema.Struct({
        code: Schema.Number,
        message: Schema.String,
        documentationUrl: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        source: Schema.optional(
          Schema.Union([
            Schema.Struct({
              pointer: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          code: "code",
          message: "message",
          documentationUrl: "documentation_url",
          source: "source",
        }),
      ),
    ),
    success: Schema.Boolean,
    errors: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Struct({
            code: Schema.Number,
            message: Schema.String,
            documentationUrl: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            source: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  pointer: Schema.optional(
                    Schema.Union([Schema.String, Schema.Null]),
                  ),
                }),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              code: "code",
              message: "message",
              documentationUrl: "documentation_url",
              source: "source",
            }),
          ),
        ),
        Schema.Null,
      ]),
    ),
  }) as unknown as Schema.Schema<DeleteRegionalServicePrefixBindingResponse>;

export type DeleteRegionalServicePrefixBindingError = DefaultErrors;

export const deleteRegionalServicePrefixBinding: API.OperationMethod<
  DeleteRegionalServicePrefixBindingRequest,
  DeleteRegionalServicePrefixBindingResponse,
  DeleteRegionalServicePrefixBindingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRegionalServicePrefixBindingRequest,
  output: DeleteRegionalServicePrefixBindingResponse,
  errors: [],
}));
