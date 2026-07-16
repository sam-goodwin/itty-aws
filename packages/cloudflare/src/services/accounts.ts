/**
 * Cloudflare ACCOUNTS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service accounts
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Errors
// =============================================================================

export class AccountCreationForbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<AccountCreationForbidden>()(
    "AccountCreationForbidden",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1002 }],
) {}

export class AccountMemberAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<AccountMemberAlreadyExists>()(
    "AccountMemberAlreadyExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 400, message: { includes: "already exists" } }],
) {}

export class AccountNameTooLong extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<AccountNameTooLong>()("AccountNameTooLong", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1001, message: { includes: "too long" } }],
) {}

export class BadRequest extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<BadRequest>()("BadRequest", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 400 }],
) {}

export class EndpointNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<EndpointNotFound>()("EndpointNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1199 }],
) {}

export class InvalidAccountName extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidAccountName>()("InvalidAccountName", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1001, message: { includes: "invalid character" } }],
) {}

export class InvalidRoute extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidRoute>()("InvalidRoute", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7003 }],
) {}

export class InvalidTokenName extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidTokenName>()("InvalidTokenName", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 400, message: { includes: "name must have a length" } }],
) {}

export class JsonDecodeFailure extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<JsonDecodeFailure>()("JsonDecodeFailure", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1198 }],
) {}

export class MemberNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MemberNotFound>()("MemberNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1003 }],
) {}

export class MethodNotAllowed extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MethodNotAllowed>()("MethodNotAllowed", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7001 }, { code: 10000 }, { code: 10405 }],
) {}

export class MissingAuthenticationToken extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MissingAuthenticationToken>()(
    "MissingAuthenticationToken",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1001 }],
) {}

export class MissingName extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MissingName>()("MissingName", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1001 }],
) {}

export class PermissionGroupNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<PermissionGroupNotFound>()(
    "PermissionGroupNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1001, message: { includes: "Permission group" } }],
) {}

export class TokenManagedByCloudflare extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TokenManagedByCloudflare>()(
    "TokenManagedByCloudflare",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1001 }],
) {}

export class TokenNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TokenNotFound>()("TokenNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1003 }],
) {}

export class UpdateAccountTypeNotSupported extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<UpdateAccountTypeNotSupported>()(
    "UpdateAccountTypeNotSupported",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1001, message: { includes: "account type is not supported" } }],
) {}

export class ValidationError extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ValidationError>()("ValidationError", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1001 }],
) {}

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

interface Settings2 {
  /** Sets an abuse contact email to notify for abuse reports. */
  abuseContactEmail?: string | null;
  /** Indicates whether membership in this account requires that Two-Factor Authentication is enabled */
  enforceTwofactor?: boolean | null;
}
const Settings2 = /*@__PURE__*/ Schema.suspend(() =>
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
) as unknown as Schema.Codec<Settings2>;

interface ListAccountsResponseResult {
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
const ListAccountsResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    type: Schema.Union([
      Schema.Literals(["standard", "enterprise"]),
      Schema.String,
    ]),
    createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    managedBy: Schema.optional(Schema.Union([ManagedBy, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings2, Schema.Null])),
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
) as unknown as Schema.Codec<ListAccountsResponseResult>;

interface ListAccountsResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListAccountsResponseResultInfo =
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
  ) as unknown as Schema.Codec<ListAccountsResponseResultInfo>;

interface Unit {
  /** Tenant unit ID */
  id?: string | null;
}
const Unit = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Unit>;

interface Account {
  /** A unique identifier for the account. */
  id?: string | null;
  /** A string that identifies the account name. */
  name?: string | null;
}
const Account = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Account>;

interface Action {
  /** A short description of the action performed. */
  description?: string | null;
  /** The result of the action, indicating success or failure. */
  result?: string | null;
  /** A timestamp indicating when the action was logged. */
  time?: string | null;
  /** A short string that describes the action that was performed. */
  type?: string | null;
}
const Action = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    result: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    time: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Action>;

interface Actor {
  /** The ID of the actor who performed the action. If a user performed the action, this will be their User ID. */
  id?: string | null;
  context?:
    | "api_key"
    | "api_token"
    | "dash"
    | "oauth"
    | "origin_ca_key"
    | (string & {})
    | null;
  /** The email of the actor who performed the action. */
  email?: string | null;
  /** The IP address of the request that performed the action. */
  ipAddress?: string | null;
  /** The API token ID when the actor context is an api_token or oauth. */
  tokenId?: string | null;
  /** The API token name when the actor context is an api_token or oauth. */
  tokenName?: string | null;
  /** The type of actor. */
  type?:
    | "account"
    | "cloudflare_admin"
    | "system"
    | "user"
    | (string & {})
    | null;
}
const Actor = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    context: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "api_key",
            "api_token",
            "dash",
            "oauth",
            "origin_ca_key",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    ipAddress: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    tokenId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    tokenName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["account", "cloudflare_admin", "system", "user"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      context: "context",
      email: "email",
      ipAddress: "ip_address",
      tokenId: "token_id",
      tokenName: "token_name",
      type: "type",
    }),
  ),
) as unknown as Schema.Codec<Actor>;

interface Raw {
  /** The Cloudflare Ray ID for the request. */
  cfRayId?: string | null;
  /** The HTTP method of the request. */
  method?: string | null;
  /** The HTTP response status code returned by the API. */
  statusCode?: number | null;
  /** The URI of the request. */
  uri?: string | null;
  /** The client's user agent string sent with the request. */
  userAgent?: string | null;
}
const Raw = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cfRayId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    method: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    statusCode: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    uri: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    userAgent: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      cfRayId: "cf_ray_id",
      method: "method",
      statusCode: "status_code",
      uri: "uri",
      userAgent: "user_agent",
    }),
  ),
) as unknown as Schema.Codec<Raw>;

interface Resource {
  /** The unique identifier for the affected resource. */
  id?: string | null;
  /** The Cloudflare product associated with the resource. */
  product?: string | null;
  request?: unknown | null;
  response?: unknown | null;
  /** The scope of the resource. */
  scope?: unknown | null;
  /** The type of the resource. */
  type?: string | null;
}
const Resource = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    product: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    request: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    response: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    scope: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Resource>;

interface ListLogAuditsResponseResult {
  /** A unique identifier for the audit log entry. */
  id?: string | null;
  /** Contains account related information. */
  account?: { id?: string | null; name?: string | null } | null;
  /** Provides information about the action performed. */
  action?: {
    description?: string | null;
    result?: string | null;
    time?: string | null;
    type?: string | null;
  } | null;
  /** Provides details about the actor who performed the action. */
  actor?: {
    id?: string | null;
    context?:
      | "api_key"
      | "api_token"
      | "dash"
      | "oauth"
      | "origin_ca_key"
      | (string & {})
      | null;
    email?: string | null;
    ipAddress?: string | null;
    tokenId?: string | null;
    tokenName?: string | null;
    type?:
      | "account"
      | "cloudflare_admin"
      | "system"
      | "user"
      | (string & {})
      | null;
  } | null;
  /** Provides raw information about the request and response. */
  raw?: {
    cfRayId?: string | null;
    method?: string | null;
    statusCode?: number | null;
    uri?: string | null;
    userAgent?: string | null;
  } | null;
  /** Provides details about the affected resource. */
  resource?: {
    id?: string | null;
    product?: string | null;
    request?: unknown | null;
    response?: unknown | null;
    scope?: unknown | null;
    type?: string | null;
  } | null;
  /** Provides details about the zone affected by the action. */
  zone?: { id?: string | null; name?: string | null } | null;
}
const ListLogAuditsResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    account: Schema.optional(Schema.Union([Account, Schema.Null])),
    action: Schema.optional(Schema.Union([Action, Schema.Null])),
    actor: Schema.optional(Schema.Union([Actor, Schema.Null])),
    raw: Schema.optional(Schema.Union([Raw, Schema.Null])),
    resource: Schema.optional(Schema.Union([Resource, Schema.Null])),
    zone: Schema.optional(Schema.Union([Account, Schema.Null])),
  }),
) as unknown as Schema.Codec<ListLogAuditsResponseResult>;

interface ListLogAuditsResponseResultInfoCursors {
  after?: string | null;
}
const ListLogAuditsResponseResultInfoCursors =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      after: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<ListLogAuditsResponseResultInfoCursors>;

interface ListLogAuditsResponseResultInfo {
  cursors?: { after?: string | null } | null;
}
const ListLogAuditsResponseResultInfo =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      cursors: Schema.optional(
        Schema.Union([ListLogAuditsResponseResultInfoCursors, Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Codec<ListLogAuditsResponseResultInfo>;

interface PolicyPermissionGroup {
  /** Identifier of the group. */
  id: string;
}
const PolicyPermissionGroup = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
  }),
) as unknown as Schema.Codec<PolicyPermissionGroup>;

interface Policy {
  /** Policy identifier. */
  id?: string | null;
  /** Allow or deny operations against the resources. */
  access?: "allow" | "deny" | (string & {}) | null;
  /** A set of permission groups that are specified to the policy. */
  permissionGroups?: { id: string }[] | null;
  /** A list of resource groups that the policy applies to. */
  resourceGroups?: { id: string }[] | null;
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
      Schema.Union([Schema.Array(PolicyPermissionGroup), Schema.Null]),
    ),
    resourceGroups: Schema.optional(
      Schema.Union([Schema.Array(PolicyPermissionGroup), Schema.Null]),
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

interface Role {
  /** Role identifier tag. */
  id: string;
  /** Description of role's permissions. */
  description: string;
  /** Role name. */
  name: string;
  permissions: {
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
  };
}
const Role = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    description: Schema.String,
    name: Schema.String,
    permissions: Permissions,
  }),
) as unknown as Schema.Codec<Role>;

