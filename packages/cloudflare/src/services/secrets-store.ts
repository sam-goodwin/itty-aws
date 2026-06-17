/**
 * Cloudflare SECRETS-STORE API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service secrets-store
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

export class InvalidAccountId extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidAccountId>()("InvalidAccountId", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7003 }],
) {}

export class InvalidJsonBody extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidJsonBody>()("InvalidJsonBody", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1001, message: { includes: "invalid_json_body" } }],
) {}

export class MaximumStoresExceeded extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MaximumStoresExceeded>()("MaximumStoresExceeded", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1003, message: { includes: "maximum_stores_exceeded" } }],
) {}

export class NotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NotFound>()("NotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1000 }],
) {}

export class SecretNameAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SecretNameAlreadyExists>()(
    "SecretNameAlreadyExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1003, message: { includes: "secret_name_already_exists" } }],
) {}

export class SecretNameEmpty extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SecretNameEmpty>()("SecretNameEmpty", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1001, message: { includes: "secret_name_empty" } }],
) {}

export class SecretNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SecretNotFound>()("SecretNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1001, message: { includes: "secret_not_found" } }],
) {}

export class SecretScopeInvalid extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SecretScopeInvalid>()("SecretScopeInvalid", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1001, message: { includes: "secret_scope_invalid" } }],
) {}

export class SecretScopesEmpty extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SecretScopesEmpty>()("SecretScopesEmpty", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1001, message: { includes: "secret_scopes_empty" } }],
) {}

export class StoreNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<StoreNotFound>()("StoreNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1001, message: { includes: "store_not_found" } }],
) {}

// =============================================================================
// Quota
// =============================================================================

export interface GetQuotaRequest {
  /** Account Identifier */
  accountId: string;
}

export const GetQuotaRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/secrets_store/quota",
    }),
  ),
) as unknown as Schema.Schema<GetQuotaRequest>;

export interface GetQuotaResponse {
  secrets: { quota: number; usage: number };
}

export const GetQuotaResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    secrets: Schema.Struct({
      quota: Schema.Number,
      usage: Schema.Number,
    }),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetQuotaResponse>;

export type GetQuotaError = DefaultErrors | InvalidAccountId;

export const getQuota: API.OperationMethod<
  GetQuotaRequest,
  GetQuotaResponse,
  GetQuotaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetQuotaRequest,
  output: GetQuotaResponse,
  errors: [InvalidAccountId],
}));

// =============================================================================
// Store
// =============================================================================

export interface GetStoreRequest {
  storeId: string;
  /** Account Identifier */
  accountId: string;
}

export const GetStoreRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    storeId: Schema.String.pipe(T.HttpPath("storeId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/secrets_store/stores/{storeId}",
    }),
  ),
) as unknown as Schema.Schema<GetStoreRequest>;

export interface GetStoreResponse {
  /** Store Identifier */
  id: string;
  /** Whenthe secret was created. */
  created: string;
  /** When the secret was modified. */
  modified: string;
  /** The name of the store */
  name: string;
  /** Account Identifier */
  accountId?: string | null;
}

export const GetStoreResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    created: Schema.String,
    modified: Schema.String,
    name: Schema.String,
    accountId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        created: "created",
        modified: "modified",
        name: "name",
        accountId: "account_id",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetStoreResponse>;

export type GetStoreError = DefaultErrors;

export const getStore: API.OperationMethod<
  GetStoreRequest,
  GetStoreResponse,
  GetStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetStoreRequest,
  output: GetStoreResponse,
  errors: [],
}));

export interface ListStoresRequest {
  /** Path param: Account Identifier */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Direction to sort objects */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Order secrets by values in the given field */
  order?:
    | "name"
    | "comment"
    | "created"
    | "modified"
    | "status"
    | (string & {});
}

