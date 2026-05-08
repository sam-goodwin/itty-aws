// ==========================================================================
// AdSense Platform API (adsenseplatform v1alpha)
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
  name: "adsenseplatform",
  version: "v1alpha",
  rootUrl: "https://adsenseplatform.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Decimal {
  /** The decimal value, as a string. The string representation consists of an optional sign, `+` (`U+002B`) or `-` (`U+002D`), followed by a sequence of zero or more decimal digits ("the integer"), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as `0`. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided `+` sign (`+2.5` -> `2.5`). - Replacing a zero-length integer value with `0` (`.5` -> `0.5`). - Coercing the exponent character to upper-case, with explicit sign (`2.5e8` -> `2.5E+8`). - Removing an explicitly-provided zero exponent (`2.5E0` -> `2.5`). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: `2.5E-1` <-> `0.25`). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the `.` character is supported to divide the integer and the fraction; `,` **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString = '' | [Sign] Significand [Exponent]; Sign = '+' | '-'; Significand = Digits '.' | [Digits] '.' Digits; Exponent = ('e' | 'E') [Sign] Digits; Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' }; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if precision would be lost. Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if the service receives a value outside of the supported range. */
  value?: string;
}

export const Decimal: Schema.Schema<Decimal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Decimal" });

export interface PlatformGroup {
  /** Output only. The revenue share of the PlatformGroup, in millipercent (e.g. 15000 = 15%). */
  revshareMillipercent?: Decimal;
  /** Identifier. Format: accounts/{account}/platforms/{platform}/groups/{platform_group} */
  name?: string;
  /** Required. Description of the PlatformGroup. */
  description?: string;
}

export const PlatformGroup: Schema.Schema<PlatformGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revshareMillipercent: Schema.optional(Decimal),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlatformGroup" });

export interface ListPlatformGroupsResponse {
  /** The platform groups returned in this list response. */
  platformGroups?: ReadonlyArray<PlatformGroup>;
  /** Continuation token used to page through platforms. To retrieve the next page of the results, set the next request's "page_token" value to this. */
  nextPageToken?: string;
}

export const ListPlatformGroupsResponse: Schema.Schema<ListPlatformGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    platformGroups: Schema.optional(Schema.Array(PlatformGroup)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPlatformGroupsResponse" });

export interface CloseAccountRequest {}

export const CloseAccountRequest: Schema.Schema<CloseAccountRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CloseAccountRequest",
  });

export interface Address {
  /** Zip/post code. Max length 10 bytes or 10 characters. */
  zip?: string;
  /** Phone number with international code (i.e. +441234567890). */
  phone?: string;
  /** Second line of address. Max length 64 bytes or 30 characters. */
  address2?: string;
  /** State. Max length 60 bytes or 30 characters. */
  state?: string;
  /** First line of address. Max length 64 bytes or 30 characters. */
  address1?: string;
  /** Contact name of the company. Max length 128 bytes or 34 characters. */
  contact?: string;
  /** Name of the company. Max length 255 bytes or 34 characters. */
  company?: string;
  /** Country/Region code. The region is specified as a CLDR region code (e.g. "US", "FR"). */
  regionCode?: string;
  /** Fax number with international code (i.e. +441234567890). */
  fax?: string;
  /** City. Max length 60 bytes or 30 characters. */
  city?: string;
}

export const Address: Schema.Schema<Address> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zip: Schema.optional(Schema.String),
    phone: Schema.optional(Schema.String),
    address2: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    address1: Schema.optional(Schema.String),
    contact: Schema.optional(Schema.String),
    company: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    fax: Schema.optional(Schema.String),
    city: Schema.optional(Schema.String),
  }).annotate({ identifier: "Address" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface EventInfo {
  /** Required. The email address that is associated with the publisher when performing the event. */
  email?: string;
  /** The billing address of the publisher associated with this event, if available. */
  billingAddress?: Address;
}

export const EventInfo: Schema.Schema<EventInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    billingAddress: Schema.optional(Address),
  }).annotate({ identifier: "EventInfo" });

