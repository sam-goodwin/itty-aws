/**
 * Cloudflare DDOS-PROTECTION API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service ddos-protection
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Errors
// =============================================================================

export class AdvancedTcpProtectionNotEntitled extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<AdvancedTcpProtectionNotEntitled>()(
    "AdvancedTcpProtectionNotEntitled",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 8888 }],
) {}

export class AllowlistEntryNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<AllowlistEntryNotFound>()("AllowlistEntryNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404 }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class SynProtectionFilterNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SynProtectionFilterNotFound>()(
    "SynProtectionFilterNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 404 }],
) {}

export class SynProtectionRuleNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SynProtectionRuleNotFound>()(
    "SynProtectionRuleNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 404 }],
) {}

export class TcpFlowProtectionFilterNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TcpFlowProtectionFilterNotFound>()(
    "TcpFlowProtectionFilterNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 404 }],
) {}

export class TcpFlowProtectionRuleNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TcpFlowProtectionRuleNotFound>()(
    "TcpFlowProtectionRuleNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 404 }],
) {}

// =============================================================================
// AdvancedTcpProtectionAllowlist
// =============================================================================

export interface ListAdvancedTcpProtectionAllowlistsRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: The direction of ordering (ASC or DESC). Defaults to 'ASC'. */
  direction?: string;
  /** Query param: The field to order by. Defaults to 'prefix'. */
  order?: string;
}

export const ListAdvancedTcpProtectionAllowlistsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(Schema.String).pipe(T.HttpQuery("direction")),
      order: Schema.optional(Schema.String).pipe(T.HttpQuery("order")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist",
      }),
    ),
  ) as unknown as Schema.Schema<ListAdvancedTcpProtectionAllowlistsRequest>;

export interface ListAdvancedTcpProtectionAllowlistsResponse {
  result: {
    id: string;
    comment: string;
    createdOn: string;
    enabled: boolean;
    modifiedOn: string;
    prefix: string;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListAdvancedTcpProtectionAllowlistsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          comment: Schema.String,
          createdOn: Schema.String,
          enabled: Schema.Boolean,
          modifiedOn: Schema.String,
          prefix: Schema.String,
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            comment: "comment",
            createdOn: "created_on",
            enabled: "enabled",
            modifiedOn: "modified_on",
            prefix: "prefix",
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
  ) as unknown as Schema.Schema<ListAdvancedTcpProtectionAllowlistsResponse>;

export type ListAdvancedTcpProtectionAllowlistsError =
  | DefaultErrors
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const listAdvancedTcpProtectionAllowlists: API.PaginatedOperationMethod<
  ListAdvancedTcpProtectionAllowlistsRequest,
  ListAdvancedTcpProtectionAllowlistsResponse,
  ListAdvancedTcpProtectionAllowlistsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAdvancedTcpProtectionAllowlistsRequest,
  output: ListAdvancedTcpProtectionAllowlistsResponse,
  errors: [AdvancedTcpProtectionNotEntitled, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateAdvancedTcpProtectionAllowlistRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: An comment describing the allowlist prefix. */
  comment: string;
  /** Body param: Whether to enable the allowlist prefix into effect. */
  enabled: boolean;
  /** Body param: The allowlist prefix to add in CIDR format. */
  prefix: string;
}

export const CreateAdvancedTcpProtectionAllowlistRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      comment: Schema.String,
      enabled: Schema.Boolean,
      prefix: Schema.String,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist",
      }),
    ),
  ) as unknown as Schema.Schema<CreateAdvancedTcpProtectionAllowlistRequest>;

export interface CreateAdvancedTcpProtectionAllowlistResponse {
  /** The unique ID of the allowlist prefix. */
  id: string;
  /** An optional comment describing the allowlist prefix. */
  comment: string;
  /** The creation timestamp of the allowlist prefix. */
  createdOn: string;
  /** Whether to enable the allowlist prefix into effect. Defaults to false. */
  enabled: boolean;
  /** The last modification timestamp of the allowlist prefix. */
  modifiedOn: string;
  /** The allowlist prefix in CIDR format. */
  prefix: string;
}

export const CreateAdvancedTcpProtectionAllowlistResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      comment: Schema.String,
      createdOn: Schema.String,
      enabled: Schema.Boolean,
      modifiedOn: Schema.String,
      prefix: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comment: "comment",
          createdOn: "created_on",
          enabled: "enabled",
          modifiedOn: "modified_on",
          prefix: "prefix",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateAdvancedTcpProtectionAllowlistResponse>;

export type CreateAdvancedTcpProtectionAllowlistError =
  | DefaultErrors
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const createAdvancedTcpProtectionAllowlist: API.OperationMethod<
  CreateAdvancedTcpProtectionAllowlistRequest,
  CreateAdvancedTcpProtectionAllowlistResponse,
  CreateAdvancedTcpProtectionAllowlistError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAdvancedTcpProtectionAllowlistRequest,
  output: CreateAdvancedTcpProtectionAllowlistResponse,
  errors: [AdvancedTcpProtectionNotEntitled, Forbidden],
}));

export interface BulkDeleteAdvancedTcpProtectionAllowlistsRequest {
  /** Identifier. */
  accountId: string;
}

export const BulkDeleteAdvancedTcpProtectionAllowlistsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist",
      }),
    ),
  ) as unknown as Schema.Schema<BulkDeleteAdvancedTcpProtectionAllowlistsRequest>;

export interface BulkDeleteAdvancedTcpProtectionAllowlistsResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const BulkDeleteAdvancedTcpProtectionAllowlistsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(
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
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Schema<BulkDeleteAdvancedTcpProtectionAllowlistsResponse>;

export type BulkDeleteAdvancedTcpProtectionAllowlistsError = DefaultErrors;

export const bulkDeleteAdvancedTcpProtectionAllowlists: API.OperationMethod<
  BulkDeleteAdvancedTcpProtectionAllowlistsRequest,
  BulkDeleteAdvancedTcpProtectionAllowlistsResponse,
  BulkDeleteAdvancedTcpProtectionAllowlistsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkDeleteAdvancedTcpProtectionAllowlistsRequest,
  output: BulkDeleteAdvancedTcpProtectionAllowlistsResponse,
  errors: [],
}));

// =============================================================================
// AdvancedTcpProtectionAllowlistItem
// =============================================================================

export interface GetAdvancedTcpProtectionAllowlistItemRequest {
  prefixId: string;
  /** Identifier. */
  accountId: string;
}

export const GetAdvancedTcpProtectionAllowlistItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      prefixId: Schema.String.pipe(T.HttpPath("prefixId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist/{prefixId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetAdvancedTcpProtectionAllowlistItemRequest>;

export interface GetAdvancedTcpProtectionAllowlistItemResponse {
  /** The unique ID of the allowlist prefix. */
  id: string;
  /** An optional comment describing the allowlist prefix. */
  comment: string;
  /** The creation timestamp of the allowlist prefix. */
  createdOn: string;
  /** Whether to enable the allowlist prefix into effect. Defaults to false. */
  enabled: boolean;
  /** The last modification timestamp of the allowlist prefix. */
  modifiedOn: string;
  /** The allowlist prefix in CIDR format. */
  prefix: string;
}

export const GetAdvancedTcpProtectionAllowlistItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      comment: Schema.String,
      createdOn: Schema.String,
      enabled: Schema.Boolean,
      modifiedOn: Schema.String,
      prefix: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comment: "comment",
          createdOn: "created_on",
          enabled: "enabled",
          modifiedOn: "modified_on",
          prefix: "prefix",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetAdvancedTcpProtectionAllowlistItemResponse>;

export type GetAdvancedTcpProtectionAllowlistItemError =
  | DefaultErrors
  | AllowlistEntryNotFound
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const getAdvancedTcpProtectionAllowlistItem: API.OperationMethod<
  GetAdvancedTcpProtectionAllowlistItemRequest,
  GetAdvancedTcpProtectionAllowlistItemResponse,
  GetAdvancedTcpProtectionAllowlistItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAdvancedTcpProtectionAllowlistItemRequest,
  output: GetAdvancedTcpProtectionAllowlistItemResponse,
  errors: [AllowlistEntryNotFound, AdvancedTcpProtectionNotEntitled, Forbidden],
}));

export interface PatchAdvancedTcpProtectionAllowlistItemRequest {
  prefixId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: A comment describing the allowlist prefix. Optional. */
  comment?: string;
  /** Body param: Whether to enable the allowlist prefix into effect. Optional. */
  enabled?: boolean;
}

export const PatchAdvancedTcpProtectionAllowlistItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      prefixId: Schema.String.pipe(T.HttpPath("prefixId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      comment: Schema.optional(Schema.String),
      enabled: Schema.optional(Schema.Boolean),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist/{prefixId}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchAdvancedTcpProtectionAllowlistItemRequest>;

export interface PatchAdvancedTcpProtectionAllowlistItemResponse {
  /** The unique ID of the allowlist prefix. */
  id: string;
  /** An optional comment describing the allowlist prefix. */
  comment: string;
  /** The creation timestamp of the allowlist prefix. */
  createdOn: string;
  /** Whether to enable the allowlist prefix into effect. Defaults to false. */
  enabled: boolean;
  /** The last modification timestamp of the allowlist prefix. */
  modifiedOn: string;
  /** The allowlist prefix in CIDR format. */
  prefix: string;
}

export const PatchAdvancedTcpProtectionAllowlistItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      comment: Schema.String,
      createdOn: Schema.String,
      enabled: Schema.Boolean,
      modifiedOn: Schema.String,
      prefix: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comment: "comment",
          createdOn: "created_on",
          enabled: "enabled",
          modifiedOn: "modified_on",
          prefix: "prefix",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchAdvancedTcpProtectionAllowlistItemResponse>;

export type PatchAdvancedTcpProtectionAllowlistItemError =
  | DefaultErrors
  | AllowlistEntryNotFound
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const patchAdvancedTcpProtectionAllowlistItem: API.OperationMethod<
  PatchAdvancedTcpProtectionAllowlistItemRequest,
  PatchAdvancedTcpProtectionAllowlistItemResponse,
  PatchAdvancedTcpProtectionAllowlistItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAdvancedTcpProtectionAllowlistItemRequest,
  output: PatchAdvancedTcpProtectionAllowlistItemResponse,
  errors: [AllowlistEntryNotFound, AdvancedTcpProtectionNotEntitled, Forbidden],
}));

