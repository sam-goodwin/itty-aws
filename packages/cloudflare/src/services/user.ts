/**
 * Cloudflare USER API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service user
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

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
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

export class MethodNotAllowed extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MethodNotAllowed>()("MethodNotAllowed", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7001 }],
) {}

export class PermissionGroupNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<PermissionGroupNotFound>()(
    "PermissionGroupNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1001, message: { includes: "Permission group" } }],
) {}

export class TokenNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TokenNotFound>()("TokenNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1003 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Action {
  /** A boolean that indicates if the action attempted was successful. */
  result?: boolean | null;
  /** A short string that describes the action that was performed. */
  type?: string | null;
}
const Action = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Action>;

interface Actor {
  /** The ID of the actor that performed the action. If a user performed the action, this will be their User ID. */
  id?: string | null;
  /** The email of the user that performed the action. */
  email?: string | null;
  /** The IP address of the request that performed the action. */
  ip?: string | null;
  /** The type of actor, whether a User, Cloudflare Admin, or an Automated System. */
  type?: "user" | "admin" | "Cloudflare" | (string & {}) | null;
}
const Actor = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    ip: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["user", "admin", "Cloudflare"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Actor>;

interface Owner {
  /** Identifier */
  id?: string | null;
}
const Owner = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Owner>;

interface Resource {
  /** An identifier for the resource that was affected by the action. */
  id?: string | null;
  /** A short string that describes the resource that was affected by the action. */
  type?: string | null;
}
const Resource = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Resource>;

interface AuditLog {
  /** A string that uniquely identifies the audit log. */
  id?: string | null;
  action?: { result?: boolean | null; type?: string | null } | null;
  actor?: {
    id?: string | null;
    email?: string | null;
    ip?: string | null;
    type?: "user" | "admin" | "Cloudflare" | (string & {}) | null;
  } | null;
  /** The source of the event. */
  interface?: string | null;
  /** An object which can lend more context to the action being logged. This is a flexible value and varies between different actions. */
  metadata?: unknown | null;
  /** The new value of the resource that was modified. */
  newValue?: string | null;
  /** The value of the resource before it was modified. */
  oldValue?: string | null;
  owner?: { id?: string | null } | null;
  resource?: { id?: string | null; type?: string | null } | null;
  /** A UTC RFC3339 timestamp that specifies when the action being logged occured. */
  when?: string | null;
}
const AuditLog = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(Schema.Union([Action, Schema.Null])),
    actor: Schema.optional(Schema.Union([Actor, Schema.Null])),
    interface: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    metadata: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    newValue: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    oldValue: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    owner: Schema.optional(Schema.Union([Owner, Schema.Null])),
    resource: Schema.optional(Schema.Union([Resource, Schema.Null])),
    when: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<AuditLog>;

interface ListAuditLogsResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListAuditLogsResponseResultInfo =
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
  ) as unknown as Schema.Codec<ListAuditLogsResponseResultInfo>;

interface Zone {
  name?: string | null;
}
const Zone = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Zone>;

interface ListBillingHistoriesResponseResult {
  /** Billing item identifier tag. */
  id: string;
  /** The billing item action. */
  action: string;
  /** The amount associated with this billing item. */
  amount: number;
  /** The monetary unit in which pricing information is displayed. */
  currency: string;
  /** The billing item description. */
  description: string;
  /** When the billing item was created. */
  occurredAt: string;
  /** The billing item type. */
  type: string;
  zone: { name?: string | null };
}
const ListBillingHistoriesResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      action: Schema.String,
      amount: Schema.Number,
      currency: Schema.String,
      description: Schema.String,
      occurredAt: Schema.String,
      type: Schema.String,
      zone: Zone,
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        amount: "amount",
        currency: "currency",
        description: "description",
        occurredAt: "occurred_at",
        type: "type",
        zone: "zone",
      }),
    ),
  ) as unknown as Schema.Codec<ListBillingHistoriesResponseResult>;

interface ListInvitesResponseResult {
  /** ID of the user to add to the organization. */
  invitedMemberId: string | null;
  /** ID of the organization the user will be added to. */
  organizationId: string;
  /** Invite identifier tag. */
  id?: string | null;
  /** When the invite is no longer active. */
  expiresOn?: string | null;
  /** The email address of the user who created the invite. */
  invitedBy?: string | null;
  /** Email address of the user to add to the organization. */
  invitedMemberEmail?: string | null;
  /** When the invite was sent. */
  invitedOn?: string | null;
  organizationIsEnforcingTwofactor?: boolean | null;
  /** Organization name. */
  organizationName?: string | null;
  /** List of role names the membership has for this account. */
  roles?: string[] | null;
  /** Current status of the invitation. */
  status?:
    | "pending"
    | "accepted"
    | "rejected"
    | "expired"
    | (string & {})
    | null;
}
const ListInvitesResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    invitedMemberId: Schema.Union([Schema.String, Schema.Null]),
    organizationId: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    invitedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    invitedMemberEmail: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    invitedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    organizationIsEnforcingTwofactor: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    organizationName: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    roles: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["pending", "accepted", "rejected", "expired"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      invitedMemberId: "invited_member_id",
      organizationId: "organization_id",
      id: "id",
      expiresOn: "expires_on",
      invitedBy: "invited_by",
      invitedMemberEmail: "invited_member_email",
      invitedOn: "invited_on",
      organizationIsEnforcingTwofactor: "organization_is_enforcing_twofactor",
      organizationName: "organization_name",
      roles: "roles",
      status: "status",
    }),
  ),
) as unknown as Schema.Codec<ListInvitesResponseResult>;

