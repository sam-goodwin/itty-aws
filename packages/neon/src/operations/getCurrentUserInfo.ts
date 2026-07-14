import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetCurrentUserInfoInput {}
export const GetCurrentUserInfoInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/users/me" }),
  ) as unknown as Schema.Codec<GetCurrentUserInfoInput>;

// Output Schema
export interface GetCurrentUserInfoOutput {
  active_seconds_limit: number;
  billing_account?: {
    state: "UNKNOWN" | "active" | "suspended" | "deactivated" | "deleted";
    payment_source: {
      type: string;
      card?: {
        last4: string;
        brand?:
          | "amex"
          | "diners"
          | "discover"
          | "jcb"
          | "mastercard"
          | "unionpay"
          | "unknown"
          | "visa";
        exp_month?: number;
        exp_year?: number;
      };
    };
    subscription_type:
      | "UNKNOWN"
      | "direct_sales"
      | "direct_sales_v3"
      | "aws_marketplace"
      | "free_v2"
      | "free_v3"
      | "launch"
      | "launch_v3"
      | "scale"
      | "scale_v3"
      | "business"
      | "vercel_pg_legacy";
    payment_method:
      | "UNKNOWN"
      | "none"
      | "stripe"
      | "direct_payment"
      | "aws_mp"
      | "azure_mp"
      | "vercel_mp"
      | "staff"
      | "trial"
      | "sponsorship"
      | "shared_payment_token";
    quota_reset_at_last: string;
    name: string;
    email: string;
    address_city: string;
    address_country: string;
    address_country_name?: string;
    address_line1: string;
    address_line2: string;
    address_postal_code: string;
    address_state: string;
    orb_portal_url?: string;
    tax_id?: string;
    tax_id_type?: string;
    plan_details?: { name: string; version?: { major: number; minor: number } };
    spending_limit_cents?: number | null;
  };
  auth_accounts: {
    email: string;
    image: string;
    login: string;
    name: string;
    provider:
      | "github"
      | "google"
      | "hasura"
      | "microsoft"
      | "microsoftv2"
      | "vercelmp"
      | "keycloak";
  }[];
  email: string;
  id: string;
  image: string;
  login: string;
  name: string;
  last_name: string;
  projects_limit: number;
  branches_limit: number;
  max_autoscaling_limit: number;
  compute_seconds_limit?: number;
  plan: string;
}
export const GetCurrentUserInfoOutput =
  /*@__PURE__*/ Schema.Struct({
    active_seconds_limit: Schema.Number,
    billing_account: Schema.optional(
      Schema.Struct({
        state: Schema.Literals([
          "UNKNOWN",
          "active",
          "suspended",
          "deactivated",
          "deleted",
        ]),
        payment_source: Schema.Struct({
          type: Schema.String,
          card: Schema.optional(
            Schema.Struct({
              last4: Schema.String,
              brand: Schema.optional(
                Schema.Literals([
                  "amex",
                  "diners",
                  "discover",
                  "jcb",
                  "mastercard",
                  "unionpay",
                  "unknown",
                  "visa",
                ]),
              ),
              exp_month: Schema.optional(Schema.Number),
              exp_year: Schema.optional(Schema.Number),
            }),
          ),
        }),
        subscription_type: Schema.Literals([
          "UNKNOWN",
          "direct_sales",
          "direct_sales_v3",
          "aws_marketplace",
          "free_v2",
          "free_v3",
          "launch",
          "launch_v3",
          "scale",
          "scale_v3",
          "business",
          "vercel_pg_legacy",
        ]),
        payment_method: Schema.Literals([
          "UNKNOWN",
          "none",
          "stripe",
          "direct_payment",
          "aws_mp",
          "azure_mp",
          "vercel_mp",
          "staff",
          "trial",
          "sponsorship",
          "shared_payment_token",
        ]),
        quota_reset_at_last: Schema.String,
        name: Schema.String,
        email: Schema.String,
        address_city: Schema.String,
        address_country: Schema.String,
        address_country_name: Schema.optional(Schema.String),
        address_line1: Schema.String,
        address_line2: Schema.String,
        address_postal_code: Schema.String,
        address_state: Schema.String,
        orb_portal_url: Schema.optional(Schema.String),
        tax_id: Schema.optional(Schema.String),
        tax_id_type: Schema.optional(Schema.String),
        plan_details: Schema.optional(
          Schema.Struct({
            name: Schema.String,
            version: Schema.optional(
              Schema.Struct({
                major: Schema.Number,
                minor: Schema.Number,
              }),
            ),
          }),
        ),
        spending_limit_cents: Schema.optional(Schema.NullOr(Schema.Number)),
      }),
    ),
    auth_accounts: Schema.Array(
      Schema.Struct({
        email: Schema.String,
        image: Schema.String,
        login: Schema.String,
        name: Schema.String,
        provider: Schema.Literals([
          "github",
          "google",
          "hasura",
          "microsoft",
          "microsoftv2",
          "vercelmp",
          "keycloak",
        ]),
      }),
    ),
    email: Schema.String,
    id: Schema.String,
    image: Schema.String,
    login: Schema.String,
    name: Schema.String,
    last_name: Schema.String,
    projects_limit: Schema.Number,
    branches_limit: Schema.Number,
    max_autoscaling_limit: Schema.Number,
    compute_seconds_limit: Schema.optional(Schema.Number),
    plan: Schema.String,
  }) as unknown as Schema.Codec<GetCurrentUserInfoOutput>;

// The operation
/**
 * Retrieve current user details
 *
 * Retrieves information about the currently authenticated Neon user,
 * including account identifiers, plan details, and linked auth accounts.
 */
export const getCurrentUserInfo = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetCurrentUserInfoInput,
  outputSchema: GetCurrentUserInfoOutput,
}));
