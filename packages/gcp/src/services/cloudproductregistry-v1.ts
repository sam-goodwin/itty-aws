// ==========================================================================
// Cloud Product Registry API (cloudproductregistry v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "cloudproductregistry",
  version: "v1",
  rootUrl: "https://cloudproductregistry.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ProductSuite {
  /** Output only. The resource name of the Logical Entity that the product suite is replaced by. This field is only populated when this product suite is replaced by some other type. Eg: logicalProducts/{logical_product}, logicalProducts/{logical_product}/variants/{variant}, etc. */
  replacement?: string;
  /** Title of the ProductSuite. */
  title?: string;
  /** Identifier. The resource name of the ProductSuite. Format: productSuites/{product_suite} */
  name?: string;
  /** Output only. LogicalProducts under this suite. Format: logicalProducts/{logical_product} */
  logicalProducts?: ReadonlyArray<string>;
  /** Output only. Indicates whether the product suite has been replaced. If `false`, the product suite is active. If `true`, the product suite has been replaced by another type, and the `replacement` field contains the resource name of that replacement. */
  replaced?: boolean;
}

export const ProductSuite: Schema.Codec<ProductSuite> =
  /*@__PURE__*/ Schema.Struct({
    replacement: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    logicalProducts: Schema.optional(Schema.Array(Schema.String)),
    replaced: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ProductSuite" });

export interface LogicalProductVariant {
  /** Identifier. The resource name of the LogicalProductVariant. Format: logicalProducts/{logical_product}/variants/{variant} */
  name?: string;
  /** Output only. Current Lifecycle state of the logical product variant. */
  lifecycleState?:
    | "LIFECYCLE_STATE_UNSPECIFIED"
    | "LIFECYCLE_STATE_PUBLIC_PREVIEW"
    | "LIFECYCLE_STATE_PRIVATE_GA"
    | "LIFECYCLE_STATE_GA"
    | "LIFECYCLE_STATE_DEPRECATED"
    | (string & {});
  /** Output only. Indicates whether the logical product variant has been replaced. If `false`, the variant is active. If `true`, the variant has been replaced by another type, and the `replacement` field contains the resource name of that replacement. */
  replaced?: boolean;
  /** Display name of the LogicalProductVariant. */
  title?: string;
  /** Output only. The resource name of the Logical Entity that the logical product variant is replaced by. This field is only populated when this logical product variant is replaced by some other type. Eg: logicalProducts/{logical_product}, productSuites/{product_suite}, etc. */
  replacement?: string;
}

export const LogicalProductVariant: Schema.Codec<LogicalProductVariant> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    lifecycleState: Schema.optional(Schema.String),
    replaced: Schema.optional(Schema.Boolean),
    title: Schema.optional(Schema.String),
    replacement: Schema.optional(Schema.String),
  }).annotate({ identifier: "LogicalProductVariant" });

