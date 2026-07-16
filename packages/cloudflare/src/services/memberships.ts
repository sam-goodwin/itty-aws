/**
 * Cloudflare MEMBERSHIPS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service memberships
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface ManagedBy {
  /** ID of the parent Organization, if one exists */
  parentOrgId?: string | null;
  /** Name of the parent Organization, if one exists */
  parentOrgName?: string | null;
}
const ManagedBy = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    parentOrgId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    parentOrgName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      parentOrgId: "parent_org_id",
      parentOrgName: "parent_org_name",
    }),
  ),
) as unknown as Schema.Codec<ManagedBy>;

interface Settings {
  /** Sets an abuse contact email to notify for abuse reports. */
  abuseContactEmail?: string | null;
  /** Indicates whether membership in this account requires that Two-Factor Authentication is enabled */
  enforceTwofactor?: boolean | null;
}
const Settings = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    abuseContactEmail: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    enforceTwofactor: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      abuseContactEmail: "abuse_contact_email",
      enforceTwofactor: "enforce_twofactor",
    }),
  ),
) as unknown as Schema.Codec<Settings>;

interface Account {
  /** Identifier */
  id: string;
  /** Account name */
  name: string;
  type: "standard" | "enterprise" | (string & {});
  /** Timestamp for the creation of the account */
  createdOn?: string | null;
  /** Parent container details */
  managedBy?: {
    parentOrgId?: string | null;
    parentOrgName?: string | null;
  } | null;
  /** Account settings */
  settings?: {
    abuseContactEmail?: string | null;
    enforceTwofactor?: boolean | null;
  } | null;
}
const Account = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    type: Schema.Union([
      Schema.Literals(["standard", "enterprise"]),
      Schema.String,
    ]),
    createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    managedBy: Schema.optional(Schema.Union([ManagedBy, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      name: "name",
      type: "type",
      createdOn: "created_on",
      managedBy: "managed_by",
      settings: "settings",
    }),
  ),
) as unknown as Schema.Codec<Account>;

interface PermissionGrant {
  read?: boolean | null;
  write?: boolean | null;
}
const PermissionGrant = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    read: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    write: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<PermissionGrant>;

interface Permissions {
  analytics?: { read?: boolean | null; write?: boolean | null } | null;
  billing?: { read?: boolean | null; write?: boolean | null } | null;
  cachePurge?: { read?: boolean | null; write?: boolean | null } | null;
  dns?: { read?: boolean | null; write?: boolean | null } | null;
  dnsRecords?: { read?: boolean | null; write?: boolean | null } | null;
  lb?: { read?: boolean | null; write?: boolean | null } | null;
  logs?: { read?: boolean | null; write?: boolean | null } | null;
  organization?: { read?: boolean | null; write?: boolean | null } | null;
  ssl?: { read?: boolean | null; write?: boolean | null } | null;
  waf?: { read?: boolean | null; write?: boolean | null } | null;
  zoneSettings?: { read?: boolean | null; write?: boolean | null } | null;
  zones?: { read?: boolean | null; write?: boolean | null } | null;
}
const Permissions = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    analytics: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
    billing: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
    cachePurge: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
    dns: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
    dnsRecords: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
    lb: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
    logs: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
    organization: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
    ssl: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
    waf: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
    zoneSettings: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
    zones: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      analytics: "analytics",
      billing: "billing",
      cachePurge: "cache_purge",
      dns: "dns",
      dnsRecords: "dns_records",
      lb: "lb",
      logs: "logs",
      organization: "organization",
      ssl: "ssl",
      waf: "waf",
      zoneSettings: "zone_settings",
      zones: "zones",
    }),
  ),
) as unknown as Schema.Codec<Permissions>;

interface Meta {
  key?: string | null;
  value?: string | null;
}
const Meta = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    key: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Meta>;

