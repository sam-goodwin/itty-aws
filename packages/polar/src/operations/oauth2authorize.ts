import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface Oauth2authorizeInput {}
export const Oauth2authorizeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "/v1/oauth2/authorize" }),
) as unknown as Schema.Codec<Oauth2authorizeInput>;

// Output Schema
export type Oauth2authorizeOutput =
  | {
      client: {
        created_at: string;
        modified_at: string | null;
        client_id: string;
        client_name: string | null;
        client_uri: string | null;
        logo_uri: string | null;
        tos_uri: string | null;
        policy_uri: string | null;
      };
      sub_type: string;
      sub: { id: string; email: string; avatar_url: string | null } | null;
      scopes: ReadonlyArray<
        | "openid"
        | "profile"
        | "email"
        | "user:read"
        | "user:write"
        | "organizations:read"
        | "organizations:write"
        | "custom_fields:read"
        | "custom_fields:write"
        | "discounts:read"
        | "discounts:write"
        | "checkout_links:read"
        | "checkout_links:write"
        | "checkouts:read"
        | "checkouts:write"
        | "transactions:read"
        | "transactions:write"
        | "payouts:read"
        | "payouts:write"
        | "products:read"
        | "products:write"
        | "benefits:read"
        | "benefits:write"
        | "events:read"
        | "events:write"
        | "meters:read"
        | "meters:write"
        | "files:read"
        | "files:write"
        | "subscriptions:read"
        | "subscriptions:write"
        | "customers:read"
        | "customers:write"
        | "members:read"
        | "members:write"
        | "wallets:read"
        | "wallets:write"
        | "disputes:read"
        | "disputes:write"
        | "customer_meters:read"
        | "customer_sessions:write"
        | "member_sessions:write"
        | "customer_seats:read"
        | "customer_seats:write"
        | "orders:read"
        | "orders:write"
        | "refunds:read"
        | "refunds:write"
        | "payments:read"
        | "metrics:read"
        | "metrics:write"
        | "webhooks:read"
        | "webhooks:write"
        | "license_keys:read"
        | "license_keys:write"
        | "customer_portal:read"
        | "customer_portal:write"
        | "notifications:read"
        | "notifications:write"
        | "notification_recipients:read"
        | "notification_recipients:write"
        | "organization_access_tokens:read"
        | "organization_access_tokens:write"
      >;
      organizations: ReadonlyArray<{
        id: string;
        slug: string;
        avatar_url: string | null;
      }>;
      requires_single_organization?: boolean;
      scope_display_names?: Record<string, string>;
    }
  | {
      client: {
        created_at: string;
        modified_at: string | null;
        client_id: string;
        client_name: string | null;
        client_uri: string | null;
        logo_uri: string | null;
        tos_uri: string | null;
        policy_uri: string | null;
      };
      sub_type: string;
      sub: { id: string; slug: string; avatar_url: string | null } | null;
      scopes: ReadonlyArray<
        | "openid"
        | "profile"
        | "email"
        | "user:read"
        | "user:write"
        | "organizations:read"
        | "organizations:write"
        | "custom_fields:read"
        | "custom_fields:write"
        | "discounts:read"
        | "discounts:write"
        | "checkout_links:read"
        | "checkout_links:write"
        | "checkouts:read"
        | "checkouts:write"
        | "transactions:read"
        | "transactions:write"
        | "payouts:read"
        | "payouts:write"
        | "products:read"
        | "products:write"
        | "benefits:read"
        | "benefits:write"
        | "events:read"
        | "events:write"
        | "meters:read"
        | "meters:write"
        | "files:read"
        | "files:write"
        | "subscriptions:read"
        | "subscriptions:write"
        | "customers:read"
        | "customers:write"
        | "members:read"
        | "members:write"
        | "wallets:read"
        | "wallets:write"
        | "disputes:read"
        | "disputes:write"
        | "customer_meters:read"
        | "customer_sessions:write"
        | "member_sessions:write"
        | "customer_seats:read"
        | "customer_seats:write"
        | "orders:read"
        | "orders:write"
        | "refunds:read"
        | "refunds:write"
        | "payments:read"
        | "metrics:read"
        | "metrics:write"
        | "webhooks:read"
        | "webhooks:write"
        | "license_keys:read"
        | "license_keys:write"
        | "customer_portal:read"
        | "customer_portal:write"
        | "notifications:read"
        | "notifications:write"
        | "notification_recipients:read"
        | "notification_recipients:write"
        | "organization_access_tokens:read"
        | "organization_access_tokens:write"
      >;
      organizations: ReadonlyArray<{
        id: string;
        slug: string;
        avatar_url: string | null;
      }>;
      requires_single_organization?: boolean;
      scope_display_names?: Record<string, string>;
    };
export const Oauth2authorizeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<Oauth2authorizeOutput>;

// The operation
/**
 * Authorize
 */
export const oauth2authorize = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: Oauth2authorizeInput,
  outputSchema: Oauth2authorizeOutput,
}));