export interface DeleteAdvancedTcpProtectionAllowlistItemRequest {
  prefixId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteAdvancedTcpProtectionAllowlistItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      prefixId: Schema.String.pipe(T.HttpPath("prefixId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist/{prefixId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteAdvancedTcpProtectionAllowlistItemRequest>;

export interface DeleteAdvancedTcpProtectionAllowlistItemResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const DeleteAdvancedTcpProtectionAllowlistItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(
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
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Schema<DeleteAdvancedTcpProtectionAllowlistItemResponse>;

export type DeleteAdvancedTcpProtectionAllowlistItemError =
  | DefaultErrors
  | AllowlistEntryNotFound
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const deleteAdvancedTcpProtectionAllowlistItem: API.OperationMethod<
  DeleteAdvancedTcpProtectionAllowlistItemRequest,
  DeleteAdvancedTcpProtectionAllowlistItemResponse,
  DeleteAdvancedTcpProtectionAllowlistItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAdvancedTcpProtectionAllowlistItemRequest,
  output: DeleteAdvancedTcpProtectionAllowlistItemResponse,
  errors: [AllowlistEntryNotFound, AdvancedTcpProtectionNotEntitled, Forbidden],
}));

// =============================================================================
// AdvancedTcpProtectionPrefix
// =============================================================================

export interface ListAdvancedTcpProtectionPrefixesRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: The direction of ordering (ASC or DESC). Defaults to 'ASC'. */
  direction?: string;
  /** Query param: The field to order by. Defaults to 'prefix'. */
  order?: string;
}

export const ListAdvancedTcpProtectionPrefixesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(Schema.String).pipe(T.HttpQuery("direction")),
      order: Schema.optional(Schema.String).pipe(T.HttpQuery("order")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes",
      }),
    ),
  ) as unknown as Schema.Schema<ListAdvancedTcpProtectionPrefixesRequest>;

export interface ListAdvancedTcpProtectionPrefixesResponse {
  result: {
    id: string;
    comment: string;
    createdOn: string;
    excluded: boolean;
    modifiedOn: string;
    prefix: string;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListAdvancedTcpProtectionPrefixesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          comment: Schema.String,
          createdOn: Schema.String,
          excluded: Schema.Boolean,
          modifiedOn: Schema.String,
          prefix: Schema.String,
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            comment: "comment",
            createdOn: "created_on",
            excluded: "excluded",
            modifiedOn: "modified_on",
            prefix: "prefix",
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
  ) as unknown as Schema.Schema<ListAdvancedTcpProtectionPrefixesResponse>;

export type ListAdvancedTcpProtectionPrefixesError = DefaultErrors;

export const listAdvancedTcpProtectionPrefixes: API.PaginatedOperationMethod<
  ListAdvancedTcpProtectionPrefixesRequest,
  ListAdvancedTcpProtectionPrefixesResponse,
  ListAdvancedTcpProtectionPrefixesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAdvancedTcpProtectionPrefixesRequest,
  output: ListAdvancedTcpProtectionPrefixesResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateAdvancedTcpProtectionPrefixRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: A comment describing the prefix. */
  comment: string;
  /** Body param: Whether to exclude the prefix from protection. */
  excluded: boolean;
  /** Body param: The prefix to add in CIDR format. */
  prefix: string;
}

export const CreateAdvancedTcpProtectionPrefixRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      comment: Schema.String,
      excluded: Schema.Boolean,
      prefix: Schema.String,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes",
      }),
    ),
  ) as unknown as Schema.Schema<CreateAdvancedTcpProtectionPrefixRequest>;

export interface CreateAdvancedTcpProtectionPrefixResponse {
  /** The unique ID of the prefix. */
  id: string;
  /** A comment describing the prefix. */
  comment: string;
  /** The creation timestamp of the prefix. */
  createdOn: string;
  /** Whether to exclude the prefix from protection. */
  excluded: boolean;
  /** The last modification timestamp of the prefix. */
  modifiedOn: string;
  /** The prefix in CIDR format. */
  prefix: string;
}

export const CreateAdvancedTcpProtectionPrefixResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      comment: Schema.String,
      createdOn: Schema.String,
      excluded: Schema.Boolean,
      modifiedOn: Schema.String,
      prefix: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comment: "comment",
          createdOn: "created_on",
          excluded: "excluded",
          modifiedOn: "modified_on",
          prefix: "prefix",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateAdvancedTcpProtectionPrefixResponse>;

export type CreateAdvancedTcpProtectionPrefixError = DefaultErrors;

export const createAdvancedTcpProtectionPrefix: API.OperationMethod<
  CreateAdvancedTcpProtectionPrefixRequest,
  CreateAdvancedTcpProtectionPrefixResponse,
  CreateAdvancedTcpProtectionPrefixError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAdvancedTcpProtectionPrefixRequest,
  output: CreateAdvancedTcpProtectionPrefixResponse,
  errors: [],
}));

export interface BulkCreateAdvancedTcpProtectionPrefixesRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  body: { comment: string; excluded: boolean; prefix: string }[];
}

export const BulkCreateAdvancedTcpProtectionPrefixesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.Array(
        Schema.Struct({
          comment: Schema.String,
          excluded: Schema.Boolean,
          prefix: Schema.String,
        }),
      ).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes/bulk",
      }),
    ),
  ) as unknown as Schema.Schema<BulkCreateAdvancedTcpProtectionPrefixesRequest>;

export interface BulkCreateAdvancedTcpProtectionPrefixesResponse {
  result: {
    id: string;
    comment: string;
    createdOn: string;
    excluded: boolean;
    modifiedOn: string;
    prefix: string;
  }[];
}

export const BulkCreateAdvancedTcpProtectionPrefixesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          comment: Schema.String,
          createdOn: Schema.String,
          excluded: Schema.Boolean,
          modifiedOn: Schema.String,
          prefix: Schema.String,
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            comment: "comment",
            createdOn: "created_on",
            excluded: "excluded",
            modifiedOn: "modified_on",
            prefix: "prefix",
          }),
        ),
      ),
    }),
  ) as unknown as Schema.Schema<BulkCreateAdvancedTcpProtectionPrefixesResponse>;

export type BulkCreateAdvancedTcpProtectionPrefixesError = DefaultErrors;

export const bulkCreateAdvancedTcpProtectionPrefixes: API.PaginatedOperationMethod<
  BulkCreateAdvancedTcpProtectionPrefixesRequest,
  BulkCreateAdvancedTcpProtectionPrefixesResponse,
  BulkCreateAdvancedTcpProtectionPrefixesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: BulkCreateAdvancedTcpProtectionPrefixesRequest,
  output: BulkCreateAdvancedTcpProtectionPrefixesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface BulkDeleteAdvancedTcpProtectionPrefixesRequest {
  /** Identifier. */
  accountId: string;
}

export const BulkDeleteAdvancedTcpProtectionPrefixesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes",
      }),
    ),
  ) as unknown as Schema.Schema<BulkDeleteAdvancedTcpProtectionPrefixesRequest>;

export interface BulkDeleteAdvancedTcpProtectionPrefixesResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const BulkDeleteAdvancedTcpProtectionPrefixesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(
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
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Schema<BulkDeleteAdvancedTcpProtectionPrefixesResponse>;

export type BulkDeleteAdvancedTcpProtectionPrefixesError = DefaultErrors;

export const bulkDeleteAdvancedTcpProtectionPrefixes: API.OperationMethod<
  BulkDeleteAdvancedTcpProtectionPrefixesRequest,
  BulkDeleteAdvancedTcpProtectionPrefixesResponse,
  BulkDeleteAdvancedTcpProtectionPrefixesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkDeleteAdvancedTcpProtectionPrefixesRequest,
  output: BulkDeleteAdvancedTcpProtectionPrefixesResponse,
  errors: [],
}));

// =============================================================================
// AdvancedTcpProtectionPrefixItem
// =============================================================================

export interface GetAdvancedTcpProtectionPrefixItemRequest {
  prefixId: string;
  /** Identifier. */
  accountId: string;
}

export const GetAdvancedTcpProtectionPrefixItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      prefixId: Schema.String.pipe(T.HttpPath("prefixId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes/{prefixId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetAdvancedTcpProtectionPrefixItemRequest>;

export interface GetAdvancedTcpProtectionPrefixItemResponse {
  /** The unique ID of the prefix. */
  id: string;
  /** A comment describing the prefix. */
  comment: string;
  /** The creation timestamp of the prefix. */
  createdOn: string;
  /** Whether to exclude the prefix from protection. */
  excluded: boolean;
  /** The last modification timestamp of the prefix. */
  modifiedOn: string;
  /** The prefix in CIDR format. */
  prefix: string;
}

export const GetAdvancedTcpProtectionPrefixItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      comment: Schema.String,
      createdOn: Schema.String,
      excluded: Schema.Boolean,
      modifiedOn: Schema.String,
      prefix: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comment: "comment",
          createdOn: "created_on",
          excluded: "excluded",
          modifiedOn: "modified_on",
          prefix: "prefix",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetAdvancedTcpProtectionPrefixItemResponse>;

export type GetAdvancedTcpProtectionPrefixItemError = DefaultErrors;

export const getAdvancedTcpProtectionPrefixItem: API.OperationMethod<
  GetAdvancedTcpProtectionPrefixItemRequest,
  GetAdvancedTcpProtectionPrefixItemResponse,
  GetAdvancedTcpProtectionPrefixItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAdvancedTcpProtectionPrefixItemRequest,
  output: GetAdvancedTcpProtectionPrefixItemResponse,
  errors: [],
}));

export interface PatchAdvancedTcpProtectionPrefixItemRequest {
  prefixId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: A new comment for the prefix. Optional. */
  comment?: string;
  /** Body param: Whether to exclude the prefix from protection. Optional. */
  excluded?: boolean;
}

export const PatchAdvancedTcpProtectionPrefixItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      prefixId: Schema.String.pipe(T.HttpPath("prefixId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      comment: Schema.optional(Schema.String),
      excluded: Schema.optional(Schema.Boolean),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes/{prefixId}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchAdvancedTcpProtectionPrefixItemRequest>;

export interface PatchAdvancedTcpProtectionPrefixItemResponse {
  /** The unique ID of the prefix. */
  id: string;
  /** A comment describing the prefix. */
  comment: string;
  /** The creation timestamp of the prefix. */
  createdOn: string;
  /** Whether to exclude the prefix from protection. */
  excluded: boolean;
  /** The last modification timestamp of the prefix. */
  modifiedOn: string;
  /** The prefix in CIDR format. */
  prefix: string;
}

export const PatchAdvancedTcpProtectionPrefixItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      comment: Schema.String,
      createdOn: Schema.String,
      excluded: Schema.Boolean,
      modifiedOn: Schema.String,
      prefix: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comment: "comment",
          createdOn: "created_on",
          excluded: "excluded",
          modifiedOn: "modified_on",
          prefix: "prefix",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchAdvancedTcpProtectionPrefixItemResponse>;

export type PatchAdvancedTcpProtectionPrefixItemError = DefaultErrors;

export const patchAdvancedTcpProtectionPrefixItem: API.OperationMethod<
  PatchAdvancedTcpProtectionPrefixItemRequest,
  PatchAdvancedTcpProtectionPrefixItemResponse,
  PatchAdvancedTcpProtectionPrefixItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAdvancedTcpProtectionPrefixItemRequest,
  output: PatchAdvancedTcpProtectionPrefixItemResponse,
  errors: [],
}));

export interface DeleteAdvancedTcpProtectionPrefixItemRequest {
  prefixId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteAdvancedTcpProtectionPrefixItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      prefixId: Schema.String.pipe(T.HttpPath("prefixId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes/{prefixId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteAdvancedTcpProtectionPrefixItemRequest>;

export interface DeleteAdvancedTcpProtectionPrefixItemResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const DeleteAdvancedTcpProtectionPrefixItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(
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
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Schema<DeleteAdvancedTcpProtectionPrefixItemResponse>;

export type DeleteAdvancedTcpProtectionPrefixItemError = DefaultErrors;

export const deleteAdvancedTcpProtectionPrefixItem: API.OperationMethod<
  DeleteAdvancedTcpProtectionPrefixItemRequest,
  DeleteAdvancedTcpProtectionPrefixItemResponse,
  DeleteAdvancedTcpProtectionPrefixItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAdvancedTcpProtectionPrefixItemRequest,
  output: DeleteAdvancedTcpProtectionPrefixItemResponse,
  errors: [],
}));

// =============================================================================
// AdvancedTcpProtectionStatus
// =============================================================================

export interface GetAdvancedTcpProtectionStatusRequest {
  /** Identifier. */
  accountId: string;
}

export const GetAdvancedTcpProtectionStatusRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_protection_status",
      }),
    ),
  ) as unknown as Schema.Schema<GetAdvancedTcpProtectionStatusRequest>;

export interface GetAdvancedTcpProtectionStatusResponse {
  enabled: boolean;
}

export const GetAdvancedTcpProtectionStatusResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      enabled: Schema.Boolean,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetAdvancedTcpProtectionStatusResponse>;

export type GetAdvancedTcpProtectionStatusError = DefaultErrors;

export const getAdvancedTcpProtectionStatus: API.OperationMethod<
  GetAdvancedTcpProtectionStatusRequest,
  GetAdvancedTcpProtectionStatusResponse,
  GetAdvancedTcpProtectionStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAdvancedTcpProtectionStatusRequest,
  output: GetAdvancedTcpProtectionStatusResponse,
  errors: [],
}));

export interface PatchAdvancedTcpProtectionStatusRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Enables or disables protection. */
  enabled: boolean;
}

export const PatchAdvancedTcpProtectionStatusRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      enabled: Schema.Boolean,
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_protection_status",
      }),
    ),
  ) as unknown as Schema.Schema<PatchAdvancedTcpProtectionStatusRequest>;

export interface PatchAdvancedTcpProtectionStatusResponse {
  enabled: boolean;
}

export const PatchAdvancedTcpProtectionStatusResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      enabled: Schema.Boolean,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchAdvancedTcpProtectionStatusResponse>;

export type PatchAdvancedTcpProtectionStatusError = DefaultErrors;

export const patchAdvancedTcpProtectionStatus: API.OperationMethod<
  PatchAdvancedTcpProtectionStatusRequest,
  PatchAdvancedTcpProtectionStatusResponse,
  PatchAdvancedTcpProtectionStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAdvancedTcpProtectionStatusRequest,
  output: PatchAdvancedTcpProtectionStatusResponse,
  errors: [],
}));

// =============================================================================
// AdvancedTcpProtectionSynProtectionFilter
// =============================================================================

export interface ListAdvancedTcpProtectionSynProtectionFiltersRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: The direction of ordering (ASC or DESC). Defaults to 'ASC'. */
  direction?: string;
  /** Query param: The mode of the filters to get. Optional. Valid values: 'enabled', 'disabled', 'monitoring'. */
  mode?: string;
  /** Query param: The field to order by. Defaults to 'prefix'. */
  order?: string;
}

export const ListAdvancedTcpProtectionSynProtectionFiltersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(Schema.String).pipe(T.HttpQuery("direction")),
      mode: Schema.optional(Schema.String).pipe(T.HttpQuery("mode")),
      order: Schema.optional(Schema.String).pipe(T.HttpQuery("order")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters",
      }),
    ),
  ) as unknown as Schema.Schema<ListAdvancedTcpProtectionSynProtectionFiltersRequest>;

export interface ListAdvancedTcpProtectionSynProtectionFiltersResponse {
  result: {
    id: string;
    createdOn: string;
    expression: string;
    mode: string;
    modifiedOn: string;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListAdvancedTcpProtectionSynProtectionFiltersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          createdOn: Schema.String,
          expression: Schema.String,
          mode: Schema.String,
          modifiedOn: Schema.String,
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            createdOn: "created_on",
            expression: "expression",
            mode: "mode",
            modifiedOn: "modified_on",
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
  ) as unknown as Schema.Schema<ListAdvancedTcpProtectionSynProtectionFiltersResponse>;

export type ListAdvancedTcpProtectionSynProtectionFiltersError =
  | DefaultErrors
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const listAdvancedTcpProtectionSynProtectionFilters: API.PaginatedOperationMethod<
  ListAdvancedTcpProtectionSynProtectionFiltersRequest,
  ListAdvancedTcpProtectionSynProtectionFiltersResponse,
  ListAdvancedTcpProtectionSynProtectionFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAdvancedTcpProtectionSynProtectionFiltersRequest,
  output: ListAdvancedTcpProtectionSynProtectionFiltersResponse,
  errors: [AdvancedTcpProtectionNotEntitled, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateAdvancedTcpProtectionSynProtectionFilterRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: The filter expression. */
  expression: string;
  /** Body param: The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode: string;
}

export const CreateAdvancedTcpProtectionSynProtectionFilterRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      expression: Schema.String,
      mode: Schema.String,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters",
      }),
    ),
  ) as unknown as Schema.Schema<CreateAdvancedTcpProtectionSynProtectionFilterRequest>;

export interface CreateAdvancedTcpProtectionSynProtectionFilterResponse {
  /** The unique ID of the expression filter. */
  id: string;
  /** The creation timestamp of the expression filter. */
  createdOn: string;
  /** The filter expression. */
  expression: string;
  /** The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode: string;
  /** The last modification timestamp of the expression filter. */
  modifiedOn: string;
}

export const CreateAdvancedTcpProtectionSynProtectionFilterResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdOn: Schema.String,
      expression: Schema.String,
      mode: Schema.String,
      modifiedOn: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdOn: "created_on",
          expression: "expression",
          mode: "mode",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateAdvancedTcpProtectionSynProtectionFilterResponse>;

export type CreateAdvancedTcpProtectionSynProtectionFilterError =
  | DefaultErrors
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const createAdvancedTcpProtectionSynProtectionFilter: API.OperationMethod<
  CreateAdvancedTcpProtectionSynProtectionFilterRequest,
  CreateAdvancedTcpProtectionSynProtectionFilterResponse,
  CreateAdvancedTcpProtectionSynProtectionFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAdvancedTcpProtectionSynProtectionFilterRequest,
  output: CreateAdvancedTcpProtectionSynProtectionFilterResponse,
  errors: [AdvancedTcpProtectionNotEntitled, Forbidden],
}));