interface ListOrganizationsResponseResult {
  /** Identifier */
  id?: string | null;
  /** Organization name. */
  name?: string | null;
  /** Access permissions for this User. */
  permissions?: string[] | null;
  /** List of roles that a user has within an organization. */
  roles?: string[] | null;
  /** Whether the user is a member of the organization or has an invitation pending. */
  status?: "member" | "invited" | (string & {}) | null;
}
const ListOrganizationsResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      permissions: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      roles: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["member", "invited"]), Schema.String]),
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Codec<ListOrganizationsResponseResult>;

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

interface Flags {
  accountCreation: string;
  accountDeletion: string;
  accountMigration: string;
  accountMobility: string;
  subOrgCreation: string;
}
const Flags = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountCreation: Schema.String,
    accountDeletion: Schema.String,
    accountMigration: Schema.String,
    accountMobility: Schema.String,
    subOrgCreation: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      accountCreation: "account_creation",
      accountDeletion: "account_deletion",
      accountMigration: "account_migration",
      accountMobility: "account_mobility",
      subOrgCreation: "sub_org_creation",
    }),
  ),
) as unknown as Schema.Codec<Flags>;

interface Meta {
  /** Enable features for Organizations. */
  flags?: {
    accountCreation: string;
    accountDeletion: string;
    accountMigration: string;
    accountMobility: string;
    subOrgCreation: string;
  } | null;
  /** Ordered chain of organization tags from the root organization down to (and including) this organization itself. Root organizations return a single-element array containing their own tag; sub-organizat */
  hierarchyTags?: string[] | null;
  managedBy?: string | null;
}
const Meta = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    flags: Schema.optional(Schema.Union([Flags, Schema.Null])),
    hierarchyTags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    managedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      flags: "flags",
      hierarchyTags: "hierarchy_tags",
      managedBy: "managed_by",
    }),
  ),
) as unknown as Schema.Codec<Meta>;

interface Parent {
  id: string;
  name: string;
}
const Parent = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
  }),
) as unknown as Schema.Codec<Parent>;

interface OrganizationProfile {
  businessAddress: string;
  businessEmail: string;
  businessName: string;
  businessPhone: string;
  externalMetadata: string;
}
const OrganizationProfile = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    businessAddress: Schema.String,
    businessEmail: Schema.String,
    businessName: Schema.String,
    businessPhone: Schema.String,
    externalMetadata: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      businessAddress: "business_address",
      businessEmail: "business_email",
      businessName: "business_name",
      businessPhone: "business_phone",
      externalMetadata: "external_metadata",
    }),
  ),
) as unknown as Schema.Codec<OrganizationProfile>;

interface Organization {
  id: string;
  createTime: string;
  meta: {
    flags?: {
      accountCreation: string;
      accountDeletion: string;
      accountMigration: string;
      accountMobility: string;
      subOrgCreation: string;
    } | null;
    hierarchyTags?: string[] | null;
    managedBy?: string | null;
  };
  name: string;
  parent?: { id: string; name: string } | null;
  profile?: {
    businessAddress: string;
    businessEmail: string;
    businessName: string;
    businessPhone: string;
    externalMetadata: string;
  } | null;
}
const Organization = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createTime: Schema.String,
    meta: Meta,
    name: Schema.String,
    parent: Schema.optional(Schema.Union([Parent, Schema.Null])),
    profile: Schema.optional(Schema.Union([OrganizationProfile, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createTime: "create_time",
      meta: "meta",
      name: "name",
      parent: "parent",
      profile: "profile",
    }),
  ),
) as unknown as Schema.Codec<Organization>;

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

interface Meta2 {
  key?: string | null;
  value?: string | null;
}
const Meta2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    key: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Meta2>;

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
    meta: Schema.optional(Schema.Union([Meta2, Schema.Null])),
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
    meta: Schema.optional(Schema.Union([Meta2, Schema.Null])),
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

interface ListTokenPermissionGroupsResponseResult {
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
const ListTokenPermissionGroupsResponseResult =
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
  ) as unknown as Schema.Codec<ListTokenPermissionGroupsResponseResult>;

// =============================================================================
// AuditLog
// =============================================================================

export interface ListAuditLogsRequest {
  page?: number;
  perPage?: number;
  /** Finds a specific log by its ID. */
  id?: string;
  action?: { type?: string };
  actor?: { email?: string; ip?: string };
  /** Limits the returned results to logs older than the specified date. A `full-date` that conforms to RFC3339. */
  before?: unknown;
  /** Changes the direction of the chronological sorting. */
  direction?: "desc" | "asc" | (string & {});
  /** Indicates that this request is an export of logs in CSV format. */
  export?: boolean;
  /** Indicates whether or not to hide user level audit logs. */
  hideUserLogs?: boolean;
  /** Limits the returned results to logs newer than the specified date. A `full-date` that conforms to RFC3339. */
  since?: unknown;
  zone?: { name?: string };
}