interface User {
  /** The contact email address of the user. */
  email: string;
  /** Identifier */
  id?: string | null;
  /** User's first name */
  firstName?: string | null;
  /** User's last name */
  lastName?: string | null;
  /** Indicates whether two-factor authentication is enabled for the user account. Does not apply to API authentication. */
  twoFactorAuthenticationEnabled?: boolean | null;
}
const User = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    email: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    firstName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    lastName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    twoFactorAuthenticationEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      email: "email",
      id: "id",
      firstName: "first_name",
      lastName: "last_name",
      twoFactorAuthenticationEnabled: "two_factor_authentication_enabled",
    }),
  ),
) as unknown as Schema.Codec<User>;

interface Member {
  /** Membership identifier tag. */
  id?: string | null;
  /** The contact email address of the user. */
  email?: string | null;
  /** Access policy for the membership */
  policies?:
    | {
        id?: string | null;
        access?: "allow" | "deny" | (string & {}) | null;
        permissionGroups?: { id: string }[] | null;
        resourceGroups?: { id: string }[] | null;
      }[]
    | null;
  /** Roles assigned to this Member. */
  roles?:
    | {
        id: string;
        description: string;
        name: string;
        permissions: {
          analytics?: { read?: boolean | null; write?: boolean | null } | null;
          billing?: { read?: boolean | null; write?: boolean | null } | null;
          cachePurge?: { read?: boolean | null; write?: boolean | null } | null;
          dns?: { read?: boolean | null; write?: boolean | null } | null;
          dnsRecords?: { read?: boolean | null; write?: boolean | null } | null;
          lb?: { read?: boolean | null; write?: boolean | null } | null;
          logs?: { read?: boolean | null; write?: boolean | null } | null;
          organization?: {
            read?: boolean | null;
            write?: boolean | null;
          } | null;
          ssl?: { read?: boolean | null; write?: boolean | null } | null;
          waf?: { read?: boolean | null; write?: boolean | null } | null;
          zoneSettings?: {
            read?: boolean | null;
            write?: boolean | null;
          } | null;
          zones?: { read?: boolean | null; write?: boolean | null } | null;
        };
      }[]
    | null;
  /** A member's status in the account. */
  status?: "accepted" | "pending" | (string & {}) | null;
  /** Details of the user associated to the membership. */
  user?: {
    email: string;
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    twoFactorAuthenticationEnabled?: boolean | null;
  } | null;
}
const Member = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    policies: Schema.optional(
      Schema.Union([Schema.Array(Policy), Schema.Null]),
    ),
    roles: Schema.optional(Schema.Union([Schema.Array(Role), Schema.Null])),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["accepted", "pending"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    user: Schema.optional(Schema.Union([User, Schema.Null])),
  }),
) as unknown as Schema.Codec<Member>;

interface Policy2 {
  /** Allow or deny operations against the resources. */
  access: "allow" | "deny" | (string & {});
  /** A set of permission groups that are specified to the policy. */
  permissionGroups: { id: string }[];
  /** A list of resource groups that the policy applies to. */
  resourceGroups: { id: string }[];
}
const Policy2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    access: Schema.Union([Schema.Literals(["allow", "deny"]), Schema.String]),
    permissionGroups: Schema.Array(PolicyPermissionGroup),
    resourceGroups: Schema.Array(PolicyPermissionGroup),
  }).pipe(
    Schema.encodeKeys({
      access: "access",
      permissionGroups: "permission_groups",
      resourceGroups: "resource_groups",
    }),
  ),
) as unknown as Schema.Codec<Policy2>;

interface RatePlan {
  /** The ID of the rate plan. */
  id?:
    | "free"
    | "lite"
    | "pro"
    | "pro_plus"
    | "business"
    | "enterprise"
    | "partners_free"
    | "partners_pro"
    | "partners_business"
    | "partners_enterprise"
    | (string & {})
    | null;
  /** The currency applied to the rate plan subscription. */
  currency?: string | null;
  /** Whether this rate plan is managed externally from Cloudflare. */
  externallyManaged?: boolean | null;
  /** Whether a rate plan is enterprise-based (or newly adopted term contract). */
  isContract?: boolean | null;
  /** The full name of the rate plan. */
  publicName?: string | null;
  /** The scope that this rate plan applies to. */
  scope?: string | null;
  /** The list of sets this rate plan applies to. Returns array of strings. */
  sets?: string[] | null;
}
const RatePlan = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "free",
            "lite",
            "pro",
            "pro_plus",
            "business",
            "enterprise",
            "partners_free",
            "partners_pro",
            "partners_business",
            "partners_enterprise",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    currency: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    externallyManaged: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    isContract: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    publicName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    scope: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    sets: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      currency: "currency",
      externallyManaged: "externally_managed",
      isContract: "is_contract",
      publicName: "public_name",
      scope: "scope",
      sets: "sets",
    }),
  ),
) as unknown as Schema.Codec<RatePlan>;

interface Subscription {
  /** Subscription identifier tag. */
  id?: string | null;
  /** The monetary unit in which pricing information is displayed. */
  currency?: string | null;
  /** The end of the current period and also when the next billing is due. */
  currentPeriodEnd?: string | null;
  /** When the current billing period started. May match initial_period_start if this is the first period. */
  currentPeriodStart?: string | null;
  /** How often the subscription is renewed automatically. */
  frequency?:
    | "weekly"
    | "monthly"
    | "quarterly"
    | "yearly"
    | (string & {})
    | null;
  /** The price of the subscription that will be billed, in US dollars. */
  price?: number | null;
  /** The rate plan applied to the subscription. */
  ratePlan?: {
    id?:
      | "free"
      | "lite"
      | "pro"
      | "pro_plus"
      | "business"
      | "enterprise"
      | "partners_free"
      | "partners_pro"
      | "partners_business"
      | "partners_enterprise"
      | (string & {})
      | null;
    currency?: string | null;
    externallyManaged?: boolean | null;
    isContract?: boolean | null;
    publicName?: string | null;
    scope?: string | null;
    sets?: string[] | null;
  } | null;
  /** The state that the subscription is in. */
  state?:
    | "Trial"
    | "Provisioned"
    | "Paid"
    | "AwaitingPayment"
    | "Cancelled"
    | "Failed"
    | "Expired"
    | (string & {})
    | null;
}
const Subscription = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    currency: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    currentPeriodEnd: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    currentPeriodStart: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    frequency: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["weekly", "monthly", "quarterly", "yearly"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    price: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    ratePlan: Schema.optional(Schema.Union([RatePlan, Schema.Null])),
    state: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "Trial",
            "Provisioned",
            "Paid",
            "AwaitingPayment",
            "Cancelled",
            "Failed",
            "Expired",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      currency: "currency",
      currentPeriodEnd: "current_period_end",
      currentPeriodStart: "current_period_start",
      frequency: "frequency",
      price: "price",
      ratePlan: "rate_plan",
      state: "state",
    }),
  ),
) as unknown as Schema.Codec<Subscription>;

interface ConditionRequestIP {
  /** List of IPv4/IPv6 CIDR addresses. */
  in?: string[] | null;
  /** List of IPv4/IPv6 CIDR addresses. */
  notIn?: string[] | null;
}
const ConditionRequestIP = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    in: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    notIn: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ in: "in", notIn: "not_in" })),
) as unknown as Schema.Codec<ConditionRequestIP>;

interface Condition {
  /** Client IP restrictions. */
  requestIp?: { in?: string[] | null; notIn?: string[] | null } | null;
}
const Condition = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    requestIp: Schema.optional(Schema.Union([ConditionRequestIP, Schema.Null])),
  }).pipe(Schema.encodeKeys({ requestIp: "request_ip" })),
) as unknown as Schema.Codec<Condition>;

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

interface TokenPolicy {
  /** Policy identifier. */
  id: string;
  /** Allow or deny operations against the resources. */
  effect: "allow" | "deny" | (string & {});
  /** A set of permission groups that are specified to the policy. */
  permissionGroups: {
    id: string;
    meta?: { key?: string | null; value?: string | null } | null;
    name?: string | null;
  }[];
  /** A list of resource names that the policy applies to. */
  resources: Record<string, unknown>;
}
const TokenPolicy = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    effect: Schema.Union([Schema.Literals(["allow", "deny"]), Schema.String]),
    permissionGroups: Schema.Array(PermissionGroup),
    resources: Schema.Record(Schema.String, Schema.Unknown),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      effect: "effect",
      permissionGroups: "permission_groups",
      resources: "resources",
    }),
  ),
) as unknown as Schema.Codec<TokenPolicy>;

interface Token {
  /** Token identifier tag. */
  id?: string | null;
  condition?: {
    requestIp?: { in?: string[] | null; notIn?: string[] | null } | null;
  } | null;
  /** The expiration time on or after which the JWT MUST NOT be accepted for processing. */
  expiresOn?: string | null;
  /** The time on which the token was created. */
  issuedOn?: string | null;
  /** Last time the token was used. */
  lastUsedOn?: string | null;
  /** Last time the token was modified. */
  modifiedOn?: string | null;
  /** Token name. */
  name?: string | null;
  /** The time before which the token MUST NOT be accepted for processing. */
  notBefore?: string | null;
  /** List of access policies assigned to the token. */
  policies?:
    | {
        id: string;
        effect: "allow" | "deny" | (string & {});
        permissionGroups: {
          id: string;
          meta?: { key?: string | null; value?: string | null } | null;
          name?: string | null;
        }[];
        resources: Record<string, unknown>;
      }[]
    | null;
  /** Status of the token. */
  status?: "active" | "disabled" | "expired" | (string & {}) | null;
}
const Token = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    condition: Schema.optional(Schema.Union([Condition, Schema.Null])),
    expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    issuedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    lastUsedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    notBefore: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    policies: Schema.optional(
      Schema.Union([Schema.Array(TokenPolicy), Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["active", "disabled", "expired"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      condition: "condition",
      expiresOn: "expires_on",
      issuedOn: "issued_on",
      lastUsedOn: "last_used_on",
      modifiedOn: "modified_on",
      name: "name",
      notBefore: "not_before",
      policies: "policies",
      status: "status",
    }),
  ),
) as unknown as Schema.Codec<Token>;

