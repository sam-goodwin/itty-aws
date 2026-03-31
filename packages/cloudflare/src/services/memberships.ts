/**
 * Cloudflare MEMBERSHIPS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service memberships
 */

import * as stream from "effect/Stream";
import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Shared Types
// =============================================================================

export interface Account {
  id: string;
  name: string;
  type: "standard" | "enterprise";
  createdOn?: string | null;
  managedBy?: ManagedBy | null;
  settings?: Settings | null;
}

export const Account: Schema.Schema<Account> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      type: Schema.Literals(["standard", "enterprise"]),
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
  ) as unknown as Schema.Schema<Account>;

export interface ManagedBy {
  parentOrgId?: string | null;
  parentOrgName?: string | null;
}

export const ManagedBy: Schema.Schema<ManagedBy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      parentOrgId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      parentOrgName: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        parentOrgId: "parent_org_id",
        parentOrgName: "parent_org_name",
      }),
    ),
  ) as unknown as Schema.Schema<ManagedBy>;

export interface Meta {
  key?: string | null;
  value?: string | null;
}

export const Meta: Schema.Schema<Meta> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      key: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<Meta>;

export interface Object {
  key: string;
}

export const Object: Schema.Schema<Object> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      key: Schema.String,
    }),
  ) as unknown as Schema.Schema<Object>;

export interface PermissionGrant {
  read?: boolean | null;
  write?: boolean | null;
}

export const PermissionGrant: Schema.Schema<PermissionGrant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      read: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      write: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<PermissionGrant>;

export interface PermissionGroup {
  id: string;
  meta?: Meta | null;
  name?: string | null;
}

export const PermissionGroup: Schema.Schema<PermissionGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      meta: Schema.optional(Schema.Union([Meta, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<PermissionGroup>;

export interface Permissions {
  analytics?: PermissionGrant | null;
  billing?: PermissionGrant | null;
  cachePurge?: PermissionGrant | null;
  dns?: PermissionGrant | null;
  dnsRecords?: PermissionGrant | null;
  lb?: PermissionGrant | null;
  logs?: PermissionGrant | null;
  organization?: PermissionGrant | null;
  ssl?: PermissionGrant | null;
  waf?: PermissionGrant | null;
  zoneSettings?: PermissionGrant | null;
  zones?: PermissionGrant | null;
}

export const Permissions: Schema.Schema<Permissions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      analytics: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
      billing: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
      cachePurge: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
      dns: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
      dnsRecords: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
      lb: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
      logs: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
      organization: Schema.optional(
        Schema.Union([PermissionGrant, Schema.Null]),
      ),
      ssl: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
      waf: Schema.optional(Schema.Union([PermissionGrant, Schema.Null])),
      zoneSettings: Schema.optional(
        Schema.Union([PermissionGrant, Schema.Null]),
      ),
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
  ) as unknown as Schema.Schema<Permissions>;

export interface Policy {
  id?: string | null;
  access?: "allow" | "deny" | null;
  permissionGroups?: PermissionGroup[] | null;
  resourceGroups?: ResourceGroup[] | null;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      access: Schema.optional(
        Schema.Union([Schema.Literals(["allow", "deny"]), Schema.Null]),
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
  ) as unknown as Schema.Schema<Policy>;

export interface ResourceGroup {
  id: string;
  scope: Scope[];
  meta?: Meta | null;
  name?: string | null;
}

export const ResourceGroup: Schema.Schema<ResourceGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      scope: Schema.Array(Scope),
      meta: Schema.optional(Schema.Union([Meta, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<ResourceGroup>;

export interface Scope {
  key: string;
  objects: Object[];
}

export const Scope: Schema.Schema<Scope> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      key: Schema.String,
      objects: Schema.Array(Object),
    }),
  ) as unknown as Schema.Schema<Scope>;

export interface Settings {
  abuseContactEmail?: string | null;
  enforceTwofactor?: boolean | null;
}

export const Settings: Schema.Schema<Settings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
  ) as unknown as Schema.Schema<Settings>;

// =============================================================================
// Membership
// =============================================================================

export interface GetMembershipRequest {
  membershipId: string;
}

export const GetMembershipRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  membershipId: Schema.String.pipe(T.HttpPath("membershipId")),
}).pipe(
  T.Http({ method: "GET", path: "/memberships/{membershipId}" }),
) as unknown as Schema.Schema<GetMembershipRequest>;

export interface GetMembershipResponse {
  /** Membership identifier tag. */
  id?: string | null;
  account?: Account | null;
  /** Enterprise only. Indicates whether or not API access is enabled specifically for this user on a given account. */
  apiAccessEnabled?: boolean | null;
  /** All access permissions for the user at the account. */
  permissions?: Permissions | null;
  /** Access policy for the membership */
  policies?: Policy[] | null;
  /** List of role names the membership has for this account. */
  roles?: string[] | null;
  /** Status of this membership. */
  status?: "accepted" | "pending" | "rejected" | null;
}