export const ListStoresRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      order: Schema.optional(
        Schema.Union([
          Schema.Literals(["name", "comment", "created", "modified", "status"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("order")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/secrets_store/stores",
      }),
    ),
) as unknown as Schema.Schema<ListStoresRequest>;

export interface ListStoresResponse {
  result: {
    id: string;
    created: string;
    modified: string;
    name: string;
    accountId?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListStoresResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          created: Schema.String,
          modified: Schema.String,
          name: Schema.String,
          accountId: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            created: "created",
            modified: "modified",
            name: "name",
            accountId: "account_id",
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
) as unknown as Schema.Schema<ListStoresResponse>;

export type ListStoresError = DefaultErrors | InvalidAccountId;

export const listStores: API.PaginatedOperationMethod<
  ListStoresRequest,
  ListStoresResponse,
  ListStoresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListStoresRequest,
  output: ListStoresResponse,
  errors: [InvalidAccountId],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateStoreRequest {
  /** Account identifier */
  accountId: string;
  /** The name of the store */
  name: string;
}

export const CreateStoreRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/secrets_store/stores",
      }),
    ),
) as unknown as Schema.Schema<CreateStoreRequest>;

export interface CreateStoreResponse {
  /** Store identifier */
  id: string;
  /** When the store was created */
  created: string;
  /** When the store was modified */
  modified: string;
  /** The name of the store */
  name: string;
}

export const CreateStoreResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      created: Schema.String,
      modified: Schema.String,
      name: Schema.String,
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<CreateStoreResponse>;

export type CreateStoreError =
  | DefaultErrors
  | InvalidAccountId
  | MaximumStoresExceeded;

export const createStore: API.OperationMethod<
  CreateStoreRequest,
  CreateStoreResponse,
  CreateStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateStoreRequest,
  output: CreateStoreResponse,
  errors: [InvalidAccountId, MaximumStoresExceeded],
}));

export interface DeleteStoreRequest {
  storeId: string;
  /** Path param: Account Identifier */
  accountId: string;
  /** Query param: When true, cascade-deletes all secrets in the store before deleting the store itself. Required when deleting a non-empty store. Without this parameter, attempting to delete a non-empty st */
  force?: boolean;
}

export const DeleteStoreRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      storeId: Schema.String.pipe(T.HttpPath("storeId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/secrets_store/stores/{storeId}",
      }),
    ),
) as unknown as Schema.Schema<DeleteStoreRequest>;

export type DeleteStoreResponse = unknown;

export const DeleteStoreResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<DeleteStoreResponse>;

export type DeleteStoreError =
  | DefaultErrors
  | StoreNotFound
  | InvalidAccountId
  | NotFound;

export const deleteStore: API.OperationMethod<
  DeleteStoreRequest,
  DeleteStoreResponse,
  DeleteStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteStoreRequest,
  output: DeleteStoreResponse,
  errors: [StoreNotFound, InvalidAccountId, NotFound],
}));

// =============================================================================
// StoreSecret
// =============================================================================

export interface GetStoreSecretRequest {
  storeId: string;
  secretId: string;
  /** Account Identifier */
  accountId: string;
}

export const GetStoreSecretRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      storeId: Schema.String.pipe(T.HttpPath("storeId")),
      secretId: Schema.String.pipe(T.HttpPath("secretId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/secrets_store/stores/{storeId}/secrets/{secretId}",
      }),
    ),
) as unknown as Schema.Schema<GetStoreSecretRequest>;

export interface GetStoreSecretResponse {
  /** Secret identifier tag. */
  id: string;
  /** Whenthe secret was created. */
  created: string;
  /** When the secret was modified. */
  modified: string;
  /** The name of the secret */
  name: string;
  status: "pending" | "active" | "deleted" | (string & {});
  /** Store Identifier */
  storeId: string;
  /** Freeform text describing the secret */
  comment?: string | null;
  /** The list of services that can use this secret. */
  scopes?: string[] | null;
}

export const GetStoreSecretResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      created: Schema.String,
      modified: Schema.String,
      name: Schema.String,
      status: Schema.Union([
        Schema.Literals(["pending", "active", "deleted"]),
        Schema.String,
      ]),
      storeId: Schema.String,
      comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      scopes: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          created: "created",
          modified: "modified",
          name: "name",
          status: "status",
          storeId: "store_id",
          comment: "comment",
          scopes: "scopes",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetStoreSecretResponse>;