interface PermissionGroup2 {
  /** Identifier of the permission group. */
  id: string;
  /** Attributes associated to the permission group. */
  meta?: { key?: string | null; value?: string | null } | null;
}
const PermissionGroup2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    meta: Schema.optional(Schema.Union([Meta, Schema.Null])),
  }),
) as unknown as Schema.Codec<PermissionGroup2>;

interface TokenPolicyParam {
  /** Allow or deny operations against the resources. */
  effect: "allow" | "deny" | (string & {});
  /** A set of permission groups that are specified to the policy. */
  permissionGroups: {
    id: string;
    meta?: { key?: string | null; value?: string | null } | null;
  }[];
  /** A list of resource names that the policy applies to. */
  resources: Record<string, unknown>;
}
const TokenPolicyParam = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    effect: Schema.Union([Schema.Literals(["allow", "deny"]), Schema.String]),
    permissionGroups: Schema.Array(PermissionGroup2),
    resources: Schema.Record(Schema.String, Schema.Unknown),
  }).pipe(
    Schema.encodeKeys({
      effect: "effect",
      permissionGroups: "permission_groups",
      resources: "resources",
    }),
  ),
) as unknown as Schema.Codec<TokenPolicyParam>;

interface PermissionGroupGetResponseItem {
  /** Public ID. */
  id?: string | null;
  /** Product category that this permission group belongs to. */
  category?:
    | "developer_platform"
    | "ai_and_machine_learning"
    | "dns_and_zones"
    | "app_security"
    | "rules_and_configuration"
    | "cloudflare_one_and_zero_trust"
    | "analytics_and_logs"
    | "network_services"
    | "media"
    | "email_and_messaging"
    | "cache_and_performance"
    | "account_and_billing"
    | "other"
    | (string & {})
    | null;
  /** Permission Group Name */
  name?: string | null;
  /** Resources to which the Permission Group is scoped */
  scopes?:
    | (
        | "com.cloudflare.api.account"
        | "com.cloudflare.api.account.zone"
        | "com.cloudflare.api.user"
        | "com.cloudflare.edge.r2.bucket"
        | (string & {})
      )[]
    | null;
}
const PermissionGroupGetResponseItem =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      category: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "developer_platform",
              "ai_and_machine_learning",
              "dns_and_zones",
              "app_security",
              "rules_and_configuration",
              "cloudflare_one_and_zero_trust",
              "analytics_and_logs",
              "network_services",
              "media",
              "email_and_messaging",
              "cache_and_performance",
              "account_and_billing",
              "other",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      scopes: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "com.cloudflare.api.account",
                "com.cloudflare.api.account.zone",
                "com.cloudflare.api.user",
                "com.cloudflare.edge.r2.bucket",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Codec<PermissionGroupGetResponseItem>;

// =============================================================================
// Account
// =============================================================================

export interface GetAccountRequest {
  /** Account identifier tag. */
  accountId: string;
}

export const GetAccountRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(T.Http({ method: "GET", path: "/accounts/{account_id}" })),
) as unknown as Schema.Codec<GetAccountRequest>;

export interface GetAccountResponse {
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

export const GetAccountResponse = /*@__PURE__*/ Schema.suspend(() =>
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
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        name: "name",
        type: "type",
        createdOn: "created_on",
        managedBy: "managed_by",
        settings: "settings",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetAccountResponse>;

export type GetAccountError = DefaultErrors | InvalidRoute;

export const getAccount: API.OperationMethod<
  GetAccountRequest,
  GetAccountResponse,
  GetAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccountRequest,
  output: GetAccountResponse,
  errors: [InvalidRoute],
}));

export interface ListAccountsRequest {
  page?: number;
  perPage?: number;
  /** Direction to order results. */
  direction?: "asc" | "desc" | (string & {});
  /** Name of the account. */
  name?: string;
}

export const ListAccountsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    direction: Schema.optional(
      Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
    ).pipe(T.HttpQuery("direction")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
  }).pipe(T.Http({ method: "GET", path: "/accounts" })),
) as unknown as Schema.Codec<ListAccountsRequest>;

export interface ListAccountsResponse {
  result: {
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
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListAccountsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListAccountsResponseResult),
    resultInfo: Schema.optional(
      Schema.Union([ListAccountsResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListAccountsResponse>;

export type ListAccountsError = DefaultErrors;

export const listAccounts: API.PaginatedOperationMethod<
  ListAccountsRequest,
  ListAccountsResponse,
  ListAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsRequest,
  output: ListAccountsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateAccountRequest {
  /** Account name */
  name: string;
  type?: "standard" | "enterprise" | (string & {});
  /** information related to the tenant unit, and optionally, an id of the unit to create the account on. see https://developers.cloudflare.com/tenant/how-to/manage-accounts/ */
  unit?: { id?: string };
}

export const CreateAccountRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    type: Schema.optional(
      Schema.Union([
        Schema.Literals(["standard", "enterprise"]),
        Schema.String,
      ]),
    ),
    unit: Schema.optional(Unit),
  }).pipe(T.Http({ method: "POST", path: "/accounts" })),
) as unknown as Schema.Codec<CreateAccountRequest>;

export interface CreateAccountResponse {
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

export const CreateAccountResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    type: Schema.Union([
      Schema.Literals(["standard", "enterprise"]),
      Schema.String,
    ]),
    createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    managedBy: Schema.optional(Schema.Union([ManagedBy, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings2, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        name: "name",
        type: "type",
        createdOn: "created_on",
        managedBy: "managed_by",
        settings: "settings",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateAccountResponse>;

export type CreateAccountError =
  | DefaultErrors
  | AccountCreationForbidden
  | MissingName;

export const createAccount: API.OperationMethod<
  CreateAccountRequest,
  CreateAccountResponse,
  CreateAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccountRequest,
  output: CreateAccountResponse,
  errors: [AccountCreationForbidden, MissingName],
}));

export interface UpdateAccountRequest {
  /** Path param: Account identifier tag. */
  accountId: string;
  /** Body param: Identifier */
  id: string;
  /** Body param: Account name */
  name: string;
  /** Body param */
  type?: "standard" | "enterprise" | (string & {});
  /** Body param: Parent container details */
  managedBy?: unknown;
  /** Body param: Account settings */
  settings?: { abuseContactEmail?: string; enforceTwofactor?: boolean };
}

export const UpdateAccountRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    id: Schema.String,
    name: Schema.String,
    type: Schema.optional(
      Schema.Union([
        Schema.Literals(["standard", "enterprise"]),
        Schema.String,
      ]),
    ),
    managedBy: Schema.optional(Schema.Unknown),
    settings: Schema.optional(Settings2),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      name: "name",
      type: "type",
      managedBy: "managed_by",
      settings: "settings",
    }),
    T.Http({ method: "PUT", path: "/accounts/{account_id}" }),
  ),
) as unknown as Schema.Codec<UpdateAccountRequest>;

export interface UpdateAccountResponse {
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

export const UpdateAccountResponse = /*@__PURE__*/ Schema.suspend(() =>
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
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        name: "name",
        type: "type",
        createdOn: "created_on",
        managedBy: "managed_by",
        settings: "settings",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdateAccountResponse>;

export type UpdateAccountError =
  | DefaultErrors
  | InvalidAccountName
  | AccountNameTooLong
  | UpdateAccountTypeNotSupported
  | InvalidRoute
  | MethodNotAllowed;

export const updateAccount: API.OperationMethod<
  UpdateAccountRequest,
  UpdateAccountResponse,
  UpdateAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAccountRequest,
  output: UpdateAccountResponse,
  errors: [
    InvalidAccountName,
    AccountNameTooLong,
    UpdateAccountTypeNotSupported,
    InvalidRoute,
    MethodNotAllowed,
  ],
}));

export interface DeleteAccountRequest {
  /** The account ID of the account to be deleted */
  accountId: string;
}

export const DeleteAccountRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(T.Http({ method: "DELETE", path: "/accounts/{account_id}" })),
) as unknown as Schema.Codec<DeleteAccountRequest>;

export interface DeleteAccountResponse {
  /** Identifier */
  id: string;
}

export const DeleteAccountResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteAccountResponse>;

export type DeleteAccountError =
  | DefaultErrors
  | InvalidRoute
  | MethodNotAllowed;

export const deleteAccount: API.OperationMethod<
  DeleteAccountRequest,
  DeleteAccountResponse,
  DeleteAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccountRequest,
  output: DeleteAccountResponse,
  errors: [InvalidRoute, MethodNotAllowed],
}));

// =============================================================================
// LogAudit
// =============================================================================

export interface ListLogAuditsRequest {
  /** Path param: The unique id that identifies the account. */
  accountId: string;
  cursor?: string;
  /** Query param: Limits the returned results to logs older than the specified date. This can be a date string 2019-04-30 (interpreted in UTC) or an absolute timestamp that conforms to RFC3339. */
  before: string;
  /** Query param: Limits the returned results to logs newer than the specified date. This can be a date string 2019-04-30 (interpreted in UTC) or an absolute timestamp that conforms to RFC3339. */
  since: string;
  /** Query param */
  id?: { not?: string[] };
  /** Query param */
  accountName?: { not?: string[] };
  /** Query param */
  actionResult?: { not?: ("success" | "failure" | (string & {}))[] };
  /** Query param */
  actionType?: {
    not?: ("create" | "delete" | "view" | "update" | (string & {}))[];
  };
  /** Query param */
  actorContext?: {
    not?: (
      | "api_key"
      | "api_token"
      | "dash"
      | "oauth"
      | "origin_ca_key"
      | (string & {})
    )[];
  };
  /** Query param */
  actorEmail?: { not?: string[] };
  /** Query param */
  actorId?: { not?: string[] };
  /** Query param */
  actorIpAddress?: { not?: string[] };
  /** Query param */
  actorTokenId?: { not?: string[] };
  /** Query param */
  actorTokenName?: { not?: string[] };
  /** Query param */
  actorType?: {
    not?: (
      | "account"
      | "cloudflare_admin"
      | "system"
      | "user"
      | (string & {})
    )[];
  };
  /** Query param */
  auditLogId?: { not?: string[] };
  /** Query param: Sets sorting order. */
  direction?: "desc" | "asc" | (string & {});
  /** Query param: The number limits the objects to return. The cursor attribute may be used to iterate over the next batch of objects if there are more than the limit. */
  limit?: number;
  /** Query param */
  rawCfRayId?: { not?: string[] };
  /** Query param */
  rawMethod?: { not?: string[] };
  /** Query param */
  rawStatusCode?: { not?: number[] };
  /** Query param */
  rawUri?: { not?: string[] };
  /** Query param */
  resourceId?: { not?: string[] };
  /** Query param */
  resourceProduct?: { not?: string[] };
  /** Query param */
  resourceScope?: {
    not?: ("accounts" | "user" | "zones" | "memberships" | (string & {}))[];
  };
  /** Query param */
  resourceType?: { not?: string[] };
  /** Query param */
  zoneId?: { not?: string[] };
  /** Query param */
  zoneName?: { not?: string[] };
}