export interface Platform {
  /** Default platform group for the platform. */
  defaultPlatformGroup?: string;
  /** Identifier. Resource name of a platform. Format: accounts/{account}/platforms/{platform} */
  name?: string;
  /** Output only. Description of the platform. */
  description?: string;
}

export const Platform: Schema.Schema<Platform> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultPlatformGroup: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Platform" });

export interface ListPlatformsResponse {
  /** The platforms returned in this list response. */
  platforms?: ReadonlyArray<Platform>;
  /** Continuation token used to page through platforms. To retrieve the next page of the results, set the next request's "page_token" value to this. */
  nextPageToken?: string;
}

export const ListPlatformsResponse: Schema.Schema<ListPlatformsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    platforms: Schema.optional(Schema.Array(Platform)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPlatformsResponse" });

export interface Site {
  /** Output only. State of a site. */
  state?:
    | "STATE_UNSPECIFIED"
    | "REQUIRES_REVIEW"
    | "GETTING_READY"
    | "READY"
    | "NEEDS_ATTENTION"
    | (string & {});
  /** Output only. Resource name of a site. Format: platforms/{platform}/accounts/{account}/sites/{site} */
  name?: string;
  /** Domain/sub-domain of the site. Must be a valid domain complying with [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt) and formatted as punycode [RFC 3492](https://www.ietf.org/rfc/rfc3492.txt) in case the domain contains unicode characters. */
  domain?: string;
}

export const Site: Schema.Schema<Site> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
  }).annotate({ identifier: "Site" });

export interface ListSitesResponse {
  /** The sites returned in this list response. */
  sites?: ReadonlyArray<Site>;
  /** Continuation token used to page through sites. To retrieve the next page of the results, set the next request's "page_token" value to this. */
  nextPageToken?: string;
}

export const ListSitesResponse: Schema.Schema<ListSitesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sites: Schema.optional(Schema.Array(Site)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSitesResponse" });

export interface RequestSiteReviewResponse {}

export const RequestSiteReviewResponse: Schema.Schema<RequestSiteReviewResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RequestSiteReviewResponse",
  });

export interface TimeZone {
  /** IANA Time Zone Database time zone. For example "America/New_York". */
  id?: string;
  /** Optional. IANA Time Zone Database version number. For example "2019a". */
  version?: string;
}

export const TimeZone: Schema.Schema<TimeZone> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeZone" });

export interface Account {
  /** Required. Input only. CLDR region code of the country/region of the address. Set this to country code of the child account if known, otherwise to your own country code. */
  regionCode?: string;
  /** Output only. Resource name of the account. Format: platforms/pub-[0-9]+/accounts/pub-[0-9]+ */
  name?: string;
  /** Required. An opaque token that uniquely identifies the account among all the platform's accounts. This string may contain at most 64 non-whitespace ASCII characters, but otherwise has no predefined structure. However, it is expected to be a platform-specific identifier for the user creating the account, so that only a single account can be created for any given user. This field must not contain any information that is recognizable as personally identifiable information. e.g. it should not be an email address or login name. Once an account has been created, a second attempt to create an account using the same creation_request_id will result in an ALREADY_EXISTS error. */
  creationRequestId?: string;
  /** Display name of this account. */
  displayName?: string;
  /** Output only. Approval state of the account. */
  state?:
    | "STATE_UNSPECIFIED"
    | "UNCHECKED"
    | "APPROVED"
    | "DISAPPROVED"
    | (string & {});
  /** Output only. Creation time of the account. */
  createTime?: string;
  /** Required. The IANA TZ timezone code of this account. For more information, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones. This field is used for reporting. It is recommended to set it to the same value for all child accounts. */
  timeZone?: TimeZone;
}

