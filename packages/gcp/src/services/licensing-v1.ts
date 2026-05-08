// ==========================================================================
// Enterprise License Manager API (licensing v1)
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
  name: "licensing",
  version: "v1",
  rootUrl: "https://licensing.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface LicenseAssignmentInsert {
  /** Email id of the user */
  userId?: string;
}

export const LicenseAssignmentInsert: Schema.Schema<LicenseAssignmentInsert> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.optional(Schema.String),
  }).annotate({ identifier: "LicenseAssignmentInsert" });

export interface LicenseAssignment {
  /** Identifies the resource as a LicenseAssignment, which is `licensing#licenseAssignment`. */
  kind?: string;
  /** Display Name of the product. */
  productName?: string;
  /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
  skuId?: string;
  /** The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes. */
  userId?: string;
  /** ETag of the resource. */
  etags?: string;
  /** Display Name of the sku of the product. */
  skuName?: string;
  /** A product's unique identifier. For more information about products in this version of the API, see Product and SKU IDs. */
  productId?: string;
  /** Link to this page. */
  selfLink?: string;
}

export const LicenseAssignment: Schema.Schema<LicenseAssignment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    productName: Schema.optional(Schema.String),
    skuId: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
    etags: Schema.optional(Schema.String),
    skuName: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "LicenseAssignment" });

export interface LicenseAssignmentList {
  /** Identifies the resource as a collection of LicenseAssignments. */
  kind?: string;
  /** ETag of the resource. */
  etag?: string;
  /** The LicenseAssignments in this page of results. */
  items?: ReadonlyArray<LicenseAssignment>;
  /** The token that you must submit in a subsequent request to retrieve additional license results matching your query parameters. The `maxResults` query string is related to the `nextPageToken` since `maxResults` determines how many entries are returned on each next page. */
  nextPageToken?: string;
}

export const LicenseAssignmentList: Schema.Schema<LicenseAssignmentList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(LicenseAssignment)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "LicenseAssignmentList" });

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

export interface DeleteLicenseAssignmentsRequest {
  /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
  productId: string;
  /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
  skuId: string;
  /** The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes. */
  userId: string;
}

