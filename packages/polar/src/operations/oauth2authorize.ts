import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const Oauth2authorizeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v1/oauth2/authorize" }));
export type Oauth2authorizeInput = typeof Oauth2authorizeInput.Type;

// Output Schema
export const Oauth2authorizeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  client: Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    client_id: Schema.String,
    client_name: Schema.NullOr(Schema.String),
    client_uri: Schema.NullOr(Schema.String),
    logo_uri: Schema.NullOr(Schema.String),
    tos_uri: Schema.NullOr(Schema.String),
    policy_uri: Schema.NullOr(Schema.String),
  }),
  sub_type: Schema.Literals(["user", "organization"]),
  sub: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
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
  scope_display_names: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  organizations: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
});
export type Oauth2authorizeOutput = typeof Oauth2authorizeOutput.Type;

// The operation
/**
 * Authorize
 */
export const oauth2authorize = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: Oauth2authorizeInput,
  outputSchema: Oauth2authorizeOutput,
}));