export const Account: Schema.Schema<Account> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    creationRequestId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    timeZone: Schema.optional(TimeZone),
  }).annotate({ identifier: "Account" });

export interface ListAccountsResponse {
  /** The Accounts returned in the list response. Represented by a partial view of the Account resource, populating `name` and `creation_request_id`. */
  accounts?: ReadonlyArray<Account>;
  /** Continuation token used to page through accounts. To retrieve the next page of the results, set the next request's "page_token" value to this. */
  nextPageToken?: string;
}

export const ListAccountsResponse: Schema.Schema<ListAccountsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accounts: Schema.optional(Schema.Array(Account)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAccountsResponse" });

export interface CloseAccountResponse {}

export const CloseAccountResponse: Schema.Schema<CloseAccountResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CloseAccountResponse",
  });

export interface PlatformChildSite {
  /** Identifier. Format: accounts/{account}/platforms/{platform}/childAccounts/{child_account}/sites/{platform_child_site} */
  name?: string;
  /** Output only. Domain URL of the Platform Child Site. Part of the PlatformChildSite name. */
  domain?: string;
  /** Resource name of the Platform Group of the Platform Child Site. */
  platformGroup?: string;
}

export const PlatformChildSite: Schema.Schema<PlatformChildSite> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    platformGroup: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlatformChildSite" });

export interface LookupAccountResponse {
  /** The name of the Account Format: platforms/{platform}/accounts/{account_id} */
  name?: string;
}

export const LookupAccountResponse: Schema.Schema<LookupAccountResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "LookupAccountResponse" });

export interface Event {
  /** Required. Event timestamp. */
  eventTime?: string;
  /** Required. Event type. */
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "LOG_IN_VIA_PLATFORM"
    | "SIGN_UP_VIA_PLATFORM"
    | (string & {});
  /** Required. Information associated with the event. */
  eventInfo?: EventInfo;
}

export const Event: Schema.Schema<Event> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventTime: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
    eventInfo: Schema.optional(EventInfo),
  }).annotate({ identifier: "Event" });

export interface ListPlatformChildSitesResponse {
  /** Continuation token used to page through platforms. To retrieve the next page of the results, set the next request's "page_token" value to this. */
  nextPageToken?: string;
  /** The platform child sites returned in this list response. */
  platformChildSites?: ReadonlyArray<PlatformChildSite>;
}

export const ListPlatformChildSitesResponse: Schema.Schema<ListPlatformChildSitesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    platformChildSites: Schema.optional(Schema.Array(PlatformChildSite)),
  }).annotate({ identifier: "ListPlatformChildSitesResponse" });

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

export interface GetAccountsPlatformsRequest {
  /** Required. The name of the platform to retrieve. Format: accounts/{account}/platforms/{platform} */
  name: string;
}

export const GetAccountsPlatformsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsPlatformsRequest>;

export type GetAccountsPlatformsResponse = Platform;
export const GetAccountsPlatformsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Platform;

export type GetAccountsPlatformsError = DefaultErrors | NotFound | Forbidden;

