// ==========================================================================
// Merchant API (merchantapi quota_v1)
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
  name: "merchantapi",
  version: "quota_v1",
  rootUrl: "https://merchantapi.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface MethodDetails {
  /** Output only. The sub-API that the method belongs to. */
  subapi?: string;
  /** Output only. The name of the method for example `products.list`. */
  method?: string;
  /** Output only. The path for the method such as `products/v1/productInputs.insert` */
  path?: string;
  /** Output only. The API version that the method belongs to. */
  version?: string;
}

export const MethodDetails: Schema.Schema<MethodDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subapi: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "MethodDetails" });

export interface QuotaGroup {
  /** Identifier. The resource name of the quota group. Format: accounts/{account}/quotas/{group} Note: There is no guarantee on the format of {group} */
  name?: string;
  /** Output only. The current quota usage, meaning the number of calls already made on a given day to the methods in the group. The daily quota limits reset at at 12:00 PM midday UTC. */
  quotaUsage?: string;
  /** Output only. List of all methods group quota applies to. */
  methodDetails?: ReadonlyArray<MethodDetails>;
  /** Output only. The maximum number of calls allowed per minute for the group. */
  quotaMinuteLimit?: string;
  /** Output only. The maximum number of calls allowed per day for the group. */
  quotaLimit?: string;
}

export const QuotaGroup: Schema.Schema<QuotaGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    quotaUsage: Schema.optional(Schema.String),
    methodDetails: Schema.optional(Schema.Array(MethodDetails)),
    quotaMinuteLimit: Schema.optional(Schema.String),
    quotaLimit: Schema.optional(Schema.String),
  }).annotate({ identifier: "QuotaGroup" });