export const ListAuditLogsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    id: Schema.optional(Schema.String).pipe(T.HttpQuery("id")),
    action: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
      }),
    ).pipe(T.HttpQuery("action")),
    actor: Schema.optional(
      Schema.Struct({
        email: Schema.optional(Schema.String),
        ip: Schema.optional(Schema.String),
      }),
    ).pipe(T.HttpQuery("actor")),
    before: Schema.optional(Schema.Unknown).pipe(T.HttpQuery("before")),
    direction: Schema.optional(
      Schema.Union([Schema.Literals(["desc", "asc"]), Schema.String]),
    ).pipe(T.HttpQuery("direction")),
    export: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("export")),
    hideUserLogs: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("hide_user_logs"),
    ),
    since: Schema.optional(Schema.Unknown).pipe(T.HttpQuery("since")),
    zone: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
    ).pipe(T.HttpQuery("zone")),
  }).pipe(T.Http({ method: "GET", path: "/user/audit_logs" })),
) as unknown as Schema.Codec<ListAuditLogsRequest>;

export interface ListAuditLogsResponse {
  result: {
    id?: string | null;
    action?: { result?: boolean | null; type?: string | null } | null;
    actor?: {
      id?: string | null;
      email?: string | null;
      ip?: string | null;
      type?: "user" | "admin" | "Cloudflare" | (string & {}) | null;
    } | null;
    interface?: string | null;
    metadata?: unknown | null;
    newValue?: string | null;
    oldValue?: string | null;
    owner?: { id?: string | null } | null;
    resource?: { id?: string | null; type?: string | null } | null;
    when?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListAuditLogsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(AuditLog),
    resultInfo: Schema.optional(
      Schema.Union([ListAuditLogsResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListAuditLogsResponse>;

export type ListAuditLogsError = DefaultErrors;

export const listAuditLogs: API.PaginatedOperationMethod<
  ListAuditLogsRequest,
  ListAuditLogsResponse,
  ListAuditLogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAuditLogsRequest,
  output: ListAuditLogsResponse,
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
// BillingHistory
// =============================================================================

export interface ListBillingHistoriesRequest {
  page?: number;
  perPage?: number;
  /** The billing item action. */
  action?: string;
  /** When the billing item was created. */
  occurredAt?: string;
  /** Field to order billing history by. */
  order?: "type" | "occurred_at" | "action" | (string & {});
  /** The billing item type. */
  type?: string;
}

export const ListBillingHistoriesRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      action: Schema.optional(Schema.String).pipe(T.HttpQuery("action")),
      occurredAt: Schema.optional(Schema.String).pipe(
        T.HttpQuery("occurred_at"),
      ),
      order: Schema.optional(
        Schema.Union([
          Schema.Literals(["type", "occurred_at", "action"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("order")),
      type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
    }).pipe(T.Http({ method: "GET", path: "/user/billing/history" })),
  ) as unknown as Schema.Codec<ListBillingHistoriesRequest>;

export interface ListBillingHistoriesResponse {
  result: {
    id: string;
    action: string;
    amount: number;
    currency: string;
    description: string;
    occurredAt: string;
    type: string;
    zone: { name?: string | null };
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListBillingHistoriesResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListBillingHistoriesResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListAuditLogsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListBillingHistoriesResponse>;

export type ListBillingHistoriesError = DefaultErrors;

export const listBillingHistories: API.PaginatedOperationMethod<
  ListBillingHistoriesRequest,
  ListBillingHistoriesResponse,
  ListBillingHistoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBillingHistoriesRequest,
  output: ListBillingHistoriesResponse,
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
// BillingProfile
// =============================================================================

export interface GetBillingProfileRequest {}

export const GetBillingProfileRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({}).pipe(
      T.Http({ method: "GET", path: "/user/billing/profile" }),
    ),
  ) as unknown as Schema.Codec<GetBillingProfileRequest>;

export interface GetBillingProfileResponse {
  /** Billing item identifier tag. */
  id?: string | null;
  accountType?: string | null;
  address?: string | null;
  address2?: string | null;
  balance?: string | null;
  cardExpiryMonth?: number | null;
  cardExpiryYear?: number | null;
  cardNumber?: string | null;
  city?: string | null;
  company?: string | null;
  country?: string | null;
  createdOn?: string | null;
  deviceData?: string | null;
  editedOn?: string | null;
  enterpriseBillingEmail?: string | null;
  enterprisePrimaryEmail?: string | null;
  firstName?: string | null;
  isPartner?: boolean | null;
  lastName?: string | null;
  nextBillDate?: string | null;
  paymentAddress?: string | null;
  paymentAddress2?: string | null;
  paymentCity?: string | null;
  paymentCountry?: string | null;
  paymentEmail?: string | null;
  paymentFirstName?: string | null;
  paymentGateway?: string | null;
  paymentLastName?: string | null;
  paymentNonce?: string | null;
  paymentState?: string | null;
  paymentZipcode?: string | null;
  primaryEmail?: string | null;
  state?: string | null;
  taxIdType?: string | null;
  telephone?: string | null;
  useLegacy?: boolean | null;
  validationCode?: string | null;
  vat?: string | null;
  zipcode?: string | null;
}

export const GetBillingProfileResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      accountType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      address: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      address2: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      balance: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      cardExpiryMonth: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      cardExpiryYear: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      cardNumber: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      city: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      company: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      country: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      deviceData: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      editedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enterpriseBillingEmail: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      enterprisePrimaryEmail: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      firstName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isPartner: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      lastName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      nextBillDate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      paymentAddress: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      paymentAddress2: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      paymentCity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      paymentCountry: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      paymentEmail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      paymentFirstName: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      paymentGateway: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      paymentLastName: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      paymentNonce: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      paymentState: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      paymentZipcode: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      primaryEmail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      state: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      taxIdType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      telephone: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      useLegacy: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      validationCode: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      vat: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      zipcode: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          accountType: "account_type",
          address: "address",
          address2: "address2",
          balance: "balance",
          cardExpiryMonth: "card_expiry_month",
          cardExpiryYear: "card_expiry_year",
          cardNumber: "card_number",
          city: "city",
          company: "company",
          country: "country",
          createdOn: "created_on",
          deviceData: "device_data",
          editedOn: "edited_on",
          enterpriseBillingEmail: "enterprise_billing_email",
          enterprisePrimaryEmail: "enterprise_primary_email",
          firstName: "first_name",
          isPartner: "is_partner",
          lastName: "last_name",
          nextBillDate: "next_bill_date",
          paymentAddress: "payment_address",
          paymentAddress2: "payment_address2",
          paymentCity: "payment_city",
          paymentCountry: "payment_country",
          paymentEmail: "payment_email",
          paymentFirstName: "payment_first_name",
          paymentGateway: "payment_gateway",
          paymentLastName: "payment_last_name",
          paymentNonce: "payment_nonce",
          paymentState: "payment_state",
          paymentZipcode: "payment_zipcode",
          primaryEmail: "primary_email",
          state: "state",
          taxIdType: "tax_id_type",
          telephone: "telephone",
          useLegacy: "use_legacy",
          validationCode: "validation_code",
          vat: "vat",
          zipcode: "zipcode",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetBillingProfileResponse>;

export type GetBillingProfileError = DefaultErrors;

export const getBillingProfile: API.OperationMethod<
  GetBillingProfileRequest,
  GetBillingProfileResponse,
  GetBillingProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBillingProfileRequest,
  output: GetBillingProfileResponse,
  errors: [],
}));

// =============================================================================
// Invite
// =============================================================================

export interface GetInviteRequest {
  inviteId: string;
}

export const GetInviteRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    inviteId: Schema.String.pipe(T.HttpPath("inviteId")),
  }).pipe(T.Http({ method: "GET", path: "/user/invites/{inviteId}" })),
) as unknown as Schema.Codec<GetInviteRequest>;

export interface GetInviteResponse {
  /** ID of the user to add to the organization. */
  invitedMemberId: string | null;
  /** ID of the organization the user will be added to. */
  organizationId: string;
  /** Invite identifier tag. */
  id?: string | null;
  /** When the invite is no longer active. */
  expiresOn?: string | null;
  /** The email address of the user who created the invite. */
  invitedBy?: string | null;
  /** Email address of the user to add to the organization. */
  invitedMemberEmail?: string | null;
  /** When the invite was sent. */
  invitedOn?: string | null;
  organizationIsEnforcingTwofactor?: boolean | null;
  /** Organization name. */
  organizationName?: string | null;
  /** List of role names the membership has for this account. */
  roles?: string[] | null;
  /** Current status of the invitation. */
  status?:
    | "pending"
    | "accepted"
    | "rejected"
    | "expired"
    | (string & {})
    | null;
}

export const GetInviteResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    invitedMemberId: Schema.Union([Schema.String, Schema.Null]),
    organizationId: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    invitedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    invitedMemberEmail: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    invitedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    organizationIsEnforcingTwofactor: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    organizationName: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    roles: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["pending", "accepted", "rejected", "expired"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        invitedMemberId: "invited_member_id",
        organizationId: "organization_id",
        id: "id",
        expiresOn: "expires_on",
        invitedBy: "invited_by",
        invitedMemberEmail: "invited_member_email",
        invitedOn: "invited_on",
        organizationIsEnforcingTwofactor: "organization_is_enforcing_twofactor",
        organizationName: "organization_name",
        roles: "roles",
        status: "status",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetInviteResponse>;

export type GetInviteError = DefaultErrors;

export const getInvite: API.OperationMethod<
  GetInviteRequest,
  GetInviteResponse,
  GetInviteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetInviteRequest,
  output: GetInviteResponse,
  errors: [],
}));

