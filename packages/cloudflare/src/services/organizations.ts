/**
 * Cloudflare ORGANIZATIONS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service organizations
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

export class OrganizationNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<OrganizationNotFound>()("OrganizationNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface UsageGetResponseItem {
  /** Public identifier of the Cloudflare account (account tag). */
  billingAccountId: string;
  /** Display name of the Cloudflare account. */
  billingAccountName: string;
  /** Highest-level classification of a charge based on the nature of how it gets billed. Currently only "Usage" is supported. */
  chargeCategory: "Usage";
  /** Self-contained summary of the charge's purpose and price. */
  chargeDescription: string;
  /** Indicates how often a charge occurs. Currently only "Usage-Based" is supported. */
  chargeFrequency: "Usage-Based";
  /** Exclusive end of the time interval during which the usage was consumed. */
  chargePeriodEnd: string;
  /** Inclusive start of the time interval during which the usage was consumed. */
  chargePeriodStart: string;
  /** Measured usage amount within the charge period. Reflects raw metered consumption before pricing transformations. */
  consumedQuantity: number;
  /** Unit of measure for the consumed quantity (e.g., "GB", "Requests", "vCPU-Hours"). */
  consumedUnit: string;
  /** Name of the entity providing the underlying infrastructure or platform. */
  hostProviderName: string;
  /** Name of the entity responsible for invoicing for the services consumed. */
  invoiceIssuerName: string;
  /** Name of the entity that made the services available for purchase. */
  serviceProviderName: string;
  /** The display name of the billable metric. Cloudflare extension; replaces FOCUS SkuMeter. */
  xBillableMetricName: string;
  /** A charge serving as the basis for invoicing, inclusive of all reduced rates and discounts while excluding the amortization of upfront charges (one-time or recurring). */
  billedCost?: number | null;
  /** Currency that a charge was billed in (ISO 4217). */
  billingCurrency?: string | null;
  /** Exclusive end of the billing cycle that contains this usage record. */
  billingPeriodEnd?: string | null;
  /** Inclusive start of the billing cycle that contains this usage record. */
  billingPeriodStart?: string | null;
  /** Indicates whether the row represents a correction to one or more charges invoiced in a previous billing period. */
  chargeClass?: "Correction" | null;
  /** Cost calculated by multiplying ContractedUnitPrice and the corresponding PricingQuantity. */
  contractedCost?: number | null;
  /** The agreed-upon unit price for a single PricingUnit of the associated billable metric, inclusive of negotiated discounts, if present, while excluding any other discounts. */
  contractedUnitPrice?: number | null;
  /** The amortized cost of the charge after applying all reduced rates, discounts, and the applicable portion of relevant, prepaid purchases (one-time or recurring) that covered the charge. */
  effectiveCost?: number | null;
  /** Cost calculated by multiplying ListUnitPrice and the corresponding PricingQuantity. */
  listCost?: number | null;
  /** Suggested provider-published unit price for a single PricingUnit of the associated billable metric, exclusive of any discounts. */
  listUnitPrice?: number | null;
  /** Volume of a given service used or purchased, based on the PricingUnit. */
  pricingQuantity?: number | null;
  /** Provider-specified measurement unit for determining unit prices, indicating how the provider rates measured usage after applying pricing rules like block pricing. */
  pricingUnit?: string | null;
  /** Provider-assigned identifier for an isolated geographic area where a service is provided. */
  regionId?: string | null;
  /** Name of an isolated geographic area where a service is provided. */
  regionName?: string | null;
  /** Unique identifier assigned to a grouping of services. For Cloudflare, this is the subscription or contract ID. */
  subAccountId?: string | null;
  /** Name assigned to a grouping of services. For Cloudflare, this is the subscription or contract display name. */
  subAccountName?: string | null;
  /** The unique identifier for the billable metric in the Cloudflare catalog. Cloudflare extension; replaces FOCUS SkuId. */
  xBillableMetricId?: string | null;
  /** The product family the charge belongs to (e.g., "R2", "Workers"). Cloudflare extension; replaces FOCUS ServiceName. */
  xProductFamilyName?: string | null;
  /** The identifier for the Cloudflare zone (zone tag). Cloudflare extension. */
  xZoneId?: string | null;
  /** The display name of the Cloudflare zone. Cloudflare extension. */
  xZoneName?: string | null;
}
const UsageGetResponseItem = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    billingAccountId: Schema.String,
    billingAccountName: Schema.String,
    chargeCategory: Schema.Literal("Usage"),
    chargeDescription: Schema.String,
    chargeFrequency: Schema.Literal("Usage-Based"),
    chargePeriodEnd: Schema.String,
    chargePeriodStart: Schema.String,
    consumedQuantity: Schema.Number,
    consumedUnit: Schema.String,
    hostProviderName: Schema.String,
    invoiceIssuerName: Schema.String,
    serviceProviderName: Schema.String,
    xBillableMetricName: Schema.String,
    billedCost: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    billingCurrency: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    billingPeriodEnd: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    billingPeriodStart: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    chargeClass: Schema.optional(
      Schema.Union([Schema.Literal("Correction"), Schema.Null]),
    ),
    contractedCost: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    contractedUnitPrice: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    effectiveCost: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    listCost: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    listUnitPrice: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    pricingQuantity: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    pricingUnit: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    regionId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    regionName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    subAccountId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    subAccountName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    xBillableMetricId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    xProductFamilyName: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    xZoneId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    xZoneName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      billingAccountId: "BillingAccountId",
      billingAccountName: "BillingAccountName",
      chargeCategory: "ChargeCategory",
      chargeDescription: "ChargeDescription",
      chargeFrequency: "ChargeFrequency",
      chargePeriodEnd: "ChargePeriodEnd",
      chargePeriodStart: "ChargePeriodStart",
      consumedQuantity: "ConsumedQuantity",
      consumedUnit: "ConsumedUnit",
      hostProviderName: "HostProviderName",
      invoiceIssuerName: "InvoiceIssuerName",
      serviceProviderName: "ServiceProviderName",
      xBillableMetricName: "x_BillableMetricName",
      billedCost: "BilledCost",
      billingCurrency: "BillingCurrency",
      billingPeriodEnd: "BillingPeriodEnd",
      billingPeriodStart: "BillingPeriodStart",
      chargeClass: "ChargeClass",
      contractedCost: "ContractedCost",
      contractedUnitPrice: "ContractedUnitPrice",
      effectiveCost: "EffectiveCost",
      listCost: "ListCost",
      listUnitPrice: "ListUnitPrice",
      pricingQuantity: "PricingQuantity",
      pricingUnit: "PricingUnit",
      regionId: "RegionId",
      regionName: "RegionName",
      subAccountId: "SubAccountId",
      subAccountName: "SubAccountName",
      xBillableMetricId: "x_BillableMetricId",
      xProductFamilyName: "x_ProductFamilyName",
      xZoneId: "x_ZoneId",
      xZoneName: "x_ZoneName",
    }),
  ),
) as unknown as Schema.Codec<UsageGetResponseItem>;

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
const Action = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
  type?: "cloudflare_admin" | "system" | "user" | (string & {}) | null;
}
const Actor = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
          Schema.Literals(["cloudflare_admin", "system", "user"]),
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