export const ListLogAuditsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
    before: Schema.String.pipe(T.HttpQuery("before")),
    since: Schema.String.pipe(T.HttpQuery("since")),
    id: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("id")),
    accountName: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("account_name")),
    actionResult: Schema.optional(
      Schema.Struct({
        not: Schema.optional(
          Schema.Array(
            Schema.Union([
              Schema.Literals(["success", "failure"]),
              Schema.String,
            ]),
          ),
        ),
      }),
    ).pipe(T.HttpQuery("action_result")),
    actionType: Schema.optional(
      Schema.Struct({
        not: Schema.optional(
          Schema.Array(
            Schema.Union([
              Schema.Literals(["create", "delete", "view", "update"]),
              Schema.String,
            ]),
          ),
        ),
      }),
    ).pipe(T.HttpQuery("action_type")),
    actorContext: Schema.optional(
      Schema.Struct({
        not: Schema.optional(
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "api_key",
                "api_token",
                "dash",
                "oauth",
                "origin_ca_key",
              ]),
              Schema.String,
            ]),
          ),
        ),
      }),
    ).pipe(T.HttpQuery("actor_context")),
    actorEmail: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("actor_email")),
    actorId: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("actor_id")),
    actorIpAddress: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("actor_ip_address")),
    actorTokenId: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("actor_token_id")),
    actorTokenName: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("actor_token_name")),
    actorType: Schema.optional(
      Schema.Struct({
        not: Schema.optional(
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "account",
                "cloudflare_admin",
                "system",
                "user",
              ]),
              Schema.String,
            ]),
          ),
        ),
      }),
    ).pipe(T.HttpQuery("actor_type")),
    auditLogId: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("audit_log_id")),
    direction: Schema.optional(
      Schema.Union([Schema.Literals(["desc", "asc"]), Schema.String]),
    ).pipe(T.HttpQuery("direction")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    rawCfRayId: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("raw_cf_ray_id")),
    rawMethod: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("raw_method")),
    rawStatusCode: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.Number)),
      }),
    ).pipe(T.HttpQuery("raw_status_code")),
    rawUri: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("raw_uri")),
    resourceId: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("resource_id")),
    resourceProduct: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("resource_product")),
    resourceScope: Schema.optional(
      Schema.Struct({
        not: Schema.optional(
          Schema.Array(
            Schema.Union([
              Schema.Literals(["accounts", "user", "zones", "memberships"]),
              Schema.String,
            ]),
          ),
        ),
      }),
    ).pipe(T.HttpQuery("resource_scope")),
    resourceType: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("resource_type")),
    zoneId: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("zone_id")),
    zoneName: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("zone_name")),
  }).pipe(T.Http({ method: "GET", path: "/accounts/{account_id}/logs/audit" })),
) as unknown as Schema.Codec<ListLogAuditsRequest>;

export interface ListLogAuditsResponse {
  result: {
    id?: string | null;
    account?: { id?: string | null; name?: string | null } | null;
    action?: {
      description?: string | null;
      result?: string | null;
      time?: string | null;
      type?: string | null;
    } | null;
    actor?: {
      id?: string | null;
      context?:
        | "api_key"
        | "api_token"
        | "dash"
        | "oauth"
        | "origin_ca_key"
        | (string & {})
        | null;
      email?: string | null;
      ipAddress?: string | null;
      tokenId?: string | null;
      tokenName?: string | null;
      type?:
        | "account"
        | "cloudflare_admin"
        | "system"
        | "user"
        | (string & {})
        | null;
    } | null;
    raw?: {
      cfRayId?: string | null;
      method?: string | null;
      statusCode?: number | null;
      uri?: string | null;
      userAgent?: string | null;
    } | null;
    resource?: {
      id?: string | null;
      product?: string | null;
      request?: unknown | null;
      response?: unknown | null;
      scope?: unknown | null;
      type?: string | null;
    } | null;
    zone?: { id?: string | null; name?: string | null } | null;
  }[];
  resultInfo?: { cursors?: { after?: string | null } | null } | null;
}

export const ListLogAuditsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListLogAuditsResponseResult),
    resultInfo: Schema.optional(
      Schema.Union([ListLogAuditsResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListLogAuditsResponse>;

export type ListLogAuditsError = DefaultErrors;

export const listLogAudits: API.PaginatedOperationMethod<
  ListLogAuditsRequest,
  ListLogAuditsResponse,
  ListLogAuditsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLogAuditsRequest,
  output: ListLogAuditsResponse,
  errors: [],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursors.after",
    items: "result",
  } as const,
}));

// =============================================================================
// Member
// =============================================================================

export interface GetMemberRequest {
  memberId: string;
  /** Account identifier tag. */
  accountId: string;
}

export const GetMemberRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    memberId: Schema.String.pipe(T.HttpPath("memberId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/members/{memberId}",
    }),
  ),
) as unknown as Schema.Codec<GetMemberRequest>;

export interface GetMemberResponse {
  /** Membership identifier tag. */
  id?: string | null;
  /** The contact email address of the user. */
  email?: string | null;
  /** Access policy for the membership */
  policies?:
    | {
        id?: string | null;
        access?: "allow" | "deny" | (string & {}) | null;
        permissionGroups?: { id: string }[] | null;
        resourceGroups?: { id: string }[] | null;
      }[]
    | null;
  /** Roles assigned to this Member. */
  roles?:
    | {
        id: string;
        description: string;
        name: string;
        permissions: {
          analytics?: { read?: boolean | null; write?: boolean | null } | null;
          billing?: { read?: boolean | null; write?: boolean | null } | null;
          cachePurge?: { read?: boolean | null; write?: boolean | null } | null;
          dns?: { read?: boolean | null; write?: boolean | null } | null;
          dnsRecords?: { read?: boolean | null; write?: boolean | null } | null;
          lb?: { read?: boolean | null; write?: boolean | null } | null;
          logs?: { read?: boolean | null; write?: boolean | null } | null;
          organization?: {
            read?: boolean | null;
            write?: boolean | null;
          } | null;
          ssl?: { read?: boolean | null; write?: boolean | null } | null;
          waf?: { read?: boolean | null; write?: boolean | null } | null;
          zoneSettings?: {
            read?: boolean | null;
            write?: boolean | null;
          } | null;
          zones?: { read?: boolean | null; write?: boolean | null } | null;
        };
      }[]
    | null;
  /** A member's status in the account. */
  status?: "accepted" | "pending" | (string & {}) | null;
  /** Details of the user associated to the membership. */
  user?: {
    email: string;
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    twoFactorAuthenticationEnabled?: boolean | null;
  } | null;
}

export const GetMemberResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    policies: Schema.optional(
      Schema.Union([Schema.Array(Policy), Schema.Null]),
    ),
    roles: Schema.optional(Schema.Union([Schema.Array(Role), Schema.Null])),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["accepted", "pending"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    user: Schema.optional(Schema.Union([User, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetMemberResponse>;

export type GetMemberError = DefaultErrors | MemberNotFound | InvalidRoute;

export const getMember: API.OperationMethod<
  GetMemberRequest,
  GetMemberResponse,
  GetMemberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMemberRequest,
  output: GetMemberResponse,
  errors: [MemberNotFound, InvalidRoute],
}));

export interface ListMembersRequest {
  /** Path param: Account identifier tag. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Direction to order results. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Field to order results by. */
  order?:
    | "user.first_name"
    | "user.last_name"
    | "user.email"
    | "status"
    | (string & {});
  /** Query param: A member's status in the account. */
  status?: "accepted" | "pending" | "rejected" | (string & {});
}

export const ListMembersRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    direction: Schema.optional(
      Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
    ).pipe(T.HttpQuery("direction")),
    order: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "user.first_name",
          "user.last_name",
          "user.email",
          "status",
        ]),
        Schema.String,
      ]),
    ).pipe(T.HttpQuery("order")),
    status: Schema.optional(
      Schema.Union([
        Schema.Literals(["accepted", "pending", "rejected"]),
        Schema.String,
      ]),
    ).pipe(T.HttpQuery("status")),
  }).pipe(T.Http({ method: "GET", path: "/accounts/{account_id}/members" })),
) as unknown as Schema.Codec<ListMembersRequest>;