export type GetStoreSecretError =
  | DefaultErrors
  | StoreNotFound
  | SecretNotFound
  | InvalidAccountId
  | NotFound;

export const getStoreSecret: API.OperationMethod<
  GetStoreSecretRequest,
  GetStoreSecretResponse,
  GetStoreSecretError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetStoreSecretRequest,
  output: GetStoreSecretResponse,
  errors: [StoreNotFound, SecretNotFound, InvalidAccountId, NotFound],
}));

export interface ListStoreSecretsRequest {
  storeId: string;
  /** Path param: Account Identifier */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Direction to sort objects */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Order secrets by values in the given field */
  order?:
    | "name"
    | "comment"
    | "created"
    | "modified"
    | "status"
    | (string & {});
  /** Query param: Only secrets with the given scopes will be returned */
  scopes?: string[][];
  /** Query param: Search secrets using a filter string, filtering across name and comment */
  search?: string;
}

export const ListStoreSecretsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      storeId: Schema.String.pipe(T.HttpPath("storeId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      order: Schema.optional(
        Schema.Union([
          Schema.Literals(["name", "comment", "created", "modified", "status"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("order")),
      scopes: Schema.optional(Schema.Array(Schema.Array(Schema.String))).pipe(
        T.HttpQuery("scopes"),
      ),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/secrets_store/stores/{storeId}/secrets",
      }),
    ),
  ) as unknown as Schema.Schema<ListStoreSecretsRequest>;

export interface ListStoreSecretsResponse {
  result: {
    id: string;
    created: string;
    modified: string;
    name: string;
    status: "pending" | "active" | "deleted" | (string & {});
    storeId: string;
    comment?: string | null;
    scopes?: string[] | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListStoreSecretsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          created: Schema.String,
          modified: Schema.String,
          name: Schema.String,
          status: Schema.Union([
            Schema.Literals(["pending", "active", "deleted"]),
            Schema.String,
          ]),
          storeId: Schema.String,
          comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          scopes: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            created: "created",
            modified: "modified",
            name: "name",
            status: "status",
            storeId: "store_id",
            comment: "comment",
            scopes: "scopes",
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
  ) as unknown as Schema.Schema<ListStoreSecretsResponse>;

export type ListStoreSecretsError =
  | DefaultErrors
  | StoreNotFound
  | InvalidAccountId;

export const listStoreSecrets: API.PaginatedOperationMethod<
  ListStoreSecretsRequest,
  ListStoreSecretsResponse,
  ListStoreSecretsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListStoreSecretsRequest,
  output: ListStoreSecretsResponse,
  errors: [StoreNotFound, InvalidAccountId],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateStoreSecretRequest {
  storeId: string;
  /** Path param: Account Identifier */
  accountId: string;
  /** Body param */
  body: { name: string; scopes: string[]; value: string; comment?: string }[];
}

export const CreateStoreSecretRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      storeId: Schema.String.pipe(T.HttpPath("storeId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.Array(
        Schema.Struct({
          name: Schema.String,
          scopes: Schema.Array(Schema.String),
          value: Schema.String,
          comment: Schema.optional(Schema.String),
        }),
      ).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/secrets_store/stores/{storeId}/secrets",
      }),
    ),
  ) as unknown as Schema.Schema<CreateStoreSecretRequest>;

export interface CreateStoreSecretResponse {
  result: {
    id: string;
    created: string;
    modified: string;
    name: string;
    status: "pending" | "active" | "deleted" | (string & {});
    storeId: string;
    comment?: string | null;
    scopes?: string[] | null;
  }[];
}