interface PermissionGroup {
  /** Identifier of the permission group. */
  id: string;
  /** Attributes associated to the permission group. */
  meta?: { key?: string | null; value?: string | null } | null;
  /** Name of the permission group. */
  name?: string | null;
}
const PermissionGroup = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    meta: Schema.optional(Schema.Union([Meta, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<PermissionGroup>;

interface Object2 {
  /** This is a combination of pre-defined resource name and identifier (like Zone ID etc.) */
  key: string;
}
const Object2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    key: Schema.String,
  }),
) as unknown as Schema.Codec<Object2>;

interface Scope {
  /** This is a combination of pre-defined resource name and identifier (like Account ID etc.) */
  key: string;
  /** A list of scope objects for additional context. */
  objects: { key: string }[];
}
const Scope = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    key: Schema.String,
    objects: Schema.Array(Object2),
  }),
) as unknown as Schema.Codec<Scope>;

interface ResourceGroup {
  /** Identifier of the resource group. */
  id: string;
  /** The scope associated to the resource group */
  scope: { key: string; objects: { key: string }[] }[];
  /** Attributes associated to the resource group. */
  meta?: { key?: string | null; value?: string | null } | null;
  /** Name of the resource group. */
  name?: string | null;
}
const ResourceGroup = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    scope: Schema.Array(Scope),
    meta: Schema.optional(Schema.Union([Meta, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ResourceGroup>;

interface Policy {
  /** Policy identifier. */
  id?: string | null;
  /** Allow or deny operations against the resources. */
  access?: "allow" | "deny" | (string & {}) | null;
  /** A set of permission groups that are specified to the policy. */
  permissionGroups?:
    | {
        id: string;
        meta?: { key?: string | null; value?: string | null } | null;
        name?: string | null;
      }[]
    | null;
  /** A list of resource groups that the policy applies to. */
  resourceGroups?:
    | {
        id: string;
        scope: { key: string; objects: { key: string }[] }[];
        meta?: { key?: string | null; value?: string | null } | null;
        name?: string | null;
      }[]
    | null;
}
const Policy = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    access: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["allow", "deny"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    permissionGroups: Schema.optional(
      Schema.Union([Schema.Array(PermissionGroup), Schema.Null]),
    ),
    resourceGroups: Schema.optional(
      Schema.Union([Schema.Array(ResourceGroup), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      access: "access",
      permissionGroups: "permission_groups",
      resourceGroups: "resource_groups",
    }),
  ),
) as unknown as Schema.Codec<Policy>;

interface ListMembershipsResponseResult {
  /** Membership identifier tag. */
  id?: string | null;
  account?: {
    id: string;
    name: string;
    type: "standard" | "enterprise" | (string & {});
    createdOn?: string | null;
    managedBy?: {
      parentOrgId?: string | null;
      parentOrgName?: string | null;
    } | null;
    settings?: {
      abuseContactEmail?: string | null;
      enforceTwofactor?: boolean | null;
    } | null;
  } | null;
  /** Enterprise only. Indicates whether or not API access is enabled specifically for this user on a given account. */
  apiAccessEnabled?: boolean | null;
  /** All access permissions for the user at the account. */
  permissions?: {
    analytics?: { read?: boolean | null; write?: boolean | null } | null;
    billing?: { read?: boolean | null; write?: boolean | null } | null;
    cachePurge?: { read?: boolean | null; write?: boolean | null } | null;
    dns?: { read?: boolean | null; write?: boolean | null } | null;
    dnsRecords?: { read?: boolean | null; write?: boolean | null } | null;
    lb?: { read?: boolean | null; write?: boolean | null } | null;
    logs?: { read?: boolean | null; write?: boolean | null } | null;
    organization?: { read?: boolean | null; write?: boolean | null } | null;
    ssl?: { read?: boolean | null; write?: boolean | null } | null;
    waf?: { read?: boolean | null; write?: boolean | null } | null;
    zoneSettings?: { read?: boolean | null; write?: boolean | null } | null;
    zones?: { read?: boolean | null; write?: boolean | null } | null;
  } | null;
  /** List of role names the membership has for this account. */
  roles?: string[] | null;
  /** Status of this membership. */
  status?: "accepted" | "pending" | "rejected" | (string & {}) | null;
}
const ListMembershipsResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      account: Schema.optional(Schema.Union([Account, Schema.Null])),
      apiAccessEnabled: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      permissions: Schema.optional(Schema.Union([Permissions, Schema.Null])),
      roles: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["accepted", "pending", "rejected"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        account: "account",
        apiAccessEnabled: "api_access_enabled",
        permissions: "permissions",
        roles: "roles",
        status: "status",
      }),
    ),
  ) as unknown as Schema.Codec<ListMembershipsResponseResult>;