export interface BulkDeleteAdvancedTcpProtectionSynProtectionFiltersRequest {
  /** Identifier. */
  accountId: string;
}

export const BulkDeleteAdvancedTcpProtectionSynProtectionFiltersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters",
      }),
    ),
  ) as unknown as Schema.Schema<BulkDeleteAdvancedTcpProtectionSynProtectionFiltersRequest>;

export interface BulkDeleteAdvancedTcpProtectionSynProtectionFiltersResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const BulkDeleteAdvancedTcpProtectionSynProtectionFiltersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(
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
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Schema<BulkDeleteAdvancedTcpProtectionSynProtectionFiltersResponse>;

export type BulkDeleteAdvancedTcpProtectionSynProtectionFiltersError =
  DefaultErrors;

export const bulkDeleteAdvancedTcpProtectionSynProtectionFilters: API.OperationMethod<
  BulkDeleteAdvancedTcpProtectionSynProtectionFiltersRequest,
  BulkDeleteAdvancedTcpProtectionSynProtectionFiltersResponse,
  BulkDeleteAdvancedTcpProtectionSynProtectionFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkDeleteAdvancedTcpProtectionSynProtectionFiltersRequest,
  output: BulkDeleteAdvancedTcpProtectionSynProtectionFiltersResponse,
  errors: [],
}));

// =============================================================================
// AdvancedTcpProtectionSynProtectionFilterItem
// =============================================================================

export interface GetAdvancedTcpProtectionSynProtectionFilterItemRequest {
  filterId: string;
  /** Identifier. */
  accountId: string;
}

export const GetAdvancedTcpProtectionSynProtectionFilterItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      filterId: Schema.String.pipe(T.HttpPath("filterId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters/{filterId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetAdvancedTcpProtectionSynProtectionFilterItemRequest>;

export interface GetAdvancedTcpProtectionSynProtectionFilterItemResponse {
  /** The unique ID of the expression filter. */
  id: string;
  /** The creation timestamp of the expression filter. */
  createdOn: string;
  /** The filter expression. */
  expression: string;
  /** The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode: string;
  /** The last modification timestamp of the expression filter. */
  modifiedOn: string;
}

export const GetAdvancedTcpProtectionSynProtectionFilterItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdOn: Schema.String,
      expression: Schema.String,
      mode: Schema.String,
      modifiedOn: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdOn: "created_on",
          expression: "expression",
          mode: "mode",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetAdvancedTcpProtectionSynProtectionFilterItemResponse>;

export type GetAdvancedTcpProtectionSynProtectionFilterItemError =
  | DefaultErrors
  | SynProtectionFilterNotFound
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const getAdvancedTcpProtectionSynProtectionFilterItem: API.OperationMethod<
  GetAdvancedTcpProtectionSynProtectionFilterItemRequest,
  GetAdvancedTcpProtectionSynProtectionFilterItemResponse,
  GetAdvancedTcpProtectionSynProtectionFilterItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAdvancedTcpProtectionSynProtectionFilterItemRequest,
  output: GetAdvancedTcpProtectionSynProtectionFilterItemResponse,
  errors: [
    SynProtectionFilterNotFound,
    AdvancedTcpProtectionNotEntitled,
    Forbidden,
  ],
}));

export interface PatchAdvancedTcpProtectionSynProtectionFilterItemRequest {
  filterId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: The new filter expression. Optional. */
  expression?: string;
  /** Body param: The new mode for the filter. Optional. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode?: string;
}

export const PatchAdvancedTcpProtectionSynProtectionFilterItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      filterId: Schema.String.pipe(T.HttpPath("filterId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      expression: Schema.optional(Schema.String),
      mode: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters/{filterId}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchAdvancedTcpProtectionSynProtectionFilterItemRequest>;

export interface PatchAdvancedTcpProtectionSynProtectionFilterItemResponse {
  /** The unique ID of the expression filter. */
  id: string;
  /** The creation timestamp of the expression filter. */
  createdOn: string;
  /** The filter expression. */
  expression: string;
  /** The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode: string;
  /** The last modification timestamp of the expression filter. */
  modifiedOn: string;
}

export const PatchAdvancedTcpProtectionSynProtectionFilterItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdOn: Schema.String,
      expression: Schema.String,
      mode: Schema.String,
      modifiedOn: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdOn: "created_on",
          expression: "expression",
          mode: "mode",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchAdvancedTcpProtectionSynProtectionFilterItemResponse>;

export type PatchAdvancedTcpProtectionSynProtectionFilterItemError =
  | DefaultErrors
  | SynProtectionFilterNotFound
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const patchAdvancedTcpProtectionSynProtectionFilterItem: API.OperationMethod<
  PatchAdvancedTcpProtectionSynProtectionFilterItemRequest,
  PatchAdvancedTcpProtectionSynProtectionFilterItemResponse,
  PatchAdvancedTcpProtectionSynProtectionFilterItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAdvancedTcpProtectionSynProtectionFilterItemRequest,
  output: PatchAdvancedTcpProtectionSynProtectionFilterItemResponse,
  errors: [
    SynProtectionFilterNotFound,
    AdvancedTcpProtectionNotEntitled,
    Forbidden,
  ],
}));

export interface DeleteAdvancedTcpProtectionSynProtectionFilterItemRequest {
  filterId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteAdvancedTcpProtectionSynProtectionFilterItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      filterId: Schema.String.pipe(T.HttpPath("filterId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters/{filterId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteAdvancedTcpProtectionSynProtectionFilterItemRequest>;

export interface DeleteAdvancedTcpProtectionSynProtectionFilterItemResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const DeleteAdvancedTcpProtectionSynProtectionFilterItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(
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
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Schema<DeleteAdvancedTcpProtectionSynProtectionFilterItemResponse>;

export type DeleteAdvancedTcpProtectionSynProtectionFilterItemError =
  | DefaultErrors
  | SynProtectionFilterNotFound
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const deleteAdvancedTcpProtectionSynProtectionFilterItem: API.OperationMethod<
  DeleteAdvancedTcpProtectionSynProtectionFilterItemRequest,
  DeleteAdvancedTcpProtectionSynProtectionFilterItemResponse,
  DeleteAdvancedTcpProtectionSynProtectionFilterItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAdvancedTcpProtectionSynProtectionFilterItemRequest,
  output: DeleteAdvancedTcpProtectionSynProtectionFilterItemResponse,
  errors: [
    SynProtectionFilterNotFound,
    AdvancedTcpProtectionNotEntitled,
    Forbidden,
  ],
}));

// =============================================================================
// AdvancedTcpProtectionSynProtectionRule
// =============================================================================

export interface ListAdvancedTcpProtectionSynProtectionRulesRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: The direction of ordering (ASC or DESC). Defaults to 'ASC'. */
  direction?: string;
  /** Query param: The field to order by. Defaults to 'prefix'. */
  order?: string;
}

export const ListAdvancedTcpProtectionSynProtectionRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(Schema.String).pipe(T.HttpQuery("direction")),
      order: Schema.optional(Schema.String).pipe(T.HttpQuery("order")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules",
      }),
    ),
  ) as unknown as Schema.Schema<ListAdvancedTcpProtectionSynProtectionRulesRequest>;

export interface ListAdvancedTcpProtectionSynProtectionRulesResponse {
  result: {
    id: string;
    burstSensitivity: string;
    createdOn: string;
    mitigationType: string;
    mode: string;
    modifiedOn: string;
    name: string;
    rateSensitivity: string;
    scope: string;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListAdvancedTcpProtectionSynProtectionRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          burstSensitivity: Schema.String,
          createdOn: Schema.String,
          mitigationType: Schema.String,
          mode: Schema.String,
          modifiedOn: Schema.String,
          name: Schema.String,
          rateSensitivity: Schema.String,
          scope: Schema.String,
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            burstSensitivity: "burst_sensitivity",
            createdOn: "created_on",
            mitigationType: "mitigation_type",
            mode: "mode",
            modifiedOn: "modified_on",
            name: "name",
            rateSensitivity: "rate_sensitivity",
            scope: "scope",
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
  ) as unknown as Schema.Schema<ListAdvancedTcpProtectionSynProtectionRulesResponse>;

export type ListAdvancedTcpProtectionSynProtectionRulesError =
  | DefaultErrors
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const listAdvancedTcpProtectionSynProtectionRules: API.PaginatedOperationMethod<
  ListAdvancedTcpProtectionSynProtectionRulesRequest,
  ListAdvancedTcpProtectionSynProtectionRulesResponse,
  ListAdvancedTcpProtectionSynProtectionRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAdvancedTcpProtectionSynProtectionRulesRequest,
  output: ListAdvancedTcpProtectionSynProtectionRulesResponse,
  errors: [AdvancedTcpProtectionNotEntitled, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateAdvancedTcpProtectionSynProtectionRuleRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: The burst sensitivity. Must be one of 'low', 'medium', 'high'. */
  burstSensitivity: string;
  /** Body param: The mode for SYN Protection. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode: string;
  /** Body param: The name of the SYN Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the 'region' or 'datacenter' scope, name should be th */
  name: string;
  /** Body param: The rate sensitivity. Must be one of 'low', 'medium', 'high'. */
  rateSensitivity: string;
  /** Body param: The scope for the SYN Protection rule. Must be one of 'global', 'region', or 'datacenter'. */
  scope: string;
  /** Body param: The type of mitigation. Must be one of 'challenge' or 'retransmit'. Optional. Defaults to 'challenge'. */
  mitigationType?: string;
}

export const CreateAdvancedTcpProtectionSynProtectionRuleRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      burstSensitivity: Schema.String,
      mode: Schema.String,
      name: Schema.String,
      rateSensitivity: Schema.String,
      scope: Schema.String,
      mitigationType: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        burstSensitivity: "burst_sensitivity",
        mode: "mode",
        name: "name",
        rateSensitivity: "rate_sensitivity",
        scope: "scope",
        mitigationType: "mitigation_type",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules",
      }),
    ),
  ) as unknown as Schema.Schema<CreateAdvancedTcpProtectionSynProtectionRuleRequest>;

