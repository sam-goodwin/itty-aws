/**
 * Cloudflare TENANTS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service tenants
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Account
// =============================================================================

export interface ListAccountsRequest {
  tenantId: string;
}

export const ListAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      tenantId: Schema.String.pipe(T.HttpPath("tenantId")),
    }).pipe(T.Http({ method: "GET", path: "/tenants/{tenantId}/accounts" })),
) as unknown as Schema.Schema<ListAccountsRequest>;

export interface ListAccountsResponse {
  result: {
    id: string;
    createdOn: string;
    name: string | null;
    settings: {
      abuseContactEmail: string | null;
      accessApprovalExpiry: string | null;
      apiAccessEnabled: boolean | null;
      defaultNameservers: string | null;
      enforceTwofactor: boolean | null;
      useAccountCustomNsByDefault: boolean | null;
    };
    type: "standard" | "enterprise" | (string & {});
  }[];
}

export const ListAccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          createdOn: Schema.String,
          name: Schema.Union([Schema.String, Schema.Null]),
          settings: Schema.Struct({
            abuseContactEmail: Schema.Union([Schema.String, Schema.Null]),
            accessApprovalExpiry: Schema.Union([Schema.String, Schema.Null]),
            apiAccessEnabled: Schema.Union([Schema.Boolean, Schema.Null]),
            defaultNameservers: Schema.Union([Schema.String, Schema.Null]),
            enforceTwofactor: Schema.Union([Schema.Boolean, Schema.Null]),
            useAccountCustomNsByDefault: Schema.Union([
              Schema.Boolean,
              Schema.Null,
            ]),
          }).pipe(
            Schema.encodeKeys({
              abuseContactEmail: "abuse_contact_email",
              accessApprovalExpiry: "access_approval_expiry",
              apiAccessEnabled: "api_access_enabled",
              defaultNameservers: "default_nameservers",
              enforceTwofactor: "enforce_twofactor",
              useAccountCustomNsByDefault: "use_account_custom_ns_by_default",
            }),
          ),
          type: Schema.Union([
            Schema.Literals(["standard", "enterprise"]),
            Schema.String,
          ]),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            createdOn: "created_on",
            name: "name",
            settings: "settings",
            type: "type",
          }),
        ),
      ),
    }),
) as unknown as Schema.Schema<ListAccountsResponse>;

export type ListAccountsError = DefaultErrors;

export const listAccounts: API.PaginatedOperationMethod<
  ListAccountsRequest,
  ListAccountsResponse,
  ListAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsRequest,
  output: ListAccountsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// AccountType
// =============================================================================

export interface ListAccountTypesRequest {
  tenantId: string;
}

export const ListAccountTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tenantId: Schema.String.pipe(T.HttpPath("tenantId")),
    }).pipe(
      T.Http({ method: "GET", path: "/tenants/{tenantId}/account_types" }),
    ),
  ) as unknown as Schema.Schema<ListAccountTypesRequest>;

export interface ListAccountTypesResponse {
  result: string[];
}

export const ListAccountTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(Schema.String),
    }),
  ) as unknown as Schema.Schema<ListAccountTypesResponse>;

export type ListAccountTypesError = DefaultErrors;

export const listAccountTypes: API.PaginatedOperationMethod<
  ListAccountTypesRequest,
  ListAccountTypesResponse,
  ListAccountTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountTypesRequest,
  output: ListAccountTypesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Entitlement
// =============================================================================

export interface GetEntitlementRequest {
  tenantId: string;
}

export const GetEntitlementRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      tenantId: Schema.String.pipe(T.HttpPath("tenantId")),
    }).pipe(
      T.Http({ method: "GET", path: "/tenants/{tenantId}/entitlements" }),
    ),
) as unknown as Schema.Schema<GetEntitlementRequest>;

export interface GetEntitlementResponse {
  allowAddSubdomain: { type: "bool"; value: boolean };
  allowAutoAcceptInvites: { type: "bool"; value: boolean };
  cnameSetupAllowed: { type: "bool"; value: boolean };
  customEntitlements:
    | {
        allocation:
          | { type: "max_count"; value: number }
          | { type: "bool"; value: boolean }
          | { type: ""; value?: unknown | null };
        feature: { key: string };
      }[]
    | null;
  mhsCertificateCount: { type: "max_count"; value: number };
  partialSetupAllowed: { type: "bool"; value: boolean };
}

export const GetEntitlementResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      allowAddSubdomain: Schema.Struct({
        type: Schema.Literal("bool"),
        value: Schema.Boolean,
      }),
      allowAutoAcceptInvites: Schema.Struct({
        type: Schema.Literal("bool"),
        value: Schema.Boolean,
      }),
      cnameSetupAllowed: Schema.Struct({
        type: Schema.Literal("bool"),
        value: Schema.Boolean,
      }),
      customEntitlements: Schema.Union([
        Schema.Array(
          Schema.Struct({
            allocation: Schema.Union([
              Schema.Struct({
                type: Schema.Literal("max_count"),
                value: Schema.Number,
              }),
              Schema.Struct({
                type: Schema.Literal("bool"),
                value: Schema.Boolean,
              }),
              Schema.Struct({
                type: Schema.Literal(""),
                value: Schema.optional(
                  Schema.Union([Schema.Unknown, Schema.Null]),
                ),
              }),
            ]),
            feature: Schema.Struct({
              key: Schema.String,
            }),
          }),
        ),
        Schema.Null,
      ]),
      mhsCertificateCount: Schema.Struct({
        type: Schema.Literal("max_count"),
        value: Schema.Number,
      }),
      partialSetupAllowed: Schema.Struct({
        type: Schema.Literal("bool"),
        value: Schema.Boolean,
      }),
    })
      .pipe(
        Schema.encodeKeys({
          allowAddSubdomain: "allow_add_subdomain",
          allowAutoAcceptInvites: "allow_auto_accept_invites",
          cnameSetupAllowed: "cname_setup_allowed",
          customEntitlements: "custom_entitlements",
          mhsCertificateCount: "mhs_certificate_count",
          partialSetupAllowed: "partial_setup_allowed",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetEntitlementResponse>;

export type GetEntitlementError = DefaultErrors;

export const getEntitlement: API.OperationMethod<
  GetEntitlementRequest,
  GetEntitlementResponse,
  GetEntitlementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEntitlementRequest,
  output: GetEntitlementResponse,
  errors: [],
}));

// =============================================================================
// Membership
// =============================================================================

export interface ListMembershipsRequest {
  tenantId: string;
}

export const ListMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tenantId: Schema.String.pipe(T.HttpPath("tenantId")),
    }).pipe(T.Http({ method: "GET", path: "/tenants/{tenantId}/memberships" })),
  ) as unknown as Schema.Schema<ListMembershipsRequest>;

export interface ListMembershipsResponse {
  result: { userEmail: string; userName: string; userTag: string }[];
}

export const ListMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          userEmail: Schema.String,
          userName: Schema.String,
          userTag: Schema.String,
        }).pipe(
          Schema.encodeKeys({
            userEmail: "user_email",
            userName: "user_name",
            userTag: "user_tag",
          }),
        ),
      ),
    }),
  ) as unknown as Schema.Schema<ListMembershipsResponse>;

export type ListMembershipsError = DefaultErrors;

export const listMemberships: API.PaginatedOperationMethod<
  ListMembershipsRequest,
  ListMembershipsResponse,
  ListMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListMembershipsRequest,
  output: ListMembershipsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Tenant
// =============================================================================

export interface GetTenantRequest {
  tenantId: string;
}

export const GetTenantRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    tenantId: Schema.String.pipe(T.HttpPath("tenantId")),
  }).pipe(T.Http({ method: "GET", path: "/tenants/{tenantId}" })),
) as unknown as Schema.Schema<GetTenantRequest>;

export interface GetTenantResponse {
  cdate: string;
  edate: string;
  tenantContacts: { email?: string | null; website?: string | null };
  tenantLabels: string[];
  tenantMetadata: {
    dns?: {
      nsPool: { primary?: string | null; secondary?: string | null };
    } | null;
  };
  tenantName: string;
  tenantNetwork: unknown;
  tenantStatus: string;
  tenantTag: string;
  tenantType: string;
  tenantUnits: {
    unitMemberships: unknown[];
    unitMetadata: unknown;
    unitName: string;
    unitStatus: string;
    unitTag: string;
  }[];
  customerId?: string | null;
}

export const GetTenantResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      cdate: Schema.String,
      edate: Schema.String,
      tenantContacts: Schema.Struct({
        email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        website: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }),
      tenantLabels: Schema.Array(Schema.String),
      tenantMetadata: Schema.Struct({
        dns: Schema.optional(
          Schema.Union([
            Schema.Struct({
              nsPool: Schema.Struct({
                primary: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                secondary: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }),
            }).pipe(Schema.encodeKeys({ nsPool: "ns_pool" })),
            Schema.Null,
          ]),
        ),
      }),
      tenantName: Schema.String,
      tenantNetwork: Schema.Unknown,
      tenantStatus: Schema.String,
      tenantTag: Schema.String,
      tenantType: Schema.String,
      tenantUnits: Schema.Array(
        Schema.Struct({
          unitMemberships: Schema.Array(Schema.Unknown),
          unitMetadata: Schema.Unknown,
          unitName: Schema.String,
          unitStatus: Schema.String,
          unitTag: Schema.String,
        }).pipe(
          Schema.encodeKeys({
            unitMemberships: "unit_memberships",
            unitMetadata: "unit_metadata",
            unitName: "unit_name",
            unitStatus: "unit_status",
            unitTag: "unit_tag",
          }),
        ),
      ),
      customerId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          cdate: "cdate",
          edate: "edate",
          tenantContacts: "tenant_contacts",
          tenantLabels: "tenant_labels",
          tenantMetadata: "tenant_metadata",
          tenantName: "tenant_name",
          tenantNetwork: "tenant_network",
          tenantStatus: "tenant_status",
          tenantTag: "tenant_tag",
          tenantType: "tenant_type",
          tenantUnits: "tenant_units",
          customerId: "customer_id",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetTenantResponse>;

export type GetTenantError = DefaultErrors;

export const getTenant: API.OperationMethod<
  GetTenantRequest,
  GetTenantResponse,
  GetTenantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTenantRequest,
  output: GetTenantResponse,
  errors: [],
}));
