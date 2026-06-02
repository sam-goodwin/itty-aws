/**
 * Cloudflare REGISTRAR API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service registrar
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Domain
// =============================================================================

export interface GetDomainRequest {
  domainName: string;
  /** Identifier */
  accountId: string;
}

export const GetDomainRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domainName: Schema.String.pipe(T.HttpPath("domainName")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/registrar/domains/{domainName}",
  }),
) as unknown as Schema.Schema<GetDomainRequest>;

export type GetDomainResponse = unknown;

export const GetDomainResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown.pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetDomainResponse>;

export type GetDomainError = DefaultErrors;

export const getDomain: API.OperationMethod<
  GetDomainRequest,
  GetDomainResponse,
  GetDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDomainRequest,
  output: GetDomainResponse,
  errors: [],
}));

export interface ListDomainsRequest {
  /** Identifier */
  accountId: string;
}

export const ListDomainsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({ method: "GET", path: "/accounts/{account_id}/registrar/domains" }),
) as unknown as Schema.Schema<ListDomainsRequest>;

export interface ListDomainsResponse {
  result: {
    id?: string | null;
    available?: boolean | null;
    canRegister?: boolean | null;
    createdAt?: string | null;
    currentRegistrar?: string | null;
    expiresAt?: string | null;
    locked?: boolean | null;
    registrantContact?: {
      address: string;
      city: string;
      country: string | null;
      firstName: string | null;
      lastName: string | null;
      organization: string;
      phone: string | null;
      state: string;
      zip: string | null;
      id?: string | null;
      address2?: string | null;
      email?: string | null;
      fax?: string | null;
    } | null;
    registryStatuses?: string | null;
    supportedTld?: boolean | null;
    transferIn?: {
      acceptFoa?: "needed" | "ok" | (string & {}) | null;
      approveTransfer?:
        | "needed"
        | "ok"
        | "pending"
        | "trying"
        | "rejected"
        | "unknown"
        | (string & {})
        | null;
      canCancelTransfer?: boolean | null;
      disablePrivacy?: "needed" | "ok" | "unknown" | (string & {}) | null;
      enterAuthCode?:
        | "needed"
        | "ok"
        | "pending"
        | "trying"
        | "rejected"
        | (string & {})
        | null;
      unlockDomain?:
        | "needed"
        | "ok"
        | "pending"
        | "trying"
        | "unknown"
        | (string & {})
        | null;
    } | null;
    updatedAt?: string | null;
  }[];
}

export const ListDomainsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      available: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      canRegister: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      currentRegistrar: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      expiresAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      locked: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      registrantContact: Schema.optional(
        Schema.Union([
          Schema.Struct({
            address: Schema.String,
            city: Schema.String,
            country: Schema.Union([Schema.String, Schema.Null]),
            firstName: Schema.Union([Schema.String, Schema.Null]),
            lastName: Schema.Union([Schema.String, Schema.Null]),
            organization: Schema.String,
            phone: Schema.Union([Schema.String, Schema.Null]),
            state: Schema.String,
            zip: Schema.Union([Schema.String, Schema.Null]),
            id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            address2: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            fax: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          }).pipe(
            Schema.encodeKeys({
              address: "address",
              city: "city",
              country: "country",
              firstName: "first_name",
              lastName: "last_name",
              organization: "organization",
              phone: "phone",
              state: "state",
              zip: "zip",
              id: "id",
              address2: "address2",
              email: "email",
              fax: "fax",
            }),
          ),
          Schema.Null,
        ]),
      ),
      registryStatuses: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      supportedTld: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      transferIn: Schema.optional(
        Schema.Union([
          Schema.Struct({
            acceptFoa: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals(["needed", "ok"]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
            approveTransfer: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals([
                    "needed",
                    "ok",
                    "pending",
                    "trying",
                    "rejected",
                    "unknown",
                  ]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
            canCancelTransfer: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            disablePrivacy: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals(["needed", "ok", "unknown"]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
            enterAuthCode: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals([
                    "needed",
                    "ok",
                    "pending",
                    "trying",
                    "rejected",
                  ]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
            unlockDomain: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals([
                    "needed",
                    "ok",
                    "pending",
                    "trying",
                    "unknown",
                  ]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              acceptFoa: "accept_foa",
              approveTransfer: "approve_transfer",
              canCancelTransfer: "can_cancel_transfer",
              disablePrivacy: "disable_privacy",
              enterAuthCode: "enter_auth_code",
              unlockDomain: "unlock_domain",
            }),
          ),
          Schema.Null,
        ]),
      ),
      updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        available: "available",
        canRegister: "can_register",
        createdAt: "created_at",
        currentRegistrar: "current_registrar",
        expiresAt: "expires_at",
        locked: "locked",
        registrantContact: "registrant_contact",
        registryStatuses: "registry_statuses",
        supportedTld: "supported_tld",
        transferIn: "transfer_in",
        updatedAt: "updated_at",
      }),
    ),
  ),
}) as unknown as Schema.Schema<ListDomainsResponse>;