export interface ListMembersResponse {
  result:
    | {
        id?: string | null;
        email?: string | null;
        policies?:
          | {
              id?: string | null;
              access?: "allow" | "deny" | (string & {}) | null;
              permissionGroups?: { id: string }[] | null;
              resourceGroups?: { id: string }[] | null;
            }[]
          | null;
        roles?:
          | {
              id: string;
              description: string;
              name: string;
              permissions: {
                analytics?: {
                  read?: boolean | null;
                  write?: boolean | null;
                } | null;
                billing?: {
                  read?: boolean | null;
                  write?: boolean | null;
                } | null;
                cachePurge?: {
                  read?: boolean | null;
                  write?: boolean | null;
                } | null;
                dns?: { read?: boolean | null; write?: boolean | null } | null;
                dnsRecords?: {
                  read?: boolean | null;
                  write?: boolean | null;
                } | null;
                lb?: { read?: boolean | null; write?: boolean | null } | null;
                logs?: { read?: boolean | null; write?: boolean | null } | null;
                organization?: {
                  read?: boolean | null;
                  write?: boolean | null;
                } | null;
                ssl?: { read?: boolean | null; write?: boolean | null } | null;
                waf?: { read?: boolean | null; write?: boolean | null } | null;
                zoneSettings?: {
                  read?: boolean | null;
                  write?: boolean | null;
                } | null;
                zones?: {
                  read?: boolean | null;
                  write?: boolean | null;
                } | null;
              };
            }[]
          | null;
        status?: "accepted" | "pending" | (string & {}) | null;
        user?: {
          email: string;
          id?: string | null;
          firstName?: string | null;
          lastName?: string | null;
          twoFactorAuthenticationEnabled?: boolean | null;
        } | null;
      }[]
    | null;
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListMembersResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Union([Schema.Array(Member), Schema.Null]),
    resultInfo: Schema.optional(
      Schema.Union([ListAccountsResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListMembersResponse>;

export type ListMembersError = DefaultErrors;

export const listMembers: API.PaginatedOperationMethod<
  ListMembersRequest,
  ListMembersResponse,
  ListMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMembersRequest,
  output: ListMembersResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateMemberRequest {
  /** Path param: Account identifier tag. */
  accountId: string;
  /** Body param: The contact email address of the user. */
  email: string;
  /** Body param: Array of roles associated with this member. */
  roles?: string[];
  /** Body param: Status of the member invitation. If not provided during creation, defaults to 'pending'. Changing from 'accepted' back to 'pending' will trigger a replacement of the member resource in Ter */
  status?: "accepted" | "pending" | (string & {});
  /** Body param: Array of policies associated with this member. */
  policies?: {
    access: "allow" | "deny" | (string & {});
    permissionGroups: { id: string }[];
    resourceGroups: { id: string }[];
  }[];
}

export const CreateMemberRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    email: Schema.String,
    roles: Schema.optional(Schema.Array(Schema.String)),
    status: Schema.optional(
      Schema.Union([Schema.Literals(["accepted", "pending"]), Schema.String]),
    ),
    policies: Schema.optional(Schema.Array(Policy2)),
  }).pipe(T.Http({ method: "POST", path: "/accounts/{account_id}/members" })),
) as unknown as Schema.Codec<CreateMemberRequest>;

export interface CreateMemberResponse {
  /** Membership identifier tag. */
  id?: string | null;
  /** The contact email address of the user. */
  email?: string | null;
  /** Access policy for the membership */
  policies?:
    | {
        id?: string | null;
        access?: "allow" | "deny" | (string & {}) | null;
        permissionGroups?: { id: string }[] | null;
        resourceGroups?: { id: string }[] | null;
      }[]
    | null;
  /** Roles assigned to this Member. */
  roles?:
    | {
        id: string;
        description: string;
        name: string;
        permissions: {
          analytics?: { read?: boolean | null; write?: boolean | null } | null;
          billing?: { read?: boolean | null; write?: boolean | null } | null;
          cachePurge?: { read?: boolean | null; write?: boolean | null } | null;
          dns?: { read?: boolean | null; write?: boolean | null } | null;
          dnsRecords?: { read?: boolean | null; write?: boolean | null } | null;
          lb?: { read?: boolean | null; write?: boolean | null } | null;
          logs?: { read?: boolean | null; write?: boolean | null } | null;
          organization?: {
            read?: boolean | null;
            write?: boolean | null;
          } | null;
          ssl?: { read?: boolean | null; write?: boolean | null } | null;
          waf?: { read?: boolean | null; write?: boolean | null } | null;
          zoneSettings?: {
            read?: boolean | null;
            write?: boolean | null;
          } | null;
          zones?: { read?: boolean | null; write?: boolean | null } | null;
        };
      }[]
    | null;
  /** A member's status in the account. */
  status?: "accepted" | "pending" | (string & {}) | null;
  /** Details of the user associated to the membership. */
  user?: {
    email: string;
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    twoFactorAuthenticationEnabled?: boolean | null;
  } | null;
}

export const CreateMemberResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    policies: Schema.optional(
      Schema.Union([Schema.Array(Policy), Schema.Null]),
    ),
    roles: Schema.optional(Schema.Union([Schema.Array(Role), Schema.Null])),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["accepted", "pending"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    user: Schema.optional(Schema.Union([User, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateMemberResponse>;

export type CreateMemberError =
  | DefaultErrors
  | InvalidRoute
  | ValidationError
  | AccountMemberAlreadyExists;

export const createMember: API.OperationMethod<
  CreateMemberRequest,
  CreateMemberResponse,
  CreateMemberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMemberRequest,
  output: CreateMemberResponse,
  errors: [InvalidRoute, ValidationError, AccountMemberAlreadyExists],
}));

export interface UpdateMemberRequest {
  memberId: string;
  /** Path param: Account identifier tag. */
  accountId: string;
  /** Body param: Roles assigned to this member. */
  roles?: { id: string }[];
  /** Body param: Array of policies associated with this member. */
  policies?: {
    access: "allow" | "deny" | (string & {});
    permissionGroups: { id: string }[];
    resourceGroups: { id: string }[];
  }[];
}

export const UpdateMemberRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    memberId: Schema.String.pipe(T.HttpPath("memberId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    roles: Schema.optional(Schema.Array(PolicyPermissionGroup)),
    policies: Schema.optional(Schema.Array(Policy2)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/members/{memberId}",
    }),
  ),
) as unknown as Schema.Codec<UpdateMemberRequest>;

export interface UpdateMemberResponse {
  /** Membership identifier tag. */
  id?: string | null;
  /** The contact email address of the user. */
  email?: string | null;
  /** Access policy for the membership */
  policies?:
    | {
        id?: string | null;
        access?: "allow" | "deny" | (string & {}) | null;
        permissionGroups?: { id: string }[] | null;
        resourceGroups?: { id: string }[] | null;
      }[]
    | null;
  /** Roles assigned to this Member. */
  roles?:
    | {
        id: string;
        description: string;
        name: string;
        permissions: {
          analytics?: { read?: boolean | null; write?: boolean | null } | null;
          billing?: { read?: boolean | null; write?: boolean | null } | null;
          cachePurge?: { read?: boolean | null; write?: boolean | null } | null;
          dns?: { read?: boolean | null; write?: boolean | null } | null;
          dnsRecords?: { read?: boolean | null; write?: boolean | null } | null;
          lb?: { read?: boolean | null; write?: boolean | null } | null;
          logs?: { read?: boolean | null; write?: boolean | null } | null;
          organization?: {
            read?: boolean | null;
            write?: boolean | null;
          } | null;
          ssl?: { read?: boolean | null; write?: boolean | null } | null;
          waf?: { read?: boolean | null; write?: boolean | null } | null;
          zoneSettings?: {
            read?: boolean | null;
            write?: boolean | null;
          } | null;
          zones?: { read?: boolean | null; write?: boolean | null } | null;
        };
      }[]
    | null;
  /** A member's status in the account. */
  status?: "accepted" | "pending" | (string & {}) | null;
  /** Details of the user associated to the membership. */
  user?: {
    email: string;
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    twoFactorAuthenticationEnabled?: boolean | null;
  } | null;
}

export const UpdateMemberResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    policies: Schema.optional(
      Schema.Union([Schema.Array(Policy), Schema.Null]),
    ),
    roles: Schema.optional(Schema.Union([Schema.Array(Role), Schema.Null])),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["accepted", "pending"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    user: Schema.optional(Schema.Union([User, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdateMemberResponse>;

export type UpdateMemberError =
  | DefaultErrors
  | MemberNotFound
  | InvalidRoute
  | BadRequest
  | MethodNotAllowed;

export const updateMember: API.OperationMethod<
  UpdateMemberRequest,
  UpdateMemberResponse,
  UpdateMemberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMemberRequest,
  output: UpdateMemberResponse,
  errors: [MemberNotFound, InvalidRoute, BadRequest, MethodNotAllowed],
}));

export interface DeleteMemberRequest {
  memberId: string;
  /** Account identifier tag. */
  accountId: string;
}

export const DeleteMemberRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    memberId: Schema.String.pipe(T.HttpPath("memberId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/members/{memberId}",
    }),
  ),
) as unknown as Schema.Codec<DeleteMemberRequest>;

export interface DeleteMemberResponse {
  /** Identifier */
  id: string;
}

export const DeleteMemberResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteMemberResponse>;

export type DeleteMemberError = DefaultErrors | MemberNotFound | InvalidRoute;

export const deleteMember: API.OperationMethod<
  DeleteMemberRequest,
  DeleteMemberResponse,
  DeleteMemberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMemberRequest,
  output: DeleteMemberResponse,
  errors: [MemberNotFound, InvalidRoute],
}));

// =============================================================================
// Role
// =============================================================================

export interface GetRoleRequest {
  roleId: string;
  /** Account identifier tag. */
  accountId: string;
}

export const GetRoleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    roleId: Schema.String.pipe(T.HttpPath("roleId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/roles/{roleId}" }),
  ),
) as unknown as Schema.Codec<GetRoleRequest>;

export interface GetRoleResponse {
  /** Role identifier tag. */
  id: string;
  /** Description of role's permissions. */
  description: string;
  /** Role name. */
  name: string;
  permissions: {
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
  };
}

export const GetRoleResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    description: Schema.String,
    name: Schema.String,
    permissions: Permissions,
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetRoleResponse>;

export type GetRoleError = DefaultErrors | InvalidRoute;

export const getRole: API.OperationMethod<
  GetRoleRequest,
  GetRoleResponse,
  GetRoleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRoleRequest,
  output: GetRoleResponse,
  errors: [InvalidRoute],
}));

