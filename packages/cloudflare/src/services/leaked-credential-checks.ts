/**
 * Cloudflare LEAKED-CREDENTIAL-CHECKS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service leaked-credential-checks
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// =============================================================================
// Errors
// =============================================================================

export class DetectionNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DetectionNotFound>()("DetectionNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 11002 }],
) {}

export class DetectionQuotaExceeded extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DetectionQuotaExceeded>()("DetectionQuotaExceeded", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 50001 }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class LeakedCredentialChecksDisabled extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<LeakedCredentialChecksDisabled>()(
    "LeakedCredentialChecksDisabled",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 11001 }],
) {}

// =============================================================================
// Detection
// =============================================================================

export interface GetDetectionRequest {
  detectionId: string;
  /** Defines an identifier. */
  zoneId: string;
}

export const GetDetectionRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      detectionId: Schema.String.pipe(T.HttpPath("detectionId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/leaked-credential-checks/detections/{detectionId}",
      }),
    ),
) as unknown as Schema.Schema<GetDetectionRequest>;

export interface GetDetectionResponse {
  /** Defines the unique ID for this custom detection. */
  id?: string | null;
  /** Defines ehe ruleset expression to use in matching the password in a request. */
  password?: string | null;
  /** Defines the ruleset expression to use in matching the username in a request. */
  username?: string | null;
}

export const GetDetectionResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      password: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      username: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetDetectionResponse>;

export type GetDetectionError =
  | DefaultErrors
  | DetectionNotFound
  | LeakedCredentialChecksDisabled
  | Forbidden;

export const getDetection: API.OperationMethod<
  GetDetectionRequest,
  GetDetectionResponse,
  GetDetectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDetectionRequest,
  output: GetDetectionResponse,
  errors: [DetectionNotFound, LeakedCredentialChecksDisabled, Forbidden],
}));

export interface ListDetectionsRequest {
  /** Defines an identifier. */
  zoneId: string;
}

export const ListDetectionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/leaked-credential-checks/detections",
      }),
    ),
) as unknown as Schema.Schema<ListDetectionsRequest>;

export interface ListDetectionsResponse {
  result: {
    id?: string | null;
    password?: string | null;
    username?: string | null;
  }[];
}

export const ListDetectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          password: Schema.optional(
            Schema.Union([SensitiveString, Schema.Null]),
          ),
          username: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
      ),
    }),
  ) as unknown as Schema.Schema<ListDetectionsResponse>;

export type ListDetectionsError =
  | DefaultErrors
  | LeakedCredentialChecksDisabled
  | Forbidden;

export const listDetections: API.PaginatedOperationMethod<
  ListDetectionsRequest,
  ListDetectionsResponse,
  ListDetectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDetectionsRequest,
  output: ListDetectionsResponse,
  errors: [LeakedCredentialChecksDisabled, Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateDetectionRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param: Defines ehe ruleset expression to use in matching the password in a request. */
  password?: string;
  /** Body param: Defines the ruleset expression to use in matching the username in a request. */
  username?: string;
}

export const CreateDetectionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      password: Schema.optional(Schema.String),
      username: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/leaked-credential-checks/detections",
      }),
    ),
  ) as unknown as Schema.Schema<CreateDetectionRequest>;

export interface CreateDetectionResponse {
  /** Defines the unique ID for this custom detection. */
  id?: string | null;
  /** Defines ehe ruleset expression to use in matching the password in a request. */
  password?: string | null;
  /** Defines the ruleset expression to use in matching the username in a request. */
  username?: string | null;
}

export const CreateDetectionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      password: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      username: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateDetectionResponse>;

export type CreateDetectionError =
  | DefaultErrors
  | DetectionQuotaExceeded
  | LeakedCredentialChecksDisabled
  | Forbidden;

export const createDetection: API.OperationMethod<
  CreateDetectionRequest,
  CreateDetectionResponse,
  CreateDetectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateDetectionRequest,
  output: CreateDetectionResponse,
  errors: [DetectionQuotaExceeded, LeakedCredentialChecksDisabled, Forbidden],
}));

export interface UpdateDetectionRequest {
  detectionId: string;
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param: Defines ehe ruleset expression to use in matching the password in a request. */
  password?: string;
  /** Body param: Defines the ruleset expression to use in matching the username in a request. */
  username?: string;
}