/** Gets a platform. */
export const getAccountsPlatforms: API.OperationMethod<
  GetAccountsPlatformsRequest,
  GetAccountsPlatformsResponse,
  GetAccountsPlatformsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsPlatformsRequest,
  output: GetAccountsPlatformsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListAccountsPlatformsRequest {
  /** Required. The account which owns the platforms. Format: accounts/{account} */
  parent: string;
  /** Optional. The maximum number of platforms to include in the response, used for paging. If unspecified, at most 10000 platforms will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListPlatforms` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatforms` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListAccountsPlatformsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/platforms" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsPlatformsRequest>;

export type ListAccountsPlatformsResponse = ListPlatformsResponse;
export const ListAccountsPlatformsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPlatformsResponse;

export type ListAccountsPlatformsError = DefaultErrors | NotFound | Forbidden;

/** Lists platforms for a specified account. */
export const listAccountsPlatforms: API.PaginatedOperationMethod<
  ListAccountsPlatformsRequest,
  ListAccountsPlatformsResponse,
  ListAccountsPlatformsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsPlatformsRequest,
  output: ListAccountsPlatformsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListAccountsPlatformsGroupsRequest {
  /** Required. The name of the platform to retrieve. Format: accounts/{account}/platforms/{platform} */
  parent: string;
  /** Optional. The maximum number of groups to include in the response, used for paging. If unspecified, at most 10000 groups will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListPlatformGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatformGroups` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListAccountsPlatformsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/groups" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsPlatformsGroupsRequest>;

export type ListAccountsPlatformsGroupsResponse = ListPlatformGroupsResponse;
export const ListAccountsPlatformsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPlatformGroupsResponse;

export type ListAccountsPlatformsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Platform Groups for a specified Platform. */
export const listAccountsPlatformsGroups: API.PaginatedOperationMethod<
  ListAccountsPlatformsGroupsRequest,
  ListAccountsPlatformsGroupsResponse,
  ListAccountsPlatformsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsPlatformsGroupsRequest,
  output: ListAccountsPlatformsGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountsPlatformsGroupsRequest {
  /** Required. The name of the platform group to retrieve. Format: accounts/{account}/platforms/{platform}/groups/{group} */
  name: string;
}

export const GetAccountsPlatformsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsPlatformsGroupsRequest>;

export type GetAccountsPlatformsGroupsResponse = PlatformGroup;
export const GetAccountsPlatformsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlatformGroup;

export type GetAccountsPlatformsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a Platform Group for a specified Platform and group. */
export const getAccountsPlatformsGroups: API.OperationMethod<
  GetAccountsPlatformsGroupsRequest,
  GetAccountsPlatformsGroupsResponse,
  GetAccountsPlatformsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsPlatformsGroupsRequest,
  output: GetAccountsPlatformsGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchAccountsPlatformsGroupsRequest {
  /** Identifier. Format: accounts/{account}/platforms/{platform}/groups/{platform_group} */
  name: string;
  /** Optional. The list of fields to update - currently only supports updating the `description` field. */
  updateMask?: string;
  /** Request body */
  body?: PlatformGroup;
}

export const PatchAccountsPlatformsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(PlatformGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchAccountsPlatformsGroupsRequest>;

export type PatchAccountsPlatformsGroupsResponse = PlatformGroup;
export const PatchAccountsPlatformsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlatformGroup;

export type PatchAccountsPlatformsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a Platform Group. */
export const patchAccountsPlatformsGroups: API.OperationMethod<
  PatchAccountsPlatformsGroupsRequest,
  PatchAccountsPlatformsGroupsResponse,
  PatchAccountsPlatformsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAccountsPlatformsGroupsRequest,
  output: PatchAccountsPlatformsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchAccountsPlatformsChildAccountsSitesRequest {
  /** Optional. The list of fields to update - currently only supports updating the `platform_group` field. */
  updateMask?: string;
  /** Identifier. Format: accounts/{account}/platforms/{platform}/childAccounts/{child_account}/sites/{platform_child_site} */
  name: string;
  /** Request body */
  body?: PlatformChildSite;
}

export const PatchAccountsPlatformsChildAccountsSitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PlatformChildSite).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchAccountsPlatformsChildAccountsSitesRequest>;

export type PatchAccountsPlatformsChildAccountsSitesResponse =
  PlatformChildSite;
export const PatchAccountsPlatformsChildAccountsSitesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlatformChildSite;

export type PatchAccountsPlatformsChildAccountsSitesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a Platform Child Site. */
export const patchAccountsPlatformsChildAccountsSites: API.OperationMethod<
  PatchAccountsPlatformsChildAccountsSitesRequest,
  PatchAccountsPlatformsChildAccountsSitesResponse,
  PatchAccountsPlatformsChildAccountsSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAccountsPlatformsChildAccountsSitesRequest,
  output: PatchAccountsPlatformsChildAccountsSitesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsPlatformsChildAccountsSitesRequest {
  /** Required. The name of the child account under the given platform which owns the platform child sites. Format: accounts/{account}/platforms/{platform}/childAccounts/{child_account} */
  parent: string;
  /** Optional. The maximum number of children to include in the response, used for paging. If unspecified, at most 10000 platforms will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListPlatformChildSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatformChildSites` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListAccountsPlatformsChildAccountsSitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/sites" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsPlatformsChildAccountsSitesRequest>;

export type ListAccountsPlatformsChildAccountsSitesResponse =
  ListPlatformChildSitesResponse;
export const ListAccountsPlatformsChildAccountsSitesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPlatformChildSitesResponse;

export type ListAccountsPlatformsChildAccountsSitesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Platform Child Sites for a specified Platform Child Account. */
export const listAccountsPlatformsChildAccountsSites: API.PaginatedOperationMethod<
  ListAccountsPlatformsChildAccountsSitesRequest,
  ListAccountsPlatformsChildAccountsSitesResponse,
  ListAccountsPlatformsChildAccountsSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsPlatformsChildAccountsSitesRequest,
  output: ListAccountsPlatformsChildAccountsSitesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountsPlatformsChildAccountsSitesRequest {
  /** Required. The name of the platform child site to retrieve. Format: accounts/{account}/platforms/{platform}/childAccounts/{child_account}/sites/{platform_child_site} */
  name: string;
}

export const GetAccountsPlatformsChildAccountsSitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsPlatformsChildAccountsSitesRequest>;

export type GetAccountsPlatformsChildAccountsSitesResponse = PlatformChildSite;
export const GetAccountsPlatformsChildAccountsSitesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlatformChildSite;

export type GetAccountsPlatformsChildAccountsSitesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a Platform Child Site for a specified Platform Child Account and site. */
export const getAccountsPlatformsChildAccountsSites: API.OperationMethod<
  GetAccountsPlatformsChildAccountsSitesRequest,
  GetAccountsPlatformsChildAccountsSitesResponse,
  GetAccountsPlatformsChildAccountsSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsPlatformsChildAccountsSitesRequest,
  output: GetAccountsPlatformsChildAccountsSitesResponse,
  errors: [NotFound, Forbidden],
}));