interface Organization {
  /** A unique identifier for the organization. */
  id?: string | null;
}
const Organization = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Organization>;

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
const Raw = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
const Resource = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
    type?: "cloudflare_admin" | "system" | "user" | (string & {}) | null;
  } | null;
  /** Contains organization related information. */
  organization?: { id?: string | null } | null;
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
}
const ListLogAuditsResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(Schema.Union([Action, Schema.Null])),
      actor: Schema.optional(Schema.Union([Actor, Schema.Null])),
      organization: Schema.optional(Schema.Union([Organization, Schema.Null])),
      raw: Schema.optional(Schema.Union([Raw, Schema.Null])),
      resource: Schema.optional(Schema.Union([Resource, Schema.Null])),
    }),
) as unknown as Schema.Codec<ListLogAuditsResponseResult>;

interface ListLogAuditsResponseResultInfoCursors {
  after?: string | null;
}
const ListLogAuditsResponseResultInfoCursors =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      after: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<ListLogAuditsResponseResultInfoCursors>;

interface ListLogAuditsResponseResultInfo {
  cursors?: { after?: string | null } | null;
}
const ListLogAuditsResponseResultInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      cursors: Schema.optional(
        Schema.Union([ListLogAuditsResponseResultInfoCursors, Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Codec<ListLogAuditsResponseResultInfo>;

interface Flags {
  accountCreation: string;
  accountDeletion: string;
  accountMigration: string;
  accountMobility: string;
  subOrgCreation: string;
}
const Flags = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
const Meta = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
const Parent = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
const OrganizationProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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

interface ListOrganizationsResponseResult {
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
const ListOrganizationsResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createTime: Schema.String,
      meta: Meta,
      name: Schema.String,
      parent: Schema.optional(Schema.Union([Parent, Schema.Null])),
      profile: Schema.optional(
        Schema.Union([OrganizationProfile, Schema.Null]),
      ),
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
  ) as unknown as Schema.Codec<ListOrganizationsResponseResult>;

interface Parent2 {
  id: string;
}
const Parent2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Parent2>;

// =============================================================================
// BillingUsage
// =============================================================================

export interface GetBillingUsageRequest {
  organizationId: string;
  /** Start date for the usage query (ISO 8601). Required if `to` is set. When omitted along with `to`, defaults to the start of the current month. Filters by charge period (when consumption happened), not  */
  from?: string;
  /** Filter results by billable metric id (e.g., workers_standard_requests). */
  metric?: string;
  /** End date for the usage query (ISO 8601). Required if `from` is set. When omitted along with `from`, defaults to today. Filters by charge period (when consumption happened), not billing period. The max */
  to?: string;
}

export const GetBillingUsageRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      organizationId: Schema.String.pipe(T.HttpPath("organizationId")),
      from: Schema.optional(Schema.String),
      metric: Schema.optional(Schema.String),
      to: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/organizations/{organizationId}/billable/usage",
      }),
    ),
  ) as unknown as Schema.Codec<GetBillingUsageRequest>;