export interface ListRolesRequest {
  /** Path param: Account identifier tag. */
  accountId: string;
  page?: number;
  perPage?: number;
}

export const ListRolesRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
  }).pipe(T.Http({ method: "GET", path: "/accounts/{account_id}/roles" })),
) as unknown as Schema.Codec<ListRolesRequest>;

export interface ListRolesResponse {
  result:
    | {
        id: string;
        description: string;
        name: string;
        permissions: {
          analytics?: { read?: boolean | null; write?: boolean | null } | null;
          billing?: { read?: boolean | null; write?: boolean | null } | null;
          cachePurge?: { read?: boolean | null; write?: boolean | null } | null;
          dns?: { read?: boolean | null; write?: boolean | null } | null;
          dnsRecords?: { read?: boolean | null; write?: boolean | null } | null;
          lb?: { read?: boolean | null; write?: boolean | null } | null;
          logs?: { read?: boolean | null; write?: boolean | null } | null;
          organization?: {
            read?: boolean | null;
            write?: boolean | null;
          } | null;
          ssl?: { read?: boolean | null; write?: boolean | null } | null;
          waf?: { read?: boolean | null; write?: boolean | null } | null;
          zoneSettings?: {
            read?: boolean | null;
            write?: boolean | null;
          } | null;
          zones?: { read?: boolean | null; write?: boolean | null } | null;
        };
      }[]
    | null;
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListRolesResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Union([Schema.Array(Role), Schema.Null]),
    resultInfo: Schema.optional(
      Schema.Union([ListAccountsResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListRolesResponse>;

export type ListRolesError = DefaultErrors;

export const listRoles: API.PaginatedOperationMethod<
  ListRolesRequest,
  ListRolesResponse,
  ListRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRolesRequest,
  output: ListRolesResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

// =============================================================================
// Subscription
// =============================================================================

export interface GetSubscriptionRequest {
  /** Identifier */
  accountId: string;
}

export const GetSubscriptionRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({ method: "GET", path: "/accounts/{account_id}/subscriptions" }),
    ),
  ) as unknown as Schema.Codec<GetSubscriptionRequest>;

export interface GetSubscriptionResponse {
  result: {
    id?: string | null;
    currency?: string | null;
    currentPeriodEnd?: string | null;
    currentPeriodStart?: string | null;
    frequency?:
      | "weekly"
      | "monthly"
      | "quarterly"
      | "yearly"
      | (string & {})
      | null;
    price?: number | null;
    ratePlan?: {
      id?:
        | "free"
        | "lite"
        | "pro"
        | "pro_plus"
        | "business"
        | "enterprise"
        | "partners_free"
        | "partners_pro"
        | "partners_business"
        | "partners_enterprise"
        | (string & {})
        | null;
      currency?: string | null;
      externallyManaged?: boolean | null;
      isContract?: boolean | null;
      publicName?: string | null;
      scope?: string | null;
      sets?: string[] | null;
    } | null;
    state?:
      | "Trial"
      | "Provisioned"
      | "Paid"
      | "AwaitingPayment"
      | "Cancelled"
      | "Failed"
      | "Expired"
      | (string & {})
      | null;
  }[];
}

export const GetSubscriptionResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(Subscription),
    }),
  ) as unknown as Schema.Codec<GetSubscriptionResponse>;

export type GetSubscriptionError = DefaultErrors;

export const getSubscription: API.PaginatedOperationMethod<
  GetSubscriptionRequest,
  GetSubscriptionResponse,
  GetSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetSubscriptionRequest,
  output: GetSubscriptionResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateSubscriptionRequest {
  /** Path param: Identifier */
  accountId: string;
  /** Body param: How often the subscription is renewed automatically. */
  frequency?: "weekly" | "monthly" | "quarterly" | "yearly" | (string & {});
  /** Body param: The rate plan applied to the subscription. */
  ratePlan?: {
    id?:
      | "free"
      | "lite"
      | "pro"
      | "pro_plus"
      | "business"
      | "enterprise"
      | "partners_free"
      | "partners_pro"
      | "partners_business"
      | "partners_enterprise"
      | (string & {});
    currency?: string;
    externallyManaged?: boolean;
    isContract?: boolean;
    publicName?: string;
    scope?: string;
    sets?: string[];
  };
}

export const CreateSubscriptionRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      frequency: Schema.optional(
        Schema.Union([
          Schema.Literals(["weekly", "monthly", "quarterly", "yearly"]),
          Schema.String,
        ]),
      ),
      ratePlan: Schema.optional(RatePlan),
    }).pipe(
      Schema.encodeKeys({ frequency: "frequency", ratePlan: "rate_plan" }),
      T.Http({ method: "POST", path: "/accounts/{account_id}/subscriptions" }),
    ),
  ) as unknown as Schema.Codec<CreateSubscriptionRequest>;

export interface CreateSubscriptionResponse {
  /** Subscription identifier tag. */
  id?: string | null;
  /** The monetary unit in which pricing information is displayed. */
  currency?: string | null;
  /** The end of the current period and also when the next billing is due. */
  currentPeriodEnd?: string | null;
  /** When the current billing period started. May match initial_period_start if this is the first period. */
  currentPeriodStart?: string | null;
  /** How often the subscription is renewed automatically. */
  frequency?:
    | "weekly"
    | "monthly"
    | "quarterly"
    | "yearly"
    | (string & {})
    | null;
  /** The price of the subscription that will be billed, in US dollars. */
  price?: number | null;
  /** The rate plan applied to the subscription. */
  ratePlan?: {
    id?:
      | "free"
      | "lite"
      | "pro"
      | "pro_plus"
      | "business"
      | "enterprise"
      | "partners_free"
      | "partners_pro"
      | "partners_business"
      | "partners_enterprise"
      | (string & {})
      | null;
    currency?: string | null;
    externallyManaged?: boolean | null;
    isContract?: boolean | null;
    publicName?: string | null;
    scope?: string | null;
    sets?: string[] | null;
  } | null;
  /** The state that the subscription is in. */
  state?:
    | "Trial"
    | "Provisioned"
    | "Paid"
    | "AwaitingPayment"
    | "Cancelled"
    | "Failed"
    | "Expired"
    | (string & {})
    | null;
}

export const CreateSubscriptionResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      currency: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      currentPeriodEnd: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      currentPeriodStart: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      frequency: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["weekly", "monthly", "quarterly", "yearly"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      price: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      ratePlan: Schema.optional(Schema.Union([RatePlan, Schema.Null])),
      state: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "Trial",
              "Provisioned",
              "Paid",
              "AwaitingPayment",
              "Cancelled",
              "Failed",
              "Expired",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          currency: "currency",
          currentPeriodEnd: "current_period_end",
          currentPeriodStart: "current_period_start",
          frequency: "frequency",
          price: "price",
          ratePlan: "rate_plan",
          state: "state",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateSubscriptionResponse>;

export type CreateSubscriptionError =
  | DefaultErrors
  | JsonDecodeFailure
  | InvalidRoute;

export const createSubscription: API.OperationMethod<
  CreateSubscriptionRequest,
  CreateSubscriptionResponse,
  CreateSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSubscriptionRequest,
  output: CreateSubscriptionResponse,
  errors: [JsonDecodeFailure, InvalidRoute],
}));

export interface UpdateSubscriptionRequest {
  subscriptionIdentifier: string;
  /** Path param: Identifier */
  accountId: string;
  /** Body param: How often the subscription is renewed automatically. */
  frequency?: "weekly" | "monthly" | "quarterly" | "yearly" | (string & {});
  /** Body param: The rate plan applied to the subscription. */
  ratePlan?: {
    id?:
      | "free"
      | "lite"
      | "pro"
      | "pro_plus"
      | "business"
      | "enterprise"
      | "partners_free"
      | "partners_pro"
      | "partners_business"
      | "partners_enterprise"
      | (string & {});
    currency?: string;
    externallyManaged?: boolean;
    isContract?: boolean;
    publicName?: string;
    scope?: string;
    sets?: string[];
  };
}

export const UpdateSubscriptionRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      subscriptionIdentifier: Schema.String.pipe(
        T.HttpPath("subscriptionIdentifier"),
      ),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      frequency: Schema.optional(
        Schema.Union([
          Schema.Literals(["weekly", "monthly", "quarterly", "yearly"]),
          Schema.String,
        ]),
      ),
      ratePlan: Schema.optional(RatePlan),
    }).pipe(
      Schema.encodeKeys({ frequency: "frequency", ratePlan: "rate_plan" }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/subscriptions/{subscriptionIdentifier}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateSubscriptionRequest>;

export interface UpdateSubscriptionResponse {
  /** Subscription identifier tag. */
  id?: string | null;
  /** The monetary unit in which pricing information is displayed. */
  currency?: string | null;
  /** The end of the current period and also when the next billing is due. */
  currentPeriodEnd?: string | null;
  /** When the current billing period started. May match initial_period_start if this is the first period. */
  currentPeriodStart?: string | null;
  /** How often the subscription is renewed automatically. */
  frequency?:
    | "weekly"
    | "monthly"
    | "quarterly"
    | "yearly"
    | (string & {})
    | null;
  /** The price of the subscription that will be billed, in US dollars. */
  price?: number | null;
  /** The rate plan applied to the subscription. */
  ratePlan?: {
    id?:
      | "free"
      | "lite"
      | "pro"
      | "pro_plus"
      | "business"
      | "enterprise"
      | "partners_free"
      | "partners_pro"
      | "partners_business"
      | "partners_enterprise"
      | (string & {})
      | null;
    currency?: string | null;
    externallyManaged?: boolean | null;
    isContract?: boolean | null;
    publicName?: string | null;
    scope?: string | null;
    sets?: string[] | null;
  } | null;
  /** The state that the subscription is in. */
  state?:
    | "Trial"
    | "Provisioned"
    | "Paid"
    | "AwaitingPayment"
    | "Cancelled"
    | "Failed"
    | "Expired"
    | (string & {})
    | null;
}

export const UpdateSubscriptionResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      currency: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      currentPeriodEnd: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      currentPeriodStart: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      frequency: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["weekly", "monthly", "quarterly", "yearly"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      price: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      ratePlan: Schema.optional(Schema.Union([RatePlan, Schema.Null])),
      state: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "Trial",
              "Provisioned",
              "Paid",
              "AwaitingPayment",
              "Cancelled",
              "Failed",
              "Expired",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          currency: "currency",
          currentPeriodEnd: "current_period_end",
          currentPeriodStart: "current_period_start",
          frequency: "frequency",
          price: "price",
          ratePlan: "rate_plan",
          state: "state",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateSubscriptionResponse>;

export type UpdateSubscriptionError =
  | DefaultErrors
  | JsonDecodeFailure
  | InvalidRoute
  | EndpointNotFound;

export const updateSubscription: API.OperationMethod<
  UpdateSubscriptionRequest,
  UpdateSubscriptionResponse,
  UpdateSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSubscriptionRequest,
  output: UpdateSubscriptionResponse,
  errors: [JsonDecodeFailure, InvalidRoute, EndpointNotFound],
}));

