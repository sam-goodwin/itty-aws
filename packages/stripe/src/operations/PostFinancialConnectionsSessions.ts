import * as Schema from "effect/Schema";
import {
  bank_connections_resource_link_account_session_filtersSchema,
  financial_connections_accountSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputNullableString } from "../sensitive.ts";

// Input Schema
export const PostFinancialConnectionsSessionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_holder: Schema.Struct({
      account: Schema.optional(Schema.String),
      customer: Schema.optional(Schema.String),
      customer_account: Schema.optional(Schema.String),
      type: Schema.Literals(["account", "customer"]),
    }),
    expand: Schema.optional(Schema.Array(Schema.String)),
    filters: Schema.optional(
      Schema.Struct({
        account_subcategories: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "checking",
              "credit_card",
              "line_of_credit",
              "mortgage",
              "savings",
            ]),
          ),
        ),
        countries: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    permissions: Schema.Array(
      Schema.Literals([
        "balances",
        "ownership",
        "payment_method",
        "transactions",
      ]),
    ),
    prefetch: Schema.optional(
      Schema.Array(Schema.Literals(["balances", "ownership", "transactions"])),
    ),
    return_url: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/financial_connections/sessions",
      contentType: "form-urlencoded",
    }),
  );
export type PostFinancialConnectionsSessionsInput =
  typeof PostFinancialConnectionsSessionsInput.Type;

// Output Schema
export const PostFinancialConnectionsSessionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_holder: Schema.Unknown,
    accounts: Schema.Struct({
      data: Schema.Array(
        Schema.suspend(() => financial_connections_accountSchema),
      ),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
    client_secret: SensitiveOutputNullableString,
    filters: Schema.optional(
      Schema.suspend(
        () => bank_connections_resource_link_account_session_filtersSchema,
      ),
    ),
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["financial_connections.session"]),
    permissions: Schema.Array(
      Schema.Literals([
        "balances",
        "ownership",
        "payment_method",
        "transactions",
      ]),
    ),
    prefetch: Schema.NullOr(
      Schema.Array(Schema.Literals(["balances", "ownership", "transactions"])),
    ),
    return_url: Schema.optional(Schema.String),
  });
export type PostFinancialConnectionsSessionsOutput =
  typeof PostFinancialConnectionsSessionsOutput.Type;

// The operation
/**
 * Create a Session
 *
 * <p>To launch the Financial Connections authorization flow, create a <code>Session</code>. The session’s <code>client_secret</code> can be used to launch the flow using Stripe.js.</p>
 */
export const PostFinancialConnectionsSessions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostFinancialConnectionsSessionsInput,
    outputSchema: PostFinancialConnectionsSessionsOutput,
  }));