export interface CreateAdvancedTcpProtectionSynProtectionRuleResponse {
  /** The unique ID of the SYN Protection rule. */
  id: string;
  /** The burst sensitivity. Must be one of 'low', 'medium', 'high'. */
  burstSensitivity: string;
  /** The creation timestamp of the SYN Protection rule. */
  createdOn: string;
  /** The type of mitigation for SYN Protection. Must be one of 'challenge' or 'retransmit'. */
  mitigationType: string;
  /** The mode for SYN Protection. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode: string;
  /** The last modification timestamp of the SYN Protection rule. */
  modifiedOn: string;
  /** The name of the SYN Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the 'region' or 'datacenter' scope, name should be the actual nam */
  name: string;
  /** The rate sensitivity. Must be one of 'low', 'medium', 'high'. */
  rateSensitivity: string;
  /** The scope for the SYN Protection rule. Must be one of 'global', 'region', or 'datacenter'. */
  scope: string;
}

export const CreateAdvancedTcpProtectionSynProtectionRuleResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      burstSensitivity: Schema.String,
      createdOn: Schema.String,
      mitigationType: Schema.String,
      mode: Schema.String,
      modifiedOn: Schema.String,
      name: Schema.String,
      rateSensitivity: Schema.String,
      scope: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          burstSensitivity: "burst_sensitivity",
          createdOn: "created_on",
          mitigationType: "mitigation_type",
          mode: "mode",
          modifiedOn: "modified_on",
          name: "name",
          rateSensitivity: "rate_sensitivity",
          scope: "scope",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateAdvancedTcpProtectionSynProtectionRuleResponse>;

export type CreateAdvancedTcpProtectionSynProtectionRuleError =
  | DefaultErrors
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const createAdvancedTcpProtectionSynProtectionRule: API.OperationMethod<
  CreateAdvancedTcpProtectionSynProtectionRuleRequest,
  CreateAdvancedTcpProtectionSynProtectionRuleResponse,
  CreateAdvancedTcpProtectionSynProtectionRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAdvancedTcpProtectionSynProtectionRuleRequest,
  output: CreateAdvancedTcpProtectionSynProtectionRuleResponse,
  errors: [AdvancedTcpProtectionNotEntitled, Forbidden],
}));

export interface BulkDeleteAdvancedTcpProtectionSynProtectionRulesRequest {
  /** Identifier. */
  accountId: string;
}

export const BulkDeleteAdvancedTcpProtectionSynProtectionRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules",
      }),
    ),
  ) as unknown as Schema.Schema<BulkDeleteAdvancedTcpProtectionSynProtectionRulesRequest>;

export interface BulkDeleteAdvancedTcpProtectionSynProtectionRulesResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const BulkDeleteAdvancedTcpProtectionSynProtectionRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(
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
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Schema<BulkDeleteAdvancedTcpProtectionSynProtectionRulesResponse>;

export type BulkDeleteAdvancedTcpProtectionSynProtectionRulesError =
  DefaultErrors;

export const bulkDeleteAdvancedTcpProtectionSynProtectionRules: API.OperationMethod<
  BulkDeleteAdvancedTcpProtectionSynProtectionRulesRequest,
  BulkDeleteAdvancedTcpProtectionSynProtectionRulesResponse,
  BulkDeleteAdvancedTcpProtectionSynProtectionRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkDeleteAdvancedTcpProtectionSynProtectionRulesRequest,
  output: BulkDeleteAdvancedTcpProtectionSynProtectionRulesResponse,
  errors: [],
}));

// =============================================================================
// AdvancedTcpProtectionSynProtectionRuleItem
// =============================================================================

export interface GetAdvancedTcpProtectionSynProtectionRuleItemRequest {
  ruleId: string;
  /** Identifier. */
  accountId: string;
}

export const GetAdvancedTcpProtectionSynProtectionRuleItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetAdvancedTcpProtectionSynProtectionRuleItemRequest>;

export interface GetAdvancedTcpProtectionSynProtectionRuleItemResponse {
  /** The unique ID of the SYN Protection rule. */
  id: string;
  /** The burst sensitivity. Must be one of 'low', 'medium', 'high'. */
  burstSensitivity: string;
  /** The creation timestamp of the SYN Protection rule. */
  createdOn: string;
  /** The type of mitigation for SYN Protection. Must be one of 'challenge' or 'retransmit'. */
  mitigationType: string;
  /** The mode for SYN Protection. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode: string;
  /** The last modification timestamp of the SYN Protection rule. */
  modifiedOn: string;
  /** The name of the SYN Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the 'region' or 'datacenter' scope, name should be the actual nam */
  name: string;
  /** The rate sensitivity. Must be one of 'low', 'medium', 'high'. */
  rateSensitivity: string;
  /** The scope for the SYN Protection rule. Must be one of 'global', 'region', or 'datacenter'. */
  scope: string;
}

export const GetAdvancedTcpProtectionSynProtectionRuleItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      burstSensitivity: Schema.String,
      createdOn: Schema.String,
      mitigationType: Schema.String,
      mode: Schema.String,
      modifiedOn: Schema.String,
      name: Schema.String,
      rateSensitivity: Schema.String,
      scope: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          burstSensitivity: "burst_sensitivity",
          createdOn: "created_on",
          mitigationType: "mitigation_type",
          mode: "mode",
          modifiedOn: "modified_on",
          name: "name",
          rateSensitivity: "rate_sensitivity",
          scope: "scope",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetAdvancedTcpProtectionSynProtectionRuleItemResponse>;

export type GetAdvancedTcpProtectionSynProtectionRuleItemError =
  | DefaultErrors
  | SynProtectionRuleNotFound
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const getAdvancedTcpProtectionSynProtectionRuleItem: API.OperationMethod<
  GetAdvancedTcpProtectionSynProtectionRuleItemRequest,
  GetAdvancedTcpProtectionSynProtectionRuleItemResponse,
  GetAdvancedTcpProtectionSynProtectionRuleItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAdvancedTcpProtectionSynProtectionRuleItemRequest,
  output: GetAdvancedTcpProtectionSynProtectionRuleItemResponse,
  errors: [
    SynProtectionRuleNotFound,
    AdvancedTcpProtectionNotEntitled,
    Forbidden,
  ],
}));

export interface PatchAdvancedTcpProtectionSynProtectionRuleItemRequest {
  ruleId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: The new burst sensitivity. Optional. Must be one of 'low', 'medium', 'high'. */
  burstSensitivity?: string;
  /** Body param: The new mitigation type. Optional. Must be one of 'challenge' or 'retransmit'. */
  mitigationType?: string;
  /** Body param: The new mode for SYN Protection. Optional. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode?: string;
  /** Body param: The new rate sensitivity. Optional. Must be one of 'low', 'medium', 'high'. */
  rateSensitivity?: string;
}

export const PatchAdvancedTcpProtectionSynProtectionRuleItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      burstSensitivity: Schema.optional(Schema.String),
      mitigationType: Schema.optional(Schema.String),
      mode: Schema.optional(Schema.String),
      rateSensitivity: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        burstSensitivity: "burst_sensitivity",
        mitigationType: "mitigation_type",
        mode: "mode",
        rateSensitivity: "rate_sensitivity",
      }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchAdvancedTcpProtectionSynProtectionRuleItemRequest>;

export interface PatchAdvancedTcpProtectionSynProtectionRuleItemResponse {
  /** The unique ID of the SYN Protection rule. */
  id: string;
  /** The burst sensitivity. Must be one of 'low', 'medium', 'high'. */
  burstSensitivity: string;
  /** The creation timestamp of the SYN Protection rule. */
  createdOn: string;
  /** The type of mitigation for SYN Protection. Must be one of 'challenge' or 'retransmit'. */
  mitigationType: string;
  /** The mode for SYN Protection. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode: string;
  /** The last modification timestamp of the SYN Protection rule. */
  modifiedOn: string;
  /** The name of the SYN Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the 'region' or 'datacenter' scope, name should be the actual nam */
  name: string;
  /** The rate sensitivity. Must be one of 'low', 'medium', 'high'. */
  rateSensitivity: string;
  /** The scope for the SYN Protection rule. Must be one of 'global', 'region', or 'datacenter'. */
  scope: string;
}