export const DeleteLicenseAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    skuId: Schema.String.pipe(T.HttpPath("skuId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteLicenseAssignmentsRequest>;

export type DeleteLicenseAssignmentsResponse = Empty;
export const DeleteLicenseAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteLicenseAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Revoke a license. */
export const deleteLicenseAssignments: API.OperationMethod<
  DeleteLicenseAssignmentsRequest,
  DeleteLicenseAssignmentsResponse,
  DeleteLicenseAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteLicenseAssignmentsRequest,
  output: DeleteLicenseAssignmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetLicenseAssignmentsRequest {
  /** The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes. */
  userId: string;
  /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
  productId: string;
  /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
  skuId: string;
}

export const GetLicenseAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.HttpPath("userId")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
    skuId: Schema.String.pipe(T.HttpPath("skuId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetLicenseAssignmentsRequest>;

export type GetLicenseAssignmentsResponse = LicenseAssignment;
export const GetLicenseAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LicenseAssignment;

export type GetLicenseAssignmentsError = DefaultErrors | NotFound | Forbidden;

/** Get a specific user's license by product SKU. */
export const getLicenseAssignments: API.OperationMethod<
  GetLicenseAssignmentsRequest,
  GetLicenseAssignmentsResponse,
  GetLicenseAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLicenseAssignmentsRequest,
  output: GetLicenseAssignmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateLicenseAssignmentsRequest {
  /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
  productId: string;
  /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
  skuId: string;
  /** The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes. */
  userId: string;
  /** Request body */
  body?: LicenseAssignment;
}

export const UpdateLicenseAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    skuId: Schema.String.pipe(T.HttpPath("skuId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    body: Schema.optional(LicenseAssignment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateLicenseAssignmentsRequest>;

export type UpdateLicenseAssignmentsResponse = LicenseAssignment;
export const UpdateLicenseAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LicenseAssignment;

export type UpdateLicenseAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reassign a user's product SKU with a different SKU in the same product. */
export const updateLicenseAssignments: API.OperationMethod<
  UpdateLicenseAssignmentsRequest,
  UpdateLicenseAssignmentsResponse,
  UpdateLicenseAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateLicenseAssignmentsRequest,
  output: UpdateLicenseAssignmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchLicenseAssignmentsRequest {
  /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
  productId: string;
  /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
  skuId: string;
  /** The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes. */
  userId: string;
  /** Request body */
  body?: LicenseAssignment;
}

export const PatchLicenseAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    skuId: Schema.String.pipe(T.HttpPath("skuId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    body: Schema.optional(LicenseAssignment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchLicenseAssignmentsRequest>;

export type PatchLicenseAssignmentsResponse = LicenseAssignment;
export const PatchLicenseAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LicenseAssignment;

export type PatchLicenseAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics. */
export const patchLicenseAssignments: API.OperationMethod<
  PatchLicenseAssignmentsRequest,
  PatchLicenseAssignmentsResponse,
  PatchLicenseAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchLicenseAssignmentsRequest,
  output: PatchLicenseAssignmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListForProductAndSkuLicenseAssignmentsRequest {
  /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
  productId: string;
  /** The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error. */
  customerId: string;
  /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
  skuId: string;
  /** Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page. */
  pageToken?: string;
  /** The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number. */
  maxResults?: number;
}

export const ListForProductAndSkuLicenseAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    customerId: Schema.String.pipe(T.HttpQuery("customerId")),
    skuId: Schema.String.pipe(T.HttpPath("skuId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "apps/licensing/v1/product/{productId}/sku/{skuId}/users",
    }),
    svc,
  ) as unknown as Schema.Schema<ListForProductAndSkuLicenseAssignmentsRequest>;

export type ListForProductAndSkuLicenseAssignmentsResponse =
  LicenseAssignmentList;
export const ListForProductAndSkuLicenseAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LicenseAssignmentList;

export type ListForProductAndSkuLicenseAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all users assigned licenses for a specific product SKU. */
export const listForProductAndSkuLicenseAssignments: API.PaginatedOperationMethod<
  ListForProductAndSkuLicenseAssignmentsRequest,
  ListForProductAndSkuLicenseAssignmentsResponse,
  ListForProductAndSkuLicenseAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListForProductAndSkuLicenseAssignmentsRequest,
  output: ListForProductAndSkuLicenseAssignmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface InsertLicenseAssignmentsRequest {
  /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
  productId: string;
  /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
  skuId: string;
  /** Request body */
  body?: LicenseAssignmentInsert;
}

export const InsertLicenseAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productId: Schema.String.pipe(T.HttpPath("productId")),
    skuId: Schema.String.pipe(T.HttpPath("skuId")),
    body: Schema.optional(LicenseAssignmentInsert).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "apps/licensing/v1/product/{productId}/sku/{skuId}/user",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertLicenseAssignmentsRequest>;

export type InsertLicenseAssignmentsResponse = LicenseAssignment;
export const InsertLicenseAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LicenseAssignment;

export type InsertLicenseAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Assign a license. */
export const insertLicenseAssignments: API.OperationMethod<
  InsertLicenseAssignmentsRequest,
  InsertLicenseAssignmentsResponse,
  InsertLicenseAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertLicenseAssignmentsRequest,
  output: InsertLicenseAssignmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListForProductLicenseAssignmentsRequest {
  /** The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error. */
  customerId: string;
  /** The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number. */
  maxResults?: number;
  /** Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page. */
  pageToken?: string;
  /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
  productId: string;
}

export const ListForProductLicenseAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.String.pipe(T.HttpQuery("customerId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    productId: Schema.String.pipe(T.HttpPath("productId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "apps/licensing/v1/product/{productId}/users",
    }),
    svc,
  ) as unknown as Schema.Schema<ListForProductLicenseAssignmentsRequest>;

export type ListForProductLicenseAssignmentsResponse = LicenseAssignmentList;
export const ListForProductLicenseAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LicenseAssignmentList;

export type ListForProductLicenseAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all users assigned licenses for a specific product SKU. */
export const listForProductLicenseAssignments: API.PaginatedOperationMethod<
  ListForProductLicenseAssignmentsRequest,
  ListForProductLicenseAssignmentsResponse,
  ListForProductLicenseAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListForProductLicenseAssignmentsRequest,
  output: ListForProductLicenseAssignmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));
