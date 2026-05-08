// ==========================================================================
// Merchant API (merchantapi conversions_v1)
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
  version: "conversions_v1",
  rootUrl: "https://merchantapi.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ConversionType {
  /** Output only. Conversion event name, as it'll be reported by the client. */
  name?: string;
  /** Output only. Option indicating if the type should be included in Merchant Center reporting. */
  report?: boolean;
}

export const ConversionType: Schema.Schema<ConversionType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    report: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ConversionType" });

export interface AttributionSettings {
  /** Required. Lookback window (in days) used for attribution in this source. Supported values are `7`, `30` & `40`. */
  attributionLookbackWindowDays?: number;
  /** Immutable. Unordered list. List of different conversion types a conversion event can be classified as. A standard "purchase" type will be automatically created if this list is empty at creation time. */
  conversionType?: ReadonlyArray<ConversionType>;
  /** Required. Attribution model. */
  attributionModel?:
    | "ATTRIBUTION_MODEL_UNSPECIFIED"
    | "CROSS_CHANNEL_LAST_CLICK"
    | "ADS_PREFERRED_LAST_CLICK"
    | "CROSS_CHANNEL_DATA_DRIVEN"
    | "CROSS_CHANNEL_FIRST_CLICK"
    | "CROSS_CHANNEL_LINEAR"
    | "CROSS_CHANNEL_POSITION_BASED"
    | "CROSS_CHANNEL_TIME_DECAY"
    | (string & {});
}

export const AttributionSettings: Schema.Schema<AttributionSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributionLookbackWindowDays: Schema.optional(Schema.Number),
    conversionType: Schema.optional(Schema.Array(ConversionType)),
    attributionModel: Schema.optional(Schema.String),
  }).annotate({ identifier: "AttributionSettings" });

export interface GoogleAnalyticsLink {
  /** Required. Immutable. ID of the Google Analytics property the merchant is linked to. */
  propertyId?: string;
  /** Output only. Name of the Google Analytics property the merchant is linked to. */
  property?: string;
  /** Output only. Attribution settings for the linked Google Analytics property. */
  attributionSettings?: AttributionSettings;
}

export const GoogleAnalyticsLink: Schema.Schema<GoogleAnalyticsLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    propertyId: Schema.optional(Schema.String),
    property: Schema.optional(Schema.String),
    attributionSettings: Schema.optional(AttributionSettings),
  }).annotate({ identifier: "GoogleAnalyticsLink" });

export interface MerchantCenterDestination {
  /** Required. Merchant-specified display name for the destination. This is the name that identifies the conversion source within the Merchant Center UI. The maximum length is 64 characters. */
  displayName?: string;
  /** Output only. Merchant Center Destination ID. */
  destination?: string;
  /** Required. Three-letter currency code (ISO 4217). The currency code defines in which currency the conversions sent to this destination will be reported in Merchant Center. */
  currencyCode?: string;
  /** Required. Attribution settings used for the Merchant Center Destination. */
  attributionSettings?: AttributionSettings;
}

export const MerchantCenterDestination: Schema.Schema<MerchantCenterDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    destination: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
    attributionSettings: Schema.optional(AttributionSettings),
  }).annotate({ identifier: "MerchantCenterDestination" });

export interface ConversionSource {
  /** Immutable. Conversion Source of type "Link to Google Analytics Property". */
  googleAnalyticsLink?: GoogleAnalyticsLink;
  /** Output only. Controller of the conversion source. */
  controller?:
    | "CONTROLLER_UNSPECIFIED"
    | "MERCHANT"
    | "YOUTUBE_AFFILIATES"
    | (string & {});
  /** Output only. Current state of this conversion source. Can't be edited through the API. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "ARCHIVED"
    | "PENDING"
    | (string & {});
  /** Conversion Source of type "Merchant Center Tag Destination". */
  merchantCenterDestination?: MerchantCenterDestination;
  /** Output only. Identifier. Generated by the Content API upon creation of a new `ConversionSource`. Format: `[a-z]{4}:.+` The four characters before the colon represent the type of conversion source. Content after the colon represents the ID of the conversion source within that type. The ID of two different conversion sources might be the same across different types. The following type prefixes are supported: * `galk`: For GoogleAnalyticsLink sources. * `mcdn`: For MerchantCenterDestination sources. */
  name?: string;
  /** Output only. The time when an archived conversion source becomes permanently deleted and is no longer available to undelete. */
  expireTime?: string;
}