export interface ListInvitesRequest {}

export const ListInvitesRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({}).pipe(T.Http({ method: "GET", path: "/user/invites" })),
) as unknown as Schema.Codec<ListInvitesRequest>;

export interface ListInvitesResponse {
  result: {
    invitedMemberId: string | null;
    organizationId: string;
    id?: string | null;
    expiresOn?: string | null;
    invitedBy?: string | null;
    invitedMemberEmail?: string | null;
    invitedOn?: string | null;
    organizationIsEnforcingTwofactor?: boolean | null;
    organizationName?: string | null;
    roles?: string[] | null;
    status?:
      | "pending"
      | "accepted"
      | "rejected"
      | "expired"
      | (string & {})
      | null;
  }[];
}

export const ListInvitesResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListInvitesResponseResult),
  }),
) as unknown as Schema.Codec<ListInvitesResponse>;

export type ListInvitesError = DefaultErrors;

export const listInvites: API.PaginatedOperationMethod<
  ListInvitesRequest,
  ListInvitesResponse,
  ListInvitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListInvitesRequest,
  output: ListInvitesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface PatchInviteRequest {
  inviteId: string;
  /** Status of your response to the invitation (rejected or accepted). */
  status: "accepted" | "rejected" | (string & {});
}

export const PatchInviteRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    inviteId: Schema.String.pipe(T.HttpPath("inviteId")),
    status: Schema.Union([
      Schema.Literals(["accepted", "rejected"]),
      Schema.String,
    ]),
  }).pipe(T.Http({ method: "PATCH", path: "/user/invites/{inviteId}" })),
) as unknown as Schema.Codec<PatchInviteRequest>;