export const PatchAdvancedTcpProtectionSynProtectionRuleItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      burstSensitivity: Schema.String,
      createdOn: Schema.String,
      mitigationType: Schema.String,
      mode: Schema.String,
      modifiedOn: Schema.String,
      name: Schema.String,
      rateSensitivity: Schema.String,
      scope: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          burstSensitivity: "burst_sensitivity",
          createdOn: "created_on",
          mitigationType: "mitigation_type",
          mode: "mode",
          modifiedOn: "modified_on",
          name: "name",
          rateSensitivity: "rate_sensitivity",
          scope: "scope",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchAdvancedTcpProtectionSynProtectionRuleItemResponse>;

export type PatchAdvancedTcpProtectionSynProtectionRuleItemError =
  | DefaultErrors
  | SynProtectionRuleNotFound
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const patchAdvancedTcpProtectionSynProtectionRuleItem: API.OperationMethod<
  PatchAdvancedTcpProtectionSynProtectionRuleItemRequest,
  PatchAdvancedTcpProtectionSynProtectionRuleItemResponse,
  PatchAdvancedTcpProtectionSynProtectionRuleItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAdvancedTcpProtectionSynProtectionRuleItemRequest,
  output: PatchAdvancedTcpProtectionSynProtectionRuleItemResponse,
  errors: [
    SynProtectionRuleNotFound,
    AdvancedTcpProtectionNotEntitled,
    Forbidden,
  ],
}));

export interface DeleteAdvancedTcpProtectionSynProtectionRuleItemRequest {
  ruleId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteAdvancedTcpProtectionSynProtectionRuleItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteAdvancedTcpProtectionSynProtectionRuleItemRequest>;

export interface DeleteAdvancedTcpProtectionSynProtectionRuleItemResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const DeleteAdvancedTcpProtectionSynProtectionRuleItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(
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
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Schema<DeleteAdvancedTcpProtectionSynProtectionRuleItemResponse>;

export type DeleteAdvancedTcpProtectionSynProtectionRuleItemError =
  | DefaultErrors
  | SynProtectionRuleNotFound
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const deleteAdvancedTcpProtectionSynProtectionRuleItem: API.OperationMethod<
  DeleteAdvancedTcpProtectionSynProtectionRuleItemRequest,
  DeleteAdvancedTcpProtectionSynProtectionRuleItemResponse,
  DeleteAdvancedTcpProtectionSynProtectionRuleItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAdvancedTcpProtectionSynProtectionRuleItemRequest,
  output: DeleteAdvancedTcpProtectionSynProtectionRuleItemResponse,
  errors: [
    SynProtectionRuleNotFound,
    AdvancedTcpProtectionNotEntitled,
    Forbidden,
  ],
}));

// =============================================================================
// AdvancedTcpProtectionTcpFlowProtectionFilter
// =============================================================================

export interface ListAdvancedTcpProtectionTcpFlowProtectionFiltersRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: The direction of ordering (ASC or DESC). Defaults to 'ASC'. */
  direction?: string;
  /** Query param: The mode of the filters to get. Optional. Valid values: 'enabled', 'disabled', 'monitoring'. */
  mode?: string;
  /** Query param: The field to order by. Defaults to 'prefix'. */
  order?: string;
}

export const ListAdvancedTcpProtectionTcpFlowProtectionFiltersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(Schema.String).pipe(T.HttpQuery("direction")),
      mode: Schema.optional(Schema.String).pipe(T.HttpQuery("mode")),
      order: Schema.optional(Schema.String).pipe(T.HttpQuery("order")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters",
      }),
    ),
  ) as unknown as Schema.Schema<ListAdvancedTcpProtectionTcpFlowProtectionFiltersRequest>;

export interface ListAdvancedTcpProtectionTcpFlowProtectionFiltersResponse {
  result: {
    id: string;
    createdOn: string;
    expression: string;
    mode: string;
    modifiedOn: string;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListAdvancedTcpProtectionTcpFlowProtectionFiltersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          createdOn: Schema.String,
          expression: Schema.String,
          mode: Schema.String,
          modifiedOn: Schema.String,
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            createdOn: "created_on",
            expression: "expression",
            mode: "mode",
            modifiedOn: "modified_on",
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
  ) as unknown as Schema.Schema<ListAdvancedTcpProtectionTcpFlowProtectionFiltersResponse>;

export type ListAdvancedTcpProtectionTcpFlowProtectionFiltersError =
  | DefaultErrors
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const listAdvancedTcpProtectionTcpFlowProtectionFilters: API.PaginatedOperationMethod<
  ListAdvancedTcpProtectionTcpFlowProtectionFiltersRequest,
  ListAdvancedTcpProtectionTcpFlowProtectionFiltersResponse,
  ListAdvancedTcpProtectionTcpFlowProtectionFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAdvancedTcpProtectionTcpFlowProtectionFiltersRequest,
  output: ListAdvancedTcpProtectionTcpFlowProtectionFiltersResponse,
  errors: [AdvancedTcpProtectionNotEntitled, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateAdvancedTcpProtectionTcpFlowProtectionFilterRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: The filter expression. */
  expression: string;
  /** Body param: The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode: string;
}

export const CreateAdvancedTcpProtectionTcpFlowProtectionFilterRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      expression: Schema.String,
      mode: Schema.String,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters",
      }),
    ),
  ) as unknown as Schema.Schema<CreateAdvancedTcpProtectionTcpFlowProtectionFilterRequest>;

export interface CreateAdvancedTcpProtectionTcpFlowProtectionFilterResponse {
  /** The unique ID of the expression filter. */
  id: string;
  /** The creation timestamp of the expression filter. */
  createdOn: string;
  /** The filter expression. */
  expression: string;
  /** The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode: string;
  /** The last modification timestamp of the expression filter. */
  modifiedOn: string;
}

export const CreateAdvancedTcpProtectionTcpFlowProtectionFilterResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdOn: Schema.String,
      expression: Schema.String,
      mode: Schema.String,
      modifiedOn: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdOn: "created_on",
          expression: "expression",
          mode: "mode",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateAdvancedTcpProtectionTcpFlowProtectionFilterResponse>;

export type CreateAdvancedTcpProtectionTcpFlowProtectionFilterError =
  | DefaultErrors
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const createAdvancedTcpProtectionTcpFlowProtectionFilter: API.OperationMethod<
  CreateAdvancedTcpProtectionTcpFlowProtectionFilterRequest,
  CreateAdvancedTcpProtectionTcpFlowProtectionFilterResponse,
  CreateAdvancedTcpProtectionTcpFlowProtectionFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAdvancedTcpProtectionTcpFlowProtectionFilterRequest,
  output: CreateAdvancedTcpProtectionTcpFlowProtectionFilterResponse,
  errors: [AdvancedTcpProtectionNotEntitled, Forbidden],
}));

export interface BulkDeleteAdvancedTcpProtectionTcpFlowProtectionFiltersRequest {
  /** Identifier. */
  accountId: string;
}

export const BulkDeleteAdvancedTcpProtectionTcpFlowProtectionFiltersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters",
      }),
    ),
  ) as unknown as Schema.Schema<BulkDeleteAdvancedTcpProtectionTcpFlowProtectionFiltersRequest>;

export interface BulkDeleteAdvancedTcpProtectionTcpFlowProtectionFiltersResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const BulkDeleteAdvancedTcpProtectionTcpFlowProtectionFiltersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(
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
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Schema<BulkDeleteAdvancedTcpProtectionTcpFlowProtectionFiltersResponse>;

export type BulkDeleteAdvancedTcpProtectionTcpFlowProtectionFiltersError =
  DefaultErrors;

export const bulkDeleteAdvancedTcpProtectionTcpFlowProtectionFilters: API.OperationMethod<
  BulkDeleteAdvancedTcpProtectionTcpFlowProtectionFiltersRequest,
  BulkDeleteAdvancedTcpProtectionTcpFlowProtectionFiltersResponse,
  BulkDeleteAdvancedTcpProtectionTcpFlowProtectionFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkDeleteAdvancedTcpProtectionTcpFlowProtectionFiltersRequest,
  output: BulkDeleteAdvancedTcpProtectionTcpFlowProtectionFiltersResponse,
  errors: [],
}));

// =============================================================================
// AdvancedTcpProtectionTcpFlowProtectionFilterItem
// =============================================================================

export interface GetAdvancedTcpProtectionTcpFlowProtectionFilterItemRequest {
  filterId: string;
  /** Identifier. */
  accountId: string;
}

export const GetAdvancedTcpProtectionTcpFlowProtectionFilterItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      filterId: Schema.String.pipe(T.HttpPath("filterId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters/{filterId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetAdvancedTcpProtectionTcpFlowProtectionFilterItemRequest>;

export interface GetAdvancedTcpProtectionTcpFlowProtectionFilterItemResponse {
  /** The unique ID of the expression filter. */
  id: string;
  /** The creation timestamp of the expression filter. */
  createdOn: string;
  /** The filter expression. */
  expression: string;
  /** The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode: string;
  /** The last modification timestamp of the expression filter. */
  modifiedOn: string;
}

export const GetAdvancedTcpProtectionTcpFlowProtectionFilterItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdOn: Schema.String,
      expression: Schema.String,
      mode: Schema.String,
      modifiedOn: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdOn: "created_on",
          expression: "expression",
          mode: "mode",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetAdvancedTcpProtectionTcpFlowProtectionFilterItemResponse>;

export type GetAdvancedTcpProtectionTcpFlowProtectionFilterItemError =
  | DefaultErrors
  | TcpFlowProtectionFilterNotFound
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const getAdvancedTcpProtectionTcpFlowProtectionFilterItem: API.OperationMethod<
  GetAdvancedTcpProtectionTcpFlowProtectionFilterItemRequest,
  GetAdvancedTcpProtectionTcpFlowProtectionFilterItemResponse,
  GetAdvancedTcpProtectionTcpFlowProtectionFilterItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAdvancedTcpProtectionTcpFlowProtectionFilterItemRequest,
  output: GetAdvancedTcpProtectionTcpFlowProtectionFilterItemResponse,
  errors: [
    TcpFlowProtectionFilterNotFound,
    AdvancedTcpProtectionNotEntitled,
    Forbidden,
  ],
}));

