/**
 * Cloudflare CONTENT-SCANNING API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service content-scanning
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

export class ContentScanningNotEnabled extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ContentScanningNotEnabled>()(
    "ContentScanningNotEnabled",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 400, message: { includes: "File Upload Scan not enabled" } }],
) {}

export class ContentScanningNotEntitled extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ContentScanningNotEntitled>()(
    "ContentScanningNotEntitled",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 400, message: { includes: "not entitled" } }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface ListPayloadsResponseResult {
  /** defines the unique ID for this custom scan expression. */
  id?: string | null;
  /** Defines the ruleset expression to use in matching content objects. */
  payload?: string | null;
}
const ListPayloadsResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      payload: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
) as unknown as Schema.Codec<ListPayloadsResponseResult>;

interface Body {
  /** Defines the ruleset expression to use in matching content objects. */
  payload: string;
}
const Body = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    payload: Schema.String,
  }),
) as unknown as Schema.Codec<Body>;

// =============================================================================
// ContentScanning
// =============================================================================

export interface GetContentScanningRequest {
  /** Defines an identifier. */
  zoneId: string;
}

export const GetContentScanningRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/content-upload-scan/settings",
      }),
    ),
  ) as unknown as Schema.Codec<GetContentScanningRequest>;

export interface GetContentScanningResponse {
  /** Defines the last modification date (ISO 8601) of the Content Scanning status. */
  modified?: string | null;
  /** Defines the status of Content Scanning. */
  value?: string | null;
}

export const GetContentScanningResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetContentScanningResponse>;

export type GetContentScanningError = DefaultErrors | Forbidden;

export const getContentScanning: API.OperationMethod<
  GetContentScanningRequest,
  GetContentScanningResponse,
  GetContentScanningError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetContentScanningRequest,
  output: GetContentScanningResponse,
  errors: [Forbidden],
}));

export interface CreateContentScanningRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param: The status value for Content Scanning. */
  value: "enabled" | "disabled" | (string & {});
}

export const CreateContentScanningRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      value: Schema.Union([
        Schema.Literals(["enabled", "disabled"]),
        Schema.String,
      ]),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/content-upload-scan/settings",
      }),
    ),
  ) as unknown as Schema.Codec<CreateContentScanningRequest>;

export interface CreateContentScanningResponse {
  /** Defines the last modification date (ISO 8601) of the Content Scanning status. */
  modified?: string | null;
  /** Defines the status of Content Scanning. */
  value?: string | null;
}

export const CreateContentScanningResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateContentScanningResponse>;

export type CreateContentScanningError =
  | DefaultErrors
  | ContentScanningNotEntitled
  | Forbidden;

export const createContentScanning: API.OperationMethod<
  CreateContentScanningRequest,
  CreateContentScanningResponse,
  CreateContentScanningError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateContentScanningRequest,
  output: CreateContentScanningResponse,
  errors: [ContentScanningNotEntitled, Forbidden],
}));

export interface PutContentScanningRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param: The status value for Content Scanning. */
  value: "enabled" | "disabled" | (string & {});
}

export const PutContentScanningRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      value: Schema.Union([
        Schema.Literals(["enabled", "disabled"]),
        Schema.String,
      ]),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/content-upload-scan/settings",
      }),
    ),
  ) as unknown as Schema.Codec<PutContentScanningRequest>;

export interface PutContentScanningResponse {
  /** Defines the last modification date (ISO 8601) of the Content Scanning status. */
  modified?: string | null;
  /** Defines the status of Content Scanning. */
  value?: string | null;
}

export const PutContentScanningResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutContentScanningResponse>;

export type PutContentScanningError =
  | DefaultErrors
  | ContentScanningNotEntitled
  | Forbidden;

export const putContentScanning: API.OperationMethod<
  PutContentScanningRequest,
  PutContentScanningResponse,
  PutContentScanningError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutContentScanningRequest,
  output: PutContentScanningResponse,
  errors: [ContentScanningNotEntitled, Forbidden],
}));

export interface EnableContentScanningRequest {
  /** Defines an identifier. */
  zoneId: string;
}

export const EnableContentScanningRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/content-upload-scan/enable",
      }),
    ),
  ) as unknown as Schema.Codec<EnableContentScanningRequest>;

export type EnableContentScanningResponse = unknown;

export const EnableContentScanningResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<EnableContentScanningResponse>;

export type EnableContentScanningError = DefaultErrors;