interface ListMembershipsResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListMembershipsResponseResultInfo =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      totalCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        count: "count",
        page: "page",
        perPage: "per_page",
        totalCount: "total_count",
      }),
    ),
  ) as unknown as Schema.Codec<ListMembershipsResponseResultInfo>;

// =============================================================================
// Membership
// =============================================================================

export interface GetMembershipRequest {
  membershipId: string;
}

export const GetMembershipRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    membershipId: Schema.String.pipe(T.HttpPath("membershipId")),
  }).pipe(T.Http({ method: "GET", path: "/memberships/{membershipId}" })),
) as unknown as Schema.Codec<GetMembershipRequest>;

export interface GetMembershipResponse {
  /** Membership identifier tag. */
  id?: string | null;
  account?: {
    id: string;
    name: string;
    type: "standard" | "enterprise" | (string & {});
    createdOn?: string | null;
    managedBy?: {
      parentOrgId?: string | null;
      parentOrgName?: string | null;
    } | null;
    settings?: {
      abuseContactEmail?: string | null;
      enforceTwofactor?: boolean | null;
    } | null;
  } | null;
  /** Enterprise only. Indicates whether or not API access is enabled specifically for this user on a given account. */
  apiAccessEnabled?: boolean | null;
  /** All access permissions for the user at the account. */
  permissions?: {
    analytics?: { read?: boolean | null; write?: boolean | null } | null;
    billing?: { read?: boolean | null; write?: boolean | null } | null;
    cachePurge?: { read?: boolean | null; write?: boolean | null } | null;
    dns?: { read?: boolean | null; write?: boolean | null } | null;
    dnsRecords?: { read?: boolean | null; write?: boolean | null } | null;
    lb?: { read?: boolean | null; write?: boolean | null } | null;
    logs?: { read?: boolean | null; write?: boolean | null } | null;
    organization?: { read?: boolean | null; write?: boolean | null } | null;
    ssl?: { read?: boolean | null; write?: boolean | null } | null;
    waf?: { read?: boolean | null; write?: boolean | null } | null;
    zoneSettings?: { read?: boolean | null; write?: boolean | null } | null;
    zones?: { read?: boolean | null; write?: boolean | null } | null;
  } | null;
  /** Access policy for the membership */
  policies?:
    | {
        id?: string | null;
        access?: "allow" | "deny" | (string & {}) | null;
        permissionGroups?:
          | {
              id: string;
              meta?: { key?: string | null; value?: string | null } | null;
              name?: string | null;
            }[]
          | null;
        resourceGroups?:
          | {
              id: string;
              scope: { key: string; objects: { key: string }[] }[];
              meta?: { key?: string | null; value?: string | null } | null;
              name?: string | null;
            }[]
          | null;
      }[]
    | null;
  /** List of role names the membership has for this account. */
  roles?: string[] | null;
  /** Status of this membership. */
  status?: "accepted" | "pending" | "rejected" | (string & {}) | null;
}