export type GetBillingUsageResponse = {
  billingAccountId: string;
  billingAccountName: string;
  chargeCategory: "Usage";
  chargeDescription: string;
  chargeFrequency: "Usage-Based";
  chargePeriodEnd: string;
  chargePeriodStart: string;
  consumedQuantity: number;
  consumedUnit: string;
  hostProviderName: string;
  invoiceIssuerName: string;
  serviceProviderName: string;
  xBillableMetricName: string;
  billedCost?: number | null;
  billingCurrency?: string | null;
  billingPeriodEnd?: string | null;
  billingPeriodStart?: string | null;
  chargeClass?: "Correction" | null;
  contractedCost?: number | null;
  contractedUnitPrice?: number | null;
  effectiveCost?: number | null;
  listCost?: number | null;
  listUnitPrice?: number | null;
  pricingQuantity?: number | null;
  pricingUnit?: string | null;
  regionId?: string | null;
  regionName?: string | null;
  subAccountId?: string | null;
  subAccountName?: string | null;
  xBillableMetricId?: string | null;
  xProductFamilyName?: string | null;
  xZoneId?: string | null;
  xZoneName?: string | null;
}[];

export const GetBillingUsageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Array(UsageGetResponseItem).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetBillingUsageResponse>;

export type GetBillingUsageError = DefaultErrors;

export const getBillingUsage: API.OperationMethod<
  GetBillingUsageRequest,
  GetBillingUsageResponse,
  GetBillingUsageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBillingUsageRequest,
  output: GetBillingUsageResponse,
  errors: [],
}));

// =============================================================================
// LogAudit
// =============================================================================