export interface PatchInviteResponse {
  /** ID of the user to add to the organization. */
  invitedMemberId: string | null;
  /** ID of the organization the user will be added to. */
  organizationId: string;
  /** Invite identifier tag. */
  id?: string | null;
  /** When the invite is no longer active. */
  expiresOn?: string | null;
  /** The email address of the user who created the invite. */
  invitedBy?: string | null;
  /** Email address of the user to add to the organization. */
  invitedMemberEmail?: string | null;
  /** When the invite was sent. */
  invitedOn?: string | null;
  organizationIsEnforcingTwofactor?: boolean | null;
  /** Organization name. */
  organizationName?: string | null;
  /** List of role names the membership has for this account. */
  roles?: string[] | null;
  /** Current status of the invitation. */
  status?:
    | "pending"
    | "accepted"
    | "rejected"
    | "expired"
    | (string & {})
    | null;
}

export const PatchInviteResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    invitedMemberId: Schema.Union([Schema.String, Schema.Null]),
    organizationId: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    invitedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    invitedMemberEmail: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    invitedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    organizationIsEnforcingTwofactor: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    organizationName: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    roles: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["pending", "accepted", "rejected", "expired"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        invitedMemberId: "invited_member_id",
        organizationId: "organization_id",
        id: "id",
        expiresOn: "expires_on",
        invitedBy: "invited_by",
        invitedMemberEmail: "invited_member_email",
        invitedOn: "invited_on",
        organizationIsEnforcingTwofactor: "organization_is_enforcing_twofactor",
        organizationName: "organization_name",
        roles: "roles",
        status: "status",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchInviteResponse>;

export type PatchInviteError = DefaultErrors;

export const patchInvite: API.OperationMethod<
  PatchInviteRequest,
  PatchInviteResponse,
  PatchInviteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchInviteRequest,
  output: PatchInviteResponse,
  errors: [],
}));

// =============================================================================
// Organization
// =============================================================================

export interface GetOrganizationRequest {
  organizationId: string;
}

export const GetOrganizationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      organizationId: Schema.String.pipe(T.HttpPath("organizationId")),
    }).pipe(
      T.Http({ method: "GET", path: "/user/organizations/{organizationId}" }),
    ),
  ) as unknown as Schema.Codec<GetOrganizationRequest>;

export type GetOrganizationResponse = unknown;

export const GetOrganizationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetOrganizationResponse>;

export type GetOrganizationError = DefaultErrors;

export const getOrganization: API.OperationMethod<
  GetOrganizationRequest,
  GetOrganizationResponse,
  GetOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationRequest,
  output: GetOrganizationResponse,
  errors: [],
}));

export interface ListOrganizationsRequest {
  page?: number;
  perPage?: number;
  /** Direction to order organizations. */
  direction?: "asc" | "desc" | (string & {});
  /** Whether to match all search requirements or at least one (any). */
  match?: "any" | "all" | (string & {});
  /** Organization name. */
  name?: string;
  /** Field to order organizations by. */
  order?: "id" | "name" | "status" | (string & {});
  /** Whether the user is a member of the organization or has an inivitation pending. */
  status?: "member" | "invited" | (string & {});
}