export interface LookupPlatformsAccountsRequest {
  /** Required. Platform who parents the account. Format: platforms/{platform} */
  parent: string;
  /** Optional. The creation_request_id provided when calling createAccount. */
  creationRequestId?: string;
}

export const LookupPlatformsAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    creationRequestId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("creationRequestId"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/accounts:lookup" }),
    svc,
  ) as unknown as Schema.Schema<LookupPlatformsAccountsRequest>;

export type LookupPlatformsAccountsResponse = LookupAccountResponse;
export const LookupPlatformsAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LookupAccountResponse;

export type LookupPlatformsAccountsError = DefaultErrors | NotFound | Forbidden;

/** Looks up information about a sub-account for a specified creation_request_id. If no account exists for the given creation_request_id, returns 404. */
export const lookupPlatformsAccounts: API.OperationMethod<
  LookupPlatformsAccountsRequest,
  LookupPlatformsAccountsResponse,
  LookupPlatformsAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupPlatformsAccountsRequest,
  output: LookupPlatformsAccountsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreatePlatformsAccountsRequest {
  /** Required. Platform to create an account for. Format: platforms/{platform} */
  parent: string;
  /** Request body */
  body?: Account;
}

export const CreatePlatformsAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Account).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/accounts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreatePlatformsAccountsRequest>;

export type CreatePlatformsAccountsResponse = Account;
export const CreatePlatformsAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Account;

