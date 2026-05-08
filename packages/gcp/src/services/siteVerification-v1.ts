// ==========================================================================
// Google Site Verification API (siteVerification v1)
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
  name: "siteVerification",
  version: "v1",
  rootUrl: "https://www.googleapis.com/",
  servicePath: "siteVerification/v1/",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface SiteVerificationWebResourceResource {
  /** The email addresses of all verified owners. */
  owners?: ReadonlyArray<string>;
  /** The string used to identify this site. This value should be used in the "id" portion of the REST URL for the Get, Update, and Delete operations. */
  id?: string;
  /** The address and type of a site that is verified or will be verified. */
  site?: { identifier?: string; type?: string };
}

export const SiteVerificationWebResourceResource: Schema.Schema<SiteVerificationWebResourceResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    owners: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
    site: Schema.optional(
      Schema.Struct({
        identifier: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  }).annotate({ identifier: "SiteVerificationWebResourceResource" });

export interface SiteVerificationWebResourceListResponse {
  /** The list of sites that are owned by the authenticated user. */
  items?: ReadonlyArray<SiteVerificationWebResourceResource>;
}

export const SiteVerificationWebResourceListResponse: Schema.Schema<SiteVerificationWebResourceListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(SiteVerificationWebResourceResource)),
  }).annotate({ identifier: "SiteVerificationWebResourceListResponse" });

export interface SiteVerificationWebResourceGettokenRequest {
  /** The site for which a verification token will be generated. */
  site?: { identifier?: string; type?: string };
  /** The verification method that will be used to verify this site. For sites, 'FILE' or 'META' methods may be used. For domains, only 'DNS' may be used. */
  verificationMethod?: string;
}

export const SiteVerificationWebResourceGettokenRequest: Schema.Schema<SiteVerificationWebResourceGettokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    site: Schema.optional(
      Schema.Struct({
        identifier: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    verificationMethod: Schema.optional(Schema.String),
  }).annotate({ identifier: "SiteVerificationWebResourceGettokenRequest" });

export interface SiteVerificationWebResourceGettokenResponse {
  /** The verification token. The token must be placed appropriately in order for verification to succeed. */
  token?: string;
  /** The verification method to use in conjunction with this token. For FILE, the token should be placed in the top-level directory of the site, stored inside a file of the same name. For META, the token should be placed in the HEAD tag of the default page that is loaded for the site. For DNS, the token should be placed in a TXT record of the domain. */
  method?: string;
}

export const SiteVerificationWebResourceGettokenResponse: Schema.Schema<SiteVerificationWebResourceGettokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
  }).annotate({ identifier: "SiteVerificationWebResourceGettokenResponse" });

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

export interface InsertWebResourceRequest {
  /** The method to use for verifying a site or domain. */
  verificationMethod: string;
  /** Request body */
  body?: SiteVerificationWebResourceResource;
}

export const InsertWebResourceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verificationMethod: Schema.String.pipe(T.HttpQuery("verificationMethod")),
    body: Schema.optional(SiteVerificationWebResourceResource).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "webResource", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<InsertWebResourceRequest>;

export type InsertWebResourceResponse = SiteVerificationWebResourceResource;
export const InsertWebResourceResponse =
  /*@__PURE__*/ /*#__PURE__*/ SiteVerificationWebResourceResource;

export type InsertWebResourceError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Attempt verification of a website or domain. */
export const insertWebResource: API.OperationMethod<
  InsertWebResourceRequest,
  InsertWebResourceResponse,
  InsertWebResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertWebResourceRequest,
  output: InsertWebResourceResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetTokenWebResourceRequest {
  /** Request body */
  body?: SiteVerificationWebResourceGettokenRequest;
}