export const ListOrganizationsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      match: Schema.optional(
        Schema.Union([Schema.Literals(["any", "all"]), Schema.String]),
      ).pipe(T.HttpQuery("match")),
      name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
      order: Schema.optional(
        Schema.Union([
          Schema.Literals(["id", "name", "status"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("order")),
      status: Schema.optional(
        Schema.Union([Schema.Literals(["member", "invited"]), Schema.String]),
      ).pipe(T.HttpQuery("status")),
    }).pipe(T.Http({ method: "GET", path: "/user/organizations" })),
  ) as unknown as Schema.Codec<ListOrganizationsRequest>;

export interface ListOrganizationsResponse {
  result: {
    id?: string | null;
    name?: string | null;
    permissions?: string[] | null;
    roles?: string[] | null;
    status?: "member" | "invited" | (string & {}) | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListOrganizationsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListOrganizationsResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListAuditLogsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListOrganizationsResponse>;

export type ListOrganizationsError = DefaultErrors;

export const listOrganizations: API.PaginatedOperationMethod<
  ListOrganizationsRequest,
  ListOrganizationsResponse,
  ListOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsRequest,
  output: ListOrganizationsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface DeleteOrganizationRequest {
  organizationId: string;
}

export const DeleteOrganizationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      organizationId: Schema.String.pipe(T.HttpPath("organizationId")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/user/organizations/{organizationId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteOrganizationRequest>;

export interface DeleteOrganizationResponse {
  /** Identifier */
  id?: string | null;
}

export const DeleteOrganizationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<DeleteOrganizationResponse>;

export type DeleteOrganizationError = DefaultErrors;

export const deleteOrganization: API.OperationMethod<
  DeleteOrganizationRequest,
  DeleteOrganizationResponse,
  DeleteOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOrganizationRequest,
  output: DeleteOrganizationResponse,
  errors: [],
}));

// =============================================================================
// Subscription
// =============================================================================

export interface GetSubscriptionRequest {}

export const GetSubscriptionRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({}).pipe(
      T.Http({ method: "GET", path: "/user/subscriptions" }),
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

export interface PutSubscriptionRequest {
  identifier: string;
  /** How often the subscription is renewed automatically. */
  frequency?: "weekly" | "monthly" | "quarterly" | "yearly" | (string & {});
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
      | (string & {});
    currency?: string;
    externallyManaged?: boolean;
    isContract?: boolean;
    publicName?: string;
    scope?: string;
    sets?: string[];
  };
}

export const PutSubscriptionRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      identifier: Schema.String.pipe(T.HttpPath("identifier")),
      frequency: Schema.optional(
        Schema.Union([
          Schema.Literals(["weekly", "monthly", "quarterly", "yearly"]),
          Schema.String,
        ]),
      ),
      ratePlan: Schema.optional(RatePlan),
    }).pipe(
      Schema.encodeKeys({ frequency: "frequency", ratePlan: "rate_plan" }),
      T.Http({ method: "PUT", path: "/user/subscriptions/{identifier}" }),
    ),
  ) as unknown as Schema.Codec<PutSubscriptionRequest>;

export type PutSubscriptionResponse = unknown;

export const PutSubscriptionResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutSubscriptionResponse>;

export type PutSubscriptionError = DefaultErrors;

export const putSubscription: API.OperationMethod<
  PutSubscriptionRequest,
  PutSubscriptionResponse,
  PutSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutSubscriptionRequest,
  output: PutSubscriptionResponse,
  errors: [],
}));

export interface DeleteSubscriptionRequest {
  identifier: string;
}

export const DeleteSubscriptionRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      identifier: Schema.String.pipe(T.HttpPath("identifier")),
    }).pipe(
      T.Http({ method: "DELETE", path: "/user/subscriptions/{identifier}" }),
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
    }).pipe(Schema.encodeKeys({ subscriptionId: "subscription_id" })),
  ) as unknown as Schema.Codec<DeleteSubscriptionResponse>;

export type DeleteSubscriptionError = DefaultErrors;

export const deleteSubscription: API.OperationMethod<
  DeleteSubscriptionRequest,
  DeleteSubscriptionResponse,
  DeleteSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSubscriptionRequest,
  output: DeleteSubscriptionResponse,
  errors: [],
}));

// =============================================================================
// Tenant
// =============================================================================

export interface ListTenantsRequest {}

export const ListTenantsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({}).pipe(T.Http({ method: "GET", path: "/user/tenants" })),
) as unknown as Schema.Codec<ListTenantsRequest>;

export interface ListTenantsResponse {
  result: {
    id: string;
    createTime: string;
    meta: {
      flags?: {
        accountCreation: string;
        accountDeletion: string;
        accountMigration: string;
        accountMobility: string;
        subOrgCreation: string;
      } | null;
      hierarchyTags?: string[] | null;
      managedBy?: string | null;
    };
    name: string;
    parent?: { id: string; name: string } | null;
    profile?: {
      businessAddress: string;
      businessEmail: string;
      businessName: string;
      businessPhone: string;
      externalMetadata: string;
    } | null;
  }[];
}

export const ListTenantsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(Organization),
  }),
) as unknown as Schema.Codec<ListTenantsResponse>;

export type ListTenantsError = DefaultErrors;

export const listTenants: API.PaginatedOperationMethod<
  ListTenantsRequest,
  ListTenantsResponse,
  ListTenantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTenantsRequest,
  output: ListTenantsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Token