export interface ListQuotaGroupsResponse {
  /** The methods, current quota usage and limits per each group. The quota is shared between all methods in the group. The groups are sorted in descending order based on quota_usage. */
  quotaGroups?: ReadonlyArray<QuotaGroup>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListQuotaGroupsResponse: Schema.Schema<ListQuotaGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quotaGroups: Schema.optional(Schema.Array(QuotaGroup)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListQuotaGroupsResponse" });

export interface ProductLimit {
  /** Required. The scope of the product limit. */
  scope?: "SCOPE_UNSPECIFIED" | "ADS_NON_EEA" | "ADS_EEA" | (string & {});
  /** Required. The maximum number of products that are allowed in the account in the given scope. */
  limit?: string;
}

export const ProductLimit: Schema.Schema<ProductLimit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductLimit" });

export interface AccountLimit {
  /** The limit for products. */
  products?: ProductLimit;
  /** Identifier. The limit part of the name will be a combination of the type and the scope. For example: `accounts/123/limits/products~ADS_NON_EEA` Format: `accounts/{account}/limits/{limit}` */
  name?: string;
}

export const AccountLimit: Schema.Schema<AccountLimit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    products: Schema.optional(ProductLimit),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountLimit" });

export interface ListAccountLimitsResponse {
  /** The limits for the given account. */
  accountLimits?: ReadonlyArray<AccountLimit>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListAccountLimitsResponse: Schema.Schema<ListAccountLimitsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountLimits: Schema.optional(Schema.Array(AccountLimit)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAccountLimitsResponse" });

export interface ProductChange {
  /** The new value of the changed resource or attribute. If empty, it means that the product was deleted. Will have one of these values : (`approved`, `pending`, `disapproved`, ``) */
  newValue?: string;
  /** Reporting contexts that have the change (if applicable). Currently this field supports only (`SHOPPING_ADS`, `LOCAL_INVENTORY_ADS`, `YOUTUBE_SHOPPING`, `YOUTUBE_CHECKOUT`, `YOUTUBE_AFFILIATE`) from the enum value [ReportingContextEnum](/merchant/api/reference/rest/Shared.Types/ReportingContextEnum) */
  reportingContext?:
    | "REPORTING_CONTEXT_ENUM_UNSPECIFIED"
    | "SHOPPING_ADS"
    | "DISCOVERY_ADS"
    | "DEMAND_GEN_ADS"
    | "DEMAND_GEN_ADS_DISCOVER_SURFACE"
    | "VIDEO_ADS"
    | "DISPLAY_ADS"
    | "LOCAL_INVENTORY_ADS"
    | "VEHICLE_INVENTORY_ADS"
    | "FREE_LISTINGS"
    | "FREE_LISTINGS_UCP_CHECKOUT"
    | "FREE_LOCAL_LISTINGS"
    | "FREE_LOCAL_VEHICLE_LISTINGS"
    | "YOUTUBE_AFFILIATE"
    | "YOUTUBE_SHOPPING"
    | "CLOUD_RETAIL"
    | "LOCAL_CLOUD_RETAIL"
    | "PRODUCT_REVIEWS"
    | "MERCHANT_REVIEWS"
    | "YOUTUBE_CHECKOUT"
    | (string & {});
  /** The old value of the changed resource or attribute. If empty, it means that the product was created. Will have one of these values : (`approved`, `pending`, `disapproved`, ``) */
  oldValue?: string;
  /** Countries that have the change (if applicable). Represented in the ISO 3166 format. */
  regionCode?: string;
}

export const ProductChange: Schema.Schema<ProductChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newValue: Schema.optional(Schema.String),
    reportingContext: Schema.optional(Schema.String),
    oldValue: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductChange" });

export interface ProductStatusChangeMessage {
  /** The target account that owns the entity that changed. Format : `accounts/{merchant_id}` */
  account?: string;
  /** A message to describe the change that happened to the product */
  changes?: ReadonlyArray<ProductChange>;
  /** The attribute in the resource that changed, in this case it will be always `Status`. */
  attribute?: "ATTRIBUTE_UNSPECIFIED" | "STATUS" | (string & {});
  /** The account that manages the merchant's account. can be the same as merchant id if it is standalone account. Format : `accounts/{service_provider_id}` */
  managingAccount?: string;
  /** The time at which the event was generated. If you want to order the notification messages you receive you should rely on this field not on the order of receiving the notifications. */
  eventTime?: string;
  /** The resource that changed, in this case it will always be `Product`. */
  resourceType?: "RESOURCE_UNSPECIFIED" | "PRODUCT" | (string & {});
  /** The product name. Format: `accounts/{account}/products/{product}` */
  resource?: string;
  /** The product id. */
  resourceId?: string;
  /** Optional. The product expiration time. This field will not be set if the notification is sent for a product deletion event. */
  expirationTime?: string;
}

export const ProductStatusChangeMessage: Schema.Schema<ProductStatusChangeMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.optional(Schema.String),
    changes: Schema.optional(Schema.Array(ProductChange)),
    attribute: Schema.optional(Schema.String),
    managingAccount: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductStatusChangeMessage" });

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

export interface GetAccountsLimitsRequest {
  /** Required. The name of the limit to retrieve. Format: `accounts/{account}/limits/{limit}` For example: `accounts/123/limits/products~ADS_NON_EEA` */
  name: string;
}

export const GetAccountsLimitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "quota/v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsLimitsRequest>;

export type GetAccountsLimitsResponse = AccountLimit;
export const GetAccountsLimitsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountLimit;

export type GetAccountsLimitsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves an account limit. */
export const getAccountsLimits: API.OperationMethod<
  GetAccountsLimitsRequest,
  GetAccountsLimitsResponse,
  GetAccountsLimitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsLimitsRequest,
  output: GetAccountsLimitsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListAccountsLimitsRequest {
  /** Required. A filter on the limit `type` is required, for example, `type = "products"`. */
  filter?: string;
  /** Required. The parent account. Format: `accounts/{account}` */
  parent: string;
  /** Optional. The maximum number of limits to return. The service may return fewer than this value. If unspecified, at most 100 limits will be returned. The maximum value is 100; values above 100 will be coerced to 100. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListAccountLimits` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountLimits` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListAccountsLimitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "quota/v1/{+parent}/limits" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsLimitsRequest>;

export type ListAccountsLimitsResponse = ListAccountLimitsResponse;
export const ListAccountsLimitsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAccountLimitsResponse;

export type ListAccountsLimitsError = DefaultErrors | NotFound | Forbidden;

/** Lists the limits of an account. */
export const listAccountsLimits: API.PaginatedOperationMethod<
  ListAccountsLimitsRequest,
  ListAccountsLimitsResponse,
  ListAccountsLimitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsLimitsRequest,
  output: ListAccountsLimitsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListAccountsQuotasRequest {
  /** Required. The merchant account who owns the collection of method quotas Format: accounts/{account} */
  parent: string;
  /** Optional. The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token. */
  pageToken?: string;
}

export const ListAccountsQuotasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "quota/v1/{+parent}/quotas" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsQuotasRequest>;

export type ListAccountsQuotasResponse = ListQuotaGroupsResponse;
export const ListAccountsQuotasResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListQuotaGroupsResponse;

export type ListAccountsQuotasError = DefaultErrors | NotFound | Forbidden;

/** Lists the daily call quota and usage per group for your Merchant Center account. */
export const listAccountsQuotas: API.PaginatedOperationMethod<
  ListAccountsQuotasRequest,
  ListAccountsQuotasResponse,
  ListAccountsQuotasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsQuotasRequest,
  output: ListAccountsQuotasResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