export const GetMembershipResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  account: Schema.optional(Schema.Union([Account, Schema.Null])),
  apiAccessEnabled: Schema.optional(
    Schema.Union([Schema.Boolean, Schema.Null]),
  ),
  permissions: Schema.optional(Schema.Union([Permissions, Schema.Null])),
  policies: Schema.optional(Schema.Union([Schema.Array(Policy), Schema.Null])),
  roles: Schema.optional(
    Schema.Union([Schema.Array(Schema.String), Schema.Null]),
  ),
  status: Schema.optional(
    Schema.Union([
      Schema.Literals(["accepted", "pending", "rejected"]),
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
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetMembershipResponse>;

export type GetMembershipError = DefaultErrors;

export const getMembership: API.OperationMethod<
  GetMembershipRequest,
  GetMembershipResponse,
  GetMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMembershipRequest,
  output: GetMembershipResponse,
  errors: [],
}));

export interface ListMembershipsRequest {}

export const ListMembershipsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "/memberships" }),
) as unknown as Schema.Schema<ListMembershipsRequest>;

export interface ListMembershipsResponse {
  result: {
    id?: string | null;
    account?: Account | null;
    apiAccessEnabled?: boolean | null;
    permissions?: Permissions | null;
    roles?: string[] | null;
    status?: "accepted" | "pending" | "rejected" | null;
  }[];
  resultInfo: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  };
}

export const ListMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.Array(
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
            Schema.Literals(["accepted", "pending", "rejected"]),
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
    ),
    resultInfo: Schema.Struct({
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
  }).pipe(
    Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
  ) as unknown as Schema.Schema<ListMembershipsResponse>;

export type ListMembershipsError = DefaultErrors;

export const listMemberships: API.PaginatedOperationMethod<
  ListMembershipsRequest,
  ListMembershipsResponse,
  ListMembershipsError,
  Credentials | HttpClient.HttpClient
> & {
  pages: (
    input: ListMembershipsRequest,
  ) => stream.Stream<
    ListMembershipsResponse,
    ListMembershipsError,
    Credentials | HttpClient.HttpClient
  >;
  items: (input: ListMembershipsRequest) => stream.Stream<
    {
      id?: string | null;
      account?: Account | null;
      apiAccessEnabled?: boolean | null;
      permissions?: Permissions | null;
      roles?: string[] | null;
      status?: "accepted" | "pending" | "rejected" | null;
    },
    ListMembershipsError,
    Credentials | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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
  status: "accepted" | "rejected";
}

export const PutMembershipRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  membershipId: Schema.String.pipe(T.HttpPath("membershipId")),
  status: Schema.Literals(["accepted", "rejected"]),
}).pipe(
  T.Http({ method: "PUT", path: "/memberships/{membershipId}" }),
) as unknown as Schema.Schema<PutMembershipRequest>;

export interface PutMembershipResponse {
  /** Membership identifier tag. */
  id?: string | null;
  account?: Account | null;
  /** Enterprise only. Indicates whether or not API access is enabled specifically for this user on a given account. */
  apiAccessEnabled?: boolean | null;
  /** All access permissions for the user at the account. */
  permissions?: Permissions | null;
  /** Access policy for the membership */
  policies?: Policy[] | null;
  /** List of role names the membership has for this account. */
  roles?: string[] | null;
  /** Status of this membership. */
  status?: "accepted" | "pending" | "rejected" | null;
}

export const PutMembershipResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  account: Schema.optional(Schema.Union([Account, Schema.Null])),
  apiAccessEnabled: Schema.optional(
    Schema.Union([Schema.Boolean, Schema.Null]),
  ),
  permissions: Schema.optional(Schema.Union([Permissions, Schema.Null])),
  policies: Schema.optional(Schema.Union([Schema.Array(Policy), Schema.Null])),
  roles: Schema.optional(
    Schema.Union([Schema.Array(Schema.String), Schema.Null]),
  ),
  status: Schema.optional(
    Schema.Union([
      Schema.Literals(["accepted", "pending", "rejected"]),
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
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<PutMembershipResponse>;

export type PutMembershipError = DefaultErrors;

export const putMembership: API.OperationMethod<
  PutMembershipRequest,
  PutMembershipResponse,
  PutMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutMembershipRequest,
  output: PutMembershipResponse,
  errors: [],
}));

export interface DeleteMembershipRequest {
  membershipId: string;
}

export const DeleteMembershipRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    membershipId: Schema.String.pipe(T.HttpPath("membershipId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "/memberships/{membershipId}" }),
  ) as unknown as Schema.Schema<DeleteMembershipRequest>;

export interface DeleteMembershipResponse {
  /** Membership identifier tag. */
  id?: string | null;
}

export const DeleteMembershipResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DeleteMembershipResponse>;

export type DeleteMembershipError = DefaultErrors;

export const deleteMembership: API.OperationMethod<
  DeleteMembershipRequest,
  DeleteMembershipResponse,
  DeleteMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteMembershipRequest,
  output: DeleteMembershipResponse,
  errors: [],
}));