// =============================================================================

export interface GetTokenRequest {
  tokenId: string;
}

export const GetTokenRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    tokenId: Schema.String.pipe(T.HttpPath("tokenId")),
  }).pipe(T.Http({ method: "GET", path: "/user/tokens/{tokenId}" })),
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
  page?: number;
  perPage?: number;
  /** Direction to order results. */
  direction?: "asc" | "desc" | (string & {});
}

export const ListTokensRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    direction: Schema.optional(
      Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
    ).pipe(T.HttpQuery("direction")),
  }).pipe(T.Http({ method: "GET", path: "/user/tokens" })),
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
      Schema.Union([ListAuditLogsResponseResultInfo, Schema.Null]),
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
  /** Token name. */
  name: string;
  /** List of access policies assigned to the token. */
  policies: {
    effect: "allow" | "deny" | (string & {});
    permissionGroups: { id: string; meta?: { key?: string; value?: string } }[];
    resources: Record<string, unknown>;
  }[];
  condition?: { requestIp?: { in?: string[]; notIn?: string[] } };
  /** The expiration time on or after which the JWT MUST NOT be accepted for processing. */
  expiresOn?: string;
  /** The time before which the token MUST NOT be accepted for processing. */
  notBefore?: string;
}

export const CreateTokenRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
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
    T.Http({ method: "POST", path: "/user/tokens" }),
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
  /** Token name. */
  name: string;
  /** List of access policies assigned to the token. */
  policies: {
    effect: "allow" | "deny" | (string & {});
    permissionGroups: { id: string; meta?: { key?: string; value?: string } }[];
    resources: Record<string, unknown>;
  }[];
  condition?: { requestIp?: { in?: string[]; notIn?: string[] } };
  /** The expiration time on or after which the JWT MUST NOT be accepted for processing. */
  expiresOn?: string;
  /** The time before which the token MUST NOT be accepted for processing. */
  notBefore?: string;
  /** Status of the token. */
  status?: "active" | "disabled" | "expired" | (string & {});
}

export const UpdateTokenRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    tokenId: Schema.String.pipe(T.HttpPath("tokenId")),
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
    T.Http({ method: "PUT", path: "/user/tokens/{tokenId}" }),
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
}

export const DeleteTokenRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    tokenId: Schema.String.pipe(T.HttpPath("tokenId")),
  }).pipe(T.Http({ method: "DELETE", path: "/user/tokens/{tokenId}" })),
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
  | TokenNotFound;

export const deleteToken: API.OperationMethod<
  DeleteTokenRequest,
  DeleteTokenResponse,
  DeleteTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTokenRequest,
  output: DeleteTokenResponse,
  errors: [InvalidRoute, MethodNotAllowed, TokenNotFound],
}));

export interface VerifyTokenRequest {}

export const VerifyTokenRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/user/tokens/verify" }),
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

export type VerifyTokenError = DefaultErrors | Forbidden;

export const verifyToken: API.OperationMethod<
  VerifyTokenRequest,
  VerifyTokenResponse,
  VerifyTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: VerifyTokenRequest,
  output: VerifyTokenResponse,
  errors: [Forbidden],
}));

// =============================================================================
// TokenPermissionGroup
// =============================================================================

export interface ListTokenPermissionGroupsRequest {
  /** Filter by the name of the permission group. The value must be URL-encoded. */
  name?: string;
  /** Filter by the scope of the permission group. The value must be URL-encoded. */
  scope?: string;
}

export const ListTokenPermissionGroupsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
      scope: Schema.optional(Schema.String).pipe(T.HttpQuery("scope")),
    }).pipe(T.Http({ method: "GET", path: "/user/tokens/permission_groups" })),
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
      result: Schema.Array(ListTokenPermissionGroupsResponseResult),
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
}

export const PutTokenValueRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    tokenId: Schema.String.pipe(T.HttpPath("tokenId")),
  }).pipe(T.Http({ method: "PUT", path: "/user/tokens/{tokenId}/value" })),
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

// =============================================================================
// User
// =============================================================================

export interface GetUserRequest {}

export const GetUserRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({}).pipe(T.Http({ method: "GET", path: "/user" })),
) as unknown as Schema.Codec<GetUserRequest>;

export interface GetUserResponse {
  /** Identifier of the user. */
  id: string;
  /** Current email address of the user. */
  email: string;
  /** Lists the betas that the user is participating in. */
  betas?: string[] | null;
  /** The country in which the user lives. */
  country?: string | null;
  /** User's first name */
  firstName?: string | null;
  /** Indicates whether user has any business zones */
  hasBusinessZones?: boolean | null;
  /** Indicates whether user has any enterprise zones */
  hasEnterpriseZones?: boolean | null;
  /** Indicates whether user has any pro zones */
  hasProZones?: boolean | null;
  /** User's last name */
  lastName?: string | null;
  organizations?:
    | {
        id?: string | null;
        name?: string | null;
        permissions?: string[] | null;
        roles?: string[] | null;
        status?: "member" | "invited" | (string & {}) | null;
      }[]
    | null;
  /** Indicates whether user has been suspended */
  suspended?: boolean | null;
  /** User's telephone number */
  telephone?: string | null;
  /** Indicates whether two-factor authentication is enabled for the user account. Does not apply to API authentication. */
  twoFactorAuthenticationEnabled?: boolean | null;
  /** Indicates whether two-factor authentication is required by one of the accounts that the user is a member of. */
  twoFactorAuthenticationLocked?: boolean | null;
  /** The zipcode or postal code where the user lives. */
  zipcode?: string | null;
}

