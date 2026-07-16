/**
 * Cloudflare CALLS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service calls
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

export class CallsAppNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CallsAppNotFound>()("CallsAppNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 20007 }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class TurnKeyNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TurnKeyNotFound>()("TurnKeyNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 20008 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface ListSfusResponseResult {
  /** The date and time the item was created. */
  created?: string | null;
  /** The date and time the item was last modified. */
  modified?: string | null;
  /** A short description of Calls app, not shown to end users. */
  name?: string | null;
  /** A Cloudflare-generated unique identifier for a item. */
  uid?: string | null;
}
const ListSfusResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    uid: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ListSfusResponseResult>;

// =============================================================================
// Sfu
// =============================================================================

export interface GetSfuRequest {
  appId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const GetSfuRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    appId: Schema.String.pipe(T.HttpPath("appId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/calls/apps/{appId}",
    }),
  ),
) as unknown as Schema.Codec<GetSfuRequest>;

export interface GetSfuResponse {
  /** The date and time the item was created. */
  created?: string | null;
  /** The date and time the item was last modified. */
  modified?: string | null;
  /** A short description of Calls app, not shown to end users. */
  name?: string | null;
  /** A Cloudflare-generated unique identifier for a item. */
  uid?: string | null;
}

export const GetSfuResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    uid: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetSfuResponse>;

export type GetSfuError = DefaultErrors | CallsAppNotFound | Forbidden;

export const getSfu: API.OperationMethod<
  GetSfuRequest,
  GetSfuResponse,
  GetSfuError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSfuRequest,
  output: GetSfuResponse,
  errors: [CallsAppNotFound, Forbidden],
}));

export interface CreateSfuRequest {
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param: A short description of Calls app, not shown to end users. */
  name?: string;
}

export const CreateSfuRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/accounts/{account_id}/calls/apps" }),
  ),
) as unknown as Schema.Codec<CreateSfuRequest>;

export interface CreateSfuResponse {
  /** The date and time the item was created. */
  created?: string | null;
  /** The date and time the item was last modified. */
  modified?: string | null;
  /** A short description of Calls app, not shown to end users. */
  name?: string | null;
  /** Bearer token */
  secret?: string | null;
  /** A Cloudflare-generated unique identifier for a item. */
  uid?: string | null;
}

export const CreateSfuResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    secret: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    uid: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateSfuResponse>;

export type CreateSfuError = DefaultErrors | Forbidden;

export const createSfu: API.OperationMethod<
  CreateSfuRequest,
  CreateSfuResponse,
  CreateSfuError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSfuRequest,
  output: CreateSfuResponse,
  errors: [Forbidden],
}));

export interface UpdateSfuRequest {
  appId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param: A short description of Calls app, not shown to end users. */
  name?: string;
}

export const UpdateSfuRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    appId: Schema.String.pipe(T.HttpPath("appId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/calls/apps/{appId}",
    }),
  ),
) as unknown as Schema.Codec<UpdateSfuRequest>;

export interface UpdateSfuResponse {
  /** The date and time the item was created. */
  created?: string | null;
  /** The date and time the item was last modified. */
  modified?: string | null;
  /** A short description of Calls app, not shown to end users. */
  name?: string | null;
  /** A Cloudflare-generated unique identifier for a item. */
  uid?: string | null;
}

export const UpdateSfuResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    uid: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdateSfuResponse>;

export type UpdateSfuError = DefaultErrors | CallsAppNotFound | Forbidden;

export const updateSfu: API.OperationMethod<
  UpdateSfuRequest,
  UpdateSfuResponse,
  UpdateSfuError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSfuRequest,
  output: UpdateSfuResponse,
  errors: [CallsAppNotFound, Forbidden],
}));

export interface DeleteSfuRequest {
  appId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const DeleteSfuRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    appId: Schema.String.pipe(T.HttpPath("appId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/calls/apps/{appId}",
    }),
  ),
) as unknown as Schema.Codec<DeleteSfuRequest>;

export interface DeleteSfuResponse {
  /** The date and time the item was created. */
  created?: string | null;
  /** The date and time the item was last modified. */
  modified?: string | null;
  /** A short description of Calls app, not shown to end users. */
  name?: string | null;
  /** A Cloudflare-generated unique identifier for a item. */
  uid?: string | null;
}

export const DeleteSfuResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    uid: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteSfuResponse>;

export type DeleteSfuError = DefaultErrors | CallsAppNotFound | Forbidden;

export const deleteSfu: API.OperationMethod<
  DeleteSfuRequest,
  DeleteSfuResponse,
  DeleteSfuError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSfuRequest,
  output: DeleteSfuResponse,
  errors: [CallsAppNotFound, Forbidden],
}));

// =============================================================================
// Sfus
// =============================================================================

export interface ListSfusRequest {
  /** The account identifier tag. */
  accountId: string;
}

export const ListSfusRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(T.Http({ method: "GET", path: "/accounts/{account_id}/calls/apps" })),
) as unknown as Schema.Codec<ListSfusRequest>;

export interface ListSfusResponse {
  result: {
    created?: string | null;
    modified?: string | null;
    name?: string | null;
    uid?: string | null;
  }[];
}

