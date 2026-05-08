// ==========================================================================
// Google Play Grouping API (playgrouping v1alpha1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "playgrouping",
  version: "v1alpha1",
  rootUrl: "https://playgrouping.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Tag {
  /** A time value of the tag. */
  timeValue?: string;
  /** A string value of the tag. */
  stringValue?: string;
  /** Required. Key for the tag. */
  key?: string;
  /** A boolean value of the tag. */
  booleanValue?: boolean;
  /** A signed 64-bit integer value of the tag. */
  int64Value?: string;
}

export const Tag: Schema.Schema<Tag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeValue: Schema.optional(Schema.String),
    stringValue: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    booleanValue: Schema.optional(Schema.Boolean),
    int64Value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Tag" });

export interface CreateOrUpdateTagsRequest {
  /** Tags to be inserted or updated. */
  tags?: ReadonlyArray<Tag>;
}

export const CreateOrUpdateTagsRequest: Schema.Schema<CreateOrUpdateTagsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(Tag)),
  }).annotate({ identifier: "CreateOrUpdateTagsRequest" });

export interface VerifyTokenRequest {
  /** Required. Persona represented by the token. Format: personas/{persona} */
  persona?: string;
}

export const VerifyTokenRequest: Schema.Schema<VerifyTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    persona: Schema.optional(Schema.String),
  }).annotate({ identifier: "VerifyTokenRequest" });

export interface VerifyTokenResponse {}

export const VerifyTokenResponse: Schema.Schema<VerifyTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "VerifyTokenResponse",
  });

export interface CreateOrUpdateTagsResponse {
  /** All requested tags are returned, including pre-existing ones. */
  tags?: ReadonlyArray<Tag>;
}

export const CreateOrUpdateTagsResponse: Schema.Schema<CreateOrUpdateTagsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(Tag)),
  }).annotate({ identifier: "CreateOrUpdateTagsResponse" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface VerifyAppsTokensRequest {
  /** Required. The token to be verified. Format: tokens/{token} */
  token: string;
  /** Required. App the token belongs to. Format: apps/{package_name} */
  appPackage: string;
  /** Request body */
  body?: VerifyTokenRequest;
}

export const VerifyAppsTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String.pipe(T.HttpPath("token")),
    appPackage: Schema.String.pipe(T.HttpPath("appPackage")),
    body: Schema.optional(VerifyTokenRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+appPackage}/{+token}:verify",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<VerifyAppsTokensRequest>;

export type VerifyAppsTokensResponse = VerifyTokenResponse;
export const VerifyAppsTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ VerifyTokenResponse;

export type VerifyAppsTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Verify an API token by asserting the app and persona it belongs to. The verification is a protection against client-side attacks and will fail if the contents of the token don't match the provided values. A token must be verified before it can be used to manipulate user tags. */
export const verifyAppsTokens: API.OperationMethod<
  VerifyAppsTokensRequest,
  VerifyAppsTokensResponse,
  VerifyAppsTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: VerifyAppsTokensRequest,
  output: VerifyAppsTokensResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrUpdateAppsTokensTagsRequest {
  /** Required. Token for which the tags are being inserted or updated. Format: tokens/{token} */
  token: string;
  /** Required. App whose tags are being manipulated. Format: apps/{package_name} */
  appPackage: string;
  /** Request body */
  body?: CreateOrUpdateTagsRequest;
}

export const CreateOrUpdateAppsTokensTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String.pipe(T.HttpPath("token")),
    appPackage: Schema.String.pipe(T.HttpPath("appPackage")),
    body: Schema.optional(CreateOrUpdateTagsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+appPackage}/{+token}/tags:createOrUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrUpdateAppsTokensTagsRequest>;

export type CreateOrUpdateAppsTokensTagsResponse = CreateOrUpdateTagsResponse;
export const CreateOrUpdateAppsTokensTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreateOrUpdateTagsResponse;

export type CreateOrUpdateAppsTokensTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create or update tags for the user and app that are represented by the given token. */
export const createOrUpdateAppsTokensTags: API.OperationMethod<
  CreateOrUpdateAppsTokensTagsRequest,
  CreateOrUpdateAppsTokensTagsResponse,
  CreateOrUpdateAppsTokensTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrUpdateAppsTokensTagsRequest,
  output: CreateOrUpdateAppsTokensTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