export const GetUserResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    email: Schema.String,
    betas: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    country: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    firstName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    hasBusinessZones: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    hasEnterpriseZones: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    hasProZones: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    lastName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    organizations: Schema.optional(
      Schema.Union([
        Schema.Array(ListOrganizationsResponseResult),
        Schema.Null,
      ]),
    ),
    suspended: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    telephone: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    twoFactorAuthenticationEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    twoFactorAuthenticationLocked: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    zipcode: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        email: "email",
        betas: "betas",
        country: "country",
        firstName: "first_name",
        hasBusinessZones: "has_business_zones",
        hasEnterpriseZones: "has_enterprise_zones",
        hasProZones: "has_pro_zones",
        lastName: "last_name",
        organizations: "organizations",
        suspended: "suspended",
        telephone: "telephone",
        twoFactorAuthenticationEnabled: "two_factor_authentication_enabled",
        twoFactorAuthenticationLocked: "two_factor_authentication_locked",
        zipcode: "zipcode",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetUserResponse>;

export type GetUserError = DefaultErrors;

export const getUser: API.OperationMethod<
  GetUserRequest,
  GetUserResponse,
  GetUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUserRequest,
  output: GetUserResponse,
  errors: [],
}));

export interface PatchUserRequest {
  /** The country in which the user lives. */
  country?: string | null;
  /** User's first name */
  firstName?: string | null;
  /** User's last name */
  lastName?: string | null;
  /** User's telephone number */
  telephone?: string | null;
  /** The zipcode or postal code where the user lives. */
  zipcode?: string | null;
}

export const PatchUserRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    country: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    firstName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    lastName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    telephone: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    zipcode: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      country: "country",
      firstName: "first_name",
      lastName: "last_name",
      telephone: "telephone",
      zipcode: "zipcode",
    }),
    T.Http({ method: "PATCH", path: "/user" }),
  ),
) as unknown as Schema.Codec<PatchUserRequest>;

export interface PatchUserResponse {
  /** Identifier of the user. */
  id: string;
  /** Current email address of the user. */
  email: string;
  /** Lists the betas that the user is participating in. */
  betas?: string[] | null;
  /** The country in which the user lives. */
  country?: string | null;
  /** User's first name */
  firstName?: string | null;
  /** Indicates whether user has any business zones */
  hasBusinessZones?: boolean | null;
  /** Indicates whether user has any enterprise zones */
  hasEnterpriseZones?: boolean | null;
  /** Indicates whether user has any pro zones */
  hasProZones?: boolean | null;
  /** User's last name */
  lastName?: string | null;
  organizations?:
    | {
        id?: string | null;
        name?: string | null;
        permissions?: string[] | null;
        roles?: string[] | null;
        status?: "member" | "invited" | (string & {}) | null;
      }[]
    | null;
  /** Indicates whether user has been suspended */
  suspended?: boolean | null;
  /** User's telephone number */
  telephone?: string | null;
  /** Indicates whether two-factor authentication is enabled for the user account. Does not apply to API authentication. */
  twoFactorAuthenticationEnabled?: boolean | null;
  /** Indicates whether two-factor authentication is required by one of the accounts that the user is a member of. */
  twoFactorAuthenticationLocked?: boolean | null;
  /** The zipcode or postal code where the user lives. */
  zipcode?: string | null;
}

export const PatchUserResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    email: Schema.String,
    betas: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    country: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    firstName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    hasBusinessZones: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    hasEnterpriseZones: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    hasProZones: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    lastName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    organizations: Schema.optional(
      Schema.Union([
        Schema.Array(ListOrganizationsResponseResult),
        Schema.Null,
      ]),
    ),
    suspended: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    telephone: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    twoFactorAuthenticationEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    twoFactorAuthenticationLocked: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    zipcode: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        email: "email",
        betas: "betas",
        country: "country",
        firstName: "first_name",
        hasBusinessZones: "has_business_zones",
        hasEnterpriseZones: "has_enterprise_zones",
        hasProZones: "has_pro_zones",
        lastName: "last_name",
        organizations: "organizations",
        suspended: "suspended",
        telephone: "telephone",
        twoFactorAuthenticationEnabled: "two_factor_authentication_enabled",
        twoFactorAuthenticationLocked: "two_factor_authentication_locked",
        zipcode: "zipcode",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchUserResponse>;

export type PatchUserError = DefaultErrors;

export const patchUser: API.OperationMethod<
  PatchUserRequest,
  PatchUserResponse,
  PatchUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchUserRequest,
  output: PatchUserResponse,
  errors: [],
}));