export type ListDomainsError = DefaultErrors;

export const listDomains: API.PaginatedOperationMethod<
  ListDomainsRequest,
  ListDomainsResponse,
  ListDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDomainsRequest,
  output: ListDomainsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface PutDomainRequest {
  domainName: string;
  /** Path param: Identifier */
  accountId: string;
  /** Body param: Auto-renew controls whether subscription is automatically renewed upon domain expiration. */
  autoRenew?: boolean;
  /** Body param: Shows whether a registrar lock is in place for a domain. */
  locked?: boolean;
  /** Body param: Privacy option controls redacting WHOIS information. */
  privacy?: boolean;
}

export const PutDomainRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domainName: Schema.String.pipe(T.HttpPath("domainName")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  autoRenew: Schema.optional(Schema.Boolean),
  locked: Schema.optional(Schema.Boolean),
  privacy: Schema.optional(Schema.Boolean),
}).pipe(
  Schema.encodeKeys({
    autoRenew: "auto_renew",
    locked: "locked",
    privacy: "privacy",
  }),
  T.Http({
    method: "PUT",
    path: "/accounts/{account_id}/registrar/domains/{domainName}",
  }),
) as unknown as Schema.Schema<PutDomainRequest>;

export type PutDomainResponse = unknown;

export const PutDomainResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown.pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<PutDomainResponse>;

export type PutDomainError = DefaultErrors;

export const putDomain: API.OperationMethod<
  PutDomainRequest,
  PutDomainResponse,
  PutDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutDomainRequest,
  output: PutDomainResponse,
  errors: [],
}));

// =============================================================================
// Registrar
// =============================================================================

export interface CheckRegistrarRequest {
  /** Path param: Identifier */
  accountId: string;
  /** Body param: List of fully qualified domain names (FQDNs) to check for availability. Each domain must include the extension.  - Minimum: 1 domain - Maximum: 20 domains per request - Domains on unsuppor */
  domains: string[];
}

export const CheckRegistrarRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  domains: Schema.Array(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/registrar/domain-check",
  }),
) as unknown as Schema.Schema<CheckRegistrarRequest>;

export interface CheckRegistrarResponse {
  /** Array of domain availability results. Domains on unsupported extensions are included with `registrable: false` and a `reason` field. Malformed domain names may be omitted. */
  domains: {
    name: string;
    registrable: boolean;
    pricing?: {
      currency: string;
      registrationCost: string;
      renewalCost: string;
    } | null;
    reason?:
      | "extension_not_supported_via_api"
      | "extension_not_supported"
      | "extension_disallows_registration"
      | "domain_premium"
      | "domain_unavailable"
      | (string & {})
      | null;
    tier?: "standard" | "premium" | (string & {}) | null;
  }[];
}

export const CheckRegistrarResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    domains: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        registrable: Schema.Boolean,
        pricing: Schema.optional(
          Schema.Union([
            Schema.Struct({
              currency: Schema.String,
              registrationCost: Schema.String,
              renewalCost: Schema.String,
            }).pipe(
              Schema.encodeKeys({
                currency: "currency",
                registrationCost: "registration_cost",
                renewalCost: "renewal_cost",
              }),
            ),
            Schema.Null,
          ]),
        ),
        reason: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals([
                "extension_not_supported_via_api",
                "extension_not_supported",
                "extension_disallows_registration",
                "domain_premium",
                "domain_unavailable",
              ]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        tier: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["standard", "premium"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
      }),
    ),
  },
).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<CheckRegistrarResponse>;