export const CreateStoreSecretResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          created: Schema.String,
          modified: Schema.String,
          name: Schema.String,
          status: Schema.Union([
            Schema.Literals(["pending", "active", "deleted"]),
            Schema.String,
          ]),
          storeId: Schema.String,
          comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          scopes: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            created: "created",
            modified: "modified",
            name: "name",
            status: "status",
            storeId: "store_id",
            comment: "comment",
            scopes: "scopes",
          }),
        ),
      ),
    }),
  ) as unknown as Schema.Schema<CreateStoreSecretResponse>;

export type CreateStoreSecretError =
  | DefaultErrors
  | StoreNotFound
  | InvalidAccountId
  | SecretNameEmpty
  | SecretNameAlreadyExists
  | SecretScopeInvalid;

export const createStoreSecret: API.PaginatedOperationMethod<
  CreateStoreSecretRequest,
  CreateStoreSecretResponse,
  CreateStoreSecretError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: CreateStoreSecretRequest,
  output: CreateStoreSecretResponse,
  errors: [
    StoreNotFound,
    InvalidAccountId,
    SecretNameEmpty,
    SecretNameAlreadyExists,
    SecretScopeInvalid,
  ],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface PatchStoreSecretRequest {
  storeId: string;
  secretId: string;
  /** Path param: Account Identifier */
  accountId: string;
  /** Body param: Freeform text describing the secret */
  comment?: string;
  /** Body param: The list of services that can use this secret. */
  scopes?: string[];
  /** Body param: The value of the secret. Maximum 64 KiB (65,536 bytes). Note that this is 'write only' - no API response will provide this value, it is only used to create/modify secrets. */
  value?: string;
}

export const PatchStoreSecretRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      storeId: Schema.String.pipe(T.HttpPath("storeId")),
      secretId: Schema.String.pipe(T.HttpPath("secretId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      comment: Schema.optional(Schema.String),
      scopes: Schema.optional(Schema.Array(Schema.String)),
      value: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/secrets_store/stores/{storeId}/secrets/{secretId}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchStoreSecretRequest>;

export interface PatchStoreSecretResponse {
  /** Secret identifier tag. */
  id: string;
  /** Whenthe secret was created. */
  created: string;
  /** When the secret was modified. */
  modified: string;
  /** The name of the secret */
  name: string;
  status: "pending" | "active" | "deleted" | (string & {});
  /** Store Identifier */
  storeId: string;
  /** Freeform text describing the secret */
  comment?: string | null;
  /** The list of services that can use this secret. */
  scopes?: string[] | null;
}

export const PatchStoreSecretResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      created: Schema.String,
      modified: Schema.String,
      name: Schema.String,
      status: Schema.Union([
        Schema.Literals(["pending", "active", "deleted"]),
        Schema.String,
      ]),
      storeId: Schema.String,
      comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      scopes: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          created: "created",
          modified: "modified",
          name: "name",
          status: "status",
          storeId: "store_id",
          comment: "comment",
          scopes: "scopes",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchStoreSecretResponse>;

export type PatchStoreSecretError =
  | DefaultErrors
  | StoreNotFound
  | SecretNotFound
  | InvalidAccountId
  | SecretScopeInvalid;

export const patchStoreSecret: API.OperationMethod<
  PatchStoreSecretRequest,
  PatchStoreSecretResponse,
  PatchStoreSecretError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchStoreSecretRequest,
  output: PatchStoreSecretResponse,
  errors: [StoreNotFound, SecretNotFound, InvalidAccountId, SecretScopeInvalid],
}));

export interface DeleteStoreSecretRequest {
  storeId: string;
  secretId: string;
  /** Account Identifier */
  accountId: string;
}

export const DeleteStoreSecretRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      storeId: Schema.String.pipe(T.HttpPath("storeId")),
      secretId: Schema.String.pipe(T.HttpPath("secretId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/secrets_store/stores/{storeId}/secrets/{secretId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteStoreSecretRequest>;

export type DeleteStoreSecretResponse = unknown;

export const DeleteStoreSecretResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteStoreSecretResponse>;

export type DeleteStoreSecretError =
  | DefaultErrors
  | StoreNotFound
  | SecretNotFound
  | InvalidAccountId
  | NotFound;

export const deleteStoreSecret: API.OperationMethod<
  DeleteStoreSecretRequest,
  DeleteStoreSecretResponse,
  DeleteStoreSecretError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteStoreSecretRequest,
  output: DeleteStoreSecretResponse,
  errors: [StoreNotFound, SecretNotFound, InvalidAccountId, NotFound],
}));