export interface DeleteSubscriptionRequest {
  subscriptionIdentifier: string;
  /** Identifier */
  accountId: string;
}

export const DeleteSubscriptionRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      subscriptionIdentifier: Schema.String.pipe(
        T.HttpPath("subscriptionIdentifier"),
      ),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/subscriptions/{subscriptionIdentifier}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteSubscriptionRequest>;

export interface DeleteSubscriptionResponse {
  /** Subscription identifier tag. */
  subscriptionId?: string | null;
}

export const DeleteSubscriptionResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      subscriptionId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
    })
      .pipe(Schema.encodeKeys({ subscriptionId: "subscription_id" }))
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteSubscriptionResponse>;

export type DeleteSubscriptionError =
  | DefaultErrors
  | InvalidRoute
  | EndpointNotFound;

export const deleteSubscription: API.OperationMethod<
  DeleteSubscriptionRequest,
  DeleteSubscriptionResponse,
  DeleteSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSubscriptionRequest,
  output: DeleteSubscriptionResponse,
  errors: [InvalidRoute, EndpointNotFound],
}));

// =============================================================================
// Token
// =============================================================================

export interface GetTokenRequest {
  tokenId: string;
  /** Account identifier tag. */
  accountId: string;
}

export const GetTokenRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    tokenId: Schema.String.pipe(T.HttpPath("tokenId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/tokens/{tokenId}" }),
  ),
) as unknown as Schema.Codec<GetTokenRequest>;

export interface GetTokenResponse {
  /** Token identifier tag. */
  id?: string | null;
  condition?: {
    requestIp?: { in?: string[] | null; notIn?: string[] | null } | null;
  } | null;
  /** The expiration time on or after which the JWT MUST NOT be accepted for processing. */
  expiresOn?: string | null;
  /** The time on which the token was created. */
  issuedOn?: string | null;
  /** Last time the token was used. */
  lastUsedOn?: string | null;
  /** Last time the token was modified. */
  modifiedOn?: string | null;
  /** Token name. */
  name?: string | null;
  /** The time before which the token MUST NOT be accepted for processing. */
  notBefore?: string | null;
  /** List of access policies assigned to the token. */
  policies?:
    | {
        id: string;
        effect: "allow" | "deny" | (string & {});
        permissionGroups: {
          id: string;
          meta?: { key?: string | null; value?: string | null } | null;
          name?: string | null;
        }[];
        resources: Record<string, unknown>;
      }[]
    | null;
  /** Status of the token. */
  status?: "active" | "disabled" | "expired" | (string & {}) | null;
}

export const GetTokenResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    condition: Schema.optional(Schema.Union([Condition, Schema.Null])),
    expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    issuedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    lastUsedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    notBefore: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    policies: Schema.optional(
      Schema.Union([Schema.Array(TokenPolicy), Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["active", "disabled", "expired"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        condition: "condition",
        expiresOn: "expires_on",
        issuedOn: "issued_on",
        lastUsedOn: "last_used_on",
        modifiedOn: "modified_on",
        name: "name",
        notBefore: "not_before",
        policies: "policies",
        status: "status",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetTokenResponse>;

export type GetTokenError = DefaultErrors | InvalidRoute | TokenNotFound;

export const getToken: API.OperationMethod<
  GetTokenRequest,
  GetTokenResponse,
  GetTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTokenRequest,
  output: GetTokenResponse,
  errors: [InvalidRoute, TokenNotFound],
}));

export interface ListTokensRequest {
  /** Path param: Account identifier tag. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Direction to order results. */
  direction?: "asc" | "desc" | (string & {});
}

export const ListTokensRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    direction: Schema.optional(
      Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
    ).pipe(T.HttpQuery("direction")),
  }).pipe(T.Http({ method: "GET", path: "/accounts/{account_id}/tokens" })),
) as unknown as Schema.Codec<ListTokensRequest>;

export interface ListTokensResponse {
  result: {
    id?: string | null;
    condition?: {
      requestIp?: { in?: string[] | null; notIn?: string[] | null } | null;
    } | null;
    expiresOn?: string | null;
    issuedOn?: string | null;
    lastUsedOn?: string | null;
    modifiedOn?: string | null;
    name?: string | null;
    notBefore?: string | null;
    policies?:
      | {
          id: string;
          effect: "allow" | "deny" | (string & {});
          permissionGroups: {
            id: string;
            meta?: { key?: string | null; value?: string | null } | null;
            name?: string | null;
          }[];
          resources: Record<string, unknown>;
        }[]
      | null;
    status?: "active" | "disabled" | "expired" | (string & {}) | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListTokensResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(Token),
    resultInfo: Schema.optional(
      Schema.Union([ListAccountsResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListTokensResponse>;

export type ListTokensError = DefaultErrors;

export const listTokens: API.PaginatedOperationMethod<
  ListTokensRequest,
  ListTokensResponse,
  ListTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTokensRequest,
  output: ListTokensResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateTokenRequest {
  /** Path param: Account identifier tag. */
  accountId: string;
  /** Body param: Token name. */
  name: string;
  /** Body param: List of access policies assigned to the token. */
  policies: {
    effect: "allow" | "deny" | (string & {});
    permissionGroups: { id: string; meta?: { key?: string; value?: string } }[];
    resources: Record<string, unknown>;
  }[];
  /** Body param */
  condition?: { requestIp?: { in?: string[]; notIn?: string[] } };
  /** Body param: The expiration time on or after which the JWT MUST NOT be accepted for processing. */
  expiresOn?: string;
  /** Body param: The time before which the token MUST NOT be accepted for processing. */
  notBefore?: string;
}

export const CreateTokenRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    name: Schema.String,
    policies: Schema.Array(TokenPolicyParam),
    condition: Schema.optional(Condition),
    expiresOn: Schema.optional(Schema.String),
    notBefore: Schema.optional(Schema.String),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      policies: "policies",
      condition: "condition",
      expiresOn: "expires_on",
      notBefore: "not_before",
    }),
    T.Http({ method: "POST", path: "/accounts/{account_id}/tokens" }),
  ),
) as unknown as Schema.Codec<CreateTokenRequest>;

export interface CreateTokenResponse {
  /** Token identifier tag. */
  id?: string | null;
  condition?: {
    requestIp?: { in?: string[] | null; notIn?: string[] | null } | null;
  } | null;
  /** The expiration time on or after which the JWT MUST NOT be accepted for processing. */
  expiresOn?: string | null;
  /** The time on which the token was created. */
  issuedOn?: string | null;
  /** Last time the token was used. */
  lastUsedOn?: string | null;
  /** Last time the token was modified. */
  modifiedOn?: string | null;
  /** Token name. */
  name?: string | null;
  /** The time before which the token MUST NOT be accepted for processing. */
  notBefore?: string | null;
  /** List of access policies assigned to the token. */
  policies?:
    | {
        id: string;
        effect: "allow" | "deny" | (string & {});
        permissionGroups: {
          id: string;
          meta?: { key?: string | null; value?: string | null } | null;
          name?: string | null;
        }[];
        resources: Record<string, unknown>;
      }[]
    | null;
  /** Status of the token. */
  status?: "active" | "disabled" | "expired" | (string & {}) | null;
  /** The token value. */
  value?: string | null;
}

export const CreateTokenResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    condition: Schema.optional(Schema.Union([Condition, Schema.Null])),
    expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    issuedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    lastUsedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    notBefore: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    policies: Schema.optional(
      Schema.Union([Schema.Array(TokenPolicy), Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["active", "disabled", "expired"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        condition: "condition",
        expiresOn: "expires_on",
        issuedOn: "issued_on",
        lastUsedOn: "last_used_on",
        modifiedOn: "modified_on",
        name: "name",
        notBefore: "not_before",
        policies: "policies",
        status: "status",
        value: "value",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateTokenResponse>;

export type CreateTokenError =
  | DefaultErrors
  | InvalidRoute
  | InvalidTokenName
  | PermissionGroupNotFound;

export const createToken: API.OperationMethod<
  CreateTokenRequest,
  CreateTokenResponse,
  CreateTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTokenRequest,
  output: CreateTokenResponse,
  errors: [InvalidRoute, InvalidTokenName, PermissionGroupNotFound],
}));

export interface UpdateTokenRequest {
  tokenId: string;
  /** Path param: Account identifier tag. */
  accountId: string;
  /** Body param: Token name. */
  name: string;
  /** Body param: List of access policies assigned to the token. */
  policies: {
    effect: "allow" | "deny" | (string & {});
    permissionGroups: { id: string; meta?: { key?: string; value?: string } }[];
    resources: Record<string, unknown>;
  }[];
  /** Body param */
  condition?: { requestIp?: { in?: string[]; notIn?: string[] } };
  /** Body param: The expiration time on or after which the JWT MUST NOT be accepted for processing. */
  expiresOn?: string;
  /** Body param: The time before which the token MUST NOT be accepted for processing. */
  notBefore?: string;
  /** Body param: Status of the token. */
  status?: "active" | "disabled" | "expired" | (string & {});
}

export const UpdateTokenRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    tokenId: Schema.String.pipe(T.HttpPath("tokenId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    name: Schema.String,
    policies: Schema.Array(TokenPolicyParam),
    condition: Schema.optional(Condition),
    expiresOn: Schema.optional(Schema.String),
    notBefore: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Union([
        Schema.Literals(["active", "disabled", "expired"]),
        Schema.String,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      policies: "policies",
      condition: "condition",
      expiresOn: "expires_on",
      notBefore: "not_before",
      status: "status",
    }),
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/tokens/{tokenId}",
    }),
  ),
) as unknown as Schema.Codec<UpdateTokenRequest>;