export const ConversionSource: Schema.Schema<ConversionSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleAnalyticsLink: Schema.optional(GoogleAnalyticsLink),
    controller: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    merchantCenterDestination: Schema.optional(MerchantCenterDestination),
    name: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConversionSource" });

export interface ListConversionSourcesResponse {
  /** List of conversion sources. */
  conversionSources?: ReadonlyArray<ConversionSource>;
  /** Token to be used to fetch the next results page. */
  nextPageToken?: string;
}

export const ListConversionSourcesResponse: Schema.Schema<ListConversionSourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversionSources: Schema.optional(Schema.Array(ConversionSource)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListConversionSourcesResponse" });

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
  /** Countries that have the change (if applicable). Represented in the ISO 3166 format. */
  regionCode?: string;
  /** The old value of the changed resource or attribute. If empty, it means that the product was created. Will have one of these values : (`approved`, `pending`, `disapproved`, ``) */
  oldValue?: string;
}

export const ProductChange: Schema.Schema<ProductChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newValue: Schema.optional(Schema.String),
    reportingContext: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    oldValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductChange" });

export interface UndeleteConversionSourceRequest {}

export const UndeleteConversionSourceRequest: Schema.Schema<UndeleteConversionSourceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UndeleteConversionSourceRequest",
  });

export interface ProductStatusChangeMessage {
  /** A message to describe the change that happened to the product */
  changes?: ReadonlyArray<ProductChange>;
  /** The product id. */
  resourceId?: string;
  /** The time at which the event was generated. If you want to order the notification messages you receive you should rely on this field not on the order of receiving the notifications. */
  eventTime?: string;
  /** The product name. Format: `accounts/{account}/products/{product}` */
  resource?: string;
  /** The target account that owns the entity that changed. Format : `accounts/{merchant_id}` */
  account?: string;
  /** The resource that changed, in this case it will always be `Product`. */
  resourceType?: "RESOURCE_UNSPECIFIED" | "PRODUCT" | (string & {});
  /** The attribute in the resource that changed, in this case it will be always `Status`. */
  attribute?: "ATTRIBUTE_UNSPECIFIED" | "STATUS" | (string & {});
  /** The account that manages the merchant's account. can be the same as merchant id if it is standalone account. Format : `accounts/{service_provider_id}` */
  managingAccount?: string;
  /** Optional. The product expiration time. This field will not be set if the notification is sent for a product deletion event. */
  expirationTime?: string;
}

export const ProductStatusChangeMessage: Schema.Schema<ProductStatusChangeMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    changes: Schema.optional(Schema.Array(ProductChange)),
    resourceId: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    account: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    attribute: Schema.optional(Schema.String),
    managingAccount: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductStatusChangeMessage" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

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

export interface CreateAccountsConversionSourcesRequest {
  /** Required. The merchant account that will own the new conversion source. Format: `accounts/{account}` */
  parent: string;
  /** Request body */
  body?: ConversionSource;
}

export const CreateAccountsConversionSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ConversionSource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "conversions/v1/{+parent}/conversionSources",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsConversionSourcesRequest>;

export type CreateAccountsConversionSourcesResponse = ConversionSource;
export const CreateAccountsConversionSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConversionSource;

export type CreateAccountsConversionSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new conversion source. */
export const createAccountsConversionSources: API.OperationMethod<
  CreateAccountsConversionSourcesRequest,
  CreateAccountsConversionSourcesResponse,
  CreateAccountsConversionSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsConversionSourcesRequest,
  output: CreateAccountsConversionSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountsConversionSourcesRequest {
  /** Required. The name of the conversion source to be fetched. Format: `accounts/{account}/conversionSources/{conversion_source}` */
  name: string;
}

export const GetAccountsConversionSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "conversions/v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsConversionSourcesRequest>;

export type GetAccountsConversionSourcesResponse = ConversionSource;
export const GetAccountsConversionSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConversionSource;

