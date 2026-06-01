/**
 * Cloudflare ORGANIZATIONS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service organizations
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// BillingUsage
// =============================================================================

export interface GetBillingUsageRequest {
  organizationId: string;
}

export const GetBillingUsageRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    organizationId: Schema.String.pipe(T.HttpPath("organizationId")),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organizationId}/billable/usage",
  }),
) as unknown as Schema.Schema<GetBillingUsageRequest>;

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

export const GetBillingUsageResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<GetBillingUsageResponse>;

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

export const ListLogAuditsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  T.Http({ method: "GET", path: "/organizations/{organizationId}/logs/audit" }),
) as unknown as Schema.Schema<ListLogAuditsRequest>;

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

export const ListLogAuditsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([
          Schema.Struct({
            description: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            result: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            time: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          }),
          Schema.Null,
        ]),
      ),
      actor: Schema.optional(
        Schema.Union([
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
            ipAddress: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            tokenId: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            tokenName: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
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
          Schema.Null,
        ]),
      ),
      organization: Schema.optional(
        Schema.Union([
          Schema.Struct({
            id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          }),
          Schema.Null,
        ]),
      ),
      raw: Schema.optional(
        Schema.Union([
          Schema.Struct({
            cfRayId: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            method: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            statusCode: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            uri: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            userAgent: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              cfRayId: "cf_ray_id",
              method: "method",
              statusCode: "status_code",
              uri: "uri",
              userAgent: "user_agent",
            }),
          ),
          Schema.Null,
        ]),
      ),
      resource: Schema.optional(
        Schema.Union([
          Schema.Struct({
            id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            product: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            request: Schema.optional(
              Schema.Union([Schema.Unknown, Schema.Null]),
            ),
            response: Schema.optional(
              Schema.Union([Schema.Unknown, Schema.Null]),
            ),
            scope: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
            type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          }),
          Schema.Null,
        ]),
      ),
    }),
  ),
  resultInfo: Schema.optional(
    Schema.Union([
      Schema.Struct({
        cursors: Schema.optional(
          Schema.Union([
            Schema.Struct({
              after: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }),
            Schema.Null,
          ]),
        ),
      }),
      Schema.Null,
    ]),
  ),
}).pipe(
  Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
) as unknown as Schema.Schema<ListLogAuditsResponse>;

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

export const GetOrganizationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    organizationId: Schema.String.pipe(T.HttpPath("organizationId")),
  },
).pipe(
  T.Http({ method: "GET", path: "/organizations/{organizationId}" }),
) as unknown as Schema.Schema<GetOrganizationRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    createTime: Schema.String,
    meta: Schema.Struct({
      flags: Schema.optional(
        Schema.Union([
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
          Schema.Null,
        ]),
      ),
      managedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(Schema.encodeKeys({ flags: "flags", managedBy: "managed_by" })),
    name: Schema.String,
    parent: Schema.optional(
      Schema.Union([
        Schema.Struct({
          id: Schema.String,
          name: Schema.String,
        }),
        Schema.Null,
      ]),
    ),
    profile: Schema.optional(
      Schema.Union([
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
        Schema.Null,
      ]),
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<GetOrganizationResponse>;

export type GetOrganizationError = DefaultErrors;

export const getOrganization: API.OperationMethod<
  GetOrganizationRequest,
  GetOrganizationResponse,
  GetOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationRequest,
  output: GetOrganizationResponse,
  errors: [],
}));

export interface ListOrganizationsRequest {}

export const ListOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/organizations" }),
  ) as unknown as Schema.Schema<ListOrganizationsRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        createTime: Schema.String,
        meta: Schema.Struct({
          flags: Schema.optional(
            Schema.Union([
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
              Schema.Null,
            ]),
          ),
          managedBy: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(Schema.encodeKeys({ flags: "flags", managedBy: "managed_by" })),
        name: Schema.String,
        parent: Schema.optional(
          Schema.Union([
            Schema.Struct({
              id: Schema.String,
              name: Schema.String,
            }),
            Schema.Null,
          ]),
        ),
        profile: Schema.optional(
          Schema.Union([
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
            Schema.Null,
          ]),
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
    ),
  }) as unknown as Schema.Schema<ListOrganizationsResponse>;

export type ListOrganizationsError = DefaultErrors;

export const listOrganizations: API.PaginatedOperationMethod<
  ListOrganizationsRequest,
  ListOrganizationsResponse,
  ListOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsRequest,
  output: ListOrganizationsResponse,
  errors: [],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    parent: Schema.optional(
      Schema.Struct({
        id: Schema.String,
      }),
    ),
    profile: Schema.optional(
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
    ),
  }).pipe(
    T.Http({ method: "POST", path: "/organizations" }),
  ) as unknown as Schema.Schema<CreateOrganizationRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    createTime: Schema.String,
    meta: Schema.Struct({
      flags: Schema.optional(
        Schema.Union([
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
          Schema.Null,
        ]),
      ),
      managedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(Schema.encodeKeys({ flags: "flags", managedBy: "managed_by" })),
    name: Schema.String,
    parent: Schema.optional(
      Schema.Union([
        Schema.Struct({
          id: Schema.String,
          name: Schema.String,
        }),
        Schema.Null,
      ]),
    ),
    profile: Schema.optional(
      Schema.Union([
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
        Schema.Null,
      ]),
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<CreateOrganizationResponse>;

export type CreateOrganizationError = DefaultErrors;

export const createOrganization: API.OperationMethod<
  CreateOrganizationRequest,
  CreateOrganizationResponse,
  CreateOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationRequest,
  output: CreateOrganizationResponse,
  errors: [],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.HttpPath("organizationId")),
    name: Schema.String,
    parent: Schema.optional(
      Schema.Struct({
        id: Schema.String,
      }),
    ),
    profile: Schema.optional(
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
    ),
  }).pipe(
    T.Http({ method: "PUT", path: "/organizations/{organizationId}" }),
  ) as unknown as Schema.Schema<UpdateOrganizationRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    createTime: Schema.String,
    meta: Schema.Struct({
      flags: Schema.optional(
        Schema.Union([
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
          Schema.Null,
        ]),
      ),
      managedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(Schema.encodeKeys({ flags: "flags", managedBy: "managed_by" })),
    name: Schema.String,
    parent: Schema.optional(
      Schema.Union([
        Schema.Struct({
          id: Schema.String,
          name: Schema.String,
        }),
        Schema.Null,
      ]),
    ),
    profile: Schema.optional(
      Schema.Union([
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
        Schema.Null,
      ]),
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<UpdateOrganizationResponse>;

export type UpdateOrganizationError = DefaultErrors;

export const updateOrganization: API.OperationMethod<
  UpdateOrganizationRequest,
  UpdateOrganizationResponse,
  UpdateOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateOrganizationRequest,
  output: UpdateOrganizationResponse,
  errors: [],
}));

export interface DeleteOrganizationRequest {
  organizationId: string;
}

export const DeleteOrganizationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.HttpPath("organizationId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "/organizations/{organizationId}" }),
  ) as unknown as Schema.Schema<DeleteOrganizationRequest>;

export interface DeleteOrganizationResponse {
  id: string;
}

export const DeleteOrganizationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DeleteOrganizationResponse>;

export type DeleteOrganizationError = DefaultErrors;

export const deleteOrganization: API.OperationMethod<
  DeleteOrganizationRequest,
  DeleteOrganizationResponse,
  DeleteOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationRequest,
  output: DeleteOrganizationResponse,
  errors: [],
}));

// =============================================================================
// OrganizationProfile
// =============================================================================

export interface GetOrganizationProfileRequest {
  organizationId: string;
}

export const GetOrganizationProfileRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.HttpPath("organizationId")),
  }).pipe(
    T.Http({ method: "GET", path: "/organizations/{organizationId}/profile" }),
  ) as unknown as Schema.Schema<GetOrganizationProfileRequest>;

export interface GetOrganizationProfileResponse {
  businessAddress: string;
  businessEmail: string;
  businessName: string;
  businessPhone: string;
  externalMetadata: string;
}

export const GetOrganizationProfileResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<GetOrganizationProfileResponse>;

export type GetOrganizationProfileError = DefaultErrors;

export const getOrganizationProfile: API.OperationMethod<
  GetOrganizationProfileRequest,
  GetOrganizationProfileResponse,
  GetOrganizationProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationProfileRequest,
  output: GetOrganizationProfileResponse,
  errors: [],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    T.Http({ method: "PUT", path: "/organizations/{organizationId}/profile" }),
  ) as unknown as Schema.Schema<PutOrganizationProfileRequest>;

export type PutOrganizationProfileResponse = unknown;

export const PutOrganizationProfileResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Schema<PutOrganizationProfileResponse>;

export type PutOrganizationProfileError = DefaultErrors;

export const putOrganizationProfile: API.OperationMethod<
  PutOrganizationProfileRequest,
  PutOrganizationProfileResponse,
  PutOrganizationProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutOrganizationProfileRequest,
  output: PutOrganizationProfileResponse,
  errors: [],
}));