export const GetTokenWebResourceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(SiteVerificationWebResourceGettokenRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "token", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<GetTokenWebResourceRequest>;

export type GetTokenWebResourceResponse =
  SiteVerificationWebResourceGettokenResponse;
export const GetTokenWebResourceResponse =
  /*@__PURE__*/ /*#__PURE__*/ SiteVerificationWebResourceGettokenResponse;

export type GetTokenWebResourceError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Get a verification token for placing on a website or domain. */
export const getTokenWebResource: API.OperationMethod<
  GetTokenWebResourceRequest,
  GetTokenWebResourceResponse,
  GetTokenWebResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTokenWebResourceRequest,
  output: GetTokenWebResourceResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchWebResourceRequest {
  /** The id of a verified site or domain. */
  id: string;
  /** Request body */
  body?: SiteVerificationWebResourceResource;
}

export const PatchWebResourceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    body: Schema.optional(SiteVerificationWebResourceResource).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "webResource/{id}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchWebResourceRequest>;

export type PatchWebResourceResponse = SiteVerificationWebResourceResource;
export const PatchWebResourceResponse =
  /*@__PURE__*/ /*#__PURE__*/ SiteVerificationWebResourceResource;

export type PatchWebResourceError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Modify the list of owners for your website or domain. This method supports patch semantics. */
export const patchWebResource: API.OperationMethod<
  PatchWebResourceRequest,
  PatchWebResourceResponse,
  PatchWebResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchWebResourceRequest,
  output: PatchWebResourceResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateWebResourceRequest {
  /** The id of a verified site or domain. */
  id: string;
  /** Request body */
  body?: SiteVerificationWebResourceResource;
}

export const UpdateWebResourceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    body: Schema.optional(SiteVerificationWebResourceResource).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PUT", path: "webResource/{id}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateWebResourceRequest>;

export type UpdateWebResourceResponse = SiteVerificationWebResourceResource;
export const UpdateWebResourceResponse =
  /*@__PURE__*/ /*#__PURE__*/ SiteVerificationWebResourceResource;

export type UpdateWebResourceError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Modify the list of owners for your website or domain. */
export const updateWebResource: API.OperationMethod<
  UpdateWebResourceRequest,
  UpdateWebResourceResponse,
  UpdateWebResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateWebResourceRequest,
  output: UpdateWebResourceResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteWebResourceRequest {
  /** The id of a verified site or domain. */
  id: string;
}

export const DeleteWebResourceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({ method: "DELETE", path: "webResource/{id}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteWebResourceRequest>;

export interface DeleteWebResourceResponse {}
export const DeleteWebResourceResponse: Schema.Schema<DeleteWebResourceResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteWebResourceResponse>;

export type DeleteWebResourceError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Relinquish ownership of a website or domain. */
export const deleteWebResource: API.OperationMethod<
  DeleteWebResourceRequest,
  DeleteWebResourceResponse,
  DeleteWebResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteWebResourceRequest,
  output: DeleteWebResourceResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListWebResourceRequest {}

export const ListWebResourceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "webResource" }),
  svc,
) as unknown as Schema.Schema<ListWebResourceRequest>;

export type ListWebResourceResponse = SiteVerificationWebResourceListResponse;
export const ListWebResourceResponse =
  /*@__PURE__*/ /*#__PURE__*/ SiteVerificationWebResourceListResponse;

export type ListWebResourceError = DefaultErrors | NotFound | Forbidden;

/** Get the list of your verified websites and domains. */
export const listWebResource: API.OperationMethod<
  ListWebResourceRequest,
  ListWebResourceResponse,
  ListWebResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListWebResourceRequest,
  output: ListWebResourceResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetWebResourceRequest {
  /** The id of a verified site or domain. */
  id: string;
}

export const GetWebResourceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({ method: "GET", path: "webResource/{id}" }),
  svc,
) as unknown as Schema.Schema<GetWebResourceRequest>;

export type GetWebResourceResponse = SiteVerificationWebResourceResource;
export const GetWebResourceResponse =
  /*@__PURE__*/ /*#__PURE__*/ SiteVerificationWebResourceResource;

export type GetWebResourceError = DefaultErrors | NotFound | Forbidden;

/** Get the most current data for a website or domain. */
export const getWebResource: API.OperationMethod<
  GetWebResourceRequest,
  GetWebResourceResponse,
  GetWebResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetWebResourceRequest,
  output: GetWebResourceResponse,
  errors: [NotFound, Forbidden],
}));