export interface ListLogAuditsRequest {
  organizationId: string;
  cursor?: string;
  /** Limits the returned results to logs older than the specified date. This can be a date string 2019-04-30 (interpreted in UTC) or an absolute timestamp that conforms to RFC3339. */
  before: string;
  /** Limits the returned results to logs newer than the specified date. This can be a date string 2019-04-30 (interpreted in UTC) or an absolute timestamp that conforms to RFC3339. */
  since: string;
  id?: { not?: string[] };
  actionResult?: { not?: ("success" | "failure" | (string & {}))[] };
  actionType?: {
    not?: ("create" | "delete" | "view" | "update" | (string & {}))[];
  };
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
  actorEmail?: { not?: string[] };
  actorId?: { not?: string[] };
  actorIpAddress?: { not?: string[] };
  actorTokenId?: { not?: string[] };
  actorTokenName?: { not?: string[] };
  actorType?: {
    not?: ("cloudflare_admin" | "system" | "user" | (string & {}))[];
  };
  /** Sets sorting order. */
  direction?: "desc" | "asc" | (string & {});
  /** The number limits the objects to return. The cursor attribute may be used to iterate over the next batch of objects if there are more than the limit. */
  limit?: number;
  rawCfRayId?: { not?: string[] };
  rawMethod?: { not?: string[] };
  rawStatusCode?: { not?: number[] };
  rawUri?: { not?: string[] };
  resourceId?: { not?: string[] };
  resourceProduct?: { not?: string[] };
  resourceScope?: { not?: "organizations"[] };
  resourceType?: { not?: string[] };
}

export const ListLogAuditsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      organizationId: Schema.String.pipe(T.HttpPath("organizationId")),
      cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
      before: Schema.String.pipe(T.HttpQuery("before")),
      since: Schema.String.pipe(T.HttpQuery("since")),
      id: Schema.optional(
        Schema.Struct({
          not: Schema.optional(Schema.Array(Schema.String)),
        }),
      ).pipe(T.HttpQuery("id")),
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
                Schema.Literals(["cloudflare_admin", "system", "user"]),
                Schema.String,
              ]),
            ),
          ),
        }),
      ).pipe(T.HttpQuery("actor_type")),
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
          not: Schema.optional(Schema.Array(Schema.Literal("organizations"))),
        }),
      ).pipe(T.HttpQuery("resource_scope")),
      resourceType: Schema.optional(
        Schema.Struct({
          not: Schema.optional(Schema.Array(Schema.String)),
        }),
      ).pipe(T.HttpQuery("resource_type")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/organizations/{organizationId}/logs/audit",
      }),
    ),
) as unknown as Schema.Codec<ListLogAuditsRequest>;

export interface ListLogAuditsResponse {
  result: {
    id?: string | null;
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
      type?: "cloudflare_admin" | "system" | "user" | (string & {}) | null;
    } | null;
    organization?: { id?: string | null } | null;
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
  }[];
  resultInfo?: { cursors?: { after?: string | null } | null } | null;
}

export const ListLogAuditsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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
// Organization
// =============================================================================

export interface GetOrganizationRequest {
  organizationId: string;
}

export const GetOrganizationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      organizationId: Schema.String.pipe(T.HttpPath("organizationId")),
    }).pipe(T.Http({ method: "GET", path: "/organizations/{organizationId}" })),
  ) as unknown as Schema.Codec<GetOrganizationRequest>;

