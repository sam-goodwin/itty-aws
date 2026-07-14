// ==========================================================================
// Web Content Publisher API (webcontentpublisher v1)
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
  name: "webcontentpublisher",
  version: "v1",
  rootUrl: "https://webcontentpublisher.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface TosAcceptance {
  /** Optional. The job title or role of the signer. */
  signerTitle?: string;
  /** Optional. The name of the person who accepted the TOS. */
  signer?: string;
  /** Required. Whether the user has accepted the Terms of Service. */
  userAccepted?: boolean;
}

export const TosAcceptance: Schema.Codec<TosAcceptance> =
  /*@__PURE__*/ Schema.Struct({
    signerTitle: Schema.optional(Schema.String),
    signer: Schema.optional(Schema.String),
    userAccepted: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TosAcceptance" });

export interface RrmProduct {
  /** Optional. The details of the TOS acceptance. */
  tosAcceptance?: TosAcceptance;
  /** Optional. Whether the RRM product is enabled for the publication. */
  enabled?: boolean;
  /** Output only. The URL to the product-specific Terms of Service. */
  productTosUrl?: string;
}

export const RrmProduct: Schema.Codec<RrmProduct> =
  /*@__PURE__*/ Schema.Struct({
    tosAcceptance: Schema.optional(TosAcceptance),
    enabled: Schema.optional(Schema.Boolean),
    productTosUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "RrmProduct" });

export interface DomainProperty {
  /** Optional. Whether the domain ownership has been verified (e.g., via Google Search Console). */
  ownershipVerified?: boolean;
  /** Required. The URL of the domain property (e.g., "https://example.com"). */
  url?: string;
}

export const DomainProperty: Schema.Codec<DomainProperty> =
  /*@__PURE__*/ Schema.Struct({
    ownershipVerified: Schema.optional(Schema.Boolean),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "DomainProperty" });

export interface ContentPolicyStatus {
  /** Output only. The current policy state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "OK"
    | "VIOLATION_GRACE_PERIOD"
    | "VIOLATION_ACTIVE"
    | "ORGANIZATION_VIOLATION_GRACE_PERIOD"
    | "ORGANIZATION_VIOLATION_ACTIVE"
    | "ORGANIZATION_VIOLATION_ACTIVE_IMMEDIATE"
    | (string & {});
  /** Output only. URL pointing to more details about the policy violation or status. */
  policyInfoUrl?: string;
}

export const ContentPolicyStatus: Schema.Codec<ContentPolicyStatus> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    policyInfoUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContentPolicyStatus" });

export interface SlProduct {
  /** Optional. Whether the Subscription Linking product is enabled. */
  enabled?: boolean;
  /** Optional. The Google Cloud Project number associated with the publication. */
  gcpProjectNumber?: string;
}

export const SlProduct: Schema.Codec<SlProduct> =
  /*@__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    gcpProjectNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "SlProduct" });

export interface Publication {
  /** Output only. The unique identifier of the organization that owns this publication. */
  organizationId?: string;
  /** Required. The primary language of the publication (BCP-47 code, e.g., "en-US"). */
  languageCode?: string;
  /** Optional. Reader Revenue Manager product settings and status. */
  rrmProduct?: RrmProduct;
  /** Output only. The list of active products/features enabled for this publication. */
  products?: ReadonlyArray<string>;
  /** Output only. The unique identifier of the publication. */
  publicationId?: string;
  /** Required. The user-visible display name of the publication. */
  displayName?: string;
  /** Optional. Additional domain properties verified for the publication. */
  additionalDomains?: ReadonlyArray<DomainProperty>;
  /** Optional. The URL to the publisher's Privacy Policy. */
  publicationPrivacyPolicyUrl?: string;
  /** Output only. The configured payment option. */
  paymentOption?:
    | "PAYMENT_OPTION_UNSPECIFIED"
    | "NONE"
    | "SUBSCRIPTIONS"
    | "CONTRIBUTIONS"
    | (string & {});
  /** Output only. The current onboarding state. */
  onboardingState?:
    | "ONBOARDING_STATE_UNSPECIFIED"
    | "ACTION_REQUIRED"
    | "PENDING_VERIFICATION"
    | "COMPLETE"
    | (string & {});
  /** Output only. The content policy compliance status of the publication. */
  contentPolicyStatus?: ContentPolicyStatus;
  /** Identifier. The resource name of the publication. Format: organizations/{organization}/publications/{publication} */
  name?: string;
  /** Required. The ISO 3166-1 alpha-2 region code where the publication is registered (e.g., "US"). */
  regionCode?: string;
  /** Optional. Subscription Linking product configurations. */
  slProduct?: SlProduct;
  /** Optional. The URL to the publisher's own Terms of Service. */
  publicationTosUrl?: string;
  /** Required. The primary domain property associated with the publication. */
  primaryDomain?: DomainProperty;
}

export const Publication: Schema.Codec<Publication> =
  /*@__PURE__*/ Schema.Struct({
    organizationId: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    rrmProduct: Schema.optional(RrmProduct),
    products: Schema.optional(Schema.Array(Schema.String)),
    publicationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    additionalDomains: Schema.optional(Schema.Array(DomainProperty)),
    publicationPrivacyPolicyUrl: Schema.optional(Schema.String),
    paymentOption: Schema.optional(Schema.String),
    onboardingState: Schema.optional(Schema.String),
    contentPolicyStatus: Schema.optional(ContentPolicyStatus),
    name: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    slProduct: Schema.optional(SlProduct),
    publicationTosUrl: Schema.optional(Schema.String),
    primaryDomain: Schema.optional(DomainProperty),
  }).annotate({ identifier: "Publication" });

export interface NewsletterConfig {
  /** Optional. Whether the user is required to provide their name to sign up. */
  nameRequired?: boolean;
  /** Optional. Custom consent or disclosure text shown to the user. */
  customConsentText?: string;
  /** Required. The title of the newsletter signup prompt. */
  title?: string;
  /** Optional. A custom message displayed to the user in the signup prompt. */
  customMessage?: string;
}

export const NewsletterConfig: Schema.Codec<NewsletterConfig> =
  /*@__PURE__*/ Schema.Struct({
    nameRequired: Schema.optional(Schema.Boolean),
    customConsentText: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    customMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "NewsletterConfig" });

export interface Cta {
  /** Optional. Configuration specific to newsletter signup CTAs. Only populated if type is `NEWSLETTER_SIGNUP`. */
  newsletterConfig?: NewsletterConfig;
  /** Output only. The current state of this CTA. */
  state?: "STATE_UNSPECIFIED" | "DRAFT" | "ACTIVE" | (string & {});
  /** Identifier. The resource name of the Cta. Format: organizations/{organization}/publications/{publication}/ctas/{cta} */
  name?: string;
  /** Required. The type of this CTA. */
  type?: "TYPE_UNSPECIFIED" | "NEWSLETTER_SIGNUP" | (string & {});
  /** Required. The user-visible display name of the CTA. */
  displayName?: string;
}

export const Cta: Schema.Codec<Cta> = /*@__PURE__*/ Schema.Struct({
  newsletterConfig: Schema.optional(NewsletterConfig),
  state: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "Cta" });

export interface ListPublicationsResponse {
  /** Output only. The list of publications. */
  publications?: ReadonlyArray<Publication>;
  /** Output only. A token to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
}

export const ListPublicationsResponse: Schema.Codec<ListPublicationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    publications: Schema.optional(Schema.Array(Publication)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPublicationsResponse" });

export interface CheckFreeAccessResponse {
  /** Output only. True if free access should be allowed, false otherwise. */
  isAllowed?: boolean;
}

export const CheckFreeAccessResponse: Schema.Codec<CheckFreeAccessResponse> =
  /*@__PURE__*/ Schema.Struct({
    isAllowed: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CheckFreeAccessResponse" });

export interface ListCtasResponse {
  /** Output only. The list of CTAs. */
  ctas?: ReadonlyArray<Cta>;
  /** Output only. A token to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
}

export const ListCtasResponse: Schema.Codec<ListCtasResponse> =
  /*@__PURE__*/ Schema.Struct({
    ctas: Schema.optional(Schema.Array(Cta)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListCtasResponse" });

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

export interface CheckFreeAccessPublicationsRequest {
  /** Required. The resource name of the publication. Format: publications/{publication_id} */
  name: string;
  /** Required. The HTTP referrer. */
  httpReferrer?: string;
  /** Required. The URI of the content. */
  uri?: string;
}

export const CheckFreeAccessPublicationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    httpReferrer: Schema.optional(Schema.String).pipe(
      T.HttpQuery("httpReferrer"),
    ),
    uri: Schema.optional(Schema.String).pipe(T.HttpQuery("uri")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:checkFreeAccess" }),
    svc,
  ) as unknown as Schema.Codec<CheckFreeAccessPublicationsRequest>;

export type CheckFreeAccessPublicationsResponse = CheckFreeAccessResponse;
export const CheckFreeAccessPublicationsResponse =
  /*@__PURE__*/ CheckFreeAccessResponse;

export type CheckFreeAccessPublicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Checks if a user is eligible for free article access. */
export const checkFreeAccessPublications: API.OperationMethod<
  CheckFreeAccessPublicationsRequest,
  CheckFreeAccessPublicationsResponse,
  CheckFreeAccessPublicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CheckFreeAccessPublicationsRequest,
  output: CheckFreeAccessPublicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateOrganizationsPublicationsRequest {
  /** Required. The parent resource where this publication will be created. Format: `organizations/{organization}`. */
  parent: string;
  /** Optional. The unique identifier of the publication to create. If not specified, the server will generate a random publication ID. */
  publicationId?: string;
  /** Request body */
  body?: Publication;
}

export const CreateOrganizationsPublicationsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    publicationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("publicationId"),
    ),
    body: Schema.optional(Publication).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/publications",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateOrganizationsPublicationsRequest>;

export type CreateOrganizationsPublicationsResponse = Publication;
export const CreateOrganizationsPublicationsResponse =
  /*@__PURE__*/ Publication;

export type CreateOrganizationsPublicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a publication. */
export const createOrganizationsPublications: API.OperationMethod<
  CreateOrganizationsPublicationsRequest,
  CreateOrganizationsPublicationsResponse,
  CreateOrganizationsPublicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOrganizationsPublicationsRequest,
  output: CreateOrganizationsPublicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsPublicationsRequest {
  /** Required. The resource name of the publication to retrieve. Format: `organizations/{organization}/publications/{publication}`. */
  name: string;
}

export const GetOrganizationsPublicationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsPublicationsRequest>;

export type GetOrganizationsPublicationsResponse = Publication;
export const GetOrganizationsPublicationsResponse = /*@__PURE__*/ Publication;

export type GetOrganizationsPublicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a publication. */
export const getOrganizationsPublications: API.OperationMethod<
  GetOrganizationsPublicationsRequest,
  GetOrganizationsPublicationsResponse,
  GetOrganizationsPublicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsPublicationsRequest,
  output: GetOrganizationsPublicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsPublicationsRequest {
  /** Required. The parent organization whose publications to list. Format: `organizations/{organization}`. */
  parent: string;
  /** Optional. A page token, received from a previous `ListPublications` call, to retrieve the next page. */
  pageToken?: string;
  /** Optional. A filter expression to filter the publications returned. */
  filter?: string;
  /** Optional. The maximum number of publications to return. The service may return fewer than this value. If unspecified, at most 50 publications will be returned. */
  pageSize?: number;
}

export const ListOrganizationsPublicationsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/publications" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsPublicationsRequest>;

export type ListOrganizationsPublicationsResponse = ListPublicationsResponse;
export const ListOrganizationsPublicationsResponse =
  /*@__PURE__*/ ListPublicationsResponse;

export type ListOrganizationsPublicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists publications. */
export const listOrganizationsPublications: API.PaginatedOperationMethod<
  ListOrganizationsPublicationsRequest,
  ListOrganizationsPublicationsResponse,
  ListOrganizationsPublicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsPublicationsRequest,
  output: ListOrganizationsPublicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchOrganizationsPublicationsRequest {
  /** Optional. The list of fields to update. */
  updateMask?: string;
  /** Identifier. The resource name of the publication. Format: organizations/{organization}/publications/{publication} */
  name: string;
  /** Request body */
  body?: Publication;
}

export const PatchOrganizationsPublicationsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Publication).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsPublicationsRequest>;

export type PatchOrganizationsPublicationsResponse = Publication;
export const PatchOrganizationsPublicationsResponse = /*@__PURE__*/ Publication;

export type PatchOrganizationsPublicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a publication. */
export const patchOrganizationsPublications: API.OperationMethod<
  PatchOrganizationsPublicationsRequest,
  PatchOrganizationsPublicationsResponse,
  PatchOrganizationsPublicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchOrganizationsPublicationsRequest,
  output: PatchOrganizationsPublicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsPublicationsCtasRequest {
  /** Required. The parent publication resource where this CTA will be created. Format: `organizations/{organization}/publications/{publication}`. */
  parent: string;
  /** Optional. The unique identifier of the CTA to create. If not specified, the server will generate a random CTA ID. */
  ctaId?: string;
  /** Request body */
  body?: Cta;
}

export const CreateOrganizationsPublicationsCtasRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    ctaId: Schema.optional(Schema.String).pipe(T.HttpQuery("ctaId")),
    body: Schema.optional(Cta).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/ctas", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateOrganizationsPublicationsCtasRequest>;

export type CreateOrganizationsPublicationsCtasResponse = Cta;
export const CreateOrganizationsPublicationsCtasResponse = /*@__PURE__*/ Cta;

export type CreateOrganizationsPublicationsCtasError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a CTA. */
export const createOrganizationsPublicationsCtas: API.OperationMethod<
  CreateOrganizationsPublicationsCtasRequest,
  CreateOrganizationsPublicationsCtasResponse,
  CreateOrganizationsPublicationsCtasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOrganizationsPublicationsCtasRequest,
  output: CreateOrganizationsPublicationsCtasResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsPublicationsCtasRequest {
  /** Required. The resource name of the CTA to retrieve. Format: `organizations/{organization}/publications/{publication}/ctas/{cta}`. */
  name: string;
}

export const GetOrganizationsPublicationsCtasRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsPublicationsCtasRequest>;

export type GetOrganizationsPublicationsCtasResponse = Cta;
export const GetOrganizationsPublicationsCtasResponse = /*@__PURE__*/ Cta;

export type GetOrganizationsPublicationsCtasError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a CTA. */
export const getOrganizationsPublicationsCtas: API.OperationMethod<
  GetOrganizationsPublicationsCtasRequest,
  GetOrganizationsPublicationsCtasResponse,
  GetOrganizationsPublicationsCtasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsPublicationsCtasRequest,
  output: GetOrganizationsPublicationsCtasResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsPublicationsCtasRequest {
  /** Required. The parent publication resource whose CTAs to list. Format: `organizations/{organization}/publications/{publication}`. */
  parent: string;
  /** Optional. A page token, received from a previous `ListCtas` call, to retrieve the next page. */
  pageToken?: string;
  /** Optional. The maximum number of CTAs to return. The service may return fewer than this value. If unspecified, at most 50 CTAs will be returned. */
  pageSize?: number;
}

export const ListOrganizationsPublicationsCtasRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/ctas" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsPublicationsCtasRequest>;

export type ListOrganizationsPublicationsCtasResponse = ListCtasResponse;
export const ListOrganizationsPublicationsCtasResponse =
  /*@__PURE__*/ ListCtasResponse;

export type ListOrganizationsPublicationsCtasError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists CTAs. */
export const listOrganizationsPublicationsCtas: API.PaginatedOperationMethod<
  ListOrganizationsPublicationsCtasRequest,
  ListOrganizationsPublicationsCtasResponse,
  ListOrganizationsPublicationsCtasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsPublicationsCtasRequest,
  output: ListOrganizationsPublicationsCtasResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
