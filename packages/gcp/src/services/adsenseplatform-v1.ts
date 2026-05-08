// ==========================================================================
// AdSense Platform API (adsenseplatform v1)
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
  version: "v1",
  rootUrl: "https://adsenseplatform.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface CloseAccountRequest {}

export const CloseAccountRequest: Schema.Schema<CloseAccountRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CloseAccountRequest",
  });

export interface Address {
  /** Name of the company. Max length 255 bytes or 34 characters. */
  company?: string;
  /** Country/Region code. The region is specified as a CLDR region code (e.g. "US", "FR"). */
  regionCode?: string;
  /** Fax number with international code (i.e. +441234567890). */
  fax?: string;
  /** City. Max length 60 bytes or 30 characters. */
  city?: string;
  /** Zip/post code. Max length 10 bytes or 10 characters. */
  zip?: string;
  /** Phone number with international code (i.e. +441234567890). */
  phone?: string;
  /** State. Max length 60 bytes or 30 characters. */
  state?: string;
  /** Second line of address. Max length 64 bytes or 30 characters. */
  address2?: string;
  /** First line of address. Max length 64 bytes or 30 characters. */
  address1?: string;
  /** Contact name of the company. Max length 128 bytes or 34 characters. */
  contact?: string;
}

export const Address: Schema.Schema<Address> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    company: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    fax: Schema.optional(Schema.String),
    city: Schema.optional(Schema.String),
    zip: Schema.optional(Schema.String),
    phone: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    address2: Schema.optional(Schema.String),
    address1: Schema.optional(Schema.String),
    contact: Schema.optional(Schema.String),
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

export interface Site {
  /** Output only. Resource name of a site. Format: platforms/{platform}/accounts/{account}/sites/{site} */
  name?: string;
  /** Domain/sub-domain of the site. Must be a valid domain complying with [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt) and formatted as punycode [RFC 3492](https://www.ietf.org/rfc/rfc3492.txt) in case the domain contains unicode characters. */
  domain?: string;
  /** Output only. State of a site. */
  state?:
    | "STATE_UNSPECIFIED"
    | "REQUIRES_REVIEW"
    | "GETTING_READY"
    | "READY"
    | "NEEDS_ATTENTION"
    | (string & {});
}

export const Site: Schema.Schema<Site> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "Site" });

export interface ListSitesResponse {
  /** Continuation token used to page through sites. To retrieve the next page of the results, set the next request's "page_token" value to this. */
  nextPageToken?: string;
  /** The sites returned in this list response. */
  sites?: ReadonlyArray<Site>;
}

export const ListSitesResponse: Schema.Schema<ListSitesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    sites: Schema.optional(Schema.Array(Site)),
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
  /** Required. The IANA TZ timezone code of this account. For more information, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones. This field is used for reporting. It is recommended to set it to the same value for all child accounts. */
  timeZone?: TimeZone;
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
}

export const Account: Schema.Schema<Account> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    creationRequestId: Schema.optional(Schema.String),
    timeZone: Schema.optional(TimeZone),
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
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

export interface LookupAccountResponse {
  /** The name of the Account Format: platforms/{platform}/accounts/{account_id} */
  name?: string;
}

export const LookupAccountResponse: Schema.Schema<LookupAccountResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "LookupAccountResponse" });

export interface Event {
  /** Required. Event type. */
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "LOG_IN_VIA_PLATFORM"
    | "SIGN_UP_VIA_PLATFORM"
    | (string & {});
  /** Required. Information associated with the event. */
  eventInfo?: EventInfo;
  /** Required. Event timestamp. */
  eventTime?: string;
}

export const Event: Schema.Schema<Event> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventType: Schema.optional(Schema.String),
    eventInfo: Schema.optional(EventInfo),
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Event" });

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

export interface GetPlatformsAccountsRequest {
  /** Required. Account to get information about. Format: platforms/{platform}/accounts/{account_id} */
  name: string;
}

export const GetPlatformsAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
    T.Http({ method: "POST", path: "v1/{+name}:close", hasBody: true }),
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
    T.Http({ method: "POST", path: "v1/{+parent}/accounts", hasBody: true }),
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
    T.Http({ method: "GET", path: "v1/{+parent}/accounts:lookup" }),
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
    T.Http({ method: "GET", path: "v1/{+parent}/accounts" }),
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
    T.Http({ method: "GET", path: "v1/{+parent}/sites" }),
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

export interface GetPlatformsAccountsSitesRequest {
  /** Required. The name of the site to retrieve. Format: platforms/{platform}/accounts/{account}/sites/{site} */
  name: string;
}

export const GetPlatformsAccountsSitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
    T.Http({ method: "POST", path: "v1/{+parent}/sites", hasBody: true }),
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

export interface RequestReviewPlatformsAccountsSitesRequest {
  /** Required. The name of the site to submit for review. Format: platforms/{platform}/accounts/{account}/sites/{site} */
  name: string;
}

export const RequestReviewPlatformsAccountsSitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:requestReview", hasBody: true }),
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
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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
    T.Http({ method: "POST", path: "v1/{+parent}/events", hasBody: true }),
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
