import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const OrganizationAccessTokenslistInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.optional(Schema.String),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    sorting: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v1/organization-access-tokens/" }));
export type OrganizationAccessTokenslistInput =
  typeof OrganizationAccessTokenslistInput.Type;

// Output Schema
export const OrganizationAccessTokenslistOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
        created_at: Schema.String,
        modified_at: Schema.Unknown,
        id: Schema.String,
        scopes: Schema.Array(
          Schema.Literals([
            "openid",
            "profile",
            "email",
            "user:read",
            "user:write",
            "web:read",
            "web:write",
            "organizations:read",
            "organizations:write",
            "custom_fields:read",
            "custom_fields:write",
            "discounts:read",
            "discounts:write",
            "checkout_links:read",
            "checkout_links:write",
            "checkouts:read",
            "checkouts:write",
            "transactions:read",
            "transactions:write",
            "payouts:read",
            "payouts:write",
            "products:read",
            "products:write",
            "benefits:read",
            "benefits:write",
            "events:read",
            "events:write",
            "meters:read",
            "meters:write",
            "files:read",
            "files:write",
            "subscriptions:read",
            "subscriptions:write",
            "customers:read",
            "customers:write",
            "members:read",
            "members:write",
            "wallets:read",
            "wallets:write",
            "disputes:read",
            "customer_meters:read",
            "customer_sessions:write",
            "member_sessions:write",
            "customer_seats:read",
            "customer_seats:write",
            "orders:read",
            "orders:write",
            "refunds:read",
            "refunds:write",
            "payments:read",
            "metrics:read",
            "metrics:write",
            "webhooks:read",
            "webhooks:write",
            "license_keys:read",
            "license_keys:write",
            "customer_portal:read",
            "customer_portal:write",
            "notifications:read",
            "notifications:write",
            "notification_recipients:read",
            "notification_recipients:write",
            "organization_access_tokens:read",
            "organization_access_tokens:write",
          ]),
        ),
        expires_at: Schema.Unknown,
        comment: Schema.String,
        last_used_at: Schema.Unknown,
        organization_id: Schema.String,
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  });
export type OrganizationAccessTokenslistOutput =
  typeof OrganizationAccessTokenslistOutput.Type;

// The operation
/**
 * List
 *
 * List organization access tokens.
 * **Scopes**: `organization_access_tokens:read` `organization_access_tokens:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const organizationAccessTokenslist =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationAccessTokenslistInput,
    outputSchema: OrganizationAccessTokenslistOutput,
    errors: [UnprocessableEntity] as const,
  }));
