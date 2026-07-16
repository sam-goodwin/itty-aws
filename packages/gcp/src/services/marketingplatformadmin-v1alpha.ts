// ==========================================================================
// Google Marketing Platform Admin API (marketingplatformadmin v1alpha)
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
  name: "marketingplatformadmin",
  version: "v1alpha",
  rootUrl: "https://marketingplatformadmin.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Organization {
  /** Identifier. The resource name of the GMP organization. Format: organizations/{org_id} */
  name?: string;
  /** The human-readable name for the organization. */
  displayName?: string;
}

export const Organization: Schema.Codec<Organization> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Organization" });

export interface ListOrganizationsResponse {
  /** The Organization resource that the user has access to, which includes the org id and display name. */
  organizations?: ReadonlyArray<Organization>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListOrganizationsResponse: Schema.Codec<ListOrganizationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    organizations: Schema.optional(Schema.Array(Organization)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOrganizationsResponse" });

export interface AnalyticsAccountLink {
  /** Output only. The human-readable name for the Analytics account. */
  displayName?: string;
  /** Identifier. Resource name of this AnalyticsAccountLink. Note the resource ID is the same as the ID of the Analtyics account. Format: organizations/{org_id}/analyticsAccountLinks/{analytics_account_link_id} Example: "organizations/xyz/analyticsAccountLinks/1234" */
  name?: string;
  /** Required. Immutable. The resource name of the AnalyticsAdmin API account. The account ID will be used as the ID of this AnalyticsAccountLink resource, which will become the final component of the resource name. Format: analyticsadmin.googleapis.com/accounts/{account_id} */
  analyticsAccount?: string;
  /** Output only. The verification state of the link between the Analytics account and the parent organization. */
  linkVerificationState?:
    | "LINK_VERIFICATION_STATE_UNSPECIFIED"
    | "LINK_VERIFICATION_STATE_VERIFIED"
    | "LINK_VERIFICATION_STATE_NOT_VERIFIED"
    | (string & {});
}

export const AnalyticsAccountLink: Schema.Codec<AnalyticsAccountLink> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    analyticsAccount: Schema.optional(Schema.String),
    linkVerificationState: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnalyticsAccountLink" });

export interface ListAnalyticsAccountLinksResponse {
  /** Analytics account links in this organization. */
  analyticsAccountLinks?: ReadonlyArray<AnalyticsAccountLink>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListAnalyticsAccountLinksResponse: Schema.Codec<ListAnalyticsAccountLinksResponse> =
  /*@__PURE__*/ Schema.Struct({
    analyticsAccountLinks: Schema.optional(Schema.Array(AnalyticsAccountLink)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAnalyticsAccountLinksResponse" });

export interface PropertyUsage {
  /** The service level of the property. */
  serviceLevel?:
    | "ANALYTICS_SERVICE_LEVEL_UNSPECIFIED"
    | "ANALYTICS_SERVICE_LEVEL_STANDARD"
    | "ANALYTICS_SERVICE_LEVEL_360"
    | (string & {});
  /** The subtype of the analytics property. This affects the billable event count. */
  propertyType?:
    | "ANALYTICS_PROPERTY_TYPE_UNSPECIFIED"
    | "ANALYTICS_PROPERTY_TYPE_ORDINARY"
    | "ANALYTICS_PROPERTY_TYPE_SUBPROPERTY"
    | "ANALYTICS_PROPERTY_TYPE_ROLLUP"
    | (string & {});
  /** Total event count that the property received during the requested month. */
  totalEventCount?: string;
  /** The display name of the property. */
  displayName?: string;
  /** The name of the Google Analytics Admin API property resource. Format: analyticsadmin.googleapis.com/properties/{property_id} */
  property?: string;
  /** The ID of the property's parent account. */
  accountId?: string;
  /** The number of events for which the property is billed in the requested month. */
  billableEventCount?: string;
}

export const PropertyUsage: Schema.Codec<PropertyUsage> =
  /*@__PURE__*/ Schema.Struct({
    serviceLevel: Schema.optional(Schema.String),
    propertyType: Schema.optional(Schema.String),
    totalEventCount: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    property: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    billableEventCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "PropertyUsage" });

export interface ReportPropertyUsageRequest {
  /** Required. The target month to list property usages. Format: YYYY-MM. For example, "2025-05" */
  month?: string;
}

export const ReportPropertyUsageRequest: Schema.Codec<ReportPropertyUsageRequest> =
  /*@__PURE__*/ Schema.Struct({
    month: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportPropertyUsageRequest" });

export interface Marketingplatformadmin_Date {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
}

export const Marketingplatformadmin_Date: Schema.Codec<Marketingplatformadmin_Date> =
  /*@__PURE__*/ Schema.Struct({
    year: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Marketingplatformadmin_Date" });

export interface ClientData {
  /** The start date of the contract between the sales org and the end client. */
  startDate?: Marketingplatformadmin_Date;
  /** The end client that has/had contract with the requested sales org. */
  organization?: Organization;
  /** The end date of the contract between the sales org and the end client. */
  endDate?: Marketingplatformadmin_Date;
}

export const ClientData: Schema.Codec<ClientData> =
  /*@__PURE__*/ Schema.Struct({
    startDate: Schema.optional(Marketingplatformadmin_Date),
    organization: Schema.optional(Organization),
    endDate: Schema.optional(Marketingplatformadmin_Date),
  }).annotate({ identifier: "ClientData" });

export interface FindSalesPartnerManagedClientsResponse {
  /** The clients managed by the sales org. */
  clientData?: ReadonlyArray<ClientData>;
}

export const FindSalesPartnerManagedClientsResponse: Schema.Codec<FindSalesPartnerManagedClientsResponse> =
  /*@__PURE__*/ Schema.Struct({
    clientData: Schema.optional(Schema.Array(ClientData)),
  }).annotate({ identifier: "FindSalesPartnerManagedClientsResponse" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface Money {
  /** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
  units?: string;
  /** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
  nanos?: number;
  /** The three-letter currency code defined in ISO 4217. */
  currencyCode?: string;
}

export const Money: Schema.Codec<Money> =
  /*@__PURE__*/ Schema.Struct({
    units: Schema.optional(Schema.String),
    nanos: Schema.optional(Schema.Number),
    currencyCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Money" });

export interface BillInfo {
  /** The amount of the event fee. */
  eventFee?: Money;
  /** The amount of the monthly base fee. */
  baseFee?: Money;
  /** The total amount of the bill. */
  total?: Money;
  /** The amount of the price protection credit, this is only available for eligible customers. */
  priceProtectionCredit?: Money;
}

export const BillInfo: Schema.Codec<BillInfo> =
  /*@__PURE__*/ Schema.Struct({
    eventFee: Schema.optional(Money),
    baseFee: Schema.optional(Money),
    total: Schema.optional(Money),
    priceProtectionCredit: Schema.optional(Money),
  }).annotate({ identifier: "BillInfo" });

export interface ReportPropertyUsageResponse {
  /** Bill amount in the specified organization and month. Will be empty if user only has access to usage data. */
  billInfo?: BillInfo;
  /** Usage data for all properties in the specified organization and month. */
  propertyUsages?: ReadonlyArray<PropertyUsage>;
}

export const ReportPropertyUsageResponse: Schema.Codec<ReportPropertyUsageResponse> =
  /*@__PURE__*/ Schema.Struct({
    billInfo: Schema.optional(BillInfo),
    propertyUsages: Schema.optional(Schema.Array(PropertyUsage)),
  }).annotate({ identifier: "ReportPropertyUsageResponse" });

export interface FindSalesPartnerManagedClientsRequest {
  /** Optional. If set, only active and just ended clients will be returned. */
  isActive?: boolean;
}

export const FindSalesPartnerManagedClientsRequest: Schema.Codec<FindSalesPartnerManagedClientsRequest> =
  /*@__PURE__*/ Schema.Struct({
    isActive: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "FindSalesPartnerManagedClientsRequest" });

export interface SetPropertyServiceLevelResponse {}

export const SetPropertyServiceLevelResponse: Schema.Codec<SetPropertyServiceLevelResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SetPropertyServiceLevelResponse",
  });

export interface SetPropertyServiceLevelRequest {
  /** Required. The Analytics property to change the ServiceLevel setting. This field is the name of the Google Analytics Admin API property resource. Format: analyticsadmin.googleapis.com/properties/{property_id} */
  analyticsProperty?: string;
  /** Required. The service level to set for this property. */
  serviceLevel?:
    | "ANALYTICS_SERVICE_LEVEL_UNSPECIFIED"
    | "ANALYTICS_SERVICE_LEVEL_STANDARD"
    | "ANALYTICS_SERVICE_LEVEL_360"
    | (string & {});
}

export const SetPropertyServiceLevelRequest: Schema.Codec<SetPropertyServiceLevelRequest> =
  /*@__PURE__*/ Schema.Struct({
    analyticsProperty: Schema.optional(Schema.String),
    serviceLevel: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetPropertyServiceLevelRequest" });

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

export interface ReportPropertyUsageOrganizationsRequest {
  /** Required. Specifies the organization whose property usage will be listed. Format: organizations/{org_id} */
  organization: string;
  /** Request body */
  body?: ReportPropertyUsageRequest;
}

export const ReportPropertyUsageOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.HttpPath("organization")),
    body: Schema.optional(ReportPropertyUsageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+organization}:reportPropertyUsage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ReportPropertyUsageOrganizationsRequest>;

export type ReportPropertyUsageOrganizationsResponse =
  ReportPropertyUsageResponse;
export const ReportPropertyUsageOrganizationsResponse =
  /*@__PURE__*/ ReportPropertyUsageResponse;

export type ReportPropertyUsageOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the usage and billing data for properties within the organization for the specified month. Per direct client org, user needs to be OrgAdmin/BillingAdmin on the organization in order to view the billing and usage data. Per sales partner client org, user needs to be OrgAdmin/BillingAdmin on the sales partner org in order to view the billing and usage data, or OrgAdmin/BillingAdmin on the sales partner client org in order to view the usage data only. */
export const reportPropertyUsageOrganizations: API.OperationMethod<
  ReportPropertyUsageOrganizationsRequest,
  ReportPropertyUsageOrganizationsResponse,
  ReportPropertyUsageOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ReportPropertyUsageOrganizationsRequest,
  output: ReportPropertyUsageOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FindSalesPartnerManagedClientsOrganizationsRequest {
  /** Required. The name of the sales partner organization. Format: organizations/{org_id} */
  organization: string;
  /** Request body */
  body?: FindSalesPartnerManagedClientsRequest;
}

export const FindSalesPartnerManagedClientsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.HttpPath("organization")),
    body: Schema.optional(FindSalesPartnerManagedClientsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+organization}:findSalesPartnerManagedClients",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<FindSalesPartnerManagedClientsOrganizationsRequest>;

export type FindSalesPartnerManagedClientsOrganizationsResponse =
  FindSalesPartnerManagedClientsResponse;
export const FindSalesPartnerManagedClientsOrganizationsResponse =
  /*@__PURE__*/ FindSalesPartnerManagedClientsResponse;

export type FindSalesPartnerManagedClientsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns a list of clients managed by the sales partner organization. User needs to be an OrgAdmin/BillingAdmin on the sales partner organization in order to view the end clients. */
export const findSalesPartnerManagedClientsOrganizations: API.OperationMethod<
  FindSalesPartnerManagedClientsOrganizationsRequest,
  FindSalesPartnerManagedClientsOrganizationsResponse,
  FindSalesPartnerManagedClientsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: FindSalesPartnerManagedClientsOrganizationsRequest,
  output: FindSalesPartnerManagedClientsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsRequest {
  /** Required. The name of the Organization to retrieve. Format: organizations/{org_id} */
  name: string;
}

export const GetOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsRequest>;

export type GetOrganizationsResponse = Organization;
export const GetOrganizationsResponse = /*@__PURE__*/ Organization;

export type GetOrganizationsError = DefaultErrors | NotFound | Forbidden;

/** Looks up a single organization. */
export const getOrganizations: API.OperationMethod<
  GetOrganizationsRequest,
  GetOrganizationsResponse,
  GetOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsRequest,
  output: GetOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsRequest {
  /** Optional. A page token, received from a previous ListOrganizations call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOrganizations` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of organizations to return in one call. The service may return fewer than this value. If unspecified, at most 50 organizations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/organizations" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsRequest>;

export type ListOrganizationsResponse_Op = ListOrganizationsResponse;
export const ListOrganizationsResponse_Op =
  /*@__PURE__*/ ListOrganizationsResponse;

export type ListOrganizationsError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of organizations that the user has access to. */
export const listOrganizations: API.PaginatedOperationMethod<
  ListOrganizationsRequest,
  ListOrganizationsResponse_Op,
  ListOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsRequest,
  output: ListOrganizationsResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsAnalyticsAccountLinksRequest {
  /** Required. The parent resource where this Analytics account link will be created. Format: organizations/{org_id} */
  parent: string;
  /** Request body */
  body?: AnalyticsAccountLink;
}

export const CreateOrganizationsAnalyticsAccountLinksRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AnalyticsAccountLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/analyticsAccountLinks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateOrganizationsAnalyticsAccountLinksRequest>;

export type CreateOrganizationsAnalyticsAccountLinksResponse =
  AnalyticsAccountLink;
export const CreateOrganizationsAnalyticsAccountLinksResponse =
  /*@__PURE__*/ AnalyticsAccountLink;

export type CreateOrganizationsAnalyticsAccountLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates the link between the Analytics account and the Google Marketing Platform organization. User needs to be an org user, and admin on the Analytics account to create the link. If the account is already linked to an organization, user needs to unlink the account from the current organization, then try link again. */
export const createOrganizationsAnalyticsAccountLinks: API.OperationMethod<
  CreateOrganizationsAnalyticsAccountLinksRequest,
  CreateOrganizationsAnalyticsAccountLinksResponse,
  CreateOrganizationsAnalyticsAccountLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOrganizationsAnalyticsAccountLinksRequest,
  output: CreateOrganizationsAnalyticsAccountLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetPropertyServiceLevelOrganizationsAnalyticsAccountLinksRequest {
  /** Required. The parent AnalyticsAccountLink scope where this property is in. Format: organizations/{org_id}/analyticsAccountLinks/{analytics_account_link_id} */
  analyticsAccountLink: string;
  /** Request body */
  body?: SetPropertyServiceLevelRequest;
}

export const SetPropertyServiceLevelOrganizationsAnalyticsAccountLinksRequest =
  /*@__PURE__*/ Schema.Struct({
    analyticsAccountLink: Schema.String.pipe(
      T.HttpPath("analyticsAccountLink"),
    ),
    body: Schema.optional(SetPropertyServiceLevelRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+analyticsAccountLink}:setPropertyServiceLevel",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetPropertyServiceLevelOrganizationsAnalyticsAccountLinksRequest>;

export type SetPropertyServiceLevelOrganizationsAnalyticsAccountLinksResponse =
  SetPropertyServiceLevelResponse;
export const SetPropertyServiceLevelOrganizationsAnalyticsAccountLinksResponse =
  /*@__PURE__*/ SetPropertyServiceLevelResponse;

export type SetPropertyServiceLevelOrganizationsAnalyticsAccountLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the service level for an Analytics property. */
export const setPropertyServiceLevelOrganizationsAnalyticsAccountLinks: API.OperationMethod<
  SetPropertyServiceLevelOrganizationsAnalyticsAccountLinksRequest,
  SetPropertyServiceLevelOrganizationsAnalyticsAccountLinksResponse,
  SetPropertyServiceLevelOrganizationsAnalyticsAccountLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetPropertyServiceLevelOrganizationsAnalyticsAccountLinksRequest,
  output: SetPropertyServiceLevelOrganizationsAnalyticsAccountLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsAnalyticsAccountLinksRequest {
  /** Optional. The maximum number of Analytics account links to return in one call. The service may return fewer than this value. If unspecified, at most 50 Analytics account links will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent organization, which owns this collection of Analytics account links. Format: organizations/{org_id} */
  parent: string;
  /** Optional. A page token, received from a previous ListAnalyticsAccountLinks call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAnalyticsAccountLinks` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListOrganizationsAnalyticsAccountLinksRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/analyticsAccountLinks" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsAnalyticsAccountLinksRequest>;

export type ListOrganizationsAnalyticsAccountLinksResponse =
  ListAnalyticsAccountLinksResponse;
export const ListOrganizationsAnalyticsAccountLinksResponse =
  /*@__PURE__*/ ListAnalyticsAccountLinksResponse;

export type ListOrganizationsAnalyticsAccountLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the Google Analytics accounts link to the specified Google Marketing Platform organization. */
export const listOrganizationsAnalyticsAccountLinks: API.PaginatedOperationMethod<
  ListOrganizationsAnalyticsAccountLinksRequest,
  ListOrganizationsAnalyticsAccountLinksResponse,
  ListOrganizationsAnalyticsAccountLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsAnalyticsAccountLinksRequest,
  output: ListOrganizationsAnalyticsAccountLinksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteOrganizationsAnalyticsAccountLinksRequest {
  /** Required. The name of the Analytics account link to delete. Format: organizations/{org_id}/analyticsAccountLinks/{analytics_account_link_id} */
  name: string;
}

export const DeleteOrganizationsAnalyticsAccountLinksRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOrganizationsAnalyticsAccountLinksRequest>;

export type DeleteOrganizationsAnalyticsAccountLinksResponse = Empty;
export const DeleteOrganizationsAnalyticsAccountLinksResponse =
  /*@__PURE__*/ Empty;

export type DeleteOrganizationsAnalyticsAccountLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the AnalyticsAccountLink, which detaches the Analytics account from the Google Marketing Platform organization. User needs to be an org user, and admin on the Analytics account in order to delete the link. */
export const deleteOrganizationsAnalyticsAccountLinks: API.OperationMethod<
  DeleteOrganizationsAnalyticsAccountLinksRequest,
  DeleteOrganizationsAnalyticsAccountLinksResponse,
  DeleteOrganizationsAnalyticsAccountLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsAnalyticsAccountLinksRequest,
  output: DeleteOrganizationsAnalyticsAccountLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