export type CreatePlatformsAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a sub-account. */
export const createPlatformsAccounts: API.OperationMethod<
  CreatePlatformsAccountsRequest,
  CreatePlatformsAccountsResponse,
  CreatePlatformsAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePlatformsAccountsRequest,
  output: CreatePlatformsAccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPlatformsAccountsRequest {
  /** Required. Account to get information about. Format: platforms/{platform}/accounts/{account_id} */
  name: string;
}

export const GetPlatformsAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetPlatformsAccountsRequest>;

export type GetPlatformsAccountsResponse = Account;
export const GetPlatformsAccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Account;

export type GetPlatformsAccountsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about the selected sub-account. */
export const getPlatformsAccounts: API.OperationMethod<
  GetPlatformsAccountsRequest,
  GetPlatformsAccountsResponse,
  GetPlatformsAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPlatformsAccountsRequest,
  output: GetPlatformsAccountsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ClosePlatformsAccountsRequest {
  /** Required. Account to close. Format: platforms/{platform}/accounts/{account_id} */
  name: string;
  /** Request body */
  body?: CloseAccountRequest;
}

export const ClosePlatformsAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CloseAccountRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+name}:close", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ClosePlatformsAccountsRequest>;

export type ClosePlatformsAccountsResponse = CloseAccountResponse;
export const ClosePlatformsAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CloseAccountResponse;

export type ClosePlatformsAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Closes a sub-account. */
export const closePlatformsAccounts: API.OperationMethod<
  ClosePlatformsAccountsRequest,
  ClosePlatformsAccountsResponse,
  ClosePlatformsAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ClosePlatformsAccountsRequest,
  output: ClosePlatformsAccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListPlatformsAccountsRequest {
  /** Required. Platform who parents the accounts. Format: platforms/{platform} */
  parent: string;
  /** Optional. The maximum number of accounts to include in the response, used for paging. If unspecified, at most 10000 accounts will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
}

export const ListPlatformsAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/accounts" }),
    svc,
  ) as unknown as Schema.Schema<ListPlatformsAccountsRequest>;

export type ListPlatformsAccountsResponse = ListAccountsResponse;
export const ListPlatformsAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAccountsResponse;

export type ListPlatformsAccountsError = DefaultErrors | NotFound | Forbidden;

/** Lists a partial view of sub-accounts for a specific parent account. */
export const listPlatformsAccounts: API.PaginatedOperationMethod<
  ListPlatformsAccountsRequest,
  ListPlatformsAccountsResponse,
  ListPlatformsAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPlatformsAccountsRequest,
  output: ListPlatformsAccountsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreatePlatformsAccountsEventsRequest {
  /** Required. Account to log events about. Format: platforms/{platform}/accounts/{account} */
  parent: string;
  /** Request body */
  body?: Event;
}

export const CreatePlatformsAccountsEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Event).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+parent}/events", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreatePlatformsAccountsEventsRequest>;

export type CreatePlatformsAccountsEventsResponse = Event;
export const CreatePlatformsAccountsEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Event;

export type CreatePlatformsAccountsEventsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an account event. */
export const createPlatformsAccountsEvents: API.OperationMethod<
  CreatePlatformsAccountsEventsRequest,
  CreatePlatformsAccountsEventsResponse,
  CreatePlatformsAccountsEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePlatformsAccountsEventsRequest,
  output: CreatePlatformsAccountsEventsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreatePlatformsAccountsSitesRequest {
  /** Required. Account to create site. Format: platforms/{platform}/accounts/{account_id} */
  parent: string;
  /** Request body */
  body?: Site;
}

export const CreatePlatformsAccountsSitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Site).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+parent}/sites", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreatePlatformsAccountsSitesRequest>;

export type CreatePlatformsAccountsSitesResponse = Site;
export const CreatePlatformsAccountsSitesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Site;

export type CreatePlatformsAccountsSitesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a site for a specified account. */
export const createPlatformsAccountsSites: API.OperationMethod<
  CreatePlatformsAccountsSitesRequest,
  CreatePlatformsAccountsSitesResponse,
  CreatePlatformsAccountsSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePlatformsAccountsSitesRequest,
  output: CreatePlatformsAccountsSitesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPlatformsAccountsSitesRequest {
  /** Required. The name of the site to retrieve. Format: platforms/{platform}/accounts/{account}/sites/{site} */
  name: string;
}

export const GetPlatformsAccountsSitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetPlatformsAccountsSitesRequest>;

export type GetPlatformsAccountsSitesResponse = Site;
export const GetPlatformsAccountsSitesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Site;

export type GetPlatformsAccountsSitesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a site from a specified sub-account. */
export const getPlatformsAccountsSites: API.OperationMethod<
  GetPlatformsAccountsSitesRequest,
  GetPlatformsAccountsSitesResponse,
  GetPlatformsAccountsSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPlatformsAccountsSitesRequest,
  output: GetPlatformsAccountsSitesResponse,
  errors: [NotFound, Forbidden],
}));

export interface RequestReviewPlatformsAccountsSitesRequest {
  /** Required. The name of the site to submit for review. Format: platforms/{platform}/accounts/{account}/sites/{site} */
  name: string;
}

export const RequestReviewPlatformsAccountsSitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+name}:requestReview",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RequestReviewPlatformsAccountsSitesRequest>;

export type RequestReviewPlatformsAccountsSitesResponse =
  RequestSiteReviewResponse;
export const RequestReviewPlatformsAccountsSitesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RequestSiteReviewResponse;

export type RequestReviewPlatformsAccountsSitesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Requests the review of a site. The site should be in REQUIRES_REVIEW or NEEDS_ATTENTION state. Note: Make sure you place an [ad tag](https://developers.google.com/adsense/platforms/direct/ad-tags) on your site before requesting a review. */
export const requestReviewPlatformsAccountsSites: API.OperationMethod<
  RequestReviewPlatformsAccountsSitesRequest,
  RequestReviewPlatformsAccountsSitesResponse,
  RequestReviewPlatformsAccountsSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RequestReviewPlatformsAccountsSitesRequest,
  output: RequestReviewPlatformsAccountsSitesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeletePlatformsAccountsSitesRequest {
  /** Required. The name of the site to delete. Format: platforms/{platform}/accounts/{account}/sites/{site} */
  name: string;
}

export const DeletePlatformsAccountsSitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeletePlatformsAccountsSitesRequest>;

export type DeletePlatformsAccountsSitesResponse = Empty;
export const DeletePlatformsAccountsSitesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeletePlatformsAccountsSitesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a site from a specified account. */
export const deletePlatformsAccountsSites: API.OperationMethod<
  DeletePlatformsAccountsSitesRequest,
  DeletePlatformsAccountsSitesResponse,
  DeletePlatformsAccountsSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePlatformsAccountsSitesRequest,
  output: DeletePlatformsAccountsSitesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListPlatformsAccountsSitesRequest {
  /** The maximum number of sites to include in the response, used for paging. If unspecified, at most 10000 sites will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. */
  pageSize?: number;
  /** A page token, received from a previous `ListSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSites` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The account which owns the sites. Format: platforms/{platform}/accounts/{account} */
  parent: string;
}

export const ListPlatformsAccountsSitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/sites" }),
    svc,
  ) as unknown as Schema.Schema<ListPlatformsAccountsSitesRequest>;

export type ListPlatformsAccountsSitesResponse = ListSitesResponse;
export const ListPlatformsAccountsSitesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSitesResponse;

export type ListPlatformsAccountsSitesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists sites for a specific account. */
export const listPlatformsAccountsSites: API.PaginatedOperationMethod<
  ListPlatformsAccountsSitesRequest,
  ListPlatformsAccountsSitesResponse,
  ListPlatformsAccountsSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPlatformsAccountsSitesRequest,
  output: ListPlatformsAccountsSitesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