export interface UpdateTokenResponse {
  /** Token identifier tag. */
  id?: string | null;
  condition?: {
    requestIp?: { in?: string[] | null; notIn?: string[] | null } | null;
  } | null;
  /** The expiration time on or after which the JWT MUST NOT be accepted for processing. */
  expiresOn?: string | null;
  /** The time on which the token was created. */
  issuedOn?: string | null;
  /** Last time the token was used. */
  lastUsedOn?: string | null;
  /** Last time the token was modified. */
  modifiedOn?: string | null;
  /** Token name. */
  name?: string | null;
  /** The time before which the token MUST NOT be accepted for processing. */
  notBefore?: string | null;
  /** List of access policies assigned to the token. */
  policies?:
    | {
        id: string;
        effect: "allow" | "deny" | (string & {});
        permissionGroups: {
          id: string;
          meta?: { key?: string | null; value?: string | null } | null;
          name?: string | null;
        }[];
        resources: Record<string, unknown>;
      }[]
    | null;
  /** Status of the token. */
  status?: "active" | "disabled" | "expired" | (string & {}) | null;
}

export const UpdateTokenResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    condition: Schema.optional(Schema.Union([Condition, Schema.Null])),
    expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    issuedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    lastUsedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    notBefore: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    policies: Schema.optional(
      Schema.Union([Schema.Array(TokenPolicy), Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["active", "disabled", "expired"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        condition: "condition",
        expiresOn: "expires_on",
        issuedOn: "issued_on",
        lastUsedOn: "last_used_on",
        modifiedOn: "modified_on",
        name: "name",
        notBefore: "not_before",
        policies: "policies",
        status: "status",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdateTokenResponse>;

export type UpdateTokenError =
  | DefaultErrors
  | InvalidRoute
  | MethodNotAllowed
  | TokenNotFound
  | PermissionGroupNotFound;

export const updateToken: API.OperationMethod<
  UpdateTokenRequest,
  UpdateTokenResponse,
  UpdateTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTokenRequest,
  output: UpdateTokenResponse,
  errors: [
    InvalidRoute,
    MethodNotAllowed,
    TokenNotFound,
    PermissionGroupNotFound,
  ],
}));

export interface DeleteTokenRequest {
  tokenId: string;
  /** Account identifier tag. */
  accountId: string;
}

export const DeleteTokenRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    tokenId: Schema.String.pipe(T.HttpPath("tokenId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/tokens/{tokenId}",
    }),
  ),
) as unknown as Schema.Codec<DeleteTokenRequest>;

export interface DeleteTokenResponse {
  /** Identifier */
  id: string;
}

export const DeleteTokenResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteTokenResponse>;

export type DeleteTokenError =
  | DefaultErrors
  | InvalidRoute
  | MethodNotAllowed
  | TokenNotFound
  | TokenManagedByCloudflare;

export const deleteToken: API.OperationMethod<
  DeleteTokenRequest,
  DeleteTokenResponse,
  DeleteTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTokenRequest,
  output: DeleteTokenResponse,
  errors: [
    InvalidRoute,
    MethodNotAllowed,
    TokenNotFound,
    TokenManagedByCloudflare,
  ],
}));

export interface VerifyTokenRequest {
  /** Account identifier tag. */
  accountId: string;
}

export const VerifyTokenRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/tokens/verify" }),
  ),
) as unknown as Schema.Codec<VerifyTokenRequest>;

export interface VerifyTokenResponse {
  /** Token identifier tag. */
  id: string;
  /** Status of the token. */
  status: "active" | "disabled" | "expired" | (string & {});
  /** The expiration time on or after which the JWT MUST NOT be accepted for processing. */
  expiresOn?: string | null;
  /** The time before which the token MUST NOT be accepted for processing. */
  notBefore?: string | null;
}

export const VerifyTokenResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    status: Schema.Union([
      Schema.Literals(["active", "disabled", "expired"]),
      Schema.String,
    ]),
    expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    notBefore: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        status: "status",
        expiresOn: "expires_on",
        notBefore: "not_before",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<VerifyTokenResponse>;

export type VerifyTokenError =
  | DefaultErrors
  | MissingAuthenticationToken
  | InvalidRoute;

export const verifyToken: API.OperationMethod<
  VerifyTokenRequest,
  VerifyTokenResponse,
  VerifyTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: VerifyTokenRequest,
  output: VerifyTokenResponse,
  errors: [MissingAuthenticationToken, InvalidRoute],
}));

// =============================================================================
// TokenPermissionGroup
// =============================================================================

export interface GetTokenPermissionGroupRequest {
  /** Path param: Account identifier tag. */
  accountId: string;
  /** Query param: Filter by the name of the permission group. The value must be URL-encoded. */
  name?: string;
  /** Query param: Filter by the scope of the permission group. The value must be URL-encoded. */
  scope?: string;
}

export const GetTokenPermissionGroupRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
      scope: Schema.optional(Schema.String).pipe(T.HttpQuery("scope")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/tokens/permission_groups",
      }),
    ),
  ) as unknown as Schema.Codec<GetTokenPermissionGroupRequest>;

export type GetTokenPermissionGroupResponse = {
  id?: string | null;
  category?:
    | "developer_platform"
    | "ai_and_machine_learning"
    | "dns_and_zones"
    | "app_security"
    | "rules_and_configuration"
    | "cloudflare_one_and_zero_trust"
    | "analytics_and_logs"
    | "network_services"
    | "media"
    | "email_and_messaging"
    | "cache_and_performance"
    | "account_and_billing"
    | "other"
    | (string & {})
    | null;
  name?: string | null;
  scopes?:
    | (
        | "com.cloudflare.api.account"
        | "com.cloudflare.api.account.zone"
        | "com.cloudflare.api.user"
        | "com.cloudflare.edge.r2.bucket"
        | (string & {})
      )[]
    | null;
}[];

export const GetTokenPermissionGroupResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Array(PermissionGroupGetResponseItem).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetTokenPermissionGroupResponse>;

export type GetTokenPermissionGroupError = DefaultErrors | InvalidRoute;

export const getTokenPermissionGroup: API.OperationMethod<
  GetTokenPermissionGroupRequest,
  GetTokenPermissionGroupResponse,
  GetTokenPermissionGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTokenPermissionGroupRequest,
  output: GetTokenPermissionGroupResponse,
  errors: [InvalidRoute],
}));

export interface ListTokenPermissionGroupsRequest {
  /** Path param: Account identifier tag. */
  accountId: string;
  /** Query param: Filter by the name of the permission group. The value must be URL-encoded. */
  name?: string;
  /** Query param: Filter by the scope of the permission group. The value must be URL-encoded. */
  scope?: string;
}

export const ListTokenPermissionGroupsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
      scope: Schema.optional(Schema.String).pipe(T.HttpQuery("scope")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/tokens/permission_groups",
      }),
    ),
  ) as unknown as Schema.Codec<ListTokenPermissionGroupsRequest>;

export interface ListTokenPermissionGroupsResponse {
  result: {
    id?: string | null;
    category?:
      | "developer_platform"
      | "ai_and_machine_learning"
      | "dns_and_zones"
      | "app_security"
      | "rules_and_configuration"
      | "cloudflare_one_and_zero_trust"
      | "analytics_and_logs"
      | "network_services"
      | "media"
      | "email_and_messaging"
      | "cache_and_performance"
      | "account_and_billing"
      | "other"
      | (string & {})
      | null;
    name?: string | null;
    scopes?:
      | (
          | "com.cloudflare.api.account"
          | "com.cloudflare.api.account.zone"
          | "com.cloudflare.api.user"
          | "com.cloudflare.edge.r2.bucket"
          | (string & {})
        )[]
      | null;
  }[];
}

export const ListTokenPermissionGroupsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(PermissionGroupGetResponseItem),
    }),
  ) as unknown as Schema.Codec<ListTokenPermissionGroupsResponse>;

export type ListTokenPermissionGroupsError = DefaultErrors;

export const listTokenPermissionGroups: API.PaginatedOperationMethod<
  ListTokenPermissionGroupsRequest,
  ListTokenPermissionGroupsResponse,
  ListTokenPermissionGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTokenPermissionGroupsRequest,
  output: ListTokenPermissionGroupsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// TokenValue
// =============================================================================

export interface PutTokenValueRequest {
  tokenId: string;
  /** Path param: Account identifier tag. */
  accountId: string;
  /** Body param */
  body: unknown;
}

export const PutTokenValueRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    tokenId: Schema.String.pipe(T.HttpPath("tokenId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    body: Schema.Unknown.pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/tokens/{tokenId}/value",
    }),
  ),
) as unknown as Schema.Codec<PutTokenValueRequest>;

export type PutTokenValueResponse = string;

export const PutTokenValueResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.String.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutTokenValueResponse>;

export type PutTokenValueError = DefaultErrors | InvalidRoute | TokenNotFound;

export const putTokenValue: API.OperationMethod<
  PutTokenValueRequest,
  PutTokenValueResponse,
  PutTokenValueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutTokenValueRequest,
  output: PutTokenValueResponse,
  errors: [InvalidRoute, TokenNotFound],
}));