export const ListSfusResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListSfusResponseResult),
  }),
) as unknown as Schema.Codec<ListSfusResponse>;

export type ListSfusError = DefaultErrors;

export const listSfus: API.PaginatedOperationMethod<
  ListSfusRequest,
  ListSfusResponse,
  ListSfusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSfusRequest,
  output: ListSfusResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Turn
// =============================================================================

export interface GetTurnRequest {
  keyId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const GetTurnRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    keyId: Schema.String.pipe(T.HttpPath("keyId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/calls/turn_keys/{keyId}",
    }),
  ),
) as unknown as Schema.Codec<GetTurnRequest>;

export interface GetTurnResponse {
  /** The date and time the item was created. */
  created?: string | null;
  /** The date and time the item was last modified. */
  modified?: string | null;
  /** A short description of Calls app, not shown to end users. */
  name?: string | null;
  /** A Cloudflare-generated unique identifier for a item. */
  uid?: string | null;
}

export const GetTurnResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    uid: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetTurnResponse>;

export type GetTurnError = DefaultErrors | TurnKeyNotFound | Forbidden;

export const getTurn: API.OperationMethod<
  GetTurnRequest,
  GetTurnResponse,
  GetTurnError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTurnRequest,
  output: GetTurnResponse,
  errors: [TurnKeyNotFound, Forbidden],
}));

export interface ListTurnsRequest {
  /** The account identifier tag. */
  accountId: string;
}

export const ListTurnsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/calls/turn_keys" }),
  ),
) as unknown as Schema.Codec<ListTurnsRequest>;

export interface ListTurnsResponse {
  result: {
    created?: string | null;
    modified?: string | null;
    name?: string | null;
    uid?: string | null;
  }[];
}

export const ListTurnsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListSfusResponseResult),
  }),
) as unknown as Schema.Codec<ListTurnsResponse>;

export type ListTurnsError = DefaultErrors;

export const listTurns: API.PaginatedOperationMethod<
  ListTurnsRequest,
  ListTurnsResponse,
  ListTurnsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTurnsRequest,
  output: ListTurnsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateTurnRequest {
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param: A short description of a TURN key, not shown to end users. */
  name?: string;
}

export const CreateTurnRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/calls/turn_keys",
    }),
  ),
) as unknown as Schema.Codec<CreateTurnRequest>;

export interface CreateTurnResponse {
  /** The date and time the item was created. */
  created?: string | null;
  /** Bearer token */
  key?: string | null;
  /** The date and time the item was last modified. */
  modified?: string | null;
  /** A short description of a TURN key, not shown to end users. */
  name?: string | null;
  /** A Cloudflare-generated unique identifier for a item. */
  uid?: string | null;
}

export const CreateTurnResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    key: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    uid: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        created: "created",
        key: "secret",
        modified: "modified",
        name: "name",
        uid: "uid",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateTurnResponse>;

export type CreateTurnError = DefaultErrors | Forbidden;

export const createTurn: API.OperationMethod<
  CreateTurnRequest,
  CreateTurnResponse,
  CreateTurnError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTurnRequest,
  output: CreateTurnResponse,
  errors: [Forbidden],
}));

export interface UpdateTurnRequest {
  keyId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param: A short description of a TURN key, not shown to end users. */
  name?: string;
}

export const UpdateTurnRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    keyId: Schema.String.pipe(T.HttpPath("keyId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/calls/turn_keys/{keyId}",
    }),
  ),
) as unknown as Schema.Codec<UpdateTurnRequest>;

export interface UpdateTurnResponse {
  /** The date and time the item was created. */
  created?: string | null;
  /** The date and time the item was last modified. */
  modified?: string | null;
  /** A short description of Calls app, not shown to end users. */
  name?: string | null;
  /** A Cloudflare-generated unique identifier for a item. */
  uid?: string | null;
}

export const UpdateTurnResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    uid: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdateTurnResponse>;

export type UpdateTurnError = DefaultErrors | TurnKeyNotFound | Forbidden;

export const updateTurn: API.OperationMethod<
  UpdateTurnRequest,
  UpdateTurnResponse,
  UpdateTurnError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTurnRequest,
  output: UpdateTurnResponse,
  errors: [TurnKeyNotFound, Forbidden],
}));

export interface DeleteTurnRequest {
  keyId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const DeleteTurnRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    keyId: Schema.String.pipe(T.HttpPath("keyId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/calls/turn_keys/{keyId}",
    }),
  ),
) as unknown as Schema.Codec<DeleteTurnRequest>;

export interface DeleteTurnResponse {
  /** The date and time the item was created. */
  created?: string | null;
  /** The date and time the item was last modified. */
  modified?: string | null;
  /** A short description of Calls app, not shown to end users. */
  name?: string | null;
  /** A Cloudflare-generated unique identifier for a item. */
  uid?: string | null;
}

export const DeleteTurnResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    uid: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteTurnResponse>;

export type DeleteTurnError = DefaultErrors | TurnKeyNotFound | Forbidden;

export const deleteTurn: API.OperationMethod<
  DeleteTurnRequest,
  DeleteTurnResponse,
  DeleteTurnError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTurnRequest,
  output: DeleteTurnResponse,
  errors: [TurnKeyNotFound, Forbidden],
}));