export interface PatchAdvancedTcpProtectionTcpFlowProtectionFilterItemRequest {
  filterId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: The new filter expression. Optional. */
  expression?: string;
  /** Body param: The new mode for the filter. Optional. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode?: string;
}

export const PatchAdvancedTcpProtectionTcpFlowProtectionFilterItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      filterId: Schema.String.pipe(T.HttpPath("filterId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      expression: Schema.optional(Schema.String),
      mode: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters/{filterId}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchAdvancedTcpProtectionTcpFlowProtectionFilterItemRequest>;

export interface PatchAdvancedTcpProtectionTcpFlowProtectionFilterItemResponse {
  /** The unique ID of the expression filter. */
  id: string;
  /** The creation timestamp of the expression filter. */
  createdOn: string;
  /** The filter expression. */
  expression: string;
  /** The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode: string;
  /** The last modification timestamp of the expression filter. */
  modifiedOn: string;
}

export const PatchAdvancedTcpProtectionTcpFlowProtectionFilterItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdOn: Schema.String,
      expression: Schema.String,
      mode: Schema.String,
      modifiedOn: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdOn: "created_on",
          expression: "expression",
          mode: "mode",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchAdvancedTcpProtectionTcpFlowProtectionFilterItemResponse>;

export type PatchAdvancedTcpProtectionTcpFlowProtectionFilterItemError =
  | DefaultErrors
  | TcpFlowProtectionFilterNotFound
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const patchAdvancedTcpProtectionTcpFlowProtectionFilterItem: API.OperationMethod<
  PatchAdvancedTcpProtectionTcpFlowProtectionFilterItemRequest,
  PatchAdvancedTcpProtectionTcpFlowProtectionFilterItemResponse,
  PatchAdvancedTcpProtectionTcpFlowProtectionFilterItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAdvancedTcpProtectionTcpFlowProtectionFilterItemRequest,
  output: PatchAdvancedTcpProtectionTcpFlowProtectionFilterItemResponse,
  errors: [
    TcpFlowProtectionFilterNotFound,
    AdvancedTcpProtectionNotEntitled,
    Forbidden,
  ],
}));

export interface DeleteAdvancedTcpProtectionTcpFlowProtectionFilterItemRequest {
  filterId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteAdvancedTcpProtectionTcpFlowProtectionFilterItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      filterId: Schema.String.pipe(T.HttpPath("filterId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters/{filterId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteAdvancedTcpProtectionTcpFlowProtectionFilterItemRequest>;

export interface DeleteAdvancedTcpProtectionTcpFlowProtectionFilterItemResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const DeleteAdvancedTcpProtectionTcpFlowProtectionFilterItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(
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
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Schema<DeleteAdvancedTcpProtectionTcpFlowProtectionFilterItemResponse>;

export type DeleteAdvancedTcpProtectionTcpFlowProtectionFilterItemError =
  | DefaultErrors
  | TcpFlowProtectionFilterNotFound
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const deleteAdvancedTcpProtectionTcpFlowProtectionFilterItem: API.OperationMethod<
  DeleteAdvancedTcpProtectionTcpFlowProtectionFilterItemRequest,
  DeleteAdvancedTcpProtectionTcpFlowProtectionFilterItemResponse,
  DeleteAdvancedTcpProtectionTcpFlowProtectionFilterItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAdvancedTcpProtectionTcpFlowProtectionFilterItemRequest,
  output: DeleteAdvancedTcpProtectionTcpFlowProtectionFilterItemResponse,
  errors: [
    TcpFlowProtectionFilterNotFound,
    AdvancedTcpProtectionNotEntitled,
    Forbidden,
  ],
}));

// =============================================================================
// AdvancedTcpProtectionTcpFlowProtectionRule
// =============================================================================

export interface ListAdvancedTcpProtectionTcpFlowProtectionRulesRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: The direction of ordering (ASC or DESC). Defaults to 'ASC'. */
  direction?: string;
  /** Query param: The field to order by. Defaults to 'prefix'. */
  order?: string;
}

export const ListAdvancedTcpProtectionTcpFlowProtectionRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(Schema.String).pipe(T.HttpQuery("direction")),
      order: Schema.optional(Schema.String).pipe(T.HttpQuery("order")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules",
      }),
    ),
  ) as unknown as Schema.Schema<ListAdvancedTcpProtectionTcpFlowProtectionRulesRequest>;

export interface ListAdvancedTcpProtectionTcpFlowProtectionRulesResponse {
  result: {
    id: string;
    burstSensitivity: string;
    createdOn: string;
    mode: string;
    modifiedOn: string;
    name: string;
    rateSensitivity: string;
    scope: string;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListAdvancedTcpProtectionTcpFlowProtectionRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          burstSensitivity: Schema.String,
          createdOn: Schema.String,
          mode: Schema.String,
          modifiedOn: Schema.String,
          name: Schema.String,
          rateSensitivity: Schema.String,
          scope: Schema.String,
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            burstSensitivity: "burst_sensitivity",
            createdOn: "created_on",
            mode: "mode",
            modifiedOn: "modified_on",
            name: "name",
            rateSensitivity: "rate_sensitivity",
            scope: "scope",
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
  ) as unknown as Schema.Schema<ListAdvancedTcpProtectionTcpFlowProtectionRulesResponse>;

export type ListAdvancedTcpProtectionTcpFlowProtectionRulesError =
  | DefaultErrors
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const listAdvancedTcpProtectionTcpFlowProtectionRules: API.PaginatedOperationMethod<
  ListAdvancedTcpProtectionTcpFlowProtectionRulesRequest,
  ListAdvancedTcpProtectionTcpFlowProtectionRulesResponse,
  ListAdvancedTcpProtectionTcpFlowProtectionRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAdvancedTcpProtectionTcpFlowProtectionRulesRequest,
  output: ListAdvancedTcpProtectionTcpFlowProtectionRulesResponse,
  errors: [AdvancedTcpProtectionNotEntitled, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateAdvancedTcpProtectionTcpFlowProtectionRuleRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: The burst sensitivity. Must be one of 'low', 'medium', 'high'. */
  burstSensitivity: string;
  /** Body param: The mode for the TCP Flow Protection. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode: string;
  /** Body param: The name of the TCP Flow Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the 'region' or 'datacenter' scope, name should  */
  name: string;
  /** Body param: The rate sensitivity. Must be one of 'low', 'medium', 'high'. */
  rateSensitivity: string;
  /** Body param: The scope for the TCP Flow Protection rule. */
  scope: string;
}

export const CreateAdvancedTcpProtectionTcpFlowProtectionRuleRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      burstSensitivity: Schema.String,
      mode: Schema.String,
      name: Schema.String,
      rateSensitivity: Schema.String,
      scope: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        burstSensitivity: "burst_sensitivity",
        mode: "mode",
        name: "name",
        rateSensitivity: "rate_sensitivity",
        scope: "scope",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules",
      }),
    ),
  ) as unknown as Schema.Schema<CreateAdvancedTcpProtectionTcpFlowProtectionRuleRequest>;

export interface CreateAdvancedTcpProtectionTcpFlowProtectionRuleResponse {
  /** The unique ID of the TCP Flow Protection rule. */
  id: string;
  /** The burst sensitivity. Must be one of 'low', 'medium', 'high'. */
  burstSensitivity: string;
  /** The creation timestamp of the TCP Flow Protection rule. */
  createdOn: string;
  /** The mode for TCP Flow Protection. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode: string;
  /** The last modification timestamp of the TCP Flow Protection rule. */
  modifiedOn: string;
  /** The name of the TCP Flow Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the 'region' or 'datacenter' scope, name should be the actua */
  name: string;
  /** The rate sensitivity. Must be one of 'low', 'medium', 'high'. */
  rateSensitivity: string;
  /** The scope for the TCP Flow Protection rule. Must be one of 'global', 'region', or 'datacenter'. */
  scope: string;
}

export const CreateAdvancedTcpProtectionTcpFlowProtectionRuleResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      burstSensitivity: Schema.String,
      createdOn: Schema.String,
      mode: Schema.String,
      modifiedOn: Schema.String,
      name: Schema.String,
      rateSensitivity: Schema.String,
      scope: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          burstSensitivity: "burst_sensitivity",
          createdOn: "created_on",
          mode: "mode",
          modifiedOn: "modified_on",
          name: "name",
          rateSensitivity: "rate_sensitivity",
          scope: "scope",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateAdvancedTcpProtectionTcpFlowProtectionRuleResponse>;