export type CheckRegistrarError = DefaultErrors;

export const checkRegistrar: API.OperationMethod<
  CheckRegistrarRequest,
  CheckRegistrarResponse,
  CheckRegistrarError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CheckRegistrarRequest,
  output: CheckRegistrarResponse,
  errors: [],
}));

export interface SearchRegistrarRequest {
  /** Path param: Identifier */
  accountId: string;
  /** Query param: The search term to find domain suggestions. Accepts keywords, phrases, or full domain names.  - Phrases: "coffee shop" returns coffeeshop.com, mycoffeeshop.net, etc. - Domain names: "exam */
  q: string;
  /** Query param: Limits results to specific domain extensions from the supported set. If not specified, returns results across all supported extensions. Extensions not in the supported set are silently ig */
  extensions?: string[];
  /** Query param: Maximum number of domain suggestions to return. Defaults to 20 if not specified. */
  limit?: number;
}

export const SearchRegistrarRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    q: Schema.String.pipe(T.HttpQuery("q")),
    extensions: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extensions"),
    ),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/registrar/domain-search",
  }),
) as unknown as Schema.Schema<SearchRegistrarRequest>;

export interface SearchRegistrarResponse {
  /** Array of domain suggestions sorted by relevance. May be empty if no domains match the search criteria. */
  domains: {
    name: string;
    registrable: boolean;
    pricing?: {
      currency: string;
      registrationCost: string;
      renewalCost: string;
    } | null;
    reason?:
      | "extension_not_supported_via_api"
      | "extension_not_supported"
      | "extension_disallows_registration"
      | "domain_premium"
      | "domain_unavailable"
      | (string & {})
      | null;
    tier?: "standard" | "premium" | (string & {}) | null;
  }[];
}

export const SearchRegistrarResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domains: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        registrable: Schema.Boolean,
        pricing: Schema.optional(
          Schema.Union([
            Schema.Struct({
              currency: Schema.String,
              registrationCost: Schema.String,
              renewalCost: Schema.String,
            }).pipe(
              Schema.encodeKeys({
                currency: "currency",
                registrationCost: "registration_cost",
                renewalCost: "renewal_cost",
              }),
            ),
            Schema.Null,
          ]),
        ),
        reason: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals([
                "extension_not_supported_via_api",
                "extension_not_supported",
                "extension_disallows_registration",
                "domain_premium",
                "domain_unavailable",
              ]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        tier: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["standard", "premium"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
      }),
    ),
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<SearchRegistrarResponse>;

export type SearchRegistrarError = DefaultErrors;

export const searchRegistrar: API.OperationMethod<
  SearchRegistrarRequest,
  SearchRegistrarResponse,
  SearchRegistrarError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchRegistrarRequest,
  output: SearchRegistrarResponse,
  errors: [],
}));

// =============================================================================
// RegistrationStatus
// =============================================================================

export interface GetRegistrationStatusRequest {
  domainName: string;
  /** Identifier */
  accountId: string;
}

export const GetRegistrationStatusRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domainName: Schema.String.pipe(T.HttpPath("domainName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/registrar/registrations/{domainName}/registration-status",
    }),
  ) as unknown as Schema.Schema<GetRegistrationStatusRequest>;

export interface GetRegistrationStatusResponse {
  /** Whether the workflow has reached a terminal state. `true` when `state` is `succeeded` or `failed`. `false` for `pending`, `in_progress`, `action_required`, and `blocked`. */
  completed: boolean;
  createdAt: string;
  links: { self: string; resource?: string | null };
  /** Workflow lifecycle state.  - `pending`: Workflow has been created but not yet started processing. - `in_progress`: Actively processing. Continue polling `links.self`. The workflow has an internal dead */
  state:
    | "pending"
    | "in_progress"
    | "action_required"
    | "blocked"
    | "succeeded"
    | "failed"
    | (string & {});
  updatedAt: string;
  /** Workflow-specific data for this workflow.  The workflow subject is identified by `context.domain_name` for domain-centric workflows. */
  context?: Record<string, unknown> | null;
  /** Error details when a workflow reaches the `failed` state. The specific error codes and messages depend on the workflow type (registration, update, etc.) and the underlying registry response. These wor */
  error?: { code: string; message: string } | null;
}