export const GetMembershipResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    account: Schema.optional(Schema.Union([Account, Schema.Null])),
    apiAccessEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    permissions: Schema.optional(Schema.Union([Permissions, Schema.Null])),
    policies: Schema.optional(
      Schema.Union([Schema.Array(Policy), Schema.Null]),
    ),
    roles: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["accepted", "pending", "rejected"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        account: "account",
        apiAccessEnabled: "api_access_enabled",
        permissions: "permissions",
        policies: "policies",
        roles: "roles",
        status: "status",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetMembershipResponse>;

export type GetMembershipError = DefaultErrors;

export const getMembership: API.OperationMethod<
  GetMembershipRequest,
  GetMembershipResponse,
  GetMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMembershipRequest,
  output: GetMembershipResponse,
  errors: [],
}));

export interface ListMembershipsRequest {
  page?: number;
  perPage?: number;
  account?: { name?: string };
  /** Direction to order memberships. */
  direction?: "asc" | "desc" | (string & {});
  /** Account name */
  name?: string;
  /** Field to order memberships by. */
  order?: "id" | "account.name" | "status" | (string & {});
  /** Status of this membership. */
  status?: "accepted" | "pending" | "rejected" | (string & {});
}

export const ListMembershipsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      account: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
        }),
      ).pipe(T.HttpQuery("account")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
      order: Schema.optional(
        Schema.Union([
          Schema.Literals(["id", "account.name", "status"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("order")),
      status: Schema.optional(
        Schema.Union([
          Schema.Literals(["accepted", "pending", "rejected"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("status")),
    }).pipe(T.Http({ method: "GET", path: "/memberships" })),
  ) as unknown as Schema.Codec<ListMembershipsRequest>;

export interface ListMembershipsResponse {
  result: {
    id?: string | null;
    account?: {
      id: string;
      name: string;
      type: "standard" | "enterprise" | (string & {});
      createdOn?: string | null;
      managedBy?: {
        parentOrgId?: string | null;
        parentOrgName?: string | null;
      } | null;
      settings?: {
        abuseContactEmail?: string | null;
        enforceTwofactor?: boolean | null;
      } | null;
    } | null;
    apiAccessEnabled?: boolean | null;
    permissions?: {
      analytics?: { read?: boolean | null; write?: boolean | null } | null;
      billing?: { read?: boolean | null; write?: boolean | null } | null;
      cachePurge?: { read?: boolean | null; write?: boolean | null } | null;
      dns?: { read?: boolean | null; write?: boolean | null } | null;
      dnsRecords?: { read?: boolean | null; write?: boolean | null } | null;
      lb?: { read?: boolean | null; write?: boolean | null } | null;
      logs?: { read?: boolean | null; write?: boolean | null } | null;
      organization?: { read?: boolean | null; write?: boolean | null } | null;
      ssl?: { read?: boolean | null; write?: boolean | null } | null;
      waf?: { read?: boolean | null; write?: boolean | null } | null;
      zoneSettings?: { read?: boolean | null; write?: boolean | null } | null;
      zones?: { read?: boolean | null; write?: boolean | null } | null;
    } | null;
    roles?: string[] | null;
    status?: "accepted" | "pending" | "rejected" | (string & {}) | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListMembershipsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListMembershipsResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListMembershipsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListMembershipsResponse>;

export type ListMembershipsError = DefaultErrors;

export const listMemberships: API.PaginatedOperationMethod<
  ListMembershipsRequest,
  ListMembershipsResponse,
  ListMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMembershipsRequest,
  output: ListMembershipsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface PutMembershipRequest {
  membershipId: string;
  /** Whether to accept or reject this account invitation. */
  status: "accepted" | "rejected" | (string & {});
}

export const PutMembershipRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    membershipId: Schema.String.pipe(T.HttpPath("membershipId")),
    status: Schema.Union([
      Schema.Literals(["accepted", "rejected"]),
      Schema.String,
    ]),
  }).pipe(T.Http({ method: "PUT", path: "/memberships/{membershipId}" })),
) as unknown as Schema.Codec<PutMembershipRequest>;

export interface PutMembershipResponse {
  /** Membership identifier tag. */
  id?: string | null;
  account?: {
    id: string;
    name: string;
    type: "standard" | "enterprise" | (string & {});
    createdOn?: string | null;
    managedBy?: {
      parentOrgId?: string | null;
      parentOrgName?: string | null;
    } | null;
    settings?: {
      abuseContactEmail?: string | null;
      enforceTwofactor?: boolean | null;
    } | null;
  } | null;
  /** Enterprise only. Indicates whether or not API access is enabled specifically for this user on a given account. */
  apiAccessEnabled?: boolean | null;
  /** All access permissions for the user at the account. */
  permissions?: {
    analytics?: { read?: boolean | null; write?: boolean | null } | null;
    billing?: { read?: boolean | null; write?: boolean | null } | null;
    cachePurge?: { read?: boolean | null; write?: boolean | null } | null;
    dns?: { read?: boolean | null; write?: boolean | null } | null;
    dnsRecords?: { read?: boolean | null; write?: boolean | null } | null;
    lb?: { read?: boolean | null; write?: boolean | null } | null;
    logs?: { read?: boolean | null; write?: boolean | null } | null;
    organization?: { read?: boolean | null; write?: boolean | null } | null;
    ssl?: { read?: boolean | null; write?: boolean | null } | null;
    waf?: { read?: boolean | null; write?: boolean | null } | null;
    zoneSettings?: { read?: boolean | null; write?: boolean | null } | null;
    zones?: { read?: boolean | null; write?: boolean | null } | null;
  } | null;
  /** Access policy for the membership */
  policies?:
    | {
        id?: string | null;
        access?: "allow" | "deny" | (string & {}) | null;
        permissionGroups?:
          | {
              id: string;
              meta?: { key?: string | null; value?: string | null } | null;
              name?: string | null;
            }[]
          | null;
        resourceGroups?:
          | {
              id: string;
              scope: { key: string; objects: { key: string }[] }[];
              meta?: { key?: string | null; value?: string | null } | null;
              name?: string | null;
            }[]
          | null;
      }[]
    | null;
  /** List of role names the membership has for this account. */
  roles?: string[] | null;
  /** Status of this membership. */
  status?: "accepted" | "pending" | "rejected" | (string & {}) | null;
}

export const PutMembershipResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    account: Schema.optional(Schema.Union([Account, Schema.Null])),
    apiAccessEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    permissions: Schema.optional(Schema.Union([Permissions, Schema.Null])),
    policies: Schema.optional(
      Schema.Union([Schema.Array(Policy), Schema.Null]),
    ),
    roles: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["accepted", "pending", "rejected"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        account: "account",
        apiAccessEnabled: "api_access_enabled",
        permissions: "permissions",
        policies: "policies",
        roles: "roles",
        status: "status",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutMembershipResponse>;

export type PutMembershipError = DefaultErrors;

export const putMembership: API.OperationMethod<
  PutMembershipRequest,
  PutMembershipResponse,
  PutMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutMembershipRequest,
  output: PutMembershipResponse,
  errors: [],
}));

export interface DeleteMembershipRequest {
  membershipId: string;
}

export const DeleteMembershipRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      membershipId: Schema.String.pipe(T.HttpPath("membershipId")),
    }).pipe(T.Http({ method: "DELETE", path: "/memberships/{membershipId}" })),
  ) as unknown as Schema.Codec<DeleteMembershipRequest>;

export interface DeleteMembershipResponse {
  /** Membership identifier tag. */
  id?: string | null;
}

export const DeleteMembershipResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteMembershipResponse>;

export type DeleteMembershipError = DefaultErrors;

export const deleteMembership: API.OperationMethod<
  DeleteMembershipRequest,
  DeleteMembershipResponse,
  DeleteMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMembershipRequest,
  output: DeleteMembershipResponse,
  errors: [],
}));