export interface BulkDeleteStoreSecretsRequest {
  storeId: string;
  /** Account Identifier */
  accountId: string;
}

export const BulkDeleteStoreSecretsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      storeId: Schema.String.pipe(T.HttpPath("storeId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/secrets_store/stores/{storeId}/secrets",
      }),
    ),
  ) as unknown as Schema.Schema<BulkDeleteStoreSecretsRequest>;

export type BulkDeleteStoreSecretsResponse = unknown;

export const BulkDeleteStoreSecretsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<BulkDeleteStoreSecretsResponse>;

export type BulkDeleteStoreSecretsError =
  | DefaultErrors
  | StoreNotFound
  | InvalidAccountId
  | InvalidJsonBody;

export const bulkDeleteStoreSecrets: API.OperationMethod<
  BulkDeleteStoreSecretsRequest,
  BulkDeleteStoreSecretsResponse,
  BulkDeleteStoreSecretsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkDeleteStoreSecretsRequest,
  output: BulkDeleteStoreSecretsResponse,
  errors: [StoreNotFound, InvalidAccountId, InvalidJsonBody],
}));

export interface DuplicateStoreSecretRequest {
  storeId: string;
  secretId: string;
  /** Path param: Account Identifier */
  accountId: string;
  /** Body param: The name of the secret */
  name: string;
  /** Body param: The list of services that can use this secret. */
  scopes: string[];
  /** Body param: Freeform text describing the secret */
  comment?: string;
}

export const DuplicateStoreSecretRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      storeId: Schema.String.pipe(T.HttpPath("storeId")),
      secretId: Schema.String.pipe(T.HttpPath("secretId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
      scopes: Schema.Array(Schema.String),
      comment: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/secrets_store/stores/{storeId}/secrets/{secretId}/duplicate",
      }),
    ),
  ) as unknown as Schema.Schema<DuplicateStoreSecretRequest>;

export interface DuplicateStoreSecretResponse {
  /** Secret identifier tag. */
  id: string;
  /** Whenthe secret was created. */
  created: string;
  /** When the secret was modified. */
  modified: string;
  /** The name of the secret */
  name: string;
  status: "pending" | "active" | "deleted" | (string & {});
  /** Store Identifier */
  storeId: string;
  /** Freeform text describing the secret */
  comment?: string | null;
  /** The list of services that can use this secret. */
  scopes?: string[] | null;
}

export const DuplicateStoreSecretResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      created: Schema.String,
      modified: Schema.String,
      name: Schema.String,
      status: Schema.Union([
        Schema.Literals(["pending", "active", "deleted"]),
        Schema.String,
      ]),
      storeId: Schema.String,
      comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      scopes: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          created: "created",
          modified: "modified",
          name: "name",
          status: "status",
          storeId: "store_id",
          comment: "comment",
          scopes: "scopes",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DuplicateStoreSecretResponse>;

export type DuplicateStoreSecretError =
  | DefaultErrors
  | StoreNotFound
  | SecretNotFound
  | SecretNameEmpty
  | SecretScopesEmpty
  | SecretNameAlreadyExists
  | InvalidAccountId
  | SecretScopeInvalid;

export const duplicateStoreSecret: API.OperationMethod<
  DuplicateStoreSecretRequest,
  DuplicateStoreSecretResponse,
  DuplicateStoreSecretError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DuplicateStoreSecretRequest,
  output: DuplicateStoreSecretResponse,
  errors: [
    StoreNotFound,
    SecretNotFound,
    SecretNameEmpty,
    SecretScopesEmpty,
    SecretNameAlreadyExists,
    InvalidAccountId,
    SecretScopeInvalid,
  ],
}));