export type GetAccountsConversionSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches a conversion source. */
export const getAccountsConversionSources: API.OperationMethod<
  GetAccountsConversionSourcesRequest,
  GetAccountsConversionSourcesResponse,
  GetAccountsConversionSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsConversionSourcesRequest,
  output: GetAccountsConversionSourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListAccountsConversionSourcesRequest {
  /** Optional. Show deleted (archived) conversion sources. By default, deleted conversion sources are not returned. */
  showDeleted?: boolean;
  /** Required. The merchant account who owns the collection of conversion sources. Format: `accounts/{account}` */
  parent: string;
  /** Optional. The maximum number of conversion sources to return in a page. If no `page_size` is specified, `100` is used as the default value. The maximum value is `200`. Values above `200` will be coerced to `200`. Regardless of pagination, at most `200` conversion sources are returned in total. */
  pageSize?: number;
  /** Optional. Page token. */
  pageToken?: string;
}

export const ListAccountsConversionSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "conversions/v1/{+parent}/conversionSources",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsConversionSourcesRequest>;

export type ListAccountsConversionSourcesResponse =
  ListConversionSourcesResponse;
export const ListAccountsConversionSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConversionSourcesResponse;

export type ListAccountsConversionSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the list of conversion sources the caller has access to. */
export const listAccountsConversionSources: API.PaginatedOperationMethod<
  ListAccountsConversionSourcesRequest,
  ListAccountsConversionSourcesResponse,
  ListAccountsConversionSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsConversionSourcesRequest,
  output: ListAccountsConversionSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteAccountsConversionSourcesRequest {
  /** Required. The name of the conversion source to be deleted. Format: `accounts/{account}/conversionSources/{conversion_source}` */
  name: string;
}

export const DeleteAccountsConversionSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "conversions/v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsConversionSourcesRequest>;

export type DeleteAccountsConversionSourcesResponse = Empty;
export const DeleteAccountsConversionSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteAccountsConversionSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Archives an existing conversion source. If the conversion source is a Merchant Center Destination, it will be recoverable for 30 days. If the conversion source is a Google Analytics Link, it will be deleted immediately and can be restored by creating a new one. */
export const deleteAccountsConversionSources: API.OperationMethod<
  DeleteAccountsConversionSourcesRequest,
  DeleteAccountsConversionSourcesResponse,
  DeleteAccountsConversionSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsConversionSourcesRequest,
  output: DeleteAccountsConversionSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchAccountsConversionSourcesRequest {
  /** Output only. Identifier. Generated by the Content API upon creation of a new `ConversionSource`. Format: `[a-z]{4}:.+` The four characters before the colon represent the type of conversion source. Content after the colon represents the ID of the conversion source within that type. The ID of two different conversion sources might be the same across different types. The following type prefixes are supported: * `galk`: For GoogleAnalyticsLink sources. * `mcdn`: For MerchantCenterDestination sources. */
  name: string;
  /** Optional. List of fields being updated. */
  updateMask?: string;
  /** Request body */
  body?: ConversionSource;
}

export const PatchAccountsConversionSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ConversionSource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "conversions/v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchAccountsConversionSourcesRequest>;

export type PatchAccountsConversionSourcesResponse = ConversionSource;
export const PatchAccountsConversionSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConversionSource;

export type PatchAccountsConversionSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates information of an existing conversion source. Available only for Merchant Center Destination conversion sources. */
export const patchAccountsConversionSources: API.OperationMethod<
  PatchAccountsConversionSourcesRequest,
  PatchAccountsConversionSourcesResponse,
  PatchAccountsConversionSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAccountsConversionSourcesRequest,
  output: PatchAccountsConversionSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UndeleteAccountsConversionSourcesRequest {
  /** Required. The name of the conversion source to be undeleted. Format: `accounts/{account}/conversionSources/{conversion_source}` */
  name: string;
  /** Request body */
  body?: UndeleteConversionSourceRequest;
}

export const UndeleteAccountsConversionSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UndeleteConversionSourceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "conversions/v1/{+name}:undelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UndeleteAccountsConversionSourcesRequest>;

export type UndeleteAccountsConversionSourcesResponse = ConversionSource;
export const UndeleteAccountsConversionSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConversionSource;

export type UndeleteAccountsConversionSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Re-enables an archived conversion source. Only Available for Merchant Center Destination conversion sources. */
export const undeleteAccountsConversionSources: API.OperationMethod<
  UndeleteAccountsConversionSourcesRequest,
  UndeleteAccountsConversionSourcesResponse,
  UndeleteAccountsConversionSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UndeleteAccountsConversionSourcesRequest,
  output: UndeleteAccountsConversionSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