export interface GetOrganizationResponse {
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

export const GetOrganizationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createTime: Schema.String,
      meta: Meta,
      name: Schema.String,
      parent: Schema.optional(Schema.Union([Parent, Schema.Null])),
      profile: Schema.optional(
        Schema.Union([OrganizationProfile, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createTime: "create_time",
          meta: "meta",
          name: "name",
          parent: "parent",
          profile: "profile",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetOrganizationResponse>;

export type GetOrganizationError =
  | DefaultErrors
  | OrganizationNotFound
  | Forbidden;

export const getOrganization: API.OperationMethod<
  GetOrganizationRequest,
  GetOrganizationResponse,
  GetOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationRequest,
  output: GetOrganizationResponse,
  errors: [OrganizationNotFound, Forbidden],
}));

export interface ListOrganizationsRequest {
  /** Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value. */
  id?: string[];
  containing?: { account?: string; organization?: string; user?: string };
  name?: { contains?: string; endsWith?: string; startsWith?: string };
  /** The amount of items to return. Defaults to 10. */
  pageSize?: number;
  /** An opaque token returned from the last list response that when provided will retrieve the next page.  Parameters used to filter the retrieved list must remain in subsequent requests with a page token. */
  pageToken?: string;
  parent?: { id?: unknown };
}

export const ListOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("id")),
      containing: Schema.optional(
        Schema.Struct({
          account: Schema.optional(Schema.String),
          organization: Schema.optional(Schema.String),
          user: Schema.optional(Schema.String),
        }),
      ).pipe(T.HttpQuery("containing")),
      name: Schema.optional(
        Schema.Struct({
          contains: Schema.optional(Schema.String),
          endsWith: Schema.optional(Schema.String),
          startsWith: Schema.optional(Schema.String),
        }),
      ).pipe(T.HttpQuery("name")),
      pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("page_size")),
      pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("page_token")),
      parent: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.Unknown),
        }),
      ).pipe(T.HttpQuery("parent")),
    }).pipe(T.Http({ method: "GET", path: "/organizations" })),
  ) as unknown as Schema.Codec<ListOrganizationsRequest>;

export interface ListOrganizationsResponse {
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

export const ListOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListOrganizationsResponseResult),
    }),
  ) as unknown as Schema.Codec<ListOrganizationsResponse>;

export type ListOrganizationsError = DefaultErrors | Forbidden;

export const listOrganizations: API.PaginatedOperationMethod<
  ListOrganizationsRequest,
  ListOrganizationsResponse,
  ListOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsRequest,
  output: ListOrganizationsResponse,
  errors: [Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateOrganizationRequest {
  name: string;
  parent?: { id: string };
  profile?: {
    businessAddress: string;
    businessEmail: string;
    businessName: string;
    businessPhone: string;
    externalMetadata: string;
  };
}

export const CreateOrganizationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
      parent: Schema.optional(Parent2),
      profile: Schema.optional(OrganizationProfile),
    }).pipe(T.Http({ method: "POST", path: "/organizations" })),
  ) as unknown as Schema.Codec<CreateOrganizationRequest>;

export interface CreateOrganizationResponse {
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

export const CreateOrganizationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createTime: Schema.String,
      meta: Meta,
      name: Schema.String,
      parent: Schema.optional(Schema.Union([Parent, Schema.Null])),
      profile: Schema.optional(
        Schema.Union([OrganizationProfile, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createTime: "create_time",
          meta: "meta",
          name: "name",
          parent: "parent",
          profile: "profile",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateOrganizationResponse>;

export type CreateOrganizationError = DefaultErrors | Forbidden;

export const createOrganization: API.OperationMethod<
  CreateOrganizationRequest,
  CreateOrganizationResponse,
  CreateOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationRequest,
  output: CreateOrganizationResponse,
  errors: [Forbidden],
}));

export interface UpdateOrganizationRequest {
  organizationId: string;
  name: string;
  parent?: { id: string };
  profile?: {
    businessAddress: string;
    businessEmail: string;
    businessName: string;
    businessPhone: string;
    externalMetadata: string;
  };
}

export const UpdateOrganizationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      organizationId: Schema.String.pipe(T.HttpPath("organizationId")),
      name: Schema.String,
      parent: Schema.optional(Parent2),
      profile: Schema.optional(OrganizationProfile),
    }).pipe(T.Http({ method: "PUT", path: "/organizations/{organizationId}" })),
  ) as unknown as Schema.Codec<UpdateOrganizationRequest>;