export interface ListLogicalProductVariantsResponse {
  /** Matched LogicalProductVariants */
  logicalProductVariants?: ReadonlyArray<LogicalProductVariant>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListLogicalProductVariantsResponse: Schema.Codec<ListLogicalProductVariantsResponse> =
  /*@__PURE__*/ Schema.Struct({
    logicalProductVariants: Schema.optional(
      Schema.Array(LogicalProductVariant),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLogicalProductVariantsResponse" });

export interface LogicalProduct {
  /** Display name of the LogicalProduct. */
  title?: string;
  /** Product suite associated with the logical product. Format: productSuites/{product_suite}. */
  productSuite?: string;
  /** Identifier. The resource name of the LogicalProduct. Format: logicalProducts/{logical_product}. */
  name?: string;
  /** Output only. Current Lifecycle state of the logical product. */
  lifecycleState?:
    | "LIFECYCLE_STATE_UNSPECIFIED"
    | "LIFECYCLE_STATE_PUBLIC_PREVIEW"
    | "LIFECYCLE_STATE_PRIVATE_GA"
    | "LIFECYCLE_STATE_GA"
    | "LIFECYCLE_STATE_DEPRECATED"
    | (string & {});
  /** Output only. Indicates whether the logical product has been replaced. If `false`, the product is active. If `true`, the product has been replaced by another type, and the `replacement` field contains the resource name of that replacement. */
  replaced?: boolean;
  /** Output only. The resource name of the Logical Entity that the logical product is replaced by. This field is only populated when this logical product is replaced by some other type. Eg: logicalProducts/{logical_product}/variants/{variant}, productSuites/{product_suite}, etc. */
  replacement?: string;
  /** Output only. Child variant resource references. Format: logicalProducts/{logical_product}/variants/{variant} */
  variants?: ReadonlyArray<string>;
}

export const LogicalProduct: Schema.Codec<LogicalProduct> =
  /*@__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    productSuite: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    lifecycleState: Schema.optional(Schema.String),
    replaced: Schema.optional(Schema.Boolean),
    replacement: Schema.optional(Schema.String),
    variants: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LogicalProduct" });

export interface LookupEntityResponse {
  /** Matched LogicalProduct. */
  logicalProduct?: LogicalProduct;
  /** Matched LogicalProductVariant. */
  logicalProductVariant?: LogicalProductVariant;
  /** Matched ProductSuite. */
  productSuite?: ProductSuite;
}

export const LookupEntityResponse: Schema.Codec<LookupEntityResponse> =
  /*@__PURE__*/ Schema.Struct({
    logicalProduct: Schema.optional(LogicalProduct),
    logicalProductVariant: Schema.optional(LogicalProductVariant),
    productSuite: Schema.optional(ProductSuite),
  }).annotate({ identifier: "LookupEntityResponse" });

export interface ListLogicalProductsResponse {
  /** Matched LogicalProducts */
  logicalProducts?: ReadonlyArray<LogicalProduct>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListLogicalProductsResponse: Schema.Codec<ListLogicalProductsResponse> =
  /*@__PURE__*/ Schema.Struct({
    logicalProducts: Schema.optional(Schema.Array(LogicalProduct)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLogicalProductsResponse" });

export interface ListProductSuitesResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Matched ProductSuites */
  productSuites?: ReadonlyArray<ProductSuite>;
}

export const ListProductSuitesResponse: Schema.Codec<ListProductSuitesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    productSuites: Schema.optional(Schema.Array(ProductSuite)),
  }).annotate({ identifier: "ListProductSuitesResponse" });

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

// ==========================================================================
// Operations
// ==========================================================================

export interface ListLogicalProductsRequest {
  /** Optional. The maximum number of logical products to return. The service may return fewer than this value. If unspecified, at most 100 logical products will be returned. The maximum value is 500; values above 500 will be coerced to 500. */
  pageSize?: number;
  /** Optional. The filter expression for listing logical products. Filter syntax: https://google.aip.dev/160 Supported fields: suite_id */
  filter?: string;
  /** Optional. A page token, received from a previous `ListLogicalProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLogicalProducts` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListLogicalProductsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/logicalProducts" }),
    svc,
  ) as unknown as Schema.Codec<ListLogicalProductsRequest>;

export type ListLogicalProductsResponse_Op = ListLogicalProductsResponse;
export const ListLogicalProductsResponse_Op =
  /*@__PURE__*/ ListLogicalProductsResponse;

export type ListLogicalProductsError = DefaultErrors | NotFound | Forbidden;

/** Lists LogicalProducts matching given criteria. */
export const listLogicalProducts: API.PaginatedOperationMethod<
  ListLogicalProductsRequest,
  ListLogicalProductsResponse_Op,
  ListLogicalProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLogicalProductsRequest,
  output: ListLogicalProductsResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetLogicalProductsRequest {
  /** Required. The name of the LogicalProduct to retrieve. Format: logicalProducts/{logical_product} */
  name: string;
}

export const GetLogicalProductsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetLogicalProductsRequest>;

export type GetLogicalProductsResponse = LogicalProduct;
export const GetLogicalProductsResponse = /*@__PURE__*/ LogicalProduct;

export type GetLogicalProductsError = DefaultErrors | NotFound | Forbidden;

/** Gets details of a LogicalProduct. */
export const getLogicalProducts: API.OperationMethod<
  GetLogicalProductsRequest,
  GetLogicalProductsResponse,
  GetLogicalProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLogicalProductsRequest,
  output: GetLogicalProductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface LookupEntityLogicalProductsRequest {
  /** Required. Entity uri to look up. Supported Formats: logicalProducts/{logical_product} logicalProducts/{logical_product}/variants/{variant} productSuites/{product_suite} */
  lookupUri: string;
}

export const LookupEntityLogicalProductsRequest =
  /*@__PURE__*/ Schema.Struct({
    lookupUri: Schema.String.pipe(T.HttpPath("lookupUri")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+lookupUri}:lookupEntity" }),
    svc,
  ) as unknown as Schema.Codec<LookupEntityLogicalProductsRequest>;

export type LookupEntityLogicalProductsResponse = LookupEntityResponse;
export const LookupEntityLogicalProductsResponse =
  /*@__PURE__*/ LookupEntityResponse;

export type LookupEntityLogicalProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Look up entities. */
export const lookupEntityLogicalProducts: API.OperationMethod<
  LookupEntityLogicalProductsRequest,
  LookupEntityLogicalProductsResponse,
  LookupEntityLogicalProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: LookupEntityLogicalProductsRequest,
  output: LookupEntityLogicalProductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListLogicalProductsVariantsRequest {
  /** Optional. A page token, received from a previous `ListLogicalProductVariants` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLogicalProductVariants` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. Parent logical product id. Format: logicalProducts/{logical_product} */
  parent: string;
  /** Optional. The maximum number of logical product variants to return. The service may return fewer than this value. If unspecified, at most 100 logical product variants will be returned. The maximum value is 500; values above 500 will be coerced to 500. */
  pageSize?: number;
}

export const ListLogicalProductsVariantsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/variants" }),
    svc,
  ) as unknown as Schema.Codec<ListLogicalProductsVariantsRequest>;

export type ListLogicalProductsVariantsResponse =
  ListLogicalProductVariantsResponse;
export const ListLogicalProductsVariantsResponse =
  /*@__PURE__*/ ListLogicalProductVariantsResponse;

export type ListLogicalProductsVariantsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists LogicalProductVariants matching given criteria. */
export const listLogicalProductsVariants: API.PaginatedOperationMethod<
  ListLogicalProductsVariantsRequest,
  ListLogicalProductsVariantsResponse,
  ListLogicalProductsVariantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLogicalProductsVariantsRequest,
  output: ListLogicalProductsVariantsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetLogicalProductsVariantsRequest {
  /** Required. The name of the LogicalProductVariant to retrieve. Format: logicalProducts/{logical_product}/variants/{variant} */
  name: string;
}

export const GetLogicalProductsVariantsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetLogicalProductsVariantsRequest>;

export type GetLogicalProductsVariantsResponse = LogicalProductVariant;
export const GetLogicalProductsVariantsResponse =
  /*@__PURE__*/ LogicalProductVariant;

export type GetLogicalProductsVariantsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get details of a LogicalProductVariant. */
export const getLogicalProductsVariants: API.OperationMethod<
  GetLogicalProductsVariantsRequest,
  GetLogicalProductsVariantsResponse,
  GetLogicalProductsVariantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLogicalProductsVariantsRequest,
  output: GetLogicalProductsVariantsResponse,
  errors: [NotFound, Forbidden],
}));

export interface LookupEntityLogicalProductsVariantsRequest {
  /** Required. Entity uri to look up. Supported Formats: logicalProducts/{logical_product} logicalProducts/{logical_product}/variants/{variant} productSuites/{product_suite} */
  lookupUri: string;
}

export const LookupEntityLogicalProductsVariantsRequest =
  /*@__PURE__*/ Schema.Struct({
    lookupUri: Schema.String.pipe(T.HttpPath("lookupUri")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+lookupUri}:lookupEntity" }),
    svc,
  ) as unknown as Schema.Codec<LookupEntityLogicalProductsVariantsRequest>;

export type LookupEntityLogicalProductsVariantsResponse = LookupEntityResponse;
export const LookupEntityLogicalProductsVariantsResponse =
  /*@__PURE__*/ LookupEntityResponse;

export type LookupEntityLogicalProductsVariantsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Look up entities. */
export const lookupEntityLogicalProductsVariants: API.OperationMethod<
  LookupEntityLogicalProductsVariantsRequest,
  LookupEntityLogicalProductsVariantsResponse,
  LookupEntityLogicalProductsVariantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: LookupEntityLogicalProductsVariantsRequest,
  output: LookupEntityLogicalProductsVariantsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProductSuitesRequest {
  /** Optional. A page token, received from a previous `ListProductSuites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProductSuites` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of suites to return. The service may return fewer than this value. If unspecified, at most 100 suites will be returned. The maximum value is 500; values above 500 will be coerced to 500. */
  pageSize?: number;
}

export const ListProductSuitesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/productSuites" }),
    svc,
  ) as unknown as Schema.Codec<ListProductSuitesRequest>;

export type ListProductSuitesResponse_Op = ListProductSuitesResponse;
export const ListProductSuitesResponse_Op =
  /*@__PURE__*/ ListProductSuitesResponse;

export type ListProductSuitesError = DefaultErrors | NotFound | Forbidden;

/** Lists ProductSuites. */
export const listProductSuites: API.PaginatedOperationMethod<
  ListProductSuitesRequest,
  ListProductSuitesResponse_Op,
  ListProductSuitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProductSuitesRequest,
  output: ListProductSuitesResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProductSuitesRequest {
  /** Required. The name of the ProductSuite to retrieve. Format: productSuites/{product_suite} */
  name: string;
}

export const GetProductSuitesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProductSuitesRequest>;

export type GetProductSuitesResponse = ProductSuite;
export const GetProductSuitesResponse = /*@__PURE__*/ ProductSuite;

export type GetProductSuitesError = DefaultErrors | NotFound | Forbidden;

/** Get details of a ProductSuite. */
export const getProductSuites: API.OperationMethod<
  GetProductSuitesRequest,
  GetProductSuitesResponse,
  GetProductSuitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProductSuitesRequest,
  output: GetProductSuitesResponse,
  errors: [NotFound, Forbidden],
}));

export interface LookupEntityProductSuitesRequest {
  /** Required. Entity uri to look up. Supported Formats: logicalProducts/{logical_product} logicalProducts/{logical_product}/variants/{variant} productSuites/{product_suite} */
  lookupUri: string;
}

export const LookupEntityProductSuitesRequest =
  /*@__PURE__*/ Schema.Struct({
    lookupUri: Schema.String.pipe(T.HttpPath("lookupUri")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+lookupUri}:lookupEntity" }),
    svc,
  ) as unknown as Schema.Codec<LookupEntityProductSuitesRequest>;

export type LookupEntityProductSuitesResponse = LookupEntityResponse;
export const LookupEntityProductSuitesResponse =
  /*@__PURE__*/ LookupEntityResponse;

export type LookupEntityProductSuitesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Look up entities. */
export const lookupEntityProductSuites: API.OperationMethod<
  LookupEntityProductSuitesRequest,
  LookupEntityProductSuitesResponse,
  LookupEntityProductSuitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: LookupEntityProductSuitesRequest,
  output: LookupEntityProductSuitesResponse,
  errors: [NotFound, Forbidden],
}));