export type CreateAdvancedTcpProtectionTcpFlowProtectionRuleError =
  | DefaultErrors
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const createAdvancedTcpProtectionTcpFlowProtectionRule: API.OperationMethod<
  CreateAdvancedTcpProtectionTcpFlowProtectionRuleRequest,
  CreateAdvancedTcpProtectionTcpFlowProtectionRuleResponse,
  CreateAdvancedTcpProtectionTcpFlowProtectionRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAdvancedTcpProtectionTcpFlowProtectionRuleRequest,
  output: CreateAdvancedTcpProtectionTcpFlowProtectionRuleResponse,
  errors: [AdvancedTcpProtectionNotEntitled, Forbidden],
}));

export interface BulkDeleteAdvancedTcpProtectionTcpFlowProtectionRulesRequest {
  /** Identifier. */
  accountId: string;
}

export const BulkDeleteAdvancedTcpProtectionTcpFlowProtectionRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules",
      }),
    ),
  ) as unknown as Schema.Schema<BulkDeleteAdvancedTcpProtectionTcpFlowProtectionRulesRequest>;

export interface BulkDeleteAdvancedTcpProtectionTcpFlowProtectionRulesResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const BulkDeleteAdvancedTcpProtectionTcpFlowProtectionRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(
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
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Schema<BulkDeleteAdvancedTcpProtectionTcpFlowProtectionRulesResponse>;

export type BulkDeleteAdvancedTcpProtectionTcpFlowProtectionRulesError =
  DefaultErrors;

export const bulkDeleteAdvancedTcpProtectionTcpFlowProtectionRules: API.OperationMethod<
  BulkDeleteAdvancedTcpProtectionTcpFlowProtectionRulesRequest,
  BulkDeleteAdvancedTcpProtectionTcpFlowProtectionRulesResponse,
  BulkDeleteAdvancedTcpProtectionTcpFlowProtectionRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkDeleteAdvancedTcpProtectionTcpFlowProtectionRulesRequest,
  output: BulkDeleteAdvancedTcpProtectionTcpFlowProtectionRulesResponse,
  errors: [],
}));

// =============================================================================
// AdvancedTcpProtectionTcpFlowProtectionRuleItem
// =============================================================================

export interface GetAdvancedTcpProtectionTcpFlowProtectionRuleItemRequest {
  ruleId: string;
  /** Identifier. */
  accountId: string;
}

export const GetAdvancedTcpProtectionTcpFlowProtectionRuleItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetAdvancedTcpProtectionTcpFlowProtectionRuleItemRequest>;

export interface GetAdvancedTcpProtectionTcpFlowProtectionRuleItemResponse {
  /** The unique ID of the TCP Flow Protection rule. */
  id: string;
  /** The burst sensitivity. Must be one of 'low', 'medium', 'high'. */
  burstSensitivity: string;
  /** The creation timestamp of the TCP Flow Protection rule. */
  createdOn: string;
  /** The mode for TCP Flow Protection. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode: string;
  /** The last modification timestamp of the TCP Flow Protection rule. */
  modifiedOn: string;
  /** The name of the TCP Flow Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the 'region' or 'datacenter' scope, name should be the actua */
  name: string;
  /** The rate sensitivity. Must be one of 'low', 'medium', 'high'. */
  rateSensitivity: string;
  /** The scope for the TCP Flow Protection rule. Must be one of 'global', 'region', or 'datacenter'. */
  scope: string;
}

export const GetAdvancedTcpProtectionTcpFlowProtectionRuleItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      burstSensitivity: Schema.String,
      createdOn: Schema.String,
      mode: Schema.String,
      modifiedOn: Schema.String,
      name: Schema.String,
      rateSensitivity: Schema.String,
      scope: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          burstSensitivity: "burst_sensitivity",
          createdOn: "created_on",
          mode: "mode",
          modifiedOn: "modified_on",
          name: "name",
          rateSensitivity: "rate_sensitivity",
          scope: "scope",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetAdvancedTcpProtectionTcpFlowProtectionRuleItemResponse>;

export type GetAdvancedTcpProtectionTcpFlowProtectionRuleItemError =
  | DefaultErrors
  | TcpFlowProtectionRuleNotFound
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const getAdvancedTcpProtectionTcpFlowProtectionRuleItem: API.OperationMethod<
  GetAdvancedTcpProtectionTcpFlowProtectionRuleItemRequest,
  GetAdvancedTcpProtectionTcpFlowProtectionRuleItemResponse,
  GetAdvancedTcpProtectionTcpFlowProtectionRuleItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAdvancedTcpProtectionTcpFlowProtectionRuleItemRequest,
  output: GetAdvancedTcpProtectionTcpFlowProtectionRuleItemResponse,
  errors: [
    TcpFlowProtectionRuleNotFound,
    AdvancedTcpProtectionNotEntitled,
    Forbidden,
  ],
}));

export interface PatchAdvancedTcpProtectionTcpFlowProtectionRuleItemRequest {
  ruleId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: The new burst sensitivity. Optional. Must be one of 'low', 'medium', 'high'. */
  burstSensitivity?: string;
  /** Body param: The new mode for TCP Flow Protection. Optional. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode?: string;
  /** Body param: The new rate sensitivity. Optional. Must be one of 'low', 'medium', 'high'. */
  rateSensitivity?: string;
}

export const PatchAdvancedTcpProtectionTcpFlowProtectionRuleItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      burstSensitivity: Schema.optional(Schema.String),
      mode: Schema.optional(Schema.String),
      rateSensitivity: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        burstSensitivity: "burst_sensitivity",
        mode: "mode",
        rateSensitivity: "rate_sensitivity",
      }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchAdvancedTcpProtectionTcpFlowProtectionRuleItemRequest>;

export interface PatchAdvancedTcpProtectionTcpFlowProtectionRuleItemResponse {
  /** The unique ID of the TCP Flow Protection rule. */
  id: string;
  /** The burst sensitivity. Must be one of 'low', 'medium', 'high'. */
  burstSensitivity: string;
  /** The creation timestamp of the TCP Flow Protection rule. */
  createdOn: string;
  /** The mode for TCP Flow Protection. Must be one of 'enabled', 'disabled', 'monitoring'. */
  mode: string;
  /** The last modification timestamp of the TCP Flow Protection rule. */
  modifiedOn: string;
  /** The name of the TCP Flow Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the 'region' or 'datacenter' scope, name should be the actua */
  name: string;
  /** The rate sensitivity. Must be one of 'low', 'medium', 'high'. */
  rateSensitivity: string;
  /** The scope for the TCP Flow Protection rule. Must be one of 'global', 'region', or 'datacenter'. */
  scope: string;
}

export const PatchAdvancedTcpProtectionTcpFlowProtectionRuleItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      burstSensitivity: Schema.String,
      createdOn: Schema.String,
      mode: Schema.String,
      modifiedOn: Schema.String,
      name: Schema.String,
      rateSensitivity: Schema.String,
      scope: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          burstSensitivity: "burst_sensitivity",
          createdOn: "created_on",
          mode: "mode",
          modifiedOn: "modified_on",
          name: "name",
          rateSensitivity: "rate_sensitivity",
          scope: "scope",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchAdvancedTcpProtectionTcpFlowProtectionRuleItemResponse>;

export type PatchAdvancedTcpProtectionTcpFlowProtectionRuleItemError =
  | DefaultErrors
  | TcpFlowProtectionRuleNotFound
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const patchAdvancedTcpProtectionTcpFlowProtectionRuleItem: API.OperationMethod<
  PatchAdvancedTcpProtectionTcpFlowProtectionRuleItemRequest,
  PatchAdvancedTcpProtectionTcpFlowProtectionRuleItemResponse,
  PatchAdvancedTcpProtectionTcpFlowProtectionRuleItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAdvancedTcpProtectionTcpFlowProtectionRuleItemRequest,
  output: PatchAdvancedTcpProtectionTcpFlowProtectionRuleItemResponse,
  errors: [
    TcpFlowProtectionRuleNotFound,
    AdvancedTcpProtectionNotEntitled,
    Forbidden,
  ],
}));

export interface DeleteAdvancedTcpProtectionTcpFlowProtectionRuleItemRequest {
  ruleId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteAdvancedTcpProtectionTcpFlowProtectionRuleItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteAdvancedTcpProtectionTcpFlowProtectionRuleItemRequest>;

export interface DeleteAdvancedTcpProtectionTcpFlowProtectionRuleItemResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const DeleteAdvancedTcpProtectionTcpFlowProtectionRuleItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(
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
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Schema<DeleteAdvancedTcpProtectionTcpFlowProtectionRuleItemResponse>;

export type DeleteAdvancedTcpProtectionTcpFlowProtectionRuleItemError =
  | DefaultErrors
  | TcpFlowProtectionRuleNotFound
  | AdvancedTcpProtectionNotEntitled
  | Forbidden;

export const deleteAdvancedTcpProtectionTcpFlowProtectionRuleItem: API.OperationMethod<
  DeleteAdvancedTcpProtectionTcpFlowProtectionRuleItemRequest,
  DeleteAdvancedTcpProtectionTcpFlowProtectionRuleItemResponse,
  DeleteAdvancedTcpProtectionTcpFlowProtectionRuleItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAdvancedTcpProtectionTcpFlowProtectionRuleItemRequest,
  output: DeleteAdvancedTcpProtectionTcpFlowProtectionRuleItemResponse,
  errors: [
    TcpFlowProtectionRuleNotFound,
    AdvancedTcpProtectionNotEntitled,
    Forbidden,
  ],
}));