export const UpdateDetectionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      detectionId: Schema.String.pipe(T.HttpPath("detectionId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      password: Schema.optional(Schema.String),
      username: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/leaked-credential-checks/detections/{detectionId}",
      }),
    ),
  ) as unknown as Schema.Schema<UpdateDetectionRequest>;

export interface UpdateDetectionResponse {
  /** Defines the unique ID for this custom detection. */
  id?: string | null;
  /** Defines ehe ruleset expression to use in matching the password in a request. */
  password?: string | null;
  /** Defines the ruleset expression to use in matching the username in a request. */
  username?: string | null;
}

export const UpdateDetectionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      password: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      username: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<UpdateDetectionResponse>;

export type UpdateDetectionError =
  | DefaultErrors
  | DetectionNotFound
  | LeakedCredentialChecksDisabled
  | Forbidden;

export const updateDetection: API.OperationMethod<
  UpdateDetectionRequest,
  UpdateDetectionResponse,
  UpdateDetectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateDetectionRequest,
  output: UpdateDetectionResponse,
  errors: [DetectionNotFound, LeakedCredentialChecksDisabled, Forbidden],
}));

export interface DeleteDetectionRequest {
  detectionId: string;
  /** Defines an identifier. */
  zoneId: string;
}

export const DeleteDetectionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      detectionId: Schema.String.pipe(T.HttpPath("detectionId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/leaked-credential-checks/detections/{detectionId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteDetectionRequest>;

export type DeleteDetectionResponse = unknown;

export const DeleteDetectionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteDetectionResponse>;

export type DeleteDetectionError =
  | DefaultErrors
  | DetectionNotFound
  | LeakedCredentialChecksDisabled
  | Forbidden;

export const deleteDetection: API.OperationMethod<
  DeleteDetectionRequest,
  DeleteDetectionResponse,
  DeleteDetectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDetectionRequest,
  output: DeleteDetectionResponse,
  errors: [DetectionNotFound, LeakedCredentialChecksDisabled, Forbidden],
}));

// =============================================================================
// LeakedCredentialCheck
// =============================================================================

export interface GetLeakedCredentialCheckRequest {
  /** Defines an identifier. */
  zoneId: string;
}

export const GetLeakedCredentialCheckRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/leaked-credential-checks",
      }),
    ),
  ) as unknown as Schema.Schema<GetLeakedCredentialCheckRequest>;

export interface GetLeakedCredentialCheckResponse {
  /** Determines whether or not Leaked Credential Checks are enabled. */
  enabled?: boolean | null;
}

export const GetLeakedCredentialCheckResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetLeakedCredentialCheckResponse>;

export type GetLeakedCredentialCheckError = DefaultErrors | Forbidden;

export const getLeakedCredentialCheck: API.OperationMethod<
  GetLeakedCredentialCheckRequest,
  GetLeakedCredentialCheckResponse,
  GetLeakedCredentialCheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLeakedCredentialCheckRequest,
  output: GetLeakedCredentialCheckResponse,
  errors: [Forbidden],
}));

export interface CreateLeakedCredentialCheckRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param: Determines whether or not Leaked Credential Checks are enabled. */
  enabled?: boolean;
}

export const CreateLeakedCredentialCheckRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      enabled: Schema.optional(Schema.Boolean),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/leaked-credential-checks",
      }),
    ),
  ) as unknown as Schema.Schema<CreateLeakedCredentialCheckRequest>;

export interface CreateLeakedCredentialCheckResponse {
  /** Determines whether or not Leaked Credential Checks are enabled. */
  enabled?: boolean | null;
}

export const CreateLeakedCredentialCheckResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateLeakedCredentialCheckResponse>;

export type CreateLeakedCredentialCheckError = DefaultErrors | Forbidden;

export const createLeakedCredentialCheck: API.OperationMethod<
  CreateLeakedCredentialCheckRequest,
  CreateLeakedCredentialCheckResponse,
  CreateLeakedCredentialCheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateLeakedCredentialCheckRequest,
  output: CreateLeakedCredentialCheckResponse,
  errors: [Forbidden],
}));