export const GetRegistrationStatusResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    completed: Schema.Boolean,
    createdAt: Schema.String,
    links: Schema.Struct({
      self: Schema.String,
      resource: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
    state: Schema.Union([
      Schema.Literals([
        "pending",
        "in_progress",
        "action_required",
        "blocked",
        "succeeded",
        "failed",
      ]),
      Schema.String,
    ]),
    updatedAt: Schema.String,
    context: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    error: Schema.optional(
      Schema.Union([
        Schema.Struct({
          code: Schema.String,
          message: Schema.String,
        }),
        Schema.Null,
      ]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        completed: "completed",
        createdAt: "created_at",
        links: "links",
        state: "state",
        updatedAt: "updated_at",
        context: "context",
        error: "error",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<GetRegistrationStatusResponse>;

export type GetRegistrationStatusError = DefaultErrors;

export const getRegistrationStatus: API.OperationMethod<
  GetRegistrationStatusRequest,
  GetRegistrationStatusResponse,
  GetRegistrationStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRegistrationStatusRequest,
  output: GetRegistrationStatusResponse,
  errors: [],
}));

// =============================================================================
// UpdateStatus
// =============================================================================

export interface GetUpdateStatusRequest {
  domainName: string;
  /** Identifier */
  accountId: string;
}

export const GetUpdateStatusRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    domainName: Schema.String.pipe(T.HttpPath("domainName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/registrar/registrations/{domainName}/update-status",
  }),
) as unknown as Schema.Schema<GetUpdateStatusRequest>;

export interface GetUpdateStatusResponse {
  /** Whether the workflow has reached a terminal state. `true` when `state` is `succeeded` or `failed`. `false` for `pending`, `in_progress`, `action_required`, and `blocked`. */
  completed: boolean;
  createdAt: string;
  links: { self: string; resource?: string | null };
  /** Workflow lifecycle state.  - `pending`: Workflow has been created but not yet started processing. - `in_progress`: Actively processing. Continue polling `links.self`. The workflow has an internal dead */
  state:
    | "pending"
    | "in_progress"
    | "action_required"
    | "blocked"
    | "succeeded"
    | "failed"
    | (string & {});
  updatedAt: string;
  /** Workflow-specific data for this workflow.  The workflow subject is identified by `context.domain_name` for domain-centric workflows. */
  context?: Record<string, unknown> | null;
  /** Error details when a workflow reaches the `failed` state. The specific error codes and messages depend on the workflow type (registration, update, etc.) and the underlying registry response. These wor */
  error?: { code: string; message: string } | null;
}

export const GetUpdateStatusResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    completed: Schema.Boolean,
    createdAt: Schema.String,
    links: Schema.Struct({
      self: Schema.String,
      resource: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
    state: Schema.Union([
      Schema.Literals([
        "pending",
        "in_progress",
        "action_required",
        "blocked",
        "succeeded",
        "failed",
      ]),
      Schema.String,
    ]),
    updatedAt: Schema.String,
    context: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    error: Schema.optional(
      Schema.Union([
        Schema.Struct({
          code: Schema.String,
          message: Schema.String,
        }),
        Schema.Null,
      ]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        completed: "completed",
        createdAt: "created_at",
        links: "links",
        state: "state",
        updatedAt: "updated_at",
        context: "context",
        error: "error",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<GetUpdateStatusResponse>;

export type GetUpdateStatusError = DefaultErrors;

export const getUpdateStatus: API.OperationMethod<
  GetUpdateStatusRequest,
  GetUpdateStatusResponse,
  GetUpdateStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUpdateStatusRequest,
  output: GetUpdateStatusResponse,
  errors: [],
}));