export interface UpdateOrganizationResponse {
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

export const UpdateOrganizationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createTime: Schema.String,
      meta: Meta,
      name: Schema.String,
      parent: Schema.optional(Schema.Union([Parent, Schema.Null])),
      profile: Schema.optional(
        Schema.Union([OrganizationProfile, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createTime: "create_time",
          meta: "meta",
          name: "name",
          parent: "parent",
          profile: "profile",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateOrganizationResponse>;

export type UpdateOrganizationError =
  | DefaultErrors
  | OrganizationNotFound
  | Forbidden;

export const updateOrganization: API.OperationMethod<
  UpdateOrganizationRequest,
  UpdateOrganizationResponse,
  UpdateOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateOrganizationRequest,
  output: UpdateOrganizationResponse,
  errors: [OrganizationNotFound, Forbidden],
}));

export interface DeleteOrganizationRequest {
  organizationId: string;
}

export const DeleteOrganizationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      organizationId: Schema.String.pipe(T.HttpPath("organizationId")),
    }).pipe(
      T.Http({ method: "DELETE", path: "/organizations/{organizationId}" }),
    ),
  ) as unknown as Schema.Codec<DeleteOrganizationRequest>;

export interface DeleteOrganizationResponse {
  id: string;
}

export const DeleteOrganizationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteOrganizationResponse>;

export type DeleteOrganizationError =
  | DefaultErrors
  | OrganizationNotFound
  | Forbidden;

export const deleteOrganization: API.OperationMethod<
  DeleteOrganizationRequest,
  DeleteOrganizationResponse,
  DeleteOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationRequest,
  output: DeleteOrganizationResponse,
  errors: [OrganizationNotFound, Forbidden],
}));

// =============================================================================
// OrganizationProfile
// =============================================================================

export interface GetOrganizationProfileRequest {
  organizationId: string;
}

export const GetOrganizationProfileRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      organizationId: Schema.String.pipe(T.HttpPath("organizationId")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/organizations/{organizationId}/profile",
      }),
    ),
  ) as unknown as Schema.Codec<GetOrganizationProfileRequest>;

export interface GetOrganizationProfileResponse {
  businessAddress: string;
  businessEmail: string;
  businessName: string;
  businessPhone: string;
  externalMetadata: string;
}

export const GetOrganizationProfileResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      businessAddress: Schema.String,
      businessEmail: Schema.String,
      businessName: Schema.String,
      businessPhone: Schema.String,
      externalMetadata: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          businessAddress: "business_address",
          businessEmail: "business_email",
          businessName: "business_name",
          businessPhone: "business_phone",
          externalMetadata: "external_metadata",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetOrganizationProfileResponse>;

export type GetOrganizationProfileError =
  | DefaultErrors
  | OrganizationNotFound
  | Forbidden;

export const getOrganizationProfile: API.OperationMethod<
  GetOrganizationProfileRequest,
  GetOrganizationProfileResponse,
  GetOrganizationProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationProfileRequest,
  output: GetOrganizationProfileResponse,
  errors: [OrganizationNotFound, Forbidden],
}));

export interface PutOrganizationProfileRequest {
  organizationId: string;
  businessAddress: string;
  businessEmail: string;
  businessName: string;
  businessPhone: string;
  externalMetadata: string;
}

export const PutOrganizationProfileRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      organizationId: Schema.String.pipe(T.HttpPath("organizationId")),
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
      T.Http({
        method: "PUT",
        path: "/organizations/{organizationId}/profile",
      }),
    ),
  ) as unknown as Schema.Codec<PutOrganizationProfileRequest>;

export type PutOrganizationProfileResponse = unknown;

export const PutOrganizationProfileResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
    () => Schema.Unknown,
  ) as unknown as Schema.Codec<PutOrganizationProfileResponse>;

export type PutOrganizationProfileError =
  | DefaultErrors
  | OrganizationNotFound
  | Forbidden;

export const putOrganizationProfile: API.OperationMethod<
  PutOrganizationProfileRequest,
  PutOrganizationProfileResponse,
  PutOrganizationProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutOrganizationProfileRequest,
  output: PutOrganizationProfileResponse,
  errors: [OrganizationNotFound, Forbidden],
}));