export const enableContentScanning: API.OperationMethod<
  EnableContentScanningRequest,
  EnableContentScanningResponse,
  EnableContentScanningError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnableContentScanningRequest,
  output: EnableContentScanningResponse,
  errors: [],
}));

export interface DisableContentScanningRequest {
  /** Defines an identifier. */
  zoneId: string;
}

export const DisableContentScanningRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/content-upload-scan/disable",
      }),
    ),
  ) as unknown as Schema.Codec<DisableContentScanningRequest>;

export type DisableContentScanningResponse = unknown;

export const DisableContentScanningResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DisableContentScanningResponse>;

export type DisableContentScanningError = DefaultErrors;

export const disableContentScanning: API.OperationMethod<
  DisableContentScanningRequest,
  DisableContentScanningResponse,
  DisableContentScanningError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DisableContentScanningRequest,
  output: DisableContentScanningResponse,
  errors: [],
}));

// =============================================================================
// Payload
// =============================================================================

export interface ListPayloadsRequest {
  /** Defines an identifier. */
  zoneId: string;
}

export const ListPayloadsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/content-upload-scan/payloads",
      }),
    ),
) as unknown as Schema.Codec<ListPayloadsRequest>;

export interface ListPayloadsResponse {
  result: { id?: string | null; payload?: string | null }[];
}

export const ListPayloadsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListPayloadsResponseResult),
    }),
) as unknown as Schema.Codec<ListPayloadsResponse>;

export type ListPayloadsError =
  | DefaultErrors
  | ContentScanningNotEnabled
  | Forbidden;

export const listPayloads: API.PaginatedOperationMethod<
  ListPayloadsRequest,
  ListPayloadsResponse,
  ListPayloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPayloadsRequest,
  output: ListPayloadsResponse,
  errors: [ContentScanningNotEnabled, Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreatePayloadRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param */
  body: { payload: string }[];
}

export const CreatePayloadRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      body: Schema.Array(Body).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/content-upload-scan/payloads",
      }),
    ),
) as unknown as Schema.Codec<CreatePayloadRequest>;

export interface CreatePayloadResponse {
  result: { id?: string | null; payload?: string | null }[];
}

export const CreatePayloadResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListPayloadsResponseResult),
    }),
) as unknown as Schema.Codec<CreatePayloadResponse>;

export type CreatePayloadError =
  | DefaultErrors
  | ContentScanningNotEnabled
  | ContentScanningNotEntitled
  | Forbidden;

export const createPayload: API.PaginatedOperationMethod<
  CreatePayloadRequest,
  CreatePayloadResponse,
  CreatePayloadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: CreatePayloadRequest,
  output: CreatePayloadResponse,
  errors: [ContentScanningNotEnabled, ContentScanningNotEntitled, Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface DeletePayloadRequest {
  expressionId: string;
  /** Defines an identifier. */
  zoneId: string;
}

export const DeletePayloadRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      expressionId: Schema.String.pipe(T.HttpPath("expressionId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/content-upload-scan/payloads/{expressionId}",
      }),
    ),
) as unknown as Schema.Codec<DeletePayloadRequest>;

export interface DeletePayloadResponse {
  result: { id?: string | null; payload?: string | null }[];
}

export const DeletePayloadResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListPayloadsResponseResult),
    }),
) as unknown as Schema.Codec<DeletePayloadResponse>;

export type DeletePayloadError =
  | DefaultErrors
  | ContentScanningNotEnabled
  | Forbidden;

export const deletePayload: API.PaginatedOperationMethod<
  DeletePayloadRequest,
  DeletePayloadResponse,
  DeletePayloadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: DeletePayloadRequest,
  output: DeletePayloadResponse,
  errors: [ContentScanningNotEnabled, Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Setting
// =============================================================================

export interface GetSettingRequest {
  /** Defines an identifier. */
  zoneId: string;
}

export const GetSettingRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/content-upload-scan/settings",
      }),
    ),
) as unknown as Schema.Codec<GetSettingRequest>;

export interface GetSettingResponse {
  /** Defines the last modification date (ISO 8601) of the Content Scanning status. */
  modified?: string | null;
  /** Defines the status of Content Scanning. */
  value?: string | null;
}

export const GetSettingResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetSettingResponse>;

export type GetSettingError = DefaultErrors | Forbidden;

export const getSetting: API.OperationMethod<
  GetSettingRequest,
  GetSettingResponse,
  GetSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingRequest,
  output: GetSettingResponse,
  errors: [Forbidden],
}));
